import{a as K,b as ma}from"./chunk-JEAIEFQY.js";import{a as ce,b as de,d as _e,e as X,f as be,g as O,h as fe,l as Tt,o as Mt,v as Te,w as Pt,y as j,z as It}from"./chunk-WZKVFAWI.js";import{A as St,B as Y,C as Ee,D as Rt,E as Ct,K as Et,P as oe,R as M,T as y,a as H,b as q,c as V,f as Ce,j as B,k as kt,l as xt}from"./chunk-QIAGD2SF.js";import{$ as _t,G as D,I as Ke,J as Re,M as le,O as ut,U as ht,V as vt,_ as gt,aa as bt,ba as ft,c as ne,ca as yt,e as ct,ea as F,f as dt,fa as Ue,ha as Ge,j as mt,k as pt,na as I,pa as i,sa as $t,ta as l,ua as wt,va as W,wa as A,xa as z,ya as Qe}from"./chunk-AV2ODJNM.js";var Z=(t,n,e,a)=>{if(e==="vacuum")return l;let s=n.deepMop,o=!s||s.enabled===null,r=n.pendingAction==="set-deep-mop",d=!ht(n),c=`deep-mop-${a}`;return i`<div class="mop-setting">
<span class="mop-setting-copy">
<span id=${c}>${t("v4_deep_mop","Double-pass mopping")}</span>
<small id=${`${c}-scope`}>${r?t("v4_saving","Saving\u2026"):o||!n.host.connected||!n.host.robotConnected||!n.host.administrator?t("v4_setting_unavailable","Unavailable"):n.managedLock||F(n)?t("v4_setting_busy","Available when cleaning stops"):t("v4_deep_mop_scope","All mopping \xB7 saves immediately")}</small>
</span>
${o?l:i`<button class="ms-switch" type="button" role="switch"
aria-labelledby=${c} aria-describedby=${`${c}-scope`}
aria-checked=${String(s?.enabled===!0)} aria-disabled=${String(d)}
aria-busy=${r?"true":l}
@click=${m=>{d||m.currentTarget?.dispatchEvent(new CustomEvent(It,{detail:{id:"toggle-deep-mop"},bubbles:!0,composed:!0}))}}></button>`}
</div>`};var C=(t,n)=>new Intl.NumberFormat(t).format(n),pa=["vacuum","mop","vacuum_and_mop"],ua=["quick","standard","heavy_duty"],At=t=>(Array.isArray(t)?t:[]).flatMap(n=>{let e=n??{};if(e.kind!=="area")return[null];let{area_id:a,name:s,cleaning_mode:o,coverage_setting:r}=e;return typeof a=="string"&&pa.includes(o)&&ua.includes(r)?[{areaId:a,name:typeof s=="string"&&s?s:a,cleaningMode:o,coverageSetting:r}]:[]}),Me=t=>At(t.entries).filter(n=>n!==null),Nt=(t,n,e)=>{let a=[...n];return[...At(t.entries).flatMap(s=>s?[e(s)]:a.splice(0,1)),...a]},Xe=({rooms:t,areas:n})=>[...t,null].flatMap((e,a)=>[...n.filter(s=>Math.min(s.slot,t.length)===a).map(s=>({area:s})),...e?[{room:e}]:[]]),zt=t=>{let n=[],e=[];for(let{room:a,area:s}of t)a?n.push(a):e.push({...s,slot:n.length});return{rooms:n,areas:e}},Pe=(t,n)=>(t??[]).filter(e=>Me(e).some(a=>a.areaId===n)).map(e=>`"${e.name}"`),Ie=(t,n,e,a)=>[...e||!a?[e===1?t("v4_plan_summary_rooms_one","1 room"):t("v4_plan_summary_rooms","{count} rooms",{count:C(n,e)})]:[],...a?[a===1?t("v4_plan_summary_areas_one","1 custom area"):t("v4_plan_summary_areas","{count} custom areas",{count:C(n,a)})]:[]].join(" \xB7 "),re=(t,n,e)=>{let a=m=>{let p=e.filter(m).map(u=>u.name);return p.length?z(n,p):null},s=m=>a(p=>p.cadenceReasons.includes("coverage_due")&&p.coverageSetting===m),o=a(m=>m.cadenceReasons.includes("mop_due")),r=s("quick"),d=s("standard"),c=s("heavy_duty");return[o&&t("v4_due_mop","Mop due in {rooms}",{rooms:o}),r&&t("v4_due_quick","Quick vacuum due in {rooms}",{rooms:r}),d&&t("v4_due_optimal","Optimal vacuum due in {rooms}",{rooms:d}),c&&t("v4_due_heavy","Heavy duty vacuum due in {rooms}",{rooms:c})].filter(m=>!!m)},Ae=(t,n,e)=>{let a=e.rooms.length,s=e.runBehavior==="ordered",o=Me(e).length;return o?`${Ie(t,n,a,o)} \xB7 ${s?t("v4_plan_order_ordered_hint","Top to bottom, as listed"):t("v4_plan_order_intelligent_hint","Longest-waiting first")}`:a===1?s?t("v4_plan_row_ordered_one","1 room \xB7 Top to bottom, as listed"):t("v4_plan_row_rotation_one","1 room \xB7 Longest-waiting rooms first"):s?t("v4_plan_row_ordered","{count} rooms \xB7 Top to bottom, as listed",{count:C(n,a)}):t("v4_plan_row_rotation","{count} rooms \xB7 Longest-waiting rooms first",{count:C(n,a)})},Lt=(t,n,e)=>{if(!e.enabled)return null;let a=e.nextRunPreview?.blocker;if(a&&a!=="plan_disabled")return{blocked:t("v4_plan_row_blocked","Needs attention before it can run")};let s=re(t,n,e.nextRunPreview?.rooms??[]);return s.length?{due:s}:null};var Ne=1,ze=2,ye=100,Le=(t,n,e,a=Ne)=>{if(n)return e;let s=t.trim();if(s==="")return null;let o=Number(s);return Number.isFinite(o)?Math.min(ye,Math.max(a,Math.round(o))):e},Dt=(t,n,e=Ne)=>t===null||t+n<e?n>0?e:null:Math.min(ye,t+n),De=I` .ms-stepper{--ms-local:var(--ms-surface-card);display:inline-grid;flex:none;grid-template-columns:var(--ms-control) minmax(3rem,4.5rem) var(--ms-control);gap:var(--ms-space-1);align-items:center;border:1px solid var(--ms-line-strong);border-radius:var(--ms-radius-sm);background:var(--ms-local)}.ms-stepper--readonly{grid-template-columns:minmax(3rem,4.5rem)}.ms-stepper .ms-btn{border-radius:calc(var(--ms-radius-sm) - 1px)}.ms-stepper input{inline-size:100%;min-inline-size:0;min-block-size:var(--ms-control);margin:0;padding:0;border:0;border-radius:var(--ms-radius-xs);color:var(--ms-text);background:transparent;font:inherit;font-size:var(--ms-t-md);font-weight:var(--ms-w-medium);font-variant-numeric:tabular-nums;text-align:center;appearance:textfield;-moz-appearance:textfield}.ms-stepper input::-webkit-inner-spin-button,.ms-stepper input::-webkit-outer-spin-button{margin:0;appearance:none;-webkit-appearance:none}.ms-stepper input::placeholder{color:var(--ms-text-quiet);font-weight:var(--ms-w-medium);opacity:1}.ms-stepper input:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px}.ms-stepper input[readonly]{color:var(--ms-text-quiet)}@media (forced-colors:active){.ms-stepper{border:1px solid CanvasText}}`,Wt=t=>{let{id:n,t:e,value:a}=t,s=t.heldBy!==null,o=t.minimum??Ne,r=i`<input
id=${n}
type="number"
inputmode="numeric"
min=${o}
max=${ye}
step="1"
placeholder=${e("v4_cadence_off","Off")}
aria-labelledby=${t.labelId}
aria-describedby=${t.describedBy??l}
aria-disabled=${s&&!t.readonly?"true":l}
?readonly=${t.readonly||s}
.value=${a===null?"":String(a)}
@change=${c=>{let m=c.currentTarget,p=t.readonly||s?a:Le(m.value,m.validity.badInput,a,o);m.value=p===null?"":String(p),p!==a&&t.commit(p)}}
>`;if(t.readonly)return i`<span class="ms-stepper ms-stepper--readonly">${r}</span>`;let d=c=>{let p=(c<0?a===null:a===ye)?c<0?e("v4_cadence_stepper_off_reason","This schedule is already off."):e("v4_cadence_stepper_max_reason","Every 100 cleans is the longest schedule."):null,u=`${n}-${c<0?"min":"max"}`,v=c<0?e("v4_stepper_decrease","Decrease {label}",{label:t.label}):e("v4_stepper_increase","Increase {label}",{label:t.label});return i`<button
class="ms-btn ms-btn--icon"
type="button"
aria-label=${v}
aria-controls=${n}
aria-disabled=${p||s?"true":l}
aria-describedby=${[p?u:null,t.heldBy].filter(Boolean).join(" ")||l}
title=${p??l}
@click=${()=>{!p&&!s&&t.commit(Dt(a,c,o))}}
>${y(c<0?Ee:Y)}${p?i`<span class="sr-only" id=${u}>${p}</span>`:l}</button>`};return i`<span class="ms-stepper">${d(-1)}${r}${d(1)}</span>`};var ee=["vacuum","mop","vacuum_and_mop"],U=["quick","standard","heavy_duty"],te=(t,n)=>n==="vacuum"?t("vacuum","Vacuum"):n==="mop"?t("mop","Mop"):t("vacuum_and_mop","Vacuum + mop"),G=(t,n)=>n==="quick"?t("quick","Quick"):n==="standard"?t("standard","Optimal"):t("heavy_duty","Heavy duty"),qt=t=>t("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."),Ot=(t,n)=>{if(n.includes("coverage_requires_vacuum"))return qt(t);if(n.includes("identity_changed")||n.includes("room_not_on_current_map"))return t("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(n.includes("shared_schedule_unavailable"))return t("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(n.includes("mop_progress_unverified")||n.includes("coverage_progress_unverified")){let e=[];return n.includes("mop_progress_unverified")&&e.push(t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),n.includes("coverage_progress_unverified")&&e.push(t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),e.join(" ")}return n.includes("invalid_cadence_policy")?t("v4_cadence_policy_invalid","The room schedule needs review before it can be applied."):null},ha={scope:"shared",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1},we=t=>!!(t&&(t.mopEveryN!==null||t.coverageEveryN!==null)),va={quick:(t,n,e)=>n===null?t("v4_cadence_coverage_quick_off","Quick vacuum"):e?t("v4_cadence_coverage_quick_one","Quick vacuum every clean"):t("v4_cadence_coverage_quick","Quick vacuum every {count} cleans",{count:n}),standard:(t,n,e)=>n===null?t("v4_cadence_coverage_optimal_off","Optimal vacuum"):e?t("v4_cadence_coverage_optimal_one","Optimal vacuum every clean"):t("v4_cadence_coverage_optimal","Optimal vacuum every {count} cleans",{count:n}),heavy_duty:(t,n,e)=>n===null?t("v4_cadence_coverage_heavy_off","Heavy duty vacuum"):e?t("v4_cadence_coverage_heavy_one","Heavy duty vacuum every clean"):t("v4_cadence_coverage_heavy","Heavy duty vacuum every {count} cleans",{count:n})},ga={quick:(t,n)=>n?t("v4_cadence_next_mop_quick","Mop and quick vacuum on the next clean"):t("v4_cadence_next_quick","Quick vacuum on the next clean"),standard:(t,n)=>n?t("v4_cadence_next_mop_optimal","Mop and optimal vacuum on the next clean"):t("v4_cadence_next_optimal","Optimal vacuum on the next clean"),heavy_duty:(t,n)=>n?t("v4_cadence_next_mop_heavy","Mop and heavy duty vacuum on the next clean"):t("v4_cadence_next_heavy","Heavy duty vacuum on the next clean")},_a=(t,n,e)=>e===null?t("v4_cadence_mop_off","Occasional mopping"):e===1?t("v4_cadence_mop_interval_one","Mop every clean"):t("v4_cadence_mop_interval","Mop every {count} cleans",{count:C(n,e)}),ba=(t,n,e,a)=>va[e](t,a===null?null:C(n,a),a===1),fa=["identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy"],ke=({room:t,saved:n,catalogRoom:e})=>{let a=t.cadence??ha,s=e?.sharedCadence,o=s===void 0&&(e?.sharedCadenceReasons?.length??0)>0,r=s!==void 0||o,d=n?.cadence?.scope==="shared",c=s!==void 0&&!d&&t.cadence?.scope==="shared";return{policy:a,shared:s,sharedExists:r,participating:d,joinPending:c,progress:c?e?.sharedCadenceProgress:t.cadenceProgress,reasons:c?e?.sharedCadenceReasons??[]:t.cadenceReasons??[],savedPolicy:n?.cadence,savedProgress:n?.cadenceProgress,sharedFits:!s||(s.mopEveryN===null||t.cleaningMode==="vacuum")&&(s.coverageEveryN===null||t.cleaningMode!=="mop"),sharedBroken:o}},J={mop:{every:"mopEveryN",flag:"doMopNext",next:"nextMopIn",count:"mopProgress"},coverage:{every:"coverageEveryN",flag:"doCoverageNext",next:"nextCoverageIn",count:"coverageProgress"}},Vt=(t,n)=>!!(t.joinPending?t.shared:t.savedPolicy)?.[J[n].flag],Ye=t=>!t.joinPending&&t.savedPolicy!==void 0&&t.savedPolicy.scope!==t.policy.scope,Bt=(t,n)=>{let{every:e,flag:a,next:s,count:o}=J[n],r=t.policy[e];if(!t.progress||r===null)return null;if(!(!t.joinPending&&(Ye(t)||r!==(t.savedPolicy?.[e]??null)||t.policy[a]!==Vt(t,n))))return t.progress[s];let c=Ye(t)?0:t.progress[o];return t.policy[a]||c>=r-1?1:r-c},ya=(t,n)=>{let e=J[n].every,a=t.savedPolicy?.[e]??null;return!t.joinPending&&a!==null&&t.policy[e]!==null&&t.policy[e]!==a},He=(t,n)=>{let e=t.policy[J[n].every];return e!==null&&e>1&&(Vt(t,n)||Bt(t,n)!==1)},jt=({room:t},n)=>({mop:!n.reasons.includes("mop_progress_unverified")&&t.cleaningMode!=="vacuum"&&n.policy.mopEveryN===null,coverage:!n.reasons.includes("coverage_progress_unverified")&&t.cleaningMode==="mop"}),Ht=(t,n,e,a)=>{let s=e.policy[J[a].every],o=Bt(e,a);return s===null?t("v4_cadence_status_off","Not scheduled"):s===1?t("v4_cadence_status_every","Due every clean"):e.policy[J[a].flag]||o===1?t("v4_cadence_status_next","Due next clean"):ya(e,a)?t("v4_cadence_status_edited","Keeps the progress so far"):Ye(e)||o===null?null:t("v4_cadence_status_in","Due in {count} cleans",{count:C(n,o)})},$a=(t,n,e)=>{let{policy:a,participating:s}=n,o=we(a);if(n.joinPending)return t("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");if(s&&a.scope==="plan")return t("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule.");if(!s&&a.scope==="shared"&&o)return t("v4_cadence_new_shared_effect","Starts counting from zero, across plans that use these settings.");let r=["mop","coverage"].some(d=>a[J[d].every]!==null&&(n.savedProgress?.[J[d].count]??0)>0);return a.scope==="plan"&&o&&!we(n.savedPolicy)&&!r?t("v4_cadence_new_private_effect","Starts counting completed cleans in this plan only, from zero."):n.savedPolicy&&(a.mopEveryN!==n.savedPolicy.mopEveryN||a.coverageEveryN!==n.savedPolicy.coverageEveryN)?t("v4_cadence_existing_effect","Changing how often keeps your progress. Turning this off pauses counting."):s?t("v4_cadence_shared_edit_effect","Changes apply to every plan using {room}'s smart cleaning settings.",{room:e}):null},wa=(t,n,e)=>{let a=ke(e),{policy:s,reasons:o}=a,{room:r,saved:d,name:c}=e,m=s.coverageEveryN!==null,p=(m?null:e.offLevel)??s.periodicCoverageSetting??"heavy_duty",u=P=>o.includes(P),v=u("mop_progress_unverified"),{mop:b,coverage:g}=jt(e,a),f=u("coverage_progress_unverified"),_=!f&&r.cleaningMode==="mop"&&m,h=ft(o.filter(P=>fa.includes(P)),c),k=s.doMopNext||s.doCoverageNext,w=k?s.doMopNext:He(a,"mop"),L=k?s.doCoverageNext:He(a,"coverage"),N=(P,Q,S)=>d!==void 0&&((P??0)>0||!!Q||!!d.cadenceReasons?.includes(S));return{policy:s,level:p,mop:{every:s.mopEveryN,label:_a(t,n,s.mopEveryN),status:Ht(t,n,a,"mop"),reason:v?t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):b?t("v4_cadence_mop_requires_vacuum","This mode already mops every clean. Choose Vacuum above for occasional mopping."):null,blocked:b,unverified:v},coverage:{every:s.coverageEveryN,label:ba(t,n,p,s.coverageEveryN),status:Ht(t,n,a,"coverage"),reason:f?t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):_?qt(t):g?t("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming."):null,blocked:g,unverified:f},legacyCoverage:_,roomReason:h?t(h.reasonKey,h.reason,h.reasonPlaceholders):null,sharedHint:a.shared!==void 0&&a.sharedFits&&!a.participating&&s.scope==="shared"&&!we(s),joinPending:a.joinPending,participating:a.participating,next:w||L?{label:L?ga[p](t,w):t("v4_cadence_next_mop","Mop on the next clean"),on:k,mop:w,coverage:L,blocked:w&&b?"mop":L&&g?"coverage":null}:null,explanation:$a(t,a,c),scope:!we(s)&&a.shared?.mopEveryN===1&&!a.joinPending&&!a.participating?"plan":s.scope,resettable:{mop:N(d?.cadenceProgress?.mopProgress,d?.cadence?.doMopNext,"mop_progress_unverified"),coverage:N(d?.cadenceProgress?.coverageProgress,d?.cadence?.doCoverageNext,"coverage_progress_unverified")},sharedReason:Je(a)?a.sharedBroken?t("v4_cadence_shared_broken_reason","Can't count across all plans until you fix this room's shared schedule in a plan that uses it."):t("v4_cadence_shared_mode_reason","Can't count across all plans until this room's cleaning mode works with its shared schedule."):null}},Ft=t=>t.shared&&t.sharedFits&&!t.participating?{...t.shared,scope:"shared"}:null,Je=t=>t.sharedExists&&(!t.sharedFits||t.sharedBroken)&&!t.participating,Ze=(t,n,e)=>{let a=ke(t),{policy:s}=a;if(a.joinPending)return null;if(n==="mop"&&e!==null&&(e=Le(String(e),!1,s.mopEveryN,ze)),e!==null&&!we(s)&&s.scope==="shared"){if(a.shared?.mopEveryN===1)return Ze({...t,room:{...t.room,cadence:{...s,scope:"plan"}}},n,e);let r=Ft(a);if(r)return r;if(Je(a))return Ze({...t,room:{...t.room,cadence:{...s,scope:"plan"}}},n,e)}let o=e!==null&&e>1;return n==="mop"?{...s,mopEveryN:e,doMopNext:o&&s.doMopNext}:e===null?{...s,coverageEveryN:null,doCoverageNext:!1}:s.coverageEveryN===null?{...s,coverageEveryN:e,periodicCoverageSetting:t.offLevel??s.periodicCoverageSetting??"heavy_duty"}:{...s,coverageEveryN:e,doCoverageNext:o&&s.doCoverageNext}},ka=(t,n)=>{let e=ke(t);return e.joinPending||e.policy.coverageEveryN===null?null:{...e.policy,periodicCoverageSetting:n}},xa=(t,n)=>{let e=ke(t);if(e.joinPending)return null;let a=He(e,"mop"),s=He(e,"coverage");if(!a&&!s&&!e.policy.doMopNext&&!e.policy.doCoverageNext)return null;let o=jt(t,e);return n&&(a&&o.mop||s&&o.coverage)?null:n?{...e.policy,doMopNext:a,doCoverageNext:s}:{...e.policy,doMopNext:!1,doCoverageNext:!1}},Sa=(t,n)=>{let e=ke(t);return n==="shared"&&Je(e)?null:(n==="shared"?Ft(e):null)??{...e.policy,scope:n}},Ra=t=>({...t,scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1}),Ca=(t,n)=>n.planDraft.dirty?t("v4_reason_reset_unsaved","Can't reset until you save or cancel your changes."):n.command!=="idle"||n.managedLock||n.activity!=="idle"&&n.activity!=="docked"||n.dataMode!=="live"?t("v4_reason_reset_busy","Can't reset until the robot is idle and the map is live."):null,Ea=(t,n,e,a)=>{let s=t.resources.plans.value,o=t.planDraft.id;return{room:n,saved:o?s?.plans.find(r=>r.id===o)?.rooms.find(r=>r.roomId===n.roomId):void 0,catalogRoom:s?.rooms.find(r=>r.roomId===n.roomId),name:e,offLevel:a}},$e="\0",We=(t,n)=>{let[e,...a]=t.split($e);return a.length?i`${e}<bdi>${n}</bdi>${a.join(n)}`:t},Kt=(t,n,e,a)=>{let{t:s,state:o,held:r}=t,d=o.planDraft,c=Ea(o,n,a,t.offLevel),m=wa(s,o.locale,{...c,name:$e}),p=($,x,E="small")=>E==="p"?i`<p class="sched-status sched-reason" id=${$??l}>${y(M)}<span>${x}</span></p>`:i`<small class="sched-status sched-reason" id=${$??l}>${y(M)}<span>${x}</span></small>`,{policy:u,next:v}=m,b=/^[0-9a-f]{64}$/u.test(c.catalogRoom?.sharedDeleteToken??"")?c.catalogRoom?.sharedDeleteToken??null:null,g=!!(b&&d.id&&d.rooms.some($=>$.roomId===n.roomId)),f=$=>{if(!$||r)return;let x=d.rooms.map((E,R)=>R===e?{...E,cadence:$}:E);t.intent({type:"patch-plan-draft",patch:{rooms:x}})},_={disabled:r?"true":l,described:r??l},h=(...$)=>$.filter(Boolean).join(" ")||null,k=($,x)=>x.reason?p($,x.reason):x.status?i`<small class="sched-status" id=${$}>${x.status}</small>`:l,w=Ca(s,o),L=w?o.planDraft.dirty?s("v4_reason_delete_schedule_unsaved","Save or cancel your changes before deleting this schedule."):s("v4_reason_delete_schedule_busy","Wait until the robot is idle and the map is live before deleting this schedule."):null,N=!!(r||w),P=($,x,E,R=null)=>i`<button
class=${x}
type="button"
role=${R??l}
tabindex=${R?"-1":l}
aria-label=${$==="mop"?s("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:a}):s("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:a})}
aria-disabled=${N?"true":l}
aria-describedby=${r??(w?E:null)??l}
@click=${()=>{N||!d.id||(t.menu.close(!1),t.intent({type:"request-room-cadence-reset",planId:d.id,roomId:n.roomId,mode:$}))}}
>${$==="mop"?s("v4_reset_mop_cadence_button","Reset mopping"):s("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`,Q=s("v4_room_more_named","More for {room}",{room:a}),{menu:S}=t,ie=d.id&&(m.resettable.mop||m.resettable.coverage||g)?i`<div class="room-more" @keydown=${S.keydown} @focusout=${S.focusout}>
<button
class="ms-btn ms-btn--icon"
type="button"
aria-label=${Q}
title=${Q}
aria-haspopup="menu"
aria-expanded=${String(S.open)}
data-dialog-launcher=${g?"confirmDeleteSchedule":l}
aria-disabled=${_.disabled}
aria-describedby=${_.described}
@click=${()=>{r||S.toggle()}}
>${y(Ce)}</button>
${S.open&&!r?i`<div class="menu ms-surface ms-surface--overlay" @mousedown=${$=>$.preventDefault()}>
<div role="menu" aria-label=${Q}>
${m.resettable.mop?P("mop","ms-row ms-row--menu","reset-reason","menuitem"):l}
${m.resettable.coverage?P("coverage","ms-row ms-row--menu","reset-reason","menuitem"):l}
${g?i`
${m.resettable.mop||m.resettable.coverage?i`<div class="room-more-divider" role="separator"></div>`:l}
<button
class="ms-row ms-row--menu ms-row--danger"
type="button"
role="menuitem"
tabindex="-1"
aria-disabled=${N?"true":l}
aria-describedby=${r??(L?"delete-schedule-reason":null)??l}
@click=${()=>{N||!d.id||!b||(t.menu.close(!1),t.intent({type:"request-schedule-delete",planId:d.id,roomId:n.roomId,expectedToken:b}))}}
>${s("v4_delete_shared_schedule","Delete shared schedule")}</button>
`:l}
</div>
${w?i`<div class="reason">${p("reset-reason",w,"p")}</div>`:l}
${g&&L?i`<div class="reason">${p("delete-schedule-reason",L,"p")}</div>`:l}
</div>`:l}
</div>`:l,ve=($,x,E)=>{let R=`sched-${$}`,ge=x.reason||x.status?`${R}-status`:null;return i`<div class="sched-row">
<label class="sched-label" id=${`${R}-label`} for=${R}>${x.label}</label>
<div class="sched-controls">
${E}
${Wt({id:R,labelId:`${R}-label`,label:x.label,value:x.every,minimum:$==="mop"?ze:1,describedBy:h(ge,u.mopEveryN===1&&$==="mop"?"sched-mop-guide":null,r),heldBy:r??(x.blocked?ge:null),readonly:m.joinPending,t:s,commit:Se=>f(Ze(c,$,Se))})}
</div>
${k(`${R}-status`,x)}
${$==="mop"?i`<small class="sched-status" id="sched-mop-guide">${u.mopEveryN===1?s("v4_cadence_mop_legacy_hint","This saved setting mops every clean. Choose 2 or more for occasional mopping, or turn it off and select Vacuum + mop above."):s("v4_cadence_mop_smart_hint","Every 2 cleans or more. For mopping on every clean, turn this off and choose Vacuum + mop above.")}</small>`:l}
${x.unverified&&d.id?i`${P($,"ms-btn ms-btn--secondary",`${R}-reset-reason`)}
${w?p(`${R}-reset-reason`,w,"p"):l}`:l}
</div>`},Fe=r??(m.coverage.blocked?"sched-coverage-status":null),da=m.joinPending?l:i`<select
class="ms-select sched-level"
aria-label=${s("v4_cadence_level_named","Vacuum level for {room}",{room:a})}
aria-disabled=${Fe?"true":l}
aria-describedby=${Fe??l}
.value=${m.level}
@change=${$=>{let x=$.currentTarget;if(Fe){x.value=m.level;return}let E=x.value,R=ka(c,E);t.setOffLevel(R?null:E),R&&f(R)}}
>${U.map($=>i`<option value=${$} ?selected=${$===m.level}>${G(s,$)}</option>`)}</select>`;return i`<section class="schedule" role="group" aria-label=${s("v4_room_cadence_named","Smart cleaning for {room}",{room:a})}>
<div class="schedule-head"><h3>${s("v4_room_schedule","Smart cleaning")}</h3>${ie}</div>
<p class="schedule-note">${s("v4_cadence_smart_intro","Add mopping or vary vacuum coverage automatically, based on completed cleans.")}</p>
${m.roomReason?p(null,We(m.roomReason,a),"p"):l}
${m.sharedHint?i`<p class="schedule-note">${We(c.catalogRoom?.sharedCadence?.mopEveryN===1?s("v4_cadence_shared_every_clean_hint","{room}'s shared setting mops every clean. New smart cleaning stays in this plan; use Advanced to join the existing setting.",{room:$e}):s("v4_cadence_shared_available","{room} has a shared schedule, and turning on a row uses it.",{room:$e}),a)}</p>`:l}
${ve("mop",m.mop,l)}
${ve("coverage",m.coverage,da)}
${m.legacyCoverage?i`<button
type="button"
class="ms-btn ms-btn--secondary sched-off"
aria-label=${s("v4_cadence_turn_off_named","Turn off the vacuum rotation in {room}",{room:a})}
aria-disabled=${_.disabled}
aria-describedby=${_.described}
@click=${()=>f(Ra(u))}
>${s("v4_cadence_clear_room_coverage","Turn off")}</button>`:l}
${v?i`<div class="switch-row">
<span class="switch-copy">
<span id="sched-next-label">${v.label}</span>
<small id="sched-next-hint">${s("v4_cadence_next_hint","Do it once on the next clean, then resume the usual pattern.")}</small>
</span>
<button
class="ms-switch"
type="button"
role="switch"
aria-checked=${String(v.on)}
aria-labelledby="sched-next-label"
aria-describedby=${h("sched-next-hint",r??(m.joinPending?"sched-join":v.blocked?`sched-${v.blocked}-status`:null))??l}
aria-disabled=${r||m.joinPending||v.blocked?"true":l}
@click=${()=>{v.blocked||f(xa(c,!v.on))}}
></button>
</div>`:l}
${m.joinPending?i`<p class="schedule-note" id="sched-join">${We(s("v4_cadence_join_pending",`Uses {room}'s shared schedule; change it after you save, or choose "In this plan only" under Advanced.`,{room:$e}),a)}</p>`:l}
${m.explanation?i`<p class="schedule-note">${We(m.explanation,a)}</p>`:l}
<details class="advanced">
<summary>${s("v4_advanced","Advanced")}${y(B)}</summary>
<fieldset class="scope">
<legend>${s("v4_cadence_scope","Count completed cleans")}</legend>
${[["shared",s("v4_cadence_shared","Across all plans (recommended)")],["plan",s("v4_cadence_this_plan","In this plan only")]].map(([$,x])=>{let E=r??($==="shared"&&m.sharedReason?"sched-scope-reason":null);return i`<label class="scope-row"><input
type="radio"
name="sched-scope"
value=${$}
.checked=${m.scope===$}
aria-disabled=${E?"true":l}
aria-describedby=${E??l}
@change=${R=>{let ge=E?null:Sa(c,$);ge?f(ge):R.currentTarget.closest("fieldset")?.querySelectorAll("input").forEach(Se=>{Se.checked=Se.value===m.scope})}}
><span>${x}</span></label>`})}
${m.sharedReason?p("sched-scope-reason",m.sharedReason,"p"):l}
</fieldset>
<p class="schedule-note">${s("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
</details>
</section>`},T=(t,n)=>n.cleaningMode==="mop"?t("v4_room_setting_mop","Mop"):n.cleaningMode==="vacuum"?n.coverageSetting==="quick"?t("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):t("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):n.coverageSetting==="quick"?t("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):t("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),Ta={mop:(t,n)=>t("v4_room_schedules_mop","Mop every {mop} cleans",{mop:n}),mop_one:t=>t("v4_room_schedules_mop_one","Mop every clean"),quick:(t,n,e)=>t("v4_room_schedules_quick","Quick vacuum every {cov} cleans",{cov:e}),quick_one:t=>t("v4_room_schedules_quick_one","Quick vacuum every clean"),optimal:(t,n,e)=>t("v4_room_schedules_optimal","Optimal vacuum every {cov} cleans",{cov:e}),optimal_one:t=>t("v4_room_schedules_optimal_one","Optimal vacuum every clean"),heavy:(t,n,e)=>t("v4_room_schedules_heavy","Heavy duty vacuum every {cov} cleans",{cov:e}),heavy_one:t=>t("v4_room_schedules_heavy_one","Heavy duty vacuum every clean"),mop_quick:(t,n,e)=>t("v4_room_schedules_mop_quick","Mop every {mop} cleans \xB7 Quick vacuum every {cov} cleans",{mop:n,cov:e}),mop_quick_one_mop:(t,n,e)=>t("v4_room_schedules_mop_quick_one_mop","Mop every clean \xB7 Quick vacuum every {cov} cleans",{cov:e}),mop_quick_one_cov:(t,n)=>t("v4_room_schedules_mop_quick_one_cov","Mop every {mop} cleans \xB7 Quick vacuum every clean",{mop:n}),mop_quick_one_both:t=>t("v4_room_schedules_mop_quick_one_both","Mop every clean \xB7 Quick vacuum every clean"),mop_optimal:(t,n,e)=>t("v4_room_schedules_mop_optimal","Mop every {mop} cleans \xB7 Optimal vacuum every {cov} cleans",{mop:n,cov:e}),mop_optimal_one_mop:(t,n,e)=>t("v4_room_schedules_mop_optimal_one_mop","Mop every clean \xB7 Optimal vacuum every {cov} cleans",{cov:e}),mop_optimal_one_cov:(t,n)=>t("v4_room_schedules_mop_optimal_one_cov","Mop every {mop} cleans \xB7 Optimal vacuum every clean",{mop:n}),mop_optimal_one_both:t=>t("v4_room_schedules_mop_optimal_one_both","Mop every clean \xB7 Optimal vacuum every clean"),mop_heavy:(t,n,e)=>t("v4_room_schedules_mop_heavy","Mop every {mop} cleans \xB7 Heavy duty vacuum every {cov} cleans",{mop:n,cov:e}),mop_heavy_one_mop:(t,n,e)=>t("v4_room_schedules_mop_heavy_one_mop","Mop every clean \xB7 Heavy duty vacuum every {cov} cleans",{cov:e}),mop_heavy_one_cov:(t,n)=>t("v4_room_schedules_mop_heavy_one_cov","Mop every {mop} cleans \xB7 Heavy duty vacuum every clean",{mop:n}),mop_heavy_one_both:t=>t("v4_room_schedules_mop_heavy_one_both","Mop every clean \xB7 Heavy duty vacuum every clean")},Ut=(t,n,e)=>{let a=e?.mopEveryN??null,s=e?.coverageEveryN??null;if(a===null&&s===null)return null;let o=e?.periodicCoverageSetting,r=o==="quick"?"quick":o==="heavy_duty"?"heavy":"optimal",d=a===null?`${r}${s===1?"_one":""}`:s===null?`mop${a===1?"_one":""}`:`mop_${r}${a===1&&s===1?"_one_both":a===1?"_one_mop":s===1?"_one_cov":""}`,c=Ta[d];return c?c(t,a===null?"":C(n,a),s===null?"":C(n,s)):null};var ae=class{constructor(n,e,a){this.host=n;this.root=e;this.launcher=a;this.open=!1;this.#a=!1;this.keydown=n=>{if(!this.open)return;if(n.key==="Escape"){n.preventDefault(),this.close(!0);return}let e=[...this.host.renderRoot.querySelectorAll(`${this.root} [role^=menuitem]`)],a=e.indexOf(n.composedPath()[0]),s=n.key==="ArrowDown"?a+1:n.key==="ArrowUp"?a-1:n.key==="Home"?0:n.key==="End"?e.length-1:null;s===null||a<0||!e.length||(n.preventDefault(),e[(s+e.length)%e.length]?.focus())};this.focusout=n=>{let e=n.relatedTarget;e&&!n.currentTarget.contains(e)&&this.#s(!1)};this.#t=n=>{let e=this.host.renderRoot.querySelector(this.root);this.open&&e&&!n.composedPath().includes(e)&&this.#s(!1)};n.addController(this)}hostConnected(){window.addEventListener("pointerdown",this.#t,!0)}hostDisconnected(){window.removeEventListener("pointerdown",this.#t,!0)}hostUpdated(){this.#a&&(this.#a=!1,this.host.renderRoot.querySelector(`${this.root} [role^=menuitem]`)?.focus())}#a;#s(n){n!==this.open&&(this.open=n,this.#a=n,this.host.requestUpdate())}toggle(){this.#s(!this.open)}close(n){this.#s(!1),n&&this.host.renderRoot.querySelector(`${this.root} ${this.launcher}`)?.focus()}#t};var et=class extends W{constructor(){super(...arguments);this.state=D();this.#t=new ae(this,".more","> button")}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[H,q,V,I` :host{display:contents}.more{position:relative;margin-inline-start:auto}.more>.ms-btn{transition:none}.reason{flex-basis:100%;margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);text-align:end}.menu{position:absolute;z-index:18;inset-block-start:calc(100% + var(--ms-space-1));inset-inline-end:0;display:grid;min-inline-size:14rem;padding:var(--ms-space-1)}.menu .ms-row{justify-content:flex-start;inline-size:100%}.menu .reason{padding:var(--ms-space-1) var(--ms-space-3);text-align:start}`]}#a(e,a,s){return A(this.localize,e,a,s)}#s(e,a=this){a.dispatchEvent(new CustomEvent(j,{detail:e,bubbles:!0,composed:!0}))}#t;willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this.#t.open=!1)}#e(){let{command:e,pendingAction:a,planDraft:s}=this.state;return a==="save-plan"?this.#a("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):s.dirty?this.#a("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes."):e==="pending"?this.#a("v4_reason_robot_operation_waiting","Waiting for the robot to finish what it's doing."):null}#o(e){if(this.#e())return;let a=e.currentTarget.closest(".more")?.querySelector("button");this.#t.close(!1),this.#s({type:"open-dialog",dialog:"confirmDeletePlan"},a??this)}render(){let{planView:e,planDraft:a,pendingAction:s}=this.state;if(e==="run"){let r=s==="save-plan"?this.#a("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):s==="run-plan"?this.#a("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return i`
<button
class="ms-btn ms-btn--secondary"
type="button"
aria-label=${this.#a("v4_edit_plan_named","Edit {plan}",{plan:a.name})}
aria-disabled=${r?"true":l}
aria-describedby=${r?"edit-reason":l}
@click=${()=>{r||this.#s({type:"set-plan-view",view:"edit"})}}
>${this.#a("v4_edit","Edit")}</button>
${r?i`<p class="reason" id="edit-reason">${r}</p>`:l}
`}if(!le(this.state,"confirmDeletePlan"))return l;let o=this.#e();return i`
<div class="more" @keydown=${this.#t.keydown} @focusout=${this.#t.focusout}>
<button
class="ms-btn ms-btn--icon"
type="button"
aria-label=${this.#a("v4_more_actions","More actions")}
aria-haspopup="menu"
aria-expanded=${String(this.#t.open)}
data-dialog-launcher="confirmDeletePlan"
@click=${()=>this.#t.toggle()}
>${y(Ce)}</button>
${this.#t.open?i`
<div class="menu ms-surface ms-surface--overlay" @mousedown=${r=>r.preventDefault()}>
<div role="menu" aria-label=${this.#a("v4_more_actions","More actions")}><button
class="ms-row ms-row--menu"
type="button"
role="menuitem"
tabindex="-1"
aria-disabled=${o?"true":l}
aria-describedby=${o?"delete-reason":l}
@click=${this.#o}
>${this.#a("plan_delete","Delete")}</button></div>
${o?i`<p class="reason" id="delete-reason">${o}</p>`:l}
</div>
`:l}
</div>
`}};customElements.get(be)||customElements.define(be,et);var Ma=(t,n,e)=>i`${t.planView==="run"?i`<bdi>${n}</bdi>`:n}${t.planDraft.dirty?i` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:l}`,Gt=ce(be),Pa=(t,n,e)=>de`<${Gt}
.state=${t}
.localize=${n}
@matic-workspace-intent=${e}
></${Gt}>`,Qt=(t,n,e,a)=>{let s=a?.room;if(s===void 0)return t(n,e,a);let[o,r]=t(n,e,{...a,room:"\0"}).split("\0");return i`${o}<bdi>${s}</bdi>${r}`},tt=(t,n,e,a)=>{let s=e?n.jump:void 0;return i`${Qt(t,n.reasonKey??"",n.reason??"",n.reasonPlaceholders)}${s?i` <button
class="ms-btn action-jump"
type="button"
@click=${()=>a({type:"set-plan-view",view:"edit",roomId:s.roomId})}
>${Qt(t,s.labelKey,s.label,s.labelPlaceholders)}</button>`:l}`},Ia=(t,n,e,a)=>{let s=t.pendingAction==="save-plan",o=n?.id==="save-plan"?"primary-reason":"cancel-reason";return i`
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
`},Aa=(t,n,e)=>i`
<button
class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
type="button"
data-dialog-launcher="discardDraft"
@click=${a=>e(Xt(t),a.currentTarget)}
>${n("v4_cancel","Cancel")}</button>
`,Xt=t=>t.areaDraft.id!==null?{type:"select-area",areaId:t.areaDraft.id,workflow:"areaReview"}:{type:"open-workflow",workflow:"areas"},Na=(t,n,e)=>{let a=e.querySelector(X)?.shadowRoot;if(t.workflow==="draw"&&n.workflow==="areaReview")return t.areaDraft.id!==null?e.querySelector("[data-redraw]")??a?.querySelector("[data-redraw]"):null;if(n.workflow==="areas"){let r=t.areaDraft.id;return r&&a?.querySelector(`[data-area-row="${CSS.escape(r)}"]`)||a?.querySelector("[data-area-new]")}if(t.workflow==="draw")return null;let s=a?.querySelector(O)?.shadowRoot;if(n.workflow==="plan"&&n.planView==="edit"&&n.expandedRoom)return s?.querySelector(`[data-room-disclosure="${CSS.escape(n.expandedRoom)}"]`);if(n.workflow==="plan"&&t.planView==="edit")return e.querySelector(be)?.shadowRoot?.querySelector("button");let o=t.selection.planId;return n.workflow==="plans"&&o?s?.querySelector(`[data-plan-row="${CSS.escape(o)}"]`):null},za=(t,n,e,a)=>{let s=Na(t,n,e);return a(s)?(s.scrollIntoView({block:"nearest"}),s.focus({preventScroll:!0}),!0):!1};var La=(t,n)=>Ge({...t,workflow:"plan",planView:"run",selection:{...t.selection,planId:n.id},planDraft:Re(n)}),Da=(t,n)=>Ge({...t,...ut(t,n.id),workflow:"areaReview"}),Wa={label:"",kind:"primary",enabled:!1,id:"check-area",reason:"Can't clean this area until you check it.",reasonKey:"v4_reason_check_area"},Yt=(t,n,e,a,s,o,r,d)=>{let{t:c,held:m}=t,p=!m&&o?.id===r&&o.enabled,u=m||p?null:o,[v="",b=""]=a.split("\0");return i`<button
class="ms-row ms-row--card shortcut"
type="button"
data-launcher=${`run:${n.kind}:${n.id}`}
aria-disabled=${p?l:"true"}
aria-describedby=${m?"home-reason":l}
@click=${()=>{p&&t.run(n)}}
>
<span class="ms-row__lead">${y(Et)}</span>
<span class="ms-row__body">
<strong class="card-title"><span class="card-name">${v}<bdi>${e}</bdi>${b}</span>${d}</strong>
${s}
${u?.reason?i`<span class="card-lines"><span class="line" data-tone="warning">${y(M)}${tt(c,u,!1,t.emit)}</span></span>`:l}
</span>
</button>`},Ha=(t,n,e)=>{let{t:a,state:s}=t,o=La(s,e),r=e.enabled?re(a,s.locale,e.nextRunPreview?.rooms??[]):[];return Yt(t,n,e.name,a("v4_run_named_plan","Run {plan}",{plan:"\0"}),i`<small>${Ae(a,s.locale,e)}</small>${r.length?i`<span class="card-lines">${r.map(d=>i`<span class="line">${y(oe)}${d}</span>`)}</span>`:l}`,"label"in o?o:null,"run-plan",e.enabled?l:i`<span class="ms-chip">${a("v4_paused","Paused")}</span>`)},qa=(t,n,e)=>{let{t:a,state:s}=t,o=Da(s,e);return Yt(t,n,e.name,a("v4_clean_named_area","Clean {area}",{area:"\0"}),i`<small>${T(a,e)}</small>`,"label"in o?o.id==="save-area"?Wa:o:null,"run-area",l)},Oa=t=>{let{state:n,t:e}=t,a=n.resources.plans.value?.plans??[],s=n.resources.areas.value?.areas??[],o=n.homePins.pins.flatMap(r=>{if(r.kind==="plan"){let c=a.find(m=>m.id===r.id);return c?[Ha(t,r,c)]:[]}let d=s.find(c=>c.id===r.id);return d?[qa(t,r,d)]:[]});return!o.length&&n.homePins.status!=="error"?l:i`${o}${n.homePins.status==="error"?i`<p class="pins-error">${e("v4_shortcuts_unavailable","Home Assistant couldn't load your home shortcuts.")} <button
class="ms-btn ms-btn--secondary"
type="button"
@click=${()=>t.emit({type:"reload-home-pins"})}
>${e("v4_retry","Try again")}</button></p>`:l}`},qe=(t,n,e,a)=>{let{status:s,pins:o}=n.homePins;if(s==="unavailable")return l;let r=o.some(c=>c.kind===e.kind&&c.id===e.id),d=s==="ready"?null:s==="error"?t("v4_reason_shortcuts_unavailable","Can't change this until you choose Try again on the home screen."):t("v4_reason_shortcuts_loading","Waiting for Home Assistant to load your home shortcuts.");return i`
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
aria-disabled=${d?"true":l}
@click=${()=>{d||a({type:"set-home-pin",pin:e,pinned:!r})}}
></button>
</div>
${d?i`<p class="reason" id="pin-reason">${d}</p>`:l}
`};var Zt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Jt=t=>(...n)=>({_$litDirective$:t,values:n}),Oe=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,e,a){this._$Ct=n,this._$AM=e,this._$Ci=a}_$AS(n,e){return this.update(n,e)}update(n,e){return this.render(...e)}};var{I:Va}=wt,ea=t=>t;var ta=()=>document.createComment(""),me=(t,n,e)=>{let a=t._$AA.parentNode,s=n===void 0?t._$AB:n._$AA;if(e===void 0){let o=a.insertBefore(ta(),s),r=a.insertBefore(ta(),s);e=new Va(o,r,t,t.options)}else{let o=e._$AB.nextSibling,r=e._$AM,d=r!==t;if(d){let c;e._$AQ?.(t),e._$AM=t,e._$AP!==void 0&&(c=t._$AU)!==r._$AU&&e._$AP(c)}if(o!==s||d){let c=e._$AA;for(;c!==o;){let m=ea(c).nextSibling;ea(a).insertBefore(c,s),c=m}}}return e},se=(t,n,e=t)=>(t._$AI(n,e),t),Ba={},aa=(t,n=Ba)=>t._$AH=n,sa=t=>t._$AH,Ve=t=>{t._$AR(),t._$AA.remove()};var na=(t,n,e)=>{let a=new Map;for(let s=n;s<=e;s++)a.set(t[s],s);return a},at=Jt(class extends Oe{constructor(t){if(super(t),t.type!==Zt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,n,e){let a;e===void 0?e=n:n!==void 0&&(a=n);let s=[],o=[],r=0;for(let d of t)s[r]=a?a(d,r):r,o[r]=e(d,r),r++;return{values:o,keys:s}}render(t,n,e){return this.dt(t,n,e).values}update(t,[n,e,a]){let s=sa(t),{values:o,keys:r}=this.dt(n,e,a);if(!Array.isArray(s))return this.ut=r,o;let d=this.ut??=[],c=[],m,p,u=0,v=s.length-1,b=0,g=o.length-1;for(;u<=v&&b<=g;)if(s[u]===null)u++;else if(s[v]===null)v--;else if(d[u]===r[b])c[b]=se(s[u],o[b]),u++,b++;else if(d[v]===r[g])c[g]=se(s[v],o[g]),v--,g--;else if(d[u]===r[g])c[g]=se(s[u],o[g]),me(t,c[g+1],s[u]),u++,g--;else if(d[v]===r[b])c[b]=se(s[v],o[b]),me(t,s[u],s[v]),v--,b++;else if(m===void 0&&(m=na(r,b,g),p=na(d,u,v)),m.has(d[u]))if(m.has(d[v])){let f=p.get(r[b]),_=f!==void 0?s[f]:null;if(_===null){let h=me(t,s[u]);se(h,o[b]),c[b]=h}else c[b]=se(_,o[b]),me(t,s[u],_),s[f]=null;b++}else Ve(s[v]),v--;else Ve(s[u]),u++;for(;b<=g;){let f=me(t,c[g+1]);se(f,o[b]),c[b++]=f}for(;u<=v;){let f=s[u++];f!==null&&Ve(f)}return this.ut=r,aa(t,c),$t}});var st=100,ja=["mop_progress_unverified","coverage_progress_unverified","identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy","coverage_requires_vacuum"],nt=class extends W{constructor(){super(...arguments);this._moved="";this.#a=null;this.#s=new Map;this.#t=new ae(this,".room-more","> button");this.state=D();this.#e=(e,a,s)=>A(this.localize,e,a,s)}static{this.styles=[H,q,V,K,De,I` :host{display:block}.plain{display:grid;gap:var(--ms-space-2);margin:0;padding:0;list-style:none}.plan-row .ms-row__body{display:grid;gap:.125rem}.plan-row .plan-title{display:flex;gap:var(--ms-space-1) var(--ms-space-2);align-items:center;min-inline-size:0}.plan-row .plan-title bdi{overflow:hidden;min-inline-size:0;text-overflow:ellipsis;white-space:nowrap}.plan-row .plan-title .ms-chip{flex:none}.chip-default{border-color:transparent;background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-surface-card))}.chip-attention{border-color:transparent;background:color-mix(in srgb,var(--ms-danger) 12%,var(--ms-surface-card))}.lines{display:grid;gap:.125rem;margin:0;color:var(--ms-text);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.line{display:flex;gap:var(--ms-space-1);align-items:flex-start;margin:0;color:var(--ms-text)}.line .ms-icon{inline-size:1rem;block-size:1rem;color:var(--ms-resolved-indicator,var(--ms-accent))}.line[data-tone="warning"] .ms-icon{color:var(--ms-warning)}.plan-row .ms-row__trail:dir(rtl) .ms-icon{scale:-1 1}.empty-card{display:grid;gap:var(--ms-space-2);padding:var(--ms-space-4);border:1px solid var(--ms-line);border-radius:var(--ms-radius-md)}.empty-card h3{margin:0;font-size:var(--ms-t-md)}.empty-card p{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-md);line-height:var(--ms-lh-normal)}.empty-card .ms-btn{justify-self:start}.quiet{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.heading{margin:var(--ms-space-4) 0 var(--ms-space-2);color:var(--ms-text-quiet);font-size:var(--ms-t-md);font-weight:var(--ms-w-bold);line-height:var(--ms-lh-tight)}.summary{margin:0 0 var(--ms-space-2);color:var(--ms-text-quiet);font-size:var(--ms-t-md);line-height:var(--ms-lh-snug)}.run-list{display:grid;margin:0 0 var(--ms-space-3);padding:0;list-style:none}.run-row{display:flex;gap:var(--ms-space-3);align-items:flex-start;padding-block:var(--ms-space-2);border-block-end:1px solid var(--ms-line)}.run-row:last-child{border-block-end:0}.run-row[data-break]{margin-block-start:var(--ms-space-3);padding-block-start:var(--ms-space-3);border-block-start:2px dashed var(--ms-line-strong)}.row-lines{display:grid;flex:1;gap:.125rem;min-inline-size:0}.row-lines bdi{font-weight:var(--ms-w-bold);overflow-wrap:anywhere}.row-lines small{color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local,var(--ms-surface-card)));font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.row-lines .ms-chip{justify-self:start}.pos-badge{display:grid;flex:none;place-items:center;inline-size:1.5rem;block-size:1.5rem;border-radius:50%;background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-surface-card));font-size:var(--ms-t-xs);font-weight:var(--ms-w-bold);font-variant-numeric:tabular-nums}.problem{margin:0 0 var(--ms-space-2);padding:var(--ms-space-3);border-radius:var(--ms-radius-md);background:color-mix(in srgb,var(--ms-danger) 12%,var(--ms-surface-card));font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug)}.switch-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control)}.pin-setting{margin-block-start:var(--ms-space-3)}.pin-setting:empty{display:none}.switch-copy{display:grid;flex:1;gap:.125rem;min-inline-size:0;font-size:var(--ms-t-md)}.switch-copy small,.reason{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.sr-only{position:absolute;inset-block-start:0;inset-inline-start:0;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;padding:0;border:0;clip-path:inset(50%);white-space:nowrap}.edit{display:grid;gap:var(--ms-space-3)}.order{display:grid;gap:var(--ms-space-1);margin:0;padding:0;border:0;font-size:var(--ms-t-sm)}.order .ms-segment{padding:0}.order .ms-btn{flex:1}.list-header{display:flex;align-items:baseline;justify-content:space-between;gap:var(--ms-space-2)}.list-header .heading{margin:0}.list-header small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs)}.edit-row{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;padding:0}.edit-row:not([data-selected]){--ms-local:var(--ms-surface-card)}.edit-check{display:grid;place-items:center;inline-size:var(--ms-control);block-size:var(--ms-control);cursor:pointer}.edit-check input{inline-size:1.2rem;block-size:1.2rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent));cursor:pointer}.edit-disclosure{display:flex;gap:var(--ms-space-2);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-1);border:0;border-radius:var(--ms-radius-sm);color:inherit;background:transparent;font:inherit;text-align:start;cursor:pointer}.edit-disclosure:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px}.edit-disclosure>.ms-icon{flex:none;transition:rotate 120ms}.edit-disclosure[aria-expanded="true"]>.ms-icon{rotate:90deg}.edit-disclosure:dir(rtl)>.ms-icon{scale:-1 1}.edit-disclosure[aria-expanded="true"]:dir(rtl)>.ms-icon{rotate:-90deg}.edit-name{display:grid;gap:.125rem;min-inline-size:0;padding-inline:var(--ms-space-1)}.edit-name small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.edit-moves{display:flex}.row-expanded{display:grid;grid-column:1 / -1;gap:var(--ms-space-2);padding:var(--ms-space-3);border-block-start:1px solid var(--ms-line)}.run-end{display:grid;gap:var(--ms-space-2)}.run-end>summary{min-block-size:var(--ms-control);align-content:center;font-weight:var(--ms-w-bold);cursor:pointer}.threshold{display:grid;gap:var(--ms-space-1);font-size:var(--ms-t-md)}.threshold input{inline-size:100%;min-block-size:var(--ms-control-sm);accent-color:var(--ms-resolved-indicator,var(--ms-accent))}.subtle{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2)}.schedule{display:grid;gap:var(--ms-space-3);min-inline-size:0;margin-block-start:var(--ms-space-2)}.schedule-head{display:flex;align-items:center;gap:var(--ms-space-2)}.schedule-head h3{flex:1;margin:0;font-size:var(--ms-t-md);font-weight:var(--ms-w-bold)}.sched-row{display:grid;gap:var(--ms-space-1);justify-items:start;min-inline-size:0}.sched-label{font-size:var(--ms-t-md);font-weight:var(--ms-w-medium)}.sched-controls{display:flex;flex-wrap:wrap;gap:var(--ms-space-3);align-items:center}.sched-level{flex:none;inline-size:9rem;block-size:var(--ms-control);font-size:var(--ms-t-md)}.sched-status{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.sched-reason{display:flex;gap:var(--ms-space-1);align-items:flex-start;color:var(--ms-text)}.sched-reason .ms-icon{flex:none;inline-size:1rem;block-size:1rem;color:var(--ms-warning)}.sched-off,.sched-row>.ms-btn{justify-self:start}.room-more{position:relative}.room-more .menu{position:absolute;z-index:18;inset-block-start:calc(100% + var(--ms-space-1));inset-inline-end:0;display:grid;min-inline-size:14rem;padding:var(--ms-space-1)}.room-more .menu .ms-row{justify-content:flex-start;inline-size:100%}.room-more .reason{padding:var(--ms-space-1) var(--ms-space-3)}.ms-row--danger{color:var(--ms-resolved-danger-text,var(--ms-danger))}.room-more-divider{block-size:1px;margin:var(--ms-space-1) var(--ms-space-2);background:var(--ms-line)}.advanced>summary{display:flex;gap:var(--ms-space-2);align-items:center;min-block-size:var(--ms-control);font-weight:var(--ms-w-medium);list-style:none;cursor:pointer}.advanced>summary::-webkit-details-marker{display:none}.advanced>summary .ms-icon{inline-size:1.25rem;block-size:1.25rem}.advanced[open]>summary .ms-icon{rotate:90deg}.advanced>summary:dir(rtl) .ms-icon{scale:-1 1}.advanced[open]>summary:dir(rtl) .ms-icon{rotate:-90deg}.advanced>summary:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:2px;border-radius:var(--ms-radius-xs)}.scope{display:grid;margin:0 0 var(--ms-space-2);padding:0;border:0}.scope legend{padding:0;font-size:var(--ms-t-sm);font-weight:var(--ms-w-bold)}.scope-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control);font-size:var(--ms-t-md);cursor:pointer}.scope-row input{flex:none;inline-size:1.2rem;block-size:1.2rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent))}.schedule-note{margin:0;color:var(--ms-text);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}@media (forced-colors:active){.problem{border:1px solid CanvasText}.row-expanded{forced-color-adjust:auto;color:CanvasText;background:Canvas}.edit-row .row-lines small{color:inherit}}@media (max-width:25rem){.split{grid-template-columns:1fr}}`]}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_moved:{state:!0}}}#a;#s;#t;#e;#o(e){this.dispatchEvent(new CustomEvent(j,{detail:e,bubbles:!0,composed:!0}))}#n(e){return C(this.state.locale,e)}#i(e){return e.length?i`<span class="lines">${e.map(a=>i`<span class="line">${y(oe)}<span>${a}</span></span>`)}</span>`:l}#d(e,a){let s=Ae(this.#e,this.state.locale,e),o=Lt(this.#e,this.state.locale,e),r=o===null?l:"blocked"in o?i`<span class="lines"><span class="line" data-tone="warning">${y(M)}<span>${o.blocked}</span></span></span>`:this.#i(o.due),d=this.#e("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return i`<li>
<button
class="ms-row ms-row--card plan-row"
type="button"
data-plan-row=${e.id}
aria-describedby=${a?"default-hint":l}
@click=${()=>this.#o({type:"select-plan",planId:e.id})}
>
<span class="ms-row__body">
<strong class="plan-title"><bdi>${e.name}</bdi>${a?i`<span class="ms-chip chip-default" title=${d}>${this.#e("v4_plan_default","Default")}</span>`:l}${e.enabled?l:i`<span class="ms-chip">${this.#e("v4_paused","Paused")}</span>`}</strong>
<small>${s}</small>
${r}
</span>
<span class="ms-row__trail">${y(B)}</span>
</button>
${a?i`<span class="sr-only" id="default-hint">${d}</span>`:l}
</li>`}#m(){let e=this.state.resources.plans.value,a=this.#e("v4_create_plan","Create a plan");if(!e?.plans.length)return i`<div class="empty-card">
<h3>${this.#e("v4_no_plans","No plans yet")}</h3>
<p>${this.#e("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
<button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#o({type:"select-plan",planId:null})}>${a}</button>
</div>`;let s=[...e.plans].sort((o,r)=>+(r.id===e.selectedPlan)-+(o.id===e.selectedPlan));return i`<ul class="plain">
${s.map(o=>this.#d(o,o.id===e.selectedPlan))}
<li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#o({type:"select-plan",planId:null})}>
<span class="ms-row__lead">${y(Y)}</span>
<span class="ms-row__body"><strong>${a}</strong></span>
</button></li>
</ul>`}#r(){return this.state.planWriteBlock?this.#e("v4_reason_plan_change_pending","Waiting for Home Assistant to confirm the plan change."):this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}#p(){let e=this.state;return e.pendingAction==="save-plan"||e.planWriteBlock?this.#r():e.pendingAction==="run-plan"?this.#e("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):F(e)?this.#e("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#e("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):vt(e)?null:this.#e("v4_reason_save_plan_map","Waiting for the map to be ready.")}#u(){let e=this.state.planDraft.enabled,a=this.#p();return i`
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
aria-disabled=${a?"true":l}
@click=${()=>{a||this.#o({type:"set-plan-enabled",enabled:!e})}}
></button>
</div>
${a?i`<p class="reason" id="enabled-reason">${a}</p>`:l}
`}#h(e,a,s,o={}){return i`<li class="run-row" ?data-break=${o.part!==void 0}>
${o.part===void 0?l:i`<span class="sr-only">${this.#e("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#n(o.part)})}</span>`}
${s===null?l:i`<span class="pos-badge" aria-hidden="true">${this.#n(s)}</span>`}
<span class="row-lines">
<bdi>${e}</bdi>
<small>${a}</small>
${o.blocked?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
</span>
</li>`}#f(){let e=this.state,a=e.planDraft,s=e.resources.plans.value,o=s?.plans.find(S=>S.id===a.id);if(!s||!o)return l;let r=o.nextRunPreview,d=r?.blocker??null,c=!a.enabled,m=!c&&!!(r&&!d&&/^[0-9a-f]{64}$/u.test(r.previewToken??"")),p=o.runBehavior==="ordered",u=m&&r?r.rooms:[],v=m&&r?r.steps??u:[],b=m?v.length-u.length:Me(o).length,g=!c&&d?yt(e,o)?.jump.roomId??null:null,f=c||m||g||e.pendingAction==="save-plan"?null:d&&bt[d]||_t,_=m?u.length:o.rooms.length,h=m?o.nextRunEstimateSeconds:null,k=h===null?"":this.#n(Math.max(1,Math.round(h/60))),w=_===1?this.#e("v4_plan_summary_rooms_one","1 room"):this.#e("v4_plan_summary_rooms","{count} rooms",{count:this.#n(_)}),L=b?Ie(this.#e,e.locale,_,b):h===null?w:_===1?this.#e("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:k}):this.#e("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#n(_),minutes:k}),N=m&&r?r.missionBoundaries:[],P=m?v.map((S,ie)=>{let ve=N.indexOf(ie);return this.#h(S.name,T(this.#e,S),p?ie+1:null,ve<0?{}:{part:ve+2})}):Nt(o,Re(o).rooms.map(S=>this.#h(s.rooms.find(ie=>ie.roomId===S.roomId)?.name??S.roomId,T(this.#e,S),null,{blocked:S.roomId===g})),S=>this.#h(S.name,T(this.#e,S),null)),Q=a.finishCurrentRoom?this.#e("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#n(a.finishCurrentRoomThreshold)}):a.returnToBase?this.#e("v4_plan_summary_return","Returns to the dock when finished"):null;return i`
<p class="summary">${L}</p>
${this.#i(re(this.#e,e.locale,u))}
<h3 class="heading">${c?this.#e("v4_plan_rooms_heading","In this plan"):e.resources.entry?.activePlan?this.#e("v4_next_run_after_active","After this run"):this.#e("v4_next_run_preview","Next run")}</h3>
${m&&!p?i`<p class="quiet">${this.#e("v4_plan_rotation_settings","Longest-waiting rooms and custom areas first, checked again when you run the plan.")}</p>`:l}
${N.length?i`<p class="quiet">${this.#e("v4_room_parts","The robot cleans in {count} parts and may stop at the dock between parts.",{count:this.#n(N.length+1)})}</p>`:l}
${f?i`<p class="problem">${this.#e(f.reasonKey,f.reason)}</p>
<button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#o({type:"open-workflow",workflow:"plan"})}>${this.#e("v4_retry","Try again")}</button>`:l}
${m&&p?i`<ol class="run-list" role="list">${P}</ol>`:i`<ul class="run-list" role="list">${P}</ul>`}
${this.#u()}
${Q?i`<p class="quiet">${Q}</p>`:l}
<div class="pin-setting">${qe(this.#e,e,{kind:"plan",id:o.id},S=>this.#o(S))}</div>
`}willUpdate(e){e.has("state")&&(this.state.workflow!=="plan"||this.state.planView!=="edit")&&(this._moved="");let a=e.get("state");a&&(a.expandedRoom!==this.state.expandedRoom||this.state.planView!=="edit"||this.state.dialog||this.#c())&&(this.#t.open=!1),a&&(a.planDraft.id!==this.state.planDraft.id||a.workflow!==this.state.workflow||this.state.planView!=="edit")&&this.#s.clear()}updated(e){!this.#a||!e.has("state")||((this.renderRoot.querySelector(this.#a)??this.renderRoot.querySelector(".edit input[type=checkbox]"))?.focus(),this.#a=null)}#c(){return this.state.pendingAction==="save-plan"||this.state.planWriteBlock?"edit-held":null}#l(e){this.#c()||this.#o({type:"patch-plan-draft",patch:e})}#v(e,a){this.#l({rooms:this.state.planDraft.rooms.map((s,o)=>o===e?{...s,...a}:s)})}#g(e,a){this.#l({areas:this.state.planDraft.areas.map(s=>s.areaId===e?{...s,...a}:s)})}#_(e,a){let s=this.state.planDraft,o=s.parkedAreas??[],r=m=>m.filter(p=>p.areaId!==e),d=s.areas.find(m=>m.areaId===e);if(this.#c())return;if(d){this.#a=`[data-area-add="${CSS.escape(e)}"]`,this.#l({areas:r(s.areas),parkedAreas:[...r(o),d]});return}if(!a||s.areas.length>=st)return;let c=o.find(m=>m.areaId===e);this.#a=`[data-area-check="${CSS.escape(e)}"]`,this.#l({areas:[...s.areas,{areaId:e,name:a.name,cleaningMode:c?.cleaningMode??a.cleaningMode,coverageSetting:c?.coverageSetting??a.coverageSetting,slot:s.rooms.length}],parkedAreas:r(o)})}#w(e,a,s,o){let r=this.state.planDraft,d=Xe(r),c=e+a;if(this.#c()||c<0||c>=d.length)return;let[m]=d.splice(e,1);if(!m)return;d.splice(c,0,m),this.#a=`[data-move="${CSS.escape(o)}"]`,this._moved=s(this.#n(c+1));let{rooms:p,areas:u}=zt(d);this.#o({type:"patch-plan-draft",patch:r.areas.length?{rooms:p,areas:u}:{rooms:p}})}#y(e){return{disabled:e?"true":l,described:e??l}}#b(e,a,s,o,r,d,c=!1){let m=`${e}:${o<0?"up":"down"}`,p=c?o<0?this.#e("v4_move_area_up","Move {area} earlier",{area:s}):this.#e("v4_move_area_down","Move {area} later",{area:s}):o<0?this.#e("move_room_up","Move {room} earlier",{room:s}):this.#e("move_room_down","Move {room} later",{room:s}),u=c?o<0?this.#e("v4_area_already_first","{area} is already first",{area:s}):this.#e("v4_area_already_last","{area} is already last",{area:s}):o<0?this.#e("v4_room_already_first","{room} is already first",{room:s}):this.#e("v4_room_already_last","{room} is already last",{room:s}),v=c?g=>this.#e("v4_area_moved","{area} moved to position {position}",{area:s,position:g}):g=>this.#e("v4_room_moved","{room} moved to position {position}",{room:s,position:g}),b=r?`${m}-end`:d;return i`<button
class="ms-btn ms-btn--icon"
type="button"
data-move=${m}
aria-label=${p}
title=${r?u:p}
aria-disabled=${r||d?"true":l}
aria-describedby=${b??l}
@click=${()=>{r||this.#w(a,o,v,m)}}
>${y(o<0?Rt:Ct)}</button>
${r?i`<span class="sr-only" id=${`${m}-end`}>${u}</span>`:l}`}#k(e,a,s,o,r,d,c,m,p){let u=s!==null&&this.state.expandedRoom===e,v=this.#y(p),b=s===null&&m,g=s?Ut(this.#e,this.state.locale,s.cadence):null,f=s?.cadenceReasons?.some(h=>ja.includes(h)),_=!!s?.cadence?.mopEveryN;return i`<li class="ms-row edit-row" data-selected=${s?"true":l}>
<label class="edit-check"><input
type="checkbox"
.checked=${s!==null}
aria-label=${this.#e("v4_room_include_named","Include {room}",{room:a})}
aria-disabled=${p||b?"true":l}
aria-describedby=${p??(b?"room-limit":l)}
@click=${h=>{(p||b)&&h.preventDefault()}}
@change=${()=>this.#o({type:"toggle-room",roomId:e})}
></label>
${s?i`<button
class="edit-disclosure"
type="button"
data-room-disclosure=${e}
aria-expanded=${String(u)}
aria-label=${this.#e("v4_room_settings_named","Settings for {room}",{room:a})}
aria-disabled=${v.disabled}
aria-describedby=${v.described}
@click=${()=>{p||this.#o({type:"set-plan-view",view:"edit",roomId:u?null:e})}}
>
${c?i`<span class="pos-badge" aria-hidden="true">${this.#n(r+1)}</span>`:l}
<span class="row-lines">
<bdi>${a}</bdi>
<small>${T(this.#e,s)}</small>
${g?i`<small>${g}</small>`:l}
${f?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
</span>
${y(B)}
</button>`:i`<span class="edit-name"><bdi>${a}</bdi></span>`}
${s&&c?i`<span class="edit-moves">
${this.#b(e,r,a,-1,r===0,p)}
${this.#b(e,r,a,1,r===d,p)}
</span>`:i`<span></span>`}
${u&&s?i`<div class="row-expanded">
<div class="split">
<label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
<select
aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:a})}
aria-disabled=${v.disabled}
aria-describedby=${[p,_?"mode-reason":null].filter(Boolean).join(" ")||l}
.value=${s.cleaningMode}
@change=${h=>{let k=h.currentTarget;p?k.value=s.cleaningMode:this.#v(o,{cleaningMode:k.value})}}
>${ee.map(h=>i`<option value=${h} ?selected=${h===s.cleaningMode} ?disabled=${_&&h!=="vacuum"}>${te(this.#e,h)}</option>`)}</select>
</label>
${s.cleaningMode==="mop"?l:i`<label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
<select
aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:a})}
aria-disabled=${v.disabled}
aria-describedby=${v.described}
.value=${s.coverageSetting}
@change=${h=>{let k=h.currentTarget;p?k.value=s.coverageSetting:this.#v(o,{coverageSetting:k.value})}}
>${U.map(h=>i`<option value=${h} ?selected=${h===s.coverageSetting}>${G(this.#e,h)}</option>`)}</select>
</label>`}
</div>
${_?i`<p class="schedule-note" id="mode-reason"><span>${this.#e("v4_cadence_clear_mop_to_change_normal","Turn the mopping schedule off to change the cleaning mode.")}</span></p>`:l}
${Z(this.#e,this.state,s.cadence?.mopEveryN?"vacuum_and_mop":s.cleaningMode,`plan-room-${o}`)}
${Kt({t:this.#e,state:this.state,intent:h=>this.#o(h),held:p,offLevel:this.#s.get(e)??null,setOffLevel:h=>{h?this.#s.set(e,h):this.#s.delete(e),this.requestUpdate()},menu:this.#t},s,o,a)}
</div>`:l}
</li>`}#$(e,a,s,o,r,d){let c=[s?`${e}-hint`:"",r??""].filter(Boolean).join(" ");return i`<div class="switch-row">
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
@click=${()=>{r||d(!o)}}
></button>
</div>`}#x(e){let a=this.state.resources.areas.value?.areas,s=a?.find(o=>o.id===e);return!a||s?.status==="current"?null:s?s.canRebind||s.status==="review"?this.#e("v4_area_row_check","Map changed \xB7 Check it before cleaning"):this.#e("v4_area_row_redraw","Redraw it before cleaning"):this.#e("v4_plan_area_missing","Not found \xB7 Remove it from this plan")}#S(e,a,s,o,r){let d=`area:${e.areaId}`,c=this.state.resources.areas.value?.areas.find(g=>g.id===e.areaId)?.name??e.name,m=this.state.expandedRoom===d,p=this.#y(r),u=this.#x(e.areaId),v=`${d}-problem`,b=[r,u?v:null].filter(Boolean).join(" ")||l;return i`<li class="ms-row edit-row" data-selected="true" data-plan-area=${e.areaId}>
<label class="edit-check"><input
type="checkbox"
data-area-check=${e.areaId}
.checked=${!0}
aria-label=${this.#e("v4_area_include_named","Include {area}",{area:c})}
aria-disabled=${p.disabled}
aria-describedby=${p.described}
@click=${g=>{r&&g.preventDefault()}}
@change=${()=>this.#_(e.areaId)}
></label>
<button
class="edit-disclosure"
type="button"
data-room-disclosure=${d}
aria-expanded=${String(m)}
aria-label=${this.#e("v4_area_settings_named","Settings for {area}",{area:c})}
aria-disabled=${p.disabled}
aria-describedby=${b}
@click=${()=>{r||this.#o({type:"set-plan-view",view:"edit",roomId:m?null:d})}}
>
${o?i`<span class="pos-badge" aria-hidden="true">${this.#n(a+1)}</span>`:l}
<span class="row-lines">
<bdi>${c}</bdi>
<small>${T(this.#e,e)}</small>
<small>${this.#e("v4_plan_area_every_run","Custom area \xB7 Every run")}</small>
${u?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>
<small id=${v}>${u}</small>`:l}
</span>
${y(B)}
</button>
${o?i`<span class="edit-moves">
${this.#b(d,a,c,-1,a===0,r,!0)}
${this.#b(d,a,c,1,a===s,r,!0)}
</span>`:i`<span></span>`}
${m?i`<div class="row-expanded">
<div class="split">
<label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
<select
aria-label=${this.#e("v4_area_cleaning_mode_named","Cleaning mode for {area}",{area:c})}
aria-disabled=${p.disabled}
aria-describedby=${p.described}
.value=${e.cleaningMode}
@change=${g=>{let f=g.currentTarget;r?f.value=e.cleaningMode:this.#g(e.areaId,{cleaningMode:f.value})}}
>${ee.map(g=>i`<option value=${g} ?selected=${g===e.cleaningMode}>${te(this.#e,g)}</option>`)}</select>
</label>
${e.cleaningMode==="mop"?l:i`<label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
<select
aria-label=${this.#e("v4_area_vacuum_coverage_named","Vacuum coverage for {area}",{area:c})}
aria-disabled=${p.disabled}
aria-describedby=${p.described}
.value=${e.coverageSetting}
@change=${g=>{let f=g.currentTarget;r?f.value=e.coverageSetting:this.#g(e.areaId,{coverageSetting:f.value})}}
>${U.map(g=>i`<option value=${g} ?selected=${g===e.coverageSetting}>${G(this.#e,g)}</option>`)}</select>
</label>`}
</div>
${Z(this.#e,this.state,e.cleaningMode,`plan-area-${a}`)}
</div>`:l}
</li>`}#R(e){let a=this.state.planDraft,s=this.state.resources.areas.value?.areas;if(!s?.length&&!a.areas.length)return l;let o=(s??[]).filter(d=>d.status==="current"&&!a.areas.some(c=>c.areaId===d.id)),r=a.areas.length>=st;return i`
<h3 class="heading" id="edit-areas">${this.#e("v4_plan_areas_heading","Custom areas")}</h3>
<p class="quiet">${o.length?this.#e("v4_plan_areas_add_hint","Choose a custom area to clean it every time this plan runs."):this.#e("v4_plan_areas_none","No other custom areas are ready to add. Draw or redraw one in Your areas.")}</p>
${r?i`<p class="reason" id="area-limit">${this.#e("v4_plan_area_limit","Can't add more custom areas until you remove one; a plan holds up to {limit}.",{limit:this.#n(st)})}</p>`:l}
${o.length?i`<ul class="plain" role="list" aria-labelledby="edit-areas">
${at(o,d=>d.id,d=>i`<li class="ms-row edit-row">
<label class="edit-check"><input
type="checkbox"
data-area-add=${d.id}
.checked=${!1}
aria-label=${this.#e("v4_area_include_named","Include {area}",{area:d.name})}
aria-disabled=${e||r?"true":l}
aria-describedby=${e??(r?"area-limit":l)}
@click=${c=>{(e||r)&&c.preventDefault()}}
@change=${()=>this.#_(d.id,d)}
></label>
<span class="edit-name"><bdi>${d.name}</bdi><small>${T(this.#e,d)}</small></span>
<span></span>
</li>`)}
</ul>`:l}
`}#C(){let e=this.state,a=e.planDraft,s=e.resources.plans.value;if(!s)return l;let o=this.#c(),r=this.#y(o),d=a.runBehavior==="ordered",c=a.rooms.length>=100,m=h=>s.rooms.find(k=>k.roomId===h)?.name??h,p=Xe(a),u=p.length-1,v=[...p.map(({room:h,area:k},w)=>h?{key:h.roomId,room:h,area:k,index:a.rooms.indexOf(h),position:w}:{key:`area:${k.areaId}`,room:null,area:k,index:-1,position:w}),...s.rooms.filter(h=>!a.rooms.some(k=>k.roomId===h.roomId)).map(h=>({key:h.roomId,room:null,area:void 0,index:-1,position:-1}))],b=a.areas.length,g=a.finishCurrentRoomThreshold,f=this.#n(g),_=(h,k)=>i`<button
class="ms-btn"
type="button"
aria-pressed=${String(a.runBehavior===h)}
aria-disabled=${r.disabled}
aria-describedby=${r.described}
@click=${()=>this.#l({runBehavior:h})}
>${k}</button>`;return i`<div class="edit">
${o?i`<p class="reason" id="edit-held">${this.#r()}</p>`:l}
<label class="field ms-field">${this.#e("plan_name","Plan name")}
<input
maxlength="128"
autocomplete="off"
?readonly=${!!o}
aria-disabled=${r.disabled}
aria-describedby=${r.described}
.value=${a.name}
@input=${h=>this.#l({name:h.currentTarget.value})}
>
</label>
<div class="order" role="group" aria-labelledby="order-label">
<span id="order-label">${this.#e("plan_run_behavior","Cleaning order")}</span>
<div class="ms-segment">
${_("intelligent",this.#e("plan_intelligent","Intelligent rotation"))}
${_("ordered",this.#e("plan_ordered","Saved order"))}
</div>
<p class="quiet">${d?this.#e("v4_plan_order_ordered_hint","Top to bottom, as listed"):this.#e("v4_plan_order_intelligent_hint","Longest-waiting first")}</p>
${b&&!d?i`<p class="quiet">${this.#e("v4_plan_areas_rotation_hint","Rooms and custom areas rotate together. Saved order follows your exact sequence.")}</p>`:l}
</div>
<div class="list-header">
<h3 class="heading" id="edit-rooms">${b?this.#e("v4_plan_steps_heading","Rooms and custom areas"):this.#e("v4_rooms_heading","Rooms")}</h3>
<small>${b?Ie(this.#e,e.locale,a.rooms.length,b):this.#e("v4_plan_rooms_selected","{selected} of {total} selected",{selected:this.#n(a.rooms.length),total:this.#n(s.rooms.length)})}</small>
</div>
${c?i`<p class="reason" id="room-limit">${this.#e("v4_plan_room_limit","Can't add more rooms until you remove one; a plan holds up to {limit}.",{limit:this.#n(100)})}</p>`:l}
<ul class="plain" role="list" aria-labelledby="edit-rooms">
${at(v,h=>h.key,h=>h.area?this.#S(h.area,h.position,u,d,o):this.#k(h.key,m(h.key),h.room,h.index,h.position,u,d,c,o))}
</ul>
${this.#R(o)}
<span class="sr-only" role="status">${this._moved}</span>
<details class="run-end">
<summary>${this.#e("v4_run_end_options","When a run ends")}</summary>
${this.#$("return-dock",this.#e("v4_plan_return_to_dock","Return to the dock when finished"),null,a.returnToBase,o,h=>this.#l({returnToBase:h}))}
${this.#$("finish-room",this.#e("v4_plan_finish_room","Finish the current room when you press Stop"),this.#e("v4_plan_finish_room_hint","Only if the room is at least {percent}% done; otherwise the robot stops right away.",{percent:f}),a.finishCurrentRoom,o,h=>this.#l({finishCurrentRoom:h}))}
${a.finishCurrentRoom?i`<div class="threshold">
<span id="finish-threshold-label">${this.#e("v4_plan_finish_threshold","Finish if at least {percent}% done",{percent:f})}</span>
<input
type="range"
min="0"
max="100"
step="5"
aria-labelledby="finish-threshold-label"
aria-valuetext=${`${f}%`}
aria-disabled=${r.disabled}
aria-describedby=${r.described}
.value=${String(g)}
@input=${h=>{let k=h.currentTarget;o?k.value=String(g):this.#l({finishCurrentRoomThreshold:Number(k.value)})}}
>
</div>`:l}
</details>
</div>`}render(){let{workflow:e,planView:a}=this.state;return e==="plans"?this.#m():e!=="plan"?l:a==="run"?this.#f():this.#C()}};customElements.get(O)||customElements.define(O,nt);var oa=["mop_due","coverage_due"],Be=(t,n)=>t.resources.plans.value?.rooms.find(e=>e.roomId===n)?.name??null,ra=(t,n)=>n.flatMap(e=>{let a=Be(t,e);return a===null?[]:[a]}),Fa=t=>ra(t,t.selection.roomIds),Ka=(t,n)=>{let e=Fa(n);return e.length===0?null:t("v4_rooms_selected_names","{count} selected \xB7 {rooms}",{count:C(n.locale,e.length),rooms:z(n.locale,e)})},Ua=(t,n)=>{let e=Ke(n)?.preview,a=ra(n,e?e.rooms.map(o=>o.roomId):n.selection.roomIds);if(a.length===0)return"";let s=a.length<=3?z(n.locale,a):z(n.locale,[...a.slice(0,2),t("v4_rooms_more","{count} more",{count:C(n.locale,a.length-2)})]);return t("v4_clean_rooms_summary","{rooms}, then back to the dock",{rooms:s})},Ga=(t,n,e,a)=>{let s=Be(e,a)??Be(n,a);if(s===null)return null;if(!Ue(n))return F(n)?t("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):t("v4_reason_clean_rooms_verification","Waiting for the map to be ready.");let o=n.selection.roomIds.includes(a),r=e.selection.roomIds.includes(a);return o===r?null:r?t("v4_room_added","{room} added",{room:s}):t("v4_room_removed","{room} removed",{room:s})},Qa=t=>t.currentTarget.value,ot=class extends W{constructor(){super(...arguments);this.state=D();this._open=null;this.#a=(e,a,s)=>A(this.localize,e,a,s);this.#t=e=>{if(e.key!=="Escape"||this._open===null||Pt(e)||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;let a=e.composedPath(),o=this.getRootNode().host.getRootNode().host;if(!a.includes(o))return;let r=c=>c instanceof HTMLElement&&c.getRootNode()!==this.renderRoot&&(c.getAttribute("role")==="menu"||c.getAttribute("role")==="dialog"||c.getAttribute("aria-expanded")==="true");if(a.some(r))return;e.preventDefault();let d=this._open==="settings"?'[data-disclosure="settings"]':`[data-room-disclosure="${CSS.escape(this._open)}"]`;this._open=null,this.updateComplete.then(()=>this.renderRoot.querySelector(d)?.focus())}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[H,q,V,K,I` :host{display:block;min-inline-size:0}.stack{display:grid;gap:var(--ms-space-3)}.description{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-sm);line-height:var(--ms-lh-normal)}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;padding:0;border:0;clip-path:inset(50%);white-space:nowrap}.list-header{display:flex;align-items:center;gap:var(--ms-space-2);min-block-size:var(--ms-control-sm)}.list-header h3{flex:1;margin:0}.list-header small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs)}.limit{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}@media (any-pointer:coarse){.clear{min-block-size:var(--ms-control);min-inline-size:var(--ms-control)}}.settings-row{display:grid;padding:0}.ms-disclosure{display:flex;gap:var(--ms-space-2);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-3);border:0;border-radius:var(--ms-radius-sm);color:inherit;background:transparent;font:inherit;font-size:var(--ms-t-md);font-weight:var(--ms-w-bold);text-align:start;cursor:pointer}.ms-disclosure:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px}.ms-disclosure>span:first-child{flex:1}.ms-disclosure__value{overflow:hidden;color:var(--ms-text-quiet);font-weight:var(--ms-w-regular);font-size:var(--ms-t-sm);text-overflow:ellipsis;white-space:nowrap}.ms-disclosure>.ms-icon{flex:none;transition:rotate var(--ms-fast) var(--ms-ease)}.ms-disclosure[aria-expanded="true"]>.ms-icon{rotate:90deg}.ms-disclosure:dir(rtl)>.ms-icon{scale:-1 1}.ms-disclosure[aria-expanded="true"]:dir(rtl)>.ms-icon{rotate:-90deg}.settings-body,.row-expanded{display:grid;gap:var(--ms-space-3);padding:var(--ms-space-3);border-block-start:1px solid var(--ms-line)}.settings-body .ms-field,.row-expanded .ms-field{color:color-mix(in srgb,var(--ms-text-quiet) 70%,var(--ms-text))}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2)}@media (max-width:25rem){.split{grid-template-columns:1fr}}.hint{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.switch-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control)}.switch-copy{display:grid;flex:1;gap:.125rem;min-inline-size:0;font-size:var(--ms-t-md)}.switch-copy small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.check-lines{display:grid;gap:var(--ms-space-2)}.line{display:flex;gap:var(--ms-space-2);align-items:flex-start;margin:0;font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug)}.line .ms-icon{flex:none;inline-size:1.125rem;block-size:1.125rem;margin-block-start:.0625rem}.line[data-tone="warning"] .ms-icon{color:var(--ms-warning)}.line>span{flex:1}.line .ms-btn{flex:none}.room-list{display:grid;gap:var(--ms-space-2)}.room-row{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;padding:0;--ms-local:var(--ms-surface-card)}.room-row:has(.ms-check :checked){--ms-local:color-mix(in srgb,var(--ms-accent) 10%,var(--ms-surface-sunken));border-color:var(--ms-resolved-indicator,var(--ms-accent))}.ms-check{display:flex;gap:var(--ms-space-3);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-3);cursor:pointer}.ms-check input{flex:none;inline-size:1.25rem;block-size:1.25rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent));cursor:pointer}.ms-check input[aria-disabled="true"]{cursor:not-allowed}.ms-check:has(input[aria-disabled="true"]) :is(bdi,small){color:var(--ms-text-disabled)}.row-lines{display:grid;flex:1;gap:.125rem;min-inline-size:0}.row-lines bdi{overflow:hidden;font-weight:var(--ms-w-bold);text-overflow:ellipsis;white-space:nowrap}.row-lines small{color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local));font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.problem-line{display:flex;gap:var(--ms-space-1);align-items:flex-start;color:var(--ms-text)}.problem-line .ms-icon{flex:none;inline-size:1rem;block-size:1rem;color:var(--ms-warning)}.room-settings{margin-inline-end:var(--ms-space-1)}.row-expanded{grid-column:1 / -1}@media (forced-colors:active){.room-row:has(.ms-check :checked){forced-color-adjust:none;color:HighlightText;background:Highlight;border-color:Highlight}.room-row:has(.ms-check :checked) .row-lines small{color:HighlightText}.room-row:has(.ms-check :checked) input,.room-row:has(.ms-check :checked) .room-settings{forced-color-adjust:auto}.line .ms-icon,.problem-line .ms-icon{color:CanvasText}}@media (prefers-reduced-motion:reduce){.ms-disclosure>.ms-icon{transition:none}}`]}#a;#s(e){this.dispatchEvent(new CustomEvent(j,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this._open&&this._open!=="settings"&&!this.state.selection.roomIds.includes(this._open)&&(this._open=null)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.#t,!0)}disconnectedCallback(){window.removeEventListener("keydown",this.#t,!0),super.disconnectedCallback()}updated(e){e.has("_open")&&this._open!==null&&this.renderRoot.querySelector(".settings-body, .row-expanded")?.scrollIntoView({block:"nearest"})}#t;#e(e){this._open=this._open===e?null:e}#o(e,a,s){return o=>{if(e){o.currentTarget.value=a;return}s(Qa(o))}}#n(...e){let a=e.filter(s=>!!s);return a.length?a.join(" "):l}#i(e,a,s,o){let r=this.#a,d=this._open==="settings",c=e.selection.cleaningMode,m=e.selection.coverageSetting,u=e.selection.roomSettings.some(g=>e.selection.roomIds.includes(g.roomId)&&(g.cleaningMode!==c||c!=="mop"&&g.coverageSetting!==m))?r("v4_settings_mixed","Different per room"):T(r,{cleaningMode:c,coverageSetting:m}),v=c==="mop",b=a!==null;return i`
<div class="ms-row settings-row">
<button
class="ms-disclosure"
type="button"
data-disclosure="settings"
aria-expanded=${String(d)}
aria-controls="clean-settings"
@click=${()=>this.#e("settings")}
><span>${r("v4_clean_settings","Cleaning settings")}</span><span class="ms-disclosure__value">${u}</span>${y(B)}</button>
${d?i`
<div id="clean-settings" class="settings-body">
<div class="split">
<label class="ms-field">${r("v4_cleaning_system","Cleaning mode")}
<select
class="ms-select"
aria-disabled=${b?"true":l}
aria-describedby=${this.#n(a)}
.value=${c}
@change=${this.#o(b,c,g=>this.#s({type:"set-clean-settings",cleaningMode:g}))}
>${ee.map(g=>i`<option value=${g} ?selected=${g===c}>${te(r,g)}</option>`)}</select>
</label>
${c==="mop"?l:i`<label class="ms-field">${r("vacuum_coverage","Vacuum coverage")}
<select
class="ms-select"
aria-disabled=${b||v?"true":l}
aria-describedby=${this.#n(a)}
.value=${m}
@change=${this.#o(b||v,m,g=>this.#s({type:"set-clean-settings",coverageSetting:g}))}
>${U.map(g=>i`<option value=${g} ?selected=${g===m}>${G(r,g)}</option>`)}</select>
</label>`}
</div>
${Z(r,e,o?.some(g=>g.cleaningMode!=="vacuum")?"vacuum_and_mop":c,"clean")}
${s?i`
<div class="switch-row">
<span class="switch-copy">
<span id="due-label">${r("v4_include_due_schedule","Use room schedules")}</span>
</span>
<button
class="ms-switch"
type="button"
role="switch"
aria-checked=${String(e.selection.useRoomSchedule)}
aria-labelledby="due-label"
aria-describedby=${this.#n(a)}
aria-disabled=${b?"true":l}
@click=${()=>{b||this.#s({type:"set-use-room-schedule",value:!e.selection.useRoomSchedule})}}
></button>
</div>
`:l}
</div>
`:l}
</div>
`}#d(e,a,s,o){let r=this.#a,d=e.manualRoomPreview.status==="error",c=a?re(r,e.locale,a):[],m=o===null?null:o==="invalid_cadence_policy"&&e.selection.useRoomSchedule&&e.selection.roomSettings.some(p=>p.cleaningMode!=="vacuum")?r("v4_room_preview_schedule_override",'Turn off "Use room schedules" to use this cleaning mode.'):r("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.");return!c.length&&!s&&!d&&!m?l:i`
<div class="check-lines">
${c.map(p=>i`<p class="line" data-tone="due">${y(oe)}<span>${p}</span></p>`)}
${s?i`<p class="line" data-tone="info">${y(oe)}<span>${r("v4_room_parts","The robot cleans in {count} parts and may stop at the dock between parts.",{count:C(e.locale,s+1)})}</span></p>`:l}
${d?i`
<p class="line" data-tone="warning">${y(M)}<span>${r("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</span>
<button class="ms-btn ms-btn--sm ms-btn--secondary" type="button" @click=${()=>this.#s({type:"retry-room-preview"})}>${r("v4_retry","Try again")}</button>
</p>
`:l}
${m?i`<p class="line" data-tone="warning">${y(M)}<span>${m}</span></p>`:l}
</div>
`}#m(e,a,s,o,r,d){let c=this.#a,m=e.selection.roomIds.includes(a.roomId),p=e.selection.roomSettings.find(w=>w.roomId===a.roomId)??{roomId:a.roomId,cleaningMode:e.selection.cleaningMode,coverageSetting:e.selection.coverageSetting},u=r&&!m,v=o!==null,b=e.manualRoomPreview.status==="loading",g=d?.cadenceReasons??a.sharedCadenceReasons??a.sharedCadenceProgress?.reasons??[],f=m?Ot(c,g):null,_=this._open===a.roomId,h=`room-settings-${s}`,k=p.cleaningMode==="mop";return i`
<div class="ms-row room-row">
<label class="ms-check">
<input
type="checkbox"
.checked=${m}
aria-disabled=${v||u?"true":l}
aria-describedby=${this.#n(o??(u&&"rooms-limit"))}
@click=${w=>{(v||u)&&w.preventDefault()}}
@change=${()=>this.#s({type:"toggle-room",roomId:a.roomId})}
>
<span class="row-lines">
<bdi>${a.name}</bdi>
${m?i`<small>${b?c("v4_room_preview_loading","Checking settings\u2026"):T(c,d??p)}</small>`:l}
${f?i`<small class="problem-line">${y(M)}<span>${f}</span></small>`:l}
</span>
</label>
${m?i`
<button
class="ms-btn ms-btn--icon room-settings"
type="button"
data-room-disclosure=${a.roomId}
aria-label=${c("v4_room_settings_named","Settings for {room}",{room:a.name})}
aria-expanded=${String(_)}
aria-controls=${h}
@click=${()=>this.#e(a.roomId)}
>${y(_?kt:xt)}</button>
`:l}
${_?i`
<div class="row-expanded" id=${h}>
<div class="split">
<label class="ms-field">${c("v4_cleaning_system","Cleaning mode")}
<select
class="ms-select"
aria-label=${c("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:a.name})}
aria-disabled=${v?"true":l}
aria-describedby=${this.#n(o)}
.value=${p.cleaningMode}
@change=${this.#o(v,p.cleaningMode,w=>this.#s({type:"patch-room-settings",roomId:a.roomId,cleaningMode:w}))}
>${ee.map(w=>i`<option value=${w} ?selected=${w===p.cleaningMode}>${te(c,w)}</option>`)}</select>
</label>
${p.cleaningMode==="mop"?l:i`<label class="ms-field">${c("vacuum_coverage","Vacuum coverage")}
<select
class="ms-select"
aria-label=${c("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:a.name})}
aria-disabled=${v||k?"true":l}
aria-describedby=${this.#n(o)}
.value=${p.coverageSetting}
@change=${this.#o(v||k,p.coverageSetting,w=>this.#s({type:"patch-room-settings",roomId:a.roomId,coverageSetting:w}))}
>${U.map(w=>i`<option value=${w} ?selected=${w===p.coverageSetting}>${G(c,w)}</option>`)}</select>
</label>`}
</div>
${Z(c,e,p.cleaningMode==="vacuum"?d?.cleaningMode??"vacuum":p.cleaningMode,`room-${s}`)}
</div>
`:l}
</div>
`}render(){let e=this.#a,a=this.state,s=a.resources.plans.value?.rooms??[],o=s.length===0,r=F(a),d=!Ue(a),c=d?r?"rooms-description":"rooms-held":null,m=a.selection.roomIds.length,p=m>=100,u=Ke(a)?.preview??null,v=u?u.rooms.map(_=>({..._,name:Be(a,_.roomId)??_.name})):null,b=_=>v?.find(h=>h.roomId===_)??null,g=(v??[]).some(_=>_.cadenceReasons.some(h=>oa.includes(h)))||s.some(_=>a.selection.roomIds.includes(_.roomId)&&(_.sharedCadenceProgress?.mopDue||_.sharedCadenceProgress?.coverageDue||(_.sharedCadenceReasons??_.sharedCadenceProgress?.reasons??[]).some(h=>oa.includes(h)))),f=r?e("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):o?e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here."):e("v4_choose_rooms_detail","Choose rooms on the map or in the list.");return i`
<div class="stack">
<p class="description" id="rooms-description">${f}</p>
${d&&!r?i`<span class="sr-only" id="rooms-held">${e("v4_reason_clean_rooms_verification","Waiting for the map to be ready.")}</span>`:l}
${o?l:i`
<div class="list-header">
<h3 class="ms-section-heading" id="rooms-heading">${e("v4_rooms_to_clean","Rooms to clean")}</h3>
${m?i`
<small>${e("v4_rooms_selected","{count} selected",{count:C(a.locale,m)})}</small>
<button
class="ms-btn ms-btn--sm ms-btn--secondary clear"
type="button"
aria-disabled=${d?"true":l}
aria-describedby=${this.#n(c)}
@click=${()=>{d||this.#s({type:"clear-selection"})}}
>${e("v4_clear","Clear")}</button>
`:l}
</div>
${p?i`<p class="limit" id="rooms-limit">${e("v4_room_limit_reached","Up to {limit} rooms fit in one clean, so remove one to add another.",{limit:100})}</p>`:l}
${this.#i(a,c,g,v)}
${this.#d(a,v,u?.missionBoundaries.length??0,u?.blocker??null)}
<div class="room-list" role="group" aria-labelledby="rooms-heading">
${s.map((_,h)=>this.#m(a,_,h,c,p,b(_.roomId)))}
</div>
`}
</div>
`}};customElements.get(fe)||customElements.define(fe,ot);var ue=Math.round(.2*100),he=Math.round(2.5*100),pe=5,je=t=>Math.min(he,Math.max(ue,Math.round(t*100))),Xa=(t,n)=>n>0?Math.min(he,Math.floor(t/pe)*pe+pe):Math.max(ue,Math.ceil(t/pe)*pe-pe),rt=class extends W{constructor(){super(...arguments);this.state=D()}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[H,q,V,K,De,I` :host{display:block;color:var(--ms-text)}.controls{display:grid;gap:var(--ms-space-2);padding:var(--ms-space-3);border:1px solid var(--ms-line);border-radius:var(--ms-radius-md)}.row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--ms-space-2)}.row>label{font-size:var(--ms-t-sm);font-weight:var(--ms-w-medium)}.hint{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;clip-path:inset(50%);white-space:nowrap}`]}#a(e,a,s){return A(this.localize,e,a,s)}#s(e){this.dispatchEvent(new CustomEvent(j,{detail:e,bubbles:!0,composed:!0}))}#t(e){this.#s({type:"set-brush",value:e/100})}#e(e){let a=e.currentTarget,s=je(this.state.draw.brushMeters),o=Number(a.value.trim()),r=a.validity.badInput||a.value.trim()===""||!Number.isFinite(o)?s:je(o/100);a.value=String(r),r!==s&&this.#t(r)}#o(e){let a=e.currentTarget.valueAsNumber;Number.isFinite(a)&&this.#t(je(a/100))}render(){let e=je(this.state.draw.brushMeters),a=r=>new Intl.NumberFormat(this.state.locale,{style:"unit",unit:"centimeter",unitDisplay:"short"}).format(r),s=this.#a("brush_size","Brush width"),o=r=>{let d=r<0?e<=ue?this.#a("v4_brush_min_reason","Can't make the brush narrower than {size}.",{size:a(ue)}):null:e>=he?this.#a("v4_brush_max_reason","Can't make the brush wider than {size}.",{size:a(he)}):null,c=r<0?"brush-min":"brush-max";return i`<button
class="ms-btn ms-btn--icon"
type="button"
aria-label=${r<0?this.#a("v4_stepper_decrease","Decrease {label}",{label:s}):this.#a("v4_stepper_increase","Increase {label}",{label:s})}
aria-controls="brush"
aria-disabled=${d?"true":l}
aria-describedby=${d?c:l}
title=${d??l}
@click=${()=>{d||this.#t(Xa(e,r))}}
>${y(r<0?Ee:Y)}${d?i`<span class="sr-only" id=${c}>${d}</span>`:l}</button>`};return i`
<div class="controls" role="group" aria-label=${this.#a("v4_drawing_precision","Drawing precision")}>
<div class="row">
<label for="brush">${s}</label>
<span class="ms-stepper">
${o(-1)}
<input
id="brush"
type="number"
inputmode="numeric"
min=${ue}
max=${he}
step="1"
.value=${String(e)}
@change=${this.#e}
aria-label=${this.#a("v4_brush_width_cm","Brush width in centimeters")}
/>
${o(1)}
</span>
</div>
<input
class="ms-range"
type="range"
min=${ue}
max=${he}
step="1"
.value=${String(e)}
@input=${this.#o}
aria-label=${this.#a("v4_brush_width_slider","Brush width slider")}
aria-valuetext=${a(e)}
/>
<p class="hint">${this.#a("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
</div>
`}};customElements.get(_e)||customElements.define(_e,rt);var Ya=(t,n,e)=>{let a=(p,u,v)=>A(e,p,u,v),s=le(n),o=n.cadenceResetRequest,r=n.resources.plans.value,d=o&&r?.rooms.find(p=>p.roomId===o.roomId)?.name||o?.roomId||"room",c=o?r?.plans.find(p=>p.id===o.planId)?.rooms.find(p=>p.roomId===o.roomId)?.cadence?.scope==="shared":!1,m=o?.mode??"mop";switch(t){case"confirmDeletePlan":return s&&{title:a("v4_delete_plan","Delete plan?"),detail:a("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:s.name}),...s.successor===void 0?{}:{consequence:s.successor===null?a("v4_delete_plan_none","You'll have no default plan."):a("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:s.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":{let p=Pe(r?.plans.filter(u=>Array.isArray(u.entries)&&u.entries.length>1),n.areaDraft.id??"");return s&&{title:a("v4_delete_area","Delete area?"),detail:p.length?a("v4_delete_area_detail_plans",`Automations that clean "{name}" will stop working, and {plans} won't clean it anymore. The robot won't move.`,{name:s.name,plans:z(n.locale,p)}):a("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:s.name}),...s.successor===void 0?{}:{consequence:s.successor===null?a("v4_delete_area_none","No custom area will be selected."):a("v4_delete_area_selected","{area} becomes the selected custom area.",{area:s.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("area_delete","Delete"),action:"delete-area"}}case"confirmDeleteSchedule":{let p=n.scheduleDeleteRequest;if(!p)return;let u=z(n.locale,p.planNames.map(v=>`"${v}"`));return{title:a("v4_delete_shared_schedule_title","Delete shared schedule?"),detail:p.planNames.length?a("v4_delete_shared_schedule_detail","This removes {room}'s shared schedule, progress, and next-clean requests from every plan using it: {plans}. Those plans keep their usual cleaning settings. Private schedules and cleaning history are unchanged.",{room:p.roomName,plans:u}):a("v4_delete_shared_schedule_orphan_detail","No plans use {room}'s shared schedule. This removes the unused schedule, progress, and next-clean requests. Plans and cleaning history are unchanged.",{room:p.roomName}),cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("v4_delete_shared_schedule","Delete shared schedule"),action:"delete-schedule"}}case"confirmResetCadence":return{title:m==="mop"?a("v4_reset_mop_cadence_title","Reset mopping progress?"):a("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:c?a("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}):a("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}),cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("v4_reset","Reset"),action:"reset-room-cadence"}}},Za=(t,n,e)=>{let a=t;if(!mt(a.detail))return;if(pt(n,a.detail)){t.stopPropagation(),e(a.detail);return}if(a.detail?.type==="request-schedule-delete"){let o=a.composedPath().find(r=>r instanceof HTMLElement&&r.hasAttribute("data-dialog-launcher"));return o instanceof HTMLElement?o:void 0}if(a.detail?.type!=="open-dialog")return;let s=a.composedPath().find(o=>o instanceof HTMLElement&&o.hasAttribute("data-dialog-launcher"));return s instanceof HTMLElement?s:void 0},Ja=(t,n,e,a)=>{let s=t.cadenceResetRequest,o=t.scheduleDeleteRequest;e({type:"dismiss-top-layer"}),a(n==="reset-room-cadence"&&s?{id:n,planId:s.planId,roomId:s.roomId,mode:s.mode}:n==="delete-schedule"&&o?{id:n,planId:o.planId,roomId:o.roomId,expectedToken:o.expectedToken}:n)},es=(t,n)=>{let e=t.cadenceResetRequest,a=t.scheduleDeleteRequest;return t.dialog==="confirmDeleteSchedule"&&a?n.querySelector(X)?.shadowRoot?.querySelector(O)?.shadowRoot?.querySelector(`[data-room-disclosure="${CSS.escape(a.roomId)}"]`)??null:t.dialog!=="confirmResetCadence"||!e?null:n.querySelector(X)?.shadowRoot?.querySelector(O)?.shadowRoot?.querySelector(`[data-room-disclosure="${CSS.escape(e.roomId)}"]`)??null};var it=class{constructor(n){this.menu=new ae(n,".overflow-wrap",".overflow")}render({state:n,narrow:e,t:a,intent:s,diagnostics:o}){let r=(c,m,p)=>i`
<button class="ms-row ms-row--menu" type="button" role="menuitemradio" aria-checked=${String(c)} data-selected=${c?"true":l} tabindex="-1" @click=${p}><span>${m}</span>${c?y(St):l}</button>
`,d=(c,m)=>r(n.quality===c,m,()=>s({type:"set-quality",quality:c}));return i`
<div id="map-options" class="overflow-menu ms-surface ms-surface--overlay" role="menu" aria-label=${a("v4_map_options","Map options")}>
${e?i`
<div role="group" aria-labelledby="menu-display">
<p class="menu-heading" id="menu-display" role="presentation">${a("v4_map_display","Map display")}</p>
${Te(n)==="top"?i`
${r(n.appearance==="photo",a("map_style_photo","Photo"),()=>s({type:"set-appearance",appearance:"photo"}))}
${r(n.appearance==="rooms",a("v4_room_colours","Room colors"),()=>s({type:"set-appearance",appearance:"rooms"}))}
`:l}
<button
class="ms-row ms-row--menu"
type="button"
role="menuitemcheckbox"
aria-checked=${String(n.labelsVisible)}
tabindex="-1"
@click=${()=>s({type:"toggle-labels"})}
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
<button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!1),o()}}>${a("v4_map_diagnostics","Map diagnostics")}</button>
</div>
`}};var ts=t=>i`
<p id="zone-keyboard-help" class="sr-only">${t("v4_zone_keyboard_help","Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag.")}</p>
<p id="keyboard-draw-help" class="sr-only">${t("v4_keyboard_draw_help","Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>
`,as=({state:t,coarse:n,t:e,close:a})=>{let s=t.workflow==="draw",o=Te(t)==="top",r=e("v4_how_to_move","How to move the map"),d=n?[[e("v4_touch","Touch"),s?e("v4_touch_draw_help","Drag to paint \xB7 two fingers to move or zoom"):e("v4_touch_help","Drag to move the map \xB7 pinch to zoom \xB7 twist two fingers to rotate")]]:[[e("v4_trackpad","Trackpad"),e("v4_trackpad_help","Scroll to move the map \xB7 pinch to zoom \xB7 twist to rotate")],[e("v4_mouse","Mouse"),s?e("v4_mouse_draw_help","Drag to paint \xB7 right-drag or Space-drag to move \xB7 wheel to zoom"):o?e("v4_mouse_top_help","Drag to move the map \xB7 wheel to zoom"):e("v4_mouse_help","Drag to move the map \xB7 right-drag or Shift-drag to rotate \xB7 wheel to zoom")],[e("v4_keyboard","Keyboard"),s?t.draw.tool==="outline"?e("v4_zone_keyboard_help","Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag."):e("v4_keyboard_draw_help","Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase."):o?e("v4_keyboard_top_help","WASD or arrows to move \xB7 +/\u2212 to zoom \xB7 0 to fit"):e("v4_keyboard_help","WASD to move \xB7 Q/E or arrows to orbit \xB7 +/\u2212 to zoom \xB7 0 to fit")]];return i`
<div id="navigation-help" class="navigation-help ms-surface ms-surface--floating" role="dialog" aria-modal="false" aria-label=${r}>
<header>
<h2>${r}</h2>
<button class="ms-btn ms-btn--sm" type="button" @click=${a}>${e("v4_close","Close")}</button>
</header>
<dl>${d.map(([c,m])=>i`<dt>${c}</dt><dd>${m}</dd>`)}</dl>
</div>
`};var ss=(t,n)=>{let{tool:e}=n.draw;if(e==="pan")return null;let a=window.matchMedia("(any-pointer: coarse)").matches;return e==="outline"?a?t("v4_points_hint_touch","Tap to add points \xB7 two fingers to move the map"):t("v4_points_hint_pointer","Click to add points \xB7 right-drag to move the map"):a?t("v4_draw_hint_touch","Drag to paint \xB7 two fingers to move the map"):t("v4_draw_hint_pointer","Drag to paint \xB7 right-drag or Space-drag to move the map")},ia=ce(O),la=ce(fe),ca=ce(_e),xe=t=>t.currentTarget.value,lt=class extends W{constructor(){super(...arguments);this.state=D();this.narrow=!1;this._historyPreviewPosition=null;this.#a=new Tt(this,()=>import("./diagnostics-panel-P6PL6QYB.js"));this.#s="";this.#i=(e,a,s)=>this.#t(e,a,s)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0},narrow:{type:Boolean}}}static{this.styles=[H,q,V,K,I` :host{display:block;min-inline-size:0;container-type:inline-size}.ms-row--danger{color:var(--ms-resolved-danger-text,var(--ms-danger))}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;clip-path:inset(50%);white-space:nowrap}button,select,input[type="checkbox"]{cursor:pointer}.stack{display:grid;gap:var(--ms-space-3)}.subtle{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.loading,.empty,.problem,.notice{--ms-local:var(--ms-surface-sunken);padding:var(--ms-space-3);border-radius:var(--ms-radius-md);background:var(--ms-local);font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug)}.problem,.notice[data-tone="warning"]{--ms-local:color-mix(in srgb,var(--notice-tone) 12%,var(--ms-surface-card));color:var(--ms-text)}.problem{--notice-tone:var(--ms-danger)}.notice[data-tone="warning"]{--notice-tone:var(--ms-warning)}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2)}.list{display:grid;gap:var(--ms-space-2)}.group{display:grid;gap:var(--ms-space-2)}.floor[aria-current="true"]{border-color:var(--ms-resolved-indicator,var(--ms-accent));background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-local))}.problem p{margin:0}@media (forced-colors:active){.problem,.notice{border:1px solid CanvasText}.floor[aria-current="true"]{forced-color-adjust:none;color:HighlightText;background:Highlight;border-color:Highlight}}.toolbar{display:flex;flex-wrap:wrap;gap:var(--ms-space-2)}.checkbox{display:flex;align-items:center;gap:var(--ms-space-2);min-block-size:var(--ms-control);font-size:var(--ms-t-xs);font-weight:var(--ms-w-medium)}.checkbox input{inline-size:1.2rem;block-size:1.2rem}.floor small,.snapshot small,.list-button small{margin-inline-start:auto;color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local));font-weight:var(--ms-w-regular)}.timeline{display:grid;gap:var(--ms-space-2)}.timeline-ends{display:flex;justify-content:space-between;margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}@media (max-width:25rem){.split{grid-template-columns:1fr}}.area-row .ms-row__body{display:grid;gap:.125rem}.area-row bdi{overflow:hidden;min-inline-size:0;text-overflow:ellipsis;white-space:nowrap}.area-row small{color:var(--ms-text-quiet)}.area-row .ms-row__trail:dir(rtl) .ms-icon{scale:-1 1}.lines{display:grid;gap:.125rem;color:var(--ms-text);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.line{display:flex;gap:var(--ms-space-1);align-items:flex-start}.line .ms-icon{flex:none;inline-size:1rem;block-size:1rem;color:var(--ms-warning)}.empty-card{display:grid;gap:var(--ms-space-2);padding:var(--ms-space-4);border:1px solid var(--ms-line);border-radius:var(--ms-radius-md)}.empty-card h3{margin:0;font-size:var(--ms-t-md)}.empty-card p{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-md);line-height:var(--ms-lh-normal)}.empty-card .ms-btn{justify-self:start}.switch-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control)}.switch-copy{display:grid;flex:1;gap:.125rem;min-inline-size:0;font-size:var(--ms-t-md)}.switch-copy small,.reason{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}`]}#a;#s;willUpdate(e){if(!e.has("state"))return;let{workflow:a,selection:s}=this.state,o=`${a}:${s.floorId}:${s.historyId??"live"}`;o!==this.#s&&(this.#s=o,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#t(e,a,s){return A(this.localize,e,a,s)}#e(){let e=gt(this.state);return e?this.#t(e.reasonKey,e.reason):null}#o(e){return te(this.#i,e)}#n(e){return G(this.#i,e)}#i;#d(e){let a=Pe(this.state.resources.plans.value?.plans,e);if(!a.length)return null;let s=z(this.state.locale,a);return a.length===1?this.#t("v4_area_in_plans_one","In 1 plan: {plans}",{plans:s}):this.#t("v4_area_in_plans","In {count} plans: {plans}",{count:C(this.state.locale,a.length),plans:s})}#m(e,a){return e===null?l:a==="small"?i`<small data-in-plans>${e}</small>`:i`<p class="subtle" data-in-plans>${e}</p>`}#r(e){this.dispatchEvent(new CustomEvent(j,{detail:e,bubbles:!0,composed:!0}))}#p(e){switch(e){case"rooms":case"plans":case"plan":return{loading:this.#t("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#t("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#t("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"areas":case"draw":case"areaReview":return{loading:this.#t("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#t("v4_areas_unavailable","Home Assistant couldn't load your saved areas."),empty:""};case"history":return{loading:this.#t("v4_loading_history","Loading map history\u2026"),unavailable:this.#t("v4_history_unavailable","Map history is unavailable right now."),empty:this.#t("v4_no_map_history","No saved map snapshots yet.")}}}#u({status:e,value:a},s,o){let r=this.#p(o);return a===null&&(e==="idle"||e==="loading")?i`<div class="loading" role="status">${r.loading}</div>`:e==="error"?i`
<div class="stack">
<div class="problem" role="alert">${r.unavailable}</div>
<div class="toolbar">
<button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:o})}>${this.#t("v4_retry","Try again")}</button>
</div>
</div>
`:e==="empty"?i`<div class="empty">${r.empty}</div>`:s}#h(){return this.#u(this.state.resources.plans,de`<${la}
.state=${this.state}
.localize=${this.localize}
></${la}>`,"rooms")}#f(){let e=this.state.workflow==="plans"?"plans":"plan";return this.#u(this.state.resources.plans,de`<${ia}
.state=${this.state}
.localize=${this.localize}
></${ia}>`,e)}#c(){let e=this.narrow?null:ss(this.#i,this.state);return i`
<div class="stack">
${e?i`<p class="subtle draw-hint">${e}</p>`:l}
${this.state.precisionOpen&&!this.narrow?de`<${ca} .state=${this.state} .localize=${this.localize}></${ca}>`:l}
</div>
`}#l(){let{status:e,value:a}=this.state.resources.areas,s=this.#p("areas");if(a===null&&(e==="idle"||e==="loading"))return i`<div class="loading" role="status">${s.loading}</div>`;let o=this.#e(),r=o?"areas-held-reason":l,d=o?"true":l,c=v=>()=>{o||this.#r(v)},m=this.#t("area_new","New area"),p=e==="error"?i`
<div class="problem" role="alert">${s.unavailable}</div>
<div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"areas"})}>${this.#t("v4_retry","Try again")}</button></div>
`:l,u=a?.areas??[];return u.length?i`<div class="stack">
${p}
<p class="subtle">${this.#t("v4_choose_area_detail","Tap an area to clean it or change it.")}</p>
<div class="list" role="list">
${u.map(v=>{let b=v.canRebind||v.status==="review",g=!b&&v.status!=="current";return i`<div role="listitem"><button
class="ms-row ms-row--card area-row"
type="button"
data-area-row=${v.id}
aria-disabled=${d}
aria-describedby=${r}
@click=${c({type:"select-area",areaId:v.id,workflow:"areaReview"})}
>
<span class="ms-row__body">
<strong><bdi>${v.name}</bdi></strong>
<small>${T(this.#i,v)}</small>
${this.#m(this.#d(v.id),"small")}
${b||g?i`<span class="lines"><span class="line" data-tone="warning">${y(M)}<span>${b?this.#t("v4_area_row_check","Map changed \xB7 Check it before cleaning"):this.#t("v4_area_row_redraw","Redraw it before cleaning")}</span></span></span>`:l}
</span>
<span class="ms-row__trail">${y(B)}</span>
</button></div>`})}
<div role="listitem"><button class="ms-row ms-row--card" type="button" data-area-new aria-disabled=${d} aria-describedby=${r} @click=${c({type:"open-workflow",workflow:"draw"})}>
<span class="ms-row__lead">${y(Y)}</span>
<span class="ms-row__body"><strong>${m}</strong></span>
</button></div>
</div>
${o?i`<p class="sr-only" id="areas-held-reason">${o}</p>`:l}
</div>`:i`<div class="stack">
${p}
${a===null&&e==="error"?l:i`<div class="empty-card">
<h3>${this.#t("v4_no_areas","No custom areas yet")}</h3>
<p>${this.#t("v4_no_areas_hint","Draw an area on the map to clean just that spot.")}</p>
<button class="ms-btn ms-btn--primary" type="button" data-area-new aria-disabled=${d} aria-describedby=${r} @click=${c({type:"open-workflow",workflow:"draw"})}>${m}</button>
</div>`}
${o?i`<p class="sr-only" id="areas-held-reason">${o}</p>`:l}
</div>`}#v(){let e=this.state.areaDraft,a=this.state.resources.areas,s=e.canRebind||e.status==="review",o=!s&&(e.status==="stale"||e.status==="unknown"),r=this.#e(),d=r?"review-held-reason":l,c=r?"true":l,m=F(this.state),p=le(this.state,"confirmDeleteArea")!==void 0;return i`
<div class="stack">
${s?i`<div class="notice" data-tone="warning" role="status">${this.#t("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:l}
${o?i`<div class="problem" role="alert">${this.#t("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:l}
${a.status==="error"?i`
<div class="stack">
<div class="problem" role="alert">${this.#p("areaReview").unavailable}</div>
<div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"areaReview"})}>${this.#t("v4_retry","Try again")}</button></div>
</div>
`:l}
<label class="field ms-field">${this.#t("area_name","Area name")}
<input maxlength="128" autocomplete="off" .value=${e.name} ?readonly=${!!r} aria-disabled=${c} aria-describedby=${d} @input=${u=>{r||this.#r({type:"patch-area-draft",patch:{name:xe(u)}})}}>
</label>
<div class="split">
<label class="field ms-field">${this.#t("v4_cleaning_system","Cleaning mode")}
<select .value=${e.cleaningMode} aria-disabled=${c} aria-describedby=${d} @change=${u=>{if(r){u.currentTarget.value=e.cleaningMode;return}this.#r({type:"patch-area-draft",patch:{cleaningMode:xe(u)}})}}>${ee.map(u=>i`<option value=${u} ?selected=${u===e.cleaningMode}>${this.#o(u)}</option>`)}</select>
</label>
${e.cleaningMode==="mop"?l:i`<label class="field ms-field">${this.#t("vacuum_coverage","Vacuum coverage")}
<select .value=${e.coverageSetting} aria-disabled=${c} aria-describedby=${d} @change=${u=>{if(r){u.currentTarget.value=e.coverageSetting;return}this.#r({type:"patch-area-draft",patch:{coverageSetting:xe(u)}})}}>${U.map(u=>i`<option value=${u} ?selected=${u===e.coverageSetting}>${this.#n(u)}</option>`)}</select>
</label>`}
</div>
${Z(this.#i,this.state,e.cleaningMode,"area")}
${this.#m(e.id===null?null:this.#d(e.id),"p")}
${m?i`
<div class="toolbar">
<button class="ms-btn ms-btn--secondary" type="button" data-redraw aria-disabled=${c} aria-describedby=${d} @click=${()=>{r||this.#r({type:"open-workflow",workflow:"draw"})}}>${this.#t("v4_edit_outline","Redraw")}</button>
</div>
`:l}
${r?i`<p class="sr-only" id="review-held-reason">${r}</p>`:l}
${e.id===null?l:qe(this.#i,this.state,{kind:"area",id:e.id},u=>this.#r(u))}
${p?i`
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
`}#g(){let e=this.state.resources.history,a=e.value,s=a?.floors.find(_=>_.id===this.state.selection.floorId)||a?.floors.find(_=>_.active)||a?.floors[0],o=s?.snapshots||[],r=this.state.selection.historyId?Math.max(0,o.findIndex(_=>_.id===this.state.selection.historyId)):o.length,d=this.#t("map_timeline_live_action","Live"),c=!!s?.active,m=c?o.length:o.length-1,p=Math.min(this._historyPreviewPosition??r,m),u=o[p],v=this.#e(),b=v?"true":l,g=v?"history-held-reason":l,f=this.state.dataMode==="live"&&this.state.floor.readOnly;return this.#u(e,i`
<div class="stack">
${f?i`<p class="subtle">${this.#t("v4_reason_live_map_required","Can't edit until you show the live map.")}</p>`:l}
${(a?.floors.length||0)>1?i`
<div class="group">
<h3 class="ms-section-heading" id="floors-heading">${this.#t("v4_mapped_floors","Mapped floors")}</h3>
<div class="list" role="group" aria-labelledby="floors-heading">
${(a?.floors||[]).map((_,h)=>i`
<button
class="floor ms-row"
type="button"
aria-current=${String(_.id===s?.id)}
aria-disabled=${b}
aria-describedby=${g}
@click=${()=>{v||this.#r({type:"set-floor",floorId:_.id})}}
>
<span>${_.label||(_.active?this.#t("v4_current_floor","Current floor"):this.#t("v4_saved_floor","Saved floor {number}",{number:_.ordinal??h}))}</span>
<small>${_.active?d:this.#t("v4_saved_map","Saved map")}</small>
</button>
`)}
</div>
</div>
`:l}
<div class="timeline">
${o.length>=3?i`
<label class="field ms-field">${this.#t("map_timeline_label","Map timeline")}
<input
type="range"
class="ms-range"
min="0"
max=${String(m)}
step="1"
.value=${String(p)}
aria-valuetext=${u?Qe(u.createdAt,this.dates):d}
aria-disabled=${b}
aria-describedby=${g}
@input=${_=>{if(v){_.currentTarget.value=String(r);return}this._historyPreviewPosition=Number(xe(_))}}
@change=${_=>{if(v){_.currentTarget.value=String(r);return}let h=Number(xe(_));this._historyPreviewPosition=null,this.#r({type:"set-history",historyId:h===o.length?null:o[h]?.id||null})}}
>
</label>
<p class="timeline-ends" aria-hidden="true"><span>${this.#t("map_timeline_oldest","Oldest")}</span><span>${c?d:this.#t("map_timeline_newest","Newest")}</span></p>
`:l}
<div class="list">
${o.map((_,h)=>i`
<button class="snapshot ms-row" type="button" aria-current=${String(_.id===this.state.selection.historyId)} aria-disabled=${b} aria-describedby=${g} @click=${()=>{v||this.#r({type:"set-history",historyId:_.id})}}>
<span>${Qe(_.createdAt,this.dates)}</span><small>${this.#t("v4_history_position","{position} of {count}",{position:h+1,count:o.length})}</small>
</button>
`)}
</div>
</div>
${v?i`<p class="sr-only" id="history-held-reason">${v}</p>`:l}
</div>
`,"history")}#_(){return this.#a.request(),this.#a.status!=="ready"?Mt(this.#a.status,this.localize,this.retry):i`<matic-map-diagnostics-v4
.state=${this.state}
.localize=${this.localize}
.disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
></matic-map-diagnostics-v4>`}render(){switch(this.state.workflow){case"rooms":return this.#h();case"plans":case"plan":return this.#f();case"areas":return this.#l();case"draw":return this.#c();case"areaReview":return this.#v();case"history":return this.#g();case"support":return this.#_();case"none":return l}}};customElements.get(X)||customElements.define(X,lt);export{it as MapOptions,lt as MaticMapWorkflowV4,tt as actionReason,Ja as confirmDialog,Ya as dialogCopy,Za as dialogLauncher,es as dialogReturnTarget,Aa as drawCancel,Xt as drawExit,ss as drawHint,ts as drawRecipes,za as focusPlanTarget,K as formControls,Oa as homeShortcuts,Ia as planCancel,Ma as planTitle,Pa as planTools,as as renderMapHelp,Ga as roomTapAnnouncement,Ka as roomsGripLine,Ua as roomsSummary,ma as shellWorkflowStyles};
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
