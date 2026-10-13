import{A as ts,B as ss,C as ns,D as vs,E as $e,F as Oe,G as ys,H as De,I as gs,J as bs,K as ws,L as ks,M as _s,N as Ss,O as Rs,P as Es,Q as Cs,R as Ms,U as Ps,V as Ts,a as re,b as w,c as Te,d as Ft,e as nt,f as Kt,i as me,j as it,k as Ut,l as Vt,m as jt,n as ot,o as Yt,p as Xt,q as ae,r as fe,s as le,t as Gt,u as R,v as Ae,w as Qt,x as Jt,y as Zt,z as es}from"./chunk-V4ILKGW4.js";import{E as ds,F as lt,G as xe,H as ct,I as dt,J as ut,K as us,L as Y,M as hs,N as ps,O as ms,P as ht,Q as fs,R as O,a as Me,b as Pe,c as is,d as ce,e as rt,f as os,g as rs,h as as,i as at,j as ls,k as cs}from"./chunk-JEY7GUXQ.js";import{C as st,D as Se,I as qt,J as Re,L as Ht,M as zt,N as Nt,R as Ee,S as Bt,X as y,Z as Ce,_ as Ie,c as xt,h as M,j as It,k as oe,n as U,o as $t,p as Ze,q as et,r as Ot,t as Dt,u as Lt,v as Wt,x as _e,z as tt}from"./chunk-6FC35FD6.js";var cn=(r,t)=>{if(t?.recharge_and_resume===!0&&t?.charging===!0)return"recharging";switch(r){case"cleaning":return"cleaning";case"paused":return"paused";case"returning":return"returning";case"docked":return"docked";case"idle":return"idle";case"error":return"problem";default:return"unknown"}},dn=r=>typeof r!="number"||!Number.isFinite(r)?null:Math.round(Math.max(0,Math.min(100,r))),un=r=>{let t=r.attributes?.matic_entry_id;return typeof t=="string"&&t.length>0?t:null},hn=r=>String(r||"local-user").replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",As=r=>{if(typeof r!="string")return"Robot";let t=r.trim();return t&&Array.from(t).length<=128&&!/[\u0000-\u001f\u007f]/u.test(t)?t:"Robot"},Le=class{#e="";#t=null;project(t,e,s=null){let n=t?.states??{},i=e?.config?.entry_id,a=s||(typeof i=="string"?i:null),l=null,d=null,c=a,u=new Map;for(let[D,$]of Object.entries(n)){let E=un($);E&&D.startsWith("vacuum.")&&(u.set(E,{entryId:E,label:As($.attributes?.friendly_name)}),(a?E===a:!l)&&(l=$,d=D,c=E))}let p={connected:t?.connected!==!1,administrator:t?.user?.is_admin===!0,robotConnected:l!==null&&l.state!=="unavailable"&&l.state!=="unknown",robotCount:u.size},h=l?cn(l.state,l.attributes):"unknown",f=dn(l?.attributes?.battery_level),g=t?.selectedLanguage||t?.language||"en",v=t?.locale?.language||g,_=t?.locale?.time_zone==="server"?t.config?.time_zone:void 0,S=this.#t?.dates,k=S?.language===v&&S.timeZone===_?S:{language:v,timeZone:_},b=hn(t?.user?.id),C=As(l?.attributes?.friendly_name),P=[...u.values()].sort((D,$)=>D.label.localeCompare($.label,g,{sensitivity:"base"})),W=[p.connected,p.administrator,p.robotConnected,p.robotCount,h,f??"none",g,v,_??"browser",b,d??"none",c??"none",C,P.map(D=>`${D.entryId}:${D.label}`).join(",")].join("|");return W===this.#e&&this.#t?this.#t:(this.#e=W,this.#t={host:p,activity:h,batteryPercent:f,language:g,dates:k,userKey:b,vacuumEntityId:d,entryKey:c,robotLabel:C,robots:P},this.#t)}};var pn=1024*1024,xs=r=>{let t=s=>{let n=r.sceneHeaderBytes,i=r.scenePointStride,o=r.sceneMaxPoints,a=r.sceneMaxBytes,l=()=>{throw new Error("invalid-scene")};(!(s instanceof ArrayBuffer)||s.byteLength<n||s.byteLength>a)&&l();let d=new DataView(s),c=new Uint8Array(s,0,8),u=String.fromCharCode(...c),p=d.getUint16(8,!0),h=d.getUint16(10,!0),f=d.getUint32(12,!0),g=d.getUint32(16,!0),v=d.getUint32(20,!0),_=g+v,S=n+f;(u!=="MATIC3D\0"||p!==1||h!==i||f>1048576||_<1||_>o||S+_*h!==s.byteLength)&&l();let k;try{k=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(new Uint8Array(s,n,f)))}catch{l()}(!k||typeof k!="object"||Array.isArray(k))&&l();let b=k,C=b.meters_per_cell,P=b.origin_cells,W=b.span_cells;(typeof C!="number"||!Number.isFinite(C)||C<.001||C>.1||!Array.isArray(P)||P.length!==2||!P.every(L=>typeof L=="number"&&Number.isFinite(L))||!Array.isArray(W)||W.length!==2||!W.every(L=>typeof L=="number"&&Number.isFinite(L)&&L>=1&&L<=65536))&&l();let $=(Array.isArray(b.rooms)?b.rooms.slice(0,128):[]).flatMap((L,we)=>{if(!L||typeof L!="object"||Array.isArray(L))return[];let B=L,Q=typeof B.name=="string"?B.name.trim():"";if(!Q||Array.from(Q).length>128||/[\u0000-\u001f\u007f]/u.test(Q))return[];if(!Array.isArray(B.boundary)||B.boundary.length<3||B.boundary.length>8192)return[];let ke=B.boundary.flatMap(j=>{if(!Array.isArray(j)||j.length!==2)return[];let[J,ie]=j;return typeof J=="number"&&Number.isFinite(J)&&typeof ie=="number"&&Number.isFinite(ie)?[[J,ie]]:[]}),te=B.center;if(ke.length<3||!Array.isArray(te)||te.length!==2)return[];let[se,ne]=te;return typeof se!="number"||!Number.isFinite(se)||typeof ne!="number"||!Number.isFinite(ne)?[]:[{id:`scene-room-${we+1}`,name:Q,boundary:ke,center:[se,ne]}]}),E=typeof b.sample_step=="number"&&Number.isInteger(b.sample_step)?Math.max(1,Math.min(o,b.sample_step)):1,q=P,ee=W;return{buffer:s,pointOffset:S,floorCount:g,surfaceCount:v,total:_,metadata:{metersPerCell:C,origin:[q[0],q[1]],span:[ee[0],ee[1]],sampleStep:E,rooms:$}}};return{parseTransfer:t,decodeDeltaTransfer:async(s,n,i)=>{let o=(x="invalid-scene-delta")=>{throw new Error(x)},a=()=>{if(i?.aborted)throw new DOMException("Aborted","AbortError")};(!(s instanceof ArrayBuffer)||s.byteLength<r.deltaHeaderBytes||s.byteLength>r.deltaHeaderBytes+r.deltaMaxBytes||!(n.buffer instanceof ArrayBuffer)||n.buffer.byteLength<r.sceneHeaderBytes||n.buffer.byteLength>r.deltaMaxBytes||!Number.isSafeInteger(n.revision)||n.revision<0)&&o("invalid-scene-delta-size");let l=new DataView(s),d=String.fromCharCode(...new Uint8Array(s,0,8)),c=l.getUint16(8,!0),u=l.getUint16(10,!0),p=l.getBigUint64(12,!0),h=l.getBigUint64(20,!0),f=l.getUint32(28,!0),g=l.getUint32(32,!0),v=Number(p),_=Number(h);(d!=="MATICDLT"||c!==1||u!==1||!Number.isSafeInteger(v)||!Number.isSafeInteger(_)||v!==n.revision||_<=n.revision||f<r.sceneHeaderBytes||f>r.deltaMaxBytes||g<1||g>r.deltaMaxBytes||g+r.deltaHeaderBytes!==s.byteLength)&&o(),typeof DecompressionStream!="function"&&o("scene-delta-decompression-unavailable"),a();let S=new Uint8Array(s,r.deltaHeaderBytes,g),k=Math.max(n.buffer.byteLength,f);k>r.deltaMaxBytes&&o("invalid-scene-delta-size");let b=new Uint8Array(k),P=new Blob([S]).stream().pipeThrough(new DecompressionStream("deflate")).getReader(),W=0,D=null;try{for(D=()=>{P.cancel().catch(()=>{})},i?.addEventListener("abort",D,{once:!0});;){a();let{done:x,value:Z}=await P.read();if(x)break;(!(Z instanceof Uint8Array)||W+Z.byteLength>k)&&o(),b.set(Z,W),W+=Z.byteLength}}catch(x){if(await P.cancel().catch(()=>{}),i?.aborted||x instanceof DOMException&&x.name==="AbortError")throw new DOMException("Aborted","AbortError");if(x instanceof Error&&x.message==="invalid-scene-delta")throw x;o()}finally{D&&i?.removeEventListener("abort",D),P.releaseLock()}a(),W!==k&&o();let $=new Uint8Array(n.buffer),E=new DataView(b.buffer,b.byteOffset,b.byteLength),q=Math.min(r.sceneHeaderBytes,$.byteLength);for(let x=0;x<q;x+=1)b[x]=(b[x]??0)^($[x]??0);let ee=E.getUint32(12,!0),L=E.getUint32(16,!0),we=E.getUint32(20,!0),B=r.sceneHeaderBytes+ee,Q=L+we,ke=B===n.pointOffset&&L===n.floorCount&&we===n.surfaceCount,te=B+Q*r.scenePointStride,se=ke&&te===f&&Q<=r.sceneMaxPoints,ne=[],j=-1,J=!1,ie=()=>{J&&j>=0&&ne.push(j),J=!1};for(let x=q;x<$.byteLength;x+=r.xorChunkBytes){a();let Z=Math.min($.byteLength,x+r.xorChunkBytes);for(let F=x;F<Z;F+=1){let Pt=$[F]??0,Tt=(b[F]??0)^Pt;if(b[F]=Tt,!se||F<n.pointOffset||F>=te)continue;let At=Math.floor((F-n.pointOffset)/r.dirtyBlockBytes);At!==j&&(ie(),j=At),Tt!==Pt&&(J=!0)}Z<$.byteLength&&await new Promise(F=>globalThis.setTimeout(F,0))}ie(),a();let ln=f===b.byteLength?b.buffer:b.slice(0,f).buffer;return{parsed:t(ln),revision:_,...se?{deltaHint:{baseRevision:v,blockBytes:r.dirtyBlockBytes,dirtyBlocks:ne}}:{}}}}},Is=Object.freeze({deltaHeaderBytes:fe,deltaMaxBytes:le,sceneHeaderBytes:ot,sceneMaxBytes:ae,sceneMaxPoints:Xt,scenePointStride:Yt,dirtyBlockBytes:Gt,xorChunkBytes:pn}),$s=xs(Is),mn=r=>{try{return $s.parseTransfer(r)}catch{throw new R("invalid-scene")}},fn=()=>`
  const { parseTransfer, decodeDeltaTransfer } = (${xs.toString()})(Object.freeze(${JSON.stringify(Is)}));
  self.onmessage = async (event) => {
    const { id, kind, buffer, payload, base } = event.data;
    try {
      if (kind === "parse") {
        const parsed = parseTransfer(buffer);
        self.postMessage({ id, ok: true, parsed }, [parsed.buffer]);
        return;
      }
      const decoded = await decodeDeltaTransfer(payload, base);
      self.postMessage({ id, ok: true, ...decoded }, [decoded.parsed.buffer]);
    } catch (error) {
      const problem = error instanceof Error && error.message.startsWith("invalid-scene")
        ? error.message
        : error instanceof Error && error.message === "scene-delta-decompression-unavailable"
          ? error.message
          : "invalid-scene-delta";
      self.postMessage({ id, ok: false, problem });
    }
  };
