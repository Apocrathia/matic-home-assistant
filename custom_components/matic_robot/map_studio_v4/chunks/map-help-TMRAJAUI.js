import{a as b,g as y,h as _,i as $}from"./chunk-5UMAC7HE.js";import{h as w}from"./chunk-LZVS2VT2.js";import{qa as d,ua as v}from"./chunk-QX674AG7.js";var c=(t,o)=>{let e=t._$AN;if(e===void 0)return!1;for(let r of e)r._$AO?.(o,!1),c(r,o);return!0},h=t=>{let o,e;do{if((o=t._$AM)===void 0)break;e=o._$AN,e.delete(t),t=o}while(e?.size===0)},k=t=>{for(let o;o=t._$AM;t=o){let e=o._$AN;if(e===void 0)o._$AN=e=new Set;else if(e.has(t))break;e.add(t),C(o)}};function D(t){this._$AN!==void 0?(h(this),this._$AM=t,k(this)):this._$AM=t}function z(t,o=!1,e=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(o)if(Array.isArray(r))for(let a=e;a<r.length;a++)c(r[a],!1),h(r[a]);else r!=null&&(c(r,!1),h(r));else c(this,t)}var C=t=>{t.type==y.CHILD&&(t._$AP??=z,t._$AQ??=D)},m=class extends ${constructor(){super(...arguments),this._$AN=void 0}_$AT(o,e,r){super._$AT(o,e,r),k(this),this.isConnected=o._$AU}_$AO(o,e=!0){o!==this.isConnected&&(this.isConnected=o,o?this.reconnected?.():this.disconnected?.()),e&&(c(this,o),h(this))}setValue(o){if(b(this._$Ct))this._$Ct._$AI(o,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=o,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var u=new WeakMap,A=_(class extends m{render(t){return v}update(t,[o]){let e=o!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=o,this.ht=t.options?.host,this.rt(this.ct=t.element)),v}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){let o=this.ht??globalThis,e=u.get(o);e===void 0&&(e=new WeakMap,u.set(o,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?u.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var E=t=>{t instanceof HTMLElement&&queueMicrotask(()=>{t.isConnected&&t.focus()})},K=(t,o,e,r)=>{let i=null,a=s=>{i=o()?{x:s.clientX,y:s.clientY}:null},n=s=>{if(!o()||s.detail===0)return;let l=i;if(i=null,l&&Math.hypot(s.clientX-l.x,s.clientY-l.y)>6)return;let p=s.composedPath(),f=e();f&&p.includes(f)||p.some(g=>g instanceof HTMLElement&&g.id==="navigation-help")||r()};t.addController({hostConnected(){t.ownerDocument.addEventListener("pointerdown",a,!0),t.ownerDocument.addEventListener("click",n)},hostDisconnected(){t.ownerDocument.removeEventListener("pointerdown",a,!0),t.ownerDocument.removeEventListener("click",n),i=null}})},x=(t,o,e)=>t==="outline"?o?e("v4_touch_points_help","Tap to add points \xB7 two fingers to move or zoom"):e("v4_mouse_points_help","Click to add points \xB7 right-drag or Space-drag to move \xB7 wheel to zoom"):t==="erase"?o?e("v4_touch_erase_help","Drag to erase \xB7 two fingers to move or zoom"):e("v4_mouse_erase_help","Drag to erase \xB7 right-drag or Space-drag to move \xB7 wheel to zoom"):t==="pan"?o?e("v4_touch_draw_pan_help","Drag to move the map \xB7 two fingers to move or zoom"):e("v4_mouse_top_help","Drag to move the map \xB7 wheel to zoom"):o?e("v4_touch_draw_help","Drag to paint \xB7 two fingers to move or zoom"):e("v4_mouse_draw_help","Drag to paint \xB7 right-drag or Space-drag to move \xB7 wheel to zoom"),O=({state:t,coarse:o,t:e,close:r})=>{let i=t.workflow==="draw",a=w(t)==="top",n=e("v4_how_to_move","How to move the map"),s=o?[[e("v4_touch","Touch"),i?x(t.draw.tool,!0,e):e("v4_touch_help","Drag to move the map \xB7 pinch to zoom \xB7 twist two fingers to rotate")]]:[[e("v4_trackpad","Trackpad"),e("v4_trackpad_help","Scroll to move the map \xB7 pinch to zoom \xB7 twist to rotate")],[e("v4_mouse","Mouse"),i?x(t.draw.tool,!1,e):a?e("v4_mouse_top_help","Drag to move the map \xB7 wheel to zoom"):e("v4_mouse_help","Drag to move the map \xB7 right-drag or Shift-drag to rotate \xB7 wheel to zoom")],[e("v4_keyboard","Keyboard"),i?t.draw.tool==="outline"?e("v4_zone_keyboard_help","Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag."):t.draw.tool==="pan"?e("v4_keyboard_draw_pan_help","Arrow keys to move \xB7 +/\u2212 to zoom \xB7 0 to fit. D selects Paint; E selects Erase."):e("v4_keyboard_draw_help","Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase."):a?e("v4_keyboard_top_help","WASD or arrows to move \xB7 +/\u2212 to zoom \xB7 0 to fit"):e("v4_keyboard_help","WASD to move \xB7 Q/E or arrows to orbit \xB7 +/\u2212 to zoom \xB7 0 to fit")]];return d`
<style>
.map-rail { --help-top: var(--row); --help-bottom: 116px; }
.map-rail:has(.appearance-switch) { --help-top: calc(2 * var(--row)); }
.map-root:has(.selection-chip) .map-rail { --help-bottom: calc(116px + 4rem); }
:host([narrow]) .map-rail { --help-bottom: calc(var(--map-sheet-offset, 0px) + 44px + var(--ms-space-2)); }
.map-rail:has(.map-chip) { --help-top: calc(2 * var(--row)); }
.map-rail:has(.map-chip):has(.appearance-switch) { --help-top: calc(3 * var(--row)); }
.navigation-help { position: absolute; inset-block-start: var(--help-top); inset-inline-end: 0; max-block-size: calc(100% - var(--help-top) - var(--help-bottom)); overflow: auto; box-sizing: border-box; inline-size: 22rem; max-inline-size: 100%; padding: 0.8rem 0.9rem; font-size: 0.74rem; line-height: 1.45; }
.navigation-help header { display: flex; align-items: center; justify-content: space-between; gap: var(--ms-space-2); margin-block-end: 0.5rem; }
.navigation-help h2 { margin: 0; font-size: var(--ms-t-sm); font-weight: var(--ms-w-bold); }
.navigation-help dl { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.35rem 0.65rem; margin: 0; }
.navigation-help dt { font-weight: 750; }
.navigation-help dd { margin: 0; color: var(--ms-text-quiet); }
@media (any-pointer: coarse) { .navigation-help .ms-btn--sm { min-inline-size: var(--ms-control); min-block-size: var(--ms-control); } }
</style>
<div id="navigation-help" class="navigation-help ms-surface ms-surface--floating" role="dialog" aria-modal="false" aria-label=${n}>
<header>
<h2>${n}</h2>
<button ${A(E)} class="ms-btn ms-btn--sm" type="button" @click=${r}>${e("v4_close","Close")}</button>
</header>
<dl>${s.map(([l,p])=>d`<dt>${l}</dt><dd>${p}</dd>`)}</dl>
</div>
`};export{O as renderMapHelp,K as watchHelpDismissal};
/*! Bundled license information:

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
