// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@v0.2.1-esm/index.mjs";function i(r,i,n,s,a){var o,d,l,f;if(r<=0)return NaN;if(1===r||0===n)return void 0===(l=s.call(a,i[0],0,0,i))?NaN:l;for(d=n<0?(1-r)*n:0,f=0;f<r&&((o=s.call(a,i[d],f,d,i))!=o||void 0===o);f++)d+=n;if(f===r)return NaN;for(f+=1;f<r;f++)d+=n,void 0===(l=s.call(a,i[d],f,d,i))||e(l)||(l>o||l===o&&t(l))&&(o=l);return o}r(i,"ndarray",(function(r,i,n,s,a,o){var d,l,f,m;if(r<=0)return NaN;if(1===r||0===n)return void 0===(f=a.call(o,i[0],0,0,i))?NaN:f;for(l=s,m=0;m<r&&((d=a.call(o,i[l],m,l,i))!=d||void 0===d);m++)l+=n;if(m===r)return NaN;for(m+=1;m<r;m++)l+=n,void 0===(f=a.call(o,i[l],m,l,i))||e(f)||(f>d||f===d&&t(f))&&(d=f);return d}));const{ndarray:n}=i;export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
