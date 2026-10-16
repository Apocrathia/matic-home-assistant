$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$nvdaVersion = '2026.2'
$nvdaSha256 = 'f3f8d29974a88d687b3c4809be192219ec579c5bdabcda5aaf53635288bca824'
$installer = Join-Path $env:RUNNER_TEMP "nvda_$nvdaVersion.exe"
$portable = Join-Path $env:RUNNER_TEMP 'nvda-portable'
$config = Join-Path $env:RUNNER_TEMP 'nvda-config'
$pilotDir = Join-Path $env:RUNNER_TEMP 'windows-at-pilot'
$nodeLog = Join-Path $pilotDir 'node.log'
$nodeError = Join-Path $pilotDir 'node-error.log'
$nodeProcess = $null
$nvdaProcess = $null
$failureReason = $null
$cleanupFailureReason = $null
$result = [ordered]@{
    status = 'UNQUALIFIED'
    candidateSha = $null
    os = [System.Environment]::OSVersion.Version.ToString()
    nvdaVersion = $nvdaVersion
    edgeVersion = $null
    highContrastObserved = $false
    browserForcedColors = $false
    highContrastRestored = $false
    highContrastFlagsRestored = $false
    highContrastSchemeRestored = $false
    highContrastOriginalSchemePresent = $false
    highContrastRestoredSchemePresent = $false
    highContrastOriginalSchemeSha256 = $null
    highContrastRestoredSchemeSha256 = $null
    browserDiagnostics = @()
    browserProcessExitCode = $null
    primaryFailure = $null
    cleanupFailure = $null
    nvdaSignatureVerified = $false
    queuedSpeechObserved = $false
    audibleOutputVerified = $false
    keyboardNavigationObserved = $false
}

Add-Type -TypeDefinition @'
using System;
using System.Runtime.InteropServices;
public static class HighContrastNative {
  [StructLayout(LayoutKind.Sequential, CharSet=CharSet.Auto)]
  public struct HIGHCONTRAST {
    public uint cbSize;
    public uint dwFlags;
    public IntPtr lpszDefaultScheme;
  }
  [DllImport("user32.dll", SetLastError=true, EntryPoint="SystemParametersInfoW")]
  [return: MarshalAs(UnmanagedType.Bool)]
  public static extern bool SystemParametersInfo(uint action, uint param, ref HIGHCONTRAST data, uint flags);
  [DllImport("user32.dll")]
  public static extern void keybd_event(byte key, byte scan, uint flags, UIntPtr extra);
  [DllImport("user32.dll")]
  public static extern IntPtr GetForegroundWindow();
  [DllImport("user32.dll")]
  public static extern uint GetWindowThreadProcessId(IntPtr window, out uint processId);
}
'@

function Send-VirtualKey([byte]$Key) {
    [HighContrastNative]::keybd_event($Key, 0, 0, [UIntPtr]::Zero)
    [HighContrastNative]::keybd_event($Key, 0, 2, [UIntPtr]::Zero)
}

function Wait-ForFile([string]$Path, [int]$TimeoutSeconds = 8) {
    $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
    while ((Get-Date) -lt $deadline) {
        if (Test-Path -LiteralPath $Path) { return $true }
        Start-Sleep -Milliseconds 40
    }
    return $false
}

function Add-CleanupFailure([string]$Reason) {
    if ($script:cleanupFailureReason) { $script:cleanupFailureReason += "; $Reason" }
    else { $script:cleanupFailureReason = $Reason }
}

function Get-HighContrastState {
    $hc = New-Object HighContrastNative+HIGHCONTRAST
    $hc.cbSize = [Runtime.InteropServices.Marshal]::SizeOf($hc)
    if (-not [HighContrastNative]::SystemParametersInfo(0x0042, $hc.cbSize, [ref]$hc, 0)) {
        throw "SystemParametersInfo(SPI_GETHIGHCONTRAST) failed: $([Runtime.InteropServices.Marshal]::GetLastWin32Error())"
    }
    $scheme = if ($hc.lpszDefaultScheme -eq [IntPtr]::Zero) { $null } else { [Runtime.InteropServices.Marshal]::PtrToStringUni($hc.lpszDefaultScheme) }
    return [pscustomobject]@{ Flags = [uint32]$hc.dwFlags; Scheme = $scheme }
}

function Read-HighContrast {
    return (($((Get-HighContrastState).Flags) -band 0x00000001) -ne 0)
}

