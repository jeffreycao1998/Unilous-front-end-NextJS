(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{0:function(t,n,e){e("cM/9"),t.exports=e("nOHt")},"1TCz":function(t,n,e){"use strict";e.r(n);var r=e("o0o1"),a=e.n(r),o=e("HaE+"),i=e("q1tI"),c=e.n(i),u=e("/MKj"),s=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),f=function(){return(f=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}).apply(this,arguments)},p=function(t,n,e,r){return new(e||(e=Promise))((function(a,o){function i(t){try{u(r.next(t))}catch(n){o(n)}}function c(t){try{u(r.throw(t))}catch(n){o(n)}}function u(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,c)}u((r=r.apply(t,n||[])).next())}))},l=function(t,n){var e,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(t,i)}catch(c){o=[6,c],r=0}finally{e=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},d=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(e[r[a]]=t[r[a]])}return e},y={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(t){return t},deserializeState:function(t){return t}},b=e("a3WO");var v=e("BsWD");function h(t){return function(t){if(Array.isArray(t))return Object(b.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(v.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=e("ANjH");function O(t){return function(n){var e=n.dispatch,r=n.getState;return function(n){return function(a){return"function"===typeof a?a(e,r,t):n(a)}}}}var S=O();S.withExtraArgument=O;var g=S,E=e("5PY3"),_=e("mIJh"),j=e("6Ysq"),P=e("iD+C"),m=e("gH2n"),T=e("2E1m"),x=Object(w.c)({token:E.b,currentUser:_.a,posts:j.b,alertNotif:P.a,stretchLayout:m.a,eventSearch:T.a}),I=function(){return Object(w.e)(x,(t=[g],w.a.apply(void 0,h(t))));var t},N=e("B/3u"),k=(e("c473"),e("UpMI"),c.a.createElement),C=function(t){var n=t.Component,e=t.pageProps,r=t.store;return k(u.a,{store:r},k(n,e))};C.getInitialProps=function(){var t=Object(o.a)(a.a.mark((function t(n){var e,r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.Component,r=n.ctx,!e.getInitialProps){t.next=7;break}return t.next=4,e.getInitialProps(r);case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0={};case 8:if(o=t.t0,!(Object.keys(o).length>0)){t.next=13;break}return t.abrupt("return",{pageProps:o});case 13:return t.abrupt("return",{});case 14:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();n.default=Object(w.d)(function(t,n){var e=f(f({},y),n),r="undefined"===typeof window,a=function(a){var o=a.initialState,i=a.ctx,c=e.storeKey,u=function(){return t(e.deserializeState(o),f(f(f({},i),n),{isServer:r}))};return r?u():(c in window||(window[c]=u()),window[c])};return function(t){var n;return(n=function(n){function r(t,r){var o=n.call(this,t,r)||this,i=t.initialState;return e.debug&&console.log("4. WrappedApp.render created new store with initialState",i),o.store=a({ctx:r.ctx,initialState:i}),o}return s(r,n),r.prototype.render=function(){var n=this.props,e=n.initialProps,r=(n.initialState,d(n,["initialProps","initialState"]));return i.createElement(t,f({},r,e,{store:this.store}))},r}(i.Component)).displayName="withRedux("+(t.displayName||t.name||"App")+")",n.getInitialProps=function(n){return p(void 0,void 0,void 0,(function(){var o,i;return l(this,(function(c){switch(c.label){case 0:if(!n)throw new Error("No app context");if(!n.ctx)throw new Error("No page context");return o=a({ctx:n.ctx}),e.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",o.getState()),n.ctx.store=o,n.ctx.isServer=r,i={},"getInitialProps"in t?[4,t.getInitialProps.call(t,n)]:[3,2];case 1:i=c.sent(),c.label=2;case 2:return e.debug&&console.log("3. WrappedApp.getInitialProps has store state",o.getState()),[2,{isServer:r,initialState:r?e.serializeState(o.getState()):o.getState(),initialProps:i}]}}))}))},n}}(I),Object(N.b)({ssr:!0}))(C)},"2E1m":function(t,n,e){"use strict";e.d(n,"b",(function(){return i}));var r=e("o0o1"),a=e.n(r),o=e("HaE+"),i=function(t){return function(){var n=Object(o.a)(a.a.mark((function n(e){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"SET_EVENT",data:t});case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()};n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_EVENT":return n.data;default:return t}}},"5PY3":function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var r=function(t){return function(n){return n({type:"SET_TOKEN",data:t})}},a=function(){return function(t){return t({type:"CLEAR_TOKEN"})}};n.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_TOKEN":return n.data;case"CLEAR_TOKEN":return null;default:return t}}},"6Ysq":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("o0o1"),a=e.n(r),o=e("HaE+"),i=function(t){return function(){var n=Object(o.a)(a.a.mark((function n(e){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"ADD_POSTS",data:t});case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()};n.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INIT_POSTS":return n.data;case"ADD_POSTS":return null===t?n.data:t.concat(n.data);default:return t}}},BsWD:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("a3WO");function a(t,n){if(t){if("string"===typeof t)return Object(r.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(t,n):void 0}}},UpMI:function(t,n,e){},a3WO:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,"a",(function(){return r}))},c473:function(t,n,e){},"cM/9":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("1TCz")}])},gH2n:function(t,n,e){"use strict";e.d(n,"b",(function(){return i}));var r=e("o0o1"),a=e.n(r),o=e("HaE+"),i=function(){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"TOGGLE_SL"});case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()};n.a=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_SL":return!t;default:return t}}},mIJh:function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"d",(function(){return f})),e.d(n,"e",(function(){return p})),e.d(n,"c",(function(){return l})),e.d(n,"f",(function(){return d}));var r=e("rePB"),a=e("o0o1"),o=e.n(a),i=e("HaE+");function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var s=function(t){return function(){var n=Object(i.a)(o.a.mark((function n(e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"SET_CURRENT_USER",data:t});case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},f=function(t){return function(){var n=Object(i.a)(o.a.mark((function n(e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"SET_CU_POSTS",data:t});case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},p=function(t){return function(){var n=Object(i.a)(o.a.mark((function n(e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"SET_CU_SP",data:t});case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},l=function(t){return function(){var n=Object(i.a)(o.a.mark((function n(e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"SET_CU_NOTIFICATIONS",data:t});case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},d=function(t){return function(){var n=Object(i.a)(o.a.mark((function n(e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"SET_CU_PN",data:t});case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()};n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CU_PN":return u(u({},t),{},{pendingNotifications:n.data});case"SET_CURRENT_USER":return n.data;case"SET_CU_POSTS":return u(u({},t),{},{posts:n.data});case"SET_CU_SP":return t?u(u({},t),{},{savedPosts:n.data}):t;case"SET_CU_NOTIFICATIONS":return u(u({},t),{},{notifications:n.data});default:return t}}}},[[0,1,2,0,4,3,6]]]);