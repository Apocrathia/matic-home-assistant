import{a as u}from"./chunk-CEDW6BZF.js";import{h as c}from"./chunk-HFV2NO5P.js";import{Q as m,x as p}from"./chunk-55QOUSBC.js";import{pa as t,ta as n}from"./chunk-HJIYWYJF.js";var d=class{constructor(a){this.menu=new u(a,".overflow-wrap",".overflow")}render({state:a,narrow:b,t:e,intent:i,diagnostics:y}){let s=(o,l,_)=>t`
<button class="ms-row ms-row--menu" type="button" role="menuitemradio" aria-checked=${String(o)} data-selected=${o?"true":n} tabindex="-1" @click=${_}><span>${l}</span>${o?m(p):n}</button>
`,r=(o,l)=>s(a.quality===o,l,()=>i({type:"set-quality",quality:o}));return t`
<div id="map-options" class="overflow-menu ms-surface ms-surface--overlay" role="menu" aria-label=${e("v4_map_options","Map options")}>
${b?t`
<div role="group" aria-labelledby="menu-display">
<p class="menu-heading" id="menu-display" role="presentation">${e("v4_map_display","Map display")}</p>
${c(a)==="top"?t`
${s(a.appearance==="photo",e("map_style_photo","Photo"),()=>i({type:"set-appearance",appearance:"photo"}))}
${s(a.appearance==="rooms",e("v4_room_colours","Room colors"),()=>i({type:"set-appearance",appearance:"rooms"}))}
`:n}
<button
class="ms-row ms-row--menu"
type="button"
role="menuitemcheckbox"
aria-checked=${String(a.labelsVisible)}
tabindex="-1"
@click=${()=>i({type:"toggle-labels"})}
><span>${e("v4_room_names","Room names")}</span><span class="ms-switch" aria-checked=${String(a.labelsVisible)} aria-hidden="true"></span></button>
</div>
`:n}
<div role="group" aria-labelledby="menu-detail">
<p class="menu-heading" id="menu-detail" role="presentation">${e("map_quality_label","Map detail")}</p>
${r("auto",e("map_quality_auto","Auto detail"))}
${r("efficient",e("map_quality_efficient","Efficient"))}
${r("balanced",e("map_quality_balanced","Balanced"))}
${r("maximum",e("map_quality_maximum","Maximum"))}
</div>
<button class="ms-row ms-row--menu" type="button" role="menuitem" tabindex="-1" @click=${()=>{this.menu.close(!1),y()}}>${e("v4_map_diagnostics","Map diagnostics")}</button>
</div>
`}};export{d as MapOptions};
