(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[527],{4803:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/getting-started",function(){return t(4034)}])},4034:function(e,s,t){"use strict";t.r(s);var a=t(5893),r=t(4319),n=t(1151);t(5675);var i=t(4673);function l(e){let s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{children:"Getting Started"}),"\n",(0,a.jsxs)(s.p,{children:["Apache Baremaps comes with a ",(0,a.jsx)(s.a,{href:"https://baremaps.apache.org/documentation/getting-started/",children:"default schema and style"})," similar to ",(0,a.jsx)(s.a,{href:"https://github.com/gravitystorm/openstreetmap-carto",children:"OpenStreetMap Carto"}),". This serves as a great starting point to get familiar with the project and build your own basemap."]}),"\n",(0,a.jsxs)(s.p,{children:["We chose the ",(0,a.jsx)(s.a,{href:"https://github.com/apache/incubator-baremaps/blob/main/LICENSE",children:"Apache License"})," so that map vendors can create derivative works without attributing the Apache Baremaps project on the map. The only requirement is to give proper credit to the contributors behind the data sources, such as ",(0,a.jsx)(s.a,{href:"https://www.openstreetmap.org/",children:"OpenStreetMap"})," and ",(0,a.jsx)(s.a,{href:"https://www.naturalearthdata.com/",children:"Natural Earth"}),". Please note that this schema and style are now used by default to display vector maps on the ",(0,a.jsx)(s.a,{href:"https://wiki.openstreetmap.org/wiki/Template:Vector_map",children:"OpenStreetMap wiki"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"While the quality of the schema and style continues to improve, contributions, enhancements, and feedback are highly encouraged."}),"\n","\n",(0,a.jsx)("div",{style:{marginTop:20,height:450},children:(0,a.jsx)(i.Z,{})}),"\n",(0,a.jsx)(s.h2,{id:"installing-postgis",children:"Installing PostGIS"}),"\n",(0,a.jsx)(s.p,{children:"This step is not required if you only plan to execute the Geocoding or IP-to-location examples."}),"\n",(0,a.jsxs)(s.p,{children:["To insert and generate vector tiles, you need to set up a ",(0,a.jsx)(s.a,{href:"https://postgis.net/",children:"PostGIS"})," database, which will host all the data required to generate the vector tiles."]}),"\n",(0,a.jsx)(s.p,{children:"The following Docker command will help you quickly set up the PostGIS database:"}),"\n",(0,a.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"docker "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--name"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"baremaps"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--publish"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5432"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5432"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-e"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"POSTGRES_DB=baremaps"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-e"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"POSTGRES_USER=baremaps"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-e"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"POSTGRES_PASSWORD=baremaps"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-d"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"postgis/postgis:latest"})]})]})}),"\n",(0,a.jsx)(s.p,{children:"For macOS users with an arm64 architecture, you may prefer the following optimized image:"}),"\n",(0,a.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"docker run \\"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  --name baremaps \\"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  --publish 5432:5432 \\"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  -e POSTGRES_DB=baremaps \\"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  -e POSTGRES_USER=baremaps \\"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  -e POSTGRES_PASSWORD=baremaps \\"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  -d kartoza/postgis:16-3.4"})})]})}),"\n",(0,a.jsx)(s.p,{children:"You can stop and start the container using the following commands:"}),"\n",(0,a.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"docker stop baremaps"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"docker start baremaps"})})]})}),"\n",(0,a.jsx)(s.h2,{id:"installing-the-cli",children:"Installing the CLI"}),"\n",(0,a.jsxs)(s.p,{children:["To run Apache Baremaps, you must first install Java 17 or a later version. ",(0,a.jsx)(s.a,{href:"https://sdkman.io/",children:"SDKMAN"})," offers a convenient Command Line Interface (CLI) to install and manage Java versions."]}),"\n",(0,a.jsxs)(s.p,{children:["Next, download and decompress the latest binary ",(0,a.jsx)(s.a,{href:"https://dist.apache.org/repos/dist/release/incubator/baremaps/",children:"binary distribution"})," of Apache Baremaps, or ",(0,a.jsx)(s.a,{href:"https://baremaps.apache.org/documentation/developer-manual/how-to-build-with-maven/",children:"build"})," the project from source.\nAfterward, add the ",(0,a.jsx)(s.code,{children:"bin"})," directory of the decompressed distribution to your ",(0,a.jsx)(s.code,{children:"PATH"})," environment variable:"]}),"\n",(0,a.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"tar -xzf baremaps-<version>-incubating-bin.tar.gz"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"export PATH=$PATH:`pwd`/baremaps/bin"})})]})}),"\n",(0,a.jsxs)(s.p,{children:["Running the ",(0,a.jsx)(s.code,{children:"baremaps"})," command should now produce an output like this:"]}),"\n",(0,a.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Usage: baremaps [-V] [COMMAND]"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"A toolkit for producing vector tiles."})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  -V, --version   Print version info."})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Commands:"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  workflow  Manage a workflow."})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  database  Database commands."})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  map       Map commands."})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  geocoder  Geocoder commands (experimental)."})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  iploc     IP to location commands (experimental)."})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ogcapi    OGC API server (experimental)."})})]})}),"\n",(0,a.jsx)(s.h2,{id:"preparing-the-database",children:"Preparing the Database"}),"\n",(0,a.jsxs)(s.p,{children:["To build the basemap locally, navigate to the ",(0,a.jsx)(s.code,{children:"basemap"})," directory at the root of the project and execute the following command:"]}),"\n",(0,a.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,a.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"baremaps "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"workflow"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"execute"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--file=import.js"})]})})}),"\n",(0,a.jsx)(s.p,{children:"If you're using Docker, ensure that at least 20GB of storage is allocated to Docker. Depending on your machine and internet connection, this process may take up to 30 minutes."}),"\n",(0,a.jsx)(s.h2,{id:"developing-vector-tiles",children:"Developing vector tiles"}),"\n",(0,a.jsx)(s.p,{children:"To start the server in development mode, run the following command:"}),"\n",(0,a.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,a.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"baremaps "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"map"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dev"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--tileset"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"tileset.js"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--style"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"style.js"})]})})}),"\n",(0,a.jsx)(s.p,{children:"In this mode, any changes to the style or tileset will be automatically detected, and the web page will refresh accordingly."}),"\n",(0,a.jsx)(s.h2,{id:"serving-vector-tiles",children:"Serving vector tiles"}),"\n",(0,a.jsx)(s.p,{children:"To serve the basemap in production mode, run the following command:"}),"\n",(0,a.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,a.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"baremaps "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"map"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"serve"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--tileset"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"tileset.js"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--style"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"style.js"})]})})}),"\n",(0,a.jsx)(s.p,{children:"In production mode, the server does not watch for changes in the style or tileset. You can also pass additional parameters to customize the server's behavior. For example:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["The ",(0,a.jsx)(s.code,{children:"--cache"})," parameter specifies a Caffeine specification for the cache. For instance, ",(0,a.jsx)(s.code,{children:"'maximumWeight=1073741824,expireAfterAccess=1h'"})," limits the cache to 1GB and expires entries after 1 hour."]}),"\n",(0,a.jsxs)(s.li,{children:["The ",(0,a.jsx)(s.code,{children:"--assets"})," parameter specifies the directory where static assets like fonts, images, or icons are stored."]}),"\n",(0,a.jsx)(s.li,{children:"And more."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"pregenerating-vector-tiles",children:"Pregenerating vector tiles"}),"\n",(0,a.jsx)(s.p,{children:"To avoid generating vector tiles on the fly, you can pregenerate them. Apache Baremaps supports several formats, including filesystem exports, MBTiles, and PMTiles. To pregenerate the tiles, run the following command:"}),"\n",(0,a.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,a.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"baremaps "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"map"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"export"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--tileset"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"tileset.js"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--repository"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"tiles.pmtiles"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--format"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"pmtiles"})]})})}),"\n",(0,a.jsx)(s.p,{children:"Note that this command uses the bounds and zoom levels defined in the tileset to generate the tiles."})]})}s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"src/pages/documentation/getting-started.mdx",route:"/documentation/getting-started",frontMatter:{layout:"default",title:"Getting Started"},headings:[{depth:1,value:"Getting Started",id:"getting-started"},{depth:2,value:"Installing PostGIS",id:"installing-postgis"},{depth:2,value:"Installing the CLI",id:"installing-the-cli"},{depth:2,value:"Preparing the Database",id:"preparing-the-database"},{depth:2,value:"Developing vector tiles",id:"developing-vector-tiles"},{depth:2,value:"Serving vector tiles",id:"serving-vector-tiles"},{depth:2,value:"Pregenerating vector tiles",id:"pregenerating-vector-tiles"}],title:"Getting Started"},pageNextRoute:"/documentation/getting-started"})}},function(e){e.O(0,[976,644,319,673,774,888,179],function(){return e(e.s=4803)}),_N_E=e.O()}]);