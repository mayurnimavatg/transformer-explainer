import{k as dn}from"./index.Czvmgksn.js";var _n={value:()=>{}};function qt(){for(var t=0,n=arguments.length,e={},r;t<n;++t){if(!(r=arguments[t]+"")||r in e||/[\s.]/.test(r))throw new Error("illegal type: "+r);e[r]=[]}return new K(e)}function K(t){this._=t}function gn(t,n){return t.trim().split(/^|\s+/).map(function(e){var r="",i=e.indexOf(".");if(i>=0&&(r=e.slice(i+1),e=e.slice(0,i)),e&&!n.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:r}})}K.prototype=qt.prototype={constructor:K,on:function(t,n){var e=this._,r=gn(t+"",e),i,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((i=(t=r[o]).type)&&(i=yn(e[i],t.name)))return i;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++o<s;)if(i=(t=r[o]).type)e[i]=At(e[i],t.name,n);else if(n==null)for(i in e)e[i]=At(e[i],t.name,null);return this},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new K(t)},call:function(t,n){if((i=arguments.length-2)>0)for(var e=new Array(i),r=0,i,o;r<i;++r)e[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],r=0,i=o.length;r<i;++r)o[r].value.apply(n,e)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};function yn(t,n){for(var e=0,r=t.length,i;e<r;++e)if((i=t[e]).name===n)return i.value}function At(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=_n,t=t.slice(0,r).concat(t.slice(r+1));break}return e!=null&&t.push({name:n,value:e}),t}var ut="http://www.w3.org/1999/xhtml";const $t={svg:"http://www.w3.org/2000/svg",xhtml:ut,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function rt(t){var n=t+="",e=n.indexOf(":");return e>=0&&(n=t.slice(0,e))!=="xmlns"&&(t=t.slice(e+1)),$t.hasOwnProperty(n)?{space:$t[n],local:t}:t}function wn(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===ut&&n.documentElement.namespaceURI===ut?n.createElement(t):n.createElementNS(e,t)}}function xn(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Pt(t){var n=rt(t);return(n.local?xn:wn)(n)}function vn(){}function _t(t){return t==null?vn:function(){return this.querySelector(t)}}function mn(t){typeof t!="function"&&(t=_t(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],s=o.length,a=r[i]=new Array(s),u,f,l=0;l<s;++l)(u=o[l])&&(f=t.call(u,u.__data__,l,o))&&("__data__"in u&&(f.__data__=u.__data__),a[l]=f);return new w(r,this._parents)}function bn(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function Nn(){return[]}function Lt(t){return t==null?Nn:function(){return this.querySelectorAll(t)}}function An(t){return function(){return bn(t.apply(this,arguments))}}function $n(t){typeof t=="function"?t=An(t):t=Lt(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var s=n[o],a=s.length,u,f=0;f<a;++f)(u=s[f])&&(r.push(t.call(u,u.__data__,f,s)),i.push(u));return new w(r,i)}function Vt(t){return function(){return this.matches(t)}}function Yt(t){return function(n){return n.matches(t)}}var kn=Array.prototype.find;function Sn(t){return function(){return kn.call(this.children,t)}}function En(){return this.firstElementChild}function Cn(t){return this.select(t==null?En:Sn(typeof t=="function"?t:Yt(t)))}var Tn=Array.prototype.filter;function Rn(){return Array.from(this.children)}function Mn(t){return function(){return Tn.call(this.children,t)}}function In(t){return this.selectAll(t==null?Rn:Mn(typeof t=="function"?t:Yt(t)))}function Fn(t){typeof t!="function"&&(t=Vt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],s=o.length,a=r[i]=[],u,f=0;f<s;++f)(u=o[f])&&t.call(u,u.__data__,f,o)&&a.push(u);return new w(r,this._parents)}function Bt(t){return new Array(t.length)}function Dn(){return new w(this._enter||this._groups.map(Bt),this._parents)}function J(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}J.prototype={constructor:J,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function Hn(t){return function(){return t}}function On(t,n,e,r,i,o){for(var s=0,a,u=n.length,f=o.length;s<f;++s)(a=n[s])?(a.__data__=o[s],r[s]=a):e[s]=new J(t,o[s]);for(;s<u;++s)(a=n[s])&&(i[s]=a)}function Xn(t,n,e,r,i,o,s){var a,u,f=new Map,l=n.length,c=o.length,h=new Array(l),p;for(a=0;a<l;++a)(u=n[a])&&(h[a]=p=s.call(u,u.__data__,a,n)+"",f.has(p)?i[a]=u:f.set(p,u));for(a=0;a<c;++a)p=s.call(t,o[a],a,o)+"",(u=f.get(p))?(r[a]=u,u.__data__=o[a],f.delete(p)):e[a]=new J(t,o[a]);for(a=0;a<l;++a)(u=n[a])&&f.get(h[a])===u&&(i[a]=u)}function qn(t){return t.__data__}function Pn(t,n){if(!arguments.length)return Array.from(this,qn);var e=n?Xn:On,r=this._parents,i=this._groups;typeof t!="function"&&(t=Hn(t));for(var o=i.length,s=new Array(o),a=new Array(o),u=new Array(o),f=0;f<o;++f){var l=r[f],c=i[f],h=c.length,p=Ln(t.call(l,l&&l.__data__,f,r)),d=p.length,_=a[f]=new Array(d),$=s[f]=new Array(d),pn=u[f]=new Array(h);e(l,c,_,$,pn,p,n);for(var I=0,Y=0,bt,Nt;I<d;++I)if(bt=_[I]){for(I>=Y&&(Y=I+1);!(Nt=$[Y])&&++Y<d;);bt._next=Nt||null}}return s=new w(s,r),s._enter=a,s._exit=u,s}function Ln(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Vn(){return new w(this._exit||this._groups.map(Bt),this._parents)}function Yn(t,n,e){var r=this.enter(),i=this,o=this.exit();return typeof t=="function"?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),n!=null&&(i=n(i),i&&(i=i.selection())),e==null?o.remove():e(o),r&&i?r.merge(i).order():i}function Bn(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,s=Math.min(i,o),a=new Array(i),u=0;u<s;++u)for(var f=e[u],l=r[u],c=f.length,h=a[u]=new Array(c),p,d=0;d<c;++d)(p=f[d]||l[d])&&(h[d]=p);for(;u<i;++u)a[u]=e[u];return new w(a,this._parents)}function zn(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r=t[n],i=r.length-1,o=r[i],s;--i>=0;)(s=r[i])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function Un(t){t||(t=Kn);function n(c,h){return c&&h?t(c.__data__,h.__data__):!c-!h}for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var s=e[o],a=s.length,u=i[o]=new Array(a),f,l=0;l<a;++l)(f=s[l])&&(u[l]=f);u.sort(n)}return new w(i,this._parents).order()}function Kn(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function Gn(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Wn(){return Array.from(this)}function Jn(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var s=r[i];if(s)return s}return null}function Qn(){let t=0;for(const n of this)++t;return t}function Zn(){return!this.node()}function jn(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i=n[e],o=0,s=i.length,a;o<s;++o)(a=i[o])&&t.call(a,a.__data__,o,i);return this}function te(t){return function(){this.removeAttribute(t)}}function ne(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ee(t,n){return function(){this.setAttribute(t,n)}}function re(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function ie(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttribute(t):this.setAttribute(t,e)}}function oe(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function se(t,n){var e=rt(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((n==null?e.local?ne:te:typeof n=="function"?e.local?oe:ie:e.local?re:ee)(e,n))}function zt(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function ae(t){return function(){this.style.removeProperty(t)}}function ue(t,n,e){return function(){this.style.setProperty(t,n,e)}}function fe(t,n,e){return function(){var r=n.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function le(t,n,e){return arguments.length>1?this.each((n==null?ae:typeof n=="function"?fe:ue)(t,n,e??"")):R(this.node(),t)}function R(t,n){return t.style.getPropertyValue(n)||zt(t).getComputedStyle(t,null).getPropertyValue(n)}function ce(t){return function(){delete this[t]}}function he(t,n){return function(){this[t]=n}}function pe(t,n){return function(){var e=n.apply(this,arguments);e==null?delete this[t]:this[t]=e}}function de(t,n){return arguments.length>1?this.each((n==null?ce:typeof n=="function"?pe:he)(t,n)):this.node()[t]}function Ut(t){return t.trim().split(/^|\s+/)}function gt(t){return t.classList||new Kt(t)}function Kt(t){this._node=t,this._names=Ut(t.getAttribute("class")||"")}Kt.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Gt(t,n){for(var e=gt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function Wt(t,n){for(var e=gt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function _e(t){return function(){Gt(this,t)}}function ge(t){return function(){Wt(this,t)}}function ye(t,n){return function(){(n.apply(this,arguments)?Gt:Wt)(this,t)}}function we(t,n){var e=Ut(t+"");if(arguments.length<2){for(var r=gt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof n=="function"?ye:n?_e:ge)(e,n))}function xe(){this.textContent=""}function ve(t){return function(){this.textContent=t}}function me(t){return function(){var n=t.apply(this,arguments);this.textContent=n??""}}function be(t){return arguments.length?this.each(t==null?xe:(typeof t=="function"?me:ve)(t)):this.node().textContent}function Ne(){this.innerHTML=""}function Ae(t){return function(){this.innerHTML=t}}function $e(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n??""}}function ke(t){return arguments.length?this.each(t==null?Ne:(typeof t=="function"?$e:Ae)(t)):this.node().innerHTML}function Se(){this.nextSibling&&this.parentNode.appendChild(this)}function Ee(){return this.each(Se)}function Ce(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Te(){return this.each(Ce)}function Re(t){var n=typeof t=="function"?t:Pt(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Me(){return null}function Ie(t,n){var e=typeof t=="function"?t:Pt(t),r=n==null?Me:typeof n=="function"?n:_t(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function Fe(){var t=this.parentNode;t&&t.removeChild(this)}function De(){return this.each(Fe)}function He(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Oe(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Xe(t){return this.select(t?Oe:He)}function qe(t){return arguments.length?this.property("__data__",t):this.node().__data__}function Pe(t){return function(n){t.call(this,n,this.__data__)}}function Le(t){return t.trim().split(/^|\s+/).map(function(n){var e="",r=n.indexOf(".");return r>=0&&(e=n.slice(r+1),n=n.slice(0,r)),{type:n,name:e}})}function Ve(t){return function(){var n=this.__on;if(n){for(var e=0,r=-1,i=n.length,o;e<i;++e)o=n[e],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):n[++r]=o;++r?n.length=r:delete this.__on}}}function Ye(t,n,e){return function(){var r=this.__on,i,o=Pe(n);if(r){for(var s=0,a=r.length;s<a;++s)if((i=r[s]).type===t.type&&i.name===t.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=e),i.value=n;return}}this.addEventListener(t.type,o,e),i={type:t.type,name:t.name,value:n,listener:o,options:e},r?r.push(i):this.__on=[i]}}function Be(t,n,e){var r=Le(t+""),i,o=r.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var u=0,f=a.length,l;u<f;++u)for(i=0,l=a[u];i<o;++i)if((s=r[i]).type===l.type&&s.name===l.name)return l.value}return}for(a=n?Ye:Ve,i=0;i<o;++i)this.each(a(r[i],n,e));return this}function Jt(t,n,e){var r=zt(t),i=r.CustomEvent;typeof i=="function"?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function ze(t,n){return function(){return Jt(this,t,n)}}function Ue(t,n){return function(){return Jt(this,t,n.apply(this,arguments))}}function Ke(t,n){return this.each((typeof n=="function"?Ue:ze)(t,n))}function*Ge(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length,s;i<o;++i)(s=r[i])&&(yield s)}var We=[null];function w(t,n){this._groups=t,this._parents=n}function L(){return new w([[document.documentElement]],We)}function Je(){return this}w.prototype=L.prototype={constructor:w,select:mn,selectAll:$n,selectChild:Cn,selectChildren:In,filter:Fn,data:Pn,enter:Dn,exit:Vn,join:Yn,merge:Bn,selection:Je,order:zn,sort:Un,call:Gn,nodes:Wn,node:Jn,size:Qn,empty:Zn,each:jn,attr:se,style:le,property:de,classed:we,text:be,html:ke,raise:Ee,lower:Te,append:Re,insert:Ie,remove:De,clone:Xe,datum:qe,on:Be,dispatch:Ke,[Symbol.iterator]:Ge};function yt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Qt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function V(){}var X=.7,Q=1/X,T="\\s*([+-]?\\d+)\\s*",q="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",m="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Qe=/^#([0-9a-f]{3,8})$/,Ze=new RegExp(`^rgb\\(${T},${T},${T}\\)$`),je=new RegExp(`^rgb\\(${m},${m},${m}\\)$`),tr=new RegExp(`^rgba\\(${T},${T},${T},${q}\\)$`),nr=new RegExp(`^rgba\\(${m},${m},${m},${q}\\)$`),er=new RegExp(`^hsl\\(${q},${m},${m}\\)$`),rr=new RegExp(`^hsla\\(${q},${m},${m},${q}\\)$`),kt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};yt(V,E,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:St,formatHex:St,formatHex8:ir,formatHsl:or,formatRgb:Et,toString:Et});function St(){return this.rgb().formatHex()}function ir(){return this.rgb().formatHex8()}function or(){return Zt(this).formatHsl()}function Et(){return this.rgb().formatRgb()}function E(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=Qe.exec(t))?(e=n[1].length,n=parseInt(n[1],16),e===6?Ct(n):e===3?new g(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):e===8?B(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):e===4?B(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=Ze.exec(t))?new g(n[1],n[2],n[3],1):(n=je.exec(t))?new g(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=tr.exec(t))?B(n[1],n[2],n[3],n[4]):(n=nr.exec(t))?B(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=er.exec(t))?Mt(n[1],n[2]/100,n[3]/100,1):(n=rr.exec(t))?Mt(n[1],n[2]/100,n[3]/100,n[4]):kt.hasOwnProperty(t)?Ct(kt[t]):t==="transparent"?new g(NaN,NaN,NaN,0):null}function Ct(t){return new g(t>>16&255,t>>8&255,t&255,1)}function B(t,n,e,r){return r<=0&&(t=n=e=NaN),new g(t,n,e,r)}function sr(t){return t instanceof V||(t=E(t)),t?(t=t.rgb(),new g(t.r,t.g,t.b,t.opacity)):new g}function ft(t,n,e,r){return arguments.length===1?sr(t):new g(t,n,e,r??1)}function g(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}yt(g,ft,Qt(V,{brighter(t){return t=t==null?Q:Math.pow(Q,t),new g(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?X:Math.pow(X,t),new g(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new g(S(this.r),S(this.g),S(this.b),Z(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Tt,formatHex:Tt,formatHex8:ar,formatRgb:Rt,toString:Rt}));function Tt(){return`#${k(this.r)}${k(this.g)}${k(this.b)}`}function ar(){return`#${k(this.r)}${k(this.g)}${k(this.b)}${k((isNaN(this.opacity)?1:this.opacity)*255)}`}function Rt(){const t=Z(this.opacity);return`${t===1?"rgb(":"rgba("}${S(this.r)}, ${S(this.g)}, ${S(this.b)}${t===1?")":`, ${t})`}`}function Z(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function S(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function k(t){return t=S(t),(t<16?"0":"")+t.toString(16)}function Mt(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new y(t,n,e,r)}function Zt(t){if(t instanceof y)return new y(t.h,t.s,t.l,t.opacity);if(t instanceof V||(t=E(t)),!t)return new y;if(t instanceof y)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),s=NaN,a=o-i,u=(o+i)/2;return a?(n===o?s=(e-r)/a+(e<r)*6:e===o?s=(r-n)/a+2:s=(n-e)/a+4,a/=u<.5?o+i:2-o-i,s*=60):a=u>0&&u<1?0:s,new y(s,a,u,t.opacity)}function ur(t,n,e,r){return arguments.length===1?Zt(t):new y(t,n,e,r??1)}function y(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}yt(y,ur,Qt(V,{brighter(t){return t=t==null?Q:Math.pow(Q,t),new y(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?X:Math.pow(X,t),new y(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new g(st(t>=240?t-240:t+120,i,r),st(t,i,r),st(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new y(It(this.h),z(this.s),z(this.l),Z(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Z(this.opacity);return`${t===1?"hsl(":"hsla("}${It(this.h)}, ${z(this.s)*100}%, ${z(this.l)*100}%${t===1?")":`, ${t})`}`}}));function It(t){return t=(t||0)%360,t<0?t+360:t}function z(t){return Math.max(0,Math.min(1,t||0))}function st(t,n,e){return(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)*255}const wt=t=>()=>t;function fr(t,n){return function(e){return t+e*n}}function lr(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function cr(t){return(t=+t)==1?jt:function(n,e){return e-n?lr(n,e,t):wt(isNaN(n)?e:n)}}function jt(t,n){var e=n-t;return e?fr(t,e):wt(isNaN(t)?n:t)}const j=function t(n){var e=cr(n);function r(i,o){var s=e((i=ft(i)).r,(o=ft(o)).r),a=e(i.g,o.g),u=e(i.b,o.b),f=jt(i.opacity,o.opacity);return function(l){return i.r=s(l),i.g=a(l),i.b=u(l),i.opacity=f(l),i+""}}return r.gamma=t,r}(1);function hr(t,n){n||(n=[]);var e=t?Math.min(n.length,t.length):0,r=n.slice(),i;return function(o){for(i=0;i<e;++i)r[i]=t[i]*(1-o)+n[i]*o;return r}}function pr(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function dr(t,n){var e=n?n.length:0,r=t?Math.min(e,t.length):0,i=new Array(r),o=new Array(e),s;for(s=0;s<r;++s)i[s]=nn(t[s],n[s]);for(;s<e;++s)o[s]=n[s];return function(a){for(s=0;s<r;++s)o[s]=i[s](a);return o}}function _r(t,n){var e=new Date;return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function v(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function gr(t,n){var e={},r={},i;(t===null||typeof t!="object")&&(t={}),(n===null||typeof n!="object")&&(n={});for(i in n)i in t?e[i]=nn(t[i],n[i]):r[i]=n[i];return function(o){for(i in e)r[i]=e[i](o);return r}}var lt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,at=new RegExp(lt.source,"g");function yr(t){return function(){return t}}function wr(t){return function(n){return t(n)+""}}function tn(t,n){var e=lt.lastIndex=at.lastIndex=0,r,i,o,s=-1,a=[],u=[];for(t=t+"",n=n+"";(r=lt.exec(t))&&(i=at.exec(n));)(o=i.index)>e&&(o=n.slice(e,o),a[s]?a[s]+=o:a[++s]=o),(r=r[0])===(i=i[0])?a[s]?a[s]+=i:a[++s]=i:(a[++s]=null,u.push({i:s,x:v(r,i)})),e=at.lastIndex;return e<n.length&&(o=n.slice(e),a[s]?a[s]+=o:a[++s]=o),a.length<2?u[0]?wr(u[0].x):yr(n):(n=u.length,function(f){for(var l=0,c;l<n;++l)a[(c=u[l]).i]=c.x(f);return a.join("")})}function nn(t,n){var e=typeof n,r;return n==null||e==="boolean"?wt(n):(e==="number"?v:e==="string"?(r=E(n))?(n=r,j):tn:n instanceof E?j:n instanceof Date?_r:pr(n)?hr:Array.isArray(n)?dr:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?gr:v)(t,n)}var Ft=180/Math.PI,ct={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function en(t,n,e,r,i,o){var s,a,u;return(s=Math.sqrt(t*t+n*n))&&(t/=s,n/=s),(u=t*e+n*r)&&(e-=t*u,r-=n*u),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,u/=a),t*r<n*e&&(t=-t,n=-n,u=-u,s=-s),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Ft,skewX:Math.atan(u)*Ft,scaleX:s,scaleY:a}}var U;function xr(t){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?ct:en(n.a,n.b,n.c,n.d,n.e,n.f)}function vr(t){return t==null||(U||(U=document.createElementNS("http://www.w3.org/2000/svg","g")),U.setAttribute("transform",t),!(t=U.transform.baseVal.consolidate()))?ct:(t=t.matrix,en(t.a,t.b,t.c,t.d,t.e,t.f))}function rn(t,n,e,r){function i(f){return f.length?f.pop()+" ":""}function o(f,l,c,h,p,d){if(f!==c||l!==h){var _=p.push("translate(",null,n,null,e);d.push({i:_-4,x:v(f,c)},{i:_-2,x:v(l,h)})}else(c||h)&&p.push("translate("+c+n+h+e)}function s(f,l,c,h){f!==l?(f-l>180?l+=360:l-f>180&&(f+=360),h.push({i:c.push(i(c)+"rotate(",null,r)-2,x:v(f,l)})):l&&c.push(i(c)+"rotate("+l+r)}function a(f,l,c,h){f!==l?h.push({i:c.push(i(c)+"skewX(",null,r)-2,x:v(f,l)}):l&&c.push(i(c)+"skewX("+l+r)}function u(f,l,c,h,p,d){if(f!==c||l!==h){var _=p.push(i(p)+"scale(",null,",",null,")");d.push({i:_-4,x:v(f,c)},{i:_-2,x:v(l,h)})}else(c!==1||h!==1)&&p.push(i(p)+"scale("+c+","+h+")")}return function(f,l){var c=[],h=[];return f=t(f),l=t(l),o(f.translateX,f.translateY,l.translateX,l.translateY,c,h),s(f.rotate,l.rotate,c,h),a(f.skewX,l.skewX,c,h),u(f.scaleX,f.scaleY,l.scaleX,l.scaleY,c,h),f=l=null,function(p){for(var d=-1,_=h.length,$;++d<_;)c[($=h[d]).i]=$.x(p);return c.join("")}}}var mr=rn(xr,"px, ","px)","deg)"),br=rn(vr,", ",")",")"),M=0,D=0,F=0,on=1e3,tt,H,nt=0,C=0,it=0,P=typeof performance=="object"&&performance.now?performance:Date,sn=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function xt(){return C||(sn(Nr),C=P.now()+it)}function Nr(){C=0}function et(){this._call=this._time=this._next=null}et.prototype=an.prototype={constructor:et,restart:function(t,n,e){if(typeof t!="function")throw new TypeError("callback is not a function");e=(e==null?xt():+e)+(n==null?0:+n),!this._next&&H!==this&&(H?H._next=this:tt=this,H=this),this._call=t,this._time=e,ht()},stop:function(){this._call&&(this._call=null,this._time=1/0,ht())}};function an(t,n,e){var r=new et;return r.restart(t,n,e),r}function Ar(){xt(),++M;for(var t=tt,n;t;)(n=C-t._time)>=0&&t._call.call(void 0,n),t=t._next;--M}function Dt(){C=(nt=P.now())+it,M=D=0;try{Ar()}finally{M=0,kr(),C=0}}function $r(){var t=P.now(),n=t-nt;n>on&&(it-=n,nt=t)}function kr(){for(var t,n=tt,e,r=1/0;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:tt=e);H=t,ht(r)}function ht(t){if(!M){D&&(D=clearTimeout(D));var n=t-C;n>24?(t<1/0&&(D=setTimeout(Dt,t-P.now()-it)),F&&(F=clearInterval(F))):(F||(nt=P.now(),F=setInterval($r,on)),M=1,sn(Dt))}}function Ht(t,n,e){var r=new et;return n=n==null?0:+n,r.restart(i=>{r.stop(),t(i+n)},n,e),r}var Sr=qt("start","end","cancel","interrupt"),Er=[],un=0,Ot=1,pt=2,G=3,Xt=4,dt=5,W=6;function ot(t,n,e,r,i,o){var s=t.__transition;if(!s)t.__transition={};else if(e in s)return;Cr(t,e,{name:n,index:r,group:i,on:Sr,tween:Er,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:un})}function vt(t,n){var e=x(t,n);if(e.state>un)throw new Error("too late; already scheduled");return e}function b(t,n){var e=x(t,n);if(e.state>G)throw new Error("too late; already running");return e}function x(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Cr(t,n,e){var r=t.__transition,i;r[n]=e,e.timer=an(o,0,e.time);function o(f){e.state=Ot,e.timer.restart(s,e.delay,e.time),e.delay<=f&&s(f-e.delay)}function s(f){var l,c,h,p;if(e.state!==Ot)return u();for(l in r)if(p=r[l],p.name===e.name){if(p.state===G)return Ht(s);p.state===Xt?(p.state=W,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete r[l]):+l<n&&(p.state=W,p.timer.stop(),p.on.call("cancel",t,t.__data__,p.index,p.group),delete r[l])}if(Ht(function(){e.state===G&&(e.state=Xt,e.timer.restart(a,e.delay,e.time),a(f))}),e.state=pt,e.on.call("start",t,t.__data__,e.index,e.group),e.state===pt){for(e.state=G,i=new Array(h=e.tween.length),l=0,c=-1;l<h;++l)(p=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(i[++c]=p);i.length=c+1}}function a(f){for(var l=f<e.duration?e.ease.call(null,f/e.duration):(e.timer.restart(u),e.state=dt,1),c=-1,h=i.length;++c<h;)i[c].call(t,l);e.state===dt&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){e.state=W,e.timer.stop(),delete r[n];for(var f in r)return;delete t.__transition}}function Tr(t,n){var e=t.__transition,r,i,o=!0,s;if(e){n=n==null?null:n+"";for(s in e){if((r=e[s]).name!==n){o=!1;continue}i=r.state>pt&&r.state<dt,r.state=W,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete e[s]}o&&delete t.__transition}}function Rr(t){return this.each(function(){Tr(this,t)})}function Mr(t,n){var e,r;return function(){var i=b(this,t),o=i.tween;if(o!==e){r=e=o;for(var s=0,a=r.length;s<a;++s)if(r[s].name===n){r=r.slice(),r.splice(s,1);break}}i.tween=r}}function Ir(t,n,e){var r,i;if(typeof e!="function")throw new Error;return function(){var o=b(this,t),s=o.tween;if(s!==r){i=(r=s).slice();for(var a={name:n,value:e},u=0,f=i.length;u<f;++u)if(i[u].name===n){i[u]=a;break}u===f&&i.push(a)}o.tween=i}}function Fr(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r=x(this.node(),e).tween,i=0,o=r.length,s;i<o;++i)if((s=r[i]).name===t)return s.value;return null}return this.each((n==null?Mr:Ir)(e,t,n))}function mt(t,n,e){var r=t._id;return t.each(function(){var i=b(this,r);(i.value||(i.value={}))[n]=e.apply(this,arguments)}),function(i){return x(i,r).value[n]}}function fn(t,n){var e;return(typeof n=="number"?v:n instanceof E?j:(e=E(n))?(n=e,j):tn)(t,n)}function Dr(t){return function(){this.removeAttribute(t)}}function Hr(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Or(t,n,e){var r,i=e+"",o;return function(){var s=this.getAttribute(t);return s===i?null:s===r?o:o=n(r=s,e)}}function Xr(t,n,e){var r,i=e+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===i?null:s===r?o:o=n(r=s,e)}}function qr(t,n,e){var r,i,o;return function(){var s,a=e(this),u;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),u=a+"",s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,a)))}}function Pr(t,n,e){var r,i,o;return function(){var s,a=e(this),u;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),u=a+"",s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,a)))}}function Lr(t,n){var e=rt(t),r=e==="transform"?br:fn;return this.attrTween(t,typeof n=="function"?(e.local?Pr:qr)(e,r,mt(this,"attr."+t,n)):n==null?(e.local?Hr:Dr)(e):(e.local?Xr:Or)(e,r,n))}function Vr(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function Yr(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function Br(t,n){var e,r;function i(){var o=n.apply(this,arguments);return o!==r&&(e=(r=o)&&Yr(t,o)),e}return i._value=n,i}function zr(t,n){var e,r;function i(){var o=n.apply(this,arguments);return o!==r&&(e=(r=o)&&Vr(t,o)),e}return i._value=n,i}function Ur(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;var r=rt(t);return this.tween(e,(r.local?Br:zr)(r,n))}function Kr(t,n){return function(){vt(this,t).delay=+n.apply(this,arguments)}}function Gr(t,n){return n=+n,function(){vt(this,t).delay=n}}function Wr(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Kr:Gr)(n,t)):x(this.node(),n).delay}function Jr(t,n){return function(){b(this,t).duration=+n.apply(this,arguments)}}function Qr(t,n){return n=+n,function(){b(this,t).duration=n}}function Zr(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Jr:Qr)(n,t)):x(this.node(),n).duration}function jr(t,n){if(typeof n!="function")throw new Error;return function(){b(this,t).ease=n}}function ti(t){var n=this._id;return arguments.length?this.each(jr(n,t)):x(this.node(),n).ease}function ni(t,n){return function(){var e=n.apply(this,arguments);if(typeof e!="function")throw new Error;b(this,t).ease=e}}function ei(t){if(typeof t!="function")throw new Error;return this.each(ni(this._id,t))}function ri(t){typeof t!="function"&&(t=Vt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],s=o.length,a=r[i]=[],u,f=0;f<s;++f)(u=o[f])&&t.call(u,u.__data__,f,o)&&a.push(u);return new A(r,this._parents,this._name,this._id)}function ii(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),s=new Array(r),a=0;a<o;++a)for(var u=n[a],f=e[a],l=u.length,c=s[a]=new Array(l),h,p=0;p<l;++p)(h=u[p]||f[p])&&(c[p]=h);for(;a<r;++a)s[a]=n[a];return new A(s,this._parents,this._name,this._id)}function oi(t){return(t+"").trim().split(/^|\s+/).every(function(n){var e=n.indexOf(".");return e>=0&&(n=n.slice(0,e)),!n||n==="start"})}function si(t,n,e){var r,i,o=oi(n)?vt:b;return function(){var s=o(this,t),a=s.on;a!==r&&(i=(r=a).copy()).on(n,e),s.on=i}}function ai(t,n){var e=this._id;return arguments.length<2?x(this.node(),e).on.on(t):this.each(si(e,t,n))}function ui(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function fi(){return this.on("end.remove",ui(this._id))}function li(t){var n=this._name,e=this._id;typeof t!="function"&&(t=_t(t));for(var r=this._groups,i=r.length,o=new Array(i),s=0;s<i;++s)for(var a=r[s],u=a.length,f=o[s]=new Array(u),l,c,h=0;h<u;++h)(l=a[h])&&(c=t.call(l,l.__data__,h,a))&&("__data__"in l&&(c.__data__=l.__data__),f[h]=c,ot(f[h],n,e,h,f,x(l,e)));return new A(o,this._parents,n,e)}function ci(t){var n=this._name,e=this._id;typeof t!="function"&&(t=Lt(t));for(var r=this._groups,i=r.length,o=[],s=[],a=0;a<i;++a)for(var u=r[a],f=u.length,l,c=0;c<f;++c)if(l=u[c]){for(var h=t.call(l,l.__data__,c,u),p,d=x(l,e),_=0,$=h.length;_<$;++_)(p=h[_])&&ot(p,n,e,_,h,d);o.push(h),s.push(l)}return new A(o,s,n,e)}var hi=L.prototype.constructor;function pi(){return new hi(this._groups,this._parents)}function di(t,n){var e,r,i;return function(){var o=R(this,t),s=(this.style.removeProperty(t),R(this,t));return o===s?null:o===e&&s===r?i:i=n(e=o,r=s)}}function ln(t){return function(){this.style.removeProperty(t)}}function _i(t,n,e){var r,i=e+"",o;return function(){var s=R(this,t);return s===i?null:s===r?o:o=n(r=s,e)}}function gi(t,n,e){var r,i,o;return function(){var s=R(this,t),a=e(this),u=a+"";return a==null&&(u=a=(this.style.removeProperty(t),R(this,t))),s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,a))}}function yi(t,n){var e,r,i,o="style."+n,s="end."+o,a;return function(){var u=b(this,t),f=u.on,l=u.value[o]==null?a||(a=ln(n)):void 0;(f!==e||i!==l)&&(r=(e=f).copy()).on(s,i=l),u.on=r}}function wi(t,n,e){var r=(t+="")=="transform"?mr:fn;return n==null?this.styleTween(t,di(t,r)).on("end.style."+t,ln(t)):typeof n=="function"?this.styleTween(t,gi(t,r,mt(this,"style."+t,n))).each(yi(this._id,t)):this.styleTween(t,_i(t,r,n),e).on("end.style."+t,null)}function xi(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function vi(t,n,e){var r,i;function o(){var s=n.apply(this,arguments);return s!==i&&(r=(i=s)&&xi(t,s,e)),r}return o._value=n,o}function mi(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,vi(t,n,e??""))}function bi(t){return function(){this.textContent=t}}function Ni(t){return function(){var n=t(this);this.textContent=n??""}}function Ai(t){return this.tween("text",typeof t=="function"?Ni(mt(this,"text",t)):bi(t==null?"":t+""))}function $i(t){return function(n){this.textContent=t.call(this,n)}}function ki(t){var n,e;function r(){var i=t.apply(this,arguments);return i!==e&&(n=(e=i)&&$i(i)),n}return r._value=t,r}function Si(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,ki(t))}function Ei(){for(var t=this._name,n=this._id,e=cn(),r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,u,f=0;f<a;++f)if(u=s[f]){var l=x(u,n);ot(u,t,e,f,s,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new A(r,this._parents,t,e)}function Ci(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,s){var a={value:s},u={value:function(){--i===0&&o()}};e.each(function(){var f=b(this,r),l=f.on;l!==t&&(n=(t=l).copy(),n._.cancel.push(a),n._.interrupt.push(a),n._.end.push(u)),f.on=n}),i===0&&o()})}var Ti=0;function A(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function cn(){return++Ti}var N=L.prototype;A.prototype={constructor:A,select:li,selectAll:ci,selectChild:N.selectChild,selectChildren:N.selectChildren,filter:ri,merge:ii,selection:pi,transition:Ei,call:N.call,nodes:N.nodes,node:N.node,size:N.size,empty:N.empty,each:N.each,on:ai,attr:Lr,attrTween:Ur,style:wi,styleTween:mi,text:Ai,textTween:Si,remove:fi,tween:Fr,delay:Wr,duration:Zr,ease:ti,easeVarying:ei,end:Ci,[Symbol.iterator]:N[Symbol.iterator]};function Ri(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Mi={time:null,delay:0,duration:250,ease:Ri};function Ii(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}function Fi(t){var n,e;t instanceof A?(n=t._id,t=t._name):(n=cn(),(e=Mi).time=xt(),t=t==null?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,u,f=0;f<a;++f)(u=s[f])&&ot(u,t,n,f,s,e||Ii(u,n));return new A(r,this._parents,t,n)}L.prototype.interrupt=Rr;L.prototype.transition=Fi;function O(t,n,e){this.k=t,this.x=n,this.y=e}O.prototype={constructor:O,scale:function(t){return t===1?this:new O(this.k*t,this.x,this.y)},translate:function(t,n){return t===0&n===0?this:new O(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};O.prototype;var hn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var n={}.hasOwnProperty;function e(){for(var o="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(o=i(o,r(a)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return e.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var a in o)n.call(o,a)&&o[a]&&(s=i(s,a));return s}function i(o,s){return s?o?o+" "+s:o+s:o}t.exports?(e.default=e,t.exports=e):window.classNames=e})()})(hn);var Di=hn.exports;const Oi=dn(Di);export{w as S,bn as a,nn as b,E as c,Oi as d,v as e,Ri as f,j as i,We as r};