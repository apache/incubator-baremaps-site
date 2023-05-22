(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{4089:function(s,l,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/examples/gdal-macos",function(){return e(9234)}])},9234:function(s,l,e){"use strict";e.r(l);var n=e(5893),r=e(4319),i=e(1151);function o(s){let l=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",span:"span"},(0,i.ah)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h1,{children:"Building gdal on Mac OS X"}),"\n",(0,n.jsxs)(l.p,{children:["The following procedure has been adapted form the ",(0,n.jsx)(l.a,{href:"https://github.com/OSGeo/gdal/blob/master/ci/travis/osx/before_install.sh",children:"GDAL CI"}),"."]}),"\n",(0,n.jsx)(l.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(l.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"set"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-e"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"xcode-select "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"--installs"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"brew "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"cmake"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"brew "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"proj"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"brew "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"boost"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"brew "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"swig"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"brew "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"sqlite"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"brew "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"thrift"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"brew "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"--cask"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"miniconda"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"git "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"git@github.com:OSGeo/gdal.git"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"git "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"checkout"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"v3."}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"6.4"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"conda "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"update"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-n"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"base"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-c"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"defaults"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"conda"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"conda "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-y"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"compilers"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"automake"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"pkgconfig"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"cmake"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"conda "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"config"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"--set"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"channel_priority"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"strict"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"conda "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"--yes"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"--quiet"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"proj=7.1.1=h45baca5_3"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"python="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"3.8"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"swig"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-y"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"conda "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"--yes"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"--quiet"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"libgdal=3.1.4=hd7bf8dc_0"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"--only-deps"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-y"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"CONDA_PREFIX"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"/usr/local/miniconda/envs/test"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"find ${CONDA_PREFIX}"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"/lib"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-name"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*.la'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-delete"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"mkdir "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"build"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"build"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"CFLAGS"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"-Wextra -Werror -Wunused-variable"'}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" CXXFLAGS"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"-Wextra -Werror -Wunused-variable"'}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" cmake .. \\"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"        -DCMAKE_INSTALL_PREFIX=$HOME/install-gdal \\"})}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-DCMAKE_PREFIX_PATH=${CONDA_PREFIX}"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-DGDAL_USE_GEOTIFF_INTERNAL=ON"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-DGDAL_USE_PNG_INTERNAL=ON"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-DGDAL_USE_POSTGRESQL=OFF"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-DGDAL_USE_WEBP=OFF"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-DGDAL_USE_ARROW=OFF"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-DGDAL_USE_PARQUET=OFF"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-DBUILD_CSHARP_BINDINGS=OFF"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"make "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-j3"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"make "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"install"})]})]})}),"\n",(0,n.jsxs)(l.p,{children:["After this, the library can be found in ",(0,n.jsx)(l.code,{children:"~/install-gdal/share/java/libgdalalljni.dylib"}),"."]}),"\n",(0,n.jsx)(l.p,{children:"When starting a java application, the library can be loaded with the following command:"}),"\n",(0,n.jsx)(l.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(l.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"java "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-Djava.library.path="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"~"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"/install-gdal/share/java"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"-jar"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string)"},children:"myapp.jar"})]})})}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.a,{href:"https://github.com/adoptium/temurin-build/issues/1671",children:"https://github.com/adoptium/temurin-build/issues/1671"}),"\n",(0,n.jsx)(l.a,{href:"https://stackoverflow.com/questions/52911791/hardened-runtime-for-java-and-mojave",children:"https://stackoverflow.com/questions/52911791/hardened-runtime-for-java-and-mojave"}),"\n",(0,n.jsx)(l.a,{href:"https://stackoverflow.com/questions/52905940/how-to-codesign-and-enable-the-hardened-runtime-for-a-3rd-party-cli-on-xcode",children:"https://stackoverflow.com/questions/52905940/how-to-codesign-and-enable-the-hardened-runtime-for-a-3rd-party-cli-on-xcode"})]})]})}e(5675),l.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:l}=Object.assign({},(0,i.ah)(),s.components);return l?(0,n.jsx)(l,{...s,children:(0,n.jsx)(o,{...s})}):o(s)},pageOpts:{filePath:"src/pages/documentation/examples/gdal-macos.mdx",route:"/documentation/examples/gdal-macos",frontMatter:{layout:"default",title:"Building gdal-java on Mac OS X"},headings:[{depth:1,value:"Building gdal on Mac OS X",id:"building-gdal-on-mac-os-x"}],title:"Building gdal-java on Mac OS X"},pageNextRoute:"/documentation/examples/gdal-macos"})}},function(s){s.O(0,[319,774,888,179],function(){return s(s.s=4089)}),_N_E=s.O()}]);