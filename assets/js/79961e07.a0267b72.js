"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},f),{},{components:n})):r.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="\u5b57\u4f53\u5904\u7406",s={unversionedId:"sass/font",id:"sass/font",title:"\u5b57\u4f53\u5904\u7406",description:"@mixin font-handle",source:"@site/docs/sass/font.md",sourceDirName:"sass",slug:"/sass/font",permalink:"/docs/sass/font",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sass/font.md",tags:[],version:"current",frontMatter:{},sidebar:"sassSidebar",next:{title:"IE\u517c\u5bb9",permalink:"/docs/sass/ie"}},c={},l=[{value:"@mixin font-handle",id:"mixin-font-handle",level:2}],f={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b57\u4f53\u5904\u7406"},"\u5b57\u4f53\u5904\u7406"),(0,o.kt)("h2",{id:"mixin-font-handle"},"@mixin font-handle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin font-handle($fontSize: 16, $lineHeight: 24) {\n  $lineHeightRatio: calc($lineHeight / $fontSize);\n  font-size: $fontSize + px;\n  line-height: $lineHeightRatio;\n  @media (max-width: 767px) {\n    @if $fontSize > 48 {\n      font-size: 21pt;\n    } @else if $fontSize > 29 {\n      font-size: 17pt;\n    } @else if $fontSize > 20 {\n      font-size: 14pt;\n    } @else {\n      font-size: 11pt;\n    }\n    line-height: $lineHeightRatio * 0.85;\n  }\n}\n")))}u.isMDXComponent=!0}}]);