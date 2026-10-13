import{A as es,B as ts,C as ss,E as ys,F as Oe,G as $e,H as gs,I as De,J as bs,K as ws,L as ks,M as _s,N as Ss,O as Rs,P as Es,Q as Cs,R as Ms,S as Ps,V as xs,W as Ts,a as re,b as k,c as xe,d as Nt,e as st,f as Ft,i as pe,j as nt,k as Kt,l as Ut,m as Vt,n as it,o as jt,p as Yt,q as oe,r as me,s as ae,t as Xt,u as R,v as Te,w as Gt,x as Qt,y as Jt,z as Zt}from"./chunk-M27DNMTN.js";import{G as us,H as ot,I as Ae,J as at,K as lt,L as ct,M as hs,N as j,O as ps,P as ms,Q as fs,R as dt,S as vs,T as D,a as Me,b as Pe,c as ns,d as le,e as is,f as rs,g as os,h as as,i as ls,j as rt,k as cs,l as ds}from"./chunk-ESUCYV6C.js";import{$ as Ie,A as et,D as tt,E as Se,J as Wt,K as Re,M as qt,N as zt,O as Ht,S as Ee,T as Bt,Y as g,_ as Ce,c as xt,h as M,j as Tt,k as ie,n as K,o as At,p as Je,q as Ze,r as It,t as Ot,u as $t,v as Dt,w as Lt,y as _e}from"./chunk-YNEKT7MH.js";var un=(o,t)=>{if(t?.recharge_and_resume===!0&&t?.charging===!0)return"recharging";switch(o){case"cleaning":return"cleaning";case"paused":return"paused";case"returning":return"returning";case"docked":return"docked";case"idle":return"idle";case"error":return"problem";default:return"unknown"}},hn=o=>typeof o!="number"||!Number.isFinite(o)?null:Math.round(Math.max(0,Math.min(100,o))),pn=o=>{let t=o.attributes?.matic_entry_id;return typeof t=="string"&&t.length>0?t:null},mn=o=>String(o||"local-user").replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",As=o=>{if(typeof o!="string")return"Robot";let t=o.trim();return t&&Array.from(t).length<=128&&!/[\u0000-\u001f\u007f]/u.test(t)?t:"Robot"},Le=class{#e="";#t=null;project(t,e,s=null){let n=t?.states??{},i=e?.config?.entry_id,a=s||(typeof i=="string"?i:null),l=null,d=null,c=a,u=new Map;for(let[$,E]of Object.entries(n)){let O=pn(E);O&&$.startsWith("vacuum.")&&(u.set(O,{entryId:O,label:As(E.attributes?.friendly_name)}),(a?O===a:!l)&&(l=E,d=$,c=O))}let p={connected:t?.connected!==!1,administrator:t?.user?.is_admin===!0,robotConnected:l!==null&&l.state!=="unavailable"&&l.state!=="unknown",robotCount:u.size},h=l?un(l.state,l.attributes):"unknown",f=hn(l?.attributes?.battery_level),y=t?.selectedLanguage||t?.language||"en",v=t?.locale?.language||y,w=t?.locale?.time_zone==="server"?t.config?.time_zone:void 0,_=this.#t?.dates,S=_?.language===v&&_.timeZone===w?_:{language:v,timeZone:w},b=mn(t?.user?.id),C=As(l?.attributes?.friendly_name),P=[...u.values()].sort(($,E)=>$.label.localeCompare(E.label,y,{sensitivity:"base"})),W=[p.connected,p.administrator,p.robotConnected,p.robotCount,h,f??"none",y,v,w??"browser",b,d??"none",c??"none",C,P.map($=>`${$.entryId}:${$.label}`).join(",")].join("|");return W===this.#e&&this.#t?this.#t:(this.#e=W,this.#t={host:p,activity:h,batteryPercent:f,language:y,dates:S,userKey:b,vacuumEntityId:d,entryKey:c,robotLabel:C,robots:P},this.#t)}};var fn=1024*1024,Is=o=>{let t=s=>{let n=o.sceneHeaderBytes,i=o.scenePointStride,r=o.sceneMaxPoints,a=o.sceneMaxBytes,l=()=>{throw new Error("invalid-scene")};(!(s instanceof ArrayBuffer)||s.byteLength<n||s.byteLength>a)&&l();let d=new DataView(s),c=new Uint8Array(s,0,8),u=String.fromCharCode(...c),p=d.getUint16(8,!0),h=d.getUint16(10,!0),f=d.getUint32(12,!0),y=d.getUint32(16,!0),v=d.getUint32(20,!0),w=y+v,_=n+f;(u!=="MATIC3D\0"||p!==1||h!==i||f>1048576||w<1||w>r||_+w*h!==s.byteLength)&&l();let S;try{S=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(new Uint8Array(s,n,f)))}catch{l()}(!S||typeof S!="object"||Array.isArray(S))&&l();let b=S,C=b.meters_per_cell,P=b.origin_cells,W=b.span_cells;(typeof C!="number"||!Number.isFinite(C)||C<.001||C>.1||!Array.isArray(P)||P.length!==2||!P.every(L=>typeof L=="number"&&Number.isFinite(L))||!Array.isArray(W)||W.length!==2||!W.every(L=>typeof L=="number"&&Number.isFinite(L)&&L>=1&&L<=65536))&&l();let E=(Array.isArray(b.rooms)?b.rooms.slice(0,128):[]).flatMap((L,we)=>{if(!L||typeof L!="object"||Array.isArray(L))return[];let B=L,Q=typeof B.name=="string"?B.name.trim():"";if(!Q||Array.from(Q).length>128||/[\u0000-\u001f\u007f]/u.test(Q))return[];if(!Array.isArray(B.boundary)||B.boundary.length<3||B.boundary.length>8192)return[];let ke=B.boundary.flatMap(V=>{if(!Array.isArray(V)||V.length!==2)return[];let[J,ne]=V;return typeof J=="number"&&Number.isFinite(J)&&typeof ne=="number"&&Number.isFinite(ne)?[[J,ne]]:[]}),ee=B.center;if(ke.length<3||!Array.isArray(ee)||ee.length!==2)return[];let[te,se]=ee;return typeof te!="number"||!Number.isFinite(te)||typeof se!="number"||!Number.isFinite(se)?[]:[{id:`scene-room-${we+1}`,name:Q,boundary:ke,center:[te,se]}]}),O=typeof b.sample_step=="number"&&Number.isInteger(b.sample_step)?Math.max(1,Math.min(r,b.sample_step)):1,G=P,be=W;return{buffer:s,pointOffset:_,floorCount:y,surfaceCount:v,total:w,metadata:{metersPerCell:C,origin:[G[0],G[1]],span:[be[0],be[1]],sampleStep:O,rooms:E}}};return{parseTransfer:t,decodeDeltaTransfer:async(s,n,i)=>{let r=(A="invalid-scene-delta")=>{throw new Error(A)},a=()=>{if(i?.aborted)throw new DOMException("Aborted","AbortError")};(!(s instanceof ArrayBuffer)||s.byteLength<o.deltaHeaderBytes||s.byteLength>o.deltaHeaderBytes+o.deltaMaxBytes||!(n.buffer instanceof ArrayBuffer)||n.buffer.byteLength<o.sceneHeaderBytes||n.buffer.byteLength>o.deltaMaxBytes||!Number.isSafeInteger(n.revision)||n.revision<0)&&r("invalid-scene-delta-size");let l=new DataView(s),d=String.fromCharCode(...new Uint8Array(s,0,8)),c=l.getUint16(8,!0),u=l.getUint16(10,!0),p=l.getBigUint64(12,!0),h=l.getBigUint64(20,!0),f=l.getUint32(28,!0),y=l.getUint32(32,!0),v=Number(p),w=Number(h);(d!=="MATICDLT"||c!==1||u!==1||!Number.isSafeInteger(v)||!Number.isSafeInteger(w)||v!==n.revision||w<=n.revision||f<o.sceneHeaderBytes||f>o.deltaMaxBytes||y<1||y>o.deltaMaxBytes||y+o.deltaHeaderBytes!==s.byteLength)&&r(),typeof DecompressionStream!="function"&&r("scene-delta-decompression-unavailable"),a();let _=new Uint8Array(s,o.deltaHeaderBytes,y),S=Math.max(n.buffer.byteLength,f);S>o.deltaMaxBytes&&r("invalid-scene-delta-size");let b=new Uint8Array(S),P=new Blob([_]).stream().pipeThrough(new DecompressionStream("deflate")).getReader(),W=0,$=null;try{for($=()=>{P.cancel().catch(()=>{})},i?.addEventListener("abort",$,{once:!0});;){a();let{done:A,value:Z}=await P.read();if(A)break;(!(Z instanceof Uint8Array)||W+Z.byteLength>S)&&r(),b.set(Z,W),W+=Z.byteLength}}catch(A){if(await P.cancel().catch(()=>{}),i?.aborted||A instanceof DOMException&&A.name==="AbortError")throw new DOMException("Aborted","AbortError");if(A instanceof Error&&A.message==="invalid-scene-delta")throw A;r()}finally{$&&i?.removeEventListener("abort",$),P.releaseLock()}a(),W!==S&&r();let E=new Uint8Array(n.buffer),O=new DataView(b.buffer,b.byteOffset,b.byteLength),G=Math.min(o.sceneHeaderBytes,E.byteLength);for(let A=0;A<G;A+=1)b[A]=(b[A]??0)^(E[A]??0);let be=O.getUint32(12,!0),L=O.getUint32(16,!0),we=O.getUint32(20,!0),B=o.sceneHeaderBytes+be,Q=L+we,ke=B===n.pointOffset&&L===n.floorCount&&we===n.surfaceCount,ee=B+Q*o.scenePointStride,te=ke&&ee===f&&Q<=o.sceneMaxPoints,se=[],V=-1,J=!1,ne=()=>{J&&V>=0&&se.push(V),J=!1};for(let A=G;A<E.byteLength;A+=o.xorChunkBytes){a();let Z=Math.min(E.byteLength,A+o.xorChunkBytes);for(let N=A;N<Z;N+=1){let Ct=E[N]??0,Mt=(b[N]??0)^Ct;if(b[N]=Mt,!te||N<n.pointOffset||N>=ee)continue;let Pt=Math.floor((N-n.pointOffset)/o.dirtyBlockBytes);Pt!==V&&(ne(),V=Pt),Mt!==Ct&&(J=!0)}Z<E.byteLength&&await new Promise(N=>globalThis.setTimeout(N,0))}ne(),a();let dn=f===b.byteLength?b.buffer:b.slice(0,f).buffer;return{parsed:t(dn),revision:w,...te?{deltaHint:{baseRevision:v,blockBytes:o.dirtyBlockBytes,dirtyBlocks:se}}:{}}}}},Os=Object.freeze({deltaHeaderBytes:me,deltaMaxBytes:ae,sceneHeaderBytes:it,sceneMaxBytes:oe,sceneMaxPoints:Yt,scenePointStride:jt,dirtyBlockBytes:Xt,xorChunkBytes:fn}),$s=Is(Os),vn=o=>{try{return $s.parseTransfer(o)}catch{throw new R("invalid-scene")}},yn=()=>`
  const { parseTransfer, decodeDeltaTransfer } = (${Is.toString()})(Object.freeze(${JSON.stringify(Os)}));
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
`,We=class{#e=null;#t=null;#r=!1;#n=!1;#a=0;#i=null;#o=null;#s=null;constructor(){if(!(typeof Worker!="function"||typeof URL?.createObjectURL!="function"))try{this.#t=URL.createObjectURL(new Blob([yn()],{type:"text/javascript"})),this.#y()}catch{this.#e=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}}async parse(t,e){if(this.#h(e),t.byteLength>oe||t.byteLength<it)throw new R("invalid-scene");let s=await this.#u({kind:"parse",buffer:t},e,async n=>(await new Promise(i=>globalThis.setTimeout(i,0)),this.#h(n),{id:0,ok:!0,parsed:vn(t)}));if(!s.parsed)throw new R("invalid-scene");return s.parsed}async decodeDelta(t,e,s){if(this.#h(s),t.byteLength>me+ae||e.buffer.byteLength>ae)throw new R("invalid-scene-delta-size");let n={buffer:e.buffer,revision:e.revision,pointOffset:e.pointOffset,floorCount:e.floorCount,surfaceCount:e.surfaceCount},i;try{i=await this.#u({kind:"delta",payload:t},s,async r=>(await new Promise(a=>globalThis.setTimeout(a,0)),this.#h(r),$s.decodeDeltaTransfer(t,n,r).then(a=>({id:0,ok:!0,...a}))),n)}catch(r){throw r instanceof R?r:s?.aborted||r instanceof DOMException&&r.name==="AbortError"?new DOMException("Aborted","AbortError"):r instanceof Error&&(r.message.startsWith("invalid-scene")||r.message==="scene-delta-decompression-unavailable")?new R(r.message):new R("invalid-scene-delta")}if(!i.parsed||i.revision===void 0)throw new R("invalid-scene-delta");return{parsed:i.parsed,revision:i.revision,...i.deltaHint?{deltaHint:i.deltaHint}:{}}}#h(t){if(this.#n)throw new R("scene-parser-disposed");if(t?.aborted)throw new DOMException("Aborted","AbortError")}#y(){if(!(!this.#t||this.#r||this.#n))try{let t=new Worker(this.#t);t.onmessage=e=>{let s=this.#i;this.#e!==t||!s||s.worker!==t||e.data.id!==s.id||(e.data.ok?this.#f(s,e.data):this.#f(s,void 0,new R(e.data.problem||"invalid-scene")))},t.onerror=()=>this.#c(t),t.onmessageerror=()=>this.#c(t),this.#e=t}catch{this.#e=null,this.#r=!0}}async#u(t,e,s,n){return this.#h(e),new Promise((i,r)=>{let a,l=()=>e?.removeEventListener("abort",a.abort),d=(c,u)=>{a.settled||(a.settled=!0,l(),u!==void 0?r(u):c?i(c):r(new R("invalid-scene")))};a={id:++this.#a,message:t,...e?{signal:e}:{},fallback:s,...n?{base:n}:{},settle:d,abort:()=>this.#b(a),settled:!1,worker:null},e?.addEventListener("abort",a.abort,{once:!0}),e?.aborted||this.#n?d(void 0,e?.aborted?new DOMException("Aborted","AbortError"):new R("scene-parser-disposed")):this.#i?this.#o?d(void 0,new R("scene-parser-busy")):this.#o=a:(this.#i=a,this.#E(a))})}#E(t){if(this.#i!==t)return;if(this.#n){this.#f(t,void 0,new R("scene-parser-disposed"));return}if(t.signal?.aborted){this.#f(t,void 0,new DOMException("Aborted","AbortError"));return}!this.#e&&!this.#r&&this.#y();let e=this.#e;if(e){t.worker=e;try{let n,i;if(t.message.kind==="parse")n={id:t.id,kind:t.message.kind,buffer:t.message.buffer},i=[t.message.buffer];else{if(!t.base)throw new R("invalid-scene-delta");let r={...t.base,buffer:t.base.buffer.slice(0)};n={id:t.id,kind:t.message.kind,payload:t.message.payload,base:r},i=[t.message.payload,r.buffer]}e.postMessage(n,i)}catch{this.#c(e)}return}let s=new AbortController;this.#s=s,Promise.resolve().then(()=>t.fallback(s.signal)).then(n=>this.#f(t,n),n=>this.#f(t,void 0,n))}#b(t){let e=new DOMException("Aborted","AbortError");if(this.#o===t){this.#o=null,t.settle(void 0,e);return}this.#i===t&&(t.worker?(this.#v(),this.#f(t,void 0,e)):this.#s?.abort())}#f(t,e,s){if(this.#i!==t){t.settle(void 0,new R("scene-parser-disposed"));return}let n=t.signal?.aborted?new DOMException("Aborted","AbortError"):s;t.settle(e,n),this.#i=null,this.#s=null,t.worker=null,this.#n||this.#p()}#p(){if(this.#n||this.#i||!this.#o)return;let t=this.#o;if(this.#o=null,t.signal?.aborted){t.settle(void 0,new DOMException("Aborted","AbortError")),this.#p();return}this.#i=t,this.#E(t)}#c(t){if(this.#e!==t)return;this.#r=!0,this.#v();let e=this.#i;e?.worker===t?this.#f(e,void 0,new R("scene-worker-failed")):this.#p()}#v(){this.#e?.terminate(),this.#e=null}dispose(){if(this.#n)return;this.#n=!0;let t=this.#o;this.#o=null,t?.settle(void 0,new R("scene-parser-disposed"));let e=this.#i;this.#v(),this.#s?.abort(),this.#s=null,e&&(e.worker=null,e.settle(void 0,new R("scene-parser-disposed"))),this.#i=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}};var ut=["catalog","scene","sceneDelta","pose","history","plans","areas","areaSave","areaDelete"];var ht=()=>({requests:0,completed:0,failed:0,aborted:0,timedOut:0,totalDurationMs:0,maxDurationMs:0}),Ds=o=>Math.min(1e9,o+1),Ls=o=>Number.isFinite(o)?Math.min(1e12,Math.max(0,o)):0,ce=class{#e=ht();#t=!1;record(t,e){if(this.#t)return;let s=Math.round(Ls(e)*100)/100;this.#e.requests=Ds(this.#e.requests),this.#e[t]=Ds(this.#e[t]),this.#e.totalDurationMs=Ls(this.#e.totalDurationMs+s),this.#e.maxDurationMs=Math.max(this.#e.maxDurationMs,s)}snapshot(){return Object.freeze({...this.#e})}reset(){this.#t||Object.assign(this.#e,ht())}dispose(){this.#t=!0,Object.assign(this.#e,ht())}},qe=class{#e=Object.fromEntries(ut.map(t=>[t,new ce]));#t=!1;record(t,e,s){this.#t||this.#e[t].record(e,s)}snapshot(){let t=Object.fromEntries(ut.map(e=>[e,this.#e[e].snapshot()]));return Object.freeze(t)}dispose(){if(!this.#t){this.#t=!0;for(let t of ut)this.#e[t].dispose()}}};var H={catalog:1e4,scene:6e4,delta:35e3,pose:1e4,history:15e3,workflow:15e3,mutation:2e4,roomPreview:15e3},gn=2,fe=new WeakMap,x=class extends Error{constructor(t,e=null){super(t),this.name="BackendError",this.code=t,this.status=e}},Ws=(o,t)=>{let e=o.headers.get("X-Matic-Revision");if(e===null)return t;let s=Number(e);if(!Number.isSafeInteger(s)||s<0)throw new R("invalid-scene-revision");return s},qs=(o,t)=>{let e=o.headers.get("X-Matic-Floor-Coherent");if(e===null)return t;if(e==="1")return!0;if(e==="0")return!1;throw new R("invalid-scene-floor-header")},ze=class{#e;#t=new We;#r=new WeakMap;#n=new Set;#a=new qe;#i=!1;constructor(t){this.#e=t}requestDiagnostics(){return this.#a.snapshot()}async#o(t,e,s=Number.POSITIVE_INFINITY,n="invalid-response-size"){let i=t.body?.getReader();if(!i)return new ArrayBuffer(0);let r=()=>{i.cancel().catch(()=>{})};e.addEventListener("abort",r,{once:!0});try{if(e.aborted)throw r(),new DOMException("Aborted","AbortError");let a=[],l=0;for(;;){let u=await i.read();if(e.aborted)throw new DOMException("Aborted","AbortError");if(u.done)break;if(l+u.value.byteLength>s)throw i.cancel().catch(()=>{}),new R(n);a.push(u.value),l+=u.value.byteLength}let d=new Uint8Array(l),c=0;for(let u of a)d.set(u,c),c+=u.byteLength;return d.buffer}finally{e.removeEventListener("abort",r),i.releaseLock()}}async#s(t,e,s,n,i,r){if(!ss(e))throw new x("invalid-private-path");if(i?.aborted)throw new DOMException("Aborted","AbortError");let a=performance.now(),l="failed",d=new AbortController,c=()=>{},u=new Promise((y,v)=>{c=v}),p=()=>{d.abort(),c(new DOMException("Aborted","AbortError"))};i?.addEventListener("abort",p,{once:!0});let h=!1,f=window.setTimeout(()=>{h=!0,p()},n);try{let y=this.#e(),v=new Headers(s.headers),w={...s,cache:"no-store",credentials:"same-origin",headers:Object.fromEntries(v.entries()),signal:d.signal},_=async()=>{let b;if(typeof y?.fetchWithAuth=="function")b=await y.fetchWithAuth(e,w);else{let C=y?.auth?.accessToken||y?.auth?.data?.access_token;C&&v.set("Authorization",`Bearer ${C}`);let P=typeof y?.hassUrl=="function"?y.hassUrl(e):e;b=await fetch(P,{...w,headers:v})}try{if(d.signal.aborted)throw new DOMException("Aborted","AbortError");return await r(b,d.signal)}finally{b.body&&!b.body.locked&&b.body.cancel().catch(()=>{})}},S=await Promise.race([_(),u]);return l="completed",S}catch(y){throw h&&!i?.aborted?(l="timedOut",new x("request-timeout")):d.signal.aborted?(l="aborted",new DOMException("Aborted","AbortError")):y}finally{window.clearTimeout(f),i?.removeEventListener("abort",p),this.#a.record(t,l,performance.now()-a)}}async#h(t,e,s,n,i={}){return this.#s(t,e,{...i,headers:{Accept:"application/json",...i.headers||{}}},s,n,async(r,a)=>{if(!r.ok){let l=r.headers.get("X-Matic-Plans-Conflict");throw new x(l==="map-rechecking"?"map-rechecking":"request-failed",r.status)}try{return JSON.parse(new TextDecoder().decode(await this.#o(r,a)))}catch{throw new R("invalid-json-response")}})}async catalog(t){return Te(await this.#h("catalog",Vt,H.catalog,t))}async scene(t,e,s,n,i,r){let a=new Headers({Accept:"application/vnd.matic.slam-scene"});return n==="live"&&a.set("X-Matic-Prefer-Cached","1"),r&&a.set("If-None-Match",r),this.#s("scene",t,{headers:a},H.scene,i,async(l,d)=>{let c=Ws(l,e),u=qs(l,s);if(l.status===304)return{scene:null,floorCoherent:u,revision:c,notModified:!0};if(!l.ok)throw new x("scene-request-failed",l.status);if(l.headers.get("Content-Type")?.split(";",1)[0]!=="application/vnd.matic.slam-scene")throw new R("invalid-scene-content-type");return{scene:{...await this.#t.parse(await this.#o(l,d,oe,"invalid-scene-size"),d),revision:c,etag:l.headers.get("ETag"),source:n},floorCoherent:u,revision:c,notModified:!1}})}async sceneDelta(t,e,s,n){let i=t.includes("?")?"&":"?";return this.#s("sceneDelta",`${t}${i}since=${encodeURIComponent(e.revision)}`,{headers:{Accept:"application/vnd.matic.slam-delta, application/vnd.matic.slam-scene"}},H.delta,n,async(r,a)=>{let l=Ws(r,e.revision),d=qs(r,s);if(r.status===204){if(l!==e.revision)throw new R("invalid-scene-delta-revision");return{scene:null,floorCoherent:d,revision:l,notModified:!0}}if(!r.ok)throw new x("delta-request-failed",r.status);if(l<=e.revision)throw new R("invalid-scene-delta-revision");let c=r.headers.get("Content-Type")?.split(";",1)[0];if(c!=="application/vnd.matic.slam-delta"&&c!=="application/vnd.matic.slam-scene")throw new R("invalid-scene-delta-content-type");let u=c==="application/vnd.matic.slam-delta",p=u?me+ae:oe,h=Number(r.headers.get("Content-Length"));if(Number.isFinite(h)&&h>p)throw new R(u?"invalid-scene-delta-size":"invalid-scene-size");let f=await this.#o(r,a,p,u?"invalid-scene-delta-size":"invalid-scene-size");if(u){let v=Number(r.headers.get("X-Matic-Base-Revision"));if(!Number.isSafeInteger(v)||v!==e.revision)throw new R("invalid-scene-delta-base");let w=await this.#t.decodeDelta(f,e,a);if(w.revision!==l)throw new R("invalid-scene-delta-revision");return{scene:{...w.parsed,revision:l,etag:r.headers.get("ETag"),source:"live",...w.deltaHint?{deltaHint:w.deltaHint}:{}},floorCoherent:d,revision:l,notModified:!1}}return{scene:{...await this.#t.parse(f,a),revision:l,etag:r.headers.get("ETag"),source:"live"},floorCoherent:d,revision:l,notModified:!1}})}async pose(t,e){return ts(await this.#h("pose",t,H.pose,e))}async history(t,e){return Gt(await this.#h("history",t,H.history,e))}async plans(t,e){return es(await this.#h("plans",t,H.workflow,e))}async areas(t,e){return Jt(await this.#h("areas",t,H.workflow,e))}async previewRoomSequence(t,e,s,n){if(!t||t.length>255||e.length<1||e.length>100)throw new R("invalid-room-sequence-preview-request");if(n?.aborted)throw new DOMException("Aborted","AbortError");let i=this.#e()?.connection;if(!i?.sendMessagePromise)throw new x("preview-unavailable");let r=null,a=()=>{},l=new Promise((w,_)=>{a=_}),d=this.#r.get(i),c,u=new Promise(w=>{c=w});this.#r.set(i,u);let p=!1,h=()=>{p||(p=!0,c(),this.#r.get(i)===u&&this.#r.delete(i))},f=!1,y=()=>{a(new DOMException("Aborted","AbortError")),f&&(h(),r!==null&&window.clearTimeout(r),r=null)};n?.addEventListener("abort",y,{once:!0});let v=new Promise((w,_)=>{r=window.setTimeout(()=>{r=null,_(new x("preview-timeout"))},H.roomPreview)});v.catch(()=>{f&&h()});try{if(d&&(await Promise.race([d,l,v]),n?.aborted))throw new DOMException("Aborted","AbortError");let w=fe.get(i)??0;if(w>=gn)throw new x("preview-unavailable");let _=i.sendMessagePromise({type:"call_service",domain:"matic_robot",service:"preview_room_sequence",target:{entity_id:t},service_data:{rooms:e.map(P=>({room:P.room,cleaning_mode:P.cleaning_mode,coverage_setting:P.coverage_setting})),use_room_schedule:!0,override_room_schedule:s},return_response:!0});fe.set(i,w+1),f=!0;let S=!1,b=()=>{if(!S){S=!0;let P=(fe.get(i)??1)-1;P===0?fe.delete(i):fe.set(i,P)}h(),r!==null&&window.clearTimeout(r),r=null};_.then(b,b);let C=await Promise.race([_,l,v]);if(n?.aborted)throw new DOMException("Aborted","AbortError");if(!C||typeof C!="object"||Array.isArray(C)||!("response"in C))throw new R("invalid-room-sequence-preview-envelope");return Qt(C.response)}finally{f||(d?d.then(h,h):h(),r!==null&&window.clearTimeout(r),r=null),n?.removeEventListener("abort",y)}}async saveArea(t,e,s){let n=await this.#h("areaSave",t,H.mutation,s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e.areaId?{area_id:e.areaId}:{},name:e.name,circles:e.circles,...e.outline?.closed?{outline:e.outline.points}:{},cleaning_mode:e.cleaningMode,coverage_setting:e.coverageSetting})});if(!n||typeof n!="object"||typeof n.id!="string")throw new R("invalid-area-save-response");return n.id}async deleteArea(t,e,s){await this.#s("areaDelete",`${t}?area_id=${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json"}},H.mutation,s,async n=>{if(!n.ok)throw new x("area-delete-failed",n.status)})}async service(t,e,s,n,i={}){let r=this.#e();if(this.#i||typeof r?.callService!="function")throw new x("service-unavailable");let a=null,l=null;try{let d=i.returnResponse?r.callService(t,e,s,{entity_id:n},!0,!0):r.callService(t,e,s,{entity_id:n});return!i.returnResponse&&!i.acknowledgementTimeout?await d:await Promise.race([d,new Promise((c,u)=>{l=()=>{a!==null&&window.clearTimeout(a),a=null,u(new DOMException("Aborted","AbortError"))},this.#n.add(l),a=window.setTimeout(()=>u(new x("mutation-timeout")),H.mutation)})])}finally{a!==null&&window.clearTimeout(a),l&&this.#n.delete(l)}}dispose(){if(!this.#i){this.#i=!0,this.#a.dispose();for(let t of this.#n)t();this.#n.clear(),this.#t.dispose()}}};var Hs=()=>({version:4,view:"top",appearance:"photo",labels:!0,quality:"auto",cameras:{}}),ve=(o,t,e)=>Math.max(t,Math.min(e,o)),Bs=o=>o.replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",pt=(o,t=4)=>`matic-map-studio:v${t}:${Bs(o)}`,bn=o=>{if(!o||typeof o!="object")return null;let t=o;return["yaw","pitch","zoom","targetX","targetZ"].every(s=>typeof t[s]=="number"&&Number.isFinite(t[s]))?{yaw:ve(t.yaw,-Math.PI,Math.PI),pitch:ve(t.pitch,.18,Math.PI/2-.018),zoom:ve(t.zoom,.01,100),targetX:ve(t.targetX,-1e4,1e4),targetZ:ve(t.targetZ,-1e4,1e4)}:null},zs=o=>{let t=Hs();if(!o||typeof o!="object")return t;let e=o,s=e.view==="three"||e.view==="top"||e.view==="rooms"?e.view:t.view,n=s==="rooms"?"top":s,i=e.quality==="auto"||e.quality==="efficient"||e.quality==="balanced"||e.quality==="maximum"?e.quality:t.quality,r=e.cameras&&typeof e.cameras=="object"?e.cameras:{},a={};for(let l of["three","top"]){let d=bn(r[l]);d&&(a[l]=d)}return{version:4,view:n,appearance:e.appearance==="rooms"||e.appearance==="photo"?e.appearance:t.appearance,labels:typeof e.labels=="boolean"?e.labels:t.labels,quality:i,cameras:a}},He=class{#e="local-user";#t=null;#r=null;load(t){this.#n(),this.#e=Bs(t);try{let e=window.localStorage.getItem(pt(this.#e));if(e)return zs(JSON.parse(e));for(let s of[3,2]){let n=window.localStorage.getItem(pt(this.#e,s));if(n)return zs(JSON.parse(n))}}catch{}return Hs()}schedule(t){this.#t!==null&&window.clearTimeout(this.#t),this.#r={key:pt(this.#e),value:t},this.#t=window.setTimeout(()=>this.#n(),250)}#n(){this.#t!==null&&window.clearTimeout(this.#t),this.#t=null;let t=this.#r;if(this.#r=null,!!t)try{window.localStorage.setItem(t.key,JSON.stringify(t.value))}catch{}}dispose(){this.#n()}};var ft=1,de=Number.MAX_SAFE_INTEGER,Vs=Number.MAX_SAFE_INTEGER,Ns=64,wn=1e12,mt=4,Fs=16*1024,kn=250,_n=4e3,Be=3e4;function q(o){return o!==null&&typeof o=="object"&&!Array.isArray(o)?o:null}function Y(o,t){return typeof o=="number"&&Number.isSafeInteger(o)&&o>=0&&o<=t}function js(o){let t=q(o);if(!t)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,Vs))return null;e[s]=n}return e}function Sn(o){let t=q(o);if(!t||Object.keys(t).length>128)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,Vs))return null;e[s]=n}return e}function Ys(o){return typeof o=="string"&&o.length>0&&o.length<=256?o:Y(o,de)?String(o):null}function Rn(o){let t=q(o),e=Ys(t?.epoch);if(!t||t.schema!==ft||e===null)return null;let s=Sn(t.capabilities),n=js(t.revisions);return!s||!n||!Y(t.sequence,de)||!Y(t.coherence_generation,de)||t.coherence_generation===0?null:{schema:t.schema,capabilities:s,epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:n}}function Ks(o,t){let e=q(o),s=Rn(e?.snapshot??o);if(!s)return null;let n=q(e?.snapshot??o);if(!n||!("payload"in n))return null;let i=n.entry_id,r=q(n.identity),a=q(n.status),l=q(n.payload),d=a?a.reason===null?null:Xs(a.reason):null,c=l?.available,u=null;if(l?.entry!==void 0&&l.entry!==null){if((()=>{try{return JSON.stringify(l.entry).length}catch{return Fs+1}})()>Fs)return null;try{u=Te({entries:[l.entry]})[0]??null}catch{return null}}let p=a?.state;return typeof i!="string"||i.length===0||i.length>128||t!==void 0&&i!==t||!r||r.entry_id!==i||r.floor_mission_id!==null&&!Y(r.floor_mission_id,de)||typeof r.floor_verified!="boolean"||r.floor_verified!==(r.floor_mission_id!==null)||!a||p!=="ready"&&p!=="stale"&&p!=="unavailable"||a.reason!==null&&d===null||typeof a.retryable!="boolean"||typeof c!="boolean"||u!==null&&u.entryId!==i||p==="ready"&&(d!==null||a.retryable||!c)||(p==="stale"||p==="unavailable")&&(d===null||c)||d==="authorization"&&a.retryable?null:{...s,entry_id:i,identity:{entry_id:i,floor_mission_id:r.floor_mission_id,floor_verified:r.floor_verified},status:{state:p,reason:d,retryable:a.retryable},payload:{available:c,entry:u}}}function Us(o){let t=q(o),e=Ys(t?.epoch),s=js(t?.revisions),n=t?.resources;return e===null||!s||!Y(t?.sequence,de)||!Y(t?.coherence_generation,de)||t.coherence_generation===0||!Array.isArray(n)||n.length>128||!n.every(i=>typeof i=="string"&&i.length<=128)?null:{epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:s,resources:n}}var Ne=["gap","overflow","reconnect","invalid_message","server_request","restart","entry_removed","authorization","snapshot_required"];function Xs(o){return typeof o=="string"&&Ne.includes(o)?o:null}function En(o){let t=q(o);return t?.name==="AbortError"?"aborted":t?.name==="TimeoutError"?"timedOut":"failed"}function Cn(){return Object.fromEntries(Ne.map(o=>[o,new ce]))}var Fe=class{#e;#t;#r;#n=null;#a=!1;#i=!1;#o=!1;#s=!1;#h=!1;#y=!1;#u=0;#E=!1;#b=!1;#f=!1;#p=!1;#c=null;#v=null;#C=0;#x=!1;#R=null;#_=-1;#d=new Map;#T=!1;#S=!1;#I=null;#l=[];#W=new ce;#g=Cn();#O=null;#w=null;#A=null;constructor(t,e){this.#e=t,this.#t=e,this.#r=Math.max(1,Math.min(Ns,e.maxPendingInvalidations??Ns))}async start(){if(!(this.#a||this.#S)){this.#S=!0;try{await this.#V(!1)}catch(t){this.#Z(t),this.#k("reconnect")}}}notifyReconnect(){(this.#s||this.#y)&&(this.#z(),this.#J("aborted"),this.#u+=1),this.#C=0,this.#E=!1,this.#s=!1,this.#h=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.requestResync("reconnect"),this.#o&&this.#F(0,!0)}requestResync(t="server_request"){this.#k(t,!0)}diagnostics(){let t=Object.fromEntries(Ne.map(s=>[s,this.#g[s].snapshot()])),e=this.#w!==null&&this.#A!==null?Object.freeze({reason:this.#w,durationMs:Math.round(Math.min(wn,Math.max(0,performance.now()-this.#A))*100)/100}):null;return Object.freeze({snapshotAttempts:this.#W.snapshot(),recoveryEpisodes:Object.freeze(t),activeRecovery:e})}dispose(){if(!this.#a){this.#a=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#o=!1,this.#n?.(),this.#n=null,this.#d.clear(),this.#l=[],this.#O=null,this.#w=null,this.#A=null,this.#W.dispose();for(let t of Ne)this.#g[t].dispose()}}#B(t){if(this.#a)return;let e=q(t),s=q(e?.event)??e,n=s?.type;if(n==="resync"){let r=Xs(s?.reason);if(!r){this.#k("invalid_message");return}if(r==="entry_removed"){this.#t.onEvent({type:"resync",reason:r}),this.dispose();return}this.#k(r);return}if(this.#s){if(n==="invalidate"){let r=Us(s?.invalidation??s);r?this.#N(r):(this.#l=[],this.#x=!0)}return}let i=n==="snapshot"?Ks(s?.snapshot??s,this.#t.entryId):n==="invalidate"?Us(s?.invalidation??s):null;if(!i){this.#k("invalid_message");return}if(n==="snapshot"){let r=i;if(this.#o)return;if(this.#R!==null&&r.epoch!==this.#R){this.#k("restart");return}this.#U(r);return}this.#q(i)}#U(t){this.#R===t.epoch&&t.sequence<this.#_||(this.#R=t.epoch,this.#_=t.sequence,this.#d.clear(),this.#t.onEvent({type:"snapshot",snapshot:t}))}#ce(t){let e=this.#l;if(this.#l=[],this.#U(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(i=>i.epoch===t.epoch&&i.sequence>=s),this.#k("gap");return}this.#q(n),s+=1}}#q(t){if(this.#o){this.#N(t);return}if(this.#R===null){this.#N(t);return}if(this.#R!==t.epoch){this.#N(t),this.#k("reconnect");return}if(!(t.sequence<=this.#_)){if(t.sequence!==this.#_+1){this.#N(t),this.#k("gap");return}this.#_=t.sequence;for(let e of t.resources)this.#d.set(e,t);if(this.#d.size>this.#r){this.#d.clear(),this.#k("overflow");return}this.#T||(this.#T=!0,queueMicrotask(()=>this.#de()))}}#N(t){this.#l.length>=this.#r?(this.#l=[],this.#x=!0,this.#k("overflow")):this.#l.push(t)}#de(){if(this.#T=!1,this.#a||this.#s||this.#d.size===0){this.#s&&this.#d.clear();return}let t=[...this.#d.values()];this.#d.clear();let e=t.reduce((n,i)=>!n||i.sequence>n.sequence?i:n,null);if(!e)return;let s=[...new Set(t.flatMap(n=>n.resources))];this.#t.onEvent({type:"invalidation",invalidation:{...e,resources:s}})}#k(t,e=!1){if(!this.#a){if(t==="authorization"){this.#K(),this.#t.onEvent({type:"resync",reason:t});return}if(!this.#s&&(this.#M(t),this.#i||(this.#i=!0,this.#t.onEvent({type:"resync",reason:t}),queueMicrotask(()=>{this.#i=!1})),t!=="entry_removed")){let s=e&&!this.#E;if(s&&(this.#E=!0),s&&this.#c!==null&&(window.clearTimeout(this.#c),this.#c=null),this.#f){if(this.#p){s&&this.#F(0,!0);return}this.#p=!0,this.#X(s);return}if(e&&this.#o){s&&(this.#b=!0);return}let n=this.#C>=mt?Be:0;this.#F(s?0:n,s)}}}#F(t,e=!1){if(!this.#a){if(this.#c!==null){if(!e)return;window.clearTimeout(this.#c),this.#c=null}if(this.#o){this.#v=e?t:Math.max(this.#v??0,t);return}this.#c=window.setTimeout(()=>{this.#c=null,this.#V(!0)},t)}}#X(t=!1){let e=this.#C>=mt?Be:Math.min(kn*2**this.#C,_n);this.#C<mt&&(this.#C+=1),this.#F(t?0:e,t)}async#V(t,e=!1){if(this.#a||this.#o)return;t&&this.#M(e?"authorization":"snapshot_required");let s=this.#u;this.#o=!0,this.#y=e;try{if(t&&await this.#j(),this.#a||this.#s&&!e||s!==this.#u)return;let n={startedAt:performance.now(),generation:s};this.#O=n;let i="completed",r;try{r=await this.#e.sendMessagePromise({type:"matic_robot/workspace_snapshot",version:ft,entry_id:this.#t.entryId})}catch(d){throw i=En(d),d}finally{this.#m(n,i)}if(this.#a||this.#s&&!e||s!==this.#u)return;let a=Ks(r,this.#t.entryId);if(!a)throw new Error("invalid-workspace-snapshot");if(a.status.reason==="authorization"){this.#K(),this.#t.onEvent({type:"snapshot",snapshot:a});return}if(a.status.state!=="ready"&&a.status.retryable)throw new Error("workspace-snapshot-retryable");e&&(this.#s=!1,this.#h=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null),this.#o=!1,this.#f=!0,this.#p=!1;try{t?this.#re(a):this.#ce(a)}finally{this.#f=!1}let l=this.#p||this.#x;this.#p?this.#b&&(this.#b=!1,this.#F(0,!0)):(this.#C=0,this.#E=!1,this.#b=!1),!t&&!this.#a&&await this.#j(),this.#x&&(this.#x=!1,this.#k("overflow")),t&&a.status.state==="ready"&&!l&&!this.#a&&s===this.#u&&this.#J("completed")}catch(n){if(this.#a||this.#s&&!e||s!==this.#u)return;if(this.#Z(n),this.#ue(n))this.#K(),this.#t.onEvent({type:"resync",reason:"authorization"});else if(!e){t||this.#M("reconnect");let i=this.#b;this.#b=!1,this.#X(i)}}finally{this.#o=!1,this.#y=!1,this.#h?(this.#h=!1,this.#$(0)):e&&this.#s&&this.#$(Be);let n=this.#v;this.#v=null,n!==null&&this.#F(n)}}async#j(){if(this.#a||this.#n)return;if(this.#I)return this.#I;let t=(async()=>{let e=await this.#e.subscribeMessage(s=>this.#B(s),{type:"matic_robot/workspace_subscribe",version:ft,entry_id:this.#t.entryId});this.#a?e():this.#n=e})();this.#I=t;try{await t}finally{this.#I===t&&(this.#I=null)}}#re(t){let e=this.#l;if(this.#l=[],this.#R===t.epoch&&t.sequence<this.#_){this.#l=e,this.#k("snapshot_required");return}if(this.#U(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(i=>i.sequence>=s),this.#k("gap");return}this.#q(n),s+=1}}#ue(t){let e=q(t),s=e?.code,n=e?.status??e?.statusCode;return s==="unauthorized"||s==="not_authorized"||s==="auth_invalid"||n===401||n===403}#M(t){this.#w!==null||this.#a||(this.#w=t,this.#A=performance.now())}#J(t){let e=this.#w,s=this.#A;this.#w=null,this.#A=null,!(e===null||s===null||this.#a)&&this.#g[e].record(t,performance.now()-s)}#m(t,e){this.#O!==t||this.#a||t.generation!==this.#u||(this.#O=null,this.#W.record(e,performance.now()-t.startedAt))}#z(){let t=this.#O;t!==null&&(this.#O=null,!this.#a&&t.generation===this.#u&&this.#W.record("aborted",performance.now()-t.startedAt))}#K(){this.#z(),this.#J("failed"),this.#u+=1,this.#s||(this.#s=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#h=!1),this.#d.clear(),this.#l=[],this.#x=!1,this.#v=null,this.#C=0,this.#E=!1,this.#b=!1,this.#y||this.#$(Be)}#$(t){this.#a||this.#c!==null||this.#h||(this.#c=window.setTimeout(()=>{if(this.#c=null,!this.#a){if(this.#o){this.#h=!0;return}this.#V(!0,!0)}},t))}#Z(t){this.#t.onError?.(t instanceof Error?t:new Error("Workspace transport failed"))}};var Ke=class{#e;#t;#r=document.visibilityState!=="hidden";#n=!1;#a=!1;#i=!1;constructor({onSuspend:t,onResume:e}){this.#e=t,this.#t=e}get active(){return this.#r}start(){this.#n||this.#a||(this.#n=!0,window.addEventListener("pagehide",this.#o),window.addEventListener("pageshow",this.#s),document.addEventListener("visibilitychange",this.#h),document.visibilityState==="hidden"&&(this.#r?this.#u(!1):this.#e()))}dispose(){this.#a||(this.#a=!0,this.#n&&(window.removeEventListener("pagehide",this.#o),window.removeEventListener("pageshow",this.#s),document.removeEventListener("visibilitychange",this.#h)))}#o=()=>{this.#i=!0,this.#u(!1)};#s=t=>{if(this.#i=!1,t.persisted){document.visibilityState==="hidden"?this.#u(!1):(this.#u(!1),this.#u(!0));return}this.#y()};#h=()=>{this.#y()};#y(){if(this.#i||document.visibilityState==="hidden"){this.#u(!1);return}this.#u(!0)}#u(t){this.#r===t||this.#a||(this.#r=t,t?this.#t():this.#e())}};var m=(o,t,e=null)=>({status:o,value:t,problem:e}),ye=o=>o.status==="loading"?m("idle",o.value):o,z=o=>o instanceof DOMException&&o.name==="AbortError",Mn={notice:M,parseSavedPlanId:Zt,BackendError:x,isAbort:z,canEditCoordinates:et,initialWorkspaceState:K,draftForPlan:Ze,hasStoppableWork:Re},U=(o,t)=>o instanceof x||o&&typeof o=="object"&&"code"in o&&typeof o.code=="string"?o.code:t,I={stopUnconfirmed:M("error","v4_notice_stop_unconfirmed","Home Assistant can't confirm the robot stopped, so press Stop again if it's still moving."),actionUnconfirmed:M("error","v4_notice_action_unconfirmed","Home Assistant can't confirm that command, so check the robot before trying again."),mapChanged:M("info","v4_notice_map_changed","The map changed, so choose what to clean again."),statusRefreshed:M("info","v4_notice_status_refreshed","Status refreshed, so check the robot before trying again."),planSaveFailed:M("error","v4_notice_plan_save_failed","Home Assistant can't confirm the plan was saved, so check your plans, then try again."),planDeleteFailed:M("error","v4_notice_plan_delete_failed","The plan wasn't deleted; try again."),planPreviewMissing:M("warning","v4_notice_plan_preview_missing","The next-run preview isn't ready; reload your plans, then try again."),planRemoved:M("warning","v4_notice_plan_removed","This plan was removed elsewhere, so nothing was changed."),planPreviewRefreshFailed:M("warning","v4_notice_plan_preview_refresh_failed","The next-run preview didn't refresh; check the plan, then try again."),planPreviewNone:M("warning","v4_notice_plan_preview_none","This plan has no next-run preview; review its rooms and schedules."),planPreviewChanged:M("info","v4_notice_plan_preview_changed","The next run changed; check it before you run the plan."),roomPreviewBlocked:M("warning","v4_notice_room_preview_blocked","A room can't use these settings, so check the note above the rooms."),roomPreviewChanged:M("info","v4_notice_room_preview_changed","The room settings changed, so check them and start again."),roomPreviewFailed:M("warning","v4_notice_room_preview_failed","Home Assistant couldn't check the room settings, so try starting again."),areaRemoved:M("warning","v4_notice_area_removed","This saved area was removed elsewhere. Your edits are kept as a new draft; saving will create a new area."),areaSaveFailed:M("error","v4_notice_area_save_failed","Home Assistant can't confirm the area was saved, so try again."),areaDeleteFailed:M("error","v4_notice_area_delete_failed","Home Assistant can't confirm the area was deleted, so try again."),resetMopFailed:M("error","v4_notice_reset_mop_failed","Mopping progress wasn't reset; try again."),resetVacuumFailed:M("error","v4_notice_reset_vacuum_failed","Vacuum rotation progress wasn't reset; try again.")},Pn=o=>M("warning","v4_notice_saved_map","Showing the saved map from {date} without the robot's position.",{date:{date:o}}),Gs={coverage_identity_unavailable:M("error","v4_notice_coverage_task_unknown","Home Assistant can't confirm the current clean, so check the robot first."),coverage_activity_unavailable:M("error","v4_notice_coverage_activity_unknown","Home Assistant can't confirm whether the robot is cleaning, so check it first."),coverage_native_session_active:M("error","v4_notice_coverage_robot_busy","The robot is already cleaning, so wait for it to finish."),coverage_identity_changed:M("error","v4_notice_coverage_task_changed","The clean changed while starting, so check the robot first.")},xn=o=>{let{translation_domain:t,translation_key:e}=o??{};return t==="matic_robot"&&typeof e=="string"&&Object.hasOwn(Gs,e)?Gs[e]??null:null},ue=o=>[o.selectedFloorOrdinal??"none",o.mapFloorOrdinal??"none",o.mapFloorCoherent?"coherent":"transition"].join(":"),he=o=>[o.mapFloorOrdinal??"none",o.mapSessionVerified?"verified":"unverified",o.mapSessionKey??"no-session"].join(":"),F=o=>[o.entryId,o.selectedFloorOrdinal??"none",o.mapFloorOrdinal??"none"].join("|"),T=o=>[o.entryId,ue(o),he(o)].join("|"),vt=o=>[T(o),o.mapRevision].join("|"),Ue=o=>o.runnerLocked||o.stopSettlePending||o.activePlan||o.nativeReconciliationPending||o.nativeSessionActive===!0,Ve=(o,t)=>o.entryKey===t.entryKey&&o.generation===t.generation&&o.floorKey===t.floorKey&&o.missionKey===t.missionKey,Tn=1e3,An=5e3,Qs=["rooms","plans","plan","draw","areaReview"],Js=["plan-mutation","area-mutation"],Zs=o=>JSON.stringify({...o,previewToken:void 0}),je=(o,t)=>o.label?o.label:o.active?"Current floor":`Saved floor ${o.ordinal??t}`,Ye=class{#e;#t;#r;#n;#a=new He;#i=null;#o=new Map;#s=null;#h=null;#y=null;#u=null;#E=0;#b=!1;#f=!1;#p=!1;#c=!1;#v=null;#C=Promise.resolve();#x=!1;#R=!1;#_="";#d=null;#T=0;#S=null;#I="";#l=!1;#W=!0;#g=null;#O=null;#w=null;#A=null;#B="";#U=!1;#ce=null;#q;#N;workspaceDiagnostics(){return this.#g?.diagnostics()??null}constructor(t,e,s=null,n){this.#e=t,this.#t=new Lt(t.value.generation),this.#r=e,this.#q=s,this.#N=n,this.#n=new Ke({onSuspend:()=>this.#de(),onResume:()=>{this.#k()}}),this.#e.patch({pageActive:this.#n.active}),this.#A=t.subscribe(i=>{this.#F(i),this.#re()}),this.#n.start()}#de(){this.#z(!1,Js),this.#Y(),this.#L(Js),this.#p=!1,this.#c=!1,this.#v=null,this.#R=!1,this.#we();let t=this.#e.value;this.#e.patch({resources:{...t.resources,catalog:ye(t.resources.catalog),scene:ye(t.resources.scene),history:ye(t.resources.history),plans:ye(t.resources.plans),areas:ye(t.resources.areas),pose:m("idle",null)}})}async#k(){if(this.#l||!this.#n.active)return;this.#e.patch({pageActive:!0});let t=this.#s;if(this.#l||!this.#n.active||!t?.host.connected||!t.host.administrator||!t.host.robotConnected||t.host.robotCount===0)return;let e=this.#e.value;this.#ee(),this.#M(t),await this.refreshCatalog(!0,!0);let s=this.#e.value,n=s.resources.entry;if(this.#l||!this.#n.active||e.dataMode!=="history"||s.generation!==e.generation||s.dataMode!=="history"||s.selection.entryId!==e.selection.entryId||s.selection.floorId!==e.selection.floorId||s.selection.historyId!==e.selection.historyId||s.resources.catalog.status!=="ready"||!n||n.entryId!==s.selection.entryId)return;let i=s.resources.history.value?.floors.find(u=>u.id===s.selection.floorId),r=i?.snapshots.find(u=>u.id===s.selection.historyId);if(!i)return;let a=this.#t.begin(n.entryId,i.id,r?.id??i.id,r?.revision??0);if(this.#e.patch({generation:a.generation}),await this.#ae(n,a),!this.#t.accepts(a)||!this.#n.active||this.#e.value.resources.history.status!=="ready")return;let l=this.#e.value,d=l.resources.history.value?.floors.find(u=>u.id===i.id),c=d?.snapshots.find(u=>u.id===r?.id);!d||r&&!c||(c&&c.revision!==a.revision&&(a=this.#t.begin(n.entryId,i.id,c.id,c.revision)),this.#e.patch({generation:a.generation,coherence:"current"}),c&&(!l.resources.scene.value||c.revision!==r?.revision)&&await this.#be(c,a))}#F(t){if(!t.owner)return;let e={version:4,view:t.view,appearance:t.appearance,labels:t.labelsVisible,quality:t.quality,cameras:t.cameras},s=this.#i;this.#i=e,!(!s||s.view===e.view&&s.appearance===e.appearance&&s.labels===e.labels&&s.quality===e.quality&&s.cameras===e.cameras)&&this.#a.schedule(e)}#X(t){let e=At(t),s=t.resources.entry,n=this.#s?.vacuumEntityId;if(!e||!s||!n||!t.selection.entryId||t.workflow!=="rooms"||t.dataMode!=="live"||t.floor.readOnly||t.coherence!=="current"||!t.host.connected||!t.host.administrator||!t.host.robotConnected||t.command!=="idle"||t.resources.plans.status!=="ready")return null;let i=t.selection.roomIds.map(r=>{let a=t.selection.roomSettings.find(l=>l.roomId===r);return a?{room:r,cleaning_mode:a.cleaningMode,coverage_setting:a.coverageSetting}:null});return i.some(r=>r===null)?null:{key:e,generation:t.generation,retryRevision:t.manualRoomPreviewRetry,floorKey:ue(s),missionKey:he(s),entryId:t.selection.entryId,entityId:n,rooms:i,overrideRoomSchedule:!t.selection.useRoomSchedule}}#V(t){return JSON.stringify([t.key,t.generation,t.retryRevision,t.floorKey,t.missionKey,t.entryId,t.entityId])}#j(t){let e=this.#X(this.#e.value);return!this.#l&&e!==null&&this.#V(e)===this.#V(t)}#re(){if(this.#l||!this.#s)return;let t=this.#e.value,e=this.#X(t);if(!e){this.#o.get("room-preview")?.abort(),this.#o.delete("room-preview"),this.#B="",(t.manualRoomPreview.status!=="idle"||t.manualRoomPreview.value!==null)&&this.#e.patch({manualRoomPreview:m("idle",null)});return}let s=this.#V(e),n=Je(t);if(n&&n.key===e.key&&n.generation===e.generation&&n.floorKey===e.floorKey&&n.missionKey===e.missionKey&&n.preview.entryId===e.entryId){this.#B=s;return}if(this.#B===s)return;this.#o.get("room-preview")?.abort(),this.#B=s;let i=this.#P("room-preview");this.#e.patch({manualRoomPreview:m("loading",null)}),this.#ue(e,i)}async#ue(t,e){try{let s=await this.#r.previewRoomSequence(t.entityId,t.rooms,t.overrideRoomSchedule,e.signal);return!this.#j(t)||e.signal.aborted||s.entryId!==t.entryId?null:(this.#e.patch({manualRoomPreview:m("ready",{key:t.key,generation:t.generation,floorKey:t.floorKey,missionKey:t.missionKey,preview:s})}),s)}catch(s){return z(s)||e.signal.aborted||!this.#j(t)||this.#e.patch({manualRoomPreview:m("error",null,U(s,"preview-unavailable"))}),null}finally{this.#D("room-preview",e)}}sync(t){if(this.#l)return;let e=this.#g,s=this.#s?.host.robotConnected??null,n=this.#s?.host.administrator===!1&&t.host.administrator,i=this.#s!==null&&!this.#s.host.robotConnected&&t.host.robotConnected,r=this.#e.value.owner,a=r!==null&&(r.entryKey!==t.entryKey||r.userKey!==t.userKey);a&&(this.#ne("context-changed",t.entryKey),this.#b&&(this.#p=!0,this.#c=!1,this.#v=null));let l=this.#W;this.#W=t.host.connected,this.#s=t,this.#M(t),i&&e&&e===this.#g&&e.notifyReconnect();let d=t.userKey!==this.#I?this.#a.load(t.userKey):null;if(d&&(this.#I=t.userKey,this.#i=d),this.#e.patch({owner:{userKey:t.userKey,entryKey:t.entryKey},host:t.host,activity:t.activity,batteryPercent:t.batteryPercent,robotLabel:t.robotLabel,robots:t.robots,locale:t.language,selection:{...this.#e.value.selection,entryId:t.entryKey},...d?{view:d.view,appearance:d.appearance,labelsVisible:d.labels,quality:d.quality,cameras:d.cameras}:{}}),!t.host.administrator){this.#Y(),this.#ne("access-required",t.entryKey);return}if(!t.host.connected){l&&(this.#e.patch({generation:this.#t.invalidate()}),this.#$(),this.#_=""),this.#Y(),this.#p=!1,this.#c=!1,this.#v=null,this.#R=!1,this.#L();let c=this.#e.value,u=c.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...c.resources,catalog:c.resources.catalog.status==="loading"?m("idle",c.resources.catalog.value):c.resources.catalog,plans:c.resources.plans.status==="loading"?m("idle",c.resources.plans.value):c.resources.plans,areas:c.resources.areas.status==="loading"?m("idle",c.resources.areas.value):c.resources.areas,pose:m("idle",null)},map:{...c.map,available:u!==null,exactPose:!1}});return}if(t.host.robotCount===0){this.#Y(),this.#ne("map-unavailable",t.entryKey);return}if(t.entryKey&&!t.vacuumEntityId){this.#Y(),this.#ne("no-loaded-robot",t.entryKey);return}if(!t.host.robotConnected){s!==!1&&(this.#z(),this.#L(),this.#p=!1,this.#c=!1,this.#v=null,this.#R=!1),this.#Y();let c=this.#e.value,u=c.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...c.resources,catalog:c.resources.catalog.status==="loading"?m("idle",c.resources.catalog.value):c.resources.catalog,scene:c.resources.scene.status==="loading"?m("idle",u):c.resources.scene,pose:m("idle",null)},map:{...c.map,available:u!==null,exactPose:!1}});return}if(this.#n.active){if(this.#ee(),!l||i||n){this.refreshCatalog(!0,!0);return}(a||this.#e.value.resources.catalog.status==="idle"||t.entryKey&&t.entryKey!==this.#e.value.selection.entryId)&&this.refreshCatalog(!0)}}#M(t){let e=t.entryKey,s=this.#e.value,n=s.resources.catalog.value?.find(l=>l.entryId===e),i=s.resources.entry;if(!(this.#N??!!(n?.liveWorkspaceTransportEnabled&&i?.entryId===e&&i.liveWorkspaceTransportEnabled))||!this.#q||!t.host.administrator||!t.host.connected||!t.vacuumEntityId||!e||!this.#n.active){this.#we();return}if(this.#g&&this.#O===e)return;this.#g?.dispose(),this.#w=null;let a=new Fe(this.#q,{entryId:e,onEvent:l=>{if(!(this.#l||!this.#n.active||this.#g!==a||this.#O!==e||this.#s?.entryKey!==e)){if(l.type==="resync"&&l.reason==="entry_removed"){a.dispose(),this.#g===a&&(this.#g=null,this.#O=null,this.#w=null);return}if(l.type==="snapshot"){let{snapshot:d}=l,c=this.#e.value.resources.entry,u=d.payload.entry;if(d.entry_id!==e||d.identity.entry_id!==e)return;if(u&&(u.entryId!==e||d.identity.floor_verified!==(u.mapFloorCoherent&&u.mapSessionVerified))){a.requestResync("invalid_message");return}let p=!u&&c?.entryId===e&&d.identity.floor_verified!==(c.mapFloorCoherent&&c.mapSessionVerified);if(d.status.reason==="authorization"){this.#w=null,this.#K(e,["plans","areas","history"]);return}let h=this.#w,f=[],y=h!==null&&h.epoch!==d.epoch;if(h&&h.epoch===d.epoch){let S=new Set([...Object.keys(h.revisions),...Object.keys(d.revisions)]),b=[...S].some(C=>(d.revisions[C]??-1)<(h.revisions[C]??-1));if(d.coherence_generation<h.coherenceGeneration||d.coherence_generation===h.coherenceGeneration&&b){a.requestResync("restart");return}f=[...S].filter(C=>(d.revisions[C]??-1)>(h.revisions[C]??-1))}y&&(f=["plans","areas","history"]);let v=h!==null&&(h.epoch!==d.epoch||h.coherenceGeneration!==d.coherence_generation),w=!!(c&&u&&c.entryId===e&&T(c)!==T(u));if(this.#w={entryId:d.entry_id,epoch:d.epoch,sequence:d.sequence,coherenceGeneration:d.coherence_generation,revisions:d.revisions},p){this.#K(e,["plans","areas","history"]);return}if(v||w){this.#K(e,f);return}let _=u!==null&&c?.entryId===e&&this.#m(u);if(h&&f.length){if(d.sequence<=h.sequence){a.requestResync("invalid_message");return}this.#w=h,this.#J({epoch:d.epoch,sequence:d.sequence,coherence_generation:d.coherence_generation,revisions:d.revisions,resources:f},e,a,_)}return}if(l.type==="resync"){this.#w=null,l.reason!=="authorization"&&this.#K(e,["plans","areas","history"]);return}this.#J(l.invalidation,e,a)}}});this.#g=a,this.#O=e,a.start()}#J(t,e,s,n=!1){let i=this.#w;if(!i||i.entryId!==e||this.#g!==s||t.epoch!==i.epoch||t.sequence<=i.sequence)return;let r=t.coherence_generation!==i.coherenceGeneration,l=[...new Set([...Object.keys(i.revisions),...Object.keys(t.revisions)])].some(h=>(t.revisions[h]??-1)<(i.revisions[h]??-1));if(t.coherence_generation<i.coherenceGeneration||!r&&l){s.requestResync("restart");return}let d=new Set(t.resources),c=[...d].some(h=>(t.revisions[h]??-1)>(i.revisions[h]??-1));if(this.#w={...i,sequence:t.sequence,coherenceGeneration:t.coherence_generation,revisions:t.revisions},!c&&!r)return;if(r){this.#K(e,t.resources);return}d.has("scene")&&d.delete("scene");let u=this.#e.value.resources.entry,p=this.#t.current();!u||u.entryId!==e||!p||d.size&&this.#_e(u,p,d,!n)}#m(t){let e=this.#e.value,s=e.resources.entry;if(!s||T(s)!==T(t))return!1;let n=t.mapRevision===s.mapRevision?t:{...t,mapRevision:s.mapRevision},i=e.resources.catalog,r=i.value?.map(u=>u.entryId===n.entryId?n:u),a=n.mapFloorCoherent&&n.mapSessionVerified,l=n.health==="problem"||n.health==="limited",d=this.#d,c=d?.key===T(n)&&this.#oe(d)&&(d.attempt!==null||d.retryTimer!==null);return this.#e.patch({managedLock:Ue(n),coherence:c?"verifying":a?l?"degraded":"current":"verifying",map:{...e.map,available:e.resources.scene.value!==null,complete:n.mapComplete&&!n.mapTruncated,floorCoherent:n.mapFloorCoherent,sessionVerified:n.mapSessionVerified,exactPose:a&&!c?e.map.exactPose:!1},floor:{...e.floor,classifiedCount:Math.max(1,n.historyFloorCount),...c&&e.resources.scene.value?{readOnly:!0}:{}},resources:{...e.resources,entry:n,...r?{catalog:{...i,value:r}}:{}}}),this.#s&&this.#M(this.#s),!0}#z(t=this.#e.value.pageActive,e=[]){let s=this.#t.invalidate();this.#$();let n=this.#e.value;this.#e.patch({generation:s,pageActive:t,coherence:n.resources.scene.value?"verifying":"unavailable",floor:{...n.floor,readOnly:n.floor.readOnly||n.resources.scene.value!==null},map:{...n.map,exactPose:!1}}),this.#d&&this.#pe(this.#d.key),this.#L(["catalog",...e]),this.#_=""}#K(t,e=[]){this.#H(),this.#z(),this.refreshCatalog(!0,!0).then(()=>{if(this.#l||this.#s?.entryKey!==t||!this.#s.host.administrator||!this.#s.host.connected)return;let s=this.#e.value.resources.entry,n=this.#t.current();if(!s||s.entryId!==t||!n)return;let i=new Set(e);i.delete("history"),this.#_e(s,n,i,!1)})}#$(){this.#T+=1,this.#S=null}#Z(t){let e=this.#S,s=this.#t.current();return!!(e&&s&&e.generation===this.#T&&e.stamp.generation===s.generation&&e.entryId===t.entryId&&e.coherenceIdentity===T(t)&&e.deltaUrl===t.deltaUrl&&s.entryKey===t.entryId&&s.floorKey===ue(t)&&s.missionKey===he(t)&&t.mapFloorCoherent&&t.mapSessionVerified&&this.#e.value.dataMode==="live"&&this.#e.value.selection.floorId==="current"&&this.#s?.host.connected&&this.#s.host.robotConnected&&this.#s.host.administrator)}#_e(t,e,s,n=!0){(s.has("plans")||s.has("plan_state"))&&this.loadPlans(),s.has("areas")&&this.loadAreas(),s.has("history")&&this.#ae(t,e),n&&["status","robot_state","activity","plan_state"].some(i=>s.has(i))&&this.refreshCatalog(!0,!0,!0)}#ee(){this.#n.active&&(this.#h===null&&(this.#h=window.setInterval(()=>{this.refreshCatalog()},5e3)),this.#y===null&&(this.#y=window.setInterval(()=>{this.refreshPose()},Tn)))}#Y(){this.#h!==null&&window.clearInterval(this.#h),this.#y!==null&&window.clearInterval(this.#y),this.#h=null,this.#y=null,this.#H()}#H(){let t=this.#d;if(this.#d=null,!t)return;t.attempt?.finishReplacementRead?.(),t.attempt&&(t.attempt.finishReplacementRead=null),t.retryTimer!==null&&window.clearTimeout(t.retryTimer);let e=t.attempt?.controller,s=!!(e&&e===this.#o.get("catalog")&&this.#e.value.resources.catalog.status==="loading");if(e?.abort(),s){let n=this.#e.value.resources;this.#e.patch({resources:{...n,catalog:m("idle",n.catalog.value)}})}this.#v?.state===t&&(this.#p=!1,this.#c=!1,this.#v=null)}#he(t,e){let s=this.#d;s?.key===T(e)&&(s.failedKinds.delete(t),t==="delta"&&this.#te(e),s.failedKinds.size===0&&this.#H())}#te(t){this.#pe(T(t))}#pe(t){let e=this.#d;e?.key===t&&(e.attempt?.finishReplacementRead?.(),e.attempt&&(e.attempt.finishReplacementRead=null))}#me(t,e){let s=T(e),n=this.#d;n?.key!==s&&(this.#H(),n={key:s,failedKinds:new Set,retryTimer:null,attempt:null},this.#d=n),n.failedKinds.add(t),t==="delta"&&this.#te(e),this.#oe(n)&&this.#t.current()&&this.#z(),!n.attempt&&n.retryTimer===null&&(n.failedKinds.size===1&&n.failedKinds.has(t)?this.#Se(n):this.#se(n))}#oe(t){let e=this.#e.value;return t.failedKinds.has("pose")||e.floor.readOnly||!e.map.floorCoherent||!e.map.sessionVerified}#se(t){t.retryTimer!==null||t.failedKinds.size===0||(t.retryTimer=window.setTimeout(()=>{t.retryTimer=null;let e=this.#e.value.resources.entry,s=this.#s?.host;if(this.#d!==t||this.#l||!e||T(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#d===t&&this.#H();return}this.#Se(t)},An))}async#Se(t){if(this.#l||this.#d!==t||t.attempt)return;let e=this.#e.value.resources.entry,s=this.#s?.host;if(!e||T(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#d===t&&this.#H();return}if(this.#o.has("scene")){this.#se(t);return}let n=this.#oe(t);n?this.#t.current()&&this.#z():(this.#$(),this.#o.get("delta")?.abort());let i,r=new Promise(d=>{i=d}),a={generation:this.#t.generation,controller:null,replacementRead:r,finishReplacementRead:i};t.attempt=a;let l={state:t,attempt:a};try{await this.refreshCatalog(!0,!1,!n,l),t.failedKinds.has("delta")&&this.#d===t&&t.attempt===a&&await a.replacementRead}finally{if(this.#d!==t||t.attempt!==a)return;a.finishReplacementRead=null,t.attempt=null,t.failedKinds.size>0&&this.#se(t)}}#G(t){let e=this.#e.value,s=this.#s?.host;return!this.#l&&this.#n.active&&this.#d===t.state&&t.state.attempt===t.attempt&&t.attempt.generation===this.#t.generation&&e.generation===this.#t.generation&&e.dataMode==="live"&&e.selection.floorId==="current"&&e.resources.entry!==null&&T(e.resources.entry)===t.state.key&&!!(s?.connected&&s.administrator&&s.robotConnected&&s.robotCount>0)}#P(t){this.#o.get(t)?.abort();let e=new AbortController;return this.#o.set(t,e),e}#D(t,e){this.#o.get(t)===e&&this.#o.delete(t)}#L(t=[]){let e=!1;for(let[s,n]of this.#o)t.includes(s)||(e||=s==="plan-mutation"||s==="area-mutation"||s==="plan-preflight",n.abort(),this.#o.delete(s));e&&this.#e.value.command==="pending"&&this.#e.patch({command:"idle",notice:null})}#ge(){this.#E+=1,this.#u!==null&&window.clearTimeout(this.#u),this.#u=null}#ne(t,e=null){this.#H(),this.#ge(),this.#t.invalidate(),this.#$(),this.#_="";let s=this.#t.generation;this.#L();let n=this.#e.value,i=K();this.#e.patch({command:"idle",dataMode:i.dataMode,floor:i.floor,managedLock:!1,workflow:"none",dialog:null,notice:null,draftFloorOrdinal:null,draw:i.draw,planDraft:i.planDraft,areaDraft:i.areaDraft,generation:s,coherence:n.host.administrator?"unavailable":"blocked",fullMap:!1,precisionOpen:!1,resources:{catalog:m("error",null,t),entry:null,scene:m("idle",null),pose:m("idle",null),history:m("idle",null),plans:m("idle",null),areas:m("idle",null)},manualRoomPreview:m("idle",null),map:{available:!1,complete:!1,floorCoherent:!1,sessionVerified:!1,exactPose:!1},selection:{...i.selection,entryId:e,entrySource:n.selection.entrySource,floorId:"current",historyId:null}})}async refreshCatalog(t=!1,e=!1,s=!1,n=null){if(this.#l||!this.#n.active||!this.#s?.host.administrator||!this.#s.host.connected||this.#s.host.robotCount===0||n&&(!this.#s.host.robotConnected||!this.#G(n)))return;if(this.#b)return t&&(this.#f?e&&(this.#p?this.#c&&=s:this.#c=s,this.#p=!0):(this.#p?this.#c&&=s:this.#c=s,this.#p=!0,this.#o.get("catalog")?.abort()),n&&(this.#p?this.#c&&=s:this.#c=s,this.#v=n,this.#p=!0)),this.#C;this.#b=!0,this.#f=t;let i;this.#C=new Promise(l=>{i=l});let r=this.#P("catalog");n&&(n.attempt.controller=r);let a=this.#e.value.resources.catalog.value;this.#e.patch({resources:{...this.#e.value.resources,catalog:m("loading",a)}});try{let l=await this.#r.catalog(r.signal);if(r.signal.aborted||this.#l||n&&!this.#G(n))return;let d=this.#s?.entryKey,c=d?l.find(v=>v.entryId===d)??null:l[0]??null,u=this.#e.value.resources.entry;if(c&&this.#d?.key===T(c)&&(this.#d.attempt!==null||this.#d.retryTimer!==null)&&(!n||!this.#G(n))){this.#e.patch({managedLock:Ue(c),resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:u}});return}let p=!!(c&&u&&T(c)===T(u)&&this.#Z(u));if(c&&u&&F(c)===F(u)&&ue(c)===ue(u)&&he(c)===he(u)&&(p||c.mapRevision<u.mapRevision||!t&&this.#o.has("scene"))&&(c={...c,mapRevision:u.mapRevision}),this.#e.patch({managedLock:c?Ue(c):!1,resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:c}}),this.#s&&this.#M(this.#s),!c){this.#ne("no-loaded-robot",this.#s?.entryKey??null);return}if(this.#e.value.selection.floorId!=="current"||this.#e.value.dataMode!=="live"){n&&this.#te(c);return}let h=vt(c),f=this.#t.current(),y=!!(f&&u&&T(c)===T(u)&&c.mapFloorCoherent&&c.mapSessionVerified);if((!t||s)&&(h===this.#_||y)){let v=this.#e.value,w=c.mapFloorCoherent&&c.mapSessionVerified,_=c.health==="problem"||c.health==="limited";this.#e.patch({coherence:w?_?"degraded":"current":"verifying",map:{...v.map,available:v.resources.scene.value!==null,complete:c.mapComplete&&!c.mapTruncated,floorCoherent:c.mapFloorCoherent,sessionVerified:c.mapSessionVerified,exactPose:w?v.map.exactPose:!1},floor:{...v.floor,classifiedCount:Math.max(1,c.historyFloorCount)}}),w&&this.#e.value.resources.plans.problem==="map-rechecking"&&this.loadPlans(),this.#ye();let S=f;if(S&&y&&(c.mapRevision>S.revision||n!==null)&&(c.mapRevision>S.revision&&(S=this.#t.advance(S,c.mapRevision)),S)){this.#_=h,this.#$();let b=this.#e.value.resources;this.#e.patch({resources:{...b,scene:m("loading",b.scene.value)}}),this.#fe(c,S)}S&&!v.resources.scene.value&&!this.#o.has("history")&&this.#ae(c,S),w&&S&&(v.resources.scene.status==="error"||v.floor.readOnly)&&!this.#o.has("scene")&&this.#fe(c,S);return}this.#_=h,this.#Pe(c,u)}catch(l){if(z(l)||r.signal.aborted||this.#l)return;n&&this.#pe(n.state.key),this.#e.patch({coherence:this.#e.value.resources.scene.value?"degraded":"unavailable",resources:{...this.#e.value.resources,catalog:m("error",a,U(l,"catalog-unavailable"))}})}finally{this.#D("catalog",r),n?.attempt.controller===r&&(n.attempt.controller=null),this.#b=!1;let l=this.#p,d=this.#c,c=this.#v;this.#f=!1;try{l&&!this.#l&&(this.#p=!1,this.#c=!1,this.#v=null,await this.refreshCatalog(!0,!1,d,c))}finally{i()}}}#Pe(t,e){this.#d!==null&&this.#d.key!==T(t)&&this.#H();let s=this.#e.value,n=!!(e&&F(e)===F(t)),i=t.mapFloorCoherent&&t.mapSessionVerified,r=s.draftMapSessionKey??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapSessionKey:null),a=s.draftFloorOrdinal??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapFloorOrdinal:null),l=i?t.mapFloorOrdinal:null,d=i?t.mapSessionKey:null,c=e!==null&&e.entryId!==t.entryId||a!==null&&l!==null&&a!==l||r!==null&&d!==null&&r!==d,u=n&&i&&a===t.mapFloorOrdinal&&r===t.mapSessionKey,p=["catalog"];n&&!c&&p.push("plans","areas"),u&&p.push("plan-mutation","area-mutation");let h=this.#t.begin(t.entryId,ue(t),he(t),t.mapRevision);this.#d?.key===T(t)&&this.#d.attempt&&(this.#d.attempt.generation=h.generation),this.#$(),this.#L(p);let f=e?.entryId===t.entryId?s.resources.scene.value:null,y=f!==null&&(s.floor.readOnly||!n||!i||e?.mapSessionKey!==t.mapSessionKey),v=s.resources.pose.value,w=n&&i&&t.mapSessionKey!==null&&v?.position&&v.mapSessionKey===t.mapSessionKey?v:null;c&&this.#ge();let _=K(),S=t.health==="problem"||t.health==="limited",b=this.#e.value;this.#e.patch({...c?{command:"idle",workflow:"none",dialog:null,precisionOpen:!1,fullMap:!1,draw:_.draw,planDraft:_.planDraft,areaDraft:_.areaDraft,notice:I.mapChanged}:{},draftFloorOrdinal:l??a,draftMapSessionKey:d??r,managedLock:Ue(t),generation:h.generation,coherence:i?S?"degraded":y?"verifying":"current":"verifying",dataMode:"live",resources:{...b.resources,entry:t,scene:m(i?"loading":"idle",f),pose:m(i?"loading":"idle",w),history:m("loading",b.resources.history.value),plans:n&&!c?b.resources.plans:m("idle",null),areas:n&&!c?b.resources.areas:m("idle",null)},map:{available:f!==null,complete:t.mapComplete&&!t.mapTruncated,floorCoherent:t.mapFloorCoherent,sessionVerified:t.mapSessionVerified,exactPose:i&&w!==null&&!y},floor:{classifiedCount:Math.max(1,t.historyFloorCount),displayName:y?s.floor.displayName:t.selectedFloorOrdinal?`Floor ${t.selectedFloorOrdinal}`:"Current floor",readOnly:y},selection:{...b.selection,entryId:t.entryId,floorId:"current",historyId:null,roomIds:c?[]:b.selection.roomIds,roomSettings:c?[]:b.selection.roomSettings,planId:c?null:b.selection.planId,areaId:c?null:b.selection.areaId}}),this.#ae(t,h),i&&this.#e.value.resources.plans.status==="idle"&&this.loadPlans(),this.#ye(),i&&(this.#fe(t,h),this.#ve(t,h))}async#fe(t,e){if(!this.#n.active)return;let s=this.#P("scene");try{let n=await this.#r.scene(t.sceneUrl,t.mapRevision,t.mapFloorCoherent,"live",s.signal);if(!this.#t.accepts(e))return;if(!n.floorCoherent){let d=this.#e.value;this.#e.patch({coherence:"verifying",resources:{...d.resources,scene:m("error",d.resources.scene.value,"map-rechecking"),pose:m("idle",null)},map:{...d.map,available:d.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...d.floor,readOnly:d.resources.scene.value!==null}}),this.#te(t);return}if(n.revision<e.revision||!n.scene)throw new x("scene-unavailable");let i=n.revision===e.revision?e:this.#t.advance(e,n.revision);if(!i)throw new x("scene-unavailable");let r=this.#e.value,a={...r.resources.entry??t,mapRevision:n.revision};this.#_=vt(a),this.#e.patch({coherence:a.health==="problem"||a.health==="limited"?"degraded":"current",resources:{...r.resources,entry:a,scene:m("ready",n.scene)},map:{...r.map,available:!0},floor:{...r.floor,readOnly:!1,displayName:r.resources.history.value?.floors.find(d=>d.active)?.label||(a.selectedFloorOrdinal?`Floor ${a.selectedFloorOrdinal}`:"Current floor")},notice:r.notice?.key==="v4_notice_saved_map"?null:r.notice});let l=this.#e.value.resources.plans;if((l.status==="idle"||l.problem==="map-rechecking")&&this.loadPlans(),this.#ye(),t.deltaUrl&&typeof DecompressionStream=="function"){let d=++this.#T;this.#Re(a,i,n.scene,d)}else this.#he("delta",a)}catch(n){if(z(n)||!this.#t.accepts(e))return;if(n instanceof x&&n.code==="request-timeout"){let l=this.#e.value;this.#e.patch({resources:{...l.resources,scene:m("loading",l.resources.scene.value,"scene-building")}}),window.setTimeout(()=>{this.#l||!this.#t.accepts(e)||this.#e.value.selection.floorId!=="current"||this.#fe(t,e)},250);return}this.#te(t);let i=this.#e.value,r=i.resources.pose.value,a=i.resources.scene.value!==null&&t.mapSessionKey!==null&&r?.position!==null&&r?.mapSessionKey===t.mapSessionKey;this.#e.patch({coherence:"degraded",resources:{...i.resources,scene:m("error",i.resources.scene.value,U(n,"scene-unavailable"))},map:{...i.map,available:i.resources.scene.value!==null,exactPose:a}})}finally{this.#D("scene",s)}}async#Re(t,e,s,n){if(!t.deltaUrl||typeof DecompressionStream!="function")return;let i=t.deltaUrl,r={generation:n,stamp:e,entryId:t.entryId,coherenceIdentity:T(t),deltaUrl:i};if(n!==this.#T||!this.#t.accepts(e))return;this.#S=r;let a=t,l=e,d=s;try{for(;!this.#l&&this.#n.active&&n===this.#T&&this.#t.accepts(l)&&this.#e.value.selection.floorId==="current";){let c=this.#P("delta");try{let u=await this.#r.sceneDelta(i,d,a.mapFloorCoherent,c.signal);if(c.signal.aborted||this.#l||n!==this.#T||!this.#t.accepts(l))return;if(!u.floorCoherent){let f=this.#e.value;this.#e.patch({coherence:"verifying",map:{...f.map,available:f.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...f.floor,readOnly:f.resources.scene.value!==null},resources:{...f.resources,scene:m("error",f.resources.scene.value,"map-rechecking"),pose:m("idle",null)}}),this.#me("delta",a);return}if(u.notModified||!u.scene){this.#he("delta",a),await new Promise(f=>window.setTimeout(f,100));continue}let p=this.#t.advance(l,u.revision);if(!p)return;l=p,r.stamp=p,d=u.scene,a={...a,mapRevision:u.revision},this.#he("delta",a),this.#_=vt(a);let h=this.#e.value;this.#e.patch({resources:{...h.resources,entry:a,scene:m("ready",d)},map:{...h.map,available:!0,floorCoherent:!0}}),this.#ve(a,l)}finally{this.#D("delta",c)}}}catch(c){if(z(c)||this.#l||n!==this.#T||!this.#t.accepts(l))return;this.#me("delta",a)}finally{this.#S===r&&(this.#S=null)}}async#ae(t,e){if(!this.#n.active)return;let s=this.#P("history");try{let n=await this.#r.history(t.historyUrl,s.signal),i=this.#t.current();if(s.signal.aborted||!i||!Ve(e,i)||n.entryId!==t.entryId)return;let r=this.#e.value,a=n.floors.find(c=>c.id===r.selection.floorId),l=!r.selection.historyId||a?.snapshots.some(c=>c.id===r.selection.historyId),d=r.dataMode==="live"?n.floors.find(c=>c.active):a;if(this.#e.patch({resources:{...this.#e.value.resources,history:m("ready",n)},floor:{...this.#e.value.floor,classifiedCount:n.floors.length,...d&&!(r.dataMode==="live"&&r.floor.readOnly)?{displayName:je(d,1)}:{}}}),r.dataMode==="live"&&!r.resources.scene.value){let c=n.floors.flatMap(u=>u.snapshots.map(p=>({floor:u,snapshot:p}))).sort((u,p)=>Date.parse(p.snapshot.createdAt)-Date.parse(u.snapshot.createdAt));for(let u of c){let p;try{p=await this.#r.scene(u.snapshot.sceneUrl,u.snapshot.revision,!0,"history",s.signal)}catch(y){if(z(y)||s.signal.aborted)return;continue}let h=this.#t.current();if(s.signal.aborted||!h||!Ve(e,h)||this.#e.value.resources.scene.value)return;if(!p.scene)continue;let f=this.#e.value;this.#e.patch({floor:{...f.floor,readOnly:!0,displayName:je(u.floor,1)},resources:{...f.resources,scene:m("ready",p.scene),pose:m("idle",null)},map:{...f.map,available:!0,exactPose:!1},notice:Pn(u.snapshot.createdAt)});break}}if(r.dataMode==="history"&&(!a||!l)){let c=a||n.floors.find(p=>p.active)||n.floors[0],u=this.selectFloor(c?.id||"current");!this.#l&&r.workflow==="history"&&this.#e.dispatch({type:"open-workflow",workflow:"history"}),await u}}catch(n){let i=this.#t.current();if(z(n)||s.signal.aborted||!i||!Ve(e,i))return;this.#e.patch({resources:{...this.#e.value.resources,history:m("error",null,U(n,"history-unavailable"))}})}finally{this.#D("history",s)}}async refreshPose(){let t=this.#e.value.resources.entry,e=this.#t.current();!t||!e||this.#e.value.selection.floorId!=="current"||!t.mapFloorCoherent||!t.mapSessionVerified||await this.#ve(t,e)}async#ve(t,e){if(this.#l||!this.#n.active||!this.#W||!this.#s?.host.connected)return;if(this.#x){this.#R=!0;return}this.#x=!0;let s=this.#P("pose");try{let n=await this.#r.pose(t.poseUrl,s.signal),i=this.#t.current(),r=this.#e.value.resources.entry;if(!i||!Ve(e,i)||!r||!this.#e.value.map.floorCoherent)return;if(!n.floorCoherent||n.mapSessionKey===null||n.mapSessionKey!==r.mapSessionKey){this.#e.patch({resources:{...this.#e.value.resources,pose:m("idle",null)},map:{...this.#e.value.map,exactPose:!1}}),this.#me("pose",r);return}this.#he("pose",r);let a=this.#e.value,l=a.resources.pose.value,d=!!(a.map.exactPose&&l?.position&&l.mapSessionKey===r.mapSessionKey);if(n.position===null&&d){this.#e.patch({resources:{...a.resources,pose:m("ready",l)}});return}this.#e.patch({resources:{...a.resources,pose:m("ready",n)},map:{...a.map,exactPose:n.position!==null}})}catch(n){if(z(n)||!this.#t.accepts(e))return;let i=this.#e.value,r=i.resources.pose.value,a=!!(i.map.exactPose&&r?.position&&r.mapSessionKey===i.resources.entry?.mapSessionKey);this.#e.patch({resources:{...i.resources,pose:m("error",a?r:null,U(n,"pose-unavailable"))},map:{...i.map,exactPose:a}})}finally{if(this.#D("pose",s),this.#x=!1,this.#R&&!this.#l&&this.#W&&this.#s?.host.connected&&this.#s.host.administrator&&this.#s.host.robotCount>0){this.#R=!1;let n=this.#e.value.resources.entry,i=this.#t.current();n&&i&&this.#ve(n,i)}else this.#R=!1}}async selectFloor(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;let n=e.floors.find(l=>l.id===t);if(!n&&t!=="current")return;let i=this.#e.value;if(i.workflow==="draw"&&(i.draw.dirty||i.areaDraft.dirty)||i.workflow==="areaReview"&&(i.draw.dirty||i.areaDraft.dirty))return;if(!n||n.active){this.#H(),this.#_="";let l=this.#e.value;this.#e.patch({resources:{...l.resources,plans:m("idle",null),areas:m("idle",null),scene:m("idle",l.resources.scene.value),pose:m("idle",null)},map:{...l.map,available:l.resources.scene.value!==null,exactPose:!1},coherence:"verifying",floor:{...l.floor,readOnly:l.resources.scene.value!==null},workflow:"none",precisionOpen:!1}),this.#e.dispatch({type:"set-floor",floorId:"current"}),await this.refreshCatalog(!0);return}this.#H();let r=n.snapshots.at(-1),a=this.#t.begin(s.entryId,n.id,r?.id||n.id,r?.revision||0);this.#L(["catalog"]),this.#e.patch({generation:a.generation,coherence:"current",dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:je(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:r?.id||null},resources:{...this.#e.value.resources,scene:m(r?"loading":"empty",null),pose:m("idle",null),plans:m("idle",null),areas:m("idle",null)},workflow:"none",precisionOpen:!1,map:{available:!1,complete:!0,floorCoherent:!0,sessionVerified:!0,exactPose:!1}}),r&&await this.#be(r,a)}async selectHistory(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;if(!t){await this.selectFloor("current");return}let n=e.floors.find(a=>a.snapshots.some(l=>l.id===t)),i=n?.snapshots.find(a=>a.id===t);if(!n||!i)return;this.#H();let r=this.#t.begin(s.entryId,n.id,i.id,i.revision);this.#L(["catalog"]),this.#e.patch({generation:r.generation,dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:je(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:i.id},resources:{...this.#e.value.resources,scene:m("loading",null),pose:m("idle",null)},map:{...this.#e.value.map,available:!1,exactPose:!1}}),await this.#be(i,r)}async#be(t,e){if(!this.#n.active)return;let s=this.#P("history-scene");try{let n=await this.#r.scene(t.sceneUrl,t.revision,!0,"history",s.signal);if(!this.#t.accepts(e)||!n.scene)return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("ready",n.scene)},map:{...this.#e.value.map,available:!0,exactPose:!1}})}catch(n){if(z(n)||!this.#t.accepts(e))return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("error",null,U(n,"history-scene-unavailable"))}})}finally{this.#D("history-scene",s)}}async openWorkflow(t){let e=this.#e.value;if((e.dataMode==="history"||e.floor.readOnly)&&Qs.includes(t))return;let s=this.#e.value.workflow;if(t==="draw"&&s!=="draw"&&s!=="areaReview"&&this.selectArea(null),this.#e.dispatch({type:"open-workflow",workflow:t}),Qs.includes(t)&&this.#Ee(),t==="history"){let n=this.#e.value.resources.entry,i=this.#t.current();n&&i&&(this.#e.patch({resources:{...this.#e.value.resources,history:m("loading",this.#e.value.resources.history.value)}}),await this.#ae(n,i))}(t==="plans"||t==="plan"||t==="rooms")&&await this.loadPlans(),(t==="draw"||t==="areaReview")&&await this.loadAreas()}async loadPlans({force:t=!1,inPlace:e=!1,onError:s}={}){let n=!e||this.#e.value.resources.plans.status!=="ready";if(!this.#n.active){this.#o.get("plans")?.abort();let l=this.#e.value.resources;return n&&this.#e.patch({resources:{...l,plans:m("idle",l.plans.value)}}),null}let i=this.#e.value.resources.entry;if(!i||!this.#t.current()||!tt(this.#e.value)||!t&&this.#o.has("plans"))return null;let r=F(i),a=this.#P("plans");n&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("loading",this.#e.value.resources.plans.value)}});try{let l=await this.#r.plans(i.plansUrl,a.signal),d=this.#e.value.resources.entry;if(a.signal.aborted||this.#l||!d||F(d)!==r)return null;let c=this.#e.value;if(c.workflow==="plan"&&c.planDraft.id&&!c.planDraft.dirty&&!l.plans.some(h=>h.id===c.planDraft.id))return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)},workflow:"plans",precisionOpen:!1,selection:{...this.#e.value.selection,planId:null},planDraft:K().planDraft,notice:I.planRemoved}),l;if(c.planDraft.dirty||c.workflow==="plan"&&(!c.planDraft.id||c.command==="pending"))return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)}}),l;let u=c.workflow==="plan"?c.selection.planId:l.selectedPlan||l.plans[0]?.id||null,p=l.plans.find(h=>h.id===u);return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)},selection:{...this.#e.value.selection,planId:u},planDraft:p?Ze(p):{...this.#e.value.planDraft,id:null,name:"",rooms:[],parkedRooms:[],dirty:!1}}),l}catch(l){let d=this.#e.value.resources.entry;if(z(l)||a.signal.aborted||this.#l||!d||F(d)!==r)return null;let c=l instanceof x&&l.code==="map-rechecking"?"map-rechecking":U(l,"plans-unavailable");return n&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("error",this.#e.value.resources.plans.value,c)}}),s?.(),null}finally{this.#D("plans",a)}}selectPlan(t,e=!1,s){this.#e.patch(It(this.#e.value,t,e,s))}setPlanEnabled(t){return this.#ie("plan-mutation",I.planSaveFailed,(e,s)=>e.setPlanEnabled(s,t))}#ye(){let t=this.#e.value;(t.workflow==="draw"||t.workflow==="areaReview")&&t.resources.areas.status==="idle"&&this.loadAreas()}async loadAreas({reconcileDraft:t=!0}={}){if(!this.#n.active){this.#o.get("areas")?.abort();let i=this.#e.value.resources;return this.#e.patch({resources:{...i,areas:m("idle",i.areas.value)}}),null}let e=this.#e.value.resources.entry;if(!e||!this.#t.current()||!tt(this.#e.value))return null;let s=F(e),n=this.#P("areas");this.#e.patch({resources:{...this.#e.value.resources,areas:m("loading",this.#e.value.resources.areas.value)}});try{let i=await this.#r.areas(e.areasUrl,n.signal),r=this.#e.value.resources.entry;if(n.signal.aborted||this.#l||!r||F(r)!==s)return null;if(i.sceneUrl!==r.sceneUrl)throw new x("areas-unavailable");this.#e.patch({resources:{...this.#e.value.resources,areas:m("ready",i)}});let a=this.#e.value.selection.areaId,l=this.#e.value,d=i.areas.some(c=>c.id===a);return t&&a!==null&&!d&&(l.draw.dirty||l.areaDraft.dirty)?this.#e.patch({selection:{...l.selection,areaId:null},areaDraft:{...l.areaDraft,id:null,status:"new",canRebind:!1,dirty:!0},notice:I.areaRemoved}):t&&!l.draw.dirty&&!l.areaDraft.dirty&&this.selectArea(d?a:null),i}catch(i){let r=this.#e.value.resources.entry;return z(i)||n.signal.aborted||this.#l||!r||F(r)!==s||this.#e.patch({resources:{...this.#e.value.resources,areas:m("error",this.#e.value.resources.areas.value,U(i,"areas-unavailable"))}}),null}finally{this.#D("areas",n)}}selectArea(t){this.#e.patch($t(this.#e.value,t))}saveArea(t){return this.#ie("area-mutation",I.areaSaveFailed,(e,s)=>e.saveArea(s),t)}deleteArea(){return this.#ie("area-mutation",I.areaDeleteFailed,(t,e)=>t.deleteArea(e))}savePlan(t){return this.#ie("plan-mutation",I.planSaveFailed,(e,s)=>e.savePlan(s),t)}deletePlan(){return this.#ie("plan-mutation",I.planDeleteFailed,(t,e)=>t.deletePlan(e))}#Ee(){return this.#ce??=import("./catalog-writes-D44AUTSA.js").catch(()=>null)}async#ie(t,e,s,n){let i=n,r=d=>{let c=i;i=void 0,c?.(d)},a=this.#e.value;if(a.command==="pending"||this.#o.has(t))return r(!1);let l=this.#P(t);l.signal.addEventListener("abort",()=>r(!1),{once:!0});try{let d=await this.#Ee(),c=this.#e.value;if(l.signal.aborted||!et(c)||c.command==="pending")return;if(!d){this.#e.patch({notice:e});return}await s(d,{state:a,signal:l.signal,store:this.#e,backend:this.#r,effects:this,helpers:Mn,failure:e,projection:()=>this.#s,disposed:()=>this.#l,release:()=>this.#D(t,l),settled:r})}finally{this.#D(t,l),r(!1)}}async executeAction(t,e){switch(typeof t=="string"?t:t.id){case"recheck-status":{if(this.#e.value.rechecking)return;let n=this.#e.value.selection.entryId;this.#e.patch({rechecking:!0});try{await this.refreshCatalog(!0)}finally{this.#l||this.#e.patch({rechecking:!1})}let i=this.#e.value;!this.#l&&i.selection.entryId===n&&i.resources.catalog.status==="ready"&&i.host.connected&&i.host.robotConnected&&i.coherence==="current"&&i.command==="failed"&&this.#e.patch({command:"idle",notice:I.statusRefreshed});return}case"stop":await this.#le("matic_robot","stop_intelligent_cleaning",{include_unmanaged:!0});return;case"resume":await this.#le("vacuum","send_command",{command:"resume"});return;case"run-plan":{let n=this.#e.value,i=n.selection.planId||n.resources.plans.value?.selectedPlan;if(!i||n.workflow!=="plan"||!n.planDraft.enabled||n.resources.plans.status!=="ready"||n.command!=="idle"||!Se(n))return;let r=n.selection.entryId,a=n.generation,l=n.selection.planId,d=n.planDraft,c=n.resources.plans.value?.plans.find(v=>v.id===i)?.nextRunPreview;if(!c||!/^[0-9a-f]{64}$/u.test(c.previewToken??"")){this.#e.patch({notice:I.planPreviewMissing});return}this.#e.patch({command:"pending",pendingAction:"run-plan",notice:null});let u=this.#P("plan-preflight"),p;try{p=await this.loadPlans({force:!0,inPlace:!0})}finally{this.#D("plan-preflight",u)}let h=this.#e.value,f=()=>{let v=this.#e.value;!this.#l&&v.selection.entryId===r&&v.generation===a&&v.command==="pending"&&this.#e.patch({command:"idle"})};if(u.signal.aborted||this.#l||h.selection.entryId!==r||h.generation!==a||h.workflow!=="plan"||h.selection.planId!==l||(h.selection.planId||h.resources.plans.value?.selectedPlan)!==i||h.planDraft!==d){f();return}if(!p){f(),this.#e.patch({notice:I.planPreviewRefreshFailed});return}let y=p.plans.find(v=>v.id===i)?.nextRunPreview;if(!y||y.blocker||!/^[0-9a-f]{64}$/u.test(y.previewToken??"")){f(),this.#e.patch({notice:I.planPreviewNone});return}if(!c||JSON.stringify(c)!==JSON.stringify(y)){f(),this.#e.patch({notice:I.planPreviewChanged});return}f(),await this.#le("matic_robot","run_selected_plan",{plan:i,preview_token:y.previewToken});return}case"clean-rooms":{await this.#xe();return}case"run-area":{let n=this.#e.value.selection.areaId;n&&await this.#le("matic_robot","clean_area",{area:n});return}case"review-area":this.#e.dispatch({type:"open-workflow",workflow:"areaReview"});return;case"save-area":await this.saveArea(e);return;case"save-plan":this.#e.value.planDraft.id&&!this.#e.value.planDraft.dirty?(this.#e.dispatch({type:"set-plan-view",view:"run"}),e?.(!0)):await this.savePlan(e);return;case"delete-plan":await this.deletePlan();return;case"delete-area":await this.deleteArea();return;case"reset-room-cadence":if(typeof t=="string")return;await this.#ie("plan-mutation",t.mode==="mop"?I.resetMopFailed:I.resetVacuumFailed,(n,i)=>n.resetRoomCadence(i,t));return}}async#xe(){if(this.#U)return;let t=this.#e.value,e=this.#X(t),s=Je(t);if(!e||!s||s.key!==e.key||s.generation!==e.generation||s.floorKey!==e.floorKey||s.missionKey!==e.missionKey||s.preview.entryId!==e.entryId||s.preview.blocker||s.preview.rooms.length===0)return;this.#U=!0;let n=this.#P("room-preview");this.#B=this.#V(e),this.#e.patch({manualRoomPreview:m("loading",null),notice:null});try{let i=await this.#r.previewRoomSequence(e.entityId,e.rooms,e.overrideRoomSchedule,n.signal);if(n.signal.aborted||!this.#j(e)||i.entryId!==e.entryId)return;let r={key:e.key,generation:e.generation,floorKey:e.floorKey,missionKey:e.missionKey,preview:i};if(i.blocker||i.rooms.length===0){this.#e.patch({manualRoomPreview:m("ready",r),notice:I.roomPreviewBlocked});return}if(Zs(s.preview)!==Zs(i)){this.#e.patch({manualRoomPreview:m("ready",r),notice:I.roomPreviewChanged});return}if(this.#e.patch({manualRoomPreview:m("ready",r),notice:null}),!this.#j(e)||!Se(this.#e.value))return;await this.#le("matic_robot","clean_room_sequence",{rooms:e.rooms,use_room_schedule:!0,override_room_schedule:e.overrideRoomSchedule,return_to_base:!0,preview_token:i.previewToken})}catch(i){!z(i)&&!n.signal.aborted&&this.#j(e)&&this.#e.patch({manualRoomPreview:m("error",null,U(i,"preview-unavailable")),notice:I.roomPreviewFailed})}finally{this.#D("room-preview",n),this.#U=!1,this.#re()}}async#le(t,e,s){let n=this.#e.value,i=this.#s?.vacuumEntityId,r=e==="stop_intelligent_cleaning"||t==="vacuum"&&e==="return_to_base",a=t==="vacuum"&&e==="send_command"&&s.command==="resume";if(!i||n.selection.entryId!==this.#s?.entryKey||(r?!qt(n):a?!Wt(n):!Se(n)))return;let l=++this.#E,d=this.#s?.entryKey,c=()=>!this.#l&&l===this.#E&&d===this.#s?.entryKey,u=r?"settling":"starting";this.#u!==null&&window.clearTimeout(this.#u),this.#u=null,this.#e.patch({command:u,notice:null});try{if(await this.#r.service(t,e,s,i),!c())return;if(t==="matic_robot"&&(e==="clean_room_sequence"||e==="run_selected_plan")){this.#e.patch({command:"idle"}),this.refreshCatalog(!0);return}this.#e.patch({command:u}),this.#u!==null&&window.clearTimeout(this.#u),this.#u=window.setTimeout(()=>{this.#u=null,c()&&this.#e.value.command===u&&this.#e.patch({command:"idle"})},15e3)}catch(p){if(!c())return;this.#e.patch({command:"failed",notice:r?I.stopUnconfirmed:xn(p)??I.actionUnconfirmed})}}dispose(){this.#l||(this.#l=!0,this.#n.dispose(),this.#z(!1),this.#A?.(),this.#A=null,this.#e.patch({manualRoomPreview:m("idle",null),rechecking:!1}),this.#Y(),this.#L(),this.#u!==null&&window.clearTimeout(this.#u),this.#u=null,this.#a.dispose(),this.#we(),this.#r.dispose())}#we(){this.#g?.dispose(),this.#g=null,this.#O=null,this.#w=null}};var In=o=>o.workflow==="none"?0:o.workflow!=="plan"?1:o.planView==="edit"&&o.planDraft.id!==null?3:2,yt=o=>In(o)+(o.fullMap?1:0)+(o.precisionOpen?1:0)+(o.dialog?1:0),Xe=o=>{if(!o||typeof o!="object")return null;let t=o.maticMapLayer;if(!t||typeof t!="object")return null;let e=t.owner,s=t.depth;return typeof e=="string"&&Number.isInteger(s)&&Number(s)>=0?{owner:e,depth:Number(s)}:null},Ge=class{#e;#t=`matic-map-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}`;#r=0;#n=0;#a=!1;#i=null;#o=!1;constructor(t){this.#e=t}start(){if(this.#i)return;this.#r=yt(this.#e.value);let t=Xe(history.state);this.#n=t?.owner===this.#t?t.depth:0,this.#i=this.#e.subscribe(e=>this.#s(e)),window.addEventListener("popstate",this.#h)}#s(t){let e=yt(t);if(this.#o){this.#o=!1,this.#r=e;return}if(e<this.#r&&Xe(history.state)?.owner===this.#t&&this.#n>e){let n=e-this.#n;this.#r=e,this.#n=e,this.#a||(history.go(n),this.#a=!0);return}if(e>this.#n)for(let s=this.#n+1;s<=e;s+=1){let n=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...n,maticMapLayer:{owner:this.#t,depth:s}},"",window.location.href),this.#n=s}this.#r=e}#h=()=>{let t=Xe(history.state);this.#a=!1,this.#n=t?.owner===this.#t?t.depth:0;let e=yt(this.#e.value);if(this.#n>e){let s=e-this.#n;this.#n=e,history.go(s),this.#a=!0;return}if(this.#e.value.dialog==="discardDraft"&&this.#e.value.command==="pending"){let s=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...s,maticMapLayer:{owner:this.#t,depth:this.#r}},"",window.location.href),this.#n=this.#r;return}if(!(e<=this.#n)){if(ie(this.#e.value,{type:"dismiss-top-layer"})){let s=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...s,maticMapLayer:{owner:this.#t,depth:this.#r}},"",window.location.href),this.#n=this.#r,this.#e.dispatch({type:"open-dialog",dialog:"discardDraft"});return}this.#o=!0,this.#e.dispatch({type:"dismiss-top-layer"})}};dismissTop(){return this.#r<1?!1:this.#a?(this.#e.dispatch({type:"dismiss-top-layer"}),!0):(Xe(history.state)?.owner===this.#t&&this.#n===this.#r?(history.back(),this.#n=this.#r-1,this.#a=!0):this.#e.dispatch({type:"dismiss-top-layer"}),!0)}dispose(){this.#i?.(),this.#i=null,window.removeEventListener("popstate",this.#h),this.#r=0,this.#n=0,this.#a=!1}};var gt=[Me,Pe,ns,Ee`
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
      grid-template-columns: minmax(0, 1fr);
      grid-auto-flow: column;
      grid-auto-columns: auto;
      gap: var(--ms-space-3);
      align-items: center;
      inline-size: fit-content;
      max-inline-size: calc(100% - 1.5rem);
      padding: var(--ms-space-3);
      background: var(--ms-local);
    }
    .hud-exit { gap: var(--ms-space-1); }
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
    .narrow .draw-tools--grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)) auto; gap: var(--ms-space-1); padding: 0; }
    .narrow .draw-tools--grid[data-zone="true"] { grid-template-columns: repeat(12, minmax(0, 1fr)); }
    .narrow .draw-tools--grid .ms-btn {
      flex-direction: column;
      gap: var(--ms-space-1);
      min-inline-size: var(--ms-control);
      min-block-size: var(--ms-control);
      padding: var(--ms-space-1);
      border-color: var(--ms-line);
      font-size: var(--ms-t-xs);
    }
    .narrow .draw-tools--grid[data-zone="true"] .ms-btn { grid-column: span 4; }
    .narrow .draw-tools--grid[data-zone="true"] .ms-btn[data-tool] { grid-column: span 3; }
    @media (max-width: 359px), (max-height: 479px) {
      .narrow .draw-tools--grid .ms-btn__label { position: absolute; overflow: hidden; inline-size: 1px; block-size: 1px; clip-path: inset(50%); }
    }
    @media (max-height: 479px) {
      .narrow .draw-tools--grid, .narrow .draw-tools--grid[data-zone="true"] { display: flex; overflow-x: auto; }
      .narrow .draw-tools--grid .ms-btn { flex: none; inline-size: var(--ms-control); padding-inline: 0; }
    }
    .sr-only { position: absolute; overflow: hidden; inline-size: 1px; block-size: 1px; clip-path: inset(50%); white-space: nowrap; }
    .narrow .sheet-panel { display: flex; flex: 1; flex-direction: column; min-block-size: 0; }
    .narrow .panel-top { max-block-size: 50%; padding-block-start: var(--ms-space-1); overflow: auto; overscroll-behavior: contain; }
    .narrow .sheet-body { flex: 1; min-block-size: 0; padding-block-end: var(--ms-space-1); overflow: auto; overscroll-behavior: contain; }
    .narrow .mobile-sheet .action-bar { flex: none; margin-block-start: 0; padding-block-start: var(--ms-space-2); }
    .narrow .title { font-size: var(--ms-t-md); }
    .narrow .context-switcher { max-inline-size: 7rem; }
    .narrow .robot-switcher { flex: 1 1 auto; min-inline-size: 0; max-inline-size: none; }
    .narrow .full-map-hud { inset-inline-start: var(--ms-space-3); inset-block-end: max(var(--ms-space-3), var(--ms-safe-bottom)); inline-size: auto; max-inline-size: none; }
    .narrow .hud-exit { min-inline-size: var(--ms-control); padding-inline: var(--ms-space-2); }
    .narrow .hud-exit .ms-btn__label { position: absolute; overflow: hidden; inline-size: 1px; block-size: 1px; margin: -1px; clip-path: inset(50%); white-space: nowrap; }
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
  `];var en=re(xe),tn=re(Nt),sn=re(st),On=o=>o.dataMode==="history"||o.floor.readOnly,bt=(o,t)=>{let e=(a,l,d)=>Ie(t,a,l,d);if(!o.host.connected)return{title:e("v4_reconnecting","Reconnecting"),detail:e("v4_ha_offline","Home Assistant is offline"),icon:j,notable:!0};if(!o.host.administrator)return{title:e("v4_access_required","Access required"),detail:e("v4_admin_only","Administrator only"),icon:j,notable:!0};if(o.host.robotCount===0)return{title:e("v4_no_robot_short","No robot"),detail:e("v4_set_up_robot","Set up a robot"),icon:j,notable:!0};if(_e(o))return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),detail:e("v4_choose_another_robot","Choose another robot to open its map."),icon:j,notable:!0};if(!o.host.robotConnected)return{title:e("v4_robot_offline","Robot offline"),detail:e("v4_last_map_read_only","Last known map \xB7 read only"),icon:j,notable:!0};if(o.activity==="problem")return{title:e("v4_needs_attention","Needs attention"),detail:e("v4_check_robot","Check the robot"),icon:j,notable:!0};if(o.dataMode==="history"){let a=o.resources.history.value?.floors.find(c=>c.id===o.selection.floorId),l=a?.snapshots.findIndex(c=>c.id===o.selection.historyId)??-1,d=a?.snapshots.length??0;return{title:e("v4_saved_map","Saved map"),detail:l>=0?e("v4_read_only_position","Read only \xB7 {position} of {count}",{position:l+1,count:d}):e("v4_read_only","Read only"),icon:ot,notable:!1}}if(o.coherence==="verifying"||o.coherence==="booting")return{title:e("v4_locating","Locating"),detail:e("v4_finding_map","Finding the current map"),icon:le,notable:!0};if((o.resources.entry?.activePlan||o.resources.entry?.runnerLocked)&&(o.activity==="idle"||o.activity==="docked"))return{title:e("v4_task_in_progress","Run in progress"),detail:o.coherence==="unavailable"||o.coherence==="blocked"?e("v4_task_map_unavailable","The live map is unavailable; the current clean continues."):o.activity==="docked"?e("v4_task_docked","Robot docked; the clean has not finished."):e("v4_task_waiting","Waiting for the clean to continue or finish."),icon:Ae,notable:!0};if(o.command==="starting"&&(o.activity==="idle"||o.activity==="docked"))return{title:e("v4_action_starting","Starting"),detail:e("v4_action_starting_detail","Waiting for the robot to begin"),icon:le,notable:!0};let s=o.coherence==="unavailable"||o.coherence==="blocked",n=e("v4_active_map_unavailable","The live map is unavailable; new cleaning is disabled."),i=a=>s?`${a} \xB7 ${n}`:a;if(o.activity==="cleaning")return{title:e("v4_cleaning","Cleaning"),detail:i(e("v4_cleaning_progress","Cleaning in progress")),icon:lt,notable:!0};if(o.activity==="recharging"){let a=o.batteryPercent===null?e("v4_recharging_detail","Will resume automatically when ready"):e("v4_battery","{percent}% battery",{percent:o.batteryPercent});return{title:e("v4_recharging","Charging to resume"),detail:i(a),icon:hs,notable:!0}}if(o.activity==="paused")return{title:e("v4_paused","Paused"),detail:i(e("v4_can_resume","Cleaning can resume")),icon:ct,notable:!0};if(o.activity==="returning")return{title:e("v4_returning","Returning"),detail:i(e("v4_going_dock","Going to the dock")),icon:lt,notable:!0};if(o.activity==="stopping")return{title:e("v4_stopping","Stopping"),detail:i(e("v4_waiting_robot","Waiting for the robot")),icon:ct,notable:!0};if(s)return{title:e("v4_map_unavailable","Map unavailable"),detail:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start."),icon:j,notable:!0};if(o.coherence==="degraded")return{title:e("v4_map_limited","Map limited"),detail:o.rechecking?e("v4_locating_rechecking","Checking again"):e("v4_cleaning_blocked","Cleaning can't start"),icon:le,notable:!0,recheck:!0};let r=o.batteryPercent===null?e("v4_ready","Ready"):e("v4_battery","{percent}% battery",{percent:o.batteryPercent});return{title:o.activity==="docked"?e("v4_docked","Docked"):e("v4_ready","Ready"),detail:r,icon:le,notable:!1}},wt=o=>o.resources.plans.status==="ready"?o.resources.plans.value:null,on=o=>{let{host:t}=o;return t.connected?t.administrator?t.robotCount===0?"setup":_e(o)?"robot-unavailable":t.robotConnected?On(o)?"read-only":o.activity==="problem"?"problem":Re(o)&&o.activity!=="paused"||o.activity==="stopping"||o.command==="settling"||o.resources.entry?.stopSettlePending===!0?"busy":o.activity==="paused"?"paused":o.coherence==="unavailable"||o.coherence==="blocked"?"map-unavailable":o.coherence==="degraded"?"map-limited":o.coherence==="verifying"||o.coherence==="booting"?"locating":"ready":"offline":"administrator":"reconnecting"},$n=(o,t,e)=>{switch(o){case"ready":return{title:e("v4_what_to_clean","Choose what to clean"),description:""};case"locating":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_reason_locating","Waiting for the robot to confirm which floor it is on.")};case"busy":return{title:e("v4_home_busy_title","The robot is busy"),description:e("v4_home_busy_detail","You can start a new clean when it's done.")};case"paused":return{title:e("v4_home_busy_title","The robot is busy"),description:e("v4_home_paused_detail","Resume or stop this clean before starting a new one.")};case"problem":return{title:e("v4_attention_title","The robot needs attention"),description:e("v4_attention_body","The robot reported a problem. Check it in the Matic app, then start a new clean.")};case"map-unavailable":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start.")};case"map-limited":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_map_limited_body","Home Assistant can show this map but can't confirm it well enough to start cleaning.")};case"offline":return{title:e("v4_robot_offline_title","Robot offline"),description:e("v4_robot_offline_body","Showing the last known map. Cleaning comes back when the robot reconnects.")};case"reconnecting":return{title:e("v4_reconnecting_title","Reconnecting to Home Assistant"),description:e("v4_reconnecting_body","Cleaning controls come back when Home Assistant reconnects.")};case"administrator":return{title:e("v4_admin_title","Administrator access required"),description:e("v4_admin_body","Ask a Home Assistant administrator to open this map.")};case"robot-unavailable":return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),description:e("v4_choose_another_robot","Choose another robot to open its map.")};case"read-only":return{title:e("v4_saved_map_read_only_title","Saved map is read only"),description:t.dataMode==="live"?e("v4_map_recovery_automatic","Cleaning controls return automatically when the live map is ready."):e("v4_saved_map_read_only_detail","Return to the live map to choose rooms, run a plan, or draw a custom area.")};case"setup":return{title:e("v4_setup_title","Set up your robot"),description:e("v4_no_robot_body","Add the Matic (Unofficial) integration to see a map here.")}}},kt=(o,t)=>{let e=(s,n)=>Ie(t,s,n);switch(o.workflow){case"rooms":return{title:e("v4_choose_rooms","Choose rooms"),description:""};case"draw":return{title:e("v4_draw_area","Draw an area"),description:e("v4_draw_area_detail","Outline or paint the area, then review it before saving.")};case"plans":return{title:e("v4_your_plans","Your plans"),description:o.resources.plans.value?.plans.length===0?"":e("v4_choose_plan_detail","Tap a plan to see its next run.")};case"plan":return{title:o.planView==="run"?o.planDraft.name:o.planDraft.id?e("v4_edit_plan","Edit plan"):e("v4_new_plan","New plan"),description:""};case"areaReview":return{title:e("v4_name_this_area","Name this area"),description:e("area_details_hint","Name the area and choose cleaning settings.")};case"history":return{title:e("v4_map_history","Map history"),description:e("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")};case"support":return{title:e("v4_map_diagnostics","Map diagnostics"),description:e("v4_map_support_detail","Details to share with support")};case"none":return $n(on(o),o,e)}},X=["peek","half","full"],Dn={info:at,success:fs,warning:dt,error:vs},Ln={info:6e3,success:4e3,warning:6e3,error:1e4},Wn={none:"half",rooms:"half",draw:"peek",plan:"half",plans:"half",areaReview:"half",history:"half",support:"full"},nn=o=>o.workflow==="plan"&&o.planView==="edit"?"full":Wn[o.workflow],qn=.5,zn=100,Hn=6,Bn=48,_t=".panel-top, .sheet-body, .workflow-body",Nn=["a[href]","button","input","label","select","textarea","summary",'[contenteditable]:not([contenteditable="false"])','[role="button"]','[role="link"]','[role="slider"]','[role="checkbox"]','[role="radio"]','[role="switch"]','[role="tab"]','[role="menuitem"]',`[tabindex]:not([tabindex="-1"]):not(${_t})`].join(","),an=["button:not(:disabled)","a[href]","input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)","[tabindex]:not([tabindex='-1'])"].join(", "),ln=o=>!!o.querySelector(an)||[...o.querySelectorAll("*")].some(t=>t.shadowRoot!==null&&ln(t.shadowRoot)),rn=(o=document)=>{let t=o.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t},Qe=o=>!!(o&&o.isConnected&&o.offsetParent!==null),St=class extends Ce{constructor(){super();this.state=K();this._measuredNarrow=!1;this._sheetOffset=0;this._helpOpen=!1;this.#t=null;this.#r=!1;this._sheetDetent="half";this._polite="";this._alert="";this.#n=null;this.#a=new Set;this._toast=null;this.#i=new Oe(this,()=>this.#w());this.#o=new Oe(this,async()=>new(await import("./outline-editor-DPDA34GH.js")).OutlineEditor({edgeDistance:Kt,validOutline:Ut}));this.#s=new Oe(this,async()=>new(await this.#w()).MapOptions(this));this.#h=!1;this.#y=gs();this.#E=0;this.#b=0;this.#f=!1;this.#p=!1;this.#c=null;this.#v=null;this.#C=null;this.#x=null;this.#R=null;this.#_=null;this.#d=null;this.#T=null;this.#S=null;this.#I=null;this.#l=null;this.#W=new Set;this.#g=null;this.#O=!1;this.#A=null;this.#B=null;this.#U=()=>{!document.fullscreenElement&&this.state.fullMap&&this.#m({type:"exit-full-map"})};this.#k=()=>{this.#de(),this.#f=!1,this.#p=!1,this._toast=null};this.#F=e=>{e.type==="pointerenter"?this.#f=!0:this.#p=!0,this.#u!==void 0&&(this.#de(),this.#b=Math.max(0,this.#E-Date.now()))};this.#X=e=>{e.type==="pointerleave"?this.#f=!1:e.currentTarget.contains(e.relatedTarget)||(this.#p=!1),this.#N()};this.#V=()=>{this.#k(),this.updateComplete.then(()=>this.#M())};this.#j=()=>{this.#m({type:"set-notice",notice:null}),this.updateComplete.then(()=>this.#M())};this.#ue=()=>{for(let e of this.renderRoot.querySelectorAll(_t)){let s=e.scrollHeight>e.clientHeight&&!ln(e);if(!s&&e.matches(":focus")){e.addEventListener("blur",this.#ue,{once:!0});continue}let n=(i,r)=>s?e.setAttribute(i,r):e.removeAttribute(i);n("tabindex","0"),e.classList.contains("panel-top")&&(n("role","group"),n("aria-labelledby","workspace-title"))}};this.#ee=e=>{if(!ie(this.state,{type:"open-workflow",workflow:"none"})){$e(this.state.workflow);return}this.#d=e.currentTarget,this.#S="reload",this.#m({type:"open-dialog",dialog:"discardDraft"})};this.#xe=()=>{this.#m({type:"exit-full-map"})};this.#le=e=>{let s=this.#s.value;if(s){s.menu.toggle();return}if(this.#s.status==="failed"){this.#ee(e);return}this.#h=!0,this.#s.request()};this.#we=()=>{this.#$("support")};this.#We=e=>{this._helpOpen?this.#Ce(!0):this.#qe(e.composedPath()[0])};this.#He=e=>{let s=e.detail,n=this.state;n.workflow!=="rooms"||s?.type!=="toggle-room"||setTimeout(()=>{let i=this.#i.value?.roomTapAnnouncement(this.#Q,n,this.state,s.roomId);i&&this.#q("_polite",i)})};this.#Q=(e,s,n)=>this.#e(e,s,n);new ws(this,{container:()=>this.renderRoot?.querySelector(".draw-tools")??null,items:"button"})}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_measuredNarrow:{state:!0},_sheetOffset:{state:!0},_helpOpen:{state:!0},_sheetDetent:{state:!0},_polite:{state:!0},_alert:{state:!0},_toast:{state:!0}}}static{this.styles=gt}#e(e,s,n){return Ie(this.localize,e,s,n,this.dates)}#t;#r;#n;#a;#i;#o;#s;#h;#y;#u;#E;#b;#f;#p;#c;#v;#C;#x;#R;#_;#d;#T;#S;#I;#l;#W;#g;#O;async#w(){let e=await import("./workflow-panel-X4M6YURP.js");return this.#O||(this.#O=!0,Bt(this.renderRoot,[...gt,e.shellWorkflowStyles,e.formControls])),e}#A;#B;#U;connectedCallback(){super.connectedCallback(),this.#v=new ResizeObserver(([e])=>{if(!e)return;let s=e.contentRect.width<1024||e.contentRect.height<480;s!==this._measuredNarrow&&(this._measuredNarrow=s)}),this.#v.observe(this),document.addEventListener("fullscreenchange",this.#U),this.#C=new ResizeObserver(([e])=>{if(!e)return;let s=Math.ceil(e.target.getBoundingClientRect().height);s!==this._sheetOffset&&(this._sheetOffset=s)}),this.#x=new ResizeObserver(()=>this.#ue()),this.#ce(),this.#R=Rs(()=>this.#ce())}#ce(){let e=window.matchMedia("(forced-colors: active)").matches,s=_s(this.renderRoot,{accent:"var(--ms-accent)",danger:"var(--ms-danger)",label:"var(--ms-on-accent)",card:"var(--ms-surface-card)",sunken:"var(--ms-surface-sunken)"}),[n,i,r,a,l]=Object.values(s).map(Ss),d=v=>e||!v||!r?[]:Es(v,r),c=(v,w,_=a)=>e||!v||!a||!_?void 0:Cs(v,w,[a,_]),u=v=>v?ks(v,1):"",[p,h]=d(n),[f,y]=d(i);this.style.setProperty("--ms-resolved-accent-fill",u(p)),this.style.setProperty("--ms-resolved-on-accent-fill",u(h)),this.style.setProperty("--ms-resolved-danger-fill",u(f)),this.style.setProperty("--ms-resolved-on-danger-fill",u(y)),this.style.setProperty("--ms-resolved-indicator",u(c(n,3,l))),this.style.setProperty("--ms-resolved-danger-text",u(c(i,4.5)))}disconnectedCallback(){this.#k(),this.#v?.disconnect(),this.#v=null,this.#C?.disconnect(),this.#C=null,this.#x?.disconnect(),this.#x=null,this.#R?.(),this.#R=null,this.#_=null,document.removeEventListener("fullscreenchange",this.#U),super.disconnectedCallback()}#q(e,s){if(this.#a.has(e)){this.updateComplete.then(()=>this.#q(e,s));return}this.#a.add(e);let n=this[e]===s;this[e]=n?"":s,this.updateComplete.then(()=>{this.#a.delete(e),n&&!this[e]&&this.#q(e,s)})}willUpdate(e){if(this.#c=this.shadowRoot?.activeElement??null,!e.has("state"))return;let s=bt(this.state).title;this.#n!==null&&s!==this.#n&&this.#q("_polite",bt(this.state,this.localize).title),this.#n=s;let n=this.state.notice,i=e.get("state");n!==i?.notice&&(!n&&i?.notice?.tone==="success"&&i.workflow!==this.state.workflow||(this.#k(),n&&(this._toast=n,this.#b=Ln[n.tone],this.#q(n.tone==="error"?"_alert":"_polite",this.#e(n.key,n.fallback,n.placeholders)),this.updateComplete.then(()=>{if(this.state.notice!==n)return;let r=this.renderRoot.querySelector("[data-notice-toast]");this.#f=!!r?.matches(":hover"),this.#p=!!r?.contains(this.shadowRoot?.activeElement??null),this.#N()}))))}#N(){!this._toast||this.#u!==void 0||this.#f||this.#p||(this.#E=Date.now()+this.#b,this.#u=setTimeout(this.#k,this.#b))}#de(){clearTimeout(this.#u),this.#u=void 0}#k;#F;#X;#V;#j;#re(e,s,n){return k`${D(Dn[e.tone])}<span class="notice-text">${this.#e(e.key,e.fallback,e.placeholders)}</span><button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${n}
      @click=${s}
    >${D(ps)}</button>`}updated(e){let s=this.renderRoot.querySelector(".mobile-sheet.instant");s&&(getComputedStyle(s).blockSize,s.classList.remove("instant"));let n=this.#c;this.#c=null,n&&(!n.isConnected||n.closest("[hidden]"))&&this.#M();let i=this.renderRoot.querySelector(".mobile-sheet");i!==this.#_&&(this.#C?.disconnect(),this.#_=i,i?this.#C?.observe(i):this._sheetOffset!==0&&(this._sheetOffset=0)),this.#x?.disconnect();for(let r of this.renderRoot.querySelectorAll(_t))for(let a of[r,...r.children])this.#x?.observe(a);if(this.#h&&this.#s.status!=="loading"&&(this.#h=!1,this.#s.value?.menu.toggle()),e.has("state")){this.#_e();let r=e.get("state");if(r?.precisionOpen&&!this.state.precisionOpen&&this.#J()?.focus(),this._helpOpen&&r&&(r.workflow!==this.state.workflow||r.fullMap!==this.state.fullMap)&&this.#Ce(!1),r?.fullMap&&!this.state.fullMap){document.fullscreenElement&&document.exitFullscreen().catch(()=>{});let a=this.#T;this.#T=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??this.renderRoot.querySelector(".nav--menu")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})})}if(r&&!r.fullMap&&this.state.fullMap&&this.updateComplete.then(()=>{let a=this.#T;requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})}),!r?.dialog&&this.state.dialog){this.#l=null,this.state.dialog==="discardDraft"&&!this.#S&&r&&(r.workflow==="plan"?this.#S=r.planDraft.id!==null&&r.planView==="edit"?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"}:this.#S={type:"dismiss-top-layer"});let a=rn(this.shadowRoot||document);a?.hasAttribute("data-dialog-launcher")&&(this.#d=a),this.updateComplete.then(()=>{(this.renderRoot.querySelector(".dialog [data-dialog-initial-focus]")??this.renderRoot.querySelector(".dialog button"))?.focus()})}else if(r?.dialog&&!this.state.dialog){if(r.dialog==="discardDraft"){this.#I||(this.#S=null),this.#me();let l=this.#l;this.#l=null,this.#te(l)}let a=this.#Ae(r);this.#d=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{let l=rn(document),d=l;for(;d&&d!==this;){let u=d.getRootNode();d=u instanceof ShadowRoot?u.host:null}if(l&&l!==document.body&&d!==this)return;a?.focus({preventScroll:!0});let c=!document.activeElement||document.activeElement===document.body;!this.shadowRoot?.activeElement&&c&&this.#M()})})}if(!r)this._sheetDetent=nn(this.state);else if(r.workflow!==this.state.workflow||r.planView!==this.state.planView){let a=nn(this.state);a!==this._sheetDetent&&(this.#L()?.classList.add("instant"),this._sheetDetent=a);let l=this.state;this.updateComplete.then(()=>{if(l.workflow==="none")return this.#Ve();if(r.workflow!=="plan"&&r.workflow!=="draw")return this.#M();requestAnimationFrame(()=>{this.#i.value?.focusPlanTarget(r,l,this.renderRoot,Qe)||this.#M()})})}}}#ue;#M(){[".panel-heading h2",".action-bar .ms-btn--primary",".workspace-toggle"].map(e=>this.renderRoot.querySelector(e)).find(Qe)?.focus({preventScroll:!0})}#J(){let e=this.renderRoot.querySelector(".draw-brush");return Qe(e)?e:this.renderRoot.querySelector(xe)?.shadowRoot?.querySelector(".draw-brush")??null}#m(e){if(ie(this.state,e)){this.#S=e,this.#m({type:"open-dialog",dialog:"discardDraft"});return}this.#z(e)}#z(e){this.dispatchEvent(new CustomEvent(Ms,{detail:e,bubbles:!0,composed:!0}))}#K(e){if(e.enabled){if(e.id==="return-live"){this.#m({type:"set-history",historyId:null});return}this.#se(e.id)}}#$(e,s){this.#g=null,this.#Z({type:"open-workflow",workflow:e},s)}#Z(e,s){s instanceof HTMLElement&&ie(this.state,e)&&(this.#d=s),this.#m(e)}#_e(){let e=this.#y,{coherence:s,workflow:n}=this.state;!e||n==="none"&&(s==="booting"||s==="verifying")||(this.#y=null,n==="none"&&this.#W.has(e)&&this.#$(e))}#ee;#Y(e){if(this.#i.request(),e!=="draw")return this.#i.status;this.#o.request();let s=this.#i.status,n=this.#o.status;return s==="failed"||n==="failed"?"failed":s===n?s:"loading"}#H(){let e=this.#S;if(this.#S=null,e==="reload"){$e(this.state.workflow);return}e?.type==="select-plan"||e?.type==="select-area"?(this.#m({type:"patch-plan-draft",patch:{dirty:!1}}),this.#m({type:"patch-area-draft",patch:{dirty:!1}}),this.#m({type:"dismiss-top-layer"})):this.#m({type:"discard-draft"}),e&&e.type!=="dismiss-top-layer"&&queueMicrotask(()=>this.#z(e))}#he(e,s){setTimeout(()=>{if(this.#I!==e)return;this.#I=null,this.requestUpdate();let n=s?this.#S:null;if(this.#S=null,this.state.dialog!=="discardDraft")return this.#te(n);this.#l=n,this.#oe()})}#te(e){e==="reload"?$e(this.state.workflow):e&&this.#z(e)}#pe(){this.state.command==="pending"||this.#I||(this.#S=null,this.#oe(),this.#me())}#me(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".floor-switcher");e&&(e.value=this.state.selection.floorId);let s=this.renderRoot.querySelector(".robot-switcher");s&&(s.value=this.state.selection.entryId??"")})}#oe(){let e=this.#Ae(this.state);this.#m({type:"dismiss-top-layer"}),e&&requestAnimationFrame(()=>e.focus({preventScroll:!0}))}#se(e,s){this.dispatchEvent(new CustomEvent(Ps,{detail:typeof e=="string"?{id:e,settled:s}:e,bubbles:!0,composed:!0}))}#Se(e){e.action==="discard"?this.#H():this.#i.value?.confirmDialog(this.state,e.action,s=>this.#m(s),s=>this.#se(s))}#G(e){e!==this._sheetDetent&&(this._sheetDetent=e,this.#q("_polite",e==="peek"?this.#e("v4_workspace_height_peek","Cleaning panel, collapsed"):e==="half"?this.#e("v4_workspace_height_half","Cleaning panel, half height"):this.#e("v4_workspace_height_full","Cleaning panel, full height")))}#P(e,s=!1){let i=X.indexOf(this._sheetDetent)+e;s&&i>=X.length&&(i=0),i=Math.max(0,Math.min(X.length-1,i)),this.#G(X[i]??this._sheetDetent)}#D(e){let s=this.renderRoot.querySelector(".workspace")?.clientHeight??e.parentElement?.clientHeight??e.offsetHeight,n=parseFloat(getComputedStyle(this).fontSize)||16,i=[".sheet-grip",".sheet-tools",".action-bar"].map(l=>e.querySelector(l)?.offsetHeight??0).reduce((l,d)=>l+d,0)+n*.75,r=Math.min(s*.92,s-n*9),a=Math.min(s*.48,n*26,r);return{peek:Math.min(i,a),half:a,full:r}}#L(){return this.renderRoot.querySelector(".mobile-sheet")}#ge(e,s){e.style.transform=s;let n=this.renderRoot.querySelector("[data-notice-toast]");n&&(n.style.transform=s)}#ne(e){let s=e.currentTarget;for(let n of e.composedPath()){if(n===s)return!1;if(n instanceof Element&&n.matches(Nn))return!0}return!1}#Pe(e){if(e.pointerType==="mouse"&&e.button!==0||this.#ne(e))return;let s=this.#L();!s||this.#A||(this.#A={pointerId:e.pointerId,startY:e.clientY,startHeight:s.offsetHeight,heights:this.#D(s),samples:[{y:e.clientY,t:e.timeStamp}],moved:!1},e.currentTarget.setPointerCapture(e.pointerId),s.classList.add("dragging"))}#fe(e){let s=this.#A;if(!s||e.pointerId!==s.pointerId)return;let n=this.#L();if(!n)return;let i=e.clientY-s.startY;for(!s.moved&&Math.abs(i)>Hn&&(s.moved=!0),s.samples.push({y:e.clientY,t:e.timeStamp});s.samples.length>2&&e.timeStamp-(s.samples[1]?.t??0)>zn;)s.samples.shift();if(!s.moved)return;let r=s.startHeight-s.heights.full,a=s.startHeight-s.heights.peek,l=Math.max(r,Math.min(a,i));this.#ge(n,`translateY(${l}px)`)}#Re(e){let s=this.#A;if(!s||e.pointerId!==s.pointerId)return;this.#A=null;let n=this.#L();if(n&&(this.#ge(n,""),n.classList.remove("dragging")),e.type==="pointercancel")return;if(!s.moved){this.#P(1,!0);return}let i=e.clientY-s.startY,r=X.indexOf(this._sheetDetent),a=s.samples[0],l=s.samples[s.samples.length-1],d=a&&l&&l!==a?(l.y-a.y)/Math.max(1,l.t-a.t):0;if(Math.abs(d)>qn){let h=Math.max(0,Math.min(X.length-1,r+(d<0?1:-1)));this.#G(X[h]??this._sheetDetent);return}let c=s.startHeight-i,u=this._sheetDetent,p=Number.POSITIVE_INFINITY;for(let h of X){let f=Math.abs(s.heights[h]-c);f<p&&(p=f,u=h)}this.#G(u)}#ae(e){for(let s of e.composedPath()){if(s===e.currentTarget)break;if(s instanceof HTMLElement&&s.scrollHeight>s.clientHeight&&/auto|scroll/u.test(getComputedStyle(s).overflowY))return s}return null}#ve(e){if(e.pointerType==="mouse"||this.#ne(e))return;let s=this.#ae(e);this.#B=s?.scrollTop?null:{pointerId:e.pointerId,startY:e.clientY,scroller:s,consumed:!1}}#be(e){let s=this.#B;if(!(!s||s.consumed||e.pointerId!==s.pointerId)){if(s.scroller?.scrollTop){this.#B=null;return}e.clientY-s.startY<Bn||(s.consumed=!0,this.#P(-1))}}#ye(){this.#B=null}#Ee(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}#ie(e){if(this.#T=e.currentTarget,this.state.fullMap){this.#m({type:"exit-full-map"});return}this.#m({type:"enter-full-map"}),Promise.resolve(this.renderRoot.querySelector(".app")?.requestFullscreen?.()).catch(()=>{})}#xe;#le;#we;#We;#qe(e){this.#t=e,this.#r=window.matchMedia("(any-pointer: coarse)").matches,this.#i.request(),this._helpOpen=!0}#Ce(e){this._helpOpen=!1,e&&this.#t?.focus()}#ze(){this.#m({type:"set-precision-open",value:!this.state.precisionOpen})}#He;#Te(e){let s=this.#i.value?.dialogLauncher(e,this.state,n=>this.#m(n));s&&(this.#d=s)}#Ae(e){return e.dialog?this.#d?.isConnected&&this.#d.hasAttribute("data-dialog-launcher")?this.#d:this.#i.value?.dialogReturnTarget(e,this.renderRoot)??this.#Be(e.dialog):null}#Be(e){if(e==="confirmDeletePlan"){let i=this.renderRoot.querySelector(Ft)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`);if(i)return i}return this.renderRoot.querySelector(st)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`)??null}#Ne(e){if(!bs(e)&&!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)&&e.key==="Escape"){if(e.preventDefault(),this.#s.value?.menu.open){this.#s.value.menu.close(!0);return}if(this._helpOpen){this.#Ce(!0);return}if(this.state.dialog==="discardDraft"){this.#pe();return}this.#m({type:"dismiss-top-layer"})}}#Fe(e){if(e.key!=="Tab")return;let n=[...e.currentTarget.querySelectorAll(an)],i=n[0],r=n.at(-1);if(!i||!r)return;let a=this.shadowRoot?.activeElement;e.shiftKey&&a===i?(e.preventDefault(),r.focus()):!e.shiftKey&&a===r&&(e.preventDefault(),i.focus())}#Ke(){let e=this.renderRoot.querySelector(xe);(e?.shadowRoot?.querySelector(".map-root")??e)?.focus()}#Ue(){this._sheetDetent==="peek"&&this.#L()&&this.#G("half"),this.updateComplete.then(()=>this.#M())}#ke(e,s,n){if(!("label"in e))return g;let i=e.labelKey?this.#e(e.labelKey,e.label,e.labelPlaceholders):e.label,r=!e.enabled&&e.reason?e.reasonKey?this.#i.value?.actionReason(this.#Q,e,n==="primary-reason",a=>this.#m(a))??this.#e(e.reasonKey,e.reason,e.reasonPlaceholders):e.reason:null;return e.kind==="link"?k`<a class=${s} href=${e.href??"#"}>${i}</a>`:k`
      <button
        class=${`${s} ${e.kind==="danger"?"ms-btn--danger":""}`}
        type="button"
        aria-disabled=${e.enabled?g:"true"}
        aria-describedby=${r?n:g}
        aria-label=${e.id==="stop"?this.#e("v4_stop_cleaning_label","Stop cleaning"):e.id==="run-plan"?this.#e("v4_action_run_plan_named","Run plan {plan}",{plan:this.state.planDraft.name}):g}
        @click=${()=>this.#K(e)}
      >${i}</button>
      ${r?k`<p class="action-reason" id=${n}>${r}</p>`:g}
    `}#Q;#Ie(e,s,n){let i=s?.enabled&&e.workflow==="rooms"&&s.id==="clean-rooms"?this.#i.value?.roomsSummary(this.#Q,e)??"":"",r=e.workflow==="plan"&&e.planView==="edit",a=e.workflow==="draw"&&!n;if(!i&&!r&&!a&&!(s&&"label"in s)&&!n)return g;let l=(d,c)=>this.#Z(d,c);return k`
      <div class=${r||a?"action-bar paired":"action-bar"}>
        ${i?k`<p class="action-summary">${i}</p>`:g}
        ${r?this.#i.value?.planCancel(e,s,this.#Q,l):a?this.#i.value?.drawCancel(e,this.#Q,l):g}
        ${s?this.#ke(s,"ms-btn ms-btn--block ms-btn--lg ms-btn--primary","primary-reason"):g}
        ${n?this.#ke(n,"ms-btn ms-btn--block ms-btn--lg ms-btn--secondary","secondary-reason"):g}
      </div>
    `}#Oe(e,s=!1,n=e){return s||this.#W.add(e),()=>{s||(this.#$(e),this.#g=n)}}#Ve(){let e=this.#g;this.#g=null;let s=e?this.renderRoot.querySelector(`[data-launcher="${e}"]`):null;Qe(s)?s.focus({preventScroll:!0}):this.#M()}#Me(e,s,n,i,r=!1,a=!1,l="ms-row"){return k`
      <button
        class=${l}
        type="button"
        data-launcher=${n}
        aria-disabled=${r?"true":g}
        aria-describedby=${a?"home-reason":g}
        @click=${this.#Oe(n,r)}
      >
        <span class="ms-row__lead">${D(s)}</span>
        <span class="ms-row__body"><strong>${e}</strong>${i?k`<small>${i}</small>`:g}</span>
        <span class="ms-row__trail">${D(rt)}</span>
      </button>
    `}#je(e){let s=e.resources.history.value?.floors||[],n=s.length?s.map((i,r)=>({id:i.active?"current":i.id,label:`${i.label||(i.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:i.ordinal??r+1}))}${!i.active&&i.snapshots.length===0?` \xB7 ${this.#e("v4_floor_not_captured","No saved map for this floor yet")}`:""}`,disabled:!i.active&&i.snapshots.length===0})):[{id:e.selection.floorId,label:e.floor.displayName,disabled:!1}];return k`
      <select
        class="ms-select context-switcher floor-switcher"
        slot="floor"
        data-map-control
        name="map-floor"
        aria-label=${this.#e("v4_choose_floor","Choose floor")}
        ?disabled=${n.length<=1}
        .value=${e.selection.floorId}
        @change=${i=>this.#m({type:"set-floor",floorId:i.currentTarget.value})}
      >${n.map(i=>k`
        <option value=${i.id} ?selected=${i.id===e.selection.floorId} ?disabled=${i.disabled}>${i.label}</option>
      `)}</select>
    `}#Ye(e){let s=(u,p,h)=>this.#e(u,p,h);this.#W=new Set(["support"]);let n=on(e),i=u=>{let p=this.#Me(s("v4_map_history","Map history"),ot,"history",s("v4_history_quick_detail","Browse earlier floor maps.")),h=this.#Me(s("v4_map_diagnostics","Map diagnostics"),at,"support",s("v4_diagnostics_quick_detail","Check the map and copy details for support."));return k`
        <h3 class="ms-section-heading">${s("v4_maps_heading","Maps")}</h3>
        <div class="shelf maps">${u?[h,p]:[p,h]}</div>
      `};switch(n){case"reconnecting":case"administrator":case"robot-unavailable":case"setup":return g;case"offline":case"read-only":return i(!1);case"problem":return k`
          <div class="home-actions">
            <button class="ms-btn ms-btn--secondary" type="button" data-launcher="support-open" @click=${this.#Oe("support",!1,"support-open")}>${s("v4_open_diagnostics","Open map diagnostics")}</button>
          </div>
          ${i(!0)}
        `;default:break}let r=n!=="ready",a=wt(e),l=a!==null&&a.rooms.length===0,d=r||l,c=(u,p,h,f,y,v)=>this.#Me(y,h,u,v,f,r,p?"ms-row ms-row--card ms-row--featured":"ms-row ms-row--card");return k`
      ${n==="map-unavailable"||n==="map-limited"?k`
        <div class="home-actions">
          <button
            class="ms-btn ms-btn--secondary"
            type="button"
            aria-disabled=${e.rechecking?"true":g}
            @click=${()=>{this.state.rechecking||this.#se("recheck-status")}}
          >${s("v4_retry","Try again")}</button>
        </div>
      `:g}
      <div class="quick-actions" role="group" aria-label=${s("v4_cleaning_choices","Cleaning choices")}>
        ${c("rooms",!0,le,d,s("v4_clean_rooms","Clean rooms"),!r&&l?s("v4_no_rooms_reason","Can't clean rooms until you name them in the Matic app."):s("v4_rooms_quick_detail","Pick rooms and clean them now."))}
        ${this.#Xe(e,r)}
        ${this.#Ge(e,r)}
        ${c("draw",!1,us,r,s("v4_custom_areas","Clean custom area"),s("v4_areas_quick_detail","Draw or choose a custom area"))}
      </div>
      ${i(n==="map-unavailable")}
    `}#Xe(e,s){let n=this.#Q,i=e.resources.plans,r=wt(e),a=r?.plans.find(y=>y.id===r.selectedPlan),l=r?.plans.length??0,d=i.status==="loading",c=i.status==="error",u=a?Ts(n,e.locale,a):null,[p="",h=""]=a?n("v4_run_named_plan","Run {plan}",{plan:"\0"}).split("\0"):[],f=()=>{s||(a?this.#m({type:"select-plan",planId:a.id,origin:"home"}):this.#$("plans"),this.#g="plan")};return s||this.#W.add("plans"),k`
      <button
        class="ms-row ms-row--card"
        type="button"
        data-launcher="plan"
        aria-disabled=${s?"true":g}
        aria-describedby=${s?"home-reason":g}
        @click=${f}
      >
        <span class="ms-row__lead">${D(Ae)}</span>
        <span class="ms-row__body">
          ${a?k`
            <strong class="card-title"><span class="card-name">${p}<bdi>${a.name}</bdi>${h}</span>${a.enabled?g:k`<span class="ms-chip">${n("v4_paused","Paused")}</span>`}</strong>
            <small>${xs(n,e.locale,a)}</small>
            ${u===null?g:"blocked"in u?k`<span class="card-lines"><span class="line" data-tone="warning">${D(dt)}${u.blocked}</span></span>`:k`<span class="card-lines">${u.due.map(y=>k`<span class="line">${D(ms)}${y}</span>`)}</span>`}
          `:k`
            <strong>${d?n("v4_plans_loading","Checking saved plans"):c?n("v4_plans_unavailable","Plans unavailable"):l?n("v4_run_a_plan","Run a plan"):n("v4_create_plan","Create a plan")}</strong>
            <small>${d?n("v4_plans_loading_hint","Reading plans for this floor"):c?n("v4_plans_unavailable_hint","Try again to load your plans."):l?l===1?n("v4_saved_routine","1 saved plan"):n("v4_saved_routines","{count} saved plans",{count:l}):n("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</small>
          `}
        </span>
        <span class="ms-row__trail">${D(rt)}</span>
      </button>
    `}#Ge(e,s){let n=wt(e);return n?.plans.some(i=>i.id===n.selectedPlan)?this.#Me(this.#e("v4_your_plans","Your plans"),Ae,"plans",void 0,s,s):g}#Qe(e,s){if(e.workflow==="none")return this.#Ye(e);let n=this.#Y(e.workflow);return n!=="ready"?s&&e.workflow==="draw"?g:De(n,this.localize,this.#ee):k`<${sn}
      .state=${e}
      .localize=${this.localize}
      .dates=${this.dates}
      .retry=${this.#ee}
      .narrow=${s}
      @matic-workspace-intent=${this.#Te}
    ></${sn}>`}#$e(e,s){if(e.workflow==="none"||e.workflow==="plan"&&e.planView==="edit")return g;let n=e.workflow==="plan"&&e.planOrigin!=="home",i=e.workflow==="draw"&&e.areaDraft.id!==null?e.areaDraft.name:null,r=n?this.#e("v4_back_to_plans","Back to plans"):i!==null?this.#e("v4_back_to_area","Back to {name}",{name:i}):this.#e("v4_back_to_all_tasks","Back to all tasks");return k`
      <button
        class=${s?"sheet-back ms-btn ms-btn--icon ms-btn--sm":"panel-back ms-btn ms-btn--secondary"}
        type="button"
        aria-label=${r}
        title=${s?r:g}
        data-dialog-launcher="discardDraft"
        @click=${a=>this.#Z(n?{type:"open-workflow",workflow:"plans"}:i!==null?{type:"select-area",areaId:e.areaDraft.id,workflow:"areaReview"}:{type:"open-workflow",workflow:"none"},a.currentTarget)}
      >${D(is,{directional:!0})}${s?g:k`<span class="ms-btn__label">${n?this.#e("v4_your_plans","Your plans"):i!==null?k`<bdi>${i}</bdi>`:this.#e("v4_all_tasks","All tasks")}</span>`}</button>
    `}#De(e){let s=e.workflow==="plan",n=kt(e,this.localize).title;return k`
      <div class="panel-top">
        <div class="panel-heading">
          ${this.#$e(e,!1)}
          <h2 id="workspace-title" tabindex="-1">${s&&this.#i.value?.planTitle(e,n,this.#Q)||n}</h2>
          ${s?this.#i.value?.planTools(e,this.localize,this.#Te):g}
        </div>
        ${e.notice?k`<div class="notice" data-notice-slot data-tone=${e.notice.tone}>${this.#re(e.notice,this.#j,this.#e("v4_close","Close"))}</div>`:g}
      </div>
    `}#Le(e,s){let{description:n}=kt(e,this.localize);return k`
      ${n?k`<p class="panel-description" id=${e.workflow==="none"?"home-reason":g}>${n}</p>`:g}
      ${this.#Qe(e,s)}
    `}#Je(e,s){let n=kt(e,this.localize),i=(e.workflow==="rooms"?this.#i.value?.roomsGripLine(this.#Q,e):null)??n.title;return this._sheetDetent!=="peek"?s.detail?`${s.title} \xB7 ${s.detail}`:s.title:s.notable?`${s.title} \xB7 ${i}`:i}render(){let e=this.state,s=e.narrowHint||this._measuredNarrow,n=this.#s.value,i=bt(e,this.localize),r=_e(e),a=zt({...e,narrowHint:s}),l=Ht(e),d=!s&&a.id==="stop"?a:!s&&l?.id==="stop"?l:null,c=d&&d===a?null:a,u=d&&d===l?null:l,p=e.fullMap&&(e.coherence==="verifying"||e.coherence==="booting"),h=e.fullMap||e.host.administrator&&e.host.robotCount>0&&e.map.available,f=e.workflow==="plan",y=e.dialog==="discardDraft",v=y?Ot(e,f?"confirmDeletePlan":"confirmDeleteArea")?.name:void 0,w=y?{title:this.#e("v4_discard_title","Discard changes?"),detail:v===void 0?f?this.#e("v4_discard_new_plan_detail","This new plan hasn't been saved, and discarding it can't be undone."):this.#e("v4_discard_new_area_detail","This new area hasn't been saved, and discarding it can't be undone."):f?this.#e("v4_discard_plan_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:v}):this.#e("v4_discard_area_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:v}),cancelLabel:this.#e("v4_keep_area_editing","Keep editing"),confirmLabel:this.#e("v4_discard","Discard"),action:"discard"}:e.dialog===null?void 0:this.#i.value?.dialogCopy(e.dialog,e,this.localize),_=y&&(e.command==="pending"||this.#I!==null),S=y&&(a.id==="save-plan"||a.id==="save-area")&&(a.enabled||_)?a.id:null,b=e.fullMap?"--map-sheet-offset:calc(var(--ms-control-lg) + 3 * var(--ms-space-3))":s?`--map-sheet-offset:${this._sheetOffset}px`:"--map-sheet-offset:0px",C=s&&e.workflow==="draw",P=this._helpOpen?this.#i.value?this.#i.value.renderMapHelp({state:e,coarse:this.#r,t:(E,O)=>this.#e(E,O),close:()=>this.#Ce(!0)}):De(this.#i.status,this.localize,this.#ee):null,W=e.precisionOpen&&e.workflow==="draw",$=this._toast&&(this._toast.tone==="success"||this._toast.tone==="error"||e.fullMap||s&&this._sheetDetent==="peek")?this._toast:null;return k`
      <div class=${`root ${s?"narrow":"wide"}`} @keydown=${this.#Ne}>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#Ke}>${this.#e("v4_skip_to_map","Skip to the map")}</button>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#Ue}>${this.#e("v4_skip_to_workspace","Skip to the panel")}</button>
        <div class="app" ?inert=${!!w}>
          <header class="app-bar">
            <button
              class="nav nav--menu ms-btn ms-btn--icon"
              type="button"
              aria-label=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
              title=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
              @click=${this.#Ee}
            >${D(os)}</button>
            <h1 class="title">${this.#e("map_studio_title","Matic Map")}</h1>
            ${e.robots.length>1||r?k`
              <select
                class="ms-select context-switcher robot-switcher"
                name="matic-robot"
                aria-label=${this.#e("v4_choose_robot","Choose robot")}
                .value=${e.selection.entryId||""}
                @change=${E=>this.#m({type:"select-entry",entryId:E.currentTarget.value})}
              >${r?k`
                <option value=${e.selection.entryId||""} selected disabled>${this.#e("v4_selected_robot_unavailable","Selected robot unavailable")}</option>
              `:g}${e.robots.map(E=>k`
                <option value=${E.entryId} ?selected=${E.entryId===e.selection.entryId}>${E.label}</option>
              `)}</select>
            `:g}

            <span class="spacer"></span>
            ${h?k`
              <button
                class="workspace-toggle ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_full_map","Full map")}
                aria-pressed=${String(e.fullMap)}
                title=${this.#e("v4_full_map","Full map")}
                @click=${this.#ie}
              >${D(as)}</button>
            `:g}
            <div class="overflow-wrap" @keydown=${n?.menu.keydown} @focusout=${n?.menu.focusout}>
              <button
                class="overflow ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_map_options","Map options")}
                aria-haspopup="menu"
                aria-expanded=${String(n?.menu.open??!1)}
                aria-controls="map-options"
                @click=${this.#le}
              >${D(rs)}</button>
              ${n?.menu.open?n.render({state:e,narrow:s,t:(E,O)=>this.#e(E,O),intent:E=>this.#m(E),diagnostics:this.#we}):g}
            </div>
          </header>

          <main class=${`workspace ${e.fullMap?"full-map":""}`} style=${b}>
            <div class="canvas">
              <${en}
                class="map-canvas"
                style=${b}
                @matic-workspace-intent=${this.#He}
                @matic-map-help=${this.#We}
                .state=${e}
                .localize=${this.localize}
                .dates=${this.dates}
                .outlineEditor=${this.#o.value}
                .narrow=${s}
                .help=${P}
                .recipes=${e.workflow==="draw"?this.#i.value?.drawRecipes(this.#Q)??null:null}
              >${this.#je(e)}
                ${s&&!e.fullMap&&this._sheetDetent==="full"?k`
                  <button
                    class="sheet-scrim"
                    slot="scrim"
                    data-map-control
                    type="button"
                    aria-label=${this.#e("v4_collapse_sheet","Collapse panel")}
                    @click=${()=>this.#G("peek")}
                  ></button>
                `:g}
              </${en}>
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
              data-detent=${s?this._sheetDetent:g}
              data-workflow=${e.workflow}
              aria-label=${this.#e("v4_map_workspace","Cleaning panel")}
            >
              ${s?k`
                <div
                  class="sheet-grip"
                  @pointerdown=${this.#Pe}
                  @pointermove=${this.#fe}
                  @pointerup=${this.#Re}
                  @pointercancel=${this.#Re}
                >
                  <span class="sheet-handle" role="presentation"></span>
                  ${this._sheetDetent==="peek"?this.#$e(e,!0):g}
                  <span class="sheet-status">${this.#Je(e,i)}</span>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_more","Expand panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="full"?"true":g}
                    @click=${()=>this.#P(1)}
                  >${D(cs)}</button>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_less","Collapse panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="peek"?"true":g}
                    @click=${()=>this.#P(-1)}
                  >${D(ds)}</button>
                </div>
                ${C?k`
                  <div class="sheet-tools">
                    ${De(this.#Y("draw"),this.localize,this.#ee)}
                    ${W?k`<${tn} class="sheet-precision" .state=${e} .localize=${this.localize}></${tn}>`:g}
                    ${ys(e,{intent:E=>this.#m(E),openBrush:()=>this.#ze(),t:(E,O,G)=>this.#e(E,O,G)},"grid")}
                  </div>
                `:g}
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
                ${this.#Ie(e,c,u)}
              `:k`
                <div class="status-strip">
                  <span class="status-icon" aria-hidden="true">${D(i.icon)}</span>
                  <span class="status-copy"><strong>${i.title}</strong><small>${i.detail}</small></span>
                  ${d?this.#ke(d,"status-action ms-btn ms-btn--secondary","status-reason"):g}
                </div>
                <section class="workflow">
                  ${this.#De(e)}
                  <div class="workflow-body" role="region" aria-labelledby="workspace-title">${this.#Le(e,s)}</div>
                  ${this.#Ie(e,c,u)}
                </section>
              `}
            </aside>

            ${e.fullMap?k`
              <section
                class="full-map-hud ms-surface ms-surface--floating"
                aria-label=${this.#e("v4_robot_status_and_action","Robot status and action")}
              >
                <span class="hud-copy"><strong>${i.title}</strong><small>${i.detail}</small></span>
                ${p&&a.id!=="stop"?g:this.#ke(a,"ms-btn ms-btn--lg ms-btn--primary","hud-reason")}
                ${l&&(!p||l.id==="stop")?this.#ke(l,"ms-btn ms-btn--lg ms-btn--secondary","hud-secondary-reason"):g}
                <button
                  class="hud-exit ms-btn ms-btn--lg ms-btn--secondary"
                  type="button"
                  title=${this.#e("v4_exit_full_map","Exit full map")}
                  @click=${this.#xe}
                >${D(ls)}<span class="ms-btn__label">${this.#e("v4_exit_full_map","Exit full map")}</span></button>
              </section>
            `:g}
          </main>
        </div>

        <div
          class="notice notice-toast"
          data-notice-toast
          role="region"
          aria-label=${this.#e("v4_notifications","Notifications")}
          data-tone=${$?.tone??g}
          style=${b}
          ?hidden=${!$}
          ?inert=${!!w}
          @pointerenter=${this.#F}
          @focusin=${this.#F}
          @pointerleave=${this.#X}
          @focusout=${this.#X}
        >${$?this.#re($,this.#V,this.#e("v4_hide_notification","Hide notification")):g}</div>

        <div class="sr-only" aria-live="polite" aria-atomic="true">${this._polite}</div>
        <div class="sr-only" role="alert" aria-atomic="true">${this._alert}</div>

        ${w?k`
          <div class="dialog-backdrop">
            <section
              class="dialog ms-surface ms-surface--overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title"
              aria-describedby="dialog-detail"
              @keydown=${this.#Fe}
            >
              <h2 id="dialog-title">${w.title}</h2>
              <div id="dialog-detail">
                <p>${w.detail}</p>
                ${w.consequence?k`<p>${w.consequence}</p>`:g}
                ${_?k`<p id="dialog-saving" role="status">${this.#e("v4_notice_saving","Saving\u2026")}</p>`:g}
              </div>
              <div class="dialog-actions">
                <button
                  class=${y?"ms-btn":"ms-btn ms-btn--secondary"}
                  type="button"
                  data-dialog-initial-focus
                  aria-disabled=${_?"true":g}
                  aria-describedby=${_?"dialog-saving":g}
                  @click=${y?this.#pe:this.#oe}
                >${w.cancelLabel}</button>
                ${S?k`<button
                  class="ms-btn ms-btn--secondary"
                  type="button"
                  aria-disabled=${_?"true":g}
                  aria-describedby=${_?"dialog-saving":g}
                  @click=${()=>{if(_)return;let E={};this.#I=E,this.requestUpdate(),this.#se(S,O=>this.#he(E,O))}}
                >${this.#e("v4_save","Save")}</button>`:g}
                <button
                  class="discard ms-btn ms-btn--primary ms-btn--danger"
                  type="button"
                  aria-disabled=${_?"true":g}
                  aria-describedby=${_?"dialog-saving":g}
                  @click=${()=>{_||this.#Se(w)}}
                >${w.confirmLabel}</button>
              </div>
            </section>
          </div>
        `:g}
      </div>
    `}};customElements.get(pe)||customElements.define(pe,St);var cn=re(pe),ge=new WeakMap,Fn={},Kn=3e4,Rt=(o,t)=>{ge.get(o)===t&&ge.delete(o)},Et=class extends Ce{constructor(){super(...arguments);this.narrow=!1;this._workspace=K();this.#e=new Le;this.#t=new Dt(this._workspace);this.#r=null;this.#n=null;this.#a=null;this.#i=null;this.#o=null;this.#s=null}static{this.styles=[Me,Pe,Ee`
:host { display: block; block-size: 100%; }
`]}static{this.properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_workspace:{state:!0}}}#e;#t;#r;#n;#a;#i;#o;#s;#h(e=this.hass,s=this.panel){let n=this.#t.value.selection;return n.entrySource==="user"?this.#e.project(e,s,n.entryId):this.#e.project(e,s)}#y(){let e=this.hass,s=e?.loadBackendTranslation;if(!e||typeof s!="function")return;let n=e.connection??Fn,i=e.language??"";ge.get(n)!==i&&(ge.set(n,i),Promise.resolve().then(()=>s.call(e,"common","matic_robot")).catch(()=>{if(ge.get(n)===i){if(!this.isConnected){Rt(n,i);return}this.#s&&clearTimeout(this.#s.timer),this.#s={owner:n,language:i,timer:setTimeout(()=>{this.#s=null,Rt(n,i),this.#y()},Kn)}}}))}shouldUpdate(e){if(this.#y(),!e.has("hass")||[...e.keys()].some(n=>n!=="hass"))return!0;let s=e.get("hass");return s?.connection!==this.hass?.connection||s?.localize!==this.hass?.localize?!0:this.#h()!==this.#r}connectedCallback(){super.connectedCallback(),this.#y(),this.#n=this.#t.subscribe(e=>{if(this._workspace=e,e.selection.entryId!==this.#r?.entryKey){let s=this.#h();s!==this.#r&&(this.#r=s,this.#i?.sync(s))}}),this.#u()}disconnectedCallback(){this.#s&&(clearTimeout(this.#s.timer),Rt(this.#s.owner,this.#s.language),this.#s=null),this.#n?.(),this.#n=null,this.#E(),super.disconnectedCallback()}#u(){if(!(!this.isConnected||this.#i)&&(this.#r=this.#h(),this.#a=new ze(()=>this.hass),this.#i=new Ye(this.#t,this.#a,this.hass?.connection??null),this.#o=new Ge(this.#t),this.#o.start(),this.#r)){this.#i.sync(this.#r);let{host:e}=this.#r;e.connected&&e.administrator&&e.robotCount>0&&this.#i.refreshCatalog(this.#t.value.selection.floorId==="current")}}#E(){this.#o?.dispose(),this.#o=null,this.#i?.dispose(),this.#i=null,this.#a=null}willUpdate(e){if(e.has("hass")||e.has("panel")){let s=e.get("hass"),n=e.has("hass")&&s?.connection!==this.hass?.connection,i=this.#h(),r=i!==this.#r;r&&(this.#r=i),n?(this.#E(),this.#u()):(r||e.has("panel"))&&this.#i?.sync(i)}e.has("narrow")&&this.#t.value.narrowHint!==this.narrow&&this.#t.dispatch({type:"set-narrow-hint",value:this.narrow})}#b(e){if(!Tt(e.detail))return;e.stopPropagation();let s=e.detail;if(s.type==="dismiss-top-layer"||s.type==="exit-full-map"){this.#o?.dismissTop()||this.#t.dispatch(s);return}if(s.type==="open-workflow"&&s.workflow!=="none"){this.#i?.openWorkflow(s.workflow);return}if(s.type==="set-floor"){this.#i?.selectFloor(s.floorId);return}if(s.type==="select-entry"){if(!this._workspace.robots.some(n=>n.entryId===s.entryId)||this.#e.project(this.hass,this.panel,s.entryId).entryKey!==s.entryId)return;this.#t.dispatch(s);return}if(s.type==="set-history"){this.#i?.selectHistory(s.historyId);return}if(s.type==="select-plan"){this.#i?.selectPlan(s.planId,!1,s.origin);return}if(s.type==="set-plan-enabled"){this.#i?.setPlanEnabled(s.enabled);return}if(s.type==="select-area"){this.#i?.selectArea(s.areaId),s.workflow==="areaReview"&&this.#i?.openWorkflow("areaReview");return}this.#t.dispatch(s)}#f(e){e.stopPropagation(),typeof e.detail?.id=="string"&&(e.detail.id==="reset-room-cadence"&&"planId"in e.detail&&"roomId"in e.detail&&"mode"in e.detail?this.#i?.executeAction(e.detail):this.#i?.executeAction(e.detail.id,"settled"in e.detail?e.detail.settled:void 0),this.dispatchEvent(new CustomEvent("matic-map-v4-action-requested",{detail:{id:e.detail.id},bubbles:!0,composed:!0})))}getWorkspaceSnapshot(){return this.#t.value}getRequestDiagnostics(){return Object.freeze({http:this.#a?.requestDiagnostics()??null,workspace:this.#i?.workspaceDiagnostics()??null})}render(){return k`
      <${cn}
        .state=${this._workspace}
        .localize=${this.hass?.localize}
        .dates=${this.#r?.dates}
        @matic-workspace-intent=${this.#b}
        @matic-workspace-action=${this.#f}
      ></${cn}>
    `}};customElements.get(nt)||customElements.define(nt,Et);export{Le as a,Et as b};
