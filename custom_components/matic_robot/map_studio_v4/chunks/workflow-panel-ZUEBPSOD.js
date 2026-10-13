import{D as ue,G as he,P,a as H,b as V,d as F,e as z,f as L,g as N}from"./chunk-YUMW6XO6.js";import{A as ce,L as de,N as me,P as $,a as R,b as S,c as C,f as oe,i as re,y as ie,z as le}from"./chunk-EN2TE5SC.js";import{N as x,O as o,R as se,S as c,T as ne,U as E,V as w,W as pe,X as K,c as A,e as j,f as U,j as ee,k as te,n as k,p as ae,t as M}from"./chunk-3DL3AR46.js";var ve={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ge=r=>(...i)=>({_$litDirective$:r,values:i}),q=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,e,a){this._$Ct=i,this._$AM=e,this._$Ci=a}_$AS(i,e){return this.update(i,e)}update(i,e){return this.render(...e)}};var{I:Ce}=ne,_e=r=>r;var fe=()=>document.createComment(""),I=(r,i,e)=>{let a=r._$AA.parentNode,t=i===void 0?r._$AB:i._$AA;if(e===void 0){let s=a.insertBefore(fe(),t),n=a.insertBefore(fe(),t);e=new Ce(s,n,r,r.options)}else{let s=e._$AB.nextSibling,n=e._$AM,d=n!==r;if(d){let m;e._$AQ?.(r),e._$AM=r,e._$AP!==void 0&&(m=r._$AU)!==n._$AU&&e._$AP(m)}if(s!==t||d){let m=e._$AA;for(;m!==s;){let v=_e(m).nextSibling;_e(a).insertBefore(m,t),m=v}}}return e},T=(r,i,e=r)=>(r._$AI(i,e),r),Pe={},be=(r,i=Pe)=>r._$AH=i,ye=r=>r._$AH,B=r=>{r._$AR(),r._$AA.remove()};var $e=(r,i,e)=>{let a=new Map;for(let t=i;t<=e;t++)a.set(r[t],t);return a},we=ge(class extends q{constructor(r){if(super(r),r.type!==ve.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,i,e){let a;e===void 0?e=i:i!==void 0&&(a=i);let t=[],s=[],n=0;for(let d of r)t[n]=a?a(d,n):n,s[n]=e(d,n),n++;return{values:s,keys:t}}render(r,i,e){return this.dt(r,i,e).values}update(r,[i,e,a]){let t=ye(r),{values:s,keys:n}=this.dt(i,e,a);if(!Array.isArray(t))return this.ut=n,s;let d=this.ut??=[],m=[],v,p,u=0,l=t.length-1,h=0,g=s.length-1;for(;u<=l&&h<=g;)if(t[u]===null)u++;else if(t[l]===null)l--;else if(d[u]===n[h])m[h]=T(t[u],s[h]),u++,h++;else if(d[l]===n[g])m[g]=T(t[l],s[g]),l--,g--;else if(d[u]===n[g])m[g]=T(t[u],s[g]),I(r,m[g+1],t[u]),u++,g--;else if(d[l]===n[h])m[h]=T(t[l],s[h]),I(r,t[u],t[l]),l--,h++;else if(v===void 0&&(v=$e(n,h,g),p=$e(d,u,l)),v.has(d[u]))if(v.has(d[l])){let _=p.get(n[h]),f=_!==void 0?t[_]:null;if(f===null){let W=I(r,t[u]);T(W,s[h]),m[h]=W}else m[h]=T(f,s[h]),I(r,t[u],f),t[_]=null;h++}else B(t[l]),l--;else B(t[u]),u++;for(;h<=g;){let _=I(r,m[g+1]);T(_,s[h]),m[h++]=_}for(;u<=l;){let _=t[u++];_!==null&&B(_)}return this.ut=n,be(r,m),se}});var ke=(r,i)=>new Intl.NumberFormat(r).format(i),G=(r,i)=>i.cleaningMode==="mop"?r("v4_room_setting_mop","Mop"):i.cleaningMode==="vacuum"?i.coverageSetting==="quick"?r("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):i.coverageSetting==="standard"?r("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):r("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):i.coverageSetting==="quick"?r("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):i.coverageSetting==="standard"?r("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):r("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),xe=(r,i,e)=>{let a=v=>{let p=e.filter(v).map(u=>u.name);return p.length?pe(i,p):null},t=v=>a(p=>p.cadenceReasons.includes("coverage_due")&&p.coverageSetting===v),s=a(v=>v.cadenceReasons.includes("mop_due")),n=t("quick"),d=t("standard"),m=t("heavy_duty");return[s&&r("v4_due_mop","Mop due in {rooms}",{rooms:s}),n&&r("v4_due_quick","Quick vacuum due in {rooms}",{rooms:n}),d&&r("v4_due_optimal","Optimal vacuum due in {rooms}",{rooms:d}),m&&r("v4_due_heavy","Heavy duty vacuum due in {rooms}",{rooms:m})].filter(v=>!!v)};var Q=class extends E{constructor(){super(...arguments);this.state=k();this.#t=(e,a,t)=>w(this.localize,e,a,t)}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[R,S,C,x`
:host { display: block; }
.plain { display: grid; gap: var(--ms-space-2); margin: 0; padding: 0; list-style: none; }
.plan-row .ms-row__body { display: grid; gap: 0.125rem; }
.plan-title { display: flex; flex-wrap: wrap; gap: var(--ms-space-1) var(--ms-space-2); align-items: center; min-inline-size: 0; }
.plan-title bdi { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.chip-default { border-color: transparent; background: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-surface-card)); }
/* Line 3 keeps the text colour; the glyph carries the tone (design-system.md \u00a75). */
.lines { display: grid; gap: 0.125rem; margin: 0; color: var(--ms-text); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.ms-row__body .line { display: flex; gap: var(--ms-space-1); align-items: flex-start; margin: 0; color: var(--ms-text); }
.line .ms-icon { inline-size: 1rem; block-size: 1rem; color: var(--ms-resolved-indicator, var(--ms-accent)); }
.line[data-tone="warning"] .ms-icon { color: var(--ms-warning); }
.plan-row .ms-row__trail:dir(rtl) .ms-icon { scale: -1 1; }
.empty-card { display: grid; gap: var(--ms-space-2); padding: var(--ms-space-4); border: 1px solid var(--ms-line); border-radius: var(--ms-radius-md); }
.empty-card h3 { margin: 0; font-size: var(--ms-t-md); }
.empty-card p { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-md); line-height: var(--ms-lh-normal); }
.empty-card .ms-btn { justify-self: start; }
.sr-only { position: absolute; overflow: hidden; inline-size: 1px; block-size: 1px; margin: -1px; padding: 0; border: 0; clip-path: inset(50%); white-space: nowrap; }
`]}#t;#s(e){this.dispatchEvent(new CustomEvent(P,{detail:e,bubbles:!0,composed:!0}))}#e(e){return ke(this.state.locale,e)}#r(e){return e.length?o`<span class="lines">${e.map(a=>o`<span class="line">${$(de)}<span>${a}</span></span>`)}</span>`:c}#n(e,a){let t=e.rooms.length,s=e.runBehavior==="ordered",n=t===1?s?this.#t("v4_plan_row_ordered_one","1 room \xB7 Top to bottom, as listed"):this.#t("v4_plan_row_rotation_one","1 room \xB7 Longest-waiting rooms first"):s?this.#t("v4_plan_row_ordered","{count} rooms \xB7 Top to bottom, as listed",{count:this.#e(t)}):this.#t("v4_plan_row_rotation","{count} rooms \xB7 Longest-waiting rooms first",{count:this.#e(t)}),d=e.nextRunPreview?.blocker,m=e.enabled?d&&d!=="plan_disabled"?o`<span class="line" data-tone="warning">${$(me)}<span>${this.#t("v4_plan_row_blocked","Needs attention before it can run")}</span></span>`:this.#r(xe(this.#t,this.state.locale,e.nextRunPreview?.rooms??[])):c,v=this.#t("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return o`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${e.id}
        aria-describedby=${a?"default-hint":c}
        @click=${()=>this.#s({type:"select-plan",planId:e.id})}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${e.name}</bdi>${a?o`<span class="ms-chip chip-default" title=${v}>${this.#t("v4_plan_default","Default")}</span>`:c}${e.enabled?c:o`<span class="ms-chip">${this.#t("v4_paused","Paused")}</span>`}</strong>
          <small>${n}</small>
          ${m}
        </span>
        <span class="ms-row__trail">${$(re)}</span>
      </button>
      ${a?o`<span class="sr-only" id="default-hint">${v}</span>`:c}
    </li>`}#i(){let e=this.state.resources.plans.value,a=this.#t("v4_create_plan","Create a plan");if(!e?.plans.length)return o`<div class="empty-card">
        <h3>${this.#t("v4_no_plans","No plans yet")}</h3>
        <p>${this.#t("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#s({type:"select-plan",planId:null})}>${a}</button>
      </div>`;let t=[...e.plans].sort((s,n)=>+(n.id===e.selectedPlan)-+(s.id===e.selectedPlan));return o`<ul class="plain">
      ${t.map(s=>this.#n(s,s.id===e.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#s({type:"select-plan",planId:null})}>
        <span class="ms-row__lead">${$(ie)}</span>
        <span class="ms-row__body"><strong>${a}</strong></span>
      </button></li>
    </ul>`}render(){return this.state.workflow==="plans"?this.#i():c}};customElements.get(N)||customElements.define(N,Q);var Y=class extends E{constructor(){super(...arguments);this.state=k();this.compact=!1;this.inline=!1}static{this.properties={state:{attribute:!1},localize:{attribute:!1},compact:{type:Boolean,reflect:!0},inline:{type:Boolean,reflect:!0}}}static{this.styles=[R,S,C,x`
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
`]}#t(e,a){return w(this.localize,e,a)}#s(e){this.dispatchEvent(new CustomEvent(P,{detail:e,bubbles:!0,composed:!0}))}#e(e){let a=e.currentTarget.valueAsNumber;Number.isFinite(a)&&this.#s({type:"set-brush",value:a})}render(){let{draw:e}=this.state;return o`
      <div class="controls ms-surface ms-surface--overlay" role="group" aria-label=${this.#t("v4_drawing_precision","Drawing precision")}>
        <div class="row ms-field">
          <label for="brush">${this.#t("brush_size","Brush width")}</label>
          <div class="stepper">
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#t("v4_narrower_brush","Narrower brush")}
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
                aria-label=${this.#t("v4_brush_width_meters","Brush width in meters")}
              />
              <span class="unit">m</span>
            </span>
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#t("v4_wider_brush","Wider brush")}
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
            aria-label=${this.#t("v4_brush_width_slider","Brush width slider")}
            aria-valuetext=${`${e.brushMeters.toFixed(2)} m`}
          />
        </div>
        <p class="hint">${this.#t("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
      </div>
    `}};customElements.get(F)||customElements.define(F,Y);var Z=class extends E{constructor(){super(...arguments);this.state=k();this._open=!1;this.#i=e=>{let a=this.renderRoot.querySelector(".more");a&&!e.composedPath().includes(a)&&(this._open=!1)}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[R,S,C,x`
:host { display: contents; }
.more { position: relative; margin-inline-start: auto; }
.reason { flex-basis: 100%; margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: end; }
.menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.menu .reason { padding: var(--ms-space-1) var(--ms-space-3); text-align: start; }
`]}#t(e,a,t){return w(this.localize,e,a,t)}#s(e,a=this){a.dispatchEvent(new CustomEvent(P,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this._open=!1)}updated(e){e.has("_open")&&this._open&&this.renderRoot.querySelector("[role=menuitem]")?.focus()}#e(){this._open=!1,this.renderRoot.querySelector(".more > button")?.focus()}#r(e){e.key!=="Escape"||!this._open||(e.preventDefault(),this.#e())}#n(e){let a=e.relatedTarget;a&&!e.currentTarget.contains(a)&&(this._open=!1)}#i;connectedCallback(){super.connectedCallback(),window.addEventListener("pointerdown",this.#i,!0)}disconnectedCallback(){window.removeEventListener("pointerdown",this.#i,!0),super.disconnectedCallback()}#l(e){if(this.state.planDraft.dirty)return;let a=e.currentTarget.closest(".more")?.querySelector("button");this._open=!1,this.#s({type:"open-dialog",dialog:"confirmDeletePlan"},a??this)}render(){let{planView:e,planDraft:a,pendingAction:t}=this.state;if(e==="run"){let n=t==="save-plan"?this.#t("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):t==="run-plan"?this.#t("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return o`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#t("v4_edit_plan_named","Edit {plan}",{plan:a.name})}
          aria-disabled=${n?"true":c}
          aria-describedby=${n?"edit-reason":c}
          @click=${()=>{n||this.#s({type:"set-plan-view",view:"edit"})}}
        >${this.#t("v4_edit","Edit")}</button>
        ${n?o`<p class="reason" id="edit-reason">${n}</p>`:c}
      `}if(!a.id)return c;let s=a.dirty;return o`
      <div class="more" @keydown=${this.#r} @focusout=${this.#n}>
        <button
          class="ms-btn ms-btn--icon"
          type="button"
          aria-label=${this.#t("v4_more_actions","More actions")}
          aria-haspopup="menu"
          aria-expanded=${String(this._open)}
          data-dialog-launcher="confirmDeletePlan"
          @click=${()=>{this._open=!this._open}}
        >${$(oe)}</button>
        ${this._open?o`
          <div class="menu ms-surface ms-surface--overlay" @mousedown=${n=>n.preventDefault()}>
            <div role="menu" aria-label=${this.#t("v4_more_actions","More actions")}><button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitem"
              aria-disabled=${s?"true":c}
              aria-describedby=${s?"delete-reason":c}
              @click=${this.#l}
            >${this.#t("plan_delete","Delete")}</button></div>
            ${s?o`<p class="reason" id="delete-reason">${this.#t("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes.")}</p>`:c}
          </div>
        `:c}
      </div>
    `}};customElements.get(L)||customElements.define(L,Z);var Te=(r,i,e)=>o`${r.planView==="run"?o`<bdi>${i}</bdi>`:i}${r.planDraft.dirty?o` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:c}`,Ee=H(L),Ne=(r,i,e)=>V`<${Ee}
  .state=${r}
  .localize=${i}
  @matic-workspace-intent=${e}
></${Ee}>`,Re=(r,i,e,a)=>{let t=a?.room;if(t===void 0)return r(i,e,a);let[s,n]=r(i,e,{...a,room:"\0"}).split("\0");return o`${s}<bdi>${t}</bdi>${n}`},Ie=(r,i,e,a)=>{let t=e?i.jump:void 0;return o`${Re(r,i.reasonKey??"",i.reason??"",i.reasonPlaceholders)}${t?o` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>a({type:"set-plan-view",view:"edit",roomId:t.roomId})}
  >${Re(r,t.labelKey,t.label,t.labelPlaceholders)}</button>`:c}`},Ae=(r,i,e,a)=>{let t=r.pendingAction==="save-plan",s=i?.id==="save-plan"?"primary-reason":"cancel-reason";return o`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      aria-disabled=${t?"true":c}
      aria-describedby=${t?s:c}
      @click=${n=>{t||a(r.planDraft.id?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"},n.currentTarget)}}
    >${e("v4_cancel","Cancel")}</button>
    ${t&&s==="cancel-reason"?o`<p class="action-reason" id=${s}>${e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:c}
    ${i?c:o`<p class="action-summary">${e("v4_plan_save_after_work","You can save when the robot finishes.")}</p>`}
  `},Me=(r,i,e)=>{let a=e.querySelector(z)?.shadowRoot?.querySelector(N)?.shadowRoot;if(i.workflow==="plan"&&i.planView==="edit"&&i.expandedRoom)return a?.querySelector(`[data-room-disclosure="${CSS.escape(i.expandedRoom)}"]`);if(i.workflow==="plan"&&r.planView==="edit")return e.querySelector(L)?.shadowRoot?.querySelector("button");let t=r.selection.planId;return i.workflow==="plans"&&t?a?.querySelector(`[data-plan-row="${CSS.escape(t)}"]`):null},ze=(r,i,e,a)=>{let t=Me(r,i,e);return a(t)?(t.scrollIntoView({block:"nearest"}),t.focus({preventScroll:!0}),!0):!1};var Le=(r,i,e)=>{let a=(p,u,l)=>w(e,p,u,l),t=M(i),s=i.cadenceResetRequest,n=i.resources.plans.value,d=s&&n?.rooms.find(p=>p.roomId===s.roomId)?.name||s?.roomId||"room",m=s?n?.plans.find(p=>p.id===s.planId)?.rooms.find(p=>p.roomId===s.roomId)?.cadence?.scope==="shared":!1,v=s?.mode??"mop";switch(r){case"confirmDeletePlan":return t&&{title:a("v4_delete_plan","Delete plan?"),detail:a("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:t.name}),...t.successor===void 0?{}:{consequence:t.successor===null?a("v4_delete_plan_none","You'll have no default plan."):a("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:t.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return t&&{title:a("v4_delete_area","Delete area?"),detail:a("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:t.name}),...t.successor===void 0?{}:{consequence:t.successor===null?a("v4_delete_area_none","No custom area will be selected."):a("v4_delete_area_selected","{area} becomes the selected custom area.",{area:t.successor})},cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:v==="mop"?a("v4_reset_mop_cadence_title","Reset mopping progress?"):a("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:m?a("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}):a("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}),cancelLabel:a("v4_cancel","Cancel"),confirmLabel:a("v4_reset","Reset"),action:"reset-room-cadence"}}},De=(r,i,e)=>{let a=r;if(!ee(a.detail))return;if(te(i,a.detail)){r.stopPropagation(),e(a.detail);return}if(a.detail?.type!=="open-dialog")return;let t=a.composedPath().find(s=>s instanceof HTMLElement&&s.hasAttribute("data-dialog-launcher"));return t instanceof HTMLElement?t:void 0},We=(r,i,e,a)=>{let t=r.cadenceResetRequest;e({type:"dismiss-top-layer"}),i!=="reset-room-cadence"?a(i):t&&a({id:i,planId:t.planId,roomId:t.roomId,mode:t.mode})};var X=["vacuum","mop","vacuum_and_mop"],O=["quick","standard","heavy_duty"],Se=H(N),y=r=>r.currentTarget.value,D=r=>r.currentTarget.checked,J=class extends E{constructor(){super(...arguments);this.state=k();this._historyPreviewPosition=null;this.#t=new ue(this,()=>import("./diagnostics-panel-E7G6MNKM.js"));this.#s="";this.#i=(e,a,t)=>this.#e(e,a,t)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0}}}static{this.styles=[R,S,C,x`
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
`]}#t;#s;willUpdate(e){if(!e.has("state"))return;let{workflow:a,selection:t}=this.state,s=`${a}:${t.floorId}:${t.historyId??"live"}`;s!==this.#s&&(this.#s=s,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#e(e,a,t){return w(this.localize,e,a,t)}#r(e){return e==="vacuum"?this.#e("vacuum","Vacuum"):e==="mop"?this.#e("mop","Mop"):this.#e("vacuum_and_mop","Vacuum + mop")}#n(e){return e==="quick"?this.#e("quick","Quick"):e==="standard"?this.#e("standard","Optimal"):this.#e("heavy_duty","Heavy duty")}#i;#l(e){return e==="vacuum"?c:o`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#p(e){return e==="mop_due"?this.#e("v4_cadence_mop_due_reason","Vacuum and mop are due"):e==="coverage_due"?this.#e("v4_cadence_coverage_due_reason","Vacuum rotation is due"):e==="mop_progress_unverified"?this.#e("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):e==="coverage_progress_unverified"?this.#e("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):this.#e("v4_cadence_due_unknown_reason","Schedule setting due")}#d(e){return e==="coverage_requires_vacuum"?this.#e("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off."):e==="plan_disabled"?this.#e("v4_preview_plan_disabled","This plan is paused. Enable it to preview and run."):e==="shared_schedule_unavailable"?this.#e("v4_preview_shared_unavailable","The shared room schedule doesn't match this map. Review the schedule's settings."):e==="cadence_progress_unverified"?this.#e("v4_preview_cadence_progress_unverified","Can't run this plan until you reset the room schedule progress Home Assistant can't confirm."):e==="cadence_identity_changed"||e==="cadence_identity_unavailable"?this.#e("v4_preview_identity_unavailable","Can't run this plan until Home Assistant can match its rooms to the current map."):e==="plan_has_no_rooms"?this.#e("v4_preview_no_rooms","Can't run this plan until it has at least one room."):e==="plan_room_limit"?this.#e("v4_preview_room_limit","Can't run this plan until it has 100 rooms or fewer."):this.#e("v4_preview_invalid","Can't run this plan until you open Edit and save it again.")}#a(e){this.dispatchEvent(new CustomEvent(P,{detail:e,bubbles:!0,composed:!0}))}#_(){switch(this.state.workflow){case"rooms":case"plans":case"plan":return{loading:this.#e("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#e("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#e("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#e("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#e("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#e("v4_loading_history","Loading map history\u2026"),unavailable:this.#e("v4_history_unavailable","Map history is unavailable right now."),empty:this.#e("v4_no_map_history","No saved map snapshots yet.")};default:return{loading:this.#e("map_loading","Loading\u2026"),unavailable:this.#e("v4_workspace_unavailable","The cleaning panel isn't available right now."),empty:this.#e("v4_nothing_saved","Nothing saved yet.")}}}#c({status:e,value:a,problem:t},s){let n=this.#_();if(a===null&&(e==="idle"||e==="loading"))return o`<div class="loading" role="status">${n.loading}</div>`;if(e==="error"){let d=this.state.workflow;return o`
        <div class="stack">
          <div class="problem" role="alert">${n.unavailable} ${t==="request-failed"?this.#e("v4_try_again","Try again shortly."):this.#e("v4_return_live_retry","Return to the live map and retry.")}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#a({type:"open-workflow",workflow:d})}>${this.#e("v4_retry","Try again")}</button>
          </div>
        </div>
      `}return e==="empty"?o`<div class="empty">${n.empty}</div>`:s}#f(){let e=this.state.resources.plans,a=ae(this.state),t=a!==null,s=this.state.selection.roomIds.length>=100;return this.#c(e,o`
      <div class="stack">
        <h3 class="group-heading" id="rooms-heading">${this.#e("v4_rooms_to_clean","Rooms to clean")}</h3>
        <div class="list" role="group" aria-labelledby="rooms-heading">
          ${(e.value?.rooms||[]).map(n=>{let d=this.state.selection.roomIds.includes(n.roomId);return o`
              <div class="room ms-row ms-row--stack" data-selected=${String(d)}>
                <label class="room-choice">
                  <input
                    type="checkbox"
                    .checked=${d}
                    ?disabled=${!d&&s}
                    @change=${()=>this.#a({type:"toggle-room",roomId:n.roomId})}
                  >
                  <strong>${n.name}</strong>
                  ${d?o`<small>${this.#e("v4_room_ready","Ready")}</small>`:c}
                </label>
                ${d?this.#y(n.roomId,this.state.selection.roomSettings.find(m=>m.roomId===n.roomId)||{roomId:n.roomId,cleaningMode:"vacuum",coverageSetting:"standard"}):c}
              </div>
            `})}
        </div>
        ${s?o`<p class="subtle" role="status">${this.#e("v4_room_limit_reached","Up to {limit} rooms fit, so remove one to add another.",{limit:100})}</p>`:c}
        <p class="subtle">${this.#e("v4_room_selection_hint","Select rooms here or directly on the map. The map and list stay in sync.")}</p>
        <label class="plan-option">
          <input type="checkbox" .checked=${!this.state.selection.useRoomSchedule} @change=${n=>this.#a({type:"set-use-room-schedule",value:!D(n)})}>
          <span class="plan-option-copy">
            <strong>${this.#e("v4_override_room_schedule","Override shared schedule settings")}</strong>
            <small>${this.#e("v4_override_room_schedule_hint","This clean follows the shared schedule unless you turn this on to use the settings chosen here. Anything due stays due, and matching cleans still count toward the schedule.")}</small>
          </span>
        </label>
        ${this.state.selection.roomIds.map(n=>{let d=e.value?.rooms.find(m=>m.roomId===n);return d?.sharedCadence||d?.sharedCadenceProgress||d?.sharedCadenceReasons?.length?o`<p class="subtle">${d.name}: ${this.#h(d.sharedCadence,d.sharedCadenceProgress,d.sharedCadenceReasons)}</p>`:c})}
        ${this.state.manualRoomPreview.status==="loading"?o`<p role="status" class="subtle">${this.#e("v4_room_preview_loading","Checking settings\u2026")}</p>`:c}
        ${this.state.manualRoomPreview.status==="error"?o`<div class="stack">
            <div role="alert" class="problem">${this.#e("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#a({type:"retry-room-preview"})}>${this.#e("v4_retry","Try again")}</button></div>
          </div>`:c}
        ${t?this.#b(a.preview):c}
      </div>
    `)}#b(e){let a=new Set(e.missionBoundaries);return o`
      <section class="stack" aria-labelledby="effective-rooms-heading" aria-live="polite">
        <h3 class="group-heading" id="effective-rooms-heading">${this.#e("v4_effective_room_preview","Effective cleaning preview")}</h3>
        ${e.blocker?o`<p class="problem" role="alert">${e.blocker==="invalid_cadence_policy"&&this.state.selection.useRoomSchedule&&this.state.selection.roomSettings.some(t=>t.cleaningMode!=="vacuum")?this.#e("v4_room_preview_schedule_override","The shared schedule can't use the cleaning mode you chose. Turn on Override shared schedule settings, or choose a mode that works with the schedule."):this.#e("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.")}</p>`:c}
        ${e.rooms.length?o`<ol class="list" aria-label=${this.#e("v4_effective_room_order","Effective room order")}>
            ${e.rooms.map((t,s)=>o`
              <li class="ms-row ms-row--stack">
                ${a.has(s)?o`<strong>${this.#e("v4_room_mission_boundary","New part (the robot may stop at the dock first)")}</strong>`:c}
                <strong>${t.name}</strong>
                <span class="subtle">${G(this.#i,t)}</span>
                ${t.cadenceReasons.length?o`<span class="subtle">${t.cadenceReasons.map(n=>this.#p(n)).join("; ")}</span>`:c}
              </li>
            `)}
          </ol>`:c}
      </section>
    `}#y(e,a){let t=this.state.resources.plans.value?.rooms.find(s=>s.roomId===e)?.name||this.#e("v4_room","Room");return o`
      <div class="split room-settings">
        <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
          <select
            aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:t})}
            .value=${a.cleaningMode}
            @change=${s=>this.#a({type:"patch-room-settings",roomId:e,cleaningMode:y(s)})}
          >${X.map(s=>o`<option value=${s} ?selected=${s===a.cleaningMode}>${this.#r(s)}</option>`)}</select>
        </label>
        <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
          <select
            aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:t})}
            ?disabled=${a.cleaningMode==="mop"}
            .value=${a.coverageSetting}
            @change=${s=>this.#a({type:"patch-room-settings",roomId:e,coverageSetting:y(s)})}
          >${O.map(s=>o`<option value=${s} ?selected=${s===a.coverageSetting}>${this.#n(s)}</option>`)}</select>
        </label>
      </div>
      ${this.#l(a.cleaningMode)}
    `}#u(e){return e.cadence||{scope:"plan",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1}}#h(e,a,t=a?.reasons||[]){if(t.includes("coverage_requires_vacuum"))return this.#d("coverage_requires_vacuum");if(t.includes("identity_changed")||t.includes("room_not_on_current_map"))return this.#e("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(t.includes("shared_schedule_unavailable"))return this.#e("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(t.includes("mop_progress_unverified")||t.includes("coverage_progress_unverified")){let m=[];return t.includes("mop_progress_unverified")&&m.push(this.#e("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),t.includes("coverage_progress_unverified")&&m.push(this.#e("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),m.join(" ")}if(t.includes("invalid_cadence_policy"))return this.#e("v4_cadence_policy_invalid","The room schedule needs review before it can be applied.");if(!e||!e.mopEveryN&&!e.coverageEveryN)return this.#e("v4_cadence_not_enabled","No recurring room schedule is enabled.");let s=[],n=a?.mopDue||a?.reasons.includes("mop_due"),d=a?.coverageDue||a?.reasons.includes("coverage_due");return e.mopEveryN&&s.push(n?this.#e("v4_cadence_mop_due","Vacuum and mop is due on this clean."):this.#e("v4_cadence_mop_progress","Mop every {interval} cleans; {completed} counted since the last mop.",{interval:e.mopEveryN,completed:a?.mopProgress??0})),e.coverageEveryN&&s.push(d?this.#e("v4_cadence_coverage_due","{coverage} vacuum rotation is due on this clean.",{coverage:this.#n(e.periodicCoverageSetting||"standard")}):this.#e("v4_cadence_coverage_progress","Vacuum rotation every {interval} cleans; {completed} counted so far.",{interval:e.coverageEveryN,completed:a?.coverageProgress??0})),s.join(" ")}#o(e,a){let t=this.state.planDraft.rooms[e];t&&this.#m(e,{cadence:{...this.#u(t),...a}})}#v(e,a,t){let s=e.currentTarget,n=s.value;if(n===""){t==="mopEveryN"?this.#o(a,{mopEveryN:null,doMopNext:!1}):this.#o(a,{coverageEveryN:null,doCoverageNext:!1});return}let d=Number(n);if(!Number.isInteger(d)||d<1||d>100){s.reportValidity();return}let m=this.state.planDraft.rooms[a];if(m){if(t==="coverageEveryN"){this.#o(a,{coverageEveryN:d,periodicCoverageSetting:m.cadence?.periodicCoverageSetting||m.coverageSetting});return}this.#o(a,{[t]:d})}}#$(e,a,t){let s=this.state.planDraft,n=this.#u(e),d=e.cadenceProgress,v=(s.id?this.state.resources.plans.value?.plans.find(b=>b.id===s.id)?.rooms.find(b=>b.roomId===e.roomId):void 0)?.cadence?.scope??null,p=this.state.resources.plans.value?.rooms.find(b=>b.roomId===e.roomId),u=!!(p?.sharedCadence||p?.sharedCadenceProgress),l=!!(n.mopEveryN||n.coverageEveryN),h=!!(d?.mopProgress||n.doMopNext||e.cadenceReasons?.includes("mop_progress_unverified")),g=!!(d?.coverageProgress||n.doCoverageNext||e.cadenceReasons?.includes("coverage_progress_unverified")),_=s.dirty||this.state.command!=="idle"||this.state.managedLock||this.state.activity!=="idle"&&this.state.activity!=="docked"||this.state.dataMode!=="live",f=v!==null&&v!==n.scope?n.scope==="shared"?this.#e("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted."):this.#e("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule."):v===null&&l?n.scope==="shared"?u?this.#e("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted."):this.#e("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero."):this.#e("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):this.#e("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."),W=this.#e("v4_room_cadence_named","Room schedule for {room}",{room:t});return o`
      <details class="plan-option cadence-config">
        <summary>${W}</summary>
        <p class="subtle">${this.#e("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
        <div class="cadence-fields">
          <label class="field ms-field">${this.#e("v4_cadence_scope","Count cleans")}
            <select aria-label=${this.#e("v4_cadence_scope_named","Count cleans for {room}",{room:t})} .value=${n.scope} @change=${b=>this.#o(a,{scope:y(b)})}>
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
          ${n.coverageEveryN?o`
            <label class="field ms-field">${this.#e("v4_cadence_periodic_coverage","Vacuum rotation level")}
              <select aria-label=${this.#e("v4_cadence_periodic_coverage_named","Vacuum rotation level for {room}",{room:t})} ?disabled=${e.cleaningMode==="mop"} .value=${n.periodicCoverageSetting||"standard"} @change=${b=>this.#o(a,{periodicCoverageSetting:y(b)})}>${O.map(b=>o`<option value=${b} ?selected=${b===n.periodicCoverageSetting}>${this.#n(b)}</option>`)}</select>
            </label>
          `:c}
        </div>
        <p class="subtle" role="status">${f}</p>
        ${e.cleaningMode==="mop"?o`
          <p class="subtle">${n.coverageEveryN?this.#d("coverage_requires_vacuum"):this.#e("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming.")}</p>
          ${n.coverageEveryN?o`<button type="button" class="ms-btn ms-btn--secondary"
            @click=${()=>this.#o(a,{scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1})}
          >${this.#e("v4_cadence_clear_room_coverage","Turn off")}</button>`:c}
        `:c}
        ${e.cleaningMode!=="vacuum"?o`<p class="subtle">${this.#e("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum.")}</p>`:c}
        ${n.mopEveryN&&e.cleaningMode==="vacuum"?o`<p class="subtle">${this.#e("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</p>`:c}
        <div class="plan-options" role="group" aria-label=${this.#e("v4_cadence_next_actions_named","Next clean options for {room}",{room:t})}>
          <label class="plan-option"><input type="checkbox" aria-label=${this.#e("v4_cadence_do_mop_next_named","Do vacuum and mop on the next clean for {room}",{room:t})} .checked=${n.doMopNext} ?disabled=${!n.mopEveryN} @change=${b=>this.#o(a,{doMopNext:D(b)})}><span class="plan-option-copy"><strong>${this.#e("v4_cadence_do_mop_next","Do vacuum and mop on the next clean")}</strong></span></label>
          <label class="plan-option"><input type="checkbox" aria-label=${this.#e("v4_cadence_do_coverage_next_named","Add a vacuum rotation on the next clean for {room}",{room:t})} .checked=${n.doCoverageNext} ?disabled=${!n.coverageEveryN||e.cleaningMode==="mop"} @change=${b=>this.#o(a,{doCoverageNext:D(b)})}><span class="plan-option-copy"><strong>${this.#e("v4_cadence_do_coverage_next","Add a vacuum rotation on the next clean")}</strong></span></label>
        </div>
        ${n.coverageEveryN?o`<p class="subtle">${this.#e("v4_cadence_coverage_verification_hint","A vacuum rotation counts only after the robot confirms the vacuum coverage and that the clean finished. If it can't confirm, the rotation stays due for the next clean.")}</p>`:c}
        <p class="subtle" aria-live="polite">${this.#h(n,d,e.cadenceReasons)}</p>
        ${s.id&&(n.mopEveryN||n.coverageEveryN||h||g)?o`
          <div class="toolbar">
            ${n.mopEveryN||h?o`<button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:t})}
              data-dialog-launcher="confirmResetCadence"
              ?disabled=${_}
              @click=${()=>this.#a({type:"request-room-cadence-reset",planId:s.id,roomId:e.roomId,mode:"mop"})}
            >${this.#e("v4_reset_mop_cadence_button","Reset mopping")}</button>`:c}
            ${n.coverageEveryN||g?o`<button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:t})}
              data-dialog-launcher="confirmResetCadence"
              ?disabled=${_}
              @click=${()=>this.#a({type:"request-room-cadence-reset",planId:s.id,roomId:e.roomId,mode:"coverage"})}
            >${this.#e("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`:c}
          </div>
          <p class="subtle">${this.#e("v4_reset_cadence_hint","Reset is available for a saved plan while the robot is idle. Cleaning history is kept separately.")}</p>
        `:c}
      </details>
    `}#w(e){this.#a({type:"toggle-room",roomId:e})}#m(e,a){let t=this.state.planDraft.rooms.map((s,n)=>n===e?{...s,...a}:s);this.#a({type:"patch-plan-draft",patch:{rooms:t}})}#g(e,a){let t=e+a,s=[...this.state.planDraft.rooms];if(t<0||t>=s.length)return;let[n]=s.splice(e,1);n&&(s.splice(t,0,n),this.#a({type:"patch-plan-draft",patch:{rooms:s}}))}#k(){return this.#c(this.state.resources.plans,V`<${Se}
      .state=${this.state}
      .localize=${this.localize}
    ></${Se}>`)}#x(){let e=this.state.resources.plans,a=e.value,t=this.state.planDraft,s=t.rooms.map(l=>({room:l,label:a?.rooms.find(h=>h.roomId===l.roomId)?.name||"Room",selected:!0})),n=(a?.rooms||[]).filter(l=>!t.rooms.some(h=>h.roomId===l.roomId)).map(l=>({room:{roomId:l.roomId,cleaningMode:"vacuum",coverageSetting:"standard"},label:l.name,selected:!1})),d=[...s,...n],m=t.rooms.length>=100,v=new Set(t.rooms.map(l=>`${l.cleaningMode}:${l.coverageSetting}`)).size>1,u=(t.id?a?.plans.find(l=>l.id===t.id):void 0)?.nextRunPreview;return this.#c(e,o`
      <div class="stack">
        <label class="field ms-field">${this.#e("plan_name","Plan name")}
          <input
            maxlength="128"
            autocomplete="off"
            .value=${t.name}
            @input=${l=>this.#a({type:"patch-plan-draft",patch:{name:y(l)}})}
          >
        </label>
        <div class="split plan-meta">
          <label class="field ms-field">${this.#e("plan_run_behavior","Cleaning order")}
            <select
              .value=${t.runBehavior}
              @change=${l=>this.#a({type:"patch-plan-draft",patch:{runBehavior:y(l)==="ordered"?"ordered":"intelligent"}})}
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
              @click=${()=>this.#a({type:"patch-plan-draft",patch:{enabled:!t.enabled}})}
            ></button>
          </div>
        </div>
        <h3 class="group-heading" id="plan-rooms-heading">${this.#e("v4_plan_rooms_heading","Rooms in this plan")}</h3>
        ${v?o`
          <p class="subtle plan-transition-hint">${this.#e("v4_plan_mixed_settings","Rooms with different cleaning settings may be cleaned in separate parts, and the robot may briefly touch the dock between parts.")}
            ${t.runBehavior==="ordered"?this.#e("v4_plan_group_settings","Placing rooms with matching settings together can reduce transitions."):this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}
          </p>
        `:c}
        <div class="list" role="group" aria-labelledby="plan-rooms-heading">
          ${we(d,({room:l})=>l.roomId,({room:l,label:h,selected:g})=>{let _=g?t.rooms.findIndex(f=>f.roomId===l.roomId):-1;return o`
              <div class="room plan-room ms-row ms-row--stack" data-selected=${String(g)}>
                <div class="room-choice">
                  <label class="plan-room-label">
                  <input type="checkbox" .checked=${g} ?disabled=${!g&&m} @change=${()=>this.#w(l.roomId)}>
                  <strong>${g?`${_+1}. `:""}${h}</strong>
                  </label>
                  ${g?o`
                    <span>
                      <button class="icon-button ms-btn ms-btn--icon" type="button" aria-label=${this.#e("move_room_up","Move {room} earlier",{room:h})} ?disabled=${_===0} @click=${f=>{f.preventDefault(),this.#g(_,-1)}}>${$(le)}</button>
                      <button class="icon-button ms-btn ms-btn--icon" type="button" aria-label=${this.#e("move_room_down","Move {room} later",{room:h})} ?disabled=${_===t.rooms.length-1} @click=${f=>{f.preventDefault(),this.#g(_,1)}}>${$(ce)}</button>
                    </span>
                  `:c}
                </div>
                ${g?o`
                  <div class="split room-settings">
                    <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
                      <select aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:h})} .value=${l.cleaningMode} @change=${f=>this.#m(_,{cleaningMode:y(f)})}>${X.map(f=>o`<option value=${f} ?selected=${f===l.cleaningMode} ?disabled=${!!("cadence"in l&&l.cadence?.mopEveryN&&f!=="vacuum")}>${this.#r(f)}</option>`)}</select>
                    </label>
                    <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
                      <select aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:h})} ?disabled=${l.cleaningMode==="mop"} .value=${l.coverageSetting} @change=${f=>this.#m(_,{coverageSetting:y(f)})}>${O.map(f=>o`<option value=${f} ?selected=${f===l.coverageSetting}>${this.#n(f)}</option>`)}</select>
                    </label>
                  </div>
                  ${this.#l(l.cleaningMode)}
                  ${this.#$(l,_,h)}
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
                    ${u.rooms.map((l,h)=>{let g=1+u.missionBoundaries.filter(_=>_<=h).length;return o`<li class="ms-row ms-row--stack">
                        <span class="subtle">${this.#e("v4_next_run_mission","Part {number}",{number:g})}</span>
                        <strong>${h+1}. ${l.name}</strong>
                        <span>${G(this.#i,l)}</span>
                        ${l.cadenceReasons.length?o`<small>${l.cadenceReasons.map(_=>this.#p(_)).join(" \xB7 ")}</small>`:c}
                      </li>`})}
                  </ol>
                `:o`<p class="problem" role="status">${this.#e("v4_next_run_preview_unavailable","The next-run preview isn't available. Reload your plans, then try again.")}</p>`:o`<p class="problem" role="status">${this.#e("v4_next_run_preview_unavailable","The next-run preview isn't available. Reload your plans, then try again.")}</p>`:o`<p class="subtle">${this.#e("v4_next_run_preview_save_first","Save this plan to calculate its exact room order and effective settings.")}</p>`}
        </section>
        <h3 class="group-heading" id="completion-heading">${this.#e("v4_completion_options","When a run ends")}</h3>
        <div class="plan-options" role="group" aria-labelledby="completion-heading">
          <label class="plan-option">
            <input type="checkbox" .checked=${t.returnToBase} @change=${l=>this.#a({type:"patch-plan-draft",patch:{returnToBase:D(l)}})}>
            <span class="plan-option-copy">
              <strong>${this.#e("plan_return_to_base","Return to the dock when finished")}</strong>
              <small>${this.#e("plan_return_to_base_hint","After the last selected room, the robot returns to the dock.")}</small>
            </span>
          </label>
          <label class="plan-option">
            <input type="checkbox" .checked=${t.finishCurrentRoom} @change=${l=>this.#a({type:"patch-plan-draft",patch:{finishCurrentRoom:D(l)}})}>
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
              <input type="range" min="0" max="100" step="5" .value=${String(t.finishCurrentRoomThreshold)} aria-label=${this.#e("plan_threshold","Minimum room progress")} @input=${l=>this.#a({type:"patch-plan-draft",patch:{finishCurrentRoomThreshold:Number(y(l))}})}>
            </label>
          `:c}
        </div>
        <div class="toolbar">
          ${M(this.state,"confirmDeletePlan")?o`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_delete_plan_label","Delete plan")}
              data-dialog-launcher="confirmDeletePlan"
              @click=${()=>this.#a({type:"open-dialog",dialog:"confirmDeletePlan"})}
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
            <button class="list-button ms-row ms-row" type="button" @click=${()=>this.#a({type:"select-area",areaId:null})}>${this.#e("area_new","New area")}</button>
            ${(e.value?.areas||[]).map(a=>o`
              <button class="list-button ms-row ms-row" type="button" @click=${()=>{this.#a({type:"select-area",areaId:a.id,workflow:"areaReview"})}}>
                <span>${a.name}</span>
                <small>${a.status==="current"?this.#e("area_workspace_ready","Ready"):this.#e("v4_review","Review")}</small>
              </button>
            `)}
            </div>
          </div>
        `)}
      </div>
    `}#R(){let e=this.state.areaDraft,a=e.canRebind||e.status==="review",t=!a&&(e.status==="stale"||e.status==="unknown");return o`
      <div class="stack">
        ${a?o`<div class="notice" data-tone="warning" role="status">${this.#e("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:c}
        ${t?o`<div class="problem" role="alert">${this.#e("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:c}
        <label class="field ms-field">${this.#e("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} @input=${s=>this.#a({type:"patch-area-draft",patch:{name:y(s)}})}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} @change=${s=>this.#a({type:"patch-area-draft",patch:{cleaningMode:y(s)}})}>${X.map(s=>o`<option value=${s} ?selected=${s===e.cleaningMode}>${this.#r(s)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} @change=${s=>this.#a({type:"patch-area-draft",patch:{coverageSetting:y(s)}})}>${O.map(s=>o`<option value=${s} ?selected=${s===e.coverageSetting}>${this.#n(s)}</option>`)}</select>
          </label>
        </div>
        ${this.#l(e.cleaningMode)}
        <div class="toolbar">
          <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#a({type:"open-workflow",workflow:"draw"})}>${this.#e("v4_edit_outline","Redraw")}</button>
          ${M(this.state,"confirmDeleteArea")?o`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_delete_area_label","Delete area")}
              data-dialog-launcher="confirmDeleteArea"
              @click=${()=>this.#a({type:"open-dialog",dialog:"confirmDeleteArea"})}
            >${this.#e("area_delete","Delete")}</button>
          `:c}
        </div>
      </div>
    `}#S(){let e=this.state.resources.history,a=e.value,t=a?.floors.find(p=>p.id===this.state.selection.floorId)||a?.floors.find(p=>p.active)||a?.floors[0],s=t?.snapshots||[],n=this.state.selection.historyId?Math.max(0,s.findIndex(p=>p.id===this.state.selection.historyId)):s.length,d=t?.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_return_current_floor","Return to current floor"),m=this._historyPreviewPosition??n,v=s[m];return this.#c(e,o`
      <div class="stack">
        ${(a?.floors.length||0)>1?o`
          <div class="group">
            <h3 class="group-heading" id="floors-heading">${this.#e("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(a?.floors||[]).map((p,u)=>o`
              <button
                class="floor ms-row ms-row"
                type="button"
                aria-current=${String(p.id===t?.id)}
                @click=${()=>this.#a({type:"set-floor",floorId:p.id})}
              >
                <span>${p.label||(p.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:p.ordinal??u}))}</span>
                <small>${p.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_read_only","Read only")}</small>
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
              max=${String(s.length)}
              step="1"
              .value=${String(m)}
              aria-valuetext=${v?K(v.createdAt,this.dates):d}
              ?disabled=${!s.length}
              @input=${p=>{this._historyPreviewPosition=Number(y(p))}}
              @change=${p=>{let u=Number(y(p));this._historyPreviewPosition=null,this.#a({type:"set-history",historyId:u===s.length?null:s[u]?.id||null})}}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId&&!!t?.active)} @click=${()=>this.#a({type:"set-history",historyId:null})}><span>${d}</span><small>${this.#e("v4_current","Current")}</small></button>
            ${s.map((p,u)=>o`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(p.id===this.state.selection.historyId)} @click=${()=>this.#a({type:"set-history",historyId:p.id})}>
                <span>${K(p.createdAt,this.dates)}</span><small>${this.#e("v4_history_position","{position} of {count}",{position:u+1,count:s.length})}</small>
              </button>
            `)}
          </div>
        </div>
        <p class="subtle">${this.#e("v4_history_privacy","Saved maps show one floor each and never show where the robot is now.")}</p>
      </div>
    `)}#C(){return this.#t.request(),this.#t.status!=="ready"?he(this.#t.status,this.localize,this.retry):o`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}render(){return o`<fieldset class="workflow-fields" ?disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}>${this.#P()}</fieldset>`}#P(){switch(this.state.workflow){case"rooms":return this.#f();case"plans":return this.#k();case"plan":return this.#x();case"draw":return this.#E();case"areaReview":return this.#R();case"history":return this.#S();case"support":return this.#C();case"none":return c}}};customElements.get(z)||customElements.define(z,J);export{J as MaticMapWorkflowV4,Ie as actionReason,We as confirmDialog,Le as dialogCopy,De as dialogLauncher,ze as focusPlanTarget,Ae as planCancel,Te as planTitle,Ne as planTools};
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
