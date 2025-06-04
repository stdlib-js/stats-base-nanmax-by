"use strict";var q=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var m=q(function(I,d){
var y=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-assert-is-positive-zero/dist');function Z(e,i,o,t,c,s){var n,u,v,a,r,f;if(n=i.data,u=i.accessors[0],e<=0)return NaN;if(e===1||o===0)return r=c.call(s,u(n,t),0,t,n),r===void 0||y(r)?NaN:r;for(a=t,f=0;f<e&&(v=c.call(s,u(n,a),f,a,n),!(v===v&&v!==void 0));f++)a+=o;if(f===e)return NaN;for(f+=1,f;f<e;f++)a+=o,r=c.call(s,u(n,a),f,a,n),!(r===void 0||y(r))&&(r>v||r===v&&N(r))&&(v=r);return v}d.exports=Z
});var l=q(function(J,x){
var j=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-positive-zero/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),w=m();function z(e,i,o,t,c,s){var n,u,v,a,r;if(e<=0)return NaN;if(v=R(i),v.accessorProtocol)return w(e,v,o,t,c,s);if(e===1||o===0)return a=c.call(s,i[t],0,t,i),a===void 0?NaN:a;for(u=t,r=0;r<e&&(n=c.call(s,i[u],r,u,i),!(n===n&&n!==void 0));r++)u+=o;if(r===e)return NaN;for(r+=1,r;r<e;r++)u+=o,a=c.call(s,i[u],r,u,i),!(a===void 0||j(a))&&(a>n||a===n&&O(a))&&(n=a);return n}x.exports=z
});var B=q(function(K,p){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=l();function E(e,i,o,t,c){return D(e,i,o,C(e,o),t,c)}p.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=B(),G=l();F(P,"ndarray",G);module.exports=P;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
