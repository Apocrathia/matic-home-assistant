import{a as F,b as na}from"./chunk-MP52FP5V.js";import{E as wt,H as kt,O as Se,P as xt,R as B,a as le,b as ce,d as ve,e as se,f as ge,g as j,h as _e}from"./chunk-BHT5ZQEH.js";import{A as bt,B as G,C as xe,D as ft,E as yt,K as $t,P as ne,R as M,T as y,a as W,b as H,c as q,f as ke,j as O,k as gt,l as _t}from"./chunk-SILJN2XG.js";import{$ as vt,A as lt,F as ct,G as dt,H as mt,I as pt,J as ut,L as ae,M as Ve,O as Be,U as A,W as i,Z as ht,_ as l,aa as D,ba as z,c as te,ca as V,da as je,e as st,f as nt,j as ot,k as rt,n as N,p as Oe,q as we,t as ie,u as it}from"./chunk-4FO6HY7W.js";var C=(t,n)=>new Intl.NumberFormat(t).format(n),oa=["vacuum","mop","vacuum_and_mop"],ra=["quick","standard","heavy_duty"],St=t=>(Array.isArray(t)?t:[]).flatMap(n=>{let e=n??{};if(e.kind!=="area")return[null];let{area_id:a,name:s,cleaning_mode:o,coverage_setting:r}=e;return typeof a=="string"&&oa.includes(o)&&ra.includes(r)?[{areaId:a,name:typeof s=="string"&&s?s:a,cleaningMode:o,coverageSetting:r}]:[]}),Re=t=>St(t.entries).filter(n=>n!==null),Rt=(t,n,e)=>{let a=[...n];return[...St(t.entries).flatMap(s=>s?[e(s)]:a.splice(0,1)),...a]},Fe=({rooms:t,areas:n})=>[...t,null].flatMap((e,a)=>[...n.filter(s=>Math.min(s.slot,t.length)===a).map(s=>({area:s})),...e?[{room:e}]:[]]),Ct=t=>{let n=[],e=[];for(let{room:a,area:s}of t)a?n.push(a):e.push({...s,slot:n.length});return{rooms:n,areas:e}},Ce=(t,n)=>(t??[]).filter(e=>Re(e).some(a=>a.areaId===n)).map(e=>`"${e.name}"`),Ee=(t,n,e,a)=>[...e||!a?[e===1?t("v4_plan_summary_rooms_one","1 room"):t("v4_plan_summary_rooms","{count} rooms",{count:C(n,e)})]:[],...a?[a===1?t("v4_plan_summary_areas_one","1 custom area"):t("v4_plan_summary_areas","{count} custom areas",{count:C(n,a)})]:[]].join(" \xB7 "),oe=(t,n,e)=>{let a=m=>{let p=e.filter(m).map(u=>u.name);return p.length?V(n,p):null},s=m=>a(p=>p.cadenceReasons.includes("coverage_due")&&p.coverageSetting===m),o=a(m=>m.cadenceReasons.includes("mop_due")),r=s("quick"),c=s("standard"),d=s("heavy_duty");return[o&&t("v4_due_mop","Mop due in {rooms}",{rooms:o}),r&&t("v4_due_quick","Quick vacuum due in {rooms}",{rooms:r}),c&&t("v4_due_optimal","Optimal vacuum due in {rooms}",{rooms:c}),d&&t("v4_due_heavy","Heavy duty vacuum due in {rooms}",{rooms:d})].filter(m=>!!m)},Pe=(t,n,e)=>{let a=e.rooms.length,s=e.runBehavior==="ordered",o=Re(e).length;return o?`${Ee(t,n,a,o)} \xB7 ${s?t("v4_plan_order_ordered_hint","Top to bottom, as listed"):t("v4_plan_order_intelligent_hint","Longest-waiting rooms first")}`:a===1?s?t("v4_plan_row_ordered_one","1 room \xB7 Top to bottom, as listed"):t("v4_plan_row_rotation_one","1 room \xB7 Longest-waiting rooms first"):s?t("v4_plan_row_ordered","{count} rooms \xB7 Top to bottom, as listed",{count:C(n,a)}):t("v4_plan_row_rotation","{count} rooms \xB7 Longest-waiting rooms first",{count:C(n,a)})},Et=(t,n,e)=>{if(!e.enabled)return null;let a=e.nextRunPreview?.blocker;if(a&&a!=="plan_disabled")return{blocked:t("v4_plan_row_blocked","Needs attention before it can run")};let s=oe(t,n,e.nextRunPreview?.rooms??[]);return s.length?{due:s}:null};var Me=1,be=100,Pt=(t,n,e)=>{if(n)return e;let a=t.trim();if(a==="")return null;let s=Number(a);return Number.isFinite(s)?Math.min(be,Math.max(Me,Math.round(s))):e},Mt=(t,n)=>t===null?n>0?Me:null:t+n<Me?null:Math.min(be,t+n),Te=A` .ms-stepper{--ms-local:var(--ms-surface-card);display:inline-grid;flex:none;grid-template-columns:var(--ms-control) minmax(3rem,4.5rem) var(--ms-control);gap:var(--ms-space-1);align-items:center;border:1px solid var(--ms-line-strong);border-radius:var(--ms-radius-sm);background:var(--ms-local)}.ms-stepper--readonly{grid-template-columns:minmax(3rem,4.5rem)}.ms-stepper .ms-btn{border-radius:calc(var(--ms-radius-sm) - 1px)}.ms-stepper input{inline-size:100%;min-inline-size:0;min-block-size:var(--ms-control);margin:0;padding:0;border:0;border-radius:var(--ms-radius-xs);color:var(--ms-text);background:transparent;font:inherit;font-size:var(--ms-t-md);font-weight:var(--ms-w-medium);font-variant-numeric:tabular-nums;text-align:center;appearance:textfield;-moz-appearance:textfield}.ms-stepper input::-webkit-inner-spin-button,.ms-stepper input::-webkit-outer-spin-button{margin:0;appearance:none;-webkit-appearance:none}.ms-stepper input::placeholder{color:var(--ms-text-quiet);font-weight:var(--ms-w-medium);opacity:1}.ms-stepper input:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px}.ms-stepper input[readonly]{color:var(--ms-text-quiet)}@media (forced-colors:active){.ms-stepper{border:1px solid CanvasText}}`,Tt=t=>{let{id:n,t:e,value:a}=t,s=t.heldBy!==null,o=i`<input
id=${n}
type="number"
inputmode="numeric"
min="1"
max=${be}
step="1"
placeholder=${e("v4_cadence_off","Off")}
aria-labelledby=${t.labelId}
aria-describedby=${t.describedBy??l}
aria-disabled=${s&&!t.readonly?"true":l}
?readonly=${t.readonly||s}
.value=${a===null?"":String(a)}
@change=${c=>{let d=c.currentTarget,m=t.readonly||s?a:Pt(d.value,d.validity.badInput,a);d.value=m===null?"":String(m),m!==a&&t.commit(m)}}
>`;if(t.readonly)return i`<span class="ms-stepper ms-stepper--readonly">${o}</span>`;let r=c=>{let m=(c<0?a===null:a===be)?c<0?e("v4_cadence_stepper_off_reason","This schedule is already off."):e("v4_cadence_stepper_max_reason","Every 100 cleans is the longest schedule."):null,p=`${n}-${c<0?"min":"max"}`,u=c<0?e("v4_stepper_decrease","Decrease {label}",{label:t.label}):e("v4_stepper_increase","Increase {label}",{label:t.label});return i`<button
class="ms-btn ms-btn--icon"
type="button"
aria-label=${u}
aria-controls=${n}
aria-disabled=${m||s?"true":l}
aria-describedby=${[m?p:null,t.heldBy].filter(Boolean).join(" ")||l}
title=${m??l}
@click=${()=>{!m&&!s&&t.commit(Mt(a,c))}}
>${y(c<0?xe:G)}${m?i`<span class="sr-only" id=${p}>${m}</span>`:l}</button>`};return i`<span class="ms-stepper">${r(-1)}${o}${r(1)}</span>`};var X=["vacuum","mop","vacuum_and_mop"],K=["quick","standard","heavy_duty"],Y=(t,n)=>n==="vacuum"?t("vacuum","Vacuum"):n==="mop"?t("mop","Mop"):t("vacuum_and_mop","Vacuum + mop"),U=(t,n)=>n==="quick"?t("quick","Quick"):n==="standard"?t("standard","Optimal"):t("heavy_duty","Heavy duty"),At=t=>t("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."),zt=(t,n)=>{if(n.includes("coverage_requires_vacuum"))return At(t);if(n.includes("identity_changed")||n.includes("room_not_on_current_map"))return t("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(n.includes("shared_schedule_unavailable"))return t("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(n.includes("mop_progress_unverified")||n.includes("coverage_progress_unverified")){let e=[];return n.includes("mop_progress_unverified")&&e.push(t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),n.includes("coverage_progress_unverified")&&e.push(t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),e.join(" ")}return n.includes("invalid_cadence_policy")?t("v4_cadence_policy_invalid","The room schedule needs review before it can be applied."):null},ia={scope:"shared",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1},ze=t=>!!(t&&(t.mopEveryN!==null||t.coverageEveryN!==null)),la={quick:(t,n,e)=>n===null?t("v4_cadence_coverage_quick_off","Quick vacuum"):e?t("v4_cadence_coverage_quick_one","Quick vacuum every clean"):t("v4_cadence_coverage_quick","Quick vacuum every {count} cleans",{count:n}),standard:(t,n,e)=>n===null?t("v4_cadence_coverage_optimal_off","Optimal vacuum"):e?t("v4_cadence_coverage_optimal_one","Optimal vacuum every clean"):t("v4_cadence_coverage_optimal","Optimal vacuum every {count} cleans",{count:n}),heavy_duty:(t,n,e)=>n===null?t("v4_cadence_coverage_heavy_off","Heavy duty vacuum"):e?t("v4_cadence_coverage_heavy_one","Heavy duty vacuum every clean"):t("v4_cadence_coverage_heavy","Heavy duty vacuum every {count} cleans",{count:n})},ca={quick:(t,n)=>n?t("v4_cadence_next_mop_quick","Mop and quick vacuum on the next clean"):t("v4_cadence_next_quick","Quick vacuum on the next clean"),standard:(t,n)=>n?t("v4_cadence_next_mop_optimal","Mop and optimal vacuum on the next clean"):t("v4_cadence_next_optimal","Optimal vacuum on the next clean"),heavy_duty:(t,n)=>n?t("v4_cadence_next_mop_heavy","Mop and heavy duty vacuum on the next clean"):t("v4_cadence_next_heavy","Heavy duty vacuum on the next clean")},da=(t,n,e)=>e===null?t("v4_cadence_mop_off","Mop"):e===1?t("v4_cadence_mop_interval_one","Mop every clean"):t("v4_cadence_mop_interval","Mop every {count} cleans",{count:C(n,e)}),ma=(t,n,e,a)=>la[e](t,a===null?null:C(n,a),a===1),pa=["identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy"],fe=({room:t,saved:n,catalogRoom:e})=>{let a=t.cadence??ia,s=e?.sharedCadence,o=s===void 0&&(e?.sharedCadenceReasons?.length??0)>0,r=s!==void 0||o,c=n?.cadence?.scope==="shared",d=s!==void 0&&!c&&t.cadence?.scope==="shared";return{policy:a,shared:s,sharedExists:r,participating:c,joinPending:d,progress:d?e?.sharedCadenceProgress:t.cadenceProgress,reasons:d?e?.sharedCadenceReasons??[]:t.cadenceReasons??[],savedPolicy:n?.cadence,savedProgress:n?.cadenceProgress,sharedFits:!s||(s.mopEveryN===null||t.cleaningMode==="vacuum")&&(s.coverageEveryN===null||t.cleaningMode!=="mop"),sharedBroken:o}},Q={mop:{every:"mopEveryN",flag:"doMopNext",next:"nextMopIn",count:"mopProgress"},coverage:{every:"coverageEveryN",flag:"doCoverageNext",next:"nextCoverageIn",count:"coverageProgress"}},Lt=(t,n)=>!!(t.joinPending?t.shared:t.savedPolicy)?.[Q[n].flag],Ke=t=>!t.joinPending&&t.savedPolicy!==void 0&&t.savedPolicy.scope!==t.policy.scope,Nt=(t,n)=>{let{every:e,flag:a,next:s,count:o}=Q[n],r=t.policy[e];if(!t.progress||r===null)return null;if(!(!t.joinPending&&(Ke(t)||r!==(t.savedPolicy?.[e]??null)||t.policy[a]!==Lt(t,n))))return t.progress[s];let d=Ke(t)?0:t.progress[o];return t.policy[a]||d>=r-1?1:r-d},ua=(t,n)=>{let e=Q[n].every,a=t.savedPolicy?.[e]??null;return!t.joinPending&&a!==null&&t.policy[e]!==null&&t.policy[e]!==a},Le=(t,n)=>{let e=t.policy[Q[n].every];return e!==null&&e>1&&(Lt(t,n)||Nt(t,n)!==1)},Dt=({room:t},n)=>({mop:!n.reasons.includes("mop_progress_unverified")&&t.cleaningMode!=="vacuum"&&n.policy.mopEveryN===null,coverage:!n.reasons.includes("coverage_progress_unverified")&&t.cleaningMode==="mop"}),It=(t,n,e,a)=>{let s=e.policy[Q[a].every],o=Nt(e,a);return s===null?t("v4_cadence_status_off","Not scheduled"):s===1?t("v4_cadence_status_every","Due every clean"):e.policy[Q[a].flag]||o===1?t("v4_cadence_status_next","Due next clean"):ua(e,a)?t("v4_cadence_status_edited","Keeps the progress so far"):Ke(e)||o===null?null:t("v4_cadence_status_in","Due in {count} cleans",{count:C(n,o)})},ha=(t,n,e)=>{let{policy:a,participating:s}=n,o=ze(a);if(n.joinPending)return t("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");if(s&&a.scope==="plan")return t("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule.");if(!s&&a.scope==="shared"&&o)return t("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero.");let r=["mop","coverage"].some(c=>a[Q[c].every]!==null&&(n.savedProgress?.[Q[c].count]??0)>0);return a.scope==="plan"&&o&&!ze(n.savedPolicy)&&!r?t("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):n.savedPolicy&&(a.mopEveryN!==n.savedPolicy.mopEveryN||a.coverageEveryN!==n.savedPolicy.coverageEveryN)?t("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."):s?t("v4_cadence_shared_edit_effect","Changes apply to every plan that uses {room}'s shared schedule.",{room:e}):null},va=(t,n,e)=>{let a=fe(e),{policy:s,reasons:o}=a,{room:r,saved:c,name:d}=e,m=s.coverageEveryN!==null,p=(m?null:e.offLevel)??s.periodicCoverageSetting??"heavy_duty",u=L=>o.includes(L),v=u("mop_progress_unverified"),{mop:g,coverage:b}=Dt(e,a),f=u("coverage_progress_unverified"),_=!f&&r.cleaningMode==="mop"&&m,h=pt(o.filter(L=>pa.includes(L)),d),w=s.doMopNext||s.doCoverageNext,E=w?s.doMopNext:Le(a,"mop"),k=w?s.doCoverageNext:Le(a,"coverage"),I=(L,ee,S)=>c!==void 0&&((L??0)>0||!!ee||!!c.cadenceReasons?.includes(S));return{policy:s,level:p,mop:{every:s.mopEveryN,label:da(t,n,s.mopEveryN),status:It(t,n,a,"mop"),reason:v?t("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):g?t("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum."):null,blocked:g,unverified:v},coverage:{every:s.coverageEveryN,label:ma(t,n,p,s.coverageEveryN),status:It(t,n,a,"coverage"),reason:f?t("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):_?At(t):b?t("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming."):null,blocked:b,unverified:f},legacyCoverage:_,roomReason:h?t(h.reasonKey,h.reason,h.reasonPlaceholders):null,sharedHint:a.shared!==void 0&&a.sharedFits&&!a.participating&&s.scope==="shared"&&!ze(s),joinPending:a.joinPending,participating:a.participating,next:E||k?{label:k?ca[p](t,E):t("v4_cadence_next_mop","Mop on the next clean"),on:w,mop:E,coverage:k,blocked:E&&g?"mop":k&&b?"coverage":null}:null,explanation:ha(t,a,d),scope:s.scope,resettable:{mop:I(c?.cadenceProgress?.mopProgress,c?.cadence?.doMopNext,"mop_progress_unverified"),coverage:I(c?.cadenceProgress?.coverageProgress,c?.cadence?.doCoverageNext,"coverage_progress_unverified")},sharedReason:Ue(a)?a.sharedBroken?t("v4_cadence_shared_broken_reason","Can't count across all plans until you fix this room's shared schedule in a plan that uses it."):t("v4_cadence_shared_mode_reason","Can't count across all plans until this room's cleaning mode works with its shared schedule."):null}},Wt=t=>t.shared&&t.sharedFits&&!t.participating?{...t.shared,scope:"shared"}:null,Ue=t=>t.sharedExists&&(!t.sharedFits||t.sharedBroken)&&!t.participating,Ht=(t,n,e)=>{let a=fe(t),{policy:s}=a;if(a.joinPending)return null;if(e!==null&&!ze(s)&&s.scope==="shared"){let r=Wt(a);if(r)return r;if(Ue(a))return Ht({...t,room:{...t.room,cadence:{...s,scope:"plan"}}},n,e)}let o=e!==null&&e>1;return n==="mop"?{...s,mopEveryN:e,doMopNext:o&&s.doMopNext}:e===null?{...s,coverageEveryN:null,doCoverageNext:!1}:s.coverageEveryN===null?{...s,coverageEveryN:e,periodicCoverageSetting:t.offLevel??s.periodicCoverageSetting??"heavy_duty"}:{...s,coverageEveryN:e,doCoverageNext:o&&s.doCoverageNext}},ga=(t,n)=>{let e=fe(t);return e.joinPending||e.policy.coverageEveryN===null?null:{...e.policy,periodicCoverageSetting:n}},_a=(t,n)=>{let e=fe(t);if(e.joinPending)return null;let a=Le(e,"mop"),s=Le(e,"coverage");if(!a&&!s&&!e.policy.doMopNext&&!e.policy.doCoverageNext)return null;let o=Dt(t,e);return n&&(a&&o.mop||s&&o.coverage)?null:n?{...e.policy,doMopNext:a,doCoverageNext:s}:{...e.policy,doMopNext:!1,doCoverageNext:!1}},ba=(t,n)=>{let e=fe(t);return n==="shared"&&Ue(e)?null:(n==="shared"?Wt(e):null)??{...e.policy,scope:n}},fa=t=>({...t,scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1}),ya=(t,n)=>n.planDraft.dirty?t("v4_reason_reset_unsaved","Can't reset until you save or cancel your changes."):n.command!=="idle"||n.managedLock||n.activity!=="idle"&&n.activity!=="docked"||n.dataMode!=="live"?t("v4_reason_reset_busy","Can't reset until the robot is idle and the map is live."):null,$a=(t,n,e,a)=>{let s=t.resources.plans.value,o=t.planDraft.id;return{room:n,saved:o?s?.plans.find(r=>r.id===o)?.rooms.find(r=>r.roomId===n.roomId):void 0,catalogRoom:s?.rooms.find(r=>r.roomId===n.roomId),name:e,offLevel:a}},Ae="\0",Ie=(t,n)=>{let[e,...a]=t.split(Ae);return a.length?i`${e}<bdi>${n}</bdi>${a.join(n)}`:t},qt=(t,n,e,a)=>{let{t:s,state:o,held:r}=t,c=o.planDraft,d=$a(o,n,a,t.offLevel),m=va(s,o.locale,{...d,name:Ae}),p=($,x,P="small")=>P==="p"?i`<p class="sched-status sched-reason" id=${$??l}>${y(M)}<span>${x}</span></p>`:i`<small class="sched-status sched-reason" id=${$??l}>${y(M)}<span>${x}</span></small>`,{policy:u,next:v}=m,g=$=>{if(!$||r)return;let x=c.rooms.map((P,R)=>R===e?{...P,cadence:$}:P);t.intent({type:"patch-plan-draft",patch:{rooms:x}})},b={disabled:r?"true":l,described:r??l},f=(...$)=>$.filter(Boolean).join(" ")||null,_=($,x)=>x.reason?p($,x.reason):x.status?i`<small class="sched-status" id=${$}>${x.status}</small>`:l,h=ya(s,o),w=!!(r||h),E=($,x,P,R=null)=>i`<button
class=${x}
type="button"
role=${R??l}
tabindex=${R?"-1":l}
aria-label=${$==="mop"?s("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:a}):s("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:a})}
aria-disabled=${w?"true":l}
aria-describedby=${r??(h?P:null)??l}
@click=${()=>{w||!c.id||(t.menu.close(!1),t.intent({type:"request-room-cadence-reset",planId:c.id,roomId:n.roomId,mode:$}))}}
>${$==="mop"?s("v4_reset_mop_cadence_button","Reset mopping"):s("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`,k=s("v4_room_more_named","More for {room}",{room:a}),{menu:I}=t,L=c.id&&(m.resettable.mop||m.resettable.coverage)?i`<div class="room-more" @keydown=${I.keydown} @focusout=${I.focusout}>
<button
class="ms-btn ms-btn--icon"
type="button"
aria-label=${k}
title=${k}
aria-haspopup="menu"
aria-expanded=${String(I.open)}
aria-disabled=${b.disabled}
aria-describedby=${b.described}
@click=${()=>{r||I.toggle()}}
>${y(ke)}</button>
${I.open&&!r?i`<div class="menu ms-surface ms-surface--overlay" @mousedown=${$=>$.preventDefault()}>
<div role="menu" aria-label=${k}>
${m.resettable.mop?E("mop","ms-row ms-row--menu","reset-reason","menuitem"):l}
${m.resettable.coverage?E("coverage","ms-row ms-row--menu","reset-reason","menuitem"):l}
</div>
${h?i`<div class="reason">${p("reset-reason",h,"p")}</div>`:l}
</div>`:l}
</div>`:l,ee=($,x,P)=>{let R=`sched-${$}`,he=x.reason||x.status?`${R}-status`:null;return i`<div class="sched-row">
<label class="sched-label" id=${`${R}-label`} for=${R}>${x.label}</label>
<div class="sched-controls">
${P}
${Tt({id:R,labelId:`${R}-label`,label:x.label,value:x.every,describedBy:f(he,r),heldBy:r??(x.blocked?he:null),readonly:m.joinPending,t:s,commit:$e=>g(Ht(d,$,$e))})}
</div>
${_(`${R}-status`,x)}
${x.unverified&&c.id?i`${E($,"ms-btn ms-btn--secondary",`${R}-reset-reason`)}
${h?p(`${R}-reset-reason`,h,"p"):l}`:l}
</div>`},S=r??(m.coverage.blocked?"sched-coverage-status":null),re=m.joinPending?l:i`<select
class="ms-select sched-level"
aria-label=${s("v4_cadence_level_named","Vacuum level for {room}",{room:a})}
aria-disabled=${S?"true":l}
aria-describedby=${S??l}
.value=${m.level}
@change=${$=>{let x=$.currentTarget;if(S){x.value=m.level;return}let P=x.value,R=ga(d,P);t.setOffLevel(R?null:P),R&&g(R)}}
>${K.map($=>i`<option value=${$} ?selected=${$===m.level}>${U(s,$)}</option>`)}</select>`;return i`<section class="schedule" role="group" aria-label=${s("v4_room_cadence_named","Room schedule for {room}",{room:a})}>
<div class="schedule-head"><h3>${s("v4_room_schedule","Schedule")}</h3>${L}</div>
${m.roomReason?p(null,Ie(m.roomReason,a),"p"):l}
${m.sharedHint?i`<p class="schedule-note">${Ie(s("v4_cadence_shared_available","{room} has a shared schedule, and turning on a row uses it.",{room:Ae}),a)}</p>`:l}
${ee("mop",m.mop,l)}
${ee("coverage",m.coverage,re)}
${m.legacyCoverage?i`<button
type="button"
class="ms-btn ms-btn--secondary sched-off"
aria-label=${s("v4_cadence_turn_off_named","Turn off the vacuum rotation in {room}",{room:a})}
aria-disabled=${b.disabled}
aria-describedby=${b.described}
@click=${()=>g(fa(u))}
>${s("v4_cadence_clear_room_coverage","Turn off")}</button>`:l}
${v?i`<div class="switch-row">
<span class="switch-copy">
<span id="sched-next-label">${v.label}</span>
<small id="sched-next-hint">${s("v4_cadence_next_hint","Brings it forward once; the schedule then continues as usual.")}</small>
</span>
<button
class="ms-switch"
type="button"
role="switch"
aria-checked=${String(v.on)}
aria-labelledby="sched-next-label"
aria-describedby=${f("sched-next-hint",r??(m.joinPending?"sched-join":v.blocked?`sched-${v.blocked}-status`:null))??l}
aria-disabled=${r||m.joinPending||v.blocked?"true":l}
@click=${()=>{v.blocked||g(_a(d,!v.on))}}
></button>
</div>`:l}
${m.joinPending?i`<p class="schedule-note" id="sched-join">${Ie(s("v4_cadence_join_pending",`Uses {room}'s shared schedule; change it after you save, or choose "In this plan only" under Advanced.`,{room:Ae}),a)}</p>`:l}
${m.explanation?i`<p class="schedule-note">${Ie(m.explanation,a)}</p>`:l}
<details class="advanced">
<summary>${s("v4_advanced","Advanced")}${y(O)}</summary>
<fieldset class="scope">
<legend>${s("v4_cadence_scope","Count cleans")}</legend>
${[["shared",s("v4_cadence_shared","Across all plans (recommended)")],["plan",s("v4_cadence_this_plan","In this plan only")]].map(([$,x])=>{let P=r??($==="shared"&&m.sharedReason?"sched-scope-reason":null);return i`<label class="scope-row"><input
type="radio"
name="sched-scope"
value=${$}
.checked=${m.scope===$}
aria-disabled=${P?"true":l}
aria-describedby=${P??l}
@change=${R=>{let he=P?null:ba(d,$);he?g(he):R.currentTarget.closest("fieldset")?.querySelectorAll("input").forEach($e=>{$e.checked=$e.value===m.scope})}}
><span>${x}</span></label>`})}
${m.sharedReason?p("sched-scope-reason",m.sharedReason,"p"):l}
</fieldset>
<p class="schedule-note">${s("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
</details>
</section>`},T=(t,n)=>n.cleaningMode==="mop"?t("v4_room_setting_mop","Mop"):n.cleaningMode==="vacuum"?n.coverageSetting==="quick"?t("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):t("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):n.coverageSetting==="quick"?t("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):n.coverageSetting==="standard"?t("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):t("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),wa={mop:(t,n)=>t("v4_room_schedules_mop","Mop every {mop} cleans",{mop:n}),mop_one:t=>t("v4_room_schedules_mop_one","Mop every clean"),quick:(t,n,e)=>t("v4_room_schedules_quick","Quick vacuum every {cov} cleans",{cov:e}),quick_one:t=>t("v4_room_schedules_quick_one","Quick vacuum every clean"),optimal:(t,n,e)=>t("v4_room_schedules_optimal","Optimal vacuum every {cov} cleans",{cov:e}),optimal_one:t=>t("v4_room_schedules_optimal_one","Optimal vacuum every clean"),heavy:(t,n,e)=>t("v4_room_schedules_heavy","Heavy duty vacuum every {cov} cleans",{cov:e}),heavy_one:t=>t("v4_room_schedules_heavy_one","Heavy duty vacuum every clean"),mop_quick:(t,n,e)=>t("v4_room_schedules_mop_quick","Mop every {mop} cleans \xB7 Quick vacuum every {cov} cleans",{mop:n,cov:e}),mop_quick_one_mop:(t,n,e)=>t("v4_room_schedules_mop_quick_one_mop","Mop every clean \xB7 Quick vacuum every {cov} cleans",{cov:e}),mop_quick_one_cov:(t,n)=>t("v4_room_schedules_mop_quick_one_cov","Mop every {mop} cleans \xB7 Quick vacuum every clean",{mop:n}),mop_quick_one_both:t=>t("v4_room_schedules_mop_quick_one_both","Mop every clean \xB7 Quick vacuum every clean"),mop_optimal:(t,n,e)=>t("v4_room_schedules_mop_optimal","Mop every {mop} cleans \xB7 Optimal vacuum every {cov} cleans",{mop:n,cov:e}),mop_optimal_one_mop:(t,n,e)=>t("v4_room_schedules_mop_optimal_one_mop","Mop every clean \xB7 Optimal vacuum every {cov} cleans",{cov:e}),mop_optimal_one_cov:(t,n)=>t("v4_room_schedules_mop_optimal_one_cov","Mop every {mop} cleans \xB7 Optimal vacuum every clean",{mop:n}),mop_optimal_one_both:t=>t("v4_room_schedules_mop_optimal_one_both","Mop every clean \xB7 Optimal vacuum every clean"),mop_heavy:(t,n,e)=>t("v4_room_schedules_mop_heavy","Mop every {mop} cleans \xB7 Heavy duty vacuum every {cov} cleans",{mop:n,cov:e}),mop_heavy_one_mop:(t,n,e)=>t("v4_room_schedules_mop_heavy_one_mop","Mop every clean \xB7 Heavy duty vacuum every {cov} cleans",{cov:e}),mop_heavy_one_cov:(t,n)=>t("v4_room_schedules_mop_heavy_one_cov","Mop every {mop} cleans \xB7 Heavy duty vacuum every clean",{mop:n}),mop_heavy_one_both:t=>t("v4_room_schedules_mop_heavy_one_both","Mop every clean \xB7 Heavy duty vacuum every clean")},Ot=(t,n,e)=>{let a=e?.mopEveryN??null,s=e?.coverageEveryN??null;if(a===null&&s===null)return null;let o=e?.periodicCoverageSetting,r=o==="quick"?"quick":o==="heavy_duty"?"heavy":"optimal",c=a===null?`${r}${s===1?"_one":""}`:s===null?`mop${a===1?"_one":""}`:`mop_${r}${a===1&&s===1?"_one_both":a===1?"_one_mop":s===1?"_one_cov":""}`,d=wa[c];return d?d(t,a===null?"":C(n,a),s===null?"":C(n,s)):null};var Z=class{constructor(n,e,a){this.host=n;this.root=e;this.launcher=a;this.open=!1;this.#a=!1;this.keydown=n=>{if(!this.open)return;if(n.key==="Escape"){n.preventDefault(),this.close(!0);return}let e=[...this.host.renderRoot.querySelectorAll(`${this.root} [role^=menuitem]`)],a=e.indexOf(n.composedPath()[0]),s=n.key==="ArrowDown"?a+1:n.key==="ArrowUp"?a-1:n.key==="Home"?0:n.key==="End"?e.length-1:null;s===null||a<0||!e.length||(n.preventDefault(),e[(s+e.length)%e.length]?.focus())};this.focusout=n=>{let e=n.relatedTarget;e&&!n.currentTarget.contains(e)&&this.#s(!1)};this.#t=n=>{let e=this.host.renderRoot.querySelector(this.root);this.open&&e&&!n.composedPath().includes(e)&&this.#s(!1)};n.addController(this)}hostConnected(){window.addEventListener("pointerdown",this.#t,!0)}hostDisconnected(){window.removeEventListener("pointerdown",this.#t,!0)}hostUpdated(){this.#a&&(this.#a=!1,this.host.renderRoot.querySelector(`${this.root} [role^=menuitem]`)?.focus())}#a;#s(n){n!==this.open&&(this.open=n,this.#a=n,this.host.requestUpdate())}toggle(){this.#s(!this.open)}close(n){this.#s(!1),n&&this.host.renderRoot.querySelector(`${this.root} ${this.launcher}`)?.focus()}#t};var Ge=class extends D{constructor(){super(...arguments);this.state=N();this.#t=new Z(this,".more","> button")}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[W,H,q,A` :host{display:contents}.more{position:relative;margin-inline-start:auto}.more>.ms-btn{transition:none}.reason{flex-basis:100%;margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug);text-align:end}.menu{position:absolute;z-index:18;inset-block-start:calc(100% + var(--ms-space-1));inset-inline-end:0;display:grid;min-inline-size:14rem;padding:var(--ms-space-1)}.menu .ms-row{justify-content:flex-start;inline-size:100%}.menu .reason{padding:var(--ms-space-1) var(--ms-space-3);text-align:start}`]}#a(e,a,s){return z(this.localize,e,a,s)}#s(e,a=this){a.dispatchEvent(new CustomEvent(B,{detail:e,bubbles:!0,composed:!0}))}#t;willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this.#t.open=!1)}#e(){let{command:e,pendingAction:a,planDraft:s}=this.state;return a==="save-plan"?this.#a("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):s.dirty?this.#a("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes."):e==="pending"?this.#a("v4_reason_robot_operation_waiting","Waiting for the robot to finish what it's doing."):null}#o(e){if(this.#e())return;let a=e.currentTarget.closest(".more")?.querySelector("button");this.#t.close(!1),this.#s({type:"open-dialog",dialog:"confirmDeletePlan"},a??this)}render(){let{planView:e,planDraft:a,pendingAction:s}=this.state;if(e==="run"){let r=s==="save-plan"?this.#a("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):s==="run-plan"?this.#a("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return i`
<button
class="ms-btn ms-btn--secondary"
type="button"
aria-label=${this.#a("v4_edit_plan_named","Edit {plan}",{plan:a.name})}
aria-disabled=${r?"true":l}
aria-describedby=${r?"edit-reason":l}
@click=${()=>{r||this.#s({type:"set-plan-view",view:"edit"})}}
>${this.#a("v4_edit","Edit")}</button>
${r?i`<p class="reason" id="edit-reason">${r}</p>`:l}
`}if(!ie(this.state,"confirmDeletePlan"))return l;let o=this.#e();return i`
<div class="more" @keydown=${this.#t.keydown} @focusout=${this.#t.focusout}>
<button
class="ms-btn ms-btn--icon"
type="button"
aria-label=${this.#a("v4_more_actions","More actions")}
aria-haspopup="menu"
aria-expanded=${String(this.#t.open)}
data-dialog-launcher="confirmDeletePlan"
@click=${()=>this.#t.toggle()}
>${y(ke)}</button>
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
`}};customElements.get(ge)||customElements.define(ge,Ge);var ka=(t,n,e)=>i`${t.planView==="run"?i`<bdi>${n}</bdi>`:n}${t.planDraft.dirty?i` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:l}`,Vt=le(ge),xa=(t,n,e)=>ce`<${Vt}
.state=${t}
.localize=${n}
@matic-workspace-intent=${e}
></${Vt}>`,Bt=(t,n,e,a)=>{let s=a?.room;if(s===void 0)return t(n,e,a);let[o,r]=t(n,e,{...a,room:"\0"}).split("\0");return i`${o}<bdi>${s}</bdi>${r}`},Qe=(t,n,e,a)=>{let s=e?n.jump:void 0;return i`${Bt(t,n.reasonKey??"",n.reason??"",n.reasonPlaceholders)}${s?i` <button
class="ms-btn action-jump"
type="button"
@click=${()=>a({type:"set-plan-view",view:"edit",roomId:s.roomId})}
>${Bt(t,s.labelKey,s.label,s.labelPlaceholders)}</button>`:l}`},Sa=(t,n,e,a)=>{let s=t.pendingAction==="save-plan",o=n?.id==="save-plan"?"primary-reason":"cancel-reason";return i`
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
`},Ra=(t,n,e)=>i`
<button
class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
type="button"
data-dialog-launcher="discardDraft"
@click=${a=>e(jt(t),a.currentTarget)}
>${n("v4_cancel","Cancel")}</button>
`,jt=t=>t.areaDraft.id!==null?{type:"select-area",areaId:t.areaDraft.id,workflow:"areaReview"}:{type:"open-workflow",workflow:"areas"},Ca=(t,n,e)=>{let a=e.querySelector(se)?.shadowRoot;if(t.workflow==="draw"&&n.workflow==="areaReview")return t.areaDraft.id!==null?e.querySelector("[data-redraw]")??a?.querySelector("[data-redraw]"):null;if(n.workflow==="areas"){let r=t.areaDraft.id;return r&&a?.querySelector(`[data-area-row="${CSS.escape(r)}"]`)||a?.querySelector("[data-area-new]")}if(t.workflow==="draw")return null;let s=a?.querySelector(j)?.shadowRoot;if(n.workflow==="plan"&&n.planView==="edit"&&n.expandedRoom)return s?.querySelector(`[data-room-disclosure="${CSS.escape(n.expandedRoom)}"]`);if(n.workflow==="plan"&&t.planView==="edit")return e.querySelector(ge)?.shadowRoot?.querySelector("button");let o=t.selection.planId;return n.workflow==="plans"&&o?s?.querySelector(`[data-plan-row="${CSS.escape(o)}"]`):null},Ea=(t,n,e,a)=>{let s=Ca(t,n,e);return a(s)?(s.scrollIntoView({block:"nearest"}),s.focus({preventScroll:!0}),!0):!1};var Pa=(t,n)=>Be({...t,workflow:"plan",planView:"run",selection:{...t.selection,planId:n.id},planDraft:we(n)}),Ma=(t,n)=>Be({...t,...it(t,n.id),workflow:"areaReview"}),Ta={label:"",kind:"primary",enabled:!1,id:"check-area",reason:"Can't clean this area until you check it.",reasonKey:"v4_reason_check_area"},Ft=(t,n,e,a,s,o,r,c)=>{let{t:d,held:m}=t,p=!m&&o?.id===r&&o.enabled,u=m||p?null:o,[v="",g=""]=a.split("\0");return i`<button
class="ms-row ms-row--card shortcut"
type="button"
data-launcher=${`run:${n.kind}:${n.id}`}
aria-disabled=${p?l:"true"}
aria-describedby=${m?"home-reason":l}
@click=${()=>{p&&t.run(n)}}
>
<span class="ms-row__lead">${y($t)}</span>
<span class="ms-row__body">
<strong class="card-title"><span class="card-name">${v}<bdi>${e}</bdi>${g}</span>${c}</strong>
${s}
${u?.reason?i`<span class="card-lines"><span class="line" data-tone="warning">${y(M)}${Qe(d,u,!1,t.emit)}</span></span>`:l}
</span>
</button>`},Ia=(t,n,e)=>{let{t:a,state:s}=t,o=Pa(s,e),r=e.enabled?oe(a,s.locale,e.nextRunPreview?.rooms??[]):[];return Ft(t,n,e.name,a("v4_run_named_plan","Run {plan}",{plan:"\0"}),i`<small>${Pe(a,s.locale,e)}</small>${r.length?i`<span class="card-lines">${r.map(c=>i`<span class="line">${y(ne)}${c}</span>`)}</span>`:l}`,"label"in o?o:null,"run-plan",e.enabled?l:i`<span class="ms-chip">${a("v4_paused","Paused")}</span>`)},Aa=(t,n,e)=>{let{t:a,state:s}=t,o=Ma(s,e);return Ft(t,n,e.name,a("v4_clean_named_area","Clean {area}",{area:"\0"}),i`<small>${T(a,e)}</small>`,"label"in o?o.id==="save-area"?Ta:o:null,"run-area",l)},za=t=>{let{state:n,t:e}=t,a=n.resources.plans.value?.plans??[],s=n.resources.areas.value?.areas??[],o=n.homePins.pins.flatMap(r=>{if(r.kind==="plan"){let d=a.find(m=>m.id===r.id);return d?[Ia(t,r,d)]:[]}let c=s.find(d=>d.id===r.id);return c?[Aa(t,r,c)]:[]});return!o.length&&n.homePins.status!=="error"?l:i`${o}${n.homePins.status==="error"?i`<p class="pins-error">${e("v4_shortcuts_unavailable","Home Assistant couldn't load your home shortcuts.")} <button
class="ms-btn ms-btn--secondary"
type="button"
@click=${()=>t.emit({type:"reload-home-pins"})}
>${e("v4_retry","Try again")}</button></p>`:l}`},Ne=(t,n,e,a)=>{let{status:s,pins:o}=n.homePins;if(s==="unavailable")return l;let r=o.some(d=>d.kind===e.kind&&d.id===e.id),c=s==="ready"?null:s==="error"?t("v4_reason_shortcuts_unavailable","Can't change this until you choose Try again on the home screen."):t("v4_reason_shortcuts_loading","Waiting for Home Assistant to load your home shortcuts.");return i`
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
aria-describedby=${c?"pin-hint pin-reason":"pin-hint"}
aria-disabled=${c?"true":l}
@click=${()=>{c||a({type:"set-home-pin",pin:e,pinned:!r})}}
></button>
</div>
${c?i`<p class="reason" id="pin-reason">${c}</p>`:l}
`};var Kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ut=t=>(...n)=>({_$litDirective$:t,values:n}),De=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,e,a){this._$Ct=n,this._$AM=e,this._$Ci=a}_$AS(n,e){return this.update(n,e)}update(n,e){return this.render(...e)}};var{I:La}=vt,Gt=t=>t;var Qt=()=>document.createComment(""),de=(t,n,e)=>{let a=t._$AA.parentNode,s=n===void 0?t._$AB:n._$AA;if(e===void 0){let o=a.insertBefore(Qt(),s),r=a.insertBefore(Qt(),s);e=new La(o,r,t,t.options)}else{let o=e._$AB.nextSibling,r=e._$AM,c=r!==t;if(c){let d;e._$AQ?.(t),e._$AM=t,e._$AP!==void 0&&(d=t._$AU)!==r._$AU&&e._$AP(d)}if(o!==s||c){let d=e._$AA;for(;d!==o;){let m=Gt(d).nextSibling;Gt(a).insertBefore(d,s),d=m}}}return e},J=(t,n,e=t)=>(t._$AI(n,e),t),Na={},Xt=(t,n=Na)=>t._$AH=n,Yt=t=>t._$AH,We=t=>{t._$AR(),t._$AA.remove()};var Zt=(t,n,e)=>{let a=new Map;for(let s=n;s<=e;s++)a.set(t[s],s);return a},Xe=Ut(class extends De{constructor(t){if(super(t),t.type!==Kt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,n,e){let a;e===void 0?e=n:n!==void 0&&(a=n);let s=[],o=[],r=0;for(let c of t)s[r]=a?a(c,r):r,o[r]=e(c,r),r++;return{values:o,keys:s}}render(t,n,e){return this.dt(t,n,e).values}update(t,[n,e,a]){let s=Yt(t),{values:o,keys:r}=this.dt(n,e,a);if(!Array.isArray(s))return this.ut=r,o;let c=this.ut??=[],d=[],m,p,u=0,v=s.length-1,g=0,b=o.length-1;for(;u<=v&&g<=b;)if(s[u]===null)u++;else if(s[v]===null)v--;else if(c[u]===r[g])d[g]=J(s[u],o[g]),u++,g++;else if(c[v]===r[b])d[b]=J(s[v],o[b]),v--,b--;else if(c[u]===r[b])d[b]=J(s[u],o[b]),de(t,d[b+1],s[u]),u++,b--;else if(c[v]===r[g])d[g]=J(s[v],o[g]),de(t,s[u],s[v]),v--,g++;else if(m===void 0&&(m=Zt(r,g,b),p=Zt(c,u,v)),m.has(c[u]))if(m.has(c[v])){let f=p.get(r[g]),_=f!==void 0?s[f]:null;if(_===null){let h=de(t,s[u]);J(h,o[g]),d[g]=h}else d[g]=J(_,o[g]),de(t,s[u],_),s[f]=null;g++}else We(s[v]),v--;else We(s[u]),u++;for(;g<=b;){let f=de(t,d[b+1]);J(f,o[g]),d[g++]=f}for(;u<=v;){let f=s[u++];f!==null&&We(f)}return this.ut=r,Xt(t,d),ht}});var Ye=100,Da=["mop_progress_unverified","coverage_progress_unverified","identity_changed","room_not_on_current_map","shared_schedule_unavailable","invalid_cadence_policy","coverage_requires_vacuum"],Ze=class extends D{constructor(){super(...arguments);this._moved="";this.#a=null;this.#s=new Map;this.#t=new Z(this,".room-more","> button");this.state=N();this.#e=(e,a,s)=>z(this.localize,e,a,s)}static{this.styles=[W,H,q,F,Te,A` :host{display:block}.plain{display:grid;gap:var(--ms-space-2);margin:0;padding:0;list-style:none}.plan-row .ms-row__body{display:grid;gap:.125rem}.plan-row .plan-title{display:flex;gap:var(--ms-space-1) var(--ms-space-2);align-items:center;min-inline-size:0}.plan-row .plan-title bdi{overflow:hidden;min-inline-size:0;text-overflow:ellipsis;white-space:nowrap}.plan-row .plan-title .ms-chip{flex:none}.chip-default{border-color:transparent;background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-surface-card))}.chip-attention{border-color:transparent;background:color-mix(in srgb,var(--ms-danger) 12%,var(--ms-surface-card))}.lines{display:grid;gap:.125rem;margin:0;color:var(--ms-text);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.line{display:flex;gap:var(--ms-space-1);align-items:flex-start;margin:0;color:var(--ms-text)}.line .ms-icon{inline-size:1rem;block-size:1rem;color:var(--ms-resolved-indicator,var(--ms-accent))}.line[data-tone="warning"] .ms-icon{color:var(--ms-warning)}.plan-row .ms-row__trail:dir(rtl) .ms-icon{scale:-1 1}.empty-card{display:grid;gap:var(--ms-space-2);padding:var(--ms-space-4);border:1px solid var(--ms-line);border-radius:var(--ms-radius-md)}.empty-card h3{margin:0;font-size:var(--ms-t-md)}.empty-card p{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-md);line-height:var(--ms-lh-normal)}.empty-card .ms-btn{justify-self:start}.quiet{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.heading{margin:var(--ms-space-4) 0 var(--ms-space-2);color:var(--ms-text-quiet);font-size:var(--ms-t-md);font-weight:var(--ms-w-bold);line-height:var(--ms-lh-tight)}.summary{margin:0 0 var(--ms-space-2);color:var(--ms-text-quiet);font-size:var(--ms-t-md);line-height:var(--ms-lh-snug)}.run-list{display:grid;margin:0 0 var(--ms-space-3);padding:0;list-style:none}.run-row{display:flex;gap:var(--ms-space-3);align-items:flex-start;padding-block:var(--ms-space-2);border-block-end:1px solid var(--ms-line)}.run-row:last-child{border-block-end:0}.run-row[data-break]{margin-block-start:var(--ms-space-3);padding-block-start:var(--ms-space-3);border-block-start:2px dashed var(--ms-line-strong)}.row-lines{display:grid;flex:1;gap:.125rem;min-inline-size:0}.row-lines bdi{overflow:hidden;font-weight:var(--ms-w-bold);text-overflow:ellipsis;white-space:nowrap}.row-lines small{color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local,var(--ms-surface-card)));font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.row-lines .ms-chip{justify-self:start}.pos-badge{display:grid;flex:none;place-items:center;inline-size:1.5rem;block-size:1.5rem;border-radius:50%;background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-surface-card));font-size:var(--ms-t-xs);font-weight:var(--ms-w-bold);font-variant-numeric:tabular-nums}.problem{margin:0 0 var(--ms-space-2);padding:var(--ms-space-3);border-inline-start:3px solid var(--ms-danger);border-radius:var(--ms-radius-md);background:color-mix(in srgb,var(--ms-danger) 12%,var(--ms-surface-card));font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug)}.switch-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control)}.pin-setting{margin-block-start:var(--ms-space-3)}.pin-setting:empty{display:none}.switch-copy{display:grid;flex:1;gap:.125rem;min-inline-size:0;font-size:var(--ms-t-md)}.switch-copy small,.reason{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;padding:0;border:0;clip-path:inset(50%);white-space:nowrap}.edit{display:grid;gap:var(--ms-space-3)}.order{display:grid;gap:var(--ms-space-1);margin:0;padding:0;border:0;font-size:var(--ms-t-sm)}.order .ms-segment{padding:0}.order .ms-btn{flex:1}.list-header{display:flex;align-items:baseline;justify-content:space-between;gap:var(--ms-space-2)}.list-header .heading{margin:0}.list-header small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs)}.edit-row{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;padding:0}.edit-row:not([data-selected]){--ms-local:var(--ms-surface-card)}.edit-check{display:grid;place-items:center;inline-size:var(--ms-control);block-size:var(--ms-control);cursor:pointer}.edit-check input{inline-size:1.2rem;block-size:1.2rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent));cursor:pointer}.edit-disclosure{display:flex;gap:var(--ms-space-2);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-1);border:0;border-radius:var(--ms-radius-sm);color:inherit;background:transparent;font:inherit;text-align:start;cursor:pointer}.edit-disclosure:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px}.edit-disclosure>.ms-icon{flex:none;transition:rotate 120ms}.edit-disclosure[aria-expanded="true"]>.ms-icon{rotate:90deg}.edit-disclosure:dir(rtl)>.ms-icon{scale:-1 1}.edit-disclosure[aria-expanded="true"]:dir(rtl)>.ms-icon{rotate:-90deg}.edit-name{display:grid;gap:.125rem;min-inline-size:0;padding-inline:var(--ms-space-1)}.edit-name small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.edit-moves{display:flex}.row-expanded{display:grid;grid-column:1 / -1;gap:var(--ms-space-2);padding:var(--ms-space-3);border-block-start:1px solid var(--ms-line)}.run-end{display:grid;gap:var(--ms-space-2)}.run-end>summary{min-block-size:var(--ms-control);align-content:center;font-weight:var(--ms-w-bold);cursor:pointer}.threshold{display:grid;gap:var(--ms-space-1);font-size:var(--ms-t-md)}.threshold input{inline-size:100%;min-block-size:var(--ms-control-sm);accent-color:var(--ms-resolved-indicator,var(--ms-accent))}.subtle{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2)}.schedule{display:grid;gap:var(--ms-space-3);min-inline-size:0;margin-block-start:var(--ms-space-2)}.schedule-head{display:flex;align-items:center;gap:var(--ms-space-2)}.schedule-head h3{flex:1;margin:0;font-size:var(--ms-t-md);font-weight:var(--ms-w-bold)}.sched-row{display:grid;gap:var(--ms-space-1);justify-items:start;min-inline-size:0}.sched-label{font-size:var(--ms-t-md);font-weight:var(--ms-w-medium)}.sched-controls{display:flex;flex-wrap:wrap;gap:var(--ms-space-3);align-items:center}.sched-level{flex:none;inline-size:9rem;block-size:var(--ms-control);font-size:var(--ms-t-md)}.sched-status{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.sched-reason{display:flex;gap:var(--ms-space-1);align-items:flex-start;color:var(--ms-text)}.sched-reason .ms-icon{flex:none;inline-size:1rem;block-size:1rem;color:var(--ms-warning)}.sched-off,.sched-row>.ms-btn{justify-self:start}.room-more{position:relative}.room-more .menu{position:absolute;z-index:18;inset-block-start:calc(100% + var(--ms-space-1));inset-inline-end:0;display:grid;min-inline-size:14rem;padding:var(--ms-space-1)}.room-more .menu .ms-row{justify-content:flex-start;inline-size:100%}.room-more .reason{padding:var(--ms-space-1) var(--ms-space-3)}.advanced>summary{display:flex;gap:var(--ms-space-2);align-items:center;min-block-size:var(--ms-control);font-weight:var(--ms-w-medium);list-style:none;cursor:pointer}.advanced>summary::-webkit-details-marker{display:none}.advanced>summary .ms-icon{inline-size:1.25rem;block-size:1.25rem}.advanced[open]>summary .ms-icon{rotate:90deg}.advanced>summary:dir(rtl) .ms-icon{scale:-1 1}.advanced[open]>summary:dir(rtl) .ms-icon{rotate:-90deg}.advanced>summary:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:2px;border-radius:var(--ms-radius-xs)}.scope{display:grid;margin:0 0 var(--ms-space-2);padding:0;border:0}.scope legend{padding:0;font-size:var(--ms-t-sm);font-weight:var(--ms-w-bold)}.scope-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control);font-size:var(--ms-t-md);cursor:pointer}.scope-row input{flex:none;inline-size:1.2rem;block-size:1.2rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent))}.schedule-note{margin:0;color:var(--ms-text);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}@media (forced-colors:active){.row-expanded{forced-color-adjust:auto;color:CanvasText;background:Canvas}.edit-row .row-lines small{color:inherit}}@media (max-width:25rem){.split{grid-template-columns:1fr}}`]}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_moved:{state:!0}}}#a;#s;#t;#e;#o(e){this.dispatchEvent(new CustomEvent(B,{detail:e,bubbles:!0,composed:!0}))}#n(e){return C(this.state.locale,e)}#l(e){return e.length?i`<span class="lines">${e.map(a=>i`<span class="line">${y(ne)}<span>${a}</span></span>`)}</span>`:l}#m(e,a){let s=Pe(this.#e,this.state.locale,e),o=Et(this.#e,this.state.locale,e),r=o===null?l:"blocked"in o?i`<span class="lines"><span class="line" data-tone="warning">${y(M)}<span>${o.blocked}</span></span></span>`:this.#l(o.due),c=this.#e("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return i`<li>
<button
class="ms-row ms-row--card plan-row"
type="button"
data-plan-row=${e.id}
aria-describedby=${a?"default-hint":l}
@click=${()=>this.#o({type:"select-plan",planId:e.id})}
>
<span class="ms-row__body">
<strong class="plan-title"><bdi>${e.name}</bdi>${a?i`<span class="ms-chip chip-default" title=${c}>${this.#e("v4_plan_default","Default")}</span>`:l}${e.enabled?l:i`<span class="ms-chip">${this.#e("v4_paused","Paused")}</span>`}</strong>
<small>${s}</small>
${r}
</span>
<span class="ms-row__trail">${y(O)}</span>
</button>
${a?i`<span class="sr-only" id="default-hint">${c}</span>`:l}
</li>`}#p(){let e=this.state.resources.plans.value,a=this.#e("v4_create_plan","Create a plan");if(!e?.plans.length)return i`<div class="empty-card">
<h3>${this.#e("v4_no_plans","No plans yet")}</h3>
<p>${this.#e("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
<button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#o({type:"select-plan",planId:null})}>${a}</button>
</div>`;let s=[...e.plans].sort((o,r)=>+(r.id===e.selectedPlan)-+(o.id===e.selectedPlan));return i`<ul class="plain">
${s.map(o=>this.#m(o,o.id===e.selectedPlan))}
<li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#o({type:"select-plan",planId:null})}>
<span class="ms-row__lead">${y(G)}</span>
<span class="ms-row__body"><strong>${a}</strong></span>
</button></li>
</ul>`}#f(){let e=this.state;return e.pendingAction==="save-plan"?this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):e.pendingAction==="run-plan"?this.#e("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):ae(e)?this.#e("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#e("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):lt(e)?null:this.#e("v4_reason_save_plan_map","Waiting for the map to be ready.")}#r(){let e=this.state.planDraft.enabled,a=this.#f();return i`
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
`}#c(e,a,s,o={}){return i`<li class="run-row" ?data-break=${o.part!==void 0}>
${o.part===void 0?l:i`<span class="sr-only">${this.#e("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#n(o.part)})}</span>`}
${s===null?l:i`<span class="pos-badge" aria-hidden="true">${this.#n(s)}</span>`}
<span class="row-lines">
<bdi>${e}</bdi>
<small>${a}</small>
${o.blocked?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
</span>
</li>`}#u(){let e=this.state,a=e.planDraft,s=e.resources.plans.value,o=s?.plans.find(S=>S.id===a.id);if(!s||!o)return l;let r=o.nextRunPreview,c=r?.blocker??null,d=!a.enabled,m=!d&&!!(r&&!c&&/^[0-9a-f]{64}$/u.test(r.previewToken??"")),p=o.runBehavior==="ordered",u=m&&r?r.rooms:[],v=m&&r?r.steps??u:[],g=m?v.length-u.length:Re(o).length,b=!d&&c?ut(e,o)?.jump.roomId??null:null,f=d||m||b||e.pendingAction==="save-plan"?null:c&&mt[c]||dt,_=m?u.length:o.rooms.length,h=m?o.nextRunEstimateSeconds:null,w=h===null?"":this.#n(Math.max(1,Math.round(h/60))),E=_===1?this.#e("v4_plan_summary_rooms_one","1 room"):this.#e("v4_plan_summary_rooms","{count} rooms",{count:this.#n(_)}),k=g?Ee(this.#e,e.locale,_,g):h===null?E:_===1?this.#e("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:w}):this.#e("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#n(_),minutes:w}),I=m&&r?r.missionBoundaries:[],L=m?v.map((S,re)=>{let $=I.indexOf(re);return this.#c(S.name,T(this.#e,S),p?re+1:null,$<0?{}:{part:$+2})}):Rt(o,we(o).rooms.map(S=>this.#c(s.rooms.find(re=>re.roomId===S.roomId)?.name??S.roomId,T(this.#e,S),null,{blocked:S.roomId===b})),S=>this.#c(S.name,T(this.#e,S),null)),ee=a.finishCurrentRoom?this.#e("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#n(a.finishCurrentRoomThreshold)}):a.returnToBase?this.#e("v4_plan_summary_return","Returns to the dock when finished"):null;return i`
<p class="summary">${k}</p>
${this.#l(oe(this.#e,e.locale,u))}
<h3 class="heading">${d?this.#e("v4_plan_rooms_heading","Rooms in this plan"):e.resources.entry?.activePlan?this.#e("v4_next_run_after_active","After this run"):this.#e("v4_next_run_preview","Next run")}</h3>
${m&&!p?i`<p class="quiet">${this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}</p>`:l}
${I.length?i`<p class="quiet">${this.#e("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:this.#n(I.length+1)})}</p>`:l}
${f?i`<p class="problem">${this.#e(f.reasonKey,f.reason)}</p>
<button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#o({type:"open-workflow",workflow:"plan"})}>${this.#e("v4_retry","Try again")}</button>`:l}
${m&&p?i`<ol class="run-list" role="list">${L}</ol>`:i`<ul class="run-list" role="list">${L}</ul>`}
${this.#r()}
${ee?i`<p class="quiet">${ee}</p>`:l}
<div class="pin-setting">${Ne(this.#e,e,{kind:"plan",id:o.id},S=>this.#o(S))}</div>
`}willUpdate(e){e.has("state")&&(this.state.workflow!=="plan"||this.state.planView!=="edit")&&(this._moved="");let a=e.get("state");a&&(a.expandedRoom!==this.state.expandedRoom||this.state.planView!=="edit"||this.state.dialog||this.#d())&&(this.#t.open=!1),a&&(a.planDraft.id!==this.state.planDraft.id||a.workflow!==this.state.workflow||this.state.planView!=="edit")&&this.#s.clear()}updated(e){!this.#a||!e.has("state")||((this.renderRoot.querySelector(this.#a)??this.renderRoot.querySelector(".edit input[type=checkbox]"))?.focus(),this.#a=null)}#d(){return this.state.pendingAction==="save-plan"?"edit-held":null}#i(e){this.#d()||this.#o({type:"patch-plan-draft",patch:e})}#v(e,a){this.#i({rooms:this.state.planDraft.rooms.map((s,o)=>o===e?{...s,...a}:s)})}#g(e,a){this.#i({areas:this.state.planDraft.areas.map(s=>s.areaId===e?{...s,...a}:s)})}#_(e,a){let s=this.state.planDraft,o=s.parkedAreas??[],r=m=>m.filter(p=>p.areaId!==e),c=s.areas.find(m=>m.areaId===e);if(this.#d())return;if(c){this.#a=`[data-area-add="${CSS.escape(e)}"]`,this.#i({areas:r(s.areas),parkedAreas:[...r(o),c]});return}if(!a||s.areas.length>=Ye)return;let d=o.find(m=>m.areaId===e);this.#a=`[data-area-check="${CSS.escape(e)}"]`,this.#i({areas:[...s.areas,{areaId:e,name:a.name,cleaningMode:d?.cleaningMode??a.cleaningMode,coverageSetting:d?.coverageSetting??a.coverageSetting,slot:s.rooms.length}],parkedAreas:r(o)})}#y(e,a,s,o){let r=this.state.planDraft,c=Fe(r),d=e+a;if(this.#d()||d<0||d>=c.length)return;let[m]=c.splice(e,1);if(!m)return;c.splice(d,0,m),this.#a=`[data-move="${CSS.escape(o)}"]`,this._moved=s(this.#n(d+1));let{rooms:p,areas:u}=Ct(c);this.#o({type:"patch-plan-draft",patch:r.areas.length?{rooms:p,areas:u}:{rooms:p}})}#h(e){return{disabled:e?"true":l,described:e??l}}#b(e,a,s,o,r,c,d=!1){let m=`${e}:${o<0?"up":"down"}`,p=d?o<0?this.#e("v4_move_area_up","Move {area} earlier",{area:s}):this.#e("v4_move_area_down","Move {area} later",{area:s}):o<0?this.#e("move_room_up","Move {room} earlier",{room:s}):this.#e("move_room_down","Move {room} later",{room:s}),u=d?o<0?this.#e("v4_area_already_first","{area} is already first",{area:s}):this.#e("v4_area_already_last","{area} is already last",{area:s}):o<0?this.#e("v4_room_already_first","{room} is already first",{room:s}):this.#e("v4_room_already_last","{room} is already last",{room:s}),v=d?b=>this.#e("v4_area_moved","{area} moved to position {position}",{area:s,position:b}):b=>this.#e("v4_room_moved","{room} moved to position {position}",{room:s,position:b}),g=r?`${m}-end`:c;return i`<button
class="ms-btn ms-btn--icon"
type="button"
data-move=${m}
aria-label=${p}
title=${r?u:p}
aria-disabled=${r||c?"true":l}
aria-describedby=${g??l}
@click=${()=>{r||this.#y(a,o,v,m)}}
>${y(o<0?ft:yt)}</button>
${r?i`<span class="sr-only" id=${`${m}-end`}>${u}</span>`:l}`}#w(e,a,s,o,r,c,d,m,p){let u=s!==null&&this.state.expandedRoom===e,v=this.#h(p),g=s===null&&m,b=s?Ot(this.#e,this.state.locale,s.cadence):null,f=s?.cadenceReasons?.some(h=>Da.includes(h)),_=!!s?.cadence?.mopEveryN;return i`<li class="ms-row edit-row" data-selected=${s?"true":l}>
<label class="edit-check"><input
type="checkbox"
.checked=${s!==null}
aria-label=${this.#e("v4_room_include_named","Include {room}",{room:a})}
aria-disabled=${p||g?"true":l}
aria-describedby=${p??(g?"room-limit":l)}
@click=${h=>{(p||g)&&h.preventDefault()}}
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
${d?i`<span class="pos-badge" aria-hidden="true">${this.#n(r+1)}</span>`:l}
<span class="row-lines">
<bdi>${a}</bdi>
<small>${T(this.#e,s)}</small>
${b?i`<small>${b}</small>`:l}
${f?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>`:l}
</span>
${y(O)}
</button>`:i`<span class="edit-name"><bdi>${a}</bdi></span>`}
${s&&d?i`<span class="edit-moves">
${this.#b(e,r,a,-1,r===0,p)}
${this.#b(e,r,a,1,r===c,p)}
</span>`:i`<span></span>`}
${u&&s?i`<div class="row-expanded">
<div class="split">
<label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
<select
aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:a})}
aria-disabled=${v.disabled}
aria-describedby=${[p,_?"mode-reason":null].filter(Boolean).join(" ")||l}
.value=${s.cleaningMode}
@change=${h=>{let w=h.currentTarget;p?w.value=s.cleaningMode:this.#v(o,{cleaningMode:w.value})}}
>${X.map(h=>i`<option value=${h} ?selected=${h===s.cleaningMode} ?disabled=${_&&h!=="vacuum"}>${Y(this.#e,h)}</option>`)}</select>
</label>
<label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
<select
aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:a})}
aria-disabled=${v.disabled}
aria-describedby=${v.described}
?disabled=${s.cleaningMode==="mop"}
.value=${s.coverageSetting}
@change=${h=>{let w=h.currentTarget;p?w.value=s.coverageSetting:this.#v(o,{coverageSetting:w.value})}}
>${K.map(h=>i`<option value=${h} ?selected=${h===s.coverageSetting}>${U(this.#e,h)}</option>`)}</select>
</label>
</div>
${_?i`<p class="sched-status sched-reason" id="mode-reason">${y(M)}<span>${this.#e("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</span></p>`:l}
${s.cleaningMode==="vacuum"?l:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
${qt({t:this.#e,state:this.state,intent:h=>this.#o(h),held:p,offLevel:this.#s.get(e)??null,setOffLevel:h=>{h?this.#s.set(e,h):this.#s.delete(e),this.requestUpdate()},menu:this.#t},s,o,a)}
</div>`:l}
</li>`}#$(e,a,s,o,r,c){let d=[s?`${e}-hint`:"",r??""].filter(Boolean).join(" ");return i`<div class="switch-row">
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
aria-describedby=${d||l}
aria-disabled=${r?"true":l}
@click=${()=>{r||c(!o)}}
></button>
</div>`}#k(e){let a=this.state.resources.areas.value?.areas,s=a?.find(o=>o.id===e);return!a||s?.status==="current"?null:s?s.canRebind||s.status==="review"?this.#e("v4_area_row_check","Map changed \xB7 Check it before cleaning"):this.#e("v4_area_row_redraw","Redraw it before cleaning"):this.#e("v4_plan_area_missing","Not found \xB7 Remove it from this plan")}#x(e,a,s,o,r){let c=`area:${e.areaId}`,d=this.state.resources.areas.value?.areas.find(b=>b.id===e.areaId)?.name??e.name,m=this.state.expandedRoom===c,p=this.#h(r),u=this.#k(e.areaId),v=`${c}-problem`,g=[r,u?v:null].filter(Boolean).join(" ")||l;return i`<li class="ms-row edit-row" data-selected="true" data-plan-area=${e.areaId}>
<label class="edit-check"><input
type="checkbox"
data-area-check=${e.areaId}
.checked=${!0}
aria-label=${this.#e("v4_area_include_named","Include {area}",{area:d})}
aria-disabled=${p.disabled}
aria-describedby=${p.described}
@click=${b=>{r&&b.preventDefault()}}
@change=${()=>this.#_(e.areaId)}
></label>
<button
class="edit-disclosure"
type="button"
data-room-disclosure=${c}
aria-expanded=${String(m)}
aria-label=${this.#e("v4_area_settings_named","Settings for {area}",{area:d})}
aria-disabled=${p.disabled}
aria-describedby=${g}
@click=${()=>{r||this.#o({type:"set-plan-view",view:"edit",roomId:m?null:c})}}
>
${o?i`<span class="pos-badge" aria-hidden="true">${this.#n(a+1)}</span>`:l}
<span class="row-lines">
<bdi>${d}</bdi>
<small>${T(this.#e,e)}</small>
<small>${this.#e("v4_plan_area_every_run","Custom area \xB7 Every run")}</small>
${u?i`<span class="ms-chip chip-attention">${this.#e("v4_needs_attention","Needs attention")}</span>
<small id=${v}>${u}</small>`:l}
</span>
${y(O)}
</button>
${o?i`<span class="edit-moves">
${this.#b(c,a,d,-1,a===0,r,!0)}
${this.#b(c,a,d,1,a===s,r,!0)}
</span>`:i`<span></span>`}
${m?i`<div class="row-expanded">
<div class="split">
<label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
<select
aria-label=${this.#e("v4_area_cleaning_mode_named","Cleaning mode for {area}",{area:d})}
aria-disabled=${p.disabled}
aria-describedby=${p.described}
.value=${e.cleaningMode}
@change=${b=>{let f=b.currentTarget;r?f.value=e.cleaningMode:this.#g(e.areaId,{cleaningMode:f.value})}}
>${X.map(b=>i`<option value=${b} ?selected=${b===e.cleaningMode}>${Y(this.#e,b)}</option>`)}</select>
</label>
<label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
<select
aria-label=${this.#e("v4_area_vacuum_coverage_named","Vacuum coverage for {area}",{area:d})}
aria-disabled=${p.disabled}
aria-describedby=${p.described}
?disabled=${e.cleaningMode==="mop"}
.value=${e.coverageSetting}
@change=${b=>{let f=b.currentTarget;r?f.value=e.coverageSetting:this.#g(e.areaId,{coverageSetting:f.value})}}
>${K.map(b=>i`<option value=${b} ?selected=${b===e.coverageSetting}>${U(this.#e,b)}</option>`)}</select>
</label>
</div>
${e.cleaningMode==="vacuum"?l:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
</div>`:l}
</li>`}#S(e){let a=this.state.planDraft,s=this.state.resources.areas.value?.areas;if(!s?.length&&!a.areas.length)return l;let o=(s??[]).filter(c=>c.status==="current"&&!a.areas.some(d=>d.areaId===c.id)),r=a.areas.length>=Ye;return i`
<h3 class="heading" id="edit-areas">${this.#e("v4_plan_areas_heading","Custom areas")}</h3>
<p class="quiet">${o.length?this.#e("v4_plan_areas_add_hint","Choose a custom area to clean it every time this plan runs."):this.#e("v4_plan_areas_none","No other custom areas are ready to add. Draw or redraw one in Your areas.")}</p>
${r?i`<p class="reason" id="area-limit">${this.#e("v4_plan_area_limit","Can't add more custom areas until you remove one; a plan holds up to {limit}.",{limit:this.#n(Ye)})}</p>`:l}
${o.length?i`<ul class="plain" role="list" aria-labelledby="edit-areas">
${Xe(o,c=>c.id,c=>i`<li class="ms-row edit-row">
<label class="edit-check"><input
type="checkbox"
data-area-add=${c.id}
.checked=${!1}
aria-label=${this.#e("v4_area_include_named","Include {area}",{area:c.name})}
aria-disabled=${e||r?"true":l}
aria-describedby=${e??(r?"area-limit":l)}
@click=${d=>{(e||r)&&d.preventDefault()}}
@change=${()=>this.#_(c.id,c)}
></label>
<span class="edit-name"><bdi>${c.name}</bdi><small>${T(this.#e,c)}</small></span>
<span></span>
</li>`)}
</ul>`:l}
`}#R(){let e=this.state,a=e.planDraft,s=e.resources.plans.value;if(!s)return l;let o=this.#d(),r=this.#h(o),c=a.runBehavior==="ordered",d=a.rooms.length>=100,m=h=>s.rooms.find(w=>w.roomId===h)?.name??h,p=Fe(a),u=p.length-1,v=[...p.map(({room:h,area:w},E)=>h?{key:h.roomId,room:h,area:w,index:a.rooms.indexOf(h),position:E}:{key:`area:${w.areaId}`,room:null,area:w,index:-1,position:E}),...s.rooms.filter(h=>!a.rooms.some(w=>w.roomId===h.roomId)).map(h=>({key:h.roomId,room:null,area:void 0,index:-1,position:-1}))],g=a.areas.length,b=a.finishCurrentRoomThreshold,f=this.#n(b),_=(h,w)=>i`<button
class="ms-btn"
type="button"
aria-pressed=${String(a.runBehavior===h)}
aria-disabled=${r.disabled}
aria-describedby=${r.described}
@click=${()=>this.#i({runBehavior:h})}
>${w}</button>`;return i`<div class="edit">
${o?i`<p class="reason" id="edit-held">${this.#e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:l}
<label class="field ms-field">${this.#e("plan_name","Plan name")}
<input
maxlength="128"
autocomplete="off"
?readonly=${!!o}
aria-disabled=${r.disabled}
aria-describedby=${r.described}
.value=${a.name}
@input=${h=>this.#i({name:h.currentTarget.value})}
>
</label>
<div class="order" role="group" aria-labelledby="order-label">
<span id="order-label">${this.#e("plan_run_behavior","Cleaning order")}</span>
<div class="ms-segment">
${_("intelligent",this.#e("plan_intelligent","Intelligent rotation"))}
${_("ordered",this.#e("plan_ordered","Saved order"))}
</div>
<p class="quiet">${c?this.#e("v4_plan_order_ordered_hint","Top to bottom, as listed"):this.#e("v4_plan_order_intelligent_hint","Longest-waiting rooms first")}</p>
${g&&!c?i`<p class="quiet">${this.#e("v4_plan_areas_rotation_hint","Custom areas keep their places, and only the rooms between them change order. Choose Saved order to move them.")}</p>`:l}
</div>
<div class="list-header">
<h3 class="heading" id="edit-rooms">${g?this.#e("v4_plan_steps_heading","Rooms and custom areas"):this.#e("v4_rooms_heading","Rooms")}</h3>
<small>${g?Ee(this.#e,e.locale,a.rooms.length,g):this.#e("v4_plan_rooms_selected","{selected} of {total} selected",{selected:this.#n(a.rooms.length),total:this.#n(s.rooms.length)})}</small>
</div>
${d?i`<p class="reason" id="room-limit">${this.#e("v4_plan_room_limit","Can't add more rooms until you remove one; a plan holds up to {limit}.",{limit:this.#n(100)})}</p>`:l}
<ul class="plain" role="list" aria-labelledby="edit-rooms">
${Xe(v,h=>h.key,h=>h.area?this.#x(h.area,h.position,u,c,o):this.#w(h.key,m(h.key),h.room,h.index,h.position,u,c,d,o))}
</ul>
${this.#S(o)}
<span class="sr-only" role="status">${this._moved}</span>
<details class="run-end">
<summary>${this.#e("v4_run_end_options","When a run ends")}</summary>
${this.#$("return-dock",this.#e("v4_plan_return_to_dock","Return to the dock when finished"),null,a.returnToBase,o,h=>this.#i({returnToBase:h}))}
${this.#$("finish-room",this.#e("v4_plan_finish_room","Finish the current room when you press Stop"),this.#e("v4_plan_finish_room_hint","Only if the room is at least {percent}% done; otherwise the robot stops right away.",{percent:f}),a.finishCurrentRoom,o,h=>this.#i({finishCurrentRoom:h}))}
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
.value=${String(b)}
@input=${h=>{let w=h.currentTarget;o?w.value=String(b):this.#i({finishCurrentRoomThreshold:Number(w.value)})}}
>
</div>`:l}
</details>
</div>`}render(){let{workflow:e,planView:a}=this.state;return e==="plans"?this.#p():e!=="plan"?l:a==="run"?this.#u():this.#R()}};customElements.get(j)||customElements.define(j,Ze);var Jt=["mop_due","coverage_due"],He=(t,n)=>t.resources.plans.value?.rooms.find(e=>e.roomId===n)?.name??null,ea=(t,n)=>n.flatMap(e=>{let a=He(t,e);return a===null?[]:[a]}),Wa=t=>ea(t,t.selection.roomIds),Ha=(t,n)=>{let e=Wa(n);return e.length===0?null:t("v4_rooms_selected_names","{count} selected \xB7 {rooms}",{count:C(n.locale,e.length),rooms:V(n.locale,e)})},qa=(t,n)=>{let e=Oe(n)?.preview,a=ea(n,e?e.rooms.map(o=>o.roomId):n.selection.roomIds);if(a.length===0)return"";let s=a.length<=3?V(n.locale,a):V(n.locale,[...a.slice(0,2),t("v4_rooms_more","{count} more",{count:C(n.locale,a.length-2)})]);return t("v4_clean_rooms_summary","{rooms}, then back to the dock",{rooms:s})},Oa=(t,n,e,a)=>{let s=He(e,a)??He(n,a);if(s===null)return null;if(!Ve(n))return ae(n)?t("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):t("v4_reason_clean_rooms_verification","Waiting for the map to be ready.");let o=n.selection.roomIds.includes(a),r=e.selection.roomIds.includes(a);return o===r?null:r?t("v4_room_added","{room} added",{room:s}):t("v4_room_removed","{room} removed",{room:s})},Va=t=>t.currentTarget.value,Je=class extends D{constructor(){super(...arguments);this.state=N();this._open=null;this.#a=(e,a,s)=>z(this.localize,e,a,s);this.#t=e=>{if(e.key!=="Escape"||this._open===null||xt(e)||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;let a=e.composedPath(),o=this.getRootNode().host.getRootNode().host;if(!a.includes(o))return;let r=d=>d instanceof HTMLElement&&d.getRootNode()!==this.renderRoot&&(d.getAttribute("role")==="menu"||d.getAttribute("role")==="dialog"||d.getAttribute("aria-expanded")==="true");if(a.some(r))return;e.preventDefault();let c=this._open==="settings"?'[data-disclosure="settings"]':`[data-room-disclosure="${CSS.escape(this._open)}"]`;this._open=null,this.updateComplete.then(()=>this.renderRoot.querySelector(c)?.focus())}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[W,H,q,F,A` :host{display:block;min-inline-size:0}.stack{display:grid;gap:var(--ms-space-3)}.description{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-sm);line-height:var(--ms-lh-normal)}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;padding:0;border:0;clip-path:inset(50%);white-space:nowrap}.list-header{display:flex;align-items:center;gap:var(--ms-space-2);min-block-size:var(--ms-control-sm)}.list-header h3{flex:1;margin:0}.list-header small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs)}.limit{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}@media (any-pointer:coarse){.clear{min-block-size:var(--ms-control);min-inline-size:var(--ms-control)}}.settings-row{display:grid;padding:0}.ms-disclosure{display:flex;gap:var(--ms-space-2);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-3);border:0;border-radius:var(--ms-radius-sm);color:inherit;background:transparent;font:inherit;font-size:var(--ms-t-md);font-weight:var(--ms-w-bold);text-align:start;cursor:pointer}.ms-disclosure:focus-visible{outline:2px solid var(--ms-resolved-indicator,var(--ms-accent));outline-offset:-2px}.ms-disclosure>span:first-child{flex:1}.ms-disclosure__value{overflow:hidden;color:var(--ms-text-quiet);font-weight:var(--ms-w-regular);font-size:var(--ms-t-sm);text-overflow:ellipsis;white-space:nowrap}.ms-disclosure>.ms-icon{flex:none;transition:rotate var(--ms-fast) var(--ms-ease)}.ms-disclosure[aria-expanded="true"]>.ms-icon{rotate:90deg}.ms-disclosure:dir(rtl)>.ms-icon{scale:-1 1}.ms-disclosure[aria-expanded="true"]:dir(rtl)>.ms-icon{rotate:-90deg}.settings-body,.row-expanded{display:grid;gap:var(--ms-space-3);padding:var(--ms-space-3);border-block-start:1px solid var(--ms-line)}.settings-body .ms-field,.row-expanded .ms-field{color:color-mix(in srgb,var(--ms-text-quiet) 70%,var(--ms-text))}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2)}@media (max-width:25rem){.split{grid-template-columns:1fr}}.hint{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.switch-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control)}.switch-copy{display:grid;flex:1;gap:.125rem;min-inline-size:0;font-size:var(--ms-t-md)}.switch-copy small{color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.check-lines{display:grid;gap:var(--ms-space-2)}.line{display:flex;gap:var(--ms-space-2);align-items:flex-start;margin:0;font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug)}.line .ms-icon{flex:none;inline-size:1.125rem;block-size:1.125rem;margin-block-start:.0625rem}.line[data-tone="warning"] .ms-icon{color:var(--ms-warning)}.line>span{flex:1}.line .ms-btn{flex:none}.room-list{display:grid;gap:var(--ms-space-2)}.room-row{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;padding:0;--ms-local:var(--ms-surface-card)}.room-row:has(.ms-check :checked){--ms-local:color-mix(in srgb,var(--ms-accent) 10%,var(--ms-surface-sunken));border-color:var(--ms-resolved-indicator,var(--ms-accent))}.ms-check{display:flex;gap:var(--ms-space-3);align-items:center;min-inline-size:0;min-block-size:var(--ms-control);padding:var(--ms-space-2) var(--ms-space-3);cursor:pointer}.ms-check input{flex:none;inline-size:1.25rem;block-size:1.25rem;margin:0;accent-color:var(--ms-resolved-indicator,var(--ms-accent));cursor:pointer}.ms-check input[aria-disabled="true"]{cursor:not-allowed}.ms-check:has(input[aria-disabled="true"]) :is(bdi,small){color:var(--ms-text-disabled)}.row-lines{display:grid;flex:1;gap:.125rem;min-inline-size:0}.row-lines bdi{overflow:hidden;font-weight:var(--ms-w-bold);text-overflow:ellipsis;white-space:nowrap}.row-lines small{color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local));font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.problem-line{display:flex;gap:var(--ms-space-1);align-items:flex-start;color:var(--ms-text)}.problem-line .ms-icon{flex:none;inline-size:1rem;block-size:1rem;color:var(--ms-warning)}.room-settings{margin-inline-end:var(--ms-space-1)}.row-expanded{grid-column:1 / -1}@media (forced-colors:active){.room-row:has(.ms-check :checked){forced-color-adjust:none;color:HighlightText;background:Highlight;border-color:Highlight}.room-row:has(.ms-check :checked) .row-lines small{color:HighlightText}.room-row:has(.ms-check :checked) input,.room-row:has(.ms-check :checked) .room-settings{forced-color-adjust:auto}.line .ms-icon,.problem-line .ms-icon{color:CanvasText}}@media (prefers-reduced-motion:reduce){.ms-disclosure>.ms-icon{transition:none}}`]}#a;#s(e){this.dispatchEvent(new CustomEvent(B,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this._open&&this._open!=="settings"&&!this.state.selection.roomIds.includes(this._open)&&(this._open=null)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.#t,!0)}disconnectedCallback(){window.removeEventListener("keydown",this.#t,!0),super.disconnectedCallback()}updated(e){e.has("_open")&&this._open!==null&&this.renderRoot.querySelector(".settings-body, .row-expanded")?.scrollIntoView({block:"nearest"})}#t;#e(e){this._open=this._open===e?null:e}#o(e,a,s){return o=>{if(e){o.currentTarget.value=a;return}s(Va(o))}}#n(...e){let a=e.filter(s=>!!s);return a.length?a.join(" "):l}#l(e,a,s){let o=this.#a,r=this._open==="settings",c=e.selection.cleaningMode,d=e.selection.coverageSetting,p=e.selection.roomSettings.some(g=>e.selection.roomIds.includes(g.roomId)&&(g.cleaningMode!==c||g.coverageSetting!==d))?o("v4_settings_mixed","Different per room"):T(o,{cleaningMode:c,coverageSetting:d}),u=c==="mop",v=a!==null;return i`
<div class="ms-row settings-row">
<button
class="ms-disclosure"
type="button"
data-disclosure="settings"
aria-expanded=${String(r)}
aria-controls="clean-settings"
@click=${()=>this.#e("settings")}
><span>${o("v4_clean_settings","Cleaning settings")}</span><span class="ms-disclosure__value">${p}</span>${y(O)}</button>
${r?i`
<div id="clean-settings" class="settings-body">
<div class="split">
<label class="ms-field">${o("v4_cleaning_system","Cleaning mode")}
<select
class="ms-select"
aria-disabled=${v?"true":l}
aria-describedby=${this.#n(a)}
.value=${c}
@change=${this.#o(v,c,g=>this.#s({type:"set-clean-settings",cleaningMode:g}))}
>${X.map(g=>i`<option value=${g} ?selected=${g===c}>${Y(o,g)}</option>`)}</select>
</label>
<label class="ms-field">${o("vacuum_coverage","Vacuum coverage")}
<select
class="ms-select"
aria-disabled=${v||u?"true":l}
aria-describedby=${this.#n(u&&"clean-mop-hint",a)}
.value=${d}
@change=${this.#o(v||u,d,g=>this.#s({type:"set-clean-settings",coverageSetting:g}))}
>${K.map(g=>i`<option value=${g} ?selected=${g===d}>${U(o,g)}</option>`)}</select>
</label>
</div>
${u?i`<p class="hint" id="clean-mop-hint">${o("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:l}
${s?i`
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
aria-describedby=${this.#n("due-hint",a)}
aria-disabled=${v?"true":l}
@click=${()=>{v||this.#s({type:"set-use-room-schedule",value:!e.selection.useRoomSchedule})}}
></button>
</div>
`:l}
</div>
`:l}
</div>
`}#m(e,a,s,o){let r=this.#a,c=e.manualRoomPreview.status==="error",d=a?oe(r,e.locale,a):[],m=o===null?null:o==="invalid_cadence_policy"&&e.selection.useRoomSchedule&&e.selection.roomSettings.some(p=>p.cleaningMode!=="vacuum")?r("v4_room_preview_schedule_override",`The room schedule can't use the cleaning mode you chose. Turn off "Include scheduled work that's due", or choose another mode.`):r("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.");return!d.length&&!s&&!c&&!m?l:i`
<div class="check-lines">
${d.map(p=>i`<p class="line" data-tone="due">${y(ne)}<span>${p}</span></p>`)}
${s?i`<p class="line" data-tone="info">${y(ne)}<span>${r("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:C(e.locale,s+1)})}</span></p>`:l}
${c?i`
<p class="line" data-tone="warning">${y(M)}<span>${r("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</span>
<button class="ms-btn ms-btn--sm ms-btn--secondary" type="button" @click=${()=>this.#s({type:"retry-room-preview"})}>${r("v4_retry","Try again")}</button>
</p>
`:l}
${m?i`<p class="line" data-tone="warning">${y(M)}<span>${m}</span></p>`:l}
</div>
`}#p(e,a,s,o,r,c){let d=this.#a,m=e.selection.roomIds.includes(a.roomId),p=e.selection.roomSettings.find(k=>k.roomId===a.roomId)??{roomId:a.roomId,cleaningMode:e.selection.cleaningMode,coverageSetting:e.selection.coverageSetting},u=r&&!m,v=o!==null,g=e.manualRoomPreview.status==="loading",b=c?.cadenceReasons??a.sharedCadenceReasons??a.sharedCadenceProgress?.reasons??[],f=m?zt(d,b):null,_=this._open===a.roomId,h=`room-settings-${s}`,w=`room-mop-hint-${s}`,E=p.cleaningMode==="mop";return i`
<div class="ms-row room-row">
<label class="ms-check">
<input
type="checkbox"
.checked=${m}
aria-disabled=${v||u?"true":l}
aria-describedby=${this.#n(o??(u&&"rooms-limit"))}
@click=${k=>{(v||u)&&k.preventDefault()}}
@change=${()=>this.#s({type:"toggle-room",roomId:a.roomId})}
>
<span class="row-lines">
<bdi>${a.name}</bdi>
${m?i`<small>${g?d("v4_room_preview_loading","Checking settings\u2026"):T(d,c??p)}</small>`:l}
${f?i`<small class="problem-line">${y(M)}<span>${f}</span></small>`:l}
</span>
</label>
${m?i`
<button
class="ms-btn ms-btn--icon room-settings"
type="button"
data-room-disclosure=${a.roomId}
aria-label=${d("v4_room_settings_named","Settings for {room}",{room:a.name})}
aria-expanded=${String(_)}
aria-controls=${h}
@click=${()=>this.#e(a.roomId)}
>${y(_?gt:_t)}</button>
`:l}
${_?i`
<div class="row-expanded" id=${h}>
<div class="split">
<label class="ms-field">${d("v4_cleaning_system","Cleaning mode")}
<select
class="ms-select"
aria-label=${d("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:a.name})}
aria-disabled=${v?"true":l}
aria-describedby=${this.#n(o)}
.value=${p.cleaningMode}
@change=${this.#o(v,p.cleaningMode,k=>this.#s({type:"patch-room-settings",roomId:a.roomId,cleaningMode:k}))}
>${X.map(k=>i`<option value=${k} ?selected=${k===p.cleaningMode}>${Y(d,k)}</option>`)}</select>
</label>
<label class="ms-field">${d("vacuum_coverage","Vacuum coverage")}
<select
class="ms-select"
aria-label=${d("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:a.name})}
aria-disabled=${v||E?"true":l}
aria-describedby=${this.#n(E&&w,o)}
.value=${p.coverageSetting}
@change=${this.#o(v||E,p.coverageSetting,k=>this.#s({type:"patch-room-settings",roomId:a.roomId,coverageSetting:k}))}
>${K.map(k=>i`<option value=${k} ?selected=${k===p.coverageSetting}>${U(d,k)}</option>`)}</select>
</label>
</div>
${E?i`<p class="hint" id=${w}>${d("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`:l}
</div>
`:l}
</div>
`}render(){let e=this.#a,a=this.state,s=a.resources.plans.value?.rooms??[],o=s.length===0,r=ae(a),c=!Ve(a),d=c?r?"rooms-description":"rooms-held":null,m=a.selection.roomIds.length,p=m>=100,u=Oe(a)?.preview??null,v=u?u.rooms.map(_=>({..._,name:He(a,_.roomId)??_.name})):null,g=_=>v?.find(h=>h.roomId===_)??null,b=(v??[]).some(_=>_.cadenceReasons.some(h=>Jt.includes(h)))||s.some(_=>a.selection.roomIds.includes(_.roomId)&&(_.sharedCadenceProgress?.mopDue||_.sharedCadenceProgress?.coverageDue||(_.sharedCadenceReasons??_.sharedCadenceProgress?.reasons??[]).some(h=>Jt.includes(h)))),f=r?e("v4_rooms_busy","Can't change rooms until the robot finishes or stops."):o?e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here."):e("v4_choose_rooms_detail","Choose rooms on the map or in the list.");return i`
<div class="stack">
<p class="description" id="rooms-description">${f}</p>
${c&&!r?i`<span class="sr-only" id="rooms-held">${e("v4_reason_clean_rooms_verification","Waiting for the map to be ready.")}</span>`:l}
${o?l:i`
<div class="list-header">
<h3 class="ms-section-heading" id="rooms-heading">${e("v4_rooms_to_clean","Rooms to clean")}</h3>
${m?i`
<small>${e("v4_rooms_selected","{count} selected",{count:C(a.locale,m)})}</small>
<button
class="ms-btn ms-btn--sm ms-btn--secondary clear"
type="button"
aria-disabled=${c?"true":l}
aria-describedby=${this.#n(d)}
@click=${()=>{c||this.#s({type:"clear-selection"})}}
>${e("v4_clear","Clear")}</button>
`:l}
</div>
${p?i`<p class="limit" id="rooms-limit">${e("v4_room_limit_reached","Up to {limit} rooms fit in one clean, so remove one to add another.",{limit:100})}</p>`:l}
${this.#l(a,d,b)}
${this.#m(a,v,u?.missionBoundaries.length??0,u?.blocker??null)}
<div class="room-list" role="group" aria-labelledby="rooms-heading">
${s.map((_,h)=>this.#p(a,_,h,d,p,g(_.roomId)))}
</div>
`}
</div>
`}};customElements.get(_e)||customElements.define(_e,Je);var pe=Math.round(.2*100),ue=Math.round(2.5*100),me=5,qe=t=>Math.min(ue,Math.max(pe,Math.round(t*100))),Ba=(t,n)=>n>0?Math.min(ue,Math.floor(t/me)*me+me):Math.max(pe,Math.ceil(t/me)*me-me),et=class extends D{constructor(){super(...arguments);this.state=N()}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[W,H,q,F,Te,A` :host{display:block;color:var(--ms-text)}.controls{display:grid;gap:var(--ms-space-2);padding:var(--ms-space-3);border:1px solid var(--ms-line);border-radius:var(--ms-radius-md)}.row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--ms-space-2)}.row>label{font-size:var(--ms-t-sm);font-weight:var(--ms-w-medium)}.hint{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;clip-path:inset(50%);white-space:nowrap}`]}#a(e,a,s){return z(this.localize,e,a,s)}#s(e){this.dispatchEvent(new CustomEvent(B,{detail:e,bubbles:!0,composed:!0}))}#t(e){this.#s({type:"set-brush",value:e/100})}#e(e){let a=e.currentTarget,s=qe(this.state.draw.brushMeters),o=Number(a.value.trim()),r=a.validity.badInput||a.value.trim()===""||!Number.isFinite(o)?s:qe(o/100);a.value=String(r),r!==s&&this.#t(r)}#o(e){let a=e.currentTarget.valueAsNumber;Number.isFinite(a)&&this.#t(qe(a/100))}render(){let e=qe(this.state.draw.brushMeters),a=r=>new Intl.NumberFormat(this.state.locale,{style:"unit",unit:"centimeter",unitDisplay:"short"}).format(r),s=this.#a("brush_size","Brush width"),o=r=>{let c=r<0?e<=pe?this.#a("v4_brush_min_reason","Can't make the brush narrower than {size}.",{size:a(pe)}):null:e>=ue?this.#a("v4_brush_max_reason","Can't make the brush wider than {size}.",{size:a(ue)}):null,d=r<0?"brush-min":"brush-max";return i`<button
class="ms-btn ms-btn--icon"
type="button"
aria-label=${r<0?this.#a("v4_stepper_decrease","Decrease {label}",{label:s}):this.#a("v4_stepper_increase","Increase {label}",{label:s})}
aria-controls="brush"
aria-disabled=${c?"true":l}
aria-describedby=${c?d:l}
title=${c??l}
@click=${()=>{c||this.#t(Ba(e,r))}}
>${y(r<0?xe:G)}${c?i`<span class="sr-only" id=${d}>${c}</span>`:l}</button>`};return i`
<div class="controls" role="group" aria-label=${this.#a("v4_drawing_precision","Drawing precision")}>
<div class="row">
<label for="brush">${s}</label>
<span class="ms-stepper">
${o(-1)}
<input
id="brush"
type="number"
inputmode="numeric"
min=${pe}
max=${ue}
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
min=${pe}
max=${ue}
step="1"
.value=${String(e)}
@input=${this.#o}
aria-label=${this.#a("v4_brush_width_slider","Brush width slider")}
aria-valuetext=${a(e)}
/>
<p class="hint">${this.#a("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
</div>
`}};customElements.get(ve)||customElements.define(ve,et);var ja=(t,n,e)=>{let a=(p,u,v)=>z(e,p,u,v),s=ie(n),o=n.cadenceResetRequest,r=n.resources.plans.value,c=o&&r?.rooms.find(p=>p.roomId===o.roomId)?.name||o?.roomId||"room",d=o?r?.plans.find(p=>p.id===o.planId)?.rooms.find(p=>p.roomId===o.roomId)?.cadence?.scope==="shared":!1,m=o?.mode??"mop";switch(t){case"confirmDeletePlan":return s&&{title:a("v4_delete_plan","Delete plan?"),detail:a("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:s.name}),...s.successor===void 0?{}:{consequence:s.successor===null?a("v4_delete_plan_none","You'll have no default plan."):a("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:s.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":{let p=Ce(r?.plans.filter(u=>Array.isArray(u.entries)&&u.entries.length>1),n.areaDraft.id??"");return s&&{title:a("v4_delete_area","Delete area?"),detail:p.length?a("v4_delete_area_detail_plans",`Automations that clean "{name}" will stop working, and {plans} won't clean it anymore. The robot won't move.`,{name:s.name,plans:V(n.locale,p)}):a("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:s.name}),...s.successor===void 0?{}:{consequence:s.successor===null?a("v4_delete_area_none","No custom area will be selected."):a("v4_delete_area_selected","{area} becomes the selected custom area.",{area:s.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("area_delete","Delete"),action:"delete-area"}}case"confirmResetCadence":return{title:m==="mop"?a("v4_reset_mop_cadence_title","Reset mopping progress?"):a("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:d?a("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:c}):a("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:c}),cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("v4_reset","Reset"),action:"reset-room-cadence"}}},Fa=(t,n,e)=>{let a=t;if(!ot(a.detail))return;if(rt(n,a.detail)){t.stopPropagation(),e(a.detail);return}if(a.detail?.type!=="open-dialog")return;let s=a.composedPath().find(o=>o instanceof HTMLElement&&o.hasAttribute("data-dialog-launcher"));return s instanceof HTMLElement?s:void 0},Ka=(t,n,e,a)=>{let s=t.cadenceResetRequest;e({type:"dismiss-top-layer"}),n!=="reset-room-cadence"?a(n):s&&a({id:n,planId:s.planId,roomId:s.roomId,mode:s.mode})},Ua=(t,n)=>{let e=t.cadenceResetRequest;return t.dialog!=="confirmResetCadence"||!e?null:n.querySelector(se)?.shadowRoot?.querySelector(j)?.shadowRoot?.querySelector(`[data-room-disclosure="${CSS.escape(e.roomId)}"]`)??null};var tt=class{constructor(n){this.menu=new Z(n,".overflow-wrap",".overflow")}render({state:n,narrow:e,t:a,intent:s,diagnostics:o}){let r=(d,m,p)=>i`
<button class="ms-row ms-row--menu" type="button" role="menuitemradio" aria-checked=${String(d)} data-selected=${d?"true":l} tabindex="-1" @click=${p}><span>${m}</span>${d?y(bt):l}</button>
`,c=(d,m)=>r(n.quality===d,m,()=>s({type:"set-quality",quality:d}));return i`
<div id="map-options" class="overflow-menu ms-surface ms-surface--overlay" role="menu" aria-label=${a("v4_map_options","Map options")}>
${e?i`
<div role="group" aria-labelledby="menu-display">
<p class="menu-heading" id="menu-display" role="presentation">${a("v4_map_display","Map display")}</p>
${Se(n)==="top"?i`
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
${c("auto",a("map_quality_auto","Auto detail"))}
${c("efficient",a("map_quality_efficient","Efficient"))}
${c("balanced",a("map_quality_balanced","Balanced"))}
${c("maximum",a("map_quality_maximum","Maximum"))}
</div>
<button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!1),o()}}>${a("v4_map_diagnostics","Map diagnostics")}</button>
</div>
`}};var Ga=t=>i`
<p id="zone-keyboard-help" class="sr-only">${t("v4_zone_keyboard_help","Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag.")}</p>
<p id="keyboard-draw-help" class="sr-only">${t("v4_keyboard_draw_help","Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>
`,Qa=({state:t,coarse:n,t:e,close:a})=>{let s=t.workflow==="draw",o=Se(t)==="top",r=e("v4_how_to_move","How to move the map"),c=n?[[e("v4_touch","Touch"),s?e("v4_touch_draw_help","Drag to paint \xB7 two fingers to move or zoom"):e("v4_touch_help","Drag to move the map \xB7 pinch to zoom \xB7 twist two fingers to rotate")]]:[[e("v4_trackpad","Trackpad"),e("v4_trackpad_help","Scroll to move the map \xB7 pinch to zoom \xB7 twist to rotate")],[e("v4_mouse","Mouse"),s?e("v4_mouse_draw_help","Drag to paint \xB7 right-drag or Space-drag to move \xB7 wheel to zoom"):o?e("v4_mouse_top_help","Drag to move the map \xB7 wheel to zoom"):e("v4_mouse_help","Drag to move the map \xB7 right-drag or Shift-drag to rotate \xB7 wheel to zoom")],[e("v4_keyboard","Keyboard"),s?t.draw.tool==="outline"?e("v4_zone_keyboard_help","Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag."):e("v4_keyboard_draw_help","Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase."):o?e("v4_keyboard_top_help","WASD or arrows to move \xB7 +/\u2212 to zoom \xB7 0 to fit"):e("v4_keyboard_help","WASD to move \xB7 Q/E or arrows to orbit \xB7 +/\u2212 to zoom \xB7 0 to fit")]];return i`
<div id="navigation-help" class="navigation-help ms-surface ms-surface--floating" role="dialog" aria-modal="false" aria-label=${r}>
<header>
<h2>${r}</h2>
<button class="ms-btn ms-btn--sm" type="button" @click=${a}>${e("v4_close","Close")}</button>
</header>
<dl>${c.map(([d,m])=>i`<dt>${d}</dt><dd>${m}</dd>`)}</dl>
</div>
`};var Xa=(t,n)=>{let{tool:e}=n.draw;if(e==="pan")return null;let a=window.matchMedia("(any-pointer: coarse)").matches;return e==="outline"?a?t("v4_points_hint_touch","Tap to add points \xB7 two fingers to move the map"):t("v4_points_hint_pointer","Click to add points \xB7 right-drag to move the map"):a?t("v4_draw_hint_touch","Drag to paint \xB7 two fingers to move the map"):t("v4_draw_hint_pointer","Drag to paint \xB7 right-drag or Space-drag to move the map")},ta=le(j),aa=le(_e),sa=le(ve),ye=t=>t.currentTarget.value,at=class extends D{constructor(){super(...arguments);this.state=N();this.narrow=!1;this._historyPreviewPosition=null;this.#a=new wt(this,()=>import("./diagnostics-panel-GPPORXHT.js"));this.#s="";this.#l=(e,a,s)=>this.#t(e,a,s)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0},narrow:{type:Boolean}}}static{this.styles=[W,H,q,F,A` :host{display:block;min-inline-size:0;container-type:inline-size}.ms-row--danger{color:var(--ms-danger)}.sr-only{position:absolute;overflow:hidden;inline-size:1px;block-size:1px;margin:-1px;clip-path:inset(50%);white-space:nowrap}button,select,input[type="checkbox"]{cursor:pointer}.stack{display:grid;gap:var(--ms-space-3)}.subtle{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.loading,.empty,.problem,.notice{--ms-local:var(--ms-surface-sunken);padding:var(--ms-space-3);border-radius:var(--ms-radius-md);background:var(--ms-local);font-size:var(--ms-t-sm);line-height:var(--ms-lh-snug)}.problem,.notice[data-tone="warning"]{--ms-local:color-mix(in srgb,var(--notice-tone) 12%,var(--ms-surface-card));border-inline-start:3px solid var(--notice-tone);color:var(--ms-text)}.problem{--notice-tone:var(--ms-danger)}.notice[data-tone="warning"]{--notice-tone:var(--ms-warning)}.split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ms-space-2)}.list{display:grid;gap:var(--ms-space-2)}.group{display:grid;gap:var(--ms-space-2)}.floor[aria-current="true"]{border-color:var(--ms-resolved-indicator,var(--ms-accent));background:color-mix(in srgb,var(--ms-accent) 12%,var(--ms-local))}.problem p{margin:0}@media (forced-colors:active){.floor[aria-current="true"]{forced-color-adjust:none;color:HighlightText;background:Highlight;border-color:Highlight}}.toolbar{display:flex;flex-wrap:wrap;gap:var(--ms-space-2)}.checkbox{display:flex;align-items:center;gap:var(--ms-space-2);min-block-size:var(--ms-control);font-size:var(--ms-t-xs);font-weight:var(--ms-w-medium)}.checkbox input{inline-size:1.2rem;block-size:1.2rem}.floor small,.snapshot small,.list-button small{margin-inline-start:auto;color:color-mix(in srgb,var(--ms-text) 78%,var(--ms-local));font-weight:var(--ms-w-regular)}.timeline{display:grid;gap:var(--ms-space-2)}.timeline-ends{display:flex;justify-content:space-between;margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}@media (max-width:25rem){.split{grid-template-columns:1fr}}.area-row .ms-row__body{display:grid;gap:.125rem}.area-row bdi{overflow:hidden;min-inline-size:0;text-overflow:ellipsis;white-space:nowrap}.area-row small{color:var(--ms-text-quiet)}.area-row .ms-row__trail:dir(rtl) .ms-icon{scale:-1 1}.lines{display:grid;gap:.125rem;color:var(--ms-text);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}.line{display:flex;gap:var(--ms-space-1);align-items:flex-start}.line .ms-icon{flex:none;inline-size:1rem;block-size:1rem;color:var(--ms-warning)}.empty-card{display:grid;gap:var(--ms-space-2);padding:var(--ms-space-4);border:1px solid var(--ms-line);border-radius:var(--ms-radius-md)}.empty-card h3{margin:0;font-size:var(--ms-t-md)}.empty-card p{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-md);line-height:var(--ms-lh-normal)}.empty-card .ms-btn{justify-self:start}.switch-row{display:flex;gap:var(--ms-space-3);align-items:center;min-block-size:var(--ms-control)}.switch-copy{display:grid;flex:1;gap:.125rem;min-inline-size:0;font-size:var(--ms-t-md)}.switch-copy small,.reason{margin:0;color:var(--ms-text-quiet);font-size:var(--ms-t-xs);line-height:var(--ms-lh-snug)}`]}#a;#s;willUpdate(e){if(!e.has("state"))return;let{workflow:a,selection:s}=this.state,o=`${a}:${s.floorId}:${s.historyId??"live"}`;o!==this.#s&&(this.#s=o,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#t(e,a,s){return z(this.localize,e,a,s)}#e(){let e=ct(this.state);return e?this.#t(e.reasonKey,e.reason):null}#o(e){return Y(this.#l,e)}#n(e){return U(this.#l,e)}#l;#m(e){let a=Ce(this.state.resources.plans.value?.plans,e);if(!a.length)return null;let s=V(this.state.locale,a);return a.length===1?this.#t("v4_area_in_plans_one","In 1 plan: {plans}",{plans:s}):this.#t("v4_area_in_plans","In {count} plans: {plans}",{count:C(this.state.locale,a.length),plans:s})}#p(e,a){return e===null?l:a==="small"?i`<small data-in-plans>${e}</small>`:i`<p class="subtle" data-in-plans>${e}</p>`}#f(e){return e==="vacuum"?l:i`<p class="subtle">${this.#t("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#r(e){this.dispatchEvent(new CustomEvent(B,{detail:e,bubbles:!0,composed:!0}))}#c(e){switch(e){case"rooms":case"plans":case"plan":return{loading:this.#t("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#t("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#t("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"areas":case"draw":case"areaReview":return{loading:this.#t("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#t("v4_areas_unavailable","Home Assistant couldn't load your saved areas."),empty:""};case"history":return{loading:this.#t("v4_loading_history","Loading map history\u2026"),unavailable:this.#t("v4_history_unavailable","Map history is unavailable right now."),empty:this.#t("v4_no_map_history","No saved map snapshots yet.")}}}#u({status:e,value:a},s,o){let r=this.#c(o);return a===null&&(e==="idle"||e==="loading")?i`<div class="loading" role="status">${r.loading}</div>`:e==="error"?i`
<div class="stack">
<div class="problem" role="alert">${r.unavailable}</div>
<div class="toolbar">
<button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:o})}>${this.#t("v4_retry","Try again")}</button>
</div>
</div>
`:e==="empty"?i`<div class="empty">${r.empty}</div>`:s}#d(){return this.#u(this.state.resources.plans,ce`<${aa}
.state=${this.state}
.localize=${this.localize}
></${aa}>`,"rooms")}#i(){let e=this.state.workflow==="plans"?"plans":"plan";return this.#u(this.state.resources.plans,ce`<${ta}
.state=${this.state}
.localize=${this.localize}
></${ta}>`,e)}#v(){let e=this.narrow?null:Xa(this.#l,this.state);return i`
<div class="stack">
${e?i`<p class="subtle draw-hint">${e}</p>`:l}
${this.state.precisionOpen&&!this.narrow?ce`<${sa} .state=${this.state} .localize=${this.localize}></${sa}>`:l}
</div>
`}#g(){let{status:e,value:a}=this.state.resources.areas,s=this.#c("areas");if(a===null&&(e==="idle"||e==="loading"))return i`<div class="loading" role="status">${s.loading}</div>`;let o=this.#e(),r=o?"areas-held-reason":l,c=o?"true":l,d=v=>()=>{o||this.#r(v)},m=this.#t("area_new","New area"),p=e==="error"?i`
<div class="problem" role="alert">${s.unavailable}</div>
<div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"areas"})}>${this.#t("v4_retry","Try again")}</button></div>
`:l,u=a?.areas??[];return u.length?i`<div class="stack">
${p}
<p class="subtle">${this.#t("v4_choose_area_detail","Tap an area to clean it or change it.")}</p>
<div class="list" role="list">
${u.map(v=>{let g=v.canRebind||v.status==="review",b=!g&&v.status!=="current";return i`<div role="listitem"><button
class="ms-row ms-row--card area-row"
type="button"
data-area-row=${v.id}
aria-disabled=${c}
aria-describedby=${r}
@click=${d({type:"select-area",areaId:v.id,workflow:"areaReview"})}
>
<span class="ms-row__body">
<strong><bdi>${v.name}</bdi></strong>
<small>${T(this.#l,v)}</small>
${this.#p(this.#m(v.id),"small")}
${g||b?i`<span class="lines"><span class="line" data-tone="warning">${y(M)}<span>${g?this.#t("v4_area_row_check","Map changed \xB7 Check it before cleaning"):this.#t("v4_area_row_redraw","Redraw it before cleaning")}</span></span></span>`:l}
</span>
<span class="ms-row__trail">${y(O)}</span>
</button></div>`})}
<div role="listitem"><button class="ms-row ms-row--card" type="button" data-area-new aria-disabled=${c} aria-describedby=${r} @click=${d({type:"open-workflow",workflow:"draw"})}>
<span class="ms-row__lead">${y(G)}</span>
<span class="ms-row__body"><strong>${m}</strong></span>
</button></div>
</div>
${o?i`<p class="sr-only" id="areas-held-reason">${o}</p>`:l}
</div>`:i`<div class="stack">
${p}
${a===null&&e==="error"?l:i`<div class="empty-card">
<h3>${this.#t("v4_no_areas","No custom areas yet")}</h3>
<p>${this.#t("v4_no_areas_hint","Draw an area on the map to clean just that spot.")}</p>
<button class="ms-btn ms-btn--primary" type="button" data-area-new aria-disabled=${c} aria-describedby=${r} @click=${d({type:"open-workflow",workflow:"draw"})}>${m}</button>
</div>`}
${o?i`<p class="sr-only" id="areas-held-reason">${o}</p>`:l}
</div>`}#_(){let e=this.state.areaDraft,a=this.state.resources.areas,s=e.canRebind||e.status==="review",o=!s&&(e.status==="stale"||e.status==="unknown"),r=this.#e(),c=r?"review-held-reason":l,d=r?"true":l,m=ae(this.state),p=ie(this.state,"confirmDeleteArea")!==void 0;return i`
<div class="stack">
${s?i`<div class="notice" data-tone="warning" role="status">${this.#t("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:l}
${o?i`<div class="problem" role="alert">${this.#t("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:l}
${a.status==="error"?i`
<div class="stack">
<div class="problem" role="alert">${this.#c("areaReview").unavailable}</div>
<div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#r({type:"open-workflow",workflow:"areaReview"})}>${this.#t("v4_retry","Try again")}</button></div>
</div>
`:l}
<label class="field ms-field">${this.#t("area_name","Area name")}
<input maxlength="128" autocomplete="off" .value=${e.name} ?readonly=${!!r} aria-disabled=${d} aria-describedby=${c} @input=${u=>{r||this.#r({type:"patch-area-draft",patch:{name:ye(u)}})}}>
</label>
<div class="split">
<label class="field ms-field">${this.#t("v4_cleaning_system","Cleaning mode")}
<select .value=${e.cleaningMode} aria-disabled=${d} aria-describedby=${c} @change=${u=>{if(r){u.currentTarget.value=e.cleaningMode;return}this.#r({type:"patch-area-draft",patch:{cleaningMode:ye(u)}})}}>${X.map(u=>i`<option value=${u} ?selected=${u===e.cleaningMode}>${this.#o(u)}</option>`)}</select>
</label>
<label class="field ms-field">${this.#t("vacuum_coverage","Vacuum coverage")}
<select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} aria-disabled=${d} aria-describedby=${c} @change=${u=>{if(r){u.currentTarget.value=e.coverageSetting;return}this.#r({type:"patch-area-draft",patch:{coverageSetting:ye(u)}})}}>${K.map(u=>i`<option value=${u} ?selected=${u===e.coverageSetting}>${this.#n(u)}</option>`)}</select>
</label>
</div>
${this.#f(e.cleaningMode)}
${this.#p(e.id===null?null:this.#m(e.id),"p")}
${m?i`
<div class="toolbar">
<button class="ms-btn ms-btn--secondary" type="button" data-redraw aria-disabled=${d} aria-describedby=${c} @click=${()=>{r||this.#r({type:"open-workflow",workflow:"draw"})}}>${this.#t("v4_edit_outline","Redraw")}</button>
</div>
`:l}
${r?i`<p class="sr-only" id="review-held-reason">${r}</p>`:l}
${e.id===null?l:Ne(this.#l,this.state,{kind:"area",id:e.id},u=>this.#r(u))}
${p?i`
<button
class="list-button ms-row ms-row--danger"
type="button"
data-dialog-launcher="confirmDeleteArea"
aria-disabled=${d}
aria-describedby=${c}
@click=${()=>{r||this.#r({type:"open-dialog",dialog:"confirmDeleteArea"})}}
>${this.#t("area_delete","Delete")}</button>
`:l}
</div>
`}#y(){let e=this.state.resources.history,a=e.value,s=a?.floors.find(_=>_.id===this.state.selection.floorId)||a?.floors.find(_=>_.active)||a?.floors[0],o=s?.snapshots||[],r=this.state.selection.historyId?Math.max(0,o.findIndex(_=>_.id===this.state.selection.historyId)):o.length,c=this.#t("map_timeline_live_action","Live"),d=!!s?.active,m=d?o.length:o.length-1,p=Math.min(this._historyPreviewPosition??r,m),u=o[p],v=this.#e(),g=v?"true":l,b=v?"history-held-reason":l,f=this.state.dataMode==="live"&&this.state.floor.readOnly;return this.#u(e,i`
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
aria-disabled=${g}
aria-describedby=${b}
@click=${()=>{v||this.#r({type:"set-floor",floorId:_.id})}}
>
<span>${_.label||(_.active?this.#t("v4_current_floor","Current floor"):this.#t("v4_saved_floor","Saved floor {number}",{number:_.ordinal??h}))}</span>
<small>${_.active?c:this.#t("v4_saved_map","Saved map")}</small>
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
aria-valuetext=${u?je(u.createdAt,this.dates):c}
aria-disabled=${g}
aria-describedby=${b}
@input=${_=>{if(v){_.currentTarget.value=String(r);return}this._historyPreviewPosition=Number(ye(_))}}
@change=${_=>{if(v){_.currentTarget.value=String(r);return}let h=Number(ye(_));this._historyPreviewPosition=null,this.#r({type:"set-history",historyId:h===o.length?null:o[h]?.id||null})}}
>
</label>
<p class="timeline-ends" aria-hidden="true"><span>${this.#t("map_timeline_oldest","Oldest")}</span><span>${d?c:this.#t("map_timeline_newest","Newest")}</span></p>
`:l}
<div class="list">
${o.map((_,h)=>i`
<button class="snapshot ms-row" type="button" aria-current=${String(_.id===this.state.selection.historyId)} aria-disabled=${g} aria-describedby=${b} @click=${()=>{v||this.#r({type:"set-history",historyId:_.id})}}>
<span>${je(_.createdAt,this.dates)}</span><small>${this.#t("v4_history_position","{position} of {count}",{position:h+1,count:o.length})}</small>
</button>
`)}
</div>
</div>
${v?i`<p class="sr-only" id="history-held-reason">${v}</p>`:l}
</div>
`,"history")}#h(){return this.#a.request(),this.#a.status!=="ready"?kt(this.#a.status,this.localize,this.retry):i`<matic-map-diagnostics-v4
.state=${this.state}
.localize=${this.localize}
.disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
></matic-map-diagnostics-v4>`}render(){switch(this.state.workflow){case"rooms":return this.#d();case"plans":case"plan":return this.#i();case"areas":return this.#g();case"draw":return this.#v();case"areaReview":return this.#_();case"history":return this.#y();case"support":return this.#h();case"none":return l}}};customElements.get(se)||customElements.define(se,at);export{tt as MapOptions,at as MaticMapWorkflowV4,Qe as actionReason,Ka as confirmDialog,ja as dialogCopy,Fa as dialogLauncher,Ua as dialogReturnTarget,Ra as drawCancel,jt as drawExit,Xa as drawHint,Ga as drawRecipes,Ea as focusPlanTarget,F as formControls,za as homeShortcuts,Sa as planCancel,ka as planTitle,xa as planTools,Qa as renderMapHelp,Oa as roomTapAnnouncement,Ha as roomsGripLine,qa as roomsSummary,na as shellWorkflowStyles};
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
