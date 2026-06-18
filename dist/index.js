"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var x=o(function(_,y){
function w(e,r,t,i,u){var a,s,c,v,n;if(v=r[0],!(v<=0))for(s=i[0],a=t[0],c=e[0],n=0;n<v;n++)c[s]=u(),s+=a}y.exports=w
});var p=o(function($,d){
var z=require('@stdlib/strided-base-stride2offset/dist'),B=x();function C(e,r,t,i){var u=[z(r[0],t[0])];return B(e,r,t,u,i)}d.exports=C
});var l=o(function(h,A){
function D(e,r,t,i,u,a){var s,c,v,n,q,f;if(q=r[0],!(q<=0))for(v=i[0],c=t[0],n=e[0],s=u[0],f=0;f<q;f++)s(n,v,a()),v+=c}A.exports=D
});var S=o(function(rr,N){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=l();function G(e,r,t,i,u){var a=[E(r[0],t[0])];return F(e,r,t,a,i,u)}N.exports=G
});var R=o(function(er,O){
var H=require('@stdlib/array-base-assert-is-accessor-array/dist'),I=require('@stdlib/array-base-accessor-setter/dist'),J=require('@stdlib/array-base-setter/dist'),m=require('@stdlib/array-dtype/dist'),K=p(),L=S();function M(e,r,t,i){var u,a;return a=e[0],H(a)&&(u=I(m(a))),u?(u=u||J(m(a)),L(e,r,t,[u],i)):K(e,r,t,i)}O.exports=M
});var j=o(function(tr,g){
var P=require('@stdlib/array-base-assert-is-accessor-array/dist'),Q=require('@stdlib/array-base-accessor-setter/dist'),T=require('@stdlib/array-base-setter/dist'),b=require('@stdlib/array-dtype/dist'),U=x(),V=l();function W(e,r,t,i,u){var a,s;return s=e[0],P(s)&&(a=Q(b(s))),a?(a=a||T(b(s)),V(e,r,t,i,[a],u)):U(e,r,t,i,u)}g.exports=W
});var X=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=R(),Y=j();X(k,"ndarray",Y);module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
