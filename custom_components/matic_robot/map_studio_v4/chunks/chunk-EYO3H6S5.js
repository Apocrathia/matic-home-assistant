import{A as Zt,B as es,C as ps,D as $e,E as Oe,F as fs,G as ht,H as vs,I as ys,J as gs,K as bs,L as ws,M as ks,N as _s,O as Ss,P as Rs,Q as Es,T as Cs,U as Ms,a as oe,b as w,c as xe,d as Nt,e as st,f as Bt,h as pe,i as nt,j as Ht,k as Ft,l as Kt,m as it,n as Ut,o as Vt,p as re,q as me,r as ae,s as jt,t as R,u as Ae,v as Yt,w as Xt,x as Gt,y as Qt,z as Jt}from"./chunk-XQKCWTFH.js";import{D as as,E as rt,F as at,G as lt,H as ct,I as dt,J as ls,K as j,L as cs,M as ds,N as us,O as ut,P as hs,Q as $,a as Me,b as Pe,c as ts,d as le,e as ot,f as ss,g as ns,h as is,i as Te,j as os,k as rs}from"./chunk-MXR2NNCV.js";import{C as tt,D as Se,I as Lt,J as Re,L as Wt,M as qt,N as zt,R as Ee,W as y,Y as Ce,Z as Ie,_ as ms,c as xt,h as M,j as At,k as ie,n as K,o as Tt,p as Je,q as Ze,r as It,t as $t,u as Ot,v as Dt,x as _e,z as et}from"./chunk-LIKAU5TE.js";var ln=(r,t)=>{if(t?.recharge_and_resume===!0&&t?.charging===!0)return"recharging";switch(r){case"cleaning":return"cleaning";case"paused":return"paused";case"returning":return"returning";case"docked":return"docked";case"idle":return"idle";case"error":return"problem";default:return"unknown"}},cn=r=>typeof r!="number"||!Number.isFinite(r)?null:Math.round(Math.max(0,Math.min(100,r))),dn=r=>{let t=r.attributes?.matic_entry_id;return typeof t=="string"&&t.length>0?t:null},un=r=>String(r||"local-user").replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",Ps=r=>{if(typeof r!="string")return"Robot";let t=r.trim();return t&&Array.from(t).length<=128&&!/[\u0000-\u001f\u007f]/u.test(t)?t:"Robot"},De=class{#e="";#t=null;project(t,e,s=null){let n=t?.states??{},i=e?.config?.entry_id,a=s||(typeof i=="string"?i:null),l=null,d=null,c=a,u=new Map;for(let[O,E]of Object.entries(n)){let D=dn(E);D&&O.startsWith("vacuum.")&&(u.set(D,{entryId:D,label:Ps(E.attributes?.friendly_name)}),(a?D===a:!l)&&(l=E,d=O,c=D))}let p={connected:t?.connected!==!1,administrator:t?.user?.is_admin===!0,robotConnected:l!==null&&l.state!=="unavailable"&&l.state!=="unknown",robotCount:u.size},h=l?ln(l.state,l.attributes):"unknown",f=cn(l?.attributes?.battery_level),g=t?.selectedLanguage||t?.language||"en",v=t?.locale?.language||g,k=t?.locale?.time_zone==="server"?t.config?.time_zone:void 0,S=this.#t?.dates,_=S?.language===v&&S.timeZone===k?S:{language:v,timeZone:k},b=un(t?.user?.id),C=Ps(l?.attributes?.friendly_name),P=[...u.values()].sort((O,E)=>O.label.localeCompare(E.label,g,{sensitivity:"base"})),L=[p.connected,p.administrator,p.robotConnected,p.robotCount,h,f??"none",g,v,k??"browser",b,d??"none",c??"none",C,P.map(O=>`${O.entryId}:${O.label}`).join(",")].join("|");return L===this.#e&&this.#t?this.#t:(this.#e=L,this.#t={host:p,activity:h,batteryPercent:f,language:g,dates:_,userKey:b,vacuumEntityId:d,entryKey:c,robotLabel:C,robots:P},this.#t)}};var hn=1024*1024,xs=r=>{let t=s=>{let n=r.sceneHeaderBytes,i=r.scenePointStride,o=r.sceneMaxPoints,a=r.sceneMaxBytes,l=()=>{throw new Error("invalid-scene")};(!(s instanceof ArrayBuffer)||s.byteLength<n||s.byteLength>a)&&l();let d=new DataView(s),c=new Uint8Array(s,0,8),u=String.fromCharCode(...c),p=d.getUint16(8,!0),h=d.getUint16(10,!0),f=d.getUint32(12,!0),g=d.getUint32(16,!0),v=d.getUint32(20,!0),k=g+v,S=n+f;(u!=="MATIC3D\0"||p!==1||h!==i||f>1048576||k<1||k>o||S+k*h!==s.byteLength)&&l();let _;try{_=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(new Uint8Array(s,n,f)))}catch{l()}(!_||typeof _!="object"||Array.isArray(_))&&l();let b=_,C=b.meters_per_cell,P=b.origin_cells,L=b.span_cells;(typeof C!="number"||!Number.isFinite(C)||C<.001||C>.1||!Array.isArray(P)||P.length!==2||!P.every(W=>typeof W=="number"&&Number.isFinite(W))||!Array.isArray(L)||L.length!==2||!L.every(W=>typeof W=="number"&&Number.isFinite(W)&&W>=1&&W<=65536))&&l();let E=(Array.isArray(b.rooms)?b.rooms.slice(0,128):[]).flatMap((W,we)=>{if(!W||typeof W!="object"||Array.isArray(W))return[];let B=W,Q=typeof B.name=="string"?B.name.trim():"";if(!Q||Array.from(Q).length>128||/[\u0000-\u001f\u007f]/u.test(Q))return[];if(!Array.isArray(B.boundary)||B.boundary.length<3||B.boundary.length>8192)return[];let ke=B.boundary.flatMap(V=>{if(!Array.isArray(V)||V.length!==2)return[];let[J,ne]=V;return typeof J=="number"&&Number.isFinite(J)&&typeof ne=="number"&&Number.isFinite(ne)?[[J,ne]]:[]}),ee=B.center;if(ke.length<3||!Array.isArray(ee)||ee.length!==2)return[];let[te,se]=ee;return typeof te!="number"||!Number.isFinite(te)||typeof se!="number"||!Number.isFinite(se)?[]:[{id:`scene-room-${we+1}`,name:Q,boundary:ke,center:[te,se]}]}),D=typeof b.sample_step=="number"&&Number.isInteger(b.sample_step)?Math.max(1,Math.min(o,b.sample_step)):1,G=P,be=L;return{buffer:s,pointOffset:S,floorCount:g,surfaceCount:v,total:k,metadata:{metersPerCell:C,origin:[G[0],G[1]],span:[be[0],be[1]],sampleStep:D,rooms:E}}};return{parseTransfer:t,decodeDeltaTransfer:async(s,n,i)=>{let o=(T="invalid-scene-delta")=>{throw new Error(T)},a=()=>{if(i?.aborted)throw new DOMException("Aborted","AbortError")};(!(s instanceof ArrayBuffer)||s.byteLength<r.deltaHeaderBytes||s.byteLength>r.deltaHeaderBytes+r.deltaMaxBytes||!(n.buffer instanceof ArrayBuffer)||n.buffer.byteLength<r.sceneHeaderBytes||n.buffer.byteLength>r.deltaMaxBytes||!Number.isSafeInteger(n.revision)||n.revision<0)&&o("invalid-scene-delta-size");let l=new DataView(s),d=String.fromCharCode(...new Uint8Array(s,0,8)),c=l.getUint16(8,!0),u=l.getUint16(10,!0),p=l.getBigUint64(12,!0),h=l.getBigUint64(20,!0),f=l.getUint32(28,!0),g=l.getUint32(32,!0),v=Number(p),k=Number(h);(d!=="MATICDLT"||c!==1||u!==1||!Number.isSafeInteger(v)||!Number.isSafeInteger(k)||v!==n.revision||k<=n.revision||f<r.sceneHeaderBytes||f>r.deltaMaxBytes||g<1||g>r.deltaMaxBytes||g+r.deltaHeaderBytes!==s.byteLength)&&o(),typeof DecompressionStream!="function"&&o("scene-delta-decompression-unavailable"),a();let S=new Uint8Array(s,r.deltaHeaderBytes,g),_=Math.max(n.buffer.byteLength,f);_>r.deltaMaxBytes&&o("invalid-scene-delta-size");let b=new Uint8Array(_),P=new Blob([S]).stream().pipeThrough(new DecompressionStream("deflate")).getReader(),L=0,O=null;try{for(O=()=>{P.cancel().catch(()=>{})},i?.addEventListener("abort",O,{once:!0});;){a();let{done:T,value:Z}=await P.read();if(T)break;(!(Z instanceof Uint8Array)||L+Z.byteLength>_)&&o(),b.set(Z,L),L+=Z.byteLength}}catch(T){if(await P.cancel().catch(()=>{}),i?.aborted||T instanceof DOMException&&T.name==="AbortError")throw new DOMException("Aborted","AbortError");if(T instanceof Error&&T.message==="invalid-scene-delta")throw T;o()}finally{O&&i?.removeEventListener("abort",O),P.releaseLock()}a(),L!==_&&o();let E=new Uint8Array(n.buffer),D=new DataView(b.buffer,b.byteOffset,b.byteLength),G=Math.min(r.sceneHeaderBytes,E.byteLength);for(let T=0;T<G;T+=1)b[T]=(b[T]??0)^(E[T]??0);let be=D.getUint32(12,!0),W=D.getUint32(16,!0),we=D.getUint32(20,!0),B=r.sceneHeaderBytes+be,Q=W+we,ke=B===n.pointOffset&&W===n.floorCount&&we===n.surfaceCount,ee=B+Q*r.scenePointStride,te=ke&&ee===f&&Q<=r.sceneMaxPoints,se=[],V=-1,J=!1,ne=()=>{J&&V>=0&&se.push(V),J=!1};for(let T=G;T<E.byteLength;T+=r.xorChunkBytes){a();let Z=Math.min(E.byteLength,T+r.xorChunkBytes);for(let H=T;H<Z;H+=1){let Ct=E[H]??0,Mt=(b[H]??0)^Ct;if(b[H]=Mt,!te||H<n.pointOffset||H>=ee)continue;let Pt=Math.floor((H-n.pointOffset)/r.dirtyBlockBytes);Pt!==V&&(ne(),V=Pt),Mt!==Ct&&(J=!0)}Z<E.byteLength&&await new Promise(H=>globalThis.setTimeout(H,0))}ne(),a();let an=f===b.byteLength?b.buffer:b.slice(0,f).buffer;return{parsed:t(an),revision:k,...te?{deltaHint:{baseRevision:v,blockBytes:r.dirtyBlockBytes,dirtyBlocks:se}}:{}}}}},As=Object.freeze({deltaHeaderBytes:me,deltaMaxBytes:ae,sceneHeaderBytes:it,sceneMaxBytes:re,sceneMaxPoints:Vt,scenePointStride:Ut,dirtyBlockBytes:jt,xorChunkBytes:hn}),Ts=xs(As),pn=r=>{try{return Ts.parseTransfer(r)}catch{throw new R("invalid-scene")}},mn=()=>`
  const { parseTransfer, decodeDeltaTransfer } = (${xs.toString()})(Object.freeze(${JSON.stringify(As)}));
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
`,Le=class{#e=null;#t=null;#i=!1;#s=!1;#a=0;#r=null;#o=null;#n=null;constructor(){if(!(typeof Worker!="function"||typeof URL?.createObjectURL!="function"))try{this.#t=URL.createObjectURL(new Blob([mn()],{type:"text/javascript"})),this.#y()}catch{this.#e=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}}async parse(t,e){if(this.#u(e),t.byteLength>re||t.byteLength<it)throw new R("invalid-scene");let s=await this.#h({kind:"parse",buffer:t},e,async n=>(await new Promise(i=>globalThis.setTimeout(i,0)),this.#u(n),{id:0,ok:!0,parsed:pn(t)}));if(!s.parsed)throw new R("invalid-scene");return s.parsed}async decodeDelta(t,e,s){if(this.#u(s),t.byteLength>me+ae||e.buffer.byteLength>ae)throw new R("invalid-scene-delta-size");let n={buffer:e.buffer,revision:e.revision,pointOffset:e.pointOffset,floorCount:e.floorCount,surfaceCount:e.surfaceCount},i;try{i=await this.#h({kind:"delta",payload:t},s,async o=>(await new Promise(a=>globalThis.setTimeout(a,0)),this.#u(o),Ts.decodeDeltaTransfer(t,n,o).then(a=>({id:0,ok:!0,...a}))),n)}catch(o){throw o instanceof R?o:s?.aborted||o instanceof DOMException&&o.name==="AbortError"?new DOMException("Aborted","AbortError"):o instanceof Error&&(o.message.startsWith("invalid-scene")||o.message==="scene-delta-decompression-unavailable")?new R(o.message):new R("invalid-scene-delta")}if(!i.parsed||i.revision===void 0)throw new R("invalid-scene-delta");return{parsed:i.parsed,revision:i.revision,...i.deltaHint?{deltaHint:i.deltaHint}:{}}}#u(t){if(this.#s)throw new R("scene-parser-disposed");if(t?.aborted)throw new DOMException("Aborted","AbortError")}#y(){if(!(!this.#t||this.#i||this.#s))try{let t=new Worker(this.#t);t.onmessage=e=>{let s=this.#r;this.#e!==t||!s||s.worker!==t||e.data.id!==s.id||(e.data.ok?this.#b(s,e.data):this.#b(s,void 0,new R(e.data.problem||"invalid-scene")))},t.onerror=()=>this.#c(t),t.onmessageerror=()=>this.#c(t),this.#e=t}catch{this.#e=null,this.#i=!0}}async#h(t,e,s,n){return this.#u(e),new Promise((i,o)=>{let a,l=()=>e?.removeEventListener("abort",a.abort),d=(c,u)=>{a.settled||(a.settled=!0,l(),u!==void 0?o(u):c?i(c):o(new R("invalid-scene")))};a={id:++this.#a,message:t,...e?{signal:e}:{},fallback:s,...n?{base:n}:{},settle:d,abort:()=>this.#g(a),settled:!1,worker:null},e?.addEventListener("abort",a.abort,{once:!0}),e?.aborted||this.#s?d(void 0,e?.aborted?new DOMException("Aborted","AbortError"):new R("scene-parser-disposed")):this.#r?this.#o?d(void 0,new R("scene-parser-busy")):this.#o=a:(this.#r=a,this.#w(a))})}#w(t){if(this.#r!==t)return;if(this.#s){this.#b(t,void 0,new R("scene-parser-disposed"));return}if(t.signal?.aborted){this.#b(t,void 0,new DOMException("Aborted","AbortError"));return}!this.#e&&!this.#i&&this.#y();let e=this.#e;if(e){t.worker=e;try{let n,i;if(t.message.kind==="parse")n={id:t.id,kind:t.message.kind,buffer:t.message.buffer},i=[t.message.buffer];else{if(!t.base)throw new R("invalid-scene-delta");let o={...t.base,buffer:t.base.buffer.slice(0)};n={id:t.id,kind:t.message.kind,payload:t.message.payload,base:o},i=[t.message.payload,o.buffer]}e.postMessage(n,i)}catch{this.#c(e)}return}let s=new AbortController;this.#n=s,Promise.resolve().then(()=>t.fallback(s.signal)).then(n=>this.#b(t,n),n=>this.#b(t,void 0,n))}#g(t){let e=new DOMException("Aborted","AbortError");if(this.#o===t){this.#o=null,t.settle(void 0,e);return}this.#r===t&&(t.worker?(this.#f(),this.#b(t,void 0,e)):this.#n?.abort())}#b(t,e,s){if(this.#r!==t){t.settle(void 0,new R("scene-parser-disposed"));return}let n=t.signal?.aborted?new DOMException("Aborted","AbortError"):s;t.settle(e,n),this.#r=null,this.#n=null,t.worker=null,this.#s||this.#m()}#m(){if(this.#s||this.#r||!this.#o)return;let t=this.#o;if(this.#o=null,t.signal?.aborted){t.settle(void 0,new DOMException("Aborted","AbortError")),this.#m();return}this.#r=t,this.#w(t)}#c(t){if(this.#e!==t)return;this.#i=!0,this.#f();let e=this.#r;e?.worker===t?this.#b(e,void 0,new R("scene-worker-failed")):this.#m()}#f(){this.#e?.terminate(),this.#e=null}dispose(){if(this.#s)return;this.#s=!0;let t=this.#o;this.#o=null,t?.settle(void 0,new R("scene-parser-disposed"));let e=this.#r;this.#f(),this.#n?.abort(),this.#n=null,e&&(e.worker=null,e.settle(void 0,new R("scene-parser-disposed"))),this.#r=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}};var pt=["catalog","scene","sceneDelta","pose","history","plans","areas","areaSave","areaDelete"];var mt=()=>({requests:0,completed:0,failed:0,aborted:0,timedOut:0,totalDurationMs:0,maxDurationMs:0}),Is=r=>Math.min(1e9,r+1),$s=r=>Number.isFinite(r)?Math.min(1e12,Math.max(0,r)):0,ce=class{#e=mt();#t=!1;record(t,e){if(this.#t)return;let s=Math.round($s(e)*100)/100;this.#e.requests=Is(this.#e.requests),this.#e[t]=Is(this.#e[t]),this.#e.totalDurationMs=$s(this.#e.totalDurationMs+s),this.#e.maxDurationMs=Math.max(this.#e.maxDurationMs,s)}snapshot(){return Object.freeze({...this.#e})}reset(){this.#t||Object.assign(this.#e,mt())}dispose(){this.#t=!0,Object.assign(this.#e,mt())}},We=class{#e=Object.fromEntries(pt.map(t=>[t,new ce]));#t=!1;record(t,e,s){this.#t||this.#e[t].record(e,s)}snapshot(){let t=Object.fromEntries(pt.map(e=>[e,this.#e[e].snapshot()]));return Object.freeze(t)}dispose(){if(!this.#t){this.#t=!0;for(let t of pt)this.#e[t].dispose()}}};var N={catalog:1e4,scene:6e4,delta:35e3,pose:1e4,history:15e3,workflow:15e3,mutation:2e4,roomPreview:15e3},fn=2,fe=new WeakMap,x=class extends Error{constructor(t,e=null){super(t),this.name="BackendError",this.code=t,this.status=e}},Os=(r,t)=>{let e=r.headers.get("X-Matic-Revision");if(e===null)return t;let s=Number(e);if(!Number.isSafeInteger(s)||s<0)throw new R("invalid-scene-revision");return s},Ds=(r,t)=>{let e=r.headers.get("X-Matic-Floor-Coherent");if(e===null)return t;if(e==="1")return!0;if(e==="0")return!1;throw new R("invalid-scene-floor-header")},qe=class{#e;#t=new Le;#i=new WeakMap;#s=new Set;#a=new We;#r=!1;constructor(t){this.#e=t}requestDiagnostics(){return this.#a.snapshot()}async#o(t,e,s=Number.POSITIVE_INFINITY,n="invalid-response-size"){let i=t.body?.getReader();if(!i)return new ArrayBuffer(0);let o=()=>{i.cancel().catch(()=>{})};e.addEventListener("abort",o,{once:!0});try{if(e.aborted)throw o(),new DOMException("Aborted","AbortError");let a=[],l=0;for(;;){let u=await i.read();if(e.aborted)throw new DOMException("Aborted","AbortError");if(u.done)break;if(l+u.value.byteLength>s)throw i.cancel().catch(()=>{}),new R(n);a.push(u.value),l+=u.value.byteLength}let d=new Uint8Array(l),c=0;for(let u of a)d.set(u,c),c+=u.byteLength;return d.buffer}finally{e.removeEventListener("abort",o),i.releaseLock()}}async#n(t,e,s,n,i,o){if(!es(e))throw new x("invalid-private-path");if(i?.aborted)throw new DOMException("Aborted","AbortError");let a=performance.now(),l="failed",d=new AbortController,c=()=>{},u=new Promise((g,v)=>{c=v}),p=()=>{d.abort(),c(new DOMException("Aborted","AbortError"))};i?.addEventListener("abort",p,{once:!0});let h=!1,f=window.setTimeout(()=>{h=!0,p()},n);try{let g=this.#e(),v=new Headers(s.headers),k={...s,cache:"no-store",credentials:"same-origin",headers:Object.fromEntries(v.entries()),signal:d.signal},S=async()=>{let b;if(typeof g?.fetchWithAuth=="function")b=await g.fetchWithAuth(e,k);else{let C=g?.auth?.accessToken||g?.auth?.data?.access_token;C&&v.set("Authorization",`Bearer ${C}`);let P=typeof g?.hassUrl=="function"?g.hassUrl(e):e;b=await fetch(P,{...k,headers:v})}try{if(d.signal.aborted)throw new DOMException("Aborted","AbortError");return await o(b,d.signal)}finally{b.body&&!b.body.locked&&b.body.cancel().catch(()=>{})}},_=await Promise.race([S(),u]);return l="completed",_}catch(g){throw h&&!i?.aborted?(l="timedOut",new x("request-timeout")):d.signal.aborted?(l="aborted",new DOMException("Aborted","AbortError")):g}finally{window.clearTimeout(f),i?.removeEventListener("abort",p),this.#a.record(t,l,performance.now()-a)}}async#u(t,e,s,n,i={}){return this.#n(t,e,{...i,headers:{Accept:"application/json",...i.headers||{}}},s,n,async(o,a)=>{if(!o.ok){let l=o.headers.get("X-Matic-Plans-Conflict");throw new x(l==="map-rechecking"?"map-rechecking":"request-failed",o.status)}try{return JSON.parse(new TextDecoder().decode(await this.#o(o,a)))}catch{throw new R("invalid-json-response")}})}async catalog(t){return Ae(await this.#u("catalog",Kt,N.catalog,t))}async scene(t,e,s,n,i,o){let a=new Headers({Accept:"application/vnd.matic.slam-scene"});return n==="live"&&a.set("X-Matic-Prefer-Cached","1"),o&&a.set("If-None-Match",o),this.#n("scene",t,{headers:a},N.scene,i,async(l,d)=>{let c=Os(l,e),u=Ds(l,s);if(l.status===304)return{scene:null,floorCoherent:u,revision:c,notModified:!0};if(!l.ok)throw new x("scene-request-failed",l.status);if(l.headers.get("Content-Type")?.split(";",1)[0]!=="application/vnd.matic.slam-scene")throw new R("invalid-scene-content-type");return{scene:{...await this.#t.parse(await this.#o(l,d,re,"invalid-scene-size"),d),revision:c,etag:l.headers.get("ETag"),source:n},floorCoherent:u,revision:c,notModified:!1}})}async sceneDelta(t,e,s,n){let i=t.includes("?")?"&":"?";return this.#n("sceneDelta",`${t}${i}since=${encodeURIComponent(e.revision)}`,{headers:{Accept:"application/vnd.matic.slam-delta, application/vnd.matic.slam-scene"}},N.delta,n,async(o,a)=>{let l=Os(o,e.revision),d=Ds(o,s);if(o.status===204){if(l!==e.revision)throw new R("invalid-scene-delta-revision");return{scene:null,floorCoherent:d,revision:l,notModified:!0}}if(!o.ok)throw new x("delta-request-failed",o.status);if(l<=e.revision)throw new R("invalid-scene-delta-revision");let c=o.headers.get("Content-Type")?.split(";",1)[0];if(c!=="application/vnd.matic.slam-delta"&&c!=="application/vnd.matic.slam-scene")throw new R("invalid-scene-delta-content-type");let u=c==="application/vnd.matic.slam-delta",p=u?me+ae:re,h=Number(o.headers.get("Content-Length"));if(Number.isFinite(h)&&h>p)throw new R(u?"invalid-scene-delta-size":"invalid-scene-size");let f=await this.#o(o,a,p,u?"invalid-scene-delta-size":"invalid-scene-size");if(u){let v=Number(o.headers.get("X-Matic-Base-Revision"));if(!Number.isSafeInteger(v)||v!==e.revision)throw new R("invalid-scene-delta-base");let k=await this.#t.decodeDelta(f,e,a);if(k.revision!==l)throw new R("invalid-scene-delta-revision");return{scene:{...k.parsed,revision:l,etag:o.headers.get("ETag"),source:"live",...k.deltaHint?{deltaHint:k.deltaHint}:{}},floorCoherent:d,revision:l,notModified:!1}}return{scene:{...await this.#t.parse(f,a),revision:l,etag:o.headers.get("ETag"),source:"live"},floorCoherent:d,revision:l,notModified:!1}})}async pose(t,e){return Zt(await this.#u("pose",t,N.pose,e))}async history(t,e){return Yt(await this.#u("history",t,N.history,e))}async plans(t,e){return Jt(await this.#u("plans",t,N.workflow,e))}async areas(t,e){return Gt(await this.#u("areas",t,N.workflow,e))}async previewRoomSequence(t,e,s,n){if(!t||t.length>255||e.length<1||e.length>100)throw new R("invalid-room-sequence-preview-request");if(n?.aborted)throw new DOMException("Aborted","AbortError");let i=this.#e()?.connection;if(!i?.sendMessagePromise)throw new x("preview-unavailable");let o=null,a=()=>{},l=new Promise((k,S)=>{a=S}),d=this.#i.get(i),c,u=new Promise(k=>{c=k});this.#i.set(i,u);let p=!1,h=()=>{p||(p=!0,c(),this.#i.get(i)===u&&this.#i.delete(i))},f=!1,g=()=>{a(new DOMException("Aborted","AbortError")),f&&(h(),o!==null&&window.clearTimeout(o),o=null)};n?.addEventListener("abort",g,{once:!0});let v=new Promise((k,S)=>{o=window.setTimeout(()=>{o=null,S(new x("preview-timeout"))},N.roomPreview)});v.catch(()=>{f&&h()});try{if(d&&(await Promise.race([d,l,v]),n?.aborted))throw new DOMException("Aborted","AbortError");let k=fe.get(i)??0;if(k>=fn)throw new x("preview-unavailable");let S=i.sendMessagePromise({type:"call_service",domain:"matic_robot",service:"preview_room_sequence",target:{entity_id:t},service_data:{rooms:e.map(P=>({room:P.room,cleaning_mode:P.cleaning_mode,coverage_setting:P.coverage_setting})),use_room_schedule:!0,override_room_schedule:s},return_response:!0});fe.set(i,k+1),f=!0;let _=!1,b=()=>{if(!_){_=!0;let P=(fe.get(i)??1)-1;P===0?fe.delete(i):fe.set(i,P)}h(),o!==null&&window.clearTimeout(o),o=null};S.then(b,b);let C=await Promise.race([S,l,v]);if(n?.aborted)throw new DOMException("Aborted","AbortError");if(!C||typeof C!="object"||Array.isArray(C)||!("response"in C))throw new R("invalid-room-sequence-preview-envelope");return Xt(C.response)}finally{f||(d?d.then(h,h):h(),o!==null&&window.clearTimeout(o),o=null),n?.removeEventListener("abort",g)}}async saveArea(t,e,s){let n=await this.#u("areaSave",t,N.mutation,s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e.areaId?{area_id:e.areaId}:{},name:e.name,circles:e.circles,...e.outline?.closed?{outline:e.outline.points}:{},cleaning_mode:e.cleaningMode,coverage_setting:e.coverageSetting})});if(!n||typeof n!="object"||typeof n.id!="string")throw new R("invalid-area-save-response");return n.id}async deleteArea(t,e,s){await this.#n("areaDelete",`${t}?area_id=${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json"}},N.mutation,s,async n=>{if(!n.ok)throw new x("area-delete-failed",n.status)})}async service(t,e,s,n,i={}){let o=this.#e();if(this.#r||typeof o?.callService!="function")throw new x("service-unavailable");let a=null,l=null;try{let d=i.returnResponse?o.callService(t,e,s,{entity_id:n},!0,!0):o.callService(t,e,s,{entity_id:n});return!i.returnResponse&&!i.acknowledgementTimeout?await d:await Promise.race([d,new Promise((c,u)=>{l=()=>{a!==null&&window.clearTimeout(a),a=null,u(new DOMException("Aborted","AbortError"))},this.#s.add(l),a=window.setTimeout(()=>u(new x("mutation-timeout")),N.mutation)})])}finally{a!==null&&window.clearTimeout(a),l&&this.#s.delete(l)}}dispose(){if(!this.#r){this.#r=!0,this.#a.dispose();for(let t of this.#s)t();this.#s.clear(),this.#t.dispose()}}};var Ws=()=>({version:4,view:"top",appearance:"photo",labels:!0,quality:"auto",cameras:{}}),ve=(r,t,e)=>Math.max(t,Math.min(e,r)),qs=r=>r.replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",ft=(r,t=4)=>`matic-map-studio:v${t}:${qs(r)}`,vn=r=>{if(!r||typeof r!="object")return null;let t=r;return["yaw","pitch","zoom","targetX","targetZ"].every(s=>typeof t[s]=="number"&&Number.isFinite(t[s]))?{yaw:ve(t.yaw,-Math.PI,Math.PI),pitch:ve(t.pitch,.18,Math.PI/2-.018),zoom:ve(t.zoom,.01,100),targetX:ve(t.targetX,-1e4,1e4),targetZ:ve(t.targetZ,-1e4,1e4)}:null},Ls=r=>{let t=Ws();if(!r||typeof r!="object")return t;let e=r,s=e.view==="three"||e.view==="top"||e.view==="rooms"?e.view:t.view,n=s==="rooms"?"top":s,i=e.quality==="auto"||e.quality==="efficient"||e.quality==="balanced"||e.quality==="maximum"?e.quality:t.quality,o=e.cameras&&typeof e.cameras=="object"?e.cameras:{},a={};for(let l of["three","top"]){let d=vn(o[l]);d&&(a[l]=d)}return{version:4,view:n,appearance:e.appearance==="rooms"||e.appearance==="photo"?e.appearance:t.appearance,labels:typeof e.labels=="boolean"?e.labels:t.labels,quality:i,cameras:a}},ze=class{#e="local-user";#t=null;#i=null;load(t){this.#s(),this.#e=qs(t);try{let e=window.localStorage.getItem(ft(this.#e));if(e)return Ls(JSON.parse(e));for(let s of[3,2]){let n=window.localStorage.getItem(ft(this.#e,s));if(n)return Ls(JSON.parse(n))}}catch{}return Ws()}schedule(t){this.#t!==null&&window.clearTimeout(this.#t),this.#i={key:ft(this.#e),value:t},this.#t=window.setTimeout(()=>this.#s(),250)}#s(){this.#t!==null&&window.clearTimeout(this.#t),this.#t=null;let t=this.#i;if(this.#i=null,!!t)try{window.localStorage.setItem(t.key,JSON.stringify(t.value))}catch{}}dispose(){this.#s()}};var yt=1,de=Number.MAX_SAFE_INTEGER,Fs=Number.MAX_SAFE_INTEGER,zs=64,yn=1e12,vt=4,Ns=16*1024,gn=250,bn=4e3,Ne=3e4;function q(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)?r:null}function Y(r,t){return typeof r=="number"&&Number.isSafeInteger(r)&&r>=0&&r<=t}function Ks(r){let t=q(r);if(!t)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,Fs))return null;e[s]=n}return e}function wn(r){let t=q(r);if(!t||Object.keys(t).length>128)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,Fs))return null;e[s]=n}return e}function Us(r){return typeof r=="string"&&r.length>0&&r.length<=256?r:Y(r,de)?String(r):null}function kn(r){let t=q(r),e=Us(t?.epoch);if(!t||t.schema!==yt||e===null)return null;let s=wn(t.capabilities),n=Ks(t.revisions);return!s||!n||!Y(t.sequence,de)||!Y(t.coherence_generation,de)||t.coherence_generation===0?null:{schema:t.schema,capabilities:s,epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:n}}function Bs(r,t){let e=q(r),s=kn(e?.snapshot??r);if(!s)return null;let n=q(e?.snapshot??r);if(!n||!("payload"in n))return null;let i=n.entry_id,o=q(n.identity),a=q(n.status),l=q(n.payload),d=a?a.reason===null?null:Vs(a.reason):null,c=l?.available,u=null;if(l?.entry!==void 0&&l.entry!==null){if((()=>{try{return JSON.stringify(l.entry).length}catch{return Ns+1}})()>Ns)return null;try{u=Ae({entries:[l.entry]})[0]??null}catch{return null}}let p=a?.state;return typeof i!="string"||i.length===0||i.length>128||t!==void 0&&i!==t||!o||o.entry_id!==i||o.floor_mission_id!==null&&!Y(o.floor_mission_id,de)||typeof o.floor_verified!="boolean"||o.floor_verified!==(o.floor_mission_id!==null)||!a||p!=="ready"&&p!=="stale"&&p!=="unavailable"||a.reason!==null&&d===null||typeof a.retryable!="boolean"||typeof c!="boolean"||u!==null&&u.entryId!==i||p==="ready"&&(d!==null||a.retryable||!c)||(p==="stale"||p==="unavailable")&&(d===null||c)||d==="authorization"&&a.retryable?null:{...s,entry_id:i,identity:{entry_id:i,floor_mission_id:o.floor_mission_id,floor_verified:o.floor_verified},status:{state:p,reason:d,retryable:a.retryable},payload:{available:c,entry:u}}}function Hs(r){let t=q(r),e=Us(t?.epoch),s=Ks(t?.revisions),n=t?.resources;return e===null||!s||!Y(t?.sequence,de)||!Y(t?.coherence_generation,de)||t.coherence_generation===0||!Array.isArray(n)||n.length>128||!n.every(i=>typeof i=="string"&&i.length<=128)?null:{epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:s,resources:n}}var Be=["gap","overflow","reconnect","invalid_message","server_request","restart","entry_removed","authorization","snapshot_required"];function Vs(r){return typeof r=="string"&&Be.includes(r)?r:null}function _n(r){let t=q(r);return t?.name==="AbortError"?"aborted":t?.name==="TimeoutError"?"timedOut":"failed"}function Sn(){return Object.fromEntries(Be.map(r=>[r,new ce]))}var He=class{#e;#t;#i;#s=null;#a=!1;#r=!1;#o=!1;#n=!1;#u=!1;#y=!1;#h=0;#w=!1;#g=!1;#b=!1;#m=!1;#c=null;#f=null;#P=0;#T=!1;#v=null;#k=-1;#d=new Map;#E=!1;#O=!1;#D=null;#l=[];#x=new ce;#_=Sn();#I=null;#S=null;#z=null;constructor(t,e){this.#e=t,this.#t=e,this.#i=Math.max(1,Math.min(zs,e.maxPendingInvalidations??zs))}async start(){if(!(this.#a||this.#O)){this.#O=!0;try{await this.#F(!1)}catch(t){this.#X(t),this.#R("reconnect")}}}notifyReconnect(){(this.#n||this.#y)&&(this.#A(),this.#Y("aborted"),this.#h+=1),this.#P=0,this.#w=!1,this.#n=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.requestResync("reconnect"),this.#o&&this.#j(0,!0)}requestResync(t="server_request"){this.#R(t,!0)}diagnostics(){let t=Object.fromEntries(Be.map(s=>[s,this.#_[s].snapshot()])),e=this.#S!==null&&this.#z!==null?Object.freeze({reason:this.#S,durationMs:Math.round(Math.min(yn,Math.max(0,performance.now()-this.#z))*100)/100}):null;return Object.freeze({snapshotAttempts:this.#x.snapshot(),recoveryEpisodes:Object.freeze(t),activeRecovery:e})}dispose(){if(!this.#a){this.#a=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#o=!1,this.#s?.(),this.#s=null,this.#d.clear(),this.#l=[],this.#I=null,this.#S=null,this.#z=null,this.#x.dispose();for(let t of Be)this.#_[t].dispose()}}#U(t){if(this.#a)return;let e=q(t),s=q(e?.event)??e,n=s?.type;if(n==="resync"){let o=Vs(s?.reason);if(!o){this.#R("invalid_message");return}if(o==="entry_removed"){this.#t.onEvent({type:"resync",reason:o}),this.dispose();return}this.#R(o);return}if(this.#n){if(n==="invalidate"){let o=Hs(s?.invalidation??s);o?this.#W(o):(this.#l=[],this.#T=!0)}return}let i=n==="snapshot"?Bs(s?.snapshot??s,this.#t.entryId):n==="invalidate"?Hs(s?.invalidation??s):null;if(!i){this.#R("invalid_message");return}if(n==="snapshot"){let o=i;if(this.#o)return;if(this.#v!==null&&o.epoch!==this.#v){this.#R("restart");return}this.#L(o);return}this.#V(i)}#L(t){this.#v===t.epoch&&t.sequence<this.#k||(this.#v=t.epoch,this.#k=t.sequence,this.#d.clear(),this.#t.onEvent({type:"snapshot",snapshot:t}))}#ce(t){let e=this.#l;if(this.#l=[],this.#L(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(i=>i.epoch===t.epoch&&i.sequence>=s),this.#R("gap");return}this.#V(n),s+=1}}#V(t){if(this.#o){this.#W(t);return}if(this.#v===null){this.#W(t);return}if(this.#v!==t.epoch){this.#W(t),this.#R("reconnect");return}if(!(t.sequence<=this.#k)){if(t.sequence!==this.#k+1){this.#W(t),this.#R("gap");return}this.#k=t.sequence;for(let e of t.resources)this.#d.set(e,t);if(this.#d.size>this.#i){this.#d.clear(),this.#R("overflow");return}this.#E||(this.#E=!0,queueMicrotask(()=>this.#de()))}}#W(t){this.#l.length>=this.#i?(this.#l=[],this.#T=!0,this.#R("overflow")):this.#l.push(t)}#de(){if(this.#E=!1,this.#a||this.#n||this.#d.size===0){this.#n&&this.#d.clear();return}let t=[...this.#d.values()];this.#d.clear();let e=t.reduce((n,i)=>!n||i.sequence>n.sequence?i:n,null);if(!e)return;let s=[...new Set(t.flatMap(n=>n.resources))];this.#t.onEvent({type:"invalidation",invalidation:{...e,resources:s}})}#R(t,e=!1){if(!this.#a){if(t==="authorization"){this.#N(),this.#t.onEvent({type:"resync",reason:t});return}if(!this.#n&&(this.#p(t),this.#r||(this.#r=!0,this.#t.onEvent({type:"resync",reason:t}),queueMicrotask(()=>{this.#r=!1})),t!=="entry_removed")){let s=e&&!this.#w;if(s&&(this.#w=!0),s&&this.#c!==null&&(window.clearTimeout(this.#c),this.#c=null),this.#b){if(this.#m){s&&this.#j(0,!0);return}this.#m=!0,this.#J(s);return}if(e&&this.#o){s&&(this.#g=!0);return}let n=this.#P>=vt?Ne:0;this.#j(s?0:n,s)}}}#j(t,e=!1){if(!this.#a){if(this.#c!==null){if(!e)return;window.clearTimeout(this.#c),this.#c=null}if(this.#o){this.#f=e?t:Math.max(this.#f??0,t);return}this.#c=window.setTimeout(()=>{this.#c=null,this.#F(!0)},t)}}#J(t=!1){let e=this.#P>=vt?Ne:Math.min(gn*2**this.#P,bn);this.#P<vt&&(this.#P+=1),this.#j(t?0:e,t)}async#F(t,e=!1){if(this.#a||this.#o)return;t&&this.#p(e?"authorization":"snapshot_required");let s=this.#h;this.#o=!0,this.#y=e;try{if(t&&await this.#K(),this.#a||this.#n&&!e||s!==this.#h)return;let n={startedAt:performance.now(),generation:s};this.#I=n;let i="completed",o;try{o=await this.#e.sendMessagePromise({type:"matic_robot/workspace_snapshot",version:yt,entry_id:this.#t.entryId})}catch(d){throw i=_n(d),d}finally{this.#me(n,i)}if(this.#a||this.#n&&!e||s!==this.#h)return;let a=Bs(o,this.#t.entryId);if(!a)throw new Error("invalid-workspace-snapshot");if(a.status.reason==="authorization"){this.#N(),this.#t.onEvent({type:"snapshot",snapshot:a});return}if(a.status.state!=="ready"&&a.status.retryable)throw new Error("workspace-snapshot-retryable");e&&(this.#n=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null),this.#o=!1,this.#b=!0,this.#m=!1;try{t?this.#q(a):this.#ce(a)}finally{this.#b=!1}let l=this.#m||this.#T;this.#m?this.#g&&(this.#g=!1,this.#j(0,!0)):(this.#P=0,this.#w=!1,this.#g=!1),!t&&!this.#a&&await this.#K(),this.#T&&(this.#T=!1,this.#R("overflow")),t&&a.status.state==="ready"&&!l&&!this.#a&&s===this.#h&&this.#Y("completed")}catch(n){if(this.#a||this.#n&&!e||s!==this.#h)return;if(this.#X(n),this.#pe(n))this.#N(),this.#t.onEvent({type:"resync",reason:"authorization"});else if(!e){t||this.#p("reconnect");let i=this.#g;this.#g=!1,this.#J(i)}}finally{this.#o=!1,this.#y=!1,this.#u?(this.#u=!1,this.#B(0)):e&&this.#n&&this.#B(Ne);let n=this.#f;this.#f=null,n!==null&&this.#j(n)}}async#K(){if(this.#a||this.#s)return;if(this.#D)return this.#D;let t=(async()=>{let e=await this.#e.subscribeMessage(s=>this.#U(s),{type:"matic_robot/workspace_subscribe",version:yt,entry_id:this.#t.entryId});this.#a?e():this.#s=e})();this.#D=t;try{await t}finally{this.#D===t&&(this.#D=null)}}#q(t){let e=this.#l;if(this.#l=[],this.#v===t.epoch&&t.sequence<this.#k){this.#l=e,this.#R("snapshot_required");return}if(this.#L(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(i=>i.sequence>=s),this.#R("gap");return}this.#V(n),s+=1}}#pe(t){let e=q(t),s=e?.code,n=e?.status??e?.statusCode;return s==="unauthorized"||s==="not_authorized"||s==="auth_invalid"||n===401||n===403}#p(t){this.#S!==null||this.#a||(this.#S=t,this.#z=performance.now())}#Y(t){let e=this.#S,s=this.#z;this.#S=null,this.#z=null,!(e===null||s===null||this.#a)&&this.#_[e].record(t,performance.now()-s)}#me(t,e){this.#I!==t||this.#a||t.generation!==this.#h||(this.#I=null,this.#x.record(e,performance.now()-t.startedAt))}#A(){let t=this.#I;t!==null&&(this.#I=null,!this.#a&&t.generation===this.#h&&this.#x.record("aborted",performance.now()-t.startedAt))}#N(){this.#A(),this.#Y("failed"),this.#h+=1,this.#n||(this.#n=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#u=!1),this.#d.clear(),this.#l=[],this.#T=!1,this.#f=null,this.#P=0,this.#w=!1,this.#g=!1,this.#y||this.#B(Ne)}#B(t){this.#a||this.#c!==null||this.#u||(this.#c=window.setTimeout(()=>{if(this.#c=null,!this.#a){if(this.#o){this.#u=!0;return}this.#F(!0,!0)}},t))}#X(t){this.#t.onError?.(t instanceof Error?t:new Error("Workspace transport failed"))}};var Fe=class{#e;#t;#i=document.visibilityState!=="hidden";#s=!1;#a=!1;#r=!1;constructor({onSuspend:t,onResume:e}){this.#e=t,this.#t=e}get active(){return this.#i}start(){this.#s||this.#a||(this.#s=!0,window.addEventListener("pagehide",this.#o),window.addEventListener("pageshow",this.#n),document.addEventListener("visibilitychange",this.#u),document.visibilityState==="hidden"&&(this.#i?this.#h(!1):this.#e()))}dispose(){this.#a||(this.#a=!0,this.#s&&(window.removeEventListener("pagehide",this.#o),window.removeEventListener("pageshow",this.#n),document.removeEventListener("visibilitychange",this.#u)))}#o=()=>{this.#r=!0,this.#h(!1)};#n=t=>{if(this.#r=!1,t.persisted){document.visibilityState==="hidden"?this.#h(!1):(this.#h(!1),this.#h(!0));return}this.#y()};#u=()=>{this.#y()};#y(){if(this.#r||document.visibilityState==="hidden"){this.#h(!1);return}this.#h(!0)}#h(t){this.#i===t||this.#a||(this.#i=t,t?this.#t():this.#e())}};var m=(r,t,e=null)=>({status:r,value:t,problem:e}),ye=r=>r.status==="loading"?m("idle",r.value):r,z=r=>r instanceof DOMException&&r.name==="AbortError",Rn={notice:M,parseSavedPlanId:Qt,BackendError:x,isAbort:z,canEditCoordinates:et,initialWorkspaceState:K,draftForPlan:Ze,hasStoppableWork:Re},U=(r,t)=>r instanceof x||r&&typeof r=="object"&&"code"in r&&typeof r.code=="string"?r.code:t,I={stopUnconfirmed:M("error","v4_notice_stop_unconfirmed","Home Assistant can't confirm the robot stopped, so press Stop again if it's still moving."),actionUnconfirmed:M("error","v4_notice_action_unconfirmed","Home Assistant can't confirm that command, so check the robot before trying again."),mapChanged:M("info","v4_notice_map_changed","The map changed, so choose what to clean again."),statusRefreshed:M("info","v4_notice_status_refreshed","Status refreshed, so check the robot before trying again."),planSaveFailed:M("error","v4_notice_plan_save_failed","Home Assistant can't confirm the plan was saved, so check your plans, then try again."),planDeleteFailed:M("error","v4_notice_plan_delete_failed","The plan wasn't deleted; try again."),planPreviewMissing:M("warning","v4_notice_plan_preview_missing","The next-run preview isn't ready; reload your plans, then try again."),planRemoved:M("warning","v4_notice_plan_removed","This plan was removed elsewhere, so nothing was changed."),planPreviewRefreshFailed:M("warning","v4_notice_plan_preview_refresh_failed","The next-run preview didn't refresh; check the plan, then try again."),planPreviewNone:M("warning","v4_notice_plan_preview_none","This plan has no next-run preview; review its rooms and schedules."),planPreviewChanged:M("info","v4_notice_plan_preview_changed","The next run changed; check it before you run the plan."),roomPreviewBlocked:M("warning","v4_notice_room_preview_blocked","A room can't use these settings, so check the note above the rooms."),roomPreviewChanged:M("info","v4_notice_room_preview_changed","The room settings changed, so check them and start again."),roomPreviewFailed:M("warning","v4_notice_room_preview_failed","Home Assistant couldn't check the room settings, so try starting again."),areaRemoved:M("warning","v4_notice_area_removed","This saved area was removed elsewhere. Your edits are kept as a new draft; saving will create a new area."),areaSaveFailed:M("error","v4_notice_area_save_failed","Home Assistant can't confirm the area was saved, so try again."),areaDeleteFailed:M("error","v4_notice_area_delete_failed","Home Assistant can't confirm the area was deleted, so try again."),resetMopFailed:M("error","v4_notice_reset_mop_failed","Mopping progress wasn't reset; try again."),resetVacuumFailed:M("error","v4_notice_reset_vacuum_failed","Vacuum rotation progress wasn't reset; try again.")},En=r=>M("warning","v4_notice_saved_map","Showing the saved map from {date} without the robot's position.",{date:{date:r}}),js={coverage_identity_unavailable:M("error","v4_notice_coverage_task_unknown","Home Assistant can't confirm the current clean, so check the robot first."),coverage_activity_unavailable:M("error","v4_notice_coverage_activity_unknown","Home Assistant can't confirm whether the robot is cleaning, so check it first."),coverage_native_session_active:M("error","v4_notice_coverage_robot_busy","The robot is already cleaning, so wait for it to finish."),coverage_identity_changed:M("error","v4_notice_coverage_task_changed","The clean changed while starting, so check the robot first.")},Cn=r=>{let{translation_domain:t,translation_key:e}=r??{};return t==="matic_robot"&&typeof e=="string"&&Object.hasOwn(js,e)?js[e]??null:null},ue=r=>[r.selectedFloorOrdinal??"none",r.mapFloorOrdinal??"none",r.mapFloorCoherent?"coherent":"transition"].join(":"),he=r=>[r.mapFloorOrdinal??"none",r.mapSessionVerified?"verified":"unverified",r.mapSessionKey??"no-session"].join(":"),F=r=>[r.entryId,r.selectedFloorOrdinal??"none",r.mapFloorOrdinal??"none"].join("|"),A=r=>[r.entryId,ue(r),he(r)].join("|"),gt=r=>[A(r),r.mapRevision].join("|"),Ke=r=>r.runnerLocked||r.stopSettlePending||r.activePlan||r.nativeReconciliationPending||r.nativeSessionActive===!0,Ue=(r,t)=>r.entryKey===t.entryKey&&r.generation===t.generation&&r.floorKey===t.floorKey&&r.missionKey===t.missionKey,Mn=1e3,Pn=5e3,Ys=["rooms","plans","plan","draw","areaReview"],Xs=["plan-mutation","area-mutation"],Gs=r=>JSON.stringify({...r,previewToken:void 0}),Ve=(r,t)=>r.label?r.label:r.active?"Current floor":`Saved floor ${r.ordinal??t}`,je=class{#e;#t;#i;#s;#a=new ze;#r=null;#o=new Map;#n=null;#u=null;#y=null;#h=null;#w=0;#g=!1;#b=!1;#m=!1;#c=!1;#f=null;#P=Promise.resolve();#T=!1;#v=!1;#k="";#d=null;#E=0;#O=null;#D="";#l=!1;#x=!0;#_=null;#I=null;#S=null;#z=null;#U="";#L=!1;#ce=null;#V;#W;workspaceDiagnostics(){return this.#_?.diagnostics()??null}constructor(t,e,s=null,n){this.#e=t,this.#t=new Dt(t.value.generation),this.#i=e,this.#V=s,this.#W=n,this.#s=new Fe({onSuspend:()=>this.#de(),onResume:()=>{this.#R()}}),this.#e.patch({pageActive:this.#s.active}),this.#z=t.subscribe(i=>{this.#j(i),this.#q()}),this.#s.start()}#de(){this.#A(!1,Xs),this.#G(),this.#H(Xs),this.#m=!1,this.#c=!1,this.#f=null,this.#v=!1,this.#he();let t=this.#e.value;this.#e.patch({resources:{...t.resources,catalog:ye(t.resources.catalog),scene:ye(t.resources.scene),history:ye(t.resources.history),plans:ye(t.resources.plans),areas:ye(t.resources.areas),pose:m("idle",null)}})}async#R(){if(this.#l||!this.#s.active)return;this.#e.patch({pageActive:!0});let t=this.#n;if(this.#l||!this.#s.active||!t?.host.connected||!t.host.administrator||!t.host.robotConnected||t.host.robotCount===0)return;let e=this.#e.value;this.#ke(),this.#p(t),await this.refreshCatalog(!0,!0);let s=this.#e.value,n=s.resources.entry;if(this.#l||!this.#s.active||e.dataMode!=="history"||s.generation!==e.generation||s.dataMode!=="history"||s.selection.entryId!==e.selection.entryId||s.selection.floorId!==e.selection.floorId||s.selection.historyId!==e.selection.historyId||s.resources.catalog.status!=="ready"||!n||n.entryId!==s.selection.entryId)return;let i=s.resources.history.value?.floors.find(u=>u.id===s.selection.floorId),o=i?.snapshots.find(u=>u.id===s.selection.historyId);if(!i)return;let a=this.#t.begin(n.entryId,i.id,o?.id??i.id,o?.revision??0);if(this.#e.patch({generation:a.generation}),await this.#ae(n,a),!this.#t.accepts(a)||!this.#s.active||this.#e.value.resources.history.status!=="ready")return;let l=this.#e.value,d=l.resources.history.value?.floors.find(u=>u.id===i.id),c=d?.snapshots.find(u=>u.id===o?.id);!d||o&&!c||(c&&c.revision!==a.revision&&(a=this.#t.begin(n.entryId,i.id,c.id,c.revision)),this.#e.patch({generation:a.generation,coherence:"current"}),c&&(!l.resources.scene.value||c.revision!==o?.revision)&&await this.#ge(c,a))}#j(t){if(!t.owner)return;let e={version:4,view:t.view,appearance:t.appearance,labels:t.labelsVisible,quality:t.quality,cameras:t.cameras},s=this.#r;this.#r=e,!(!s||s.view===e.view&&s.appearance===e.appearance&&s.labels===e.labels&&s.quality===e.quality&&s.cameras===e.cameras)&&this.#a.schedule(e)}#J(t){let e=Tt(t),s=t.resources.entry,n=this.#n?.vacuumEntityId;if(!e||!s||!n||!t.selection.entryId||t.workflow!=="rooms"||t.dataMode!=="live"||t.floor.readOnly||t.coherence!=="current"||!t.host.connected||!t.host.administrator||!t.host.robotConnected||t.command!=="idle"||t.resources.plans.status!=="ready")return null;let i=t.selection.roomIds.map(o=>{let a=t.selection.roomSettings.find(l=>l.roomId===o);return a?{room:o,cleaning_mode:a.cleaningMode,coverage_setting:a.coverageSetting}:null});return i.some(o=>o===null)?null:{key:e,generation:t.generation,retryRevision:t.manualRoomPreviewRetry,floorKey:ue(s),missionKey:he(s),entryId:t.selection.entryId,entityId:n,rooms:i,overrideRoomSchedule:!t.selection.useRoomSchedule}}#F(t){return JSON.stringify([t.key,t.generation,t.retryRevision,t.floorKey,t.missionKey,t.entryId,t.entityId])}#K(t){let e=this.#J(this.#e.value);return!this.#l&&e!==null&&this.#F(e)===this.#F(t)}#q(){if(this.#l||!this.#n)return;let t=this.#e.value,e=this.#J(t);if(!e){this.#o.get("room-preview")?.abort(),this.#o.delete("room-preview"),this.#U="",(t.manualRoomPreview.status!=="idle"||t.manualRoomPreview.value!==null)&&this.#e.patch({manualRoomPreview:m("idle",null)});return}let s=this.#F(e),n=Je(t);if(n&&n.key===e.key&&n.generation===e.generation&&n.floorKey===e.floorKey&&n.missionKey===e.missionKey&&n.preview.entryId===e.entryId){this.#U=s;return}if(this.#U===s)return;this.#o.get("room-preview")?.abort(),this.#U=s;let i=this.#C("room-preview");this.#e.patch({manualRoomPreview:m("loading",null)}),this.#pe(e,i)}async#pe(t,e){try{let s=await this.#i.previewRoomSequence(t.entityId,t.rooms,t.overrideRoomSchedule,e.signal);return!this.#K(t)||e.signal.aborted||s.entryId!==t.entryId?null:(this.#e.patch({manualRoomPreview:m("ready",{key:t.key,generation:t.generation,floorKey:t.floorKey,missionKey:t.missionKey,preview:s})}),s)}catch(s){return z(s)||e.signal.aborted||!this.#K(t)||this.#e.patch({manualRoomPreview:m("error",null,U(s,"preview-unavailable"))}),null}finally{this.#M("room-preview",e)}}sync(t){if(this.#l)return;let e=this.#_,s=this.#n?.host.robotConnected??null,n=this.#n?.host.administrator===!1&&t.host.administrator,i=this.#n!==null&&!this.#n.host.robotConnected&&t.host.robotConnected,o=this.#e.value.owner,a=o!==null&&(o.entryKey!==t.entryKey||o.userKey!==t.userKey);a&&(this.#re("context-changed",t.entryKey),this.#g&&(this.#m=!0,this.#c=!1,this.#f=null));let l=this.#x;this.#x=t.host.connected,this.#n=t,this.#p(t),i&&e&&e===this.#_&&e.notifyReconnect();let d=t.userKey!==this.#D?this.#a.load(t.userKey):null;if(d&&(this.#D=t.userKey,this.#r=d),this.#e.patch({owner:{userKey:t.userKey,entryKey:t.entryKey},host:t.host,activity:t.activity,batteryPercent:t.batteryPercent,robotLabel:t.robotLabel,robots:t.robots,locale:t.language,selection:{...this.#e.value.selection,entryId:t.entryKey},...d?{view:d.view,appearance:d.appearance,labelsVisible:d.labels,quality:d.quality,cameras:d.cameras}:{}}),!t.host.administrator){this.#G(),this.#re("access-required",t.entryKey);return}if(!t.host.connected){l&&(this.#e.patch({generation:this.#t.invalidate()}),this.#B(),this.#k=""),this.#G(),this.#m=!1,this.#c=!1,this.#f=null,this.#v=!1,this.#H();let c=this.#e.value,u=c.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...c.resources,catalog:c.resources.catalog.status==="loading"?m("idle",c.resources.catalog.value):c.resources.catalog,plans:c.resources.plans.status==="loading"?m("idle",c.resources.plans.value):c.resources.plans,areas:c.resources.areas.status==="loading"?m("idle",c.resources.areas.value):c.resources.areas,pose:m("idle",null)},map:{...c.map,available:u!==null,exactPose:!1}});return}if(t.host.robotCount===0){this.#G(),this.#re("map-unavailable",t.entryKey);return}if(t.entryKey&&!t.vacuumEntityId){this.#G(),this.#re("no-loaded-robot",t.entryKey);return}if(!t.host.robotConnected){s!==!1&&(this.#A(),this.#H(),this.#m=!1,this.#c=!1,this.#f=null,this.#v=!1),this.#G();let c=this.#e.value,u=c.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...c.resources,catalog:c.resources.catalog.status==="loading"?m("idle",c.resources.catalog.value):c.resources.catalog,scene:c.resources.scene.status==="loading"?m("idle",u):c.resources.scene,pose:m("idle",null)},map:{...c.map,available:u!==null,exactPose:!1}});return}if(this.#s.active){if(this.#ke(),!l||i||n){this.refreshCatalog(!0,!0);return}(a||this.#e.value.resources.catalog.status==="idle"||t.entryKey&&t.entryKey!==this.#e.value.selection.entryId)&&this.refreshCatalog(!0)}}#p(t){let e=t.entryKey,s=this.#e.value,n=s.resources.catalog.value?.find(l=>l.entryId===e),i=s.resources.entry;if(!(this.#W??!!(n?.liveWorkspaceTransportEnabled&&i?.entryId===e&&i.liveWorkspaceTransportEnabled))||!this.#V||!t.host.administrator||!t.host.connected||!t.vacuumEntityId||!e||!this.#s.active){this.#he();return}if(this.#_&&this.#I===e)return;this.#_?.dispose(),this.#S=null;let a=new He(this.#V,{entryId:e,onEvent:l=>{if(!(this.#l||!this.#s.active||this.#_!==a||this.#I!==e||this.#n?.entryKey!==e)){if(l.type==="resync"&&l.reason==="entry_removed"){a.dispose(),this.#_===a&&(this.#_=null,this.#I=null,this.#S=null);return}if(l.type==="snapshot"){let{snapshot:d}=l,c=this.#e.value.resources.entry,u=d.payload.entry;if(d.entry_id!==e||d.identity.entry_id!==e)return;if(u&&(u.entryId!==e||d.identity.floor_verified!==(u.mapFloorCoherent&&u.mapSessionVerified))){a.requestResync("invalid_message");return}let p=!u&&c?.entryId===e&&d.identity.floor_verified!==(c.mapFloorCoherent&&c.mapSessionVerified);if(d.status.reason==="authorization"){this.#S=null,this.#N(e,["plans","areas","history"]);return}let h=this.#S,f=[],g=h!==null&&h.epoch!==d.epoch;if(h&&h.epoch===d.epoch){let _=new Set([...Object.keys(h.revisions),...Object.keys(d.revisions)]),b=[..._].some(C=>(d.revisions[C]??-1)<(h.revisions[C]??-1));if(d.coherence_generation<h.coherenceGeneration||d.coherence_generation===h.coherenceGeneration&&b){a.requestResync("restart");return}f=[..._].filter(C=>(d.revisions[C]??-1)>(h.revisions[C]??-1))}g&&(f=["plans","areas","history"]);let v=h!==null&&(h.epoch!==d.epoch||h.coherenceGeneration!==d.coherence_generation),k=!!(c&&u&&c.entryId===e&&A(c)!==A(u));if(this.#S={entryId:d.entry_id,epoch:d.epoch,sequence:d.sequence,coherenceGeneration:d.coherence_generation,revisions:d.revisions},p){this.#N(e,["plans","areas","history"]);return}if(v||k){this.#N(e,f);return}let S=u!==null&&c?.entryId===e&&this.#me(u);if(h&&f.length){if(d.sequence<=h.sequence){a.requestResync("invalid_message");return}this.#S=h,this.#Y({epoch:d.epoch,sequence:d.sequence,coherence_generation:d.coherence_generation,revisions:d.revisions,resources:f},e,a,S)}return}if(l.type==="resync"){this.#S=null,l.reason!=="authorization"&&this.#N(e,["plans","areas","history"]);return}this.#Y(l.invalidation,e,a)}}});this.#_=a,this.#I=e,a.start()}#Y(t,e,s,n=!1){let i=this.#S;if(!i||i.entryId!==e||this.#_!==s||t.epoch!==i.epoch||t.sequence<=i.sequence)return;let o=t.coherence_generation!==i.coherenceGeneration,l=[...new Set([...Object.keys(i.revisions),...Object.keys(t.revisions)])].some(h=>(t.revisions[h]??-1)<(i.revisions[h]??-1));if(t.coherence_generation<i.coherenceGeneration||!o&&l){s.requestResync("restart");return}let d=new Set(t.resources),c=[...d].some(h=>(t.revisions[h]??-1)>(i.revisions[h]??-1));if(this.#S={...i,sequence:t.sequence,coherenceGeneration:t.coherence_generation,revisions:t.revisions},!c&&!o)return;if(o){this.#N(e,t.resources);return}d.has("scene")&&d.delete("scene");let u=this.#e.value.resources.entry,p=this.#t.current();!u||u.entryId!==e||!p||d.size&&this.#fe(u,p,d,!n)}#me(t){let e=this.#e.value,s=e.resources.entry;if(!s||A(s)!==A(t))return!1;let n=t.mapRevision===s.mapRevision?t:{...t,mapRevision:s.mapRevision},i=e.resources.catalog,o=i.value?.map(u=>u.entryId===n.entryId?n:u),a=n.mapFloorCoherent&&n.mapSessionVerified,l=n.health==="problem"||n.health==="limited",d=this.#d,c=d?.key===A(n)&&this.#ve(d)&&(d.attempt!==null||d.retryTimer!==null);return this.#e.patch({managedLock:Ke(n),coherence:c?"verifying":a?l?"degraded":"current":"verifying",map:{...e.map,available:e.resources.scene.value!==null,complete:n.mapComplete&&!n.mapTruncated,floorCoherent:n.mapFloorCoherent,sessionVerified:n.mapSessionVerified,exactPose:a&&!c?e.map.exactPose:!1},floor:{...e.floor,classifiedCount:Math.max(1,n.historyFloorCount),...c&&e.resources.scene.value?{readOnly:!0}:{}},resources:{...e.resources,entry:n,...o?{catalog:{...i,value:o}}:{}}}),this.#n&&this.#p(this.#n),!0}#A(t=this.#e.value.pageActive,e=[]){let s=this.#t.invalidate();this.#B();let n=this.#e.value;this.#e.patch({generation:s,pageActive:t,coherence:n.resources.scene.value?"verifying":"unavailable",floor:{...n.floor,readOnly:n.floor.readOnly||n.resources.scene.value!==null},map:{...n.map,exactPose:!1}}),this.#d&&this.#ie(this.#d.key),this.#H(["catalog",...e]),this.#k=""}#N(t,e=[]){this.#$(),this.#A(),this.refreshCatalog(!0,!0).then(()=>{if(this.#l||this.#n?.entryKey!==t||!this.#n.host.administrator||!this.#n.host.connected)return;let s=this.#e.value.resources.entry,n=this.#t.current();if(!s||s.entryId!==t||!n)return;let i=new Set(e);i.delete("history"),this.#fe(s,n,i,!1)})}#B(){this.#E+=1,this.#O=null}#X(t){let e=this.#O,s=this.#t.current();return!!(e&&s&&e.generation===this.#E&&e.stamp.generation===s.generation&&e.entryId===t.entryId&&e.coherenceIdentity===A(t)&&e.deltaUrl===t.deltaUrl&&s.entryKey===t.entryId&&s.floorKey===ue(t)&&s.missionKey===he(t)&&t.mapFloorCoherent&&t.mapSessionVerified&&this.#e.value.dataMode==="live"&&this.#e.value.selection.floorId==="current"&&this.#n?.host.connected&&this.#n.host.robotConnected&&this.#n.host.administrator)}#fe(t,e,s,n=!0){(s.has("plans")||s.has("plan_state"))&&this.loadPlans(),s.has("areas")&&this.loadAreas(),s.has("history")&&this.#ae(t,e),n&&["status","robot_state","activity","plan_state"].some(i=>s.has(i))&&this.refreshCatalog(!0,!0,!0)}#ke(){this.#s.active&&(this.#u===null&&(this.#u=window.setInterval(()=>{this.refreshCatalog()},5e3)),this.#y===null&&(this.#y=window.setInterval(()=>{this.refreshPose()},Mn)))}#G(){this.#u!==null&&window.clearInterval(this.#u),this.#y!==null&&window.clearInterval(this.#y),this.#u=null,this.#y=null,this.#$()}#$(){let t=this.#d;if(this.#d=null,!t)return;t.attempt?.finishReplacementRead?.(),t.attempt&&(t.attempt.finishReplacementRead=null),t.retryTimer!==null&&window.clearTimeout(t.retryTimer);let e=t.attempt?.controller,s=!!(e&&e===this.#o.get("catalog")&&this.#e.value.resources.catalog.status==="loading");if(e?.abort(),s){let n=this.#e.value.resources;this.#e.patch({resources:{...n,catalog:m("idle",n.catalog.value)}})}this.#f?.state===t&&(this.#m=!1,this.#c=!1,this.#f=null)}#ne(t,e){let s=this.#d;s?.key===A(e)&&(s.failedKinds.delete(t),t==="delta"&&this.#Z(e),s.failedKinds.size===0&&this.#$())}#Z(t){this.#ie(A(t))}#ie(t){let e=this.#d;e?.key===t&&(e.attempt?.finishReplacementRead?.(),e.attempt&&(e.attempt.finishReplacementRead=null))}#ee(t,e){let s=A(e),n=this.#d;n?.key!==s&&(this.#$(),n={key:s,failedKinds:new Set,retryTimer:null,attempt:null},this.#d=n),n.failedKinds.add(t),t==="delta"&&this.#Z(e),this.#ve(n)&&this.#t.current()&&this.#A(),!n.attempt&&n.retryTimer===null&&(n.failedKinds.size===1&&n.failedKinds.has(t)?this.#oe(n):this.#Q(n))}#ve(t){let e=this.#e.value;return t.failedKinds.has("pose")||e.floor.readOnly||!e.map.floorCoherent||!e.map.sessionVerified}#Q(t){t.retryTimer!==null||t.failedKinds.size===0||(t.retryTimer=window.setTimeout(()=>{t.retryTimer=null;let e=this.#e.value.resources.entry,s=this.#n?.host;if(this.#d!==t||this.#l||!e||A(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#d===t&&this.#$();return}this.#oe(t)},Pn))}async#oe(t){if(this.#l||this.#d!==t||t.attempt)return;let e=this.#e.value.resources.entry,s=this.#n?.host;if(!e||A(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#d===t&&this.#$();return}if(this.#o.has("scene")){this.#Q(t);return}let n=this.#ve(t);n?this.#t.current()&&this.#A():(this.#B(),this.#o.get("delta")?.abort());let i,o=new Promise(d=>{i=d}),a={generation:this.#t.generation,controller:null,replacementRead:o,finishReplacementRead:i};t.attempt=a;let l={state:t,attempt:a};try{await this.refreshCatalog(!0,!1,!n,l),t.failedKinds.has("delta")&&this.#d===t&&t.attempt===a&&await a.replacementRead}finally{if(this.#d!==t||t.attempt!==a)return;a.finishReplacementRead=null,t.attempt=null,t.failedKinds.size>0&&this.#Q(t)}}#ye(t){let e=this.#e.value,s=this.#n?.host;return!this.#l&&this.#s.active&&this.#d===t.state&&t.state.attempt===t.attempt&&t.attempt.generation===this.#t.generation&&e.generation===this.#t.generation&&e.dataMode==="live"&&e.selection.floorId==="current"&&e.resources.entry!==null&&A(e.resources.entry)===t.state.key&&!!(s?.connected&&s.administrator&&s.robotConnected&&s.robotCount>0)}#C(t){this.#o.get(t)?.abort();let e=new AbortController;return this.#o.set(t,e),e}#M(t,e){this.#o.get(t)===e&&this.#o.delete(t)}#H(t=[]){let e=!1;for(let[s,n]of this.#o)t.includes(s)||(e||=s==="plan-mutation"||s==="area-mutation"||s==="plan-preflight",n.abort(),this.#o.delete(s));e&&this.#e.value.command==="pending"&&this.#e.patch({command:"idle",notice:null})}#_e(){this.#w+=1,this.#h!==null&&window.clearTimeout(this.#h),this.#h=null}#re(t,e=null){this.#$(),this.#_e(),this.#t.invalidate(),this.#B(),this.#k="";let s=this.#t.generation;this.#H();let n=this.#e.value,i=K();this.#e.patch({command:"idle",dataMode:i.dataMode,floor:i.floor,managedLock:!1,workflow:"none",dialog:null,notice:null,draftFloorOrdinal:null,draw:i.draw,planDraft:i.planDraft,areaDraft:i.areaDraft,generation:s,coherence:n.host.administrator?"unavailable":"blocked",fullMap:!1,precisionOpen:!1,resources:{catalog:m("error",null,t),entry:null,scene:m("idle",null),pose:m("idle",null),history:m("idle",null),plans:m("idle",null),areas:m("idle",null)},manualRoomPreview:m("idle",null),map:{available:!1,complete:!1,floorCoherent:!1,sessionVerified:!1,exactPose:!1},selection:{...i.selection,entryId:e,entrySource:n.selection.entrySource,floorId:"current",historyId:null}})}async refreshCatalog(t=!1,e=!1,s=!1,n=null){if(this.#l||!this.#s.active||!this.#n?.host.administrator||!this.#n.host.connected||this.#n.host.robotCount===0||n&&(!this.#n.host.robotConnected||!this.#ye(n)))return;if(this.#g)return t&&(this.#b?e&&(this.#m?this.#c&&=s:this.#c=s,this.#m=!0):(this.#m?this.#c&&=s:this.#c=s,this.#m=!0,this.#o.get("catalog")?.abort()),n&&(this.#m?this.#c&&=s:this.#c=s,this.#f=n,this.#m=!0)),this.#P;this.#g=!0,this.#b=t;let i;this.#P=new Promise(l=>{i=l});let o=this.#C("catalog");n&&(n.attempt.controller=o);let a=this.#e.value.resources.catalog.value;this.#e.patch({resources:{...this.#e.value.resources,catalog:m("loading",a)}});try{let l=await this.#i.catalog(o.signal);if(o.signal.aborted||this.#l||n&&!this.#ye(n))return;let d=this.#n?.entryKey,c=d?l.find(v=>v.entryId===d)??null:l[0]??null,u=this.#e.value.resources.entry;if(c&&this.#d?.key===A(c)&&(this.#d.attempt!==null||this.#d.retryTimer!==null)&&(!n||!this.#ye(n))){this.#e.patch({managedLock:Ke(c),resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:u}});return}let p=!!(c&&u&&A(c)===A(u)&&this.#X(u));if(c&&u&&F(c)===F(u)&&ue(c)===ue(u)&&he(c)===he(u)&&(p||c.mapRevision<u.mapRevision||!t&&this.#o.has("scene"))&&(c={...c,mapRevision:u.mapRevision}),this.#e.patch({managedLock:c?Ke(c):!1,resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:c}}),this.#n&&this.#p(this.#n),!c){this.#re("no-loaded-robot",this.#n?.entryKey??null);return}if(this.#e.value.selection.floorId!=="current"||this.#e.value.dataMode!=="live"){n&&this.#Z(c);return}let h=gt(c),f=this.#t.current(),g=!!(f&&u&&A(c)===A(u)&&c.mapFloorCoherent&&c.mapSessionVerified);if((!t||s)&&(h===this.#k||g)){let v=this.#e.value,k=c.mapFloorCoherent&&c.mapSessionVerified,S=c.health==="problem"||c.health==="limited";this.#e.patch({coherence:k?S?"degraded":"current":"verifying",map:{...v.map,available:v.resources.scene.value!==null,complete:c.mapComplete&&!c.mapTruncated,floorCoherent:c.mapFloorCoherent,sessionVerified:c.mapSessionVerified,exactPose:k?v.map.exactPose:!1},floor:{...v.floor,classifiedCount:Math.max(1,c.historyFloorCount)}}),k&&this.#e.value.resources.plans.problem==="map-rechecking"&&this.loadPlans(),this.#be();let _=f;if(_&&g&&(c.mapRevision>_.revision||n!==null)&&(c.mapRevision>_.revision&&(_=this.#t.advance(_,c.mapRevision)),_)){this.#k=h,this.#B();let b=this.#e.value.resources;this.#e.patch({resources:{...b,scene:m("loading",b.scene.value)}}),this.#ue(c,_)}_&&!v.resources.scene.value&&!this.#o.has("history")&&this.#ae(c,_),k&&_&&(v.resources.scene.status==="error"||v.floor.readOnly)&&!this.#o.has("scene")&&this.#ue(c,_);return}this.#k=h,this.#Se(c,u)}catch(l){if(z(l)||o.signal.aborted||this.#l)return;n&&this.#ie(n.state.key),this.#e.patch({coherence:this.#e.value.resources.scene.value?"degraded":"unavailable",resources:{...this.#e.value.resources,catalog:m("error",a,U(l,"catalog-unavailable"))}})}finally{this.#M("catalog",o),n?.attempt.controller===o&&(n.attempt.controller=null),this.#g=!1;let l=this.#m,d=this.#c,c=this.#f;this.#b=!1;try{l&&!this.#l&&(this.#m=!1,this.#c=!1,this.#f=null,await this.refreshCatalog(!0,!1,d,c))}finally{i()}}}#Se(t,e){this.#d!==null&&this.#d.key!==A(t)&&this.#$();let s=this.#e.value,n=!!(e&&F(e)===F(t)),i=t.mapFloorCoherent&&t.mapSessionVerified,o=s.draftMapSessionKey??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapSessionKey:null),a=s.draftFloorOrdinal??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapFloorOrdinal:null),l=i?t.mapFloorOrdinal:null,d=i?t.mapSessionKey:null,c=e!==null&&e.entryId!==t.entryId||a!==null&&l!==null&&a!==l||o!==null&&d!==null&&o!==d,u=n&&i&&a===t.mapFloorOrdinal&&o===t.mapSessionKey,p=["catalog"];n&&!c&&p.push("plans","areas"),u&&p.push("plan-mutation","area-mutation");let h=this.#t.begin(t.entryId,ue(t),he(t),t.mapRevision);this.#d?.key===A(t)&&this.#d.attempt&&(this.#d.attempt.generation=h.generation),this.#B(),this.#H(p);let f=e?.entryId===t.entryId?s.resources.scene.value:null,g=f!==null&&(s.floor.readOnly||!n||!i||e?.mapSessionKey!==t.mapSessionKey),v=s.resources.pose.value,k=n&&i&&t.mapSessionKey!==null&&v?.position&&v.mapSessionKey===t.mapSessionKey?v:null;c&&this.#_e();let S=K(),_=t.health==="problem"||t.health==="limited",b=this.#e.value;this.#e.patch({...c?{command:"idle",workflow:"none",dialog:null,precisionOpen:!1,fullMap:!1,draw:S.draw,planDraft:S.planDraft,areaDraft:S.areaDraft,notice:I.mapChanged}:{},draftFloorOrdinal:l??a,draftMapSessionKey:d??o,managedLock:Ke(t),generation:h.generation,coherence:i?_?"degraded":g?"verifying":"current":"verifying",dataMode:"live",resources:{...b.resources,entry:t,scene:m(i?"loading":"idle",f),pose:m(i?"loading":"idle",k),history:m("loading",b.resources.history.value),plans:n&&!c?b.resources.plans:m("idle",null),areas:n&&!c?b.resources.areas:m("idle",null)},map:{available:f!==null,complete:t.mapComplete&&!t.mapTruncated,floorCoherent:t.mapFloorCoherent,sessionVerified:t.mapSessionVerified,exactPose:i&&k!==null&&!g},floor:{classifiedCount:Math.max(1,t.historyFloorCount),displayName:g?s.floor.displayName:t.selectedFloorOrdinal?`Floor ${t.selectedFloorOrdinal}`:"Current floor",readOnly:g},selection:{...b.selection,entryId:t.entryId,floorId:"current",historyId:null,roomIds:c?[]:b.selection.roomIds,roomSettings:c?[]:b.selection.roomSettings,planId:c?null:b.selection.planId,areaId:c?null:b.selection.areaId}}),this.#ae(t,h),i&&this.#e.value.resources.plans.status==="idle"&&this.loadPlans(),this.#be(),i&&(this.#ue(t,h),this.#le(t,h))}async#ue(t,e){if(!this.#s.active)return;let s=this.#C("scene");try{let n=await this.#i.scene(t.sceneUrl,t.mapRevision,t.mapFloorCoherent,"live",s.signal);if(!this.#t.accepts(e))return;if(!n.floorCoherent){let d=this.#e.value;this.#e.patch({coherence:"verifying",resources:{...d.resources,scene:m("error",d.resources.scene.value,"map-rechecking"),pose:m("idle",null)},map:{...d.map,available:d.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...d.floor,readOnly:d.resources.scene.value!==null}}),this.#Z(t);return}if(n.revision<e.revision||!n.scene)throw new x("scene-unavailable");let i=n.revision===e.revision?e:this.#t.advance(e,n.revision);if(!i)throw new x("scene-unavailable");let o=this.#e.value,a={...o.resources.entry??t,mapRevision:n.revision};this.#k=gt(a),this.#e.patch({coherence:a.health==="problem"||a.health==="limited"?"degraded":"current",resources:{...o.resources,entry:a,scene:m("ready",n.scene)},map:{...o.map,available:!0},floor:{...o.floor,readOnly:!1,displayName:o.resources.history.value?.floors.find(d=>d.active)?.label||(a.selectedFloorOrdinal?`Floor ${a.selectedFloorOrdinal}`:"Current floor")},notice:o.notice?.key==="v4_notice_saved_map"?null:o.notice});let l=this.#e.value.resources.plans;if((l.status==="idle"||l.problem==="map-rechecking")&&this.loadPlans(),this.#be(),t.deltaUrl&&typeof DecompressionStream=="function"){let d=++this.#E;this.#Ce(a,i,n.scene,d)}else this.#ne("delta",a)}catch(n){if(z(n)||!this.#t.accepts(e))return;if(n instanceof x&&n.code==="request-timeout"){let l=this.#e.value;this.#e.patch({resources:{...l.resources,scene:m("loading",l.resources.scene.value,"scene-building")}}),window.setTimeout(()=>{this.#l||!this.#t.accepts(e)||this.#e.value.selection.floorId!=="current"||this.#ue(t,e)},250);return}this.#Z(t);let i=this.#e.value,o=i.resources.pose.value,a=i.resources.scene.value!==null&&t.mapSessionKey!==null&&o?.position!==null&&o?.mapSessionKey===t.mapSessionKey;this.#e.patch({coherence:"degraded",resources:{...i.resources,scene:m("error",i.resources.scene.value,U(n,"scene-unavailable"))},map:{...i.map,available:i.resources.scene.value!==null,exactPose:a}})}finally{this.#M("scene",s)}}async#Ce(t,e,s,n){if(!t.deltaUrl||typeof DecompressionStream!="function")return;let i=t.deltaUrl,o={generation:n,stamp:e,entryId:t.entryId,coherenceIdentity:A(t),deltaUrl:i};if(n!==this.#E||!this.#t.accepts(e))return;this.#O=o;let a=t,l=e,d=s;try{for(;!this.#l&&this.#s.active&&n===this.#E&&this.#t.accepts(l)&&this.#e.value.selection.floorId==="current";){let c=this.#C("delta");try{let u=await this.#i.sceneDelta(i,d,a.mapFloorCoherent,c.signal);if(c.signal.aborted||this.#l||n!==this.#E||!this.#t.accepts(l))return;if(!u.floorCoherent){let f=this.#e.value;this.#e.patch({coherence:"verifying",map:{...f.map,available:f.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...f.floor,readOnly:f.resources.scene.value!==null},resources:{...f.resources,scene:m("error",f.resources.scene.value,"map-rechecking"),pose:m("idle",null)}}),this.#ee("delta",a);return}if(u.notModified||!u.scene){this.#ne("delta",a),await new Promise(f=>window.setTimeout(f,100));continue}let p=this.#t.advance(l,u.revision);if(!p)return;l=p,o.stamp=p,d=u.scene,a={...a,mapRevision:u.revision},this.#ne("delta",a),this.#k=gt(a);let h=this.#e.value;this.#e.patch({resources:{...h.resources,entry:a,scene:m("ready",d)},map:{...h.map,available:!0,floorCoherent:!0}}),this.#le(a,l)}finally{this.#M("delta",c)}}}catch(c){if(z(c)||this.#l||n!==this.#E||!this.#t.accepts(l))return;this.#ee("delta",a)}finally{this.#O===o&&(this.#O=null)}}async#ae(t,e){if(!this.#s.active)return;let s=this.#C("history");try{let n=await this.#i.history(t.historyUrl,s.signal),i=this.#t.current();if(s.signal.aborted||!i||!Ue(e,i)||n.entryId!==t.entryId)return;let o=this.#e.value,a=n.floors.find(c=>c.id===o.selection.floorId),l=!o.selection.historyId||a?.snapshots.some(c=>c.id===o.selection.historyId),d=o.dataMode==="live"?n.floors.find(c=>c.active):a;if(this.#e.patch({resources:{...this.#e.value.resources,history:m("ready",n)},floor:{...this.#e.value.floor,classifiedCount:n.floors.length,...d&&!(o.dataMode==="live"&&o.floor.readOnly)?{displayName:Ve(d,1)}:{}}}),o.dataMode==="live"&&!o.resources.scene.value){let c=n.floors.flatMap(u=>u.snapshots.map(p=>({floor:u,snapshot:p}))).sort((u,p)=>Date.parse(p.snapshot.createdAt)-Date.parse(u.snapshot.createdAt));for(let u of c){let p;try{p=await this.#i.scene(u.snapshot.sceneUrl,u.snapshot.revision,!0,"history",s.signal)}catch(g){if(z(g)||s.signal.aborted)return;continue}let h=this.#t.current();if(s.signal.aborted||!h||!Ue(e,h)||this.#e.value.resources.scene.value)return;if(!p.scene)continue;let f=this.#e.value;this.#e.patch({floor:{...f.floor,readOnly:!0,displayName:Ve(u.floor,1)},resources:{...f.resources,scene:m("ready",p.scene),pose:m("idle",null)},map:{...f.map,available:!0,exactPose:!1},notice:En(u.snapshot.createdAt)});break}}if(o.dataMode==="history"&&(!a||!l)){let c=a||n.floors.find(p=>p.active)||n.floors[0],u=this.selectFloor(c?.id||"current");!this.#l&&o.workflow==="history"&&this.#e.dispatch({type:"open-workflow",workflow:"history"}),await u}}catch(n){let i=this.#t.current();if(z(n)||s.signal.aborted||!i||!Ue(e,i))return;this.#e.patch({resources:{...this.#e.value.resources,history:m("error",null,U(n,"history-unavailable"))}})}finally{this.#M("history",s)}}async refreshPose(){let t=this.#e.value.resources.entry,e=this.#t.current();!t||!e||this.#e.value.selection.floorId!=="current"||!t.mapFloorCoherent||!t.mapSessionVerified||await this.#le(t,e)}async#le(t,e){if(this.#l||!this.#s.active||!this.#x||!this.#n?.host.connected)return;if(this.#T){this.#v=!0;return}this.#T=!0;let s=this.#C("pose");try{let n=await this.#i.pose(t.poseUrl,s.signal),i=this.#t.current(),o=this.#e.value.resources.entry;if(!i||!Ue(e,i)||!o||!this.#e.value.map.floorCoherent)return;if(!n.floorCoherent||n.mapSessionKey===null||n.mapSessionKey!==o.mapSessionKey){this.#e.patch({resources:{...this.#e.value.resources,pose:m("idle",null)},map:{...this.#e.value.map,exactPose:!1}}),this.#ee("pose",o);return}this.#ne("pose",o);let a=this.#e.value,l=a.resources.pose.value,d=!!(a.map.exactPose&&l?.position&&l.mapSessionKey===o.mapSessionKey);if(n.position===null&&d){this.#e.patch({resources:{...a.resources,pose:m("ready",l)}});return}this.#e.patch({resources:{...a.resources,pose:m("ready",n)},map:{...a.map,exactPose:n.position!==null}})}catch(n){if(z(n)||!this.#t.accepts(e))return;let i=this.#e.value,o=i.resources.pose.value,a=!!(i.map.exactPose&&o?.position&&o.mapSessionKey===i.resources.entry?.mapSessionKey);this.#e.patch({resources:{...i.resources,pose:m("error",a?o:null,U(n,"pose-unavailable"))},map:{...i.map,exactPose:a}})}finally{if(this.#M("pose",s),this.#T=!1,this.#v&&!this.#l&&this.#x&&this.#n?.host.connected&&this.#n.host.administrator&&this.#n.host.robotCount>0){this.#v=!1;let n=this.#e.value.resources.entry,i=this.#t.current();n&&i&&this.#le(n,i)}else this.#v=!1}}async selectFloor(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;let n=e.floors.find(l=>l.id===t);if(!n&&t!=="current")return;let i=this.#e.value;if(i.workflow==="draw"&&(i.draw.dirty||i.areaDraft.dirty)||i.workflow==="areaReview"&&(i.draw.dirty||i.areaDraft.dirty))return;if(!n||n.active){this.#$(),this.#k="";let l=this.#e.value;this.#e.patch({resources:{...l.resources,plans:m("idle",null),areas:m("idle",null),scene:m("idle",l.resources.scene.value),pose:m("idle",null)},map:{...l.map,available:l.resources.scene.value!==null,exactPose:!1},coherence:"verifying",floor:{...l.floor,readOnly:l.resources.scene.value!==null},workflow:"none",precisionOpen:!1}),this.#e.dispatch({type:"set-floor",floorId:"current"}),await this.refreshCatalog(!0);return}this.#$();let o=n.snapshots.at(-1),a=this.#t.begin(s.entryId,n.id,o?.id||n.id,o?.revision||0);this.#H(["catalog"]),this.#e.patch({generation:a.generation,coherence:"current",dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ve(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:o?.id||null},resources:{...this.#e.value.resources,scene:m(o?"loading":"empty",null),pose:m("idle",null),plans:m("idle",null),areas:m("idle",null)},workflow:"none",precisionOpen:!1,map:{available:!1,complete:!0,floorCoherent:!0,sessionVerified:!0,exactPose:!1}}),o&&await this.#ge(o,a)}async selectHistory(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;if(!t){await this.selectFloor("current");return}let n=e.floors.find(a=>a.snapshots.some(l=>l.id===t)),i=n?.snapshots.find(a=>a.id===t);if(!n||!i)return;this.#$();let o=this.#t.begin(s.entryId,n.id,i.id,i.revision);this.#H(["catalog"]),this.#e.patch({generation:o.generation,dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ve(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:i.id},resources:{...this.#e.value.resources,scene:m("loading",null),pose:m("idle",null)},map:{...this.#e.value.map,available:!1,exactPose:!1}}),await this.#ge(i,o)}async#ge(t,e){if(!this.#s.active)return;let s=this.#C("history-scene");try{let n=await this.#i.scene(t.sceneUrl,t.revision,!0,"history",s.signal);if(!this.#t.accepts(e)||!n.scene)return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("ready",n.scene)},map:{...this.#e.value.map,available:!0,exactPose:!1}})}catch(n){if(z(n)||!this.#t.accepts(e))return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("error",null,U(n,"history-scene-unavailable"))}})}finally{this.#M("history-scene",s)}}async openWorkflow(t){let e=this.#e.value;if((e.dataMode==="history"||e.floor.readOnly)&&Ys.includes(t))return;let s=this.#e.value.workflow;if(t==="draw"&&s!=="draw"&&s!=="areaReview"&&this.selectArea(null),this.#e.dispatch({type:"open-workflow",workflow:t}),Ys.includes(t)&&this.#Re(),t==="history"){let n=this.#e.value.resources.entry,i=this.#t.current();n&&i&&(this.#e.patch({resources:{...this.#e.value.resources,history:m("loading",this.#e.value.resources.history.value)}}),await this.#ae(n,i))}(t==="plans"||t==="plan"||t==="rooms")&&await this.loadPlans(),(t==="draw"||t==="areaReview")&&await this.loadAreas()}async loadPlans({force:t=!1,inPlace:e=!1,onError:s}={}){let n=!e||this.#e.value.resources.plans.status!=="ready";if(!this.#s.active){this.#o.get("plans")?.abort();let l=this.#e.value.resources;return n&&this.#e.patch({resources:{...l,plans:m("idle",l.plans.value)}}),null}let i=this.#e.value.resources.entry;if(!i||!this.#t.current()||!tt(this.#e.value)||!t&&this.#o.has("plans"))return null;let o=F(i),a=this.#C("plans");n&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("loading",this.#e.value.resources.plans.value)}});try{let l=await this.#i.plans(i.plansUrl,a.signal),d=this.#e.value.resources.entry;if(a.signal.aborted||this.#l||!d||F(d)!==o)return null;let c=this.#e.value;if(c.workflow==="plan"&&c.planDraft.id&&!c.planDraft.dirty&&!l.plans.some(h=>h.id===c.planDraft.id))return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)},workflow:"plans",precisionOpen:!1,selection:{...this.#e.value.selection,planId:null},planDraft:K().planDraft,notice:I.planRemoved}),l;if(c.planDraft.dirty||c.workflow==="plan"&&(!c.planDraft.id||c.command==="pending"))return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)}}),l;let u=c.workflow==="plan"?c.selection.planId:l.selectedPlan||l.plans[0]?.id||null,p=l.plans.find(h=>h.id===u);return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",l)},selection:{...this.#e.value.selection,planId:u},planDraft:p?Ze(p):{...this.#e.value.planDraft,id:null,name:"",rooms:[],parkedRooms:[],dirty:!1}}),l}catch(l){let d=this.#e.value.resources.entry;if(z(l)||a.signal.aborted||this.#l||!d||F(d)!==o)return null;let c=l instanceof x&&l.code==="map-rechecking"?"map-rechecking":U(l,"plans-unavailable");return n&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("error",this.#e.value.resources.plans.value,c)}}),s?.(),null}finally{this.#M("plans",a)}}selectPlan(t,e=!1){this.#e.patch(It(this.#e.value,t,e))}setPlanEnabled(t){return this.#te("plan-mutation",I.planSaveFailed,(e,s)=>e.setPlanEnabled(s,t))}#be(){let t=this.#e.value;(t.workflow==="draw"||t.workflow==="areaReview")&&t.resources.areas.status==="idle"&&this.loadAreas()}async loadAreas({reconcileDraft:t=!0}={}){if(!this.#s.active){this.#o.get("areas")?.abort();let i=this.#e.value.resources;return this.#e.patch({resources:{...i,areas:m("idle",i.areas.value)}}),null}let e=this.#e.value.resources.entry;if(!e||!this.#t.current()||!tt(this.#e.value))return null;let s=F(e),n=this.#C("areas");this.#e.patch({resources:{...this.#e.value.resources,areas:m("loading",this.#e.value.resources.areas.value)}});try{let i=await this.#i.areas(e.areasUrl,n.signal),o=this.#e.value.resources.entry;if(n.signal.aborted||this.#l||!o||F(o)!==s)return null;if(i.sceneUrl!==o.sceneUrl)throw new x("areas-unavailable");this.#e.patch({resources:{...this.#e.value.resources,areas:m("ready",i)}});let a=this.#e.value.selection.areaId,l=this.#e.value,d=i.areas.some(c=>c.id===a);return t&&a!==null&&!d&&(l.draw.dirty||l.areaDraft.dirty)?this.#e.patch({selection:{...l.selection,areaId:null},areaDraft:{...l.areaDraft,id:null,status:"new",canRebind:!1,dirty:!0},notice:I.areaRemoved}):t&&!l.draw.dirty&&!l.areaDraft.dirty&&this.selectArea(d?a:null),i}catch(i){let o=this.#e.value.resources.entry;return z(i)||n.signal.aborted||this.#l||!o||F(o)!==s||this.#e.patch({resources:{...this.#e.value.resources,areas:m("error",this.#e.value.resources.areas.value,U(i,"areas-unavailable"))}}),null}finally{this.#M("areas",n)}}selectArea(t){let e=this.#e.value.resources.areas.value?.areas.find(n=>n.id===t),s=this.#e.value;this.#e.patch({selection:{...s.selection,areaId:t},areaDraft:e?this.#Me(e):{id:null,name:"",cleaningMode:"vacuum",coverageSetting:"standard",status:"new",canRebind:!1,dirty:!1},draw:{...s.draw,circles:e?.circles||[],outline:e?.outline??null,outlineUndo:[],outlineRedo:[],tool:!e||e.outline?"outline":"paint",undo:[],redo:[],dirty:!1,strokeCount:0}})}#Me(t){return{id:t.id,name:t.name,cleaningMode:t.cleaningMode,coverageSetting:t.coverageSetting,status:t.status,canRebind:t.canRebind,dirty:!1}}saveArea(t){return this.#te("area-mutation",I.areaSaveFailed,(e,s)=>e.saveArea(s),t)}deleteArea(){return this.#te("area-mutation",I.areaDeleteFailed,(t,e)=>t.deleteArea(e))}savePlan(t){return this.#te("plan-mutation",I.planSaveFailed,(e,s)=>e.savePlan(s),t)}deletePlan(){return this.#te("plan-mutation",I.planDeleteFailed,(t,e)=>t.deletePlan(e))}#Re(){return this.#ce??=import("./catalog-writes-D44AUTSA.js").catch(()=>null)}async#te(t,e,s,n){let i=n,o=d=>{let c=i;i=void 0,c?.(d)},a=this.#e.value;if(a.command==="pending"||this.#o.has(t))return o(!1);let l=this.#C(t);l.signal.addEventListener("abort",()=>o(!1),{once:!0});try{let d=await this.#Re(),c=this.#e.value;if(l.signal.aborted||!et(c)||c.command==="pending")return;if(!d){this.#e.patch({notice:e});return}await s(d,{state:a,signal:l.signal,store:this.#e,backend:this.#i,effects:this,helpers:Rn,failure:e,projection:()=>this.#n,disposed:()=>this.#l,release:()=>this.#M(t,l),settled:o})}finally{this.#M(t,l),o(!1)}}async executeAction(t,e){switch(typeof t=="string"?t:t.id){case"recheck-status":{if(this.#e.value.rechecking)return;let n=this.#e.value.selection.entryId;this.#e.patch({rechecking:!0});try{await this.refreshCatalog(!0)}finally{this.#l||this.#e.patch({rechecking:!1})}let i=this.#e.value;!this.#l&&i.selection.entryId===n&&i.resources.catalog.status==="ready"&&i.host.connected&&i.host.robotConnected&&i.coherence==="current"&&i.command==="failed"&&this.#e.patch({command:"idle",notice:I.statusRefreshed});return}case"stop":await this.#se("matic_robot","stop_intelligent_cleaning",{include_unmanaged:!0});return;case"resume":await this.#se("vacuum","send_command",{command:"resume"});return;case"run-plan":{let n=this.#e.value,i=n.selection.planId||n.resources.plans.value?.selectedPlan;if(!i||n.workflow!=="plan"||!n.planDraft.enabled||n.resources.plans.status!=="ready"||n.command!=="idle"||!Se(n))return;let o=n.selection.entryId,a=n.generation,l=n.selection.planId,d=n.planDraft,c=n.resources.plans.value?.plans.find(v=>v.id===i)?.nextRunPreview;if(!c||!/^[0-9a-f]{64}$/u.test(c.previewToken??"")){this.#e.patch({notice:I.planPreviewMissing});return}this.#e.patch({command:"pending",pendingAction:"run-plan",notice:null});let u=this.#C("plan-preflight"),p;try{p=await this.loadPlans({force:!0,inPlace:!0})}finally{this.#M("plan-preflight",u)}let h=this.#e.value,f=()=>{let v=this.#e.value;!this.#l&&v.selection.entryId===o&&v.generation===a&&v.command==="pending"&&this.#e.patch({command:"idle"})};if(u.signal.aborted||this.#l||h.selection.entryId!==o||h.generation!==a||h.workflow!=="plan"||h.selection.planId!==l||(h.selection.planId||h.resources.plans.value?.selectedPlan)!==i||h.planDraft!==d){f();return}if(!p){f(),this.#e.patch({notice:I.planPreviewRefreshFailed});return}let g=p.plans.find(v=>v.id===i)?.nextRunPreview;if(!g||g.blocker||!/^[0-9a-f]{64}$/u.test(g.previewToken??"")){f(),this.#e.patch({notice:I.planPreviewNone});return}if(!c||JSON.stringify(c)!==JSON.stringify(g)){f(),this.#e.patch({notice:I.planPreviewChanged});return}f(),await this.#se("matic_robot","run_selected_plan",{plan:i,preview_token:g.previewToken});return}case"clean-rooms":{await this.#Pe();return}case"run-area":{let n=this.#e.value.selection.areaId;n&&await this.#se("matic_robot","clean_area",{area:n});return}case"review-area":this.#e.dispatch({type:"open-workflow",workflow:"areaReview"});return;case"save-area":await this.saveArea(e);return;case"save-plan":this.#e.value.planDraft.id&&!this.#e.value.planDraft.dirty?(this.#e.dispatch({type:"set-plan-view",view:"run"}),e?.(!0)):await this.savePlan(e);return;case"delete-plan":await this.deletePlan();return;case"delete-area":await this.deleteArea();return;case"reset-room-cadence":if(typeof t=="string")return;await this.#te("plan-mutation",t.mode==="mop"?I.resetMopFailed:I.resetVacuumFailed,(n,i)=>n.resetRoomCadence(i,t));return}}async#Pe(){if(this.#L)return;let t=this.#e.value,e=this.#J(t),s=Je(t);if(!e||!s||s.key!==e.key||s.generation!==e.generation||s.floorKey!==e.floorKey||s.missionKey!==e.missionKey||s.preview.entryId!==e.entryId||s.preview.blocker||s.preview.rooms.length===0)return;this.#L=!0;let n=this.#C("room-preview");this.#U=this.#F(e),this.#e.patch({manualRoomPreview:m("loading",null),notice:null});try{let i=await this.#i.previewRoomSequence(e.entityId,e.rooms,e.overrideRoomSchedule,n.signal);if(n.signal.aborted||!this.#K(e)||i.entryId!==e.entryId)return;let o={key:e.key,generation:e.generation,floorKey:e.floorKey,missionKey:e.missionKey,preview:i};if(i.blocker||i.rooms.length===0){this.#e.patch({manualRoomPreview:m("ready",o),notice:I.roomPreviewBlocked});return}if(Gs(s.preview)!==Gs(i)){this.#e.patch({manualRoomPreview:m("ready",o),notice:I.roomPreviewChanged});return}if(this.#e.patch({manualRoomPreview:m("ready",o),notice:null}),!this.#K(e)||!Se(this.#e.value))return;await this.#se("matic_robot","clean_room_sequence",{rooms:e.rooms,use_room_schedule:!0,override_room_schedule:e.overrideRoomSchedule,return_to_base:!0,preview_token:i.previewToken})}catch(i){!z(i)&&!n.signal.aborted&&this.#K(e)&&this.#e.patch({manualRoomPreview:m("error",null,U(i,"preview-unavailable")),notice:I.roomPreviewFailed})}finally{this.#M("room-preview",n),this.#L=!1,this.#q()}}async#se(t,e,s){let n=this.#e.value,i=this.#n?.vacuumEntityId,o=e==="stop_intelligent_cleaning"||t==="vacuum"&&e==="return_to_base",a=t==="vacuum"&&e==="send_command"&&s.command==="resume";if(!i||n.selection.entryId!==this.#n?.entryKey||(o?!Wt(n):a?!Lt(n):!Se(n)))return;let l=++this.#w,d=this.#n?.entryKey,c=()=>!this.#l&&l===this.#w&&d===this.#n?.entryKey,u=o?"settling":"starting";this.#h!==null&&window.clearTimeout(this.#h),this.#h=null,this.#e.patch({command:u,notice:null});try{if(await this.#i.service(t,e,s,i),!c())return;if(t==="matic_robot"&&(e==="clean_room_sequence"||e==="run_selected_plan")){this.#e.patch({command:"idle"}),this.refreshCatalog(!0);return}this.#e.patch({command:u}),this.#h!==null&&window.clearTimeout(this.#h),this.#h=window.setTimeout(()=>{this.#h=null,c()&&this.#e.value.command===u&&this.#e.patch({command:"idle"})},15e3)}catch(p){if(!c())return;this.#e.patch({command:"failed",notice:o?I.stopUnconfirmed:Cn(p)??I.actionUnconfirmed})}}dispose(){this.#l||(this.#l=!0,this.#s.dispose(),this.#A(!1),this.#z?.(),this.#z=null,this.#e.patch({manualRoomPreview:m("idle",null),rechecking:!1}),this.#G(),this.#H(),this.#h!==null&&window.clearTimeout(this.#h),this.#h=null,this.#a.dispose(),this.#he(),this.#i.dispose())}#he(){this.#_?.dispose(),this.#_=null,this.#I=null,this.#S=null}};var xn=r=>r.workflow==="none"?0:r.workflow!=="plan"?1:r.planView==="edit"&&r.planDraft.id!==null?3:2,bt=r=>xn(r)+(r.fullMap?1:0)+(r.precisionOpen?1:0)+(r.dialog?1:0),Ye=r=>{if(!r||typeof r!="object")return null;let t=r.maticMapLayer;if(!t||typeof t!="object")return null;let e=t.owner,s=t.depth;return typeof e=="string"&&Number.isInteger(s)&&Number(s)>=0?{owner:e,depth:Number(s)}:null},Xe=class{#e;#t=`matic-map-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}`;#i=0;#s=0;#a=!1;#r=null;#o=!1;constructor(t){this.#e=t}start(){if(this.#r)return;this.#i=bt(this.#e.value);let t=Ye(history.state);this.#s=t?.owner===this.#t?t.depth:0,this.#r=this.#e.subscribe(e=>this.#n(e)),window.addEventListener("popstate",this.#u)}#n(t){let e=bt(t);if(this.#o){this.#o=!1,this.#i=e;return}if(e<this.#i&&Ye(history.state)?.owner===this.#t&&this.#s>e){let n=e-this.#s;this.#i=e,this.#s=e,this.#a||(history.go(n),this.#a=!0);return}if(e>this.#s)for(let s=this.#s+1;s<=e;s+=1){let n=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...n,maticMapLayer:{owner:this.#t,depth:s}},"",window.location.href),this.#s=s}this.#i=e}#u=()=>{let t=Ye(history.state);this.#a=!1,this.#s=t?.owner===this.#t?t.depth:0;let e=bt(this.#e.value);if(this.#s>e){let s=e-this.#s;this.#s=e,history.go(s),this.#a=!0;return}if(this.#e.value.dialog==="discardDraft"&&this.#e.value.command==="pending"){let s=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...s,maticMapLayer:{owner:this.#t,depth:this.#i}},"",window.location.href),this.#s=this.#i;return}if(!(e<=this.#s)){if(ie(this.#e.value,{type:"dismiss-top-layer"})){let s=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...s,maticMapLayer:{owner:this.#t,depth:this.#i}},"",window.location.href),this.#s=this.#i,this.#e.dispatch({type:"open-dialog",dialog:"discardDraft"});return}this.#o=!0,this.#e.dispatch({type:"dismiss-top-layer"})}};dismissTop(){return this.#i<1?!1:this.#a?(this.#e.dispatch({type:"dismiss-top-layer"}),!0):(Ye(history.state)?.owner===this.#t&&this.#s===this.#i?(history.back(),this.#s=this.#i-1,this.#a=!0):this.#e.dispatch({type:"dismiss-top-layer"}),!0)}dispose(){this.#r?.(),this.#r=null,window.removeEventListener("popstate",this.#u),this.#i=0,this.#s=0,this.#a=!1}};var Qs=[Me,Pe,ts,Ee`
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

    .precision-popover {
      position: absolute;
      z-index: 9;
      inset-inline-end: var(--ms-space-3);
      inset-block-end: 5.5rem;
      inline-size: 0;
      block-size: 0;
    }

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
    .panel-back { flex: none; }
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
    .quick-actions .ms-row[aria-disabled="true"] .ms-row__body strong,
    .quick-actions .ms-row[aria-disabled="true"] .ms-row__body small { color: var(--ms-text-disabled); }
    .home-actions { display: flex; margin: 0 0 var(--ms-space-4); }
    .quick-actions .card-title { display: flex; gap: var(--ms-space-1) var(--ms-space-2); align-items: center; min-inline-size: 0; }
    .quick-actions .card-name { overflow: hidden; min-inline-size: 0; text-overflow: ellipsis; white-space: nowrap; }
    .quick-actions .card-title .ms-chip { flex: none; }
    .quick-actions .card-lines { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; margin-block-start: 0.125rem; color: var(--ms-text); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
    .quick-actions .line { display: block; padding-inline-start: 1.25rem; text-indent: -1.25rem; }
    .quick-actions .line .ms-icon { display: inline-block; inline-size: 1rem; block-size: 1rem; margin-inline-end: var(--ms-space-1); vertical-align: -0.1875rem; color: var(--ms-resolved-indicator, var(--ms-accent)); }
    .quick-actions .line[data-tone="warning"] .ms-icon { color: var(--ms-warning); }
    .quick-actions .ms-row[aria-disabled="true"] .card-lines { color: var(--ms-text-disabled); }
    .problem { display: grid; gap: var(--ms-space-2); padding: var(--ms-space-4); border: 1px solid var(--ms-line); border-radius: var(--ms-radius-md); }
    .problem p, .loading { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-sm); line-height: var(--ms-lh-normal); }
    .problem .ms-btn { justify-self: start; text-decoration: none; }
    .ms-checkbox { display: flex; gap: var(--ms-space-2); align-items: center; min-block-size: var(--ms-control); font-size: var(--ms-t-sm); }
    .ms-checkbox input { inline-size: 1.25rem; block-size: 1.25rem; margin: 0; accent-color: var(--ms-resolved-indicator, var(--ms-accent)); }

    .action-bar { display: grid; gap: var(--ms-space-2); margin-block-start: auto; padding-block-start: var(--ms-space-4); }
    .action-summary { margin: 0; overflow: hidden; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
    .action-reason { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-align: center; }
    .action-jump { text-decoration: underline; }
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
    .narrow .sheet-grip:has(.sheet-back) { grid-template-columns: auto minmax(0, 1fr) auto auto; }
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
    .narrow .panel-back { inline-size: var(--ms-control); padding-inline: 0; }
    .narrow .panel-back .ms-btn__label {
      position: absolute;
      overflow: hidden;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      clip-path: inset(50%);
      white-space: nowrap;
    }
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
    .narrow .precision-popover { position: static; inline-size: auto; block-size: auto; }

    @media (forced-colors: active) {
      .dialog, .full-map-hud, .mobile-sheet, .problem, .notice { border: 1px solid CanvasText; }
      .quick-actions .ms-row--featured:not([aria-disabled="true"]) { border-color: CanvasText; }
      .sheet-handle { background: CanvasText; }
    }

    @media (prefers-reduced-motion: reduce) {
      .narrow .mobile-sheet { transition: none; }
    }
  `];var Js=oe(xe),Ge=oe(Nt),Zs=oe(st),An=r=>r.dataMode==="history"||r.floor.readOnly,wt=(r,t)=>{let e=(a,l,d)=>Ie(t,a,l,d);if(!r.host.connected)return{title:e("v4_reconnecting","Reconnecting"),detail:e("v4_ha_offline","Home Assistant is offline"),icon:j,notable:!0};if(!r.host.administrator)return{title:e("v4_access_required","Access required"),detail:e("v4_admin_only","Administrator only"),icon:j,notable:!0};if(r.host.robotCount===0)return{title:e("v4_no_robot_short","No robot"),detail:e("v4_set_up_robot","Set up a robot"),icon:j,notable:!0};if(_e(r))return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),detail:e("v4_choose_another_robot","Choose another robot to open its map."),icon:j,notable:!0};if(!r.host.robotConnected)return{title:e("v4_robot_offline","Robot offline"),detail:e("v4_last_map_read_only","Last known map \xB7 read only"),icon:j,notable:!0};if(r.activity==="problem")return{title:e("v4_needs_attention","Needs attention"),detail:e("v4_check_robot","Check the robot"),icon:j,notable:!0};if(r.dataMode==="history"){let a=r.resources.history.value?.floors.find(c=>c.id===r.selection.floorId),l=a?.snapshots.findIndex(c=>c.id===r.selection.historyId)??-1,d=a?.snapshots.length??0;return{title:e("v4_saved_map","Saved map"),detail:l>=0?e("v4_read_only_position","Read only \xB7 {position} of {count}",{position:l+1,count:d}):e("v4_read_only","Read only"),icon:rt,notable:!1}}if(r.coherence==="verifying"||r.coherence==="booting")return{title:e("v4_locating","Locating"),detail:e("v4_finding_map","Finding the current map"),icon:le,notable:!0};if((r.resources.entry?.activePlan||r.resources.entry?.runnerLocked)&&(r.activity==="idle"||r.activity==="docked"))return{title:e("v4_task_in_progress","Run in progress"),detail:r.coherence==="unavailable"||r.coherence==="blocked"?e("v4_task_map_unavailable","The live map is unavailable; the current clean continues."):r.activity==="docked"?e("v4_task_docked","Robot docked; the clean has not finished."):e("v4_task_waiting","Waiting for the clean to continue or finish."),icon:at,notable:!0};if(r.command==="starting"&&(r.activity==="idle"||r.activity==="docked"))return{title:e("v4_action_starting","Starting"),detail:e("v4_action_starting_detail","Waiting for the robot to begin"),icon:le,notable:!0};let s=r.coherence==="unavailable"||r.coherence==="blocked",n=e("v4_active_map_unavailable","The live map is unavailable; new cleaning is disabled."),i=a=>s?`${a} \xB7 ${n}`:a;if(r.activity==="cleaning")return{title:e("v4_cleaning","Cleaning"),detail:i(e("v4_cleaning_progress","Cleaning in progress")),icon:ct,notable:!0};if(r.activity==="recharging"){let a=r.batteryPercent===null?e("v4_recharging_detail","Will resume automatically when ready"):e("v4_recharging_battery","Charging to resume \xB7 {percent}% battery",{percent:r.batteryPercent});return{title:e("v4_recharging","Charging to resume"),detail:i(a),icon:ls,notable:!0}}if(r.activity==="paused")return{title:e("v4_paused","Paused"),detail:i(e("v4_can_resume","Cleaning can resume")),icon:dt,notable:!0};if(r.activity==="returning")return{title:e("v4_returning","Returning"),detail:i(e("v4_going_dock","Going to the dock")),icon:ct,notable:!0};if(r.activity==="stopping")return{title:e("v4_stopping","Stopping"),detail:i(e("v4_waiting_robot","Waiting for the robot")),icon:dt,notable:!0};if(s)return{title:e("v4_map_unavailable","Map unavailable"),detail:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start."),icon:j,notable:!0};if(r.coherence==="degraded")return{title:e("v4_map_limited","Map limited"),detail:r.rechecking?e("v4_locating_rechecking","Checking again"):e("v4_cleaning_blocked","Cleaning can't start"),icon:le,notable:!0,recheck:!0};let o=r.batteryPercent===null?e("v4_ready","Ready"):e("v4_battery","{percent}% battery",{percent:r.batteryPercent});return{title:r.activity==="docked"?e("v4_docked","Docked"):e("v4_ready","Ready"),detail:o,icon:le,notable:!1}},sn=r=>{let{host:t}=r;return t.connected?t.administrator?t.robotCount===0?"setup":_e(r)?"robot-unavailable":t.robotConnected?An(r)?"read-only":r.activity==="problem"?"problem":Re(r)&&r.activity!=="paused"||r.activity==="stopping"||r.command==="settling"||r.resources.entry?.stopSettlePending===!0?"busy":r.activity==="paused"?"paused":r.coherence==="unavailable"||r.coherence==="blocked"?"map-unavailable":r.coherence==="degraded"?"map-limited":r.coherence==="verifying"||r.coherence==="booting"?"locating":"ready":"offline":"administrator":"reconnecting"},Tn=(r,t,e)=>{switch(r){case"ready":return{title:e("v4_what_to_clean","Choose what to clean"),description:""};case"locating":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_reason_locating","Waiting for the robot to confirm which floor it is on.")};case"busy":return{title:e("v4_home_busy_title","The robot is busy"),description:e("v4_home_busy_detail","You can start a new clean when it's done.")};case"paused":return{title:e("v4_home_busy_title","The robot is busy"),description:e("v4_home_paused_detail","Resume or stop this clean before starting a new one.")};case"problem":return{title:e("v4_attention_title","The robot needs attention"),description:e("v4_attention_body","The robot reported a problem. Check it in the Matic app, then start a new clean.")};case"map-unavailable":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start.")};case"map-limited":return{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_map_limited_body","Home Assistant can show this map but can't confirm it well enough to start cleaning.")};case"offline":return{title:e("v4_robot_offline_title","Robot offline"),description:e("v4_robot_offline_body","Showing the last known map. Cleaning comes back when the robot reconnects.")};case"reconnecting":return{title:e("v4_reconnecting_title","Reconnecting to Home Assistant"),description:e("v4_reconnecting_body","Cleaning controls come back when Home Assistant reconnects.")};case"administrator":return{title:e("v4_admin_title","Administrator access required"),description:e("v4_admin_body","Ask a Home Assistant administrator to open this map.")};case"robot-unavailable":return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),description:e("v4_choose_another_robot","Choose another robot to open its map.")};case"read-only":return{title:e("v4_saved_map_read_only_title","Saved map is read only"),description:t.dataMode==="live"?e("v4_map_recovery_automatic","Cleaning controls return automatically when the live map is ready."):e("v4_saved_map_read_only_detail","Return to the live map to choose rooms, run a plan, or draw a custom area.")};case"setup":return{title:e("v4_setup_title","Set up your robot"),description:e("v4_no_robot_body","Add the Matic (Unofficial) integration to see a map here.")}}},kt=(r,t)=>{let e=(s,n)=>Ie(t,s,n);switch(r.workflow){case"rooms":return{title:e("v4_choose_rooms","Choose rooms"),description:e("v4_choose_rooms_detail","Choose rooms on the map or in the list.")};case"draw":return{title:e("v4_draw_area","Draw an area"),description:e("v4_draw_area_detail","Outline or paint the area, then review it before saving.")};case"plans":return{title:e("v4_your_plans","Your plans"),description:r.resources.plans.value?.plans.length===0?"":e("v4_choose_plan_detail","Tap a plan to see its next run.")};case"plan":return{title:r.planView==="run"?r.planDraft.name:r.planDraft.id?e("v4_edit_plan","Edit plan"):e("v4_new_plan","New plan"),description:""};case"areaReview":return{title:e("v4_name_this_area","Name this area"),description:e("area_details_hint","Name the area and choose cleaning settings.")};case"history":return{title:e("v4_map_history","Map history"),description:e("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")};case"support":return{title:e("v4_map_diagnostics","Map diagnostics"),description:e("v4_map_support_detail","Details to share with support")};case"none":return Tn(sn(r),r,e)}},X=["peek","half","full"],In={info:lt,success:us,warning:ut,error:hs},$n={info:6e3,success:4e3,warning:6e3,error:1e4},On={none:"half",rooms:"half",draw:"peek",plan:"half",plans:"half",areaReview:"half",history:"half",support:"full"},en=r=>r.workflow==="plan"&&r.planView==="edit"?"full":On[r.workflow],Dn=.5,Ln=100,Wn=6,qn=48,_t=".panel-top, .sheet-body, .workflow-body",zn=["a[href]","button","input","label","select","textarea","summary",'[contenteditable]:not([contenteditable="false"])','[role="button"]','[role="link"]','[role="slider"]','[role="checkbox"]','[role="radio"]','[role="switch"]','[role="tab"]','[role="menuitem"]',`[tabindex]:not([tabindex="-1"]):not(${_t})`].join(","),nn=["button:not(:disabled)","a[href]","input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)","[tabindex]:not([tabindex='-1'])"].join(", "),on=r=>!!r.querySelector(nn)||[...r.querySelectorAll("*")].some(t=>t.shadowRoot!==null&&on(t.shadowRoot)),tn=(r=document)=>{let t=r.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t},Qe=r=>!!(r&&r.isConnected&&r.offsetParent!==null),St=class extends Ce{constructor(){super();this.state=K();this._measuredNarrow=!1;this._sheetOffset=0;this._browserFullscreen=!1;this._sheetDetent="half";this._polite="";this._alert="";this.#t=null;this.#i=new Set;this._toast=null;this.#s=new $e(this,()=>import("./workflow-panel-7SHSBZEI.js"));this.#a=new $e(this,async()=>new(await import("./outline-editor-H2RAQL56.js")).OutlineEditor({edgeDistance:Ht,validOutline:Ft}));this.#r=new $e(this,async()=>new(await import("./workflow-panel-7SHSBZEI.js")).MapOptions(this));this.#o=!1;this.#n=fs();this.#y=0;this.#h=0;this.#w=!1;this.#g=!1;this.#b=null;this.#m=null;this.#c=null;this.#f=null;this.#P=null;this.#T=null;this.#v=null;this.#k=null;this.#d=null;this.#E=null;this.#O=null;this.#D=new Set;this.#l=null;this.#x=null;this.#_=null;this.#S=()=>{this._browserFullscreen=this.#z()};this.#W=()=>{this.#V(),this.#w=!1,this.#g=!1,this._toast=null};this.#de=e=>{e.type==="pointerenter"?this.#w=!0:this.#g=!0,this.#u!==void 0&&(this.#V(),this.#h=Math.max(0,this.#y-Date.now()))};this.#R=e=>{e.type==="pointerleave"?this.#w=!1:e.currentTarget.contains(e.relatedTarget)||(this.#g=!1),this.#ce()};this.#j=()=>{this.#W(),this.updateComplete.then(()=>this.#q())};this.#J=()=>{this.#p({type:"set-notice",notice:null}),this.updateComplete.then(()=>this.#q())};this.#K=()=>{for(let e of this.renderRoot.querySelectorAll(_t)){let s=e.scrollHeight>e.clientHeight&&!on(e);if(!s&&e.matches(":focus")){e.addEventListener("blur",this.#K,{once:!0});continue}let n=(i,o)=>s?e.setAttribute(i,o):e.removeAttribute(i);n("tabindex","0"),e.classList.contains("panel-top")&&(n("role","group"),n("aria-labelledby","workspace-title"))}};this.#X=e=>{if(!ie(this.state,{type:"open-workflow",workflow:"none"})){Oe(this.state.workflow);return}this.#v=e.currentTarget,this.#d="reload",this.#p({type:"open-dialog",dialog:"discardDraft"})};this.#Me=e=>{let s=this.#r.value;if(s){s.menu.toggle();return}if(this.#r.status==="failed"){this.#X(e);return}this.#o=!0,this.#r.request()};this.#Re=()=>{this.#A("support")};this.#te=()=>{let e=this.renderRoot.querySelector(".app");this.#I()?document.exitFullscreen():e?.requestFullscreen()};this.#Ee=(e,s,n)=>this.#e(e,s,n);new ys(this,{container:()=>this.renderRoot?.querySelector(".draw-tools")??null,items:"button"})}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_measuredNarrow:{state:!0},_sheetOffset:{state:!0},_browserFullscreen:{state:!0},_sheetDetent:{state:!0},_polite:{state:!0},_alert:{state:!0},_toast:{state:!0}}}static{this.styles=Qs}#e(e,s,n){return Ie(this.localize,e,s,n,this.dates)}#t;#i;#s;#a;#r;#o;#n;#u;#y;#h;#w;#g;#b;#m;#c;#f;#P;#T;#v;#k;#d;#E;#O;#D;#l;#x;#_;#I(){let e=this.renderRoot;return e instanceof ShadowRoot?e.fullscreenElement??document.fullscreenElement:document.fullscreenElement}#S;#z(){let e=this.renderRoot,s=e.querySelector(".app"),n=e instanceof ShadowRoot?e.fullscreenElement:null;if(n)return n===s;let i=document.fullscreenElement;for(let o=this;o;){if(o===i)return!0;let a=o.getRootNode();o=a instanceof ShadowRoot?a.host:null}return!1}connectedCallback(){super.connectedCallback(),this.#m=new ResizeObserver(([e])=>{if(!e)return;let s=e.contentRect.width<1024||e.contentRect.height<480;s!==this._measuredNarrow&&(this._measuredNarrow=s)}),this.#m.observe(this),document.addEventListener("fullscreenchange",this.#S),this.#c=new ResizeObserver(([e])=>{if(!e)return;let s=Math.ceil(e.target.getBoundingClientRect().height);s!==this._sheetOffset&&(this._sheetOffset=s)}),this.#f=new ResizeObserver(()=>this.#K()),this.#U(),this.#P=ks(()=>this.#U())}#U(){let e=window.matchMedia("(forced-colors: active)").matches,s=bs(this.renderRoot,{accent:"var(--ms-accent)",danger:"var(--ms-danger)",label:"var(--ms-on-accent)",card:"var(--ms-surface-card)",sunken:"var(--ms-surface-sunken)"}),[n,i,o,a,l]=Object.values(s).map(ws),d=v=>e||!v||!o?[]:_s(v,o),c=(v,k,S=a)=>e||!v||!a||!S?void 0:Ss(v,k,[a,S]),u=v=>v?gs(v,1):"",[p,h]=d(n),[f,g]=d(i);this.style.setProperty("--ms-resolved-accent-fill",u(p)),this.style.setProperty("--ms-resolved-on-accent-fill",u(h)),this.style.setProperty("--ms-resolved-danger-fill",u(f)),this.style.setProperty("--ms-resolved-on-danger-fill",u(g)),this.style.setProperty("--ms-resolved-indicator",u(c(n,3,l))),this.style.setProperty("--ms-resolved-danger-text",u(c(i,4.5)))}disconnectedCallback(){this.#W(),this.#m?.disconnect(),this.#m=null,this.#c?.disconnect(),this.#c=null,this.#f?.disconnect(),this.#f=null,this.#P?.(),this.#P=null,this.#T=null,document.removeEventListener("fullscreenchange",this.#S),super.disconnectedCallback()}#L(e,s){if(this.#i.has(e)){this.updateComplete.then(()=>this.#L(e,s));return}this.#i.add(e);let n=this[e]===s;this[e]=n?"":s,this.updateComplete.then(()=>{this.#i.delete(e),n&&!this[e]&&this.#L(e,s)})}willUpdate(e){if(this.#b=this.shadowRoot?.activeElement??null,!e.has("state"))return;let s=wt(this.state).title;this.#t!==null&&s!==this.#t&&this.#L("_polite",wt(this.state,this.localize).title),this.#t=s;let n=this.state.notice,i=e.get("state");n!==i?.notice&&(!n&&i?.notice?.tone==="success"&&i.workflow!==this.state.workflow||(this.#W(),n&&(this._toast=n,this.#h=$n[n.tone],this.#L(n.tone==="error"?"_alert":"_polite",this.#e(n.key,n.fallback,n.placeholders)),this.updateComplete.then(()=>{if(this.state.notice!==n)return;let o=this.renderRoot.querySelector("[data-notice-toast]");this.#w=!!o?.matches(":hover"),this.#g=!!o?.contains(this.shadowRoot?.activeElement??null),this.#ce()}))))}#ce(){!this._toast||this.#u!==void 0||this.#w||this.#g||(this.#y=Date.now()+this.#h,this.#u=setTimeout(this.#W,this.#h))}#V(){clearTimeout(this.#u),this.#u=void 0}#W;#de;#R;#j;#J;#F(e,s,n){return w`${$(In[e.tone])}<span class="notice-text">${this.#e(e.key,e.fallback,e.placeholders)}</span><button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${n}
      @click=${s}
    >${$(cs)}</button>`}updated(e){let s=this.renderRoot.querySelector(".mobile-sheet.instant");s&&(getComputedStyle(s).blockSize,s.classList.remove("instant"));let n=this.#b;this.#b=null,n&&(!n.isConnected||n.closest("[hidden]"))&&this.#q();let i=this.renderRoot.querySelector(".mobile-sheet");i!==this.#T&&(this.#c?.disconnect(),this.#T=i,i?this.#c?.observe(i):this._sheetOffset!==0&&(this._sheetOffset=0)),this.#f?.disconnect();for(let o of this.renderRoot.querySelectorAll(_t))for(let a of[o,...o.children])this.#f?.observe(a);if(this.#o&&this.#r.status!=="loading"&&(this.#o=!1,this.#r.value?.menu.toggle()),e.has("state")){this.#B();let o=e.get("state");if(o?.precisionOpen&&!this.state.precisionOpen&&this.#pe()?.focus(),o?.fullMap&&!this.state.fullMap){let a=this.#k;this.#k=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??this.renderRoot.querySelector(".nav--menu")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})})}if(o&&!o.fullMap&&this.state.fullMap&&this.updateComplete.then(()=>{let a=this.#k;requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})}),!o?.dialog&&this.state.dialog){this.#O=null,this.state.dialog==="discardDraft"&&!this.#d&&o&&(o.workflow==="plan"?this.#d=o.planDraft.id!==null&&o.planView==="edit"?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"}:this.#d={type:"dismiss-top-layer"});let a=tn(this.shadowRoot||document);a?.hasAttribute("data-dialog-launcher")&&(this.#v=a),this.updateComplete.then(()=>{(this.renderRoot.querySelector(".dialog [data-dialog-initial-focus]")??this.renderRoot.querySelector(".dialog button"))?.focus()})}else if(o?.dialog&&!this.state.dialog){if(o.dialog==="discardDraft"){this.#E||(this.#d=null),this.#Z();let l=this.#O;this.#O=null,this.#$(l)}let a=this.#he(o);this.#v=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{let l=tn(document),d=l;for(;d&&d!==this;){let u=d.getRootNode();d=u instanceof ShadowRoot?u.host:null}if(l&&l!==document.body&&d!==this)return;a?.focus({preventScroll:!0});let c=!document.activeElement||document.activeElement===document.body;!this.shadowRoot?.activeElement&&c&&this.#q()})})}if(!o)this._sheetDetent=en(this.state);else if(o.workflow!==this.state.workflow||o.planView!==this.state.planView){let a=en(this.state);a!==this._sheetDetent&&(this.#C()?.classList.add("instant"),this._sheetDetent=a);let l=this.state;this.updateComplete.then(()=>{if(l.workflow==="none")return this.#Be();if(o.workflow!=="plan")return this.#q();requestAnimationFrame(()=>{this.#s.value?.focusPlanTarget(o,l,this.renderRoot,Qe)||this.#q()})})}}}#K;#q(){[".panel-heading h2",".action-bar .ms-btn--primary",".workspace-toggle"].map(e=>this.renderRoot.querySelector(e)).find(Qe)?.focus({preventScroll:!0})}#pe(){let e=this.renderRoot.querySelector(".draw-brush");return Qe(e)?e:this.renderRoot.querySelector(xe)?.shadowRoot?.querySelector(".draw-brush")??null}#p(e){if(ie(this.state,e)){this.#d=e,this.#p({type:"open-dialog",dialog:"discardDraft"});return}this.#Y(e)}#Y(e){this.dispatchEvent(new CustomEvent(Rs,{detail:e,bubbles:!0,composed:!0}))}#me(e){if(e.enabled){if(e.id==="return-live"){this.#p({type:"set-history",historyId:null});return}if(e.id==="clear-draft"){this.#p({type:"clear-draft"});return}this.#ee(e.id)}}#A(e,s){this.#N({type:"open-workflow",workflow:e},s)}#N(e,s){s instanceof HTMLElement&&ie(this.state,e)&&(this.#v=s),this.#p(e)}#B(){let e=this.#n,{coherence:s,workflow:n}=this.state;!e||n==="none"&&(s==="booting"||s==="verifying")||(this.#n=null,n==="none"&&this.#D.has(e)&&this.#A(e))}#X;#fe(e){if(this.#s.request(),e!=="draw")return this.#s.status;this.#a.request();let s=this.#s.status,n=this.#a.status;return s==="failed"||n==="failed"?"failed":s===n?s:"loading"}#ke(){let e=this.#d;if(this.#d=null,e==="reload"){Oe(this.state.workflow);return}e?.type==="select-plan"||e?.type==="select-area"?(this.#p({type:"patch-plan-draft",patch:{dirty:!1}}),this.#p({type:"patch-area-draft",patch:{dirty:!1}}),this.#p({type:"dismiss-top-layer"})):this.#p({type:"discard-draft"}),e&&e.type!=="dismiss-top-layer"&&queueMicrotask(()=>this.#Y(e))}#G(e,s){setTimeout(()=>{if(this.#E!==e)return;this.#E=null,this.requestUpdate();let n=s?this.#d:null;if(this.#d=null,this.state.dialog!=="discardDraft")return this.#$(n);this.#O=n,this.#ie()})}#$(e){e==="reload"?Oe(this.state.workflow):e&&this.#Y(e)}#ne(){this.state.command==="pending"||this.#E||(this.#d=null,this.#ie(),this.#Z())}#Z(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".floor-switcher");e&&(e.value=this.state.selection.floorId);let s=this.renderRoot.querySelector(".robot-switcher");s&&(s.value=this.state.selection.entryId??"")})}#ie(){let e=this.#he(this.state);this.#p({type:"dismiss-top-layer"}),e&&requestAnimationFrame(()=>e.focus({preventScroll:!0}))}#ee(e,s){this.dispatchEvent(new CustomEvent(Es,{detail:typeof e=="string"?{id:e,settled:s}:e,bubbles:!0,composed:!0}))}#ve(e){e.action==="discard"?this.#ke():this.#s.value?.confirmDialog(this.state,e.action,s=>this.#p(s),s=>this.#ee(s))}#Q(e){e!==this._sheetDetent&&(this._sheetDetent=e,this.#L("_polite",e==="peek"?this.#e("v4_workspace_height_peek","Cleaning panel, collapsed"):e==="half"?this.#e("v4_workspace_height_half","Cleaning panel, half height"):this.#e("v4_workspace_height_full","Cleaning panel, full height")))}#oe(e,s=!1){let i=X.indexOf(this._sheetDetent)+e;s&&i>=X.length&&(i=0),i=Math.max(0,Math.min(X.length-1,i)),this.#Q(X[i]??this._sheetDetent)}#ye(e){let s=this.renderRoot.querySelector(".workspace")?.clientHeight??e.parentElement?.clientHeight??e.offsetHeight,n=parseFloat(getComputedStyle(this).fontSize)||16,i=[".sheet-grip",".sheet-tools",".action-bar"].map(l=>e.querySelector(l)?.offsetHeight??0).reduce((l,d)=>l+d,0)+n*.75,o=Math.min(s*.92,s-n*9),a=Math.min(s*.48,n*26,o);return{peek:Math.min(i,a),half:a,full:o}}#C(){return this.renderRoot.querySelector(".mobile-sheet")}#M(e,s){e.style.transform=s;let n=this.renderRoot.querySelector("[data-notice-toast]");n&&(n.style.transform=s)}#H(e){let s=e.currentTarget;for(let n of e.composedPath()){if(n===s)return!1;if(n instanceof Element&&n.matches(zn))return!0}return!1}#_e(e){if(e.pointerType==="mouse"&&e.button!==0||this.#H(e))return;let s=this.#C();!s||this.#x||(this.#x={pointerId:e.pointerId,startY:e.clientY,startHeight:s.offsetHeight,heights:this.#ye(s),samples:[{y:e.clientY,t:e.timeStamp}],moved:!1},e.currentTarget.setPointerCapture(e.pointerId),s.classList.add("dragging"))}#re(e){let s=this.#x;if(!s||e.pointerId!==s.pointerId)return;let n=this.#C();if(!n)return;let i=e.clientY-s.startY;for(!s.moved&&Math.abs(i)>Wn&&(s.moved=!0),s.samples.push({y:e.clientY,t:e.timeStamp});s.samples.length>2&&e.timeStamp-(s.samples[1]?.t??0)>Ln;)s.samples.shift();if(!s.moved)return;let o=s.startHeight-s.heights.full,a=s.startHeight-s.heights.peek,l=Math.max(o,Math.min(a,i));this.#M(n,`translateY(${l}px)`)}#Se(e){let s=this.#x;if(!s||e.pointerId!==s.pointerId)return;this.#x=null;let n=this.#C();if(n&&(this.#M(n,""),n.classList.remove("dragging")),e.type==="pointercancel")return;if(!s.moved){this.#oe(1,!0);return}let i=e.clientY-s.startY,o=X.indexOf(this._sheetDetent),a=s.samples[0],l=s.samples[s.samples.length-1],d=a&&l&&l!==a?(l.y-a.y)/Math.max(1,l.t-a.t):0;if(Math.abs(d)>Dn){let h=Math.max(0,Math.min(X.length-1,o+(d<0?1:-1)));this.#Q(X[h]??this._sheetDetent);return}let c=s.startHeight-i,u=this._sheetDetent,p=Number.POSITIVE_INFINITY;for(let h of X){let f=Math.abs(s.heights[h]-c);f<p&&(p=f,u=h)}this.#Q(u)}#ue(e){for(let s of e.composedPath()){if(s===e.currentTarget)break;if(s instanceof HTMLElement&&s.scrollHeight>s.clientHeight&&/auto|scroll/u.test(getComputedStyle(s).overflowY))return s}return null}#Ce(e){if(e.pointerType==="mouse"||this.#H(e))return;let s=this.#ue(e);this.#_=s?.scrollTop?null:{pointerId:e.pointerId,startY:e.clientY,scroller:s,consumed:!1}}#ae(e){let s=this.#_;if(!(!s||s.consumed||e.pointerId!==s.pointerId)){if(s.scroller?.scrollTop){this.#_=null;return}e.clientY-s.startY<qn||(s.consumed=!0,this.#oe(-1))}}#le(){this.#_=null}#ge(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}#be(e){this.#k=e.currentTarget,this.#p({type:this.state.fullMap?"exit-full-map":"enter-full-map"})}#Me;#Re;#te;#Pe(){this.#p({type:"set-precision-open",value:!this.state.precisionOpen})}#se(e){let s=this.#s.value?.dialogLauncher(e,this.state,n=>this.#p(n));s&&(this.#v=s)}#he(e){return e.dialog?this.#v?.isConnected&&this.#v.hasAttribute("data-dialog-launcher")?this.#v:this.#s.value?.dialogReturnTarget(e,this.renderRoot)??this.#Le(e.dialog):null}#Le(e){if(e==="confirmDeletePlan"){let i=this.renderRoot.querySelector(Bt)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`);if(i)return i}return this.renderRoot.querySelector(st)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`)??null}#We(e){if(!vs(e)&&!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)&&e.key==="Escape"){if(e.preventDefault(),this.#r.value?.menu.open){this.#r.value.menu.close(!0);return}if(this.state.dialog==="discardDraft"){this.#ne();return}this.#p({type:"dismiss-top-layer"})}}#qe(e){if(e.key!=="Tab")return;let n=[...e.currentTarget.querySelectorAll(nn)],i=n[0],o=n.at(-1);if(!i||!o)return;let a=this.shadowRoot?.activeElement;e.shiftKey&&a===i?(e.preventDefault(),o.focus()):!e.shiftKey&&a===o&&(e.preventDefault(),i.focus())}#ze(){let e=this.renderRoot.querySelector(xe);(e?.shadowRoot?.querySelector(".map-root")??e)?.focus()}#Ne(){this._sheetDetent==="peek"&&this.#C()&&this.#Q("half"),this.updateComplete.then(()=>this.#q())}#we(e,s,n){if(!("label"in e))return y;let i=e.labelKey?this.#e(e.labelKey,e.label,e.labelPlaceholders):e.label,o=!e.enabled&&e.reason?e.reasonKey?this.#s.value?.actionReason(this.#Ee,e,n==="primary-reason",a=>this.#p(a))??this.#e(e.reasonKey,e.reason,e.reasonPlaceholders):e.reason:null;return e.kind==="link"?w`<a class=${s} href=${e.href??"#"}>${i}</a>`:w`
      <button
        class=${`${s} ${e.kind==="danger"?"ms-btn--danger":""}`}
        type="button"
        aria-disabled=${e.enabled?y:"true"}
        aria-describedby=${o?n:y}
        aria-label=${e.id==="stop"?this.#e("v4_stop_cleaning_label","Stop cleaning"):e.id==="run-plan"?this.#e("v4_action_run_plan_named","Run plan {plan}",{plan:this.state.planDraft.name}):y}
        @click=${()=>this.#me(e)}
      >${i}</button>
      ${o?w`<p class="action-reason" id=${n}>${o}</p>`:y}
    `}#Ee;#Ae(e){let s=e.resources.plans.value?.rooms??e.resources.areas.value?.rooms??[];return ms(e.locale,e.selection.roomIds.map(n=>s.find(i=>i.roomId===n)?.name??n))}#Te(e,s,n){let i=this.#Ae(e),o=s?.enabled&&e.workflow==="rooms"&&s.id==="clean-rooms"?e.planDraft.returnToBase&&i?this.#e("v4_rooms_summary_dock","{rooms} \xB7 returns to the dock",{rooms:i}):i:"",a=e.workflow==="plan"&&e.planView==="edit";return!o&&!a&&!(s&&"label"in s)&&!n?y:w`
      <div class=${a?"action-bar paired":"action-bar"}>
        ${o?w`<p class="action-summary">${o}</p>`:y}
        ${a?this.#s.value?.planCancel(e,s,this.#Ee,(l,d)=>this.#N(l,d)):y}
        ${s?this.#we(s,"ms-btn ms-btn--block ms-btn--lg ms-btn--primary","primary-reason"):y}
        ${n?this.#we(n,"ms-btn ms-btn--block ms-btn--lg ms-btn--secondary","secondary-reason"):y}
      </div>
    `}#xe(e,s=!1,n=e){return s||this.#D.add(e),()=>{s||(this.#l=n,this.#A(e))}}#Be(){let e=this.#l;this.#l=null;let s=e?this.renderRoot.querySelector(`[data-launcher="${e}"]`):null;Qe(s)?s.focus({preventScroll:!0}):this.#q()}#Ie(e,s,n,i,o=!1,a){return w`
      <button
        class="ms-row"
        type="button"
        data-launcher=${n}
        aria-disabled=${o?"true":y}
        aria-describedby=${o&&a?a:y}
        @click=${this.#xe(n,o)}
      >
        <span class="ms-row__lead">${$(s)}</span>
        <span class="ms-row__body"><strong>${e}</strong>${i?w`<small>${i}</small>`:y}</span>
        <span class="ms-row__trail">${$(Te)}</span>
      </button>
    `}#He(e){let s=e.resources.history.value?.floors||[],n=s.length?s.map((i,o)=>({id:i.active?"current":i.id,label:`${i.label||(i.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:i.ordinal??o+1}))}${!i.active&&i.snapshots.length===0?` \xB7 ${this.#e("v4_floor_not_captured","No saved map for this floor yet")}`:""}`,disabled:!i.active&&i.snapshots.length===0})):[{id:e.selection.floorId,label:e.floor.displayName,disabled:!1}];return w`
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
    `}#Fe(e){let s=(p,h,f)=>this.#e(p,h,f);this.#D=new Set(["support"]);let n=sn(e),i=p=>{let h=this.#Ie(s("v4_map_history","Map history"),rt,"history",s("v4_history_quick_detail","Browse earlier floor maps.")),f=this.#Ie(s("v4_map_diagnostics","Map diagnostics"),lt,"support",s("v4_diagnostics_quick_detail","Check the map and copy details for support."));return w`
        <h3 class="ms-section-heading">${s("v4_maps_heading","Maps")}</h3>
        <div class="shelf maps">${p?[f,h]:[h,f]}</div>
      `};switch(n){case"reconnecting":case"administrator":case"robot-unavailable":case"setup":return y;case"offline":case"read-only":return i(!1);case"problem":return w`
          <div class="home-actions">
            <button class="ms-btn ms-btn--secondary" type="button" data-launcher="support-open" @click=${this.#xe("support",!1,"support-open")}>${s("v4_open_diagnostics","Open map diagnostics")}</button>
          </div>
          ${i(!0)}
        `;default:break}let o=n!=="ready",l=e.resources.plans.value,d=l!==null&&l.rooms.length===0,c=o||d,u=(p,h,f,g,v,k)=>w`
      <button
        class=${h?"ms-row ms-row--card ms-row--featured":"ms-row ms-row--card"}
        type="button"
        data-launcher=${p}
        aria-disabled=${g?"true":y}
        aria-describedby=${o?"home-reason":y}
        @click=${this.#xe(p,g)}
      >
        <span class="ms-row__lead">${$(f)}</span>
        <span class="ms-row__body"><strong>${v}</strong><small>${k}</small></span>
        <span class="ms-row__trail">${$(Te)}</span>
      </button>
    `;return w`
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
        ${u("rooms",!0,le,c,s("v4_clean_rooms","Clean rooms"),!o&&d?s("v4_no_rooms_reason","Can't clean rooms until you name them in the Matic app."):s("v4_rooms_quick_detail","Pick rooms and clean them now."))}
        ${this.#Ke(e,o)}
        ${u("draw",!1,as,o,s("v4_custom_areas","Clean custom area"),s("v4_areas_quick_detail","Draw or choose a custom area"))}
      </div>
      ${i(n==="map-unavailable")}
    `}#Ke(e,s){let n=this.#Ee,i=e.resources.plans,o=i.value,a=o?.plans.find(g=>g.id===o.selectedPlan),l=o?.plans.length??0,d=i.status==="loading",c=i.status==="error",u=a?Ms(n,e.locale,a):null,p=a?n("v4_run_named_plan","Run {plan}",{plan:a.name}):"",h=a?p.indexOf(a.name):-1,f=()=>{s||(this.#l="plan",a?this.#p({type:"select-plan",planId:a.id,origin:"home"}):this.#A("plans"))};return s||this.#D.add("plans"),w`
      <button
        class="ms-row ms-row--card"
        type="button"
        data-launcher="plan"
        aria-disabled=${s?"true":y}
        aria-describedby=${s?"home-reason":y}
        @click=${f}
      >
        <span class="ms-row__lead">${$(at)}</span>
        <span class="ms-row__body">
          ${a?w`
            <strong class="card-title"><span class="card-name">${h<0?p:w`${p.slice(0,h)}<bdi>${a.name}</bdi>${p.slice(h+a.name.length)}`}</span>${a.enabled?y:w`<span class="ms-chip">${n("v4_paused","Paused")}</span>`}</strong>
            <small>${Cs(n,e.locale,a)}</small>
            ${u===null?y:"blocked"in u?w`<span class="card-lines"><span class="line" data-tone="warning">${$(ut)}${u.blocked}</span></span>`:w`<span class="card-lines">${u.due.map(g=>w`<span class="line">${$(ds)}${g}</span>`)}</span>`}
          `:w`
            <strong>${d?n("v4_plans_loading","Checking saved plans"):c?n("v4_plans_unavailable","Plans unavailable"):l?n("v4_run_a_plan","Run a plan"):n("v4_create_plan","Create a plan")}</strong>
            <small>${d?n("v4_plans_loading_hint","Reading plans for this floor"):c?n("v4_plans_unavailable_hint","Try again to load your plans."):l?l===1?n("v4_saved_routine","1 saved plan"):n("v4_saved_routines","{count} saved plans",{count:l}):n("v4_no_plans_hint","Save a plan to repeat a set of rooms.")}</small>
          `}
        </span>
        <span class="ms-row__trail">${$(Te)}</span>
      </button>
    `}#Ue(e,s){if(e.workflow==="none")return this.#Fe(e);let n=this.#fe(e.workflow);return n!=="ready"?s&&e.workflow==="draw"?y:ht(n,this.localize,this.#X):w`<${Zs}
      .state=${e}
      .localize=${this.localize}
      .dates=${this.dates}
      .retry=${this.#X}
      @matic-workspace-intent=${this.#se}
    ></${Zs}>`}#$e(e,s){if(e.workflow==="none"||e.workflow==="plan"&&e.planView==="edit")return y;let n=e.workflow==="plan"&&e.planOrigin!=="home",i=n?this.#e("v4_back_to_plans","Back to plans"):this.#e("v4_back_to_all_tasks","Back to all tasks");return w`
      <button
        class=${s?"sheet-back ms-btn ms-btn--icon ms-btn--sm":"panel-back ms-btn ms-btn--secondary"}
        type="button"
        aria-label=${i}
        title=${s?i:y}
        data-dialog-launcher="discardDraft"
        @click=${o=>this.#A(n?"plans":"none",o.currentTarget)}
      >${$(ot)}${s?y:w`<span class="ms-btn__label">${n?this.#e("v4_your_plans","Your plans"):this.#e("v4_all_tasks","All tasks")}</span>`}</button>
    `}#Oe(e){let s=e.workflow==="plan",n=kt(e,this.localize).title;return w`
      <div class="panel-top">
        <div class="panel-heading">
          ${this.#$e(e,!1)}
          <h2 id="workspace-title" tabindex="-1">${s&&this.#s.value?.planTitle(e,n,this.#Ee)||n}</h2>
          ${s?this.#s.value?.planTools(e,this.localize,this.#se):y}
        </div>
        ${e.notice?w`<div class="notice" data-notice-slot data-tone=${e.notice.tone}>${this.#F(e.notice,this.#J,this.#e("v4_close","Close"))}</div>`:y}
      </div>
    `}#De(e,s){let{description:n}=kt(e,this.localize);return w`
      ${n?w`<p class="panel-description" id=${e.workflow==="none"?"home-reason":y}>${n}</p>`:y}
      ${this.#Ue(e,s)}
    `}#Ve(e,s){let i=kt(e,this.localize).title;return e.workflow==="rooms"&&e.selection.roomIds.length&&(i=this.#e("v4_rooms_selected_names","{count} selected \xB7 {rooms}",{count:e.selection.roomIds.length,rooms:this.#Ae(e)})),this._sheetDetent!=="peek"?s.detail?`${s.title} \xB7 ${s.detail}`:s.title:s.notable?`${s.title} \xB7 ${i}`:i}render(){let e=this.state,s=e.narrowHint||this._measuredNarrow,n=this.#r.value,i=wt(e,this.localize),o=_e(e),a=qt({...e,narrowHint:s}),l=zt(e),d=!s&&a.id==="stop"?a:!s&&l?.id==="stop"?l:null,c=d&&d===a?null:a,u=e.workflow==="draw"&&e.dataMode==="live"?{id:"clear-draft",label:"Clear",labelKey:"v4_clear_drawing",kind:"neutral",enabled:e.draw.circles.length>0||!!e.draw.outline?.points.length}:null,p=d&&d===l?null:l??u,h=e.fullMap&&(e.coherence==="verifying"||e.coherence==="booting"),f=e.fullMap||e.host.administrator&&e.host.robotCount>0&&e.map.available,g=e.workflow==="plan",v=e.dialog==="discardDraft",k=v?$t(e,g?"confirmDeletePlan":"confirmDeleteArea")?.name:void 0,S=v?{title:this.#e("v4_discard_title","Discard changes?"),detail:k===void 0?g?this.#e("v4_discard_new_plan_detail","This new plan hasn't been saved, and discarding it can't be undone."):this.#e("v4_discard_new_area_detail","This new area hasn't been saved, and discarding it can't be undone."):g?this.#e("v4_discard_plan_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:k}):this.#e("v4_discard_area_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:k}),cancelLabel:this.#e("v4_keep_area_editing","Keep editing"),confirmLabel:this.#e("v4_discard","Discard"),action:"discard"}:e.dialog===null?void 0:this.#s.value?.dialogCopy(e.dialog,e,this.localize),_=v&&(e.command==="pending"||this.#E!==null),b=v&&(a.id==="save-plan"||a.id==="save-area")&&(a.enabled||_)?a.id:null,C=s&&!e.fullMap?`--map-sheet-offset:${this._sheetOffset}px`:"--map-sheet-offset:0px",P=s&&e.workflow==="draw",L=e.precisionOpen&&e.workflow==="draw",O=this._toast&&(this._toast.tone==="success"||this._toast.tone==="error"||e.fullMap||s&&this._sheetDetent==="peek")?this._toast:null;return w`
      <div class=${`root ${s?"narrow":"wide"}`} @keydown=${this.#We}>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#ze}>${this.#e("v4_skip_to_map","Skip to the map")}</button>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#Ne}>${this.#e("v4_skip_to_workspace","Skip to the panel")}</button>
        <div class="app" ?inert=${!!S}>
          <header class="app-bar">
            ${e.precisionOpen?y:w`
              <button
                class="nav nav--menu ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                title=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                @click=${this.#ge}
              >${$(ns)}</button>
            `}

            ${e.precisionOpen?w`
              <button
                class="nav ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_back","Back")}
                @click=${()=>this.#p({type:"dismiss-top-layer"})}
              >${$(ot)}</button>
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
                @click=${this.#be}
              >${$(is)}</button>
            `:y}
            <div class="overflow-wrap" @keydown=${n?.menu.keydown} @focusout=${n?.menu.focusout}>
              <button
                class="overflow ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_map_options","Map options")}
                aria-haspopup="menu"
                aria-expanded=${String(n?.menu.open??!1)}
                aria-controls="map-options"
                @click=${this.#Me}
              >${$(ss)}</button>
              ${n?.menu.open?n.render({state:e,narrow:s,browserFullscreen:this._browserFullscreen,t:(E,D)=>this.#e(E,D),intent:E=>this.#p(E),diagnostics:this.#Re,fullscreen:this.#te}):y}
            </div>
          </header>

          <main class=${`workspace ${e.fullMap?"full-map":""}`} style=${C}>
            <div class="canvas">
              <${Js}
                class="map-canvas"
                style=${C}
                .state=${e}
                .localize=${this.localize}
                .dates=${this.dates}
                .outlineEditor=${this.#a.value}
                .narrow=${s}
              >${this.#He(e)}
                ${s&&!e.fullMap&&this._sheetDetent==="full"?w`
                  <button
                    class="sheet-scrim"
                    slot="scrim"
                    data-map-control
                    type="button"
                    aria-label=${this.#e("v4_collapse_sheet","Collapse panel")}
                    @click=${()=>this.#Q("peek")}
                  ></button>
                `:y}
              </${Js}>
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
                  @pointerdown=${this.#_e}
                  @pointermove=${this.#re}
                  @pointerup=${this.#Se}
                  @pointercancel=${this.#Se}
                >
                  <span class="sheet-handle" role="presentation"></span>
                  ${this._sheetDetent==="peek"?this.#$e(e,!0):y}
                  <span class="sheet-status">${this.#Ve(e,i)}</span>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_more","Expand panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="full"?"true":y}
                    @click=${()=>this.#oe(1)}
                  >${$(os)}</button>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_less","Collapse panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="peek"?"true":y}
                    @click=${()=>this.#oe(-1)}
                  >${$(rs)}</button>
                </div>
                ${P?w`
                  <div class="sheet-tools">
                    ${ht(this.#fe("draw"),this.localize,this.#X)}
                    ${ps(e,{intent:E=>this.#p(E),openBrush:()=>this.#Pe(),t:(E,D,G)=>this.#e(E,D,G)},"grid")}
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
                  @pointerdown=${this.#Ce}
                  @pointermove=${this.#ae}
                  @pointerup=${this.#le}
                  @pointercancel=${this.#le}
                >
                  ${this.#Oe(e)}
                  <div class="sheet-body" role="region" aria-labelledby="workspace-title">${this.#De(e,s)}</div>
                </div>
                ${this.#Te(e,c,p)}
              `:w`
                <div class="status-strip">
                  <span class="status-icon" aria-hidden="true">${$(i.icon)}</span>
                  <span class="status-copy"><strong>${i.title}</strong><small>${i.detail}</small></span>
                  ${d?this.#we(d,"status-action ms-btn ms-btn--secondary","status-reason"):y}
                </div>
                <section class="workflow">
                  ${this.#Oe(e)}
                  <div class="workflow-body" role="region" aria-labelledby="workspace-title">${this.#De(e,s)}</div>
                  ${this.#Te(e,c,p)}
                </section>
              `}
            </aside>

            ${e.fullMap?w`
              <section
                class=${`full-map-hud ms-surface ms-surface--floating ${l?"has-secondary":""} ${!s&&(e.workflow==="draw"||e.workflow==="rooms"&&e.selection.roomIds.length>0)?"above-dock":""}`}
                aria-label=${this.#e("v4_robot_status_and_action","Robot status and action")}
              >
                <span class="hud-copy"><strong>${i.title}</strong><small>${i.detail}</small></span>
                ${h&&a.id!=="stop"?y:this.#we(a,"ms-btn ms-btn--lg ms-btn--primary","hud-reason")}
                ${l&&(!h||l.id==="stop")?this.#we(l,"ms-btn ms-btn--lg ms-btn--secondary","hud-secondary-reason"):y}
              </section>
            `:y}
          </main>
        </div>

        <div
          class="notice notice-toast"
          data-notice-toast
          role="region"
          aria-label=${this.#e("v4_notifications","Notifications")}
          data-tone=${O?.tone??y}
          style=${C}
          ?hidden=${!O}
          ?inert=${!!S}
          @pointerenter=${this.#de}
          @focusin=${this.#de}
          @pointerleave=${this.#R}
          @focusout=${this.#R}
        >${O?this.#F(O,this.#j,this.#e("v4_hide_notification","Hide notification")):y}</div>

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
              @keydown=${this.#qe}
            >
              <h2 id="dialog-title">${S.title}</h2>
              <div id="dialog-detail">
                <p>${S.detail}</p>
                ${S.consequence?w`<p>${S.consequence}</p>`:y}
                ${_?w`<p id="dialog-saving" role="status">${this.#e("v4_notice_saving","Saving\u2026")}</p>`:y}
              </div>
              <div class="dialog-actions">
                <button
                  class=${v?"ms-btn":"ms-btn ms-btn--secondary"}
                  type="button"
                  data-dialog-initial-focus
                  aria-disabled=${_?"true":y}
                  aria-describedby=${_?"dialog-saving":y}
                  @click=${v?this.#ne:this.#ie}
                >${S.cancelLabel}</button>
                ${b?w`<button
                  class="ms-btn ms-btn--secondary"
                  type="button"
                  aria-disabled=${_?"true":y}
                  aria-describedby=${_?"dialog-saving":y}
                  @click=${()=>{if(_)return;let E={};this.#E=E,this.requestUpdate(),this.#ee(b,D=>this.#G(E,D))}}
                >${this.#e("v4_save","Save")}</button>`:y}
                <button
                  class="discard ms-btn ms-btn--primary ms-btn--danger"
                  type="button"
                  aria-disabled=${_?"true":y}
                  aria-describedby=${_?"dialog-saving":y}
                  @click=${()=>{_||this.#ve(S)}}
                >${S.confirmLabel}</button>
              </div>
            </section>
          </div>
        `:y}
      </div>
    `}};customElements.get(pe)||customElements.define(pe,St);var rn=oe(pe),ge=new WeakMap,Nn={},Bn=3e4,Rt=(r,t)=>{ge.get(r)===t&&ge.delete(r)},Et=class extends Ce{constructor(){super(...arguments);this.narrow=!1;this._workspace=K();this.#e=new De;this.#t=new Ot(this._workspace);this.#i=null;this.#s=null;this.#a=null;this.#r=null;this.#o=null;this.#n=null}static{this.styles=[Me,Pe,Ee`
:host { display: block; block-size: 100%; }
`]}static{this.properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_workspace:{state:!0}}}#e;#t;#i;#s;#a;#r;#o;#n;#u(e=this.hass,s=this.panel){let n=this.#t.value.selection;return n.entrySource==="user"?this.#e.project(e,s,n.entryId):this.#e.project(e,s)}#y(){let e=this.hass,s=e?.loadBackendTranslation;if(!e||typeof s!="function")return;let n=e.connection??Nn,i=e.language??"";ge.get(n)!==i&&(ge.set(n,i),Promise.resolve().then(()=>s.call(e,"common","matic_robot")).catch(()=>{if(ge.get(n)===i){if(!this.isConnected){Rt(n,i);return}this.#n&&clearTimeout(this.#n.timer),this.#n={owner:n,language:i,timer:setTimeout(()=>{this.#n=null,Rt(n,i),this.#y()},Bn)}}}))}shouldUpdate(e){if(this.#y(),!e.has("hass")||[...e.keys()].some(n=>n!=="hass"))return!0;let s=e.get("hass");return s?.connection!==this.hass?.connection||s?.localize!==this.hass?.localize?!0:this.#u()!==this.#i}connectedCallback(){super.connectedCallback(),this.#y(),this.#s=this.#t.subscribe(e=>{if(this._workspace=e,e.selection.entryId!==this.#i?.entryKey){let s=this.#u();s!==this.#i&&(this.#i=s,this.#r?.sync(s))}}),this.#h()}disconnectedCallback(){this.#n&&(clearTimeout(this.#n.timer),Rt(this.#n.owner,this.#n.language),this.#n=null),this.#s?.(),this.#s=null,this.#w(),super.disconnectedCallback()}#h(){if(!(!this.isConnected||this.#r)&&(this.#i=this.#u(),this.#a=new qe(()=>this.hass),this.#r=new je(this.#t,this.#a,this.hass?.connection??null),this.#o=new Xe(this.#t),this.#o.start(),this.#i)){this.#r.sync(this.#i);let{host:e}=this.#i;e.connected&&e.administrator&&e.robotCount>0&&this.#r.refreshCatalog(this.#t.value.selection.floorId==="current")}}#w(){this.#o?.dispose(),this.#o=null,this.#r?.dispose(),this.#r=null,this.#a=null}willUpdate(e){if(e.has("hass")||e.has("panel")){let s=e.get("hass"),n=e.has("hass")&&s?.connection!==this.hass?.connection,i=this.#u(),o=i!==this.#i;o&&(this.#i=i),n?(this.#w(),this.#h()):(o||e.has("panel"))&&this.#r?.sync(i)}e.has("narrow")&&this.#t.value.narrowHint!==this.narrow&&this.#t.dispatch({type:"set-narrow-hint",value:this.narrow})}#g(e){if(!At(e.detail))return;e.stopPropagation();let s=e.detail;if(s.type==="dismiss-top-layer"||s.type==="exit-full-map"){this.#o?.dismissTop()||this.#t.dispatch(s);return}if(s.type==="open-workflow"&&s.workflow!=="none"){this.#r?.openWorkflow(s.workflow);return}if(s.type==="set-floor"){this.#r?.selectFloor(s.floorId);return}if(s.type==="select-entry"){if(!this._workspace.robots.some(n=>n.entryId===s.entryId)||this.#e.project(this.hass,this.panel,s.entryId).entryKey!==s.entryId)return;this.#t.dispatch(s);return}if(s.type==="set-history"){this.#r?.selectHistory(s.historyId);return}if(s.type==="select-plan"){this.#r?.selectPlan(s.planId);return}if(s.type==="set-plan-enabled"){this.#r?.setPlanEnabled(s.enabled);return}if(s.type==="select-area"){this.#r?.selectArea(s.areaId),s.workflow==="areaReview"&&this.#r?.openWorkflow("areaReview");return}this.#t.dispatch(s)}#b(e){e.stopPropagation(),typeof e.detail?.id=="string"&&(e.detail.id==="reset-room-cadence"&&"planId"in e.detail&&"roomId"in e.detail&&"mode"in e.detail?this.#r?.executeAction(e.detail):this.#r?.executeAction(e.detail.id,"settled"in e.detail?e.detail.settled:void 0),this.dispatchEvent(new CustomEvent("matic-map-v4-action-requested",{detail:{id:e.detail.id},bubbles:!0,composed:!0})))}getWorkspaceSnapshot(){return this.#t.value}getRequestDiagnostics(){return Object.freeze({http:this.#a?.requestDiagnostics()??null,workspace:this.#r?.workspaceDiagnostics()??null})}render(){return w`
      <${rn}
        .state=${this._workspace}
        .localize=${this.hass?.localize}
        .dates=${this.#i?.dates}
        @matic-workspace-intent=${this.#g}
        @matic-workspace-action=${this.#b}
      ></${rn}>
    `}};customElements.get(nt)||customElements.define(nt,Et);export{De as a,Et as b};
