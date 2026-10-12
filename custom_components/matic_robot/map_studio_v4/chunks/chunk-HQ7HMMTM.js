import{A as lt,B as ps,C as ms,D as fs,E as vs,F as ys,G as gs,H as bs,I as ws,J as ct,K as _s,a as xe,b as Bt,c as Je,d as pe,e as Ze,f as Ht,g as et,h as Nt,i as Ft,j as oe,k as me,l as re,m as Kt,n as S,o as Ae,p as Ut,q as Vt,r as jt,s as Yt,t as Xt,u as Gt,v as Qt,w as ds,x as it,y as at,z as hs}from"./chunk-QATJR6I5.js";import{C as os,D as tt,E as st,F as nt,G as ot,H as rt,I as rs,J as j,K as is,L as as,M as ls,N as cs,O as T,a as Me,b as Pe,c as Jt,d as ie,e as Te,f as Zt,g as es,h as ts,i as Ie,j as ss,k as ns}from"./chunk-XHCXYMMG.js";import{C as Qe,D as Se,E as $t,H as Ot,I as Dt,J as Lt,N as Ee,O as qt,P as Wt,Q as zt,S as k,U as Ce,V as $e,W as us,c as Ct,h as M,j as ke,k as Z,n as V,o as Mt,p as Xe,q as Pt,r as xt,t as At,u as Tt,v as It,x as Re,z as Ge}from"./chunk-EQ4AWX4L.js";var rn=(i,t)=>{if(t?.recharge_and_resume===!0&&t?.charging===!0)return"recharging";switch(i){case"cleaning":return"cleaning";case"paused":return"paused";case"returning":return"returning";case"docked":return"docked";case"idle":return"idle";case"error":return"problem";default:return"unknown"}},an=i=>typeof i!="number"||!Number.isFinite(i)?null:Math.round(Math.max(0,Math.min(100,i))),ln=i=>{let t=i.attributes?.matic_entry_id;return typeof t=="string"&&t.length>0?t:null},cn=i=>String(i||"local-user").replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",ks=i=>{if(typeof i!="string")return"Robot";let t=i.trim();return t&&Array.from(t).length<=128&&!/[\u0000-\u001f\u007f]/u.test(t)?t:"Robot"},Oe=class{#e="";#t=null;project(t,e,s=null){let n=t?.states??{},o=e?.config?.entry_id,a=s||(typeof o=="string"?o:null),l=null,c=null,d=a,u=new Map;for(let[$,L]of Object.entries(n)){let z=ln(L);z&&$.startsWith("vacuum.")&&(u.set(z,{entryId:z,label:ks(L.attributes?.friendly_name)}),(a?z===a:!l)&&(l=L,c=$,d=z))}let m={connected:t?.connected!==!1,administrator:t?.user?.is_admin===!0,robotConnected:l!==null&&l.state!=="unavailable"&&l.state!=="unknown",robotCount:u.size},h=l?rn(l.state,l.attributes):"unknown",f=an(l?.attributes?.battery_level),b=t?.selectedLanguage||t?.language||"en",v=t?.locale?.language||b,g=t?.locale?.time_zone==="server"?t.config?.time_zone:void 0,E=this.#t?.dates,R=E?.language===v&&E.timeZone===g?E:{language:v,timeZone:g},y=cn(t?.user?.id),C=ks(l?.attributes?.friendly_name),_=[...u.values()].sort(($,L)=>$.label.localeCompare(L.label,b,{sensitivity:"base"})),D=[m.connected,m.administrator,m.robotConnected,m.robotCount,h,f??"none",b,v,g??"browser",y,c??"none",d??"none",C,_.map($=>`${$.entryId}:${$.label}`).join(",")].join("|");return D===this.#e&&this.#t?this.#t:(this.#e=D,this.#t={host:m,activity:h,batteryPercent:f,language:b,dates:R,userKey:y,vacuumEntityId:c,entryKey:d,robotLabel:C,robots:_},this.#t)}};var Ss=Symbol.for(""),dn=i=>{if(i?.r===Ss)return i?._$litStatic$},ae=i=>({_$litStatic$:i,r:Ss});var Rs=new Map,dt=i=>(t,...e)=>{let s=e.length,n,o,r=[],a=[],l,c=0,d=!1;for(;c<s;){for(l=t[c];c<s&&(o=e[c],(n=dn(o))!==void 0);)l+=n+t[++c],d=!0;c!==s&&a.push(o),r.push(l),c++}if(c===s&&r.push(t[s]),d){let u=r.join("$$lit$$");(t=Rs.get(u))===void 0&&(r.raw=r,Rs.set(u,t=r)),e=a}return i(t,...e)},w=dt(qt),Nn=dt(Wt),Fn=dt(zt);var un=1024*1024,Es=i=>{let t=s=>{let n=i.sceneHeaderBytes,o=i.scenePointStride,r=i.sceneMaxPoints,a=i.sceneMaxBytes,l=()=>{throw new Error("invalid-scene")};(!(s instanceof ArrayBuffer)||s.byteLength<n||s.byteLength>a)&&l();let c=new DataView(s),d=new Uint8Array(s,0,8),u=String.fromCharCode(...d),m=c.getUint16(8,!0),h=c.getUint16(10,!0),f=c.getUint32(12,!0),b=c.getUint32(16,!0),v=c.getUint32(20,!0),g=b+v,E=n+f;(u!=="MATIC3D\0"||m!==1||h!==o||f>1048576||g<1||g>r||E+g*h!==s.byteLength)&&l();let R;try{R=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(new Uint8Array(s,n,f)))}catch{l()}(!R||typeof R!="object"||Array.isArray(R))&&l();let y=R,C=y.meters_per_cell,_=y.origin_cells,D=y.span_cells;(typeof C!="number"||!Number.isFinite(C)||C<.001||C>.1||!Array.isArray(_)||_.length!==2||!_.every(O=>typeof O=="number"&&Number.isFinite(O))||!Array.isArray(D)||D.length!==2||!D.every(O=>typeof O=="number"&&Number.isFinite(O)&&O>=1&&O<=65536))&&l();let L=(Array.isArray(y.rooms)?y.rooms.slice(0,128):[]).flatMap((O,we)=>{if(!O||typeof O!="object"||Array.isArray(O))return[];let H=O,G=typeof H.name=="string"?H.name.trim():"";if(!G||Array.from(G).length>128||/[\u0000-\u001f\u007f]/u.test(G))return[];if(!Array.isArray(H.boundary)||H.boundary.length<3||H.boundary.length>8192)return[];let _e=H.boundary.flatMap(U=>{if(!Array.isArray(U)||U.length!==2)return[];let[Q,ne]=U;return typeof Q=="number"&&Number.isFinite(Q)&&typeof ne=="number"&&Number.isFinite(ne)?[[Q,ne]]:[]}),ee=H.center;if(_e.length<3||!Array.isArray(ee)||ee.length!==2)return[];let[te,se]=ee;return typeof te!="number"||!Number.isFinite(te)||typeof se!="number"||!Number.isFinite(se)?[]:[{id:`scene-room-${we+1}`,name:G,boundary:_e,center:[te,se]}]}),z=typeof y.sample_step=="number"&&Number.isInteger(y.sample_step)?Math.max(1,Math.min(r,y.sample_step)):1,he=_,be=D;return{buffer:s,pointOffset:E,floorCount:b,surfaceCount:v,total:g,metadata:{metersPerCell:C,origin:[he[0],he[1]],span:[be[0],be[1]],sampleStep:z,rooms:L}}};return{parseTransfer:t,decodeDeltaTransfer:async(s,n,o)=>{let r=(A="invalid-scene-delta")=>{throw new Error(A)},a=()=>{if(o?.aborted)throw new DOMException("Aborted","AbortError")};(!(s instanceof ArrayBuffer)||s.byteLength<i.deltaHeaderBytes||s.byteLength>i.deltaHeaderBytes+i.deltaMaxBytes||!(n.buffer instanceof ArrayBuffer)||n.buffer.byteLength<i.sceneHeaderBytes||n.buffer.byteLength>i.deltaMaxBytes||!Number.isSafeInteger(n.revision)||n.revision<0)&&r("invalid-scene-delta-size");let l=new DataView(s),c=String.fromCharCode(...new Uint8Array(s,0,8)),d=l.getUint16(8,!0),u=l.getUint16(10,!0),m=l.getBigUint64(12,!0),h=l.getBigUint64(20,!0),f=l.getUint32(28,!0),b=l.getUint32(32,!0),v=Number(m),g=Number(h);(c!=="MATICDLT"||d!==1||u!==1||!Number.isSafeInteger(v)||!Number.isSafeInteger(g)||v!==n.revision||g<=n.revision||f<i.sceneHeaderBytes||f>i.deltaMaxBytes||b<1||b>i.deltaMaxBytes||b+i.deltaHeaderBytes!==s.byteLength)&&r(),typeof DecompressionStream!="function"&&r("scene-delta-decompression-unavailable"),a();let E=new Uint8Array(s,i.deltaHeaderBytes,b),R=Math.max(n.buffer.byteLength,f);R>i.deltaMaxBytes&&r("invalid-scene-delta-size");let y=new Uint8Array(R),_=new Blob([E]).stream().pipeThrough(new DecompressionStream("deflate")).getReader(),D=0,$=null;try{for($=()=>{_.cancel().catch(()=>{})},o?.addEventListener("abort",$,{once:!0});;){a();let{done:A,value:J}=await _.read();if(A)break;(!(J instanceof Uint8Array)||D+J.byteLength>R)&&r(),y.set(J,D),D+=J.byteLength}}catch(A){if(await _.cancel().catch(()=>{}),o?.aborted||A instanceof DOMException&&A.name==="AbortError")throw new DOMException("Aborted","AbortError");if(A instanceof Error&&A.message==="invalid-scene-delta")throw A;r()}finally{$&&o?.removeEventListener("abort",$),_.releaseLock()}a(),D!==R&&r();let L=new Uint8Array(n.buffer),z=new DataView(y.buffer,y.byteOffset,y.byteLength),he=Math.min(i.sceneHeaderBytes,L.byteLength);for(let A=0;A<he;A+=1)y[A]=(y[A]??0)^(L[A]??0);let be=z.getUint32(12,!0),O=z.getUint32(16,!0),we=z.getUint32(20,!0),H=i.sceneHeaderBytes+be,G=O+we,_e=H===n.pointOffset&&O===n.floorCount&&we===n.surfaceCount,ee=H+G*i.scenePointStride,te=_e&&ee===f&&G<=i.sceneMaxPoints,se=[],U=-1,Q=!1,ne=()=>{Q&&U>=0&&se.push(U),Q=!1};for(let A=he;A<L.byteLength;A+=i.xorChunkBytes){a();let J=Math.min(L.byteLength,A+i.xorChunkBytes);for(let N=A;N<J;N+=1){let Rt=L[N]??0,St=(y[N]??0)^Rt;if(y[N]=St,!te||N<n.pointOffset||N>=ee)continue;let Et=Math.floor((N-n.pointOffset)/i.dirtyBlockBytes);Et!==U&&(ne(),U=Et),St!==Rt&&(Q=!0)}J<L.byteLength&&await new Promise(N=>globalThis.setTimeout(N,0))}ne(),a();let on=f===y.byteLength?y.buffer:y.slice(0,f).buffer;return{parsed:t(on),revision:g,...te?{deltaHint:{baseRevision:v,blockBytes:i.dirtyBlockBytes,dirtyBlocks:se}}:{}}}}},Cs=Object.freeze({deltaHeaderBytes:me,deltaMaxBytes:re,sceneHeaderBytes:et,sceneMaxBytes:oe,sceneMaxPoints:Ft,scenePointStride:Nt,dirtyBlockBytes:Kt,xorChunkBytes:un}),Ms=Es(Cs),hn=i=>{try{return Ms.parseTransfer(i)}catch{throw new S("invalid-scene")}},pn=()=>`
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
`,De=class{#e=null;#t=null;#n=!1;#o=!1;#a=0;#i=null;#r=null;#s=null;constructor(){if(!(typeof Worker!="function"||typeof URL?.createObjectURL!="function"))try{this.#t=URL.createObjectURL(new Blob([pn()],{type:"text/javascript"})),this.#f()}catch{this.#e=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}}async parse(t,e){if(this.#u(e),t.byteLength>oe||t.byteLength<et)throw new S("invalid-scene");let s=await this.#d({kind:"parse",buffer:t},e,async n=>(await new Promise(o=>globalThis.setTimeout(o,0)),this.#u(n),{id:0,ok:!0,parsed:hn(t)}));if(!s.parsed)throw new S("invalid-scene");return s.parsed}async decodeDelta(t,e,s){if(this.#u(s),t.byteLength>me+re||e.buffer.byteLength>re)throw new S("invalid-scene-delta-size");let n={buffer:e.buffer,revision:e.revision,pointOffset:e.pointOffset,floorCount:e.floorCount,surfaceCount:e.surfaceCount},o;try{o=await this.#d({kind:"delta",payload:t},s,async r=>(await new Promise(a=>globalThis.setTimeout(a,0)),this.#u(r),Ms.decodeDeltaTransfer(t,n,r).then(a=>({id:0,ok:!0,...a}))),n)}catch(r){throw r instanceof S?r:s?.aborted||r instanceof DOMException&&r.name==="AbortError"?new DOMException("Aborted","AbortError"):r instanceof Error&&(r.message.startsWith("invalid-scene")||r.message==="scene-delta-decompression-unavailable")?new S(r.message):new S("invalid-scene-delta")}if(!o.parsed||o.revision===void 0)throw new S("invalid-scene-delta");return{parsed:o.parsed,revision:o.revision,...o.deltaHint?{deltaHint:o.deltaHint}:{}}}#u(t){if(this.#o)throw new S("scene-parser-disposed");if(t?.aborted)throw new DOMException("Aborted","AbortError")}#f(){if(!(!this.#t||this.#n||this.#o))try{let t=new Worker(this.#t);t.onmessage=e=>{let s=this.#i;this.#e!==t||!s||s.worker!==t||e.data.id!==s.id||(e.data.ok?this.#v(s,e.data):this.#v(s,void 0,new S(e.data.problem||"invalid-scene")))},t.onerror=()=>this.#c(t),t.onmessageerror=()=>this.#c(t),this.#e=t}catch{this.#e=null,this.#n=!0}}async#d(t,e,s,n){return this.#u(e),new Promise((o,r)=>{let a,l=()=>e?.removeEventListener("abort",a.abort),c=(d,u)=>{a.settled||(a.settled=!0,l(),u!==void 0?r(u):d?o(d):r(new S("invalid-scene")))};a={id:++this.#a,message:t,...e?{signal:e}:{},fallback:s,...n?{base:n}:{},settle:c,abort:()=>this.#_(a),settled:!1,worker:null},e?.addEventListener("abort",a.abort,{once:!0}),e?.aborted||this.#o?c(void 0,e?.aborted?new DOMException("Aborted","AbortError"):new S("scene-parser-disposed")):this.#i?this.#r?c(void 0,new S("scene-parser-busy")):this.#r=a:(this.#i=a,this.#k(a))})}#k(t){if(this.#i!==t)return;if(this.#o){this.#v(t,void 0,new S("scene-parser-disposed"));return}if(t.signal?.aborted){this.#v(t,void 0,new DOMException("Aborted","AbortError"));return}!this.#e&&!this.#n&&this.#f();let e=this.#e;if(e){t.worker=e;try{let n,o;if(t.message.kind==="parse")n={id:t.id,kind:t.message.kind,buffer:t.message.buffer},o=[t.message.buffer];else{if(!t.base)throw new S("invalid-scene-delta");let r={...t.base,buffer:t.base.buffer.slice(0)};n={id:t.id,kind:t.message.kind,payload:t.message.payload,base:r},o=[t.message.payload,r.buffer]}e.postMessage(n,o)}catch{this.#c(e)}return}let s=new AbortController;this.#s=s,Promise.resolve().then(()=>t.fallback(s.signal)).then(n=>this.#v(t,n),n=>this.#v(t,void 0,n))}#_(t){let e=new DOMException("Aborted","AbortError");if(this.#r===t){this.#r=null,t.settle(void 0,e);return}this.#i===t&&(t.worker?(this.#g(),this.#v(t,void 0,e)):this.#s?.abort())}#v(t,e,s){if(this.#i!==t){t.settle(void 0,new S("scene-parser-disposed"));return}let n=t.signal?.aborted?new DOMException("Aborted","AbortError"):s;t.settle(e,n),this.#i=null,this.#s=null,t.worker=null,this.#o||this.#m()}#m(){if(this.#o||this.#i||!this.#r)return;let t=this.#r;if(this.#r=null,t.signal?.aborted){t.settle(void 0,new DOMException("Aborted","AbortError")),this.#m();return}this.#i=t,this.#k(t)}#c(t){if(this.#e!==t)return;this.#n=!0,this.#g();let e=this.#i;e?.worker===t?this.#v(e,void 0,new S("scene-worker-failed")):this.#m()}#g(){this.#e?.terminate(),this.#e=null}dispose(){if(this.#o)return;this.#o=!0;let t=this.#r;this.#r=null,t?.settle(void 0,new S("scene-parser-disposed"));let e=this.#i;this.#g(),this.#s?.abort(),this.#s=null,e&&(e.worker=null,e.settle(void 0,new S("scene-parser-disposed"))),this.#i=null,this.#t&&URL.revokeObjectURL(this.#t),this.#t=null}};var ut=["catalog","scene","sceneDelta","pose","history","plans","areas","areaSave","areaDelete"];var ht=()=>({requests:0,completed:0,failed:0,aborted:0,timedOut:0,totalDurationMs:0,maxDurationMs:0}),Ps=i=>Math.min(1e9,i+1),xs=i=>Number.isFinite(i)?Math.min(1e12,Math.max(0,i)):0,le=class{#e=ht();#t=!1;record(t,e){if(this.#t)return;let s=Math.round(xs(e)*100)/100;this.#e.requests=Ps(this.#e.requests),this.#e[t]=Ps(this.#e[t]),this.#e.totalDurationMs=xs(this.#e.totalDurationMs+s),this.#e.maxDurationMs=Math.max(this.#e.maxDurationMs,s)}snapshot(){return Object.freeze({...this.#e})}reset(){this.#t||Object.assign(this.#e,ht())}dispose(){this.#t=!0,Object.assign(this.#e,ht())}},Le=class{#e=Object.fromEntries(ut.map(t=>[t,new le]));#t=!1;record(t,e,s){this.#t||this.#e[t].record(e,s)}snapshot(){let t=Object.fromEntries(ut.map(e=>[e,this.#e[e].snapshot()]));return Object.freeze(t)}dispose(){if(!this.#t){this.#t=!0;for(let t of ut)this.#e[t].dispose()}}};var B={catalog:1e4,scene:6e4,delta:35e3,pose:1e4,history:15e3,workflow:15e3,mutation:2e4,roomPreview:15e3},mn=2,fe=new WeakMap,P=class extends Error{constructor(t,e=null){super(t),this.name="BackendError",this.code=t,this.status=e}},As=(i,t)=>{let e=i.headers.get("X-Matic-Revision");if(e===null)return t;let s=Number(e);if(!Number.isSafeInteger(s)||s<0)throw new S("invalid-scene-revision");return s},Ts=(i,t)=>{let e=i.headers.get("X-Matic-Floor-Coherent");if(e===null)return t;if(e==="1")return!0;if(e==="0")return!1;throw new S("invalid-scene-floor-header")},qe=class{#e;#t=new De;#n=new WeakMap;#o=new Set;#a=new Le;#i=!1;constructor(t){this.#e=t}requestDiagnostics(){return this.#a.snapshot()}async#r(t,e,s=Number.POSITIVE_INFINITY,n="invalid-response-size"){let o=t.body?.getReader();if(!o)return new ArrayBuffer(0);let r=()=>{o.cancel().catch(()=>{})};e.addEventListener("abort",r,{once:!0});try{if(e.aborted)throw r(),new DOMException("Aborted","AbortError");let a=[],l=0;for(;;){let u=await o.read();if(e.aborted)throw new DOMException("Aborted","AbortError");if(u.done)break;if(l+u.value.byteLength>s)throw o.cancel().catch(()=>{}),new S(n);a.push(u.value),l+=u.value.byteLength}let c=new Uint8Array(l),d=0;for(let u of a)c.set(u,d),d+=u.byteLength;return c.buffer}finally{e.removeEventListener("abort",r),o.releaseLock()}}async#s(t,e,s,n,o,r){if(!Qt(e))throw new P("invalid-private-path");if(o?.aborted)throw new DOMException("Aborted","AbortError");let a=performance.now(),l="failed",c=new AbortController,d=()=>{},u=new Promise((b,v)=>{d=v}),m=()=>{c.abort(),d(new DOMException("Aborted","AbortError"))};o?.addEventListener("abort",m,{once:!0});let h=!1,f=window.setTimeout(()=>{h=!0,m()},n);try{let b=this.#e(),v=new Headers(s.headers),g={...s,cache:"no-store",credentials:"same-origin",headers:Object.fromEntries(v.entries()),signal:c.signal},E=async()=>{let y;if(typeof b?.fetchWithAuth=="function")y=await b.fetchWithAuth(e,g);else{let C=b?.auth?.accessToken||b?.auth?.data?.access_token;C&&v.set("Authorization",`Bearer ${C}`);let _=typeof b?.hassUrl=="function"?b.hassUrl(e):e;y=await fetch(_,{...g,headers:v})}try{if(c.signal.aborted)throw new DOMException("Aborted","AbortError");return await r(y,c.signal)}finally{y.body&&!y.body.locked&&y.body.cancel().catch(()=>{})}},R=await Promise.race([E(),u]);return l="completed",R}catch(b){throw h&&!o?.aborted?(l="timedOut",new P("request-timeout")):c.signal.aborted?(l="aborted",new DOMException("Aborted","AbortError")):b}finally{window.clearTimeout(f),o?.removeEventListener("abort",m),this.#a.record(t,l,performance.now()-a)}}async#u(t,e,s,n,o={}){return this.#s(t,e,{...o,headers:{Accept:"application/json",...o.headers||{}}},s,n,async(r,a)=>{if(!r.ok){let l=r.headers.get("X-Matic-Plans-Conflict");throw new P(l==="map-rechecking"?"map-rechecking":"request-failed",r.status)}try{return JSON.parse(new TextDecoder().decode(await this.#r(r,a)))}catch{throw new S("invalid-json-response")}})}async catalog(t){return Ae(await this.#u("catalog",Ht,B.catalog,t))}async scene(t,e,s,n,o,r){let a=new Headers({Accept:"application/vnd.matic.slam-scene"});return n==="live"&&a.set("X-Matic-Prefer-Cached","1"),r&&a.set("If-None-Match",r),this.#s("scene",t,{headers:a},B.scene,o,async(l,c)=>{let d=As(l,e),u=Ts(l,s);if(l.status===304)return{scene:null,floorCoherent:u,revision:d,notModified:!0};if(!l.ok)throw new P("scene-request-failed",l.status);if(l.headers.get("Content-Type")?.split(";",1)[0]!=="application/vnd.matic.slam-scene")throw new S("invalid-scene-content-type");return{scene:{...await this.#t.parse(await this.#r(l,c,oe,"invalid-scene-size"),c),revision:d,etag:l.headers.get("ETag"),source:n},floorCoherent:u,revision:d,notModified:!1}})}async sceneDelta(t,e,s,n){let o=t.includes("?")?"&":"?";return this.#s("sceneDelta",`${t}${o}since=${encodeURIComponent(e.revision)}`,{headers:{Accept:"application/vnd.matic.slam-delta, application/vnd.matic.slam-scene"}},B.delta,n,async(r,a)=>{let l=As(r,e.revision),c=Ts(r,s);if(r.status===204){if(l!==e.revision)throw new S("invalid-scene-delta-revision");return{scene:null,floorCoherent:c,revision:l,notModified:!0}}if(!r.ok)throw new P("delta-request-failed",r.status);if(l<=e.revision)throw new S("invalid-scene-delta-revision");let d=r.headers.get("Content-Type")?.split(";",1)[0];if(d!=="application/vnd.matic.slam-delta"&&d!=="application/vnd.matic.slam-scene")throw new S("invalid-scene-delta-content-type");let u=d==="application/vnd.matic.slam-delta",m=u?me+re:oe,h=Number(r.headers.get("Content-Length"));if(Number.isFinite(h)&&h>m)throw new S(u?"invalid-scene-delta-size":"invalid-scene-size");let f=await this.#r(r,a,m,u?"invalid-scene-delta-size":"invalid-scene-size");if(u){let v=Number(r.headers.get("X-Matic-Base-Revision"));if(!Number.isSafeInteger(v)||v!==e.revision)throw new S("invalid-scene-delta-base");let g=await this.#t.decodeDelta(f,e,a);if(g.revision!==l)throw new S("invalid-scene-delta-revision");return{scene:{...g.parsed,revision:l,etag:r.headers.get("ETag"),source:"live",...g.deltaHint?{deltaHint:g.deltaHint}:{}},floorCoherent:c,revision:l,notModified:!1}}return{scene:{...await this.#t.parse(f,a),revision:l,etag:r.headers.get("ETag"),source:"live"},floorCoherent:c,revision:l,notModified:!1}})}async pose(t,e){return Gt(await this.#u("pose",t,B.pose,e))}async history(t,e){return Ut(await this.#u("history",t,B.history,e))}async plans(t,e){return Xt(await this.#u("plans",t,B.workflow,e))}async areas(t,e){return jt(await this.#u("areas",t,B.workflow,e))}async previewRoomSequence(t,e,s,n){if(!t||t.length>255||e.length<1||e.length>100)throw new S("invalid-room-sequence-preview-request");if(n?.aborted)throw new DOMException("Aborted","AbortError");let o=this.#e()?.connection;if(!o?.sendMessagePromise)throw new P("preview-unavailable");let r=null,a=()=>{},l=new Promise((g,E)=>{a=E}),c=this.#n.get(o),d,u=new Promise(g=>{d=g});this.#n.set(o,u);let m=!1,h=()=>{m||(m=!0,d(),this.#n.get(o)===u&&this.#n.delete(o))},f=!1,b=()=>{a(new DOMException("Aborted","AbortError")),f&&(h(),r!==null&&window.clearTimeout(r),r=null)};n?.addEventListener("abort",b,{once:!0});let v=new Promise((g,E)=>{r=window.setTimeout(()=>{r=null,E(new P("preview-timeout"))},B.roomPreview)});v.catch(()=>{f&&h()});try{if(c&&(await Promise.race([c,l,v]),n?.aborted))throw new DOMException("Aborted","AbortError");let g=fe.get(o)??0;if(g>=mn)throw new P("preview-unavailable");let E=o.sendMessagePromise({type:"call_service",domain:"matic_robot",service:"preview_room_sequence",target:{entity_id:t},service_data:{rooms:e.map(_=>({room:_.room,cleaning_mode:_.cleaning_mode,coverage_setting:_.coverage_setting})),use_room_schedule:!0,override_room_schedule:s},return_response:!0});fe.set(o,g+1),f=!0;let R=!1,y=()=>{if(!R){R=!0;let _=(fe.get(o)??1)-1;_===0?fe.delete(o):fe.set(o,_)}h(),r!==null&&window.clearTimeout(r),r=null};E.then(y,y);let C=await Promise.race([E,l,v]);if(n?.aborted)throw new DOMException("Aborted","AbortError");if(!C||typeof C!="object"||Array.isArray(C)||!("response"in C))throw new S("invalid-room-sequence-preview-envelope");return Vt(C.response)}finally{f||(c?c.then(h,h):h(),r!==null&&window.clearTimeout(r),r=null),n?.removeEventListener("abort",b)}}async saveArea(t,e,s){let n=await this.#u("areaSave",t,B.mutation,s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e.areaId?{area_id:e.areaId}:{},name:e.name,circles:e.circles,...e.outline?.closed?{outline:e.outline.points}:{},cleaning_mode:e.cleaningMode,coverage_setting:e.coverageSetting})});if(!n||typeof n!="object"||typeof n.id!="string")throw new S("invalid-area-save-response");return n.id}async deleteArea(t,e,s){await this.#s("areaDelete",`${t}?area_id=${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json"}},B.mutation,s,async n=>{if(!n.ok)throw new P("area-delete-failed",n.status)})}async service(t,e,s,n,o={}){let r=this.#e();if(this.#i||typeof r?.callService!="function")throw new P("service-unavailable");let a=null,l=null;try{let c=o.returnResponse?r.callService(t,e,s,{entity_id:n},!0,!0):r.callService(t,e,s,{entity_id:n});return!o.returnResponse&&!o.acknowledgementTimeout?await c:await Promise.race([c,new Promise((d,u)=>{l=()=>{a!==null&&window.clearTimeout(a),a=null,u(new DOMException("Aborted","AbortError"))},this.#o.add(l),a=window.setTimeout(()=>u(new P("mutation-timeout")),B.mutation)})])}finally{a!==null&&window.clearTimeout(a),l&&this.#o.delete(l)}}dispose(){if(!this.#i){this.#i=!0,this.#a.dispose();for(let t of this.#o)t();this.#o.clear(),this.#t.dispose()}}};var $s=()=>({version:4,view:"top",appearance:"photo",labels:!0,quality:"auto",cameras:{}}),ve=(i,t,e)=>Math.max(t,Math.min(e,i)),Os=i=>i.replaceAll(/[^a-zA-Z0-9_-]/g,"").slice(0,128)||"local-user",pt=(i,t=4)=>`matic-map-studio:v${t}:${Os(i)}`,fn=i=>{if(!i||typeof i!="object")return null;let t=i;return["yaw","pitch","zoom","targetX","targetZ"].every(s=>typeof t[s]=="number"&&Number.isFinite(t[s]))?{yaw:ve(t.yaw,-Math.PI,Math.PI),pitch:ve(t.pitch,.18,Math.PI/2-.018),zoom:ve(t.zoom,.01,100),targetX:ve(t.targetX,-1e4,1e4),targetZ:ve(t.targetZ,-1e4,1e4)}:null},Is=i=>{let t=$s();if(!i||typeof i!="object")return t;let e=i,s=e.view==="three"||e.view==="top"||e.view==="rooms"?e.view:t.view,n=s==="rooms"?"top":s,o=e.quality==="auto"||e.quality==="efficient"||e.quality==="balanced"||e.quality==="maximum"?e.quality:t.quality,r=e.cameras&&typeof e.cameras=="object"?e.cameras:{},a={};for(let l of["three","top"]){let c=fn(r[l]);c&&(a[l]=c)}return{version:4,view:n,appearance:e.appearance==="rooms"||e.appearance==="photo"?e.appearance:t.appearance,labels:typeof e.labels=="boolean"?e.labels:t.labels,quality:o,cameras:a}},We=class{#e="local-user";#t=null;#n=null;load(t){this.#o(),this.#e=Os(t);try{let e=window.localStorage.getItem(pt(this.#e));if(e)return Is(JSON.parse(e));for(let s of[3,2]){let n=window.localStorage.getItem(pt(this.#e,s));if(n)return Is(JSON.parse(n))}}catch{}return $s()}schedule(t){this.#t!==null&&window.clearTimeout(this.#t),this.#n={key:pt(this.#e),value:t},this.#t=window.setTimeout(()=>this.#o(),250)}#o(){this.#t!==null&&window.clearTimeout(this.#t),this.#t=null;let t=this.#n;if(this.#n=null,!!t)try{window.localStorage.setItem(t.key,JSON.stringify(t.value))}catch{}}dispose(){this.#o()}};var ft=1,ce=Number.MAX_SAFE_INTEGER,zs=Number.MAX_SAFE_INTEGER,Ds=64,vn=1e12,mt=4,Ls=16*1024,yn=250,gn=4e3,ze=3e4;function q(i){return i!==null&&typeof i=="object"&&!Array.isArray(i)?i:null}function Y(i,t){return typeof i=="number"&&Number.isSafeInteger(i)&&i>=0&&i<=t}function Bs(i){let t=q(i);if(!t)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,zs))return null;e[s]=n}return e}function bn(i){let t=q(i);if(!t||Object.keys(t).length>128)return null;let e={};for(let[s,n]of Object.entries(t)){if(s.length===0||s.length>128||!Y(n,zs))return null;e[s]=n}return e}function Hs(i){return typeof i=="string"&&i.length>0&&i.length<=256?i:Y(i,ce)?String(i):null}function wn(i){let t=q(i),e=Hs(t?.epoch);if(!t||t.schema!==ft||e===null)return null;let s=bn(t.capabilities),n=Bs(t.revisions);return!s||!n||!Y(t.sequence,ce)||!Y(t.coherence_generation,ce)||t.coherence_generation===0?null:{schema:t.schema,capabilities:s,epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:n}}function qs(i,t){let e=q(i),s=wn(e?.snapshot??i);if(!s)return null;let n=q(e?.snapshot??i);if(!n||!("payload"in n))return null;let o=n.entry_id,r=q(n.identity),a=q(n.status),l=q(n.payload),c=a?a.reason===null?null:Ns(a.reason):null,d=l?.available,u=null;if(l?.entry!==void 0&&l.entry!==null){if((()=>{try{return JSON.stringify(l.entry).length}catch{return Ls+1}})()>Ls)return null;try{u=Ae({entries:[l.entry]})[0]??null}catch{return null}}let m=a?.state;return typeof o!="string"||o.length===0||o.length>128||t!==void 0&&o!==t||!r||r.entry_id!==o||r.floor_mission_id!==null&&!Y(r.floor_mission_id,ce)||typeof r.floor_verified!="boolean"||r.floor_verified!==(r.floor_mission_id!==null)||!a||m!=="ready"&&m!=="stale"&&m!=="unavailable"||a.reason!==null&&c===null||typeof a.retryable!="boolean"||typeof d!="boolean"||u!==null&&u.entryId!==o||m==="ready"&&(c!==null||a.retryable||!d)||(m==="stale"||m==="unavailable")&&(c===null||d)||c==="authorization"&&a.retryable?null:{...s,entry_id:o,identity:{entry_id:o,floor_mission_id:r.floor_mission_id,floor_verified:r.floor_verified},status:{state:m,reason:c,retryable:a.retryable},payload:{available:d,entry:u}}}function Ws(i){let t=q(i),e=Hs(t?.epoch),s=Bs(t?.revisions),n=t?.resources;return e===null||!s||!Y(t?.sequence,ce)||!Y(t?.coherence_generation,ce)||t.coherence_generation===0||!Array.isArray(n)||n.length>128||!n.every(o=>typeof o=="string"&&o.length<=128)?null:{epoch:e,sequence:t.sequence,coherence_generation:t.coherence_generation,revisions:s,resources:n}}var Be=["gap","overflow","reconnect","invalid_message","server_request","restart","entry_removed","authorization","snapshot_required"];function Ns(i){return typeof i=="string"&&Be.includes(i)?i:null}function _n(i){let t=q(i);return t?.name==="AbortError"?"aborted":t?.name==="TimeoutError"?"timedOut":"failed"}function kn(){return Object.fromEntries(Be.map(i=>[i,new le]))}var He=class{#e;#t;#n;#o=null;#a=!1;#i=!1;#r=!1;#s=!1;#u=!1;#f=!1;#d=0;#k=!1;#_=!1;#v=!1;#m=!1;#c=null;#g=null;#b=0;#P=!1;#R=null;#w=-1;#h=new Map;#C=!1;#I=!1;#F=null;#l=[];#W=new le;#S=kn();#x=null;#y=null;#$=null;constructor(t,e){this.#e=t,this.#t=e,this.#n=Math.max(1,Math.min(Ds,e.maxPendingInvalidations??Ds))}async start(){if(!(this.#a||this.#I)){this.#I=!0;try{await this.#j(!1)}catch(t){this.#ee(t),this.#E("reconnect")}}}notifyReconnect(){(this.#s||this.#f)&&(this.#B(),this.#X("aborted"),this.#d+=1),this.#b=0,this.#k=!1,this.#s=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.requestResync("reconnect"),this.#r&&this.#z(0,!0)}requestResync(t="server_request"){this.#E(t,!0)}diagnostics(){let t=Object.fromEntries(Be.map(s=>[s,this.#S[s].snapshot()])),e=this.#y!==null&&this.#$!==null?Object.freeze({reason:this.#y,durationMs:Math.round(Math.min(vn,Math.max(0,performance.now()-this.#$))*100)/100}):null;return Object.freeze({snapshotAttempts:this.#W.snapshot(),recoveryEpisodes:Object.freeze(t),activeRecovery:e})}dispose(){if(!this.#a){this.#a=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#r=!1,this.#o?.(),this.#o=null,this.#h.clear(),this.#l=[],this.#x=null,this.#y=null,this.#$=null,this.#W.dispose();for(let t of Be)this.#S[t].dispose()}}#K(t){if(this.#a)return;let e=q(t),s=q(e?.event)??e,n=s?.type;if(n==="resync"){let r=Ns(s?.reason);if(!r){this.#E("invalid_message");return}if(r==="entry_removed"){this.#t.onEvent({type:"resync",reason:r}),this.dispose();return}this.#E(r);return}if(this.#s){if(n==="invalidate"){let r=Ws(s?.invalidation??s);r?this.#V(r):(this.#l=[],this.#P=!0)}return}let o=n==="snapshot"?qs(s?.snapshot??s,this.#t.entryId):n==="invalidate"?Ws(s?.invalidation??s):null;if(!o){this.#E("invalid_message");return}if(n==="snapshot"){let r=o;if(this.#r)return;if(this.#R!==null&&r.epoch!==this.#R){this.#E("restart");return}this.#L(r);return}this.#U(o)}#L(t){this.#R===t.epoch&&t.sequence<this.#w||(this.#R=t.epoch,this.#w=t.sequence,this.#h.clear(),this.#t.onEvent({type:"snapshot",snapshot:t}))}#ae(t){let e=this.#l;if(this.#l=[],this.#L(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(o=>o.epoch===t.epoch&&o.sequence>=s),this.#E("gap");return}this.#U(n),s+=1}}#U(t){if(this.#r){this.#V(t);return}if(this.#R===null){this.#V(t);return}if(this.#R!==t.epoch){this.#V(t),this.#E("reconnect");return}if(!(t.sequence<=this.#w)){if(t.sequence!==this.#w+1){this.#V(t),this.#E("gap");return}this.#w=t.sequence;for(let e of t.resources)this.#h.set(e,t);if(this.#h.size>this.#n){this.#h.clear(),this.#E("overflow");return}this.#C||(this.#C=!0,queueMicrotask(()=>this.#ye()))}}#V(t){this.#l.length>=this.#n?(this.#l=[],this.#P=!0,this.#E("overflow")):this.#l.push(t)}#ye(){if(this.#C=!1,this.#a||this.#s||this.#h.size===0){this.#s&&this.#h.clear();return}let t=[...this.#h.values()];this.#h.clear();let e=t.reduce((n,o)=>!n||o.sequence>n.sequence?o:n,null);if(!e)return;let s=[...new Set(t.flatMap(n=>n.resources))];this.#t.onEvent({type:"invalidation",invalidation:{...e,resources:s}})}#E(t,e=!1){if(!this.#a){if(t==="authorization"){this.#q(),this.#t.onEvent({type:"resync",reason:t});return}if(!this.#s&&(this.#Y(t),this.#i||(this.#i=!0,this.#t.onEvent({type:"resync",reason:t}),queueMicrotask(()=>{this.#i=!1})),t!=="entry_removed")){let s=e&&!this.#k;if(s&&(this.#k=!0),s&&this.#c!==null&&(window.clearTimeout(this.#c),this.#c=null),this.#v){if(this.#m){s&&this.#z(0,!0);return}this.#m=!0,this.#O(s);return}if(e&&this.#r){s&&(this.#_=!0);return}let n=this.#b>=mt?ze:0;this.#z(s?0:n,s)}}}#z(t,e=!1){if(!this.#a){if(this.#c!==null){if(!e)return;window.clearTimeout(this.#c),this.#c=null}if(this.#r){this.#g=e?t:Math.max(this.#g??0,t);return}this.#c=window.setTimeout(()=>{this.#c=null,this.#j(!0)},t)}}#O(t=!1){let e=this.#b>=mt?ze:Math.min(yn*2**this.#b,gn);this.#b<mt&&(this.#b+=1),this.#z(t?0:e,t)}async#j(t,e=!1){if(this.#a||this.#r)return;t&&this.#Y(e?"authorization":"snapshot_required");let s=this.#d;this.#r=!0,this.#f=e;try{if(t&&await this.#p(),this.#a||this.#s&&!e||s!==this.#d)return;let n={startedAt:performance.now(),generation:s};this.#x=n;let o="completed",r;try{r=await this.#e.sendMessagePromise({type:"matic_robot/workspace_snapshot",version:ft,entry_id:this.#t.entryId})}catch(c){throw o=_n(c),c}finally{this.#ce(n,o)}if(this.#a||this.#s&&!e||s!==this.#d)return;let a=qs(r,this.#t.entryId);if(!a)throw new Error("invalid-workspace-snapshot");if(a.status.reason==="authorization"){this.#q(),this.#t.onEvent({type:"snapshot",snapshot:a});return}if(a.status.state!=="ready"&&a.status.retryable)throw new Error("workspace-snapshot-retryable");e&&(this.#s=!1,this.#u=!1,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null),this.#r=!1,this.#v=!0,this.#m=!1;try{t?this.#le(a):this.#ae(a)}finally{this.#v=!1}let l=this.#m||this.#P;this.#m?this.#_&&(this.#_=!1,this.#z(0,!0)):(this.#b=0,this.#k=!1,this.#_=!1),!t&&!this.#a&&await this.#p(),this.#P&&(this.#P=!1,this.#E("overflow")),t&&a.status.state==="ready"&&!l&&!this.#a&&s===this.#d&&this.#X("completed")}catch(n){if(this.#a||this.#s&&!e||s!==this.#d)return;if(this.#ee(n),this.#G(n))this.#q(),this.#t.onEvent({type:"resync",reason:"authorization"});else if(!e){t||this.#Y("reconnect");let o=this.#_;this.#_=!1,this.#O(o)}}finally{this.#r=!1,this.#f=!1,this.#u?(this.#u=!1,this.#D(0)):e&&this.#s&&this.#D(ze);let n=this.#g;this.#g=null,n!==null&&this.#z(n)}}async#p(){if(this.#a||this.#o)return;if(this.#F)return this.#F;let t=(async()=>{let e=await this.#e.subscribeMessage(s=>this.#K(s),{type:"matic_robot/workspace_subscribe",version:ft,entry_id:this.#t.entryId});this.#a?e():this.#o=e})();this.#F=t;try{await t}finally{this.#F===t&&(this.#F=null)}}#le(t){let e=this.#l;if(this.#l=[],this.#R===t.epoch&&t.sequence<this.#w){this.#l=e,this.#E("snapshot_required");return}if(this.#L(t),this.#a)return;let s=t.sequence+1;for(let n of e)if(n.epoch===t.epoch&&!(n.sequence<=t.sequence)&&!(n.sequence<s)){if(n.sequence!==s){this.#l=e.filter(o=>o.sequence>=s),this.#E("gap");return}this.#U(n),s+=1}}#G(t){let e=q(t),s=e?.code,n=e?.status??e?.statusCode;return s==="unauthorized"||s==="not_authorized"||s==="auth_invalid"||n===401||n===403}#Y(t){this.#y!==null||this.#a||(this.#y=t,this.#$=performance.now())}#X(t){let e=this.#y,s=this.#$;this.#y=null,this.#$=null,!(e===null||s===null||this.#a)&&this.#S[e].record(t,performance.now()-s)}#ce(t,e){this.#x!==t||this.#a||t.generation!==this.#d||(this.#x=null,this.#W.record(e,performance.now()-t.startedAt))}#B(){let t=this.#x;t!==null&&(this.#x=null,!this.#a&&t.generation===this.#d&&this.#W.record("aborted",performance.now()-t.startedAt))}#q(){this.#B(),this.#X("failed"),this.#d+=1,this.#s||(this.#s=!0,this.#c!==null&&window.clearTimeout(this.#c),this.#c=null,this.#u=!1),this.#h.clear(),this.#l=[],this.#P=!1,this.#g=null,this.#b=0,this.#k=!1,this.#_=!1,this.#f||this.#D(ze)}#D(t){this.#a||this.#c!==null||this.#u||(this.#c=window.setTimeout(()=>{if(this.#c=null,!this.#a){if(this.#r){this.#u=!0;return}this.#j(!0,!0)}},t))}#ee(t){this.#t.onError?.(t instanceof Error?t:new Error("Workspace transport failed"))}};var Ne=class{#e;#t;#n=document.visibilityState!=="hidden";#o=!1;#a=!1;#i=!1;constructor({onSuspend:t,onResume:e}){this.#e=t,this.#t=e}get active(){return this.#n}start(){this.#o||this.#a||(this.#o=!0,window.addEventListener("pagehide",this.#r),window.addEventListener("pageshow",this.#s),document.addEventListener("visibilitychange",this.#u),document.visibilityState==="hidden"&&(this.#n?this.#d(!1):this.#e()))}dispose(){this.#a||(this.#a=!0,this.#o&&(window.removeEventListener("pagehide",this.#r),window.removeEventListener("pageshow",this.#s),document.removeEventListener("visibilitychange",this.#u)))}#r=()=>{this.#i=!0,this.#d(!1)};#s=t=>{if(this.#i=!1,t.persisted){document.visibilityState==="hidden"?this.#d(!1):(this.#d(!1),this.#d(!0));return}this.#f()};#u=()=>{this.#f()};#f(){if(this.#i||document.visibilityState==="hidden"){this.#d(!1);return}this.#d(!0)}#d(t){this.#n===t||this.#a||(this.#n=t,t?this.#t():this.#e())}};var p=(i,t,e=null)=>({status:i,value:t,problem:e}),ye=i=>i.status==="loading"?p("idle",i.value):i,W=i=>i instanceof DOMException&&i.name==="AbortError",Rn={notice:M,parseSavedPlanId:Yt,BackendError:P,isAbort:W,canEditCoordinates:Ge,initialWorkspaceState:V},K=(i,t)=>i instanceof P||i&&typeof i=="object"&&"code"in i&&typeof i.code=="string"?i.code:t,I={stopUnconfirmed:M("error","v4_notice_stop_unconfirmed","Home Assistant can't confirm the robot stopped, so press Stop again if it's still moving."),actionUnconfirmed:M("error","v4_notice_action_unconfirmed","Home Assistant can't confirm that command, so check the robot before trying again."),mapChanged:M("info","v4_notice_map_changed","The map changed, so choose what to clean again."),statusRefreshed:M("info","v4_notice_status_refreshed","Status refreshed, so check the robot before trying again."),planSaveFailed:M("error","v4_notice_plan_save_failed","Home Assistant can't confirm the plan was saved, so check your plans, then try again."),planDeleteFailed:M("error","v4_notice_plan_delete_failed","The plan wasn't deleted; try again."),planPreviewMissing:M("warning","v4_notice_plan_preview_missing","The next-run preview isn't ready; reload your plans, then try again."),planPreviewRefreshFailed:M("warning","v4_notice_plan_preview_refresh_failed","The next-run preview didn't refresh; check the plan, then try again."),planPreviewNone:M("warning","v4_notice_plan_preview_none","This plan has no next-run preview; review its rooms and schedules."),planPreviewChanged:M("info","v4_notice_plan_preview_changed","The next run changed; check it before you run the plan."),roomPreviewBlocked:M("warning","v4_notice_room_preview_blocked","A room can't use these settings, so check the note above the rooms."),roomPreviewChanged:M("info","v4_notice_room_preview_changed","The room settings changed, so check them and start again."),roomPreviewFailed:M("warning","v4_notice_room_preview_failed","Home Assistant couldn't check the room settings, so try starting again."),areaRemoved:M("warning","v4_notice_area_removed","This saved area was removed elsewhere. Your edits are kept as a new draft; saving will create a new area."),areaSaveFailed:M("error","v4_notice_area_save_failed","Home Assistant can't confirm the area was saved, so try again."),areaDeleteFailed:M("error","v4_notice_area_delete_failed","Home Assistant can't confirm the area was deleted, so try again."),resetMopFailed:M("error","v4_notice_reset_mop_failed","Mopping progress wasn't reset; try again."),resetVacuumFailed:M("error","v4_notice_reset_vacuum_failed","Vacuum rotation progress wasn't reset; try again.")},Sn=i=>M("warning","v4_notice_saved_map","Showing the saved map from {date} without the robot's position.",{date:{date:i}}),Fs={coverage_identity_unavailable:M("error","v4_notice_coverage_task_unknown","Home Assistant can't confirm the current clean, so check the robot first."),coverage_activity_unavailable:M("error","v4_notice_coverage_activity_unknown","Home Assistant can't confirm whether the robot is cleaning, so check it first."),coverage_native_session_active:M("error","v4_notice_coverage_robot_busy","The robot is already cleaning, so wait for it to finish."),coverage_identity_changed:M("error","v4_notice_coverage_task_changed","The clean changed while starting, so check the robot first.")},En=i=>{let{translation_domain:t,translation_key:e}=i??{};return t==="matic_robot"&&typeof e=="string"&&Object.hasOwn(Fs,e)?Fs[e]??null:null},de=i=>[i.selectedFloorOrdinal??"none",i.mapFloorOrdinal??"none",i.mapFloorCoherent?"coherent":"transition"].join(":"),ue=i=>[i.mapFloorOrdinal??"none",i.mapSessionVerified?"verified":"unverified",i.mapSessionKey??"no-session"].join(":"),F=i=>[i.entryId,i.selectedFloorOrdinal??"none",i.mapFloorOrdinal??"none"].join("|"),x=i=>[i.entryId,de(i),ue(i)].join("|"),vt=i=>[x(i),i.mapRevision].join("|"),Fe=i=>i.runnerLocked||i.stopSettlePending||i.activePlan||i.nativeReconciliationPending||i.nativeSessionActive===!0,Ke=(i,t)=>i.entryKey===t.entryKey&&i.generation===t.generation&&i.floorKey===t.floorKey&&i.missionKey===t.missionKey,Cn=1e3,Mn=5e3,Ks=["rooms","plans","plan","draw","areaReview"],Us=["plan-mutation","area-mutation"],Vs=i=>JSON.stringify({...i,previewToken:void 0}),Ue=(i,t)=>i.label?i.label:i.active?"Current floor":`Saved floor ${i.ordinal??t}`,Ve=class{#e;#t;#n;#o;#a=new We;#i=null;#r=new Map;#s=null;#u=null;#f=null;#d=null;#k=0;#_=!1;#v=!1;#m=!1;#c=!1;#g=null;#b=Promise.resolve();#P=!1;#R=!1;#w="";#h=null;#C=0;#I=null;#F="";#l=!1;#W=!0;#S=null;#x=null;#y=null;#$=null;#K="";#L=!1;#ae=null;#U;#V;workspaceDiagnostics(){return this.#S?.diagnostics()??null}constructor(t,e,s=null,n){this.#e=t,this.#t=new It(t.value.generation),this.#n=e,this.#U=s,this.#V=n,this.#o=new Ne({onSuspend:()=>this.#ye(),onResume:()=>{this.#E()}}),this.#e.patch({pageActive:this.#o.active}),this.#$=t.subscribe(o=>{this.#z(o),this.#le()}),this.#o.start()}#ye(){this.#B(!1,Us),this.#Q(),this.#H(Us),this.#m=!1,this.#c=!1,this.#g=null,this.#R=!1,this.#fe();let t=this.#e.value;this.#e.patch({resources:{...t.resources,catalog:ye(t.resources.catalog),scene:ye(t.resources.scene),history:ye(t.resources.history),plans:ye(t.resources.plans),areas:ye(t.resources.areas),pose:p("idle",null)}})}async#E(){if(this.#l||!this.#o.active)return;this.#e.patch({pageActive:!0});let t=this.#s;if(this.#l||!this.#o.active||!t?.host.connected||!t.host.administrator||!t.host.robotConnected||t.host.robotCount===0)return;let e=this.#e.value;this.#ke(),this.#Y(t),await this.refreshCatalog(!0,!0);let s=this.#e.value,n=s.resources.entry;if(this.#l||!this.#o.active||e.dataMode!=="history"||s.generation!==e.generation||s.dataMode!=="history"||s.selection.entryId!==e.selection.entryId||s.selection.floorId!==e.selection.floorId||s.selection.historyId!==e.selection.historyId||s.resources.catalog.status!=="ready"||!n||n.entryId!==s.selection.entryId)return;let o=s.resources.history.value?.floors.find(u=>u.id===s.selection.floorId),r=o?.snapshots.find(u=>u.id===s.selection.historyId);if(!o)return;let a=this.#t.begin(n.entryId,o.id,r?.id??o.id,r?.revision??0);if(this.#e.patch({generation:a.generation}),await this.#re(n,a),!this.#t.accepts(a)||!this.#o.active||this.#e.value.resources.history.status!=="ready")return;let l=this.#e.value,c=l.resources.history.value?.floors.find(u=>u.id===o.id),d=c?.snapshots.find(u=>u.id===r?.id);!c||r&&!d||(d&&d.revision!==a.revision&&(a=this.#t.begin(n.entryId,o.id,d.id,d.revision)),this.#e.patch({generation:a.generation,coherence:"current"}),d&&(!l.resources.scene.value||d.revision!==r?.revision)&&await this.#we(d,a))}#z(t){if(!t.owner)return;let e={version:4,view:t.view,appearance:t.appearance,labels:t.labelsVisible,quality:t.quality,cameras:t.cameras},s=this.#i;this.#i=e,!(!s||s.view===e.view&&s.appearance===e.appearance&&s.labels===e.labels&&s.quality===e.quality&&s.cameras===e.cameras)&&this.#a.schedule(e)}#O(t){let e=Mt(t),s=t.resources.entry,n=this.#s?.vacuumEntityId;if(!e||!s||!n||!t.selection.entryId||t.workflow!=="rooms"||t.dataMode!=="live"||t.floor.readOnly||t.coherence!=="current"||!t.host.connected||!t.host.administrator||!t.host.robotConnected||t.command!=="idle"||t.resources.plans.status!=="ready")return null;let o=t.selection.roomIds.map(r=>{let a=t.selection.roomSettings.find(l=>l.roomId===r);return a?{room:r,cleaning_mode:a.cleaningMode,coverage_setting:a.coverageSetting}:null});return o.some(r=>r===null)?null:{key:e,generation:t.generation,retryRevision:t.manualRoomPreviewRetry,floorKey:de(s),missionKey:ue(s),entryId:t.selection.entryId,entityId:n,rooms:o,overrideRoomSchedule:!t.selection.useRoomSchedule}}#j(t){return JSON.stringify([t.key,t.generation,t.retryRevision,t.floorKey,t.missionKey,t.entryId,t.entityId])}#p(t){let e=this.#O(this.#e.value);return!this.#l&&e!==null&&this.#j(e)===this.#j(t)}#le(){if(this.#l||!this.#s)return;let t=this.#e.value,e=this.#O(t);if(!e){this.#r.get("room-preview")?.abort(),this.#r.delete("room-preview"),this.#K="",(t.manualRoomPreview.status!=="idle"||t.manualRoomPreview.value!==null)&&this.#e.patch({manualRoomPreview:p("idle",null)});return}let s=this.#j(e),n=Xe(t);if(n&&n.key===e.key&&n.generation===e.generation&&n.floorKey===e.floorKey&&n.missionKey===e.missionKey&&n.preview.entryId===e.entryId){this.#K=s;return}if(this.#K===s)return;this.#r.get("room-preview")?.abort(),this.#K=s;let o=this.#T("room-preview");this.#e.patch({manualRoomPreview:p("loading",null)}),this.#G(e,o)}async#G(t,e){try{let s=await this.#n.previewRoomSequence(t.entityId,t.rooms,t.overrideRoomSchedule,e.signal);return!this.#p(t)||e.signal.aborted||s.entryId!==t.entryId?null:(this.#e.patch({manualRoomPreview:p("ready",{key:t.key,generation:t.generation,floorKey:t.floorKey,missionKey:t.missionKey,preview:s})}),s)}catch(s){return W(s)||e.signal.aborted||!this.#p(t)||this.#e.patch({manualRoomPreview:p("error",null,K(s,"preview-unavailable"))}),null}finally{this.#A("room-preview",e)}}sync(t){if(this.#l)return;let e=this.#S,s=this.#s?.host.robotConnected??null,n=this.#s?.host.administrator===!1&&t.host.administrator,o=this.#s!==null&&!this.#s.host.robotConnected&&t.host.robotConnected,r=this.#e.value.owner,a=r!==null&&(r.entryKey!==t.entryKey||r.userKey!==t.userKey);a&&(this.#ne("context-changed",t.entryKey),this.#_&&(this.#m=!0,this.#c=!1,this.#g=null));let l=this.#W;this.#W=t.host.connected,this.#s=t,this.#Y(t),o&&e&&e===this.#S&&e.notifyReconnect();let c=t.userKey!==this.#F?this.#a.load(t.userKey):null;if(c&&(this.#F=t.userKey,this.#i=c),this.#e.patch({owner:{userKey:t.userKey,entryKey:t.entryKey},host:t.host,activity:t.activity,batteryPercent:t.batteryPercent,robotLabel:t.robotLabel,robots:t.robots,locale:t.language,selection:{...this.#e.value.selection,entryId:t.entryKey},...c?{view:c.view,appearance:c.appearance,labelsVisible:c.labels,quality:c.quality,cameras:c.cameras}:{}}),!t.host.administrator){this.#Q(),this.#ne("access-required",t.entryKey);return}if(!t.host.connected){l&&(this.#e.patch({generation:this.#t.invalidate()}),this.#D(),this.#w=""),this.#Q(),this.#m=!1,this.#c=!1,this.#g=null,this.#R=!1,this.#H();let d=this.#e.value,u=d.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...d.resources,catalog:d.resources.catalog.status==="loading"?p("idle",d.resources.catalog.value):d.resources.catalog,plans:d.resources.plans.status==="loading"?p("idle",d.resources.plans.value):d.resources.plans,areas:d.resources.areas.status==="loading"?p("idle",d.resources.areas.value):d.resources.areas,pose:p("idle",null)},map:{...d.map,available:u!==null,exactPose:!1}});return}if(t.host.robotCount===0){this.#Q(),this.#ne("map-unavailable",t.entryKey);return}if(t.entryKey&&!t.vacuumEntityId){this.#Q(),this.#ne("no-loaded-robot",t.entryKey);return}if(!t.host.robotConnected){s!==!1&&(this.#B(),this.#H(),this.#m=!1,this.#c=!1,this.#g=null,this.#R=!1),this.#Q();let d=this.#e.value,u=d.resources.scene.value;this.#e.patch({coherence:u?"degraded":"unavailable",resources:{...d.resources,catalog:d.resources.catalog.status==="loading"?p("idle",d.resources.catalog.value):d.resources.catalog,scene:d.resources.scene.status==="loading"?p("idle",u):d.resources.scene,pose:p("idle",null)},map:{...d.map,available:u!==null,exactPose:!1}});return}if(this.#o.active){if(this.#ke(),!l||o||n){this.refreshCatalog(!0,!0);return}(a||this.#e.value.resources.catalog.status==="idle"||t.entryKey&&t.entryKey!==this.#e.value.selection.entryId)&&this.refreshCatalog(!0)}}#Y(t){let e=t.entryKey,s=this.#e.value,n=s.resources.catalog.value?.find(l=>l.entryId===e),o=s.resources.entry;if(!(this.#V??!!(n?.liveWorkspaceTransportEnabled&&o?.entryId===e&&o.liveWorkspaceTransportEnabled))||!this.#U||!t.host.administrator||!t.host.connected||!t.vacuumEntityId||!e||!this.#o.active){this.#fe();return}if(this.#S&&this.#x===e)return;this.#S?.dispose(),this.#y=null;let a=new He(this.#U,{entryId:e,onEvent:l=>{if(!(this.#l||!this.#o.active||this.#S!==a||this.#x!==e||this.#s?.entryKey!==e)){if(l.type==="resync"&&l.reason==="entry_removed"){a.dispose(),this.#S===a&&(this.#S=null,this.#x=null,this.#y=null);return}if(l.type==="snapshot"){let{snapshot:c}=l,d=this.#e.value.resources.entry,u=c.payload.entry;if(c.entry_id!==e||c.identity.entry_id!==e)return;if(u&&(u.entryId!==e||c.identity.floor_verified!==(u.mapFloorCoherent&&u.mapSessionVerified))){a.requestResync("invalid_message");return}let m=!u&&d?.entryId===e&&c.identity.floor_verified!==(d.mapFloorCoherent&&d.mapSessionVerified);if(c.status.reason==="authorization"){this.#y=null,this.#q(e,["plans","areas","history"]);return}let h=this.#y,f=[],b=h!==null&&h.epoch!==c.epoch;if(h&&h.epoch===c.epoch){let R=new Set([...Object.keys(h.revisions),...Object.keys(c.revisions)]),y=[...R].some(C=>(c.revisions[C]??-1)<(h.revisions[C]??-1));if(c.coherence_generation<h.coherenceGeneration||c.coherence_generation===h.coherenceGeneration&&y){a.requestResync("restart");return}f=[...R].filter(C=>(c.revisions[C]??-1)>(h.revisions[C]??-1))}b&&(f=["plans","areas","history"]);let v=h!==null&&(h.epoch!==c.epoch||h.coherenceGeneration!==c.coherence_generation),g=!!(d&&u&&d.entryId===e&&x(d)!==x(u));if(this.#y={entryId:c.entry_id,epoch:c.epoch,sequence:c.sequence,coherenceGeneration:c.coherence_generation,revisions:c.revisions},m){this.#q(e,["plans","areas","history"]);return}if(v||g){this.#q(e,f);return}let E=u!==null&&d?.entryId===e&&this.#ce(u);if(h&&f.length){if(c.sequence<=h.sequence){a.requestResync("invalid_message");return}this.#y=h,this.#X({epoch:c.epoch,sequence:c.sequence,coherence_generation:c.coherence_generation,revisions:c.revisions,resources:f},e,a,E)}return}if(l.type==="resync"){this.#y=null,l.reason!=="authorization"&&this.#q(e,["plans","areas","history"]);return}this.#X(l.invalidation,e,a)}}});this.#S=a,this.#x=e,a.start()}#X(t,e,s,n=!1){let o=this.#y;if(!o||o.entryId!==e||this.#S!==s||t.epoch!==o.epoch||t.sequence<=o.sequence)return;let r=t.coherence_generation!==o.coherenceGeneration,l=[...new Set([...Object.keys(o.revisions),...Object.keys(t.revisions)])].some(h=>(t.revisions[h]??-1)<(o.revisions[h]??-1));if(t.coherence_generation<o.coherenceGeneration||!r&&l){s.requestResync("restart");return}let c=new Set(t.resources),d=[...c].some(h=>(t.revisions[h]??-1)>(o.revisions[h]??-1));if(this.#y={...o,sequence:t.sequence,coherenceGeneration:t.coherence_generation,revisions:t.revisions},!d&&!r)return;if(r){this.#q(e,t.resources);return}c.has("scene")&&c.delete("scene");let u=this.#e.value.resources.entry,m=this.#t.current();!u||u.entryId!==e||!m||c.size&&this.#te(u,m,c,!n)}#ce(t){let e=this.#e.value,s=e.resources.entry;if(!s||x(s)!==x(t))return!1;let n=t.mapRevision===s.mapRevision?t:{...t,mapRevision:s.mapRevision},o=e.resources.catalog,r=o.value?.map(u=>u.entryId===n.entryId?n:u),a=n.mapFloorCoherent&&n.mapSessionVerified,l=n.health==="problem"||n.health==="limited",c=this.#h,d=c?.key===x(n)&&this.#ue(c)&&(c.attempt!==null||c.retryTimer!==null);return this.#e.patch({managedLock:Fe(n),coherence:d?"verifying":a?l?"degraded":"current":"verifying",map:{...e.map,available:e.resources.scene.value!==null,complete:n.mapComplete&&!n.mapTruncated,floorCoherent:n.mapFloorCoherent,sessionVerified:n.mapSessionVerified,exactPose:a&&!d?e.map.exactPose:!1},floor:{...e.floor,classifiedCount:Math.max(1,n.historyFloorCount),...d&&e.resources.scene.value?{readOnly:!0}:{}},resources:{...e.resources,entry:n,...r?{catalog:{...o,value:r}}:{}}}),this.#s&&this.#Y(this.#s),!0}#B(t=this.#e.value.pageActive,e=[]){let s=this.#t.invalidate();this.#D();let n=this.#e.value;this.#e.patch({generation:s,pageActive:t,coherence:n.resources.scene.value?"verifying":"unavailable",floor:{...n.floor,readOnly:n.floor.readOnly||n.resources.scene.value!==null},map:{...n.map,exactPose:!1}}),this.#h&&this.#Z(this.#h.key),this.#H(["catalog",...e]),this.#w=""}#q(t,e=[]){this.#M(),this.#B(),this.refreshCatalog(!0,!0).then(()=>{if(this.#l||this.#s?.entryKey!==t||!this.#s.host.administrator||!this.#s.host.connected)return;let s=this.#e.value.resources.entry,n=this.#t.current();if(!s||s.entryId!==t||!n)return;let o=new Set(e);o.delete("history"),this.#te(s,n,o,!1)})}#D(){this.#C+=1,this.#I=null}#ee(t){let e=this.#I,s=this.#t.current();return!!(e&&s&&e.generation===this.#C&&e.stamp.generation===s.generation&&e.entryId===t.entryId&&e.coherenceIdentity===x(t)&&e.deltaUrl===t.deltaUrl&&s.entryKey===t.entryId&&s.floorKey===de(t)&&s.missionKey===ue(t)&&t.mapFloorCoherent&&t.mapSessionVerified&&this.#e.value.dataMode==="live"&&this.#e.value.selection.floorId==="current"&&this.#s?.host.connected&&this.#s.host.robotConnected&&this.#s.host.administrator)}#te(t,e,s,n=!0){(s.has("plans")||s.has("plan_state"))&&this.loadPlans(),s.has("areas")&&this.loadAreas(),s.has("history")&&this.#re(t,e),n&&["status","robot_state","activity","plan_state"].some(o=>s.has(o))&&this.refreshCatalog(!0,!0,!0)}#ke(){this.#o.active&&(this.#u===null&&(this.#u=window.setInterval(()=>{this.refreshCatalog()},5e3)),this.#f===null&&(this.#f=window.setInterval(()=>{this.refreshPose()},Cn)))}#Q(){this.#u!==null&&window.clearInterval(this.#u),this.#f!==null&&window.clearInterval(this.#f),this.#u=null,this.#f=null,this.#M()}#M(){let t=this.#h;if(this.#h=null,!t)return;t.attempt?.finishReplacementRead?.(),t.attempt&&(t.attempt.finishReplacementRead=null),t.retryTimer!==null&&window.clearTimeout(t.retryTimer);let e=t.attempt?.controller,s=!!(e&&e===this.#r.get("catalog")&&this.#e.value.resources.catalog.status==="loading");if(e?.abort(),s){let n=this.#e.value.resources;this.#e.patch({resources:{...n,catalog:p("idle",n.catalog.value)}})}this.#g?.state===t&&(this.#m=!1,this.#c=!1,this.#g=null)}#J(t,e){let s=this.#h;s?.key===x(e)&&(s.failedKinds.delete(t),t==="delta"&&this.#se(e),s.failedKinds.size===0&&this.#M())}#se(t){this.#Z(x(t))}#Z(t){let e=this.#h;e?.key===t&&(e.attempt?.finishReplacementRead?.(),e.attempt&&(e.attempt.finishReplacementRead=null))}#de(t,e){let s=x(e),n=this.#h;n?.key!==s&&(this.#M(),n={key:s,failedKinds:new Set,retryTimer:null,attempt:null},this.#h=n),n.failedKinds.add(t),t==="delta"&&this.#se(e),this.#ue(n)&&this.#t.current()&&this.#B(),!n.attempt&&n.retryTimer===null&&(n.failedKinds.size===1&&n.failedKinds.has(t)?this.#Re(n):this.#ge(n))}#ue(t){let e=this.#e.value;return t.failedKinds.has("pose")||e.floor.readOnly||!e.map.floorCoherent||!e.map.sessionVerified}#ge(t){t.retryTimer!==null||t.failedKinds.size===0||(t.retryTimer=window.setTimeout(()=>{t.retryTimer=null;let e=this.#e.value.resources.entry,s=this.#s?.host;if(this.#h!==t||this.#l||!e||x(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#h===t&&this.#M();return}this.#Re(t)},Mn))}async#Re(t){if(this.#l||this.#h!==t||t.attempt)return;let e=this.#e.value.resources.entry,s=this.#s?.host;if(!e||x(e)!==t.key||this.#e.value.dataMode!=="live"||this.#e.value.selection.floorId!=="current"||!s?.connected||!s.administrator||!s.robotConnected||s.robotCount===0){this.#h===t&&this.#M();return}if(this.#r.has("scene")){this.#ge(t);return}let n=this.#ue(t);n?this.#t.current()&&this.#B():(this.#D(),this.#r.get("delta")?.abort());let o,r=new Promise(c=>{o=c}),a={generation:this.#t.generation,controller:null,replacementRead:r,finishReplacementRead:o};t.attempt=a;let l={state:t,attempt:a};try{await this.refreshCatalog(!0,!1,!n,l),t.failedKinds.has("delta")&&this.#h===t&&t.attempt===a&&await a.replacementRead}finally{if(this.#h!==t||t.attempt!==a)return;a.finishReplacementRead=null,t.attempt=null,t.failedKinds.size>0&&this.#ge(t)}}#he(t){let e=this.#e.value,s=this.#s?.host;return!this.#l&&this.#o.active&&this.#h===t.state&&t.state.attempt===t.attempt&&t.attempt.generation===this.#t.generation&&e.generation===this.#t.generation&&e.dataMode==="live"&&e.selection.floorId==="current"&&e.resources.entry!==null&&x(e.resources.entry)===t.state.key&&!!(s?.connected&&s.administrator&&s.robotConnected&&s.robotCount>0)}#T(t){this.#r.get(t)?.abort();let e=new AbortController;return this.#r.set(t,e),e}#A(t,e){this.#r.get(t)===e&&this.#r.delete(t)}#H(t=[]){let e=!1;for(let[s,n]of this.#r)t.includes(s)||(e||=s==="plan-mutation"||s==="area-mutation"||s==="plan-preflight",n.abort(),this.#r.delete(s));e&&this.#e.value.command==="pending"&&this.#e.patch({command:"idle",notice:null})}#be(){this.#k+=1,this.#d!==null&&window.clearTimeout(this.#d),this.#d=null}#ne(t,e=null){this.#M(),this.#be(),this.#t.invalidate(),this.#D(),this.#w="";let s=this.#t.generation;this.#H();let n=this.#e.value,o=V();this.#e.patch({command:"idle",dataMode:o.dataMode,floor:o.floor,managedLock:!1,workflow:"none",dialog:null,notice:null,draftFloorOrdinal:null,draw:o.draw,planDraft:o.planDraft,areaDraft:o.areaDraft,generation:s,coherence:n.host.administrator?"unavailable":"blocked",fullMap:!1,precisionOpen:!1,resources:{catalog:p("error",null,t),entry:null,scene:p("idle",null),pose:p("idle",null),history:p("idle",null),plans:p("idle",null),areas:p("idle",null)},manualRoomPreview:p("idle",null),map:{available:!1,complete:!1,floorCoherent:!1,sessionVerified:!1,exactPose:!1},selection:{...o.selection,entryId:e,entrySource:n.selection.entrySource,floorId:"current",historyId:null}})}async refreshCatalog(t=!1,e=!1,s=!1,n=null){if(this.#l||!this.#o.active||!this.#s?.host.administrator||!this.#s.host.connected||this.#s.host.robotCount===0||n&&(!this.#s.host.robotConnected||!this.#he(n)))return;if(this.#_)return t&&(this.#v?e&&(this.#m?this.#c&&=s:this.#c=s,this.#m=!0):(this.#m?this.#c&&=s:this.#c=s,this.#m=!0,this.#r.get("catalog")?.abort()),n&&(this.#m?this.#c&&=s:this.#c=s,this.#g=n,this.#m=!0)),this.#b;this.#_=!0,this.#v=t;let o;this.#b=new Promise(l=>{o=l});let r=this.#T("catalog");n&&(n.attempt.controller=r);let a=this.#e.value.resources.catalog.value;this.#e.patch({resources:{...this.#e.value.resources,catalog:p("loading",a)}});try{let l=await this.#n.catalog(r.signal);if(r.signal.aborted||this.#l||n&&!this.#he(n))return;let c=this.#s?.entryKey,d=c?l.find(v=>v.entryId===c)??null:l[0]??null,u=this.#e.value.resources.entry;if(d&&this.#h?.key===x(d)&&(this.#h.attempt!==null||this.#h.retryTimer!==null)&&(!n||!this.#he(n))){this.#e.patch({managedLock:Fe(d),resources:{...this.#e.value.resources,catalog:p(l.length?"ready":"empty",l),entry:u}});return}let m=!!(d&&u&&x(d)===x(u)&&this.#ee(u));if(d&&u&&F(d)===F(u)&&de(d)===de(u)&&ue(d)===ue(u)&&(m||d.mapRevision<u.mapRevision||!t&&this.#r.has("scene"))&&(d={...d,mapRevision:u.mapRevision}),this.#e.patch({managedLock:d?Fe(d):!1,resources:{...this.#e.value.resources,catalog:p(l.length?"ready":"empty",l),entry:d}}),this.#s&&this.#Y(this.#s),!d){this.#ne("no-loaded-robot",this.#s?.entryKey??null);return}if(this.#e.value.selection.floorId!=="current"||this.#e.value.dataMode!=="live"){n&&this.#se(d);return}let h=vt(d),f=this.#t.current(),b=!!(f&&u&&x(d)===x(u)&&d.mapFloorCoherent&&d.mapSessionVerified);if((!t||s)&&(h===this.#w||b)){let v=this.#e.value,g=d.mapFloorCoherent&&d.mapSessionVerified,E=d.health==="problem"||d.health==="limited";this.#e.patch({coherence:g?E?"degraded":"current":"verifying",map:{...v.map,available:v.resources.scene.value!==null,complete:d.mapComplete&&!d.mapTruncated,floorCoherent:d.mapFloorCoherent,sessionVerified:d.mapSessionVerified,exactPose:g?v.map.exactPose:!1},floor:{...v.floor,classifiedCount:Math.max(1,d.historyFloorCount)}}),g&&this.#e.value.resources.plans.problem==="map-rechecking"&&this.loadPlans(),this.#me();let R=f;if(R&&b&&(d.mapRevision>R.revision||n!==null)&&(d.mapRevision>R.revision&&(R=this.#t.advance(R,d.mapRevision)),R)){this.#w=h,this.#D();let y=this.#e.value.resources;this.#e.patch({resources:{...y,scene:p("loading",y.scene.value)}}),this.#oe(d,R)}R&&!v.resources.scene.value&&!this.#r.has("history")&&this.#re(d,R),g&&R&&(v.resources.scene.status==="error"||v.floor.readOnly)&&!this.#r.has("scene")&&this.#oe(d,R);return}this.#w=h,this.#Ee(d,u)}catch(l){if(W(l)||r.signal.aborted||this.#l)return;n&&this.#Z(n.state.key),this.#e.patch({coherence:this.#e.value.resources.scene.value?"degraded":"unavailable",resources:{...this.#e.value.resources,catalog:p("error",a,K(l,"catalog-unavailable"))}})}finally{this.#A("catalog",r),n?.attempt.controller===r&&(n.attempt.controller=null),this.#_=!1;let l=this.#m,c=this.#c,d=this.#g;this.#v=!1;try{l&&!this.#l&&(this.#m=!1,this.#c=!1,this.#g=null,await this.refreshCatalog(!0,!1,c,d))}finally{o()}}}#Ee(t,e){this.#h!==null&&this.#h.key!==x(t)&&this.#M();let s=this.#e.value,n=!!(e&&F(e)===F(t)),o=t.mapFloorCoherent&&t.mapSessionVerified,r=s.draftMapSessionKey??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapSessionKey:null),a=s.draftFloorOrdinal??(e?.mapFloorCoherent&&e.mapSessionVerified?e.mapFloorOrdinal:null),l=o?t.mapFloorOrdinal:null,c=o?t.mapSessionKey:null,d=e!==null&&e.entryId!==t.entryId||a!==null&&l!==null&&a!==l||r!==null&&c!==null&&r!==c,u=n&&o&&a===t.mapFloorOrdinal&&r===t.mapSessionKey,m=["catalog"];n&&!d&&m.push("plans","areas"),u&&m.push("plan-mutation","area-mutation");let h=this.#t.begin(t.entryId,de(t),ue(t),t.mapRevision);this.#h?.key===x(t)&&this.#h.attempt&&(this.#h.attempt.generation=h.generation),this.#D(),this.#H(m);let f=e?.entryId===t.entryId?s.resources.scene.value:null,b=f!==null&&(s.floor.readOnly||!n||!o||e?.mapSessionKey!==t.mapSessionKey),v=s.resources.pose.value,g=n&&o&&t.mapSessionKey!==null&&v?.position&&v.mapSessionKey===t.mapSessionKey?v:null;d&&this.#be();let E=V(),R=t.health==="problem"||t.health==="limited",y=this.#e.value;this.#e.patch({...d?{command:"idle",workflow:"none",dialog:null,precisionOpen:!1,fullMap:!1,draw:E.draw,planDraft:E.planDraft,areaDraft:E.areaDraft,notice:I.mapChanged}:{},draftFloorOrdinal:l??a,draftMapSessionKey:c??r,managedLock:Fe(t),generation:h.generation,coherence:o?R?"degraded":b?"verifying":"current":"verifying",dataMode:"live",resources:{...y.resources,entry:t,scene:p(o?"loading":"idle",f),pose:p(o?"loading":"idle",g),history:p("loading",y.resources.history.value),plans:n&&!d?y.resources.plans:p("idle",null),areas:n&&!d?y.resources.areas:p("idle",null)},map:{available:f!==null,complete:t.mapComplete&&!t.mapTruncated,floorCoherent:t.mapFloorCoherent,sessionVerified:t.mapSessionVerified,exactPose:o&&g!==null&&!b},floor:{classifiedCount:Math.max(1,t.historyFloorCount),displayName:b?s.floor.displayName:t.selectedFloorOrdinal?`Floor ${t.selectedFloorOrdinal}`:"Current floor",readOnly:b},selection:{...y.selection,entryId:t.entryId,floorId:"current",historyId:null,roomIds:d?[]:y.selection.roomIds,roomSettings:d?[]:y.selection.roomSettings,planId:d?null:y.selection.planId,areaId:d?null:y.selection.areaId}}),this.#re(t,h),o&&this.#e.value.resources.plans.status==="idle"&&this.loadPlans(),this.#me(),o&&(this.#oe(t,h),this.#pe(t,h))}async#oe(t,e){if(!this.#o.active)return;let s=this.#T("scene");try{let n=await this.#n.scene(t.sceneUrl,t.mapRevision,t.mapFloorCoherent,"live",s.signal);if(!this.#t.accepts(e))return;if(!n.floorCoherent){let c=this.#e.value;this.#e.patch({coherence:"verifying",resources:{...c.resources,scene:p("error",c.resources.scene.value,"map-rechecking"),pose:p("idle",null)},map:{...c.map,available:c.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...c.floor,readOnly:c.resources.scene.value!==null}}),this.#se(t);return}if(n.revision<e.revision||!n.scene)throw new P("scene-unavailable");let o=n.revision===e.revision?e:this.#t.advance(e,n.revision);if(!o)throw new P("scene-unavailable");let r=this.#e.value,a={...r.resources.entry??t,mapRevision:n.revision};this.#w=vt(a),this.#e.patch({coherence:a.health==="problem"||a.health==="limited"?"degraded":"current",resources:{...r.resources,entry:a,scene:p("ready",n.scene)},map:{...r.map,available:!0},floor:{...r.floor,readOnly:!1,displayName:r.resources.history.value?.floors.find(c=>c.active)?.label||(a.selectedFloorOrdinal?`Floor ${a.selectedFloorOrdinal}`:"Current floor")},notice:r.notice?.key==="v4_notice_saved_map"?null:r.notice});let l=this.#e.value.resources.plans;if((l.status==="idle"||l.problem==="map-rechecking")&&this.loadPlans(),this.#me(),t.deltaUrl&&typeof DecompressionStream=="function"){let c=++this.#C;this.#Se(a,o,n.scene,c)}else this.#J("delta",a)}catch(n){if(W(n)||!this.#t.accepts(e))return;if(n instanceof P&&n.code==="request-timeout"){let l=this.#e.value;this.#e.patch({resources:{...l.resources,scene:p("loading",l.resources.scene.value,"scene-building")}}),window.setTimeout(()=>{this.#l||!this.#t.accepts(e)||this.#e.value.selection.floorId!=="current"||this.#oe(t,e)},250);return}this.#se(t);let o=this.#e.value,r=o.resources.pose.value,a=o.resources.scene.value!==null&&t.mapSessionKey!==null&&r?.position!==null&&r?.mapSessionKey===t.mapSessionKey;this.#e.patch({coherence:"degraded",resources:{...o.resources,scene:p("error",o.resources.scene.value,K(n,"scene-unavailable"))},map:{...o.map,available:o.resources.scene.value!==null,exactPose:a}})}finally{this.#A("scene",s)}}async#Se(t,e,s,n){if(!t.deltaUrl||typeof DecompressionStream!="function")return;let o=t.deltaUrl,r={generation:n,stamp:e,entryId:t.entryId,coherenceIdentity:x(t),deltaUrl:o};if(n!==this.#C||!this.#t.accepts(e))return;this.#I=r;let a=t,l=e,c=s;try{for(;!this.#l&&this.#o.active&&n===this.#C&&this.#t.accepts(l)&&this.#e.value.selection.floorId==="current";){let d=this.#T("delta");try{let u=await this.#n.sceneDelta(o,c,a.mapFloorCoherent,d.signal);if(d.signal.aborted||this.#l||n!==this.#C||!this.#t.accepts(l))return;if(!u.floorCoherent){let f=this.#e.value;this.#e.patch({coherence:"verifying",map:{...f.map,available:f.resources.scene.value!==null,floorCoherent:!1,exactPose:!1},floor:{...f.floor,readOnly:f.resources.scene.value!==null},resources:{...f.resources,scene:p("error",f.resources.scene.value,"map-rechecking"),pose:p("idle",null)}}),this.#de("delta",a);return}if(u.notModified||!u.scene){this.#J("delta",a),await new Promise(f=>window.setTimeout(f,100));continue}let m=this.#t.advance(l,u.revision);if(!m)return;l=m,r.stamp=m,c=u.scene,a={...a,mapRevision:u.revision},this.#J("delta",a),this.#w=vt(a);let h=this.#e.value;this.#e.patch({resources:{...h.resources,entry:a,scene:p("ready",c)},map:{...h.map,available:!0,floorCoherent:!0}}),this.#pe(a,l)}finally{this.#A("delta",d)}}}catch(d){if(W(d)||this.#l||n!==this.#C||!this.#t.accepts(l))return;this.#de("delta",a)}finally{this.#I===r&&(this.#I=null)}}async#re(t,e){if(!this.#o.active)return;let s=this.#T("history");try{let n=await this.#n.history(t.historyUrl,s.signal),o=this.#t.current();if(s.signal.aborted||!o||!Ke(e,o)||n.entryId!==t.entryId)return;let r=this.#e.value,a=n.floors.find(d=>d.id===r.selection.floorId),l=!r.selection.historyId||a?.snapshots.some(d=>d.id===r.selection.historyId),c=r.dataMode==="live"?n.floors.find(d=>d.active):a;if(this.#e.patch({resources:{...this.#e.value.resources,history:p("ready",n)},floor:{...this.#e.value.floor,classifiedCount:n.floors.length,...c&&!(r.dataMode==="live"&&r.floor.readOnly)?{displayName:Ue(c,1)}:{}}}),r.dataMode==="live"&&!r.resources.scene.value){let d=n.floors.flatMap(u=>u.snapshots.map(m=>({floor:u,snapshot:m}))).sort((u,m)=>Date.parse(m.snapshot.createdAt)-Date.parse(u.snapshot.createdAt));for(let u of d){let m;try{m=await this.#n.scene(u.snapshot.sceneUrl,u.snapshot.revision,!0,"history",s.signal)}catch(b){if(W(b)||s.signal.aborted)return;continue}let h=this.#t.current();if(s.signal.aborted||!h||!Ke(e,h)||this.#e.value.resources.scene.value)return;if(!m.scene)continue;let f=this.#e.value;this.#e.patch({floor:{...f.floor,readOnly:!0,displayName:Ue(u.floor,1)},resources:{...f.resources,scene:p("ready",m.scene),pose:p("idle",null)},map:{...f.map,available:!0,exactPose:!1},notice:Sn(u.snapshot.createdAt)});break}}if(r.dataMode==="history"&&(!a||!l)){let d=a||n.floors.find(m=>m.active)||n.floors[0],u=this.selectFloor(d?.id||"current");!this.#l&&r.workflow==="history"&&this.#e.dispatch({type:"open-workflow",workflow:"history"}),await u}}catch(n){let o=this.#t.current();if(W(n)||s.signal.aborted||!o||!Ke(e,o))return;this.#e.patch({resources:{...this.#e.value.resources,history:p("error",null,K(n,"history-unavailable"))}})}finally{this.#A("history",s)}}async refreshPose(){let t=this.#e.value.resources.entry,e=this.#t.current();!t||!e||this.#e.value.selection.floorId!=="current"||!t.mapFloorCoherent||!t.mapSessionVerified||await this.#pe(t,e)}async#pe(t,e){if(this.#l||!this.#o.active||!this.#W||!this.#s?.host.connected)return;if(this.#P){this.#R=!0;return}this.#P=!0;let s=this.#T("pose");try{let n=await this.#n.pose(t.poseUrl,s.signal),o=this.#t.current(),r=this.#e.value.resources.entry;if(!o||!Ke(e,o)||!r||!this.#e.value.map.floorCoherent)return;if(!n.floorCoherent||n.mapSessionKey===null||n.mapSessionKey!==r.mapSessionKey){this.#e.patch({resources:{...this.#e.value.resources,pose:p("idle",null)},map:{...this.#e.value.map,exactPose:!1}}),this.#de("pose",r);return}this.#J("pose",r);let a=this.#e.value,l=a.resources.pose.value,c=!!(a.map.exactPose&&l?.position&&l.mapSessionKey===r.mapSessionKey);if(n.position===null&&c){this.#e.patch({resources:{...a.resources,pose:p("ready",l)}});return}this.#e.patch({resources:{...a.resources,pose:p("ready",n)},map:{...a.map,exactPose:n.position!==null}})}catch(n){if(W(n)||!this.#t.accepts(e))return;let o=this.#e.value,r=o.resources.pose.value,a=!!(o.map.exactPose&&r?.position&&r.mapSessionKey===o.resources.entry?.mapSessionKey);this.#e.patch({resources:{...o.resources,pose:p("error",a?r:null,K(n,"pose-unavailable"))},map:{...o.map,exactPose:a}})}finally{if(this.#A("pose",s),this.#P=!1,this.#R&&!this.#l&&this.#W&&this.#s?.host.connected&&this.#s.host.administrator&&this.#s.host.robotCount>0){this.#R=!1;let n=this.#e.value.resources.entry,o=this.#t.current();n&&o&&this.#pe(n,o)}else this.#R=!1}}async selectFloor(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;let n=e.floors.find(l=>l.id===t);if(!n&&t!=="current")return;let o=this.#e.value;if(o.workflow==="draw"&&(o.draw.dirty||o.areaDraft.dirty)||o.workflow==="areaReview"&&(o.draw.dirty||o.areaDraft.dirty))return;if(!n||n.active){this.#M(),this.#w="";let l=this.#e.value;this.#e.patch({resources:{...l.resources,plans:p("idle",null),areas:p("idle",null),scene:p("idle",l.resources.scene.value),pose:p("idle",null)},map:{...l.map,available:l.resources.scene.value!==null,exactPose:!1},coherence:"verifying",floor:{...l.floor,readOnly:l.resources.scene.value!==null},workflow:"none",precisionOpen:!1}),this.#e.dispatch({type:"set-floor",floorId:"current"}),await this.refreshCatalog(!0);return}this.#M();let r=n.snapshots.at(-1),a=this.#t.begin(s.entryId,n.id,r?.id||n.id,r?.revision||0);this.#H(["catalog"]),this.#e.patch({generation:a.generation,coherence:"current",dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ue(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:r?.id||null},resources:{...this.#e.value.resources,scene:p(r?"loading":"empty",null),pose:p("idle",null),plans:p("idle",null),areas:p("idle",null)},workflow:"none",precisionOpen:!1,map:{available:!1,complete:!0,floorCoherent:!0,sessionVerified:!0,exactPose:!1}}),r&&await this.#we(r,a)}async selectHistory(t){let e=this.#e.value.resources.history.value,s=this.#e.value.resources.entry;if(!e||!s)return;if(!t){await this.selectFloor("current");return}let n=e.floors.find(a=>a.snapshots.some(l=>l.id===t)),o=n?.snapshots.find(a=>a.id===t);if(!n||!o)return;this.#M();let r=this.#t.begin(s.entryId,n.id,o.id,o.revision);this.#H(["catalog"]),this.#e.patch({generation:r.generation,dataMode:"history",floor:{classifiedCount:e.floors.length,displayName:Ue(n,e.floors.indexOf(n)+1),readOnly:!0},selection:{...this.#e.value.selection,floorId:n.id,historyId:o.id},resources:{...this.#e.value.resources,scene:p("loading",null),pose:p("idle",null)},map:{...this.#e.value.map,available:!1,exactPose:!1}}),await this.#we(o,r)}async#we(t,e){if(!this.#o.active)return;let s=this.#T("history-scene");try{let n=await this.#n.scene(t.sceneUrl,t.revision,!0,"history",s.signal);if(!this.#t.accepts(e)||!n.scene)return;this.#e.patch({resources:{...this.#e.value.resources,scene:p("ready",n.scene)},map:{...this.#e.value.map,available:!0,exactPose:!1}})}catch(n){if(W(n)||!this.#t.accepts(e))return;this.#e.patch({resources:{...this.#e.value.resources,scene:p("error",null,K(n,"history-scene-unavailable"))}})}finally{this.#A("history-scene",s)}}async openWorkflow(t){let e=this.#e.value;if((e.dataMode==="history"||e.floor.readOnly)&&Ks.includes(t))return;let s=this.#e.value.workflow;if(t==="draw"&&s!=="draw"&&s!=="areaReview"&&this.selectArea(null),this.#e.dispatch({type:"open-workflow",workflow:t}),Ks.includes(t)&&this.#_e(),t==="history"){let n=this.#e.value.resources.entry,o=this.#t.current();n&&o&&(this.#e.patch({resources:{...this.#e.value.resources,history:p("loading",this.#e.value.resources.history.value)}}),await this.#re(n,o))}(t==="plans"||t==="plan"||t==="rooms")&&await this.loadPlans(),(t==="draw"||t==="areaReview")&&await this.loadAreas()}async loadPlans({force:t=!1}={}){if(!this.#o.active){this.#r.get("plans")?.abort();let o=this.#e.value.resources;return this.#e.patch({resources:{...o,plans:p("idle",o.plans.value)}}),null}let e=this.#e.value.resources.entry;if(!e||!this.#t.current()||!Qe(this.#e.value)||!t&&this.#e.value.resources.plans.status==="loading")return null;let s=F(e),n=this.#T("plans");this.#e.patch({resources:{...this.#e.value.resources,plans:p("loading",this.#e.value.resources.plans.value)}});try{let o=await this.#n.plans(e.plansUrl,n.signal),r=this.#e.value.resources.entry;if(n.signal.aborted||this.#l||!r||F(r)!==s)return null;let a=this.#e.value;if(a.planDraft.dirty||a.workflow==="plan"&&(!a.planDraft.id||a.command==="pending"))return this.#e.patch({resources:{...this.#e.value.resources,plans:p("ready",o)}}),o;let l=a.workflow==="plan"?a.selection.planId:o.selectedPlan||o.plans[0]?.id||null,c=o.plans.find(d=>d.id===l);return this.#e.patch({resources:{...this.#e.value.resources,plans:p("ready",o)},selection:{...this.#e.value.selection,planId:l},planDraft:c?Pt(c):{...this.#e.value.planDraft,id:null,name:"",rooms:[],parkedRooms:[],dirty:!1},...c?{}:{planView:"edit",expandedRoom:null}}),o}catch(o){let r=this.#e.value.resources.entry;if(W(o)||n.signal.aborted||this.#l||!r||F(r)!==s)return null;let a=o instanceof P&&o.code==="map-rechecking"?"map-rechecking":K(o,"plans-unavailable");return this.#e.patch({resources:{...this.#e.value.resources,plans:p("error",this.#e.value.resources.plans.value,a)}}),null}finally{this.#A("plans",n)}}selectPlan(t,e=!1){this.#e.patch(xt(this.#e.value,t,e))}setPlanEnabled(t){this.#e.dispatch({type:"set-plan-enabled",enabled:t})}#me(){let t=this.#e.value;(t.workflow==="draw"||t.workflow==="areaReview")&&t.resources.areas.status==="idle"&&this.loadAreas()}async loadAreas({reconcileDraft:t=!0}={}){if(!this.#o.active){this.#r.get("areas")?.abort();let o=this.#e.value.resources;return this.#e.patch({resources:{...o,areas:p("idle",o.areas.value)}}),null}let e=this.#e.value.resources.entry;if(!e||!this.#t.current()||!Qe(this.#e.value))return null;let s=F(e),n=this.#T("areas");this.#e.patch({resources:{...this.#e.value.resources,areas:p("loading",this.#e.value.resources.areas.value)}});try{let o=await this.#n.areas(e.areasUrl,n.signal),r=this.#e.value.resources.entry;if(n.signal.aborted||this.#l||!r||F(r)!==s)return null;if(o.sceneUrl!==r.sceneUrl)throw new P("areas-unavailable");this.#e.patch({resources:{...this.#e.value.resources,areas:p("ready",o)}});let a=this.#e.value.selection.areaId,l=this.#e.value,c=o.areas.some(d=>d.id===a);return t&&a!==null&&!c&&(l.draw.dirty||l.areaDraft.dirty)?this.#e.patch({selection:{...l.selection,areaId:null},areaDraft:{...l.areaDraft,id:null,status:"new",canRebind:!1,dirty:!0},notice:I.areaRemoved}):t&&!l.draw.dirty&&!l.areaDraft.dirty&&this.selectArea(c?a:null),o}catch(o){let r=this.#e.value.resources.entry;return W(o)||n.signal.aborted||this.#l||!r||F(r)!==s||this.#e.patch({resources:{...this.#e.value.resources,areas:p("error",this.#e.value.resources.areas.value,K(o,"areas-unavailable"))}}),null}finally{this.#A("areas",n)}}selectArea(t){let e=this.#e.value.resources.areas.value?.areas.find(n=>n.id===t),s=this.#e.value;this.#e.patch({selection:{...s.selection,areaId:t},areaDraft:e?this.#Ce(e):{id:null,name:"",cleaningMode:"vacuum",coverageSetting:"standard",status:"new",canRebind:!1,dirty:!1},draw:{...s.draw,circles:e?.circles||[],outline:e?.outline??null,outlineUndo:[],outlineRedo:[],tool:!e||e.outline?"outline":"paint",undo:[],redo:[],dirty:!1,strokeCount:0}})}#Ce(t){return{id:t.id,name:t.name,cleaningMode:t.cleaningMode,coverageSetting:t.coverageSetting,status:t.status,canRebind:t.canRebind,dirty:!1}}saveArea(){return this.#ie("area-mutation",I.areaSaveFailed,(t,e)=>t.saveArea(e))}deleteArea(){return this.#ie("area-mutation",I.areaDeleteFailed,(t,e)=>t.deleteArea(e))}savePlan(){return this.#ie("plan-mutation",I.planSaveFailed,(t,e)=>t.savePlan(e))}deletePlan(){return this.#ie("plan-mutation",I.planDeleteFailed,(t,e)=>t.deletePlan(e))}#_e(){return this.#ae??=import("./catalog-writes-MPGKEV55.js").catch(()=>null)}async#ie(t,e,s){let n=this.#e.value;if(n.command==="pending"||this.#r.has(t))return;let o=this.#T(t);try{let r=await this.#_e(),a=this.#e.value;if(o.signal.aborted||!Ge(a)||a.command==="pending")return;if(!r){this.#e.patch({notice:e});return}await s(r,{state:n,signal:o.signal,store:this.#e,backend:this.#n,effects:this,helpers:Rn,failure:e,projection:()=>this.#s,disposed:()=>this.#l,release:()=>this.#A(t,o)})}finally{this.#A(t,o)}}async executeAction(t){switch(typeof t=="string"?t:t.id){case"recheck-status":{if(this.#e.value.rechecking)return;let s=this.#e.value.selection.entryId;this.#e.patch({rechecking:!0});try{await this.refreshCatalog(!0)}finally{this.#l||this.#e.patch({rechecking:!1})}let n=this.#e.value;!this.#l&&n.selection.entryId===s&&n.resources.catalog.status==="ready"&&n.host.connected&&n.host.robotConnected&&n.coherence==="current"&&n.command==="failed"&&this.#e.patch({command:"idle",notice:I.statusRefreshed});return}case"stop":await this.#N("matic_robot","stop_intelligent_cleaning",{include_unmanaged:!0});return;case"resume":await this.#N("vacuum","send_command",{command:"resume"});return;case"run-plan":{let s=this.#e.value,n=s.selection.planId||s.resources.plans.value?.selectedPlan;if(!n||s.workflow!=="plan"||!s.planDraft.enabled||s.resources.plans.status!=="ready"||s.command!=="idle"||!Se(s))return;let o=s.selection.entryId,r=s.generation,a=s.selection.planId,l=s.planDraft,c=s.resources.plans.value?.plans.find(f=>f.id===n)?.nextRunPreview;if(!c||!/^[0-9a-f]{64}$/u.test(c.previewToken??"")){this.#e.patch({notice:I.planPreviewMissing});return}this.#e.patch({command:"pending",notice:null});let d=this.#T("plan-preflight");try{await this.loadPlans()}finally{this.#A("plan-preflight",d)}let u=this.#e.value,m=()=>{let f=this.#e.value;!this.#l&&f.selection.entryId===o&&f.generation===r&&f.command==="pending"&&this.#e.patch({command:"idle"})};if(d.signal.aborted||this.#l||u.selection.entryId!==o||u.generation!==r||u.workflow!=="plan"||u.selection.planId!==a||(u.selection.planId||u.resources.plans.value?.selectedPlan)!==n||u.planDraft!==l){m();return}if(u.resources.plans.status!=="ready"){m(),this.#e.patch({notice:I.planPreviewRefreshFailed});return}let h=u.resources.plans.value?.plans.find(f=>f.id===n)?.nextRunPreview;if(!h||h.blocker||!/^[0-9a-f]{64}$/u.test(h.previewToken??"")){m(),this.#e.patch({notice:I.planPreviewNone});return}if(!c||JSON.stringify(c)!==JSON.stringify(h)){m(),this.#e.patch({notice:I.planPreviewChanged});return}m(),await this.#N("matic_robot","run_selected_plan",{plan:n,preview_token:h.previewToken});return}case"clean-rooms":{await this.#Me();return}case"run-area":{let s=this.#e.value.selection.areaId;s&&await this.#N("matic_robot","clean_area",{area:s});return}case"review-area":this.#e.dispatch({type:"open-workflow",workflow:"areaReview"});return;case"save-area":await this.saveArea();return;case"save-plan":await this.savePlan();return;case"delete-plan":await this.deletePlan();return;case"delete-area":await this.deleteArea();return;case"reset-room-cadence":if(typeof t=="string")return;await this.#ie("plan-mutation",t.mode==="mop"?I.resetMopFailed:I.resetVacuumFailed,(s,n)=>s.resetRoomCadence(n,t));return}}async#Me(){if(this.#L)return;let t=this.#e.value,e=this.#O(t),s=Xe(t);if(!e||!s||s.key!==e.key||s.generation!==e.generation||s.floorKey!==e.floorKey||s.missionKey!==e.missionKey||s.preview.entryId!==e.entryId||s.preview.blocker||s.preview.rooms.length===0)return;this.#L=!0;let n=this.#T("room-preview");this.#K=this.#j(e),this.#e.patch({manualRoomPreview:p("loading",null),notice:null});try{let o=await this.#n.previewRoomSequence(e.entityId,e.rooms,e.overrideRoomSchedule,n.signal);if(n.signal.aborted||!this.#p(e)||o.entryId!==e.entryId)return;let r={key:e.key,generation:e.generation,floorKey:e.floorKey,missionKey:e.missionKey,preview:o};if(o.blocker||o.rooms.length===0){this.#e.patch({manualRoomPreview:p("ready",r),notice:I.roomPreviewBlocked});return}if(Vs(s.preview)!==Vs(o)){this.#e.patch({manualRoomPreview:p("ready",r),notice:I.roomPreviewChanged});return}if(this.#e.patch({manualRoomPreview:p("ready",r),notice:null}),!this.#p(e)||!Se(this.#e.value))return;await this.#N("matic_robot","clean_room_sequence",{rooms:e.rooms,use_room_schedule:!0,override_room_schedule:e.overrideRoomSchedule,return_to_base:!0,preview_token:o.previewToken})}catch(o){!W(o)&&!n.signal.aborted&&this.#p(e)&&this.#e.patch({manualRoomPreview:p("error",null,K(o,"preview-unavailable")),notice:I.roomPreviewFailed})}finally{this.#A("room-preview",n),this.#L=!1,this.#le()}}async#N(t,e,s){let n=this.#e.value,o=this.#s?.vacuumEntityId,r=e==="stop_intelligent_cleaning"||t==="vacuum"&&e==="return_to_base",a=t==="vacuum"&&e==="send_command"&&s.command==="resume";if(!o||n.selection.entryId!==this.#s?.entryKey||(r?!Ot(n):a?!$t(n):!Se(n)))return;let l=++this.#k,c=this.#s?.entryKey,d=()=>!this.#l&&l===this.#k&&c===this.#s?.entryKey,u=r?"settling":"starting";this.#d!==null&&window.clearTimeout(this.#d),this.#d=null,this.#e.patch({command:u,notice:null});try{if(await this.#n.service(t,e,s,o),!d())return;if(t==="matic_robot"&&(e==="clean_room_sequence"||e==="run_selected_plan")){this.#e.patch({command:"idle"}),this.refreshCatalog(!0);return}this.#e.patch({command:u}),this.#d!==null&&window.clearTimeout(this.#d),this.#d=window.setTimeout(()=>{this.#d=null,d()&&this.#e.value.command===u&&this.#e.patch({command:"idle"})},15e3)}catch(m){if(!d())return;this.#e.patch({command:"failed",notice:r?I.stopUnconfirmed:En(m)??I.actionUnconfirmed})}}dispose(){this.#l||(this.#l=!0,this.#o.dispose(),this.#B(!1),this.#$?.(),this.#$=null,this.#e.patch({manualRoomPreview:p("idle",null),rechecking:!1}),this.#Q(),this.#H(),this.#d!==null&&window.clearTimeout(this.#d),this.#d=null,this.#a.dispose(),this.#fe(),this.#n.dispose())}#fe(){this.#S?.dispose(),this.#S=null,this.#x=null,this.#y=null}};var Pn=i=>i.workflow==="none"?0:i.workflow!=="plan"?1:i.planView==="edit"&&i.planDraft.id!==null?3:2,js=i=>Pn(i)+(i.fullMap?1:0)+(i.precisionOpen?1:0)+(i.dialog?1:0),Ys=i=>{if(!i||typeof i!="object")return null;let t=i.maticMapLayer;if(!t||typeof t!="object")return null;let e=t.owner,s=t.depth;return typeof e=="string"&&Number.isInteger(s)&&Number(s)>=0?{owner:e,depth:Number(s)}:null},je=class{#e;#t=`matic-map-${crypto.randomUUID?.()||Math.random().toString(36).slice(2)}`;#n=0;#o=null;#a=!1;#i=!1;constructor(t){this.#e=t}start(){this.#o||(this.#n=js(this.#e.value),this.#o=this.#e.subscribe(t=>this.#r(t)),window.addEventListener("popstate",this.#s))}#r(t){let e=js(t);if(this.#a){this.#a=!1,this.#n=e;return}if(e<this.#n){let s=Ys(history.state);if(s?.owner===this.#t&&s.depth===this.#n){let n=e-this.#n;this.#n=e,this.#i=!0,history.go(n);return}}if(e>this.#n)for(let s=this.#n+1;s<=e;s+=1){let n=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...n,maticMapLayer:{owner:this.#t,depth:s}},"",window.location.href)}this.#n=e}#s=()=>{if(this.#i){this.#i=!1;return}if(!(this.#n<1)){if(Z(this.#e.value,{type:"dismiss-top-layer"})){let t=history.state&&typeof history.state=="object"?history.state:{};history.pushState({...t,maticMapLayer:{owner:this.#t,depth:this.#n}},"",window.location.href),this.#e.dispatch({type:"open-dialog",dialog:"discardDraft"});return}this.#a=!0,this.#e.dispatch({type:"dismiss-top-layer"})}};dismissTop(){if(this.#n<1)return!1;let t=Ys(history.state);return t?.owner===this.#t&&t.depth===this.#n?history.back():this.#e.dispatch({type:"dismiss-top-layer"}),!0}dispose(){this.#o?.(),this.#o=null,window.removeEventListener("popstate",this.#s),this.#n=0,this.#i=!1}};var Xs=[Me,Pe,Jt,Ee`
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
  `];var Gs=ae(xe),Ye=ae(Bt),Qs=ae(Je),en=i=>i.dataMode==="history"||i.floor.readOnly,yt=(i,t)=>{let e=(a,l,c)=>$e(t,a,l,c);if(!i.host.connected)return{title:e("v4_reconnecting","Reconnecting"),detail:e("v4_ha_offline","Home Assistant is offline"),icon:j,notable:!0};if(!i.host.administrator)return{title:e("v4_access_required","Access required"),detail:e("v4_admin_only","Administrator only"),icon:j,notable:!0};if(i.host.robotCount===0)return{title:e("v4_no_robot_short","No robot"),detail:e("v4_set_up_robot","Set up a robot"),icon:j,notable:!0};if(Re(i))return{title:e("v4_selected_robot_unavailable","Selected robot unavailable"),detail:e("v4_choose_another_robot","Choose another robot to open its map."),icon:j,notable:!0};if(!i.host.robotConnected)return{title:e("v4_robot_offline","Robot offline"),detail:e("v4_last_map_read_only","Last known map \xB7 read only"),icon:j,notable:!0};if(i.activity==="problem")return{title:e("v4_needs_attention","Needs attention"),detail:e("v4_check_robot","Check the robot"),icon:j,notable:!0};if(i.dataMode==="history"){let a=i.resources.history.value?.floors.find(d=>d.id===i.selection.floorId),l=a?.snapshots.findIndex(d=>d.id===i.selection.historyId)??-1,c=a?.snapshots.length??0;return{title:e("v4_saved_map","Saved map"),detail:l>=0?e("v4_read_only_position","Read only \xB7 {position} of {count}",{position:l+1,count:c}):e("v4_read_only","Read only"),icon:tt,notable:!1}}if(i.coherence==="verifying"||i.coherence==="booting")return{title:e("v4_locating","Locating"),detail:e("v4_finding_map","Finding the current map"),icon:ie,notable:!0};if((i.resources.entry?.activePlan||i.resources.entry?.runnerLocked)&&(i.activity==="idle"||i.activity==="docked"))return{title:e("v4_task_in_progress","Run in progress"),detail:i.coherence==="unavailable"||i.coherence==="blocked"?e("v4_task_map_unavailable","The live map is unavailable; the current clean continues."):i.activity==="docked"?e("v4_task_docked","Robot docked; the clean has not finished."):e("v4_task_waiting","Waiting for the clean to continue or finish."),icon:st,notable:!0};if(i.command==="starting"&&(i.activity==="idle"||i.activity==="docked"))return{title:e("v4_action_starting","Starting"),detail:e("v4_action_starting_detail","Waiting for the robot to begin"),icon:ie,notable:!0};let s=i.coherence==="unavailable"||i.coherence==="blocked",n=e("v4_active_map_unavailable","The live map is unavailable; new cleaning is disabled."),o=a=>s?`${a} \xB7 ${n}`:a;if(i.activity==="cleaning")return{title:e("v4_cleaning","Cleaning"),detail:o(e("v4_cleaning_progress","Cleaning in progress")),icon:ot,notable:!0};if(i.activity==="recharging"){let a=i.batteryPercent===null?e("v4_recharging_detail","Will resume automatically when ready"):e("v4_recharging_battery","Charging to resume \xB7 {percent}% battery",{percent:i.batteryPercent});return{title:e("v4_recharging","Charging to resume"),detail:o(a),icon:rs,notable:!0}}if(i.activity==="paused")return{title:e("v4_paused","Paused"),detail:o(e("v4_can_resume","Cleaning can resume")),icon:rt,notable:!0};if(i.activity==="returning")return{title:e("v4_returning","Returning"),detail:o(e("v4_going_dock","Going to the dock")),icon:ot,notable:!0};if(i.activity==="stopping")return{title:e("v4_stopping","Stopping"),detail:o(e("v4_waiting_robot","Waiting for the robot")),icon:rt,notable:!0};if(s)return{title:e("v4_map_unavailable","Map unavailable"),detail:e("v4_map_unavailable_status","Home Assistant can't show the map right now, so cleaning can't start."),icon:j,notable:!0};if(i.coherence==="degraded")return{title:e("v4_map_limited","Map limited"),detail:i.rechecking?e("v4_locating_rechecking","Checking again"):e("v4_cleaning_blocked","Cleaning can't start"),icon:ie,notable:!0,recheck:!0};let r=i.batteryPercent===null?e("v4_ready","Ready"):e("v4_battery","{percent}% battery",{percent:i.batteryPercent});return{title:i.activity==="docked"?e("v4_docked","Docked"):e("v4_ready","Ready"),detail:r,icon:ie,notable:!1}},gt=(i,t)=>{let e=(s,n)=>$e(t,s,n);switch(i.workflow){case"rooms":return{title:e("v4_choose_rooms","Choose rooms"),description:e("v4_choose_rooms_detail","Choose rooms on the map or in the list.")};case"draw":return{title:e("v4_draw_area","Draw an area"),description:e("v4_draw_area_detail","Outline or paint the area, then review it before saving.")};case"plans":return{title:e("v4_your_plans","Your plans"),description:e("v4_choose_plan_detail","Choose a plan to edit or run, or create a new one.")};case"plan":return{title:i.planDraft.id?e("v4_edit_plan","Edit plan"):e("v4_create_plan","Create a plan"),description:e("v4_plan_detail","Review rooms and cleaning settings.")};case"areaReview":return{title:e("v4_name_this_area","Name this area"),description:e("area_details_hint","Name the area and choose cleaning settings.")};case"history":return{title:e("v4_map_history","Map history"),description:e("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")};case"support":return{title:e("v4_map_diagnostics","Map diagnostics"),description:e("v4_map_support_detail","Details to share with support")};case"none":return en(i)?{title:e("v4_saved_map_read_only_title","Saved map is read only"),description:i.dataMode==="live"?e("v4_map_recovery_automatic","Cleaning controls return automatically when the live map is ready."):e("v4_saved_map_read_only_detail","Return to the live map to choose rooms, run a plan, or draw a custom area.")}:{title:e("v4_what_to_clean","Choose what to clean"),description:e("v4_clean_detail","Choose rooms, a saved plan, or a custom area.")}}},X=["peek","half","full"],xn={info:nt,success:as,warning:ls,error:cs},An={info:6e3,success:4e3,warning:6e3,error:1e4},Js={none:"half",rooms:"half",draw:"peek",plan:"full",plans:"full",areaReview:"half",history:"half",support:"full"},Tn=.5,In=100,$n=6,On=48,bt=".panel-top, .sheet-body, .workflow-body",Dn=["a[href]","button","input","label","select","textarea","summary",'[contenteditable]:not([contenteditable="false"])','[role="button"]','[role="link"]','[role="slider"]','[role="checkbox"]','[role="radio"]','[role="switch"]','[role="tab"]','[role="menuitem"]',`[tabindex]:not([tabindex="-1"]):not(${bt})`].join(","),tn=["button:not(:disabled)","a[href]","input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)","[tabindex]:not([tabindex='-1'])"].join(", "),sn=i=>!!i.querySelector(tn)||[...i.querySelectorAll("*")].some(t=>t.shadowRoot!==null&&sn(t.shadowRoot)),Ln=(i=document)=>{let t=i.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t},Zs=i=>!!(i&&i.isConnected&&i.offsetParent!==null),wt=class extends Ce{constructor(){super();this.state=V();this._measuredNarrow=!1;this._sheetOffset=0;this._overflowOpen=!1;this._helpOpen=!1;this._browserFullscreen=!1;this._sheetDetent="half";this._polite="";this._alert="";this.#t=null;this.#n=new Set;this._toast=null;this.#o=new it(this,()=>import("./workflow-panel-6TJ4VYZM.js"));this.#a=new it(this,async()=>new(await import("./outline-editor-TK2MAOWD.js")).OutlineEditor);this.#i=hs();this.#s=0;this.#u=0;this.#f=!1;this.#d=!1;this.#k=null;this.#_=null;this.#v=null;this.#m=null;this.#c=null;this.#g=null;this.#b=null;this.#P=null;this.#R=null;this.#w=null;this.#h=new Set;this.#C=null;this.#I=null;this.#l=()=>{this._browserFullscreen=this.#W()};this.#S=e=>{if(!this._overflowOpen)return;let s=this.renderRoot.querySelector(".overflow-wrap");(!s||!e.composedPath().includes(s))&&(this._overflowOpen=!1)};this.#L=()=>{this.#K(),this.#f=!1,this.#d=!1,this._toast=null};this.#ae=e=>{e.type==="pointerenter"?this.#f=!0:this.#d=!0,this.#r!==void 0&&(this.#K(),this.#u=Math.max(0,this.#s-Date.now()))};this.#U=e=>{e.type==="pointerleave"?this.#f=!1:e.currentTarget.contains(e.relatedTarget)||(this.#d=!1),this.#$()};this.#V=()=>{this.#L(),this.updateComplete.then(()=>this.#O())};this.#ye=()=>{this.#p({type:"set-notice",notice:null}),this.updateComplete.then(()=>this.#O())};this.#z=()=>{for(let e of this.renderRoot.querySelectorAll(bt)){let s=e.scrollHeight>e.clientHeight&&!sn(e);if(!s&&e.matches(":focus")){e.addEventListener("blur",this.#z,{once:!0});continue}let n=(o,r)=>s?e.setAttribute(o,r):e.removeAttribute(o);n("tabindex","0"),e.classList.contains("panel-top")&&(n("role","group"),n("aria-labelledby","workspace-title"))}};this.#X=e=>{if(!Z(this.state,{type:"open-workflow",workflow:"none"})){at(this.state.workflow);return}this.#b=e.currentTarget,this.#w="reload",this.#p({type:"open-dialog",dialog:"discardDraft"})};new ms(this,{container:()=>this.renderRoot?.querySelector(".draw-tools")??null,items:"button"})}static{this.properties={state:{attribute:!1},localize:{attribute:!1},dates:{attribute:!1},_measuredNarrow:{state:!0},_sheetOffset:{state:!0},_overflowOpen:{state:!0},_helpOpen:{state:!0},_browserFullscreen:{state:!0},_sheetDetent:{state:!0},_polite:{state:!0},_alert:{state:!0},_toast:{state:!0}}}static{this.styles=Xs}#e(e,s,n){return $e(this.localize,e,s,n,this.dates)}#t;#n;#o;#a;#i;#r;#s;#u;#f;#d;#k;#_;#v;#m;#c;#g;#b;#P;#R;#w;#h;#C;#I;#F(){let e=this.renderRoot;return e instanceof ShadowRoot?e.fullscreenElement??document.fullscreenElement:document.fullscreenElement}#l;#W(){let e=this.renderRoot,s=e.querySelector(".app"),n=e instanceof ShadowRoot?e.fullscreenElement:null;if(n)return n===s;let o=document.fullscreenElement;for(let r=this;r;){if(r===o)return!0;let a=r.getRootNode();r=a instanceof ShadowRoot?a.host:null}return!1}#S;connectedCallback(){super.connectedCallback(),this.#_=new ResizeObserver(([e])=>{if(!e)return;let s=e.contentRect.width<1024||e.contentRect.height<480;s!==this._measuredNarrow&&(this._measuredNarrow=s)}),this.#_.observe(this),window.addEventListener("pointerdown",this.#S,!0),document.addEventListener("fullscreenchange",this.#l),this.#v=new ResizeObserver(([e])=>{if(!e)return;let s=Math.ceil(e.target.getBoundingClientRect().height);s!==this._sheetOffset&&(this._sheetOffset=s)}),this.#m=new ResizeObserver(()=>this.#z()),this.#x(),this.#c=gs(()=>this.#x())}#x(){let e=window.matchMedia("(forced-colors: active)").matches,s=vs(this.renderRoot,{accent:"var(--ms-accent)",danger:"var(--ms-danger)",label:"var(--ms-on-accent)",card:"var(--ms-surface-card)",sunken:"var(--ms-surface-sunken)"}),[n,o,r,a,l]=Object.values(s).map(ys),c=v=>e||!v||!r?[]:bs(v,r),d=(v,g,E=a)=>e||!v||!a||!E?void 0:ws(v,g,[a,E]),u=v=>v?fs(v,1):"",[m,h]=c(n),[f,b]=c(o);this.style.setProperty("--ms-resolved-accent-fill",u(m)),this.style.setProperty("--ms-resolved-on-accent-fill",u(h)),this.style.setProperty("--ms-resolved-danger-fill",u(f)),this.style.setProperty("--ms-resolved-on-danger-fill",u(b)),this.style.setProperty("--ms-resolved-indicator",u(d(n,3,l))),this.style.setProperty("--ms-resolved-danger-text",u(d(o,4.5)))}disconnectedCallback(){this.#L(),this.#_?.disconnect(),this.#_=null,this.#v?.disconnect(),this.#v=null,this.#m?.disconnect(),this.#m=null,this.#c?.(),this.#c=null,this.#g=null,window.removeEventListener("pointerdown",this.#S,!0),document.removeEventListener("fullscreenchange",this.#l),super.disconnectedCallback()}#y(e,s){if(this.#n.has(e)){this.updateComplete.then(()=>this.#y(e,s));return}this.#n.add(e);let n=this[e]===s;this[e]=n?"":s,this.updateComplete.then(()=>{this.#n.delete(e),n&&!this[e]&&this.#y(e,s)})}willUpdate(e){if(this.#k=this.shadowRoot?.activeElement??null,!e.has("state"))return;let s=yt(this.state).title;this.#t!==null&&s!==this.#t&&this.#y("_polite",yt(this.state,this.localize).title),this.#t=s;let n=this.state.notice,o=e.get("state");n!==o?.notice&&(!n&&o?.notice?.tone==="success"&&o.workflow!==this.state.workflow||(this.#L(),n&&(this._toast=n,this.#u=An[n.tone],this.#y(n.tone==="error"?"_alert":"_polite",this.#e(n.key,n.fallback,n.placeholders)),this.updateComplete.then(()=>{if(this.state.notice!==n)return;let r=this.renderRoot.querySelector("[data-notice-toast]");this.#f=!!r?.matches(":hover"),this.#d=!!r?.contains(this.shadowRoot?.activeElement??null),this.#$()}))))}#$(){!this._toast||this.#r!==void 0||this.#f||this.#d||(this.#s=Date.now()+this.#u,this.#r=setTimeout(this.#L,this.#u))}#K(){clearTimeout(this.#r),this.#r=void 0}#L;#ae;#U;#V;#ye;#E(e,s,n){return w`${T(xn[e.tone])}<span class="notice-text">${this.#e(e.key,e.fallback,e.placeholders)}</span><button
      class="ms-btn ms-btn--icon"
      type="button"
      aria-label=${n}
      @click=${s}
    >${T(is)}</button>`}updated(e){let s=e,n=this.#k;this.#k=null,n&&(!n.isConnected||n.closest("[hidden]"))&&this.#O();let o=this.renderRoot.querySelector(".mobile-sheet");o!==this.#g&&(this.#v?.disconnect(),this.#g=o,o?this.#v?.observe(o):this._sheetOffset!==0&&(this._sheetOffset=0)),this.#m?.disconnect();for(let r of this.renderRoot.querySelectorAll(bt))for(let a of[r,...r.children])this.#m?.observe(a);if(s.has("_overflowOpen")&&this._overflowOpen&&this.updateComplete.then(()=>{this.renderRoot.querySelector("#map-options select, #map-options button")?.focus()}),s.has("_helpOpen")){if(this._helpOpen)this.updateComplete.then(()=>{this.renderRoot.querySelector(".help-dialog [data-dialog-initial-focus]")?.focus()});else if(s.get("_helpOpen")){let r=this.#R;this.#R=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>r?.focus({preventScroll:!0}))})}}if(e.has("state")){this.#Y();let r=e.get("state");if(r?.precisionOpen&&!this.state.precisionOpen&&this.#j()?.focus(),r?.fullMap&&!this.state.fullMap){let a=this.#P;this.#P=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??this.renderRoot.querySelector(".nav--menu")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})})}if(r&&!r.fullMap&&this.state.fullMap&&this.updateComplete.then(()=>{let a=this.#P;requestAnimationFrame(()=>{(this.renderRoot.querySelector(".workspace-toggle")??(a?.isConnected?a:null))?.focus({preventScroll:!0})})}),!r?.dialog&&this.state.dialog){let a=Ln(this.shadowRoot||document);a?.hasAttribute("data-dialog-launcher")&&(this.#b=a),this.updateComplete.then(()=>{(this.renderRoot.querySelector(".dialog [data-dialog-initial-focus]")??this.renderRoot.querySelector(".dialog button"))?.focus()})}else if(r?.dialog&&!this.state.dialog){r.dialog==="discardDraft"&&(this.#w=null,this.#D());let a=this.#b?.isConnected&&this.#b.hasAttribute("data-dialog-launcher")?this.#b:this.#me(r.dialog);this.#b=null,this.updateComplete.then(()=>{requestAnimationFrame(()=>{a?.focus({preventScroll:!0});let l=!document.activeElement||document.activeElement===document.body;!this.shadowRoot?.activeElement&&l&&this.#O()})})}r?r.workflow!==this.state.workflow&&(this._sheetDetent=Js[this.state.workflow],this.updateComplete.then(()=>this.#O())):this._sheetDetent=Js[this.state.workflow]}}#z;#O(){[".panel-heading h2",".action-bar .ms-btn--primary",".workspace-toggle"].map(e=>this.renderRoot.querySelector(e)).find(Zs)?.focus({preventScroll:!0})}#j(){let e=this.renderRoot.querySelector(".draw-brush");return Zs(e)?e:this.renderRoot.querySelector(xe)?.shadowRoot?.querySelector(".draw-brush")??null}#p(e){if(Z(this.state,e)){this.#w=e,this.#p({type:"open-dialog",dialog:"discardDraft"});return}this.dispatchEvent(new CustomEvent(ct,{detail:e,bubbles:!0,composed:!0}))}#le(e){if(e.enabled){if(e.id==="return-live"){this.#p({type:"set-history",historyId:null});return}if(e.id==="clear-draft"){this.#p({type:"clear-draft"});return}this.#te(e.id)}}#G(e,s){let n={type:"open-workflow",workflow:e};s instanceof HTMLElement&&Z(this.state,n)&&(this.#b=s),this.#p(n)}#Y(){let e=this.#i,{coherence:s,workflow:n}=this.state;!e||n==="none"&&(s==="booting"||s==="verifying")||(this.#i=null,n==="none"&&this.#h.has(e)&&this.#G(e))}#X;#ce(e){if(this.#o.request(),e!=="draw")return this.#o.status;this.#a.request();let s=this.#o.status,n=this.#a.status;return s==="failed"||n==="failed"?"failed":s===n?s:"loading"}#B(){let e=this.#w;if(this.#w=null,e==="reload"){at(this.state.workflow);return}e?.type==="select-plan"||e?.type==="select-area"?(this.#p({type:"patch-plan-draft",patch:{dirty:!1}}),this.#p({type:"patch-area-draft",patch:{dirty:!1}}),this.#p({type:"dismiss-top-layer"})):this.#p({type:"discard-draft"}),e&&e.type!=="dismiss-top-layer"&&queueMicrotask(()=>this.dispatchEvent(new CustomEvent(ct,{detail:e,bubbles:!0,composed:!0})))}#q(){this.#w=null,this.#ee(),this.#D()}#D(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".floor-switcher");e&&(e.value=this.state.selection.floorId);let s=this.renderRoot.querySelector(".robot-switcher");s&&(s.value=this.state.selection.entryId??"")})}#ee(){let e=this.state.dialog,s=e&&this.#b?.isConnected&&this.#b.hasAttribute("data-dialog-launcher")?this.#b:e?this.#me(e):null;this.#p({type:"dismiss-top-layer"}),s&&requestAnimationFrame(()=>s.focus({preventScroll:!0}))}#te(e){this.dispatchEvent(new CustomEvent(_s,{detail:typeof e=="string"?{id:e}:e,bubbles:!0,composed:!0}))}#ke(e){this.#p({type:"dismiss-top-layer"}),this.#te(e)}#Q(e){if(e.action==="discard"){this.#B();return}if(e.action==="delete-plan"||e.action==="delete-area"){this.#ke(e.action);return}let s=this.state.cadenceResetRequest;this.#p({type:"dismiss-top-layer"}),s&&this.#te({id:"reset-room-cadence",planId:s.planId,roomId:s.roomId,mode:s.mode})}#M(e){e!==this._sheetDetent&&(this._sheetDetent=e,this.#y("_polite",e==="peek"?this.#e("v4_workspace_height_peek","Cleaning panel, collapsed"):e==="half"?this.#e("v4_workspace_height_half","Cleaning panel, half height"):this.#e("v4_workspace_height_full","Cleaning panel, full height")))}#J(e,s=!1){let o=X.indexOf(this._sheetDetent)+e;s&&o>=X.length&&(o=0),o=Math.max(0,Math.min(X.length-1,o)),this.#M(X[o]??this._sheetDetent)}#se(e){let s=this.renderRoot.querySelector(".workspace")?.clientHeight??e.parentElement?.clientHeight??e.offsetHeight,n=parseFloat(getComputedStyle(this).fontSize)||16,o=[".sheet-grip",".sheet-tools",".action-bar"].map(l=>e.querySelector(l)?.offsetHeight??0).reduce((l,c)=>l+c,0)+n*.75,r=Math.min(s*.92,s-n*9),a=Math.min(s*.48,n*26,r);return{peek:Math.min(o,a),half:a,full:r}}#Z(){return this.renderRoot.querySelector(".mobile-sheet")}#de(e,s){e.style.transform=s;let n=this.renderRoot.querySelector("[data-notice-toast]");n&&(n.style.transform=s)}#ue(e){let s=e.currentTarget;for(let n of e.composedPath()){if(n===s)return!1;if(n instanceof Element&&n.matches(Dn))return!0}return!1}#ge(e){if(e.pointerType==="mouse"&&e.button!==0||this.#ue(e))return;let s=this.#Z();!s||this.#C||(this.#C={pointerId:e.pointerId,startY:e.clientY,startHeight:s.offsetHeight,heights:this.#se(s),samples:[{y:e.clientY,t:e.timeStamp}],moved:!1},e.currentTarget.setPointerCapture(e.pointerId),s.classList.add("dragging"))}#Re(e){let s=this.#C;if(!s||e.pointerId!==s.pointerId)return;let n=this.#Z();if(!n)return;let o=e.clientY-s.startY;for(!s.moved&&Math.abs(o)>$n&&(s.moved=!0),s.samples.push({y:e.clientY,t:e.timeStamp});s.samples.length>2&&e.timeStamp-(s.samples[1]?.t??0)>In;)s.samples.shift();if(!s.moved)return;let r=s.startHeight-s.heights.full,a=s.startHeight-s.heights.peek,l=Math.max(r,Math.min(a,o));this.#de(n,`translateY(${l}px)`)}#he(e){let s=this.#C;if(!s||e.pointerId!==s.pointerId)return;this.#C=null;let n=this.#Z();if(n&&(this.#de(n,""),n.classList.remove("dragging")),e.type==="pointercancel")return;if(!s.moved){this.#J(1,!0);return}let o=e.clientY-s.startY,r=X.indexOf(this._sheetDetent),a=s.samples[0],l=s.samples[s.samples.length-1],c=a&&l&&l!==a?(l.y-a.y)/Math.max(1,l.t-a.t):0;if(Math.abs(c)>Tn){let h=Math.max(0,Math.min(X.length-1,r+(c<0?1:-1)));this.#M(X[h]??this._sheetDetent);return}let d=s.startHeight-o,u=this._sheetDetent,m=Number.POSITIVE_INFINITY;for(let h of X){let f=Math.abs(s.heights[h]-d);f<m&&(m=f,u=h)}this.#M(u)}#T(e){for(let s of e.composedPath()){if(s===e.currentTarget)break;if(s instanceof HTMLElement&&s.scrollHeight>s.clientHeight&&/auto|scroll/u.test(getComputedStyle(s).overflowY))return s}return null}#A(e){if(e.pointerType==="mouse"||this.#ue(e))return;let s=this.#T(e);this.#I=s?.scrollTop?null:{pointerId:e.pointerId,startY:e.clientY,scroller:s,consumed:!1}}#H(e){let s=this.#I;if(!(!s||s.consumed||e.pointerId!==s.pointerId)){if(s.scroller?.scrollTop){this.#I=null;return}e.clientY-s.startY<On||(s.consumed=!0,this.#J(-1))}}#be(){this.#I=null}#ne(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}#Ee(e){this.#P=e.currentTarget,this.#p({type:this.state.fullMap?"exit-full-map":"enter-full-map"})}#oe(e){this._overflowOpen=!1,e&&this.updateComplete.then(()=>{this.renderRoot.querySelector(".overflow")?.focus()})}#Se(e){if(this.#oe(e==="fullscreen"),e==="support"){this.#G("support");return}let s=this.renderRoot.querySelector(".app");this.#F()?document.exitFullscreen():s?.requestFullscreen()}#re(){this.#p({type:"set-precision-open",value:!this.state.precisionOpen})}#pe(e){this.#R=e.currentTarget,this._helpOpen=!0}#we(e){let s=e;if(!ke(s.detail))return;if(Z(this.state,s.detail)){e.stopPropagation(),this.#p(s.detail);return}if(s.detail?.type!=="open-dialog")return;let n=s.composedPath().find(o=>o instanceof HTMLElement&&o.hasAttribute("data-dialog-launcher"));n instanceof HTMLElement&&(this.#b=n)}#me(e){return this.renderRoot.querySelector(Je)?.shadowRoot?.querySelector(`[data-dialog-launcher="${e}"]`)??null}#Ce(e){if(!ps(e)&&!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)&&e.key==="Escape"){if(e.preventDefault(),this._overflowOpen){this.#oe(!0);return}if(this._helpOpen){this._helpOpen=!1;return}if(this.state.dialog==="discardDraft"){this.#q();return}this.#p({type:"dismiss-top-layer"})}}#_e(e){if(e.key!=="Tab")return;let n=[...e.currentTarget.querySelectorAll(tn)],o=n[0],r=n.at(-1);if(!o||!r)return;let a=this.shadowRoot?.activeElement;e.shiftKey&&a===o?(e.preventDefault(),r.focus()):!e.shiftKey&&a===r&&(e.preventDefault(),o.focus())}#ie(){let e=this.renderRoot.querySelector(xe);(e?.shadowRoot?.querySelector(".map-root")??e)?.focus()}#Me(){this._sheetDetent==="peek"&&this.#Z()&&this.#M("half"),this.updateComplete.then(()=>this.#O())}#N(e,s,n){if(!("label"in e))return k;let o=e.labelKey?this.#e(e.labelKey,e.label,e.labelPlaceholders):e.label,r=!e.enabled&&e.reason?e.reasonKey?this.#e(e.reasonKey,e.reason,e.reasonPlaceholders):e.reason:null,a=e.id==="stop";return w`
      <button
        class=${`${s} ${e.kind==="danger"?"ms-btn--danger":""}`}
        type="button"
        aria-disabled=${e.enabled?k:"true"}
        aria-describedby=${r?n:k}
        aria-label=${a?this.#e("v4_stop_cleaning_label","Stop cleaning"):k}
        @click=${()=>this.#le(e)}
      >${o}</button>
      ${r?w`<p class="action-reason" id=${n}>${r}</p>`:k}
    `}#fe(e){let s=e.resources.plans.value?.rooms??e.resources.areas.value?.rooms??[];return us(e.locale,e.selection.roomIds.map(n=>s.find(o=>o.roomId===n)?.name??n))}#Ae(e,s,n){let o=this.#fe(e),r=s?.enabled&&e.workflow==="rooms"&&s.id==="clean-rooms"?e.planDraft.returnToBase&&o?this.#e("v4_rooms_summary_dock","{rooms} \xB7 returns to the dock",{rooms:o}):o:"";return w`
      <div class="action-bar">
        ${r?w`<p class="action-summary">${r}</p>`:k}
        ${s?this.#N(s,"ms-btn ms-btn--block ms-btn--lg ms-btn--primary","primary-reason"):k}
        ${n?this.#N(n,"ms-btn ms-btn--block ms-btn--lg ms-btn--secondary","secondary-reason"):k}
      </div>
    `}#ve(e,s,n=k){return w`
      <div class="host-state">
        <h3>${e}</h3>
        <p>${s}</p>
        ${n}
      </div>
    `}#Pe(e,s=!1){return s||this.#h.add(e),()=>{s||this.#G(e)}}#xe(e,s,n,o,r=!1){return w`
      <button
        class="ms-row"
        type="button"
        aria-disabled=${r?"true":k}
        @click=${this.#Pe(n,r)}
      >
        <span class="ms-row__lead">${T(s)}</span>
        <span class="ms-row__body"><strong>${e}</strong>${o?w`<small>${o}</small>`:k}</span>
        <span class="ms-row__trail">${T(Ie)}</span>
      </button>
    `}#$e(e){let s=e.resources.history.value?.floors||[],n=s.length?s.map((o,r)=>({id:o.active?"current":o.id,label:`${o.label||(o.active?this.#e("v4_current_floor","Current floor"):this.#e("v4_saved_floor","Saved floor {number}",{number:o.ordinal??r+1}))}${!o.active&&o.snapshots.length===0?` \xB7 ${this.#e("v4_floor_not_captured","No saved map for this floor yet")}`:""}`,disabled:!o.active&&o.snapshots.length===0})):[{id:e.selection.floorId,label:e.floor.displayName,disabled:!1}];return w`
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
    `}#Oe(e,s,n){let o=(y,C,_)=>this.#e(y,C,_);this.#h=new Set(["support"]);let r=()=>this.#xe(o("v4_map_history","Map history"),tt,"history",o("v4_map_history_detail","Saved maps show one floor each. They can't be edited and never show where the robot is now.")),a=()=>this.#xe(o("v4_map_diagnostics","Map diagnostics"),nt,"support",o("v4_map_support_detail","Details to share with support")),{host:l}=e;if(!l.connected)return this.#ve(o("v4_reconnecting_title","Reconnecting to Home Assistant"),o("v4_reconnecting_body","Cleaning controls come back when Home Assistant reconnects."));if(!l.administrator)return this.#ve(o("v4_admin_title","Administrator access required"),o("v4_admin_body","Ask a Home Assistant administrator to open this map."));if(l.robotCount===0)return this.#ve(o("v4_no_robot_title","No robot set up"),o("v4_no_robot_body","Add the Matic (Unofficial) integration to see a map here."),w`<a class="ms-btn ms-btn--secondary" href="/config/integrations/integration/matic_robot">${o("v4_open_integration","Open integration")}</a>`);if(Re(e))return this.#ve(o("v4_selected_robot_unavailable","Selected robot unavailable"),o("v4_choose_another_robot","Choose another robot to open its map."));if(!l.robotConnected)return w`
        ${this.#ve(o("v4_robot_offline_title","Robot offline"),o("v4_robot_offline_body","Showing the last known map. Cleaning comes back when the robot reconnects."))}
        <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
        <div class="shelf">${r()}${a()}</div>
      `;if(en(e))return w`
        <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
        <div class="shelf">
          ${r()}
          ${a()}
        </div>
      `;let c=e.coherence==="verifying"||e.coherence==="booting",d=e.resources.plans,u=d.value,m=u!==null&&u.rooms.length===0,h=u?.plans.length??0,f=d.status==="loading",b=d.status==="error",v=c||m,g=c?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):m?o("v4_no_rooms_reason","Can't clean rooms until you name them in the Matic app."):null,E=c?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):null,R=c?o("v4_reason_locating","Waiting for the robot to confirm which floor it is on."):o("v4_areas_quick_detail","Draw or choose a custom area");return w`
      ${e.activity==="problem"?this.#ve(o("v4_attention_title","The robot needs attention"),o("v4_attention_body","The robot reported a problem. Check it in the Matic app, then start a new clean.")):n.recheck?w`
          <div class="host-state">
            <p>${o("v4_map_limited_body","Home Assistant can show this map but can't confirm it well enough to start cleaning.")}</p>
            <button
              class="ms-btn ms-btn--secondary"
              type="button"
              aria-disabled=${e.rechecking?"true":k}
              @click=${()=>{this.state.rechecking||this.#te("recheck-status")}}
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
              <span class="ms-row__lead">${T(ie)}</span>
              <span class="ms-row__body">
                <strong>${o("v4_clean_rooms","Clean rooms")}</strong>
                <small>${g??o("v4_clean_rooms_hint","Choose rooms for this run")}</small>
              </span>
              <span class="ms-row__trail">${T(Ie)}</span>
            </button>
            <button
              class="ms-row ms-row--card"
              type="button"
              aria-disabled=${c?"true":k}
              @click=${this.#Pe("plans",c)}
            >
              <span class="ms-row__lead">${T(st)}</span>
              <span class="ms-row__body">
                <strong>${f?o("v4_plans_loading","Checking saved plans"):b?o("v4_plans_unavailable","Plans unavailable"):h?o("v4_run_a_plan","Run a plan"):o("v4_create_plan","Create a plan")}</strong>
                <small>${E??(f?o("v4_plans_loading_hint","Reading plans for this floor"):b?o("v4_plans_unavailable_hint","Try again to load your plans."):h?h===1?o("v4_saved_routine","1 saved plan"):o("v4_saved_routines","{count} saved plans",{count:h}):o("v4_no_plans_hint","Save a plan to repeat a set of rooms"))}</small>
              </span>
              <span class="ms-row__trail">${T(Ie)}</span>
            </button>
          </div>
        `}
      <h3 class="shelf-heading">${o("v4_more","Map tools")}</h3>
      <div class="shelf">
        ${this.#xe(o("v4_custom_areas","Clean custom area"),os,"draw",R,c)}
        ${r()}

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
    `}#De(e,s,n){if(e.workflow==="none")return this.#Oe(e,s,n);let o=this.#ce(e.workflow);return o!=="ready"?s&&e.workflow==="draw"?k:lt(o,this.localize,this.#X):w`<${Qs}
      .state=${e}
      .localize=${this.localize}
      .dates=${this.dates}
      .retry=${this.#X}
      @matic-workspace-intent=${this.#we}
    ></${Qs}>`}#Te(e){return w`
      <div class="panel-top">
        <div class="panel-heading">
          ${e.workflow!=="none"?w`
            <button
              class="panel-back ms-btn ms-btn--secondary"
              type="button"
              aria-label=${e.workflow==="plan"?this.#e("v4_back_to_plans","Back to plans"):this.#e("v4_back_to_all_tasks","Back to all tasks")}
              data-dialog-launcher="discardDraft"
              @click=${s=>this.#G(e.workflow==="plan"?"plans":"none",s.currentTarget)}
            >${T(Te)}<span class="ms-btn__label">${e.workflow==="plan"?this.#e("v4_your_plans","Your plans"):this.#e("v4_all_tasks","All tasks")}</span></button>
          `:k}
          <h2 id="workspace-title" tabindex="-1">${gt(e,this.localize).title}</h2>
        </div>
        ${e.notice?w`<div class="notice" data-notice-slot data-tone=${e.notice.tone}>${this.#E(e.notice,this.#ye,this.#e("v4_close","Close"))}</div>`:k}
      </div>
    `}#Ie(e,s,n){return w`
      <p class="panel-description">${gt(e,this.localize).description}</p>
      ${this.#De(e,s,n)}
    `}#Le(e,s){let o=gt(e,this.localize).title;return e.workflow==="rooms"&&e.selection.roomIds.length&&(o=this.#e("v4_rooms_selected_names","{count} selected \xB7 {rooms}",{count:e.selection.roomIds.length,rooms:this.#fe(e)})),this._sheetDetent!=="peek"?s.detail?`${s.title} \xB7 ${s.detail}`:s.title:s.notable?`${s.title} \xB7 ${o}`:o}#qe(){let e=(s,n)=>this.#e(s,n);return w`
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
    `}render(){let e=this.state,s=e.narrowHint||this._measuredNarrow,n=yt(e,this.localize),o=Re(e),r=Dt({...e,narrowHint:s}),a=Lt(e),l=!s&&r.id==="stop"?r:!s&&a?.id==="stop"?a:null,c=l&&l===r?null:r,d=e.workflow==="draw"&&e.dataMode==="live"?{id:"clear-draft",label:"Clear",labelKey:"v4_clear_drawing",kind:"neutral",enabled:e.draw.circles.length>0||!!e.draw.outline?.points.length}:null,u=l&&l===a?null:a??d,m=e.fullMap&&(e.coherence==="verifying"||e.coherence==="booting"),h=e.fullMap||e.host.administrator&&e.host.robotCount>0&&e.map.available,f=e.cadenceResetRequest?e.resources.plans.value?.rooms.find(_=>_.roomId===e.cadenceResetRequest?.roomId):void 0,b=e.cadenceResetRequest?e.resources.plans.value?.plans.find(_=>_.id===e.cadenceResetRequest?.planId)?.rooms.find(_=>_.roomId===e.cadenceResetRequest?.roomId):void 0,v=e.workflow==="plan",g=e.dialog==="discardDraft"?{title:v?this.#e("v4_discard_plan","Discard plan changes?"):this.#e("v4_discard_area","Discard area changes?"),detail:v?this.#e("v4_discard_plan_detail","Your plan changes have not been saved. Keep editing or discard them."):this.#e("v4_discard_area_detail","Your area changes have not been saved. Keep editing or discard them."),cancelLabel:this.#e("v4_keep_area_editing","Keep editing"),confirmLabel:this.#e("v4_discard","Discard"),action:"discard"}:e.dialog===null?void 0:this.#o.value?.dialogCopy(e.dialog,this.localize,f?.name||e.cadenceResetRequest?.roomId||"room",b?.cadence?.scope==="shared",e.cadenceResetRequest?.mode,At(e)),E=s&&!e.fullMap?`--map-sheet-offset:${this._sheetOffset}px`:"--map-sheet-offset:0px",R=s&&e.workflow==="draw",y=e.precisionOpen&&e.workflow==="draw",C=this._toast&&(this._toast.tone==="success"||this._toast.tone==="error"||e.fullMap||s&&this._sheetDetent==="peek")?this._toast:null;return w`
      <div class=${`root ${s?"narrow":"wide"}`} @keydown=${this.#Ce}>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#ie}>${this.#e("v4_skip_to_map","Skip to the map")}</button>
        <button class="skip-link ms-btn ms-btn--primary" type="button" @click=${this.#Me}>${this.#e("v4_skip_to_workspace","Skip to the panel")}</button>
        <div class="app" ?inert=${!!g||this._helpOpen}>
          <header class="app-bar">
            ${e.precisionOpen?k:w`
              <button
                class="nav nav--menu ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                title=${this.#e("v4_open_navigation","Open Home Assistant sidebar")}
                @click=${this.#ne}
              >${T(es)}</button>
            `}

            ${e.precisionOpen?w`
              <button
                class="nav ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_back","Back")}
                @click=${()=>this.#p({type:"dismiss-top-layer"})}
              >${T(Te)}</button>
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
              >${T(ts)}</button>
            `:k}
            <div class="overflow-wrap">
              <button
                class="overflow ms-btn ms-btn--icon"
                type="button"
                aria-label=${this.#e("v4_map_options","Map options")}
                aria-expanded=${String(this._overflowOpen)}
                aria-controls="map-options"
                @click=${()=>{this._overflowOpen=!this._overflowOpen}}
              >${T(Zt)}</button>
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
              <${Gs}
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
              </${Gs}>
              ${!s&&y?w`
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
                    >${T(Te)}</button>
                  `:k}
                  <span class="sheet-status">${this.#Le(e,n)}</span>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_more","Expand panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="full"?"true":k}
                    @click=${()=>this.#J(1)}
                  >${T(ss)}</button>
                  <button
                    class="ms-btn ms-btn--icon ms-btn--sm"
                    type="button"
                    aria-label=${this.#e("v4_show_less","Collapse panel")}
                    aria-controls="sheet-panel"
                    aria-disabled=${this._sheetDetent==="peek"?"true":k}
                    @click=${()=>this.#J(-1)}
                  >${T(ns)}</button>
                </div>
                ${R?w`
                  <div class="sheet-tools">
                    ${lt(this.#ce("draw"),this.localize,this.#X)}
                    ${ds(e,{intent:_=>this.#p(_),openBrush:()=>this.#re(),t:(_,D,$)=>this.#e(_,D,$)},"grid")}
                    ${y?w`
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
                  <span class="status-icon" aria-hidden="true">${T(n.icon)}</span>
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
                class=${`full-map-hud ms-surface ms-surface--floating ${a?"has-secondary":""} ${!s&&(e.workflow==="draw"||e.workflow==="rooms"&&e.selection.roomIds.length>0)?"above-dock":""}`}
                aria-label=${this.#e("v4_robot_status_and_action","Robot status and action")}
              >
                <span class="hud-copy"><strong>${n.title}</strong><small>${n.detail}</small></span>
                ${m&&r.id!=="stop"?k:this.#N(r,"ms-btn ms-btn--lg ms-btn--primary","hud-reason")}
                ${a&&(!m||a.id==="stop")?this.#N(a,"ms-btn ms-btn--lg ms-btn--secondary","hud-secondary-reason"):k}
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
          ?inert=${!!g||this._helpOpen}
          @pointerenter=${this.#ae}
          @focusin=${this.#ae}
          @pointerleave=${this.#U}
          @focusout=${this.#U}
        >${C?this.#E(C,this.#V,this.#e("v4_hide_notification","Hide notification")):k}</div>

        <div class="sr-only" aria-live="polite" aria-atomic="true">${this._polite}</div>
        <div class="sr-only" role="alert" aria-atomic="true">${this._alert}</div>

        ${this._helpOpen?this.#qe():k}

        ${g?w`
          <div class="dialog-backdrop">
            <section
              class="dialog ms-surface ms-surface--overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title"
              aria-describedby="dialog-detail"
              @keydown=${this.#_e}
            >
              <h2 id="dialog-title">${g.title}</h2>
              <div id="dialog-detail">
                <p>${g.detail}</p>
                ${g.consequence?w`<p>${g.consequence}</p>`:k}
              </div>
              <div class="dialog-actions">
                <button
                  class="ms-btn ms-btn--secondary"
                  type="button"
                  data-dialog-initial-focus
                  @click=${e.dialog==="discardDraft"?this.#q:this.#ee}
                >${g.cancelLabel}</button>
                <button
                  class="discard ms-btn ms-btn--primary ms-btn--danger"
                  type="button"
                  @click=${()=>this.#Q(g)}
                >${g.confirmLabel}</button>
              </div>
            </section>
          </div>
        `:k}
      </div>
    `}};customElements.get(pe)||customElements.define(pe,wt);var nn=ae(pe),ge=new WeakMap,qn={},Wn=3e4,_t=(i,t)=>{ge.get(i)===t&&ge.delete(i)},kt=class extends Ce{constructor(){super(...arguments);this.narrow=!1;this._workspace=V();this.#e=new Oe;this.#t=new Tt(this._workspace);this.#n=null;this.#o=null;this.#a=null;this.#i=null;this.#r=null;this.#s=null}static{this.styles=[Me,Pe,Ee`
:host { display: block; block-size: 100%; }
`]}static{this.properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_workspace:{state:!0}}}#e;#t;#n;#o;#a;#i;#r;#s;#u(e=this.hass,s=this.panel){let n=this.#t.value.selection;return n.entrySource==="user"?this.#e.project(e,s,n.entryId):this.#e.project(e,s)}#f(){let e=this.hass,s=e?.loadBackendTranslation;if(!e||typeof s!="function")return;let n=e.connection??qn,o=e.language??"";ge.get(n)!==o&&(ge.set(n,o),Promise.resolve().then(()=>s.call(e,"common","matic_robot")).catch(()=>{if(ge.get(n)===o){if(!this.isConnected){_t(n,o);return}this.#s&&clearTimeout(this.#s.timer),this.#s={owner:n,language:o,timer:setTimeout(()=>{this.#s=null,_t(n,o),this.#f()},Wn)}}}))}shouldUpdate(e){if(this.#f(),!e.has("hass")||[...e.keys()].some(n=>n!=="hass"))return!0;let s=e.get("hass");return s?.connection!==this.hass?.connection||s?.localize!==this.hass?.localize?!0:this.#u()!==this.#n}connectedCallback(){super.connectedCallback(),this.#f(),this.#o=this.#t.subscribe(e=>{if(this._workspace=e,e.selection.entryId!==this.#n?.entryKey){let s=this.#u();s!==this.#n&&(this.#n=s,this.#i?.sync(s))}}),this.#d()}disconnectedCallback(){this.#s&&(clearTimeout(this.#s.timer),_t(this.#s.owner,this.#s.language),this.#s=null),this.#o?.(),this.#o=null,this.#k(),super.disconnectedCallback()}#d(){if(!(!this.isConnected||this.#i)&&(this.#n=this.#u(),this.#a=new qe(()=>this.hass),this.#i=new Ve(this.#t,this.#a,this.hass?.connection??null),this.#r=new je(this.#t),this.#r.start(),this.#n)){this.#i.sync(this.#n);let{host:e}=this.#n;e.connected&&e.administrator&&e.robotCount>0&&this.#i.refreshCatalog(this.#t.value.selection.floorId==="current")}}#k(){this.#r?.dispose(),this.#r=null,this.#i?.dispose(),this.#i=null,this.#a=null}willUpdate(e){if(e.has("hass")||e.has("panel")){let s=e.get("hass"),n=e.has("hass")&&s?.connection!==this.hass?.connection,o=this.#u(),r=o!==this.#n;r&&(this.#n=o),n?(this.#k(),this.#d()):(r||e.has("panel"))&&this.#i?.sync(o)}e.has("narrow")&&this.#t.value.narrowHint!==this.narrow&&this.#t.dispatch({type:"set-narrow-hint",value:this.narrow})}#_(e){if(!ke(e.detail))return;e.stopPropagation();let s=e.detail;if(s.type==="dismiss-top-layer"||s.type==="exit-full-map"){this.#r?.dismissTop()||this.#t.dispatch(s);return}if(s.type==="open-workflow"&&s.workflow!=="none"){this.#i?.openWorkflow(s.workflow);return}if(s.type==="set-floor"){this.#i?.selectFloor(s.floorId);return}if(s.type==="select-entry"){if(!this._workspace.robots.some(n=>n.entryId===s.entryId)||this.#e.project(this.hass,this.panel,s.entryId).entryKey!==s.entryId)return;this.#t.dispatch(s);return}if(s.type==="set-history"){this.#i?.selectHistory(s.historyId);return}if(s.type==="select-plan"){this.#i?.selectPlan(s.planId);return}if(s.type==="set-plan-enabled"){this.#i?.setPlanEnabled(s.enabled);return}if(s.type==="select-area"){this.#i?.selectArea(s.areaId),s.workflow==="areaReview"&&this.#i?.openWorkflow("areaReview");return}this.#t.dispatch(s)}#v(e){e.stopPropagation(),typeof e.detail?.id=="string"&&(e.detail.id==="reset-room-cadence"&&"planId"in e.detail&&"roomId"in e.detail&&"mode"in e.detail?this.#i?.executeAction(e.detail):this.#i?.executeAction(e.detail.id),this.dispatchEvent(new CustomEvent("matic-map-v4-action-requested",{detail:{id:e.detail.id},bubbles:!0,composed:!0})))}getWorkspaceSnapshot(){return this.#t.value}getRequestDiagnostics(){return Object.freeze({http:this.#a?.requestDiagnostics()??null,workspace:this.#i?.workspaceDiagnostics()??null})}render(){return w`
      <${nn}
        .state=${this._workspace}
        .localize=${this.hass?.localize}
        .dates=${this.#n?.dates}
        @matic-workspace-intent=${this.#_}
        @matic-workspace-action=${this.#v}
      ></${nn}>
    `}};customElements.get(Ze)||customElements.define(Ze,kt);export{Oe as a,ae as b,w as c,kt as d};
/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
