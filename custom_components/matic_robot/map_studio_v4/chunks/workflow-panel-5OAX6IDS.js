import{E as Ye,H as Je,I as et,Q as q,S as D,T as he,U as tt,V as st,a as ae,b as ne,d as Se,e as U,f as oe,g as H,h as re}from"./chunk-BI7E5PAQ.js";import{A as Xe,B as Ze,M as ie,O as W,Q as k,a as N,b as L,c as A,f as pe,i as G,j as Ue,k as Ge,y as ve,z as Qe}from"./chunk-MXR2NNCV.js";import{$ as Re,E as De,F as Oe,G as Ve,H as Be,J as ue,K as je,R as P,S as i,V as Fe,W as l,X as Ke,Y as z,Z as M,c as Y,e as ke,f as xe,j as Le,k as Ae,n as I,p as We,q as qe,t as J,z as He}from"./chunk-LIKAU5TE.js";var ge=1,le=100,at=(t,n,e)=>{if(n)return e;let s=t.trim();if(s==="")return null;let a=Number(s);return Number.isFinite(a)?Math.min(le,Math.max(ge,Math.round(a))):e},nt=(t,n)=>t===null?n>0?ge:null:t+n<ge?null:Math.min(le,t+n),ot=P`
.ms-stepper { --ms-local: var(--ms-surface-card); display: inline-grid; flex: none; grid-template-columns: var(--ms-control) minmax(3rem, 4.5rem) var(--ms-control); gap: var(--ms-space-1); align-items: center; border: 1px solid var(--ms-line-strong); border-radius: var(--ms-radius-sm); background: var(--ms-local); }
.ms-stepper--readonly { grid-template-columns: minmax(3rem, 4.5rem); }
.ms-stepper .ms-btn { border-radius: calc(var(--ms-radius-sm) - 1px); }
.ms-stepper input { inline-size: 100%; min-inline-size: 0; min-block-size: var(--ms-control); margin: 0; padding: 0; border: 0; border-radius: var(--ms-radius-xs); color: var(--ms-text); background: transparent; font: inherit; font-size: var(--ms-t-md); font-weight: var(--ms-w-medium); font-variant-numeric: tabular-nums; text-align: center; appearance: textfield; -moz-appearance: textfield; }
.ms-stepper input::-webkit-inner-spin-button, .ms-stepper input::-webkit-outer-spin-button { margin: 0; appearance: none; -webkit-appearance: none; }
.ms-stepper input::placeholder { color: var(--ms-text-quiet); font-weight: var(--ms-w-medium); opacity: 1; }
.ms-stepper input:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: -2px; }
.ms-stepper input[readonly] { color: var(--ms-text-quiet); }
@media (forced-colors: active) { .ms-stepper { border: 1px solid CanvasText; } }
`,rt=t=>{let{id:n,t:e,value:s}=t,a=t.heldBy!==null,o=i`<input
    id=${n}
    type="number"
    inputmode="numeric"
    min="1"
    max=${le}
    step="1"
    placeholder=${e("v4_cadence_off","Off")}
    aria-labelledby=${t.labelId}
    aria-describedby=${t.describedBy??l}
    aria-disabled=${a&&!t.readonly?"true":l}
    ?readonly=${t.readonly||a}
    .value=${s===null?"":String(s)}
    @change=${m=>{let c=m.currentTarget,d=t.readonly||a?s:at(c.value,c.validity.badInput,s);c.value=d===null?"":String(d),d!==s&&t.commit(d)}}
  >`;if(t.readonly)return i`<span class="ms-stepper ms-stepper--readonly">${o}</span>`;let r=m=>{let d=(m<0?s===null:s===le)?m<0?e("v4_cadence_stepper_off_reason","This schedule is already off."):e("v4_cadence_stepper_max_reason","Every 100 cleans is the longest schedule."):null,u=`${n}-${m<0?"min":"max"}`,v=m<0?e("v4_stepper_decrease","Decrease {label}",{label:t.label}):e("v4_stepper_increase","Increase {label}",{label:t.label});return i`<button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${v}
      aria-controls=${n}
      aria-disabled=${d||a?"true":l}
      aria-describedby=${[d?u:null,t.heldBy].filter(Boolean).join(" ")||l}
      title=${d??l}
      @click=${()=>{!d&&!a&&t.commit(nt(s,m))}}
    >${k(m<0?Qe:ve)}${d?i`<span class="sr-only" id=${u}>${d}</span>`:l}</button>`};return i`<span class="ms-stepper">${r(-1)}${o}${r(1)}</span>`};var Q=["vacuum","mop","vacuum_and_mop"],V=["quick","standard","heavy_duty"],X=(t,n)=>n==="vacuum"?t("vacuum","Vacuum"):n==="mop"?t("mop","Mop"):t("vacuum_and_mop","Vacuum + mop"),B=(t,n)=>n==="quick"?t("quick","Quick"):n==="standard"?t("standard","Optimal"):t("heavy_duty","Heavy duty"),lt=t=>t("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."),ct=(t,n)=>{if(n.includes("coverage_requires_vacuum"))return lt(t);if(n.includes("identity_changed")||n.includes("room_not_on_current_map"))return t("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(n.includes("shared_schedule_unavailable"))return t("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(n.includes("mop_progress_unverified")||n.includes("coverage_progress_unverified")){let e=[];return n.includes("mop_progress_unverified")&&e.push(t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),n.includes("coverage_progress_unverified")&&e.push(t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),e.join(" ")}return n.includes("invalid_cadence_policy")?t("v4_cadence_policy_invalid","The room schedule needs review before it can be applied."):null},It={scope:"shared",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1},fe=t=>!!(t&&(t.mopEveryN!==null||t.coverageEveryN!==null)),zt={quick:(t,n,e)=>n===null?t("v4_cadence_coverage_quick_off","Quick vacuum"):e?t("v4_cadence_coverage_quick_one","Quick vacuum every clean"):t("v4_cadence_coverage_quick","Quick vacuum every {count} cleans",{count:n}),standard:(t,n,e)=>n===null?t("v4_cadence_coverage_optimal_off","Optimal vacuum"):e?t("v4_cadence_coverage_optimal_one","Optimal vacuum every clean"):t("v4_cadence_coverage_optimal","Optimal vacuum every {count} cleans",{count:n}),heavy_duty:(t,n,e)=>n===null?t("v4_cadence_coverage_heavy_off","Heavy duty vacuum"):e?t("v4_cadence_coverage_heavy_one","Heavy duty vacuum every clean"):t("v4_cadence_coverage_heavy","Heavy duty vacuum every {count} cleans",{count:n})},Nt={quick:(t,n)=>n?t("v4_cadence_next_mop_quick","Mop and quick vacuum on the next clean"):t("v4_cadence_next_quick","Quick vacuum on the next clean"),standard:(t,n)=>n?t("v4_cadence_next_mop_optimal","Mop and optimal vacuum on the next clean"):t("v4_cadence_next_optimal","Optimal vacuum on the next clean"),heavy_duty:(t,n)=>n?t("v4_cadence_next_mop_heavy","Mop and heavy duty vacuum on the next clean"):t("v4_cadence_next_heavy","Heavy duty vacuum on the next clean")},Lt=(t,n,e)=>e===null?t("v4_cadence_mop_off","Mop"):e===1?t("v4_cadence_mop_interval_one","Mop every clean"):t("v4_cadence_mop_interval","Mop every {count} cleans",{count:D(n,e)}),At=(t,n,e,s)=>zt[e](t,s===null?null:D(n,s),s===1),Wt=["identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy"],ce=({room:t,saved:n,catalogRoom:e})=>{let s=t.cadence??It,a=e?.sharedCadence,o=a===void 0&&(e?.sharedCadenceReasons?.length??0)>0,r=a!==void 0||o,m=n?.cadence?.scope==="shared",c=a!==void 0&&!m&&t.cadence?.scope==="shared";return{policy:s,shared:a,sharedExists:r,participating:m,joinPending:c,progress:c?e?.sharedCadenceProgress:t.cadenceProgress,reasons:c?e?.sharedCadenceReasons??[]:t.cadenceReasons??[],savedPolicy:n?.cadence,savedProgress:n?.cadenceProgress,sharedFits:!a||(a.mopEveryN===null||t.cleaningMode==="vacuum")&&(a.coverageEveryN===null||t.cleaningMode!=="mop"),sharedBroken:o}},O={mop:{every:"mopEveryN",flag:"doMopNext",next:"nextMopIn",count:"mopProgress"},coverage:{every:"coverageEveryN",flag:"doCoverageNext",next:"nextCoverageIn",count:"coverageProgress"}},dt=(t,n)=>!!(t.joinPending?t.shared:t.savedPolicy)?.[O[n].flag],Ce=t=>!t.joinPending&&t.savedPolicy!==void 0&&t.savedPolicy.scope!==t.policy.scope,mt=(t,n)=>{let{every:e,flag:s,next:a,count:o}=O[n],r=t.policy[e];if(!t.progress||r===null)return null;if(!(!t.joinPending&&(Ce(t)||r!==(t.savedPolicy?.[e]??null)||t.policy[s]!==dt(t,n))))return t.progress[a];let c=Ce(t)?0:t.progress[o];return t.policy[s]||c>=r-1?1:r-c},qt=(t,n)=>{let e=O[n].every,s=t.savedPolicy?.[e]??null;return!t.joinPending&&s!==null&&t.policy[e]!==null&&t.policy[e]!==s},ye=(t,n)=>{let e=t.policy[O[n].every];return e!==null&&e>1&&(dt(t,n)||mt(t,n)!==1)},ut=({room:t},n)=>({mop:!n.reasons.includes("mop_progress_unverified")&&t.cleaningMode!=="vacuum"&&n.policy.mopEveryN===null,coverage:!n.reasons.includes("coverage_progress_unverified")&&t.cleaningMode==="mop"}),it=(t,n,e,s)=>{let a=e.policy[O[s].every],o=mt(e,s);return a===null?t("v4_cadence_status_off","Not scheduled"):a===1?t("v4_cadence_status_every","Due every clean"):e.policy[O[s].flag]||o===1?t("v4_cadence_status_next","Due next clean"):qt(e,s)?t("v4_cadence_status_edited","Keeps the progress so far"):Ce(e)||o===null?null:t("v4_cadence_status_in","Due in {count} cleans",{count:D(n,o)})},Ht=(t,n,e)=>{let{policy:s,participating:a}=n,o=fe(s);if(n.joinPending)return t("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");if(a&&s.scope==="plan")return t("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule.");if(!a&&s.scope==="shared"&&o)return t("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero.");let r=["mop","coverage"].some(m=>s[O[m].every]!==null&&(n.savedProgress?.[O[m].count]??0)>0);return s.scope==="plan"&&o&&!fe(n.savedPolicy)&&!r?t("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):n.savedPolicy&&(s.mopEveryN!==n.savedPolicy.mopEveryN||s.coverageEveryN!==n.savedPolicy.coverageEveryN)?t("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."):a?t("v4_cadence_shared_edit_effect","Changes apply to every plan that uses {room}'s shared schedule.",{room:e}):null},Dt=(t,n,e)=>{let s=ce(e),{policy:a,reasons:o}=s,{room:r,saved:m,name:c}=e,d=a.coverageEveryN!==null,u=(d?null:e.offLevel)??a.periodicCoverageSetting??"heavy_duty",v=T=>o.includes(T),h=v("mop_progress_unverified"),{mop:_,coverage:p}=ut(e,s),g=v("coverage_progress_unverified"),f=!g&&r.cleaningMode==="mop"&&d,b=Ve(o.filter(T=>Wt.includes(T)),c),x=a.doMopNext||a.doCoverageNext,C=x?a.doMopNext:ye(s,"mop"),$=x?a.doCoverageNext:ye(s,"coverage"),R=(T,K,te)=>m!==void 0&&((T??0)>0||!!K||!!m.cadenceReasons?.includes(te));return{policy:a,level:u,mop:{every:a.mopEveryN,label:Lt(t,n,a.mopEveryN),status:it(t,n,s,"mop"),reason:h?t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):_?t("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum."):null,blocked:_,unverified:h},coverage:{every:a.coverageEveryN,label:At(t,n,u,a.coverageEveryN),status:it(t,n,s,"coverage"),reason:g?t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):f?lt(t):p?t("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming."):null,blocked:p,unverified:g},legacyCoverage:f,roomReason:b?t(b.reasonKey,b.reason,b.reasonPlaceholders):null,sharedHint:s.shared!==void 0&&s.sharedFits&&!s.participating&&a.scope==="shared"&&!fe(a),joinPending:s.joinPending,participating:s.participating,next:C||$?{label:$?Nt[u](t,C):t("v4_cadence_next_mop","Mop on the next clean"),on:x,mop:C,coverage:$,blocked:C&&_?"mop":$&&p?"coverage":null}:null,explanation:Ht(t,s,c),scope:a.scope,resettable:{mop:R(m?.cadenceProgress?.mopProgress,m?.cadence?.doMopNext,"mop_progress_unverified"),coverage:R(m?.cadenceProgress?.coverageProgress,m?.cadence?.doCoverageNext,"coverage_progress_unverified")},sharedReason:Ee(s)?s.sharedBroken?t("v4_cadence_shared_broken_reason","Can't count across all plans until you fix this room's shared schedule in a plan that uses it."):t("v4_cadence_shared_mode_reason","Can't count across all plans until this room's cleaning mode works with its shared schedule."):null}},pt=t=>t.shared&&t.sharedFits&&!t.participating?{...t.shared,scope:"shared"}:null,Ee=t=>t.sharedExists&&(!t.sharedFits||t.sharedBroken)&&!t.participating,vt=(t,n,e)=>{let s=ce(t),{policy:a}=s;if(s.joinPending)return null;if(e!==null&&!fe(a)&&a.scope==="shared"){let r=pt(s);if(r)return r;if(Ee(s))return vt({...t,room:{...t.room,cadence:{...a,scope:"plan"}}},n,e)}let o=e!==null&&e>1;return n==="mop"?{...a,mopEveryN:e,doMopNext:o&&a.doMopNext}:e===null?{...a,coverageEveryN:null,doCoverageNext:!1}:a.coverageEveryN===null?{...a,coverageEveryN:e,periodicCoverageSetting:t.offLevel??a.periodicCoverageSetting??"heavy_duty"}:{...a,coverageEveryN:e,doCoverageNext:o&&a.doCoverageNext}},Ot=(t,n)=>{let e=ce(t);return e.joinPending||e.policy.coverageEveryN===null?null:{...e.policy,periodicCoverageSetting:n}},Vt=(t,n)=>{let e=ce(t);if(e.joinPending)return null;let s=ye(e,"mop"),a=ye(e,"coverage");if(!s&&!a&&!e.policy.doMopNext&&!e.policy.doCoverageNext)return null;let o=ut(t,e);return n&&(s&&o.mop||a&&o.coverage)?null:n?{...e.policy,doMopNext:s,doCoverageNext:a}:{...e.policy,doMopNext:!1,doCoverageNext:!1}},Bt=(t,n)=>{let e=ce(t);return n==="shared"&&Ee(e)?null:(n==="shared"?pt(e):null)??{...e.policy,scope:n}},jt=t=>({...t,scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1}),Ft=(t,n)=>n.planDraft.dirty?t("v4_reason_reset_unsaved","Can't reset until you save or cancel your changes."):n.command!=="idle"||n.managedLock||n.activity!=="idle"&&n.activity!=="docked"||n.dataMode!=="live"?t("v4_reason_reset_busy","Can't reset until the robot is idle and the map is live."):null,Kt=(t,n,e,s)=>{let a=t.resources.plans.value,o=t.planDraft.id;return{room:n,saved:o?a?.plans.find(r=>r.id===o)?.rooms.find(r=>r.roomId===n.roomId):void 0,catalogRoom:a?.rooms.find(r=>r.roomId===n.roomId),name:e,offLevel:s}},be="\0",_e=(t,n)=>{let[e,...s]=t.split(be);return s.length?i`${e}<bdi>${n}</bdi>${s.join(n)}`:t},ht=(t,n,e,s)=>{let{t:a,state:o,held:r}=t,m=o.planDraft,c=Kt(o,n,s,t.offLevel),d=Dt(a,o.locale,{...c,name:be}),u=(y,w,E="small")=>E==="p"?i`<p class="sched-status sched-reason" id=${y??l}>${k(W)}<span>${w}</span></p>`:i`<small class="sched-status sched-reason" id=${y??l}>${k(W)}<span>${w}</span></small>`,{policy:v,next:h}=d,_=y=>{if(!y||r)return;let w=m.rooms.map((E,S)=>S===e?{...E,cadence:y}:E);t.intent({type:"patch-plan-draft",patch:{rooms:w}})},p={disabled:r?"true":l,described:r??l},g=(...y)=>y.filter(Boolean).join(" ")||null,f=(y,w)=>w.reason?u(y,w.reason):w.status?i`<small class="sched-status" id=${y}>${w.status}</small>`:l,b=Ft(a,o),x=!!(r||b),C=(y,w,E,S=null)=>i`<button
    class=${w}
    type="button"
    role=${S??l}
    tabindex=${S?"-1":l}
    aria-label=${y==="mop"?a("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:s}):a("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:s})}
    aria-disabled=${x?"true":l}
    aria-describedby=${r??(b?E:null)??l}
    @click=${()=>{x||!m.id||(t.menu.close(!1),t.intent({type:"request-room-cadence-reset",planId:m.id,roomId:n.roomId,mode:y}))}}
  >${y==="mop"?a("v4_reset_mop_cadence_button","Reset mopping"):a("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`,$=a("v4_room_more_named","More for {room}",{room:s}),{menu:R}=t,T=m.id&&(d.resettable.mop||d.resettable.coverage)?i`<div class="room-more" @keydown=${R.keydown} @focusout=${R.focusout}>
    <button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${$}
      title=${$}
      aria-haspopup="menu"
      aria-expanded=${String(R.open)}
      aria-disabled=${p.disabled}
      aria-describedby=${p.described}
      @click=${()=>{r||R.toggle()}}
    >${k(pe)}</button>
    ${R.open&&!r?i`<div class="menu ms-surface ms-surface--overlay" @mousedown=${y=>y.preventDefault()}>
      <div role="menu" aria-label=${$}>
        ${d.resettable.mop?C("mop","ms-row ms-row--menu","reset-reason","menuitem"):l}
        ${d.resettable.coverage?C("coverage","ms-row ms-row--menu","reset-reason","menuitem"):l}
      </div>
      ${b?i`<div class="reason">${u("reset-reason",b,"p")}</div>`:l}
    </div>`:l}
  </div>`:l,K=(y,w,E)=>{let S=`sched-${y}`,se=w.reason||w.status?`${S}-status`:null;return i`<div class="sched-row">
      <label class="sched-label" id=${`${S}-label`} for=${S}>${w.label}</label>
      <div class="sched-controls">
        ${E}
        ${rt({id:S,labelId:`${S}-label`,label:w.label,value:w.every,describedBy:g(se,r),heldBy:r??(w.blocked?se:null),readonly:d.joinPending,t:a,commit:me=>_(vt(c,y,me))})}
      </div>
      ${f(`${S}-status`,w)}
      ${w.unverified&&m.id?i`${C(y,"ms-btn ms-btn--secondary",`${S}-reset-reason`)}
        ${b?u(`${S}-reset-reason`,b,"p"):l}`:l}
    </div>`},te=r??(d.coverage.blocked?"sched-coverage-status":null),Mt=d.joinPending?l:i`<select
    class="ms-select sched-level"
    aria-label=${a("v4_cadence_level_named","Vacuum level for {room}",{room:s})}
    aria-disabled=${te?"true":l}
    aria-describedby=${te??l}
    .value=${d.level}
    @change=${y=>{let w=y.currentTarget;if(te){w.value=d.level;return}let E=w.value,S=Ot(c,E);t.setOffLevel(S?null:E),S&&_(S)}}
  >${V.map(y=>i`<option value=${y} ?selected=${y===d.level}>${B(a,y)}</option>`)}</select>`;return i`<section class="schedule" role="group" aria-label=${a("v4_room_cadence_named","Room schedule for {room}",{room:s})}>
    <div class="schedule-head"><h3>${a("v4_room_schedule","Schedule")}</h3>${T}</div>
    ${d.roomReason?u(null,_e(d.roomReason,s),"p"):l}
    ${d.sharedHint?i`<p class="schedule-note">${_e(a("v4_cadence_shared_available","{room} has a shared schedule, and turning on a row uses it.",{room:be}),s)}</p>`:l}
    ${K("mop",d.mop,l)}
    ${K("coverage",d.coverage,Mt)}
    ${d.legacyCoverage?i`<button
      type="button"
      class="ms-btn ms-btn--secondary sched-off"
      aria-label=${a("v4_cadence_turn_off_named","Turn off the vacuum rotation in {room}",{room:s})}
      aria-disabled=${p.disabled}
      aria-describedby=${p.described}
      @click=${()=>_(jt(v))}
    >${a("v4_cadence_clear_room_coverage","Turn off")}</button>`:l}
    ${h?i`<div class="switch-row">
      <span class="switch-copy">
        <span id="sched-next-label">${h.label}</span>
        <small id="sched-next-hint">${a("v4_cadence_next_hint","Brings it forward once; the schedule then continues as usual.")}</small>
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(h.on)}
        aria-labelledby="sched-next-label"
        aria-describedby=${g("sched-next-hint",r??(d.joinPending?"sched-join":h.blocked?`sched-${h.blocked}-status`:null))??l}
        aria-disabled=${r||d.joinPending||h.blocked?"true":l}
        @click=${()=>{h.blocked||_(Vt(c,!h.on))}}
      ></button>
    </div>`:l}
    ${d.joinPending?i`<p class="schedule-note" id="sched-join">${_e(a("v4_cadence_join_pending",`Uses {room}'s shared schedule; change it after you save, or choose "In this plan only" under Advanced.`,{room:be}),s)}</p>`:l}
    ${d.explanation?i`<p class="schedule-note">${_e(d.explanation,s)}</p>`:l}
    <details class="advanced">
      <summary>${a("v4_advanced","Advanced")}${k(G)}</summary>
      <fieldset class="scope">
        <legend>${a("v4_cadence_scope","Count cleans")}</legend>
        ${[["shared",a("v4_cadence_shared","Across all plans (recommended)")],["plan",a("v4_cadence_this_plan","In this plan only")]].map(([y,w])=>{let E=r??(y==="shared"&&d.sharedReason?"sched-scope-reason":null);return i`<label class="scope-row"><input
            type="radio"
            name="sched-scope"
            value=${y}
            .checked=${d.scope===y}
            aria-disabled=${E?"true":l}
            aria-describedby=${E??l}
            @change=${S=>{let se=E?null:Bt(c,y);se?_(se):S.currentTarget.closest("fieldset")?.querySelectorAll("input").forEach(me=>{me.checked=me.value===d.scope})}}
          ><span>${w}</span></label>`})}
        ${d.sharedReason?u("sched-scope-reason",d.sharedReason,"p"):l}
      </fieldset>
      <p class="schedule-note">${a("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
    </details>
  </section>`},Z=(t,n)=>n.cleaningMode==="mop"?t("v4_room_setting_mop","Mop"):n.cleaningMode==="vacuum"?n.coverageSetting==="quick"?t("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):t("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):n.coverageSetting==="quick"?t("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):t("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),Ut={mop:(t,n)=>t("v4_room_schedules_mop","Mop every {mop} cleans",{mop:n}),mop_one:t=>t("v4_room_schedules_mop_one","Mop every clean"),quick:(t,n,e)=>t("v4_room_schedules_quick","Quick vacuum every {cov} cleans",{cov:e}),quick_one:t=>t("v4_room_schedules_quick_one","Quick vacuum every clean"),optimal:(t,n,e)=>t("v4_room_schedules_optimal","Optimal vacuum every {cov} cleans",{cov:e}),optimal_one:t=>t("v4_room_schedules_optimal_one","Optimal vacuum every clean"),heavy:(t,n,e)=>t("v4_room_schedules_heavy","Heavy duty vacuum every {cov} cleans",{cov:e}),heavy_one:t=>t("v4_room_schedules_heavy_one","Heavy duty vacuum every clean"),mop_quick:(t,n,e)=>t("v4_room_schedules_mop_quick","Mop every {mop} cleans \xB7 Quick vacuum every {cov} cleans",{mop:n,cov:e}),mop_quick_one_mop:(t,n,e)=>t("v4_room_schedules_mop_quick_one_mop","Mop every clean \xB7 Quick vacuum every {cov} cleans",{cov:e}),mop_quick_one_cov:(t,n)=>t("v4_room_schedules_mop_quick_one_cov","Mop every {mop} cleans \xB7 Quick vacuum every clean",{mop:n}),mop_quick_one_both:t=>t("v4_room_schedules_mop_quick_one_both","Mop every clean \xB7 Quick vacuum every clean"),mop_optimal:(t,n,e)=>t("v4_room_schedules_mop_optimal","Mop every {mop} cleans \xB7 Optimal vacuum every {cov} cleans",{mop:n,cov:e}),mop_optimal_one_mop:(t,n,e)=>t("v4_room_schedules_mop_optimal_one_mop","Mop every clean \xB7 Optimal vacuum every {cov} cleans",{cov:e}),mop_optimal_one_cov:(t,n)=>t("v4_room_schedules_mop_optimal_one_cov","Mop every {mop} cleans \xB7 Optimal vacuum every clean",{mop:n}),mop_optimal_one_both:t=>t("v4_room_schedules_mop_optimal_one_both","Mop every clean \xB7 Optimal vacuum every clean"),mop_heavy:(t,n,e)=>t("v4_room_schedules_mop_heavy","Mop every {mop} cleans \xB7 Heavy duty vacuum every {cov} cleans",{mop:n,cov:e}),mop_heavy_one_mop:(t,n,e)=>t("v4_room_schedules_mop_heavy_one_mop","Mop every clean \xB7 Heavy duty vacuum every {cov} cleans",{cov:e}),mop_heavy_one_cov:(t,n)=>t("v4_room_schedules_mop_heavy_one_cov","Mop every {mop} cleans \xB7 Heavy duty vacuum every clean",{mop:n}),mop_heavy_one_both:t=>t("v4_room_schedules_mop_heavy_one_both","Mop every clean \xB7 Heavy duty vacuum every clean")},gt=(t,n,e)=>{let s=e?.mopEveryN??null,a=e?.coverageEveryN??null;if(s===null&&a===null)return null;let o=e?.periodicCoverageSetting,r=o==="quick"?"quick":o==="heavy_duty"?"heavy":"optimal",m=s===null?`${r}${a===1?"_one":""}`:a===null?`mop${s===1?"_one":""}`:`mop_${r}${s===1&&a===1?"_one_both":s===1?"_one_mop":a===1?"_one_cov":""}`,c=Ut[m];return c?c(t,s===null?"":D(n,s),a===null?"":D(n,a)):null};var _t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},bt=t=>(...n)=>({_$litDirective$:t,values:n}),$e=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,e,s){this._$Ct=n,this._$AM=e,this._$Ci=s}_$AS(n,e){return this.update(n,e)}update(n,e){return this.render(...e)}};var{I:Gt}=Ke,ft=t=>t;var yt=()=>document.createComment(""),ee=(t,n,e)=>{let s=t._$AA.parentNode,a=n===void 0?t._$AB:n._$AA;if(e===void 0){let o=s.insertBefore(yt(),a),r=s.insertBefore(yt(),a);e=new Gt(o,r,t,t.options)}else{let o=e._$AB.nextSibling,r=e._$AM,m=r!==t;if(m){let c;e._$AQ?.(t),e._$AM=t,e._$AP!==void 0&&(c=t._$AU)!==r._$AU&&e._$AP(c)}if(o!==a||m){let c=e._$AA;for(;c!==o;){let d=ft(c).nextSibling;ft(s).insertBefore(c,a),c=d}}}return e},j=(t,n,e=t)=>(t._$AI(n,e),t),Qt={},$t=(t,n=Qt)=>t._$AH=n,wt=t=>t._$AH,we=t=>{t._$AR(),t._$AA.remove()};var kt=(t,n,e)=>{let s=new Map;for(let a=n;a<=e;a++)s.set(t[a],a);return s},xt=bt(class extends $e{constructor(t){if(super(t),t.type!==_t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,n,e){let s;e===void 0?e=n:n!==void 0&&(s=n);let a=[],o=[],r=0;for(let m of t)a[r]=s?s(m,r):r,o[r]=e(m,r),r++;return{values:o,keys:a}}render(t,n,e){return this.dt(t,n,e).values}update(t,[n,e,s]){let a=wt(t),{values:o,keys:r}=this.dt(n,e,s);if(!Array.isArray(a))return this.ut=r,o;let m=this.ut??=[],c=[],d,u,v=0,h=a.length-1,_=0,p=o.length-1;for(;v<=h&&_<=p;)if(a[v]===null)v++;else if(a[h]===null)h--;else if(m[v]===r[_])c[_]=j(a[v],o[_]),v++,_++;else if(m[h]===r[p])c[p]=j(a[h],o[p]),h--,p--;else if(m[v]===r[p])c[p]=j(a[v],o[p]),ee(t,c[p+1],a[v]),v++,p--;else if(m[h]===r[_])c[_]=j(a[h],o[_]),ee(t,a[v],a[h]),h--,_++;else if(d===void 0&&(d=kt(r,_,p),u=kt(m,v,h)),d.has(m[v]))if(d.has(m[h])){let g=u.get(r[_]),f=g!==void 0?a[g]:null;if(f===null){let b=ee(t,a[v]);j(b,o[_]),c[_]=b}else c[_]=j(f,o[_]),ee(t,a[v],f),a[g]=null;_++}else we(a[h]),h--;else we(a[v]),v++;for(;_<=p;){let g=ee(t,c[p+1]);j(g,o[_]),c[_++]=g}for(;v<=h;){let g=a[v++];g!==null&&we(g)}return this.ut=r,$t(t,c),Fe}});var F=class{constructor(n,e,s){this.host=n;this.root=e;this.launcher=s;this.open=!1;this.#s=!1;this.keydown=n=>{if(!this.open)return;if(n.key==="Escape"){n.preventDefault(),this.close(!0);return}let e=[...this.host.renderRoot.querySelectorAll(`${this.root} [role^=menuitem]`)],s=e.indexOf(n.composedPath()[0]),a=n.key==="ArrowDown"?s+1:n.key==="ArrowUp"?s-1:n.key==="Home"?0:n.key==="End"?e.length-1:null;a===null||s<0||!e.length||(n.preventDefault(),e[(a+e.length)%e.length]?.focus())};this.focusout=n=>{let e=n.relatedTarget;e&&!n.currentTarget.contains(e)&&this.#a(!1)};this.#t=n=>{let e=this.host.renderRoot.querySelector(this.root);this.open&&e&&!n.composedPath().includes(e)&&this.#a(!1)};n.addController(this)}hostConnected(){window.addEventListener("pointerdown",this.#t,!0)}hostDisconnected(){window.removeEventListener("pointerdown",this.#t,!0)}hostUpdated(){this.#s&&(this.#s=!1,this.host.renderRoot.querySelector(`${this.root} [role^=menuitem]`)?.focus())}#s;#a(n){n!==this.open&&(this.open=n,this.#s=n,this.host.requestUpdate())}toggle(){this.#a(!this.open)}close(n){this.#a(!1),n&&this.host.renderRoot.querySelector(`${this.root} ${this.launcher}`)?.focus()}#t};var Xt=["mop_progress_unverified","coverage_progress_unverified","identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy","coverage_requires_vacuum"],Te=class extends z{constructor(){super(...arguments);this._moved="";this.#s=null;this.#a=new Map;this.#t=new F(this,".room-more","> button");this.state=I();this.#e=(e,s,a)=>M(this.localize,e,s,a)}static{this.styles=[N,L,A,ot,P`
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
`]}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_moved:{state:!0}}}#s;#a;#t;#e;#o(e){this.dispatchEvent(new CustomEvent(q,{detail:e,bubbles:!0,composed:!0}))}#n(e){return D(this.state.locale,e)}#l(e){return e.length?i`<span class="lines">${e.map(s=>i`<span class="line">${k(ie)}<span>${s}</span></span>`)}</span>`:l}#r(e,s){let a=tt(this.#e,this.state.locale,e),o=st(this.#e,this.state.locale,e),r=o===null?l:"blocked"in o?i`<span class="lines"><span class="line" data-tone="warning">${k(W)}<span>${o.blocked}</span></span></span>`:this.#l(o.due),m=this.#e("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return i`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${e.id}
        aria-describedby=${s?"default-hint":l}
        @click=${()=>this.#o({type:"select-plan",planId:e.id})}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${e.name}</bdi>${s?i`<span class="ms-chip chip-default" title=${m}>${this.#e("v4_plan_default","Default")}</span>`:l}${e.enabled?l:i`<span class="ms-chip">${this.#e("v4_paused","Paused")}</span>`}</strong>
          <small>${a}</small>
          ${r}
        </span>
        <span class="ms-row__trail">${k(G)}</span>
      </button>
      ${s?i`<span class="sr-only" id="default-hint">${m}</span>`:l}
    </li>`}#c(){let e=this.state.resources.plans.value,s=this.#e("v4_create_plan","Create a plan");if(!e?.plans.length)return i`<div class="empty-card">
        <h3>${this.#e("v4_no_plans","No plans yet")}</h3>
        <p>${this.#e("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#o({type:"select-plan",planId:null})}>${s}</button>
      </div>`;let a=[...e.plans].sort((o,r)=>+(r.id===e.selectedPlan)-+(o.id===e.selectedPlan));return i`<ul class="plain">
      ${a.map(o=>this.#r(o,o.id===e.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#o({type:"select-plan",planId:null})}>
        <span class="ms-row__lead">${k(ve)}</span>
        <span class="ms-row__body"><strong>${s}</strong></span>
      </button></li>
    </ul>`}#d(){let e=this.state;return e.pendingAction==="save-plan"?this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):e.pendingAction==="run-plan"?this.#e("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):ue(e)?this.#e("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#e("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):He(e)?null:this.#e("v4_reason_save_plan_map","Waiting for the map to be ready.")}#h(){let e=this.state.planDraft.enabled,s=this.#d();return i`
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
          @click=${()=>{s||this.#o({type:"set-plan-enabled",enabled:!e})}}
        ></button>
      </div>
      ${s?i`<p class="reason" id="enabled-reason">${s}</p>`:l}
    `}#p(e,s,a,o={}){return i`<li class="run-row" ?data-break=${o.part!==void 0}>
      ${o.part===void 0?l:i`<span class="sr-only">${this.#e("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#n(o.part)})}</span>`}
      ${a===null?l:i`<span class="pos-badge" aria-hidden="true">${this.#n(a)}</span>`}
      <span class="row-lines">
        <bdi>${e}</bdi>
        <small>${s}</small>
        ${o.blocked?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
      </span>
    </li>`}#g(){let e=this.state,s=e.planDraft,a=e.resources.plans.value,o=a?.plans.find(R=>R.id===s.id);if(!a||!o)return l;let r=o.nextRunPreview,m=r?.blocker??null,c=!s.enabled,d=!c&&!!(r&&!m&&/^[0-9a-f]{64}$/u.test(r.previewToken??"")),u=o.runBehavior==="ordered",v=d&&r?r.rooms:[],h=!c&&m?Be(e,o)?.jump.roomId??null:null,_=c||d||h||e.pendingAction==="save-plan"?null:m&&Oe[m]||De,p=d?v.length:o.rooms.length,g=d?o.nextRunEstimateSeconds:null,f=g===null?"":this.#n(Math.max(1,Math.round(g/60))),b=g===null?p===1?this.#e("v4_plan_summary_rooms_one","1 room"):this.#e("v4_plan_summary_rooms","{count} rooms",{count:this.#n(p)}):p===1?this.#e("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:f}):this.#e("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#n(p),minutes:f}),x=d&&r?r.missionBoundaries:[],C=d?v.map((R,T)=>{let K=x.indexOf(T);return this.#p(R.name,Z(this.#e,R),u?T+1:null,K<0?{}:{part:K+2})}):qe(o).rooms.map(R=>this.#p(a.rooms.find(T=>T.roomId===R.roomId)?.name??R.roomId,Z(this.#e,R),null,{blocked:R.roomId===h})),$=s.finishCurrentRoom?this.#e("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#n(s.finishCurrentRoomThreshold)}):s.returnToBase?this.#e("v4_plan_summary_return","Returns to the dock when finished"):null;return i`
      <p class="summary">${b}</p>
      ${this.#l(he(this.#e,e.locale,v))}
      <h3 class="heading">${c?this.#e("v4_plan_rooms_heading","Rooms in this plan"):e.resources.entry?.activePlan?this.#e("v4_next_run_after_active","After this run"):this.#e("v4_next_run_preview","Next run")}</h3>
      ${d&&!u?i`<p class="quiet">${this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}</p>`:l}
      ${x.length?i`<p class="quiet">${this.#e("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:this.#n(x.length+1)})}</p>`:l}
      ${_?i`<p class="problem">${this.#e(_.reasonKey,_.reason)}</p>
        <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#o({type:"open-workflow",workflow:"plan"})}>${this.#e("v4_retry","Try again")}</button>`:l}
      ${d&&u?i`<ol class="run-list" role="list">${C}</ol>`:i`<ul class="run-list" role="list">${C}</ul>`}
      ${this.#h()}
      ${$?i`<p class="quiet">${$}</p>`:l}
    `}willUpdate(e){e.has("state")&&(this.state.workflow!=="plan"||this.state.planView!=="edit")&&(this._moved="");let s=e.get("state");s&&(s.expandedRoom!==this.state.expandedRoom||this.state.planView!=="edit"||this.state.dialog||this.#m())&&(this.#t.open=!1),s&&(s.planDraft.id!==this.state.planDraft.id||s.workflow!==this.state.workflow||this.state.planView!=="edit")&&this.#a.clear()}updated(e){!this.#s||!e.has("state")||(this.renderRoot.querySelector(`[data-move="${CSS.escape(this.#s)}"]`)?.focus(),this.#s=null)}#m(){return this.state.pendingAction==="save-plan"?"edit-held":null}#i(e){this.#m()||this.#o({type:"patch-plan-draft",patch:e})}#v(e,s){this.#i({rooms:this.state.planDraft.rooms.map((a,o)=>o===e?{...a,...s}:a)})}#u(e,s,a,o){let r=[...this.state.planDraft.rooms],m=e+s;if(this.#m()||m<0||m>=r.length)return;let[c]=r.splice(e,1);c&&(r.splice(m,0,c),this.#s=o,this._moved=this.#e("v4_room_moved","{room} moved to position {position}",{room:a,position:this.#n(m+1)}),this.#o({type:"patch-plan-draft",patch:{rooms:r}}))}#_(e){return{disabled:e?"true":l,described:e??l}}#b(e,s,a,o,r,m){let c=`${e.roomId}:${o<0?"up":"down"}`,d=o<0?this.#e("move_room_up","Move {room} earlier",{room:a}):this.#e("move_room_down","Move {room} later",{room:a}),u=o<0?this.#e("v4_room_already_first","{room} is already first",{room:a}):this.#e("v4_room_already_last","{room} is already last",{room:a}),v=r?`${c}-end`:m;return i`<button
        class="ms-btn ms-btn--icon"
        type="button"
        data-move=${c}
        aria-label=${d}
        title=${r?u:d}
        aria-disabled=${r||m?"true":l}
        aria-describedby=${v??l}
        @click=${()=>{r||this.#u(s,o,a,c)}}
      >${k(o<0?Xe:Ze)}</button>
      ${r?i`<span class="sr-only" id=${`${c}-end`}>${u}</span>`:l}`}#y(e,s,a,o,r,m,c){let d=this.state.planDraft,u=a!==null&&this.state.expandedRoom===e,v=d.rooms.length-1,h=this.#_(c),_=a===null&&m,p=a?gt(this.#e,this.state.locale,a.cadence):null,g=a?.cadenceReasons?.some(b=>Xt.includes(b)),f=!!a?.cadence?.mopEveryN;return i`<li class="ms-row edit-row" data-selected=${a?"true":l}>
      <label class="edit-check"><input
        type="checkbox"
        .checked=${a!==null}
        aria-label=${this.#e("v4_room_include_named","Include {room}",{room:s})}
        aria-disabled=${c||_?"true":l}
        aria-describedby=${c??(_?"room-limit":l)}
        @click=${b=>{(c||_)&&b.preventDefault()}}
        @change=${()=>this.#o({type:"toggle-room",roomId:e})}
      ></label>
      ${a?i`<button
          class="edit-disclosure"
          type="button"
          data-room-disclosure=${e}
          aria-expanded=${String(u)}
          aria-label=${this.#e("v4_room_settings_named","Settings for {room}",{room:s})}
          aria-disabled=${h.disabled}
          aria-describedby=${h.described}
          @click=${()=>{c||this.#o({type:"set-plan-view",view:"edit",roomId:u?null:e})}}
        >
          ${r?i`<span class="pos-badge" aria-hidden="true">${this.#n(o+1)}</span>`:l}
          <span class="row-lines">
            <bdi>${s}</bdi>
            <small>${Z(this.#e,a)}</small>
            ${p?i`<small>${p}</small>`:l}
            ${g?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
          </span>
          ${k(G)}
        </button>`:i`<span class="edit-name"><bdi>${s}</bdi></span>`}
      ${a&&r?i`<span class="edit-moves">
        ${this.#b(a,o,s,-1,o===0,c)}
        ${this.#b(a,o,s,1,o===v,c)}
      </span>`:i`<span></span>`}
      ${u&&a?i`<div class="row-expanded">
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select
              aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:s})}
              aria-disabled=${h.disabled}
              aria-describedby=${[c,f?"mode-reason":null].filter(Boolean).join(" ")||l}
              .value=${a.cleaningMode}
              @change=${b=>{let x=b.currentTarget;c?x.value=a.cleaningMode:this.#v(o,{cleaningMode:x.value})}}
            >${Q.map(b=>i`<option value=${b} ?selected=${b===a.cleaningMode} ?disabled=${f&&b!=="vacuum"}>${X(this.#e,b)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select
              aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:s})}
              aria-disabled=${h.disabled}
              aria-describedby=${h.described}
              ?disabled=${a.cleaningMode==="mop"}
              .value=${a.coverageSetting}
              @change=${b=>{let x=b.currentTarget;c?x.value=a.coverageSetting:this.#v(o,{coverageSetting:x.value})}}
            >${V.map(b=>i`<option value=${b} ?selected=${b===a.coverageSetting}>${B(this.#e,b)}</option>`)}</select>
          </label>
        </div>
        ${f?i`<p class="sched-status sched-reason" id="mode-reason">${k(W)}<span>${this.#e("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</span></p>`:l}
        ${a.cleaningMode==="vacuum"?l:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
        ${ht({t:this.#e,state:this.state,intent:b=>this.#o(b),held:c,offLevel:this.#a.get(e)??null,setOffLevel:b=>{b?this.#a.set(e,b):this.#a.delete(e),this.requestUpdate()},menu:this.#t},a,o,s)}
      </div>`:l}
    </li>`}#f(e,s,a,o,r,m){let c=[a?`${e}-hint`:"",r??""].filter(Boolean).join(" ");return i`<div class="switch-row">
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
        aria-describedby=${c||l}
        aria-disabled=${r?"true":l}
        @click=${()=>{r||m(!o)}}
      ></button>
    </div>`}#$(){let e=this.state,s=e.planDraft,a=e.resources.plans.value;if(!a)return l;let o=this.#m(),r=this.#_(o),m=s.runBehavior==="ordered",c=s.rooms.length>=100,d=p=>a.rooms.find(g=>g.roomId===p)?.name??p,u=[...s.rooms.map((p,g)=>({roomId:p.roomId,room:p,index:g})),...a.rooms.filter(p=>!s.rooms.some(g=>g.roomId===p.roomId)).map(p=>({roomId:p.roomId,room:null,index:-1}))],v=s.finishCurrentRoomThreshold,h=this.#n(v),_=(p,g)=>i`<button
      class="ms-btn"
      type="button"
      aria-pressed=${String(s.runBehavior===p)}
      aria-disabled=${r.disabled}
      aria-describedby=${r.described}
      @click=${()=>this.#i({runBehavior:p})}
    >${g}</button>`;return i`<div class="edit">
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
          ${_("intelligent",this.#e("plan_intelligent","Intelligent rotation"))}
          ${_("ordered",this.#e("plan_ordered","Saved order"))}
        </div>
        <p class="quiet">${m?this.#e("v4_plan_order_ordered_hint","Top to bottom, as listed"):this.#e("v4_plan_order_intelligent_hint","Longest-waiting rooms first")}</p>
      </div>
      <div class="list-header">
        <h3 class="heading" id="edit-rooms">${this.#e("v4_rooms_heading","Rooms")}</h3>
        <small>${this.#e("v4_plan_rooms_selected","{selected} of {total} selected",{selected:this.#n(s.rooms.length),total:this.#n(a.rooms.length)})}</small>
      </div>
      ${c?i`<p class="reason" id="room-limit">${this.#e("v4_plan_room_limit","Can't add more rooms until you remove one; a plan holds up to {limit}.",{limit:this.#n(100)})}</p>`:l}
      <ul class="plain" role="list" aria-labelledby="edit-rooms">
        ${xt(u,p=>p.roomId,p=>this.#y(p.roomId,d(p.roomId),p.room,p.index,m,c,o))}
      </ul>
      <span class="sr-only" role="status">${this._moved}</span>
      <details class="run-end">
        <summary>${this.#e("v4_run_end_options","When a run ends")}</summary>
        ${this.#f("return-dock",this.#e("v4_plan_return_to_dock","Return to the dock when finished"),null,s.returnToBase,o,p=>this.#i({returnToBase:p}))}
        ${this.#f("finish-room",this.#e("v4_plan_finish_room","Finish the current room when you press Stop"),this.#e("v4_plan_finish_room_hint","Only if the room is at least {percent}% done; otherwise the robot stops right away.",{percent:h}),s.finishCurrentRoom,o,p=>this.#i({finishCurrentRoom:p}))}
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
            @input=${p=>{let g=p.currentTarget;o?g.value=String(v):this.#i({finishCurrentRoomThreshold:Number(g.value)})}}
          >
        </div>`:l}
      </details>
    </div>`}render(){let{workflow:e,planView:s}=this.state;return e==="plans"?this.#c():e!=="plan"?l:s==="run"?this.#g():this.#$()}};customElements.get(H)||customElements.define(H,Te);var St=["mop_due","coverage_due"],Rt=(t,n)=>t.resources.plans.value?.rooms.find(e=>e.roomId===n)?.name??null,Zt=t=>t.selection.roomIds.map(n=>Rt(t,n)??n),Yt=(t,n)=>"",Jt=(t,n,e,s,a)=>null,es=t=>t.currentTarget.value,Pe=class extends z{constructor(){super(...arguments);this.state=I();this._open=null;this.#s=(e,s,a)=>M(this.localize,e,s,a);this.#t=e=>{if(e.key!=="Escape"||this._open===null||et(e)||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;e.preventDefault();let s=this._open==="settings"?'[data-disclosure="settings"]':`[data-room-disclosure="${CSS.escape(this._open)}"]`;this._open=null,this.updateComplete.then(()=>this.renderRoot.querySelector(s)?.focus())}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[N,L,A,P`
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
`]}#s;#a(e){this.dispatchEvent(new CustomEvent(q,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this._open&&this._open!=="settings"&&!this.state.selection.roomIds.includes(this._open)&&(this._open=null)}#t;#e(e){this._open=this._open===e?null:e}#o(e,s,a){return o=>{if(e){o.currentTarget.value=s;return}a(es(o))}}#n(...e){let s=e.filter(a=>!!a);return s.length?s.join(" "):l}#l(e,s,a){let o=this.#s,r=this._open==="settings",m=e.selection.roomSettings.filter(g=>e.selection.roomIds.includes(g.roomId)),c=m[0],u=m.some(g=>g.cleaningMode!==c?.cleaningMode||g.coverageSetting!==c?.coverageSetting)?o("v4_settings_mixed","Different per room"):Z(o,c??{cleaningMode:e.selection.cleaningMode,coverageSetting:e.selection.coverageSetting}),v=e.selection.cleaningMode,h=e.selection.coverageSetting,_=v==="mop",p=s!==null;return i`
      <div class="ms-row settings-row">
        <button
          class="ms-disclosure"
          type="button"
          data-disclosure="settings"
          aria-expanded=${String(r)}
          aria-controls="clean-settings"
          @click=${()=>this.#e("settings")}
        ><span>${o("v4_clean_settings","Cleaning settings")}</span><span class="ms-disclosure__value">${u}</span>${k(G)}</button>
        ${r?i`
          <div id="clean-settings" class="settings-body">
            <div class="split">
              <label class="ms-field">${o("v4_cleaning_system","Cleaning mode")}
                <select
                  class="ms-select"
                  aria-disabled=${p?"true":l}
                  aria-describedby=${this.#n(s)}
                  .value=${v}
                  @change=${this.#o(p,v,g=>this.#a({type:"set-clean-settings",cleaningMode:g}))}
                >${Q.map(g=>i`<option value=${g} ?selected=${g===v}>${X(o,g)}</option>`)}</select>
              </label>
              <label class="ms-field">${o("vacuum_coverage","Vacuum coverage")}
                <select
                  class="ms-select"
                  aria-disabled=${p||_?"true":l}
                  aria-describedby=${this.#n(_&&"clean-mop-hint",s)}
                  .value=${h}
                  @change=${this.#o(p||_,h,g=>this.#a({type:"set-clean-settings",coverageSetting:g}))}
                >${V.map(g=>i`<option value=${g} ?selected=${g===h}>${B(o,g)}</option>`)}</select>
              </label>
            </div>
            ${_?i`<p class="hint" id="clean-mop-hint">${o("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:l}
            ${a?i`
              <div class="switch-row">
                <span class="switch-copy">
                  <span id="due-label">${o("v4_include_due_schedule","Include scheduled work that's due")}</span>
                  <small id="due-hint">${o("v4_include_due_schedule_hint","Turn off to use only your settings. Skipped work stays due for the next clean.")}</small>
                </span>
                <button
                  class="ms-switch"
                  type="button"
                  role="switch"
                  aria-checked=${String(e.selection.useRoomSchedule)}
                  aria-labelledby="due-label"
                  aria-describedby=${this.#n("due-hint",s)}
                  aria-disabled=${p?"true":l}
                  @click=${()=>{p||this.#a({type:"set-use-room-schedule",value:!e.selection.useRoomSchedule})}}
                ></button>
              </div>
            `:l}
          </div>
        `:l}
      </div>
    `}#r(e,s,a,o){let r=this.#s,m=e.manualRoomPreview.status==="error",c=s?he(r,e.locale,s):[],d=o===null?null:o==="invalid_cadence_policy"&&e.selection.useRoomSchedule&&e.selection.roomSettings.some(u=>u.cleaningMode!=="vacuum")?r("v4_room_preview_schedule_override",`The room schedule can't use the cleaning mode you chose. Turn off "Include scheduled work that's due", or choose another mode.`):r("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.");return!c.length&&!a&&!m&&!d?l:i`
      <div class="check-lines">
        ${c.map(u=>i`<p class="line" data-tone="due">${k(ie)}<span>${u}</span></p>`)}
        ${a?i`<p class="line" data-tone="info">${k(ie)}<span>${r("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:a+1})}</span></p>`:l}
        ${m?i`
          <p class="line" data-tone="warning">${k(W)}<span>${r("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</span>
            <button class="ms-btn ms-btn--sm ms-btn--secondary" type="button" @click=${()=>this.#a({type:"retry-room-preview"})}>${r("v4_retry","Try again")}</button>
          </p>
        `:l}
        ${d?i`<p class="line" data-tone="warning">${k(W)}<span>${d}</span></p>`:l}
      </div>
    `}#c(e,s,a,o,r,m){let c=this.#s,d=e.selection.roomIds.includes(s.roomId),u=e.selection.roomSettings.find($=>$.roomId===s.roomId)??{roomId:s.roomId,cleaningMode:e.selection.cleaningMode,coverageSetting:e.selection.coverageSetting},v=r&&!d,h=o!==null,_=e.manualRoomPreview.status==="loading",p=m?.cadenceReasons??s.sharedCadenceReasons??s.sharedCadenceProgress?.reasons??[],g=d?ct(c,p):null,f=this._open===s.roomId,b=`room-settings-${a}`,x=`room-mop-hint-${a}`,C=u.cleaningMode==="mop";return i`
      <div class="ms-row room-row">
        <label class="ms-check">
          <input
            type="checkbox"
            .checked=${d}
            aria-disabled=${h||v?"true":l}
            aria-describedby=${this.#n(o??(v&&"rooms-limit"))}
            @click=${$=>{(h||v)&&$.preventDefault()}}
            @change=${()=>this.#a({type:"toggle-room",roomId:s.roomId})}
          >
          <span class="row-lines">
            <bdi>${s.name}</bdi>
            ${d?i`<small>${_?c("v4_room_preview_loading","Checking settings\u2026"):Z(c,m??u)}</small>`:l}
            ${g?i`<small class="problem-line">${k(W)}<span>${g}</span></small>`:l}
          </span>
        </label>
        ${d?i`
          <button
            class="ms-btn ms-btn--icon room-settings"
            type="button"
            data-room-disclosure=${s.roomId}
            aria-label=${c("v4_room_settings_named","Settings for {room}",{room:s.name})}
            aria-expanded=${String(f)}
            aria-controls=${b}
            @click=${()=>this.#e(s.roomId)}
          >${k(f?Ue:Ge)}</button>
        `:l}
        ${f?i`
          <div class="row-expanded" id=${b}>
            <div class="split">
              <label class="ms-field">${c("v4_cleaning_system","Cleaning mode")}
                <select
                  class="ms-select"
                  aria-label=${c("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:s.name})}
                  aria-disabled=${h?"true":l}
                  aria-describedby=${this.#n(o)}
                  .value=${u.cleaningMode}
                  @change=${this.#o(h,u.cleaningMode,$=>this.#a({type:"patch-room-settings",roomId:s.roomId,cleaningMode:$}))}
                >${Q.map($=>i`<option value=${$} ?selected=${$===u.cleaningMode}>${X(c,$)}</option>`)}</select>
              </label>
              <label class="ms-field">${c("vacuum_coverage","Vacuum coverage")}
                <select
                  class="ms-select"
                  aria-label=${c("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:s.name})}
                  aria-disabled=${h||C?"true":l}
                  aria-describedby=${this.#n(C&&x,o)}
                  .value=${u.coverageSetting}
                  @change=${this.#o(h||C,u.coverageSetting,$=>this.#a({type:"patch-room-settings",roomId:s.roomId,coverageSetting:$}))}
                >${V.map($=>i`<option value=${$} ?selected=${$===u.coverageSetting}>${B(c,$)}</option>`)}</select>
              </label>
            </div>
            ${C?i`<p class="hint" id=${x}>${c("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:l}
          </div>
        `:l}
      </div>
    `}render(){let e=this.#s,s=this.state,a=s.resources.plans.value?.rooms??[],o=a.length===0,r=ue(s),m=!je(s),c=m?r?"rooms-description":"rooms-held":null,d=s.selection.roomIds.length,u=d>=100,v=We(s)?.preview??null,h=v?v.rooms.map(f=>({...f,name:Rt(s,f.roomId)??f.name})):null,_=f=>h?.find(b=>b.roomId===f)??null,p=(h??[]).some(f=>f.cadenceReasons.some(b=>St.includes(b)))||a.some(f=>s.selection.roomIds.includes(f.roomId)&&(f.sharedCadenceProgress?.mopDue||f.sharedCadenceProgress?.coverageDue||(f.sharedCadenceReasons??f.sharedCadenceProgress?.reasons??[]).some(b=>St.includes(b)))),g=r?e("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):o?e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here."):e("v4_choose_rooms_detail","Choose rooms on the map or in the list.");return i`
      <div class="stack" @keydown=${this.#t}>
        <p class="description" id="rooms-description">${g}</p>
        ${m&&!r?i`<span class="sr-only" id="rooms-held">${e("v4_reason_clean_rooms_verification","Waiting for the map to be ready.")}</span>`:l}
        ${o?l:i`
          <div class="list-header">
            <h3 class="ms-section-heading" id="rooms-heading">${e("v4_rooms_to_clean","Rooms to clean")}</h3>
            ${d?i`
              <small>${e("v4_rooms_selected","{count} selected",{count:d})}</small>
              <button
                class="ms-btn ms-btn--sm ms-btn--secondary clear"
                type="button"
                aria-disabled=${m?"true":l}
                aria-describedby=${this.#n(c)}
                @click=${()=>{m||this.#a({type:"clear-selection"})}}
              >${e("v4_clear","Clear")}</button>
            `:l}
          </div>
          ${u?i`<p class="limit" id="rooms-limit">${e("v4_room_limit_reached","Up to {limit} rooms fit in one clean, so remove one to add another.",{limit:100})}</p>`:l}
          ${this.#l(s,c,p)}
          ${this.#r(s,h,v?.missionBoundaries.length??0,v?.blocker??null)}
          <div class="room-list" role="group" aria-labelledby="rooms-heading">
            ${a.map((f,b)=>this.#c(s,f,b,c,u,_(f.roomId)))}
          </div>
        `}
      </div>
    `}};customElements.get(re)||customElements.define(re,Pe);var Me=class extends z{constructor(){super(...arguments);this.state=I();this.compact=!1;this.inline=!1}static{this.properties={state:{attribute:!1},localize:{attribute:!1},compact:{type:Boolean,reflect:!0},inline:{type:Boolean,reflect:!0}}}static{this.styles=[N,L,A,P`
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
`]}#s(e,s){return M(this.localize,e,s)}#a(e){this.dispatchEvent(new CustomEvent(q,{detail:e,bubbles:!0,composed:!0}))}#t(e){let s=e.currentTarget.valueAsNumber;Number.isFinite(s)&&this.#a({type:"set-brush",value:s})}render(){let{draw:e}=this.state;return i`
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
    `}};customElements.get(Se)||customElements.define(Se,Me);var Ie=class extends z{constructor(){super(...arguments);this.state=I();this.#t=new F(this,".more","> button")}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[N,L,A,P`
:host { display: contents; }
.more { position: relative; margin-inline-start: auto; }
.more > .ms-btn { transition: none; }
.reason { flex-basis: 100%; margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: end; }
.menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.menu .reason { padding: var(--ms-space-1) var(--ms-space-3); text-align: start; }
`]}#s(e,s,a){return M(this.localize,e,s,a)}#a(e,s=this){s.dispatchEvent(new CustomEvent(q,{detail:e,bubbles:!0,composed:!0}))}#t;willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this.#t.open=!1)}#e(){let{command:e,pendingAction:s,planDraft:a}=this.state;return s==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):a.dirty?this.#s("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes."):e==="pending"?this.#s("v4_reason_robot_operation_waiting","Waiting for the robot to finish what it's doing."):null}#o(e){if(this.#e())return;let s=e.currentTarget.closest(".more")?.querySelector("button");this.#t.close(!1),this.#a({type:"open-dialog",dialog:"confirmDeletePlan"},s??this)}render(){let{planView:e,planDraft:s,pendingAction:a}=this.state;if(e==="run"){let r=a==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):a==="run-plan"?this.#s("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return i`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#s("v4_edit_plan_named","Edit {plan}",{plan:s.name})}
          aria-disabled=${r?"true":l}
          aria-describedby=${r?"edit-reason":l}
          @click=${()=>{r||this.#a({type:"set-plan-view",view:"edit"})}}
        >${this.#s("v4_edit","Edit")}</button>
        ${r?i`<p class="reason" id="edit-reason">${r}</p>`:l}
      `}if(!J(this.state,"confirmDeletePlan"))return l;let o=this.#e();return i`
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
              aria-disabled=${o?"true":l}
              aria-describedby=${o?"delete-reason":l}
              @click=${this.#o}
            >${this.#s("plan_delete","Delete")}</button></div>
            ${o?i`<p class="reason" id="delete-reason">${o}</p>`:l}
          </div>
        `:l}
      </div>
    `}};customElements.get(oe)||customElements.define(oe,Ie);var ts=(t,n,e)=>i`${t.planView==="run"?i`<bdi>${n}</bdi>`:n}${t.planDraft.dirty?i` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:l}`,Ct=ae(oe),ss=(t,n,e)=>ne`<${Ct}
  .state=${t}
  .localize=${n}
  @matic-workspace-intent=${e}
></${Ct}>`,Et=(t,n,e,s)=>{let a=s?.room;if(a===void 0)return t(n,e,s);let[o,r]=t(n,e,{...s,room:"\0"}).split("\0");return i`${o}<bdi>${a}</bdi>${r}`},as=(t,n,e,s)=>{let a=e?n.jump:void 0;return i`${Et(t,n.reasonKey??"",n.reason??"",n.reasonPlaceholders)}${a?i` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>s({type:"set-plan-view",view:"edit",roomId:a.roomId})}
  >${Et(t,a.labelKey,a.label,a.labelPlaceholders)}</button>`:l}`},ns=(t,n,e,s)=>{let a=t.pendingAction==="save-plan",o=n?.id==="save-plan"?"primary-reason":"cancel-reason";return i`
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
  `},os=(t,n,e)=>{let s=e.querySelector(U)?.shadowRoot?.querySelector(H)?.shadowRoot;if(n.workflow==="plan"&&n.planView==="edit"&&n.expandedRoom)return s?.querySelector(`[data-room-disclosure="${CSS.escape(n.expandedRoom)}"]`);if(n.workflow==="plan"&&t.planView==="edit")return e.querySelector(oe)?.shadowRoot?.querySelector("button");let a=t.selection.planId;return n.workflow==="plans"&&a?s?.querySelector(`[data-plan-row="${CSS.escape(a)}"]`):null},rs=(t,n,e,s)=>{let a=os(t,n,e);return s(a)?(a.scrollIntoView({block:"nearest"}),a.focus({preventScroll:!0}),!0):!1};var is=(t,n,e)=>{let s=(u,v,h)=>M(e,u,v,h),a=J(n),o=n.cadenceResetRequest,r=n.resources.plans.value,m=o&&r?.rooms.find(u=>u.roomId===o.roomId)?.name||o?.roomId||"room",c=o?r?.plans.find(u=>u.id===o.planId)?.rooms.find(u=>u.roomId===o.roomId)?.cadence?.scope==="shared":!1,d=o?.mode??"mop";switch(t){case"confirmDeletePlan":return a&&{title:s("v4_delete_plan","Delete plan?"),detail:s("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:a.name}),...a.successor===void 0?{}:{consequence:a.successor===null?s("v4_delete_plan_none","You'll have no default plan."):s("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:a.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return a&&{title:s("v4_delete_area","Delete area?"),detail:s("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:a.name}),...a.successor===void 0?{}:{consequence:a.successor===null?s("v4_delete_area_none","No custom area will be selected."):s("v4_delete_area_selected","{area} becomes the selected custom area.",{area:a.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:d==="mop"?s("v4_reset_mop_cadence_title","Reset mopping progress?"):s("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:c?s("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:m}):s("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:m}),cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("v4_reset","Reset"),action:"reset-room-cadence"}}},ls=(t,n,e)=>{let s=t;if(!Le(s.detail))return;if(Ae(n,s.detail)){t.stopPropagation(),e(s.detail);return}if(s.detail?.type!=="open-dialog")return;let a=s.composedPath().find(o=>o instanceof HTMLElement&&o.hasAttribute("data-dialog-launcher"));return a instanceof HTMLElement?a:void 0},cs=(t,n,e,s)=>{let a=t.cadenceResetRequest;e({type:"dismiss-top-layer"}),n!=="reset-room-cadence"?s(n):a&&s({id:n,planId:a.planId,roomId:a.roomId,mode:a.mode})},ds=(t,n)=>{let e=t.cadenceResetRequest;return t.dialog!=="confirmResetCadence"||!e?null:n.querySelector(U)?.shadowRoot?.querySelector(H)?.shadowRoot?.querySelector(`[data-room-disclosure="${CSS.escape(e.roomId)}"]`)??null};var ze=class{constructor(n){this.menu=new F(n,".overflow-wrap",".overflow")}render({state:n,narrow:e,browserFullscreen:s,t:a,intent:o,diagnostics:r,fullscreen:m}){let c=(u,v,h)=>i`
      <button class="ms-row ms-row--menu" type="button" role="menuitemradio" aria-checked=${String(u)} tabindex="-1" @click=${h}>${v}</button>
    `,d=(u,v)=>c(n.quality===u,v,()=>o({type:"set-quality",quality:u}));return i`
      <div id="map-options" class="overflow-menu ms-surface ms-surface--overlay" role="menu" aria-label=${a("v4_map_options","Map options")}>
        ${e?i`
          <div role="group" aria-labelledby="menu-display">
            <p class="menu-heading" id="menu-display" role="presentation">${a("v4_map_display","Map display")}</p>
            ${n.view==="top"?i`
              ${c(n.appearance==="photo",a("map_style_photo","Photo"),()=>o({type:"set-appearance",appearance:"photo"}))}
              ${c(n.appearance==="rooms",a("v4_room_colours","Room colors"),()=>o({type:"set-appearance",appearance:"rooms"}))}
            `:l}
            <button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitemcheckbox"
              aria-checked=${String(n.labelsVisible)}
              tabindex="-1"
              @click=${()=>o({type:"toggle-labels"})}
            ><span>${a("v4_room_names","Room names")}</span><span class="ms-switch" aria-checked=${String(n.labelsVisible)} aria-hidden="true"></span></button>
          </div>
        `:l}
        <div role="group" aria-labelledby="menu-detail">
          <p class="menu-heading" id="menu-detail" role="presentation">${a("map_quality_label","Map detail")}</p>
          ${d("auto",a("map_quality_auto","Auto detail"))}
          ${d("efficient",a("map_quality_efficient","Efficient"))}
          ${d("balanced",a("map_quality_balanced","Balanced"))}
          ${d("maximum",a("map_quality_maximum","Maximum"))}
        </div>
        <button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!1),r()}}>${a("v4_map_diagnostics","Map diagnostics")}</button>
        <button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!0),m()}}>${s?a("v4_leave_full_screen","Leave full screen"):a("v4_full_screen","Full screen")}</button>
      </div>
    `}};var Tt=ae(H),Pt=ae(re),de=t=>t.currentTarget.value,Ne=class extends z{constructor(){super(...arguments);this.state=I();this._historyPreviewPosition=null;this.#s=new Ye(this,()=>import("./diagnostics-panel-XQW6DZYX.js"));this.#a="";this.#n=(e,s,a)=>this.#t(e,s,a)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0}}}static{this.styles=[N,L,A,P`
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
`]}#s;#a;willUpdate(e){if(!e.has("state"))return;let{workflow:s,selection:a}=this.state,o=`${s}:${a.floorId}:${a.historyId??"live"}`;o!==this.#a&&(this.#a=o,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#t(e,s,a){return M(this.localize,e,s,a)}#e(e){return X(this.#n,e)}#o(e){return B(this.#n,e)}#n;#l(e){return e==="vacuum"?l:i`<p class="subtle">${this.#t("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#r(e){this.dispatchEvent(new CustomEvent(q,{detail:e,bubbles:!0,composed:!0}))}#c(e){switch(e){case"rooms":case"plans":case"plan":return{loading:this.#t("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#t("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#t("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#t("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#t("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#t("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#t("v4_loading_history","Loading map history\u2026"),unavailable:this.#t("v4_history_unavailable","Map history is unavailable right now."),empty:this.#t("v4_no_map_history","No saved map snapshots yet.")}}}#d({status:e,value:s},a,o){let r=this.#c(o);return s===null&&(e==="idle"||e==="loading")?i`<div class="loading" role="status">${r.loading}</div>`:e==="error"?i`
        <div class="stack">
          <div class="problem" role="alert">${r.unavailable}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:o})}>${this.#t("v4_retry","Try again")}</button>
          </div>
        </div>
      `:e==="empty"?i`<div class="empty">${r.empty}</div>`:a}#h(){return this.#d(this.state.resources.plans,ne`<${Pt}
      .state=${this.state}
      .localize=${this.localize}
    ></${Pt}>`,"rooms")}#p(){let e=this.state.workflow==="plans"?"plans":"plan";return this.#d(this.state.resources.plans,ne`<${Tt}
      .state=${this.state}
      .localize=${this.localize}
    ></${Tt}>`,e)}#g(){let e=this.state.resources.areas;return i`
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
    `}#m(){let e=this.state.areaDraft,s=this.state.resources.areas,a=e.canRebind||e.status==="review",o=!a&&(e.status==="stale"||e.status==="unknown");return i`
      <div class="stack">
        ${s.status==="error"?i`
          <div class="stack">
            <div class="problem" role="alert">${this.#c("areaReview").unavailable}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"areaReview"})}>${this.#t("v4_retry","Try again")}</button></div>
          </div>
        `:l}
        ${a?i`<div class="notice" data-tone="warning" role="status">${this.#t("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:l}
        ${o?i`<div class="problem" role="alert">${this.#t("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:l}
        <label class="field ms-field">${this.#t("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} @input=${r=>this.#r({type:"patch-area-draft",patch:{name:de(r)}})}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#t("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} @change=${r=>this.#r({type:"patch-area-draft",patch:{cleaningMode:de(r)}})}>${Q.map(r=>i`<option value=${r} ?selected=${r===e.cleaningMode}>${this.#e(r)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#t("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} @change=${r=>this.#r({type:"patch-area-draft",patch:{coverageSetting:de(r)}})}>${V.map(r=>i`<option value=${r} ?selected=${r===e.coverageSetting}>${this.#o(r)}</option>`)}</select>
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
    `}#i(){let e=this.state.resources.history,s=e.value,a=s?.floors.find(u=>u.id===this.state.selection.floorId)||s?.floors.find(u=>u.active)||s?.floors[0],o=a?.snapshots||[],r=this.state.selection.historyId?Math.max(0,o.findIndex(u=>u.id===this.state.selection.historyId)):o.length,m=a?.active?this.#t("map_timeline_live_action","Live"):this.#t("v4_return_current_floor","Return to current floor"),c=this._historyPreviewPosition??r,d=o[c];return this.#d(e,i`
      <div class="stack">
        ${(s?.floors.length||0)>1?i`
          <div class="group">
            <h3 class="group-heading" id="floors-heading">${this.#t("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(s?.floors||[]).map((u,v)=>i`
              <button
                class="floor ms-row ms-row"
                type="button"
                aria-current=${String(u.id===a?.id)}
                @click=${()=>this.#r({type:"set-floor",floorId:u.id})}
              >
                <span>${u.label||(u.active?this.#t("v4_current_floor","Current floor"):this.#t("v4_saved_floor","Saved floor {number}",{number:u.ordinal??v}))}</span>
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
              max=${String(o.length)}
              step="1"
              .value=${String(c)}
              aria-valuetext=${d?Re(d.createdAt,this.dates):m}
              ?disabled=${!o.length}
              @input=${u=>{this._historyPreviewPosition=Number(de(u))}}
              @change=${u=>{let v=Number(de(u));this._historyPreviewPosition=null,this.#r({type:"set-history",historyId:v===o.length?null:o[v]?.id||null})}}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId&&!!a?.active)} @click=${()=>this.#r({type:"set-history",historyId:null})}><span>${m}</span><small>${this.#t("v4_current","Current")}</small></button>
            ${o.map((u,v)=>i`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(u.id===this.state.selection.historyId)} @click=${()=>this.#r({type:"set-history",historyId:u.id})}>
                <span>${Re(u.createdAt,this.dates)}</span><small>${this.#t("v4_history_position","{position} of {count}",{position:v+1,count:o.length})}</small>
              </button>
            `)}
          </div>
        </div>
        <p class="subtle">${this.#t("v4_history_privacy","Saved maps show one floor each and never show where the robot is now.")}</p>
      </div>
    `,"history")}#v(){return this.#s.request(),this.#s.status!=="ready"?Je(this.#s.status,this.localize,this.retry):i`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}#u(e){return i`<fieldset class="workflow-fields" ?disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}>${e}</fieldset>`}render(){switch(this.state.workflow){case"rooms":return this.#h();case"plans":case"plan":return this.#p();case"draw":return this.#u(this.#g());case"areaReview":return this.#u(this.#m());case"history":return this.#u(this.#i());case"support":return this.#v();case"none":return l}}};customElements.get(U)||customElements.define(U,Ne);export{ze as MapOptions,Ne as MaticMapWorkflowV4,as as actionReason,cs as confirmDialog,is as dialogCopy,ls as dialogLauncher,ds as dialogReturnTarget,rs as focusPlanTarget,ns as planCancel,ts as planTitle,ss as planTools,Jt as roomTapAnnouncement,Yt as roomsSummary,Zt as selectedRoomNames};
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