function Set-HighContrastState([uint32]$Flags, [AllowNull()]$Scheme) {
    $hc = New-Object HighContrastNative+HIGHCONTRAST
    $hc.cbSize = [Runtime.InteropServices.Marshal]::SizeOf($hc)
    $hc.dwFlags = $Flags
    $schemeMemory = [IntPtr]::Zero
    try {
        # Preserve NULL and an empty string as distinct original API values.
        if ($null -ne $Scheme) { $schemeMemory = [Runtime.InteropServices.Marshal]::StringToHGlobalUni($Scheme); $hc.lpszDefaultScheme = $schemeMemory }
        if (-not [HighContrastNative]::SystemParametersInfo(0x0043, $hc.cbSize, [ref]$hc, 0x0002)) {
            throw "SystemParametersInfo(SPI_SETHIGHCONTRAST) failed: $([Runtime.InteropServices.Marshal]::GetLastWin32Error())"
        }
    } finally {
        if ($schemeMemory -ne [IntPtr]::Zero) { [Runtime.InteropServices.Marshal]::FreeHGlobal($schemeMemory) }
    }
}

$originalHighContrastState = Get-HighContrastState
$originalHighContrast = (($originalHighContrastState.Flags -band 0x00000001) -ne 0)
try {
    $result.candidateSha = (& git rev-parse HEAD).Trim()
    Set-HighContrastState ($originalHighContrastState.Flags -bor 0x00000001) $originalHighContrastState.Scheme
    $result.highContrastObserved = Read-HighContrast
    if (-not $result.highContrastObserved) { throw 'Windows did not report HCF_HIGHCONTRASTON after setting it.' }

    Invoke-WebRequest -Uri "https://download.nvaccess.org/releases/stable/nvda_$nvdaVersion.exe" -OutFile $installer
    $actualHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $installer).Hash.ToLowerInvariant()
    if ($actualHash -ne $nvdaSha256) { throw "NVDA SHA-256 mismatch: $actualHash" }
    $signature = Get-AuthenticodeSignature -LiteralPath $installer
    if ($signature.Status -ne 'Valid' -or $signature.SignerCertificate.Subject -notmatch 'NV Access') {
        throw "NVDA Authenticode verification failed (status=$($signature.Status))."
    }
    $result.nvdaSignatureVerified = $true

    New-Item -ItemType Directory -Path $portable,$config,$pilotDir -Force | Out-Null
    $created = Start-Process -FilePath $installer -ArgumentList @('--create-portable-silent', "--portable-path=$portable") -Wait -PassThru
    if ($created.ExitCode -ne 0) { throw "NVDA portable preparation failed: exit $($created.ExitCode)" }
    $nvdaExe = Join-Path $portable 'nvda.exe'
    if (-not (Test-Path -LiteralPath $nvdaExe)) { throw 'NVDA portable executable is missing.' }
    $scratchPlugins = Join-Path $config 'scratchpad/globalPlugins'
    New-Item -ItemType Directory -Path $scratchPlugins -Force | Out-Null
    Copy-Item -LiteralPath 'tests/windows/nvda_speech_probe.py' -Destination (Join-Path $scratchPlugins 'nvda_speech_probe.py')
    @'
