(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7285:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},9546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(7285);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,c=void 0!==o&&o;return r||a&&c}},6505:function(e,t,r){"use strict";var n=r(930);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var o,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),i=(o=r(148))&&o.__esModule?o:{default:o},s=r(7285),u=r(523),d=r(9546);r(7206);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var d=f[s];if(a.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?o=!1:r.add(d);else{var l=a.props[d],p=n[d]||new Set;"name"===d&&c||!p.has(l)?(p.add(l),n[d]=p):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:o})}))}var m=function(e){var t=e.children,r=c.useContext(s.AmpStateContext),n=c.useContext(u.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:d.isInAmpMode(r)},t)};t.default=m},148:function(e,t,r){"use strict";var n=r(7980),a=r(3227),o=r(8361),c=(r(2191),r(5971)),i=r(2715),s=r(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return i(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var l=function(e){c(r,e);var t=u(r);function r(e){var o;return a(this,r),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=l},5006:function(e,t,r){"use strict";r.r(t);var n=r(9008),a=r(7160),o=r.n(a),c=r(5893);t.default=function(){return(0,c.jsxs)("div",{className:o().container,children:[(0,c.jsxs)(n.default,{children:[(0,c.jsx)("title",{children:"Create Next App"}),(0,c.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsxs)("main",{className:o().main,children:[(0,c.jsxs)("h1",{className:o().title,children:["Welcome to ",(0,c.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,c.jsxs)("p",{className:o().description,children:["Get started by editing"," ",(0,c.jsx)("code",{className:o().code,children:"pages/index.tsx"})]}),(0,c.jsxs)("div",{className:o().grid,children:[(0,c.jsxs)("a",{href:"https://nextjs.org/docs",className:o().card,children:[(0,c.jsx)("h2",{children:"Documentation \u2192"}),(0,c.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,c.jsxs)("a",{href:"https://nextjs.org/learn",className:o().card,children:[(0,c.jsx)("h2",{children:"Learn \u2192"}),(0,c.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,c.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:o().card,children:[(0,c.jsx)("h2",{children:"Examples \u2192"}),(0,c.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,c.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:o().card,children:[(0,c.jsx)("h2",{children:"Deploy \u2192"}),(0,c.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,c.jsx)("footer",{className:o().footer,children:"Test Footer"})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5006)}])},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,r){e.exports=r(6505)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);