// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;function l(e,t,r){e[t]=r}function c(e,t,r){e.set(r,t)}function _(e,t,r,n){var o,i;return(i=e[0]).get&&i.set&&(o=c),o?function(e,t,r,n,o){var i,a,u,f,l,c;if(!((l=t[0])<=0))for(u=(a=r[0])<0?(1-l)*a:0,f=e[0],i=n[0],c=0;c<l;c++)i(f,u,o()),u+=a}(e,t,r,[o=o||l],n):function(e,t,r,n){var o,i,a,u,f;if(!((u=t[0])<=0))for(i=(o=r[0])<0?(1-u)*o:0,a=e[0],f=0;f<u;f++)a[i]=n(),i+=o}(e,t,r,n)}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||f.call(e,t)?(l=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=l):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e},e(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n,o){var i,a;return(a=e[0]).get&&a.set&&(i=c),i?function(e,t,r,n,o,i){var a,u,f,l,c,_;if(!((c=t[0])<=0))for(f=n[0],u=r[0],l=e[0],a=o[0],_=0;_<c;_++)a(l,f,i()),f+=u}(e,t,r,n,[i=i||l],o):function(e,t,r,n,o){var i,a,u,f,l;if(!((f=t[0])<=0))for(a=n[0],i=r[0],u=e[0],l=0;l<f;l++)u[a]=o(),a+=i}(e,t,r,n,o)}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).nullary=t();
//# sourceMappingURL=browser.js.map
