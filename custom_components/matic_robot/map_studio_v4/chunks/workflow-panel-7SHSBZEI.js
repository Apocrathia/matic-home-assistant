import{D as Ue,G as Qe,P as W,R as H,S as Ge,T as Xe,U as Ze,a as le,b as ce,d as we,e as j,f as te,g as I}from"./chunk-XQKCWTFH.js";import{A as je,B as Fe,M as Ke,O as Q,Q as k,a as L,b as A,c as q,f as de,i as se,y as me,z as Ve}from"./chunk-MXR2NNCV.js";import{$ as ke,E as Ae,F as qe,G as We,H as He,J as ie,K as De,R as M,S as i,V as Oe,W as l,X as Be,Y as z,Z as T,c as K,e as ye,f as $e,j as Te,k as Ie,n as N,p as Ne,q as ze,t as U,z as Le}from"./chunk-LIKAU5TE.js";var ue=1,ae=100,Ye=(t,n,e)=>{if(n)return e;let a=t.trim();if(a==="")return null;let s=Number(a);return Number.isFinite(s)?Math.min(ae,Math.max(ue,Math.round(s))):e},Je=(t,n)=>t===null?n>0?ue:null:t+n<ue?null:Math.min(ae,t+n),et=M`
.ms-stepper { --ms-local: var(--ms-surface-card); display: inline-grid; flex: none; grid-template-columns: var(--ms-control) minmax(3rem, 4.5rem) var(--ms-control); gap: var(--ms-space-1); align-items: center; border: 1px solid var(--ms-line-strong); border-radius: var(--ms-radius-sm); background: var(--ms-local); }
.ms-stepper--readonly { grid-template-columns: minmax(3rem, 4.5rem); }
.ms-stepper .ms-btn { border-radius: calc(var(--ms-radius-sm) - 1px); }
.ms-stepper input { inline-size: 100%; min-inline-size: 0; min-block-size: var(--ms-control); margin: 0; padding: 0; border: 0; border-radius: var(--ms-radius-xs); color: var(--ms-text); background: transparent; font: inherit; font-size: var(--ms-t-md); font-weight: var(--ms-w-medium); font-variant-numeric: tabular-nums; text-align: center; appearance: textfield; -moz-appearance: textfield; }
.ms-stepper input::-webkit-inner-spin-button, .ms-stepper input::-webkit-outer-spin-button { margin: 0; appearance: none; -webkit-appearance: none; }
.ms-stepper input::placeholder { color: var(--ms-text-quiet); font-weight: var(--ms-w-medium); opacity: 1; }
.ms-stepper input:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: -2px; }
.ms-stepper input[readonly] { color: var(--ms-text-quiet); }
@media (forced-colors: active) { .ms-stepper { border: 1px solid CanvasText; } }
`,tt=t=>{let{id:n,t:e,value:a}=t,s=t.heldBy!==null,o=i`<input
    id=${n}
    type="number"
    inputmode="numeric"
    min="1"
    max=${ae}
    step="1"
    placeholder=${e("v4_cadence_off","Off")}
    aria-labelledby=${t.labelId}
    aria-describedby=${t.describedBy??l}
    aria-disabled=${s&&!t.readonly?"true":l}
    ?readonly=${t.readonly||s}
    .value=${a===null?"":String(a)}
    @change=${m=>{let c=m.currentTarget,d=t.readonly||s?a:Ye(c.value,c.validity.badInput,a);c.value=d===null?"":String(d),d!==a&&t.commit(d)}}
  >`;if(t.readonly)return i`<span class="ms-stepper ms-stepper--readonly">${o}</span>`;let r=m=>{let d=(m<0?a===null:a===ae)?m<0?e("v4_cadence_stepper_off_reason","This schedule is already off."):e("v4_cadence_stepper_max_reason","Every 100 cleans is the longest schedule."):null,u=`${n}-${m<0?"min":"max"}`,v=m<0?e("v4_stepper_decrease","Decrease {label}",{label:t.label}):e("v4_stepper_increase","Increase {label}",{label:t.label});return i`<button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${v}
      aria-controls=${n}
      aria-disabled=${d||s?"true":l}
      aria-describedby=${[d?u:null,t.heldBy].filter(Boolean).join(" ")||l}
      title=${d??l}
      @click=${()=>{!d&&!s&&t.commit(Je(a,m))}}
    >${k(m<0?Ve:me)}${d?i`<span class="sr-only" id=${u}>${d}</span>`:l}</button>`};return i`<span class="ms-stepper">${r(-1)}${o}${r(1)}</span>`};var ne=["vacuum","mop","vacuum_and_mop"],G=["quick","standard","heavy_duty"],_e=(t,n)=>n==="vacuum"?t("vacuum","Vacuum"):n==="mop"?t("mop","Mop"):t("vacuum_and_mop","Vacuum + mop"),X=(t,n)=>n==="quick"?t("quick","Quick"):n==="standard"?t("standard","Optimal"):t("heavy_duty","Heavy duty"),at=t=>t("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."),nt=(t,n,e,a=e?.reasons||[])=>{if(a.includes("coverage_requires_vacuum"))return at(t);if(a.includes("identity_changed")||a.includes("room_not_on_current_map"))return t("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(a.includes("shared_schedule_unavailable"))return t("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(a.includes("mop_progress_unverified")||a.includes("coverage_progress_unverified")){let m=[];return a.includes("mop_progress_unverified")&&m.push(t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),a.includes("coverage_progress_unverified")&&m.push(t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),m.join(" ")}if(a.includes("invalid_cadence_policy"))return t("v4_cadence_policy_invalid","The room schedule needs review before it can be applied.");if(!n||!n.mopEveryN&&!n.coverageEveryN)return t("v4_cadence_not_enabled","No recurring room schedule is enabled.");let s=[],o=e?.mopDue||e?.reasons.includes("mop_due"),r=e?.coverageDue||e?.reasons.includes("coverage_due");return n.mopEveryN&&s.push(o?t("v4_cadence_mop_due","Vacuum and mop is due on this clean."):t("v4_cadence_mop_progress","Mop every {interval} cleans; {completed} counted since the last mop.",{interval:n.mopEveryN,completed:e?.mopProgress??0})),n.coverageEveryN&&s.push(r?t("v4_cadence_coverage_due","{coverage} vacuum rotation is due on this clean.",{coverage:X(t,n.periodicCoverageSetting||"standard")}):t("v4_cadence_coverage_progress","Vacuum rotation every {interval} cleans; {completed} counted so far.",{interval:n.coverageEveryN,completed:e?.coverageProgress??0})),s.join(" ")},xt={scope:"shared",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1},he=t=>!!(t&&(t.mopEveryN!==null||t.coverageEveryN!==null)),St={quick:(t,n,e)=>n===null?t("v4_cadence_coverage_quick_off","Quick vacuum"):e?t("v4_cadence_coverage_quick_one","Quick vacuum every clean"):t("v4_cadence_coverage_quick","Quick vacuum every {count} cleans",{count:n}),standard:(t,n,e)=>n===null?t("v4_cadence_coverage_optimal_off","Optimal vacuum"):e?t("v4_cadence_coverage_optimal_one","Optimal vacuum every clean"):t("v4_cadence_coverage_optimal","Optimal vacuum every {count} cleans",{count:n}),heavy_duty:(t,n,e)=>n===null?t("v4_cadence_coverage_heavy_off","Heavy duty vacuum"):e?t("v4_cadence_coverage_heavy_one","Heavy duty vacuum every clean"):t("v4_cadence_coverage_heavy","Heavy duty vacuum every {count} cleans",{count:n})},Rt={quick:(t,n)=>n?t("v4_cadence_next_mop_quick","Mop and quick vacuum on the next clean"):t("v4_cadence_next_quick","Quick vacuum on the next clean"),standard:(t,n)=>n?t("v4_cadence_next_mop_optimal","Mop and optimal vacuum on the next clean"):t("v4_cadence_next_optimal","Optimal vacuum on the next clean"),heavy_duty:(t,n)=>n?t("v4_cadence_next_mop_heavy","Mop and heavy duty vacuum on the next clean"):t("v4_cadence_next_heavy","Heavy duty vacuum on the next clean")},Ct=(t,n,e)=>e===null?t("v4_cadence_mop_off","Mop"):e===1?t("v4_cadence_mop_interval_one","Mop every clean"):t("v4_cadence_mop_interval","Mop every {count} cleans",{count:H(n,e)}),Et=(t,n,e,a)=>St[e](t,a===null?null:H(n,a),a===1),Pt=["identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy"],oe=({room:t,saved:n,catalogRoom:e})=>{let a=t.cadence??xt,s=e?.sharedCadence,o=s===void 0&&(e?.sharedCadenceReasons?.length??0)>0,r=s!==void 0||o,m=n?.cadence?.scope==="shared",c=s!==void 0&&!m&&t.cadence?.scope==="shared";return{policy:a,shared:s,sharedExists:r,participating:m,joinPending:c,progress:c?e?.sharedCadenceProgress:t.cadenceProgress,reasons:c?e?.sharedCadenceReasons??[]:t.cadenceReasons??[],savedPolicy:n?.cadence,savedProgress:n?.cadenceProgress,sharedFits:!s||(s.mopEveryN===null||t.cleaningMode==="vacuum")&&(s.coverageEveryN===null||t.cleaningMode!=="mop"),sharedBroken:o}},D={mop:{every:"mopEveryN",flag:"doMopNext",next:"nextMopIn",count:"mopProgress"},coverage:{every:"coverageEveryN",flag:"doCoverageNext",next:"nextCoverageIn",count:"coverageProgress"}},ot=(t,n)=>!!(t.joinPending?t.shared:t.savedPolicy)?.[D[n].flag],xe=t=>!t.joinPending&&t.savedPolicy!==void 0&&t.savedPolicy.scope!==t.policy.scope,rt=(t,n)=>{let{every:e,flag:a,next:s,count:o}=D[n],r=t.policy[e];if(!t.progress||r===null)return null;if(!(!t.joinPending&&(xe(t)||r!==(t.savedPolicy?.[e]??null)||t.policy[a]!==ot(t,n))))return t.progress[s];let c=xe(t)?0:t.progress[o];return t.policy[a]||c>=r-1?1:r-c},Mt=(t,n)=>{let e=D[n].every,a=t.savedPolicy?.[e]??null;return!t.joinPending&&a!==null&&t.policy[e]!==null&&t.policy[e]!==a},ge=(t,n)=>{let e=t.policy[D[n].every];return e!==null&&e>1&&(ot(t,n)||rt(t,n)!==1)},it=({room:t},n)=>({mop:!n.reasons.includes("mop_progress_unverified")&&t.cleaningMode!=="vacuum"&&n.policy.mopEveryN===null,coverage:!n.reasons.includes("coverage_progress_unverified")&&t.cleaningMode==="mop"}),st=(t,n,e,a)=>{let s=e.policy[D[a].every],o=rt(e,a);return s===null?t("v4_cadence_status_off","Not scheduled"):s===1?t("v4_cadence_status_every","Due every clean"):e.policy[D[a].flag]||o===1?t("v4_cadence_status_next","Due next clean"):Mt(e,a)?t("v4_cadence_status_edited","Keeps the progress so far"):xe(e)||o===null?null:t("v4_cadence_status_in","Due in {count} cleans",{count:H(n,o)})},Tt=(t,n,e)=>{let{policy:a,participating:s}=n,o=he(a);if(n.joinPending)return t("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");if(s&&a.scope==="plan")return t("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule.");if(!s&&a.scope==="shared"&&o)return t("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero.");let r=["mop","coverage"].some(m=>a[D[m].every]!==null&&(n.savedProgress?.[D[m].count]??0)>0);return a.scope==="plan"&&o&&!he(n.savedPolicy)&&!r?t("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):n.savedPolicy&&(a.mopEveryN!==n.savedPolicy.mopEveryN||a.coverageEveryN!==n.savedPolicy.coverageEveryN)?t("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."):s?t("v4_cadence_shared_edit_effect","Changes apply to every plan that uses {room}'s shared schedule.",{room:e}):null},It=(t,n,e)=>{let a=oe(e),{policy:s,reasons:o}=a,{room:r,saved:m,name:c}=e,d=s.coverageEveryN!==null,u=(d?null:e.offLevel)??s.periodicCoverageSetting??"heavy_duty",v=C=>o.includes(C),h=v("mop_progress_unverified"),{mop:g,coverage:p}=it(e,a),b=v("coverage_progress_unverified"),S=!b&&r.cleaningMode==="mop"&&d,_=We(o.filter(C=>Pt.includes(C)),c),x=s.doMopNext||s.doCoverageNext,E=x?s.doMopNext:ge(a,"mop"),P=x?s.doCoverageNext:ge(a,"coverage"),w=(C,V,J)=>m!==void 0&&((C??0)>0||!!V||!!m.cadenceReasons?.includes(J));return{policy:s,level:u,mop:{every:s.mopEveryN,label:Ct(t,n,s.mopEveryN),status:st(t,n,a,"mop"),reason:h?t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):g?t("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum."):null,blocked:g,unverified:h},coverage:{every:s.coverageEveryN,label:Et(t,n,u,s.coverageEveryN),status:st(t,n,a,"coverage"),reason:b?t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):S?at(t):p?t("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming."):null,blocked:p,unverified:b},legacyCoverage:S,roomReason:_?t(_.reasonKey,_.reason,_.reasonPlaceholders):null,sharedHint:a.shared!==void 0&&a.sharedFits&&!a.participating&&s.scope==="shared"&&!he(s),joinPending:a.joinPending,participating:a.participating,next:E||P?{label:P?Rt[u](t,E):t("v4_cadence_next_mop","Mop on the next clean"),on:x,mop:E,coverage:P,blocked:E&&g?"mop":P&&p?"coverage":null}:null,explanation:Tt(t,a,c),scope:s.scope,resettable:{mop:w(m?.cadenceProgress?.mopProgress,m?.cadence?.doMopNext,"mop_progress_unverified"),coverage:w(m?.cadenceProgress?.coverageProgress,m?.cadence?.doCoverageNext,"coverage_progress_unverified")},sharedReason:Se(a)?a.sharedBroken?t("v4_cadence_shared_broken_reason","Can't count across all plans until you fix this room's shared schedule in a plan that uses it."):t("v4_cadence_shared_mode_reason","Can't count across all plans until this room's cleaning mode works with its shared schedule."):null}},lt=t=>t.shared&&t.sharedFits&&!t.participating?{...t.shared,scope:"shared"}:null,Se=t=>t.sharedExists&&(!t.sharedFits||t.sharedBroken)&&!t.participating,ct=(t,n,e)=>{let a=oe(t),{policy:s}=a;if(a.joinPending)return null;if(e!==null&&!he(s)&&s.scope==="shared"){let r=lt(a);if(r)return r;if(Se(a))return ct({...t,room:{...t.room,cadence:{...s,scope:"plan"}}},n,e)}let o=e!==null&&e>1;return n==="mop"?{...s,mopEveryN:e,doMopNext:o&&s.doMopNext}:e===null?{...s,coverageEveryN:null,doCoverageNext:!1}:s.coverageEveryN===null?{...s,coverageEveryN:e,periodicCoverageSetting:t.offLevel??s.periodicCoverageSetting??"heavy_duty"}:{...s,coverageEveryN:e,doCoverageNext:o&&s.doCoverageNext}},Nt=(t,n)=>{let e=oe(t);return e.joinPending||e.policy.coverageEveryN===null?null:{...e.policy,periodicCoverageSetting:n}},zt=(t,n)=>{let e=oe(t);if(e.joinPending)return null;let a=ge(e,"mop"),s=ge(e,"coverage");if(!a&&!s&&!e.policy.doMopNext&&!e.policy.doCoverageNext)return null;let o=it(t,e);return n&&(a&&o.mop||s&&o.coverage)?null:n?{...e.policy,doMopNext:a,doCoverageNext:s}:{...e.policy,doMopNext:!1,doCoverageNext:!1}},Lt=(t,n)=>{let e=oe(t);return n==="shared"&&Se(e)?null:(n==="shared"?lt(e):null)??{...e.policy,scope:n}},At=t=>({...t,scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1}),qt=(t,n)=>n.planDraft.dirty?t("v4_reason_reset_unsaved","Can't reset until you save or cancel your changes."):n.command!=="idle"||n.managedLock||n.activity!=="idle"&&n.activity!=="docked"||n.dataMode!=="live"?t("v4_reason_reset_busy","Can't reset until the robot is idle and the map is live."):null,Wt=(t,n,e,a)=>{let s=t.resources.plans.value,o=t.planDraft.id;return{room:n,saved:o?s?.plans.find(r=>r.id===o)?.rooms.find(r=>r.roomId===n.roomId):void 0,catalogRoom:s?.rooms.find(r=>r.roomId===n.roomId),name:e,offLevel:a}},ve="\0",pe=(t,n)=>{let[e,...a]=t.split(ve);return a.length?i`${e}<bdi>${n}</bdi>${a.join(n)}`:t},dt=(t,n,e,a)=>{let{t:s,state:o,held:r}=t,m=o.planDraft,c=Wt(o,n,a,t.offLevel),d=It(s,o.locale,{...c,name:ve}),u=(f,y,R="small")=>R==="p"?i`<p class="sched-status sched-reason" id=${f??l}>${k(Q)}<span>${y}</span></p>`:i`<small class="sched-status sched-reason" id=${f??l}>${k(Q)}<span>${y}</span></small>`,{policy:v,next:h}=d,g=f=>{if(!f||r)return;let y=m.rooms.map((R,$)=>$===e?{...R,cadence:f}:R);t.intent({type:"patch-plan-draft",patch:{rooms:y}})},p={disabled:r?"true":l,described:r??l},b=(...f)=>f.filter(Boolean).join(" ")||null,S=(f,y)=>y.reason?u(f,y.reason):y.status?i`<small class="sched-status" id=${f}>${y.status}</small>`:l,_=qt(s,o),x=!!(r||_),E=(f,y,R,$=null)=>i`<button
    class=${y}
    type="button"
    role=${$??l}
    tabindex=${$?"-1":l}
    aria-label=${f==="mop"?s("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:a}):s("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:a})}
    aria-disabled=${x?"true":l}
    aria-describedby=${r??(_?R:null)??l}
    @click=${()=>{x||!m.id||(t.menu.close(!1),t.intent({type:"request-room-cadence-reset",planId:m.id,roomId:n.roomId,mode:f}))}}
  >${f==="mop"?s("v4_reset_mop_cadence_button","Reset mopping"):s("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`,P=s("v4_room_more_named","More for {room}",{room:a}),{menu:w}=t,C=m.id&&(d.resettable.mop||d.resettable.coverage)?i`<div class="room-more" @keydown=${w.keydown} @focusout=${w.focusout}>
    <button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${P}
      title=${P}
      aria-haspopup="menu"
      aria-expanded=${String(w.open)}
      aria-disabled=${p.disabled}
      aria-describedby=${p.described}
      @click=${()=>{r||w.toggle()}}
    >${k(de)}</button>
    ${w.open&&!r?i`<div class="menu ms-surface ms-surface--overlay" @mousedown=${f=>f.preventDefault()}>
      <div role="menu" aria-label=${P}>
        ${d.resettable.mop?E("mop","ms-row ms-row--menu","reset-reason","menuitem"):l}
        ${d.resettable.coverage?E("coverage","ms-row ms-row--menu","reset-reason","menuitem"):l}
      </div>
      ${_?i`<div class="reason">${u("reset-reason",_,"p")}</div>`:l}
    </div>`:l}
  </div>`:l,V=(f,y,R)=>{let $=`sched-${f}`,ee=y.reason||y.status?`${$}-status`:null;return i`<div class="sched-row">
      <label class="sched-label" id=${`${$}-label`} for=${$}>${y.label}</label>
      <div class="sched-controls">
        ${R}
        ${tt({id:$,labelId:`${$}-label`,label:y.label,value:y.every,describedBy:b(ee,r),heldBy:r??(y.blocked?ee:null),readonly:d.joinPending,t:s,commit:re=>g(ct(c,f,re))})}
      </div>
      ${S(`${$}-status`,y)}
      ${y.unverified&&m.id?i`${E(f,"ms-btn ms-btn--secondary",`${$}-reset-reason`)}
        ${_?u(`${$}-reset-reason`,_,"p"):l}`:l}
    </div>`},J=r??(d.coverage.blocked?"sched-coverage-status":null),kt=d.joinPending?l:i`<select
    class="ms-select sched-level"
    aria-label=${s("v4_cadence_level_named","Vacuum level for {room}",{room:a})}
    aria-disabled=${J?"true":l}
    aria-describedby=${J??l}
    .value=${d.level}
    @change=${f=>{let y=f.currentTarget;if(J){y.value=d.level;return}let R=y.value,$=Nt(c,R);t.setOffLevel($?null:R),$&&g($)}}
  >${G.map(f=>i`<option value=${f} ?selected=${f===d.level}>${X(s,f)}</option>`)}</select>`;return i`<section class="schedule" role="group" aria-label=${s("v4_room_cadence_named","Room schedule for {room}",{room:a})}>
    <div class="schedule-head"><h3>${s("v4_room_schedule","Schedule")}</h3>${C}</div>
    ${d.roomReason?u(null,pe(d.roomReason,a),"p"):l}
    ${d.sharedHint?i`<p class="schedule-note">${pe(s("v4_cadence_shared_available","{room} has a shared schedule, and turning on a row uses it.",{room:ve}),a)}</p>`:l}
    ${V("mop",d.mop,l)}
    ${V("coverage",d.coverage,kt)}
    ${d.legacyCoverage?i`<button
      type="button"
      class="ms-btn ms-btn--secondary sched-off"
      aria-label=${s("v4_cadence_turn_off_named","Turn off the vacuum rotation in {room}",{room:a})}
      aria-disabled=${p.disabled}
      aria-describedby=${p.described}
      @click=${()=>g(At(v))}
    >${s("v4_cadence_clear_room_coverage","Turn off")}</button>`:l}
    ${h?i`<div class="switch-row">
      <span class="switch-copy">
        <span id="sched-next-label">${h.label}</span>
        <small id="sched-next-hint">${s("v4_cadence_next_hint","Brings it forward once; the schedule then continues as usual.")}</small>
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(h.on)}
        aria-labelledby="sched-next-label"
        aria-describedby=${b("sched-next-hint",r??(d.joinPending?"sched-join":h.blocked?`sched-${h.blocked}-status`:null))??l}
        aria-disabled=${r||d.joinPending||h.blocked?"true":l}
        @click=${()=>{h.blocked||g(zt(c,!h.on))}}
      ></button>
    </div>`:l}
    ${d.joinPending?i`<p class="schedule-note" id="sched-join">${pe(s("v4_cadence_join_pending",`Uses {room}'s shared schedule; change it after you save, or choose "In this plan only" under Advanced.`,{room:ve}),a)}</p>`:l}
    ${d.explanation?i`<p class="schedule-note">${pe(d.explanation,a)}</p>`:l}
    <details class="advanced">
      <summary>${s("v4_advanced","Advanced")}${k(se)}</summary>
      <fieldset class="scope">
        <legend>${s("v4_cadence_scope","Count cleans")}</legend>
        ${[["shared",s("v4_cadence_shared","Across all plans (recommended)")],["plan",s("v4_cadence_this_plan","In this plan only")]].map(([f,y])=>{let R=r??(f==="shared"&&d.sharedReason?"sched-scope-reason":null);return i`<label class="scope-row"><input
            type="radio"
            name="sched-scope"
            value=${f}
            .checked=${d.scope===f}
            aria-disabled=${R?"true":l}
            aria-describedby=${R??l}
            @change=${$=>{let ee=R?null:Lt(c,f);ee?g(ee):$.currentTarget.closest("fieldset")?.querySelectorAll("input").forEach(re=>{re.checked=re.value===d.scope})}}
          ><span>${y}</span></label>`})}
        ${d.sharedReason?u("sched-scope-reason",d.sharedReason,"p"):l}
      </fieldset>
      <p class="schedule-note">${s("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
    </details>
  </section>`},Z=(t,n)=>n.cleaningMode==="mop"?t("v4_room_setting_mop","Mop"):n.cleaningMode==="vacuum"?n.coverageSetting==="quick"?t("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):t("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):n.coverageSetting==="quick"?t("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):t("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),Ht={mop:(t,n)=>t("v4_room_schedules_mop","Mop every {mop} cleans",{mop:n}),mop_one:t=>t("v4_room_schedules_mop_one","Mop every clean"),quick:(t,n,e)=>t("v4_room_schedules_quick","Quick vacuum every {cov} cleans",{cov:e}),quick_one:t=>t("v4_room_schedules_quick_one","Quick vacuum every clean"),optimal:(t,n,e)=>t("v4_room_schedules_optimal","Optimal vacuum every {cov} cleans",{cov:e}),optimal_one:t=>t("v4_room_schedules_optimal_one","Optimal vacuum every clean"),heavy:(t,n,e)=>t("v4_room_schedules_heavy","Heavy duty vacuum every {cov} cleans",{cov:e}),heavy_one:t=>t("v4_room_schedules_heavy_one","Heavy duty vacuum every clean"),mop_quick:(t,n,e)=>t("v4_room_schedules_mop_quick","Mop every {mop} cleans \xB7 Quick vacuum every {cov} cleans",{mop:n,cov:e}),mop_quick_one_mop:(t,n,e)=>t("v4_room_schedules_mop_quick_one_mop","Mop every clean \xB7 Quick vacuum every {cov} cleans",{cov:e}),mop_quick_one_cov:(t,n)=>t("v4_room_schedules_mop_quick_one_cov","Mop every {mop} cleans \xB7 Quick vacuum every clean",{mop:n}),mop_quick_one_both:t=>t("v4_room_schedules_mop_quick_one_both","Mop every clean \xB7 Quick vacuum every clean"),mop_optimal:(t,n,e)=>t("v4_room_schedules_mop_optimal","Mop every {mop} cleans \xB7 Optimal vacuum every {cov} cleans",{mop:n,cov:e}),mop_optimal_one_mop:(t,n,e)=>t("v4_room_schedules_mop_optimal_one_mop","Mop every clean \xB7 Optimal vacuum every {cov} cleans",{cov:e}),mop_optimal_one_cov:(t,n)=>t("v4_room_schedules_mop_optimal_one_cov","Mop every {mop} cleans \xB7 Optimal vacuum every clean",{mop:n}),mop_optimal_one_both:t=>t("v4_room_schedules_mop_optimal_one_both","Mop every clean \xB7 Optimal vacuum every clean"),mop_heavy:(t,n,e)=>t("v4_room_schedules_mop_heavy","Mop every {mop} cleans \xB7 Heavy duty vacuum every {cov} cleans",{mop:n,cov:e}),mop_heavy_one_mop:(t,n,e)=>t("v4_room_schedules_mop_heavy_one_mop","Mop every clean \xB7 Heavy duty vacuum every {cov} cleans",{cov:e}),mop_heavy_one_cov:(t,n)=>t("v4_room_schedules_mop_heavy_one_cov","Mop every {mop} cleans \xB7 Heavy duty vacuum every clean",{mop:n}),mop_heavy_one_both:t=>t("v4_room_schedules_mop_heavy_one_both","Mop every clean \xB7 Heavy duty vacuum every clean")},mt=(t,n,e)=>{let a=e?.mopEveryN??null,s=e?.coverageEveryN??null;if(a===null&&s===null)return null;let o=e?.periodicCoverageSetting,r=o==="quick"?"quick":o==="heavy_duty"?"heavy":"optimal",m=a===null?`${r}${s===1?"_one":""}`:s===null?`mop${a===1?"_one":""}`:`mop_${r}${a===1&&s===1?"_one_both":a===1?"_one_mop":s===1?"_one_cov":""}`,c=Ht[m];return c?c(t,a===null?"":H(n,a),s===null?"":H(n,s)):null};var ut={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},pt=t=>(...n)=>({_$litDirective$:t,values:n}),be=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,e,a){this._$Ct=n,this._$AM=e,this._$Ci=a}_$AS(n,e){return this.update(n,e)}update(n,e){return this.render(...e)}};var{I:Dt}=Be,vt=t=>t;var ht=()=>document.createComment(""),Y=(t,n,e)=>{let a=t._$AA.parentNode,s=n===void 0?t._$AB:n._$AA;if(e===void 0){let o=a.insertBefore(ht(),s),r=a.insertBefore(ht(),s);e=new Dt(o,r,t,t.options)}else{let o=e._$AB.nextSibling,r=e._$AM,m=r!==t;if(m){let c;e._$AQ?.(t),e._$AM=t,e._$AP!==void 0&&(c=t._$AU)!==r._$AU&&e._$AP(c)}if(o!==s||m){let c=e._$AA;for(;c!==o;){let d=vt(c).nextSibling;vt(a).insertBefore(c,s),c=d}}}return e},O=(t,n,e=t)=>(t._$AI(n,e),t),Ot={},gt=(t,n=Ot)=>t._$AH=n,_t=t=>t._$AH,fe=t=>{t._$AR(),t._$AA.remove()};var bt=(t,n,e)=>{let a=new Map;for(let s=n;s<=e;s++)a.set(t[s],s);return a},ft=pt(class extends be{constructor(t){if(super(t),t.type!==ut.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,n,e){let a;e===void 0?e=n:n!==void 0&&(a=n);let s=[],o=[],r=0;for(let m of t)s[r]=a?a(m,r):r,o[r]=e(m,r),r++;return{values:o,keys:s}}render(t,n,e){return this.dt(t,n,e).values}update(t,[n,e,a]){let s=_t(t),{values:o,keys:r}=this.dt(n,e,a);if(!Array.isArray(s))return this.ut=r,o;let m=this.ut??=[],c=[],d,u,v=0,h=s.length-1,g=0,p=o.length-1;for(;v<=h&&g<=p;)if(s[v]===null)v++;else if(s[h]===null)h--;else if(m[v]===r[g])c[g]=O(s[v],o[g]),v++,g++;else if(m[h]===r[p])c[p]=O(s[h],o[p]),h--,p--;else if(m[v]===r[p])c[p]=O(s[v],o[p]),Y(t,c[p+1],s[v]),v++,p--;else if(m[h]===r[g])c[g]=O(s[h],o[g]),Y(t,s[v],s[h]),h--,g++;else if(d===void 0&&(d=bt(r,g,p),u=bt(m,v,h)),d.has(m[v]))if(d.has(m[h])){let b=u.get(r[g]),S=b!==void 0?s[b]:null;if(S===null){let _=Y(t,s[v]);O(_,o[g]),c[g]=_}else c[g]=O(S,o[g]),Y(t,s[v],S),s[b]=null;g++}else fe(s[h]),h--;else fe(s[v]),v++;for(;g<=p;){let b=Y(t,c[p+1]);O(b,o[g]),c[g++]=b}for(;v<=h;){let b=s[v++];b!==null&&fe(b)}return this.ut=r,gt(t,c),Oe}});var B=class{constructor(n,e,a){this.host=n;this.root=e;this.launcher=a;this.open=!1;this.#s=!1;this.keydown=n=>{if(!this.open)return;if(n.key==="Escape"){n.preventDefault(),this.close(!0);return}let e=[...this.host.renderRoot.querySelectorAll(`${this.root} [role^=menuitem]`)],a=e.indexOf(n.composedPath()[0]),s=n.key==="ArrowDown"?a+1:n.key==="ArrowUp"?a-1:n.key==="Home"?0:n.key==="End"?e.length-1:null;s===null||a<0||!e.length||(n.preventDefault(),e[(s+e.length)%e.length]?.focus())};this.focusout=n=>{let e=n.relatedTarget;e&&!n.currentTarget.contains(e)&&this.#n(!1)};this.#e=n=>{let e=this.host.renderRoot.querySelector(this.root);this.open&&e&&!n.composedPath().includes(e)&&this.#n(!1)};n.addController(this)}hostConnected(){window.addEventListener("pointerdown",this.#e,!0)}hostDisconnected(){window.removeEventListener("pointerdown",this.#e,!0)}hostUpdated(){this.#s&&(this.#s=!1,this.host.renderRoot.querySelector(`${this.root} [role^=menuitem]`)?.focus())}#s;#n(n){n!==this.open&&(this.open=n,this.#s=n,this.host.requestUpdate())}toggle(){this.#n(!this.open)}close(n){this.#n(!1),n&&this.host.renderRoot.querySelector(`${this.root} ${this.launcher}`)?.focus()}#e};var Bt=["mop_progress_unverified","coverage_progress_unverified","identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy","coverage_requires_vacuum"],Re=class extends z{constructor(){super(...arguments);this._moved="";this.#s=null;this.#n=new Map;this.#e=new B(this,".room-more","> button");this.state=N();this.#t=(e,a,s)=>T(this.localize,e,a,s)}static{this.styles=[L,A,q,et,M`
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
.edit-disclosure[aria-expanded="true"]:dir(rtl) > .ms-icon { rotate: -90deg; }
.edit-name { padding-inline: var(--ms-space-1); }
.edit-moves { display: flex; }
.row-expanded { display: grid; grid-column: 1 / -1; gap: var(--ms-space-2); padding: var(--ms-space-3); border-block-start: 1px solid var(--ms-line); }
.run-end { display: grid; gap: var(--ms-space-2); }
.run-end > summary { min-block-size: var(--ms-control); align-content: center; font-weight: var(--ms-w-bold); cursor: pointer; }
.threshold { display: grid; gap: var(--ms-space-1); font-size: var(--ms-t-md); }
.threshold input { inline-size: 100%; min-block-size: var(--ms-control-sm); accent-color: var(--ms-resolved-indicator, var(--ms-accent)); }
.subtle { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.split { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--ms-space-2); }
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
.sched-off, .sched-row > .ms-btn { justify-self: start; }
.room-more { position: relative; }
.room-more .menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.room-more .menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.room-more .reason { padding: var(--ms-space-1) var(--ms-space-3); }
.advanced > summary { display: flex; gap: var(--ms-space-2); align-items: center; min-block-size: var(--ms-control); font-weight: var(--ms-w-medium); list-style: none; cursor: pointer; }
.advanced > summary::-webkit-details-marker { display: none; }
.advanced > summary .ms-icon { inline-size: 1.25rem; block-size: 1.25rem; }
.advanced[open] > summary .ms-icon { rotate: 90deg; }
.advanced > summary:dir(rtl) .ms-icon { scale: -1 1; }
.advanced[open] > summary:dir(rtl) .ms-icon { rotate: -90deg; }
.advanced > summary:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: 2px; border-radius: var(--ms-radius-xs); }
.scope { display: grid; margin: 0 0 var(--ms-space-2); padding: 0; border: 0; }
.scope legend { padding: 0; font-size: var(--ms-t-sm); font-weight: var(--ms-w-bold); }
.scope-row { display: flex; gap: var(--ms-space-3); align-items: center; min-block-size: var(--ms-control); font-size: var(--ms-t-md); cursor: pointer; }
.scope-row input { flex: none; inline-size: 1.2rem; block-size: 1.2rem; margin: 0; accent-color: var(--ms-resolved-indicator, var(--ms-accent)); }
.schedule-note { margin: 0; color: var(--ms-text); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
@media (forced-colors: active) { .row-expanded { forced-color-adjust: auto; color: CanvasText; background: Canvas; } .edit-row .row-lines small { color: inherit; } }
@media (max-width: 25rem) { .split { grid-template-columns: 1fr; } }
`]}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_moved:{state:!0}}}#s;#n;#e;#t;#r(e){this.dispatchEvent(new CustomEvent(W,{detail:e,bubbles:!0,composed:!0}))}#o(e){return H(this.state.locale,e)}#d(e){return e.length?i`<span class="lines">${e.map(a=>i`<span class="line">${k(Ke)}<span>${a}</span></span>`)}</span>`:l}#_(e,a){let s=Xe(this.#t,this.state.locale,e),o=Ze(this.#t,this.state.locale,e),r=o===null?l:"blocked"in o?i`<span class="lines"><span class="line" data-tone="warning">${k(Q)}<span>${o.blocked}</span></span></span>`:this.#d(o.due),m=this.#t("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return i`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${e.id}
        aria-describedby=${a?"default-hint":l}
        @click=${()=>this.#r({type:"select-plan",planId:e.id})}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${e.name}</bdi>${a?i`<span class="ms-chip chip-default" title=${m}>${this.#t("v4_plan_default","Default")}</span>`:l}${e.enabled?l:i`<span class="ms-chip">${this.#t("v4_paused","Paused")}</span>`}</strong>
          <small>${s}</small>
          ${r}
        </span>
        <span class="ms-row__trail">${k(se)}</span>
      </button>
      ${a?i`<span class="sr-only" id="default-hint">${m}</span>`:l}
    </li>`}#a(){let e=this.state.resources.plans.value,a=this.#t("v4_create_plan","Create a plan");if(!e?.plans.length)return i`<div class="empty-card">
        <h3>${this.#t("v4_no_plans","No plans yet")}</h3>
        <p>${this.#t("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#r({type:"select-plan",planId:null})}>${a}</button>
      </div>`;let s=[...e.plans].sort((o,r)=>+(r.id===e.selectedPlan)-+(o.id===e.selectedPlan));return i`<ul class="plain">
      ${s.map(o=>this.#_(o,o.id===e.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#r({type:"select-plan",planId:null})}>
        <span class="ms-row__lead">${k(me)}</span>
        <span class="ms-row__body"><strong>${a}</strong></span>
      </button></li>
    </ul>`}#u(){let e=this.state;return e.pendingAction==="save-plan"?this.#t("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):e.pendingAction==="run-plan"?this.#t("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):ie(e)?this.#t("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#t("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):Le(e)?null:this.#t("v4_reason_save_plan_map","Waiting for the map to be ready.")}#l(){let e=this.state.planDraft.enabled,a=this.#u();return i`
      <div class="switch-row">
        <span class="switch-copy">
          <span id="enabled-label">${this.#t("v4_plan_can_run","Plan enabled")}</span>
          <small id="enabled-hint">${this.#t("v4_plan_can_run_on","When it's on, this plan can run from here, from automations and from Home Assistant actions.")}</small>
        </span>
        <button
          class="ms-switch"
          type="button"
          role="switch"
          aria-checked=${String(e)}
          aria-labelledby="enabled-label"
          aria-describedby=${a?"enabled-hint enabled-reason":"enabled-hint"}
          aria-disabled=${a?"true":l}
          @click=${()=>{a||this.#r({type:"set-plan-enabled",enabled:!e})}}
        ></button>
      </div>
      ${a?i`<p class="reason" id="enabled-reason">${a}</p>`:l}
    `}#p(e,a,s,o={}){return i`<li class="run-row" ?data-break=${o.part!==void 0}>
      ${o.part===void 0?l:i`<span class="sr-only">${this.#t("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#o(o.part)})}</span>`}
      ${s===null?l:i`<span class="pos-badge" aria-hidden="true">${this.#o(s)}</span>`}
      <span class="row-lines">
        <bdi>${e}</bdi>
        <small>${a}</small>
        ${o.blocked?i`<span class="ms-chip chip-attention">${this.#t("v4_needs_attention","Needs attention")}</span>`:l}
      </span>
    </li>`}#b(){let e=this.state,a=e.planDraft,s=e.resources.plans.value,o=s?.plans.find(w=>w.id===a.id);if(!s||!o)return l;let r=o.nextRunPreview,m=r?.blocker??null,c=!a.enabled,d=!c&&!!(r&&!m&&/^[0-9a-f]{64}$/u.test(r.previewToken??"")),u=o.runBehavior==="ordered",v=d&&r?r.rooms:[],h=!c&&m?He(e,o)?.jump.roomId??null:null,g=c||d||h||e.pendingAction==="save-plan"?null:m&&qe[m]||Ae,p=d?v.length:o.rooms.length,b=d?o.nextRunEstimateSeconds:null,S=b===null?"":this.#o(Math.max(1,Math.round(b/60))),_=b===null?p===1?this.#t("v4_plan_summary_rooms_one","1 room"):this.#t("v4_plan_summary_rooms","{count} rooms",{count:this.#o(p)}):p===1?this.#t("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:S}):this.#t("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#o(p),minutes:S}),x=d&&r?r.missionBoundaries:[],E=d?v.map((w,C)=>{let V=x.indexOf(C);return this.#p(w.name,Z(this.#t,w),u?C+1:null,V<0?{}:{part:V+2})}):ze(o).rooms.map(w=>this.#p(s.rooms.find(C=>C.roomId===w.roomId)?.name??w.roomId,Z(this.#t,w),null,{blocked:w.roomId===h})),P=a.finishCurrentRoom?this.#t("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#o(a.finishCurrentRoomThreshold)}):a.returnToBase?this.#t("v4_plan_summary_return","Returns to the dock when finished"):null;return i`
      <p class="summary">${_}</p>
      ${this.#d(Ge(this.#t,e.locale,v))}
      <h3 class="heading">${c?this.#t("v4_plan_rooms_heading","Rooms in this plan"):e.resources.entry?.activePlan?this.#t("v4_next_run_after_active","After this run"):this.#t("v4_next_run_preview","Next run")}</h3>
      ${d&&!u?i`<p class="quiet">${this.#t("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}</p>`:l}
      ${x.length?i`<p class="quiet">${this.#t("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:this.#o(x.length+1)})}</p>`:l}
      ${g?i`<p class="problem">${this.#t(g.reasonKey,g.reason)}</p>
        <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"plan"})}>${this.#t("v4_retry","Try again")}</button>`:l}
      ${d&&u?i`<ol class="run-list" role="list">${E}</ol>`:i`<ul class="run-list" role="list">${E}</ul>`}
      ${this.#l()}
      ${P?i`<p class="quiet">${P}</p>`:l}
    `}willUpdate(e){e.has("state")&&(this.state.workflow!=="plan"||this.state.planView!=="edit")&&(this._moved="");let a=e.get("state");a&&(a.expandedRoom!==this.state.expandedRoom||this.state.planView!=="edit"||this.state.dialog||this.#c())&&(this.#e.open=!1),a&&(a.planDraft.id!==this.state.planDraft.id||a.workflow!==this.state.workflow||this.state.planView!=="edit")&&this.#n.clear()}updated(e){!this.#s||!e.has("state")||(this.renderRoot.querySelector(`[data-move="${CSS.escape(this.#s)}"]`)?.focus(),this.#s=null)}#c(){return this.state.pendingAction==="save-plan"?"edit-held":null}#i(e){this.#c()||this.#r({type:"patch-plan-draft",patch:e})}#v(e,a){this.#i({rooms:this.state.planDraft.rooms.map((s,o)=>o===e?{...s,...a}:s)})}#f(e,a,s,o){let r=[...this.state.planDraft.rooms],m=e+a;if(this.#c()||m<0||m>=r.length)return;let[c]=r.splice(e,1);c&&(r.splice(m,0,c),this.#s=o,this._moved=this.#t("v4_room_moved","{room} moved to position {position}",{room:s,position:this.#o(m+1)}),this.#r({type:"patch-plan-draft",patch:{rooms:r}}))}#h(e){return{disabled:e?"true":l,described:e??l}}#g(e,a,s,o,r,m){let c=`${e.roomId}:${o<0?"up":"down"}`,d=o<0?this.#t("move_room_up","Move {room} earlier",{room:s}):this.#t("move_room_down","Move {room} later",{room:s}),u=o<0?this.#t("v4_room_already_first","{room} is already first",{room:s}):this.#t("v4_room_already_last","{room} is already last",{room:s}),v=r?`${c}-end`:m;return i`<button
        class="ms-btn ms-btn--icon"
        type="button"
        data-move=${c}
        aria-label=${d}
        title=${r?u:d}
        aria-disabled=${r||m?"true":l}
        aria-describedby=${v??l}
        @click=${()=>{r||this.#f(a,o,s,c)}}
      >${k(o<0?je:Fe)}</button>
      ${r?i`<span class="sr-only" id=${`${c}-end`}>${u}</span>`:l}`}#m(e,a,s,o,r,m,c){let d=this.state.planDraft,u=s!==null&&this.state.expandedRoom===e,v=d.rooms.length-1,h=this.#h(c),g=s===null&&m,p=s?mt(this.#t,this.state.locale,s.cadence):null,b=s?.cadenceReasons?.some(_=>Bt.includes(_)),S=!!s?.cadence?.mopEveryN;return i`<li class="ms-row edit-row" data-selected=${s?"true":l}>
      <label class="edit-check"><input
        type="checkbox"
        .checked=${s!==null}
        aria-label=${this.#t("v4_room_include_named","Include {room}",{room:a})}
        aria-disabled=${c||g?"true":l}
        aria-describedby=${c??(g?"room-limit":l)}
        @click=${_=>{(c||g)&&_.preventDefault()}}
        @change=${()=>this.#r({type:"toggle-room",roomId:e})}
      ></label>
      ${s?i`<button
          class="edit-disclosure"
          type="button"
          data-room-disclosure=${e}
          aria-expanded=${String(u)}
          aria-label=${this.#t("v4_room_settings_named","Settings for {room}",{room:a})}
          aria-disabled=${h.disabled}
          aria-describedby=${h.described}
          @click=${()=>{c||this.#r({type:"set-plan-view",view:"edit",roomId:u?null:e})}}
        >
          ${r?i`<span class="pos-badge" aria-hidden="true">${this.#o(o+1)}</span>`:l}
          <span class="row-lines">
            <bdi>${a}</bdi>
            <small>${Z(this.#t,s)}</small>
            ${p?i`<small>${p}</small>`:l}
            ${b?i`<span class="ms-chip chip-attention">${this.#t("v4_needs_attention","Needs attention")}</span>`:l}
          </span>
          ${k(se)}
        </button>`:i`<span class="edit-name"><bdi>${a}</bdi></span>`}
      ${s&&r?i`<span class="edit-moves">
        ${this.#g(s,o,a,-1,o===0,c)}
        ${this.#g(s,o,a,1,o===v,c)}
      </span>`:i`<span></span>`}
      ${u&&s?i`<div class="row-expanded">
        <div class="split">
          <label class="field ms-field">${this.#t("v4_cleaning_system","Cleaning mode")}
            <select
              aria-label=${this.#t("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:a})}
              aria-disabled=${h.disabled}
              aria-describedby=${[c,S?"mode-reason":null].filter(Boolean).join(" ")||l}
              .value=${s.cleaningMode}
              @change=${_=>{let x=_.currentTarget;c?x.value=s.cleaningMode:this.#v(o,{cleaningMode:x.value})}}
            >${ne.map(_=>i`<option value=${_} ?selected=${_===s.cleaningMode} ?disabled=${S&&_!=="vacuum"}>${_e(this.#t,_)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#t("vacuum_coverage","Vacuum coverage")}
            <select
              aria-label=${this.#t("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:a})}
              aria-disabled=${h.disabled}
              aria-describedby=${h.described}
              ?disabled=${s.cleaningMode==="mop"}
              .value=${s.coverageSetting}
              @change=${_=>{let x=_.currentTarget;c?x.value=s.coverageSetting:this.#v(o,{coverageSetting:x.value})}}
            >${G.map(_=>i`<option value=${_} ?selected=${_===s.coverageSetting}>${X(this.#t,_)}</option>`)}</select>
          </label>
        </div>
        ${S?i`<p class="sched-status sched-reason" id="mode-reason">${k(Q)}<span>${this.#t("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</span></p>`:l}
        ${s.cleaningMode==="vacuum"?l:i`<p class="subtle">${this.#t("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
        ${dt({t:this.#t,state:this.state,intent:_=>this.#r(_),held:c,offLevel:this.#n.get(e)??null,setOffLevel:_=>{_?this.#n.set(e,_):this.#n.delete(e),this.requestUpdate()},menu:this.#e},s,o,a)}
      </div>`:l}
    </li>`}#y(e,a,s,o,r,m){let c=[s?`${e}-hint`:"",r??""].filter(Boolean).join(" ");return i`<div class="switch-row">
      <span class="switch-copy">
        <span id=${`${e}-label`}>${a}</span>
        ${s?i`<small id=${`${e}-hint`}>${s}</small>`:l}
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(o)}
        aria-labelledby=${`${e}-label`}
        aria-describedby=${c||l}
        aria-disabled=${r?"true":l}
        @click=${()=>{r||m(!o)}}
      ></button>
    </div>`}#$(){let e=this.state,a=e.planDraft,s=e.resources.plans.value;if(!s)return l;let o=this.#c(),r=this.#h(o),m=a.runBehavior==="ordered",c=a.rooms.length>=100,d=p=>s.rooms.find(b=>b.roomId===p)?.name??p,u=[...a.rooms.map((p,b)=>({roomId:p.roomId,room:p,index:b})),...s.rooms.filter(p=>!a.rooms.some(b=>b.roomId===p.roomId)).map(p=>({roomId:p.roomId,room:null,index:-1}))],v=a.finishCurrentRoomThreshold,h=this.#o(v),g=(p,b)=>i`<button
      class="ms-btn"
      type="button"
      aria-pressed=${String(a.runBehavior===p)}
      aria-disabled=${r.disabled}
      aria-describedby=${r.described}
      @click=${()=>this.#i({runBehavior:p})}
    >${b}</button>`;return i`<div class="edit">
      ${o?i`<p class="reason" id="edit-held">${this.#t("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:l}
      <label class="field ms-field">${this.#t("plan_name","Plan name")}
        <input
          maxlength="128"
          autocomplete="off"
          ?readonly=${!!o}
          aria-disabled=${r.disabled}
          aria-describedby=${r.described}
          .value=${a.name}
          @input=${p=>this.#i({name:p.currentTarget.value})}
        >
      </label>
      <div class="order" role="group" aria-labelledby="order-label">
        <span id="order-label">${this.#t("plan_run_behavior","Cleaning order")}</span>
        <div class="ms-segment">
          ${g("intelligent",this.#t("plan_intelligent","Intelligent rotation"))}
          ${g("ordered",this.#t("plan_ordered","Saved order"))}
        </div>
        <p class="quiet">${m?this.#t("v4_plan_order_ordered_hint","Top to bottom, as listed"):this.#t("v4_plan_order_intelligent_hint","Longest-waiting rooms first")}</p>
      </div>
      <div class="list-header">
        <h3 class="heading" id="edit-rooms">${this.#t("v4_rooms_heading","Rooms")}</h3>
        <small>${this.#t("v4_plan_rooms_selected","{selected} of {total} selected",{selected:this.#o(a.rooms.length),total:this.#o(s.rooms.length)})}</small>
      </div>
      ${c?i`<p class="reason" id="room-limit">${this.#t("v4_plan_room_limit","Can't add more rooms until you remove one; a plan holds up to {limit}.",{limit:this.#o(100)})}</p>`:l}
      <ul class="plain" role="list" aria-labelledby="edit-rooms">
        ${ft(u,p=>p.roomId,p=>this.#m(p.roomId,d(p.roomId),p.room,p.index,m,c,o))}
      </ul>
      <span class="sr-only" role="status">${this._moved}</span>
      <details class="run-end">
        <summary>${this.#t("v4_run_end_options","When a run ends")}</summary>
        ${this.#y("return-dock",this.#t("v4_plan_return_to_dock","Return to the dock when finished"),null,a.returnToBase,o,p=>this.#i({returnToBase:p}))}
        ${this.#y("finish-room",this.#t("v4_plan_finish_room","Finish the current room when you press Stop"),this.#t("v4_plan_finish_room_hint","Only if the room is at least {percent}% done; otherwise the robot stops right away.",{percent:h}),a.finishCurrentRoom,o,p=>this.#i({finishCurrentRoom:p}))}
        ${a.finishCurrentRoom?i`<div class="threshold">
          <span id="finish-threshold-label">${this.#t("v4_plan_finish_threshold","Finish if at least {percent}% done",{percent:h})}</span>
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
            @input=${p=>{let b=p.currentTarget;o?b.value=String(v):this.#i({finishCurrentRoomThreshold:Number(b.value)})}}
          >
        </div>`:l}
      </details>
    </div>`}render(){let{workflow:e,planView:a}=this.state;return e==="plans"?this.#a():e!=="plan"?l:a==="run"?this.#b():this.#$()}};customElements.get(I)||customElements.define(I,Re);var Ce=class extends z{constructor(){super(...arguments);this.state=N();this.compact=!1;this.inline=!1}static{this.properties={state:{attribute:!1},localize:{attribute:!1},compact:{type:Boolean,reflect:!0},inline:{type:Boolean,reflect:!0}}}static{this.styles=[L,A,q,M`
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
`]}#s(e,a){return T(this.localize,e,a)}#n(e){this.dispatchEvent(new CustomEvent(W,{detail:e,bubbles:!0,composed:!0}))}#e(e){let a=e.currentTarget.valueAsNumber;Number.isFinite(a)&&this.#n({type:"set-brush",value:a})}render(){let{draw:e}=this.state;return i`
      <div class="controls ms-surface ms-surface--overlay" role="group" aria-label=${this.#s("v4_drawing_precision","Drawing precision")}>
        <div class="row ms-field">
          <label for="brush">${this.#s("brush_size","Brush width")}</label>
          <div class="stepper">
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#s("v4_narrower_brush","Narrower brush")}
              @click=${()=>this.#n({type:"set-brush",value:e.brushMeters/1.25})}
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
                aria-label=${this.#s("v4_brush_width_meters","Brush width in meters")}
              />
              <span class="unit">m</span>
            </span>
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#s("v4_wider_brush","Wider brush")}
              @click=${()=>this.#n({type:"set-brush",value:e.brushMeters*1.25})}
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
            aria-label=${this.#s("v4_brush_width_slider","Brush width slider")}
            aria-valuetext=${`${e.brushMeters.toFixed(2)} m`}
          />
        </div>
        <p class="hint">${this.#s("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
      </div>
    `}};customElements.get(we)||customElements.define(we,Ce);var Ee=class extends z{constructor(){super(...arguments);this.state=N();this.#e=new B(this,".more","> button")}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[L,A,q,M`
:host { display: contents; }
.more { position: relative; margin-inline-start: auto; }
.more > .ms-btn { transition: none; }
.reason { flex-basis: 100%; margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: end; }
.menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.menu .reason { padding: var(--ms-space-1) var(--ms-space-3); text-align: start; }
`]}#s(e,a,s){return T(this.localize,e,a,s)}#n(e,a=this){a.dispatchEvent(new CustomEvent(W,{detail:e,bubbles:!0,composed:!0}))}#e;willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this.#e.open=!1)}#t(){let{command:e,pendingAction:a,planDraft:s}=this.state;return a==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):s.dirty?this.#s("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes."):e==="pending"?this.#s("v4_reason_robot_operation_waiting","Waiting for the robot to finish what it's doing."):null}#r(e){if(this.#t())return;let a=e.currentTarget.closest(".more")?.querySelector("button");this.#e.close(!1),this.#n({type:"open-dialog",dialog:"confirmDeletePlan"},a??this)}render(){let{planView:e,planDraft:a,pendingAction:s}=this.state;if(e==="run"){let r=s==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):s==="run-plan"?this.#s("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return i`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#s("v4_edit_plan_named","Edit {plan}",{plan:a.name})}
          aria-disabled=${r?"true":l}
          aria-describedby=${r?"edit-reason":l}
          @click=${()=>{r||this.#n({type:"set-plan-view",view:"edit"})}}
        >${this.#s("v4_edit","Edit")}</button>
        ${r?i`<p class="reason" id="edit-reason">${r}</p>`:l}
      `}if(!U(this.state,"confirmDeletePlan"))return l;let o=this.#t();return i`
      <div class="more" @keydown=${this.#e.keydown} @focusout=${this.#e.focusout}>
        <button
          class="ms-btn ms-btn--icon"
          type="button"
          aria-label=${this.#s("v4_more_actions","More actions")}
          aria-haspopup="menu"
          aria-expanded=${String(this.#e.open)}
          data-dialog-launcher="confirmDeletePlan"
          @click=${()=>this.#e.toggle()}
        >${k(de)}</button>
        ${this.#e.open?i`
          <div class="menu ms-surface ms-surface--overlay" @mousedown=${r=>r.preventDefault()}>
            <div role="menu" aria-label=${this.#s("v4_more_actions","More actions")}><button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitem"
              tabindex="-1"
              aria-disabled=${o?"true":l}
              aria-describedby=${o?"delete-reason":l}
              @click=${this.#r}
            >${this.#s("plan_delete","Delete")}</button></div>
            ${o?i`<p class="reason" id="delete-reason">${o}</p>`:l}
          </div>
        `:l}
      </div>
    `}};customElements.get(te)||customElements.define(te,Ee);var Vt=(t,n,e)=>i`${t.planView==="run"?i`<bdi>${n}</bdi>`:n}${t.planDraft.dirty?i` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:l}`,yt=le(te),jt=(t,n,e)=>ce`<${yt}
  .state=${t}
  .localize=${n}
  @matic-workspace-intent=${e}
></${yt}>`,$t=(t,n,e,a)=>{let s=a?.room;if(s===void 0)return t(n,e,a);let[o,r]=t(n,e,{...a,room:"\0"}).split("\0");return i`${o}<bdi>${s}</bdi>${r}`},Ft=(t,n,e,a)=>{let s=e?n.jump:void 0;return i`${$t(t,n.reasonKey??"",n.reason??"",n.reasonPlaceholders)}${s?i` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>a({type:"set-plan-view",view:"edit",roomId:s.roomId})}
  >${$t(t,s.labelKey,s.label,s.labelPlaceholders)}</button>`:l}`},Kt=(t,n,e,a)=>{let s=t.pendingAction==="save-plan",o=n?.id==="save-plan"?"primary-reason":"cancel-reason";return i`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      aria-disabled=${s?"true":l}
      aria-describedby=${s?o:l}
      @click=${r=>{s||a(t.planDraft.id?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"},r.currentTarget)}}
    >${e("v4_cancel","Cancel")}</button>
    ${s&&o==="cancel-reason"?i`<p class="action-reason" id=${o}>${e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:l}
    ${n?l:i`<p class="action-summary">${e("v4_plan_save_after_work","You can save when the robot finishes.")}</p>`}
  `},Ut=(t,n,e)=>{let a=e.querySelector(j)?.shadowRoot?.querySelector(I)?.shadowRoot;if(n.workflow==="plan"&&n.planView==="edit"&&n.expandedRoom)return a?.querySelector(`[data-room-disclosure="${CSS.escape(n.expandedRoom)}"]`);if(n.workflow==="plan"&&t.planView==="edit")return e.querySelector(te)?.shadowRoot?.querySelector("button");let s=t.selection.planId;return n.workflow==="plans"&&s?a?.querySelector(`[data-plan-row="${CSS.escape(s)}"]`):null},Qt=(t,n,e,a)=>{let s=Ut(t,n,e);return a(s)?(s.scrollIntoView({block:"nearest"}),s.focus({preventScroll:!0}),!0):!1};var Gt=(t,n,e)=>{let a=(u,v,h)=>T(e,u,v,h),s=U(n),o=n.cadenceResetRequest,r=n.resources.plans.value,m=o&&r?.rooms.find(u=>u.roomId===o.roomId)?.name||o?.roomId||"room",c=o?r?.plans.find(u=>u.id===o.planId)?.rooms.find(u=>u.roomId===o.roomId)?.cadence?.scope==="shared":!1,d=o?.mode??"mop";switch(t){case"confirmDeletePlan":return s&&{title:a("v4_delete_plan","Delete plan?"),detail:a("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:s.name}),...s.successor===void 0?{}:{consequence:s.successor===null?a("v4_delete_plan_none","You'll have no default plan."):a("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:s.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return s&&{title:a("v4_delete_area","Delete area?"),detail:a("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:s.name}),...s.successor===void 0?{}:{consequence:s.successor===null?a("v4_delete_area_none","No custom area will be selected."):a("v4_delete_area_selected","{area} becomes the selected custom area.",{area:s.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:d==="mop"?a("v4_reset_mop_cadence_title","Reset mopping progress?"):a("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:c?a("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:m}):a("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:m}),cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("v4_reset","Reset"),action:"reset-room-cadence"}}},Xt=(t,n,e)=>{let a=t;if(!Te(a.detail))return;if(Ie(n,a.detail)){t.stopPropagation(),e(a.detail);return}if(a.detail?.type!=="open-dialog")return;let s=a.composedPath().find(o=>o instanceof HTMLElement&&o.hasAttribute("data-dialog-launcher"));return s instanceof HTMLElement?s:void 0},Zt=(t,n,e,a)=>{let s=t.cadenceResetRequest;e({type:"dismiss-top-layer"}),n!=="reset-room-cadence"?a(n):s&&a({id:n,planId:s.planId,roomId:s.roomId,mode:s.mode})},Yt=(t,n)=>{let e=t.cadenceResetRequest;return t.dialog!=="confirmResetCadence"||!e?null:n.querySelector(j)?.shadowRoot?.querySelector(I)?.shadowRoot?.querySelector(`[data-room-disclosure="${CSS.escape(e.roomId)}"]`)??null};var Pe=class{constructor(n){this.menu=new B(n,".overflow-wrap",".overflow")}render({state:n,narrow:e,browserFullscreen:a,t:s,intent:o,diagnostics:r,fullscreen:m}){let c=(u,v,h)=>i`
      <button class="ms-row ms-row--menu" type="button" role="menuitemradio" aria-checked=${String(u)} tabindex="-1" @click=${h}>${v}</button>
    `,d=(u,v)=>c(n.quality===u,v,()=>o({type:"set-quality",quality:u}));return i`
      <div id="map-options" class="overflow-menu ms-surface ms-surface--overlay" role="menu" aria-label=${s("v4_map_options","Map options")}>
        ${e?i`
          <div role="group" aria-labelledby="menu-display">
            <p class="menu-heading" id="menu-display" role="presentation">${s("v4_map_display","Map display")}</p>
            ${n.view==="top"?i`
              ${c(n.appearance==="photo",s("map_style_photo","Photo"),()=>o({type:"set-appearance",appearance:"photo"}))}
              ${c(n.appearance==="rooms",s("v4_room_colours","Room colors"),()=>o({type:"set-appearance",appearance:"rooms"}))}
            `:l}
            <button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitemcheckbox"
              aria-checked=${String(n.labelsVisible)}
              tabindex="-1"
              @click=${()=>o({type:"toggle-labels"})}
            ><span>${s("v4_room_names","Room names")}</span><span class="ms-switch" aria-checked=${String(n.labelsVisible)} aria-hidden="true"></span></button>
          </div>
        `:l}
        <div role="group" aria-labelledby="menu-detail">
          <p class="menu-heading" id="menu-detail" role="presentation">${s("map_quality_label","Map detail")}</p>
          ${d("auto",s("map_quality_auto","Auto detail"))}
          ${d("efficient",s("map_quality_efficient","Efficient"))}
          ${d("balanced",s("map_quality_balanced","Balanced"))}
          ${d("maximum",s("map_quality_maximum","Maximum"))}
        </div>
        <button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!1),r()}}>${s("v4_map_diagnostics","Map diagnostics")}</button>
        <button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!0),m()}}>${a?s("v4_leave_full_screen","Leave full screen"):s("v4_full_screen","Full screen")}</button>
      </div>
    `}};var wt=le(I),F=t=>t.currentTarget.value,Jt=t=>t.currentTarget.checked,Me=class extends z{constructor(){super(...arguments);this.state=N();this._historyPreviewPosition=null;this.#s=new Ue(this,()=>import("./diagnostics-panel-XQW6DZYX.js"));this.#n="";this.#o=(e,a,s)=>this.#e(e,a,s)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0}}}static{this.styles=[L,A,q,M`
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
`]}#s;#n;willUpdate(e){if(!e.has("state"))return;let{workflow:a,selection:s}=this.state,o=`${a}:${s.floorId}:${s.historyId??"live"}`;o!==this.#n&&(this.#n=o,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#e(e,a,s){return T(this.localize,e,a,s)}#t(e){return _e(this.#o,e)}#r(e){return X(this.#o,e)}#o;#d(e){return e==="vacuum"?l:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#_(e){return e==="mop_due"?this.#e("v4_cadence_mop_due_reason","Vacuum and mop are due"):e==="coverage_due"?this.#e("v4_cadence_coverage_due_reason","Vacuum rotation is due"):e==="mop_progress_unverified"?this.#e("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):e==="coverage_progress_unverified"?this.#e("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):this.#e("v4_cadence_due_unknown_reason","Schedule setting due")}#a(e){this.dispatchEvent(new CustomEvent(W,{detail:e,bubbles:!0,composed:!0}))}#u(e){switch(e){case"rooms":case"plans":case"plan":return{loading:this.#e("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#e("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#e("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#e("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#e("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#e("v4_loading_history","Loading map history\u2026"),unavailable:this.#e("v4_history_unavailable","Map history is unavailable right now."),empty:this.#e("v4_no_map_history","No saved map snapshots yet.")}}}#l({status:e,value:a},s,o){let r=this.#u(o);return a===null&&(e==="idle"||e==="loading")?i`<div class="loading" role="status">${r.loading}</div>`:e==="error"?i`
        <div class="stack">
          <div class="problem" role="alert">${r.unavailable}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#a({type:"open-workflow",workflow:o})}>${this.#e("v4_retry","Try again")}</button>
          </div>
        </div>
      `:e==="empty"?i`<div class="empty">${r.empty}</div>`:s}#p(){let e=this.state.resources.plans,a=Ne(this.state),s=a!==null,o=this.state.selection.roomIds.length>=100,r=!De(this.state),m=ie(this.state);return this.#l(e,i`
      <div class="stack">
        <h3 class="group-heading" id="rooms-heading">${this.#e("v4_rooms_to_clean","Rooms to clean")}</h3>
        ${m?i`<p class="subtle" id="rooms-busy">${this.#e("v4_rooms_busy","Can't change rooms until the robot finishes or stops.")}</p>`:l}
        <div class="list" role="group" aria-labelledby="rooms-heading">
          ${(e.value?.rooms||[]).map(c=>{let d=this.state.selection.roomIds.includes(c.roomId);return i`
              <div class="room ms-row ms-row--stack" data-selected=${String(d)}>
                <label class="room-choice">
                  <input
                    type="checkbox"
                    .checked=${d}
                    ?disabled=${!d&&o}
                    aria-disabled=${r?"true":l}
                    aria-describedby=${m?"rooms-busy":l}
                    @click=${u=>{r&&u.preventDefault()}}
                    @change=${()=>this.#a({type:"toggle-room",roomId:c.roomId})}
                  >
                  <strong>${c.name}</strong>
                  ${d?i`<small>${this.#e("v4_room_ready","Ready")}</small>`:l}
                </label>
                ${d?this.#c(c.roomId,this.state.selection.roomSettings.find(u=>u.roomId===c.roomId)||{roomId:c.roomId,cleaningMode:"vacuum",coverageSetting:"standard"}):l}
              </div>
            `})}
        </div>
        ${o?i`<p class="subtle" role="status">${this.#e("v4_room_limit_reached","Up to {limit} rooms fit in one clean, so remove one to add another.",{limit:100})}</p>`:l}
        <p class="subtle">${this.#e("v4_room_selection_hint","Select rooms here or directly on the map. The map and list stay in sync.")}</p>
        <label class="plan-option">
          <input type="checkbox" .checked=${!this.state.selection.useRoomSchedule} @change=${c=>this.#a({type:"set-use-room-schedule",value:!Jt(c)})}>
          <span class="plan-option-copy">
            <strong>${this.#e("v4_override_room_schedule","Override shared schedule settings")}</strong>
            <small>${this.#e("v4_override_room_schedule_hint","This clean follows the shared schedule unless you turn this on to use the settings chosen here. Anything due stays due, and matching cleans still count toward the schedule.")}</small>
          </span>
        </label>
        ${this.state.selection.roomIds.map(c=>{let d=e.value?.rooms.find(u=>u.roomId===c);return d?.sharedCadence||d?.sharedCadenceProgress||d?.sharedCadenceReasons?.length?i`<p class="subtle">${d.name}: ${nt(this.#o,d.sharedCadence,d.sharedCadenceProgress,d.sharedCadenceReasons)}</p>`:l})}
        ${this.state.manualRoomPreview.status==="loading"?i`<p role="status" class="subtle">${this.#e("v4_room_preview_loading","Checking settings\u2026")}</p>`:l}
        ${this.state.manualRoomPreview.status==="error"?i`<div class="stack">
            <div role="alert" class="problem">${this.#e("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#a({type:"retry-room-preview"})}>${this.#e("v4_retry","Try again")}</button></div>
          </div>`:l}
        ${s?this.#b(a.preview):l}
      </div>
    `,"rooms")}#b(e){let a=new Set(e.missionBoundaries);return i`
      <section class="stack" aria-labelledby="effective-rooms-heading" aria-live="polite">
        <h3 class="group-heading" id="effective-rooms-heading">${this.#e("v4_effective_room_preview","Effective cleaning preview")}</h3>
        ${e.blocker?i`<p class="problem" role="alert">${e.blocker==="invalid_cadence_policy"&&this.state.selection.useRoomSchedule&&this.state.selection.roomSettings.some(s=>s.cleaningMode!=="vacuum")?this.#e("v4_room_preview_schedule_override","The shared schedule can't use the cleaning mode you chose. Turn on Override shared schedule settings, or choose a mode that works with the schedule."):this.#e("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.")}</p>`:l}
        ${e.rooms.length?i`<ol class="list" aria-label=${this.#e("v4_effective_room_order","Effective room order")}>
            ${e.rooms.map((s,o)=>i`
              <li class="ms-row ms-row--stack">
                ${a.has(o)?i`<strong>${this.#e("v4_room_mission_boundary","New part (the robot may stop at the dock first)")}</strong>`:l}
                <strong>${s.name}</strong>
                <span class="subtle">${Z(this.#o,s)}</span>
                ${s.cadenceReasons.length?i`<span class="subtle">${s.cadenceReasons.map(r=>this.#_(r)).join("; ")}</span>`:l}
              </li>
            `)}
          </ol>`:l}
      </section>
    `}#c(e,a){let s=this.state.resources.plans.value?.rooms.find(o=>o.roomId===e)?.name||this.#e("v4_room","Room");return i`
      <div class="split room-settings">
        <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
          <select
            aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:s})}
            .value=${a.cleaningMode}
            @change=${o=>this.#a({type:"patch-room-settings",roomId:e,cleaningMode:F(o)})}
          >${ne.map(o=>i`<option value=${o} ?selected=${o===a.cleaningMode}>${this.#t(o)}</option>`)}</select>
        </label>
        <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
          <select
            aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:s})}
            ?disabled=${a.cleaningMode==="mop"}
            .value=${a.coverageSetting}
            @change=${o=>this.#a({type:"patch-room-settings",roomId:e,coverageSetting:F(o)})}
          >${G.map(o=>i`<option value=${o} ?selected=${o===a.coverageSetting}>${this.#r(o)}</option>`)}</select>
        </label>
      </div>
      ${this.#d(a.cleaningMode)}
    `}#i(){let e=this.state.workflow==="plans"?"plans":"plan";return this.#l(this.state.resources.plans,ce`<${wt}
      .state=${this.state}
      .localize=${this.localize}
    ></${wt}>`,e)}#v(){let e=this.state.resources.areas;return i`
      <div class="stack">
        <p class="subtle">${this.state.draw.tool==="outline"?this.#e("v4_zone_coverage","Place points around the area. Shading shows where the robot cleans inside the outline; narrow edges may stay uncovered."):this.#e("v4_draw_floor_hint","Paint only on the mapped floor. Zooming and panning never change the area.")}</p>
        ${this.state.draw.tool!=="outline"?i`<p class="subtle">${this.#e("v4_keyboard_draw_help","Keyboard: focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>`:l}
        ${this.#l(e,i`
          <div class="group">
            <h3 class="group-heading" id="areas-heading">${this.#e("area_workspace_title","Custom areas")}</h3>
            <div class="list" role="group" aria-labelledby="areas-heading">
            <button class="list-button ms-row ms-row" type="button" @click=${()=>this.#a({type:"select-area",areaId:null})}>${this.#e("area_new","New area")}</button>
            ${(e.value?.areas||[]).map(a=>i`
              <button class="list-button ms-row ms-row" type="button" @click=${()=>{this.#a({type:"select-area",areaId:a.id,workflow:"areaReview"})}}>
                <span>${a.name}</span>
                <small>${a.status==="current"?this.#e("area_workspace_ready","Ready"):this.#e("v4_review","Review")}</small>
              </button>
            `)}
            </div>
          </div>
        `,"draw")}
      </div>
    `}#f(){let e=this.state.areaDraft,a=this.state.resources.areas,s=e.canRebind||e.status==="review",o=!s&&(e.status==="stale"||e.status==="unknown");return i`
      <div class="stack">
        ${a.status==="error"?i`
          <div class="stack">
            <div class="problem" role="alert">${this.#u("areaReview").unavailable}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#a({type:"open-workflow",workflow:"areaReview"})}>${this.#e("v4_retry","Try again")}</button></div>
          </div>
        `:l}
        ${s?i`<div class="notice" data-tone="warning" role="status">${this.#e("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:l}
        ${o?i`<div class="problem" role="alert">${this.#e("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:l}
        <label class="field ms-field">${this.#e("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} @input=${r=>this.#a({type:"patch-area-draft",patch:{name:F(r)}})}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} @change=${r=>this.#a({type:"patch-area-draft",patch:{cleaningMode:F(r)}})}>${ne.map(r=>i`<option value=${r} ?selected=${r===e.cleaningMode}>${this.#t(r)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} @change=${r=>this.#a({type:"patch-area-draft",patch:{coverageSetting:F(r)}})}>${G.map(r=>i`<option value=${r} ?selected=${r===e.coverageSetting}>${this.#r(r)}</option>`)}</select>
          </label>
        </div>
        ${this.#d(e.cleaningMode)}
        <div class="toolbar">
          <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#a({type:"open-workflow",workflow:"draw"})}>${this.#e("v4_edit_outline","Redraw")}</button>
          ${U(this.state,"confirmDeleteArea")?i`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_delete_area_label","Delete area")}
              data-dialog-launcher="confirmDeleteArea"
              @click=${()=>this.#a({type:"open-dialog",dialog:"confirmDeleteArea"})}
            >${this.#e("area_delete","Delete")}</button>
          `:l}
        </div>
      </div>
    `}#h(){let e=this.state.resources.history,a=e.value,s=a?.floors.find(u=>u.id===this.state.selection.floorId)||a?.floors.find(u=>u.active)||a?.floors[0],o=s?.snapshots||[],r=this.state.selection.historyId?Math.max(0,o.findIndex(u=>u.id===this.state.selection.historyId)):o.length,m=s?.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_return_current_floor","Return to current floor"),c=this._historyPreviewPosition??r,d=o[c];return this.#l(e,i`
      <div class="stack">
        ${(a?.floors.length||0)>1?i`
          <div class="group">
            <h3 class="group-heading" id="floors-heading">${this.#e("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(a?.floors||[]).map((u,v)=>i`
              <button
                class="floor ms-row ms-row"
                type="button"
                aria-current=${String(u.id===s?.id)}
                @click=${()=>this.#a({type:"set-floor",floorId:u.id})}
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
              .value=${String(c)}
              aria-valuetext=${d?ke(d.createdAt,this.dates):m}
              ?disabled=${!o.length}
              @input=${u=>{this._historyPreviewPosition=Number(F(u))}}
              @change=${u=>{let v=Number(F(u));this._historyPreviewPosition=null,this.#a({type:"set-history",historyId:v===o.length?null:o[v]?.id||null})}}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId&&!!s?.active)} @click=${()=>this.#a({type:"set-history",historyId:null})}><span>${m}</span><small>${this.#e("v4_current","Current")}</small></button>
            ${o.map((u,v)=>i`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(u.id===this.state.selection.historyId)} @click=${()=>this.#a({type:"set-history",historyId:u.id})}>
                <span>${ke(u.createdAt,this.dates)}</span><small>${this.#e("v4_history_position","{position} of {count}",{position:v+1,count:o.length})}</small>
              </button>
            `)}
          </div>
        </div>
        <p class="subtle">${this.#e("v4_history_privacy","Saved maps show one floor each and never show where the robot is now.")}</p>
      </div>
    `,"history")}#g(){return this.#s.request(),this.#s.status!=="ready"?Qe(this.#s.status,this.localize,this.retry):i`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}#m(e){return i`<fieldset class="workflow-fields" ?disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}>${e}</fieldset>`}render(){switch(this.state.workflow){case"rooms":return this.#p();case"plans":case"plan":return this.#i();case"draw":return this.#m(this.#v());case"areaReview":return this.#m(this.#f());case"history":return this.#m(this.#h());case"support":return this.#g();case"none":return l}}};customElements.get(j)||customElements.define(j,Me);export{Pe as MapOptions,Me as MaticMapWorkflowV4,Ft as actionReason,Zt as confirmDialog,Gt as dialogCopy,Xt as dialogLauncher,Yt as dialogReturnTarget,Qt as focusPlanTarget,Kt as planCancel,Vt as planTitle,jt as planTools};
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
