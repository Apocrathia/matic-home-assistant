import{A as ne,D as oe,M as T,a as X,b as J,d as O,e as M,f as I}from"./chunk-DIWWAXNA.js";import{A as se,O as P,a as C,b as R,c as S,f as ee,y as te,z as ae}from"./chunk-VNQRPUBT.js";import"./chunk-L62ENE4N.js";import{N as x,O as o,R as Y,S as c,T as Z,U as E,V as $,X as U,c as A,e as V,f as q,n as k,p as Q,t as B}from"./chunk-3DL3AR46.js";var ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},re=i=>(...l)=>({_$litDirective$:i,values:l}),L=class{constructor(l){}get _$AU(){return this._$AM._$AU}_$AT(l,e,a){this._$Ct=l,this._$AM=e,this._$Ci=a}_$AS(l,e){return this.update(l,e)}update(l,e){return this.render(...e)}};var{I:ge}=Z,le=i=>i;var ce=()=>document.createComment(""),N=(i,l,e)=>{let a=i._$AA.parentNode,t=l===void 0?i._$AB:l._$AA;if(e===void 0){let n=a.insertBefore(ce(),t),s=a.insertBefore(ce(),t);e=new ge(n,s,i,i.options)}else{let n=e._$AB.nextSibling,s=e._$AM,d=s!==i;if(d){let m;e._$AQ?.(i),e._$AM=i,e._$AP!==void 0&&(m=i._$AU)!==s._$AU&&e._$AP(m)}if(n!==t||d){let m=e._$AA;for(;m!==n;){let b=le(m).nextSibling;le(a).insertBefore(m,t),m=b}}}return e},w=(i,l,e=i)=>(i._$AI(l,e),i),_e={},de=(i,l=_e)=>i._$AH=l,me=i=>i._$AH,W=i=>{i._$AR(),i._$AA.remove()};var pe=(i,l,e)=>{let a=new Map;for(let t=l;t<=e;t++)a.set(i[t],t);return a},ue=re(class extends L{constructor(i){if(super(i),i.type!==ie.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,l,e){let a;e===void 0?e=l:l!==void 0&&(a=l);let t=[],n=[],s=0;for(let d of i)t[s]=a?a(d,s):s,n[s]=e(d,s),s++;return{values:n,keys:t}}render(i,l,e){return this.dt(i,l,e).values}update(i,[l,e,a]){let t=me(i),{values:n,keys:s}=this.dt(l,e,a);if(!Array.isArray(t))return this.ut=s,n;let d=this.ut??=[],m=[],b,h,u=0,r=t.length-1,p=0,v=n.length-1;for(;u<=r&&p<=v;)if(t[u]===null)u++;else if(t[r]===null)r--;else if(d[u]===s[p])m[p]=w(t[u],n[p]),u++,p++;else if(d[r]===s[v])m[v]=w(t[r],n[v]),r--,v--;else if(d[u]===s[v])m[v]=w(t[u],n[v]),N(i,m[v+1],t[u]),u++,v--;else if(d[r]===s[p])m[p]=w(t[r],n[p]),N(i,t[u],t[r]),r--,p++;else if(b===void 0&&(b=pe(s,p,v),h=pe(d,u,r)),b.has(d[u]))if(b.has(d[r])){let g=h.get(s[p]),_=g!==void 0?t[g]:null;if(_===null){let D=N(i,t[u]);w(D,n[p]),m[p]=D}else m[p]=w(_,n[p]),N(i,t[u],_),t[g]=null;p++}else W(t[r]),r--;else W(t[u]),u++;for(;p<=v;){let g=N(i,m[v+1]);w(g,n[p]),m[p++]=g}for(;u<=r;){let g=t[u++];g!==null&&W(g)}return this.ut=s,de(i,m),Y}});var F=class extends E{constructor(){super(...arguments);this.state=k();this.compact=!1;this.inline=!1}static{this.properties={state:{attribute:!1},localize:{attribute:!1},compact:{type:Boolean,reflect:!0},inline:{type:Boolean,reflect:!0}}}static{this.styles=[C,R,S,x`
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
`]}#a(e,a){return $(this.localize,e,a)}#s(e){this.dispatchEvent(new CustomEvent(T,{detail:e,bubbles:!0,composed:!0}))}#e(e){let a=e.currentTarget.valueAsNumber;Number.isFinite(a)&&this.#s({type:"set-brush",value:a})}render(){let{draw:e}=this.state;return o`
      <div class="controls ms-surface ms-surface--overlay" role="group" aria-label=${this.#a("v4_drawing_precision","Drawing precision")}>
        <div class="row ms-field">
          <label for="brush">${this.#a("brush_size","Brush width")}</label>
          <div class="stepper">
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#a("v4_narrower_brush","Narrower brush")}
              @click=${()=>this.#s({type:"set-brush",value:e.brushMeters/1.25})}
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
              @click=${()=>this.#s({type:"set-brush",value:e.brushMeters*1.25})}
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
    `}};customElements.get(O)||customElements.define(O,F);var K=class extends E{constructor(){super(...arguments);this.state=k();this._open=!1;this.#r=e=>{let a=this.renderRoot.querySelector(".more");a&&!e.composedPath().includes(a)&&(this._open=!1)}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[C,R,S,x`
:host { display: contents; }
.more { position: relative; margin-inline-start: auto; }
.reason { flex-basis: 100%; margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: end; }
.menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.menu .reason { padding: var(--ms-space-1) var(--ms-space-3); text-align: start; }
`]}#a(e,a,t){return $(this.localize,e,a,t)}#s(e,a=this){a.dispatchEvent(new CustomEvent(T,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this._open=!1)}updated(e){e.has("_open")&&this._open&&this.renderRoot.querySelector("[role=menuitem]")?.focus()}#e(){this._open=!1,this.renderRoot.querySelector(".more > button")?.focus()}#i(e){e.key!=="Escape"||!this._open||(e.preventDefault(),this.#e())}#o(e){let a=e.relatedTarget;a&&!e.currentTarget.contains(a)&&(this._open=!1)}#r;connectedCallback(){super.connectedCallback(),window.addEventListener("pointerdown",this.#r,!0)}disconnectedCallback(){window.removeEventListener("pointerdown",this.#r,!0),super.disconnectedCallback()}#l(e){if(this.state.planDraft.dirty)return;let a=e.currentTarget.closest(".more")?.querySelector("button");this._open=!1,this.#s({type:"open-dialog",dialog:"confirmDeletePlan"},a??this)}render(){let{planView:e,planDraft:a,pendingAction:t}=this.state;if(e==="run"){let s=t==="save-plan"?this.#a("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):t==="run-plan"?this.#a("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return o`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#a("v4_edit_plan_named","Edit {plan}",{plan:a.name})}
          aria-disabled=${s?"true":c}
          aria-describedby=${s?"edit-reason":c}
          @click=${()=>{s||this.#s({type:"set-plan-view",view:"edit"})}}
        >${this.#a("v4_edit","Edit")}</button>
        ${s?o`<p class="reason" id="edit-reason">${s}</p>`:c}
      `}if(!a.id)return c;let n=a.dirty;return o`
      <div class="more" @keydown=${this.#i} @focusout=${this.#o}>
        <button
          class="ms-btn ms-btn--icon"
          type="button"
          aria-label=${this.#a("v4_more_actions","More actions")}
          aria-haspopup="menu"
          aria-expanded=${String(this._open)}
          data-dialog-launcher="confirmDeletePlan"
          @click=${()=>{this._open=!this._open}}
        >${P(ee)}</button>
        ${this._open?o`
          <div class="menu ms-surface ms-surface--overlay" @mousedown=${s=>s.preventDefault()}>
            <div role="menu" aria-label=${this.#a("v4_more_actions","More actions")}><button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitem"
              aria-disabled=${n?"true":c}
              aria-describedby=${n?"delete-reason":c}
              @click=${this.#l}
            >${this.#a("plan_delete","Delete")}</button></div>
            ${n?o`<p class="reason" id="delete-reason">${this.#a("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes.")}</p>`:c}
          </div>
        `:c}
      </div>
    `}};customElements.get(I)||customElements.define(I,K);var fe=(i,l,e)=>o`${i.planView==="run"?o`<bdi>${l}</bdi>`:l}${i.planDraft.dirty?o` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:c}`,he=X(I),be=(i,l,e)=>J`<${he}
  .state=${i}
  .localize=${l}
  @matic-workspace-intent=${e}
></${he}>`,ve=(i,l,e,a)=>{let t=a?.room;if(t===void 0)return i(l,e,a);let[n,s]=i(l,e,{...a,room:"\0"}).split("\0");return o`${n}<bdi>${t}</bdi>${s}`},ye=(i,l,e,a)=>{let t=e?l.jump:void 0;return o`${ve(i,l.reasonKey??"",l.reason??"",l.reasonPlaceholders)}${t?o` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>a({type:"set-plan-view",view:"edit",roomId:t.roomId})}
  >${ve(i,t.labelKey,t.label,t.labelPlaceholders)}</button>`:c}`},$e=(i,l,e,a)=>{let t=i.pendingAction==="save-plan",n=l?.id==="save-plan"?"primary-reason":"cancel-reason";return o`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      aria-disabled=${t?"true":c}
      aria-describedby=${t?n:c}
      @click=${s=>{t||a(i.planDraft.id?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"},s.currentTarget)}}
    >${e("v4_cancel","Cancel")}</button>
    ${t&&n==="cancel-reason"?o`<p class="action-reason" id=${n}>${e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:c}
    ${l?c:o`<p class="action-summary">${e("v4_plan_save_after_work","You can save when the robot finishes.")}</p>`}
  `},we=(i,l,e)=>{let a=e.querySelector(M)?.shadowRoot;if(l.workflow==="plan"&&l.planView==="edit"&&l.expandedRoom)return a?.querySelector(`[data-room-disclosure="${CSS.escape(l.expandedRoom)}"]`);if(l.workflow==="plan"&&i.planView==="edit")return e.querySelector(I)?.shadowRoot?.querySelector("button");let t=i.selection.planId;return l.workflow==="plans"&&t?a?.querySelector(`[data-plan-row="${CSS.escape(t)}"]`):null};var ke=(i,l,e="room",a=!1,t="mop",n)=>{let s=(d,m,b)=>$(l,d,m,b);switch(i){case"confirmDeletePlan":return n&&{title:s("v4_delete_plan","Delete plan?"),detail:s("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:n.name}),...n.successor===void 0?{}:{consequence:n.successor===null?s("v4_delete_plan_none","You'll have no default plan."):s("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:n.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return n&&{title:s("v4_delete_area","Delete area?"),detail:s("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:n.name}),...n.successor===void 0?{}:{consequence:n.successor===null?s("v4_delete_area_none","No custom area will be selected."):s("v4_delete_area_selected","{area} becomes the selected custom area.",{area:n.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:t==="mop"?s("v4_reset_mop_cadence_title","Reset mopping progress?"):s("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:a?s("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:e}):s("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:e}),cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("v4_reset","Reset"),action:"reset-room-cadence"}}};var j=["vacuum","mop","vacuum_and_mop"],H=["quick","standard","heavy_duty"],y=i=>i.currentTarget.value,z=i=>i.currentTarget.checked,G=class extends E{constructor(){super(...arguments);this.state=k();this._historyPreviewPosition=null;this.#a=new ne(this,()=>import("./diagnostics-panel-LBVEQU3O.js"));this.#s=""}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0}}}static{this.styles=[C,R,S,x`
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
`]}#a;#s;willUpdate(e){if(!e.has("state"))return;let{workflow:a,selection:t}=this.state,n=`${a}:${t.floorId}:${t.historyId??"live"}`;n!==this.#s&&(this.#s=n,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#e(e,a,t){return $(this.localize,e,a,t)}#i(e){return e==="vacuum"?this.#e("vacuum","Vacuum"):e==="mop"?this.#e("mop","Mop"):this.#e("vacuum_and_mop","Vacuum + mop")}#o(e){return e==="quick"?this.#e("quick","Quick"):e==="standard"?this.#e("standard","Optimal"):this.#e("heavy_duty","Heavy duty")}#r(e){let a=this.#i(e.cleaningMode);return e.cleaningMode==="mop"?a:`${a} \xB7 ${this.#e("v4_vacuum_coverage_summary","{coverage} vacuum coverage",{coverage:this.#o(e.coverageSetting)})}`}#l(e){return e==="vacuum"?c:o`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#p(e){return e==="mop_due"?this.#e("v4_cadence_mop_due_reason","Vacuum and mop are due"):e==="coverage_due"?this.#e("v4_cadence_coverage_due_reason","Vacuum rotation is due"):e==="mop_progress_unverified"?this.#e("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):e==="coverage_progress_unverified"?this.#e("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):this.#e("v4_cadence_due_unknown_reason","Schedule setting due")}#d(e){return e==="coverage_requires_vacuum"?this.#e("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."):e==="plan_disabled"?this.#e("v4_preview_plan_disabled","This plan is paused. Enable it to preview and run."):e==="shared_schedule_unavailable"?this.#e("v4_preview_shared_unavailable","The shared room schedule doesn't match this map. Review the schedule's settings."):e==="cadence_progress_unverified"?this.#e("v4_preview_cadence_progress_unverified","Can't run this plan until you reset the room schedule progress Home Assistant can't confirm."):e==="cadence_identity_changed"||e==="cadence_identity_unavailable"?this.#e("v4_preview_identity_unavailable","Can't run this plan until Home Assistant can match its rooms to the current map."):e==="plan_has_no_rooms"?this.#e("v4_preview_no_rooms","Can't run this plan until it has at least one room."):e==="plan_room_limit"?this.#e("v4_preview_room_limit","Can't run this plan until it has 100 rooms or fewer."):this.#e("v4_preview_invalid","Can't run this plan until you open Edit and save it again.")}#t(e){this.dispatchEvent(new CustomEvent(T,{detail:e,bubbles:!0,composed:!0}))}#_(){switch(this.state.workflow){case"rooms":case"plans":case"plan":return{loading:this.#e("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#e("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#e("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#e("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#e("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#e("v4_loading_history","Loading map history\u2026"),unavailable:this.#e("v4_history_unavailable","Map history is unavailable right now."),empty:this.#e("v4_no_map_history","No saved map snapshots yet.")};default:return{loading:this.#e("map_loading","Loading\u2026"),unavailable:this.#e("v4_workspace_unavailable","The cleaning panel isn't available right now."),empty:this.#e("v4_nothing_saved","Nothing saved yet.")}}}#c({status:e,value:a,problem:t},n){let s=this.#_();if(a===null&&(e==="idle"||e==="loading"))return o`<div class="loading" role="status">${s.loading}</div>`;if(e==="error"){let d=this.state.workflow;return o`
        <div class="stack">
          <div class="problem" role="alert">${s.unavailable} ${t==="request-failed"?this.#e("v4_try_again","Try again shortly."):this.#e("v4_return_live_retry","Return to the live map and retry.")}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#t({type:"open-workflow",workflow:d})}>${this.#e("v4_retry","Try again")}</button>
          </div>
        </div>
      `}return e==="empty"?o`<div class="empty">${s.empty}</div>`:n}#f(){let e=this.state.resources.plans,a=Q(this.state),t=a!==null,n=this.state.selection.roomIds.length>=100;return this.#c(e,o`
      <div class="stack">
        <h3 class="group-heading" id="rooms-heading">${this.#e("v4_rooms_to_clean","Rooms to clean")}</h3>
        <div class="list" role="group" aria-labelledby="rooms-heading">
          ${(e.value?.rooms||[]).map(s=>{let d=this.state.selection.roomIds.includes(s.roomId);return o`
              <div class="room ms-row ms-row--stack" data-selected=${String(d)}>
                <label class="room-choice">
                  <input
                    type="checkbox"
                    .checked=${d}
                    ?disabled=${!d&&n}
                    @change=${()=>this.#t({type:"toggle-room",roomId:s.roomId})}
                  >
                  <strong>${s.name}</strong>
                  ${d?o`<small>${this.#e("v4_room_ready","Ready")}</small>`:c}
                </label>
                ${d?this.#y(s.roomId,this.state.selection.roomSettings.find(m=>m.roomId===s.roomId)||{roomId:s.roomId,cleaningMode:"vacuum",coverageSetting:"standard"}):c}
              </div>
            `})}
        </div>
        ${n?o`<p class="subtle" role="status">${this.#e("v4_room_limit_reached","Up to {limit} rooms fit, so remove one to add another.",{limit:100})}</p>`:c}
        <p class="subtle">${this.#e("v4_room_selection_hint","Select rooms here or directly on the map. The map and list stay in sync.")}</p>
        <label class="plan-option">
          <input type="checkbox" .checked=${!this.state.selection.useRoomSchedule} @change=${s=>this.#t({type:"set-use-room-schedule",value:!z(s)})}>
          <span class="plan-option-copy">
            <strong>${this.#e("v4_override_room_schedule","Override shared schedule settings")}</strong>
            <small>${this.#e("v4_override_room_schedule_hint","This clean follows the shared schedule unless you turn this on to use the settings chosen here. Anything due stays due, and matching cleans still count toward the schedule.")}</small>
          </span>
        </label>
        ${this.state.selection.roomIds.map(s=>{let d=e.value?.rooms.find(m=>m.roomId===s);return d?.sharedCadence||d?.sharedCadenceProgress||d?.sharedCadenceReasons?.length?o`<p class="subtle">${d.name}: ${this.#h(d.sharedCadence,d.sharedCadenceProgress,d.sharedCadenceReasons)}</p>`:c})}
        ${this.state.manualRoomPreview.status==="loading"?o`<p role="status" class="subtle">${this.#e("v4_room_preview_loading","Checking settings\u2026")}</p>`:c}
        ${this.state.manualRoomPreview.status==="error"?o`<div class="stack">
            <div role="alert" class="problem">${this.#e("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#t({type:"retry-room-preview"})}>${this.#e("v4_retry","Try again")}</button></div>
          </div>`:c}
        ${t?this.#b(a.preview):c}
      </div>
    `)}#b(e){let a=new Set(e.missionBoundaries);return o`
      <section class="stack" aria-labelledby="effective-rooms-heading" aria-live="polite">
        <h3 class="group-heading" id="effective-rooms-heading">${this.#e("v4_effective_room_preview","Effective cleaning preview")}</h3>
        ${e.blocker?o`<p class="problem" role="alert">${e.blocker==="invalid_cadence_policy"&&this.state.selection.useRoomSchedule&&this.state.selection.roomSettings.some(t=>t.cleaningMode!=="vacuum")?this.#e("v4_room_preview_schedule_override","The shared schedule can't use the cleaning mode you chose. Turn on Override shared schedule settings, or choose a mode that works with the schedule."):this.#e("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.")}</p>`:c}
        ${e.rooms.length?o`<ol class="list" aria-label=${this.#e("v4_effective_room_order","Effective room order")}>
            ${e.rooms.map((t,n)=>o`
              <li class="ms-row ms-row--stack">
                ${a.has(n)?o`<strong>${this.#e("v4_room_mission_boundary","New part (the robot may stop at the dock first)")}</strong>`:c}
                <strong>${t.name}</strong>
                <span class="subtle">${this.#r(t)}</span>
                ${t.cadenceReasons.length?o`<span class="subtle">${t.cadenceReasons.map(s=>this.#p(s)).join("; ")}</span>`:c}
              </li>
            `)}
          </ol>`:c}
      </section>
    `}#y(e,a){let t=this.state.resources.plans.value?.rooms.find(n=>n.roomId===e)?.name||this.#e("v4_room","Room");return o`
      <div class="split room-settings">
        <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
          <select
            aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:t})}
            .value=${a.cleaningMode}
            @change=${n=>this.#t({type:"patch-room-settings",roomId:e,cleaningMode:y(n)})}
          >${j.map(n=>o`<option value=${n} ?selected=${n===a.cleaningMode}>${this.#i(n)}</option>`)}</select>
        </label>
        <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
          <select
            aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:t})}
            ?disabled=${a.cleaningMode==="mop"}
            .value=${a.coverageSetting}
            @change=${n=>this.#t({type:"patch-room-settings",roomId:e,coverageSetting:y(n)})}
          >${H.map(n=>o`<option value=${n} ?selected=${n===a.coverageSetting}>${this.#o(n)}</option>`)}</select>
        </label>
      </div>
      ${this.#l(a.cleaningMode)}
    `}#u(e){return e.cadence||{scope:"plan",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1}}#h(e,a,t=a?.reasons||[]){if(t.includes("coverage_requires_vacuum"))return this.#d("coverage_requires_vacuum");if(t.includes("identity_changed")||t.includes("room_not_on_current_map"))return this.#e("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(t.includes("shared_schedule_unavailable"))return this.#e("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(t.includes("mop_progress_unverified")||t.includes("coverage_progress_unverified")){let m=[];return t.includes("mop_progress_unverified")&&m.push(this.#e("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),t.includes("coverage_progress_unverified")&&m.push(this.#e("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),m.join(" ")}if(t.includes("invalid_cadence_policy"))return this.#e("v4_cadence_policy_invalid","The room schedule needs review before it can be applied.");if(!e||!e.mopEveryN&&!e.coverageEveryN)return this.#e("v4_cadence_not_enabled","No recurring room schedule is enabled.");let n=[],s=a?.mopDue||a?.reasons.includes("mop_due"),d=a?.coverageDue||a?.reasons.includes("coverage_due");return e.mopEveryN&&n.push(s?this.#e("v4_cadence_mop_due","Vacuum and mop is due on this clean."):this.#e("v4_cadence_mop_progress","Mop every {interval} cleans; {completed} counted since the last mop.",{interval:e.mopEveryN,completed:a?.mopProgress??0})),e.coverageEveryN&&n.push(d?this.#e("v4_cadence_coverage_due","{coverage} vacuum rotation is due on this clean.",{coverage:this.#o(e.periodicCoverageSetting||"standard")}):this.#e("v4_cadence_coverage_progress","Vacuum rotation every {interval} cleans; {completed} counted so far.",{interval:e.coverageEveryN,completed:a?.coverageProgress??0})),n.join(" ")}#n(e,a){let t=this.state.planDraft.rooms[e];t&&this.#m(e,{cadence:{...this.#u(t),...a}})}#v(e,a,t){let n=e.currentTarget,s=n.value;if(s===""){t==="mopEveryN"?this.#n(a,{mopEveryN:null,doMopNext:!1}):this.#n(a,{coverageEveryN:null,doCoverageNext:!1});return}let d=Number(s);if(!Number.isInteger(d)||d<1||d>100){n.reportValidity();return}let m=this.state.planDraft.rooms[a];if(m){if(t==="coverageEveryN"){this.#n(a,{coverageEveryN:d,periodicCoverageSetting:m.cadence?.periodicCoverageSetting||m.coverageSetting});return}this.#n(a,{[t]:d})}}#$(e,a,t){let n=this.state.planDraft,s=this.#u(e),d=e.cadenceProgress,b=(n.id?this.state.resources.plans.value?.plans.find(f=>f.id===n.id)?.rooms.find(f=>f.roomId===e.roomId):void 0)?.cadence?.scope??null,h=this.state.resources.plans.value?.rooms.find(f=>f.roomId===e.roomId),u=!!(h?.sharedCadence||h?.sharedCadenceProgress),r=!!(s.mopEveryN||s.coverageEveryN),p=!!(d?.mopProgress||s.doMopNext||e.cadenceReasons?.includes("mop_progress_unverified")),v=!!(d?.coverageProgress||s.doCoverageNext||e.cadenceReasons?.includes("coverage_progress_unverified")),g=n.dirty||this.state.command!=="idle"||this.state.managedLock||this.state.activity!=="idle"&&this.state.activity!=="docked"||this.state.dataMode!=="live",_=b!==null&&b!==s.scope?s.scope==="shared"?this.#e("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted."):this.#e("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule."):b===null&&r?s.scope==="shared"?u?this.#e("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted."):this.#e("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero."):this.#e("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):this.#e("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."),D=this.#e("v4_room_cadence_named","Room schedule for {room}",{room:t});return o`
      <details class="plan-option cadence-config">
        <summary>${D}</summary>
        <p class="subtle">${this.#e("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
        <div class="cadence-fields">
          <label class="field ms-field">${this.#e("v4_cadence_scope","Count cleans")}
            <select aria-label=${this.#e("v4_cadence_scope_named","Count cleans for {room}",{room:t})} .value=${s.scope} @change=${f=>this.#n(a,{scope:y(f)})}>
              <option value="plan" ?selected=${s.scope==="plan"}>${this.#e("v4_cadence_this_plan","In this plan only")}</option>
              <option value="shared" ?selected=${s.scope==="shared"}>${this.#e("v4_cadence_shared","Across all plans (recommended)")}</option>
            </select>
          </label>
          <label class="field ms-field">${this.#e("v4_cadence_mop_interval","Vacuum and mop every N cleans")}
            <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${this.#e("v4_cadence_mop_interval_named","How often to mop {room}, every 1 to 100 cleans",{room:t})} .value=${s.mopEveryN?.toString()||""} ?disabled=${e.cleaningMode!=="vacuum"} @change=${f=>this.#v(f,a,"mopEveryN")}>
          </label>
          <label class="field ms-field">${this.#e("v4_cadence_coverage_interval","Vacuum rotation every N cleans")}
            <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${this.#e("v4_cadence_coverage_interval_named","How often to add a vacuum rotation in {room}, every 1 to 100 cleans",{room:t})} ?disabled=${e.cleaningMode==="mop"} .value=${s.coverageEveryN?.toString()||""} @change=${f=>this.#v(f,a,"coverageEveryN")}>
          </label>
          ${s.coverageEveryN?o`
            <label class="field ms-field">${this.#e("v4_cadence_periodic_coverage","Vacuum rotation level")}
              <select aria-label=${this.#e("v4_cadence_periodic_coverage_named","Vacuum rotation level for {room}",{room:t})} ?disabled=${e.cleaningMode==="mop"} .value=${s.periodicCoverageSetting||"standard"} @change=${f=>this.#n(a,{periodicCoverageSetting:y(f)})}>${H.map(f=>o`<option value=${f} ?selected=${f===s.periodicCoverageSetting}>${this.#o(f)}</option>`)}</select>
            </label>
          `:c}
        </div>
        <p class="subtle" role="status">${_}</p>
        ${e.cleaningMode==="mop"?o`
          <p class="subtle">${s.coverageEveryN?this.#d("coverage_requires_vacuum"):this.#e("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming.")}</p>
          ${s.coverageEveryN?o`<button type="button" class="ms-btn ms-btn--secondary"
            @click=${()=>this.#n(a,{scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1})}
          >${this.#e("v4_cadence_clear_room_coverage","Turn off")}</button>`:c}
        `:c}
        ${e.cleaningMode!=="vacuum"?o`<p class="subtle">${this.#e("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum.")}</p>`:c}
        ${s.mopEveryN&&e.cleaningMode==="vacuum"?o`<p class="subtle">${this.#e("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</p>`:c}
        <div class="plan-options" role="group" aria-label=${this.#e("v4_cadence_next_actions_named","Next clean options for {room}",{room:t})}>
          <label class="plan-option"><input type="checkbox" aria-label=${this.#e("v4_cadence_do_mop_next_named","Do vacuum and mop on the next clean for {room}",{room:t})} .checked=${s.doMopNext} ?disabled=${!s.mopEveryN} @change=${f=>this.#n(a,{doMopNext:z(f)})}><span class="plan-option-copy"><strong>${this.#e("v4_cadence_do_mop_next","Do vacuum and mop on the next clean")}</strong></span></label>
          <label class="plan-option"><input type="checkbox" aria-label=${this.#e("v4_cadence_do_coverage_next_named","Add a vacuum rotation on the next clean for {room}",{room:t})} .checked=${s.doCoverageNext} ?disabled=${!s.coverageEveryN||e.cleaningMode==="mop"} @change=${f=>this.#n(a,{doCoverageNext:z(f)})}><span class="plan-option-copy"><strong>${this.#e("v4_cadence_do_coverage_next","Add a vacuum rotation on the next clean")}</strong></span></label>
        </div>
        ${s.coverageEveryN?o`<p class="subtle">${this.#e("v4_cadence_coverage_verification_hint","A vacuum rotation counts only after the robot confirms the vacuum coverage and that the clean finished. If it can't confirm, the rotation stays due for the next clean.")}</p>`:c}
        <p class="subtle" aria-live="polite">${this.#h(s,d,e.cadenceReasons)}</p>
        ${n.id&&(s.mopEveryN||s.coverageEveryN||p||v)?o`
          <div class="toolbar">
            ${s.mopEveryN||p?o`<button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:t})}
              data-dialog-launcher="confirmResetCadence"
              ?disabled=${g}
              @click=${()=>this.#t({type:"request-room-cadence-reset",planId:n.id,roomId:e.roomId,mode:"mop"})}
            >${this.#e("v4_reset_mop_cadence_button","Reset mopping")}</button>`:c}
            ${s.coverageEveryN||v?o`<button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:t})}
              data-dialog-launcher="confirmResetCadence"
              ?disabled=${g}
              @click=${()=>this.#t({type:"request-room-cadence-reset",planId:n.id,roomId:e.roomId,mode:"coverage"})}
            >${this.#e("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`:c}
          </div>
          <p class="subtle">${this.#e("v4_reset_cadence_hint","Reset is available for a saved plan while the robot is idle. Cleaning history is kept separately.")}</p>
        `:c}
      </details>
    `}#w(e){this.#t({type:"toggle-room",roomId:e})}#m(e,a){let t=this.state.planDraft.rooms.map((n,s)=>s===e?{...n,...a}:n);this.#t({type:"patch-plan-draft",patch:{rooms:t}})}#g(e,a){let t=e+a,n=[...this.state.planDraft.rooms];if(t<0||t>=n.length)return;let[s]=n.splice(e,1);s&&(n.splice(t,0,s),this.#t({type:"patch-plan-draft",patch:{rooms:n}}))}#k(){let e=this.state.resources.plans;return this.#c(e,o`
      <div class="stack">
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#t({type:"select-plan",planId:null})}>
          ${P(te)}<span>${this.#e("v4_create_plan","Create a plan")}</span>
        </button>
        ${(e.value?.plans||[]).map(a=>o`
          <button class="ms-row ms-row--card" type="button" @click=${()=>this.#t({type:"select-plan",planId:a.id})}>
            <span class="ms-row__body"><strong>${a.name}${a.enabled?c:o` <span class="ms-chip">${this.#e("v4_paused","Paused")}</span>`}</strong>
              <small>${a.rooms.length===1?this.#e("v4_plan_room_count_one","1 room"):this.#e("v4_plan_room_count","{count} rooms",{count:a.rooms.length})}</small>
            </span>
            <span class="ms-row__trail">${this.#e("v4_edit_plan","Edit plan")}</span>
          </button>
        `)}
      </div>
    `)}#x(){let e=this.state.resources.plans,a=e.value,t=this.state.planDraft,n=t.rooms.map(r=>({room:r,label:a?.rooms.find(p=>p.roomId===r.roomId)?.name||"Room",selected:!0})),s=(a?.rooms||[]).filter(r=>!t.rooms.some(p=>p.roomId===r.roomId)).map(r=>({room:{roomId:r.roomId,cleaningMode:"vacuum",coverageSetting:"standard"},label:r.name,selected:!1})),d=[...n,...s],m=t.rooms.length>=100,b=new Set(t.rooms.map(r=>`${r.cleaningMode}:${r.coverageSetting}`)).size>1,u=(t.id?a?.plans.find(r=>r.id===t.id):void 0)?.nextRunPreview;return this.#c(e,o`
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
        ${b?o`
          <p class="subtle plan-transition-hint">${this.#e("v4_plan_mixed_settings","Rooms with different cleaning settings may be cleaned in separate parts, and the robot may briefly touch the dock between parts.")}
            ${t.runBehavior==="ordered"?this.#e("v4_plan_group_settings","Placing rooms with matching settings together can reduce transitions."):this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}
          </p>
        `:c}
        <div class="list" role="group" aria-labelledby="plan-rooms-heading">
          ${ue(d,({room:r})=>r.roomId,({room:r,label:p,selected:v})=>{let g=v?t.rooms.findIndex(_=>_.roomId===r.roomId):-1;return o`
              <div class="room plan-room ms-row ms-row--stack" data-selected=${String(v)}>
                <div class="room-choice">
                  <label class="plan-room-label">
                  <input type="checkbox" .checked=${v} ?disabled=${!v&&m} @change=${()=>this.#w(r.roomId)}>
                  <strong>${v?`${g+1}. `:""}${p}</strong>
                  </label>
                  ${v?o`
                    <span>
                      <button class="icon-button ms-btn ms-btn--icon" type="button" aria-label=${this.#e("move_room_up","Move {room} earlier",{room:p})} ?disabled=${g===0} @click=${_=>{_.preventDefault(),this.#g(g,-1)}}>${P(ae)}</button>
                      <button class="icon-button ms-btn ms-btn--icon" type="button" aria-label=${this.#e("move_room_down","Move {room} later",{room:p})} ?disabled=${g===t.rooms.length-1} @click=${_=>{_.preventDefault(),this.#g(g,1)}}>${P(se)}</button>
                    </span>
                  `:c}
                </div>
                ${v?o`
                  <div class="split room-settings">
                    <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
                      <select aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:p})} .value=${r.cleaningMode} @change=${_=>this.#m(g,{cleaningMode:y(_)})}>${j.map(_=>o`<option value=${_} ?selected=${_===r.cleaningMode} ?disabled=${!!("cadence"in r&&r.cadence?.mopEveryN&&_!=="vacuum")}>${this.#i(_)}</option>`)}</select>
                    </label>
                    <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
                      <select aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:p})} ?disabled=${r.cleaningMode==="mop"} .value=${r.coverageSetting} @change=${_=>this.#m(g,{coverageSetting:y(_)})}>${H.map(_=>o`<option value=${_} ?selected=${_===r.coverageSetting}>${this.#o(_)}</option>`)}</select>
                    </label>
                  </div>
                  ${this.#l(r.cleaningMode)}
                  ${this.#$(r,g,p)}
                `:c}
              </div>
            `})}
        </div>
        ${m?o`<p class="subtle" role="status">${this.#e("v4_room_limit_reached","Up to {limit} rooms fit, so remove one to add another.",{limit:100})}</p>`:c}
        <section class="stack" aria-labelledby="next-run-preview-heading">
          <h3 class="group-heading" id="next-run-preview-heading">${this.#e("v4_next_run_preview","Next run")}</h3>
          <p class="subtle">${this.#e("v4_next_run_preview_hint","Preview for the next run. An active run keeps its original settings; this preview is checked again before cleaning starts.")}</p>
          ${t.id?u?u.blocker?o`<p class="problem" role="alert">${this.#d(u.blocker)}</p>`:/^[0-9a-f]{64}$/u.test(u.previewToken??"")?o`
                  ${t.dirty?o`<p class="notice" role="status">${this.#e("v4_next_run_preview_stale","This preview shows the saved plan. Save your edits to calculate the updated order and settings before starting.")}</p>`:c}
                  <ol class="list" aria-label=${this.#e("v4_next_run_preview_order","Next-run room order and effective settings")}>
                    ${u.rooms.map((r,p)=>{let v=1+u.missionBoundaries.filter(g=>g<=p).length;return o`<li class="ms-row ms-row--stack">
                        <span class="subtle">${this.#e("v4_next_run_mission","Part {number}",{number:v})}</span>
                        <strong>${p+1}. ${r.name}</strong>
                        <span>${this.#r(r)}</span>
                        ${r.cadenceReasons.length?o`<small>${r.cadenceReasons.map(g=>this.#p(g)).join(" \xB7 ")}</small>`:c}
                      </li>`})}
                  </ol>
                `:o`<p class="problem" role="status">${this.#e("v4_next_run_preview_unavailable","The next-run preview isn't available. Reload your plans, then try again.")}</p>`:o`<p class="problem" role="status">${this.#e("v4_next_run_preview_unavailable","The next-run preview isn't available. Reload your plans, then try again.")}</p>`:o`<p class="subtle">${this.#e("v4_next_run_preview_save_first","Save this plan to calculate its exact room order and effective settings.")}</p>`}
        </section>
        <h3 class="group-heading" id="completion-heading">${this.#e("v4_completion_options","When a run ends")}</h3>
        <div class="plan-options" role="group" aria-labelledby="completion-heading">
          <label class="plan-option">
            <input type="checkbox" .checked=${t.returnToBase} @change=${r=>this.#t({type:"patch-plan-draft",patch:{returnToBase:z(r)}})}>
            <span class="plan-option-copy">
              <strong>${this.#e("plan_return_to_base","Return to the dock when finished")}</strong>
              <small>${this.#e("plan_return_to_base_hint","After the last selected room, the robot returns to the dock.")}</small>
            </span>
          </label>
          <label class="plan-option">
            <input type="checkbox" .checked=${t.finishCurrentRoom} @change=${r=>this.#t({type:"patch-plan-draft",patch:{finishCurrentRoom:z(r)}})}>
            <span class="plan-option-copy">
              <strong>${this.#e("plan_finish_room","Finish the current room after Stop")}</strong>
              <small>${this.#e("plan_finish_room_hint","When enough of the room is complete, finish it before docking. Never start another room.")}</small>
            </span>
          </label>
          ${t.finishCurrentRoom?o`
            <label class="plan-threshold ms-field">
              <span class="plan-threshold-copy">
                <strong>${this.#e("plan_threshold","Minimum room progress")}</strong>
                <small>${this.#e("plan_threshold_hint","When Stop is requested, the robot checks this progress: below it stops now; at or above it finishes this room before docking.")}</small>
              </span>
              <span class="threshold-value">${t.finishCurrentRoomThreshold}%</span>
              <input type="range" min="0" max="100" step="5" .value=${String(t.finishCurrentRoomThreshold)} aria-label=${this.#e("plan_threshold","Minimum room progress")} @input=${r=>this.#t({type:"patch-plan-draft",patch:{finishCurrentRoomThreshold:Number(y(r))}})}>
            </label>
          `:c}
        </div>
        <div class="toolbar">
          ${B(this.state,"confirmDeletePlan")?o`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_delete_plan_label","Delete plan")}
              data-dialog-launcher="confirmDeletePlan"
              @click=${()=>this.#t({type:"open-dialog",dialog:"confirmDeletePlan"})}
            >${this.#e("plan_delete","Delete")}</button>
          `:c}
        </div>
      </div>
    `)}#E(){let e=this.state.resources.areas;return o`
      <div class="stack">
        <p class="subtle">${this.state.draw.tool==="outline"?this.#e("v4_zone_coverage","Place points around the area. Shading shows where the robot cleans inside the outline; narrow edges may stay uncovered."):this.#e("v4_draw_floor_hint","Paint only on the mapped floor. Zooming and panning never change the area.")}</p>
        ${this.state.draw.tool!=="outline"?o`<p class="subtle">${this.#e("v4_keyboard_draw_help","Keyboard: focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>`:c}
        ${this.#c(e,o`
          <div class="group">
            <h3 class="group-heading" id="areas-heading">${this.#e("area_workspace_title","Custom areas")}</h3>
            <div class="list" role="group" aria-labelledby="areas-heading">
            <button class="list-button ms-row ms-row" type="button" @click=${()=>this.#t({type:"select-area",areaId:null})}>${this.#e("area_new","New area")}</button>
            ${(e.value?.areas||[]).map(a=>o`
              <button class="list-button ms-row ms-row" type="button" @click=${()=>{this.#t({type:"select-area",areaId:a.id,workflow:"areaReview"})}}>
                <span>${a.name}</span>
                <small>${a.status==="current"?this.#e("area_workspace_ready","Ready"):this.#e("v4_review","Review")}</small>
              </button>
            `)}
            </div>
          </div>
        `)}
      </div>
    `}#C(){let e=this.state.areaDraft,a=e.canRebind||e.status==="review",t=!a&&(e.status==="stale"||e.status==="unknown");return o`
      <div class="stack">
        ${a?o`<div class="notice" data-tone="warning" role="status">${this.#e("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:c}
        ${t?o`<div class="problem" role="alert">${this.#e("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:c}
        <label class="field ms-field">${this.#e("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} @input=${n=>this.#t({type:"patch-area-draft",patch:{name:y(n)}})}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} @change=${n=>this.#t({type:"patch-area-draft",patch:{cleaningMode:y(n)}})}>${j.map(n=>o`<option value=${n} ?selected=${n===e.cleaningMode}>${this.#i(n)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} @change=${n=>this.#t({type:"patch-area-draft",patch:{coverageSetting:y(n)}})}>${H.map(n=>o`<option value=${n} ?selected=${n===e.coverageSetting}>${this.#o(n)}</option>`)}</select>
          </label>
        </div>
        ${this.#l(e.cleaningMode)}
        <div class="toolbar">
          <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#t({type:"open-workflow",workflow:"draw"})}>${this.#e("v4_edit_outline","Redraw")}</button>
          ${B(this.state,"confirmDeleteArea")?o`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_delete_area_label","Delete area")}
              data-dialog-launcher="confirmDeleteArea"
              @click=${()=>this.#t({type:"open-dialog",dialog:"confirmDeleteArea"})}
            >${this.#e("area_delete","Delete")}</button>
          `:c}
        </div>
      </div>
    `}#R(){let e=this.state.resources.history,a=e.value,t=a?.floors.find(h=>h.id===this.state.selection.floorId)||a?.floors.find(h=>h.active)||a?.floors[0],n=t?.snapshots||[],s=this.state.selection.historyId?Math.max(0,n.findIndex(h=>h.id===this.state.selection.historyId)):n.length,d=t?.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_return_current_floor","Return to current floor"),m=this._historyPreviewPosition??s,b=n[m];return this.#c(e,o`
      <div class="stack">
        ${(a?.floors.length||0)>1?o`
          <div class="group">
            <h3 class="group-heading" id="floors-heading">${this.#e("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(a?.floors||[]).map((h,u)=>o`
              <button
                class="floor ms-row ms-row"
                type="button"
                aria-current=${String(h.id===t?.id)}
                @click=${()=>this.#t({type:"set-floor",floorId:h.id})}
              >
                <span>${h.label||(h.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:h.ordinal??u}))}</span>
                <small>${h.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_read_only","Read only")}</small>
              </button>
            `)}
            </div>
          </div>
        `:c}
        <div class="timeline">
          <label class="field ms-field">${this.#e("map_timeline_label","Map timeline")}
            <input
              type="range"
              min="0"
              max=${String(n.length)}
              step="1"
              .value=${String(m)}
              aria-valuetext=${b?U(b.createdAt,this.dates):d}
              ?disabled=${!n.length}
              @input=${h=>{this._historyPreviewPosition=Number(y(h))}}
              @change=${h=>{let u=Number(y(h));this._historyPreviewPosition=null,this.#t({type:"set-history",historyId:u===n.length?null:n[u]?.id||null})}}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId&&!!t?.active)} @click=${()=>this.#t({type:"set-history",historyId:null})}><span>${d}</span><small>${this.#e("v4_current","Current")}</small></button>
            ${n.map((h,u)=>o`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(h.id===this.state.selection.historyId)} @click=${()=>this.#t({type:"set-history",historyId:h.id})}>
                <span>${U(h.createdAt,this.dates)}</span><small>${this.#e("v4_history_position","{position} of {count}",{position:u+1,count:n.length})}</small>
              </button>
            `)}
          </div>
        </div>
        <p class="subtle">${this.#e("v4_history_privacy","Saved maps show one floor each and never show where the robot is now.")}</p>
      </div>
    `)}#S(){return this.#a.request(),this.#a.status!=="ready"?oe(this.#a.status,this.localize,this.retry):o`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}render(){return o`<fieldset class="workflow-fields" ?disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}>${this.#P()}</fieldset>`}#P(){switch(this.state.workflow){case"rooms":return this.#f();case"plans":return this.#k();case"plan":return this.#x();case"draw":return this.#E();case"areaReview":return this.#C();case"history":return this.#R();case"support":return this.#S();case"none":return c}}};customElements.get(M)||customElements.define(M,G);export{G as MaticMapWorkflowV4,ye as actionReason,ke as dialogCopy,$e as planCancel,we as planFocusTarget,fe as planTitle,be as planTools};
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
