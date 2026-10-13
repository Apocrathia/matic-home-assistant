import{A as b,B as v,R as g,T as f,X as m,_ as x}from"./chunk-6FC35FD6.js";var k=(h,t)=>{let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let i=t[n],a=t[o];i.y>h.y!=a.y>h.y&&h.x<(a.x-i.x)*(h.y-i.y)/(a.y-i.y)+i.x&&(e=!e)}return e},P=({edgeDistance:h,validOutline:t},e,n)=>{if(!e.closed||!t(e))return[];let{points:o}=e,i=Math.min(...o.map(s=>s.x)),a=Math.max(...o.map(s=>s.x)),l=Math.min(...o.map(s=>s.y)),r=Math.max(...o.map(s=>s.y)),p=[];for(let s=0;s<32;s++)for(let c=0;c<32;c++){let u={x:Math.round((i+(c+.5)*(a-i)/32)*1e4)/1e4,y:Math.round((l+(s+.5)*(r-l)/32)*1e4)/1e4};if(!k(u,o)||!n(u))continue;let $=Math.min(...o.map((w,_)=>h(u,w,o[(_+1)%o.length]))),y=Math.floor(Math.min(2.5,$-1e-4)*1e4)/1e4;y>=.05&&p.push({...u,radius:y})}p.sort((s,c)=>c.radius-s.radius);let d=[];for(let s of p){if(d.length>=512)break;d.some(c=>Math.hypot(c.x-s.x,c.y-s.y)+s.radius*.5<=c.radius)||d.push(s)}return d},M=g`
    .zone-overlay { position: absolute; inset: 0; z-index: 4; pointer-events: none; overflow: hidden; }
    .zone-overlay svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
    .zone-overlay path { stroke: var(--ms-resolved-indicator, var(--ms-accent)); stroke-width: 2; fill-opacity: .08; }
    .zone-overlay path.invalid { stroke: var(--error-color, #b3261e); }
    .zone-point { position: absolute; translate: -50% -50%; width: 44px; height: 44px; border: 0; border-radius: 50%; background: transparent; color: var(--ms-accent); pointer-events: auto; touch-action: none; cursor: grab; font: 700 12px system-ui; isolation: isolate; }
    .zone-point::before { content: ""; position: absolute; inset: 10px; z-index: -1; border-radius: 50%; background: var(--ms-surface-card); border: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); box-shadow: 0 1px 4px #0008; }
    .zone-point[data-selected="true"] { color: var(--ms-on-accent); }
    .zone-point[data-selected="true"]::before { background: var(--ms-accent); border-color: var(--ms-surface-card); }
    .zone-point:focus-visible { outline: 3px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: 0; }
    .zone-midpoint { font-size: 18px; }
    .zone-midpoint::before { inset: 13px; background: var(--ms-surface-card); }
    .zone-midpoint { color: var(--ms-accent); }
    .zone-help { position: absolute; inset: auto auto 88px 50%; translate: -50% 0; width: max-content; max-width: calc(100% - 24px); display: grid; justify-items: center; gap: 6px; font-size: 12px; pointer-events: none; }
    .zone-point-actions, .zone-guidance { display: flex; align-items: center; gap: 4px; max-width: 100%; padding: 4px; border-radius: 14px; pointer-events: auto; }
    .zone-selection { padding-inline: 8px; color: var(--ms-text-quiet); white-space: nowrap; font-weight: 650; }
    .zone-point-actions .ms-btn { white-space: nowrap; padding-inline: 10px; border-radius: 10px; font-size: 12px; }
    .zone-point-actions .ms-btn + .ms-btn { border-inline-start: 1px solid var(--ms-line); }
    .zone-guidance { padding: 6px 12px; gap: 8px; color: var(--ms-text-quiet); line-height: 1.4; }
    .zone-guidance .ms-btn { flex-shrink: 0; }
    .zone-feedback { max-width: 100%; padding: 8px 12px; border-radius: 12px; color: var(--ms-resolved-danger-text, var(--ms-danger)); pointer-events: auto; }
    .zone-feedback[hidden] { display: none; }
    .map-root[data-narrow="true"] .zone-help { bottom: 12px; }
`,z=class{constructor(t){this.styles=M;this.#n=null;this.#a="";this.#i=null;this.#s=t}#s;#t;#o;#l;#n;#a;#i;attach(t,e,n){this.#t=t,this.#o=e,this.#l=n}#e(t,e,n){return x(this.#t.localize,t,e,n)}#p(t){this.#t.updateComplete.then(()=>{let e=this.#t.renderRoot;(e.querySelector(`[data-zone-index="${t}"]`)??e.querySelector(".map-root"))?.focus({preventScroll:!0})})}#c(t=this.#t.state){return b(t,"outline")!==null}#r(t,e){let n=e??b(this.#t.state,"outline");if(!v(this.#t.state,n))return;if(!this.#s.validOutline(t)){this.#a=this.#e("v4_zone_invalid","Keep the outline from crossing itself."),this.#t.requestUpdate();return}let o=P(this.#s,t,i=>this.#o()?.containsMapPoint(i)??!1);this.#a=t.closed&&!o.length?this.#e("v4_zone_empty","Make the outline wider and keep it on the mapped floor."):"",this.#l({type:"set-draft-circles",circles:o,outline:t,coordinateEdit:n})}addPoint(t,e){let n=e??b(this.#t.state,"outline");if(!v(this.#t.state,n)||n.tool!=="outline"||!this.#o()?.containsMapPoint(t))return;let o=this.#t.state.draw.outline??{points:[],closed:!1};if(o.points.length>=64)return;let i=[...o.points,t];this.#r({points:i,closed:i.length>=3},n)}#d(t){let e=this.#t.state.draw.outline;if(!e)return;this.#i=null;let n=e.points.filter((o,i)=>i!==t);this.#r({points:n,closed:e.closed&&n.length>=3}),this.#p(Math.min(t,n.length-1))}#u(t){let e=this.#t.state.draw.outline;if(!e||e.points.length>=64)return;let n=e.points[t],o=e.points[(t+1)%e.points.length];if(!n||!o||!e.closed&&t===e.points.length-1)return;let i={x:(n.x+o.x)/2,y:(n.y+o.y)/2};this.#r({...e,points:[...e.points.slice(0,t+1),i,...e.points.slice(t+1)]}),this.#p(t+1)}#h(t,e){if(t.button!==0||this.#n||t.pointerType==="touch"&&!t.isPrimary)return;let n=b(this.#t.state,"outline");if(!n)return;this.#i=e,this.#t.requestUpdate();let o=this.#t.state.draw.outline;if(!o)return;t.stopPropagation(),t.preventDefault();let i=t.currentTarget;i.focus({preventScroll:!0}),i.setPointerCapture(t.pointerId),this.#n={index:e,pointer:t.pointerId,baseline:o,preview:o,target:i,capture:n}}observeState(t){this.#n&&!v(t,this.#n.capture)&&this.cancel()}#m(t){let e=this.#n;if(!e||e.pointer!==t.pointerId)return;if(t.stopPropagation(),t.preventDefault(),!v(this.#t.state,e.capture)){this.cancel();return}let n=this.#o()?.screenToMap(t.clientX,t.clientY);!n||!this.#o()?.containsMapPoint(n)||(e.preview={...e.baseline,points:e.baseline.points.map((o,i)=>i===e.index?n:o)},this.#t.requestUpdate())}#f(t){let e=this.#n;!e||e.pointer!==t.pointerId||(t.stopPropagation(),t.preventDefault(),this.#n=null,e.target.releasePointerCapture(t.pointerId),e.preview!==e.baseline&&this.#r(e.preview,e.capture),this.#t.requestUpdate())}cancel(){let t=this.#n;t&&(this.#n=null,t.target.hasPointerCapture(t.pointer)&&t.target.releasePointerCapture(t.pointer),this.#t.requestUpdate())}#b(t,e){if(t.ctrlKey||t.altKey||t.metaKey)return;if(t.key==="Escape"){t.stopPropagation(),this.cancel();return}let n=this.#t.state.draw.outline;if(!n||!this.#c())return;if(t.key==="Delete"||t.key==="Backspace"){t.preventDefault(),t.stopPropagation(),this.#d(e);return}let o=t.shiftKey?.1:.02,i=t.key==="ArrowLeft"?-o:t.key==="ArrowRight"?o:0,a=t.key==="ArrowUp"?-o:t.key==="ArrowDown"?o:0;if(!i&&!a)return;t.preventDefault(),t.stopPropagation();let l=n.points[e],r=this.#o()?.offsetMapPoint(l,i,a);r&&this.#o()?.containsMapPoint(r)&&this.#r({...n,points:n.points.map((p,d)=>d===e?r:p)})}render(){if(!this.#c())return m;let t=this.#n?.preview??this.#t.state.draw.outline,e=t?.points??[],n=e.map(l=>this.#o()?.mapToScreen(l)),o=n.map((l,r)=>l?`${r?"L":"M"}${l.x},${l.y}`:"").join(" "),i=!t||this.#s.validOutline(t),a=this.#i!==null&&this.#i<e.length?this.#i:null;return f`
      <div class="zone-overlay">
        <svg aria-hidden="true"><path d=${o+(t?.closed?" Z":"")} class=${i?"":"invalid"} fill=${t?.closed?"var(--ms-accent)":"none"}></path></svg>
        ${n.map((l,r)=>l?f`
          <button class="zone-point" type="button" data-zone-index=${r} data-selected=${String(this.#i===r)} data-map-control style=${`left:${l.x}px;top:${l.y}px`}
            aria-label=${this.#e("v4_zone_point_number","Point {number}",{number:r+1})} aria-describedby="zone-handle-help"
            title=${this.#e("v4_zone_point_help","Drag to move. Arrow keys adjust; Delete removes.")}
            @pointerdown=${p=>this.#h(p,r)} @pointermove=${p=>this.#m(p)}
            @pointerup=${p=>this.#f(p)} @pointercancel=${()=>this.cancel()}
            @lostpointercapture=${()=>{this.#n&&this.cancel()}}
            @focus=${()=>{this.#i=r,this.#t.requestUpdate()}}
            @keydown=${p=>this.#b(p,r)}
          >${r+1}</button>
        `:m)}
        ${e.map((l,r)=>{let p=e[(r+1)%e.length];if(!p||!t?.closed&&r===e.length-1||e.length>=64)return m;let d={x:(l.x+p.x)/2,y:(l.y+p.y)/2},s=this.#o()?.mapToScreen(d),c=n[r],u=n[(r+1)%n.length];return s&&c&&u&&Math.hypot(c.x-u.x,c.y-u.y)>=100?f`<button class="zone-point zone-midpoint" type="button" data-map-control
            style=${`left:${s.x}px;top:${s.y}px`} aria-label=${this.#e("v4_zone_add_point_after","Add point after {number}",{number:r+1})}
            @click=${()=>this.#u(r)}>+</button>`:m})}
        <div class="zone-help" data-map-control>
          <span id="zone-handle-help" class="sr-only">${this.#e("v4_zone_point_help","Drag to move. Arrow keys adjust; Delete removes.")}</span>
          ${a!==null?f`
            <div class="zone-point-actions ms-surface" role="group" aria-label=${this.#e("v4_zone_point_number","Point {number}",{number:a+1})}>
              <span class="zone-selection">${this.#e("v4_zone_point_number","Point {number}",{number:a+1})}</span>
              <button class="ms-btn" type="button" ?disabled=${e.length>=64||!t?.closed&&a===e.length-1} @click=${()=>this.#u(a)}>${this.#e("v4_zone_insert_point","Insert point")}</button>
              <button class="ms-btn" type="button" aria-label=${this.#e("v4_zone_delete_point_number","Delete point {number}",{number:a+1})} @click=${()=>this.#d(a)}>${this.#e("v4_zone_delete_point","Delete point")}</button>
            </div>`:m}
          ${a===null||!t?.closed?f`
            <div class="zone-guidance ms-surface">
              <span>${t?.closed?this.#e("v4_zone_edit_help","Tap to add points. Drag points to reshape."):this.#e("v4_zone_create_help","Place points around the area. The edges join automatically.")}</span>
            </div>`:m}
          <span class="zone-feedback ms-surface" role="status" ?hidden=${!this.#a}>${this.#a}</span>
        </div>
      </div>
    `}};export{z as OutlineEditor,k as insideOutline,P as outlineCircles,M as zoneStyles};
