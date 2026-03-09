"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=o(function(_,y){
function w(e,r,u,i,a){var t,s,c,v,n;if(v=r[0],!(v<=0))for(s=i[0],t=u[0],c=e[0],n=0;n<v;n++)c[s]=a(),s+=t}y.exports=w
});var p=o(function($,d){
var z=require('@stdlib/strided-base-stride2offset/dist'),B=x();function C(e,r,u,i){var a=[z(r[0],u[0])];return B(e,r,u,a,i)}d.exports=C
});var l=o(function(h,A){
function D(e,r,u,i,a,t){var s,c,v,n,q,f;if(q=r[0],!(q<=0))for(v=i[0],c=u[0],n=e[0],s=a[0],f=0;f<q;f++)s(n,v,t()),v+=c}A.exports=D
});var S=o(function(rr,N){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=l();function G(e,r,u,i,a){var t=[E(r[0],u[0])];return F(e,r,u,t,i,a)}N.exports=G
});var R=o(function(er,O){
var H=require('@stdlib/array-base-assert-is-accessor-array/dist'),I=require('@stdlib/array-base-accessor-setter/dist'),J=require('@stdlib/array-base-setter/dist'),m=require('@stdlib/array-dtype/dist'),K=p(),L=S();function M(e,r,u,i){var a,t;return t=e[0],H(t)&&(a=I(m(t))),a?(a=a||J(m(t)),L(e,r,u,[a],i)):K(e,r,u,i)}O.exports=M
});var j=o(function(tr,g){
var P=require('@stdlib/array-base-assert-is-accessor-array/dist'),Q=require('@stdlib/array-base-accessor-setter/dist'),T=require('@stdlib/array-base-setter/dist'),b=require('@stdlib/array-dtype/dist'),U=x(),V=l();function W(e,r,u,i,a){var t,s;return s=e[0],P(s)&&(t=Q(b(s))),t?(t=t||T(b(s)),V(e,r,u,i,[t],a)):U(e,r,u,i,a)}g.exports=W
});var X=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=R(),Y=j();X(k,"ndarray",Y);module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
