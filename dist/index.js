"use strict";var c=function(n,a){return function(){return a||n((a={exports:{}}).exports,a),a.exports}};var s=c(function(C,l){
var B=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-assert-is-positive-zero/dist');function P(n,a,o,t,f){var u,i,e,r;if(n<=0)return NaN;if(n===1||o===0)return e=t.call(f,a[0],0,0,a),e===void 0?NaN:e;for(o<0?i=(1-n)*o:i=0,r=0;r<n&&(u=t.call(f,a[i],r,i,a),!(u===u&&u!==void 0));r++)i+=o;if(r===n)return NaN;for(r+=1,r;r<n;r++)i+=o,e=t.call(f,a[i],r,i,a),!(e===void 0||B(e))&&(e>u||e===u&&N(e))&&(u=e);return u}l.exports=P
});var m=c(function(D,q){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-assert-is-positive-zero/dist');function O(n,a,o,t,f,u){var i,e,r,v;if(n<=0)return NaN;if(n===1||o===0)return r=f.call(u,a[0],0,0,a),r===void 0?NaN:r;for(e=t,v=0;v<n&&(i=f.call(u,a[e],v,e,a),!(i===i&&i!==void 0));v++)e+=o;if(v===n)return NaN;for(v+=1,v;v<n;v++)e+=o,r=f.call(u,a[e],v,e,a),!(r===void 0||Z(r))&&(r>i||r===i&&x(r))&&(i=r);return i}q.exports=O
});var d=c(function(E,p){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=s(),j=m();R(y,"ndarray",j);p.exports=y
});var w=d();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
