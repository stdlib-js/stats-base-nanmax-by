"use strict";var q=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var m=q(function(I,d){
var y=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-assert-is-positive-zero/dist');function j(i,e,o,t,c,s){var n,u,v,a,r,f;if(n=e.data,u=e.accessors[0],i===1||o===0)return r=c.call(s,u(n,t),0,t,n),r===void 0||y(r)?NaN:r;for(a=t,f=0;f<i&&(v=c.call(s,u(n,a),f,a,n),!(v===v&&v!==void 0));f++)a+=o;if(f===i)return NaN;for(f+=1,f;f<i;f++)a+=o,r=c.call(s,u(n,a),f,a,n),!(r===void 0||y(r))&&(r>v||r===v&&Z(r))&&(v=r);return v}d.exports=j
});var l=q(function(J,x){
var N=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-positive-zero/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),w=m();function z(i,e,o,t,c,s){var n,u,v,a,r;if(i<=0)return NaN;if(v=R(e),v.accessorProtocol)return w(i,v,o,t,c,s);if(i===1||o===0)return a=c.call(s,e[t],0,t,e),a===void 0?NaN:a;for(u=t,r=0;r<i&&(n=c.call(s,e[u],r,u,e),!(n===n&&n!==void 0));r++)u+=o;if(r===i)return NaN;for(r+=1,r;r<i;r++)u+=o,a=c.call(s,e[u],r,u,e),!(a===void 0||N(a))&&(a>n||a===n&&O(a))&&(n=a);return n}x.exports=z
});var B=q(function(K,p){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=l();function E(i,e,o,t,c){return D(i,e,o,C(i,o),t,c)}p.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=B(),G=l();F(P,"ndarray",G);module.exports=P;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
