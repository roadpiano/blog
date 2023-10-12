"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},a="\u5b57\u4f53",s={unversionedId:"sass/font",id:"sass/font",title:"\u5b57\u4f53",description:"\u5e38\u7528\u7528\u5b57\u4f53\u5904\u7406",source:"@site/docs/sass/font.md",sourceDirName:"sass",slug:"/sass/font",permalink:"/docs/sass/font",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sass/font.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sass",permalink:"/docs/category/sass"},next:{title:"ie",permalink:"/docs/sass/ie"}},l={},c=[{value:"@mixin font-handle",id:"mixin-font-handle",level:2},{value:"2. @mixin ie",id:"2-mixin-ie",level:2}],p={toc:c},f="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b57\u4f53"},"\u5b57\u4f53"),(0,i.kt)("p",null,"\u5e38\u7528\u7528\u5b57\u4f53\u5904\u7406"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"SASS mixin")),(0,i.kt)("h2",{id:"mixin-font-handle"},"@mixin font-handle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin font-handle($fontSize: 16, $lineHeight: 24) {\n  $lineHeightRatio: calc($lineHeight / $fontSize);\n  font-size: $fontSize + px;\n  line-height: $lineHeightRatio;\n  @media (max-width: 767px) {\n    @if $fontSize > 48 {\n      font-size: 21pt;\n    } @else if $fontSize > 29 {\n      font-size: 17pt;\n    } @else if $fontSize > 20 {\n      font-size: 14pt;\n    } @else {\n      font-size: 11pt;\n    }\n    line-height: $lineHeightRatio * 0.85;\n  }\n}\n")),(0,i.kt)("h2",{id:"2-mixin-ie"},"2. @mixin ie"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin ie {\n  @media screen and (min-width:0\\0) and (min-resolution:72dpi) { @content; }\n}\n")))}u.isMDXComponent=!0}}]);