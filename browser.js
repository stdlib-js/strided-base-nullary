// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).nullary=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,l=o.__lookupGetter__,u=o.__lookupSetter__;var f=r,c=function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||u.call(e,t)?(f=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e},_=t()?f:c;var p=function(e,t,r,o){var n,a,i,l,u;if(!((l=t[0])<=0))for(a=(n=r[0])<0?(1-l)*n:0,i=e[0],u=0;u<l;u++)i[a]=o(),a+=n};return function(e,t,r){_(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}(p,"ndarray",(function(e,t,r,o,n){var a,i,l,u,f;if(!((u=t[0])<=0))for(i=o[0],a=r[0],l=e[0],f=0;f<u;f++)l[i]=n(),i+=a})),p}));
//# sourceMappingURL=browser.js.map
