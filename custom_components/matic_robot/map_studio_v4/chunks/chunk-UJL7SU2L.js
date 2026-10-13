import{A as Jt,B as Zt,C as hs,D as lt,E as Ie,F as ms,G as ct,H as fs,I as vs,J as ys,K as gs,L as bs,M as ws,N as _s,O as ks,P as Ss,Q as Rs,a as oe,b as _,c as Pe,d as zt,e as Ze,f as Nt,h as pe,i as et,j as Bt,k as Ht,l as Ft,m as tt,n as Kt,o as Ut,p as ie,q as me,r as re,s as Vt,t as R,u as xe,v as jt,w as Yt,x as Xt,y as Gt,z as Qt}from"./chunk-VFQHJY44.js";import{C as rs,D as nt,E as ot,F as it,G as rt,H as at,I as as,J as j,K as ls,M as cs,N as ds,O as us,P as D,a as Ce,b as Me,c as es,d as ae,e as st,f as ts,g as ss,h as ns,i as Ae,j as os,k as is}from"./chunk-DW2AZUA6.js";import{C as Je,D as Se,H as Ot,I as Dt,K as Lt,L as Wt,M as qt,Q as Re,V as g,X as Ee,Y as Te,Z as ps,c as Mt,h as P,j as Pt,k as ne,n as V,o as xt,p as Xe,q as Ge,r as At,t as Tt,u as It,v as $t,x as ke,z as Qe}from"./chunk-CMO5Y224.js";var on=(r,t)=>{if(t?.recharge_and_resume===!0&&t?.charging===!0)return"recharging";switch(r){case"cleaning":return"cleaning";case"paused":return"paused";case"returning":return"returning";case"docked":return"docked";case"idle":return"idle";case"error":return"problem";default:return"unknown"}},rn=r=>typeof r!="number"||!Number.isFinite(r)?null:Math.round(Math.max(0,Math.min(100,r))),an=r=>{let t=r.attributes?.matic_entry_id;return typeof t=="string"&&t.length>0?t:null},ln=r=>String(r||"local-user").replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",Es=r=>{if(typeof r!="string")return"Robot";let t=r.trim();return t&&Array.from(t).length<=128&&!/[\u0000-\u001f\u007f]/u.test(t)?t:"Robot"},$e=class{#e="";#t=null;project(t,e,s=null){let n=t?.states??{},o=e?.config?.entry_id,a=s||(typeof o=="string"?o:null),l=null,d=null,c=a,u=new Map;for(let[C,$]of Object.entries(n)){let W=an($);W&&C.startsWith("vacuum.")&&(u.set(W,{entryId:W,label:Es($.attributes?.friendly_name)}),(a?W===a:!l)&&(l=$,d=C,c=W))}let m={connected:t?.connected!==!1,administrator:t?.user?.is_admin===!0,robotConnected:l!==null&&l.state!=="unavailable"&&l.state!=="unknown",robotCount:u.size},h=l?on(l.state,l.attributes):"unknown",f=rn(l?.attributes?.battery_level),y=t?.selectedLanguage||t?.language||"en",v=t?.locale?.language||y,w=t?.locale?.time_zone==="server"?t.config?.time_zone:void 0,k=this.#t?.dates,S=k?.language===v&&k.timeZone===w?k:{language:v,timeZone:w},b=ln(t?.user?.id),E=Es(l?.attributes?.friendly_name),M=[...u.values()].sort((C,$)=>C.label.localeCompare($.label,y,{sensitivity:"base"})),O=[m.connected,m.administrator,m.robotConnected,m.robotCount,h,f??"none",y,v,w??"browser",b,d??"none",c??"none",E,M.map(C=>`${C.entryId}:${C.label}`).join(",")].join("|");return O===this.#e&&this.#t?this.#t:(this.#e=O,this.#t={host:m,activity:h,batteryPercent:f,language:y,dates:S,userKey:b,vacuumEntityId:d,entryKey:c,robotLabel:E,robots:M},this.#t)}};var cn=1024*1024,Cs=r=>{let t=s=>{let n=r.sceneHeaderBytes,o=r.scenePointStride,i=r.sceneMaxPoints,a=r.sceneMaxBytes,l=()=>{throw new Error("invalid-scene")};(!(s instanceof ArrayBuffer)||s.byteLength<n||s.byteLength>a)&&l();let d=new DataView(s),c=new Uint8Array(s,0,8),u=String.fromCharCode(...c),m=d.getUint16(8,!0),h=d.getUint16(10,!0),f=d.getUint32(12,!0),y=d.getUint32(16,!0),v=d.getUint32(20,!0),w=y+v,k=n+f;(u!=="MATIC3D\0"||m!==1||h!==o||f>1048576||w<1||w>i||k+w*h!==s.byteLength)&&l();let S;try{S=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(new Uint8Array(s,n,f)))}catch{l()}(!S||typeof S!="object"||Array.isArray(S))&&l();let b=S,E=b.meters_per_cell,M=b.origin_cells,O=b.span_cells;(typeof E!="number"||!Number.isFinite(E)||E<.001||E>.1||!Array.isArray(M)||M.length!==2||!M.every(L=>typeof L=="number"&&Number.isFinite(L))||!Array.isArray(O)||O.length!==2||!O.every(L=>typeof L=="number"&&Number.isFinite(L)&&L>=1&&L<=65536))&&l();let $=(Array.isArray(b.rooms)?b.rooms.slice(0,128):[]).flatMap((L,we)=>{if(!L||typeof L!="object"||Array.isArray(L))return[];let B=L,G=typeof B.name=="string"?B.name.trim():"";if(!G||Array.from(G).length>128||/[\u0000-\u001f\u007f]/u.test(G))return[];if(!Array.isArray(B.boundary)||B.boundary.length<3||B.boundary.length>8192)return[];let _e=B.boundary.flatMap(U=>{if(!Array.isArray(U)||U.length!==2)return[];let[Q,se]=U;return typeof Q=="number"&&Number.isFinite(Q)&&typeof se=="number"&&Number.isFinite(se)?[[Q,se]]:[]}),Z=B.center;if(_e.length<3||!Array.isArray(Z)||Z.length!==2)return[];let[ee,te]=Z;return typeof ee!="number"||!Number.isFinite(ee)||typeof te!="number"||!Number.isFinite(te)?[]:[{id:`scene-room-${we+1}`,name:G,boundary:_e,center:[ee,te]}]}),W=typeof b.sample_step=="number"&&Number.isInteger(b.sample_step)?Math.max(1,Math.min(i,b.sample_step)):1,he=M,be=O;return{buffer:s,pointOffset:k,floorCount:y,surfaceCount:v,total:w,metadata:{metersPerCell:E,origin:[he[0],he[1]],span:[be[0],be[1]],sampleStep:W,rooms:$}}};return{parseTransfer:t,decodeDeltaTransfer:async(s,n,o)=>{let i=(T="invalid-scene-delta")=>{throw new Error(T)},a=()=>{if(o?.aborted)throw new DOMException("Aborted","AbortError")};(!(s instanceof ArrayBuffer)||s.byteLength<r.deltaHeaderBytes||s.byteLength>r.deltaHeaderBytes+r.deltaMaxBytes||!(n.buffer instanceof ArrayBuffer)||n.buffer.byteLength<r.sceneHeaderBytes||n.buffer.byteLength>r.deltaMaxBytes||!Number.isSafeInteger(n.revision)||n.revision<0)&&i("invalid-scene-delta-size");let l=new DataView(s),d=String.fromCharCode(...new Uint8Array(s,0,8)),c=l.getUint16(8,!0),u=l.getUint16(10,!0),m=l.getBigUint64(12,!0),h=l.getBigUint64(20,!0),f=l.getUint32(28,!0),y=l.getUint32(32,!0),v=Number(m),w=Number(h);(d!=="MATICDLT"||c!==1||u!==1||!Number.isSafeInteger(v)||!Number.isSafeInteger(w)||v!==n.revision||w<=n.revision||f<r.sceneHeaderBytes||f>r.deltaMaxBytes||y<1||y>r.deltaMaxBytes||y+r.deltaHeaderBytes!==s.byteLength)&&i(),typeof DecompressionStream!="function"&&i("scene-delta-decompression-unavailable"),a();let k=new Uint8Array(s,r.deltaHeaderBytes,y),S=Math.max(n.buffer.byteLength,f);S>r.deltaMaxBytes&&i("invalid-scene-delta-size");let b=new Uint8Array(S),M=new Blob([k]).stream().pipeThrough(new DecompressionStream("deflate")).getReader(),O=0,C=null;try{for(C=()=>{M.cancel().catch(()=>{})},o?.addEventListener("abort",C,{once:!0});;){a();let{done:T,value:J}=await M.read();if(T)break;(!(J instanceof Uint8Array)||O+J.byteLength>S)&&i(),b.set(J,O),O+=J.byteLength}}catch(T){if(await M.cancel().catch(()=>{}),o?.aborted||T instanceof DOMException&&T.name==="AbortError")throw new DOMException("Aborted","AbortError");if(T instanceof Error&&T.message==="invalid-scene-delta")throw T;i()}finally{C&&o?.removeEventListener("abort",C),M.releaseLock()}a(),O!==S&&i();let $=new Uint8Array(n.buffer),W=new DataView(b.buffer,b.byteOffset,b.byteLength),he=Math.min(r.sceneHeaderBytes,$.byteLength);for(let T=0;T<he;T+=1)b[T]=(b[T]??0)^($[T]??0);let be=W.getUint32(12,!0),L=W.getUint32(16,!0),we=W.getUint32(20,!0),B=r.sceneHeaderBytes+be,G=L+we,_e=B===n.pointOffset&&L===n.floorCount&&we===n.surfaceCount,Z=B+G*r.scenePointStride,ee=_e&&Z===f&&G<=r.sceneMaxPoints,te=[],U=-1,Q=!1,se=()=>{Q&&U>=0&&te.push(U),Q=!1};for(let T=he;T<$.byteLength;T+=r.xorChunkBytes){a();let J=Math.min($.byteLength,T+r.xorChunkBytes);for(let H=T;H<J;H+=1){let Rt=$[H]??0,Et=(b[H]??0)^Rt;if(b[H]=Et,!ee||H<n.pointOffset||H>=Z)continue;let Ct=Math.floor((H-n.pointOffset)/r.dirtyBlockBytes);Ct!==U&&(se(),U=Ct),Et!==Rt&&(Q=!0)}J<$.byteLength&&await new Promise(H=>globalThis.setTimeout(H,0))}se(),a();let nn=f===b.byteLength?b.buffer:b.slice(0,f).buffer;return{parsed:t(nn),revision:w,...ee?{deltaHint:{baseRevision:v,blockBytes:r.dirtyBlockBytes,dirtyBlocks:te}}:{}}}}},Ms=Object.freeze({deltaHeaderBytes:me,deltaMaxBytes:re,sceneHeaderBytes:tt,sceneMaxBytes:ie,sceneMaxPoints:Ut,scenePointStride:Kt,dirtyBlockBytes:Vt,xorChunkBytes:cn}),Ps=Cs(Ms),dn=r=>{try{return Ps.parseTransfer(r)}catch{throw new R("invalid-scene")}},un=()=>`
  const { parseTransfer, decodeDeltaTransfer } = (${Cs.toString()})(Object.freeze(${JSON.stringify(Ms)}));
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
`,Oe=class{#e=null;#t=null;#o=!1;#s=!1;#r=0;#a=null;#i=null;#n=null;constructor(){if(!(typeof Worker!="function"||typeof URL?.createObjectURL!="function"))try{this.#t=URL.createObjectURL(new Blob([un()],{type:"text/javascript"})),this.#v()}catch{this.#e=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}}async parse(t,e){if(this.#u(e),t.byteLength>ie||t.byteLength<tt)throw new R("invalid-scene");let s=await this.#d({kind:"parse",buffer:t},e,async n=>(await new Promise(o=>globalThis.setTimeout(o,0)),this.#u(n),{id:0,ok:!0,parsed:dn(t)}));if(!s.parsed)throw new R("invalid-scene");return s.parsed}async decodeDelta(t,e,s){if(this.#u(s),t.byteLength>me+re||e.buffer.byteLength>re)throw new R("invalid-scene-delta-size");let n={buffer:e.buffer,revision:e.revision,pointOffset:e.pointOffset,floorCount:e.floorCount,surfaceCount:e.surfaceCount},o;try{o=await this.#d({kind:"delta",payload:t},s,async i=>(await new Promise(a=>globalThis.setTimeout(a,0)),this.#u(i),Ps.decodeDeltaTransfer(t,n,i).then(a=>({id:0,ok:!0,...a}))),n)}catch(i){throw i instanceof R?i:s?.aborted||i instanceof DOMException&&i.name==="AbortError"?new DOMException("Aborted","AbortError"):i instanceof Error&&(i.message.startsWith("invalid-scene")||i.message==="scene-delta-decompression-unavailable")?new R(i.message):new R("invalid-scene-delta")}if(!o.parsed||o.revision===void 0)throw new R("invalid-scene-delta");return{parsed:o.parsed,revision:o.revision,...o.deltaHint?{deltaHint:o.deltaHint}:{}}}#u(t){if(this.#s)throw new R("scene-parser-disposed");if(t?.aborted)throw new DOMException("Aborted","AbortError")}#v(){if(!(!this.#t||this.#o||this.#s))try{let t=new Worker(this.#t);t.onmessage=e=>{let s=this.#a;this.#e!==t||!s||s.worker!==t||e.data.id!==s.id||(e.data.ok?this.#y(s,e.data):this.#y(s,void 0,new R(e.data.problem||"invalid-scene")))},t.onerror=()=>this.#c(t),t.onmessageerror=()=>this.#c(t),this.#e=t}catch{this.#e=null,this.#o=!0}}async#d(t,e,s,n){return this.#u(e),new Promise((o,i)=>{let a,l=()=>e?.removeEventListener("abort",a.abort),d=(c,u)=>{a.settled||(a.settled=!0,l(),u!==void 0?i(u):c?o(c):i(new R("invalid-scene")))};a={id:++this.#r,message:t,...e?{signal:e}:{},fallback:s,...n?{base:n}:{},settle:d,abort:()=>this.#w(a),settled:!1,worker:null},e?.addEventListener("abort",a.abort,{once:!0}),e?.aborted||this.#s?d(void 0,e?.aborted?new DOMException("Aborted","AbortError"):new R("scene-parser-disposed")):this.#a?this.#i?d(void 0,new R("scene-parser-busy")):this.#i=a:(this.#a=a,this.#k(a))})}#k(t){if(this.#a!==t)return;if(this.#s){this.#y(t,void 0,new R("scene-parser-disposed"));return}if(t.signal?.aborted){this.#y(t,void 0,new DOMException("Aborted","AbortError"));return}!this.#e&&!this.#o&&this.#v();let e=this.#e;if(e){t.worker=e;try{let n,o;if(t.message.kind==="parse")n={id:t.id,kind:t.message.kind,buffer:t.message.buffer},o=[t.message.buffer];else{if(!t.base)throw new R("invalid-scene-delta");let i={...t.base,buffer:t.base.buffer.slice(0)};n={id:t.id,kind:t.message.kind,payload:t.message.payload,base:i},o=[t.message.payload,i.buffer]}e.postMessage(n,o)}catch{this.#c(e)}return}let s=new AbortController;this.#n=s,Promise.resolve().then(()=>t.fallback(s.signal)).then(n=>this.#y(t,n),n=>this.#y(t,void 0,n))}#w(t){let e=new DOMException("Aborted","AbortError");if(this.#i===t){this.#i=null,t.settle(void 0,e);return}this.#a===t&&(t.worker?(this.#g(),this.#y(t,void 0,e)):this.#n?.abort())}#y(t,e,s){if(this.#a!==t){t.settle(void 0,new R("scene-parser-disposed"));return}let n=t.signal?.aborted?new DOMException("Aborted","AbortError"):s;t.settle(e,n),this.#a=null,this.#n=null,t.worker=null,this.#s||this.#p()}#p(){if(this.#s||this.#a||!this.#i)return;let t=this.#i;if(this.#i=null,t.signal?.aborted){t.settle(void 0,new DOMException("Aborted","AbortError")),this.#p();return}this.#a=t,this.#k(t)}#c(t){if(this.#e!==t)return;this.#o=!0,this.#g();let e=this.#a;e?.worker===t?this.#y(e,void 0,new R("scene-worker-failed")):this.#p()}#g(){this.#e?.terminate(),this.#e=null}dispose(){if(this.#s)return;this.#s=!0;let t=this.#i;this.#i=null,t?.settle(void 0,new R("scene-parser-disposed"));let e=this.#a;this.#g(),this.#n?.abort(),this.#n=null,e&&(e.worker=null,e.settle(void 0,new R("scene-parser-disposed"))),this.#a=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}};var dt=["catalog","scene","sceneDelta","pose","history","plans","areas","areaSave","areaDelete"];var ut=()=>({requests:0,completed:0,failed:0,aborted:0,timedOut:0,totalDurationMs:0,maxDurationMs:0}),xs=r=>Math.min(1e9,r+1),As=r=>Number.isFinite(r)?Math.min(1e12,Math.max(0,r)):0,le=class{#e=ut();#t=!1;record(t,e){if(this.#t)return;let s=Math.round(As(e)*100)/100;this.#e.requests=xs(this.#e.requests),this.#e[t]=xs(this.#e[t]),this.#e.totalDurationMs=As(this.#e.totalDurationMs+s),this.#e.maxDurationMs=Math.max(this.#e.maxDurationMs,s)}snapshot(){return Object.freeze({...this.#e})}reset(){this.#t||Object.assign(this.#e,ut())}dispose(){this.#t=!0,Object.assign(this.#e,ut())}},De=class{#e=Object.fromEntries(dt.map(t=>[t,new le]));#t=!1;record(t,e,s){this.#t||this.#e[t].record(e,s)}snapshot(){let t=Object.fromEntries(dt.map(e=>[e,this.#e[e].snapshot()]));return Object.freeze(t)}dispose(){if(!this.#t){this.#t=!0;for(let t of dt)this.#e[t].dispose()}}};var N={catalog:1e4,scene:6e4,delta:35e3,pose:1e4,history:15e3,workflow:15e3,mutation:2e4,roomPreview:15e3},hn=2,fe=new WeakMap,x=class extends Error{constructor(t,e=null){super(t),this.name="BackendError",this.code=t,this.status=e}},Ts=(r,t)=>{let e=r.headers.get("X-Matic-Revision");if(e===null)return t;let s=Number(e);if(!Number.isSafeInteger(s)||s<0)throw new R("invalid-scene-revision");return s},Is=(r,t)=>{let e=r.headers.get("X-Matic-Floor-Coherent");if(e===null)return t;if(e==="1")return!0;if(e==="0")return!1;throw new R("invalid-scene-floor-header")},Le=class{#e;#t=new Oe;#o=new WeakMap;#s=new Set;#r=new De;#a=!1;constructor(t){this.#e=t}requestDiagnostics(){return this.#r.snapshot()}async#i(t,e,s=Number.POSITIVE_INFINITY,n="invalid-response-size"){let o=t.body?.getReader();if(!o)return new ArrayBuffer(0);let i=()=>{o.cancel().catch(()=>{})};e.addEventListener("abort",i,{once:!0});try{if(e.aborted)throw i(),new DOMException("Aborted","AbortError");let a=[],l=0;for(;;){let u=await o.read();if(e.aborted)throw new DOMException("Aborted","AbortError");if(u.done)break;if(l+u.value.byteLength>s)throw o.cancel().catch(()=>{}),new R(n);a.push(u.value),l+=u.value.byteLength}let d=new Uint8Array(l),c=0;for(let u of a)d.set(u,c),c+=u.byteLength;return d.buffer}finally{e.removeEventListener("abort",i),o.releaseLock()}}async#n(t,e,s,n,o,i){if(!Zt(e))throw new x("invalid-private-path");if(o?.aborted)throw new DOMException("Aborted","AbortError");let a=performance.now(),l="failed",d=new AbortController,c=()=>{},u=new Promise((y,v)=>{c=v}),m=()=>{d.abort(),c(new DOMException("Aborted","AbortError"))};o?.addEventListener("abort",m,{once:!0});let h=!1,f=window.setTimeout(()=>{h=!0,m()},n);try{let y=this.#e(),v=new Headers(s.headers),w={...s,cache:"no-store",credentials:"same-origin",headers:Object.fromEntries(v.entries()),signal:d.signal},k=async()=>{let b;if(typeof y?.fetchWithAuth=="function")b=await y.fetchWithAuth(e,w);else{let E=y?.auth?.accessToken||y?.auth?.data?.access_token;E&&v.set("Authorization",`Bearer ${E}`);let M=typeof y?.hassUrl=="function"?y.hassUrl(e):e;b=await fetch(M,{...w,headers:v})}try{if(d.signal.aborted)throw new DOMException("Aborted","AbortError");return await i(b,d.signal)}finally{b.body&&!b.body.locked&&b.body.cancel().catch(()=>{})}},S=await Promise.race([k(),u]);return l="completed",S}catch(y){throw h&&!o?.aborted?(l="timedOut",new x("request-timeout")):d.signal.aborted?(l="aborted",new DOMException("Aborted","AbortError")):y}finally{window.clearTimeout(f),o?.removeEventListener("abort",m),this.#r.record(t,l,performance.now()-a)}}async#u(t,e,s,n,o={}){return this.#n(t,e,{...o,headers:{Accept:"application/json",...o.headers||{}}},s,n,async(i,a)=>{if(!i.ok){let l=i.headers.get("X-Matic-Plans-Conflict");throw new x(l==="map-rechecking"?"map-rechecking":"request-failed",i.status)}try{return JSON.parse(new TextDecoder().decode(await this.#i(i,a)))}catch{throw new R("invalid-json-response")}})}async catalog(t){return xe(await this.#u("catalog",Ft,N.catalog,t))}async scene(t,e,s,n,o,i){let a=new Headers({Accept:"application/vnd.matic.slam-scene"});return n==="live"&&a.set("X-Matic-Prefer-Cached","1"),i&&a.set("If-None-Match",i),this.#n("scene",t,{headers:a},N.scene,o,async(l,d)=>{let c=Ts(l,e),u=Is(l,s);if(l.status===304)return{scene:null,floorCoherent:u,revision:c,notModified:!0};if(!l.ok)throw new x("scene-request-failed",l.status);if(l.headers.get("Content-Type")?.split(";",1)[0]!=="application/vnd.matic.slam-scene")throw new R("invalid-scene-content-type");return{scene:{...await this.#t.parse(await this.#i(l,d,ie,"invalid-scene-size"),d),revision:c,etag:l.headers.get("ETag"),source:n},floorCoherent:u,revision:c,notModified:!1}})}async sceneDelta(t,e,s,n){let o=t.includes("?")?"&":"?";return this.#n("sceneDelta",`${t}${o}since=${encodeURIComponent(e.revision)}`,{headers:{Accept:"application/vnd.matic.slam-delta, application/vnd.matic.slam-scene"}},N.delta,n,async(i,a)=>{let l=Ts(i,e.revision),d=Is(i,s);if(i.status===204){if(l!==e.revision)throw new R("invalid-scene-delta-revision");return{scene:null,floorCoherent:d,revision:l,notModified:!0}}if(!i.ok)throw new x("delta-request-failed",i.status);if(l<=e.revision)throw new R("invalid-scene-delta-revision");let c=i.headers.get("Content-Type")?.split(";",1)[0];if(c!=="application/vnd.matic.slam-delta"&&c!=="application/vnd.matic.slam-scene")throw new R("invalid-scene-delta-content-type");let u=c==="application/vnd.matic.slam-delta",m=u?me+re:ie,h=Number(i.headers.get("Content-Length"));if(Number.isFinite(h)&&h>m)throw new R(u?"invalid-scene-delta-size":"invalid-scene-size");let f=await this.#i(i,a,m,u?"invalid-scene-delta-size":"invalid-scene-size");if(u){let v=Number(i.headers.get("X-Matic-Base-Revision"));if(!Number.isSafeInteger(v)||v!==e.revision)throw new R("invalid-scene-delta-base");let w=await this.#t.decodeDelta(f,e,a);if(w.revision!==l)throw new R("invalid-scene-delta-revision");return{scene:{...w.parsed,revision:l,etag:i.headers.get("ETag"),source:"live",...w.deltaHint?{deltaHint:w.deltaHint}:{}},floorCoherent:d,revision:l,notModified:!1}}return{scene:{...await this.#t.parse(f,a),revision:l,etag:i.headers.get("ETag"),source:"live"},floorCoherent:d,revision:l,notModified:!1}})}async pose(t,e){return Jt(await this.#u("pose",t,N.pose,e))}async history(t,e){return jt(await this.#u("history",t,N.history,e))}async plans(t,e){return Qt(await this.#u("plans",t,N.workflow,e))}async areas(t,e){return Xt(await this.#u("areas",t,N.workflow,e))}async previewRoomSequence(t,e,s,n){if(!t||t.length>255||e.length<1||e.length>100)throw new R("invalid-room-sequence-preview-request");if(n?.aborted)throw new DOMException("Aborted","AbortError");let o=this.#e()?.connection;if(!o?.sendMessagePromise)throw new x("preview-unavailable");let i=null,a=()=>{},l=new Promise((w,k)=>{a=k}),d=this.#o.get(o),c,u=new Promise(w=>{c=w});this.#o.set(o,u);let m=!1,h=()=>{m||(m=!0,c(),this.#o.get(o)===u&&this.#o.delete(o))},f=!1,y=()=>{a(new DOMException("Aborted","AbortError")),f&&(h(),i!==null&&window.clearTimeout(i),i=null)};n?.addEventListener("abort",y,{once:!0});let v=new Promise((w,k)=>{i=window.setTimeout(()=>{i=null,k(new x("preview-timeout"))},N.roomPreview)});v.catch(()=>{f&&h()});try{if(d&&(await Promise.race([d,l,v]),n?.aborted))throw new DOMException("Aborted","AbortError");let w=fe.get(o)??0;if(w>=hn)throw new x("preview-unavailable");let k=o.sendMessagePromise({type:"call_service",domain:"matic_robot",service:"preview_room_sequence",target:{entity_id:t},service_data:{rooms:e.map(M=>({room:M.room,cleaning_mode:M.cleaning_mode,coverage_setting:M.coverage_setting})),use_room_schedule:!0,override_room_schedule:s},return_response:!0});fe.set(o,w+1),f=!0;let S=!1,b=()=>{if(!S){S=!0;let M=(fe.get(o)??1)-1;M===0?fe.delete(o):fe.set(o,M)}h(),i!==null&&window.clearTimeout(i),i=null};k.then(b,b);let E=await Promise.race([k,l,v]);if(n?.aborted)throw new DOMException("Aborted","AbortError");if(!E||typeof E!="object"||Array.isArray(E)||!("response"in E))throw new R("invalid-room-sequence-preview-envelope");return Yt(E.response)}finally{f||(d?d.then(h,h):h(),i!==null&&window.clearTimeout(i),i=null),n?.removeEventListener("abort",y)}}async saveArea(t,e,s){let n=await this.#u("areaSave",t,N.mutation,s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e.areaId?{area_id:e.areaId}:{},name:e.name,circles:e.circles,...e.outline?.closed?{outline:e.outline.points}:{},cleaning_mode:e.cleaningMode,coverage_setting:e.coverageSetting})});if(!n||typeof n!="object"||typeof n.id!="string")throw new R("invalid-area-save-response");return n.id}async deleteArea(t,e,s){await this.#n("areaDelete",`${t}?area_id=${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json"}},N.mutation,s,async n=>{if(!n.ok)throw new x("area-delete-failed",n.status)})}async service(t,e,s,n,o={}){let i=this.#e();if(this.#a||typeof i?.callService!="function")throw new x("service-unavailable");let a=null,l=null;try{let d=o.returnResponse?i.callService(t,e,s,{entity_id:n},!0,!0):i.callService(t,e,s,{entity_id:n});return!o.returnResponse&&!o.acknowledgementTimeout?await d:await Promise.race([d,new Promise((c,u)=>{l=()=>{a!==null&&window.clearTimeout(a),a=null,u(new DOMException("Aborted","AbortError"))},this.#s.add(l),a=window.setTimeout(()=>u(new x("mutation-timeout")),N.mutation)})])}finally{a!==null&&window.clearTimeout(a),l&&this.#s.delete(l)}}dispose(){if(!this.#a){this.#a=!0,this.#r.dispose();for(let t of this.#s)t();this.#s.clear(),this.#t.dispose()}}};var Os=()=>({version:4,view:"top",appearance:"photo",labels:!0,quality:"auto",cameras:{}}),ve=(r,t,e)=>Math.max(t,Math.min(e,r)),Ds=r=>r.replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",ht=(r,t=4)=>`matic-map-studio:v${t}:${Ds(r)}`,pn=r=>{if(!r||typeof r!="object")return null;let t=r;return["yaw","pitch","zoom","targetX","targetZ"].every(s=>typeof t[s]=="number"&&Number.isFinite(t[s]))?{yaw:ve(t.yaw,-Math.PI,Math.PI),pitch:ve(t.pitch,.18,Math.PI/2-.018),zoom:ve(t.zoom,.01,100),targetX:ve(t.targetX,-1e4,1e4),targetZ:ve(t.targetZ,-1e4,1e4)}:null},$s=r=>{let t=Os();if(!r||typeof r!="object")return t;let e=r,s=e.view==="three"||e.view==="top"||e.view==="rooms"?e.view:t.view,n=s==="rooms"?"top":s,o=e.quality==="auto"||e.quality==="efficient"||e.quality==="balanced"||e.quality==="maximum"?e.quality:t.quality,i=e.cameras&&typeof e.cameras=="object"?e.cameras:{},a={};for(let l of["three","top"]){let d=pn(i[l]);d&&(a[l]=d)}return{version:4,view:n,appearance:e.appearance==="rooms"||e.appearance==="photo"?e.appearance:t.appearance,labels:typeof e.labels=="boolean"?e.labels:t.labels,quality:o,cameras:a}},We=class{#e="local-user";#t=null;#o=null;load(t){this.#s(),this.#e=Ds(t);try{let e=window.localStorage.getItem(ht(this.#e));if(e)return $s(JSON.parse(e));for(let s of[3,2]){let n=window.localStorage.getItem(ht(this.#e,s));if(n)return $s(JSON.parse(n))}}catch{}return Os()}schedule(t){this.#t!==null&&window.clearTimeout(this.#t),this.#o={key:ht(this.#e),value:t},this.#t=window.setTimeout(()=>this.#s(),250)}#s(){this.#t!==null&&window.clearTimeout(this.#t),this.#t=null;let t=this.#o;if(this.#o=null,!!t)try{window.localStorage.setItem(t.key,JSON.stringify(t.value))}catch{}}dispose(){this.#s()}};var mt=1,ce=Number.MAX_SAFE_INTEGER,Ns=Number.MAX_SAFE_INTEGER,Ls=64,mn=1e12,pt=4,Ws=16*1024,fn=250,vn=4e3,qe=3e4;function q(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)?r:null}function Y(r,t){return typeof r=="number"&&Number.isSafeInteger(r)&&r>=0&&r<=t}function Bs(r){let t=q(r);if(!t)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,Ns))return null;e[s]=n}return e}function yn(r){let t=q(r);if(!t||Object.keys(t).length>128)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,Ns))return null;e[s]=n}return e}function Hs(r){return typeof r=="string"&&r.length>0&&r.length<=256?r:Y(r,ce)?String(r):null}function gn(r){let t=q(r),e=Hs(t?.epoch);if(!t||t.schema!==mt||e===null)return null;let s=yn(t.capabilities),n=Bs(t.revisions);return!s||!n||!Y(t.sequence,ce)||!Y(t.coherence_generation,ce)||t.coherence_generation===0?null:{schema:t.schema,capabilities:s,epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:n}}function qs(r,t){let e=q(r),s=gn(e?.snapshot??r);if(!s)return null;let n=q(e?.snapshot??r);if(!n||!("payload"in n))return null;let o=n.entry_id,i=q(n.identity),a=q(n.status),l=q(n.payload),d=a?a.reason===null?null:Fs(a.reason):null,c=l?.available,u=null;if(l?.entry!==void 0&&l.entry!==null){if((()=>{try{return JSON.stringify(l.entry).length}catch{return Ws+1}})()>Ws)return null;try{u=xe({entries:[l.entry]})[0]??null}catch{return null}}let m=a?.state;return typeof o!="string"||o.length===0||o.length>128||t!==void 0&&o!==t||!i||i.entry_id!==o||i.floor_mission_id!==null&&!Y(i.floor_mission_id,ce)||typeof i.floor_verified!="boolean"||i.floor_verified!==(i.floor_mission_id!==null)||!a||m!=="ready"&&m!=="stale"&&m!=="unavailable"||a.reason!==null&&d===null||typeof a.retryable!="boolean"||typeof c!="boolean"||u!==null&&u.entryId!==o||m==="ready"&&(d!==null||a.retryable||!c)||(m==="stale"||m==="unavailable")&&(d===null||c)||d==="authorization"&&a.retryable?null:{...s,entry_id:o,identity:{entry_id:o,floor_mission_id:i.floor_mission_id,floor_verified:i.floor_verified},status:{state:m,reason:d,retryable:a.retryable},payload:{available:c,entry:u}}}function zs(r){let t=q(r),e=Hs(t?.epoch),s=Bs(t?.revisions),n=t?.resources;return e===null||!s||!Y(t?.sequence,ce)||!Y(t?.coherence_generation,ce)||t.coherence_generation===0||!Array.isArray(n)||n.length>128||!n.every(o=>typeof o=="string"&&o.length<=128)?null:{epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:s,resources:n}}var ze=["gap","overflow","reconnect","invalid_message","server_request","restart","entry_removed","authorization","snapshot_required"];function Fs(r){return typeof r=="string"&&ze.includes(r)?r:null}function bn(r){let t=q(r);return t?.name==="AbortError"?"aborted":t?.name==="TimeoutError"?"timedOut":"failed"}function wn(){return Object.fromEntries(ze.map(r=>[r,new le]))}var Ne=class{#e;#t;#o;#s=null;#r=!1;#a=!1;#i=!1;#n=!1;#u=!1;#v=!1;#d=0;#k=!1;#w=!1;#y=!1;#p=!1;#c=null;#g=null;#b=0;#x=!1;#S=null;#f=-1;#h=new Map;#C=!1;#W=!1;#T=null;#l=[];#B=new le;#R=wn();#I=null;#_=null;#D=null;constructor(t,e){this.#e=t,this.#t=e,this.#o=Math.max(1,Math.min(Ls,e.maxPendingInvalidations??Ls))}async start(){if(!(this.#r||this.#W)){this.#W=!0;try{await this.#F(!1)}catch(t){this.#ae(t),this.#E("reconnect")}}}notifyReconnect(){(this.#n||this.#v)&&(this.#N(),this.#J("aborted"),this.#d+=1),this.#b=0,this.#k=!1,this.#n=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.requestResync("reconnect"),this.#i&&this.#j(0,!0)}requestResync(t="server_request"){this.#E(t,!0)}diagnostics(){let t=Object.fromEntries(ze.map(s=>[s,this.#R[s].snapshot()])),e=this.#_!==null&&this.#D!==null?Object.freeze({reason:this.#_,durationMs:Math.round(Math.min(mn,Math.max(0,performance.now()-this.#D))*100)/100}):null;return Object.freeze({snapshotAttempts:this.#B.snapshot(),recoveryEpisodes:Object.freeze(t),activeRecovery:e})}dispose(){if(!this.#r){this.#r=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#i=!1,this.#s?.(),this.#s=null,this.#h.clear(),this.#l=[],this.#I=null,this.#_=null,this.#D=null,this.#B.dispose();for(let t of ze)this.#R[t].dispose()}}#L(t){if(this.#r)return;let e=q(t),s=q(e?.event)??e,n=s?.type;if(n==="resync"){let i=Fs(s?.reason);if(!i){this.#E("invalid_message");return}if(i==="entry_removed"){this.#t.onEvent({type:"resync",reason:i}),this.dispose();return}this.#E(i);return}if(this.#n){if(n==="invalidate"){let i=zs(s?.invalidation??s);i?this.#H(i):(this.#l=[],this.#x=!0)}return}let o=n==="snapshot"?qs(s?.snapshot??s,this.#t.entryId):n==="invalidate"?zs(s?.invalidation??s):null;if(!o){this.#E("invalid_message");return}if(n==="snapshot"){let i=o;if(this.#i)return;if(this.#S!==null&&i.epoch!==this.#S){this.#E("restart");return}this.#V(i);return}this.#q(o)}#V(t){this.#S===t.epoch&&t.sequence<this.#f||(this.#S=t.epoch,this.#f=t.sequence,this.#h.clear(),this.#t.onEvent({type:"snapshot",snapshot:t}))}#ce(t){let e=this.#l;if(this.#l=[],this.#V(t),this.#r)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(o=>o.epoch===t.epoch&&o.sequence>=s),this.#E("gap");return}this.#q(n),s+=1}}#q(t){if(this.#i){this.#H(t);return}if(this.#S===null){this.#H(t);return}if(this.#S!==t.epoch){this.#H(t),this.#E("reconnect");return}if(!(t.sequence<=this.#f)){if(t.sequence!==this.#f+1){this.#H(t),this.#E("gap");return}this.#f=t.sequence;for(let e of t.resources)this.#h.set(e,t);if(this.#h.size>this.#o){this.#h.clear(),this.#E("overflow");return}this.#C||(this.#C=!0,queueMicrotask(()=>this.#de()))}}#H(t){this.#l.length>=this.#o?(this.#l=[],this.#x=!0,this.#E("overflow")):this.#l.push(t)}#de(){if(this.#C=!1,this.#r||this.#n||this.#h.size===0){this.#n&&this.#h.clear();return}let t=[...this.#h.values()];this.#h.clear();let e=t.reduce((n,o)=>!n||o.sequence>n.sequence?o:n,null);if(!e)return;let s=[...new Set(t.flatMap(n=>n.resources))];this.#t.onEvent({type:"invalidation",invalidation:{...e,resources:s}})}#E(t,e=!1){if(!this.#r){if(t==="authorization"){this.#K(),this.#t.onEvent({type:"resync",reason:t});return}if(!this.#n&&(this.#z(t),this.#a||(this.#a=!0,this.#t.onEvent({type:"resync",reason:t}),queueMicrotask(()=>{this.#a=!1})),t!=="entry_removed")){let s=e&&!this.#k;if(s&&(this.#k=!0),s&&this.#c!==null&&(window.clearTimeout(this.#c),this.#c=null),this.#y){if(this.#p){s&&this.#j(0,!0);return}this.#p=!0,this.#X(s);return}if(e&&this.#i){s&&(this.#w=!0);return}let n=this.#b>=pt?qe:0;this.#j(s?0:n,s)}}}#j(t,e=!1){if(!this.#r){if(this.#c!==null){if(!e)return;window.clearTimeout(this.#c),this.#c=null}if(this.#i){this.#g=e?t:Math.max(this.#g??0,t);return}this.#c=window.setTimeout(()=>{this.#c=null,this.#F(!0)},t)}}#X(t=!1){let e=this.#b>=pt?qe:Math.min(fn*2**this.#b,vn);this.#b<pt&&(this.#b+=1),this.#j(t?0:e,t)}async#F(t,e=!1){if(this.#r||this.#i)return;t&&this.#z(e?"authorization":"snapshot_required");let s=this.#d;this.#i=!0,this.#v=e;try{if(t&&await this.#M(),this.#r||this.#n&&!e||s!==this.#d)return;let n={startedAt:performance.now(),generation:s};this.#I=n;let o="completed",i;try{i=await this.#e.sendMessagePromise({type:"matic_robot/workspace_snapshot",version:mt,entry_id:this.#t.entryId})}catch(d){throw o=bn(d),d}finally{this.#Z(n,o)}if(this.#r||this.#n&&!e||s!==this.#d)return;let a=qs(i,this.#t.entryId);if(!a)throw new Error("invalid-workspace-snapshot");if(a.status.reason==="authorization"){this.#K(),this.#t.onEvent({type:"snapshot",snapshot:a});return}if(a.status.state!=="ready"&&a.status.retryable)throw new Error("workspace-snapshot-retryable");e&&(this.#n=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null),this.#i=!1,this.#y=!0,this.#p=!1;try{t?this.#ue(a):this.#ce(a)}finally{this.#y=!1}let l=this.#p||this.#x;this.#p?this.#w&&(this.#w=!1,this.#j(0,!0)):(this.#b=0,this.#k=!1,this.#w=!1),!t&&!this.#r&&await this.#M(),this.#x&&(this.#x=!1,this.#E("overflow")),t&&a.status.state==="ready"&&!l&&!this.#r&&s===this.#d&&this.#J("completed")}catch(n){if(this.#r||this.#n&&!e||s!==this.#d)return;if(this.#ae(n),this.#m(n))this.#K(),this.#t.onEvent({type:"resync",reason:"authorization"});else if(!e){t||this.#z("reconnect");let o=this.#w;this.#w=!1,this.#X(o)}}finally{this.#i=!1,this.#v=!1,this.#u?(this.#u=!1,this.#$(0)):e&&this.#n&&this.#$(qe);let n=this.#g;this.#g=null,n!==null&&this.#j(n)}}async#M(){if(this.#r||this.#s)return;if(this.#T)return this.#T;let t=(async()=>{let e=await this.#e.subscribeMessage(s=>this.#L(s),{type:"matic_robot/workspace_subscribe",version:mt,entry_id:this.#t.entryId});this.#r?e():this.#s=e})();this.#T=t;try{await t}finally{this.#T===t&&(this.#T=null)}}#ue(t){let e=this.#l;if(this.#l=[],this.#S===t.epoch&&t.sequence<this.#f){this.#l=e,this.#E("snapshot_required");return}if(this.#V(t),this.#r)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(o=>o.sequence>=s),this.#E("gap");return}this.#q(n),s+=1}}#m(t){let e=q(t),s=e?.code,n=e?.status??e?.statusCode;return s==="unauthorized"||s==="not_authorized"||s==="auth_invalid"||n===401||n===403}#z(t){this.#_!==null||this.#r||(this.#_=t,this.#D=performance.now())}#J(t){let e=this.#_,s=this.#D;this.#_=null,this.#D=null,!(e===null||s===null||this.#r)&&this.#R[e].record(t,performance.now()-s)}#Z(t,e){this.#I!==t||this.#r||t.generation!==this.#d||(this.#I=null,this.#B.record(e,performance.now()-t.startedAt))}#N(){let t=this.#I;t!==null&&(this.#I=null,!this.#r&&t.generation===this.#d&&this.#B.record("aborted",performance.now()-t.startedAt))}#K(){this.#N(),this.#J("failed"),this.#d+=1,this.#n||(this.#n=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#u=!1),this.#h.clear(),this.#l=[],this.#x=!1,this.#g=null,this.#b=0,this.#k=!1,this.#w=!1,this.#v||this.#$(qe)}#$(t){this.#r||this.#c!==null||this.#u||(this.#c=window.setTimeout(()=>{if(this.#c=null,!this.#r){if(this.#i){this.#u=!0;return}this.#F(!0,!0)}},t))}#ae(t){this.#t.onError?.(t instanceof Error?t:new Error("Workspace transport failed"))}};var Be=class{#e;#t;#o=document.visibilityState!=="hidden";#s=!1;#r=!1;#a=!1;constructor({onSuspend:t,onResume:e}){this.#e=t,this.#t=e}get active(){return this.#o}start(){this.#s||this.#r||(this.#s=!0,window.addEventListener("pagehide",this.#i),window.addEventListener("pageshow",this.#n),document.addEventListener("visibilitychange",this.#u),document.visibilityState==="hidden"&&(this.#o?this.#d(!1):this.#e()))}dispose(){this.#r||(this.#r=!0,this.#s&&(window.removeEventListener("pagehide",this.#i),window.removeEventListener("pageshow",this.#n),document.removeEventListener("visibilitychange",this.#u)))}#i=()=>{this.#a=!0,this.#d(!1)};#n=t=>{if(this.#a=!1,t.persisted){document.visibilityState==="hidden"?this.#d(!1):(this.#d(!1),this.#d(!0));return}this.#v()};#u=()=>{this.#v()};#v(){if(this.#a||document.visibilityState==="hidden"){this.#d(!1);return}this.#d(!0)}#d(t){this.#o===t||this.#r||(this.#o=t,t?this.#t():this.#e())}};var p=(r,t,e=null)=>({status:r,value:t,problem:e}),ye=r=>r.status==="loading"?p("idle",r.value):r,z=r=>r instanceof DOMException&&r.name==="AbortError",_n={notice:P,parseSavedPlanId:Gt,BackendError:x,isAbort:z,canEditCoordinates:Qe,initialWorkspaceState:V,draftForPlan:Ge,hasStoppableWork:Dt},K=(r,t)=>r instanceof x||r&&typeof r=="object"&&"code"in r&&typeof r.code=="string"?r.code:t,I={stopUnconfirmed:P("error","v4_notice_stop_unconfirmed","Home Assistant can't confirm the robot stopped, so press Stop again if it's still moving."),actionUnconfirmed:P("error","v4_notice_action_unconfirmed","Home Assistant can't confirm that command, so check the robot before trying again."),mapChanged:P("info","v4_notice_map_changed","The map changed, so choose what to clean again."),statusRefreshed:P("info","v4_notice_status_refreshed","Status refreshed, so check the robot before trying again."),planSaveFailed:P("error","v4_notice_plan_save_failed","Home Assistant can't confirm the plan was saved, so check your plans, then try again."),planDeleteFailed:P("error","v4_notice_plan_delete_failed","The plan wasn't deleted; try again."),planPreviewMissing:P("warning","v4_notice_plan_preview_missing","The next-run preview isn't ready; reload your plans, then try again."),planPreviewRefreshFailed:P("warning","v4_notice_plan_preview_refresh_failed","The next-run preview didn't refresh; check the plan, then try again."),planPreviewNone:P("warning","v4_notice_plan_preview_none","This plan has no next-run preview; review its rooms and schedules."),planPreviewChanged:P("info","v4_notice_plan_preview_changed","The next run changed; check it before you run the plan."),roomPreviewBlocked:P("warning","v4_notice_room_preview_blocked","A room can't use these settings, so check the note above the rooms."),roomPreviewChanged:P("info","v4_notice_room_preview_changed","The room settings changed, so check them and start again."),roomPreviewFailed:P("warning","v4_notice_room_preview_failed","Home Assistant couldn't check the room settings, so try starting again."),areaRemoved:P("warning","v4_notice_area_removed","This saved area was removed elsewhere. Your edits are kept as a new draft; saving will create a new area."),areaSaveFailed:P("error","v4_notice_area_save_failed","Home Assistant can't confirm the area was saved, so try again."),areaDeleteFailed:P("error","v4_notice_area_delete_failed","Home Assistant can't confirm the area was deleted, so try again."),resetMopFailed:P("error","v4_notice_reset_mop_failed","Mopping progress wasn't reset; try again."),resetVacuumFailed:P("error","v4_notice_reset_vacuum_failed","Vacuum rotation progress wasn't reset; try again.")},kn=r=>P("warning","v4_notice_saved_map","Showing the saved map from {date} without the robot's position.",{date:{date:r}}),Ks={coverage_identity_unavailable:P("error","v4_notice_coverage_task_unknown","Home Assistant can't confirm the current clean, so check the robot first."),coverage_activity_unavailable:P("error","v4_notice_coverage_activity_unknown","Home Assistant can't confirm whether the robot is cleaning, so check it first."),coverage_native_session_active:P("error","v4_notice_coverage_robot_busy","The robot is already cleaning, so wait for it to finish."),coverage_identity_changed:P("error","v4_notice_coverage_task_changed","The clean changed while starting, so check the robot first.")},Sn=r=>{let{translation_domain:t,translation_key:e}=r??{};return t==="matic_robot"&&typeof e=="string"&&Object.hasOwn(Ks,e)?Ks[e]??null:null},de=r=>[r.selectedFloorOrdinal??"none",r.mapFloorOrdinal??"none",r.mapFloorCoherent?"coherent":"transition"].join(":"),ue=r=>[r.mapFloorOrdinal??"none",r.mapSessionVerified?"verified":"unverified",r.mapSessionKey??"no-session"].join(":"),F=r=>[r.entryId,r.selectedFloorOrdinal??"none",r.mapFloorOrdinal??"none"].join("|"),A=r=>[r.entryId,de(r),ue(r)].join("|"),ft=r=>[A(r),r.mapRevision].join("|"),He=r=>r.runnerLocked||r.stopSettlePending||r.activePlan||r.nativeReconciliationPending||r.nativeSessionActive===!0,Fe=(r,t)=>r.entryKey===t.entryKey&&r.generation===t.generation&&r.floorKey===t.floorKey&&r.missionKey===t.missionKey,Rn=1e3,En=5e3,Us=["rooms","plans","plan","draw","areaReview"],Vs=["plan-mutation","area-mutation"],js=r=>JSON.stringify({...r,previewToken:void 0}),Ke=(r,t)=>r.label?r.label:r.active?"Current floor":`Saved floor ${r.ordinal??t}`,Ue=class{#e;#t;#o;#s;#r=new We;#a=null;#i=new Map;#n=null;#u=null;#v=null;#d=null;#k=0;#w=!1;#y=!1;#p=!1;#c=!1;#g=null;#b=Promise.resolve();#x=!1;#S=!1;#f="";#h=null;#C=0;#W=null;#T="";#l=!1;#B=!0;#R=null;#I=null;#_=null;#D=null;#L="";#V=!1;#ce=null;#q;#H;workspaceDiagnostics(){return this.#R?.diagnostics()??null}constructor(t,e,s=null,n){this.#e=t,this.#t=new $t(t.value.generation),this.#o=e,this.#q=s,this.#H=n,this.#s=new Be({onSuspend:()=>this.#de(),onResume:()=>{this.#E()}}),this.#e.patch({pageActive:this.#s.active}),this.#D=t.subscribe(o=>{this.#j(o),this.#ue()}),this.#s.start()}#de(){this.#N(!1,Vs),this.#Y(),this.#U(Vs),this.#p=!1,this.#c=!1,this.#g=null,this.#S=!1,this.#ge();let t=this.#e.value;this.#e.patch({resources:{...t.resources,catalog:ye(t.resources.catalog),scene:ye(t.resources.scene),history:ye(t.resources.history),plans:ye(t.resources.plans),areas:ye(t.resources.areas),pose:p("idle",null)}})}async#E(){if(this.#l||!this.#s.active)return;this.#e.patch({pageActive:!0});let t=this.#n;if(this.#l||!this.#s.active||!t?.host.connected||!t.host.administrator||!t.host.robotConnected||t.host.robotCount===0)return;let e=this.#e.value;this.#_e(),this.#z(t),await this.refreshCatalog(!0,!0);let s=this.#e.value,n=s.resources.entry;if(this.#l||!this.#s.active||e.dataMode!=="history"||s.generation!==e.generation||s.dataMode!=="history"||s.selection.entryId!==e.selection.entryId||s.selection.floorId!==e.selection.floorId||s.selection.historyId!==e.selection.historyId||s.resources.catalog.status!=="ready"||!n||n.entryId!==s.selection.entryId)return;let o=s.resources.history.value?.floors.find(u=>u.id===s.selection.floorId),i=o?.snapshots.find(u=>u.id===s.selection.historyId);if(!o)return;let a=this.#t.begin(n.entryId,o.id,i?.id??o.id,i?.revision??0);if(this.#e.patch({generation:a.generation}),await this.#oe(n,a),!this.#t.accepts(a)||!this.#s.active||this.#e.value.resources.history.status!=="ready")return;let l=this.#e.value,d=l.resources.history.value?.floors.find(u=>u.id===o.id),c=d?.snapshots.find(u=>u.id===i?.id);!d||i&&!c||(c&&c.revision!==a.revision&&(a=this.#t.begin(n.entryId,o.id,c.id,c.revision)),this.#e.patch({generation:a.generation,coherence:"current"}),c&&(!l.resources.scene.value||c.revision!==i?.revision)&&await this.#ye(c,a))}#j(t){if(!t.owner)return;let e={version:4,view:t.view,appearance:t.appearance,labels:t.labelsVisible,quality:t.quality,cameras:t.cameras},s=this.#a;this.#a=e,!(!s||s.view===e.view&&s.appearance===e.appearance&&s.labels===e.labels&&s.quality===e.quality&&s.cameras===e.cameras)&&this.#r.schedule(e)}#X(t){let e=xt(t),s=t.resources.entry,n=this.#n?.vacuumEntityId;if(!e||!s||!n||!t.selection.entryId||t.workflow!=="rooms"||t.dataMode!=="live"||t.floor.readOnly||t.coherence!=="current"||!t.host.connected||!t.host.administrator||!t.host.robotConnected||t.command!=="idle"||t.resources.plans.status!=="ready")return null;let o=t.selection.roomIds.map(i=>{let a=t.selection.roomSettings.find(l=>l.roomId===i);return a?{room:i,cleaning_mode:a.cleaningMode,coverage_setting:a.coverageSetting}:null});return o.some(i=>i===null)?null:{key:e,generation:t.generation,retryRevision:t.manualRoomPreviewRetry,floorKey:de(s),missionKey:ue(s),entryId:t.selection.entryId,entityId:n,rooms:o,overrideRoomSchedule:!t.selection.useRoomSchedule}}#F(t){return JSON.stringify([t.key,t.generation,t.retryRevision,t.floorKey,t.missionKey,t.entryId,t.entityId])}#M(t){let e=this.#X(this.#e.value);return!this.#l&&e!==null&&this.#F(e)===this.#F(t)}#ue(){if(this.#l||!this.#n)return;let t=this.#e.value,e=this.#X(t);if(!e){this.#i.get("room-preview")?.abort(),this.#i.delete("room-preview"),this.#L="",(t.manualRoomPreview.status!=="idle"||t.manualRoomPreview.value!==null)&&this.#e.patch({manualRoomPreview:p("idle",null)});return}let s=this.#F(e),n=Xe(t);if(n&&n.key===e.key&&n.generation===e.generation&&n.floorKey===e.floorKey&&n.missionKey===e.missionKey&&n.preview.entryId===e.entryId){this.#L=s;return}if(this.#L===s)return;this.#i.get("room-preview")?.abort(),this.#L=s;let o=this.#A("room-preview");this.#e.patch({manualRoomPreview:p("loading",null)}),this.#m(e,o)}async#m(t,e){try{let s=await this.#o.previewRoomSequence(t.entityId,t.rooms,t.overrideRoomSchedule,e.signal);return!this.#M(t)||e.signal.aborted||s.entryId!==t.entryId?null:(this.#e.patch({manualRoomPreview:p("ready",{key:t.key,generation:t.generation,floorKey:t.floorKey,missionKey:t.missionKey,preview:s})}),s)}catch(s){return z(s)||e.signal.aborted||!this.#M(t)||this.#e.patch({manualRoomPreview:p("error",null,K(s,"preview-unavailable"))}),null}finally{this.#P("room-preview",e)}}sync(t){if(this.#l)return;let e=this.#R,s=this.#n?.host.robotConnected??null,n=this.#n?.host.administrator===!1&&t.host.administrator,o=this.#n!==null&&!this.#n.host.robotConnected&&t.host.robotConnected,i=this.#e.value.owner,a=i!==null&&(i.entryKey!==t.entryKey||i.userKey!==t.userKey);a&&(this.#ne("context-changed",t.entryKey),this.#w&&(this.#p=!0,this.#c=!1,this.#g=null));let l=this.#B;this.#B=t.host.connected,this.#n=t,this.#z(t),o&&e&&e===this.#R&&e.notifyReconnect();let d=t.userKey!==this.#T?this.#r.load(t.userKey):null;if(d&&(this.#T=t.userKey,this.#a=d),this.#e.patch({owner:{userKey:t.userKey,entryKey:t.entryKey},host:t.host,activity:t.activity,batteryPercent:t.batteryPercent,robotLabel:t.robotLabel,robots:t.robots,locale:t.language,selection:{...this.#e.value.selection,entryId:t.entryKey},...d?{view:d.view,appearance:d.appearance,labelsVisible:d.labels,quality:d.quality,cameras:d.cameras}:{}}),!t.host.administrator){this.#Y(),this.#ne("access-required",t.entryKey);return}if(!t.host.connected){l&&(this.#e.patch({generation:this.#t.invalidate()}),this.#$(),this.#f=""),this.#Y(),this.#p=!1,this.#c=!1,this.#g=null,this.#S=!1,this.#U();let c=this.#e.value,u=c.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...c.resources,catalog:c.resources.catalog.status==="loading"?p("idle",c.resources.catalog.value):c.resources.catalog,plans:c.resources.plans.status==="loading"?p("idle",c.resources.plans.value):c.resources.plans,areas:c.resources.areas.status==="loading"?p("idle",c.resources.areas.value):c.resources.areas,pose:p("idle",null)},map:{...c.map,available:u!==null,exactPose:!1}});return}if(t.host.robotCount===0){this.#Y(),this.#ne("map-unavailable",t.entryKey);return}if(t.entryKey&&!t.vacuumEntityId){this.#Y(),this.#ne("no-loaded-robot",t.entryKey);return}if(!t.host.robotConnected){s!==!1&&(this.#N(),this.#U(),this.#p=!1,this.#c=!1,this.#g=null,this.#S=!1),this.#Y();let c=this.#e.value,u=c.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...c.resources,catalog:c.resources.catalog.status==="loading"?p("idle",c.resources.catalog.value):c.resources.catalog,scene:c.resources.scene.status==="loading"?p("idle",u):c.resources.scene,pose:p("idle",null)},map:{...c.map,available:u!==null,exactPose:!1}});return}if(this.#s.active){if(this.#_e(),!l||o||n){this.refreshCatalog(!0,!0);return}(a||this.#e.value.resources.catalog.status==="idle"||t.entryKey&&t.entryKey!==this.#e.value.selection.entryId)&&this.refreshCatalog(!0)}}#z(t){let e=t.entryKey,s=this.#e.value,n=s.resources.catalog.value?.find(l=>l.entryId===e),o=s.resources.entry;if(!(this.#H??!!(n?.liveWorkspaceTransportEnabled&&o?.entryId===e&&o.liveWorkspaceTransportEnabled))||!this.#q||!t.host.administrator||!t.host.connected||!t.vacuumEntityId||!e||!this.#s.active){this.#ge();return}if(this.#R&&this.#I===e)return;this.#R?.dispose(),this.#_=null;let a=new Ne(this.#q,{entryId:e,onEvent:l=>{if(!(this.#l||!this.#s.active||this.#R!==a||this.#I!==e||this.#n?.entryKey!==e)){if(l.type==="resync"&&l.reason==="entry_removed"){a.dispose(),this.#R===a&&(this.#R=null,this.#I=null,this.#_=null);return}if(l.type==="snapshot"){let{snapshot:d}=l,c=this.#e.value.resources.entry,u=d.payload.entry;if(d.entry_id!==e||d.identity.entry_id!==e)return;if(u&&(u.entryId!==e||d.identity.floor_verified!==(u.mapFloorCoherent&&u.mapSessionVerified))){a.requestResync("invalid_message");return}let m=!u&&c?.entryId===e&&d.identity.floor_verified!==(c.mapFloorCoherent&&c.mapSessionVerified);if(d.status.reason==="authorization"){this.#_=null,this.#K(e,["plans","areas","history"]);return}let h=this.#_,f=[],y=h!==null&&h.epoch!==d.epoch;if(h&&h.epoch===d.epoch){let S=new Set([...Object.keys(h.revisions),...Object.keys(d.revisions)]),b=[...S].some(E=>(d.revisions[E]??-1)<(h.revisions[E]??-1));if(d.coherence_generation<h.coherenceGeneration||d.coherence_generation===h.coherenceGeneration&&b){a.requestResync("restart");return}f=[...S].filter(E=>(d.revisions[E]??-1)>(h.revisions[E]??-1))}y&&(f=["plans","areas","history"]);let v=h!==null&&(h.epoch!==d.epoch||h.coherenceGeneration!==d.coherence_generation),w=!!(c&&u&&c.entryId===e&&A(c)!==A(u));if(this.#_={entryId:d.entry_id,epoch:d.epoch,sequence:d.sequence,coherenceGeneration:d.coherence_generation,revisions:d.revisions},m){this.#K(e,["plans","areas","history"]);return}if(v||w){this.#K(e,f);return}let k=u!==null&&c?.entryId===e&&this.#Z(u);if(h&&f.length){if(d.sequence<=h.sequence){a.requestResync("invalid_message");return}this.#_=h,this.#J({epoch:d.epoch,sequence:d.sequence,coherence_generation:d.coherence_generation,revisions:d.revisions,resources:f},e,a,k)}return}if(l.type==="resync"){this.#_=null,l.reason!=="authorization"&&this.#K(e,["plans","areas","history"]);return}this.#J(l.invalidation,e,a)}}});this.#R=a,this.#I=e,a.start()}#J(t,e,s,n=!1){let o=this.#_;if(!o||o.entryId!==e||this.#R!==s||t.epoch!==o.epoch||t.sequence<=o.sequence)return;let i=t.coherence_generation!==o.coherenceGeneration,l=[...new Set([...Object.keys(o.revisions),...Object.keys(t.revisions)])].some(h=>(t.revisions[h]??-1)<(o.revisions[h]??-1));if(t.coherence_generation<o.coherenceGeneration||!i&&l){s.requestResync("restart");return}let d=new Set(t.resources),c=[...d].some(h=>(t.revisions[h]??-1)>(o.revisions[h]??-1));if(this.#_={...o,sequence:t.sequence,coherenceGeneration:t.coherence_generation,revisions:t.revisions},!c&&!i)return;if(i){this.#K(e,t.resources);return}d.has("scene")&&d.delete("scene");let u=this.#e.value.resources.entry,m=this.#t.current();!u||u.entryId!==e||!m||d.size&&this.#we(u,m,d,!n)}#Z(t){let e=this.#e.value,s=e.resources.entry;if(!s||A(s)!==A(t))return!1;let n=t.mapRevision===s.mapRevision?t:{...t,mapRevision:s.mapRevision},o=e.resources.catalog,i=o.value?.map(u=>u.entryId===n.entryId?n:u),a=n.mapFloorCoherent&&n.mapSessionVerified,l=n.health==="problem"||n.health==="limited",d=this.#h,c=d?.key===A(n)&&this.#Q(d)&&(d.attempt!==null||d.retryTimer!==null);return this.#e.patch({managedLock:He(n),coherence:c?"verifying":a?l?"degraded":"current":"verifying",map:{...e.map,available:e.resources.scene.value!==null,complete:n.mapComplete&&!n.mapTruncated,floorCoherent:n.mapFloorCoherent,sessionVerified:n.mapSessionVerified,exactPose:a&&!c?e.map.exactPose:!1},floor:{...e.floor,classifiedCount:Math.max(1,n.historyFloorCount),...c&&e.resources.scene.value?{readOnly:!0}:{}},resources:{...e.resources,entry:n,...i?{catalog:{...o,value:i}}:{}}}),this.#n&&this.#z(this.#n),!0}#N(t=this.#e.value.pageActive,e=[]){let s=this.#t.invalidate();this.#$();let n=this.#e.value;this.#e.patch({generation:s,pageActive:t,coherence:n.resources.scene.value?"verifying":"unavailable",floor:{...n.floor,readOnly:n.floor.readOnly||n.resources.scene.value!==null},map:{...n.map,exactPose:!1}}),this.#h&&this.#ee(this.#h.key),this.#U(["catalog",...e]),this.#f=""}#K(t,e=[]){this.#O(),this.#N(),this.refreshCatalog(!0,!0).then(()=>{if(this.#l||this.#n?.entryKey!==t||!this.#n.host.administrator||!this.#n.host.connected)return;let s=this.#e.value.resources.entry,n=this.#t.current();if(!s||s.entryId!==t||!n)return;let o=new Set(e);o.delete("history"),this.#we(s,n,o,!1)})}#$(){this.#C+=1,this.#W=null}#ae(t){let e=this.#W,s=this.#t.current();return!!(e&&s&&e.generation===this.#C&&e.stamp.generation===s.generation&&e.entryId===t.entryId&&e.coherenceIdentity===A(t)&&e.deltaUrl===t.deltaUrl&&s.entryKey===t.entryId&&s.floorKey===de(t)&&s.missionKey===ue(t)&&t.mapFloorCoherent&&t.mapSessionVerified&&this.#e.value.dataMode==="live"&&this.#e.value.selection.floorId==="current"&&this.#n?.host.connected&&this.#n.host.robotConnected&&this.#n.host.administrator)}#we(t,e,s,n=!0){(s.has("plans")||s.has("plan_state"))&&this.loadPlans(),s.has("areas")&&this.loadAreas(),s.has("history")&&this.#oe(t,e),n&&["status","robot_state","activity","plan_state"].some(o=>s.has(o))&&this.refreshCatalog(!0,!0,!0)}#_e(){this.#s.active&&(this.#u===null&&(this.#u=window.setInterval(()=>{this.refreshCatalog()},5e3)),this.#v===null&&(this.#v=window.setInterval(()=>{this.refreshPose()},Rn)))}#Y(){this.#u!==null&&window.clearInterval(this.#u),this.#v!==null&&window.clearInterval(this.#v),this.#u=null,this.#v=null,this.#O()}#O(){let t=this.#h;if(this.#h=null,!t)return;t.attempt?.finishReplacementRead?.(),t.attempt&&(t.attempt.finishReplacementRead=null),t.retryTimer!==null&&window.clearTimeout(t.retryTimer);let e=t.attempt?.controller,s=!!(e&&e===this.#i.get("catalog")&&this.#e.value.resources.catalog.status==="loading");if(e?.abort(),s){let n=this.#e.value.resources;this.#e.patch({resources:{...n,catalog:p("idle",n.catalog.value)}})}this.#g?.state===t&&(this.#p=!1,this.#c=!1,this.#g=null)}#le(t,e){let s=this.#h;s?.key===A(e)&&(s.failedKinds.delete(t),t==="delta"&&this.#G(e),s.failedKinds.size===0&&this.#O())}#G(t){this.#ee(A(t))}#ee(t){let e=this.#h;e?.key===t&&(e.attempt?.finishReplacementRead?.(),e.attempt&&(e.attempt.finishReplacementRead=null))}#ve(t,e){let s=A(e),n=this.#h;n?.key!==s&&(this.#O(),n={key:s,failedKinds:new Set,retryTimer:null,attempt:null},this.#h=n),n.failedKinds.add(t),t==="delta"&&this.#G(e),this.#Q(n)&&this.#t.current()&&this.#N(),!n.attempt&&n.retryTimer===null&&(n.failedKinds.size===1&&n.failedKinds.has(t)?this.#ke(n):this.#te(n))}#Q(t){let e=this.#e.value;return t.failedKinds.has("pose")||e.floor.readOnly||!e.map.floorCoherent||!e.map.sessionVerified}#te(t){t.retryTimer!==null||t.failedKinds.size===0||(t.retryTimer=window.setTimeout(()=>{t.retryTimer=null;let e=this.#e.value.resources.entry,s=this.#n?.host;if(this.#h!==t||this.#l||!e||A(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#h===t&&this.#O();return}this.#ke(t)},En))}async#ke(t){if(this.#l||this.#h!==t||t.attempt)return;let e=this.#e.value.resources.entry,s=this.#n?.host;if(!e||A(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#h===t&&this.#O();return}if(this.#i.has("scene")){this.#te(t);return}let n=this.#Q(t);n?this.#t.current()&&this.#N():(this.#$(),this.#i.get("delta")?.abort());let o,i=new Promise(d=>{o=d}),a={generation:this.#t.generation,controller:null,replacementRead:i,finishReplacementRead:o};t.attempt=a;let l={state:t,attempt:a};try{await this.refreshCatalog(!0,!1,!n,l),t.failedKinds.has("delta")&&this.#h===t&&t.attempt===a&&await a.replacementRead}finally{if(this.#h!==t||t.attempt!==a)return;a.finishReplacementRead=null,t.attempt=null,t.failedKinds.size>0&&this.#te(t)}}#se(t){let e=this.#e.value,s=this.#n?.host;return!this.#l&&this.#s.active&&this.#h===t.state&&t.state.attempt===t.attempt&&t.attempt.generation===this.#t.generation&&e.generation===this.#t.generation&&e.dataMode==="live"&&e.selection.floorId==="current"&&e.resources.entry!==null&&A(e.resources.entry)===t.state.key&&!!(s?.connected&&s.administrator&&s.robotConnected&&s.robotCount>0)}#A(t){this.#i.get(t)?.abort();let e=new AbortController;return this.#i.set(t,e),e}#P(t,e){this.#i.get(t)===e&&this.#i.delete(t)}#U(t=[]){let e=!1;for(let[s,n]of this.#i)t.includes(s)||(e||=s==="plan-mutation"||s==="area-mutation"||s==="plan-preflight",n.abort(),this.#i.delete(s));e&&this.#e.value.command==="pending"&&this.#e.patch({command:"idle",notice:null})}#Se(){this.#k+=1,this.#d!==null&&window.clearTimeout(this.#d),this.#d=null}#ne(t,e=null){this.#O(),this.#Se(),this.#t.invalidate(),this.#$(),this.#f="";let s=this.#t.generation;this.#U();let n=this.#e.value,o=V();this.#e.patch({command:"idle",dataMode:o.dataMode,floor:o.floor,managedLock:!1,workflow:"none",dialog:null,notice:null,draftFloorOrdinal:null,draw:o.draw,planDraft:o.planDraft,areaDraft:o.areaDraft,generation:s,coherence:n.host.administrator?"unavailable":"blocked",fullMap:!1,precisionOpen:!1,resources:{catalog:p("error",null,t),entry:null,scene:p("idle",null),pose:p("idle",null),history:p("idle",null),plans:p("idle",null),areas:p("idle",null)},manualRoomPreview:p("idle",null),map:{available:!1,complete:!1,floorCoherent:!1,sessionVerified:!1,exactPose:!1},selection:{...o.selection,entryId:e,entrySource:n.selection.entrySource,floorId:"current",historyId:null}})}async refreshCatalog(t=!1,e=!1,s=!1,n=null){if(this.#l||!this.#s.active||!this.#n?.host.administrator||!this.#n.host.connected||this.#n.host.robotCount===0||n&&(!this.#n.host.robotConnected||!this.#se(n)))return;if(this.#w)return t&&(this.#y?e&&(this.#p?this.#c&&=s:this.#c=s,this.#p=!0):(this.#p?this.#c&&=s:this.#c=s,this.#p=!0,this.#i.get("catalog")?.abort()),n&&(this.#p?this.#c&&=s:this.#c=s,this.#g=n,this.#p=!0)),this.#b;this.#w=!0,this.#y=t;let o;this.#b=new Promise(l=>{o=l});let i=this.#A("catalog");n&&(n.attempt.controller=i);let a=this.#e.value.resources.catalog.value;this.#e.patch({resources:{...this.#e.value.resources,catalog:p("loading",a)}});try{let l=await this.#o.catalog(i.signal);if(i.signal.aborted||this.#l||n&&!this.#se(n))return;let d=this.#n?.entryKey,c=d?l.find(v=>v.entryId===d)??null:l[0]??null,u=this.#e.value.resources.entry;if(c&&this.#h?.key===A(c)&&(this.#h.attempt!==null||this.#h.retryTimer!==null)&&(!n||!this.#se(n))){this.#e.patch({managedLock:He(c),resources:{...this.#e.value.resources,catalog:p(l.length?"ready":"empty",l),entry:u}});return}let m=!!(c&&u&&A(c)===A(u)&&this.#ae(u));if(c&&u&&F(c)===F(u)&&de(c)===de(u)&&ue(c)===ue(u)&&(m||c.mapRevision<u.mapRevision||!t&&this.#i.has("scene"))&&(c={...c,mapRevision:u.mapRevision}),this.#e.patch({managedLock:c?He(c):!1,resources:{...this.#e.value.resources,catalog:p(l.length?"ready":"empty",l),entry:c}}),this.#n&&this.#z(this.#n),!c){this.#ne("no-loaded-robot",this.#n?.entryKey??null);return}if(this.#e.value.selection.floorId!=="current"||this.#e.value.dataMode!=="live"){n&&this.#G(c);return}let h=ft(c),f=this.#t.current(),y=!!(f&&u&&A(c)===A(u)&&c.mapFloorCoherent&&c.mapSessionVerified);if((!t||s)&&(h===this.#f||y)){let v=this.#e.value,w=c.mapFloorCoherent&&c.mapSessionVerified,k=c.health==="problem"||c.health==="limited";this.#e.patch({coherence:w?k?"degraded":"current":"verifying",map:{...v.map,available:v.resources.scene.value!==null,complete:c.mapComplete&&!c.mapTruncated,floorCoherent:c.mapFloorCoherent,sessionVerified:c.mapSessionVerified,exactPose:w?v.map.exactPose:!1},floor:{...v.floor,classifiedCount:Math.max(1,c.historyFloorCount)}}),w&&this.#e.value.resources.plans.problem==="map-rechecking"&&this.loadPlans(),this.#me();let S=f;if(S&&y&&(c.mapRevision>S.revision||n!==null)&&(c.mapRevision>S.revision&&(S=this.#t.advance(S,c.mapRevision)),S)){this.#f=h,this.#$();let b=this.#e.value.resources;this.#e.patch({resources:{...b,scene:p("loading",b.scene.value)}}),this.#he(c,S)}S&&!v.resources.scene.value&&!this.#i.has("history")&&this.#oe(c,S),w&&S&&(v.resources.scene.status==="error"||v.floor.readOnly)&&!this.#i.has("scene")&&this.#he(c,S);return}this.#f=h,this.#Me(c,u)}catch(l){if(z(l)||i.signal.aborted||this.#l)return;n&&this.#ee(n.state.key),this.#e.patch({coherence:this.#e.value.resources.scene.value?"degraded":"unavailable",resources:{...this.#e.value.resources,catalog:p("error",a,K(l,"catalog-unavailable"))}})}finally{this.#P("catalog",i),n?.attempt.controller===i&&(n.attempt.controller=null),this.#w=!1;let l=this.#p,d=this.#c,c=this.#g;this.#y=!1;try{l&&!this.#l&&(this.#p=!1,this.#c=!1,this.#g=null,await this.refreshCatalog(!0,!1,d,c))}finally{o()}}}#Me(t,e){this.#h!==null&&this.#h.key!==A(t)&&this.#O();let s=this.#e.value,n=!!(e&&F(e)===F(t)),o=t.mapFloorCoherent&&t.mapSessionVerified,i=s.draftMapSessionKey??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapSessionKey:null),a=s.draftFloorOrdinal??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapFloorOrdinal:null),l=o?t.mapFloorOrdinal:null,d=o?t.mapSessionKey:null,c=e!==null&&e.entryId!==t.entryId||a!==null&&l!==null&&a!==l||i!==null&&d!==null&&i!==d,u=n&&o&&a===t.mapFloorOrdinal&&i===t.mapSessionKey,m=["catalog"];n&&!c&&m.push("plans","areas"),u&&m.push("plan-mutation","area-mutation");let h=this.#t.begin(t.entryId,de(t),ue(t),t.mapRevision);this.#h?.key===A(t)&&this.#h.attempt&&(this.#h.attempt.generation=h.generation),this.#$(),this.#U(m);let f=e?.entryId===t.entryId?s.resources.scene.value:null,y=f!==null&&(s.floor.readOnly||!n||!o||e?.mapSessionKey!==t.mapSessionKey),v=s.resources.pose.value,w=n&&o&&t.mapSessionKey!==null&&v?.position&&v.mapSessionKey===t.mapSessionKey?v:null;c&&this.#Se();let k=V(),S=t.health==="problem"||t.health==="limited",b=this.#e.value;this.#e.patch({...c?{command:"idle",workflow:"none",dialog:null,precisionOpen:!1,fullMap:!1,draw:k.draw,planDraft:k.planDraft,areaDraft:k.areaDraft,notice:I.mapChanged}:{},draftFloorOrdinal:l??a,draftMapSessionKey:d??i,managedLock:He(t),generation:h.generation,coherence:o?S?"degraded":y?"verifying":"current":"verifying",dataMode:"live",resources:{...b.resources,entry:t,scene:p(o?"loading":"idle",f),pose:p(o?"loading":"idle",w),history:p("loading",b.resources.history.value),plans:n&&!c?b.resources.plans:p("idle",null),areas:n&&!c?b.resources.areas:p("idle",null)},map:{available:f!==null,complete:t.mapComplete&&!t.mapTruncated,floorCoherent:t.mapFloorCoherent,sessionVerified:t.mapSessionVerified,exactPose:o&&w!==null&&!y},floor:{classifiedCount:Math.max(1,t.historyFloorCount),displayName:y?s.floor.displayName:t.selectedFloorOrdinal?`Floor ${t.selectedFloorOrdinal}`:"Current floor",readOnly:y},selection:{...b.selection,entryId:t.entryId,floorId:"current",historyId:null,roomIds:c?[]:b.selection.roomIds,roomSettings:c?[]:b.selection.roomSettings,planId:c?null:b.selection.planId,areaId:c?null:b.selection.areaId}}),this.#oe(t,h),o&&this.#e.value.resources.plans.status==="idle"&&this.loadPlans(),this.#me(),o&&(this.#he(t,h),this.#pe(t,h))}async#he(t,e){if(!this.#s.active)return;let s=this.#A("scene");try{let n=await this.#o.scene(t.sceneUrl,t.mapRevision,t.mapFloorCoherent,"live",s.signal);if(!this.#t.accepts(e))return;if(!n.floorCoherent){let d=this.#e.value;this.#e.patch({coherence:"verifying",resources:{...d.resources,scene:p("error",d.resources.scene.value,"map-rechecking"),pose:p("idle",null)},map:{...d.map,available:d.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...d.floor,readOnly:d.resources.scene.value!==null}}),this.#G(t);return}if(n.revision<e.revision||!n.scene)throw new x("scene-unavailable");let o=n.revision===e.revision?e:this.#t.advance(e,n.revision);if(!o)throw new x("scene-unavailable");let i=this.#e.value,a={...i.resources.entry??t,mapRevision:n.revision};this.#f=ft(a),this.#e.patch({coherence:a.health==="problem"||a.health==="limited"?"degraded":"current",resources:{...i.resources,entry:a,scene:p("ready",n.scene)},map:{...i.map,available:!0},floor:{...i.floor,readOnly:!1,displayName:i.resources.history.value?.floors.find(d=>d.active)?.label||(a.selectedFloorOrdinal?`Floor ${a.selectedFloorOrdinal}`:"Current floor")},notice:i.notice?.key==="v4_notice_saved_map"?null:i.notice});let l=this.#e.value.resources.plans;if((l.status==="idle"||l.problem==="map-rechecking")&&this.loadPlans(),this.#me(),t.deltaUrl&&typeof DecompressionStream=="function"){let d=++this.#C;this.#Pe(a,o,n.scene,d)}else this.#le("delta",a)}catch(n){if(z(n)||!this.#t.accepts(e))return;if(n instanceof x&&n.code==="request-timeout"){let l=this.#e.value;this.#e.patch({resources:{...l.resources,scene:p("loading",l.resources.scene.value,"scene-building")}}),window.setTimeout(()=>{this.#l||!this.#t.accepts(e)||this.#e.value.selection.floorId!=="current"||this.#he(t,e)},250);return}this.#G(t);let o=this.#e.value,i=o.resources.pose.value,a=o.resources.scene.value!==null&&t.mapSessionKey!==null&&i?.position!==null&&i?.mapSessionKey===t.mapSessionKey;this.#e.patch({coherence:"degraded",resources:{...o.resources,scene:p("error",o.resources.scene.value,K(n,"scene-unavailable"))},map:{...o.map,available:o.resources.scene.value!==null,exactPose:a}})}finally{this.#P("scene",s)}}async#Pe(t,e,s,n){if(!t.deltaUrl||typeof DecompressionStream!="function")return;let o=t.deltaUrl,i={generation:n,stamp:e,entryId:t.entryId,coherenceIdentity:A(t),deltaUrl:o};if(n!==this.#C||!this.#t.accepts(e))return;this.#W=i;let a=t,l=e,d=s;try{for(;!this.#l&&this.#s.active&&n===this.#C&&this.#t.accepts(l)&&this.#e.value.selection.floorId==="current";){let c=this.#A("delta");try{let u=await this.#o.sceneDelta(o,d,a.mapFloorCoherent,c.signal);if(c.signal.aborted||this.#l||n!==this.#C||!this.#t.accepts(l))return;if(!u.floorCoherent){let f=this.#e.value;this.#e.patch({coherence:"verifying",map:{...f.map,available:f.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...f.floor,readOnly:f.resources.scene.value!==null},resources:{...f.resources,scene:p("error",f.resources.scene.value,"map-rechecking"),pose:p("idle",null)}}),this.#ve("delta",a);return}if(u.notModified||!u.scene){this.#le("delta",a),await new Promise(f=>window.setTimeout(f,100));continue}let m=this.#t.advance(l,u.revision);if(!m)return;l=m,i.stamp=m,d=u.scene,a={...a,mapRevision:u.revision},this.#le("delta",a),this.#f=ft(a);let h=this.#e.value;this.#e.patch({resources:{...h.resources,entry:a,scene:p("ready",d)},map:{...h.map,available:!0,floorCoherent:!0}}),this.#pe(a,l)}finally{this.#P("delta",c)}}}catch(c){if(z(c)||this.#l||n!==this.#C||!this.#t.accepts(l))return;this.#ve("delta",a)}finally{this.#W===i&&(this.#W=null)}}async#oe(t,e){if(!this.#s.active)return;let s=this.#A("history");try{let n=await this.#o.history(t.historyUrl,s.signal),o=this.#t.current();if(s.signal.aborted||!o||!Fe(e,o)||n.entryId!==t.entryId)return;let i=this.#e.value,a=n.floors.find(c=>c.id===i.selection.floorId),l=!i.selection.historyId||a?.snapshots.some(c=>c.id===i.selection.historyId),d=i.dataMode==="live"?n.floors.find(c=>c.active):a;if(this.#e.patch({resources:{...this.#e.value.resources,history:p("ready",n)},floor:{...this.#e.value.floor,classifiedCount:n.floors.length,...d&&!(i.dataMode==="live"&&i.floor.readOnly)?{displayName:Ke(d,1)}:{}}}),i.dataMode==="live"&&!i.resources.scene.value){let c=n.floors.flatMap(u=>u.snapshots.map(m=>({floor:u,snapshot:m}))).sort((u,m)=>Date.parse(m.snapshot.createdAt)-Date.parse(u.snapshot.createdAt));for(let u of c){let m;try{m=await this.#o.scene(u.snapshot.sceneUrl,u.snapshot.revision,!0,"history",s.signal)}catch(y){if(z(y)||s.signal.aborted)return;continue}let h=this.#t.current();if(s.signal.aborted||!h||!Fe(e,h)||this.#e.value.resources.scene.value)return;if(!m.scene)continue;let f=this.#e.value;this.#e.patch({floor:{...f.floor,readOnly:!0,displayName:Ke(u.floor,1)},resources:{...f.resources,scene:p("ready",m.scene),pose:p("idle",null)},map:{...f.map,available:!0,exactPose:!1},notice:kn(u.snapshot.createdAt)});break}}if(i.dataMode==="history"&&(!a||!l)){let c=a||n.floors.find(m=>m.active)||n.floors[0],u=this.selectFloor(c?.id||"current");!this.#l&&i.workflow==="history"&&this.#e.dispatch({type:"open-workflow",workflow:"history"}),await u}}catch(n){let o=this.#t.current();if(z(n)||s.signal.aborted||!o||!Fe(e,o))return;this.#e.patch({resources:{...this.#e.value.resources,history:p("error",null,K(n,"history-unavailable"))}})}finally{this.#P("history",s)}}async refreshPose(){let t=this.#e.value.resources.entry,e=this.#t.current();!t||!e||this.#e.value.selection.floorId!=="current"||!t.mapFloorCoherent||!t.mapSessionVerified||await this.#pe(t,e)}async#pe(t,e){if(this.#l||!this.#s.active||!this.#B||!this.#n?.host.connected)return;if(this.#x){this.#S=!0;return}this.#x=!0;let s=this.#A("pose");try{let n=await this.#o.pose(t.poseUrl,s.signal),o=this.#t.current(),i=this.#e.value.resources.entry;if(!o||!Fe(e,o)||!i||!this.#e.value.map.floorCoherent)return;if(!n.floorCoherent||n.mapSessionKey===null||n.mapSessionKey!==i.mapSessionKey){this.#e.patch({resources:{...this.#e.value.resources,pose:p("idle",null)},map:{...this.#e.value.map,exactPose:!1}}),this.#ve("pose",i);return}this.#le("pose",i);let a=this.#e.value,l=a.resources.pose.value,d=!!(a.map.exactPose&&l?.position&&l.mapSessionKey===i.mapSessionKey);if(n.position===null&&d){this.#e.patch({resources:{...a.resources,pose:p("ready",l)}});return}this.#e.patch({resources:{...a.resources,pose:p("ready",n)},map:{...a.map,exactPose:n.position!==null}})}catch(n){if(z(n)||!this.#t.accepts(e))return;let o=this.#e.value,i=o.resources.pose.value,a=!!(o.map.exactPose&&i?.position&&i.mapSessionKey===o.resources.entry?.mapSessionKey);this.#e.patch({resources:{...o.resources,pose:p("error",a?i:null,K(n,"pose-unavailable"))},map:{...o.map,exactPose:a}})}finally{if(this.#P("pose",s),this.#x=!1,this.#S&&!this.#l&&this.#B&&this.#n?.host.connected&&this.#n.host.administrator&&this.#n.host.robotCount>0){this.#S=!1;let n=this.#e.value.resources.entry,o=this.#t.current();n&&o&&this.#pe(n,o)}else this.#S=!1}}async selectFloor(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;let n=e.floors.find(l=>l.id===t);if(!n&&t!=="current")return;let o=this.#e.value;if(o.workflow==="draw"&&(o.draw.dirty||o.areaDraft.dirty)||o.workflow==="areaReview"&&(o.draw.dirty||o.areaDraft.dirty))return;if(!n||n.active){this.#O(),this.#f="";let l=this.#e.value;this.#e.patch({resources:{...l.resources,plans:p("idle",null),areas:p("idle",null),scene:p("idle",l.resources.scene.value),pose:p("idle",null)},map:{...l.map,available:l.resources.scene.value!==null,exactPose:!1},coherence:"verifying",floor:{...l.floor,readOnly:l.resources.scene.value!==null},workflow:"none",precisionOpen:!1}),this.#e.dispatch({type:"set-floor",floorId:"current"}),await this.refreshCatalog(!0);return}this.#O();let i=n.snapshots.at(-1),a=this.#t.begin(s.entryId,n.id,i?.id||n.id,i?.revision||0);this.#U(["catalog"]),this.#e.patch({generation:a.generation,coherence:"current",dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ke(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:i?.id||null},resources:{...this.#e.value.resources,scene:p(i?"loading":"empty",null),pose:p("idle",null),plans:p("idle",null),areas:p("idle",null)},workflow:"none",precisionOpen:!1,map:{available:!1,complete:!0,floorCoherent:!0,sessionVerified:!0,exactPose:!1}}),i&&await this.#ye(i,a)}async selectHistory(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;if(!t){await this.selectFloor("current");return}let n=e.floors.find(a=>a.snapshots.some(l=>l.id===t)),o=n?.snapshots.find(a=>a.id===t);if(!n||!o)return;this.#O();let i=this.#t.begin(s.entryId,n.id,o.id,o.revision);this.#U(["catalog"]),this.#e.patch({generation:i.generation,dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ke(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:o.id},resources:{...this.#e.value.resources,scene:p("loading",null),pose:p("idle",null)},map:{...this.#e.value.map,available:!1,exactPose:!1}}),await this.#ye(o,i)}async#ye(t,e){if(!this.#s.active)return;let s=this.#A("history-scene");try{let n=await this.#o.scene(t.sceneUrl,t.revision,!0,"history",s.signal);if(!this.#t.accepts(e)||!n.scene)return;this.#e.patch({resources:{...this.#e.value.resources,scene:p("ready",n.scene)},map:{...this.#e.value.map,available:!0,exactPose:!1}})}catch(n){if(z(n)||!this.#t.accepts(e))return;this.#e.patch({resources:{...this.#e.value.resources,scene:p("error",null,K(n,"history-scene-unavailable"))}})}finally{this.#P("history-scene",s)}}async openWorkflow(t){let e=this.#e.value;if((e.dataMode==="history"||e.floor.readOnly)&&Us.includes(t))return;let s=this.#e.value.workflow;if(t==="draw"&&s!=="draw"&&s!=="areaReview"&&this.selectArea(null),this.#e.dispatch({type:"open-workflow",workflow:t}),Us.includes(t)&&this.#Ee(),t==="history"){let n=this.#e.value.resources.entry,o=this.#t.current();n&&o&&(this.#e.patch({resources:{...this.#e.value.resources,history:p("loading",this.#e.value.resources.history.value)}}),await this.#oe(n,o))}(t==="plans"||t==="plan"||t==="rooms")&&await this.loadPlans(),(t==="draw"||t==="areaReview")&&await this.loadAreas()}async loadPlans({force:t=!1,inPlace:e=!1,onError:s}={}){let n=!e||this.#e.value.resources.plans.status!=="ready";if(!this.#s.active){this.#i.get("plans")?.abort();let l=this.#e.value.resources;return n&&this.#e.patch({resources:{...l,plans:p("idle",l.plans.value)}}),null}let o=this.#e.value.resources.entry;if(!o||!this.#t.current()||!Je(this.#e.value)||!t&&this.#i.has("plans"))return null;let i=F(o),a=this.#A("plans");n&&this.#e.patch({resources:{...this.#e.value.resources,plans:p("loading",this.#e.value.resources.plans.value)}});try{let l=await this.#o.plans(o.plansUrl,a.signal),d=this.#e.value.resources.entry;if(a.signal.aborted||this.#l||!d||F(d)!==i)return null;let c=this.#e.value;if(c.planDraft.dirty||c.workflow==="plan"&&(!c.planDraft.id||c.command==="pending"))return this.#e.patch({resources:{...this.#e.value.resources,plans:p("ready",l)}}),l;let u=c.workflow==="plan"?c.selection.planId:l.selectedPlan||l.plans[0]?.id||null,m=l.plans.find(h=>h.id===u);return this.#e.patch({resources:{...this.#e.value.resources,plans:p("ready",l)},selection:{...this.#e.value.selection,planId:u},planDraft:m?Ge(m):{...this.#e.value.planDraft,id:null,name:"",rooms:[],parkedRooms:[],dirty:!1},...m?{}:{planView:"edit",expandedRoom:null}}),l}catch(l){let d=this.#e.value.resources.entry;if(z(l)||a.signal.aborted||this.#l||!d||F(d)!==i)return null;let c=l instanceof x&&l.code==="map-rechecking"?"map-rechecking":K(l,"plans-unavailable");return n&&this.#e.patch({resources:{...this.#e.value.resources,plans:p("error",this.#e.value.resources.plans.value,c)}}),s?.(),null}finally{this.#P("plans",a)}}selectPlan(t,e=!1){this.#e.patch(At(this.#e.value,t,e))}setPlanEnabled(t){return this.#ie("plan-mutation",I.planSaveFailed,(e,s)=>e.setPlanEnabled(s,t))}#me(){let t=this.#e.value;(t.workflow==="draw"||t.workflow==="areaReview")&&t.resources.areas.status==="idle"&&this.loadAreas()}async loadAreas({reconcileDraft:t=!0}={}){if(!this.#s.active){this.#i.get("areas")?.abort();let o=this.#e.value.resources;return this.#e.patch({resources:{...o,areas:p("idle",o.areas.value)}}),null}let e=this.#e.value.resources.entry;if(!e||!this.#t.current()||!Je(this.#e.value))return null;let s=F(e),n=this.#A("areas");this.#e.patch({resources:{...this.#e.value.resources,areas:p("loading",this.#e.value.resources.areas.value)}});try{let o=await this.#o.areas(e.areasUrl,n.signal),i=this.#e.value.resources.entry;if(n.signal.aborted||this.#l||!i||F(i)!==s)return null;if(o.sceneUrl!==i.sceneUrl)throw new x("areas-unavailable");this.#e.patch({resources:{...this.#e.value.resources,areas:p("ready",o)}});let a=this.#e.value.selection.areaId,l=this.#e.value,d=o.areas.some(c=>c.id===a);return t&&a!==null&&!d&&(l.draw.dirty||l.areaDraft.dirty)?this.#e.patch({selection:{...l.selection,areaId:null},areaDraft:{...l.areaDraft,id:null,status:"new",canRebind:!1,dirty:!0},notice:I.areaRemoved}):t&&!l.draw.dirty&&!l.areaDraft.dirty&&this.selectArea(d?a:null),o}catch(o){let i=this.#e.value.resources.entry;return z(o)||n.signal.aborted||this.#l||!i||F(i)!==s||this.#e.patch({resources:{...this.#e.value.resources,areas:p("error",this.#e.value.resources.areas.value,K(o,"areas-unavailable"))}}),null}finally{this.#P("areas",n)}}selectArea(t){let e=this.#e.value.resources.areas.value?.areas.find(n=>n.id===t),s=this.#e.value;this.#e.patch({selection:{...s.selection,areaId:t},areaDraft:e?this.#Re(e):{id:null,name:"",cleaningMode:"vacuum",coverageSetting:"standard",status:"new",canRebind:!1,dirty:!1},draw:{...s.draw,circles:e?.circles||[],outline:e?.outline??null,outlineUndo:[],outlineRedo:[],tool:!e||e.outline?"outline":"paint",undo:[],redo:[],dirty:!1,strokeCount:0}})}#Re(t){return{id:t.id,name:t.name,cleaningMode:t.cleaningMode,coverageSetting:t.coverageSetting,status:t.status,canRebind:t.canRebind,dirty:!1}}saveArea(t){return this.#ie("area-mutation",I.areaSaveFailed,(e,s)=>e.saveArea(s),t)}deleteArea(){return this.#ie("area-mutation",I.areaDeleteFailed,(t,e)=>t.deleteArea(e))}savePlan(t){return this.#ie("plan-mutation",I.planSaveFailed,(e,s)=>e.savePlan(s),t)}deletePlan(){return this.#ie("plan-mutation",I.planDeleteFailed,(t,e)=>t.deletePlan(e))}#Ee(){return this.#ce??=import("./catalog-writes-JM26FQRO.js").catch(()=>null)}async#ie(t,e,s,n){let o=n,i=d=>{let c=o;o=void 0,c?.(d)},a=this.#e.value;if(a.command==="pending"||this.#i.has(t))return i(!1);let l=this.#A(t);l.signal.addEventListener("abort",()=>i(!1),{once:!0});try{let d=await this.#Ee(),c=this.#e.value;if(l.signal.aborted||!Qe(c)||c.command==="pending")return;if(!d){this.#e.patch({notice:e});return}await s(d,{state:a,signal:l.signal,store:this.#e,backend:this.#o,effects:this,helpers:_n,failure:e,projection:()=>this.#n,disposed:()=>this.#l,release:()=>this.#P(t,l),settled:i})}finally{this.#P(t,l),i(!1)}}async executeAction(t,e){switch(typeof t=="string"?t:t.id){case"recheck-status":{if(this.#e.value.rechecking)return;let n=this.#e.value.selection.entryId;this.#e.patch({rechecking:!0});try{await this.refreshCatalog(!0)}finally{this.#l||this.#e.patch({rechecking:!1})}let o=this.#e.value;!this.#l&&o.selection.entryId===n&&o.resources.catalog.status==="ready"&&o.host.connected&&o.host.robotConnected&&o.coherence==="current"&&o.command==="failed"&&this.#e.patch({command:"idle",notice:I.statusRefreshed});return}case"stop":await this.#re("matic_robot","stop_intelligent_cleaning",{include_unmanaged:!0});return;case"resume":await this.#re("vacuum","send_command",{command:"resume"});return;case"run-plan":{let n=this.#e.value,o=n.selection.planId||n.resources.plans.value?.selectedPlan;if(!o||n.workflow!=="plan"||!n.planDraft.enabled||n.resources.plans.status!=="ready"||n.command!=="idle"||!Se(n))return;let i=n.selection.entryId,a=n.generation,l=n.selection.planId,d=n.planDraft,c=n.resources.plans.value?.plans.find(v=>v.id===o)?.nextRunPreview;if(!c||!/^[0-9a-f]{64}$/u.test(c.previewToken??"")){this.#e.patch({notice:I.planPreviewMissing});return}this.#e.patch({command:"pending",pendingAction:"run-plan",notice:null});let u=this.#A("plan-preflight"),m;try{m=await this.loadPlans({force:!0,inPlace:!0})}finally{this.#P("plan-preflight",u)}let h=this.#e.value,f=()=>{let v=this.#e.value;!this.#l&&v.selection.entryId===i&&v.generation===a&&v.command==="pending"&&this.#e.patch({command:"idle"})};if(u.signal.aborted||this.#l||h.selection.entryId!==i||h.generation!==a||h.workflow!=="plan"||h.selection.planId!==l||(h.selection.planId||h.resources.plans.value?.selectedPlan)!==o||h.planDraft!==d){f();return}if(!m){f(),this.#e.patch({notice:I.planPreviewRefreshFailed});return}let y=m.plans.find(v=>v.id===o)?.nextRunPreview;if(!y||y.blocker||!/^[0-9a-f]{64}$/u.test(y.previewToken??"")){f(),this.#e.patch({notice:I.planPreviewNone});return}if(!c||JSON.stringify(c)!==JSON.stringify(y)){f(),this.#e.patch({notice:I.planPreviewChanged});return}f(),await this.#re("matic_robot","run_selected_plan",{plan:o,preview_token:y.previewToken});return}case"clean-rooms":{await this.#Ce();return}case"run-area":{let n=this.#e.value.selection.areaId;n&&await this.#re("matic_robot","clean_area",{area:n});return}case"review-area":this.#e.dispatch({type:"open-workflow",workflow:"areaReview"});return;case"save-area":await this.saveArea(e);return;case"save-plan":this.#e.value.planDraft.id&&!this.#e.value.planDraft.dirty?(this.#e.dispatch({type:"set-plan-view",view:"run"}),e?.(!0)):await this.savePlan(e);return;case"delete-plan":await this.deletePlan();return;case"delete-area":await this.deleteArea();return;case"reset-room-cadence":if(typeof t=="string")return;await this.#ie("plan-mutation",t.mode==="mop"?I.resetMopFailed:I.resetVacuumFailed,(n,o)=>n.resetRoomCadence(o,t));return}}async#Ce(){if(this.#V)return;let t=this.#e.value,e=this.#X(t),s=Xe(t);if(!e||!s||s.key!==e.key||s.generation!==e.generation||s.floorKey!==e.floorKey||s.missionKey!==e.missionKey||s.preview.entryId!==e.entryId||s.preview.blocker||s.preview.rooms.length===0)return;this.#V=!0;let n=this.#A("room-preview");this.#L=this.#F(e),this.#e.patch({manualRoomPreview:p("loading",null),notice:null});try{let o=await this.#o.previewRoomSequence(e.entityId,e.rooms,e.overrideRoomSchedule,n.signal);if(n.signal.aborted||!this.#M(e)||o.entryId!==e.entryId)return;let i={key:e.key,generation:e.generation,floorKey:e.floorKey,missionKey:e.missionKey,preview:o};if(o.blocker||o.rooms.length===0){this.#e.patch({manualRoomPreview:p("ready",i),notice:I.roomPreviewBlocked});return}if(js(s.preview)!==js(o)){this.#e.patch({manualRoomPreview:p("ready",i),notice:I.roomPreviewChanged});return}if(this.#e.patch({manualRoomPreview:p("ready",i),notice:null}),!this.#M(e)||!Se(this.#e.value))return;await this.#re("matic_robot","clean_room_sequence",{rooms:e.rooms,use_room_schedule:!0,override_room_schedule:e.overrideRoomSchedule,return_to_base:!0,preview_token:o.previewToken})}catch(o){!z(o)&&!n.signal.aborted&&this.#M(e)&&this.#e.patch({manualRoomPreview:p("error",null,K(o,"preview-unavailable")),notice:I.roomPreviewFailed})}finally{this.#P("room-preview",n),this.#V=!1,this.#ue()}}async#re(t,e,s){let n=this.#e.value,o=this.#n?.vacuumEntityId,i=e==="stop_intelligent_cleaning"||t==="vacuum"&&e==="return_to_base",a=t==="vacuum"&&e==="send_command"&&s.command==="resume";if(!o||n.selection.entryId!==this.#n?.entryKey||(i?!Lt(n):a?!Ot(n):!Se(n)))return;let l=++this.#k,d=this.#n?.entryKey,c=()=>!this.#l&&l===this.#k&&d===this.#n?.entryKey,u=i?"settling":"starting";this.#d!==null&&window.clearTimeout(this.#d),this.#d=null,this.#e.patch({command:u,notice:null});try{if(await this.#o.service(t,e,s,o),!c())return;if(t==="matic_robot"&&(e==="clean_room_sequence"||e==="run_selected_plan")){this.#e.patch({command:"idle"}),this.refreshCatalog(!0);return}this.#e.patch({command:u}),this.#d!==null&&window.clearTimeout(this.#d),this.#d=window.setTimeout(()=>{this.#d=null,c()&&this.#e.value.command===u&&this.#e.patch({command:"idle"})},15e3)}catch(m){if(!c())return;this.#e.patch({command:"failed",notice:i?I.stopUnconfirmed:Sn(m)??I.actionUnconfirmed})}}dispose(){this.#l||(this.#l=!0,this.#s.dispose(),this.#N(!1),this.#D?.(),this.#D=null,this.#e.patch({manualRoomPreview:p("idle",null),rechecking:!1}),this.#Y(),this.#U(),this.#d!==null&&window.clearTimeout(this.#d),this.#d=null,this.#r.dispose(),this.#ge(),this.#o.dispose())}#ge(){this.#R?.dispose(),this.#R=null,this.#I=null,this.#_=null}};var Cn=r=>r.workflow==="none"?0:r.workflow!=="plan"?1:r.planView==="edit"&&r.planDraft.id!==null?3:2,vt=r=>Cn(r)+(r.fullMap?1:0)+(r.precisionOpen?1:0)+(r.dialog?1:0),Ve=r=>{if(!r||typeof r!="object")return null;let t=r.maticMapLayer;if(!t||typeof t!="object")return null;let e=t.owner,s=t.depth;return typeof e=="string"&&Number.isInteger(s)&&Number(s)>=0?{owner:e,depth:Number(s)}:null},je=class{#e;#t=`matic-map-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}`;#o=0;#s=0;#r=!1;#a=null;#i=!1;constructor(t){this.#e=t}start(){if(this.#a)return;this.#o=vt(this.#e.value);let t=Ve(history.state);this.#s=t?.owner===this.#t?t.depth:0,this.#a=this.#e.subscribe(e=>this.#n(e)),window.addEventListener("popstate",this.#u)}#n(t){let e=vt(t);if(this.#i){this.#i=!1,this.#o=e;return}if(e<this.#o&&Ve(history.state)?.owner===this.#t&&this.#s>e){let n=e-this.#s;this.#o=e,this.#s=e,this.#r||(history.go(n),this.#r=!0);return}if(e>this.#s)for(let s=this.#s+1;s<=e;s+=1){let n=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...n,maticMapLayer:{owner:this.#t,depth:s}},"",window.location.href),this.#s=s}this.#o=e}#u=()=>{let t=Ve(history.state);this.#r=!1,this.#s=t?.owner===this.#t?t.depth:0;let e=vt(this.#e.value);if(this.#s>e){let s=e-this.#s;this.#s=e,history.go(s),this.#r=!0;return}if(this.#e.value.dialog==="discardDraft"&&this.#e.value.command==="pending"){let s=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...s,maticMapLayer:{owner:this.#t,depth:this.#o}},"",window.location.href),this.#s=this.#o;return}if(!(e<=this.#s)){if(ne(this.#e.value,{type:"dismiss-top-layer"})){let s=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...s,maticMapLayer:{owner:this.#t,depth:this.#o}},"",window.location.href),this.#s=this.#o,this.#e.dispatch({type:"open-dialog",dialog:"discardDraft"});return}this.#i=!0,this.#e.dispatch({type:"dismiss-top-layer"})}};dismissTop(){return this.#o<1?!1:this.#r?(this.#e.dispatch({type:"dismiss-top-layer"}),!0):(Ve(history.state)?.owner===this.#t&&this.#s===this.#o?(history.back(),this.#s=this.#o-1,this.#r=!0):this.#e.dispatch({type:"dismiss-top-layer"}),!0)}dispose(){this.#a?.(),this.#a=null,window.removeEventListener("popstate",this.#u),this.#o=0,this.#s=0,this.#r=!1}};var Ys=[Ce,Me,es,Re`
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

    .context-switcher { max-inline-size: 9rem; inline-size: auto; text-overflow: ellipsis; }
    .floor-switcher { appearance: none; block-size: 44px; padding-inline-end: 1.8rem; background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%); background-position: calc(100% - 15px) 50%, calc(100% - 10px) 50%; background-size: 5px 5px; background-repeat: no-repeat; }
    .floor-switcher:dir(rtl) { background-position: 10px 50%, 15px 50%; }


    .title {
      overflow: hidden;
      min-inline-size: 0;
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
    .overflow-field { padding: var(--ms-space-2) var(--ms-space-3) var(--ms-space-1); }

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

    .quick-actions, .shelf { display: grid; gap: var(--ms-space-2); }
    .quick-actions .ms-row__body small { color: var(--ms-text-quiet); }

    .quick-actions .ms-row--featured .ms-row__body small { color: color-mix(in srgb, var(--ms-text-quiet) 70%, var(--ms-text)); }
    .quick-actions .ms-row[aria-disabled="true"] .ms-row__lead { color: var(--ms-text-disabled); background: color-mix(in srgb, var(--ms-text) 6%, var(--ms-local)); }
    .quick-actions .ms-row[aria-disabled="true"] .ms-row__body strong { color: var(--ms-text-disabled); }
    .shelf-heading { margin: var(--ms-space-5) 0 var(--ms-space-2); color: var(--ms-text-quiet); font-size: var(--ms-t-sm); font-weight: var(--ms-w-bold); }
    .host-state, .problem { display: grid; gap: var(--ms-space-2); padding: var(--ms-space-4); border: 1px solid var(--ms-line); border-radius: var(--ms-radius-md); }
    .host-state h3 { margin: 0; font-size: var(--ms-t-md); }
    .host-state p, .problem p, .loading { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-sm); line-height: var(--ms-lh-normal); }
    .host-state .ms-btn, .problem .ms-btn { justify-self: start; text-decoration: none; }
    .map-display { display: grid; gap: var(--ms-space-2); }
    .map-display .ms-segment { --ms-local: var(--ms-surface-sunken); border: 1px solid var(--ms-line); border-radius: var(--ms-radius-md); background: var(--ms-local); }
    .map-display .ms-segment .ms-btn { flex: 1; }
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
    .dialog dl { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: var(--ms-space-2) var(--ms-space-3); margin: var(--ms-space-3) 0 var(--ms-space-4); font-size: var(--ms-t-sm); }
    .dialog dt { font-weight: var(--ms-w-bold); }
    .dialog dd { margin: 0; color: var(--ms-text-quiet); }
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
    .narrow .mobile-sheet.dragging { transition: none; }
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
      .dialog, .full-map-hud, .mobile-sheet, .host-state, .problem, .notice { border: 1px solid CanvasText; }
      .sheet-handle { background: CanvasText; }
    }

    @media (prefers-reduced-motion: reduce) {
      .narrow .mobile-sheet { transition: none; }
    }
  `];var Xs=oe(Pe),Ye=oe(zt),Gs=oe(Ze),Zs=r=>r.dataMode==="history"||r.floor.readOnly,yt=(r,t)=>{let e=(a,l,d)=>Te(t,a,l,d);if(!r.host.connected)return{title:e("v4_reconnecting","Reconnecting"),detail:e("v4_ha_offline","Home Assistant is offline"),icon:j,notable:!0};if(!r.host.administrator)return{title:e("v4_access_required","Access required"),detail:e("v4_admin_only","Administrator only"),icon:j,notable:!0};if(r.host.robotCount===0)return{title:e("v4_no_robot_short","No robot"),detail:e("v4_set_up_robot","Set up a robot"),icon:j,notable:!0};if(ke(r))return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),detail:e("v4_choose_another_robot","Choose another robot to open its map."),icon:j,notable:!0};if(!r.host.robotConnected)return{title:e("v4_robot_offline","Robot offline"),detail:e("v4_last_map_read_only","Last known map \xB7 read only"),icon:j,notable:!0};if(r.activity==="problem")return{title:e("v4_needs_attention","Needs attention"),detail:e("v4_check_robot","Check the robot"),icon:j,notable:!0};if(r.dataMode==="history"){let a=r.resources.history.value?.floors.find(c=>c.id===r.selection.floorId),l=a?.snapshots.findIndex(c=>c.id===r.selection.historyId)??-1,d=a?.snapshots.length??0;return{title:e("v4_saved_map","Saved map"),detail:l>=0?e("v4_read_only_position","Read only \xB7 {position} of {count}",{position:l+1,count:d}):e("v4_read_only","Read only"),icon:nt,notable:!1}}if(r.coherence==="verifying"||r.coherence==="booting")return{title:e("v4_locating","Locating"),detail:e("v4_finding_map","Finding the current map"),icon:ae,notable:!0};if((r.resources.entry?.activePlan||r.resources.entry?.runnerLocked)&&(r.activity==="idle"||r.activity==="docked"))return{title:e("v4_task_in_progress","Run in progress"),detail:r.coherence==="unavailable"||r.coherence==="blocked"?e("v4_task_map_unavailable","The live map is unavailable; the current clean continues."):r.activity==="docked"?e("v4_task_docked","Robot docked; the clean has not finished."):e("v4_task_waiting","Waiting for the clean to continue or finish."),icon:ot,notable:!0};if(r.command==="starting"&&(r.activity==="idle"||r.activity==="docked"))return{title:e("v4_action_starting","Starting"),detail:e("v4_action_starting_detail","Waiting for the robot to begin"),icon:ae,notable:!0};let s=r.coherence==="unavailable"||r.coherence==="blocked",n=e("v4_active_map_unavailable","The live map is unavailable; new cleaning is disabled."),o=a=>s?`${a} \xB7 ${n}`:a;if(r.activity==="cleaning")return{title:e("v4_cleaning","Cleaning"),detail:o(e("v4_cleaning_progress","Cleaning in progress")),icon:rt,notable:!0};if(r.activity==="recharging"){let a=r.batteryPercent===null?e("v4_recharging_detail","Will resume automatically when ready"):e("v4_recharging_battery","Charging to resume \xB7 {percent}% battery",{percent:r.batteryPercent});return{title:e("v4_recharging","Charging to resume"),detail:o(a),icon:as,notable:!0}}if(r.activity==="paused")return{title:e("v4_paused","Paused"),detail:o(e("v4_can_resume","Cleaning can resume")),icon:at,notable:!0};if(r.activity==="returning")return{title:e("v4_returning","Returning"),detail:o(e("v4_going_dock","Going to the dock")),icon:rt,notable:!0};if(r.activity==="stopping")return{title:e("v4_stopping","Stopping"),detail:o(e("v4_waiting_robot","Waiting for the robot")),icon:at,notable:!0};if(s)return{title:e("v4_map_unavailable","Map unavailable"),detail:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start."),icon:j,notable:!0};if(r.coherence==="degraded")return{title:e("v4_map_limited","Map limited"),detail:r.rechecking?e("v4_locating_rechecking","Checking again"):e("v4_cleaning_blocked","Cleaning can't start"),icon:ae,notable:!0,recheck:!0};let i=r.batteryPercent===null?e("v4_ready","Ready"):e("v4_battery","{percent}% battery",{percent:r.batteryPercent});return{title:r.activity==="docked"?e("v4_docked","Docked"):e("v4_ready","Ready"),detail:i,icon:ae,notable:!1}},gt=(r,t)=>{let e=(s,n)=>Te(t,s,n);switch(r.workflow){case"rooms":return{title:e("v4_choose_rooms","Choose rooms"),description:e("v4_choose_rooms_detail","Choose rooms on the map or in the list.")};case"draw":return{title:e("v4_draw_area","Draw an area"),description:e("v4_draw_area_detail","Outline or paint the area, then review it before saving.")};case"plans":return{title:e("v4_your_plans","Your plans"),description:r.resources.plans.value?.plans.length===0?"":e("v4_choose_plan_detail","Tap a plan to see its next run.")};case"plan":return{title:r.planView==="run"?r.planDraft.name:r.planDraft.id?e("v4_edit_plan","Edit plan"):e("v4_new_plan","New plan"),description:""};case"areaReview":return{title:e("v4_name_this_area","Name this area"),description:e("area_details_hint","Name the area and choose cleaning settings.")};case"history":return{title:e("v4_map_history","Map history"),description:e("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")};case"support":return{title:e("v4_map_diagnostics","Map diagnostics"),description:e("v4_map_support_detail","Details to share with support")};case"none":return Zs(r)?{title:e("v4_saved_map_read_only_title","Saved map is read only"),description:r.dataMode==="live"?e("v4_map_recovery_automatic","Cleaning controls return automatically when the live map is ready."):e("v4_saved_map_read_only_detail","Return to the live map to choose rooms, run a plan, or draw a custom area.")}:{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_clean_detail","Choose rooms, a saved plan, or a custom area.")}}},X=["peek","half","full"],Mn={info:it,success:cs,warning:ds,error:us},Pn={info:6e3,success:4e3,warning:6e3,error:1e4},xn={none:"half",rooms:"half",draw:"peek",plan:"half",plans:"half",areaReview:"half",history:"half",support:"full"},Qs=r=>r.workflow==="plan"&&r.planView==="edit"?"full":xn[r.workflow],An=.5,Tn=100,In=6,$n=48,wt=".panel-top, .sheet-body, .workflow-body",On=["a[href]","button","input","label","select","textarea","summary",'[contenteditable]:not([contenteditable="false"])','[role="button"]','[role="link"]','[role="slider"]','[role="checkbox"]','[role="radio"]','[role="switch"]','[role="tab"]','[role="menuitem"]',`[tabindex]:not([tabindex="-1"]):not(${wt})`].join(","),en=["button:not(:disabled)","a[href]","input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)","[tabindex]:not([tabindex='-1'])"].join(", "),tn=r=>!!r.querySelector(en)||[...r.querySelectorAll("*")].some(t=>t.shadowRoot!==null&&tn(t.shadowRoot)),Js=(r=document)=>{let t=r.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t},bt=r=>!!(r&&r.isConnected&&r.offsetParent!==null),_t=class extends Ee{constructor(){super();this.state=V();this._measuredNarrow=!1;this._sheetOffset=0;this._overflowOpen=!1;this._helpOpen=!1;this._browserFullscreen=!1;this._sheetDetent="half";this._polite="";this._alert="";this.#t=null;this.#o=new Set;this._toast=null;this.#s=new lt(this,()=>import("./workflow-panel-WWBXBAN6.js"));this.#r=new lt(this,async()=>new(await import("./outline-editor-J3AUI2NG.js")).OutlineEditor({edgeDistance:Bt,validOutline:Ht}));this.#a=ms();this.#n=0;this.#u=0;this.#v=!1;this.#d=!1;this.#k=null;this.#w=null;this.#y=null;this.#p=null;this.#c=null;this.#g=null;this.#b=null;this.#x=null;this.#S=null;this.#f=null;this.#h=null;this.#C=null;this.#W=new Set;this.#T=null;this.#l=null;this.#R=()=>{this._browserFullscreen=this.#I()};this.#_=e=>{if(!this._overflowOpen)return;let s=this.renderRoot.querySelector(".overflow-wrap");(!s||!e.composedPath().includes(s))&&(this._overflowOpen=!1)};this.#q=()=>{this.#ce(),this.#v=!1,this.#d=!1,this._toast=null};this.#H=e=>{e.type==="pointerenter"?this.#v=!0:this.#d=!0,this.#i!==void 0&&(this.#ce(),this.#u=Math.max(0,this.#n-Date.now()))};this.#de=e=>{e.type==="pointerleave"?this.#v=!1:e.currentTarget.contains(e.relatedTarget)||(this.#d=!1),this.#V()};this.#E=()=>{this.#q(),this.updateComplete.then(()=>this.#M())};this.#j=()=>{this.#m({type:"set-notice",notice:null}),this.updateComplete.then(()=>this.#M())};this.#F=()=>{for(let e of this.renderRoot.querySelectorAll(wt)){let s=e.scrollHeight>e.clientHeight&&!tn(e);if(!s&&e.matches(":focus")){e.addEventListener("blur",this.#F,{once:!0});continue}let n=(o,i)=>s?e.setAttribute(o,i):e.removeAttribute(o);n("tabindex","0"),e.classList.contains("panel-top")&&(n("role","group"),n("aria-labelledby","workspace-title"))}};this.#$=e=>{if(!ne(this.state,{type:"open-workflow",workflow:"none"})){Ie(this.state.workflow);return}this.#b=e.currentTarget,this.#f="reload",this.#m({type:"open-dialog",dialog:"discardDraft"})};this.#xe=(e,s,n)=>this.#e(e,s,n);new vs(this,{container:()=>this.renderRoot?.querySelector(".draw-tools")??null,items:"button"})}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_measuredNarrow:{state:!0},_sheetOffset:{state:!0},_overflowOpen:{state:!0},_helpOpen:{state:!0},_browserFullscreen:{state:!0},_sheetDetent:{state:!0},_polite:{state:!0},_alert:{state:!0},_toast:{state:!0}}}static{this.styles=Ys}#e(e,s,n){return Te(this.localize,e,s,n,this.dates)}#t;#o;#s;#r;#a;#i;#n;#u;#v;#d;#k;#w;#y;#p;#c;#g;#b;#x;#S;#f;#h;#C;#W;#T;#l;#B(){let e=this.renderRoot;return e instanceof ShadowRoot?e.fullscreenElement??document.fullscreenElement:document.fullscreenElement}#R;#I(){let e=this.renderRoot,s=e.querySelector(".app"),n=e instanceof ShadowRoot?e.fullscreenElement:null;if(n)return n===s;let o=document.fullscreenElement;for(let i=this;i;){if(i===o)return!0;let a=i.getRootNode();i=a instanceof ShadowRoot?a.host:null}return!1}#_;connectedCallback(){super.connectedCallback(),this.#w=new ResizeObserver(([e])=>{if(!e)return;let s=e.contentRect.width<1024||e.contentRect.height<480;s!==this._measuredNarrow&&(this._measuredNarrow=s)}),this.#w.observe(this),window.addEventListener("pointerdown",this.#_,!0),document.addEventListener("fullscreenchange",this.#R),this.#y=new ResizeObserver(([e])=>{if(!e)return;let s=Math.ceil(e.target.getBoundingClientRect().height);s!==this._sheetOffset&&(this._sheetOffset=s)}),this.#p=new ResizeObserver(()=>this.#F()),this.#D(),this.#c=ws(()=>this.#D())}#D(){let e=window.matchMedia("(forced-colors: active)").matches,s=gs(this.renderRoot,{accent:"var(--ms-accent)",danger:"var(--ms-danger)",label:"var(--ms-on-accent)",card:"var(--ms-surface-card)",sunken:"var(--ms-surface-sunken)"}),[n,o,i,a,l]=Object.values(s).map(bs),d=v=>e||!v||!i?[]:_s(v,i),c=(v,w,k=a)=>e||!v||!a||!k?void 0:ks(v,w,[a,k]),u=v=>v?ys(v,1):"",[m,h]=d(n),[f,y]=d(o);this.style.setProperty("--ms-resolved-accent-fill",u(m)),this.style.setProperty("--ms-resolved-on-accent-fill",u(h)),this.style.setProperty("--ms-resolved-danger-fill",u(f)),this.style.setProperty("--ms-resolved-on-danger-fill",u(y)),this.style.setProperty("--ms-resolved-indicator",u(c(n,3,l))),this.style.setProperty("--ms-resolved-danger-text",u(c(o,4.5)))}disconnectedCallback(){this.#q(),this.#w?.disconnect(),this.#w=null,this.#y?.disconnect(),this.#y=null,this.#p?.disconnect(),this.#p=null,this.#c?.(),this.#c=null,this.#g=null,window.removeEventListener("pointerdown",this.#_,!0),document.removeEventListener("fullscreenchange",this.#R),super.disconnectedCallback()}#L(e,s){if(this.#o.has(e)){this.updateComplete.then(()=>this.#L(e,s));return}this.#o.add(e);let n=this[e]===s;this[e]=n?"":s,this.updateComplete.then(()=>{this.#o.delete(e),n&&!this[e]&&this.#L(e,s)})}willUpdate(e){if(this.#k=this.shadowRoot?.activeElement??null,!e.has("state"))return;let s=yt(this.state).title;this.#t!==null&&s!==this.#t&&this.#L("_polite",yt(this.state,this.localize).title),this.#t=s;let n=this.state.notice,o=e.get("state");n!==o?.notice&&(!n&&o?.notice?.tone==="success"&&o.workflow!==this.state.workflow||(this.#q(),n&&(this._toast=n,this.#u=Pn[n.tone],this.#L(n.tone==="error"?"_alert":"_polite",this.#e(n.key,n.fallback,n.placeholders)),this.updateComplete.then(()=>{if(this.state.notice!==n)return;let i=this.renderRoot.querySelector("[data-notice-toast]");this.#v=!!i?.matches(":hover"),this.#d=!!i?.contains(this.shadowRoot?.activeElement??null),this.#V()}))))}#V(){!this._toast||this.#i!==void 0||this.#v||this.#d||(this.#n=Date.now()+this.#u,this.#i=setTimeout(this.#q,this.#u))}#ce(){clearTimeout(this.#i),this.#i=void 0}#q;#H;#de;#E;#j;#X(e,s,n){return _`${D(Mn[e.tone])}<span class="notice-text">${this.#e(e.key,e.fallback,e.placeholders)}</span><button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${n}
      @click=${s}
    >${D(ls)}</button>`}updated(e){let s=e,n=this.#k;this.#k=null,n&&(!n.isConnected||n.closest("[hidden]"))&&this.#M();let o=this.renderRoot.querySelector(".mobile-sheet");o!==this.#g&&(this.#y?.disconnect(),this.#g=o,o?this.#y?.observe(o):this._sheetOffset!==0&&(this._sheetOffset=0)),this.#p?.disconnect();for(let i of this.renderRoot.querySelectorAll(wt))for(let a of[i,...i.children])this.#p?.observe(a);if(s.has("_overflowOpen")&&this._overflowOpen&&this.updateComplete.then(()=>{this.renderRoot.querySelector("#map-options select, #map-options button")?.focus()}),s.has("_helpOpen")){if(this._helpOpen)this.updateComplete.then(()=>{this.renderRoot.querySelector(".help-dialog [data-dialog-initial-focus]")?.focus()});else if(s.get("_helpOpen")){let i=this.#S;this.#S=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>i?.focus({preventScroll:!0}))})}}if(e.has("state")){this.#K();let i=e.get("state");if(i?.precisionOpen&&!this.state.precisionOpen&&this.#ue()?.focus(),i?.fullMap&&!this.state.fullMap){let a=this.#x;this.#x=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??this.renderRoot.querySelector(".nav--menu")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})})}if(i&&!i.fullMap&&this.state.fullMap&&this.updateComplete.then(()=>{let a=this.#x;requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})}),!i?.dialog&&this.state.dialog){this.#C=null,this.state.dialog==="discardDraft"&&!this.#f&&i&&(i.workflow==="plan"?this.#f=i.planDraft.id!==null&&i.planView==="edit"?{type:"set-plan-view",view:"run"}:{type:"open-workflow",workflow:"plans"}:this.#f={type:"dismiss-top-layer"});let a=Js(this.shadowRoot||document);a?.hasAttribute("data-dialog-launcher")&&(this.#b=a),this.updateComplete.then(()=>{(this.renderRoot.querySelector(".dialog [data-dialog-initial-focus]")??this.renderRoot.querySelector(".dialog button"))?.focus()})}else if(i?.dialog&&!this.state.dialog){if(i.dialog==="discardDraft"){this.#h||(this.#f=null),this.#le();let l=this.#C;this.#C=null,this.#Y(l)}let a=this.#b?.isConnected&&this.#b.hasAttribute("data-dialog-launcher")?this.#b:this.#re(i.dialog);this.#b=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{let l=Js(document),d=l;for(;d&&d!==this;){let u=d.getRootNode();d=u instanceof ShadowRoot?u.host:null}if(l&&l!==document.body&&d!==this)return;a?.focus({preventScroll:!0});let c=!document.activeElement||document.activeElement===document.body;!this.shadowRoot?.activeElement&&c&&this.#M()})})}if(!i)this._sheetDetent=Qs(this.state);else if(i.workflow!==this.state.workflow||i.planView!==this.state.planView){this._sheetDetent=Qs(this.state);let a=this.state;this.updateComplete.then(()=>{if(i.workflow!=="plan")return this.#M();requestAnimationFrame(()=>{this.#s.value?.focusPlanTarget(i,a,this.renderRoot,bt)||this.#M()})})}}}#F;#M(){[".panel-heading h2",".action-bar .ms-btn--primary",".workspace-toggle"].map(e=>this.renderRoot.querySelector(e)).find(bt)?.focus({preventScroll:!0})}#ue(){let e=this.renderRoot.querySelector(".draw-brush");return bt(e)?e:this.renderRoot.querySelector(Pe)?.shadowRoot?.querySelector(".draw-brush")??null}#m(e){if(ne(this.state,e)){this.#f=e,this.#m({type:"open-dialog",dialog:"discardDraft"});return}this.#z(e)}#z(e){this.dispatchEvent(new CustomEvent(Ss,{detail:e,bubbles:!0,composed:!0}))}#J(e){if(e.enabled){if(e.id==="return-live"){this.#m({type:"set-history",historyId:null});return}if(e.id==="clear-draft"){this.#m({type:"clear-draft"});return}this.#ee(e.id)}}#Z(e,s){this.#N({type:"open-workflow",workflow:e},s)}#N(e,s){s instanceof HTMLElement&&ne(this.state,e)&&(this.#b=s),this.#m(e)}#K(){let e=this.#a,{coherence:s,workflow:n}=this.state;!e||n==="none"&&(s==="booting"||s==="verifying")||(this.#a=null,n==="none"&&this.#W.has(e)&&this.#Z(e))}#$;#ae(e){if(this.#s.request(),e!=="draw")return this.#s.status;this.#r.request();let s=this.#s.status,n=this.#r.status;return s==="failed"||n==="failed"?"failed":s===n?s:"loading"}#we(){let e=this.#f;if(this.#f=null,e==="reload"){Ie(this.state.workflow);return}e?.type==="select-plan"||e?.type==="select-area"?(this.#m({type:"patch-plan-draft",patch:{dirty:!1}}),this.#m({type:"patch-area-draft",patch:{dirty:!1}}),this.#m({type:"dismiss-top-layer"})):this.#m({type:"discard-draft"}),e&&e.type!=="dismiss-top-layer"&&queueMicrotask(()=>this.#z(e))}#_e(e,s){setTimeout(()=>{if(this.#h!==e)return;this.#h=null,this.requestUpdate();let n=s?this.#f:null;if(this.#f=null,this.state.dialog!=="discardDraft")return this.#Y(n);this.#C=n,this.#G()})}#Y(e){e==="reload"?Ie(this.state.workflow):e&&this.#z(e)}#O(){this.state.command==="pending"||this.#h||(this.#f=null,this.#G(),this.#le())}#le(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".floor-switcher");e&&(e.value=this.state.selection.floorId);let s=this.renderRoot.querySelector(".robot-switcher");s&&(s.value=this.state.selection.entryId??"")})}#G(){let e=this.state.dialog,s=e&&this.#b?.isConnected&&this.#b.hasAttribute("data-dialog-launcher")?this.#b:e?this.#re(e):null;this.#m({type:"dismiss-top-layer"}),s&&requestAnimationFrame(()=>s.focus({preventScroll:!0}))}#ee(e,s){this.dispatchEvent(new CustomEvent(Rs,{detail:typeof e=="string"?{id:e,settled:s}:e,bubbles:!0,composed:!0}))}#ve(e){e.action==="discard"?this.#we():this.#s.value?.confirmDialog(this.state,e.action,s=>this.#m(s),s=>this.#ee(s))}#Q(e){e!==this._sheetDetent&&(this._sheetDetent=e,this.#L("_polite",e==="peek"?this.#e("v4_workspace_height_peek","Cleaning panel, collapsed"):e==="half"?this.#e("v4_workspace_height_half","Cleaning panel, half height"):this.#e("v4_workspace_height_full","Cleaning panel, full height")))}#te(e,s=!1){let o=X.indexOf(this._sheetDetent)+e;s&&o>=X.length&&(o=0),o=Math.max(0,Math.min(X.length-1,o)),this.#Q(X[o]??this._sheetDetent)}#ke(e){let s=this.renderRoot.querySelector(".workspace")?.clientHeight??e.parentElement?.clientHeight??e.offsetHeight,n=parseFloat(getComputedStyle(this).fontSize)||16,o=[".sheet-grip",".sheet-tools",".action-bar"].map(l=>e.querySelector(l)?.offsetHeight??0).reduce((l,d)=>l+d,0)+n*.75,i=Math.min(s*.92,s-n*9),a=Math.min(s*.48,n*26,i);return{peek:Math.min(o,a),half:a,full:i}}#se(){return this.renderRoot.querySelector(".mobile-sheet")}#A(e,s){e.style.transform=s;let n=this.renderRoot.querySelector("[data-notice-toast]");n&&(n.style.transform=s)}#P(e){let s=e.currentTarget;for(let n of e.composedPath()){if(n===s)return!1;if(n instanceof Element&&n.matches(On))return!0}return!1}#U(e){if(e.pointerType==="mouse"&&e.button!==0||this.#P(e))return;let s=this.#se();!s||this.#T||(this.#T={pointerId:e.pointerId,startY:e.clientY,startHeight:s.offsetHeight,heights:this.#ke(s),samples:[{y:e.clientY,t:e.timeStamp}],moved:!1},e.currentTarget.setPointerCapture(e.pointerId),s.classList.add("dragging"))}#Se(e){let s=this.#T;if(!s||e.pointerId!==s.pointerId)return;let n=this.#se();if(!n)return;let o=e.clientY-s.startY;for(!s.moved&&Math.abs(o)>In&&(s.moved=!0),s.samples.push({y:e.clientY,t:e.timeStamp});s.samples.length>2&&e.timeStamp-(s.samples[1]?.t??0)>Tn;)s.samples.shift();if(!s.moved)return;let i=s.startHeight-s.heights.full,a=s.startHeight-s.heights.peek,l=Math.max(i,Math.min(a,o));this.#A(n,`translateY(${l}px)`)}#ne(e){let s=this.#T;if(!s||e.pointerId!==s.pointerId)return;this.#T=null;let n=this.#se();if(n&&(this.#A(n,""),n.classList.remove("dragging")),e.type==="pointercancel")return;if(!s.moved){this.#te(1,!0);return}let o=e.clientY-s.startY,i=X.indexOf(this._sheetDetent),a=s.samples[0],l=s.samples[s.samples.length-1],d=a&&l&&l!==a?(l.y-a.y)/Math.max(1,l.t-a.t):0;if(Math.abs(d)>An){let h=Math.max(0,Math.min(X.length-1,i+(d<0?1:-1)));this.#Q(X[h]??this._sheetDetent);return}let c=s.startHeight-o,u=this._sheetDetent,m=Number.POSITIVE_INFINITY;for(let h of X){let f=Math.abs(s.heights[h]-c);f<m&&(m=f,u=h)}this.#Q(u)}#Me(e){for(let s of e.composedPath()){if(s===e.currentTarget)break;if(s instanceof HTMLElement&&s.scrollHeight>s.clientHeight&&/auto|scroll/u.test(getComputedStyle(s).overflowY))return s}return null}#he(e){if(e.pointerType==="mouse"||this.#P(e))return;let s=this.#Me(e);this.#l=s?.scrollTop?null:{pointerId:e.pointerId,startY:e.clientY,scroller:s,consumed:!1}}#Pe(e){let s=this.#l;if(!(!s||s.consumed||e.pointerId!==s.pointerId)){if(s.scroller?.scrollTop){this.#l=null;return}e.clientY-s.startY<$n||(s.consumed=!0,this.#te(-1))}}#oe(){this.#l=null}#pe(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}#ye(e){this.#x=e.currentTarget,this.#m({type:this.state.fullMap?"exit-full-map":"enter-full-map"})}#me(e){this._overflowOpen=!1,e&&this.updateComplete.then(()=>{this.renderRoot.querySelector(".overflow")?.focus()})}#Re(e){if(this.#me(e==="fullscreen"),e==="support"){this.#Z("support");return}let s=this.renderRoot.querySelector(".app");this.#B()?document.exitFullscreen():s?.requestFullscreen()}#Ee(){this.#m({type:"set-precision-open",value:!this.state.precisionOpen})}#ie(e){this.#S=e.currentTarget,this._helpOpen=!0}#Ce(e){let s=this.#s.value?.dialogLauncher(e,this.state,n=>this.#m(n));s&&(this.#b=s)}#re(e){if(e==="confirmDeletePlan"){let o=this.renderRoot.querySelector(Nt)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`);if(o)return o}return this.renderRoot.querySelector(Ze)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`)??null}#ge(e){if(!fs(e)&&!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)&&e.key==="Escape"){if(e.preventDefault(),this._overflowOpen){this.#me(!0);return}if(this._helpOpen){this._helpOpen=!1;return}if(this.state.dialog==="discardDraft"){this.#O();return}this.#m({type:"dismiss-top-layer"})}}#Ie(e){if(e.key!=="Tab")return;let n=[...e.currentTarget.querySelectorAll(en)],o=n[0],i=n.at(-1);if(!o||!i)return;let a=this.shadowRoot?.activeElement;e.shiftKey&&a===o?(e.preventDefault(),i.focus()):!e.shiftKey&&a===i&&(e.preventDefault(),o.focus())}#qe(){let e=this.renderRoot.querySelector(Pe);(e?.shadowRoot?.querySelector(".map-root")??e)?.focus()}#ze(){this._sheetDetent==="peek"&&this.#se()&&this.#Q("half"),this.updateComplete.then(()=>this.#M())}#be(e,s,n){if(!("label"in e))return g;let o=e.labelKey?this.#e(e.labelKey,e.label,e.labelPlaceholders):e.label,i=!e.enabled&&e.reason?e.reasonKey?this.#s.value?.actionReason(this.#xe,e,n==="primary-reason",a=>this.#m(a))??this.#e(e.reasonKey,e.reason,e.reasonPlaceholders):e.reason:null;return _`
      <button
        class=${`${s} ${e.kind==="danger"?"ms-btn--danger":""}`}
        type="button"
        aria-disabled=${e.enabled?g:"true"}
        aria-describedby=${i?n:g}
        aria-label=${e.id==="stop"?this.#e("v4_stop_cleaning_label","Stop cleaning"):e.id==="run-plan"?this.#e("v4_action_run_plan_named","Run plan {plan}",{plan:this.state.planDraft.name}):g}
        @click=${()=>this.#J(e)}
      >${o}</button>
      ${i?_`<p class="action-reason" id=${n}>${i}</p>`:g}
    `}#xe;#$e(e){let s=e.resources.plans.value?.rooms??e.resources.areas.value?.rooms??[];return ps(e.locale,e.selection.roomIds.map(n=>s.find(o=>o.roomId===n)?.name??n))}#Oe(e,s,n){let o=this.#$e(e),i=s?.enabled&&e.workflow==="rooms"&&s.id==="clean-rooms"?e.planDraft.returnToBase&&o?this.#e("v4_rooms_summary_dock","{rooms} \xB7 returns to the dock",{rooms:o}):o:"",a=e.workflow==="plan"&&e.planView==="edit";return _`
      <div class=${a?"action-bar paired":"action-bar"}>
        ${i?_`<p class="action-summary">${i}</p>`:g}
        ${a?this.#s.value?.planCancel(e,s,this.#xe,(l,d)=>this.#N(l,d)):g}
        ${s?this.#be(s,"ms-btn ms-btn--block ms-btn--lg ms-btn--primary","primary-reason"):g}
        ${n?this.#be(n,"ms-btn ms-btn--block ms-btn--lg ms-btn--secondary","secondary-reason"):g}
      </div>
    `}#fe(e,s,n=g){return _`
      <div class="host-state">
        <h3>${e}</h3>
        <p>${s}</p>
        ${n}
      </div>
    `}#Ae(e,s=!1){return s||this.#W.add(e),()=>{s||this.#Z(e)}}#Te(e,s,n,o,i=!1){return _`
      <button
        class="ms-row"
        type="button"
        aria-disabled=${i?"true":g}
        @click=${this.#Ae(n,i)}
      >
        <span class="ms-row__lead">${D(s)}</span>
        <span class="ms-row__body"><strong>${e}</strong>${o?_`<small>${o}</small>`:g}</span>
        <span class="ms-row__trail">${D(Ae)}</span>
      </button>
    `}#Ne(e){let s=e.resources.history.value?.floors||[],n=s.length?s.map((o,i)=>({id:o.active?"current":o.id,label:`${o.label||(o.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:o.ordinal??i+1}))}${!o.active&&o.snapshots.length===0?` \xB7 ${this.#e("v4_floor_not_captured","No saved map for this floor yet")}`:""}`,disabled:!o.active&&o.snapshots.length===0})):[{id:e.selection.floorId,label:e.floor.displayName,disabled:!1}];return _`
      <select
        class="ms-select context-switcher floor-switcher"
        slot="floor"
        data-map-control
        name="map-floor"
        aria-label=${this.#e("v4_choose_floor","Choose floor")}
        ?disabled=${n.length<=1}
        .value=${e.selection.floorId}
        @change=${o=>this.#m({type:"set-floor",floorId:o.currentTarget.value})}
      >${n.map(o=>_`
        <option value=${o.id} ?selected=${o.id===e.selection.floorId} ?disabled=${o.disabled}>${o.label}</option>
      `)}</select>
    `}#Be(e,s,n){let o=(b,E,M)=>this.#e(b,E,M);this.#W=new Set(["support"]);let i=()=>this.#Te(o("v4_map_history","Map history"),nt,"history",o("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")),a=()=>this.#Te(o("v4_map_diagnostics","Map diagnostics"),it,"support",o("v4_map_support_detail","Details to share with support")),{host:l}=e;if(!l.connected)return this.#fe(o("v4_reconnecting_title","Reconnecting to Home Assistant"),o("v4_reconnecting_body","Cleaning controls come back when Home Assistant reconnects."));if(!l.administrator)return this.#fe(o("v4_admin_title","Administrator access required"),o("v4_admin_body","Ask a Home Assistant administrator to open this map."));if(l.robotCount===0)return this.#fe(o("v4_no_robot_title","No robot set up"),o("v4_no_robot_body","Add the Matic (Unofficial) integration to see a map here."),_`<a class="ms-btn ms-btn--secondary" href="/config/integrations/integration/matic_robot">${o("v4_open_integration","Open integration")}</a>`);if(ke(e))return this.#fe(o("v4_selected_robot_unavailable","Selected robot unavailable"),o("v4_choose_another_robot","Choose another robot to open its map."));if(!l.robotConnected)return _`
        ${this.#fe(o("v4_robot_offline_title","Robot offline"),o("v4_robot_offline_body","Showing the last known map. Cleaning comes back when the robot reconnects."))}
        <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
        <div class="shelf">${i()}${a()}</div>
      `;if(Zs(e))return _`
        <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
        <div class="shelf">
          ${i()}
          ${a()}
        </div>
      `;let d=e.coherence==="verifying"||e.coherence==="booting",c=e.resources.plans,u=c.value,m=u!==null&&u.rooms.length===0,h=u?.plans.length??0,f=c.status==="loading",y=c.status==="error",v=d||m,w=d?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):m?o("v4_no_rooms_reason","Can't clean rooms until you name them in the Matic app."):null,k=d?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):null,S=d?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):o("v4_areas_quick_detail","Draw or choose a custom area");return _`
      ${e.activity==="problem"?this.#fe(o("v4_attention_title","The robot needs attention"),o("v4_attention_body","The robot reported a problem. Check it in the Matic app, then start a new clean.")):n.recheck?_`
          <div class="host-state">
            <p>${o("v4_map_limited_body","Home Assistant can show this map but can't confirm it well enough to start cleaning.")}</p>
            <button
              class="ms-btn ms-btn--secondary"
              type="button"
              aria-disabled=${e.rechecking?"true":g}
              @click=${()=>{this.state.rechecking||this.#ee("recheck-status")}}
            >${o("v4_retry","Try again")}</button>
          </div>
        `:_`
          <div class="quick-actions" role="group" aria-label=${o("v4_cleaning_choices","Cleaning choices")}>
            <button
              class="ms-row ms-row--card ms-row--featured"
              type="button"
              aria-disabled=${v?"true":g}
              @click=${this.#Ae("rooms",v)}
            >
              <span class="ms-row__lead">${D(ae)}</span>
              <span class="ms-row__body">
                <strong>${o("v4_clean_rooms","Clean rooms")}</strong>
                <small>${w??o("v4_clean_rooms_hint","Choose rooms for this run")}</small>
              </span>
              <span class="ms-row__trail">${D(Ae)}</span>
            </button>
            <button
              class="ms-row ms-row--card"
              type="button"
              aria-disabled=${d?"true":g}
              @click=${this.#Ae("plans",d)}
            >
              <span class="ms-row__lead">${D(ot)}</span>
              <span class="ms-row__body">
                <strong>${f?o("v4_plans_loading","Checking saved plans"):y?o("v4_plans_unavailable","Plans unavailable"):h?o("v4_run_a_plan","Run a plan"):o("v4_create_plan","Create a plan")}</strong>
                <small>${k??(f?o("v4_plans_loading_hint","Reading plans for this floor"):y?o("v4_plans_unavailable_hint","Try again to load your plans."):h?h===1?o("v4_saved_routine","1 saved plan"):o("v4_saved_routines","{count} saved plans",{count:h}):o("v4_no_plans_hint","Save a plan to repeat a set of rooms."))}</small>
              </span>
              <span class="ms-row__trail">${D(Ae)}</span>
            </button>
          </div>
        `}
      <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
      <div class="shelf">
        ${this.#Te(o("v4_custom_areas","Clean custom area"),rs,"draw",S,d)}
        ${i()}

      </div>
      ${s?_`
        <h3 class="shelf-heading" id="map-display-heading">${o("v4_map_display","Map display")}</h3>
        <div class="map-display">
          <div class="ms-segment" role="group" aria-labelledby="map-display-heading">
            <button
              class="ms-btn"
              type="button"
              aria-pressed=${String(e.appearance==="photo")}
              @click=${()=>this.#m({type:"set-appearance",appearance:"photo"})}
            >${o("map_style_photo","Photo")}</button>
            <button
              class="ms-btn"
              type="button"
              aria-pressed=${String(e.appearance==="rooms")}
              @click=${()=>this.#m({type:"set-appearance",appearance:"rooms"})}
            >${o("map_style_room_colours","Room colors")}</button>
          </div>
          <label class="ms-checkbox">
            <input type="checkbox" .checked=${e.labelsVisible} @change=${()=>this.#m({type:"toggle-labels"})}>
            ${o("v4_room_names","Room names")}
          </label>
          <button
            class="ms-btn ms-btn--secondary help-launcher"
            type="button"
            aria-haspopup="dialog"
            aria-expanded=${String(this._helpOpen)}
            @click=${this.#ie}
          >${o("v4_how_to_move","How to move the map")}</button>
        </div>
      `:g}
    `}#He(e,s,n){if(e.workflow==="none")return this.#Be(e,s,n);let o=this.#ae(e.workflow);return o!=="ready"?s&&e.workflow==="draw"?g:ct(o,this.localize,this.#$):_`<${Gs}
      .state=${e}
      .localize=${this.localize}
      .dates=${this.dates}
      .retry=${this.#$}
      @matic-workspace-intent=${this.#Ce}
    ></${Gs}>`}#De(e,s){let n=e.workflow==="plan";if(e.workflow==="none"||n&&e.planView==="edit")return g;let o=n?this.#e("v4_back_to_plans","Back to plans"):this.#e("v4_back_to_all_tasks","Back to all tasks");return _`
      <button
        class=${s?"sheet-back ms-btn ms-btn--icon ms-btn--sm":"panel-back ms-btn ms-btn--secondary"}
        type="button"
        aria-label=${o}
        title=${s?o:g}
        data-dialog-launcher="discardDraft"
        @click=${i=>this.#Z(n?"plans":"none",i.currentTarget)}
      >${D(st)}${s?g:_`<span class="ms-btn__label">${n?this.#e("v4_your_plans","Your plans"):this.#e("v4_all_tasks","All tasks")}</span>`}</button>
    `}#Le(e){let s=e.workflow==="plan",n=gt(e,this.localize).title;return _`
      <div class="panel-top">
        <div class="panel-heading">
          ${this.#De(e,!1)}
          <h2 id="workspace-title" tabindex="-1">${s&&this.#s.value?.planTitle(e,n,this.#xe)||n}</h2>
          ${s?this.#s.value?.planTools(e,this.localize,this.#Ce):g}
        </div>
        ${e.notice?_`<div class="notice" data-notice-slot data-tone=${e.notice.tone}>${this.#X(e.notice,this.#j,this.#e("v4_close","Close"))}</div>`:g}
      </div>
    `}#We(e,s,n){let{description:o}=gt(e,this.localize);return _`
      ${o?_`<p class="panel-description">${o}</p>`:g}
      ${this.#He(e,s,n)}
    `}#Fe(e,s){let o=gt(e,this.localize).title;return e.workflow==="rooms"&&e.selection.roomIds.length&&(o=this.#e("v4_rooms_selected_names","{count} selected \xB7 {rooms}",{count:e.selection.roomIds.length,rooms:this.#$e(e)})),this._sheetDetent!=="peek"?s.detail?`${s.title} \xB7 ${s.detail}`:s.title:s.notable?`${s.title} \xB7 ${o}`:o}#Ke(){let e=(s,n)=>this.#e(s,n);return _`
      <div class="dialog-backdrop" @click=${s=>{s.target===s.currentTarget&&(this._helpOpen=!1)}}>
        <section
          class="dialog help-dialog ms-surface ms-surface--overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="help-title"
          @keydown=${this.#Ie}
        >
          <h2 id="help-title">${e("v4_how_to_move","How to move the map")}</h2>
          <dl>
            <dt>${e("v4_touch","Touch")}</dt>
            <dd>${e("v4_touch_help","Drag to explore \xB7 pinch to zoom \xB7 twist two fingers to rotate")}</dd>
            <dt>${e("v4_trackpad","Trackpad")}</dt>
            <dd>${e("v4_trackpad_help","Scroll to pan \xB7 pinch to zoom \xB7 twist to rotate")}</dd>
            <dt>${e("v4_mouse","Mouse")}</dt>
            <dd>${e("v4_mouse_help","Drag to orbit \xB7 Shift, middle, or right drag to pan \xB7 wheel to zoom")}</dd>
            <dt>${e("v4_keyboard","Keyboard")}</dt>
            <dd>${e("v4_keyboard_help","WASD to move \xB7 Q/E or arrows to orbit \xB7 +/\u2212 to zoom \xB7 0 to fit")}</dd>
          </dl>
          <div class="dialog-actions">
            <button
              class="ms-btn ms-btn--secondary"
              type="button"
              data-dialog-initial-focus
              @click=${()=>{this._helpOpen=!1}}
            >${e("v4_close","Close")}</button>
          </div>
        </section>
      </div>
    `}render(){let e=this.state,s=e.narrowHint||this._measuredNarrow,n=yt(e,this.localize),o=ke(e),i=Wt({...e,narrowHint:s}),a=qt(e),l=!s&&i.id==="stop"?i:!s&&a?.id==="stop"?a:null,d=l&&l===i?null:i,c=e.workflow==="draw"&&e.dataMode==="live"?{id:"clear-draft",label:"Clear",labelKey:"v4_clear_drawing",kind:"neutral",enabled:e.draw.circles.length>0||!!e.draw.outline?.points.length}:null,u=l&&l===a?null:a??c,m=e.fullMap&&(e.coherence==="verifying"||e.coherence==="booting"),h=e.fullMap||e.host.administrator&&e.host.robotCount>0&&e.map.available,f=e.workflow==="plan",y=e.dialog==="discardDraft",v=y?Tt(e,f?"confirmDeletePlan":"confirmDeleteArea")?.name:void 0,w=y?{title:this.#e("v4_discard_title","Discard changes?"),detail:v===void 0?f?this.#e("v4_discard_new_plan_detail","This new plan hasn't been saved, and discarding it can't be undone."):this.#e("v4_discard_new_area_detail","This new area hasn't been saved, and discarding it can't be undone."):f?this.#e("v4_discard_plan_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:v}):this.#e("v4_discard_area_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:v}),cancelLabel:this.#e("v4_keep_area_editing","Keep editing"),confirmLabel:this.#e("v4_discard","Discard"),action:"discard"}:e.dialog===null?void 0:this.#s.value?.dialogCopy(e.dialog,e,this.localize),k=y&&(e.command==="pending"||this.#h!==null),S=y&&(i.id==="save-plan"||i.id==="save-area")&&(i.enabled||k)?i.id:null,b=s&&!e.fullMap?`--map-sheet-offset:${this._sheetOffset}px`:"--map-sheet-offset:0px",E=s&&e.workflow==="draw",M=e.precisionOpen&&e.workflow==="draw",O=this._toast&&(this._toast.tone==="success"||this._toast.tone==="error"||e.fullMap||s&&this._sheetDetent==="peek")?this._toast:null;return _`
      <div class=${`root ${s?"narrow":"wide"}`} @keydown=${this.#ge}>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#qe}>${this.#e("v4_skip_to_map","Skip to the map")}</button>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#ze}>${this.#e("v4_skip_to_workspace","Skip to the panel")}</button>
        <div class="app" ?inert=${!!w||this._helpOpen}>
          <header class="app-bar">
            ${e.precisionOpen?g:_`
              <button
                class="nav nav--menu ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                title=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                @click=${this.#pe}
              >${D(ss)}</button>
            `}

            ${e.precisionOpen?_`
              <button
                class="nav ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_back","Back")}
                @click=${()=>this.#m({type:"dismiss-top-layer"})}
              >${D(st)}</button>
            `:g}
            <h1 class="title">${this.#e("map_studio_title","Matic Map")}</h1>
            ${e.robots.length>1||o?_`
              <select
                class="ms-select context-switcher robot-switcher"
                name="matic-robot"
                aria-label=${this.#e("v4_choose_robot","Choose robot")}
                .value=${e.selection.entryId||""}
                @change=${C=>this.#m({type:"select-entry",entryId:C.currentTarget.value})}
              >${o?_`
                <option value=${e.selection.entryId||""} selected disabled>${this.#e("v4_selected_robot_unavailable","Selected robot unavailable")}</option>
              `:g}${e.robots.map(C=>_`
                <option value=${C.entryId} ?selected=${C.entryId===e.selection.entryId}>${C.label}</option>
              `)}</select>
            `:g}

            <span class="spacer"></span>
            ${h?_`
              <button
                class="workspace-toggle ms-btn ms-btn--icon"
                type="button"
                aria-label=${e.fullMap?this.#e("v4_show_workspace","Show cleaning panel"):this.#e("v4_hide_workspace","Hide cleaning panel")}
                aria-controls="map-workspace"
                aria-expanded=${String(!e.fullMap)}
                title=${e.fullMap?this.#e("v4_show_workspace","Show cleaning panel"):this.#e("v4_hide_workspace","Hide cleaning panel")}
                @click=${this.#ye}
              >${D(ns)}</button>
            `:g}
            <div class="overflow-wrap">
              <button
                class="overflow ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_map_options","Map options")}
                aria-expanded=${String(this._overflowOpen)}
                aria-controls="map-options"
                @click=${()=>{this._overflowOpen=!this._overflowOpen}}
              >${D(ts)}</button>
              ${this._overflowOpen?_`
                <div id="map-options" class="overflow-menu ms-surface ms-surface--overlay">
                  <label class="overflow-field ms-field">${this.#e("map_quality_label","Map detail")}
                    <select
                      aria-label=${this.#e("map_quality_label","Map detail")}
                      .value=${e.quality}
                      @change=${C=>this.#m({type:"set-quality",quality:C.currentTarget.value})}
                    >
                      <option value="auto">${this.#e("map_quality_auto","Auto detail")}</option>
                      <option value="efficient">${this.#e("map_quality_efficient","Efficient")}</option>
                      <option value="balanced">${this.#e("map_quality_balanced","Balanced")}</option>
                      <option value="maximum">${this.#e("map_quality_maximum","Maximum")}</option>
                    </select>
                  </label>
                  <button class="ms-row ms-row--menu" type="button" @click=${()=>this.#Re("support")}>${this.#e("v4_map_diagnostics","Map diagnostics")}</button>
                  <button class="ms-row ms-row--menu" type="button" @click=${()=>this.#Re("fullscreen")}>${this._browserFullscreen?this.#e("v4_leave_full_screen","Leave full screen"):this.#e("v4_full_screen","Full screen")}</button>
                </div>
              `:g}
            </div>
          </header>

          <main class=${`workspace ${e.fullMap?"full-map":""}`} style=${b}>
            <div class="canvas">
              <${Xs}
                class="map-canvas"
                style=${b}
                .state=${e}
                .localize=${this.localize}
                .dates=${this.dates}
                .outlineEditor=${this.#r.value}
                .narrow=${s}
              >${this.#Ne(e)}
                ${s&&!e.fullMap&&this._sheetDetent==="full"?_`
                  <button
                    class="sheet-scrim"
                    slot="scrim"
                    data-map-control
                    type="button"
                    aria-label=${this.#e("v4_collapse_sheet","Collapse panel")}
                    @click=${()=>this.#Q("peek")}
                  ></button>
                `:g}
              </${Xs}>
              ${!s&&M?_`
                <div class="precision-popover">
                  <${Ye} compact .state=${e} .localize=${this.localize}></${Ye}>
                </div>
              `:g}
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
              ${s?_`
                <div
                  class="sheet-grip"
                  @pointerdown=${this.#U}
                  @pointermove=${this.#Se}
                  @pointerup=${this.#ne}
                  @pointercancel=${this.#ne}
                >
                  <span class="sheet-handle" role="presentation"></span>
                  ${this._sheetDetent==="peek"?this.#De(e,!0):g}
                  <span class="sheet-status">${this.#Fe(e,n)}</span>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_more","Expand panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="full"?"true":g}
                    @click=${()=>this.#te(1)}
                  >${D(os)}</button>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_less","Collapse panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="peek"?"true":g}
                    @click=${()=>this.#te(-1)}
                  >${D(is)}</button>
                </div>
                ${E?_`
                  <div class="sheet-tools">
                    ${ct(this.#ae("draw"),this.localize,this.#$)}
                    ${hs(e,{intent:C=>this.#m(C),openBrush:()=>this.#Ee(),t:(C,$,W)=>this.#e(C,$,W)},"grid")}
                    ${M?_`
                      <div class="precision-popover">
                        <${Ye} compact inline .state=${e} .localize=${this.localize}></${Ye}>
                      </div>
                    `:g}
                  </div>
                `:g}
                <div
                  class="sheet-panel"
                  id="sheet-panel"
                  @pointerdown=${this.#he}
                  @pointermove=${this.#Pe}
                  @pointerup=${this.#oe}
                  @pointercancel=${this.#oe}
                >
                  ${this.#Le(e)}
                  <div class="sheet-body" role="region" aria-labelledby="workspace-title">${this.#We(e,s,n)}</div>
                </div>
                ${this.#Oe(e,d,u)}
              `:_`
                <div class="status-strip">
                  <span class="status-icon" aria-hidden="true">${D(n.icon)}</span>
                  <span class="status-copy"><strong>${n.title}</strong><small>${n.detail}</small></span>
                  ${l?this.#be(l,"status-action ms-btn ms-btn--secondary","status-reason"):g}
                </div>
                <section class="workflow">
                  ${this.#Le(e)}
                  <div class="workflow-body" role="region" aria-labelledby="workspace-title">${this.#We(e,s,n)}</div>
                  ${this.#Oe(e,d,u)}
                </section>
              `}
            </aside>

            ${e.fullMap?_`
              <section
                class=${`full-map-hud ms-surface ms-surface--floating ${a?"has-secondary":""} ${!s&&(e.workflow==="draw"||e.workflow==="rooms"&&e.selection.roomIds.length>0)?"above-dock":""}`}
                aria-label=${this.#e("v4_robot_status_and_action","Robot status and action")}
              >
                <span class="hud-copy"><strong>${n.title}</strong><small>${n.detail}</small></span>
                ${m&&i.id!=="stop"?g:this.#be(i,"ms-btn ms-btn--lg ms-btn--primary","hud-reason")}
                ${a&&(!m||a.id==="stop")?this.#be(a,"ms-btn ms-btn--lg ms-btn--secondary","hud-secondary-reason"):g}
              </section>
            `:g}
          </main>
        </div>

        <div
          class="notice notice-toast"
          data-notice-toast
          role="region"
          aria-label=${this.#e("v4_notifications","Notifications")}
          data-tone=${O?.tone??g}
          style=${b}
          ?hidden=${!O}
          ?inert=${!!w||this._helpOpen}
          @pointerenter=${this.#H}
          @focusin=${this.#H}
          @pointerleave=${this.#de}
          @focusout=${this.#de}
        >${O?this.#X(O,this.#E,this.#e("v4_hide_notification","Hide notification")):g}</div>

        <div class="sr-only" aria-live="polite" aria-atomic="true">${this._polite}</div>
        <div class="sr-only" role="alert" aria-atomic="true">${this._alert}</div>

        ${this._helpOpen?this.#Ke():g}

        ${w?_`
          <div class="dialog-backdrop">
            <section
              class="dialog ms-surface ms-surface--overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title"
              aria-describedby="dialog-detail"
              @keydown=${this.#Ie}
            >
              <h2 id="dialog-title">${w.title}</h2>
              <div id="dialog-detail">
                <p>${w.detail}</p>
                ${w.consequence?_`<p>${w.consequence}</p>`:g}
                ${k?_`<p id="dialog-saving" role="status">${this.#e("v4_notice_saving","Saving\u2026")}</p>`:g}
              </div>
              <div class="dialog-actions">
                <button
                  class=${y?"ms-btn":"ms-btn ms-btn--secondary"}
                  type="button"
                  data-dialog-initial-focus
                  aria-disabled=${k?"true":g}
                  aria-describedby=${k?"dialog-saving":g}
                  @click=${y?this.#O:this.#G}
                >${w.cancelLabel}</button>
                ${S?_`<button
                  class="ms-btn ms-btn--secondary"
                  type="button"
                  aria-disabled=${k?"true":g}
                  aria-describedby=${k?"dialog-saving":g}
                  @click=${()=>{if(k)return;let C={};this.#h=C,this.requestUpdate(),this.#ee(S,$=>this.#_e(C,$))}}
                >${this.#e("v4_save","Save")}</button>`:g}
                <button
                  class="discard ms-btn ms-btn--primary ms-btn--danger"
                  type="button"
                  aria-disabled=${k?"true":g}
                  aria-describedby=${k?"dialog-saving":g}
                  @click=${()=>{k||this.#ve(w)}}
                >${w.confirmLabel}</button>
              </div>
            </section>
          </div>
        `:g}
      </div>
    `}};customElements.get(pe)||customElements.define(pe,_t);var sn=oe(pe),ge=new WeakMap,Dn={},Ln=3e4,kt=(r,t)=>{ge.get(r)===t&&ge.delete(r)},St=class extends Ee{constructor(){super(...arguments);this.narrow=!1;this._workspace=V();this.#e=new $e;this.#t=new It(this._workspace);this.#o=null;this.#s=null;this.#r=null;this.#a=null;this.#i=null;this.#n=null}static{this.styles=[Ce,Me,Re`
:host { display: block; block-size: 100%; }
`]}static{this.properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_workspace:{state:!0}}}#e;#t;#o;#s;#r;#a;#i;#n;#u(e=this.hass,s=this.panel){let n=this.#t.value.selection;return n.entrySource==="user"?this.#e.project(e,s,n.entryId):this.#e.project(e,s)}#v(){let e=this.hass,s=e?.loadBackendTranslation;if(!e||typeof s!="function")return;let n=e.connection??Dn,o=e.language??"";ge.get(n)!==o&&(ge.set(n,o),Promise.resolve().then(()=>s.call(e,"common","matic_robot")).catch(()=>{if(ge.get(n)===o){if(!this.isConnected){kt(n,o);return}this.#n&&clearTimeout(this.#n.timer),this.#n={owner:n,language:o,timer:setTimeout(()=>{this.#n=null,kt(n,o),this.#v()},Ln)}}}))}shouldUpdate(e){if(this.#v(),!e.has("hass")||[...e.keys()].some(n=>n!=="hass"))return!0;let s=e.get("hass");return s?.connection!==this.hass?.connection||s?.localize!==this.hass?.localize?!0:this.#u()!==this.#o}connectedCallback(){super.connectedCallback(),this.#v(),this.#s=this.#t.subscribe(e=>{if(this._workspace=e,e.selection.entryId!==this.#o?.entryKey){let s=this.#u();s!==this.#o&&(this.#o=s,this.#a?.sync(s))}}),this.#d()}disconnectedCallback(){this.#n&&(clearTimeout(this.#n.timer),kt(this.#n.owner,this.#n.language),this.#n=null),this.#s?.(),this.#s=null,this.#k(),super.disconnectedCallback()}#d(){if(!(!this.isConnected||this.#a)&&(this.#o=this.#u(),this.#r=new Le(()=>this.hass),this.#a=new Ue(this.#t,this.#r,this.hass?.connection??null),this.#i=new je(this.#t),this.#i.start(),this.#o)){this.#a.sync(this.#o);let{host:e}=this.#o;e.connected&&e.administrator&&e.robotCount>0&&this.#a.refreshCatalog(this.#t.value.selection.floorId==="current")}}#k(){this.#i?.dispose(),this.#i=null,this.#a?.dispose(),this.#a=null,this.#r=null}willUpdate(e){if(e.has("hass")||e.has("panel")){let s=e.get("hass"),n=e.has("hass")&&s?.connection!==this.hass?.connection,o=this.#u(),i=o!==this.#o;i&&(this.#o=o),n?(this.#k(),this.#d()):(i||e.has("panel"))&&this.#a?.sync(o)}e.has("narrow")&&this.#t.value.narrowHint!==this.narrow&&this.#t.dispatch({type:"set-narrow-hint",value:this.narrow})}#w(e){if(!Pt(e.detail))return;e.stopPropagation();let s=e.detail;if(s.type==="dismiss-top-layer"||s.type==="exit-full-map"){this.#i?.dismissTop()||this.#t.dispatch(s);return}if(s.type==="open-workflow"&&s.workflow!=="none"){this.#a?.openWorkflow(s.workflow);return}if(s.type==="set-floor"){this.#a?.selectFloor(s.floorId);return}if(s.type==="select-entry"){if(!this._workspace.robots.some(n=>n.entryId===s.entryId)||this.#e.project(this.hass,this.panel,s.entryId).entryKey!==s.entryId)return;this.#t.dispatch(s);return}if(s.type==="set-history"){this.#a?.selectHistory(s.historyId);return}if(s.type==="select-plan"){this.#a?.selectPlan(s.planId);return}if(s.type==="set-plan-enabled"){this.#a?.setPlanEnabled(s.enabled);return}if(s.type==="select-area"){this.#a?.selectArea(s.areaId),s.workflow==="areaReview"&&this.#a?.openWorkflow("areaReview");return}this.#t.dispatch(s)}#y(e){e.stopPropagation(),typeof e.detail?.id=="string"&&(e.detail.id==="reset-room-cadence"&&"planId"in e.detail&&"roomId"in e.detail&&"mode"in e.detail?this.#a?.executeAction(e.detail):this.#a?.executeAction(e.detail.id,"settled"in e.detail?e.detail.settled:void 0),this.dispatchEvent(new CustomEvent("matic-map-v4-action-requested",{detail:{id:e.detail.id},bubbles:!0,composed:!0})))}getWorkspaceSnapshot(){return this.#t.value}getRequestDiagnostics(){return Object.freeze({http:this.#r?.requestDiagnostics()??null,workspace:this.#a?.workspaceDiagnostics()??null})}render(){return _`
      <${sn}
        .state=${this._workspace}
        .localize=${this.hass?.localize}
        .dates=${this.#o?.dates}
        @matic-workspace-intent=${this.#w}
        @matic-workspace-action=${this.#y}
      ></${sn}>
    `}};customElements.get(et)||customElements.define(et,St);export{$e as a,St as b};
