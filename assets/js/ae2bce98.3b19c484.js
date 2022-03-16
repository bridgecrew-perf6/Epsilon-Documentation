"use strict";(self.webpackChunkepsilon_doc=self.webpackChunkepsilon_doc||[]).push([[62],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},429:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},c="Introduction",u={unversionedId:"Projet Hopital/introduction",id:"Projet Hopital/introduction",title:"Introduction",description:"Laravel est la star du d\xe9veloppement d\u2019applications PHP depuis de nombreuses ann\xe9es et pour une bonne raison. Un \xe9cosyst\xe8me \xe9norme, une communaut\xe9 active, un march\xe9 de l\u2019emploi solide, des start-ups qui r\xe9ussissent \u2013 il a tout ce qu\u2019il faut pour qu\u2019une nouvelle technologie soit int\xe9ressante \xe0 adopter.",source:"@site/docs/Projet Hopital/introduction.md",sourceDirName:"Projet Hopital",slug:"/Projet Hopital/introduction",permalink:"/Epsilon-Documentation/docs/Projet Hopital/introduction",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Projet Hopital/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/Epsilon-Documentation/docs/tutorial-extras/translate-your-site"},next:{title:"Gestion Authentification",permalink:"/Epsilon-Documentation/docs/Projet Hopital/gestion_authentification"}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Laravel est la star du d\xe9veloppement d\u2019applications PHP depuis de nombreuses ann\xe9es et pour une bonne raison. Un \xe9cosyst\xe8me \xe9norme, une communaut\xe9 active, un march\xe9 de l\u2019emploi solide, des start-ups qui r\xe9ussissent \u2013 il a tout ce qu\u2019il faut pour qu\u2019une nouvelle technologie soit int\xe9ressante \xe0 adopter."),(0,i.kt)("p",null,"Cepandant pour comprendre tout ce qu'il faut et avoir les bases requis pour etre top en laravel, on s' est propos\xe9 de realiser un projet\nde gestion d'un hopital."),(0,i.kt)("img",{src:"\\img\\hopital.PNG",width:"100%"}),(0,i.kt)("h1",{id:"creation-du-projet-laravel"},"Creation du projet Laravel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"composer create-project laravel/laravel --prefer-dist Hopital\n")),(0,i.kt)("h1",{id:"modification-de-fichier-env-et-creation-de-la-base-de-donn\xe9e"},"Modification de fichier .env et creation de la base de donn\xe9e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=epsilondemo\nDB_USERNAME=root\nDB_PASSWORD=\n")),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Felicitez vous!!!\nVous avez termin\xe9 l'introduction"))))}m.isMDXComponent=!0}}]);