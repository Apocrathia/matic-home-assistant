import{A as ct,B as ms,C as fs,D as vs,E as ys,F as gs,G as bs,H as ws,I as _s,J as dt,K as ks,a as xe,b as Ht,c as Ze,d as pe,e as et,f as Nt,g as tt,h as Ft,i as Kt,j as oe,k as me,l as ie,m as Ut,n as S,o as Ae,p as Vt,q as jt,r as Yt,s as Xt,t as Gt,u as Qt,v as Jt,w as us,x as at,y as lt,z as ps}from"./chunk-VM5QVXIL.js";import{C as is,D as st,E as nt,F as ot,G as it,H as rt,I as rs,J as j,K as as,L as ls,M as cs,N as ds,O as I,a as Me,b as Pe,c as Zt,d as re,e as Te,f as es,g as ts,h as ss,i as Ie,j as ns,k as os}from"./chunk-EVRNAL4X.js";import{C as Je,D as Se,E as $t,F as Ot,H as Dt,I as Lt,J as qt,N as Ee,O as Wt,P as zt,Q as Bt,S as k,U as Ce,V as $e,W as hs,c as Mt,h as M,j as ke,k as Z,n as V,o as Pt,p as Xe,q as Ge,r as xt,t as At,u as Tt,v as It,x as Re,z as Qe}from"./chunk-3DL3AR46.js";var an=(a,t)=>{if(t?.recharge_and_resume===!0&&t?.charging===!0)return"recharging";switch(a){case"cleaning":return"cleaning";case"paused":return"paused";case"returning":return"returning";case"docked":return"docked";case"idle":return"idle";case"error":return"problem";default:return"unknown"}},ln=a=>typeof a!="number"||!Number.isFinite(a)?null:Math.round(Math.max(0,Math.min(100,a))),cn=a=>{let t=a.attributes?.matic_entry_id;return typeof t=="string"&&t.length>0?t:null},dn=a=>String(a||"local-user").replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",Rs=a=>{if(typeof a!="string")return"Robot";let t=a.trim();return t&&Array.from(t).length<=128&&!/[\u0000-\u001f\u007f]/u.test(t)?t:"Robot"},Oe=class{#e="";#t=null;project(t,e,s=null){let n=t?.states??{},o=e?.config?.entry_id,r=s||(typeof o=="string"?o:null),l=null,c=null,d=r,u=new Map;for(let[$,L]of Object.entries(n)){let z=cn(L);z&&$.startsWith("vacuum.")&&(u.set(z,{entryId:z,label:Rs(L.attributes?.friendly_name)}),(r?z===r:!l)&&(l=L,c=$,d=z))}let p={connected:t?.connected!==!1,administrator:t?.user?.is_admin===!0,robotConnected:l!==null&&l.state!=="unavailable"&&l.state!=="unknown",robotCount:u.size},h=l?an(l.state,l.attributes):"unknown",f=ln(l?.attributes?.battery_level),y=t?.selectedLanguage||t?.language||"en",v=t?.locale?.language||y,b=t?.locale?.time_zone==="server"?t.config?.time_zone:void 0,E=this.#t?.dates,R=E?.language===v&&E.timeZone===b?E:{language:v,timeZone:b},g=dn(t?.user?.id),C=Rs(l?.attributes?.friendly_name),_=[...u.values()].sort(($,L)=>$.label.localeCompare(L.label,y,{sensitivity:"base"})),D=[p.connected,p.administrator,p.robotConnected,p.robotCount,h,f??"none",y,v,b??"browser",g,c??"none",d??"none",C,_.map($=>`${$.entryId}:${$.label}`).join(",")].join("|");return D===this.#e&&this.#t?this.#t:(this.#e=D,this.#t={host:p,activity:h,batteryPercent:f,language:y,dates:R,userKey:g,vacuumEntityId:c,entryKey:d,robotLabel:C,robots:_},this.#t)}};var Es=Symbol.for(""),un=a=>{if(a?.r===Es)return a?._$litStatic$},ae=a=>({_$litStatic$:a,r:Es});var Ss=new Map,ut=a=>(t,...e)=>{let s=e.length,n,o,i=[],r=[],l,c=0,d=!1;for(;c<s;){for(l=t[c];c<s&&(o=e[c],(n=un(o))!==void 0);)l+=n+t[++c],d=!0;c!==s&&r.push(o),i.push(l),c++}if(c===s&&i.push(t[s]),d){let u=i.join("$$lit$$");(t=Ss.get(u))===void 0&&(i.raw=i,Ss.set(u,t=i)),e=r}return a(t,...e)},w=ut(Wt),Fn=ut(zt),Kn=ut(Bt);var hn=1024*1024,Cs=a=>{let t=s=>{let n=a.sceneHeaderBytes,o=a.scenePointStride,i=a.sceneMaxPoints,r=a.sceneMaxBytes,l=()=>{throw new Error("invalid-scene")};(!(s instanceof ArrayBuffer)||s.byteLength<n||s.byteLength>r)&&l();let c=new DataView(s),d=new Uint8Array(s,0,8),u=String.fromCharCode(...d),p=c.getUint16(8,!0),h=c.getUint16(10,!0),f=c.getUint32(12,!0),y=c.getUint32(16,!0),v=c.getUint32(20,!0),b=y+v,E=n+f;(u!=="MATIC3D\0"||p!==1||h!==o||f>1048576||b<1||b>i||E+b*h!==s.byteLength)&&l();let R;try{R=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(new Uint8Array(s,n,f)))}catch{l()}(!R||typeof R!="object"||Array.isArray(R))&&l();let g=R,C=g.meters_per_cell,_=g.origin_cells,D=g.span_cells;(typeof C!="number"||!Number.isFinite(C)||C<.001||C>.1||!Array.isArray(_)||_.length!==2||!_.every(O=>typeof O=="number"&&Number.isFinite(O))||!Array.isArray(D)||D.length!==2||!D.every(O=>typeof O=="number"&&Number.isFinite(O)&&O>=1&&O<=65536))&&l();let L=(Array.isArray(g.rooms)?g.rooms.slice(0,128):[]).flatMap((O,we)=>{if(!O||typeof O!="object"||Array.isArray(O))return[];let H=O,G=typeof H.name=="string"?H.name.trim():"";if(!G||Array.from(G).length>128||/[\u0000-\u001f\u007f]/u.test(G))return[];if(!Array.isArray(H.boundary)||H.boundary.length<3||H.boundary.length>8192)return[];let _e=H.boundary.flatMap(U=>{if(!Array.isArray(U)||U.length!==2)return[];let[Q,ne]=U;return typeof Q=="number"&&Number.isFinite(Q)&&typeof ne=="number"&&Number.isFinite(ne)?[[Q,ne]]:[]}),ee=H.center;if(_e.length<3||!Array.isArray(ee)||ee.length!==2)return[];let[te,se]=ee;return typeof te!="number"||!Number.isFinite(te)||typeof se!="number"||!Number.isFinite(se)?[]:[{id:`scene-room-${we+1}`,name:G,boundary:_e,center:[te,se]}]}),z=typeof g.sample_step=="number"&&Number.isInteger(g.sample_step)?Math.max(1,Math.min(i,g.sample_step)):1,he=_,be=D;return{buffer:s,pointOffset:E,floorCount:y,surfaceCount:v,total:b,metadata:{metersPerCell:C,origin:[he[0],he[1]],span:[be[0],be[1]],sampleStep:z,rooms:L}}};return{parseTransfer:t,decodeDeltaTransfer:async(s,n,o)=>{let i=(A="invalid-scene-delta")=>{throw new Error(A)},r=()=>{if(o?.aborted)throw new DOMException("Aborted","AbortError")};(!(s instanceof ArrayBuffer)||s.byteLength<a.deltaHeaderBytes||s.byteLength>a.deltaHeaderBytes+a.deltaMaxBytes||!(n.buffer instanceof ArrayBuffer)||n.buffer.byteLength<a.sceneHeaderBytes||n.buffer.byteLength>a.deltaMaxBytes||!Number.isSafeInteger(n.revision)||n.revision<0)&&i("invalid-scene-delta-size");let l=new DataView(s),c=String.fromCharCode(...new Uint8Array(s,0,8)),d=l.getUint16(8,!0),u=l.getUint16(10,!0),p=l.getBigUint64(12,!0),h=l.getBigUint64(20,!0),f=l.getUint32(28,!0),y=l.getUint32(32,!0),v=Number(p),b=Number(h);(c!=="MATICDLT"||d!==1||u!==1||!Number.isSafeInteger(v)||!Number.isSafeInteger(b)||v!==n.revision||b<=n.revision||f<a.sceneHeaderBytes||f>a.deltaMaxBytes||y<1||y>a.deltaMaxBytes||y+a.deltaHeaderBytes!==s.byteLength)&&i(),typeof DecompressionStream!="function"&&i("scene-delta-decompression-unavailable"),r();let E=new Uint8Array(s,a.deltaHeaderBytes,y),R=Math.max(n.buffer.byteLength,f);R>a.deltaMaxBytes&&i("invalid-scene-delta-size");let g=new Uint8Array(R),_=new Blob([E]).stream().pipeThrough(new DecompressionStream("deflate")).getReader(),D=0,$=null;try{for($=()=>{_.cancel().catch(()=>{})},o?.addEventListener("abort",$,{once:!0});;){r();let{done:A,value:J}=await _.read();if(A)break;(!(J instanceof Uint8Array)||D+J.byteLength>R)&&i(),g.set(J,D),D+=J.byteLength}}catch(A){if(await _.cancel().catch(()=>{}),o?.aborted||A instanceof DOMException&&A.name==="AbortError")throw new DOMException("Aborted","AbortError");if(A instanceof Error&&A.message==="invalid-scene-delta")throw A;i()}finally{$&&o?.removeEventListener("abort",$),_.releaseLock()}r(),D!==R&&i();let L=new Uint8Array(n.buffer),z=new DataView(g.buffer,g.byteOffset,g.byteLength),he=Math.min(a.sceneHeaderBytes,L.byteLength);for(let A=0;A<he;A+=1)g[A]=(g[A]??0)^(L[A]??0);let be=z.getUint32(12,!0),O=z.getUint32(16,!0),we=z.getUint32(20,!0),H=a.sceneHeaderBytes+be,G=O+we,_e=H===n.pointOffset&&O===n.floorCount&&we===n.surfaceCount,ee=H+G*a.scenePointStride,te=_e&&ee===f&&G<=a.sceneMaxPoints,se=[],U=-1,Q=!1,ne=()=>{Q&&U>=0&&se.push(U),Q=!1};for(let A=he;A<L.byteLength;A+=a.xorChunkBytes){r();let J=Math.min(L.byteLength,A+a.xorChunkBytes);for(let N=A;N<J;N+=1){let St=L[N]??0,Et=(g[N]??0)^St;if(g[N]=Et,!te||N<n.pointOffset||N>=ee)continue;let Ct=Math.floor((N-n.pointOffset)/a.dirtyBlockBytes);Ct!==U&&(ne(),U=Ct),Et!==St&&(Q=!0)}J<L.byteLength&&await new Promise(N=>globalThis.setTimeout(N,0))}ne(),r();let rn=f===g.byteLength?g.buffer:g.slice(0,f).buffer;return{parsed:t(rn),revision:b,...te?{deltaHint:{baseRevision:v,blockBytes:a.dirtyBlockBytes,dirtyBlocks:se}}:{}}}}},Ms=Object.freeze({deltaHeaderBytes:me,deltaMaxBytes:ie,sceneHeaderBytes:tt,sceneMaxBytes:oe,sceneMaxPoints:Kt,scenePointStride:Ft,dirtyBlockBytes:Ut,xorChunkBytes:hn}),Ps=Cs(Ms),pn=a=>{try{return Ps.parseTransfer(a)}catch{throw new S("invalid-scene")}},mn=()=>`
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
`,De=class{#e=null;#t=null;#n=!1;#i=!1;#a=0;#r=null;#o=null;#s=null;constructor(){if(!(typeof Worker!="function"||typeof URL?.createObjectURL!="function"))try{this.#t=URL.createObjectURL(new Blob([mn()],{type:"text/javascript"})),this.#f()}catch{this.#e=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}}async parse(t,e){if(this.#u(e),t.byteLength>oe||t.byteLength<tt)throw new S("invalid-scene");let s=await this.#d({kind:"parse",buffer:t},e,async n=>(await new Promise(o=>globalThis.setTimeout(o,0)),this.#u(n),{id:0,ok:!0,parsed:pn(t)}));if(!s.parsed)throw new S("invalid-scene");return s.parsed}async decodeDelta(t,e,s){if(this.#u(s),t.byteLength>me+ie||e.buffer.byteLength>ie)throw new S("invalid-scene-delta-size");let n={buffer:e.buffer,revision:e.revision,pointOffset:e.pointOffset,floorCount:e.floorCount,surfaceCount:e.surfaceCount},o;try{o=await this.#d({kind:"delta",payload:t},s,async i=>(await new Promise(r=>globalThis.setTimeout(r,0)),this.#u(i),Ps.decodeDeltaTransfer(t,n,i).then(r=>({id:0,ok:!0,...r}))),n)}catch(i){throw i instanceof S?i:s?.aborted||i instanceof DOMException&&i.name==="AbortError"?new DOMException("Aborted","AbortError"):i instanceof Error&&(i.message.startsWith("invalid-scene")||i.message==="scene-delta-decompression-unavailable")?new S(i.message):new S("invalid-scene-delta")}if(!o.parsed||o.revision===void 0)throw new S("invalid-scene-delta");return{parsed:o.parsed,revision:o.revision,...o.deltaHint?{deltaHint:o.deltaHint}:{}}}#u(t){if(this.#i)throw new S("scene-parser-disposed");if(t?.aborted)throw new DOMException("Aborted","AbortError")}#f(){if(!(!this.#t||this.#n||this.#i))try{let t=new Worker(this.#t);t.onmessage=e=>{let s=this.#r;this.#e!==t||!s||s.worker!==t||e.data.id!==s.id||(e.data.ok?this.#v(s,e.data):this.#v(s,void 0,new S(e.data.problem||"invalid-scene")))},t.onerror=()=>this.#c(t),t.onmessageerror=()=>this.#c(t),this.#e=t}catch{this.#e=null,this.#n=!0}}async#d(t,e,s,n){return this.#u(e),new Promise((o,i)=>{let r,l=()=>e?.removeEventListener("abort",r.abort),c=(d,u)=>{r.settled||(r.settled=!0,l(),u!==void 0?i(u):d?o(d):i(new S("invalid-scene")))};r={id:++this.#a,message:t,...e?{signal:e}:{},fallback:s,...n?{base:n}:{},settle:c,abort:()=>this.#_(r),settled:!1,worker:null},e?.addEventListener("abort",r.abort,{once:!0}),e?.aborted||this.#i?c(void 0,e?.aborted?new DOMException("Aborted","AbortError"):new S("scene-parser-disposed")):this.#r?this.#o?c(void 0,new S("scene-parser-busy")):this.#o=r:(this.#r=r,this.#k(r))})}#k(t){if(this.#r!==t)return;if(this.#i){this.#v(t,void 0,new S("scene-parser-disposed"));return}if(t.signal?.aborted){this.#v(t,void 0,new DOMException("Aborted","AbortError"));return}!this.#e&&!this.#n&&this.#f();let e=this.#e;if(e){t.worker=e;try{let n,o;if(t.message.kind==="parse")n={id:t.id,kind:t.message.kind,buffer:t.message.buffer},o=[t.message.buffer];else{if(!t.base)throw new S("invalid-scene-delta");let i={...t.base,buffer:t.base.buffer.slice(0)};n={id:t.id,kind:t.message.kind,payload:t.message.payload,base:i},o=[t.message.payload,i.buffer]}e.postMessage(n,o)}catch{this.#c(e)}return}let s=new AbortController;this.#s=s,Promise.resolve().then(()=>t.fallback(s.signal)).then(n=>this.#v(t,n),n=>this.#v(t,void 0,n))}#_(t){let e=new DOMException("Aborted","AbortError");if(this.#o===t){this.#o=null,t.settle(void 0,e);return}this.#r===t&&(t.worker?(this.#g(),this.#v(t,void 0,e)):this.#s?.abort())}#v(t,e,s){if(this.#r!==t){t.settle(void 0,new S("scene-parser-disposed"));return}let n=t.signal?.aborted?new DOMException("Aborted","AbortError"):s;t.settle(e,n),this.#r=null,this.#s=null,t.worker=null,this.#i||this.#m()}#m(){if(this.#i||this.#r||!this.#o)return;let t=this.#o;if(this.#o=null,t.signal?.aborted){t.settle(void 0,new DOMException("Aborted","AbortError")),this.#m();return}this.#r=t,this.#k(t)}#c(t){if(this.#e!==t)return;this.#n=!0,this.#g();let e=this.#r;e?.worker===t?this.#v(e,void 0,new S("scene-worker-failed")):this.#m()}#g(){this.#e?.terminate(),this.#e=null}dispose(){if(this.#i)return;this.#i=!0;let t=this.#o;this.#o=null,t?.settle(void 0,new S("scene-parser-disposed"));let e=this.#r;this.#g(),this.#s?.abort(),this.#s=null,e&&(e.worker=null,e.settle(void 0,new S("scene-parser-disposed"))),this.#r=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}};var ht=["catalog","scene","sceneDelta","pose","history","plans","areas","areaSave","areaDelete"];var pt=()=>({requests:0,completed:0,failed:0,aborted:0,timedOut:0,totalDurationMs:0,maxDurationMs:0}),xs=a=>Math.min(1e9,a+1),As=a=>Number.isFinite(a)?Math.min(1e12,Math.max(0,a)):0,le=class{#e=pt();#t=!1;record(t,e){if(this.#t)return;let s=Math.round(As(e)*100)/100;this.#e.requests=xs(this.#e.requests),this.#e[t]=xs(this.#e[t]),this.#e.totalDurationMs=As(this.#e.totalDurationMs+s),this.#e.maxDurationMs=Math.max(this.#e.maxDurationMs,s)}snapshot(){return Object.freeze({...this.#e})}reset(){this.#t||Object.assign(this.#e,pt())}dispose(){this.#t=!0,Object.assign(this.#e,pt())}},Le=class{#e=Object.fromEntries(ht.map(t=>[t,new le]));#t=!1;record(t,e,s){this.#t||this.#e[t].record(e,s)}snapshot(){let t=Object.fromEntries(ht.map(e=>[e,this.#e[e].snapshot()]));return Object.freeze(t)}dispose(){if(!this.#t){this.#t=!0;for(let t of ht)this.#e[t].dispose()}}};var B={catalog:1e4,scene:6e4,delta:35e3,pose:1e4,history:15e3,workflow:15e3,mutation:2e4,roomPreview:15e3},fn=2,fe=new WeakMap,P=class extends Error{constructor(t,e=null){super(t),this.name="BackendError",this.code=t,this.status=e}},Ts=(a,t)=>{let e=a.headers.get("X-Matic-Revision");if(e===null)return t;let s=Number(e);if(!Number.isSafeInteger(s)||s<0)throw new S("invalid-scene-revision");return s},Is=(a,t)=>{let e=a.headers.get("X-Matic-Floor-Coherent");if(e===null)return t;if(e==="1")return!0;if(e==="0")return!1;throw new S("invalid-scene-floor-header")},qe=class{#e;#t=new De;#n=new WeakMap;#i=new Set;#a=new Le;#r=!1;constructor(t){this.#e=t}requestDiagnostics(){return this.#a.snapshot()}async#o(t,e,s=Number.POSITIVE_INFINITY,n="invalid-response-size"){let o=t.body?.getReader();if(!o)return new ArrayBuffer(0);let i=()=>{o.cancel().catch(()=>{})};e.addEventListener("abort",i,{once:!0});try{if(e.aborted)throw i(),new DOMException("Aborted","AbortError");let r=[],l=0;for(;;){let u=await o.read();if(e.aborted)throw new DOMException("Aborted","AbortError");if(u.done)break;if(l+u.value.byteLength>s)throw o.cancel().catch(()=>{}),new S(n);r.push(u.value),l+=u.value.byteLength}let c=new Uint8Array(l),d=0;for(let u of r)c.set(u,d),d+=u.byteLength;return c.buffer}finally{e.removeEventListener("abort",i),o.releaseLock()}}async#s(t,e,s,n,o,i){if(!Jt(e))throw new P("invalid-private-path");if(o?.aborted)throw new DOMException("Aborted","AbortError");let r=performance.now(),l="failed",c=new AbortController,d=()=>{},u=new Promise((y,v)=>{d=v}),p=()=>{c.abort(),d(new DOMException("Aborted","AbortError"))};o?.addEventListener("abort",p,{once:!0});let h=!1,f=window.setTimeout(()=>{h=!0,p()},n);try{let y=this.#e(),v=new Headers(s.headers),b={...s,cache:"no-store",credentials:"same-origin",headers:Object.fromEntries(v.entries()),signal:c.signal},E=async()=>{let g;if(typeof y?.fetchWithAuth=="function")g=await y.fetchWithAuth(e,b);else{let C=y?.auth?.accessToken||y?.auth?.data?.access_token;C&&v.set("Authorization",`Bearer ${C}`);let _=typeof y?.hassUrl=="function"?y.hassUrl(e):e;g=await fetch(_,{...b,headers:v})}try{if(c.signal.aborted)throw new DOMException("Aborted","AbortError");return await i(g,c.signal)}finally{g.body&&!g.body.locked&&g.body.cancel().catch(()=>{})}},R=await Promise.race([E(),u]);return l="completed",R}catch(y){throw h&&!o?.aborted?(l="timedOut",new P("request-timeout")):c.signal.aborted?(l="aborted",new DOMException("Aborted","AbortError")):y}finally{window.clearTimeout(f),o?.removeEventListener("abort",p),this.#a.record(t,l,performance.now()-r)}}async#u(t,e,s,n,o={}){return this.#s(t,e,{...o,headers:{Accept:"application/json",...o.headers||{}}},s,n,async(i,r)=>{if(!i.ok){let l=i.headers.get("X-Matic-Plans-Conflict");throw new P(l==="map-rechecking"?"map-rechecking":"request-failed",i.status)}try{return JSON.parse(new TextDecoder().decode(await this.#o(i,r)))}catch{throw new S("invalid-json-response")}})}async catalog(t){return Ae(await this.#u("catalog",Nt,B.catalog,t))}async scene(t,e,s,n,o,i){let r=new Headers({Accept:"application/vnd.matic.slam-scene"});return n==="live"&&r.set("X-Matic-Prefer-Cached","1"),i&&r.set("If-None-Match",i),this.#s("scene",t,{headers:r},B.scene,o,async(l,c)=>{let d=Ts(l,e),u=Is(l,s);if(l.status===304)return{scene:null,floorCoherent:u,revision:d,notModified:!0};if(!l.ok)throw new P("scene-request-failed",l.status);if(l.headers.get("Content-Type")?.split(";",1)[0]!=="application/vnd.matic.slam-scene")throw new S("invalid-scene-content-type");return{scene:{...await this.#t.parse(await this.#o(l,c,oe,"invalid-scene-size"),c),revision:d,etag:l.headers.get("ETag"),source:n},floorCoherent:u,revision:d,notModified:!1}})}async sceneDelta(t,e,s,n){let o=t.includes("?")?"&":"?";return this.#s("sceneDelta",`${t}${o}since=${encodeURIComponent(e.revision)}`,{headers:{Accept:"application/vnd.matic.slam-delta, application/vnd.matic.slam-scene"}},B.delta,n,async(i,r)=>{let l=Ts(i,e.revision),c=Is(i,s);if(i.status===204){if(l!==e.revision)throw new S("invalid-scene-delta-revision");return{scene:null,floorCoherent:c,revision:l,notModified:!0}}if(!i.ok)throw new P("delta-request-failed",i.status);if(l<=e.revision)throw new S("invalid-scene-delta-revision");let d=i.headers.get("Content-Type")?.split(";",1)[0];if(d!=="application/vnd.matic.slam-delta"&&d!=="application/vnd.matic.slam-scene")throw new S("invalid-scene-delta-content-type");let u=d==="application/vnd.matic.slam-delta",p=u?me+ie:oe,h=Number(i.headers.get("Content-Length"));if(Number.isFinite(h)&&h>p)throw new S(u?"invalid-scene-delta-size":"invalid-scene-size");let f=await this.#o(i,r,p,u?"invalid-scene-delta-size":"invalid-scene-size");if(u){let v=Number(i.headers.get("X-Matic-Base-Revision"));if(!Number.isSafeInteger(v)||v!==e.revision)throw new S("invalid-scene-delta-base");let b=await this.#t.decodeDelta(f,e,r);if(b.revision!==l)throw new S("invalid-scene-delta-revision");return{scene:{...b.parsed,revision:l,etag:i.headers.get("ETag"),source:"live",...b.deltaHint?{deltaHint:b.deltaHint}:{}},floorCoherent:c,revision:l,notModified:!1}}return{scene:{...await this.#t.parse(f,r),revision:l,etag:i.headers.get("ETag"),source:"live"},floorCoherent:c,revision:l,notModified:!1}})}async pose(t,e){return Qt(await this.#u("pose",t,B.pose,e))}async history(t,e){return Vt(await this.#u("history",t,B.history,e))}async plans(t,e){return Gt(await this.#u("plans",t,B.workflow,e))}async areas(t,e){return Yt(await this.#u("areas",t,B.workflow,e))}async previewRoomSequence(t,e,s,n){if(!t||t.length>255||e.length<1||e.length>100)throw new S("invalid-room-sequence-preview-request");if(n?.aborted)throw new DOMException("Aborted","AbortError");let o=this.#e()?.connection;if(!o?.sendMessagePromise)throw new P("preview-unavailable");let i=null,r=()=>{},l=new Promise((b,E)=>{r=E}),c=this.#n.get(o),d,u=new Promise(b=>{d=b});this.#n.set(o,u);let p=!1,h=()=>{p||(p=!0,d(),this.#n.get(o)===u&&this.#n.delete(o))},f=!1,y=()=>{r(new DOMException("Aborted","AbortError")),f&&(h(),i!==null&&window.clearTimeout(i),i=null)};n?.addEventListener("abort",y,{once:!0});let v=new Promise((b,E)=>{i=window.setTimeout(()=>{i=null,E(new P("preview-timeout"))},B.roomPreview)});v.catch(()=>{f&&h()});try{if(c&&(await Promise.race([c,l,v]),n?.aborted))throw new DOMException("Aborted","AbortError");let b=fe.get(o)??0;if(b>=fn)throw new P("preview-unavailable");let E=o.sendMessagePromise({type:"call_service",domain:"matic_robot",service:"preview_room_sequence",target:{entity_id:t},service_data:{rooms:e.map(_=>({room:_.room,cleaning_mode:_.cleaning_mode,coverage_setting:_.coverage_setting})),use_room_schedule:!0,override_room_schedule:s},return_response:!0});fe.set(o,b+1),f=!0;let R=!1,g=()=>{if(!R){R=!0;let _=(fe.get(o)??1)-1;_===0?fe.delete(o):fe.set(o,_)}h(),i!==null&&window.clearTimeout(i),i=null};E.then(g,g);let C=await Promise.race([E,l,v]);if(n?.aborted)throw new DOMException("Aborted","AbortError");if(!C||typeof C!="object"||Array.isArray(C)||!("response"in C))throw new S("invalid-room-sequence-preview-envelope");return jt(C.response)}finally{f||(c?c.then(h,h):h(),i!==null&&window.clearTimeout(i),i=null),n?.removeEventListener("abort",y)}}async saveArea(t,e,s){let n=await this.#u("areaSave",t,B.mutation,s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e.areaId?{area_id:e.areaId}:{},name:e.name,circles:e.circles,...e.outline?.closed?{outline:e.outline.points}:{},cleaning_mode:e.cleaningMode,coverage_setting:e.coverageSetting})});if(!n||typeof n!="object"||typeof n.id!="string")throw new S("invalid-area-save-response");return n.id}async deleteArea(t,e,s){await this.#s("areaDelete",`${t}?area_id=${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json"}},B.mutation,s,async n=>{if(!n.ok)throw new P("area-delete-failed",n.status)})}async service(t,e,s,n,o={}){let i=this.#e();if(this.#r||typeof i?.callService!="function")throw new P("service-unavailable");let r=null,l=null;try{let c=o.returnResponse?i.callService(t,e,s,{entity_id:n},!0,!0):i.callService(t,e,s,{entity_id:n});return!o.returnResponse&&!o.acknowledgementTimeout?await c:await Promise.race([c,new Promise((d,u)=>{l=()=>{r!==null&&window.clearTimeout(r),r=null,u(new DOMException("Aborted","AbortError"))},this.#i.add(l),r=window.setTimeout(()=>u(new P("mutation-timeout")),B.mutation)})])}finally{r!==null&&window.clearTimeout(r),l&&this.#i.delete(l)}}dispose(){if(!this.#r){this.#r=!0,this.#a.dispose();for(let t of this.#i)t();this.#i.clear(),this.#t.dispose()}}};var Os=()=>({version:4,view:"top",appearance:"photo",labels:!0,quality:"auto",cameras:{}}),ve=(a,t,e)=>Math.max(t,Math.min(e,a)),Ds=a=>a.replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",mt=(a,t=4)=>`matic-map-studio:v${t}:${Ds(a)}`,vn=a=>{if(!a||typeof a!="object")return null;let t=a;return["yaw","pitch","zoom","targetX","targetZ"].every(s=>typeof t[s]=="number"&&Number.isFinite(t[s]))?{yaw:ve(t.yaw,-Math.PI,Math.PI),pitch:ve(t.pitch,.18,Math.PI/2-.018),zoom:ve(t.zoom,.01,100),targetX:ve(t.targetX,-1e4,1e4),targetZ:ve(t.targetZ,-1e4,1e4)}:null},$s=a=>{let t=Os();if(!a||typeof a!="object")return t;let e=a,s=e.view==="three"||e.view==="top"||e.view==="rooms"?e.view:t.view,n=s==="rooms"?"top":s,o=e.quality==="auto"||e.quality==="efficient"||e.quality==="balanced"||e.quality==="maximum"?e.quality:t.quality,i=e.cameras&&typeof e.cameras=="object"?e.cameras:{},r={};for(let l of["three","top"]){let c=vn(i[l]);c&&(r[l]=c)}return{version:4,view:n,appearance:e.appearance==="rooms"||e.appearance==="photo"?e.appearance:t.appearance,labels:typeof e.labels=="boolean"?e.labels:t.labels,quality:o,cameras:r}},We=class{#e="local-user";#t=null;#n=null;load(t){this.#i(),this.#e=Ds(t);try{let e=window.localStorage.getItem(mt(this.#e));if(e)return $s(JSON.parse(e));for(let s of[3,2]){let n=window.localStorage.getItem(mt(this.#e,s));if(n)return $s(JSON.parse(n))}}catch{}return Os()}schedule(t){this.#t!==null&&window.clearTimeout(this.#t),this.#n={key:mt(this.#e),value:t},this.#t=window.setTimeout(()=>this.#i(),250)}#i(){this.#t!==null&&window.clearTimeout(this.#t),this.#t=null;let t=this.#n;if(this.#n=null,!!t)try{window.localStorage.setItem(t.key,JSON.stringify(t.value))}catch{}}dispose(){this.#i()}};var vt=1,ce=Number.MAX_SAFE_INTEGER,Bs=Number.MAX_SAFE_INTEGER,Ls=64,yn=1e12,ft=4,qs=16*1024,gn=250,bn=4e3,ze=3e4;function q(a){return a!==null&&typeof a=="object"&&!Array.isArray(a)?a:null}function Y(a,t){return typeof a=="number"&&Number.isSafeInteger(a)&&a>=0&&a<=t}function Hs(a){let t=q(a);if(!t)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,Bs))return null;e[s]=n}return e}function wn(a){let t=q(a);if(!t||Object.keys(t).length>128)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,Bs))return null;e[s]=n}return e}function Ns(a){return typeof a=="string"&&a.length>0&&a.length<=256?a:Y(a,ce)?String(a):null}function _n(a){let t=q(a),e=Ns(t?.epoch);if(!t||t.schema!==vt||e===null)return null;let s=wn(t.capabilities),n=Hs(t.revisions);return!s||!n||!Y(t.sequence,ce)||!Y(t.coherence_generation,ce)||t.coherence_generation===0?null:{schema:t.schema,capabilities:s,epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:n}}function Ws(a,t){let e=q(a),s=_n(e?.snapshot??a);if(!s)return null;let n=q(e?.snapshot??a);if(!n||!("payload"in n))return null;let o=n.entry_id,i=q(n.identity),r=q(n.status),l=q(n.payload),c=r?r.reason===null?null:Fs(r.reason):null,d=l?.available,u=null;if(l?.entry!==void 0&&l.entry!==null){if((()=>{try{return JSON.stringify(l.entry).length}catch{return qs+1}})()>qs)return null;try{u=Ae({entries:[l.entry]})[0]??null}catch{return null}}let p=r?.state;return typeof o!="string"||o.length===0||o.length>128||t!==void 0&&o!==t||!i||i.entry_id!==o||i.floor_mission_id!==null&&!Y(i.floor_mission_id,ce)||typeof i.floor_verified!="boolean"||i.floor_verified!==(i.floor_mission_id!==null)||!r||p!=="ready"&&p!=="stale"&&p!=="unavailable"||r.reason!==null&&c===null||typeof r.retryable!="boolean"||typeof d!="boolean"||u!==null&&u.entryId!==o||p==="ready"&&(c!==null||r.retryable||!d)||(p==="stale"||p==="unavailable")&&(c===null||d)||c==="authorization"&&r.retryable?null:{...s,entry_id:o,identity:{entry_id:o,floor_mission_id:i.floor_mission_id,floor_verified:i.floor_verified},status:{state:p,reason:c,retryable:r.retryable},payload:{available:d,entry:u}}}function zs(a){let t=q(a),e=Ns(t?.epoch),s=Hs(t?.revisions),n=t?.resources;return e===null||!s||!Y(t?.sequence,ce)||!Y(t?.coherence_generation,ce)||t.coherence_generation===0||!Array.isArray(n)||n.length>128||!n.every(o=>typeof o=="string"&&o.length<=128)?null:{epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:s,resources:n}}var Be=["gap","overflow","reconnect","invalid_message","server_request","restart","entry_removed","authorization","snapshot_required"];function Fs(a){return typeof a=="string"&&Be.includes(a)?a:null}function kn(a){let t=q(a);return t?.name==="AbortError"?"aborted":t?.name==="TimeoutError"?"timedOut":"failed"}function Rn(){return Object.fromEntries(Be.map(a=>[a,new le]))}var He=class{#e;#t;#n;#i=null;#a=!1;#r=!1;#o=!1;#s=!1;#u=!1;#f=!1;#d=0;#k=!1;#_=!1;#v=!1;#m=!1;#c=null;#g=null;#b=0;#P=!1;#R=null;#w=-1;#h=new Map;#C=!1;#I=!1;#F=null;#l=[];#W=new le;#S=Rn();#x=null;#y=null;#$=null;constructor(t,e){this.#e=t,this.#t=e,this.#n=Math.max(1,Math.min(Ls,e.maxPendingInvalidations??Ls))}async start(){if(!(this.#a||this.#I)){this.#I=!0;try{await this.#j(!1)}catch(t){this.#te(t),this.#E("reconnect")}}}notifyReconnect(){(this.#s||this.#f)&&(this.#B(),this.#X("aborted"),this.#d+=1),this.#b=0,this.#k=!1,this.#s=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.requestResync("reconnect"),this.#o&&this.#z(0,!0)}requestResync(t="server_request"){this.#E(t,!0)}diagnostics(){let t=Object.fromEntries(Be.map(s=>[s,this.#S[s].snapshot()])),e=this.#y!==null&&this.#$!==null?Object.freeze({reason:this.#y,durationMs:Math.round(Math.min(yn,Math.max(0,performance.now()-this.#$))*100)/100}):null;return Object.freeze({snapshotAttempts:this.#W.snapshot(),recoveryEpisodes:Object.freeze(t),activeRecovery:e})}dispose(){if(!this.#a){this.#a=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#o=!1,this.#i?.(),this.#i=null,this.#h.clear(),this.#l=[],this.#x=null,this.#y=null,this.#$=null,this.#W.dispose();for(let t of Be)this.#S[t].dispose()}}#K(t){if(this.#a)return;let e=q(t),s=q(e?.event)??e,n=s?.type;if(n==="resync"){let i=Fs(s?.reason);if(!i){this.#E("invalid_message");return}if(i==="entry_removed"){this.#t.onEvent({type:"resync",reason:i}),this.dispose();return}this.#E(i);return}if(this.#s){if(n==="invalidate"){let i=zs(s?.invalidation??s);i?this.#V(i):(this.#l=[],this.#P=!0)}return}let o=n==="snapshot"?Ws(s?.snapshot??s,this.#t.entryId):n==="invalidate"?zs(s?.invalidation??s):null;if(!o){this.#E("invalid_message");return}if(n==="snapshot"){let i=o;if(this.#o)return;if(this.#R!==null&&i.epoch!==this.#R){this.#E("restart");return}this.#L(i);return}this.#U(o)}#L(t){this.#R===t.epoch&&t.sequence<this.#w||(this.#R=t.epoch,this.#w=t.sequence,this.#h.clear(),this.#t.onEvent({type:"snapshot",snapshot:t}))}#ae(t){let e=this.#l;if(this.#l=[],this.#L(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(o=>o.epoch===t.epoch&&o.sequence>=s),this.#E("gap");return}this.#U(n),s+=1}}#U(t){if(this.#o){this.#V(t);return}if(this.#R===null){this.#V(t);return}if(this.#R!==t.epoch){this.#V(t),this.#E("reconnect");return}if(!(t.sequence<=this.#w)){if(t.sequence!==this.#w+1){this.#V(t),this.#E("gap");return}this.#w=t.sequence;for(let e of t.resources)this.#h.set(e,t);if(this.#h.size>this.#n){this.#h.clear(),this.#E("overflow");return}this.#C||(this.#C=!0,queueMicrotask(()=>this.#ye()))}}#V(t){this.#l.length>=this.#n?(this.#l=[],this.#P=!0,this.#E("overflow")):this.#l.push(t)}#ye(){if(this.#C=!1,this.#a||this.#s||this.#h.size===0){this.#s&&this.#h.clear();return}let t=[...this.#h.values()];this.#h.clear();let e=t.reduce((n,o)=>!n||o.sequence>n.sequence?o:n,null);if(!e)return;let s=[...new Set(t.flatMap(n=>n.resources))];this.#t.onEvent({type:"invalidation",invalidation:{...e,resources:s}})}#E(t,e=!1){if(!this.#a){if(t==="authorization"){this.#q(),this.#t.onEvent({type:"resync",reason:t});return}if(!this.#s&&(this.#Y(t),this.#r||(this.#r=!0,this.#t.onEvent({type:"resync",reason:t}),queueMicrotask(()=>{this.#r=!1})),t!=="entry_removed")){let s=e&&!this.#k;if(s&&(this.#k=!0),s&&this.#c!==null&&(window.clearTimeout(this.#c),this.#c=null),this.#v){if(this.#m){s&&this.#z(0,!0);return}this.#m=!0,this.#O(s);return}if(e&&this.#o){s&&(this.#_=!0);return}let n=this.#b>=ft?ze:0;this.#z(s?0:n,s)}}}#z(t,e=!1){if(!this.#a){if(this.#c!==null){if(!e)return;window.clearTimeout(this.#c),this.#c=null}if(this.#o){this.#g=e?t:Math.max(this.#g??0,t);return}this.#c=window.setTimeout(()=>{this.#c=null,this.#j(!0)},t)}}#O(t=!1){let e=this.#b>=ft?ze:Math.min(gn*2**this.#b,bn);this.#b<ft&&(this.#b+=1),this.#z(t?0:e,t)}async#j(t,e=!1){if(this.#a||this.#o)return;t&&this.#Y(e?"authorization":"snapshot_required");let s=this.#d;this.#o=!0,this.#f=e;try{if(t&&await this.#p(),this.#a||this.#s&&!e||s!==this.#d)return;let n={startedAt:performance.now(),generation:s};this.#x=n;let o="completed",i;try{i=await this.#e.sendMessagePromise({type:"matic_robot/workspace_snapshot",version:vt,entry_id:this.#t.entryId})}catch(c){throw o=kn(c),c}finally{this.#ce(n,o)}if(this.#a||this.#s&&!e||s!==this.#d)return;let r=Ws(i,this.#t.entryId);if(!r)throw new Error("invalid-workspace-snapshot");if(r.status.reason==="authorization"){this.#q(),this.#t.onEvent({type:"snapshot",snapshot:r});return}if(r.status.state!=="ready"&&r.status.retryable)throw new Error("workspace-snapshot-retryable");e&&(this.#s=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null),this.#o=!1,this.#v=!0,this.#m=!1;try{t?this.#le(r):this.#ae(r)}finally{this.#v=!1}let l=this.#m||this.#P;this.#m?this.#_&&(this.#_=!1,this.#z(0,!0)):(this.#b=0,this.#k=!1,this.#_=!1),!t&&!this.#a&&await this.#p(),this.#P&&(this.#P=!1,this.#E("overflow")),t&&r.status.state==="ready"&&!l&&!this.#a&&s===this.#d&&this.#X("completed")}catch(n){if(this.#a||this.#s&&!e||s!==this.#d)return;if(this.#te(n),this.#G(n))this.#q(),this.#t.onEvent({type:"resync",reason:"authorization"});else if(!e){t||this.#Y("reconnect");let o=this.#_;this.#_=!1,this.#O(o)}}finally{this.#o=!1,this.#f=!1,this.#u?(this.#u=!1,this.#D(0)):e&&this.#s&&this.#D(ze);let n=this.#g;this.#g=null,n!==null&&this.#z(n)}}async#p(){if(this.#a||this.#i)return;if(this.#F)return this.#F;let t=(async()=>{let e=await this.#e.subscribeMessage(s=>this.#K(s),{type:"matic_robot/workspace_subscribe",version:vt,entry_id:this.#t.entryId});this.#a?e():this.#i=e})();this.#F=t;try{await t}finally{this.#F===t&&(this.#F=null)}}#le(t){let e=this.#l;if(this.#l=[],this.#R===t.epoch&&t.sequence<this.#w){this.#l=e,this.#E("snapshot_required");return}if(this.#L(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(o=>o.sequence>=s),this.#E("gap");return}this.#U(n),s+=1}}#G(t){let e=q(t),s=e?.code,n=e?.status??e?.statusCode;return s==="unauthorized"||s==="not_authorized"||s==="auth_invalid"||n===401||n===403}#Y(t){this.#y!==null||this.#a||(this.#y=t,this.#$=performance.now())}#X(t){let e=this.#y,s=this.#$;this.#y=null,this.#$=null,!(e===null||s===null||this.#a)&&this.#S[e].record(t,performance.now()-s)}#ce(t,e){this.#x!==t||this.#a||t.generation!==this.#d||(this.#x=null,this.#W.record(e,performance.now()-t.startedAt))}#B(){let t=this.#x;t!==null&&(this.#x=null,!this.#a&&t.generation===this.#d&&this.#W.record("aborted",performance.now()-t.startedAt))}#q(){this.#B(),this.#X("failed"),this.#d+=1,this.#s||(this.#s=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#u=!1),this.#h.clear(),this.#l=[],this.#P=!1,this.#g=null,this.#b=0,this.#k=!1,this.#_=!1,this.#f||this.#D(ze)}#D(t){this.#a||this.#c!==null||this.#u||(this.#c=window.setTimeout(()=>{if(this.#c=null,!this.#a){if(this.#o){this.#u=!0;return}this.#j(!0,!0)}},t))}#te(t){this.#t.onError?.(t instanceof Error?t:new Error("Workspace transport failed"))}};var Ne=class{#e;#t;#n=document.visibilityState!=="hidden";#i=!1;#a=!1;#r=!1;constructor({onSuspend:t,onResume:e}){this.#e=t,this.#t=e}get active(){return this.#n}start(){this.#i||this.#a||(this.#i=!0,window.addEventListener("pagehide",this.#o),window.addEventListener("pageshow",this.#s),document.addEventListener("visibilitychange",this.#u),document.visibilityState==="hidden"&&(this.#n?this.#d(!1):this.#e()))}dispose(){this.#a||(this.#a=!0,this.#i&&(window.removeEventListener("pagehide",this.#o),window.removeEventListener("pageshow",this.#s),document.removeEventListener("visibilitychange",this.#u)))}#o=()=>{this.#r=!0,this.#d(!1)};#s=t=>{if(this.#r=!1,t.persisted){document.visibilityState==="hidden"?this.#d(!1):(this.#d(!1),this.#d(!0));return}this.#f()};#u=()=>{this.#f()};#f(){if(this.#r||document.visibilityState==="hidden"){this.#d(!1);return}this.#d(!0)}#d(t){this.#n===t||this.#a||(this.#n=t,t?this.#t():this.#e())}};var m=(a,t,e=null)=>({status:a,value:t,problem:e}),ye=a=>a.status==="loading"?m("idle",a.value):a,W=a=>a instanceof DOMException&&a.name==="AbortError",Sn={notice:M,parseSavedPlanId:Xt,BackendError:P,isAbort:W,canEditCoordinates:Qe,initialWorkspaceState:V,draftForPlan:Ge,hasStoppableWork:Ot},K=(a,t)=>a instanceof P||a&&typeof a=="object"&&"code"in a&&typeof a.code=="string"?a.code:t,T={stopUnconfirmed:M("error","v4_notice_stop_unconfirmed","Home Assistant can't confirm the robot stopped, so press Stop again if it's still moving."),actionUnconfirmed:M("error","v4_notice_action_unconfirmed","Home Assistant can't confirm that command, so check the robot before trying again."),mapChanged:M("info","v4_notice_map_changed","The map changed, so choose what to clean again."),statusRefreshed:M("info","v4_notice_status_refreshed","Status refreshed, so check the robot before trying again."),planSaveFailed:M("error","v4_notice_plan_save_failed","Home Assistant can't confirm the plan was saved, so check your plans, then try again."),planDeleteFailed:M("error","v4_notice_plan_delete_failed","The plan wasn't deleted; try again."),planPreviewMissing:M("warning","v4_notice_plan_preview_missing","The next-run preview isn't ready; reload your plans, then try again."),planPreviewRefreshFailed:M("warning","v4_notice_plan_preview_refresh_failed","The next-run preview didn't refresh; check the plan, then try again."),planPreviewNone:M("warning","v4_notice_plan_preview_none","This plan has no next-run preview; review its rooms and schedules."),planPreviewChanged:M("info","v4_notice_plan_preview_changed","The next run changed; check it before you run the plan."),roomPreviewBlocked:M("warning","v4_notice_room_preview_blocked","A room can't use these settings, so check the note above the rooms."),roomPreviewChanged:M("info","v4_notice_room_preview_changed","The room settings changed, so check them and start again."),roomPreviewFailed:M("warning","v4_notice_room_preview_failed","Home Assistant couldn't check the room settings, so try starting again."),areaRemoved:M("warning","v4_notice_area_removed","This saved area was removed elsewhere. Your edits are kept as a new draft; saving will create a new area."),areaSaveFailed:M("error","v4_notice_area_save_failed","Home Assistant can't confirm the area was saved, so try again."),areaDeleteFailed:M("error","v4_notice_area_delete_failed","Home Assistant can't confirm the area was deleted, so try again."),resetMopFailed:M("error","v4_notice_reset_mop_failed","Mopping progress wasn't reset; try again."),resetVacuumFailed:M("error","v4_notice_reset_vacuum_failed","Vacuum rotation progress wasn't reset; try again.")},En=a=>M("warning","v4_notice_saved_map","Showing the saved map from {date} without the robot's position.",{date:{date:a}}),Ks={coverage_identity_unavailable:M("error","v4_notice_coverage_task_unknown","Home Assistant can't confirm the current clean, so check the robot first."),coverage_activity_unavailable:M("error","v4_notice_coverage_activity_unknown","Home Assistant can't confirm whether the robot is cleaning, so check it first."),coverage_native_session_active:M("error","v4_notice_coverage_robot_busy","The robot is already cleaning, so wait for it to finish."),coverage_identity_changed:M("error","v4_notice_coverage_task_changed","The clean changed while starting, so check the robot first.")},Cn=a=>{let{translation_domain:t,translation_key:e}=a??{};return t==="matic_robot"&&typeof e=="string"&&Object.hasOwn(Ks,e)?Ks[e]??null:null},de=a=>[a.selectedFloorOrdinal??"none",a.mapFloorOrdinal??"none",a.mapFloorCoherent?"coherent":"transition"].join(":"),ue=a=>[a.mapFloorOrdinal??"none",a.mapSessionVerified?"verified":"unverified",a.mapSessionKey??"no-session"].join(":"),F=a=>[a.entryId,a.selectedFloorOrdinal??"none",a.mapFloorOrdinal??"none"].join("|"),x=a=>[a.entryId,de(a),ue(a)].join("|"),yt=a=>[x(a),a.mapRevision].join("|"),Fe=a=>a.runnerLocked||a.stopSettlePending||a.activePlan||a.nativeReconciliationPending||a.nativeSessionActive===!0,Ke=(a,t)=>a.entryKey===t.entryKey&&a.generation===t.generation&&a.floorKey===t.floorKey&&a.missionKey===t.missionKey,Mn=1e3,Pn=5e3,Us=["rooms","plans","plan","draw","areaReview"],Vs=["plan-mutation","area-mutation"],js=a=>JSON.stringify({...a,previewToken:void 0}),Ue=(a,t)=>a.label?a.label:a.active?"Current floor":`Saved floor ${a.ordinal??t}`,Ve=class{#e;#t;#n;#i;#a=new We;#r=null;#o=new Map;#s=null;#u=null;#f=null;#d=null;#k=0;#_=!1;#v=!1;#m=!1;#c=!1;#g=null;#b=Promise.resolve();#P=!1;#R=!1;#w="";#h=null;#C=0;#I=null;#F="";#l=!1;#W=!0;#S=null;#x=null;#y=null;#$=null;#K="";#L=!1;#ae=null;#U;#V;workspaceDiagnostics(){return this.#S?.diagnostics()??null}constructor(t,e,s=null,n){this.#e=t,this.#t=new It(t.value.generation),this.#n=e,this.#U=s,this.#V=n,this.#i=new Ne({onSuspend:()=>this.#ye(),onResume:()=>{this.#E()}}),this.#e.patch({pageActive:this.#i.active}),this.#$=t.subscribe(o=>{this.#z(o),this.#le()}),this.#i.start()}#ye(){this.#B(!1,Vs),this.#Q(),this.#H(Vs),this.#m=!1,this.#c=!1,this.#g=null,this.#R=!1,this.#fe();let t=this.#e.value;this.#e.patch({resources:{...t.resources,catalog:ye(t.resources.catalog),scene:ye(t.resources.scene),history:ye(t.resources.history),plans:ye(t.resources.plans),areas:ye(t.resources.areas),pose:m("idle",null)}})}async#E(){if(this.#l||!this.#i.active)return;this.#e.patch({pageActive:!0});let t=this.#s;if(this.#l||!this.#i.active||!t?.host.connected||!t.host.administrator||!t.host.robotConnected||t.host.robotCount===0)return;let e=this.#e.value;this.#ke(),this.#Y(t),await this.refreshCatalog(!0,!0);let s=this.#e.value,n=s.resources.entry;if(this.#l||!this.#i.active||e.dataMode!=="history"||s.generation!==e.generation||s.dataMode!=="history"||s.selection.entryId!==e.selection.entryId||s.selection.floorId!==e.selection.floorId||s.selection.historyId!==e.selection.historyId||s.resources.catalog.status!=="ready"||!n||n.entryId!==s.selection.entryId)return;let o=s.resources.history.value?.floors.find(u=>u.id===s.selection.floorId),i=o?.snapshots.find(u=>u.id===s.selection.historyId);if(!o)return;let r=this.#t.begin(n.entryId,o.id,i?.id??o.id,i?.revision??0);if(this.#e.patch({generation:r.generation}),await this.#re(n,r),!this.#t.accepts(r)||!this.#i.active||this.#e.value.resources.history.status!=="ready")return;let l=this.#e.value,c=l.resources.history.value?.floors.find(u=>u.id===o.id),d=c?.snapshots.find(u=>u.id===i?.id);!c||i&&!d||(d&&d.revision!==r.revision&&(r=this.#t.begin(n.entryId,o.id,d.id,d.revision)),this.#e.patch({generation:r.generation,coherence:"current"}),d&&(!l.resources.scene.value||d.revision!==i?.revision)&&await this.#we(d,r))}#z(t){if(!t.owner)return;let e={version:4,view:t.view,appearance:t.appearance,labels:t.labelsVisible,quality:t.quality,cameras:t.cameras},s=this.#r;this.#r=e,!(!s||s.view===e.view&&s.appearance===e.appearance&&s.labels===e.labels&&s.quality===e.quality&&s.cameras===e.cameras)&&this.#a.schedule(e)}#O(t){let e=Pt(t),s=t.resources.entry,n=this.#s?.vacuumEntityId;if(!e||!s||!n||!t.selection.entryId||t.workflow!=="rooms"||t.dataMode!=="live"||t.floor.readOnly||t.coherence!=="current"||!t.host.connected||!t.host.administrator||!t.host.robotConnected||t.command!=="idle"||t.resources.plans.status!=="ready")return null;let o=t.selection.roomIds.map(i=>{let r=t.selection.roomSettings.find(l=>l.roomId===i);return r?{room:i,cleaning_mode:r.cleaningMode,coverage_setting:r.coverageSetting}:null});return o.some(i=>i===null)?null:{key:e,generation:t.generation,retryRevision:t.manualRoomPreviewRetry,floorKey:de(s),missionKey:ue(s),entryId:t.selection.entryId,entityId:n,rooms:o,overrideRoomSchedule:!t.selection.useRoomSchedule}}#j(t){return JSON.stringify([t.key,t.generation,t.retryRevision,t.floorKey,t.missionKey,t.entryId,t.entityId])}#p(t){let e=this.#O(this.#e.value);return!this.#l&&e!==null&&this.#j(e)===this.#j(t)}#le(){if(this.#l||!this.#s)return;let t=this.#e.value,e=this.#O(t);if(!e){this.#o.get("room-preview")?.abort(),this.#o.delete("room-preview"),this.#K="",(t.manualRoomPreview.status!=="idle"||t.manualRoomPreview.value!==null)&&this.#e.patch({manualRoomPreview:m("idle",null)});return}let s=this.#j(e),n=Xe(t);if(n&&n.key===e.key&&n.generation===e.generation&&n.floorKey===e.floorKey&&n.missionKey===e.missionKey&&n.preview.entryId===e.entryId){this.#K=s;return}if(this.#K===s)return;this.#o.get("room-preview")?.abort(),this.#K=s;let o=this.#T("room-preview");this.#e.patch({manualRoomPreview:m("loading",null)}),this.#G(e,o)}async#G(t,e){try{let s=await this.#n.previewRoomSequence(t.entityId,t.rooms,t.overrideRoomSchedule,e.signal);return!this.#p(t)||e.signal.aborted||s.entryId!==t.entryId?null:(this.#e.patch({manualRoomPreview:m("ready",{key:t.key,generation:t.generation,floorKey:t.floorKey,missionKey:t.missionKey,preview:s})}),s)}catch(s){return W(s)||e.signal.aborted||!this.#p(t)||this.#e.patch({manualRoomPreview:m("error",null,K(s,"preview-unavailable"))}),null}finally{this.#A("room-preview",e)}}sync(t){if(this.#l)return;let e=this.#S,s=this.#s?.host.robotConnected??null,n=this.#s?.host.administrator===!1&&t.host.administrator,o=this.#s!==null&&!this.#s.host.robotConnected&&t.host.robotConnected,i=this.#e.value.owner,r=i!==null&&(i.entryKey!==t.entryKey||i.userKey!==t.userKey);r&&(this.#oe("context-changed",t.entryKey),this.#_&&(this.#m=!0,this.#c=!1,this.#g=null));let l=this.#W;this.#W=t.host.connected,this.#s=t,this.#Y(t),o&&e&&e===this.#S&&e.notifyReconnect();let c=t.userKey!==this.#F?this.#a.load(t.userKey):null;if(c&&(this.#F=t.userKey,this.#r=c),this.#e.patch({owner:{userKey:t.userKey,entryKey:t.entryKey},host:t.host,activity:t.activity,batteryPercent:t.batteryPercent,robotLabel:t.robotLabel,robots:t.robots,locale:t.language,selection:{...this.#e.value.selection,entryId:t.entryKey},...c?{view:c.view,appearance:c.appearance,labelsVisible:c.labels,quality:c.quality,cameras:c.cameras}:{}}),!t.host.administrator){this.#Q(),this.#oe("access-required",t.entryKey);return}if(!t.host.connected){l&&(this.#e.patch({generation:this.#t.invalidate()}),this.#D(),this.#w=""),this.#Q(),this.#m=!1,this.#c=!1,this.#g=null,this.#R=!1,this.#H();let d=this.#e.value,u=d.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...d.resources,catalog:d.resources.catalog.status==="loading"?m("idle",d.resources.catalog.value):d.resources.catalog,plans:d.resources.plans.status==="loading"?m("idle",d.resources.plans.value):d.resources.plans,areas:d.resources.areas.status==="loading"?m("idle",d.resources.areas.value):d.resources.areas,pose:m("idle",null)},map:{...d.map,available:u!==null,exactPose:!1}});return}if(t.host.robotCount===0){this.#Q(),this.#oe("map-unavailable",t.entryKey);return}if(t.entryKey&&!t.vacuumEntityId){this.#Q(),this.#oe("no-loaded-robot",t.entryKey);return}if(!t.host.robotConnected){s!==!1&&(this.#B(),this.#H(),this.#m=!1,this.#c=!1,this.#g=null,this.#R=!1),this.#Q();let d=this.#e.value,u=d.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...d.resources,catalog:d.resources.catalog.status==="loading"?m("idle",d.resources.catalog.value):d.resources.catalog,scene:d.resources.scene.status==="loading"?m("idle",u):d.resources.scene,pose:m("idle",null)},map:{...d.map,available:u!==null,exactPose:!1}});return}if(this.#i.active){if(this.#ke(),!l||o||n){this.refreshCatalog(!0,!0);return}(r||this.#e.value.resources.catalog.status==="idle"||t.entryKey&&t.entryKey!==this.#e.value.selection.entryId)&&this.refreshCatalog(!0)}}#Y(t){let e=t.entryKey,s=this.#e.value,n=s.resources.catalog.value?.find(l=>l.entryId===e),o=s.resources.entry;if(!(this.#V??!!(n?.liveWorkspaceTransportEnabled&&o?.entryId===e&&o.liveWorkspaceTransportEnabled))||!this.#U||!t.host.administrator||!t.host.connected||!t.vacuumEntityId||!e||!this.#i.active){this.#fe();return}if(this.#S&&this.#x===e)return;this.#S?.dispose(),this.#y=null;let r=new He(this.#U,{entryId:e,onEvent:l=>{if(!(this.#l||!this.#i.active||this.#S!==r||this.#x!==e||this.#s?.entryKey!==e)){if(l.type==="resync"&&l.reason==="entry_removed"){r.dispose(),this.#S===r&&(this.#S=null,this.#x=null,this.#y=null);return}if(l.type==="snapshot"){let{snapshot:c}=l,d=this.#e.value.resources.entry,u=c.payload.entry;if(c.entry_id!==e||c.identity.entry_id!==e)return;if(u&&(u.entryId!==e||c.identity.floor_verified!==(u.mapFloorCoherent&&u.mapSessionVerified))){r.requestResync("invalid_message");return}let p=!u&&d?.entryId===e&&c.identity.floor_verified!==(d.mapFloorCoherent&&d.mapSessionVerified);if(c.status.reason==="authorization"){this.#y=null,this.#q(e,["plans","areas","history"]);return}let h=this.#y,f=[],y=h!==null&&h.epoch!==c.epoch;if(h&&h.epoch===c.epoch){let R=new Set([...Object.keys(h.revisions),...Object.keys(c.revisions)]),g=[...R].some(C=>(c.revisions[C]??-1)<(h.revisions[C]??-1));if(c.coherence_generation<h.coherenceGeneration||c.coherence_generation===h.coherenceGeneration&&g){r.requestResync("restart");return}f=[...R].filter(C=>(c.revisions[C]??-1)>(h.revisions[C]??-1))}y&&(f=["plans","areas","history"]);let v=h!==null&&(h.epoch!==c.epoch||h.coherenceGeneration!==c.coherence_generation),b=!!(d&&u&&d.entryId===e&&x(d)!==x(u));if(this.#y={entryId:c.entry_id,epoch:c.epoch,sequence:c.sequence,coherenceGeneration:c.coherence_generation,revisions:c.revisions},p){this.#q(e,["plans","areas","history"]);return}if(v||b){this.#q(e,f);return}let E=u!==null&&d?.entryId===e&&this.#ce(u);if(h&&f.length){if(c.sequence<=h.sequence){r.requestResync("invalid_message");return}this.#y=h,this.#X({epoch:c.epoch,sequence:c.sequence,coherence_generation:c.coherence_generation,revisions:c.revisions,resources:f},e,r,E)}return}if(l.type==="resync"){this.#y=null,l.reason!=="authorization"&&this.#q(e,["plans","areas","history"]);return}this.#X(l.invalidation,e,r)}}});this.#S=r,this.#x=e,r.start()}#X(t,e,s,n=!1){let o=this.#y;if(!o||o.entryId!==e||this.#S!==s||t.epoch!==o.epoch||t.sequence<=o.sequence)return;let i=t.coherence_generation!==o.coherenceGeneration,l=[...new Set([...Object.keys(o.revisions),...Object.keys(t.revisions)])].some(h=>(t.revisions[h]??-1)<(o.revisions[h]??-1));if(t.coherence_generation<o.coherenceGeneration||!i&&l){s.requestResync("restart");return}let c=new Set(t.resources),d=[...c].some(h=>(t.revisions[h]??-1)>(o.revisions[h]??-1));if(this.#y={...o,sequence:t.sequence,coherenceGeneration:t.coherence_generation,revisions:t.revisions},!d&&!i)return;if(i){this.#q(e,t.resources);return}c.has("scene")&&c.delete("scene");let u=this.#e.value.resources.entry,p=this.#t.current();!u||u.entryId!==e||!p||c.size&&this.#se(u,p,c,!n)}#ce(t){let e=this.#e.value,s=e.resources.entry;if(!s||x(s)!==x(t))return!1;let n=t.mapRevision===s.mapRevision?t:{...t,mapRevision:s.mapRevision},o=e.resources.catalog,i=o.value?.map(u=>u.entryId===n.entryId?n:u),r=n.mapFloorCoherent&&n.mapSessionVerified,l=n.health==="problem"||n.health==="limited",c=this.#h,d=c?.key===x(n)&&this.#ue(c)&&(c.attempt!==null||c.retryTimer!==null);return this.#e.patch({managedLock:Fe(n),coherence:d?"verifying":r?l?"degraded":"current":"verifying",map:{...e.map,available:e.resources.scene.value!==null,complete:n.mapComplete&&!n.mapTruncated,floorCoherent:n.mapFloorCoherent,sessionVerified:n.mapSessionVerified,exactPose:r&&!d?e.map.exactPose:!1},floor:{...e.floor,classifiedCount:Math.max(1,n.historyFloorCount),...d&&e.resources.scene.value?{readOnly:!0}:{}},resources:{...e.resources,entry:n,...i?{catalog:{...o,value:i}}:{}}}),this.#s&&this.#Y(this.#s),!0}#B(t=this.#e.value.pageActive,e=[]){let s=this.#t.invalidate();this.#D();let n=this.#e.value;this.#e.patch({generation:s,pageActive:t,coherence:n.resources.scene.value?"verifying":"unavailable",floor:{...n.floor,readOnly:n.floor.readOnly||n.resources.scene.value!==null},map:{...n.map,exactPose:!1}}),this.#h&&this.#Z(this.#h.key),this.#H(["catalog",...e]),this.#w=""}#q(t,e=[]){this.#M(),this.#B(),this.refreshCatalog(!0,!0).then(()=>{if(this.#l||this.#s?.entryKey!==t||!this.#s.host.administrator||!this.#s.host.connected)return;let s=this.#e.value.resources.entry,n=this.#t.current();if(!s||s.entryId!==t||!n)return;let o=new Set(e);o.delete("history"),this.#se(s,n,o,!1)})}#D(){this.#C+=1,this.#I=null}#te(t){let e=this.#I,s=this.#t.current();return!!(e&&s&&e.generation===this.#C&&e.stamp.generation===s.generation&&e.entryId===t.entryId&&e.coherenceIdentity===x(t)&&e.deltaUrl===t.deltaUrl&&s.entryKey===t.entryId&&s.floorKey===de(t)&&s.missionKey===ue(t)&&t.mapFloorCoherent&&t.mapSessionVerified&&this.#e.value.dataMode==="live"&&this.#e.value.selection.floorId==="current"&&this.#s?.host.connected&&this.#s.host.robotConnected&&this.#s.host.administrator)}#se(t,e,s,n=!0){(s.has("plans")||s.has("plan_state"))&&this.loadPlans(),s.has("areas")&&this.loadAreas(),s.has("history")&&this.#re(t,e),n&&["status","robot_state","activity","plan_state"].some(o=>s.has(o))&&this.refreshCatalog(!0,!0,!0)}#ke(){this.#i.active&&(this.#u===null&&(this.#u=window.setInterval(()=>{this.refreshCatalog()},5e3)),this.#f===null&&(this.#f=window.setInterval(()=>{this.refreshPose()},Mn)))}#Q(){this.#u!==null&&window.clearInterval(this.#u),this.#f!==null&&window.clearInterval(this.#f),this.#u=null,this.#f=null,this.#M()}#M(){let t=this.#h;if(this.#h=null,!t)return;t.attempt?.finishReplacementRead?.(),t.attempt&&(t.attempt.finishReplacementRead=null),t.retryTimer!==null&&window.clearTimeout(t.retryTimer);let e=t.attempt?.controller,s=!!(e&&e===this.#o.get("catalog")&&this.#e.value.resources.catalog.status==="loading");if(e?.abort(),s){let n=this.#e.value.resources;this.#e.patch({resources:{...n,catalog:m("idle",n.catalog.value)}})}this.#g?.state===t&&(this.#m=!1,this.#c=!1,this.#g=null)}#J(t,e){let s=this.#h;s?.key===x(e)&&(s.failedKinds.delete(t),t==="delta"&&this.#ne(e),s.failedKinds.size===0&&this.#M())}#ne(t){this.#Z(x(t))}#Z(t){let e=this.#h;e?.key===t&&(e.attempt?.finishReplacementRead?.(),e.attempt&&(e.attempt.finishReplacementRead=null))}#de(t,e){let s=x(e),n=this.#h;n?.key!==s&&(this.#M(),n={key:s,failedKinds:new Set,retryTimer:null,attempt:null},this.#h=n),n.failedKinds.add(t),t==="delta"&&this.#ne(e),this.#ue(n)&&this.#t.current()&&this.#B(),!n.attempt&&n.retryTimer===null&&(n.failedKinds.size===1&&n.failedKinds.has(t)?this.#Re(n):this.#ge(n))}#ue(t){let e=this.#e.value;return t.failedKinds.has("pose")||e.floor.readOnly||!e.map.floorCoherent||!e.map.sessionVerified}#ge(t){t.retryTimer!==null||t.failedKinds.size===0||(t.retryTimer=window.setTimeout(()=>{t.retryTimer=null;let e=this.#e.value.resources.entry,s=this.#s?.host;if(this.#h!==t||this.#l||!e||x(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#h===t&&this.#M();return}this.#Re(t)},Pn))}async#Re(t){if(this.#l||this.#h!==t||t.attempt)return;let e=this.#e.value.resources.entry,s=this.#s?.host;if(!e||x(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#h===t&&this.#M();return}if(this.#o.has("scene")){this.#ge(t);return}let n=this.#ue(t);n?this.#t.current()&&this.#B():(this.#D(),this.#o.get("delta")?.abort());let o,i=new Promise(c=>{o=c}),r={generation:this.#t.generation,controller:null,replacementRead:i,finishReplacementRead:o};t.attempt=r;let l={state:t,attempt:r};try{await this.refreshCatalog(!0,!1,!n,l),t.failedKinds.has("delta")&&this.#h===t&&t.attempt===r&&await r.replacementRead}finally{if(this.#h!==t||t.attempt!==r)return;r.finishReplacementRead=null,t.attempt=null,t.failedKinds.size>0&&this.#ge(t)}}#he(t){let e=this.#e.value,s=this.#s?.host;return!this.#l&&this.#i.active&&this.#h===t.state&&t.state.attempt===t.attempt&&t.attempt.generation===this.#t.generation&&e.generation===this.#t.generation&&e.dataMode==="live"&&e.selection.floorId==="current"&&e.resources.entry!==null&&x(e.resources.entry)===t.state.key&&!!(s?.connected&&s.administrator&&s.robotConnected&&s.robotCount>0)}#T(t){this.#o.get(t)?.abort();let e=new AbortController;return this.#o.set(t,e),e}#A(t,e){this.#o.get(t)===e&&this.#o.delete(t)}#H(t=[]){let e=!1;for(let[s,n]of this.#o)t.includes(s)||(e||=s==="plan-mutation"||s==="area-mutation"||s==="plan-preflight",n.abort(),this.#o.delete(s));e&&this.#e.value.command==="pending"&&this.#e.patch({command:"idle",notice:null})}#be(){this.#k+=1,this.#d!==null&&window.clearTimeout(this.#d),this.#d=null}#oe(t,e=null){this.#M(),this.#be(),this.#t.invalidate(),this.#D(),this.#w="";let s=this.#t.generation;this.#H();let n=this.#e.value,o=V();this.#e.patch({command:"idle",dataMode:o.dataMode,floor:o.floor,managedLock:!1,workflow:"none",dialog:null,notice:null,draftFloorOrdinal:null,draw:o.draw,planDraft:o.planDraft,areaDraft:o.areaDraft,generation:s,coherence:n.host.administrator?"unavailable":"blocked",fullMap:!1,precisionOpen:!1,resources:{catalog:m("error",null,t),entry:null,scene:m("idle",null),pose:m("idle",null),history:m("idle",null),plans:m("idle",null),areas:m("idle",null)},manualRoomPreview:m("idle",null),map:{available:!1,complete:!1,floorCoherent:!1,sessionVerified:!1,exactPose:!1},selection:{...o.selection,entryId:e,entrySource:n.selection.entrySource,floorId:"current",historyId:null}})}async refreshCatalog(t=!1,e=!1,s=!1,n=null){if(this.#l||!this.#i.active||!this.#s?.host.administrator||!this.#s.host.connected||this.#s.host.robotCount===0||n&&(!this.#s.host.robotConnected||!this.#he(n)))return;if(this.#_)return t&&(this.#v?e&&(this.#m?this.#c&&=s:this.#c=s,this.#m=!0):(this.#m?this.#c&&=s:this.#c=s,this.#m=!0,this.#o.get("catalog")?.abort()),n&&(this.#m?this.#c&&=s:this.#c=s,this.#g=n,this.#m=!0)),this.#b;this.#_=!0,this.#v=t;let o;this.#b=new Promise(l=>{o=l});let i=this.#T("catalog");n&&(n.attempt.controller=i);let r=this.#e.value.resources.catalog.value;this.#e.patch({resources:{...this.#e.value.resources,catalog:m("loading",r)}});try{let l=await this.#n.catalog(i.signal);if(i.signal.aborted||this.#l||n&&!this.#he(n))return;let c=this.#s?.entryKey,d=c?l.find(v=>v.entryId===c)??null:l[0]??null,u=this.#e.value.resources.entry;if(d&&this.#h?.key===x(d)&&(this.#h.attempt!==null||this.#h.retryTimer!==null)&&(!n||!this.#he(n))){this.#e.patch({managedLock:Fe(d),resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:u}});return}let p=!!(d&&u&&x(d)===x(u)&&this.#te(u));if(d&&u&&F(d)===F(u)&&de(d)===de(u)&&ue(d)===ue(u)&&(p||d.mapRevision<u.mapRevision||!t&&this.#o.has("scene"))&&(d={...d,mapRevision:u.mapRevision}),this.#e.patch({managedLock:d?Fe(d):!1,resources:{...this.#e.value.resources,catalog:m(l.length?"ready":"empty",l),entry:d}}),this.#s&&this.#Y(this.#s),!d){this.#oe("no-loaded-robot",this.#s?.entryKey??null);return}if(this.#e.value.selection.floorId!=="current"||this.#e.value.dataMode!=="live"){n&&this.#ne(d);return}let h=yt(d),f=this.#t.current(),y=!!(f&&u&&x(d)===x(u)&&d.mapFloorCoherent&&d.mapSessionVerified);if((!t||s)&&(h===this.#w||y)){let v=this.#e.value,b=d.mapFloorCoherent&&d.mapSessionVerified,E=d.health==="problem"||d.health==="limited";this.#e.patch({coherence:b?E?"degraded":"current":"verifying",map:{...v.map,available:v.resources.scene.value!==null,complete:d.mapComplete&&!d.mapTruncated,floorCoherent:d.mapFloorCoherent,sessionVerified:d.mapSessionVerified,exactPose:b?v.map.exactPose:!1},floor:{...v.floor,classifiedCount:Math.max(1,d.historyFloorCount)}}),b&&this.#e.value.resources.plans.problem==="map-rechecking"&&this.loadPlans(),this.#me();let R=f;if(R&&y&&(d.mapRevision>R.revision||n!==null)&&(d.mapRevision>R.revision&&(R=this.#t.advance(R,d.mapRevision)),R)){this.#w=h,this.#D();let g=this.#e.value.resources;this.#e.patch({resources:{...g,scene:m("loading",g.scene.value)}}),this.#ie(d,R)}R&&!v.resources.scene.value&&!this.#o.has("history")&&this.#re(d,R),b&&R&&(v.resources.scene.status==="error"||v.floor.readOnly)&&!this.#o.has("scene")&&this.#ie(d,R);return}this.#w=h,this.#Ee(d,u)}catch(l){if(W(l)||i.signal.aborted||this.#l)return;n&&this.#Z(n.state.key),this.#e.patch({coherence:this.#e.value.resources.scene.value?"degraded":"unavailable",resources:{...this.#e.value.resources,catalog:m("error",r,K(l,"catalog-unavailable"))}})}finally{this.#A("catalog",i),n?.attempt.controller===i&&(n.attempt.controller=null),this.#_=!1;let l=this.#m,c=this.#c,d=this.#g;this.#v=!1;try{l&&!this.#l&&(this.#m=!1,this.#c=!1,this.#g=null,await this.refreshCatalog(!0,!1,c,d))}finally{o()}}}#Ee(t,e){this.#h!==null&&this.#h.key!==x(t)&&this.#M();let s=this.#e.value,n=!!(e&&F(e)===F(t)),o=t.mapFloorCoherent&&t.mapSessionVerified,i=s.draftMapSessionKey??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapSessionKey:null),r=s.draftFloorOrdinal??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapFloorOrdinal:null),l=o?t.mapFloorOrdinal:null,c=o?t.mapSessionKey:null,d=e!==null&&e.entryId!==t.entryId||r!==null&&l!==null&&r!==l||i!==null&&c!==null&&i!==c,u=n&&o&&r===t.mapFloorOrdinal&&i===t.mapSessionKey,p=["catalog"];n&&!d&&p.push("plans","areas"),u&&p.push("plan-mutation","area-mutation");let h=this.#t.begin(t.entryId,de(t),ue(t),t.mapRevision);this.#h?.key===x(t)&&this.#h.attempt&&(this.#h.attempt.generation=h.generation),this.#D(),this.#H(p);let f=e?.entryId===t.entryId?s.resources.scene.value:null,y=f!==null&&(s.floor.readOnly||!n||!o||e?.mapSessionKey!==t.mapSessionKey),v=s.resources.pose.value,b=n&&o&&t.mapSessionKey!==null&&v?.position&&v.mapSessionKey===t.mapSessionKey?v:null;d&&this.#be();let E=V(),R=t.health==="problem"||t.health==="limited",g=this.#e.value;this.#e.patch({...d?{command:"idle",workflow:"none",dialog:null,precisionOpen:!1,fullMap:!1,draw:E.draw,planDraft:E.planDraft,areaDraft:E.areaDraft,notice:T.mapChanged}:{},draftFloorOrdinal:l??r,draftMapSessionKey:c??i,managedLock:Fe(t),generation:h.generation,coherence:o?R?"degraded":y?"verifying":"current":"verifying",dataMode:"live",resources:{...g.resources,entry:t,scene:m(o?"loading":"idle",f),pose:m(o?"loading":"idle",b),history:m("loading",g.resources.history.value),plans:n&&!d?g.resources.plans:m("idle",null),areas:n&&!d?g.resources.areas:m("idle",null)},map:{available:f!==null,complete:t.mapComplete&&!t.mapTruncated,floorCoherent:t.mapFloorCoherent,sessionVerified:t.mapSessionVerified,exactPose:o&&b!==null&&!y},floor:{classifiedCount:Math.max(1,t.historyFloorCount),displayName:y?s.floor.displayName:t.selectedFloorOrdinal?`Floor ${t.selectedFloorOrdinal}`:"Current floor",readOnly:y},selection:{...g.selection,entryId:t.entryId,floorId:"current",historyId:null,roomIds:d?[]:g.selection.roomIds,roomSettings:d?[]:g.selection.roomSettings,planId:d?null:g.selection.planId,areaId:d?null:g.selection.areaId}}),this.#re(t,h),o&&this.#e.value.resources.plans.status==="idle"&&this.loadPlans(),this.#me(),o&&(this.#ie(t,h),this.#pe(t,h))}async#ie(t,e){if(!this.#i.active)return;let s=this.#T("scene");try{let n=await this.#n.scene(t.sceneUrl,t.mapRevision,t.mapFloorCoherent,"live",s.signal);if(!this.#t.accepts(e))return;if(!n.floorCoherent){let c=this.#e.value;this.#e.patch({coherence:"verifying",resources:{...c.resources,scene:m("error",c.resources.scene.value,"map-rechecking"),pose:m("idle",null)},map:{...c.map,available:c.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...c.floor,readOnly:c.resources.scene.value!==null}}),this.#ne(t);return}if(n.revision<e.revision||!n.scene)throw new P("scene-unavailable");let o=n.revision===e.revision?e:this.#t.advance(e,n.revision);if(!o)throw new P("scene-unavailable");let i=this.#e.value,r={...i.resources.entry??t,mapRevision:n.revision};this.#w=yt(r),this.#e.patch({coherence:r.health==="problem"||r.health==="limited"?"degraded":"current",resources:{...i.resources,entry:r,scene:m("ready",n.scene)},map:{...i.map,available:!0},floor:{...i.floor,readOnly:!1,displayName:i.resources.history.value?.floors.find(c=>c.active)?.label||(r.selectedFloorOrdinal?`Floor ${r.selectedFloorOrdinal}`:"Current floor")},notice:i.notice?.key==="v4_notice_saved_map"?null:i.notice});let l=this.#e.value.resources.plans;if((l.status==="idle"||l.problem==="map-rechecking")&&this.loadPlans(),this.#me(),t.deltaUrl&&typeof DecompressionStream=="function"){let c=++this.#C;this.#Se(r,o,n.scene,c)}else this.#J("delta",r)}catch(n){if(W(n)||!this.#t.accepts(e))return;if(n instanceof P&&n.code==="request-timeout"){let l=this.#e.value;this.#e.patch({resources:{...l.resources,scene:m("loading",l.resources.scene.value,"scene-building")}}),window.setTimeout(()=>{this.#l||!this.#t.accepts(e)||this.#e.value.selection.floorId!=="current"||this.#ie(t,e)},250);return}this.#ne(t);let o=this.#e.value,i=o.resources.pose.value,r=o.resources.scene.value!==null&&t.mapSessionKey!==null&&i?.position!==null&&i?.mapSessionKey===t.mapSessionKey;this.#e.patch({coherence:"degraded",resources:{...o.resources,scene:m("error",o.resources.scene.value,K(n,"scene-unavailable"))},map:{...o.map,available:o.resources.scene.value!==null,exactPose:r}})}finally{this.#A("scene",s)}}async#Se(t,e,s,n){if(!t.deltaUrl||typeof DecompressionStream!="function")return;let o=t.deltaUrl,i={generation:n,stamp:e,entryId:t.entryId,coherenceIdentity:x(t),deltaUrl:o};if(n!==this.#C||!this.#t.accepts(e))return;this.#I=i;let r=t,l=e,c=s;try{for(;!this.#l&&this.#i.active&&n===this.#C&&this.#t.accepts(l)&&this.#e.value.selection.floorId==="current";){let d=this.#T("delta");try{let u=await this.#n.sceneDelta(o,c,r.mapFloorCoherent,d.signal);if(d.signal.aborted||this.#l||n!==this.#C||!this.#t.accepts(l))return;if(!u.floorCoherent){let f=this.#e.value;this.#e.patch({coherence:"verifying",map:{...f.map,available:f.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...f.floor,readOnly:f.resources.scene.value!==null},resources:{...f.resources,scene:m("error",f.resources.scene.value,"map-rechecking"),pose:m("idle",null)}}),this.#de("delta",r);return}if(u.notModified||!u.scene){this.#J("delta",r),await new Promise(f=>window.setTimeout(f,100));continue}let p=this.#t.advance(l,u.revision);if(!p)return;l=p,i.stamp=p,c=u.scene,r={...r,mapRevision:u.revision},this.#J("delta",r),this.#w=yt(r);let h=this.#e.value;this.#e.patch({resources:{...h.resources,entry:r,scene:m("ready",c)},map:{...h.map,available:!0,floorCoherent:!0}}),this.#pe(r,l)}finally{this.#A("delta",d)}}}catch(d){if(W(d)||this.#l||n!==this.#C||!this.#t.accepts(l))return;this.#de("delta",r)}finally{this.#I===i&&(this.#I=null)}}async#re(t,e){if(!this.#i.active)return;let s=this.#T("history");try{let n=await this.#n.history(t.historyUrl,s.signal),o=this.#t.current();if(s.signal.aborted||!o||!Ke(e,o)||n.entryId!==t.entryId)return;let i=this.#e.value,r=n.floors.find(d=>d.id===i.selection.floorId),l=!i.selection.historyId||r?.snapshots.some(d=>d.id===i.selection.historyId),c=i.dataMode==="live"?n.floors.find(d=>d.active):r;if(this.#e.patch({resources:{...this.#e.value.resources,history:m("ready",n)},floor:{...this.#e.value.floor,classifiedCount:n.floors.length,...c&&!(i.dataMode==="live"&&i.floor.readOnly)?{displayName:Ue(c,1)}:{}}}),i.dataMode==="live"&&!i.resources.scene.value){let d=n.floors.flatMap(u=>u.snapshots.map(p=>({floor:u,snapshot:p}))).sort((u,p)=>Date.parse(p.snapshot.createdAt)-Date.parse(u.snapshot.createdAt));for(let u of d){let p;try{p=await this.#n.scene(u.snapshot.sceneUrl,u.snapshot.revision,!0,"history",s.signal)}catch(y){if(W(y)||s.signal.aborted)return;continue}let h=this.#t.current();if(s.signal.aborted||!h||!Ke(e,h)||this.#e.value.resources.scene.value)return;if(!p.scene)continue;let f=this.#e.value;this.#e.patch({floor:{...f.floor,readOnly:!0,displayName:Ue(u.floor,1)},resources:{...f.resources,scene:m("ready",p.scene),pose:m("idle",null)},map:{...f.map,available:!0,exactPose:!1},notice:En(u.snapshot.createdAt)});break}}if(i.dataMode==="history"&&(!r||!l)){let d=r||n.floors.find(p=>p.active)||n.floors[0],u=this.selectFloor(d?.id||"current");!this.#l&&i.workflow==="history"&&this.#e.dispatch({type:"open-workflow",workflow:"history"}),await u}}catch(n){let o=this.#t.current();if(W(n)||s.signal.aborted||!o||!Ke(e,o))return;this.#e.patch({resources:{...this.#e.value.resources,history:m("error",null,K(n,"history-unavailable"))}})}finally{this.#A("history",s)}}async refreshPose(){let t=this.#e.value.resources.entry,e=this.#t.current();!t||!e||this.#e.value.selection.floorId!=="current"||!t.mapFloorCoherent||!t.mapSessionVerified||await this.#pe(t,e)}async#pe(t,e){if(this.#l||!this.#i.active||!this.#W||!this.#s?.host.connected)return;if(this.#P){this.#R=!0;return}this.#P=!0;let s=this.#T("pose");try{let n=await this.#n.pose(t.poseUrl,s.signal),o=this.#t.current(),i=this.#e.value.resources.entry;if(!o||!Ke(e,o)||!i||!this.#e.value.map.floorCoherent)return;if(!n.floorCoherent||n.mapSessionKey===null||n.mapSessionKey!==i.mapSessionKey){this.#e.patch({resources:{...this.#e.value.resources,pose:m("idle",null)},map:{...this.#e.value.map,exactPose:!1}}),this.#de("pose",i);return}this.#J("pose",i);let r=this.#e.value,l=r.resources.pose.value,c=!!(r.map.exactPose&&l?.position&&l.mapSessionKey===i.mapSessionKey);if(n.position===null&&c){this.#e.patch({resources:{...r.resources,pose:m("ready",l)}});return}this.#e.patch({resources:{...r.resources,pose:m("ready",n)},map:{...r.map,exactPose:n.position!==null}})}catch(n){if(W(n)||!this.#t.accepts(e))return;let o=this.#e.value,i=o.resources.pose.value,r=!!(o.map.exactPose&&i?.position&&i.mapSessionKey===o.resources.entry?.mapSessionKey);this.#e.patch({resources:{...o.resources,pose:m("error",r?i:null,K(n,"pose-unavailable"))},map:{...o.map,exactPose:r}})}finally{if(this.#A("pose",s),this.#P=!1,this.#R&&!this.#l&&this.#W&&this.#s?.host.connected&&this.#s.host.administrator&&this.#s.host.robotCount>0){this.#R=!1;let n=this.#e.value.resources.entry,o=this.#t.current();n&&o&&this.#pe(n,o)}else this.#R=!1}}async selectFloor(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;let n=e.floors.find(l=>l.id===t);if(!n&&t!=="current")return;let o=this.#e.value;if(o.workflow==="draw"&&(o.draw.dirty||o.areaDraft.dirty)||o.workflow==="areaReview"&&(o.draw.dirty||o.areaDraft.dirty))return;if(!n||n.active){this.#M(),this.#w="";let l=this.#e.value;this.#e.patch({resources:{...l.resources,plans:m("idle",null),areas:m("idle",null),scene:m("idle",l.resources.scene.value),pose:m("idle",null)},map:{...l.map,available:l.resources.scene.value!==null,exactPose:!1},coherence:"verifying",floor:{...l.floor,readOnly:l.resources.scene.value!==null},workflow:"none",precisionOpen:!1}),this.#e.dispatch({type:"set-floor",floorId:"current"}),await this.refreshCatalog(!0);return}this.#M();let i=n.snapshots.at(-1),r=this.#t.begin(s.entryId,n.id,i?.id||n.id,i?.revision||0);this.#H(["catalog"]),this.#e.patch({generation:r.generation,coherence:"current",dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ue(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:i?.id||null},resources:{...this.#e.value.resources,scene:m(i?"loading":"empty",null),pose:m("idle",null),plans:m("idle",null),areas:m("idle",null)},workflow:"none",precisionOpen:!1,map:{available:!1,complete:!0,floorCoherent:!0,sessionVerified:!0,exactPose:!1}}),i&&await this.#we(i,r)}async selectHistory(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;if(!t){await this.selectFloor("current");return}let n=e.floors.find(r=>r.snapshots.some(l=>l.id===t)),o=n?.snapshots.find(r=>r.id===t);if(!n||!o)return;this.#M();let i=this.#t.begin(s.entryId,n.id,o.id,o.revision);this.#H(["catalog"]),this.#e.patch({generation:i.generation,dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ue(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:o.id},resources:{...this.#e.value.resources,scene:m("loading",null),pose:m("idle",null)},map:{...this.#e.value.map,available:!1,exactPose:!1}}),await this.#we(o,i)}async#we(t,e){if(!this.#i.active)return;let s=this.#T("history-scene");try{let n=await this.#n.scene(t.sceneUrl,t.revision,!0,"history",s.signal);if(!this.#t.accepts(e)||!n.scene)return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("ready",n.scene)},map:{...this.#e.value.map,available:!0,exactPose:!1}})}catch(n){if(W(n)||!this.#t.accepts(e))return;this.#e.patch({resources:{...this.#e.value.resources,scene:m("error",null,K(n,"history-scene-unavailable"))}})}finally{this.#A("history-scene",s)}}async openWorkflow(t){let e=this.#e.value;if((e.dataMode==="history"||e.floor.readOnly)&&Us.includes(t))return;let s=this.#e.value.workflow;if(t==="draw"&&s!=="draw"&&s!=="areaReview"&&this.selectArea(null),this.#e.dispatch({type:"open-workflow",workflow:t}),Us.includes(t)&&this.#_e(),t==="history"){let n=this.#e.value.resources.entry,o=this.#t.current();n&&o&&(this.#e.patch({resources:{...this.#e.value.resources,history:m("loading",this.#e.value.resources.history.value)}}),await this.#re(n,o))}(t==="plans"||t==="plan"||t==="rooms")&&await this.loadPlans(),(t==="draw"||t==="areaReview")&&await this.loadAreas()}async loadPlans({force:t=!1,inPlace:e=!1}={}){let s=!e||!this.#e.value.resources.plans.value;if(!this.#i.active){this.#o.get("plans")?.abort();let r=this.#e.value.resources;return s&&this.#e.patch({resources:{...r,plans:m("idle",r.plans.value)}}),null}let n=this.#e.value.resources.entry;if(!n||!this.#t.current()||!Je(this.#e.value)||!t&&this.#o.has("plans"))return null;let o=F(n),i=this.#T("plans");s&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("loading",this.#e.value.resources.plans.value)}});try{let r=await this.#n.plans(n.plansUrl,i.signal),l=this.#e.value.resources.entry;if(i.signal.aborted||this.#l||!l||F(l)!==o)return null;let c=this.#e.value;if(c.planDraft.dirty||c.workflow==="plan"&&(!c.planDraft.id||c.command==="pending"))return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",r)}}),r;let d=c.workflow==="plan"?c.selection.planId:r.selectedPlan||r.plans[0]?.id||null,u=r.plans.find(p=>p.id===d);return this.#e.patch({resources:{...this.#e.value.resources,plans:m("ready",r)},selection:{...this.#e.value.selection,planId:d},planDraft:u?Ge(u):{...this.#e.value.planDraft,id:null,name:"",rooms:[],parkedRooms:[],dirty:!1},...u?{}:{planView:"edit",expandedRoom:null}}),r}catch(r){let l=this.#e.value.resources.entry;if(W(r)||i.signal.aborted||this.#l||!l||F(l)!==o)return null;let c=r instanceof P&&r.code==="map-rechecking"?"map-rechecking":K(r,"plans-unavailable");return s&&this.#e.patch({resources:{...this.#e.value.resources,plans:m("error",this.#e.value.resources.plans.value,c)}}),null}finally{this.#A("plans",i)}}selectPlan(t,e=!1){this.#e.patch(xt(this.#e.value,t,e))}setPlanEnabled(t){return this.#ee("plan-mutation",T.planSaveFailed,(e,s)=>e.setPlanEnabled(s,t))}#me(){let t=this.#e.value;(t.workflow==="draw"||t.workflow==="areaReview")&&t.resources.areas.status==="idle"&&this.loadAreas()}async loadAreas({reconcileDraft:t=!0}={}){if(!this.#i.active){this.#o.get("areas")?.abort();let o=this.#e.value.resources;return this.#e.patch({resources:{...o,areas:m("idle",o.areas.value)}}),null}let e=this.#e.value.resources.entry;if(!e||!this.#t.current()||!Je(this.#e.value))return null;let s=F(e),n=this.#T("areas");this.#e.patch({resources:{...this.#e.value.resources,areas:m("loading",this.#e.value.resources.areas.value)}});try{let o=await this.#n.areas(e.areasUrl,n.signal),i=this.#e.value.resources.entry;if(n.signal.aborted||this.#l||!i||F(i)!==s)return null;if(o.sceneUrl!==i.sceneUrl)throw new P("areas-unavailable");this.#e.patch({resources:{...this.#e.value.resources,areas:m("ready",o)}});let r=this.#e.value.selection.areaId,l=this.#e.value,c=o.areas.some(d=>d.id===r);return t&&r!==null&&!c&&(l.draw.dirty||l.areaDraft.dirty)?this.#e.patch({selection:{...l.selection,areaId:null},areaDraft:{...l.areaDraft,id:null,status:"new",canRebind:!1,dirty:!0},notice:T.areaRemoved}):t&&!l.draw.dirty&&!l.areaDraft.dirty&&this.selectArea(c?r:null),o}catch(o){let i=this.#e.value.resources.entry;return W(o)||n.signal.aborted||this.#l||!i||F(i)!==s||this.#e.patch({resources:{...this.#e.value.resources,areas:m("error",this.#e.value.resources.areas.value,K(o,"areas-unavailable"))}}),null}finally{this.#A("areas",n)}}selectArea(t){let e=this.#e.value.resources.areas.value?.areas.find(n=>n.id===t),s=this.#e.value;this.#e.patch({selection:{...s.selection,areaId:t},areaDraft:e?this.#Ce(e):{id:null,name:"",cleaningMode:"vacuum",coverageSetting:"standard",status:"new",canRebind:!1,dirty:!1},draw:{...s.draw,circles:e?.circles||[],outline:e?.outline??null,outlineUndo:[],outlineRedo:[],tool:!e||e.outline?"outline":"paint",undo:[],redo:[],dirty:!1,strokeCount:0}})}#Ce(t){return{id:t.id,name:t.name,cleaningMode:t.cleaningMode,coverageSetting:t.coverageSetting,status:t.status,canRebind:t.canRebind,dirty:!1}}saveArea(){return this.#ee("area-mutation",T.areaSaveFailed,(t,e)=>t.saveArea(e))}deleteArea(){return this.#ee("area-mutation",T.areaDeleteFailed,(t,e)=>t.deleteArea(e))}savePlan(){return this.#ee("plan-mutation",T.planSaveFailed,(t,e)=>t.savePlan(e))}deletePlan(){return this.#ee("plan-mutation",T.planDeleteFailed,(t,e)=>t.deletePlan(e))}#_e(){return this.#ae??=import("./catalog-writes-BYCERCQ3.js").catch(()=>null)}async#ee(t,e,s){let n=this.#e.value;if(n.command==="pending"||this.#o.has(t))return;let o=this.#T(t);try{let i=await this.#_e(),r=this.#e.value;if(o.signal.aborted||!Qe(r)||r.command==="pending")return;if(!i){this.#e.patch({notice:e});return}await s(i,{state:n,signal:o.signal,store:this.#e,backend:this.#n,effects:this,helpers:Sn,failure:e,projection:()=>this.#s,disposed:()=>this.#l,release:()=>this.#A(t,o)})}finally{this.#A(t,o)}}async executeAction(t){switch(typeof t=="string"?t:t.id){case"recheck-status":{if(this.#e.value.rechecking)return;let s=this.#e.value.selection.entryId;this.#e.patch({rechecking:!0});try{await this.refreshCatalog(!0)}finally{this.#l||this.#e.patch({rechecking:!1})}let n=this.#e.value;!this.#l&&n.selection.entryId===s&&n.resources.catalog.status==="ready"&&n.host.connected&&n.host.robotConnected&&n.coherence==="current"&&n.command==="failed"&&this.#e.patch({command:"idle",notice:T.statusRefreshed});return}case"stop":await this.#N("matic_robot","stop_intelligent_cleaning",{include_unmanaged:!0});return;case"resume":await this.#N("vacuum","send_command",{command:"resume"});return;case"run-plan":{let s=this.#e.value,n=s.selection.planId||s.resources.plans.value?.selectedPlan;if(!n||s.workflow!=="plan"||!s.planDraft.enabled||s.resources.plans.status!=="ready"||s.command!=="idle"||!Se(s))return;let o=s.selection.entryId,i=s.generation,r=s.selection.planId,l=s.planDraft,c=s.resources.plans.value?.plans.find(y=>y.id===n)?.nextRunPreview;if(!c||!/^[0-9a-f]{64}$/u.test(c.previewToken??"")){this.#e.patch({notice:T.planPreviewMissing});return}this.#e.patch({command:"pending",pendingAction:"run-plan",notice:null});let d=this.#T("plan-preflight"),u;try{u=await this.loadPlans({force:!0,inPlace:!0})}finally{this.#A("plan-preflight",d)}let p=this.#e.value,h=()=>{let y=this.#e.value;!this.#l&&y.selection.entryId===o&&y.generation===i&&y.command==="pending"&&this.#e.patch({command:"idle"})};if(d.signal.aborted||this.#l||p.selection.entryId!==o||p.generation!==i||p.workflow!=="plan"||p.selection.planId!==r||(p.selection.planId||p.resources.plans.value?.selectedPlan)!==n||p.planDraft!==l){h();return}if(!u){h(),this.#e.patch({notice:T.planPreviewRefreshFailed});return}let f=u.plans.find(y=>y.id===n)?.nextRunPreview;if(!f||f.blocker||!/^[0-9a-f]{64}$/u.test(f.previewToken??"")){h(),this.#e.patch({notice:T.planPreviewNone});return}if(!c||JSON.stringify(c)!==JSON.stringify(f)){h(),this.#e.patch({notice:T.planPreviewChanged});return}h(),await this.#N("matic_robot","run_selected_plan",{plan:n,preview_token:f.previewToken});return}case"clean-rooms":{await this.#Me();return}case"run-area":{let s=this.#e.value.selection.areaId;s&&await this.#N("matic_robot","clean_area",{area:s});return}case"review-area":this.#e.dispatch({type:"open-workflow",workflow:"areaReview"});return;case"save-area":await this.saveArea();return;case"save-plan":this.#e.value.planDraft.id&&!this.#e.value.planDraft.dirty?this.#e.dispatch({type:"set-plan-view",view:"run"}):await this.savePlan();return;case"delete-plan":await this.deletePlan();return;case"delete-area":await this.deleteArea();return;case"reset-room-cadence":if(typeof t=="string")return;await this.#ee("plan-mutation",t.mode==="mop"?T.resetMopFailed:T.resetVacuumFailed,(s,n)=>s.resetRoomCadence(n,t));return}}async#Me(){if(this.#L)return;let t=this.#e.value,e=this.#O(t),s=Xe(t);if(!e||!s||s.key!==e.key||s.generation!==e.generation||s.floorKey!==e.floorKey||s.missionKey!==e.missionKey||s.preview.entryId!==e.entryId||s.preview.blocker||s.preview.rooms.length===0)return;this.#L=!0;let n=this.#T("room-preview");this.#K=this.#j(e),this.#e.patch({manualRoomPreview:m("loading",null),notice:null});try{let o=await this.#n.previewRoomSequence(e.entityId,e.rooms,e.overrideRoomSchedule,n.signal);if(n.signal.aborted||!this.#p(e)||o.entryId!==e.entryId)return;let i={key:e.key,generation:e.generation,floorKey:e.floorKey,missionKey:e.missionKey,preview:o};if(o.blocker||o.rooms.length===0){this.#e.patch({manualRoomPreview:m("ready",i),notice:T.roomPreviewBlocked});return}if(js(s.preview)!==js(o)){this.#e.patch({manualRoomPreview:m("ready",i),notice:T.roomPreviewChanged});return}if(this.#e.patch({manualRoomPreview:m("ready",i),notice:null}),!this.#p(e)||!Se(this.#e.value))return;await this.#N("matic_robot","clean_room_sequence",{rooms:e.rooms,use_room_schedule:!0,override_room_schedule:e.overrideRoomSchedule,return_to_base:!0,preview_token:o.previewToken})}catch(o){!W(o)&&!n.signal.aborted&&this.#p(e)&&this.#e.patch({manualRoomPreview:m("error",null,K(o,"preview-unavailable")),notice:T.roomPreviewFailed})}finally{this.#A("room-preview",n),this.#L=!1,this.#le()}}async#N(t,e,s){let n=this.#e.value,o=this.#s?.vacuumEntityId,i=e==="stop_intelligent_cleaning"||t==="vacuum"&&e==="return_to_base",r=t==="vacuum"&&e==="send_command"&&s.command==="resume";if(!o||n.selection.entryId!==this.#s?.entryKey||(i?!Dt(n):r?!$t(n):!Se(n)))return;let l=++this.#k,c=this.#s?.entryKey,d=()=>!this.#l&&l===this.#k&&c===this.#s?.entryKey,u=i?"settling":"starting";this.#d!==null&&window.clearTimeout(this.#d),this.#d=null,this.#e.patch({command:u,notice:null});try{if(await this.#n.service(t,e,s,o),!d())return;if(t==="matic_robot"&&(e==="clean_room_sequence"||e==="run_selected_plan")){this.#e.patch({command:"idle"}),this.refreshCatalog(!0);return}this.#e.patch({command:u}),this.#d!==null&&window.clearTimeout(this.#d),this.#d=window.setTimeout(()=>{this.#d=null,d()&&this.#e.value.command===u&&this.#e.patch({command:"idle"})},15e3)}catch(p){if(!d())return;this.#e.patch({command:"failed",notice:i?T.stopUnconfirmed:Cn(p)??T.actionUnconfirmed})}}dispose(){this.#l||(this.#l=!0,this.#i.dispose(),this.#B(!1),this.#$?.(),this.#$=null,this.#e.patch({manualRoomPreview:m("idle",null),rechecking:!1}),this.#Q(),this.#H(),this.#d!==null&&window.clearTimeout(this.#d),this.#d=null,this.#a.dispose(),this.#fe(),this.#n.dispose())}#fe(){this.#S?.dispose(),this.#S=null,this.#x=null,this.#y=null}};var xn=a=>a.workflow==="none"?0:a.workflow!=="plan"?1:a.planView==="edit"&&a.planDraft.id!==null?3:2,Ys=a=>xn(a)+(a.fullMap?1:0)+(a.precisionOpen?1:0)+(a.dialog?1:0),Xs=a=>{if(!a||typeof a!="object")return null;let t=a.maticMapLayer;if(!t||typeof t!="object")return null;let e=t.owner,s=t.depth;return typeof e=="string"&&Number.isInteger(s)&&Number(s)>=0?{owner:e,depth:Number(s)}:null},je=class{#e;#t=`matic-map-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}`;#n=0;#i=null;#a=!1;#r=!1;constructor(t){this.#e=t}start(){this.#i||(this.#n=Ys(this.#e.value),this.#i=this.#e.subscribe(t=>this.#o(t)),window.addEventListener("popstate",this.#s))}#o(t){let e=Ys(t);if(this.#a){this.#a=!1,this.#n=e;return}if(e<this.#n){let s=Xs(history.state);if(s?.owner===this.#t&&s.depth===this.#n){let n=e-this.#n;this.#n=e,this.#r=!0,history.go(n);return}}if(e>this.#n)for(let s=this.#n+1;s<=e;s+=1){let n=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...n,maticMapLayer:{owner:this.#t,depth:s}},"",window.location.href)}this.#n=e}#s=()=>{if(this.#r){this.#r=!1;return}if(!(this.#n<1)){if(Z(this.#e.value,{type:"dismiss-top-layer"})){let t=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...t,maticMapLayer:{owner:this.#t,depth:this.#n}},"",window.location.href),this.#e.dispatch({type:"open-dialog",dialog:"discardDraft"});return}this.#a=!0,this.#e.dispatch({type:"dismiss-top-layer"})}};dismissTop(){if(this.#n<1)return!1;let t=Xs(history.state);return t?.owner===this.#t&&t.depth===this.#n?history.back():this.#e.dispatch({type:"dismiss-top-layer"}),!0}dispose(){this.#i?.(),this.#i=null,window.removeEventListener("popstate",this.#s),this.#n=0,this.#r=!1}};var Gs=[Me,Pe,Zt,Ee`
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

    .panel-heading { display: flex; gap: var(--ms-space-2); align-items: center; min-inline-size: 0; }
    .panel-heading h2 { margin: 0; min-inline-size: 0; font-size: var(--ms-t-xl); letter-spacing: var(--ms-track-tight); }
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
  `];var Qs=ae(xe),Ye=ae(Ht),Js=ae(Ze),tn=a=>a.dataMode==="history"||a.floor.readOnly,gt=(a,t)=>{let e=(r,l,c)=>$e(t,r,l,c);if(!a.host.connected)return{title:e("v4_reconnecting","Reconnecting"),detail:e("v4_ha_offline","Home Assistant is offline"),icon:j,notable:!0};if(!a.host.administrator)return{title:e("v4_access_required","Access required"),detail:e("v4_admin_only","Administrator only"),icon:j,notable:!0};if(a.host.robotCount===0)return{title:e("v4_no_robot_short","No robot"),detail:e("v4_set_up_robot","Set up a robot"),icon:j,notable:!0};if(Re(a))return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),detail:e("v4_choose_another_robot","Choose another robot to open its map."),icon:j,notable:!0};if(!a.host.robotConnected)return{title:e("v4_robot_offline","Robot offline"),detail:e("v4_last_map_read_only","Last known map \xB7 read only"),icon:j,notable:!0};if(a.activity==="problem")return{title:e("v4_needs_attention","Needs attention"),detail:e("v4_check_robot","Check the robot"),icon:j,notable:!0};if(a.dataMode==="history"){let r=a.resources.history.value?.floors.find(d=>d.id===a.selection.floorId),l=r?.snapshots.findIndex(d=>d.id===a.selection.historyId)??-1,c=r?.snapshots.length??0;return{title:e("v4_saved_map","Saved map"),detail:l>=0?e("v4_read_only_position","Read only \xB7 {position} of {count}",{position:l+1,count:c}):e("v4_read_only","Read only"),icon:st,notable:!1}}if(a.coherence==="verifying"||a.coherence==="booting")return{title:e("v4_locating","Locating"),detail:e("v4_finding_map","Finding the current map"),icon:re,notable:!0};if((a.resources.entry?.activePlan||a.resources.entry?.runnerLocked)&&(a.activity==="idle"||a.activity==="docked"))return{title:e("v4_task_in_progress","Run in progress"),detail:a.coherence==="unavailable"||a.coherence==="blocked"?e("v4_task_map_unavailable","The live map is unavailable; the current clean continues."):a.activity==="docked"?e("v4_task_docked","Robot docked; the clean has not finished."):e("v4_task_waiting","Waiting for the clean to continue or finish."),icon:nt,notable:!0};if(a.command==="starting"&&(a.activity==="idle"||a.activity==="docked"))return{title:e("v4_action_starting","Starting"),detail:e("v4_action_starting_detail","Waiting for the robot to begin"),icon:re,notable:!0};let s=a.coherence==="unavailable"||a.coherence==="blocked",n=e("v4_active_map_unavailable","The live map is unavailable; new cleaning is disabled."),o=r=>s?`${r} \xB7 ${n}`:r;if(a.activity==="cleaning")return{title:e("v4_cleaning","Cleaning"),detail:o(e("v4_cleaning_progress","Cleaning in progress")),icon:it,notable:!0};if(a.activity==="recharging"){let r=a.batteryPercent===null?e("v4_recharging_detail","Will resume automatically when ready"):e("v4_recharging_battery","Charging to resume \xB7 {percent}% battery",{percent:a.batteryPercent});return{title:e("v4_recharging","Charging to resume"),detail:o(r),icon:rs,notable:!0}}if(a.activity==="paused")return{title:e("v4_paused","Paused"),detail:o(e("v4_can_resume","Cleaning can resume")),icon:rt,notable:!0};if(a.activity==="returning")return{title:e("v4_returning","Returning"),detail:o(e("v4_going_dock","Going to the dock")),icon:it,notable:!0};if(a.activity==="stopping")return{title:e("v4_stopping","Stopping"),detail:o(e("v4_waiting_robot","Waiting for the robot")),icon:rt,notable:!0};if(s)return{title:e("v4_map_unavailable","Map unavailable"),detail:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start."),icon:j,notable:!0};if(a.coherence==="degraded")return{title:e("v4_map_limited","Map limited"),detail:a.rechecking?e("v4_locating_rechecking","Checking again"):e("v4_cleaning_blocked","Cleaning can't start"),icon:re,notable:!0,recheck:!0};let i=a.batteryPercent===null?e("v4_ready","Ready"):e("v4_battery","{percent}% battery",{percent:a.batteryPercent});return{title:a.activity==="docked"?e("v4_docked","Docked"):e("v4_ready","Ready"),detail:i,icon:re,notable:!1}},bt=(a,t)=>{let e=(s,n)=>$e(t,s,n);switch(a.workflow){case"rooms":return{title:e("v4_choose_rooms","Choose rooms"),description:e("v4_choose_rooms_detail","Choose rooms on the map or in the list.")};case"draw":return{title:e("v4_draw_area","Draw an area"),description:e("v4_draw_area_detail","Outline or paint the area, then review it before saving.")};case"plans":return{title:e("v4_your_plans","Your plans"),description:e("v4_choose_plan_detail","Choose a plan to edit or run, or create a new one.")};case"plan":return{title:a.planDraft.id?e("v4_edit_plan","Edit plan"):e("v4_create_plan","Create a plan"),description:e("v4_plan_detail","Review rooms and cleaning settings.")};case"areaReview":return{title:e("v4_name_this_area","Name this area"),description:e("area_details_hint","Name the area and choose cleaning settings.")};case"history":return{title:e("v4_map_history","Map history"),description:e("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")};case"support":return{title:e("v4_map_diagnostics","Map diagnostics"),description:e("v4_map_support_detail","Details to share with support")};case"none":return tn(a)?{title:e("v4_saved_map_read_only_title","Saved map is read only"),description:a.dataMode==="live"?e("v4_map_recovery_automatic","Cleaning controls return automatically when the live map is ready."):e("v4_saved_map_read_only_detail","Return to the live map to choose rooms, run a plan, or draw a custom area.")}:{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_clean_detail","Choose rooms, a saved plan, or a custom area.")}}},X=["peek","half","full"],An={info:ot,success:ls,warning:cs,error:ds},Tn={info:6e3,success:4e3,warning:6e3,error:1e4},Zs={none:"half",rooms:"half",draw:"peek",plan:"full",plans:"full",areaReview:"half",history:"half",support:"full"},In=.5,$n=100,On=6,Dn=48,wt=".panel-top, .sheet-body, .workflow-body",Ln=["a[href]","button","input","label","select","textarea","summary",'[contenteditable]:not([contenteditable="false"])','[role="button"]','[role="link"]','[role="slider"]','[role="checkbox"]','[role="radio"]','[role="switch"]','[role="tab"]','[role="menuitem"]',`[tabindex]:not([tabindex="-1"]):not(${wt})`].join(","),sn=["button:not(:disabled)","a[href]","input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)","[tabindex]:not([tabindex='-1'])"].join(", "),nn=a=>!!a.querySelector(sn)||[...a.querySelectorAll("*")].some(t=>t.shadowRoot!==null&&nn(t.shadowRoot)),qn=(a=document)=>{let t=a.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t},en=a=>!!(a&&a.isConnected&&a.offsetParent!==null),_t=class extends Ce{constructor(){super();this.state=V();this._measuredNarrow=!1;this._sheetOffset=0;this._overflowOpen=!1;this._helpOpen=!1;this._browserFullscreen=!1;this._sheetDetent="half";this._polite="";this._alert="";this.#t=null;this.#n=new Set;this._toast=null;this.#i=new at(this,()=>import("./workflow-panel-WAKZSWTP.js"));this.#a=new at(this,async()=>new(await import("./outline-editor-MV6C4FUL.js")).OutlineEditor);this.#r=ps();this.#s=0;this.#u=0;this.#f=!1;this.#d=!1;this.#k=null;this.#_=null;this.#v=null;this.#m=null;this.#c=null;this.#g=null;this.#b=null;this.#P=null;this.#R=null;this.#w=null;this.#h=new Set;this.#C=null;this.#I=null;this.#l=()=>{this._browserFullscreen=this.#W()};this.#S=e=>{if(!this._overflowOpen)return;let s=this.renderRoot.querySelector(".overflow-wrap");(!s||!e.composedPath().includes(s))&&(this._overflowOpen=!1)};this.#L=()=>{this.#K(),this.#f=!1,this.#d=!1,this._toast=null};this.#ae=e=>{e.type==="pointerenter"?this.#f=!0:this.#d=!0,this.#o!==void 0&&(this.#K(),this.#u=Math.max(0,this.#s-Date.now()))};this.#U=e=>{e.type==="pointerleave"?this.#f=!1:e.currentTarget.contains(e.relatedTarget)||(this.#d=!1),this.#$()};this.#V=()=>{this.#L(),this.updateComplete.then(()=>this.#O())};this.#ye=()=>{this.#p({type:"set-notice",notice:null}),this.updateComplete.then(()=>this.#O())};this.#z=()=>{for(let e of this.renderRoot.querySelectorAll(wt)){let s=e.scrollHeight>e.clientHeight&&!nn(e);if(!s&&e.matches(":focus")){e.addEventListener("blur",this.#z,{once:!0});continue}let n=(o,i)=>s?e.setAttribute(o,i):e.removeAttribute(o);n("tabindex","0"),e.classList.contains("panel-top")&&(n("role","group"),n("aria-labelledby","workspace-title"))}};this.#X=e=>{if(!Z(this.state,{type:"open-workflow",workflow:"none"})){lt(this.state.workflow);return}this.#b=e.currentTarget,this.#w="reload",this.#p({type:"open-dialog",dialog:"discardDraft"})};new fs(this,{container:()=>this.renderRoot?.querySelector(".draw-tools")??null,items:"button"})}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_measuredNarrow:{state:!0},_sheetOffset:{state:!0},_overflowOpen:{state:!0},_helpOpen:{state:!0},_browserFullscreen:{state:!0},_sheetDetent:{state:!0},_polite:{state:!0},_alert:{state:!0},_toast:{state:!0}}}static{this.styles=Gs}#e(e,s,n){return $e(this.localize,e,s,n,this.dates)}#t;#n;#i;#a;#r;#o;#s;#u;#f;#d;#k;#_;#v;#m;#c;#g;#b;#P;#R;#w;#h;#C;#I;#F(){let e=this.renderRoot;return e instanceof ShadowRoot?e.fullscreenElement??document.fullscreenElement:document.fullscreenElement}#l;#W(){let e=this.renderRoot,s=e.querySelector(".app"),n=e instanceof ShadowRoot?e.fullscreenElement:null;if(n)return n===s;let o=document.fullscreenElement;for(let i=this;i;){if(i===o)return!0;let r=i.getRootNode();i=r instanceof ShadowRoot?r.host:null}return!1}#S;connectedCallback(){super.connectedCallback(),this.#_=new ResizeObserver(([e])=>{if(!e)return;let s=e.contentRect.width<1024||e.contentRect.height<480;s!==this._measuredNarrow&&(this._measuredNarrow=s)}),this.#_.observe(this),window.addEventListener("pointerdown",this.#S,!0),document.addEventListener("fullscreenchange",this.#l),this.#v=new ResizeObserver(([e])=>{if(!e)return;let s=Math.ceil(e.target.getBoundingClientRect().height);s!==this._sheetOffset&&(this._sheetOffset=s)}),this.#m=new ResizeObserver(()=>this.#z()),this.#x(),this.#c=bs(()=>this.#x())}#x(){let e=window.matchMedia("(forced-colors: active)").matches,s=ys(this.renderRoot,{accent:"var(--ms-accent)",danger:"var(--ms-danger)",label:"var(--ms-on-accent)",card:"var(--ms-surface-card)",sunken:"var(--ms-surface-sunken)"}),[n,o,i,r,l]=Object.values(s).map(gs),c=v=>e||!v||!i?[]:ws(v,i),d=(v,b,E=r)=>e||!v||!r||!E?void 0:_s(v,b,[r,E]),u=v=>v?vs(v,1):"",[p,h]=c(n),[f,y]=c(o);this.style.setProperty("--ms-resolved-accent-fill",u(p)),this.style.setProperty("--ms-resolved-on-accent-fill",u(h)),this.style.setProperty("--ms-resolved-danger-fill",u(f)),this.style.setProperty("--ms-resolved-on-danger-fill",u(y)),this.style.setProperty("--ms-resolved-indicator",u(d(n,3,l))),this.style.setProperty("--ms-resolved-danger-text",u(d(o,4.5)))}disconnectedCallback(){this.#L(),this.#_?.disconnect(),this.#_=null,this.#v?.disconnect(),this.#v=null,this.#m?.disconnect(),this.#m=null,this.#c?.(),this.#c=null,this.#g=null,window.removeEventListener("pointerdown",this.#S,!0),document.removeEventListener("fullscreenchange",this.#l),super.disconnectedCallback()}#y(e,s){if(this.#n.has(e)){this.updateComplete.then(()=>this.#y(e,s));return}this.#n.add(e);let n=this[e]===s;this[e]=n?"":s,this.updateComplete.then(()=>{this.#n.delete(e),n&&!this[e]&&this.#y(e,s)})}willUpdate(e){if(this.#k=this.shadowRoot?.activeElement??null,!e.has("state"))return;let s=gt(this.state).title;this.#t!==null&&s!==this.#t&&this.#y("_polite",gt(this.state,this.localize).title),this.#t=s;let n=this.state.notice,o=e.get("state");n!==o?.notice&&(!n&&o?.notice?.tone==="success"&&o.workflow!==this.state.workflow||(this.#L(),n&&(this._toast=n,this.#u=Tn[n.tone],this.#y(n.tone==="error"?"_alert":"_polite",this.#e(n.key,n.fallback,n.placeholders)),this.updateComplete.then(()=>{if(this.state.notice!==n)return;let i=this.renderRoot.querySelector("[data-notice-toast]");this.#f=!!i?.matches(":hover"),this.#d=!!i?.contains(this.shadowRoot?.activeElement??null),this.#$()}))))}#$(){!this._toast||this.#o!==void 0||this.#f||this.#d||(this.#s=Date.now()+this.#u,this.#o=setTimeout(this.#L,this.#u))}#K(){clearTimeout(this.#o),this.#o=void 0}#L;#ae;#U;#V;#ye;#E(e,s,n){return w`${I(An[e.tone])}<span class="notice-text">${this.#e(e.key,e.fallback,e.placeholders)}</span><button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${n}
      @click=${s}
    >${I(as)}</button>`}updated(e){let s=e,n=this.#k;this.#k=null,n&&(!n.isConnected||n.closest("[hidden]"))&&this.#O();let o=this.renderRoot.querySelector(".mobile-sheet");o!==this.#g&&(this.#v?.disconnect(),this.#g=o,o?this.#v?.observe(o):this._sheetOffset!==0&&(this._sheetOffset=0)),this.#m?.disconnect();for(let i of this.renderRoot.querySelectorAll(wt))for(let r of[i,...i.children])this.#m?.observe(r);if(s.has("_overflowOpen")&&this._overflowOpen&&this.updateComplete.then(()=>{this.renderRoot.querySelector("#map-options select, #map-options button")?.focus()}),s.has("_helpOpen")){if(this._helpOpen)this.updateComplete.then(()=>{this.renderRoot.querySelector(".help-dialog [data-dialog-initial-focus]")?.focus()});else if(s.get("_helpOpen")){let i=this.#R;this.#R=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>i?.focus({preventScroll:!0}))})}}if(e.has("state")){this.#Y();let i=e.get("state");if(i?.precisionOpen&&!this.state.precisionOpen&&this.#j()?.focus(),i?.fullMap&&!this.state.fullMap){let r=this.#P;this.#P=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??this.renderRoot.querySelector(".nav--menu")??(r?.isConnected?r:null))?.focus({preventScroll:!0})})})}if(i&&!i.fullMap&&this.state.fullMap&&this.updateComplete.then(()=>{let r=this.#P;requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??(r?.isConnected?r:null))?.focus({preventScroll:!0})})}),!i?.dialog&&this.state.dialog){let r=qn(this.shadowRoot||document);r?.hasAttribute("data-dialog-launcher")&&(this.#b=r),this.updateComplete.then(()=>{(this.renderRoot.querySelector(".dialog [data-dialog-initial-focus]")??this.renderRoot.querySelector(".dialog button"))?.focus()})}else if(i?.dialog&&!this.state.dialog){i.dialog==="discardDraft"&&(this.#w=null,this.#D());let r=this.#b?.isConnected&&this.#b.hasAttribute("data-dialog-launcher")?this.#b:this.#me(i.dialog);this.#b=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{r?.focus({preventScroll:!0});let l=!document.activeElement||document.activeElement===document.body;!this.shadowRoot?.activeElement&&l&&this.#O()})})}i?i.workflow!==this.state.workflow&&(this._sheetDetent=Zs[this.state.workflow],this.updateComplete.then(()=>this.#O())):this._sheetDetent=Zs[this.state.workflow]}}#z;#O(){[".panel-heading h2",".action-bar .ms-btn--primary",".workspace-toggle"].map(e=>this.renderRoot.querySelector(e)).find(en)?.focus({preventScroll:!0})}#j(){let e=this.renderRoot.querySelector(".draw-brush");return en(e)?e:this.renderRoot.querySelector(xe)?.shadowRoot?.querySelector(".draw-brush")??null}#p(e){if(Z(this.state,e)){this.#w=e,this.#p({type:"open-dialog",dialog:"discardDraft"});return}this.dispatchEvent(new CustomEvent(dt,{detail:e,bubbles:!0,composed:!0}))}#le(e){if(e.enabled){if(e.id==="return-live"){this.#p({type:"set-history",historyId:null});return}if(e.id==="clear-draft"){this.#p({type:"clear-draft"});return}this.#se(e.id)}}#G(e,s){let n={type:"open-workflow",workflow:e};s instanceof HTMLElement&&Z(this.state,n)&&(this.#b=s),this.#p(n)}#Y(){let e=this.#r,{coherence:s,workflow:n}=this.state;!e||n==="none"&&(s==="booting"||s==="verifying")||(this.#r=null,n==="none"&&this.#h.has(e)&&this.#G(e))}#X;#ce(e){if(this.#i.request(),e!=="draw")return this.#i.status;this.#a.request();let s=this.#i.status,n=this.#a.status;return s==="failed"||n==="failed"?"failed":s===n?s:"loading"}#B(){let e=this.#w;if(this.#w=null,e==="reload"){lt(this.state.workflow);return}e?.type==="select-plan"||e?.type==="select-area"?(this.#p({type:"patch-plan-draft",patch:{dirty:!1}}),this.#p({type:"patch-area-draft",patch:{dirty:!1}}),this.#p({type:"dismiss-top-layer"})):this.#p({type:"discard-draft"}),e&&e.type!=="dismiss-top-layer"&&queueMicrotask(()=>this.dispatchEvent(new CustomEvent(dt,{detail:e,bubbles:!0,composed:!0})))}#q(){this.#w=null,this.#te(),this.#D()}#D(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".floor-switcher");e&&(e.value=this.state.selection.floorId);let s=this.renderRoot.querySelector(".robot-switcher");s&&(s.value=this.state.selection.entryId??"")})}#te(){let e=this.state.dialog,s=e&&this.#b?.isConnected&&this.#b.hasAttribute("data-dialog-launcher")?this.#b:e?this.#me(e):null;this.#p({type:"dismiss-top-layer"}),s&&requestAnimationFrame(()=>s.focus({preventScroll:!0}))}#se(e){this.dispatchEvent(new CustomEvent(ks,{detail:typeof e=="string"?{id:e}:e,bubbles:!0,composed:!0}))}#ke(e){this.#p({type:"dismiss-top-layer"}),this.#se(e)}#Q(e){if(e.action==="discard"){this.#B();return}if(e.action==="delete-plan"||e.action==="delete-area"){this.#ke(e.action);return}let s=this.state.cadenceResetRequest;this.#p({type:"dismiss-top-layer"}),s&&this.#se({id:"reset-room-cadence",planId:s.planId,roomId:s.roomId,mode:s.mode})}#M(e){e!==this._sheetDetent&&(this._sheetDetent=e,this.#y("_polite",e==="peek"?this.#e("v4_workspace_height_peek","Cleaning panel, collapsed"):e==="half"?this.#e("v4_workspace_height_half","Cleaning panel, half height"):this.#e("v4_workspace_height_full","Cleaning panel, full height")))}#J(e,s=!1){let o=X.indexOf(this._sheetDetent)+e;s&&o>=X.length&&(o=0),o=Math.max(0,Math.min(X.length-1,o)),this.#M(X[o]??this._sheetDetent)}#ne(e){let s=this.renderRoot.querySelector(".workspace")?.clientHeight??e.parentElement?.clientHeight??e.offsetHeight,n=parseFloat(getComputedStyle(this).fontSize)||16,o=[".sheet-grip",".sheet-tools",".action-bar"].map(l=>e.querySelector(l)?.offsetHeight??0).reduce((l,c)=>l+c,0)+n*.75,i=Math.min(s*.92,s-n*9),r=Math.min(s*.48,n*26,i);return{peek:Math.min(o,r),half:r,full:i}}#Z(){return this.renderRoot.querySelector(".mobile-sheet")}#de(e,s){e.style.transform=s;let n=this.renderRoot.querySelector("[data-notice-toast]");n&&(n.style.transform=s)}#ue(e){let s=e.currentTarget;for(let n of e.composedPath()){if(n===s)return!1;if(n instanceof Element&&n.matches(Ln))return!0}return!1}#ge(e){if(e.pointerType==="mouse"&&e.button!==0||this.#ue(e))return;let s=this.#Z();!s||this.#C||(this.#C={pointerId:e.pointerId,startY:e.clientY,startHeight:s.offsetHeight,heights:this.#ne(s),samples:[{y:e.clientY,t:e.timeStamp}],moved:!1},e.currentTarget.setPointerCapture(e.pointerId),s.classList.add("dragging"))}#Re(e){let s=this.#C;if(!s||e.pointerId!==s.pointerId)return;let n=this.#Z();if(!n)return;let o=e.clientY-s.startY;for(!s.moved&&Math.abs(o)>On&&(s.moved=!0),s.samples.push({y:e.clientY,t:e.timeStamp});s.samples.length>2&&e.timeStamp-(s.samples[1]?.t??0)>$n;)s.samples.shift();if(!s.moved)return;let i=s.startHeight-s.heights.full,r=s.startHeight-s.heights.peek,l=Math.max(i,Math.min(r,o));this.#de(n,`translateY(${l}px)`)}#he(e){let s=this.#C;if(!s||e.pointerId!==s.pointerId)return;this.#C=null;let n=this.#Z();if(n&&(this.#de(n,""),n.classList.remove("dragging")),e.type==="pointercancel")return;if(!s.moved){this.#J(1,!0);return}let o=e.clientY-s.startY,i=X.indexOf(this._sheetDetent),r=s.samples[0],l=s.samples[s.samples.length-1],c=r&&l&&l!==r?(l.y-r.y)/Math.max(1,l.t-r.t):0;if(Math.abs(c)>In){let h=Math.max(0,Math.min(X.length-1,i+(c<0?1:-1)));this.#M(X[h]??this._sheetDetent);return}let d=s.startHeight-o,u=this._sheetDetent,p=Number.POSITIVE_INFINITY;for(let h of X){let f=Math.abs(s.heights[h]-d);f<p&&(p=f,u=h)}this.#M(u)}#T(e){for(let s of e.composedPath()){if(s===e.currentTarget)break;if(s instanceof HTMLElement&&s.scrollHeight>s.clientHeight&&/auto|scroll/u.test(getComputedStyle(s).overflowY))return s}return null}#A(e){if(e.pointerType==="mouse"||this.#ue(e))return;let s=this.#T(e);this.#I=s?.scrollTop?null:{pointerId:e.pointerId,startY:e.clientY,scroller:s,consumed:!1}}#H(e){let s=this.#I;if(!(!s||s.consumed||e.pointerId!==s.pointerId)){if(s.scroller?.scrollTop){this.#I=null;return}e.clientY-s.startY<Dn||(s.consumed=!0,this.#J(-1))}}#be(){this.#I=null}#oe(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}#Ee(e){this.#P=e.currentTarget,this.#p({type:this.state.fullMap?"exit-full-map":"enter-full-map"})}#ie(e){this._overflowOpen=!1,e&&this.updateComplete.then(()=>{this.renderRoot.querySelector(".overflow")?.focus()})}#Se(e){if(this.#ie(e==="fullscreen"),e==="support"){this.#G("support");return}let s=this.renderRoot.querySelector(".app");this.#F()?document.exitFullscreen():s?.requestFullscreen()}#re(){this.#p({type:"set-precision-open",value:!this.state.precisionOpen})}#pe(e){this.#R=e.currentTarget,this._helpOpen=!0}#we(e){let s=e;if(!ke(s.detail))return;if(Z(this.state,s.detail)){e.stopPropagation(),this.#p(s.detail);return}if(s.detail?.type!=="open-dialog")return;let n=s.composedPath().find(o=>o instanceof HTMLElement&&o.hasAttribute("data-dialog-launcher"));n instanceof HTMLElement&&(this.#b=n)}#me(e){return this.renderRoot.querySelector(Ze)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`)??null}#Ce(e){if(!ms(e)&&!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)&&e.key==="Escape"){if(e.preventDefault(),this._overflowOpen){this.#ie(!0);return}if(this._helpOpen){this._helpOpen=!1;return}if(this.state.dialog==="discardDraft"){this.#q();return}this.#p({type:"dismiss-top-layer"})}}#_e(e){if(e.key!=="Tab")return;let n=[...e.currentTarget.querySelectorAll(sn)],o=n[0],i=n.at(-1);if(!o||!i)return;let r=this.shadowRoot?.activeElement;e.shiftKey&&r===o?(e.preventDefault(),i.focus()):!e.shiftKey&&r===i&&(e.preventDefault(),o.focus())}#ee(){let e=this.renderRoot.querySelector(xe);(e?.shadowRoot?.querySelector(".map-root")??e)?.focus()}#Me(){this._sheetDetent==="peek"&&this.#Z()&&this.#M("half"),this.updateComplete.then(()=>this.#O())}#N(e,s,n){if(!("label"in e))return k;let o=e.labelKey?this.#e(e.labelKey,e.label,e.labelPlaceholders):e.label,i=!e.enabled&&e.reason?e.reasonKey?this.#e(e.reasonKey,e.reason,e.reasonPlaceholders):e.reason:null,r=e.id==="stop";return w`
      <button
        class=${`${s} ${e.kind==="danger"?"ms-btn--danger":""}`}
        type="button"
        aria-disabled=${e.enabled?k:"true"}
        aria-describedby=${i?n:k}
        aria-label=${r?this.#e("v4_stop_cleaning_label","Stop cleaning"):k}
        @click=${()=>this.#le(e)}
      >${o}</button>
      ${i?w`<p class="action-reason" id=${n}>${i}</p>`:k}
    `}#fe(e){let s=e.resources.plans.value?.rooms??e.resources.areas.value?.rooms??[];return hs(e.locale,e.selection.roomIds.map(n=>s.find(o=>o.roomId===n)?.name??n))}#Ae(e,s,n){let o=this.#fe(e),i=s?.enabled&&e.workflow==="rooms"&&s.id==="clean-rooms"?e.planDraft.returnToBase&&o?this.#e("v4_rooms_summary_dock","{rooms} \xB7 returns to the dock",{rooms:o}):o:"";return w`
      <div class="action-bar">
        ${i?w`<p class="action-summary">${i}</p>`:k}
        ${s?this.#N(s,"ms-btn ms-btn--block ms-btn--lg ms-btn--primary","primary-reason"):k}
        ${n?this.#N(n,"ms-btn ms-btn--block ms-btn--lg ms-btn--secondary","secondary-reason"):k}
      </div>
    `}#ve(e,s,n=k){return w`
      <div class="host-state">
        <h3>${e}</h3>
        <p>${s}</p>
        ${n}
      </div>
    `}#Pe(e,s=!1){return s||this.#h.add(e),()=>{s||this.#G(e)}}#xe(e,s,n,o,i=!1){return w`
      <button
        class="ms-row"
        type="button"
        aria-disabled=${i?"true":k}
        @click=${this.#Pe(n,i)}
      >
        <span class="ms-row__lead">${I(s)}</span>
        <span class="ms-row__body"><strong>${e}</strong>${o?w`<small>${o}</small>`:k}</span>
        <span class="ms-row__trail">${I(Ie)}</span>
      </button>
    `}#$e(e){let s=e.resources.history.value?.floors||[],n=s.length?s.map((o,i)=>({id:o.active?"current":o.id,label:`${o.label||(o.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:o.ordinal??i+1}))}${!o.active&&o.snapshots.length===0?` \xB7 ${this.#e("v4_floor_not_captured","No saved map for this floor yet")}`:""}`,disabled:!o.active&&o.snapshots.length===0})):[{id:e.selection.floorId,label:e.floor.displayName,disabled:!1}];return w`
      <select
        class="ms-select context-switcher floor-switcher"
        slot="floor"
        data-map-control
        name="map-floor"
        aria-label=${this.#e("v4_choose_floor","Choose floor")}
        ?disabled=${n.length<=1}
        .value=${e.selection.floorId}
        @change=${o=>this.#p({type:"set-floor",floorId:o.currentTarget.value})}
      >${n.map(o=>w`
        <option value=${o.id} ?selected=${o.id===e.selection.floorId} ?disabled=${o.disabled}>${o.label}</option>
      `)}</select>
    `}#Oe(e,s,n){let o=(g,C,_)=>this.#e(g,C,_);this.#h=new Set(["support"]);let i=()=>this.#xe(o("v4_map_history","Map history"),st,"history",o("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")),r=()=>this.#xe(o("v4_map_diagnostics","Map diagnostics"),ot,"support",o("v4_map_support_detail","Details to share with support")),{host:l}=e;if(!l.connected)return this.#ve(o("v4_reconnecting_title","Reconnecting to Home Assistant"),o("v4_reconnecting_body","Cleaning controls come back when Home Assistant reconnects."));if(!l.administrator)return this.#ve(o("v4_admin_title","Administrator access required"),o("v4_admin_body","Ask a Home Assistant administrator to open this map."));if(l.robotCount===0)return this.#ve(o("v4_no_robot_title","No robot set up"),o("v4_no_robot_body","Add the Matic (Unofficial) integration to see a map here."),w`<a class="ms-btn ms-btn--secondary" href="/config/integrations/integration/matic_robot">${o("v4_open_integration","Open integration")}</a>`);if(Re(e))return this.#ve(o("v4_selected_robot_unavailable","Selected robot unavailable"),o("v4_choose_another_robot","Choose another robot to open its map."));if(!l.robotConnected)return w`
        ${this.#ve(o("v4_robot_offline_title","Robot offline"),o("v4_robot_offline_body","Showing the last known map. Cleaning comes back when the robot reconnects."))}
        <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
        <div class="shelf">${i()}${r()}</div>
      `;if(tn(e))return w`
        <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
        <div class="shelf">
          ${i()}
          ${r()}
        </div>
      `;let c=e.coherence==="verifying"||e.coherence==="booting",d=e.resources.plans,u=d.value,p=u!==null&&u.rooms.length===0,h=u?.plans.length??0,f=d.status==="loading",y=d.status==="error",v=c||p,b=c?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):p?o("v4_no_rooms_reason","Can't clean rooms until you name them in the Matic app."):null,E=c?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):null,R=c?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):o("v4_areas_quick_detail","Draw or choose a custom area");return w`
      ${e.activity==="problem"?this.#ve(o("v4_attention_title","The robot needs attention"),o("v4_attention_body","The robot reported a problem. Check it in the Matic app, then start a new clean.")):n.recheck?w`
          <div class="host-state">
            <p>${o("v4_map_limited_body","Home Assistant can show this map but can't confirm it well enough to start cleaning.")}</p>
            <button
              class="ms-btn ms-btn--secondary"
              type="button"
              aria-disabled=${e.rechecking?"true":k}
              @click=${()=>{this.state.rechecking||this.#se("recheck-status")}}
            >${o("v4_retry","Try again")}</button>
          </div>
        `:w`
          <div class="quick-actions" role="group" aria-label=${o("v4_cleaning_choices","Cleaning choices")}>
            <button
              class="ms-row ms-row--card ms-row--featured"
              type="button"
              aria-disabled=${v?"true":k}
              @click=${this.#Pe("rooms",v)}
            >
              <span class="ms-row__lead">${I(re)}</span>
              <span class="ms-row__body">
                <strong>${o("v4_clean_rooms","Clean rooms")}</strong>
                <small>${b??o("v4_clean_rooms_hint","Choose rooms for this run")}</small>
              </span>
              <span class="ms-row__trail">${I(Ie)}</span>
            </button>
            <button
              class="ms-row ms-row--card"
              type="button"
              aria-disabled=${c?"true":k}
              @click=${this.#Pe("plans",c)}
            >
              <span class="ms-row__lead">${I(nt)}</span>
              <span class="ms-row__body">
                <strong>${f?o("v4_plans_loading","Checking saved plans"):y?o("v4_plans_unavailable","Plans unavailable"):h?o("v4_run_a_plan","Run a plan"):o("v4_create_plan","Create a plan")}</strong>
                <small>${E??(f?o("v4_plans_loading_hint","Reading plans for this floor"):y?o("v4_plans_unavailable_hint","Try again to load your plans."):h?h===1?o("v4_saved_routine","1 saved plan"):o("v4_saved_routines","{count} saved plans",{count:h}):o("v4_no_plans_hint","Save a plan to repeat a set of rooms"))}</small>
              </span>
              <span class="ms-row__trail">${I(Ie)}</span>
            </button>
          </div>
        `}
      <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
      <div class="shelf">
        ${this.#xe(o("v4_custom_areas","Clean custom area"),is,"draw",R,c)}
        ${i()}

      </div>
      ${s?w`
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
            @click=${this.#pe}
          >${o("v4_how_to_move","How to move the map")}</button>
        </div>
      `:k}
    `}#De(e,s,n){if(e.workflow==="none")return this.#Oe(e,s,n);let o=this.#ce(e.workflow);return o!=="ready"?s&&e.workflow==="draw"?k:ct(o,this.localize,this.#X):w`<${Js}
      .state=${e}
      .localize=${this.localize}
      .dates=${this.dates}
      .retry=${this.#X}
      @matic-workspace-intent=${this.#we}
    ></${Js}>`}#Te(e){return w`
      <div class="panel-top">
        <div class="panel-heading">
          ${e.workflow!=="none"?w`
            <button
              class="panel-back ms-btn ms-btn--secondary"
              type="button"
              aria-label=${e.workflow==="plan"?this.#e("v4_back_to_plans","Back to plans"):this.#e("v4_back_to_all_tasks","Back to all tasks")}
              data-dialog-launcher="discardDraft"
              @click=${s=>this.#G(e.workflow==="plan"?"plans":"none",s.currentTarget)}
            >${I(Te)}<span class="ms-btn__label">${e.workflow==="plan"?this.#e("v4_your_plans","Your plans"):this.#e("v4_all_tasks","All tasks")}</span></button>
          `:k}
          <h2 id="workspace-title" tabindex="-1">${bt(e,this.localize).title}</h2>
        </div>
        ${e.notice?w`<div class="notice" data-notice-slot data-tone=${e.notice.tone}>${this.#E(e.notice,this.#ye,this.#e("v4_close","Close"))}</div>`:k}
      </div>
    `}#Ie(e,s,n){return w`
      <p class="panel-description">${bt(e,this.localize).description}</p>
      ${this.#De(e,s,n)}
    `}#Le(e,s){let o=bt(e,this.localize).title;return e.workflow==="rooms"&&e.selection.roomIds.length&&(o=this.#e("v4_rooms_selected_names","{count} selected \xB7 {rooms}",{count:e.selection.roomIds.length,rooms:this.#fe(e)})),this._sheetDetent!=="peek"?s.detail?`${s.title} \xB7 ${s.detail}`:s.title:s.notable?`${s.title} \xB7 ${o}`:o}#qe(){let e=(s,n)=>this.#e(s,n);return w`
      <div class="dialog-backdrop" @click=${s=>{s.target===s.currentTarget&&(this._helpOpen=!1)}}>
        <section
          class="dialog help-dialog ms-surface ms-surface--overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="help-title"
          @keydown=${this.#_e}
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
    `}render(){let e=this.state,s=e.narrowHint||this._measuredNarrow,n=gt(e,this.localize),o=Re(e),i=Lt({...e,narrowHint:s}),r=qt(e),l=!s&&i.id==="stop"?i:!s&&r?.id==="stop"?r:null,c=l&&l===i?null:i,d=e.workflow==="draw"&&e.dataMode==="live"?{id:"clear-draft",label:"Clear",labelKey:"v4_clear_drawing",kind:"neutral",enabled:e.draw.circles.length>0||!!e.draw.outline?.points.length}:null,u=l&&l===r?null:r??d,p=e.fullMap&&(e.coherence==="verifying"||e.coherence==="booting"),h=e.fullMap||e.host.administrator&&e.host.robotCount>0&&e.map.available,f=e.cadenceResetRequest?e.resources.plans.value?.rooms.find(_=>_.roomId===e.cadenceResetRequest?.roomId):void 0,y=e.cadenceResetRequest?e.resources.plans.value?.plans.find(_=>_.id===e.cadenceResetRequest?.planId)?.rooms.find(_=>_.roomId===e.cadenceResetRequest?.roomId):void 0,v=e.workflow==="plan",b=e.dialog==="discardDraft"?{title:v?this.#e("v4_discard_plan","Discard plan changes?"):this.#e("v4_discard_area","Discard area changes?"),detail:v?this.#e("v4_discard_plan_detail","Your plan changes have not been saved. Keep editing or discard them."):this.#e("v4_discard_area_detail","Your area changes have not been saved. Keep editing or discard them."),cancelLabel:this.#e("v4_keep_area_editing","Keep editing"),confirmLabel:this.#e("v4_discard","Discard"),action:"discard"}:e.dialog===null?void 0:this.#i.value?.dialogCopy(e.dialog,this.localize,f?.name||e.cadenceResetRequest?.roomId||"room",y?.cadence?.scope==="shared",e.cadenceResetRequest?.mode,At(e)),E=s&&!e.fullMap?`--map-sheet-offset:${this._sheetOffset}px`:"--map-sheet-offset:0px",R=s&&e.workflow==="draw",g=e.precisionOpen&&e.workflow==="draw",C=this._toast&&(this._toast.tone==="success"||this._toast.tone==="error"||e.fullMap||s&&this._sheetDetent==="peek")?this._toast:null;return w`
      <div class=${`root ${s?"narrow":"wide"}`} @keydown=${this.#Ce}>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#ee}>${this.#e("v4_skip_to_map","Skip to the map")}</button>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#Me}>${this.#e("v4_skip_to_workspace","Skip to the panel")}</button>
        <div class="app" ?inert=${!!b||this._helpOpen}>
          <header class="app-bar">
            ${e.precisionOpen?k:w`
              <button
                class="nav nav--menu ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                title=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                @click=${this.#oe}
              >${I(ts)}</button>
            `}

            ${e.precisionOpen?w`
              <button
                class="nav ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_back","Back")}
                @click=${()=>this.#p({type:"dismiss-top-layer"})}
              >${I(Te)}</button>
            `:k}
            <h1 class="title">${this.#e("map_studio_title","Matic Map")}</h1>
            ${e.robots.length>1||o?w`
              <select
                class="ms-select context-switcher robot-switcher"
                name="matic-robot"
                aria-label=${this.#e("v4_choose_robot","Choose robot")}
                .value=${e.selection.entryId||""}
                @change=${_=>this.#p({type:"select-entry",entryId:_.currentTarget.value})}
              >${o?w`
                <option value=${e.selection.entryId||""} selected disabled>${this.#e("v4_selected_robot_unavailable","Selected robot unavailable")}</option>
              `:k}${e.robots.map(_=>w`
                <option value=${_.entryId} ?selected=${_.entryId===e.selection.entryId}>${_.label}</option>
              `)}</select>
            `:k}

            <span class="spacer"></span>
            ${h?w`
              <button
                class="workspace-toggle ms-btn ms-btn--icon"
                type="button"
                aria-label=${e.fullMap?this.#e("v4_show_workspace","Show cleaning panel"):this.#e("v4_hide_workspace","Hide cleaning panel")}
                aria-controls="map-workspace"
                aria-expanded=${String(!e.fullMap)}
                title=${e.fullMap?this.#e("v4_show_workspace","Show cleaning panel"):this.#e("v4_hide_workspace","Hide cleaning panel")}
                @click=${this.#Ee}
              >${I(ss)}</button>
            `:k}
            <div class="overflow-wrap">
              <button
                class="overflow ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_map_options","Map options")}
                aria-expanded=${String(this._overflowOpen)}
                aria-controls="map-options"
                @click=${()=>{this._overflowOpen=!this._overflowOpen}}
              >${I(es)}</button>
              ${this._overflowOpen?w`
                <div id="map-options" class="overflow-menu ms-surface ms-surface--overlay">
                  <label class="overflow-field ms-field">${this.#e("map_quality_label","Map detail")}
                    <select
                      aria-label=${this.#e("map_quality_label","Map detail")}
                      .value=${e.quality}
                      @change=${_=>this.#p({type:"set-quality",quality:_.currentTarget.value})}
                    >
                      <option value="auto">${this.#e("map_quality_auto","Auto detail")}</option>
                      <option value="efficient">${this.#e("map_quality_efficient","Efficient")}</option>
                      <option value="balanced">${this.#e("map_quality_balanced","Balanced")}</option>
                      <option value="maximum">${this.#e("map_quality_maximum","Maximum")}</option>
                    </select>
                  </label>
                  <button class="ms-row ms-row--menu" type="button" @click=${()=>this.#Se("support")}>${this.#e("v4_map_diagnostics","Map diagnostics")}</button>
                  <button class="ms-row ms-row--menu" type="button" @click=${()=>this.#Se("fullscreen")}>${this._browserFullscreen?this.#e("v4_leave_full_screen","Leave full screen"):this.#e("v4_full_screen","Full screen")}</button>
                </div>
              `:k}
            </div>
          </header>

          <main class=${`workspace ${e.fullMap?"full-map":""}`} style=${E}>
            <div class="canvas">
              <${Qs}
                class="map-canvas"
                style=${E}
                .state=${e}
                .localize=${this.localize}
                .dates=${this.dates}
                .outlineEditor=${this.#a.value}
                .narrow=${s}
              >${this.#$e(e)}
                ${s&&!e.fullMap&&this._sheetDetent==="full"?w`
                  <button
                    class="sheet-scrim"
                    slot="scrim"
                    data-map-control
                    type="button"
                    aria-label=${this.#e("v4_collapse_sheet","Collapse panel")}
                    @click=${()=>this.#M("peek")}
                  ></button>
                `:k}
              </${Qs}>
              ${!s&&g?w`
                <div class="precision-popover">
                  <${Ye} compact .state=${e} .localize=${this.localize}></${Ye}>
                </div>
              `:k}
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
              data-detent=${s?this._sheetDetent:k}
              data-workflow=${e.workflow}
              aria-label=${this.#e("v4_map_workspace","Cleaning panel")}
            >
              ${s?w`
                <div
                  class="sheet-grip"
                  @pointerdown=${this.#ge}
                  @pointermove=${this.#Re}
                  @pointerup=${this.#he}
                  @pointercancel=${this.#he}
                >
                  <span class="sheet-handle" role="presentation"></span>
                  ${e.workflow!=="none"&&this._sheetDetent==="peek"?w`
                    <button
                      class="sheet-back ms-btn ms-btn--icon ms-btn--sm"
                      type="button"
                      aria-label=${e.workflow==="plan"?this.#e("v4_back_to_plans","Back to plans"):this.#e("v4_back_to_all_tasks","Back to all tasks")}
                      title=${e.workflow==="plan"?this.#e("v4_back_to_plans","Back to plans"):this.#e("v4_back_to_all_tasks","Back to all tasks")}
                      data-dialog-launcher="discardDraft"
                      @click=${_=>this.#G(e.workflow==="plan"?"plans":"none",_.currentTarget)}
                    >${I(Te)}</button>
                  `:k}
                  <span class="sheet-status">${this.#Le(e,n)}</span>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_more","Expand panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="full"?"true":k}
                    @click=${()=>this.#J(1)}
                  >${I(ns)}</button>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_less","Collapse panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="peek"?"true":k}
                    @click=${()=>this.#J(-1)}
                  >${I(os)}</button>
                </div>
                ${R?w`
                  <div class="sheet-tools">
                    ${ct(this.#ce("draw"),this.localize,this.#X)}
                    ${us(e,{intent:_=>this.#p(_),openBrush:()=>this.#re(),t:(_,D,$)=>this.#e(_,D,$)},"grid")}
                    ${g?w`
                      <div class="precision-popover">
                        <${Ye} compact inline .state=${e} .localize=${this.localize}></${Ye}>
                      </div>
                    `:k}
                  </div>
                `:k}
                <div
                  class="sheet-panel"
                  id="sheet-panel"
                  @pointerdown=${this.#A}
                  @pointermove=${this.#H}
                  @pointerup=${this.#be}
                  @pointercancel=${this.#be}
                >
                  ${this.#Te(e)}
                  <div class="sheet-body" role="region" aria-labelledby="workspace-title">${this.#Ie(e,s,n)}</div>
                </div>
                ${this.#Ae(e,c,u)}
              `:w`
                <div class="status-strip">
                  <span class="status-icon" aria-hidden="true">${I(n.icon)}</span>
                  <span class="status-copy"><strong>${n.title}</strong><small>${n.detail}</small></span>
                  ${l?this.#N(l,"status-action ms-btn ms-btn--secondary","status-reason"):k}
                </div>
                <section class="workflow">
                  ${this.#Te(e)}
                  <div class="workflow-body" role="region" aria-labelledby="workspace-title">${this.#Ie(e,s,n)}</div>
                  ${this.#Ae(e,c,u)}
                </section>
              `}
            </aside>

            ${e.fullMap?w`
              <section
                class=${`full-map-hud ms-surface ms-surface--floating ${r?"has-secondary":""} ${!s&&(e.workflow==="draw"||e.workflow==="rooms"&&e.selection.roomIds.length>0)?"above-dock":""}`}
                aria-label=${this.#e("v4_robot_status_and_action","Robot status and action")}
              >
                <span class="hud-copy"><strong>${n.title}</strong><small>${n.detail}</small></span>
                ${p&&i.id!=="stop"?k:this.#N(i,"ms-btn ms-btn--lg ms-btn--primary","hud-reason")}
                ${r&&(!p||r.id==="stop")?this.#N(r,"ms-btn ms-btn--lg ms-btn--secondary","hud-secondary-reason"):k}
              </section>
            `:k}
          </main>
        </div>

        <div
          class="notice notice-toast"
          data-notice-toast
          role="region"
          aria-label=${this.#e("v4_notifications","Notifications")}
          data-tone=${C?.tone??k}
          style=${E}
          ?hidden=${!C}
          ?inert=${!!b||this._helpOpen}
          @pointerenter=${this.#ae}
          @focusin=${this.#ae}
          @pointerleave=${this.#U}
          @focusout=${this.#U}
        >${C?this.#E(C,this.#V,this.#e("v4_hide_notification","Hide notification")):k}</div>

        <div class="sr-only" aria-live="polite" aria-atomic="true">${this._polite}</div>
        <div class="sr-only" role="alert" aria-atomic="true">${this._alert}</div>

        ${this._helpOpen?this.#qe():k}

        ${b?w`
          <div class="dialog-backdrop">
            <section
              class="dialog ms-surface ms-surface--overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title"
              aria-describedby="dialog-detail"
              @keydown=${this.#_e}
            >
              <h2 id="dialog-title">${b.title}</h2>
              <div id="dialog-detail">
                <p>${b.detail}</p>
                ${b.consequence?w`<p>${b.consequence}</p>`:k}
              </div>
              <div class="dialog-actions">
                <button
                  class="ms-btn ms-btn--secondary"
                  type="button"
                  data-dialog-initial-focus
                  @click=${e.dialog==="discardDraft"?this.#q:this.#te}
                >${b.cancelLabel}</button>
                <button
                  class="discard ms-btn ms-btn--primary ms-btn--danger"
                  type="button"
                  @click=${()=>this.#Q(b)}
                >${b.confirmLabel}</button>
              </div>
            </section>
          </div>
        `:k}
      </div>
    `}};customElements.get(pe)||customElements.define(pe,_t);var on=ae(pe),ge=new WeakMap,Wn={},zn=3e4,kt=(a,t)=>{ge.get(a)===t&&ge.delete(a)},Rt=class extends Ce{constructor(){super(...arguments);this.narrow=!1;this._workspace=V();this.#e=new Oe;this.#t=new Tt(this._workspace);this.#n=null;this.#i=null;this.#a=null;this.#r=null;this.#o=null;this.#s=null}static{this.styles=[Me,Pe,Ee`
:host { display: block; block-size: 100%; }
`]}static{this.properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_workspace:{state:!0}}}#e;#t;#n;#i;#a;#r;#o;#s;#u(e=this.hass,s=this.panel){let n=this.#t.value.selection;return n.entrySource==="user"?this.#e.project(e,s,n.entryId):this.#e.project(e,s)}#f(){let e=this.hass,s=e?.loadBackendTranslation;if(!e||typeof s!="function")return;let n=e.connection??Wn,o=e.language??"";ge.get(n)!==o&&(ge.set(n,o),Promise.resolve().then(()=>s.call(e,"common","matic_robot")).catch(()=>{if(ge.get(n)===o){if(!this.isConnected){kt(n,o);return}this.#s&&clearTimeout(this.#s.timer),this.#s={owner:n,language:o,timer:setTimeout(()=>{this.#s=null,kt(n,o),this.#f()},zn)}}}))}shouldUpdate(e){if(this.#f(),!e.has("hass")||[...e.keys()].some(n=>n!=="hass"))return!0;let s=e.get("hass");return s?.connection!==this.hass?.connection||s?.localize!==this.hass?.localize?!0:this.#u()!==this.#n}connectedCallback(){super.connectedCallback(),this.#f(),this.#i=this.#t.subscribe(e=>{if(this._workspace=e,e.selection.entryId!==this.#n?.entryKey){let s=this.#u();s!==this.#n&&(this.#n=s,this.#r?.sync(s))}}),this.#d()}disconnectedCallback(){this.#s&&(clearTimeout(this.#s.timer),kt(this.#s.owner,this.#s.language),this.#s=null),this.#i?.(),this.#i=null,this.#k(),super.disconnectedCallback()}#d(){if(!(!this.isConnected||this.#r)&&(this.#n=this.#u(),this.#a=new qe(()=>this.hass),this.#r=new Ve(this.#t,this.#a,this.hass?.connection??null),this.#o=new je(this.#t),this.#o.start(),this.#n)){this.#r.sync(this.#n);let{host:e}=this.#n;e.connected&&e.administrator&&e.robotCount>0&&this.#r.refreshCatalog(this.#t.value.selection.floorId==="current")}}#k(){this.#o?.dispose(),this.#o=null,this.#r?.dispose(),this.#r=null,this.#a=null}willUpdate(e){if(e.has("hass")||e.has("panel")){let s=e.get("hass"),n=e.has("hass")&&s?.connection!==this.hass?.connection,o=this.#u(),i=o!==this.#n;i&&(this.#n=o),n?(this.#k(),this.#d()):(i||e.has("panel"))&&this.#r?.sync(o)}e.has("narrow")&&this.#t.value.narrowHint!==this.narrow&&this.#t.dispatch({type:"set-narrow-hint",value:this.narrow})}#_(e){if(!ke(e.detail))return;e.stopPropagation();let s=e.detail;if(s.type==="dismiss-top-layer"||s.type==="exit-full-map"){this.#o?.dismissTop()||this.#t.dispatch(s);return}if(s.type==="open-workflow"&&s.workflow!=="none"){this.#r?.openWorkflow(s.workflow);return}if(s.type==="set-floor"){this.#r?.selectFloor(s.floorId);return}if(s.type==="select-entry"){if(!this._workspace.robots.some(n=>n.entryId===s.entryId)||this.#e.project(this.hass,this.panel,s.entryId).entryKey!==s.entryId)return;this.#t.dispatch(s);return}if(s.type==="set-history"){this.#r?.selectHistory(s.historyId);return}if(s.type==="select-plan"){this.#r?.selectPlan(s.planId);return}if(s.type==="set-plan-enabled"){this.#r?.setPlanEnabled(s.enabled);return}if(s.type==="select-area"){this.#r?.selectArea(s.areaId),s.workflow==="areaReview"&&this.#r?.openWorkflow("areaReview");return}this.#t.dispatch(s)}#v(e){e.stopPropagation(),typeof e.detail?.id=="string"&&(e.detail.id==="reset-room-cadence"&&"planId"in e.detail&&"roomId"in e.detail&&"mode"in e.detail?this.#r?.executeAction(e.detail):this.#r?.executeAction(e.detail.id),this.dispatchEvent(new CustomEvent("matic-map-v4-action-requested",{detail:{id:e.detail.id},bubbles:!0,composed:!0})))}getWorkspaceSnapshot(){return this.#t.value}getRequestDiagnostics(){return Object.freeze({http:this.#a?.requestDiagnostics()??null,workspace:this.#r?.workspaceDiagnostics()??null})}render(){return w`
      <${on}
        .state=${this._workspace}
        .localize=${this.hass?.localize}
        .dates=${this.#n?.dates}
        @matic-workspace-intent=${this.#_}
        @matic-workspace-action=${this.#v}
      ></${on}>
    `}};customElements.get(et)||customElements.define(et,Rt);export{Oe as a,ae as b,w as c,Rt as d};
/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
