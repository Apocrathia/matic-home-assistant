import{a as B,b as Xt}from"./chunk-EMX5B4R2.js";import{E as ht,H as gt,O as xe,P as _t,R as O,a as ne,b as re,d as ve,e as Z,f as he,g as V,h as ge}from"./chunk-54AOXPZ7.js";import{A as mt,B as j,C as ke,D as pt,E as ut,K as vt,P as J,R as P,T as y,a as H,b as D,c as q,f as we,j as L,k as ct,l as dt}from"./chunk-LLBO4U4N.js";import{$ as lt,A as tt,F as at,G as ot,H as st,I as nt,J as rt,L as Y,M as He,O as De,U as I,W as l,Z as it,_ as i,aa as W,ba as z,c as oe,ca as ie,da as qe,e as Xe,f as Ye,j as Ze,k as Je,n as A,p as We,q as $e,t as se,u as et}from"./chunk-GZM3LJU2.js";var T=(t,s)=>new Intl.NumberFormat(t).format(s),ee=(t,s,e)=>{let a=m=>{let v=e.filter(m).map(p=>p.name);return v.length?ie(s,v):null},o=m=>a(v=>v.cadenceReasons.includes("coverage_due")&&v.coverageSetting===m),n=a(m=>m.cadenceReasons.includes("mop_due")),r=o("quick"),d=o("standard"),c=o("heavy_duty");return[n&&t("v4_due_mop","Mop due in {rooms}",{rooms:n}),r&&t("v4_due_quick","Quick vacuum due in {rooms}",{rooms:r}),d&&t("v4_due_optimal","Optimal vacuum due in {rooms}",{rooms:d}),c&&t("v4_due_heavy","Heavy duty vacuum due in {rooms}",{rooms:c})].filter(m=>!!m)},Se=(t,s,e)=>{let a=e.rooms.length,o=e.runBehavior==="ordered";return a===1?o?t("v4_plan_row_ordered_one","1 room \xB7 Top to bottom, as listed"):t("v4_plan_row_rotation_one","1 room \xB7 Longest-waiting rooms first"):o?t("v4_plan_row_ordered","{count} rooms \xB7 Top to bottom, as listed",{count:T(s,a)}):t("v4_plan_row_rotation","{count} rooms \xB7 Longest-waiting rooms first",{count:T(s,a)})},bt=(t,s,e)=>{if(!e.enabled)return null;let a=e.nextRunPreview?.blocker;if(a&&a!=="plan_disabled")return{blocked:t("v4_plan_row_blocked","Needs attention before it can run")};let o=ee(t,s,e.nextRunPreview?.rooms??[]);return o.length?{due:o}:null};var Re=1,_e=100,ft=(t,s,e)=>{if(s)return e;let a=t.trim();if(a==="")return null;let o=Number(a);return Number.isFinite(o)?Math.min(_e,Math.max(Re,Math.round(o))):e},yt=(t,s)=>t===null?s>0?Re:null:t+s<Re?null:Math.min(_e,t+s),Ce=I` .ms-stepper{--ms-local:var(--ms-surface-card);display:inline-grid;flex:none;grid-template-columns:var(--ms-control) minmax(3rem,4.5rem) var(--ms-control);gap:var(--ms-space-1);align-items:center;border:1px solid var(--ms-line-strong);border-radius:var(--ms-radius-sm);background:var(--ms-local);}.ms-stepper--readonly{grid-template-columns:minmax(3rem,4.5rem);}.ms-stepper .ms-btn{border-radius:calc(var(--ms-radius-sm) - 1px);}.ms-stepper input{inline-size:100%;min-inline-size:0;min-block-size:var(--ms-control);margin:0;padding:0;border:0;border-radius:var(--ms-radius-xs);color:var(--ms-text);background:transparent;font:inherit;font-size:var(--ms-t-md);font-weight:var(--ms-w-medium);font-variant-numeric:tabular-nums;text-align:center;appearance:textfield;-moz-appearance:textfield;}.ms-stepper input::-webkit-inner-spin-button,.ms-stepper input::-webkit-outer-spin-button{margin:0;appearance:none;-webkit-appearance:none;}.ms-stepper input::placeholder{color:var(--ms-text-quiet);font-weight:var(--ms-w-medium);opacity:1;}.ms-stepper input:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px;}.ms-stepper input[readonly]{color:var(--ms-text-quiet);}@media (forced-colors:active){.ms-stepper{border:1px solid CanvasText;}}`,$t=t=>{let{id:s,t:e,value:a}=t,o=t.heldBy!==null,n=l`<input
    id=${s}
    type="number"
    inputmode="numeric"
    min="1"
    max=${_e}
    step="1"
    placeholder=${e("v4_cadence_off","Off")}
    aria-labelledby=${t.labelId}
    aria-describedby=${t.describedBy??i}
    aria-disabled=${o&&!t.readonly?"true":i}
    ?readonly=${t.readonly||o}
    .value=${a===null?"":String(a)}
    @change=${d=>{let c=d.currentTarget,m=t.readonly||o?a:ft(c.value,c.validity.badInput,a);c.value=m===null?"":String(m),m!==a&&t.commit(m)}}
  >`;if(t.readonly)return l`<span class="ms-stepper ms-stepper--readonly">${n}</span>`;let r=d=>{let m=(d<0?a===null:a===_e)?d<0?e("v4_cadence_stepper_off_reason","This schedule is already off."):e("v4_cadence_stepper_max_reason","Every 100 cleans is the longest schedule."):null,v=`${s}-${d<0?"min":"max"}`,p=d<0?e("v4_stepper_decrease","Decrease {label}",{label:t.label}):e("v4_stepper_increase","Increase {label}",{label:t.label});return l`<button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${p}
      aria-controls=${s}
      aria-disabled=${m||o?"true":i}
      aria-describedby=${[m?v:null,t.heldBy].filter(Boolean).join(" ")||i}
      title=${m??i}
      @click=${()=>{!m&&!o&&t.commit(yt(a,d))}}
    >${y(d<0?ke:j)}${m?l`<span class="sr-only" id=${v}>${m}</span>`:i}</button>`};return l`<span class="ms-stepper">${r(-1)}${n}${r(1)}</span>`};var te=["vacuum","mop","vacuum_and_mop"],K=["quick","standard","heavy_duty"],ae=(t,s)=>s==="vacuum"?t("vacuum","Vacuum"):s==="mop"?t("mop","Mop"):t("vacuum_and_mop","Vacuum + mop"),U=(t,s)=>s==="quick"?t("quick","Quick"):s==="standard"?t("standard","Optimal"):t("heavy_duty","Heavy duty"),kt=t=>t("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."),xt=(t,s)=>{if(s.includes("coverage_requires_vacuum"))return kt(t);if(s.includes("identity_changed")||s.includes("room_not_on_current_map"))return t("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(s.includes("shared_schedule_unavailable"))return t("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(s.includes("mop_progress_unverified")||s.includes("coverage_progress_unverified")){let e=[];return s.includes("mop_progress_unverified")&&e.push(t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),s.includes("coverage_progress_unverified")&&e.push(t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),e.join(" ")}return s.includes("invalid_cadence_policy")?t("v4_cadence_policy_invalid","The room schedule needs review before it can be applied."):null},Yt={scope:"shared",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1},Pe=t=>!!(t&&(t.mopEveryN!==null||t.coverageEveryN!==null)),Zt={quick:(t,s,e)=>s===null?t("v4_cadence_coverage_quick_off","Quick vacuum"):e?t("v4_cadence_coverage_quick_one","Quick vacuum every clean"):t("v4_cadence_coverage_quick","Quick vacuum every {count} cleans",{count:s}),standard:(t,s,e)=>s===null?t("v4_cadence_coverage_optimal_off","Optimal vacuum"):e?t("v4_cadence_coverage_optimal_one","Optimal vacuum every clean"):t("v4_cadence_coverage_optimal","Optimal vacuum every {count} cleans",{count:s}),heavy_duty:(t,s,e)=>s===null?t("v4_cadence_coverage_heavy_off","Heavy duty vacuum"):e?t("v4_cadence_coverage_heavy_one","Heavy duty vacuum every clean"):t("v4_cadence_coverage_heavy","Heavy duty vacuum every {count} cleans",{count:s})},Jt={quick:(t,s)=>s?t("v4_cadence_next_mop_quick","Mop and quick vacuum on the next clean"):t("v4_cadence_next_quick","Quick vacuum on the next clean"),standard:(t,s)=>s?t("v4_cadence_next_mop_optimal","Mop and optimal vacuum on the next clean"):t("v4_cadence_next_optimal","Optimal vacuum on the next clean"),heavy_duty:(t,s)=>s?t("v4_cadence_next_mop_heavy","Mop and heavy duty vacuum on the next clean"):t("v4_cadence_next_heavy","Heavy duty vacuum on the next clean")},ea=(t,s,e)=>e===null?t("v4_cadence_mop_off","Mop"):e===1?t("v4_cadence_mop_interval_one","Mop every clean"):t("v4_cadence_mop_interval","Mop every {count} cleans",{count:T(s,e)}),ta=(t,s,e,a)=>Zt[e](t,a===null?null:T(s,a),a===1),aa=["identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy"],be=({room:t,saved:s,catalogRoom:e})=>{let a=t.cadence??Yt,o=e?.sharedCadence,n=o===void 0&&(e?.sharedCadenceReasons?.length??0)>0,r=o!==void 0||n,d=s?.cadence?.scope==="shared",c=o!==void 0&&!d&&t.cadence?.scope==="shared";return{policy:a,shared:o,sharedExists:r,participating:d,joinPending:c,progress:c?e?.sharedCadenceProgress:t.cadenceProgress,reasons:c?e?.sharedCadenceReasons??[]:t.cadenceReasons??[],savedPolicy:s?.cadence,savedProgress:s?.cadenceProgress,sharedFits:!o||(o.mopEveryN===null||t.cleaningMode==="vacuum")&&(o.coverageEveryN===null||t.cleaningMode!=="mop"),sharedBroken:n}},F={mop:{every:"mopEveryN",flag:"doMopNext",next:"nextMopIn",count:"mopProgress"},coverage:{every:"coverageEveryN",flag:"doCoverageNext",next:"nextCoverageIn",count:"coverageProgress"}},St=(t,s)=>!!(t.joinPending?t.shared:t.savedPolicy)?.[F[s].flag],Oe=t=>!t.joinPending&&t.savedPolicy!==void 0&&t.savedPolicy.scope!==t.policy.scope,Rt=(t,s)=>{let{every:e,flag:a,next:o,count:n}=F[s],r=t.policy[e];if(!t.progress||r===null)return null;if(!(!t.joinPending&&(Oe(t)||r!==(t.savedPolicy?.[e]??null)||t.policy[a]!==St(t,s))))return t.progress[o];let c=Oe(t)?0:t.progress[n];return t.policy[a]||c>=r-1?1:r-c},oa=(t,s)=>{let e=F[s].every,a=t.savedPolicy?.[e]??null;return!t.joinPending&&a!==null&&t.policy[e]!==null&&t.policy[e]!==a},Me=(t,s)=>{let e=t.policy[F[s].every];return e!==null&&e>1&&(St(t,s)||Rt(t,s)!==1)},Ct=({room:t},s)=>({mop:!s.reasons.includes("mop_progress_unverified")&&t.cleaningMode!=="vacuum"&&s.policy.mopEveryN===null,coverage:!s.reasons.includes("coverage_progress_unverified")&&t.cleaningMode==="mop"}),wt=(t,s,e,a)=>{let o=e.policy[F[a].every],n=Rt(e,a);return o===null?t("v4_cadence_status_off","Not scheduled"):o===1?t("v4_cadence_status_every","Due every clean"):e.policy[F[a].flag]||n===1?t("v4_cadence_status_next","Due next clean"):oa(e,a)?t("v4_cadence_status_edited","Keeps the progress so far"):Oe(e)||n===null?null:t("v4_cadence_status_in","Due in {count} cleans",{count:T(s,n)})},sa=(t,s,e)=>{let{policy:a,participating:o}=s,n=Pe(a);if(s.joinPending)return t("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");if(o&&a.scope==="plan")return t("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule.");if(!o&&a.scope==="shared"&&n)return t("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero.");let r=["mop","coverage"].some(d=>a[F[d].every]!==null&&(s.savedProgress?.[F[d].count]??0)>0);return a.scope==="plan"&&n&&!Pe(s.savedPolicy)&&!r?t("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):s.savedPolicy&&(a.mopEveryN!==s.savedPolicy.mopEveryN||a.coverageEveryN!==s.savedPolicy.coverageEveryN)?t("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."):o?t("v4_cadence_shared_edit_effect","Changes apply to every plan that uses {room}'s shared schedule.",{room:e}):null},na=(t,s,e)=>{let a=be(e),{policy:o,reasons:n}=a,{room:r,saved:d,name:c}=e,m=o.coverageEveryN!==null,v=(m?null:e.offLevel)??o.periodicCoverageSetting??"heavy_duty",p=M=>n.includes(M),u=p("mop_progress_unverified"),{mop:h,coverage:g}=Ct(e,a),f=p("coverage_progress_unverified"),_=!f&&r.cleaningMode==="mop"&&m,b=nt(n.filter(M=>aa.includes(M)),c),S=o.doMopNext||o.doCoverageNext,C=S?o.doMopNext:Me(a,"mop"),w=S?o.doCoverageNext:Me(a,"coverage"),x=(M,X,pe)=>d!==void 0&&((M??0)>0||!!X||!!d.cadenceReasons?.includes(pe));return{policy:o,level:v,mop:{every:o.mopEveryN,label:ea(t,s,o.mopEveryN),status:wt(t,s,a,"mop"),reason:u?t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):h?t("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum."):null,blocked:h,unverified:u},coverage:{every:o.coverageEveryN,label:ta(t,s,v,o.coverageEveryN),status:wt(t,s,a,"coverage"),reason:f?t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):_?kt(t):g?t("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming."):null,blocked:g,unverified:f},legacyCoverage:_,roomReason:b?t(b.reasonKey,b.reason,b.reasonPlaceholders):null,sharedHint:a.shared!==void 0&&a.sharedFits&&!a.participating&&o.scope==="shared"&&!Pe(o),joinPending:a.joinPending,participating:a.participating,next:C||w?{label:w?Jt[v](t,C):t("v4_cadence_next_mop","Mop on the next clean"),on:S,mop:C,coverage:w,blocked:C&&h?"mop":w&&g?"coverage":null}:null,explanation:sa(t,a,c),scope:o.scope,resettable:{mop:x(d?.cadenceProgress?.mopProgress,d?.cadence?.doMopNext,"mop_progress_unverified"),coverage:x(d?.cadenceProgress?.coverageProgress,d?.cadence?.doCoverageNext,"coverage_progress_unverified")},sharedReason:Ve(a)?a.sharedBroken?t("v4_cadence_shared_broken_reason","Can't count across all plans until you fix this room's shared schedule in a plan that uses it."):t("v4_cadence_shared_mode_reason","Can't count across all plans until this room's cleaning mode works with its shared schedule."):null}},Et=t=>t.shared&&t.sharedFits&&!t.participating?{...t.shared,scope:"shared"}:null,Ve=t=>t.sharedExists&&(!t.sharedFits||t.sharedBroken)&&!t.participating,Tt=(t,s,e)=>{let a=be(t),{policy:o}=a;if(a.joinPending)return null;if(e!==null&&!Pe(o)&&o.scope==="shared"){let r=Et(a);if(r)return r;if(Ve(a))return Tt({...t,room:{...t.room,cadence:{...o,scope:"plan"}}},s,e)}let n=e!==null&&e>1;return s==="mop"?{...o,mopEveryN:e,doMopNext:n&&o.doMopNext}:e===null?{...o,coverageEveryN:null,doCoverageNext:!1}:o.coverageEveryN===null?{...o,coverageEveryN:e,periodicCoverageSetting:t.offLevel??o.periodicCoverageSetting??"heavy_duty"}:{...o,coverageEveryN:e,doCoverageNext:n&&o.doCoverageNext}},ra=(t,s)=>{let e=be(t);return e.joinPending||e.policy.coverageEveryN===null?null:{...e.policy,periodicCoverageSetting:s}},ia=(t,s)=>{let e=be(t);if(e.joinPending)return null;let a=Me(e,"mop"),o=Me(e,"coverage");if(!a&&!o&&!e.policy.doMopNext&&!e.policy.doCoverageNext)return null;let n=Ct(t,e);return s&&(a&&n.mop||o&&n.coverage)?null:s?{...e.policy,doMopNext:a,doCoverageNext:o}:{...e.policy,doMopNext:!1,doCoverageNext:!1}},la=(t,s)=>{let e=be(t);return s==="shared"&&Ve(e)?null:(s==="shared"?Et(e):null)??{...e.policy,scope:s}},ca=t=>({...t,scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1}),da=(t,s)=>s.planDraft.dirty?t("v4_reason_reset_unsaved","Can't reset until you save or cancel your changes."):s.command!=="idle"||s.managedLock||s.activity!=="idle"&&s.activity!=="docked"||s.dataMode!=="live"?t("v4_reason_reset_busy","Can't reset until the robot is idle and the map is live."):null,ma=(t,s,e,a)=>{let o=t.resources.plans.value,n=t.planDraft.id;return{room:s,saved:n?o?.plans.find(r=>r.id===n)?.rooms.find(r=>r.roomId===s.roomId):void 0,catalogRoom:o?.rooms.find(r=>r.roomId===s.roomId),name:e,offLevel:a}},Te="\0",Ee=(t,s)=>{let[e,...a]=t.split(Te);return a.length?l`${e}<bdi>${s}</bdi>${a.join(s)}`:t},Pt=(t,s,e,a)=>{let{t:o,state:n,held:r}=t,d=n.planDraft,c=ma(n,s,a,t.offLevel),m=na(o,n.locale,{...c,name:Te}),v=($,k,E="small")=>E==="p"?l`<p class="sched-status sched-reason" id=${$??i}>${y(P)}<span>${k}</span></p>`:l`<small class="sched-status sched-reason" id=${$??i}>${y(P)}<span>${k}</span></small>`,{policy:p,next:u}=m,h=$=>{if(!$||r)return;let k=d.rooms.map((E,R)=>R===e?{...E,cadence:$}:E);t.intent({type:"patch-plan-draft",patch:{rooms:k}})},g={disabled:r?"true":i,described:r??i},f=(...$)=>$.filter(Boolean).join(" ")||null,_=($,k)=>k.reason?v($,k.reason):k.status?l`<small class="sched-status" id=${$}>${k.status}</small>`:i,b=da(o,n),S=!!(r||b),C=($,k,E,R=null)=>l`<button
    class=${k}
    type="button"
    role=${R??i}
    tabindex=${R?"-1":i}
    aria-label=${$==="mop"?o("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:a}):o("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:a})}
    aria-disabled=${S?"true":i}
    aria-describedby=${r??(b?E:null)??i}
    @click=${()=>{S||!d.id||(t.menu.close(!1),t.intent({type:"request-room-cadence-reset",planId:d.id,roomId:s.roomId,mode:$}))}}
  >${$==="mop"?o("v4_reset_mop_cadence_button","Reset mopping"):o("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`,w=o("v4_room_more_named","More for {room}",{room:a}),{menu:x}=t,M=d.id&&(m.resettable.mop||m.resettable.coverage)?l`<div class="room-more" @keydown=${x.keydown} @focusout=${x.focusout}>
    <button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${w}
      title=${w}
      aria-haspopup="menu"
      aria-expanded=${String(x.open)}
      aria-disabled=${g.disabled}
      aria-describedby=${g.described}
      @click=${()=>{r||x.toggle()}}
    >${y(we)}</button>
    ${x.open&&!r?l`<div class="menu ms-surface ms-surface--overlay" @mousedown=${$=>$.preventDefault()}>
      <div role="menu" aria-label=${w}>
        ${m.resettable.mop?C("mop","ms-row ms-row--menu","reset-reason","menuitem"):i}
        ${m.resettable.coverage?C("coverage","ms-row ms-row--menu","reset-reason","menuitem"):i}
      </div>
      ${b?l`<div class="reason">${v("reset-reason",b,"p")}</div>`:i}
    </div>`:i}
  </div>`:i,X=($,k,E)=>{let R=`sched-${$}`,ue=k.reason||k.status?`${R}-status`:null;return l`<div class="sched-row">
      <label class="sched-label" id=${`${R}-label`} for=${R}>${k.label}</label>
      <div class="sched-controls">
        ${E}
        ${$t({id:R,labelId:`${R}-label`,label:k.label,value:k.every,describedBy:f(ue,r),heldBy:r??(k.blocked?ue:null),readonly:m.joinPending,t:o,commit:ye=>h(Tt(c,$,ye))})}
      </div>
      ${_(`${R}-status`,k)}
      ${k.unverified&&d.id?l`${C($,"ms-btn ms-btn--secondary",`${R}-reset-reason`)}
        ${b?v(`${R}-reset-reason`,b,"p"):i}`:i}
    </div>`},pe=r??(m.coverage.blocked?"sched-coverage-status":null),Qt=m.joinPending?i:l`<select
    class="ms-select sched-level"
    aria-label=${o("v4_cadence_level_named","Vacuum level for {room}",{room:a})}
    aria-disabled=${pe?"true":i}
    aria-describedby=${pe??i}
    .value=${m.level}
    @change=${$=>{let k=$.currentTarget;if(pe){k.value=m.level;return}let E=k.value,R=ra(c,E);t.setOffLevel(R?null:E),R&&h(R)}}
  >${K.map($=>l`<option value=${$} ?selected=${$===m.level}>${U(o,$)}</option>`)}</select>`;return l`<section class="schedule" role="group" aria-label=${o("v4_room_cadence_named","Room schedule for {room}",{room:a})}>
    <div class="schedule-head"><h3>${o("v4_room_schedule","Schedule")}</h3>${M}</div>
    ${m.roomReason?v(null,Ee(m.roomReason,a),"p"):i}
    ${m.sharedHint?l`<p class="schedule-note">${Ee(o("v4_cadence_shared_available","{room} has a shared schedule, and turning on a row uses it.",{room:Te}),a)}</p>`:i}
    ${X("mop",m.mop,i)}
    ${X("coverage",m.coverage,Qt)}
    ${m.legacyCoverage?l`<button
      type="button"
      class="ms-btn ms-btn--secondary sched-off"
      aria-label=${o("v4_cadence_turn_off_named","Turn off the vacuum rotation in {room}",{room:a})}
      aria-disabled=${g.disabled}
      aria-describedby=${g.described}
      @click=${()=>h(ca(p))}
    >${o("v4_cadence_clear_room_coverage","Turn off")}</button>`:i}
    ${u?l`<div class="switch-row">
      <span class="switch-copy">
        <span id="sched-next-label">${u.label}</span>
        <small id="sched-next-hint">${o("v4_cadence_next_hint","Brings it forward once; the schedule then continues as usual.")}</small>
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(u.on)}
        aria-labelledby="sched-next-label"
        aria-describedby=${f("sched-next-hint",r??(m.joinPending?"sched-join":u.blocked?`sched-${u.blocked}-status`:null))??i}
        aria-disabled=${r||m.joinPending||u.blocked?"true":i}
        @click=${()=>{u.blocked||h(ia(c,!u.on))}}
      ></button>
    </div>`:i}
    ${m.joinPending?l`<p class="schedule-note" id="sched-join">${Ee(o("v4_cadence_join_pending",`Uses {room}'s shared schedule; change it after you save, or choose "In this plan only" under Advanced.`,{room:Te}),a)}</p>`:i}
    ${m.explanation?l`<p class="schedule-note">${Ee(m.explanation,a)}</p>`:i}
    <details class="advanced">
      <summary>${o("v4_advanced","Advanced")}${y(L)}</summary>
      <fieldset class="scope">
        <legend>${o("v4_cadence_scope","Count cleans")}</legend>
        ${[["shared",o("v4_cadence_shared","Across all plans (recommended)")],["plan",o("v4_cadence_this_plan","In this plan only")]].map(([$,k])=>{let E=r??($==="shared"&&m.sharedReason?"sched-scope-reason":null);return l`<label class="scope-row"><input
            type="radio"
            name="sched-scope"
            value=${$}
            .checked=${m.scope===$}
            aria-disabled=${E?"true":i}
            aria-describedby=${E??i}
            @change=${R=>{let ue=E?null:la(c,$);ue?h(ue):R.currentTarget.closest("fieldset")?.querySelectorAll("input").forEach(ye=>{ye.checked=ye.value===m.scope})}}
          ><span>${k}</span></label>`})}
        ${m.sharedReason?v("sched-scope-reason",m.sharedReason,"p"):i}
      </fieldset>
      <p class="schedule-note">${o("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
    </details>
  </section>`},N=(t,s)=>s.cleaningMode==="mop"?t("v4_room_setting_mop","Mop"):s.cleaningMode==="vacuum"?s.coverageSetting==="quick"?t("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):s.coverageSetting==="standard"?t("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):t("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):s.coverageSetting==="quick"?t("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):s.coverageSetting==="standard"?t("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):t("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),pa={mop:(t,s)=>t("v4_room_schedules_mop","Mop every {mop} cleans",{mop:s}),mop_one:t=>t("v4_room_schedules_mop_one","Mop every clean"),quick:(t,s,e)=>t("v4_room_schedules_quick","Quick vacuum every {cov} cleans",{cov:e}),quick_one:t=>t("v4_room_schedules_quick_one","Quick vacuum every clean"),optimal:(t,s,e)=>t("v4_room_schedules_optimal","Optimal vacuum every {cov} cleans",{cov:e}),optimal_one:t=>t("v4_room_schedules_optimal_one","Optimal vacuum every clean"),heavy:(t,s,e)=>t("v4_room_schedules_heavy","Heavy duty vacuum every {cov} cleans",{cov:e}),heavy_one:t=>t("v4_room_schedules_heavy_one","Heavy duty vacuum every clean"),mop_quick:(t,s,e)=>t("v4_room_schedules_mop_quick","Mop every {mop} cleans \xB7 Quick vacuum every {cov} cleans",{mop:s,cov:e}),mop_quick_one_mop:(t,s,e)=>t("v4_room_schedules_mop_quick_one_mop","Mop every clean \xB7 Quick vacuum every {cov} cleans",{cov:e}),mop_quick_one_cov:(t,s)=>t("v4_room_schedules_mop_quick_one_cov","Mop every {mop} cleans \xB7 Quick vacuum every clean",{mop:s}),mop_quick_one_both:t=>t("v4_room_schedules_mop_quick_one_both","Mop every clean \xB7 Quick vacuum every clean"),mop_optimal:(t,s,e)=>t("v4_room_schedules_mop_optimal","Mop every {mop} cleans \xB7 Optimal vacuum every {cov} cleans",{mop:s,cov:e}),mop_optimal_one_mop:(t,s,e)=>t("v4_room_schedules_mop_optimal_one_mop","Mop every clean \xB7 Optimal vacuum every {cov} cleans",{cov:e}),mop_optimal_one_cov:(t,s)=>t("v4_room_schedules_mop_optimal_one_cov","Mop every {mop} cleans \xB7 Optimal vacuum every clean",{mop:s}),mop_optimal_one_both:t=>t("v4_room_schedules_mop_optimal_one_both","Mop every clean \xB7 Optimal vacuum every clean"),mop_heavy:(t,s,e)=>t("v4_room_schedules_mop_heavy","Mop every {mop} cleans \xB7 Heavy duty vacuum every {cov} cleans",{mop:s,cov:e}),mop_heavy_one_mop:(t,s,e)=>t("v4_room_schedules_mop_heavy_one_mop","Mop every clean \xB7 Heavy duty vacuum every {cov} cleans",{cov:e}),mop_heavy_one_cov:(t,s)=>t("v4_room_schedules_mop_heavy_one_cov","Mop every {mop} cleans \xB7 Heavy duty vacuum every clean",{mop:s}),mop_heavy_one_both:t=>t("v4_room_schedules_mop_heavy_one_both","Mop every clean \xB7 Heavy duty vacuum every clean")},Mt=(t,s,e)=>{let a=e?.mopEveryN??null,o=e?.coverageEveryN??null;if(a===null&&o===null)return null;let n=e?.periodicCoverageSetting,r=n==="quick"?"quick":n==="heavy_duty"?"heavy":"optimal",d=a===null?`${r}${o===1?"_one":""}`:o===null?`mop${a===1?"_one":""}`:`mop_${r}${a===1&&o===1?"_one_both":a===1?"_one_mop":o===1?"_one_cov":""}`,c=pa[d];return c?c(t,a===null?"":T(s,a),o===null?"":T(s,o)):null};var G=class{constructor(s,e,a){this.host=s;this.root=e;this.launcher=a;this.open=!1;this.#a=!1;this.keydown=s=>{if(!this.open)return;if(s.key==="Escape"){s.preventDefault(),this.close(!0);return}let e=[...this.host.renderRoot.querySelectorAll(`${this.root} [role^=menuitem]`)],a=e.indexOf(s.composedPath()[0]),o=s.key==="ArrowDown"?a+1:s.key==="ArrowUp"?a-1:s.key==="Home"?0:s.key==="End"?e.length-1:null;o===null||a<0||!e.length||(s.preventDefault(),e[(o+e.length)%e.length]?.focus())};this.focusout=s=>{let e=s.relatedTarget;e&&!s.currentTarget.contains(e)&&this.#o(!1)};this.#t=s=>{let e=this.host.renderRoot.querySelector(this.root);this.open&&e&&!s.composedPath().includes(e)&&this.#o(!1)};s.addController(this)}hostConnected(){window.addEventListener("pointerdown",this.#t,!0)}hostDisconnected(){window.removeEventListener("pointerdown",this.#t,!0)}hostUpdated(){this.#a&&(this.#a=!1,this.host.renderRoot.querySelector(`${this.root} [role^=menuitem]`)?.focus())}#a;#o(s){s!==this.open&&(this.open=s,this.#a=s,this.host.requestUpdate())}toggle(){this.#o(!this.open)}close(s){this.#o(!1),s&&this.host.renderRoot.querySelector(`${this.root} ${this.launcher}`)?.focus()}#t};var Be=class extends W{constructor(){super(...arguments);this.state=A();this.#t=new G(this,".more","> button")}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[H,D,q,I` :host{display:contents;}.more{position:relative;margin-inline-start:auto;}.more>.ms-btn{transition:none;}.reason{flex-basis:100%;margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);text-align:end;}.menu{position:absolute;z-index:18;inset-block-start:calc(100% + var(--ms-space-1));inset-inline-end:0;display:grid;min-inline-size:14rem;padding:var(--ms-space-1);}.menu .ms-row{justify-content:flex-start;inline-size:100%;}.menu .reason{padding:var(--ms-space-1) var(--ms-space-3);text-align:start;}`]}#a(e,a,o){return z(this.localize,e,a,o)}#o(e,a=this){a.dispatchEvent(new CustomEvent(O,{detail:e,bubbles:!0,composed:!0}))}#t;willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this.#t.open=!1)}#e(){let{command:e,pendingAction:a,planDraft:o}=this.state;return a==="save-plan"?this.#a("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):o.dirty?this.#a("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes."):e==="pending"?this.#a("v4_reason_robot_operation_waiting","Waiting for the robot to finish what it's doing."):null}#n(e){if(this.#e())return;let a=e.currentTarget.closest(".more")?.querySelector("button");this.#t.close(!1),this.#o({type:"open-dialog",dialog:"confirmDeletePlan"},a??this)}render(){let{planView:e,planDraft:a,pendingAction:o}=this.state;if(e==="run"){let r=o==="save-plan"?this.#a("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):o==="run-plan"?this.#a("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return l`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#a("v4_edit_plan_named","Edit {plan}",{plan:a.name})}
          aria-disabled=${r?"true":i}
          aria-describedby=${r?"edit-reason":i}
          @click=${()=>{r||this.#o({type:"set-plan-view",view:"edit"})}}
        >${this.#a("v4_edit","Edit")}</button>
        ${r?l`<p class="reason" id="edit-reason">${r}</p>`:i}
      `}if(!se(this.state,"confirmDeletePlan"))return i;let n=this.#e();return l`
      <div class="more" @keydown=${this.#t.keydown} @focusout=${this.#t.focusout}>
        <button
          class="ms-btn ms-btn--icon"
          type="button"
          aria-label=${this.#a("v4_more_actions","More actions")}
          aria-haspopup="menu"
          aria-expanded=${String(this.#t.open)}
          data-dialog-launcher="confirmDeletePlan"
          @click=${()=>this.#t.toggle()}
        >${y(we)}</button>
        ${this.#t.open?l`
          <div class="menu ms-surface ms-surface--overlay" @mousedown=${r=>r.preventDefault()}>
            <div role="menu" aria-label=${this.#a("v4_more_actions","More actions")}><button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitem"
              tabindex="-1"
              aria-disabled=${n?"true":i}
              aria-describedby=${n?"delete-reason":i}
              @click=${this.#n}
            >${this.#a("plan_delete","Delete")}</button></div>
            ${n?l`<p class="reason" id="delete-reason">${n}</p>`:i}
          </div>
        `:i}
      </div>
    `}};customElements.get(he)||customElements.define(he,Be);var ua=(t,s,e)=>l`${t.planView==="run"?l`<bdi>${s}</bdi>`:s}${t.planDraft.dirty?l` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:i}`,It=ne(he),va=(t,s,e)=>re`<${It}
  .state=${t}
  .localize=${s}
  @matic-workspace-intent=${e}
></${It}>`,zt=(t,s,e,a)=>{let o=a?.room;if(o===void 0)return t(s,e,a);let[n,r]=t(s,e,{...a,room:"\0"}).split("\0");return l`${n}<bdi>${o}</bdi>${r}`},je=(t,s,e,a)=>{let o=e?s.jump:void 0;return l`${zt(t,s.reasonKey??"",s.reason??"",s.reasonPlaceholders)}${o?l` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>a({type:"set-plan-view",view:"edit",roomId:o.roomId})}
  >${zt(t,o.labelKey,o.label,o.labelPlaceholders)}</button>`:i}`},ha=(t,s,e,a)=>{let o=t.pendingAction==="save-plan",n=s?.id==="save-plan"?"primary-reason":"cancel-reason";return l`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      aria-disabled=${o?"true":i}
      aria-describedby=${o?n:i}
      @click=${r=>{o||a(t.planDraft.id?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"},r.currentTarget)}}
    >${e("v4_cancel","Cancel")}</button>
    ${o&&n==="cancel-reason"?l`<p class="action-reason" id=${n}>${e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:i}
    ${s?i:l`<p class="action-summary">${e("v4_plan_save_after_work","You can save when the robot finishes.")}</p>`}
  `},ga=(t,s,e)=>l`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      @click=${a=>e(Lt(t),a.currentTarget)}
    >${s("v4_cancel","Cancel")}</button>
  `,Lt=t=>t.areaDraft.id!==null?{type:"select-area",areaId:t.areaDraft.id,workflow:"areaReview"}:{type:"open-workflow",workflow:"areas"},_a=(t,s,e)=>{let a=e.querySelector(Z)?.shadowRoot;if(t.workflow==="draw"&&s.workflow==="areaReview")return t.areaDraft.id!==null?e.querySelector("[data-redraw]")??a?.querySelector("[data-redraw]"):null;if(s.workflow==="areas"){let r=t.areaDraft.id;return r&&a?.querySelector(`[data-area-row="${CSS.escape(r)}"]`)||a?.querySelector("[data-area-new]")}if(t.workflow==="draw")return null;let o=a?.querySelector(V)?.shadowRoot;if(s.workflow==="plan"&&s.planView==="edit"&&s.expandedRoom)return o?.querySelector(`[data-room-disclosure="${CSS.escape(s.expandedRoom)}"]`);if(s.workflow==="plan"&&t.planView==="edit")return e.querySelector(he)?.shadowRoot?.querySelector("button");let n=t.selection.planId;return s.workflow==="plans"&&n?o?.querySelector(`[data-plan-row="${CSS.escape(n)}"]`):null},ba=(t,s,e,a)=>{let o=_a(t,s,e);return a(o)?(o.scrollIntoView({block:"nearest"}),o.focus({preventScroll:!0}),!0):!1};var fa=(t,s)=>De({...t,workflow:"plan",planView:"run",selection:{...t.selection,planId:s.id},planDraft:$e(s)}),ya=(t,s)=>De({...t,...et(t,s.id),workflow:"areaReview"}),$a={label:"",kind:"primary",enabled:!1,id:"check-area",reason:"Can't clean this area until you check it.",reasonKey:"v4_reason_check_area"},Nt=(t,s,e,a,o,n,r,d)=>{let{t:c,held:m}=t,v=!m&&n?.id===r&&n.enabled,p=m||v?null:n,[u="",h=""]=a.split("\0");return l`<div class="shortcut">
    <button
      class="ms-row ms-row--card shortcut-run"
      type="button"
      data-launcher=${`run:${s.kind}:${s.id}`}
      aria-disabled=${v?i:"true"}
      aria-describedby=${m?"home-reason":i}
      @click=${()=>{v&&t.run(s)}}
    >
      <span class="ms-row__lead">${y(vt)}</span>
      <span class="ms-row__body">
        <strong class="card-title"><span class="card-name">${u}<bdi>${e}</bdi>${h}</span>${d}</strong>
        ${o}
        ${p?.reason?l`<span class="card-lines"><span class="line" data-tone="warning">${y(P)}${je(c,p,!1,t.emit)}</span></span>`:i}
      </span>
    </button>
    <button
      class="ms-btn ms-btn--icon ms-btn--secondary shortcut-open"
      type="button"
      data-launcher=${`open:${s.kind}:${s.id}`}
      aria-label=${c("v4_open_named","Open {name}",{name:e})}
      title=${c("v4_open_named","Open {name}",{name:e})}
      aria-disabled=${m?"true":i}
      aria-describedby=${m?"home-reason":i}
      @click=${()=>{m||t.open(s)}}
    >${y(L,{directional:!0})}</button>
  </div>`},wa=(t,s,e)=>{let{t:a,state:o}=t,n=fa(o,e),r=e.enabled?ee(a,o.locale,e.nextRunPreview?.rooms??[]):[];return Nt(t,s,e.name,a("v4_run_named_plan","Run {plan}",{plan:"\0"}),l`<small>${Se(a,o.locale,e)}</small>${r.length?l`<span class="card-lines">${r.map(d=>l`<span class="line">${y(J)}${d}</span>`)}</span>`:i}`,"label"in n?n:null,"run-plan",e.enabled?i:l`<span class="ms-chip">${a("v4_paused","Paused")}</span>`)},ka=(t,s,e)=>{let{t:a,state:o}=t,n=ya(o,e);return Nt(t,s,e.name,a("v4_clean_named_area","Clean {area}",{area:"\0"}),l`<small>${N(a,e)}</small>`,"label"in n?n.id==="save-area"?$a:n:null,"run-area",i)},xa=t=>{let{state:s,t:e}=t,a=s.resources.plans.value?.plans??[],o=s.resources.areas.value?.areas??[];return l`${s.homePins.pins.map(n=>{if(n.kind==="plan"){let d=a.find(c=>c.id===n.id);return d?wa(t,n,d):i}let r=o.find(d=>d.id===n.id);return r?ka(t,n,r):i})}${s.homePins.status==="error"?l`<p class="pins-error">${e("v4_shortcuts_unavailable","Home Assistant couldn't load your home shortcuts.")} <button
    class="ms-btn ms-btn--secondary"
    type="button"
    @click=${()=>t.emit({type:"reload-home-pins"})}
  >${e("v4_retry","Try again")}</button></p>`:i}`},Ie=(t,s,e,a)=>{let{status:o,pins:n}=s.homePins;if(o==="unavailable")return i;let r=n.some(c=>c.kind===e.kind&&c.id===e.id),d=o==="ready"?null:o==="error"?t("v4_reason_shortcuts_unavailable","Can't change this until you choose Try again on the home screen."):t("v4_reason_shortcuts_loading","Waiting for Home Assistant to load your home shortcuts.");return l`
    <div class="switch-row">
      <span class="switch-copy">
        <span id="pin-label">${t("v4_show_on_home","Show on home")}</span>
        <small id="pin-hint">${e.kind==="plan"?t("v4_show_plan_on_home_hint","Adds a one-tap button for this plan to the Matic Map home screen."):t("v4_show_area_on_home_hint","Adds a one-tap button for this area to the Matic Map home screen.")}</small>
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(r)}
        aria-labelledby="pin-label"
        aria-describedby=${d?"pin-hint pin-reason":"pin-hint"}
        aria-disabled=${d?"true":i}
        @click=${()=>{d||a({type:"set-home-pin",pin:e,pinned:!r})}}
      ></button>
    </div>
    ${d?l`<p class="reason" id="pin-reason">${d}</p>`:i}
  `};var At={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wt=t=>(...s)=>({_$litDirective$:t,values:s}),ze=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,e,a){this._$Ct=s,this._$AM=e,this._$Ci=a}_$AS(s,e){return this.update(s,e)}update(s,e){return this.render(...e)}};var{I:Sa}=lt,Ht=t=>t;var Dt=()=>document.createComment(""),le=(t,s,e)=>{let a=t._$AA.parentNode,o=s===void 0?t._$AB:s._$AA;if(e===void 0){let n=a.insertBefore(Dt(),o),r=a.insertBefore(Dt(),o);e=new Sa(n,r,t,t.options)}else{let n=e._$AB.nextSibling,r=e._$AM,d=r!==t;if(d){let c;e._$AQ?.(t),e._$AM=t,e._$AP!==void 0&&(c=t._$AU)!==r._$AU&&e._$AP(c)}if(n!==o||d){let c=e._$AA;for(;c!==n;){let m=Ht(c).nextSibling;Ht(a).insertBefore(c,o),c=m}}}return e},Q=(t,s,e=t)=>(t._$AI(s,e),t),Ra={},qt=(t,s=Ra)=>t._$AH=s,Ot=t=>t._$AH,Le=t=>{t._$AR(),t._$AA.remove()};var Vt=(t,s,e)=>{let a=new Map;for(let o=s;o<=e;o++)a.set(t[o],o);return a},Bt=Wt(class extends ze{constructor(t){if(super(t),t.type!==At.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,s,e){let a;e===void 0?e=s:s!==void 0&&(a=s);let o=[],n=[],r=0;for(let d of t)o[r]=a?a(d,r):r,n[r]=e(d,r),r++;return{values:n,keys:o}}render(t,s,e){return this.dt(t,s,e).values}update(t,[s,e,a]){let o=Ot(t),{values:n,keys:r}=this.dt(s,e,a);if(!Array.isArray(o))return this.ut=r,n;let d=this.ut??=[],c=[],m,v,p=0,u=o.length-1,h=0,g=n.length-1;for(;p<=u&&h<=g;)if(o[p]===null)p++;else if(o[u]===null)u--;else if(d[p]===r[h])c[h]=Q(o[p],n[h]),p++,h++;else if(d[u]===r[g])c[g]=Q(o[u],n[g]),u--,g--;else if(d[p]===r[g])c[g]=Q(o[p],n[g]),le(t,c[g+1],o[p]),p++,g--;else if(d[u]===r[h])c[h]=Q(o[u],n[h]),le(t,o[p],o[u]),u--,h++;else if(m===void 0&&(m=Vt(r,h,g),v=Vt(d,p,u)),m.has(d[p]))if(m.has(d[u])){let f=v.get(r[h]),_=f!==void 0?o[f]:null;if(_===null){let b=le(t,o[p]);Q(b,n[h]),c[h]=b}else c[h]=Q(_,n[h]),le(t,o[p],_),o[f]=null;h++}else Le(o[u]),u--;else Le(o[p]),p++;for(;h<=g;){let f=le(t,c[g+1]);Q(f,n[h]),c[h++]=f}for(;p<=u;){let f=o[p++];f!==null&&Le(f)}return this.ut=r,qt(t,c),it}});var Ca=["mop_progress_unverified","coverage_progress_unverified","identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy","coverage_requires_vacuum"],Fe=class extends W{constructor(){super(...arguments);this._moved="";this.#a=null;this.#o=new Map;this.#t=new G(this,".room-more","> button");this.state=A();this.#e=(e,a,o)=>z(this.localize,e,a,o)}static{this.styles=[H,D,q,B,Ce,I` :host{display:block;}.plain{display:grid;gap:var(--ms-space-2);margin:0;padding:0;list-style:none;}.plan-row .ms-row__body{display:grid;gap:0.125rem;}.plan-row .plan-title{display:flex;gap:var(--ms-space-1) var(--ms-space-2);align-items:center;min-inline-size:0;}.plan-row .plan-title bdi{overflow:hidden;min-inline-size:0;text-overflow:ellipsis;white-space:nowrap;}.plan-row .plan-title .ms-chip{flex:none;}.chip-default{border-color:transparent;background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-surface-card));}.chip-attention{border-color:transparent;background:color-mix(in srgb,var(--ms-danger) 12%,var(--ms-surface-card));}.lines{display:grid;gap:0.125rem;margin:0;color:var(--ms-text);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.line{display:flex;gap:var(--ms-space-1);align-items:flex-start;margin:0;color:var(--ms-text);}.line .ms-icon{inline-size:1rem;block-size:1rem;color:var(--ms-resolved-indicator,var(--ms-accent));}.line[data-tone="warning"] .ms-icon{color:var(--ms-warning);}.plan-row .ms-row__trail:dir(rtl) .ms-icon{scale:-1 1;}.empty-card{display:grid;gap:var(--ms-space-2);padding:var(--ms-space-4);border:1px solid var(--ms-line);border-radius:var(--ms-radius-md);}.empty-card h3{margin:0;font-size:var(--ms-t-md);}.empty-card p{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-md);line-height:var(--ms-lh-normal);}.empty-card .ms-btn{justify-self:start;}.quiet{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.heading{margin:var(--ms-space-4) 0 var(--ms-space-2);color:var(--ms-text-quiet);font-size:var(--ms-t-md);font-weight:var(--ms-w-bold);line-height:var(--ms-lh-tight);}.summary{margin:0 0 var(--ms-space-2);color:var(--ms-text-quiet);font-size:var(--ms-t-md);line-height:var(--ms-lh-snug);}.run-list{display:grid;margin:0 0 var(--ms-space-3);padding:0;list-style:none;}.run-row{display:flex;gap:var(--ms-space-3);align-items:flex-start;padding-block:var(--ms-space-2);border-block-end:1px solid var(--ms-line);}.run-row:last-child{border-block-end:0;}.run-row[data-break]{margin-block-start:var(--ms-space-3);padding-block-start:var(--ms-space-3);border-block-start:2px dashed var(--ms-line-strong);}.row-lines{display:grid;flex:1;gap:0.125rem;min-inline-size:0;}.row-lines bdi{overflow:hidden;font-weight:var(--ms-w-bold);text-overflow:ellipsis;white-space:nowrap;}.row-lines small{color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local,var(--ms-surface-card)));font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.row-lines .ms-chip{justify-self:start;}.pos-badge{display:grid;flex:none;place-items:center;inline-size:1.5rem;block-size:1.5rem;border-radius:50%;background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-surface-card));font-size:var(--ms-t-xs);font-weight:var(--ms-w-bold);font-variant-numeric:tabular-nums;}.problem{margin:0 0 var(--ms-space-2);padding:var(--ms-space-3);border-inline-start:3px solid var(--ms-danger);border-radius:var(--ms-radius-md);background:color-mix(in srgb,var(--ms-danger) 12%,var(--ms-surface-card));font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug);}.switch-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control);}.pin-setting{margin-block-start:var(--ms-space-3);}.pin-setting:empty{display:none;}.switch-copy{display:grid;flex:1;gap:0.125rem;min-inline-size:0;font-size:var(--ms-t-md);}.switch-copy small,.reason{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;padding:0;border:0;clip-path:inset(50%);white-space:nowrap;}.edit{display:grid;gap:var(--ms-space-3);}.order{display:grid;gap:var(--ms-space-1);margin:0;padding:0;border:0;font-size:var(--ms-t-sm);}.order .ms-segment{padding:0;}.order .ms-btn{flex:1;}.list-header{display:flex;align-items:baseline;justify-content:space-between;gap:var(--ms-space-2);}.list-header .heading{margin:0;}.list-header small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs);}.edit-row{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;padding:0;}.edit-row:not([data-selected]){--ms-local:var(--ms-surface-card);}.edit-check{display:grid;place-items:center;inline-size:var(--ms-control);block-size:var(--ms-control);cursor:pointer;}.edit-check input{inline-size:1.2rem;block-size:1.2rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent));cursor:pointer;}.edit-disclosure{display:flex;gap:var(--ms-space-2);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-1);border:0;border-radius:var(--ms-radius-sm);color:inherit;background:transparent;font:inherit;text-align:start;cursor:pointer;}.edit-disclosure:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px;}.edit-disclosure>.ms-icon{flex:none;transition:rotate 120ms;}.edit-disclosure[aria-expanded="true"]>.ms-icon{rotate:90deg;}.edit-disclosure:dir(rtl)>.ms-icon{scale:-1 1;}.edit-disclosure[aria-expanded="true"]:dir(rtl)>.ms-icon{rotate:-90deg;}.edit-name{padding-inline:var(--ms-space-1);}.edit-moves{display:flex;}.row-expanded{display:grid;grid-column:1 / -1;gap:var(--ms-space-2);padding:var(--ms-space-3);border-block-start:1px solid var(--ms-line);}.run-end{display:grid;gap:var(--ms-space-2);}.run-end>summary{min-block-size:var(--ms-control);align-content:center;font-weight:var(--ms-w-bold);cursor:pointer;}.threshold{display:grid;gap:var(--ms-space-1);font-size:var(--ms-t-md);}.threshold input{inline-size:100%;min-block-size:var(--ms-control-sm);accent-color:var(--ms-resolved-indicator,var(--ms-accent));}.subtle{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2);}.schedule{display:grid;gap:var(--ms-space-3);min-inline-size:0;margin-block-start:var(--ms-space-2);}.schedule-head{display:flex;align-items:center;gap:var(--ms-space-2);}.schedule-head h3{flex:1;margin:0;font-size:var(--ms-t-md);font-weight:var(--ms-w-bold);}.sched-row{display:grid;gap:var(--ms-space-1);justify-items:start;min-inline-size:0;}.sched-label{font-size:var(--ms-t-md);font-weight:var(--ms-w-medium);}.sched-controls{display:flex;flex-wrap:wrap;gap:var(--ms-space-3);align-items:center;}.sched-level{flex:none;inline-size:9rem;block-size:var(--ms-control);font-size:var(--ms-t-md);}.sched-status{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.sched-reason{display:flex;gap:var(--ms-space-1);align-items:flex-start;color:var(--ms-text);}.sched-reason .ms-icon{flex:none;inline-size:1rem;block-size:1rem;color:var(--ms-warning);}.sched-off,.sched-row>.ms-btn{justify-self:start;}.room-more{position:relative;}.room-more .menu{position:absolute;z-index:18;inset-block-start:calc(100% + var(--ms-space-1));inset-inline-end:0;display:grid;min-inline-size:14rem;padding:var(--ms-space-1);}.room-more .menu .ms-row{justify-content:flex-start;inline-size:100%;}.room-more .reason{padding:var(--ms-space-1) var(--ms-space-3);}.advanced>summary{display:flex;gap:var(--ms-space-2);align-items:center;min-block-size:var(--ms-control);font-weight:var(--ms-w-medium);list-style:none;cursor:pointer;}.advanced>summary::-webkit-details-marker{display:none;}.advanced>summary .ms-icon{inline-size:1.25rem;block-size:1.25rem;}.advanced[open]>summary .ms-icon{rotate:90deg;}.advanced>summary:dir(rtl) .ms-icon{scale:-1 1;}.advanced[open]>summary:dir(rtl) .ms-icon{rotate:-90deg;}.advanced>summary:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:2px;border-radius:var(--ms-radius-xs);}.scope{display:grid;margin:0 0 var(--ms-space-2);padding:0;border:0;}.scope legend{padding:0;font-size:var(--ms-t-sm);font-weight:var(--ms-w-bold);}.scope-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control);font-size:var(--ms-t-md);cursor:pointer;}.scope-row input{flex:none;inline-size:1.2rem;block-size:1.2rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent));}.schedule-note{margin:0;color:var(--ms-text);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}@media (forced-colors:active){.row-expanded{forced-color-adjust:auto;color:CanvasText;background:Canvas;}.edit-row .row-lines small{color:inherit;}}@media (max-width:25rem){.split{grid-template-columns:1fr;}}`]}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_moved:{state:!0}}}#a;#o;#t;#e;#n(e){this.dispatchEvent(new CustomEvent(O,{detail:e,bubbles:!0,composed:!0}))}#s(e){return T(this.state.locale,e)}#i(e){return e.length?l`<span class="lines">${e.map(a=>l`<span class="line">${y(J)}<span>${a}</span></span>`)}</span>`:i}#d(e,a){let o=Se(this.#e,this.state.locale,e),n=bt(this.#e,this.state.locale,e),r=n===null?i:"blocked"in n?l`<span class="lines"><span class="line" data-tone="warning">${y(P)}<span>${n.blocked}</span></span></span>`:this.#i(n.due),d=this.#e("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return l`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${e.id}
        aria-describedby=${a?"default-hint":i}
        @click=${()=>this.#n({type:"select-plan",planId:e.id})}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${e.name}</bdi>${a?l`<span class="ms-chip chip-default" title=${d}>${this.#e("v4_plan_default","Default")}</span>`:i}${e.enabled?i:l`<span class="ms-chip">${this.#e("v4_paused","Paused")}</span>`}</strong>
          <small>${o}</small>
          ${r}
        </span>
        <span class="ms-row__trail">${y(L)}</span>
      </button>
      ${a?l`<span class="sr-only" id="default-hint">${d}</span>`:i}
    </li>`}#r(){let e=this.state.resources.plans.value,a=this.#e("v4_create_plan","Create a plan");if(!e?.plans.length)return l`<div class="empty-card">
        <h3>${this.#e("v4_no_plans","No plans yet")}</h3>
        <p>${this.#e("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#n({type:"select-plan",planId:null})}>${a}</button>
      </div>`;let o=[...e.plans].sort((n,r)=>+(r.id===e.selectedPlan)-+(n.id===e.selectedPlan));return l`<ul class="plain">
      ${o.map(n=>this.#d(n,n.id===e.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#n({type:"select-plan",planId:null})}>
        <span class="ms-row__lead">${y(j)}</span>
        <span class="ms-row__body"><strong>${a}</strong></span>
      </button></li>
    </ul>`}#m(){let e=this.state;return e.pendingAction==="save-plan"?this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):e.pendingAction==="run-plan"?this.#e("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):Y(e)?this.#e("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#e("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):tt(e)?null:this.#e("v4_reason_save_plan_map","Waiting for the map to be ready.")}#p(){let e=this.state.planDraft.enabled,a=this.#m();return l`
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
          aria-disabled=${a?"true":i}
          @click=${()=>{a||this.#n({type:"set-plan-enabled",enabled:!e})}}
        ></button>
      </div>
      ${a?l`<p class="reason" id="enabled-reason">${a}</p>`:i}
    `}#u(e,a,o,n={}){return l`<li class="run-row" ?data-break=${n.part!==void 0}>
      ${n.part===void 0?i:l`<span class="sr-only">${this.#e("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#s(n.part)})}</span>`}
      ${o===null?i:l`<span class="pos-badge" aria-hidden="true">${this.#s(o)}</span>`}
      <span class="row-lines">
        <bdi>${e}</bdi>
        <small>${a}</small>
        ${n.blocked?l`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:i}
      </span>
    </li>`}#g(){let e=this.state,a=e.planDraft,o=e.resources.plans.value,n=o?.plans.find(x=>x.id===a.id);if(!o||!n)return i;let r=n.nextRunPreview,d=r?.blocker??null,c=!a.enabled,m=!c&&!!(r&&!d&&/^[0-9a-f]{64}$/u.test(r.previewToken??"")),v=n.runBehavior==="ordered",p=m&&r?r.rooms:[],u=!c&&d?rt(e,n)?.jump.roomId??null:null,h=c||m||u||e.pendingAction==="save-plan"?null:d&&st[d]||ot,g=m?p.length:n.rooms.length,f=m?n.nextRunEstimateSeconds:null,_=f===null?"":this.#s(Math.max(1,Math.round(f/60))),b=f===null?g===1?this.#e("v4_plan_summary_rooms_one","1 room"):this.#e("v4_plan_summary_rooms","{count} rooms",{count:this.#s(g)}):g===1?this.#e("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:_}):this.#e("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#s(g),minutes:_}),S=m&&r?r.missionBoundaries:[],C=m?p.map((x,M)=>{let X=S.indexOf(M);return this.#u(x.name,N(this.#e,x),v?M+1:null,X<0?{}:{part:X+2})}):$e(n).rooms.map(x=>this.#u(o.rooms.find(M=>M.roomId===x.roomId)?.name??x.roomId,N(this.#e,x),null,{blocked:x.roomId===u})),w=a.finishCurrentRoom?this.#e("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#s(a.finishCurrentRoomThreshold)}):a.returnToBase?this.#e("v4_plan_summary_return","Returns to the dock when finished"):null;return l`
      <p class="summary">${b}</p>
      ${this.#i(ee(this.#e,e.locale,p))}
      <h3 class="heading">${c?this.#e("v4_plan_rooms_heading","Rooms in this plan"):e.resources.entry?.activePlan?this.#e("v4_next_run_after_active","After this run"):this.#e("v4_next_run_preview","Next run")}</h3>
      ${m&&!v?l`<p class="quiet">${this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}</p>`:i}
      ${S.length?l`<p class="quiet">${this.#e("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:this.#s(S.length+1)})}</p>`:i}
      ${h?l`<p class="problem">${this.#e(h.reasonKey,h.reason)}</p>
        <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"open-workflow",workflow:"plan"})}>${this.#e("v4_retry","Try again")}</button>`:i}
      ${m&&v?l`<ol class="run-list" role="list">${C}</ol>`:l`<ul class="run-list" role="list">${C}</ul>`}
      ${this.#p()}
      ${w?l`<p class="quiet">${w}</p>`:i}
      <div class="pin-setting">${Ie(this.#e,e,{kind:"plan",id:n.id},x=>this.#n(x))}</div>
    `}willUpdate(e){e.has("state")&&(this.state.workflow!=="plan"||this.state.planView!=="edit")&&(this._moved="");let a=e.get("state");a&&(a.expandedRoom!==this.state.expandedRoom||this.state.planView!=="edit"||this.state.dialog||this.#c())&&(this.#t.open=!1),a&&(a.planDraft.id!==this.state.planDraft.id||a.workflow!==this.state.workflow||this.state.planView!=="edit")&&this.#o.clear()}updated(e){!this.#a||!e.has("state")||(this.renderRoot.querySelector(`[data-move="${CSS.escape(this.#a)}"]`)?.focus(),this.#a=null)}#c(){return this.state.pendingAction==="save-plan"?"edit-held":null}#l(e){this.#c()||this.#n({type:"patch-plan-draft",patch:e})}#v(e,a){this.#l({rooms:this.state.planDraft.rooms.map((o,n)=>n===e?{...o,...a}:o)})}#_(e,a,o,n){let r=[...this.state.planDraft.rooms],d=e+a;if(this.#c()||d<0||d>=r.length)return;let[c]=r.splice(e,1);c&&(r.splice(d,0,c),this.#a=n,this._moved=this.#e("v4_room_moved","{room} moved to position {position}",{room:o,position:this.#s(d+1)}),this.#n({type:"patch-plan-draft",patch:{rooms:r}}))}#h(e){return{disabled:e?"true":i,described:e??i}}#b(e,a,o,n,r,d){let c=`${e.roomId}:${n<0?"up":"down"}`,m=n<0?this.#e("move_room_up","Move {room} earlier",{room:o}):this.#e("move_room_down","Move {room} later",{room:o}),v=n<0?this.#e("v4_room_already_first","{room} is already first",{room:o}):this.#e("v4_room_already_last","{room} is already last",{room:o}),p=r?`${c}-end`:d;return l`<button
        class="ms-btn ms-btn--icon"
        type="button"
        data-move=${c}
        aria-label=${m}
        title=${r?v:m}
        aria-disabled=${r||d?"true":i}
        aria-describedby=${p??i}
        @click=${()=>{r||this.#_(a,n,o,c)}}
      >${y(n<0?pt:ut)}</button>
      ${r?l`<span class="sr-only" id=${`${c}-end`}>${v}</span>`:i}`}#y(e,a,o,n,r,d,c){let m=this.state.planDraft,v=o!==null&&this.state.expandedRoom===e,p=m.rooms.length-1,u=this.#h(c),h=o===null&&d,g=o?Mt(this.#e,this.state.locale,o.cadence):null,f=o?.cadenceReasons?.some(b=>Ca.includes(b)),_=!!o?.cadence?.mopEveryN;return l`<li class="ms-row edit-row" data-selected=${o?"true":i}>
      <label class="edit-check"><input
        type="checkbox"
        .checked=${o!==null}
        aria-label=${this.#e("v4_room_include_named","Include {room}",{room:a})}
        aria-disabled=${c||h?"true":i}
        aria-describedby=${c??(h?"room-limit":i)}
        @click=${b=>{(c||h)&&b.preventDefault()}}
        @change=${()=>this.#n({type:"toggle-room",roomId:e})}
      ></label>
      ${o?l`<button
          class="edit-disclosure"
          type="button"
          data-room-disclosure=${e}
          aria-expanded=${String(v)}
          aria-label=${this.#e("v4_room_settings_named","Settings for {room}",{room:a})}
          aria-disabled=${u.disabled}
          aria-describedby=${u.described}
          @click=${()=>{c||this.#n({type:"set-plan-view",view:"edit",roomId:v?null:e})}}
        >
          ${r?l`<span class="pos-badge" aria-hidden="true">${this.#s(n+1)}</span>`:i}
          <span class="row-lines">
            <bdi>${a}</bdi>
            <small>${N(this.#e,o)}</small>
            ${g?l`<small>${g}</small>`:i}
            ${f?l`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:i}
          </span>
          ${y(L)}
        </button>`:l`<span class="edit-name"><bdi>${a}</bdi></span>`}
      ${o&&r?l`<span class="edit-moves">
        ${this.#b(o,n,a,-1,n===0,c)}
        ${this.#b(o,n,a,1,n===p,c)}
      </span>`:l`<span></span>`}
      ${v&&o?l`<div class="row-expanded">
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select
              aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:a})}
              aria-disabled=${u.disabled}
              aria-describedby=${[c,_?"mode-reason":null].filter(Boolean).join(" ")||i}
              .value=${o.cleaningMode}
              @change=${b=>{let S=b.currentTarget;c?S.value=o.cleaningMode:this.#v(n,{cleaningMode:S.value})}}
            >${te.map(b=>l`<option value=${b} ?selected=${b===o.cleaningMode} ?disabled=${_&&b!=="vacuum"}>${ae(this.#e,b)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select
              aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:a})}
              aria-disabled=${u.disabled}
              aria-describedby=${u.described}
              ?disabled=${o.cleaningMode==="mop"}
              .value=${o.coverageSetting}
              @change=${b=>{let S=b.currentTarget;c?S.value=o.coverageSetting:this.#v(n,{coverageSetting:S.value})}}
            >${K.map(b=>l`<option value=${b} ?selected=${b===o.coverageSetting}>${U(this.#e,b)}</option>`)}</select>
          </label>
        </div>
        ${_?l`<p class="sched-status sched-reason" id="mode-reason">${y(P)}<span>${this.#e("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</span></p>`:i}
        ${o.cleaningMode==="vacuum"?i:l`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
        ${Pt({t:this.#e,state:this.state,intent:b=>this.#n(b),held:c,offLevel:this.#o.get(e)??null,setOffLevel:b=>{b?this.#o.set(e,b):this.#o.delete(e),this.requestUpdate()},menu:this.#t},o,n,a)}
      </div>`:i}
    </li>`}#f(e,a,o,n,r,d){let c=[o?`${e}-hint`:"",r??""].filter(Boolean).join(" ");return l`<div class="switch-row">
      <span class="switch-copy">
        <span id=${`${e}-label`}>${a}</span>
        ${o?l`<small id=${`${e}-hint`}>${o}</small>`:i}
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(n)}
        aria-labelledby=${`${e}-label`}
        aria-describedby=${c||i}
        aria-disabled=${r?"true":i}
        @click=${()=>{r||d(!n)}}
      ></button>
    </div>`}#$(){let e=this.state,a=e.planDraft,o=e.resources.plans.value;if(!o)return i;let n=this.#c(),r=this.#h(n),d=a.runBehavior==="ordered",c=a.rooms.length>=100,m=g=>o.rooms.find(f=>f.roomId===g)?.name??g,v=[...a.rooms.map((g,f)=>({roomId:g.roomId,room:g,index:f})),...o.rooms.filter(g=>!a.rooms.some(f=>f.roomId===g.roomId)).map(g=>({roomId:g.roomId,room:null,index:-1}))],p=a.finishCurrentRoomThreshold,u=this.#s(p),h=(g,f)=>l`<button
      class="ms-btn"
      type="button"
      aria-pressed=${String(a.runBehavior===g)}
      aria-disabled=${r.disabled}
      aria-describedby=${r.described}
      @click=${()=>this.#l({runBehavior:g})}
    >${f}</button>`;return l`<div class="edit">
      ${n?l`<p class="reason" id="edit-held">${this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:i}
      <label class="field ms-field">${this.#e("plan_name","Plan name")}
        <input
          maxlength="128"
          autocomplete="off"
          ?readonly=${!!n}
          aria-disabled=${r.disabled}
          aria-describedby=${r.described}
          .value=${a.name}
          @input=${g=>this.#l({name:g.currentTarget.value})}
        >
      </label>
      <div class="order" role="group" aria-labelledby="order-label">
        <span id="order-label">${this.#e("plan_run_behavior","Cleaning order")}</span>
        <div class="ms-segment">
          ${h("intelligent",this.#e("plan_intelligent","Intelligent rotation"))}
          ${h("ordered",this.#e("plan_ordered","Saved order"))}
        </div>
        <p class="quiet">${d?this.#e("v4_plan_order_ordered_hint","Top to bottom, as listed"):this.#e("v4_plan_order_intelligent_hint","Longest-waiting rooms first")}</p>
      </div>
      <div class="list-header">
        <h3 class="heading" id="edit-rooms">${this.#e("v4_rooms_heading","Rooms")}</h3>
        <small>${this.#e("v4_plan_rooms_selected","{selected} of {total} selected",{selected:this.#s(a.rooms.length),total:this.#s(o.rooms.length)})}</small>
      </div>
      ${c?l`<p class="reason" id="room-limit">${this.#e("v4_plan_room_limit","Can't add more rooms until you remove one; a plan holds up to {limit}.",{limit:this.#s(100)})}</p>`:i}
      <ul class="plain" role="list" aria-labelledby="edit-rooms">
        ${Bt(v,g=>g.roomId,g=>this.#y(g.roomId,m(g.roomId),g.room,g.index,d,c,n))}
      </ul>
      <span class="sr-only" role="status">${this._moved}</span>
      <details class="run-end">
        <summary>${this.#e("v4_run_end_options","When a run ends")}</summary>
        ${this.#f("return-dock",this.#e("v4_plan_return_to_dock","Return to the dock when finished"),null,a.returnToBase,n,g=>this.#l({returnToBase:g}))}
        ${this.#f("finish-room",this.#e("v4_plan_finish_room","Finish the current room when you press Stop"),this.#e("v4_plan_finish_room_hint","Only if the room is at least {percent}% done; otherwise the robot stops right away.",{percent:u}),a.finishCurrentRoom,n,g=>this.#l({finishCurrentRoom:g}))}
        ${a.finishCurrentRoom?l`<div class="threshold">
          <span id="finish-threshold-label">${this.#e("v4_plan_finish_threshold","Finish if at least {percent}% done",{percent:u})}</span>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            aria-labelledby="finish-threshold-label"
            aria-valuetext=${`${u}%`}
            aria-disabled=${r.disabled}
            aria-describedby=${r.described}
            .value=${String(p)}
            @input=${g=>{let f=g.currentTarget;n?f.value=String(p):this.#l({finishCurrentRoomThreshold:Number(f.value)})}}
          >
        </div>`:i}
      </details>
    </div>`}render(){let{workflow:e,planView:a}=this.state;return e==="plans"?this.#r():e!=="plan"?i:a==="run"?this.#g():this.#$()}};customElements.get(V)||customElements.define(V,Fe);var jt=["mop_due","coverage_due"],Ne=(t,s)=>t.resources.plans.value?.rooms.find(e=>e.roomId===s)?.name??null,Ft=(t,s)=>s.flatMap(e=>{let a=Ne(t,e);return a===null?[]:[a]}),Ea=t=>Ft(t,t.selection.roomIds),Ta=(t,s)=>{let e=Ea(s);return e.length===0?null:t("v4_rooms_selected_names","{count} selected \xB7 {rooms}",{count:T(s.locale,e.length),rooms:ie(s.locale,e)})},Pa=(t,s)=>{let e=We(s)?.preview,a=Ft(s,e?e.rooms.map(n=>n.roomId):s.selection.roomIds);if(a.length===0)return"";let o=a.length<=3?ie(s.locale,a):ie(s.locale,[...a.slice(0,2),t("v4_rooms_more","{count} more",{count:T(s.locale,a.length-2)})]);return t("v4_clean_rooms_summary","{rooms}, then back to the dock",{rooms:o})},Ma=(t,s,e,a)=>{let o=Ne(e,a)??Ne(s,a);if(o===null)return null;if(!He(s))return Y(s)?t("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):t("v4_reason_clean_rooms_verification","Waiting for the map to be ready.");let n=s.selection.roomIds.includes(a),r=e.selection.roomIds.includes(a);return n===r?null:r?t("v4_room_added","{room} added",{room:o}):t("v4_room_removed","{room} removed",{room:o})},Ia=t=>t.currentTarget.value,Ke=class extends W{constructor(){super(...arguments);this.state=A();this._open=null;this.#a=(e,a,o)=>z(this.localize,e,a,o);this.#t=e=>{if(e.key!=="Escape"||this._open===null||_t(e)||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;let a=e.composedPath(),n=this.getRootNode().host.getRootNode().host;if(!a.includes(n))return;let r=c=>c instanceof HTMLElement&&c.getRootNode()!==this.renderRoot&&(c.getAttribute("role")==="menu"||c.getAttribute("role")==="dialog"||c.getAttribute("aria-expanded")==="true");if(a.some(r))return;e.preventDefault();let d=this._open==="settings"?'[data-disclosure="settings"]':`[data-room-disclosure="${CSS.escape(this._open)}"]`;this._open=null,this.updateComplete.then(()=>this.renderRoot.querySelector(d)?.focus())}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[H,D,q,B,I` :host{display:block;min-inline-size:0;}.stack{display:grid;gap:var(--ms-space-3);}.description{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-sm);line-height:var(--ms-lh-normal);}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;padding:0;border:0;clip-path:inset(50%);white-space:nowrap;}.list-header{display:flex;align-items:center;gap:var(--ms-space-2);min-block-size:var(--ms-control-sm);}.list-header h3{flex:1;margin:0;}.list-header small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs);}.limit{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}@media (any-pointer:coarse){.clear{min-block-size:var(--ms-control);min-inline-size:var(--ms-control);}}.settings-row{display:grid;padding:0;}.ms-disclosure{display:flex;gap:var(--ms-space-2);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-3);border:0;border-radius:var(--ms-radius-sm);color:inherit;background:transparent;font:inherit;font-size:var(--ms-t-md);font-weight:var(--ms-w-bold);text-align:start;cursor:pointer;}.ms-disclosure:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px;}.ms-disclosure>span:first-child{flex:1;}.ms-disclosure__value{overflow:hidden;color:var(--ms-text-quiet);font-weight:var(--ms-w-regular);font-size:var(--ms-t-sm);text-overflow:ellipsis;white-space:nowrap;}.ms-disclosure>.ms-icon{flex:none;transition:rotate var(--ms-fast) var(--ms-ease);}.ms-disclosure[aria-expanded="true"]>.ms-icon{rotate:90deg;}.ms-disclosure:dir(rtl)>.ms-icon{scale:-1 1;}.ms-disclosure[aria-expanded="true"]:dir(rtl)>.ms-icon{rotate:-90deg;}.settings-body,.row-expanded{display:grid;gap:var(--ms-space-3);padding:var(--ms-space-3);border-block-start:1px solid var(--ms-line);}.settings-body .ms-field,.row-expanded .ms-field{color:color-mix(in srgb,var(--ms-text-quiet) 70%,var(--ms-text));}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2);}@media (max-width:25rem){.split{grid-template-columns:1fr;}}.hint{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.switch-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control);}.switch-copy{display:grid;flex:1;gap:0.125rem;min-inline-size:0;font-size:var(--ms-t-md);}.switch-copy small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.check-lines{display:grid;gap:var(--ms-space-2);}.line{display:flex;gap:var(--ms-space-2);align-items:flex-start;margin:0;font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug);}.line .ms-icon{flex:none;inline-size:1.125rem;block-size:1.125rem;margin-block-start:0.0625rem;}.line[data-tone="warning"] .ms-icon{color:var(--ms-warning);}.line>span{flex:1;}.line .ms-btn{flex:none;}.room-list{display:grid;gap:var(--ms-space-2);}.room-row{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;padding:0;--ms-local:var(--ms-surface-card);}.room-row:has(.ms-check :checked){--ms-local:color-mix(in srgb,var(--ms-accent) 10%,var(--ms-surface-sunken));border-color:var(--ms-resolved-indicator,var(--ms-accent));}.ms-check{display:flex;gap:var(--ms-space-3);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-3);cursor:pointer;}.ms-check input{flex:none;inline-size:1.25rem;block-size:1.25rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent));cursor:pointer;}.ms-check input[aria-disabled="true"]{cursor:not-allowed;}.ms-check:has(input[aria-disabled="true"]) :is(bdi,small){color:var(--ms-text-disabled);}.row-lines{display:grid;flex:1;gap:0.125rem;min-inline-size:0;}.row-lines bdi{overflow:hidden;font-weight:var(--ms-w-bold);text-overflow:ellipsis;white-space:nowrap;}.row-lines small{color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local));font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.problem-line{display:flex;gap:var(--ms-space-1);align-items:flex-start;color:var(--ms-text);}.problem-line .ms-icon{flex:none;inline-size:1rem;block-size:1rem;color:var(--ms-warning);}.room-settings{margin-inline-end:var(--ms-space-1);}.row-expanded{grid-column:1 / -1;}@media (forced-colors:active){.room-row:has(.ms-check :checked){forced-color-adjust:none;color:HighlightText;background:Highlight;border-color:Highlight;}.room-row:has(.ms-check :checked) .row-lines small{color:HighlightText;}.room-row:has(.ms-check :checked) input,.room-row:has(.ms-check :checked) .room-settings{forced-color-adjust:auto;}.line .ms-icon,.problem-line .ms-icon{color:CanvasText;}}@media (prefers-reduced-motion:reduce){.ms-disclosure>.ms-icon{transition:none;}}`]}#a;#o(e){this.dispatchEvent(new CustomEvent(O,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this._open&&this._open!=="settings"&&!this.state.selection.roomIds.includes(this._open)&&(this._open=null)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.#t,!0)}disconnectedCallback(){window.removeEventListener("keydown",this.#t,!0),super.disconnectedCallback()}updated(e){e.has("_open")&&this._open!==null&&this.renderRoot.querySelector(".settings-body, .row-expanded")?.scrollIntoView({block:"nearest"})}#t;#e(e){this._open=this._open===e?null:e}#n(e,a,o){return n=>{if(e){n.currentTarget.value=a;return}o(Ia(n))}}#s(...e){let a=e.filter(o=>!!o);return a.length?a.join(" "):i}#i(e,a,o){let n=this.#a,r=this._open==="settings",d=e.selection.cleaningMode,c=e.selection.coverageSetting,v=e.selection.roomSettings.some(h=>e.selection.roomIds.includes(h.roomId)&&(h.cleaningMode!==d||h.coverageSetting!==c))?n("v4_settings_mixed","Different per room"):N(n,{cleaningMode:d,coverageSetting:c}),p=d==="mop",u=a!==null;return l`
      <div class="ms-row settings-row">
        <button
          class="ms-disclosure"
          type="button"
          data-disclosure="settings"
          aria-expanded=${String(r)}
          aria-controls="clean-settings"
          @click=${()=>this.#e("settings")}
        ><span>${n("v4_clean_settings","Cleaning settings")}</span><span class="ms-disclosure__value">${v}</span>${y(L)}</button>
        ${r?l`
          <div id="clean-settings" class="settings-body">
            <div class="split">
              <label class="ms-field">${n("v4_cleaning_system","Cleaning mode")}
                <select
                  class="ms-select"
                  aria-disabled=${u?"true":i}
                  aria-describedby=${this.#s(a)}
                  .value=${d}
                  @change=${this.#n(u,d,h=>this.#o({type:"set-clean-settings",cleaningMode:h}))}
                >${te.map(h=>l`<option value=${h} ?selected=${h===d}>${ae(n,h)}</option>`)}</select>
              </label>
              <label class="ms-field">${n("vacuum_coverage","Vacuum coverage")}
                <select
                  class="ms-select"
                  aria-disabled=${u||p?"true":i}
                  aria-describedby=${this.#s(p&&"clean-mop-hint",a)}
                  .value=${c}
                  @change=${this.#n(u||p,c,h=>this.#o({type:"set-clean-settings",coverageSetting:h}))}
                >${K.map(h=>l`<option value=${h} ?selected=${h===c}>${U(n,h)}</option>`)}</select>
              </label>
            </div>
            ${p?l`<p class="hint" id="clean-mop-hint">${n("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:i}
            ${o?l`
              <div class="switch-row">
                <span class="switch-copy">
                  <span id="due-label">${n("v4_include_due_schedule","Include scheduled work that's due")}</span>
                  <small id="due-hint">${n("v4_include_due_schedule_hint","Turn off to use only your settings. Skipped work stays due for the next clean.")}</small>
                </span>
                <button
                  class="ms-switch"
                  type="button"
                  role="switch"
                  aria-checked=${String(e.selection.useRoomSchedule)}
                  aria-labelledby="due-label"
                  aria-describedby=${this.#s("due-hint",a)}
                  aria-disabled=${u?"true":i}
                  @click=${()=>{u||this.#o({type:"set-use-room-schedule",value:!e.selection.useRoomSchedule})}}
                ></button>
              </div>
            `:i}
          </div>
        `:i}
      </div>
    `}#d(e,a,o,n){let r=this.#a,d=e.manualRoomPreview.status==="error",c=a?ee(r,e.locale,a):[],m=n===null?null:n==="invalid_cadence_policy"&&e.selection.useRoomSchedule&&e.selection.roomSettings.some(v=>v.cleaningMode!=="vacuum")?r("v4_room_preview_schedule_override",`The room schedule can't use the cleaning mode you chose. Turn off "Include scheduled work that's due", or choose another mode.`):r("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.");return!c.length&&!o&&!d&&!m?i:l`
      <div class="check-lines">
        ${c.map(v=>l`<p class="line" data-tone="due">${y(J)}<span>${v}</span></p>`)}
        ${o?l`<p class="line" data-tone="info">${y(J)}<span>${r("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:T(e.locale,o+1)})}</span></p>`:i}
        ${d?l`
          <p class="line" data-tone="warning">${y(P)}<span>${r("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</span>
            <button class="ms-btn ms-btn--sm ms-btn--secondary" type="button" @click=${()=>this.#o({type:"retry-room-preview"})}>${r("v4_retry","Try again")}</button>
          </p>
        `:i}
        ${m?l`<p class="line" data-tone="warning">${y(P)}<span>${m}</span></p>`:i}
      </div>
    `}#r(e,a,o,n,r,d){let c=this.#a,m=e.selection.roomIds.includes(a.roomId),v=e.selection.roomSettings.find(w=>w.roomId===a.roomId)??{roomId:a.roomId,cleaningMode:e.selection.cleaningMode,coverageSetting:e.selection.coverageSetting},p=r&&!m,u=n!==null,h=e.manualRoomPreview.status==="loading",g=d?.cadenceReasons??a.sharedCadenceReasons??a.sharedCadenceProgress?.reasons??[],f=m?xt(c,g):null,_=this._open===a.roomId,b=`room-settings-${o}`,S=`room-mop-hint-${o}`,C=v.cleaningMode==="mop";return l`
      <div class="ms-row room-row">
        <label class="ms-check">
          <input
            type="checkbox"
            .checked=${m}
            aria-disabled=${u||p?"true":i}
            aria-describedby=${this.#s(n??(p&&"rooms-limit"))}
            @click=${w=>{(u||p)&&w.preventDefault()}}
            @change=${()=>this.#o({type:"toggle-room",roomId:a.roomId})}
          >
          <span class="row-lines">
            <bdi>${a.name}</bdi>
            ${m?l`<small>${h?c("v4_room_preview_loading","Checking settings\u2026"):N(c,d??v)}</small>`:i}
            ${f?l`<small class="problem-line">${y(P)}<span>${f}</span></small>`:i}
          </span>
        </label>
        ${m?l`
          <button
            class="ms-btn ms-btn--icon room-settings"
            type="button"
            data-room-disclosure=${a.roomId}
            aria-label=${c("v4_room_settings_named","Settings for {room}",{room:a.name})}
            aria-expanded=${String(_)}
            aria-controls=${b}
            @click=${()=>this.#e(a.roomId)}
          >${y(_?ct:dt)}</button>
        `:i}
        ${_?l`
          <div class="row-expanded" id=${b}>
            <div class="split">
              <label class="ms-field">${c("v4_cleaning_system","Cleaning mode")}
                <select
                  class="ms-select"
                  aria-label=${c("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:a.name})}
                  aria-disabled=${u?"true":i}
                  aria-describedby=${this.#s(n)}
                  .value=${v.cleaningMode}
                  @change=${this.#n(u,v.cleaningMode,w=>this.#o({type:"patch-room-settings",roomId:a.roomId,cleaningMode:w}))}
                >${te.map(w=>l`<option value=${w} ?selected=${w===v.cleaningMode}>${ae(c,w)}</option>`)}</select>
              </label>
              <label class="ms-field">${c("vacuum_coverage","Vacuum coverage")}
                <select
                  class="ms-select"
                  aria-label=${c("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:a.name})}
                  aria-disabled=${u||C?"true":i}
                  aria-describedby=${this.#s(C&&S,n)}
                  .value=${v.coverageSetting}
                  @change=${this.#n(u||C,v.coverageSetting,w=>this.#o({type:"patch-room-settings",roomId:a.roomId,coverageSetting:w}))}
                >${K.map(w=>l`<option value=${w} ?selected=${w===v.coverageSetting}>${U(c,w)}</option>`)}</select>
              </label>
            </div>
            ${C?l`<p class="hint" id=${S}>${c("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:i}
          </div>
        `:i}
      </div>
    `}render(){let e=this.#a,a=this.state,o=a.resources.plans.value?.rooms??[],n=o.length===0,r=Y(a),d=!He(a),c=d?r?"rooms-description":"rooms-held":null,m=a.selection.roomIds.length,v=m>=100,p=We(a)?.preview??null,u=p?p.rooms.map(_=>({..._,name:Ne(a,_.roomId)??_.name})):null,h=_=>u?.find(b=>b.roomId===_)??null,g=(u??[]).some(_=>_.cadenceReasons.some(b=>jt.includes(b)))||o.some(_=>a.selection.roomIds.includes(_.roomId)&&(_.sharedCadenceProgress?.mopDue||_.sharedCadenceProgress?.coverageDue||(_.sharedCadenceReasons??_.sharedCadenceProgress?.reasons??[]).some(b=>jt.includes(b)))),f=r?e("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):n?e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here."):e("v4_choose_rooms_detail","Choose rooms on the map or in the list.");return l`
      <div class="stack">
        <p class="description" id="rooms-description">${f}</p>
        ${d&&!r?l`<span class="sr-only" id="rooms-held">${e("v4_reason_clean_rooms_verification","Waiting for the map to be ready.")}</span>`:i}
        ${n?i:l`
          <div class="list-header">
            <h3 class="ms-section-heading" id="rooms-heading">${e("v4_rooms_to_clean","Rooms to clean")}</h3>
            ${m?l`
              <small>${e("v4_rooms_selected","{count} selected",{count:T(a.locale,m)})}</small>
              <button
                class="ms-btn ms-btn--sm ms-btn--secondary clear"
                type="button"
                aria-disabled=${d?"true":i}
                aria-describedby=${this.#s(c)}
                @click=${()=>{d||this.#o({type:"clear-selection"})}}
              >${e("v4_clear","Clear")}</button>
            `:i}
          </div>
          ${v?l`<p class="limit" id="rooms-limit">${e("v4_room_limit_reached","Up to {limit} rooms fit in one clean, so remove one to add another.",{limit:100})}</p>`:i}
          ${this.#i(a,c,g)}
          ${this.#d(a,u,p?.missionBoundaries.length??0,p?.blocker??null)}
          <div class="room-list" role="group" aria-labelledby="rooms-heading">
            ${o.map((_,b)=>this.#r(a,_,b,c,v,h(_.roomId)))}
          </div>
        `}
      </div>
    `}};customElements.get(ge)||customElements.define(ge,Ke);var de=Math.round(.2*100),me=Math.round(2.5*100),ce=5,Ae=t=>Math.min(me,Math.max(de,Math.round(t*100))),za=(t,s)=>s>0?Math.min(me,Math.floor(t/ce)*ce+ce):Math.max(de,Math.ceil(t/ce)*ce-ce),Ue=class extends W{constructor(){super(...arguments);this.state=A()}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[H,D,q,B,Ce,I` :host{display:block;color:var(--ms-text);}.controls{display:grid;gap:var(--ms-space-2);padding:var(--ms-space-3);border:1px solid var(--ms-line);border-radius:var(--ms-radius-md);}.row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--ms-space-2);}.row>label{font-size:var(--ms-t-sm);font-weight:var(--ms-w-medium);}.hint{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;clip-path:inset(50%);white-space:nowrap;}`]}#a(e,a,o){return z(this.localize,e,a,o)}#o(e){this.dispatchEvent(new CustomEvent(O,{detail:e,bubbles:!0,composed:!0}))}#t(e){this.#o({type:"set-brush",value:e/100})}#e(e){let a=e.currentTarget,o=Ae(this.state.draw.brushMeters),n=Number(a.value.trim()),r=a.validity.badInput||a.value.trim()===""||!Number.isFinite(n)?o:Ae(n/100);a.value=String(r),r!==o&&this.#t(r)}#n(e){let a=e.currentTarget.valueAsNumber;Number.isFinite(a)&&this.#t(Ae(a/100))}render(){let e=Ae(this.state.draw.brushMeters),a=r=>new Intl.NumberFormat(this.state.locale,{style:"unit",unit:"centimeter",unitDisplay:"short"}).format(r),o=this.#a("brush_size","Brush width"),n=r=>{let d=r<0?e<=de?this.#a("v4_brush_min_reason","Can't make the brush narrower than {size}.",{size:a(de)}):null:e>=me?this.#a("v4_brush_max_reason","Can't make the brush wider than {size}.",{size:a(me)}):null,c=r<0?"brush-min":"brush-max";return l`<button
        class="ms-btn ms-btn--icon"
        type="button"
        aria-label=${r<0?this.#a("v4_stepper_decrease","Decrease {label}",{label:o}):this.#a("v4_stepper_increase","Increase {label}",{label:o})}
        aria-controls="brush"
        aria-disabled=${d?"true":i}
        aria-describedby=${d?c:i}
        title=${d??i}
        @click=${()=>{d||this.#t(za(e,r))}}
      >${y(r<0?ke:j)}${d?l`<span class="sr-only" id=${c}>${d}</span>`:i}</button>`};return l`
      <div class="controls" role="group" aria-label=${this.#a("v4_drawing_precision","Drawing precision")}>
        <div class="row">
          <label for="brush">${o}</label>
          <span class="ms-stepper">
            ${n(-1)}
            <input
              id="brush"
              type="number"
              inputmode="numeric"
              min=${de}
              max=${me}
              step="1"
              .value=${String(e)}
              @change=${this.#e}
              aria-label=${this.#a("v4_brush_width_cm","Brush width in centimeters")}
            />
            ${n(1)}
          </span>
        </div>
        <input
          class="ms-range"
          type="range"
          min=${de}
          max=${me}
          step="1"
          .value=${String(e)}
          @input=${this.#n}
          aria-label=${this.#a("v4_brush_width_slider","Brush width slider")}
          aria-valuetext=${a(e)}
        />
        <p class="hint">${this.#a("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
      </div>
    `}};customElements.get(ve)||customElements.define(ve,Ue);var La=(t,s,e)=>{let a=(v,p,u)=>z(e,v,p,u),o=se(s),n=s.cadenceResetRequest,r=s.resources.plans.value,d=n&&r?.rooms.find(v=>v.roomId===n.roomId)?.name||n?.roomId||"room",c=n?r?.plans.find(v=>v.id===n.planId)?.rooms.find(v=>v.roomId===n.roomId)?.cadence?.scope==="shared":!1,m=n?.mode??"mop";switch(t){case"confirmDeletePlan":return o&&{title:a("v4_delete_plan","Delete plan?"),detail:a("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:o.name}),...o.successor===void 0?{}:{consequence:o.successor===null?a("v4_delete_plan_none","You'll have no default plan."):a("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:o.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return o&&{title:a("v4_delete_area","Delete area?"),detail:a("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:o.name}),...o.successor===void 0?{}:{consequence:o.successor===null?a("v4_delete_area_none","No custom area will be selected."):a("v4_delete_area_selected","{area} becomes the selected custom area.",{area:o.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:m==="mop"?a("v4_reset_mop_cadence_title","Reset mopping progress?"):a("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:c?a("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}):a("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}),cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("v4_reset","Reset"),action:"reset-room-cadence"}}},Na=(t,s,e)=>{let a=t;if(!Ze(a.detail))return;if(Je(s,a.detail)){t.stopPropagation(),e(a.detail);return}if(a.detail?.type!=="open-dialog")return;let o=a.composedPath().find(n=>n instanceof HTMLElement&&n.hasAttribute("data-dialog-launcher"));return o instanceof HTMLElement?o:void 0},Aa=(t,s,e,a)=>{let o=t.cadenceResetRequest;e({type:"dismiss-top-layer"}),s!=="reset-room-cadence"?a(s):o&&a({id:s,planId:o.planId,roomId:o.roomId,mode:o.mode})},Wa=(t,s)=>{let e=t.cadenceResetRequest;return t.dialog!=="confirmResetCadence"||!e?null:s.querySelector(Z)?.shadowRoot?.querySelector(V)?.shadowRoot?.querySelector(`[data-room-disclosure="${CSS.escape(e.roomId)}"]`)??null};var Ge=class{constructor(s){this.menu=new G(s,".overflow-wrap",".overflow")}render({state:s,narrow:e,t:a,intent:o,diagnostics:n}){let r=(c,m,v)=>l`
      <button class="ms-row ms-row--menu" type="button" role="menuitemradio" aria-checked=${String(c)} data-selected=${c?"true":i} tabindex="-1" @click=${v}><span>${m}</span>${c?y(mt):i}</button>
    `,d=(c,m)=>r(s.quality===c,m,()=>o({type:"set-quality",quality:c}));return l`
      <div id="map-options" class="overflow-menu ms-surface ms-surface--overlay" role="menu" aria-label=${a("v4_map_options","Map options")}>
        ${e?l`
          <div role="group" aria-labelledby="menu-display">
            <p class="menu-heading" id="menu-display" role="presentation">${a("v4_map_display","Map display")}</p>
            ${xe(s)==="top"?l`
              ${r(s.appearance==="photo",a("map_style_photo","Photo"),()=>o({type:"set-appearance",appearance:"photo"}))}
              ${r(s.appearance==="rooms",a("v4_room_colours","Room colors"),()=>o({type:"set-appearance",appearance:"rooms"}))}
            `:i}
            <button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitemcheckbox"
              aria-checked=${String(s.labelsVisible)}
              tabindex="-1"
              @click=${()=>o({type:"toggle-labels"})}
            ><span>${a("v4_room_names","Room names")}</span><span class="ms-switch" aria-checked=${String(s.labelsVisible)} aria-hidden="true"></span></button>
          </div>
        `:i}
        <div role="group" aria-labelledby="menu-detail">
          <p class="menu-heading" id="menu-detail" role="presentation">${a("map_quality_label","Map detail")}</p>
          ${d("auto",a("map_quality_auto","Auto detail"))}
          ${d("efficient",a("map_quality_efficient","Efficient"))}
          ${d("balanced",a("map_quality_balanced","Balanced"))}
          ${d("maximum",a("map_quality_maximum","Maximum"))}
        </div>
        <button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!1),n()}}>${a("v4_map_diagnostics","Map diagnostics")}</button>
      </div>
    `}};var Ha=t=>l`
  <p id="zone-keyboard-help" class="sr-only">${t("v4_zone_keyboard_help","Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag.")}</p>
  <p id="keyboard-draw-help" class="sr-only">${t("v4_keyboard_draw_help","Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>
`,Da=({state:t,coarse:s,t:e,close:a})=>{let o=t.workflow==="draw",n=xe(t)==="top",r=e("v4_how_to_move","How to move the map"),d=s?[[e("v4_touch","Touch"),o?e("v4_touch_draw_help","Drag to paint \xB7 two fingers to move or zoom"):e("v4_touch_help","Drag to move the map \xB7 pinch to zoom \xB7 twist two fingers to rotate")]]:[[e("v4_trackpad","Trackpad"),e("v4_trackpad_help","Scroll to move the map \xB7 pinch to zoom \xB7 twist to rotate")],[e("v4_mouse","Mouse"),o?e("v4_mouse_draw_help","Drag to paint \xB7 right-drag or Space-drag to move \xB7 wheel to zoom"):n?e("v4_mouse_top_help","Drag to move the map \xB7 wheel to zoom"):e("v4_mouse_help","Drag to move the map \xB7 right-drag or Shift-drag to rotate \xB7 wheel to zoom")],[e("v4_keyboard","Keyboard"),o?t.draw.tool==="outline"?e("v4_zone_keyboard_help","Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag."):e("v4_keyboard_draw_help","Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase."):n?e("v4_keyboard_top_help","WASD or arrows to move \xB7 +/\u2212 to zoom \xB7 0 to fit"):e("v4_keyboard_help","WASD to move \xB7 Q/E or arrows to orbit \xB7 +/\u2212 to zoom \xB7 0 to fit")]];return l`
    <div id="navigation-help" class="navigation-help ms-surface ms-surface--floating" role="dialog" aria-modal="false" aria-label=${r}>
      <header>
        <h2>${r}</h2>
        <button class="ms-btn ms-btn--sm" type="button" @click=${a}>${e("v4_close","Close")}</button>
      </header>
      <dl>${d.map(([c,m])=>l`<dt>${c}</dt><dd>${m}</dd>`)}</dl>
    </div>
  `};var qa=(t,s)=>{let{tool:e}=s.draw;if(e==="pan")return null;let a=window.matchMedia("(any-pointer: coarse)").matches;return e==="outline"?a?t("v4_points_hint_touch","Tap to add points \xB7 two fingers to move the map"):t("v4_points_hint_pointer","Click to add points \xB7 right-drag to move the map"):a?t("v4_draw_hint_touch","Drag to paint \xB7 two fingers to move the map"):t("v4_draw_hint_pointer","Drag to paint \xB7 right-drag or Space-drag to move the map")},Kt=ne(V),Ut=ne(ge),Gt=ne(ve),fe=t=>t.currentTarget.value,Qe=class extends W{constructor(){super(...arguments);this.state=A();this.narrow=!1;this._historyPreviewPosition=null;this.#a=new ht(this,()=>import("./diagnostics-panel-MWXWNFCO.js"));this.#o="";this.#i=(e,a,o)=>this.#t(e,a,o)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0},narrow:{type:Boolean}}}static{this.styles=[H,D,q,B,I` :host{display:block;min-inline-size:0;container-type:inline-size;}.ms-row--danger{color:var(--ms-danger);}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;clip-path:inset(50%);white-space:nowrap;}button,select,input[type="checkbox"]{cursor:pointer;}.stack{display:grid;gap:var(--ms-space-3);}.subtle{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.loading,.empty,.problem,.notice{--ms-local:var(--ms-surface-sunken);padding:var(--ms-space-3);border-radius:var(--ms-radius-md);background:var(--ms-local);font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug);}.problem,.notice[data-tone="warning"]{--ms-local:color-mix(in srgb,var(--notice-tone) 12%,var(--ms-surface-card));border-inline-start:3px solid var(--notice-tone);color:var(--ms-text);}.problem{--notice-tone:var(--ms-danger);}.notice[data-tone="warning"]{--notice-tone:var(--ms-warning);}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2);}.list{display:grid;gap:var(--ms-space-2);}.group{display:grid;gap:var(--ms-space-2);}.floor[aria-current="true"]{border-color:var(--ms-resolved-indicator,var(--ms-accent));background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-local));}.problem p{margin:0;}@media (forced-colors:active){.floor[aria-current="true"]{forced-color-adjust:none;color:HighlightText;background:Highlight;border-color:Highlight;}}.toolbar{display:flex;flex-wrap:wrap;gap:var(--ms-space-2);}.checkbox{display:flex;align-items:center;gap:var(--ms-space-2);min-block-size:var(--ms-control);font-size:var(--ms-t-xs);font-weight:var(--ms-w-medium);}.checkbox input{inline-size:1.2rem;block-size:1.2rem;}.floor small,.snapshot small,.list-button small{margin-inline-start:auto;color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local));font-weight:var(--ms-w-regular);}.timeline{display:grid;gap:var(--ms-space-2);}.timeline-ends{display:flex;justify-content:space-between;margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}@media (max-width:25rem){.split{grid-template-columns:1fr;}}.area-row .ms-row__body{display:grid;gap:0.125rem;}.area-row bdi{overflow:hidden;min-inline-size:0;text-overflow:ellipsis;white-space:nowrap;}.area-row small{color:var(--ms-text-quiet);}.area-row .ms-row__trail:dir(rtl) .ms-icon{scale:-1 1;}.lines{display:grid;gap:0.125rem;color:var(--ms-text);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.line{display:flex;gap:var(--ms-space-1);align-items:flex-start;}.line .ms-icon{flex:none;inline-size:1rem;block-size:1rem;color:var(--ms-warning);}.empty-card{display:grid;gap:var(--ms-space-2);padding:var(--ms-space-4);border:1px solid var(--ms-line);border-radius:var(--ms-radius-md);}.empty-card h3{margin:0;font-size:var(--ms-t-md);}.empty-card p{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-md);line-height:var(--ms-lh-normal);}.empty-card .ms-btn{justify-self:start;}.switch-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control);}.switch-copy{display:grid;flex:1;gap:0.125rem;min-inline-size:0;font-size:var(--ms-t-md);}.switch-copy small,.reason{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}`]}#a;#o;willUpdate(e){if(!e.has("state"))return;let{workflow:a,selection:o}=this.state,n=`${a}:${o.floorId}:${o.historyId??"live"}`;n!==this.#o&&(this.#o=n,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#t(e,a,o){return z(this.localize,e,a,o)}#e(){let e=at(this.state);return e?this.#t(e.reasonKey,e.reason):null}#n(e){return ae(this.#i,e)}#s(e){return U(this.#i,e)}#i;#d(e){return e==="vacuum"?i:l`<p class="subtle">${this.#t("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#r(e){this.dispatchEvent(new CustomEvent(O,{detail:e,bubbles:!0,composed:!0}))}#m(e){switch(e){case"rooms":case"plans":case"plan":return{loading:this.#t("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#t("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#t("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"areas":case"draw":case"areaReview":return{loading:this.#t("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#t("v4_areas_unavailable","Home Assistant couldn't load your saved areas."),empty:""};case"history":return{loading:this.#t("v4_loading_history","Loading map history\u2026"),unavailable:this.#t("v4_history_unavailable","Map history is unavailable right now."),empty:this.#t("v4_no_map_history","No saved map snapshots yet.")}}}#p({status:e,value:a},o,n){let r=this.#m(n);return a===null&&(e==="idle"||e==="loading")?l`<div class="loading" role="status">${r.loading}</div>`:e==="error"?l`
        <div class="stack">
          <div class="problem" role="alert">${r.unavailable}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:n})}>${this.#t("v4_retry","Try again")}</button>
          </div>
        </div>
      `:e==="empty"?l`<div class="empty">${r.empty}</div>`:o}#u(){return this.#p(this.state.resources.plans,re`<${Ut}
      .state=${this.state}
      .localize=${this.localize}
    ></${Ut}>`,"rooms")}#g(){let e=this.state.workflow==="plans"?"plans":"plan";return this.#p(this.state.resources.plans,re`<${Kt}
      .state=${this.state}
      .localize=${this.localize}
    ></${Kt}>`,e)}#c(){let e=this.narrow?null:qa(this.#i,this.state);return l`
      <div class="stack">
        ${e?l`<p class="subtle draw-hint">${e}</p>`:i}
        ${this.state.precisionOpen&&!this.narrow?re`<${Gt} .state=${this.state} .localize=${this.localize}></${Gt}>`:i}
      </div>
    `}#l(){let{status:e,value:a}=this.state.resources.areas,o=this.#m("areas");if(a===null&&(e==="idle"||e==="loading"))return l`<div class="loading" role="status">${o.loading}</div>`;let n=this.#e(),r=n?"areas-held-reason":i,d=n?"true":i,c=u=>()=>{n||this.#r(u)},m=this.#t("area_new","New area"),v=e==="error"?l`
      <div class="problem" role="alert">${o.unavailable}</div>
      <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"areas"})}>${this.#t("v4_retry","Try again")}</button></div>
    `:i,p=a?.areas??[];return p.length?l`<div class="stack">
      ${v}
      <p class="subtle">${this.#t("v4_choose_area_detail","Tap an area to clean it or change it.")}</p>
      <div class="list" role="list">
        ${p.map(u=>{let h=u.canRebind||u.status==="review",g=!h&&u.status!=="current";return l`<div role="listitem"><button
            class="ms-row ms-row--card area-row"
            type="button"
            data-area-row=${u.id}
            aria-disabled=${d}
            aria-describedby=${r}
            @click=${c({type:"select-area",areaId:u.id,workflow:"areaReview"})}
          >
            <span class="ms-row__body">
              <strong><bdi>${u.name}</bdi></strong>
              <small>${N(this.#i,u)}</small>
              ${h||g?l`<span class="lines"><span class="line" data-tone="warning">${y(P)}<span>${h?this.#t("v4_area_row_check","Map changed \xB7 Check it before cleaning"):this.#t("v4_area_row_redraw","Redraw it before cleaning")}</span></span></span>`:i}
            </span>
            <span class="ms-row__trail">${y(L)}</span>
          </button></div>`})}
        <div role="listitem"><button class="ms-row ms-row--card" type="button" data-area-new aria-disabled=${d} aria-describedby=${r} @click=${c({type:"open-workflow",workflow:"draw"})}>
          <span class="ms-row__lead">${y(j)}</span>
          <span class="ms-row__body"><strong>${m}</strong></span>
        </button></div>
      </div>
      ${n?l`<p class="sr-only" id="areas-held-reason">${n}</p>`:i}
    </div>`:l`<div class="stack">
        ${v}
        ${a===null&&e==="error"?i:l`<div class="empty-card">
          <h3>${this.#t("v4_no_areas","No custom areas yet")}</h3>
          <p>${this.#t("v4_no_areas_hint","Draw an area on the map to clean just that spot.")}</p>
          <button class="ms-btn ms-btn--primary" type="button" data-area-new aria-disabled=${d} aria-describedby=${r} @click=${c({type:"open-workflow",workflow:"draw"})}>${m}</button>
        </div>`}
        ${n?l`<p class="sr-only" id="areas-held-reason">${n}</p>`:i}
      </div>`}#v(){let e=this.state.areaDraft,a=this.state.resources.areas,o=e.canRebind||e.status==="review",n=!o&&(e.status==="stale"||e.status==="unknown"),r=this.#e(),d=r?"review-held-reason":i,c=r?"true":i,m=Y(this.state),v=se(this.state,"confirmDeleteArea")!==void 0;return l`
      <div class="stack">
        ${o?l`<div class="notice" data-tone="warning" role="status">${this.#t("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:i}
        ${n?l`<div class="problem" role="alert">${this.#t("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:i}
        ${a.status==="error"?l`
          <div class="stack">
            <div class="problem" role="alert">${this.#m("areaReview").unavailable}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"areaReview"})}>${this.#t("v4_retry","Try again")}</button></div>
          </div>
        `:i}
        <label class="field ms-field">${this.#t("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} ?readonly=${!!r} aria-disabled=${c} aria-describedby=${d} @input=${p=>{r||this.#r({type:"patch-area-draft",patch:{name:fe(p)}})}}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#t("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} aria-disabled=${c} aria-describedby=${d} @change=${p=>{if(r){p.currentTarget.value=e.cleaningMode;return}this.#r({type:"patch-area-draft",patch:{cleaningMode:fe(p)}})}}>${te.map(p=>l`<option value=${p} ?selected=${p===e.cleaningMode}>${this.#n(p)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#t("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} aria-disabled=${c} aria-describedby=${d} @change=${p=>{if(r){p.currentTarget.value=e.coverageSetting;return}this.#r({type:"patch-area-draft",patch:{coverageSetting:fe(p)}})}}>${K.map(p=>l`<option value=${p} ?selected=${p===e.coverageSetting}>${this.#s(p)}</option>`)}</select>
          </label>
        </div>
        ${this.#d(e.cleaningMode)}
        ${m?l`
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" data-redraw aria-disabled=${c} aria-describedby=${d} @click=${()=>{r||this.#r({type:"open-workflow",workflow:"draw"})}}>${this.#t("v4_edit_outline","Redraw")}</button>
          </div>
        `:i}
        ${r?l`<p class="sr-only" id="review-held-reason">${r}</p>`:i}
        ${e.id===null?i:Ie(this.#i,this.state,{kind:"area",id:e.id},p=>this.#r(p))}
        ${v?l`
          <button
            class="list-button ms-row ms-row--danger"
            type="button"
            data-dialog-launcher="confirmDeleteArea"
            aria-disabled=${c}
            aria-describedby=${d}
            @click=${()=>{r||this.#r({type:"open-dialog",dialog:"confirmDeleteArea"})}}
          >${this.#t("area_delete","Delete")}</button>
        `:i}
      </div>
    `}#_(){let e=this.state.resources.history,a=e.value,o=a?.floors.find(_=>_.id===this.state.selection.floorId)||a?.floors.find(_=>_.active)||a?.floors[0],n=o?.snapshots||[],r=this.state.selection.historyId?Math.max(0,n.findIndex(_=>_.id===this.state.selection.historyId)):n.length,d=this.#t("map_timeline_live_action","Live"),c=!!o?.active,m=c?n.length:n.length-1,v=Math.min(this._historyPreviewPosition??r,m),p=n[v],u=this.#e(),h=u?"true":i,g=u?"history-held-reason":i,f=this.state.dataMode==="live"&&this.state.floor.readOnly;return this.#p(e,l`
      <div class="stack">
        ${f?l`<p class="subtle">${this.#t("v4_reason_live_map_required","Can't edit until you show the live map.")}</p>`:i}
        ${(a?.floors.length||0)>1?l`
          <div class="group">
            <h3 class="ms-section-heading" id="floors-heading">${this.#t("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(a?.floors||[]).map((_,b)=>l`
              <button
                class="floor ms-row"
                type="button"
                aria-current=${String(_.id===o?.id)}
                aria-disabled=${h}
                aria-describedby=${g}
                @click=${()=>{u||this.#r({type:"set-floor",floorId:_.id})}}
              >
                <span>${_.label||(_.active?this.#t("v4_current_floor","Current floor"):this.#t("v4_saved_floor","Saved floor {number}",{number:_.ordinal??b}))}</span>
                <small>${_.active?d:this.#t("v4_saved_map","Saved map")}</small>
              </button>
            `)}
            </div>
          </div>
        `:i}
        <div class="timeline">
          ${n.length>=3?l`
            <label class="field ms-field">${this.#t("map_timeline_label","Map timeline")}
              <input
                type="range"
                class="ms-range"
                min="0"
                max=${String(m)}
                step="1"
                .value=${String(v)}
                aria-valuetext=${p?qe(p.createdAt,this.dates):d}
                aria-disabled=${h}
                aria-describedby=${g}
                @input=${_=>{if(u){_.currentTarget.value=String(r);return}this._historyPreviewPosition=Number(fe(_))}}
                @change=${_=>{if(u){_.currentTarget.value=String(r);return}let b=Number(fe(_));this._historyPreviewPosition=null,this.#r({type:"set-history",historyId:b===n.length?null:n[b]?.id||null})}}
              >
            </label>
            <p class="timeline-ends" aria-hidden="true"><span>${this.#t("map_timeline_oldest","Oldest")}</span><span>${c?d:this.#t("map_timeline_newest","Newest")}</span></p>
          `:i}
          <div class="list">
            ${n.map((_,b)=>l`
              <button class="snapshot ms-row" type="button" aria-current=${String(_.id===this.state.selection.historyId)} aria-disabled=${h} aria-describedby=${g} @click=${()=>{u||this.#r({type:"set-history",historyId:_.id})}}>
                <span>${qe(_.createdAt,this.dates)}</span><small>${this.#t("v4_history_position","{position} of {count}",{position:b+1,count:n.length})}</small>
              </button>
            `)}
          </div>
        </div>
        ${u?l`<p class="sr-only" id="history-held-reason">${u}</p>`:i}
      </div>
    `,"history")}#h(){return this.#a.request(),this.#a.status!=="ready"?gt(this.#a.status,this.localize,this.retry):l`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}render(){switch(this.state.workflow){case"rooms":return this.#u();case"plans":case"plan":return this.#g();case"areas":return this.#l();case"draw":return this.#c();case"areaReview":return this.#v();case"history":return this.#_();case"support":return this.#h();case"none":return i}}};customElements.get(Z)||customElements.define(Z,Qe);export{Ge as MapOptions,Qe as MaticMapWorkflowV4,je as actionReason,Aa as confirmDialog,La as dialogCopy,Na as dialogLauncher,Wa as dialogReturnTarget,ga as drawCancel,Lt as drawExit,qa as drawHint,Ha as drawRecipes,ba as focusPlanTarget,B as formControls,xa as homeShortcuts,ha as planCancel,ua as planTitle,va as planTools,Da as renderMapHelp,Ma as roomTapAnnouncement,Ta as roomsGripLine,Pa as roomsSummary,Xt as shellWorkflowStyles};
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
