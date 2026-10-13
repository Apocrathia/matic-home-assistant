import{D as Re,G as Ee,P as T,a as B,b as O,d as Q,e as D,f as W,g as I}from"./chunk-J23A6SXU.js";import{A as $e,L as we,N as ke,P as y,a as S,b as C,c as P,f as _e,i as be,y as fe,z as ye}from"./chunk-PG5OXYTZ.js";import{E as me,F as pe,G as ue,I as he,Q as R,R as o,U as ve,V as c,W as ge,X as E,Y as $,Z as xe,_ as Y,c as M,e as F,f as G,j as re,k as ie,n as x,p as le,q as ce,t as L,z as de}from"./chunk-LTYYE5LG.js";var Se={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ce=r=>(...l)=>({_$litDirective$:r,values:l}),j=class{constructor(l){}get _$AU(){return this._$AM._$AU}_$AT(l,e,s){this._$Ct=l,this._$AM=e,this._$Ci=s}_$AS(l,e){return this.update(l,e)}update(l,e){return this.render(...e)}};var{I:qe}=ge,Pe=r=>r;var Te=()=>document.createComment(""),z=(r,l,e)=>{let s=r._$AA.parentNode,t=l===void 0?r._$AB:l._$AA;if(e===void 0){let a=s.insertBefore(Te(),t),n=s.insertBefore(Te(),t);e=new qe(a,n,r,r.options)}else{let a=e._$AB.nextSibling,n=e._$AM,d=n!==r;if(d){let m;e._$AQ?.(r),e._$AM=r,e._$AP!==void 0&&(m=r._$AU)!==n._$AU&&e._$AP(m)}if(a!==t||d){let m=e._$AA;for(;m!==a;){let h=Pe(m).nextSibling;Pe(s).insertBefore(m,t),m=h}}}return e},N=(r,l,e=r)=>(r._$AI(l,e),r),Ve={},Ne=(r,l=Ve)=>r._$AH=l,Ie=r=>r._$AH,U=r=>{r._$AR(),r._$AA.remove()};var Ae=(r,l,e)=>{let s=new Map;for(let t=l;t<=e;t++)s.set(r[t],t);return s},ze=Ce(class extends j{constructor(r){if(super(r),r.type!==Se.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,l,e){let s;e===void 0?e=l:l!==void 0&&(s=l);let t=[],a=[],n=0;for(let d of r)t[n]=s?s(d,n):n,a[n]=e(d,n),n++;return{values:a,keys:t}}render(r,l,e){return this.dt(r,l,e).values}update(r,[l,e,s]){let t=Ie(r),{values:a,keys:n}=this.dt(l,e,s);if(!Array.isArray(t))return this.ut=n,a;let d=this.ut??=[],m=[],h,i,p=0,g=t.length-1,v=0,u=a.length-1;for(;p<=g&&v<=u;)if(t[p]===null)p++;else if(t[g]===null)g--;else if(d[p]===n[v])m[v]=N(t[p],a[v]),p++,v++;else if(d[g]===n[u])m[u]=N(t[g],a[u]),g--,u--;else if(d[p]===n[u])m[u]=N(t[p],a[u]),z(r,m[u+1],t[p]),p++,u--;else if(d[g]===n[v])m[v]=N(t[g],a[v]),z(r,t[p],t[g]),g--,v++;else if(h===void 0&&(h=Ae(n,v,u),i=Ae(d,p,g)),h.has(d[p]))if(h.has(d[g])){let b=i.get(n[v]),k=b!==void 0?t[b]:null;if(k===null){let A=z(r,t[p]);N(A,a[v]),m[v]=A}else m[v]=N(k,a[v]),z(r,t[p],k),t[b]=null;v++}else U(t[g]),g--;else U(t[p]),p++;for(;v<=u;){let b=z(r,m[u+1]);N(b,a[v]),m[v++]=b}for(;p<=g;){let b=t[p++];b!==null&&U(b)}return this.ut=n,Ne(r,m),ve}});var Me=(r,l)=>new Intl.NumberFormat(r).format(l),q=(r,l)=>l.cleaningMode==="mop"?r("v4_room_setting_mop","Mop"):l.cleaningMode==="vacuum"?l.coverageSetting==="quick"?r("v4_room_setting_vacuum_quick","Vacuum \xB7 Quick"):l.coverageSetting==="standard"?r("v4_room_setting_vacuum_standard","Vacuum \xB7 Optimal"):r("v4_room_setting_vacuum_heavy_duty","Vacuum \xB7 Heavy duty"):l.coverageSetting==="quick"?r("v4_room_setting_vacuum_and_mop_quick","Vacuum + mop \xB7 Quick"):l.coverageSetting==="standard"?r("v4_room_setting_vacuum_and_mop_standard","Vacuum + mop \xB7 Optimal"):r("v4_room_setting_vacuum_and_mop_heavy_duty","Vacuum + mop \xB7 Heavy duty"),Z=(r,l,e)=>{let s=h=>{let i=e.filter(h).map(p=>p.name);return i.length?xe(l,i):null},t=h=>s(i=>i.cadenceReasons.includes("coverage_due")&&i.coverageSetting===h),a=s(h=>h.cadenceReasons.includes("mop_due")),n=t("quick"),d=t("standard"),m=t("heavy_duty");return[a&&r("v4_due_mop","Mop due in {rooms}",{rooms:a}),n&&r("v4_due_quick","Quick vacuum due in {rooms}",{rooms:n}),d&&r("v4_due_optimal","Optimal vacuum due in {rooms}",{rooms:d}),m&&r("v4_due_heavy","Heavy duty vacuum due in {rooms}",{rooms:m})].filter(h=>!!h)};var X=class extends E{constructor(){super(...arguments);this.state=x();this.#t=(e,s,t)=>$(this.localize,e,s,t)}static{this.properties={state:{attribute:!1},localize:{attribute:!1}}}static{this.styles=[S,C,P,R`
:host { display: block; }
.plain { display: grid; gap: var(--ms-space-2); margin: 0; padding: 0; list-style: none; }
.plan-row .ms-row__body { display: grid; gap: 0.125rem; }
/* Beats controls' .ms-row__body strong; a long name ellipsizes and its chips stay on line 1. */
.plan-row .plan-title { display: flex; gap: var(--ms-space-1) var(--ms-space-2); align-items: center; min-inline-size: 0; }
.plan-row .plan-title bdi { overflow: hidden; min-inline-size: 0; text-overflow: ellipsis; white-space: nowrap; }
.plan-row .plan-title .ms-chip { flex: none; }
.chip-default { border-color: transparent; background: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-surface-card)); }
.chip-attention { border-color: transparent; background: color-mix(in srgb, var(--ms-danger) 12%, var(--ms-surface-card)); }
/* Line 3 keeps the text colour; the glyph carries the tone (design-system.md \u00a75). */
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
`]}#t;#a(e){this.dispatchEvent(new CustomEvent(T,{detail:e,bubbles:!0,composed:!0}))}#e(e){return Me(this.state.locale,e)}#r(e){return e.length?o`<span class="lines">${e.map(s=>o`<span class="line">${y(we)}<span>${s}</span></span>`)}</span>`:c}#n(e,s){let t=e.rooms.length,a=e.runBehavior==="ordered",n=t===1?a?this.#t("v4_plan_row_ordered_one","1 room \xB7 Top to bottom, as listed"):this.#t("v4_plan_row_rotation_one","1 room \xB7 Longest-waiting rooms first"):a?this.#t("v4_plan_row_ordered","{count} rooms \xB7 Top to bottom, as listed",{count:this.#e(t)}):this.#t("v4_plan_row_rotation","{count} rooms \xB7 Longest-waiting rooms first",{count:this.#e(t)}),d=e.nextRunPreview?.blocker,m=e.enabled?d&&d!=="plan_disabled"?o`<span class="lines"><span class="line" data-tone="warning">${y(ke)}<span>${this.#t("v4_plan_row_blocked","Needs attention before it can run")}</span></span></span>`:this.#r(Z(this.#t,this.state.locale,e.nextRunPreview?.rooms??[])):c,h=this.#t("v4_plan_default_hint","Home Assistant's plan button and plan select run this plan.");return o`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${e.id}
        aria-describedby=${s?"default-hint":c}
        @click=${()=>this.#a({type:"select-plan",planId:e.id})}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${e.name}</bdi>${s?o`<span class="ms-chip chip-default" title=${h}>${this.#t("v4_plan_default","Default")}</span>`:c}${e.enabled?c:o`<span class="ms-chip">${this.#t("v4_paused","Paused")}</span>`}</strong>
          <small>${n}</small>
          ${m}
        </span>
        <span class="ms-row__trail">${y(be)}</span>
      </button>
      ${s?o`<span class="sr-only" id="default-hint">${h}</span>`:c}
    </li>`}#l(){let e=this.state.resources.plans.value,s=this.#t("v4_create_plan","Create a plan");if(!e?.plans.length)return o`<div class="empty-card">
        <h3>${this.#t("v4_no_plans","No plans yet")}</h3>
        <p>${this.#t("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${()=>this.#a({type:"select-plan",planId:null})}>${s}</button>
      </div>`;let t=[...e.plans].sort((a,n)=>+(n.id===e.selectedPlan)-+(a.id===e.selectedPlan));return o`<ul class="plain">
      ${t.map(a=>this.#n(a,a.id===e.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${()=>this.#a({type:"select-plan",planId:null})}>
        <span class="ms-row__lead">${y(fe)}</span>
        <span class="ms-row__body"><strong>${s}</strong></span>
      </button></li>
    </ul>`}#i(){let e=this.state;return e.pendingAction==="save-plan"?this.#t("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):e.pendingAction==="run-plan"?this.#t("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):he(e)?this.#t("v4_reason_plan_switch_busy","Can't change this until the robot finishes."):!e.host.connected||!e.host.robotConnected?this.#t("v4_reason_plan_switch_offline","Waiting for Home Assistant to reach the robot again."):de(e)?null:this.#t("v4_reason_save_plan_map","Waiting for the map to be ready.")}#m(){let e=this.state.planDraft.enabled,s=this.#i();return o`
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
          aria-disabled=${s?"true":c}
          @click=${()=>{s||this.#a({type:"set-plan-enabled",enabled:!e})}}
        ></button>
      </div>
      ${s?o`<p class="reason" id="enabled-reason">${s}</p>`:c}
    `}#c(e,s,t,a={}){return o`<li class="run-row" ?data-break=${a.part!==void 0}>
      ${a.part===void 0?c:o`<span class="sr-only">${this.#t("v4_part_break","Part {number} starts here; the robot may stop at the dock first",{number:this.#e(a.part)})}</span>`}
      ${t===null?c:o`<span class="pos-badge" aria-hidden="true">${this.#e(t)}</span>`}
      <span class="row-lines">
        <bdi>${e}</bdi>
        <small>${s}</small>
        ${a.blocked?o`<span class="ms-chip chip-attention">${this.#t("v4_needs_attention","Needs attention")}</span>`:c}
      </span>
    </li>`}#s(){let e=this.state,s=e.planDraft,t=e.resources.plans.value,a=t?.plans.find(w=>w.id===s.id);if(!t||!a)return c;let n=a.nextRunPreview,d=n?.blocker??null,m=!s.enabled,h=!m&&!!(n&&!d&&/^[0-9a-f]{64}$/u.test(n.previewToken??"")),i=a.runBehavior==="ordered",p=h&&n?n.rooms:[],g=!m&&d?ue(e,a)?.jump.roomId??null:null,v=m||h||g||e.pendingAction==="save-plan"?null:d&&pe[d]||me,u=h?p.length:a.rooms.length,b=h?a.nextRunEstimateSeconds:null,k=b===null?"":this.#e(Math.max(1,Math.round(b/60))),A=b===null?u===1?this.#t("v4_plan_summary_rooms_one","1 room"):this.#t("v4_plan_summary_rooms","{count} rooms",{count:this.#e(u)}):u===1?this.#t("v4_plan_summary_rooms_estimate_one","1 room \xB7 about {minutes} min",{minutes:k}):this.#t("v4_plan_summary_rooms_estimate","{count} rooms \xB7 about {minutes} min",{count:this.#e(u),minutes:k}),_=h&&n?n.missionBoundaries:[],ae=h?p.map((w,H)=>{let oe=_.indexOf(H);return this.#c(w.name,q(this.#t,w),i?H+1:null,oe<0?{}:{part:oe+2})}):ce(a).rooms.map(w=>this.#c(t.rooms.find(H=>H.roomId===w.roomId)?.name??w.roomId,q(this.#t,w),null,{blocked:w.roomId===g})),ne=s.finishCurrentRoom?this.#t("v4_plan_summary_finish","When you press Stop, the robot finishes the current room if it's at least {percent}% done.",{percent:this.#e(s.finishCurrentRoomThreshold)}):s.returnToBase?this.#t("v4_plan_summary_return","Returns to the dock when finished"):null;return o`
      <p class="summary">${A}</p>
      ${this.#r(Z(this.#t,e.locale,p))}
      <h3 class="heading">${m?this.#t("v4_plan_rooms_heading","Rooms in this plan"):e.resources.entry?.activePlan?this.#t("v4_next_run_after_active","After this run"):this.#t("v4_next_run_preview","Next run")}</h3>
      ${h&&!i?o`<p class="quiet">${this.#t("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}</p>`:c}
      ${_.length?o`<p class="quiet">${this.#t("v4_room_parts","The robot cleans these rooms in {count} parts and may stop at the dock between parts.",{count:this.#e(_.length+1)})}</p>`:c}
      ${v?o`<p class="problem">${this.#t(v.reasonKey,v.reason)}</p>
        <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#a({type:"open-workflow",workflow:"plan"})}>${this.#t("v4_retry","Try again")}</button>`:c}
      ${h&&i?o`<ol class="run-list" role="list">${ae}</ol>`:o`<ul class="run-list" role="list">${ae}</ul>`}
      ${this.#m()}
      ${ne?o`<p class="quiet">${ne}</p>`:c}
    `}render(){let{workflow:e,planView:s}=this.state;return e==="plans"?this.#l():e==="plan"&&s==="run"?this.#s():c}};customElements.get(I)||customElements.define(I,X);var J=class extends E{constructor(){super(...arguments);this.state=x();this.compact=!1;this.inline=!1}static{this.properties={state:{attribute:!1},localize:{attribute:!1},compact:{type:Boolean,reflect:!0},inline:{type:Boolean,reflect:!0}}}static{this.styles=[S,C,P,R`
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
`]}#t(e,s){return $(this.localize,e,s)}#a(e){this.dispatchEvent(new CustomEvent(T,{detail:e,bubbles:!0,composed:!0}))}#e(e){let s=e.currentTarget.valueAsNumber;Number.isFinite(s)&&this.#a({type:"set-brush",value:s})}render(){let{draw:e}=this.state;return o`
      <div class="controls ms-surface ms-surface--overlay" role="group" aria-label=${this.#t("v4_drawing_precision","Drawing precision")}>
        <div class="row ms-field">
          <label for="brush">${this.#t("brush_size","Brush width")}</label>
          <div class="stepper">
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#t("v4_narrower_brush","Narrower brush")}
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
                @change=${this.#e}
                aria-label=${this.#t("v4_brush_width_meters","Brush width in meters")}
              />
              <span class="unit">m</span>
            </span>
            <button
              class="ms-btn ms-btn--secondary ms-btn--icon"
              type="button"
              aria-label=${this.#t("v4_wider_brush","Wider brush")}
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
            @input=${this.#e}
            aria-label=${this.#t("v4_brush_width_slider","Brush width slider")}
            aria-valuetext=${`${e.brushMeters.toFixed(2)} m`}
          />
        </div>
        <p class="hint">${this.#t("v4_precision_hint","Strokes follow the map's resolution. Zooming changes the view, not the area.")}</p>
      </div>
    `}};customElements.get(Q)||customElements.define(Q,J);var ee=class extends E{constructor(){super(...arguments);this.state=x();this._open=!1;this.#l=e=>{let s=this.renderRoot.querySelector(".more");s&&!e.composedPath().includes(s)&&(this._open=!1)}}static{this.properties={state:{attribute:!1},localize:{attribute:!1},_open:{state:!0}}}static{this.styles=[S,C,P,R`
:host { display: contents; }
.more { position: relative; margin-inline-start: auto; }
.reason { flex-basis: 100%; margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: end; }
.menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.menu .reason { padding: var(--ms-space-1) var(--ms-space-3); text-align: start; }
`]}#t(e,s,t){return $(this.localize,e,s,t)}#a(e,s=this){s.dispatchEvent(new CustomEvent(T,{detail:e,bubbles:!0,composed:!0}))}willUpdate(e){e.has("state")&&this.state.planView!=="edit"&&(this._open=!1)}updated(e){e.has("_open")&&this._open&&this.renderRoot.querySelector("[role=menuitem]")?.focus()}#e(){this._open=!1,this.renderRoot.querySelector(".more > button")?.focus()}#r(e){e.key!=="Escape"||!this._open||(e.preventDefault(),this.#e())}#n(e){let s=e.relatedTarget;s&&!e.currentTarget.contains(s)&&(this._open=!1)}#l;connectedCallback(){super.connectedCallback(),window.addEventListener("pointerdown",this.#l,!0)}disconnectedCallback(){window.removeEventListener("pointerdown",this.#l,!0),super.disconnectedCallback()}#i(e){if(this.state.planDraft.dirty)return;let s=e.currentTarget.closest(".more")?.querySelector("button");this._open=!1,this.#a({type:"open-dialog",dialog:"confirmDeletePlan"},s??this)}render(){let{planView:e,planDraft:s,pendingAction:t}=this.state;if(e==="run"){let n=t==="save-plan"?this.#t("v4_reason_plan_saving","Waiting for Home Assistant to save the plan."):t==="run-plan"?this.#t("v4_reason_run_plan_checking","Waiting for Home Assistant to check the next run."):null;return o`
        <button
          class="ms-btn ms-btn--secondary"
          type="button"
          aria-label=${this.#t("v4_edit_plan_named","Edit {plan}",{plan:s.name})}
          aria-disabled=${n?"true":c}
          aria-describedby=${n?"edit-reason":c}
          @click=${()=>{n||this.#a({type:"set-plan-view",view:"edit"})}}
        >${this.#t("v4_edit","Edit")}</button>
        ${n?o`<p class="reason" id="edit-reason">${n}</p>`:c}
      `}if(!s.id)return c;let a=s.dirty;return o`
      <div class="more" @keydown=${this.#r} @focusout=${this.#n}>
        <button
          class="ms-btn ms-btn--icon"
          type="button"
          aria-label=${this.#t("v4_more_actions","More actions")}
          aria-haspopup="menu"
          aria-expanded=${String(this._open)}
          data-dialog-launcher="confirmDeletePlan"
          @click=${()=>{this._open=!this._open}}
        >${y(_e)}</button>
        ${this._open?o`
          <div class="menu ms-surface ms-surface--overlay" @mousedown=${n=>n.preventDefault()}>
            <div role="menu" aria-label=${this.#t("v4_more_actions","More actions")}><button
              class="ms-row ms-row--menu"
              type="button"
              role="menuitem"
              aria-disabled=${a?"true":c}
              aria-describedby=${a?"delete-reason":c}
              @click=${this.#i}
            >${this.#t("plan_delete","Delete")}</button></div>
            ${a?o`<p class="reason" id="delete-reason">${this.#t("v4_delete_plan_unsaved","Can't delete this plan until you save or cancel your changes.")}</p>`:c}
          </div>
        `:c}
      </div>
    `}};customElements.get(W)||customElements.define(W,ee);var He=(r,l,e)=>o`${r.planView==="run"?o`<bdi>${l}</bdi>`:l}${r.planDraft.dirty?o` <span class="ms-chip">${e("v4_plan_unsaved","Unsaved changes")}</span>`:c}`,Le=B(W),Be=(r,l,e)=>O`<${Le}
  .state=${r}
  .localize=${l}
  @matic-workspace-intent=${e}
></${Le}>`,De=(r,l,e,s)=>{let t=s?.room;if(t===void 0)return r(l,e,s);let[a,n]=r(l,e,{...s,room:"\0"}).split("\0");return o`${a}<bdi>${t}</bdi>${n}`},Oe=(r,l,e,s)=>{let t=e?l.jump:void 0;return o`${De(r,l.reasonKey??"",l.reason??"",l.reasonPlaceholders)}${t?o` <button
    class="ms-btn action-jump"
    type="button"
    @click=${()=>s({type:"set-plan-view",view:"edit",roomId:t.roomId})}
  >${De(r,t.labelKey,t.label,t.labelPlaceholders)}</button>`:c}`},je=(r,l,e,s)=>{let t=r.pendingAction==="save-plan",a=l?.id==="save-plan"?"primary-reason":"cancel-reason";return o`
    <button
      class="ms-btn ms-btn--block ms-btn--lg ms-btn--secondary"
      type="button"
      data-dialog-launcher="discardDraft"
      aria-disabled=${t?"true":c}
      aria-describedby=${t?a:c}
      @click=${n=>{t||s(r.planDraft.id?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"},n.currentTarget)}}
    >${e("v4_cancel","Cancel")}</button>
    ${t&&a==="cancel-reason"?o`<p class="action-reason" id=${a}>${e("v4_reason_plan_saving","Waiting for Home Assistant to save the plan.")}</p>`:c}
    ${l?c:o`<p class="action-summary">${e("v4_plan_save_after_work","You can save when the robot finishes.")}</p>`}
  `},Ue=(r,l,e)=>{let s=e.querySelector(D)?.shadowRoot?.querySelector(I)?.shadowRoot;if(l.workflow==="plan"&&l.planView==="edit"&&l.expandedRoom)return s?.querySelector(`[data-room-disclosure="${CSS.escape(l.expandedRoom)}"]`);if(l.workflow==="plan"&&r.planView==="edit")return e.querySelector(W)?.shadowRoot?.querySelector("button");let t=r.selection.planId;return l.workflow==="plans"&&t?s?.querySelector(`[data-plan-row="${CSS.escape(t)}"]`):null},Ke=(r,l,e,s)=>{let t=Ue(r,l,e);return s(t)?(t.scrollIntoView({block:"nearest"}),t.focus({preventScroll:!0}),!0):!1};var Fe=(r,l,e)=>{let s=(i,p,g)=>$(e,i,p,g),t=L(l),a=l.cadenceResetRequest,n=l.resources.plans.value,d=a&&n?.rooms.find(i=>i.roomId===a.roomId)?.name||a?.roomId||"room",m=a?n?.plans.find(i=>i.id===a.planId)?.rooms.find(i=>i.roomId===a.roomId)?.cadence?.scope==="shared":!1,h=a?.mode??"mop";switch(r){case"confirmDeletePlan":return t&&{title:s("v4_delete_plan","Delete plan?"),detail:s("v4_delete_plan_detail",`Automations that run "{name}" will stop working, and the robot won't move.`,{name:t.name}),...t.successor===void 0?{}:{consequence:t.successor===null?s("v4_delete_plan_none","You'll have no default plan."):s("v4_delete_plan_default","{new_default} becomes your default plan.",{new_default:t.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("plan_delete","Delete"),action:"delete-plan"};case"confirmDeleteArea":return t&&{title:s("v4_delete_area","Delete area?"),detail:s("v4_delete_area_detail",`Automations that clean "{name}" will stop working, and the robot won't move.`,{name:t.name}),...t.successor===void 0?{}:{consequence:t.successor===null?s("v4_delete_area_none","No custom area will be selected."):s("v4_delete_area_selected","{area} becomes the selected custom area.",{area:t.successor})},cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("area_delete","Delete"),action:"delete-area"};case"confirmResetCadence":return{title:h==="mop"?s("v4_reset_mop_cadence_title","Reset mopping progress?"):s("v4_reset_coverage_cadence_title","Reset vacuum rotation progress?"),detail:m?s("v4_reset_shared_cadence_detail","The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}):s("v4_reset_private_cadence_detail","The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.",{room:d}),cancelLabel:s("v4_cancel","Cancel"),confirmLabel:s("v4_reset","Reset"),action:"reset-room-cadence"}}},Ge=(r,l,e)=>{let s=r;if(!re(s.detail))return;if(ie(l,s.detail)){r.stopPropagation(),e(s.detail);return}if(s.detail?.type!=="open-dialog")return;let t=s.composedPath().find(a=>a instanceof HTMLElement&&a.hasAttribute("data-dialog-launcher"));return t instanceof HTMLElement?t:void 0},Qe=(r,l,e,s)=>{let t=r.cadenceResetRequest;e({type:"dismiss-top-layer"}),l!=="reset-room-cadence"?s(l):t&&s({id:l,planId:t.planId,roomId:t.roomId,mode:t.mode})};var te=["vacuum","mop","vacuum_and_mop"],K=["quick","standard","heavy_duty"],We=B(I),f=r=>r.currentTarget.value,V=r=>r.currentTarget.checked,se=class extends E{constructor(){super(...arguments);this.state=x();this._historyPreviewPosition=null;this.#t=new Re(this,()=>import("./diagnostics-panel-4LBDAQXL.js"));this.#a="";this.#l=(e,s,t)=>this.#e(e,s,t)}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_historyPreviewPosition:{state:!0}}}static{this.styles=[S,C,P,R`
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
`]}#t;#a;willUpdate(e){if(!e.has("state"))return;let{workflow:s,selection:t}=this.state,a=`${s}:${t.floorId}:${t.historyId??"live"}`;a!==this.#a&&(this.#a=a,this._historyPreviewPosition=null)}disconnectedCallback(){super.disconnectedCallback()}#e(e,s,t){return $(this.localize,e,s,t)}#r(e){return e==="vacuum"?this.#e("vacuum","Vacuum"):e==="mop"?this.#e("mop","Mop"):this.#e("vacuum_and_mop","Vacuum + mop")}#n(e){return e==="quick"?this.#e("quick","Quick"):e==="standard"?this.#e("standard","Optimal"):this.#e("heavy_duty","Heavy duty")}#l;#i(e){return e==="vacuum"?c:o`<p class="subtle">${this.#e("v4_mop_coverage_hint","Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}#m(e){return e==="mop_due"?this.#e("v4_cadence_mop_due_reason","Vacuum and mop are due"):e==="coverage_due"?this.#e("v4_cadence_coverage_due_reason","Vacuum rotation is due"):e==="mop_progress_unverified"?this.#e("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."):e==="coverage_progress_unverified"?this.#e("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."):this.#e("v4_cadence_due_unknown_reason","Schedule setting due")}#c(){return this.#e("v4_cadence_coverage_requires_vacuum","The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off.")}#s(e){this.dispatchEvent(new CustomEvent(T,{detail:e,bubbles:!0,composed:!0}))}#b(){switch(this.state.workflow){case"rooms":case"plans":case"plan":return{loading:this.#e("v4_loading_rooms_plans","Loading rooms and plans\u2026"),unavailable:this.#e("v4_rooms_plans_unavailable","Home Assistant couldn't load rooms and plans."),empty:this.#e("v4_no_rooms_plans","This floor has no rooms yet. Name rooms in the Matic app to see them here.")};case"draw":case"areaReview":return{loading:this.#e("v4_loading_areas","Loading saved areas\u2026"),unavailable:this.#e("v4_areas_unavailable","Saved areas are unavailable right now."),empty:this.#e("v4_no_saved_areas","No saved areas yet. Draw one on the map.")};case"history":return{loading:this.#e("v4_loading_history","Loading map history\u2026"),unavailable:this.#e("v4_history_unavailable","Map history is unavailable right now."),empty:this.#e("v4_no_map_history","No saved map snapshots yet.")};default:return{loading:this.#e("map_loading","Loading\u2026"),unavailable:this.#e("v4_workspace_unavailable","The cleaning panel isn't available right now."),empty:this.#e("v4_nothing_saved","Nothing saved yet.")}}}#d({status:e,value:s,problem:t},a){let n=this.#b();if(s===null&&(e==="idle"||e==="loading"))return o`<div class="loading" role="status">${n.loading}</div>`;if(e==="error"){let d=this.state.workflow;return o`
        <div class="stack">
          <div class="problem" role="alert">${n.unavailable} ${t==="request-failed"?this.#e("v4_try_again","Try again shortly."):this.#e("v4_return_live_retry","Return to the live map and retry.")}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#s({type:"open-workflow",workflow:d})}>${this.#e("v4_retry","Try again")}</button>
          </div>
        </div>
      `}return e==="empty"?o`<div class="empty">${n.empty}</div>`:a}#f(){let e=this.state.resources.plans,s=le(this.state),t=s!==null,a=this.state.selection.roomIds.length>=100;return this.#d(e,o`
      <div class="stack">
        <h3 class="group-heading" id="rooms-heading">${this.#e("v4_rooms_to_clean","Rooms to clean")}</h3>
        <div class="list" role="group" aria-labelledby="rooms-heading">
          ${(e.value?.rooms||[]).map(n=>{let d=this.state.selection.roomIds.includes(n.roomId);return o`
              <div class="room ms-row ms-row--stack" data-selected=${String(d)}>
                <label class="room-choice">
                  <input
                    type="checkbox"
                    .checked=${d}
                    ?disabled=${!d&&a}
                    @change=${()=>this.#s({type:"toggle-room",roomId:n.roomId})}
                  >
                  <strong>${n.name}</strong>
                  ${d?o`<small>${this.#e("v4_room_ready","Ready")}</small>`:c}
                </label>
                ${d?this.#$(n.roomId,this.state.selection.roomSettings.find(m=>m.roomId===n.roomId)||{roomId:n.roomId,cleaningMode:"vacuum",coverageSetting:"standard"}):c}
              </div>
            `})}
        </div>
        ${a?o`<p class="subtle" role="status">${this.#e("v4_room_limit_reached","Up to {limit} rooms fit, so remove one to add another.",{limit:100})}</p>`:c}
        <p class="subtle">${this.#e("v4_room_selection_hint","Select rooms here or directly on the map. The map and list stay in sync.")}</p>
        <label class="plan-option">
          <input type="checkbox" .checked=${!this.state.selection.useRoomSchedule} @change=${n=>this.#s({type:"set-use-room-schedule",value:!V(n)})}>
          <span class="plan-option-copy">
            <strong>${this.#e("v4_override_room_schedule","Override shared schedule settings")}</strong>
            <small>${this.#e("v4_override_room_schedule_hint","This clean follows the shared schedule unless you turn this on to use the settings chosen here. Anything due stays due, and matching cleans still count toward the schedule.")}</small>
          </span>
        </label>
        ${this.state.selection.roomIds.map(n=>{let d=e.value?.rooms.find(m=>m.roomId===n);return d?.sharedCadence||d?.sharedCadenceProgress||d?.sharedCadenceReasons?.length?o`<p class="subtle">${d.name}: ${this.#h(d.sharedCadence,d.sharedCadenceProgress,d.sharedCadenceReasons)}</p>`:c})}
        ${this.state.manualRoomPreview.status==="loading"?o`<p role="status" class="subtle">${this.#e("v4_room_preview_loading","Checking settings\u2026")}</p>`:c}
        ${this.state.manualRoomPreview.status==="error"?o`<div class="stack">
            <div role="alert" class="problem">${this.#e("v4_room_preview_unavailable","Home Assistant couldn't check the room settings.")}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#s({type:"retry-room-preview"})}>${this.#e("v4_retry","Try again")}</button></div>
          </div>`:c}
        ${t?this.#y(s.preview):c}
      </div>
    `)}#y(e){let s=new Set(e.missionBoundaries);return o`
      <section class="stack" aria-labelledby="effective-rooms-heading" aria-live="polite">
        <h3 class="group-heading" id="effective-rooms-heading">${this.#e("v4_effective_room_preview","Effective cleaning preview")}</h3>
        ${e.blocker?o`<p class="problem" role="alert">${e.blocker==="invalid_cadence_policy"&&this.state.selection.useRoomSchedule&&this.state.selection.roomSettings.some(t=>t.cleaningMode!=="vacuum")?this.#e("v4_room_preview_schedule_override","The shared schedule can't use the cleaning mode you chose. Turn on Override shared schedule settings, or choose a mode that works with the schedule."):this.#e("v4_room_preview_blocked","These rooms can't be cleaned with the current settings. Change the settings or the rooms, then try again.")}</p>`:c}
        ${e.rooms.length?o`<ol class="list" aria-label=${this.#e("v4_effective_room_order","Effective room order")}>
            ${e.rooms.map((t,a)=>o`
              <li class="ms-row ms-row--stack">
                ${s.has(a)?o`<strong>${this.#e("v4_room_mission_boundary","New part (the robot may stop at the dock first)")}</strong>`:c}
                <strong>${t.name}</strong>
                <span class="subtle">${q(this.#l,t)}</span>
                ${t.cadenceReasons.length?o`<span class="subtle">${t.cadenceReasons.map(n=>this.#m(n)).join("; ")}</span>`:c}
              </li>
            `)}
          </ol>`:c}
      </section>
    `}#$(e,s){let t=this.state.resources.plans.value?.rooms.find(a=>a.roomId===e)?.name||this.#e("v4_room","Room");return o`
      <div class="split room-settings">
        <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
          <select
            aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:t})}
            .value=${s.cleaningMode}
            @change=${a=>this.#s({type:"patch-room-settings",roomId:e,cleaningMode:f(a)})}
          >${te.map(a=>o`<option value=${a} ?selected=${a===s.cleaningMode}>${this.#r(a)}</option>`)}</select>
        </label>
        <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
          <select
            aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:t})}
            ?disabled=${s.cleaningMode==="mop"}
            .value=${s.coverageSetting}
            @change=${a=>this.#s({type:"patch-room-settings",roomId:e,coverageSetting:f(a)})}
          >${K.map(a=>o`<option value=${a} ?selected=${a===s.coverageSetting}>${this.#n(a)}</option>`)}</select>
        </label>
      </div>
      ${this.#i(s.cleaningMode)}
    `}#u(e){return e.cadence||{scope:"plan",mopEveryN:null,coverageEveryN:null,periodicCoverageSetting:null,doMopNext:!1,doCoverageNext:!1}}#h(e,s,t=s?.reasons||[]){if(t.includes("coverage_requires_vacuum"))return this.#c();if(t.includes("identity_changed")||t.includes("room_not_on_current_map"))return this.#e("v4_cadence_identity_blocked","This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");if(t.includes("shared_schedule_unavailable"))return this.#e("v4_cadence_shared_unavailable","The shared room schedule is unavailable. Review its settings before cleaning.");if(t.includes("mop_progress_unverified")||t.includes("coverage_progress_unverified")){let m=[];return t.includes("mop_progress_unverified")&&m.push(this.#e("v4_cadence_mop_progress_unverified","Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")),t.includes("coverage_progress_unverified")&&m.push(this.#e("v4_cadence_coverage_progress_unverified","Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")),m.join(" ")}if(t.includes("invalid_cadence_policy"))return this.#e("v4_cadence_policy_invalid","The room schedule needs review before it can be applied.");if(!e||!e.mopEveryN&&!e.coverageEveryN)return this.#e("v4_cadence_not_enabled","No recurring room schedule is enabled.");let a=[],n=s?.mopDue||s?.reasons.includes("mop_due"),d=s?.coverageDue||s?.reasons.includes("coverage_due");return e.mopEveryN&&a.push(n?this.#e("v4_cadence_mop_due","Vacuum and mop is due on this clean."):this.#e("v4_cadence_mop_progress","Mop every {interval} cleans; {completed} counted since the last mop.",{interval:e.mopEveryN,completed:s?.mopProgress??0})),e.coverageEveryN&&a.push(d?this.#e("v4_cadence_coverage_due","{coverage} vacuum rotation is due on this clean.",{coverage:this.#n(e.periodicCoverageSetting||"standard")}):this.#e("v4_cadence_coverage_progress","Vacuum rotation every {interval} cleans; {completed} counted so far.",{interval:e.coverageEveryN,completed:s?.coverageProgress??0})),a.join(" ")}#o(e,s){let t=this.state.planDraft.rooms[e];t&&this.#p(e,{cadence:{...this.#u(t),...s}})}#v(e,s,t){let a=e.currentTarget,n=a.value;if(n===""){t==="mopEveryN"?this.#o(s,{mopEveryN:null,doMopNext:!1}):this.#o(s,{coverageEveryN:null,doCoverageNext:!1});return}let d=Number(n);if(!Number.isInteger(d)||d<1||d>100){a.reportValidity();return}let m=this.state.planDraft.rooms[s];if(m){if(t==="coverageEveryN"){this.#o(s,{coverageEveryN:d,periodicCoverageSetting:m.cadence?.periodicCoverageSetting||m.coverageSetting});return}this.#o(s,{[t]:d})}}#w(e,s,t){let a=this.state.planDraft,n=this.#u(e),d=e.cadenceProgress,h=(a.id?this.state.resources.plans.value?.plans.find(_=>_.id===a.id)?.rooms.find(_=>_.roomId===e.roomId):void 0)?.cadence?.scope??null,i=this.state.resources.plans.value?.rooms.find(_=>_.roomId===e.roomId),p=!!(i?.sharedCadence||i?.sharedCadenceProgress),g=!!(n.mopEveryN||n.coverageEveryN),v=!!(d?.mopProgress||n.doMopNext||e.cadenceReasons?.includes("mop_progress_unverified")),u=!!(d?.coverageProgress||n.doCoverageNext||e.cadenceReasons?.includes("coverage_progress_unverified")),b=a.dirty||this.state.command!=="idle"||this.state.managedLock||this.state.activity!=="idle"&&this.state.activity!=="docked"||this.state.dataMode!=="live",k=h!==null&&h!==n.scope?n.scope==="shared"?this.#e("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted."):this.#e("v4_cadence_shared_leave_effect","Saving starts new progress for this plan only, and other plans keep the shared schedule."):h===null&&g?n.scope==="shared"?p?this.#e("v4_cadence_shared_join_effect","Saving shares this room's progress with every plan that uses it, picking up any progress already counted."):this.#e("v4_cadence_new_shared_effect","Saving creates a schedule shared by every plan that uses this room, starting from zero."):this.#e("v4_cadence_new_private_effect","Saving starts progress for this plan only, from zero."):this.#e("v4_cadence_existing_effect","Changing how often keeps the progress, and turning a schedule off pauses it."),A=this.#e("v4_room_cadence_named","Room schedule for {room}",{room:t});return o`
      <details class="plan-option cadence-config">
        <summary>${A}</summary>
        <p class="subtle">${this.#e("v4_cadence_description","Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
        <div class="cadence-fields">
          <label class="field ms-field">${this.#e("v4_cadence_scope","Count cleans")}
            <select aria-label=${this.#e("v4_cadence_scope_named","Count cleans for {room}",{room:t})} .value=${n.scope} @change=${_=>this.#o(s,{scope:f(_)})}>
              <option value="plan" ?selected=${n.scope==="plan"}>${this.#e("v4_cadence_this_plan","In this plan only")}</option>
              <option value="shared" ?selected=${n.scope==="shared"}>${this.#e("v4_cadence_shared","Across all plans (recommended)")}</option>
            </select>
          </label>
          <label class="field ms-field">${this.#e("v4_cadence_mop_interval","Vacuum and mop every N cleans")}
            <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${this.#e("v4_cadence_mop_interval_named","How often to mop {room}, every 1 to 100 cleans",{room:t})} .value=${n.mopEveryN?.toString()||""} ?disabled=${e.cleaningMode!=="vacuum"} @change=${_=>this.#v(_,s,"mopEveryN")}>
          </label>
          <label class="field ms-field">${this.#e("v4_cadence_coverage_interval","Vacuum rotation every N cleans")}
            <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${this.#e("v4_cadence_coverage_interval_named","How often to add a vacuum rotation in {room}, every 1 to 100 cleans",{room:t})} ?disabled=${e.cleaningMode==="mop"} .value=${n.coverageEveryN?.toString()||""} @change=${_=>this.#v(_,s,"coverageEveryN")}>
          </label>
          ${n.coverageEveryN?o`
            <label class="field ms-field">${this.#e("v4_cadence_periodic_coverage","Vacuum rotation level")}
              <select aria-label=${this.#e("v4_cadence_periodic_coverage_named","Vacuum rotation level for {room}",{room:t})} ?disabled=${e.cleaningMode==="mop"} .value=${n.periodicCoverageSetting||"standard"} @change=${_=>this.#o(s,{periodicCoverageSetting:f(_)})}>${K.map(_=>o`<option value=${_} ?selected=${_===n.periodicCoverageSetting}>${this.#n(_)}</option>`)}</select>
            </label>
          `:c}
        </div>
        <p class="subtle" role="status">${k}</p>
        ${e.cleaningMode==="mop"?o`
          <p class="subtle">${n.coverageEveryN?this.#c():this.#e("v4_cadence_coverage_available_modes","Can't add a vacuum rotation until this room's cleaning mode includes vacuuming.")}</p>
          ${n.coverageEveryN?o`<button type="button" class="ms-btn ms-btn--secondary"
            @click=${()=>this.#o(s,{scope:"plan",coverageEveryN:null,periodicCoverageSetting:null,doCoverageNext:!1})}
          >${this.#e("v4_cadence_clear_room_coverage","Turn off")}</button>`:c}
        `:c}
        ${e.cleaningMode!=="vacuum"?o`<p class="subtle">${this.#e("v4_cadence_mop_requires_vacuum","Can't add a mop schedule until this room's cleaning mode is Vacuum.")}</p>`:c}
        ${n.mopEveryN&&e.cleaningMode==="vacuum"?o`<p class="subtle">${this.#e("v4_cadence_clear_mop_to_change_normal","Can't change the cleaning mode until the mop schedule is off.")}</p>`:c}
        <div class="plan-options" role="group" aria-label=${this.#e("v4_cadence_next_actions_named","Next clean options for {room}",{room:t})}>
          <label class="plan-option"><input type="checkbox" aria-label=${this.#e("v4_cadence_do_mop_next_named","Do vacuum and mop on the next clean for {room}",{room:t})} .checked=${n.doMopNext} ?disabled=${!n.mopEveryN} @change=${_=>this.#o(s,{doMopNext:V(_)})}><span class="plan-option-copy"><strong>${this.#e("v4_cadence_do_mop_next","Do vacuum and mop on the next clean")}</strong></span></label>
          <label class="plan-option"><input type="checkbox" aria-label=${this.#e("v4_cadence_do_coverage_next_named","Add a vacuum rotation on the next clean for {room}",{room:t})} .checked=${n.doCoverageNext} ?disabled=${!n.coverageEveryN||e.cleaningMode==="mop"} @change=${_=>this.#o(s,{doCoverageNext:V(_)})}><span class="plan-option-copy"><strong>${this.#e("v4_cadence_do_coverage_next","Add a vacuum rotation on the next clean")}</strong></span></label>
        </div>
        ${n.coverageEveryN?o`<p class="subtle">${this.#e("v4_cadence_coverage_verification_hint","A vacuum rotation counts only after the robot confirms the vacuum coverage and that the clean finished. If it can't confirm, the rotation stays due for the next clean.")}</p>`:c}
        <p class="subtle" aria-live="polite">${this.#h(n,d,e.cadenceReasons)}</p>
        ${a.id&&(n.mopEveryN||n.coverageEveryN||v||u)?o`
          <div class="toolbar">
            ${n.mopEveryN||v?o`<button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_reset_mop_cadence_button_named","Reset mopping progress for {room}",{room:t})}
              data-dialog-launcher="confirmResetCadence"
              ?disabled=${b}
              @click=${()=>this.#s({type:"request-room-cadence-reset",planId:a.id,roomId:e.roomId,mode:"mop"})}
            >${this.#e("v4_reset_mop_cadence_button","Reset mopping")}</button>`:c}
            ${n.coverageEveryN||u?o`<button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_reset_coverage_cadence_button_named","Reset vacuum rotation progress for {room}",{room:t})}
              data-dialog-launcher="confirmResetCadence"
              ?disabled=${b}
              @click=${()=>this.#s({type:"request-room-cadence-reset",planId:a.id,roomId:e.roomId,mode:"coverage"})}
            >${this.#e("v4_reset_coverage_cadence_button","Reset vacuum rotation")}</button>`:c}
          </div>
          <p class="subtle">${this.#e("v4_reset_cadence_hint","Reset is available for a saved plan while the robot is idle. Cleaning history is kept separately.")}</p>
        `:c}
      </details>
    `}#k(e){this.#s({type:"toggle-room",roomId:e})}#p(e,s){let t=this.state.planDraft.rooms.map((a,n)=>n===e?{...a,...s}:a);this.#s({type:"patch-plan-draft",patch:{rooms:t}})}#g(e,s){let t=e+s,a=[...this.state.planDraft.rooms];if(t<0||t>=a.length)return;let[n]=a.splice(e,1);n&&(a.splice(t,0,n),this.#s({type:"patch-plan-draft",patch:{rooms:a}}))}#_(){return this.#d(this.state.resources.plans,O`<${We}
      .state=${this.state}
      .localize=${this.localize}
    ></${We}>`)}#x(){let e=this.state.resources.plans,s=e.value,t=this.state.planDraft,a=t.rooms.map(i=>({room:i,label:s?.rooms.find(p=>p.roomId===i.roomId)?.name||"Room",selected:!0})),n=(s?.rooms||[]).filter(i=>!t.rooms.some(p=>p.roomId===i.roomId)).map(i=>({room:{roomId:i.roomId,cleaningMode:"vacuum",coverageSetting:"standard"},label:i.name,selected:!1})),d=[...a,...n],m=t.rooms.length>=100,h=new Set(t.rooms.map(i=>`${i.cleaningMode}:${i.coverageSetting}`)).size>1;return this.#d(e,o`
      <div class="stack">
        <label class="field ms-field">${this.#e("plan_name","Plan name")}
          <input
            maxlength="128"
            autocomplete="off"
            .value=${t.name}
            @input=${i=>this.#s({type:"patch-plan-draft",patch:{name:f(i)}})}
          >
        </label>
        <label class="field ms-field">${this.#e("plan_run_behavior","Cleaning order")}
          <select
            .value=${t.runBehavior}
            @change=${i=>this.#s({type:"patch-plan-draft",patch:{runBehavior:f(i)==="ordered"?"ordered":"intelligent"}})}
          >
            <option value="intelligent">${this.#e("plan_intelligent","Intelligent rotation")}</option>
            <option value="ordered">${this.#e("plan_ordered","Saved order")}</option>
          </select>
        </label>
        <h3 class="group-heading" id="plan-rooms-heading">${this.#e("v4_plan_rooms_heading","Rooms in this plan")}</h3>
        ${h?o`
          <p class="subtle plan-transition-hint">${this.#e("v4_plan_mixed_settings","Rooms with different cleaning settings may be cleaned in separate parts, and the robot may briefly touch the dock between parts.")}
            ${t.runBehavior==="ordered"?this.#e("v4_plan_group_settings","Placing rooms with matching settings together can reduce transitions."):this.#e("v4_plan_rotation_settings","Longest-waiting rooms first, checked again when you run the plan.")}
          </p>
        `:c}
        <div class="list" role="group" aria-labelledby="plan-rooms-heading">
          ${ze(d,({room:i})=>i.roomId,({room:i,label:p,selected:g})=>{let v=g?t.rooms.findIndex(u=>u.roomId===i.roomId):-1;return o`
              <div class="room plan-room ms-row ms-row--stack" data-selected=${String(g)}>
                <div class="room-choice">
                  <label class="plan-room-label">
                  <input type="checkbox" .checked=${g} ?disabled=${!g&&m} @change=${()=>this.#k(i.roomId)}>
                  <strong>${g?`${v+1}. `:""}${p}</strong>
                  </label>
                  ${g?o`
                    <span>
                      <button class="icon-button ms-btn ms-btn--icon" type="button" aria-label=${this.#e("move_room_up","Move {room} earlier",{room:p})} ?disabled=${v===0} @click=${u=>{u.preventDefault(),this.#g(v,-1)}}>${y(ye)}</button>
                      <button class="icon-button ms-btn ms-btn--icon" type="button" aria-label=${this.#e("move_room_down","Move {room} later",{room:p})} ?disabled=${v===t.rooms.length-1} @click=${u=>{u.preventDefault(),this.#g(v,1)}}>${y($e)}</button>
                    </span>
                  `:c}
                </div>
                ${g?o`
                  <div class="split room-settings">
                    <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
                      <select aria-label=${this.#e("v4_room_cleaning_system_named","Cleaning mode for {room}",{room:p})} .value=${i.cleaningMode} @change=${u=>this.#p(v,{cleaningMode:f(u)})}>${te.map(u=>o`<option value=${u} ?selected=${u===i.cleaningMode} ?disabled=${!!("cadence"in i&&i.cadence?.mopEveryN&&u!=="vacuum")}>${this.#r(u)}</option>`)}</select>
                    </label>
                    <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
                      <select aria-label=${this.#e("v4_room_vacuum_coverage_named","Vacuum coverage for {room}",{room:p})} ?disabled=${i.cleaningMode==="mop"} .value=${i.coverageSetting} @change=${u=>this.#p(v,{coverageSetting:f(u)})}>${K.map(u=>o`<option value=${u} ?selected=${u===i.coverageSetting}>${this.#n(u)}</option>`)}</select>
                    </label>
                  </div>
                  ${this.#i(i.cleaningMode)}
                  ${this.#w(i,v,p)}
                `:c}
              </div>
            `})}
        </div>
        ${m?o`<p class="subtle" role="status">${this.#e("v4_room_limit_reached","Up to {limit} rooms fit, so remove one to add another.",{limit:100})}</p>`:c}
        <h3 class="group-heading" id="completion-heading">${this.#e("v4_completion_options","When a run ends")}</h3>
        <div class="plan-options" role="group" aria-labelledby="completion-heading">
          <label class="plan-option">
            <input type="checkbox" .checked=${t.returnToBase} @change=${i=>this.#s({type:"patch-plan-draft",patch:{returnToBase:V(i)}})}>
            <span class="plan-option-copy">
              <strong>${this.#e("plan_return_to_base","Return to the dock when finished")}</strong>
              <small>${this.#e("plan_return_to_base_hint","After the last selected room, the robot returns to the dock.")}</small>
            </span>
          </label>
          <label class="plan-option">
            <input type="checkbox" .checked=${t.finishCurrentRoom} @change=${i=>this.#s({type:"patch-plan-draft",patch:{finishCurrentRoom:V(i)}})}>
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
              <input type="range" min="0" max="100" step="5" .value=${String(t.finishCurrentRoomThreshold)} aria-label=${this.#e("plan_threshold","Minimum room progress")} @input=${i=>this.#s({type:"patch-plan-draft",patch:{finishCurrentRoomThreshold:Number(f(i))}})}>
            </label>
          `:c}
        </div>
        <div class="toolbar">
          ${L(this.state,"confirmDeletePlan")?o`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_delete_plan_label","Delete plan")}
              data-dialog-launcher="confirmDeletePlan"
              @click=${()=>this.#s({type:"open-dialog",dialog:"confirmDeletePlan"})}
            >${this.#e("plan_delete","Delete")}</button>
          `:c}
        </div>
      </div>
    `)}#R(){let e=this.state.resources.areas;return o`
      <div class="stack">
        <p class="subtle">${this.state.draw.tool==="outline"?this.#e("v4_zone_coverage","Place points around the area. Shading shows where the robot cleans inside the outline; narrow edges may stay uncovered."):this.#e("v4_draw_floor_hint","Paint only on the mapped floor. Zooming and panning never change the area.")}</p>
        ${this.state.draw.tool!=="outline"?o`<p class="subtle">${this.#e("v4_keyboard_draw_help","Keyboard: focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>`:c}
        ${this.#d(e,o`
          <div class="group">
            <h3 class="group-heading" id="areas-heading">${this.#e("area_workspace_title","Custom areas")}</h3>
            <div class="list" role="group" aria-labelledby="areas-heading">
            <button class="list-button ms-row ms-row" type="button" @click=${()=>this.#s({type:"select-area",areaId:null})}>${this.#e("area_new","New area")}</button>
            ${(e.value?.areas||[]).map(s=>o`
              <button class="list-button ms-row ms-row" type="button" @click=${()=>{this.#s({type:"select-area",areaId:s.id,workflow:"areaReview"})}}>
                <span>${s.name}</span>
                <small>${s.status==="current"?this.#e("area_workspace_ready","Ready"):this.#e("v4_review","Review")}</small>
              </button>
            `)}
            </div>
          </div>
        `)}
      </div>
    `}#E(){let e=this.state.areaDraft,s=e.canRebind||e.status==="review",t=!s&&(e.status==="stale"||e.status==="unknown");return o`
      <div class="stack">
        ${s?o`<div class="notice" data-tone="warning" role="status">${this.#e("area_review_required","The map changed since you saved this area, so save it again or redraw it.")}</div>`:c}
        ${t?o`<div class="problem" role="alert">${this.#e("area_redraw_required","Home Assistant can't use this area as it was saved, so redraw it.")}</div>`:c}
        <label class="field ms-field">${this.#e("area_name","Area name")}
          <input maxlength="128" autocomplete="off" .value=${e.name} @input=${a=>this.#s({type:"patch-area-draft",patch:{name:f(a)}})}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#e("v4_cleaning_system","Cleaning mode")}
            <select .value=${e.cleaningMode} @change=${a=>this.#s({type:"patch-area-draft",patch:{cleaningMode:f(a)}})}>${te.map(a=>o`<option value=${a} ?selected=${a===e.cleaningMode}>${this.#r(a)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#e("vacuum_coverage","Vacuum coverage")}
            <select ?disabled=${e.cleaningMode==="mop"} .value=${e.coverageSetting} @change=${a=>this.#s({type:"patch-area-draft",patch:{coverageSetting:f(a)}})}>${K.map(a=>o`<option value=${a} ?selected=${a===e.coverageSetting}>${this.#n(a)}</option>`)}</select>
          </label>
        </div>
        ${this.#i(e.cleaningMode)}
        <div class="toolbar">
          <button class="ms-btn ms-btn--secondary" type="button" @click=${()=>this.#s({type:"open-workflow",workflow:"draw"})}>${this.#e("v4_edit_outline","Redraw")}</button>
          ${L(this.state,"confirmDeleteArea")?o`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#e("v4_delete_area_label","Delete area")}
              data-dialog-launcher="confirmDeleteArea"
              @click=${()=>this.#s({type:"open-dialog",dialog:"confirmDeleteArea"})}
            >${this.#e("area_delete","Delete")}</button>
          `:c}
        </div>
      </div>
    `}#S(){let e=this.state.resources.history,s=e.value,t=s?.floors.find(i=>i.id===this.state.selection.floorId)||s?.floors.find(i=>i.active)||s?.floors[0],a=t?.snapshots||[],n=this.state.selection.historyId?Math.max(0,a.findIndex(i=>i.id===this.state.selection.historyId)):a.length,d=t?.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_return_current_floor","Return to current floor"),m=this._historyPreviewPosition??n,h=a[m];return this.#d(e,o`
      <div class="stack">
        ${(s?.floors.length||0)>1?o`
          <div class="group">
            <h3 class="group-heading" id="floors-heading">${this.#e("v4_mapped_floors","Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(s?.floors||[]).map((i,p)=>o`
              <button
                class="floor ms-row ms-row"
                type="button"
                aria-current=${String(i.id===t?.id)}
                @click=${()=>this.#s({type:"set-floor",floorId:i.id})}
              >
                <span>${i.label||(i.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:i.ordinal??p}))}</span>
                <small>${i.active?this.#e("map_timeline_live_action","Live"):this.#e("v4_read_only","Read only")}</small>
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
              max=${String(a.length)}
              step="1"
              .value=${String(m)}
              aria-valuetext=${h?Y(h.createdAt,this.dates):d}
              ?disabled=${!a.length}
              @input=${i=>{this._historyPreviewPosition=Number(f(i))}}
              @change=${i=>{let p=Number(f(i));this._historyPreviewPosition=null,this.#s({type:"set-history",historyId:p===a.length?null:a[p]?.id||null})}}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId&&!!t?.active)} @click=${()=>this.#s({type:"set-history",historyId:null})}><span>${d}</span><small>${this.#e("v4_current","Current")}</small></button>
            ${a.map((i,p)=>o`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(i.id===this.state.selection.historyId)} @click=${()=>this.#s({type:"set-history",historyId:i.id})}>
                <span>${Y(i.createdAt,this.dates)}</span><small>${this.#e("v4_history_position","{position} of {count}",{position:p+1,count:a.length})}</small>
              </button>
            `)}
          </div>
        </div>
        <p class="subtle">${this.#e("v4_history_privacy","Saved maps show one floor each and never show where the robot is now.")}</p>
      </div>
    `)}#C(){return this.#t.request(),this.#t.status!=="ready"?Ee(this.#t.status,this.localize,this.retry):o`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}
    ></matic-map-diagnostics-v4>`}render(){return o`<fieldset class="workflow-fields" ?disabled=${this.state.command!=="idle"&&this.state.command!=="failed"}>${this.#P()}</fieldset>`}#P(){switch(this.state.workflow){case"rooms":return this.#f();case"plans":return this.#_();case"plan":return this.state.planView==="run"?this.#_():this.#x();case"draw":return this.#R();case"areaReview":return this.#E();case"history":return this.#S();case"support":return this.#C();case"none":return c}}};customElements.get(D)||customElements.define(D,se);export{se as MaticMapWorkflowV4,Oe as actionReason,Qe as confirmDialog,Fe as dialogCopy,Ge as dialogLauncher,Ke as focusPlanTarget,je as planCancel,He as planTitle,Be as planTools};
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