`,We=class{#e=null;#t=null;#o=!1;#n=!1;#a=0;#i=null;#r=null;#s=null;constructor(){if(!(typeof Worker!="function"||typeof URL?.createObjectURL!="function"))try{this.#t=URL.createObjectURL(new Blob([fn()],{type:"text/javascript"})),this.#y()}catch{this.#e=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}}async parse(t,e){if(this.#h(e),t.byteLength>ae||t.byteLength<ot)throw new R("invalid-scene");let s=await this.#u({kind:"parse",buffer:t},e,async n=>(await new Promise(i=>globalThis.setTimeout(i,0)),this.#h(n),{id:0,ok:!0,parsed:mn(t)}));if(!s.parsed)throw new R("invalid-scene");return s.parsed}async decodeDelta(t,e,s){if(this.#h(s),t.byteLength>fe+le||e.buffer.byteLength>le)throw new R("invalid-scene-delta-size");let n={buffer:e.buffer,revision:e.revision,pointOffset:e.pointOffset,floorCount:e.floorCount,surfaceCount:e.surfaceCount},i;try{i=await this.#u({kind:"delta",payload:t},s,async o=>(await new Promise(a=>globalThis.setTimeout(a,0)),this.#h(o),$s.decodeDeltaTransfer(t,n,o).then(a=>({id:0,ok:!0,...a}))),n)}catch(o){throw o instanceof R?o:s?.aborted||o instanceof DOMException&&o.name==="AbortError"?new DOMException("Aborted","AbortError"):o instanceof Error&&(o.message.startsWith("invalid-scene")||o.message==="scene-delta-decompression-unavailable")?new R(o.message):new R("invalid-scene-delta")}if(!i.parsed||i.revision===void 0)throw new R("invalid-scene-delta");return{parsed:i.parsed,revision:i.revision,...i.deltaHint?{deltaHint:i.deltaHint}:{}}}#h(t){if(this.#n)throw new R("scene-parser-disposed");if(t?.aborted)throw new DOMException("Aborted","AbortError")}#y(){if(!(!this.#t||this.#o||this.#n))try{let t=new Worker(this.#t);t.onmessage=e=>{let s=this.#i;this.#e!==t||!s||s.worker!==t||e.data.id!==s.id||(e.data.ok?this.#f(s,e.data):this.#f(s,void 0,new R(e.data.problem||"invalid-scene")))},t.onerror=()=>this.#c(t),t.onmessageerror=()=>this.#c(t),this.#e=t}catch{this.#e=null,this.#o=!0}}async#u(t,e,s,n){return this.#h(e),new Promise((i,o)=>{let a,l=()=>e?.removeEventListener("abort",a.abort),d=(c,u)=>{a.settled||(a.settled=!0,l(),u!==void 0?o(u):c?i(c):o(new R("invalid-scene")))};a={id:++this.#a,message:t,...e?{signal:e}:{},fallback:s,...n?{base:n}:{},settle:d,abort:()=>this.#b(a),settled:!1,worker:null},e?.addEventListener("abort",a.abort,{once:!0}),e?.aborted||this.#n?d(void 0,e?.aborted?new DOMException("Aborted","AbortError"):new R("scene-parser-disposed")):this.#i?this.#r?d(void 0,new R("scene-parser-busy")):this.#r=a:(this.#i=a,this.#C(a))})}#C(t){if(this.#i!==t)return;if(this.#n){this.#f(t,void 0,new R("scene-parser-disposed"));return}if(t.signal?.aborted){this.#f(t,void 0,new DOMException("Aborted","AbortError"));return}!this.#e&&!this.#o&&this.#y();let e=this.#e;if(e){t.worker=e;try{let n,i;if(t.message.kind==="parse")n={id:t.id,kind:t.message.kind,buffer:t.message.buffer},i=[t.message.buffer];else{if(!t.base)throw new R("invalid-scene-delta");let o={...t.base,buffer:t.base.buffer.slice(0)};n={id:t.id,kind:t.message.kind,payload:t.message.payload,base:o},i=[t.message.payload,o.buffer]}e.postMessage(n,i)}catch{this.#c(e)}return}let s=new AbortController;this.#s=s,Promise.resolve().then(()=>t.fallback(s.signal)).then(n=>this.#f(t,n),n=>this.#f(t,void 0,n))}#b(t){let e=new DOMException("Aborted","AbortError");if(this.#r===t){this.#r=null,t.settle(void 0,e);return}this.#i===t&&(t.worker?(this.#v(),this.#f(t,void 0,e)):this.#s?.abort())}#f(t,e,s){if(this.#i!==t){t.settle(void 0,new R("scene-parser-disposed"));return}let n=t.signal?.aborted?new DOMException("Aborted","AbortError"):s;t.settle(e,n),this.#i=null,this.#s=null,t.worker=null,this.#n||this.#m()}#m(){if(this.#n||this.#i||!this.#r)return;let t=this.#r;if(this.#r=null,t.signal?.aborted){t.settle(void 0,new DOMException("Aborted","AbortError")),this.#m();return}this.#i=t,this.#C(t)}#c(t){if(this.#e!==t)return;this.#o=!0,this.#v();let e=this.#i;e?.worker===t?this.#f(e,void 0,new R("scene-worker-failed")):this.#m()}#v(){this.#e?.terminate(),this.#e=null}dispose(){if(this.#n)return;this.#n=!0;let t=this.#r;this.#r=null,t?.settle(void 0,new R("scene-parser-disposed"));let e=this.#i;this.#v(),this.#s?.abort(),this.#s=null,e&&(e.worker=null,e.settle(void 0,new R("scene-parser-disposed"))),this.#i=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}};var pt=["catalog","scene","sceneDelta","pose","history","plans","areas","areaSave","areaDelete"];var mt=()=>({requests:0,completed:0,failed:0,aborted:0,timedOut:0,totalDurationMs:0,maxDurationMs:0}),Os=r=>Math.min(1e9,r+1),Ds=r=>Number.isFinite(r)?Math.min(1e12,Math.max(0,r)):0,de=class{#e=mt();#t=!1;record(t,e){if(this.#t)return;let s=Math.round(Ds(e)*100)/100;this.#e.requests=Os(this.#e.requests),this.#e[t]=Os(this.#e[t]),this.#e.totalDurationMs=Ds(this.#e.totalDurationMs+s),this.#e.maxDurationMs=Math.max(this.#e.maxDurationMs,s)}snapshot(){return Object.freeze({...this.#e})}reset(){this.#t||Object.assign(this.#e,mt())}dispose(){this.#t=!0,Object.assign(this.#e,mt())}},qe=class{#e=Object.fromEntries(pt.map(t=>[t,new de]));#t=!1;record(t,e,s){this.#t||this.#e[t].record(e,s)}snapshot(){let t=Object.fromEntries(pt.map(e=>[e,this.#e[e].snapshot()]));return Object.freeze(t)}dispose(){if(!this.#t){this.#t=!0;for(let t of pt)this.#e[t].dispose()}}};var N={catalog:1e4,scene:6e4,delta:35e3,pose:1e4,history:15e3,workflow:15e3,mutation:2e4,roomPreview:15e3},vn=2,ve=new WeakMap,T=class extends Error{constructor(t,e=null){super(t),this.name="BackendError",this.code=t,this.status=e}},Ls=(r,t)=>{let e=r.headers.get("X-Matic-Revision");if(e===null)return t;let s=Number(e);if(!Number.isSafeInteger(s)||s<0)throw new R("invalid-scene-revision");return s},Ws=(r,t)=>{let e=r.headers.get("X-Matic-Floor-Coherent");if(e===null)return t;if(e==="1")return!0;if(e==="0")return!1;throw new R("invalid-scene-floor-header")},He=class{#e;#t=new We;#o=new WeakMap;#n=new Set;#a=new qe;#i=!1;constructor(t){this.#e=t}requestDiagnostics(){return this.#a.snapshot()}async#r(t,e,s=Number.POSITIVE_INFINITY,n="invalid-response-size"){let i=t.body?.getReader();if(!i)return new ArrayBuffer(0);let o=()=>{i.cancel().catch(()=>{})};e.addEventListener("abort",o,{once:!0});try{if(e.aborted)throw o(),new DOMException("Aborted","AbortError");let a=[],l=0;for(;;){let u=await i.read();if(e.aborted)throw new DOMException("Aborted","AbortError");if(u.done)break;if(l+u.value.byteLength>s)throw i.cancel().catch(()=>{}),new R(n);a.push(u.value),l+=u.value.byteLength}let d=new Uint8Array(l),c=0;for(let u of a)d.set(u,c),c+=u.byteLength;return d.buffer}finally{e.removeEventListener("abort",o),i.releaseLock()}}async#s(t,e,s,n,i,o){if(!ns(e))throw new T("invalid-private-path");if(i?.aborted)throw new DOMException("Aborted","AbortError");let a=performance.now(),l="failed",d=new AbortController,c=()=>{},u=new Promise((g,v)=>{c=v}),p=()=>{d.abort(),c(new DOMException("Aborted","AbortError"))};i?.addEventListener("abort",p,{once:!0});let h=!1,f=window.setTimeout(()=>{h=!0,p()},n);try{let g=this.#e(),v=new Headers(s.headers),_={...s,cache:"no-store",credentials:"same-origin",headers:Object.fromEntries(v.entries()),signal:d.signal},S=async()=>{let b;if(typeof g?.fetchWithAuth=="function")b=await g.fetchWithAuth(e,_);else{let C=g?.auth?.accessToken||g?.auth?.data?.access_token;C&&v.set("Authorization",`Bearer ${C}`);let P=typeof g?.hassUrl=="function"?g.hassUrl(e):e;b=await fetch(P,{..._,headers:v})}try{if(d.signal.aborted)throw new DOMException("Aborted","AbortError");return await o(b,d.signal)}finally{b.body&&!b.body.locked&&b.body.cancel().catch(()=>{})}},k=await Promise.race([S(),u]);return l="completed",k}catch(g){throw h&&!i?.aborted?(l="timedOut",new T("request-timeout")):d.signal.aborted?(l="aborted",new DOMException("Aborted","AbortError")):g}finally{window.clearTimeout(f),i?.removeEventListener("abort",p),this.#a.record(t,l,performance.now()-a)}}async#h(t,e,s,n,i={}){return this.#s(t,e,{...i,headers:{Accept:"application/json",...i.headers||{}}},s,n,async(o,a)=>{if(!o.ok){let l=o.headers.get("X-Matic-Plans-Conflict");throw new T(l==="map-rechecking"?"map-rechecking":"request-failed",o.status)}try{return JSON.parse(new TextDecoder().decode(await this.#r(o,a)))}catch{throw new R("invalid-json-response")}})}async catalog(t){return Ae(await this.#h("catalog",jt,N.catalog,t))}async scene(t,e,s,n,i,o){let a=new Headers({Accept:"application/vnd.matic.slam-scene"});return n==="live"&&a.set("X-Matic-Prefer-Cached","1"),o&&a.set("If-None-Match",o),this.#s("scene",t,{headers:a},N.scene,i,async(l,d)=>{let c=Ls(l,e),u=Ws(l,s);if(l.status===304)return{scene:null,floorCoherent:u,revision:c,notModified:!0};if(!l.ok)throw new T("scene-request-failed",l.status);if(l.headers.get("Content-Type")?.split(";",1)[0]!=="application/vnd.matic.slam-scene")throw new R("invalid-scene-content-type");return{scene:{...await this.#t.parse(await this.#r(l,d,ae,"invalid-scene-size"),d),revision:c,etag:l.headers.get("ETag"),source:n},floorCoherent:u,revision:c,notModified:!1}})}async sceneDelta(t,e,s,n){let i=t.includes("?")?"&":"?";return this.#s("sceneDelta",`${t}${i}since=${encodeURIComponent(e.revision)}`,{headers:{Accept:"application/vnd.matic.slam-delta, application/vnd.matic.slam-scene"}},N.delta,n,async(o,a)=>{let l=Ls(o,e.revision),d=Ws(o,s);if(o.status===204){if(l!==e.revision)throw new R("invalid-scene-delta-revision");return{scene:null,floorCoherent:d,revision:l,notModified:!0}}if(!o.ok)throw new T("delta-request-failed",o.status);if(l<=e.revision)throw new R("invalid-scene-delta-revision");let c=o.headers.get("Content-Type")?.split(";",1)[0];if(c!=="application/vnd.matic.slam-delta"&&c!=="application/vnd.matic.slam-scene")throw new R("invalid-scene-delta-content-type");let u=c==="application/vnd.matic.slam-delta",p=u?fe+le:ae,h=Number(o.headers.get("Content-Length"));if(Number.isFinite(h)&&h>p)throw new R(u?"invalid-scene-delta-size":"invalid-scene-size");let f=await this.#r(o,a,p,u?"invalid-scene-delta-size":"invalid-scene-size");if(u){let v=Number(o.headers.get("X-Matic-Base-Revision"));if(!Number.isSafeInteger(v)||v!==e.revision)throw new R("invalid-scene-delta-base");let _=await this.#t.decodeDelta(f,e,a);if(_.revision!==l)throw new R("invalid-scene-delta-revision");return{scene:{..._.parsed,revision:l,etag:o.headers.get("ETag"),source:"live",..._.deltaHint?{deltaHint:_.deltaHint}:{}},floorCoherent:d,revision:l,notModified:!1}}return{scene:{...await this.#t.parse(f,a),revision:l,etag:o.headers.get("ETag"),source:"live"},floorCoherent:d,revision:l,notModified:!1}})}async pose(t,e){return ss(await this.#h("pose",t,N.pose,e))}async history(t,e){return Qt(await this.#h("history",t,N.history,e))}async plans(t,e){return ts(await this.#h("plans",t,N.workflow,e))}async areas(t,e){return Zt(await this.#h("areas",t,N.workflow,e))}async previewRoomSequence(t,e,s,n){if(!t||t.length>255||e.length<1||e.length>100)throw new R("invalid-room-sequence-preview-request");if(n?.aborted)throw new DOMException("Aborted","AbortError");let i=this.#e()?.connection;if(!i?.sendMessagePromise)throw new T("preview-unavailable");let o=null,a=()=>{},l=new Promise((_,S)=>{a=S}),d=this.#o.get(i),c,u=new Promise(_=>{c=_});this.#o.set(i,u);let p=!1,h=()=>{p||(p=!0,c(),this.#o.get(i)===u&&this.#o.delete(i))},f=!1,g=()=>{a(new DOMException("Aborted","AbortError")),f&&(h(),o!==null&&window.clearTimeout(o),o=null)};n?.addEventListener("abort",g,{once:!0});let v=new Promise((_,S)=>{o=window.setTimeout(()=>{o=null,S(new T("preview-timeout"))},N.roomPreview)});v.catch(()=>{f&&h()});try{if(d&&(await Promise.race([d,l,v]),n?.aborted))throw new DOMException("Aborted","AbortError");let _=ve.get(i)??0;if(_>=vn)throw new T("preview-unavailable");let S=i.sendMessagePromise({type:"call_service",domain:"matic_robot",service:"preview_room_sequence",target:{entity_id:t},service_data:{rooms:e.map(P=>({room:P.room,cleaning_mode:P.cleaning_mode,coverage_setting:P.coverage_setting})),use_room_schedule:!0,override_room_schedule:s},return_response:!0});ve.set(i,_+1),f=!0;let k=!1,b=()=>{if(!k){k=!0;let P=(ve.get(i)??1)-1;P===0?ve.delete(i):ve.set(i,P)}h(),o!==null&&window.clearTimeout(o),o=null};S.then(b,b);let C=await Promise.race([S,l,v]);if(n?.aborted)throw new DOMException("Aborted","AbortError");if(!C||typeof C!="object"||Array.isArray(C)||!("response"in C))throw new R("invalid-room-sequence-preview-envelope");return Jt(C.response)}finally{f||(d?d.then(h,h):h(),o!==null&&window.clearTimeout(o),o=null),n?.removeEventListener("abort",g)}}async saveArea(t,e,s){let n=await this.#h("areaSave",t,N.mutation,s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e.areaId?{area_id:e.areaId}:{},name:e.name,circles:e.circles,...e.outline?.closed?{outline:e.outline.points}:{},cleaning_mode:e.cleaningMode,coverage_setting:e.coverageSetting})});if(!n||typeof n!="object"||typeof n.id!="string")throw new R("invalid-area-save-response");return n.id}async deleteArea(t,e,s){await this.#s("areaDelete",`${t}?area_id=${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json"}},N.mutation,s,async n=>{if(!n.ok)throw new T("area-delete-failed",n.status)})}async service(t,e,s,n,i={}){let o=this.#e();if(this.#i||typeof o?.callService!="function")throw new T("service-unavailable");let a=null,l=null;try{let d=i.returnResponse?o.callService(t,e,s,{entity_id:n},!0,!0):o.callService(t,e,s,{entity_id:n});return!i.returnResponse&&!i.acknowledgementTimeout?await d:await Promise.race([d,new Promise((c,u)=>{l=()=>{a!==null&&window.clearTimeout(a),a=null,u(new DOMException("Aborted","AbortError"))},this.#n.add(l),a=window.setTimeout(()=>u(new T("mutation-timeout")),N.mutation)})])}finally{a!==null&&window.clearTimeout(a),l&&this.#n.delete(l)}}dispose(){if(!this.#i){this.#i=!0,this.#a.dispose();for(let t of this.#n)t();this.#n.clear(),this.#t.dispose()}}};var Hs=()=>({version:4,view:"top",appearance:"photo",labels:!0,quality:"auto",cameras:{}}),ye=(r,t,e)=>Math.max(t,Math.min(e,r)),zs=r=>r.replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",ft=(r,t=4)=>`matic-map-studio:v${t}:${zs(r)}`,yn=r=>{if(!r||typeof r!="object")return null;let t=r;return["yaw","pitch","zoom","targetX","targetZ"].every(s=>typeof t[s]=="number"&&Number.isFinite(t[s]))?{yaw:ye(t.yaw,-Math.PI,Math.PI),pitch:ye(t.pitch,.18,Math.PI/2-.018),zoom:ye(t.zoom,.01,100),targetX:ye(t.targetX,-1e4,1e4),targetZ:ye(t.targetZ,-1e4,1e4)}:null},qs=r=>{let t=Hs();if(!r||typeof r!="object")return t;let e=r,s=e.view==="three"||e.view==="top"||e.view==="rooms"?e.view:t.view,n=s==="rooms"?"top":s,i=e.quality==="auto"||e.quality==="efficient"||e.quality==="balanced"||e.quality==="maximum"?e.quality:t.quality,o=e.cameras&&typeof e.cameras=="object"?e.cameras:{},a={};for(let l of["three","top"]){let d=yn(o[l]);d&&(a[l]=d)}return{version:4,view:n,appearance:e.appearance==="rooms"||e.appearance==="photo"?e.appearance:t.appearance,labels:typeof e.labels=="boolean"?e.labels:t.labels,quality:i,cameras:a}},ze=class{#e="local-user";#t=null;#o=null;load(t){this.#n(),this.#e=zs(t);try{let e=window.localStorage.getItem(ft(this.#e));if(e)return qs(JSON.parse(e));for(let s of[3,2]){let n=window.localStorage.getItem(ft(this.#e,s));if(n)return qs(JSON.parse(n))}}catch{}return Hs()}schedule(t){this.#t!==null&&window.clearTimeout(this.#t),this.#o={key:ft(this.#e),value:t},this.#t=window.setTimeout(()=>this.#n(),250)}#n(){this.#t!==null&&window.clearTimeout(this.#t),this.#t=null;let t=this.#o;if(this.#o=null,!!t)try{window.localStorage.setItem(t.key,JSON.stringify(t.value))}catch{}}dispose(){this.#n()}};var yt=1,ue=Number.MAX_SAFE_INTEGER,Us=Number.MAX_SAFE_INTEGER,Ns=64,gn=1e12,vt=4,Bs=16*1024,bn=250,wn=4e3,Ne=3e4;function H(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)?r:null}function X(r,t){return typeof r=="number"&&Number.isSafeInteger(r)&&r>=0&&r<=t}function Vs(r){let t=H(r);if(!t)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!X(n,Us))return null;e[s]=n}return e}function kn(r){let t=H(r);if(!t||Object.keys(t).length>128)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!X(n,Us))return null;e[s]=n}return e}function js(r){return typeof r=="string"&&r.length>0&&r.length<=256?r:X(r,ue)?String(r):null}function _n(r){let t=H(r),e=js(t?.epoch);if(!t||t.schema!==yt||e===null)return null;let s=kn(t.capabilities),n=Vs(t.revisions);return!s||!n||!X(t.sequence,ue)||!X(t.coherence_generation,ue)||t.coherence_generation===0?null:{schema:t.schema,capabilities:s,epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:n}}function Fs(r,t){let e=H(r),s=_n(e?.snapshot??r);if(!s)return null;let n=H(e?.snapshot??r);if(!n||!("payload"in n))return null;let i=n.entry_id,o=H(n.identity),a=H(n.status),l=H(n.payload),d=a?a.reason===null?null:Ys(a.reason):null,c=l?.available,u=null;if(l?.entry!==void 0&&l.entry!==null){if((()=>{try{return JSON.stringify(l.entry).length}catch{return Bs+1}})()>Bs)return null;try{u=Ae({entries:[l.entry]})[0]??null}catch{return null}}let p=a?.state;return typeof i!="string"||i.length===0||i.length>128||t!==void 0&&i!==t||!o||o.entry_id!==i||o.floor_mission_id!==null&&!X(o.floor_mission_id,ue)||typeof o.floor_verified!="boolean"||o.floor_verified!==(o.floor_mission_id!==null)||!a||p!=="ready"&&p!=="stale"&&p!=="unavailable"||a.reason!==null&&d===null||typeof a.retryable!="boolean"||typeof c!="boolean"||u!==null&&u.entryId!==i||p==="ready"&&(d!==null||a.retryable||!c)||(p==="stale"||p==="unavailable")&&(d===null||c)||d==="authorization"&&a.retryable?null:{...s,entry_id:i,identity:{entry_id:i,floor_mission_id:o.floor_mission_id,floor_verified:o.floor_verified},status:{state:p,reason:d,retryable:a.retryable},payload:{available:c,entry:u}}}function Ks(r){let t=H(r),e=js(t?.epoch),s=Vs(t?.revisions),n=t?.resources;return e===null||!s||!X(t?.sequence,ue)||!X(t?.coherence_generation,ue)||t.coherence_generation===0||!Array.isArray(n)||n.length>128||!n.every(i=>typeof i=="string"&&i.length<=128)?null:{epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:s,resources:n}}var Be=["gap","overflow","reconnect","invalid_message","server_request","restart","entry_removed","authorization","snapshot_required"];function Ys(r){return typeof r=="string"&&Be.includes(r)?r:null}function Sn(r){let t=H(r);return t?.name==="AbortError"?"aborted":t?.name==="TimeoutError"?"timedOut":"failed"}function Rn(){return Object.fromEntries(Be.map(r=>[r,new de]))}var Fe=class{#e;#t;#o;#n=null;#a=!1;#i=!1;#r=!1;#s=!1;#h=!1;#y=!1;#u=0;#C=!1;#b=!1;#f=!1;#m=!1;#c=null;#v=null;#M=0;#T=!1;#S=null;#k=-1;#d=new Map;#A=!1;#_=!1;#I=null;#l=[];#O=new de;#g=Rn();#$=null;#w=null;#x=null;constructor(t,e){this.#e=t,this.#t=e,this.#o=Math.max(1,Math.min(Ns,e.maxPendingInvalidations??Ns))}async start(){if(!(this.#a||this.#_)){this.#_=!0;try{await this.#F(!1)}catch(t){this.#ue(t),this.#R("reconnect")}}}notifyReconnect(){(this.#s||this.#y)&&(this.#V(),this.#Q("aborted"),this.#u+=1),this.#M=0,this.#C=!1,this.#s=!1,this.#h=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.requestResync("reconnect"),this.#r&&this.#N(0,!0)}requestResync(t="server_request"){this.#R(t,!0)}diagnostics(){let t=Object.fromEntries(Be.map(s=>[s,this.#g[s].snapshot()])),e=this.#w!==null&&this.#x!==null?Object.freeze({reason:this.#w,durationMs:Math.round(Math.min(gn,Math.max(0,performance.now()-this.#x))*100)/100}):null;return Object.freeze({snapshotAttempts:this.#O.snapshot(),recoveryEpisodes:Object.freeze(t),activeRecovery:e})}dispose(){if(!this.#a){this.#a=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#r=!1,this.#n?.(),this.#n=null,this.#d.clear(),this.#l=[],this.#$=null,this.#w=null,this.#x=null,this.#O.dispose();for(let t of Be)this.#g[t].dispose()}}#q(t){if(this.#a)return;let e=H(t),s=H(e?.event)??e,n=s?.type;if(n==="resync"){let o=Ys(s?.reason);if(!o){this.#R("invalid_message");return}if(o==="entry_removed"){this.#t.onEvent({type:"resync",reason:o}),this.dispose();return}this.#R(o);return}if(this.#s){if(n==="invalidate"){let o=Ks(s?.invalidation??s);o?this.#z(o):(this.#l=[],this.#T=!0)}return}let i=n==="snapshot"?Fs(s?.snapshot??s,this.#t.entryId):n==="invalidate"?Ks(s?.invalidation??s):null;if(!i){this.#R("invalid_message");return}if(n==="snapshot"){let o=i;if(this.#r)return;if(this.#S!==null&&o.epoch!==this.#S){this.#R("restart");return}this.#X(o);return}this.#G(i)}#X(t){this.#S===t.epoch&&t.sequence<this.#k||(this.#S=t.epoch,this.#k=t.sequence,this.#d.clear(),this.#t.onEvent({type:"snapshot",snapshot:t}))}#ce(t){let e=this.#l;if(this.#l=[],this.#X(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(i=>i.epoch===t.epoch&&i.sequence>=s),this.#R("gap");return}this.#G(n),s+=1}}#G(t){if(this.#r){this.#z(t);return}if(this.#S===null){this.#z(t);return}if(this.#S!==t.epoch){this.#z(t),this.#R("reconnect");return}if(!(t.sequence<=this.#k)){if(t.sequence!==this.#k+1){this.#z(t),this.#R("gap");return}this.#k=t.sequence;for(let e of t.resources)this.#d.set(e,t);if(this.#d.size>this.#o){this.#d.clear(),this.#R("overflow");return}this.#A||(this.#A=!0,queueMicrotask(()=>this.#Y()))}}#z(t){this.#l.length>=this.#o?(this.#l=[],this.#T=!0,this.#R("overflow")):this.#l.push(t)}#Y(){if(this.#A=!1,this.#a||this.#s||this.#d.size===0){this.#s&&this.#d.clear();return}let t=[...this.#d.values()];this.#d.clear();let e=t.reduce((n,i)=>!n||i.sequence>n.sequence?i:n,null);if(!e)return;let s=[...new Set(t.flatMap(n=>n.resources))];this.#t.onEvent({type:"invalidation",invalidation:{...e,resources:s}})}#R(t,e=!1){if(!this.#a){if(t==="authorization"){this.#p(),this.#t.onEvent({type:"resync",reason:t});return}if(!this.#s&&(this.#U(t),this.#i||(this.#i=!0,this.#t.onEvent({type:"resync",reason:t}),queueMicrotask(()=>{this.#i=!1})),t!=="entry_removed")){let s=e&&!this.#C;if(s&&(this.#C=!0),s&&this.#c!==null&&(window.clearTimeout(this.#c),this.#c=null),this.#f){if(this.#m){s&&this.#N(0,!0);return}this.#m=!0,this.#B(s);return}if(e&&this.#r){s&&(this.#b=!0);return}let n=this.#M>=vt?Ne:0;this.#N(s?0:n,s)}}}#N(t,e=!1){if(!this.#a){if(this.#c!==null){if(!e)return;window.clearTimeout(this.#c),this.#c=null}if(this.#r){this.#v=e?t:Math.max(this.#v??0,t);return}this.#c=window.setTimeout(()=>{this.#c=null,this.#F(!0)},t)}}#B(t=!1){let e=this.#M>=vt?Ne:Math.min(bn*2**this.#M,wn);this.#M<vt&&(this.#M+=1),this.#N(t?0:e,t)}async#F(t,e=!1){if(this.#a||this.#r)return;t&&this.#U(e?"authorization":"snapshot_required");let s=this.#u;this.#r=!0,this.#y=e;try{if(t&&await this.#K(),this.#a||this.#s&&!e||s!==this.#u)return;let n={startedAt:performance.now(),generation:s};this.#$=n;let i="completed",o;try{o=await this.#e.sendMessagePromise({type:"matic_robot/workspace_snapshot",version:yt,entry_id:this.#t.entryId})}catch(d){throw i=Sn(d),d}finally{this.#H(n,i)}if(this.#a||this.#s&&!e||s!==this.#u)return;let a=Fs(o,this.#t.entryId);if(!a)throw new Error("invalid-workspace-snapshot");if(a.status.reason==="authorization"){this.#p(),this.#t.onEvent({type:"snapshot",snapshot:a});return}if(a.status.state!=="ready"&&a.status.retryable)throw new Error("workspace-snapshot-retryable");e&&(this.#s=!1,this.#h=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null),this.#r=!1,this.#f=!0,this.#m=!1;try{t?this.#de(a):this.#ce(a)}finally{this.#f=!1}let l=this.#m||this.#T;this.#m?this.#b&&(this.#b=!1,this.#N(0,!0)):(this.#M=0,this.#C=!1,this.#b=!1),!t&&!this.#a&&await this.#K(),this.#T&&(this.#T=!1,this.#R("overflow")),t&&a.status.state==="ready"&&!l&&!this.#a&&s===this.#u&&this.#Q("completed")}catch(n){if(this.#a||this.#s&&!e||s!==this.#u)return;if(this.#ue(n),this.#ye(n))this.#p(),this.#t.onEvent({type:"resync",reason:"authorization"});else if(!e){t||this.#U("reconnect");let i=this.#b;this.#b=!1,this.#B(i)}}finally{this.#r=!1,this.#y=!1,this.#h?(this.#h=!1,this.#D(0)):e&&this.#s&&this.#D(Ne);let n=this.#v;this.#v=null,n!==null&&this.#N(n)}}async#K(){if(this.#a||this.#n)return;if(this.#I)return this.#I;let t=(async()=>{let e=await this.#e.subscribeMessage(s=>this.#q(s),{type:"matic_robot/workspace_subscribe",version:yt,entry_id:this.#t.entryId});this.#a?e():this.#n=e})();this.#I=t;try{await t}finally{this.#I===t&&(this.#I=null)}}#de(t){let e=this.#l;if(this.#l=[],this.#S===t.epoch&&t.sequence<this.#k){this.#l=e,this.#R("snapshot_required");return}if(this.#X(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(i=>i.sequence>=s),this.#R("gap");return}this.#G(n),s+=1}}#ye(t){let e=H(t),s=e?.code,n=e?.status??e?.statusCode;return s==="unauthorized"||s==="not_authorized"||s==="auth_invalid"||n===401||n===403}#U(t){this.#w!==null||this.#a||(this.#w=t,this.#x=performance.now())}#Q(t){let e=this.#w,s=this.#x;this.#w=null,this.#x=null,!(e===null||s===null||this.#a)&&this.#g[e].record(t,performance.now()-s)}#H(t,e){this.#$!==t||this.#a||t.generation!==this.#u||(this.#$=null,this.#O.record(e,performance.now()-t.startedAt))}#V(){let t=this.#$;t!==null&&(this.#$=null,!this.#a&&t.generation===this.#u&&this.#O.record("aborted",performance.now()-t.startedAt))}#p(){this.#V(),this.#Q("failed"),this.#u+=1,this.#s||(this.#s=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#h=!1),this.#d.clear(),this.#l=[],this.#T=!1,this.#v=null,this.#M=0,this.#C=!1,this.#b=!1,this.#y||this.#D(Ne)}#D(t){this.#a||this.#c!==null||this.#h||(this.#c=window.setTimeout(()=>{if(this.#c=null,!this.#a){if(this.#r){this.#h=!0;return}this.#F(!0,!0)}},t))}#ue(t){this.#t.onError?.(t instanceof Error?t:new Error("Workspace transport failed"))}};var Ke=class{#e;#t;#o=document.visibilityState!=="hidden";#n=!1;#a=!1;#i=!1;constructor({onSuspend:t,onResume:e}){this.#e=t,this.#t=e}get active(){return this.#o}start(){this.#n||this.#a||(this.#n=!0,window.addEventListener("pagehide",this.#r),window.addEventListener("pageshow",this.#s),document.addEventListener("visibilitychange",this.#h),document.visibilityState==="hidden"&&(this.#o?this.#u(!1):this.#e()))}dispose(){this.#a||(this.#a=!0,this.#n&&(window.removeEventListener("pagehide",this.#r),window.removeEventListener("pageshow",this.#s),document.removeEventListener("visibilitychange",this.#h)))}#r=()=>{this.#i=!0,this.#u(!1)};#s=t=>{if(this.#i=!1,t.persisted){document.visibilityState==="hidden"?this.#u(!1):(this.#u(!1),this.#u(!0));return}this.#y()};#h=()=>{this.#y()};#y(){if(this.#i||document.visibilityState==="hidden"){this.#u(!1);return}this.#u(!0)}#u(t){this.#o===t||this.#a||(this.#o=t,t?this.#t():this.#e())}};var m=(r,t,e=null)=>({status:r,value:t,problem:e}),ge=r=>r.status==="loading"?m("idle",r.value):r,z=r=>r instanceof DOMException&&r.name==="AbortError",En={notice:M,parseSavedPlanId:es,BackendError:T,isAbort:z,canEditCoordinates:tt,initialWorkspaceState:U,draftForPlan:et,hasStoppableWork:Re},V=(r,t)=>r instanceof T||r&&typeof r=="object"&&"code"in r&&typeof r.code=="string"?r.code:t,I={stopUnconfirmed:M("error","v4_notice_stop_unconfirmed","Home Assistant can't confirm the robot stopped, so press Stop again if it's still moving."),actionUnconfirmed:M("error","v4_notice_action_unconfirmed","Home Assistant can't confirm that command, so check the robot before trying again."),mapChanged:M("info","v4_notice_map_changed","The map changed, so choose what to clean again."),statusRefreshed:M("info","v4_notice_status_refreshed","Status refreshed, so check the robot before trying again."),planSaveFailed:M("error","v4_notice_plan_save_failed","Home Assistant can't confirm the plan was saved, so check your plans, then try again."),planDeleteFailed:M("error","v4_notice_plan_delete_failed","The plan wasn't deleted; try again."),planPreviewMissing:M("warning","v4_notice_plan_preview_missing","The next-run preview isn't ready; reload your plans, then try again."),planRemoved:M("warning","v4_notice_plan_removed","This plan was removed elsewhere, so nothing was changed."),planPreviewRefreshFailed:M("warning","v4_notice_plan_preview_refresh_failed","The next-run preview didn't refresh; check the plan, then try again."),planPreviewNone:M("warning","v4_notice_plan_preview_none","This plan has no next-run preview; review its rooms and schedules."),planPreviewChanged:M("info","v4_notice_plan_preview_changed","The next run changed; check it before you run the plan."),roomPreviewBlocked:M("warning","v4_notice_room_preview_blocked","A room can't use these settings, so check the note above the rooms."),roomPreviewChanged:M("info","v4_notice_room_preview_changed","The room settings changed, so check them and start again."),roomPreviewFailed:M("warning","v4_notice_room_preview_failed","Home Assistant couldn't check the room settings, so try starting again."),areaRemoved:M("warning","v4_notice_area_removed","This saved area was removed elsewhere. Your edits are kept as a new draft; saving will create a new area."),areaSaveFailed:M("error","v4_notice_area_save_failed","Home Assistant can't confirm the area was saved, so try again."),areaDeleteFailed:M("error","v4_notice_area_delete_failed","Home Assistant can't confirm the area was deleted, so try again."),resetMopFailed:M("error","v4_notice_reset_mop_failed","Mopping progress wasn't reset; try again."),resetVacuumFailed:M("error","v4_notice_reset_vacuum_failed","Vacuum rotation progress wasn't reset; try again.")},Cn=r=>M("warning","v4_notice_saved_map","Showing the saved map from {date} without the robot's position.",{date:{date:r}}),Xs={coverage_identity_unavailable:M("error","v4_notice_coverage_task_unknown","Home Assistant can't confirm the current clean, so check the robot first."),coverage_activity_unavailable:M("error","v4_notice_coverage_activity_unknown","Home Assistant can't confirm whether the robot is cleaning, so check it first."),coverage_native_session_active:M("error","v4_notice_coverage_robot_busy","The robot is already cleaning, so wait for it to finish."),coverage_identity_changed:M("error","v4_notice_coverage_task_changed","The clean changed while starting, so check the robot first.")},Mn=r=>{let{translation_domain:t,translation_key:e}=r??{};return t==="matic_robot"&&typeof e=="string"&&Object.hasOwn(Xs,e)?Xs[e]??null:null},he=r=>[r.selectedFloorOrdinal??"none",r.mapFloorOrdinal??"none",r.mapFloorCoherent?"coherent":"transition"].join(":"),pe=r=>[r.mapFloorOrdinal??"none",r.mapSessionVerified?"verified":"unverified",r.mapSessionKey??"no-session"].join(":"),K=r=>[r.entryId,r.selectedFloorOrdinal??"none",r.mapFloorOrdinal??"none"].join("|"),A=r=>[r.entryId,he(r),pe(r)].join("|"),gt=r=>[A(r),r.mapRevision].join("|"),Ue=r=>r.runnerLocked||r.stopSettlePending||r.activePlan||r.nativeReconciliationPending||r.nativeSessionActive===!0,Ve=(r,t)=>r.entryKey===t.entryKey&&r.generation===t.generation&&r.floorKey===t.floorKey&&r.missionKey===t.missionKey,Pn=1e3,Tn=5e3,Gs=["rooms","plans","plan","draw","areaReview"],Qs=["plan-mutation","area-mutation"],Js=r=>JSON.stringify({...r,previewToken:void 0}),je=(r,t)=>r.label?r.label:r.active?"Current floor":`Saved floor ${r.ordinal??t}`,Ye=class{#e;#t;#o;#n;#a=new ze;#i=null;#r=new Map;#s=null;#h=null;#y=null;#u=null;#C=0;#b=!1;#f=!1;#m=!1;#c=!1;#v=null;#M=Promise.resolve();#T=!1;#S=!1;#k="";#d=null;#A=0;#_=null;#I="";#l=!1;#O=!0;#g=null;#$=null;#w=null;#x=null;#q="";#X=!1;#ce=null;#G;#z;workspaceDiagnostics(){return this.#g?.diagnostics()??null}constructor(t,e,s=null,n){this.#e=t,this.#t=new Wt(t.value.generation),this.#o=e,this.#G=s,this.#z=n,this.#n=new Ke({onSuspend:()=>this.#Y(),onResume:()=>{this.#R()}}),this.#e.patch({pageActive:this.#n.active}),this.#x=t.subscribe(i=>{this.#N(i),this.#de()}),this.#n.start()}#Y(){this.#V(!1,Qs),this.#J(),this.#W(Qs),this.#m=!1,this.#c=!1,this.#v=null,this.#S=!1,this.#_e();let t=this.#e.value;this.#e.patch({resources:{...t.resources,catalog:ge(t.resources.catalog),scene:ge(t.resources.scene),history:ge(t.resources.history),plans:ge(t.resources.plans),areas:ge(t.resources.areas),pose:m("idle",null)}})}async#R(){if(this.#l||!this.#n.active)return;this.#e.patch({pageActive:!0});let t=this.#s;if(this.#l||!this.#n.active||!t?.host.connected||!t.host.administrator||!t.host.robotConnected||t.host.robotCount===0)return;let e=this.#e.value;this.#he(),this.#U(t),await this.refreshCatalog(!0,!0);let s=this.#e.value,n=s.resources.entry;if(this.#l||!this.#n.active||e.dataMode!=="history"||s.generation!==e.generation||s.dataMode!=="history"||s.selection.entryId!==e.selection.entryId||s.selection.floorId!==e.selection.floorId||s.selection.historyId!==e.selection.historyId||s.resources.catalog.status!=="ready"||!n||n.entryId!==s.selection.entryId)return;let i=s.resources.history.value?.floors.find(u=>u.id===s.selection.floorId),o=i?.snapshots.find(u=>u.id===s.selection.historyId);if(!i)return;let a=this.#t.begin(n.entryId,i.id,o?.id??i.id,o?.revision??0);if(this.#e.patch({generation:a.generation}),await this.#re(n,a),!this.#t.accepts(a)||!this.#n.active||this.#e.value.resources.history.status!=="ready")return;let l=this.#e.value,d=l.resources.history.value?.floors.find(u=>u.id===i.id),c=d?.snapshots.find(u=>u.id===o?.id);!d||o&&!c||(c&&c.revision!==a.revision&&(a=this.#t.begin(n.entryId,i.id,c.id,c.revision)),this.#e.patch({generation:a.generation,coherence:"current"}),c&&(!l.resources.scene.value||c.revision!==o?.revision)&&await this.#be(c,a))}#N(t){if(!t.owner)return;let e={version:4,view:t.view,appearance:t.appearance,labels:t.labelsVisible,quality:t.quality,cameras:t.cameras},s=this.#i;this.#i=e,!(!s||s.view===e.view&&s.appearance===e.appearance&&s.labels===e.labels&&s.quality===e.quality&&s.cameras===e.cameras)&&this.#a.schedule(e)}#B(t){let e=$t(t),s=t.resources.entry,n=this.#s?.vacuumEntityId;if(!e||!s||!n||!t.selection.entryId||t.workflow!=="rooms"||t.dataMode!=="live"||t.floor.readOnly||t.coherence!=="current"||!t.host.connected||!t.host.administrator||!t.host.robotConnected||t.command!=="idle"||t.resources.plans.status!=="ready")return null;let i=t.selection.roomIds.map(o=>{let a=t.selection.roomSettings.find(l=>l.roomId===o);return a?{room:o,cleaning_mode:a.cleaningMode,coverage_setting:a.coverageSetting}:null});return i.some(o=>o===null)?null:{key:e,generation:t.generation,retryRevision:t.manualRoomPreviewRetry,floorKey:he(s),missionKey:pe(s),entryId:t.selection.entryId,entityId:n,rooms:i,overrideRoomSchedule:!t.selection.useRoomSchedule}}#F(t){return JSON.stringify([t.key,t.generation,t.retryRevision,t.floorKey,t.missionKey,t.entryId,t.entityId])}#K(t){let e=this.#B(this.#e.value);return!this.#l&&e!==null&&this.#F(e)===this.#F(t)}#de(){if(this.#l||!this.#s)return;let t=this.#e.value,e=this.#B(t);if(!e){this.#r.get("room-preview")?.abort(),this.#r.delete("room-preview"),this.#q="",(t.manualRoomPreview.status!=="idle"||t.manualRoomPreview.value!==null)&&this.#e.patch({manualRoomPreview:m("idle",null)});return}let s=this.#F(e),n=Ze(t);if(n&&n.key===e.key&&n.generation===e.generation&&n.floorKey===e.floorKey&&n.missionKey===e.missionKey&&n.preview.entryId===e.entryId){this.#q=s;return}if(this.#q===s)return;this.#r.get("room-preview")?.abort(),this.#q=s;let i=this.#L("room-preview");this.#e.patch({manualRoomPreview:m("loading",null)}),this.#ye(e,i)}async#ye(t,e){try{let s=await this.#o.previewRoomSequence(t.entityId,t.rooms,t.overrideRoomSchedule,e.signal);return!this.#K(t)||e.signal.aborted||s.entryId!==t.entryId?null:(this.#e.patch({manualRoomPreview:m("ready",{key:t.key,generation:t.generation,floorKey:t.floorKey,missionKey:t.missionKey,preview:s})}),s)}catch(s){return z(s)||e.signal.aborted||!this.#K(t)||this.#e.patch({manualRoomPreview:m("error",null,V(s,"preview-unavailable"))}),null}finally{this.#E("room-preview",e)}}sync(t){if(this.#l)return;let e=this.#g,s=this.#s?.host.robotConnected??null,n=this.#s?.host.administrator===!1&&t.host.administrator,i=this.#s!==null&&!this.#s.host.robotConnected&&t.host.robotConnected,o=this.#e.value.owner,a=o!==null&&(o.entryKey!==t.entryKey||o.userKey!==t.userKey);a&&(this.#j("context-changed",t.entryKey),this.#b&&(this.#m=!0,this.#c=!1,this.#v=null));let l=this.#O;this.#O=t.host.connected,this.#s=t,this.#U(t),i&&e&&e===this.#g&&e.notifyReconnect();let d=t.userKey!==this.#I?this.#a.load(t.userKey):null;if(d&&(this.#I=t.userKey,this.#i=d),this.#e.patch({owner:{userKey:t.userKey,entryKey:t.entryKey},host:t.host,activity:t.activity,batteryPercent:t.batteryPercent,robotLabel:t.robotLabel,robots:t.robots,locale:t.language,selection:{...this.#e.value.selection,entryId:t.entryKey},...d?{view:d.view,appearance:d.appearance,labelsVisible:d.labels,quality:d.quality,cameras:d.cameras}:{}}),!t.host.administrator){this.#J(),this.#j("access-required",t.entryKey);return}if(!t.host.connected){l&&(this.#e.patch({generation:this.#t.invalidate()}),this.#D(),this.#k=""),this.#J(),this.#m=!1,this.#c=!1,this.#v=null,this.#S=!1,this.#W();let c=this.#e.value,u=c.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...c.resources,catalog:c.resources.catalog.status==="loading"?m("idle",c.resources.catalog.value):c.resources.catalog,plans:c.resources.plans.status==="loading"?m("idle",c.resources.plans.value):c.resources.plans,areas:c.resources.areas.status==="loading"?m("idle",c.resources.areas.value):c.resources.areas,pose:m("idle",null)},map:{...c.map,available:u!==null,exactPose:!1}});return}if(t.host.robotCount===0){this.#J(),this.#j("map-unavailable",t.entryKey);return}if(t.entryKey&&!t.vacuumEntityId){this.#J(),this.#j("no-loaded-robot",t.entryKey);return}if(!t.host.robotConnected){s!==!1&&(this.#V(),this.#W(),this.#m=!1,this.#c=!1,this.#v=null,this.#S=!1),this.#J();let c=this.#e.value,u=c.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...c.resources,catalog:c.resources.catalog.status==="loading"?m("idle",c.resources.catalog.value):c.resources.catalog,scene:c.resources.scene.status==="loading"?m("idle",u):c.resources.scene,pose:m("idle",null)},map:{...c.map,available:u!==null,exactPose:!1}});return}if(this.#n.active){if(this.#he(),!l||i||n){this.refreshCatalog(!0,!0);return}(a||this.#e.value.resources.catalog.status==="idle"||t.entryKey&&t.entryKey!==this.#e.value.selection.entryId)&&this.refreshCatalog(!0)}}#U(t){let e=t.entryKey,s=this.#e.value,n=s.resources.catalog.value?.find(l=>l.entryId===e),i=s.resources.entry;if(!(this.#z??!!(n?.liveWorkspaceTransportEnabled&&i?.entryId===e&&i.liveWorkspaceTransportEnabled))||!this.#G||!t.host.administrator||!t.host.connected||!t.vacuumEntityId||!e||!this.#n.active){this.#_e();return}if(this.#g&&this.#$===e)return;this.#g?.dispose(),this.#w=null;let a=new Fe(this.#G,{entryId:e,onEvent:l=>{if(!(this.#l||!this.#n.active||this.#g!==a||this.#$!==e||this.#s?.entryKey!==e)){if(l.type==="resync"&&l.reason==="entry_removed"){a.dispose(),this.#g===a&&(this.#g=null,this.#$=null,this.#w=null);return}if(l.type==="snapshot"){let{snapshot:d}=l,c=this.#e.value.resources.entry,u=d.payload.entry;if(d.entry_id!==e||d.identity.entry_id!==e)return;if(u&&(u.entryId!==e||d.identity.floor_verified!==(u.mapFloorCoherent&&u.mapSessionVerified))){a.requestResync("invalid_message");return}let p=!u&&c?.entryId===e&&d.identity.floor_verified!==(c.mapFloorCoherent&&c.mapSessionVerified);if(d.status.reason==="authorization"){this.#w=null,this.#p(e,["plans","areas","history"]);return}let h=this.#w,f=[],g=h!==null&&h.epoch!==d.epoch;if(h&&h.epoch===d.epoch){let k=new Set([...Object.keys(h.revisions),...Object.keys(d.revisions)]),b=[...k].some(C=>(d.revisions[C]??-1)<(h.revisions[C]??-1));if(d.coherence_generation<h.coherenceGeneration||d.coherence_generation===h.coherenceGeneration&&b){a.requestResync("restart");return}f=[...k].filter(C=>(d.revisions[C]??-1)>(h.revisions[C]??-1))}g&&(f=["plans","areas","history"]);let v=h!==null&&(h.epoch!==d.epoch||h.coherenceGeneration!==d.coherence_generation),_=!!(c&&u&&c.entryId===e&&A(c)!==A(u));if(this.#w={entryId:d.entry_id,epoch:d.epoch,sequence:d.sequence,coherenceGeneration:d.coherence_generation,revisions:d.revisions},p){this.#p(e,["plans","areas","history"]);return}if(v||_){this.#p(e,f);return}let S=u!==null&&c?.entryId===e&&this.#H(u);if(h&&f.length){if(d.sequence<=h.sequence){a.requestResync("invalid_message");return}this.#w=h,this.#Q({epoch:d.epoch,sequence:d.sequence,coherence_generation:d.coherence_generation,revisions:d.revisions,resources:f},e,a,S)}return}if(l.type==="resync"){this.#w=null,l.reason!=="authorization"&&this.#p(e,["plans","areas","history"]);return}this.#Q(l.invalidation,e,a)}}});this.#g=a,this.#$=e,a.start()}#Q(t,e,s,n=!1){let i=this.#w;if(!i||i.entryId!==e||this.#g!==s||t.epoch!==i.epoch||t.sequence<=i.sequence)return;let o=t.coherence_generation!==i.coherenceGeneration,l=[...new Set([...Object.keys(i.revisions),...Object.keys(t.revisions)])].some(h=>(t.revisions[h]??-1)<(i.revisions[h]??-1));if(t.coherence_generation<i.coherenceGeneration||!o&&l){s.requestResync("restart");return}let d=new Set(t.resources),c=[...d].some(h=>(t.revisions[h]??-1)>(i.revisions[h]??-1));if(this.#w={...i,sequence:t.sequence,coherenceGeneration:t.coherence_generation,revisions:t.revisions},!c&&!o)return;if(o){this.#p(e,t.resources);return}d.has("scene")&&d.delete("scene");let u=this.#e.value.resources.entry,p=this.#t.current();!u||u.entryId!==e||!p||d.size&&this.#se(u,p,d,!n)}#H(t){let e=this.#e.value,s=e.resources.entry;if(!s||A(s)!==A(t))return!1;let n=t.mapRevision===s.mapRevision?t:{...t,mapRevision:s.mapRevision},i=e.resources.catalog,o=i.value?.map(u=>u.entryId===n.entryId?n:u),a=n.mapFloorCoherent&&n.mapSessionVerified,l=n.health==="problem"||n.health==="limited",d=this.#d,c=d?.key===A(n)&&this.#me(d)&&(d.attempt!==null||d.retryTimer!==null);return this.#e.patch({managedLock:Ue(n),coherence:c?"verifying":a?l?"degraded":"current":"verifying",map:{...e.map,available:e.resources.scene.value!==null,complete:n.mapComplete&&!n.mapTruncated,floorCoherent:n.mapFloorCoherent,sessionVerified:n.mapSessionVerified,exactPose:a&&!c?e.map.exactPose:!1},floor:{...e.floor,classifiedCount:Math.max(1,n.historyFloorCount),...c&&e.resources.scene.value?{readOnly:!0}:{}},resources:{...e.resources,entry:n,...o?{catalog:{...i,value:o}}:{}}}),this.#s&&this.#U(this.#s),!0}#V(t=this.#e.value.pageActive,e=[]){let s=this.#t.invalidate();this.#D();let n=this.#e.value;this.#e.patch({generation:s,pageActive:t,coherence:n.resources.scene.value?"verifying":"unavailable",floor:{...n.floor,readOnly:n.floor.readOnly||n.resources.scene.value!==null},map:{...n.map,exactPose:!1}}),this.#d&&this.#ge(this.#d.key),this.#W(["catalog",...e]),this.#k=""}#p(t,e=[]){this.#P(),this.#V(),this.refreshCatalog(!0,!0).then(()=>{if(this.#l||this.#s?.entryKey!==t||!this.#s.host.administrator||!this.#s.host.connected)return;let s=this.#e.value.resources.entry,n=this.#t.current();if(!s||s.entryId!==t||!n)return;let i=new Set(e);i.delete("history"),this.#se(s,n,i,!1)})}#D(){this.#A+=1,this.#_=null}#ue(t){let e=this.#_,s=this.#t.current();return!!(e&&s&&e.generation===this.#A&&e.stamp.generation===s.generation&&e.entryId===t.entryId&&e.coherenceIdentity===A(t)&&e.deltaUrl===t.deltaUrl&&s.entryKey===t.entryId&&s.floorKey===he(t)&&s.missionKey===pe(t)&&t.mapFloorCoherent&&t.mapSessionVerified&&this.#e.value.dataMode==="live"&&this.#e.value.selection.floorId==="current"&&this.#s?.host.connected&&this.#s.host.robotConnected&&this.#s.host.administrator)}#se(t,e,s,n=!0){(s.has("plans")||s.has("plan_state"))&&this.loadPlans(),s.has("areas")&&this.loadAreas(),s.has("history")&&this.#re(t,e),n&&["status","robot_state","activity","plan_state"].some(i=>s.has(i))&&this.refreshCatalog(!0,!0,!0)}#he(){this.#n.active&&(this.#h===null&&(this.#h=window.setInterval(()=>{this.refreshCatalog()},5e3)),this.#y===null&&(this.#y=window.setInterval(()=>{this.refreshPose()},Pn)))}#J(){this.#h!==null&&window.clearInterval(this.#h),this.#y!==null&&window.clearInterval(this.#y),this.#h=null,this.#y=null,this.#P()}#P(){let t=this.#d;if(this.#d=null,!t)return;t.attempt?.finishReplacementRead?.(),t.attempt&&(t.attempt.finishReplacementRead=null),t.retryTimer!==null&&window.clearTimeout(t.retryTimer);let e=t.attempt?.controller,s=!!(e&&e===this.#r.get("catalog")&&this.#e.value.resources.catalog.status==="loading");if(e?.abort(),s){let n=this.#e.value.resources;this.#e.patch({resources:{...n,catalog:m("idle",n.catalog.value)}})}this.#v?.state===t&&(this.#m=!1,this.#c=!1,this.#v=null)}#ne(t,e){let s=this.#d;s?.key===A(e)&&(s.failedKinds.delete(t),t==="delta"&&this.#ie(e),s.failedKinds.size===0&&this.#P())}#ie(t){this.#ge(A(t))}#ge(t){let e=this.#d;e?.key===t&&(e.attempt?.finishReplacementRead?.(),e.attempt&&(e.attempt.finishReplacementRead=null))}#pe(t,e){let s=A(e),n=this.#d;n?.key!==s&&(this.#P(),n={key:s,failedKinds:new Set,retryTimer:null,attempt:null},this.#d=n),n.failedKinds.add(t),t==="delta"&&this.#ie(e),this.#me(n)&&this.#t.current()&&this.#V(),!n.attempt&&n.retryTimer===null&&(n.failedKinds.size===1&&n.failedKinds.has(t)?this.#ve(n):this.#fe(n))}#me(t){let e=this.#e.value;return t.failedKinds.has("pose")||e.floor.readOnly||!e.map.floorCoherent||!e.map.sessionVerified}#fe(t){t.retryTimer!==null||t.failedKinds.size===0||(t.retryTimer=window.setTimeout(()=>{t.retryTimer=null;let e=this.#e.value.resources.entry,s=this.#s?.host;if(this.#d!==t||this.#l||!e||A(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#d===t&&this.#P();return}this.#ve(t)},Tn))}async#ve(t){if(this.#l||this.#d!==t||t.attempt)return;let e=this.#e.value.resources.entry,s=this.#s?.host;if(!e||A(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#d===t&&this.#P();return}if(this.#r.has("scene")){this.#fe(t);return}let n=this.#me(t);n?this.#t.current()&&this.#V():(this.#D(),this.#r.get("delta")?.abort());let i,o=new Promise(d=>{i=d}),a={generation:this.#t.generation,controller:null,replacementRead:o,finishReplacementRead:i};t.attempt=a;let l={state:t,attempt:a};try{await this.refreshCatalog(!0,!1,!n,l),t.failedKinds.has("delta")&&this.#d===t&&t.attempt===a&&await a.replacementRead}finally{if(this.#d!==t||t.attempt!==a)return;a.finishReplacementRead=null,t.attempt=null,t.failedKinds.size>0&&this.#fe(t)}}#Z(t){let e=this.#e.value,s=this.#s?.host;return!this.#l&&this.#n.active&&this.#d===t.state&&t.state.attempt===t.attempt&&t.attempt.generation===this.#t.generation&&e.generation===this.#t.generation&&e.dataMode==="live"&&e.selection.floorId==="current"&&e.resources.entry!==null&&A(e.resources.entry)===t.state.key&&!!(s?.connected&&s.administrator&&s.robotConnected&&s.robotCount>0)}#L(t){this.#r.get(t)?.abort();let e=new AbortController;return this.#r.set(t,e),e}#E(t,e){this.#r.get(t)===e&&this.#r.delete(t)}#W(t=[]){let e=!1;for(let[s,n]of this.#r)t.includes(s)||(e||=s==="plan-mutation"||s==="area-mutation"||s==="plan-preflight",n.abort(),this.#r.delete(s));e&&this.#e.value.command==="pending"&&this.#e.patch({command:"idle",notice:null})}#Re(){this.#C+=1,this.#u!==null&&window.clearTimeout(this.#u),this.#u=null}#j(t,e=null){this.#P(),this.#Re(),this.#t.invalidate(),this.#D(),this.#k="";let s=this.#t.generation;this.#W();let n=this.#e.value,i=U();this.#e.patch({command:"idle",dataMode:i.dataMode,floor:i.floor,managedLock:!1,workflow:"none",dialog:null,notice:null,draftFloorOrdinal:null,draw:i.draw,planDraft:i.planDraft,areaDraft:i.areaDraft,generation:s,coherence:n.host.administrator?"unavailable":"blocked",fullMap:!1,precisionOpen:!1,resources:{catalog:m("error",null,t),entry:null,scene:m("idle",null),pose:m("idle",null),history:m("idle",null),plans:m("idle",null),areas:m("idle",null)},manualRoomPreview:m("idle",null),map:{available:!1,complete:!1,floorCoherent:!1,sessionVerified:!1,exactPose:!1},selection:{...i.selection,entryId:e,entrySource:n.selection.entrySource,floorId:"current",historyId:null}})}async refreshCatalog(t=!1,e=!1,s=!1,n=null){if(this.#l||!this.#n.active||!this.#s?.host.administrator||!this.#s.host.connected||this.#s.host.robotCount===0||n&&(!this.#s.host.robotConnected||!this.#Z(n)))return;if(this.#b)return t&&(this.#f?e&&(this.#m?this.#c&&=s:this.#c=s,this.#m=!0):(this.#m?this.#c&&=s:this.#c=s,this.#m=!0,this.#r.get("catalog")?.abort()),n&&(this.#m?this.#c&&=s:this.#c=s,this.#v=n,this.#m=!0)),this.#M;this.#b=!0,this.#f=t;let i;this.#M=new Promise(l=>{i=l});let o=this.#L("catalog");n&&(n.attempt.controller=o);let a=this.#e.value.resources.catalog.value;this.#e.patch({resources:{...this.#e.value.resources,catalog:m("loading",a)}});try{let l=await this.#o.catalog(o.signal);if(o.signal.aborted||this.#l||n&&!this.#Z(n))return;let d=this.#s?.entryKey,c=d?l.find(v=>v.entryId===d)??null:l[0]??null,u=this.#e.value.resources.entry;if(c&&this.#d?.key===A(c)&&(this.#d.attempt!==null||this.#d.retryTimer!==null)&&(!n||!this.#Z(n))){this.#e.patch({managedLock:Ue(c),resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:u}});return}let p=!!(c&&u&&A(c)===A(u)&&this.#ue(u));if(c&&u&&K(c)===K(u)&&he(c)===he(u)&&pe(c)===pe(u)&&(p||c.mapRevision<u.mapRevision||!t&&this.#r.has("scene"))&&(c={...c,mapRevision:u.mapRevision}),this.#e.patch({managedLock:c?Ue(c):!1,resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:c}}),this.#s&&this.#U(this.#s),!c){this.#j("no-loaded-robot",this.#s?.entryKey??null);return}if(this.#e.value.selection.floorId!=="current"||this.#e.value.dataMode!=="live"){n&&this.#ie(c);return}let h=gt(c),f=this.#t.current(),g=!!(f&&u&&A(c)===A(u)&&c.mapFloorCoherent&&c.mapSessionVerified);if((!t||s)&&(h===this.#k||g)){let v=this.#e.value,_=c.mapFloorCoherent&&c.mapSessionVerified,S=c.health==="problem"||c.health==="limited";this.#e.patch({coherence:_?S?"degraded":"current":"verifying",map:{...v.map,available:v.resources.scene.value!==null,complete:c.mapComplete&&!c.mapTruncated,floorCoherent:c.mapFloorCoherent,sessionVerified:c.mapSessionVerified,exactPose:_?v.map.exactPose:!1},floor:{...v.floor,classifiedCount:Math.max(1,c.historyFloorCount)}}),_&&this.#e.value.resources.plans.problem==="map-rechecking"&&this.loadPlans(),this.#we();let k=f;if(k&&g&&(c.mapRevision>k.revision||n!==null)&&(c.mapRevision>k.revision&&(k=this.#t.advance(k,c.mapRevision)),k)){this.#k=h,this.#D();let b=this.#e.value.resources;this.#e.patch({resources:{...b,scene:m("loading",b.scene.value)}}),this.#oe(c,k)}k&&!v.resources.scene.value&&!this.#r.has("history")&&this.#re(c,k),_&&k&&(v.resources.scene.status==="error"||v.floor.readOnly)&&!this.#r.has("scene")&&this.#oe(c,k);return}this.#k=h,this.#Ee(c,u)}catch(l){if(z(l)||o.signal.aborted||this.#l)return;n&&this.#ge(n.state.key),this.#e.patch({coherence:this.#e.value.resources.scene.value?"degraded":"unavailable",resources:{...this.#e.value.resources,catalog:m("error",a,V(l,"catalog-unavailable"))}})}finally{this.#E("catalog",o),n?.attempt.controller===o&&(n.attempt.controller=null),this.#b=!1;let l=this.#m,d=this.#c,c=this.#v;this.#f=!1;try{l&&!this.#l&&(this.#m=!1,this.#c=!1,this.#v=null,await this.refreshCatalog(!0,!1,d,c))}finally{i()}}}#Ee(t,e){this.#d!==null&&this.#d.key!==A(t)&&this.#P();let s=this.#e.value,n=!!(e&&K(e)===K(t)),i=t.mapFloorCoherent&&t.mapSessionVerified,o=s.draftMapSessionKey??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapSessionKey:null),a=s.draftFloorOrdinal??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapFloorOrdinal:null),l=i?t.mapFloorOrdinal:null,d=i?t.mapSessionKey:null,c=e!==null&&e.entryId!==t.entryId||a!==null&&l!==null&&a!==l||o!==null&&d!==null&&o!==d,u=n&&i&&a===t.mapFloorOrdinal&&o===t.mapSessionKey,p=["catalog"];n&&!c&&p.push("plans","areas"),u&&p.push("plan-mutation","area-mutation");let h=this.#t.begin(t.entryId,he(t),pe(t),t.mapRevision);this.#d?.key===A(t)&&this.#d.attempt&&(this.#d.attempt.generation=h.generation),this.#D(),this.#W(p);let f=e?.entryId===t.entryId?s.resources.scene.value:null,g=f!==null&&(s.floor.readOnly||!n||!i||e?.mapSessionKey!==t.mapSessionKey),v=s.resources.pose.value,_=n&&i&&t.mapSessionKey!==null&&v?.position&&v.mapSessionKey===t.mapSessionKey?v:null;c&&this.#Re();let S=U(),k=t.health==="problem"||t.health==="limited",b=this.#e.value;this.#e.patch({...c?{command:"idle",workflow:"none",dialog:null,precisionOpen:!1,fullMap:!1,draw:S.draw,planDraft:S.planDraft,areaDraft:S.areaDraft,notice:I.mapChanged}:{},draftFloorOrdinal:l??a,draftMapSessionKey:d??o,managedLock:Ue(t),generation:h.generation,coherence:i?k?"degraded":g?"verifying":"current":"verifying",dataMode:"live",resources:{...b.resources,entry:t,scene:m(i?"loading":"idle",f),pose:m(i?"loading":"idle",_),history:m("loading",b.resources.history.value),plans:n&&!c?b.resources.plans:m("idle",null),areas:n&&!c?b.resources.areas:m("idle",null)},map:{available:f!==null,complete:t.mapComplete&&!t.mapTruncated,floorCoherent:t.mapFloorCoherent,sessionVerified:t.mapSessionVerified,exactPose:i&&_!==null&&!g},floor:{classifiedCount:Math.max(1,t.historyFloorCount),displayName:g?s.floor.displayName:t.selectedFloorOrdinal?`Floor ${t.selectedFloorOrdinal}`:"Current floor",readOnly:g},selection:{...b.selection,entryId:t.entryId,floorId:"current",historyId:null,roomIds:c?[]:b.selection.roomIds,roomSettings:c?[]:b.selection.roomSettings,planId:c?null:b.selection.planId,areaId:c?null:b.selection.areaId}}),this.#re(t,h),i&&this.#e.value.resources.plans.status==="idle"&&this.loadPlans(),this.#we(),i&&(this.#oe(t,h),this.#ae(t,h))}async#oe(t,e){if(!this.#n.active)return;let s=this.#L("scene");try{let n=await this.#o.scene(t.sceneUrl,t.mapRevision,t.mapFloorCoherent,"live",s.signal);if(!this.#t.accepts(e))return;if(!n.floorCoherent){let d=this.#e.value;this.#e.patch({coherence:"verifying",resources:{...d.resources,scene:m("error",d.resources.scene.value,"map-rechecking"),pose:m("idle",null)},map:{...d.map,available:d.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...d.floor,readOnly:d.resources.scene.value!==null}}),this.#ie(t);return}if(n.revision<e.revision||!n.scene)throw new T("scene-unavailable");let i=n.revision===e.revision?e:this.#t.advance(e,n.revision);if(!i)throw new T("scene-unavailable");let o=this.#e.value,a={...o.resources.entry??t,mapRevision:n.revision};this.#k=gt(a),this.#e.patch({coherence:a.health==="problem"||a.health==="limited"?"degraded":"current",resources:{...o.resources,entry:a,scene:m("ready",n.scene)},map:{...o.map,available:!0},floor:{...o.floor,readOnly:!1,displayName:o.resources.history.value?.floors.find(d=>d.active)?.label||(a.selectedFloorOrdinal?`Floor ${a.selectedFloorOrdinal}`:"Current floor")},notice:o.notice?.key==="v4_notice_saved_map"?null:o.notice});let l=this.#e.value.resources.plans;if((l.status==="idle"||l.problem==="map-rechecking")&&this.loadPlans(),this.#we(),t.deltaUrl&&typeof DecompressionStream=="function"){let d=++this.#A;this.#Pe(a,i,n.scene,d)}else this.#ne("delta",a)}catch(n){if(z(n)||!this.#t.accepts(e))return;if(n instanceof T&&n.code==="request-timeout"){let l=this.#e.value;this.#e.patch({resources:{...l.resources,scene:m("loading",l.resources.scene.value,"scene-building")}}),window.setTimeout(()=>{this.#l||!this.#t.accepts(e)||this.#e.value.selection.floorId!=="current"||this.#oe(t,e)},250);return}this.#ie(t);let i=this.#e.value,o=i.resources.pose.value,a=i.resources.scene.value!==null&&t.mapSessionKey!==null&&o?.position!==null&&o?.mapSessionKey===t.mapSessionKey;this.#e.patch({coherence:"degraded",resources:{...i.resources,scene:m("error",i.resources.scene.value,V(n,"scene-unavailable"))},map:{...i.map,available:i.resources.scene.value!==null,exactPose:a}})}finally{this.#E("scene",s)}}async#Pe(t,e,s,n){if(!t.deltaUrl||typeof DecompressionStream!="function")return;let i=t.deltaUrl,o={generation:n,stamp:e,entryId:t.entryId,coherenceIdentity:A(t),deltaUrl:i};if(n!==this.#A||!this.#t.accepts(e))return;this.#_=o;let a=t,l=e,d=s;try{for(;!this.#l&&this.#n.active&&n===this.#A&&this.#t.accepts(l)&&this.#e.value.selection.floorId==="current";){let c=this.#L("delta");try{let u=await this.#o.sceneDelta(i,d,a.mapFloorCoherent,c.signal);if(c.signal.aborted||this.#l||n!==this.#A||!this.#t.accepts(l))return;if(!u.floorCoherent){let f=this.#e.value;this.#e.patch({coherence:"verifying",map:{...f.map,available:f.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...f.floor,readOnly:f.resources.scene.value!==null},resources:{...f.resources,scene:m("error",f.resources.scene.value,"map-rechecking"),pose:m("idle",null)}}),this.#pe("delta",a);return}if(u.notModified||!u.scene){this.#ne("delta",a),await new Promise(f=>window.setTimeout(f,100));continue}let p=this.#t.advance(l,u.revision);if(!p)return;l=p,o.stamp=p,d=u.scene,a={...a,mapRevision:u.revision},this.#ne("delta",a),this.#k=gt(a);let h=this.#e.value;this.#e.patch({resources:{...h.resources,entry:a,scene:m("ready",d)},map:{...h.map,available:!0,floorCoherent:!0}}),this.#ae(a,l)}finally{this.#E("delta",c)}}}catch(c){if(z(c)||this.#l||n!==this.#A||!this.#t.accepts(l))return;this.#pe("delta",a)}finally{this.#_===o&&(this.#_=null)}}async#re(t,e){if(!this.#n.active)return;let s=this.#L("history");try{let n=await this.#o.history(t.historyUrl,s.signal),i=this.#t.current();if(s.signal.aborted||!i||!Ve(e,i)||n.entryId!==t.entryId)return;let o=this.#e.value,a=n.floors.find(c=>c.id===o.selection.floorId),l=!o.selection.historyId||a?.snapshots.some(c=>c.id===o.selection.historyId),d=o.dataMode==="live"?n.floors.find(c=>c.active):a;if(this.#e.patch({resources:{...this.#e.value.resources,history:m("ready",n)},floor:{...this.#e.value.floor,classifiedCount:n.floors.length,...d&&!(o.dataMode==="live"&&o.floor.readOnly)?{displayName:je(d,1)}:{}}}),o.dataMode==="live"&&!o.resources.scene.value){let c=n.floors.flatMap(u=>u.snapshots.map(p=>({floor:u,snapshot:p}))).sort((u,p)=>Date.parse(p.snapshot.createdAt)-Date.parse(u.snapshot.createdAt));for(let u of c){let p;try{p=await this.#o.scene(u.snapshot.sceneUrl,u.snapshot.revision,!0,"history",s.signal)}catch(g){if(z(g)||s.signal.aborted)return;continue}let h=this.#t.current();if(s.signal.aborted||!h||!Ve(e,h)||this.#e.value.resources.scene.value)return;if(!p.scene)continue;let f=this.#e.value;this.#e.patch({floor:{...f.floor,readOnly:!0,displayName:je(u.floor,1)},resources:{...f.resources,scene:m("ready",p.scene),pose:m("idle",null)},map:{...f.map,available:!0,exactPose:!1},notice:Cn(u.snapshot.createdAt)});break}}if(o.dataMode==="history"&&(!a||!l)){let c=a||n.floors.find(p=>p.active)||n.floors[0],u=this.selectFloor(c?.id||"current");!this.#l&&o.workflow==="history"&&this.#e.dispatch({type:"open-workflow",workflow:"history"}),await u}}catch(n){let i=this.#t.current();if(z(n)||s.signal.aborted||!i||!Ve(e,i))return;this.#e.patch({resources:{...this.#e.value.resources,history:m("error",null,V(n,"history-unavailable"))}})}finally{this.#E("history",s)}}async refreshPose(){let t=this.#e.value.resources.entry,e=this.#t.current();!t||!e||this.#e.value.selection.floorId!=="current"||!t.mapFloorCoherent||!t.mapSessionVerified||await this.#ae(t,e)}async#ae(t,e){if(this.#l||!this.#n.active||!this.#O||!this.#s?.host.connected)return;if(this.#T){this.#S=!0;return}this.#T=!0;let s=this.#L("pose");try{let n=await this.#o.pose(t.poseUrl,s.signal),i=this.#t.current(),o=this.#e.value.resources.entry;if(!i||!Ve(e,i)||!o||!this.#e.value.map.floorCoherent)return;if(!n.floorCoherent||n.mapSessionKey===null||n.mapSessionKey!==o.mapSessionKey){this.#e.patch({resources:{...this.#e.value.resources,pose:m("idle",null)},map:{...this.#e.value.map,exactPose:!1}}),this.#pe("pose",o);return}this.#ne("pose",o);let a=this.#e.value,l=a.resources.pose.value,d=!!(a.map.exactPose&&l?.position&&l.mapSessionKey===o.mapSessionKey);if(n.position===null&&d){this.#e.patch({resources:{...a.resources,pose:m("ready",l)}});return}this.#e.patch({resources:{...a.resources,pose:m("ready",n)},map:{...a.map,exactPose:n.position!==null}})}catch(n){if(z(n)||!this.#t.accepts(e))return;let i=this.#e.value,o=i.resources.pose.value,a=!!(i.map.exactPose&&o?.position&&o.mapSessionKey===i.resources.entry?.mapSessionKey);this.#e.patch({resources:{...i.resources,pose:m("error",a?o:null,V(n,"pose-unavailable"))},map:{...i.map,exactPose:a}})}finally{if(this.#E("pose",s),this.#T=!1,this.#S&&!this.#l&&this.#O&&this.#s?.host.connected&&this.#s.host.administrator&&this.#s.host.robotCount>0){this.#S=!1;let n=this.#e.value.resources.entry,i=this.#t.current();n&&i&&this.#ae(n,i)}else this.#S=!1}}async selectFloor(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;let n=e.floors.find(l=>l.id===t);if(!n&&t!=="current")return;let i=this.#e.value;if(i.workflow==="draw"&&(i.draw.dirty||i.areaDraft.dirty)||i.workflow==="areaReview"&&(i.draw.dirty||i.areaDraft.dirty))return;if(!n||n.active){this.#P(),this.#k="";let l=this.#e.value;this.#e.patch({resources:{...l.resources,plans:m("idle",null),areas:m("idle",null),scene:m("idle",l.resources.scene.value),pose:m("idle",null)},map:{...l.map,available:l.resources.scene.value!==null,exactPose:!1},coherence:"verifying",floor:{...l.floor,readOnly:l.resources.scene.value!==null},workflow:"none",precisionOpen:!1}),this.#e.dispatch({type:"set-floor",floorId:"current"}),await this.refreshCatalog(!0);return}this.#P();let o=n.snapshots.at(-1),a=this.#t.begin(s.entryId,n.id,o?.id||n.id,o?.revision||0);this.#W(["catalog"]),this.#e.patch({generation:a.generation,coherence:"current",dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:je(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:o?.id||null},resources:{...this.#e.value.resources,scene:m(o?"loading":"empty",null),pose:m("idle",null),plans:m("idle",null),areas:m("idle",null)},workflow:"none",precisionOpen:!1,map:{available:!1,complete:!0,floorCoherent:!0,sessionVerified:!0,exactPose:!1}}),o&&await this.#be(o,a)}async selectHistory(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;if(!t){await this.selectFloor("current");return}let n=e.floors.find(a=>a.snapshots.some(l=>l.id===t)),i=n?.snapshots.find(a=>a.id===t);if(!n||!i)return;this.#P();let o=this.#t.begin(s.entryId,n.id,i.id,i.revision);this.#W(["catalog"]),this.#e.patch({generation:o.generation,dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:je(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:i.id},resources:{...this.#e.value.resources,scene:m("loading",null),pose:m("idle",null)},map:{...this.#e.value.map,available:!1,exactPose:!1}}),await this.#be(i,o)}async#be(t,e){if(!this.#n.active)return;let s=this.#L("history-scene");try{let n=await this.#o.scene(t.sceneUrl,t.revision,!0,"history",s.signal);if(!this.#t.accepts(e)||!n.scene)return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("ready",n.scene)},map:{...this.#e.value.map,available:!0,exactPose:!1}})}catch(n){if(z(n)||!this.#t.accepts(e))return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("error",null,V(n,"history-scene-unavailable"))}})}finally{this.#E("history-scene",s)}}async openWorkflow(t){let e=this.#e.value;if((e.dataMode==="history"||e.floor.readOnly)&&Gs.includes(t))return;let s=this.#e.value.workflow;if(t==="draw"&&s!=="draw"&&s!=="areaReview"&&this.selectArea(null),this.#e.dispatch({type:"open-workflow",workflow:t}),Gs.includes(t)&&this.#ke(),t==="history"){let n=this.#e.value.resources.entry,i=this.#t.current();n&&i&&(this.#e.patch({resources:{...this.#e.value.resources,history:m("loading",this.#e.value.resources.history.value)}}),await this.#re(n,i))}(t==="plans"||t==="plan"||t==="rooms")&&await this.loadPlans(),(t==="draw"||t==="areaReview")&&await this.loadAreas()}async loadPlans({force:t=!1,inPlace:e=!1,onError:s}={}){let n=!e||this.#e.value.resources.plans.status!=="ready";if(!this.#n.active){this.#r.get("plans")?.abort();let l=this.#e.value.resources;return n&&this.#e.patch({resources:{...l,plans:m("idle",l.plans.value)}}),null}let i=this.#e.value.resources.entry;if(!i||!this.#t.current()||!st(this.#e.value)||!t&&this.#r.has("plans"))return null;let o=K(i),a=this.#L("plans");n&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("loading",this.#e.value.resources.plans.value)}});try{let l=await this.#o.plans(i.plansUrl,a.signal),d=this.#e.value.resources.entry;if(a.signal.aborted||this.#l||!d||K(d)!==o)return null;let c=this.#e.value;if(c.workflow==="plan"&&c.planDraft.id&&!c.planDraft.dirty&&!l.plans.some(h=>h.id===c.planDraft.id))return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)},workflow:"plans",precisionOpen:!1,selection:{...this.#e.value.selection,planId:null},planDraft:U().planDraft,notice:I.planRemoved}),l;if(c.planDraft.dirty||c.workflow==="plan"&&(!c.planDraft.id||c.command==="pending"))return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)}}),l;let u=c.workflow==="plan"?c.selection.planId:l.selectedPlan||l.plans[0]?.id||null,p=l.plans.find(h=>h.id===u);return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)},selection:{...this.#e.value.selection,planId:u},planDraft:p?et(p):{...this.#e.value.planDraft,id:null,name:"",rooms:[],parkedRooms:[],dirty:!1}}),l}catch(l){let d=this.#e.value.resources.entry;if(z(l)||a.signal.aborted||this.#l||!d||K(d)!==o)return null;let c=l instanceof T&&l.code==="map-rechecking"?"map-rechecking":V(l,"plans-unavailable");return n&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("error",this.#e.value.resources.plans.value,c)}}),s?.(),null}finally{this.#E("plans",a)}}selectPlan(t,e=!1,s){this.#e.patch(Ot(this.#e.value,t,e,s))}setPlanEnabled(t){return this.#ee("plan-mutation",I.planSaveFailed,(e,s)=>e.setPlanEnabled(s,t))}#we(){let t=this.#e.value;(t.workflow==="draw"||t.workflow==="areaReview")&&t.resources.areas.status==="idle"&&this.loadAreas()}async loadAreas({reconcileDraft:t=!0}={}){if(!this.#n.active){this.#r.get("areas")?.abort();let i=this.#e.value.resources;return this.#e.patch({resources:{...i,areas:m("idle",i.areas.value)}}),null}let e=this.#e.value.resources.entry;if(!e||!this.#t.current()||!st(this.#e.value))return null;let s=K(e),n=this.#L("areas");this.#e.patch({resources:{...this.#e.value.resources,areas:m("loading",this.#e.value.resources.areas.value)}});try{let i=await this.#o.areas(e.areasUrl,n.signal),o=this.#e.value.resources.entry;if(n.signal.aborted||this.#l||!o||K(o)!==s)return null;if(i.sceneUrl!==o.sceneUrl)throw new T("areas-unavailable");this.#e.patch({resources:{...this.#e.value.resources,areas:m("ready",i)}});let a=this.#e.value.selection.areaId,l=this.#e.value,d=i.areas.some(c=>c.id===a);return t&&a!==null&&!d&&(l.draw.dirty||l.areaDraft.dirty)?this.#e.patch({selection:{...l.selection,areaId:null},areaDraft:{...l.areaDraft,id:null,status:"new",canRebind:!1,dirty:!0},notice:I.areaRemoved}):t&&!l.draw.dirty&&!l.areaDraft.dirty&&this.selectArea(d?a:null),i}catch(i){let o=this.#e.value.resources.entry;return z(i)||n.signal.aborted||this.#l||!o||K(o)!==s||this.#e.patch({resources:{...this.#e.value.resources,areas:m("error",this.#e.value.resources.areas.value,V(i,"areas-unavailable"))}}),null}finally{this.#E("areas",n)}}selectArea(t){let e=this.#e.value.resources.areas.value?.areas.find(n=>n.id===t),s=this.#e.value;this.#e.patch({selection:{...s.selection,areaId:t},areaDraft:e?this.#Te(e):{id:null,name:"",cleaningMode:"vacuum",coverageSetting:"standard",status:"new",canRebind:!1,dirty:!1},draw:{...s.draw,circles:e?.circles||[],outline:e?.outline??null,outlineUndo:[],outlineRedo:[],tool:!e||e.outline?"outline":"paint",undo:[],redo:[],dirty:!1,strokeCount:0}})}#Te(t){return{id:t.id,name:t.name,cleaningMode:t.cleaningMode,coverageSetting:t.coverageSetting,status:t.status,canRebind:t.canRebind,dirty:!1}}saveArea(t){return this.#ee("area-mutation",I.areaSaveFailed,(e,s)=>e.saveArea(s),t)}deleteArea(){return this.#ee("area-mutation",I.areaDeleteFailed,(t,e)=>t.deleteArea(e))}savePlan(t){return this.#ee("plan-mutation",I.planSaveFailed,(e,s)=>e.savePlan(s),t)}deletePlan(){return this.#ee("plan-mutation",I.planDeleteFailed,(t,e)=>t.deletePlan(e))}#ke(){return this.#ce??=import("./catalog-writes-D44AUTSA.js").catch(()=>null)}async#ee(t,e,s,n){let i=n,o=d=>{let c=i;i=void 0,c?.(d)},a=this.#e.value;if(a.command==="pending"||this.#r.has(t))return o(!1);let l=this.#L(t);l.signal.addEventListener("abort",()=>o(!1),{once:!0});try{let d=await this.#ke(),c=this.#e.value;if(l.signal.aborted||!tt(c)||c.command==="pending")return;if(!d){this.#e.patch({notice:e});return}await s(d,{state:a,signal:l.signal,store:this.#e,backend:this.#o,effects:this,helpers:En,failure:e,projection:()=>this.#s,disposed:()=>this.#l,release:()=>this.#E(t,l),settled:o})}finally{this.#E(t,l),o(!1)}}async executeAction(t,e){switch(typeof t=="string"?t:t.id){case"recheck-status":{if(this.#e.value.rechecking)return;let n=this.#e.value.selection.entryId;this.#e.patch({rechecking:!0});try{await this.refreshCatalog(!0)}finally{this.#l||this.#e.patch({rechecking:!1})}let i=this.#e.value;!this.#l&&i.selection.entryId===n&&i.resources.catalog.status==="ready"&&i.host.connected&&i.host.robotConnected&&i.coherence==="current"&&i.command==="failed"&&this.#e.patch({command:"idle",notice:I.statusRefreshed});return}case"stop":await this.#le("matic_robot","stop_intelligent_cleaning",{include_unmanaged:!0});return;case"resume":await this.#le("vacuum","send_command",{command:"resume"});return;case"run-plan":{let n=this.#e.value,i=n.selection.planId||n.resources.plans.value?.selectedPlan;if(!i||n.workflow!=="plan"||!n.planDraft.enabled||n.resources.plans.status!=="ready"||n.command!=="idle"||!Se(n))return;let o=n.selection.entryId,a=n.generation,l=n.selection.planId,d=n.planDraft,c=n.resources.plans.value?.plans.find(v=>v.id===i)?.nextRunPreview;if(!c||!/^[0-9a-f]{64}$/u.test(c.previewToken??"")){this.#e.patch({notice:I.planPreviewMissing});return}this.#e.patch({command:"pending",pendingAction:"run-plan",notice:null});let u=this.#L("plan-preflight"),p;try{p=await this.loadPlans({force:!0,inPlace:!0})}finally{this.#E("plan-preflight",u)}let h=this.#e.value,f=()=>{let v=this.#e.value;!this.#l&&v.selection.entryId===o&&v.generation===a&&v.command==="pending"&&this.#e.patch({command:"idle"})};if(u.signal.aborted||this.#l||h.selection.entryId!==o||h.generation!==a||h.workflow!=="plan"||h.selection.planId!==l||(h.selection.planId||h.resources.plans.value?.selectedPlan)!==i||h.planDraft!==d){f();return}if(!p){f(),this.#e.patch({notice:I.planPreviewRefreshFailed});return}let g=p.plans.find(v=>v.id===i)?.nextRunPreview;if(!g||g.blocker||!/^[0-9a-f]{64}$/u.test(g.previewToken??"")){f(),this.#e.patch({notice:I.planPreviewNone});return}if(!c||JSON.stringify(c)!==JSON.stringify(g)){f(),this.#e.patch({notice:I.planPreviewChanged});return}f(),await this.#le("matic_robot","run_selected_plan",{plan:i,preview_token:g.previewToken});return}case"clean-rooms":{await this.#Ae();return}case"run-area":{let n=this.#e.value.selection.areaId;n&&await this.#le("matic_robot","clean_area",{area:n});return}case"review-area":this.#e.dispatch({type:"open-workflow",workflow:"areaReview"});return;case"save-area":await this.saveArea(e);return;case"save-plan":this.#e.value.planDraft.id&&!this.#e.value.planDraft.dirty?(this.#e.dispatch({type:"set-plan-view",view:"run"}),e?.(!0)):await this.savePlan(e);return;case"delete-plan":await this.deletePlan();return;case"delete-area":await this.deleteArea();return;case"reset-room-cadence":if(typeof t=="string")return;await this.#ee("plan-mutation",t.mode==="mop"?I.resetMopFailed:I.resetVacuumFailed,(n,i)=>n.resetRoomCadence(i,t));return}}async#Ae(){if(this.#X)return;let t=this.#e.value,e=this.#B(t),s=Ze(t);if(!e||!s||s.key!==e.key||s.generation!==e.generation||s.floorKey!==e.floorKey||s.missionKey!==e.missionKey||s.preview.entryId!==e.entryId||s.preview.blocker||s.preview.rooms.length===0)return;this.#X=!0;let n=this.#L("room-preview");this.#q=this.#F(e),this.#e.patch({manualRoomPreview:m("loading",null),notice:null});try{let i=await this.#o.previewRoomSequence(e.entityId,e.rooms,e.overrideRoomSchedule,n.signal);if(n.signal.aborted||!this.#K(e)||i.entryId!==e.entryId)return;let o={key:e.key,generation:e.generation,floorKey:e.floorKey,missionKey:e.missionKey,preview:i};if(i.blocker||i.rooms.length===0){this.#e.patch({manualRoomPreview:m("ready",o),notice:I.roomPreviewBlocked});return}if(Js(s.preview)!==Js(i)){this.#e.patch({manualRoomPreview:m("ready",o),notice:I.roomPreviewChanged});return}if(this.#e.patch({manualRoomPreview:m("ready",o),notice:null}),!this.#K(e)||!Se(this.#e.value))return;await this.#le("matic_robot","clean_room_sequence",{rooms:e.rooms,use_room_schedule:!0,override_room_schedule:e.overrideRoomSchedule,return_to_base:!0,preview_token:i.previewToken})}catch(i){!z(i)&&!n.signal.aborted&&this.#K(e)&&this.#e.patch({manualRoomPreview:m("error",null,V(i,"preview-unavailable")),notice:I.roomPreviewFailed})}finally{this.#E("room-preview",n),this.#X=!1,this.#de()}}async#le(t,e,s){let n=this.#e.value,i=this.#s?.vacuumEntityId,o=e==="stop_intelligent_cleaning"||t==="vacuum"&&e==="return_to_base",a=t==="vacuum"&&e==="send_command"&&s.command==="resume";if(!i||n.selection.entryId!==this.#s?.entryKey||(o?!Ht(n):a?!qt(n):!Se(n)))return;let l=++this.#C,d=this.#s?.entryKey,c=()=>!this.#l&&l===this.#C&&d===this.#s?.entryKey,u=o?"settling":"starting";this.#u!==null&&window.clearTimeout(this.#u),this.#u=null,this.#e.patch({command:u,notice:null});try{if(await this.#o.service(t,e,s,i),!c())return;if(t==="matic_robot"&&(e==="clean_room_sequence"||e==="run_selected_plan")){this.#e.patch({command:"idle"}),this.refreshCatalog(!0);return}this.#e.patch({command:u}),this.#u!==null&&window.clearTimeout(this.#u),this.#u=window.setTimeout(()=>{this.#u=null,c()&&this.#e.value.command===u&&this.#e.patch({command:"idle"})},15e3)}catch(p){if(!c())return;this.#e.patch({command:"failed",notice:o?I.stopUnconfirmed:Mn(p)??I.actionUnconfirmed})}}dispose(){this.#l||(this.#l=!0,this.#n.dispose(),this.#V(!1),this.#x?.(),this.#x=null,this.#e.patch({manualRoomPreview:m("idle",null),rechecking:!1}),this.#J(),this.#W(),this.#u!==null&&window.clearTimeout(this.#u),this.#u=null,this.#a.dispose(),this.#_e(),this.#o.dispose())}#_e(){this.#g?.dispose(),this.#g=null,this.#$=null,this.#w=null}};var An=r=>r.workflow==="none"?0:r.workflow!=="plan"?1:r.planView==="edit"&&r.planDraft.id!==null?3:2,bt=r=>An(r)+(r.fullMap?1:0)+(r.precisionOpen?1:0)+(r.dialog?1:0),Xe=r=>{if(!r||typeof r!="object")return null;let t=r.maticMapLayer;if(!t||typeof t!="object")return null;let e=t.owner,s=t.depth;return typeof e=="string"&&Number.isInteger(s)&&Number(s)>=0?{owner:e,depth:Number(s)}:null},Ge=class{#e;#t=`matic-map-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}`;#o=0;#n=0;#a=!1;#i=null;#r=!1;constructor(t){this.#e=t}start(){if(this.#i)return;this.#o=bt(this.#e.value);let t=Xe(history.state);this.#n=t?.owner===this.#t?t.depth:0,this.#i=this.#e.subscribe(e=>this.#s(e)),window.addEventListener("popstate",this.#h)}#s(t){let e=bt(t);if(this.#r){this.#r=!1,this.#o=e;return}if(e<this.#o&&Xe(history.state)?.owner===this.#t&&this.#n>e){let n=e-this.#n;this.#o=e,this.#n=e,this.#a||(history.go(n),this.#a=!0);return}if(e>this.#n)for(let s=this.#n+1;s<=e;s+=1){let n=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...n,maticMapLayer:{owner:this.#t,depth:s}},"",window.location.href),this.#n=s}this.#o=e}#h=()=>{let t=Xe(history.state);this.#a=!1,this.#n=t?.owner===this.#t?t.depth:0;let e=bt(this.#e.value);if(this.#n>e){let s=e-this.#n;this.#n=e,history.go(s),this.#a=!0;return}if(this.#e.value.dialog==="discardDraft"&&this.#e.value.command==="pending"){let s=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...s,maticMapLayer:{owner:this.#t,depth:this.#o}},"",window.location.href),this.#n=this.#o;return}if(!(e<=this.#n)){if(oe(this.#e.value,{type:"dismiss-top-layer"})){let s=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...s,maticMapLayer:{owner:this.#t,depth:this.#o}},"",window.location.href),this.#n=this.#o,this.#e.dispatch({type:"open-dialog",dialog:"discardDraft"});return}this.#r=!0,this.#e.dispatch({type:"dismiss-top-layer"})}};dismissTop(){return this.#o<1?!1:this.#a?(this.#e.dispatch({type:"dismiss-top-layer"}),!0):(Xe(history.state)?.owner===this.#t&&this.#n===this.#o?(history.back(),this.#n=this.#o-1,this.#a=!0):this.#e.dispatch({type:"dismiss-top-layer"}),!0)}dispose(){this.#i?.(),this.#i=null,window.removeEventListener("popstate",this.#h),this.#o=0,this.#n=0,this.#a=!1}};var wt=[Me,Pe,is,Ee`
    :host {
      display: block;
      min-inline-size: 0;
      min-block-size: 0;
      block-size: 100%;
      color: var(--ms-text);
      background: var(--ms-surface-app);
      font-family: var(--ms-font);
      container-type: size;
    }

    .root { --ms-inspector: 22.5rem; position: relative; min-block-size: 0; block-size: 100%; }

    .sr-only, .skip-link:not(:focus) {
      position: absolute;
      overflow: hidden;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
      clip-path: inset(50%);
      white-space: nowrap;
    }
    .skip-link:focus {
      position: absolute;
      z-index: 40;
      inset-block-start: calc(var(--ms-space-2) + var(--ms-safe-top));
      inset-inline-start: var(--ms-space-2);
    }

    .app {
      display: grid;
      grid-template-rows: calc(3.5rem + var(--ms-safe-top)) minmax(0, 1fr);
      min-block-size: 36rem;
      block-size: 100%;
      background: var(--ms-surface-app);
    }
    .app[inert] { filter: none; }

    .app-bar {
      color: var(--ms-bar-text);
      --ms-local: var(--ms-surface-bar);
      position: relative;
      z-index: 12;
      display: flex;
      align-items: center;
      gap: var(--ms-space-2);
      min-inline-size: 0;
      padding-block-start: var(--ms-safe-top);
      padding-inline: max(var(--ms-space-3), var(--ms-safe-left)) max(var(--ms-space-3), var(--ms-safe-right));
      border-block-end: 1px solid var(--ms-line);
      background: var(--ms-local);
      box-shadow: var(--ms-shadow-1);
    }

    .app-bar > .ms-btn, .app-bar > .overflow-wrap > .ms-btn { color: var(--ms-bar-text); }
    .app-bar > .ms-btn:focus-visible, .app-bar > .overflow-wrap > .ms-btn:focus-visible { outline-color: var(--ms-bar-text); }

    .context-switcher { max-inline-size: 9rem; inline-size: auto; min-block-size: var(--ms-control); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .floor-switcher, .robot-switcher { appearance: none; block-size: 44px; padding-inline-end: 1.8rem; background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%); background-position: calc(100% - 15px) 50%, calc(100% - 10px) 50%; background-size: 5px 5px; background-repeat: no-repeat; }
    .floor-switcher:dir(rtl), .robot-switcher:dir(rtl) { background-position: 10px 50%, 15px 50%; }


    .title {
      flex: none;
      overflow: hidden;
      min-inline-size: min-content;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: var(--ms-t-lg);
      font-weight: var(--ms-w-bold);
      letter-spacing: var(--ms-track-tight);
    }

    .spacer { flex: 1; }

    .overflow-wrap { position: relative; }
    .overflow-menu {
      position: absolute;
      z-index: 18;
      inset-block-start: calc(100% + var(--ms-space-1));
      inset-inline-end: 0;
      display: grid;
      gap: var(--ms-space-1);
      min-inline-size: 14rem;
      padding: var(--ms-space-1);
    }
    .overflow-menu .ms-row { justify-content: flex-start; }
    .overflow-menu [role="menuitemcheckbox"] { justify-content: space-between; gap: var(--ms-space-3); }
    .overflow-menu [role="group"] { display: grid; gap: var(--ms-space-1); }
    .overflow-menu [role="group"] + * { border-block-start: 1px solid var(--ms-line); padding-block-start: var(--ms-space-1); }
    .menu-heading { margin: 0; padding: var(--ms-space-2) var(--ms-space-3) var(--ms-space-1); color: var(--ms-text-quiet); font-size: var(--ms-t-sm); font-weight: var(--ms-w-bold); }

    .workspace {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(19rem, var(--ms-inspector));
      min-inline-size: 0;
      min-block-size: 0;
    }

    .workspace.full-map { grid-template-columns: minmax(0, 1fr); }
    .workspace.full-map .inspector,
    .workspace.full-map .mobile-sheet,
    .workspace.full-map .sheet-scrim { display: none; }

    .canvas { position: relative; min-inline-size: 0; min-block-size: 0; }
    .map-canvas { block-size: 100%; }

    .inspector {
      --ms-local: var(--ms-surface-card);
      display: flex;
      flex-direction: column;
      min-inline-size: 0;
      min-block-size: 0;
      border-inline-start: 1px solid var(--ms-line);
      background: var(--ms-local);
    }

    .status-strip {
      display: grid;
      grid-template-columns: var(--ms-control-sm) minmax(0, 1fr) auto;
      gap: var(--ms-space-3);
      align-items: center;
      padding: var(--ms-space-3) var(--ms-space-4);
      border-block-end: 1px solid var(--ms-line);
    }

    .status-icon {
      display: grid;
      place-items: center;
      inline-size: var(--ms-control-sm);
      block-size: var(--ms-control-sm);
      border-radius: 50%;
      color: var(--ms-accent);
      background: color-mix(in srgb, var(--ms-accent) 11%, var(--ms-local));
    }

    .status-copy { min-inline-size: 0; }
    .status-strip strong, .status-strip small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .status-strip strong { font-size: var(--ms-t-sm); }
    .status-strip small { margin-block-start: 0.125rem; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); }
    .status-strip .action-reason { display: none; }

    .workflow {
      display: flex;
      flex: 1;
      flex-direction: column;
      min-block-size: 0;
      padding: var(--ms-space-4);
      overflow: hidden;
    }
    .workflow-body { flex: 1; min-block-size: 0; overflow: auto; overscroll-behavior: contain; }
    .panel-top:focus-visible, .sheet-body:focus-visible, .workflow-body:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: -2px; }
    .workflow > .action-bar { flex: none; }

    .panel-heading { display: flex; flex-wrap: wrap; gap: var(--ms-space-2); align-items: center; min-inline-size: 0; }
    .panel-heading h2 { flex: 1; margin: 0; min-inline-size: 0; font-size: var(--ms-t-xl); letter-spacing: var(--ms-track-tight); }
    .panel-heading bdi { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .panel-heading h2:focus { outline: none; }
    .panel-heading h2:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: 4px; border-radius: var(--ms-radius-xs); }
    .panel-description { margin: var(--ms-space-1) 0 var(--ms-space-4); color: var(--ms-text-quiet); font-size: var(--ms-t-sm); line-height: var(--ms-lh-normal); }

    .notice {
      --notice-tone: var(--ms-accent);
      --ms-local: color-mix(in srgb, var(--notice-tone) 12%, var(--ms-surface-card));
      display: flex;
      gap: var(--ms-space-2);
      align-items: center;
      padding-inline-start: var(--ms-space-3);
      border-inline-start: 3px solid var(--notice-tone);
      border-radius: var(--ms-radius-md);
      background: var(--ms-local);
      color: var(--ms-text);
      font-size: var(--ms-t-sm);
      line-height: var(--ms-lh-snug);
    }
    .notice[data-tone="success"] { --notice-tone: var(--ms-success); }
    .notice[data-tone="warning"] { --notice-tone: var(--ms-warning); }
    .notice[data-tone="error"] { --notice-tone: var(--ms-danger); }
    .notice > .ms-icon { color: var(--notice-tone); }
    .notice > .ms-btn { flex: none; }
    .notice-text { flex: 1; min-inline-size: 0; padding-block: var(--ms-space-2); }
    [data-notice-slot] { margin-block-start: var(--ms-space-3); }
    .notice-toast {
      position: absolute;
      z-index: 10;
      inset-inline: 0 var(--ms-inspector);
      inset-block-end: calc(var(--ms-space-3) + 3.5rem + var(--ms-space-2));
      inline-size: fit-content;
      max-inline-size: min(28rem, calc(100% - var(--ms-inspector) - 2 * var(--ms-space-3)));
      margin-inline: auto;
      box-shadow: var(--ms-shadow-2);
    }
    .notice-toast[hidden] { display: none; }
    .narrow > .notice-toast { inset-inline: 0; inset-block-end: calc(var(--map-sheet-offset, 0px) + var(--ms-space-2)); max-inline-size: calc(100% - 2 * var(--ms-space-3)); }
    .root:has(.full-map-hud) > .notice-toast {
      inset-inline: auto var(--ms-space-3);
      inset-block-end: calc(max(var(--ms-space-3), var(--ms-safe-bottom)) + var(--ms-control-lg) + 3 * var(--ms-space-3));
      inline-size: min(24rem, calc(100% - 1.5rem));
      max-inline-size: none;
    }
    .wide:has(.full-map-hud.above-dock) > .notice-toast { inset-block-end: calc(max(var(--ms-space-3), var(--ms-safe-bottom)) + var(--ms-control-lg) + 4 * var(--ms-space-3) + 3.5rem + var(--ms-space-2)); }

    .quick-actions, .shelf { display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--ms-space-2); }
    .quick-actions .ms-row__body small { color: var(--ms-text-quiet); }
    .quick-actions .ms-row--featured .ms-row__body small { color: color-mix(in srgb, var(--ms-text-quiet) 70%, var(--ms-text)); }
    .quick-actions .ms-row[aria-disabled="true"] { --ms-local: var(--ms-surface-sunken); border-color: var(--ms-line); }
    .quick-actions .ms-row[aria-disabled="true"] .ms-row__lead { color: var(--ms-text-disabled); background: color-mix(in srgb, var(--ms-text) 6%, var(--ms-local)); }
    .quick-actions .ms-row[aria-disabled="true"] :is(strong, small, .card-lines) { color: var(--ms-text-disabled); }
    .home-actions { display: flex; margin: 0 0 var(--ms-space-4); }
    .quick-actions .card-title { display: flex; gap: var(--ms-space-1) var(--ms-space-2); align-items: center; min-inline-size: 0; }
    .quick-actions .card-name { overflow: hidden; min-inline-size: 0; text-overflow: ellipsis; white-space: nowrap; }
    .quick-actions .card-title .ms-chip { flex: none; }
    .quick-actions .card-lines { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; margin-block-start: 0.125rem; color: var(--ms-text); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
    .quick-actions .line { display: block; padding-inline-start: 1.25rem; text-indent: -1.25rem; }
    .quick-actions .line .ms-icon { display: inline-block; inline-size: 1rem; block-size: 1rem; margin-inline-end: var(--ms-space-1); vertical-align: -0.1875rem; color: var(--ms-resolved-indicator, var(--ms-accent)); }
    .quick-actions .line[data-tone="warning"] .ms-icon { color: var(--ms-warning); }
    .problem { display: grid; gap: var(--ms-space-2); padding: var(--ms-space-4); border: 1px solid var(--ms-line); border-radius: var(--ms-radius-md); }
    .problem p, .loading { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-sm); line-height: var(--ms-lh-normal); }
    .problem .ms-btn { justify-self: start; text-decoration: none; }

    .action-bar { display: grid; gap: var(--ms-space-2); margin-block-start: auto; padding-block-start: var(--ms-space-4); }
    .action-reason { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: center; }
    .paired { grid-template-columns: 1fr 1fr; align-items: center; }
    .paired .action-reason { grid-column: 1 / -1; order: 1; }
    .ms-btn--primary[aria-disabled="true"] { --ms-local: var(--ms-surface-sunken); background: var(--ms-local); border-color: transparent; }

    .full-map-hud {
      --ms-local: var(--ms-surface-card);
      position: absolute;
      z-index: 9;
      inset-inline-end: var(--ms-space-3);
      inset-block-end: max(var(--ms-space-3), var(--ms-safe-bottom));
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: var(--ms-space-3);
      align-items: center;
      inline-size: min(24rem, calc(100% - 1.5rem));
      padding: var(--ms-space-3);
      background: var(--ms-local);
    }
    .full-map-hud.has-secondary { grid-template-columns: minmax(0, 1fr) auto auto; }
    .wide .full-map-hud.above-dock { inset-block-end: calc(var(--ms-space-3) + 3.5rem + var(--ms-space-2)); }
    .hud-copy { min-inline-size: 0; }
    .hud-copy strong, .hud-copy small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .hud-copy strong { font-size: var(--ms-t-sm); }
    .hud-copy small { color: var(--ms-text-quiet); font-size: var(--ms-t-xs); }
    .full-map-hud .ms-btn { inline-size: auto; min-inline-size: 5rem; }
    .full-map-hud .action-reason { position: absolute; overflow: hidden; inline-size: 1px; block-size: 1px; margin: -1px; clip-path: inset(50%); white-space: nowrap; }

    .sheet-scrim { display: none; }
    .sheet-grip, .sheet-tools, .sheet-status { display: none; }

    .dialog-backdrop {
      position: fixed;
      z-index: 30;
      inset: 0;
      display: grid;
      place-items: center;
      padding: max(var(--ms-space-4), var(--ms-safe-top)) max(var(--ms-space-4), var(--ms-safe-right)) max(var(--ms-space-4), var(--ms-safe-bottom)) max(var(--ms-space-4), var(--ms-safe-left));
      background: var(--ms-scrim);
    }

    .dialog {
      --ms-local: var(--ms-surface-card);
      inline-size: min(24rem, 100%);
      padding: var(--ms-space-5);
      color: var(--ms-text);
      background: var(--ms-local);
    }

    .dialog h2 { margin: 0; font-size: var(--ms-t-lg); }
    .dialog p { color: var(--ms-text-quiet); font-size: var(--ms-t-sm); line-height: var(--ms-lh-normal); }
    .dialog-actions { display: flex; justify-content: flex-end; gap: var(--ms-space-2); }

    h2[tabindex="-1"]:focus { outline: 0; }
    .narrow .app { grid-template-rows: calc(3.35rem + var(--ms-safe-top)) minmax(0, 1fr); min-block-size: 28rem; }
    .narrow .workspace { grid-template-columns: minmax(0, 1fr); }
    .narrow .inspector { border-inline-start: 0; }
    .narrow .mobile-sheet {
      position: absolute;
      z-index: 7;
      inset-inline: 0;
      inset-block-end: 0;
      display: flex;
      flex-direction: column;
      block-size: auto;
      max-block-size: calc(100% - 2rem);
      padding: 0 max(var(--ms-space-3), var(--ms-safe-right)) max(var(--ms-space-3), var(--ms-safe-bottom)) max(var(--ms-space-3), var(--ms-safe-left));
      border-start-start-radius: var(--ms-radius-lg);
      border-start-end-radius: var(--ms-radius-lg);
      box-shadow: 0 -8px 26px rgb(0 0 0 / 14%);
      overflow: hidden;
      transition: block-size var(--ms-base) var(--ms-ease);
      will-change: transform;
    }
    .narrow .mobile-sheet[data-detent="half"] { block-size: min(48%, 26rem); }
    .narrow .mobile-sheet[data-detent="full"] { block-size: min(92%, calc(100% - 9rem)); }
    .narrow .mobile-sheet.dragging,
    .narrow .mobile-sheet.instant { transition: none; }
    .narrow .mobile-sheet[data-detent="peek"] .sheet-panel { display: none; }

    .narrow .sheet-grip {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto auto;
      gap: var(--ms-space-1);
      align-items: center;
      min-block-size: var(--ms-control);
      padding-block: var(--ms-space-3) var(--ms-space-1);
      touch-action: none;
      cursor: grab;
      user-select: none;
      -webkit-user-select: none;
    }
    .narrow .sheet-grip:active { cursor: grabbing; }
    .narrow .sheet-grip .ms-btn--sm { min-block-size: var(--ms-control); min-inline-size: var(--ms-control); }
    .narrow .sheet-handle {
      position: absolute;
      inset-block-start: var(--ms-space-1);
      inset-inline-start: 50%;
      inline-size: 2.5rem;
      block-size: 0.25rem;
      border-radius: var(--ms-radius-pill);
      background: var(--ms-line-strong);
      transform: translateX(-50%);
    }
    .narrow .sheet-status {
      display: block;
      overflow: hidden;
      min-inline-size: 0;
      font-size: var(--ms-t-md);
      font-weight: var(--ms-w-bold);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .narrow .sheet-tools { display: block; padding-block: var(--ms-space-1) var(--ms-space-2); }
    .sheet-tools > :is(.loading, .problem) { margin-block-end: var(--ms-space-2); }
    .narrow .draw-tools--grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: var(--ms-space-1);
      padding: 0;
    }
    .narrow .draw-tools--grid .ms-btn {
      grid-column: span 4;
      flex-direction: column;
      gap: var(--ms-space-1);
      min-inline-size: 0;
      min-block-size: var(--ms-control);
      padding: var(--ms-space-1) var(--ms-space-2);
      border-color: var(--ms-line);
      font-size: var(--ms-t-xs);
      white-space: normal;
    }
    .narrow .draw-tools--grid .ms-btn[data-tool] { grid-column: span 3; padding-inline: 3px; }
    .narrow .draw-tools--grid[data-zone="true"] .ms-btn:not([data-tool]) { grid-column: span 6; }
    .narrow .draw-tools--grid .ms-btn__label {
      position: static;
      overflow: visible;
      inline-size: auto;
      block-size: auto;
      margin: 0;
      clip-path: none;
      white-space: nowrap;
    }
    .narrow .sheet-panel { display: flex; flex: 1; flex-direction: column; min-block-size: 0; }
    .narrow .panel-top { max-block-size: 50%; padding-block-start: var(--ms-space-1); overflow: auto; overscroll-behavior: contain; }
    .narrow .sheet-body { flex: 1; min-block-size: 0; padding-block-end: var(--ms-space-1); overflow: auto; overscroll-behavior: contain; }
    .narrow .mobile-sheet .action-bar { flex: none; margin-block-start: 0; padding-block-start: var(--ms-space-2); }
    .narrow .title { font-size: var(--ms-t-md); }
    .narrow .context-switcher { max-inline-size: 7rem; }
    .narrow .robot-switcher { flex: 1 1 auto; min-inline-size: 0; max-inline-size: none; }
    .narrow .full-map-hud { inset-block-end: max(var(--ms-space-3), var(--ms-safe-bottom)); }
    .narrow .workspace.full-map .mobile-sheet { display: none; }
    .narrow .sheet-scrim {
      position: absolute;
      z-index: 3;
      inset: 0;
      inset-block-end: var(--map-sheet-offset, 0px);
      display: block;
      border: 0;
      background: color-mix(in srgb, #000 18%, transparent);
      cursor: pointer;
    }
    .narrow .sheet-scrim:focus-visible { outline: 3px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: -3px; }

    @media (forced-colors: active) {
      .dialog, .full-map-hud, .mobile-sheet, .problem, .notice { border: 1px solid CanvasText; }
      .quick-actions .ms-row--featured:not([aria-disabled="true"]) { border-color: CanvasText; }
      .sheet-handle { background: CanvasText; }
    }

    @media (prefers-reduced-motion: reduce) {
      .narrow .mobile-sheet { transition: none; }
    }
  `];var Zs=re(Te),Qe=re(Ft),en=re(nt),xn=r=>r.dataMode==="history"||r.floor.readOnly,kt=(r,t)=>{let e=(a,l,d)=>Ie(t,a,l,d);if(!r.host.connected)return{title:e("v4_reconnecting","Reconnecting"),detail:e("v4_ha_offline","Home Assistant is offline"),icon:Y,notable:!0};if(!r.host.administrator)return{title:e("v4_access_required","Access required"),detail:e("v4_admin_only","Administrator only"),icon:Y,notable:!0};if(r.host.robotCount===0)return{title:e("v4_no_robot_short","No robot"),detail:e("v4_set_up_robot","Set up a robot"),icon:Y,notable:!0};if(_e(r))return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),detail:e("v4_choose_another_robot","Choose another robot to open its map."),icon:Y,notable:!0};if(!r.host.robotConnected)return{title:e("v4_robot_offline","Robot offline"),detail:e("v4_last_map_read_only","Last known map \xB7 read only"),icon:Y,notable:!0};if(r.activity==="problem")return{title:e("v4_needs_attention","Needs attention"),detail:e("v4_check_robot","Check the robot"),icon:Y,notable:!0};if(r.dataMode==="history"){let a=r.resources.history.value?.floors.find(c=>c.id===r.selection.floorId),l=a?.snapshots.findIndex(c=>c.id===r.selection.historyId)??-1,d=a?.snapshots.length??0;return{title:e("v4_saved_map","Saved map"),detail:l>=0?e("v4_read_only_position","Read only \xB7 {position} of {count}",{position:l+1,count:d}):e("v4_read_only","Read only"),icon:lt,notable:!1}}if(r.coherence==="verifying"||r.coherence==="booting")return{title:e("v4_locating","Locating"),detail:e("v4_finding_map","Finding the current map"),icon:ce,notable:!0};if((r.resources.entry?.activePlan||r.resources.entry?.runnerLocked)&&(r.activity==="idle"||r.activity==="docked"))return{title:e("v4_task_in_progress","Run in progress"),detail:r.coherence==="unavailable"||r.coherence==="blocked"?e("v4_task_map_unavailable","The live map is unavailable; the current clean continues."):r.activity==="docked"?e("v4_task_docked","Robot docked; the clean has not finished."):e("v4_task_waiting","Waiting for the clean to continue or finish."),icon:xe,notable:!0};if(r.command==="starting"&&(r.activity==="idle"||r.activity==="docked"))return{title:e("v4_action_starting","Starting"),detail:e("v4_action_starting_detail","Waiting for the robot to begin"),icon:ce,notable:!0};let s=r.coherence==="unavailable"||r.coherence==="blocked",n=e("v4_active_map_unavailable","The live map is unavailable; new cleaning is disabled."),i=a=>s?`${a} \xB7 ${n}`:a;if(r.activity==="cleaning")return{title:e("v4_cleaning","Cleaning"),detail:i(e("v4_cleaning_progress","Cleaning in progress")),icon:dt,notable:!0};if(r.activity==="recharging"){let a=r.batteryPercent===null?e("v4_recharging_detail","Will resume automatically when ready"):e("v4_battery","{percent}% battery",{percent:r.batteryPercent});return{title:e("v4_recharging","Charging to resume"),detail:i(a),icon:us,notable:!0}}if(r.activity==="paused")return{title:e("v4_paused","Paused"),detail:i(e("v4_can_resume","Cleaning can resume")),icon:ut,notable:!0};if(r.activity==="returning")return{title:e("v4_returning","Returning"),detail:i(e("v4_going_dock","Going to the dock")),icon:dt,notable:!0};if(r.activity==="stopping")return{title:e("v4_stopping","Stopping"),detail:i(e("v4_waiting_robot","Waiting for the robot")),icon:ut,notable:!0};if(s)return{title:e("v4_map_unavailable","Map unavailable"),detail:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start."),icon:Y,notable:!0};if(r.coherence==="degraded")return{title:e("v4_map_limited","Map limited"),detail:r.rechecking?e("v4_locating_rechecking","Checking again"):e("v4_cleaning_blocked","Cleaning can't start"),icon:ce,notable:!0,recheck:!0};let o=r.batteryPercent===null?e("v4_ready","Ready"):e("v4_battery","{percent}% battery",{percent:r.batteryPercent});return{title:r.activity==="docked"?e("v4_docked","Docked"):e("v4_ready","Ready"),detail:o,icon:ce,notable:!1}},_t=r=>r.resources.plans.status==="ready"?r.resources.plans.value:null,nn=r=>{let{host:t}=r;return t.connected?t.administrator?t.robotCount===0?"setup":_e(r)?"robot-unavailable":t.robotConnected?xn(r)?"read-only":r.activity==="problem"?"problem":Re(r)&&r.activity!=="paused"||r.activity==="stopping"||r.command==="settling"||r.resources.entry?.stopSettlePending===!0?"busy":r.activity==="paused"?"paused":r.coherence==="unavailable"||r.coherence==="blocked"?"map-unavailable":r.coherence==="degraded"?"map-limited":r.coherence==="verifying"||r.coherence==="booting"?"locating":"ready":"offline":"administrator":"reconnecting"},In=(r,t,e)=>{switch(r){case"ready":return{title:e("v4_what_to_clean","Choose what to clean"),description:""};case"locating":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_reason_locating","Waiting for the robot to confirm which floor it is on.")};case"busy":return{title:e("v4_home_busy_title","The robot is busy"),description:e("v4_home_busy_detail","You can start a new clean when it's done.")};case"paused":return{title:e("v4_home_busy_title","The robot is busy"),description:e("v4_home_paused_detail","Resume or stop this clean before starting a new one.")};case"problem":return{title:e("v4_attention_title","The robot needs attention"),description:e("v4_attention_body","The robot reported a problem. Check it in the Matic app, then start a new clean.")};case"map-unavailable":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start.")};case"map-limited":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_map_limited_body","Home Assistant can show this map but can't confirm it well enough to start cleaning.")};case"offline":return{title:e("v4_robot_offline_title","Robot offline"),description:e("v4_robot_offline_body","Showing the last known map. Cleaning comes back when the robot reconnects.")};case"reconnecting":return{title:e("v4_reconnecting_title","Reconnecting to Home Assistant"),description:e("v4_reconnecting_body","Cleaning controls come back when Home Assistant reconnects.")};case"administrator":return{title:e("v4_admin_title","Administrator access required"),description:e("v4_admin_body","Ask a Home Assistant administrator to open this map.")};case"robot-unavailable":return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),description:e("v4_choose_another_robot","Choose another robot to open its map.")};case"read-only":return{title:e("v4_saved_map_read_only_title","Saved map is read only"),description:t.dataMode==="live"?e("v4_map_recovery_automatic","Cleaning controls return automatically when the live map is ready."):e("v4_saved_map_read_only_detail","Return to the live map to choose rooms, run a plan, or draw a custom area.")};case"setup":return{title:e("v4_setup_title","Set up your robot"),description:e("v4_no_robot_body","Add the Matic (Unofficial) integration to see a map here.")}}},St=(r,t)=>{let e=(s,n)=>Ie(t,s,n);switch(r.workflow){case"rooms":return{title:e("v4_choose_rooms","Choose rooms"),description:""};case"draw":return{title:e("v4_draw_area","Draw an area"),description:e("v4_draw_area_detail","Outline or paint the area, then review it before saving.")};case"plans":return{title:e("v4_your_plans","Your plans"),description:r.resources.plans.value?.plans.length===0?"":e("v4_choose_plan_detail","Tap a plan to see its next run.")};case"plan":return{title:r.planView==="run"?r.planDraft.name:r.planDraft.id?e("v4_edit_plan","Edit plan"):e("v4_new_plan","New plan"),description:""};case"areaReview":return{title:e("v4_name_this_area","Name this area"),description:e("area_details_hint","Name the area and choose cleaning settings.")};case"history":return{title:e("v4_map_history","Map history"),description:e("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")};case"support":return{title:e("v4_map_diagnostics","Map diagnostics"),description:e("v4_map_support_detail","Details to share with support")};case"none":return In(nn(r),r,e)}},G=["peek","half","full"],$n={info:ct,success:ms,warning:ht,error:fs},On={info:6e3,success:4e3,warning:6e3,error:1e4},Dn={none:"half",rooms:"half",draw:"peek",plan:"half",plans:"half",areaReview:"half",history:"half",support:"full"},tn=r=>r.workflow==="plan"&&r.planView==="edit"?"full":Dn[r.workflow],Ln=.5,Wn=100,qn=6,Hn=48,Rt=".panel-top, .sheet-body, .workflow-body",zn=["a[href]","button","input","label","select","textarea","summary",'[contenteditable]:not([contenteditable="false"])','[role="button"]','[role="link"]','[role="slider"]','[role="checkbox"]','[role="radio"]','[role="switch"]','[role="tab"]','[role="menuitem"]',`[tabindex]:not([tabindex="-1"]):not(${Rt})`].join(","),on=["button:not(:disabled)","a[href]","input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)","[tabindex]:not([tabindex='-1'])"].join(", "),rn=r=>!!r.querySelector(on)||[...r.querySelectorAll("*")].some(t=>t.shadowRoot!==null&&rn(t.shadowRoot)),sn=(r=document)=>{let t=r.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t},Je=r=>!!(r&&r.isConnected&&r.offsetParent!==null),Et=class extends Ce{constructor(){super();this.state=U();this._measuredNarrow=!1;this._sheetOffset=0;this._browserFullscreen=!1;this._helpOpen=!1;this.#t=null;this.#o=!1;this._sheetDetent="half";this._polite="";this._alert="";this.#n=null;this.#a=new Set;this._toast=null;this.#i=new $e(this,()=>this.#w());this.#r=new $e(this,async()=>new(await import("./outline-editor-AJWEYHOK.js")).OutlineEditor({edgeDistance:Ut,validOutline:Vt}));this.#s=new $e(this,async()=>new(await this.#w()).MapOptions(this));this.#h=!1;this.#y=ys();this.#C=0;this.#b=0;this.#f=!1;this.#m=!1;this.#c=null;this.#v=null;this.#M=null;this.#T=null;this.#S=null;this.#k=null;this.#d=null;this.#A=null;this.#_=null;this.#I=null;this.#l=null;this.#O=new Set;this.#g=null;this.#$=!1;this.#x=null;this.#q=null;this.#ce=()=>{this._browserFullscreen=this.#G()};this.#B=()=>{this.#N(),this.#f=!1,this.#m=!1,this._toast=null};this.#F=e=>{e.type==="pointerenter"?this.#f=!0:this.#m=!0,this.#u!==void 0&&(this.#N(),this.#b=Math.max(0,this.#C-Date.now()))};this.#K=e=>{e.type==="pointerleave"?this.#f=!1:e.currentTarget.contains(e.relatedTarget)||(this.#m=!1),this.#R()};this.#de=()=>{this.#B(),this.updateComplete.then(()=>this.#H())};this.#ye=()=>{this.#p({type:"set-notice",notice:null}),this.updateComplete.then(()=>this.#H())};this.#Q=()=>{for(let e of this.renderRoot.querySelectorAll(Rt)){let s=e.scrollHeight>e.clientHeight&&!rn(e);if(!s&&e.matches(":focus")){e.addEventListener("blur",this.#Q,{once:!0});continue}let n=(i,o)=>s?e.setAttribute(i,o):e.removeAttribute(i);n("tabindex","0"),e.classList.contains("panel-top")&&(n("role","group"),n("aria-labelledby","workspace-title"))}};this.#P=e=>{if(!oe(this.state,{type:"open-workflow",workflow:"none"})){Oe(this.state.workflow);return}this.#d=e.currentTarget,this.#_="reload",this.#p({type:"open-dialog",dialog:"discardDraft"})};this.#le=e=>{let s=this.#s.value;if(s){s.menu.toggle();return}if(this.#s.status==="failed"){this.#P(e);return}this.#h=!0,this.#s.request()};this.#_e=()=>{this.#se("support")};this.#qe=e=>{this._helpOpen?this.#Ce(!0):this.#He(e.composedPath()[0])};this.#ze=()=>{let e=this.renderRoot.querySelector(".app");this.#X()?document.exitFullscreen():e?.requestFullscreen()};this.#Be=e=>{let s=e.detail,n=this.state;n.workflow!=="rooms"||s?.type!=="toggle-room"||setTimeout(()=>{let i=this.#i.value?.roomTapAnnouncement(this.#te,n,this.state,s.roomId);i&&this.#Y("_polite",i)})};this.#te=(e,s,n)=>this.#e(e,s,n);new bs(this,{container:()=>this.renderRoot?.querySelector(".draw-tools")??null,items:"button"})}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_measuredNarrow:{state:!0},_sheetOffset:{state:!0},_browserFullscreen:{state:!0},_helpOpen:{state:!0},_sheetDetent:{state:!0},_polite:{state:!0},_alert:{state:!0},_toast:{state:!0}}}static{this.styles=wt}#e(e,s,n){return Ie(this.localize,e,s,n,this.dates)}#t;#o;#n;#a;#i;#r;#s;#h;#y;#u;#C;#b;#f;#m;#c;#v;#M;#T;#S;#k;#d;#A;#_;#I;#l;#O;#g;#$;async#w(){let e=await import("./workflow-panel-DVXB4R2R.js");return this.#$||(this.#$=!0,Bt(this.renderRoot,[...wt,e.shellWorkflowStyles,e.formControls])),e}#x;#q;#X(){let e=this.renderRoot;return e instanceof ShadowRoot?e.fullscreenElement??document.fullscreenElement:document.fullscreenElement}#ce;#G(){let e=this.renderRoot,s=e.querySelector(".app"),n=e instanceof ShadowRoot?e.fullscreenElement:null;if(n)return n===s;let i=document.fullscreenElement;for(let o=this;o;){if(o===i)return!0;let a=o.getRootNode();o=a instanceof ShadowRoot?a.host:null}return!1}connectedCallback(){super.connectedCallback(),this.#v=new ResizeObserver(([e])=>{if(!e)return;let s=e.contentRect.width<1024||e.contentRect.height<480;s!==this._measuredNarrow&&(this._measuredNarrow=s)}),this.#v.observe(this),document.addEventListener("fullscreenchange",this.#ce),this.#M=new ResizeObserver(([e])=>{if(!e)return;let s=Math.ceil(e.target.getBoundingClientRect().height);s!==this._sheetOffset&&(this._sheetOffset=s)}),this.#T=new ResizeObserver(()=>this.#Q()),this.#z(),this.#S=Ss(()=>this.#z())}#z(){let e=window.matchMedia("(forced-colors: active)").matches,s=ks(this.renderRoot,{accent:"var(--ms-accent)",danger:"var(--ms-danger)",label:"var(--ms-on-accent)",card:"var(--ms-surface-card)",sunken:"var(--ms-surface-sunken)"}),[n,i,o,a,l]=Object.values(s).map(_s),d=v=>e||!v||!o?[]:Rs(v,o),c=(v,_,S=a)=>e||!v||!a||!S?void 0:Es(v,_,[a,S]),u=v=>v?ws(v,1):"",[p,h]=d(n),[f,g]=d(i);this.style.setProperty("--ms-resolved-accent-fill",u(p)),this.style.setProperty("--ms-resolved-on-accent-fill",u(h)),this.style.setProperty("--ms-resolved-danger-fill",u(f)),this.style.setProperty("--ms-resolved-on-danger-fill",u(g)),this.style.setProperty("--ms-resolved-indicator",u(c(n,3,l))),this.style.setProperty("--ms-resolved-danger-text",u(c(i,4.5)))}disconnectedCallback(){this.#B(),this.#v?.disconnect(),this.#v=null,this.#M?.disconnect(),this.#M=null,this.#T?.disconnect(),this.#T=null,this.#S?.(),this.#S=null,this.#k=null,document.removeEventListener("fullscreenchange",this.#ce),super.disconnectedCallback()}#Y(e,s){if(this.#a.has(e)){this.updateComplete.then(()=>this.#Y(e,s));return}this.#a.add(e);let n=this[e]===s;this[e]=n?"":s,this.updateComplete.then(()=>{this.#a.delete(e),n&&!this[e]&&this.#Y(e,s)})}willUpdate(e){if(this.#c=this.shadowRoot?.activeElement??null,!e.has("state"))return;let s=kt(this.state).title;this.#n!==null&&s!==this.#n&&this.#Y("_polite",kt(this.state,this.localize).title),this.#n=s;let n=this.state.notice,i=e.get("state");n!==i?.notice&&(!n&&i?.notice?.tone==="success"&&i.workflow!==this.state.workflow||(this.#B(),n&&(this._toast=n,this.#b=On[n.tone],this.#Y(n.tone==="error"?"_alert":"_polite",this.#e(n.key,n.fallback,n.placeholders)),this.updateComplete.then(()=>{if(this.state.notice!==n)return;let o=this.renderRoot.querySelector("[data-notice-toast]");this.#f=!!o?.matches(":hover"),this.#m=!!o?.contains(this.shadowRoot?.activeElement??null),this.#R()}))))}#R(){!this._toast||this.#u!==void 0||this.#f||this.#m||(this.#C=Date.now()+this.#b,this.#u=setTimeout(this.#B,this.#b))}#N(){clearTimeout(this.#u),this.#u=void 0}#B;#F;#K;#de;#ye;#U(e,s,n){return w`${O($n[e.tone])}<span class="notice-text">${this.#e(e.key,e.fallback,e.placeholders)}</span><button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${n}
      @click=${s}
    >${O(hs)}</button>`}updated(e){let s=this.renderRoot.querySelector(".mobile-sheet.instant");s&&(getComputedStyle(s).blockSize,s.classList.remove("instant"));let n=this.#c;this.#c=null,n&&(!n.isConnected||n.closest("[hidden]"))&&this.#H();let i=this.renderRoot.querySelector(".mobile-sheet");i!==this.#k&&(this.#M?.disconnect(),this.#k=i,i?this.#M?.observe(i):this._sheetOffset!==0&&(this._sheetOffset=0)),this.#T?.disconnect();for(let o of this.renderRoot.querySelectorAll(Rt))for(let a of[o,...o.children])this.#T?.observe(a);if(this.#h&&this.#s.status!=="loading"&&(this.#h=!1,this.#s.value?.menu.toggle()),e.has("state")){this.#J();let o=e.get("state");if(o?.precisionOpen&&!this.state.precisionOpen&&this.#V()?.focus(),this._helpOpen&&o&&(o.workflow!==this.state.workflow||o.fullMap!==this.state.fullMap)&&this.#Ce(!1),o?.fullMap&&!this.state.fullMap){let a=this.#A;this.#A=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??this.renderRoot.querySelector(".nav--menu")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})})}if(o&&!o.fullMap&&this.state.fullMap&&this.updateComplete.then(()=>{let a=this.#A;requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})}),!o?.dialog&&this.state.dialog){this.#l=null,this.state.dialog==="discardDraft"&&!this.#_&&o&&(o.workflow==="plan"?this.#_=o.planDraft.id!==null&&o.planView==="edit"?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"}:this.#_={type:"dismiss-top-layer"});let a=sn(this.shadowRoot||document);a?.hasAttribute("data-dialog-launcher")&&(this.#d=a),this.updateComplete.then(()=>{(this.renderRoot.querySelector(".dialog [data-dialog-initial-focus]")??this.renderRoot.querySelector(".dialog button"))?.focus()})}else if(o?.dialog&&!this.state.dialog){if(o.dialog==="discardDraft"){this.#I||(this.#_=null),this.#fe();let l=this.#l;this.#l=null,this.#pe(l)}let a=this.#Ie(o);this.#d=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{let l=sn(document),d=l;for(;d&&d!==this;){let u=d.getRootNode();d=u instanceof ShadowRoot?u.host:null}if(l&&l!==document.body&&d!==this)return;a?.focus({preventScroll:!0});let c=!document.activeElement||document.activeElement===document.body;!this.shadowRoot?.activeElement&&c&&this.#H()})})}if(!o)this._sheetDetent=tn(this.state);else if(o.workflow!==this.state.workflow||o.planView!==this.state.planView){let a=tn(this.state);a!==this._sheetDetent&&(this.#j()?.classList.add("instant"),this._sheetDetent=a);let l=this.state;this.updateComplete.then(()=>{if(l.workflow==="none")return this.#Ye();if(o.workflow!=="plan")return this.#H();requestAnimationFrame(()=>{this.#i.value?.focusPlanTarget(o,l,this.renderRoot,Je)||this.#H()})})}}}#Q;#H(){[".panel-heading h2",".action-bar .ms-btn--primary",".workspace-toggle"].map(e=>this.renderRoot.querySelector(e)).find(Je)?.focus({preventScroll:!0})}#V(){let e=this.renderRoot.querySelector(".draw-brush");return Je(e)?e:this.renderRoot.querySelector(Te)?.shadowRoot?.querySelector(".draw-brush")??null}#p(e){if(oe(this.state,e)){this.#_=e,this.#p({type:"open-dialog",dialog:"discardDraft"});return}this.#D(e)}#D(e){this.dispatchEvent(new CustomEvent(Cs,{detail:e,bubbles:!0,composed:!0}))}#ue(e){if(e.enabled){if(e.id==="return-live"){this.#p({type:"set-history",historyId:null});return}if(e.id==="clear-draft"){this.#p({type:"clear-draft"});return}this.#Z(e.id)}}#se(e,s){this.#g=null,this.#he({type:"open-workflow",workflow:e},s)}#he(e,s){s instanceof HTMLElement&&oe(this.state,e)&&(this.#d=s),this.#p(e)}#J(){let e=this.#y,{coherence:s,workflow:n}=this.state;!e||n==="none"&&(s==="booting"||s==="verifying")||(this.#y=null,n==="none"&&this.#O.has(e)&&this.#se(e))}#P;#ne(e){if(this.#i.request(),e!=="draw")return this.#i.status;this.#r.request();let s=this.#i.status,n=this.#r.status;return s==="failed"||n==="failed"?"failed":s===n?s:"loading"}#ie(){let e=this.#_;if(this.#_=null,e==="reload"){Oe(this.state.workflow);return}e?.type==="select-plan"||e?.type==="select-area"?(this.#p({type:"patch-plan-draft",patch:{dirty:!1}}),this.#p({type:"patch-area-draft",patch:{dirty:!1}}),this.#p({type:"dismiss-top-layer"})):this.#p({type:"discard-draft"}),e&&e.type!=="dismiss-top-layer"&&queueMicrotask(()=>this.#D(e))}#ge(e,s){setTimeout(()=>{if(this.#I!==e)return;this.#I=null,this.requestUpdate();let n=s?this.#_:null;if(this.#_=null,this.state.dialog!=="discardDraft")return this.#pe(n);this.#l=n,this.#ve()})}#pe(e){e==="reload"?Oe(this.state.workflow):e&&this.#D(e)}#me(){this.state.command==="pending"||this.#I||(this.#_=null,this.#ve(),this.#fe())}#fe(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".floor-switcher");e&&(e.value=this.state.selection.floorId);let s=this.renderRoot.querySelector(".robot-switcher");s&&(s.value=this.state.selection.entryId??"")})}#ve(){let e=this.#Ie(this.state);this.#p({type:"dismiss-top-layer"}),e&&requestAnimationFrame(()=>e.focus({preventScroll:!0}))}#Z(e,s){this.dispatchEvent(new CustomEvent(Ms,{detail:typeof e=="string"?{id:e,settled:s}:e,bubbles:!0,composed:!0}))}#L(e){e.action==="discard"?this.#ie():this.#i.value?.confirmDialog(this.state,e.action,s=>this.#p(s),s=>this.#Z(s))}#E(e){e!==this._sheetDetent&&(this._sheetDetent=e,this.#Y("_polite",e==="peek"?this.#e("v4_workspace_height_peek","Cleaning panel, collapsed"):e==="half"?this.#e("v4_workspace_height_half","Cleaning panel, half height"):this.#e("v4_workspace_height_full","Cleaning panel, full height")))}#W(e,s=!1){let i=G.indexOf(this._sheetDetent)+e;s&&i>=G.length&&(i=0),i=Math.max(0,Math.min(G.length-1,i)),this.#E(G[i]??this._sheetDetent)}#Re(e){let s=this.renderRoot.querySelector(".workspace")?.clientHeight??e.parentElement?.clientHeight??e.offsetHeight,n=parseFloat(getComputedStyle(this).fontSize)||16,i=[".sheet-grip",".sheet-tools",".action-bar"].map(l=>e.querySelector(l)?.offsetHeight??0).reduce((l,d)=>l+d,0)+n*.75,o=Math.min(s*.92,s-n*9),a=Math.min(s*.48,n*26,o);return{peek:Math.min(i,a),half:a,full:o}}#j(){return this.renderRoot.querySelector(".mobile-sheet")}#Ee(e,s){e.style.transform=s;let n=this.renderRoot.querySelector("[data-notice-toast]");n&&(n.style.transform=s)}#oe(e){let s=e.currentTarget;for(let n of e.composedPath()){if(n===s)return!1;if(n instanceof Element&&n.matches(zn))return!0}return!1}#Pe(e){if(e.pointerType==="mouse"&&e.button!==0||this.#oe(e))return;let s=this.#j();!s||this.#x||(this.#x={pointerId:e.pointerId,startY:e.clientY,startHeight:s.offsetHeight,heights:this.#Re(s),samples:[{y:e.clientY,t:e.timeStamp}],moved:!1},e.currentTarget.setPointerCapture(e.pointerId),s.classList.add("dragging"))}#re(e){let s=this.#x;if(!s||e.pointerId!==s.pointerId)return;let n=this.#j();if(!n)return;let i=e.clientY-s.startY;for(!s.moved&&Math.abs(i)>qn&&(s.moved=!0),s.samples.push({y:e.clientY,t:e.timeStamp});s.samples.length>2&&e.timeStamp-(s.samples[1]?.t??0)>Wn;)s.samples.shift();if(!s.moved)return;let o=s.startHeight-s.heights.full,a=s.startHeight-s.heights.peek,l=Math.max(o,Math.min(a,i));this.#Ee(n,`translateY(${l}px)`)}#ae(e){let s=this.#x;if(!s||e.pointerId!==s.pointerId)return;this.#x=null;let n=this.#j();if(n&&(this.#Ee(n,""),n.classList.remove("dragging")),e.type==="pointercancel")return;if(!s.moved){this.#W(1,!0);return}let i=e.clientY-s.startY,o=G.indexOf(this._sheetDetent),a=s.samples[0],l=s.samples[s.samples.length-1],d=a&&l&&l!==a?(l.y-a.y)/Math.max(1,l.t-a.t):0;if(Math.abs(d)>Ln){let h=Math.max(0,Math.min(G.length-1,o+(d<0?1:-1)));this.#E(G[h]??this._sheetDetent);return}let c=s.startHeight-i,u=this._sheetDetent,p=Number.POSITIVE_INFINITY;for(let h of G){let f=Math.abs(s.heights[h]-c);f<p&&(p=f,u=h)}this.#E(u)}#be(e){for(let s of e.composedPath()){if(s===e.currentTarget)break;if(s instanceof HTMLElement&&s.scrollHeight>s.clientHeight&&/auto|scroll/u.test(getComputedStyle(s).overflowY))return s}return null}#we(e){if(e.pointerType==="mouse"||this.#oe(e))return;let s=this.#be(e);this.#q=s?.scrollTop?null:{pointerId:e.pointerId,startY:e.clientY,scroller:s,consumed:!1}}#Te(e){let s=this.#q;if(!(!s||s.consumed||e.pointerId!==s.pointerId)){if(s.scroller?.scrollTop){this.#q=null;return}e.clientY-s.startY<Hn||(s.consumed=!0,this.#W(-1))}}#ke(){this.#q=null}#ee(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}#Ae(e){this.#A=e.currentTarget,this.#p({type:this.state.fullMap?"exit-full-map":"enter-full-map"})}#le;#_e;#qe;#He(e){this.#t=e,this.#o=window.matchMedia("(any-pointer: coarse)").matches,this.#i.request(),this._helpOpen=!0}#Ce(e){this._helpOpen=!1,e&&this.#t?.focus()}#ze;#Ne(){this.#p({type:"set-precision-open",value:!this.state.precisionOpen})}#Be;#xe(e){let s=this.#i.value?.dialogLauncher(e,this.state,n=>this.#p(n));s&&(this.#d=s)}#Ie(e){return e.dialog?this.#d?.isConnected&&this.#d.hasAttribute("data-dialog-launcher")?this.#d:this.#i.value?.dialogReturnTarget(e,this.renderRoot)??this.#Fe(e.dialog):null}#Fe(e){if(e==="confirmDeletePlan"){let i=this.renderRoot.querySelector(Kt)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`);if(i)return i}return this.renderRoot.querySelector(nt)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`)??null}#Ke(e){if(!gs(e)&&!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)&&e.key==="Escape"){if(e.preventDefault(),this.#s.value?.menu.open){this.#s.value.menu.close(!0);return}if(this._helpOpen){this.#Ce(!0);return}if(this.state.dialog==="discardDraft"){this.#me();return}this.#p({type:"dismiss-top-layer"})}}#Ue(e){if(e.key!=="Tab")return;let n=[...e.currentTarget.querySelectorAll(on)],i=n[0],o=n.at(-1);if(!i||!o)return;let a=this.shadowRoot?.activeElement;e.shiftKey&&a===i?(e.preventDefault(),o.focus()):!e.shiftKey&&a===o&&(e.preventDefault(),i.focus())}#Ve(){let e=this.renderRoot.querySelector(Te);(e?.shadowRoot?.querySelector(".map-root")??e)?.focus()}#je(){this._sheetDetent==="peek"&&this.#j()&&this.#E("half"),this.updateComplete.then(()=>this.#H())}#Se(e,s,n){if(!("label"in e))return y;let i=e.labelKey?this.#e(e.labelKey,e.label,e.labelPlaceholders):e.label,o=!e.enabled&&e.reason?e.reasonKey?this.#i.value?.actionReason(this.#te,e,n==="primary-reason",a=>this.#p(a))??this.#e(e.reasonKey,e.reason,e.reasonPlaceholders):e.reason:null;return e.kind==="link"?w`<a class=${s} href=${e.href??"#"}>${i}</a>`:w`
      <button
        class=${`${s} ${e.kind==="danger"?"ms-btn--danger":""}`}
        type="button"
        aria-disabled=${e.enabled?y:"true"}
        aria-describedby=${o?n:y}
        aria-label=${e.id==="stop"?this.#e("v4_stop_cleaning_label","Stop cleaning"):e.id==="run-plan"?this.#e("v4_action_run_plan_named","Run plan {plan}",{plan:this.state.planDraft.name}):y}
        @click=${()=>this.#ue(e)}
      >${i}</button>
      ${o?w`<p class="action-reason" id=${n}>${o}</p>`:y}
    `}#te;#$e(e,s,n){let i=s?.enabled&&e.workflow==="rooms"&&s.id==="clean-rooms"?this.#i.value?.roomsSummary(this.#te,e)??"":"",o=e.workflow==="plan"&&e.planView==="edit";return!i&&!o&&!(s&&"label"in s)&&!n?y:w`
      <div class=${o?"action-bar paired":"action-bar"}>
        ${i?w`<p class="action-summary">${i}</p>`:y}
        ${o?this.#i.value?.planCancel(e,s,this.#te,(a,l)=>this.#he(a,l)):y}
        ${s?this.#Se(s,"ms-btn ms-btn--block ms-btn--lg ms-btn--primary","primary-reason"):y}
        ${n?this.#Se(n,"ms-btn ms-btn--block ms-btn--lg ms-btn--secondary","secondary-reason"):y}
      </div>
    `}#Oe(e,s=!1,n=e){return s||this.#O.add(e),()=>{s||(this.#se(e),this.#g=n)}}#Ye(){let e=this.#g;this.#g=null;let s=e?this.renderRoot.querySelector(`[data-launcher="${e}"]`):null;Je(s)?s.focus({preventScroll:!0}):this.#H()}#Me(e,s,n,i,o=!1,a=!1,l="ms-row"){return w`
      <button
        class=${l}
        type="button"
        data-launcher=${n}
        aria-disabled=${o?"true":y}
        aria-describedby=${a?"home-reason":y}
        @click=${this.#Oe(n,o)}
      >
        <span class="ms-row__lead">${O(s)}</span>
        <span class="ms-row__body"><strong>${e}</strong>${i?w`<small>${i}</small>`:y}</span>
        <span class="ms-row__trail">${O(at)}</span>
      </button>
    `}#Xe(e){let s=e.resources.history.value?.floors||[],n=s.length?s.map((i,o)=>({id:i.active?"current":i.id,label:`${i.label||(i.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:i.ordinal??o+1}))}${!i.active&&i.snapshots.length===0?` \xB7 ${this.#e("v4_floor_not_captured","No saved map for this floor yet")}`:""}`,disabled:!i.active&&i.snapshots.length===0})):[{id:e.selection.floorId,label:e.floor.displayName,disabled:!1}];return w`
      <select
        class="ms-select context-switcher floor-switcher"
        slot="floor"
        data-map-control
        name="map-floor"
        aria-label=${this.#e("v4_choose_floor","Choose floor")}
        ?disabled=${n.length<=1}
        .value=${e.selection.floorId}
        @change=${i=>this.#p({type:"set-floor",floorId:i.currentTarget.value})}
      >${n.map(i=>w`
        <option value=${i.id} ?selected=${i.id===e.selection.floorId} ?disabled=${i.disabled}>${i.label}</option>
      `)}</select>
    `}#Ge(e){let s=(u,p,h)=>this.#e(u,p,h);this.#O=new Set(["support"]);let n=nn(e),i=u=>{let p=this.#Me(s("v4_map_history","Map history"),lt,"history",s("v4_history_quick_detail","Browse earlier floor maps.")),h=this.#Me(s("v4_map_diagnostics","Map diagnostics"),ct,"support",s("v4_diagnostics_quick_detail","Check the map and copy details for support."));return w`
        <h3 class="ms-section-heading">${s("v4_maps_heading","Maps")}</h3>
        <div class="shelf maps">${u?[h,p]:[p,h]}</div>
      `};switch(n){case"reconnecting":case"administrator":case"robot-unavailable":case"setup":return y;case"offline":case"read-only":return i(!1);case"problem":return w`
          <div class="home-actions">
            <button class="ms-btn ms-btn--secondary" type="button" data-launcher="support-open" @click=${this.#Oe("support",!1,"support-open")}>${s("v4_open_diagnostics","Open map diagnostics")}</button>
          </div>
          ${i(!0)}
        `;default:break}let o=n!=="ready",a=_t(e),l=a!==null&&a.rooms.length===0,d=o||l,c=(u,p,h,f,g,v)=>this.#Me(g,h,u,v,f,o,p?"ms-row ms-row--card ms-row--featured":"ms-row ms-row--card");return w`
      ${n==="map-unavailable"||n==="map-limited"?w`
        <div class="home-actions">
          <button
            class="ms-btn ms-btn--secondary"
            type="button"
            aria-disabled=${e.rechecking?"true":y}
            @click=${()=>{this.state.rechecking||this.#Z("recheck-status")}}
          >${s("v4_retry","Try again")}</button>
        </div>
      `:y}
      <div class="quick-actions" role="group" aria-label=${s("v4_cleaning_choices","Cleaning choices")}>
        ${c("rooms",!0,ce,d,s("v4_clean_rooms","Clean rooms"),!o&&l?s("v4_no_rooms_reason","Can't clean rooms until you name them in the Matic app."):s("v4_rooms_quick_detail","Pick rooms and clean them now."))}
        ${this.#Qe(e,o)}
        ${this.#Je(e,o)}
        ${c("draw",!1,ds,o,s("v4_custom_areas","Clean custom area"),s("v4_areas_quick_detail","Draw or choose a custom area"))}
      </div>
      ${i(n==="map-unavailable")}
    `}#Qe(e,s){let n=this.#te,i=e.resources.plans,o=_t(e),a=o?.plans.find(g=>g.id===o.selectedPlan),l=o?.plans.length??0,d=i.status==="loading",c=i.status==="error",u=a?Ts(n,e.locale,a):null,[p="",h=""]=a?n("v4_run_named_plan","Run {plan}",{plan:"\0"}).split("\0"):[],f=()=>{s||(a?this.#p({type:"select-plan",planId:a.id,origin:"home"}):this.#se("plans"),this.#g="plan")};return s||this.#O.add("plans"),w`
      <button
        class="ms-row ms-row--card"
        type="button"
        data-launcher="plan"
        aria-disabled=${s?"true":y}
        aria-describedby=${s?"home-reason":y}
        @click=${f}
      >
        <span class="ms-row__lead">${O(xe)}</span>
        <span class="ms-row__body">
          ${a?w`
            <strong class="card-title"><span class="card-name">${p}<bdi>${a.name}</bdi>${h}</span>${a.enabled?y:w`<span class="ms-chip">${n("v4_paused","Paused")}</span>`}</strong>
            <small>${Ps(n,e.locale,a)}</small>
            ${u===null?y:"blocked"in u?w`<span class="card-lines"><span class="line" data-tone="warning">${O(ht)}${u.blocked}</span></span>`:w`<span class="card-lines">${u.due.map(g=>w`<span class="line">${O(ps)}${g}</span>`)}</span>`}
          `:w`
            <strong>${d?n("v4_plans_loading","Checking saved plans"):c?n("v4_plans_unavailable","Plans unavailable"):l?n("v4_run_a_plan","Run a plan"):n("v4_create_plan","Create a plan")}</strong>
            <small>${d?n("v4_plans_loading_hint","Reading plans for this floor"):c?n("v4_plans_unavailable_hint","Try again to load your plans."):l?l===1?n("v4_saved_routine","1 saved plan"):n("v4_saved_routines","{count} saved plans",{count:l}):n("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</small>
          `}
        </span>
        <span class="ms-row__trail">${O(at)}</span>
      </button>
    `}#Je(e,s){let n=_t(e);return n?.plans.some(i=>i.id===n.selectedPlan)?this.#Me(this.#e("v4_your_plans","Your plans"),xe,"plans",void 0,s,s):y}#Ze(e,s){if(e.workflow==="none")return this.#Ge(e);let n=this.#ne(e.workflow);return n!=="ready"?s&&e.workflow==="draw"?y:De(n,this.localize,this.#P):w`<${en}
      .state=${e}
      .localize=${this.localize}
      .dates=${this.dates}
      .retry=${this.#P}
      @matic-workspace-intent=${this.#xe}
    ></${en}>`}#De(e,s){if(e.workflow==="none"||e.workflow==="plan"&&e.planView==="edit")return y;let n=e.workflow==="plan"&&e.planOrigin!=="home",i=n?this.#e("v4_back_to_plans","Back to plans"):this.#e("v4_back_to_all_tasks","Back to all tasks");return w`
      <button
        class=${s?"sheet-back ms-btn ms-btn--icon ms-btn--sm":"panel-back ms-btn ms-btn--secondary"}
        type="button"
        aria-label=${i}
        title=${s?i:y}
        data-dialog-launcher="discardDraft"
        @click=${o=>this.#he({type:"open-workflow",workflow:n?"plans":"none"},o.currentTarget)}
      >${O(rt)}${s?y:w`<span class="ms-btn__label">${n?this.#e("v4_your_plans","Your plans"):this.#e("v4_all_tasks","All tasks")}</span>`}</button>
    `}#Le(e){let s=e.workflow==="plan",n=St(e,this.localize).title;return w`
      <div class="panel-top">
        <div class="panel-heading">
          ${this.#De(e,!1)}
          <h2 id="workspace-title" tabindex="-1">${s&&this.#i.value?.planTitle(e,n,this.#te)||n}</h2>
          ${s?this.#i.value?.planTools(e,this.localize,this.#xe):y}
        </div>
        ${e.notice?w`<div class="notice" data-notice-slot data-tone=${e.notice.tone}>${this.#U(e.notice,this.#ye,this.#e("v4_close","Close"))}</div>`:y}
      </div>
    `}#We(e,s){let{description:n}=St(e,this.localize);return w`
      ${n?w`<p class="panel-description" id=${e.workflow==="none"?"home-reason":y}>${n}</p>`:y}
      ${this.#Ze(e,s)}
    `}#et(e,s){let n=St(e,this.localize),i=(e.workflow==="rooms"?this.#i.value?.roomsGripLine(this.#te,e):null)??n.title;return this._sheetDetent!=="peek"?s.detail?`${s.title} \xB7 ${s.detail}`:s.title:s.notable?`${s.title} \xB7 ${i}`:i}render(){let e=this.state,s=e.narrowHint||this._measuredNarrow,n=this.#s.value,i=kt(e,this.localize),o=_e(e),a=zt({...e,narrowHint:s}),l=Nt(e),d=!s&&a.id==="stop"?a:!s&&l?.id==="stop"?l:null,c=d&&d===a?null:a,u=e.workflow==="draw"&&e.dataMode==="live"?{id:"clear-draft",label:"Clear",labelKey:"v4_clear_drawing",kind:"neutral",enabled:e.draw.circles.length>0||!!e.draw.outline?.points.length}:null,p=d&&d===l?null:l??u,h=e.fullMap&&(e.coherence==="verifying"||e.coherence==="booting"),f=e.fullMap||e.host.administrator&&e.host.robotCount>0&&e.map.available,g=e.workflow==="plan",v=e.dialog==="discardDraft",_=v?Dt(e,g?"confirmDeletePlan":"confirmDeleteArea")?.name:void 0,S=v?{title:this.#e("v4_discard_title","Discard changes?"),detail:_===void 0?g?this.#e("v4_discard_new_plan_detail","This new plan hasn't been saved, and discarding it can't be undone."):this.#e("v4_discard_new_area_detail","This new area hasn't been saved, and discarding it can't be undone."):g?this.#e("v4_discard_plan_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:_}):this.#e("v4_discard_area_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:_}),cancelLabel:this.#e("v4_keep_area_editing","Keep editing"),confirmLabel:this.#e("v4_discard","Discard"),action:"discard"}:e.dialog===null?void 0:this.#i.value?.dialogCopy(e.dialog,e,this.localize),k=v&&(e.command==="pending"||this.#I!==null),b=v&&(a.id==="save-plan"||a.id==="save-area")&&(a.enabled||k)?a.id:null,C=s&&!e.fullMap?`--map-sheet-offset:${this._sheetOffset}px`:"--map-sheet-offset:0px",P=s&&e.workflow==="draw",W=this._helpOpen?this.#i.value?this.#i.value.renderMapHelp({state:e,coarse:this.#o,t:(E,q)=>this.#e(E,q),close:()=>this.#Ce(!0)}):De(this.#i.status,this.localize,this.#P):null,D=e.precisionOpen&&e.workflow==="draw",$=this._toast&&(this._toast.tone==="success"||this._toast.tone==="error"||e.fullMap||s&&this._sheetDetent==="peek")?this._toast:null;return w`
      <div class=${`root ${s?"narrow":"wide"}`} @keydown=${this.#Ke}>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#Ve}>${this.#e("v4_skip_to_map","Skip to the map")}</button>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#je}>${this.#e("v4_skip_to_workspace","Skip to the panel")}</button>
        <div class="app" ?inert=${!!S}>
          <header class="app-bar">
            ${e.precisionOpen?y:w`
              <button
                class="nav nav--menu ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                title=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                @click=${this.#ee}
              >${O(rs)}</button>
            `}

            ${e.precisionOpen?w`
              <button
                class="nav ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_back","Back")}
                @click=${()=>this.#p({type:"dismiss-top-layer"})}
              >${O(rt)}</button>
            `:y}
            <h1 class="title">${this.#e("map_studio_title","Matic Map")}</h1>
            ${e.robots.length>1||o?w`
              <select
                class="ms-select context-switcher robot-switcher"
                name="matic-robot"
                aria-label=${this.#e("v4_choose_robot","Choose robot")}
                .value=${e.selection.entryId||""}
                @change=${E=>this.#p({type:"select-entry",entryId:E.currentTarget.value})}
              >${o?w`
                <option value=${e.selection.entryId||""} selected disabled>${this.#e("v4_selected_robot_unavailable","Selected robot unavailable")}</option>
              `:y}${e.robots.map(E=>w`
                <option value=${E.entryId} ?selected=${E.entryId===e.selection.entryId}>${E.label}</option>
              `)}</select>
            `:y}

            <span class="spacer"></span>
            ${f?w`
              <button
                class="workspace-toggle ms-btn ms-btn--icon"
                type="button"
                aria-label=${e.fullMap?this.#e("v4_show_workspace","Show cleaning panel"):this.#e("v4_hide_workspace","Hide cleaning panel")}
                aria-controls="map-workspace"
                aria-expanded=${String(!e.fullMap)}
                title=${e.fullMap?this.#e("v4_show_workspace","Show cleaning panel"):this.#e("v4_hide_workspace","Hide cleaning panel")}
                @click=${this.#Ae}
              >${O(as)}</button>
            `:y}
            <div class="overflow-wrap" @keydown=${n?.menu.keydown} @focusout=${n?.menu.focusout}>
              <button
                class="overflow ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_map_options","Map options")}
                aria-haspopup="menu"
                aria-expanded=${String(n?.menu.open??!1)}
                aria-controls="map-options"
                @click=${this.#le}
              >${O(os)}</button>
              ${n?.menu.open?n.render({state:e,narrow:s,browserFullscreen:this._browserFullscreen,t:(E,q)=>this.#e(E,q),intent:E=>this.#p(E),diagnostics:this.#_e,fullscreen:this.#ze}):y}
            </div>
          </header>

          <main class=${`workspace ${e.fullMap?"full-map":""}`} style=${C}>
            <div class="canvas">
              <${Zs}
                class="map-canvas"
                style=${C}
                @matic-workspace-intent=${this.#Be}
                @matic-map-help=${this.#qe}
                .state=${e}
                .localize=${this.localize}
                .dates=${this.dates}
                .outlineEditor=${this.#r.value}
                .narrow=${s}
                .help=${W}
                .recipes=${e.workflow==="draw"?this.#i.value?.drawRecipes(this.#te)??null:null}
              >${this.#Xe(e)}
                ${s&&!e.fullMap&&this._sheetDetent==="full"?w`
                  <button
                    class="sheet-scrim"
                    slot="scrim"
                    data-map-control
                    type="button"
                    aria-label=${this.#e("v4_collapse_sheet","Collapse panel")}
                    @click=${()=>this.#E("peek")}
                  ></button>
                `:y}
              </${Zs}>
              ${!s&&D?w`
                <div class="precision-popover">
                  <${Qe} compact .state=${e} .localize=${this.localize}></${Qe}>
                </div>
              `:y}
            </div>

            <!--
              One panel element, not two. It is a grid column when wide and a
              bottom sheet when narrow. Rendering both and hiding one with
              display:none meant two live workflow panels at all times, which
              made #dialogLauncherFor pick the hidden copy on narrow -- so
              cancelling a delete dialog on a phone restored focus to nothing --
              and left every primary action ambiguous under Playwright's strict
              mode.
            -->
            <aside
              id="map-workspace"
              class=${s?"inspector mobile-sheet":"inspector"}
              data-detent=${s?this._sheetDetent:y}
              data-workflow=${e.workflow}
              aria-label=${this.#e("v4_map_workspace","Cleaning panel")}
            >
              ${s?w`
                <div
                  class="sheet-grip"
                  @pointerdown=${this.#Pe}
                  @pointermove=${this.#re}
                  @pointerup=${this.#ae}
                  @pointercancel=${this.#ae}
                >
                  <span class="sheet-handle" role="presentation"></span>
                  ${this._sheetDetent==="peek"?this.#De(e,!0):y}
                  <span class="sheet-status">${this.#et(e,i)}</span>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_more","Expand panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="full"?"true":y}
                    @click=${()=>this.#W(1)}
                  >${O(ls)}</button>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_less","Collapse panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="peek"?"true":y}
                    @click=${()=>this.#W(-1)}
                  >${O(cs)}</button>
                </div>
                ${P?w`
                  <div class="sheet-tools">
                    ${De(this.#ne("draw"),this.localize,this.#P)}
                    ${vs(e,{intent:E=>this.#p(E),openBrush:()=>this.#Ne(),t:(E,q,ee)=>this.#e(E,q,ee)},"grid")}
                    ${D?w`
                      <div class="precision-popover">
                        <${Qe} compact inline .state=${e} .localize=${this.localize}></${Qe}>
                      </div>
                    `:y}
                  </div>
                `:y}
                <div
                  class="sheet-panel"
                  id="sheet-panel"
                  @pointerdown=${this.#we}
                  @pointermove=${this.#Te}
                  @pointerup=${this.#ke}
                  @pointercancel=${this.#ke}
                >
                  ${this.#Le(e)}
                  <div class="sheet-body" role="region" aria-labelledby="workspace-title">${this.#We(e,s)}</div>
                </div>
                ${this.#$e(e,c,p)}
              `:w`
                <div class="status-strip">
                  <span class="status-icon" aria-hidden="true">${O(i.icon)}</span>
                  <span class="status-copy"><strong>${i.title}</strong><small>${i.detail}</small></span>
                  ${d?this.#Se(d,"status-action ms-btn ms-btn--secondary","status-reason"):y}
                </div>
                <section class="workflow">
                  ${this.#Le(e)}
                  <div class="workflow-body" role="region" aria-labelledby="workspace-title">${this.#We(e,s)}</div>
                  ${this.#$e(e,c,p)}
                </section>
              `}
            </aside>

            ${e.fullMap?w`
              <section
                class=${`full-map-hud ms-surface ms-surface--floating ${l?"has-secondary":""} ${!s&&(e.workflow==="draw"||e.workflow==="rooms"&&e.selection.roomIds.length>0)?"above-dock":""}`}
                aria-label=${this.#e("v4_robot_status_and_action","Robot status and action")}
              >
                <span class="hud-copy"><strong>${i.title}</strong><small>${i.detail}</small></span>
                ${h&&a.id!=="stop"?y:this.#Se(a,"ms-btn ms-btn--lg ms-btn--primary","hud-reason")}
                ${l&&(!h||l.id==="stop")?this.#Se(l,"ms-btn ms-btn--lg ms-btn--secondary","hud-secondary-reason"):y}
              </section>
            `:y}
          </main>
        </div>

        <div
          class="notice notice-toast"
          data-notice-toast
          role="region"
          aria-label=${this.#e("v4_notifications","Notifications")}
          data-tone=${$?.tone??y}
          style=${C}
          ?hidden=${!$}
          ?inert=${!!S}
          @pointerenter=${this.#F}
          @focusin=${this.#F}
          @pointerleave=${this.#K}
          @focusout=${this.#K}
        >${$?this.#U($,this.#de,this.#e("v4_hide_notification","Hide notification")):y}</div>

        <div class="sr-only" aria-live="polite" aria-atomic="true">${this._polite}</div>
        <div class="sr-only" role="alert" aria-atomic="true">${this._alert}</div>

        ${S?w`
          <div class="dialog-backdrop">
            <section
              class="dialog ms-surface ms-surface--overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title"
              aria-describedby="dialog-detail"
              @keydown=${this.#Ue}
            >
              <h2 id="dialog-title">${S.title}</h2>
              <div id="dialog-detail">
                <p>${S.detail}</p>
                ${S.consequence?w`<p>${S.consequence}</p>`:y}
                ${k?w`<p id="dialog-saving" role="status">${this.#e("v4_notice_saving","Saving\u2026")}</p>`:y}
              </div>
              <div class="dialog-actions">
                <button
                  class=${v?"ms-btn":"ms-btn ms-btn--secondary"}
                  type="button"
                  data-dialog-initial-focus
                  aria-disabled=${k?"true":y}
                  aria-describedby=${k?"dialog-saving":y}
                  @click=${v?this.#me:this.#ve}
                >${S.cancelLabel}</button>
                ${b?w`<button
                  class="ms-btn ms-btn--secondary"
                  type="button"
                  aria-disabled=${k?"true":y}
                  aria-describedby=${k?"dialog-saving":y}
                  @click=${()=>{if(k)return;let E={};this.#I=E,this.requestUpdate(),this.#Z(b,q=>this.#ge(E,q))}}
                >${this.#e("v4_save","Save")}</button>`:y}
                <button
                  class="discard ms-btn ms-btn--primary ms-btn--danger"
                  type="button"
                  aria-disabled=${k?"true":y}
                  aria-describedby=${k?"dialog-saving":y}
                  @click=${()=>{k||this.#L(S)}}
                >${S.confirmLabel}</button>
              </div>
            </section>
          </div>
        `:y}
      </div>
    `}};customElements.get(me)||customElements.define(me,Et);var an=re(me),be=new WeakMap,Nn={},Bn=3e4,Ct=(r,t)=>{be.get(r)===t&&be.delete(r)},Mt=class extends Ce{constructor(){super(...arguments);this.narrow=!1;this._workspace=U();this.#e=new Le;this.#t=new Lt(this._workspace);this.#o=null;this.#n=null;this.#a=null;this.#i=null;this.#r=null;this.#s=null}static{this.styles=[Me,Pe,Ee`
:host { display: block; block-size: 100%; }
`]}static{this.properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_workspace:{state:!0}}}#e;#t;#o;#n;#a;#i;#r;#s;#h(e=this.hass,s=this.panel){let n=this.#t.value.selection;return n.entrySource==="user"?this.#e.project(e,s,n.entryId):this.#e.project(e,s)}#y(){let e=this.hass,s=e?.loadBackendTranslation;if(!e||typeof s!="function")return;let n=e.connection??Nn,i=e.language??"";be.get(n)!==i&&(be.set(n,i),Promise.resolve().then(()=>s.call(e,"common","matic_robot")).catch(()=>{if(be.get(n)===i){if(!this.isConnected){Ct(n,i);return}this.#s&&clearTimeout(this.#s.timer),this.#s={owner:n,language:i,timer:setTimeout(()=>{this.#s=null,Ct(n,i),this.#y()},Bn)}}}))}shouldUpdate(e){if(this.#y(),!e.has("hass")||[...e.keys()].some(n=>n!=="hass"))return!0;let s=e.get("hass");return s?.connection!==this.hass?.connection||s?.localize!==this.hass?.localize?!0:this.#h()!==this.#o}connectedCallback(){super.connectedCallback(),this.#y(),this.#n=this.#t.subscribe(e=>{if(this._workspace=e,e.selection.entryId!==this.#o?.entryKey){let s=this.#h();s!==this.#o&&(this.#o=s,this.#i?.sync(s))}}),this.#u()}disconnectedCallback(){this.#s&&(clearTimeout(this.#s.timer),Ct(this.#s.owner,this.#s.language),this.#s=null),this.#n?.(),this.#n=null,this.#C(),super.disconnectedCallback()}#u(){if(!(!this.isConnected||this.#i)&&(this.#o=this.#h(),this.#a=new He(()=>this.hass),this.#i=new Ye(this.#t,this.#a,this.hass?.connection??null),this.#r=new Ge(this.#t),this.#r.start(),this.#o)){this.#i.sync(this.#o);let{host:e}=this.#o;e.connected&&e.administrator&&e.robotCount>0&&this.#i.refreshCatalog(this.#t.value.selection.floorId==="current")}}#C(){this.#r?.dispose(),this.#r=null,this.#i?.dispose(),this.#i=null,this.#a=null}willUpdate(e){if(e.has("hass")||e.has("panel")){let s=e.get("hass"),n=e.has("hass")&&s?.connection!==this.hass?.connection,i=this.#h(),o=i!==this.#o;o&&(this.#o=i),n?(this.#C(),this.#u()):(o||e.has("panel"))&&this.#i?.sync(i)}e.has("narrow")&&this.#t.value.narrowHint!==this.narrow&&this.#t.dispatch({type:"set-narrow-hint",value:this.narrow})}#b(e){if(!It(e.detail))return;e.stopPropagation();let s=e.detail;if(s.type==="dismiss-top-layer"||s.type==="exit-full-map"){this.#r?.dismissTop()||this.#t.dispatch(s);return}if(s.type==="open-workflow"&&s.workflow!=="none"){this.#i?.openWorkflow(s.workflow);return}if(s.type==="set-floor"){this.#i?.selectFloor(s.floorId);return}if(s.type==="select-entry"){if(!this._workspace.robots.some(n=>n.entryId===s.entryId)||this.#e.project(this.hass,this.panel,s.entryId).entryKey!==s.entryId)return;this.#t.dispatch(s);return}if(s.type==="set-history"){this.#i?.selectHistory(s.historyId);return}if(s.type==="select-plan"){this.#i?.selectPlan(s.planId,!1,s.origin);return}if(s.type==="set-plan-enabled"){this.#i?.setPlanEnabled(s.enabled);return}if(s.type==="select-area"){this.#i?.selectArea(s.areaId),s.workflow==="areaReview"&&this.#i?.openWorkflow("areaReview");return}this.#t.dispatch(s)}#f(e){e.stopPropagation(),typeof e.detail?.id=="string"&&(e.detail.id==="reset-room-cadence"&&"planId"in e.detail&&"roomId"in e.detail&&"mode"in e.detail?this.#i?.executeAction(e.detail):this.#i?.executeAction(e.detail.id,"settled"in e.detail?e.detail.settled:void 0),this.dispatchEvent(new CustomEvent("matic-map-v4-action-requested",{detail:{id:e.detail.id},bubbles:!0,composed:!0})))}getWorkspaceSnapshot(){return this.#t.value}getRequestDiagnostics(){return Object.freeze({http:this.#a?.requestDiagnostics()??null,workspace:this.#i?.workspaceDiagnostics()??null})}render(){return w`
      <${an}
        .state=${this._workspace}
        .localize=${this.hass?.localize}
        .dates=${this.#o?.dates}
        @matic-workspace-intent=${this.#b}
        @matic-workspace-action=${this.#f}
      ></${an}>
    `}};customElements.get(it)||customElements.define(it,Mt);export{Le as a,Mt as b};
