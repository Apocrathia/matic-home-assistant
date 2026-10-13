import{D as Te,G as Ie,P,a as G,b as X,d as oe,e as O,f as B,g as T}from"./chunk-FPKQCPWW.js";import{A as Re,L as Ne,N as Pe,P as k,a as S,b as R,c as N,f as Ce,i as ne,y as Ee,z as Se}from"./chunk-I343UESQ.js";import{$ as se,E as ye,F as fe,H as $e,J as Q,K as we,R as C,S as i,V as ke,W as c,X as xe,Y as E,Z as w,_ as Me,c as L,e as te,f as ae,j as ve,k as he,n as x,p as ge,q as _e,t as D,z as be}from"./chunk-NGPLTNCD.js";var j=(o,s)=>new Intl.NumberFormat(o).format(s),q=(o,s)=>s.cleaningMode==="mop"?o("v4_room_setting_mop","Mop"):s.cleaningMode==="vacuum"?s.coverageSetting==="quick"?o("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):s.coverageSetting==="standard"?o("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):o("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):s.coverageSetting==="quick"?o("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):s.coverageSetting==="standard"?o("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):o("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),re=(o,s,e)=>{let a=u=>{let m=e.filter(u).map(v=>v.name);return m.length?Me(s,m):null},t=u=>a(m=>m.cadenceReasons.includes("coverage_due")&&m.coverageSetting===u),n=a(u=>u.cadenceReasons.includes("mop_due")),r=t("quick"),d=t("standard"),l=t("heavy_duty");return[n&&o("v4_due_mop","Mop due in {rooms}",{rooms:n}),r&&o("v4_due_quick","Quick vacuum due in {rooms}",{rooms:r}),d&&o("v4_due_optimal","Optimal vacuum due in {rooms}",{rooms:d}),l&&o("v4_due_heavy","Heavy duty vacuum due in {rooms}",{rooms:l})].filter(u=>!!u)},Ge={mop:(o,s)=>o("v4_room_schedules_mop","Mop every {mop} cleans",{mop:s}),mop_one:o=>o("v4_room_schedules_mop_one","Mop every clean"),quick:(o,s,e)=>o("v4_room_schedules_quick","Quick vacuum every {cov} cleans",{cov:e}),quick_one:o=>o("v4_room_schedules_quick_one","Quick vacuum every clean"),optimal:(o,s,e)=>o("v4_room_schedules_optimal","Optimal vacuum every {cov} cleans",{cov:e}),optimal_one:o=>o("v4_room_schedules_optimal_one","Optimal vacuum every clean"),heavy:(o,s,e)=>o("v4_room_schedules_heavy","Heavy duty vacuum every {cov} cleans",{cov:e}),heavy_one:o=>o("v4_room_schedules_heavy_one","Heavy duty vacuum every clean"),mop_quick:(o,s,e)=>o("v4_room_schedules_mop_quick","Mop every {mop} cleans \xB7 Quick vacuum every {cov} cleans",{mop:s,cov:e}),mop_quick_one_mop:(o,s,e)=>o("v4_room_schedules_mop_quick_one_mop","Mop every clean \xB7 Quick vacuum every {cov} cleans",{cov:e}),mop_quick_one_cov:(o,s)=>o("v4_room_schedules_mop_quick_one_cov","Mop every {mop} cleans \xB7 Quick vacuum every clean",{mop:s}),mop_quick_one_both:o=>o("v4_room_schedules_mop_quick_one_both","Mop every clean \xB7 Quick vacuum every clean"),mop_optimal:(o,s,e)=>o("v4_room_schedules_mop_optimal","Mop every {mop} cleans \xB7 Optimal vacuum every {cov} cleans",{mop:s,cov:e}),mop_optimal_one_mop:(o,s,e)=>o("v4_room_schedules_mop_optimal_one_mop","Mop every clean \xB7 Optimal vacuum every {cov} cleans",{cov:e}),mop_optimal_one_cov:(o,s)=>o("v4_room_schedules_mop_optimal_one_cov","Mop every {mop} cleans \xB7 Optimal vacuum every clean",{mop:s}),mop_optimal_one_both:o=>o("v4_room_schedules_mop_optimal_one_both","Mop every clean \xB7 Optimal vacuum every clean"),mop_heavy:(o,s,e)=>o("v4_room_schedules_mop_heavy","Mop every {mop} cleans \xB7 Heavy duty vacuum every {cov} cleans",{mop:s,cov:e}),mop_heavy_one_mop:(o,s,e)=>o("v4_room_schedules_mop_heavy_one_mop","Mop every clean \xB7 Heavy duty vacuum every {cov} cleans",{cov:e}),mop_heavy_one_cov:(o,s)=>o("v4_room_schedules_mop_heavy_one_cov","Mop every {mop} cleans \xB7 Heavy duty vacuum every clean",{mop:s}),mop_heavy_one_both:o=>o("v4_room_schedules_mop_heavy_one_both","Mop every clean \xB7 Heavy duty vacuum every clean")},Ae=(o,s,e)=>{let a=e?.mopEveryN??null,t=e?.coverageEveryN??null;if(a===null&&t===null)return null;let n=e?.periodicCoverageSetting,r=n==="quick"?"quick":n==="heavy_duty"?"heavy":"optimal",d=a===null?`${r}${t===1?"_one":""}`:t===null?`mop${a===1?"_one":""}`:`mop_${r}${a===1&&t===1?"_one_both":a===1?"_one_mop":t===1?"_one_cov":""}`,l=Ge[d];return l?l(o,a===null?"":j(s,a),t===null?"":j(s,t)):null};var F=["vacuum","mop","vacuum_and_mop"],W=["quick","standard","heavy_duty"],Y=(o,s)=>s==="vacuum"?o("vacuum","Vacuum"):s==="mop"?o("mop","Mop"):o("vacuum_and_mop","Vacuum + mop"),H=(o,s)=>s==="quick"?o("quick","Quick"):s==="standard"?o("standard","Optimal"):o("heavy_duty","Heavy duty"),Le=o=>o("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."),ie=o=>o.cadence||{scope:"plan",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1},le=(o,s,e,a=e?.reasons||[])=>{if(a.includes("coverage_requires_vacuum"))return Le(o);if(a.includes("identity_changed")||a.includes("room_not_on_current_map"))return o("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(a.includes("shared_schedule_unavailable"))return o("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(a.includes("mop_progress_unverified")||a.includes("coverage_progress_unverified")){let d=[];return a.includes("mop_progress_unverified")&&d.push(o("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),a.includes("coverage_progress_unverified")&&d.push(o("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),d.join(" ")}if(a.includes("invalid_cadence_policy"))return o("v4_cadence_policy_invalid","The room schedule needs review before it can be applied.");if(!s||!s.mopEveryN&&!s.coverageEveryN)return o("v4_cadence_not_enabled","No recurring room schedule is enabled.");let t=[],n=e?.mopDue||e?.reasons.includes("mop_due"),r=e?.coverageDue||e?.reasons.includes("coverage_due");return s.mopEveryN&&t.push(n?o("v4_cadence_mop_due","Vacuum and mop is due on this clean."):o("v4_cadence_mop_progress","Mop every {interval} cleans; {completed} counted since the last mop.",{interval:s.mopEveryN,completed:e?.mopProgress??0})),s.coverageEveryN&&t.push(r?o("v4_cadence_coverage_due","{coverage} vacuum rotation is due on this clean.",{coverage:H(o,s.periodicCoverageSetting||"standard")}):o("v4_cadence_coverage_progress","Vacuum rotation every {interval} cleans; {completed} counted so far.",{interval:s.coverageEveryN,completed:e?.coverageProgress??0})),t.join(" ")};var I=(o,s,e)=>{if(!o.state.planDraft.rooms[s]||o.held)return;let t=o.state.planDraft.rooms.map((n,r)=>r===s?{...n,cadence:{...ie(n),...e}}:n);o.intent({type:"patch-plan-draft",patch:{rooms:t}})},ze=(o,s,e,a)=>{let t=s.currentTarget,n=o.state.planDraft.rooms[e];if(!n)return;if(o.held){t.value=ie(n)[a]?.toString()||"";return}let r=t.value;if(r===""){I(o,e,a==="mopEveryN"?{mopEveryN:null,doMopNext:!1}:{coverageEveryN:null,doCoverageNext:!1});return}let d=Number(r);if(!Number.isInteger(d)||d<1||d>100){t.reportValidity();return}I(o,e,a==="coverageEveryN"?{coverageEveryN:d,periodicCoverageSetting:n.cadence?.periodicCoverageSetting||n.coverageSetting}:{mopEveryN:d})},Z=(o,s,e)=>{if(!o.held)return!1;let a=s.currentTarget;return typeof e=="boolean"?a.checked=e:a.value=e,!0},De=(o,s,e,a)=>{let{t,state:n,held:r}=o,d=n.planDraft,l=ie(s),u=s.cadenceProgress,v=(d.id?n.resources.plans.value?.plans.find(h=>h.id===d.id)?.rooms.find(h=>h.roomId===s.roomId):void 0)?.cadence?.scope??null,g=n.resources.plans.value?.rooms.find(h=>h.roomId===s.roomId),_=!!(g?.sharedCadence||g?.sharedCadenceProgress),p=!!(l.mopEveryN||l.coverageEveryN),b=!!(u?.mopProgress||l.doMopNext||s.cadenceReasons?.includes("mop_progress_unverified")),y=!!(u?.coverageProgress||l.doCoverageNext||s.cadenceReasons?.includes("coverage_progress_unverified")),$=d.dirty||n.command!=="idle"||n.managedLock||n.activity!=="idle"&&n.activity!=="docked"||n.dataMode!=="live",z=t("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted."),K=v!==null&&v!==l.scope?l.scope==="shared"?z:t("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule."):v===null&&p?l.scope==="shared"?_?z:t("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero."):t("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):t("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."),f={disabled:r?"true":c,described:r??c};return i`
    <details class="plan-option cadence-config">
      <summary aria-disabled=${f.disabled} aria-describedby=${f.described}>${t("v4_room_cadence_named","Room schedule for {room}",{room:a})}</summary>
      <p class="subtle">${t("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
      <div class="cadence-fields">
        <label class="field ms-field">${t("v4_cadence_scope","Count cleans")}
          <select aria-label=${t("v4_cadence_scope_named","Count cleans for {room}",{room:a})} aria-disabled=${f.disabled} aria-describedby=${f.described} .value=${l.scope}
            @change=${h=>{Z(o,h,l.scope)||I(o,e,{scope:h.currentTarget.value})}}>
            <option value="plan" ?selected=${l.scope==="plan"}>${t("v4_cadence_this_plan","In this plan only")}</option>
            <option value="shared" ?selected=${l.scope==="shared"}>${t("v4_cadence_shared","Across all plans (recommended)")}</option>
          </select>
        </label>
        <label class="field ms-field">${l.mopEveryN===null?t("v4_cadence_mop_off","Mop"):l.mopEveryN===1?t("v4_cadence_mop_interval_one","Mop every clean"):t("v4_cadence_mop_interval","Mop every {count} cleans",{count:l.mopEveryN})}
          <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${t("v4_cadence_mop_interval_named","How often to mop {room}, every 1 to 100 cleans",{room:a})} aria-disabled=${f.disabled} aria-describedby=${f.described} ?readonly=${!!r} .value=${l.mopEveryN?.toString()||""} ?disabled=${s.cleaningMode!=="vacuum"} @change=${h=>ze(o,h,e,"mopEveryN")}>
        </label>
        <label class="field ms-field">${t("v4_cadence_coverage_interval","Vacuum rotation every N cleans")}
          <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${t("v4_cadence_coverage_interval_named","How often to add a vacuum rotation in {room}, every 1 to 100 cleans",{room:a})} aria-disabled=${f.disabled} aria-describedby=${f.described} ?readonly=${!!r} ?disabled=${s.cleaningMode==="mop"} .value=${l.coverageEveryN?.toString()||""} @change=${h=>ze(o,h,e,"coverageEveryN")}>
        </label>
        ${l.coverageEveryN?i`
          <label class="field ms-field">${t("v4_cadence_periodic_coverage","Vacuum rotation level")}
            <select aria-label=${t("v4_cadence_periodic_coverage_named","Vacuum rotation level for {room}",{room:a})} aria-disabled=${f.disabled} aria-describedby=${f.described} ?disabled=${s.cleaningMode==="mop"} .value=${l.periodicCoverageSetting||"standard"}
              @change=${h=>{Z(o,h,l.periodicCoverageSetting||"standard")||I(o,e,{periodicCoverageSetting:h.currentTarget.value})}}
            >${W.map(h=>i`<option value=${h} ?selected=${h===l.periodicCoverageSetting}>${H(t,h)}</option>`)}</select>
          </label>
        `:c}
      </div>
      <p class="subtle" role="status">${K}</p>
      ${s.cleaningMode==="mop"?i`
        <p class="subtle">${l.coverageEveryN?Le(t):t("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming.")}</p>
        ${l.coverageEveryN?i`<button type="button" class="ms-btn ms-btn--secondary" aria-disabled=${f.disabled} aria-describedby=${f.described}
          @click=${()=>I(o,e,{scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1})}
        >${t("v4_cadence_clear_room_coverage","Turn off")}</button>`:c}
      `:c}
      ${s.cleaningMode!=="vacuum"?i`<p class="subtle">${t("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum.")}</p>`:c}
      ${l.mopEveryN&&s.cleaningMode==="vacuum"?i`<p class="subtle">${t("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</p>`:c}
      <div class="plan-options" role="group" aria-label=${t("v4_cadence_next_actions_named","Next clean options for {room}",{room:a})}>
        <label class="plan-option"><input type="checkbox" aria-label=${t("v4_cadence_do_mop_next_named","Do vacuum and mop on the next clean for {room}",{room:a})} aria-disabled=${f.disabled} aria-describedby=${f.described} .checked=${l.doMopNext} ?disabled=${!l.mopEveryN}
          @change=${h=>{Z(o,h,l.doMopNext)||I(o,e,{doMopNext:h.currentTarget.checked})}}><span class="plan-option-copy"><strong>${t("v4_cadence_do_mop_next","Do vacuum and mop on the next clean")}</strong></span></label>
        <label class="plan-option"><input type="checkbox" aria-label=${t("v4_cadence_do_coverage_next_named","Add a vacuum rotation on the next clean for {room}",{room:a})} aria-disabled=${f.disabled} aria-describedby=${f.described} .checked=${l.doCoverageNext} ?disabled=${!l.coverageEveryN||s.cleaningMode==="mop"}
          @change=${h=>{Z(o,h,l.doCoverageNext)||I(o,e,{doCoverageNext:h.currentTarget.checked})}}><span class="plan-option-copy"><strong>${t("v4_cadence_do_coverage_next","Add a vacuum rotation on the next clean")}</strong></span></label>
      </div>
      ${l.coverageEveryN?i`<p class="subtle">${t("v4_cadence_coverage_verification_hint","A vacuum rotation counts only after the robot confirms the vacuum coverage and that the clean finished. If it can't confirm, the rotation stays due for the next clean.")}</p>`:c}
      <p class="subtle" aria-live="polite">${le(t,l,u,s.cadenceReasons)}</p>
      ${d.id&&(l.mopEveryN||l.coverageEveryN||b||y)?i`
        <div class="toolbar">
          ${l.mopEveryN||b?i`<button
            class="danger ms-btn ms-btn--secondary ms-btn--danger"
            type="button"
            aria-label=${t("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:a})}
            data-dialog-launcher="confirmResetCadence"
            ?disabled=${$}
            @click=${()=>o.intent({type:"request-room-cadence-reset",planId:d.id,roomId:s.roomId,mode:"mop"})}
          >${t("v4_reset_mop_cadence_button","Reset mopping")}</button>`:c}
          ${l.coverageEveryN||y?i`<button
            class="danger ms-btn ms-btn--secondary ms-btn--danger"
            type="button"
            aria-label=${t("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:a})}
            data-dialog-launcher="confirmResetCadence"
            ?disabled=${$}
            @click=${()=>o.intent({type:"request-room-cadence-reset",planId:d.id,roomId:s.roomId,mode:"coverage"})}
          >${t("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`:c}
        </div>
        <p class="subtle">${t("v4_reset_cadence_hint","Reset is available for a saved plan while the robot is idle. Cleaning history is kept separately.")}</p>
      `:c}
    </details>
  `};var qe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},We=o=>(...s)=>({_$litDirective$:o,values:s}),J=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,e,a){this._$Ct=s,this._$AM=e,this._$Ci=a}_$AS(s,e){return this.update(s,e)}update(s,e){return this.render(...e)}};var{I:Xe}=xe,He=o=>o;var Ve=()=>document.createComment(""),V=(o,s,e)=>{let a=o._$AA.parentNode,t=s===void 0?o._$AB:s._$AA;if(e===void 0){let n=a.insertBefore(Ve(),t),r=a.insertBefore(Ve(),t);e=new Xe(n,r,o,o.options)}else{let n=e._$AB.nextSibling,r=e._$AM,d=r!==o;if(d){let l;e._$AQ?.(o),e._$AM=o,e._$AP!==void 0&&(l=o._$AU)!==r._$AU&&e._$AP(l)}if(n!==t||d){let l=e._$AA;for(;l!==n;){let u=He(l).nextSibling;He(a).insertBefore(l,t),l=u}}}return e},M=(o,s,e=o)=>(o._$AI(s,e),o),Ze={},Oe=(o,s=Ze)=>o._$AH=s,Be=o=>o._$AH,ee=o=>{o._$AR(),o._$AA.remove()};var je=(o,s,e)=>{let a=new Map;for(let t=s;t<=e;t++)a.set(o[t],t);return a},Fe=We(class extends J{constructor(o){if(super(o),o.type!==qe.CHILD)throw Error("repeat() can only be used in text expressions")}dt(o,s,e){let a;e===void 0?e=s:s!==void 0&&(a=s);let t=[],n=[],r=0;for(let d of o)t[r]=a?a(d,r):r,n[r]=e(d,r),r++;return{values:n,keys:t}}render(o,s,e){return this.dt(o,s,e).values}update(o,[s,e,a]){let t=Be(o),{values:n,keys:r}=this.dt(s,e,a);if(!Array.isArray(t))return this.ut=r,n;let d=this.ut??=[],l=[],u,m,v=0,g=t.length-1,_=0,p=n.length-1;for(;v<=g&&_<=p;)if(t[v]===null)v++;else if(t[g]===null)g--;else if(d[v]===r[_])l[_]=M(t[v],n[_]),v++,_++;else if(d[g]===r[p])l[p]=M(t[g],n[p]),g--,p--;else if(d[v]===r[p])l[p]=M(t[v],n[p]),V(o,l[p+1],t[v]),v++,p--;else if(d[g]===r[_])l[_]=M(t[g],n[_]),V(o,t[v],t[g]),g--,_++;else if(u===void 0&&(u=je(r,_,p),m=je(d,v,g)),u.has(d[v]))if(u.has(d[g])){let b=m.get(r[_]),y=b!==void 0?t[b]:null;if(y===null){let $=V(o,t[v]);M($,n[_]),l[_]=$}else l[_]=M(y,n[_]),V(o,t[v],y),t[b]=null;_++}else ee(t[g]),g--;else ee(t[v]),v++;for(;_<=p;){let b=V(o,l[p+1]);M(b,n[_]),l[_++]=b}for(;v<=g;){let b=t[v++];b!==null&&ee(b)}return this.ut=r,Oe(o,l),ke}});var Ye=["mop_progress_unverified","coverage_progress_unverified","identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy","coverage_requires_vacuum"],ce=class extends E{constructor(){super(...arguments);this._moved="";this.#a=null;this.state=x();this.#e=(e,a,t)=>w(this.localize,e,a,t)}static{this.styles=[S,R,N,C`
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
.cadence-config { grid-column: 1 / -1; grid-template-columns: minmax(0, 1fr); display: grid; gap: var(--ms-space-2); }
.cadence-config > summary { cursor: pointer; min-block-size: var(--ms-control-sm); font-weight: var(--ms-w-bold); }
.cadence-fields { display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--ms-space-2); min-inline-size: 0; }
.cadence-fields > .ms-field { min-inline-size: 0; }
@media (max-width: 25rem) { .split { grid-template-columns: 1fr; } }
`]}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_moved:{state:!0}}}#a;#e;#t(e){this.dispatchEvent(new CustomEvent(P,{detail:e,bubbles:!0,composed:!0}))}#o(e){return j(this.state.locale,e)}#i(e){return e.length?i`<span class="lines">${e.map(a=>i`<span class="line">${k(Ne)}<span>${a}</span></span>`)}</span>`:c}#s(e,a){let t=e.rooms.length,n=e.runBehavior==="ordered",r=t===1?n?this.#e("v4_plan_row_ordered_one","1 room \xB7 Top to bottom, as listed"):this.#e("v4_plan_row_rotation_one","1 room \xB7 Longest-waiting rooms first"):n?this.#e("v4_plan_row_ordered","{count} rooms \xB7 Top to bottom, as listed",{count:this.#o(t)}):this.#e("v4_plan_row_rotation","{count} rooms \xB7 Longest-waiting rooms first",{count:this.#o(t)}),d=e.nextRunPreview?.blocker,l=e.enabled?d&&d!=="plan_disabled"?i`<span class="lines"><span class="line" data-tone="warning">${k(Pe)}<span>${this.#e("v4_plan_row_blocked","Needs attention before it can run")}</span></span></span>`:this.#i(re(this.#e,this.state.locale,e.nextRunPreview?.rooms??[])):c,u=this.#e("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return i`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${e.id}
        aria-describedby=${a?"default-hint":c}
        @click=${()=>this.#t({type:"select-plan",planId:e.id})}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${e.name}</bdi>${a?i`<span class="ms-chip chip-default" title=${u}>${this.#e("v4_plan_default","Default")}</span>`:c}${e.enabled?c:i`<span class="ms-chip">${this.#e("v4_paused","Paused")}</span>`}</strong>
          <small>${r}</small>
          ${l}
        </span>
        <span class="ms-row__trail">${k(ne)}</span>
      </button>
      ${a?i`<span class="sr-only" id="default-hint">${u}</span>`:c}
    </li>`}#l(){let e=this.state.resources.plans.value,a=this.#e("v4_create_plan","Create a plan");if(!e?.plans.length)return i`<div class="empty-card">
        <h3>${this.#e("v4_no_plans","No plans yet")}</h3>
        <p>${this.#e("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#t({type:"select-plan",planId:null})}>${a}</button>
      </div>`;let t=[...e.plans].sort((n,r)=>+(r.id===e.selectedPlan)-+(n.id===e.selectedPlan));return i`<ul class="plain">
      ${t.map(n=>this.#s(n,n.id===e.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#t({type:"select-plan",planId:null})}>
        <span class="ms-row__lead">${k(Ee)}</span>
        <span class="ms-row__body"><strong>${a}</strong></span>
      </button></li>
    </ul>`}#d(){let e=this.state;return e.pendingAction==="save-plan"?this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):e.pendingAction==="run-plan"?this.#e("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):Q(e)?this.#e("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#e("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):be(e)?null:this.#e("v4_reason_save_plan_map","Waiting for the map to be ready.")}#n(){let e=this.state.planDraft.enabled,a=this.#d();return i`
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
          aria-describedby=${a?"enabled-hint enabled-reason":"enabled-hint"}
          aria-disabled=${a?"true":c}
          @click=${()=>{a||this.#t({type:"set-plan-enabled",enabled:!e})}}
        ></button>
      </div>
      ${a?i`<p class="reason" id="enabled-reason">${a}</p>`:c}
    `}#m(e,a,t,n={}){return i`<li class="run-row" ?data-break=${n.part!==void 0}>
      ${n.part===void 0?c:i`<span class="sr-only">${this.#e("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#o(n.part)})}</span>`}
      ${t===null?c:i`<span class="pos-badge" aria-hidden="true">${this.#o(t)}</span>`}
      <span class="row-lines">
        <bdi>${e}</bdi>
        <small>${a}</small>
        ${n.blocked?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:c}
      </span>
    </li>`}#c(){let e=this.state,a=e.planDraft,t=e.resources.plans.value,n=t?.plans.find(h=>h.id===a.id);if(!t||!n)return c;let r=n.nextRunPreview,d=r?.blocker??null,l=!a.enabled,u=!l&&!!(r&&!d&&/^[0-9a-f]{64}$/u.test(r.previewToken??"")),m=n.runBehavior==="ordered",v=u&&r?r.rooms:[],g=!l&&d?$e(e,n)?.jump.roomId??null:null,_=l||u||g||e.pendingAction==="save-plan"?null:d&&fe[d]||ye,p=u?v.length:n.rooms.length,b=u?n.nextRunEstimateSeconds:null,y=b===null?"":this.#o(Math.max(1,Math.round(b/60))),$=b===null?p===1?this.#e("v4_plan_summary_rooms_one","1 room"):this.#e("v4_plan_summary_rooms","{count} rooms",{count:this.#o(p)}):p===1?this.#e("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:y}):this.#e("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#o(p),minutes:y}),z=u&&r?r.missionBoundaries:[],K=u?v.map((h,U)=>{let pe=z.indexOf(U);return this.#m(h.name,q(this.#e,h),m?U+1:null,pe<0?{}:{part:pe+2})}):_e(n).rooms.map(h=>this.#m(t.rooms.find(U=>U.roomId===h.roomId)?.name??h.roomId,q(this.#e,h),null,{blocked:h.roomId===g})),f=a.finishCurrentRoom?this.#e("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#o(a.finishCurrentRoomThreshold)}):a.returnToBase?this.#e("v4_plan_summary_return","Returns to the dock when finished"):null;return i`
      <p class="summary">${$}</p>
      ${this.#i(re(this.#e,e.locale,v))}
      <h3 class="heading">${l?this.#e("v4_plan_rooms_heading","Rooms in this plan"):e.resources.entry?.activePlan?this.#e("v4_next_run_after_active","After this run"):this.#e("v4_next_run_preview","Next run")}</h3>
      ${u&&!m?i`<p class="quiet">${this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}</p>`:c}
      ${z.length?i`<p class="quiet">${this.#e("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:this.#o(z.length+1)})}</p>`:c}
      ${_?i`<p class="problem">${this.#e(_.reasonKey,_.reason)}</p>
        <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#t({type:"open-workflow",workflow:"plan"})}>${this.#e("v4_retry","Try again")}</button>`:c}
      ${u&&m?i`<ol class="run-list" role="list">${K}</ol>`:i`<ul class="run-list" role="list">${K}</ul>`}
      ${this.#n()}
      ${f?i`<p class="quiet">${f}</p>`:c}
    `}willUpdate(e){e.has("state")&&(this.state.workflow!=="plan"||this.state.planView!=="edit")&&(this._moved="")}updated(e){!this.#a||!e.has("state")||(this.renderRoot.querySelector(`[data-move="${CSS.escape(this.#a)}"]`)?.focus(),this.#a=null)}#u(){return this.state.pendingAction==="save-plan"?"edit-held":null}#r(e){this.#u()||this.#t({type:"patch-plan-draft",patch:e})}#v(e,a){this.#r({rooms:this.state.planDraft.rooms.map((t,n)=>n===e?{...t,...a}:t)})}#b(e,a,t,n){let r=[...this.state.planDraft.rooms],d=e+a;if(this.#u()||d<0||d>=r.length)return;let[l]=r.splice(e,1);l&&(r.splice(d,0,l),this.#a=n,this._moved=this.#e("v4_room_moved","{room} moved to position {position}",{room:t,position:this.#o(d+1)}),this.#t({type:"patch-plan-draft",patch:{rooms:r}}))}#h(e){return{disabled:e?"true":c,described:e??c}}#g(e,a,t,n,r,d){let l=`${e.roomId}:${n<0?"up":"down"}`,u=n<0?this.#e("move_room_up","Move {room} earlier",{room:t}):this.#e("move_room_down","Move {room} later",{room:t}),m=n<0?this.#e("v4_room_already_first","{room} is already first",{room:t}):this.#e("v4_room_already_last","{room} is already last",{room:t}),v=r?`${l}-end`:d;return i`<button
        class="ms-btn ms-btn--icon"
        type="button"
        data-move=${l}
        aria-label=${u}
        title=${r?m:u}
        aria-disabled=${r||d?"true":c}
        aria-describedby=${v??c}
        @click=${()=>{r||this.#b(a,n,t,l)}}
      >${k(n<0?Se:Re)}</button>
      ${r?i`<span class="sr-only" id=${`${l}-end`}>${m}</span>`:c}`}#y(e,a,t,n,r,d,l){let u=this.state.planDraft,m=t!==null&&this.state.expandedRoom===e,v=u.rooms.length-1,g=this.#h(l),_=t===null&&d,p=t?Ae(this.#e,this.state.locale,t.cadence):null,b=t?.cadenceReasons?.some(y=>Ye.includes(y));return i`<li class="ms-row edit-row" data-selected=${t?"true":c}>
      <label class="edit-check"><input
        type="checkbox"
        .checked=${t!==null}
        aria-label=${this.#e("v4_room_include_named","Include {room}",{room:a})}
        aria-disabled=${l||_?"true":c}
        aria-describedby=${l??(_?"room-limit":c)}
        @click=${y=>{(l||_)&&y.preventDefault()}}
        @change=${()=>this.#t({type:"toggle-room",roomId:e})}
      ></label>
      ${t?i`<button
          class="edit-disclosure"
          type="button"
          data-room-disclosure=${e}
          aria-expanded=${String(m)}
          aria-label=${this.#e("v4_room_settings_named","Settings for {room}",{room:a})}
          aria-disabled=${g.disabled}
          aria-describedby=${g.described}
          @click=${()=>{l||this.#t({type:"set-plan-view",view:"edit",roomId:m?null:e})}}
        >
          ${r?i`<span class="pos-badge" aria-hidden="true">${this.#o(n+1)}</span>`:c}
          <span class="row-lines">
            <bdi>${a}</bdi>
            <small>${q(this.#e,t)}</small>
            ${p?i`<small>${p}</small>`:c}
            ${b?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:c}
          </span>
          ${k(ne)}
        </button>`:i`<span class="edit-name"><bdi>${a}</bdi></span>`}
      ${t&&r?i`<span class="edit-moves">
        ${this.#g(t,n,a,-1,n===0,l)}
        ${this.#g(t,n,a,1,n===v,l)}
      </span>`:i`<span></span>`}
      ${m&&t?i`<div class="row-expanded">
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select
              aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:a})}
              aria-disabled=${g.disabled}
              aria-describedby=${g.described}
              .value=${t.cleaningMode}
              @change=${y=>{let $=y.currentTarget;l?$.value=t.cleaningMode:this.#v(n,{cleaningMode:$.value})}}
            >${F.map(y=>i`<option value=${y} ?selected=${y===t.cleaningMode} ?disabled=${!!(t.cadence?.mopEveryN&&y!=="vacuum")}>${Y(this.#e,y)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select
              aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:a})}
              aria-disabled=${g.disabled}
              aria-describedby=${g.described}
              ?disabled=${t.cleaningMode==="mop"}
              .value=${t.coverageSetting}
              @change=${y=>{let $=y.currentTarget;l?$.value=t.coverageSetting:this.#v(n,{coverageSetting:$.value})}}
            >${W.map(y=>i`<option value=${y} ?selected=${y===t.coverageSetting}>${H(this.#e,y)}</option>`)}</select>
          </label>
        </div>
        ${t.cleaningMode==="vacuum"?c:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
        ${De({t:this.#e,state:this.state,intent:y=>this.#t(y),held:l},t,n,a)}
      </div>`:c}
    </li>`}#_(e,a,t,n,r,d){let l=[t?`${e}-hint`:"",r??""].filter(Boolean).join(" ");return i`<div class="switch-row">
      <span class="switch-copy">
        <span id=${`${e}-label`}>${a}</span>
        ${t?i`<small id=${`${e}-hint`}>${t}</small>`:c}
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(n)}
        aria-labelledby=${`${e}-label`}
        aria-describedby=${l||c}
        aria-disabled=${r?"true":c}
        @click=${()=>{r||d(!n)}}
      ></button>
    </div>`}#p(){let e=this.state,a=e.planDraft,t=e.resources.plans.value;if(!t)return c;let n=this.#u(),r=this.#h(n),d=a.runBehavior==="ordered",l=a.rooms.length>=100,u=p=>t.rooms.find(b=>b.roomId===p)?.name??p,m=[...a.rooms.map((p,b)=>({roomId:p.roomId,room:p,index:b})),...t.rooms.filter(p=>!a.rooms.some(b=>b.roomId===p.roomId)).map(p=>({roomId:p.roomId,room:null,index:-1}))],v=a.finishCurrentRoomThreshold,g=this.#o(v),_=(p,b)=>i`<button
      class="ms-btn"
      type="button"
      aria-pressed=${String(a.runBehavior===p)}
      aria-disabled=${r.disabled}
      aria-describedby=${r.described}
      @click=${()=>this.#r({runBehavior:p})}
    >${b}</button>`;return i`<div class="edit">
      ${n?i`<p class="reason" id="edit-held">${this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:c}
      <label class="field ms-field">${this.#e("plan_name","Plan name")}
        <input
          maxlength="128"
          autocomplete="off"
          ?readonly=${!!n}
          aria-disabled=${r.disabled}
          aria-describedby=${r.described}
          .value=${a.name}
          @input=${p=>this.#r({name:p.currentTarget.value})}
        >
      </label>
      <div class="order" role="group" aria-labelledby="order-label">
        <span id="order-label">${this.#e("plan_run_behavior","Cleaning order")}</span>
        <div class="ms-segment">
          ${_("intelligent",this.#e("plan_intelligent","Intelligent rotation"))}
          ${_("ordered",this.#e("plan_ordered","Saved order"))}
        </div>
        <p class="quiet">${d?this.#e("v4_plan_order_ordered_hint","Top to bottom, as listed"):this.#e("v4_plan_order_intelligent_hint","Longest-waiting rooms first")}</p>
      </div>
      <div class="list-header">
        <h3 class="heading" id="edit-rooms">${this.#e("v4_rooms_heading","Rooms")}</h3>
        <small>${this.#e("v4_plan_rooms_selected","{selected} of {total} selected",{selected:this.#o(a.rooms.length),total:this.#o(t.rooms.length)})}</small>
      </div>
      ${l?i`<p class="reason" id="room-limit">${this.#e("v4_plan_room_limit","Can't add more rooms until you remove one; a plan holds up to {limit}.",{limit:this.#o(100)})}</p>`:c}
      <ul class="plain" role="list" aria-labelledby="edit-rooms">
        ${Fe(m,p=>p.roomId,p=>this.#y(p.roomId,u(p.roomId),p.room,p.index,d,l,n))}
      </ul>
      <span class="sr-only" role="status">${this._moved}</span>
      <details class="run-end">
        <summary>${this.#e("v4_run_end_options","When a run ends")}</summary>
        ${this.#_("return-dock",this.#e("v4_plan_return_to_dock","Return to the dock when finished"),null,a.returnToBase,n,p=>this.#r({returnToBase:p}))}
        ${this.#_("finish-room",this.#e("v4_plan_finish_room","Finish the current room when you press Stop"),this.#e("v4_plan_finish_room_hint","Only if the room is at least {percent}% done; otherwise the robot stops right away.",{percent:g}),a.finishCurrentRoom,n,p=>this.#r({finishCurrentRoom:p}))}
        ${a.finishCurrentRoom?i`<div class="threshold">
          <span id="finish-threshold-label">${this.#e("v4_plan_finish_threshold","Finish if at least {percent}% done",{percent:g})}</span>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            aria-labelledby="finish-threshold-label"
            aria-valuetext=${`${g}%`}
            aria-disabled=${r.disabled}
            aria-describedby=${r.described}
            .value=${String(v)}
            @input=${p=>{let b=p.currentTarget;n?b.value=String(v):this.#r({finishCurrentRoomThreshold:Number(b.value)})}}
          >
        </div>`:c}
      </details>
    </div>`}render(){let{workflow:e,planView:a}=this.state;return e==="plans"?this.#l():e!=="plan"?c:a==="run"?this.#c():this.#p()}};customElements.get(T)||customElements.define(T,ce);var de=class extends E{constructor(){super(...arguments);this.state=x();this.compact=!1;this.inline=!1}static{this.properties={state:{attribute:!1},localize:{attribute:!1},compact:{type:Boolean,reflect:!0},inline:{type:Boolean,reflect:!0}}}static{this.styles=[S,R,N,C`
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
`]}#a(e,a){return w(this.localize,e,a)}#e(e){this.dispatchEvent(new CustomEvent(P,{detail:e,bubbles:!0,composed:!0}))}#t(e){let a=e.currentTarget.valueAsNumber;Number.isFinite(a)&&this.#e({type:"set-brush",value:a})}render(){let{draw:e}=this.state;return i`
      <div class="controls ms-surface ms-surface--overlay" role="group" aria-label=${this.#a("v4_drawing_precision","Drawing precision")}>
        <div class="row ms-field">
          <label for="brush">${this.#a("brush_size","Brush width")}</label>
          <div class="stepper">
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#a("v4_narrower_brush","Narrower brush")}
              @click=${()=>this.#e({type:"set-brush",value:e.brushMeters/1.25})}
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
                @change=${this.#t}
                aria-label=${this.#a("v4_brush_width_meters","Brush width in meters")}
              />
              <span class="unit">m</span>
            </span>
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#a("v4_wider_brush","Wider brush")}
              @click=${()=>this.#e({type:"set-brush",value:e.brushMeters*1.25})}
            >+</button>
          </div>
          <input
            class="slider"
            type="range"
            min=${.2}
            max=${2.5}
            step="0.01"
            .value=${e.brushMeters.toFixed(2)}
            @input=${this.#t}
            aria-label=${this.#a("v4_brush_width_slider","Brush width slider")}
            aria-valuetext=${`${e.brushMeters.toFixed(2)} m`}
          />
        </div>
        <p class="hint">${this.#a("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
      </div>
    `}};customElements.get(oe)||customElements.define(oe,de);var me=class extends E{constructor(){super(...arguments);this.state=x();this._open=!1;this.#s=e=>{let a=this.renderRoot.querySelector(".more");a&&!e.composedPath().includes(a)&&(this._open=!1)}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[S,R,N,C`
:host { display: contents; }
.more { position: relative; margin-inline-start: auto; }
.more > .ms-btn { transition: none; }
.reason { flex-basis: 100%; margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: end; }
.menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.menu .reason { padding: var(--ms-space-1) var(--ms-space-3); text-align: start; }
`]}#a(e,a,t){return w(this.localize,e,a,t)}#e(e,a=this){a.dispatchEvent(new CustomEvent(P,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this._open=!1)}updated(e){e.has("_open")&&this._open&&this.renderRoot.querySelector("[role=menuitem]")?.focus()}#t(){this._open=!1,this.renderRoot.querySelector(".more > button")?.focus()}#o(e){e.key!=="Escape"||!this._open||(e.preventDefault(),this.#t())}#i(e){let a=e.relatedTarget;a&&!e.currentTarget.contains(a)&&(this._open=!1)}#s;connectedCallback(){super.connectedCallback(),window.addEventListener("pointerdown",this.#s,!0)}disconnectedCallback(){window.removeEventListener("pointerdown",this.#s,!0),super.disconnectedCallback()}#l(){let{command:e,pendingAction:a,planDraft:t}=this.state;return a==="save-plan"?this.#a("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):t.dirty?this.#a("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes."):e==="pending"?this.#a("v4_reason_robot_operation_waiting","Waiting for the robot to finish what it's doing."):null}#d(e){if(this.#l())return;let a=e.currentTarget.closest(".more")?.querySelector("button");this._open=!1,this.#e({type:"open-dialog",dialog:"confirmDeletePlan"},a??this)}render(){let{planView:e,planDraft:a,pendingAction:t}=this.state;if(e==="run"){let r=t==="save-plan"?this.#a("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):t==="run-plan"?this.#a("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return i`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#a("v4_edit_plan_named","Edit {plan}",{plan:a.name})}
          aria-disabled=${r?"true":c}
          aria-describedby=${r?"edit-reason":c}
          @click=${()=>{r||this.#e({type:"set-plan-view",view:"edit"})}}
        >${this.#a("v4_edit","Edit")}</button>
        ${r?i`<p class="reason" id="edit-reason">${r}</p>`:c}
      `}if(!D(this.state,"confirmDeletePlan"))return c;let n=this.#l();return i`
      <div class="more" @keydown=${this.#o} @focusout=${this.#i}>
        <button
          class="ms-btn ms-btn--icon"
          type="button"
          aria-label=${this.#a("v4_more_actions","More actions")}
          aria-haspopup="menu"
          aria-expanded=${String(this._open)}
          data-dialog-launcher="confirmDeletePlan"
          @click=${()=>{this._open=!this._open}}
        >${k(Ce)}</button>
        ${this._open?i`
          <div class="menu ms-surface ms-surface--overlay" @mousedown=${r=>r.preventDefault()}>
            <div role="menu" aria-label=${this.#a("v4_more_actions","More actions")}><button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitem"
              aria-disabled=${n?"true":c}
              aria-describedby=${n?"delete-reason":c}
              @click=${this.#d}
            >${this.#a("plan_delete","Delete")}</button></div>
            ${n?i`<p class="reason" id="delete-reason">${n}</p>`:c}
          </div>
        `:c}
      </div>
    `}};customElements.get(B)||customElements.define(B,me);var Je=(o,s,e)=>i`${o.planView==="run"?i`<bdi>${s}</bdi>`:s}${o.planDraft.dirty?i` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:c}`,Ke=G(B),et=(o,s,e)=>X`<${Ke}
  .state=${o}
  .localize=${s}
  @matic-workspace-intent=${e}
></${Ke}>`,Ue=(o,s,e,a)=>{let t=a?.room;if(t===void 0)return o(s,e,a);let[n,r]=o(s,e,{...a,room:"\0"}).split("\0");return i`${n}<bdi>${t}</bdi>${r}`},tt=(o,s,e,a)=>{let t=e?s.jump:void 0;return i`${Ue(o,s.reasonKey??"",s.reason??"",s.reasonPlaceholders)}${t?i` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>a({type:"set-plan-view",view:"edit",roomId:t.roomId})}
  >${Ue(o,t.labelKey,t.label,t.labelPlaceholders)}</button>`:c}`},at=(o,s,e,a)=>{let t=o.pendingAction==="save-plan",n=s?.id==="save-plan"?"primary-reason":"cancel-reason";return i`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      aria-disabled=${t?"true":c}
      aria-describedby=${t?n:c}
      @click=${r=>{t||a(o.planDraft.id?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"},r.currentTarget)}}
    >${e("v4_cancel","Cancel")}</button>
    ${t&&n==="cancel-reason"?i`<p class="action-reason" id=${n}>${e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:c}
    ${s?c:i`<p class="action-summary">${e("v4_plan_save_after_work","You can save when the robot finishes.")}</p>`}
  `},ot=(o,s,e)=>{let a=e.querySelector(O)?.shadowRoot?.querySelector(T)?.shadowRoot;if(s.workflow==="plan"&&s.planView==="edit"&&s.expandedRoom)return a?.querySelector(`[data-room-disclosure="${CSS.escape(s.expandedRoom)}"]`);if(s.workflow==="plan"&&o.planView==="edit")return e.querySelector(B)?.shadowRoot?.querySelector("button");let t=o.selection.planId;return s.workflow==="plans"&&t?a?.querySelector(`[data-plan-row="${CSS.escape(t)}"]`):null},nt=(o,s,e,a)=>{let t=ot(o,s,e);return a(t)?(t.scrollIntoView({block:"nearest"}),t.focus({preventScroll:!0}),!0):!1};var st=(o,s,e)=>{let a=(m,v,g)=>w(e,m,v,g),t=D(s),n=s.cadenceResetRequest,r=s.resources.plans.value,d=n&&r?.rooms.find(m=>m.roomId===n.roomId)?.name||n?.roomId||"room",l=n?r?.plans.find(m=>m.id===n.planId)?.rooms.find(m=>m.roomId===n.roomId)?.cadence?.scope==="shared":!1,u=n?.mode??"mop";switch(o){case"confirmDeletePlan":return t&&{title:a("v4_delete_plan","Delete plan?"),detail:a("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:t.name}),...t.successor===void 0?{}:{consequence:t.successor===null?a("v4_delete_plan_none","You'll have no default plan."):a("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:t.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return t&&{title:a("v4_delete_area","Delete area?"),detail:a("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:t.name}),...t.successor===void 0?{}:{consequence:t.successor===null?a("v4_delete_area_none","No custom area will be selected."):a("v4_delete_area_selected","{area} becomes the selected custom area.",{area:t.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:u==="mop"?a("v4_reset_mop_cadence_title","Reset mopping progress?"):a("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:l?a("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}):a("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}),cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("v4_reset","Reset"),action:"reset-room-cadence"}}},rt=(o,s,e)=>{let a=o;if(!ve(a.detail))return;if(he(s,a.detail)){o.stopPropagation(),e(a.detail);return}if(a.detail?.type!=="open-dialog")return;let t=a.composedPath().find(n=>n instanceof HTMLElement&&n.hasAttribute("data-dialog-launcher"));return t instanceof HTMLElement?t:void 0},it=(o,s,e,a)=>{let t=o.cadenceResetRequest;e({type:"dismiss-top-layer"}),s!=="reset-room-cadence"?a(s):t&&a({id:s,planId:t.planId,roomId:t.roomId,mode:t.mode})};var Qe=G(T),A=o=>o.currentTarget.value,lt=o=>o.currentTarget.checked,ue=class extends E{constructor(){super(...arguments);this.state=x();this._historyPreviewPosition=null;this.#a=new Te(this,()=>import("./diagnostics-panel-7LA64SIY.js"));this.#e="";this.#s=(e,a,t)=>this.#t(e,a,t)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0}}}static{this.styles=[S,R,N,C`
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
`]}#a;#e;willUpdate(e){if(!e.has("state"))return;let{workflow:a,selection:t}=this.state,n=`${a}:${t.floorId}:${t.historyId??"live"}`;n!==this.#e&&(this.#e=n,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#t(e,a,t){return w(this.localize,e,a,t)}#o(e){return Y(this.#s,e)}#i(e){return H(this.#s,e)}#s;#l(e){return e==="vacuum"?c:i`<p class="subtle">${this.#t("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#d(e){return e==="mop_due"?this.#t("v4_cadence_mop_due_reason","Vacuum and mop are due"):e==="coverage_due"?this.#t("v4_cadence_coverage_due_reason","Vacuum rotation is due"):e==="mop_progress_unverified"?this.#t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):e==="coverage_progress_unverified"?this.#t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):this.#t("v4_cadence_due_unknown_reason","Schedule setting due")}#n(e){this.dispatchEvent(new CustomEvent(P,{detail:e,bubbles:!0,composed:!0}))}#m(e){switch(e){case"rooms":case"plans":case"plan":return{loading:this.#t("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#t("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#t("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#t("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#t("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#t("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#t("v4_loading_history","Loading map history\u2026"),unavailable:this.#t("v4_history_unavailable","Map history is unavailable right now."),empty:this.#t("v4_no_map_history","No saved map snapshots yet.")}}}#c({status:e,value:a},t,n){let r=this.#m(n);return a===null&&(e==="idle"||e==="loading")?i`<div class="loading" role="status">${r.loading}</div>`:e==="error"?i`
        <div class="stack">
          <div class="problem" role="alert">${r.unavailable}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"open-workflow",workflow:n})}>${this.#t("v4_retry","Try again")}</button>
          </div>
        </div>
      `:e==="empty"?i`<div class="empty">${r.empty}</div>`:t}#u(){let e=this.state.resources.plans,a=ge(this.state),t=a!==null,n=this.state.selection.roomIds.length>=100,r=!we(this.state),d=Q(this.state);return this.#c(e,i`
      <div class="stack">
        <h3 class="group-heading" id="rooms-heading">${this.#t("v4_rooms_to_clean","Rooms to clean")}</h3>
        ${d?i`<p class="subtle" id="rooms-busy">${this.#t("v4_rooms_busy","Can't change rooms until the robot finishes or stops.")}</p>`:c}
        <div class="list" role="group" aria-labelledby="rooms-heading">
          ${(e.value?.rooms||[]).map(l=>{let u=this.state.selection.roomIds.includes(l.roomId);return i`
              <div class="room ms-row ms-row--stack" data-selected=${String(u)}>
                <label class="room-choice">
                  <input
                    type="checkbox"
                    .checked=${u}
                    ?disabled=${!u&&n}
                    aria-disabled=${r?"true":c}
                    aria-describedby=${d?"rooms-busy":c}
                    @click=${m=>{r&&m.preventDefault()}}
                    @change=${()=>this.#n({type:"toggle-room",roomId:l.roomId})}
                  >
                  <strong>${l.name}</strong>
                  ${u?i`<small>${this.#t("v4_room_ready","Ready")}</small>`:c}
                </label>
                ${u?this.#v(l.roomId,this.state.selection.roomSettings.find(m=>m.roomId===l.roomId)||{roomId:l.roomId,cleaningMode:"vacuum",coverageSetting:"standard"}):c}
              </div>
            `})}
        </div>
        ${n?i`<p class="subtle" role="status">${this.#t("v4_room_limit_reached","Up to {limit} rooms fit, so remove one to add another.",{limit:100})}</p>`:c}
        <p class="subtle">${this.#t("v4_room_selection_hint","Select rooms here or directly on the map. The map and list stay in sync.")}</p>
        <label class="plan-option">
          <input type="checkbox" .checked=${!this.state.selection.useRoomSchedule} @change=${l=>this.#n({type:"set-use-room-schedule",value:!lt(l)})}>
          <span class="plan-option-copy">
            <strong>${this.#t("v4_override_room_schedule","Override shared schedule settings")}</strong>
            <small>${this.#t("v4_override_room_schedule_hint","This clean follows the shared schedule unless you turn this on to use the settings chosen here. Anything due stays due, and matching cleans still count toward the schedule.")}</small>
          </span>
        </label>
        ${this.state.selection.roomIds.map(l=>{let u=e.value?.rooms.find(m=>m.roomId===l);return u?.sharedCadence||u?.sharedCadenceProgress||u?.sharedCadenceReasons?.length?i`<p class="subtle">${u.name}: ${le(this.#s,u.sharedCadence,u.sharedCadenceProgress,u.sharedCadenceReasons)}</p>`:c})}
        ${this.state.manualRoomPreview.status==="loading"?i`<p role="status" class="subtle">${this.#t("v4_room_preview_loading","Checking settings\u2026")}</p>`:c}
        ${this.state.manualRoomPreview.status==="error"?i`<div class="stack">
            <div role="alert" class="problem">${this.#t("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"retry-room-preview"})}>${this.#t("v4_retry","Try again")}</button></div>
          </div>`:c}
        ${t?this.#r(a.preview):c}
      </div>
    `,"rooms")}#r(e){let a=new Set(e.missionBoundaries);return i`
      <section class="stack" aria-labelledby="effective-rooms-heading" aria-live="polite">
        <h3 class="group-heading" id="effective-rooms-heading">${this.#t("v4_effective_room_preview","Effective cleaning preview")}</h3>
        ${e.blocker?i`<p class="problem" role="alert">${e.blocker==="invalid_cadence_policy"&&this.state.selection.useRoomSchedule&&this.state.selection.roomSettings.some(t=>t.cleaningMode!=="vacuum")?this.#t("v4_room_preview_schedule_override","The shared schedule can't use the cleaning mode you chose. Turn on Override shared schedule settings, or choose a mode that works with the schedule."):this.#t("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.")}</p>`:c}
        ${e.rooms.length?i`<ol class="list" aria-label=${this.#t("v4_effective_room_order","Effective room order")}>
            ${e.rooms.map((t,n)=>i`
              <li class="ms-row ms-row--stack">
                ${a.has(n)?i`<strong>${this.#t("v4_room_mission_boundary","New part (the robot may stop at the dock first)")}</strong>`:c}
                <strong>${t.name}</strong>
                <span class="subtle">${q(this.#s,t)}</span>
                ${t.cadenceReasons.length?i`<span class="subtle">${t.cadenceReasons.map(r=>this.#d(r)).join("; ")}</span>`:c}
              </li>
            `)}
          </ol>`:c}
      </section>
    `}#v(e,a){let t=this.state.resources.plans.value?.rooms.find(n=>n.roomId===e)?.name||this.#t("v4_room","Room");return i`
      <div class="split room-settings">
        <label class="field ms-field">${this.#t("v4_cleaning_system","Cleaning mode")}
          <select
            aria-label=${this.#t("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:t})}
            .value=${a.cleaningMode}
            @change=${n=>this.#n({type:"patch-room-settings",roomId:e,cleaningMode:A(n)})}
          >${F.map(n=>i`<option value=${n} ?selected=${n===a.cleaningMode}>${this.#o(n)}</option>`)}</select>
        </label>
        <label class="field ms-field">${this.#t("vacuum_coverage","Vacuum coverage")}
          <select
            aria-label=${this.#t("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:t})}
            ?disabled=${a.cleaningMode==="mop"}
            .value=${a.coverageSetting}
            @change=${n=>this.#n({type:"patch-room-settings",roomId:e,coverageSetting:A(n)})}
          >${W.map(n=>i`<option value=${n} ?selected=${n===a.coverageSetting}>${this.#i(n)}</option>`)}</select>
        </label>
      </div>
      ${this.#l(a.cleaningMode)}
    `}#b(){let e=this.state.workflow==="plans"?"plans":"plan";return this.#c(this.state.resources.plans,X`<${Qe}
      .state=${this.state}
      .localize=${this.localize}
    ></${Qe}>`,e)}#h(){let e=this.state.resources.areas;return i`
      <div class="stack">
        <p class="subtle">${this.state.draw.tool==="outline"?this.#t("v4_zone_coverage","Place points around the area. Shading shows where the robot cleans inside the outline; narrow edges may stay uncovered."):this.#t("v4_draw_floor_hint","Paint only on the mapped floor. Zooming and panning never change the area.")}</p>
        ${this.state.draw.tool!=="outline"?i`<p class="subtle">${this.#t("v4_keyboard_draw_help","Keyboard: focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>`:c}
        ${this.#c(e,i`
          <div class="group">
            <h3 class="group-heading" id="areas-heading">${this.#t("area_workspace_title","Custom areas")}</h3>
            <div class="list" role="group" aria-labelledby="areas-heading">
            <button class="list-button ms-row ms-row" type="button" @click=${()=>this.#n({type:"select-area",areaId:null})}>${this.#t("area_new","New area")}</button>
            ${(e.value?.areas||[]).map(a=>i`
              <button class="list-button ms-row ms-row" type="button" @click=${()=>{this.#n({type:"select-area",areaId:a.id,workflow:"areaReview"})}}>
                <span>${a.name}</span>
                <small>${a.status==="current"?this.#t("area_workspace_ready","Ready"):this.#t("v4_review","Review")}</small>
              </button>
            `)}
            </div>
          </div>
        `,"draw")}
      </div>
    `}#g(){let e=this.state.areaDraft,a=this.state.resources.areas,t=e.canRebind||e.status==="review",n=!t&&(e.status==="stale"||e.status==="unknown");return i`
      <div class="stack">
        ${a.status==="error"?i`
          <div class="stack">
            <div class="problem" role="alert">${this.#m("areaReview").unavailable}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"open-workflow",workflow:"areaReview"})}>${this.#t("v4_retry","Try again")}</button></div>
          </div>
        `:c}
        ${t?i`<div class="notice" data-tone="warning" role="status">${this.#t("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:c}
        ${n?i`<div class="problem" role="alert">${this.#t("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:c}
        <label class="field ms-field">${this.#t("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} @input=${r=>this.#n({type:"patch-area-draft",patch:{name:A(r)}})}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#t("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} @change=${r=>this.#n({type:"patch-area-draft",patch:{cleaningMode:A(r)}})}>${F.map(r=>i`<option value=${r} ?selected=${r===e.cleaningMode}>${this.#o(r)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#t("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} @change=${r=>this.#n({type:"patch-area-draft",patch:{coverageSetting:A(r)}})}>${W.map(r=>i`<option value=${r} ?selected=${r===e.coverageSetting}>${this.#i(r)}</option>`)}</select>
          </label>
        </div>
        ${this.#l(e.cleaningMode)}
        <div class="toolbar">
          <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"open-workflow",workflow:"draw"})}>${this.#t("v4_edit_outline","Redraw")}</button>
          ${D(this.state,"confirmDeleteArea")?i`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#t("v4_delete_area_label","Delete area")}
              data-dialog-launcher="confirmDeleteArea"
              @click=${()=>this.#n({type:"open-dialog",dialog:"confirmDeleteArea"})}
            >${this.#t("area_delete","Delete")}</button>
          `:c}
        </div>
      </div>
    `}#y(){let e=this.state.resources.history,a=e.value,t=a?.floors.find(m=>m.id===this.state.selection.floorId)||a?.floors.find(m=>m.active)||a?.floors[0],n=t?.snapshots||[],r=this.state.selection.historyId?Math.max(0,n.findIndex(m=>m.id===this.state.selection.historyId)):n.length,d=t?.active?this.#t("map_timeline_live_action","Live"):this.#t("v4_return_current_floor","Return to current floor"),l=this._historyPreviewPosition??r,u=n[l];return this.#c(e,i`
      <div class="stack">
        ${(a?.floors.length||0)>1?i`
          <div class="group">
            <h3 class="group-heading" id="floors-heading">${this.#t("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(a?.floors||[]).map((m,v)=>i`
              <button
                class="floor ms-row ms-row"
                type="button"
                aria-current=${String(m.id===t?.id)}
                @click=${()=>this.#n({type:"set-floor",floorId:m.id})}
              >
                <span>${m.label||(m.active?this.#t("v4_current_floor","Current floor"):this.#t("v4_saved_floor","Saved floor {number}",{number:m.ordinal??v}))}</span>
                <small>${m.active?this.#t("map_timeline_live_action","Live"):this.#t("v4_read_only","Read only")}</small>
              </button>
            `)}
            </div>
          </div>
        `:c}
        <div class="timeline">
          <label class="field ms-field">${this.#t("map_timeline_label","Map timeline")}
            <input
              type="range"
              min="0"
              max=${String(n.length)}
              step="1"
              .value=${String(l)}
              aria-valuetext=${u?se(u.createdAt,this.dates):d}
              ?disabled=${!n.length}
              @input=${m=>{this._historyPreviewPosition=Number(A(m))}}
              @change=${m=>{let v=Number(A(m));this._historyPreviewPosition=null,this.#n({type:"set-history",historyId:v===n.length?null:n[v]?.id||null})}}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId&&!!t?.active)} @click=${()=>this.#n({type:"set-history",historyId:null})}><span>${d}</span><small>${this.#t("v4_current","Current")}</small></button>
            ${n.map((m,v)=>i`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(m.id===this.state.selection.historyId)} @click=${()=>this.#n({type:"set-history",historyId:m.id})}>
                <span>${se(m.createdAt,this.dates)}</span><small>${this.#t("v4_history_position","{position} of {count}",{position:v+1,count:n.length})}</small>
              </button>
            `)}
          </div>
        </div>
        <p class="subtle">${this.#t("v4_history_privacy","Saved maps show one floor each and never show where the robot is now.")}</p>
      </div>
    `,"history")}#_(){return this.#a.request(),this.#a.status!=="ready"?Ie(this.#a.status,this.localize,this.retry):i`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}#p(e){return i`<fieldset class="workflow-fields" ?disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}>${e}</fieldset>`}render(){switch(this.state.workflow){case"rooms":return this.#u();case"plans":case"plan":return this.#b();case"draw":return this.#p(this.#h());case"areaReview":return this.#p(this.#g());case"history":return this.#p(this.#y());case"support":return this.#_();case"none":return c}}};customElements.get(O)||customElements.define(O,ue);export{ue as MaticMapWorkflowV4,tt as actionReason,it as confirmDialog,st as dialogCopy,rt as dialogLauncher,nt as focusPlanTarget,at as planCancel,Je as planTitle,et as planTools};
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