[general]
saveConfigurationOnExit = False
showWelcomeDialogAtStartup = False
[development]
enableScratchpadDir = True
[speechViewer]
showSpeechViewerAtStartup = False
[update]
autoCheck = False
startupNotification = False
allowUsageStats = False
askedAllowUsageStats = True
[addonStore]
automaticUpdates = disabled
[remote]
enabled = False
'@ | Set-Content -LiteralPath (Join-Path $config 'nvda.ini') -Encoding utf8

    $phaseFile = Join-Path $pilotDir 'phase.json'
    $eventFile = Join-Path $pilotDir 'events.jsonl'
    $boundaryFile = Join-Path $pilotDir 'key-boundaries.jsonl'
    Set-Content -LiteralPath $boundaryFile -Value '' -NoNewline -Encoding utf8
    $env:NVDA_PILOT_PHASE_FILE = $phaseFile
    $env:NVDA_PILOT_EVENT_FILE = $eventFile
    $env:NVDA_PILOT_DIR = $pilotDir
    $nvdaProcess = Start-Process -FilePath $nvdaExe -ArgumentList @('--minimal','--no-logging','--config-path', $config) -PassThru
    $result.nvdaPid = $nvdaProcess.Id
    $env:NVDA_PILOT_PID = [string]$nvdaProcess.Id
    $pluginReady = $false
    for ($i = 0; $i -lt 100; $i++) {
        if (Test-Path -LiteralPath $eventFile) {
            $pluginReady = (Get-Content -LiteralPath $eventFile -Raw) -match '"kind":"loaded"'
            if ($pluginReady) { break }
        }
        if ($nvdaProcess.HasExited) { throw "NVDA exited during startup (exit $($nvdaProcess.ExitCode))." }
        Start-Sleep -Milliseconds 100
    }
    if (-not $pluginReady) { throw 'NVDA did not load the test-only scratchpad global plugin.' }

    $nodeProcess = Start-Process -FilePath (Get-Command node.exe).Source -ArgumentList @('tests/windows/at-browser-pilot.mjs') `
        -WorkingDirectory (Get-Location).Path -PassThru -RedirectStandardOutput $nodeLog -RedirectStandardError $nodeError
    if (-not (Wait-ForFile (Join-Path $pilotDir 'ready') 45)) { throw 'Headed Edge fixture did not become ready within 45 seconds.' }
    $foregroundPid = [uint32]0
    [void][HighContrastNative]::GetWindowThreadProcessId([HighContrastNative]::GetForegroundWindow(), [ref]$foregroundPid)
    $foreground = Get-Process -Id $foregroundPid -ErrorAction SilentlyContinue
    if (-not $foreground -or $foreground.ProcessName -ne 'msedge') { throw 'Headed Edge is not the foreground desktop application.' }

    $tabFocus = $false
    $tabSpeech = $false
    for ($i = 1; $i -le 8; $i++) {
        $phase = "tab-$i"
        Remove-Item -LiteralPath (Join-Path $pilotDir "armed-$phase"),(Join-Path $pilotDir "ack-$phase") -Force -ErrorAction SilentlyContinue
        @{ phase = $phase } | ConvertTo-Json -Compress | Set-Content -LiteralPath $phaseFile -Encoding utf8
        if (-not (Wait-ForFile (Join-Path $pilotDir "armed-$phase"))) { throw "Probe did not arm keyboard phase $phase." }
        $boundaryNs = ([DateTime]::UtcNow.Ticks - 621355968000000000L) * 100
        Send-VirtualKey 0x09
        (@{ phase = $phase; timeNs = [string]$boundaryNs } | ConvertTo-Json -Compress) | Add-Content -LiteralPath $boundaryFile -Encoding utf8
        Set-Content -LiteralPath (Join-Path $pilotDir 'key-sent') -Value $phase -NoNewline -Encoding utf8
        if (-not (Wait-ForFile (Join-Path $pilotDir "ack-$phase"))) { throw "Browser did not acknowledge keyboard phase $phase." }
        $observationsPath = Join-Path $pilotDir 'browser-observations.jsonl'
        if (Test-Path -LiteralPath $observationsPath) {
            $lastObservation = Get-Content -LiteralPath $observationsPath | Select-Object -Last 1 | ConvertFrom-Json
            if ($lastObservation.focusWithinPanel) {
                $tabFocus = $true
                $phaseEvents = @(Get-Content -LiteralPath $eventFile | ForEach-Object { ConvertFrom-Json $_ } | Where-Object { $_.phase -eq $phase })
                $tabSpeech = @($phaseEvents | Where-Object { $_.kind -eq 'speech' -and $_.focusName }).Count -gt 0
                if ($tabSpeech) { break }
            }
        }
    }

    $phase = 'nvda-report'
    Remove-Item -LiteralPath (Join-Path $pilotDir "armed-$phase"),(Join-Path $pilotDir "ack-$phase") -Force -ErrorAction SilentlyContinue
    @{ phase = $phase } | ConvertTo-Json -Compress | Set-Content -LiteralPath $phaseFile -Encoding utf8
    if (-not (Wait-ForFile (Join-Path $pilotDir "armed-$phase"))) { throw 'Probe did not arm NVDA+Tab report phase.' }
    # Native OS keyboard input: Insert modifier plus Tab invokes NVDA's report-focus command.
    $boundaryNs = ([DateTime]::UtcNow.Ticks - 621355968000000000L) * 100
    [HighContrastNative]::keybd_event(0x2D, 0, 1, [UIntPtr]::Zero)
    Send-VirtualKey 0x09
    [HighContrastNative]::keybd_event(0x2D, 0, 3, [UIntPtr]::Zero)
    (@{ phase = $phase; timeNs = [string]$boundaryNs } | ConvertTo-Json -Compress) | Add-Content -LiteralPath $boundaryFile -Encoding utf8
    Set-Content -LiteralPath (Join-Path $pilotDir 'key-sent') -Value $phase -NoNewline -Encoding utf8
    if (-not (Wait-ForFile (Join-Path $pilotDir "ack-$phase"))) { throw 'Browser did not acknowledge NVDA+Tab report phase.' }
    $nodeProcess.WaitForExit(15000) | Out-Null
    if (-not $nodeProcess.HasExited) { throw 'Browser pilot exceeded its shutdown watchdog.' }
    if ($nodeProcess.ExitCode -ne 0) { throw 'NVDA speech callback and keyboard qualification assertions failed.' }

    $pilot = Get-Content -LiteralPath (Join-Path $pilotDir 'result.json') -Raw | ConvertFrom-Json
    $result.status = [string]$pilot.status
    $result.browserForcedColors = [bool]$pilot.forcedColors
    $result.edgeVersion = [string]$pilot.edgeVersion
    $result.keyboardNavigationObserved = [bool]$pilot.focusEnteredPanel
    $result.queuedSpeechObserved = ([int]$pilot.speechCallbacks -ge 2)
    $result.pluginSourceHash = [string]$pilot.pluginSourceHash
    $result.matchedSyntheticTerms = @($pilot.matchedSyntheticTerms)
    if (-not $tabFocus) { throw 'OS Tab input did not reach a focusable control in the fixture.' }
    if (-not $tabSpeech) { throw 'NVDA did not queue a whitelisted utterance correlated with fixture focus during OS Tab navigation.' }
    if (-not $result.queuedSpeechObserved) { throw 'No NVDA-generated speech callbacks were observed.' }
}
catch {
    $failureReason = $_.Exception.Message
    $result.status = 'UNQUALIFIED'
}
finally {
    foreach ($ownedProcess in @(
        @{ Name = 'Browser'; Process = $nodeProcess; Graceful = $true },
        @{ Name = 'NVDA'; Process = $nvdaProcess; Graceful = $false }
    )) {
        $process = $ownedProcess.Process
        if (-not $process) { continue }
        try {
            $process.Refresh()
            if (-not $process.HasExited -and $ownedProcess.Graceful) {
                Set-Content -LiteralPath (Join-Path $pilotDir 'done') -Value 'stop' -ErrorAction SilentlyContinue
                $process.WaitForExit(5000) | Out-Null
                $process.Refresh()
            }
            if (-not $process.HasExited) {
                $taskkillOutput = & taskkill.exe /PID $process.Id /T /F 2>&1
                $taskkillExitCode = $LASTEXITCODE
                $process.WaitForExit(5000) | Out-Null
                $process.Refresh()
                if (-not $process.HasExited) {
                    $detail = if ($taskkillOutput) { ($taskkillOutput | Out-String).Trim() } else { "taskkill exit $taskkillExitCode" }
                    Add-CleanupFailure "$($ownedProcess.Name) process cleanup failed: $detail; owned process $($process.Id) is still running."
                }
            }
        } catch {
            Add-CleanupFailure "$($ownedProcess.Name) process cleanup failed: $($_.Exception.Message)"
        }
    }
    try {
        Set-HighContrastState $originalHighContrastState.Flags $originalHighContrastState.Scheme
        $restoredHighContrastState = Get-HighContrastState
        $result.highContrastFlagsRestored = ($restoredHighContrastState.Flags -eq $originalHighContrastState.Flags)
        $result.highContrastSchemeRestored = [string]::Equals(
            $restoredHighContrastState.Scheme,
            $originalHighContrastState.Scheme,
            [System.StringComparison]::Ordinal
        )
        $result.highContrastOriginalSchemePresent = ($null -ne $originalHighContrastState.Scheme)
        $result.highContrastRestoredSchemePresent = ($null -ne $restoredHighContrastState.Scheme)
        if ($null -ne $originalHighContrastState.Scheme) {
            $result.highContrastOriginalSchemeSha256 = [Convert]::ToHexString(
                [Security.Cryptography.SHA256]::HashData([Text.Encoding]::Unicode.GetBytes($originalHighContrastState.Scheme))
            ).ToLowerInvariant()
        }
        if ($null -ne $restoredHighContrastState.Scheme) {
            $result.highContrastRestoredSchemeSha256 = [Convert]::ToHexString(
                [Security.Cryptography.SHA256]::HashData([Text.Encoding]::Unicode.GetBytes($restoredHighContrastState.Scheme))
            ).ToLowerInvariant()
        }
        $result.highContrastRestored = $result.highContrastFlagsRestored -and $result.highContrastSchemeRestored
        if (-not $result.highContrastRestored) {
            Add-CleanupFailure "High Contrast restoration mismatch (flagsRestored=$($result.highContrastFlagsRestored), schemeRestored=$($result.highContrastSchemeRestored))."
        }
    } catch {
        $result.highContrastRestored = $false
        Add-CleanupFailure "High Contrast restore/readback failed: $($_.Exception.Message)"
    }
    if ($nodeProcess) {
        try {
            $nodeProcess.Refresh()
            if ($nodeProcess.HasExited) { $result.browserProcessExitCode = $nodeProcess.ExitCode }
        } catch { }
    }
    $diagnosticPath = Join-Path $pilotDir 'diagnostics.jsonl'
    if (Test-Path -LiteralPath $diagnosticPath) {
        $allowedStages = @('startup','edge-launch','gallery-navigation','fixture-navigation','fixture-install','scene-readiness','keyboard-pilot')
        $result.browserDiagnostics = @(
            Get-Content -LiteralPath $diagnosticPath -TotalCount 24 | ForEach-Object {
                try {
                    $entry = $_ | ConvertFrom-Json
                    if ($entry.stage -in $allowedStages -and $entry.event) {
                        $eventName = [string]$entry.event -replace '[^a-z0-9-]', ''
                        $safe = [ordered]@{
                            stage = [string]$entry.stage
                            event = $eventName.Substring(0, [Math]::Min(48, $eventName.Length))
                        }
                        if ($entry.elapsedMs -is [valuetype] -and [long]$entry.elapsedMs -ge 0) { $safe.elapsedMs = [Math]::Min(120000, [long]$entry.elapsedMs) }
                        if ($entry.browserVersion) {
                            $version = [string]$entry.browserVersion -replace '[^0-9A-Za-z ._-]', ''
                            $safe.browserVersion = $version.Substring(0, [Math]::Min(40, $version.Length))
                        }
                        if ($entry.forcedColors -is [bool]) { $safe.forcedColors = [bool]$entry.forcedColors }
                        if ($entry.sceneReady -is [bool]) { $safe.sceneReady = [bool]$entry.sceneReady }
                        if ($entry.errorType) {
                            $errorType = [string]$entry.errorType -replace '[^A-Za-z0-9_.-]', ''
                            $safe.errorType = $errorType.Substring(0, [Math]::Min(40, $errorType.Length))
                        }
                        if ($entry.error) {
                            $safeError = [string]$entry.error
                            $safeError = $safeError -replace '(?i)(?:[a-z]:\\|\\\\)[^"''<>]+', '<path>'
                            $safeError = $safeError -replace '/(?:Users|home|tmp|private|var|opt|Applications)/[^"''<>]+', '<path>'
                            $safeError = $safeError -replace '[\r\n\t]+', ' '
                            $safe.error = $safeError.Substring(0, [Math]::Min(240, $safeError.Length))
                        }
                        [pscustomobject]$safe
                    }
                } catch { }
            }
        )
    }
    $result.primaryFailure = $failureReason
    $result.cleanupFailure = $cleanupFailureReason
    Remove-Item -LiteralPath $installer,$portable,$config,$pilotDir -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item Env:NVDA_PILOT_PHASE_FILE,Env:NVDA_PILOT_EVENT_FILE,Env:NVDA_PILOT_DIR,Env:NVDA_PILOT_PID -ErrorAction SilentlyContinue
}

if ($cleanupFailureReason) { $result.status = 'UNQUALIFIED' }
$result | ConvertTo-Json -Compress | Write-Output
if ($failureReason -or $cleanupFailureReason) {
    $reasons = @($failureReason, $cleanupFailureReason) | Where-Object { $_ }
    Write-Error "UNQUALIFIED: $($reasons -join ' | ')" -ErrorAction Continue
    exit 1
}
exit 0
