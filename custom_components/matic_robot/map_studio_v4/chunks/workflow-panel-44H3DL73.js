import{D as De,G as qe,P as z,a as J,b as ee,d as de,e as Q,f as G,g as q}from"./chunk-O5RER5EP.js";import{A as Ne,B as ze,M as Le,O as B,Q as S,a as I,b as M,c as N,f as Ie,i as me,y as te,z as Me}from"./chunk-JS2FO4Y3.js";import{$ as ue,E as xe,F as Se,G as Re,H as Ce,J as Y,K as Ee,R,S as i,V as Pe,W as l,X as Te,Y as T,Z as C,_ as Ae,c as O,e as le,f as ce,j as fe,k as ye,n as P,p as $e,q as we,t as V,z as ke}from"./chunk-NGPLTNCD.js";var L=(t,n)=>new Intl.NumberFormat(t).format(n),j=(t,n)=>n.cleaningMode==="mop"?t("v4_room_setting_mop","Mop"):n.cleaningMode==="vacuum"?n.coverageSetting==="quick"?t("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):t("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):n.coverageSetting==="quick"?t("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):t("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),pe=(t,n,e)=>{let s=c=>{let u=e.filter(c).map(v=>v.name);return u.length?Ae(n,u):null},a=c=>s(u=>u.cadenceReasons.includes("coverage_due")&&u.coverageSetting===c),o=s(c=>c.cadenceReasons.includes("mop_due")),r=a("quick"),m=a("standard"),d=a("heavy_duty");return[o&&t("v4_due_mop","Mop due in {rooms}",{rooms:o}),r&&t("v4_due_quick","Quick vacuum due in {rooms}",{rooms:r}),m&&t("v4_due_optimal","Optimal vacuum due in {rooms}",{rooms:m}),d&&t("v4_due_heavy","Heavy duty vacuum due in {rooms}",{rooms:d})].filter(c=>!!c)},dt={mop:(t,n)=>t("v4_room_schedules_mop","Mop every {mop} cleans",{mop:n}),mop_one:t=>t("v4_room_schedules_mop_one","Mop every clean"),quick:(t,n,e)=>t("v4_room_schedules_quick","Quick vacuum every {cov} cleans",{cov:e}),quick_one:t=>t("v4_room_schedules_quick_one","Quick vacuum every clean"),optimal:(t,n,e)=>t("v4_room_schedules_optimal","Optimal vacuum every {cov} cleans",{cov:e}),optimal_one:t=>t("v4_room_schedules_optimal_one","Optimal vacuum every clean"),heavy:(t,n,e)=>t("v4_room_schedules_heavy","Heavy duty vacuum every {cov} cleans",{cov:e}),heavy_one:t=>t("v4_room_schedules_heavy_one","Heavy duty vacuum every clean"),mop_quick:(t,n,e)=>t("v4_room_schedules_mop_quick","Mop every {mop} cleans \xB7 Quick vacuum every {cov} cleans",{mop:n,cov:e}),mop_quick_one_mop:(t,n,e)=>t("v4_room_schedules_mop_quick_one_mop","Mop every clean \xB7 Quick vacuum every {cov} cleans",{cov:e}),mop_quick_one_cov:(t,n)=>t("v4_room_schedules_mop_quick_one_cov","Mop every {mop} cleans \xB7 Quick vacuum every clean",{mop:n}),mop_quick_one_both:t=>t("v4_room_schedules_mop_quick_one_both","Mop every clean \xB7 Quick vacuum every clean"),mop_optimal:(t,n,e)=>t("v4_room_schedules_mop_optimal","Mop every {mop} cleans \xB7 Optimal vacuum every {cov} cleans",{mop:n,cov:e}),mop_optimal_one_mop:(t,n,e)=>t("v4_room_schedules_mop_optimal_one_mop","Mop every clean \xB7 Optimal vacuum every {cov} cleans",{cov:e}),mop_optimal_one_cov:(t,n)=>t("v4_room_schedules_mop_optimal_one_cov","Mop every {mop} cleans \xB7 Optimal vacuum every clean",{mop:n}),mop_optimal_one_both:t=>t("v4_room_schedules_mop_optimal_one_both","Mop every clean \xB7 Optimal vacuum every clean"),mop_heavy:(t,n,e)=>t("v4_room_schedules_mop_heavy","Mop every {mop} cleans \xB7 Heavy duty vacuum every {cov} cleans",{mop:n,cov:e}),mop_heavy_one_mop:(t,n,e)=>t("v4_room_schedules_mop_heavy_one_mop","Mop every clean \xB7 Heavy duty vacuum every {cov} cleans",{cov:e}),mop_heavy_one_cov:(t,n)=>t("v4_room_schedules_mop_heavy_one_cov","Mop every {mop} cleans \xB7 Heavy duty vacuum every clean",{mop:n}),mop_heavy_one_both:t=>t("v4_room_schedules_mop_heavy_one_both","Mop every clean \xB7 Heavy duty vacuum every clean")},We=(t,n,e)=>{let s=e?.mopEveryN??null,a=e?.coverageEveryN??null;if(s===null&&a===null)return null;let o=e?.periodicCoverageSetting,r=o==="quick"?"quick":o==="heavy_duty"?"heavy":"optimal",m=s===null?`${r}${a===1?"_one":""}`:a===null?`mop${s===1?"_one":""}`:`mop_${r}${s===1&&a===1?"_one_both":s===1?"_one_mop":a===1?"_one_cov":""}`,d=dt[m];return d?d(t,s===null?"":L(n,s),a===null?"":L(n,a)):null};var ae=1,X=100,He=(t,n,e)=>{if(n)return e;let s=t.trim();if(s==="")return null;let a=Number(s);return Number.isFinite(a)?Math.min(X,Math.max(ae,Math.round(a))):e},Oe=(t,n)=>t===null?n>0?ae:null:t+n<ae?null:Math.min(X,t+n),Ve=R`
.ms-stepper { --ms-local: var(--ms-surface-card); display: inline-grid; flex: none; grid-template-columns: var(--ms-control) minmax(3rem, 4.5rem) var(--ms-control); gap: var(--ms-space-1); align-items: center; border: 1px solid var(--ms-line-strong); border-radius: var(--ms-radius-sm); background: var(--ms-local); }
.ms-stepper--readonly { grid-template-columns: minmax(3rem, 4.5rem); }
.ms-stepper .ms-btn { border-radius: calc(var(--ms-radius-sm) - 1px); }
.ms-stepper input { inline-size: 100%; min-inline-size: 0; min-block-size: var(--ms-control); margin: 0; padding: 0; border: 0; border-radius: var(--ms-radius-xs); color: var(--ms-text); background: transparent; font: inherit; font-size: var(--ms-t-md); font-weight: var(--ms-w-medium); font-variant-numeric: tabular-nums; text-align: center; appearance: textfield; -moz-appearance: textfield; }
.ms-stepper input::-webkit-inner-spin-button, .ms-stepper input::-webkit-outer-spin-button { margin: 0; appearance: none; -webkit-appearance: none; }
.ms-stepper input::placeholder { color: var(--ms-text-quiet); font-weight: var(--ms-w-medium); opacity: 1; }
.ms-stepper input:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: -2px; }
.ms-stepper input[readonly] { color: var(--ms-text-quiet); }
@media (forced-colors: active) { .ms-stepper { border: 1px solid CanvasText; } }
`,Be=t=>{let{id:n,t:e,value:s}=t,a=t.heldBy!==null,o=i`<input
    id=${n}
    type="number"
    inputmode="numeric"
    min="1"
    max=${X}
    step="1"
    placeholder=${e("v4_cadence_off","Off")}
    aria-labelledby=${t.labelId}
    aria-describedby=${t.describedBy??l}
    aria-disabled=${a&&!t.readonly?"true":l}
    ?readonly=${t.readonly||a}
    .value=${s===null?"":String(s)}
    @change=${m=>{let d=m.currentTarget,c=t.readonly||a?s:He(d.value,d.validity.badInput,s);d.value=c===null?"":String(c),c!==s&&t.commit(c)}}
  >`;if(t.readonly)return i`<span class="ms-stepper ms-stepper--readonly">${o}</span>`;let r=m=>{let c=(m<0?s===null:s===X)?m<0?e("v4_cadence_stepper_off_reason","This schedule is already off."):e("v4_cadence_stepper_max_reason","Every 100 cleans is the longest schedule."):null,u=`${n}-${m<0?"min":"max"}`,v=m<0?e("v4_stepper_decrease","Decrease {label}",{label:t.label}):e("v4_stepper_increase","Increase {label}",{label:t.label});return i`<button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${v}
      aria-controls=${n}
      aria-disabled=${c||a?"true":l}
      aria-describedby=${(c?u:t.heldBy)??l}
      title=${c??l}
      @click=${()=>{!c&&!a&&t.commit(Oe(s,m))}}
    >${S(m<0?Me:te)}${c?i`<span class="sr-only" id=${u}>${c}</span>`:l}</button>`};return i`<span class="ms-stepper">${r(-1)}${o}${r(1)}</span>`};var Z=["vacuum","mop","vacuum_and_mop"],F=["quick","standard","heavy_duty"],ne=(t,n)=>n==="vacuum"?t("vacuum","Vacuum"):n==="mop"?t("mop","Mop"):t("vacuum_and_mop","Vacuum + mop"),K=(t,n)=>n==="quick"?t("quick","Quick"):n==="standard"?t("standard","Optimal"):t("heavy_duty","Heavy duty"),Ke=t=>t("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."),Ue=(t,n,e,s=e?.reasons||[])=>{if(s.includes("coverage_requires_vacuum"))return Ke(t);if(s.includes("identity_changed")||s.includes("room_not_on_current_map"))return t("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(s.includes("shared_schedule_unavailable"))return t("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(s.includes("mop_progress_unverified")||s.includes("coverage_progress_unverified")){let m=[];return s.includes("mop_progress_unverified")&&m.push(t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),s.includes("coverage_progress_unverified")&&m.push(t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),m.join(" ")}if(s.includes("invalid_cadence_policy"))return t("v4_cadence_policy_invalid","The room schedule needs review before it can be applied.");if(!n||!n.mopEveryN&&!n.coverageEveryN)return t("v4_cadence_not_enabled","No recurring room schedule is enabled.");let a=[],o=e?.mopDue||e?.reasons.includes("mop_due"),r=e?.coverageDue||e?.reasons.includes("coverage_due");return n.mopEveryN&&a.push(o?t("v4_cadence_mop_due","Vacuum and mop is due on this clean."):t("v4_cadence_mop_progress","Mop every {interval} cleans; {completed} counted since the last mop.",{interval:n.mopEveryN,completed:e?.mopProgress??0})),n.coverageEveryN&&a.push(r?t("v4_cadence_coverage_due","{coverage} vacuum rotation is due on this clean.",{coverage:K(t,n.periodicCoverageSetting||"standard")}):t("v4_cadence_coverage_progress","Vacuum rotation every {interval} cleans; {completed} counted so far.",{interval:n.coverageEveryN,completed:e?.coverageProgress??0})),a.join(" ")},mt={scope:"shared",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1},se=t=>!!(t&&(t.mopEveryN!==null||t.coverageEveryN!==null)),ut={quick:(t,n,e)=>n===null?t("v4_cadence_coverage_quick_off","Quick vacuum"):e?t("v4_cadence_coverage_quick_one","Quick vacuum every clean"):t("v4_cadence_coverage_quick","Quick vacuum every {count} cleans",{count:n}),standard:(t,n,e)=>n===null?t("v4_cadence_coverage_optimal_off","Optimal vacuum"):e?t("v4_cadence_coverage_optimal_one","Optimal vacuum every clean"):t("v4_cadence_coverage_optimal","Optimal vacuum every {count} cleans",{count:n}),heavy_duty:(t,n,e)=>n===null?t("v4_cadence_coverage_heavy_off","Heavy duty vacuum"):e?t("v4_cadence_coverage_heavy_one","Heavy duty vacuum every clean"):t("v4_cadence_coverage_heavy","Heavy duty vacuum every {count} cleans",{count:n})},pt={quick:(t,n)=>n?t("v4_cadence_next_mop_quick","Mop and quick vacuum on the next clean"):t("v4_cadence_next_quick","Quick vacuum on the next clean"),standard:(t,n)=>n?t("v4_cadence_next_mop_optimal","Mop and optimal vacuum on the next clean"):t("v4_cadence_next_optimal","Optimal vacuum on the next clean"),heavy_duty:(t,n)=>n?t("v4_cadence_next_mop_heavy","Mop and heavy duty vacuum on the next clean"):t("v4_cadence_next_heavy","Heavy duty vacuum on the next clean")},vt=(t,n,e)=>e===null?t("v4_cadence_mop_off","Mop"):e===1?t("v4_cadence_mop_interval_one","Mop every clean"):t("v4_cadence_mop_interval","Mop every {count} cleans",{count:L(n,e)}),ht=(t,n,e,s)=>ut[e](t,s===null?null:L(n,s),s===1),gt=["identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy"],oe=({room:t,saved:n,catalogRoom:e})=>{let s=t.cadence??mt,a=e?.sharedCadence,o=a!==void 0,r=n?.cadence?.scope==="shared",m=o&&!r&&t.cadence?.scope==="shared";return{policy:s,shared:a,sharedExists:o,participating:r,joinPending:m,progress:m?e?.sharedCadenceProgress:t.cadenceProgress,reasons:m?e?.sharedCadenceReasons??[]:t.cadenceReasons??[],savedPolicy:n?.cadence}},W={mop:{every:"mopEveryN",flag:"doMopNext",next:"nextMopIn"},coverage:{every:"coverageEveryN",flag:"doCoverageNext",next:"nextCoverageIn"}},Qe=(t,n)=>{let e=W[n].every,s=t.savedPolicy?.[e]??null;return!t.joinPending&&s!==null&&t.policy[e]!==null&&t.policy[e]!==s},je=(t,n)=>{let e=t.policy[W[n].every],s=t.progress?.[W[n].next]??null;return e!==null&&e>1&&(t.policy[W[n].flag]||Qe(t,n)||s!==1)},Fe=(t,n,e,s)=>{let a=e.policy[W[s].every],o=e.progress?.[W[s].next]??null;return a===null?t("v4_cadence_status_off","Not scheduled"):a===1?t("v4_cadence_status_every","Due every clean"):e.policy[W[s].flag]?t("v4_cadence_status_next","Due next clean"):Qe(e,s)?t("v4_cadence_status_edited","Keeps the progress so far"):!e.joinPending&&e.savedPolicy!==void 0&&e.savedPolicy.scope!==e.policy.scope||o===null?null:o<=1?t("v4_cadence_status_next","Due next clean"):t("v4_cadence_status_in","Due in {count} cleans",{count:L(n,o)})},_t=(t,n,e)=>{let{policy:s,participating:a}=n,o=se(s);return n.joinPending?t("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted."):a&&s.scope==="plan"?t("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule."):!a&&s.scope==="shared"&&o?t("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero."):s.scope==="plan"&&o&&!se(n.savedPolicy)?t("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):n.savedPolicy&&(s.mopEveryN!==n.savedPolicy.mopEveryN||s.coverageEveryN!==n.savedPolicy.coverageEveryN)?t("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."):a?t("v4_cadence_shared_edit_effect","Changes apply to every plan that uses {room}'s shared schedule.",{room:e}):null},bt=(t,n,e)=>{let s=oe(e),{policy:a,reasons:o}=s,{room:r,saved:m,name:d}=e,c=a.coverageEveryN!==null,u=(c?null:e.offLevel)??a.periodicCoverageSetting??"heavy_duty",v=D=>o.includes(D),h=v("mop_progress_unverified"),g=!h&&r.cleaningMode!=="vacuum"&&a.mopEveryN===null,p=v("coverage_progress_unverified"),_=!p&&r.cleaningMode==="mop"&&c,k=!p&&r.cleaningMode==="mop",b=Re(o.filter(D=>gt.includes(D)),d),x=je(s,"mop"),f=je(s,"coverage"),y=a.doMopNext||a.doCoverageNext,$=x||!f&&a.doMopNext,w=f||!x&&a.doCoverageNext,E=(D,lt,ct)=>m!==void 0&&((D??0)>0||!!lt||!!m.cadenceReasons?.includes(ct));return{policy:a,level:u,mop:{every:a.mopEveryN,label:vt(t,n,a.mopEveryN),status:Fe(t,n,s,"mop"),reason:h?t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):g?t("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum."):null,blocked:g,unverified:h},coverage:{every:a.coverageEveryN,label:ht(t,n,u,a.coverageEveryN),status:Fe(t,n,s,"coverage"),reason:p?t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):_?Ke(t):k?t("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming."):null,blocked:k,unverified:p},legacyCoverage:_,roomReason:b?t(b.reasonKey,b.reason,b.reasonPlaceholders):null,sharedHint:s.sharedExists&&!s.participating&&a.scope==="shared"&&!se(a),joinPending:s.joinPending,participating:s.participating,next:$||w?{label:w?pt[u](t,$):t("v4_cadence_next_mop","Mop on the next clean"),on:y,mop:x,coverage:f}:null,explanation:_t(t,s,d),scope:a.scope,resettable:{mop:E(m?.cadenceProgress?.mopProgress,m?.cadence?.doMopNext,"mop_progress_unverified"),coverage:E(m?.cadenceProgress?.coverageProgress,m?.cadence?.doCoverageNext,"coverage_progress_unverified")}}},Ge=t=>t.shared&&t.sharedExists&&!t.participating?{...t.shared,scope:"shared"}:null,ft=(t,n,e)=>{let s=oe(t),{policy:a}=s;if(s.joinPending)return null;if(e!==null&&!se(a)&&a.scope==="shared"){let o=Ge(s);if(o)return o}return n==="mop"?e===null?{...a,mopEveryN:null,doMopNext:!1}:{...a,mopEveryN:e}:e===null?{...a,coverageEveryN:null,doCoverageNext:!1}:a.coverageEveryN===null?{...a,coverageEveryN:e,periodicCoverageSetting:t.offLevel??a.periodicCoverageSetting??"heavy_duty"}:{...a,coverageEveryN:e}},yt=(t,n)=>{let e=oe(t);return e.joinPending||e.policy.coverageEveryN===null?null:{...e.policy,periodicCoverageSetting:n}};var $t=(t,n)=>{let e=oe(t);return(n==="shared"?Ge(e):null)??{...e.policy,scope:n}},wt=t=>({...t,scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1}),kt=(t,n)=>n.planDraft.dirty?t("v4_reason_reset_unsaved","Can't reset until you save or cancel your changes."):n.command!=="idle"||n.managedLock||n.activity!=="idle"&&n.activity!=="docked"||n.dataMode!=="live"?t("v4_reason_reset_busy","Can't reset until the robot is idle and the map is live."):null,ve=(t,n,e)=>{if(!t.held)return!1;let s=n.currentTarget;return typeof e=="boolean"?s.checked=e:s.value=e,!0},xt=(t,n,e,s)=>{let a=t.resources.plans.value,o=t.planDraft.id;return{room:n,saved:o?a?.plans.find(r=>r.id===o)?.rooms.find(r=>r.roomId===n.roomId):void 0,catalogRoom:a?.rooms.find(r=>r.roomId===n.roomId),name:e,offLevel:s}},Xe=(t,n,e,s)=>{let{t:a,state:o,held:r}=t,m=o.planDraft,d=xt(o,n,s,t.offLevel),c=bt(a,o.locale,d),{policy:u}=c,v=f=>{if(!f||r)return;let y=m.rooms.map(($,w)=>w===e?{...$,cadence:f}:$);t.intent({type:"patch-plan-draft",patch:{rooms:y}})},h={disabled:r?"true":l,described:r??l},g=(...f)=>f.filter(Boolean).join(" ")||null,p=(f,y)=>y.reason?i`<small class="sched-status sched-reason" id=${f}>${S(B)}<span>${y.reason}</span></small>`:y.status?i`<small class="sched-status" id=${f}>${y.status}</small>`:l,_=(f,y,$)=>{let w=`sched-${f}`,E=y.reason||y.status?`${w}-status`:null;return i`<div class="sched-row">
      <span class="sched-label" id=${`${w}-label`}>${y.label}</span>
      <div class="sched-controls">
        ${$}
        ${Be({id:w,labelId:`${w}-label`,label:y.label,value:y.every,describedBy:g(E,r),heldBy:r??(y.blocked?E:null),readonly:c.joinPending,t:a,commit:D=>v(ft(d,f,D))})}
      </div>
      ${p(`${w}-status`,y)}
    </div>`},k=r??(c.coverage.blocked?"sched-coverage-status":null),b=c.joinPending?l:i`<select
    class="ms-select sched-level"
    aria-label=${a("v4_cadence_level_named","Vacuum level for {room}",{room:s})}
    aria-disabled=${k?"true":l}
    aria-describedby=${k??l}
    .value=${c.level}
    @change=${f=>{let y=f.currentTarget;if(k){y.value=c.level;return}let $=y.value,w=yt(d,$);w?v(w):t.setOffLevel($)}}
  >${F.map(f=>i`<option value=${f} ?selected=${f===c.level}>${K(a,f)}</option>`)}</select>`,x=!!kt(a,o);return i`<section class="schedule" role="group" aria-label=${a("v4_room_cadence_named","Room schedule for {room}",{room:s})}>
    <div class="schedule-head"><h3>${a("v4_room_schedule","Schedule")}</h3></div>
    ${c.roomReason?i`<p class="sched-status sched-reason">${S(B)}<span>${c.roomReason}</span></p>`:l}
    ${_("mop",c.mop,l)}
    ${_("coverage",c.coverage,b)}
    ${c.legacyCoverage?i`<button
      type="button"
      class="ms-btn ms-btn--secondary sched-off"
      aria-label=${a("v4_cadence_turn_off_named","Turn off the vacuum rotation in {room}",{room:s})}
      aria-disabled=${h.disabled}
      aria-describedby=${h.described}
      @click=${()=>v(wt(u))}
    >${a("v4_cadence_clear_room_coverage","Turn off")}</button>`:l}
    <div class="cadence-fields">
      <label class="field ms-field">${a("v4_cadence_scope","Count cleans")}
        <select aria-label=${a("v4_cadence_scope_named","Count cleans for {room}",{room:s})} aria-disabled=${h.disabled} aria-describedby=${h.described} .value=${u.scope}
          @change=${f=>{ve(t,f,u.scope)||v($t(d,f.currentTarget.value))}}>
          <option value="plan" ?selected=${u.scope==="plan"}>${a("v4_cadence_this_plan","In this plan only")}</option>
          <option value="shared" ?selected=${u.scope==="shared"}>${a("v4_cadence_shared","Across all plans (recommended)")}</option>
        </select>
      </label>
    </div>
    ${c.explanation?i`<p class="schedule-note">${c.explanation}</p>`:l}
    <div class="plan-options" role="group" aria-label=${a("v4_cadence_next_actions_named","Next clean options for {room}",{room:s})}>
      <label class="plan-option"><input type="checkbox" aria-label=${a("v4_cadence_do_mop_next_named","Do vacuum and mop on the next clean for {room}",{room:s})} aria-disabled=${h.disabled} aria-describedby=${h.described} .checked=${u.doMopNext} ?disabled=${!u.mopEveryN}
        @change=${f=>{ve(t,f,u.doMopNext)||v({...u,doMopNext:f.currentTarget.checked})}}><span class="plan-option-copy"><strong>${a("v4_cadence_do_mop_next","Do vacuum and mop on the next clean")}</strong></span></label>
      <label class="plan-option"><input type="checkbox" aria-label=${a("v4_cadence_do_coverage_next_named","Add a vacuum rotation on the next clean for {room}",{room:s})} aria-disabled=${h.disabled} aria-describedby=${h.described} .checked=${u.doCoverageNext} ?disabled=${!u.coverageEveryN||n.cleaningMode==="mop"}
        @change=${f=>{ve(t,f,u.doCoverageNext)||v({...u,doCoverageNext:f.currentTarget.checked})}}><span class="plan-option-copy"><strong>${a("v4_cadence_do_coverage_next","Add a vacuum rotation on the next clean")}</strong></span></label>
    </div>
    <p class="schedule-note">${a("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
    ${m.id&&(c.resettable.mop||c.resettable.coverage)?i`
      <div class="toolbar">
        ${c.resettable.mop?i`<button
          class="danger ms-btn ms-btn--secondary ms-btn--danger"
          type="button"
          aria-label=${a("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:s})}
          data-dialog-launcher="confirmResetCadence"
          ?disabled=${x}
          @click=${()=>t.intent({type:"request-room-cadence-reset",planId:m.id,roomId:n.roomId,mode:"mop"})}
        >${a("v4_reset_mop_cadence_button","Reset mopping")}</button>`:l}
        ${c.resettable.coverage?i`<button
          class="danger ms-btn ms-btn--secondary ms-btn--danger"
          type="button"
          aria-label=${a("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:s})}
          data-dialog-launcher="confirmResetCadence"
          ?disabled=${x}
          @click=${()=>t.intent({type:"request-room-cadence-reset",planId:m.id,roomId:n.roomId,mode:"coverage"})}
        >${a("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`:l}
      </div>
      <p class="schedule-note">${a("v4_reset_cadence_hint","Reset is available for a saved plan while the robot is idle. Cleaning history is kept separately.")}</p>
    `:l}
  </section>`};var Ze={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ye=t=>(...n)=>({_$litDirective$:t,values:n}),re=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,e,s){this._$Ct=n,this._$AM=e,this._$Ci=s}_$AS(n,e){return this.update(n,e)}update(n,e){return this.render(...e)}};var{I:St}=Te,Je=t=>t;var et=()=>document.createComment(""),U=(t,n,e)=>{let s=t._$AA.parentNode,a=n===void 0?t._$AB:n._$AA;if(e===void 0){let o=s.insertBefore(et(),a),r=s.insertBefore(et(),a);e=new St(o,r,t,t.options)}else{let o=e._$AB.nextSibling,r=e._$AM,m=r!==t;if(m){let d;e._$AQ?.(t),e._$AM=t,e._$AP!==void 0&&(d=t._$AU)!==r._$AU&&e._$AP(d)}if(o!==a||m){let d=e._$AA;for(;d!==o;){let c=Je(d).nextSibling;Je(s).insertBefore(d,a),d=c}}}return e},A=(t,n,e=t)=>(t._$AI(n,e),t),Rt={},tt=(t,n=Rt)=>t._$AH=n,at=t=>t._$AH,ie=t=>{t._$AR(),t._$AA.remove()};var st=(t,n,e)=>{let s=new Map;for(let a=n;a<=e;a++)s.set(t[a],a);return s},nt=Ye(class extends re{constructor(t){if(super(t),t.type!==Ze.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,n,e){let s;e===void 0?e=n:n!==void 0&&(s=n);let a=[],o=[],r=0;for(let m of t)a[r]=s?s(m,r):r,o[r]=e(m,r),r++;return{values:o,keys:a}}render(t,n,e){return this.dt(t,n,e).values}update(t,[n,e,s]){let a=at(t),{values:o,keys:r}=this.dt(n,e,s);if(!Array.isArray(a))return this.ut=r,o;let m=this.ut??=[],d=[],c,u,v=0,h=a.length-1,g=0,p=o.length-1;for(;v<=h&&g<=p;)if(a[v]===null)v++;else if(a[h]===null)h--;else if(m[v]===r[g])d[g]=A(a[v],o[g]),v++,g++;else if(m[h]===r[p])d[p]=A(a[h],o[p]),h--,p--;else if(m[v]===r[p])d[p]=A(a[v],o[p]),U(t,d[p+1],a[v]),v++,p--;else if(m[h]===r[g])d[g]=A(a[h],o[g]),U(t,a[v],a[h]),h--,g++;else if(c===void 0&&(c=st(r,g,p),u=st(m,v,h)),c.has(m[v]))if(c.has(m[h])){let _=u.get(r[g]),k=_!==void 0?a[_]:null;if(k===null){let b=U(t,a[v]);A(b,o[g]),d[g]=b}else d[g]=A(k,o[g]),U(t,a[v],k),a[_]=null;g++}else ie(a[h]),h--;else ie(a[v]),v++;for(;g<=p;){let _=U(t,d[p+1]);A(_,o[g]),d[g++]=_}for(;v<=h;){let _=a[v++];_!==null&&ie(_)}return this.ut=r,tt(t,d),Pe}});var Ct=["mop_progress_unverified","coverage_progress_unverified","identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy","coverage_requires_vacuum"],he=class extends T{constructor(){super(...arguments);this._moved="";this.#t=null;this.#o=new Map;this.state=P();this.#e=(e,s,a)=>C(this.localize,e,s,a)}static{this.styles=[I,M,N,Ve,R`
:host { display: block; }
.plain { display: grid; gap: var(--ms-space-2); margin: 0; padding: 0; list-style: none; }
.plan-row .ms-row__body { display: grid; gap: 0.125rem; }
.plan-row .plan-title { display: flex; gap: var(--ms-space-1) var(--ms-space-2); align-items: center; min-inline-size: 0; }
.plan-row .plan-title bdi { overflow: hidden; min-inline-size: 0; text-overflow: ellipsis; white-space: nowrap; }
.plan-row .plan-title .ms-chip { flex: none; }
.chip-default { border-color: transparent; background: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-surface-card)); }
.chip-attention { border-color: transparent; background: color-mix(in srgb, var(--ms-danger) 12%, var(--ms-surface-card)); }
.lines { display: grid; gap: 0.125rem; margin: 0; color: var(--ms-text); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.line { display: flex; gap: var(--ms-space-1); align-items: flex-start; margin: 0; color: var(--ms-text); }
.line .ms-icon { inline-size: 1rem; block-size: 1rem; color: var(--ms-resolved-indicator, var(--ms-accent)); }
.line[data-tone="warning"] .ms-icon { color: var(--ms-warning); }
.plan-row .ms-row__trail:dir(rtl) .ms-icon { scale: -1 1; }
.empty-card { display: grid; gap: var(--ms-space-2); padding: var(--ms-space-4); border: 1px solid var(--ms-line); border-radius: var(--ms-radius-md); }
.empty-card h3 { margin: 0; font-size: var(--ms-t-md); }
.empty-card p { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-md); line-height: var(--ms-lh-normal); }
.empty-card .ms-btn { justify-self: start; }
.quiet { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.heading { margin: var(--ms-space-4) 0 var(--ms-space-2); color: var(--ms-text-quiet); font-size: var(--ms-t-md); font-weight: var(--ms-w-bold); line-height: var(--ms-lh-tight); }
.summary { margin: 0 0 var(--ms-space-2); color: var(--ms-text-quiet); font-size: var(--ms-t-md); line-height: var(--ms-lh-snug); }
.run-list { display: grid; margin: 0 0 var(--ms-space-3); padding: 0; list-style: none; }
.run-row { display: flex; gap: var(--ms-space-3); align-items: flex-start; padding-block: var(--ms-space-2); border-block-end: 1px solid var(--ms-line); }
.run-row:last-child { border-block-end: 0; }
.run-row[data-break] { margin-block-start: var(--ms-space-3); padding-block-start: var(--ms-space-3); border-block-start: 2px dashed var(--ms-line-strong); }
.row-lines { display: grid; flex: 1; gap: 0.125rem; min-inline-size: 0; }
.row-lines bdi { overflow: hidden; font-weight: var(--ms-w-bold); text-overflow: ellipsis; white-space: nowrap; }
.row-lines small { color: color-mix(in srgb, var(--ms-text) 78%, var(--ms-local, var(--ms-surface-card))); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.row-lines .ms-chip { justify-self: start; }
.pos-badge { display: grid; flex: none; place-items: center; inline-size: 1.5rem; block-size: 1.5rem; border-radius: 50%; background: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-surface-card)); font-size: var(--ms-t-xs); font-weight: var(--ms-w-bold); font-variant-numeric: tabular-nums; }
.problem { margin: 0 0 var(--ms-space-2); padding: var(--ms-space-3); border-inline-start: 3px solid var(--ms-danger); border-radius: var(--ms-radius-md); background: color-mix(in srgb, var(--ms-danger) 12%, var(--ms-surface-card)); font-size: var(--ms-t-sm); line-height: var(--ms-lh-snug); }
.switch-row { display: flex; gap: var(--ms-space-3); align-items: center; min-block-size: var(--ms-control); }
.switch-copy { display: grid; flex: 1; gap: 0.125rem; min-inline-size: 0; font-size: var(--ms-t-md); }
.switch-copy small, .reason { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.sr-only { position: absolute; overflow: hidden; inline-size: 1px; block-size: 1px; margin: -1px; padding: 0; border: 0; clip-path: inset(50%); white-space: nowrap; }
.edit { display: grid; gap: var(--ms-space-3); }
.order { display: grid; gap: var(--ms-space-1); margin: 0; padding: 0; border: 0; font-size: var(--ms-t-sm); }
.order .ms-segment { padding: 0; }
.order .ms-btn { flex: 1; }
.list-header { display: flex; align-items: baseline; justify-content: space-between; gap: var(--ms-space-2); }
.list-header .heading { margin: 0; }
.list-header small { color: var(--ms-text-quiet); font-size: var(--ms-t-xs); }
.edit-row { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; padding: 0; }
.edit-row:not([data-selected]) { --ms-local: var(--ms-surface-card); }
.edit-check { display: grid; place-items: center; inline-size: var(--ms-control); block-size: var(--ms-control); cursor: pointer; }
.edit-check input { inline-size: 1.2rem; block-size: 1.2rem; margin: 0; accent-color: var(--ms-resolved-indicator, var(--ms-accent)); cursor: pointer; }
.edit-disclosure { display: flex; gap: var(--ms-space-2); align-items: center; min-inline-size: 0; min-block-size: var(--ms-control); padding: var(--ms-space-2) var(--ms-space-1); border: 0; border-radius: var(--ms-radius-sm); color: inherit; background: transparent; font: inherit; text-align: start; cursor: pointer; }
.edit-disclosure:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: -2px; }
.edit-disclosure > .ms-icon { flex: none; transition: rotate 120ms; }
.edit-disclosure[aria-expanded="true"] > .ms-icon { rotate: 90deg; }
.edit-disclosure:dir(rtl) > .ms-icon { scale: -1 1; }
.edit-name { padding-inline: var(--ms-space-1); }
.edit-moves { display: flex; }
.row-expanded { display: grid; grid-column: 1 / -1; gap: var(--ms-space-2); padding: var(--ms-space-3); border-block-start: 1px solid var(--ms-line); }
.run-end { display: grid; gap: var(--ms-space-2); }
.run-end > summary { min-block-size: var(--ms-control); align-content: center; font-weight: var(--ms-w-bold); cursor: pointer; }
.threshold { display: grid; gap: var(--ms-space-1); font-size: var(--ms-t-md); }
.threshold input { inline-size: 100%; min-block-size: var(--ms-control-sm); accent-color: var(--ms-resolved-indicator, var(--ms-accent)); }
.subtle { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.split { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--ms-space-2); }
.toolbar { display: flex; flex-wrap: wrap; gap: var(--ms-space-2); }
.plan-options { --ms-local: var(--ms-surface-sunken); display: grid; gap: var(--ms-space-3); padding: var(--ms-space-4); border-radius: var(--ms-radius-md); background: var(--ms-local); }
.plan-option { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: start; gap: var(--ms-space-2); }
.plan-option input[type="checkbox"] { inline-size: 1.2rem; block-size: 1.2rem; margin: 0.1rem 0 0; accent-color: var(--ms-resolved-indicator, var(--ms-accent)); }
.plan-option-copy { display: grid; gap: var(--ms-space-1); min-inline-size: 0; }
.plan-option-copy strong { font-size: var(--ms-t-sm); line-height: var(--ms-lh-snug); }
.cadence-fields { display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--ms-space-2); min-inline-size: 0; }
.cadence-fields > .ms-field { min-inline-size: 0; }
.schedule { display: grid; gap: var(--ms-space-3); min-inline-size: 0; margin-block-start: var(--ms-space-2); }
.schedule-head { display: flex; align-items: center; gap: var(--ms-space-2); }
.schedule-head h3 { flex: 1; margin: 0; font-size: var(--ms-t-md); font-weight: var(--ms-w-bold); }
.sched-row { display: grid; gap: var(--ms-space-1); justify-items: start; min-inline-size: 0; }
.sched-label { font-size: var(--ms-t-md); font-weight: var(--ms-w-medium); }
.sched-controls { display: flex; flex-wrap: wrap; gap: var(--ms-space-3); align-items: center; }
.sched-level { flex: none; inline-size: 9rem; block-size: var(--ms-control); font-size: var(--ms-t-md); }
.sched-status { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.sched-reason { display: flex; gap: var(--ms-space-1); align-items: flex-start; color: var(--ms-text); }
.sched-reason .ms-icon { flex: none; inline-size: 1rem; block-size: 1rem; color: var(--ms-warning); }
.sched-off { justify-self: start; }
.schedule-note { margin: 0; color: var(--ms-text); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
@media (max-width: 25rem) { .split { grid-template-columns: 1fr; } }
`]}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_moved:{state:!0}}}#t;#o;#e;#n(e){this.dispatchEvent(new CustomEvent(z,{detail:e,bubbles:!0,composed:!0}))}#a(e){return L(this.state.locale,e)}#r(e){return e.length?i`<span class="lines">${e.map(s=>i`<span class="line">${S(Le)}<span>${s}</span></span>`)}</span>`:l}#l(e,s){let a=e.rooms.length,o=e.runBehavior==="ordered",r=a===1?o?this.#e("v4_plan_row_ordered_one","1 room \xB7 Top to bottom, as listed"):this.#e("v4_plan_row_rotation_one","1 room \xB7 Longest-waiting rooms first"):o?this.#e("v4_plan_row_ordered","{count} rooms \xB7 Top to bottom, as listed",{count:this.#a(a)}):this.#e("v4_plan_row_rotation","{count} rooms \xB7 Longest-waiting rooms first",{count:this.#a(a)}),m=e.nextRunPreview?.blocker,d=e.enabled?m&&m!=="plan_disabled"?i`<span class="lines"><span class="line" data-tone="warning">${S(B)}<span>${this.#e("v4_plan_row_blocked","Needs attention before it can run")}</span></span></span>`:this.#r(pe(this.#e,this.state.locale,e.nextRunPreview?.rooms??[])):l,c=this.#e("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return i`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${e.id}
        aria-describedby=${s?"default-hint":l}
        @click=${()=>this.#n({type:"select-plan",planId:e.id})}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${e.name}</bdi>${s?i`<span class="ms-chip chip-default" title=${c}>${this.#e("v4_plan_default","Default")}</span>`:l}${e.enabled?l:i`<span class="ms-chip">${this.#e("v4_paused","Paused")}</span>`}</strong>
          <small>${r}</small>
          ${d}
        </span>
        <span class="ms-row__trail">${S(me)}</span>
      </button>
      ${s?i`<span class="sr-only" id="default-hint">${c}</span>`:l}
    </li>`}#m(){let e=this.state.resources.plans.value,s=this.#e("v4_create_plan","Create a plan");if(!e?.plans.length)return i`<div class="empty-card">
        <h3>${this.#e("v4_no_plans","No plans yet")}</h3>
        <p>${this.#e("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#n({type:"select-plan",planId:null})}>${s}</button>
      </div>`;let a=[...e.plans].sort((o,r)=>+(r.id===e.selectedPlan)-+(o.id===e.selectedPlan));return i`<ul class="plain">
      ${a.map(o=>this.#l(o,o.id===e.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#n({type:"select-plan",planId:null})}>
        <span class="ms-row__lead">${S(te)}</span>
        <span class="ms-row__body"><strong>${s}</strong></span>
      </button></li>
    </ul>`}#s(){let e=this.state;return e.pendingAction==="save-plan"?this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):e.pendingAction==="run-plan"?this.#e("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):Y(e)?this.#e("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#e("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):ke(e)?null:this.#e("v4_reason_save_plan_map","Waiting for the map to be ready.")}#p(){let e=this.state.planDraft.enabled,s=this.#s();return i`
      <div class="switch-row">
        <span class="switch-copy">
          <span id="enabled-label">${this.#e("v4_plan_can_run","Plan enabled")}</span>
          <small id="enabled-hint">${this.#e("v4_plan_can_run_on","When it's on, this plan can run from here, from automations and from Home Assistant actions.")}</small>
        </span>
        <button
          class="ms-switch"
          type="button"
          role="switch"
          aria-checked=${String(e)}
          aria-labelledby="enabled-label"
          aria-describedby=${s?"enabled-hint enabled-reason":"enabled-hint"}
          aria-disabled=${s?"true":l}
          @click=${()=>{s||this.#n({type:"set-plan-enabled",enabled:!e})}}
        ></button>
      </div>
      ${s?i`<p class="reason" id="enabled-reason">${s}</p>`:l}
    `}#c(e,s,a,o={}){return i`<li class="run-row" ?data-break=${o.part!==void 0}>
      ${o.part===void 0?l:i`<span class="sr-only">${this.#e("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#a(o.part)})}</span>`}
      ${a===null?l:i`<span class="pos-badge" aria-hidden="true">${this.#a(a)}</span>`}
      <span class="row-lines">
        <bdi>${e}</bdi>
        <small>${s}</small>
        ${o.blocked?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
      </span>
    </li>`}#_(){let e=this.state,s=e.planDraft,a=e.resources.plans.value,o=a?.plans.find($=>$.id===s.id);if(!a||!o)return l;let r=o.nextRunPreview,m=r?.blocker??null,d=!s.enabled,c=!d&&!!(r&&!m&&/^[0-9a-f]{64}$/u.test(r.previewToken??"")),u=o.runBehavior==="ordered",v=c&&r?r.rooms:[],h=!d&&m?Ce(e,o)?.jump.roomId??null:null,g=d||c||h||e.pendingAction==="save-plan"?null:m&&Se[m]||xe,p=c?v.length:o.rooms.length,_=c?o.nextRunEstimateSeconds:null,k=_===null?"":this.#a(Math.max(1,Math.round(_/60))),b=_===null?p===1?this.#e("v4_plan_summary_rooms_one","1 room"):this.#e("v4_plan_summary_rooms","{count} rooms",{count:this.#a(p)}):p===1?this.#e("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:k}):this.#e("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#a(p),minutes:k}),x=c&&r?r.missionBoundaries:[],f=c?v.map(($,w)=>{let E=x.indexOf(w);return this.#c($.name,j(this.#e,$),u?w+1:null,E<0?{}:{part:E+2})}):we(o).rooms.map($=>this.#c(a.rooms.find(w=>w.roomId===$.roomId)?.name??$.roomId,j(this.#e,$),null,{blocked:$.roomId===h})),y=s.finishCurrentRoom?this.#e("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#a(s.finishCurrentRoomThreshold)}):s.returnToBase?this.#e("v4_plan_summary_return","Returns to the dock when finished"):null;return i`
      <p class="summary">${b}</p>
      ${this.#r(pe(this.#e,e.locale,v))}
      <h3 class="heading">${d?this.#e("v4_plan_rooms_heading","Rooms in this plan"):e.resources.entry?.activePlan?this.#e("v4_next_run_after_active","After this run"):this.#e("v4_next_run_preview","Next run")}</h3>
      ${c&&!u?i`<p class="quiet">${this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}</p>`:l}
      ${x.length?i`<p class="quiet">${this.#e("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:this.#a(x.length+1)})}</p>`:l}
      ${g?i`<p class="problem">${this.#e(g.reasonKey,g.reason)}</p>
        <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"open-workflow",workflow:"plan"})}>${this.#e("v4_retry","Try again")}</button>`:l}
      ${c&&u?i`<ol class="run-list" role="list">${f}</ol>`:i`<ul class="run-list" role="list">${f}</ul>`}
      ${this.#p()}
      ${y?i`<p class="quiet">${y}</p>`:l}
    `}willUpdate(e){e.has("state")&&(this.state.workflow!=="plan"||this.state.planView!=="edit")&&(this._moved="")}updated(e){!this.#t||!e.has("state")||(this.renderRoot.querySelector(`[data-move="${CSS.escape(this.#t)}"]`)?.focus(),this.#t=null)}#u(){return this.state.pendingAction==="save-plan"?"edit-held":null}#i(e){this.#u()||this.#n({type:"patch-plan-draft",patch:e})}#v(e,s){this.#i({rooms:this.state.planDraft.rooms.map((a,o)=>o===e?{...a,...s}:a)})}#b(e,s,a,o){let r=[...this.state.planDraft.rooms],m=e+s;if(this.#u()||m<0||m>=r.length)return;let[d]=r.splice(e,1);d&&(r.splice(m,0,d),this.#t=o,this._moved=this.#e("v4_room_moved","{room} moved to position {position}",{room:a,position:this.#a(m+1)}),this.#n({type:"patch-plan-draft",patch:{rooms:r}}))}#h(e){return{disabled:e?"true":l,described:e??l}}#g(e,s,a,o,r,m){let d=`${e.roomId}:${o<0?"up":"down"}`,c=o<0?this.#e("move_room_up","Move {room} earlier",{room:a}):this.#e("move_room_down","Move {room} later",{room:a}),u=o<0?this.#e("v4_room_already_first","{room} is already first",{room:a}):this.#e("v4_room_already_last","{room} is already last",{room:a}),v=r?`${d}-end`:m;return i`<button
        class="ms-btn ms-btn--icon"
        type="button"
        data-move=${d}
        aria-label=${c}
        title=${r?u:c}
        aria-disabled=${r||m?"true":l}
        aria-describedby=${v??l}
        @click=${()=>{r||this.#b(s,o,a,d)}}
      >${S(o<0?Ne:ze)}</button>
      ${r?i`<span class="sr-only" id=${`${d}-end`}>${u}</span>`:l}`}#f(e,s,a,o,r,m,d){let c=this.state.planDraft,u=a!==null&&this.state.expandedRoom===e,v=c.rooms.length-1,h=this.#h(d),g=a===null&&m,p=a?We(this.#e,this.state.locale,a.cadence):null,_=a?.cadenceReasons?.some(b=>Ct.includes(b)),k=!!a?.cadence?.mopEveryN;return i`<li class="ms-row edit-row" data-selected=${a?"true":l}>
      <label class="edit-check"><input
        type="checkbox"
        .checked=${a!==null}
        aria-label=${this.#e("v4_room_include_named","Include {room}",{room:s})}
        aria-disabled=${d||g?"true":l}
        aria-describedby=${d??(g?"room-limit":l)}
        @click=${b=>{(d||g)&&b.preventDefault()}}
        @change=${()=>this.#n({type:"toggle-room",roomId:e})}
      ></label>
      ${a?i`<button
          class="edit-disclosure"
          type="button"
          data-room-disclosure=${e}
          aria-expanded=${String(u)}
          aria-label=${this.#e("v4_room_settings_named","Settings for {room}",{room:s})}
          aria-disabled=${h.disabled}
          aria-describedby=${h.described}
          @click=${()=>{d||this.#n({type:"set-plan-view",view:"edit",roomId:u?null:e})}}
        >
          ${r?i`<span class="pos-badge" aria-hidden="true">${this.#a(o+1)}</span>`:l}
          <span class="row-lines">
            <bdi>${s}</bdi>
            <small>${j(this.#e,a)}</small>
            ${p?i`<small>${p}</small>`:l}
            ${_?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
          </span>
          ${S(me)}
        </button>`:i`<span class="edit-name"><bdi>${s}</bdi></span>`}
      ${a&&r?i`<span class="edit-moves">
        ${this.#g(a,o,s,-1,o===0,d)}
        ${this.#g(a,o,s,1,o===v,d)}
      </span>`:i`<span></span>`}
      ${u&&a?i`<div class="row-expanded">
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select
              aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:s})}
              aria-disabled=${h.disabled}
              aria-describedby=${[d,k?"mode-reason":null].filter(Boolean).join(" ")||l}
              .value=${a.cleaningMode}
              @change=${b=>{let x=b.currentTarget;d?x.value=a.cleaningMode:this.#v(o,{cleaningMode:x.value})}}
            >${Z.map(b=>i`<option value=${b} ?selected=${b===a.cleaningMode} ?disabled=${k&&b!=="vacuum"}>${ne(this.#e,b)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select
              aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:s})}
              aria-disabled=${h.disabled}
              aria-describedby=${h.described}
              ?disabled=${a.cleaningMode==="mop"}
              .value=${a.coverageSetting}
              @change=${b=>{let x=b.currentTarget;d?x.value=a.coverageSetting:this.#v(o,{coverageSetting:x.value})}}
            >${F.map(b=>i`<option value=${b} ?selected=${b===a.coverageSetting}>${K(this.#e,b)}</option>`)}</select>
          </label>
        </div>
        ${k?i`<p class="sched-status sched-reason" id="mode-reason">${S(B)}<span>${this.#e("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</span></p>`:l}
        ${a.cleaningMode==="vacuum"?l:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
        ${Xe({t:this.#e,state:this.state,intent:b=>this.#n(b),held:d,offLevel:this.#o.get(e)??null,setOffLevel:b=>{this.#o.set(e,b),this.requestUpdate()}},a,o,s)}
      </div>`:l}
    </li>`}#d(e,s,a,o,r,m){let d=[a?`${e}-hint`:"",r??""].filter(Boolean).join(" ");return i`<div class="switch-row">
      <span class="switch-copy">
        <span id=${`${e}-label`}>${s}</span>
        ${a?i`<small id=${`${e}-hint`}>${a}</small>`:l}
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(o)}
        aria-labelledby=${`${e}-label`}
        aria-describedby=${d||l}
        aria-disabled=${r?"true":l}
        @click=${()=>{r||m(!o)}}
      ></button>
    </div>`}#y(){let e=this.state,s=e.planDraft,a=e.resources.plans.value;if(!a)return l;let o=this.#u(),r=this.#h(o),m=s.runBehavior==="ordered",d=s.rooms.length>=100,c=p=>a.rooms.find(_=>_.roomId===p)?.name??p,u=[...s.rooms.map((p,_)=>({roomId:p.roomId,room:p,index:_})),...a.rooms.filter(p=>!s.rooms.some(_=>_.roomId===p.roomId)).map(p=>({roomId:p.roomId,room:null,index:-1}))],v=s.finishCurrentRoomThreshold,h=this.#a(v),g=(p,_)=>i`<button
      class="ms-btn"
      type="button"
      aria-pressed=${String(s.runBehavior===p)}
      aria-disabled=${r.disabled}
      aria-describedby=${r.described}
      @click=${()=>this.#i({runBehavior:p})}
    >${_}</button>`;return i`<div class="edit">
      ${o?i`<p class="reason" id="edit-held">${this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:l}
      <label class="field ms-field">${this.#e("plan_name","Plan name")}
        <input
          maxlength="128"
          autocomplete="off"
          ?readonly=${!!o}
          aria-disabled=${r.disabled}
          aria-describedby=${r.described}
          .value=${s.name}
          @input=${p=>this.#i({name:p.currentTarget.value})}
        >
      </label>
      <div class="order" role="group" aria-labelledby="order-label">
        <span id="order-label">${this.#e("plan_run_behavior","Cleaning order")}</span>
        <div class="ms-segment">
          ${g("intelligent",this.#e("plan_intelligent","Intelligent rotation"))}
          ${g("ordered",this.#e("plan_ordered","Saved order"))}
        </div>
        <p class="quiet">${m?this.#e("v4_plan_order_ordered_hint","Top to bottom, as listed"):this.#e("v4_plan_order_intelligent_hint","Longest-waiting rooms first")}</p>
      </div>
      <div class="list-header">
        <h3 class="heading" id="edit-rooms">${this.#e("v4_rooms_heading","Rooms")}</h3>
        <small>${this.#e("v4_plan_rooms_selected","{selected} of {total} selected",{selected:this.#a(s.rooms.length),total:this.#a(a.rooms.length)})}</small>
      </div>
      ${d?i`<p class="reason" id="room-limit">${this.#e("v4_plan_room_limit","Can't add more rooms until you remove one; a plan holds up to {limit}.",{limit:this.#a(100)})}</p>`:l}
      <ul class="plain" role="list" aria-labelledby="edit-rooms">
        ${nt(u,p=>p.roomId,p=>this.#f(p.roomId,c(p.roomId),p.room,p.index,m,d,o))}
      </ul>
      <span class="sr-only" role="status">${this._moved}</span>
      <details class="run-end">
        <summary>${this.#e("v4_run_end_options","When a run ends")}</summary>
        ${this.#d("return-dock",this.#e("v4_plan_return_to_dock","Return to the dock when finished"),null,s.returnToBase,o,p=>this.#i({returnToBase:p}))}
        ${this.#d("finish-room",this.#e("v4_plan_finish_room","Finish the current room when you press Stop"),this.#e("v4_plan_finish_room_hint","Only if the room is at least {percent}% done; otherwise the robot stops right away.",{percent:h}),s.finishCurrentRoom,o,p=>this.#i({finishCurrentRoom:p}))}
        ${s.finishCurrentRoom?i`<div class="threshold">
          <span id="finish-threshold-label">${this.#e("v4_plan_finish_threshold","Finish if at least {percent}% done",{percent:h})}</span>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            aria-labelledby="finish-threshold-label"
            aria-valuetext=${`${h}%`}
            aria-disabled=${r.disabled}
            aria-describedby=${r.described}
            .value=${String(v)}
            @input=${p=>{let _=p.currentTarget;o?_.value=String(v):this.#i({finishCurrentRoomThreshold:Number(_.value)})}}
          >
        </div>`:l}
      </details>
    </div>`}render(){let{workflow:e,planView:s}=this.state;return e==="plans"?this.#m():e!=="plan"?l:s==="run"?this.#_():this.#y()}};customElements.get(q)||customElements.define(q,he);var ge=class extends T{constructor(){super(...arguments);this.state=P();this.compact=!1;this.inline=!1}static{this.properties={state:{attribute:!1},localize:{attribute:!1},compact:{type:Boolean,reflect:!0},inline:{type:Boolean,reflect:!0}}}static{this.styles=[I,M,N,R`
:host { display: block; color: var(--ms-text); }
.controls { display: grid; gap: var(--ms-space-3); padding: var(--ms-space-3); }
.stepper { display: grid; grid-template-columns: var(--ms-control) minmax(0, 1fr) var(--ms-control); gap: var(--ms-space-1); align-items: stretch; }
.number { --ms-local: var(--ms-surface-card); display: flex; align-items: center; min-inline-size: 0; min-block-size: var(--ms-control); padding-inline: var(--ms-space-2); border: 1px solid var(--ms-line-strong); border-radius: var(--ms-radius-sm); background: var(--ms-local); }
.number:focus-within { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: 1px; border-color: var(--ms-resolved-indicator, var(--ms-accent)); }
.number input { min-inline-size: 0; inline-size: 100%; border: 0; outline: 0; color: inherit; background: transparent; text-align: end; font-size: var(--ms-t-sm); font-variant-numeric: tabular-nums; }
.unit { margin-inline-start: var(--ms-space-1); color: var(--ms-text-quiet); font-size: var(--ms-t-xs); }
.slider { display: block; inline-size: 100%; min-block-size: var(--ms-control); margin: 0; accent-color: var(--ms-resolved-indicator, var(--ms-accent)); }
.slider:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: 2px; }
.hint { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
:host([compact]:not([inline])) .controls {
position: absolute;
z-index: 8;
inset-block-end: calc(100% + var(--ms-space-1));
inset-inline-end: 0;
inline-size: min(18rem, calc(100vw - 1.5rem));
}
:host([compact][inline]) { margin-block-start: var(--ms-space-2); }
`]}#t(e,s){return C(this.localize,e,s)}#o(e){this.dispatchEvent(new CustomEvent(z,{detail:e,bubbles:!0,composed:!0}))}#e(e){let s=e.currentTarget.valueAsNumber;Number.isFinite(s)&&this.#o({type:"set-brush",value:s})}render(){let{draw:e}=this.state;return i`
      <div class="controls ms-surface ms-surface--overlay" role="group" aria-label=${this.#t("v4_drawing_precision","Drawing precision")}>
        <div class="row ms-field">
          <label for="brush">${this.#t("brush_size","Brush width")}</label>
          <div class="stepper">
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#t("v4_narrower_brush","Narrower brush")}
              @click=${()=>this.#o({type:"set-brush",value:e.brushMeters/1.25})}
            >&minus;</button>
            <span class="number">
              <input
                id="brush"
                inputmode="decimal"
                type="number"
                min=${.2}
                max=${2.5}
                step="0.01"
                .value=${e.brushMeters.toFixed(2)}
                @change=${this.#e}
                aria-label=${this.#t("v4_brush_width_meters","Brush width in meters")}
              />
              <span class="unit">m</span>
            </span>
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#t("v4_wider_brush","Wider brush")}
              @click=${()=>this.#o({type:"set-brush",value:e.brushMeters*1.25})}
            >+</button>
          </div>
          <input
            class="slider"
            type="range"
            min=${.2}
            max=${2.5}
            step="0.01"
            .value=${e.brushMeters.toFixed(2)}
            @input=${this.#e}
            aria-label=${this.#t("v4_brush_width_slider","Brush width slider")}
            aria-valuetext=${`${e.brushMeters.toFixed(2)} m`}
          />
        </div>
        <p class="hint">${this.#t("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
      </div>
    `}};customElements.get(de)||customElements.define(de,ge);var _e=class extends T{constructor(){super(...arguments);this.state=P();this._open=!1;this.#r=e=>{let s=this.renderRoot.querySelector(".more");s&&!e.composedPath().includes(s)&&(this._open=!1)}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[I,M,N,R`
:host { display: contents; }
.more { position: relative; margin-inline-start: auto; }
.more > .ms-btn { transition: none; }
.reason { flex-basis: 100%; margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: end; }
.menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.menu .reason { padding: var(--ms-space-1) var(--ms-space-3); text-align: start; }
`]}#t(e,s,a){return C(this.localize,e,s,a)}#o(e,s=this){s.dispatchEvent(new CustomEvent(z,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this._open=!1)}updated(e){e.has("_open")&&this._open&&this.renderRoot.querySelector("[role=menuitem]")?.focus()}#e(){this._open=!1,this.renderRoot.querySelector(".more > button")?.focus()}#n(e){e.key!=="Escape"||!this._open||(e.preventDefault(),this.#e())}#a(e){let s=e.relatedTarget;s&&!e.currentTarget.contains(s)&&(this._open=!1)}#r;connectedCallback(){super.connectedCallback(),window.addEventListener("pointerdown",this.#r,!0)}disconnectedCallback(){window.removeEventListener("pointerdown",this.#r,!0),super.disconnectedCallback()}#l(){let{command:e,pendingAction:s,planDraft:a}=this.state;return s==="save-plan"?this.#t("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):a.dirty?this.#t("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes."):e==="pending"?this.#t("v4_reason_robot_operation_waiting","Waiting for the robot to finish what it's doing."):null}#m(e){if(this.#l())return;let s=e.currentTarget.closest(".more")?.querySelector("button");this._open=!1,this.#o({type:"open-dialog",dialog:"confirmDeletePlan"},s??this)}render(){let{planView:e,planDraft:s,pendingAction:a}=this.state;if(e==="run"){let r=a==="save-plan"?this.#t("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):a==="run-plan"?this.#t("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return i`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#t("v4_edit_plan_named","Edit {plan}",{plan:s.name})}
          aria-disabled=${r?"true":l}
          aria-describedby=${r?"edit-reason":l}
          @click=${()=>{r||this.#o({type:"set-plan-view",view:"edit"})}}
        >${this.#t("v4_edit","Edit")}</button>
        ${r?i`<p class="reason" id="edit-reason">${r}</p>`:l}
      `}if(!V(this.state,"confirmDeletePlan"))return l;let o=this.#l();return i`
      <div class="more" @keydown=${this.#n} @focusout=${this.#a}>
        <button
          class="ms-btn ms-btn--icon"
          type="button"
          aria-label=${this.#t("v4_more_actions","More actions")}
          aria-haspopup="menu"
          aria-expanded=${String(this._open)}
          data-dialog-launcher="confirmDeletePlan"
          @click=${()=>{this._open=!this._open}}
        >${S(Ie)}</button>
        ${this._open?i`
          <div class="menu ms-surface ms-surface--overlay" @mousedown=${r=>r.preventDefault()}>
            <div role="menu" aria-label=${this.#t("v4_more_actions","More actions")}><button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitem"
              aria-disabled=${o?"true":l}
              aria-describedby=${o?"delete-reason":l}
              @click=${this.#m}
            >${this.#t("plan_delete","Delete")}</button></div>
            ${o?i`<p class="reason" id="delete-reason">${o}</p>`:l}
          </div>
        `:l}
      </div>
    `}};customElements.get(G)||customElements.define(G,_e);var Et=(t,n,e)=>i`${t.planView==="run"?i`<bdi>${n}</bdi>`:n}${t.planDraft.dirty?i` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:l}`,ot=J(G),Pt=(t,n,e)=>ee`<${ot}
  .state=${t}
  .localize=${n}
  @matic-workspace-intent=${e}
></${ot}>`,rt=(t,n,e,s)=>{let a=s?.room;if(a===void 0)return t(n,e,s);let[o,r]=t(n,e,{...s,room:"\0"}).split("\0");return i`${o}<bdi>${a}</bdi>${r}`},Tt=(t,n,e,s)=>{let a=e?n.jump:void 0;return i`${rt(t,n.reasonKey??"",n.reason??"",n.reasonPlaceholders)}${a?i` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>s({type:"set-plan-view",view:"edit",roomId:a.roomId})}
  >${rt(t,a.labelKey,a.label,a.labelPlaceholders)}</button>`:l}`},It=(t,n,e,s)=>{let a=t.pendingAction==="save-plan",o=n?.id==="save-plan"?"primary-reason":"cancel-reason";return i`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      aria-disabled=${a?"true":l}
      aria-describedby=${a?o:l}
      @click=${r=>{a||s(t.planDraft.id?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"},r.currentTarget)}}
    >${e("v4_cancel","Cancel")}</button>
    ${a&&o==="cancel-reason"?i`<p class="action-reason" id=${o}>${e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:l}
    ${n?l:i`<p class="action-summary">${e("v4_plan_save_after_work","You can save when the robot finishes.")}</p>`}
  `},Mt=(t,n,e)=>{let s=e.querySelector(Q)?.shadowRoot?.querySelector(q)?.shadowRoot;if(n.workflow==="plan"&&n.planView==="edit"&&n.expandedRoom)return s?.querySelector(`[data-room-disclosure="${CSS.escape(n.expandedRoom)}"]`);if(n.workflow==="plan"&&t.planView==="edit")return e.querySelector(G)?.shadowRoot?.querySelector("button");let a=t.selection.planId;return n.workflow==="plans"&&a?s?.querySelector(`[data-plan-row="${CSS.escape(a)}"]`):null},Nt=(t,n,e,s)=>{let a=Mt(t,n,e);return s(a)?(a.scrollIntoView({block:"nearest"}),a.focus({preventScroll:!0}),!0):!1};var zt=(t,n,e)=>{let s=(u,v,h)=>C(e,u,v,h),a=V(n),o=n.cadenceResetRequest,r=n.resources.plans.value,m=o&&r?.rooms.find(u=>u.roomId===o.roomId)?.name||o?.roomId||"room",d=o?r?.plans.find(u=>u.id===o.planId)?.rooms.find(u=>u.roomId===o.roomId)?.cadence?.scope==="shared":!1,c=o?.mode??"mop";switch(t){case"confirmDeletePlan":return a&&{title:s("v4_delete_plan","Delete plan?"),detail:s("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:a.name}),...a.successor===void 0?{}:{consequence:a.successor===null?s("v4_delete_plan_none","You'll have no default plan."):s("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:a.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return a&&{title:s("v4_delete_area","Delete area?"),detail:s("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:a.name}),...a.successor===void 0?{}:{consequence:a.successor===null?s("v4_delete_area_none","No custom area will be selected."):s("v4_delete_area_selected","{area} becomes the selected custom area.",{area:a.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:c==="mop"?s("v4_reset_mop_cadence_title","Reset mopping progress?"):s("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:d?s("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:m}):s("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:m}),cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("v4_reset","Reset"),action:"reset-room-cadence"}}},Lt=(t,n,e)=>{let s=t;if(!fe(s.detail))return;if(ye(n,s.detail)){t.stopPropagation(),e(s.detail);return}if(s.detail?.type!=="open-dialog")return;let a=s.composedPath().find(o=>o instanceof HTMLElement&&o.hasAttribute("data-dialog-launcher"));return a instanceof HTMLElement?a:void 0},At=(t,n,e,s)=>{let a=t.cadenceResetRequest;e({type:"dismiss-top-layer"}),n!=="reset-room-cadence"?s(n):a&&s({id:n,planId:a.planId,roomId:a.roomId,mode:a.mode})};var it=J(q),H=t=>t.currentTarget.value,Dt=t=>t.currentTarget.checked,be=class extends T{constructor(){super(...arguments);this.state=P();this._historyPreviewPosition=null;this.#t=new De(this,()=>import("./diagnostics-panel-UOPQYW7U.js"));this.#o="";this.#r=(e,s,a)=>this.#e(e,s,a)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0}}}static{this.styles=[I,M,N,R`
:host { display: block; min-inline-size: 0; container-type: inline-size; }
.workflow-fields { border: 0; margin: 0; padding: 0; min-inline-size: 0; }
button, select, input[type="checkbox"] { cursor: pointer; }
.stack { display: grid; gap: var(--ms-space-3); }
.subtle { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.loading, .empty, .problem, .notice {
--ms-local: var(--ms-surface-sunken);
padding: var(--ms-space-3);
border-radius: var(--ms-radius-md);
background: var(--ms-local);
font-size: var(--ms-t-sm);
line-height: var(--ms-lh-snug);
}
.problem, .notice[data-tone="warning"] { --ms-local: color-mix(in srgb, var(--notice-tone) 12%, var(--ms-surface-card)); border-inline-start: 3px solid var(--notice-tone); color: var(--ms-text); }
.problem { --notice-tone: var(--ms-danger); }
.notice[data-tone="warning"] { --notice-tone: var(--ms-warning); }
.split { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--ms-space-2); }
.list { display: grid; gap: var(--ms-space-2); }
.group { display: grid; gap: var(--ms-space-2); }
.group-heading { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); font-weight: var(--ms-w-medium); letter-spacing: 0.04em; line-height: var(--ms-lh-snug); text-transform: uppercase; }
.floor[aria-current="true"] { border-color: var(--ms-resolved-indicator, var(--ms-accent)); background: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-local)); }
.problem p { margin: 0; }
@media (forced-colors: active) { .floor[aria-current="true"] { forced-color-adjust: none; color: HighlightText; background: Highlight; border-color: Highlight; } }
.room { display: grid; gap: var(--ms-space-2); }
.room-choice { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: var(--ms-space-2); min-block-size: var(--ms-control-sm); }
.room-choice input { inline-size: 1.2rem; block-size: 1.2rem; }
.room-settings { padding-block-start: 0.125rem; padding-inline-start: 1.8rem; }
.room-choice input[aria-disabled="true"] { cursor: not-allowed; opacity: 0.55; }
.plan-option { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: start; gap: var(--ms-space-2); }
.plan-option input[type="checkbox"] { inline-size: 1.2rem; block-size: 1.2rem; margin: 0.1rem 0 0; accent-color: var(--ms-resolved-indicator, var(--ms-accent)); }
.plan-option-copy { display: grid; gap: var(--ms-space-1); min-inline-size: 0; }
.plan-option-copy strong { font-size: var(--ms-t-sm); line-height: var(--ms-lh-snug); }
.plan-option-copy small { color: var(--ms-text-quiet); font-size: var(--ms-t-xs); font-weight: var(--ms-w-regular); line-height: var(--ms-lh-snug); }
.toolbar { display: flex; flex-wrap: wrap; gap: var(--ms-space-2); }
.checkbox { display: flex; align-items: center; gap: var(--ms-space-2); min-block-size: var(--ms-control); font-size: var(--ms-t-xs); font-weight: var(--ms-w-medium); }
.checkbox input { inline-size: 1.2rem; block-size: 1.2rem; }
.floor small, .snapshot small, .list-button small { margin-inline-start: auto; color: color-mix(in srgb, var(--ms-text) 78%, var(--ms-local)); font-weight: var(--ms-w-regular); }
.timeline { display: grid; gap: var(--ms-space-2); }
.timeline input[type="range"] { inline-size: 100%; min-block-size: var(--ms-control); }
@media (max-width: 25rem) { .split { grid-template-columns: 1fr; } }
`]}#t;#o;willUpdate(e){if(!e.has("state"))return;let{workflow:s,selection:a}=this.state,o=`${s}:${a.floorId}:${a.historyId??"live"}`;o!==this.#o&&(this.#o=o,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#e(e,s,a){return C(this.localize,e,s,a)}#n(e){return ne(this.#r,e)}#a(e){return K(this.#r,e)}#r;#l(e){return e==="vacuum"?l:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#m(e){return e==="mop_due"?this.#e("v4_cadence_mop_due_reason","Vacuum and mop are due"):e==="coverage_due"?this.#e("v4_cadence_coverage_due_reason","Vacuum rotation is due"):e==="mop_progress_unverified"?this.#e("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):e==="coverage_progress_unverified"?this.#e("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):this.#e("v4_cadence_due_unknown_reason","Schedule setting due")}#s(e){this.dispatchEvent(new CustomEvent(z,{detail:e,bubbles:!0,composed:!0}))}#p(e){switch(e){case"rooms":case"plans":case"plan":return{loading:this.#e("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#e("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#e("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#e("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#e("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#e("v4_loading_history","Loading map history\u2026"),unavailable:this.#e("v4_history_unavailable","Map history is unavailable right now."),empty:this.#e("v4_no_map_history","No saved map snapshots yet.")}}}#c({status:e,value:s},a,o){let r=this.#p(o);return s===null&&(e==="idle"||e==="loading")?i`<div class="loading" role="status">${r.loading}</div>`:e==="error"?i`
        <div class="stack">
          <div class="problem" role="alert">${r.unavailable}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#s({type:"open-workflow",workflow:o})}>${this.#e("v4_retry","Try again")}</button>
          </div>
        </div>
      `:e==="empty"?i`<div class="empty">${r.empty}</div>`:a}#_(){let e=this.state.resources.plans,s=$e(this.state),a=s!==null,o=this.state.selection.roomIds.length>=100,r=!Ee(this.state),m=Y(this.state);return this.#c(e,i`
      <div class="stack">
        <h3 class="group-heading" id="rooms-heading">${this.#e("v4_rooms_to_clean","Rooms to clean")}</h3>
        ${m?i`<p class="subtle" id="rooms-busy">${this.#e("v4_rooms_busy","Can't change rooms until the robot finishes or stops.")}</p>`:l}
        <div class="list" role="group" aria-labelledby="rooms-heading">
          ${(e.value?.rooms||[]).map(d=>{let c=this.state.selection.roomIds.includes(d.roomId);return i`
              <div class="room ms-row ms-row--stack" data-selected=${String(c)}>
                <label class="room-choice">
                  <input
                    type="checkbox"
                    .checked=${c}
                    ?disabled=${!c&&o}
                    aria-disabled=${r?"true":l}
                    aria-describedby=${m?"rooms-busy":l}
                    @click=${u=>{r&&u.preventDefault()}}
                    @change=${()=>this.#s({type:"toggle-room",roomId:d.roomId})}
                  >
                  <strong>${d.name}</strong>
                  ${c?i`<small>${this.#e("v4_room_ready","Ready")}</small>`:l}
                </label>
                ${c?this.#i(d.roomId,this.state.selection.roomSettings.find(u=>u.roomId===d.roomId)||{roomId:d.roomId,cleaningMode:"vacuum",coverageSetting:"standard"}):l}
              </div>
            `})}
        </div>
        ${o?i`<p class="subtle" role="status">${this.#e("v4_room_limit_reached","Up to {limit} rooms fit, so remove one to add another.",{limit:100})}</p>`:l}
        <p class="subtle">${this.#e("v4_room_selection_hint","Select rooms here or directly on the map. The map and list stay in sync.")}</p>
        <label class="plan-option">
          <input type="checkbox" .checked=${!this.state.selection.useRoomSchedule} @change=${d=>this.#s({type:"set-use-room-schedule",value:!Dt(d)})}>
          <span class="plan-option-copy">
            <strong>${this.#e("v4_override_room_schedule","Override shared schedule settings")}</strong>
            <small>${this.#e("v4_override_room_schedule_hint","This clean follows the shared schedule unless you turn this on to use the settings chosen here. Anything due stays due, and matching cleans still count toward the schedule.")}</small>
          </span>
        </label>
        ${this.state.selection.roomIds.map(d=>{let c=e.value?.rooms.find(u=>u.roomId===d);return c?.sharedCadence||c?.sharedCadenceProgress||c?.sharedCadenceReasons?.length?i`<p class="subtle">${c.name}: ${Ue(this.#r,c.sharedCadence,c.sharedCadenceProgress,c.sharedCadenceReasons)}</p>`:l})}
        ${this.state.manualRoomPreview.status==="loading"?i`<p role="status" class="subtle">${this.#e("v4_room_preview_loading","Checking settings\u2026")}</p>`:l}
        ${this.state.manualRoomPreview.status==="error"?i`<div class="stack">
            <div role="alert" class="problem">${this.#e("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#s({type:"retry-room-preview"})}>${this.#e("v4_retry","Try again")}</button></div>
          </div>`:l}
        ${a?this.#u(s.preview):l}
      </div>
    `,"rooms")}#u(e){let s=new Set(e.missionBoundaries);return i`
      <section class="stack" aria-labelledby="effective-rooms-heading" aria-live="polite">
        <h3 class="group-heading" id="effective-rooms-heading">${this.#e("v4_effective_room_preview","Effective cleaning preview")}</h3>
        ${e.blocker?i`<p class="problem" role="alert">${e.blocker==="invalid_cadence_policy"&&this.state.selection.useRoomSchedule&&this.state.selection.roomSettings.some(a=>a.cleaningMode!=="vacuum")?this.#e("v4_room_preview_schedule_override","The shared schedule can't use the cleaning mode you chose. Turn on Override shared schedule settings, or choose a mode that works with the schedule."):this.#e("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.")}</p>`:l}
        ${e.rooms.length?i`<ol class="list" aria-label=${this.#e("v4_effective_room_order","Effective room order")}>
            ${e.rooms.map((a,o)=>i`
              <li class="ms-row ms-row--stack">
                ${s.has(o)?i`<strong>${this.#e("v4_room_mission_boundary","New part (the robot may stop at the dock first)")}</strong>`:l}
                <strong>${a.name}</strong>
                <span class="subtle">${j(this.#r,a)}</span>
                ${a.cadenceReasons.length?i`<span class="subtle">${a.cadenceReasons.map(r=>this.#m(r)).join("; ")}</span>`:l}
              </li>
            `)}
          </ol>`:l}
      </section>
    `}#i(e,s){let a=this.state.resources.plans.value?.rooms.find(o=>o.roomId===e)?.name||this.#e("v4_room","Room");return i`
      <div class="split room-settings">
        <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
          <select
            aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:a})}
            .value=${s.cleaningMode}
            @change=${o=>this.#s({type:"patch-room-settings",roomId:e,cleaningMode:H(o)})}
          >${Z.map(o=>i`<option value=${o} ?selected=${o===s.cleaningMode}>${this.#n(o)}</option>`)}</select>
        </label>
        <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
          <select
            aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:a})}
            ?disabled=${s.cleaningMode==="mop"}
            .value=${s.coverageSetting}
            @change=${o=>this.#s({type:"patch-room-settings",roomId:e,coverageSetting:H(o)})}
          >${F.map(o=>i`<option value=${o} ?selected=${o===s.coverageSetting}>${this.#a(o)}</option>`)}</select>
        </label>
      </div>
      ${this.#l(s.cleaningMode)}
    `}#v(){let e=this.state.workflow==="plans"?"plans":"plan";return this.#c(this.state.resources.plans,ee`<${it}
      .state=${this.state}
      .localize=${this.localize}
    ></${it}>`,e)}#b(){let e=this.state.resources.areas;return i`
      <div class="stack">
        <p class="subtle">${this.state.draw.tool==="outline"?this.#e("v4_zone_coverage","Place points around the area. Shading shows where the robot cleans inside the outline; narrow edges may stay uncovered."):this.#e("v4_draw_floor_hint","Paint only on the mapped floor. Zooming and panning never change the area.")}</p>
        ${this.state.draw.tool!=="outline"?i`<p class="subtle">${this.#e("v4_keyboard_draw_help","Keyboard: focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>`:l}
        ${this.#c(e,i`
          <div class="group">
            <h3 class="group-heading" id="areas-heading">${this.#e("area_workspace_title","Custom areas")}</h3>
            <div class="list" role="group" aria-labelledby="areas-heading">
            <button class="list-button ms-row ms-row" type="button" @click=${()=>this.#s({type:"select-area",areaId:null})}>${this.#e("area_new","New area")}</button>
            ${(e.value?.areas||[]).map(s=>i`
              <button class="list-button ms-row ms-row" type="button" @click=${()=>{this.#s({type:"select-area",areaId:s.id,workflow:"areaReview"})}}>
                <span>${s.name}</span>
                <small>${s.status==="current"?this.#e("area_workspace_ready","Ready"):this.#e("v4_review","Review")}</small>
              </button>
            `)}
            </div>
          </div>
        `,"draw")}
      </div>
    `}#h(){let e=this.state.areaDraft,s=this.state.resources.areas,a=e.canRebind||e.status==="review",o=!a&&(e.status==="stale"||e.status==="unknown");return i`
      <div class="stack">
        ${s.status==="error"?i`
          <div class="stack">
            <div class="problem" role="alert">${this.#p("areaReview").unavailable}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#s({type:"open-workflow",workflow:"areaReview"})}>${this.#e("v4_retry","Try again")}</button></div>
          </div>
        `:l}
        ${a?i`<div class="notice" data-tone="warning" role="status">${this.#e("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:l}
        ${o?i`<div class="problem" role="alert">${this.#e("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:l}
        <label class="field ms-field">${this.#e("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} @input=${r=>this.#s({type:"patch-area-draft",patch:{name:H(r)}})}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} @change=${r=>this.#s({type:"patch-area-draft",patch:{cleaningMode:H(r)}})}>${Z.map(r=>i`<option value=${r} ?selected=${r===e.cleaningMode}>${this.#n(r)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} @change=${r=>this.#s({type:"patch-area-draft",patch:{coverageSetting:H(r)}})}>${F.map(r=>i`<option value=${r} ?selected=${r===e.coverageSetting}>${this.#a(r)}</option>`)}</select>
          </label>
        </div>
        ${this.#l(e.cleaningMode)}
        <div class="toolbar">
          <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#s({type:"open-workflow",workflow:"draw"})}>${this.#e("v4_edit_outline","Redraw")}</button>
          ${V(this.state,"confirmDeleteArea")?i`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_delete_area_label","Delete area")}
              data-dialog-launcher="confirmDeleteArea"
              @click=${()=>this.#s({type:"open-dialog",dialog:"confirmDeleteArea"})}
            >${this.#e("area_delete","Delete")}</button>
          `:l}
        </div>
      </div>
    `}#g(){let e=this.state.resources.history,s=e.value,a=s?.floors.find(u=>u.id===this.state.selection.floorId)||s?.floors.find(u=>u.active)||s?.floors[0],o=a?.snapshots||[],r=this.state.selection.historyId?Math.max(0,o.findIndex(u=>u.id===this.state.selection.historyId)):o.length,m=a?.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_return_current_floor","Return to current floor"),d=this._historyPreviewPosition??r,c=o[d];return this.#c(e,i`
      <div class="stack">
        ${(s?.floors.length||0)>1?i`
          <div class="group">
            <h3 class="group-heading" id="floors-heading">${this.#e("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(s?.floors||[]).map((u,v)=>i`
              <button
                class="floor ms-row ms-row"
                type="button"
                aria-current=${String(u.id===a?.id)}
                @click=${()=>this.#s({type:"set-floor",floorId:u.id})}
              >
                <span>${u.label||(u.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:u.ordinal??v}))}</span>
                <small>${u.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_read_only","Read only")}</small>
              </button>
            `)}
            </div>
          </div>
        `:l}
        <div class="timeline">
          <label class="field ms-field">${this.#e("map_timeline_label","Map timeline")}
            <input
              type="range"
              min="0"
              max=${String(o.length)}
              step="1"
              .value=${String(d)}
              aria-valuetext=${c?ue(c.createdAt,this.dates):m}
              ?disabled=${!o.length}
              @input=${u=>{this._historyPreviewPosition=Number(H(u))}}
              @change=${u=>{let v=Number(H(u));this._historyPreviewPosition=null,this.#s({type:"set-history",historyId:v===o.length?null:o[v]?.id||null})}}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId&&!!a?.active)} @click=${()=>this.#s({type:"set-history",historyId:null})}><span>${m}</span><small>${this.#e("v4_current","Current")}</small></button>
            ${o.map((u,v)=>i`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(u.id===this.state.selection.historyId)} @click=${()=>this.#s({type:"set-history",historyId:u.id})}>
                <span>${ue(u.createdAt,this.dates)}</span><small>${this.#e("v4_history_position","{position} of {count}",{position:v+1,count:o.length})}</small>
              </button>
            `)}
          </div>
        </div>
        <p class="subtle">${this.#e("v4_history_privacy","Saved maps show one floor each and never show where the robot is now.")}</p>
      </div>
    `,"history")}#f(){return this.#t.request(),this.#t.status!=="ready"?qe(this.#t.status,this.localize,this.retry):i`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}#d(e){return i`<fieldset class="workflow-fields" ?disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}>${e}</fieldset>`}render(){switch(this.state.workflow){case"rooms":return this.#_();case"plans":case"plan":return this.#v();case"draw":return this.#d(this.#b());case"areaReview":return this.#d(this.#h());case"history":return this.#d(this.#g());case"support":return this.#f();case"none":return l}}};customElements.get(Q)||customElements.define(Q,be);export{be as MaticMapWorkflowV4,Tt as actionReason,At as confirmDialog,zt as dialogCopy,Lt as dialogLauncher,Nt as focusPlanTarget,It as planCancel,Et as planTitle,Pt as planTools};
/*! Bundled license information:

lit-html/directive.js:
lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
