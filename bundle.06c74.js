!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(n){return e[n]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s="mdyV")}({MV5A:function(){},QP3f:function(e){e.exports=JSON.parse('{"a":"0.0.1"}')},QfWi:function(e,n,t){"use strict";t.r(n),function(e){function r(){return e("div",null,e("h1",null,"Hello, World!"),e("div",null,"v".concat(o.a)))}t.d(n,"default",(function(){return r}));t("MV5A");var o=t("QP3f")}.call(this,t("hosL").h)},hosL:function(e,n,t){"use strict";function r(e,n){for(var t in n)e[t]=n[t];return e}function o(e){var n=e.parentNode;n&&n.removeChild(e)}function _(e,n,t){var r,o,_,u={};for(_ in n)"key"==_?r=n[_]:"ref"==_?o=n[_]:u[_]=n[_];if(arguments.length>2&&(u.children=arguments.length>3?W.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===u[_]&&(u[_]=e.defaultProps[_]);return l(e,u,r,o,null)}function l(e,n,t,r,o){var _={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++U:o};return null==o&&null!=L.vnode&&L.vnode(_),_}function u(){return{current:null}}function i(e){return e.children}function c(e,n){this.props=e,this.context=n}function f(e,n){if(null==n)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?f(e):null}function s(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return s(e)}}function a(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!p.__r++||j!==L.debounceRendering)&&((j=L.debounceRendering)||setTimeout)(p)}function p(){for(var e;p.__r=N.length;)e=N.sort((function(e,n){return e.__v.__b-n.__v.__b})),N=[],e.some((function(e){var n,t,o,_,l,u;e.__d&&(l=(_=(n=e).__v).__e,(u=n.__P)&&(t=[],(o=r({},_)).__v=_.__v+1,x(u,_,o,n.__n,void 0!==u.ownerSVGElement,null!=_.__h?[l]:null,t,null==l?f(_):l,_.__h),C(t,_),_.__e!=l&&s(_)))}))}function d(e,n,t,r,o,_,u,c,s,a){var p,d,v,m,g,b,k,C=r&&r.__k||I,S=C.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(m=t.__k[p]=null==(m=n[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?l(null,m,null,null,m):Array.isArray(m)?l(i,{children:m},null,null,null):m.__b>0?l(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(v=C[p])||v&&m.key==v.key&&m.type===v.type)C[p]=void 0;else for(d=0;d<S;d++){if((v=C[d])&&m.key==v.key&&m.type===v.type){C[d]=void 0;break}v=null}x(e,m,v=v||H,o,_,u,c,s,a),g=m.__e,(d=m.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(d,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&m.__k===v.__k?m.__d=s=h(m,s,e):s=y(e,m,v,C,g,s),"function"==typeof t.type&&(t.__d=s)):s&&v.__e==s&&s.parentNode!=e&&(s=f(v))}for(t.__e=b,p=S;p--;)null!=C[p]&&("function"==typeof t.type&&null!=C[p].__e&&C[p].__e==t.__d&&(t.__d=f(r,p+1)),A(C[p],C[p]));if(k)for(p=0;p<k.length;p++)P(k[p],k[++p],k[++p])}function h(e,n,t){for(var r,o=e.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=e,n="function"==typeof r.type?h(r,n,t):y(t,r,r,o,r.__e,n));return n}function v(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,n)})):n.push(e)),n}function y(e,n,t,r,o,_){var l,u,i;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||o!=_||null==o.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(o),l=null;else{for(u=_,i=0;(u=u.nextSibling)&&i<r.length;i+=2)if(u==o)break e;e.insertBefore(o,_),l=_}return void 0!==l?l:o.nextSibling}function m(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||F.test(n)?t:t+"px"}function g(e,n,t,r,o){var _;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||m(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||m(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])_=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+_]=t,t?r||e.addEventListener(n,_?k:b,_):e.removeEventListener(n,_?k:b,_);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function b(e){this.l[e.type+!1](L.event?L.event(e):e)}function k(e){this.l[e.type+!0](L.event?L.event(e):e)}function x(e,n,t,o,_,l,u,f,s){var a,p,h,v,y,m,g,b,k,x,C,P,A,T=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(s=t.__h,f=n.__e=t.__e,n.__h=null,l=[f]),(a=L.__b)&&a(n);try{e:if("function"==typeof T){if(b=n.props,k=(a=T.contextType)&&o[a.__c],x=a?k?k.props.value:a.__:o,t.__c?g=(p=n.__c=t.__c).__=p.__E:("prototype"in T&&T.prototype.render?n.__c=p=new T(b,x):(n.__c=p=new c(b,x),p.constructor=T,p.render=E),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=x,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=T.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,T.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,h)null==T.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==T.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,x)||n.__v===t.__v){p.props=b,p.state=p.__s,n.__v!==t.__v&&(p.__d=!1),p.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,x),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}if(p.context=x,p.props=b,p.__v=n,p.__P=e,C=L.__r,P=0,"prototype"in T&&T.prototype.render)p.state=p.__s,p.__d=!1,C&&C(n),a=p.render(p.props,p.state,p.context);else do{p.__d=!1,C&&C(n),a=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++P<25);p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),A=null!=a&&a.type===i&&null==a.key?a.props.children:a,d(e,Array.isArray(A)?A:[A],n,t,o,_,l,u,f,s),p.base=n.__e,n.__h=null,p.__h.length&&u.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=S(t.__e,n,t,o,_,l,u,s);(a=L.diffed)&&a(n)}catch(e){n.__v=null,(s||null!=l)&&(n.__e=f,n.__h=!!s,l[l.indexOf(f)]=null),L.__e(e,n,t)}}function C(e,n){L.__c&&L.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){L.__e(e,n.__v)}}))}function S(e,n,t,r,_,l,u,i){var c,s,a,p=t.props,h=n.props,v=n.type,y=0;if("svg"===v&&(_=!0),null!=l)for(;y<l.length;y++)if((c=l[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,l[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=_?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),l=null,i=!1}if(null===v)p===h||i&&e.data===h||(e.data=h);else{if(l=l&&W.call(e.childNodes),s=(p=t.props||H).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!i){if(null!=l)for(p={},y=0;y<e.attributes.length;y++)p[e.attributes[y].name]=e.attributes[y].value;(a||s)&&(a&&(s&&a.__html==s.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(function(e,n,t,r,o){var _;for(_ in t)"children"===_||"key"===_||_ in n||g(e,_,null,t[_],r);for(_ in n)o&&"function"!=typeof n[_]||"children"===_||"key"===_||"value"===_||"checked"===_||t[_]===n[_]||g(e,_,n[_],t[_],r)}(e,h,p,_,i),a)n.__k=[];else if(y=n.props.children,d(e,Array.isArray(y)?y:[y],n,t,r,_&&"foreignObject"!==v,l,u,l?l[0]:t.__k&&f(t,0),i),null!=l)for(y=l.length;y--;)null!=l[y]&&o(l[y]);i||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&g(e,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&g(e,"checked",y,p.checked,!1))}return e}function P(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){L.__e(e,t)}}function A(e,n,t){var r,_;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||P(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&A(r[_],n,"function"!=typeof e.type);t||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function E(e,n,t){return this.constructor(e,t)}function T(e,n,t){var r,o,l;L.__&&L.__(e,n),o=(r="function"==typeof t)?null:t&&t.__k||n.__k,l=[],x(n,e=(!r&&t||n).__k=_(i,null,[e]),o||H,H,void 0!==n.ownerSVGElement,!r&&t?[t]:o?null:n.firstChild?W.call(n.childNodes):null,l,!r&&t?t:o?o.__e:n.firstChild,r),C(l,e)}function w(e,n){T(e,n,w)}function D(e,n,t){var o,_,u,i=r({},e.props);for(u in n)"key"==u?o=n[u]:"ref"==u?_=n[u]:i[u]=n[u];return arguments.length>2&&(i.children=arguments.length>3?W.call(arguments,2):t),l(e.type,i,o||e.key,_||e.ref,null)}function M(e,n){var t={__c:n="__cC"+R++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,r;return this.getChildContext||(t=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(a)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}t.r(n),t.d(n,"render",(function(){return T})),t.d(n,"hydrate",(function(){return w})),t.d(n,"createElement",(function(){return _})),t.d(n,"h",(function(){return _})),t.d(n,"Fragment",(function(){return i})),t.d(n,"createRef",(function(){return u})),t.d(n,"isValidElement",(function(){return O})),t.d(n,"Component",(function(){return c})),t.d(n,"cloneElement",(function(){return D})),t.d(n,"createContext",(function(){return M})),t.d(n,"toChildArray",(function(){return v})),t.d(n,"options",(function(){return L}));var W,L,U,O,N,j,R,H={},I=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;W=I.slice,L={__e:function(e,n,t,r){for(var o,_,l;n=n.__;)if((o=n.__c)&&!o.__)try{if((_=o.constructor)&&null!=_.getDerivedStateFromError&&(o.setState(_.getDerivedStateFromError(e)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),l=o.__d),l)return o.__E=o}catch(n){e=n}throw e}},U=0,O=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},t),this.props)),e&&r(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),a(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),a(this))},c.prototype.render=i,N=[],p.__r=0,R=0},mdyV:function(e,n,t){"use strict";t.r(n);var r=t("hosL"),o=r.h,_=r.render,l=r.hydrate,u=function(e){return e&&e.default?e.default:e},i=function(e){return"/"===e[e.length-1]?e:e+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(i(t.p)+"sw.js"),"function"==typeof u(t("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=u(t("QfWi")),n={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(n=JSON.parse(decodeURI(r.innerHTML)).preRenderData||n);var f={preRenderData:n},s=n.url?i(n.url):"";(l&&s===i(location.pathname)?l:_)(o(e,{CLI_DATA:f}),document.body,c)}()}}});
//# sourceMappingURL=bundle.06c74.js.map