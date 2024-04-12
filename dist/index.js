"use strict";var o=function(t,i){return function(){return i||t((i={exports:{}}).exports,i),i.exports}};var q=o(function(W,l){
function w(t,i,s,n){var e,r,a,u,v;if(u=i[0],!(u<=0))for(e=s[0],e<0?r=(1-u)*e:r=0,a=t[0],v=0;v<u;v++)a[r]=n(),r+=e}l.exports=w
});var d=o(function(X,y){
function z(t,i,s,n,e){var r,a,u,v,x,c;if(x=i[0],!(x<=0))for(a=s[0],a<0?u=(1-x)*a:u=0,v=t[0],r=n[0],c=0;c<x;c++)r(v,u,e()),u+=a}y.exports=z
});var N=o(function(Y,A){
var B=require('@stdlib/array-base-assert-is-accessor-array/dist'),C=require('@stdlib/array-base-accessor-setter/dist'),D=require('@stdlib/array-base-setter/dist'),p=require('@stdlib/array-dtype/dist'),E=q(),F=d();function G(t,i,s,n){var e,r;return r=t[0],B(r)&&(e=C(p(r))),e?(e=e||D(p(r)),F(t,i,s,[e],n)):E(t,i,s,n)}A.exports=G
});var m=o(function(Z,S){
function H(t,i,s,n,e){var r,a,u,v,x;if(v=i[0],!(v<=0))for(a=n[0],r=s[0],u=t[0],x=0;x<v;x++)u[a]=e(),a+=r}S.exports=H
});var R=o(function(_,O){
function I(t,i,s,n,e,r){var a,u,v,x,c,f;if(c=i[0],!(c<=0))for(v=n[0],u=s[0],x=t[0],a=e[0],f=0;f<c;f++)a(x,v,r()),v+=u}O.exports=I
});var j=o(function($,g){
var J=require('@stdlib/array-base-assert-is-accessor-array/dist'),K=require('@stdlib/array-base-accessor-setter/dist'),L=require('@stdlib/array-base-setter/dist'),b=require('@stdlib/array-dtype/dist'),M=m(),P=R();function Q(t,i,s,n,e){var r,a;return a=t[0],J(a)&&(r=K(b(a))),r?(r=r||L(b(a)),P(t,i,s,n,[r],e)):M(t,i,s,n,e)}g.exports=Q
});var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=N(),U=j();T(k,"ndarray",U);module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
