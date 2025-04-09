!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.obick=n()}(this,function(){"use strict";!function(t){var n,r=t.Promise,i=r&&"resolve"in r&&"reject"in r&&"all"in r&&"race"in r&&(new r(function(t){n=t}),"function"==typeof n);"undefined"!=typeof exports&&exports?(exports.Promise=i?r:N,exports.Polyfill=N):"function"==typeof define&&define.amd?define(function(){return i?r:N}):i||(t.Promise=N);var e="pending",u="sealed",s="fulfilled",c="rejected",o=function(){};function f(t){return"[object Array]"===Object.prototype.toString.call(t)}var a,h="undefined"!=typeof setImmediate?setImmediate:setTimeout,d=[];function l(){for(var t=0;t<d.length;t++)d[t][0](d[t][1]);a=!(d=[])}function v(t,n){d.push([t,n]),a||(a=!0,h(l,0))}function p(t){var n=t.owner,r=n.state_,i=n.data_,e=t[r],u=t.then;if("function"==typeof e){r=s;try{i=e(i)}catch(o){w(u,o)}}m(u,i)||(r===s&&b(u,i),r===c&&w(u,i))}function m(n,r){var i;try{if(n===r)throw new TypeError("A promises callback cannot return that same promise.");if(r&&("function"==typeof r||"object"==typeof r)){var t=r.then;if("function"==typeof t)return t.call(r,function(t){i||(i=!0,r!==t?b(n,t):y(n,t))},function(t){i||(i=!0,w(n,t))}),!0}}catch(e){return i||w(n,e),!0}return!1}function b(t,n){t!==n&&m(t,n)||y(t,n)}function y(t,n){t.state_===e&&(t.state_=u,t.data_=n,v(g,t))}function w(t,n){t.state_===e&&(t.state_=u,t.data_=n,v(C,t))}function k(t){var n=t.then_;t.then_=undefined;for(vara r=0;r<n.length;r++)p(n[r])}function g(t){t.state_=s,k(t)}function C(t){t.state_=c,k(t)}function N(t){if("function"!=typeof t)throw new TypeError("Promise constructor takes a function argument");if(this instanceof N==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[],function(t,n){function r(t){w(n,t)}try{t(function(t){b(n,t)},r)}catch(i){r(i)}}(t,this)}N.prototype={constructor:N,state_:e,then_:null,data_:undefined,then:function(t,n){var r={owner:this,then:new this.constructor(o),fulfilled:t,rejected:n};return this.state_===s||this.state_===c?v(p,r):this.then_.push(r),r.then},"catch":function(t){return this.then(null,t)}},N.all=function(s){if(!f(s))throw new TypeError("You must pass an array to Promise.all().");return new this(function(r,t){var i=[],e=0;function n(n){return e++,function(t){i[n]=t,--e||r(i)}}for(var u,o=0;o<s.length;o++)(u=s[o])&&"function"==typeof u.then?u.then(n(o),t):i[o]=u;e||r(i)})},N.race=function(e){if(!f(e))throw new TypeError("You must pass an array to Promise.race().");return new this(function(t,n){for(var r,i=0;i<e.length;i++)(r=e[i])&&"function"==typeof r.then?r.then(t,n):t(r)})},N.resolve=function(n){return n&&"object"==typeof n&&n.constructor===this?n:new this(function(t){t(n)})},N.reject=function(r){return new this(function(t,n){n(r)})}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:null);var i,n,s=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++)for(var e in n=arguments[r])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t};function c(n,o,s,c){return new(s||(s=Promise))(function(t,r){function i(t){try{u(c.next(t))}catch(n){r(n)}}function e(t){try{u(c["throw"](t))}catch(n){r(n)}}function u(n){n.done?t(n.value):new s(function(t){t(n.value)}).then(i,e)}u((c=c.apply(n,o||[])).next())})}function a(r,i){var e,u,o,t,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return t={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function n(n){return function(t){return function(t){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,u&&(o=u[2&t[0]?"return":t[0]?"throw":"next"])&&!(o=o.call(u,t[1])).done)return o;switch(u=0,o&&(t=[0,o.value]),t[0]){case 0:case 1:o=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,u=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(o=0<(o=s.trys).length&&o[o.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!o||t[1]>o[0]&&t[1]<o[3])){s.label=t[1];break}if(6===t[0]&&s.label<o[1]){s.label=o[1],o=t;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(t);break}o[2]&&s.ops.pop(),s.trys.pop();continue}t=i.call(r,s)}catch(n){t=[6,n],u=0}finally{e=o=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([n,t])}}}(n=i||(i={})).on=function(t,n,r){if(t.addEventListener)return t.addEventListener(n,r),{dispose:function(){t.removeEventListener(n,r)}};var i=t;if(i.attachEvent){var e="on"+n;return i.attachEvent(e,r),{dispose:function(){i.detachEvent(e,r)}}}throw new Error("Can not attach event "+n+" to "+t)},n.off=function(t,n,r,i){void 0===i&&(i=!1),t.removeEventListener?t.removeEventListener(n,r,i):t.detachEvent("on"+n,r)};var e=new(function(){function t(t){void 0===t&&(t=window),this.t=t}return t.prototype.onLoad=function(){var r=this;return new Promise(function(t){var n=r.t.document;"complete"!==n.readyState?(i.on(n,"DOMContentLoaded",t),i.on(r.t,"load",t)):t()})},t}()),r=function(){function t(t,n){void 0===n&&(n=window.document),this.n=n,this.r=t,null!=n.currentScript&&(this.i=u(n.currentScript.src))}return t.prototype.src=function(){return this.u().e},t.prototype.to=function(t){var n=this.u();return""+n.o+t+n.s},t.prototype.u=function(){if(null!=this.i)return this.i;for(var t=this.n.scripts,n=t.length-1;0<=n;--n){var r=u(t[n].src);if(r.c.match(this.r))return this.i=r}throw new Error("Script is included incorrectly")},t}();function u(t){var n=t,r="",i=n.indexOf("?");if(0<=i)r=n.substring(i),n=n.substring(0,i);else{var e=n.indexOf("#");0<=e&&(r=n.substring(e),n=n.substring(0,e))}return{e:t,o:n.substring(0,n.lastIndexOf("/")+1),c:n,s:r}}function o(){}var f,h={dispose:o};function d(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r=t.length-1;0<=r;--r)t[r].dispose()}function l(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function v(t,n){for(var r in t)t.hasOwnProperty(r)&&n(r)}function p(t){if("object"==typeof t)return t;for(var n={},r=0,i=t.split(/\s+/g);r<i.length;r++){var e=i[r];e&&(n[e]=!0)}return n}function m(n){if("string"==typeof n)return n;var r="";return v(n,function(t){n[t]&&(r&&(r+=" "),r+=t)}),r}function b(t,n){t=p(t);var r=s({},p(n)),i={};for(var e in t)t.hasOwnProperty(e)&&t[e]&&!r[e]&&(i[e]=!0,r[e]=!0);return[r,i]}function y(t,n){return t?"function"==typeof t?Promise.resolve(t(n)).then(p):Promise.resolve(t).then(p):Promise.resolve({})}function w(t,n,r){return t?Promise.all([y(t,r),y(n,r)]).then(function(t){return b(t[0],t[1])[0]}):y(n,r)}function k(t,n){return t?"function"==typeof t?Promise.resolve(t(n)):Promise.resolve(t):Promise.resolve({})}function g(t,n,r){return t?Promise.all([k(t,r),k(n,r)]).then(function(t){var n=t[0],r=t[1];return s({},r,n)}):k(n,r)}!function(c){var t=function(){function t(){}return t.prototype.applyAttribute=function(t,n,r){if("::"!==n.substring(0,2)){var i=t.style[n];return t.style[n]=r,{dispose:function(){t.style[n]=i}}}return h},t}();c.f=new t;var n=function(){function t(){}return t.prototype.applyAttribute=function(t,n,r){var i;switch(n){case"::disabled":i="disabled";break;case"::readonly":i="readOnly";break;case"::placeholder":i="placeholder";break;default:return c.f.applyAttribute(t,n,r)}var e=t[i];return t[i]=r,{dispose:function(){t[i]=e}}},t}();c.a=new n,c.applyTo=function(t,n,r){void 0===r&&(r=c.f);var i=[],e=n;for(var u in e)if(e.hasOwnProperty(u)){var o=e[u],s=r.applyAttribute(t,u,o);s!==h&&i.push(s)}return{dispose:function(){d.apply(void 0,i)}}}}(f||(f={}));var C=function(){function t(t,n,r){this.h=t,this.d=n,this.l=r}return t.prototype.element=function(){return this.d},t.prototype.addCssClasses=function(t){return this.h.addClass(this.d,t)},t.prototype.applyCssStyle=function(t){return f.applyTo(this.d,t,this.l)},t.prototype.dispose=function(){},t}(),N=new(function(){function t(t){void 0===t&&(t=window),this.v=t}return t.prototype.t=function(){return this.v},t.prototype.n=function(){return this.t().document},t.prototype.includeStyle=function(t){var n=this.n().getElementsByTagName("head")[0],r=this.n().createElement("link");return r.setAttribute("rel","stylesheet"),r.setAttribute("href",t),n.appendChild(r),{value:r,dispose:function(){n.removeChild(r)}}},t.prototype.inlineStyle=function(t){var n=this.n().getElementsByTagName("head")[0],r=this.n().createElement("style");return r.appendChild(this.n().createTextNode(t)),"styleSheet"in r&&(r.styleSheet.cssText=t),n.appendChild(r),{value:r,dispose:function(){n.removeChild(r)}}},t.prototype.createIframe=function(t,n){var r=t.ownerDocument.createElement("iframe");r.setAttribute("src",n.src);var i=n.attrs;return i&&v(n.attrs,function(t){r.setAttribute(t,i[t])}),n.style&&f.applyTo(r,n.style),t.appendChild(r),{value:r,dispose:function(){t.removeChild(r)}}},t.prototype.select=function(t,n,r,i){var e,u,o=this;if(void 0===i&&(i=function(t){return new C(o,t)}),"string"==typeof t){var s=r().querySelector(t);return s?i(s):undefined}return e="function"==typeof t?t(n):t,"function"==typeof(u=e).element&&"function"==typeof u.addCssClasses&&"function"==typeof u.applyCssStyle?e:i(e)},t.prototype.addClass=function(t,n){var r=b(n,t.className),i=r[0],e=r[1];return t.className=m(i),{dispose:function(){t.className=m(function(t,n){t=p(t);var r=s({},p(n));for(var i in t)t.hasOwnProperty(i)&&t[i]&&delete r[i];return r}(e,t.className))}}},t}());var P,$,S,j,E,x=(void 0===P&&(P=Array),P.isArray?P.isArray:function(t){return t instanceof Array});function T(t){return x(t)&&!t.length}function F(n){return{cssClass:function(t){return y(n.cssClass,t)},style:function(t){return k(n.style,t)}}}function O(n,r){return r?{cssClass:function(t){return w(r.cssClass,n.cssClass,t)},style:function(t){return g(r.style,n.style,t)}}:n}function _(o){return c(this,void 0,void 0,function(){var n,r,i,e,u;return a(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.cssClass(o),this.style(o),this.group.cssClass(o),this.group.style(o)])];case 1:return n=t.sent(),r=n[0],i=n[1],e=n[2],u=n[3],[2,{cssClass:r,style:i,group:{cssClass:e,style:u}}]}})})}function A(n){return{group:F({cssClass:n.group&&n.group.cssClass}),cssClass:function(t){return y(n.cssClass,t)},style:function(t){return k(n.style,t)},buildState:_}}function I(n,r){return r?{group:O(n.group,r.group),cssClass:function(t){return w(r.cssClass,n.cssClass,t)},style:function(t){return g(r.style,n.style,t)},buildState:_}:n}function G(n){return{group:F({cssClass:n.group&&n.group.cssClass}),cssClass:function(t){return y(n.cssClass,t)},style:function(t){return k(n.style,t)}}}function M(n,r){return r?{group:O(n.group,r.group),cssClass:function(t){return w(r.cssClass,n.cssClass,t)},style:function(t){return g(r.style,n.style,t)}}:n}function U(e){return c(this,void 0,void 0,function(){var n,r,i;return a(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.cssClass(e),this.style(e)])];case 1:return n=t.sent(),r=n[0],i=n[1],[2,{cssClass:r,style:i}]}})})}function V(n,r){return r?{cssClass:function(t){return w(r.cssClass,n.cssClass,t)},style:function(t){return g(r.style,n.style,t)},buildState:U}:n}function W(f){return c(this,void 0,void 0,function(){var n,r,i,e,u,o,s,c;return a(this,function(t){switch(t.label){case 0:return n=this[f.name],[4,Promise.all([this.container.cssClass(f),this.container.style(f),n.group.cssClass(f),n.group.style(f),n.cssClass(f).then(p),n.style(f)])];case 1:return r=t.sent(),i=r[0],e=r[1],u=r[2],o=r[3],s=r[4],c=r[5],[2,{container:{cssClass:i,style:e},group:{cssClass:u,style:o},field:{cssClass:s,style:c}}]}})})}function J(t,n){return n?{style:S.extend(n.style,t.style),container:(r=t.container,i=n.container,i?{cssClass:function(t){return w(i.cssClass,r.cssClass,t)},style:function(t){return g(i.style,r.style,t)}}:r),cardNumber:M(t.cardNumber,n.cardNumber),cvv:M(t.cvv,n.cvv),accountNumber:M(t.accountNumber,n.accountNumber),buildState:W}:t;var r,i}function Y(t,n){var r=V(t.container,n.container),i=J(t.iframe,n.iframe);return{id:n.id,style:S.extend(n.style,t.style),container:n.id?V(r,{cssClass:"obick-theme-"+n.id}):r,cardNumber:I(t.cardNumber,n.cardNumber),cvv:I(t.cvv,n.cvv),accountNumber:I(t.accountNumber,n.accountNumber),iframe:n.id?J(i,{container:{cssClass:"obick-theme-"+n.id}}):i}}function q(){return E||(t={id:"basic",style:[],container:(i={cssClass:"obick-input"},{cssClass:function(t){return y(i.cssClass,t)},style:function(t){return k(i.style,t)},buildState:U}),cardNumber:A({cssClass:D({"obick-input-field":!0,"obick-card-number":!0}),group:{cssClass:D({"obick-input-group":!0,"obick-card-number-group":!0})}}),cvv:A({cssClass:D({"obick-input-field":!0,"obick-cvv":!0}),group:{cssClass:D({"obick-input-group":!0,"obick-cvv-group":!0})}}),accountNumber:A({cssClass:D({"obick-input-field":!0,"obick-account-number":!0}),group:{cssClass:D({"obick-input-group":!0,"obick-account-number-group":!0})}}),iframe:(n={style:[],container:(r={cssClass:"obick-iframe"},{cssClass:function(t){return y(r.cssClass,t)},style:function(t){return k(r.style,t)}}),cardNumber:G({cssClass:D({"obick-iframe-field":!0,"obick-card-number":!0}),group:{cssClass:D({"obick-iframe-group":!0,"obick-card-number-group":!0})}}),cvv:G({cssClass:D({"obick-iframe-field":!0,"obick-cvv":!0}),group:{cssClass:D({"obick-iframe-group":!0,"obick-cvv-group":!0})}}),accountNumber:G({cssClass:D({"obick-iframe-field":!0,"obick-account-number":!0}),group:{cssClass:D({"obick-iframe-group":!0,"obick-account-number-group":!0})}})},{style:n.style,container:n.container,cardNumber:n.cardNumber,cvv:n.cvv,accountNumber:n.accountNumber,buildState:W})},E={id:t.id,style:t.style,container:t.container,cardNumber:t.cardNumber,cvv:t.cvv,accountNumber:t.accountNumber,iframe:t.iframe});var t,n,r,i}function D(o){return function(t){var n=t.status(),r=t.input.status(),i=n.dirty||r.submitted,e=n.errors,u=!!e;return s({"obick-dirty":i,"obick-pristine":!i,"obick-has-focus":n.hasFocus,"obick-no-focus":!n.hasFocus,"obick-invalid":u,"obick-valid":!u,"obick-error-missing":!(!e||!e.missing),"obick-error-incomplete":!(!e||!e.incomplete),"obick-error-invalid":!(!e||!e.invalid)},o)}}($||($={})).print=function t(n){var r="";if(x(n))for(var i=0,e=n;i<e.length;i++){var u=e[i];r+="string"==typeof u?u+";":t(u)}else{var o=n;for(var s in o)if(n.hasOwnProperty(s)){var c=o[s];if("object"==typeof c){r+=s+"{"+t(c)+"}";continue}r+=s+":"+c+";"}}return r},(j=S||(S={})).process=function(t){var n;n=x(t)?t:[t];for(var r=[],i=0,e=n;i<e.length;i++){var u=e[i];"string"==typeof u?r.push(N.includeStyle(u)):r.push(N.inlineStyle($.print(u)))}return{dispose:function(){d.apply(void 0,r)}}},j.extend=function(t,n){return!t||T(t)?n:T(n)?t:(x(n)?n:[n]).concat(x(t)?t:[t])};var L,Q,z={"default":function(t){return H(t,"default",{})},bootstrap3:function(t){return H(t,"bootstrap3",{cardNumber:{cssClass:"form-control",group:{cssClass:B}},cvv:{cssClass:"form-control",group:{cssClass:B}},accountNumber:{cssClass:"form-control",group:{cssClass:B}},iframe:{cardNumber:{cssClass:"form-control"},cvv:{cssClass:"form-control"},accountNumber:{cssClass:"form-control"}}})},"bootstrap3-cdn":function(){return{extend:"bootstrap3",iframe:{style:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"}}}};function B(t){var n=t.input.status().submitted,r=t.status(),i=r.dirty||n,e=r.hasFocus&&!!r.errors&&(!!r.errors.incomplete||!!r.errors.missing);return{"has-warning":e,"has-error":i&&!e&&!!r.errors}}function H(t,n,r){var i=t.to("obick."+n+".theme.css");return r.id=n,r.style=S.extend(r.style,i),r.iframe||(r.iframe={}),r.iframe.style=S.extend(r.iframe.style,i),r}(Q=L||(L={})).byRef=function(t,n){if(!n)return Y(q(),z["default"](t));if(!n||"string"==typeof n){var r=z[n];if(!r)return Y(q(),z["default"](t));n=r(t)}return n.extend?Y(Q.byRef(t,n.extend),n):Y(q(),n)};var K=function(){function r(t,n){this.p=t,this.m=n,this.b=h}return r.y=function(t,n){return void 0===n&&(n={}),new r(t,n)},r.prototype.w=function(){return c(this,void 0,void 0,function(){var n,r;return a(this,function(t){switch(t.label){case 0:if(!(n=N.select(this.m.selector||function(t){return N.select(".obick-input",t,R)||R()},this.k(),R)))throw new Error("Wrong selector of checkout input container: "+this.m.selector+'"');return this.g=n,r=this.C,[4,this.p.N().container.buildState(this.k())];case 1:return r.apply(this,[t.sent()]),[2,this]}})})},r.prototype.k=function(){if(this.P)return this.P;var t=this;return this.P={input:t.p.k(),element:function(){return t.g.element()}}},r.prototype.C=function(t){this.b.dispose();var n=[this.g.addCssClasses(t.cssClass),this.g.applyCssStyle(t.style)];this.b={dispose:function(){d.apply(void 0,n)}}},r.prototype.S=function(){this.b.dispose()},r}();function R(){return document.body}var X=function(){function n(t){this.j=new r(/(^|\/)obick\.umd\.js$/,t)}return n.y=function(t){return new n(t)},n.prototype.x=function(){return this.j},n}(),Z={outline:"none",border:"none",width:"100%",height:"100%"},tt=function(){function n(t){this.T=N.createIframe(t.field.element(),t)}return n.y=function(t){return new n(t)},n.F=function(t){return{id:"obick-iframe--"+t,allowtransparency:"allowtransparency",scrolling:"no",frameborder:"0"}},n.O=function(){return Z},n.prototype.element=function(){return this.T.value},n.prototype.addCssClasses=function(t){return N.addClass(this.element(),t)},n.prototype.applyCssStyle=function(t){return f.applyTo(this.element(),t)},n.prototype.dispose=function(){this.T.dispose()},n}(),nt=function(){function n(t){this._=t,this.A={dirty:!1,hasFocus:!1,errors:{missing:"Value is missing"}},this.I=[],this.G(t.M)}return n.y=function(t){return new n(t)},n.prototype.U=function(t){this.I.push(t)},n.prototype.V=function(){this.A=s({},{dirty:!1,hasFocus:!1,errors:{missing:"Value is missing"}},{hasFocus:this.A.hasFocus}),this.W()},n.prototype.G=function(t){var n=this;t.onRequest("status-update",function(t){return t.hasFocus&&(n.A.dirty=!0),n.A.hasFocus=t.hasFocus,n.A.errors=t.errors,n.J()})},n.prototype.J=function(){return c(this,void 0,void 0,function(){var n;return a(this,function(t){switch(t.label){case 0:return this.W(),n={type:"status-updated"},[4,this._.Y(!1)];case 1:return[2,(n.state=t.sent()[1],n)]}})})},n.prototype.W=function(){for(var t=0,n=this.I;t<n.length;t++){(0,n[t])(this.A)}},n}();var rt=function(t,n){this.message=t,this.input=n};rt.prototype=TypeError.prototype;var it,et=function(){function t(t){var n=t.channel,r=t.sendMessage,i=t.dispose;this.q=0,this.D={},this.L={},this.Q=ut,this.channel=n,this.z=r,this.B=i}return t.prototype.send=function(t){return t.channel=this.channel,this.z(t),this},t.prototype.request=function(r){var i=this,e=this.channel+":"+r.type+"-"+ ++this.q;return r.requestId=e,new Promise(function(t,n){i.L[e]={resolve:t,reject:n},i.send(r)})},t.prototype.reply=function(n,t){var r=this;return t.then(function(t){return t.replyTo=n.requestId,t},function(t){return{type:"error",replyTo:n.requestId,error:t}}).then(function(t){return r.send(t)})},t.prototype.onMessage=function(t,n){return this.D[t]=n,this},t.prototype.onRequest=function(t,n){var r=this;return this.D[t]=function(t){return r.reply(t,n(t))},this},t.prototype.onError=function(n){var r=this.Q;return this.Q=r===ut?n:function(t){n(t),r(t)},this},t.prototype.dispose=function(){this.B()},t.prototype.H=function(t){if(t.channel!==this.channel)return!1;var n=t;if(n.replyTo){var r=this.L[n.replyTo];return r?(delete this.L[n.replyTo],"error"===n.type?r.reject(n.error):r.resolve(t)):this.Q(new rt("Unexpected response: "+n.replyTo,t)),!0}var i=this.D[t.type];return i?i(t):this.Q(new rt("Unhandled message received: "+t.type,t)),!0},t}();function ut(t){throw t}(it||(it={})).y=function(r,t){var n=i.on(window,"message",function(t){var n,r,i;(r=function(t){if(t){var n;if("object"==typeof t)n=t;else try{n=JSON.parse(t)}catch(r){return}if(n)return n.obick_message}}((n=t).data))&&e.H(r)&&"stopImmediatePropagation"in(i=n)&&i.stopImmediatePropagation()}),e=new et({channel:t,sendMessage:function(t){var n;r.contentWindow.postMessage((n=t,new(function(){function t(){this.obick_message=n}return t.prototype.toString=function(){return JSON.stringify(this)},t}())),"*")},dispose:function(){n.dispose()}});return e};var ot={cardNumber:{K:"Credit card number",R:".obick-card-number-group",X:".obick-card-number",Z:"card-number"},cvv:{K:"CVV",R:".obick-cvv-group",X:".obick-cvv",Z:"cvv"},accountNumber:{K:"Account number",R:".obick-account-number-group",X:".obick-account-number",Z:"account-number"}},st=function(){function i(t,n,r){this.p=t,this.tt=n,this.nt=r,this.b=h,this.rt=!1,this.it=!1,this.et=ot[n],this.Z=this.et.Z,this.ut=t.ot+"-"+this.Z,this.st=t.st[n]||{},this.K=ot[n].K}return i.y=function(t,n,r){return new i(t,n,r)},i.prototype.w=function(){return c(this,void 0,void 0,function(){var n,r,i=this;return a(this,function(t){switch(t.label){case 0:if(this.ct=N.select(this.st.group&&this.st.group.selector||this.et.R,this.k(),function(){return i.p.ft.g.element()}),!(n=N.select(this.st.selector||this.et.X,this.k(),function(){return(i.ct||i.p.ft.g).element()})))throw new Error("Wrong selector of "+this.K+" input field container: "+this.st.selector+'"');return this.g=n,this.at=this.ht(),this.M=it.y(this.at.element(),this.ut),this.dt=nt.y(this),[4,this.p.N()[this.tt].buildState(this.k())];case 1:return r=t.sent(),this.C(r),[4,this.lt()];case 2:return t.sent(),[2,this]}})})},i.prototype.A=function(){return this.dt.A},i.prototype.U=function(n){var r=this;return this.dt.U(function(t){return n.call(r.k(),t)}),this},i.prototype.Y=function(t){var r=this;return void 0===t&&(t=!0),this.vt?(this.it=this.it||t,this.vt):this.rt?(this.it=t,this.vt=new Promise(function(t,n){r.pt=t,r.mt=n})):this.bt(t)},i.prototype.k=function(){if(this.P)return this.P;var i=this,t=function(){function t(){this.input=i.p.k(),this.type=i.Z,this.name=i.tt}return t.prototype.element=function(){return i.g.element()},t.prototype.groupElement=function(){return i.ct&&i.ct.element()},t.prototype.status=function(){return s({},i.A())},t.prototype.onStatusUpdate=function(n){var r=this;return i.U(function(t){return n.call(r,t)}),this},t.prototype.refreshState=function(t){return i.Y(t)},t}();return this.P=new t},i.prototype.C=function(t){this.b.dispose();var n=this.ct,r=[n?n.addCssClasses(t.group.cssClass):h,n?n.applyCssStyle(t.group.style):h,this.g.addCssClasses(t.cssClass),this.g.applyCssStyle(t.style)];this.b={dispose:function(){d.apply(void 0,r)}}},i.prototype.V=function(){this.yt(),this.dt.V()},i.prototype.S=function(){this.yt(),this.at.dispose(),this.g.dispose(),this.ct&&this.ct.dispose(),this.b.dispose(),this.M.dispose()},i.prototype.yt=function(){this.M.send({type:"reset"})},i.prototype.ht=function(){var t=this,n=this.st.iframe&&this.st.iframe.selector||tt.y,r={field:this.k(),src:this.p.$.assets.to("obick.iframe.html")+"?id="+this.ut+"#"+this.ut,attrs:{id:"obick-iframe--"+this.ut,allowtransparency:"allowtransparency",scrolling:"no",frameborder:"0"}},i=N.select(n,r,function(){return t.g.element()});if(!i)throw new Error("Wrong selector of "+this.K+" input field iframe: "+n+'"');return i.applyCssStyle(tt.O()),i},i.prototype.lt=function(){var n=this;return this.M.onMessage("submit",function(){return n.wt()}),new Promise(function(t){n.M.onRequest("init-request",function(){return n.kt(t)})})},i.prototype.kt=function(u){return c(this,void 0,void 0,function(){var n,r,i,e;return a(this,function(t){switch(t.label){case 0:return n=this.p.N().iframe,[4,this.p.N().iframe.buildState(this.k())];case 1:return r=t.sent(),i={checkoutConfig:this.p.$.config,inputId:this.p.ot,iframeId:this.ut,name:this.tt,style:n.style,state:r},this.nt(this,i),u(e={type:"init-response",config:i}),[2,e]}})})},i.prototype.wt=function(){(this.p.st.onSubmit||o)(this.k())},i.prototype.bt=function(s){return c(this,void 0,void 0,function(){var n,r,i,e,u,o;return a(this,function(t){switch(t.label){case 0:this.rt=!0,t.label=1;case 1:return t.trys.push([1,,5,6]),r=this.p.N(),i=r.iframe,e=this.k(),[4,Promise.all([r[this.tt].buildState(e),i.buildState(e)])];case 2:return n=t.sent(),this.C(n[0]),s?[4,this.M.send({type:"state-update",state:n[1]})]:[3,4];case 3:t.sent(),t.label=4;case 4:return[3,6];case 5:return this.rt=!1,[7];case 6:return this.vt&&(u=this.pt,o=this.mt,s=this.it,this.vt=undefined,this.it=!1,this.pt=undefined,this.mt=undefined,this.bt(s).then(u,o)),[2,n]}})})},i}();function ct(t){return t.gt.cvv}function ft(t){return function(r){return st.y(r,t,function(t,n){n.cards=r.st.cards})}}var at={gt:[ft("cardNumber"),ft("cvv")],Ct:ct};var ht,dt={gt:[(ht="cardNumber",function(r){return st.y(r,ht,function(t,n){n.cards=r.st.cards,n.name="standaloneCardNumber"})})],Ct:function(t){return t.gt.cardNumber}};var lt,vt={gt:[(lt="cvv",function(r){return st.y(r,lt,function(t,n){n.name="standaloneCvv",n.paymentType=r.st.paymentType})})],Ct:ct};var pt,mt,bt={gt:[(pt="accountNumber",function(t){return st.y(t,pt,o)})],Ct:function(t){return t.gt.accountNumber}},yt=function(){function i(t,n,r){this.$=t,this.Nt=n,this.st=r,this.gt={},this.Pt=!1,this.$t=h,this.St=[],this.ot="input-"+l()+l()+"-"+l()+"-"+l()+"-"+l()+"-"+l()+l()+l(),this.ft=K.y(this,this.st.container);for(var i=0,e=n.gt;i<e.length;i++){var u=(0,e[i])(this);this.gt[u.tt]=u,this.St.push(u)}}return i.y=function(t,n,r){return new i(t,n,r)},i.prototype.w=function(){return c(this,void 0,void 0,function(){var n,r,i,e,u=this;return a(this,function(t){for(this.$t=S.process(this.N().style),n=[this.ft.w()],r=0,i=this.St;r<i.length;r++)e=i[r],n.push(e.w());return[2,Promise.all(n).then(function(){return u})]})})},i.prototype.A=function(){return{generatingToken:!!this.jt,submitted:this.Pt}},i.prototype.Y=function(){for(var t=[],n=0,r=this.St;n<r.length;n++){var i=r[n];t.push(i.Y())}return Promise.all(t)},i.prototype.N=function(){return this.Et||(this.Et=L.byRef(this.$.assets,this.st.theme))},i.prototype.k=function(){if(this.P)return this.P;for(var t=this,n={container:function(){return t.ft.k()},status:function(){return t.A()},refreshState:function(){return t.Y()},createToken:function(){return t.xt()},reset:function(){return t.V()},dispose:function(){return t.S()}},r=function(t){n[t.tt]=function(){return t.k()}},i=0,e=this.St;i<e.length;i++){r(e[i])}return this.P=n},i.prototype.xt=function(){var t=this;return this.jt?this.jt:(this.Pt=!0,this.jt=Promise.resolve().then(function(){return t.Tt()}))},i.prototype.Tt=function(){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,this.Y()];case 1:t.sent(),t.label=2;case 2:return t.trys.push([2,,3,5]),[2,this.Ft()];case 3:return this.jt=undefined,[4,this.Y()];case 4:return t.sent(),[7];case 5:return[2]}})})},i.prototype.Ft=function(){return this.Nt.Ct(this).M.request({type:"generate-token"}).then(function(t){return t.token})},i.prototype.V=function(){for(var t=0,n=this.St;t<n.length;t++){n[t].V()}},i.prototype.S=function(){this.$t.dispose(),this.ft.S();for(var t=0,n=this.St;t<n.length;t++){n[t].S()}},i}(),wt=function(){function n(t){this.$=t}return n.y=function(t){return new n(t)},n.prototype.p=function(t,n){return yt.y(this.$,t,n).w()},n.prototype.k=function(){if(this.P)return this.P;var n=this;return this.P={cardNumber:{input:function(t){return void 0===t&&(t={}),n.p(dt,t).then(function(t){return t.k()})}},cvv:{input:function(t){return void 0===t&&(t={}),n.p(vt,t).then(function(t){return t.k()})}},checking:{input:function(t){return void 0===t&&(t={}),n.p(bt,t).then(function(t){return t.k()})}},input:function(t){return void 0===t&&(t={}),n.p(at,t).then(function(t){return t.k()})}}},n}(),kt=new(function(){function r(t){this.Ot=X.y(t)}return r._t=function(t){return{serverUrl:(i=t.serverUrl,null==i?"auto":i),assetsUrl:(r=t.assetsUrl,null==r?"auto":r),safetech:(n=t.safetech,null==n?"QA":n),merchant:t.merchant,host:N.t().location.host};var n,r,i},r.prototype.x=function(t){var n=r._t(t);return{config:n,assets:n.assetsUrl&&"auto"!==n.assetsUrl?{to:function(t){return n.assetsUrl+"/"+t}}:this.Ot.x()}},r}());function gt(t){return void 0===t&&(t={}),mt.w(t)}function Ct(t){return gt(t)}return(mt||(mt={})).w=function(r){return c(this,void 0,void 0,function(){var n;return a(this,function(t){switch(t.label){case 0:return[4,e.onLoad()];case 1:return t.sent(),n=kt.x(r),[2,wt.y(n).k()]}})})},(Ct||(Ct={})).createCheckout=gt,Ct});
//# sourceMappingURL=obick.umd.js.map
