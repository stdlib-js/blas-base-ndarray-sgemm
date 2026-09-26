"use strict";var O=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var N=O(function(K,C){
var S=require('@stdlib/ndarray-base-shape/dist'),d=require('@stdlib/ndarray-base-strides/dist'),g=require('@stdlib/ndarray-base-offset/dist'),p=require('@stdlib/ndarray-base-data-buffer/dist'),i=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),B=require('@stdlib/blas-base-transpose-operation-resolve-enum/dist'),x=require('@stdlib/blas-base-sgemm/dist').ndarray,E=B("no-transpose");function b(r){var e,t,A,c,u,n,l,f,q,v,s,a,h,m,o;return v=r[0],s=r[1],a=r[2],e=i(r[3]),t=i(r[4]),A=i(r[5]),c=i(r[6]),u=S(v,!1),n=S(a,!1),l=d(v,!1),f=d(s,!1),q=d(a,!1),h=n[0],m=n[1],B(e)===E?o=u[1]:o=u[0],x(e,t,h,m,o,A,p(v),l[0],l[1],g(v),p(s),f[0],f[1],g(s),c,p(a),q[0],q[1],g(a)),a}C.exports=b
});var k=N();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
