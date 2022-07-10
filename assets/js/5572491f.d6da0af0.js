"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[49],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"New Features/Table Freezing",id:"New Features/Table Freezing",title:"Table Freezing",description:"Tables can now be frozen at their current state to forbid any future modification. This action is irreversible and permanent for the lifespan of the table.",source:"@site/docs/New Features/Table Freezing.md",sourceDirName:"New Features",slug:"/New Features/Table Freezing",permalink:"/docs/New Features/Table Freezing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"String Indexing",permalink:"/docs/New Features/String Indexing"},next:{title:"New Operators",permalink:"/docs/category/new-operators"}},s={},c=[{value:"Sandboxing",id:"sandboxing",level:2},{value:"What will this prevent?",id:"what-will-this-prevent",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tables can now be frozen at their current state to forbid any future modification. This action is irreversible and permanent for the lifespan of the table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example Code 1"',title:'"Example',Code:!0,'1"':!0},"-- Disallowing any edits to the global environment table.\ntable.freeze(_G)\n_G.string = {} -- Fails, raises an error.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example Code 2"',title:'"Example',Code:!0,'2"':!0},'-- Performing edits, then freezing the resultant table.\nlocal MyTable = {}\nMyTable.key1 = "value 1"\nMyTable.key2 = "value 2"\ntable.freeze(MyTable)\nMyTable.key3 = "value 3" -- Fails, raises an error.\nMyTable.key2 = "new value 2" -- Fails, raises an error.\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example Code 3"',title:'"Example',Code:!0,'3"':!0},'-- Creating a constant local that\'s associated with a frozen table.\nlocal Frozen <const> = table.freeze({ 1, 2, 3 })\nFrozen = {} -- Fails.\nFrozen[1] = "new value" -- Fails.\nrawset(Frozen, "key", "value") -- Fails.\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example Code 4"',title:'"Example',Code:!0,'4"':!0},'--- Trying to swap the value with the debug library.\nfor i = 1, 249 do\n  local name, value = debug.getlocal(1, i)\n  if name == "Frozen" then\n    debug.setlocal(1, i, { ["key"] = "hello world" }) -- Fails.\n  end\nend\n')),(0,a.kt)("h2",{id:"sandboxing"},"Sandboxing"),(0,a.kt)("p",null,"If you're going to use this for a sandbox, make sure you call ",(0,a.kt)("inlineCode",{parentName:"p"},"table.freeze")," before any users can access the Lua environment, otherwise they can replace that function."),(0,a.kt)("h3",{id:"what-will-this-prevent"},"What will this prevent?"),(0,a.kt)("p",null,"All modifications to the table will be prevented, including those from the ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," library."))}p.isMDXComponent=!0}}]);