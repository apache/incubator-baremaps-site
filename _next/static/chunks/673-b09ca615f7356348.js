(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{4673:function(e,t,n){"use strict";n.d(t,{Z:function(){return C},c:function(){return O}});var r=n(5893),o=n(7294),s=n(6010),a=n(4613),i=n.n(a),l=n(4707),c=n.n(l);function u(e){var t,n,r,o;e=Object.assign({show:!0,onToggle:function(){}},e),this._btn=((t=document.createElement("button")).className="maplibregl-ctrl-icon maplibregl-ctrl-boundaries",t.type="button",t["aria-label"]="Inspect",t),this._btn.onclick=e.onToggle,this.elem=(n=this._btn,r=e.show,(o=document.createElement("div")).className="maplibregl-ctrl maplibregl-ctrl-group",o.appendChild(n),r||(o.style.display="none"),o)}function p(e){if(!(this instanceof p))throw Error("MaplibreTileBoundaries needs to be called with the new keyword");this.options=Object.assign({showTileBoundariesButton:!0,tileBoundaries:!1},e),this._tileBoundaries=this.options.tileBoundaries,this._toggle=new u({show:this.options.showTileBoundariesButton,onToggle:this.toggleTileBoundaries.bind(this)})}u.prototype.setShowTileBoundariesIcon=function(){this._btn.className="maplibregl-ctrl-icon maplibregl-ctrl-show-boundaries"},u.prototype.setHideTileBoundariesIcon=function(){this._btn.className="maplibregl-ctrl-icon maplibregl-ctrl-hide-boundaries"},p.prototype.toggleTileBoundaries=function(){this._tileBoundaries=!this._tileBoundaries,this.render()},p.prototype.render=function(){this._tileBoundaries?(this._map.showTileBoundaries=!0,this._toggle.setHideTileBoundariesIcon()):(this._map.showTileBoundaries=!1,this._toggle.setShowTileBoundariesIcon())},p.prototype.onAdd=function(e){return this._map=e,this.render(),this._toggle.elem},p.prototype.onRemove=function(){this._map=void 0};var h=n(1221),f=n.n(h),d=n(9603),y=n(9417),g=n(3180),_=n.n(g);let m=e=>{let{url:t,map:n}=e,[a,l]=(0,o.useState)(""),[c,u]=(0,o.useState)([]),[p,h]=(0,o.useState)(null),[f,g]=(0,o.useState)(!1),m=async e=>{if(l(e.target.value),e.target.value.length<3){u([]),g(!1);return}try{let n=await fetch(t+"?"+new URLSearchParams({queryText:e.target.value}),{method:"GET"}),r=await n.json();u(r.results.slice(0,10)),g(!1)}catch(e){g(!0)}},b=async e=>{if(e.preventDefault(),c.length>0){let e=c[0].data;v(e)}},v=(0,o.useCallback)(e=>{if(!n)return;p&&p.remove();let t=new(i()).Marker().setLngLat([e.longitude,e.latitude]).addTo(n);h(t),n.panTo([e.longitude,e.latitude]),u([]),l(e.name)},[n,p]);return(0,r.jsxs)("div",{className:(0,s.Z)(_()["ctrl-container"],"maplibregl-ctrl-top-left"),children:[(0,r.jsxs)("div",{className:(0,s.Z)(_()["ctrl-group"],"maplibregl-ctrl maplibregl-ctrl-group"),children:[(0,r.jsx)(d.G,{icon:y.wn1,className:_()["search-icon"]}),(0,r.jsx)("form",{onSubmit:b,className:_()["search-form"],children:(0,r.jsx)("input",{className:(0,s.Z)(_().search),type:"text",placeholder:"Search",value:a,onChange:e=>m(e)})})]}),(c.length>0||f)&&(0,r.jsx)("div",{className:(0,s.Z)(_()["ctrl-group-dropdown"],"maplibregl-ctrl maplibregl-ctrl-group"),children:f?(0,r.jsx)("div",{className:_()["search-error"],children:"An error occured while searching..."}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("ul",{className:_()["search-results"],children:c.map((e,t)=>(0,r.jsxs)("li",{className:_()["search-result"],onClick:()=>v(e.data),children:[(0,r.jsx)("div",{className:_()["search-result-name"],children:e.data.name}),(0,r.jsx)("div",{className:_()["search-result-country"],children:e.data.countryCode})]},t))}),(0,r.jsx)("small",{className:_().attribution,children:"\xa9 GeoNames"})]})})]})},b=[{name:"Default",styleUrl:"/mapStyles/default.json"},{name:"Light",styleUrl:"/mapStyles/light.json"},{name:"Dark",styleUrl:"/mapStyles/dark.json"},{name:"Achromatomaly",styleUrl:"/mapStyles/achromatomaly.json"},{name:"Achromatopsia",styleUrl:"/mapStyles/achromatopsia.json"},{name:"Deuteranomaly",styleUrl:"/mapStyles/deuteranomaly.json"},{name:"Deuteranopia",styleUrl:"/mapStyles/deuteranopia.json"},{name:"Protanomaly",styleUrl:"/mapStyles/protanomaly.json"},{name:"Protanopia",styleUrl:"/mapStyles/protanopia.json"},{name:"Tritanomaly",styleUrl:"/mapStyles/tritanomaly.json"},{name:"Tritanopia",styleUrl:"/mapStyles/tritanopia.json"}];var v=n(1650),j=n.n(v);let w=e=>{let{map:t,mapStyles:n}=e;return(0,r.jsx)("div",{className:(0,s.Z)(j()["ctrl-container"],"maplibregl-ctrl-top-left"),children:(0,r.jsxs)("div",{className:(0,s.Z)(j()["select-container"],"maplibregl-ctrl maplibregl-ctrl-group"),children:[(0,r.jsx)(d.G,{icon:y.re8,className:j().icon}),(0,r.jsx)("select",{className:j()["style-select"],onChange:e=>{let r=n.find(t=>t.name===e.target.value);r&&t.setStyle(r.styleUrl)},children:n.map(e=>(0,r.jsx)("option",{value:e.name,children:e.name},e.name))})]})})};var k=n(7297),S=n.n(k);let x=e=>{let{map:t}=e;return(0,r.jsx)("div",{className:(0,s.Z)(S()["ctrl-container"],"maplibregl-ctrl-top-left"),children:(0,r.jsxs)("div",{className:(0,s.Z)(S()["select-container"],"maplibregl-ctrl maplibregl-ctrl-group"),children:[(0,r.jsx)(d.G,{icon:y.BCn,className:S().icon}),(0,r.jsx)("select",{className:S()["style-select"],onChange:e=>{t.setLayoutProperty("point_label","text-field",["coalesce",["get",e.target.value],["get","name"]])},children:[{name:"Default",code:"name"},{name:"Arabic",code:"name:ar"},{name:"Bengali",code:"name:bn"},{name:"Chinese",code:"name:zh"},{name:"English",code:"name:en"},{name:"French",code:"name:fr"},{name:"German",code:"name:de"},{name:"Hindi",code:"name:hi"},{name:"Italian",code:"name:it"},{name:"Japanese",code:"name:ja"},{name:"Korean",code:"name:ko"},{name:"Portuguese",code:"name:pt"},{name:"Russian",code:"name:ru"},{name:"Spanish",code:"name:es"}].map(e=>(0,r.jsx)("option",{value:e.code,children:e.name},e.name))})]})})},O=()=>[new(i()).NavigationControl({}),new(c())({showMapPopup:!0,showMapPopupOnHover:!1,showInspectMapPopupOnHover:!1,popup:new(i()).Popup({closeButton:!0,closeOnClick:!0,maxWidth:"none"})}),new p({showBoundaries:!1})];function C(e){let{longitude:t=6.625,latitude:n=46.51,zoom:a=14,mapStyle:l="https://demo.baremaps.com/style.json",getMapStyle:c,mapOptions:u={},getControls:p=O,geocoder:h=!0,ipToLoc:d=!0,styleSelect:y=!1,languageSelect:g=!1,rounded:_=!0,style:v={}}=e,j=(0,o.useRef)(null),[k,S]=(0,o.useState)(null);return(0,o.useEffect)(()=>{"unavailable"===i().getRTLTextPluginStatus()&&i().setRTLTextPlugin("https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.min.js",null,!0);let e=async()=>{if(d)try{let e=await fetch("https://demo.baremaps.com/api/iploc"),r=await e.json();r.length>0&&(t=r[0].longitude,n=r[0].latitude)}catch(e){}let e=new(i()).Map({container:j.current,style:void 0!==c?await c():l,center:[t,n],zoom:a,...u});p().forEach(t=>{e.addControl(t)}),S(e)};k||e()},[]),(0,r.jsxs)("div",{className:(0,s.Z)(f().wrap,_?f().rounded:""),style:v,children:[h&&(0,r.jsx)(m,{url:"https://demo.baremaps.com/api/geocoder",map:k}),y&&(0,r.jsx)(w,{map:k,mapStyles:b}),g&&(0,r.jsx)(x,{map:k}),(0,r.jsx)("div",{ref:j,className:f().map})]})}},4707:function(e,t,n){"use strict";var r;e.exports=(function e(t,o,s){function a(l,c){if(!o[l]){if(!t[l]){var u=void 0;if(!c&&u)return r(l,!0);if(i)return i(l,!0);throw(u=Error("Cannot find module '"+l+"'")).code="MODULE_NOT_FOUND",n(9613)}u=o[l]={exports:{}},t[l][0].call(u.exports,function(e){return a(t[l][1][e]||e)},u,u.exports,e,t,o,s)}return o[l].exports}for(var i=void 0,l=0;l<s.length;l++)a(s[l]);return a})({1:[function(e,t,n){e=e("./lib/MaplibreInspect"),t.exports=e},{"./lib/MaplibreInspect":3}],2:[function(e,t,n){function r(e){var t,n;e=Object.assign({show:!0,onToggle:function(){}},e),this._btn=((n=document.createElement("button")).className="maplibregl-ctrl-icon maplibregl-ctrl-inspect",n.type="button",n["aria-label"]="Inspect",n),this._btn.onclick=e.onToggle,this.elem=(t=this._btn,n=e.show,(e=document.createElement("div")).className="maplibregl-ctrl maplibregl-ctrl-group",e.appendChild(t),n||(e.style.display="none"),e)}r.prototype.setInspectIcon=function(){this._btn.className="maplibregl-ctrl-icon maplibregl-ctrl-inspect"},r.prototype.setMapIcon=function(){this._btn.className="maplibregl-ctrl-icon maplibregl-ctrl-map"},t.exports=r},{}],3:[function(e,t,n){var r=e("./stylegen"),o=e("./InspectButton"),s=e("lodash.isequal"),a=e("./renderPopup"),i=e("./colors");function l(e){if(!(this instanceof l))throw Error("MaplibreInspect needs to be called with the new keyword");var t=null;window.maplibregl?t=new window.maplibregl.Popup({closeButton:!1,closeOnClick:!1}):e.popup||console.error("Maplibre GL JS can not be found. Make sure to include it or pass an initialized MaplibreGL Popup to MaplibreInspect if you are using moduleis."),this.options=Object.assign({showInspectMap:!1,showInspectButton:!0,showInspectMapPopup:!0,showMapPopup:!1,showMapPopupOnHover:!0,showInspectMapPopupOnHover:!0,blockHoverPopupOnClick:!1,backgroundColor:"#fff",assignLayerColor:i.brightColor,buildInspectStyle:r.generateInspectStyle,renderPopup:a,popup:t,selectThreshold:5,useInspectStyle:!0,queryParameters:{},sources:{}},e),this.sources=this.options.sources,this.assignLayerColor=this.options.assignLayerColor,this.toggleInspector=this.toggleInspector.bind(this),this._popup=this.options.popup,this._popupBlocked=!1,this._showInspectMap=this.options.showInspectMap,this._onSourceChange=this._onSourceChange.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onRightClick=this._onRightClick.bind(this),this._onStyleChange=this._onStyleChange.bind(this),this._originalStyle=null,this._toggle=new o({show:this.options.showInspectButton,onToggle:this.toggleInspector.bind(this)})}l.prototype.toggleInspector=function(){this._showInspectMap=!this._showInspectMap,this.render()},l.prototype._inspectStyle=function(){var e=r.generateColoredLayers(this.sources,this.assignLayerColor);return this.options.buildInspectStyle(this._map.getStyle(),e,{backgroundColor:this.options.backgroundColor})},l.prototype.render=function(){var e;this._showInspectMap?(this.options.useInspectStyle&&this._map.setStyle(Object.assign(e=this._inspectStyle(),{metadata:Object.assign({},e.metadata,{"maplibregl-inspect:inspect":!0})})),this._toggle.setMapIcon()):this._originalStyle&&(this._popup&&this._popup.remove(),this.options.useInspectStyle&&this._map.setStyle(this._originalStyle),this._toggle.setInspectIcon())},l.prototype._onSourceChange=function(e){var t=this.sources,n=this._map,r=n.getStyle(),o=Object.keys(r.sources),r=Object.assign({},t);"visibility"!==e.sourceDataType&&e.isSourceLoaded&&(Object.keys(n.style.sourceCaches).forEach(function(e){var r=n.style.sourceCaches[e]||{_source:{}},o=r._source.vectorLayerIds;o?t[e]=o:"geojson"===r._source.type&&(t[e]=[])}),Object.keys(t).forEach(function(e){-1===o.indexOf(e)&&delete t[e]}),!s(r,t)&&0<Object.keys(t).length&&this.render())},l.prototype._onStyleChange=function(){var e=this._map.getStyle();e.metadata&&e.metadata["maplibregl-inspect:inspect"]||(this._originalStyle=e)},l.prototype._onRightClick=function(){this.options.showMapPopupOnHover||this.options.showInspectMapPopupOnHover||this.options.blockHoverPopupOnClick||this._popup&&this._popup.remove()},l.prototype._onMousemove=function(e){var t;if(this._showInspectMap){if(!this.options.showInspectMapPopup||"mousemove"===e.type&&!this.options.showInspectMapPopupOnHover)return;"click"===e.type&&this.options.showInspectMapPopupOnHover&&this.options.blockHoverPopupOnClick&&(this._popupBlocked=!this._popupBlocked)}else{if(!this.options.showMapPopup||"mousemove"===e.type&&!this.options.showMapPopupOnHover)return;"click"===e.type&&this.options.showMapPopupOnHover&&this.options.blockHoverPopupOnClick&&(this._popupBlocked=!this._popupBlocked)}!this._popupBlocked&&this._popup&&(t=0===this.options.selectThreshold?e.point:[[e.point.x-this.options.selectThreshold,e.point.y+this.options.selectThreshold],[e.point.x+this.options.selectThreshold,e.point.y-this.options.selectThreshold]],t=this._map.queryRenderedFeatures(t,this.options.queryParameters)||[],this._map.getCanvas().style.cursor=t.length?"pointer":"",t.length?(this._popup.setLngLat(e.lngLat),"string"==typeof(t=this.options.renderPopup(t))?this._popup.setHTML(t):this._popup.setDOMContent(t),this._popup.addTo(this._map)):this._popup.remove())},l.prototype.onAdd=function(e){return this._map=e,0===Object.keys(this.sources).length&&(e.on("tiledata",this._onSourceChange),e.on("sourcedata",this._onSourceChange)),e.on("styledata",this._onStyleChange),e.on("load",this._onStyleChange),e.on("mousemove",this._onMousemove),e.on("click",this._onMousemove),e.on("contextmenu",this._onRightClick),this._toggle.elem},l.prototype.onRemove=function(){this._map.off("styledata",this._onStyleChange),this._map.off("load",this._onStyleChange),this._map.off("tiledata",this._onSourceChange),this._map.off("sourcedata",this._onSourceChange),this._map.off("mousemove",this._onMousemove),this._map.off("click",this._onMousemove),this._map.off("contextmenu",this._onRightClick);var e=this._toggle.elem;e.parentNode.removeChild(e),this._map=void 0},t.exports=l},{"./InspectButton":2,"./colors":4,"./renderPopup":5,"./stylegen":6,"lodash.isequal":7}],4:[function(e,t,n){var r=e("randomcolor");n.brightColor=function(e,t){var n="bright",o=null;return/water|ocean|lake|sea|river/.test(e)&&(o="blue"),/state|country|place/.test(e)&&(o="pink"),/road|highway|transport/.test(e)&&(o="orange"),/contour|building/.test(e)&&(o="monochrome"),/building/.test(e)&&(n="dark"),/contour|landuse/.test(e)&&(o="yellow"),/wood|forest|park|landcover/.test(e)&&(o="green"),"rgba("+r({luminosity:n,hue:o,seed:e,format:"rgbArray"}).concat([t||1]).join(", ")+")"}},{randomcolor:8}],5:[function(e,t,n){function r(e,t){return'<div class="maplibregl-inspect_property"><div class="maplibregl-inspect_property-name">'+e+'</div><div class="maplibregl-inspect_property-value">'+(null==t?t:t instanceof Date?t.toLocaleString():"object"==typeof t||"number"==typeof t||"string"==typeof t?t.toString():t)+"</div></div>"}t.exports=function(e){return'<div class="maplibregl-inspect_popup">'+e.map(function(e){var t;return'<div class="maplibregl-inspect_feature">'+['<div class="maplibregl-inspect_layer">'+((t=e).layer["source-layer"]||t.layer.source)+"</div>",r("$type",t.geometry.type)].concat(e=Object.keys(t.properties).map(function(e){return r(e,t.properties[e])})).join("")+"</div>"}).join("")+"</div>"}},{}],6:[function(e,t,n){function r(e,t,n){return e={id:[t,n,"circle"].join("_"),source:t,type:"circle",paint:{"circle-color":e,"circle-radius":2},filter:["==","$type","Point"]},n&&(e["source-layer"]=n),e}function o(e,t,n,r){return e={id:[n,r,"polygon"].join("_"),source:n,type:"fill",paint:{"fill-color":e,"fill-antialias":!0,"fill-outline-color":e},filter:["==","$type","Polygon"]},r&&(e["source-layer"]=r),e}function s(e,t,n){return e={id:[t,n,"line"].join("_"),source:t,layout:{"line-join":"round","line-cap":"round"},type:"line",paint:{"line-color":e},filter:["==","$type","LineString"]},n&&(e["source-layer"]=n),e}n.polygonLayer=o,n.lineLayer=s,n.circleLayer=r,n.generateInspectStyle=function(e,t,n){var n={id:"background",type:"background",paint:{"background-color":(n=Object.assign({backgroundColor:"#fff"},n)).backgroundColor}},r={};return Object.keys(e.sources).forEach(function(t){var n=e.sources[t];"vector"!==n.type&&"geojson"!==n.type||(r[t]=n)}),Object.assign(e,{layers:[n].concat(t),soources:r})},n.generateColoredLayers=function(e,t){var n=[],a=[],i=[];function l(e){return{circle:(e=t.bind(null,e))(.8),line:e(.6),polygon:e(.3),polygonOutline:e(.6),default:e(1)}}return Object.keys(e).forEach(function(t){var c=e[t];c&&0!==c.length?c.forEach(function(e){var c=l(e);a.push(r(c.circle,t,e)),i.push(s(c.line,t,e)),n.push(o(c.polygon,c.polygonOutline,t,e))}):(c=l(t),a.push(r(c.circle,t)),i.push(s(c.line,t)),n.push(o(c.polygon,c.polygonOutline,t)))}),n.concat(i).concat(a)}},{}],7:[function(e,t,r){(function(e){(function(){var n="__lodash_hash_undefined__",o="[object Arguments]",s="[object Array]",a="[object Boolean]",i="[object Date]",l="[object Error]",c="[object Function]",u="[object Map]",p="[object Number]",h="[object Object]",f="[object Promise]",d="[object RegExp]",y="[object Set]",g="[object String]",_="[object WeakMap]",m="[object ArrayBuffer]",b="[object DataView]",v=/^\[object .+?Constructor\]$/,j=/^(?:0|[1-9]\d*)$/,w={};w["[object Float32Array]"]=w["[object Float64Array]"]=w["[object Int8Array]"]=w["[object Int16Array]"]=w["[object Int32Array]"]=w["[object Uint8Array]"]=w["[object Uint8ClampedArray]"]=w["[object Uint16Array]"]=w["[object Uint32Array]"]=!0,w[o]=w[s]=w[m]=w[a]=w[b]=w[i]=w[l]=w[c]=w[u]=w[p]=w[h]=w[d]=w[y]=w[g]=w[_]=!1;var k="object"==typeof e&&e&&e.Object===Object&&e,S="object"==typeof self&&self&&self.Object===Object&&self,x=k||S||Function("return this")(),O="object"==typeof r&&r&&!r.nodeType&&r,C=O&&"object"==typeof t&&t&&!t.nodeType&&t,I=C&&C.exports===O,M=I&&k.process,T=function(){try{return M&&M.binding&&M.binding("util")}catch(e){}}(),S=T&&T.isTypedArray;function P(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function N(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}var A,B,C=Array.prototype,O=Function.prototype,L=Object.prototype,k=x["__core-js_shared__"],E=O.toString,R=L.hasOwnProperty,z=(T=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",U=L.toString,H=RegExp("^"+E.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),O=I?x.Buffer:void 0,k=x.Symbol,F=x.Uint8Array,D=L.propertyIsEnumerable,Z=C.splice,$=k?k.toStringTag:void 0,G=Object.getOwnPropertySymbols,T=O?O.isBuffer:void 0,q=(A=Object.keys,B=Object,function(e){return A(B(e))}),I=ed(x,"DataView"),W=ed(x,"Map"),C=ed(x,"Promise"),O=ed(x,"Set"),x=ed(x,"WeakMap"),J=ed(Object,"create"),V=e_(I),K=e_(W),Y=e_(C),X=e_(O),Q=e_(x),k=k?k.prototype:void 0,ee=k?k.valueOf:void 0;function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function en(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function er(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function eo(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new er;++t<n;)this.add(e[t])}function es(e){e=this.__data__=new en(e),this.size=e.size}function ea(e,t){var n,r,o,s=ev(e),a=!s&&eb(e),i=!s&&!a&&ej(e),l=!s&&!a&&!i&&eC(e),c=s||a||i||l,u=c?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],p=u.length;for(n in e)!t&&!R.call(e,n)||c&&("length"==n||i&&("offset"==n||"parent"==n)||l&&("buffer"==n||"byteLength"==n||"byteOffset"==n)||(r=n,(o=null==(o=p)?9007199254740991:o)&&("number"==typeof r||j.test(r))&&-1<r&&r%1==0&&r<o))||u.push(n);return u}function ei(e,t){for(var n=e.length;n--;)if(em(e[n][0],t))return n;return -1}function el(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?function(e){var t=R.call(e,$),n=e[$];try{var r=(e[$]=void 0,!0)}catch(e){}var o=U.call(e);return r&&(t?e[$]=n:delete e[$]),o}(e):U.call(e)}function ec(e){return ex(e)&&el(e)==o}function eu(e){if(t="function"==typeof(t=e&&e.constructor)&&t.prototype||L,e!==t)return q(e);var t,n,r=[];for(n in Object(e))R.call(e,n)&&"constructor"!=n&&r.push(n);return r}function ep(e,t,n,r,o,s){var a=1&n,i=e.length,l=t.length;if(i!=l&&!(a&&i<l))return!1;if((l=s.get(e))&&s.get(t))return l==t;var c=-1,u=!0,p=2&n?new eo:void 0;for(s.set(e,t),s.set(t,e);++c<i;){var h,f=e[c],d=t[c];if(void 0!==(h=r?a?r(d,f,c,t,e,s):r(f,d,c,e,t,s):h)){if(h)continue;u=!1;break}if(p){if(!function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return 1}(t,function(e,t){return!p.has(t)&&(f===e||o(f,e,n,r,s))&&p.push(t)})){u=!1;break}}else if(f!==d&&!o(f,d,n,r,s)){u=!1;break}}return s.delete(e),s.delete(t),u}function eh(e){var t;return t=(t=eI)(e),ev(e)?t:function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}(t,ey(e))}function ef(e,t){var n=e.__data__;return("string"==(e=typeof t)||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?n["string"==typeof t?"string":"hash"]:n.map}function ed(e,t){var n;return eS(n=t=null==e?void 0:e[t])&&!(z&&z in n)&&(ew(n)?H:v).test(e_(n))?t:void 0}et.prototype.clear=function(){this.__data__=J?J(null):{},this.size=0},et.prototype.delete=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},et.prototype.get=function(e){var t=this.__data__;if(J){var r=t[e];return r===n?void 0:r}return R.call(t,e)?t[e]:void 0},et.prototype.has=function(e){var t=this.__data__;return J?void 0!==t[e]:R.call(t,e)},et.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=J&&void 0===t?n:t,this},en.prototype.clear=function(){this.__data__=[],this.size=0},en.prototype.delete=function(e){var t=this.__data__;return!((e=ei(t,e))<0)&&(e==t.length-1?t.pop():Z.call(t,e,1),--this.size,!0)},en.prototype.get=function(e){var t=this.__data__;return(e=ei(t,e))<0?void 0:t[e][1]},en.prototype.has=function(e){return -1<ei(this.__data__,e)},en.prototype.set=function(e,t){var n=this.__data__,r=ei(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},er.prototype.clear=function(){this.size=0,this.__data__={hash:new et,map:new(W||en),string:new et}},er.prototype.delete=function(e){return e=ef(this,e).delete(e),this.size-=e?1:0,e},er.prototype.get=function(e){return ef(this,e).get(e)},er.prototype.has=function(e){return ef(this,e).has(e)},er.prototype.set=function(e,t){var n=ef(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},eo.prototype.add=eo.prototype.push=function(e){return this.__data__.set(e,n),this},eo.prototype.has=function(e){return this.__data__.has(e)},es.prototype.clear=function(){this.__data__=new en,this.size=0},es.prototype.delete=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},es.prototype.get=function(e){return this.__data__.get(e)},es.prototype.has=function(e){return this.__data__.has(e)},es.prototype.set=function(e,t){var n=this.__data__;if(n instanceof en){var r=n.__data__;if(!W||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new er(r)}return n.set(e,t),this.size=n.size,this};var ey=G?function(e){return null==e?[]:function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,s=[];++n<r;){var a=e[n];t(a,n,e)&&(s[o++]=a)}return s}(G(e=Object(e)),function(t){return D.call(e,t)})}:function(){return[]},eg=el;function e_(e){if(null!=e){try{return E.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function em(e,t){return e===t||e!=e&&t!=t}(I&&eg(new I(new ArrayBuffer(1)))!=b||W&&eg(new W)!=u||C&&eg(C.resolve())!=f||O&&eg(new O)!=y||x&&eg(new x)!=_)&&(eg=function(e){var t=el(e),e=t==h?e.constructor:void 0,e=e?e_(e):"";if(e)switch(e){case V:return b;case K:return u;case Y:return f;case X:return y;case Q:return _}return t});var eb=ec(function(){return arguments}())?ec:function(e){return ex(e)&&R.call(e,"callee")&&!D.call(e,"callee")},ev=Array.isArray,ej=T||function(){return!1};function ew(e){if(eS(e))return(e=el(e))==c||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function ek(e){return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991}function eS(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ex(e){return null!=e&&"object"==typeof e}var eO,eC=S?(eO=S,function(e){return eO(e)}):function(e){return ex(e)&&ek(e.length)&&!!w[el(e)]};function eI(e){return(null!=e&&ek(e.length)&&!ew(e)?ea:eu)(e)}t.exports=function(e,t){return function e(t,n,r,c,f){return t===n||(null!=t&&null!=n&&(ex(t)||ex(n))?function(e,t,n,r,c,f){var _=ev(e),v=ev(t),j=_?s:eg(e),w=v?s:eg(t),k=(j=j==o?h:j)==h,v=(w=w==o?h:w)==h,w=j==w;if(w&&ej(e)){if(!ej(t))return!1;_=!0,k=!1}return w&&!k?(f=f||new es,_||eC(e)?ep(e,t,n,r,c,f):function(e,t,n,r,o,s,c){switch(n){case b:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case m:return!!(e.byteLength==t.byteLength&&s(new F(e),new F(t)));case a:case i:case p:return em(+e,+t);case l:return e.name==t.name&&e.message==t.message;case d:case g:return e==t+"";case u:var h=P;case y:var f=1&r;if(h=h||N,e.size!=t.size&&!f)break;if(f=c.get(e))return f==t;return r|=2,c.set(e,t),h=ep(h(e),h(t),r,o,s,c),c.delete(e),h;case"[object Symbol]":if(ee)return ee.call(e)==ee.call(t)}return!1}(e,t,j,n,r,c,f)):!(1&n)&&(k=k&&R.call(e,"__wrapped__"),v=v&&R.call(t,"__wrapped__"),k||v)?c(k=k?e.value():e,v=v?t.value():t,n,r,f=f||new es):w&&function(e,t,n,r,o,s){var a=1&n,i=eh(e),l=i.length,c=eh(t).length;if(l!=c&&!a)return!1;for(var u=l;u--;){var p=i[u];if(!(a?p in t:R.call(t,p)))return!1}var h=s.get(e);if(h&&s.get(t))return h==t;var f=!0;s.set(e,t),s.set(t,e);for(var d=a;++u<l;){var y,g=e[p=i[u]],_=t[p];if(!(void 0===(y=r?a?r(_,g,p,t,e,s):r(g,_,p,e,t,s):y)?g===_||o(g,_,n,r,s):y)){f=!1;break}d=d||"constructor"==p}return f&&!d&&(c=e.constructor)!=(h=t.constructor)&&"constructor"in e&&"constructor"in t&&!("function"==typeof c&&c instanceof c&&"function"==typeof h&&h instanceof h)&&(f=!1),s.delete(e),s.delete(t),f}(e,t,n,r,c,f=f||new es)}(t,n,r,c,e,f):t!=t&&n!=n)}(e,t)}}).call(this)}).call(this,void 0!==n.g?n.g:"undefined"!=typeof self?self:window)},{}],8:[function(e,t,n){var r,o,s;r=this,o=function(){var e=null,t={};s("monochrome",null,[[0,0],[100,0]]),s("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),s("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),s("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),s("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),s("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),s("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),s("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var n=[];function r(e){for(var n in 334<=e&&e<=360&&(e-=360),t){var r=t[n];if(r.hueRange&&e>=r.hueRange[0]&&e<=r.hueRange[1])return t[n]}return"Color not found"}function o(t){if(null===e){var n=Math.random();return n+=.618033988749895,n%=1,Math.floor(t[0]+n*(t[1]+1-t[0]))}var r=t[1]||1,n=t[0]||0,t=(e=(9301*e+49297)%233280)/233280;return Math.floor(n+t*(r-n))}function s(e,n,r){var o=r[0][0],s=r[r.length-1][0],a=r[r.length-1][1],i=r[0][1];t[e]={hueRange:n,lowerBounds:r,saturationRange:[o,s],brightnessRange:[a,i]}}function a(e){var t=e[0];360===(t=0===t?1:t)&&(t=359),t/=360;var n=e[1]/100,r=e[2]/100,e=Math.floor(6*t),t=6*t-e,o=r*(1-n),s=r*(1-t*n),a=r*(1-(1-t)*n),i=256,l=256,c=256;switch(e){case 0:i=r,l=a,c=o;break;case 1:i=s,l=r,c=o;break;case 2:i=o,l=r,c=a;break;case 3:i=o,l=s,c=r;break;case 4:i=a,l=o,c=r;break;case 5:i=r,l=o,c=s}return[Math.floor(255*i),Math.floor(255*l),Math.floor(255*c)]}function i(e){var t=parseInt((e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e).substr(0,2),16)/255,n=parseInt(e.substr(2,2),16)/255,r=parseInt(e.substr(4,2),16)/255,o=Math.max(t,n,r),s=o-Math.min(t,n,r),a=o?s/o:0;switch(o){case t:return[(n-r)/s%6*60||0,a,o];case n:return[60*((r-t)/s+2)||0,a,o];case r:return[60*((t-n)/s+4)||0,a,o]}}function l(e){var t=e[0],n=e[1]/100,r=e[2]/100,e=(2-n)*r;return[t,Math.round(n*r/(e<1?e:2-e)*1e4)/100,e/2*100]}return function s(c){if(void 0!==(c=c||{}).seed&&null!==c.seed&&c.seed===parseInt(c.seed,10))e=c.seed;else if("string"==typeof c.seed)e=function(e){for(var t=0,n=0;n!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);n++)t+=e.charCodeAt(n);return t}(c.seed);else{if(void 0!==c.seed&&null!==c.seed)throw TypeError("The seed value must be an integer or string");e=null}if(null===c.count||void 0===c.count)return function(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return l(e);case"hsl":var n=l(e);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var r=l(e),o=t.alpha||Math.random();return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+o+")";case"rgbArray":return a(e);case"rgb":return"rgb("+a(e).join(", ")+")";case"rgba":return r=a(e),o=t.alpha||Math.random(),"rgba("+r.join(", ")+", "+o+")";default:return function(e){function t(e){return 1==(e=e.toString(16)).length?"0"+e:e}return"#"+t((e=a(e))[0])+t(e[1])+t(e[2])}(e)}}([u=function(e){if(0<n.length){var s=o(u=function(e){if(isNaN(e)){if("string"==typeof e){if(t[e]){var n=t[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return r(i(e)[0]).hueRange}}else if((n=parseInt(e))<360&&0<n)return r(e).hueRange;return[0,360]}(e.hue)),a=(u[1]-u[0])/n.length,l=parseInt((s-u[0])/a);!0===n[l]?l=(l+2)%n.length:n[l]=!0;var c=(u[0]+l*a)%359,a=(u[0]+(l+1)*a)%359;return(s=o(u=[c,a]))<0?360+s:s}var u=function(e){if("number"==typeof parseInt(e)){var n=parseInt(e);if(n<360&&0<n)return[n,n]}if("string"==typeof e){if(t[e]){if((n=t[e]).hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return[e=i(e)[0],e]}return[0,360]}(e.hue);return(s=o(u))<0?360+s:s}(c),p=function(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return o([0,100]);var e=r(e).saturationRange,n=e[0],s=e[1];switch(t.luminosity){case"bright":n=55;break;case"dark":n=s-10;break;case"light":s=55}return o([n,s])}(u,c),function(e,t,n){var s=function(e,t){for(var n=r(e).lowerBounds,o=0;o<n.length-1;o++){var s=n[o][0],a=n[o][1],i=n[o+1][0],l=n[o+1][1];if(s<=t&&t<=i)return(i=(l-a)/(i-s))*t+(a-i*s)}return 0}(e,t),a=100;switch(n.luminosity){case"dark":a=s+20;break;case"light":s=(a+s)/2;break;case"random":s=0,a=100}return o([s,a])}(u,p,c)],c);for(var u,p,h=c.count,f=[],d=0;d<c.count;d++)n.push(!1);for(c.count=null;h>f.length;){var y=s(c);null!==e&&(c.seed=e),f.push(y)}return c.count=h,f}},"object"==typeof n?(s=o(),(n="object"==typeof t&&t&&t.exports?t.exports=s:n).randomColor=s):r.randomColor=o()},{}]},{},[1])(1)},3180:function(e){e.exports={"ctrl-container":"style_ctrl-container__yQR0f","ctrl-group":"style_ctrl-group___xehh",search:"style_search__T1PZy","ctrl-group-dropdown":"style_ctrl-group-dropdown__9U7Te","search-form":"style_search-form__AWBt9","search-icon":"style_search-icon__YExYX","search-results":"style_search-results__dSr0N","search-result":"style_search-result__xgsju","search-result-country":"style_search-result-country__KRTBE","search-error":"style_search-error__y7O_W",attribution:"style_attribution__Zksas"}},7297:function(e){e.exports={"ctrl-container":"style_ctrl-container__4AHK_",icon:"style_icon__3G8lz","select-container":"style_select-container__JVAy7","style-select":"style_style-select__49LuH","theme-select":"style_theme-select___Zogj"}},1650:function(e){e.exports={"ctrl-container":"style_ctrl-container__O9xs5",icon:"style_icon__qAZi4","select-container":"style_select-container__JutOG","style-select":"style_style-select__YDUIL","theme-select":"style_theme-select__3bPqg"}},1221:function(e){e.exports={wrap:"style_wrap__brVFT",map:"style_map__PO8mZ",rounded:"style_rounded__6LESU"}},9613:function(e){function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=9613,e.exports=t}}]);