import{A as ts,B as ss,C as ns,D as vs,E as $e,F as Oe,G as ys,H as ht,I as gs,J as bs,K as ws,L as ks,M as _s,N as Ss,O as Rs,P as Es,Q as Cs,R as Ms,U as Ps,V as As,a as oe,b as w,c as Ae,d as Ft,e as st,f as Kt,i as pe,j as nt,k as Ut,l as Vt,m as jt,n as it,o as Yt,p as Xt,q as re,r as me,s as ae,t as Gt,u as R,v as Te,w as Qt,x as Jt,y as Zt,z as es}from"./chunk-CCVKGSKD.js";import{E as ds,F as at,G as xe,H as lt,I as ct,J as dt,K as us,L as j,M as hs,N as ps,O as ms,P as ut,Q as fs,R as D,a as Me,b as Pe,c as is,d as le,e as ot,f as os,g as rs,h as as,i as rt,j as ls,k as cs}from"./chunk-JEY7GUXQ.js";import{C as tt,D as Se,I as qt,J as Re,L as zt,M as Nt,N as Bt,R as Ee,S as Ht,X as y,Z as Ce,_ as Ie,c as xt,h as M,j as It,k as ie,n as K,o as $t,p as Je,q as Ze,r as Ot,t as Dt,u as Lt,v as Wt,x as _e,z as et}from"./chunk-6FC35FD6.js";var cn=(r,t)=>{if(t?.recharge_and_resume===!0&&t?.charging===!0)return"recharging";switch(r){case"cleaning":return"cleaning";case"paused":return"paused";case"returning":return"returning";case"docked":return"docked";case"idle":return"idle";case"error":return"problem";default:return"unknown"}},dn=r=>typeof r!="number"||!Number.isFinite(r)?null:Math.round(Math.max(0,Math.min(100,r))),un=r=>{let t=r.attributes?.matic_entry_id;return typeof t=="string"&&t.length>0?t:null},hn=r=>String(r||"local-user").replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",Ts=r=>{if(typeof r!="string")return"Robot";let t=r.trim();return t&&Array.from(t).length<=128&&!/[\u0000-\u001f\u007f]/u.test(t)?t:"Robot"},De=class{#e="";#t=null;project(t,e,s=null){let n=t?.states??{},i=e?.config?.entry_id,a=s||(typeof i=="string"?i:null),l=null,d=null,c=a,u=new Map;for(let[$,E]of Object.entries(n)){let O=un(E);O&&$.startsWith("vacuum.")&&(u.set(O,{entryId:O,label:Ts(E.attributes?.friendly_name)}),(a?O===a:!l)&&(l=E,d=$,c=O))}let p={connected:t?.connected!==!1,administrator:t?.user?.is_admin===!0,robotConnected:l!==null&&l.state!=="unavailable"&&l.state!=="unknown",robotCount:u.size},h=l?cn(l.state,l.attributes):"unknown",f=dn(l?.attributes?.battery_level),g=t?.selectedLanguage||t?.language||"en",v=t?.locale?.language||g,_=t?.locale?.time_zone==="server"?t.config?.time_zone:void 0,S=this.#t?.dates,k=S?.language===v&&S.timeZone===_?S:{language:v,timeZone:_},b=hn(t?.user?.id),C=Ts(l?.attributes?.friendly_name),P=[...u.values()].sort(($,E)=>$.label.localeCompare(E.label,g,{sensitivity:"base"})),L=[p.connected,p.administrator,p.robotConnected,p.robotCount,h,f??"none",g,v,_??"browser",b,d??"none",c??"none",C,P.map($=>`${$.entryId}:${$.label}`).join(",")].join("|");return L===this.#e&&this.#t?this.#t:(this.#e=L,this.#t={host:p,activity:h,batteryPercent:f,language:g,dates:k,userKey:b,vacuumEntityId:d,entryKey:c,robotLabel:C,robots:P},this.#t)}};var pn=1024*1024,xs=r=>{let t=s=>{let n=r.sceneHeaderBytes,i=r.scenePointStride,o=r.sceneMaxPoints,a=r.sceneMaxBytes,l=()=>{throw new Error("invalid-scene")};(!(s instanceof ArrayBuffer)||s.byteLength<n||s.byteLength>a)&&l();let d=new DataView(s),c=new Uint8Array(s,0,8),u=String.fromCharCode(...c),p=d.getUint16(8,!0),h=d.getUint16(10,!0),f=d.getUint32(12,!0),g=d.getUint32(16,!0),v=d.getUint32(20,!0),_=g+v,S=n+f;(u!=="MATIC3D\0"||p!==1||h!==i||f>1048576||_<1||_>o||S+_*h!==s.byteLength)&&l();let k;try{k=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(new Uint8Array(s,n,f)))}catch{l()}(!k||typeof k!="object"||Array.isArray(k))&&l();let b=k,C=b.meters_per_cell,P=b.origin_cells,L=b.span_cells;(typeof C!="number"||!Number.isFinite(C)||C<.001||C>.1||!Array.isArray(P)||P.length!==2||!P.every(W=>typeof W=="number"&&Number.isFinite(W))||!Array.isArray(L)||L.length!==2||!L.every(W=>typeof W=="number"&&Number.isFinite(W)&&W>=1&&W<=65536))&&l();let E=(Array.isArray(b.rooms)?b.rooms.slice(0,128):[]).flatMap((W,we)=>{if(!W||typeof W!="object"||Array.isArray(W))return[];let B=W,Q=typeof B.name=="string"?B.name.trim():"";if(!Q||Array.from(Q).length>128||/[\u0000-\u001f\u007f]/u.test(Q))return[];if(!Array.isArray(B.boundary)||B.boundary.length<3||B.boundary.length>8192)return[];let ke=B.boundary.flatMap(V=>{if(!Array.isArray(V)||V.length!==2)return[];let[J,ne]=V;return typeof J=="number"&&Number.isFinite(J)&&typeof ne=="number"&&Number.isFinite(ne)?[[J,ne]]:[]}),ee=B.center;if(ke.length<3||!Array.isArray(ee)||ee.length!==2)return[];let[te,se]=ee;return typeof te!="number"||!Number.isFinite(te)||typeof se!="number"||!Number.isFinite(se)?[]:[{id:`scene-room-${we+1}`,name:Q,boundary:ke,center:[te,se]}]}),O=typeof b.sample_step=="number"&&Number.isInteger(b.sample_step)?Math.max(1,Math.min(o,b.sample_step)):1,G=P,be=L;return{buffer:s,pointOffset:S,floorCount:g,surfaceCount:v,total:_,metadata:{metersPerCell:C,origin:[G[0],G[1]],span:[be[0],be[1]],sampleStep:O,rooms:E}}};return{parseTransfer:t,decodeDeltaTransfer:async(s,n,i)=>{let o=(x="invalid-scene-delta")=>{throw new Error(x)},a=()=>{if(i?.aborted)throw new DOMException("Aborted","AbortError")};(!(s instanceof ArrayBuffer)||s.byteLength<r.deltaHeaderBytes||s.byteLength>r.deltaHeaderBytes+r.deltaMaxBytes||!(n.buffer instanceof ArrayBuffer)||n.buffer.byteLength<r.sceneHeaderBytes||n.buffer.byteLength>r.deltaMaxBytes||!Number.isSafeInteger(n.revision)||n.revision<0)&&o("invalid-scene-delta-size");let l=new DataView(s),d=String.fromCharCode(...new Uint8Array(s,0,8)),c=l.getUint16(8,!0),u=l.getUint16(10,!0),p=l.getBigUint64(12,!0),h=l.getBigUint64(20,!0),f=l.getUint32(28,!0),g=l.getUint32(32,!0),v=Number(p),_=Number(h);(d!=="MATICDLT"||c!==1||u!==1||!Number.isSafeInteger(v)||!Number.isSafeInteger(_)||v!==n.revision||_<=n.revision||f<r.sceneHeaderBytes||f>r.deltaMaxBytes||g<1||g>r.deltaMaxBytes||g+r.deltaHeaderBytes!==s.byteLength)&&o(),typeof DecompressionStream!="function"&&o("scene-delta-decompression-unavailable"),a();let S=new Uint8Array(s,r.deltaHeaderBytes,g),k=Math.max(n.buffer.byteLength,f);k>r.deltaMaxBytes&&o("invalid-scene-delta-size");let b=new Uint8Array(k),P=new Blob([S]).stream().pipeThrough(new DecompressionStream("deflate")).getReader(),L=0,$=null;try{for($=()=>{P.cancel().catch(()=>{})},i?.addEventListener("abort",$,{once:!0});;){a();let{done:x,value:Z}=await P.read();if(x)break;(!(Z instanceof Uint8Array)||L+Z.byteLength>k)&&o(),b.set(Z,L),L+=Z.byteLength}}catch(x){if(await P.cancel().catch(()=>{}),i?.aborted||x instanceof DOMException&&x.name==="AbortError")throw new DOMException("Aborted","AbortError");if(x instanceof Error&&x.message==="invalid-scene-delta")throw x;o()}finally{$&&i?.removeEventListener("abort",$),P.releaseLock()}a(),L!==k&&o();let E=new Uint8Array(n.buffer),O=new DataView(b.buffer,b.byteOffset,b.byteLength),G=Math.min(r.sceneHeaderBytes,E.byteLength);for(let x=0;x<G;x+=1)b[x]=(b[x]??0)^(E[x]??0);let be=O.getUint32(12,!0),W=O.getUint32(16,!0),we=O.getUint32(20,!0),B=r.sceneHeaderBytes+be,Q=W+we,ke=B===n.pointOffset&&W===n.floorCount&&we===n.surfaceCount,ee=B+Q*r.scenePointStride,te=ke&&ee===f&&Q<=r.sceneMaxPoints,se=[],V=-1,J=!1,ne=()=>{J&&V>=0&&se.push(V),J=!1};for(let x=G;x<E.byteLength;x+=r.xorChunkBytes){a();let Z=Math.min(E.byteLength,x+r.xorChunkBytes);for(let H=x;H<Z;H+=1){let Pt=E[H]??0,At=(b[H]??0)^Pt;if(b[H]=At,!te||H<n.pointOffset||H>=ee)continue;let Tt=Math.floor((H-n.pointOffset)/r.dirtyBlockBytes);Tt!==V&&(ne(),V=Tt),At!==Pt&&(J=!0)}Z<E.byteLength&&await new Promise(H=>globalThis.setTimeout(H,0))}ne(),a();let ln=f===b.byteLength?b.buffer:b.slice(0,f).buffer;return{parsed:t(ln),revision:_,...te?{deltaHint:{baseRevision:v,blockBytes:r.dirtyBlockBytes,dirtyBlocks:se}}:{}}}}},Is=Object.freeze({deltaHeaderBytes:me,deltaMaxBytes:ae,sceneHeaderBytes:it,sceneMaxBytes:re,sceneMaxPoints:Xt,scenePointStride:Yt,dirtyBlockBytes:Gt,xorChunkBytes:pn}),$s=xs(Is),mn=r=>{try{return $s.parseTransfer(r)}catch{throw new R("invalid-scene")}},fn=()=>`
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
`,Le=class{#e=null;#t=null;#i=!1;#s=!1;#a=0;#r=null;#o=null;#n=null;constructor(){if(!(typeof Worker!="function"||typeof URL?.createObjectURL!="function"))try{this.#t=URL.createObjectURL(new Blob([fn()],{type:"text/javascript"})),this.#y()}catch{this.#e=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}}async parse(t,e){if(this.#u(e),t.byteLength>re||t.byteLength<it)throw new R("invalid-scene");let s=await this.#h({kind:"parse",buffer:t},e,async n=>(await new Promise(i=>globalThis.setTimeout(i,0)),this.#u(n),{id:0,ok:!0,parsed:mn(t)}));if(!s.parsed)throw new R("invalid-scene");return s.parsed}async decodeDelta(t,e,s){if(this.#u(s),t.byteLength>me+ae||e.buffer.byteLength>ae)throw new R("invalid-scene-delta-size");let n={buffer:e.buffer,revision:e.revision,pointOffset:e.pointOffset,floorCount:e.floorCount,surfaceCount:e.surfaceCount},i;try{i=await this.#h({kind:"delta",payload:t},s,async o=>(await new Promise(a=>globalThis.setTimeout(a,0)),this.#u(o),$s.decodeDeltaTransfer(t,n,o).then(a=>({id:0,ok:!0,...a}))),n)}catch(o){throw o instanceof R?o:s?.aborted||o instanceof DOMException&&o.name==="AbortError"?new DOMException("Aborted","AbortError"):o instanceof Error&&(o.message.startsWith("invalid-scene")||o.message==="scene-delta-decompression-unavailable")?new R(o.message):new R("invalid-scene-delta")}if(!i.parsed||i.revision===void 0)throw new R("invalid-scene-delta");return{parsed:i.parsed,revision:i.revision,...i.deltaHint?{deltaHint:i.deltaHint}:{}}}#u(t){if(this.#s)throw new R("scene-parser-disposed");if(t?.aborted)throw new DOMException("Aborted","AbortError")}#y(){if(!(!this.#t||this.#i||this.#s))try{let t=new Worker(this.#t);t.onmessage=e=>{let s=this.#r;this.#e!==t||!s||s.worker!==t||e.data.id!==s.id||(e.data.ok?this.#w(s,e.data):this.#w(s,void 0,new R(e.data.problem||"invalid-scene")))},t.onerror=()=>this.#c(t),t.onmessageerror=()=>this.#c(t),this.#e=t}catch{this.#e=null,this.#i=!0}}async#h(t,e,s,n){return this.#u(e),new Promise((i,o)=>{let a,l=()=>e?.removeEventListener("abort",a.abort),d=(c,u)=>{a.settled||(a.settled=!0,l(),u!==void 0?o(u):c?i(c):o(new R("invalid-scene")))};a={id:++this.#a,message:t,...e?{signal:e}:{},fallback:s,...n?{base:n}:{},settle:d,abort:()=>this.#b(a),settled:!1,worker:null},e?.addEventListener("abort",a.abort,{once:!0}),e?.aborted||this.#s?d(void 0,e?.aborted?new DOMException("Aborted","AbortError"):new R("scene-parser-disposed")):this.#r?this.#o?d(void 0,new R("scene-parser-busy")):this.#o=a:(this.#r=a,this.#k(a))})}#k(t){if(this.#r!==t)return;if(this.#s){this.#w(t,void 0,new R("scene-parser-disposed"));return}if(t.signal?.aborted){this.#w(t,void 0,new DOMException("Aborted","AbortError"));return}!this.#e&&!this.#i&&this.#y();let e=this.#e;if(e){t.worker=e;try{let n,i;if(t.message.kind==="parse")n={id:t.id,kind:t.message.kind,buffer:t.message.buffer},i=[t.message.buffer];else{if(!t.base)throw new R("invalid-scene-delta");let o={...t.base,buffer:t.base.buffer.slice(0)};n={id:t.id,kind:t.message.kind,payload:t.message.payload,base:o},i=[t.message.payload,o.buffer]}e.postMessage(n,i)}catch{this.#c(e)}return}let s=new AbortController;this.#n=s,Promise.resolve().then(()=>t.fallback(s.signal)).then(n=>this.#w(t,n),n=>this.#w(t,void 0,n))}#b(t){let e=new DOMException("Aborted","AbortError");if(this.#o===t){this.#o=null,t.settle(void 0,e);return}this.#r===t&&(t.worker?(this.#f(),this.#w(t,void 0,e)):this.#n?.abort())}#w(t,e,s){if(this.#r!==t){t.settle(void 0,new R("scene-parser-disposed"));return}let n=t.signal?.aborted?new DOMException("Aborted","AbortError"):s;t.settle(e,n),this.#r=null,this.#n=null,t.worker=null,this.#s||this.#p()}#p(){if(this.#s||this.#r||!this.#o)return;let t=this.#o;if(this.#o=null,t.signal?.aborted){t.settle(void 0,new DOMException("Aborted","AbortError")),this.#p();return}this.#r=t,this.#k(t)}#c(t){if(this.#e!==t)return;this.#i=!0,this.#f();let e=this.#r;e?.worker===t?this.#w(e,void 0,new R("scene-worker-failed")):this.#p()}#f(){this.#e?.terminate(),this.#e=null}dispose(){if(this.#s)return;this.#s=!0;let t=this.#o;this.#o=null,t?.settle(void 0,new R("scene-parser-disposed"));let e=this.#r;this.#f(),this.#n?.abort(),this.#n=null,e&&(e.worker=null,e.settle(void 0,new R("scene-parser-disposed"))),this.#r=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}};var pt=["catalog","scene","sceneDelta","pose","history","plans","areas","areaSave","areaDelete"];var mt=()=>({requests:0,completed:0,failed:0,aborted:0,timedOut:0,totalDurationMs:0,maxDurationMs:0}),Os=r=>Math.min(1e9,r+1),Ds=r=>Number.isFinite(r)?Math.min(1e12,Math.max(0,r)):0,ce=class{#e=mt();#t=!1;record(t,e){if(this.#t)return;let s=Math.round(Ds(e)*100)/100;this.#e.requests=Os(this.#e.requests),this.#e[t]=Os(this.#e[t]),this.#e.totalDurationMs=Ds(this.#e.totalDurationMs+s),this.#e.maxDurationMs=Math.max(this.#e.maxDurationMs,s)}snapshot(){return Object.freeze({...this.#e})}reset(){this.#t||Object.assign(this.#e,mt())}dispose(){this.#t=!0,Object.assign(this.#e,mt())}},We=class{#e=Object.fromEntries(pt.map(t=>[t,new ce]));#t=!1;record(t,e,s){this.#t||this.#e[t].record(e,s)}snapshot(){let t=Object.fromEntries(pt.map(e=>[e,this.#e[e].snapshot()]));return Object.freeze(t)}dispose(){if(!this.#t){this.#t=!0;for(let t of pt)this.#e[t].dispose()}}};var N={catalog:1e4,scene:6e4,delta:35e3,pose:1e4,history:15e3,workflow:15e3,mutation:2e4,roomPreview:15e3},vn=2,fe=new WeakMap,A=class extends Error{constructor(t,e=null){super(t),this.name="BackendError",this.code=t,this.status=e}},Ls=(r,t)=>{let e=r.headers.get("X-Matic-Revision");if(e===null)return t;let s=Number(e);if(!Number.isSafeInteger(s)||s<0)throw new R("invalid-scene-revision");return s},Ws=(r,t)=>{let e=r.headers.get("X-Matic-Floor-Coherent");if(e===null)return t;if(e==="1")return!0;if(e==="0")return!1;throw new R("invalid-scene-floor-header")},qe=class{#e;#t=new Le;#i=new WeakMap;#s=new Set;#a=new We;#r=!1;constructor(t){this.#e=t}requestDiagnostics(){return this.#a.snapshot()}async#o(t,e,s=Number.POSITIVE_INFINITY,n="invalid-response-size"){let i=t.body?.getReader();if(!i)return new ArrayBuffer(0);let o=()=>{i.cancel().catch(()=>{})};e.addEventListener("abort",o,{once:!0});try{if(e.aborted)throw o(),new DOMException("Aborted","AbortError");let a=[],l=0;for(;;){let u=await i.read();if(e.aborted)throw new DOMException("Aborted","AbortError");if(u.done)break;if(l+u.value.byteLength>s)throw i.cancel().catch(()=>{}),new R(n);a.push(u.value),l+=u.value.byteLength}let d=new Uint8Array(l),c=0;for(let u of a)d.set(u,c),c+=u.byteLength;return d.buffer}finally{e.removeEventListener("abort",o),i.releaseLock()}}async#n(t,e,s,n,i,o){if(!ns(e))throw new A("invalid-private-path");if(i?.aborted)throw new DOMException("Aborted","AbortError");let a=performance.now(),l="failed",d=new AbortController,c=()=>{},u=new Promise((g,v)=>{c=v}),p=()=>{d.abort(),c(new DOMException("Aborted","AbortError"))};i?.addEventListener("abort",p,{once:!0});let h=!1,f=window.setTimeout(()=>{h=!0,p()},n);try{let g=this.#e(),v=new Headers(s.headers),_={...s,cache:"no-store",credentials:"same-origin",headers:Object.fromEntries(v.entries()),signal:d.signal},S=async()=>{let b;if(typeof g?.fetchWithAuth=="function")b=await g.fetchWithAuth(e,_);else{let C=g?.auth?.accessToken||g?.auth?.data?.access_token;C&&v.set("Authorization",`Bearer ${C}`);let P=typeof g?.hassUrl=="function"?g.hassUrl(e):e;b=await fetch(P,{..._,headers:v})}try{if(d.signal.aborted)throw new DOMException("Aborted","AbortError");return await o(b,d.signal)}finally{b.body&&!b.body.locked&&b.body.cancel().catch(()=>{})}},k=await Promise.race([S(),u]);return l="completed",k}catch(g){throw h&&!i?.aborted?(l="timedOut",new A("request-timeout")):d.signal.aborted?(l="aborted",new DOMException("Aborted","AbortError")):g}finally{window.clearTimeout(f),i?.removeEventListener("abort",p),this.#a.record(t,l,performance.now()-a)}}async#u(t,e,s,n,i={}){return this.#n(t,e,{...i,headers:{Accept:"application/json",...i.headers||{}}},s,n,async(o,a)=>{if(!o.ok){let l=o.headers.get("X-Matic-Plans-Conflict");throw new A(l==="map-rechecking"?"map-rechecking":"request-failed",o.status)}try{return JSON.parse(new TextDecoder().decode(await this.#o(o,a)))}catch{throw new R("invalid-json-response")}})}async catalog(t){return Te(await this.#u("catalog",jt,N.catalog,t))}async scene(t,e,s,n,i,o){let a=new Headers({Accept:"application/vnd.matic.slam-scene"});return n==="live"&&a.set("X-Matic-Prefer-Cached","1"),o&&a.set("If-None-Match",o),this.#n("scene",t,{headers:a},N.scene,i,async(l,d)=>{let c=Ls(l,e),u=Ws(l,s);if(l.status===304)return{scene:null,floorCoherent:u,revision:c,notModified:!0};if(!l.ok)throw new A("scene-request-failed",l.status);if(l.headers.get("Content-Type")?.split(";",1)[0]!=="application/vnd.matic.slam-scene")throw new R("invalid-scene-content-type");return{scene:{...await this.#t.parse(await this.#o(l,d,re,"invalid-scene-size"),d),revision:c,etag:l.headers.get("ETag"),source:n},floorCoherent:u,revision:c,notModified:!1}})}async sceneDelta(t,e,s,n){let i=t.includes("?")?"&":"?";return this.#n("sceneDelta",`${t}${i}since=${encodeURIComponent(e.revision)}`,{headers:{Accept:"application/vnd.matic.slam-delta, application/vnd.matic.slam-scene"}},N.delta,n,async(o,a)=>{let l=Ls(o,e.revision),d=Ws(o,s);if(o.status===204){if(l!==e.revision)throw new R("invalid-scene-delta-revision");return{scene:null,floorCoherent:d,revision:l,notModified:!0}}if(!o.ok)throw new A("delta-request-failed",o.status);if(l<=e.revision)throw new R("invalid-scene-delta-revision");let c=o.headers.get("Content-Type")?.split(";",1)[0];if(c!=="application/vnd.matic.slam-delta"&&c!=="application/vnd.matic.slam-scene")throw new R("invalid-scene-delta-content-type");let u=c==="application/vnd.matic.slam-delta",p=u?me+ae:re,h=Number(o.headers.get("Content-Length"));if(Number.isFinite(h)&&h>p)throw new R(u?"invalid-scene-delta-size":"invalid-scene-size");let f=await this.#o(o,a,p,u?"invalid-scene-delta-size":"invalid-scene-size");if(u){let v=Number(o.headers.get("X-Matic-Base-Revision"));if(!Number.isSafeInteger(v)||v!==e.revision)throw new R("invalid-scene-delta-base");let _=await this.#t.decodeDelta(f,e,a);if(_.revision!==l)throw new R("invalid-scene-delta-revision");return{scene:{..._.parsed,revision:l,etag:o.headers.get("ETag"),source:"live",..._.deltaHint?{deltaHint:_.deltaHint}:{}},floorCoherent:d,revision:l,notModified:!1}}return{scene:{...await this.#t.parse(f,a),revision:l,etag:o.headers.get("ETag"),source:"live"},floorCoherent:d,revision:l,notModified:!1}})}async pose(t,e){return ss(await this.#u("pose",t,N.pose,e))}async history(t,e){return Qt(await this.#u("history",t,N.history,e))}async plans(t,e){return ts(await this.#u("plans",t,N.workflow,e))}async areas(t,e){return Zt(await this.#u("areas",t,N.workflow,e))}async previewRoomSequence(t,e,s,n){if(!t||t.length>255||e.length<1||e.length>100)throw new R("invalid-room-sequence-preview-request");if(n?.aborted)throw new DOMException("Aborted","AbortError");let i=this.#e()?.connection;if(!i?.sendMessagePromise)throw new A("preview-unavailable");let o=null,a=()=>{},l=new Promise((_,S)=>{a=S}),d=this.#i.get(i),c,u=new Promise(_=>{c=_});this.#i.set(i,u);let p=!1,h=()=>{p||(p=!0,c(),this.#i.get(i)===u&&this.#i.delete(i))},f=!1,g=()=>{a(new DOMException("Aborted","AbortError")),f&&(h(),o!==null&&window.clearTimeout(o),o=null)};n?.addEventListener("abort",g,{once:!0});let v=new Promise((_,S)=>{o=window.setTimeout(()=>{o=null,S(new A("preview-timeout"))},N.roomPreview)});v.catch(()=>{f&&h()});try{if(d&&(await Promise.race([d,l,v]),n?.aborted))throw new DOMException("Aborted","AbortError");let _=fe.get(i)??0;if(_>=vn)throw new A("preview-unavailable");let S=i.sendMessagePromise({type:"call_service",domain:"matic_robot",service:"preview_room_sequence",target:{entity_id:t},service_data:{rooms:e.map(P=>({room:P.room,cleaning_mode:P.cleaning_mode,coverage_setting:P.coverage_setting})),use_room_schedule:!0,override_room_schedule:s},return_response:!0});fe.set(i,_+1),f=!0;let k=!1,b=()=>{if(!k){k=!0;let P=(fe.get(i)??1)-1;P===0?fe.delete(i):fe.set(i,P)}h(),o!==null&&window.clearTimeout(o),o=null};S.then(b,b);let C=await Promise.race([S,l,v]);if(n?.aborted)throw new DOMException("Aborted","AbortError");if(!C||typeof C!="object"||Array.isArray(C)||!("response"in C))throw new R("invalid-room-sequence-preview-envelope");return Jt(C.response)}finally{f||(d?d.then(h,h):h(),o!==null&&window.clearTimeout(o),o=null),n?.removeEventListener("abort",g)}}async saveArea(t,e,s){let n=await this.#u("areaSave",t,N.mutation,s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e.areaId?{area_id:e.areaId}:{},name:e.name,circles:e.circles,...e.outline?.closed?{outline:e.outline.points}:{},cleaning_mode:e.cleaningMode,coverage_setting:e.coverageSetting})});if(!n||typeof n!="object"||typeof n.id!="string")throw new R("invalid-area-save-response");return n.id}async deleteArea(t,e,s){await this.#n("areaDelete",`${t}?area_id=${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json"}},N.mutation,s,async n=>{if(!n.ok)throw new A("area-delete-failed",n.status)})}async service(t,e,s,n,i={}){let o=this.#e();if(this.#r||typeof o?.callService!="function")throw new A("service-unavailable");let a=null,l=null;try{let d=i.returnResponse?o.callService(t,e,s,{entity_id:n},!0,!0):o.callService(t,e,s,{entity_id:n});return!i.returnResponse&&!i.acknowledgementTimeout?await d:await Promise.race([d,new Promise((c,u)=>{l=()=>{a!==null&&window.clearTimeout(a),a=null,u(new DOMException("Aborted","AbortError"))},this.#s.add(l),a=window.setTimeout(()=>u(new A("mutation-timeout")),N.mutation)})])}finally{a!==null&&window.clearTimeout(a),l&&this.#s.delete(l)}}dispose(){if(!this.#r){this.#r=!0,this.#a.dispose();for(let t of this.#s)t();this.#s.clear(),this.#t.dispose()}}};var zs=()=>({version:4,view:"top",appearance:"photo",labels:!0,quality:"auto",cameras:{}}),ve=(r,t,e)=>Math.max(t,Math.min(e,r)),Ns=r=>r.replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",ft=(r,t=4)=>`matic-map-studio:v${t}:${Ns(r)}`,yn=r=>{if(!r||typeof r!="object")return null;let t=r;return["yaw","pitch","zoom","targetX","targetZ"].every(s=>typeof t[s]=="number"&&Number.isFinite(t[s]))?{yaw:ve(t.yaw,-Math.PI,Math.PI),pitch:ve(t.pitch,.18,Math.PI/2-.018),zoom:ve(t.zoom,.01,100),targetX:ve(t.targetX,-1e4,1e4),targetZ:ve(t.targetZ,-1e4,1e4)}:null},qs=r=>{let t=zs();if(!r||typeof r!="object")return t;let e=r,s=e.view==="three"||e.view==="top"||e.view==="rooms"?e.view:t.view,n=s==="rooms"?"top":s,i=e.quality==="auto"||e.quality==="efficient"||e.quality==="balanced"||e.quality==="maximum"?e.quality:t.quality,o=e.cameras&&typeof e.cameras=="object"?e.cameras:{},a={};for(let l of["three","top"]){let d=yn(o[l]);d&&(a[l]=d)}return{version:4,view:n,appearance:e.appearance==="rooms"||e.appearance==="photo"?e.appearance:t.appearance,labels:typeof e.labels=="boolean"?e.labels:t.labels,quality:i,cameras:a}},ze=class{#e="local-user";#t=null;#i=null;load(t){this.#s(),this.#e=Ns(t);try{let e=window.localStorage.getItem(ft(this.#e));if(e)return qs(JSON.parse(e));for(let s of[3,2]){let n=window.localStorage.getItem(ft(this.#e,s));if(n)return qs(JSON.parse(n))}}catch{}return zs()}schedule(t){this.#t!==null&&window.clearTimeout(this.#t),this.#i={key:ft(this.#e),value:t},this.#t=window.setTimeout(()=>this.#s(),250)}#s(){this.#t!==null&&window.clearTimeout(this.#t),this.#t=null;let t=this.#i;if(this.#i=null,!!t)try{window.localStorage.setItem(t.key,JSON.stringify(t.value))}catch{}}dispose(){this.#s()}};var yt=1,de=Number.MAX_SAFE_INTEGER,Us=Number.MAX_SAFE_INTEGER,Bs=64,gn=1e12,vt=4,Hs=16*1024,bn=250,wn=4e3,Ne=3e4;function q(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)?r:null}function Y(r,t){return typeof r=="number"&&Number.isSafeInteger(r)&&r>=0&&r<=t}function Vs(r){let t=q(r);if(!t)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,Us))return null;e[s]=n}return e}function kn(r){let t=q(r);if(!t||Object.keys(t).length>128)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,Us))return null;e[s]=n}return e}function js(r){return typeof r=="string"&&r.length>0&&r.length<=256?r:Y(r,de)?String(r):null}function _n(r){let t=q(r),e=js(t?.epoch);if(!t||t.schema!==yt||e===null)return null;let s=kn(t.capabilities),n=Vs(t.revisions);return!s||!n||!Y(t.sequence,de)||!Y(t.coherence_generation,de)||t.coherence_generation===0?null:{schema:t.schema,capabilities:s,epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:n}}function Fs(r,t){let e=q(r),s=_n(e?.snapshot??r);if(!s)return null;let n=q(e?.snapshot??r);if(!n||!("payload"in n))return null;let i=n.entry_id,o=q(n.identity),a=q(n.status),l=q(n.payload),d=a?a.reason===null?null:Ys(a.reason):null,c=l?.available,u=null;if(l?.entry!==void 0&&l.entry!==null){if((()=>{try{return JSON.stringify(l.entry).length}catch{return Hs+1}})()>Hs)return null;try{u=Te({entries:[l.entry]})[0]??null}catch{return null}}let p=a?.state;return typeof i!="string"||i.length===0||i.length>128||t!==void 0&&i!==t||!o||o.entry_id!==i||o.floor_mission_id!==null&&!Y(o.floor_mission_id,de)||typeof o.floor_verified!="boolean"||o.floor_verified!==(o.floor_mission_id!==null)||!a||p!=="ready"&&p!=="stale"&&p!=="unavailable"||a.reason!==null&&d===null||typeof a.retryable!="boolean"||typeof c!="boolean"||u!==null&&u.entryId!==i||p==="ready"&&(d!==null||a.retryable||!c)||(p==="stale"||p==="unavailable")&&(d===null||c)||d==="authorization"&&a.retryable?null:{...s,entry_id:i,identity:{entry_id:i,floor_mission_id:o.floor_mission_id,floor_verified:o.floor_verified},status:{state:p,reason:d,retryable:a.retryable},payload:{available:c,entry:u}}}function Ks(r){let t=q(r),e=js(t?.epoch),s=Vs(t?.revisions),n=t?.resources;return e===null||!s||!Y(t?.sequence,de)||!Y(t?.coherence_generation,de)||t.coherence_generation===0||!Array.isArray(n)||n.length>128||!n.every(i=>typeof i=="string"&&i.length<=128)?null:{epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:s,resources:n}}var Be=["gap","overflow","reconnect","invalid_message","server_request","restart","entry_removed","authorization","snapshot_required"];function Ys(r){return typeof r=="string"&&Be.includes(r)?r:null}function Sn(r){let t=q(r);return t?.name==="AbortError"?"aborted":t?.name==="TimeoutError"?"timedOut":"failed"}function Rn(){return Object.fromEntries(Be.map(r=>[r,new ce]))}var He=class{#e;#t;#i;#s=null;#a=!1;#r=!1;#o=!1;#n=!1;#u=!1;#y=!1;#h=0;#k=!1;#b=!1;#w=!1;#p=!1;#c=null;#f=null;#A=0;#$=!1;#v=null;#_=-1;#d=new Map;#E=!1;#D=!1;#L=null;#l=[];#z=new ce;#R=Rn();#C=null;#g=null;#N=null;constructor(t,e){this.#e=t,this.#t=e,this.#i=Math.max(1,Math.min(Bs,e.maxPendingInvalidations??Bs))}async start(){if(!(this.#a||this.#D)){this.#D=!0;try{await this.#U(!1)}catch(t){this.#J(t),this.#S("reconnect")}}}notifyReconnect(){(this.#n||this.#y)&&(this.#W(),this.#Q("aborted"),this.#h+=1),this.#A=0,this.#k=!1,this.#n=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.requestResync("reconnect"),this.#o&&this.#H(0,!0)}requestResync(t="server_request"){this.#S(t,!0)}diagnostics(){let t=Object.fromEntries(Be.map(s=>[s,this.#R[s].snapshot()])),e=this.#g!==null&&this.#N!==null?Object.freeze({reason:this.#g,durationMs:Math.round(Math.min(gn,Math.max(0,performance.now()-this.#N))*100)/100}):null;return Object.freeze({snapshotAttempts:this.#z.snapshot(),recoveryEpisodes:Object.freeze(t),activeRecovery:e})}dispose(){if(!this.#a){this.#a=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#o=!1,this.#s?.(),this.#s=null,this.#d.clear(),this.#l=[],this.#C=null,this.#g=null,this.#N=null,this.#z.dispose();for(let t of Be)this.#R[t].dispose()}}#K(t){if(this.#a)return;let e=q(t),s=q(e?.event)??e,n=s?.type;if(n==="resync"){let o=Ys(s?.reason);if(!o){this.#S("invalid_message");return}if(o==="entry_removed"){this.#t.onEvent({type:"resync",reason:o}),this.dispose();return}this.#S(o);return}if(this.#n){if(n==="invalidate"){let o=Ks(s?.invalidation??s);o?this.#B(o):(this.#l=[],this.#$=!0)}return}let i=n==="snapshot"?Fs(s?.snapshot??s,this.#t.entryId):n==="invalidate"?Ks(s?.invalidation??s):null;if(!i){this.#S("invalid_message");return}if(n==="snapshot"){let o=i;if(this.#o)return;if(this.#v!==null&&o.epoch!==this.#v){this.#S("restart");return}this.#Y(o);return}this.#O(i)}#Y(t){this.#v===t.epoch&&t.sequence<this.#_||(this.#v=t.epoch,this.#_=t.sequence,this.#d.clear(),this.#t.onEvent({type:"snapshot",snapshot:t}))}#ce(t){let e=this.#l;if(this.#l=[],this.#Y(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(i=>i.epoch===t.epoch&&i.sequence>=s),this.#S("gap");return}this.#O(n),s+=1}}#O(t){if(this.#o){this.#B(t);return}if(this.#v===null){this.#B(t);return}if(this.#v!==t.epoch){this.#B(t),this.#S("reconnect");return}if(!(t.sequence<=this.#_)){if(t.sequence!==this.#_+1){this.#B(t),this.#S("gap");return}this.#_=t.sequence;for(let e of t.resources)this.#d.set(e,t);if(this.#d.size>this.#i){this.#d.clear(),this.#S("overflow");return}this.#E||(this.#E=!0,queueMicrotask(()=>this.#de()))}}#B(t){this.#l.length>=this.#i?(this.#l=[],this.#$=!0,this.#S("overflow")):this.#l.push(t)}#de(){if(this.#E=!1,this.#a||this.#n||this.#d.size===0){this.#n&&this.#d.clear();return}let t=[...this.#d.values()];this.#d.clear();let e=t.reduce((n,i)=>!n||i.sequence>n.sequence?i:n,null);if(!e)return;let s=[...new Set(t.flatMap(n=>n.resources))];this.#t.onEvent({type:"invalidation",invalidation:{...e,resources:s}})}#S(t,e=!1){if(!this.#a){if(t==="authorization"){this.#F(),this.#t.onEvent({type:"resync",reason:t});return}if(!this.#n&&(this.#M(t),this.#r||(this.#r=!0,this.#t.onEvent({type:"resync",reason:t}),queueMicrotask(()=>{this.#r=!1})),t!=="entry_removed")){let s=e&&!this.#k;if(s&&(this.#k=!0),s&&this.#c!==null&&(window.clearTimeout(this.#c),this.#c=null),this.#w){if(this.#p){s&&this.#H(0,!0);return}this.#p=!0,this.#X(s);return}if(e&&this.#o){s&&(this.#b=!0);return}let n=this.#A>=vt?Ne:0;this.#H(s?0:n,s)}}}#H(t,e=!1){if(!this.#a){if(this.#c!==null){if(!e)return;window.clearTimeout(this.#c),this.#c=null}if(this.#o){this.#f=e?t:Math.max(this.#f??0,t);return}this.#c=window.setTimeout(()=>{this.#c=null,this.#U(!0)},t)}}#X(t=!1){let e=this.#A>=vt?Ne:Math.min(bn*2**this.#A,wn);this.#A<vt&&(this.#A+=1),this.#H(t?0:e,t)}async#U(t,e=!1){if(this.#a||this.#o)return;t&&this.#M(e?"authorization":"snapshot_required");let s=this.#h;this.#o=!0,this.#y=e;try{if(t&&await this.#V(),this.#a||this.#n&&!e||s!==this.#h)return;let n={startedAt:performance.now(),generation:s};this.#C=n;let i="completed",o;try{o=await this.#e.sendMessagePromise({type:"matic_robot/workspace_snapshot",version:yt,entry_id:this.#t.entryId})}catch(d){throw i=Sn(d),d}finally{this.#m(n,i)}if(this.#a||this.#n&&!e||s!==this.#h)return;let a=Fs(o,this.#t.entryId);if(!a)throw new Error("invalid-workspace-snapshot");if(a.status.reason==="authorization"){this.#F(),this.#t.onEvent({type:"snapshot",snapshot:a});return}if(a.status.state!=="ready"&&a.status.retryable)throw new Error("workspace-snapshot-retryable");e&&(this.#n=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null),this.#o=!1,this.#w=!0,this.#p=!1;try{t?this.#ne(a):this.#ce(a)}finally{this.#w=!1}let l=this.#p||this.#$;this.#p?this.#b&&(this.#b=!1,this.#H(0,!0)):(this.#A=0,this.#k=!1,this.#b=!1),!t&&!this.#a&&await this.#V(),this.#$&&(this.#$=!1,this.#S("overflow")),t&&a.status.state==="ready"&&!l&&!this.#a&&s===this.#h&&this.#Q("completed")}catch(n){if(this.#a||this.#n&&!e||s!==this.#h)return;if(this.#J(n),this.#ue(n))this.#F(),this.#t.onEvent({type:"resync",reason:"authorization"});else if(!e){t||this.#M("reconnect");let i=this.#b;this.#b=!1,this.#X(i)}}finally{this.#o=!1,this.#y=!1,this.#u?(this.#u=!1,this.#T(0)):e&&this.#n&&this.#T(Ne);let n=this.#f;this.#f=null,n!==null&&this.#H(n)}}async#V(){if(this.#a||this.#s)return;if(this.#L)return this.#L;let t=(async()=>{let e=await this.#e.subscribeMessage(s=>this.#K(s),{type:"matic_robot/workspace_subscribe",version:yt,entry_id:this.#t.entryId});this.#a?e():this.#s=e})();this.#L=t;try{await t}finally{this.#L===t&&(this.#L=null)}}#ne(t){let e=this.#l;if(this.#l=[],this.#v===t.epoch&&t.sequence<this.#_){this.#l=e,this.#S("snapshot_required");return}if(this.#Y(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(i=>i.sequence>=s),this.#S("gap");return}this.#O(n),s+=1}}#ue(t){let e=q(t),s=e?.code,n=e?.status??e?.statusCode;return s==="unauthorized"||s==="not_authorized"||s==="auth_invalid"||n===401||n===403}#M(t){this.#g!==null||this.#a||(this.#g=t,this.#N=performance.now())}#Q(t){let e=this.#g,s=this.#N;this.#g=null,this.#N=null,!(e===null||s===null||this.#a)&&this.#R[e].record(t,performance.now()-s)}#m(t,e){this.#C!==t||this.#a||t.generation!==this.#h||(this.#C=null,this.#z.record(e,performance.now()-t.startedAt))}#W(){let t=this.#C;t!==null&&(this.#C=null,!this.#a&&t.generation===this.#h&&this.#z.record("aborted",performance.now()-t.startedAt))}#F(){this.#W(),this.#Q("failed"),this.#h+=1,this.#n||(this.#n=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#u=!1),this.#d.clear(),this.#l=[],this.#$=!1,this.#f=null,this.#A=0,this.#k=!1,this.#b=!1,this.#y||this.#T(Ne)}#T(t){this.#a||this.#c!==null||this.#u||(this.#c=window.setTimeout(()=>{if(this.#c=null,!this.#a){if(this.#o){this.#u=!0;return}this.#U(!0,!0)}},t))}#J(t){this.#t.onError?.(t instanceof Error?t:new Error("Workspace transport failed"))}};var Fe=class{#e;#t;#i=document.visibilityState!=="hidden";#s=!1;#a=!1;#r=!1;constructor({onSuspend:t,onResume:e}){this.#e=t,this.#t=e}get active(){return this.#i}start(){this.#s||this.#a||(this.#s=!0,window.addEventListener("pagehide",this.#o),window.addEventListener("pageshow",this.#n),document.addEventListener("visibilitychange",this.#u),document.visibilityState==="hidden"&&(this.#i?this.#h(!1):this.#e()))}dispose(){this.#a||(this.#a=!0,this.#s&&(window.removeEventListener("pagehide",this.#o),window.removeEventListener("pageshow",this.#n),document.removeEventListener("visibilitychange",this.#u)))}#o=()=>{this.#r=!0,this.#h(!1)};#n=t=>{if(this.#r=!1,t.persisted){document.visibilityState==="hidden"?this.#h(!1):(this.#h(!1),this.#h(!0));return}this.#y()};#u=()=>{this.#y()};#y(){if(this.#r||document.visibilityState==="hidden"){this.#h(!1);return}this.#h(!0)}#h(t){this.#i===t||this.#a||(this.#i=t,t?this.#t():this.#e())}};var m=(r,t,e=null)=>({status:r,value:t,problem:e}),ye=r=>r.status==="loading"?m("idle",r.value):r,z=r=>r instanceof DOMException&&r.name==="AbortError",En={notice:M,parseSavedPlanId:es,BackendError:A,isAbort:z,canEditCoordinates:et,initialWorkspaceState:K,draftForPlan:Ze,hasStoppableWork:Re},U=(r,t)=>r instanceof A||r&&typeof r=="object"&&"code"in r&&typeof r.code=="string"?r.code:t,I={stopUnconfirmed:M("error","v4_notice_stop_unconfirmed","Home Assistant can't confirm the robot stopped, so press Stop again if it's still moving."),actionUnconfirmed:M("error","v4_notice_action_unconfirmed","Home Assistant can't confirm that command, so check the robot before trying again."),mapChanged:M("info","v4_notice_map_changed","The map changed, so choose what to clean again."),statusRefreshed:M("info","v4_notice_status_refreshed","Status refreshed, so check the robot before trying again."),planSaveFailed:M("error","v4_notice_plan_save_failed","Home Assistant can't confirm the plan was saved, so check your plans, then try again."),planDeleteFailed:M("error","v4_notice_plan_delete_failed","The plan wasn't deleted; try again."),planPreviewMissing:M("warning","v4_notice_plan_preview_missing","The next-run preview isn't ready; reload your plans, then try again."),planRemoved:M("warning","v4_notice_plan_removed","This plan was removed elsewhere, so nothing was changed."),planPreviewRefreshFailed:M("warning","v4_notice_plan_preview_refresh_failed","The next-run preview didn't refresh; check the plan, then try again."),planPreviewNone:M("warning","v4_notice_plan_preview_none","This plan has no next-run preview; review its rooms and schedules."),planPreviewChanged:M("info","v4_notice_plan_preview_changed","The next run changed; check it before you run the plan."),roomPreviewBlocked:M("warning","v4_notice_room_preview_blocked","A room can't use these settings, so check the note above the rooms."),roomPreviewChanged:M("info","v4_notice_room_preview_changed","The room settings changed, so check them and start again."),roomPreviewFailed:M("warning","v4_notice_room_preview_failed","Home Assistant couldn't check the room settings, so try starting again."),areaRemoved:M("warning","v4_notice_area_removed","This saved area was removed elsewhere. Your edits are kept as a new draft; saving will create a new area."),areaSaveFailed:M("error","v4_notice_area_save_failed","Home Assistant can't confirm the area was saved, so try again."),areaDeleteFailed:M("error","v4_notice_area_delete_failed","Home Assistant can't confirm the area was deleted, so try again."),resetMopFailed:M("error","v4_notice_reset_mop_failed","Mopping progress wasn't reset; try again."),resetVacuumFailed:M("error","v4_notice_reset_vacuum_failed","Vacuum rotation progress wasn't reset; try again.")},Cn=r=>M("warning","v4_notice_saved_map","Showing the saved map from {date} without the robot's position.",{date:{date:r}}),Xs={coverage_identity_unavailable:M("error","v4_notice_coverage_task_unknown","Home Assistant can't confirm the current clean, so check the robot first."),coverage_activity_unavailable:M("error","v4_notice_coverage_activity_unknown","Home Assistant can't confirm whether the robot is cleaning, so check it first."),coverage_native_session_active:M("error","v4_notice_coverage_robot_busy","The robot is already cleaning, so wait for it to finish."),coverage_identity_changed:M("error","v4_notice_coverage_task_changed","The clean changed while starting, so check the robot first.")},Mn=r=>{let{translation_domain:t,translation_key:e}=r??{};return t==="matic_robot"&&typeof e=="string"&&Object.hasOwn(Xs,e)?Xs[e]??null:null},ue=r=>[r.selectedFloorOrdinal??"none",r.mapFloorOrdinal??"none",r.mapFloorCoherent?"coherent":"transition"].join(":"),he=r=>[r.mapFloorOrdinal??"none",r.mapSessionVerified?"verified":"unverified",r.mapSessionKey??"no-session"].join(":"),F=r=>[r.entryId,r.selectedFloorOrdinal??"none",r.mapFloorOrdinal??"none"].join("|"),T=r=>[r.entryId,ue(r),he(r)].join("|"),gt=r=>[T(r),r.mapRevision].join("|"),Ke=r=>r.runnerLocked||r.stopSettlePending||r.activePlan||r.nativeReconciliationPending||r.nativeSessionActive===!0,Ue=(r,t)=>r.entryKey===t.entryKey&&r.generation===t.generation&&r.floorKey===t.floorKey&&r.missionKey===t.missionKey,Pn=1e3,An=5e3,Gs=["rooms","plans","plan","draw","areaReview"],Qs=["plan-mutation","area-mutation"],Js=r=>JSON.stringify({...r,previewToken:void 0}),Ve=(r,t)=>r.label?r.label:r.active?"Current floor":`Saved floor ${r.ordinal??t}`,je=class{#e;#t;#i;#s;#a=new ze;#r=null;#o=new Map;#n=null;#u=null;#y=null;#h=null;#k=0;#b=!1;#w=!1;#p=!1;#c=!1;#f=null;#A=Promise.resolve();#$=!1;#v=!1;#_="";#d=null;#E=0;#D=null;#L="";#l=!1;#z=!0;#R=null;#C=null;#g=null;#N=null;#K="";#Y=!1;#ce=null;#O;#B;workspaceDiagnostics(){return this.#R?.diagnostics()??null}constructor(t,e,s=null,n){this.#e=t,this.#t=new Wt(t.value.generation),this.#i=e,this.#O=s,this.#B=n,this.#s=new Fe({onSuspend:()=>this.#de(),onResume:()=>{this.#S()}}),this.#e.patch({pageActive:this.#s.active}),this.#N=t.subscribe(i=>{this.#H(i),this.#ne()}),this.#s.start()}#de(){this.#W(!1,Qs),this.#j(),this.#I(Qs),this.#p=!1,this.#c=!1,this.#f=null,this.#v=!1,this.#we();let t=this.#e.value;this.#e.patch({resources:{...t.resources,catalog:ye(t.resources.catalog),scene:ye(t.resources.scene),history:ye(t.resources.history),plans:ye(t.resources.plans),areas:ye(t.resources.areas),pose:m("idle",null)}})}async#S(){if(this.#l||!this.#s.active)return;this.#e.patch({pageActive:!0});let t=this.#n;if(this.#l||!this.#s.active||!t?.host.connected||!t.host.administrator||!t.host.robotConnected||t.host.robotCount===0)return;let e=this.#e.value;this.#ie(),this.#M(t),await this.refreshCatalog(!0,!0);let s=this.#e.value,n=s.resources.entry;if(this.#l||!this.#s.active||e.dataMode!=="history"||s.generation!==e.generation||s.dataMode!=="history"||s.selection.entryId!==e.selection.entryId||s.selection.floorId!==e.selection.floorId||s.selection.historyId!==e.selection.historyId||s.resources.catalog.status!=="ready"||!n||n.entryId!==s.selection.entryId)return;let i=s.resources.history.value?.floors.find(u=>u.id===s.selection.floorId),o=i?.snapshots.find(u=>u.id===s.selection.historyId);if(!i)return;let a=this.#t.begin(n.entryId,i.id,o?.id??i.id,o?.revision??0);if(this.#e.patch({generation:a.generation}),await this.#re(n,a),!this.#t.accepts(a)||!this.#s.active||this.#e.value.resources.history.status!=="ready")return;let l=this.#e.value,d=l.resources.history.value?.floors.find(u=>u.id===i.id),c=d?.snapshots.find(u=>u.id===o?.id);!d||o&&!c||(c&&c.revision!==a.revision&&(a=this.#t.begin(n.entryId,i.id,c.id,c.revision)),this.#e.patch({generation:a.generation,coherence:"current"}),c&&(!l.resources.scene.value||c.revision!==o?.revision)&&await this.#be(c,a))}#H(t){if(!t.owner)return;let e={version:4,view:t.view,appearance:t.appearance,labels:t.labelsVisible,quality:t.quality,cameras:t.cameras},s=this.#r;this.#r=e,!(!s||s.view===e.view&&s.appearance===e.appearance&&s.labels===e.labels&&s.quality===e.quality&&s.cameras===e.cameras)&&this.#a.schedule(e)}#X(t){let e=$t(t),s=t.resources.entry,n=this.#n?.vacuumEntityId;if(!e||!s||!n||!t.selection.entryId||t.workflow!=="rooms"||t.dataMode!=="live"||t.floor.readOnly||t.coherence!=="current"||!t.host.connected||!t.host.administrator||!t.host.robotConnected||t.command!=="idle"||t.resources.plans.status!=="ready")return null;let i=t.selection.roomIds.map(o=>{let a=t.selection.roomSettings.find(l=>l.roomId===o);return a?{room:o,cleaning_mode:a.cleaningMode,coverage_setting:a.coverageSetting}:null});return i.some(o=>o===null)?null:{key:e,generation:t.generation,retryRevision:t.manualRoomPreviewRetry,floorKey:ue(s),missionKey:he(s),entryId:t.selection.entryId,entityId:n,rooms:i,overrideRoomSchedule:!t.selection.useRoomSchedule}}#U(t){return JSON.stringify([t.key,t.generation,t.retryRevision,t.floorKey,t.missionKey,t.entryId,t.entityId])}#V(t){let e=this.#X(this.#e.value);return!this.#l&&e!==null&&this.#U(e)===this.#U(t)}#ne(){if(this.#l||!this.#n)return;let t=this.#e.value,e=this.#X(t);if(!e){this.#o.get("room-preview")?.abort(),this.#o.delete("room-preview"),this.#K="",(t.manualRoomPreview.status!=="idle"||t.manualRoomPreview.value!==null)&&this.#e.patch({manualRoomPreview:m("idle",null)});return}let s=this.#U(e),n=Je(t);if(n&&n.key===e.key&&n.generation===e.generation&&n.floorKey===e.floorKey&&n.missionKey===e.missionKey&&n.preview.entryId===e.entryId){this.#K=s;return}if(this.#K===s)return;this.#o.get("room-preview")?.abort(),this.#K=s;let i=this.#P("room-preview");this.#e.patch({manualRoomPreview:m("loading",null)}),this.#ue(e,i)}async#ue(t,e){try{let s=await this.#i.previewRoomSequence(t.entityId,t.rooms,t.overrideRoomSchedule,e.signal);return!this.#V(t)||e.signal.aborted||s.entryId!==t.entryId?null:(this.#e.patch({manualRoomPreview:m("ready",{key:t.key,generation:t.generation,floorKey:t.floorKey,missionKey:t.missionKey,preview:s})}),s)}catch(s){return z(s)||e.signal.aborted||!this.#V(t)||this.#e.patch({manualRoomPreview:m("error",null,U(s,"preview-unavailable"))}),null}finally{this.#x("room-preview",e)}}sync(t){if(this.#l)return;let e=this.#R,s=this.#n?.host.robotConnected??null,n=this.#n?.host.administrator===!1&&t.host.administrator,i=this.#n!==null&&!this.#n.host.robotConnected&&t.host.robotConnected,o=this.#e.value.owner,a=o!==null&&(o.entryKey!==t.entryKey||o.userKey!==t.userKey);a&&(this.#te("context-changed",t.entryKey),this.#b&&(this.#p=!0,this.#c=!1,this.#f=null));let l=this.#z;this.#z=t.host.connected,this.#n=t,this.#M(t),i&&e&&e===this.#R&&e.notifyReconnect();let d=t.userKey!==this.#L?this.#a.load(t.userKey):null;if(d&&(this.#L=t.userKey,this.#r=d),this.#e.patch({owner:{userKey:t.userKey,entryKey:t.entryKey},host:t.host,activity:t.activity,batteryPercent:t.batteryPercent,robotLabel:t.robotLabel,robots:t.robots,locale:t.language,selection:{...this.#e.value.selection,entryId:t.entryKey},...d?{view:d.view,appearance:d.appearance,labelsVisible:d.labels,quality:d.quality,cameras:d.cameras}:{}}),!t.host.administrator){this.#j(),this.#te("access-required",t.entryKey);return}if(!t.host.connected){l&&(this.#e.patch({generation:this.#t.invalidate()}),this.#T(),this.#_=""),this.#j(),this.#p=!1,this.#c=!1,this.#f=null,this.#v=!1,this.#I();let c=this.#e.value,u=c.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...c.resources,catalog:c.resources.catalog.status==="loading"?m("idle",c.resources.catalog.value):c.resources.catalog,plans:c.resources.plans.status==="loading"?m("idle",c.resources.plans.value):c.resources.plans,areas:c.resources.areas.status==="loading"?m("idle",c.resources.areas.value):c.resources.areas,pose:m("idle",null)},map:{...c.map,available:u!==null,exactPose:!1}});return}if(t.host.robotCount===0){this.#j(),this.#te("map-unavailable",t.entryKey);return}if(t.entryKey&&!t.vacuumEntityId){this.#j(),this.#te("no-loaded-robot",t.entryKey);return}if(!t.host.robotConnected){s!==!1&&(this.#W(),this.#I(),this.#p=!1,this.#c=!1,this.#f=null,this.#v=!1),this.#j();let c=this.#e.value,u=c.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...c.resources,catalog:c.resources.catalog.status==="loading"?m("idle",c.resources.catalog.value):c.resources.catalog,scene:c.resources.scene.status==="loading"?m("idle",u):c.resources.scene,pose:m("idle",null)},map:{...c.map,available:u!==null,exactPose:!1}});return}if(this.#s.active){if(this.#ie(),!l||i||n){this.refreshCatalog(!0,!0);return}(a||this.#e.value.resources.catalog.status==="idle"||t.entryKey&&t.entryKey!==this.#e.value.selection.entryId)&&this.refreshCatalog(!0)}}#M(t){let e=t.entryKey,s=this.#e.value,n=s.resources.catalog.value?.find(l=>l.entryId===e),i=s.resources.entry;if(!(this.#B??!!(n?.liveWorkspaceTransportEnabled&&i?.entryId===e&&i.liveWorkspaceTransportEnabled))||!this.#O||!t.host.administrator||!t.host.connected||!t.vacuumEntityId||!e||!this.#s.active){this.#we();return}if(this.#R&&this.#C===e)return;this.#R?.dispose(),this.#g=null;let a=new He(this.#O,{entryId:e,onEvent:l=>{if(!(this.#l||!this.#s.active||this.#R!==a||this.#C!==e||this.#n?.entryKey!==e)){if(l.type==="resync"&&l.reason==="entry_removed"){a.dispose(),this.#R===a&&(this.#R=null,this.#C=null,this.#g=null);return}if(l.type==="snapshot"){let{snapshot:d}=l,c=this.#e.value.resources.entry,u=d.payload.entry;if(d.entry_id!==e||d.identity.entry_id!==e)return;if(u&&(u.entryId!==e||d.identity.floor_verified!==(u.mapFloorCoherent&&u.mapSessionVerified))){a.requestResync("invalid_message");return}let p=!u&&c?.entryId===e&&d.identity.floor_verified!==(c.mapFloorCoherent&&c.mapSessionVerified);if(d.status.reason==="authorization"){this.#g=null,this.#F(e,["plans","areas","history"]);return}let h=this.#g,f=[],g=h!==null&&h.epoch!==d.epoch;if(h&&h.epoch===d.epoch){let k=new Set([...Object.keys(h.revisions),...Object.keys(d.revisions)]),b=[...k].some(C=>(d.revisions[C]??-1)<(h.revisions[C]??-1));if(d.coherence_generation<h.coherenceGeneration||d.coherence_generation===h.coherenceGeneration&&b){a.requestResync("restart");return}f=[...k].filter(C=>(d.revisions[C]??-1)>(h.revisions[C]??-1))}g&&(f=["plans","areas","history"]);let v=h!==null&&(h.epoch!==d.epoch||h.coherenceGeneration!==d.coherence_generation),_=!!(c&&u&&c.entryId===e&&T(c)!==T(u));if(this.#g={entryId:d.entry_id,epoch:d.epoch,sequence:d.sequence,coherenceGeneration:d.coherence_generation,revisions:d.revisions},p){this.#F(e,["plans","areas","history"]);return}if(v||_){this.#F(e,f);return}let S=u!==null&&c?.entryId===e&&this.#m(u);if(h&&f.length){if(d.sequence<=h.sequence){a.requestResync("invalid_message");return}this.#g=h,this.#Q({epoch:d.epoch,sequence:d.sequence,coherence_generation:d.coherence_generation,revisions:d.revisions,resources:f},e,a,S)}return}if(l.type==="resync"){this.#g=null,l.reason!=="authorization"&&this.#F(e,["plans","areas","history"]);return}this.#Q(l.invalidation,e,a)}}});this.#R=a,this.#C=e,a.start()}#Q(t,e,s,n=!1){let i=this.#g;if(!i||i.entryId!==e||this.#R!==s||t.epoch!==i.epoch||t.sequence<=i.sequence)return;let o=t.coherence_generation!==i.coherenceGeneration,l=[...new Set([...Object.keys(i.revisions),...Object.keys(t.revisions)])].some(h=>(t.revisions[h]??-1)<(i.revisions[h]??-1));if(t.coherence_generation<i.coherenceGeneration||!o&&l){s.requestResync("restart");return}let d=new Set(t.resources),c=[...d].some(h=>(t.revisions[h]??-1)>(i.revisions[h]??-1));if(this.#g={...i,sequence:t.sequence,coherenceGeneration:t.coherence_generation,revisions:t.revisions},!c&&!o)return;if(o){this.#F(e,t.resources);return}d.has("scene")&&d.delete("scene");let u=this.#e.value.resources.entry,p=this.#t.current();!u||u.entryId!==e||!p||d.size&&this.#_e(u,p,d,!n)}#m(t){let e=this.#e.value,s=e.resources.entry;if(!s||T(s)!==T(t))return!1;let n=t.mapRevision===s.mapRevision?t:{...t,mapRevision:s.mapRevision},i=e.resources.catalog,o=i.value?.map(u=>u.entryId===n.entryId?n:u),a=n.mapFloorCoherent&&n.mapSessionVerified,l=n.health==="problem"||n.health==="limited",d=this.#d,c=d?.key===T(n)&&this.#oe(d)&&(d.attempt!==null||d.retryTimer!==null);return this.#e.patch({managedLock:Ke(n),coherence:c?"verifying":a?l?"degraded":"current":"verifying",map:{...e.map,available:e.resources.scene.value!==null,complete:n.mapComplete&&!n.mapTruncated,floorCoherent:n.mapFloorCoherent,sessionVerified:n.mapSessionVerified,exactPose:a&&!c?e.map.exactPose:!1},floor:{...e.floor,classifiedCount:Math.max(1,n.historyFloorCount),...c&&e.resources.scene.value?{readOnly:!0}:{}},resources:{...e.resources,entry:n,...o?{catalog:{...i,value:o}}:{}}}),this.#n&&this.#M(this.#n),!0}#W(t=this.#e.value.pageActive,e=[]){let s=this.#t.invalidate();this.#T();let n=this.#e.value;this.#e.patch({generation:s,pageActive:t,coherence:n.resources.scene.value?"verifying":"unavailable",floor:{...n.floor,readOnly:n.floor.readOnly||n.resources.scene.value!==null},map:{...n.map,exactPose:!1}}),this.#d&&this.#pe(this.#d.key),this.#I(["catalog",...e]),this.#_=""}#F(t,e=[]){this.#q(),this.#W(),this.refreshCatalog(!0,!0).then(()=>{if(this.#l||this.#n?.entryKey!==t||!this.#n.host.administrator||!this.#n.host.connected)return;let s=this.#e.value.resources.entry,n=this.#t.current();if(!s||s.entryId!==t||!n)return;let i=new Set(e);i.delete("history"),this.#_e(s,n,i,!1)})}#T(){this.#E+=1,this.#D=null}#J(t){let e=this.#D,s=this.#t.current();return!!(e&&s&&e.generation===this.#E&&e.stamp.generation===s.generation&&e.entryId===t.entryId&&e.coherenceIdentity===T(t)&&e.deltaUrl===t.deltaUrl&&s.entryKey===t.entryId&&s.floorKey===ue(t)&&s.missionKey===he(t)&&t.mapFloorCoherent&&t.mapSessionVerified&&this.#e.value.dataMode==="live"&&this.#e.value.selection.floorId==="current"&&this.#n?.host.connected&&this.#n.host.robotConnected&&this.#n.host.administrator)}#_e(t,e,s,n=!0){(s.has("plans")||s.has("plan_state"))&&this.loadPlans(),s.has("areas")&&this.loadAreas(),s.has("history")&&this.#re(t,e),n&&["status","robot_state","activity","plan_state"].some(i=>s.has(i))&&this.refreshCatalog(!0,!0,!0)}#ie(){this.#s.active&&(this.#u===null&&(this.#u=window.setInterval(()=>{this.refreshCatalog()},5e3)),this.#y===null&&(this.#y=window.setInterval(()=>{this.refreshPose()},Pn)))}#j(){this.#u!==null&&window.clearInterval(this.#u),this.#y!==null&&window.clearInterval(this.#y),this.#u=null,this.#y=null,this.#q()}#q(){let t=this.#d;if(this.#d=null,!t)return;t.attempt?.finishReplacementRead?.(),t.attempt&&(t.attempt.finishReplacementRead=null),t.retryTimer!==null&&window.clearTimeout(t.retryTimer);let e=t.attempt?.controller,s=!!(e&&e===this.#o.get("catalog")&&this.#e.value.resources.catalog.status==="loading");if(e?.abort(),s){let n=this.#e.value.resources;this.#e.patch({resources:{...n,catalog:m("idle",n.catalog.value)}})}this.#f?.state===t&&(this.#p=!1,this.#c=!1,this.#f=null)}#he(t,e){let s=this.#d;s?.key===T(e)&&(s.failedKinds.delete(t),t==="delta"&&this.#Z(e),s.failedKinds.size===0&&this.#q())}#Z(t){this.#pe(T(t))}#pe(t){let e=this.#d;e?.key===t&&(e.attempt?.finishReplacementRead?.(),e.attempt&&(e.attempt.finishReplacementRead=null))}#me(t,e){let s=T(e),n=this.#d;n?.key!==s&&(this.#q(),n={key:s,failedKinds:new Set,retryTimer:null,attempt:null},this.#d=n),n.failedKinds.add(t),t==="delta"&&this.#Z(e),this.#oe(n)&&this.#t.current()&&this.#W(),!n.attempt&&n.retryTimer===null&&(n.failedKinds.size===1&&n.failedKinds.has(t)?this.#Se(n):this.#ee(n))}#oe(t){let e=this.#e.value;return t.failedKinds.has("pose")||e.floor.readOnly||!e.map.floorCoherent||!e.map.sessionVerified}#ee(t){t.retryTimer!==null||t.failedKinds.size===0||(t.retryTimer=window.setTimeout(()=>{t.retryTimer=null;let e=this.#e.value.resources.entry,s=this.#n?.host;if(this.#d!==t||this.#l||!e||T(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#d===t&&this.#q();return}this.#Se(t)},An))}async#Se(t){if(this.#l||this.#d!==t||t.attempt)return;let e=this.#e.value.resources.entry,s=this.#n?.host;if(!e||T(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#d===t&&this.#q();return}if(this.#o.has("scene")){this.#ee(t);return}let n=this.#oe(t);n?this.#t.current()&&this.#W():(this.#T(),this.#o.get("delta")?.abort());let i,o=new Promise(d=>{i=d}),a={generation:this.#t.generation,controller:null,replacementRead:o,finishReplacementRead:i};t.attempt=a;let l={state:t,attempt:a};try{await this.refreshCatalog(!0,!1,!n,l),t.failedKinds.has("delta")&&this.#d===t&&t.attempt===a&&await a.replacementRead}finally{if(this.#d!==t||t.attempt!==a)return;a.finishReplacementRead=null,t.attempt=null,t.failedKinds.size>0&&this.#ee(t)}}#G(t){let e=this.#e.value,s=this.#n?.host;return!this.#l&&this.#s.active&&this.#d===t.state&&t.state.attempt===t.attempt&&t.attempt.generation===this.#t.generation&&e.generation===this.#t.generation&&e.dataMode==="live"&&e.selection.floorId==="current"&&e.resources.entry!==null&&T(e.resources.entry)===t.state.key&&!!(s?.connected&&s.administrator&&s.robotConnected&&s.robotCount>0)}#P(t){this.#o.get(t)?.abort();let e=new AbortController;return this.#o.set(t,e),e}#x(t,e){this.#o.get(t)===e&&this.#o.delete(t)}#I(t=[]){let e=!1;for(let[s,n]of this.#o)t.includes(s)||(e||=s==="plan-mutation"||s==="area-mutation"||s==="plan-preflight",n.abort(),this.#o.delete(s));e&&this.#e.value.command==="pending"&&this.#e.patch({command:"idle",notice:null})}#ge(){this.#k+=1,this.#h!==null&&window.clearTimeout(this.#h),this.#h=null}#te(t,e=null){this.#q(),this.#ge(),this.#t.invalidate(),this.#T(),this.#_="";let s=this.#t.generation;this.#I();let n=this.#e.value,i=K();this.#e.patch({command:"idle",dataMode:i.dataMode,floor:i.floor,managedLock:!1,workflow:"none",dialog:null,notice:null,draftFloorOrdinal:null,draw:i.draw,planDraft:i.planDraft,areaDraft:i.areaDraft,generation:s,coherence:n.host.administrator?"unavailable":"blocked",fullMap:!1,precisionOpen:!1,resources:{catalog:m("error",null,t),entry:null,scene:m("idle",null),pose:m("idle",null),history:m("idle",null),plans:m("idle",null),areas:m("idle",null)},manualRoomPreview:m("idle",null),map:{available:!1,complete:!1,floorCoherent:!1,sessionVerified:!1,exactPose:!1},selection:{...i.selection,entryId:e,entrySource:n.selection.entrySource,floorId:"current",historyId:null}})}async refreshCatalog(t=!1,e=!1,s=!1,n=null){if(this.#l||!this.#s.active||!this.#n?.host.administrator||!this.#n.host.connected||this.#n.host.robotCount===0||n&&(!this.#n.host.robotConnected||!this.#G(n)))return;if(this.#b)return t&&(this.#w?e&&(this.#p?this.#c&&=s:this.#c=s,this.#p=!0):(this.#p?this.#c&&=s:this.#c=s,this.#p=!0,this.#o.get("catalog")?.abort()),n&&(this.#p?this.#c&&=s:this.#c=s,this.#f=n,this.#p=!0)),this.#A;this.#b=!0,this.#w=t;let i;this.#A=new Promise(l=>{i=l});let o=this.#P("catalog");n&&(n.attempt.controller=o);let a=this.#e.value.resources.catalog.value;this.#e.patch({resources:{...this.#e.value.resources,catalog:m("loading",a)}});try{let l=await this.#i.catalog(o.signal);if(o.signal.aborted||this.#l||n&&!this.#G(n))return;let d=this.#n?.entryKey,c=d?l.find(v=>v.entryId===d)??null:l[0]??null,u=this.#e.value.resources.entry;if(c&&this.#d?.key===T(c)&&(this.#d.attempt!==null||this.#d.retryTimer!==null)&&(!n||!this.#G(n))){this.#e.patch({managedLock:Ke(c),resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:u}});return}let p=!!(c&&u&&T(c)===T(u)&&this.#J(u));if(c&&u&&F(c)===F(u)&&ue(c)===ue(u)&&he(c)===he(u)&&(p||c.mapRevision<u.mapRevision||!t&&this.#o.has("scene"))&&(c={...c,mapRevision:u.mapRevision}),this.#e.patch({managedLock:c?Ke(c):!1,resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:c}}),this.#n&&this.#M(this.#n),!c){this.#te("no-loaded-robot",this.#n?.entryKey??null);return}if(this.#e.value.selection.floorId!=="current"||this.#e.value.dataMode!=="live"){n&&this.#Z(c);return}let h=gt(c),f=this.#t.current(),g=!!(f&&u&&T(c)===T(u)&&c.mapFloorCoherent&&c.mapSessionVerified);if((!t||s)&&(h===this.#_||g)){let v=this.#e.value,_=c.mapFloorCoherent&&c.mapSessionVerified,S=c.health==="problem"||c.health==="limited";this.#e.patch({coherence:_?S?"degraded":"current":"verifying",map:{...v.map,available:v.resources.scene.value!==null,complete:c.mapComplete&&!c.mapTruncated,floorCoherent:c.mapFloorCoherent,sessionVerified:c.mapSessionVerified,exactPose:_?v.map.exactPose:!1},floor:{...v.floor,classifiedCount:Math.max(1,c.historyFloorCount)}}),_&&this.#e.value.resources.plans.problem==="map-rechecking"&&this.loadPlans(),this.#ye();let k=f;if(k&&g&&(c.mapRevision>k.revision||n!==null)&&(c.mapRevision>k.revision&&(k=this.#t.advance(k,c.mapRevision)),k)){this.#_=h,this.#T();let b=this.#e.value.resources;this.#e.patch({resources:{...b,scene:m("loading",b.scene.value)}}),this.#fe(c,k)}k&&!v.resources.scene.value&&!this.#o.has("history")&&this.#re(c,k),_&&k&&(v.resources.scene.status==="error"||v.floor.readOnly)&&!this.#o.has("scene")&&this.#fe(c,k);return}this.#_=h,this.#Me(c,u)}catch(l){if(z(l)||o.signal.aborted||this.#l)return;n&&this.#pe(n.state.key),this.#e.patch({coherence:this.#e.value.resources.scene.value?"degraded":"unavailable",resources:{...this.#e.value.resources,catalog:m("error",a,U(l,"catalog-unavailable"))}})}finally{this.#x("catalog",o),n?.attempt.controller===o&&(n.attempt.controller=null),this.#b=!1;let l=this.#p,d=this.#c,c=this.#f;this.#w=!1;try{l&&!this.#l&&(this.#p=!1,this.#c=!1,this.#f=null,await this.refreshCatalog(!0,!1,d,c))}finally{i()}}}#Me(t,e){this.#d!==null&&this.#d.key!==T(t)&&this.#q();let s=this.#e.value,n=!!(e&&F(e)===F(t)),i=t.mapFloorCoherent&&t.mapSessionVerified,o=s.draftMapSessionKey??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapSessionKey:null),a=s.draftFloorOrdinal??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapFloorOrdinal:null),l=i?t.mapFloorOrdinal:null,d=i?t.mapSessionKey:null,c=e!==null&&e.entryId!==t.entryId||a!==null&&l!==null&&a!==l||o!==null&&d!==null&&o!==d,u=n&&i&&a===t.mapFloorOrdinal&&o===t.mapSessionKey,p=["catalog"];n&&!c&&p.push("plans","areas"),u&&p.push("plan-mutation","area-mutation");let h=this.#t.begin(t.entryId,ue(t),he(t),t.mapRevision);this.#d?.key===T(t)&&this.#d.attempt&&(this.#d.attempt.generation=h.generation),this.#T(),this.#I(p);let f=e?.entryId===t.entryId?s.resources.scene.value:null,g=f!==null&&(s.floor.readOnly||!n||!i||e?.mapSessionKey!==t.mapSessionKey),v=s.resources.pose.value,_=n&&i&&t.mapSessionKey!==null&&v?.position&&v.mapSessionKey===t.mapSessionKey?v:null;c&&this.#ge();let S=K(),k=t.health==="problem"||t.health==="limited",b=this.#e.value;this.#e.patch({...c?{command:"idle",workflow:"none",dialog:null,precisionOpen:!1,fullMap:!1,draw:S.draw,planDraft:S.planDraft,areaDraft:S.areaDraft,notice:I.mapChanged}:{},draftFloorOrdinal:l??a,draftMapSessionKey:d??o,managedLock:Ke(t),generation:h.generation,coherence:i?k?"degraded":g?"verifying":"current":"verifying",dataMode:"live",resources:{...b.resources,entry:t,scene:m(i?"loading":"idle",f),pose:m(i?"loading":"idle",_),history:m("loading",b.resources.history.value),plans:n&&!c?b.resources.plans:m("idle",null),areas:n&&!c?b.resources.areas:m("idle",null)},map:{available:f!==null,complete:t.mapComplete&&!t.mapTruncated,floorCoherent:t.mapFloorCoherent,sessionVerified:t.mapSessionVerified,exactPose:i&&_!==null&&!g},floor:{classifiedCount:Math.max(1,t.historyFloorCount),displayName:g?s.floor.displayName:t.selectedFloorOrdinal?`Floor ${t.selectedFloorOrdinal}`:"Current floor",readOnly:g},selection:{...b.selection,entryId:t.entryId,floorId:"current",historyId:null,roomIds:c?[]:b.selection.roomIds,roomSettings:c?[]:b.selection.roomSettings,planId:c?null:b.selection.planId,areaId:c?null:b.selection.areaId}}),this.#re(t,h),i&&this.#e.value.resources.plans.status==="idle"&&this.loadPlans(),this.#ye(),i&&(this.#fe(t,h),this.#ve(t,h))}async#fe(t,e){if(!this.#s.active)return;let s=this.#P("scene");try{let n=await this.#i.scene(t.sceneUrl,t.mapRevision,t.mapFloorCoherent,"live",s.signal);if(!this.#t.accepts(e))return;if(!n.floorCoherent){let d=this.#e.value;this.#e.patch({coherence:"verifying",resources:{...d.resources,scene:m("error",d.resources.scene.value,"map-rechecking"),pose:m("idle",null)},map:{...d.map,available:d.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...d.floor,readOnly:d.resources.scene.value!==null}}),this.#Z(t);return}if(n.revision<e.revision||!n.scene)throw new A("scene-unavailable");let i=n.revision===e.revision?e:this.#t.advance(e,n.revision);if(!i)throw new A("scene-unavailable");let o=this.#e.value,a={...o.resources.entry??t,mapRevision:n.revision};this.#_=gt(a),this.#e.patch({coherence:a.health==="problem"||a.health==="limited"?"degraded":"current",resources:{...o.resources,entry:a,scene:m("ready",n.scene)},map:{...o.map,available:!0},floor:{...o.floor,readOnly:!1,displayName:o.resources.history.value?.floors.find(d=>d.active)?.label||(a.selectedFloorOrdinal?`Floor ${a.selectedFloorOrdinal}`:"Current floor")},notice:o.notice?.key==="v4_notice_saved_map"?null:o.notice});let l=this.#e.value.resources.plans;if((l.status==="idle"||l.problem==="map-rechecking")&&this.loadPlans(),this.#ye(),t.deltaUrl&&typeof DecompressionStream=="function"){let d=++this.#E;this.#Re(a,i,n.scene,d)}else this.#he("delta",a)}catch(n){if(z(n)||!this.#t.accepts(e))return;if(n instanceof A&&n.code==="request-timeout"){let l=this.#e.value;this.#e.patch({resources:{...l.resources,scene:m("loading",l.resources.scene.value,"scene-building")}}),window.setTimeout(()=>{this.#l||!this.#t.accepts(e)||this.#e.value.selection.floorId!=="current"||this.#fe(t,e)},250);return}this.#Z(t);let i=this.#e.value,o=i.resources.pose.value,a=i.resources.scene.value!==null&&t.mapSessionKey!==null&&o?.position!==null&&o?.mapSessionKey===t.mapSessionKey;this.#e.patch({coherence:"degraded",resources:{...i.resources,scene:m("error",i.resources.scene.value,U(n,"scene-unavailable"))},map:{...i.map,available:i.resources.scene.value!==null,exactPose:a}})}finally{this.#x("scene",s)}}async#Re(t,e,s,n){if(!t.deltaUrl||typeof DecompressionStream!="function")return;let i=t.deltaUrl,o={generation:n,stamp:e,entryId:t.entryId,coherenceIdentity:T(t),deltaUrl:i};if(n!==this.#E||!this.#t.accepts(e))return;this.#D=o;let a=t,l=e,d=s;try{for(;!this.#l&&this.#s.active&&n===this.#E&&this.#t.accepts(l)&&this.#e.value.selection.floorId==="current";){let c=this.#P("delta");try{let u=await this.#i.sceneDelta(i,d,a.mapFloorCoherent,c.signal);if(c.signal.aborted||this.#l||n!==this.#E||!this.#t.accepts(l))return;if(!u.floorCoherent){let f=this.#e.value;this.#e.patch({coherence:"verifying",map:{...f.map,available:f.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...f.floor,readOnly:f.resources.scene.value!==null},resources:{...f.resources,scene:m("error",f.resources.scene.value,"map-rechecking"),pose:m("idle",null)}}),this.#me("delta",a);return}if(u.notModified||!u.scene){this.#he("delta",a),await new Promise(f=>window.setTimeout(f,100));continue}let p=this.#t.advance(l,u.revision);if(!p)return;l=p,o.stamp=p,d=u.scene,a={...a,mapRevision:u.revision},this.#he("delta",a),this.#_=gt(a);let h=this.#e.value;this.#e.patch({resources:{...h.resources,entry:a,scene:m("ready",d)},map:{...h.map,available:!0,floorCoherent:!0}}),this.#ve(a,l)}finally{this.#x("delta",c)}}}catch(c){if(z(c)||this.#l||n!==this.#E||!this.#t.accepts(l))return;this.#me("delta",a)}finally{this.#D===o&&(this.#D=null)}}async#re(t,e){if(!this.#s.active)return;let s=this.#P("history");try{let n=await this.#i.history(t.historyUrl,s.signal),i=this.#t.current();if(s.signal.aborted||!i||!Ue(e,i)||n.entryId!==t.entryId)return;let o=this.#e.value,a=n.floors.find(c=>c.id===o.selection.floorId),l=!o.selection.historyId||a?.snapshots.some(c=>c.id===o.selection.historyId),d=o.dataMode==="live"?n.floors.find(c=>c.active):a;if(this.#e.patch({resources:{...this.#e.value.resources,history:m("ready",n)},floor:{...this.#e.value.floor,classifiedCount:n.floors.length,...d&&!(o.dataMode==="live"&&o.floor.readOnly)?{displayName:Ve(d,1)}:{}}}),o.dataMode==="live"&&!o.resources.scene.value){let c=n.floors.flatMap(u=>u.snapshots.map(p=>({floor:u,snapshot:p}))).sort((u,p)=>Date.parse(p.snapshot.createdAt)-Date.parse(u.snapshot.createdAt));for(let u of c){let p;try{p=await this.#i.scene(u.snapshot.sceneUrl,u.snapshot.revision,!0,"history",s.signal)}catch(g){if(z(g)||s.signal.aborted)return;continue}let h=this.#t.current();if(s.signal.aborted||!h||!Ue(e,h)||this.#e.value.resources.scene.value)return;if(!p.scene)continue;let f=this.#e.value;this.#e.patch({floor:{...f.floor,readOnly:!0,displayName:Ve(u.floor,1)},resources:{...f.resources,scene:m("ready",p.scene),pose:m("idle",null)},map:{...f.map,available:!0,exactPose:!1},notice:Cn(u.snapshot.createdAt)});break}}if(o.dataMode==="history"&&(!a||!l)){let c=a||n.floors.find(p=>p.active)||n.floors[0],u=this.selectFloor(c?.id||"current");!this.#l&&o.workflow==="history"&&this.#e.dispatch({type:"open-workflow",workflow:"history"}),await u}}catch(n){let i=this.#t.current();if(z(n)||s.signal.aborted||!i||!Ue(e,i))return;this.#e.patch({resources:{...this.#e.value.resources,history:m("error",null,U(n,"history-unavailable"))}})}finally{this.#x("history",s)}}async refreshPose(){let t=this.#e.value.resources.entry,e=this.#t.current();!t||!e||this.#e.value.selection.floorId!=="current"||!t.mapFloorCoherent||!t.mapSessionVerified||await this.#ve(t,e)}async#ve(t,e){if(this.#l||!this.#s.active||!this.#z||!this.#n?.host.connected)return;if(this.#$){this.#v=!0;return}this.#$=!0;let s=this.#P("pose");try{let n=await this.#i.pose(t.poseUrl,s.signal),i=this.#t.current(),o=this.#e.value.resources.entry;if(!i||!Ue(e,i)||!o||!this.#e.value.map.floorCoherent)return;if(!n.floorCoherent||n.mapSessionKey===null||n.mapSessionKey!==o.mapSessionKey){this.#e.patch({resources:{...this.#e.value.resources,pose:m("idle",null)},map:{...this.#e.value.map,exactPose:!1}}),this.#me("pose",o);return}this.#he("pose",o);let a=this.#e.value,l=a.resources.pose.value,d=!!(a.map.exactPose&&l?.position&&l.mapSessionKey===o.mapSessionKey);if(n.position===null&&d){this.#e.patch({resources:{...a.resources,pose:m("ready",l)}});return}this.#e.patch({resources:{...a.resources,pose:m("ready",n)},map:{...a.map,exactPose:n.position!==null}})}catch(n){if(z(n)||!this.#t.accepts(e))return;let i=this.#e.value,o=i.resources.pose.value,a=!!(i.map.exactPose&&o?.position&&o.mapSessionKey===i.resources.entry?.mapSessionKey);this.#e.patch({resources:{...i.resources,pose:m("error",a?o:null,U(n,"pose-unavailable"))},map:{...i.map,exactPose:a}})}finally{if(this.#x("pose",s),this.#$=!1,this.#v&&!this.#l&&this.#z&&this.#n?.host.connected&&this.#n.host.administrator&&this.#n.host.robotCount>0){this.#v=!1;let n=this.#e.value.resources.entry,i=this.#t.current();n&&i&&this.#ve(n,i)}else this.#v=!1}}async selectFloor(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;let n=e.floors.find(l=>l.id===t);if(!n&&t!=="current")return;let i=this.#e.value;if(i.workflow==="draw"&&(i.draw.dirty||i.areaDraft.dirty)||i.workflow==="areaReview"&&(i.draw.dirty||i.areaDraft.dirty))return;if(!n||n.active){this.#q(),this.#_="";let l=this.#e.value;this.#e.patch({resources:{...l.resources,plans:m("idle",null),areas:m("idle",null),scene:m("idle",l.resources.scene.value),pose:m("idle",null)},map:{...l.map,available:l.resources.scene.value!==null,exactPose:!1},coherence:"verifying",floor:{...l.floor,readOnly:l.resources.scene.value!==null},workflow:"none",precisionOpen:!1}),this.#e.dispatch({type:"set-floor",floorId:"current"}),await this.refreshCatalog(!0);return}this.#q();let o=n.snapshots.at(-1),a=this.#t.begin(s.entryId,n.id,o?.id||n.id,o?.revision||0);this.#I(["catalog"]),this.#e.patch({generation:a.generation,coherence:"current",dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ve(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:o?.id||null},resources:{...this.#e.value.resources,scene:m(o?"loading":"empty",null),pose:m("idle",null),plans:m("idle",null),areas:m("idle",null)},workflow:"none",precisionOpen:!1,map:{available:!1,complete:!0,floorCoherent:!0,sessionVerified:!0,exactPose:!1}}),o&&await this.#be(o,a)}async selectHistory(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;if(!t){await this.selectFloor("current");return}let n=e.floors.find(a=>a.snapshots.some(l=>l.id===t)),i=n?.snapshots.find(a=>a.id===t);if(!n||!i)return;this.#q();let o=this.#t.begin(s.entryId,n.id,i.id,i.revision);this.#I(["catalog"]),this.#e.patch({generation:o.generation,dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ve(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:i.id},resources:{...this.#e.value.resources,scene:m("loading",null),pose:m("idle",null)},map:{...this.#e.value.map,available:!1,exactPose:!1}}),await this.#be(i,o)}async#be(t,e){if(!this.#s.active)return;let s=this.#P("history-scene");try{let n=await this.#i.scene(t.sceneUrl,t.revision,!0,"history",s.signal);if(!this.#t.accepts(e)||!n.scene)return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("ready",n.scene)},map:{...this.#e.value.map,available:!0,exactPose:!1}})}catch(n){if(z(n)||!this.#t.accepts(e))return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("error",null,U(n,"history-scene-unavailable"))}})}finally{this.#x("history-scene",s)}}async openWorkflow(t){let e=this.#e.value;if((e.dataMode==="history"||e.floor.readOnly)&&Gs.includes(t))return;let s=this.#e.value.workflow;if(t==="draw"&&s!=="draw"&&s!=="areaReview"&&this.selectArea(null),this.#e.dispatch({type:"open-workflow",workflow:t}),Gs.includes(t)&&this.#Ee(),t==="history"){let n=this.#e.value.resources.entry,i=this.#t.current();n&&i&&(this.#e.patch({resources:{...this.#e.value.resources,history:m("loading",this.#e.value.resources.history.value)}}),await this.#re(n,i))}(t==="plans"||t==="plan"||t==="rooms")&&await this.loadPlans(),(t==="draw"||t==="areaReview")&&await this.loadAreas()}async loadPlans({force:t=!1,inPlace:e=!1,onError:s}={}){let n=!e||this.#e.value.resources.plans.status!=="ready";if(!this.#s.active){this.#o.get("plans")?.abort();let l=this.#e.value.resources;return n&&this.#e.patch({resources:{...l,plans:m("idle",l.plans.value)}}),null}let i=this.#e.value.resources.entry;if(!i||!this.#t.current()||!tt(this.#e.value)||!t&&this.#o.has("plans"))return null;let o=F(i),a=this.#P("plans");n&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("loading",this.#e.value.resources.plans.value)}});try{let l=await this.#i.plans(i.plansUrl,a.signal),d=this.#e.value.resources.entry;if(a.signal.aborted||this.#l||!d||F(d)!==o)return null;let c=this.#e.value;if(c.workflow==="plan"&&c.planDraft.id&&!c.planDraft.dirty&&!l.plans.some(h=>h.id===c.planDraft.id))return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)},workflow:"plans",precisionOpen:!1,selection:{...this.#e.value.selection,planId:null},planDraft:K().planDraft,notice:I.planRemoved}),l;if(c.planDraft.dirty||c.workflow==="plan"&&(!c.planDraft.id||c.command==="pending"))return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)}}),l;let u=c.workflow==="plan"?c.selection.planId:l.selectedPlan||l.plans[0]?.id||null,p=l.plans.find(h=>h.id===u);return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)},selection:{...this.#e.value.selection,planId:u},planDraft:p?Ze(p):{...this.#e.value.planDraft,id:null,name:"",rooms:[],parkedRooms:[],dirty:!1}}),l}catch(l){let d=this.#e.value.resources.entry;if(z(l)||a.signal.aborted||this.#l||!d||F(d)!==o)return null;let c=l instanceof A&&l.code==="map-rechecking"?"map-rechecking":U(l,"plans-unavailable");return n&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("error",this.#e.value.resources.plans.value,c)}}),s?.(),null}finally{this.#x("plans",a)}}selectPlan(t,e=!1,s){this.#e.patch(Ot(this.#e.value,t,e,s))}setPlanEnabled(t){return this.#se("plan-mutation",I.planSaveFailed,(e,s)=>e.setPlanEnabled(s,t))}#ye(){let t=this.#e.value;(t.workflow==="draw"||t.workflow==="areaReview")&&t.resources.areas.status==="idle"&&this.loadAreas()}async loadAreas({reconcileDraft:t=!0}={}){if(!this.#s.active){this.#o.get("areas")?.abort();let i=this.#e.value.resources;return this.#e.patch({resources:{...i,areas:m("idle",i.areas.value)}}),null}let e=this.#e.value.resources.entry;if(!e||!this.#t.current()||!tt(this.#e.value))return null;let s=F(e),n=this.#P("areas");this.#e.patch({resources:{...this.#e.value.resources,areas:m("loading",this.#e.value.resources.areas.value)}});try{let i=await this.#i.areas(e.areasUrl,n.signal),o=this.#e.value.resources.entry;if(n.signal.aborted||this.#l||!o||F(o)!==s)return null;if(i.sceneUrl!==o.sceneUrl)throw new A("areas-unavailable");this.#e.patch({resources:{...this.#e.value.resources,areas:m("ready",i)}});let a=this.#e.value.selection.areaId,l=this.#e.value,d=i.areas.some(c=>c.id===a);return t&&a!==null&&!d&&(l.draw.dirty||l.areaDraft.dirty)?this.#e.patch({selection:{...l.selection,areaId:null},areaDraft:{...l.areaDraft,id:null,status:"new",canRebind:!1,dirty:!0},notice:I.areaRemoved}):t&&!l.draw.dirty&&!l.areaDraft.dirty&&this.selectArea(d?a:null),i}catch(i){let o=this.#e.value.resources.entry;return z(i)||n.signal.aborted||this.#l||!o||F(o)!==s||this.#e.patch({resources:{...this.#e.value.resources,areas:m("error",this.#e.value.resources.areas.value,U(i,"areas-unavailable"))}}),null}finally{this.#x("areas",n)}}selectArea(t){let e=this.#e.value.resources.areas.value?.areas.find(n=>n.id===t),s=this.#e.value;this.#e.patch({selection:{...s.selection,areaId:t},areaDraft:e?this.#Pe(e):{id:null,name:"",cleaningMode:"vacuum",coverageSetting:"standard",status:"new",canRebind:!1,dirty:!1},draw:{...s.draw,circles:e?.circles||[],outline:e?.outline??null,outlineUndo:[],outlineRedo:[],tool:!e||e.outline?"outline":"paint",undo:[],redo:[],dirty:!1,strokeCount:0}})}#Pe(t){return{id:t.id,name:t.name,cleaningMode:t.cleaningMode,coverageSetting:t.coverageSetting,status:t.status,canRebind:t.canRebind,dirty:!1}}saveArea(t){return this.#se("area-mutation",I.areaSaveFailed,(e,s)=>e.saveArea(s),t)}deleteArea(){return this.#se("area-mutation",I.areaDeleteFailed,(t,e)=>t.deleteArea(e))}savePlan(t){return this.#se("plan-mutation",I.planSaveFailed,(e,s)=>e.savePlan(s),t)}deletePlan(){return this.#se("plan-mutation",I.planDeleteFailed,(t,e)=>t.deletePlan(e))}#Ee(){return this.#ce??=import("./catalog-writes-D44AUTSA.js").catch(()=>null)}async#se(t,e,s,n){let i=n,o=d=>{let c=i;i=void 0,c?.(d)},a=this.#e.value;if(a.command==="pending"||this.#o.has(t))return o(!1);let l=this.#P(t);l.signal.addEventListener("abort",()=>o(!1),{once:!0});try{let d=await this.#Ee(),c=this.#e.value;if(l.signal.aborted||!et(c)||c.command==="pending")return;if(!d){this.#e.patch({notice:e});return}await s(d,{state:a,signal:l.signal,store:this.#e,backend:this.#i,effects:this,helpers:En,failure:e,projection:()=>this.#n,disposed:()=>this.#l,release:()=>this.#x(t,l),settled:o})}finally{this.#x(t,l),o(!1)}}async executeAction(t,e){switch(typeof t=="string"?t:t.id){case"recheck-status":{if(this.#e.value.rechecking)return;let n=this.#e.value.selection.entryId;this.#e.patch({rechecking:!0});try{await this.refreshCatalog(!0)}finally{this.#l||this.#e.patch({rechecking:!1})}let i=this.#e.value;!this.#l&&i.selection.entryId===n&&i.resources.catalog.status==="ready"&&i.host.connected&&i.host.robotConnected&&i.coherence==="current"&&i.command==="failed"&&this.#e.patch({command:"idle",notice:I.statusRefreshed});return}case"stop":await this.#ae("matic_robot","stop_intelligent_cleaning",{include_unmanaged:!0});return;case"resume":await this.#ae("vacuum","send_command",{command:"resume"});return;case"run-plan":{let n=this.#e.value,i=n.selection.planId||n.resources.plans.value?.selectedPlan;if(!i||n.workflow!=="plan"||!n.planDraft.enabled||n.resources.plans.status!=="ready"||n.command!=="idle"||!Se(n))return;let o=n.selection.entryId,a=n.generation,l=n.selection.planId,d=n.planDraft,c=n.resources.plans.value?.plans.find(v=>v.id===i)?.nextRunPreview;if(!c||!/^[0-9a-f]{64}$/u.test(c.previewToken??"")){this.#e.patch({notice:I.planPreviewMissing});return}this.#e.patch({command:"pending",pendingAction:"run-plan",notice:null});let u=this.#P("plan-preflight"),p;try{p=await this.loadPlans({force:!0,inPlace:!0})}finally{this.#x("plan-preflight",u)}let h=this.#e.value,f=()=>{let v=this.#e.value;!this.#l&&v.selection.entryId===o&&v.generation===a&&v.command==="pending"&&this.#e.patch({command:"idle"})};if(u.signal.aborted||this.#l||h.selection.entryId!==o||h.generation!==a||h.workflow!=="plan"||h.selection.planId!==l||(h.selection.planId||h.resources.plans.value?.selectedPlan)!==i||h.planDraft!==d){f();return}if(!p){f(),this.#e.patch({notice:I.planPreviewRefreshFailed});return}let g=p.plans.find(v=>v.id===i)?.nextRunPreview;if(!g||g.blocker||!/^[0-9a-f]{64}$/u.test(g.previewToken??"")){f(),this.#e.patch({notice:I.planPreviewNone});return}if(!c||JSON.stringify(c)!==JSON.stringify(g)){f(),this.#e.patch({notice:I.planPreviewChanged});return}f(),await this.#ae("matic_robot","run_selected_plan",{plan:i,preview_token:g.previewToken});return}case"clean-rooms":{await this.#Ae();return}case"run-area":{let n=this.#e.value.selection.areaId;n&&await this.#ae("matic_robot","clean_area",{area:n});return}case"review-area":this.#e.dispatch({type:"open-workflow",workflow:"areaReview"});return;case"save-area":await this.saveArea(e);return;case"save-plan":this.#e.value.planDraft.id&&!this.#e.value.planDraft.dirty?(this.#e.dispatch({type:"set-plan-view",view:"run"}),e?.(!0)):await this.savePlan(e);return;case"delete-plan":await this.deletePlan();return;case"delete-area":await this.deleteArea();return;case"reset-room-cadence":if(typeof t=="string")return;await this.#se("plan-mutation",t.mode==="mop"?I.resetMopFailed:I.resetVacuumFailed,(n,i)=>n.resetRoomCadence(i,t));return}}async#Ae(){if(this.#Y)return;let t=this.#e.value,e=this.#X(t),s=Je(t);if(!e||!s||s.key!==e.key||s.generation!==e.generation||s.floorKey!==e.floorKey||s.missionKey!==e.missionKey||s.preview.entryId!==e.entryId||s.preview.blocker||s.preview.rooms.length===0)return;this.#Y=!0;let n=this.#P("room-preview");this.#K=this.#U(e),this.#e.patch({manualRoomPreview:m("loading",null),notice:null});try{let i=await this.#i.previewRoomSequence(e.entityId,e.rooms,e.overrideRoomSchedule,n.signal);if(n.signal.aborted||!this.#V(e)||i.entryId!==e.entryId)return;let o={key:e.key,generation:e.generation,floorKey:e.floorKey,missionKey:e.missionKey,preview:i};if(i.blocker||i.rooms.length===0){this.#e.patch({manualRoomPreview:m("ready",o),notice:I.roomPreviewBlocked});return}if(Js(s.preview)!==Js(i)){this.#e.patch({manualRoomPreview:m("ready",o),notice:I.roomPreviewChanged});return}if(this.#e.patch({manualRoomPreview:m("ready",o),notice:null}),!this.#V(e)||!Se(this.#e.value))return;await this.#ae("matic_robot","clean_room_sequence",{rooms:e.rooms,use_room_schedule:!0,override_room_schedule:e.overrideRoomSchedule,return_to_base:!0,preview_token:i.previewToken})}catch(i){!z(i)&&!n.signal.aborted&&this.#V(e)&&this.#e.patch({manualRoomPreview:m("error",null,U(i,"preview-unavailable")),notice:I.roomPreviewFailed})}finally{this.#x("room-preview",n),this.#Y=!1,this.#ne()}}async#ae(t,e,s){let n=this.#e.value,i=this.#n?.vacuumEntityId,o=e==="stop_intelligent_cleaning"||t==="vacuum"&&e==="return_to_base",a=t==="vacuum"&&e==="send_command"&&s.command==="resume";if(!i||n.selection.entryId!==this.#n?.entryKey||(o?!zt(n):a?!qt(n):!Se(n)))return;let l=++this.#k,d=this.#n?.entryKey,c=()=>!this.#l&&l===this.#k&&d===this.#n?.entryKey,u=o?"settling":"starting";this.#h!==null&&window.clearTimeout(this.#h),this.#h=null,this.#e.patch({command:u,notice:null});try{if(await this.#i.service(t,e,s,i),!c())return;if(t==="matic_robot"&&(e==="clean_room_sequence"||e==="run_selected_plan")){this.#e.patch({command:"idle"}),this.refreshCatalog(!0);return}this.#e.patch({command:u}),this.#h!==null&&window.clearTimeout(this.#h),this.#h=window.setTimeout(()=>{this.#h=null,c()&&this.#e.value.command===u&&this.#e.patch({command:"idle"})},15e3)}catch(p){if(!c())return;this.#e.patch({command:"failed",notice:o?I.stopUnconfirmed:Mn(p)??I.actionUnconfirmed})}}dispose(){this.#l||(this.#l=!0,this.#s.dispose(),this.#W(!1),this.#N?.(),this.#N=null,this.#e.patch({manualRoomPreview:m("idle",null),rechecking:!1}),this.#j(),this.#I(),this.#h!==null&&window.clearTimeout(this.#h),this.#h=null,this.#a.dispose(),this.#we(),this.#i.dispose())}#we(){this.#R?.dispose(),this.#R=null,this.#C=null,this.#g=null}};var Tn=r=>r.workflow==="none"?0:r.workflow!=="plan"?1:r.planView==="edit"&&r.planDraft.id!==null?3:2,bt=r=>Tn(r)+(r.fullMap?1:0)+(r.precisionOpen?1:0)+(r.dialog?1:0),Ye=r=>{if(!r||typeof r!="object")return null;let t=r.maticMapLayer;if(!t||typeof t!="object")return null;let e=t.owner,s=t.depth;return typeof e=="string"&&Number.isInteger(s)&&Number(s)>=0?{owner:e,depth:Number(s)}:null},Xe=class{#e;#t=`matic-map-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}`;#i=0;#s=0;#a=!1;#r=null;#o=!1;constructor(t){this.#e=t}start(){if(this.#r)return;this.#i=bt(this.#e.value);let t=Ye(history.state);this.#s=t?.owner===this.#t?t.depth:0,this.#r=this.#e.subscribe(e=>this.#n(e)),window.addEventListener("popstate",this.#u)}#n(t){let e=bt(t);if(this.#o){this.#o=!1,this.#i=e;return}if(e<this.#i&&Ye(history.state)?.owner===this.#t&&this.#s>e){let n=e-this.#s;this.#i=e,this.#s=e,this.#a||(history.go(n),this.#a=!0);return}if(e>this.#s)for(let s=this.#s+1;s<=e;s+=1){let n=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...n,maticMapLayer:{owner:this.#t,depth:s}},"",window.location.href),this.#s=s}this.#i=e}#u=()=>{let t=Ye(history.state);this.#a=!1,this.#s=t?.owner===this.#t?t.depth:0;let e=bt(this.#e.value);if(this.#s>e){let s=e-this.#s;this.#s=e,history.go(s),this.#a=!0;return}if(this.#e.value.dialog==="discardDraft"&&this.#e.value.command==="pending"){let s=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...s,maticMapLayer:{owner:this.#t,depth:this.#i}},"",window.location.href),this.#s=this.#i;return}if(!(e<=this.#s)){if(ie(this.#e.value,{type:"dismiss-top-layer"})){let s=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...s,maticMapLayer:{owner:this.#t,depth:this.#i}},"",window.location.href),this.#s=this.#i,this.#e.dispatch({type:"open-dialog",dialog:"discardDraft"});return}this.#o=!0,this.#e.dispatch({type:"dismiss-top-layer"})}};dismissTop(){return this.#i<1?!1:this.#a?(this.#e.dispatch({type:"dismiss-top-layer"}),!0):(Ye(history.state)?.owner===this.#t&&this.#s===this.#i?(history.back(),this.#s=this.#i-1,this.#a=!0):this.#e.dispatch({type:"dismiss-top-layer"}),!0)}dispose(){this.#r?.(),this.#r=null,window.removeEventListener("popstate",this.#u),this.#i=0,this.#s=0,this.#a=!1}};var wt=[Me,Pe,is,Ee`
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
  `];var Zs=oe(Ae),Ge=oe(Ft),en=oe(st),xn=r=>r.dataMode==="history"||r.floor.readOnly,kt=(r,t)=>{let e=(a,l,d)=>Ie(t,a,l,d);if(!r.host.connected)return{title:e("v4_reconnecting","Reconnecting"),detail:e("v4_ha_offline","Home Assistant is offline"),icon:j,notable:!0};if(!r.host.administrator)return{title:e("v4_access_required","Access required"),detail:e("v4_admin_only","Administrator only"),icon:j,notable:!0};if(r.host.robotCount===0)return{title:e("v4_no_robot_short","No robot"),detail:e("v4_set_up_robot","Set up a robot"),icon:j,notable:!0};if(_e(r))return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),detail:e("v4_choose_another_robot","Choose another robot to open its map."),icon:j,notable:!0};if(!r.host.robotConnected)return{title:e("v4_robot_offline","Robot offline"),detail:e("v4_last_map_read_only","Last known map \xB7 read only"),icon:j,notable:!0};if(r.activity==="problem")return{title:e("v4_needs_attention","Needs attention"),detail:e("v4_check_robot","Check the robot"),icon:j,notable:!0};if(r.dataMode==="history"){let a=r.resources.history.value?.floors.find(c=>c.id===r.selection.floorId),l=a?.snapshots.findIndex(c=>c.id===r.selection.historyId)??-1,d=a?.snapshots.length??0;return{title:e("v4_saved_map","Saved map"),detail:l>=0?e("v4_read_only_position","Read only \xB7 {position} of {count}",{position:l+1,count:d}):e("v4_read_only","Read only"),icon:at,notable:!1}}if(r.coherence==="verifying"||r.coherence==="booting")return{title:e("v4_locating","Locating"),detail:e("v4_finding_map","Finding the current map"),icon:le,notable:!0};if((r.resources.entry?.activePlan||r.resources.entry?.runnerLocked)&&(r.activity==="idle"||r.activity==="docked"))return{title:e("v4_task_in_progress","Run in progress"),detail:r.coherence==="unavailable"||r.coherence==="blocked"?e("v4_task_map_unavailable","The live map is unavailable; the current clean continues."):r.activity==="docked"?e("v4_task_docked","Robot docked; the clean has not finished."):e("v4_task_waiting","Waiting for the clean to continue or finish."),icon:xe,notable:!0};if(r.command==="starting"&&(r.activity==="idle"||r.activity==="docked"))return{title:e("v4_action_starting","Starting"),detail:e("v4_action_starting_detail","Waiting for the robot to begin"),icon:le,notable:!0};let s=r.coherence==="unavailable"||r.coherence==="blocked",n=e("v4_active_map_unavailable","The live map is unavailable; new cleaning is disabled."),i=a=>s?`${a} \xB7 ${n}`:a;if(r.activity==="cleaning")return{title:e("v4_cleaning","Cleaning"),detail:i(e("v4_cleaning_progress","Cleaning in progress")),icon:ct,notable:!0};if(r.activity==="recharging"){let a=r.batteryPercent===null?e("v4_recharging_detail","Will resume automatically when ready"):e("v4_battery","{percent}% battery",{percent:r.batteryPercent});return{title:e("v4_recharging","Charging to resume"),detail:i(a),icon:us,notable:!0}}if(r.activity==="paused")return{title:e("v4_paused","Paused"),detail:i(e("v4_can_resume","Cleaning can resume")),icon:dt,notable:!0};if(r.activity==="returning")return{title:e("v4_returning","Returning"),detail:i(e("v4_going_dock","Going to the dock")),icon:ct,notable:!0};if(r.activity==="stopping")return{title:e("v4_stopping","Stopping"),detail:i(e("v4_waiting_robot","Waiting for the robot")),icon:dt,notable:!0};if(s)return{title:e("v4_map_unavailable","Map unavailable"),detail:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start."),icon:j,notable:!0};if(r.coherence==="degraded")return{title:e("v4_map_limited","Map limited"),detail:r.rechecking?e("v4_locating_rechecking","Checking again"):e("v4_cleaning_blocked","Cleaning can't start"),icon:le,notable:!0,recheck:!0};let o=r.batteryPercent===null?e("v4_ready","Ready"):e("v4_battery","{percent}% battery",{percent:r.batteryPercent});return{title:r.activity==="docked"?e("v4_docked","Docked"):e("v4_ready","Ready"),detail:o,icon:le,notable:!1}},_t=r=>r.resources.plans.status==="ready"?r.resources.plans.value:null,nn=r=>{let{host:t}=r;return t.connected?t.administrator?t.robotCount===0?"setup":_e(r)?"robot-unavailable":t.robotConnected?xn(r)?"read-only":r.activity==="problem"?"problem":Re(r)&&r.activity!=="paused"||r.activity==="stopping"||r.command==="settling"||r.resources.entry?.stopSettlePending===!0?"busy":r.activity==="paused"?"paused":r.coherence==="unavailable"||r.coherence==="blocked"?"map-unavailable":r.coherence==="degraded"?"map-limited":r.coherence==="verifying"||r.coherence==="booting"?"locating":"ready":"offline":"administrator":"reconnecting"},In=(r,t,e)=>{switch(r){case"ready":return{title:e("v4_what_to_clean","Choose what to clean"),description:""};case"locating":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_reason_locating","Waiting for the robot to confirm which floor it is on.")};case"busy":return{title:e("v4_home_busy_title","The robot is busy"),description:e("v4_home_busy_detail","You can start a new clean when it's done.")};case"paused":return{title:e("v4_home_busy_title","The robot is busy"),description:e("v4_home_paused_detail","Resume or stop this clean before starting a new one.")};case"problem":return{title:e("v4_attention_title","The robot needs attention"),description:e("v4_attention_body","The robot reported a problem. Check it in the Matic app, then start a new clean.")};case"map-unavailable":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start.")};case"map-limited":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_map_limited_body","Home Assistant can show this map but can't confirm it well enough to start cleaning.")};case"offline":return{title:e("v4_robot_offline_title","Robot offline"),description:e("v4_robot_offline_body","Showing the last known map. Cleaning comes back when the robot reconnects.")};case"reconnecting":return{title:e("v4_reconnecting_title","Reconnecting to Home Assistant"),description:e("v4_reconnecting_body","Cleaning controls come back when Home Assistant reconnects.")};case"administrator":return{title:e("v4_admin_title","Administrator access required"),description:e("v4_admin_body","Ask a Home Assistant administrator to open this map.")};case"robot-unavailable":return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),description:e("v4_choose_another_robot","Choose another robot to open its map.")};case"read-only":return{title:e("v4_saved_map_read_only_title","Saved map is read only"),description:t.dataMode==="live"?e("v4_map_recovery_automatic","Cleaning controls return automatically when the live map is ready."):e("v4_saved_map_read_only_detail","Return to the live map to choose rooms, run a plan, or draw a custom area.")};case"setup":return{title:e("v4_setup_title","Set up your robot"),description:e("v4_no_robot_body","Add the Matic (Unofficial) integration to see a map here.")}}},St=(r,t)=>{let e=(s,n)=>Ie(t,s,n);switch(r.workflow){case"rooms":return{title:e("v4_choose_rooms","Choose rooms"),description:""};case"draw":return{title:e("v4_draw_area","Draw an area"),description:e("v4_draw_area_detail","Outline or paint the area, then review it before saving.")};case"plans":return{title:e("v4_your_plans","Your plans"),description:r.resources.plans.value?.plans.length===0?"":e("v4_choose_plan_detail","Tap a plan to see its next run.")};case"plan":return{title:r.planView==="run"?r.planDraft.name:r.planDraft.id?e("v4_edit_plan","Edit plan"):e("v4_new_plan","New plan"),description:""};case"areaReview":return{title:e("v4_name_this_area","Name this area"),description:e("area_details_hint","Name the area and choose cleaning settings.")};case"history":return{title:e("v4_map_history","Map history"),description:e("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")};case"support":return{title:e("v4_map_diagnostics","Map diagnostics"),description:e("v4_map_support_detail","Details to share with support")};case"none":return In(nn(r),r,e)}},X=["peek","half","full"],$n={info:lt,success:ms,warning:ut,error:fs},On={info:6e3,success:4e3,warning:6e3,error:1e4},Dn={none:"half",rooms:"half",draw:"peek",plan:"half",plans:"half",areaReview:"half",history:"half",support:"full"},tn=r=>r.workflow==="plan"&&r.planView==="edit"?"full":Dn[r.workflow],Ln=.5,Wn=100,qn=6,zn=48,Rt=".panel-top, .sheet-body, .workflow-body",Nn=["a[href]","button","input","label","select","textarea","summary",'[contenteditable]:not([contenteditable="false"])','[role="button"]','[role="link"]','[role="slider"]','[role="checkbox"]','[role="radio"]','[role="switch"]','[role="tab"]','[role="menuitem"]',`[tabindex]:not([tabindex="-1"]):not(${Rt})`].join(","),on=["button:not(:disabled)","a[href]","input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)","[tabindex]:not([tabindex='-1'])"].join(", "),rn=r=>!!r.querySelector(on)||[...r.querySelectorAll("*")].some(t=>t.shadowRoot!==null&&rn(t.shadowRoot)),sn=(r=document)=>{let t=r.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t},Qe=r=>!!(r&&r.isConnected&&r.offsetParent!==null),Et=class extends Ce{constructor(){super();this.state=K();this._measuredNarrow=!1;this._sheetOffset=0;this._browserFullscreen=!1;this._sheetDetent="half";this._polite="";this._alert="";this.#t=null;this.#i=new Set;this._toast=null;this.#s=new $e(this,()=>this.#R());this.#a=new $e(this,async()=>new(await import("./outline-editor-AJWEYHOK.js")).OutlineEditor({edgeDistance:Ut,validOutline:Vt}));this.#r=new $e(this,async()=>new(await this.#R()).MapOptions(this));this.#o=!1;this.#n=ys();this.#y=0;this.#h=0;this.#k=!1;this.#b=!1;this.#w=null;this.#p=null;this.#c=null;this.#f=null;this.#A=null;this.#$=null;this.#v=null;this.#_=null;this.#d=null;this.#E=null;this.#D=null;this.#L=new Set;this.#l=null;this.#z=!1;this.#C=null;this.#g=null;this.#K=()=>{this._browserFullscreen=this.#Y()};this.#S=()=>{this.#de(),this.#k=!1,this.#b=!1,this._toast=null};this.#H=e=>{e.type==="pointerenter"?this.#k=!0:this.#b=!0,this.#u!==void 0&&(this.#de(),this.#h=Math.max(0,this.#y-Date.now()))};this.#X=e=>{e.type==="pointerleave"?this.#k=!1:e.currentTarget.contains(e.relatedTarget)||(this.#b=!1),this.#B()};this.#U=()=>{this.#S(),this.updateComplete.then(()=>this.#M())};this.#V=()=>{this.#m({type:"set-notice",notice:null}),this.updateComplete.then(()=>this.#M())};this.#ue=()=>{for(let e of this.renderRoot.querySelectorAll(Rt)){let s=e.scrollHeight>e.clientHeight&&!rn(e);if(!s&&e.matches(":focus")){e.addEventListener("blur",this.#ue,{once:!0});continue}let n=(i,o)=>s?e.setAttribute(i,o):e.removeAttribute(i);n("tabindex","0"),e.classList.contains("panel-top")&&(n("role","group"),n("aria-labelledby","workspace-title"))}};this.#ie=e=>{if(!ie(this.state,{type:"open-workflow",workflow:"none"})){Oe(this.state.workflow);return}this.#v=e.currentTarget,this.#d="reload",this.#m({type:"open-dialog",dialog:"discardDraft"})};this.#se=e=>{let s=this.#r.value;if(s){s.menu.toggle();return}if(this.#r.status==="failed"){this.#ie(e);return}this.#o=!0,this.#r.request()};this.#Ae=()=>{this.#T("support")};this.#ae=()=>{let e=this.renderRoot.querySelector(".app");this.#N()?document.exitFullscreen():e?.requestFullscreen()};this.#We=e=>{let s=e.detail,n=this.state;n.workflow!=="rooms"||s?.type!=="toggle-room"||setTimeout(()=>{let i=this.#s.value?.roomTapAnnouncement(this.#le,n,this.state,s.roomId);i&&this.#O("_polite",i)})};this.#le=(e,s,n)=>this.#e(e,s,n);new bs(this,{container:()=>this.renderRoot?.querySelector(".draw-tools")??null,items:"button"})}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_measuredNarrow:{state:!0},_sheetOffset:{state:!0},_browserFullscreen:{state:!0},_sheetDetent:{state:!0},_polite:{state:!0},_alert:{state:!0},_toast:{state:!0}}}static{this.styles=wt}#e(e,s,n){return Ie(this.localize,e,s,n,this.dates)}#t;#i;#s;#a;#r;#o;#n;#u;#y;#h;#k;#b;#w;#p;#c;#f;#A;#$;#v;#_;#d;#E;#D;#L;#l;#z;async#R(){let e=await import("./workflow-panel-U4ESU65Z.js");return this.#z||(this.#z=!0,Ht(this.renderRoot,[...wt,e.shellWorkflowStyles,e.formControls])),e}#C;#g;#N(){let e=this.renderRoot;return e instanceof ShadowRoot?e.fullscreenElement??document.fullscreenElement:document.fullscreenElement}#K;#Y(){let e=this.renderRoot,s=e.querySelector(".app"),n=e instanceof ShadowRoot?e.fullscreenElement:null;if(n)return n===s;let i=document.fullscreenElement;for(let o=this;o;){if(o===i)return!0;let a=o.getRootNode();o=a instanceof ShadowRoot?a.host:null}return!1}connectedCallback(){super.connectedCallback(),this.#p=new ResizeObserver(([e])=>{if(!e)return;let s=e.contentRect.width<1024||e.contentRect.height<480;s!==this._measuredNarrow&&(this._measuredNarrow=s)}),this.#p.observe(this),document.addEventListener("fullscreenchange",this.#K),this.#c=new ResizeObserver(([e])=>{if(!e)return;let s=Math.ceil(e.target.getBoundingClientRect().height);s!==this._sheetOffset&&(this._sheetOffset=s)}),this.#f=new ResizeObserver(()=>this.#ue()),this.#ce(),this.#A=Ss(()=>this.#ce())}#ce(){let e=window.matchMedia("(forced-colors: active)").matches,s=ks(this.renderRoot,{accent:"var(--ms-accent)",danger:"var(--ms-danger)",label:"var(--ms-on-accent)",card:"var(--ms-surface-card)",sunken:"var(--ms-surface-sunken)"}),[n,i,o,a,l]=Object.values(s).map(_s),d=v=>e||!v||!o?[]:Rs(v,o),c=(v,_,S=a)=>e||!v||!a||!S?void 0:Es(v,_,[a,S]),u=v=>v?ws(v,1):"",[p,h]=d(n),[f,g]=d(i);this.style.setProperty("--ms-resolved-accent-fill",u(p)),this.style.setProperty("--ms-resolved-on-accent-fill",u(h)),this.style.setProperty("--ms-resolved-danger-fill",u(f)),this.style.setProperty("--ms-resolved-on-danger-fill",u(g)),this.style.setProperty("--ms-resolved-indicator",u(c(n,3,l))),this.style.setProperty("--ms-resolved-danger-text",u(c(i,4.5)))}disconnectedCallback(){this.#S(),this.#p?.disconnect(),this.#p=null,this.#c?.disconnect(),this.#c=null,this.#f?.disconnect(),this.#f=null,this.#A?.(),this.#A=null,this.#$=null,document.removeEventListener("fullscreenchange",this.#K),super.disconnectedCallback()}#O(e,s){if(this.#i.has(e)){this.updateComplete.then(()=>this.#O(e,s));return}this.#i.add(e);let n=this[e]===s;this[e]=n?"":s,this.updateComplete.then(()=>{this.#i.delete(e),n&&!this[e]&&this.#O(e,s)})}willUpdate(e){if(this.#w=this.shadowRoot?.activeElement??null,!e.has("state"))return;let s=kt(this.state).title;this.#t!==null&&s!==this.#t&&this.#O("_polite",kt(this.state,this.localize).title),this.#t=s;let n=this.state.notice,i=e.get("state");n!==i?.notice&&(!n&&i?.notice?.tone==="success"&&i.workflow!==this.state.workflow||(this.#S(),n&&(this._toast=n,this.#h=On[n.tone],this.#O(n.tone==="error"?"_alert":"_polite",this.#e(n.key,n.fallback,n.placeholders)),this.updateComplete.then(()=>{if(this.state.notice!==n)return;let o=this.renderRoot.querySelector("[data-notice-toast]");this.#k=!!o?.matches(":hover"),this.#b=!!o?.contains(this.shadowRoot?.activeElement??null),this.#B()}))))}#B(){!this._toast||this.#u!==void 0||this.#k||this.#b||(this.#y=Date.now()+this.#h,this.#u=setTimeout(this.#S,this.#h))}#de(){clearTimeout(this.#u),this.#u=void 0}#S;#H;#X;#U;#V;#ne(e,s,n){return w`${D($n[e.tone])}<span class="notice-text">${this.#e(e.key,e.fallback,e.placeholders)}</span><button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${n}
      @click=${s}
    >${D(hs)}</button>`}updated(e){let s=this.renderRoot.querySelector(".mobile-sheet.instant");s&&(getComputedStyle(s).blockSize,s.classList.remove("instant"));let n=this.#w;this.#w=null,n&&(!n.isConnected||n.closest("[hidden]"))&&this.#M();let i=this.renderRoot.querySelector(".mobile-sheet");i!==this.#$&&(this.#c?.disconnect(),this.#$=i,i?this.#c?.observe(i):this._sheetOffset!==0&&(this._sheetOffset=0)),this.#f?.disconnect();for(let o of this.renderRoot.querySelectorAll(Rt))for(let a of[o,...o.children])this.#f?.observe(a);if(this.#o&&this.#r.status!=="loading"&&(this.#o=!1,this.#r.value?.menu.toggle()),e.has("state")){this.#_e();let o=e.get("state");if(o?.precisionOpen&&!this.state.precisionOpen&&this.#Q()?.focus(),o?.fullMap&&!this.state.fullMap){let a=this.#_;this.#_=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??this.renderRoot.querySelector(".nav--menu")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})})}if(o&&!o.fullMap&&this.state.fullMap&&this.updateComplete.then(()=>{let a=this.#_;requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})}),!o?.dialog&&this.state.dialog){this.#D=null,this.state.dialog==="discardDraft"&&!this.#d&&o&&(o.workflow==="plan"?this.#d=o.planDraft.id!==null&&o.planView==="edit"?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"}:this.#d={type:"dismiss-top-layer"});let a=sn(this.shadowRoot||document);a?.hasAttribute("data-dialog-launcher")&&(this.#v=a),this.updateComplete.then(()=>{(this.renderRoot.querySelector(".dialog [data-dialog-initial-focus]")??this.renderRoot.querySelector(".dialog button"))?.focus()})}else if(o?.dialog&&!this.state.dialog){if(o.dialog==="discardDraft"){this.#E||(this.#d=null),this.#me();let l=this.#D;this.#D=null,this.#Z(l)}let a=this.#xe(o);this.#v=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{let l=sn(document),d=l;for(;d&&d!==this;){let u=d.getRootNode();d=u instanceof ShadowRoot?u.host:null}if(l&&l!==document.body&&d!==this)return;a?.focus({preventScroll:!0});let c=!document.activeElement||document.activeElement===document.body;!this.shadowRoot?.activeElement&&c&&this.#M()})})}if(!o)this._sheetDetent=tn(this.state);else if(o.workflow!==this.state.workflow||o.planView!==this.state.planView){let a=tn(this.state);a!==this._sheetDetent&&(this.#I()?.classList.add("instant"),this._sheetDetent=a);let l=this.state;this.updateComplete.then(()=>{if(l.workflow==="none")return this.#Fe();if(o.workflow!=="plan")return this.#M();requestAnimationFrame(()=>{this.#s.value?.focusPlanTarget(o,l,this.renderRoot,Qe)||this.#M()})})}}}#ue;#M(){[".panel-heading h2",".action-bar .ms-btn--primary",".workspace-toggle"].map(e=>this.renderRoot.querySelector(e)).find(Qe)?.focus({preventScroll:!0})}#Q(){let e=this.renderRoot.querySelector(".draw-brush");return Qe(e)?e:this.renderRoot.querySelector(Ae)?.shadowRoot?.querySelector(".draw-brush")??null}#m(e){if(ie(this.state,e)){this.#d=e,this.#m({type:"open-dialog",dialog:"discardDraft"});return}this.#W(e)}#W(e){this.dispatchEvent(new CustomEvent(Cs,{detail:e,bubbles:!0,composed:!0}))}#F(e){if(e.enabled){if(e.id==="return-live"){this.#m({type:"set-history",historyId:null});return}if(e.id==="clear-draft"){this.#m({type:"clear-draft"});return}this.#ee(e.id)}}#T(e,s){this.#l=null,this.#J({type:"open-workflow",workflow:e},s)}#J(e,s){s instanceof HTMLElement&&ie(this.state,e)&&(this.#v=s),this.#m(e)}#_e(){let e=this.#n,{coherence:s,workflow:n}=this.state;!e||n==="none"&&(s==="booting"||s==="verifying")||(this.#n=null,n==="none"&&this.#L.has(e)&&this.#T(e))}#ie;#j(e){if(this.#s.request(),e!=="draw")return this.#s.status;this.#a.request();let s=this.#s.status,n=this.#a.status;return s==="failed"||n==="failed"?"failed":s===n?s:"loading"}#q(){let e=this.#d;if(this.#d=null,e==="reload"){Oe(this.state.workflow);return}e?.type==="select-plan"||e?.type==="select-area"?(this.#m({type:"patch-plan-draft",patch:{dirty:!1}}),this.#m({type:"patch-area-draft",patch:{dirty:!1}}),this.#m({type:"dismiss-top-layer"})):this.#m({type:"discard-draft"}),e&&e.type!=="dismiss-top-layer"&&queueMicrotask(()=>this.#W(e))}#he(e,s){setTimeout(()=>{if(this.#E!==e)return;this.#E=null,this.requestUpdate();let n=s?this.#d:null;if(this.#d=null,this.state.dialog!=="discardDraft")return this.#Z(n);this.#D=n,this.#oe()})}#Z(e){e==="reload"?Oe(this.state.workflow):e&&this.#W(e)}#pe(){this.state.command==="pending"||this.#E||(this.#d=null,this.#oe(),this.#me())}#me(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".floor-switcher");e&&(e.value=this.state.selection.floorId);let s=this.renderRoot.querySelector(".robot-switcher");s&&(s.value=this.state.selection.entryId??"")})}#oe(){let e=this.#xe(this.state);this.#m({type:"dismiss-top-layer"}),e&&requestAnimationFrame(()=>e.focus({preventScroll:!0}))}#ee(e,s){this.dispatchEvent(new CustomEvent(Ms,{detail:typeof e=="string"?{id:e,settled:s}:e,bubbles:!0,composed:!0}))}#Se(e){e.action==="discard"?this.#q():this.#s.value?.confirmDialog(this.state,e.action,s=>this.#m(s),s=>this.#ee(s))}#G(e){e!==this._sheetDetent&&(this._sheetDetent=e,this.#O("_polite",e==="peek"?this.#e("v4_workspace_height_peek","Cleaning panel, collapsed"):e==="half"?this.#e("v4_workspace_height_half","Cleaning panel, half height"):this.#e("v4_workspace_height_full","Cleaning panel, full height")))}#P(e,s=!1){let i=X.indexOf(this._sheetDetent)+e;s&&i>=X.length&&(i=0),i=Math.max(0,Math.min(X.length-1,i)),this.#G(X[i]??this._sheetDetent)}#x(e){let s=this.renderRoot.querySelector(".workspace")?.clientHeight??e.parentElement?.clientHeight??e.offsetHeight,n=parseFloat(getComputedStyle(this).fontSize)||16,i=[".sheet-grip",".sheet-tools",".action-bar"].map(l=>e.querySelector(l)?.offsetHeight??0).reduce((l,d)=>l+d,0)+n*.75,o=Math.min(s*.92,s-n*9),a=Math.min(s*.48,n*26,o);return{peek:Math.min(i,a),half:a,full:o}}#I(){return this.renderRoot.querySelector(".mobile-sheet")}#ge(e,s){e.style.transform=s;let n=this.renderRoot.querySelector("[data-notice-toast]");n&&(n.style.transform=s)}#te(e){let s=e.currentTarget;for(let n of e.composedPath()){if(n===s)return!1;if(n instanceof Element&&n.matches(Nn))return!0}return!1}#Me(e){if(e.pointerType==="mouse"&&e.button!==0||this.#te(e))return;let s=this.#I();!s||this.#C||(this.#C={pointerId:e.pointerId,startY:e.clientY,startHeight:s.offsetHeight,heights:this.#x(s),samples:[{y:e.clientY,t:e.timeStamp}],moved:!1},e.currentTarget.setPointerCapture(e.pointerId),s.classList.add("dragging"))}#fe(e){let s=this.#C;if(!s||e.pointerId!==s.pointerId)return;let n=this.#I();if(!n)return;let i=e.clientY-s.startY;for(!s.moved&&Math.abs(i)>qn&&(s.moved=!0),s.samples.push({y:e.clientY,t:e.timeStamp});s.samples.length>2&&e.timeStamp-(s.samples[1]?.t??0)>Wn;)s.samples.shift();if(!s.moved)return;let o=s.startHeight-s.heights.full,a=s.startHeight-s.heights.peek,l=Math.max(o,Math.min(a,i));this.#ge(n,`translateY(${l}px)`)}#Re(e){let s=this.#C;if(!s||e.pointerId!==s.pointerId)return;this.#C=null;let n=this.#I();if(n&&(this.#ge(n,""),n.classList.remove("dragging")),e.type==="pointercancel")return;if(!s.moved){this.#P(1,!0);return}let i=e.clientY-s.startY,o=X.indexOf(this._sheetDetent),a=s.samples[0],l=s.samples[s.samples.length-1],d=a&&l&&l!==a?(l.y-a.y)/Math.max(1,l.t-a.t):0;if(Math.abs(d)>Ln){let h=Math.max(0,Math.min(X.length-1,o+(d<0?1:-1)));this.#G(X[h]??this._sheetDetent);return}let c=s.startHeight-i,u=this._sheetDetent,p=Number.POSITIVE_INFINITY;for(let h of X){let f=Math.abs(s.heights[h]-c);f<p&&(p=f,u=h)}this.#G(u)}#re(e){for(let s of e.composedPath()){if(s===e.currentTarget)break;if(s instanceof HTMLElement&&s.scrollHeight>s.clientHeight&&/auto|scroll/u.test(getComputedStyle(s).overflowY))return s}return null}#ve(e){if(e.pointerType==="mouse"||this.#te(e))return;let s=this.#re(e);this.#g=s?.scrollTop?null:{pointerId:e.pointerId,startY:e.clientY,scroller:s,consumed:!1}}#be(e){let s=this.#g;if(!(!s||s.consumed||e.pointerId!==s.pointerId)){if(s.scroller?.scrollTop){this.#g=null;return}e.clientY-s.startY<zn||(s.consumed=!0,this.#P(-1))}}#ye(){this.#g=null}#Pe(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}#Ee(e){this.#_=e.currentTarget,this.#m({type:this.state.fullMap?"exit-full-map":"enter-full-map"})}#se;#Ae;#ae;#we(){this.#m({type:"set-precision-open",value:!this.state.precisionOpen})}#We;#Te(e){let s=this.#s.value?.dialogLauncher(e,this.state,n=>this.#m(n));s&&(this.#v=s)}#xe(e){return e.dialog?this.#v?.isConnected&&this.#v.hasAttribute("data-dialog-launcher")?this.#v:this.#s.value?.dialogReturnTarget(e,this.renderRoot)??this.#qe(e.dialog):null}#qe(e){if(e==="confirmDeletePlan"){let i=this.renderRoot.querySelector(Kt)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`);if(i)return i}return this.renderRoot.querySelector(st)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`)??null}#ze(e){if(!gs(e)&&!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)&&e.key==="Escape"){if(e.preventDefault(),this.#r.value?.menu.open){this.#r.value.menu.close(!0);return}if(this.state.dialog==="discardDraft"){this.#pe();return}this.#m({type:"dismiss-top-layer"})}}#Ne(e){if(e.key!=="Tab")return;let n=[...e.currentTarget.querySelectorAll(on)],i=n[0],o=n.at(-1);if(!i||!o)return;let a=this.shadowRoot?.activeElement;e.shiftKey&&a===i?(e.preventDefault(),o.focus()):!e.shiftKey&&a===o&&(e.preventDefault(),i.focus())}#Be(){let e=this.renderRoot.querySelector(Ae);(e?.shadowRoot?.querySelector(".map-root")??e)?.focus()}#He(){this._sheetDetent==="peek"&&this.#I()&&this.#G("half"),this.updateComplete.then(()=>this.#M())}#ke(e,s,n){if(!("label"in e))return y;let i=e.labelKey?this.#e(e.labelKey,e.label,e.labelPlaceholders):e.label,o=!e.enabled&&e.reason?e.reasonKey?this.#s.value?.actionReason(this.#le,e,n==="primary-reason",a=>this.#m(a))??this.#e(e.reasonKey,e.reason,e.reasonPlaceholders):e.reason:null;return e.kind==="link"?w`<a class=${s} href=${e.href??"#"}>${i}</a>`:w`
      <button
        class=${`${s} ${e.kind==="danger"?"ms-btn--danger":""}`}
        type="button"
        aria-disabled=${e.enabled?y:"true"}
        aria-describedby=${o?n:y}
        aria-label=${e.id==="stop"?this.#e("v4_stop_cleaning_label","Stop cleaning"):e.id==="run-plan"?this.#e("v4_action_run_plan_named","Run plan {plan}",{plan:this.state.planDraft.name}):y}
        @click=${()=>this.#F(e)}
      >${i}</button>
      ${o?w`<p class="action-reason" id=${n}>${o}</p>`:y}
    `}#le;#Ie(e,s,n){let i=s?.enabled&&e.workflow==="rooms"&&s.id==="clean-rooms"?this.#s.value?.roomsSummary(this.#le,e)??"":"",o=e.workflow==="plan"&&e.planView==="edit";return!i&&!o&&!(s&&"label"in s)&&!n?y:w`
      <div class=${o?"action-bar paired":"action-bar"}>
        ${i?w`<p class="action-summary">${i}</p>`:y}
        ${o?this.#s.value?.planCancel(e,s,this.#le,(a,l)=>this.#J(a,l)):y}
        ${s?this.#ke(s,"ms-btn ms-btn--block ms-btn--lg ms-btn--primary","primary-reason"):y}
        ${n?this.#ke(n,"ms-btn ms-btn--block ms-btn--lg ms-btn--secondary","secondary-reason"):y}
      </div>
    `}#$e(e,s=!1,n=e){return s||this.#L.add(e),()=>{s||(this.#T(e),this.#l=n)}}#Fe(){let e=this.#l;this.#l=null;let s=e?this.renderRoot.querySelector(`[data-launcher="${e}"]`):null;Qe(s)?s.focus({preventScroll:!0}):this.#M()}#Ce(e,s,n,i,o=!1,a=!1,l="ms-row"){return w`
      <button
        class=${l}
        type="button"
        data-launcher=${n}
        aria-disabled=${o?"true":y}
        aria-describedby=${a?"home-reason":y}
        @click=${this.#$e(n,o)}
      >
        <span class="ms-row__lead">${D(s)}</span>
        <span class="ms-row__body"><strong>${e}</strong>${i?w`<small>${i}</small>`:y}</span>
        <span class="ms-row__trail">${D(rt)}</span>
      </button>
    `}#Ke(e){let s=e.resources.history.value?.floors||[],n=s.length?s.map((i,o)=>({id:i.active?"current":i.id,label:`${i.label||(i.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:i.ordinal??o+1}))}${!i.active&&i.snapshots.length===0?` \xB7 ${this.#e("v4_floor_not_captured","No saved map for this floor yet")}`:""}`,disabled:!i.active&&i.snapshots.length===0})):[{id:e.selection.floorId,label:e.floor.displayName,disabled:!1}];return w`
      <select
        class="ms-select context-switcher floor-switcher"
        slot="floor"
        data-map-control
        name="map-floor"
        aria-label=${this.#e("v4_choose_floor","Choose floor")}
        ?disabled=${n.length<=1}
        .value=${e.selection.floorId}
        @change=${i=>this.#m({type:"set-floor",floorId:i.currentTarget.value})}
      >${n.map(i=>w`
        <option value=${i.id} ?selected=${i.id===e.selection.floorId} ?disabled=${i.disabled}>${i.label}</option>
      `)}</select>
    `}#Ue(e){let s=(u,p,h)=>this.#e(u,p,h);this.#L=new Set(["support"]);let n=nn(e),i=u=>{let p=this.#Ce(s("v4_map_history","Map history"),at,"history",s("v4_history_quick_detail","Browse earlier floor maps.")),h=this.#Ce(s("v4_map_diagnostics","Map diagnostics"),lt,"support",s("v4_diagnostics_quick_detail","Check the map and copy details for support."));return w`
        <h3 class="ms-section-heading">${s("v4_maps_heading","Maps")}</h3>
        <div class="shelf maps">${u?[h,p]:[p,h]}</div>
      `};switch(n){case"reconnecting":case"administrator":case"robot-unavailable":case"setup":return y;case"offline":case"read-only":return i(!1);case"problem":return w`
          <div class="home-actions">
            <button class="ms-btn ms-btn--secondary" type="button" data-launcher="support-open" @click=${this.#$e("support",!1,"support-open")}>${s("v4_open_diagnostics","Open map diagnostics")}</button>
          </div>
          ${i(!0)}
        `;default:break}let o=n!=="ready",a=_t(e),l=a!==null&&a.rooms.length===0,d=o||l,c=(u,p,h,f,g,v)=>this.#Ce(g,h,u,v,f,o,p?"ms-row ms-row--card ms-row--featured":"ms-row ms-row--card");return w`
      ${n==="map-unavailable"||n==="map-limited"?w`
        <div class="home-actions">
          <button
            class="ms-btn ms-btn--secondary"
            type="button"
            aria-disabled=${e.rechecking?"true":y}
            @click=${()=>{this.state.rechecking||this.#ee("recheck-status")}}
          >${s("v4_retry","Try again")}</button>
        </div>
      `:y}
      <div class="quick-actions" role="group" aria-label=${s("v4_cleaning_choices","Cleaning choices")}>
        ${c("rooms",!0,le,d,s("v4_clean_rooms","Clean rooms"),!o&&l?s("v4_no_rooms_reason","Can't clean rooms until you name them in the Matic app."):s("v4_rooms_quick_detail","Pick rooms and clean them now."))}
        ${this.#Ve(e,o)}
        ${this.#je(e,o)}
        ${c("draw",!1,ds,o,s("v4_custom_areas","Clean custom area"),s("v4_areas_quick_detail","Draw or choose a custom area"))}
      </div>
      ${i(n==="map-unavailable")}
    `}#Ve(e,s){let n=this.#le,i=e.resources.plans,o=_t(e),a=o?.plans.find(g=>g.id===o.selectedPlan),l=o?.plans.length??0,d=i.status==="loading",c=i.status==="error",u=a?As(n,e.locale,a):null,[p="",h=""]=a?n("v4_run_named_plan","Run {plan}",{plan:"\0"}).split("\0"):[],f=()=>{s||(a?this.#m({type:"select-plan",planId:a.id,origin:"home"}):this.#T("plans"),this.#l="plan")};return s||this.#L.add("plans"),w`
      <button
        class="ms-row ms-row--card"
        type="button"
        data-launcher="plan"
        aria-disabled=${s?"true":y}
        aria-describedby=${s?"home-reason":y}
        @click=${f}
      >
        <span class="ms-row__lead">${D(xe)}</span>
        <span class="ms-row__body">
          ${a?w`
            <strong class="card-title"><span class="card-name">${p}<bdi>${a.name}</bdi>${h}</span>${a.enabled?y:w`<span class="ms-chip">${n("v4_paused","Paused")}</span>`}</strong>
            <small>${Ps(n,e.locale,a)}</small>
            ${u===null?y:"blocked"in u?w`<span class="card-lines"><span class="line" data-tone="warning">${D(ut)}${u.blocked}</span></span>`:w`<span class="card-lines">${u.due.map(g=>w`<span class="line">${D(ps)}${g}</span>`)}</span>`}
          `:w`
            <strong>${d?n("v4_plans_loading","Checking saved plans"):c?n("v4_plans_unavailable","Plans unavailable"):l?n("v4_run_a_plan","Run a plan"):n("v4_create_plan","Create a plan")}</strong>
            <small>${d?n("v4_plans_loading_hint","Reading plans for this floor"):c?n("v4_plans_unavailable_hint","Try again to load your plans."):l?l===1?n("v4_saved_routine","1 saved plan"):n("v4_saved_routines","{count} saved plans",{count:l}):n("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</small>
          `}
        </span>
        <span class="ms-row__trail">${D(rt)}</span>
      </button>
    `}#je(e,s){let n=_t(e);return n?.plans.some(i=>i.id===n.selectedPlan)?this.#Ce(this.#e("v4_your_plans","Your plans"),xe,"plans",void 0,s,s):y}#Ye(e,s){if(e.workflow==="none")return this.#Ue(e);let n=this.#j(e.workflow);return n!=="ready"?s&&e.workflow==="draw"?y:ht(n,this.localize,this.#ie):w`<${en}
      .state=${e}
      .localize=${this.localize}
      .dates=${this.dates}
      .retry=${this.#ie}
      @matic-workspace-intent=${this.#Te}
    ></${en}>`}#Oe(e,s){if(e.workflow==="none"||e.workflow==="plan"&&e.planView==="edit")return y;let n=e.workflow==="plan"&&e.planOrigin!=="home",i=n?this.#e("v4_back_to_plans","Back to plans"):this.#e("v4_back_to_all_tasks","Back to all tasks");return w`
      <button
        class=${s?"sheet-back ms-btn ms-btn--icon ms-btn--sm":"panel-back ms-btn ms-btn--secondary"}
        type="button"
        aria-label=${i}
        title=${s?i:y}
        data-dialog-launcher="discardDraft"
        @click=${o=>this.#J({type:"open-workflow",workflow:n?"plans":"none"},o.currentTarget)}
      >${D(ot)}${s?y:w`<span class="ms-btn__label">${n?this.#e("v4_your_plans","Your plans"):this.#e("v4_all_tasks","All tasks")}</span>`}</button>
    `}#De(e){let s=e.workflow==="plan",n=St(e,this.localize).title;return w`
      <div class="panel-top">
        <div class="panel-heading">
          ${this.#Oe(e,!1)}
          <h2 id="workspace-title" tabindex="-1">${s&&this.#s.value?.planTitle(e,n,this.#le)||n}</h2>
          ${s?this.#s.value?.planTools(e,this.localize,this.#Te):y}
        </div>
        ${e.notice?w`<div class="notice" data-notice-slot data-tone=${e.notice.tone}>${this.#ne(e.notice,this.#V,this.#e("v4_close","Close"))}</div>`:y}
      </div>
    `}#Le(e,s){let{description:n}=St(e,this.localize);return w`
      ${n?w`<p class="panel-description" id=${e.workflow==="none"?"home-reason":y}>${n}</p>`:y}
      ${this.#Ye(e,s)}
    `}#Xe(e,s){let n=St(e,this.localize),i=(e.workflow==="rooms"?this.#s.value?.roomsGripLine(this.#le,e):null)??n.title;return this._sheetDetent!=="peek"?s.detail?`${s.title} \xB7 ${s.detail}`:s.title:s.notable?`${s.title} \xB7 ${i}`:i}render(){let e=this.state,s=e.narrowHint||this._measuredNarrow,n=this.#r.value,i=kt(e,this.localize),o=_e(e),a=Nt({...e,narrowHint:s}),l=Bt(e),d=!s&&a.id==="stop"?a:!s&&l?.id==="stop"?l:null,c=d&&d===a?null:a,u=e.workflow==="draw"&&e.dataMode==="live"?{id:"clear-draft",label:"Clear",labelKey:"v4_clear_drawing",kind:"neutral",enabled:e.draw.circles.length>0||!!e.draw.outline?.points.length}:null,p=d&&d===l?null:l??u,h=e.fullMap&&(e.coherence==="verifying"||e.coherence==="booting"),f=e.fullMap||e.host.administrator&&e.host.robotCount>0&&e.map.available,g=e.workflow==="plan",v=e.dialog==="discardDraft",_=v?Dt(e,g?"confirmDeletePlan":"confirmDeleteArea")?.name:void 0,S=v?{title:this.#e("v4_discard_title","Discard changes?"),detail:_===void 0?g?this.#e("v4_discard_new_plan_detail","This new plan hasn't been saved, and discarding it can't be undone."):this.#e("v4_discard_new_area_detail","This new area hasn't been saved, and discarding it can't be undone."):g?this.#e("v4_discard_plan_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:_}):this.#e("v4_discard_area_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:_}),cancelLabel:this.#e("v4_keep_area_editing","Keep editing"),confirmLabel:this.#e("v4_discard","Discard"),action:"discard"}:e.dialog===null?void 0:this.#s.value?.dialogCopy(e.dialog,e,this.localize),k=v&&(e.command==="pending"||this.#E!==null),b=v&&(a.id==="save-plan"||a.id==="save-area")&&(a.enabled||k)?a.id:null,C=s&&!e.fullMap?`--map-sheet-offset:${this._sheetOffset}px`:"--map-sheet-offset:0px",P=s&&e.workflow==="draw",L=e.precisionOpen&&e.workflow==="draw",$=this._toast&&(this._toast.tone==="success"||this._toast.tone==="error"||e.fullMap||s&&this._sheetDetent==="peek")?this._toast:null;return w`
      <div class=${`root ${s?"narrow":"wide"}`} @keydown=${this.#ze}>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#Be}>${this.#e("v4_skip_to_map","Skip to the map")}</button>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#He}>${this.#e("v4_skip_to_workspace","Skip to the panel")}</button>
        <div class="app" ?inert=${!!S}>
          <header class="app-bar">
            ${e.precisionOpen?y:w`
              <button
                class="nav nav--menu ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                title=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                @click=${this.#Pe}
              >${D(rs)}</button>
            `}

            ${e.precisionOpen?w`
              <button
                class="nav ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_back","Back")}
                @click=${()=>this.#m({type:"dismiss-top-layer"})}
              >${D(ot)}</button>
            `:y}
            <h1 class="title">${this.#e("map_studio_title","Matic Map")}</h1>
            ${e.robots.length>1||o?w`
              <select
                class="ms-select context-switcher robot-switcher"
                name="matic-robot"
                aria-label=${this.#e("v4_choose_robot","Choose robot")}
                .value=${e.selection.entryId||""}
                @change=${E=>this.#m({type:"select-entry",entryId:E.currentTarget.value})}
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
                @click=${this.#Ee}
              >${D(as)}</button>
            `:y}
            <div class="overflow-wrap" @keydown=${n?.menu.keydown} @focusout=${n?.menu.focusout}>
              <button
                class="overflow ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_map_options","Map options")}
                aria-haspopup="menu"
                aria-expanded=${String(n?.menu.open??!1)}
                aria-controls="map-options"
                @click=${this.#se}
              >${D(os)}</button>
              ${n?.menu.open?n.render({state:e,narrow:s,browserFullscreen:this._browserFullscreen,t:(E,O)=>this.#e(E,O),intent:E=>this.#m(E),diagnostics:this.#Ae,fullscreen:this.#ae}):y}
            </div>
          </header>

          <main class=${`workspace ${e.fullMap?"full-map":""}`} style=${C}>
            <div class="canvas">
              <${Zs}
                class="map-canvas"
                style=${C}
                @matic-workspace-intent=${this.#We}
                .state=${e}
                .localize=${this.localize}
                .dates=${this.dates}
                .outlineEditor=${this.#a.value}
                .narrow=${s}
              >${this.#Ke(e)}
                ${s&&!e.fullMap&&this._sheetDetent==="full"?w`
                  <button
                    class="sheet-scrim"
                    slot="scrim"
                    data-map-control
                    type="button"
                    aria-label=${this.#e("v4_collapse_sheet","Collapse panel")}
                    @click=${()=>this.#G("peek")}
                  ></button>
                `:y}
              </${Zs}>
              ${!s&&L?w`
                <div class="precision-popover">
                  <${Ge} compact .state=${e} .localize=${this.localize}></${Ge}>
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
                  @pointerdown=${this.#Me}
                  @pointermove=${this.#fe}
                  @pointerup=${this.#Re}
                  @pointercancel=${this.#Re}
                >
                  <span class="sheet-handle" role="presentation"></span>
                  ${this._sheetDetent==="peek"?this.#Oe(e,!0):y}
                  <span class="sheet-status">${this.#Xe(e,i)}</span>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_more","Expand panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="full"?"true":y}
                    @click=${()=>this.#P(1)}
                  >${D(ls)}</button>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_less","Collapse panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="peek"?"true":y}
                    @click=${()=>this.#P(-1)}
                  >${D(cs)}</button>
                </div>
                ${P?w`
                  <div class="sheet-tools">
                    ${ht(this.#j("draw"),this.localize,this.#ie)}
                    ${vs(e,{intent:E=>this.#m(E),openBrush:()=>this.#we(),t:(E,O,G)=>this.#e(E,O,G)},"grid")}
                    ${L?w`
                      <div class="precision-popover">
                        <${Ge} compact inline .state=${e} .localize=${this.localize}></${Ge}>
                      </div>
                    `:y}
                  </div>
                `:y}
                <div
                  class="sheet-panel"
                  id="sheet-panel"
                  @pointerdown=${this.#ve}
                  @pointermove=${this.#be}
                  @pointerup=${this.#ye}
                  @pointercancel=${this.#ye}
                >
                  ${this.#De(e)}
                  <div class="sheet-body" role="region" aria-labelledby="workspace-title">${this.#Le(e,s)}</div>
                </div>
                ${this.#Ie(e,c,p)}
              `:w`
                <div class="status-strip">
                  <span class="status-icon" aria-hidden="true">${D(i.icon)}</span>
                  <span class="status-copy"><strong>${i.title}</strong><small>${i.detail}</small></span>
                  ${d?this.#ke(d,"status-action ms-btn ms-btn--secondary","status-reason"):y}
                </div>
                <section class="workflow">
                  ${this.#De(e)}
                  <div class="workflow-body" role="region" aria-labelledby="workspace-title">${this.#Le(e,s)}</div>
                  ${this.#Ie(e,c,p)}
                </section>
              `}
            </aside>

            ${e.fullMap?w`
              <section
                class=${`full-map-hud ms-surface ms-surface--floating ${l?"has-secondary":""} ${!s&&(e.workflow==="draw"||e.workflow==="rooms"&&e.selection.roomIds.length>0)?"above-dock":""}`}
                aria-label=${this.#e("v4_robot_status_and_action","Robot status and action")}
              >
                <span class="hud-copy"><strong>${i.title}</strong><small>${i.detail}</small></span>
                ${h&&a.id!=="stop"?y:this.#ke(a,"ms-btn ms-btn--lg ms-btn--primary","hud-reason")}
                ${l&&(!h||l.id==="stop")?this.#ke(l,"ms-btn ms-btn--lg ms-btn--secondary","hud-secondary-reason"):y}
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
          @pointerenter=${this.#H}
          @focusin=${this.#H}
          @pointerleave=${this.#X}
          @focusout=${this.#X}
        >${$?this.#ne($,this.#U,this.#e("v4_hide_notification","Hide notification")):y}</div>

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
              @keydown=${this.#Ne}
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
                  @click=${v?this.#pe:this.#oe}
                >${S.cancelLabel}</button>
                ${b?w`<button
                  class="ms-btn ms-btn--secondary"
                  type="button"
                  aria-disabled=${k?"true":y}
                  aria-describedby=${k?"dialog-saving":y}
                  @click=${()=>{if(k)return;let E={};this.#E=E,this.requestUpdate(),this.#ee(b,O=>this.#he(E,O))}}
                >${this.#e("v4_save","Save")}</button>`:y}
                <button
                  class="discard ms-btn ms-btn--primary ms-btn--danger"
                  type="button"
                  aria-disabled=${k?"true":y}
                  aria-describedby=${k?"dialog-saving":y}
                  @click=${()=>{k||this.#Se(S)}}
                >${S.confirmLabel}</button>
              </div>
            </section>
          </div>
        `:y}
      </div>
    `}};customElements.get(pe)||customElements.define(pe,Et);var an=oe(pe),ge=new WeakMap,Bn={},Hn=3e4,Ct=(r,t)=>{ge.get(r)===t&&ge.delete(r)},Mt=class extends Ce{constructor(){super(...arguments);this.narrow=!1;this._workspace=K();this.#e=new De;this.#t=new Lt(this._workspace);this.#i=null;this.#s=null;this.#a=null;this.#r=null;this.#o=null;this.#n=null}static{this.styles=[Me,Pe,Ee`
:host { display: block; block-size: 100%; }
`]}static{this.properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_workspace:{state:!0}}}#e;#t;#i;#s;#a;#r;#o;#n;#u(e=this.hass,s=this.panel){let n=this.#t.value.selection;return n.entrySource==="user"?this.#e.project(e,s,n.entryId):this.#e.project(e,s)}#y(){let e=this.hass,s=e?.loadBackendTranslation;if(!e||typeof s!="function")return;let n=e.connection??Bn,i=e.language??"";ge.get(n)!==i&&(ge.set(n,i),Promise.resolve().then(()=>s.call(e,"common","matic_robot")).catch(()=>{if(ge.get(n)===i){if(!this.isConnected){Ct(n,i);return}this.#n&&clearTimeout(this.#n.timer),this.#n={owner:n,language:i,timer:setTimeout(()=>{this.#n=null,Ct(n,i),this.#y()},Hn)}}}))}shouldUpdate(e){if(this.#y(),!e.has("hass")||[...e.keys()].some(n=>n!=="hass"))return!0;let s=e.get("hass");return s?.connection!==this.hass?.connection||s?.localize!==this.hass?.localize?!0:this.#u()!==this.#i}connectedCallback(){super.connectedCallback(),this.#y(),this.#s=this.#t.subscribe(e=>{if(this._workspace=e,e.selection.entryId!==this.#i?.entryKey){let s=this.#u();s!==this.#i&&(this.#i=s,this.#r?.sync(s))}}),this.#h()}disconnectedCallback(){this.#n&&(clearTimeout(this.#n.timer),Ct(this.#n.owner,this.#n.language),this.#n=null),this.#s?.(),this.#s=null,this.#k(),super.disconnectedCallback()}#h(){if(!(!this.isConnected||this.#r)&&(this.#i=this.#u(),this.#a=new qe(()=>this.hass),this.#r=new je(this.#t,this.#a,this.hass?.connection??null),this.#o=new Xe(this.#t),this.#o.start(),this.#i)){this.#r.sync(this.#i);let{host:e}=this.#i;e.connected&&e.administrator&&e.robotCount>0&&this.#r.refreshCatalog(this.#t.value.selection.floorId==="current")}}#k(){this.#o?.dispose(),this.#o=null,this.#r?.dispose(),this.#r=null,this.#a=null}willUpdate(e){if(e.has("hass")||e.has("panel")){let s=e.get("hass"),n=e.has("hass")&&s?.connection!==this.hass?.connection,i=this.#u(),o=i!==this.#i;o&&(this.#i=i),n?(this.#k(),this.#h()):(o||e.has("panel"))&&this.#r?.sync(i)}e.has("narrow")&&this.#t.value.narrowHint!==this.narrow&&this.#t.dispatch({type:"set-narrow-hint",value:this.narrow})}#b(e){if(!It(e.detail))return;e.stopPropagation();let s=e.detail;if(s.type==="dismiss-top-layer"||s.type==="exit-full-map"){this.#o?.dismissTop()||this.#t.dispatch(s);return}if(s.type==="open-workflow"&&s.workflow!=="none"){this.#r?.openWorkflow(s.workflow);return}if(s.type==="set-floor"){this.#r?.selectFloor(s.floorId);return}if(s.type==="select-entry"){if(!this._workspace.robots.some(n=>n.entryId===s.entryId)||this.#e.project(this.hass,this.panel,s.entryId).entryKey!==s.entryId)return;this.#t.dispatch(s);return}if(s.type==="set-history"){this.#r?.selectHistory(s.historyId);return}if(s.type==="select-plan"){this.#r?.selectPlan(s.planId,!1,s.origin);return}if(s.type==="set-plan-enabled"){this.#r?.setPlanEnabled(s.enabled);return}if(s.type==="select-area"){this.#r?.selectArea(s.areaId),s.workflow==="areaReview"&&this.#r?.openWorkflow("areaReview");return}this.#t.dispatch(s)}#w(e){e.stopPropagation(),typeof e.detail?.id=="string"&&(e.detail.id==="reset-room-cadence"&&"planId"in e.detail&&"roomId"in e.detail&&"mode"in e.detail?this.#r?.executeAction(e.detail):this.#r?.executeAction(e.detail.id,"settled"in e.detail?e.detail.settled:void 0),this.dispatchEvent(new CustomEvent("matic-map-v4-action-requested",{detail:{id:e.detail.id},bubbles:!0,composed:!0})))}getWorkspaceSnapshot(){return this.#t.value}getRequestDiagnostics(){return Object.freeze({http:this.#a?.requestDiagnostics()??null,workspace:this.#r?.workspaceDiagnostics()??null})}render(){return w`
      <${an}
        .state=${this._workspace}
        .localize=${this.hass?.localize}
        .dates=${this.#i?.dates}
        @matic-workspace-intent=${this.#b}
        @matic-workspace-action=${this.#w}
      ></${an}>
    `}};customElements.get(nt)||customElements.define(nt,Mt);export{De as a,Mt as b};
