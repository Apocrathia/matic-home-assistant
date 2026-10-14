import{a as O,b as jt}from"./chunk-7OSDJTOM.js";import{E as ct,H as dt,O as we,P as mt,R as H,T,U as ke,V as pt,W as ut,a as se,b as oe,d as me,e as Q,f as pe,g as q,h as ue}from"./chunk-2OS4GHO6.js";import{A as rt,B as ae,C as ye,D as it,E as lt,P as ve,R as D,T as $,a as L,b as A,c as W,f as fe,j as X,k as at,l as nt}from"./chunk-7CFWVNCJ.js";import{$ as ot,A as Xe,F as Ye,G as Ze,H as Je,I as et,J as tt,L as G,M as Le,U as I,W as i,Z as st,_ as l,aa as N,ba as P,c as ee,ca as $e,da as Ae,e as Fe,f as Ke,j as Ue,k as Ge,n as z,p as Ne,q as Qe,t as te}from"./chunk-BCOQOMZR.js";var xe=1,he=100,vt=(t,a,e)=>{if(a)return e;let s=t.trim();if(s==="")return null;let o=Number(s);return Number.isFinite(o)?Math.min(he,Math.max(xe,Math.round(o))):e},ht=(t,a)=>t===null?a>0?xe:null:t+a<xe?null:Math.min(he,t+a),Se=I` .ms-stepper{--ms-local:var(--ms-surface-card);display:inline-grid;flex:none;grid-template-columns:var(--ms-control) minmax(3rem,4.5rem) var(--ms-control);gap:var(--ms-space-1);align-items:center;border:1px solid var(--ms-line-strong);border-radius:var(--ms-radius-sm);background:var(--ms-local);}.ms-stepper--readonly{grid-template-columns:minmax(3rem,4.5rem);}.ms-stepper .ms-btn{border-radius:calc(var(--ms-radius-sm) - 1px);}.ms-stepper input{inline-size:100%;min-inline-size:0;min-block-size:var(--ms-control);margin:0;padding:0;border:0;border-radius:var(--ms-radius-xs);color:var(--ms-text);background:transparent;font:inherit;font-size:var(--ms-t-md);font-weight:var(--ms-w-medium);font-variant-numeric:tabular-nums;text-align:center;appearance:textfield;-moz-appearance:textfield;}.ms-stepper input::-webkit-inner-spin-button,.ms-stepper input::-webkit-outer-spin-button{margin:0;appearance:none;-webkit-appearance:none;}.ms-stepper input::placeholder{color:var(--ms-text-quiet);font-weight:var(--ms-w-medium);opacity:1;}.ms-stepper input:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px;}.ms-stepper input[readonly]{color:var(--ms-text-quiet);}@media (forced-colors:active){.ms-stepper{border:1px solid CanvasText;}}`,gt=t=>{let{id:a,t:e,value:s}=t,o=t.heldBy!==null,n=i`<input
    id=${a}
    type="number"
    inputmode="numeric"
    min="1"
    max=${he}
    step="1"
    placeholder=${e("v4_cadence_off","Off")}
    aria-labelledby=${t.labelId}
    aria-describedby=${t.describedBy??l}
    aria-disabled=${o&&!t.readonly?"true":l}
    ?readonly=${t.readonly||o}
    .value=${s===null?"":String(s)}
    @change=${d=>{let c=d.currentTarget,m=t.readonly||o?s:vt(c.value,c.validity.badInput,s);c.value=m===null?"":String(m),m!==s&&t.commit(m)}}
  >`;if(t.readonly)return i`<span class="ms-stepper ms-stepper--readonly">${n}</span>`;let r=d=>{let m=(d<0?s===null:s===he)?d<0?e("v4_cadence_stepper_off_reason","This schedule is already off."):e("v4_cadence_stepper_max_reason","Every 100 cleans is the longest schedule."):null,g=`${a}-${d<0?"min":"max"}`,p=d<0?e("v4_stepper_decrease","Decrease {label}",{label:t.label}):e("v4_stepper_increase","Increase {label}",{label:t.label});return i`<button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${p}
      aria-controls=${a}
      aria-disabled=${m||o?"true":l}
      aria-describedby=${[m?g:null,t.heldBy].filter(Boolean).join(" ")||l}
      title=${m??l}
      @click=${()=>{!m&&!o&&t.commit(ht(s,d))}}
    >${$(d<0?ye:ae)}${m?i`<span class="sr-only" id=${g}>${m}</span>`:l}</button>`};return i`<span class="ms-stepper">${r(-1)}${n}${r(1)}</span>`};var Y=["vacuum","mop","vacuum_and_mop"],B=["quick","standard","heavy_duty"],Z=(t,a)=>a==="vacuum"?t("vacuum","Vacuum"):a==="mop"?t("mop","Mop"):t("vacuum_and_mop","Vacuum + mop"),j=(t,a)=>a==="quick"?t("quick","Quick"):a==="standard"?t("standard","Optimal"):t("heavy_duty","Heavy duty"),bt=t=>t("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."),ft=(t,a)=>{if(a.includes("coverage_requires_vacuum"))return bt(t);if(a.includes("identity_changed")||a.includes("room_not_on_current_map"))return t("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(a.includes("shared_schedule_unavailable"))return t("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(a.includes("mop_progress_unverified")||a.includes("coverage_progress_unverified")){let e=[];return a.includes("mop_progress_unverified")&&e.push(t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),a.includes("coverage_progress_unverified")&&e.push(t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),e.join(" ")}return a.includes("invalid_cadence_policy")?t("v4_cadence_policy_invalid","The room schedule needs review before it can be applied."):null},Ft={scope:"shared",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1},Ee=t=>!!(t&&(t.mopEveryN!==null||t.coverageEveryN!==null)),Kt={quick:(t,a,e)=>a===null?t("v4_cadence_coverage_quick_off","Quick vacuum"):e?t("v4_cadence_coverage_quick_one","Quick vacuum every clean"):t("v4_cadence_coverage_quick","Quick vacuum every {count} cleans",{count:a}),standard:(t,a,e)=>a===null?t("v4_cadence_coverage_optimal_off","Optimal vacuum"):e?t("v4_cadence_coverage_optimal_one","Optimal vacuum every clean"):t("v4_cadence_coverage_optimal","Optimal vacuum every {count} cleans",{count:a}),heavy_duty:(t,a,e)=>a===null?t("v4_cadence_coverage_heavy_off","Heavy duty vacuum"):e?t("v4_cadence_coverage_heavy_one","Heavy duty vacuum every clean"):t("v4_cadence_coverage_heavy","Heavy duty vacuum every {count} cleans",{count:a})},Ut={quick:(t,a)=>a?t("v4_cadence_next_mop_quick","Mop and quick vacuum on the next clean"):t("v4_cadence_next_quick","Quick vacuum on the next clean"),standard:(t,a)=>a?t("v4_cadence_next_mop_optimal","Mop and optimal vacuum on the next clean"):t("v4_cadence_next_optimal","Optimal vacuum on the next clean"),heavy_duty:(t,a)=>a?t("v4_cadence_next_mop_heavy","Mop and heavy duty vacuum on the next clean"):t("v4_cadence_next_heavy","Heavy duty vacuum on the next clean")},Gt=(t,a,e)=>e===null?t("v4_cadence_mop_off","Mop"):e===1?t("v4_cadence_mop_interval_one","Mop every clean"):t("v4_cadence_mop_interval","Mop every {count} cleans",{count:T(a,e)}),Qt=(t,a,e,s)=>Kt[e](t,s===null?null:T(a,s),s===1),Xt=["identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy"],ge=({room:t,saved:a,catalogRoom:e})=>{let s=t.cadence??Ft,o=e?.sharedCadence,n=o===void 0&&(e?.sharedCadenceReasons?.length??0)>0,r=o!==void 0||n,d=a?.cadence?.scope==="shared",c=o!==void 0&&!d&&t.cadence?.scope==="shared";return{policy:s,shared:o,sharedExists:r,participating:d,joinPending:c,progress:c?e?.sharedCadenceProgress:t.cadenceProgress,reasons:c?e?.sharedCadenceReasons??[]:t.cadenceReasons??[],savedPolicy:a?.cadence,savedProgress:a?.cadenceProgress,sharedFits:!o||(o.mopEveryN===null||t.cleaningMode==="vacuum")&&(o.coverageEveryN===null||t.cleaningMode!=="mop"),sharedBroken:n}},V={mop:{every:"mopEveryN",flag:"doMopNext",next:"nextMopIn",count:"mopProgress"},coverage:{every:"coverageEveryN",flag:"doCoverageNext",next:"nextCoverageIn",count:"coverageProgress"}},yt=(t,a)=>!!(t.joinPending?t.shared:t.savedPolicy)?.[V[a].flag],We=t=>!t.joinPending&&t.savedPolicy!==void 0&&t.savedPolicy.scope!==t.policy.scope,$t=(t,a)=>{let{every:e,flag:s,next:o,count:n}=V[a],r=t.policy[e];if(!t.progress||r===null)return null;if(!(!t.joinPending&&(We(t)||r!==(t.savedPolicy?.[e]??null)||t.policy[s]!==yt(t,a))))return t.progress[o];let c=We(t)?0:t.progress[n];return t.policy[s]||c>=r-1?1:r-c},Yt=(t,a)=>{let e=V[a].every,s=t.savedPolicy?.[e]??null;return!t.joinPending&&s!==null&&t.policy[e]!==null&&t.policy[e]!==s},Te=(t,a)=>{let e=t.policy[V[a].every];return e!==null&&e>1&&(yt(t,a)||$t(t,a)!==1)},wt=({room:t},a)=>({mop:!a.reasons.includes("mop_progress_unverified")&&t.cleaningMode!=="vacuum"&&a.policy.mopEveryN===null,coverage:!a.reasons.includes("coverage_progress_unverified")&&t.cleaningMode==="mop"}),_t=(t,a,e,s)=>{let o=e.policy[V[s].every],n=$t(e,s);return o===null?t("v4_cadence_status_off","Not scheduled"):o===1?t("v4_cadence_status_every","Due every clean"):e.policy[V[s].flag]||n===1?t("v4_cadence_status_next","Due next clean"):Yt(e,s)?t("v4_cadence_status_edited","Keeps the progress so far"):We(e)||n===null?null:t("v4_cadence_status_in","Due in {count} cleans",{count:T(a,n)})},Zt=(t,a,e)=>{let{policy:s,participating:o}=a,n=Ee(s);if(a.joinPending)return t("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");if(o&&s.scope==="plan")return t("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule.");if(!o&&s.scope==="shared"&&n)return t("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero.");let r=["mop","coverage"].some(d=>s[V[d].every]!==null&&(a.savedProgress?.[V[d].count]??0)>0);return s.scope==="plan"&&n&&!Ee(a.savedPolicy)&&!r?t("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):a.savedPolicy&&(s.mopEveryN!==a.savedPolicy.mopEveryN||s.coverageEveryN!==a.savedPolicy.coverageEveryN)?t("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."):o?t("v4_cadence_shared_edit_effect","Changes apply to every plan that uses {room}'s shared schedule.",{room:e}):null},Jt=(t,a,e)=>{let s=ge(e),{policy:o,reasons:n}=s,{room:r,saved:d,name:c}=e,m=o.coverageEveryN!==null,g=(m?null:e.offLevel)??o.periodicCoverageSetting??"heavy_duty",p=M=>n.includes(M),u=p("mop_progress_unverified"),{mop:h,coverage:v}=wt(e,s),f=p("coverage_progress_unverified"),_=!f&&r.cleaningMode==="mop"&&m,b=et(n.filter(M=>Xt.includes(M)),c),x=o.doMopNext||o.doCoverageNext,R=x?o.doMopNext:Te(s,"mop"),w=x?o.doCoverageNext:Te(s,"coverage"),C=(M,U,ce)=>d!==void 0&&((M??0)>0||!!U||!!d.cadenceReasons?.includes(ce));return{policy:o,level:g,mop:{every:o.mopEveryN,label:Gt(t,a,o.mopEveryN),status:_t(t,a,s,"mop"),reason:u?t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):h?t("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum."):null,blocked:h,unverified:u},coverage:{every:o.coverageEveryN,label:Qt(t,a,g,o.coverageEveryN),status:_t(t,a,s,"coverage"),reason:f?t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):_?bt(t):v?t("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming."):null,blocked:v,unverified:f},legacyCoverage:_,roomReason:b?t(b.reasonKey,b.reason,b.reasonPlaceholders):null,sharedHint:s.shared!==void 0&&s.sharedFits&&!s.participating&&o.scope==="shared"&&!Ee(o),joinPending:s.joinPending,participating:s.participating,next:R||w?{label:w?Ut[g](t,R):t("v4_cadence_next_mop","Mop on the next clean"),on:x,mop:R,coverage:w,blocked:R&&h?"mop":w&&v?"coverage":null}:null,explanation:Zt(t,s,c),scope:o.scope,resettable:{mop:C(d?.cadenceProgress?.mopProgress,d?.cadence?.doMopNext,"mop_progress_unverified"),coverage:C(d?.cadenceProgress?.coverageProgress,d?.cadence?.doCoverageNext,"coverage_progress_unverified")},sharedReason:De(s)?s.sharedBroken?t("v4_cadence_shared_broken_reason","Can't count across all plans until you fix this room's shared schedule in a plan that uses it."):t("v4_cadence_shared_mode_reason","Can't count across all plans until this room's cleaning mode works with its shared schedule."):null}},kt=t=>t.shared&&t.sharedFits&&!t.participating?{...t.shared,scope:"shared"}:null,De=t=>t.sharedExists&&(!t.sharedFits||t.sharedBroken)&&!t.participating,xt=(t,a,e)=>{let s=ge(t),{policy:o}=s;if(s.joinPending)return null;if(e!==null&&!Ee(o)&&o.scope==="shared"){let r=kt(s);if(r)return r;if(De(s))return xt({...t,room:{...t.room,cadence:{...o,scope:"plan"}}},a,e)}let n=e!==null&&e>1;return a==="mop"?{...o,mopEveryN:e,doMopNext:n&&o.doMopNext}:e===null?{...o,coverageEveryN:null,doCoverageNext:!1}:o.coverageEveryN===null?{...o,coverageEveryN:e,periodicCoverageSetting:t.offLevel??o.periodicCoverageSetting??"heavy_duty"}:{...o,coverageEveryN:e,doCoverageNext:n&&o.doCoverageNext}},es=(t,a)=>{let e=ge(t);return e.joinPending||e.policy.coverageEveryN===null?null:{...e.policy,periodicCoverageSetting:a}},ts=(t,a)=>{let e=ge(t);if(e.joinPending)return null;let s=Te(e,"mop"),o=Te(e,"coverage");if(!s&&!o&&!e.policy.doMopNext&&!e.policy.doCoverageNext)return null;let n=wt(t,e);return a&&(s&&n.mop||o&&n.coverage)?null:a?{...e.policy,doMopNext:s,doCoverageNext:o}:{...e.policy,doMopNext:!1,doCoverageNext:!1}},ss=(t,a)=>{let e=ge(t);return a==="shared"&&De(e)?null:(a==="shared"?kt(e):null)??{...e.policy,scope:a}},os=t=>({...t,scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1}),as=(t,a)=>a.planDraft.dirty?t("v4_reason_reset_unsaved","Can't reset until you save or cancel your changes."):a.command!=="idle"||a.managedLock||a.activity!=="idle"&&a.activity!=="docked"||a.dataMode!=="live"?t("v4_reason_reset_busy","Can't reset until the robot is idle and the map is live."):null,ns=(t,a,e,s)=>{let o=t.resources.plans.value,n=t.planDraft.id;return{room:a,saved:n?o?.plans.find(r=>r.id===n)?.rooms.find(r=>r.roomId===a.roomId):void 0,catalogRoom:o?.rooms.find(r=>r.roomId===a.roomId),name:e,offLevel:s}},Re="\0",Ce=(t,a)=>{let[e,...s]=t.split(Re);return s.length?i`${e}<bdi>${a}</bdi>${s.join(a)}`:t},St=(t,a,e,s)=>{let{t:o,state:n,held:r}=t,d=n.planDraft,c=ns(n,a,s,t.offLevel),m=Jt(o,n.locale,{...c,name:Re}),g=(y,k,E="small")=>E==="p"?i`<p class="sched-status sched-reason" id=${y??l}>${$(D)}<span>${k}</span></p>`:i`<small class="sched-status sched-reason" id=${y??l}>${$(D)}<span>${k}</span></small>`,{policy:p,next:u}=m,h=y=>{if(!y||r)return;let k=d.rooms.map((E,S)=>S===e?{...E,cadence:y}:E);t.intent({type:"patch-plan-draft",patch:{rooms:k}})},v={disabled:r?"true":l,described:r??l},f=(...y)=>y.filter(Boolean).join(" ")||null,_=(y,k)=>k.reason?g(y,k.reason):k.status?i`<small class="sched-status" id=${y}>${k.status}</small>`:l,b=as(o,n),x=!!(r||b),R=(y,k,E,S=null)=>i`<button
    class=${k}
    type="button"
    role=${S??l}
    tabindex=${S?"-1":l}
    aria-label=${y==="mop"?o("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:s}):o("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:s})}
    aria-disabled=${x?"true":l}
    aria-describedby=${r??(b?E:null)??l}
    @click=${()=>{x||!d.id||(t.menu.close(!1),t.intent({type:"request-room-cadence-reset",planId:d.id,roomId:a.roomId,mode:y}))}}
  >${y==="mop"?o("v4_reset_mop_cadence_button","Reset mopping"):o("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`,w=o("v4_room_more_named","More for {room}",{room:s}),{menu:C}=t,M=d.id&&(m.resettable.mop||m.resettable.coverage)?i`<div class="room-more" @keydown=${C.keydown} @focusout=${C.focusout}>
    <button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${w}
      title=${w}
      aria-haspopup="menu"
      aria-expanded=${String(C.open)}
      aria-disabled=${v.disabled}
      aria-describedby=${v.described}
      @click=${()=>{r||C.toggle()}}
    >${$(fe)}</button>
    ${C.open&&!r?i`<div class="menu ms-surface ms-surface--overlay" @mousedown=${y=>y.preventDefault()}>
      <div role="menu" aria-label=${w}>
        ${m.resettable.mop?R("mop","ms-row ms-row--menu","reset-reason","menuitem"):l}
        ${m.resettable.coverage?R("coverage","ms-row ms-row--menu","reset-reason","menuitem"):l}
      </div>
      ${b?i`<div class="reason">${g("reset-reason",b,"p")}</div>`:l}
    </div>`:l}
  </div>`:l,U=(y,k,E)=>{let S=`sched-${y}`,de=k.reason||k.status?`${S}-status`:null;return i`<div class="sched-row">
      <label class="sched-label" id=${`${S}-label`} for=${S}>${k.label}</label>
      <div class="sched-controls">
        ${E}
        ${gt({id:S,labelId:`${S}-label`,label:k.label,value:k.every,describedBy:f(de,r),heldBy:r??(k.blocked?de:null),readonly:m.joinPending,t:o,commit:be=>h(xt(c,y,be))})}
      </div>
      ${_(`${S}-status`,k)}
      ${k.unverified&&d.id?i`${R(y,"ms-btn ms-btn--secondary",`${S}-reset-reason`)}
        ${b?g(`${S}-reset-reason`,b,"p"):l}`:l}
    </div>`},ce=r??(m.coverage.blocked?"sched-coverage-status":null),Bt=m.joinPending?l:i`<select
    class="ms-select sched-level"
    aria-label=${o("v4_cadence_level_named","Vacuum level for {room}",{room:s})}
    aria-disabled=${ce?"true":l}
    aria-describedby=${ce??l}
    .value=${m.level}
    @change=${y=>{let k=y.currentTarget;if(ce){k.value=m.level;return}let E=k.value,S=es(c,E);t.setOffLevel(S?null:E),S&&h(S)}}
  >${B.map(y=>i`<option value=${y} ?selected=${y===m.level}>${j(o,y)}</option>`)}</select>`;return i`<section class="schedule" role="group" aria-label=${o("v4_room_cadence_named","Room schedule for {room}",{room:s})}>
    <div class="schedule-head"><h3>${o("v4_room_schedule","Schedule")}</h3>${M}</div>
    ${m.roomReason?g(null,Ce(m.roomReason,s),"p"):l}
    ${m.sharedHint?i`<p class="schedule-note">${Ce(o("v4_cadence_shared_available","{room} has a shared schedule, and turning on a row uses it.",{room:Re}),s)}</p>`:l}
    ${U("mop",m.mop,l)}
    ${U("coverage",m.coverage,Bt)}
    ${m.legacyCoverage?i`<button
      type="button"
      class="ms-btn ms-btn--secondary sched-off"
      aria-label=${o("v4_cadence_turn_off_named","Turn off the vacuum rotation in {room}",{room:s})}
      aria-disabled=${v.disabled}
      aria-describedby=${v.described}
      @click=${()=>h(os(p))}
    >${o("v4_cadence_clear_room_coverage","Turn off")}</button>`:l}
    ${u?i`<div class="switch-row">
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
        aria-describedby=${f("sched-next-hint",r??(m.joinPending?"sched-join":u.blocked?`sched-${u.blocked}-status`:null))??l}
        aria-disabled=${r||m.joinPending||u.blocked?"true":l}
        @click=${()=>{u.blocked||h(ts(c,!u.on))}}
      ></button>
    </div>`:l}
    ${m.joinPending?i`<p class="schedule-note" id="sched-join">${Ce(o("v4_cadence_join_pending",`Uses {room}'s shared schedule; change it after you save, or choose "In this plan only" under Advanced.`,{room:Re}),s)}</p>`:l}
    ${m.explanation?i`<p class="schedule-note">${Ce(m.explanation,s)}</p>`:l}
    <details class="advanced">
      <summary>${o("v4_advanced","Advanced")}${$(X)}</summary>
      <fieldset class="scope">
        <legend>${o("v4_cadence_scope","Count cleans")}</legend>
        ${[["shared",o("v4_cadence_shared","Across all plans (recommended)")],["plan",o("v4_cadence_this_plan","In this plan only")]].map(([y,k])=>{let E=r??(y==="shared"&&m.sharedReason?"sched-scope-reason":null);return i`<label class="scope-row"><input
            type="radio"
            name="sched-scope"
            value=${y}
            .checked=${m.scope===y}
            aria-disabled=${E?"true":l}
            aria-describedby=${E??l}
            @change=${S=>{let de=E?null:ss(c,y);de?h(de):S.currentTarget.closest("fieldset")?.querySelectorAll("input").forEach(be=>{be.checked=be.value===m.scope})}}
          ><span>${k}</span></label>`})}
        ${m.sharedReason?g("sched-scope-reason",m.sharedReason,"p"):l}
      </fieldset>
      <p class="schedule-note">${o("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
    </details>
  </section>`},J=(t,a)=>a.cleaningMode==="mop"?t("v4_room_setting_mop","Mop"):a.cleaningMode==="vacuum"?a.coverageSetting==="quick"?t("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):a.coverageSetting==="standard"?t("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):t("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):a.coverageSetting==="quick"?t("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):a.coverageSetting==="standard"?t("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):t("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),rs={mop:(t,a)=>t("v4_room_schedules_mop","Mop every {mop} cleans",{mop:a}),mop_one:t=>t("v4_room_schedules_mop_one","Mop every clean"),quick:(t,a,e)=>t("v4_room_schedules_quick","Quick vacuum every {cov} cleans",{cov:e}),quick_one:t=>t("v4_room_schedules_quick_one","Quick vacuum every clean"),optimal:(t,a,e)=>t("v4_room_schedules_optimal","Optimal vacuum every {cov} cleans",{cov:e}),optimal_one:t=>t("v4_room_schedules_optimal_one","Optimal vacuum every clean"),heavy:(t,a,e)=>t("v4_room_schedules_heavy","Heavy duty vacuum every {cov} cleans",{cov:e}),heavy_one:t=>t("v4_room_schedules_heavy_one","Heavy duty vacuum every clean"),mop_quick:(t,a,e)=>t("v4_room_schedules_mop_quick","Mop every {mop} cleans \xB7 Quick vacuum every {cov} cleans",{mop:a,cov:e}),mop_quick_one_mop:(t,a,e)=>t("v4_room_schedules_mop_quick_one_mop","Mop every clean \xB7 Quick vacuum every {cov} cleans",{cov:e}),mop_quick_one_cov:(t,a)=>t("v4_room_schedules_mop_quick_one_cov","Mop every {mop} cleans \xB7 Quick vacuum every clean",{mop:a}),mop_quick_one_both:t=>t("v4_room_schedules_mop_quick_one_both","Mop every clean \xB7 Quick vacuum every clean"),mop_optimal:(t,a,e)=>t("v4_room_schedules_mop_optimal","Mop every {mop} cleans \xB7 Optimal vacuum every {cov} cleans",{mop:a,cov:e}),mop_optimal_one_mop:(t,a,e)=>t("v4_room_schedules_mop_optimal_one_mop","Mop every clean \xB7 Optimal vacuum every {cov} cleans",{cov:e}),mop_optimal_one_cov:(t,a)=>t("v4_room_schedules_mop_optimal_one_cov","Mop every {mop} cleans \xB7 Optimal vacuum every clean",{mop:a}),mop_optimal_one_both:t=>t("v4_room_schedules_mop_optimal_one_both","Mop every clean \xB7 Optimal vacuum every clean"),mop_heavy:(t,a,e)=>t("v4_room_schedules_mop_heavy","Mop every {mop} cleans \xB7 Heavy duty vacuum every {cov} cleans",{mop:a,cov:e}),mop_heavy_one_mop:(t,a,e)=>t("v4_room_schedules_mop_heavy_one_mop","Mop every clean \xB7 Heavy duty vacuum every {cov} cleans",{cov:e}),mop_heavy_one_cov:(t,a)=>t("v4_room_schedules_mop_heavy_one_cov","Mop every {mop} cleans \xB7 Heavy duty vacuum every clean",{mop:a}),mop_heavy_one_both:t=>t("v4_room_schedules_mop_heavy_one_both","Mop every clean \xB7 Heavy duty vacuum every clean")},Ct=(t,a,e)=>{let s=e?.mopEveryN??null,o=e?.coverageEveryN??null;if(s===null&&o===null)return null;let n=e?.periodicCoverageSetting,r=n==="quick"?"quick":n==="heavy_duty"?"heavy":"optimal",d=s===null?`${r}${o===1?"_one":""}`:o===null?`mop${s===1?"_one":""}`:`mop_${r}${s===1&&o===1?"_one_both":s===1?"_one_mop":o===1?"_one_cov":""}`,c=rs[d];return c?c(t,s===null?"":T(a,s),o===null?"":T(a,o)):null};var Rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Et=t=>(...a)=>({_$litDirective$:t,values:a}),Me=class{constructor(a){}get _$AU(){return this._$AM._$AU}_$AT(a,e,s){this._$Ct=a,this._$AM=e,this._$Ci=s}_$AS(a,e){return this.update(a,e)}update(a,e){return this.render(...e)}};var{I:is}=ot,Tt=t=>t;var Mt=()=>document.createComment(""),ne=(t,a,e)=>{let s=t._$AA.parentNode,o=a===void 0?t._$AB:a._$AA;if(e===void 0){let n=s.insertBefore(Mt(),o),r=s.insertBefore(Mt(),o);e=new is(n,r,t,t.options)}else{let n=e._$AB.nextSibling,r=e._$AM,d=r!==t;if(d){let c;e._$AQ?.(t),e._$AM=t,e._$AP!==void 0&&(c=t._$AU)!==r._$AU&&e._$AP(c)}if(n!==o||d){let c=e._$AA;for(;c!==n;){let m=Tt(c).nextSibling;Tt(s).insertBefore(c,o),c=m}}}return e},F=(t,a,e=t)=>(t._$AI(a,e),t),ls={},It=(t,a=ls)=>t._$AH=a,Pt=t=>t._$AH,Ie=t=>{t._$AR(),t._$AA.remove()};var zt=(t,a,e)=>{let s=new Map;for(let o=a;o<=e;o++)s.set(t[o],o);return s},Nt=Et(class extends Me{constructor(t){if(super(t),t.type!==Rt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,a,e){let s;e===void 0?e=a:a!==void 0&&(s=a);let o=[],n=[],r=0;for(let d of t)o[r]=s?s(d,r):r,n[r]=e(d,r),r++;return{values:n,keys:o}}render(t,a,e){return this.dt(t,a,e).values}update(t,[a,e,s]){let o=Pt(t),{values:n,keys:r}=this.dt(a,e,s);if(!Array.isArray(o))return this.ut=r,n;let d=this.ut??=[],c=[],m,g,p=0,u=o.length-1,h=0,v=n.length-1;for(;p<=u&&h<=v;)if(o[p]===null)p++;else if(o[u]===null)u--;else if(d[p]===r[h])c[h]=F(o[p],n[h]),p++,h++;else if(d[u]===r[v])c[v]=F(o[u],n[v]),u--,v--;else if(d[p]===r[v])c[v]=F(o[p],n[v]),ne(t,c[v+1],o[p]),p++,v--;else if(d[u]===r[h])c[h]=F(o[u],n[h]),ne(t,o[p],o[u]),u--,h++;else if(m===void 0&&(m=zt(r,h,v),g=zt(d,p,u)),m.has(d[p]))if(m.has(d[u])){let f=g.get(r[h]),_=f!==void 0?o[f]:null;if(_===null){let b=ne(t,o[p]);F(b,n[h]),c[h]=b}else c[h]=F(_,n[h]),ne(t,o[p],_),o[f]=null;h++}else Ie(o[u]),u--;else Ie(o[p]),p++;for(;h<=v;){let f=ne(t,c[v+1]);F(f,n[h]),c[h++]=f}for(;p<=u;){let f=o[p++];f!==null&&Ie(f)}return this.ut=r,It(t,c),st}});var K=class{constructor(a,e,s){this.host=a;this.root=e;this.launcher=s;this.open=!1;this.#s=!1;this.keydown=a=>{if(!this.open)return;if(a.key==="Escape"){a.preventDefault(),this.close(!0);return}let e=[...this.host.renderRoot.querySelectorAll(`${this.root} [role^=menuitem]`)],s=e.indexOf(a.composedPath()[0]),o=a.key==="ArrowDown"?s+1:a.key==="ArrowUp"?s-1:a.key==="Home"?0:a.key==="End"?e.length-1:null;o===null||s<0||!e.length||(a.preventDefault(),e[(o+e.length)%e.length]?.focus())};this.focusout=a=>{let e=a.relatedTarget;e&&!a.currentTarget.contains(e)&&this.#o(!1)};this.#t=a=>{let e=this.host.renderRoot.querySelector(this.root);this.open&&e&&!a.composedPath().includes(e)&&this.#o(!1)};a.addController(this)}hostConnected(){window.addEventListener("pointerdown",this.#t,!0)}hostDisconnected(){window.removeEventListener("pointerdown",this.#t,!0)}hostUpdated(){this.#s&&(this.#s=!1,this.host.renderRoot.querySelector(`${this.root} [role^=menuitem]`)?.focus())}#s;#o(a){a!==this.open&&(this.open=a,this.#s=a,this.host.requestUpdate())}toggle(){this.#o(!this.open)}close(a){this.#o(!1),a&&this.host.renderRoot.querySelector(`${this.root} ${this.launcher}`)?.focus()}#t};var cs=["mop_progress_unverified","coverage_progress_unverified","identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy","coverage_requires_vacuum"],He=class extends N{constructor(){super(...arguments);this._moved="";this.#s=null;this.#o=new Map;this.#t=new K(this,".room-more","> button");this.state=z();this.#e=(e,s,o)=>P(this.localize,e,s,o)}static{this.styles=[L,A,W,O,Se,I` :host{display:block;}.plain{display:grid;gap:var(--ms-space-2);margin:0;padding:0;list-style:none;}.plan-row .ms-row__body{display:grid;gap:0.125rem;}.plan-row .plan-title{display:flex;gap:var(--ms-space-1) var(--ms-space-2);align-items:center;min-inline-size:0;}.plan-row .plan-title bdi{overflow:hidden;min-inline-size:0;text-overflow:ellipsis;white-space:nowrap;}.plan-row .plan-title .ms-chip{flex:none;}.chip-default{border-color:transparent;background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-surface-card));}.chip-attention{border-color:transparent;background:color-mix(in srgb,var(--ms-danger) 12%,var(--ms-surface-card));}.lines{display:grid;gap:0.125rem;margin:0;color:var(--ms-text);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.line{display:flex;gap:var(--ms-space-1);align-items:flex-start;margin:0;color:var(--ms-text);}.line .ms-icon{inline-size:1rem;block-size:1rem;color:var(--ms-resolved-indicator,var(--ms-accent));}.line[data-tone="warning"] .ms-icon{color:var(--ms-warning);}.plan-row .ms-row__trail:dir(rtl) .ms-icon{scale:-1 1;}.empty-card{display:grid;gap:var(--ms-space-2);padding:var(--ms-space-4);border:1px solid var(--ms-line);border-radius:var(--ms-radius-md);}.empty-card h3{margin:0;font-size:var(--ms-t-md);}.empty-card p{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-md);line-height:var(--ms-lh-normal);}.empty-card .ms-btn{justify-self:start;}.quiet{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.heading{margin:var(--ms-space-4) 0 var(--ms-space-2);color:var(--ms-text-quiet);font-size:var(--ms-t-md);font-weight:var(--ms-w-bold);line-height:var(--ms-lh-tight);}.summary{margin:0 0 var(--ms-space-2);color:var(--ms-text-quiet);font-size:var(--ms-t-md);line-height:var(--ms-lh-snug);}.run-list{display:grid;margin:0 0 var(--ms-space-3);padding:0;list-style:none;}.run-row{display:flex;gap:var(--ms-space-3);align-items:flex-start;padding-block:var(--ms-space-2);border-block-end:1px solid var(--ms-line);}.run-row:last-child{border-block-end:0;}.run-row[data-break]{margin-block-start:var(--ms-space-3);padding-block-start:var(--ms-space-3);border-block-start:2px dashed var(--ms-line-strong);}.row-lines{display:grid;flex:1;gap:0.125rem;min-inline-size:0;}.row-lines bdi{overflow:hidden;font-weight:var(--ms-w-bold);text-overflow:ellipsis;white-space:nowrap;}.row-lines small{color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local,var(--ms-surface-card)));font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.row-lines .ms-chip{justify-self:start;}.pos-badge{display:grid;flex:none;place-items:center;inline-size:1.5rem;block-size:1.5rem;border-radius:50%;background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-surface-card));font-size:var(--ms-t-xs);font-weight:var(--ms-w-bold);font-variant-numeric:tabular-nums;}.problem{margin:0 0 var(--ms-space-2);padding:var(--ms-space-3);border-inline-start:3px solid var(--ms-danger);border-radius:var(--ms-radius-md);background:color-mix(in srgb,var(--ms-danger) 12%,var(--ms-surface-card));font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug);}.switch-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control);}.switch-copy{display:grid;flex:1;gap:0.125rem;min-inline-size:0;font-size:var(--ms-t-md);}.switch-copy small,.reason{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;padding:0;border:0;clip-path:inset(50%);white-space:nowrap;}.edit{display:grid;gap:var(--ms-space-3);}.order{display:grid;gap:var(--ms-space-1);margin:0;padding:0;border:0;font-size:var(--ms-t-sm);}.order .ms-segment{padding:0;}.order .ms-btn{flex:1;}.list-header{display:flex;align-items:baseline;justify-content:space-between;gap:var(--ms-space-2);}.list-header .heading{margin:0;}.list-header small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs);}.edit-row{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;padding:0;}.edit-row:not([data-selected]){--ms-local:var(--ms-surface-card);}.edit-check{display:grid;place-items:center;inline-size:var(--ms-control);block-size:var(--ms-control);cursor:pointer;}.edit-check input{inline-size:1.2rem;block-size:1.2rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent));cursor:pointer;}.edit-disclosure{display:flex;gap:var(--ms-space-2);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-1);border:0;border-radius:var(--ms-radius-sm);color:inherit;background:transparent;font:inherit;text-align:start;cursor:pointer;}.edit-disclosure:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px;}.edit-disclosure>.ms-icon{flex:none;transition:rotate 120ms;}.edit-disclosure[aria-expanded="true"]>.ms-icon{rotate:90deg;}.edit-disclosure:dir(rtl)>.ms-icon{scale:-1 1;}.edit-disclosure[aria-expanded="true"]:dir(rtl)>.ms-icon{rotate:-90deg;}.edit-name{padding-inline:var(--ms-space-1);}.edit-moves{display:flex;}.row-expanded{display:grid;grid-column:1 / -1;gap:var(--ms-space-2);padding:var(--ms-space-3);border-block-start:1px solid var(--ms-line);}.run-end{display:grid;gap:var(--ms-space-2);}.run-end>summary{min-block-size:var(--ms-control);align-content:center;font-weight:var(--ms-w-bold);cursor:pointer;}.threshold{display:grid;gap:var(--ms-space-1);font-size:var(--ms-t-md);}.threshold input{inline-size:100%;min-block-size:var(--ms-control-sm);accent-color:var(--ms-resolved-indicator,var(--ms-accent));}.subtle{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2);}.schedule{display:grid;gap:var(--ms-space-3);min-inline-size:0;margin-block-start:var(--ms-space-2);}.schedule-head{display:flex;align-items:center;gap:var(--ms-space-2);}.schedule-head h3{flex:1;margin:0;font-size:var(--ms-t-md);font-weight:var(--ms-w-bold);}.sched-row{display:grid;gap:var(--ms-space-1);justify-items:start;min-inline-size:0;}.sched-label{font-size:var(--ms-t-md);font-weight:var(--ms-w-medium);}.sched-controls{display:flex;flex-wrap:wrap;gap:var(--ms-space-3);align-items:center;}.sched-level{flex:none;inline-size:9rem;block-size:var(--ms-control);font-size:var(--ms-t-md);}.sched-status{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.sched-reason{display:flex;gap:var(--ms-space-1);align-items:flex-start;color:var(--ms-text);}.sched-reason .ms-icon{flex:none;inline-size:1rem;block-size:1rem;color:var(--ms-warning);}.sched-off,.sched-row>.ms-btn{justify-self:start;}.room-more{position:relative;}.room-more .menu{position:absolute;z-index:18;inset-block-start:calc(100% + var(--ms-space-1));inset-inline-end:0;display:grid;min-inline-size:14rem;padding:var(--ms-space-1);}.room-more .menu .ms-row{justify-content:flex-start;inline-size:100%;}.room-more .reason{padding:var(--ms-space-1) var(--ms-space-3);}.advanced>summary{display:flex;gap:var(--ms-space-2);align-items:center;min-block-size:var(--ms-control);font-weight:var(--ms-w-medium);list-style:none;cursor:pointer;}.advanced>summary::-webkit-details-marker{display:none;}.advanced>summary .ms-icon{inline-size:1.25rem;block-size:1.25rem;}.advanced[open]>summary .ms-icon{rotate:90deg;}.advanced>summary:dir(rtl) .ms-icon{scale:-1 1;}.advanced[open]>summary:dir(rtl) .ms-icon{rotate:-90deg;}.advanced>summary:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:2px;border-radius:var(--ms-radius-xs);}.scope{display:grid;margin:0 0 var(--ms-space-2);padding:0;border:0;}.scope legend{padding:0;font-size:var(--ms-t-sm);font-weight:var(--ms-w-bold);}.scope-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control);font-size:var(--ms-t-md);cursor:pointer;}.scope-row input{flex:none;inline-size:1.2rem;block-size:1.2rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent));}.schedule-note{margin:0;color:var(--ms-text);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}@media (forced-colors:active){.row-expanded{forced-color-adjust:auto;color:CanvasText;background:Canvas;}.edit-row .row-lines small{color:inherit;}}@media (max-width:25rem){.split{grid-template-columns:1fr;}}`]}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_moved:{state:!0}}}#s;#o;#t;#e;#n(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#a(e){return T(this.state.locale,e)}#i(e){return e.length?i`<span class="lines">${e.map(s=>i`<span class="line">${$(ve)}<span>${s}</span></span>`)}</span>`:l}#m(e,s){let o=pt(this.#e,this.state.locale,e),n=ut(this.#e,this.state.locale,e),r=n===null?l:"blocked"in n?i`<span class="lines"><span class="line" data-tone="warning">${$(D)}<span>${n.blocked}</span></span></span>`:this.#i(n.due),d=this.#e("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return i`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${e.id}
        aria-describedby=${s?"default-hint":l}
        @click=${()=>this.#n({type:"select-plan",planId:e.id})}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${e.name}</bdi>${s?i`<span class="ms-chip chip-default" title=${d}>${this.#e("v4_plan_default","Default")}</span>`:l}${e.enabled?l:i`<span class="ms-chip">${this.#e("v4_paused","Paused")}</span>`}</strong>
          <small>${o}</small>
          ${r}
        </span>
        <span class="ms-row__trail">${$(X)}</span>
      </button>
      ${s?i`<span class="sr-only" id="default-hint">${d}</span>`:l}
    </li>`}#r(){let e=this.state.resources.plans.value,s=this.#e("v4_create_plan","Create a plan");if(!e?.plans.length)return i`<div class="empty-card">
        <h3>${this.#e("v4_no_plans","No plans yet")}</h3>
        <p>${this.#e("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#n({type:"select-plan",planId:null})}>${s}</button>
      </div>`;let o=[...e.plans].sort((n,r)=>+(r.id===e.selectedPlan)-+(n.id===e.selectedPlan));return i`<ul class="plain">
      ${o.map(n=>this.#m(n,n.id===e.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#n({type:"select-plan",planId:null})}>
        <span class="ms-row__lead">${$(ae)}</span>
        <span class="ms-row__body"><strong>${s}</strong></span>
      </button></li>
    </ul>`}#p(){let e=this.state;return e.pendingAction==="save-plan"?this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):e.pendingAction==="run-plan"?this.#e("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):G(e)?this.#e("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#e("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):Xe(e)?null:this.#e("v4_reason_save_plan_map","Waiting for the map to be ready.")}#c(){let e=this.state.planDraft.enabled,s=this.#p();return i`
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
    `}#u(e,s,o,n={}){return i`<li class="run-row" ?data-break=${n.part!==void 0}>
      ${n.part===void 0?l:i`<span class="sr-only">${this.#e("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#a(n.part)})}</span>`}
      ${o===null?l:i`<span class="pos-badge" aria-hidden="true">${this.#a(o)}</span>`}
      <span class="row-lines">
        <bdi>${e}</bdi>
        <small>${s}</small>
        ${n.blocked?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
      </span>
    </li>`}#h(){let e=this.state,s=e.planDraft,o=e.resources.plans.value,n=o?.plans.find(C=>C.id===s.id);if(!o||!n)return l;let r=n.nextRunPreview,d=r?.blocker??null,c=!s.enabled,m=!c&&!!(r&&!d&&/^[0-9a-f]{64}$/u.test(r.previewToken??"")),g=n.runBehavior==="ordered",p=m&&r?r.rooms:[],u=!c&&d?tt(e,n)?.jump.roomId??null:null,h=c||m||u||e.pendingAction==="save-plan"?null:d&&Je[d]||Ze,v=m?p.length:n.rooms.length,f=m?n.nextRunEstimateSeconds:null,_=f===null?"":this.#a(Math.max(1,Math.round(f/60))),b=f===null?v===1?this.#e("v4_plan_summary_rooms_one","1 room"):this.#e("v4_plan_summary_rooms","{count} rooms",{count:this.#a(v)}):v===1?this.#e("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:_}):this.#e("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#a(v),minutes:_}),x=m&&r?r.missionBoundaries:[],R=m?p.map((C,M)=>{let U=x.indexOf(M);return this.#u(C.name,J(this.#e,C),g?M+1:null,U<0?{}:{part:U+2})}):Qe(n).rooms.map(C=>this.#u(o.rooms.find(M=>M.roomId===C.roomId)?.name??C.roomId,J(this.#e,C),null,{blocked:C.roomId===u})),w=s.finishCurrentRoom?this.#e("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#a(s.finishCurrentRoomThreshold)}):s.returnToBase?this.#e("v4_plan_summary_return","Returns to the dock when finished"):null;return i`
      <p class="summary">${b}</p>
      ${this.#i(ke(this.#e,e.locale,p))}
      <h3 class="heading">${c?this.#e("v4_plan_rooms_heading","Rooms in this plan"):e.resources.entry?.activePlan?this.#e("v4_next_run_after_active","After this run"):this.#e("v4_next_run_preview","Next run")}</h3>
      ${m&&!g?i`<p class="quiet">${this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}</p>`:l}
      ${x.length?i`<p class="quiet">${this.#e("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:this.#a(x.length+1)})}</p>`:l}
      ${h?i`<p class="problem">${this.#e(h.reasonKey,h.reason)}</p>
        <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"open-workflow",workflow:"plan"})}>${this.#e("v4_retry","Try again")}</button>`:l}
      ${m&&g?i`<ol class="run-list" role="list">${R}</ol>`:i`<ul class="run-list" role="list">${R}</ul>`}
      ${this.#c()}
      ${w?i`<p class="quiet">${w}</p>`:l}
    `}willUpdate(e){e.has("state")&&(this.state.workflow!=="plan"||this.state.planView!=="edit")&&(this._moved="");let s=e.get("state");s&&(s.expandedRoom!==this.state.expandedRoom||this.state.planView!=="edit"||this.state.dialog||this.#d())&&(this.#t.open=!1),s&&(s.planDraft.id!==this.state.planDraft.id||s.workflow!==this.state.workflow||this.state.planView!=="edit")&&this.#o.clear()}updated(e){!this.#s||!e.has("state")||(this.renderRoot.querySelector(`[data-move="${CSS.escape(this.#s)}"]`)?.focus(),this.#s=null)}#d(){return this.state.pendingAction==="save-plan"?"edit-held":null}#l(e){this.#d()||this.#n({type:"patch-plan-draft",patch:e})}#v(e,s){this.#l({rooms:this.state.planDraft.rooms.map((o,n)=>n===e?{...o,...s}:o)})}#g(e,s,o,n){let r=[...this.state.planDraft.rooms],d=e+s;if(this.#d()||d<0||d>=r.length)return;let[c]=r.splice(e,1);c&&(r.splice(d,0,c),this.#s=n,this._moved=this.#e("v4_room_moved","{room} moved to position {position}",{room:o,position:this.#a(d+1)}),this.#n({type:"patch-plan-draft",patch:{rooms:r}}))}#_(e){return{disabled:e?"true":l,described:e??l}}#b(e,s,o,n,r,d){let c=`${e.roomId}:${n<0?"up":"down"}`,m=n<0?this.#e("move_room_up","Move {room} earlier",{room:o}):this.#e("move_room_down","Move {room} later",{room:o}),g=n<0?this.#e("v4_room_already_first","{room} is already first",{room:o}):this.#e("v4_room_already_last","{room} is already last",{room:o}),p=r?`${c}-end`:d;return i`<button
        class="ms-btn ms-btn--icon"
        type="button"
        data-move=${c}
        aria-label=${m}
        title=${r?g:m}
        aria-disabled=${r||d?"true":l}
        aria-describedby=${p??l}
        @click=${()=>{r||this.#g(s,n,o,c)}}
      >${$(n<0?it:lt)}</button>
      ${r?i`<span class="sr-only" id=${`${c}-end`}>${g}</span>`:l}`}#y(e,s,o,n,r,d,c){let m=this.state.planDraft,g=o!==null&&this.state.expandedRoom===e,p=m.rooms.length-1,u=this.#_(c),h=o===null&&d,v=o?Ct(this.#e,this.state.locale,o.cadence):null,f=o?.cadenceReasons?.some(b=>cs.includes(b)),_=!!o?.cadence?.mopEveryN;return i`<li class="ms-row edit-row" data-selected=${o?"true":l}>
      <label class="edit-check"><input
        type="checkbox"
        .checked=${o!==null}
        aria-label=${this.#e("v4_room_include_named","Include {room}",{room:s})}
        aria-disabled=${c||h?"true":l}
        aria-describedby=${c??(h?"room-limit":l)}
        @click=${b=>{(c||h)&&b.preventDefault()}}
        @change=${()=>this.#n({type:"toggle-room",roomId:e})}
      ></label>
      ${o?i`<button
          class="edit-disclosure"
          type="button"
          data-room-disclosure=${e}
          aria-expanded=${String(g)}
          aria-label=${this.#e("v4_room_settings_named","Settings for {room}",{room:s})}
          aria-disabled=${u.disabled}
          aria-describedby=${u.described}
          @click=${()=>{c||this.#n({type:"set-plan-view",view:"edit",roomId:g?null:e})}}
        >
          ${r?i`<span class="pos-badge" aria-hidden="true">${this.#a(n+1)}</span>`:l}
          <span class="row-lines">
            <bdi>${s}</bdi>
            <small>${J(this.#e,o)}</small>
            ${v?i`<small>${v}</small>`:l}
            ${f?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
          </span>
          ${$(X)}
        </button>`:i`<span class="edit-name"><bdi>${s}</bdi></span>`}
      ${o&&r?i`<span class="edit-moves">
        ${this.#b(o,n,s,-1,n===0,c)}
        ${this.#b(o,n,s,1,n===p,c)}
      </span>`:i`<span></span>`}
      ${g&&o?i`<div class="row-expanded">
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select
              aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:s})}
              aria-disabled=${u.disabled}
              aria-describedby=${[c,_?"mode-reason":null].filter(Boolean).join(" ")||l}
              .value=${o.cleaningMode}
              @change=${b=>{let x=b.currentTarget;c?x.value=o.cleaningMode:this.#v(n,{cleaningMode:x.value})}}
            >${Y.map(b=>i`<option value=${b} ?selected=${b===o.cleaningMode} ?disabled=${_&&b!=="vacuum"}>${Z(this.#e,b)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select
              aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:s})}
              aria-disabled=${u.disabled}
              aria-describedby=${u.described}
              ?disabled=${o.cleaningMode==="mop"}
              .value=${o.coverageSetting}
              @change=${b=>{let x=b.currentTarget;c?x.value=o.coverageSetting:this.#v(n,{coverageSetting:x.value})}}
            >${B.map(b=>i`<option value=${b} ?selected=${b===o.coverageSetting}>${j(this.#e,b)}</option>`)}</select>
          </label>
        </div>
        ${_?i`<p class="sched-status sched-reason" id="mode-reason">${$(D)}<span>${this.#e("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</span></p>`:l}
        ${o.cleaningMode==="vacuum"?l:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
        ${St({t:this.#e,state:this.state,intent:b=>this.#n(b),held:c,offLevel:this.#o.get(e)??null,setOffLevel:b=>{b?this.#o.set(e,b):this.#o.delete(e),this.requestUpdate()},menu:this.#t},o,n,s)}
      </div>`:l}
    </li>`}#f(e,s,o,n,r,d){let c=[o?`${e}-hint`:"",r??""].filter(Boolean).join(" ");return i`<div class="switch-row">
      <span class="switch-copy">
        <span id=${`${e}-label`}>${s}</span>
        ${o?i`<small id=${`${e}-hint`}>${o}</small>`:l}
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
    </div>`}#$(){let e=this.state,s=e.planDraft,o=e.resources.plans.value;if(!o)return l;let n=this.#d(),r=this.#_(n),d=s.runBehavior==="ordered",c=s.rooms.length>=100,m=v=>o.rooms.find(f=>f.roomId===v)?.name??v,g=[...s.rooms.map((v,f)=>({roomId:v.roomId,room:v,index:f})),...o.rooms.filter(v=>!s.rooms.some(f=>f.roomId===v.roomId)).map(v=>({roomId:v.roomId,room:null,index:-1}))],p=s.finishCurrentRoomThreshold,u=this.#a(p),h=(v,f)=>i`<button
      class="ms-btn"
      type="button"
      aria-pressed=${String(s.runBehavior===v)}
      aria-disabled=${r.disabled}
      aria-describedby=${r.described}
      @click=${()=>this.#l({runBehavior:v})}
    >${f}</button>`;return i`<div class="edit">
      ${n?i`<p class="reason" id="edit-held">${this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:l}
      <label class="field ms-field">${this.#e("plan_name","Plan name")}
        <input
          maxlength="128"
          autocomplete="off"
          ?readonly=${!!n}
          aria-disabled=${r.disabled}
          aria-describedby=${r.described}
          .value=${s.name}
          @input=${v=>this.#l({name:v.currentTarget.value})}
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
        <small>${this.#e("v4_plan_rooms_selected","{selected} of {total} selected",{selected:this.#a(s.rooms.length),total:this.#a(o.rooms.length)})}</small>
      </div>
      ${c?i`<p class="reason" id="room-limit">${this.#e("v4_plan_room_limit","Can't add more rooms until you remove one; a plan holds up to {limit}.",{limit:this.#a(100)})}</p>`:l}
      <ul class="plain" role="list" aria-labelledby="edit-rooms">
        ${Nt(g,v=>v.roomId,v=>this.#y(v.roomId,m(v.roomId),v.room,v.index,d,c,n))}
      </ul>
      <span class="sr-only" role="status">${this._moved}</span>
      <details class="run-end">
        <summary>${this.#e("v4_run_end_options","When a run ends")}</summary>
        ${this.#f("return-dock",this.#e("v4_plan_return_to_dock","Return to the dock when finished"),null,s.returnToBase,n,v=>this.#l({returnToBase:v}))}
        ${this.#f("finish-room",this.#e("v4_plan_finish_room","Finish the current room when you press Stop"),this.#e("v4_plan_finish_room_hint","Only if the room is at least {percent}% done; otherwise the robot stops right away.",{percent:u}),s.finishCurrentRoom,n,v=>this.#l({finishCurrentRoom:v}))}
        ${s.finishCurrentRoom?i`<div class="threshold">
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
            @input=${v=>{let f=v.currentTarget;n?f.value=String(p):this.#l({finishCurrentRoomThreshold:Number(f.value)})}}
          >
        </div>`:l}
      </details>
    </div>`}render(){let{workflow:e,planView:s}=this.state;return e==="plans"?this.#r():e!=="plan"?l:s==="run"?this.#h():this.#$()}};customElements.get(q)||customElements.define(q,He);var Lt=["mop_due","coverage_due"],Pe=(t,a)=>t.resources.plans.value?.rooms.find(e=>e.roomId===a)?.name??null,At=(t,a)=>a.flatMap(e=>{let s=Pe(t,e);return s===null?[]:[s]}),ds=t=>At(t,t.selection.roomIds),ms=(t,a)=>{let e=ds(a);return e.length===0?null:t("v4_rooms_selected_names","{count} selected \xB7 {rooms}",{count:T(a.locale,e.length),rooms:$e(a.locale,e)})},ps=(t,a)=>{let e=Ne(a)?.preview,s=At(a,e?e.rooms.map(n=>n.roomId):a.selection.roomIds);if(s.length===0)return"";let o=s.length<=3?$e(a.locale,s):$e(a.locale,[...s.slice(0,2),t("v4_rooms_more","{count} more",{count:T(a.locale,s.length-2)})]);return t("v4_clean_rooms_summary","{rooms}, then back to the dock",{rooms:o})},us=(t,a,e,s)=>{let o=Pe(e,s)??Pe(a,s);if(o===null)return null;if(!Le(a))return G(a)?t("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):t("v4_reason_clean_rooms_verification","Waiting for the map to be ready.");let n=a.selection.roomIds.includes(s),r=e.selection.roomIds.includes(s);return n===r?null:r?t("v4_room_added","{room} added",{room:o}):t("v4_room_removed","{room} removed",{room:o})},vs=t=>t.currentTarget.value,qe=class extends N{constructor(){super(...arguments);this.state=z();this._open=null;this.#s=(e,s,o)=>P(this.localize,e,s,o);this.#t=e=>{if(e.key!=="Escape"||this._open===null||mt(e)||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;let s=e.composedPath(),n=this.getRootNode().host.getRootNode().host;if(!s.includes(n))return;let r=c=>c instanceof HTMLElement&&c.getRootNode()!==this.renderRoot&&(c.getAttribute("role")==="menu"||c.getAttribute("role")==="dialog"||c.getAttribute("aria-expanded")==="true");if(s.some(r))return;e.preventDefault();let d=this._open==="settings"?'[data-disclosure="settings"]':`[data-room-disclosure="${CSS.escape(this._open)}"]`;this._open=null,this.updateComplete.then(()=>this.renderRoot.querySelector(d)?.focus())}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[L,A,W,O,I` :host{display:block;min-inline-size:0;}.stack{display:grid;gap:var(--ms-space-3);}.description{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-sm);line-height:var(--ms-lh-normal);}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;padding:0;border:0;clip-path:inset(50%);white-space:nowrap;}.list-header{display:flex;align-items:center;gap:var(--ms-space-2);min-block-size:var(--ms-control-sm);}.list-header h3{flex:1;margin:0;}.list-header small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs);}.limit{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}@media (any-pointer:coarse){.clear{min-block-size:var(--ms-control);min-inline-size:var(--ms-control);}}.settings-row{display:grid;padding:0;}.ms-disclosure{display:flex;gap:var(--ms-space-2);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-3);border:0;border-radius:var(--ms-radius-sm);color:inherit;background:transparent;font:inherit;font-size:var(--ms-t-md);font-weight:var(--ms-w-bold);text-align:start;cursor:pointer;}.ms-disclosure:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px;}.ms-disclosure>span:first-child{flex:1;}.ms-disclosure__value{overflow:hidden;color:var(--ms-text-quiet);font-weight:var(--ms-w-regular);font-size:var(--ms-t-sm);text-overflow:ellipsis;white-space:nowrap;}.ms-disclosure>.ms-icon{flex:none;transition:rotate var(--ms-fast) var(--ms-ease);}.ms-disclosure[aria-expanded="true"]>.ms-icon{rotate:90deg;}.ms-disclosure:dir(rtl)>.ms-icon{scale:-1 1;}.ms-disclosure[aria-expanded="true"]:dir(rtl)>.ms-icon{rotate:-90deg;}.settings-body,.row-expanded{display:grid;gap:var(--ms-space-3);padding:var(--ms-space-3);border-block-start:1px solid var(--ms-line);}.settings-body .ms-field,.row-expanded .ms-field{color:color-mix(in srgb,var(--ms-text-quiet) 70%,var(--ms-text));}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2);}@media (max-width:25rem){.split{grid-template-columns:1fr;}}.hint{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.switch-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control);}.switch-copy{display:grid;flex:1;gap:0.125rem;min-inline-size:0;font-size:var(--ms-t-md);}.switch-copy small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.check-lines{display:grid;gap:var(--ms-space-2);}.line{display:flex;gap:var(--ms-space-2);align-items:flex-start;margin:0;font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug);}.line .ms-icon{flex:none;inline-size:1.125rem;block-size:1.125rem;margin-block-start:0.0625rem;}.line[data-tone="warning"] .ms-icon{color:var(--ms-warning);}.line>span{flex:1;}.line .ms-btn{flex:none;}.room-list{display:grid;gap:var(--ms-space-2);}.room-row{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;padding:0;--ms-local:var(--ms-surface-card);}.room-row:has(.ms-check :checked){--ms-local:color-mix(in srgb,var(--ms-accent) 10%,var(--ms-surface-sunken));border-color:var(--ms-resolved-indicator,var(--ms-accent));}.ms-check{display:flex;gap:var(--ms-space-3);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-3);cursor:pointer;}.ms-check input{flex:none;inline-size:1.25rem;block-size:1.25rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent));cursor:pointer;}.ms-check input[aria-disabled="true"]{cursor:not-allowed;}.ms-check:has(input[aria-disabled="true"]) :is(bdi,small){color:var(--ms-text-disabled);}.row-lines{display:grid;flex:1;gap:0.125rem;min-inline-size:0;}.row-lines bdi{overflow:hidden;font-weight:var(--ms-w-bold);text-overflow:ellipsis;white-space:nowrap;}.row-lines small{color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local));font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.problem-line{display:flex;gap:var(--ms-space-1);align-items:flex-start;color:var(--ms-text);}.problem-line .ms-icon{flex:none;inline-size:1rem;block-size:1rem;color:var(--ms-warning);}.room-settings{margin-inline-end:var(--ms-space-1);}.row-expanded{grid-column:1 / -1;}@media (forced-colors:active){.room-row:has(.ms-check :checked){forced-color-adjust:none;color:HighlightText;background:Highlight;border-color:Highlight;}.room-row:has(.ms-check :checked) .row-lines small{color:HighlightText;}.room-row:has(.ms-check :checked) input,.room-row:has(.ms-check :checked) .room-settings{forced-color-adjust:auto;}.line .ms-icon,.problem-line .ms-icon{color:CanvasText;}}@media (prefers-reduced-motion:reduce){.ms-disclosure>.ms-icon{transition:none;}}`]}#s;#o(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this._open&&this._open!=="settings"&&!this.state.selection.roomIds.includes(this._open)&&(this._open=null)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.#t,!0)}disconnectedCallback(){window.removeEventListener("keydown",this.#t,!0),super.disconnectedCallback()}updated(e){e.has("_open")&&this._open!==null&&this.renderRoot.querySelector(".settings-body, .row-expanded")?.scrollIntoView({block:"nearest"})}#t;#e(e){this._open=this._open===e?null:e}#n(e,s,o){return n=>{if(e){n.currentTarget.value=s;return}o(vs(n))}}#a(...e){let s=e.filter(o=>!!o);return s.length?s.join(" "):l}#i(e,s,o){let n=this.#s,r=this._open==="settings",d=e.selection.cleaningMode,c=e.selection.coverageSetting,g=e.selection.roomSettings.some(h=>e.selection.roomIds.includes(h.roomId)&&(h.cleaningMode!==d||h.coverageSetting!==c))?n("v4_settings_mixed","Different per room"):J(n,{cleaningMode:d,coverageSetting:c}),p=d==="mop",u=s!==null;return i`
      <div class="ms-row settings-row">
        <button
          class="ms-disclosure"
          type="button"
          data-disclosure="settings"
          aria-expanded=${String(r)}
          aria-controls="clean-settings"
          @click=${()=>this.#e("settings")}
        ><span>${n("v4_clean_settings","Cleaning settings")}</span><span class="ms-disclosure__value">${g}</span>${$(X)}</button>
        ${r?i`
          <div id="clean-settings" class="settings-body">
            <div class="split">
              <label class="ms-field">${n("v4_cleaning_system","Cleaning mode")}
                <select
                  class="ms-select"
                  aria-disabled=${u?"true":l}
                  aria-describedby=${this.#a(s)}
                  .value=${d}
                  @change=${this.#n(u,d,h=>this.#o({type:"set-clean-settings",cleaningMode:h}))}
                >${Y.map(h=>i`<option value=${h} ?selected=${h===d}>${Z(n,h)}</option>`)}</select>
              </label>
              <label class="ms-field">${n("vacuum_coverage","Vacuum coverage")}
                <select
                  class="ms-select"
                  aria-disabled=${u||p?"true":l}
                  aria-describedby=${this.#a(p&&"clean-mop-hint",s)}
                  .value=${c}
                  @change=${this.#n(u||p,c,h=>this.#o({type:"set-clean-settings",coverageSetting:h}))}
                >${B.map(h=>i`<option value=${h} ?selected=${h===c}>${j(n,h)}</option>`)}</select>
              </label>
            </div>
            ${p?i`<p class="hint" id="clean-mop-hint">${n("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:l}
            ${o?i`
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
                  aria-describedby=${this.#a("due-hint",s)}
                  aria-disabled=${u?"true":l}
                  @click=${()=>{u||this.#o({type:"set-use-room-schedule",value:!e.selection.useRoomSchedule})}}
                ></button>
              </div>
            `:l}
          </div>
        `:l}
      </div>
    `}#m(e,s,o,n){let r=this.#s,d=e.manualRoomPreview.status==="error",c=s?ke(r,e.locale,s):[],m=n===null?null:n==="invalid_cadence_policy"&&e.selection.useRoomSchedule&&e.selection.roomSettings.some(g=>g.cleaningMode!=="vacuum")?r("v4_room_preview_schedule_override",`The room schedule can't use the cleaning mode you chose. Turn off "Include scheduled work that's due", or choose another mode.`):r("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.");return!c.length&&!o&&!d&&!m?l:i`
      <div class="check-lines">
        ${c.map(g=>i`<p class="line" data-tone="due">${$(ve)}<span>${g}</span></p>`)}
        ${o?i`<p class="line" data-tone="info">${$(ve)}<span>${r("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:T(e.locale,o+1)})}</span></p>`:l}
        ${d?i`
          <p class="line" data-tone="warning">${$(D)}<span>${r("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</span>
            <button class="ms-btn ms-btn--sm ms-btn--secondary" type="button" @click=${()=>this.#o({type:"retry-room-preview"})}>${r("v4_retry","Try again")}</button>
          </p>
        `:l}
        ${m?i`<p class="line" data-tone="warning">${$(D)}<span>${m}</span></p>`:l}
      </div>
    `}#r(e,s,o,n,r,d){let c=this.#s,m=e.selection.roomIds.includes(s.roomId),g=e.selection.roomSettings.find(w=>w.roomId===s.roomId)??{roomId:s.roomId,cleaningMode:e.selection.cleaningMode,coverageSetting:e.selection.coverageSetting},p=r&&!m,u=n!==null,h=e.manualRoomPreview.status==="loading",v=d?.cadenceReasons??s.sharedCadenceReasons??s.sharedCadenceProgress?.reasons??[],f=m?ft(c,v):null,_=this._open===s.roomId,b=`room-settings-${o}`,x=`room-mop-hint-${o}`,R=g.cleaningMode==="mop";return i`
      <div class="ms-row room-row">
        <label class="ms-check">
          <input
            type="checkbox"
            .checked=${m}
            aria-disabled=${u||p?"true":l}
            aria-describedby=${this.#a(n??(p&&"rooms-limit"))}
            @click=${w=>{(u||p)&&w.preventDefault()}}
            @change=${()=>this.#o({type:"toggle-room",roomId:s.roomId})}
          >
          <span class="row-lines">
            <bdi>${s.name}</bdi>
            ${m?i`<small>${h?c("v4_room_preview_loading","Checking settings\u2026"):J(c,d??g)}</small>`:l}
            ${f?i`<small class="problem-line">${$(D)}<span>${f}</span></small>`:l}
          </span>
        </label>
        ${m?i`
          <button
            class="ms-btn ms-btn--icon room-settings"
            type="button"
            data-room-disclosure=${s.roomId}
            aria-label=${c("v4_room_settings_named","Settings for {room}",{room:s.name})}
            aria-expanded=${String(_)}
            aria-controls=${b}
            @click=${()=>this.#e(s.roomId)}
          >${$(_?at:nt)}</button>
        `:l}
        ${_?i`
          <div class="row-expanded" id=${b}>
            <div class="split">
              <label class="ms-field">${c("v4_cleaning_system","Cleaning mode")}
                <select
                  class="ms-select"
                  aria-label=${c("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:s.name})}
                  aria-disabled=${u?"true":l}
                  aria-describedby=${this.#a(n)}
                  .value=${g.cleaningMode}
                  @change=${this.#n(u,g.cleaningMode,w=>this.#o({type:"patch-room-settings",roomId:s.roomId,cleaningMode:w}))}
                >${Y.map(w=>i`<option value=${w} ?selected=${w===g.cleaningMode}>${Z(c,w)}</option>`)}</select>
              </label>
              <label class="ms-field">${c("vacuum_coverage","Vacuum coverage")}
                <select
                  class="ms-select"
                  aria-label=${c("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:s.name})}
                  aria-disabled=${u||R?"true":l}
                  aria-describedby=${this.#a(R&&x,n)}
                  .value=${g.coverageSetting}
                  @change=${this.#n(u||R,g.coverageSetting,w=>this.#o({type:"patch-room-settings",roomId:s.roomId,coverageSetting:w}))}
                >${B.map(w=>i`<option value=${w} ?selected=${w===g.coverageSetting}>${j(c,w)}</option>`)}</select>
              </label>
            </div>
            ${R?i`<p class="hint" id=${x}>${c("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:l}
          </div>
        `:l}
      </div>
    `}render(){let e=this.#s,s=this.state,o=s.resources.plans.value?.rooms??[],n=o.length===0,r=G(s),d=!Le(s),c=d?r?"rooms-description":"rooms-held":null,m=s.selection.roomIds.length,g=m>=100,p=Ne(s)?.preview??null,u=p?p.rooms.map(_=>({..._,name:Pe(s,_.roomId)??_.name})):null,h=_=>u?.find(b=>b.roomId===_)??null,v=(u??[]).some(_=>_.cadenceReasons.some(b=>Lt.includes(b)))||o.some(_=>s.selection.roomIds.includes(_.roomId)&&(_.sharedCadenceProgress?.mopDue||_.sharedCadenceProgress?.coverageDue||(_.sharedCadenceReasons??_.sharedCadenceProgress?.reasons??[]).some(b=>Lt.includes(b)))),f=r?e("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):n?e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here."):e("v4_choose_rooms_detail","Choose rooms on the map or in the list.");return i`
      <div class="stack">
        <p class="description" id="rooms-description">${f}</p>
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
                aria-describedby=${this.#a(c)}
                @click=${()=>{d||this.#o({type:"clear-selection"})}}
              >${e("v4_clear","Clear")}</button>
            `:l}
          </div>
          ${g?i`<p class="limit" id="rooms-limit">${e("v4_room_limit_reached","Up to {limit} rooms fit in one clean, so remove one to add another.",{limit:100})}</p>`:l}
          ${this.#i(s,c,v)}
          ${this.#m(s,u,p?.missionBoundaries.length??0,p?.blocker??null)}
          <div class="room-list" role="group" aria-labelledby="rooms-heading">
            ${o.map((_,b)=>this.#r(s,_,b,c,g,h(_.roomId)))}
          </div>
        `}
      </div>
    `}};customElements.get(ue)||customElements.define(ue,qe);var ie=Math.round(.2*100),le=Math.round(2.5*100),re=5,ze=t=>Math.min(le,Math.max(ie,Math.round(t*100))),hs=(t,a)=>a>0?Math.min(le,Math.floor(t/re)*re+re):Math.max(ie,Math.ceil(t/re)*re-re),Oe=class extends N{constructor(){super(...arguments);this.state=z()}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[L,A,W,O,Se,I` :host{display:block;color:var(--ms-text);}.controls{display:grid;gap:var(--ms-space-2);padding:var(--ms-space-3);border:1px solid var(--ms-line);border-radius:var(--ms-radius-md);}.row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--ms-space-2);}.row>label{font-size:var(--ms-t-sm);font-weight:var(--ms-w-medium);}.hint{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;clip-path:inset(50%);white-space:nowrap;}`]}#s(e,s,o){return P(this.localize,e,s,o)}#o(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#t(e){this.#o({type:"set-brush",value:e/100})}#e(e){let s=e.currentTarget,o=ze(this.state.draw.brushMeters),n=Number(s.value.trim()),r=s.validity.badInput||s.value.trim()===""||!Number.isFinite(n)?o:ze(n/100);s.value=String(r),r!==o&&this.#t(r)}#n(e){let s=e.currentTarget.valueAsNumber;Number.isFinite(s)&&this.#t(ze(s/100))}render(){let e=ze(this.state.draw.brushMeters),s=r=>new Intl.NumberFormat(this.state.locale,{style:"unit",unit:"centimeter",unitDisplay:"short"}).format(r),o=this.#s("brush_size","Brush width"),n=r=>{let d=r<0?e<=ie?this.#s("v4_brush_min_reason","Can't make the brush narrower than {size}.",{size:s(ie)}):null:e>=le?this.#s("v4_brush_max_reason","Can't make the brush wider than {size}.",{size:s(le)}):null,c=r<0?"brush-min":"brush-max";return i`<button
        class="ms-btn ms-btn--icon"
        type="button"
        aria-label=${r<0?this.#s("v4_stepper_decrease","Decrease {label}",{label:o}):this.#s("v4_stepper_increase","Increase {label}",{label:o})}
        aria-controls="brush"
        aria-disabled=${d?"true":l}
        aria-describedby=${d?c:l}
        title=${d??l}
        @click=${()=>{d||this.#t(hs(e,r))}}
      >${$(r<0?ye:ae)}${d?i`<span class="sr-only" id=${c}>${d}</span>`:l}</button>`};return i`
      <div class="controls" role="group" aria-label=${this.#s("v4_drawing_precision","Drawing precision")}>
        <div class="row">
          <label for="brush">${o}</label>
          <span class="ms-stepper">
            ${n(-1)}
            <input
              id="brush"
              type="number"
              inputmode="numeric"
              min=${ie}
              max=${le}
              step="1"
              .value=${String(e)}
              @change=${this.#e}
              aria-label=${this.#s("v4_brush_width_cm","Brush width in centimeters")}
            />
            ${n(1)}
          </span>
        </div>
        <input
          class="ms-range"
          type="range"
          min=${ie}
          max=${le}
          step="1"
          .value=${String(e)}
          @input=${this.#n}
          aria-label=${this.#s("v4_brush_width_slider","Brush width slider")}
          aria-valuetext=${s(e)}
        />
        <p class="hint">${this.#s("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
      </div>
    `}};customElements.get(me)||customElements.define(me,Oe);var Ve=class extends N{constructor(){super(...arguments);this.state=z();this.#t=new K(this,".more","> button")}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[L,A,W,I` :host{display:contents;}.more{position:relative;margin-inline-start:auto;}.more>.ms-btn{transition:none;}.reason{flex-basis:100%;margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);text-align:end;}.menu{position:absolute;z-index:18;inset-block-start:calc(100% + var(--ms-space-1));inset-inline-end:0;display:grid;min-inline-size:14rem;padding:var(--ms-space-1);}.menu .ms-row{justify-content:flex-start;inline-size:100%;}.menu .reason{padding:var(--ms-space-1) var(--ms-space-3);text-align:start;}`]}#s(e,s,o){return P(this.localize,e,s,o)}#o(e,s=this){s.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#t;willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this.#t.open=!1)}#e(){let{command:e,pendingAction:s,planDraft:o}=this.state;return s==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):o.dirty?this.#s("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes."):e==="pending"?this.#s("v4_reason_robot_operation_waiting","Waiting for the robot to finish what it's doing."):null}#n(e){if(this.#e())return;let s=e.currentTarget.closest(".more")?.querySelector("button");this.#t.close(!1),this.#o({type:"open-dialog",dialog:"confirmDeletePlan"},s??this)}render(){let{planView:e,planDraft:s,pendingAction:o}=this.state;if(e==="run"){let r=o==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):o==="run-plan"?this.#s("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return i`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#s("v4_edit_plan_named","Edit {plan}",{plan:s.name})}
          aria-disabled=${r?"true":l}
          aria-describedby=${r?"edit-reason":l}
          @click=${()=>{r||this.#o({type:"set-plan-view",view:"edit"})}}
        >${this.#s("v4_edit","Edit")}</button>
        ${r?i`<p class="reason" id="edit-reason">${r}</p>`:l}
      `}if(!te(this.state,"confirmDeletePlan"))return l;let n=this.#e();return i`
      <div class="more" @keydown=${this.#t.keydown} @focusout=${this.#t.focusout}>
        <button
          class="ms-btn ms-btn--icon"
          type="button"
          aria-label=${this.#s("v4_more_actions","More actions")}
          aria-haspopup="menu"
          aria-expanded=${String(this.#t.open)}
          data-dialog-launcher="confirmDeletePlan"
          @click=${()=>this.#t.toggle()}
        >${$(fe)}</button>
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
    `}};customElements.get(pe)||customElements.define(pe,Ve);var gs=(t,a,e)=>i`${t.planView==="run"?i`<bdi>${a}</bdi>`:a}${t.planDraft.dirty?i` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:l}`,Wt=se(pe),_s=(t,a,e)=>oe`<${Wt}
  .state=${t}
  .localize=${a}
  @matic-workspace-intent=${e}
></${Wt}>`,Dt=(t,a,e,s)=>{let o=s?.room;if(o===void 0)return t(a,e,s);let[n,r]=t(a,e,{...s,room:"\0"}).split("\0");return i`${n}<bdi>${o}</bdi>${r}`},bs=(t,a,e,s)=>{let o=e?a.jump:void 0;return i`${Dt(t,a.reasonKey??"",a.reason??"",a.reasonPlaceholders)}${o?i` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>s({type:"set-plan-view",view:"edit",roomId:o.roomId})}
  >${Dt(t,o.labelKey,o.label,o.labelPlaceholders)}</button>`:l}`},fs=(t,a,e,s)=>{let o=t.pendingAction==="save-plan",n=a?.id==="save-plan"?"primary-reason":"cancel-reason";return i`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      aria-disabled=${o?"true":l}
      aria-describedby=${o?n:l}
      @click=${r=>{o||s(t.planDraft.id?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"},r.currentTarget)}}
    >${e("v4_cancel","Cancel")}</button>
    ${o&&n==="cancel-reason"?i`<p class="action-reason" id=${n}>${e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:l}
    ${a?l:i`<p class="action-summary">${e("v4_plan_save_after_work","You can save when the robot finishes.")}</p>`}
  `},ys=(t,a,e)=>i`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      @click=${s=>e(Ht(t),s.currentTarget)}
    >${a("v4_cancel","Cancel")}</button>
  `,Ht=t=>t.areaDraft.id!==null?{type:"select-area",areaId:t.areaDraft.id,workflow:"areaReview"}:{type:"open-workflow",workflow:"none"},$s=(t,a,e)=>{let s=e.querySelector(Q)?.shadowRoot;if(t.workflow==="draw")return a.workflow==="areaReview"&&t.areaDraft.id!==null?e.querySelector("[data-redraw]")??s?.querySelector("[data-redraw]"):null;let o=s?.querySelector(q)?.shadowRoot;if(a.workflow==="plan"&&a.planView==="edit"&&a.expandedRoom)return o?.querySelector(`[data-room-disclosure="${CSS.escape(a.expandedRoom)}"]`);if(a.workflow==="plan"&&t.planView==="edit")return e.querySelector(pe)?.shadowRoot?.querySelector("button");let n=t.selection.planId;return a.workflow==="plans"&&n?o?.querySelector(`[data-plan-row="${CSS.escape(n)}"]`):null},ws=(t,a,e,s)=>{let o=$s(t,a,e);return s(o)?(o.scrollIntoView({block:"nearest"}),o.focus({preventScroll:!0}),!0):!1};var ks=(t,a,e)=>{let s=(g,p,u)=>P(e,g,p,u),o=te(a),n=a.cadenceResetRequest,r=a.resources.plans.value,d=n&&r?.rooms.find(g=>g.roomId===n.roomId)?.name||n?.roomId||"room",c=n?r?.plans.find(g=>g.id===n.planId)?.rooms.find(g=>g.roomId===n.roomId)?.cadence?.scope==="shared":!1,m=n?.mode??"mop";switch(t){case"confirmDeletePlan":return o&&{title:s("v4_delete_plan","Delete plan?"),detail:s("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:o.name}),...o.successor===void 0?{}:{consequence:o.successor===null?s("v4_delete_plan_none","You'll have no default plan."):s("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:o.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return o&&{title:s("v4_delete_area","Delete area?"),detail:s("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:o.name}),...o.successor===void 0?{}:{consequence:o.successor===null?s("v4_delete_area_none","No custom area will be selected."):s("v4_delete_area_selected","{area} becomes the selected custom area.",{area:o.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:m==="mop"?s("v4_reset_mop_cadence_title","Reset mopping progress?"):s("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:c?s("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}):s("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}),cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("v4_reset","Reset"),action:"reset-room-cadence"}}},xs=(t,a,e)=>{let s=t;if(!Ue(s.detail))return;if(Ge(a,s.detail)){t.stopPropagation(),e(s.detail);return}if(s.detail?.type!=="open-dialog")return;let o=s.composedPath().find(n=>n instanceof HTMLElement&&n.hasAttribute("data-dialog-launcher"));return o instanceof HTMLElement?o:void 0},Ss=(t,a,e,s)=>{let o=t.cadenceResetRequest;e({type:"dismiss-top-layer"}),a!=="reset-room-cadence"?s(a):o&&s({id:a,planId:o.planId,roomId:o.roomId,mode:o.mode})},Cs=(t,a)=>{let e=t.cadenceResetRequest;return t.dialog!=="confirmResetCadence"||!e?null:a.querySelector(Q)?.shadowRoot?.querySelector(q)?.shadowRoot?.querySelector(`[data-room-disclosure="${CSS.escape(e.roomId)}"]`)??null};var Be=class{constructor(a){this.menu=new K(a,".overflow-wrap",".overflow")}render({state:a,narrow:e,t:s,intent:o,diagnostics:n}){let r=(c,m,g)=>i`
      <button class="ms-row ms-row--menu" type="button" role="menuitemradio" aria-checked=${String(c)} data-selected=${c?"true":l} tabindex="-1" @click=${g}><span>${m}</span>${c?$(rt):l}</button>
    `,d=(c,m)=>r(a.quality===c,m,()=>o({type:"set-quality",quality:c}));return i`
      <div id="map-options" class="overflow-menu ms-surface ms-surface--overlay" role="menu" aria-label=${s("v4_map_options","Map options")}>
        ${e?i`
          <div role="group" aria-labelledby="menu-display">
            <p class="menu-heading" id="menu-display" role="presentation">${s("v4_map_display","Map display")}</p>
            ${we(a)==="top"?i`
              ${r(a.appearance==="photo",s("map_style_photo","Photo"),()=>o({type:"set-appearance",appearance:"photo"}))}
              ${r(a.appearance==="rooms",s("v4_room_colours","Room colors"),()=>o({type:"set-appearance",appearance:"rooms"}))}
            `:l}
            <button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitemcheckbox"
              aria-checked=${String(a.labelsVisible)}
              tabindex="-1"
              @click=${()=>o({type:"toggle-labels"})}
            ><span>${s("v4_room_names","Room names")}</span><span class="ms-switch" aria-checked=${String(a.labelsVisible)} aria-hidden="true"></span></button>
          </div>
        `:l}
        <div role="group" aria-labelledby="menu-detail">
          <p class="menu-heading" id="menu-detail" role="presentation">${s("map_quality_label","Map detail")}</p>
          ${d("auto",s("map_quality_auto","Auto detail"))}
          ${d("efficient",s("map_quality_efficient","Efficient"))}
          ${d("balanced",s("map_quality_balanced","Balanced"))}
          ${d("maximum",s("map_quality_maximum","Maximum"))}
        </div>
        <button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!1),n()}}>${s("v4_map_diagnostics","Map diagnostics")}</button>
      </div>
    `}};var Rs=t=>i`
  <p id="zone-keyboard-help" class="sr-only">${t("v4_zone_keyboard_help","Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag.")}</p>
  <p id="keyboard-draw-help" class="sr-only">${t("v4_keyboard_draw_help","Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>
`,Es=({state:t,coarse:a,t:e,close:s})=>{let o=t.workflow==="draw",n=we(t)==="top",r=e("v4_how_to_move","How to move the map"),d=a?[[e("v4_touch","Touch"),o?e("v4_touch_draw_help","Drag to paint \xB7 two fingers to move or zoom"):e("v4_touch_help","Drag to move the map \xB7 pinch to zoom \xB7 twist two fingers to rotate")]]:[[e("v4_trackpad","Trackpad"),e("v4_trackpad_help","Scroll to move the map \xB7 pinch to zoom \xB7 twist to rotate")],[e("v4_mouse","Mouse"),o?e("v4_mouse_draw_help","Drag to paint \xB7 right-drag or Space-drag to move \xB7 wheel to zoom"):n?e("v4_mouse_top_help","Drag to move the map \xB7 wheel to zoom"):e("v4_mouse_help","Drag to move the map \xB7 right-drag or Shift-drag to rotate \xB7 wheel to zoom")],[e("v4_keyboard","Keyboard"),o?t.draw.tool==="outline"?e("v4_zone_keyboard_help","Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag."):e("v4_keyboard_draw_help","Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase."):n?e("v4_keyboard_top_help","WASD or arrows to move \xB7 +/\u2212 to zoom \xB7 0 to fit"):e("v4_keyboard_help","WASD to move \xB7 Q/E or arrows to orbit \xB7 +/\u2212 to zoom \xB7 0 to fit")]];return i`
    <div id="navigation-help" class="navigation-help ms-surface ms-surface--floating" role="dialog" aria-modal="false" aria-label=${r}>
      <header>
        <h2>${r}</h2>
        <button class="ms-btn ms-btn--sm" type="button" @click=${s}>${e("v4_close","Close")}</button>
      </header>
      <dl>${d.map(([c,m])=>i`<dt>${c}</dt><dd>${m}</dd>`)}</dl>
    </div>
  `};var Ts=(t,a)=>{let{tool:e}=a.draw;if(e==="pan")return null;let s=window.matchMedia("(any-pointer: coarse)").matches;return e==="outline"?s?t("v4_points_hint_touch","Tap to add points \xB7 two fingers to move the map"):t("v4_points_hint_pointer","Click to add points \xB7 right-drag to move the map"):s?t("v4_draw_hint_touch","Drag to paint \xB7 two fingers to move the map"):t("v4_draw_hint_pointer","Drag to paint \xB7 right-drag or Space-drag to move the map")},qt=se(q),Ot=se(ue),Vt=se(me),_e=t=>t.currentTarget.value,je=class extends N{constructor(){super(...arguments);this.state=z();this.narrow=!1;this._historyPreviewPosition=null;this.#s=new ct(this,()=>import("./diagnostics-panel-TMLEW5ZM.js"));this.#o="";this.#i=(e,s,o)=>this.#t(e,s,o)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0},narrow:{type:Boolean}}}static{this.styles=[L,A,W,O,I` :host{display:block;min-inline-size:0;container-type:inline-size;}.ms-row--danger{color:var(--ms-danger);}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;clip-path:inset(50%);white-space:nowrap;}button,select,input[type="checkbox"]{cursor:pointer;}.stack{display:grid;gap:var(--ms-space-3);}.subtle{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}.loading,.empty,.problem,.notice{--ms-local:var(--ms-surface-sunken);padding:var(--ms-space-3);border-radius:var(--ms-radius-md);background:var(--ms-local);font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug);}.problem,.notice[data-tone="warning"]{--ms-local:color-mix(in srgb,var(--notice-tone) 12%,var(--ms-surface-card));border-inline-start:3px solid var(--notice-tone);color:var(--ms-text);}.problem{--notice-tone:var(--ms-danger);}.notice[data-tone="warning"]{--notice-tone:var(--ms-warning);}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2);}.list{display:grid;gap:var(--ms-space-2);}.group{display:grid;gap:var(--ms-space-2);}.floor[aria-current="true"]{border-color:var(--ms-resolved-indicator,var(--ms-accent));background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-local));}.problem p{margin:0;}@media (forced-colors:active){.floor[aria-current="true"]{forced-color-adjust:none;color:HighlightText;background:Highlight;border-color:Highlight;}}.toolbar{display:flex;flex-wrap:wrap;gap:var(--ms-space-2);}.checkbox{display:flex;align-items:center;gap:var(--ms-space-2);min-block-size:var(--ms-control);font-size:var(--ms-t-xs);font-weight:var(--ms-w-medium);}.checkbox input{inline-size:1.2rem;block-size:1.2rem;}.floor small,.snapshot small,.list-button small{margin-inline-start:auto;color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local));font-weight:var(--ms-w-regular);}.timeline{display:grid;gap:var(--ms-space-2);}.timeline-ends{display:flex;justify-content:space-between;margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);}@media (max-width:25rem){.split{grid-template-columns:1fr;}}`]}#s;#o;willUpdate(e){if(!e.has("state"))return;let{workflow:s,selection:o}=this.state,n=`${s}:${o.floorId}:${o.historyId??"live"}`;n!==this.#o&&(this.#o=n,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#t(e,s,o){return P(this.localize,e,s,o)}#e(){let e=Ye(this.state);return e?this.#t(e.reasonKey,e.reason):null}#n(e){return Z(this.#i,e)}#a(e){return j(this.#i,e)}#i;#m(e){return e==="vacuum"?l:i`<p class="subtle">${this.#t("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#r(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#p(e){switch(e){case"rooms":case"plans":case"plan":return{loading:this.#t("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#t("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#t("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#t("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#t("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#t("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#t("v4_loading_history","Loading map history\u2026"),unavailable:this.#t("v4_history_unavailable","Map history is unavailable right now."),empty:this.#t("v4_no_map_history","No saved map snapshots yet.")}}}#c({status:e,value:s},o,n){let r=this.#p(n);return s===null&&(e==="idle"||e==="loading")?i`<div class="loading" role="status">${r.loading}</div>`:e==="error"?i`
        <div class="stack">
          <div class="problem" role="alert">${r.unavailable}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:n})}>${this.#t("v4_retry","Try again")}</button>
          </div>
        </div>
      `:e==="empty"?i`<div class="empty">${r.empty}</div>`:o}#u(){return this.#c(this.state.resources.plans,oe`<${Ot}
      .state=${this.state}
      .localize=${this.localize}
    ></${Ot}>`,"rooms")}#h(){let e=this.state.workflow==="plans"?"plans":"plan";return this.#c(this.state.resources.plans,oe`<${qt}
      .state=${this.state}
      .localize=${this.localize}
    ></${qt}>`,e)}#d(){let e=this.state.resources.areas,s=this.narrow?null:Ts(this.#i,this.state),o=this.#e(),n=(r,d)=>i`
      <button
        class="list-button ms-row"
        type="button"
        aria-disabled=${o?"true":l}
        aria-describedby=${o?"areas-held-reason":l}
        @click=${()=>{o||this.#r(d)}}
      >${r}</button>
    `;return i`
      <div class="stack">
        ${s?i`<p class="subtle draw-hint">${s}</p>`:l}
        ${this.state.precisionOpen&&!this.narrow?oe`<${Vt} .state=${this.state} .localize=${this.localize}></${Vt}>`:l}
        ${this.#c(e,i`
          <div class="group">
            <h3 class="ms-section-heading" id="areas-heading">${this.#t("area_workspace_title","Custom areas")}</h3>
            <div class="list" role="group" aria-labelledby="areas-heading">
              ${n(this.#t("area_new","New area"),{type:"select-area",areaId:null})}
              ${(e.value?.areas||[]).map(r=>n(i`<bdi>${r.name}</bdi> ${r.status==="current"?l:i`<small>${this.#t("v4_review","Review")}</small>`}`,{type:"select-area",areaId:r.id,workflow:"areaReview"}))}
            </div>
            ${o?i`<p class="sr-only" id="areas-held-reason">${o}</p>`:l}
          </div>
        `,"draw")}
      </div>
    `}#l(){let e=this.state.areaDraft,s=this.state.resources.areas,o=e.canRebind||e.status==="review",n=!o&&(e.status==="stale"||e.status==="unknown"),r=this.#e(),d=r?"review-held-reason":l,c=r?"true":l,m=G(this.state),g=te(this.state,"confirmDeleteArea")!==void 0;return i`
      <div class="stack">
        ${o?i`<div class="notice" data-tone="warning" role="status">${this.#t("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:l}
        ${n?i`<div class="problem" role="alert">${this.#t("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:l}
        ${s.status==="error"?i`
          <div class="stack">
            <div class="problem" role="alert">${this.#p("areaReview").unavailable}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"areaReview"})}>${this.#t("v4_retry","Try again")}</button></div>
          </div>
        `:l}
        <label class="field ms-field">${this.#t("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} ?readonly=${!!r} aria-disabled=${c} aria-describedby=${d} @input=${p=>{r||this.#r({type:"patch-area-draft",patch:{name:_e(p)}})}}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#t("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} aria-disabled=${c} aria-describedby=${d} @change=${p=>{if(r){p.currentTarget.value=e.cleaningMode;return}this.#r({type:"patch-area-draft",patch:{cleaningMode:_e(p)}})}}>${Y.map(p=>i`<option value=${p} ?selected=${p===e.cleaningMode}>${this.#n(p)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#t("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} aria-disabled=${c} aria-describedby=${d} @change=${p=>{if(r){p.currentTarget.value=e.coverageSetting;return}this.#r({type:"patch-area-draft",patch:{coverageSetting:_e(p)}})}}>${B.map(p=>i`<option value=${p} ?selected=${p===e.coverageSetting}>${this.#a(p)}</option>`)}</select>
          </label>
        </div>
        ${this.#m(e.cleaningMode)}
        ${m?i`
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" data-redraw aria-disabled=${c} aria-describedby=${d} @click=${()=>{r||this.#r({type:"open-workflow",workflow:"draw"})}}>${this.#t("v4_edit_outline","Redraw")}</button>
          </div>
        `:l}
        ${r?i`<p class="sr-only" id="review-held-reason">${r}</p>`:l}
        ${g?i`
          <button
            class="list-button ms-row ms-row--danger"
            type="button"
            data-dialog-launcher="confirmDeleteArea"
            aria-disabled=${c}
            aria-describedby=${d}
            @click=${()=>{r||this.#r({type:"open-dialog",dialog:"confirmDeleteArea"})}}
          >${this.#t("area_delete","Delete")}</button>
        `:l}
      </div>
    `}#v(){let e=this.state.resources.history,s=e.value,o=s?.floors.find(_=>_.id===this.state.selection.floorId)||s?.floors.find(_=>_.active)||s?.floors[0],n=o?.snapshots||[],r=this.state.selection.historyId?Math.max(0,n.findIndex(_=>_.id===this.state.selection.historyId)):n.length,d=this.#t("map_timeline_live_action","Live"),c=!!o?.active,m=c?n.length:n.length-1,g=Math.min(this._historyPreviewPosition??r,m),p=n[g],u=this.#e(),h=u?"true":l,v=u?"history-held-reason":l,f=this.state.dataMode==="live"&&this.state.floor.readOnly;return this.#c(e,i`
      <div class="stack">
        ${f?i`<p class="subtle">${this.#t("v4_reason_live_map_required","Can't edit until you show the live map.")}</p>`:l}
        ${(s?.floors.length||0)>1?i`
          <div class="group">
            <h3 class="ms-section-heading" id="floors-heading">${this.#t("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(s?.floors||[]).map((_,b)=>i`
              <button
                class="floor ms-row"
                type="button"
                aria-current=${String(_.id===o?.id)}
                aria-disabled=${h}
                aria-describedby=${v}
                @click=${()=>{u||this.#r({type:"set-floor",floorId:_.id})}}
              >
                <span>${_.label||(_.active?this.#t("v4_current_floor","Current floor"):this.#t("v4_saved_floor","Saved floor {number}",{number:_.ordinal??b}))}</span>
                <small>${_.active?d:this.#t("v4_saved_map","Saved map")}</small>
              </button>
            `)}
            </div>
          </div>
        `:l}
        <div class="timeline">
          ${n.length>=3?i`
            <label class="field ms-field">${this.#t("map_timeline_label","Map timeline")}
              <input
                type="range"
                class="ms-range"
                min="0"
                max=${String(m)}
                step="1"
                .value=${String(g)}
                aria-valuetext=${p?Ae(p.createdAt,this.dates):d}
                aria-disabled=${h}
                aria-describedby=${v}
                @input=${_=>{if(u){_.currentTarget.value=String(r);return}this._historyPreviewPosition=Number(_e(_))}}
                @change=${_=>{if(u){_.currentTarget.value=String(r);return}let b=Number(_e(_));this._historyPreviewPosition=null,this.#r({type:"set-history",historyId:b===n.length?null:n[b]?.id||null})}}
              >
            </label>
            <p class="timeline-ends" aria-hidden="true"><span>${this.#t("map_timeline_oldest","Oldest")}</span><span>${c?d:this.#t("map_timeline_newest","Newest")}</span></p>
          `:l}
          <div class="list">
            ${n.map((_,b)=>i`
              <button class="snapshot ms-row" type="button" aria-current=${String(_.id===this.state.selection.historyId)} aria-disabled=${h} aria-describedby=${v} @click=${()=>{u||this.#r({type:"set-history",historyId:_.id})}}>
                <span>${Ae(_.createdAt,this.dates)}</span><small>${this.#t("v4_history_position","{position} of {count}",{position:b+1,count:n.length})}</small>
              </button>
            `)}
          </div>
        </div>
        ${u?i`<p class="sr-only" id="history-held-reason">${u}</p>`:l}
      </div>
    `,"history")}#g(){return this.#s.request(),this.#s.status!=="ready"?dt(this.#s.status,this.localize,this.retry):i`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}render(){switch(this.state.workflow){case"rooms":return this.#u();case"plans":case"plan":return this.#h();case"draw":return this.#d();case"areaReview":return this.#l();case"history":return this.#v();case"support":return this.#g();case"none":return l}}};customElements.get(Q)||customElements.define(Q,je);export{Be as MapOptions,je as MaticMapWorkflowV4,bs as actionReason,Ss as confirmDialog,ks as dialogCopy,xs as dialogLauncher,Cs as dialogReturnTarget,ys as drawCancel,Ht as drawExit,Ts as drawHint,Rs as drawRecipes,ws as focusPlanTarget,O as formControls,fs as planCancel,gs as planTitle,_s as planTools,Es as renderMapHelp,us as roomTapAnnouncement,ms as roomsGripLine,ps as roomsSummary,jt as shellWorkflowStyles};
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
