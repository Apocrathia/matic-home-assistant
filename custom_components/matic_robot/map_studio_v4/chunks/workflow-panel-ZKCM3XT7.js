import{E as et,H as tt,I as st,Q as H,S as T,T as ge,U as at,V as ot,a as oe,b as ne,d as Te,e as U,f as re,g as D,h as ie}from"./chunk-TOHI24KD.js";import{A as Ye,B as Je,M as le,O as q,Q as k,a as N,b as A,c as W,f as pe,i as G,j as Qe,k as Xe,y as ve,z as Ze}from"./chunk-MXR2NNCV.js";import{$ as Me,E as Be,F as je,G as Fe,H as Ke,J as ae,K as Ee,R as P,S as i,V as Ue,W as l,X as Ge,Y as L,Z as I,_ as he,c as Y,e as Se,f as Ce,j as He,k as De,n as z,p as Re,q as Oe,t as J,z as Ve}from"./chunk-LIKAU5TE.js";var _e=1,ce=100,nt=(t,o,e)=>{if(o)return e;let s=t.trim();if(s==="")return null;let a=Number(s);return Number.isFinite(a)?Math.min(ce,Math.max(_e,Math.round(a))):e},rt=(t,o)=>t===null?o>0?_e:null:t+o<_e?null:Math.min(ce,t+o),it=P`
.ms-stepper { --ms-local: var(--ms-surface-card); display: inline-grid; flex: none; grid-template-columns: var(--ms-control) minmax(3rem, 4.5rem) var(--ms-control); gap: var(--ms-space-1); align-items: center; border: 1px solid var(--ms-line-strong); border-radius: var(--ms-radius-sm); background: var(--ms-local); }
.ms-stepper--readonly { grid-template-columns: minmax(3rem, 4.5rem); }
.ms-stepper .ms-btn { border-radius: calc(var(--ms-radius-sm) - 1px); }
.ms-stepper input { inline-size: 100%; min-inline-size: 0; min-block-size: var(--ms-control); margin: 0; padding: 0; border: 0; border-radius: var(--ms-radius-xs); color: var(--ms-text); background: transparent; font: inherit; font-size: var(--ms-t-md); font-weight: var(--ms-w-medium); font-variant-numeric: tabular-nums; text-align: center; appearance: textfield; -moz-appearance: textfield; }
.ms-stepper input::-webkit-inner-spin-button, .ms-stepper input::-webkit-outer-spin-button { margin: 0; appearance: none; -webkit-appearance: none; }
.ms-stepper input::placeholder { color: var(--ms-text-quiet); font-weight: var(--ms-w-medium); opacity: 1; }
.ms-stepper input:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: -2px; }
.ms-stepper input[readonly] { color: var(--ms-text-quiet); }
@media (forced-colors: active) { .ms-stepper { border: 1px solid CanvasText; } }
`,lt=t=>{let{id:o,t:e,value:s}=t,a=t.heldBy!==null,n=i`<input
    id=${o}
    type="number"
    inputmode="numeric"
    min="1"
    max=${ce}
    step="1"
    placeholder=${e("v4_cadence_off","Off")}
    aria-labelledby=${t.labelId}
    aria-describedby=${t.describedBy??l}
    aria-disabled=${a&&!t.readonly?"true":l}
    ?readonly=${t.readonly||a}
    .value=${s===null?"":String(s)}
    @change=${d=>{let c=d.currentTarget,m=t.readonly||a?s:nt(c.value,c.validity.badInput,s);c.value=m===null?"":String(m),m!==s&&t.commit(m)}}
  >`;if(t.readonly)return i`<span class="ms-stepper ms-stepper--readonly">${n}</span>`;let r=d=>{let m=(d<0?s===null:s===ce)?d<0?e("v4_cadence_stepper_off_reason","This schedule is already off."):e("v4_cadence_stepper_max_reason","Every 100 cleans is the longest schedule."):null,u=`${o}-${d<0?"min":"max"}`,p=d<0?e("v4_stepper_decrease","Decrease {label}",{label:t.label}):e("v4_stepper_increase","Increase {label}",{label:t.label});return i`<button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${p}
      aria-controls=${o}
      aria-disabled=${m||a?"true":l}
      aria-describedby=${[m?u:null,t.heldBy].filter(Boolean).join(" ")||l}
      title=${m??l}
      @click=${()=>{!m&&!a&&t.commit(rt(s,d))}}
    >${k(d<0?Ze:ve)}${m?i`<span class="sr-only" id=${u}>${m}</span>`:l}</button>`};return i`<span class="ms-stepper">${r(-1)}${n}${r(1)}</span>`};var Q=["vacuum","mop","vacuum_and_mop"],V=["quick","standard","heavy_duty"],X=(t,o)=>o==="vacuum"?t("vacuum","Vacuum"):o==="mop"?t("mop","Mop"):t("vacuum_and_mop","Vacuum + mop"),B=(t,o)=>o==="quick"?t("quick","Quick"):o==="standard"?t("standard","Optimal"):t("heavy_duty","Heavy duty"),dt=t=>t("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."),mt=(t,o)=>{if(o.includes("coverage_requires_vacuum"))return dt(t);if(o.includes("identity_changed")||o.includes("room_not_on_current_map"))return t("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(o.includes("shared_schedule_unavailable"))return t("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(o.includes("mop_progress_unverified")||o.includes("coverage_progress_unverified")){let e=[];return o.includes("mop_progress_unverified")&&e.push(t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),o.includes("coverage_progress_unverified")&&e.push(t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),e.join(" ")}return o.includes("invalid_cadence_policy")?t("v4_cadence_policy_invalid","The room schedule needs review before it can be applied."):null},Lt={scope:"shared",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1},ye=t=>!!(t&&(t.mopEveryN!==null||t.coverageEveryN!==null)),Nt={quick:(t,o,e)=>o===null?t("v4_cadence_coverage_quick_off","Quick vacuum"):e?t("v4_cadence_coverage_quick_one","Quick vacuum every clean"):t("v4_cadence_coverage_quick","Quick vacuum every {count} cleans",{count:o}),standard:(t,o,e)=>o===null?t("v4_cadence_coverage_optimal_off","Optimal vacuum"):e?t("v4_cadence_coverage_optimal_one","Optimal vacuum every clean"):t("v4_cadence_coverage_optimal","Optimal vacuum every {count} cleans",{count:o}),heavy_duty:(t,o,e)=>o===null?t("v4_cadence_coverage_heavy_off","Heavy duty vacuum"):e?t("v4_cadence_coverage_heavy_one","Heavy duty vacuum every clean"):t("v4_cadence_coverage_heavy","Heavy duty vacuum every {count} cleans",{count:o})},At={quick:(t,o)=>o?t("v4_cadence_next_mop_quick","Mop and quick vacuum on the next clean"):t("v4_cadence_next_quick","Quick vacuum on the next clean"),standard:(t,o)=>o?t("v4_cadence_next_mop_optimal","Mop and optimal vacuum on the next clean"):t("v4_cadence_next_optimal","Optimal vacuum on the next clean"),heavy_duty:(t,o)=>o?t("v4_cadence_next_mop_heavy","Mop and heavy duty vacuum on the next clean"):t("v4_cadence_next_heavy","Heavy duty vacuum on the next clean")},Wt=(t,o,e)=>e===null?t("v4_cadence_mop_off","Mop"):e===1?t("v4_cadence_mop_interval_one","Mop every clean"):t("v4_cadence_mop_interval","Mop every {count} cleans",{count:T(o,e)}),qt=(t,o,e,s)=>Nt[e](t,s===null?null:T(o,s),s===1),Ht=["identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy"],de=({room:t,saved:o,catalogRoom:e})=>{let s=t.cadence??Lt,a=e?.sharedCadence,n=a===void 0&&(e?.sharedCadenceReasons?.length??0)>0,r=a!==void 0||n,d=o?.cadence?.scope==="shared",c=a!==void 0&&!d&&t.cadence?.scope==="shared";return{policy:s,shared:a,sharedExists:r,participating:d,joinPending:c,progress:c?e?.sharedCadenceProgress:t.cadenceProgress,reasons:c?e?.sharedCadenceReasons??[]:t.cadenceReasons??[],savedPolicy:o?.cadence,savedProgress:o?.cadenceProgress,sharedFits:!a||(a.mopEveryN===null||t.cleaningMode==="vacuum")&&(a.coverageEveryN===null||t.cleaningMode!=="mop"),sharedBroken:n}},O={mop:{every:"mopEveryN",flag:"doMopNext",next:"nextMopIn",count:"mopProgress"},coverage:{every:"coverageEveryN",flag:"doCoverageNext",next:"nextCoverageIn",count:"coverageProgress"}},ut=(t,o)=>!!(t.joinPending?t.shared:t.savedPolicy)?.[O[o].flag],Pe=t=>!t.joinPending&&t.savedPolicy!==void 0&&t.savedPolicy.scope!==t.policy.scope,pt=(t,o)=>{let{every:e,flag:s,next:a,count:n}=O[o],r=t.policy[e];if(!t.progress||r===null)return null;if(!(!t.joinPending&&(Pe(t)||r!==(t.savedPolicy?.[e]??null)||t.policy[s]!==ut(t,o))))return t.progress[a];let c=Pe(t)?0:t.progress[n];return t.policy[s]||c>=r-1?1:r-c},Dt=(t,o)=>{let e=O[o].every,s=t.savedPolicy?.[e]??null;return!t.joinPending&&s!==null&&t.policy[e]!==null&&t.policy[e]!==s},$e=(t,o)=>{let e=t.policy[O[o].every];return e!==null&&e>1&&(ut(t,o)||pt(t,o)!==1)},vt=({room:t},o)=>({mop:!o.reasons.includes("mop_progress_unverified")&&t.cleaningMode!=="vacuum"&&o.policy.mopEveryN===null,coverage:!o.reasons.includes("coverage_progress_unverified")&&t.cleaningMode==="mop"}),ct=(t,o,e,s)=>{let a=e.policy[O[s].every],n=pt(e,s);return a===null?t("v4_cadence_status_off","Not scheduled"):a===1?t("v4_cadence_status_every","Due every clean"):e.policy[O[s].flag]||n===1?t("v4_cadence_status_next","Due next clean"):Dt(e,s)?t("v4_cadence_status_edited","Keeps the progress so far"):Pe(e)||n===null?null:t("v4_cadence_status_in","Due in {count} cleans",{count:T(o,n)})},Ot=(t,o,e)=>{let{policy:s,participating:a}=o,n=ye(s);if(o.joinPending)return t("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");if(a&&s.scope==="plan")return t("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule.");if(!a&&s.scope==="shared"&&n)return t("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero.");let r=["mop","coverage"].some(d=>s[O[d].every]!==null&&(o.savedProgress?.[O[d].count]??0)>0);return s.scope==="plan"&&n&&!ye(o.savedPolicy)&&!r?t("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):o.savedPolicy&&(s.mopEveryN!==o.savedPolicy.mopEveryN||s.coverageEveryN!==o.savedPolicy.coverageEveryN)?t("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."):a?t("v4_cadence_shared_edit_effect","Changes apply to every plan that uses {room}'s shared schedule.",{room:e}):null},Vt=(t,o,e)=>{let s=de(e),{policy:a,reasons:n}=s,{room:r,saved:d,name:c}=e,m=a.coverageEveryN!==null,u=(m?null:e.offLevel)??a.periodicCoverageSetting??"heavy_duty",p=M=>n.includes(M),v=p("mop_progress_unverified"),{mop:g,coverage:h}=vt(e,s),b=p("coverage_progress_unverified"),f=!b&&r.cleaningMode==="mop"&&m,_=Fe(n.filter(M=>Ht.includes(M)),c),x=a.doMopNext||a.doCoverageNext,R=x?a.doMopNext:$e(s,"mop"),$=x?a.doCoverageNext:$e(s,"coverage"),C=(M,K,te)=>d!==void 0&&((M??0)>0||!!K||!!d.cadenceReasons?.includes(te));return{policy:a,level:u,mop:{every:a.mopEveryN,label:Wt(t,o,a.mopEveryN),status:ct(t,o,s,"mop"),reason:v?t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):g?t("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum."):null,blocked:g,unverified:v},coverage:{every:a.coverageEveryN,label:qt(t,o,u,a.coverageEveryN),status:ct(t,o,s,"coverage"),reason:b?t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):f?dt(t):h?t("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming."):null,blocked:h,unverified:b},legacyCoverage:f,roomReason:_?t(_.reasonKey,_.reason,_.reasonPlaceholders):null,sharedHint:s.shared!==void 0&&s.sharedFits&&!s.participating&&a.scope==="shared"&&!ye(a),joinPending:s.joinPending,participating:s.participating,next:R||$?{label:$?At[u](t,R):t("v4_cadence_next_mop","Mop on the next clean"),on:x,mop:R,coverage:$,blocked:R&&g?"mop":$&&h?"coverage":null}:null,explanation:Ot(t,s,c),scope:a.scope,resettable:{mop:C(d?.cadenceProgress?.mopProgress,d?.cadence?.doMopNext,"mop_progress_unverified"),coverage:C(d?.cadenceProgress?.coverageProgress,d?.cadence?.doCoverageNext,"coverage_progress_unverified")},sharedReason:Ie(s)?s.sharedBroken?t("v4_cadence_shared_broken_reason","Can't count across all plans until you fix this room's shared schedule in a plan that uses it."):t("v4_cadence_shared_mode_reason","Can't count across all plans until this room's cleaning mode works with its shared schedule."):null}},ht=t=>t.shared&&t.sharedFits&&!t.participating?{...t.shared,scope:"shared"}:null,Ie=t=>t.sharedExists&&(!t.sharedFits||t.sharedBroken)&&!t.participating,gt=(t,o,e)=>{let s=de(t),{policy:a}=s;if(s.joinPending)return null;if(e!==null&&!ye(a)&&a.scope==="shared"){let r=ht(s);if(r)return r;if(Ie(s))return gt({...t,room:{...t.room,cadence:{...a,scope:"plan"}}},o,e)}let n=e!==null&&e>1;return o==="mop"?{...a,mopEveryN:e,doMopNext:n&&a.doMopNext}:e===null?{...a,coverageEveryN:null,doCoverageNext:!1}:a.coverageEveryN===null?{...a,coverageEveryN:e,periodicCoverageSetting:t.offLevel??a.periodicCoverageSetting??"heavy_duty"}:{...a,coverageEveryN:e,doCoverageNext:n&&a.doCoverageNext}},Bt=(t,o)=>{let e=de(t);return e.joinPending||e.policy.coverageEveryN===null?null:{...e.policy,periodicCoverageSetting:o}},jt=(t,o)=>{let e=de(t);if(e.joinPending)return null;let s=$e(e,"mop"),a=$e(e,"coverage");if(!s&&!a&&!e.policy.doMopNext&&!e.policy.doCoverageNext)return null;let n=vt(t,e);return o&&(s&&n.mop||a&&n.coverage)?null:o?{...e.policy,doMopNext:s,doCoverageNext:a}:{...e.policy,doMopNext:!1,doCoverageNext:!1}},Ft=(t,o)=>{let e=de(t);return o==="shared"&&Ie(e)?null:(o==="shared"?ht(e):null)??{...e.policy,scope:o}},Kt=t=>({...t,scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1}),Ut=(t,o)=>o.planDraft.dirty?t("v4_reason_reset_unsaved","Can't reset until you save or cancel your changes."):o.command!=="idle"||o.managedLock||o.activity!=="idle"&&o.activity!=="docked"||o.dataMode!=="live"?t("v4_reason_reset_busy","Can't reset until the robot is idle and the map is live."):null,Gt=(t,o,e,s)=>{let a=t.resources.plans.value,n=t.planDraft.id;return{room:o,saved:n?a?.plans.find(r=>r.id===n)?.rooms.find(r=>r.roomId===o.roomId):void 0,catalogRoom:a?.rooms.find(r=>r.roomId===o.roomId),name:e,offLevel:s}},fe="\0",be=(t,o)=>{let[e,...s]=t.split(fe);return s.length?i`${e}<bdi>${o}</bdi>${s.join(o)}`:t},_t=(t,o,e,s)=>{let{t:a,state:n,held:r}=t,d=n.planDraft,c=Gt(n,o,s,t.offLevel),m=Vt(a,n.locale,{...c,name:fe}),u=(y,w,E="small")=>E==="p"?i`<p class="sched-status sched-reason" id=${y??l}>${k(q)}<span>${w}</span></p>`:i`<small class="sched-status sched-reason" id=${y??l}>${k(q)}<span>${w}</span></small>`,{policy:p,next:v}=m,g=y=>{if(!y||r)return;let w=d.rooms.map((E,S)=>S===e?{...E,cadence:y}:E);t.intent({type:"patch-plan-draft",patch:{rooms:w}})},h={disabled:r?"true":l,described:r??l},b=(...y)=>y.filter(Boolean).join(" ")||null,f=(y,w)=>w.reason?u(y,w.reason):w.status?i`<small class="sched-status" id=${y}>${w.status}</small>`:l,_=Ut(a,n),x=!!(r||_),R=(y,w,E,S=null)=>i`<button
    class=${w}
    type="button"
    role=${S??l}
    tabindex=${S?"-1":l}
    aria-label=${y==="mop"?a("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:s}):a("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:s})}
    aria-disabled=${x?"true":l}
    aria-describedby=${r??(_?E:null)??l}
    @click=${()=>{x||!d.id||(t.menu.close(!1),t.intent({type:"request-room-cadence-reset",planId:d.id,roomId:o.roomId,mode:y}))}}
  >${y==="mop"?a("v4_reset_mop_cadence_button","Reset mopping"):a("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`,$=a("v4_room_more_named","More for {room}",{room:s}),{menu:C}=t,M=d.id&&(m.resettable.mop||m.resettable.coverage)?i`<div class="room-more" @keydown=${C.keydown} @focusout=${C.focusout}>
    <button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${$}
      title=${$}
      aria-haspopup="menu"
      aria-expanded=${String(C.open)}
      aria-disabled=${h.disabled}
      aria-describedby=${h.described}
      @click=${()=>{r||C.toggle()}}
    >${k(pe)}</button>
    ${C.open&&!r?i`<div class="menu ms-surface ms-surface--overlay" @mousedown=${y=>y.preventDefault()}>
      <div role="menu" aria-label=${$}>
        ${m.resettable.mop?R("mop","ms-row ms-row--menu","reset-reason","menuitem"):l}
        ${m.resettable.coverage?R("coverage","ms-row ms-row--menu","reset-reason","menuitem"):l}
      </div>
      ${_?i`<div class="reason">${u("reset-reason",_,"p")}</div>`:l}
    </div>`:l}
  </div>`:l,K=(y,w,E)=>{let S=`sched-${y}`,se=w.reason||w.status?`${S}-status`:null;return i`<div class="sched-row">
      <label class="sched-label" id=${`${S}-label`} for=${S}>${w.label}</label>
      <div class="sched-controls">
        ${E}
        ${lt({id:S,labelId:`${S}-label`,label:w.label,value:w.every,describedBy:b(se,r),heldBy:r??(w.blocked?se:null),readonly:m.joinPending,t:a,commit:ue=>g(gt(c,y,ue))})}
      </div>
      ${f(`${S}-status`,w)}
      ${w.unverified&&d.id?i`${R(y,"ms-btn ms-btn--secondary",`${S}-reset-reason`)}
        ${_?u(`${S}-reset-reason`,_,"p"):l}`:l}
    </div>`},te=r??(m.coverage.blocked?"sched-coverage-status":null),zt=m.joinPending?l:i`<select
    class="ms-select sched-level"
    aria-label=${a("v4_cadence_level_named","Vacuum level for {room}",{room:s})}
    aria-disabled=${te?"true":l}
    aria-describedby=${te??l}
    .value=${m.level}
    @change=${y=>{let w=y.currentTarget;if(te){w.value=m.level;return}let E=w.value,S=Bt(c,E);t.setOffLevel(S?null:E),S&&g(S)}}
  >${V.map(y=>i`<option value=${y} ?selected=${y===m.level}>${B(a,y)}</option>`)}</select>`;return i`<section class="schedule" role="group" aria-label=${a("v4_room_cadence_named","Room schedule for {room}",{room:s})}>
    <div class="schedule-head"><h3>${a("v4_room_schedule","Schedule")}</h3>${M}</div>
    ${m.roomReason?u(null,be(m.roomReason,s),"p"):l}
    ${m.sharedHint?i`<p class="schedule-note">${be(a("v4_cadence_shared_available","{room} has a shared schedule, and turning on a row uses it.",{room:fe}),s)}</p>`:l}
    ${K("mop",m.mop,l)}
    ${K("coverage",m.coverage,zt)}
    ${m.legacyCoverage?i`<button
      type="button"
      class="ms-btn ms-btn--secondary sched-off"
      aria-label=${a("v4_cadence_turn_off_named","Turn off the vacuum rotation in {room}",{room:s})}
      aria-disabled=${h.disabled}
      aria-describedby=${h.described}
      @click=${()=>g(Kt(p))}
    >${a("v4_cadence_clear_room_coverage","Turn off")}</button>`:l}
    ${v?i`<div class="switch-row">
      <span class="switch-copy">
        <span id="sched-next-label">${v.label}</span>
        <small id="sched-next-hint">${a("v4_cadence_next_hint","Brings it forward once; the schedule then continues as usual.")}</small>
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(v.on)}
        aria-labelledby="sched-next-label"
        aria-describedby=${b("sched-next-hint",r??(m.joinPending?"sched-join":v.blocked?`sched-${v.blocked}-status`:null))??l}
        aria-disabled=${r||m.joinPending||v.blocked?"true":l}
        @click=${()=>{v.blocked||g(jt(c,!v.on))}}
      ></button>
    </div>`:l}
    ${m.joinPending?i`<p class="schedule-note" id="sched-join">${be(a("v4_cadence_join_pending",`Uses {room}'s shared schedule; change it after you save, or choose "In this plan only" under Advanced.`,{room:fe}),s)}</p>`:l}
    ${m.explanation?i`<p class="schedule-note">${be(m.explanation,s)}</p>`:l}
    <details class="advanced">
      <summary>${a("v4_advanced","Advanced")}${k(G)}</summary>
      <fieldset class="scope">
        <legend>${a("v4_cadence_scope","Count cleans")}</legend>
        ${[["shared",a("v4_cadence_shared","Across all plans (recommended)")],["plan",a("v4_cadence_this_plan","In this plan only")]].map(([y,w])=>{let E=r??(y==="shared"&&m.sharedReason?"sched-scope-reason":null);return i`<label class="scope-row"><input
            type="radio"
            name="sched-scope"
            value=${y}
            .checked=${m.scope===y}
            aria-disabled=${E?"true":l}
            aria-describedby=${E??l}
            @change=${S=>{let se=E?null:Ft(c,y);se?g(se):S.currentTarget.closest("fieldset")?.querySelectorAll("input").forEach(ue=>{ue.checked=ue.value===m.scope})}}
          ><span>${w}</span></label>`})}
        ${m.sharedReason?u("sched-scope-reason",m.sharedReason,"p"):l}
      </fieldset>
      <p class="schedule-note">${a("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
    </details>
  </section>`},Z=(t,o)=>o.cleaningMode==="mop"?t("v4_room_setting_mop","Mop"):o.cleaningMode==="vacuum"?o.coverageSetting==="quick"?t("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):o.coverageSetting==="standard"?t("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):t("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):o.coverageSetting==="quick"?t("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):o.coverageSetting==="standard"?t("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):t("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),Qt={mop:(t,o)=>t("v4_room_schedules_mop","Mop every {mop} cleans",{mop:o}),mop_one:t=>t("v4_room_schedules_mop_one","Mop every clean"),quick:(t,o,e)=>t("v4_room_schedules_quick","Quick vacuum every {cov} cleans",{cov:e}),quick_one:t=>t("v4_room_schedules_quick_one","Quick vacuum every clean"),optimal:(t,o,e)=>t("v4_room_schedules_optimal","Optimal vacuum every {cov} cleans",{cov:e}),optimal_one:t=>t("v4_room_schedules_optimal_one","Optimal vacuum every clean"),heavy:(t,o,e)=>t("v4_room_schedules_heavy","Heavy duty vacuum every {cov} cleans",{cov:e}),heavy_one:t=>t("v4_room_schedules_heavy_one","Heavy duty vacuum every clean"),mop_quick:(t,o,e)=>t("v4_room_schedules_mop_quick","Mop every {mop} cleans \xB7 Quick vacuum every {cov} cleans",{mop:o,cov:e}),mop_quick_one_mop:(t,o,e)=>t("v4_room_schedules_mop_quick_one_mop","Mop every clean \xB7 Quick vacuum every {cov} cleans",{cov:e}),mop_quick_one_cov:(t,o)=>t("v4_room_schedules_mop_quick_one_cov","Mop every {mop} cleans \xB7 Quick vacuum every clean",{mop:o}),mop_quick_one_both:t=>t("v4_room_schedules_mop_quick_one_both","Mop every clean \xB7 Quick vacuum every clean"),mop_optimal:(t,o,e)=>t("v4_room_schedules_mop_optimal","Mop every {mop} cleans \xB7 Optimal vacuum every {cov} cleans",{mop:o,cov:e}),mop_optimal_one_mop:(t,o,e)=>t("v4_room_schedules_mop_optimal_one_mop","Mop every clean \xB7 Optimal vacuum every {cov} cleans",{cov:e}),mop_optimal_one_cov:(t,o)=>t("v4_room_schedules_mop_optimal_one_cov","Mop every {mop} cleans \xB7 Optimal vacuum every clean",{mop:o}),mop_optimal_one_both:t=>t("v4_room_schedules_mop_optimal_one_both","Mop every clean \xB7 Optimal vacuum every clean"),mop_heavy:(t,o,e)=>t("v4_room_schedules_mop_heavy","Mop every {mop} cleans \xB7 Heavy duty vacuum every {cov} cleans",{mop:o,cov:e}),mop_heavy_one_mop:(t,o,e)=>t("v4_room_schedules_mop_heavy_one_mop","Mop every clean \xB7 Heavy duty vacuum every {cov} cleans",{cov:e}),mop_heavy_one_cov:(t,o)=>t("v4_room_schedules_mop_heavy_one_cov","Mop every {mop} cleans \xB7 Heavy duty vacuum every clean",{mop:o}),mop_heavy_one_both:t=>t("v4_room_schedules_mop_heavy_one_both","Mop every clean \xB7 Heavy duty vacuum every clean")},bt=(t,o,e)=>{let s=e?.mopEveryN??null,a=e?.coverageEveryN??null;if(s===null&&a===null)return null;let n=e?.periodicCoverageSetting,r=n==="quick"?"quick":n==="heavy_duty"?"heavy":"optimal",d=s===null?`${r}${a===1?"_one":""}`:a===null?`mop${s===1?"_one":""}`:`mop_${r}${s===1&&a===1?"_one_both":s===1?"_one_mop":a===1?"_one_cov":""}`,c=Qt[d];return c?c(t,s===null?"":T(o,s),a===null?"":T(o,a)):null};var ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yt=t=>(...o)=>({_$litDirective$:t,values:o}),we=class{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,e,s){this._$Ct=o,this._$AM=e,this._$Ci=s}_$AS(o,e){return this.update(o,e)}update(o,e){return this.render(...e)}};var{I:Xt}=Ge,$t=t=>t;var wt=()=>document.createComment(""),ee=(t,o,e)=>{let s=t._$AA.parentNode,a=o===void 0?t._$AB:o._$AA;if(e===void 0){let n=s.insertBefore(wt(),a),r=s.insertBefore(wt(),a);e=new Xt(n,r,t,t.options)}else{let n=e._$AB.nextSibling,r=e._$AM,d=r!==t;if(d){let c;e._$AQ?.(t),e._$AM=t,e._$AP!==void 0&&(c=t._$AU)!==r._$AU&&e._$AP(c)}if(n!==a||d){let c=e._$AA;for(;c!==n;){let m=$t(c).nextSibling;$t(s).insertBefore(c,a),c=m}}}return e},j=(t,o,e=t)=>(t._$AI(o,e),t),Zt={},kt=(t,o=Zt)=>t._$AH=o,xt=t=>t._$AH,ke=t=>{t._$AR(),t._$AA.remove()};var St=(t,o,e)=>{let s=new Map;for(let a=o;a<=e;a++)s.set(t[a],a);return s},Ct=yt(class extends we{constructor(t){if(super(t),t.type!==ft.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,o,e){let s;e===void 0?e=o:o!==void 0&&(s=o);let a=[],n=[],r=0;for(let d of t)a[r]=s?s(d,r):r,n[r]=e(d,r),r++;return{values:n,keys:a}}render(t,o,e){return this.dt(t,o,e).values}update(t,[o,e,s]){let a=xt(t),{values:n,keys:r}=this.dt(o,e,s);if(!Array.isArray(a))return this.ut=r,n;let d=this.ut??=[],c=[],m,u,p=0,v=a.length-1,g=0,h=n.length-1;for(;p<=v&&g<=h;)if(a[p]===null)p++;else if(a[v]===null)v--;else if(d[p]===r[g])c[g]=j(a[p],n[g]),p++,g++;else if(d[v]===r[h])c[h]=j(a[v],n[h]),v--,h--;else if(d[p]===r[h])c[h]=j(a[p],n[h]),ee(t,c[h+1],a[p]),p++,h--;else if(d[v]===r[g])c[g]=j(a[v],n[g]),ee(t,a[p],a[v]),v--,g++;else if(m===void 0&&(m=St(r,g,h),u=St(d,p,v)),m.has(d[p]))if(m.has(d[v])){let b=u.get(r[g]),f=b!==void 0?a[b]:null;if(f===null){let _=ee(t,a[p]);j(_,n[g]),c[g]=_}else c[g]=j(f,n[g]),ee(t,a[p],f),a[b]=null;g++}else ke(a[v]),v--;else ke(a[p]),p++;for(;g<=h;){let b=ee(t,c[h+1]);j(b,n[g]),c[g++]=b}for(;p<=v;){let b=a[p++];b!==null&&ke(b)}return this.ut=r,kt(t,c),Ue}});var F=class{constructor(o,e,s){this.host=o;this.root=e;this.launcher=s;this.open=!1;this.#s=!1;this.keydown=o=>{if(!this.open)return;if(o.key==="Escape"){o.preventDefault(),this.close(!0);return}let e=[...this.host.renderRoot.querySelectorAll(`${this.root} [role^=menuitem]`)],s=e.indexOf(o.composedPath()[0]),a=o.key==="ArrowDown"?s+1:o.key==="ArrowUp"?s-1:o.key==="Home"?0:o.key==="End"?e.length-1:null;a===null||s<0||!e.length||(o.preventDefault(),e[(a+e.length)%e.length]?.focus())};this.focusout=o=>{let e=o.relatedTarget;e&&!o.currentTarget.contains(e)&&this.#a(!1)};this.#t=o=>{let e=this.host.renderRoot.querySelector(this.root);this.open&&e&&!o.composedPath().includes(e)&&this.#a(!1)};o.addController(this)}hostConnected(){window.addEventListener("pointerdown",this.#t,!0)}hostDisconnected(){window.removeEventListener("pointerdown",this.#t,!0)}hostUpdated(){this.#s&&(this.#s=!1,this.host.renderRoot.querySelector(`${this.root} [role^=menuitem]`)?.focus())}#s;#a(o){o!==this.open&&(this.open=o,this.#s=o,this.host.requestUpdate())}toggle(){this.#a(!this.open)}close(o){this.#a(!1),o&&this.host.renderRoot.querySelector(`${this.root} ${this.launcher}`)?.focus()}#t};var Yt=["mop_progress_unverified","coverage_progress_unverified","identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy","coverage_requires_vacuum"],ze=class extends L{constructor(){super(...arguments);this._moved="";this.#s=null;this.#a=new Map;this.#t=new F(this,".room-more","> button");this.state=z();this.#e=(e,s,a)=>I(this.localize,e,s,a)}static{this.styles=[N,A,W,it,P`
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
`]}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_moved:{state:!0}}}#s;#a;#t;#e;#n(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#o(e){return T(this.state.locale,e)}#l(e){return e.length?i`<span class="lines">${e.map(s=>i`<span class="line">${k(le)}<span>${s}</span></span>`)}</span>`:l}#r(e,s){let a=at(this.#e,this.state.locale,e),n=ot(this.#e,this.state.locale,e),r=n===null?l:"blocked"in n?i`<span class="lines"><span class="line" data-tone="warning">${k(q)}<span>${n.blocked}</span></span></span>`:this.#l(n.due),d=this.#e("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return i`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${e.id}
        aria-describedby=${s?"default-hint":l}
        @click=${()=>this.#n({type:"select-plan",planId:e.id})}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${e.name}</bdi>${s?i`<span class="ms-chip chip-default" title=${d}>${this.#e("v4_plan_default","Default")}</span>`:l}${e.enabled?l:i`<span class="ms-chip">${this.#e("v4_paused","Paused")}</span>`}</strong>
          <small>${a}</small>
          ${r}
        </span>
        <span class="ms-row__trail">${k(G)}</span>
      </button>
      ${s?i`<span class="sr-only" id="default-hint">${d}</span>`:l}
    </li>`}#c(){let e=this.state.resources.plans.value,s=this.#e("v4_create_plan","Create a plan");if(!e?.plans.length)return i`<div class="empty-card">
        <h3>${this.#e("v4_no_plans","No plans yet")}</h3>
        <p>${this.#e("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#n({type:"select-plan",planId:null})}>${s}</button>
      </div>`;let a=[...e.plans].sort((n,r)=>+(r.id===e.selectedPlan)-+(n.id===e.selectedPlan));return i`<ul class="plain">
      ${a.map(n=>this.#r(n,n.id===e.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#n({type:"select-plan",planId:null})}>
        <span class="ms-row__lead">${k(ve)}</span>
        <span class="ms-row__body"><strong>${s}</strong></span>
      </button></li>
    </ul>`}#d(){let e=this.state;return e.pendingAction==="save-plan"?this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):e.pendingAction==="run-plan"?this.#e("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):ae(e)?this.#e("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#e("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):Ve(e)?null:this.#e("v4_reason_save_plan_map","Waiting for the map to be ready.")}#h(){let e=this.state.planDraft.enabled,s=this.#d();return i`
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
    `}#p(e,s,a,n={}){return i`<li class="run-row" ?data-break=${n.part!==void 0}>
      ${n.part===void 0?l:i`<span class="sr-only">${this.#e("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#o(n.part)})}</span>`}
      ${a===null?l:i`<span class="pos-badge" aria-hidden="true">${this.#o(a)}</span>`}
      <span class="row-lines">
        <bdi>${e}</bdi>
        <small>${s}</small>
        ${n.blocked?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
      </span>
    </li>`}#g(){let e=this.state,s=e.planDraft,a=e.resources.plans.value,n=a?.plans.find(C=>C.id===s.id);if(!a||!n)return l;let r=n.nextRunPreview,d=r?.blocker??null,c=!s.enabled,m=!c&&!!(r&&!d&&/^[0-9a-f]{64}$/u.test(r.previewToken??"")),u=n.runBehavior==="ordered",p=m&&r?r.rooms:[],v=!c&&d?Ke(e,n)?.jump.roomId??null:null,g=c||m||v||e.pendingAction==="save-plan"?null:d&&je[d]||Be,h=m?p.length:n.rooms.length,b=m?n.nextRunEstimateSeconds:null,f=b===null?"":this.#o(Math.max(1,Math.round(b/60))),_=b===null?h===1?this.#e("v4_plan_summary_rooms_one","1 room"):this.#e("v4_plan_summary_rooms","{count} rooms",{count:this.#o(h)}):h===1?this.#e("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:f}):this.#e("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#o(h),minutes:f}),x=m&&r?r.missionBoundaries:[],R=m?p.map((C,M)=>{let K=x.indexOf(M);return this.#p(C.name,Z(this.#e,C),u?M+1:null,K<0?{}:{part:K+2})}):Oe(n).rooms.map(C=>this.#p(a.rooms.find(M=>M.roomId===C.roomId)?.name??C.roomId,Z(this.#e,C),null,{blocked:C.roomId===v})),$=s.finishCurrentRoom?this.#e("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#o(s.finishCurrentRoomThreshold)}):s.returnToBase?this.#e("v4_plan_summary_return","Returns to the dock when finished"):null;return i`
      <p class="summary">${_}</p>
      ${this.#l(ge(this.#e,e.locale,p))}
      <h3 class="heading">${c?this.#e("v4_plan_rooms_heading","Rooms in this plan"):e.resources.entry?.activePlan?this.#e("v4_next_run_after_active","After this run"):this.#e("v4_next_run_preview","Next run")}</h3>
      ${m&&!u?i`<p class="quiet">${this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}</p>`:l}
      ${x.length?i`<p class="quiet">${this.#e("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:this.#o(x.length+1)})}</p>`:l}
      ${g?i`<p class="problem">${this.#e(g.reasonKey,g.reason)}</p>
        <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"open-workflow",workflow:"plan"})}>${this.#e("v4_retry","Try again")}</button>`:l}
      ${m&&u?i`<ol class="run-list" role="list">${R}</ol>`:i`<ul class="run-list" role="list">${R}</ul>`}
      ${this.#h()}
      ${$?i`<p class="quiet">${$}</p>`:l}
    `}willUpdate(e){e.has("state")&&(this.state.workflow!=="plan"||this.state.planView!=="edit")&&(this._moved="");let s=e.get("state");s&&(s.expandedRoom!==this.state.expandedRoom||this.state.planView!=="edit"||this.state.dialog||this.#m())&&(this.#t.open=!1),s&&(s.planDraft.id!==this.state.planDraft.id||s.workflow!==this.state.workflow||this.state.planView!=="edit")&&this.#a.clear()}updated(e){!this.#s||!e.has("state")||(this.renderRoot.querySelector(`[data-move="${CSS.escape(this.#s)}"]`)?.focus(),this.#s=null)}#m(){return this.state.pendingAction==="save-plan"?"edit-held":null}#i(e){this.#m()||this.#n({type:"patch-plan-draft",patch:e})}#v(e,s){this.#i({rooms:this.state.planDraft.rooms.map((a,n)=>n===e?{...a,...s}:a)})}#u(e,s,a,n){let r=[...this.state.planDraft.rooms],d=e+s;if(this.#m()||d<0||d>=r.length)return;let[c]=r.splice(e,1);c&&(r.splice(d,0,c),this.#s=n,this._moved=this.#e("v4_room_moved","{room} moved to position {position}",{room:a,position:this.#o(d+1)}),this.#n({type:"patch-plan-draft",patch:{rooms:r}}))}#_(e){return{disabled:e?"true":l,described:e??l}}#b(e,s,a,n,r,d){let c=`${e.roomId}:${n<0?"up":"down"}`,m=n<0?this.#e("move_room_up","Move {room} earlier",{room:a}):this.#e("move_room_down","Move {room} later",{room:a}),u=n<0?this.#e("v4_room_already_first","{room} is already first",{room:a}):this.#e("v4_room_already_last","{room} is already last",{room:a}),p=r?`${c}-end`:d;return i`<button
        class="ms-btn ms-btn--icon"
        type="button"
        data-move=${c}
        aria-label=${m}
        title=${r?u:m}
        aria-disabled=${r||d?"true":l}
        aria-describedby=${p??l}
        @click=${()=>{r||this.#u(s,n,a,c)}}
      >${k(n<0?Ye:Je)}</button>
      ${r?i`<span class="sr-only" id=${`${c}-end`}>${u}</span>`:l}`}#y(e,s,a,n,r,d,c){let m=this.state.planDraft,u=a!==null&&this.state.expandedRoom===e,p=m.rooms.length-1,v=this.#_(c),g=a===null&&d,h=a?bt(this.#e,this.state.locale,a.cadence):null,b=a?.cadenceReasons?.some(_=>Yt.includes(_)),f=!!a?.cadence?.mopEveryN;return i`<li class="ms-row edit-row" data-selected=${a?"true":l}>
      <label class="edit-check"><input
        type="checkbox"
        .checked=${a!==null}
        aria-label=${this.#e("v4_room_include_named","Include {room}",{room:s})}
        aria-disabled=${c||g?"true":l}
        aria-describedby=${c??(g?"room-limit":l)}
        @click=${_=>{(c||g)&&_.preventDefault()}}
        @change=${()=>this.#n({type:"toggle-room",roomId:e})}
      ></label>
      ${a?i`<button
          class="edit-disclosure"
          type="button"
          data-room-disclosure=${e}
          aria-expanded=${String(u)}
          aria-label=${this.#e("v4_room_settings_named","Settings for {room}",{room:s})}
          aria-disabled=${v.disabled}
          aria-describedby=${v.described}
          @click=${()=>{c||this.#n({type:"set-plan-view",view:"edit",roomId:u?null:e})}}
        >
          ${r?i`<span class="pos-badge" aria-hidden="true">${this.#o(n+1)}</span>`:l}
          <span class="row-lines">
            <bdi>${s}</bdi>
            <small>${Z(this.#e,a)}</small>
            ${h?i`<small>${h}</small>`:l}
            ${b?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
          </span>
          ${k(G)}
        </button>`:i`<span class="edit-name"><bdi>${s}</bdi></span>`}
      ${a&&r?i`<span class="edit-moves">
        ${this.#b(a,n,s,-1,n===0,c)}
        ${this.#b(a,n,s,1,n===p,c)}
      </span>`:i`<span></span>`}
      ${u&&a?i`<div class="row-expanded">
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select
              aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:s})}
              aria-disabled=${v.disabled}
              aria-describedby=${[c,f?"mode-reason":null].filter(Boolean).join(" ")||l}
              .value=${a.cleaningMode}
              @change=${_=>{let x=_.currentTarget;c?x.value=a.cleaningMode:this.#v(n,{cleaningMode:x.value})}}
            >${Q.map(_=>i`<option value=${_} ?selected=${_===a.cleaningMode} ?disabled=${f&&_!=="vacuum"}>${X(this.#e,_)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select
              aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:s})}
              aria-disabled=${v.disabled}
              aria-describedby=${v.described}
              ?disabled=${a.cleaningMode==="mop"}
              .value=${a.coverageSetting}
              @change=${_=>{let x=_.currentTarget;c?x.value=a.coverageSetting:this.#v(n,{coverageSetting:x.value})}}
            >${V.map(_=>i`<option value=${_} ?selected=${_===a.coverageSetting}>${B(this.#e,_)}</option>`)}</select>
          </label>
        </div>
        ${f?i`<p class="sched-status sched-reason" id="mode-reason">${k(q)}<span>${this.#e("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</span></p>`:l}
        ${a.cleaningMode==="vacuum"?l:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
        ${_t({t:this.#e,state:this.state,intent:_=>this.#n(_),held:c,offLevel:this.#a.get(e)??null,setOffLevel:_=>{_?this.#a.set(e,_):this.#a.delete(e),this.requestUpdate()},menu:this.#t},a,n,s)}
      </div>`:l}
    </li>`}#f(e,s,a,n,r,d){let c=[a?`${e}-hint`:"",r??""].filter(Boolean).join(" ");return i`<div class="switch-row">
      <span class="switch-copy">
        <span id=${`${e}-label`}>${s}</span>
        ${a?i`<small id=${`${e}-hint`}>${a}</small>`:l}
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(n)}
        aria-labelledby=${`${e}-label`}
        aria-describedby=${c||l}
        aria-disabled=${r?"true":l}
        @click=${()=>{r||d(!n)}}
      ></button>
    </div>`}#$(){let e=this.state,s=e.planDraft,a=e.resources.plans.value;if(!a)return l;let n=this.#m(),r=this.#_(n),d=s.runBehavior==="ordered",c=s.rooms.length>=100,m=h=>a.rooms.find(b=>b.roomId===h)?.name??h,u=[...s.rooms.map((h,b)=>({roomId:h.roomId,room:h,index:b})),...a.rooms.filter(h=>!s.rooms.some(b=>b.roomId===h.roomId)).map(h=>({roomId:h.roomId,room:null,index:-1}))],p=s.finishCurrentRoomThreshold,v=this.#o(p),g=(h,b)=>i`<button
      class="ms-btn"
      type="button"
      aria-pressed=${String(s.runBehavior===h)}
      aria-disabled=${r.disabled}
      aria-describedby=${r.described}
      @click=${()=>this.#i({runBehavior:h})}
    >${b}</button>`;return i`<div class="edit">
      ${n?i`<p class="reason" id="edit-held">${this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:l}
      <label class="field ms-field">${this.#e("plan_name","Plan name")}
        <input
          maxlength="128"
          autocomplete="off"
          ?readonly=${!!n}
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
        <small>${this.#e("v4_plan_rooms_selected","{selected} of {total} selected",{selected:this.#o(s.rooms.length),total:this.#o(a.rooms.length)})}</small>
      </div>
      ${c?i`<p class="reason" id="room-limit">${this.#e("v4_plan_room_limit","Can't add more rooms until you remove one; a plan holds up to {limit}.",{limit:this.#o(100)})}</p>`:l}
      <ul class="plain" role="list" aria-labelledby="edit-rooms">
        ${Ct(u,h=>h.roomId,h=>this.#y(h.roomId,m(h.roomId),h.room,h.index,d,c,n))}
      </ul>
      <span class="sr-only" role="status">${this._moved}</span>
      <details class="run-end">
        <summary>${this.#e("v4_run_end_options","When a run ends")}</summary>
        ${this.#f("return-dock",this.#e("v4_plan_return_to_dock","Return to the dock when finished"),null,s.returnToBase,n,h=>this.#i({returnToBase:h}))}
        ${this.#f("finish-room",this.#e("v4_plan_finish_room","Finish the current room when you press Stop"),this.#e("v4_plan_finish_room_hint","Only if the room is at least {percent}% done; otherwise the robot stops right away.",{percent:v}),s.finishCurrentRoom,n,h=>this.#i({finishCurrentRoom:h}))}
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
            @input=${h=>{let b=h.currentTarget;n?b.value=String(p):this.#i({finishCurrentRoomThreshold:Number(b.value)})}}
          >
        </div>`:l}
      </details>
    </div>`}render(){let{workflow:e,planView:s}=this.state;return e==="plans"?this.#c():e!=="plan"?l:s==="run"?this.#g():this.#$()}};customElements.get(D)||customElements.define(D,ze);var Rt=["mop_due","coverage_due"],xe=(t,o)=>t.resources.plans.value?.rooms.find(e=>e.roomId===o)?.name??null,Et=(t,o)=>o.flatMap(e=>{let s=xe(t,e);return s===null?[]:[s]}),Jt=t=>Et(t,t.selection.roomIds),es=(t,o)=>{let e=Jt(o);return e.length===0?null:t("v4_rooms_selected_names","{count} selected \xB7 {rooms}",{count:T(o.locale,e.length),rooms:he(o.locale,e)})},ts=(t,o)=>{let e=Re(o)?.preview,s=Et(o,e?e.rooms.map(n=>n.roomId):o.selection.roomIds);if(s.length===0)return"";let a=s.length<=3?he(o.locale,s):he(o.locale,[...s.slice(0,2),t("v4_rooms_more","{count} more",{count:T(o.locale,s.length-2)})]);return t("v4_clean_rooms_summary","{rooms}, then back to the dock",{rooms:a})},ss=(t,o,e,s)=>{let a=xe(e,s)??xe(o,s);if(a===null)return null;if(!Ee(o))return ae(o)?t("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):t("v4_reason_clean_rooms_verification","Waiting for the map to be ready.");let n=o.selection.roomIds.includes(s),r=e.selection.roomIds.includes(s);return n===r?null:r?t("v4_room_added","{room} added",{room:a}):t("v4_room_removed","{room} removed",{room:a})},as=t=>t.currentTarget.value,Le=class extends L{constructor(){super(...arguments);this.state=z();this._open=null;this.#s=(e,s,a)=>I(this.localize,e,s,a);this.#t=e=>{if(e.key!=="Escape"||this._open===null||st(e)||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;let s=e.composedPath(),a=s[0],n=a instanceof HTMLElement&&a.getAttribute("aria-haspopup")==="menu"&&a.getAttribute("aria-expanded")!=="true";if(!s.includes(this)&&!n)return;e.preventDefault();let r=this._open==="settings"?'[data-disclosure="settings"]':`[data-room-disclosure="${CSS.escape(this._open)}"]`;this._open=null,this.updateComplete.then(()=>this.renderRoot.querySelector(r)?.focus())}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[N,A,W,P`
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
`]}#s;#a(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this._open&&this._open!=="settings"&&!this.state.selection.roomIds.includes(this._open)&&(this._open=null)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.#t,!0)}disconnectedCallback(){window.removeEventListener("keydown",this.#t,!0),super.disconnectedCallback()}#t;#e(e){this._open=this._open===e?null:e}#n(e,s,a){return n=>{if(e){n.currentTarget.value=s;return}a(as(n))}}#o(...e){let s=e.filter(a=>!!a);return s.length?s.join(" "):l}#l(e,s,a){let n=this.#s,r=this._open==="settings",d=e.selection.cleaningMode,c=e.selection.coverageSetting,u=e.selection.roomSettings.some(g=>e.selection.roomIds.includes(g.roomId)&&(g.cleaningMode!==d||g.coverageSetting!==c))?n("v4_settings_mixed","Different per room"):Z(n,{cleaningMode:d,coverageSetting:c}),p=d==="mop",v=s!==null;return i`
      <div class="ms-row settings-row">
        <button
          class="ms-disclosure"
          type="button"
          data-disclosure="settings"
          aria-expanded=${String(r)}
          aria-controls="clean-settings"
          @click=${()=>this.#e("settings")}
        ><span>${n("v4_clean_settings","Cleaning settings")}</span><span class="ms-disclosure__value">${u}</span>${k(G)}</button>
        ${r?i`
          <div id="clean-settings" class="settings-body">
            <div class="split">
              <label class="ms-field">${n("v4_cleaning_system","Cleaning mode")}
                <select
                  class="ms-select"
                  aria-disabled=${v?"true":l}
                  aria-describedby=${this.#o(s)}
                  .value=${d}
                  @change=${this.#n(v,d,g=>this.#a({type:"set-clean-settings",cleaningMode:g}))}
                >${Q.map(g=>i`<option value=${g} ?selected=${g===d}>${X(n,g)}</option>`)}</select>
              </label>
              <label class="ms-field">${n("vacuum_coverage","Vacuum coverage")}
                <select
                  class="ms-select"
                  aria-disabled=${v||p?"true":l}
                  aria-describedby=${this.#o(p&&"clean-mop-hint",s)}
                  .value=${c}
                  @change=${this.#n(v||p,c,g=>this.#a({type:"set-clean-settings",coverageSetting:g}))}
                >${V.map(g=>i`<option value=${g} ?selected=${g===c}>${B(n,g)}</option>`)}</select>
              </label>
            </div>
            ${p?i`<p class="hint" id="clean-mop-hint">${n("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:l}
            ${a?i`
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
                  aria-describedby=${this.#o("due-hint",s)}
                  aria-disabled=${v?"true":l}
                  @click=${()=>{v||this.#a({type:"set-use-room-schedule",value:!e.selection.useRoomSchedule})}}
                ></button>
              </div>
            `:l}
          </div>
        `:l}
      </div>
    `}#r(e,s,a,n){let r=this.#s,d=e.manualRoomPreview.status==="error",c=s?ge(r,e.locale,s):[],m=n===null?null:n==="invalid_cadence_policy"&&e.selection.useRoomSchedule&&e.selection.roomSettings.some(u=>u.cleaningMode!=="vacuum")?r("v4_room_preview_schedule_override",`The room schedule can't use the cleaning mode you chose. Turn off "Include scheduled work that's due", or choose another mode.`):r("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.");return!c.length&&!a&&!d&&!m?l:i`
      <div class="check-lines">
        ${c.map(u=>i`<p class="line" data-tone="due">${k(le)}<span>${u}</span></p>`)}
        ${a?i`<p class="line" data-tone="info">${k(le)}<span>${r("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:T(e.locale,a+1)})}</span></p>`:l}
        ${d?i`
          <p class="line" data-tone="warning">${k(q)}<span>${r("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</span>
            <button class="ms-btn ms-btn--sm ms-btn--secondary" type="button" @click=${()=>this.#a({type:"retry-room-preview"})}>${r("v4_retry","Try again")}</button>
          </p>
        `:l}
        ${m?i`<p class="line" data-tone="warning">${k(q)}<span>${m}</span></p>`:l}
      </div>
    `}#c(e,s,a,n,r,d){let c=this.#s,m=e.selection.roomIds.includes(s.roomId),u=e.selection.roomSettings.find($=>$.roomId===s.roomId)??{roomId:s.roomId,cleaningMode:e.selection.cleaningMode,coverageSetting:e.selection.coverageSetting},p=r&&!m,v=n!==null,g=e.manualRoomPreview.status==="loading",h=d?.cadenceReasons??s.sharedCadenceReasons??s.sharedCadenceProgress?.reasons??[],b=m?mt(c,h):null,f=this._open===s.roomId,_=`room-settings-${a}`,x=`room-mop-hint-${a}`,R=u.cleaningMode==="mop";return i`
      <div class="ms-row room-row">
        <label class="ms-check">
          <input
            type="checkbox"
            .checked=${m}
            aria-disabled=${v||p?"true":l}
            aria-describedby=${this.#o(n??(p&&"rooms-limit"))}
            @click=${$=>{(v||p)&&$.preventDefault()}}
            @change=${()=>this.#a({type:"toggle-room",roomId:s.roomId})}
          >
          <span class="row-lines">
            <bdi>${s.name}</bdi>
            ${m?i`<small>${g?c("v4_room_preview_loading","Checking settings\u2026"):Z(c,d??u)}</small>`:l}
            ${b?i`<small class="problem-line">${k(q)}<span>${b}</span></small>`:l}
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
          >${k(f?Qe:Xe)}</button>
        `:l}
        ${f?i`
          <div class="row-expanded" id=${_}>
            <div class="split">
              <label class="ms-field">${c("v4_cleaning_system","Cleaning mode")}
                <select
                  class="ms-select"
                  aria-label=${c("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:s.name})}
                  aria-disabled=${v?"true":l}
                  aria-describedby=${this.#o(n)}
                  .value=${u.cleaningMode}
                  @change=${this.#n(v,u.cleaningMode,$=>this.#a({type:"patch-room-settings",roomId:s.roomId,cleaningMode:$}))}
                >${Q.map($=>i`<option value=${$} ?selected=${$===u.cleaningMode}>${X(c,$)}</option>`)}</select>
              </label>
              <label class="ms-field">${c("vacuum_coverage","Vacuum coverage")}
                <select
                  class="ms-select"
                  aria-label=${c("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:s.name})}
                  aria-disabled=${v||R?"true":l}
                  aria-describedby=${this.#o(R&&x,n)}
                  .value=${u.coverageSetting}
                  @change=${this.#n(v||R,u.coverageSetting,$=>this.#a({type:"patch-room-settings",roomId:s.roomId,coverageSetting:$}))}
                >${V.map($=>i`<option value=${$} ?selected=${$===u.coverageSetting}>${B(c,$)}</option>`)}</select>
              </label>
            </div>
            ${R?i`<p class="hint" id=${x}>${c("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:l}
          </div>
        `:l}
      </div>
    `}render(){let e=this.#s,s=this.state,a=s.resources.plans.value?.rooms??[],n=a.length===0,r=ae(s),d=!Ee(s),c=d?r?"rooms-description":"rooms-held":null,m=s.selection.roomIds.length,u=m>=100,p=Re(s)?.preview??null,v=p?p.rooms.map(f=>({...f,name:xe(s,f.roomId)??f.name})):null,g=f=>v?.find(_=>_.roomId===f)??null,h=(v??[]).some(f=>f.cadenceReasons.some(_=>Rt.includes(_)))||a.some(f=>s.selection.roomIds.includes(f.roomId)&&(f.sharedCadenceProgress?.mopDue||f.sharedCadenceProgress?.coverageDue||(f.sharedCadenceReasons??f.sharedCadenceProgress?.reasons??[]).some(_=>Rt.includes(_)))),b=r?e("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):n?e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here."):e("v4_choose_rooms_detail","Choose rooms on the map or in the list.");return i`
      <div class="stack">
        <p class="description" id="rooms-description">${b}</p>
        ${d&&!r?i`<span class="sr-only" id="rooms-held">${e("v4_reason_clean_rooms_verification","Waiting for the map to be ready.")}</span>`:l}
        ${n?l:i`
          <div class="list-header">
            <h3 class="ms-section-heading" id="rooms-heading">${e("v4_rooms_to_clean","Rooms to clean")}</h3>
            ${m?i`
              <small>${e("v4_rooms_selected","{count} selected",{count:T(s.locale,m)})}</small>
              <button
                class="ms-btn ms-btn--sm ms-btn--secondary clear"
                type="button"
                aria-disabled=${d?"true":l}
                aria-describedby=${this.#o(c)}
                @click=${()=>{d||this.#a({type:"clear-selection"})}}
              >${e("v4_clear","Clear")}</button>
            `:l}
          </div>
          ${u?i`<p class="limit" id="rooms-limit">${e("v4_room_limit_reached","Up to {limit} rooms fit in one clean, so remove one to add another.",{limit:100})}</p>`:l}
          ${this.#l(s,c,h)}
          ${this.#r(s,v,p?.missionBoundaries.length??0,p?.blocker??null)}
          <div class="room-list" role="group" aria-labelledby="rooms-heading">
            ${a.map((f,_)=>this.#c(s,f,_,c,u,g(f.roomId)))}
          </div>
        `}
      </div>
    `}};customElements.get(ie)||customElements.define(ie,Le);var Ne=class extends L{constructor(){super(...arguments);this.state=z();this.compact=!1;this.inline=!1}static{this.properties={state:{attribute:!1},localize:{attribute:!1},compact:{type:Boolean,reflect:!0},inline:{type:Boolean,reflect:!0}}}static{this.styles=[N,A,W,P`
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
`]}#s(e,s){return I(this.localize,e,s)}#a(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#t(e){let s=e.currentTarget.valueAsNumber;Number.isFinite(s)&&this.#a({type:"set-brush",value:s})}render(){let{draw:e}=this.state;return i`
      <div class="controls ms-surface ms-surface--overlay" role="group" aria-label=${this.#s("v4_drawing_precision","Drawing precision")}>
        <div class="row ms-field">
          <label for="brush">${this.#s("brush_size","Brush width")}</label>
          <div class="stepper">
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#s("v4_narrower_brush","Narrower brush")}
              @click=${()=>this.#a({type:"set-brush",value:e.brushMeters/1.25})}
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
              @click=${()=>this.#a({type:"set-brush",value:e.brushMeters*1.25})}
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
    `}};customElements.get(Te)||customElements.define(Te,Ne);var Ae=class extends L{constructor(){super(...arguments);this.state=z();this.#t=new F(this,".more","> button")}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[N,A,W,P`
:host { display: contents; }
.more { position: relative; margin-inline-start: auto; }
.more > .ms-btn { transition: none; }
.reason { flex-basis: 100%; margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: end; }
.menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.menu .reason { padding: var(--ms-space-1) var(--ms-space-3); text-align: start; }
`]}#s(e,s,a){return I(this.localize,e,s,a)}#a(e,s=this){s.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#t;willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this.#t.open=!1)}#e(){let{command:e,pendingAction:s,planDraft:a}=this.state;return s==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):a.dirty?this.#s("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes."):e==="pending"?this.#s("v4_reason_robot_operation_waiting","Waiting for the robot to finish what it's doing."):null}#n(e){if(this.#e())return;let s=e.currentTarget.closest(".more")?.querySelector("button");this.#t.close(!1),this.#a({type:"open-dialog",dialog:"confirmDeletePlan"},s??this)}render(){let{planView:e,planDraft:s,pendingAction:a}=this.state;if(e==="run"){let r=a==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):a==="run-plan"?this.#s("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return i`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#s("v4_edit_plan_named","Edit {plan}",{plan:s.name})}
          aria-disabled=${r?"true":l}
          aria-describedby=${r?"edit-reason":l}
          @click=${()=>{r||this.#a({type:"set-plan-view",view:"edit"})}}
        >${this.#s("v4_edit","Edit")}</button>
        ${r?i`<p class="reason" id="edit-reason">${r}</p>`:l}
      `}if(!J(this.state,"confirmDeletePlan"))return l;let n=this.#e();return i`
      <div class="more" @keydown=${this.#t.keydown} @focusout=${this.#t.focusout}>
        <button
          class="ms-btn ms-btn--icon"
          type="button"
          aria-label=${this.#s("v4_more_actions","More actions")}
          aria-haspopup="menu"
          aria-expanded=${String(this.#t.open)}
          data-dialog-launcher="confirmDeletePlan"
          @click=${()=>this.#t.toggle()}
        >${k(pe)}</button>
        ${this.#t.open?i`
          <div class="menu ms-surface ms-surface--overlay" @mousedown=${r=>r.preventDefault()}>
            <div role="menu" aria-label=${this.#s("v4_more_actions","More actions")}><button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitem"
              tabindex="-1"
              aria-disabled=${n?"true":l}
              aria-describedby=${n?"delete-reason":l}
              @click=${this.#n}
            >${this.#s("plan_delete","Delete")}</button></div>
            ${n?i`<p class="reason" id="delete-reason">${n}</p>`:l}
          </div>
        `:l}
      </div>
    `}};customElements.get(re)||customElements.define(re,Ae);var os=(t,o,e)=>i`${t.planView==="run"?i`<bdi>${o}</bdi>`:o}${t.planDraft.dirty?i` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:l}`,Tt=oe(re),ns=(t,o,e)=>ne`<${Tt}
  .state=${t}
  .localize=${o}
  @matic-workspace-intent=${e}
></${Tt}>`,Mt=(t,o,e,s)=>{let a=s?.room;if(a===void 0)return t(o,e,s);let[n,r]=t(o,e,{...s,room:"\0"}).split("\0");return i`${n}<bdi>${a}</bdi>${r}`},rs=(t,o,e,s)=>{let a=e?o.jump:void 0;return i`${Mt(t,o.reasonKey??"",o.reason??"",o.reasonPlaceholders)}${a?i` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>s({type:"set-plan-view",view:"edit",roomId:a.roomId})}
  >${Mt(t,a.labelKey,a.label,a.labelPlaceholders)}</button>`:l}`},is=(t,o,e,s)=>{let a=t.pendingAction==="save-plan",n=o?.id==="save-plan"?"primary-reason":"cancel-reason";return i`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      aria-disabled=${a?"true":l}
      aria-describedby=${a?n:l}
      @click=${r=>{a||s(t.planDraft.id?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"},r.currentTarget)}}
    >${e("v4_cancel","Cancel")}</button>
    ${a&&n==="cancel-reason"?i`<p class="action-reason" id=${n}>${e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:l}
    ${o?l:i`<p class="action-summary">${e("v4_plan_save_after_work","You can save when the robot finishes.")}</p>`}
  `},ls=(t,o,e)=>{let s=e.querySelector(U)?.shadowRoot?.querySelector(D)?.shadowRoot;if(o.workflow==="plan"&&o.planView==="edit"&&o.expandedRoom)return s?.querySelector(`[data-room-disclosure="${CSS.escape(o.expandedRoom)}"]`);if(o.workflow==="plan"&&t.planView==="edit")return e.querySelector(re)?.shadowRoot?.querySelector("button");let a=t.selection.planId;return o.workflow==="plans"&&a?s?.querySelector(`[data-plan-row="${CSS.escape(a)}"]`):null},cs=(t,o,e,s)=>{let a=ls(t,o,e);return s(a)?(a.scrollIntoView({block:"nearest"}),a.focus({preventScroll:!0}),!0):!1};var ds=(t,o,e)=>{let s=(u,p,v)=>I(e,u,p,v),a=J(o),n=o.cadenceResetRequest,r=o.resources.plans.value,d=n&&r?.rooms.find(u=>u.roomId===n.roomId)?.name||n?.roomId||"room",c=n?r?.plans.find(u=>u.id===n.planId)?.rooms.find(u=>u.roomId===n.roomId)?.cadence?.scope==="shared":!1,m=n?.mode??"mop";switch(t){case"confirmDeletePlan":return a&&{title:s("v4_delete_plan","Delete plan?"),detail:s("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:a.name}),...a.successor===void 0?{}:{consequence:a.successor===null?s("v4_delete_plan_none","You'll have no default plan."):s("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:a.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return a&&{title:s("v4_delete_area","Delete area?"),detail:s("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:a.name}),...a.successor===void 0?{}:{consequence:a.successor===null?s("v4_delete_area_none","No custom area will be selected."):s("v4_delete_area_selected","{area} becomes the selected custom area.",{area:a.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:m==="mop"?s("v4_reset_mop_cadence_title","Reset mopping progress?"):s("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:c?s("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}):s("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}),cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("v4_reset","Reset"),action:"reset-room-cadence"}}},ms=(t,o,e)=>{let s=t;if(!He(s.detail))return;if(De(o,s.detail)){t.stopPropagation(),e(s.detail);return}if(s.detail?.type!=="open-dialog")return;let a=s.composedPath().find(n=>n instanceof HTMLElement&&n.hasAttribute("data-dialog-launcher"));return a instanceof HTMLElement?a:void 0},us=(t,o,e,s)=>{let a=t.cadenceResetRequest;e({type:"dismiss-top-layer"}),o!=="reset-room-cadence"?s(o):a&&s({id:o,planId:a.planId,roomId:a.roomId,mode:a.mode})},ps=(t,o)=>{let e=t.cadenceResetRequest;return t.dialog!=="confirmResetCadence"||!e?null:o.querySelector(U)?.shadowRoot?.querySelector(D)?.shadowRoot?.querySelector(`[data-room-disclosure="${CSS.escape(e.roomId)}"]`)??null};var We=class{constructor(o){this.menu=new F(o,".overflow-wrap",".overflow")}render({state:o,narrow:e,browserFullscreen:s,t:a,intent:n,diagnostics:r,fullscreen:d}){let c=(u,p,v)=>i`
      <button class="ms-row ms-row--menu" type="button" role="menuitemradio" aria-checked=${String(u)} tabindex="-1" @click=${v}>${p}</button>
    `,m=(u,p)=>c(o.quality===u,p,()=>n({type:"set-quality",quality:u}));return i`
      <div id="map-options" class="overflow-menu ms-surface ms-surface--overlay" role="menu" aria-label=${a("v4_map_options","Map options")}>
        ${e?i`
          <div role="group" aria-labelledby="menu-display">
            <p class="menu-heading" id="menu-display" role="presentation">${a("v4_map_display","Map display")}</p>
            ${o.view==="top"?i`
              ${c(o.appearance==="photo",a("map_style_photo","Photo"),()=>n({type:"set-appearance",appearance:"photo"}))}
              ${c(o.appearance==="rooms",a("v4_room_colours","Room colors"),()=>n({type:"set-appearance",appearance:"rooms"}))}
            `:l}
            <button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitemcheckbox"
              aria-checked=${String(o.labelsVisible)}
              tabindex="-1"
              @click=${()=>n({type:"toggle-labels"})}
            ><span>${a("v4_room_names","Room names")}</span><span class="ms-switch" aria-checked=${String(o.labelsVisible)} aria-hidden="true"></span></button>
          </div>
        `:l}
        <div role="group" aria-labelledby="menu-detail">
          <p class="menu-heading" id="menu-detail" role="presentation">${a("map_quality_label","Map detail")}</p>
          ${m("auto",a("map_quality_auto","Auto detail"))}
          ${m("efficient",a("map_quality_efficient","Efficient"))}
          ${m("balanced",a("map_quality_balanced","Balanced"))}
          ${m("maximum",a("map_quality_maximum","Maximum"))}
        </div>
        <button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!1),r()}}>${a("v4_map_diagnostics","Map diagnostics")}</button>
        <button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!0),d()}}>${s?a("v4_leave_full_screen","Leave full screen"):a("v4_full_screen","Full screen")}</button>
      </div>
    `}};var Pt=oe(D),It=oe(ie),me=t=>t.currentTarget.value,qe=class extends L{constructor(){super(...arguments);this.state=z();this._historyPreviewPosition=null;this.#s=new et(this,()=>import("./diagnostics-panel-XQW6DZYX.js"));this.#a="";this.#o=(e,s,a)=>this.#t(e,s,a)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0}}}static{this.styles=[N,A,W,P`
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
`]}#s;#a;willUpdate(e){if(!e.has("state"))return;let{workflow:s,selection:a}=this.state,n=`${s}:${a.floorId}:${a.historyId??"live"}`;n!==this.#a&&(this.#a=n,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#t(e,s,a){return I(this.localize,e,s,a)}#e(e){return X(this.#o,e)}#n(e){return B(this.#o,e)}#o;#l(e){return e==="vacuum"?l:i`<p class="subtle">${this.#t("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#r(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#c(e){switch(e){case"rooms":case"plans":case"plan":return{loading:this.#t("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#t("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#t("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#t("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#t("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#t("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#t("v4_loading_history","Loading map history\u2026"),unavailable:this.#t("v4_history_unavailable","Map history is unavailable right now."),empty:this.#t("v4_no_map_history","No saved map snapshots yet.")}}}#d({status:e,value:s},a,n){let r=this.#c(n);return s===null&&(e==="idle"||e==="loading")?i`<div class="loading" role="status">${r.loading}</div>`:e==="error"?i`
        <div class="stack">
          <div class="problem" role="alert">${r.unavailable}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:n})}>${this.#t("v4_retry","Try again")}</button>
          </div>
        </div>
      `:e==="empty"?i`<div class="empty">${r.empty}</div>`:a}#h(){return this.#d(this.state.resources.plans,ne`<${It}
      .state=${this.state}
      .localize=${this.localize}
    ></${It}>`,"rooms")}#p(){let e=this.state.workflow==="plans"?"plans":"plan";return this.#d(this.state.resources.plans,ne`<${Pt}
      .state=${this.state}
      .localize=${this.localize}
    ></${Pt}>`,e)}#g(){let e=this.state.resources.areas;return i`
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
    `}#m(){let e=this.state.areaDraft,s=this.state.resources.areas,a=e.canRebind||e.status==="review",n=!a&&(e.status==="stale"||e.status==="unknown");return i`
      <div class="stack">
        ${s.status==="error"?i`
          <div class="stack">
            <div class="problem" role="alert">${this.#c("areaReview").unavailable}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"areaReview"})}>${this.#t("v4_retry","Try again")}</button></div>
          </div>
        `:l}
        ${a?i`<div class="notice" data-tone="warning" role="status">${this.#t("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:l}
        ${n?i`<div class="problem" role="alert">${this.#t("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:l}
        <label class="field ms-field">${this.#t("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} @input=${r=>this.#r({type:"patch-area-draft",patch:{name:me(r)}})}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#t("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} @change=${r=>this.#r({type:"patch-area-draft",patch:{cleaningMode:me(r)}})}>${Q.map(r=>i`<option value=${r} ?selected=${r===e.cleaningMode}>${this.#e(r)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#t("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} @change=${r=>this.#r({type:"patch-area-draft",patch:{coverageSetting:me(r)}})}>${V.map(r=>i`<option value=${r} ?selected=${r===e.coverageSetting}>${this.#n(r)}</option>`)}</select>
          </label>
        </div>
        ${this.#l(e.cleaningMode)}
        <div class="toolbar">
          <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"draw"})}>${this.#t("v4_edit_outline","Redraw")}</button>
          ${J(this.state,"confirmDeleteArea")?i`
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
    `}#i(){let e=this.state.resources.history,s=e.value,a=s?.floors.find(u=>u.id===this.state.selection.floorId)||s?.floors.find(u=>u.active)||s?.floors[0],n=a?.snapshots||[],r=this.state.selection.historyId?Math.max(0,n.findIndex(u=>u.id===this.state.selection.historyId)):n.length,d=a?.active?this.#t("map_timeline_live_action","Live"):this.#t("v4_return_current_floor","Return to current floor"),c=this._historyPreviewPosition??r,m=n[c];return this.#d(e,i`
      <div class="stack">
        ${(s?.floors.length||0)>1?i`
          <div class="group">
            <h3 class="group-heading" id="floors-heading">${this.#t("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(s?.floors||[]).map((u,p)=>i`
              <button
                class="floor ms-row ms-row"
                type="button"
                aria-current=${String(u.id===a?.id)}
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
              max=${String(n.length)}
              step="1"
              .value=${String(c)}
              aria-valuetext=${m?Me(m.createdAt,this.dates):d}
              ?disabled=${!n.length}
              @input=${u=>{this._historyPreviewPosition=Number(me(u))}}
              @change=${u=>{let p=Number(me(u));this._historyPreviewPosition=null,this.#r({type:"set-history",historyId:p===n.length?null:n[p]?.id||null})}}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId&&!!a?.active)} @click=${()=>this.#r({type:"set-history",historyId:null})}><span>${d}</span><small>${this.#t("v4_current","Current")}</small></button>
            ${n.map((u,p)=>i`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(u.id===this.state.selection.historyId)} @click=${()=>this.#r({type:"set-history",historyId:u.id})}>
                <span>${Me(u.createdAt,this.dates)}</span><small>${this.#t("v4_history_position","{position} of {count}",{position:p+1,count:n.length})}</small>
              </button>
            `)}
          </div>
        </div>
        <p class="subtle">${this.#t("v4_history_privacy","Saved maps show one floor each and never show where the robot is now.")}</p>
      </div>
    `,"history")}#v(){return this.#s.request(),this.#s.status!=="ready"?tt(this.#s.status,this.localize,this.retry):i`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}#u(e){return i`<fieldset class="workflow-fields" ?disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}>${e}</fieldset>`}render(){switch(this.state.workflow){case"rooms":return this.#h();case"plans":case"plan":return this.#p();case"draw":return this.#u(this.#g());case"areaReview":return this.#u(this.#m());case"history":return this.#u(this.#i());case"support":return this.#v();case"none":return l}}};customElements.get(U)||customElements.define(U,qe);export{We as MapOptions,qe as MaticMapWorkflowV4,rs as actionReason,us as confirmDialog,ds as dialogCopy,ms as dialogLauncher,ps as dialogReturnTarget,cs as focusPlanTarget,is as planCancel,os as planTitle,ns as planTools,ss as roomTapAnnouncement,es as roomsGripLine,ts as roomsSummary};
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
