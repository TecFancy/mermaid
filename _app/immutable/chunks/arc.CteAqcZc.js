import{w as ln,c as X}from"./path.CbwjOpE9.js";import{V as an,W as z,X as q,Y as rn,_ as y,$ as on,a0 as F,a1 as _,a2 as un,a3 as t,a4 as sn,a5 as tn,a6 as fn}from"./state.CSGkJ2hg.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,I,D,v,A,Y,a){var O=I-l,i=D-h,n=Y-v,m=a-A,r=m*O-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*O,h+r*i]}function M(l,h,I,D,v,A,Y){var a=l-I,O=h-D,i=(Y?A:-A)/F(a*a+O*O),n=i*O,m=-i*a,r=l+n,s=h+m,f=I+n,c=D+m,$=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,P=r*c-f*s,S=(g<0?-1:1)*F(fn(0,T*T*R-P*P)),V=(P*g-p*S)/R,W=(-P*p-g*S)/R,w=(P*g+p*S)/R,d=(-P*p+g*S)/R,x=V-$,e=W-o,u=w-$,j=d-o;return x*x+e*e>u*u+j*j&&(V=w,W=d),{cx:V,cy:W,x01:-n,y01:-m,x11:V*(v/T-1),y11:W*(v/T-1)}}function vn(){var l=cn,h=yn,I=X(0),D=null,v=gn,A=mn,Y=pn,a=null,O=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,$=un(c-f),o=c>f;if(a||(a=n=O()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if($>on-y)a.moveTo(s*z(f),s*q(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*z(c),r*q(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,R=f,T=c,P=$,S=$,V=Y.apply(this,arguments)/2,W=V>y&&(D?+D.apply(this,arguments):F(r*r+s*s)),w=_(un(s-r)/2,+I.apply(this,arguments)),d=w,x=w,e,u;if(W>y){var j=sn(W/r*q(V)),G=sn(W/s*q(V));(P-=j*2)>y?(j*=o?1:-1,R+=j,T-=j):(P=0,R=T=(f+c)/2),(S-=G*2)>y?(G*=o?1:-1,p+=G,g-=G):(S=0,p=g=(f+c)/2)}var B=s*z(p),C=s*q(p),H=r*z(T),J=r*q(T);if(w>y){var K=s*z(g),L=s*q(g),N=r*z(R),Q=r*q(R),E;if($<an)if(E=dn(B,C,N,Q,K,L,H,J)){var U=B-E[0],Z=C-E[1],k=K-E[0],b=L-E[1],nn=1/q(tn((U*k+Z*b)/(F(U*U+Z*Z)*F(k*k+b*b)))/2),en=F(E[0]*E[0]+E[1]*E[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}S>y?x>y?(e=M(N,Q,B,C,s,x,o),u=M(K,L,H,J,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(B,C),a.arc(0,0,s,p,g,!o)):a.moveTo(B,C),!(r>y)||!(P>y)?a.lineTo(H,J):d>y?(e=M(H,J,K,L,r,-d,o),u=M(B,C,N,Q,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[z(m)*n,q(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:X(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:X(+n),i):h},i.cornerRadius=function(n){return arguments.length?(I=typeof n=="function"?n:X(+n),i):I},i.padRadius=function(n){return arguments.length?(D=n==null?null:typeof n=="function"?n:X(+n),i):D},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:X(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:X(+n),i):A},i.padAngle=function(n){return arguments.length?(Y=typeof n=="function"?n:X(+n),i):Y},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
