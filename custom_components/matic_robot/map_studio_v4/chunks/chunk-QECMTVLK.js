import{A as Qt,B as Jt,C as us,D as at,E as Ie,F as ps,G as lt,H as ms,I as fs,J as vs,K as ys,L as gs,M as bs,N as ws,O as _s,P as ks,Q as Rs,a as oe,b as _,c as Pe,d as zt,e as Je,h as pe,i as Ze,j as Ht,k as Bt,l as Nt,m as et,n as Ft,o as Kt,p as ie,q as me,r as re,s as Ut,t as S,u as xe,v as Vt,w as jt,x as Yt,y as Xt,z as Gt}from"./chunk-J23A6SXU.js";import{C as is,D as st,E as nt,F as ot,G as it,H as rt,I as rs,J as j,K as as,M as ls,N as cs,O as ds,P as O,a as Ce,b as Me,c as Zt,d as ae,e as tt,f as es,g as ts,h as ss,i as Ae,j as ns,k as os}from"./chunk-PG5OXYTZ.js";import{C as Qe,D as Re,H as Ot,I as Dt,K as Lt,L as Wt,M as qt,Q as Se,V as w,X as Ee,Y as Te,Z as hs,c as Mt,h as P,j as Pt,k as ne,n as V,o as xt,p as Ye,q as Xe,r as At,t as Tt,u as It,v as $t,x as ke,z as Ge}from"./chunk-LTYYE5LG.js";var sn=(a,t)=>{if(t?.recharge_and_resume===!0&&t?.charging===!0)return"recharging";switch(a){case"cleaning":return"cleaning";case"paused":return"paused";case"returning":return"returning";case"docked":return"docked";case"idle":return"idle";case"error":return"problem";default:return"unknown"}},nn=a=>typeof a!="number"||!Number.isFinite(a)?null:Math.round(Math.max(0,Math.min(100,a))),on=a=>{let t=a.attributes?.matic_entry_id;return typeof t=="string"&&t.length>0?t:null},rn=a=>String(a||"local-user").replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",Ss=a=>{if(typeof a!="string")return"Robot";let t=a.trim();return t&&Array.from(t).length<=128&&!/[\u0000-\u001f\u007f]/u.test(t)?t:"Robot"},$e=class{#e="";#t=null;project(t,e,s=null){let n=t?.states??{},o=e?.config?.entry_id,r=s||(typeof o=="string"?o:null),l=null,c=null,d=r,u=new Map;for(let[M,D]of Object.entries(n)){let W=on(D);W&&M.startsWith("vacuum.")&&(u.set(W,{entryId:W,label:Ss(D.attributes?.friendly_name)}),(r?W===r:!l)&&(l=D,c=M,d=W))}let p={connected:t?.connected!==!1,administrator:t?.user?.is_admin===!0,robotConnected:l!==null&&l.state!=="unavailable"&&l.state!=="unknown",robotCount:u.size},h=l?sn(l.state,l.attributes):"unknown",f=nn(l?.attributes?.battery_level),v=t?.selectedLanguage||t?.language||"en",y=t?.locale?.language||v,b=t?.locale?.time_zone==="server"?t.config?.time_zone:void 0,R=this.#t?.dates,k=R?.language===y&&R.timeZone===b?R:{language:y,timeZone:b},g=rn(t?.user?.id),E=Ss(l?.attributes?.friendly_name),C=[...u.values()].sort((M,D)=>M.label.localeCompare(D.label,v,{sensitivity:"base"})),$=[p.connected,p.administrator,p.robotConnected,p.robotCount,h,f??"none",v,y,b??"browser",g,c??"none",d??"none",E,C.map(M=>`${M.entryId}:${M.label}`).join(",")].join("|");return $===this.#e&&this.#t?this.#t:(this.#e=$,this.#t={host:p,activity:h,batteryPercent:f,language:v,dates:k,userKey:g,vacuumEntityId:c,entryKey:d,robotLabel:E,robots:C},this.#t)}};var an=1024*1024,Es=a=>{let t=s=>{let n=a.sceneHeaderBytes,o=a.scenePointStride,i=a.sceneMaxPoints,r=a.sceneMaxBytes,l=()=>{throw new Error("invalid-scene")};(!(s instanceof ArrayBuffer)||s.byteLength<n||s.byteLength>r)&&l();let c=new DataView(s),d=new Uint8Array(s,0,8),u=String.fromCharCode(...d),p=c.getUint16(8,!0),h=c.getUint16(10,!0),f=c.getUint32(12,!0),v=c.getUint32(16,!0),y=c.getUint32(20,!0),b=v+y,R=n+f;(u!=="MATIC3D\0"||p!==1||h!==o||f>1048576||b<1||b>i||R+b*h!==s.byteLength)&&l();let k;try{k=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(new Uint8Array(s,n,f)))}catch{l()}(!k||typeof k!="object"||Array.isArray(k))&&l();let g=k,E=g.meters_per_cell,C=g.origin_cells,$=g.span_cells;(typeof E!="number"||!Number.isFinite(E)||E<.001||E>.1||!Array.isArray(C)||C.length!==2||!C.every(L=>typeof L=="number"&&Number.isFinite(L))||!Array.isArray($)||$.length!==2||!$.every(L=>typeof L=="number"&&Number.isFinite(L)&&L>=1&&L<=65536))&&l();let D=(Array.isArray(g.rooms)?g.rooms.slice(0,128):[]).flatMap((L,we)=>{if(!L||typeof L!="object"||Array.isArray(L))return[];let B=L,G=typeof B.name=="string"?B.name.trim():"";if(!G||Array.from(G).length>128||/[\u0000-\u001f\u007f]/u.test(G))return[];if(!Array.isArray(B.boundary)||B.boundary.length<3||B.boundary.length>8192)return[];let _e=B.boundary.flatMap(U=>{if(!Array.isArray(U)||U.length!==2)return[];let[Q,se]=U;return typeof Q=="number"&&Number.isFinite(Q)&&typeof se=="number"&&Number.isFinite(se)?[[Q,se]]:[]}),Z=B.center;if(_e.length<3||!Array.isArray(Z)||Z.length!==2)return[];let[ee,te]=Z;return typeof ee!="number"||!Number.isFinite(ee)||typeof te!="number"||!Number.isFinite(te)?[]:[{id:`scene-room-${we+1}`,name:G,boundary:_e,center:[ee,te]}]}),W=typeof g.sample_step=="number"&&Number.isInteger(g.sample_step)?Math.max(1,Math.min(i,g.sample_step)):1,he=C,be=$;return{buffer:s,pointOffset:R,floorCount:v,surfaceCount:y,total:b,metadata:{metersPerCell:E,origin:[he[0],he[1]],span:[be[0],be[1]],sampleStep:W,rooms:D}}};return{parseTransfer:t,decodeDeltaTransfer:async(s,n,o)=>{let i=(T="invalid-scene-delta")=>{throw new Error(T)},r=()=>{if(o?.aborted)throw new DOMException("Aborted","AbortError")};(!(s instanceof ArrayBuffer)||s.byteLength<a.deltaHeaderBytes||s.byteLength>a.deltaHeaderBytes+a.deltaMaxBytes||!(n.buffer instanceof ArrayBuffer)||n.buffer.byteLength<a.sceneHeaderBytes||n.buffer.byteLength>a.deltaMaxBytes||!Number.isSafeInteger(n.revision)||n.revision<0)&&i("invalid-scene-delta-size");let l=new DataView(s),c=String.fromCharCode(...new Uint8Array(s,0,8)),d=l.getUint16(8,!0),u=l.getUint16(10,!0),p=l.getBigUint64(12,!0),h=l.getBigUint64(20,!0),f=l.getUint32(28,!0),v=l.getUint32(32,!0),y=Number(p),b=Number(h);(c!=="MATICDLT"||d!==1||u!==1||!Number.isSafeInteger(y)||!Number.isSafeInteger(b)||y!==n.revision||b<=n.revision||f<a.sceneHeaderBytes||f>a.deltaMaxBytes||v<1||v>a.deltaMaxBytes||v+a.deltaHeaderBytes!==s.byteLength)&&i(),typeof DecompressionStream!="function"&&i("scene-delta-decompression-unavailable"),r();let R=new Uint8Array(s,a.deltaHeaderBytes,v),k=Math.max(n.buffer.byteLength,f);k>a.deltaMaxBytes&&i("invalid-scene-delta-size");let g=new Uint8Array(k),C=new Blob([R]).stream().pipeThrough(new DecompressionStream("deflate")).getReader(),$=0,M=null;try{for(M=()=>{C.cancel().catch(()=>{})},o?.addEventListener("abort",M,{once:!0});;){r();let{done:T,value:J}=await C.read();if(T)break;(!(J instanceof Uint8Array)||$+J.byteLength>k)&&i(),g.set(J,$),$+=J.byteLength}}catch(T){if(await C.cancel().catch(()=>{}),o?.aborted||T instanceof DOMException&&T.name==="AbortError")throw new DOMException("Aborted","AbortError");if(T instanceof Error&&T.message==="invalid-scene-delta")throw T;i()}finally{M&&o?.removeEventListener("abort",M),C.releaseLock()}r(),$!==k&&i();let D=new Uint8Array(n.buffer),W=new DataView(g.buffer,g.byteOffset,g.byteLength),he=Math.min(a.sceneHeaderBytes,D.byteLength);for(let T=0;T<he;T+=1)g[T]=(g[T]??0)^(D[T]??0);let be=W.getUint32(12,!0),L=W.getUint32(16,!0),we=W.getUint32(20,!0),B=a.sceneHeaderBytes+be,G=L+we,_e=B===n.pointOffset&&L===n.floorCount&&we===n.surfaceCount,Z=B+G*a.scenePointStride,ee=_e&&Z===f&&G<=a.sceneMaxPoints,te=[],U=-1,Q=!1,se=()=>{Q&&U>=0&&te.push(U),Q=!1};for(let T=he;T<D.byteLength;T+=a.xorChunkBytes){r();let J=Math.min(D.byteLength,T+a.xorChunkBytes);for(let N=T;N<J;N+=1){let St=D[N]??0,Et=(g[N]??0)^St;if(g[N]=Et,!ee||N<n.pointOffset||N>=Z)continue;let Ct=Math.floor((N-n.pointOffset)/a.dirtyBlockBytes);Ct!==U&&(se(),U=Ct),Et!==St&&(Q=!0)}J<D.byteLength&&await new Promise(N=>globalThis.setTimeout(N,0))}se(),r();let tn=f===g.byteLength?g.buffer:g.slice(0,f).buffer;return{parsed:t(tn),revision:b,...ee?{deltaHint:{baseRevision:y,blockBytes:a.dirtyBlockBytes,dirtyBlocks:te}}:{}}}}},Cs=Object.freeze({deltaHeaderBytes:me,deltaMaxBytes:re,sceneHeaderBytes:et,sceneMaxBytes:ie,sceneMaxPoints:Kt,scenePointStride:Ft,dirtyBlockBytes:Ut,xorChunkBytes:an}),Ms=Es(Cs),ln=a=>{try{return Ms.parseTransfer(a)}catch{throw new S("invalid-scene")}},cn=()=>`
  const { parseTransfer, decodeDeltaTransfer } = (${Es.toString()})(Object.freeze(${JSON.stringify(Cs)}));
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
`,Oe=class{#e=null;#t=null;#o=!1;#n=!1;#a=0;#r=null;#i=null;#s=null;constructor(){if(!(typeof Worker!="function"||typeof URL?.createObjectURL!="function"))try{this.#t=URL.createObjectURL(new Blob([cn()],{type:"text/javascript"})),this.#f()}catch{this.#e=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}}async parse(t,e){if(this.#u(e),t.byteLength>ie||t.byteLength<et)throw new S("invalid-scene");let s=await this.#d({kind:"parse",buffer:t},e,async n=>(await new Promise(o=>globalThis.setTimeout(o,0)),this.#u(n),{id:0,ok:!0,parsed:ln(t)}));if(!s.parsed)throw new S("invalid-scene");return s.parsed}async decodeDelta(t,e,s){if(this.#u(s),t.byteLength>me+re||e.buffer.byteLength>re)throw new S("invalid-scene-delta-size");let n={buffer:e.buffer,revision:e.revision,pointOffset:e.pointOffset,floorCount:e.floorCount,surfaceCount:e.surfaceCount},o;try{o=await this.#d({kind:"delta",payload:t},s,async i=>(await new Promise(r=>globalThis.setTimeout(r,0)),this.#u(i),Ms.decodeDeltaTransfer(t,n,i).then(r=>({id:0,ok:!0,...r}))),n)}catch(i){throw i instanceof S?i:s?.aborted||i instanceof DOMException&&i.name==="AbortError"?new DOMException("Aborted","AbortError"):i instanceof Error&&(i.message.startsWith("invalid-scene")||i.message==="scene-delta-decompression-unavailable")?new S(i.message):new S("invalid-scene-delta")}if(!o.parsed||o.revision===void 0)throw new S("invalid-scene-delta");return{parsed:o.parsed,revision:o.revision,...o.deltaHint?{deltaHint:o.deltaHint}:{}}}#u(t){if(this.#n)throw new S("scene-parser-disposed");if(t?.aborted)throw new DOMException("Aborted","AbortError")}#f(){if(!(!this.#t||this.#o||this.#n))try{let t=new Worker(this.#t);t.onmessage=e=>{let s=this.#r;this.#e!==t||!s||s.worker!==t||e.data.id!==s.id||(e.data.ok?this.#y(s,e.data):this.#y(s,void 0,new S(e.data.problem||"invalid-scene")))},t.onerror=()=>this.#c(t),t.onmessageerror=()=>this.#c(t),this.#e=t}catch{this.#e=null,this.#o=!0}}async#d(t,e,s,n){return this.#u(e),new Promise((o,i)=>{let r,l=()=>e?.removeEventListener("abort",r.abort),c=(d,u)=>{r.settled||(r.settled=!0,l(),u!==void 0?i(u):d?o(d):i(new S("invalid-scene")))};r={id:++this.#a,message:t,...e?{signal:e}:{},fallback:s,...n?{base:n}:{},settle:c,abort:()=>this.#_(r),settled:!1,worker:null},e?.addEventListener("abort",r.abort,{once:!0}),e?.aborted||this.#n?c(void 0,e?.aborted?new DOMException("Aborted","AbortError"):new S("scene-parser-disposed")):this.#r?this.#i?c(void 0,new S("scene-parser-busy")):this.#i=r:(this.#r=r,this.#k(r))})}#k(t){if(this.#r!==t)return;if(this.#n){this.#y(t,void 0,new S("scene-parser-disposed"));return}if(t.signal?.aborted){this.#y(t,void 0,new DOMException("Aborted","AbortError"));return}!this.#e&&!this.#o&&this.#f();let e=this.#e;if(e){t.worker=e;try{let n,o;if(t.message.kind==="parse")n={id:t.id,kind:t.message.kind,buffer:t.message.buffer},o=[t.message.buffer];else{if(!t.base)throw new S("invalid-scene-delta");let i={...t.base,buffer:t.base.buffer.slice(0)};n={id:t.id,kind:t.message.kind,payload:t.message.payload,base:i},o=[t.message.payload,i.buffer]}e.postMessage(n,o)}catch{this.#c(e)}return}let s=new AbortController;this.#s=s,Promise.resolve().then(()=>t.fallback(s.signal)).then(n=>this.#y(t,n),n=>this.#y(t,void 0,n))}#_(t){let e=new DOMException("Aborted","AbortError");if(this.#i===t){this.#i=null,t.settle(void 0,e);return}this.#r===t&&(t.worker?(this.#b(),this.#y(t,void 0,e)):this.#s?.abort())}#y(t,e,s){if(this.#r!==t){t.settle(void 0,new S("scene-parser-disposed"));return}let n=t.signal?.aborted?new DOMException("Aborted","AbortError"):s;t.settle(e,n),this.#r=null,this.#s=null,t.worker=null,this.#n||this.#m()}#m(){if(this.#n||this.#r||!this.#i)return;let t=this.#i;if(this.#i=null,t.signal?.aborted){t.settle(void 0,new DOMException("Aborted","AbortError")),this.#m();return}this.#r=t,this.#k(t)}#c(t){if(this.#e!==t)return;this.#o=!0,this.#b();let e=this.#r;e?.worker===t?this.#y(e,void 0,new S("scene-worker-failed")):this.#m()}#b(){this.#e?.terminate(),this.#e=null}dispose(){if(this.#n)return;this.#n=!0;let t=this.#i;this.#i=null,t?.settle(void 0,new S("scene-parser-disposed"));let e=this.#r;this.#b(),this.#s?.abort(),this.#s=null,e&&(e.worker=null,e.settle(void 0,new S("scene-parser-disposed"))),this.#r=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}};var ct=["catalog","scene","sceneDelta","pose","history","plans","areas","areaSave","areaDelete"];var dt=()=>({requests:0,completed:0,failed:0,aborted:0,timedOut:0,totalDurationMs:0,maxDurationMs:0}),Ps=a=>Math.min(1e9,a+1),xs=a=>Number.isFinite(a)?Math.min(1e12,Math.max(0,a)):0,le=class{#e=dt();#t=!1;record(t,e){if(this.#t)return;let s=Math.round(xs(e)*100)/100;this.#e.requests=Ps(this.#e.requests),this.#e[t]=Ps(this.#e[t]),this.#e.totalDurationMs=xs(this.#e.totalDurationMs+s),this.#e.maxDurationMs=Math.max(this.#e.maxDurationMs,s)}snapshot(){return Object.freeze({...this.#e})}reset(){this.#t||Object.assign(this.#e,dt())}dispose(){this.#t=!0,Object.assign(this.#e,dt())}},De=class{#e=Object.fromEntries(ct.map(t=>[t,new le]));#t=!1;record(t,e,s){this.#t||this.#e[t].record(e,s)}snapshot(){let t=Object.fromEntries(ct.map(e=>[e,this.#e[e].snapshot()]));return Object.freeze(t)}dispose(){if(!this.#t){this.#t=!0;for(let t of ct)this.#e[t].dispose()}}};var H={catalog:1e4,scene:6e4,delta:35e3,pose:1e4,history:15e3,workflow:15e3,mutation:2e4,roomPreview:15e3},dn=2,fe=new WeakMap,x=class extends Error{constructor(t,e=null){super(t),this.name="BackendError",this.code=t,this.status=e}},As=(a,t)=>{let e=a.headers.get("X-Matic-Revision");if(e===null)return t;let s=Number(e);if(!Number.isSafeInteger(s)||s<0)throw new S("invalid-scene-revision");return s},Ts=(a,t)=>{let e=a.headers.get("X-Matic-Floor-Coherent");if(e===null)return t;if(e==="1")return!0;if(e==="0")return!1;throw new S("invalid-scene-floor-header")},Le=class{#e;#t=new Oe;#o=new WeakMap;#n=new Set;#a=new De;#r=!1;constructor(t){this.#e=t}requestDiagnostics(){return this.#a.snapshot()}async#i(t,e,s=Number.POSITIVE_INFINITY,n="invalid-response-size"){let o=t.body?.getReader();if(!o)return new ArrayBuffer(0);let i=()=>{o.cancel().catch(()=>{})};e.addEventListener("abort",i,{once:!0});try{if(e.aborted)throw i(),new DOMException("Aborted","AbortError");let r=[],l=0;for(;;){let u=await o.read();if(e.aborted)throw new DOMException("Aborted","AbortError");if(u.done)break;if(l+u.value.byteLength>s)throw o.cancel().catch(()=>{}),new S(n);r.push(u.value),l+=u.value.byteLength}let c=new Uint8Array(l),d=0;for(let u of r)c.set(u,d),d+=u.byteLength;return c.buffer}finally{e.removeEventListener("abort",i),o.releaseLock()}}async#s(t,e,s,n,o,i){if(!Jt(e))throw new x("invalid-private-path");if(o?.aborted)throw new DOMException("Aborted","AbortError");let r=performance.now(),l="failed",c=new AbortController,d=()=>{},u=new Promise((v,y)=>{d=y}),p=()=>{c.abort(),d(new DOMException("Aborted","AbortError"))};o?.addEventListener("abort",p,{once:!0});let h=!1,f=window.setTimeout(()=>{h=!0,p()},n);try{let v=this.#e(),y=new Headers(s.headers),b={...s,cache:"no-store",credentials:"same-origin",headers:Object.fromEntries(y.entries()),signal:c.signal},R=async()=>{let g;if(typeof v?.fetchWithAuth=="function")g=await v.fetchWithAuth(e,b);else{let E=v?.auth?.accessToken||v?.auth?.data?.access_token;E&&y.set("Authorization",`Bearer ${E}`);let C=typeof v?.hassUrl=="function"?v.hassUrl(e):e;g=await fetch(C,{...b,headers:y})}try{if(c.signal.aborted)throw new DOMException("Aborted","AbortError");return await i(g,c.signal)}finally{g.body&&!g.body.locked&&g.body.cancel().catch(()=>{})}},k=await Promise.race([R(),u]);return l="completed",k}catch(v){throw h&&!o?.aborted?(l="timedOut",new x("request-timeout")):c.signal.aborted?(l="aborted",new DOMException("Aborted","AbortError")):v}finally{window.clearTimeout(f),o?.removeEventListener("abort",p),this.#a.record(t,l,performance.now()-r)}}async#u(t,e,s,n,o={}){return this.#s(t,e,{...o,headers:{Accept:"application/json",...o.headers||{}}},s,n,async(i,r)=>{if(!i.ok){let l=i.headers.get("X-Matic-Plans-Conflict");throw new x(l==="map-rechecking"?"map-rechecking":"request-failed",i.status)}try{return JSON.parse(new TextDecoder().decode(await this.#i(i,r)))}catch{throw new S("invalid-json-response")}})}async catalog(t){return xe(await this.#u("catalog",Nt,H.catalog,t))}async scene(t,e,s,n,o,i){let r=new Headers({Accept:"application/vnd.matic.slam-scene"});return n==="live"&&r.set("X-Matic-Prefer-Cached","1"),i&&r.set("If-None-Match",i),this.#s("scene",t,{headers:r},H.scene,o,async(l,c)=>{let d=As(l,e),u=Ts(l,s);if(l.status===304)return{scene:null,floorCoherent:u,revision:d,notModified:!0};if(!l.ok)throw new x("scene-request-failed",l.status);if(l.headers.get("Content-Type")?.split(";",1)[0]!=="application/vnd.matic.slam-scene")throw new S("invalid-scene-content-type");return{scene:{...await this.#t.parse(await this.#i(l,c,ie,"invalid-scene-size"),c),revision:d,etag:l.headers.get("ETag"),source:n},floorCoherent:u,revision:d,notModified:!1}})}async sceneDelta(t,e,s,n){let o=t.includes("?")?"&":"?";return this.#s("sceneDelta",`${t}${o}since=${encodeURIComponent(e.revision)}`,{headers:{Accept:"application/vnd.matic.slam-delta, application/vnd.matic.slam-scene"}},H.delta,n,async(i,r)=>{let l=As(i,e.revision),c=Ts(i,s);if(i.status===204){if(l!==e.revision)throw new S("invalid-scene-delta-revision");return{scene:null,floorCoherent:c,revision:l,notModified:!0}}if(!i.ok)throw new x("delta-request-failed",i.status);if(l<=e.revision)throw new S("invalid-scene-delta-revision");let d=i.headers.get("Content-Type")?.split(";",1)[0];if(d!=="application/vnd.matic.slam-delta"&&d!=="application/vnd.matic.slam-scene")throw new S("invalid-scene-delta-content-type");let u=d==="application/vnd.matic.slam-delta",p=u?me+re:ie,h=Number(i.headers.get("Content-Length"));if(Number.isFinite(h)&&h>p)throw new S(u?"invalid-scene-delta-size":"invalid-scene-size");let f=await this.#i(i,r,p,u?"invalid-scene-delta-size":"invalid-scene-size");if(u){let y=Number(i.headers.get("X-Matic-Base-Revision"));if(!Number.isSafeInteger(y)||y!==e.revision)throw new S("invalid-scene-delta-base");let b=await this.#t.decodeDelta(f,e,r);if(b.revision!==l)throw new S("invalid-scene-delta-revision");return{scene:{...b.parsed,revision:l,etag:i.headers.get("ETag"),source:"live",...b.deltaHint?{deltaHint:b.deltaHint}:{}},floorCoherent:c,revision:l,notModified:!1}}return{scene:{...await this.#t.parse(f,r),revision:l,etag:i.headers.get("ETag"),source:"live"},floorCoherent:c,revision:l,notModified:!1}})}async pose(t,e){return Qt(await this.#u("pose",t,H.pose,e))}async history(t,e){return Vt(await this.#u("history",t,H.history,e))}async plans(t,e){return Gt(await this.#u("plans",t,H.workflow,e))}async areas(t,e){return Yt(await this.#u("areas",t,H.workflow,e))}async previewRoomSequence(t,e,s,n){if(!t||t.length>255||e.length<1||e.length>100)throw new S("invalid-room-sequence-preview-request");if(n?.aborted)throw new DOMException("Aborted","AbortError");let o=this.#e()?.connection;if(!o?.sendMessagePromise)throw new x("preview-unavailable");let i=null,r=()=>{},l=new Promise((b,R)=>{r=R}),c=this.#o.get(o),d,u=new Promise(b=>{d=b});this.#o.set(o,u);let p=!1,h=()=>{p||(p=!0,d(),this.#o.get(o)===u&&this.#o.delete(o))},f=!1,v=()=>{r(new DOMException("Aborted","AbortError")),f&&(h(),i!==null&&window.clearTimeout(i),i=null)};n?.addEventListener("abort",v,{once:!0});let y=new Promise((b,R)=>{i=window.setTimeout(()=>{i=null,R(new x("preview-timeout"))},H.roomPreview)});y.catch(()=>{f&&h()});try{if(c&&(await Promise.race([c,l,y]),n?.aborted))throw new DOMException("Aborted","AbortError");let b=fe.get(o)??0;if(b>=dn)throw new x("preview-unavailable");let R=o.sendMessagePromise({type:"call_service",domain:"matic_robot",service:"preview_room_sequence",target:{entity_id:t},service_data:{rooms:e.map(C=>({room:C.room,cleaning_mode:C.cleaning_mode,coverage_setting:C.coverage_setting})),use_room_schedule:!0,override_room_schedule:s},return_response:!0});fe.set(o,b+1),f=!0;let k=!1,g=()=>{if(!k){k=!0;let C=(fe.get(o)??1)-1;C===0?fe.delete(o):fe.set(o,C)}h(),i!==null&&window.clearTimeout(i),i=null};R.then(g,g);let E=await Promise.race([R,l,y]);if(n?.aborted)throw new DOMException("Aborted","AbortError");if(!E||typeof E!="object"||Array.isArray(E)||!("response"in E))throw new S("invalid-room-sequence-preview-envelope");return jt(E.response)}finally{f||(c?c.then(h,h):h(),i!==null&&window.clearTimeout(i),i=null),n?.removeEventListener("abort",v)}}async saveArea(t,e,s){let n=await this.#u("areaSave",t,H.mutation,s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e.areaId?{area_id:e.areaId}:{},name:e.name,circles:e.circles,...e.outline?.closed?{outline:e.outline.points}:{},cleaning_mode:e.cleaningMode,coverage_setting:e.coverageSetting})});if(!n||typeof n!="object"||typeof n.id!="string")throw new S("invalid-area-save-response");return n.id}async deleteArea(t,e,s){await this.#s("areaDelete",`${t}?area_id=${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json"}},H.mutation,s,async n=>{if(!n.ok)throw new x("area-delete-failed",n.status)})}async service(t,e,s,n,o={}){let i=this.#e();if(this.#r||typeof i?.callService!="function")throw new x("service-unavailable");let r=null,l=null;try{let c=o.returnResponse?i.callService(t,e,s,{entity_id:n},!0,!0):i.callService(t,e,s,{entity_id:n});return!o.returnResponse&&!o.acknowledgementTimeout?await c:await Promise.race([c,new Promise((d,u)=>{l=()=>{r!==null&&window.clearTimeout(r),r=null,u(new DOMException("Aborted","AbortError"))},this.#n.add(l),r=window.setTimeout(()=>u(new x("mutation-timeout")),H.mutation)})])}finally{r!==null&&window.clearTimeout(r),l&&this.#n.delete(l)}}dispose(){if(!this.#r){this.#r=!0,this.#a.dispose();for(let t of this.#n)t();this.#n.clear(),this.#t.dispose()}}};var $s=()=>({version:4,view:"top",appearance:"photo",labels:!0,quality:"auto",cameras:{}}),ve=(a,t,e)=>Math.max(t,Math.min(e,a)),Os=a=>a.replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",ut=(a,t=4)=>`matic-map-studio:v${t}:${Os(a)}`,un=a=>{if(!a||typeof a!="object")return null;let t=a;return["yaw","pitch","zoom","targetX","targetZ"].every(s=>typeof t[s]=="number"&&Number.isFinite(t[s]))?{yaw:ve(t.yaw,-Math.PI,Math.PI),pitch:ve(t.pitch,.18,Math.PI/2-.018),zoom:ve(t.zoom,.01,100),targetX:ve(t.targetX,-1e4,1e4),targetZ:ve(t.targetZ,-1e4,1e4)}:null},Is=a=>{let t=$s();if(!a||typeof a!="object")return t;let e=a,s=e.view==="three"||e.view==="top"||e.view==="rooms"?e.view:t.view,n=s==="rooms"?"top":s,o=e.quality==="auto"||e.quality==="efficient"||e.quality==="balanced"||e.quality==="maximum"?e.quality:t.quality,i=e.cameras&&typeof e.cameras=="object"?e.cameras:{},r={};for(let l of["three","top"]){let c=un(i[l]);c&&(r[l]=c)}return{version:4,view:n,appearance:e.appearance==="rooms"||e.appearance==="photo"?e.appearance:t.appearance,labels:typeof e.labels=="boolean"?e.labels:t.labels,quality:o,cameras:r}},We=class{#e="local-user";#t=null;#o=null;load(t){this.#n(),this.#e=Os(t);try{let e=window.localStorage.getItem(ut(this.#e));if(e)return Is(JSON.parse(e));for(let s of[3,2]){let n=window.localStorage.getItem(ut(this.#e,s));if(n)return Is(JSON.parse(n))}}catch{}return $s()}schedule(t){this.#t!==null&&window.clearTimeout(this.#t),this.#o={key:ut(this.#e),value:t},this.#t=window.setTimeout(()=>this.#n(),250)}#n(){this.#t!==null&&window.clearTimeout(this.#t),this.#t=null;let t=this.#o;if(this.#o=null,!!t)try{window.localStorage.setItem(t.key,JSON.stringify(t.value))}catch{}}dispose(){this.#n()}};var pt=1,ce=Number.MAX_SAFE_INTEGER,zs=Number.MAX_SAFE_INTEGER,Ds=64,hn=1e12,ht=4,Ls=16*1024,pn=250,mn=4e3,qe=3e4;function q(a){return a!==null&&typeof a=="object"&&!Array.isArray(a)?a:null}function Y(a,t){return typeof a=="number"&&Number.isSafeInteger(a)&&a>=0&&a<=t}function Hs(a){let t=q(a);if(!t)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,zs))return null;e[s]=n}return e}function fn(a){let t=q(a);if(!t||Object.keys(t).length>128)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,zs))return null;e[s]=n}return e}function Bs(a){return typeof a=="string"&&a.length>0&&a.length<=256?a:Y(a,ce)?String(a):null}function vn(a){let t=q(a),e=Bs(t?.epoch);if(!t||t.schema!==pt||e===null)return null;let s=fn(t.capabilities),n=Hs(t.revisions);return!s||!n||!Y(t.sequence,ce)||!Y(t.coherence_generation,ce)||t.coherence_generation===0?null:{schema:t.schema,capabilities:s,epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:n}}function Ws(a,t){let e=q(a),s=vn(e?.snapshot??a);if(!s)return null;let n=q(e?.snapshot??a);if(!n||!("payload"in n))return null;let o=n.entry_id,i=q(n.identity),r=q(n.status),l=q(n.payload),c=r?r.reason===null?null:Ns(r.reason):null,d=l?.available,u=null;if(l?.entry!==void 0&&l.entry!==null){if((()=>{try{return JSON.stringify(l.entry).length}catch{return Ls+1}})()>Ls)return null;try{u=xe({entries:[l.entry]})[0]??null}catch{return null}}let p=r?.state;return typeof o!="string"||o.length===0||o.length>128||t!==void 0&&o!==t||!i||i.entry_id!==o||i.floor_mission_id!==null&&!Y(i.floor_mission_id,ce)||typeof i.floor_verified!="boolean"||i.floor_verified!==(i.floor_mission_id!==null)||!r||p!=="ready"&&p!=="stale"&&p!=="unavailable"||r.reason!==null&&c===null||typeof r.retryable!="boolean"||typeof d!="boolean"||u!==null&&u.entryId!==o||p==="ready"&&(c!==null||r.retryable||!d)||(p==="stale"||p==="unavailable")&&(c===null||d)||c==="authorization"&&r.retryable?null:{...s,entry_id:o,identity:{entry_id:o,floor_mission_id:i.floor_mission_id,floor_verified:i.floor_verified},status:{state:p,reason:c,retryable:r.retryable},payload:{available:d,entry:u}}}function qs(a){let t=q(a),e=Bs(t?.epoch),s=Hs(t?.revisions),n=t?.resources;return e===null||!s||!Y(t?.sequence,ce)||!Y(t?.coherence_generation,ce)||t.coherence_generation===0||!Array.isArray(n)||n.length>128||!n.every(o=>typeof o=="string"&&o.length<=128)?null:{epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:s,resources:n}}var ze=["gap","overflow","reconnect","invalid_message","server_request","restart","entry_removed","authorization","snapshot_required"];function Ns(a){return typeof a=="string"&&ze.includes(a)?a:null}function yn(a){let t=q(a);return t?.name==="AbortError"?"aborted":t?.name==="TimeoutError"?"timedOut":"failed"}function gn(){return Object.fromEntries(ze.map(a=>[a,new le]))}var He=class{#e;#t;#o;#n=null;#a=!1;#r=!1;#i=!1;#s=!1;#u=!1;#f=!1;#d=0;#k=!1;#_=!1;#y=!1;#m=!1;#c=null;#b=null;#w=0;#M=!1;#R=null;#v=-1;#h=new Map;#C=!1;#I=!1;#K=null;#l=[];#B=new le;#S=gn();#P=null;#g=null;#$=null;constructor(t,e){this.#e=t,this.#t=e,this.#o=Math.max(1,Math.min(Ds,e.maxPendingInvalidations??Ds))}async start(){if(!(this.#a||this.#I)){this.#I=!0;try{await this.#Y(!1)}catch(t){this.#oe(t),this.#E("reconnect")}}}notifyReconnect(){(this.#s||this.#f)&&(this.#D(),this.#Q("aborted"),this.#d+=1),this.#w=0,this.#k=!1,this.#s=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.requestResync("reconnect"),this.#i&&this.#N(0,!0)}requestResync(t="server_request"){this.#E(t,!0)}diagnostics(){let t=Object.fromEntries(ze.map(s=>[s,this.#S[s].snapshot()])),e=this.#g!==null&&this.#$!==null?Object.freeze({reason:this.#g,durationMs:Math.round(Math.min(hn,Math.max(0,performance.now()-this.#$))*100)/100}):null;return Object.freeze({snapshotAttempts:this.#B.snapshot(),recoveryEpisodes:Object.freeze(t),activeRecovery:e})}dispose(){if(!this.#a){this.#a=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#i=!1,this.#n?.(),this.#n=null,this.#h.clear(),this.#l=[],this.#P=null,this.#g=null,this.#$=null,this.#B.dispose();for(let t of ze)this.#S[t].dispose()}}#U(t){if(this.#a)return;let e=q(t),s=q(e?.event)??e,n=s?.type;if(n==="resync"){let i=Ns(s?.reason);if(!i){this.#E("invalid_message");return}if(i==="entry_removed"){this.#t.onEvent({type:"resync",reason:i}),this.dispose();return}this.#E(i);return}if(this.#s){if(n==="invalidate"){let i=qs(s?.invalidation??s);i?this.#j(i):(this.#l=[],this.#M=!0)}return}let o=n==="snapshot"?Ws(s?.snapshot??s,this.#t.entryId):n==="invalidate"?qs(s?.invalidation??s):null;if(!o){this.#E("invalid_message");return}if(n==="snapshot"){let i=o;if(this.#i)return;if(this.#R!==null&&i.epoch!==this.#R){this.#E("restart");return}this.#W(i);return}this.#V(o)}#W(t){this.#R===t.epoch&&t.sequence<this.#v||(this.#R=t.epoch,this.#v=t.sequence,this.#h.clear(),this.#t.onEvent({type:"snapshot",snapshot:t}))}#re(t){let e=this.#l;if(this.#l=[],this.#W(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(o=>o.epoch===t.epoch&&o.sequence>=s),this.#E("gap");return}this.#V(n),s+=1}}#V(t){if(this.#i){this.#j(t);return}if(this.#R===null){this.#j(t);return}if(this.#R!==t.epoch){this.#j(t),this.#E("reconnect");return}if(!(t.sequence<=this.#v)){if(t.sequence!==this.#v+1){this.#j(t),this.#E("gap");return}this.#v=t.sequence;for(let e of t.resources)this.#h.set(e,t);if(this.#h.size>this.#o){this.#h.clear(),this.#E("overflow");return}this.#C||(this.#C=!0,queueMicrotask(()=>this.#me()))}}#j(t){this.#l.length>=this.#o?(this.#l=[],this.#M=!0,this.#E("overflow")):this.#l.push(t)}#me(){if(this.#C=!1,this.#a||this.#s||this.#h.size===0){this.#s&&this.#h.clear();return}let t=[...this.#h.values()];this.#h.clear();let e=t.reduce((n,o)=>!n||o.sequence>n.sequence?o:n,null);if(!e)return;let s=[...new Set(t.flatMap(n=>n.resources))];this.#t.onEvent({type:"invalidation",invalidation:{...e,resources:s}})}#E(t,e=!1){if(!this.#a){if(t==="authorization"){this.#q(),this.#t.onEvent({type:"resync",reason:t});return}if(!this.#s&&(this.#O(t),this.#r||(this.#r=!0,this.#t.onEvent({type:"resync",reason:t}),queueMicrotask(()=>{this.#r=!1})),t!=="entry_removed")){let s=e&&!this.#k;if(s&&(this.#k=!0),s&&this.#c!==null&&(window.clearTimeout(this.#c),this.#c=null),this.#y){if(this.#m){s&&this.#N(0,!0);return}this.#m=!0,this.#T(s);return}if(e&&this.#i){s&&(this.#_=!0);return}let n=this.#w>=ht?qe:0;this.#N(s?0:n,s)}}}#N(t,e=!1){if(!this.#a){if(this.#c!==null){if(!e)return;window.clearTimeout(this.#c),this.#c=null}if(this.#i){this.#b=e?t:Math.max(this.#b??0,t);return}this.#c=window.setTimeout(()=>{this.#c=null,this.#Y(!0)},t)}}#T(t=!1){let e=this.#w>=ht?qe:Math.min(pn*2**this.#w,mn);this.#w<ht&&(this.#w+=1),this.#N(t?0:e,t)}async#Y(t,e=!1){if(this.#a||this.#i)return;t&&this.#O(e?"authorization":"snapshot_required");let s=this.#d;this.#i=!0,this.#f=e;try{if(t&&await this.#p(),this.#a||this.#s&&!e||s!==this.#d)return;let n={startedAt:performance.now(),generation:s};this.#P=n;let o="completed",i;try{i=await this.#e.sendMessagePromise({type:"matic_robot/workspace_snapshot",version:pt,entry_id:this.#t.entryId})}catch(c){throw o=yn(c),c}finally{this.#ve(n,o)}if(this.#a||this.#s&&!e||s!==this.#d)return;let r=Ws(i,this.#t.entryId);if(!r)throw new Error("invalid-workspace-snapshot");if(r.status.reason==="authorization"){this.#q(),this.#t.onEvent({type:"snapshot",snapshot:r});return}if(r.status.state!=="ready"&&r.status.retryable)throw new Error("workspace-snapshot-retryable");e&&(this.#s=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null),this.#i=!1,this.#y=!0,this.#m=!1;try{t?this.#ee(r):this.#re(r)}finally{this.#y=!1}let l=this.#m||this.#M;this.#m?this.#_&&(this.#_=!1,this.#N(0,!0)):(this.#w=0,this.#k=!1,this.#_=!1),!t&&!this.#a&&await this.#p(),this.#M&&(this.#M=!1,this.#E("overflow")),t&&r.status.state==="ready"&&!l&&!this.#a&&s===this.#d&&this.#Q("completed")}catch(n){if(this.#a||this.#s&&!e||s!==this.#d)return;if(this.#oe(n),this.#fe(n))this.#q(),this.#t.onEvent({type:"resync",reason:"authorization"});else if(!e){t||this.#O("reconnect");let o=this.#_;this.#_=!1,this.#T(o)}}finally{this.#i=!1,this.#f=!1,this.#u?(this.#u=!1,this.#z(0)):e&&this.#s&&this.#z(qe);let n=this.#b;this.#b=null,n!==null&&this.#N(n)}}async#p(){if(this.#a||this.#n)return;if(this.#K)return this.#K;let t=(async()=>{let e=await this.#e.subscribeMessage(s=>this.#U(s),{type:"matic_robot/workspace_subscribe",version:pt,entry_id:this.#t.entryId});this.#a?e():this.#n=e})();this.#K=t;try{await t}finally{this.#K===t&&(this.#K=null)}}#ee(t){let e=this.#l;if(this.#l=[],this.#R===t.epoch&&t.sequence<this.#v){this.#l=e,this.#E("snapshot_required");return}if(this.#W(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(o=>o.sequence>=s),this.#E("gap");return}this.#V(n),s+=1}}#fe(t){let e=q(t),s=e?.code,n=e?.status??e?.statusCode;return s==="unauthorized"||s==="not_authorized"||s==="auth_invalid"||n===401||n===403}#O(t){this.#g!==null||this.#a||(this.#g=t,this.#$=performance.now())}#Q(t){let e=this.#g,s=this.#$;this.#g=null,this.#$=null,!(e===null||s===null||this.#a)&&this.#S[e].record(t,performance.now()-s)}#ve(t,e){this.#P!==t||this.#a||t.generation!==this.#d||(this.#P=null,this.#B.record(e,performance.now()-t.startedAt))}#D(){let t=this.#P;t!==null&&(this.#P=null,!this.#a&&t.generation===this.#d&&this.#B.record("aborted",performance.now()-t.startedAt))}#q(){this.#D(),this.#Q("failed"),this.#d+=1,this.#s||(this.#s=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#u=!1),this.#h.clear(),this.#l=[],this.#M=!1,this.#b=null,this.#w=0,this.#k=!1,this.#_=!1,this.#f||this.#z(qe)}#z(t){this.#a||this.#c!==null||this.#u||(this.#c=window.setTimeout(()=>{if(this.#c=null,!this.#a){if(this.#i){this.#u=!0;return}this.#Y(!0,!0)}},t))}#oe(t){this.#t.onError?.(t instanceof Error?t:new Error("Workspace transport failed"))}};var Be=class{#e;#t;#o=document.visibilityState!=="hidden";#n=!1;#a=!1;#r=!1;constructor({onSuspend:t,onResume:e}){this.#e=t,this.#t=e}get active(){return this.#o}start(){this.#n||this.#a||(this.#n=!0,window.addEventListener("pagehide",this.#i),window.addEventListener("pageshow",this.#s),document.addEventListener("visibilitychange",this.#u),document.visibilityState==="hidden"&&(this.#o?this.#d(!1):this.#e()))}dispose(){this.#a||(this.#a=!0,this.#n&&(window.removeEventListener("pagehide",this.#i),window.removeEventListener("pageshow",this.#s),document.removeEventListener("visibilitychange",this.#u)))}#i=()=>{this.#r=!0,this.#d(!1)};#s=t=>{if(this.#r=!1,t.persisted){document.visibilityState==="hidden"?this.#d(!1):(this.#d(!1),this.#d(!0));return}this.#f()};#u=()=>{this.#f()};#f(){if(this.#r||document.visibilityState==="hidden"){this.#d(!1);return}this.#d(!0)}#d(t){this.#o===t||this.#a||(this.#o=t,t?this.#t():this.#e())}};var m=(a,t,e=null)=>({status:a,value:t,problem:e}),ye=a=>a.status==="loading"?m("idle",a.value):a,z=a=>a instanceof DOMException&&a.name==="AbortError",bn={notice:P,parseSavedPlanId:Xt,BackendError:x,isAbort:z,canEditCoordinates:Ge,initialWorkspaceState:V,draftForPlan:Xe,hasStoppableWork:Dt},K=(a,t)=>a instanceof x||a&&typeof a=="object"&&"code"in a&&typeof a.code=="string"?a.code:t,I={stopUnconfirmed:P("error","v4_notice_stop_unconfirmed","Home Assistant can't confirm the robot stopped, so press Stop again if it's still moving."),actionUnconfirmed:P("error","v4_notice_action_unconfirmed","Home Assistant can't confirm that command, so check the robot before trying again."),mapChanged:P("info","v4_notice_map_changed","The map changed, so choose what to clean again."),statusRefreshed:P("info","v4_notice_status_refreshed","Status refreshed, so check the robot before trying again."),planSaveFailed:P("error","v4_notice_plan_save_failed","Home Assistant can't confirm the plan was saved, so check your plans, then try again."),planDeleteFailed:P("error","v4_notice_plan_delete_failed","The plan wasn't deleted; try again."),planPreviewMissing:P("warning","v4_notice_plan_preview_missing","The next-run preview isn't ready; reload your plans, then try again."),planPreviewRefreshFailed:P("warning","v4_notice_plan_preview_refresh_failed","The next-run preview didn't refresh; check the plan, then try again."),planPreviewNone:P("warning","v4_notice_plan_preview_none","This plan has no next-run preview; review its rooms and schedules."),planPreviewChanged:P("info","v4_notice_plan_preview_changed","The next run changed; check it before you run the plan."),roomPreviewBlocked:P("warning","v4_notice_room_preview_blocked","A room can't use these settings, so check the note above the rooms."),roomPreviewChanged:P("info","v4_notice_room_preview_changed","The room settings changed, so check them and start again."),roomPreviewFailed:P("warning","v4_notice_room_preview_failed","Home Assistant couldn't check the room settings, so try starting again."),areaRemoved:P("warning","v4_notice_area_removed","This saved area was removed elsewhere. Your edits are kept as a new draft; saving will create a new area."),areaSaveFailed:P("error","v4_notice_area_save_failed","Home Assistant can't confirm the area was saved, so try again."),areaDeleteFailed:P("error","v4_notice_area_delete_failed","Home Assistant can't confirm the area was deleted, so try again."),resetMopFailed:P("error","v4_notice_reset_mop_failed","Mopping progress wasn't reset; try again."),resetVacuumFailed:P("error","v4_notice_reset_vacuum_failed","Vacuum rotation progress wasn't reset; try again.")},wn=a=>P("warning","v4_notice_saved_map","Showing the saved map from {date} without the robot's position.",{date:{date:a}}),Fs={coverage_identity_unavailable:P("error","v4_notice_coverage_task_unknown","Home Assistant can't confirm the current clean, so check the robot first."),coverage_activity_unavailable:P("error","v4_notice_coverage_activity_unknown","Home Assistant can't confirm whether the robot is cleaning, so check it first."),coverage_native_session_active:P("error","v4_notice_coverage_robot_busy","The robot is already cleaning, so wait for it to finish."),coverage_identity_changed:P("error","v4_notice_coverage_task_changed","The clean changed while starting, so check the robot first.")},_n=a=>{let{translation_domain:t,translation_key:e}=a??{};return t==="matic_robot"&&typeof e=="string"&&Object.hasOwn(Fs,e)?Fs[e]??null:null},de=a=>[a.selectedFloorOrdinal??"none",a.mapFloorOrdinal??"none",a.mapFloorCoherent?"coherent":"transition"].join(":"),ue=a=>[a.mapFloorOrdinal??"none",a.mapSessionVerified?"verified":"unverified",a.mapSessionKey??"no-session"].join(":"),F=a=>[a.entryId,a.selectedFloorOrdinal??"none",a.mapFloorOrdinal??"none"].join("|"),A=a=>[a.entryId,de(a),ue(a)].join("|"),mt=a=>[A(a),a.mapRevision].join("|"),Ne=a=>a.runnerLocked||a.stopSettlePending||a.activePlan||a.nativeReconciliationPending||a.nativeSessionActive===!0,Fe=(a,t)=>a.entryKey===t.entryKey&&a.generation===t.generation&&a.floorKey===t.floorKey&&a.missionKey===t.missionKey,kn=1e3,Rn=5e3,Ks=["rooms","plans","plan","draw","areaReview"],Us=["plan-mutation","area-mutation"],Vs=a=>JSON.stringify({...a,previewToken:void 0}),Ke=(a,t)=>a.label?a.label:a.active?"Current floor":`Saved floor ${a.ordinal??t}`,Ue=class{#e;#t;#o;#n;#a=new We;#r=null;#i=new Map;#s=null;#u=null;#f=null;#d=null;#k=0;#_=!1;#y=!1;#m=!1;#c=!1;#b=null;#w=Promise.resolve();#M=!1;#R=!1;#v="";#h=null;#C=0;#I=null;#K="";#l=!1;#B=!0;#S=null;#P=null;#g=null;#$=null;#U="";#W=!1;#re=null;#V;#j;workspaceDiagnostics(){return this.#S?.diagnostics()??null}constructor(t,e,s=null,n){this.#e=t,this.#t=new $t(t.value.generation),this.#o=e,this.#V=s,this.#j=n,this.#n=new Be({onSuspend:()=>this.#me(),onResume:()=>{this.#E()}}),this.#e.patch({pageActive:this.#n.active}),this.#$=t.subscribe(o=>{this.#N(o),this.#ee()}),this.#n.start()}#me(){this.#D(!1,Us),this.#H(),this.#F(Us),this.#m=!1,this.#c=!1,this.#b=null,this.#R=!1,this.#Z();let t=this.#e.value;this.#e.patch({resources:{...t.resources,catalog:ye(t.resources.catalog),scene:ye(t.resources.scene),history:ye(t.resources.history),plans:ye(t.resources.plans),areas:ye(t.resources.areas),pose:m("idle",null)}})}async#E(){if(this.#l||!this.#n.active)return;this.#e.patch({pageActive:!0});let t=this.#s;if(this.#l||!this.#n.active||!t?.host.connected||!t.host.administrator||!t.host.robotConnected||t.host.robotCount===0)return;let e=this.#e.value;this.#ae(),this.#O(t),await this.refreshCatalog(!0,!0);let s=this.#e.value,n=s.resources.entry;if(this.#l||!this.#n.active||e.dataMode!=="history"||s.generation!==e.generation||s.dataMode!=="history"||s.selection.entryId!==e.selection.entryId||s.selection.floorId!==e.selection.floorId||s.selection.historyId!==e.selection.historyId||s.resources.catalog.status!=="ready"||!n||n.entryId!==s.selection.entryId)return;let o=s.resources.history.value?.floors.find(u=>u.id===s.selection.floorId),i=o?.snapshots.find(u=>u.id===s.selection.historyId);if(!o)return;let r=this.#t.begin(n.entryId,o.id,i?.id??o.id,i?.revision??0);if(this.#e.patch({generation:r.generation}),await this.#ne(n,r),!this.#t.accepts(r)||!this.#n.active||this.#e.value.resources.history.status!=="ready")return;let l=this.#e.value,c=l.resources.history.value?.floors.find(u=>u.id===o.id),d=c?.snapshots.find(u=>u.id===i?.id);!c||i&&!d||(d&&d.revision!==r.revision&&(r=this.#t.begin(n.entryId,o.id,d.id,d.revision)),this.#e.patch({generation:r.generation,coherence:"current"}),d&&(!l.resources.scene.value||d.revision!==i?.revision)&&await this.#we(d,r))}#N(t){if(!t.owner)return;let e={version:4,view:t.view,appearance:t.appearance,labels:t.labelsVisible,quality:t.quality,cameras:t.cameras},s=this.#r;this.#r=e,!(!s||s.view===e.view&&s.appearance===e.appearance&&s.labels===e.labels&&s.quality===e.quality&&s.cameras===e.cameras)&&this.#a.schedule(e)}#T(t){let e=xt(t),s=t.resources.entry,n=this.#s?.vacuumEntityId;if(!e||!s||!n||!t.selection.entryId||t.workflow!=="rooms"||t.dataMode!=="live"||t.floor.readOnly||t.coherence!=="current"||!t.host.connected||!t.host.administrator||!t.host.robotConnected||t.command!=="idle"||t.resources.plans.status!=="ready")return null;let o=t.selection.roomIds.map(i=>{let r=t.selection.roomSettings.find(l=>l.roomId===i);return r?{room:i,cleaning_mode:r.cleaningMode,coverage_setting:r.coverageSetting}:null});return o.some(i=>i===null)?null:{key:e,generation:t.generation,retryRevision:t.manualRoomPreviewRetry,floorKey:de(s),missionKey:ue(s),entryId:t.selection.entryId,entityId:n,rooms:o,overrideRoomSchedule:!t.selection.useRoomSchedule}}#Y(t){return JSON.stringify([t.key,t.generation,t.retryRevision,t.floorKey,t.missionKey,t.entryId,t.entityId])}#p(t){let e=this.#T(this.#e.value);return!this.#l&&e!==null&&this.#Y(e)===this.#Y(t)}#ee(){if(this.#l||!this.#s)return;let t=this.#e.value,e=this.#T(t);if(!e){this.#i.get("room-preview")?.abort(),this.#i.delete("room-preview"),this.#U="",(t.manualRoomPreview.status!=="idle"||t.manualRoomPreview.value!==null)&&this.#e.patch({manualRoomPreview:m("idle",null)});return}let s=this.#Y(e),n=Ye(t);if(n&&n.key===e.key&&n.generation===e.generation&&n.floorKey===e.floorKey&&n.missionKey===e.missionKey&&n.preview.entryId===e.entryId){this.#U=s;return}if(this.#U===s)return;this.#i.get("room-preview")?.abort(),this.#U=s;let o=this.#x("room-preview");this.#e.patch({manualRoomPreview:m("loading",null)}),this.#fe(e,o)}async#fe(t,e){try{let s=await this.#o.previewRoomSequence(t.entityId,t.rooms,t.overrideRoomSchedule,e.signal);return!this.#p(t)||e.signal.aborted||s.entryId!==t.entryId?null:(this.#e.patch({manualRoomPreview:m("ready",{key:t.key,generation:t.generation,floorKey:t.floorKey,missionKey:t.missionKey,preview:s})}),s)}catch(s){return z(s)||e.signal.aborted||!this.#p(t)||this.#e.patch({manualRoomPreview:m("error",null,K(s,"preview-unavailable"))}),null}finally{this.#A("room-preview",e)}}sync(t){if(this.#l)return;let e=this.#S,s=this.#s?.host.robotConnected??null,n=this.#s?.host.administrator===!1&&t.host.administrator,o=this.#s!==null&&!this.#s.host.robotConnected&&t.host.robotConnected,i=this.#e.value.owner,r=i!==null&&(i.entryKey!==t.entryKey||i.userKey!==t.userKey);r&&(this.#se("context-changed",t.entryKey),this.#_&&(this.#m=!0,this.#c=!1,this.#b=null));let l=this.#B;this.#B=t.host.connected,this.#s=t,this.#O(t),o&&e&&e===this.#S&&e.notifyReconnect();let c=t.userKey!==this.#K?this.#a.load(t.userKey):null;if(c&&(this.#K=t.userKey,this.#r=c),this.#e.patch({owner:{userKey:t.userKey,entryKey:t.entryKey},host:t.host,activity:t.activity,batteryPercent:t.batteryPercent,robotLabel:t.robotLabel,robots:t.robots,locale:t.language,selection:{...this.#e.value.selection,entryId:t.entryKey},...c?{view:c.view,appearance:c.appearance,labelsVisible:c.labels,quality:c.quality,cameras:c.cameras}:{}}),!t.host.administrator){this.#H(),this.#se("access-required",t.entryKey);return}if(!t.host.connected){l&&(this.#e.patch({generation:this.#t.invalidate()}),this.#z(),this.#v=""),this.#H(),this.#m=!1,this.#c=!1,this.#b=null,this.#R=!1,this.#F();let d=this.#e.value,u=d.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...d.resources,catalog:d.resources.catalog.status==="loading"?m("idle",d.resources.catalog.value):d.resources.catalog,plans:d.resources.plans.status==="loading"?m("idle",d.resources.plans.value):d.resources.plans,areas:d.resources.areas.status==="loading"?m("idle",d.resources.areas.value):d.resources.areas,pose:m("idle",null)},map:{...d.map,available:u!==null,exactPose:!1}});return}if(t.host.robotCount===0){this.#H(),this.#se("map-unavailable",t.entryKey);return}if(t.entryKey&&!t.vacuumEntityId){this.#H(),this.#se("no-loaded-robot",t.entryKey);return}if(!t.host.robotConnected){s!==!1&&(this.#D(),this.#F(),this.#m=!1,this.#c=!1,this.#b=null,this.#R=!1),this.#H();let d=this.#e.value,u=d.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...d.resources,catalog:d.resources.catalog.status==="loading"?m("idle",d.resources.catalog.value):d.resources.catalog,scene:d.resources.scene.status==="loading"?m("idle",u):d.resources.scene,pose:m("idle",null)},map:{...d.map,available:u!==null,exactPose:!1}});return}if(this.#n.active){if(this.#ae(),!l||o||n){this.refreshCatalog(!0,!0);return}(r||this.#e.value.resources.catalog.status==="idle"||t.entryKey&&t.entryKey!==this.#e.value.selection.entryId)&&this.refreshCatalog(!0)}}#O(t){let e=t.entryKey,s=this.#e.value,n=s.resources.catalog.value?.find(l=>l.entryId===e),o=s.resources.entry;if(!(this.#j??!!(n?.liveWorkspaceTransportEnabled&&o?.entryId===e&&o.liveWorkspaceTransportEnabled))||!this.#V||!t.host.administrator||!t.host.connected||!t.vacuumEntityId||!e||!this.#n.active){this.#Z();return}if(this.#S&&this.#P===e)return;this.#S?.dispose(),this.#g=null;let r=new He(this.#V,{entryId:e,onEvent:l=>{if(!(this.#l||!this.#n.active||this.#S!==r||this.#P!==e||this.#s?.entryKey!==e)){if(l.type==="resync"&&l.reason==="entry_removed"){r.dispose(),this.#S===r&&(this.#S=null,this.#P=null,this.#g=null);return}if(l.type==="snapshot"){let{snapshot:c}=l,d=this.#e.value.resources.entry,u=c.payload.entry;if(c.entry_id!==e||c.identity.entry_id!==e)return;if(u&&(u.entryId!==e||c.identity.floor_verified!==(u.mapFloorCoherent&&u.mapSessionVerified))){r.requestResync("invalid_message");return}let p=!u&&d?.entryId===e&&c.identity.floor_verified!==(d.mapFloorCoherent&&d.mapSessionVerified);if(c.status.reason==="authorization"){this.#g=null,this.#q(e,["plans","areas","history"]);return}let h=this.#g,f=[],v=h!==null&&h.epoch!==c.epoch;if(h&&h.epoch===c.epoch){let k=new Set([...Object.keys(h.revisions),...Object.keys(c.revisions)]),g=[...k].some(E=>(c.revisions[E]??-1)<(h.revisions[E]??-1));if(c.coherence_generation<h.coherenceGeneration||c.coherence_generation===h.coherenceGeneration&&g){r.requestResync("restart");return}f=[...k].filter(E=>(c.revisions[E]??-1)>(h.revisions[E]??-1))}v&&(f=["plans","areas","history"]);let y=h!==null&&(h.epoch!==c.epoch||h.coherenceGeneration!==c.coherence_generation),b=!!(d&&u&&d.entryId===e&&A(d)!==A(u));if(this.#g={entryId:c.entry_id,epoch:c.epoch,sequence:c.sequence,coherenceGeneration:c.coherence_generation,revisions:c.revisions},p){this.#q(e,["plans","areas","history"]);return}if(y||b){this.#q(e,f);return}let R=u!==null&&d?.entryId===e&&this.#ve(u);if(h&&f.length){if(c.sequence<=h.sequence){r.requestResync("invalid_message");return}this.#g=h,this.#Q({epoch:c.epoch,sequence:c.sequence,coherence_generation:c.coherence_generation,revisions:c.revisions,resources:f},e,r,R)}return}if(l.type==="resync"){this.#g=null,l.reason!=="authorization"&&this.#q(e,["plans","areas","history"]);return}this.#Q(l.invalidation,e,r)}}});this.#S=r,this.#P=e,r.start()}#Q(t,e,s,n=!1){let o=this.#g;if(!o||o.entryId!==e||this.#S!==s||t.epoch!==o.epoch||t.sequence<=o.sequence)return;let i=t.coherence_generation!==o.coherenceGeneration,l=[...new Set([...Object.keys(o.revisions),...Object.keys(t.revisions)])].some(h=>(t.revisions[h]??-1)<(o.revisions[h]??-1));if(t.coherence_generation<o.coherenceGeneration||!i&&l){s.requestResync("restart");return}let c=new Set(t.resources),d=[...c].some(h=>(t.revisions[h]??-1)>(o.revisions[h]??-1));if(this.#g={...o,sequence:t.sequence,coherenceGeneration:t.coherence_generation,revisions:t.revisions},!d&&!i)return;if(i){this.#q(e,t.resources);return}c.has("scene")&&c.delete("scene");let u=this.#e.value.resources.entry,p=this.#t.current();!u||u.entryId!==e||!p||c.size&&this.#ye(u,p,c,!n)}#ve(t){let e=this.#e.value,s=e.resources.entry;if(!s||A(s)!==A(t))return!1;let n=t.mapRevision===s.mapRevision?t:{...t,mapRevision:s.mapRevision},o=e.resources.catalog,i=o.value?.map(u=>u.entryId===n.entryId?n:u),r=n.mapFloorCoherent&&n.mapSessionVerified,l=n.health==="problem"||n.health==="limited",c=this.#h,d=c?.key===A(n)&&this.#le(c)&&(c.attempt!==null||c.retryTimer!==null);return this.#e.patch({managedLock:Ne(n),coherence:d?"verifying":r?l?"degraded":"current":"verifying",map:{...e.map,available:e.resources.scene.value!==null,complete:n.mapComplete&&!n.mapTruncated,floorCoherent:n.mapFloorCoherent,sessionVerified:n.mapSessionVerified,exactPose:r&&!d?e.map.exactPose:!1},floor:{...e.floor,classifiedCount:Math.max(1,n.historyFloorCount),...d&&e.resources.scene.value?{readOnly:!0}:{}},resources:{...e.resources,entry:n,...i?{catalog:{...o,value:i}}:{}}}),this.#s&&this.#O(this.#s),!0}#D(t=this.#e.value.pageActive,e=[]){let s=this.#t.invalidate();this.#z();let n=this.#e.value;this.#e.patch({generation:s,pageActive:t,coherence:n.resources.scene.value?"verifying":"unavailable",floor:{...n.floor,readOnly:n.floor.readOnly||n.resources.scene.value!==null},map:{...n.map,exactPose:!1}}),this.#h&&this.#ge(this.#h.key),this.#F(["catalog",...e]),this.#v=""}#q(t,e=[]){this.#L(),this.#D(),this.refreshCatalog(!0,!0).then(()=>{if(this.#l||this.#s?.entryKey!==t||!this.#s.host.administrator||!this.#s.host.connected)return;let s=this.#e.value.resources.entry,n=this.#t.current();if(!s||s.entryId!==t||!n)return;let o=new Set(e);o.delete("history"),this.#ye(s,n,o,!1)})}#z(){this.#C+=1,this.#I=null}#oe(t){let e=this.#I,s=this.#t.current();return!!(e&&s&&e.generation===this.#C&&e.stamp.generation===s.generation&&e.entryId===t.entryId&&e.coherenceIdentity===A(t)&&e.deltaUrl===t.deltaUrl&&s.entryKey===t.entryId&&s.floorKey===de(t)&&s.missionKey===ue(t)&&t.mapFloorCoherent&&t.mapSessionVerified&&this.#e.value.dataMode==="live"&&this.#e.value.selection.floorId==="current"&&this.#s?.host.connected&&this.#s.host.robotConnected&&this.#s.host.administrator)}#ye(t,e,s,n=!0){(s.has("plans")||s.has("plan_state"))&&this.loadPlans(),s.has("areas")&&this.loadAreas(),s.has("history")&&this.#ne(t,e),n&&["status","robot_state","activity","plan_state"].some(o=>s.has(o))&&this.refreshCatalog(!0,!0,!0)}#ae(){this.#n.active&&(this.#u===null&&(this.#u=window.setInterval(()=>{this.refreshCatalog()},5e3)),this.#f===null&&(this.#f=window.setInterval(()=>{this.refreshPose()},kn)))}#H(){this.#u!==null&&window.clearInterval(this.#u),this.#f!==null&&window.clearInterval(this.#f),this.#u=null,this.#f=null,this.#L()}#L(){let t=this.#h;if(this.#h=null,!t)return;t.attempt?.finishReplacementRead?.(),t.attempt&&(t.attempt.finishReplacementRead=null),t.retryTimer!==null&&window.clearTimeout(t.retryTimer);let e=t.attempt?.controller,s=!!(e&&e===this.#i.get("catalog")&&this.#e.value.resources.catalog.status==="loading");if(e?.abort(),s){let n=this.#e.value.resources;this.#e.patch({resources:{...n,catalog:m("idle",n.catalog.value)}})}this.#b?.state===t&&(this.#m=!1,this.#c=!1,this.#b=null)}#X(t,e){let s=this.#h;s?.key===A(e)&&(s.failedKinds.delete(t),t==="delta"&&this.#G(e),s.failedKinds.size===0&&this.#L())}#G(t){this.#ge(A(t))}#ge(t){let e=this.#h;e?.key===t&&(e.attempt?.finishReplacementRead?.(),e.attempt&&(e.attempt.finishReplacementRead=null))}#te(t,e){let s=A(e),n=this.#h;n?.key!==s&&(this.#L(),n={key:s,failedKinds:new Set,retryTimer:null,attempt:null},this.#h=n),n.failedKinds.add(t),t==="delta"&&this.#G(e),this.#le(n)&&this.#t.current()&&this.#D(),!n.attempt&&n.retryTimer===null&&(n.failedKinds.size===1&&n.failedKinds.has(t)?this.#_e(n):this.#ce(n))}#le(t){let e=this.#e.value;return t.failedKinds.has("pose")||e.floor.readOnly||!e.map.floorCoherent||!e.map.sessionVerified}#ce(t){t.retryTimer!==null||t.failedKinds.size===0||(t.retryTimer=window.setTimeout(()=>{t.retryTimer=null;let e=this.#e.value.resources.entry,s=this.#s?.host;if(this.#h!==t||this.#l||!e||A(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#h===t&&this.#L();return}this.#_e(t)},Rn))}async#_e(t){if(this.#l||this.#h!==t||t.attempt)return;let e=this.#e.value.resources.entry,s=this.#s?.host;if(!e||A(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#h===t&&this.#L();return}if(this.#i.has("scene")){this.#ce(t);return}let n=this.#le(t);n?this.#t.current()&&this.#D():(this.#z(),this.#i.get("delta")?.abort());let o,i=new Promise(c=>{o=c}),r={generation:this.#t.generation,controller:null,replacementRead:i,finishReplacementRead:o};t.attempt=r;let l={state:t,attempt:r};try{await this.refreshCatalog(!0,!1,!n,l),t.failedKinds.has("delta")&&this.#h===t&&t.attempt===r&&await r.replacementRead}finally{if(this.#h!==t||t.attempt!==r)return;r.finishReplacementRead=null,t.attempt=null,t.failedKinds.size>0&&this.#ce(t)}}#be(t){let e=this.#e.value,s=this.#s?.host;return!this.#l&&this.#n.active&&this.#h===t.state&&t.state.attempt===t.attempt&&t.attempt.generation===this.#t.generation&&e.generation===this.#t.generation&&e.dataMode==="live"&&e.selection.floorId==="current"&&e.resources.entry!==null&&A(e.resources.entry)===t.state.key&&!!(s?.connected&&s.administrator&&s.robotConnected&&s.robotCount>0)}#x(t){this.#i.get(t)?.abort();let e=new AbortController;return this.#i.set(t,e),e}#A(t,e){this.#i.get(t)===e&&this.#i.delete(t)}#F(t=[]){let e=!1;for(let[s,n]of this.#i)t.includes(s)||(e||=s==="plan-mutation"||s==="area-mutation"||s==="plan-preflight",n.abort(),this.#i.delete(s));e&&this.#e.value.command==="pending"&&this.#e.patch({command:"idle",notice:null})}#ke(){this.#k+=1,this.#d!==null&&window.clearTimeout(this.#d),this.#d=null}#se(t,e=null){this.#L(),this.#ke(),this.#t.invalidate(),this.#z(),this.#v="";let s=this.#t.generation;this.#F();let n=this.#e.value,o=V();this.#e.patch({command:"idle",dataMode:o.dataMode,floor:o.floor,managedLock:!1,workflow:"none",dialog:null,notice:null,draftFloorOrdinal:null,draw:o.draw,planDraft:o.planDraft,areaDraft:o.areaDraft,generation:s,coherence:n.host.administrator?"unavailable":"blocked",fullMap:!1,precisionOpen:!1,resources:{catalog:m("error",null,t),entry:null,scene:m("idle",null),pose:m("idle",null),history:m("idle",null),plans:m("idle",null),areas:m("idle",null)},manualRoomPreview:m("idle",null),map:{available:!1,complete:!1,floorCoherent:!1,sessionVerified:!1,exactPose:!1},selection:{...o.selection,entryId:e,entrySource:n.selection.entrySource,floorId:"current",historyId:null}})}async refreshCatalog(t=!1,e=!1,s=!1,n=null){if(this.#l||!this.#n.active||!this.#s?.host.administrator||!this.#s.host.connected||this.#s.host.robotCount===0||n&&(!this.#s.host.robotConnected||!this.#be(n)))return;if(this.#_)return t&&(this.#y?e&&(this.#m?this.#c&&=s:this.#c=s,this.#m=!0):(this.#m?this.#c&&=s:this.#c=s,this.#m=!0,this.#i.get("catalog")?.abort()),n&&(this.#m?this.#c&&=s:this.#c=s,this.#b=n,this.#m=!0)),this.#w;this.#_=!0,this.#y=t;let o;this.#w=new Promise(l=>{o=l});let i=this.#x("catalog");n&&(n.attempt.controller=i);let r=this.#e.value.resources.catalog.value;this.#e.patch({resources:{...this.#e.value.resources,catalog:m("loading",r)}});try{let l=await this.#o.catalog(i.signal);if(i.signal.aborted||this.#l||n&&!this.#be(n))return;let c=this.#s?.entryKey,d=c?l.find(y=>y.entryId===c)??null:l[0]??null,u=this.#e.value.resources.entry;if(d&&this.#h?.key===A(d)&&(this.#h.attempt!==null||this.#h.retryTimer!==null)&&(!n||!this.#be(n))){this.#e.patch({managedLock:Ne(d),resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:u}});return}let p=!!(d&&u&&A(d)===A(u)&&this.#oe(u));if(d&&u&&F(d)===F(u)&&de(d)===de(u)&&ue(d)===ue(u)&&(p||d.mapRevision<u.mapRevision||!t&&this.#i.has("scene"))&&(d={...d,mapRevision:u.mapRevision}),this.#e.patch({managedLock:d?Ne(d):!1,resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:d}}),this.#s&&this.#O(this.#s),!d){this.#se("no-loaded-robot",this.#s?.entryKey??null);return}if(this.#e.value.selection.floorId!=="current"||this.#e.value.dataMode!=="live"){n&&this.#G(d);return}let h=mt(d),f=this.#t.current(),v=!!(f&&u&&A(d)===A(u)&&d.mapFloorCoherent&&d.mapSessionVerified);if((!t||s)&&(h===this.#v||v)){let y=this.#e.value,b=d.mapFloorCoherent&&d.mapSessionVerified,R=d.health==="problem"||d.health==="limited";this.#e.patch({coherence:b?R?"degraded":"current":"verifying",map:{...y.map,available:y.resources.scene.value!==null,complete:d.mapComplete&&!d.mapTruncated,floorCoherent:d.mapFloorCoherent,sessionVerified:d.mapSessionVerified,exactPose:b?y.map.exactPose:!1},floor:{...y.floor,classifiedCount:Math.max(1,d.historyFloorCount)}}),b&&this.#e.value.resources.plans.problem==="map-rechecking"&&this.loadPlans(),this.#he();let k=f;if(k&&v&&(d.mapRevision>k.revision||n!==null)&&(d.mapRevision>k.revision&&(k=this.#t.advance(k,d.mapRevision)),k)){this.#v=h,this.#z();let g=this.#e.value.resources;this.#e.patch({resources:{...g,scene:m("loading",g.scene.value)}}),this.#de(d,k)}k&&!y.resources.scene.value&&!this.#i.has("history")&&this.#ne(d,k),b&&k&&(y.resources.scene.status==="error"||y.floor.readOnly)&&!this.#i.has("scene")&&this.#de(d,k);return}this.#v=h,this.#Ce(d,u)}catch(l){if(z(l)||i.signal.aborted||this.#l)return;n&&this.#ge(n.state.key),this.#e.patch({coherence:this.#e.value.resources.scene.value?"degraded":"unavailable",resources:{...this.#e.value.resources,catalog:m("error",r,K(l,"catalog-unavailable"))}})}finally{this.#A("catalog",i),n?.attempt.controller===i&&(n.attempt.controller=null),this.#_=!1;let l=this.#m,c=this.#c,d=this.#b;this.#y=!1;try{l&&!this.#l&&(this.#m=!1,this.#c=!1,this.#b=null,await this.refreshCatalog(!0,!1,c,d))}finally{o()}}}#Ce(t,e){this.#h!==null&&this.#h.key!==A(t)&&this.#L();let s=this.#e.value,n=!!(e&&F(e)===F(t)),o=t.mapFloorCoherent&&t.mapSessionVerified,i=s.draftMapSessionKey??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapSessionKey:null),r=s.draftFloorOrdinal??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapFloorOrdinal:null),l=o?t.mapFloorOrdinal:null,c=o?t.mapSessionKey:null,d=e!==null&&e.entryId!==t.entryId||r!==null&&l!==null&&r!==l||i!==null&&c!==null&&i!==c,u=n&&o&&r===t.mapFloorOrdinal&&i===t.mapSessionKey,p=["catalog"];n&&!d&&p.push("plans","areas"),u&&p.push("plan-mutation","area-mutation");let h=this.#t.begin(t.entryId,de(t),ue(t),t.mapRevision);this.#h?.key===A(t)&&this.#h.attempt&&(this.#h.attempt.generation=h.generation),this.#z(),this.#F(p);let f=e?.entryId===t.entryId?s.resources.scene.value:null,v=f!==null&&(s.floor.readOnly||!n||!o||e?.mapSessionKey!==t.mapSessionKey),y=s.resources.pose.value,b=n&&o&&t.mapSessionKey!==null&&y?.position&&y.mapSessionKey===t.mapSessionKey?y:null;d&&this.#ke();let R=V(),k=t.health==="problem"||t.health==="limited",g=this.#e.value;this.#e.patch({...d?{command:"idle",workflow:"none",dialog:null,precisionOpen:!1,fullMap:!1,draw:R.draw,planDraft:R.planDraft,areaDraft:R.areaDraft,notice:I.mapChanged}:{},draftFloorOrdinal:l??r,draftMapSessionKey:c??i,managedLock:Ne(t),generation:h.generation,coherence:o?k?"degraded":v?"verifying":"current":"verifying",dataMode:"live",resources:{...g.resources,entry:t,scene:m(o?"loading":"idle",f),pose:m(o?"loading":"idle",b),history:m("loading",g.resources.history.value),plans:n&&!d?g.resources.plans:m("idle",null),areas:n&&!d?g.resources.areas:m("idle",null)},map:{available:f!==null,complete:t.mapComplete&&!t.mapTruncated,floorCoherent:t.mapFloorCoherent,sessionVerified:t.mapSessionVerified,exactPose:o&&b!==null&&!v},floor:{classifiedCount:Math.max(1,t.historyFloorCount),displayName:v?s.floor.displayName:t.selectedFloorOrdinal?`Floor ${t.selectedFloorOrdinal}`:"Current floor",readOnly:v},selection:{...g.selection,entryId:t.entryId,floorId:"current",historyId:null,roomIds:d?[]:g.selection.roomIds,roomSettings:d?[]:g.selection.roomSettings,planId:d?null:g.selection.planId,areaId:d?null:g.selection.areaId}}),this.#ne(t,h),o&&this.#e.value.resources.plans.status==="idle"&&this.loadPlans(),this.#he(),o&&(this.#de(t,h),this.#ue(t,h))}async#de(t,e){if(!this.#n.active)return;let s=this.#x("scene");try{let n=await this.#o.scene(t.sceneUrl,t.mapRevision,t.mapFloorCoherent,"live",s.signal);if(!this.#t.accepts(e))return;if(!n.floorCoherent){let c=this.#e.value;this.#e.patch({coherence:"verifying",resources:{...c.resources,scene:m("error",c.resources.scene.value,"map-rechecking"),pose:m("idle",null)},map:{...c.map,available:c.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...c.floor,readOnly:c.resources.scene.value!==null}}),this.#G(t);return}if(n.revision<e.revision||!n.scene)throw new x("scene-unavailable");let o=n.revision===e.revision?e:this.#t.advance(e,n.revision);if(!o)throw new x("scene-unavailable");let i=this.#e.value,r={...i.resources.entry??t,mapRevision:n.revision};this.#v=mt(r),this.#e.patch({coherence:r.health==="problem"||r.health==="limited"?"degraded":"current",resources:{...i.resources,entry:r,scene:m("ready",n.scene)},map:{...i.map,available:!0},floor:{...i.floor,readOnly:!1,displayName:i.resources.history.value?.floors.find(c=>c.active)?.label||(r.selectedFloorOrdinal?`Floor ${r.selectedFloorOrdinal}`:"Current floor")},notice:i.notice?.key==="v4_notice_saved_map"?null:i.notice});let l=this.#e.value.resources.plans;if((l.status==="idle"||l.problem==="map-rechecking")&&this.loadPlans(),this.#he(),t.deltaUrl&&typeof DecompressionStream=="function"){let c=++this.#C;this.#Re(r,o,n.scene,c)}else this.#X("delta",r)}catch(n){if(z(n)||!this.#t.accepts(e))return;if(n instanceof x&&n.code==="request-timeout"){let l=this.#e.value;this.#e.patch({resources:{...l.resources,scene:m("loading",l.resources.scene.value,"scene-building")}}),window.setTimeout(()=>{this.#l||!this.#t.accepts(e)||this.#e.value.selection.floorId!=="current"||this.#de(t,e)},250);return}this.#G(t);let o=this.#e.value,i=o.resources.pose.value,r=o.resources.scene.value!==null&&t.mapSessionKey!==null&&i?.position!==null&&i?.mapSessionKey===t.mapSessionKey;this.#e.patch({coherence:"degraded",resources:{...o.resources,scene:m("error",o.resources.scene.value,K(n,"scene-unavailable"))},map:{...o.map,available:o.resources.scene.value!==null,exactPose:r}})}finally{this.#A("scene",s)}}async#Re(t,e,s,n){if(!t.deltaUrl||typeof DecompressionStream!="function")return;let o=t.deltaUrl,i={generation:n,stamp:e,entryId:t.entryId,coherenceIdentity:A(t),deltaUrl:o};if(n!==this.#C||!this.#t.accepts(e))return;this.#I=i;let r=t,l=e,c=s;try{for(;!this.#l&&this.#n.active&&n===this.#C&&this.#t.accepts(l)&&this.#e.value.selection.floorId==="current";){let d=this.#x("delta");try{let u=await this.#o.sceneDelta(o,c,r.mapFloorCoherent,d.signal);if(d.signal.aborted||this.#l||n!==this.#C||!this.#t.accepts(l))return;if(!u.floorCoherent){let f=this.#e.value;this.#e.patch({coherence:"verifying",map:{...f.map,available:f.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...f.floor,readOnly:f.resources.scene.value!==null},resources:{...f.resources,scene:m("error",f.resources.scene.value,"map-rechecking"),pose:m("idle",null)}}),this.#te("delta",r);return}if(u.notModified||!u.scene){this.#X("delta",r),await new Promise(f=>window.setTimeout(f,100));continue}let p=this.#t.advance(l,u.revision);if(!p)return;l=p,i.stamp=p,c=u.scene,r={...r,mapRevision:u.revision},this.#X("delta",r),this.#v=mt(r);let h=this.#e.value;this.#e.patch({resources:{...h.resources,entry:r,scene:m("ready",c)},map:{...h.map,available:!0,floorCoherent:!0}}),this.#ue(r,l)}finally{this.#A("delta",d)}}}catch(d){if(z(d)||this.#l||n!==this.#C||!this.#t.accepts(l))return;this.#te("delta",r)}finally{this.#I===i&&(this.#I=null)}}async#ne(t,e){if(!this.#n.active)return;let s=this.#x("history");try{let n=await this.#o.history(t.historyUrl,s.signal),o=this.#t.current();if(s.signal.aborted||!o||!Fe(e,o)||n.entryId!==t.entryId)return;let i=this.#e.value,r=n.floors.find(d=>d.id===i.selection.floorId),l=!i.selection.historyId||r?.snapshots.some(d=>d.id===i.selection.historyId),c=i.dataMode==="live"?n.floors.find(d=>d.active):r;if(this.#e.patch({resources:{...this.#e.value.resources,history:m("ready",n)},floor:{...this.#e.value.floor,classifiedCount:n.floors.length,...c&&!(i.dataMode==="live"&&i.floor.readOnly)?{displayName:Ke(c,1)}:{}}}),i.dataMode==="live"&&!i.resources.scene.value){let d=n.floors.flatMap(u=>u.snapshots.map(p=>({floor:u,snapshot:p}))).sort((u,p)=>Date.parse(p.snapshot.createdAt)-Date.parse(u.snapshot.createdAt));for(let u of d){let p;try{p=await this.#o.scene(u.snapshot.sceneUrl,u.snapshot.revision,!0,"history",s.signal)}catch(v){if(z(v)||s.signal.aborted)return;continue}let h=this.#t.current();if(s.signal.aborted||!h||!Fe(e,h)||this.#e.value.resources.scene.value)return;if(!p.scene)continue;let f=this.#e.value;this.#e.patch({floor:{...f.floor,readOnly:!0,displayName:Ke(u.floor,1)},resources:{...f.resources,scene:m("ready",p.scene),pose:m("idle",null)},map:{...f.map,available:!0,exactPose:!1},notice:wn(u.snapshot.createdAt)});break}}if(i.dataMode==="history"&&(!r||!l)){let d=r||n.floors.find(p=>p.active)||n.floors[0],u=this.selectFloor(d?.id||"current");!this.#l&&i.workflow==="history"&&this.#e.dispatch({type:"open-workflow",workflow:"history"}),await u}}catch(n){let o=this.#t.current();if(z(n)||s.signal.aborted||!o||!Fe(e,o))return;this.#e.patch({resources:{...this.#e.value.resources,history:m("error",null,K(n,"history-unavailable"))}})}finally{this.#A("history",s)}}async refreshPose(){let t=this.#e.value.resources.entry,e=this.#t.current();!t||!e||this.#e.value.selection.floorId!=="current"||!t.mapFloorCoherent||!t.mapSessionVerified||await this.#ue(t,e)}async#ue(t,e){if(this.#l||!this.#n.active||!this.#B||!this.#s?.host.connected)return;if(this.#M){this.#R=!0;return}this.#M=!0;let s=this.#x("pose");try{let n=await this.#o.pose(t.poseUrl,s.signal),o=this.#t.current(),i=this.#e.value.resources.entry;if(!o||!Fe(e,o)||!i||!this.#e.value.map.floorCoherent)return;if(!n.floorCoherent||n.mapSessionKey===null||n.mapSessionKey!==i.mapSessionKey){this.#e.patch({resources:{...this.#e.value.resources,pose:m("idle",null)},map:{...this.#e.value.map,exactPose:!1}}),this.#te("pose",i);return}this.#X("pose",i);let r=this.#e.value,l=r.resources.pose.value,c=!!(r.map.exactPose&&l?.position&&l.mapSessionKey===i.mapSessionKey);if(n.position===null&&c){this.#e.patch({resources:{...r.resources,pose:m("ready",l)}});return}this.#e.patch({resources:{...r.resources,pose:m("ready",n)},map:{...r.map,exactPose:n.position!==null}})}catch(n){if(z(n)||!this.#t.accepts(e))return;let o=this.#e.value,i=o.resources.pose.value,r=!!(o.map.exactPose&&i?.position&&i.mapSessionKey===o.resources.entry?.mapSessionKey);this.#e.patch({resources:{...o.resources,pose:m("error",r?i:null,K(n,"pose-unavailable"))},map:{...o.map,exactPose:r}})}finally{if(this.#A("pose",s),this.#M=!1,this.#R&&!this.#l&&this.#B&&this.#s?.host.connected&&this.#s.host.administrator&&this.#s.host.robotCount>0){this.#R=!1;let n=this.#e.value.resources.entry,o=this.#t.current();n&&o&&this.#ue(n,o)}else this.#R=!1}}async selectFloor(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;let n=e.floors.find(l=>l.id===t);if(!n&&t!=="current")return;let o=this.#e.value;if(o.workflow==="draw"&&(o.draw.dirty||o.areaDraft.dirty)||o.workflow==="areaReview"&&(o.draw.dirty||o.areaDraft.dirty))return;if(!n||n.active){this.#L(),this.#v="";let l=this.#e.value;this.#e.patch({resources:{...l.resources,plans:m("idle",null),areas:m("idle",null),scene:m("idle",l.resources.scene.value),pose:m("idle",null)},map:{...l.map,available:l.resources.scene.value!==null,exactPose:!1},coherence:"verifying",floor:{...l.floor,readOnly:l.resources.scene.value!==null},workflow:"none",precisionOpen:!1}),this.#e.dispatch({type:"set-floor",floorId:"current"}),await this.refreshCatalog(!0);return}this.#L();let i=n.snapshots.at(-1),r=this.#t.begin(s.entryId,n.id,i?.id||n.id,i?.revision||0);this.#F(["catalog"]),this.#e.patch({generation:r.generation,coherence:"current",dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ke(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:i?.id||null},resources:{...this.#e.value.resources,scene:m(i?"loading":"empty",null),pose:m("idle",null),plans:m("idle",null),areas:m("idle",null)},workflow:"none",precisionOpen:!1,map:{available:!1,complete:!0,floorCoherent:!0,sessionVerified:!0,exactPose:!1}}),i&&await this.#we(i,r)}async selectHistory(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;if(!t){await this.selectFloor("current");return}let n=e.floors.find(r=>r.snapshots.some(l=>l.id===t)),o=n?.snapshots.find(r=>r.id===t);if(!n||!o)return;this.#L();let i=this.#t.begin(s.entryId,n.id,o.id,o.revision);this.#F(["catalog"]),this.#e.patch({generation:i.generation,dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ke(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:o.id},resources:{...this.#e.value.resources,scene:m("loading",null),pose:m("idle",null)},map:{...this.#e.value.map,available:!1,exactPose:!1}}),await this.#we(o,i)}async#we(t,e){if(!this.#n.active)return;let s=this.#x("history-scene");try{let n=await this.#o.scene(t.sceneUrl,t.revision,!0,"history",s.signal);if(!this.#t.accepts(e)||!n.scene)return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("ready",n.scene)},map:{...this.#e.value.map,available:!0,exactPose:!1}})}catch(n){if(z(n)||!this.#t.accepts(e))return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("error",null,K(n,"history-scene-unavailable"))}})}finally{this.#A("history-scene",s)}}async openWorkflow(t){let e=this.#e.value;if((e.dataMode==="history"||e.floor.readOnly)&&Ks.includes(t))return;let s=this.#e.value.workflow;if(t==="draw"&&s!=="draw"&&s!=="areaReview"&&this.selectArea(null),this.#e.dispatch({type:"open-workflow",workflow:t}),Ks.includes(t)&&this.#Ee(),t==="history"){let n=this.#e.value.resources.entry,o=this.#t.current();n&&o&&(this.#e.patch({resources:{...this.#e.value.resources,history:m("loading",this.#e.value.resources.history.value)}}),await this.#ne(n,o))}(t==="plans"||t==="plan"||t==="rooms")&&await this.loadPlans(),(t==="draw"||t==="areaReview")&&await this.loadAreas()}async loadPlans({force:t=!1,inPlace:e=!1}={}){let s=!e||this.#e.value.resources.plans.status!=="ready";if(!this.#n.active){this.#i.get("plans")?.abort();let r=this.#e.value.resources;return s&&this.#e.patch({resources:{...r,plans:m("idle",r.plans.value)}}),null}let n=this.#e.value.resources.entry;if(!n||!this.#t.current()||!Qe(this.#e.value)||!t&&this.#i.has("plans"))return null;let o=F(n),i=this.#x("plans");s&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("loading",this.#e.value.resources.plans.value)}});try{let r=await this.#o.plans(n.plansUrl,i.signal),l=this.#e.value.resources.entry;if(i.signal.aborted||this.#l||!l||F(l)!==o)return null;let c=this.#e.value;if(c.planDraft.dirty||c.workflow==="plan"&&(!c.planDraft.id||c.command==="pending"))return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",r)}}),r;let d=c.workflow==="plan"?c.selection.planId:r.selectedPlan||r.plans[0]?.id||null,u=r.plans.find(p=>p.id===d);return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",r)},selection:{...this.#e.value.selection,planId:d},planDraft:u?Xe(u):{...this.#e.value.planDraft,id:null,name:"",rooms:[],parkedRooms:[],dirty:!1},...u?{}:{planView:"edit",expandedRoom:null}}),r}catch(r){let l=this.#e.value.resources.entry;if(z(r)||i.signal.aborted||this.#l||!l||F(l)!==o)return null;let c=r instanceof x&&r.code==="map-rechecking"?"map-rechecking":K(r,"plans-unavailable");return s&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("error",this.#e.value.resources.plans.value,c)}}),null}finally{this.#A("plans",i)}}selectPlan(t,e=!1){this.#e.patch(At(this.#e.value,t,e))}setPlanEnabled(t){return this.#J("plan-mutation",I.planSaveFailed,(e,s)=>e.setPlanEnabled(s,t))}#he(){let t=this.#e.value;(t.workflow==="draw"||t.workflow==="areaReview")&&t.resources.areas.status==="idle"&&this.loadAreas()}async loadAreas({reconcileDraft:t=!0}={}){if(!this.#n.active){this.#i.get("areas")?.abort();let o=this.#e.value.resources;return this.#e.patch({resources:{...o,areas:m("idle",o.areas.value)}}),null}let e=this.#e.value.resources.entry;if(!e||!this.#t.current()||!Qe(this.#e.value))return null;let s=F(e),n=this.#x("areas");this.#e.patch({resources:{...this.#e.value.resources,areas:m("loading",this.#e.value.resources.areas.value)}});try{let o=await this.#o.areas(e.areasUrl,n.signal),i=this.#e.value.resources.entry;if(n.signal.aborted||this.#l||!i||F(i)!==s)return null;if(o.sceneUrl!==i.sceneUrl)throw new x("areas-unavailable");this.#e.patch({resources:{...this.#e.value.resources,areas:m("ready",o)}});let r=this.#e.value.selection.areaId,l=this.#e.value,c=o.areas.some(d=>d.id===r);return t&&r!==null&&!c&&(l.draw.dirty||l.areaDraft.dirty)?this.#e.patch({selection:{...l.selection,areaId:null},areaDraft:{...l.areaDraft,id:null,status:"new",canRebind:!1,dirty:!0},notice:I.areaRemoved}):t&&!l.draw.dirty&&!l.areaDraft.dirty&&this.selectArea(c?r:null),o}catch(o){let i=this.#e.value.resources.entry;return z(o)||n.signal.aborted||this.#l||!i||F(i)!==s||this.#e.patch({resources:{...this.#e.value.resources,areas:m("error",this.#e.value.resources.areas.value,K(o,"areas-unavailable"))}}),null}finally{this.#A("areas",n)}}selectArea(t){let e=this.#e.value.resources.areas.value?.areas.find(n=>n.id===t),s=this.#e.value;this.#e.patch({selection:{...s.selection,areaId:t},areaDraft:e?this.#Se(e):{id:null,name:"",cleaningMode:"vacuum",coverageSetting:"standard",status:"new",canRebind:!1,dirty:!1},draw:{...s.draw,circles:e?.circles||[],outline:e?.outline??null,outlineUndo:[],outlineRedo:[],tool:!e||e.outline?"outline":"paint",undo:[],redo:[],dirty:!1,strokeCount:0}})}#Se(t){return{id:t.id,name:t.name,cleaningMode:t.cleaningMode,coverageSetting:t.coverageSetting,status:t.status,canRebind:t.canRebind,dirty:!1}}saveArea(){return this.#J("area-mutation",I.areaSaveFailed,(t,e)=>t.saveArea(e))}deleteArea(){return this.#J("area-mutation",I.areaDeleteFailed,(t,e)=>t.deleteArea(e))}savePlan(){return this.#J("plan-mutation",I.planSaveFailed,(t,e)=>t.savePlan(e))}deletePlan(){return this.#J("plan-mutation",I.planDeleteFailed,(t,e)=>t.deletePlan(e))}#Ee(){return this.#re??=import("./catalog-writes-36ARYEGA.js").catch(()=>null)}async#J(t,e,s){let n=this.#e.value;if(n.command==="pending"||this.#i.has(t))return;let o=this.#x(t);try{let i=await this.#Ee(),r=this.#e.value;if(o.signal.aborted||!Ge(r)||r.command==="pending")return;if(!i){this.#e.patch({notice:e});return}await s(i,{state:n,signal:o.signal,store:this.#e,backend:this.#o,effects:this,helpers:bn,failure:e,projection:()=>this.#s,disposed:()=>this.#l,release:()=>this.#A(t,o)})}finally{this.#A(t,o)}}async executeAction(t){switch(typeof t=="string"?t:t.id){case"recheck-status":{if(this.#e.value.rechecking)return;let s=this.#e.value.selection.entryId;this.#e.patch({rechecking:!0});try{await this.refreshCatalog(!0)}finally{this.#l||this.#e.patch({rechecking:!1})}let n=this.#e.value;!this.#l&&n.selection.entryId===s&&n.resources.catalog.status==="ready"&&n.host.connected&&n.host.robotConnected&&n.coherence==="current"&&n.command==="failed"&&this.#e.patch({command:"idle",notice:I.statusRefreshed});return}case"stop":await this.#ie("matic_robot","stop_intelligent_cleaning",{include_unmanaged:!0});return;case"resume":await this.#ie("vacuum","send_command",{command:"resume"});return;case"run-plan":{let s=this.#e.value,n=s.selection.planId||s.resources.plans.value?.selectedPlan;if(!n||s.workflow!=="plan"||!s.planDraft.enabled||s.resources.plans.status!=="ready"||s.command!=="idle"||!Re(s))return;let o=s.selection.entryId,i=s.generation,r=s.selection.planId,l=s.planDraft,c=s.resources.plans.value?.plans.find(v=>v.id===n)?.nextRunPreview;if(!c||!/^[0-9a-f]{64}$/u.test(c.previewToken??"")){this.#e.patch({notice:I.planPreviewMissing});return}this.#e.patch({command:"pending",pendingAction:"run-plan",notice:null});let d=this.#x("plan-preflight"),u;try{u=await this.loadPlans({force:!0,inPlace:!0})}finally{this.#A("plan-preflight",d)}let p=this.#e.value,h=()=>{let v=this.#e.value;!this.#l&&v.selection.entryId===o&&v.generation===i&&v.command==="pending"&&this.#e.patch({command:"idle"})};if(d.signal.aborted||this.#l||p.selection.entryId!==o||p.generation!==i||p.workflow!=="plan"||p.selection.planId!==r||(p.selection.planId||p.resources.plans.value?.selectedPlan)!==n||p.planDraft!==l){h();return}if(!u){h(),this.#e.patch({notice:I.planPreviewRefreshFailed});return}let f=u.plans.find(v=>v.id===n)?.nextRunPreview;if(!f||f.blocker||!/^[0-9a-f]{64}$/u.test(f.previewToken??"")){h(),this.#e.patch({notice:I.planPreviewNone});return}if(!c||JSON.stringify(c)!==JSON.stringify(f)){h(),this.#e.patch({notice:I.planPreviewChanged});return}h(),await this.#ie("matic_robot","run_selected_plan",{plan:n,preview_token:f.previewToken});return}case"clean-rooms":{await this.#Me();return}case"run-area":{let s=this.#e.value.selection.areaId;s&&await this.#ie("matic_robot","clean_area",{area:s});return}case"review-area":this.#e.dispatch({type:"open-workflow",workflow:"areaReview"});return;case"save-area":await this.saveArea();return;case"save-plan":this.#e.value.planDraft.id&&!this.#e.value.planDraft.dirty?this.#e.dispatch({type:"set-plan-view",view:"run"}):await this.savePlan();return;case"delete-plan":await this.deletePlan();return;case"delete-area":await this.deleteArea();return;case"reset-room-cadence":if(typeof t=="string")return;await this.#J("plan-mutation",t.mode==="mop"?I.resetMopFailed:I.resetVacuumFailed,(s,n)=>s.resetRoomCadence(n,t));return}}async#Me(){if(this.#W)return;let t=this.#e.value,e=this.#T(t),s=Ye(t);if(!e||!s||s.key!==e.key||s.generation!==e.generation||s.floorKey!==e.floorKey||s.missionKey!==e.missionKey||s.preview.entryId!==e.entryId||s.preview.blocker||s.preview.rooms.length===0)return;this.#W=!0;let n=this.#x("room-preview");this.#U=this.#Y(e),this.#e.patch({manualRoomPreview:m("loading",null),notice:null});try{let o=await this.#o.previewRoomSequence(e.entityId,e.rooms,e.overrideRoomSchedule,n.signal);if(n.signal.aborted||!this.#p(e)||o.entryId!==e.entryId)return;let i={key:e.key,generation:e.generation,floorKey:e.floorKey,missionKey:e.missionKey,preview:o};if(o.blocker||o.rooms.length===0){this.#e.patch({manualRoomPreview:m("ready",i),notice:I.roomPreviewBlocked});return}if(Vs(s.preview)!==Vs(o)){this.#e.patch({manualRoomPreview:m("ready",i),notice:I.roomPreviewChanged});return}if(this.#e.patch({manualRoomPreview:m("ready",i),notice:null}),!this.#p(e)||!Re(this.#e.value))return;await this.#ie("matic_robot","clean_room_sequence",{rooms:e.rooms,use_room_schedule:!0,override_room_schedule:e.overrideRoomSchedule,return_to_base:!0,preview_token:o.previewToken})}catch(o){!z(o)&&!n.signal.aborted&&this.#p(e)&&this.#e.patch({manualRoomPreview:m("error",null,K(o,"preview-unavailable")),notice:I.roomPreviewFailed})}finally{this.#A("room-preview",n),this.#W=!1,this.#ee()}}async#ie(t,e,s){let n=this.#e.value,o=this.#s?.vacuumEntityId,i=e==="stop_intelligent_cleaning"||t==="vacuum"&&e==="return_to_base",r=t==="vacuum"&&e==="send_command"&&s.command==="resume";if(!o||n.selection.entryId!==this.#s?.entryKey||(i?!Lt(n):r?!Ot(n):!Re(n)))return;let l=++this.#k,c=this.#s?.entryKey,d=()=>!this.#l&&l===this.#k&&c===this.#s?.entryKey,u=i?"settling":"starting";this.#d!==null&&window.clearTimeout(this.#d),this.#d=null,this.#e.patch({command:u,notice:null});try{if(await this.#o.service(t,e,s,o),!d())return;if(t==="matic_robot"&&(e==="clean_room_sequence"||e==="run_selected_plan")){this.#e.patch({command:"idle"}),this.refreshCatalog(!0);return}this.#e.patch({command:u}),this.#d!==null&&window.clearTimeout(this.#d),this.#d=window.setTimeout(()=>{this.#d=null,d()&&this.#e.value.command===u&&this.#e.patch({command:"idle"})},15e3)}catch(p){if(!d())return;this.#e.patch({command:"failed",notice:i?I.stopUnconfirmed:_n(p)??I.actionUnconfirmed})}}dispose(){this.#l||(this.#l=!0,this.#n.dispose(),this.#D(!1),this.#$?.(),this.#$=null,this.#e.patch({manualRoomPreview:m("idle",null),rechecking:!1}),this.#H(),this.#F(),this.#d!==null&&window.clearTimeout(this.#d),this.#d=null,this.#a.dispose(),this.#Z(),this.#o.dispose())}#Z(){this.#S?.dispose(),this.#S=null,this.#P=null,this.#g=null}};var Sn=a=>a.workflow==="none"?0:a.workflow!=="plan"?1:a.planView==="edit"&&a.planDraft.id!==null?3:2,ft=a=>Sn(a)+(a.fullMap?1:0)+(a.precisionOpen?1:0)+(a.dialog?1:0),vt=a=>{if(!a||typeof a!="object")return null;let t=a.maticMapLayer;if(!t||typeof t!="object")return null;let e=t.owner,s=t.depth;return typeof e=="string"&&Number.isInteger(s)&&Number(s)>=0?{owner:e,depth:Number(s)}:null},Ve=class{#e;#t=`matic-map-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}`;#o=0;#n=null;#a=!1;constructor(t){this.#e=t}start(){this.#n||(this.#o=ft(this.#e.value),this.#n=this.#e.subscribe(t=>this.#r(t)),window.addEventListener("popstate",this.#i))}#r(t){let e=ft(t);if(this.#a){this.#a=!1,this.#o=e;return}if(e<this.#o){let s=vt(history.state);if(s?.owner===this.#t&&s.depth===this.#o){let n=e-this.#o;this.#o=e,history.go(n);return}}if(e>this.#o)for(let s=this.#o+1;s<=e;s+=1){let n=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...n,maticMapLayer:{owner:this.#t,depth:s}},"",window.location.href)}this.#o=e}#i=()=>{let t=vt(history.state);if(!(ft(this.#e.value)<=(t?.owner===this.#t?t.depth:0))){if(ne(this.#e.value,{type:"dismiss-top-layer"})){let e=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...e,maticMapLayer:{owner:this.#t,depth:this.#o}},"",window.location.href),this.#e.dispatch({type:"open-dialog",dialog:"discardDraft"});return}this.#a=!0,this.#e.dispatch({type:"dismiss-top-layer"})}};dismissTop(){if(this.#o<1)return!1;let t=vt(history.state);return t?.owner===this.#t&&t.depth===this.#o?history.back():this.#e.dispatch({type:"dismiss-top-layer"}),!0}dispose(){this.#n?.(),this.#n=null,window.removeEventListener("popstate",this.#i),this.#o=0}};var js=[Ce,Me,Zt,Se`
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

    /* The wide inspector's width, shared by its grid column and the toast's offset. */
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

    /* Notice slot and toast (shell.md \u00a74, design-system.md .ms-notice): the
       text stays --ms-text on the tone's tint; the glyph and the inline-start
       rule carry the tone, never the text colour. */
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
    /* Wide: bottom centre of the canvas, above the dock. */
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
    /* Narrow: the sheet's top edge. */
    .narrow > .notice-toast { inset-inline: 0; inset-block-end: calc(var(--map-sheet-offset, 0px) + var(--ms-space-2)); max-inline-size: calc(100% - 2 * var(--ms-space-3)); }
    /* Full map: above the HUD, in its column. */
    .root:has(.full-map-hud) > .notice-toast {
      inset-inline: auto var(--ms-space-3);
      inset-block-end: calc(max(var(--ms-space-3), var(--ms-safe-bottom)) + var(--ms-control-lg) + 3 * var(--ms-space-3));
      inline-size: min(24rem, calc(100% - 1.5rem));
      max-inline-size: none;
    }
    .wide:has(.full-map-hud.above-dock) > .notice-toast { inset-block-end: calc(max(var(--ms-space-3), var(--ms-safe-bottom)) + var(--ms-control-lg) + 4 * var(--ms-space-3) + 3.5rem + var(--ms-space-2)); }

    .quick-actions, .shelf { display: grid; gap: var(--ms-space-2); }
    .quick-actions .ms-row__body small { color: var(--ms-text-quiet); }
    /* The featured card is tinted with the accent, which drops the quiet
       text below AA (4.3:1 on the default light theme). Pull it towards
       the body text colour so it clears 4.5:1 on both schemes. */
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
    /* The map dock (the Draw tools, or the rooms selection chip -- one 44px
       row) sits bottom-centre; on a wide layout the HUD is bottom-right and
       the two collide below about 1400px. Lift the HUD clear of the dock. */
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

    /* Programmatic focus after a workflow change is for assistive tech; a ring on a heading reads as a control. */
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
    /* The step buttons are compact on the grip line but still touch targets:
       full control height (44px) on a phone, not the 36px --sm size. */
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
    /* On a short sheet the pinned heading and notice give the body at least half. */
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
  `];var Ys=oe(Pe),je=oe(zt),Xs=oe(Je),Qs=a=>a.dataMode==="history"||a.floor.readOnly,yt=(a,t)=>{let e=(r,l,c)=>Te(t,r,l,c);if(!a.host.connected)return{title:e("v4_reconnecting","Reconnecting"),detail:e("v4_ha_offline","Home Assistant is offline"),icon:j,notable:!0};if(!a.host.administrator)return{title:e("v4_access_required","Access required"),detail:e("v4_admin_only","Administrator only"),icon:j,notable:!0};if(a.host.robotCount===0)return{title:e("v4_no_robot_short","No robot"),detail:e("v4_set_up_robot","Set up a robot"),icon:j,notable:!0};if(ke(a))return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),detail:e("v4_choose_another_robot","Choose another robot to open its map."),icon:j,notable:!0};if(!a.host.robotConnected)return{title:e("v4_robot_offline","Robot offline"),detail:e("v4_last_map_read_only","Last known map \xB7 read only"),icon:j,notable:!0};if(a.activity==="problem")return{title:e("v4_needs_attention","Needs attention"),detail:e("v4_check_robot","Check the robot"),icon:j,notable:!0};if(a.dataMode==="history"){let r=a.resources.history.value?.floors.find(d=>d.id===a.selection.floorId),l=r?.snapshots.findIndex(d=>d.id===a.selection.historyId)??-1,c=r?.snapshots.length??0;return{title:e("v4_saved_map","Saved map"),detail:l>=0?e("v4_read_only_position","Read only \xB7 {position} of {count}",{position:l+1,count:c}):e("v4_read_only","Read only"),icon:st,notable:!1}}if(a.coherence==="verifying"||a.coherence==="booting")return{title:e("v4_locating","Locating"),detail:e("v4_finding_map","Finding the current map"),icon:ae,notable:!0};if((a.resources.entry?.activePlan||a.resources.entry?.runnerLocked)&&(a.activity==="idle"||a.activity==="docked"))return{title:e("v4_task_in_progress","Run in progress"),detail:a.coherence==="unavailable"||a.coherence==="blocked"?e("v4_task_map_unavailable","The live map is unavailable; the current clean continues."):a.activity==="docked"?e("v4_task_docked","Robot docked; the clean has not finished."):e("v4_task_waiting","Waiting for the clean to continue or finish."),icon:nt,notable:!0};if(a.command==="starting"&&(a.activity==="idle"||a.activity==="docked"))return{title:e("v4_action_starting","Starting"),detail:e("v4_action_starting_detail","Waiting for the robot to begin"),icon:ae,notable:!0};let s=a.coherence==="unavailable"||a.coherence==="blocked",n=e("v4_active_map_unavailable","The live map is unavailable; new cleaning is disabled."),o=r=>s?`${r} \xB7 ${n}`:r;if(a.activity==="cleaning")return{title:e("v4_cleaning","Cleaning"),detail:o(e("v4_cleaning_progress","Cleaning in progress")),icon:it,notable:!0};if(a.activity==="recharging"){let r=a.batteryPercent===null?e("v4_recharging_detail","Will resume automatically when ready"):e("v4_recharging_battery","Charging to resume \xB7 {percent}% battery",{percent:a.batteryPercent});return{title:e("v4_recharging","Charging to resume"),detail:o(r),icon:rs,notable:!0}}if(a.activity==="paused")return{title:e("v4_paused","Paused"),detail:o(e("v4_can_resume","Cleaning can resume")),icon:rt,notable:!0};if(a.activity==="returning")return{title:e("v4_returning","Returning"),detail:o(e("v4_going_dock","Going to the dock")),icon:it,notable:!0};if(a.activity==="stopping")return{title:e("v4_stopping","Stopping"),detail:o(e("v4_waiting_robot","Waiting for the robot")),icon:rt,notable:!0};if(s)return{title:e("v4_map_unavailable","Map unavailable"),detail:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start."),icon:j,notable:!0};if(a.coherence==="degraded")return{title:e("v4_map_limited","Map limited"),detail:a.rechecking?e("v4_locating_rechecking","Checking again"):e("v4_cleaning_blocked","Cleaning can't start"),icon:ae,notable:!0,recheck:!0};let i=a.batteryPercent===null?e("v4_ready","Ready"):e("v4_battery","{percent}% battery",{percent:a.batteryPercent});return{title:a.activity==="docked"?e("v4_docked","Docked"):e("v4_ready","Ready"),detail:i,icon:ae,notable:!1}},gt=(a,t)=>{let e=(s,n)=>Te(t,s,n);switch(a.workflow){case"rooms":return{title:e("v4_choose_rooms","Choose rooms"),description:e("v4_choose_rooms_detail","Choose rooms on the map or in the list.")};case"draw":return{title:e("v4_draw_area","Draw an area"),description:e("v4_draw_area_detail","Outline or paint the area, then review it before saving.")};case"plans":return{title:e("v4_your_plans","Your plans"),description:a.resources.plans.value?.plans.length===0?"":e("v4_choose_plan_detail","Tap a plan to see its next run.")};case"plan":return{title:a.planView==="run"?a.planDraft.name:a.planDraft.id?e("v4_edit_plan","Edit plan"):e("v4_new_plan","New plan"),description:""};case"areaReview":return{title:e("v4_name_this_area","Name this area"),description:e("area_details_hint","Name the area and choose cleaning settings.")};case"history":return{title:e("v4_map_history","Map history"),description:e("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")};case"support":return{title:e("v4_map_diagnostics","Map diagnostics"),description:e("v4_map_support_detail","Details to share with support")};case"none":return Qs(a)?{title:e("v4_saved_map_read_only_title","Saved map is read only"),description:a.dataMode==="live"?e("v4_map_recovery_automatic","Cleaning controls return automatically when the live map is ready."):e("v4_saved_map_read_only_detail","Return to the live map to choose rooms, run a plan, or draw a custom area.")}:{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_clean_detail","Choose rooms, a saved plan, or a custom area.")}}},X=["peek","half","full"],En={info:ot,success:ls,warning:cs,error:ds},Cn={info:6e3,success:4e3,warning:6e3,error:1e4},Mn={none:"half",rooms:"half",draw:"peek",plan:"half",plans:"half",areaReview:"half",history:"half",support:"full"},Gs=a=>a.workflow==="plan"&&a.planView==="edit"?"full":Mn[a.workflow],Pn=.5,xn=100,An=6,Tn=48,wt=".panel-top, .sheet-body, .workflow-body",In=["a[href]","button","input","label","select","textarea","summary",'[contenteditable]:not([contenteditable="false"])','[role="button"]','[role="link"]','[role="slider"]','[role="checkbox"]','[role="radio"]','[role="switch"]','[role="tab"]','[role="menuitem"]',`[tabindex]:not([tabindex="-1"]):not(${wt})`].join(","),Js=["button:not(:disabled)","a[href]","input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)","[tabindex]:not([tabindex='-1'])"].join(", "),Zs=a=>!!a.querySelector(Js)||[...a.querySelectorAll("*")].some(t=>t.shadowRoot!==null&&Zs(t.shadowRoot)),$n=(a=document)=>{let t=a.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t},bt=a=>!!(a&&a.isConnected&&a.offsetParent!==null),_t=class extends Ee{constructor(){super();this.state=V();this._measuredNarrow=!1;this._sheetOffset=0;this._overflowOpen=!1;this._helpOpen=!1;this._browserFullscreen=!1;this._sheetDetent="half";this._polite="";this._alert="";this.#t=null;this.#o=new Set;this._toast=null;this.#n=new at(this,()=>import("./workflow-panel-HAOIKA25.js"));this.#a=new at(this,async()=>new(await import("./outline-editor-RAUGU7O4.js")).OutlineEditor({edgeDistance:Ht,validOutline:Bt}));this.#r=ps();this.#s=0;this.#u=0;this.#f=!1;this.#d=!1;this.#k=null;this.#_=null;this.#y=null;this.#m=null;this.#c=null;this.#b=null;this.#w=null;this.#M=null;this.#R=null;this.#v=null;this.#h=new Set;this.#C=null;this.#I=null;this.#l=()=>{this._browserFullscreen=this.#B()};this.#S=e=>{if(!this._overflowOpen)return;let s=this.renderRoot.querySelector(".overflow-wrap");(!s||!e.composedPath().includes(s))&&(this._overflowOpen=!1)};this.#W=()=>{this.#U(),this.#f=!1,this.#d=!1,this._toast=null};this.#re=e=>{e.type==="pointerenter"?this.#f=!0:this.#d=!0,this.#i!==void 0&&(this.#U(),this.#u=Math.max(0,this.#s-Date.now()))};this.#V=e=>{e.type==="pointerleave"?this.#f=!1:e.currentTarget.contains(e.relatedTarget)||(this.#d=!1),this.#$()};this.#j=()=>{this.#W(),this.updateComplete.then(()=>this.#T())};this.#me=()=>{this.#p({type:"set-notice",notice:null}),this.updateComplete.then(()=>this.#T())};this.#N=()=>{for(let e of this.renderRoot.querySelectorAll(wt)){let s=e.scrollHeight>e.clientHeight&&!Zs(e);if(!s&&e.matches(":focus")){e.addEventListener("blur",this.#N,{once:!0});continue}let n=(o,i)=>s?e.setAttribute(o,i):e.removeAttribute(o);n("tabindex","0"),e.classList.contains("panel-top")&&(n("role","group"),n("aria-labelledby","workspace-title"))}};this.#D=e=>{if(!ne(this.state,{type:"open-workflow",workflow:"none"})){Ie(this.state.workflow);return}this.#w=e.currentTarget,this.#v="reload",this.#p({type:"open-dialog",dialog:"discardDraft"})};this.#Pe=(e,s,n)=>this.#e(e,s,n);new fs(this,{container:()=>this.renderRoot?.querySelector(".draw-tools")??null,items:"button"})}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_measuredNarrow:{state:!0},_sheetOffset:{state:!0},_overflowOpen:{state:!0},_helpOpen:{state:!0},_browserFullscreen:{state:!0},_sheetDetent:{state:!0},_polite:{state:!0},_alert:{state:!0},_toast:{state:!0}}}static{this.styles=js}#e(e,s,n){return Te(this.localize,e,s,n,this.dates)}#t;#o;#n;#a;#r;#i;#s;#u;#f;#d;#k;#_;#y;#m;#c;#b;#w;#M;#R;#v;#h;#C;#I;#K(){let e=this.renderRoot;return e instanceof ShadowRoot?e.fullscreenElement??document.fullscreenElement:document.fullscreenElement}#l;#B(){let e=this.renderRoot,s=e.querySelector(".app"),n=e instanceof ShadowRoot?e.fullscreenElement:null;if(n)return n===s;let o=document.fullscreenElement;for(let i=this;i;){if(i===o)return!0;let r=i.getRootNode();i=r instanceof ShadowRoot?r.host:null}return!1}#S;connectedCallback(){super.connectedCallback(),this.#_=new ResizeObserver(([e])=>{if(!e)return;let s=e.contentRect.width<1024||e.contentRect.height<480;s!==this._measuredNarrow&&(this._measuredNarrow=s)}),this.#_.observe(this),window.addEventListener("pointerdown",this.#S,!0),document.addEventListener("fullscreenchange",this.#l),this.#y=new ResizeObserver(([e])=>{if(!e)return;let s=Math.ceil(e.target.getBoundingClientRect().height);s!==this._sheetOffset&&(this._sheetOffset=s)}),this.#m=new ResizeObserver(()=>this.#N()),this.#P(),this.#c=bs(()=>this.#P())}#P(){let e=window.matchMedia("(forced-colors: active)").matches,s=ys(this.renderRoot,{accent:"var(--ms-accent)",danger:"var(--ms-danger)",label:"var(--ms-on-accent)",card:"var(--ms-surface-card)",sunken:"var(--ms-surface-sunken)"}),[n,o,i,r,l]=Object.values(s).map(gs),c=y=>e||!y||!i?[]:ws(y,i),d=(y,b,R=r)=>e||!y||!r||!R?void 0:_s(y,b,[r,R]),u=y=>y?vs(y,1):"",[p,h]=c(n),[f,v]=c(o);this.style.setProperty("--ms-resolved-accent-fill",u(p)),this.style.setProperty("--ms-resolved-on-accent-fill",u(h)),this.style.setProperty("--ms-resolved-danger-fill",u(f)),this.style.setProperty("--ms-resolved-on-danger-fill",u(v)),this.style.setProperty("--ms-resolved-indicator",u(d(n,3,l))),this.style.setProperty("--ms-resolved-danger-text",u(d(o,4.5)))}disconnectedCallback(){this.#W(),this.#_?.disconnect(),this.#_=null,this.#y?.disconnect(),this.#y=null,this.#m?.disconnect(),this.#m=null,this.#c?.(),this.#c=null,this.#b=null,window.removeEventListener("pointerdown",this.#S,!0),document.removeEventListener("fullscreenchange",this.#l),super.disconnectedCallback()}#g(e,s){if(this.#o.has(e)){this.updateComplete.then(()=>this.#g(e,s));return}this.#o.add(e);let n=this[e]===s;this[e]=n?"":s,this.updateComplete.then(()=>{this.#o.delete(e),n&&!this[e]&&this.#g(e,s)})}willUpdate(e){if(this.#k=this.shadowRoot?.activeElement??null,!e.has("state"))return;let s=yt(this.state).title;this.#t!==null&&s!==this.#t&&this.#g("_polite",yt(this.state,this.localize).title),this.#t=s;let n=this.state.notice,o=e.get("state");n!==o?.notice&&(!n&&o?.notice?.tone==="success"&&o.workflow!==this.state.workflow||(this.#W(),n&&(this._toast=n,this.#u=Cn[n.tone],this.#g(n.tone==="error"?"_alert":"_polite",this.#e(n.key,n.fallback,n.placeholders)),this.updateComplete.then(()=>{if(this.state.notice!==n)return;let i=this.renderRoot.querySelector("[data-notice-toast]");this.#f=!!i?.matches(":hover"),this.#d=!!i?.contains(this.shadowRoot?.activeElement??null),this.#$()}))))}#$(){!this._toast||this.#i!==void 0||this.#f||this.#d||(this.#s=Date.now()+this.#u,this.#i=setTimeout(this.#W,this.#u))}#U(){clearTimeout(this.#i),this.#i=void 0}#W;#re;#V;#j;#me;#E(e,s,n){return _`${O(En[e.tone])}<span class="notice-text">${this.#e(e.key,e.fallback,e.placeholders)}</span><button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${n}
      @click=${s}
    >${O(as)}</button>`}updated(e){let s=e,n=this.#k;this.#k=null,n&&(!n.isConnected||n.closest("[hidden]"))&&this.#T();let o=this.renderRoot.querySelector(".mobile-sheet");o!==this.#b&&(this.#y?.disconnect(),this.#b=o,o?this.#y?.observe(o):this._sheetOffset!==0&&(this._sheetOffset=0)),this.#m?.disconnect();for(let i of this.renderRoot.querySelectorAll(wt))for(let r of[i,...i.children])this.#m?.observe(r);if(s.has("_overflowOpen")&&this._overflowOpen&&this.updateComplete.then(()=>{this.renderRoot.querySelector("#map-options select, #map-options button")?.focus()}),s.has("_helpOpen")){if(this._helpOpen)this.updateComplete.then(()=>{this.renderRoot.querySelector(".help-dialog [data-dialog-initial-focus]")?.focus()});else if(s.get("_helpOpen")){let i=this.#R;this.#R=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>i?.focus({preventScroll:!0}))})}}if(e.has("state")){this.#ve();let i=e.get("state");if(i?.precisionOpen&&!this.state.precisionOpen&&this.#Y()?.focus(),i?.fullMap&&!this.state.fullMap){let r=this.#M;this.#M=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??this.renderRoot.querySelector(".nav--menu")??(r?.isConnected?r:null))?.focus({preventScroll:!0})})})}if(i&&!i.fullMap&&this.state.fullMap&&this.updateComplete.then(()=>{let r=this.#M;requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??(r?.isConnected?r:null))?.focus({preventScroll:!0})})}),i?.dialog==="discardDraft"&&i.command==="pending"&&this.state.command!=="pending"){let r=this.#v;this.#v=null,this.state.dialog&&this.#ae(),this.state.notice?.tone==="success"&&(r==="reload"?Ie(this.state.workflow):r&&r.type!=="dismiss-top-layer"&&this.#ee(r))}if(!i?.dialog&&this.state.dialog){let r=$n(this.shadowRoot||document);r?.hasAttribute("data-dialog-launcher")&&(this.#w=r),this.updateComplete.then(()=>{(this.renderRoot.querySelector(".dialog [data-dialog-initial-focus]")??this.renderRoot.querySelector(".dialog button"))?.focus()})}else if(i?.dialog&&!this.state.dialog){i.dialog==="discardDraft"&&(this.#v=null,this.#ye());let r=this.#w?.isConnected&&this.#w.hasAttribute("data-dialog-launcher")?this.#w:this.#Se(i.dialog);this.#w=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{r?.focus({preventScroll:!0});let l=!document.activeElement||document.activeElement===document.body;!this.shadowRoot?.activeElement&&l&&this.#T()})})}if(!i)this._sheetDetent=Gs(this.state);else if(i.workflow!==this.state.workflow||i.planView!==this.state.planView){this._sheetDetent=Gs(this.state);let r=this.state;this.updateComplete.then(()=>{if(i.workflow!=="plan")return this.#T();requestAnimationFrame(()=>{this.#n.value?.focusPlanTarget(i,r,this.renderRoot,bt)||this.#T()})})}}}#N;#T(){[".panel-heading h2",".action-bar .ms-btn--primary",".workspace-toggle"].map(e=>this.renderRoot.querySelector(e)).find(bt)?.focus({preventScroll:!0})}#Y(){let e=this.renderRoot.querySelector(".draw-brush");return bt(e)?e:this.renderRoot.querySelector(Pe)?.shadowRoot?.querySelector(".draw-brush")??null}#p(e){if(ne(this.state,e)){this.#v=e,this.#p({type:"open-dialog",dialog:"discardDraft"});return}this.#ee(e)}#ee(e){this.dispatchEvent(new CustomEvent(ks,{detail:e,bubbles:!0,composed:!0}))}#fe(e){if(e.enabled){if(e.id==="return-live"){this.#p({type:"set-history",historyId:null});return}if(e.id==="clear-draft"){this.#p({type:"clear-draft"});return}this.#H(e.id)}}#O(e,s){this.#Q({type:"open-workflow",workflow:e},s)}#Q(e,s){s instanceof HTMLElement&&ne(this.state,e)&&(this.#w=s),this.#p(e)}#ve(){let e=this.#r,{coherence:s,workflow:n}=this.state;!e||n==="none"&&(s==="booting"||s==="verifying")||(this.#r=null,n==="none"&&this.#h.has(e)&&this.#O(e))}#D;#q(e){if(this.#n.request(),e!=="draw")return this.#n.status;this.#a.request();let s=this.#n.status,n=this.#a.status;return s==="failed"||n==="failed"?"failed":s===n?s:"loading"}#z(){let e=this.#v;if(this.#v=null,e==="reload"){Ie(this.state.workflow);return}e?.type==="select-plan"||e?.type==="select-area"?(this.#p({type:"patch-plan-draft",patch:{dirty:!1}}),this.#p({type:"patch-area-draft",patch:{dirty:!1}}),this.#p({type:"dismiss-top-layer"})):this.#p({type:"discard-draft"}),e&&e.type!=="dismiss-top-layer"&&queueMicrotask(()=>this.#ee(e))}#oe(){this.state.command!=="pending"&&(this.#v=null,this.#ae(),this.#ye())}#ye(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".floor-switcher");e&&(e.value=this.state.selection.floorId);let s=this.renderRoot.querySelector(".robot-switcher");s&&(s.value=this.state.selection.entryId??"")})}#ae(){let e=this.state.dialog,s=e&&this.#w?.isConnected&&this.#w.hasAttribute("data-dialog-launcher")?this.#w:e?this.#Se(e):null;this.#p({type:"dismiss-top-layer"}),s&&requestAnimationFrame(()=>s.focus({preventScroll:!0}))}#H(e){this.dispatchEvent(new CustomEvent(Rs,{detail:typeof e=="string"?{id:e}:e,bubbles:!0,composed:!0}))}#L(e){e.action==="discard"?this.#z():this.#n.value?.confirmDialog(this.state,e.action,s=>this.#p(s),s=>this.#H(s))}#X(e){e!==this._sheetDetent&&(this._sheetDetent=e,this.#g("_polite",e==="peek"?this.#e("v4_workspace_height_peek","Cleaning panel, collapsed"):e==="half"?this.#e("v4_workspace_height_half","Cleaning panel, half height"):this.#e("v4_workspace_height_full","Cleaning panel, full height")))}#G(e,s=!1){let o=X.indexOf(this._sheetDetent)+e;s&&o>=X.length&&(o=0),o=Math.max(0,Math.min(X.length-1,o)),this.#X(X[o]??this._sheetDetent)}#ge(e){let s=this.renderRoot.querySelector(".workspace")?.clientHeight??e.parentElement?.clientHeight??e.offsetHeight,n=parseFloat(getComputedStyle(this).fontSize)||16,o=[".sheet-grip",".sheet-tools",".action-bar"].map(l=>e.querySelector(l)?.offsetHeight??0).reduce((l,c)=>l+c,0)+n*.75,i=Math.min(s*.92,s-n*9),r=Math.min(s*.48,n*26,i);return{peek:Math.min(o,r),half:r,full:i}}#te(){return this.renderRoot.querySelector(".mobile-sheet")}#le(e,s){e.style.transform=s;let n=this.renderRoot.querySelector("[data-notice-toast]");n&&(n.style.transform=s)}#ce(e){let s=e.currentTarget;for(let n of e.composedPath()){if(n===s)return!1;if(n instanceof Element&&n.matches(In))return!0}return!1}#_e(e){if(e.pointerType==="mouse"&&e.button!==0||this.#ce(e))return;let s=this.#te();!s||this.#C||(this.#C={pointerId:e.pointerId,startY:e.clientY,startHeight:s.offsetHeight,heights:this.#ge(s),samples:[{y:e.clientY,t:e.timeStamp}],moved:!1},e.currentTarget.setPointerCapture(e.pointerId),s.classList.add("dragging"))}#be(e){let s=this.#C;if(!s||e.pointerId!==s.pointerId)return;let n=this.#te();if(!n)return;let o=e.clientY-s.startY;for(!s.moved&&Math.abs(o)>An&&(s.moved=!0),s.samples.push({y:e.clientY,t:e.timeStamp});s.samples.length>2&&e.timeStamp-(s.samples[1]?.t??0)>xn;)s.samples.shift();if(!s.moved)return;let i=s.startHeight-s.heights.full,r=s.startHeight-s.heights.peek,l=Math.max(i,Math.min(r,o));this.#le(n,`translateY(${l}px)`)}#x(e){let s=this.#C;if(!s||e.pointerId!==s.pointerId)return;this.#C=null;let n=this.#te();if(n&&(this.#le(n,""),n.classList.remove("dragging")),e.type==="pointercancel")return;if(!s.moved){this.#G(1,!0);return}let o=e.clientY-s.startY,i=X.indexOf(this._sheetDetent),r=s.samples[0],l=s.samples[s.samples.length-1],c=r&&l&&l!==r?(l.y-r.y)/Math.max(1,l.t-r.t):0;if(Math.abs(c)>Pn){let h=Math.max(0,Math.min(X.length-1,i+(c<0?1:-1)));this.#X(X[h]??this._sheetDetent);return}let d=s.startHeight-o,u=this._sheetDetent,p=Number.POSITIVE_INFINITY;for(let h of X){let f=Math.abs(s.heights[h]-d);f<p&&(p=f,u=h)}this.#X(u)}#A(e){for(let s of e.composedPath()){if(s===e.currentTarget)break;if(s instanceof HTMLElement&&s.scrollHeight>s.clientHeight&&/auto|scroll/u.test(getComputedStyle(s).overflowY))return s}return null}#F(e){if(e.pointerType==="mouse"||this.#ce(e))return;let s=this.#A(e);this.#I=s?.scrollTop?null:{pointerId:e.pointerId,startY:e.clientY,scroller:s,consumed:!1}}#ke(e){let s=this.#I;if(!(!s||s.consumed||e.pointerId!==s.pointerId)){if(s.scroller?.scrollTop){this.#I=null;return}e.clientY-s.startY<Tn||(s.consumed=!0,this.#G(-1))}}#se(){this.#I=null}#Ce(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}#de(e){this.#M=e.currentTarget,this.#p({type:this.state.fullMap?"exit-full-map":"enter-full-map"})}#Re(e){this._overflowOpen=!1,e&&this.updateComplete.then(()=>{this.renderRoot.querySelector(".overflow")?.focus()})}#ne(e){if(this.#Re(e==="fullscreen"),e==="support"){this.#O("support");return}let s=this.renderRoot.querySelector(".app");this.#K()?document.exitFullscreen():s?.requestFullscreen()}#ue(){this.#p({type:"set-precision-open",value:!this.state.precisionOpen})}#we(e){this.#R=e.currentTarget,this._helpOpen=!0}#he(e){let s=this.#n.value?.dialogLauncher(e,this.state,n=>this.#p(n));s&&(this.#w=s)}#Se(e){return this.renderRoot.querySelector(Je)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`)??null}#Ee(e){if(!ms(e)&&!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)&&e.key==="Escape"){if(e.preventDefault(),this._overflowOpen){this.#Re(!0);return}if(this._helpOpen){this._helpOpen=!1;return}if(this.state.dialog==="discardDraft"){this.#oe();return}this.#p({type:"dismiss-top-layer"})}}#J(e){if(e.key!=="Tab")return;let n=[...e.currentTarget.querySelectorAll(Js)],o=n[0],i=n.at(-1);if(!o||!i)return;let r=this.shadowRoot?.activeElement;e.shiftKey&&r===o?(e.preventDefault(),i.focus()):!e.shiftKey&&r===i&&(e.preventDefault(),o.focus())}#Me(){let e=this.renderRoot.querySelector(Pe);(e?.shadowRoot?.querySelector(".map-root")??e)?.focus()}#ie(){this._sheetDetent==="peek"&&this.#te()&&this.#X("half"),this.updateComplete.then(()=>this.#T())}#Z(e,s,n){if(!("label"in e))return w;let o=e.labelKey?this.#e(e.labelKey,e.label,e.labelPlaceholders):e.label,i=!e.enabled&&e.reason?e.reasonKey?this.#n.value?.actionReason(this.#Pe,e,n==="primary-reason",r=>this.#p(r))??this.#e(e.reasonKey,e.reason,e.reasonPlaceholders):e.reason:null;return _`
      <button
        class=${`${s} ${e.kind==="danger"?"ms-btn--danger":""}`}
        type="button"
        aria-disabled=${e.enabled?w:"true"}
        aria-describedby=${i?n:w}
        aria-label=${e.id==="stop"?this.#e("v4_stop_cleaning_label","Stop cleaning"):e.id==="run-plan"?this.#e("v4_action_run_plan_named","Run plan {plan}",{plan:this.state.planDraft.name}):w}
        @click=${()=>this.#fe(e)}
      >${o}</button>
      ${i?_`<p class="action-reason" id=${n}>${i}</p>`:w}
    `}#Pe;#Te(e){let s=e.resources.plans.value?.rooms??e.resources.areas.value?.rooms??[];return hs(e.locale,e.selection.roomIds.map(n=>s.find(o=>o.roomId===n)?.name??n))}#Ie(e,s,n){let o=this.#Te(e),i=s?.enabled&&e.workflow==="rooms"&&s.id==="clean-rooms"?e.planDraft.returnToBase&&o?this.#e("v4_rooms_summary_dock","{rooms} \xB7 returns to the dock",{rooms:o}):o:"",r=e.workflow==="plan"&&e.planView==="edit";return _`
      <div class=${r?"action-bar paired":"action-bar"}>
        ${i?_`<p class="action-summary">${i}</p>`:w}
        ${r?this.#n.value?.planCancel(e,s,this.#Pe,(l,c)=>this.#Q(l,c)):w}
        ${s?this.#Z(s,"ms-btn ms-btn--block ms-btn--lg ms-btn--primary","primary-reason"):w}
        ${n?this.#Z(n,"ms-btn ms-btn--block ms-btn--lg ms-btn--secondary","secondary-reason"):w}
      </div>
    `}#pe(e,s,n=w){return _`
      <div class="host-state">
        <h3>${e}</h3>
        <p>${s}</p>
        ${n}
      </div>
    `}#xe(e,s=!1){return s||this.#h.add(e),()=>{s||this.#O(e)}}#Ae(e,s,n,o,i=!1){return _`
      <button
        class="ms-row"
        type="button"
        aria-disabled=${i?"true":w}
        @click=${this.#xe(n,i)}
      >
        <span class="ms-row__lead">${O(s)}</span>
        <span class="ms-row__body"><strong>${e}</strong>${o?_`<small>${o}</small>`:w}</span>
        <span class="ms-row__trail">${O(Ae)}</span>
      </button>
    `}#Le(e){let s=e.resources.history.value?.floors||[],n=s.length?s.map((o,i)=>({id:o.active?"current":o.id,label:`${o.label||(o.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:o.ordinal??i+1}))}${!o.active&&o.snapshots.length===0?` \xB7 ${this.#e("v4_floor_not_captured","No saved map for this floor yet")}`:""}`,disabled:!o.active&&o.snapshots.length===0})):[{id:e.selection.floorId,label:e.floor.displayName,disabled:!1}];return _`
      <select
        class="ms-select context-switcher floor-switcher"
        slot="floor"
        data-map-control
        name="map-floor"
        aria-label=${this.#e("v4_choose_floor","Choose floor")}
        ?disabled=${n.length<=1}
        .value=${e.selection.floorId}
        @change=${o=>this.#p({type:"set-floor",floorId:o.currentTarget.value})}
      >${n.map(o=>_`
        <option value=${o.id} ?selected=${o.id===e.selection.floorId} ?disabled=${o.disabled}>${o.label}</option>
      `)}</select>
    `}#We(e,s,n){let o=(g,E,C)=>this.#e(g,E,C);this.#h=new Set(["support"]);let i=()=>this.#Ae(o("v4_map_history","Map history"),st,"history",o("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")),r=()=>this.#Ae(o("v4_map_diagnostics","Map diagnostics"),ot,"support",o("v4_map_support_detail","Details to share with support")),{host:l}=e;if(!l.connected)return this.#pe(o("v4_reconnecting_title","Reconnecting to Home Assistant"),o("v4_reconnecting_body","Cleaning controls come back when Home Assistant reconnects."));if(!l.administrator)return this.#pe(o("v4_admin_title","Administrator access required"),o("v4_admin_body","Ask a Home Assistant administrator to open this map."));if(l.robotCount===0)return this.#pe(o("v4_no_robot_title","No robot set up"),o("v4_no_robot_body","Add the Matic (Unofficial) integration to see a map here."),_`<a class="ms-btn ms-btn--secondary" href="/config/integrations/integration/matic_robot">${o("v4_open_integration","Open integration")}</a>`);if(ke(e))return this.#pe(o("v4_selected_robot_unavailable","Selected robot unavailable"),o("v4_choose_another_robot","Choose another robot to open its map."));if(!l.robotConnected)return _`
        ${this.#pe(o("v4_robot_offline_title","Robot offline"),o("v4_robot_offline_body","Showing the last known map. Cleaning comes back when the robot reconnects."))}
        <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
        <div class="shelf">${i()}${r()}</div>
      `;if(Qs(e))return _`
        <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
        <div class="shelf">
          ${i()}
          ${r()}
        </div>
      `;let c=e.coherence==="verifying"||e.coherence==="booting",d=e.resources.plans,u=d.value,p=u!==null&&u.rooms.length===0,h=u?.plans.length??0,f=d.status==="loading",v=d.status==="error",y=c||p,b=c?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):p?o("v4_no_rooms_reason","Can't clean rooms until you name them in the Matic app."):null,R=c?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):null,k=c?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):o("v4_areas_quick_detail","Draw or choose a custom area");return _`
      ${e.activity==="problem"?this.#pe(o("v4_attention_title","The robot needs attention"),o("v4_attention_body","The robot reported a problem. Check it in the Matic app, then start a new clean.")):n.recheck?_`
          <div class="host-state">
            <p>${o("v4_map_limited_body","Home Assistant can show this map but can't confirm it well enough to start cleaning.")}</p>
            <button
              class="ms-btn ms-btn--secondary"
              type="button"
              aria-disabled=${e.rechecking?"true":w}
              @click=${()=>{this.state.rechecking||this.#H("recheck-status")}}
            >${o("v4_retry","Try again")}</button>
          </div>
        `:_`
          <div class="quick-actions" role="group" aria-label=${o("v4_cleaning_choices","Cleaning choices")}>
            <button
              class="ms-row ms-row--card ms-row--featured"
              type="button"
              aria-disabled=${y?"true":w}
              @click=${this.#xe("rooms",y)}
            >
              <span class="ms-row__lead">${O(ae)}</span>
              <span class="ms-row__body">
                <strong>${o("v4_clean_rooms","Clean rooms")}</strong>
                <small>${b??o("v4_clean_rooms_hint","Choose rooms for this run")}</small>
              </span>
              <span class="ms-row__trail">${O(Ae)}</span>
            </button>
            <button
              class="ms-row ms-row--card"
              type="button"
              aria-disabled=${c?"true":w}
              @click=${this.#xe("plans",c)}
            >
              <span class="ms-row__lead">${O(nt)}</span>
              <span class="ms-row__body">
                <strong>${f?o("v4_plans_loading","Checking saved plans"):v?o("v4_plans_unavailable","Plans unavailable"):h?o("v4_run_a_plan","Run a plan"):o("v4_create_plan","Create a plan")}</strong>
                <small>${R??(f?o("v4_plans_loading_hint","Reading plans for this floor"):v?o("v4_plans_unavailable_hint","Try again to load your plans."):h?h===1?o("v4_saved_routine","1 saved plan"):o("v4_saved_routines","{count} saved plans",{count:h}):o("v4_no_plans_hint","Save a plan to repeat a set of rooms."))}</small>
              </span>
              <span class="ms-row__trail">${O(Ae)}</span>
            </button>
          </div>
        `}
      <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
      <div class="shelf">
        ${this.#Ae(o("v4_custom_areas","Clean custom area"),is,"draw",k,c)}
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
              @click=${()=>this.#p({type:"set-appearance",appearance:"photo"})}
            >${o("map_style_photo","Photo")}</button>
            <button
              class="ms-btn"
              type="button"
              aria-pressed=${String(e.appearance==="rooms")}
              @click=${()=>this.#p({type:"set-appearance",appearance:"rooms"})}
            >${o("v4_room_colours","Room colors")}</button>
          </div>
          <label class="ms-checkbox">
            <input type="checkbox" .checked=${e.labelsVisible} @change=${()=>this.#p({type:"toggle-labels"})}>
            ${o("v4_room_names","Room names")}
          </label>
          <button
            class="ms-btn ms-btn--secondary help-launcher"
            type="button"
            aria-haspopup="dialog"
            aria-expanded=${String(this._helpOpen)}
            @click=${this.#we}
          >${o("v4_how_to_move","How to move the map")}</button>
        </div>
      `:w}
    `}#qe(e,s,n){if(e.workflow==="none")return this.#We(e,s,n);let o=this.#q(e.workflow);return o!=="ready"?s&&e.workflow==="draw"?w:lt(o,this.localize,this.#D):_`<${Xs}
      .state=${e}
      .localize=${this.localize}
      .dates=${this.dates}
      .retry=${this.#D}
      @matic-workspace-intent=${this.#he}
    ></${Xs}>`}#$e(e,s){let n=e.workflow==="plan";if(e.workflow==="none"||n&&e.planView==="edit")return w;let o=n?this.#e("v4_back_to_plans","Back to plans"):this.#e("v4_back_to_all_tasks","Back to all tasks");return _`
      <button
        class=${s?"sheet-back ms-btn ms-btn--icon ms-btn--sm":"panel-back ms-btn ms-btn--secondary"}
        type="button"
        aria-label=${o}
        title=${s?o:w}
        data-dialog-launcher="discardDraft"
        @click=${i=>this.#O(n?"plans":"none",i.currentTarget)}
      >${O(tt)}${s?w:_`<span class="ms-btn__label">${n?this.#e("v4_your_plans","Your plans"):this.#e("v4_all_tasks","All tasks")}</span>`}</button>
    `}#Oe(e){let s=e.workflow==="plan",n=gt(e,this.localize).title;return _`
      <div class="panel-top">
        <div class="panel-heading">
          ${this.#$e(e,!1)}
          <h2 id="workspace-title" tabindex="-1">${s&&this.#n.value?.planTitle(e,n,this.#Pe)||n}</h2>
          ${s?this.#n.value?.planTools(e,this.localize,this.#he):w}
        </div>
        ${e.notice?_`<div class="notice" data-notice-slot data-tone=${e.notice.tone}>${this.#E(e.notice,this.#me,this.#e("v4_close","Close"))}</div>`:w}
      </div>
    `}#De(e,s,n){let{description:o}=gt(e,this.localize);return _`
      ${o?_`<p class="panel-description">${o}</p>`:w}
      ${this.#qe(e,s,n)}
    `}#ze(e,s){let o=gt(e,this.localize).title;return e.workflow==="rooms"&&e.selection.roomIds.length&&(o=this.#e("v4_rooms_selected_names","{count} selected \xB7 {rooms}",{count:e.selection.roomIds.length,rooms:this.#Te(e)})),this._sheetDetent!=="peek"?s.detail?`${s.title} \xB7 ${s.detail}`:s.title:s.notable?`${s.title} \xB7 ${o}`:o}#He(){let e=(s,n)=>this.#e(s,n);return _`
      <div class="dialog-backdrop" @click=${s=>{s.target===s.currentTarget&&(this._helpOpen=!1)}}>
        <section
          class="dialog help-dialog ms-surface ms-surface--overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="help-title"
          @keydown=${this.#J}
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
    `}render(){let e=this.state,s=e.narrowHint||this._measuredNarrow,n=yt(e,this.localize),o=ke(e),i=Wt({...e,narrowHint:s}),r=qt(e),l=!s&&i.id==="stop"?i:!s&&r?.id==="stop"?r:null,c=l&&l===i?null:i,d=e.workflow==="draw"&&e.dataMode==="live"?{id:"clear-draft",label:"Clear",labelKey:"v4_clear_drawing",kind:"neutral",enabled:e.draw.circles.length>0||!!e.draw.outline?.points.length}:null,u=l&&l===r?null:r??d,p=e.fullMap&&(e.coherence==="verifying"||e.coherence==="booting"),h=e.fullMap||e.host.administrator&&e.host.robotCount>0&&e.map.available,f=e.workflow==="plan",v=e.dialog==="discardDraft",y=v?Tt(e,f?"confirmDeletePlan":"confirmDeleteArea")?.name:void 0,b=v?{title:this.#e("v4_discard_title","Discard changes?"),detail:y===void 0?f?this.#e("v4_discard_new_plan_detail","This new plan hasn't been saved, and discarding it can't be undone."):this.#e("v4_discard_new_area_detail","This new area hasn't been saved, and discarding it can't be undone."):f?this.#e("v4_discard_plan_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:y}):this.#e("v4_discard_area_detail",`Your changes to "{name}" haven't been saved, and discarding them can't be undone.`,{name:y}),cancelLabel:this.#e("v4_keep_area_editing","Keep editing"),confirmLabel:this.#e("v4_discard","Discard"),action:"discard"}:e.dialog===null?void 0:this.#n.value?.dialogCopy(e.dialog,e,this.localize),R=v&&e.command==="pending",k=v&&(i.id==="save-plan"||i.id==="save-area")&&(i.enabled||R)?i.id:null,g=s&&!e.fullMap?`--map-sheet-offset:${this._sheetOffset}px`:"--map-sheet-offset:0px",E=s&&e.workflow==="draw",C=e.precisionOpen&&e.workflow==="draw",$=this._toast&&(this._toast.tone==="success"||this._toast.tone==="error"||e.fullMap||s&&this._sheetDetent==="peek")?this._toast:null;return _`
      <div class=${`root ${s?"narrow":"wide"}`} @keydown=${this.#Ee}>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#Me}>${this.#e("v4_skip_to_map","Skip to the map")}</button>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#ie}>${this.#e("v4_skip_to_workspace","Skip to the panel")}</button>
        <div class="app" ?inert=${!!b||this._helpOpen}>
          <header class="app-bar">
            ${e.precisionOpen?w:_`
              <button
                class="nav nav--menu ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                title=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                @click=${this.#Ce}
              >${O(ts)}</button>
            `}

            ${e.precisionOpen?_`
              <button
                class="nav ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_back","Back")}
                @click=${()=>this.#p({type:"dismiss-top-layer"})}
              >${O(tt)}</button>
            `:w}
            <h1 class="title">${this.#e("map_studio_title","Matic Map")}</h1>
            ${e.robots.length>1||o?_`
              <select
                class="ms-select context-switcher robot-switcher"
                name="matic-robot"
                aria-label=${this.#e("v4_choose_robot","Choose robot")}
                .value=${e.selection.entryId||""}
                @change=${M=>this.#p({type:"select-entry",entryId:M.currentTarget.value})}
              >${o?_`
                <option value=${e.selection.entryId||""} selected disabled>${this.#e("v4_selected_robot_unavailable","Selected robot unavailable")}</option>
              `:w}${e.robots.map(M=>_`
                <option value=${M.entryId} ?selected=${M.entryId===e.selection.entryId}>${M.label}</option>
              `)}</select>
            `:w}

            <span class="spacer"></span>
            ${h?_`
              <button
                class="workspace-toggle ms-btn ms-btn--icon"
                type="button"
                aria-label=${e.fullMap?this.#e("v4_show_workspace","Show cleaning panel"):this.#e("v4_hide_workspace","Hide cleaning panel")}
                aria-controls="map-workspace"
                aria-expanded=${String(!e.fullMap)}
                title=${e.fullMap?this.#e("v4_show_workspace","Show cleaning panel"):this.#e("v4_hide_workspace","Hide cleaning panel")}
                @click=${this.#de}
              >${O(ss)}</button>
            `:w}
            <div class="overflow-wrap">
              <button
                class="overflow ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_map_options","Map options")}
                aria-expanded=${String(this._overflowOpen)}
                aria-controls="map-options"
                @click=${()=>{this._overflowOpen=!this._overflowOpen}}
              >${O(es)}</button>
              ${this._overflowOpen?_`
                <div id="map-options" class="overflow-menu ms-surface ms-surface--overlay">
                  <label class="overflow-field ms-field">${this.#e("map_quality_label","Map detail")}
                    <select
                      aria-label=${this.#e("map_quality_label","Map detail")}
                      .value=${e.quality}
                      @change=${M=>this.#p({type:"set-quality",quality:M.currentTarget.value})}
                    >
                      <option value="auto">${this.#e("map_quality_auto","Auto detail")}</option>
                      <option value="efficient">${this.#e("map_quality_efficient","Efficient")}</option>
                      <option value="balanced">${this.#e("map_quality_balanced","Balanced")}</option>
                      <option value="maximum">${this.#e("map_quality_maximum","Maximum")}</option>
                    </select>
                  </label>
                  <button class="ms-row ms-row--menu" type="button" @click=${()=>this.#ne("support")}>${this.#e("v4_map_diagnostics","Map diagnostics")}</button>
                  <button class="ms-row ms-row--menu" type="button" @click=${()=>this.#ne("fullscreen")}>${this._browserFullscreen?this.#e("v4_leave_full_screen","Leave full screen"):this.#e("v4_full_screen","Full screen")}</button>
                </div>
              `:w}
            </div>
          </header>

          <main class=${`workspace ${e.fullMap?"full-map":""}`} style=${g}>
            <div class="canvas">
              <${Ys}
                class="map-canvas"
                style=${g}
                .state=${e}
                .localize=${this.localize}
                .dates=${this.dates}
                .outlineEditor=${this.#a.value}
                .narrow=${s}
              >${this.#Le(e)}
                ${s&&!e.fullMap&&this._sheetDetent==="full"?_`
                  <button
                    class="sheet-scrim"
                    slot="scrim"
                    data-map-control
                    type="button"
                    aria-label=${this.#e("v4_collapse_sheet","Collapse panel")}
                    @click=${()=>this.#X("peek")}
                  ></button>
                `:w}
              </${Ys}>
              ${!s&&C?_`
                <div class="precision-popover">
                  <${je} compact .state=${e} .localize=${this.localize}></${je}>
                </div>
              `:w}
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
              data-detent=${s?this._sheetDetent:w}
              data-workflow=${e.workflow}
              aria-label=${this.#e("v4_map_workspace","Cleaning panel")}
            >
              ${s?_`
                <div
                  class="sheet-grip"
                  @pointerdown=${this.#_e}
                  @pointermove=${this.#be}
                  @pointerup=${this.#x}
                  @pointercancel=${this.#x}
                >
                  <span class="sheet-handle" role="presentation"></span>
                  ${this._sheetDetent==="peek"?this.#$e(e,!0):w}
                  <span class="sheet-status">${this.#ze(e,n)}</span>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_more","Expand panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="full"?"true":w}
                    @click=${()=>this.#G(1)}
                  >${O(ns)}</button>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_less","Collapse panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="peek"?"true":w}
                    @click=${()=>this.#G(-1)}
                  >${O(os)}</button>
                </div>
                ${E?_`
                  <div class="sheet-tools">
                    ${lt(this.#q("draw"),this.localize,this.#D)}
                    ${us(e,{intent:M=>this.#p(M),openBrush:()=>this.#ue(),t:(M,D,W)=>this.#e(M,D,W)},"grid")}
                    ${C?_`
                      <div class="precision-popover">
                        <${je} compact inline .state=${e} .localize=${this.localize}></${je}>
                      </div>
                    `:w}
                  </div>
                `:w}
                <div
                  class="sheet-panel"
                  id="sheet-panel"
                  @pointerdown=${this.#F}
                  @pointermove=${this.#ke}
                  @pointerup=${this.#se}
                  @pointercancel=${this.#se}
                >
                  ${this.#Oe(e)}
                  <div class="sheet-body" role="region" aria-labelledby="workspace-title">${this.#De(e,s,n)}</div>
                </div>
                ${this.#Ie(e,c,u)}
              `:_`
                <div class="status-strip">
                  <span class="status-icon" aria-hidden="true">${O(n.icon)}</span>
                  <span class="status-copy"><strong>${n.title}</strong><small>${n.detail}</small></span>
                  ${l?this.#Z(l,"status-action ms-btn ms-btn--secondary","status-reason"):w}
                </div>
                <section class="workflow">
                  ${this.#Oe(e)}
                  <div class="workflow-body" role="region" aria-labelledby="workspace-title">${this.#De(e,s,n)}</div>
                  ${this.#Ie(e,c,u)}
                </section>
              `}
            </aside>

            ${e.fullMap?_`
              <section
                class=${`full-map-hud ms-surface ms-surface--floating ${r?"has-secondary":""} ${!s&&(e.workflow==="draw"||e.workflow==="rooms"&&e.selection.roomIds.length>0)?"above-dock":""}`}
                aria-label=${this.#e("v4_robot_status_and_action","Robot status and action")}
              >
                <span class="hud-copy"><strong>${n.title}</strong><small>${n.detail}</small></span>
                ${p&&i.id!=="stop"?w:this.#Z(i,"ms-btn ms-btn--lg ms-btn--primary","hud-reason")}
                ${r&&(!p||r.id==="stop")?this.#Z(r,"ms-btn ms-btn--lg ms-btn--secondary","hud-secondary-reason"):w}
              </section>
            `:w}
          </main>
        </div>

        <div
          class="notice notice-toast"
          data-notice-toast
          role="region"
          aria-label=${this.#e("v4_notifications","Notifications")}
          data-tone=${$?.tone??w}
          style=${g}
          ?hidden=${!$}
          ?inert=${!!b||this._helpOpen}
          @pointerenter=${this.#re}
          @focusin=${this.#re}
          @pointerleave=${this.#V}
          @focusout=${this.#V}
        >${$?this.#E($,this.#j,this.#e("v4_hide_notification","Hide notification")):w}</div>

        <div class="sr-only" aria-live="polite" aria-atomic="true">${this._polite}</div>
        <div class="sr-only" role="alert" aria-atomic="true">${this._alert}</div>

        ${this._helpOpen?this.#He():w}

        ${b?_`
          <div class="dialog-backdrop">
            <section
              class="dialog ms-surface ms-surface--overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title"
              aria-describedby="dialog-detail"
              @keydown=${this.#J}
            >
              <h2 id="dialog-title">${b.title}</h2>
              <div id="dialog-detail">
                <p>${b.detail}</p>
                ${b.consequence?_`<p>${b.consequence}</p>`:w}
                ${R?_`<p>${this.#e("v4_notice_saving","Saving\u2026")}</p>`:w}
              </div>
              <div class="dialog-actions">
                <button
                  class=${v?"ms-btn":"ms-btn ms-btn--secondary"}
                  type="button"
                  data-dialog-initial-focus
                  aria-disabled=${R?"true":w}
                  @click=${v?this.#oe:this.#ae}
                >${b.cancelLabel}</button>
                ${k?_`<button
                  class="ms-btn ms-btn--secondary"
                  type="button"
                  aria-disabled=${R?"true":w}
                  @click=${()=>{R||this.#H(k)}}
                >${this.#e("v4_save","Save")}</button>`:w}
                <button
                  class="discard ms-btn ms-btn--primary ms-btn--danger"
                  type="button"
                  aria-disabled=${R?"true":w}
                  @click=${()=>{R||this.#L(b)}}
                >${b.confirmLabel}</button>
              </div>
            </section>
          </div>
        `:w}
      </div>
    `}};customElements.get(pe)||customElements.define(pe,_t);var en=oe(pe),ge=new WeakMap,On={},Dn=3e4,kt=(a,t)=>{ge.get(a)===t&&ge.delete(a)},Rt=class extends Ee{constructor(){super(...arguments);this.narrow=!1;this._workspace=V();this.#e=new $e;this.#t=new It(this._workspace);this.#o=null;this.#n=null;this.#a=null;this.#r=null;this.#i=null;this.#s=null}static{this.styles=[Ce,Me,Se`
:host { display: block; block-size: 100%; }
`]}static{this.properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_workspace:{state:!0}}}#e;#t;#o;#n;#a;#r;#i;#s;#u(e=this.hass,s=this.panel){let n=this.#t.value.selection;return n.entrySource==="user"?this.#e.project(e,s,n.entryId):this.#e.project(e,s)}#f(){let e=this.hass,s=e?.loadBackendTranslation;if(!e||typeof s!="function")return;let n=e.connection??On,o=e.language??"";ge.get(n)!==o&&(ge.set(n,o),Promise.resolve().then(()=>s.call(e,"common","matic_robot")).catch(()=>{if(ge.get(n)===o){if(!this.isConnected){kt(n,o);return}this.#s&&clearTimeout(this.#s.timer),this.#s={owner:n,language:o,timer:setTimeout(()=>{this.#s=null,kt(n,o),this.#f()},Dn)}}}))}shouldUpdate(e){if(this.#f(),!e.has("hass")||[...e.keys()].some(n=>n!=="hass"))return!0;let s=e.get("hass");return s?.connection!==this.hass?.connection||s?.localize!==this.hass?.localize?!0:this.#u()!==this.#o}connectedCallback(){super.connectedCallback(),this.#f(),this.#n=this.#t.subscribe(e=>{if(this._workspace=e,e.selection.entryId!==this.#o?.entryKey){let s=this.#u();s!==this.#o&&(this.#o=s,this.#r?.sync(s))}}),this.#d()}disconnectedCallback(){this.#s&&(clearTimeout(this.#s.timer),kt(this.#s.owner,this.#s.language),this.#s=null),this.#n?.(),this.#n=null,this.#k(),super.disconnectedCallback()}#d(){if(!(!this.isConnected||this.#r)&&(this.#o=this.#u(),this.#a=new Le(()=>this.hass),this.#r=new Ue(this.#t,this.#a,this.hass?.connection??null),this.#i=new Ve(this.#t),this.#i.start(),this.#o)){this.#r.sync(this.#o);let{host:e}=this.#o;e.connected&&e.administrator&&e.robotCount>0&&this.#r.refreshCatalog(this.#t.value.selection.floorId==="current")}}#k(){this.#i?.dispose(),this.#i=null,this.#r?.dispose(),this.#r=null,this.#a=null}willUpdate(e){if(e.has("hass")||e.has("panel")){let s=e.get("hass"),n=e.has("hass")&&s?.connection!==this.hass?.connection,o=this.#u(),i=o!==this.#o;i&&(this.#o=o),n?(this.#k(),this.#d()):(i||e.has("panel"))&&this.#r?.sync(o)}e.has("narrow")&&this.#t.value.narrowHint!==this.narrow&&this.#t.dispatch({type:"set-narrow-hint",value:this.narrow})}#_(e){if(!Pt(e.detail))return;e.stopPropagation();let s=e.detail;if(s.type==="dismiss-top-layer"||s.type==="exit-full-map"){this.#i?.dismissTop()||this.#t.dispatch(s);return}if(s.type==="open-workflow"&&s.workflow!=="none"){this.#r?.openWorkflow(s.workflow);return}if(s.type==="set-floor"){this.#r?.selectFloor(s.floorId);return}if(s.type==="select-entry"){if(!this._workspace.robots.some(n=>n.entryId===s.entryId)||this.#e.project(this.hass,this.panel,s.entryId).entryKey!==s.entryId)return;this.#t.dispatch(s);return}if(s.type==="set-history"){this.#r?.selectHistory(s.historyId);return}if(s.type==="select-plan"){this.#r?.selectPlan(s.planId);return}if(s.type==="set-plan-enabled"){this.#r?.setPlanEnabled(s.enabled);return}if(s.type==="select-area"){this.#r?.selectArea(s.areaId),s.workflow==="areaReview"&&this.#r?.openWorkflow("areaReview");return}this.#t.dispatch(s)}#y(e){e.stopPropagation(),typeof e.detail?.id=="string"&&(e.detail.id==="reset-room-cadence"&&"planId"in e.detail&&"roomId"in e.detail&&"mode"in e.detail?this.#r?.executeAction(e.detail):this.#r?.executeAction(e.detail.id),this.dispatchEvent(new CustomEvent("matic-map-v4-action-requested",{detail:{id:e.detail.id},bubbles:!0,composed:!0})))}getWorkspaceSnapshot(){return this.#t.value}getRequestDiagnostics(){return Object.freeze({http:this.#a?.requestDiagnostics()??null,workspace:this.#r?.workspaceDiagnostics()??null})}render(){return _`
      <${en}
        .state=${this._workspace}
        .localize=${this.hass?.localize}
        .dates=${this.#o?.dates}
        @matic-workspace-intent=${this.#_}
        @matic-workspace-action=${this.#y}
      ></${en}>
    `}};customElements.get(Ze)||customElements.define(Ze,Rt);export{$e as a,Rt as b};
