(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[881],{7605:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/examples/serve-and-export-vector-tiles",function(){return n(8397)}])},8397:function(e,s,n){"use strict";n.r(s);var t=n(5893),r=n(4319),o=n(1151);function i(e){let s=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",code:"code",pre:"pre",span:"span",h3:"h3"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:"Serve and Export Vector Tiles from PostGIS"}),"\n",(0,t.jsx)(s.p,{children:"In this tutorial, we'll learn how to create vector tiles from the data imported into PostGIS."}),"\n",(0,t.jsx)(s.p,{children:"If you have not yet inserted data into your PostGIS database, please follow one of these three guides:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://baremaps.apache.org/examples/import-osm-into-postgis/",children:"Import OSM data into PostGIS"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://baremaps.apache.org/examples/openstreetmap/",children:"Import Natural Earth data into PostGIS"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://baremaps.apache.org/examples/openstreetmap/",children:"Import Contour lines from the ASTER dataset into PostGIS"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:'If you are in a hurry, consider skipping the "Under the Hood" sections.'}),"\n",(0,t.jsx)(s.h2,{id:"creating-vector-tiles",children:"Creating Vector Tiles"}),"\n",(0,t.jsx)(s.p,{children:"In order to create vector tiles, Apache Baremaps requires JSON configuration files. The two configuration files used are:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"tileset.json"})," - Defines all the information needed to retrieve the correct vector tile layers at different zoom levels."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"style.json"})," - Defines the style of the different layers."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For convenience, we have prepared a ",(0,t.jsx)(s.code,{children:"tileset.json"})," and a ",(0,t.jsx)(s.code,{children:"style.json"})," that correspond to each of the examples."]}),"\n",(0,t.jsx)(s.p,{children:"Each of these files are available in the main repository of Apache Baremaps inside the examples' folder."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/apache/incubator-baremaps/blob/main/examples/openstreetmap/",children:"For OpenStreetMap data"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/apache/incubator-baremaps/blob/main/examples/contour/",children:"For contour lines data"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/apache/incubator-baremaps/blob/main/examples/naturalearth/",children:"For Natural Earth data"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["First ",(0,t.jsx)(s.code,{children:"cd"})," into one of the example directories that corresponds to the data you inserted inside your PostGIS database.\nThen let's preview and edit the map with the sample configuration files by executing the following command in a terminal."]}),"\n",(0,t.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"baremaps "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"map"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dev"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--tileset"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tileset.json'"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--style"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'style.json'"})]})]})}),"\n",(0,t.jsxs)(s.p,{children:["Well done, a local development server should have started.\nYou can now visualize the vector tiles in your browser (",(0,t.jsx)(s.a,{href:"http://localhost:9000/",children:"http://localhost:9000/"}),")!\nNotice that the changes in the configuration files are automatically reloaded by the browser."]}),"\n",(0,t.jsx)(s.h3,{id:"under-the-hood-optional",children:"Under the Hood (Optional)"}),"\n",(0,t.jsxs)(s.p,{children:["Baremaps extensively rely on the fantastic ",(0,t.jsx)(s.a,{href:"https://postgis.net/docs/ST_AsMVT.html",children:"ST_AsMVT"})," functions released by the PostGIS team to produce ",(0,t.jsx)(s.a,{href:"https://docs.mapbox.com/vector-tiles/specification/",children:"Mapbox Vector Tiles"}),".\nHowever, in the following excerpt of the json configuration file, none of these concepts appear in the SQL queries."]}),"\n",(0,t.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ..."})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"vector_layers"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    {"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"id"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"aeroway"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"queries"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        {"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"minzoom"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"12"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"maxzoom"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"sql"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"\"SELECT id, tags, geom FROM osm_nodes WHERE tags ? 'aeroway'\""})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        }"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ..."})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      ]"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ..."})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsx)(s.p,{children:"Why don't we see these function calls in the configuration?\nBaremaps wants you to focus on the content of the tiles, and relieves you from the burden of writing complex SQL queries.\nIn fact, at runtime, Baremaps merges all the queries of the configuration file into a single optimized query that produces vector tiles."}),"\n",(0,t.jsxs)(s.p,{children:["In production, vector tiles are rarely served dynamically. Why is that so?\nFirst, a large blob store is much cheaper than a relational database to ",(0,t.jsx)(s.a,{href:"https://wiki.c2.com/?StorageIsCheap",children:"operate"}),".\nSecond, content delivery networks (CDNs) greatly improve web performances by caching static content close to the end user.\nBaremaps has been conceived with these lasting trends in mind.\nThe following command produces a local directory containing precomputed static tiles.\nThese tiles can be served with Apache, Nginx, or Caddy, but also copied in a blob store behind a content delivery network, such as Cloudflare, Stackpath, or Fastly."]}),"\n",(0,t.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"baremaps "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"map"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"export"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--tileset"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tileset.json'"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--repository"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tiles/'"})]})]})}),"\n",(0,t.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(s.p,{children:"In this tutorial, we learnt how to create vector tiles from PostGIS data with the help of Apache Baremaps.\nPrior to the release of Apache Baremaps, we believe that creating a pipeline for publishing vector tiles from OpenStreetMap data was a rather time-consuming task.\nAs shown in this demonstration, Apache Baremaps tries to bring back the fun to creating a web mapping pipeline!"})]})}n(5675),s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"src/pages/documentation/examples/serve-and-export-vector-tiles.mdx",route:"/documentation/examples/serve-and-export-vector-tiles",frontMatter:{layout:"default",title:"Serve Vector Tiles from PostGIS"},headings:[{depth:1,value:"Serve and Export Vector Tiles from PostGIS",id:"serve-and-export-vector-tiles-from-postgis"},{depth:2,value:"Creating Vector Tiles",id:"creating-vector-tiles"},{depth:3,value:"Under the Hood (Optional)",id:"under-the-hood-optional"},{depth:2,value:"Conclusion",id:"conclusion"}],title:"Serve Vector Tiles from PostGIS"},pageNextRoute:"/documentation/examples/serve-and-export-vector-tiles"})}},function(e){e.O(0,[319,774,888,179],function(){return e(e.s=7605)}),_N_E=e.O()}]);