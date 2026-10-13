import{C as qe,P as S,a as Se,b as Ee,c as Re,l as Ae,m as Te,n as Le,o as Be,p as $e,q as Ie,r as ze,s as Fe,t as De,u as Ne,v as Oe,w as Ue,x as He}from"./chunk-EN2TE5SC.js";import{A as K,B as A,L as xe,N as Ce,O as v,P as ke,Q as Me,S as g,U as Pe,V as $,c as ie,d as ae,n as _e,w as se,y as Y,z as le}from"./chunk-3DL3AR46.js";var Ve=Symbol.for(""),_t=r=>{if(r?.r===Ve)return r?._$litStatic$},rn=r=>({_$litStatic$:r,r:Ve});var Xe=new Map,ce=r=>(e,...n)=>{let t=n.length,i,o,a=[],s=[],l,c=0,d=!1;for(;c<t;){for(l=e[c];c<t&&(o=n[c],(i=_t(o))!==void 0);)l+=i+e[++c],d=!0;c!==t&&s.push(o),a.push(l),c++}if(c===t&&a.push(e[t]),d){let p=a.join("$$lit$$");(e=Xe.get(p))===void 0&&(a.raw=a,Xe.set(p,e=a)),n=s}return r(e,...n)},an=ce(v),sn=ce(ke),ln=ce(Me);var Ge=import.meta.url.match(/\/matic_robot\/[^/]+-([a-f0-9]{12})\/map-studio-v4(?:\/|$)/u)?.[1]??"dev",I=Ge==="dev"?"":`-${Ge}`,de=`matic-map-canvas-v4${I}`,un=`matic-precision-controls-v4${I}`,pn=`matic-map-workflow-v4${I}`,mn=`matic-map-plan-tools-v4${I}`,fn=`matic-map-plan-views-v4${I}`,vn=`matic-map-shell-v4${I}`,yn=`matic-map-panel-v0-4-0${I}`;var xt=2e4,We=class{constructor(e,n){this.status="idle";this.#o=e,this.#t=n,e.addController(this)}#o;#t;#n;#r;request(){this.status==="idle"&&this.#s()}hostConnected(){this.status==="loading"&&this.#v()}hostDisconnected(){clearTimeout(this.#r)}#v(){this.#r=setTimeout(()=>this.#n?.(),xt)}async#s(){this.status="loading",this.#v();try{this.value=await Promise.race([this.#t(),new Promise((e,n)=>{this.#n=n})]),this.status="ready"}catch{this.status="failed"}clearTimeout(this.#r),this.#o.requestUpdate()}},he="matic-map-resume",Ct=3e4,_n=r=>{try{sessionStorage.setItem(he,JSON.stringify({workflow:r,at:Date.now()}))}catch{}let e=history.state?.maticMapLayer?.depth;if(!e){location.reload();return}addEventListener("popstate",n=>{n.stopImmediatePropagation(),location.reload()},{capture:!0,once:!0}),history.go(-e)},xn=()=>{try{let r=sessionStorage.getItem(he);sessionStorage.removeItem(he);let{workflow:e,at:n}=JSON.parse(r??"null")??{},t=Date.now()-n;return typeof e=="string"&&t>=0&&t<=Ct?e:null}catch{return null}},Cn=(r,e,n)=>r==="ready"?g:r==="failed"?v`<div class="problem" role="alert"><p>${$(e,"v4_workflow_load_failed","The cleaning tools didn't load. Reload the page to try again.")}</p><button class="ms-btn ms-btn--secondary" type="button" data-dialog-launcher="discardDraft" @click=${n}>${$(e,"v4_retry","Try again")}</button></div>`:v`<p class="loading" role="status">${$(e,"v4_workflow_loading","Loading\u2026")}</p>`;var kt=["outline","paint","erase","pan"],Ye=(r,e,n)=>{let{draw:t}=r,i=`${t.brushMeters.toFixed(2)} m`;return v`
    <div
      class=${`draw-tools draw-tools--${n} ms-segment`}
      data-zone=${String(t.tool==="outline")}
      role="toolbar"
      aria-label=${e.t("v4_draw_tools","Draw area tools")}
      data-map-control
    >
      ${kt.map(o=>v`
        <button
          class="ms-btn"
          type="button"
          aria-pressed=${String(t.tool===o)}
          data-tool=${o}
          @click=${()=>e.intent({type:"set-draw-tool",tool:o})}
        >${S(o==="outline"?qe:o==="paint"?Ne:o==="erase"?Ue:He)}<span class="ms-btn__label">${o==="outline"?e.t("v4_zone_tool","Points"):o==="paint"?e.t("area_paint","Paint"):o==="erase"?e.t("area_erase","Erase"):e.t("move_map","Move map")}</span></button>
      `)}
      <button
        class="ms-btn"
        type="button"
        ?disabled=${t.strokeCount===0}
        @click=${()=>e.intent({type:"undo-draft"})}
      >${S(Fe)}<span class="ms-btn__label">${e.t("undo","Undo")}</span></button>
      <button
        class="ms-btn"
        type="button"
        ?disabled=${t.redo.length===0}
        @click=${()=>e.intent({type:"redo-draft"})}
      >${S(De)}<span class="ms-btn__label">${e.t("redo","Redo")}</span></button>
      ${t.tool!=="outline"?v`<button
        class="ms-btn draw-brush"
        type="button"
        aria-label=${e.t("v4_brush_button","Brush width, {brush}. Opens brush settings.",{brush:i})}
        aria-expanded=${String(r.precisionOpen)}
        aria-haspopup="dialog"
        @click=${e.openBrush}
      >${S(Oe)}<span class="ms-btn__label">${e.t("v4_brush","{brush}",{brush:i})}</span></button>`:g}
    </div>
  `};var Mt=r=>r.matches(":disabled, [aria-disabled='true']"),X=class{#o;#t;#n=null;#r=null;constructor(e,n){this.#o=e,this.#t=n,e.addController(this)}hostConnected(){this.#o.addEventListener("focusin",this.#c)}hostDisconnected(){this.#o.removeEventListener("focusin",this.#c),this.#n?.removeEventListener("keydown",this.#p),this.#n=null,this.#r=null}hostUpdated(){let e=this.#t.container();e!==this.#n&&(this.#n?.removeEventListener("keydown",this.#p),e?.addEventListener("keydown",this.#p),this.#n=e),this.#s()}#v(){let e=this.#n;return e?[...e.querySelectorAll(this.#t.items)].filter(n=>!Mt(n)):[]}#s(){let e=this.#v(),n=(this.#r&&e.includes(this.#r)?this.#r:null)??e.find(i=>i.matches("[aria-pressed='true'], [aria-checked='true']"))??e[0]??null;this.#r=n;let t=this.#n?.querySelectorAll(this.#t.items)??[];for(let i of t)i.tabIndex=i===n?0:-1}#c=e=>{let n=e.composedPath()[0];!(n instanceof HTMLElement)||!this.#n?.contains(n)||n.matches(this.#t.items)&&(this.#r=n,this.#s())};#p=e=>{if(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;let n=this.#t.orientation??"horizontal",t=n!=="vertical",i=n!=="horizontal",o=this.#v();if(!o.length)return;let a=e.composedPath()[0],s=Math.max(0,o.findIndex(p=>p===this.#r||a instanceof Node&&p.contains(a))),l,c=this.#n&&getComputedStyle(this.#n).direction==="rtl"?-1:1;switch(e.key){case"ArrowLeft":if(!t)return;l=s-c;break;case"ArrowRight":if(!t)return;l=s+c;break;case"ArrowUp":if(!i)return;l=s-1;break;case"ArrowDown":if(!i)return;l=s+1;break;case"Home":l=0;break;case"End":l=o.length-1;break;default:return}e.preventDefault();let d=o[(l+o.length)%o.length];d&&(this.#r=d,this.#s(),d.focus())}};var ue={accent:["var(--ms-resolved-indicator, var(--ms-accent))","Highlight",[6,120,206]],onAccent:["var(--ms-on-accent)","HighlightText",[255,255,255]],text:["var(--ms-text)","CanvasText",[38,50,56]],quiet:["var(--ms-text-quiet)","GrayText",[75,92,105]],plate:["var(--ms-surface-card)","Canvas",[250,252,253]],roomFill:["var(--ms-surface-sunken)","Canvas",[231,238,242]]},M=(r,e)=>`rgba(${r[0]},${r[1]},${r[2]},${e})`,Pt=(r,e)=>{let n=document.createElement("span"),t=document.createElement("canvas");t.width=1,t.height=1;let i=t.getContext("2d",{colorSpace:"srgb",willReadFrequently:!0});n.style.display="none",r.append(n);let o=a=>{if(!i)return null;n.style.backgroundColor=a,i.clearRect(0,0,1,1),i.fillStyle="transparent",i.fillStyle=getComputedStyle(n).backgroundColor,i.fillRect(0,0,1,1);let[s=0,l=0,c=0,d=0]=i.getImageData(0,0,1,1).data;return d?[s,l,c,d]:null};try{return Object.fromEntries(Object.entries(e).map(([a,s])=>[a,o(s)]))}finally{n.remove()}},Ke=([r,e,n])=>[r,e,n],Rn=r=>r?.[3]===255?Ke(r):null,Ze=r=>{let e=window.matchMedia?.("(forced-colors: active)").matches??!1,n=Object.keys(ue),t=Pt(r,Object.fromEntries(n.map(i=>{let[o,a]=ue[i];return[i,e?a:o]})));return{...Object.fromEntries(n.map(i=>[i,t[i]?Ke(t[i]):ue[i][2]])),forced:e}},je=r=>{let e=new MutationObserver(r);e.observe(document.documentElement,{attributes:!0,attributeFilter:["style","class"]});let n=["(prefers-color-scheme: dark)","(forced-colors: active)"].map(t=>window.matchMedia(t));for(let t of n)t.addEventListener("change",r);return()=>{e.disconnect();for(let t of n)t.removeEventListener("change",r)}},pe=r=>{let e=r/255;return e<=.04045?e/12.92:((e+.055)/1.055)**2.4},Z=([r,e,n])=>.2126*pe(r)+.7152*pe(e)+.0722*pe(n),D=(r,e)=>{let[n,t]=[Z(r),Z(e)];return(Math.max(n,t)+.05)/(Math.min(n,t)+.05)},z=[0,0,0],F=[255,255,255],me=(r,e,n)=>{for(let t=100;t>=50;t-=5){let i=r.map(o=>Math.round((o*t+e*(100-t))/100));if(n(i))return i}return null},An=(r,e)=>{let n=me(r,Z(e)<Z(r)?255:0,t=>D(t,e)>=4.5);return n?[n,e]:[r,D(r,z)>D(r,F)?z:F]},Tn=(r,e,n)=>{let t=s=>n.every(l=>D(s,l)>=e),i=s=>Math.min(...n.map(l=>D(s,l))),[o,a]=D(n[0],z)>D(n[0],F)?[z,F]:[F,z];return me(r,o[0],t)??me(r,a[0],t)??(i(z)>=i(F)?z:F)};var Je=(r,e)=>Math.hypot(r.x-e.x,r.y-e.y),Qe=(r,e)=>({x:(r.x+e.x)/2,y:(r.y+e.y)/2}),et=(r,e)=>Math.atan2(e.y-r.y,e.x-r.x),St=r=>{let e=r;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},N=(r,e,n)=>Math.max(e,Math.min(n,r)),tt=r=>r.map(e=>({...e})),Et="button, input, select, textarea, a, [contenteditable='true'], [role='button'], [role='menuitem'], [data-map-control]",L=r=>r.composedPath().some(e=>e instanceof Element&&e.matches(Et)),nt=r=>r.composedPath().some(e=>e instanceof Element&&e.matches("select")),j=class{#o;#t;#n;#r=new Map;#v=!1;#s="idle";#c=[];#p=null;#h=0;#e=null;#N=0;#y=null;#w=null;#B=null;#u=0;#A=null;#C=!1;#l=null;#d=null;#a=!1;constructor(e,n,t){this.#o=e,this.#t=n,this.#n=t,e.addEventListener("pointerdown",this.#b),e.addEventListener("pointermove",this.#T),e.addEventListener("pointerup",this.#f),e.addEventListener("pointercancel",this.#f),e.addEventListener("wheel",this.#$,{passive:!1}),e.addEventListener("gesturestart",this.#q,{passive:!1}),e.addEventListener("gesturechange",this.#V,{passive:!1}),e.addEventListener("gestureend",this.#i,{passive:!1}),e.addEventListener("dblclick",this.#z),e.addEventListener("contextmenu",this.#M),e.addEventListener("keydown",this.#k),e.addEventListener("keyup",this.#g),e.addEventListener("blur",this.#I)}#b=e=>{if(this.#a)return;let n=this.#n.state();if(!n.pageActive){this.observeState(n);return}if(!e.isPrimary&&e.pointerType==="mouse"||L(e))return;this.observeState(n),this.#o.focus({preventScroll:!0,focusVisible:!1}),this.#m(),e.pointerType==="touch"&&!e.isPrimary&&this.#r.size===0&&this.#n.state().draw.tool==="outline"&&(this.#C=!0);let t=performance.now(),i={id:e.pointerId,type:e.pointerType,startX:e.clientX,startY:e.clientY,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,lastTime:t,velocityX:0,velocityY:0};if(this.#r.set(e.pointerId,i),this.#o.setPointerCapture?.(e.pointerId),this.#r.size>=2){this.#O(),this.#n.onCirclePreview(null),this.#d=null,this.#s="pinch",this.#o.classList.add("navigating"),this.#C=!0;let[l,c]=[...this.#r.values()];l&&c&&(this.#h=Math.max(1,Je(l,c)),this.#e=Qe(l,c),this.#N=et(l,c),this.#y=this.#t.camera),e.preventDefault();return}let o=this.#n.state(),a=o.workflow==="draw"&&o.map.available&&!o.floor.readOnly;this.#C||this.#v||e.button===1||e.button===2||o.draw.tool==="pan"?(this.#s="pan",this.#w=this.#t.camera):a&&o.draw.tool==="outline"&&(this.#d=K(o,"outline"))?this.#s="outline":a&&(o.draw.tool==="paint"||o.draw.tool==="erase")&&(this.#d=K(o,o.draw.tool))?(this.#c=tt(this.#d.baselineCircles),e.pointerType==="touch"?(this.#s="idle",this.#l=window.setTimeout(()=>{if(this.#l=null,this.#r.size!==1||this.#C||!A(this.#n.state(),this.#d)){this.#_();return}this.#s=o.draw.tool;let l=this.#r.get(e.pointerId);l&&this.#P(l.x,l.y)},110)):(this.#s=o.draw.tool,this.#P(e.clientX,e.clientY))):(this.#s=o.view==="three"&&!e.shiftKey?"orbit":"pan",this.#w=this.#t.camera),(this.#s==="pan"||this.#s==="orbit")&&this.#o.classList.add("navigating"),e.preventDefault()};observeState(e){if(!e.pageActive){this.#m(),this.#O(),this.#n.onCirclePreview(null),this.#t.setCursor(null),this.#d=null,this.#c=[],this.#p=null,this.#e=null,this.#y=null,this.#w=null,this.#B=null,this.#u=0,this.#v=!1,this.#C=!1,this.#s="idle",this.#o.classList.remove("navigating");for(let n of this.#r.keys())this.#o.hasPointerCapture?.(n)&&this.#o.releasePointerCapture?.(n);this.#r.clear();return}this.#d&&!A(e,this.#d)&&this.#_()}#_(){if(this.#O(),this.#n.onCirclePreview(null),this.#d=null,this.#c=[],this.#p=null,this.#s==="paint"||this.#s==="erase"||this.#s==="outline"||this.#s==="idle"){this.#s="idle",this.#C=!1,this.#o.classList.remove("navigating");for(let e of this.#r.keys())this.#o.releasePointerCapture?.(e);this.#r.clear()}}#T=e=>{let n=this.#n.state();if(!n.pageActive){this.observeState(n);return}if(this.#d&&!A(this.#n.state(),this.#d)){this.#_();return}let t=this.#r.get(e.pointerId);if(!t){let p=this.#t.screenToMap(e.clientX,e.clientY);this.#t.setCursor(p);return}let o=(e.getCoalescedEvents?.()||[]).at(-1)||e,a=performance.now(),s=Math.max(1,a-t.lastTime),l=(o.clientX-t.lastX)/s,c=(o.clientY-t.lastY)/s;if(t.velocityX=t.velocityX*.62+l*.38,t.velocityY=t.velocityY*.62+c*.38,t.lastX=o.clientX,t.lastY=o.clientY,t.lastTime=a,t.x=o.clientX,t.y=o.clientY,this.#s==="pinch"&&this.#r.size>=2){let[p,h]=[...this.#r.values()];if(!p||!h)return;let f=Math.max(1,Je(p,h)),u=Qe(p,h),x=et(p,h),_=this.#y;if(_&&this.#e){let E={..._,distance:_.distance*this.#h/f,yaw:_.yaw+St(x-this.#N),pitch:_.orthographic?_.pitch:_.pitch-(u.y-this.#e.y)*.0035};this.#t.setCamera(this.#t.cameraAfterPan(E,u.x-this.#e.x,u.y-this.#e.y))}e.preventDefault();return}this.#s==="paint"||this.#s==="erase"?this.#P(e.clientX,e.clientY):this.#s==="pan"?this.#w&&this.#t.setCamera(this.#t.cameraAfterPan(this.#w,o.clientX-t.startX,o.clientY-t.startY)):this.#s==="orbit"&&this.#w&&this.#t.setCamera({...this.#w,yaw:this.#w.yaw+(o.clientX-t.startX)*.0045,pitch:this.#w.pitch-(o.clientY-t.startY)*.004});let d=this.#t.screenToMap(o.clientX,o.clientY);this.#t.setCursor(d),e.preventDefault()};#f=e=>{let n=this.#n.state();if(!n.pageActive){this.observeState(n);return}if(this.#d&&!A(this.#n.state(),this.#d)){this.#_();return}let t=this.#r.get(e.pointerId);if(!t)return;let i=this.#s;if(this.#r.delete(e.pointerId),this.#o.releasePointerCapture?.(e.pointerId),this.#O(),this.#s==="outline"&&e.type!=="pointercancel"&&A(this.#n.state(),this.#d)&&Math.hypot(t.x-t.startX,t.y-t.startY)<7){let o=this.#t.screenToMap(t.x,t.y);o&&this.#n.onOutlinePoint?.(o,this.#d)}if(e.type!=="pointercancel"&&(this.#s==="paint"||this.#s==="erase")&&A(this.#n.state(),this.#d)&&JSON.stringify(this.#c)!==JSON.stringify(this.#d.baselineCircles))this.#n.onCircles(this.#c,this.#d);else if(e.type!=="pointercancel"&&this.#s!=="pinch"&&!this.#C&&Math.hypot(t.x-t.startX,t.y-t.startY)<7&&["rooms","plan"].includes(this.#n.state().workflow)&&le(this.#n.state())){let o=this.#t.roomAt(t.x,t.y);o&&this.#n.onRoom(o)}if((this.#s==="paint"||this.#s==="erase")&&this.#n.onCirclePreview(null),this.#r.size===0)this.#s="idle",this.#d=null,this.#o.classList.remove("navigating"),this.#C=!1,this.#e=null,this.#y=null,this.#w=null,this.#p=null,(i==="pan"||i==="orbit")&&t.type!=="mouse"&&this.#E(t.velocityX,t.velocityY,i);else if(this.#s==="pinch"){this.#s="pan",this.#C=!0;let o=this.#r.values().next().value;o&&(o.startX=o.x,o.startY=o.y,o.velocityX=0,o.velocityY=0),this.#w=this.#t.camera,this.#y=null}e.preventDefault()};#P(e,n){if(!A(this.#n.state(),this.#d)){this.#_();return}let t=this.#t.screenToMap(e,n);if(!t)return;let o=this.#n.state().draw.brushMeters/2;if(this.#s==="erase")this.#c=this.#c.filter(a=>Math.hypot(a.x-t.x,a.y-t.y)>a.radius+o);else{if(!this.#t.containsMapPoint(t))return;let a=Math.max(.04,o*.55),s=this.#p||t,l=Math.hypot(t.x-s.x,t.y-s.y),c=Math.max(1,Math.ceil(l/a));for(let d=0;d<=c&&this.#c.length<512;d+=1){let p=d/c,h={x:s.x+(t.x-s.x)*p,y:s.y+(t.y-s.y)*p};this.#c.some(f=>Math.hypot(f.x-h.x,f.y-h.y)<Math.max(.025,o*.28))||this.#c.push({x:Math.round(h.x*1e4)/1e4,y:Math.round(h.y*1e4)/1e4,radius:Math.round(o*100)/100})}}this.#p=t,this.#n.onCirclePreview(this.#c,this.#d)}#$=e=>{if(this.#a||!this.#n.state().pageActive||L(e))return;e.preventDefault(),this.#o.focus({preventScroll:!0,focusVisible:!1}),this.#m();let n=e.deltaMode===WheelEvent.DOM_DELTA_LINE?16:e.deltaMode===WheelEvent.DOM_DELTA_PAGE?Math.max(1,this.#o.clientHeight):1,t=e.deltaX*n,i=e.deltaY*n;if(e.ctrlKey||e.metaKey){this.#t.zoomAt(Math.exp(N(-i*.008,-.28,.28)),e.clientX,e.clientY);return}if(e.altKey&&this.#n.state().view==="three"){this.#t.orbitBy(0,N(i,-80,80)*.75);return}if(e.deltaMode!==WheelEvent.DOM_DELTA_PIXEL||Math.abs(t)<.5&&Math.abs(i)>=50){this.#t.zoomAt(Math.exp(N(-i*.0025,-.28,.28)),e.clientX,e.clientY);return}this.#t.panBy(-N(t,-80,80),-N(i,-80,80))};#q=e=>{this.#a||!this.#n.state().pageActive||L(e)||(this.#o.focus({preventScroll:!0,focusVisible:!1}),this.#m(),this.#o.classList.add("navigating"),this.#B=this.#t.camera,this.#u=Number.isFinite(e.rotation)?e.rotation:0,e.preventDefault())};#V=e=>{if(this.#a||!this.#n.state().pageActive||L(e))return;let n=this.#B;if(!n||this.#r.size>=2)return;let t=Number.isFinite(e.scale)&&e.scale>0?Math.max(.1,e.scale):1,i=Number.isFinite(e.rotation)?e.rotation:0;this.#t.setCamera({...n,distance:n.distance/t,yaw:n.yaw+(i-this.#u)*Math.PI/180}),e.preventDefault()};#i=e=>{if(!this.#n.state().pageActive){this.observeState(this.#n.state());return}let n=this.#B!==null;this.#B=null,this.#u=0,this.#o.classList.remove("navigating"),n&&!L(e)&&e.preventDefault()};#L(e){let n=this.#n.state();if(e.repeat||this.#a||this.#r.size||e.composedPath()[0]!==this.#o||!this.#o.matches(":focus")||n.workflow!=="draw"||!le(n)||n.command!=="idle"&&n.command!=="failed"||n.draw.tool!=="paint"&&n.draw.tool!=="erase"&&n.draw.tool!=="outline")return;let i=this.#o.querySelector(".scene-canvas")?.getBoundingClientRect();if(!i?.width||!i.height)return;let o=K(n,n.draw.tool);if(o){if(e.preventDefault(),this.#m(),n.draw.tool==="outline"){let a=this.#t.screenToMap(i.left+i.width/2,i.top+i.height/2);a&&this.#n.onOutlinePoint?.(a,o);return}this.#c=tt(o.baselineCircles),this.#p=null,this.#d=o,this.#s=n.draw.tool,this.#P(i.left+i.width/2,i.top+i.height/2),this.#s="idle",this.#p=null,this.#d=null,this.#n.onCirclePreview(null),JSON.stringify(this.#c)!==JSON.stringify(o.baselineCircles)&&this.#n.onCircles(this.#c,o)}}#k=e=>{if(this.#a||!this.#n.state().pageActive||L(e)||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;if(e.key==="Enter"){this.#L(e);return}if(e.code==="Space"){this.#v=!0,e.preventDefault();return}this.#m();let n=this.#n.state(),t=e.key.toLocaleLowerCase();if(e.key==="+"||e.key==="=")this.#t.zoomAt(1.25);else if(e.key==="-")this.#t.zoomAt(.8);else if(e.key==="0")this.#t.fit();else if(t==="3")this.#S({type:"set-view",view:"three"});else if(t==="t")this.#S({type:"set-view",view:"top"});else if(e.key==="[")this.#t.orbitBy(-40,0);else if(e.key==="]")this.#t.orbitBy(40,0);else if(e.key==="PageUp")this.#t.orbitBy(0,-30);else if(e.key==="PageDown")this.#t.orbitBy(0,30);else if(t==="d"&&n.workflow==="draw")this.#S({type:"set-draw-tool",tool:"paint"});else if(t==="e"&&n.workflow==="draw")this.#S({type:"set-draw-tool",tool:"erase"});else if(["arrowleft","arrowright","arrowup","arrowdown"].includes(t))if(n.view==="three"&&!e.shiftKey){let i=t==="arrowleft"?-24:t==="arrowright"?24:0,o=t==="arrowup"?-20:t==="arrowdown"?20:0;this.#t.orbitBy(i,o)}else{let i=t==="arrowleft"?30:t==="arrowright"?-30:0,o=t==="arrowup"?30:t==="arrowdown"?-30:0;this.#t.panBy(i,o)}else if(n.workflow!=="draw"&&["w","a","s","d"].includes(t))this.#t.panBy(t==="a"?34:t==="d"?-34:0,t==="w"?34:t==="s"?-34:0);else if(n.workflow!=="draw"&&(t==="q"||t==="e"))this.#t.orbitBy(t==="q"?-30:30,0);else return;e.preventDefault()};#g=e=>{e.code==="Space"&&(this.#v=!1)};#I=()=>{this.#v=!1,this.#_(),this.#t.setCursor(null),this.#o.classList.remove("navigating")};#z=e=>{this.#a||!this.#n.state().pageActive||L(e)||(this.#m(),this.#t.zoomAt(e.shiftKey?1/1.6:1.6,e.clientX,e.clientY),e.preventDefault())};#M=e=>{L(e)||e.preventDefault()};#S(e){this.#o.dispatchEvent(new CustomEvent("matic-workspace-intent",{detail:e,bubbles:!0,composed:!0}))}#E(e,n,t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let i=N(e,-.55,.55),o=N(n,-.55,.55);if(Math.hypot(i,o)<.02)return;let a=performance.now(),s=l=>{let c=Math.min(32,l-a);a=l,t==="orbit"?this.#t.orbitBy(i*c,o*c):this.#t.panBy(i*c,o*c);let d=.9**(c/16);i*=d,o*=d,Math.hypot(i,o)>=.01?this.#A=window.requestAnimationFrame(s):this.#A=null};this.#A=window.requestAnimationFrame(s)}#m(){this.#A!==null&&window.cancelAnimationFrame(this.#A),this.#A=null}#O(){this.#l!==null&&window.clearTimeout(this.#l),this.#l=null}dispose(){this.#a||(this.#_(),this.#a=!0,this.#m(),this.#o.removeEventListener("pointerdown",this.#b),this.#o.removeEventListener("pointermove",this.#T),this.#o.removeEventListener("pointerup",this.#f),this.#o.removeEventListener("pointercancel",this.#f),this.#o.removeEventListener("wheel",this.#$),this.#o.removeEventListener("gesturestart",this.#q),this.#o.removeEventListener("gesturechange",this.#V),this.#o.removeEventListener("gestureend",this.#i),this.#o.removeEventListener("dblclick",this.#z),this.#o.removeEventListener("contextmenu",this.#M),this.#o.removeEventListener("keydown",this.#k),this.#o.removeEventListener("keyup",this.#g),this.#o.removeEventListener("blur",this.#I),this.#r.clear())}};var J=(r,e,n)=>{let t=n.x-e.x,i=n.y-e.y,o=Math.max(0,Math.min(1,((r.x-e.x)*t+(r.y-e.y)*i)/(t*t+i*i||1)));return Math.hypot(r.x-e.x-o*t,r.y-e.y-o*i)},Q=(r,e,n)=>(e.x-r.x)*(n.y-r.y)-(e.y-r.y)*(n.x-r.x),ot=({points:r,closed:e})=>{if(r.length>64||e&&r.length<3||r.some(t=>!Number.isFinite(t.x)||!Number.isFinite(t.y)||Math.abs(t.x)>1e4||Math.abs(t.y)>1e4))return!1;let n=e?r.length:r.length-1;for(let t=0;t<n;t++){let i=r[t],o=r[(t+1)%r.length];if(Math.hypot(i.x-o.x,i.y-o.y)<.01)return!1;for(let a=t+2;a<n;a++){if(e&&t===0&&a===n-1)continue;let s=r[a],l=r[(a+1)%r.length];if(Math.min(J(i,s,l),J(o,s,l),J(s,i,o),J(l,i,o))<1e-5||Q(i,o,s)*Q(i,o,l)<0&&Q(s,l,i)*Q(s,l,o)<0)return!1}}return!e||Math.abs(r.reduce((t,i,o)=>{let a=r[(o+1)%r.length];return t+i.x*a.y-a.x*i.y},0))>.01};var Dn="/api/matic_robot/slam_entries",Nn=24,On=8,Rt=15e5,Un=16*1024*1024,Hn=36,qn=16*1024*1024,rt=65536,m=class extends Error{constructor(e){super(e),this.name="ContractError",this.code=e}},y=(r,e)=>{if(!r||typeof r!="object"||Array.isArray(r))throw new m(e);return r},b=(r,e,n)=>{if(typeof r!="string")throw new m(n);let t=r.trim();if(!t||Array.from(t).length>e||/[\u0000-\u001f\u007f]/u.test(t))throw new m(n);return t},it=(r,e)=>r==null?null:b(r,128,e),At=r=>{if(r==null||r==="")return null;try{return b(r,128,"invalid-floor-label")}catch{return null}},H=(r,e,n,t)=>{if(typeof r!="number"||!Number.isFinite(r)||r<e||r>n)throw new m(t);return r},C=(r,e,n,t)=>{let i=H(r,e,n,t);if(!Number.isInteger(i))throw new m(t);return i},fe=(r,e)=>r==null?null:C(r,1,e,"invalid-floor-ordinal"),w=(r,e)=>{if(typeof r!="boolean")throw new m(e);return r},V=(r,e)=>r===void 0?!1:w(r,e),Tt=(r,e)=>r===null?null:w(r,e),at=r=>{if(r==null)return null;let e=b(r,64,"invalid-map-session-key");if(!/^[0-9a-f]{64}$/u.test(e))throw new m("invalid-map-session-key");return e},Lt=r=>{if(r==null)return null;if(r==="bootstrap_empty"||r==="map_session_unverified"||r==="floor_plan_unavailable"||r==="floor_plan_mismatch")return r;throw new m("invalid-map-block-reason")},Bt=r=>{if(r===void 0)return"not_started";if(r==="not_started"||r==="running"||r==="complete"||r==="partial"||r==="failed")return r;throw new m("invalid-bootstrap-state")},T=(r,e)=>{let n=b(r,512,e);if(!n.startsWith("/")||n.startsWith("//")||n.includes("\\"))throw new m(e);return n},$t=r=>{let e=typeof r.map_health=="string"?r.map_health.toLowerCase():"",n=typeof r.stream_state=="string"?r.stream_state.toLowerCase():"",t=typeof r.invalid_tiles=="number"?r.invalid_tiles:0;return e.includes("error")||e.includes("fail")||e.includes("degrad")||t>0?"problem":r.map_truncated===!0||e.includes("truncat")||e.includes("limit")?"limited":r.map_complete===!0?"ready":n.includes("connect")||n.includes("collect")||n.includes("run")?"building":"unknown"},Xn=r=>{let e=y(r,"invalid-catalog");if(!Array.isArray(e.entries)||e.entries.length>64)throw new m("invalid-catalog-entries");return e.entries.map(n=>{let t=y(n,"invalid-catalog-entry"),i=C(t.map_revision,0,Number.MAX_SAFE_INTEGER,"invalid-map-revision");return{entryId:b(t.entry_id,128,"invalid-entry-id"),liveWorkspaceTransportEnabled:V(t.live_workspace_transport_enabled,"invalid-live-workspace-transport"),sceneUrl:T(t.scene_url,"invalid-scene-url"),deltaUrl:t.delta_url===void 0||t.delta_url===null?null:T(t.delta_url,"invalid-delta-url"),poseUrl:T(t.pose_url,"invalid-pose-url"),historyUrl:T(t.history_url,"invalid-history-url"),areasUrl:T(t.areas_url,"invalid-areas-url"),plansUrl:T(t.plans_url,"invalid-plans-url"),mapRevision:i,mapFloorCoherent:w(t.map_floor_coherent,"invalid-floor-coherence"),mapSessionVerified:w(t.map_session_verified,"invalid-session-state"),mapSessionKey:at(t.map_session_key),mapBlockReason:Lt(t.map_block_reason),runnerLocked:w(t.runner_locked,"invalid-runner-lock"),stopSettlePending:w(t.stop_settle_pending,"invalid-stop-settle"),activePlan:w(t.active_plan,"invalid-active-plan"),nativeReconciliationPending:w(t.native_reconciliation_pending,"invalid-native-reconciliation"),nativeSessionActive:Tt(t.native_session_active,"invalid-native-session"),mapComplete:w(t.map_complete,"invalid-map-complete"),mapTruncated:w(t.map_truncated,"invalid-map-truncated"),selectedFloorOrdinal:fe(t.selected_floor_ordinal,128),mapFloorOrdinal:fe(t.map_floor_ordinal,128),historyCount:C(t.history_count,0,12,"invalid-history-count"),historyFloorCount:C(t.history_floor_count,0,128,"invalid-floor-count"),health:$t(t),streamFailures:C(t.stream_failures,0,Number.MAX_SAFE_INTEGER,"invalid-stream-failures"),bootstrapState:Bt(t.bootstrap_state),bootstrapPhotoSeen:t.bootstrap_photo_seen===void 0?!1:w(t.bootstrap_photo_seen,"invalid-bootstrap-photo"),bootstrapStructureSeen:t.bootstrap_structure_seen===void 0?!1:w(t.bootstrap_structure_seen,"invalid-bootstrap-structure"),bootstrapFailures:t.bootstrap_failures===void 0?0:C(t.bootstrap_failures,0,2,"invalid-bootstrap-failures")}})},st=(r,e)=>{if(!Array.isArray(r)||r.length!==2)throw new m(e);return[H(r[0],-1e6,1e6,e),H(r[1],-1e6,1e6,e)]},It=(r,e)=>{if(!Array.isArray(r)||r.length<3||r.length>8192)throw new m(e);return r.map(n=>st(n,e))},lt=(r,e)=>{if(!Array.isArray(r)||r.length>256)throw new m("invalid-rooms");return r.map(n=>{let t=y(n,"invalid-room");return{roomId:b(t.room_id,128,"invalid-room-id"),name:b(t.name,128,"invalid-room-name"),boundary:e?It(t.boundary,"invalid-room-boundary"):[]}})},zt=r=>{let e=y(r,"invalid-history-snapshot"),n=b(e.created_at,64,"invalid-history-time");if(!Number.isFinite(Date.parse(n)))throw new m("invalid-history-time");return{id:b(e.id,128,"invalid-history-id"),createdAt:n,revision:C(e.revision,0,Number.MAX_SAFE_INTEGER,"invalid-history-revision"),pointCount:C(e.point_count,1,Rt,"invalid-history-points"),sceneUrl:T(e.scene_url,"invalid-history-scene-url")}},Vn=r=>{let e=y(r,"invalid-history");if(!Array.isArray(e.floors)||e.floors.length<1||e.floors.length>128)throw new m("invalid-history-floors");return{entryId:b(e.entry_id,128,"invalid-history-entry"),liveAvailable:w(e.live_available,"invalid-history-live"),floors:e.floors.map(n=>{let t=y(n,"invalid-history-floor");if(!Array.isArray(t.snapshots)||t.snapshots.length>12)throw new m("invalid-history-snapshots");return{id:b(t.id,128,"invalid-history-floor-id"),active:w(t.active,"invalid-history-floor-active"),readOnly:w(t.read_only,"invalid-history-floor-read-only"),liveAvailable:t.live_available===void 0?!1:w(t.live_available,"invalid-history-floor-live"),label:At(t.label),ordinal:t.ordinal===void 0?null:fe(t.ordinal,128),snapshots:t.snapshots.map(zt)}})}},te=r=>{if(r==="vacuum"||r==="mop"||r==="vacuum_and_mop")return r;throw new m("invalid-cleaning-mode")},G=r=>{if(r==="quick"||r==="standard"||r==="heavy_duty")return r;throw new m("invalid-coverage-setting")},ee=(r,e)=>r==null?null:C(r,1,100,e),ne=r=>{if(r==null)return[];let e=["coverage_requires_vacuum","mop_due","coverage_due","room_not_on_current_map","identity_changed","shared_schedule_unavailable","mop_progress_unverified","coverage_progress_unverified","invalid_cadence_policy"];if(!Array.isArray(r)||r.length>e.length||r.some(n=>!e.includes(n)))throw new m("invalid-cadence-reasons");return[...new Set(r)]},ct=r=>{if(r==null)return;let e=y(r,"invalid-room-cadence"),n=e.scope===void 0?"plan":e.scope;if(n!=="plan"&&n!=="shared")throw new m("invalid-room-cadence-scope");let t=e.periodic_coverage_setting;return{scope:n,mopEveryN:ee(e.mop_every_n,"invalid-mop-interval"),coverageEveryN:ee(e.coverage_every_n,"invalid-coverage-interval"),periodicCoverageSetting:t==null?null:G(t),doMopNext:V(e.do_mop_next,"invalid-do-mop-next"),doCoverageNext:V(e.do_coverage_next,"invalid-do-coverage-next")}},ve=(r,e)=>{if(r==null)return;let n=y(r,"invalid-room-cadence-progress"),t=n.effective_cleaning_mode,i=n.effective_coverage_setting,o=ne(e??n.cadence_reasons);return{mopProgress:C(n.mop_progress??0,0,100,"invalid-mop-progress"),coverageProgress:C(n.coverage_progress??0,0,100,"invalid-coverage-progress"),mopDue:V(n.mop_due,"invalid-mop-due"),coverageDue:V(n.coverage_due,"invalid-coverage-due"),nextMopIn:ee(n.next_mop_in,"invalid-next-mop"),nextCoverageIn:ee(n.next_coverage_in,"invalid-next-coverage"),reasons:o,...t===void 0?{}:{effectiveCleaningMode:te(t)},...i===void 0?{}:{effectiveCoverageSetting:G(i)}}},Ft=r=>{let e=y(r,"invalid-plan-room"),n=ct(e.cadence),t=ve(e.cadence_progress,e.cadence_reasons),i=ne(e.cadence_reasons);return{roomId:b(e.room_id,128,"invalid-plan-room-id"),cleaningMode:te(e.cleaning_mode),coverageSetting:G(e.coverage_setting),...n===void 0?{}:{cadence:n},...t===void 0?{}:{cadenceProgress:t},...i.length?{cadenceReasons:i}:{}}},dt=r=>{if(r==null)return;let e=y(r,"invalid-plan-preview");if(!Array.isArray(e.rooms)||e.rooms.length>100||!Array.isArray(e.mission_boundaries)||e.mission_boundaries.length>99)throw new m("invalid-plan-preview");let n=e.rooms.map(s=>{let l=y(s,"invalid-plan-preview-room");return{roomId:b(l.room_id,128,"invalid-plan-preview-room-id"),name:b(l.name,128,"invalid-plan-preview-room-name"),cleaningMode:te(l.cleaning_mode),coverageSetting:G(l.coverage_setting),cadenceReasons:ne(l.cadence_reasons)}}),t=e.mission_boundaries.map(s=>C(s,1,Math.max(1,n.length-1),"invalid-plan-preview-boundary"));if(t.some((s,l)=>s>=n.length||s<=(t[l-1]??0)))throw new m("invalid-plan-preview-boundary-order");let i=["coverage_requires_vacuum","cadence_identity_unavailable","preview_unavailable","plan_disabled","plan_has_no_rooms","plan_room_limit","cadence_identity_changed","shared_schedule_unavailable","cadence_progress_unverified","invalid_cadence_policy","invalid_plan"],o=e.blocker;if(o!==null&&!i.includes(o))throw new m("invalid-plan-preview-blocker");if(o===null&&n.length===0)throw new m("empty-plan-preview");let a=e.preview_token;if(a!==void 0&&(typeof a!="string"||!/^[0-9a-f]{64}$/u.test(a)))throw new m("invalid-plan-preview-token");return{rooms:n,missionBoundaries:t,blocker:o,...typeof a=="string"?{previewToken:a}:{}}},Gn=r=>{let e=y(r,"invalid-room-sequence-preview"),n=b(e.entry_id,128,"invalid-room-sequence-preview-entry"),t=b(e.floor_token,128,"invalid-room-sequence-preview-floor"),i=b(e.preview_token,64,"invalid-room-sequence-preview-token");if(!/^[0-9a-f]{64}$/u.test(t)||!/^[0-9a-f]{64}$/u.test(i))throw new m("invalid-room-sequence-preview-token");let o=dt({rooms:e.rooms,mission_boundaries:e.mission_boundaries,blocker:e.blocker});if(!o)throw new m("invalid-room-sequence-preview");let a=e.rooms;if(!Array.isArray(a))throw new m("invalid-room-sequence-preview-rooms");let s=o.rooms.map((l,c)=>{let d=y(a[c],"invalid-room-sequence-preview-room"),p=ve(d.cadence_progress,d.cadence_reasons);return{...l,...p===void 0?{}:{cadenceProgress:p}}});return{entryId:n,floorToken:t,previewToken:i,rooms:s,missionBoundaries:o.missionBoundaries,blocker:o.blocker}},Dt=r=>{if(r==null)return null;if(!Array.isArray(r)||r.length<3||r.length>64)throw new m("invalid-area-outline");let e={closed:!0,points:r.map(n=>{let t=y(n,"invalid-area-outline");if(typeof t.x!="number"||typeof t.y!="number")throw new m("invalid-area-outline");return{x:t.x,y:t.y}})};if(!ot(e))throw new m("invalid-area-outline");return e},Nt=r=>{let e=y(r,"invalid-area-circle");return{x:H(e.x,-1e6,1e6,"invalid-area-circle"),y:H(e.y,-1e6,1e6,"invalid-area-circle"),radius:H(e.radius,.05,2.5,"invalid-area-circle")}},Ot=r=>r==="current"||r==="review"||r==="stale"?r:"unknown",Wn=r=>{let e=y(r,"invalid-areas");if(!Array.isArray(e.areas)||e.areas.length>256)throw new m("invalid-area-list");return{sceneUrl:T(e.scene_url,"invalid-area-scene-url"),rooms:lt(e.rooms,!0),areas:e.areas.map(n=>{let t=y(n,"invalid-area");if(!Array.isArray(t.circles)||t.circles.length>512)throw new m("invalid-area-circles");return{id:b(t.id,128,"invalid-area-id"),name:b(t.name,128,"invalid-area-name"),circles:t.circles.map(Nt),outline:Dt(t.outline),cleaningMode:te(t.cleaning_mode),coverageSetting:G(t.coverage_setting),status:Ot(t.status),canRebind:w(t.can_rebind,"invalid-area-rebind")}}),selectedArea:it(e.selected_area,"invalid-selected-area")}},Yn=r=>{let e=y(r,"invalid-plan-save-response"),n=y(e.response,"invalid-plan-save-response"),t=y(n.plan,"invalid-plan-save-response");return b(t.id,128,"invalid-plan-save-response")},Ut=r=>typeof r=="number"&&Number.isSafeInteger(r)&&r>=0?r:null,Kn=r=>{let e=y(r,"invalid-plans");if(!Array.isArray(e.plans)||e.plans.length>256)throw new m("invalid-plan-list");let n=e.rooms;return{rooms:lt(n,!1).map((i,o)=>{let a=Array.isArray(n)?n[o]:void 0,s=y(a,"invalid-room"),l=ct(s.shared_cadence),c=ve(s.shared_cadence_progress,s.shared_cadence_reasons),d=ne(s.shared_cadence_reasons);return{roomId:i.roomId,name:i.name,...l===void 0?{}:{sharedCadence:l},...c===void 0?{}:{sharedCadenceProgress:c},...d.length?{sharedCadenceReasons:d}:{}}}),selectedPlan:it(e.selected_plan,"invalid-selected-plan"),plans:e.plans.map(i=>{let o=y(i,"invalid-plan");if(!Array.isArray(o.rooms)||o.rooms.length>256||!Array.isArray(o.room_order))throw new m("invalid-plan-rooms");let a=o.run_behavior;if(a!=="intelligent"&&a!=="ordered")throw new m("invalid-run-behavior");let s=dt(o.next_run_preview);return{id:b(o.id,128,"invalid-plan-id"),name:b(o.name,128,"invalid-plan-name"),enabled:w(o.enabled,"invalid-plan-enabled"),runBehavior:a,rooms:o.rooms.map(l=>Ft(l)),roomOrder:o.room_order.slice(0,256).map(l=>b(l,128,"invalid-room-order")),returnToBase:w(o.return_to_base,"invalid-return-to-base"),finishCurrentRoom:w(o.finish_current_room,"invalid-finish-room"),finishCurrentRoomThreshold:C(o.finish_current_room_threshold,0,100,"invalid-finish-threshold"),...s===void 0?{}:{nextRunPreview:s},nextRunEstimateSeconds:Ut(o.next_run_estimate_seconds)}})}},Zn=r=>{let e=y(r,"invalid-pose"),n=e.position,t=n===null?null:st(n,"invalid-pose-position"),i=e.pose_freshness;if(i!=="live"&&i!=="coordinator_fallback")throw new m("invalid-pose-freshness");return{position:t,source:b(e.source,64,"invalid-pose-source"),revision:C(e.revision,0,Number.MAX_SAFE_INTEGER,"invalid-pose-revision"),poseRevision:C(e.pose_revision,0,Number.MAX_SAFE_INTEGER,"invalid-pose-sequence"),floorCoherent:w(e.map_floor_coherent,"invalid-pose-floor"),mapSessionKey:at(e.map_session_key),freshness:i}},jn=r=>{try{return T(r,"invalid-private-path"),!0}catch{return!1}};var P=(r,e,n)=>Math.max(e,Math.min(n,r)),W=r=>{let e=r;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Ht=r=>{switch(r){case"efficient":return .35;case"balanced":return .65;case"maximum":case"auto":return 1}},ht=r=>{let e=r.metadata.metersPerCell;return[(r.metadata.origin[0]+(r.metadata.span[0]-1)/2)*e,(r.metadata.origin[1]+(r.metadata.span[1]-1)/2)*e]},ft=(r,e,n,t)=>{let i=ht(n),o=ht(t);return[r+(o[0]-i[0]),e+(i[1]-o[1])]},qt=(r,e,n)=>{let[t,i]=ft(r.targetX,r.targetZ,e,n);return{...r,targetX:t,targetZ:i}},vt=(r,e)=>{if(!e)return!0;let n=r==="top";return Math.abs(e.zoom-1)<.001&&Math.abs(e.targetX)<.001&&Math.abs(e.targetZ)<.001&&Math.abs(W(e.yaw-(n?0:-Math.PI/4)))<.001&&(n||Math.abs(e.pitch-.82)<.001)},Xt=(r,e,n,t,i)=>Object.fromEntries(Object.entries(r).map(([o,a])=>{if(!a||vt(o,a))return[o,a];let[s,l]=ft(a.targetX,a.targetZ,e,n),c=t[o],d=i[o],p=c>0&&d>0?a.zoom*d/c:a.zoom;return[o,{...a,targetX:s,targetZ:l,zoom:p}]})),oe=r=>{let e=r.resources.entry;return[r.dataMode,r.selection.entryId??"none",r.selection.floorId,e?.entryId??"none",e?.selectedFloorOrdinal??"none",e?.mapFloorOrdinal??"none",e?.mapSessionKey??"none"].join("|")},be=512*1024,ut=be/2,O=rt,yt=256,Vt=35e4,Gt=11e5,Wt=(r,e)=>r.metadata.metersPerCell===e.metadata.metersPerCell&&r.metadata.origin[0]===e.metadata.origin[0]&&r.metadata.origin[1]===e.metadata.origin[1]&&r.metadata.span[0]===e.metadata.span[0]&&r.metadata.span[1]===e.metadata.span[1],ye=(r,e)=>r.pointOffset===e.pointOffset&&r.floorCount===e.floorCount&&r.surfaceCount===e.surfaceCount&&r.total===e.total&&r.source===e.source&&Wt(r,e),pt=(r,e)=>{let n=r.deltaHint;if(!n||n.baseRevision!==e||r.revision<=e||n.blockBytes!==O||n.dirtyBlocks.length>yt)return null;let t=Math.ceil(r.total*8/O),i=-1;for(let o of n.dirtyBlocks){if(!Number.isSafeInteger(o)||o<=i||o>=t)return null;i=o}return n.dirtyBlocks},Yt={accent:[6,120,206],onAccent:[255,255,255],text:[38,50,56],quiet:[75,92,105],plate:[250,252,253],roomFill:[231,238,242],forced:!1},bt=Math.PI/3.15,Kt=1.08,Zt=(r,e)=>{let n=bt/2,t=Math.atan(Math.tan(n)*Math.max(.2,e));return r/Math.sin(Math.min(n,t))*Kt},jt=(r,e)=>{let n=new Float32Array(16);for(let t=0;t<4;t+=1)for(let i=0;i<4;i+=1){let o=0;for(let a=0;a<4;a+=1)o+=(r[a*4+i]??0)*(e[t*4+a]??0);n[t*4+i]=o}return n},Jt=(r,e,n,t)=>{let i=1/Math.tan(r/2),o=new Float32Array(16);return o[0]=i/e,o[5]=i,o[10]=(t+n)/(n-t),o[11]=-1,o[14]=2*t*n/(n-t),o},Qt=(r,e,n,t,i,o)=>{let a=new Float32Array(16);return a[0]=2/(e-r),a[5]=2/(t-n),a[10]=-2/(o-i),a[12]=-(e+r)/(e-r),a[13]=-(t+n)/(t-n),a[14]=-(o+i)/(o-i),a[15]=1,a},en=(r,e)=>{let n=Math.hypot((r[0]??0)-(e[0]??0),(r[1]??0)-(e[1]??0),(r[2]??0)-(e[2]??0))||1,t=[((r[0]??0)-(e[0]??0))/n,((r[1]??0)-(e[1]??0))/n,((r[2]??0)-(e[2]??0))/n],i=Math.hypot(t[2]??0,t[0]??0)||1,o=[(t[2]??0)/i,0,-(t[0]??0)/i],a=[(t[1]??0)*(o[2]??0),(t[2]??0)*(o[0]??0)-(t[0]??0)*(o[2]??0),-(t[1]??0)*(o[0]??0)];return new Float32Array([o[0]??0,a[0]??0,t[0]??0,0,o[1]??0,a[1]??0,t[1]??0,0,o[2]??0,a[2]??0,t[2]??0,0,-((o[0]??0)*(r[0]??0)+(o[1]??0)*(r[1]??0)+(o[2]??0)*(r[2]??0)),-((a[0]??0)*(r[0]??0)+(a[1]??0)*(r[1]??0)+(a[2]??0)*(r[2]??0)),-((t[0]??0)*(r[0]??0)+(t[1]??0)*(r[1]??0)+(t[2]??0)*(r[2]??0)),1])},mt=(r,e,n)=>{let t=!1,i=n.at(-1);if(!i)return!1;for(let o of n){let[a,s]=o,[l,c]=i;s>e!=c>e&&r<(l-a)*(e-s)/(c-s)+a&&(t=!t),i=o}return t},re=class{#o;#t;#n;#r=null;#v=null;#s=null;#c=null;#p=null;#h=null;#e=null;#N=new WeakMap;#y=null;#w=null;#B=null;#u=null;#A=null;#C=null;#l=null;#d=null;#a=null;#b=null;#_=null;#T=null;#f=null;#P=null;#$=null;#q=null;#V;#i={yaw:-Math.PI/4,pitch:.82,distance:12,targetX:0,targetZ:0,orthographic:!1};#L=12;#k=8;#g=4;#I=new Float32Array(16);#z=null;#M="unavailable";#S=0;#E=0;#m=0;#O=0;#G=0;#j=1;#se=window.matchMedia("(any-pointer: coarse)").matches;#R={width:1,height:1,left:0,top:0};#x=!0;#F=!1;#le=Yt;constructor(e,n,t={}){this.#o=e,this.#t=n,this.#n=t,this.#v=n.getContext("2d",{alpha:!0}),this.#o.addEventListener("webglcontextlost",this.#be),this.#o.addEventListener("webglcontextrestored",this.#ge),this.#ue(),this.#V=new ResizeObserver(()=>{let i=this.#L,o=this.#k;this.#pe(),this.#x&&(i!==this.#L||o!==this.#k)?this.fit(!1):this.requestRender()}),this.#V.observe(e)}get camera(){return{...this.#i}}#ce(){return{minimum:Math.max(.2,this.#g*.04),maximum:this.#g*8}}#de(){let e=this.#a?.metadata.span,n=this.#a?.metadata.metersPerCell;return!e||n===void 0?{x:this.#g,z:this.#g}:{x:Math.max(.5,e[0]*n*.55),z:Math.max(.5,e[1]*n*.55)}}setCamera(e,n=!0){let t=this.#ce(),i=this.#de();this.#i={yaw:W(e.yaw),pitch:e.orthographic?Math.PI/2-.018:P(e.pitch,.18,1.38),distance:P(e.distance,t.minimum,t.maximum),targetX:P(e.targetX,-i.x,i.x),targetZ:P(e.targetZ,-i.z,i.z),orthographic:e.orthographic},this.#x=!1,this.requestRender(),n&&this.#H()}cameraAfterPan(e,n,t){let i=this.#Y(),o=e.distance*1.75/Math.max(200,i.height),a=Math.cos(e.yaw),s=-Math.sin(e.yaw),l=-Math.sin(e.yaw),c=-Math.cos(e.yaw),d=this.#de();return{...e,targetX:P(e.targetX-n*o*a+t*o*l,-d.x,d.x),targetZ:P(e.targetZ-n*o*s+t*o*c,-d.z,d.z)}}setState(e){if(this.#F)return;let n=this.#l,t=this.#a,i=this.#_,o=this.#T;this.#l=e,!e.pageActive&&this.#P!==null&&(window.cancelAnimationFrame(this.#P),this.#P=null);let a=e.resources.scene.value,s=a?oe(e):null;this.#_=a,this.#T=s;let l=null,c=!!(this.#f&&this.#f.scene===a&&this.#f.context===s&&this.#f.generation===e.generation&&this.#f.contextGeneration===this.#S);if(!e.pageActive)this.#D(!0),this.#U();else if(a!==null){let h=oe(e),f=a!==i||h!==o,u=this.#f,x=this.#M==="webgl2"&&!u&&this.#E<a.total,_=u&&u.context===h&&u.contextGeneration===this.#S&&ye(u.scene,a)?pt(a,u.revision):null,E=!!(u&&!u.staging&&u.seed==="scene"&&u.frontierBytes<u.scene.total*8&&a!==u.scene&&_!==null);if(!!!(u&&!E&&a!==u.scene&&_!==null&&this.#we(a,h,e,_))&&(x||!!(u&&!c)||f||a!==this.#a||h!==this.#b)){let k=this.#a!==null&&this.#b===h,U=k&&this.#a&&ye(this.#a,a),B=!!(this.#a&&this.#E>=this.#a.total),we=!u&&U&&B?pt(a,this.#a?.revision??-1):null;this.#D(!1),this.#M==="webgl2"?U?we!==null?this.#J(a,h,e,!0,this.#a,!0,"copy",we):this.#J(a,h,e,!0,this.#a,!0):(this.#D(!0),this.#a=a,this.#b=h,l=this.#W(a,k&&!this.#x,t,k,n?n.workflow==="draw"?"top":n.view:null),this.#J(a,h,e,!1,t,!1)):(this.#a=a,this.#b=h,l=this.#W(a,k&&!this.#x,t,k,n?n.workflow==="draw"?"top":n.view:null))}}else(this.#a!==null||this.#f!==null)&&(this.#D(!0),this.#U(),this.#oe(),this.#a=null,this.#b=null,this.#m=0,this.#E=0);(!n||n.quality!==e.quality)&&(this.#j=Ht(e.quality),this.#G=0);let d=n?.workflow!=="draw"&&e.workflow==="draw",p=n?.workflow==="draw"&&e.workflow!=="draw";if(!n||n.view!==e.view||d||p){let h=e.workflow==="draw"?"top":e.view;this.#i=this.#te(h,e,l),this.#x=this.#ne(h,e,l)}e.workflow==="draw"&&n?.draw.zoomPercent!==e.draw.zoomPercent&&Math.round(this.#k/this.#i.distance*100)!==e.draw.zoomPercent&&(this.#i={...this.#i,orthographic:!0,pitch:Math.PI/2-.018,distance:this.#k*100/e.draw.zoomPercent},this.#x=e.draw.zoomPercent===100&&Math.abs(this.#i.targetX)<.001&&Math.abs(this.#i.targetZ)<.001&&Math.abs(W(this.#i.yaw))<.001),(l||d)&&this.#H(),this.requestRender()}setCirclePreview(e,n){this.#d=e&&n?{circles:e,capture:n}:null,this.requestRender()}#te(e,n,t=null){let i=e==="top",o=i?this.#k:this.#L,a=t?.[e]??n.cameras[e];return a?{yaw:a.yaw,pitch:i?Math.PI/2-.018:a.pitch,distance:P(o/P(a.zoom,.01,100),Math.max(.2,this.#g*.04),this.#g*8),targetX:P(a.targetX,-this.#g,this.#g),targetZ:P(a.targetZ,-this.#g,this.#g),orthographic:i}:i?{yaw:0,pitch:Math.PI/2-.018,distance:o,targetX:0,targetZ:0,orthographic:!0}:{yaw:-Math.PI/4,pitch:.82,distance:o,targetX:0,targetZ:0,orthographic:!1}}#ne(e,n,t=null){let i=t?.[e]??n.cameras[e];return vt(e,i)}#he(e,n){let t=this.#r;if(!t)throw new Error("webgl-unavailable");let i=t.createShader(e);if(!i)throw new Error("shader-unavailable");if(t.shaderSource(i,n),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS))throw t.deleteShader(i),new Error("shader-failed");return i}#ue(){try{this.#r=this.#o.getContext("webgl2",{alpha:!0,antialias:!0,depth:!0,powerPreference:"high-performance"});let e=this.#r;if(!e)throw new Error("webgl2-unavailable");let n=this.#he(e.VERTEX_SHADER,`#version 300 es
        precision highp float;
        precision highp int;
        layout(location = 0) in uvec2 aXY;
        layout(location = 1) in uint aHeight;
        layout(location = 2) in vec3 aColor;
        uniform mat4 uViewProjection;
        uniform vec2 uCenter;
        uniform float uMetersPerCell;
        uniform float uPointPixels;
        uniform float uMaxPointPixels;
        out vec3 vColor;
        void main() {
          vec3 world = vec3(
            -(float(aXY.x) - uCenter.x) * uMetersPerCell,
            float(aHeight) * uMetersPerCell,
            (float(aXY.y) - uCenter.y) * uMetersPerCell
          );
          vec4 clip = uViewProjection * vec4(world, 1.0);
          gl_Position = clip;
          gl_PointSize = clamp(uPointPixels / max(0.18, clip.w), 1.1, uMaxPointPixels);
          vColor = aColor;
        }
      `),t=this.#he(e.FRAGMENT_SHADER,`#version 300 es
        precision highp float;
        in vec3 vColor;
        out vec4 outColor;
        void main() {
          vec2 point = gl_PointCoord * 2.0 - 1.0;
          if (dot(point, point) > 1.0) discard;
          float edge = smoothstep(1.0, 0.72, dot(point, point));
          outColor = vec4(pow(vColor, vec3(0.94)), edge);
        }
      `),i=e.createProgram();if(!i)throw new Error("program-unavailable");if(e.attachShader(i,n),e.attachShader(i,t),e.linkProgram(i),e.deleteShader(n),e.deleteShader(t),!e.getProgramParameter(i,e.LINK_STATUS))throw new Error("program-failed");if(this.#p=i,this.#w=e.getUniformLocation(i,"uViewProjection"),this.#B=e.getUniformLocation(i,"uCenter"),this.#u=e.getUniformLocation(i,"uMetersPerCell"),this.#A=e.getUniformLocation(i,"uPointPixels"),this.#C=e.getUniformLocation(i,"uMaxPointPixels"),this.#h=e.createBuffer(),this.#y=e.createVertexArray(),e.bindVertexArray(this.#y),!this.#h)throw new Error("buffer-unavailable");this.#K(this.#h),e.bindVertexArray(null),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),this.#M="webgl2",this.#S+=1}catch{this.#ee(),this.#ve()}}#W(e,n=!1,t=null,i=!1,o=null){if(this.#U(),!e)return this.#m=0,this.#E=0,this.requestRender(),null;let[a,s]=e.metadata.span,l=e.metadata.metersPerCell,c=a*l,d=s*l;this.#g=Math.max(1,Math.hypot(c,d)/2);let p={three:this.#L,top:this.#k};this.#pe(),n&&t?this.setCamera(qt(this.#i,t,e),!1):this.fit(!1,o??void 0);let h=this.#l;if(i&&t&&h){let f={three:this.#L,top:this.#k},u=Xt(h.cameras,t,e,p,f),x=o??(h.workflow==="draw"?"top":h.view),_=x==="top"?this.#k:this.#L;return u[x]={yaw:this.#i.yaw,pitch:this.#i.pitch,zoom:_/Math.max(.2,this.#i.distance),targetX:this.#i.targetX,targetZ:this.#i.targetZ},this.#n.onCameraPreferences?.(u),u}return null}#pe(){let e=this.#a;if(!e)return;let[n,t]=e.metadata.span,i=e.metadata.metersPerCell,o=n*i,a=t*i,s=this.#Y(),l=Math.max(.2,s.width/Math.max(1,s.height));this.#L=Zt(this.#g,l),this.#k=Math.max(a/2,o/(2*l))*1.12}#K(e,n=1,t=0){let i=this.#r;!i||!this.#y||(i.bindVertexArray(this.#y),i.bindBuffer(i.ARRAY_BUFFER,e),i.enableVertexAttribArray(0),i.vertexAttribIPointer(0,2,i.UNSIGNED_SHORT,8*n,8*t),i.enableVertexAttribArray(1),i.vertexAttribIPointer(1,1,i.UNSIGNED_BYTE,8*n,8*t+4),i.enableVertexAttribArray(2),i.vertexAttribPointer(2,3,i.UNSIGNED_BYTE,!0,8*n,8*t+5),i.bindVertexArray(null))}#oe(){this.#h&&this.#r&&this.#r.deleteBuffer(this.#h),this.#h=null}#D(e){let n=this.#f;n&&(this.#f=null,!n.staging&&e&&this.#h===n.buffer&&(this.#oe(),this.#a=null,this.#b=null,this.#m=0,this.#E=0))}#J(e,n,t,i,o,a,s="scene",l=[]){let c=this.#r;if(!c||this.#M!=="webgl2"||!t.pageActive||this.#F)return;let d=i?this.#e:this.#h;if(!d&&!i&&this.#e&&(d=this.#e,this.#e=null),!d)try{d=c.createBuffer()}catch{this.#Z();return}if(!d){this.#Z();return}if(i?this.#e=d:this.#h=d,!this.#_e(d,e.total*8,s==="scene")){this.#Z();return}i||this.#K(d),this.#f={scene:e,revision:e.revision,context:n,generation:t.generation,contextGeneration:this.#S,buffer:d,staging:i,seed:s,previousScene:o,preserveCamera:a,preferenceView:t.workflow==="draw"?"top":t.view,frontierBytes:0,dirtyBlocks:new Set(l),transitionBlocks:new Set(l)},i||(this.#E=0,this.#m=0),this.requestRender()}#we(e,n,t,i){let o=this.#f;if(!o||o.context!==n||o.contextGeneration!==this.#S||!ye(o.scene,e))return!1;let a=new Set(o.transitionBlocks);for(let s of i)a.add(s);if(a.size>yt)return!1;o.scene=e,o.revision=e.revision,o.generation=t.generation,o.transitionBlocks.clear();for(let s of a)o.transitionBlocks.add(s);if(o.seed==="copy")for(let s of i)o.dirtyBlocks.add(s);else{let s=Math.ceil(o.frontierBytes/O);for(let l of i)l<s&&o.dirtyBlocks.add(l)}return this.requestRender(),!0}#_e(e,n,t){let i=this.#r;if(!i)return!1;let o=this.#N.get(e)??0;if(!t&&o>=n)return!0;try{return i.bindBuffer(i.ARRAY_BUFFER,e),i.bufferData(i.ARRAY_BUFFER,n,i.DYNAMIC_DRAW),this.#re()?!1:(this.#N.set(e,n),!0)}catch{return!1}}#re(){let e=this.#r;if(!e)return!0;try{let n=e.getError();return typeof n=="number"&&n!==e.NO_ERROR}catch{return!0}}#Z(){let e=this.#_,n=this.#T,t=this.#l,i=this.#a,o=this.#b;if(this.#D(!1),this.#ee(),e&&n&&t?.pageActive){let a=i!==null&&o===n;(e!==i||n!==o)&&(this.#a=e,this.#b=n,this.#W(e,a&&!this.#x,i,a,t.workflow==="draw"?"top":t.view))}else!e&&i&&(this.#a=null,this.#b=null,this.#W(null));this.#ve(),this.requestRender()}#me(e,n){let t=this.#r,i=e.scene.total*8-e.frontierBytes,o=Math.min(i,n);if(!t||o<=0)return 0;if(e.seed==="copy"){if(!this.#h||this.#h===e.buffer)return-1;t.bindBuffer(t.COPY_READ_BUFFER,this.#h),t.bindBuffer(t.COPY_WRITE_BUFFER,e.buffer),t.copyBufferSubData(t.COPY_READ_BUFFER,t.COPY_WRITE_BUFFER,e.frontierBytes,e.frontierBytes,o)}else{let a=new Uint8Array(e.scene.buffer,e.scene.pointOffset+e.frontierBytes,o);t.bindBuffer(t.ARRAY_BUFFER,e.buffer),t.bufferSubData(t.ARRAY_BUFFER,e.frontierBytes,a)}return this.#re()?-1:(e.frontierBytes+=o,e.staging||(this.#E=e.frontierBytes/8),o)}#xe(e,n){let t=this.#r;if(!t||n<=0)return 0;let i=e.scene.total*8,o=[...e.dirtyBlocks].sort((s,l)=>s-l),a=0;for(let s of o){let l=s*O,c=Math.min(i,l+O),d=c-l;if(c>e.frontierBytes||a+d>n)continue;let p=new Uint8Array(e.scene.buffer,e.scene.pointOffset+l,d);if(t.bindBuffer(t.ARRAY_BUFFER,e.buffer),t.bufferSubData(t.ARRAY_BUFFER,l,p),this.#re())return-1;e.dirtyBlocks.delete(s),a+=d}return a}#Ce(){let e=this.#f,n=this.#r,t=this.#l;if(!e||!n||!t)return;if(this.#F||!t.pageActive||e.scene!==this.#_||e.revision!==e.scene.revision||e.context!==this.#T||e.generation!==t.generation||oe(t)!==e.context||t.resources.scene.value!==e.scene||e.contextGeneration!==this.#S||e.staging&&this.#e!==e.buffer||!e.staging&&this.#h!==e.buffer){this.#D(!0);return}let i=e.scene.total*8,o=e.frontierBytes<i,a=be,s=0;try{let l=o&&e.dirtyBlocks.size>0?ut:be,c=this.#me(e,Math.min(l,a));if(c<0)throw new Error("gpu-frontier-upload-failed");a-=c,s+=c;let d=[...e.dirtyBlocks].some(u=>Math.min(i,(u+1)*O)<=e.frontierBytes),p=o&&d?Math.min(ut,a):d?a:0,h=this.#xe(e,p);if(h<0)throw new Error("gpu-dirty-upload-failed");a-=h,s+=h;let f=[...e.dirtyBlocks].some(u=>Math.min(i,(u+1)*O)<=e.frontierBytes);if(o&&a>0&&!f){let u=this.#me(e,a);if(u<0)throw new Error("gpu-frontier-upload-failed");a-=u,s+=u}}catch{this.#Z();return}if(s>0&&!this.#fe(e)){this.#D(!0);return}if(e.frontierBytes<i||e.dirtyBlocks.size>0){this.requestRender();return}if(!this.#fe(e)){this.#D(!0);return}if(e.staging){let l=this.#l,c=l?l.workflow==="draw"?"top":l.view:e.preferenceView,d=this.#h;this.#h=e.buffer,this.#e=d,this.#K(e.buffer),this.#a=e.scene,this.#b=e.context,this.#f=null,this.#E=e.scene.total,this.#m=e.scene.total;let p=this.#W(e.scene,e.preserveCamera,e.previousScene,!0,c);if(l&&p){let h=l.workflow==="draw"?"top":l.view;this.#i=this.#te(h,l,p),this.#x=this.#ne(h,l,p),this.#H()}}else this.#f=null,this.#a=e.scene,this.#b=e.context,this.#E=e.scene.total,this.#m=e.scene.total}#fe(e){let n=this.#l;return n?!this.#F&&n.pageActive&&e.scene===this.#_&&e.revision===e.scene.revision&&e.context===this.#T&&e.generation===n.generation&&oe(n)===e.context&&n.resources.scene.value===e.scene&&e.contextGeneration===this.#S&&(e.staging?this.#e===e.buffer:this.#h===e.buffer):!1}#ve(){this.#U(),this.#M="canvas2d",this.#c=document.createElement("canvas"),this.#s=this.#c.getContext("2d",{alpha:!0}),this.#s||(this.#M="unavailable",this.#n.onProblem?.("renderer-unavailable"))}#ke(e){let n=this.#s,t=this.#c;if(!n||!t)return;this.#U();let i={scene:e,matrix:new Float32Array(this.#I),width:this.#R.width,height:this.#R.height};this.#q=i;let o=Math.min(window.devicePixelRatio||1,1024/Math.max(1,i.width),1024/Math.max(1,i.height));t.width=Math.max(1,Math.round(i.width*o)),t.height=Math.max(1,Math.round(i.height*o)),n.setTransform(o,0,0,o,0,0),this.#m=0;let a=new DataView(e.buffer,e.pointOffset,e.total*8),s=Math.max(1,Math.ceil(e.total/5e4)),l=0,c=0,d=()=>{if(this.#F||!this.#l?.pageActive||this.#M!=="canvas2d"||e!==this.#a||i!==this.#q)return;this.#$=null;let p=performance.now(),h=0;for(;l<e.total&&h<2e3;){let f=l*8,u=this.#Q(a.getUint16(f,!0),a.getUint16(f+2,!0),a.getUint8(f+4),!0,i.matrix,i);if(u&&(n.fillStyle=`rgb(${a.getUint8(f+5)} ${a.getUint8(f+6)} ${a.getUint8(f+7)})`,n.fillRect(u.x-.75,u.y-.75,1.5,1.5)),l+=s,h+=1,c+=1,h%64===0&&performance.now()-p>=4)break}this.#m=c,this.requestRender(),l<e.total&&(this.#$=window.setTimeout(d,0))};this.#$=window.setTimeout(d,0)}#U(){this.#$!==null&&window.clearTimeout(this.#$),this.#$=null,this.#q=null}#Y(){let e=this.#o.getBoundingClientRect();return this.#R={width:e.width,height:e.height,left:e.left,top:e.top},this.#R}#ie(){let e=Math.min(window.devicePixelRatio||1,3);if(!this.#se||this.#l?.quality!=="auto")return e;let n=Math.max(1,this.#R.width*this.#R.height);return Math.min(e,Math.max(1,Math.sqrt(Gt/n)))}#Me(){let e=!1,n=this.#Y(),t=this.#ie(),i=Math.max(1,Math.round(n.width*t)),o=Math.max(1,Math.round(n.height*t));for(let a of[this.#o,this.#t])(a.width!==i||a.height!==o)&&(a.width=i,a.height=o,e=!0);e&&this.#n.onViewport?.()}#ae(){let e=this.#R,n=Math.max(.2,e.width/Math.max(1,e.height)),t=Math.cos(this.#i.pitch)*this.#i.distance,i=[this.#i.targetX+Math.sin(this.#i.yaw)*t,Math.sin(this.#i.pitch)*this.#i.distance,this.#i.targetZ+Math.cos(this.#i.yaw)*t],o=[this.#i.targetX,0,this.#i.targetZ],a=en(i,o),s=this.#i.orthographic?Qt(-this.#i.distance*n,this.#i.distance*n,-this.#i.distance,this.#i.distance,-this.#g*4,this.#g*4):Jt(bt,n,.02,Math.max(60,this.#g*12));return jt(s,a)}requestRender(){this.#P!==null||this.#F||this.#l?.pageActive===!1||(this.#P=window.requestAnimationFrame(()=>{this.#P=null,this.#Pe()}))}#Pe(){if(this.#F||this.#l?.pageActive===!1)return;let e=performance.now();this.#Ce(),this.#Me(),this.#I=this.#ae(),this.#M==="webgl2"?this.#Se():this.#Ee(),this.#Ae(),this.#O=performance.now()-e,this.#O>18?(this.#G+=1,this.#G>=3&&this.#l?.quality==="auto"&&(this.#j=Math.max(.25,this.#j*.75))):this.#G=Math.max(0,this.#G-1)}#Se(){let e=this.#r,n=this.#a;if(!e||(e.viewport(0,0,this.#o.width,this.#o.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),!n||!this.#p||!this.#y||!this.#h))return;if(this.#l?.view==="top"&&this.#l.appearance==="rooms"){this.#m=0;return}e.useProgram(this.#p),e.bindVertexArray(this.#y),e.uniformMatrix4fv(this.#w,!1,this.#I),e.uniform2f(this.#B,(n.metadata.span[0]-1)/2,(n.metadata.span[1]-1)/2),e.uniform1f(this.#u,n.metadata.metersPerCell);let t=this.#ie(),i=Math.min(n.total,this.#E),o=Math.max(Math.ceil(1/this.#j),this.#se&&this.#l?.quality==="auto"?Math.ceil(i/Vt):1),a=Math.min(n.floorCount,i),s=Math.min(n.surfaceCount,Math.max(0,i-n.floorCount)),l=Math.ceil(a/o),c=Math.ceil(s/o);l>0&&(this.#K(this.#h,o),e.bindVertexArray(this.#y),e.uniform1f(this.#A,this.#o.height*.038),e.uniform1f(this.#C,4.5*t),e.drawArrays(e.POINTS,0,l)),c>0&&(this.#K(this.#h,o,n.floorCount),e.bindVertexArray(this.#y),e.uniform1f(this.#A,this.#o.height*.05),e.uniform1f(this.#C,7*t),e.drawArrays(e.POINTS,0,c)),e.bindVertexArray(null),this.#m=l+c}#Ee(){let e=this.#a;if(this.#M!=="canvas2d"||!e||this.#l?.view==="top"&&this.#l.appearance==="rooms"){this.#U(),this.#m=0;return}let n=this.#q;(!n||n.scene!==e||n.width!==this.#R.width||n.height!==this.#R.height||!n.matrix.every((t,i)=>t===this.#I[i]))&&this.#ke(e)}#Re(e,n,t=0){let i=this.#a;return i?[-(e-(i.metadata.span[0]-1)/2)*i.metadata.metersPerCell,t*i.metadata.metersPerCell,(n-(i.metadata.span[1]-1)/2)*i.metadata.metersPerCell]:null}#Q(e,n,t=0,i=!0,o=this.#I,a=this.#R){let s=this.#Re(e,n,t);if(!s)return null;let[l,c,d]=s,p=(o[0]??0)*l+(o[4]??0)*c+(o[8]??0)*d+(o[12]??0),h=(o[1]??0)*l+(o[5]??0)*c+(o[9]??0)*d+(o[13]??0),f=(o[3]??0)*l+(o[7]??0)*c+(o[11]??0)*d+(o[15]??0);if(f<=.001)return null;let u=p/f,x=h/f;return!Number.isFinite(u)||!Number.isFinite(x)||i&&(Math.abs(u)>1.15||Math.abs(x)>1.15)?null:{x:(u*.5+.5)*a.width,y:(-x*.5+.5)*a.height}}#X(e,n,t=0,i=!0,o=this.#I){let a=this.#a;if(!a)return null;let s=e/a.metadata.metersPerCell-a.metadata.origin[0],l=n/a.metadata.metersPerCell-a.metadata.origin[1];return this.#Q(s,l,t,i,o)}#Ae(){let e=this.#v,n=this.#a,t=this.#l;if(!e)return;let i=this.#ie(),o=this.#R;if(e.setTransform(i,0,0,i,0,0),e.clearRect(0,0,o.width,o.height),!n||!t)return;let a=this.#le;this.#M==="canvas2d"&&this.#c&&!(t.view==="top"&&t.appearance==="rooms")&&e.drawImage(this.#c,0,0,o.width,o.height);let s=this.#Te(t);if(t.labelsVisible||t.view==="top"&&t.appearance==="rooms"){e.lineWidth=1.5,e.font="600 12px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle";let h=[];for(let f of n.metadata.rooms){let u=s.has(f.name.toLocaleLowerCase());e.strokeStyle=u?M(a.accent,1):M(a.quiet,.7),e.fillStyle=u?M(a.accent,.26):t.view==="top"&&t.appearance==="rooms"?M(a.roomFill,.94):M(a.plate,.04),e.beginPath();let x=Math.max(1,Math.ceil(f.boundary.length/512)),_=!1;for(let k=0;k<f.boundary.length;k+=x){let U=f.boundary[k];if(!U)continue;let B=this.#Q(U[0],U[1],.2,!1);B&&(_?e.lineTo(B.x,B.y):e.moveTo(B.x,B.y),_=!0)}if(_&&(e.closePath(),e.fill(),e.stroke()),!t.labelsVisible)continue;let E=this.#Q(f.center[0],f.center[1],1);if(!E)continue;let q=e.measureText(f.name).width,R=new DOMRect(E.x-q/2-6,E.y-10,q+12,20);h.some(k=>R.left<k.right+8&&R.right+8>k.left&&R.top<k.bottom+4&&R.bottom+4>k.top)||(h.push(R),e.fillStyle=M(a.plate,.88),e.fillRect(R.x,R.y,R.width,R.height),e.fillStyle=M(a.text,1),e.fillText(f.name,E.x,E.y))}}let l=this.#d,c=l&&A(t,l.capture)?l.circles:t.draw.circles;if((t.workflow==="draw"||t.workflow==="areaReview")&&c.length)if(e.fillStyle=M(a.accent,.22),e.strokeStyle=M(a.accent,.92),e.lineWidth=1.5,t.draw.outline?.closed){e.beginPath();for(let h of c)this.#ye(e,h,!1);e.fill()}else for(let h of c)this.#ye(e,h);let d=t.draw.outline;if(d&&(t.workflow==="draw"||t.workflow==="areaReview")&&!(t.workflow==="draw"&&t.draw.tool==="outline")&&(e.beginPath(),d.points.forEach((h,f)=>{let u=this.#X(h.x,h.y,0,!1);u&&(f===0?e.moveTo(u.x,u.y):e.lineTo(u.x,u.y))}),d.closed&&e.closePath(),e.strokeStyle=M(a.accent,1),e.lineWidth=2,e.stroke()),this.#z&&t.workflow==="draw"&&(t.draw.tool==="paint"||t.draw.tool==="erase")){let h=this.#X(this.#z.x,this.#z.y),f=this.#X(this.#z.x+t.draw.brushMeters/2,this.#z.y);h&&f&&(e.beginPath(),e.arc(h.x,h.y,Math.max(2,Math.hypot(f.x-h.x,f.y-h.y)),0,Math.PI*2),e.strokeStyle=M(a.accent,1),e.lineWidth=2,e.stroke())}let p=t.resources.pose.value;if(Y(t)&&p?.position){let h=this.#X(p.position[0],p.position[1],3);h&&(e.beginPath(),e.arc(h.x,h.y,7,0,Math.PI*2),e.fillStyle=M(a.accent,1),e.fill(),e.strokeStyle=M(a.onAccent,1),e.lineWidth=3,e.stroke())}}#Te(e){let n=e.resources.plans.value?.rooms||e.resources.areas.value?.rooms||[],t=new Set(e.workflow==="plan"?e.planDraft.rooms.map(o=>o.roomId):e.selection.roomIds),i=new Set;for(let o of n)t.has(o.roomId)&&i.add(o.name.toLocaleLowerCase());return i}#ye(e,n,t=!0){let i=this.#X(n.x,n.y),o=this.#X(n.x+n.radius,n.y);if(!i||!o)return;let a=Math.max(1,Math.hypot(o.x-i.x,o.y-i.y));t&&e.beginPath(),e.moveTo(i.x+a,i.y),e.arc(i.x,i.y,a,0,Math.PI*2),t&&(e.fill(),e.stroke())}setPalette(e){this.#le=e,this.requestRender()}setCursor(e){this.#z=e,this.requestRender()}mapToScreen(e){if(!this.#a)return null;let n=this.#Y();return!n.width||!n.height?null:this.#X(e.x,e.y,0,!1,this.#ae())}offsetMapPoint(e,n,t){let i=this.mapToScreen(e);if(!i)return null;let o=this.#R,a=this.#i.distance*2/o.height;return this.screenToMap(o.left+i.x+n/a,o.top+i.y+t/a)}screenToMap(e,n){let t=this.#a;if(!t)return null;let i=this.#Y();if(!i.width||!i.height)return null;let o=this.#ae(),a=(e-i.left)/i.width*2-1,s=1-(n-i.top)/i.height*2,l=o[0]-a*o[3],c=o[8]-a*o[11],d=o[1]-s*o[3],p=o[9]-s*o[11],h=l*p-c*d;if(!Number.isFinite(h)||Math.abs(h)<1e-12)return null;let f=a*o[15]-o[12],u=s*o[15]-o[13],x=(f*p-c*u)/h,_=(l*u-f*d)/h;if(o[3]*x+o[11]*_+o[15]<=0)return null;let E=-x/t.metadata.metersPerCell+(t.metadata.span[0]-1)/2,q=_/t.metadata.metersPerCell+(t.metadata.span[1]-1)/2;return{x:(E+t.metadata.origin[0])*t.metadata.metersPerCell,y:(q+t.metadata.origin[1])*t.metadata.metersPerCell}}roomAt(e,n){let t=this.screenToMap(e,n),i=this.#a,o=this.#l;if(!t||!i||!o)return null;let a=t.x/i.metadata.metersPerCell-i.metadata.origin[0],s=t.y/i.metadata.metersPerCell-i.metadata.origin[1],l=i.metadata.rooms.find(c=>mt(a,s,c.boundary));return l?this.#Le(l,o):null}containsMapPoint(e){let n=this.#a;if(!n)return!1;let t=e.x/n.metadata.metersPerCell-n.metadata.origin[0],i=e.y/n.metadata.metersPerCell-n.metadata.origin[1];return n.metadata.rooms.some(o=>mt(t,i,o.boundary))}#Le(e,n){return(n.resources.plans.value?.rooms||n.resources.areas.value?.rooms||[]).find(i=>i.name.localeCompare(e.name,void 0,{sensitivity:"base"})===0)?.roomId||e.id}selectRoomAt(e,n){let t=this.roomAt(e,n);t&&this.#n.onRoom?.(t)}fit(e=!0,n=this.#l?.workflow==="draw"?"top":this.#l?.view??"three"){let t=n==="top";this.#i=t?{yaw:0,pitch:Math.PI/2-.018,distance:this.#k,targetX:0,targetZ:0,orthographic:!0}:{yaw:-Math.PI/4,pitch:.82,distance:this.#L,targetX:0,targetZ:0,orthographic:!1},this.#x=!0,this.requestRender(),e&&this.#H()}zoomAt(e,n,t){let i=n===void 0||t===void 0?null:this.screenToMap(n,t),o=this.#ce();if(this.#i={...this.#i,distance:P(this.#i.distance/e,o.minimum,o.maximum)},this.#x=!1,i&&n!==void 0&&t!==void 0){let a=this.screenToMap(n,t);a&&(this.#i={...this.#i,targetX:this.#i.targetX-(i.x-a.x),targetZ:this.#i.targetZ+(i.y-a.y)})}this.requestRender(),this.#H(n,t)}panBy(e,n){this.setCamera(this.cameraAfterPan(this.#i,e,n))}orbitBy(e,n){if(this.#i.orthographic){this.panBy(e,n);return}this.#i={...this.#i,yaw:W(this.#i.yaw+e*.006),pitch:P(this.#i.pitch-n*.004,.18,1.38)},this.#x=!1,this.requestRender(),this.#H()}rotateBy(e){this.#i={...this.#i,yaw:W(this.#i.yaw+e)},this.#x=!1,this.requestRender(),this.#H()}#H(e,n){let t=this.#i.orthographic?this.#k:this.#L,i=e===void 0||n===void 0?this.#R:this.#Y(),o=e===void 0||n===void 0||!i.width||!i.height?void 0:{xPercent:P((e-i.left)/i.width*100,0,100),yPercent:P((n-i.top)/i.height*100,0,100)};this.#n.onCamera?.(this.camera,Math.round(t/this.#i.distance*100),o)}diagnostics(){return{mode:this.#M,contextGeneration:this.#S,sceneRevision:this.#a?.revision??null,sourcePoints:this.#a?.total??0,renderedPoints:this.#m,lastFrameMs:Math.round(this.#O*100)/100,slowFrames:this.#G,cameraDistance:this.#i.distance,fitDistance:this.#i.orthographic?this.#k:this.#L,fitActive:this.#x}}#be=e=>{e.preventDefault(),this.#Z()};#ge=()=>{let e=this.#a,n=this.#b;this.#U(),this.#ee(),this.#ue();let t=this.#_,i=this.#T,o=this.#l;if(this.#M==="webgl2"&&t&&i&&o?.pageActive){let a=e!==null&&n===i;this.#oe(),this.#a=t,this.#b=i;let s=null;if(t!==e&&(s=this.#W(t,a&&!this.#x,e,a,o.workflow==="draw"?"top":o.view)),this.#J(t,i,o,!1,e,a&&!this.#x),s){let l=o.workflow==="draw"?"top":o.view;this.#i=this.#te(l,o,s),this.#x=this.#ne(l,o,s),this.#H()}}this.requestRender()};#ee(){this.#D(!1);let e=this.#r;e&&(this.#h&&e.deleteBuffer(this.#h),this.#e&&e.deleteBuffer(this.#e),this.#y&&e.deleteVertexArray(this.#y),this.#p&&e.deleteProgram(this.#p)),this.#h=null,this.#e=null,this.#y=null,this.#p=null,this.#r=null,this.#E=0,this.#m=0}dispose(){this.#F||(this.#F=!0,this.#V.disconnect(),this.#o.removeEventListener("webglcontextlost",this.#be),this.#o.removeEventListener("webglcontextrestored",this.#ge),this.#P!==null&&window.cancelAnimationFrame(this.#P),this.#P=null,this.#U(),this.#ee(),this.#c=null,this.#s=null,this.#v=null,this.#d=null,this.#a=null,this.#l=null,this.#_=null,this.#T=null)}};var tn="matic-workspace-intent",nn="matic-workspace-action",gt="navigation-help",wt=(r,e)=>{let n=(i,o,a)=>$(e,i,o,a);if(r.dataMode==="history"||r.floor.readOnly)return r.map.available?n("v4_saved_map_description","Saved read-only map for {floor}. Live robot position is hidden.",{floor:r.floor.displayName}):r.resources.scene.status==="loading"?n("v4_saved_map_loading_description","The saved map is loading."):n("v4_saved_map_unavailable_description","This saved map is unavailable.");if(!se(r))return n("v4_private_map_unavailable","The current private map is not available.");let t=Y(r)?n("v4_robot_position_verified","The robot's position is confirmed."):n("v4_robot_position_hidden","The robot position is not shown.");return n("v4_live_map_description","Live map for {floor}. {pose}",{floor:r.floor.displayName,pose:t})},ge=class extends Pe{constructor(){super();this.state=_e();this.narrow=!1;this.#o=null;this.#t=null;this.#n=null;this.#r=!1;this.#v=!1;this.#s=null;this.#c=null;this.#p=null;this.#h={capture:!0,handleEvent:n=>{n.pointerType==="touch"&&!n.isPrimary&&this.outlineEditor?.cancel()}};new X(this,{container:()=>this.renderRoot?.querySelector(".camera-steps")??null,items:"button"}),new X(this,{container:()=>this.renderRoot?.querySelector(".draw-tools")??null,items:"button"})}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},outlineEditor:{attribute:!1},narrow:{type:Boolean,reflect:!0}}}static{this.styles=[Se,Ee,Re,Ce`
    :host {
      display: block;
      min-width: 0;
      min-height: 0;
      block-size: 100%;
      color: var(--ms-text);
    }


    button, input { font: inherit; }

    .map-root {
      position: relative;
      overflow: hidden;
      min-block-size: 22rem;
      block-size: 100%;
      outline: none;
      isolation: isolate;
      --ms-local: var(--ms-surface-sunken);
      background: var(--ms-local);
      touch-action: none;
      cursor: grab;
      container-type: inline-size;
    }

    .map-root.navigating { cursor: grabbing; }
    .map-root[data-workflow="draw"][data-draw-tool="paint"],
    .map-root[data-workflow="draw"][data-draw-tool="erase"] { cursor: crosshair; }
    .map-root[data-workflow="draw"][data-draw-tool="pan"] { cursor: grab; }
    .map-root[data-workflow="draw"][data-draw-tool="pan"].navigating { cursor: grabbing; }

    /* An outline on .map-root repaints the whole page layer on every canvas
       frame; a positioned overlay keeps the ring out of the frame path. */
    .map-root:focus-visible::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 5;
      border: 3px solid var(--ms-resolved-indicator, var(--ms-accent));
      pointer-events: none;
    }

    /* Navigation has stable corners; only orbit controls follow the sheet. */
    .map-rail { --help-top: calc(44px + 2 * var(--ms-space-2)); --help-bottom: 116px; position: absolute; inset: 0.75rem; inset-inline: max(0.75rem, var(--ms-safe-left)) max(0.75rem, var(--ms-safe-right)); z-index: 4; pointer-events: none; }
    .map-rail > * { pointer-events: auto; }
    slot[name="scrim"] { display: contents; pointer-events: none; }
    ::slotted(.sheet-scrim) { pointer-events: auto; }
    .map-context { position: absolute; inset-block-start: 0; inset-inline-start: 0; display: flex; gap: var(--ms-space-2); align-items: center; max-inline-size: calc(100% - 60px); }
    ::slotted(.floor-switcher) { min-inline-size: 0; inline-size: 9rem; min-block-size: 44px; background-color: var(--ms-surface-card); color: var(--ms-text); }
    .view-switch { flex: none; }
    .map-tools { position: absolute; inset-block-start: 0; inset-inline-end: 0; }
    .map-extras { position: absolute; inset-block-end: calc(var(--map-sheet-offset, 0px) + 52px); inset-inline-end: 0; display: flex; }
    .appearance-switch { position: absolute; inset-block-start: calc(44px + 2 * var(--ms-space-2)); inset-inline-start: 0; }
    .camera-steps { position: absolute; inset-block-end: var(--map-sheet-offset, 0px); inset-inline-end: 0; }
    .map-root:has(.selection-chip) .camera-steps { inset-block-end: calc(var(--map-sheet-offset, 0px) + 4rem); }
    .map-root:has(.selection-chip) .map-extras { inset-block-end: calc(var(--map-sheet-offset, 0px) + 4rem + 52px); }
    .map-rail:has(.appearance-switch) { --help-top: calc(88px + 4 * var(--ms-space-2)); }
    .map-root:has(.selection-chip) .map-rail { --help-bottom: calc(116px + 4rem); }
    .navigation-help { position: absolute; inset-block-start: var(--help-top); inset-inline-end: 0; max-block-size: calc(100% - var(--help-top) - var(--help-bottom)); overflow: auto; box-sizing: border-box; }
    :host([narrow]) .map-context { max-inline-size: calc(100% - 52px); gap: var(--ms-space-1); }
    :host([narrow]) ::slotted(.floor-switcher) { inline-size: 7rem; }
    :host([narrow]) .fit { min-inline-size: 44px; padding-inline: var(--ms-space-2); }
    :host([narrow]) .fit .ms-btn__label { display: none; }

    .map-tools, .view-switch, .appearance-switch, .camera-steps { display: flex; }

    .map-dock, .map-scale, .map-message { position: absolute; z-index: 4; }

    .map-dock {
      inset-inline-start: 50%;
      inset-block-end: calc(0.75rem + var(--map-sheet-offset, 0px));
      translate: -50% 0;
      max-inline-size: calc(100% - 1rem);
    }
    .map-dock .draw-tools--row { flex-direction: row; gap: var(--ms-space-1); }
    .map-dock .draw-tools button { padding-inline: var(--ms-space-2); }
    .selection-chip {
      display: flex;
      align-items: center;
      gap: var(--ms-space-3);
      padding: var(--ms-space-1) var(--ms-space-1) var(--ms-space-1) var(--ms-space-3);
      font-size: var(--ms-t-sm);
      font-weight: var(--ms-w-bold);
      white-space: nowrap;
    }

    .navigation-help {
      inline-size: 22rem;
      max-inline-size: 100%;
      padding: 0.8rem 0.9rem;
      font-size: 0.74rem;
      line-height: 1.45;
    }
    .navigation-help header { display: flex; align-items: center; justify-content: space-between; gap: var(--ms-space-2); margin-block-end: 0.5rem; }
    .navigation-help h2 { margin: 0; font-size: var(--ms-t-sm); font-weight: var(--ms-w-bold); }
    .navigation-help dl { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.35rem 0.65rem; margin: 0; }
    .navigation-help dt { font-weight: 750; }
    .navigation-help dd { margin: 0; color: var(--ms-text-quiet); }

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
    .keyboard-aim { display: none; position: absolute; z-index: 3; inset: 50% auto auto 50%; inline-size: 20px; block-size: 20px; translate: -50% -50%; border: 2px solid white; outline: 2px solid #111; border-radius: 50%; pointer-events: none; }
    .keyboard-aim::after { content: "+"; position: absolute; inset: 50% auto auto 50%; translate: -50% -50%; color: #111; font: bold 20px/1 sans-serif; text-shadow: 0 0 2px white; }
    .map-root:focus-visible .keyboard-aim { display: block; }
    .scene-window {
      position: absolute;
      inset: 0;
      inset-block-end: var(--map-sheet-offset, 0px);
      overflow: hidden;
    }

    .scene-window[hidden] { display: none; }

    .scene-canvas,
    .overlay-canvas {
      position: absolute;
      inset: 0;
      inline-size: 100%;
      block-size: 100%;
    }

    .scene-canvas { z-index: 0; }
    .overlay-canvas { z-index: 1; pointer-events: none; }

    .map-scale {
      inset-inline-start: max(0.9rem, var(--ms-safe-left));
      inset-block-end: calc(5.2rem + var(--map-sheet-offset, 0px));
      display: grid;
      justify-items: start;
      gap: 0.25rem;
      border: 0;
      background: transparent;
      box-shadow: none;
      color: var(--ms-text-quiet);
      font-size: 0.7rem;
      font-weight: 650;
    }

    .map-root[data-draw-tool="outline"] .map-scale { inset-block-end: auto; inset-block-start: 76px; }

    .scale-line {
      inline-size: var(--scale-width);
      block-size: 0.42rem;
      border-inline: 2px solid currentColor;
      border-block-end: 2px solid currentColor;
    }

    .map-message {
      inset: calc((100% - var(--map-sheet-offset, 0px)) / 2) auto auto 50%;
      translate: -50% -50%;
      inline-size: min(22rem, calc(100% - 2rem));
      padding: 1rem 1.1rem;
      text-align: center;
    }

    .map-message strong { display: block; margin-block-end: 0.35rem; }
    .map-message span { color: var(--ms-text-quiet); font-size: 0.82rem; }

    .sr-only {
      position: absolute;
      overflow: hidden;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      clip: rect(0 0 0 0);
      white-space: nowrap;
    }

/* Four labelled buttons span most of the map at desktop width; icons with tooltips keep the rail a narrow column. */
.map-tools .ms-btn__label { position: absolute; overflow: hidden; inline-size: 1px; block-size: 1px; margin: -1px; padding: 0; border: 0; clip-path: inset(50%); white-space: nowrap; }
@container (max-width: 29rem) {
.map-tools button, .map-dock .draw-tools button { padding-inline: 0; inline-size: var(--ms-control); }
/* Collapse the label to assistive text, never display:none. Hiding it would
   delete the accessible name and break every getByRole({ name }) query at
   narrow widths -- which is what the previous font-size:0 plus ::first-letter
   trick did, while also rendering the toolbar as "P E M U R D". */
.map-dock .draw-tools .ms-btn__label { position: absolute; overflow: hidden; inline-size: 1px; block-size: 1px; margin: -1px; padding: 0; border: 0; clip-path: inset(50%); white-space: nowrap; }
}
@media (forced-colors: active) {
/* The map is painted to canvas, so the UA would otherwise invert it. The
   previous block here targeted the mock-map layer that the renderer replaced,
   which meant the map had no forced-colors treatment at all. */
.scene-canvas, .overlay-canvas { forced-color-adjust: none; }
.map-root { border: 1px solid CanvasText; }
.map-root:focus-visible::after { border-color: Highlight; }
}
  `]}#o;#t;#n;#r;#v;#s;#c;#p;#h;#e(n,t,i){return $(this.localize,n,t,i,this.dates)}connectedCallback(){super.connectedCallback(),this.#s??=je(()=>this.#w()),this.updateComplete.then(()=>this.#N())}firstUpdated(){this.#N()}#N(){if(!this.isConnected||this.#t||this.#n)return;let n=this.renderRoot.querySelector(".map-root"),t=this.renderRoot.querySelector(".scene-canvas"),i=this.renderRoot.querySelector(".overlay-canvas");!n||!t||!i||(this.#t=new re(t,i,{onViewport:()=>{this.outlineEditor?.cancel(),this.requestUpdate()},onCamera:(o,a,s)=>{this.#u({type:"set-camera",view:this.state.workflow==="draw"?"top":this.state.view,camera:{yaw:o.yaw,pitch:o.pitch,zoom:a/100,targetX:o.targetX,targetZ:o.targetZ}}),this.state.workflow==="draw"&&a!==this.state.draw.zoomPercent&&this.#u({type:"set-zoom",value:a,...s?{originX:s.xPercent,originY:s.yPercent}:{}})},onCameraPreferences:o=>{for(let a of["top","three"]){let s=o[a];s&&this.#u({type:"set-camera",view:a,camera:s})}},onRoom:o=>this.#u({type:"toggle-room",roomId:o}),onProblem:()=>this.#A("renderer-problem")}),this.#n=new j(n,this.#t,{state:()=>this.state,onOutlinePoint:(o,a)=>{this.outlineEditor?.addPoint(o,a)},onCircles:(o,a)=>this.#u({type:"set-draft-circles",circles:o,coordinateEdit:a}),onCirclePreview:(o,a)=>this.#t?.setCirclePreview(o,a),onRoom:o=>this.#u({type:"toggle-room",roomId:o})}),this.#t.setState(this.state),this.#w())}disconnectedCallback(){this.#s?.(),this.#s=null,this.#B(),this.outlineEditor?.cancel(),this.#n?.dispose(),this.#n=null,this.#t?.dispose(),this.#t=null,super.disconnectedCallback()}willUpdate(n){n.has("outlineEditor")&&this.outlineEditor?.attach(this,()=>this.#t,t=>this.#u(t))}updated(n){this.#v&&(this.#v=!1,this.renderRoot.querySelector(".navigation-help button")?.focus()),n.has("state")&&(this.#n?.observeState(this.state),this.outlineEditor?.observeState(this.state),this.#t?.setState(this.state))}#y(){let n=this.renderRoot?.querySelector(".map-root");!n||!this.#t||this.#t.setPalette(Ze(n))}#w(){this.#B(),this.#c=window.requestAnimationFrame(()=>{this.#c=null,this.#p=window.setTimeout(()=>{this.#p=null,this.#y()},0)})}#B(){this.#c!==null&&window.cancelAnimationFrame(this.#c),this.#p!==null&&window.clearTimeout(this.#p),this.#c=null,this.#p=null}#u(n){this.dispatchEvent(new CustomEvent(tn,{detail:n,bubbles:!0,composed:!0}))}#A(n){this.dispatchEvent(new CustomEvent(nn,{detail:{id:n},bubbles:!0,composed:!0}))}#C(n){this.#o=n.currentTarget,this.#r=!this.#r,this.#v=this.#r,this.requestUpdate()}#l(){if(!this.#r)return;this.#r=!1,this.requestUpdate();let n=this.#o;n?.isConnected&&n.focus()}#d(){this.#u({type:"clear-selection"})}#a(n,t){this.#t?.orbitBy(n,t)}#b(n){if(!nt(n)&&!(n.ctrlKey||n.metaKey||n.altKey)&&n.key==="Escape"){if(n.preventDefault(),this.#r){this.#l();return}this.#u({type:"dismiss-top-layer"});return}}rendererDiagnostics(){return this.#t?.diagnostics()??null}canvasIdentity(){return{scene:this.renderRoot.querySelector(".scene-canvas"),overlay:this.renderRoot.querySelector(".overlay-canvas")}}#_(){if(!this.state.host.connected)return{title:this.#e("v4_reconnecting","Reconnecting"),detail:this.#e("v4_reconnecting_detail","The map is read only until Home Assistant reconnects.")};if(!this.state.host.administrator)return{title:this.#e("v4_admin_required","Administrator access required"),detail:this.#e("v4_private_map_hidden","Private map data is hidden.")};if(this.state.host.robotCount===0)return{title:this.#e("v4_no_robot","No robot set up"),detail:this.#e("v4_no_robot_detail","Set up a robot before opening its map.")};let n=this.state.notice;return this.state.dataMode==="live"&&this.state.floor.readOnly&&this.state.map.available&&n?.key==="v4_notice_saved_map"?{title:this.#e("v4_saved_map_read_only_title","Saved map is read only"),detail:this.#e(n.key,n.fallback,n.placeholders)}:this.state.dataMode==="history"?!this.state.map.available&&this.state.resources.scene.status==="loading"?{title:this.#e("v4_loading_saved_map","Loading saved map"),detail:this.#e("v4_loading_saved_map_detail","This read-only snapshot is still preparing.")}:this.state.map.available?null:{title:this.#e("v4_saved_map_unavailable","Saved map unavailable"),detail:this.#e("v4_saved_map_unavailable_detail","Choose another snapshot or return to the live map.")}:this.state.host.robotConnected?this.state.coherence==="verifying"||this.state.coherence==="booting"?{title:this.#e("v4_locating_map","Locating the current map"),detail:this.#e("v4_locating_map_detail","Map controls come back once the robot confirms which floor it is on.")}:!this.state.map.available&&this.state.resources.scene.status==="loading"?{title:this.#e("v4_loading_verified_map","Loading the current map"),detail:this.#e("v4_loading_verified_map_detail","The map is almost ready.")}:this.state.map.available?this.state.activity==="problem"?{title:this.#e("v4_robot_attention","Robot needs attention"),detail:this.#e("v4_robot_attention_detail","Check the robot before starting another task.")}:null:{title:this.#e("v4_map_unavailable","Map unavailable"),detail:this.#e("v4_map_unavailable_detail","The map isn't ready yet. Nothing is shown until it is.")}:{title:this.#e("v4_robot_offline","Robot offline"),detail:this.#e("v4_robot_offline_detail","The last known map stays read only and has no live position.")}}#T(n,t){let i=this.state,o=this.narrow,a=i.workflow==="draw",s=this.#e("v4_how_to_move","How to move the map"),l=n&&!a,c=l&&!o&&i.view==="top",d=l&&i.view==="three",p=!t,h=!o&&!a;return v`
      <div class="map-rail" data-map-control>
        <div class="map-context"><slot name="floor"></slot>
        ${l?v`
          <div class="view-switch ms-surface ms-surface--floating ms-segment" role="group" aria-label=${this.#e("map_view_label","Map view")}>
            <button
              class="ms-btn"
              type="button"
              aria-pressed=${String(i.view==="three")}
              @click=${()=>this.#u({type:"set-view",view:"three"})}
            >${this.#e("map_view_3d","3D")}</button>
            <button
              class="ms-btn"
              type="button"
              aria-pressed=${String(i.view==="top")}
              @click=${()=>this.#u({type:"set-view",view:"top"})}
            >${this.#e("map_view_top","2D")}</button>
          </div>
        `:g}

        </div>
        ${c?v`
          <div class="appearance-switch ms-surface ms-surface--floating ms-segment" role="group" aria-label=${this.#e("map_style_label","Map style")}>
            <button
              class="ms-btn"
              type="button"
              aria-pressed=${String(i.appearance==="photo")}
              @click=${()=>this.#u({type:"set-appearance",appearance:"photo"})}
            >${this.#e("map_style_photo","Photo")}</button>
            <button
              class="ms-btn"
              type="button"
              aria-pressed=${String(i.appearance==="rooms")}
              @click=${()=>this.#u({type:"set-appearance",appearance:"rooms"})}
            >${this.#e("map_style_room_colours","Room colors")}</button>
          </div>
        `:g}

        ${d?v`
          <div class="camera-steps ms-surface ms-surface--floating ms-segment" role="toolbar" aria-orientation="horizontal" aria-label=${this.#e("map_camera_controls","Map camera controls")}>
            <button class="ms-btn ms-btn--icon" type="button" aria-label=${this.#e("map_rotate_left","Rotate left")} aria-keyshortcuts="[" @click=${()=>this.#a(-52,0)}>${S(Ie)}</button>
            <button class="ms-btn ms-btn--icon" type="button" aria-label=${this.#e("map_tilt_down","Lower viewing angle")} aria-keyshortcuts="PageDown" @click=${()=>this.#a(0,30)}>${S(Te)}</button>
            <button class="ms-btn ms-btn--icon" type="button" aria-label=${this.#e("map_tilt_up","Raise viewing angle")} aria-keyshortcuts="PageUp" @click=${()=>this.#a(0,-30)}>${S(Ae)}</button>
            <button class="ms-btn ms-btn--icon" type="button" aria-label=${this.#e("map_rotate_right","Rotate right")} aria-keyshortcuts="]" @click=${()=>this.#a(52,0)}>${S(ze)}</button>
          </div>
        `:g}

        ${p?v`
          <div class="map-tools ms-surface ms-surface--floating ms-segment" role="group" aria-label=${this.#e("v4_map_tools","Map tools")}>
            ${t?g:v`
              <button
                class="fit ms-btn"
                type="button"
                aria-label=${this.#e("v4_fit_map_hint","Fit the whole map on screen")}
                @click=${()=>{this.#t?.fit(),this.#u({type:"fit-map"})}}
                title=${this.#e("v4_fit_map","Fit map")}
              >${S(Le)}<span class="ms-btn__label">${this.#e("v4_fit_map","Fit map")}</span></button>
            `}
          </div>
        `:g}
        ${!t&&h?v`
          <div class="map-extras ms-surface ms-surface--floating ms-segment" role="group" aria-label=${this.#e("v4_map_display","Map display")}>
              <button
                class="labels ms-btn"
                type="button"
                aria-pressed=${String(i.labelsVisible)}
                @click=${()=>this.#u({type:"toggle-labels"})}
                title=${this.#e("v4_room_names","Room names")}
              >${S(Be)}<span class="ms-btn__label">${this.#e("v4_room_names","Room names")}</span></button>
              <button
                class="help ms-btn ms-btn--icon"
                type="button"
                aria-label=${s}
                aria-expanded=${String(this.#r)}
                aria-controls=${gt}
                @click=${this.#C}
                title=${s}
              >${S($e)}</button>
          </div>
        `:g}

        ${this.#r&&n&&h?v`
          <div
            id=${gt}
            class="navigation-help ms-surface ms-surface--floating"
            role="dialog"
            aria-modal="false"
            aria-label=${s}
          >
            <header>
              <h2>${s}</h2>
              <button class="ms-btn ms-btn--sm" type="button" @click=${()=>this.#l()}>${this.#e("v4_close","Close")}</button>
            </header>
            <dl>
              <dt>${this.#e("v4_trackpad","Trackpad")}</dt>
              <dd>${this.#e("v4_trackpad_help","Scroll to pan \xB7 pinch to zoom \xB7 twist to rotate")}</dd>
              <dt>${this.#e("v4_mouse","Mouse")}</dt>
              <dd>${this.#e("v4_mouse_help","Drag to orbit \xB7 Shift, middle, or right drag to pan \xB7 wheel to zoom")}</dd>
              <dt>${this.#e("v4_keyboard","Keyboard")}</dt>
              <dd>${this.#e("v4_keyboard_help","WASD to move \xB7 Q/E or arrows to orbit \xB7 +/\u2212 to zoom \xB7 0 to fit")}</dd>
            </dl>
          </div>
        `:g}
      </div>
    `}#f(n){let t=this.state;if(!n)return g;if(t.workflow==="draw"&&!this.narrow)return v`
        <div class="map-dock ms-surface ms-surface--floating" data-map-control>
          ${Ye(t,{intent:o=>this.#u(o),openBrush:()=>this.#u({type:"set-precision-open",value:!t.precisionOpen}),t:(o,a,s)=>this.#e(o,a,s)},"row")}
        </div>
      `;let i=t.selection.roomIds.length;return t.workflow==="rooms"&&i>0&&!this.narrow?v`
        <div class="map-dock ms-surface ms-surface--floating" data-map-control>
          <div class="selection-chip ms-surface ms-surface--floating" data-map-control>
            <span>${this.#e("v4_rooms_selected","{count} selected",{count:i})}</span>
            <button class="ms-btn ms-btn--sm" type="button" @click=${()=>this.#d()}>${this.#e("v4_clear","Clear")}</button>
          </div>
        </div>
      `:g}render(){let n=this.state,t=xe(n),i=this.#_(),o=n.map.available&&(se(n)||n.dataMode==="history"),a=n.workflow==="draw"&&o,s=n.coherence==="verifying"||n.coherence==="booting";return v`
      <section
        class="map-root"
        tabindex="0"
        aria-label=${this.#e("map_viewport_aria","Interactive Matic 3D map")}
        aria-describedby=${a?n.draw.tool==="outline"?"zone-keyboard-help":"keyboard-draw-help":g}
        data-full-map=${String(n.fullMap)}
        data-workflow=${n.workflow}
        data-draw-tool=${n.draw.tool}
        data-narrow=${this.narrow?"true":g}
        @keydown=${this.#b}
        @pointerdown=${this.#h}
      >
        ${this.#T(o,s)}
        <slot name="scrim"></slot>

        <div
          class="scene-window"
          data-renderer-key="persistent-canvas-v4"
          ?hidden=${!o}
          role=${a?"group":"img"}
          aria-label=${wt(n,this.localize)}
        >
          ${a?v`<span class="keyboard-aim" aria-hidden="true"></span>`:g}
          <canvas class="scene-canvas"></canvas>
          <canvas class="overlay-canvas"></canvas>
          ${a?this.outlineEditor?.render()??g:g}
        </div>

        ${a?v`
          <p id="zone-keyboard-help" class="sr-only">${this.#e("v4_zone_keyboard_help","Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag.")}</p>
          <p id="keyboard-draw-help" class="sr-only">${this.#e("v4_keyboard_draw_help","Keyboard: focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>
          <div class="map-scale" role="img" aria-label=${this.#e("v4_map_scale","Scale {distance}",{distance:t.label})}>
            <span class="scale-line" style=${`--scale-width:${t.pixels}px`}></span>
            <span>${t.label}</span>
          </div>
        `:g}

        ${this.#f(o)}

        ${i&&!(n.fullMap&&(s||!n.host.administrator))?v`
          <div class="map-message ms-surface ms-surface--floating">
            <strong>${i.title}</strong>
            <span>${i.detail}</span>
          </div>
        `:g}
        <div class="sr-only" aria-live="polite" aria-atomic="true">
          ${wt(n,this.localize)}
        </div>
      </section>
    `}};customElements.get(de)||customElements.define(de,ge);export{rn as a,an as b,de as c,un as d,pn as e,mn as f,fn as g,vn as h,yn as i,J as j,ot as k,Dn as l,Nn as m,On as n,Rt as o,Un as p,Hn as q,qn as r,rt as s,m as t,Xn as u,Vn as v,Gn as w,Wn as x,Yn as y,Kn as z,Zn as A,jn as B,Ye as C,We as D,_n as E,xn as F,Cn as G,nt as H,X as I,M as J,Pt as K,Rn as L,je as M,An as N,Tn as O,tn as P,nn as Q};
/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
