(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74],{38:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/examples/geocoding",function(){return a(6998)}])},6998:function(e,n,a){"use strict";a.r(n);var t=a(5893),i=a(4319),o=a(1151);function s(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",pre:"pre",code:"code",span:"span"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Create a geocoding web service"}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, we demonstrate how to create a geocoding index and then serve it in a simple web application."}),"\n",(0,t.jsx)(n.h2,{id:"dataset",children:"Dataset"}),"\n",(0,t.jsxs)(n.p,{children:["The data we will be using comes from ",(0,t.jsx)(n.a,{href:"https://www.geonames.org",children:"Geonames"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"generate-the-index",children:"Generate the index"}),"\n",(0,t.jsxs)(n.p,{children:["The following ",(0,t.jsx)(n.a,{href:"https://raw.githubusercontent.com/apache/incubator-baremaps/main/examples/geocoding/workflow.js",children:"workflow"})," will download the Geonames data, decompress it, and finally build the index."]}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"baremaps workflow execute --file examples/geocoding/workflow.js"})})})}),"\n",(0,t.jsx)(n.h2,{id:"serve-the-data",children:"Serve the data"}),"\n",(0,t.jsx)(n.p,{children:"The following command will serve the Geonames index over HTTP in a simple web application."}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"baremaps geocoder serve --index geocoder-index --port 9000"})})})}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"http://localhost:9000/",children:"http://localhost:9000/"})," to see it in action."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, we learnt how to create a Geocoding index and serve it in a simple web application.\nThis will be very useful in a map application to find places quickly by writing an address in a prompt."})]})}a(5675),n.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)},pageOpts:{filePath:"src/pages/documentation/examples/geocoding.mdx",route:"/documentation/examples/geocoding",frontMatter:{layout:"default",title:"Create a geocoding web service"},headings:[{depth:1,value:"Create a geocoding web service",id:"create-a-geocoding-web-service"},{depth:2,value:"Dataset",id:"dataset"},{depth:2,value:"Generate the index",id:"generate-the-index"},{depth:2,value:"Serve the data",id:"serve-the-data"},{depth:2,value:"Conclusion",id:"conclusion"}],title:"Create a geocoding web service"},pageNextRoute:"/documentation/examples/geocoding"})}},function(e){e.O(0,[319,774,888,179],function(){return e(e.s=38)}),_N_E=e.O()}]);