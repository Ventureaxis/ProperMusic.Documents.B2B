"use strict";(self.webpackChunkpropermusic_documents_properweb=self.webpackChunkpropermusic_documents_properweb||[]).push([[1346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=s(r),u=n,h=l["".concat(c,".").concat(u)]||l[u]||d[u]||i;return r?o.createElement(h,a(a({ref:t},m),{},{components:r})):o.createElement(h,a({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:n,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:21,title:"Order Import"},a=void 0,p={unversionedId:"user-interface/order-import",id:"user-interface/order-import",title:"Order Import",description:"How to Import your Orders",source:"@site/docs/user-interface/order-import.md",sourceDirName:"user-interface",slug:"/user-interface/order-import",permalink:"/ProperMusic.Documents.B2B/docs/user-interface/order-import",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,title:"Order Import"},sidebar:"tutorialSidebar",previous:{title:"My Account",permalink:"/ProperMusic.Documents.B2B/docs/user-interface/my-account"},next:{title:"Order Summary",permalink:"/ProperMusic.Documents.B2B/docs/user-interface/order-summary"}},c={},s=[],m={toc:s},l="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(l,(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"How to Import your Orders"),(0,n.kt)("p",null,"The Order Import system allows you to add products to your order in large quantities from a CSV or an Excel sheet. The only basic details we need for each product is the Catalogue Number or the Barcode and the quantity you want to import."),(0,n.kt)("p",null,"You can also easily get the valid format and names of each column that we need to correctly import your products by downloading the template from the Download dropdown button."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Overview of the Order Import and its dropdown\n",(0,n.kt)("img",{alt:"Alt text",src:r(6465).Z,width:"821",height:"242"})),(0,n.kt)("p",{parentName:"admonition"},"Example of an excel sheet template (The last two lines would be invalid - see next image)"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Alt text",src:r(5536).Z,width:"280",height:"163"})),(0,n.kt)("p",{parentName:"admonition"},"Hovering over the red exclamation point shows the errors in the latest import\n",(0,n.kt)("img",{alt:"Alt text",src:r(6315).Z,width:"735",height:"317"})),(0,n.kt)("p",{parentName:"admonition"},"If we then download these results from the dropdown, it will have the relevant comments for each order line\n",(0,n.kt)("img",{alt:"Alt text",src:r(1093).Z,width:"763",height:"171"})),(0,n.kt)("p",{parentName:"admonition"},'Note: you can re-import this "Downloaded Results" file without changing your column headers as we match which column is which by the column name')),(0,n.kt)("p",null,"Any errors in your import will appear if you hover over the red exclamation point next to the Download dropdown, and the valid products will be imported."),(0,n.kt)("p",null,"The two checkboxes are options that will effect your import:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Replace Order will empty your order before you import more products"),(0,n.kt)("li",{parentName:"ul"},"Back Order Pre-Release will add any products that aren","'","t released yet onto your stores back order (Also skipping the automatic check for pre-releases on import)")),(0,n.kt)("p",null,'You can also find a detailed guide of this process in Download dropdown by clicking "Download Guide"'),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Alt text",src:r(6420).Z,width:"807",height:"882"}))),(0,n.kt)("p",null,"Here is also a short video of the whole Order Import process:"))}d.isMDXComponent=!0},1093:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/img-download-results-fa8af45e240391407479d91c5a100f86.png"},5536:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"},6420:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/img-import-guide-59c86f3f9f818c0d208187f0f1ba0ca9.png"},6315:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/img-order-import-error-b3415ef655ae72886b0a0378e8e55deb.png"},6465:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/img-order-import-overview-ef3c50cf47974959c4859e3e1306e271.png"}}]);