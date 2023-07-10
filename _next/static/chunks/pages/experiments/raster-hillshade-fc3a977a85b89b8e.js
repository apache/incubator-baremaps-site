(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[749],{5745:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experiments/raster-hillshade",function(){return i(8122)}])},8122:function(e,t,i){"use strict";i.r(t);var r=i(5893),s=i(4319),a=i(1151);i(5675);var l=i(871),o=i(4613),n=i.n(o);function h(e){let t=Object.assign({h1:"h1",p:"p",code:"code"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"Raster Hillshade"}),"\n",(0,r.jsxs)(t.p,{children:["This example shows the use of the ",(0,r.jsx)(t.code,{children:"hillshade"})," layer type in ",(0,r.jsx)(t.code,{children:"maplibre-gl"})," to render a hillshade layer on top of a raster DEM layer."]}),"\n",(0,r.jsx)("div",{style:{marginTop:20,height:550},children:(0,r.jsx)(l.Z,{zoom:4,mapOptions:{maxZoom:14},mapStyle:{version:8,sources:{rasterSource:{type:"raster",tiles:["https://s3.amazonaws.com/elevation-tiles-prod/geotiff/{z}/{x}/{y}.tif"],tileSize:512,maxzoom:14,minzoom:0},terrainSource:{type:"raster-dem",tiles:["https://s3.amazonaws.com/elevation-tiles-prod/geotiff/{z}/{x}/{y}.tif"],tileSize:512,maxzoom:14,minzoom:0}},layers:[{id:"hills",type:"hillshade",source:"terrainSource",layout:{visibility:"visible"},paint:{"hillshade-accent-color":"#0ac1ff","hillshade-highlight-color":"#ffffff","hillshade-illumination-anchor":"map","hillshade-illumination-direction":45,"hillshade-shadow-color":"#000000"}},{id:"raster-layer",type:"raster",source:"rasterSource",paint:{"raster-opacity":.6}}]},getControls:()=>[...(0,l.c)(),new(n()).TerrainControl({source:"terrainSource",exaggeration:.05})]})})]})}t.default=(0,s.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"src/pages/experiments/raster-hillshade.mdx",route:"/experiments/raster-hillshade",headings:[{depth:1,value:"Raster Hillshade",id:"raster-hillshade"}],title:"Raster Hillshade"},pageNextRoute:"/experiments/raster-hillshade"})}},function(e){e.O(0,[976,644,319,871,774,888,179],function(){return e(e.s=5745)}),_N_E=e.O()}]);