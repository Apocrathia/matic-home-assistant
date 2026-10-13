import{D as Ue,G as Qe,P as H,a as le,b as ce,d as we,e as V,f as te,g as I}from"./chunk-O5RER5EP.js";import{A as Ve,B as je,M as Fe,O as U,Q as k,a as A,b as q,c as D,f as de,i as se,y as me,z as Be}from"./chunk-JS2FO4Y3.js";import{$ as ke,E as Le,F as Ae,G as qe,H as De,J as ie,K as He,R as T,S as i,V as We,W as l,X as Oe,Y as L,Z as M,_ as Ke,c as F,e as ye,f as $e,j as Te,k as Me,n as z,p as Ie,q as Ne,t as K,z as ze}from"./chunk-NGPLTNCD.js";var W=(t,n)=>new Intl.NumberFormat(t).format(n),Q=(t,n)=>n.cleaningMode==="mop"?t("v4_room_setting_mop","Mop"):n.cleaningMode==="vacuum"?n.coverageSetting==="quick"?t("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):t("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):n.coverageSetting==="quick"?t("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):t("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),xe=(t,n,e)=>{let s=c=>{let u=e.filter(c).map(v=>v.name);return u.length?Ke(n,u):null},a=c=>s(u=>u.cadenceReasons.includes("coverage_due")&&u.coverageSetting===c),o=s(c=>c.cadenceReasons.includes("mop_due")),r=a("quick"),m=a("standard"),d=a("heavy_duty");return[o&&t("v4_due_mop","Mop due in {rooms}",{rooms:o}),r&&t("v4_due_quick","Quick vacuum due in {rooms}",{rooms:r}),m&&t("v4_due_optimal","Optimal vacuum due in {rooms}",{rooms:m}),d&&t("v4_due_heavy","Heavy duty vacuum due in {rooms}",{rooms:d})].filter(c=>!!c)},wt={mop:(t,n)=>t("v4_room_schedules_mop","Mop every {mop} cleans",{mop:n}),mop_one:t=>t("v4_room_schedules_mop_one","Mop every clean"),quick:(t,n,e)=>t("v4_room_schedules_quick","Quick vacuum every {cov} cleans",{cov:e}),quick_one:t=>t("v4_room_schedules_quick_one","Quick vacuum every clean"),optimal:(t,n,e)=>t("v4_room_schedules_optimal","Optimal vacuum every {cov} cleans",{cov:e}),optimal_one:t=>t("v4_room_schedules_optimal_one","Optimal vacuum every clean"),heavy:(t,n,e)=>t("v4_room_schedules_heavy","Heavy duty vacuum every {cov} cleans",{cov:e}),heavy_one:t=>t("v4_room_schedules_heavy_one","Heavy duty vacuum every clean"),mop_quick:(t,n,e)=>t("v4_room_schedules_mop_quick","Mop every {mop} cleans \xB7 Quick vacuum every {cov} cleans",{mop:n,cov:e}),mop_quick_one_mop:(t,n,e)=>t("v4_room_schedules_mop_quick_one_mop","Mop every clean \xB7 Quick vacuum every {cov} cleans",{cov:e}),mop_quick_one_cov:(t,n)=>t("v4_room_schedules_mop_quick_one_cov","Mop every {mop} cleans \xB7 Quick vacuum every clean",{mop:n}),mop_quick_one_both:t=>t("v4_room_schedules_mop_quick_one_both","Mop every clean \xB7 Quick vacuum every clean"),mop_optimal:(t,n,e)=>t("v4_room_schedules_mop_optimal","Mop every {mop} cleans \xB7 Optimal vacuum every {cov} cleans",{mop:n,cov:e}),mop_optimal_one_mop:(t,n,e)=>t("v4_room_schedules_mop_optimal_one_mop","Mop every clean \xB7 Optimal vacuum every {cov} cleans",{cov:e}),mop_optimal_one_cov:(t,n)=>t("v4_room_schedules_mop_optimal_one_cov","Mop every {mop} cleans \xB7 Optimal vacuum every clean",{mop:n}),mop_optimal_one_both:t=>t("v4_room_schedules_mop_optimal_one_both","Mop every clean \xB7 Optimal vacuum every clean"),mop_heavy:(t,n,e)=>t("v4_room_schedules_mop_heavy","Mop every {mop} cleans \xB7 Heavy duty vacuum every {cov} cleans",{mop:n,cov:e}),mop_heavy_one_mop:(t,n,e)=>t("v4_room_schedules_mop_heavy_one_mop","Mop every clean \xB7 Heavy duty vacuum every {cov} cleans",{cov:e}),mop_heavy_one_cov:(t,n)=>t("v4_room_schedules_mop_heavy_one_cov","Mop every {mop} cleans \xB7 Heavy duty vacuum every clean",{mop:n}),mop_heavy_one_both:t=>t("v4_room_schedules_mop_heavy_one_both","Mop every clean \xB7 Heavy duty vacuum every clean")},Ge=(t,n,e)=>{let s=e?.mopEveryN??null,a=e?.coverageEveryN??null;if(s===null&&a===null)return null;let o=e?.periodicCoverageSetting,r=o==="quick"?"quick":o==="heavy_duty"?"heavy":"optimal",m=s===null?`${r}${a===1?"_one":""}`:a===null?`mop${s===1?"_one":""}`:`mop_${r}${s===1&&a===1?"_one_both":s===1?"_one_mop":a===1?"_one_cov":""}`,d=wt[m];return d?d(t,s===null?"":W(n,s),a===null?"":W(n,a)):null};var ue=1,ae=100,Xe=(t,n,e)=>{if(n)return e;let s=t.trim();if(s==="")return null;let a=Number(s);return Number.isFinite(a)?Math.min(ae,Math.max(ue,Math.round(a))):e},Ze=(t,n)=>t===null?n>0?ue:null:t+n<ue?null:Math.min(ae,t+n),Ye=T`
.ms-stepper { --ms-local: var(--ms-surface-card); display: inline-grid; flex: none; grid-template-columns: var(--ms-control) minmax(3rem, 4.5rem) var(--ms-control); gap: var(--ms-space-1); align-items: center; border: 1px solid var(--ms-line-strong); border-radius: var(--ms-radius-sm); background: var(--ms-local); }
.ms-stepper--readonly { grid-template-columns: minmax(3rem, 4.5rem); }
.ms-stepper .ms-btn { border-radius: calc(var(--ms-radius-sm) - 1px); }
.ms-stepper input { inline-size: 100%; min-inline-size: 0; min-block-size: var(--ms-control); margin: 0; padding: 0; border: 0; border-radius: var(--ms-radius-xs); color: var(--ms-text); background: transparent; font: inherit; font-size: var(--ms-t-md); font-weight: var(--ms-w-medium); font-variant-numeric: tabular-nums; text-align: center; appearance: textfield; -moz-appearance: textfield; }
.ms-stepper input::-webkit-inner-spin-button, .ms-stepper input::-webkit-outer-spin-button { margin: 0; appearance: none; -webkit-appearance: none; }
.ms-stepper input::placeholder { color: var(--ms-text-quiet); font-weight: var(--ms-w-medium); opacity: 1; }
.ms-stepper input:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: -2px; }
.ms-stepper input[readonly] { color: var(--ms-text-quiet); }
@media (forced-colors: active) { .ms-stepper { border: 1px solid CanvasText; } }
`,Je=t=>{let{id:n,t:e,value:s}=t,a=t.heldBy!==null,o=i`<input
    id=${n}
    type="number"
    inputmode="numeric"
    min="1"
    max=${ae}
    step="1"
    placeholder=${e("v4_cadence_off","Off")}
    aria-labelledby=${t.labelId}
    aria-describedby=${t.describedBy??l}
    aria-disabled=${a&&!t.readonly?"true":l}
    ?readonly=${t.readonly||a}
    .value=${s===null?"":String(s)}
    @change=${m=>{let d=m.currentTarget,c=t.readonly||a?s:Xe(d.value,d.validity.badInput,s);d.value=c===null?"":String(c),c!==s&&t.commit(c)}}
  >`;if(t.readonly)return i`<span class="ms-stepper ms-stepper--readonly">${o}</span>`;let r=m=>{let c=(m<0?s===null:s===ae)?m<0?e("v4_cadence_stepper_off_reason","This schedule is already off."):e("v4_cadence_stepper_max_reason","Every 100 cleans is the longest schedule."):null,u=`${n}-${m<0?"min":"max"}`,v=m<0?e("v4_stepper_decrease","Decrease {label}",{label:t.label}):e("v4_stepper_increase","Increase {label}",{label:t.label});return i`<button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${v}
      aria-controls=${n}
      aria-disabled=${c||a?"true":l}
      aria-describedby=${[c?u:null,t.heldBy].filter(Boolean).join(" ")||l}
      title=${c??l}
      @click=${()=>{!c&&!a&&t.commit(Ze(s,m))}}
    >${k(m<0?Be:me)}${c?i`<span class="sr-only" id=${u}>${c}</span>`:l}</button>`};return i`<span class="ms-stepper">${r(-1)}${o}${r(1)}</span>`};var ne=["vacuum","mop","vacuum_and_mop"],G=["quick","standard","heavy_duty"],_e=(t,n)=>n==="vacuum"?t("vacuum","Vacuum"):n==="mop"?t("mop","Mop"):t("vacuum_and_mop","Vacuum + mop"),X=(t,n)=>n==="quick"?t("quick","Quick"):n==="standard"?t("standard","Optimal"):t("heavy_duty","Heavy duty"),tt=t=>t("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."),st=(t,n,e,s=e?.reasons||[])=>{if(s.includes("coverage_requires_vacuum"))return tt(t);if(s.includes("identity_changed")||s.includes("room_not_on_current_map"))return t("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(s.includes("shared_schedule_unavailable"))return t("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(s.includes("mop_progress_unverified")||s.includes("coverage_progress_unverified")){let m=[];return s.includes("mop_progress_unverified")&&m.push(t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),s.includes("coverage_progress_unverified")&&m.push(t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),m.join(" ")}if(s.includes("invalid_cadence_policy"))return t("v4_cadence_policy_invalid","The room schedule needs review before it can be applied.");if(!n||!n.mopEveryN&&!n.coverageEveryN)return t("v4_cadence_not_enabled","No recurring room schedule is enabled.");let a=[],o=e?.mopDue||e?.reasons.includes("mop_due"),r=e?.coverageDue||e?.reasons.includes("coverage_due");return n.mopEveryN&&a.push(o?t("v4_cadence_mop_due","Vacuum and mop is due on this clean."):t("v4_cadence_mop_progress","Mop every {interval} cleans; {completed} counted since the last mop.",{interval:n.mopEveryN,completed:e?.mopProgress??0})),n.coverageEveryN&&a.push(r?t("v4_cadence_coverage_due","{coverage} vacuum rotation is due on this clean.",{coverage:X(t,n.periodicCoverageSetting||"standard")}):t("v4_cadence_coverage_progress","Vacuum rotation every {interval} cleans; {completed} counted so far.",{interval:n.coverageEveryN,completed:e?.coverageProgress??0})),a.join(" ")},kt={scope:"shared",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1},he=t=>!!(t&&(t.mopEveryN!==null||t.coverageEveryN!==null)),xt={quick:(t,n,e)=>n===null?t("v4_cadence_coverage_quick_off","Quick vacuum"):e?t("v4_cadence_coverage_quick_one","Quick vacuum every clean"):t("v4_cadence_coverage_quick","Quick vacuum every {count} cleans",{count:n}),standard:(t,n,e)=>n===null?t("v4_cadence_coverage_optimal_off","Optimal vacuum"):e?t("v4_cadence_coverage_optimal_one","Optimal vacuum every clean"):t("v4_cadence_coverage_optimal","Optimal vacuum every {count} cleans",{count:n}),heavy_duty:(t,n,e)=>n===null?t("v4_cadence_coverage_heavy_off","Heavy duty vacuum"):e?t("v4_cadence_coverage_heavy_one","Heavy duty vacuum every clean"):t("v4_cadence_coverage_heavy","Heavy duty vacuum every {count} cleans",{count:n})},Rt={quick:(t,n)=>n?t("v4_cadence_next_mop_quick","Mop and quick vacuum on the next clean"):t("v4_cadence_next_quick","Quick vacuum on the next clean"),standard:(t,n)=>n?t("v4_cadence_next_mop_optimal","Mop and optimal vacuum on the next clean"):t("v4_cadence_next_optimal","Optimal vacuum on the next clean"),heavy_duty:(t,n)=>n?t("v4_cadence_next_mop_heavy","Mop and heavy duty vacuum on the next clean"):t("v4_cadence_next_heavy","Heavy duty vacuum on the next clean")},St=(t,n,e)=>e===null?t("v4_cadence_mop_off","Mop"):e===1?t("v4_cadence_mop_interval_one","Mop every clean"):t("v4_cadence_mop_interval","Mop every {count} cleans",{count:W(n,e)}),Ct=(t,n,e,s)=>xt[e](t,s===null?null:W(n,s),s===1),Et=["identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy"],oe=({room:t,saved:n,catalogRoom:e})=>{let s=t.cadence??kt,a=e?.sharedCadence,o=a===void 0&&(e?.sharedCadenceReasons?.length??0)>0,r=a!==void 0||o,m=n?.cadence?.scope==="shared",d=a!==void 0&&!m&&t.cadence?.scope==="shared";return{policy:s,shared:a,sharedExists:r,participating:m,joinPending:d,progress:d?e?.sharedCadenceProgress:t.cadenceProgress,reasons:d?e?.sharedCadenceReasons??[]:t.cadenceReasons??[],savedPolicy:n?.cadence,savedProgress:n?.cadenceProgress,sharedFits:!a||(a.mopEveryN===null||t.cleaningMode==="vacuum")&&(a.coverageEveryN===null||t.cleaningMode!=="mop"),sharedBroken:o}},N={mop:{every:"mopEveryN",flag:"doMopNext",next:"nextMopIn",count:"mopProgress"},coverage:{every:"coverageEveryN",flag:"doCoverageNext",next:"nextCoverageIn",count:"coverageProgress"}},at=(t,n)=>!!(t.joinPending?t.shared:t.savedPolicy)?.[N[n].flag],nt=(t,n)=>{let{every:e,flag:s,next:a,count:o}=N[n],r=t.policy[e];if(!t.progress||r===null||t.policy[s]||!at(t,n))return t.progress?.[a]??null;let m=t.progress[o];return m>=r-1?1:Math.max(1,r-m)},ot=(t,n)=>{let e=N[n].every,s=t.savedPolicy?.[e]??null;return!t.joinPending&&s!==null&&t.policy[e]!==null&&t.policy[e]!==s},ge=(t,n)=>{let e=t.policy[N[n].every];return e!==null&&e>1&&(t.policy[N[n].flag]||at(t,n)||ot(t,n)||nt(t,n)!==1)},rt=({room:t},n)=>({mop:!n.reasons.includes("mop_progress_unverified")&&t.cleaningMode!=="vacuum"&&n.policy.mopEveryN===null,coverage:!n.reasons.includes("coverage_progress_unverified")&&t.cleaningMode==="mop"}),et=(t,n,e,s)=>{let a=e.policy[N[s].every],o=nt(e,s);return a===null?t("v4_cadence_status_off","Not scheduled"):a===1?t("v4_cadence_status_every","Due every clean"):e.policy[N[s].flag]?t("v4_cadence_status_next","Due next clean"):ot(e,s)?t("v4_cadence_status_edited","Keeps the progress so far"):!e.joinPending&&e.savedPolicy!==void 0&&e.savedPolicy.scope!==e.policy.scope||o===null?null:o<=1?t("v4_cadence_status_next","Due next clean"):t("v4_cadence_status_in","Due in {count} cleans",{count:W(n,o)})},Pt=(t,n,e)=>{let{policy:s,participating:a}=n,o=he(s);if(n.joinPending)return t("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");if(a&&s.scope==="plan")return t("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule.");if(!a&&s.scope==="shared"&&o)return t("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero.");let r=["mop","coverage"].some(m=>s[N[m].every]!==null&&(n.savedProgress?.[N[m].count]??0)>0);return s.scope==="plan"&&o&&!he(n.savedPolicy)&&!r?t("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):n.savedPolicy&&(s.mopEveryN!==n.savedPolicy.mopEveryN||s.coverageEveryN!==n.savedPolicy.coverageEveryN)?t("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."):a?t("v4_cadence_shared_edit_effect","Changes apply to every plan that uses {room}'s shared schedule.",{room:e}):null},Tt=(t,n,e)=>{let s=oe(e),{policy:a,reasons:o}=s,{room:r,saved:m,name:d}=e,c=a.coverageEveryN!==null,u=(c?null:e.offLevel)??a.periodicCoverageSetting??"heavy_duty",v=C=>o.includes(C),h=v("mop_progress_unverified"),{mop:g,coverage:p}=rt(e,s),b=v("coverage_progress_unverified"),R=!b&&r.cleaningMode==="mop"&&c,_=qe(o.filter(C=>Et.includes(C)),d),x=a.doMopNext||a.doCoverageNext,E=x?a.doMopNext:ge(s,"mop"),P=x?a.doCoverageNext:ge(s,"coverage"),w=(C,B,J)=>m!==void 0&&((C??0)>0||!!B||!!m.cadenceReasons?.includes(J));return{policy:a,level:u,mop:{every:a.mopEveryN,label:St(t,n,a.mopEveryN),status:et(t,n,s,"mop"),reason:h?t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):g?t("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum."):null,blocked:g,unverified:h},coverage:{every:a.coverageEveryN,label:Ct(t,n,u,a.coverageEveryN),status:et(t,n,s,"coverage"),reason:b?t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):R?tt(t):p?t("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming."):null,blocked:p,unverified:b},legacyCoverage:R,roomReason:_?t(_.reasonKey,_.reason,_.reasonPlaceholders):null,sharedHint:s.shared!==void 0&&s.sharedFits&&!s.participating&&a.scope==="shared"&&!he(a),joinPending:s.joinPending,participating:s.participating,next:E||P?{label:P?Rt[u](t,E):t("v4_cadence_next_mop","Mop on the next clean"),on:x,mop:E,coverage:P,blocked:E&&g?"mop":P&&p?"coverage":null}:null,explanation:Pt(t,s,d),scope:a.scope,resettable:{mop:w(m?.cadenceProgress?.mopProgress,m?.cadence?.doMopNext,"mop_progress_unverified"),coverage:w(m?.cadenceProgress?.coverageProgress,m?.cadence?.doCoverageNext,"coverage_progress_unverified")},sharedReason:Re(s)?s.sharedBroken?t("v4_cadence_shared_broken_reason","Can't count across all plans until you fix this room's shared schedule in a plan that uses it."):t("v4_cadence_shared_mode_reason","Can't count across all plans until this room's cleaning mode works with its shared schedule."):null}},it=t=>t.shared&&t.sharedFits&&!t.participating?{...t.shared,scope:"shared"}:null,Re=t=>t.sharedExists&&(!t.sharedFits||t.sharedBroken)&&!t.participating,lt=(t,n,e)=>{let s=oe(t),{policy:a}=s;if(s.joinPending)return null;if(e!==null&&!he(a)&&a.scope==="shared"){let o=it(s);if(o)return o;if(Re(s))return lt({...t,room:{...t.room,cadence:{...a,scope:"plan"}}},n,e)}return n==="mop"?e===null?{...a,mopEveryN:null,doMopNext:!1}:{...a,mopEveryN:e}:e===null?{...a,coverageEveryN:null,doCoverageNext:!1}:a.coverageEveryN===null?{...a,coverageEveryN:e,periodicCoverageSetting:t.offLevel??a.periodicCoverageSetting??"heavy_duty"}:{...a,coverageEveryN:e}},Mt=(t,n)=>{let e=oe(t);return e.joinPending||e.policy.coverageEveryN===null?null:{...e.policy,periodicCoverageSetting:n}},It=(t,n)=>{let e=oe(t);if(e.joinPending)return null;let s=ge(e,"mop"),a=ge(e,"coverage");if(!s&&!a&&!e.policy.doMopNext&&!e.policy.doCoverageNext)return null;let o=rt(t,e);return n&&(s&&o.mop||a&&o.coverage)?null:n?{...e.policy,doMopNext:s,doCoverageNext:a}:{...e.policy,doMopNext:!1,doCoverageNext:!1}},Nt=(t,n)=>{let e=oe(t);return n==="shared"&&Re(e)?null:(n==="shared"?it(e):null)??{...e.policy,scope:n}},zt=t=>({...t,scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1}),Lt=(t,n)=>n.planDraft.dirty?t("v4_reason_reset_unsaved","Can't reset until you save or cancel your changes."):n.command!=="idle"||n.managedLock||n.activity!=="idle"&&n.activity!=="docked"||n.dataMode!=="live"?t("v4_reason_reset_busy","Can't reset until the robot is idle and the map is live."):null,At=(t,n,e,s)=>{let a=t.resources.plans.value,o=t.planDraft.id;return{room:n,saved:o?a?.plans.find(r=>r.id===o)?.rooms.find(r=>r.roomId===n.roomId):void 0,catalogRoom:a?.rooms.find(r=>r.roomId===n.roomId),name:e,offLevel:s}},ve="\0",pe=(t,n)=>{let[e,...s]=t.split(ve);return s.length?i`${e}<bdi>${n}</bdi>${s.join(n)}`:t},ct=(t,n,e,s)=>{let{t:a,state:o,held:r}=t,m=o.planDraft,d=At(o,n,s,t.offLevel),c=Tt(a,o.locale,{...d,name:ve}),u=(f,y,S="small")=>S==="p"?i`<p class="sched-status sched-reason" id=${f??l}>${k(U)}<span>${y}</span></p>`:i`<small class="sched-status sched-reason" id=${f??l}>${k(U)}<span>${y}</span></small>`,{policy:v,next:h}=c,g=f=>{if(!f||r)return;let y=m.rooms.map((S,$)=>$===e?{...S,cadence:f}:S);t.intent({type:"patch-plan-draft",patch:{rooms:y}})},p={disabled:r?"true":l,described:r??l},b=(...f)=>f.filter(Boolean).join(" ")||null,R=(f,y)=>y.reason?u(f,y.reason):y.status?i`<small class="sched-status" id=${f}>${y.status}</small>`:l,_=Lt(a,o),x=!!(r||_),E=(f,y,S,$=null)=>i`<button
    class=${y}
    type="button"
    role=${$??l}
    tabindex=${$?"-1":l}
    aria-label=${f==="mop"?a("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:s}):a("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:s})}
    aria-disabled=${x?"true":l}
    aria-describedby=${r??(_?S:null)??l}
    @click=${()=>{x||!m.id||(t.menu.close(!1),t.intent({type:"request-room-cadence-reset",planId:m.id,roomId:n.roomId,mode:f}))}}
  >${f==="mop"?a("v4_reset_mop_cadence_button","Reset mopping"):a("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`,P=a("v4_room_more_named","More for {room}",{room:s}),{menu:w}=t,C=m.id&&(c.resettable.mop||c.resettable.coverage)?i`<div class="room-more" @keydown=${w.keydown} @focusout=${w.focusout}>
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
        ${c.resettable.mop?E("mop","ms-row ms-row--menu","reset-reason","menuitem"):l}
        ${c.resettable.coverage?E("coverage","ms-row ms-row--menu","reset-reason","menuitem"):l}
      </div>
      ${_?i`<div class="reason">${u("reset-reason",_,"p")}</div>`:l}
    </div>`:l}
  </div>`:l,B=(f,y,S)=>{let $=`sched-${f}`,ee=y.reason||y.status?`${$}-status`:null;return i`<div class="sched-row">
      <label class="sched-label" id=${`${$}-label`} for=${$}>${y.label}</label>
      <div class="sched-controls">
        ${S}
        ${Je({id:$,labelId:`${$}-label`,label:y.label,value:y.every,describedBy:b(ee,r),heldBy:r??(y.blocked?ee:null),readonly:c.joinPending,t:a,commit:re=>g(lt(d,f,re))})}
      </div>
      ${R(`${$}-status`,y)}
      ${y.unverified&&m.id?i`${E(f,"ms-btn ms-btn--secondary",`${$}-reset-reason`)}
        ${_?u(`${$}-reset-reason`,_,"p"):l}`:l}
    </div>`},J=r??(c.coverage.blocked?"sched-coverage-status":null),$t=c.joinPending?l:i`<select
    class="ms-select sched-level"
    aria-label=${a("v4_cadence_level_named","Vacuum level for {room}",{room:s})}
    aria-disabled=${J?"true":l}
    aria-describedby=${J??l}
    .value=${c.level}
    @change=${f=>{let y=f.currentTarget;if(J){y.value=c.level;return}let S=y.value,$=Mt(d,S);t.setOffLevel($?null:S),$&&g($)}}
  >${G.map(f=>i`<option value=${f} ?selected=${f===c.level}>${X(a,f)}</option>`)}</select>`;return i`<section class="schedule" role="group" aria-label=${a("v4_room_cadence_named","Room schedule for {room}",{room:s})}>
    <div class="schedule-head"><h3>${a("v4_room_schedule","Schedule")}</h3>${C}</div>
    ${c.roomReason?u(null,pe(c.roomReason,s),"p"):l}
    ${c.sharedHint?i`<p class="schedule-note">${pe(a("v4_cadence_shared_available","{room} has a shared schedule, and turning on a row uses it.",{room:ve}),s)}</p>`:l}
    ${B("mop",c.mop,l)}
    ${B("coverage",c.coverage,$t)}
    ${c.legacyCoverage?i`<button
      type="button"
      class="ms-btn ms-btn--secondary sched-off"
      aria-label=${a("v4_cadence_turn_off_named","Turn off the vacuum rotation in {room}",{room:s})}
      aria-disabled=${p.disabled}
      aria-describedby=${p.described}
      @click=${()=>g(zt(v))}
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
        aria-describedby=${b("sched-next-hint",r??(c.joinPending?"sched-join":h.blocked?`sched-${h.blocked}-status`:null))??l}
        aria-disabled=${r||c.joinPending||h.blocked?"true":l}
        @click=${()=>{h.blocked||g(It(d,!h.on))}}
      ></button>
    </div>`:l}
    ${c.joinPending?i`<p class="schedule-note" id="sched-join">${pe(a("v4_cadence_join_pending",`Uses {room}'s shared schedule; change it after you save, or choose "In this plan only" under Advanced.`,{room:ve}),s)}</p>`:l}
    ${c.explanation?i`<p class="schedule-note">${pe(c.explanation,s)}</p>`:l}
    <details class="advanced">
      <summary>${a("v4_advanced","Advanced")}${k(se)}</summary>
      <fieldset class="scope">
        <legend>${a("v4_cadence_scope","Count cleans")}</legend>
        ${[["shared",a("v4_cadence_shared","Across all plans (recommended)")],["plan",a("v4_cadence_this_plan","In this plan only")]].map(([f,y])=>{let S=r??(f==="shared"&&c.sharedReason?"sched-scope-reason":null);return i`<label class="scope-row"><input
            type="radio"
            name="sched-scope"
            value=${f}
            .checked=${c.scope===f}
            aria-disabled=${S?"true":l}
            aria-describedby=${S??l}
            @change=${$=>{let ee=S?null:Nt(d,f);ee?g(ee):$.currentTarget.closest("fieldset")?.querySelectorAll("input").forEach(re=>{re.checked=re.value===c.scope})}}
          ><span>${y}</span></label>`})}
        ${c.sharedReason?u("sched-scope-reason",c.sharedReason,"p"):l}
      </fieldset>
      <p class="schedule-note">${a("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
    </details>
  </section>`};var dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mt=t=>(...n)=>({_$litDirective$:t,values:n}),be=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,e,s){this._$Ct=n,this._$AM=e,this._$Ci=s}_$AS(n,e){return this.update(n,e)}update(n,e){return this.render(...e)}};var{I:qt}=Oe,ut=t=>t;var pt=()=>document.createComment(""),Z=(t,n,e)=>{let s=t._$AA.parentNode,a=n===void 0?t._$AB:n._$AA;if(e===void 0){let o=s.insertBefore(pt(),a),r=s.insertBefore(pt(),a);e=new qt(o,r,t,t.options)}else{let o=e._$AB.nextSibling,r=e._$AM,m=r!==t;if(m){let d;e._$AQ?.(t),e._$AM=t,e._$AP!==void 0&&(d=t._$AU)!==r._$AU&&e._$AP(d)}if(o!==a||m){let d=e._$AA;for(;d!==o;){let c=ut(d).nextSibling;ut(s).insertBefore(d,a),d=c}}}return e},O=(t,n,e=t)=>(t._$AI(n,e),t),Dt={},vt=(t,n=Dt)=>t._$AH=n,ht=t=>t._$AH,fe=t=>{t._$AR(),t._$AA.remove()};var gt=(t,n,e)=>{let s=new Map;for(let a=n;a<=e;a++)s.set(t[a],a);return s},_t=mt(class extends be{constructor(t){if(super(t),t.type!==dt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,n,e){let s;e===void 0?e=n:n!==void 0&&(s=n);let a=[],o=[],r=0;for(let m of t)a[r]=s?s(m,r):r,o[r]=e(m,r),r++;return{values:o,keys:a}}render(t,n,e){return this.dt(t,n,e).values}update(t,[n,e,s]){let a=ht(t),{values:o,keys:r}=this.dt(n,e,s);if(!Array.isArray(a))return this.ut=r,o;let m=this.ut??=[],d=[],c,u,v=0,h=a.length-1,g=0,p=o.length-1;for(;v<=h&&g<=p;)if(a[v]===null)v++;else if(a[h]===null)h--;else if(m[v]===r[g])d[g]=O(a[v],o[g]),v++,g++;else if(m[h]===r[p])d[p]=O(a[h],o[p]),h--,p--;else if(m[v]===r[p])d[p]=O(a[v],o[p]),Z(t,d[p+1],a[v]),v++,p--;else if(m[h]===r[g])d[g]=O(a[h],o[g]),Z(t,a[v],a[h]),h--,g++;else if(c===void 0&&(c=gt(r,g,p),u=gt(m,v,h)),c.has(m[v]))if(c.has(m[h])){let b=u.get(r[g]),R=b!==void 0?a[b]:null;if(R===null){let _=Z(t,a[v]);O(_,o[g]),d[g]=_}else d[g]=O(R,o[g]),Z(t,a[v],R),a[b]=null;g++}else fe(a[h]),h--;else fe(a[v]),v++;for(;g<=p;){let b=Z(t,d[p+1]);O(b,o[g]),d[g++]=b}for(;v<=h;){let b=a[v++];b!==null&&fe(b)}return this.ut=r,vt(t,d),We}});var Y=class{constructor(n,e,s){this.host=n;this.root=e;this.launcher=s;this.open=!1;this.#s=!1;this.keydown=n=>{if(!this.open)return;if(n.key==="Escape"){n.preventDefault(),this.close(!0);return}let e=[...this.host.renderRoot.querySelectorAll(`${this.root} [role=menuitem]`)],s=e.indexOf(n.composedPath()[0]),a=n.key==="ArrowDown"?s+1:n.key==="ArrowUp"?s-1:n.key==="Home"?0:n.key==="End"?e.length-1:null;a===null||s<0||!e.length||(n.preventDefault(),e[(a+e.length)%e.length]?.focus())};this.focusout=n=>{let e=n.relatedTarget;e&&!n.currentTarget.contains(e)&&this.#o(!1)};this.#e=n=>{let e=this.host.renderRoot.querySelector(this.root);this.open&&e&&!n.composedPath().includes(e)&&this.#o(!1)};n.addController(this)}hostConnected(){window.addEventListener("pointerdown",this.#e,!0)}hostDisconnected(){window.removeEventListener("pointerdown",this.#e,!0)}hostUpdated(){this.#s&&(this.#s=!1,this.host.renderRoot.querySelector(`${this.root} [role=menuitem]`)?.focus())}#s;#o(n){n!==this.open&&(this.open=n,this.#s=n,this.host.requestUpdate())}toggle(){this.#o(!this.open)}close(n){this.#o(!1),n&&this.host.renderRoot.querySelector(`${this.root} ${this.launcher}`)?.focus()}#e};var Ht=["mop_progress_unverified","coverage_progress_unverified","identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy","coverage_requires_vacuum"],Se=class extends L{constructor(){super(...arguments);this._moved="";this.#s=null;this.#o=new Map;this.#e=new Y(this,".room-more","> button");this.state=z();this.#t=(e,s,a)=>M(this.localize,e,s,a)}static{this.styles=[A,q,D,Ye,T`
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
`]}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_moved:{state:!0}}}#s;#o;#e;#t;#r(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#a(e){return W(this.state.locale,e)}#d(e){return e.length?i`<span class="lines">${e.map(s=>i`<span class="line">${k(Fe)}<span>${s}</span></span>`)}</span>`:l}#_(e,s){let a=e.rooms.length,o=e.runBehavior==="ordered",r=a===1?o?this.#t("v4_plan_row_ordered_one","1 room \xB7 Top to bottom, as listed"):this.#t("v4_plan_row_rotation_one","1 room \xB7 Longest-waiting rooms first"):o?this.#t("v4_plan_row_ordered","{count} rooms \xB7 Top to bottom, as listed",{count:this.#a(a)}):this.#t("v4_plan_row_rotation","{count} rooms \xB7 Longest-waiting rooms first",{count:this.#a(a)}),m=e.nextRunPreview?.blocker,d=e.enabled?m&&m!=="plan_disabled"?i`<span class="lines"><span class="line" data-tone="warning">${k(U)}<span>${this.#t("v4_plan_row_blocked","Needs attention before it can run")}</span></span></span>`:this.#d(xe(this.#t,this.state.locale,e.nextRunPreview?.rooms??[])):l,c=this.#t("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return i`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${e.id}
        aria-describedby=${s?"default-hint":l}
        @click=${()=>this.#r({type:"select-plan",planId:e.id})}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${e.name}</bdi>${s?i`<span class="ms-chip chip-default" title=${c}>${this.#t("v4_plan_default","Default")}</span>`:l}${e.enabled?l:i`<span class="ms-chip">${this.#t("v4_paused","Paused")}</span>`}</strong>
          <small>${r}</small>
          ${d}
        </span>
        <span class="ms-row__trail">${k(se)}</span>
      </button>
      ${s?i`<span class="sr-only" id="default-hint">${c}</span>`:l}
    </li>`}#n(){let e=this.state.resources.plans.value,s=this.#t("v4_create_plan","Create a plan");if(!e?.plans.length)return i`<div class="empty-card">
        <h3>${this.#t("v4_no_plans","No plans yet")}</h3>
        <p>${this.#t("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#r({type:"select-plan",planId:null})}>${s}</button>
      </div>`;let a=[...e.plans].sort((o,r)=>+(r.id===e.selectedPlan)-+(o.id===e.selectedPlan));return i`<ul class="plain">
      ${a.map(o=>this.#_(o,o.id===e.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#r({type:"select-plan",planId:null})}>
        <span class="ms-row__lead">${k(me)}</span>
        <span class="ms-row__body"><strong>${s}</strong></span>
      </button></li>
    </ul>`}#u(){let e=this.state;return e.pendingAction==="save-plan"?this.#t("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):e.pendingAction==="run-plan"?this.#t("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):ie(e)?this.#t("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#t("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):ze(e)?null:this.#t("v4_reason_save_plan_map","Waiting for the map to be ready.")}#l(){let e=this.state.planDraft.enabled,s=this.#u();return i`
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
          aria-describedby=${s?"enabled-hint enabled-reason":"enabled-hint"}
          aria-disabled=${s?"true":l}
          @click=${()=>{s||this.#r({type:"set-plan-enabled",enabled:!e})}}
        ></button>
      </div>
      ${s?i`<p class="reason" id="enabled-reason">${s}</p>`:l}
    `}#p(e,s,a,o={}){return i`<li class="run-row" ?data-break=${o.part!==void 0}>
      ${o.part===void 0?l:i`<span class="sr-only">${this.#t("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#a(o.part)})}</span>`}
      ${a===null?l:i`<span class="pos-badge" aria-hidden="true">${this.#a(a)}</span>`}
      <span class="row-lines">
        <bdi>${e}</bdi>
        <small>${s}</small>
        ${o.blocked?i`<span class="ms-chip chip-attention">${this.#t("v4_needs_attention","Needs attention")}</span>`:l}
      </span>
    </li>`}#b(){let e=this.state,s=e.planDraft,a=e.resources.plans.value,o=a?.plans.find(w=>w.id===s.id);if(!a||!o)return l;let r=o.nextRunPreview,m=r?.blocker??null,d=!s.enabled,c=!d&&!!(r&&!m&&/^[0-9a-f]{64}$/u.test(r.previewToken??"")),u=o.runBehavior==="ordered",v=c&&r?r.rooms:[],h=!d&&m?De(e,o)?.jump.roomId??null:null,g=d||c||h||e.pendingAction==="save-plan"?null:m&&Ae[m]||Le,p=c?v.length:o.rooms.length,b=c?o.nextRunEstimateSeconds:null,R=b===null?"":this.#a(Math.max(1,Math.round(b/60))),_=b===null?p===1?this.#t("v4_plan_summary_rooms_one","1 room"):this.#t("v4_plan_summary_rooms","{count} rooms",{count:this.#a(p)}):p===1?this.#t("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:R}):this.#t("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#a(p),minutes:R}),x=c&&r?r.missionBoundaries:[],E=c?v.map((w,C)=>{let B=x.indexOf(C);return this.#p(w.name,Q(this.#t,w),u?C+1:null,B<0?{}:{part:B+2})}):Ne(o).rooms.map(w=>this.#p(a.rooms.find(C=>C.roomId===w.roomId)?.name??w.roomId,Q(this.#t,w),null,{blocked:w.roomId===h})),P=s.finishCurrentRoom?this.#t("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#a(s.finishCurrentRoomThreshold)}):s.returnToBase?this.#t("v4_plan_summary_return","Returns to the dock when finished"):null;return i`
      <p class="summary">${_}</p>
      ${this.#d(xe(this.#t,e.locale,v))}
      <h3 class="heading">${d?this.#t("v4_plan_rooms_heading","Rooms in this plan"):e.resources.entry?.activePlan?this.#t("v4_next_run_after_active","After this run"):this.#t("v4_next_run_preview","Next run")}</h3>
      ${c&&!u?i`<p class="quiet">${this.#t("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}</p>`:l}
      ${x.length?i`<p class="quiet">${this.#t("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:this.#a(x.length+1)})}</p>`:l}
      ${g?i`<p class="problem">${this.#t(g.reasonKey,g.reason)}</p>
        <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"plan"})}>${this.#t("v4_retry","Try again")}</button>`:l}
      ${c&&u?i`<ol class="run-list" role="list">${E}</ol>`:i`<ul class="run-list" role="list">${E}</ul>`}
      ${this.#l()}
      ${P?i`<p class="quiet">${P}</p>`:l}
    `}willUpdate(e){e.has("state")&&(this.state.workflow!=="plan"||this.state.planView!=="edit")&&(this._moved="");let s=e.get("state");s&&(s.expandedRoom!==this.state.expandedRoom||this.state.planView!=="edit"||this.state.dialog||this.#c())&&(this.#e.open=!1),s&&(s.planDraft.id!==this.state.planDraft.id||s.workflow!==this.state.workflow||this.state.planView!=="edit")&&this.#o.clear()}updated(e){!this.#s||!e.has("state")||(this.renderRoot.querySelector(`[data-move="${CSS.escape(this.#s)}"]`)?.focus(),this.#s=null)}#c(){return this.state.pendingAction==="save-plan"?"edit-held":null}#i(e){this.#c()||this.#r({type:"patch-plan-draft",patch:e})}#v(e,s){this.#i({rooms:this.state.planDraft.rooms.map((a,o)=>o===e?{...a,...s}:a)})}#f(e,s,a,o){let r=[...this.state.planDraft.rooms],m=e+s;if(this.#c()||m<0||m>=r.length)return;let[d]=r.splice(e,1);d&&(r.splice(m,0,d),this.#s=o,this._moved=this.#t("v4_room_moved","{room} moved to position {position}",{room:a,position:this.#a(m+1)}),this.#r({type:"patch-plan-draft",patch:{rooms:r}}))}#h(e){return{disabled:e?"true":l,described:e??l}}#g(e,s,a,o,r,m){let d=`${e.roomId}:${o<0?"up":"down"}`,c=o<0?this.#t("move_room_up","Move {room} earlier",{room:a}):this.#t("move_room_down","Move {room} later",{room:a}),u=o<0?this.#t("v4_room_already_first","{room} is already first",{room:a}):this.#t("v4_room_already_last","{room} is already last",{room:a}),v=r?`${d}-end`:m;return i`<button
        class="ms-btn ms-btn--icon"
        type="button"
        data-move=${d}
        aria-label=${c}
        title=${r?u:c}
        aria-disabled=${r||m?"true":l}
        aria-describedby=${v??l}
        @click=${()=>{r||this.#f(s,o,a,d)}}
      >${k(o<0?Ve:je)}</button>
      ${r?i`<span class="sr-only" id=${`${d}-end`}>${u}</span>`:l}`}#m(e,s,a,o,r,m,d){let c=this.state.planDraft,u=a!==null&&this.state.expandedRoom===e,v=c.rooms.length-1,h=this.#h(d),g=a===null&&m,p=a?Ge(this.#t,this.state.locale,a.cadence):null,b=a?.cadenceReasons?.some(_=>Ht.includes(_)),R=!!a?.cadence?.mopEveryN;return i`<li class="ms-row edit-row" data-selected=${a?"true":l}>
      <label class="edit-check"><input
        type="checkbox"
        .checked=${a!==null}
        aria-label=${this.#t("v4_room_include_named","Include {room}",{room:s})}
        aria-disabled=${d||g?"true":l}
        aria-describedby=${d??(g?"room-limit":l)}
        @click=${_=>{(d||g)&&_.preventDefault()}}
        @change=${()=>this.#r({type:"toggle-room",roomId:e})}
      ></label>
      ${a?i`<button
          class="edit-disclosure"
          type="button"
          data-room-disclosure=${e}
          aria-expanded=${String(u)}
          aria-label=${this.#t("v4_room_settings_named","Settings for {room}",{room:s})}
          aria-disabled=${h.disabled}
          aria-describedby=${h.described}
          @click=${()=>{d||this.#r({type:"set-plan-view",view:"edit",roomId:u?null:e})}}
        >
          ${r?i`<span class="pos-badge" aria-hidden="true">${this.#a(o+1)}</span>`:l}
          <span class="row-lines">
            <bdi>${s}</bdi>
            <small>${Q(this.#t,a)}</small>
            ${p?i`<small>${p}</small>`:l}
            ${b?i`<span class="ms-chip chip-attention">${this.#t("v4_needs_attention","Needs attention")}</span>`:l}
          </span>
          ${k(se)}
        </button>`:i`<span class="edit-name"><bdi>${s}</bdi></span>`}
      ${a&&r?i`<span class="edit-moves">
        ${this.#g(a,o,s,-1,o===0,d)}
        ${this.#g(a,o,s,1,o===v,d)}
      </span>`:i`<span></span>`}
      ${u&&a?i`<div class="row-expanded">
        <div class="split">
          <label class="field ms-field">${this.#t("v4_cleaning_system","Cleaning mode")}
            <select
              aria-label=${this.#t("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:s})}
              aria-disabled=${h.disabled}
              aria-describedby=${[d,R?"mode-reason":null].filter(Boolean).join(" ")||l}
              .value=${a.cleaningMode}
              @change=${_=>{let x=_.currentTarget;d?x.value=a.cleaningMode:this.#v(o,{cleaningMode:x.value})}}
            >${ne.map(_=>i`<option value=${_} ?selected=${_===a.cleaningMode} ?disabled=${R&&_!=="vacuum"}>${_e(this.#t,_)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#t("vacuum_coverage","Vacuum coverage")}
            <select
              aria-label=${this.#t("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:s})}
              aria-disabled=${h.disabled}
              aria-describedby=${h.described}
              ?disabled=${a.cleaningMode==="mop"}
              .value=${a.coverageSetting}
              @change=${_=>{let x=_.currentTarget;d?x.value=a.coverageSetting:this.#v(o,{coverageSetting:x.value})}}
            >${G.map(_=>i`<option value=${_} ?selected=${_===a.coverageSetting}>${X(this.#t,_)}</option>`)}</select>
          </label>
        </div>
        ${R?i`<p class="sched-status sched-reason" id="mode-reason">${k(U)}<span>${this.#t("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</span></p>`:l}
        ${a.cleaningMode==="vacuum"?l:i`<p class="subtle">${this.#t("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
        ${ct({t:this.#t,state:this.state,intent:_=>this.#r(_),held:d,offLevel:this.#o.get(e)??null,setOffLevel:_=>{_?this.#o.set(e,_):this.#o.delete(e),this.requestUpdate()},menu:this.#e},a,o,s)}
      </div>`:l}
    </li>`}#y(e,s,a,o,r,m){let d=[a?`${e}-hint`:"",r??""].filter(Boolean).join(" ");return i`<div class="switch-row">
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
    </div>`}#$(){let e=this.state,s=e.planDraft,a=e.resources.plans.value;if(!a)return l;let o=this.#c(),r=this.#h(o),m=s.runBehavior==="ordered",d=s.rooms.length>=100,c=p=>a.rooms.find(b=>b.roomId===p)?.name??p,u=[...s.rooms.map((p,b)=>({roomId:p.roomId,room:p,index:b})),...a.rooms.filter(p=>!s.rooms.some(b=>b.roomId===p.roomId)).map(p=>({roomId:p.roomId,room:null,index:-1}))],v=s.finishCurrentRoomThreshold,h=this.#a(v),g=(p,b)=>i`<button
      class="ms-btn"
      type="button"
      aria-pressed=${String(s.runBehavior===p)}
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
          .value=${s.name}
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
        <small>${this.#t("v4_plan_rooms_selected","{selected} of {total} selected",{selected:this.#a(s.rooms.length),total:this.#a(a.rooms.length)})}</small>
      </div>
      ${d?i`<p class="reason" id="room-limit">${this.#t("v4_plan_room_limit","Can't add more rooms until you remove one; a plan holds up to {limit}.",{limit:this.#a(100)})}</p>`:l}
      <ul class="plain" role="list" aria-labelledby="edit-rooms">
        ${_t(u,p=>p.roomId,p=>this.#m(p.roomId,c(p.roomId),p.room,p.index,m,d,o))}
      </ul>
      <span class="sr-only" role="status">${this._moved}</span>
      <details class="run-end">
        <summary>${this.#t("v4_run_end_options","When a run ends")}</summary>
        ${this.#y("return-dock",this.#t("v4_plan_return_to_dock","Return to the dock when finished"),null,s.returnToBase,o,p=>this.#i({returnToBase:p}))}
        ${this.#y("finish-room",this.#t("v4_plan_finish_room","Finish the current room when you press Stop"),this.#t("v4_plan_finish_room_hint","Only if the room is at least {percent}% done; otherwise the robot stops right away.",{percent:h}),s.finishCurrentRoom,o,p=>this.#i({finishCurrentRoom:p}))}
        ${s.finishCurrentRoom?i`<div class="threshold">
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
    </div>`}render(){let{workflow:e,planView:s}=this.state;return e==="plans"?this.#n():e!=="plan"?l:s==="run"?this.#b():this.#$()}};customElements.get(I)||customElements.define(I,Se);var Ce=class extends L{constructor(){super(...arguments);this.state=z();this.compact=!1;this.inline=!1}static{this.properties={state:{attribute:!1},localize:{attribute:!1},compact:{type:Boolean,reflect:!0},inline:{type:Boolean,reflect:!0}}}static{this.styles=[A,q,D,T`
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
`]}#s(e,s){return M(this.localize,e,s)}#o(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#e(e){let s=e.currentTarget.valueAsNumber;Number.isFinite(s)&&this.#o({type:"set-brush",value:s})}render(){let{draw:e}=this.state;return i`
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
                @change=${this.#e}
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
            @input=${this.#e}
            aria-label=${this.#s("v4_brush_width_slider","Brush width slider")}
            aria-valuetext=${`${e.brushMeters.toFixed(2)} m`}
          />
        </div>
        <p class="hint">${this.#s("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
      </div>
    `}};customElements.get(we)||customElements.define(we,Ce);var Ee=class extends L{constructor(){super(...arguments);this.state=z();this.#e=new Y(this,".more","> button")}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[A,q,D,T`
:host { display: contents; }
.more { position: relative; margin-inline-start: auto; }
.more > .ms-btn { transition: none; }
.reason { flex-basis: 100%; margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: end; }
.menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.menu .reason { padding: var(--ms-space-1) var(--ms-space-3); text-align: start; }
`]}#s(e,s,a){return M(this.localize,e,s,a)}#o(e,s=this){s.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#e;willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this.#e.open=!1)}#t(){let{command:e,pendingAction:s,planDraft:a}=this.state;return s==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):a.dirty?this.#s("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes."):e==="pending"?this.#s("v4_reason_robot_operation_waiting","Waiting for the robot to finish what it's doing."):null}#r(e){if(this.#t())return;let s=e.currentTarget.closest(".more")?.querySelector("button");this.#e.close(!1),this.#o({type:"open-dialog",dialog:"confirmDeletePlan"},s??this)}render(){let{planView:e,planDraft:s,pendingAction:a}=this.state;if(e==="run"){let r=a==="save-plan"?this.#s("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):a==="run-plan"?this.#s("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return i`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#s("v4_edit_plan_named","Edit {plan}",{plan:s.name})}
          aria-disabled=${r?"true":l}
          aria-describedby=${r?"edit-reason":l}
          @click=${()=>{r||this.#o({type:"set-plan-view",view:"edit"})}}
        >${this.#s("v4_edit","Edit")}</button>
        ${r?i`<p class="reason" id="edit-reason">${r}</p>`:l}
      `}if(!K(this.state,"confirmDeletePlan"))return l;let o=this.#t();return i`
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
    `}};customElements.get(te)||customElements.define(te,Ee);var Wt=(t,n,e)=>i`${t.planView==="run"?i`<bdi>${n}</bdi>`:n}${t.planDraft.dirty?i` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:l}`,bt=le(te),Ot=(t,n,e)=>ce`<${bt}
  .state=${t}
  .localize=${n}
  @matic-workspace-intent=${e}
></${bt}>`,ft=(t,n,e,s)=>{let a=s?.room;if(a===void 0)return t(n,e,s);let[o,r]=t(n,e,{...s,room:"\0"}).split("\0");return i`${o}<bdi>${a}</bdi>${r}`},Bt=(t,n,e,s)=>{let a=e?n.jump:void 0;return i`${ft(t,n.reasonKey??"",n.reason??"",n.reasonPlaceholders)}${a?i` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>s({type:"set-plan-view",view:"edit",roomId:a.roomId})}
  >${ft(t,a.labelKey,a.label,a.labelPlaceholders)}</button>`:l}`},Vt=(t,n,e,s)=>{let a=t.pendingAction==="save-plan",o=n?.id==="save-plan"?"primary-reason":"cancel-reason";return i`
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
  `},jt=(t,n,e)=>{let s=e.querySelector(V)?.shadowRoot?.querySelector(I)?.shadowRoot;if(n.workflow==="plan"&&n.planView==="edit"&&n.expandedRoom)return s?.querySelector(`[data-room-disclosure="${CSS.escape(n.expandedRoom)}"]`);if(n.workflow==="plan"&&t.planView==="edit")return e.querySelector(te)?.shadowRoot?.querySelector("button");let a=t.selection.planId;return n.workflow==="plans"&&a?s?.querySelector(`[data-plan-row="${CSS.escape(a)}"]`):null},Ft=(t,n,e,s)=>{let a=jt(t,n,e);return s(a)?(a.scrollIntoView({block:"nearest"}),a.focus({preventScroll:!0}),!0):!1};var Kt=(t,n,e)=>{let s=(u,v,h)=>M(e,u,v,h),a=K(n),o=n.cadenceResetRequest,r=n.resources.plans.value,m=o&&r?.rooms.find(u=>u.roomId===o.roomId)?.name||o?.roomId||"room",d=o?r?.plans.find(u=>u.id===o.planId)?.rooms.find(u=>u.roomId===o.roomId)?.cadence?.scope==="shared":!1,c=o?.mode??"mop";switch(t){case"confirmDeletePlan":return a&&{title:s("v4_delete_plan","Delete plan?"),detail:s("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:a.name}),...a.successor===void 0?{}:{consequence:a.successor===null?s("v4_delete_plan_none","You'll have no default plan."):s("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:a.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return a&&{title:s("v4_delete_area","Delete area?"),detail:s("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:a.name}),...a.successor===void 0?{}:{consequence:a.successor===null?s("v4_delete_area_none","No custom area will be selected."):s("v4_delete_area_selected","{area} becomes the selected custom area.",{area:a.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:c==="mop"?s("v4_reset_mop_cadence_title","Reset mopping progress?"):s("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:d?s("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:m}):s("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:m}),cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("v4_reset","Reset"),action:"reset-room-cadence"}}},Ut=(t,n,e)=>{let s=t;if(!Te(s.detail))return;if(Me(n,s.detail)){t.stopPropagation(),e(s.detail);return}if(s.detail?.type!=="open-dialog")return;let a=s.composedPath().find(o=>o instanceof HTMLElement&&o.hasAttribute("data-dialog-launcher"));return a instanceof HTMLElement?a:void 0},Qt=(t,n,e,s)=>{let a=t.cadenceResetRequest;e({type:"dismiss-top-layer"}),n!=="reset-room-cadence"?s(n):a&&s({id:n,planId:a.planId,roomId:a.roomId,mode:a.mode})},Gt=(t,n)=>{let e=t.cadenceResetRequest;return t.dialog!=="confirmResetCadence"||!e?null:n.querySelector(V)?.shadowRoot?.querySelector(I)?.shadowRoot?.querySelector(`[data-room-disclosure="${CSS.escape(e.roomId)}"]`)??null};var yt=le(I),j=t=>t.currentTarget.value,Xt=t=>t.currentTarget.checked,Pe=class extends L{constructor(){super(...arguments);this.state=z();this._historyPreviewPosition=null;this.#s=new Ue(this,()=>import("./diagnostics-panel-UOPQYW7U.js"));this.#o="";this.#a=(e,s,a)=>this.#e(e,s,a)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0}}}static{this.styles=[A,q,D,T`
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
`]}#s;#o;willUpdate(e){if(!e.has("state"))return;let{workflow:s,selection:a}=this.state,o=`${s}:${a.floorId}:${a.historyId??"live"}`;o!==this.#o&&(this.#o=o,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#e(e,s,a){return M(this.localize,e,s,a)}#t(e){return _e(this.#a,e)}#r(e){return X(this.#a,e)}#a;#d(e){return e==="vacuum"?l:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#_(e){return e==="mop_due"?this.#e("v4_cadence_mop_due_reason","Vacuum and mop are due"):e==="coverage_due"?this.#e("v4_cadence_coverage_due_reason","Vacuum rotation is due"):e==="mop_progress_unverified"?this.#e("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):e==="coverage_progress_unverified"?this.#e("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):this.#e("v4_cadence_due_unknown_reason","Schedule setting due")}#n(e){this.dispatchEvent(new CustomEvent(H,{detail:e,bubbles:!0,composed:!0}))}#u(e){switch(e){case"rooms":case"plans":case"plan":return{loading:this.#e("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#e("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#e("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#e("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#e("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#e("v4_loading_history","Loading map history\u2026"),unavailable:this.#e("v4_history_unavailable","Map history is unavailable right now."),empty:this.#e("v4_no_map_history","No saved map snapshots yet.")}}}#l({status:e,value:s},a,o){let r=this.#u(o);return s===null&&(e==="idle"||e==="loading")?i`<div class="loading" role="status">${r.loading}</div>`:e==="error"?i`
        <div class="stack">
          <div class="problem" role="alert">${r.unavailable}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"open-workflow",workflow:o})}>${this.#e("v4_retry","Try again")}</button>
          </div>
        </div>
      `:e==="empty"?i`<div class="empty">${r.empty}</div>`:a}#p(){let e=this.state.resources.plans,s=Ie(this.state),a=s!==null,o=this.state.selection.roomIds.length>=100,r=!He(this.state),m=ie(this.state);return this.#l(e,i`
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
                    @change=${()=>this.#n({type:"toggle-room",roomId:d.roomId})}
                  >
                  <strong>${d.name}</strong>
                  ${c?i`<small>${this.#e("v4_room_ready","Ready")}</small>`:l}
                </label>
                ${c?this.#c(d.roomId,this.state.selection.roomSettings.find(u=>u.roomId===d.roomId)||{roomId:d.roomId,cleaningMode:"vacuum",coverageSetting:"standard"}):l}
              </div>
            `})}
        </div>
        ${o?i`<p class="subtle" role="status">${this.#e("v4_room_limit_reached","Up to {limit} rooms fit, so remove one to add another.",{limit:100})}</p>`:l}
        <p class="subtle">${this.#e("v4_room_selection_hint","Select rooms here or directly on the map. The map and list stay in sync.")}</p>
        <label class="plan-option">
          <input type="checkbox" .checked=${!this.state.selection.useRoomSchedule} @change=${d=>this.#n({type:"set-use-room-schedule",value:!Xt(d)})}>
          <span class="plan-option-copy">
            <strong>${this.#e("v4_override_room_schedule","Override shared schedule settings")}</strong>
            <small>${this.#e("v4_override_room_schedule_hint","This clean follows the shared schedule unless you turn this on to use the settings chosen here. Anything due stays due, and matching cleans still count toward the schedule.")}</small>
          </span>
        </label>
        ${this.state.selection.roomIds.map(d=>{let c=e.value?.rooms.find(u=>u.roomId===d);return c?.sharedCadence||c?.sharedCadenceProgress||c?.sharedCadenceReasons?.length?i`<p class="subtle">${c.name}: ${st(this.#a,c.sharedCadence,c.sharedCadenceProgress,c.sharedCadenceReasons)}</p>`:l})}
        ${this.state.manualRoomPreview.status==="loading"?i`<p role="status" class="subtle">${this.#e("v4_room_preview_loading","Checking settings\u2026")}</p>`:l}
        ${this.state.manualRoomPreview.status==="error"?i`<div class="stack">
            <div role="alert" class="problem">${this.#e("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"retry-room-preview"})}>${this.#e("v4_retry","Try again")}</button></div>
          </div>`:l}
        ${a?this.#b(s.preview):l}
      </div>
    `,"rooms")}#b(e){let s=new Set(e.missionBoundaries);return i`
      <section class="stack" aria-labelledby="effective-rooms-heading" aria-live="polite">
        <h3 class="group-heading" id="effective-rooms-heading">${this.#e("v4_effective_room_preview","Effective cleaning preview")}</h3>
        ${e.blocker?i`<p class="problem" role="alert">${e.blocker==="invalid_cadence_policy"&&this.state.selection.useRoomSchedule&&this.state.selection.roomSettings.some(a=>a.cleaningMode!=="vacuum")?this.#e("v4_room_preview_schedule_override","The shared schedule can't use the cleaning mode you chose. Turn on Override shared schedule settings, or choose a mode that works with the schedule."):this.#e("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.")}</p>`:l}
        ${e.rooms.length?i`<ol class="list" aria-label=${this.#e("v4_effective_room_order","Effective room order")}>
            ${e.rooms.map((a,o)=>i`
              <li class="ms-row ms-row--stack">
                ${s.has(o)?i`<strong>${this.#e("v4_room_mission_boundary","New part (the robot may stop at the dock first)")}</strong>`:l}
                <strong>${a.name}</strong>
                <span class="subtle">${Q(this.#a,a)}</span>
                ${a.cadenceReasons.length?i`<span class="subtle">${a.cadenceReasons.map(r=>this.#_(r)).join("; ")}</span>`:l}
              </li>
            `)}
          </ol>`:l}
      </section>
    `}#c(e,s){let a=this.state.resources.plans.value?.rooms.find(o=>o.roomId===e)?.name||this.#e("v4_room","Room");return i`
      <div class="split room-settings">
        <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
          <select
            aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:a})}
            .value=${s.cleaningMode}
            @change=${o=>this.#n({type:"patch-room-settings",roomId:e,cleaningMode:j(o)})}
          >${ne.map(o=>i`<option value=${o} ?selected=${o===s.cleaningMode}>${this.#t(o)}</option>`)}</select>
        </label>
        <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
          <select
            aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:a})}
            ?disabled=${s.cleaningMode==="mop"}
            .value=${s.coverageSetting}
            @change=${o=>this.#n({type:"patch-room-settings",roomId:e,coverageSetting:j(o)})}
          >${G.map(o=>i`<option value=${o} ?selected=${o===s.coverageSetting}>${this.#r(o)}</option>`)}</select>
        </label>
      </div>
      ${this.#d(s.cleaningMode)}
    `}#i(){let e=this.state.workflow==="plans"?"plans":"plan";return this.#l(this.state.resources.plans,ce`<${yt}
      .state=${this.state}
      .localize=${this.localize}
    ></${yt}>`,e)}#v(){let e=this.state.resources.areas;return i`
      <div class="stack">
        <p class="subtle">${this.state.draw.tool==="outline"?this.#e("v4_zone_coverage","Place points around the area. Shading shows where the robot cleans inside the outline; narrow edges may stay uncovered."):this.#e("v4_draw_floor_hint","Paint only on the mapped floor. Zooming and panning never change the area.")}</p>
        ${this.state.draw.tool!=="outline"?i`<p class="subtle">${this.#e("v4_keyboard_draw_help","Keyboard: focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>`:l}
        ${this.#l(e,i`
          <div class="group">
            <h3 class="group-heading" id="areas-heading">${this.#e("area_workspace_title","Custom areas")}</h3>
            <div class="list" role="group" aria-labelledby="areas-heading">
            <button class="list-button ms-row ms-row" type="button" @click=${()=>this.#n({type:"select-area",areaId:null})}>${this.#e("area_new","New area")}</button>
            ${(e.value?.areas||[]).map(s=>i`
              <button class="list-button ms-row ms-row" type="button" @click=${()=>{this.#n({type:"select-area",areaId:s.id,workflow:"areaReview"})}}>
                <span>${s.name}</span>
                <small>${s.status==="current"?this.#e("area_workspace_ready","Ready"):this.#e("v4_review","Review")}</small>
              </button>
            `)}
            </div>
          </div>
        `,"draw")}
      </div>
    `}#f(){let e=this.state.areaDraft,s=this.state.resources.areas,a=e.canRebind||e.status==="review",o=!a&&(e.status==="stale"||e.status==="unknown");return i`
      <div class="stack">
        ${s.status==="error"?i`
          <div class="stack">
            <div class="problem" role="alert">${this.#u("areaReview").unavailable}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"open-workflow",workflow:"areaReview"})}>${this.#e("v4_retry","Try again")}</button></div>
          </div>
        `:l}
        ${a?i`<div class="notice" data-tone="warning" role="status">${this.#e("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:l}
        ${o?i`<div class="problem" role="alert">${this.#e("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:l}
        <label class="field ms-field">${this.#e("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} @input=${r=>this.#n({type:"patch-area-draft",patch:{name:j(r)}})}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} @change=${r=>this.#n({type:"patch-area-draft",patch:{cleaningMode:j(r)}})}>${ne.map(r=>i`<option value=${r} ?selected=${r===e.cleaningMode}>${this.#t(r)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} @change=${r=>this.#n({type:"patch-area-draft",patch:{coverageSetting:j(r)}})}>${G.map(r=>i`<option value=${r} ?selected=${r===e.coverageSetting}>${this.#r(r)}</option>`)}</select>
          </label>
        </div>
        ${this.#d(e.cleaningMode)}
        <div class="toolbar">
          <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#n({type:"open-workflow",workflow:"draw"})}>${this.#e("v4_edit_outline","Redraw")}</button>
          ${K(this.state,"confirmDeleteArea")?i`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_delete_area_label","Delete area")}
              data-dialog-launcher="confirmDeleteArea"
              @click=${()=>this.#n({type:"open-dialog",dialog:"confirmDeleteArea"})}
            >${this.#e("area_delete","Delete")}</button>
          `:l}
        </div>
      </div>
    `}#h(){let e=this.state.resources.history,s=e.value,a=s?.floors.find(u=>u.id===this.state.selection.floorId)||s?.floors.find(u=>u.active)||s?.floors[0],o=a?.snapshots||[],r=this.state.selection.historyId?Math.max(0,o.findIndex(u=>u.id===this.state.selection.historyId)):o.length,m=a?.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_return_current_floor","Return to current floor"),d=this._historyPreviewPosition??r,c=o[d];return this.#l(e,i`
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
                @click=${()=>this.#n({type:"set-floor",floorId:u.id})}
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
              aria-valuetext=${c?ke(c.createdAt,this.dates):m}
              ?disabled=${!o.length}
              @input=${u=>{this._historyPreviewPosition=Number(j(u))}}
              @change=${u=>{let v=Number(j(u));this._historyPreviewPosition=null,this.#n({type:"set-history",historyId:v===o.length?null:o[v]?.id||null})}}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId&&!!a?.active)} @click=${()=>this.#n({type:"set-history",historyId:null})}><span>${m}</span><small>${this.#e("v4_current","Current")}</small></button>
            ${o.map((u,v)=>i`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(u.id===this.state.selection.historyId)} @click=${()=>this.#n({type:"set-history",historyId:u.id})}>
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
    ></matic-map-diagnostics-v4>`}#m(e){return i`<fieldset class="workflow-fields" ?disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}>${e}</fieldset>`}render(){switch(this.state.workflow){case"rooms":return this.#p();case"plans":case"plan":return this.#i();case"draw":return this.#m(this.#v());case"areaReview":return this.#m(this.#f());case"history":return this.#m(this.#h());case"support":return this.#g();case"none":return l}}};customElements.get(V)||customElements.define(V,Pe);export{Pe as MaticMapWorkflowV4,Bt as actionReason,Qt as confirmDialog,Kt as dialogCopy,Ut as dialogLauncher,Gt as dialogReturnTarget,Ft as focusPlanTarget,Vt as planCancel,Wt as planTitle,Ot as planTools};
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
