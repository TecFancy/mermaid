import{a as bn,b as Wn,c as L,k as Xn,d as zn,e as Un,g as O,j as gn,l as xn,m as En,t as Hn,n as kn,o as Jn,p as Kn,f as s,G as x,h as w,i as g,q as M,v as y,r as V}from"./graph.CslgWVjQ.js";import{aH as Zn,aI as jn,aJ as Qn,aK as yn,aL as F,aM as Nn,aN as ne,aO as Ln,aP as J,aQ as ee,aR as re,aS as z,aT as K,aU as on,aV as ie,aW as _n,aX as te,aY as ae,aZ as U}from"./state.CSGkJ2hg.js";var un=1/0,oe=17976931348623157e292;function S(n){if(!n)return n===0?n:0;if(n=Zn(n),n===un||n===-un){var e=n<0?-1:1;return e*oe}return n===n?n:0}function ue(n){var e=S(n),r=e%1;return e===e?r?e-r:e:0}function _(n){var e=n==null?0:n.length;return e?bn(n):[]}function de(n){return jn(Qn(n,void 0,_),n+"")}var fe=1,se=4;function ce(n){return Wn(n,fe|se)}var Cn=Object.prototype,he=Cn.hasOwnProperty,le=yn(function(n,e){n=Object(n);var r=-1,i=e.length,t=i>2?e[2]:void 0;for(t&&F(e[0],e[1],t)&&(i=1);++r<i;)for(var o=e[r],a=Nn(o),u=-1,d=a.length;++u<d;){var f=a[u],c=n[f];(c===void 0||ne(c,Cn[f])&&!he.call(n,f))&&(n[f]=o[f])}return n});function A(n){var e=n==null?0:n.length;return e?n[e-1]:void 0}function ve(n){return function(e,r,i){var t=Object(e);if(!Ln(e)){var o=L(r);e=Xn(e),r=function(u){return o(t[u],u,t)}}var a=n(e,r,i);return a>-1?t[o?e[a]:a]:void 0}}var pe=Math.max;function we(n,e,r){var i=n==null?0:n.length;if(!i)return-1;var t=r==null?0:ue(r);return t<0&&(t=pe(i+t,0)),zn(n,L(e),t)}var Z=ve(we);function Rn(n,e){var r=-1,i=Ln(n)?Array(n.length):[];return Un(n,function(t,o,a){i[++r]=e(t,o,a)}),i}function m(n,e){var r=J(n)?O:Rn;return r(n,L(e))}function me(n,e){return n==null?n:ee(n,gn(e),Nn)}function be(n,e){return n&&xn(n,gn(e))}function ge(n,e){return n>e}function In(n,e){return n<e}function G(n,e){var r={};return e=L(e),xn(n,function(i,t,o){re(r,t,e(i,t,o))}),r}function j(n,e,r){for(var i=-1,t=n.length;++i<t;){var o=n[i],a=e(o);if(a!=null&&(u===void 0?a===a&&!z(a):r(a,u)))var u=a,d=o}return d}function E(n){return n&&n.length?j(n,K,ge):void 0}function I(n){return n&&n.length?j(n,K,In):void 0}function Q(n,e){return n&&n.length?j(n,L(e),In):void 0}function xe(n,e,r,i){if(!on(n))return n;e=En(e,n);for(var t=-1,o=e.length,a=o-1,u=n;u!=null&&++t<o;){var d=Hn(e[t]),f=r;if(d==="__proto__"||d==="constructor"||d==="prototype")return n;if(t!=a){var c=u[d];f=void 0,f===void 0&&(f=on(c)?c:ie(e[t+1])?[]:{})}_n(u,d,f),u=u[d]}return n}function Ee(n,e,r){for(var i=-1,t=e.length,o={};++i<t;){var a=e[i],u=kn(n,a);r(u,a)&&xe(o,En(a,n),u)}return o}function ke(n,e){var r=n.length;for(n.sort(e);r--;)n[r]=n[r].value;return n}function ye(n,e){if(n!==e){var r=n!==void 0,i=n===null,t=n===n,o=z(n),a=e!==void 0,u=e===null,d=e===e,f=z(e);if(!u&&!f&&!o&&n>e||o&&a&&d&&!u&&!f||i&&a&&d||!r&&d||!t)return 1;if(!i&&!o&&!f&&n<e||f&&r&&t&&!i&&!o||u&&r&&t||!a&&t||!d)return-1}return 0}function Ne(n,e,r){for(var i=-1,t=n.criteria,o=e.criteria,a=t.length,u=r.length;++i<a;){var d=ye(t[i],o[i]);if(d){if(i>=u)return d;var f=r[i];return d*(f=="desc"?-1:1)}}return n.index-e.index}function Le(n,e,r){e.length?e=O(e,function(o){return J(o)?function(a){return kn(a,o.length===1?o[0]:o)}:o}):e=[K];var i=-1;e=O(e,te(L));var t=Rn(n,function(o,a,u){var d=O(e,function(f){return f(o)});return{criteria:d,index:++i,value:o}});return ke(t,function(o,a){return Ne(o,a,r)})}function _e(n,e){return Ee(n,e,function(r,i){return Jn(n,i)})}var B=de(function(n,e){return n==null?{}:_e(n,e)}),Ce=Math.ceil,Re=Math.max;function Ie(n,e,r,i){for(var t=-1,o=Re(Ce((e-n)/(r||1)),0),a=Array(o);o--;)a[++t]=n,n+=r;return a}function Te(n){return function(e,r,i){return i&&typeof i!="number"&&F(e,r,i)&&(r=i=void 0),e=S(e),r===void 0?(r=e,e=0):r=S(r),i=i===void 0?e<r?1:-1:S(i),Ie(e,r,i)}}var N=Te(),P=yn(function(n,e){if(n==null)return[];var r=e.length;return r>1&&F(n,e[0],e[1])?e=[]:r>2&&F(e[0],e[1],e[2])&&(e=[e[0]]),Le(n,bn(e),[])}),Me=0;function nn(n){var e=++Me;return Kn(n)+e}function Pe(n,e,r){for(var i=-1,t=n.length,o=e.length,a={};++i<t;){var u=i<o?e[i]:void 0;r(a,n[i],u)}return a}function Oe(n,e){return Pe(n||[],e||[],_n)}class Se{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,r=e._prev;if(r!==e)return dn(r),r}enqueue(e){var r=this._sentinel;e._prev&&e._next&&dn(e),e._next=r._next,r._next._prev=e,r._next=e,e._prev=r}toString(){for(var e=[],r=this._sentinel,i=r._prev;i!==r;)e.push(JSON.stringify(i,Fe)),i=i._prev;return"["+e.join(", ")+"]"}}function dn(n){n._prev._next=n._next,n._next._prev=n._prev,delete n._next,delete n._prev}function Fe(n,e){if(n!=="_next"&&n!=="_prev")return e}var Ae=ae(1);function Be(n,e){if(n.nodeCount()<=1)return[];var r=Ge(n,e||Ae),i=Ve(r.graph,r.buckets,r.zeroIdx);return _(m(i,function(t){return n.outEdges(t.v,t.w)}))}function Ve(n,e,r){for(var i=[],t=e[e.length-1],o=e[0],a;n.nodeCount();){for(;a=o.dequeue();)D(n,e,r,a);for(;a=t.dequeue();)D(n,e,r,a);if(n.nodeCount()){for(var u=e.length-2;u>0;--u)if(a=e[u].dequeue(),a){i=i.concat(D(n,e,r,a,!0));break}}}return i}function D(n,e,r,i,t){var o=t?[]:void 0;return s(n.inEdges(i.v),function(a){var u=n.edge(a),d=n.node(a.v);t&&o.push({v:a.v,w:a.w}),d.out-=u,H(e,r,d)}),s(n.outEdges(i.v),function(a){var u=n.edge(a),d=a.w,f=n.node(d);f.in-=u,H(e,r,f)}),n.removeNode(i.v),o}function Ge(n,e){var r=new x,i=0,t=0;s(n.nodes(),function(u){r.setNode(u,{v:u,in:0,out:0})}),s(n.edges(),function(u){var d=r.edge(u.v,u.w)||0,f=e(u),c=d+f;r.setEdge(u.v,u.w,c),t=Math.max(t,r.node(u.v).out+=f),i=Math.max(i,r.node(u.w).in+=f)});var o=N(t+i+3).map(function(){return new Se}),a=i+1;return s(r.nodes(),function(u){H(o,a,r.node(u))}),{graph:r,buckets:o,zeroIdx:a}}function H(n,e,r){r.out?r.in?n[r.out-r.in+e].enqueue(r):n[n.length-1].enqueue(r):n[0].enqueue(r)}function Ye(n){var e=n.graph().acyclicer==="greedy"?Be(n,r(n)):De(n);s(e,function(i){var t=n.edge(i);n.removeEdge(i),t.forwardName=i.name,t.reversed=!0,n.setEdge(i.w,i.v,t,nn("rev"))});function r(i){return function(t){return i.edge(t).weight}}}function De(n){var e=[],r={},i={};function t(o){w(i,o)||(i[o]=!0,r[o]=!0,s(n.outEdges(o),function(a){w(r,a.w)?e.push(a):t(a.w)}),delete r[o])}return s(n.nodes(),t),e}function qe(n){s(n.edges(),function(e){var r=n.edge(e);if(r.reversed){n.removeEdge(e);var i=r.forwardName;delete r.reversed,delete r.forwardName,n.setEdge(e.w,e.v,r,i)}})}function C(n,e,r,i){var t;do t=nn(i);while(n.hasNode(t));return r.dummy=e,n.setNode(t,r),t}function $e(n){var e=new x().setGraph(n.graph());return s(n.nodes(),function(r){e.setNode(r,n.node(r))}),s(n.edges(),function(r){var i=e.edge(r.v,r.w)||{weight:0,minlen:1},t=n.edge(r);e.setEdge(r.v,r.w,{weight:i.weight+t.weight,minlen:Math.max(i.minlen,t.minlen)})}),e}function Tn(n){var e=new x({multigraph:n.isMultigraph()}).setGraph(n.graph());return s(n.nodes(),function(r){n.children(r).length||e.setNode(r,n.node(r))}),s(n.edges(),function(r){e.setEdge(r,n.edge(r))}),e}function fn(n,e){var r=n.x,i=n.y,t=e.x-r,o=e.y-i,a=n.width/2,u=n.height/2;if(!t&&!o)throw new Error("Not possible to find intersection inside of the rectangle");var d,f;return Math.abs(o)*a>Math.abs(t)*u?(o<0&&(u=-u),d=u*t/o,f=u):(t<0&&(a=-a),d=a,f=a*o/t),{x:r+d,y:i+f}}function Y(n){var e=m(N(Mn(n)+1),function(){return[]});return s(n.nodes(),function(r){var i=n.node(r),t=i.rank;g(t)||(e[t][i.order]=r)}),e}function We(n){var e=I(m(n.nodes(),function(r){return n.node(r).rank}));s(n.nodes(),function(r){var i=n.node(r);w(i,"rank")&&(i.rank-=e)})}function Xe(n){var e=I(m(n.nodes(),function(o){return n.node(o).rank})),r=[];s(n.nodes(),function(o){var a=n.node(o).rank-e;r[a]||(r[a]=[]),r[a].push(o)});var i=0,t=n.graph().nodeRankFactor;s(r,function(o,a){g(o)&&a%t!==0?--i:i&&s(o,function(u){n.node(u).rank+=i})})}function sn(n,e,r,i){var t={width:0,height:0};return arguments.length>=4&&(t.rank=r,t.order=i),C(n,"border",t,e)}function Mn(n){return E(m(n.nodes(),function(e){var r=n.node(e).rank;if(!g(r))return r}))}function ze(n,e){var r={lhs:[],rhs:[]};return s(n,function(i){e(i)?r.lhs.push(i):r.rhs.push(i)}),r}function Ue(n,e){return e()}function He(n){function e(r){var i=n.children(r),t=n.node(r);if(i.length&&s(i,e),w(t,"minRank")){t.borderLeft=[],t.borderRight=[];for(var o=t.minRank,a=t.maxRank+1;o<a;++o)cn(n,"borderLeft","_bl",r,t,o),cn(n,"borderRight","_br",r,t,o)}}s(n.children(),e)}function cn(n,e,r,i,t,o){var a={width:0,height:0,rank:o,borderType:e},u=t[e][o-1],d=C(n,"border",a,r);t[e][o]=d,n.setParent(d,i),u&&n.setEdge(u,d,{weight:1})}function Je(n){var e=n.graph().rankdir.toLowerCase();(e==="lr"||e==="rl")&&Pn(n)}function Ke(n){var e=n.graph().rankdir.toLowerCase();(e==="bt"||e==="rl")&&Ze(n),(e==="lr"||e==="rl")&&(je(n),Pn(n))}function Pn(n){s(n.nodes(),function(e){hn(n.node(e))}),s(n.edges(),function(e){hn(n.edge(e))})}function hn(n){var e=n.width;n.width=n.height,n.height=e}function Ze(n){s(n.nodes(),function(e){q(n.node(e))}),s(n.edges(),function(e){var r=n.edge(e);s(r.points,q),w(r,"y")&&q(r)})}function q(n){n.y=-n.y}function je(n){s(n.nodes(),function(e){$(n.node(e))}),s(n.edges(),function(e){var r=n.edge(e);s(r.points,$),w(r,"x")&&$(r)})}function $(n){var e=n.x;n.x=n.y,n.y=e}function Qe(n){n.graph().dummyChains=[],s(n.edges(),function(e){nr(n,e)})}function nr(n,e){var r=e.v,i=n.node(r).rank,t=e.w,o=n.node(t).rank,a=e.name,u=n.edge(e),d=u.labelRank;if(o!==i+1){n.removeEdge(e);var f,c,h;for(h=0,++i;i<o;++h,++i)u.points=[],c={width:0,height:0,edgeLabel:u,edgeObj:e,rank:i},f=C(n,"edge",c,"_d"),i===d&&(c.width=u.width,c.height=u.height,c.dummy="edge-label",c.labelpos=u.labelpos),n.setEdge(r,f,{weight:u.weight},a),h===0&&n.graph().dummyChains.push(f),r=f;n.setEdge(r,t,{weight:u.weight},a)}}function er(n){s(n.graph().dummyChains,function(e){var r=n.node(e),i=r.edgeLabel,t;for(n.setEdge(r.edgeObj,i);r.dummy;)t=n.successors(e)[0],n.removeNode(e),i.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(i.x=r.x,i.y=r.y,i.width=r.width,i.height=r.height),e=t,r=n.node(e)})}function en(n){var e={};function r(i){var t=n.node(i);if(w(e,i))return t.rank;e[i]=!0;var o=I(m(n.outEdges(i),function(a){return r(a.w)-n.edge(a).minlen}));return(o===Number.POSITIVE_INFINITY||o===void 0||o===null)&&(o=0),t.rank=o}s(n.sources(),r)}function T(n,e){return n.node(e.w).rank-n.node(e.v).rank-n.edge(e).minlen}function On(n){var e=new x({directed:!1}),r=n.nodes()[0],i=n.nodeCount();e.setNode(r,{});for(var t,o;rr(e,n)<i;)t=ir(e,n),o=e.hasNode(t.v)?T(n,t):-T(n,t),tr(e,n,o);return e}function rr(n,e){function r(i){s(e.nodeEdges(i),function(t){var o=t.v,a=i===o?t.w:o;!n.hasNode(a)&&!T(e,t)&&(n.setNode(a,{}),n.setEdge(i,a,{}),r(a))})}return s(n.nodes(),r),n.nodeCount()}function ir(n,e){return Q(e.edges(),function(r){if(n.hasNode(r.v)!==n.hasNode(r.w))return T(e,r)})}function tr(n,e,r){s(n.nodes(),function(i){e.node(i).rank+=r})}function ar(){}ar.prototype=new Error;function Sn(n,e,r){J(e)||(e=[e]);var i=(n.isDirected()?n.successors:n.neighbors).bind(n),t=[],o={};return s(e,function(a){if(!n.hasNode(a))throw new Error("Graph does not have node: "+a);Fn(n,a,r==="post",o,i,t)}),t}function Fn(n,e,r,i,t,o){w(i,e)||(i[e]=!0,r||o.push(e),s(t(e),function(a){Fn(n,a,r,i,t,o)}),r&&o.push(e))}function or(n,e){return Sn(n,e,"post")}function ur(n,e){return Sn(n,e,"pre")}k.initLowLimValues=tn;k.initCutValues=rn;k.calcCutValue=An;k.leaveEdge=Vn;k.enterEdge=Gn;k.exchangeEdges=Yn;function k(n){n=$e(n),en(n);var e=On(n);tn(e),rn(e,n);for(var r,i;r=Vn(e);)i=Gn(e,n,r),Yn(e,n,r,i)}function rn(n,e){var r=or(n,n.nodes());r=r.slice(0,r.length-1),s(r,function(i){dr(n,e,i)})}function dr(n,e,r){var i=n.node(r),t=i.parent;n.edge(r,t).cutvalue=An(n,e,r)}function An(n,e,r){var i=n.node(r),t=i.parent,o=!0,a=e.edge(r,t),u=0;return a||(o=!1,a=e.edge(t,r)),u=a.weight,s(e.nodeEdges(r),function(d){var f=d.v===r,c=f?d.w:d.v;if(c!==t){var h=f===o,l=e.edge(d).weight;if(u+=h?l:-l,sr(n,r,c)){var v=n.edge(r,c).cutvalue;u+=h?-v:v}}}),u}function tn(n,e){arguments.length<2&&(e=n.nodes()[0]),Bn(n,{},1,e)}function Bn(n,e,r,i,t){var o=r,a=n.node(i);return e[i]=!0,s(n.neighbors(i),function(u){w(e,u)||(r=Bn(n,e,r,u,i))}),a.low=o,a.lim=r++,t?a.parent=t:delete a.parent,r}function Vn(n){return Z(n.edges(),function(e){return n.edge(e).cutvalue<0})}function Gn(n,e,r){var i=r.v,t=r.w;e.hasEdge(i,t)||(i=r.w,t=r.v);var o=n.node(i),a=n.node(t),u=o,d=!1;o.lim>a.lim&&(u=a,d=!0);var f=M(e.edges(),function(c){return d===ln(n,n.node(c.v),u)&&d!==ln(n,n.node(c.w),u)});return Q(f,function(c){return T(e,c)})}function Yn(n,e,r,i){var t=r.v,o=r.w;n.removeEdge(t,o),n.setEdge(i.v,i.w,{}),tn(n),rn(n,e),fr(n,e)}function fr(n,e){var r=Z(n.nodes(),function(t){return!e.node(t).parent}),i=ur(n,r);i=i.slice(1),s(i,function(t){var o=n.node(t).parent,a=e.edge(t,o),u=!1;a||(a=e.edge(o,t),u=!0),e.node(t).rank=e.node(o).rank+(u?a.minlen:-a.minlen)})}function sr(n,e,r){return n.hasEdge(e,r)}function ln(n,e,r){return r.low<=e.lim&&e.lim<=r.lim}function cr(n){switch(n.graph().ranker){case"network-simplex":vn(n);break;case"tight-tree":lr(n);break;case"longest-path":hr(n);break;default:vn(n)}}var hr=en;function lr(n){en(n),On(n)}function vn(n){k(n)}function vr(n){var e=C(n,"root",{},"_root"),r=pr(n),i=E(y(r))-1,t=2*i+1;n.graph().nestingRoot=e,s(n.edges(),function(a){n.edge(a).minlen*=t});var o=wr(n)+1;s(n.children(),function(a){Dn(n,e,t,o,i,r,a)}),n.graph().nodeRankFactor=t}function Dn(n,e,r,i,t,o,a){var u=n.children(a);if(!u.length){a!==e&&n.setEdge(e,a,{weight:0,minlen:r});return}var d=sn(n,"_bt"),f=sn(n,"_bb"),c=n.node(a);n.setParent(d,a),c.borderTop=d,n.setParent(f,a),c.borderBottom=f,s(u,function(h){Dn(n,e,r,i,t,o,h);var l=n.node(h),v=l.borderTop?l.borderTop:h,p=l.borderBottom?l.borderBottom:h,b=l.borderTop?i:2*i,R=v!==p?1:t-o[a]+1;n.setEdge(d,v,{weight:b,minlen:R,nestingEdge:!0}),n.setEdge(p,f,{weight:b,minlen:R,nestingEdge:!0})}),n.parent(a)||n.setEdge(e,d,{weight:0,minlen:t+o[a]})}function pr(n){var e={};function r(i,t){var o=n.children(i);o&&o.length&&s(o,function(a){r(a,t+1)}),e[i]=t}return s(n.children(),function(i){r(i,1)}),e}function wr(n){return V(n.edges(),function(e,r){return e+n.edge(r).weight},0)}function mr(n){var e=n.graph();n.removeNode(e.nestingRoot),delete e.nestingRoot,s(n.edges(),function(r){var i=n.edge(r);i.nestingEdge&&n.removeEdge(r)})}function br(n,e,r){var i={},t;s(r,function(o){for(var a=n.parent(o),u,d;a;){if(u=n.parent(a),u?(d=i[u],i[u]=a):(d=t,t=a),d&&d!==a){e.setEdge(d,a);return}a=u}})}function gr(n,e,r){var i=xr(n),t=new x({compound:!0}).setGraph({root:i}).setDefaultNodeLabel(function(o){return n.node(o)});return s(n.nodes(),function(o){var a=n.node(o),u=n.parent(o);(a.rank===e||a.minRank<=e&&e<=a.maxRank)&&(t.setNode(o),t.setParent(o,u||i),s(n[r](o),function(d){var f=d.v===o?d.w:d.v,c=t.edge(f,o),h=g(c)?0:c.weight;t.setEdge(f,o,{weight:n.edge(d).weight+h})}),w(a,"minRank")&&t.setNode(o,{borderLeft:a.borderLeft[e],borderRight:a.borderRight[e]}))}),t}function xr(n){for(var e;n.hasNode(e=nn("_root")););return e}function Er(n,e){for(var r=0,i=1;i<e.length;++i)r+=kr(n,e[i-1],e[i]);return r}function kr(n,e,r){for(var i=Oe(r,m(r,function(f,c){return c})),t=_(m(e,function(f){return P(m(n.outEdges(f),function(c){return{pos:i[c.w],weight:n.edge(c).weight}}),"pos")})),o=1;o<r.length;)o<<=1;var a=2*o-1;o-=1;var u=m(new Array(a),function(){return 0}),d=0;return s(t.forEach(function(f){var c=f.pos+o;u[c]+=f.weight;for(var h=0;c>0;)c%2&&(h+=u[c+1]),c=c-1>>1,u[c]+=f.weight;d+=f.weight*h})),d}function yr(n){var e={},r=M(n.nodes(),function(u){return!n.children(u).length}),i=E(m(r,function(u){return n.node(u).rank})),t=m(N(i+1),function(){return[]});function o(u){if(!w(e,u)){e[u]=!0;var d=n.node(u);t[d.rank].push(u),s(n.successors(u),o)}}var a=P(r,function(u){return n.node(u).rank});return s(a,o),t}function Nr(n,e){return m(e,function(r){var i=n.inEdges(r);if(i.length){var t=V(i,function(o,a){var u=n.edge(a),d=n.node(a.v);return{sum:o.sum+u.weight*d.order,weight:o.weight+u.weight}},{sum:0,weight:0});return{v:r,barycenter:t.sum/t.weight,weight:t.weight}}else return{v:r}})}function Lr(n,e){var r={};s(n,function(t,o){var a=r[t.v]={indegree:0,in:[],out:[],vs:[t.v],i:o};g(t.barycenter)||(a.barycenter=t.barycenter,a.weight=t.weight)}),s(e.edges(),function(t){var o=r[t.v],a=r[t.w];!g(o)&&!g(a)&&(a.indegree++,o.out.push(r[t.w]))});var i=M(r,function(t){return!t.indegree});return _r(i)}function _r(n){var e=[];function r(o){return function(a){a.merged||(g(a.barycenter)||g(o.barycenter)||a.barycenter>=o.barycenter)&&Cr(o,a)}}function i(o){return function(a){a.in.push(o),--a.indegree===0&&n.push(a)}}for(;n.length;){var t=n.pop();e.push(t),s(t.in.reverse(),r(t)),s(t.out,i(t))}return m(M(e,function(o){return!o.merged}),function(o){return B(o,["vs","i","barycenter","weight"])})}function Cr(n,e){var r=0,i=0;n.weight&&(r+=n.barycenter*n.weight,i+=n.weight),e.weight&&(r+=e.barycenter*e.weight,i+=e.weight),n.vs=e.vs.concat(n.vs),n.barycenter=r/i,n.weight=i,n.i=Math.min(e.i,n.i),e.merged=!0}function Rr(n,e){var r=ze(n,function(c){return w(c,"barycenter")}),i=r.lhs,t=P(r.rhs,function(c){return-c.i}),o=[],a=0,u=0,d=0;i.sort(Ir(!!e)),d=pn(o,t,d),s(i,function(c){d+=c.vs.length,o.push(c.vs),a+=c.barycenter*c.weight,u+=c.weight,d=pn(o,t,d)});var f={vs:_(o)};return u&&(f.barycenter=a/u,f.weight=u),f}function pn(n,e,r){for(var i;e.length&&(i=A(e)).i<=r;)e.pop(),n.push(i.vs),r++;return r}function Ir(n){return function(e,r){return e.barycenter<r.barycenter?-1:e.barycenter>r.barycenter?1:n?r.i-e.i:e.i-r.i}}function qn(n,e,r,i){var t=n.children(e),o=n.node(e),a=o?o.borderLeft:void 0,u=o?o.borderRight:void 0,d={};a&&(t=M(t,function(p){return p!==a&&p!==u}));var f=Nr(n,t);s(f,function(p){if(n.children(p.v).length){var b=qn(n,p.v,r,i);d[p.v]=b,w(b,"barycenter")&&Mr(p,b)}});var c=Lr(f,r);Tr(c,d);var h=Rr(c,i);if(a&&(h.vs=_([a,h.vs,u]),n.predecessors(a).length)){var l=n.node(n.predecessors(a)[0]),v=n.node(n.predecessors(u)[0]);w(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+l.order+v.order)/(h.weight+2),h.weight+=2}return h}function Tr(n,e){s(n,function(r){r.vs=_(r.vs.map(function(i){return e[i]?e[i].vs:i}))})}function Mr(n,e){g(n.barycenter)?(n.barycenter=e.barycenter,n.weight=e.weight):(n.barycenter=(n.barycenter*n.weight+e.barycenter*e.weight)/(n.weight+e.weight),n.weight+=e.weight)}function Pr(n){var e=Mn(n),r=wn(n,N(1,e+1),"inEdges"),i=wn(n,N(e-1,-1,-1),"outEdges"),t=yr(n);mn(n,t);for(var o=Number.POSITIVE_INFINITY,a,u=0,d=0;d<4;++u,++d){Or(u%2?r:i,u%4>=2),t=Y(n);var f=Er(n,t);f<o&&(d=0,a=ce(t),o=f)}mn(n,a)}function wn(n,e,r){return m(e,function(i){return gr(n,i,r)})}function Or(n,e){var r=new x;s(n,function(i){var t=i.graph().root,o=qn(i,t,r,e);s(o.vs,function(a,u){i.node(a).order=u}),br(i,r,o.vs)})}function mn(n,e){s(e,function(r){s(r,function(i,t){n.node(i).order=t})})}function Sr(n){var e=Ar(n);s(n.graph().dummyChains,function(r){for(var i=n.node(r),t=i.edgeObj,o=Fr(n,e,t.v,t.w),a=o.path,u=o.lca,d=0,f=a[d],c=!0;r!==t.w;){if(i=n.node(r),c){for(;(f=a[d])!==u&&n.node(f).maxRank<i.rank;)d++;f===u&&(c=!1)}if(!c){for(;d<a.length-1&&n.node(f=a[d+1]).minRank<=i.rank;)d++;f=a[d]}n.setParent(r,f),r=n.successors(r)[0]}})}function Fr(n,e,r,i){var t=[],o=[],a=Math.min(e[r].low,e[i].low),u=Math.max(e[r].lim,e[i].lim),d,f;d=r;do d=n.parent(d),t.push(d);while(d&&(e[d].low>a||u>e[d].lim));for(f=d,d=i;(d=n.parent(d))!==f;)o.push(d);return{path:t.concat(o.reverse()),lca:f}}function Ar(n){var e={},r=0;function i(t){var o=r;s(n.children(t),i),e[t]={low:o,lim:r++}}return s(n.children(),i),e}function Br(n,e){var r={};function i(t,o){var a=0,u=0,d=t.length,f=A(o);return s(o,function(c,h){var l=Gr(n,c),v=l?n.node(l).order:d;(l||c===f)&&(s(o.slice(u,h+1),function(p){s(n.predecessors(p),function(b){var R=n.node(b),an=R.order;(an<a||v<an)&&!(R.dummy&&n.node(p).dummy)&&$n(r,b,p)})}),u=h+1,a=v)}),o}return V(e,i),r}function Vr(n,e){var r={};function i(o,a,u,d,f){var c;s(N(a,u),function(h){c=o[h],n.node(c).dummy&&s(n.predecessors(c),function(l){var v=n.node(l);v.dummy&&(v.order<d||v.order>f)&&$n(r,l,c)})})}function t(o,a){var u=-1,d,f=0;return s(a,function(c,h){if(n.node(c).dummy==="border"){var l=n.predecessors(c);l.length&&(d=n.node(l[0]).order,i(a,f,h,u,d),f=h,u=d)}i(a,f,a.length,d,o.length)}),a}return V(e,t),r}function Gr(n,e){if(n.node(e).dummy)return Z(n.predecessors(e),function(r){return n.node(r).dummy})}function $n(n,e,r){if(e>r){var i=e;e=r,r=i}var t=n[e];t||(n[e]=t={}),t[r]=!0}function Yr(n,e,r){if(e>r){var i=e;e=r,r=i}return w(n[e],r)}function Dr(n,e,r,i){var t={},o={},a={};return s(e,function(u){s(u,function(d,f){t[d]=d,o[d]=d,a[d]=f})}),s(e,function(u){var d=-1;s(u,function(f){var c=i(f);if(c.length){c=P(c,function(b){return a[b]});for(var h=(c.length-1)/2,l=Math.floor(h),v=Math.ceil(h);l<=v;++l){var p=c[l];o[f]===f&&d<a[p]&&!Yr(r,f,p)&&(o[p]=f,o[f]=t[f]=t[p],d=a[p])}}})}),{root:t,align:o}}function qr(n,e,r,i,t){var o={},a=$r(n,e,r,t),u=t?"borderLeft":"borderRight";function d(h,l){for(var v=a.nodes(),p=v.pop(),b={};p;)b[p]?h(p):(b[p]=!0,v.push(p),v=v.concat(l(p))),p=v.pop()}function f(h){o[h]=a.inEdges(h).reduce(function(l,v){return Math.max(l,o[v.v]+a.edge(v))},0)}function c(h){var l=a.outEdges(h).reduce(function(p,b){return Math.min(p,o[b.w]-a.edge(b))},Number.POSITIVE_INFINITY),v=n.node(h);l!==Number.POSITIVE_INFINITY&&v.borderType!==u&&(o[h]=Math.max(o[h],l))}return d(f,a.predecessors.bind(a)),d(c,a.successors.bind(a)),s(i,function(h){o[h]=o[r[h]]}),o}function $r(n,e,r,i){var t=new x,o=n.graph(),a=Hr(o.nodesep,o.edgesep,i);return s(e,function(u){var d;s(u,function(f){var c=r[f];if(t.setNode(c),d){var h=r[d],l=t.edge(h,c);t.setEdge(h,c,Math.max(a(n,f,d),l||0))}d=f})}),t}function Wr(n,e){return Q(y(e),function(r){var i=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY;return me(r,function(o,a){var u=Jr(n,a)/2;i=Math.max(o+u,i),t=Math.min(o-u,t)}),i-t})}function Xr(n,e){var r=y(e),i=I(r),t=E(r);s(["u","d"],function(o){s(["l","r"],function(a){var u=o+a,d=n[u],f;if(d!==e){var c=y(d);f=a==="l"?i-I(c):t-E(c),f&&(n[u]=G(d,function(h){return h+f}))}})})}function zr(n,e){return G(n.ul,function(r,i){if(e)return n[e.toLowerCase()][i];var t=P(m(n,i));return(t[1]+t[2])/2})}function Ur(n){var e=Y(n),r=U(Br(n,e),Vr(n,e)),i={},t;s(["u","d"],function(a){t=a==="u"?e:y(e).reverse(),s(["l","r"],function(u){u==="r"&&(t=m(t,function(h){return y(h).reverse()}));var d=(a==="u"?n.predecessors:n.successors).bind(n),f=Dr(n,t,r,d),c=qr(n,t,f.root,f.align,u==="r");u==="r"&&(c=G(c,function(h){return-h})),i[a+u]=c})});var o=Wr(n,i);return Xr(i,o),zr(i,n.graph().align)}function Hr(n,e,r){return function(i,t,o){var a=i.node(t),u=i.node(o),d=0,f;if(d+=a.width/2,w(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":f=-a.width/2;break;case"r":f=a.width/2;break}if(f&&(d+=r?f:-f),f=0,d+=(a.dummy?e:n)/2,d+=(u.dummy?e:n)/2,d+=u.width/2,w(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":f=u.width/2;break;case"r":f=-u.width/2;break}return f&&(d+=r?f:-f),f=0,d}}function Jr(n,e){return n.node(e).width}function Kr(n){n=Tn(n),Zr(n),be(Ur(n),function(e,r){n.node(r).x=e})}function Zr(n){var e=Y(n),r=n.graph().ranksep,i=0;s(e,function(t){var o=E(m(t,function(a){return n.node(a).height}));s(t,function(a){n.node(a).y=i+o/2}),i+=o+r})}function yi(n,e){var r=Ue;r("layout",function(){var i=r("  buildLayoutGraph",function(){return di(n)});r("  runLayout",function(){jr(i,r)}),r("  updateInputGraph",function(){Qr(n,i)})})}function jr(n,e){e("    makeSpaceForEdgeLabels",function(){fi(n)}),e("    removeSelfEdges",function(){bi(n)}),e("    acyclic",function(){Ye(n)}),e("    nestingGraph.run",function(){vr(n)}),e("    rank",function(){cr(Tn(n))}),e("    injectEdgeLabelProxies",function(){si(n)}),e("    removeEmptyRanks",function(){Xe(n)}),e("    nestingGraph.cleanup",function(){mr(n)}),e("    normalizeRanks",function(){We(n)}),e("    assignRankMinMax",function(){ci(n)}),e("    removeEdgeLabelProxies",function(){hi(n)}),e("    normalize.run",function(){Qe(n)}),e("    parentDummyChains",function(){Sr(n)}),e("    addBorderSegments",function(){He(n)}),e("    order",function(){Pr(n)}),e("    insertSelfEdges",function(){gi(n)}),e("    adjustCoordinateSystem",function(){Je(n)}),e("    position",function(){Kr(n)}),e("    positionSelfEdges",function(){xi(n)}),e("    removeBorderNodes",function(){mi(n)}),e("    normalize.undo",function(){er(n)}),e("    fixupEdgeLabelCoords",function(){pi(n)}),e("    undoCoordinateSystem",function(){Ke(n)}),e("    translateGraph",function(){li(n)}),e("    assignNodeIntersects",function(){vi(n)}),e("    reversePoints",function(){wi(n)}),e("    acyclic.undo",function(){qe(n)})}function Qr(n,e){s(n.nodes(),function(r){var i=n.node(r),t=e.node(r);i&&(i.x=t.x,i.y=t.y,e.children(r).length&&(i.width=t.width,i.height=t.height))}),s(n.edges(),function(r){var i=n.edge(r),t=e.edge(r);i.points=t.points,w(t,"x")&&(i.x=t.x,i.y=t.y)}),n.graph().width=e.graph().width,n.graph().height=e.graph().height}var ni=["nodesep","edgesep","ranksep","marginx","marginy"],ei={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},ri=["acyclicer","ranker","rankdir","align"],ii=["width","height"],ti={width:0,height:0},ai=["minlen","weight","width","height","labeloffset"],oi={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},ui=["labelpos"];function di(n){var e=new x({multigraph:!0,compound:!0}),r=X(n.graph());return e.setGraph(U({},ei,W(r,ni),B(r,ri))),s(n.nodes(),function(i){var t=X(n.node(i));e.setNode(i,le(W(t,ii),ti)),e.setParent(i,n.parent(i))}),s(n.edges(),function(i){var t=X(n.edge(i));e.setEdge(i,U({},oi,W(t,ai),B(t,ui)))}),e}function fi(n){var e=n.graph();e.ranksep/=2,s(n.edges(),function(r){var i=n.edge(r);i.minlen*=2,i.labelpos.toLowerCase()!=="c"&&(e.rankdir==="TB"||e.rankdir==="BT"?i.width+=i.labeloffset:i.height+=i.labeloffset)})}function si(n){s(n.edges(),function(e){var r=n.edge(e);if(r.width&&r.height){var i=n.node(e.v),t=n.node(e.w),o={rank:(t.rank-i.rank)/2+i.rank,e};C(n,"edge-proxy",o,"_ep")}})}function ci(n){var e=0;s(n.nodes(),function(r){var i=n.node(r);i.borderTop&&(i.minRank=n.node(i.borderTop).rank,i.maxRank=n.node(i.borderBottom).rank,e=E(e,i.maxRank))}),n.graph().maxRank=e}function hi(n){s(n.nodes(),function(e){var r=n.node(e);r.dummy==="edge-proxy"&&(n.edge(r.e).labelRank=r.rank,n.removeNode(e))})}function li(n){var e=Number.POSITIVE_INFINITY,r=0,i=Number.POSITIVE_INFINITY,t=0,o=n.graph(),a=o.marginx||0,u=o.marginy||0;function d(f){var c=f.x,h=f.y,l=f.width,v=f.height;e=Math.min(e,c-l/2),r=Math.max(r,c+l/2),i=Math.min(i,h-v/2),t=Math.max(t,h+v/2)}s(n.nodes(),function(f){d(n.node(f))}),s(n.edges(),function(f){var c=n.edge(f);w(c,"x")&&d(c)}),e-=a,i-=u,s(n.nodes(),function(f){var c=n.node(f);c.x-=e,c.y-=i}),s(n.edges(),function(f){var c=n.edge(f);s(c.points,function(h){h.x-=e,h.y-=i}),w(c,"x")&&(c.x-=e),w(c,"y")&&(c.y-=i)}),o.width=r-e+a,o.height=t-i+u}function vi(n){s(n.edges(),function(e){var r=n.edge(e),i=n.node(e.v),t=n.node(e.w),o,a;r.points?(o=r.points[0],a=r.points[r.points.length-1]):(r.points=[],o=t,a=i),r.points.unshift(fn(i,o)),r.points.push(fn(t,a))})}function pi(n){s(n.edges(),function(e){var r=n.edge(e);if(w(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}function wi(n){s(n.edges(),function(e){var r=n.edge(e);r.reversed&&r.points.reverse()})}function mi(n){s(n.nodes(),function(e){if(n.children(e).length){var r=n.node(e),i=n.node(r.borderTop),t=n.node(r.borderBottom),o=n.node(A(r.borderLeft)),a=n.node(A(r.borderRight));r.width=Math.abs(a.x-o.x),r.height=Math.abs(t.y-i.y),r.x=o.x+r.width/2,r.y=i.y+r.height/2}}),s(n.nodes(),function(e){n.node(e).dummy==="border"&&n.removeNode(e)})}function bi(n){s(n.edges(),function(e){if(e.v===e.w){var r=n.node(e.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e,label:n.edge(e)}),n.removeEdge(e)}})}function gi(n){var e=Y(n);s(e,function(r){var i=0;s(r,function(t,o){var a=n.node(t);a.order=o+i,s(a.selfEdges,function(u){C(n,"selfedge",{width:u.label.width,height:u.label.height,rank:a.rank,order:o+ ++i,e:u.e,label:u.label},"_se")}),delete a.selfEdges})})}function xi(n){s(n.nodes(),function(e){var r=n.node(e);if(r.dummy==="selfedge"){var i=n.node(r.e.v),t=i.x+i.width/2,o=i.y,a=r.x-t,u=i.height/2;n.setEdge(r.e,r.label),n.removeNode(e),r.label.points=[{x:t+2*a/3,y:o-u},{x:t+5*a/6,y:o-u},{x:t+a,y:o},{x:t+5*a/6,y:o+u},{x:t+2*a/3,y:o+u}],r.label.x=r.x,r.label.y=r.y}})}function W(n,e){return G(B(n,e),Number)}function X(n){var e={};return s(n,function(r,i){e[i.toLowerCase()]=r}),e}export{le as d,yi as l,m,B as p,N as r,nn as u};
