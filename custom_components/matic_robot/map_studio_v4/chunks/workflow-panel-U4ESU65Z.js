import{a as O,b as At}from"./chunk-JQ7RVYX7.js";import{E as st,H as ot,I as nt,Q as H,S as T,T as _e,U as at,V as rt,a as ae,b as re,d as Me,e as G,f as ie,g as D,h as le}from"./chunk-CCVKGSKD.js";import{A as Je,B as et,C as tt,N as ce,P as q,R as w,a as L,b as A,c as W,f as ve,i as Q,j as Xe,k as Ze,y as Ye,z as he}from"./chunk-JEY7GUXQ.js";import{$ as ge,E as je,F as Fe,G as Ke,H as Ue,J as ne,K as Te,R as P,T as i,W as Ge,X as l,Y as Qe,Z as N,_ as I,aa as Pe,c as J,e as Re,f as Ce,j as De,k as Oe,n as z,p as Ee,q as Ve,t as ee,z as Be}from"./chunk-6FC35FD6.js";var be=1,de=100,it=(t,n,e)=>{if(n)return e;let s=t.trim();if(s==="")return null;let o=Number(s);return Number.isFinite(o)?Math.min(de,Math.max(be,Math.round(o))):e},lt=(t,n)=>t===null?n>0?be:null:t+n<be?null:Math.min(de,t+n),ct=P`
.ms-stepper { --ms-local: var(--ms-surface-card); display: inline-grid; flex: none; grid-template-columns: var(--ms-control) minmax(3rem, 4.5rem) var(--ms-control); gap: var(--ms-space-1); align-items: center; border: 1px solid var(--ms-line-strong); border-radius: var(--ms-radius-sm); background: var(--ms-local); }
.ms-stepper--readonly { grid-template-columns: minmax(3rem, 4.5rem); }
.ms-stepper .ms-btn { border-radius: calc(var(--ms-radius-sm) - 1px); }
.ms-stepper input { inline-size: 100%; min-inline-size: 0; min-block-size: var(--ms-control); margin: 0; padding: 0; border: 0; border-radius: var(--ms-radius-xs); color: var(--ms-text); background: transparent; font: inherit; font-size: var(--ms-t-md); font-weight: var(--ms-w-medium); font-variant-numeric: tabular-nums; text-align: center; appearance: textfield; -moz-appearance: textfield; }
.ms-stepper input::-webkit-inner-spin-button, .ms-stepper input::-webkit-outer-spin-button { margin: 0; appearance: none; -webkit-appearance: none; }
.ms-stepper input::placeholder { color: var(--ms-text-quiet); font-weight: var(--ms-w-medium); opacity: 1; }
.ms-stepper input:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: -2px; }
.ms-stepper input[readonly] { color: var(--ms-text-quiet); }
@media (forced-colors: active) { .ms-stepper { border: 1px solid CanvasText; } }
`,dt=t=>{let{id:n,t:e,value:s}=t,o=t.heldBy!==null,a=i`<input
    id=${n}
    type="number"
    inputmode="numeric"
    min="1"
    max=${de}
    step="1"
    placeholder=${e("v4_cadence_off","Off")}
    aria-labelledby=${t.labelId}
    aria-describedby=${t.describedBy??l}
    aria-disabled=${o&&!t.readonly?"true":l}
    ?readonly=${t.readonly||o}
    .value=${s===null?"":String(s)}
    @change=${d=>{let c=d.currentTarget,m=t.readonly||o?s:it(c.value,c.validity.badInput,s);c.value=m===null?"":String(m),m!==s&&t.commit(m)}}
  >`;if(t.readonly)return i`<span class="ms-stepper ms-stepper--readonly">${a}</span>`;let r=d=>{let m=(d<0?s===null:s===de)?d<0?e("v4_cadence_stepper_off_reason","This schedule is already off."):e("v4_cadence_stepper_max_reason","Every 100 cleans is the longest schedule."):null,u=`${n}-${d<0?"min":"max"}`,p=d<0?e("v4_stepper_decrease","Decrease {label}",{label:t.label}):e("v4_stepper_increase","Increase {label}",{label:t.label});return i`<button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${p}
      aria-controls=${n}
      aria-disabled=${m||o?"true":l}
      aria-describedby=${[m?u:null,t.heldBy].filter(Boolean).join(" ")||l}
      title=${m??l}
      @click=${()=>{!m&&!o&&t.commit(lt(s,d))}}
    >${w(d<0?Je:he)}${m?i`<span class="sr-only" id=${u}>${m}</span>`:l}</button>`};return i`<span class="ms-stepper">${r(-1)}${a}${r(1)}</span>`};var X=["vacuum","mop","vacuum_and_mop"],B=["quick","standard","heavy_duty"],Z=(t,n)=>n==="vacuum"?t("vacuum","Vacuum"):n==="mop"?t("mop","Mop"):t("vacuum_and_mop","Vacuum + mop"),j=(t,n)=>n==="quick"?t("quick","Quick"):n==="standard"?t("standard","Optimal"):t("heavy_duty","Heavy duty"),ut=t=>t("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."),pt=(t,n)=>{if(n.includes("coverage_requires_vacuum"))return ut(t);if(n.includes("identity_changed")||n.includes("room_not_on_current_map"))return t("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(n.includes("shared_schedule_unavailable"))return t("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(n.includes("mop_progress_unverified")||n.includes("coverage_progress_unverified")){let e=[];return n.includes("mop_progress_unverified")&&e.push(t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),n.includes("coverage_progress_unverified")&&e.push(t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),e.join(" ")}return n.includes("invalid_cadence_policy")?t("v4_cadence_policy_invalid","The room schedule needs review before it can be applied."):null},Wt={scope:"shared",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1},$e=t=>!!(t&&(t.mopEveryN!==null||t.coverageEveryN!==null)),qt={quick:(t,n,e)=>n===null?t("v4_cadence_coverage_quick_off","Quick vacuum"):e?t("v4_cadence_coverage_quick_one","Quick vacuum every clean"):t("v4_cadence_coverage_quick","Quick vacuum every {count} cleans",{count:n}),standard:(t,n,e)=>n===null?t("v4_cadence_coverage_optimal_off","Optimal vacuum"):e?t("v4_cadence_coverage_optimal_one","Optimal vacuum every clean"):t("v4_cadence_coverage_optimal","Optimal vacuum every {count} cleans",{count:n}),heavy_duty:(t,n,e)=>n===null?t("v4_cadence_coverage_heavy_off","Heavy duty vacuum"):e?t("v4_cadence_coverage_heavy_one","Heavy duty vacuum every clean"):t("v4_cadence_coverage_heavy","Heavy duty vacuum every {count} cleans",{count:n})},Ht={quick:(t,n)=>n?t("v4_cadence_next_mop_quick","Mop and quick vacuum on the next clean"):t("v4_cadence_next_quick","Quick vacuum on the next clean"),standard:(t,n)=>n?t("v4_cadence_next_mop_optimal","Mop and optimal vacuum on the next clean"):t("v4_cadence_next_optimal","Optimal vacuum on the next clean"),heavy_duty:(t,n)=>n?t("v4_cadence_next_mop_heavy","Mop and heavy duty vacuum on the next clean"):t("v4_cadence_next_heavy","Heavy duty vacuum on the next clean")},Dt=(t,n,e)=>e===null?t("v4_cadence_mop_off","Mop"):e===1?t("v4_cadence_mop_interval_one","Mop every clean"):t("v4_cadence_mop_interval","Mop every {count} cleans",{count:T(n,e)}),Ot=(t,n,e,s)=>qt[e](t,s===null?null:T(n,s),s===1),Vt=["identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy"],me=({room:t,saved:n,catalogRoom:e})=>{let s=t.cadence??Wt,o=e?.sharedCadence,a=o===void 0&&(e?.sharedCadenceReasons?.length??0)>0,r=o!==void 0||a,d=n?.cadence?.scope==="shared",c=o!==void 0&&!d&&t.cadence?.scope==="shared";return{policy:s,shared:o,sharedExists:r,participating:d,joinPending:c,progress:c?e?.sharedCadenceProgress:t.cadenceProgress,reasons:c?e?.sharedCadenceReasons??[]:t.cadenceReasons??[],savedPolicy:n?.cadence,savedProgress:n?.cadenceProgress,sharedFits:!o||(o.mopEveryN===null||t.cleaningMode==="vacuum")&&(o.coverageEveryN===null||t.cleaningMode!=="mop"),sharedBroken:a}},V={mop:{every:"mopEveryN",flag:"doMopNext",next:"nextMopIn",count:"mopProgress"},coverage:{every:"coverageEveryN",flag:"doCoverageNext",next:"nextCoverageIn",count:"coverageProgress"}},vt=(t,n)=>!!(t.joinPending?t.shared:t.savedPolicy)?.[V[n].flag],Ie=t=>!t.joinPending&&t.savedPolicy!==void 0&&t.savedPolicy.scope!==t.policy.scope,ht=(t,n)=>{let{every:e,flag:s,next:o,count:a}=V[n],r=t.policy[e];if(!t.progress||r===null)return null;if(!(!t.joinPending&&(Ie(t)||r!==(t.savedPolicy?.[e]??null)||t.policy[s]!==vt(t,n))))return t.progress[o];let c=Ie(t)?0:t.progress[a];return t.policy[s]||c>=r-1?1:r-c},Bt=(t,n)=>{let e=V[n].every,s=t.savedPolicy?.[e]??null;return!t.joinPending&&s!==null&&t.policy[e]!==null&&t.policy[e]!==s},we=(t,n)=>{let e=t.policy[V[n].every];return e!==null&&e>1&&(vt(t,n)||ht(t,n)!==1)},gt=({room:t},n)=>({mop:!n.reasons.includes("mop_progress_unverified")&&t.cleaningMode!=="vacuum"&&n.policy.mopEveryN===null,coverage:!n.reasons.includes("coverage_progress_unverified")&&t.cleaningMode==="mop"}),mt=(t,n,e,s)=>{let o=e.policy[V[s].every],a=ht(e,s);return o===null?t("v4_cadence_status_off","Not scheduled"):o===1?t("v4_cadence_status_every","Due every clean"):e.policy[V[s].flag]||a===1?t("v4_cadence_status_next","Due next clean"):Bt(e,s)?t("v4_cadence_status_edited","Keeps the progress so far"):Ie(e)||a===null?null:t("v4_cadence_status_in","Due in {count} cleans",{count:T(n,a)})},jt=(t,n,e)=>{let{policy:s,participating:o}=n,a=$e(s);if(n.joinPending)return t("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");if(o&&s.scope==="plan")return t("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule.");if(!o&&s.scope==="shared"&&a)return t("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero.");let r=["mop","coverage"].some(d=>s[V[d].every]!==null&&(n.savedProgress?.[V[d].count]??0)>0);return s.scope==="plan"&&a&&!$e(n.savedPolicy)&&!r?t("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):n.savedPolicy&&(s.mopEveryN!==n.savedPolicy.mopEveryN||s.coverageEveryN!==n.savedPolicy.coverageEveryN)?t("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."):o?t("v4_cadence_shared_edit_effect","Changes apply to every plan that uses {room}'s shared schedule.",{room:e}):null},Ft=(t,n,e)=>{let s=me(e),{policy:o,reasons:a}=s,{room:r,saved:d,name:c}=e,m=o.coverageEveryN!==null,u=(m?null:e.offLevel)??o.periodicCoverageSetting??"heavy_duty",p=M=>a.includes(M),v=p("mop_progress_unverified"),{mop:g,coverage:h}=gt(e,s),b=p("coverage_progress_unverified"),f=!b&&r.cleaningMode==="mop"&&m,_=Ke(a.filter(M=>Vt.includes(M)),c),x=o.doMopNext||o.doCoverageNext,C=x?o.doMopNext:we(s,"mop"),$=x?o.doCoverageNext:we(s,"coverage"),R=(M,U,se)=>d!==void 0&&((M??0)>0||!!U||!!d.cadenceReasons?.includes(se));return{policy:o,level:u,mop:{every:o.mopEveryN,label:Dt(t,n,o.mopEveryN),status:mt(t,n,s,"mop"),reason:v?t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):g?t("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum."):null,blocked:g,unverified:v},coverage:{every:o.coverageEveryN,label:Ot(t,n,u,o.coverageEveryN),status:mt(t,n,s,"coverage"),reason:b?t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):f?ut(t):h?t("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming."):null,blocked:h,unverified:b},legacyCoverage:f,roomReason:_?t(_.reasonKey,_.reason,_.reasonPlaceholders):null,sharedHint:s.shared!==void 0&&s.sharedFits&&!s.participating&&o.scope==="shared"&&!$e(o),joinPending:s.joinPending,participating:s.participating,next:C||$?{label:$?Ht[u](t,C):t("v4_cadence_next_mop","Mop on the next clean"),on:x,mop:C,coverage:$,blocked:C&&g?"mop":$&&h?"coverage":null}:null,explanation:jt(t,s,c),scope:o.scope,resettable:{mop:R(d?.cadenceProgress?.mopProgress,d?.cadence?.doMopNext,"mop_progress_unverified"),coverage:R(d?.cadenceProgress?.coverageProgress,d?.cadence?.doCoverageNext,"coverage_progress_unverified")},sharedReason:ze(s)?s.sharedBroken?t("v4_cadence_shared_broken_reason","Can't count across all plans until you fix this room's shared schedule in a plan that uses it."):t("v4_cadence_shared_mode_reason","Can't count across all plans until this room's cleaning mode works with its shared schedule."):null}},_t=t=>t.shared&&t.sharedFits&&!t.participating?{...t.shared,scope:"shared"}:null,ze=t=>t.sharedExists&&(!t.sharedFits||t.sharedBroken)&&!t.participating,bt=(t,n,e)=>{let s=me(t),{policy:o}=s;if(s.joinPending)return null;if(e!==null&&!$e(o)&&o.scope==="shared"){let r=_t(s);if(r)return r;if(ze(s))return bt({...t,room:{...t.room,cadence:{...o,scope:"plan"}}},n,e)}let a=e!==null&&e>1;return n==="mop"?{...o,mopEveryN:e,doMopNext:a&&o.doMopNext}:e===null?{...o,coverageEveryN:null,doCoverageNext:!1}:o.coverageEveryN===null?{...o,coverageEveryN:e,periodicCoverageSetting:t.offLevel??o.periodicCoverageSetting??"heavy_duty"}:{...o,coverageEveryN:e,doCoverageNext:a&&o.doCoverageNext}},Kt=(t,n)=>{let e=me(t);return e.joinPending||e.policy.coverageEveryN===null?null:{...e.policy,periodicCoverageSetting:n}},Ut=(t,n)=>{let e=me(t);if(e.joinPending)return null;let s=we(e,"mop"),o=we(e,"coverage");if(!s&&!o&&!e.policy.doMopNext&&!e.policy.doCoverageNext)return null;let a=gt(t,e);return n&&(s&&a.mop||o&&a.coverage)?null:n?{...e.policy,doMopNext:s,doCoverageNext:o}:{...e.policy,doMopNext:!1,doCoverageNext:!1}},Gt=(t,n)=>{let e=me(t);return n==="shared"&&ze(e)?null:(n==="shared"?_t(e):null)??{...e.policy,scope:n}},Qt=t=>({...t,scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1}),Xt=(t,n)=>n.planDraft.dirty?t("v4_reason_reset_unsaved","Can't reset until you save or cancel your changes."):n.command!=="idle"||n.managedLock||n.activity!=="idle"&&n.activity!=="docked"||n.dataMode!=="live"?t("v4_reason_reset_busy","Can't reset until the robot is idle and the map is live."):null,Zt=(t,n,e,s)=>{let o=t.resources.plans.value,a=t.planDraft.id;return{room:n,saved:a?o?.plans.find(r=>r.id===a)?.rooms.find(r=>r.roomId===n.roomId):void 0,catalogRoom:o?.rooms.find(r=>r.roomId===n.roomId),name:e,offLevel:s}},ye="\0",fe=(t,n)=>{let[e,...s]=t.split(ye);return s.length?i`${e}<bdi>${n}</bdi>${s.join(n)}`:t},ft=(t,n,e,s)=>{let{t:o,state:a,held:r}=t,d=a.planDraft,c=Zt(a,n,s,t.offLevel),m=Ft(o,a.locale,{...c,name:ye}),u=(y,k,E="small")=>E==="p"?i`<p class="sched-status sched-reason" id=${y??l}>${w(q)}<span>${k}</span></p>`:i`<small class="sched-status sched-reason" id=${y??l}>${w(q)}<span>${k}</span></small>`,{policy:p,next:v}=m,g=y=>{if(!y||r)return;let k=d.rooms.map((E,S)=>S===e?{...E,cadence:y}:E);t.intent({type:"patch-plan-draft",patch:{rooms:k}})},h={disabled:r?"true":l,described:r??l},b=(...y)=>y.filter(Boolean).join(" ")||null,f=(y,k)=>k.reason?u(y,k.reason):k.status?i`<small class="sched-status" id=${y}>${k.status}</small>`:l,_=Xt(o,a),x=!!(r||_),C=(y,k,E,S=null)=>i`<button
    class=${k}
    type="button"
    role=${S??l}
    tabindex=${S?"-1":l}
    aria-label=${y==="mop"?o("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:s}):o("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:s})}
    aria-disabled=${x?"true":l}
    aria-describedby=${r??(_?E:null)??l}
    @click=${()=>{x||!d.id||(t.menu.close(!1),t.intent({type:"request-room-cadence-reset",planId:d.id,roomId:n.roomId,mode:y}))}}
  >${y==="mop"?o("v4_reset_mop_cadence_button","Reset mopping"):o("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`,$=o("v4_room_more_named","More for {room}",{room:s}),{menu:R}=t,M=d.id&&(m.resettable.mop||m.resettable.coverage)?i`<div class="room-more" @keydown=${R.keydown} @focusout=${R.focusout}>
    <button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${$}
      title=${$}
      aria-haspopup="menu"
      aria-expanded=${String(R.open)}
      aria-disabled=${h.disabled}
      aria-describedby=${h.described}
      @click=${()=>{r||R.toggle()}}
    >${w(ve)}</button>
    ${R.open&&!r?i`<div class="menu ms-surface ms-surface--overlay" @mousedown=${y=>y.preventDefault()}>
      <div role="menu" aria-label=${$}>
        ${m.resettable.mop?C("mop","ms-row ms-row--menu","reset-reason","menuitem"):l}
        ${m.resettable.coverage?C("coverage","ms-row ms-row--menu","reset-reason","menuitem"):l}
      </div>
      ${_?i`<div class="reason">${u("reset-reason",_,"p")}</div>`:l}
    </div>`:l}
  </div>`:l,U=(y,k,E)=>{let S=`sched-${y}`,oe=k.reason||k.status?`${S}-status`:null;return i`<div class="sched-row">
      <label class="sched-label" id=${`${S}-label`} for=${S}>${k.label}</label>
      <div class="sched-controls">
        ${E}
        ${dt({id:S,labelId:`${S}-label`,label:k.label,value:k.every,describedBy:b(oe,r),heldBy:r??(k.blocked?oe:null),readonly:m.joinPending,t:o,commit:pe=>g(bt(c,y,pe))})}
      </div>
      ${f(`${S}-status`,k)}
      ${k.unverified&&d.id?i`${C(y,"ms-btn ms-btn--secondary",`${S}-reset-reason`)}
        ${_?u(`${S}-reset-reason`,_,"p"):l}`:l}
    </div>`},se=r??(m.coverage.blocked?"sched-coverage-status":null),Lt=m.joinPending?l:i`<select
    class="ms-select sched-level"
    aria-label=${o("v4_cadence_level_named","Vacuum level for {room}",{room:s})}
    aria-disabled=${se?"true":l}
    aria-describedby=${se??l}
    .value=${m.level}
    @change=${y=>{let k=y.currentTarget;if(se){k.value=m.level;return}let E=k.value,S=Kt(c,E);t.setOffLevel(S?null:E),S&&g(S)}}
  >${B.map(y=>i`<option value=${y} ?selected=${y===m.level}>${j(o,y)}</option>`)}</select>`;return i`<section class="schedule" role="group" aria-label=${o("v4_room_cadence_named","Room schedule for {room}",{room:s})}>
    <div class="schedule-head"><h3>${o("v4_room_schedule","Schedule")}</h3>${M}</div>
    ${m.roomReason?u(null,fe(m.roomReason,s),"p"):l}
    ${m.sharedHint?i`<p class="schedule-note">${fe(o("v4_cadence_shared_available","{room} has a shared schedule, and turning on a row uses it.",{room:ye}),s)}</p>`:l}
    ${U("mop",m.mop,l)}
    ${U("coverage",m.coverage,Lt)}
    ${m.legacyCoverage?i`<button
      type="button"
      class="ms-btn ms-btn--secondary sched-off"
      aria-label=${o("v4_cadence_turn_off_named","Turn off the vacuum rotation in {room}",{room:s})}
      aria-disabled=${h.disabled}
      aria-describedby=${h.described}
      @click=${()=>g(Qt(p))}
    >${o("v4_cadence_clear_room_coverage","Turn off")}</button>`:l}
    ${v?i`<div class="switch-row">
      <span class="switch-copy">
        <span id="sched-next-label">${v.label}</span>
        <small id="sched-next-hint">${o("v4_cadence_next_hint","Brings it forward once; the schedule then continues as usual.")}</small>
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(v.on)}
        aria-labelledby="sched-next-label"
        aria-describedby=${b("sched-next-hint",r??(m.joinPending?"sched-join":v.blocked?`sched-${v.blocked}-status`:null))??l}
        aria-disabled=${r||m.joinPending||v.blocked?"true":l}
        @click=${()=>{v.blocked||g(Ut(c,!v.on))}}
      ></button>
    </div>`:l}
    ${m.joinPending?i`<p class="schedule-note" id="sched-join">${fe(o("v4_cadence_join_pending",`Uses {room}'s shared schedule; change it after you save, or choose "In this plan only" under Advanced.`,{room:ye}),s)}</p>`:l}
    ${m.explanation?i`<p class="schedule-note">${fe(m.explanation,s)}</p>`:l}
    <details class="advanced">
      <summary>${o("v4_advanced","Advanced")}${w(Q)}</summary>
      <fieldset class="scope">
        <legend>${o("v4_cadence_scope","Count cleans")}</legend>
        ${[["shared",o("v4_cadence_shared","Across all plans (recommended)")],["plan",o("v4_cadence_this_plan","In this plan only")]].map(([y,k])=>{let E=r??(y==="shared"&&m.sharedReason?"sched-scope-reason":null);return i`<label class="scope-row"><input
            type="radio"
            name="sched-scope"
            value=${y}
            .checked=${m.scope===y}
            aria-disabled=${E?"true":l}
            aria-describedby=${E??l}
            @change=${S=>{let oe=E?null:Gt(c,y);oe?g(oe):S.currentTarget.closest("fieldset")?.querySelectorAll("input").forEach(pe=>{pe.checked=pe.value===m.scope})}}
          ><span>${k}</span></label>`})}
        ${m.sharedReason?u("sched-scope-reason",m.sharedReason,"p"):l}
      </fieldset>
      <p class="schedule-note">${o("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
    </details>
  </section>`},Y=(t,n)=>n.cleaningMode==="mop"?t("v4_room_setting_mop","Mop"):n.cleaningMode==="vacuum"?n.coverageSetting==="quick"?t("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):t("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):n.coverageSetting==="quick"?t("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):t("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),Yt={mop:(t,n)=>t("v4_room_schedules_mop","Mop every {mop} cleans",{mop:n}),mop_one:t=>t("v4_room_schedules_mop_one","Mop every clean"),quick:(t,n,e)=>t("v4_room_schedules_quick","Quick vacuum every {cov} cleans",{cov:e}),quick_one:t=>t("v4_room_schedules_quick_one","Quick vacuum every clean"),optimal:(t,n,e)=>t("v4_room_schedules_optimal","Optimal vacuum every {cov} cleans",{cov:e}),optimal_one:t=>t("v4_room_schedules_optimal_one","Optimal vacuum every clean"),heavy:(t,n,e)=>t("v4_room_schedules_heavy","Heavy duty vacuum every {cov} cleans",{cov:e}),heavy_one:t=>t("v4_room_schedules_heavy_one","Heavy duty vacuum every clean"),mop_quick:(t,n,e)=>t("v4_room_schedules_mop_quick","Mop every {mop} cleans \xB7 Quick vacuum every {cov} cleans",{mop:n,cov:e}),mop_quick_one_mop:(t,n,e)=>t("v4_room_schedules_mop_quick_one_mop","Mop every clean \xB7 Quick vacuum every {cov} cleans",{cov:e}),mop_quick_one_cov:(t,n)=>t("v4_room_schedules_mop_quick_one_cov","Mop every {mop} cleans \xB7 Quick vacuum every clean",{mop:n}),mop_quick_one_both:t=>t("v4_room_schedules_mop_quick_one_both","Mop every clean \xB7 Quick vacuum every clean"),mop_optimal:(t,n,e)=>t("v4_room_schedules_mop_optimal","Mop every {mop} cleans \xB7 Optimal vacuum every {cov} cleans",{mop:n,cov:e}),mop_optimal_one_mop:(t,n,e)=>t("v4_room_schedules_mop_optimal_one_mop","Mop every clean \xB7 Optimal vacuum every {cov} cleans",{cov:e}),mop_optimal_one_cov:(t,n)=>t("v4_room_schedules_mop_optimal_one_cov","Mop every {mop} cleans \xB7 Optimal vacuum every clean",{mop:n}),mop_optimal_one_both:t=>t("v4_room_schedules_mop_optimal_one_both","Mop every clean \xB7 Optimal vacuum every clean"),mop_heavy:(t,n,e)=>t("v4_room_schedules_mop_heavy","Mop every {mop} cleans \xB7 Heavy duty vacuum every {cov} cleans",{mop:n,cov:e}),mop_heavy_one_mop:(t,n,e)=>t("v4_room_schedules_mop_heavy_one_mop","Mop every clean \xB7 Heavy duty vacuum every {cov} cleans",{cov:e}),mop_heavy_one_cov:(t,n)=>t("v4_room_schedules_mop_heavy_one_cov","Mop every {mop} cleans \xB7 Heavy duty vacuum every clean",{mop:n}),mop_heavy_one_both:t=>t("v4_room_schedules_mop_heavy_one_both","Mop every clean \xB7 Heavy duty vacuum every clean")},yt=(t,n,e)=>{let s=e?.mopEveryN??null,o=e?.coverageEveryN??null;if(s===null&&o===null)return null;let a=e?.periodicCoverageSetting,r=a==="quick"?"quick":a==="heavy_duty"?"heavy":"optimal",d=s===null?`${r}${o===1?"_one":""}`:o===null?`mop${s===1?"_one":""}`:`mop_${r}${s===1&&o===1?"_one_both":s===1?"_one_mop":o===1?"_one_cov":""}`,c=Yt[d];return c?c(t,s===null?"":T(n,s),o===null?"":T(n,o)):null};var $t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},wt=t=>(...n)=>({_$litDirective$:t,values:n}),ke=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,e,s){this._$Ct=n,this._$AM=e,this._$Ci=s}_$AS(n,e){return this.update(n,e)}update(n,e){return this.render(...e)}};var{I:Jt}=Qe,kt=t=>t;var xt=()=>document.createComment(""),te=(t,n,e)=>{let s=t._$AA.parentNode,o=n===void 0?t._$AB:n._$AA;if(e===void 0){let a=s.insertBefore(xt(),o),r=s.insertBefore(xt(),o);e=new Jt(a,r,t,t.options)}else{let a=e._$AB.nextSibling,r=e._$AM,d=r!==t;if(d){let c;e._$AQ?.(t),e._$AM=t,e._$AP!==void 0&&(c=t._$AU)!==r._$AU&&e._$AP(c)}if(a!==o||d){let c=e._$AA;for(;c!==a;){let m=kt(c).nextSibling;kt(s).insertBefore(c,o),c=m}}}return e},F=(t,n,e=t)=>(t._$AI(n,e),t),es={},St=(t,n=es)=>t._$AH=n,Rt=t=>t._$AH,xe=t=>{t._$AR(),t._$AA.remove()};var Ct=(t,n,e)=>{let s=new Map;for(let o=n;o<=e;o++)s.set(t[o],o);return s},Et=wt(class extends ke{constructor(t){if(super(t),t.type!==$t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,n,e){let s;e===void 0?e=n:n!==void 0&&(s=n);let o=[],a=[],r=0;for(let d of t)o[r]=s?s(d,r):r,a[r]=e(d,r),r++;return{values:a,keys:o}}render(t,n,e){return this.dt(t,n,e).values}update(t,[n,e,s]){let o=Rt(t),{values:a,keys:r}=this.dt(n,e,s);if(!Array.isArray(o))return this.ut=r,a;let d=this.ut??=[],c=[],m,u,p=0,v=o.length-1,g=0,h=a.length-1;for(;p<=v&&g<=h;)if(o[p]===null)p++;else if(o[v]===null)v--;else if(d[p]===r[g])c[g]=F(o[p],a[g]),p++,g++;else if(d[v]===r[h])c[h]=F(o[v],a[h]),v--,h--;else if(d[p]===r[h])c[h]=F(o[p],a[h]),te(t,c[h+1],o[p]),p++,h--;else if(d[v]===r[g])c[g]=F(o[v],a[g]),te(t,o[p],o[v]),v--,g++;else if(m===void 0&&(m=Ct(r,g,h),u=Ct(d,p,v)),m.has(d[p]))if(m.has(d[v])){let b=u.get(r[g]),f=b!==void 0?o[b]:null;if(f===null){let _=te(t,o[p]);F(_,a[g]),c[g]=_}else c[g]=F(f,a[g]),te(t,o[p],f),o[b]=null;g++}else xe(o[v]),v--;else xe(o[p]),p++;for(;g<=h;){let b=te(t,c[h+1]);F(b,a[g]),c[g++]=b}for(;p<=v;){let b=o[p++];b!==null&&xe(b)}return this.ut=r,St(t,c),Ge}});var K=class{constructor(n,e,s){this.host=n;this.root=e;this.launcher=s;this.open=!1;this.#s=!1;this.keydown=n=>{if(!this.open)return;if(n.key==="Escape"){n.preventDefault(),this.close(!0);return}let e=[...this.host.renderRoot.querySelectorAll(`${this.root} [role^=menuitem]`)],s=e.indexOf(n.composedPath()[0]),o=n.key==="ArrowDown"?s+1:n.key==="ArrowUp"?s-1:n.key==="Home"?0:n.key==="End"?e.length-1:null;o===null||s<0||!e.length||(n.preventDefault(),e[(o+e.length)%e.length]?.focus())};this.focusout=n=>{let e=n.relatedTarget;e&&!n.currentTarget.contains(e)&&this.#o(!1)};this.#t=n=>{let e=this.host.renderRoot.querySelector(this.root);this.open&&e&&!n.composedPath().includes(e)&&this.#o(!1)};n.addController(this)}hostConnected(){window.addEventListener("pointerdown",this.#t,!0)}hostDisconnected(){window.removeEventListener("pointerdown",this.#t,!0)}hostUpdated(){this.#s&&(this.#s=!1,this.host.renderRoot.querySelector(`${this.root} [role^=menuitem]`)?.focus())}#s;#o(n){n!==this.open&&(this.open=n,this.#s=n,this.host.requestUpdate())}toggle(){this.#o(!this.open)}close(n){this.#o(!1),n&&this.host.renderRoot.querySelector(`${this.root} ${this.launcher}`)?.focus()}#t};var ts=["mop_progress_unverified","coverage_progress_unverified","identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy","coverage_requires_vacuum"],Ne=class extends N{constructor(){super(...arguments);this._moved="";this.#s=null;this.#o=new Map;this.#t=new K(this,".room-more","> button");this.state=z();this.#e=(e,s,o)=>I(this.localize,e,s,o)}static{this.styles=[L,A,W,O,ct,P`
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
`]}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_moved:{state:!0}}}#s;#o;#t;#e;#a(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#n(e){return T(this.state.locale,e)}#l(e){return e.length?i`<span class="lines">${e.map(s=>i`<span class="line">${w(ce)}<span>${s}</span></span>`)}</span>`:l}#r(e,s){let o=at(this.#e,this.state.locale,e),a=rt(this.#e,this.state.locale,e),r=a===null?l:"blocked"in a?i`<span class="lines"><span class="line" data-tone="warning">${w(q)}<span>${a.blocked}</span></span></span>`:this.#l(a.due),d=this.#e("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return i`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${e.id}
        aria-describedby=${s?"default-hint":l}
        @click=${()=>this.#a({type:"select-plan",planId:e.id})}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${e.name}</bdi>${s?i`<span class="ms-chip chip-default" title=${d}>${this.#e("v4_plan_default","Default")}</span>`:l}${e.enabled?l:i`<span class="ms-chip">${this.#e("v4_paused","Paused")}</span>`}</strong>
          <small>${o}</small>
          ${r}
        </span>
        <span class="ms-row__trail">${w(Q)}</span>
      </button>
      ${s?i`<span class="sr-only" id="default-hint">${d}</span>`:l}
    </li>`}#c(){let e=this.state.resources.plans.value,s=this.#e("v4_create_plan","Create a plan");if(!e?.plans.length)return i`<div class="empty-card">
        <h3>${this.#e("v4_no_plans","No plans yet")}</h3>
        <p>${this.#e("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#a({type:"select-plan",planId:null})}>${s}</button>
      </div>`;let o=[...e.plans].sort((a,r)=>+(r.id===e.selectedPlan)-+(a.id===e.selectedPlan));return i`<ul class="plain">
      ${o.map(a=>this.#r(a,a.id===e.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#a({type:"select-plan",planId:null})}>
        <span class="ms-row__lead">${w(he)}</span>
        <span class="ms-row__body"><strong>${s}</strong></span>
      </button></li>
    </ul>`}#d(){let e=this.state;return e.pendingAction==="save-plan"?this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):e.pendingAction==="run-plan"?this.#e("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):ne(e)?this.#e("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#e("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):Be(e)?null:this.#e("v4_reason_save_plan_map","Waiting for the map to be ready.")}#h(){let e=this.state.planDraft.enabled,s=this.#d();return i`
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
          @click=${()=>{s||this.#a({type:"set-plan-enabled",enabled:!e})}}
        ></button>
      </div>
      ${s?i`<p class="reason" id="enabled-reason">${s}</p>`:l}
    `}#p(e,s,o,a={}){return i`<li class="run-row" ?data-break=${a.part!==void 0}>
      ${a.part===void 0?l:i`<span class="sr-only">${this.#e("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#n(a.part)})}</span>`}
      ${o===null?l:i`<span class="pos-badge" aria-hidden="true">${this.#n(o)}</span>`}
      <span class="row-lines">
        <bdi>${e}</bdi>
        <small>${s}</small>
        ${a.blocked?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
      </span>
    </li>`}#g(){let e=this.state,s=e.planDraft,o=e.resources.plans.value,a=o?.plans.find(R=>R.id===s.id);if(!o||!a)return l;let r=a.nextRunPreview,d=r?.blocker??null,c=!s.enabled,m=!c&&!!(r&&!d&&/^[0-9a-f]{64}$/u.test(r.previewToken??"")),u=a.runBehavior==="ordered",p=m&&r?r.rooms:[],v=!c&&d?Ue(e,a)?.jump.roomId??null:null,g=c||m||v||e.pendingAction==="save-plan"?null:d&&Fe[d]||je,h=m?p.length:a.rooms.length,b=m?a.nextRunEstimateSeconds:null,f=b===null?"":this.#n(Math.max(1,Math.round(b/60))),_=b===null?h===1?this.#e("v4_plan_summary_rooms_one","1 room"):this.#e("v4_plan_summary_rooms","{count} rooms",{count:this.#n(h)}):h===1?this.#e("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:f}):this.#e("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#n(h),minutes:f}),x=m&&r?r.missionBoundaries:[],C=m?p.map((R,M)=>{let U=x.indexOf(M);return this.#p(R.name,Y(this.#e,R),u?M+1:null,U<0?{}:{part:U+2})}):Ve(a).rooms.map(R=>this.#p(o.rooms.find(M=>M.roomId===R.roomId)?.name??R.roomId,Y(this.#e,R),null,{blocked:R.roomId===v})),$=s.finishCurrentRoom?this.#e("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#n(s.finishCurrentRoomThreshold)}):s.returnToBase?this.#e("v4_plan_summary_return","Returns to the dock when finished"):null;return i`
      <p class="summary">${_}</p>
      ${this.#l(_e(this.#e,e.locale,p))}
      <h3 class="heading">${c?this.#e("v4_plan_rooms_heading","Rooms in this plan"):e.resources.entry?.activePlan?this.#e("v4_next_run_after_active","After this run"):this.#e("v4_next_run_preview","Next run")}</h3>
      ${m&&!u?i`<p class="quiet">${this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}</p>`:l}
      ${x.length?i`<p class="quiet">${this.#e("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:this.#n(x.length+1)})}</p>`:l}
      ${g?i`<p class="problem">${this.#e(g.reasonKey,g.reason)}</p>
        <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#a({type:"open-workflow",workflow:"plan"})}>${this.#e("v4_retry","Try again")}</button>`:l}
      ${m&&u?i`<ol class="run-list" role="list">${C}</ol>`:i`<ul class="run-list" role="list">${C}</ul>`}
      ${this.#h()}
      ${$?i`<p class="quiet">${$}</p>`:l}
    `}willUpdate(e){e.has("state")&&(this.state.workflow!=="plan"||this.state.planView!=="edit")&&(this._moved="");let s=e.get("state");s&&(s.expandedRoom!==this.state.expandedRoom||this.state.planView!=="edit"||this.state.dialog||this.#m())&&(this.#t.open=!1),s&&(s.planDraft.id!==this.state.planDraft.id||s.workflow!==this.state.workflow||this.state.planView!=="edit")&&this.#o.clear()}updated(e){!this.#s||!e.has("state")||(this.renderRoot.querySelector(`[data-move="${CSS.escape(this.#s)}"]`)?.focus(),this.#s=null)}#m(){return this.state.pendingAction==="save-plan"?"edit-held":null}#i(e){this.#m()||this.#a({type:"patch-plan-draft",patch:e})}#v(e,s){this.#i({rooms:this.state.planDraft.rooms.map((o,a)=>a===e?{...o,...s}:o)})}#u(e,s,o,a){let r=[...this.state.planDraft.rooms],d=e+s;if(this.#m()||d<0||d>=r.length)return;let[c]=r.splice(e,1);c&&(r.splice(d,0,c),this.#s=a,this._moved=this.#e("v4_room_moved","{room} moved to position {position}",{room:o,position:this.#n(d+1)}),this.#a({type:"patch-plan-draft",patch:{rooms:r}}))}#_(e){return{disabled:e?"true":l,described:e??l}}#b(e,s,o,a,r,d){let c=`${e.roomId}:${a<0?"up":"down"}`,m=a<0?this.#e("move_room_up","Move {room} earlier",{room:o}):this.#e("move_room_down","Move {room} later",{room:o}),u=a<0?this.#e("v4_room_already_first","{room} is already first",{room:o}):this.#e("v4_room_already_last","{room} is already last",{room:o}),p=r?`${c}-end`:d;return i`<button
        class="ms-btn ms-btn--icon"
        type="button"
        data-move=${c}
        aria-label=${m}
        title=${r?u:m}
        aria-disabled=${r||d?"true":l}
        aria-describedby=${p??l}
        @click=${()=>{r||this.#u(s,a,o,c)}}
      >${w(a<0?et:tt)}</button>
      ${r?i`<span class="sr-only" id=${`${c}-end`}>${u}</span>`:l}`}#y(e,s,o,a,r,d,c){let m=this.state.planDraft,u=o!==null&&this.state.expandedRoom===e,p=m.rooms.length-1,v=this.#_(c),g=o===null&&d,h=o?yt(this.#e,this.state.locale,o.cadence):null,b=o?.cadenceReasons?.some(_=>ts.includes(_)),f=!!o?.cadence?.mopEveryN;return i`<li class="ms-row edit-row" data-selected=${o?"true":l}>
      <label class="edit-check"><input
        type="checkbox"
        .checked=${o!==null}
        aria-label=${this.#e("v4_room_include_named","Include {room}",{room:s})}
        aria-disabled=${c||g?"true":l}
        aria-describedby=${c??(g?"room-limit":l)}
        @click=${_=>{(c||g)&&_.preventDefault()}}
        @change=${()=>this.#a({type:"toggle-room",roomId:e})}
      ></label>
      ${o?i`<button
          class="edit-disclosure"
          type="button"
          data-room-disclosure=${e}
          aria-expanded=${String(u)}
          aria-label=${this.#e("v4_room_settings_named","Settings for {room}",{room:s})}
          aria-disabled=${v.disabled}
          aria-describedby=${v.described}
          @click=${()=>{c||this.#a({type:"set-plan-view",view:"edit",roomId:u?null:e})}}
        >
          ${r?i`<span class="pos-badge" aria-hidden="true">${this.#n(a+1)}</span>`:l}
          <span class="row-lines">
            <bdi>${s}</bdi>
            <small>${Y(this.#e,o)}</small>
            ${h?i`<small>${h}</small>`:l}
            ${b?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
          </span>
          ${w(Q)}
        </button>`:i`<span class="edit-name"><bdi>${s}</bdi></span>`}
      ${o&&r?i`<span class="edit-moves">
        ${this.#b(o,a,s,-1,a===0,c)}
        ${this.#b(o,a,s,1,a===p,c)}
      </span>`:i`<span></span>`}
      ${u&&o?i`<div class="row-expanded">
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select
              aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:s})}
              aria-disabled=${v.disabled}
              aria-describedby=${[c,f?"mode-reason":null].filter(Boolean).join(" ")||l}
              .value=${o.cleaningMode}
              @change=${_=>{let x=_.currentTarget;c?x.value=o.cleaningMode:this.#v(a,{cleaningMode:x.value})}}
            >${X.map(_=>i`<option value=${_} ?selected=${_===o.cleaningMode} ?disabled=${f&&_!=="vacuum"}>${Z(this.#e,_)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select
              aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:s})}
              aria-disabled=${v.disabled}
              aria-describedby=${v.described}
              ?disabled=${o.cleaningMode==="mop"}
              .value=${o.coverageSetting}
              @change=${_=>{let x=_.currentTarget;c?x.value=o.coverageSetting:this.#v(a,{coverageSetting:x.value})}}
            >${B.map(_=>i`<option value=${_} ?selected=${_===o.coverageSetting}>${j(this.#e,_)}</option>`)}</select>
          </label>
        </div>
        ${f?i`<p class="sched-status sched-reason" id="mode-reason">${w(q)}<span>${this.#e("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</span></p>`:l}
        ${o.cleaningMode==="vacuum"?l:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
        ${ft({t:this.#e,state:this.state,intent:_=>this.#a(_),held:c,offLevel:this.#o.get(e)??null,setOffLevel:_=>{_?this.#o.set(e,_):this.#o.delete(e),this.requestUpdate()},menu:this.#t},o,a,s)}
      </div>`:l}
    </li>`}#f(e,s,o,a,r,d){let c=[o?`${e}-hint`:"",r??""].filter(Boolean).join(" ");return i`<div class="switch-row">
      <span class="switch-copy">
        <span id=${`${e}-label`}>${s}</span>
        ${o?i`<small id=${`${e}-hint`}>${o}</small>`:l}
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(a)}
        aria-labelledby=${`${e}-label`}
        aria-describedby=${c||l}
        aria-disabled=${r?"true":l}
        @click=${()=>{r||d(!a)}}
      ></button>
    </div>`}#$(){let e=this.state,s=e.planDraft,o=e.resources.plans.value;if(!o)return l;let a=this.#m(),r=this.#_(a),d=s.runBehavior==="ordered",c=s.rooms.length>=100,m=h=>o.rooms.find(b=>b.roomId===h)?.name??h,u=[...s.rooms.map((h,b)=>({roomId:h.roomId,room:h,index:b})),...o.rooms.filter(h=>!s.rooms.some(b=>b.roomId===h.roomId)).map(h=>({roomId:h.roomId,room:null,index:-1}))],p=s.finishCurrentRoomThreshold,v=this.#n(p),g=(h,b)=>i`<button
      class="ms-btn"
      type="button"
      aria-pressed=${String(s.runBehavior===h)}
      aria-disabled=${r.disabled}
      aria-describedby=${r.described}
      @click=${()=>this.#i({runBehavior:h})}
    >${b}</button>`;return i`<div class="edit">
      ${a?i`<p class="reason" id="edit-held">${this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:l}
      <label class="field ms-field">${this.#e("plan_name","Plan name")}
        <input
          maxlength="128"
          autocomplete="off"
          ?readonly=${!!a}
          aria-disabled=${r.disabled}
          aria-describedby=${r.described}
          .value=${s.name}
          @input=${h=>this.#i({name:h.currentTarget.value})}
        >
      </label>
      <div class="order" role="group" aria-labelledby="order-label">
        <span id="order-label">${this.#e("plan_run_behavior","Cleaning order")}</span>
        <div class="ms-segment">
          ${g("intelligent",this.#e("plan_intelligent","Intelligent rotation"))}
          ${g("ordered",this.#e("plan_ordered","Saved order"))}
        </div>
        <p class="quiet">${d?this.#e("v4_plan_order_ordered_hint","Top to bottom, as listed"):this.#e("v4_plan_order_intelligent_hint","Longest-waiting rooms first")}</p>
      </div>
      <div class="list-header">
        <h3 class="heading" id="edit-rooms">${this.#e("v4_rooms_heading","Rooms")}</h3>
        <small>${this.#e("v4_plan_rooms_selected","{selected} of {total} selected",{selected:this.#n(s.rooms.length),total:this.#n(o.rooms.length)})}</small>
      </div>
      ${c?i`<p class="reason" id="room-limit">${this.#e("v4_plan_room_limit","Can't add more rooms until you remove one; a plan holds up to {limit}.",{limit:this.#n(100)})}</p>`:l}
      <ul class="plain" role="list" aria-labelledby="edit-rooms">
        ${Et(u,h=>h.roomId,h=>this.#y(h.roomId,m(h.roomId),h.room,h.index,d,c,a))}
      </ul>
      <span class="sr-only" role="status">${this._moved}</span>
      <details class="run-end">
        <summary>${this.#e("v4_run_end_options","When a run ends")}</summary>
        ${this.#f("return-dock",this.#e("v4_plan_return_to_dock","Return to the dock when finished"),null,s.returnToBase,a,h=>this.#i({returnToBase:h}))}
        ${this.#f("finish-room",this.#e("v4_plan_finish_room","Finish the current room when you press Stop"),this.#e("v4_plan_finish_room_hint","Only if the room is at least {percent}% done; otherwise the robot stops right away.",{percent:v}),s.finishCurrentRoom,a,h=>this.#i({finishCurrentRoom:h}))}
        ${s.finishCurrentRoom?i`<div class="threshold">
          <span id="finish-threshold-label">${this.#e("v4_plan_finish_threshold","Finish if at least {percent}% done",{percent:v})}</span>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            aria-labelledby="finish-threshold-label"
            aria-valuetext=${`${v}%`}
            aria-disabled=${r.disabled}
            aria-describedby=${r.described}
            .value=${String(p)}
            @input=${h=>{let b=h.currentTarget;a?b.value=String(p):this.#i({finishCurrentRoomThreshold:Number(b.value)})}}
          >
        </div>`:l}
      </details>
    </div>`}render(){let{workflow:e,planView:s}=this.state;return e==="plans"?this.#c():e!=="plan"?l:s==="run"?this.#g():this.#$()}};customElements.get(D)||customElements.define(D,Ne);var Tt=["mop_due","coverage_due"],Se=(t,n)=>t.resources.plans.value?.rooms.find(e=>e.roomId===n)?.name??null,Mt=(t,n)=>n.flatMap(e=>{let s=Se(t,e);return s===null?[]:[s]}),ss=t=>Mt(t,t.selection.roomIds),os=(t,n)=>{let e=ss(n);return e.length===0?null:t("v4_rooms_selected_names","{count} selected \xB7 {rooms}",{count:T(n.locale,e.length),rooms:ge(n.locale,e)})},ns=(t,n)=>{let e=Ee(n)?.preview,s=Mt(n,e?e.rooms.map(a=>a.roomId):n.selection.roomIds);if(s.length===0)return"";let o=s.length<=3?ge(n.locale,s):ge(n.locale,[...s.slice(0,2),t("v4_rooms_more","{count} more",{count:T(n.locale,s.length-2)})]);return t("v4_clean_rooms_summary","{rooms}, then back to the dock",{rooms:o})},as=(t,n,e,s)=>{let o=Se(e,s)??Se(n,s);if(o===null)return null;if(!Te(n))return ne(n)?t("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):t("v4_reason_clean_rooms_verification","Waiting for the map to be ready.");let a=n.selection.roomIds.includes(s),r=e.selection.roomIds.includes(s);return a===r?null:r?t("v4_room_added","{room} added",{room:o}):t("v4_room_removed","{room} removed",{room:o})},rs=t=>t.currentTarget.value,Le=class extends N{constructor(){super(...arguments);this.state=z();this._open=null;this.#s=(e,s,o)=>I(this.localize,e,s,o);this.#t=e=>{if(e.key!=="Escape"||this._open===null||nt(e)||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;let s=e.composedPath(),a=this.getRootNode().host.getRootNode().host;if(!s.includes(a))return;let r=c=>c instanceof HTMLElement&&c.getRootNode()!==this.renderRoot&&(c.getAttribute("role")==="menu"||c.getAttribute("role")==="dialog"||c.getAttribute("aria-expanded")==="true");if(s.some(r))return;e.preventDefault();let d=this._open==="settings"?'[data-disclosure="settings"]':`[data-room-disclosure="${CSS.escape(this._open)}"]`;this._open=null,this.updateComplete.then(()=>this.renderRoot.querySelector(d)?.focus())}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[L,A,W,O,P`
:host { display: block; min-inline-size: 0; }
.stack { display: grid; gap: var(--ms-space-3); }
.description { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-sm); line-height: var(--ms-lh-normal); }
.sr-only { position: absolute; overflow: hidden; inline-size: 1px; block-size: 1px; margin: -1px; padding: 0; border: 0; clip-path: inset(50%); white-space: nowrap; }
.list-header { display: flex; align-items: center; gap: var(--ms-space-2); min-block-size: var(--ms-control-sm); }
.list-header h3 { flex: 1; margin: 0; }
.list-header small { color: var(--ms-text-quiet); font-size: var(--ms-t-xs); }
.limit { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
@media (any-pointer: coarse) { .clear { min-block-size: var(--ms-control); min-inline-size: var(--ms-control); } }
.settings-row { display: grid; padding: 0; }
.ms-disclosure { display: flex; gap: var(--ms-space-2); align-items: center; min-inline-size: 0; min-block-size: var(--ms-control); padding: var(--ms-space-2) var(--ms-space-3); border: 0; border-radius: var(--ms-radius-sm); color: inherit; background: transparent; font: inherit; font-size: var(--ms-t-md); font-weight: var(--ms-w-bold); text-align: start; cursor: pointer; }
.ms-disclosure:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: -2px; }
.ms-disclosure > span:first-child { flex: 1; }
.ms-disclosure__value { overflow: hidden; color: var(--ms-text-quiet); font-weight: var(--ms-w-regular); font-size: var(--ms-t-sm); text-overflow: ellipsis; white-space: nowrap; }
.ms-disclosure > .ms-icon { flex: none; transition: rotate var(--ms-fast) var(--ms-ease); }
.ms-disclosure[aria-expanded="true"] > .ms-icon { rotate: 90deg; }
.ms-disclosure:dir(rtl) > .ms-icon { scale: -1 1; }
.ms-disclosure[aria-expanded="true"]:dir(rtl) > .ms-icon { rotate: -90deg; }
.settings-body, .row-expanded { display: grid; gap: var(--ms-space-3); padding: var(--ms-space-3); border-block-start: 1px solid var(--ms-line); }
.settings-body .ms-field, .row-expanded .ms-field { color: color-mix(in srgb, var(--ms-text-quiet) 70%, var(--ms-text)); }
.split { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--ms-space-2); }
@media (max-width: 25rem) { .split { grid-template-columns: 1fr; } }
.hint { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.switch-row { display: flex; gap: var(--ms-space-3); align-items: center; min-block-size: var(--ms-control); }
.switch-copy { display: grid; flex: 1; gap: 0.125rem; min-inline-size: 0; font-size: var(--ms-t-md); }
.switch-copy small { color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.check-lines { display: grid; gap: var(--ms-space-2); }
.line { display: flex; gap: var(--ms-space-2); align-items: flex-start; margin: 0; font-size: var(--ms-t-sm); line-height: var(--ms-lh-snug); }
.line .ms-icon { flex: none; inline-size: 1.125rem; block-size: 1.125rem; margin-block-start: 0.0625rem; }
.line[data-tone="warning"] .ms-icon { color: var(--ms-warning); }
.line > span { flex: 1; }
.line .ms-btn { flex: none; }
.room-list { display: grid; gap: var(--ms-space-2); }
.room-row { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; padding: 0; --ms-local: var(--ms-surface-card); }
.room-row:has(.ms-check :checked) { --ms-local: color-mix(in srgb, var(--ms-accent) 10%, var(--ms-surface-sunken)); border-color: var(--ms-resolved-indicator, var(--ms-accent)); }
.ms-check { display: flex; gap: var(--ms-space-3); align-items: center; min-inline-size: 0; min-block-size: var(--ms-control); padding: var(--ms-space-2) var(--ms-space-3); cursor: pointer; }
.ms-check input { flex: none; inline-size: 1.25rem; block-size: 1.25rem; margin: 0; accent-color: var(--ms-resolved-indicator, var(--ms-accent)); cursor: pointer; }
.ms-check input[aria-disabled="true"] { cursor: not-allowed; }
.ms-check:has(input[aria-disabled="true"]) :is(bdi, small) { color: var(--ms-text-disabled); }
.row-lines { display: grid; flex: 1; gap: 0.125rem; min-inline-size: 0; }
.row-lines bdi { overflow: hidden; font-weight: var(--ms-w-bold); text-overflow: ellipsis; white-space: nowrap; }
.row-lines small { color: color-mix(in srgb, var(--ms-text) 78%, var(--ms-local)); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.problem-line { display: flex; gap: var(--ms-space-1); align-items: flex-start; color: var(--ms-text); }
.problem-line .ms-icon { flex: none; inline-size: 1rem; block-size: 1rem; color: var(--ms-warning); }
.room-settings { margin-inline-end: var(--ms-space-1); }
.row-expanded { grid-column: 1 / -1; }
@media (forced-colors: active) {
  .room-row:has(.ms-check :checked) { forced-color-adjust: none; color: HighlightText; background: Highlight; border-color: Highlight; }
  .room-row:has(.ms-check :checked) .row-lines small { color: HighlightText; }
  .room-row:has(.ms-check :checked) input, .room-row:has(.ms-check :checked) .room-settings { forced-color-adjust: auto; }
  .line .ms-icon, .problem-line .ms-icon { color: CanvasText; }
}
@media (prefers-reduced-motion: reduce) { .ms-disclosure > .ms-icon { transition: none; } }
`]}#s;#o(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this._open&&this._open!=="settings"&&!this.state.selection.roomIds.includes(this._open)&&(this._open=null)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.#t,!0)}disconnectedCallback(){window.removeEventListener("keydown",this.#t,!0),super.disconnectedCallback()}updated(e){e.has("_open")&&this._open!==null&&this.renderRoot.querySelector(".settings-body, .row-expanded")?.scrollIntoView({block:"nearest"})}#t;#e(e){this._open=this._open===e?null:e}#a(e,s,o){return a=>{if(e){a.currentTarget.value=s;return}o(rs(a))}}#n(...e){let s=e.filter(o=>!!o);return s.length?s.join(" "):l}#l(e,s,o){let a=this.#s,r=this._open==="settings",d=e.selection.cleaningMode,c=e.selection.coverageSetting,u=e.selection.roomSettings.some(g=>e.selection.roomIds.includes(g.roomId)&&(g.cleaningMode!==d||g.coverageSetting!==c))?a("v4_settings_mixed","Different per room"):Y(a,{cleaningMode:d,coverageSetting:c}),p=d==="mop",v=s!==null;return i`
      <div class="ms-row settings-row">
        <button
          class="ms-disclosure"
          type="button"
          data-disclosure="settings"
          aria-expanded=${String(r)}
          aria-controls="clean-settings"
          @click=${()=>this.#e("settings")}
        ><span>${a("v4_clean_settings","Cleaning settings")}</span><span class="ms-disclosure__value">${u}</span>${w(Q)}</button>
        ${r?i`
          <div id="clean-settings" class="settings-body">
            <div class="split">
              <label class="ms-field">${a("v4_cleaning_system","Cleaning mode")}
                <select
                  class="ms-select"
                  aria-disabled=${v?"true":l}
                  aria-describedby=${this.#n(s)}
                  .value=${d}
                  @change=${this.#a(v,d,g=>this.#o({type:"set-clean-settings",cleaningMode:g}))}
                >${X.map(g=>i`<option value=${g} ?selected=${g===d}>${Z(a,g)}</option>`)}</select>
              </label>
              <label class="ms-field">${a("vacuum_coverage","Vacuum coverage")}
                <select
                  class="ms-select"
                  aria-disabled=${v||p?"true":l}
                  aria-describedby=${this.#n(p&&"clean-mop-hint",s)}
                  .value=${c}
                  @change=${this.#a(v||p,c,g=>this.#o({type:"set-clean-settings",coverageSetting:g}))}
                >${B.map(g=>i`<option value=${g} ?selected=${g===c}>${j(a,g)}</option>`)}</select>
              </label>
            </div>
            ${p?i`<p class="hint" id="clean-mop-hint">${a("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:l}
            ${o?i`
              <div class="switch-row">
                <span class="switch-copy">
                  <span id="due-label">${a("v4_include_due_schedule","Include scheduled work that's due")}</span>
                  <small id="due-hint">${a("v4_include_due_schedule_hint","Turn off to use only your settings. Skipped work stays due for the next clean.")}</small>
                </span>
                <button
                  class="ms-switch"
                  type="button"
                  role="switch"
                  aria-checked=${String(e.selection.useRoomSchedule)}
                  aria-labelledby="due-label"
                  aria-describedby=${this.#n("due-hint",s)}
                  aria-disabled=${v?"true":l}
                  @click=${()=>{v||this.#o({type:"set-use-room-schedule",value:!e.selection.useRoomSchedule})}}
                ></button>
              </div>
            `:l}
          </div>
        `:l}
      </div>
    `}#r(e,s,o,a){let r=this.#s,d=e.manualRoomPreview.status==="error",c=s?_e(r,e.locale,s):[],m=a===null?null:a==="invalid_cadence_policy"&&e.selection.useRoomSchedule&&e.selection.roomSettings.some(u=>u.cleaningMode!=="vacuum")?r("v4_room_preview_schedule_override",`The room schedule can't use the cleaning mode you chose. Turn off "Include scheduled work that's due", or choose another mode.`):r("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.");return!c.length&&!o&&!d&&!m?l:i`
      <div class="check-lines">
        ${c.map(u=>i`<p class="line" data-tone="due">${w(ce)}<span>${u}</span></p>`)}
        ${o?i`<p class="line" data-tone="info">${w(ce)}<span>${r("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:T(e.locale,o+1)})}</span></p>`:l}
        ${d?i`
          <p class="line" data-tone="warning">${w(q)}<span>${r("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</span>
            <button class="ms-btn ms-btn--sm ms-btn--secondary" type="button" @click=${()=>this.#o({type:"retry-room-preview"})}>${r("v4_retry","Try again")}</button>
          </p>
        `:l}
        ${m?i`<p class="line" data-tone="warning">${w(q)}<span>${m}</span></p>`:l}
      </div>
    `}#c(e,s,o,a,r,d){let c=this.#s,m=e.selection.roomIds.includes(s.roomId),u=e.selection.roomSettings.find($=>$.roomId===s.roomId)??{roomId:s.roomId,cleaningMode:e.selection.cleaningMode,coverageSetting:e.selection.coverageSetting},p=r&&!m,v=a!==null,g=e.manualRoomPreview.status==="loading",h=d?.cadenceReasons??s.sharedCadenceReasons??s.sharedCadenceProgress?.reasons??[],b=m?pt(c,h):null,f=this._open===s.roomId,_=`room-settings-${o}`,x=`room-mop-hint-${o}`,C=u.cleaningMode==="mop";return i`
      <div class="ms-row room-row">
        <label class="ms-check">
          <input
            type="checkbox"
            .checked=${m}
            aria-disabled=${v||p?"true":l}
            aria-describedby=${this.#n(a??(p&&"rooms-limit"))}
            @click=${$=>{(v||p)&&$.preventDefault()}}
            @change=${()=>this.#o({type:"toggle-room",roomId:s.roomId})}
          >
          <span class="row-lines">
            <bdi>${s.name}</bdi>
            ${m?i`<small>${g?c("v4_room_preview_loading","Checking settings\u2026"):Y(c,d??u)}</small>`:l}
            ${b?i`<small class="problem-line">${w(q)}<span>${b}</span></small>`:l}
          </span>
        </label>
        ${m?i`
          <button
            class="ms-btn ms-btn--icon room-settings"
            type="button"
            data-room-disclosure=${s.roomId}
            aria-label=${c("v4_room_settings_named","Settings for {room}",{room:s.name})}
            aria-expanded=${String(f)}
            aria-controls=${_}
            @click=${()=>this.#e(s.roomId)}
          >${w(f?Xe:Ze)}</button>
        `:l}
        ${f?i`
          <div class="row-expanded" id=${_}>
            <div class="split">
              <label class="ms-field">${c("v4_cleaning_system","Cleaning mode")}
                <select
                  class="ms-select"
                  aria-label=${c("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:s.name})}
                  aria-disabled=${v?"true":l}
                  aria-describedby=${this.#n(a)}
                  .value=${u.cleaningMode}
                  @change=${this.#a(v,u.cleaningMode,$=>this.#o({type:"patch-room-settings",roomId:s.roomId,cleaningMode:$}))}
                >${X.map($=>i`<option value=${$} ?selected=${$===u.cleaningMode}>${Z(c,$)}</option>`)}</select>
              </label>
              <label class="ms-field">${c("vacuum_coverage","Vacuum coverage")}
                <select
                  class="ms-select"
                  aria-label=${c("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:s.name})}
                  aria-disabled=${v||C?"true":l}
                  aria-describedby=${this.#n(C&&x,a)}
                  .value=${u.coverageSetting}
                  @change=${this.#a(v||C,u.coverageSetting,$=>this.#o({type:"patch-room-settings",roomId:s.roomId,coverageSetting:$}))}
                >${B.map($=>i`<option value=${$} ?selected=${$===u.coverageSetting}>${j(c,$)}</option>`)}</select>
              </label>
            </div>
            ${C?i`<p class="hint" id=${x}>${c("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:l}
          </div>
        `:l}
      </div>
    `}render(){let e=this.#s,s=this.state,o=s.resources.plans.value?.rooms??[],a=o.length===0,r=ne(s),d=!Te(s),c=d?r?"rooms-description":"rooms-held":null,m=s.selection.roomIds.length,u=m>=100,p=Ee(s)?.preview??null,v=p?p.rooms.map(f=>({...f,name:Se(s,f.roomId)??f.name})):null,g=f=>v?.find(_=>_.roomId===f)??null,h=(v??[]).some(f=>f.cadenceReasons.some(_=>Tt.includes(_)))||o.some(f=>s.selection.roomIds.includes(f.roomId)&&(f.sharedCadenceProgress?.mopDue||f.sharedCadenceProgress?.coverageDue||(f.sharedCadenceReasons??f.sharedCadenceProgress?.reasons??[]).some(_=>Tt.includes(_)))),b=r?e("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):a?e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here."):e("v4_choose_rooms_detail","Choose rooms on the map or in the list.");return i`
      <div class="stack">
        <p class="description" id="rooms-description">${b}</p>
        ${d&&!r?i`<span class="sr-only" id="rooms-held">${e("v4_reason_clean_rooms_verification","Waiting for the map to be ready.")}</span>`:l}
        ${a?l:i`
          <div class="list-header">
            <h3 class="ms-section-heading" id="rooms-heading">${e("v4_rooms_to_clean","Rooms to clean")}</h3>
            ${m?i`
              <small>${e("v4_rooms_selected","{count} selected",{count:T(s.locale,m)})}</small>
              <button
                class="ms-btn ms-btn--sm ms-btn--secondary clear"
                type="button"
                aria-disabled=${d?"true":l}
                aria-describedby=${this.#n(c)}
                @click=${()=>{d||this.#o({type:"clear-selection"})}}
              >${e("v4_clear","Clear")}</button>
            `:l}
          </div>
          ${u?i`<p class="limit" id="rooms-limit">${e("v4_room_limit_reached","Up to {limit} rooms fit in one clean, so remove one to add another.",{limit:100})}</p>`:l}
          ${this.#l(s,c,h)}
          ${this.#r(s,v,p?.missionBoundaries.length??0,p?.blocker??null)}
          <div class="room-list" role="group" aria-labelledby="rooms-heading">
            ${o.map((f,_)=>this.#c(s,f,_,c,u,g(f.roomId)))}
          </div>
        `}
      </div>
    `}};customElements.get(le)||customElements.define(le,Le);var Ae=class extends N{constructor(){super(...arguments);this.state=z();this.compact=!1;this.inline=!1}static{this.properties={state:{attribute:!1},localize:{attribute:!1},compact:{type:Boolean,reflect:!0},inline:{type:Boolean,reflect:!0}}}static{this.styles=[L,A,W,O,P`
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
`]}#s(e,s){return I(this.localize,e,s)}#o(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#t(e){let s=e.currentTarget.valueAsNumber;Number.isFinite(s)&&this.#o({type:"set-brush",value:s})}render(){let{draw:e}=this.state;return i`
      <div class="controls ms-surface ms-surface--overlay" role="group" aria-label=${this.#s("v4_drawing_precision","Drawing precision")}>
        <div class="row ms-field">
          <label for="brush">${this.#s("brush_size","Brush width")}</label>
          <div class="stepper">
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#s("v4_narrower_brush","Narrower brush")}
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
                @change=${this.#t}
                aria-label=${this.#s("v4_brush_width_meters","Brush width in meters")}
              />
              <span class="unit">m</span>
            </span>
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#s("v4_wider_brush","Wider brush")}
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
            @input=${this.#t}
            aria-label=${this.#s("v4_brush_width_slider","Brush width slider")}
            aria-valuetext=${`${e.brushMeters.toFixed(2)} m`}
          />
        </div>
        <p class="hint">${this.#s("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
      </div>
    `}};customElements.get(Me)||customElements.define(Me,Ae);var We=class extends N{constructor(){super(...arguments);this.state=z();this.#t=new K(this,".more","> button")}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[L,A,W,P`
:host { display: contents; }
.more { position: relative; margin-inline-start: auto; }
.more > .ms-btn { transition: none; }
.reason { flex-basis: 100%; margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: end; }
.menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.menu .reason { padding: var(--ms-space-1) var(--ms-space-3); text-align: start; }
`]}#s(e,s,o){return I(this.localize,e,s,o)}#o(e,s=this){s.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#t;willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this.#t.open=!1)}#e(){let{command:e,pendingAction:s,planDraft:o}=this.state;return s==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):o.dirty?this.#s("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes."):e==="pending"?this.#s("v4_reason_robot_operation_waiting","Waiting for the robot to finish what it's doing."):null}#a(e){if(this.#e())return;let s=e.currentTarget.closest(".more")?.querySelector("button");this.#t.close(!1),this.#o({type:"open-dialog",dialog:"confirmDeletePlan"},s??this)}render(){let{planView:e,planDraft:s,pendingAction:o}=this.state;if(e==="run"){let r=o==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):o==="run-plan"?this.#s("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return i`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#s("v4_edit_plan_named","Edit {plan}",{plan:s.name})}
          aria-disabled=${r?"true":l}
          aria-describedby=${r?"edit-reason":l}
          @click=${()=>{r||this.#o({type:"set-plan-view",view:"edit"})}}
        >${this.#s("v4_edit","Edit")}</button>
        ${r?i`<p class="reason" id="edit-reason">${r}</p>`:l}
      `}if(!ee(this.state,"confirmDeletePlan"))return l;let a=this.#e();return i`
      <div class="more" @keydown=${this.#t.keydown} @focusout=${this.#t.focusout}>
        <button
          class="ms-btn ms-btn--icon"
          type="button"
          aria-label=${this.#s("v4_more_actions","More actions")}
          aria-haspopup="menu"
          aria-expanded=${String(this.#t.open)}
          data-dialog-launcher="confirmDeletePlan"
          @click=${()=>this.#t.toggle()}
        >${w(ve)}</button>
        ${this.#t.open?i`
          <div class="menu ms-surface ms-surface--overlay" @mousedown=${r=>r.preventDefault()}>
            <div role="menu" aria-label=${this.#s("v4_more_actions","More actions")}><button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitem"
              tabindex="-1"
              aria-disabled=${a?"true":l}
              aria-describedby=${a?"delete-reason":l}
              @click=${this.#a}
            >${this.#s("plan_delete","Delete")}</button></div>
            ${a?i`<p class="reason" id="delete-reason">${a}</p>`:l}
          </div>
        `:l}
      </div>
    `}};customElements.get(ie)||customElements.define(ie,We);var is=(t,n,e)=>i`${t.planView==="run"?i`<bdi>${n}</bdi>`:n}${t.planDraft.dirty?i` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:l}`,Pt=ae(ie),ls=(t,n,e)=>re`<${Pt}
  .state=${t}
  .localize=${n}
  @matic-workspace-intent=${e}
></${Pt}>`,It=(t,n,e,s)=>{let o=s?.room;if(o===void 0)return t(n,e,s);let[a,r]=t(n,e,{...s,room:"\0"}).split("\0");return i`${a}<bdi>${o}</bdi>${r}`},cs=(t,n,e,s)=>{let o=e?n.jump:void 0;return i`${It(t,n.reasonKey??"",n.reason??"",n.reasonPlaceholders)}${o?i` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>s({type:"set-plan-view",view:"edit",roomId:o.roomId})}
  >${It(t,o.labelKey,o.label,o.labelPlaceholders)}</button>`:l}`},ds=(t,n,e,s)=>{let o=t.pendingAction==="save-plan",a=n?.id==="save-plan"?"primary-reason":"cancel-reason";return i`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      aria-disabled=${o?"true":l}
      aria-describedby=${o?a:l}
      @click=${r=>{o||s(t.planDraft.id?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"},r.currentTarget)}}
    >${e("v4_cancel","Cancel")}</button>
    ${o&&a==="cancel-reason"?i`<p class="action-reason" id=${a}>${e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:l}
    ${n?l:i`<p class="action-summary">${e("v4_plan_save_after_work","You can save when the robot finishes.")}</p>`}
  `},ms=(t,n,e)=>{let s=e.querySelector(G)?.shadowRoot?.querySelector(D)?.shadowRoot;if(n.workflow==="plan"&&n.planView==="edit"&&n.expandedRoom)return s?.querySelector(`[data-room-disclosure="${CSS.escape(n.expandedRoom)}"]`);if(n.workflow==="plan"&&t.planView==="edit")return e.querySelector(ie)?.shadowRoot?.querySelector("button");let o=t.selection.planId;return n.workflow==="plans"&&o?s?.querySelector(`[data-plan-row="${CSS.escape(o)}"]`):null},us=(t,n,e,s)=>{let o=ms(t,n,e);return s(o)?(o.scrollIntoView({block:"nearest"}),o.focus({preventScroll:!0}),!0):!1};var ps=(t,n,e)=>{let s=(u,p,v)=>I(e,u,p,v),o=ee(n),a=n.cadenceResetRequest,r=n.resources.plans.value,d=a&&r?.rooms.find(u=>u.roomId===a.roomId)?.name||a?.roomId||"room",c=a?r?.plans.find(u=>u.id===a.planId)?.rooms.find(u=>u.roomId===a.roomId)?.cadence?.scope==="shared":!1,m=a?.mode??"mop";switch(t){case"confirmDeletePlan":return o&&{title:s("v4_delete_plan","Delete plan?"),detail:s("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:o.name}),...o.successor===void 0?{}:{consequence:o.successor===null?s("v4_delete_plan_none","You'll have no default plan."):s("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:o.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return o&&{title:s("v4_delete_area","Delete area?"),detail:s("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:o.name}),...o.successor===void 0?{}:{consequence:o.successor===null?s("v4_delete_area_none","No custom area will be selected."):s("v4_delete_area_selected","{area} becomes the selected custom area.",{area:o.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:m==="mop"?s("v4_reset_mop_cadence_title","Reset mopping progress?"):s("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:c?s("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}):s("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}),cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("v4_reset","Reset"),action:"reset-room-cadence"}}},vs=(t,n,e)=>{let s=t;if(!De(s.detail))return;if(Oe(n,s.detail)){t.stopPropagation(),e(s.detail);return}if(s.detail?.type!=="open-dialog")return;let o=s.composedPath().find(a=>a instanceof HTMLElement&&a.hasAttribute("data-dialog-launcher"));return o instanceof HTMLElement?o:void 0},hs=(t,n,e,s)=>{let o=t.cadenceResetRequest;e({type:"dismiss-top-layer"}),n!=="reset-room-cadence"?s(n):o&&s({id:n,planId:o.planId,roomId:o.roomId,mode:o.mode})},gs=(t,n)=>{let e=t.cadenceResetRequest;return t.dialog!=="confirmResetCadence"||!e?null:n.querySelector(G)?.shadowRoot?.querySelector(D)?.shadowRoot?.querySelector(`[data-room-disclosure="${CSS.escape(e.roomId)}"]`)??null};var qe=class{constructor(n){this.menu=new K(n,".overflow-wrap",".overflow")}render({state:n,narrow:e,browserFullscreen:s,t:o,intent:a,diagnostics:r,fullscreen:d}){let c=(u,p,v)=>i`
      <button class="ms-row ms-row--menu" type="button" role="menuitemradio" aria-checked=${String(u)} data-selected=${u?"true":l} tabindex="-1" @click=${v}><span>${p}</span>${u?w(Ye):l}</button>
    `,m=(u,p)=>c(n.quality===u,p,()=>a({type:"set-quality",quality:u}));return i`
      <div id="map-options" class="overflow-menu ms-surface ms-surface--overlay" role="menu" aria-label=${o("v4_map_options","Map options")}>
        ${e?i`
          <div role="group" aria-labelledby="menu-display">
            <p class="menu-heading" id="menu-display" role="presentation">${o("v4_map_display","Map display")}</p>
            ${n.view==="top"?i`
              ${c(n.appearance==="photo",o("map_style_photo","Photo"),()=>a({type:"set-appearance",appearance:"photo"}))}
              ${c(n.appearance==="rooms",o("v4_room_colours","Room colors"),()=>a({type:"set-appearance",appearance:"rooms"}))}
            `:l}
            <button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitemcheckbox"
              aria-checked=${String(n.labelsVisible)}
              tabindex="-1"
              @click=${()=>a({type:"toggle-labels"})}
            ><span>${o("v4_room_names","Room names")}</span><span class="ms-switch" aria-checked=${String(n.labelsVisible)} aria-hidden="true"></span></button>
          </div>
        `:l}
        <div role="group" aria-labelledby="menu-detail">
          <p class="menu-heading" id="menu-detail" role="presentation">${o("map_quality_label","Map detail")}</p>
          ${m("auto",o("map_quality_auto","Auto detail"))}
          ${m("efficient",o("map_quality_efficient","Efficient"))}
          ${m("balanced",o("map_quality_balanced","Balanced"))}
          ${m("maximum",o("map_quality_maximum","Maximum"))}
        </div>
        <button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!1),r()}}>${o("v4_map_diagnostics","Map diagnostics")}</button>
        <button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!0),d()}}>${s?o("v4_leave_full_screen","Leave full screen"):o("v4_full_screen","Full screen")}</button>
      </div>
    `}};var zt=ae(D),Nt=ae(le),ue=t=>t.currentTarget.value,He=class extends N{constructor(){super(...arguments);this.state=z();this._historyPreviewPosition=null;this.#s=new st(this,()=>import("./diagnostics-panel-EHYVSQYI.js"));this.#o="";this.#n=(e,s,o)=>this.#t(e,s,o)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0}}}static{this.styles=[L,A,W,O,P`
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
.toolbar { display: flex; flex-wrap: wrap; gap: var(--ms-space-2); }
.checkbox { display: flex; align-items: center; gap: var(--ms-space-2); min-block-size: var(--ms-control); font-size: var(--ms-t-xs); font-weight: var(--ms-w-medium); }
.checkbox input { inline-size: 1.2rem; block-size: 1.2rem; }
.floor small, .snapshot small, .list-button small { margin-inline-start: auto; color: color-mix(in srgb, var(--ms-text) 78%, var(--ms-local)); font-weight: var(--ms-w-regular); }
.timeline { display: grid; gap: var(--ms-space-2); }
.timeline input[type="range"] { inline-size: 100%; min-block-size: var(--ms-control); }
@media (max-width: 25rem) { .split { grid-template-columns: 1fr; } }
`]}#s;#o;willUpdate(e){if(!e.has("state"))return;let{workflow:s,selection:o}=this.state,a=`${s}:${o.floorId}:${o.historyId??"live"}`;a!==this.#o&&(this.#o=a,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#t(e,s,o){return I(this.localize,e,s,o)}#e(e){return Z(this.#n,e)}#a(e){return j(this.#n,e)}#n;#l(e){return e==="vacuum"?l:i`<p class="subtle">${this.#t("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#r(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#c(e){switch(e){case"rooms":case"plans":case"plan":return{loading:this.#t("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#t("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#t("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#t("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#t("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#t("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#t("v4_loading_history","Loading map history\u2026"),unavailable:this.#t("v4_history_unavailable","Map history is unavailable right now."),empty:this.#t("v4_no_map_history","No saved map snapshots yet.")}}}#d({status:e,value:s},o,a){let r=this.#c(a);return s===null&&(e==="idle"||e==="loading")?i`<div class="loading" role="status">${r.loading}</div>`:e==="error"?i`
        <div class="stack">
          <div class="problem" role="alert">${r.unavailable}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:a})}>${this.#t("v4_retry","Try again")}</button>
          </div>
        </div>
      `:e==="empty"?i`<div class="empty">${r.empty}</div>`:o}#h(){return this.#d(this.state.resources.plans,re`<${Nt}
      .state=${this.state}
      .localize=${this.localize}
    ></${Nt}>`,"rooms")}#p(){let e=this.state.workflow==="plans"?"plans":"plan";return this.#d(this.state.resources.plans,re`<${zt}
      .state=${this.state}
      .localize=${this.localize}
    ></${zt}>`,e)}#g(){let e=this.state.resources.areas;return i`
      <div class="stack">
        <p class="subtle">${this.state.draw.tool==="outline"?this.#t("v4_zone_coverage","Place points around the area. Shading shows where the robot cleans inside the outline; narrow edges may stay uncovered."):this.#t("v4_draw_floor_hint","Paint only on the mapped floor. Zooming and panning never change the area.")}</p>
        ${this.state.draw.tool!=="outline"?i`<p class="subtle">${this.#t("v4_keyboard_draw_help","Keyboard: focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>`:l}
        ${this.#d(e,i`
          <div class="group">
            <h3 class="group-heading" id="areas-heading">${this.#t("area_workspace_title","Custom areas")}</h3>
            <div class="list" role="group" aria-labelledby="areas-heading">
            <button class="list-button ms-row ms-row" type="button" @click=${()=>this.#r({type:"select-area",areaId:null})}>${this.#t("area_new","New area")}</button>
            ${(e.value?.areas||[]).map(s=>i`
              <button class="list-button ms-row ms-row" type="button" @click=${()=>{this.#r({type:"select-area",areaId:s.id,workflow:"areaReview"})}}>
                <span>${s.name}</span>
                <small>${s.status==="current"?this.#t("area_workspace_ready","Ready"):this.#t("v4_review","Review")}</small>
              </button>
            `)}
            </div>
          </div>
        `,"draw")}
      </div>
    `}#m(){let e=this.state.areaDraft,s=this.state.resources.areas,o=e.canRebind||e.status==="review",a=!o&&(e.status==="stale"||e.status==="unknown");return i`
      <div class="stack">
        ${s.status==="error"?i`
          <div class="stack">
            <div class="problem" role="alert">${this.#c("areaReview").unavailable}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"areaReview"})}>${this.#t("v4_retry","Try again")}</button></div>
          </div>
        `:l}
        ${o?i`<div class="notice" data-tone="warning" role="status">${this.#t("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:l}
        ${a?i`<div class="problem" role="alert">${this.#t("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:l}
        <label class="field ms-field">${this.#t("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} @input=${r=>this.#r({type:"patch-area-draft",patch:{name:ue(r)}})}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#t("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} @change=${r=>this.#r({type:"patch-area-draft",patch:{cleaningMode:ue(r)}})}>${X.map(r=>i`<option value=${r} ?selected=${r===e.cleaningMode}>${this.#e(r)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#t("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} @change=${r=>this.#r({type:"patch-area-draft",patch:{coverageSetting:ue(r)}})}>${B.map(r=>i`<option value=${r} ?selected=${r===e.coverageSetting}>${this.#a(r)}</option>`)}</select>
          </label>
        </div>
        ${this.#l(e.cleaningMode)}
        <div class="toolbar">
          <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"draw"})}>${this.#t("v4_edit_outline","Redraw")}</button>
          ${ee(this.state,"confirmDeleteArea")?i`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#t("v4_delete_area_label","Delete area")}
              data-dialog-launcher="confirmDeleteArea"
              @click=${()=>this.#r({type:"open-dialog",dialog:"confirmDeleteArea"})}
            >${this.#t("area_delete","Delete")}</button>
          `:l}
        </div>
      </div>
    `}#i(){let e=this.state.resources.history,s=e.value,o=s?.floors.find(u=>u.id===this.state.selection.floorId)||s?.floors.find(u=>u.active)||s?.floors[0],a=o?.snapshots||[],r=this.state.selection.historyId?Math.max(0,a.findIndex(u=>u.id===this.state.selection.historyId)):a.length,d=o?.active?this.#t("map_timeline_live_action","Live"):this.#t("v4_return_current_floor","Return to current floor"),c=this._historyPreviewPosition??r,m=a[c];return this.#d(e,i`
      <div class="stack">
        ${(s?.floors.length||0)>1?i`
          <div class="group">
            <h3 class="group-heading" id="floors-heading">${this.#t("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(s?.floors||[]).map((u,p)=>i`
              <button
                class="floor ms-row ms-row"
                type="button"
                aria-current=${String(u.id===o?.id)}
                @click=${()=>this.#r({type:"set-floor",floorId:u.id})}
              >
                <span>${u.label||(u.active?this.#t("v4_current_floor","Current floor"):this.#t("v4_saved_floor","Saved floor {number}",{number:u.ordinal??p}))}</span>
                <small>${u.active?this.#t("map_timeline_live_action","Live"):this.#t("v4_read_only","Read only")}</small>
              </button>
            `)}
            </div>
          </div>
        `:l}
        <div class="timeline">
          <label class="field ms-field">${this.#t("map_timeline_label","Map timeline")}
            <input
              type="range"
              min="0"
              max=${String(a.length)}
              step="1"
              .value=${String(c)}
              aria-valuetext=${m?Pe(m.createdAt,this.dates):d}
              ?disabled=${!a.length}
              @input=${u=>{this._historyPreviewPosition=Number(ue(u))}}
              @change=${u=>{let p=Number(ue(u));this._historyPreviewPosition=null,this.#r({type:"set-history",historyId:p===a.length?null:a[p]?.id||null})}}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId&&!!o?.active)} @click=${()=>this.#r({type:"set-history",historyId:null})}><span>${d}</span><small>${this.#t("v4_current","Current")}</small></button>
            ${a.map((u,p)=>i`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(u.id===this.state.selection.historyId)} @click=${()=>this.#r({type:"set-history",historyId:u.id})}>
                <span>${Pe(u.createdAt,this.dates)}</span><small>${this.#t("v4_history_position","{position} of {count}",{position:p+1,count:a.length})}</small>
              </button>
            `)}
          </div>
        </div>
        <p class="subtle">${this.#t("v4_history_privacy","Saved maps show one floor each and never show where the robot is now.")}</p>
      </div>
    `,"history")}#v(){return this.#s.request(),this.#s.status!=="ready"?ot(this.#s.status,this.localize,this.retry):i`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}#u(e){return i`<fieldset class="workflow-fields" ?disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}>${e}</fieldset>`}render(){switch(this.state.workflow){case"rooms":return this.#h();case"plans":case"plan":return this.#p();case"draw":return this.#u(this.#g());case"areaReview":return this.#u(this.#m());case"history":return this.#u(this.#i());case"support":return this.#v();case"none":return l}}};customElements.get(G)||customElements.define(G,He);export{qe as MapOptions,He as MaticMapWorkflowV4,cs as actionReason,hs as confirmDialog,ps as dialogCopy,vs as dialogLauncher,gs as dialogReturnTarget,us as focusPlanTarget,O as formControls,ds as planCancel,is as planTitle,ls as planTools,as as roomTapAnnouncement,os as roomsGripLine,ns as roomsSummary,At as shellWorkflowStyles};
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
