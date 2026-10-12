import{A as ee,J as A,b as q,c as W,x as J}from"./chunk-DTOR3URP.js";import{A as X,O as T,a as N,b as M,c as I,y as Q,z as Z}from"./chunk-6HMJNJBR.js";import"./chunk-L62ENE4N.js";import{K as S,L as i,O as Y,P as d,Q as G,R as P,S as w,U as O,c as x,e as H,f as B,n as R,p as j,s as V}from"./chunk-QNZOEGVQ.js";var te={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ae=l=>(...h)=>({_$litDirective$:l,values:h}),z=class{constructor(h){}get _$AU(){return this._$AM._$AU}_$AT(h,e,a){this._$Ct=h,this._$AM=e,this._$Ci=a}_$AS(h,e){return this.update(h,e)}update(h,e){return this.render(...e)}};var{I:ce}=G,se=l=>l;var ne=()=>document.createComment(""),k=(l,h,e)=>{let a=l._$AA.parentNode,t=h===void 0?l._$AB:h._$AA;if(e===void 0){let s=a.insertBefore(ne(),t),n=a.insertBefore(ne(),t);e=new ce(s,n,l,l.options)}else{let s=e._$AB.nextSibling,n=e._$AM,o=n!==l;if(o){let c;e._$AQ?.(l),e._$AM=l,e._$AP!==void 0&&(c=l._$AU)!==n._$AU&&e._$AP(c)}if(s!==t||o){let c=e._$AA;for(;c!==s;){let f=se(c).nextSibling;se(a).insertBefore(c,t),c=f}}}return e},$=(l,h,e=l)=>(l._$AI(h,e),l),de={},oe=(l,h=de)=>l._$AH=h,ie=l=>l._$AH,D=l=>{l._$AR(),l._$AA.remove()};var re=(l,h,e)=>{let a=new Map;for(let t=h;t<=e;t++)a.set(l[t],t);return a},le=ae(class extends z{constructor(l){if(super(l),l.type!==te.CHILD)throw Error("repeat() can only be used in text expressions")}dt(l,h,e){let a;e===void 0?e=h:h!==void 0&&(a=h);let t=[],s=[],n=0;for(let o of l)t[n]=a?a(o,n):n,s[n]=e(o,n),n++;return{values:s,keys:t}}render(l,h,e){return this.dt(l,h,e).values}update(l,[h,e,a]){let t=ie(l),{values:s,keys:n}=this.dt(h,e,a);if(!Array.isArray(t))return this.ut=n,s;let o=this.ut??=[],c=[],f,u,p=0,r=t.length-1,m=0,v=s.length-1;for(;p<=r&&m<=v;)if(t[p]===null)p++;else if(t[r]===null)r--;else if(o[p]===n[m])c[m]=$(t[p],s[m]),p++,m++;else if(o[r]===n[v])c[v]=$(t[r],s[v]),r--,v--;else if(o[p]===n[v])c[v]=$(t[p],s[v]),k(l,c[v+1],t[p]),p++,v--;else if(o[r]===n[m])c[m]=$(t[r],s[m]),k(l,t[p],t[r]),r--,m++;else if(f===void 0&&(f=re(n,m,v),u=re(o,p,r)),f.has(o[p]))if(f.has(o[r])){let g=u.get(n[m]),_=g!==void 0?t[g]:null;if(_===null){let E=k(l,t[p]);$(E,s[m]),c[m]=E}else c[m]=$(_,s[m]),k(l,t[p],_),t[g]=null;m++}else D(t[r]),r--;else D(t[p]),p++;for(;m<=v;){let g=k(l,c[v+1]);$(g,s[m]),c[m++]=g}for(;p<=r;){let g=t[p++];g!==null&&D(g)}return this.ut=n,oe(l,c),Y}});var U=class extends P{constructor(){super(...arguments);this.state=R();this.compact=!1;this.inline=!1}static{this.properties={state:{attribute:!1},localize:{attribute:!1},compact:{type:Boolean,reflect:!0},inline:{type:Boolean,reflect:!0}}}static{this.styles=[N,M,I,S`
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
`]}#a(e,a){return w(this.localize,e,a)}#n(e){this.dispatchEvent(new CustomEvent(A,{detail:e,bubbles:!0,composed:!0}))}#e(e){let a=e.currentTarget.valueAsNumber;Number.isFinite(a)&&this.#n({type:"set-brush",value:a})}render(){let{draw:e}=this.state;return i`
      <div class="controls ms-surface ms-surface--overlay" role="group" aria-label=${this.#a("v4_drawing_precision","Drawing precision")}>
        <div class="row ms-field">
          <label for="brush">${this.#a("brush_size","Brush width")}</label>
          <div class="stepper">
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#a("v4_narrower_brush","Narrower brush")}
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
                aria-label=${this.#a("v4_brush_width_meters","Brush width in meters")}
              />
              <span class="unit">m</span>
            </span>
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#a("v4_wider_brush","Wider brush")}
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
            aria-label=${this.#a("v4_brush_width_slider","Brush width slider")}
            aria-valuetext=${`${e.brushMeters.toFixed(2)} m`}
          />
        </div>
        <p class="hint">${this.#a("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
      </div>
    `}};customElements.get(q)||customElements.define(q,U);var me=(l,h,e=!1,a="room",t=!1,s="mop",n)=>{let o=(c,f,u)=>w(h,c,f,u);switch(l){case"discardDraft":return{title:e?o("v4_discard_plan","Discard plan changes?"):o("v4_discard_area","Discard area changes?"),detail:e?o("v4_discard_plan_detail","Your plan changes have not been saved. Keep editing or discard them."):o("v4_discard_area_detail","Your area changes have not been saved. Keep editing or discard them."),cancelLabel:o("v4_keep_area_editing","Keep editing"),confirmLabel:o("v4_discard","Discard"),action:"discard"};case"confirmDeletePlan":return n&&{title:o("v4_delete_plan","Delete plan?"),detail:o("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:n.name}),...n.successor===void 0?{}:{consequence:n.successor===null?o("v4_delete_plan_none","You'll have no default plan."):o("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:n.successor})},cancelLabel:o("v4_cancel","Cancel"),confirmLabel:o("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return n&&{title:o("v4_delete_area","Delete area?"),detail:o("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:n.name}),...n.successor===void 0?{}:{consequence:n.successor===null?o("v4_delete_area_none","No custom area will be selected."):o("v4_delete_area_selected","{area} becomes the selected custom area.",{area:n.successor})},cancelLabel:o("v4_cancel","Cancel"),confirmLabel:o("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:s==="mop"?o("v4_reset_mop_cadence_title","Reset mopping progress?"):o("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:t?o("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:a}):o("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:a}),cancelLabel:o("v4_cancel","Cancel"),confirmLabel:o("v4_reset","Reset"),action:"reset-room-cadence"};case null:return}};var F=["vacuum","mop","vacuum_and_mop"],L=["quick","standard","heavy_duty"],y=l=>l.currentTarget.value,C=l=>l.currentTarget.checked,K=class extends P{constructor(){super(...arguments);this.state=R();this._historyPreviewPosition=null;this.#a=new J(this,()=>import("./diagnostics-panel-IHQBVXSS.js"));this.#n=""}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0}}}static{this.styles=[N,M,I,S`
.workflow-fields { border: 0; margin: 0; padding: 0; min-inline-size: 0; }
:host { display: block; min-inline-size: 0; container-type: inline-size; }
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
/* As the shell's notices: the text keeps the primary colour and the tone is
   the inline-start rule and the tint (design-system.md). */
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
.plan-meta { align-items: stretch; }
.plan-active { min-inline-size: 0; }
.plan-active .ms-row__body strong { font-size: var(--ms-t-sm); white-space: nowrap; }
.plan-active .ms-row__body small { max-inline-size: 32ch; }
.plan-options { --ms-local: var(--ms-surface-sunken); display: grid; gap: var(--ms-space-3); padding: var(--ms-space-4); border: 1px solid var(--ms-line); border-radius: var(--ms-radius-md); background: var(--ms-local); }
.plan-room .room-choice { grid-template-columns: minmax(0, 1fr) auto; }
.plan-room-label { display: flex; align-items: center; gap: var(--ms-space-2); min-block-size: var(--ms-control); }
.plan-room { display: grid; gap: var(--ms-space-2); }
.plan-option { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: start; gap: var(--ms-space-2); }
.plan-option input[type="checkbox"] { inline-size: 1.2rem; block-size: 1.2rem; margin: 0.1rem 0 0; accent-color: var(--ms-resolved-indicator, var(--ms-accent)); }
.plan-option-copy, .plan-threshold-copy { display: grid; gap: var(--ms-space-1); min-inline-size: 0; }
.cadence-config { grid-column: 1 / -1; grid-template-columns: minmax(0, 1fr); display: grid; gap: var(--ms-space-2); }
.cadence-config > summary { cursor: pointer; min-block-size: var(--ms-control-sm); font-weight: var(--ms-w-bold); }
.cadence-fields { display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--ms-space-2); min-inline-size: 0; }
.cadence-fields > .ms-field { min-inline-size: 0; }
.plan-option-copy strong, .plan-threshold-copy strong { font-size: var(--ms-t-sm); line-height: var(--ms-lh-snug); }
.plan-option-copy small, .plan-threshold-copy small { color: var(--ms-text-quiet); font-size: var(--ms-t-xs); font-weight: var(--ms-w-regular); line-height: var(--ms-lh-snug); }
.plan-threshold { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: var(--ms-space-1) var(--ms-space-3); align-items: start; }
.plan-threshold .plan-threshold-copy { grid-column: 1; }
.plan-threshold .threshold-value { color: var(--ms-text); font-size: var(--ms-t-sm); font-weight: var(--ms-w-bold); }
.plan-threshold > input[type="range"] { grid-column: 1 / -1; inline-size: 100%; min-block-size: var(--ms-control-sm); }
.toolbar { display: flex; flex-wrap: wrap; gap: var(--ms-space-2); }
.checkbox { display: flex; align-items: center; gap: var(--ms-space-2); min-block-size: var(--ms-control); font-size: var(--ms-t-xs); font-weight: var(--ms-w-medium); }
.checkbox input { inline-size: 1.2rem; block-size: 1.2rem; }
.floor small, .snapshot small, .list-button small { margin-inline-start: auto; color: color-mix(in srgb, var(--ms-text) 78%, var(--ms-local)); font-weight: var(--ms-w-regular); }
.timeline { display: grid; gap: var(--ms-space-2); }
.timeline input[type="range"] { inline-size: 100%; min-block-size: var(--ms-control); }
@media (max-width: 25rem) { .split { grid-template-columns: 1fr; } }
@container (max-width: 38rem) { .plan-meta { grid-template-columns: 1fr; } }
.ms-chip { display: inline-flex; align-items: center; block-size: 1.5rem; padding-inline: var(--ms-space-2); border: 1px solid var(--ms-line); border-radius: var(--ms-radius-pill); background: var(--ms-surface-sunken); color: var(--ms-text); font-size: var(--ms-t-xs); font-weight: var(--ms-w-regular); vertical-align: middle; }
`]}#a;#n;willUpdate(e){if(!e.has("state"))return;let{workflow:a,selection:t}=this.state,s=`${a}:${t.floorId}:${t.historyId??"live"}`;s!==this.#n&&(this.#n=s,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#e(e,a,t){return w(this.localize,e,a,t)}#r(e){return e==="vacuum"?this.#e("vacuum","Vacuum"):e==="mop"?this.#e("mop","Mop"):this.#e("vacuum_and_mop","Vacuum + mop")}#o(e){return e==="quick"?this.#e("quick","Quick"):e==="standard"?this.#e("standard","Optimal"):this.#e("heavy_duty","Heavy duty")}#m(e){let a=this.#r(e.cleaningMode);return e.cleaningMode==="mop"?a:`${a} \xB7 ${this.#e("v4_vacuum_coverage_summary","{coverage} vacuum coverage",{coverage:this.#o(e.coverageSetting)})}`}#l(e){return e==="vacuum"?d:i`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#p(e){return e==="mop_due"?this.#e("v4_cadence_mop_due_reason","Vacuum and mop are due"):e==="coverage_due"?this.#e("v4_cadence_coverage_due_reason","Vacuum rotation is due"):e==="mop_progress_unverified"?this.#e("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):e==="coverage_progress_unverified"?this.#e("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):this.#e("v4_cadence_due_unknown_reason","Schedule setting due")}#c(e){return e==="coverage_requires_vacuum"?this.#e("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."):e==="plan_disabled"?this.#e("v4_preview_plan_disabled","This plan is paused. Enable it to preview and run."):e==="shared_schedule_unavailable"?this.#e("v4_preview_shared_unavailable","The shared room schedule doesn't match this map. Review the schedule's settings."):e==="cadence_progress_unverified"?this.#e("v4_preview_cadence_progress_unverified","Can't run this plan until you reset the room schedule progress Home Assistant can't confirm."):e==="cadence_identity_changed"||e==="cadence_identity_unavailable"?this.#e("v4_preview_identity_unavailable","Can't run this plan until Home Assistant can match its rooms to the current map."):e==="plan_has_no_rooms"?this.#e("v4_preview_no_rooms","Can't run this plan until it has at least one room."):e==="plan_room_limit"?this.#e("v4_preview_room_limit","Can't run this plan until it has 100 rooms or fewer."):this.#e("v4_preview_invalid","Can't run this plan until you open Edit and save it again.")}#t(e){this.dispatchEvent(new CustomEvent(A,{detail:e,bubbles:!0,composed:!0}))}#_(){switch(this.state.workflow){case"rooms":case"plans":case"plan":return{loading:this.#e("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#e("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#e("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#e("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#e("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#e("v4_loading_history","Loading map history\u2026"),unavailable:this.#e("v4_history_unavailable","Map history is unavailable right now."),empty:this.#e("v4_no_map_history","No saved map snapshots yet.")};default:return{loading:this.#e("map_loading","Loading\u2026"),unavailable:this.#e("v4_workspace_unavailable","The cleaning panel isn't available right now."),empty:this.#e("v4_nothing_saved","Nothing saved yet.")}}}#i({status:e,value:a,problem:t},s){let n=this.#_();if(a===null&&(e==="idle"||e==="loading"))return i`<div class="loading" role="status">${n.loading}</div>`;if(e==="error"){let o=this.state.workflow;return i`
        <div class="stack">
          <div class="problem" role="alert">${n.unavailable} ${t==="request-failed"?this.#e("v4_try_again","Try again shortly."):this.#e("v4_return_live_retry","Return to the live map and retry.")}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#t({type:"open-workflow",workflow:o})}>${this.#e("v4_retry","Try again")}</button>
          </div>
        </div>
      `}return e==="empty"?i`<div class="empty">${n.empty}</div>`:s}#b(){let e=this.state.resources.plans,a=j(this.state),t=a!==null,s=this.state.selection.roomIds.length>=100;return this.#i(e,i`
      <div class="stack">
        <h3 class="group-heading" id="rooms-heading">${this.#e("v4_rooms_to_clean","Rooms to clean")}</h3>
        <div class="list" role="group" aria-labelledby="rooms-heading">
          ${(e.value?.rooms||[]).map(n=>{let o=this.state.selection.roomIds.includes(n.roomId);return i`
              <div class="room ms-row ms-row--stack" data-selected=${String(o)}>
                <label class="room-choice">
                  <input
                    type="checkbox"
                    .checked=${o}
                    ?disabled=${!o&&s}
                    @change=${()=>this.#t({type:"toggle-room",roomId:n.roomId})}
                  >
                  <strong>${n.name}</strong>
                  ${o?i`<small>${this.#e("v4_room_ready","Ready")}</small>`:d}
                </label>
                ${o?this.#y(n.roomId,this.state.selection.roomSettings.find(c=>c.roomId===n.roomId)||{roomId:n.roomId,cleaningMode:"vacuum",coverageSetting:"standard"}):d}
              </div>
            `})}
        </div>
        ${s?i`<p class="subtle" role="status">${this.#e("v4_room_limit_reached","Up to {limit} rooms fit, so remove one to add another.",{limit:100})}</p>`:d}
        <p class="subtle">${this.#e("v4_room_selection_hint","Select rooms here or directly on the map. The map and list stay in sync.")}</p>
        <label class="plan-option">
          <input type="checkbox" .checked=${!this.state.selection.useRoomSchedule} @change=${n=>this.#t({type:"set-use-room-schedule",value:!C(n)})}>
          <span class="plan-option-copy">
            <strong>${this.#e("v4_override_room_schedule","Override shared schedule settings")}</strong>
            <small>${this.#e("v4_override_room_schedule_hint","This clean follows the shared schedule unless you turn this on to use the settings chosen here. Anything due stays due, and matching cleans still count toward the schedule.")}</small>
          </span>
        </label>
        ${this.state.selection.roomIds.map(n=>{let o=e.value?.rooms.find(c=>c.roomId===n);return o?.sharedCadence||o?.sharedCadenceProgress||o?.sharedCadenceReasons?.length?i`<p class="subtle">${o.name}: ${this.#h(o.sharedCadence,o.sharedCadenceProgress,o.sharedCadenceReasons)}</p>`:d})}
        ${this.state.manualRoomPreview.status==="loading"?i`<p role="status" class="subtle">${this.#e("v4_room_preview_loading","Checking settings\u2026")}</p>`:d}
        ${this.state.manualRoomPreview.status==="error"?i`<div class="stack">
            <div role="alert" class="problem">${this.#e("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#t({type:"retry-room-preview"})}>${this.#e("v4_retry","Try again")}</button></div>
          </div>`:d}
        ${t?this.#f(a.preview):d}
      </div>
    `)}#f(e){let a=new Set(e.missionBoundaries);return i`
      <section class="stack" aria-labelledby="effective-rooms-heading" aria-live="polite">
        <h3 class="group-heading" id="effective-rooms-heading">${this.#e("v4_effective_room_preview","Effective cleaning preview")}</h3>
        ${e.blocker?i`<p class="problem" role="alert">${e.blocker==="invalid_cadence_policy"&&this.state.selection.useRoomSchedule&&this.state.selection.roomSettings.some(t=>t.cleaningMode!=="vacuum")?this.#e("v4_room_preview_schedule_override","The shared schedule can't use the cleaning mode you chose. Turn on Override shared schedule settings, or choose a mode that works with the schedule."):this.#e("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.")}</p>`:d}
        ${e.rooms.length?i`<ol class="list" aria-label=${this.#e("v4_effective_room_order","Effective room order")}>
            ${e.rooms.map((t,s)=>i`
              <li class="ms-row ms-row--stack">
                ${a.has(s)?i`<strong>${this.#e("v4_room_mission_boundary","New part (the robot may stop at the dock first)")}</strong>`:d}
                <strong>${t.name}</strong>
                <span class="subtle">${this.#m(t)}</span>
                ${t.cadenceReasons.length?i`<span class="subtle">${t.cadenceReasons.map(n=>this.#p(n)).join("; ")}</span>`:d}
              </li>
            `)}
          </ol>`:d}
      </section>
    `}#y(e,a){let t=this.state.resources.plans.value?.rooms.find(s=>s.roomId===e)?.name||this.#e("v4_room","Room");return i`
      <div class="split room-settings">
        <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
          <select
            aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:t})}
            .value=${a.cleaningMode}
            @change=${s=>this.#t({type:"patch-room-settings",roomId:e,cleaningMode:y(s)})}
          >${F.map(s=>i`<option value=${s} ?selected=${s===a.cleaningMode}>${this.#r(s)}</option>`)}</select>
        </label>
        <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
          <select
            aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:t})}
            ?disabled=${a.cleaningMode==="mop"}
            .value=${a.coverageSetting}
            @change=${s=>this.#t({type:"patch-room-settings",roomId:e,coverageSetting:y(s)})}
          >${L.map(s=>i`<option value=${s} ?selected=${s===a.coverageSetting}>${this.#o(s)}</option>`)}</select>
        </label>
      </div>
      ${this.#l(a.cleaningMode)}
    `}#u(e){return e.cadence||{scope:"plan",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1}}#h(e,a,t=a?.reasons||[]){if(t.includes("coverage_requires_vacuum"))return this.#c("coverage_requires_vacuum");if(t.includes("identity_changed")||t.includes("room_not_on_current_map"))return this.#e("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(t.includes("shared_schedule_unavailable"))return this.#e("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(t.includes("mop_progress_unverified")||t.includes("coverage_progress_unverified")){let c=[];return t.includes("mop_progress_unverified")&&c.push(this.#e("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),t.includes("coverage_progress_unverified")&&c.push(this.#e("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),c.join(" ")}if(t.includes("invalid_cadence_policy"))return this.#e("v4_cadence_policy_invalid","The room schedule needs review before it can be applied.");if(!e||!e.mopEveryN&&!e.coverageEveryN)return this.#e("v4_cadence_not_enabled","No recurring room schedule is enabled.");let s=[],n=a?.mopDue||a?.reasons.includes("mop_due"),o=a?.coverageDue||a?.reasons.includes("coverage_due");return e.mopEveryN&&s.push(n?this.#e("v4_cadence_mop_due","Vacuum and mop is due on this clean."):this.#e("v4_cadence_mop_progress","Mop every {interval} cleans; {completed} counted since the last mop.",{interval:e.mopEveryN,completed:a?.mopProgress??0})),e.coverageEveryN&&s.push(o?this.#e("v4_cadence_coverage_due","{coverage} vacuum rotation is due on this clean.",{coverage:this.#o(e.periodicCoverageSetting||"standard")}):this.#e("v4_cadence_coverage_progress","Vacuum rotation every {interval} cleans; {completed} counted so far.",{interval:e.coverageEveryN,completed:a?.coverageProgress??0})),s.join(" ")}#s(e,a){let t=this.state.planDraft.rooms[e];t&&this.#d(e,{cadence:{...this.#u(t),...a}})}#v(e,a,t){let s=e.currentTarget,n=s.value;if(n===""){t==="mopEveryN"?this.#s(a,{mopEveryN:null,doMopNext:!1}):this.#s(a,{coverageEveryN:null,doCoverageNext:!1});return}let o=Number(n);if(!Number.isInteger(o)||o<1||o>100){s.reportValidity();return}let c=this.state.planDraft.rooms[a];if(c){if(t==="coverageEveryN"){this.#s(a,{coverageEveryN:o,periodicCoverageSetting:c.cadence?.periodicCoverageSetting||c.coverageSetting});return}this.#s(a,{[t]:o})}}#$(e,a,t){let s=this.state.planDraft,n=this.#u(e),o=e.cadenceProgress,f=(s.id?this.state.resources.plans.value?.plans.find(b=>b.id===s.id)?.rooms.find(b=>b.roomId===e.roomId):void 0)?.cadence?.scope??null,u=this.state.resources.plans.value?.rooms.find(b=>b.roomId===e.roomId),p=!!(u?.sharedCadence||u?.sharedCadenceProgress),r=!!(n.mopEveryN||n.coverageEveryN),m=!!(o?.mopProgress||n.doMopNext||e.cadenceReasons?.includes("mop_progress_unverified")),v=!!(o?.coverageProgress||n.doCoverageNext||e.cadenceReasons?.includes("coverage_progress_unverified")),g=s.dirty||this.state.command!=="idle"||this.state.managedLock||this.state.activity!=="idle"&&this.state.activity!=="docked"||this.state.dataMode!=="live",_=f!==null&&f!==n.scope?n.scope==="shared"?this.#e("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted."):this.#e("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule."):f===null&&r?n.scope==="shared"?p?this.#e("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted."):this.#e("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero."):this.#e("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):this.#e("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."),E=this.#e("v4_room_cadence_named","Room schedule for {room}",{room:t});return i`
      <details class="plan-option cadence-config">
        <summary>${E}</summary>
        <p class="subtle">${this.#e("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
        <div class="cadence-fields">
          <label class="field ms-field">${this.#e("v4_cadence_scope","Count cleans")}
            <select aria-label=${this.#e("v4_cadence_scope_named","Count cleans for {room}",{room:t})} .value=${n.scope} @change=${b=>this.#s(a,{scope:y(b)})}>
              <option value="plan" ?selected=${n.scope==="plan"}>${this.#e("v4_cadence_this_plan","In this plan only")}</option>
              <option value="shared" ?selected=${n.scope==="shared"}>${this.#e("v4_cadence_shared","Across all plans (recommended)")}</option>
            </select>
          </label>
          <label class="field ms-field">${this.#e("v4_cadence_mop_interval","Vacuum and mop every N cleans")}
            <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${this.#e("v4_cadence_mop_interval_named","How often to mop {room}, every 1 to 100 cleans",{room:t})} .value=${n.mopEveryN?.toString()||""} ?disabled=${e.cleaningMode!=="vacuum"} @change=${b=>this.#v(b,a,"mopEveryN")}>
          </label>
          <label class="field ms-field">${this.#e("v4_cadence_coverage_interval","Vacuum rotation every N cleans")}
            <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${this.#e("v4_cadence_coverage_interval_named","How often to add a vacuum rotation in {room}, every 1 to 100 cleans",{room:t})} ?disabled=${e.cleaningMode==="mop"} .value=${n.coverageEveryN?.toString()||""} @change=${b=>this.#v(b,a,"coverageEveryN")}>
          </label>
          ${n.coverageEveryN?i`
            <label class="field ms-field">${this.#e("v4_cadence_periodic_coverage","Vacuum rotation level")}
              <select aria-label=${this.#e("v4_cadence_periodic_coverage_named","Vacuum rotation level for {room}",{room:t})} ?disabled=${e.cleaningMode==="mop"} .value=${n.periodicCoverageSetting||"standard"} @change=${b=>this.#s(a,{periodicCoverageSetting:y(b)})}>${L.map(b=>i`<option value=${b} ?selected=${b===n.periodicCoverageSetting}>${this.#o(b)}</option>`)}</select>
            </label>
          `:d}
        </div>
        <p class="subtle" role="status">${_}</p>
        ${e.cleaningMode==="mop"?i`
          <p class="subtle">${n.coverageEveryN?this.#c("coverage_requires_vacuum"):this.#e("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming.")}</p>
          ${n.coverageEveryN?i`<button type="button" class="ms-btn ms-btn--secondary"
            @click=${()=>this.#s(a,{scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1})}
          >${this.#e("v4_cadence_clear_room_coverage","Turn off")}</button>`:d}
        `:d}
        ${e.cleaningMode!=="vacuum"?i`<p class="subtle">${this.#e("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum.")}</p>`:d}
        ${n.mopEveryN&&e.cleaningMode==="vacuum"?i`<p class="subtle">${this.#e("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</p>`:d}
        <div class="plan-options" role="group" aria-label=${this.#e("v4_cadence_next_actions_named","Next clean options for {room}",{room:t})}>
          <label class="plan-option"><input type="checkbox" aria-label=${this.#e("v4_cadence_do_mop_next_named","Do vacuum and mop on the next clean for {room}",{room:t})} .checked=${n.doMopNext} ?disabled=${!n.mopEveryN} @change=${b=>this.#s(a,{doMopNext:C(b)})}><span class="plan-option-copy"><strong>${this.#e("v4_cadence_do_mop_next","Do vacuum and mop on the next clean")}</strong></span></label>
          <label class="plan-option"><input type="checkbox" aria-label=${this.#e("v4_cadence_do_coverage_next_named","Add a vacuum rotation on the next clean for {room}",{room:t})} .checked=${n.doCoverageNext} ?disabled=${!n.coverageEveryN||e.cleaningMode==="mop"} @change=${b=>this.#s(a,{doCoverageNext:C(b)})}><span class="plan-option-copy"><strong>${this.#e("v4_cadence_do_coverage_next","Add a vacuum rotation on the next clean")}</strong></span></label>
        </div>
        ${n.coverageEveryN?i`<p class="subtle">${this.#e("v4_cadence_coverage_verification_hint","A vacuum rotation counts only after the robot confirms the vacuum coverage and that the clean finished. If it can't confirm, the rotation stays due for the next clean.")}</p>`:d}
        <p class="subtle" aria-live="polite">${this.#h(n,o,e.cadenceReasons)}</p>
        ${s.id&&(n.mopEveryN||n.coverageEveryN||m||v)?i`
          <div class="toolbar">
            ${n.mopEveryN||m?i`<button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:t})}
              data-dialog-launcher="confirmResetCadence"
              ?disabled=${g}
              @click=${()=>this.#t({type:"request-room-cadence-reset",planId:s.id,roomId:e.roomId,mode:"mop"})}
            >${this.#e("v4_reset_mop_cadence_button","Reset mopping")}</button>`:d}
            ${n.coverageEveryN||v?i`<button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:t})}
              data-dialog-launcher="confirmResetCadence"
              ?disabled=${g}
              @click=${()=>this.#t({type:"request-room-cadence-reset",planId:s.id,roomId:e.roomId,mode:"coverage"})}
            >${this.#e("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`:d}
          </div>
          <p class="subtle">${this.#e("v4_reset_cadence_hint","Reset is available for a saved plan while the robot is idle. Cleaning history is kept separately.")}</p>
        `:d}
      </details>
    `}#w(e){this.#t({type:"toggle-room",roomId:e})}#d(e,a){let t=this.state.planDraft.rooms.map((s,n)=>n===e?{...s,...a}:s);this.#t({type:"patch-plan-draft",patch:{rooms:t}})}#g(e,a){let t=e+a,s=[...this.state.planDraft.rooms];if(t<0||t>=s.length)return;let[n]=s.splice(e,1);n&&(s.splice(t,0,n),this.#t({type:"patch-plan-draft",patch:{rooms:s}}))}#k(){let e=this.state.resources.plans;return this.#i(e,i`
      <div class="stack">
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#t({type:"select-plan",planId:null})}>
          ${T(Q)}<span>${this.#e("v4_create_plan","Create a plan")}</span>
        </button>
        ${(e.value?.plans||[]).map(a=>i`
          <button class="ms-row ms-row--card" type="button" @click=${()=>this.#t({type:"select-plan",planId:a.id})}>
            <span class="ms-row__body"><strong>${a.name}${a.enabled?d:i` <span class="ms-chip">${this.#e("v4_paused","Paused")}</span>`}</strong>
              <small>${a.rooms.length===1?this.#e("v4_plan_room_count_one","1 room"):this.#e("v4_plan_room_count","{count} rooms",{count:a.rooms.length})}</small>
            </span>
            <span class="ms-row__trail">${this.#e("v4_edit_plan","Edit plan")}</span>
          </button>
        `)}
      </div>
    `)}#x(){let e=this.state.resources.plans,a=e.value,t=this.state.planDraft,s=t.rooms.map(r=>({room:r,label:a?.rooms.find(m=>m.roomId===r.roomId)?.name||"Room",selected:!0})),n=(a?.rooms||[]).filter(r=>!t.rooms.some(m=>m.roomId===r.roomId)).map(r=>({room:{roomId:r.roomId,cleaningMode:"vacuum",coverageSetting:"standard"},label:r.name,selected:!1})),o=[...s,...n],c=t.rooms.length>=100,f=new Set(t.rooms.map(r=>`${r.cleaningMode}:${r.coverageSetting}`)).size>1,p=(t.id?a?.plans.find(r=>r.id===t.id):void 0)?.nextRunPreview;return this.#i(e,i`
      <div class="stack">
        <label class="field ms-field">${this.#e("plan_name","Plan name")}
          <input
            maxlength="128"
            autocomplete="off"
            .value=${t.name}
            @input=${r=>this.#t({type:"patch-plan-draft",patch:{name:y(r)}})}
          >
        </label>
        <div class="split plan-meta">
          <label class="field ms-field">${this.#e("plan_run_behavior","Cleaning order")}
            <select
              .value=${t.runBehavior}
              @change=${r=>this.#t({type:"patch-plan-draft",patch:{runBehavior:y(r)==="ordered"?"ordered":"intelligent"}})}
            >
              <option value="intelligent">${this.#e("plan_intelligent","Intelligent rotation")}</option>
              <option value="ordered">${this.#e("plan_ordered","Saved order")}</option>
            </select>
          </label>
          <div class="ms-row plan-active" data-active=${String(t.enabled)}>
            <div class="ms-row__body">
              <strong id="plan-active-title">${this.#e("v4_plan_can_run","Plan enabled")}</strong>
              <small id="plan-active-desc">${t.enabled?this.#e("v4_plan_can_run_on","When it's on, this plan can run from here, from automations and from Home Assistant actions."):this.#e("v4_plan_can_run_off","Paused. Turn this on to make the plan available.")}</small>
            </div>
            <button
              class="ms-switch"
              type="button"
              role="switch"
              aria-checked=${String(t.enabled)}
              aria-labelledby="plan-active-title"
              aria-describedby="plan-active-desc"
              @click=${()=>this.#t({type:"patch-plan-draft",patch:{enabled:!t.enabled}})}
            ></button>
          </div>
        </div>
        <h3 class="group-heading" id="plan-rooms-heading">${this.#e("v4_plan_rooms_heading","Rooms in this plan")}</h3>
        ${f?i`
          <p class="subtle plan-transition-hint">${this.#e("v4_plan_mixed_settings","Rooms with different cleaning settings may be cleaned in separate parts, and the robot may briefly touch the dock between parts.")}
            ${t.runBehavior==="ordered"?this.#e("v4_plan_group_settings","Placing rooms with matching settings together can reduce transitions."):this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}
          </p>
        `:d}
        <div class="list" role="group" aria-labelledby="plan-rooms-heading">
          ${le(o,({room:r})=>r.roomId,({room:r,label:m,selected:v})=>{let g=v?t.rooms.findIndex(_=>_.roomId===r.roomId):-1;return i`
              <div class="room plan-room ms-row ms-row--stack" data-selected=${String(v)}>
                <div class="room-choice">
                  <label class="plan-room-label">
                  <input type="checkbox" .checked=${v} ?disabled=${!v&&c} @change=${()=>this.#w(r.roomId)}>
                  <strong>${v?`${g+1}. `:""}${m}</strong>
                  </label>
                  ${v?i`
                    <span>
                      <button class="icon-button ms-btn ms-btn--icon" type="button" aria-label=${this.#e("move_room_up","Move {room} earlier",{room:m})} ?disabled=${g===0} @click=${_=>{_.preventDefault(),this.#g(g,-1)}}>${T(Z)}</button>
                      <button class="icon-button ms-btn ms-btn--icon" type="button" aria-label=${this.#e("move_room_down","Move {room} later",{room:m})} ?disabled=${g===t.rooms.length-1} @click=${_=>{_.preventDefault(),this.#g(g,1)}}>${T(X)}</button>
                    </span>
                  `:d}
                </div>
                ${v?i`
                  <div class="split room-settings">
                    <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
                      <select aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:m})} .value=${r.cleaningMode} @change=${_=>this.#d(g,{cleaningMode:y(_)})}>${F.map(_=>i`<option value=${_} ?selected=${_===r.cleaningMode} ?disabled=${!!("cadence"in r&&r.cadence?.mopEveryN&&_!=="vacuum")}>${this.#r(_)}</option>`)}</select>
                    </label>
                    <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
                      <select aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:m})} ?disabled=${r.cleaningMode==="mop"} .value=${r.coverageSetting} @change=${_=>this.#d(g,{coverageSetting:y(_)})}>${L.map(_=>i`<option value=${_} ?selected=${_===r.coverageSetting}>${this.#o(_)}</option>`)}</select>
                    </label>
                  </div>
                  ${this.#l(r.cleaningMode)}
                  ${this.#$(r,g,m)}
                `:d}
              </div>
            `})}
        </div>
        ${c?i`<p class="subtle" role="status">${this.#e("v4_room_limit_reached","Up to {limit} rooms fit, so remove one to add another.",{limit:100})}</p>`:d}
        <section class="stack" aria-labelledby="next-run-preview-heading">
          <h3 class="group-heading" id="next-run-preview-heading">${this.#e("v4_next_run_preview","Next run")}</h3>
          <p class="subtle">${this.#e("v4_next_run_preview_hint","Preview for the next run. An active run keeps its original settings; this preview is checked again before cleaning starts.")}</p>
          ${t.id?p?p.blocker?i`<p class="problem" role="alert">${this.#c(p.blocker)}</p>`:/^[0-9a-f]{64}$/u.test(p.previewToken??"")?i`
                  ${t.dirty?i`<p class="notice" role="status">${this.#e("v4_next_run_preview_stale","This preview shows the saved plan. Save your edits to calculate the updated order and settings before starting.")}</p>`:d}
                  <ol class="list" aria-label=${this.#e("v4_next_run_preview_order","Next-run room order and effective settings")}>
                    ${p.rooms.map((r,m)=>{let v=1+p.missionBoundaries.filter(g=>g<=m).length;return i`<li class="ms-row ms-row--stack">
                        <span class="subtle">${this.#e("v4_next_run_mission","Part {number}",{number:v})}</span>
                        <strong>${m+1}. ${r.name}</strong>
                        <span>${this.#m(r)}</span>
                        ${r.cadenceReasons.length?i`<small>${r.cadenceReasons.map(g=>this.#p(g)).join(" \xB7 ")}</small>`:d}
                      </li>`})}
                  </ol>
                `:i`<p class="problem" role="status">${this.#e("v4_next_run_preview_unavailable","The next-run preview isn't available. Reload your plans, then try again.")}</p>`:i`<p class="problem" role="status">${this.#e("v4_next_run_preview_unavailable","The next-run preview isn't available. Reload your plans, then try again.")}</p>`:i`<p class="subtle">${this.#e("v4_next_run_preview_save_first","Save this plan to calculate its exact room order and effective settings.")}</p>`}
        </section>
        <h3 class="group-heading" id="completion-heading">${this.#e("v4_completion_options","When a run ends")}</h3>
        <div class="plan-options" role="group" aria-labelledby="completion-heading">
          <label class="plan-option">
            <input type="checkbox" .checked=${t.returnToBase} @change=${r=>this.#t({type:"patch-plan-draft",patch:{returnToBase:C(r)}})}>
            <span class="plan-option-copy">
              <strong>${this.#e("plan_return_to_base","Return to the dock when finished")}</strong>
              <small>${this.#e("plan_return_to_base_hint","After the last selected room, the robot returns to the dock.")}</small>
            </span>
          </label>
          <label class="plan-option">
            <input type="checkbox" .checked=${t.finishCurrentRoom} @change=${r=>this.#t({type:"patch-plan-draft",patch:{finishCurrentRoom:C(r)}})}>
            <span class="plan-option-copy">
              <strong>${this.#e("plan_finish_room","Finish the current room after Stop")}</strong>
              <small>${this.#e("plan_finish_room_hint","When enough of the room is complete, finish it before docking. Never start another room.")}</small>
            </span>
          </label>
          ${t.finishCurrentRoom?i`
            <label class="plan-threshold ms-field">
              <span class="plan-threshold-copy">
                <strong>${this.#e("plan_threshold","Minimum room progress")}</strong>
                <small>${this.#e("plan_threshold_hint","When Stop is requested, the robot checks this progress: below it stops now; at or above it finishes this room before docking.")}</small>
              </span>
              <span class="threshold-value">${t.finishCurrentRoomThreshold}%</span>
              <input type="range" min="0" max="100" step="5" .value=${String(t.finishCurrentRoomThreshold)} aria-label=${this.#e("plan_threshold","Minimum room progress")} @input=${r=>this.#t({type:"patch-plan-draft",patch:{finishCurrentRoomThreshold:Number(y(r))}})}>
            </label>
          `:d}
        </div>
        <div class="toolbar">
          ${V(this.state,"confirmDeletePlan")?i`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_delete_plan_label","Delete plan")}
              data-dialog-launcher="confirmDeletePlan"
              @click=${()=>this.#t({type:"open-dialog",dialog:"confirmDeletePlan"})}
            >${this.#e("plan_delete","Delete")}</button>
          `:d}
        </div>
      </div>
    `)}#C(){let e=this.state.resources.areas;return i`
      <div class="stack">
        <p class="subtle">${this.state.draw.tool==="outline"?this.#e("v4_zone_coverage","Place points around the area. Shading shows where the robot cleans inside the outline; narrow edges may stay uncovered."):this.#e("v4_draw_floor_hint","Paint only on the mapped floor. Zooming and panning never change the area.")}</p>
        ${this.state.draw.tool!=="outline"?i`<p class="subtle">${this.#e("v4_keyboard_draw_help","Keyboard: focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>`:d}
        ${this.#i(e,i`
          <div class="group">
            <h3 class="group-heading" id="areas-heading">${this.#e("area_workspace_title","Custom areas")}</h3>
            <div class="list" role="group" aria-labelledby="areas-heading">
            <button class="list-button ms-row ms-row" type="button" @click=${()=>this.#t({type:"select-area",areaId:null})}>${this.#e("area_new","New area")}</button>
            ${(e.value?.areas||[]).map(a=>i`
              <button class="list-button ms-row ms-row" type="button" @click=${()=>{this.#t({type:"select-area",areaId:a.id,workflow:"areaReview"})}}>
                <span>${a.name}</span>
                <small>${a.status==="current"?this.#e("area_workspace_ready","Ready"):this.#e("v4_review","Review")}</small>
              </button>
            `)}
            </div>
          </div>
        `)}
      </div>
    `}#E(){let e=this.state.areaDraft,a=e.canRebind||e.status==="review",t=!a&&(e.status==="stale"||e.status==="unknown");return i`
      <div class="stack">
        ${a?i`<div class="notice" data-tone="warning" role="status">${this.#e("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:d}
        ${t?i`<div class="problem" role="alert">${this.#e("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:d}
        <label class="field ms-field">${this.#e("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} @input=${s=>this.#t({type:"patch-area-draft",patch:{name:y(s)}})}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} @change=${s=>this.#t({type:"patch-area-draft",patch:{cleaningMode:y(s)}})}>${F.map(s=>i`<option value=${s} ?selected=${s===e.cleaningMode}>${this.#r(s)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} @change=${s=>this.#t({type:"patch-area-draft",patch:{coverageSetting:y(s)}})}>${L.map(s=>i`<option value=${s} ?selected=${s===e.coverageSetting}>${this.#o(s)}</option>`)}</select>
          </label>
        </div>
        ${this.#l(e.cleaningMode)}
        <div class="toolbar">
          <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#t({type:"open-workflow",workflow:"draw"})}>${this.#e("v4_edit_outline","Redraw")}</button>
          ${V(this.state,"confirmDeleteArea")?i`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_delete_area_label","Delete area")}
              data-dialog-launcher="confirmDeleteArea"
              @click=${()=>this.#t({type:"open-dialog",dialog:"confirmDeleteArea"})}
            >${this.#e("area_delete","Delete")}</button>
          `:d}
        </div>
      </div>
    `}#R(){let e=this.state.resources.history,a=e.value,t=a?.floors.find(u=>u.id===this.state.selection.floorId)||a?.floors.find(u=>u.active)||a?.floors[0],s=t?.snapshots||[],n=this.state.selection.historyId?Math.max(0,s.findIndex(u=>u.id===this.state.selection.historyId)):s.length,o=t?.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_return_current_floor","Return to current floor"),c=this._historyPreviewPosition??n,f=s[c];return this.#i(e,i`
      <div class="stack">
        ${(a?.floors.length||0)>1?i`
          <div class="group">
            <h3 class="group-heading" id="floors-heading">${this.#e("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(a?.floors||[]).map((u,p)=>i`
              <button
                class="floor ms-row ms-row"
                type="button"
                aria-current=${String(u.id===t?.id)}
                @click=${()=>this.#t({type:"set-floor",floorId:u.id})}
              >
                <span>${u.label||(u.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:u.ordinal??p}))}</span>
                <small>${u.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_read_only","Read only")}</small>
              </button>
            `)}
            </div>
          </div>
        `:d}
        <div class="timeline">
          <label class="field ms-field">${this.#e("map_timeline_label","Map timeline")}
            <input
              type="range"
              min="0"
              max=${String(s.length)}
              step="1"
              .value=${String(c)}
              aria-valuetext=${f?O(f.createdAt,this.dates):o}
              ?disabled=${!s.length}
              @input=${u=>{this._historyPreviewPosition=Number(y(u))}}
              @change=${u=>{let p=Number(y(u));this._historyPreviewPosition=null,this.#t({type:"set-history",historyId:p===s.length?null:s[p]?.id||null})}}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId&&!!t?.active)} @click=${()=>this.#t({type:"set-history",historyId:null})}><span>${o}</span><small>${this.#e("v4_current","Current")}</small></button>
            ${s.map((u,p)=>i`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(u.id===this.state.selection.historyId)} @click=${()=>this.#t({type:"set-history",historyId:u.id})}>
                <span>${O(u.createdAt,this.dates)}</span><small>${this.#e("v4_history_position","{position} of {count}",{position:p+1,count:s.length})}</small>
              </button>
            `)}
          </div>
        </div>
        <p class="subtle">${this.#e("v4_history_privacy","Saved maps show one floor each and never show where the robot is now.")}</p>
      </div>
    `)}#S(){return this.#a.request(),this.#a.status!=="ready"?ee(this.#a.status,this.localize,this.retry):i`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}render(){return i`<fieldset class="workflow-fields" ?disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}>${this.#P()}</fieldset>`}#P(){switch(this.state.workflow){case"rooms":return this.#b();case"plans":return this.#k();case"plan":return this.#x();case"draw":return this.#C();case"areaReview":return this.#E();case"history":return this.#R();case"support":return this.#S();case"none":return d}}};customElements.get(W)||customElements.define(W,K);export{K as MaticMapWorkflowV4,me as dialogCopy};
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
