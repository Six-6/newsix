!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/da",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){var r=window;window.parent!==window&&window.inDapIF&&(r=window.parent),function(){var t="__qq_qidian_da",e=r[t]||"qidianDA";if(e){var o=r[e]=r[e]||function(){o[t].push(arguments)};if(!o.loaded){o.loaded=!0;var i="0.5.0",a=r.location,s=a.protocol,c=s+"//da.qidian.qq.com",u=s+"//combo.b.qq.com",f=new Date,d=n(2);d(function(){var e=n(13),a=n(15),d=n(22);e.start("rdy",f);var l=a("i",i,c),h=n(25);h=l.wrap("run",h,1);var p=l.wrap("init",function(e){var r=n(28),a=n(8),f={win:e,version:i,trackers:{},trackingIds:{},ready:function(t){d.flag(5),t.call(this)},create:function(t,r,o){if(!this.trackingIds[t]){this.trackingIds[t]=!0;var i,f;if("string"==typeof r?(f=r,i=o||{}):(i=r||{},f=null==o?"_"+a():o),this.trackers[f])throw new Error('Tracker name: "'+f+'" exist.');i.win=e,i.doc=e.document,i.ver=this.version,i.ptc=s,i.ts=c,i.ss=u,i.hbt=5e3;var d=n(30);this.trackers[f]=new d(this,t,f,i)}},getTracker:function(t){return this.trackers[t]},eachTracker:function(t){for(var e in this.trackers)this.trackers.hasOwnProperty(e)&&t(e)}};l.wrap("create",f,4);var h="set";r(t,f,o,l.wrap("mqp-cb",function(t,e,n){if("create"===e)return void t[e].apply(t,n);var r=e.split("."),o=r[1]||r[0],i=2===r.length?r[0]:null,a=function(e){var r=t.getTracker(e);!r||h.indexOf(o)<0||"function"!=typeof r[o]||r[o].apply(r,n)};null==i?t.eachTracker(a):a(i)},3))},2);h(r,p)},r)}}}()},function(t,e,n){var r,o=n(3),i=n(12);t.exports=function(t,e){if(e=e||window,r||!t){var n=r||e;return t&&t(n),n}for(var a=["encodeURIComponent","encodeURI","decodeURIComponent","decodeURI","setTimeout","clearTimeout","setInterval","clearInterval"],s=!0,c=0,u=a.length;u>c;c++)if(!i(e[a[c]])){s=!1;break}return s?(r=e,void t(r)):void o(function(e){r=e,t(e)},e)}},function(t,e,n){var r=n(4),o=n(5),i=n(10),a=n(11);t.exports=function(t,e){e=e||window;var n=r(e);return a(n,e),o(n,function(e,n,r){return null!=e.Array?void t(e):(n.open("text/html","replace")._M_=function(){r&&(this.domain=r),e=this.defaultView||this.parentWindow,t(e)},n.write(i.HTML_START+'<body onload="document._M_();"></body>'+i.HTML_END),void n.close())}),n}},function(t,e){var n=function(t){var e=(t||window).document,n=e.createElement("iframe");return n.src="javascript:false",n.title="",n.role="presentation",n.frameBorder="0",n.tabIndex="-1",(n.frameElement||n).style.cssText="position:absolute;width:0;height:0;border:0;",n};t.exports=n},function(t,e,n){var r=n(6),o=n(9),i=function(t,e){var n,i,a=t.ownerDocument,s=!1;try{n=t.contentWindow,i=n.document}catch(c){s=!0,r(t,"load",function(){n=t.contentWindow,i=n.document,o(t,"load"),e(n,i,a.domain)}),t.src='javascript:void((function () {document.open("text/html", "replace");document.domain = "'+a.domain+'";document.close();})())'}s||e(n,i,"")};t.exports=i},function(t,e,n){var r=n(7),o=function(t,e,n){e=e.replace(/^on/i,"");var o=function(e){n.call(t,e)},i=e;e=e.toLowerCase(),t.addEventListener?t.addEventListener(i,o,!1):t.attachEvent&&t.attachEvent("on"+i,o);var a=t[r]=t[r]=[];return a[a.length]=[e,n,o,i],t};t.exports=o},function(t,e,n){var r=n(8);t.exports="S3EVENT_LISTENERS"+r()},function(t,e){var n=function(){var t;try{var e=new Uint32Array(1);window.crypto.getRandomValues(e),t=2147483647&e[0]}catch(n){t=Math.floor(2147483648*Math.random())}return t.toString(36)};t.exports=n},function(t,e,n){var r=n(7),o=function(t,e,n){var o=n;e=e.replace(/^on/i,"").toLowerCase();for(var i,a,s,c=t[r],u=!o,f=c.length;f--;)i=c[f],i[0]!==e||!u&&i[1]!==o||(a=i[3],s=i[2],t.removeEventListener?t.removeEventListener(a,s,!1):t.detachEvent&&t.detachEvent("on"+a,s),c.splice(f,1));return t};t.exports=o},function(t,e){t.exports={HTML_START:'<!DOCTYPE html><html><head><meta charset="UTF-8"></head>',HTML_END:"</html>",IE_HTML_SUFFIX:"<script>var timer = setInterval(function () {var arr = document.getElementsByTagName('script');var links = document.getElementsByTagName('link');var allLoaded = true;for (var i = 0; i < links.length; i++) {if (!/loaded|complete/.test(links[i].readyState)) {allLoaded = false;}}for(var i = 0; i < arr.length; i++) {if (!/loaded|complete/.test(arr[i].readyState)) {allLoaded = false;}}if (allLoaded) {clearInterval(timer);document.close();}},200);</script>"}},function(t,e){var n=function(t,e){var n=(e||window).document,r=n.body||n.documentElement;r.insertBefore(t,r.firstChild)};t.exports=n},function(t,e){var n=Object.prototype.toString,r=Function.prototype.toString,o=/^\[object .+?Constructor\]$/,i=RegExp("^"+String(n).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){var e=typeof t;return"function"===e?i.test(r.call(t)):t&&"object"===e&&o.test(n.call(t))||!1}},function(t,e,n){var r=(n(14),function(){this._s={},this._avg={},this._max={}});r.prototype.start=function(t,e){this._s[t]=e?+e:+new Date},r.prototype.end=function(t,e){var n=this._s[t];this._s[t]=null;var r=e?+e:+new Date,o=r-n;this._max[t]=Math.max(o,this._max[t]||0);var i=this._avg[t];i?(i.s=(i.s*i.n+o)/(i.n+1),++i.n):i=this._avg[t]={s:o,n:1}},r.prototype.encode=function(){var t,e,n="",r=this._avg;for(var o in r)r.hasOwnProperty(o)&&(t=Math.round(r[o].s||0),e=Math.round(this._max[o]||0),n+=o+"("+t+"_"+e+")");return n},t.exports=new r},function(t,e){var n=function(t){return function(){var e=window.console;"undefined"!=typeof e&&"function"==typeof e[t]&&e[t].apply(e,arguments)}},r=n("log");r.group=n("group"),r.groupEnd=n("groupEnd"),t.exports=r},function(t,e,n){var r=n(16),o=n(17),i=n(21),a=(n(14),n(2)),s=n(22),c=n(24),u=n(13),f="__QIDIANDA_SENDED",d=function(t,e,n){this.module=t,this.version=e,this.trackingServer=n};d.prototype={module:"",version:"",trackingServer:"",wrap:function(t,e,n,o){var i=this,a=null==e||"function"===r(e),c=a?e:e[t],d=function(){var e=o?o.get("tid"):null;try{n&&s.flag(n,e),u.start(t);var r;return c&&(r=c.apply(this,arguments)),u.end(t),r}catch(a){if(!a[f]){alert(a.name+"#"+a.message),a[f]=!0;var d=o?o.getCommonQuery(!0):null;i.sendError("err",t,a.name,a.message,e,d)}throw a}};return d.displayName=t,a||(e[t]=d),d},errorQueue:[],sending:!1,sendError:function(t,e,n,r,u,f,d){if(!(100*Math.random()>=1)){if(this.sending)return void this.errorQueue.push(arguments);this.sending=!0;var l=a().encodeURIComponent,h=this.trackingServer+"/ping/err";if(f=(f||"v="+this.version+"&t="+c(+new Date))+"&fg="+s.encode(u)+"&tp="+l(t)+"&p1="+l(this.module+"-"+e)+(n?"&p2="+l(n.slice(0,100)):"")+(r?"&p3="+l(r.slice(0,100)):""),d)i(h,f);else{var p=this;o(h,f,{callback:function(){p.sending=!1;var t=p.errorQueue.shift();t&&p.sendError.apply(p,t)}})}}}};var l={};t.exports=function(t,e,n){if(l[t])return l[t];var r=new d(t,e,n);return l[t]=r,r}},function(t,e){var n={Boolean:1,Number:1,String:1,Function:1,Array:1,Date:1,RegExp:1,Object:1,Error:1},r=Object.prototype.toString,o=function(t){if(null==t)return String(t);var e=typeof t,o="object";return e===o||"function"===e?(e=r.call(t).slice(8,-1),n[e]?e.toLowerCase():o):typeof t};t.exports=o},function(t,e,n){var r=n(8),o=n(18),i=n(19),a=n(20),s=function(t,e){"string"!=typeof t&&(t=o(t));var n=e&&e.randomKey;if(n=null==n?"z":n){var i=n+"="+r();t+=(t?"&":"")+i}return t},c=function(t,e,n){var o=[t,e].join(t.indexOf("?")>=0?"&":"?"),i="S3PING_IMG"+r(),a=new Image;window[i]=a;var s=function(t){if(a.onload=a.onerror=a.onabort=null,window[i]=null,a=null,n){var e=null;t&&(e=new Error,e.name="ImgPing"+t),n(e)}};return a.onload=function(){s()},a.onerror=function(){s("Error")},a.onabort=function(){s("Abort")},a.src=o,!0},u=function(t,e){return i()&&window.navigator.sendBeacon(t,e)},f=function(t,e,n){if("xhr"!==a())return!1;var r=new window.XMLHttpRequest;return r.open("POST",t,!0),r.withCredentials=!0,r.setRequestHeader("Content-Type","text/plain"),n&&(r.onreadystatechange=function(){if(4===r.readyState){var t=r.status,e=t>=200&&400>t,o=null;if(!e){var i="XhrPing"+(500>t?"ClientError":"ServerError");o=new Error(i+" "+t),o.name=i}n(o)}}),r.send(e),!0},d=function(t,e,n){var r=t.length+n.length+1;return r>2083&&r-e.length>2048},l=function(t,e,n){e=s(e,n);var r=t.match(/(?:https?|ftp):\/\/[^\/]+/);if(!r)throw new Error('URL: "'+t+'" not absolute url.');var o=r[0],i=n&&n.transport,a=n&&n.callback;return"img"===i?c(t,e,a):"xhr"===i?f(t,e,a):"beacon"===i?u(t,e):d(t,o,e)?!a&&u(t,e)?!0:f(t,e,a)?!0:c(t,e,a):c(t,e,a)};t.exports=l},function(t,e,n){var r=n(16),o=n(2),i=function(t){if(!t)return"";var e=[],n=/\[\]$/,i=o().encodeURIComponent,a=function(t,n){n="function"==typeof n?n():null==n?"":n,e[e.length]=i(t)+"="+i(n)},s=function(t,o){var i,c,u;switch(r(o)){case"array":if(t)for(i=0,u=o.length;u>i;i++)if(n.test(t))a(t,o[i]);else{var f="object"===r(o[i])?i:"";s(t+"["+f+"]",o[i])}else for(i=0,u=o.length;u>i;i++)s(o[i].key,o[i].value);break;case"object":for(c in o)o.hasOwnProperty(c)&&s(t?t+"["+c+"]":c,o[c]);break;default:o=""+o,t?a(t,o):e[e.length]=o}return e};return s("",t).join("&").replace(/%20/g,"+")};t.exports=i},function(t,e){var n=function(){return"sendBeacon"in window.navigator};t.exports=n},function(t,e){var n=function(){try{if("XMLHttpRequest"in window&&"withCredentials"in new window.XMLHttpRequest)return"xhr";if("XDomainRequest"in window)return"xdr"}catch(t){}return""};t.exports=n},function(t,e,n){var r=n(17),o=n(19)(),i=function(t,e,n){if(n=n||{},n.transport=o?"beacon":"img",r(t,e,n),!o){var i,a=200,s=+new Date;for(i=s+a;i>s;)s=+new Date}};t.exports=i},function(t,e,n){var r=n(23),o=(n(14),function(){this._gFlags=new r,this._allFlags={}});o.prototype.flag=function(t,e){var n;if(e){var o=this._allFlags;o[e]=o[e]||new r,n=o[e]}else n=this._gFlags;n.on(t)},o.prototype.encode=function(t){var e=this._allFlags[t],n=this._gFlags;return(e?n.merge(e):n).encode()},t.exports=new o},function(t,e){var n=function(t){this._data=t||[]};n.prototype.on=function(t){this._data[t]=!0},n.prototype.off=function(t){this._data[t]=!1},n.prototype.merge=function(t){for(var e=this._data.slice(),r=t._data,o=0;o<r.length;o++)e[o]=e[o]||r[o];return new n(e)},n.prototype.encode=function(){for(var t=[],e=0;e<this._data.length;e++)this._data[e]&&(t[Math.floor(e/6)]^=1<<e%6);for(e=0;e<t.length;e++)t[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e]||0);return t.join("")+"~"},t.exports=n},function(t,e){var n=function(t){return t.toString(36)};t.exports=n},function(t,e,n){var r=n(26),o=n(27),i=n(6),a=n(9),s=function(t,e){if(t=t||window,!r(t)){var n=t.document,s=!1,c=function(){e(t)},u=function(){s||o(t)||(s=!0,c(),a(n,"visibilitychange",u))};return o(t)?void i(n,"visibilitychange",u):void c()}};t.exports=s},function(t,e){var n=function(t){t=t||window;var e="navigator";return t[e]&&"preview"===t[e].loadPurpose};t.exports=n},function(t,e){var n=function(t){var e=t||window,n="document";return e[n]&&(e=e[n]),"prerender"===e.visibilityState};t.exports=n},function(t,e,n){var r=n(29),o=function(t,e,n,o,i){n=n||window,n[t]=n[t]||[],i=i||"ready";for(var a=n[t],s=function(t){t.shift||(t=r(t));var n=t.shift();"string"==typeof n?o?o(e,n,t):e[n].apply(e,t):e[i](n)};a.length;)s(a.shift());a.push=s};t.exports=o},function(t,e){var n=function(t,e,n){var r=t.length;if(r>0){n=n||r,e=e||0;for(var o=new Array(n-e),i=e;n>i;i++)o[i]=t[i];return o}return[]};t.exports=n},function(t,e,n){var r=n(8),o=n(29),i=n(18),a=n(22);a.flag(30),n(31),a.flag(31),n(41),a.flag(32),n(45),a.flag(33),n(52),a.flag(34),n(53),a.flag(43),n(55),a.flag(44);var s=n(65),c=n(66),u=n(69),f=n(68),d=n(70),l=n(72),h=n(24),p=n(15),v=n(13),g=p("i"),m=n(40),w=n(73);a.flag(45);var y=function(t,e,n,r){var o=this;o.qdda=t,c.apply(o,arguments),o.name=n,r&&(o.flag(6),o.set(r)),o.set("tid",e),o.createPid(),o.createSid(),o.init()};y.prototype={init:function(){var t=this;t.tasks={},t.task("pq"),t.on("pv-done",function(){t.task("mta"),t.task("id"),t.tasks.pq.start(),v.end("rdy")}),t.task("pv"),t.task("clc"),t.task("pc")},_setGlobal:function(t,e){this.set(t,e),u.set(t,e)},createPid:function(){var t=u.get("pid");if(t)return this.flag(7),void this.set("pid",t);var e=h(s(location.href))+"."+this.random();this._setGlobal("pid",e)},getCommonData:function(t){var e=new l;e.prefix("v",this.get("ver")),e.prefix("tid",this.get("tid")),e.prefix("pid",this.get("pid"));var n=this.get("cid"),r=this.get("src"),o=this.get("pgv_pvi");return r&&e.prefix("src",r),n&&e.prefix("cid",n),o&&e.prefix("pgv_pvi",o),e.prefix("sid",this.getSid(t)),e.suffix("t",h(+new Date)),e},getCommonQuery:function(t){return i(this.getCommonData(t).toJSON())},getFullApi:function(t){return this.get("ts")+t},ping:function(t,e,n){"pc"===t&&this.setClosedSid();var r=this.tasks.pq;r.push(t,e,n||0)},task:function(t){var e=this.tasks[t];if(!e){var n=m.get(t);if(!n)return void this.flag(8);e=this.tasks[t]=new n}var r=o(arguments,1);e.run(this,r)},remove:function(){for(var t in this.tasks)this.tasks.hasOwnProperty(t)&&this.tasks[t].remove(this)},random:function(){return r()+"."+h(+new Date)},flag:function(t){a.flag(t,this.get("tid"))},wrap:function(t,e,n){return g.wrap(t,e,n,this)},sendError:function(t,e,n,r,o){g.sendError(t,e,n,r,this.get("tid"),this.getCommonQuery(!0),o)}},a.flag(46),d(y.prototype,w),a.flag(47),f(y,c),a.flag(48),t.exports=y},function(t,e,n){var r=n(32),o=n(33),i=n(34),a=n(35),s=n(36),c=n(37),u=n(38),f=n(39),d=n(17),l={tz:(new Date).getTimezoneOffset()/60,hasf:i(),hasadb:a()?1:0,hasc:s()?1:0,hastc:c()?1:0,hasls:u()?1:0,hasss:f()?1:0,hasid:window.indexedDB?1:0},h=n(40),p=n(13),v=function(){};v.prototype.run=function(t){var e=t.get("win"),n=t.get("doc"),i=t.getFullApi("/ping/pv"),a=e.screen,s=a.orientation||a.mozOrientation||a.msOrientation;s&&s.type&&(s=s.type);var c=t.getCommonData(!0);c.add("r",n.referrer),c.add("pt",n.title),c.add("sw",a.width),c.add("sh",a.height),c.add("saw",a.availWidth),c.add("sah",a.availHeight),c.add("scd",a.colorDepth),c.add("so",s),c.add("bw",o(e)),c.add("bh",r(e)),c.extend(l),p.start("req-pv"),d(i,c.toJSON(),{callback:t.wrap("pv-cb",function(e){return e?void t.sendError("req","pv",e.name):(p.end("req-pv"),void t.trigger("pv-done"))},26)})},v.prototype.remove=function(t){},h.set("pv",v),t.exports=v},function(t,e){var n=function(t){t=t||window;var e=t.document,n="BackCompat"===e.compatMode?e.body:e.documentElement;return n.clientHeight};t.exports=n},function(t,e){var n=function(t){t=t||window;var e=t.document,n="BackCompat"===e.compatMode?e.body:e.documentElement;return n.clientWidth};t.exports=n},function(t,e){var n=function(){function t(t){return t=t.match(/[\d]+/g),t.length=3,t.join(".")}var e=!1,n="";if(navigator.plugins&&navigator.plugins.length){var r=navigator.plugins["Shockwave Flash"];r&&(e=!0,r.description&&(n=t(r.description))),navigator.plugins["Shockwave Flash 2.0"]&&(e=!0,n="2.0.0.11")}else if(navigator.mimeTypes&&navigator.mimeTypes.length){var o=navigator.mimeTypes["application/x-shockwave-flash"];e=!!o&&o.enabledPlugin,e&&(n=t(o.enabledPlugin.description))}else try{var i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");e=!0,n=t(i.GetVariable("$version"))}catch(a){try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),e=!0,n="6.0.21"}catch(a){try{var i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");e=!0,n=t(i.GetVariable("$version"))}catch(a){}}}return e?n:""};t.exports=n},function(t,e,n){var r=n(11),o=function(){var t=window,e=t.document,n=e.createElement("div");n.setAttribute("id","ads");var o=!1;try{r(n,t),o=!!e.getElementById("ads")}catch(i){}return o&&n.parentNode&&n.parentNode.removeChild(n),o};t.exports=o},function(t,e,n){var r=n(8),o="S3COOKIENAME"+r(),i=function(){var t="cookie",e=window.document;if(window.navigator.cookieEnabled)return!0;e[t]=o+"=1";var n=-1!==e[t].indexOf(o+"=");return e[t]=o+"=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",n};t.exports=i},function(t,e){var n=function(){var t="DocumentTouch";return!!("ontouchstart"in window||window[t]&&document instanceof window[t])};t.exports=n},function(t,e,n){var r=n(8),o=function(){var t="S3LOCALSTORAGE"+r(),e="localStorage";try{return window[e].setItem(t,1),window[e].removeItem(t),!0}catch(n){return!1}};t.exports=o},function(t,e,n){var r=n(8),o=function(){var t="S3SESSIONSTORAGE"+r(),e="sessionStorage";try{return window[e].setItem(t,1),window[e].removeItem(t),!0}catch(n){return!1}};t.exports=o},function(t,e){var n=function(){this.tasks={}};n.prototype.set=function(t,e){this.tasks[t]=e},n.prototype.get=function(t){return this.tasks[t]},t.exports=new n},function(t,e,n){var r=n(42),o=n(18),i=n(43),a=n(40),s=n(44),c=function(){this.removed=!1};c.prototype.run=function(t){if(!s){var e=t.get("win");i(t.wrap("id-cb",function(){if(this.removed)return void t.flag(20);var n=t.get("ss")+"/da/id.html",i=o({p:t.get("pid"),t:t.get("tid"),c:t.get("cid"),s:t.getSid(),src:t.get("src"),pgv_pvi:t.get("pgv_pvi"),v:t.get("ver"),ts:t.getFullApi("/ping/id")});n+="?"+i,r(n,e)},19),e)}},c.prototype.remove=function(t){this.removed=!0},a.set("id",c),t.exports=c},function(t,e,n){var r=n(11),o=function(t,e){var n=(e||window).document,o=n.createElement("iframe");return o.src=t,o.title="",o.role="presentation",o.frameBorder="0",o.tabIndex="-1",(o.frameElement||o).style.cssText="position:absolute;width:0;height:0;border:0;",r(o,e),o};t.exports=o},function(t,e,n){var r=n(7),o=n(2),i=!1,a=function(t,e){function n(){for(var t=0;t<d.length;t++){var n=d[t];if(n&&n[0]===f){var r=n[1];r(e),d.splice(t,1)}}l=!0}function a(){c.addEventListener?(c.removeEventListener("DOMContentLoaded",s),e.removeEventListener("load",s)):(c.detachEvent("onreadystatechange",s),e.detachEvent("onload",s))}function s(){(c.addEventListener||"load"===e.event.type||"complete"===c.readyState)&&(a(),n())}e=e||window;var c=e.document,u="DOMContentLoaded",f=u+42,d=c[r]=c[r]=[];if(d[d.length]=[f,t,t,u],!i){i=!0;var l=!1;if("complete"===c.readyState||"loading"!==c.readyState&&!c.documentElement.doScroll)o().setTimeout(n);else if(c.addEventListener)c.addEventListener("DOMContentLoaded",s),e.addEventListener("load",s);else{c.attachEvent("onreadystatechange",s),e.attachEvent("onload",s);var h=!1;try{h=null==e.frameElement&&c.documentElement}catch(p){}h&&h.doScroll&&!function v(){if(!l){try{h.doScroll("left")}catch(t){return o().setTimeout(v,50)}a(),n()}}()}}};t.exports=a},function(t,e){var n=window.navigator,r=n.userAgent;t.exports=null!=window.chrome&&"Google Inc."===n.vendor&&/Chrome/.test(r)&&-1===r.indexOf("OPR")&&-1===r.indexOf("Edge")},function(t,e,n){var r=n(40),o=n(6),i=n(9),a=n(46),s=n(47),c=n(48),u=n(33),f=n(32),d=n(49),l=n(50),h=n(51),p=n(37),v=function(){};v.prototype.run=function(t){var e=t.get("win"),n=t.get("doc"),r=n.documentElement;this.cb=t.wrap("clc-cb",function(n){var r=a(n),o=t.getCommonData(),i=r.nodeName.toLowerCase();if(o.add("pw",d(e)),o.add("ph",l(e)),o.add("bw",u(e)),o.add("bh",f(e)),o.add("bx",c(e)),o.add("by",s(e)),o.add("tag",i),r.href){var p=r.getAttribute("target");p&&o.add("target",p),o.add("href",r.href)}o.add("x",n.clientX||0),o.add("y",n.clientY||0);var v,g=0;"a"!==i&&"button"!==i||(v=h(r),g=2),"input"!==i||"button"!==r.type&&"submit"!==r.type||(v=r.value||"",g=2),v&&o.add("word",v.slice(0,20)),t.ping("clc",o,g)});var i=p();i&&t.flag(18),o(r,i?"touchstart":"click",this.cb)},v.prototype.remove=function(t){var e=t.get("doc"),n=e.documentElement;i(n,"click",this.cb),p()&&i(n,"touchstart",this.cb)},r.set("clc",v),t.exports=v},function(t,e){var n=function(t){return t.target||t.srcElement};t.exports=n},function(t,e){var n=function(t){t=t||window;var e=t.document;return t.pageYOffset||e.documentElement.scrollTop||e.body.scrollTop};t.exports=n},function(t,e){var n=function(t){t=t||window;var e=t.document;return t.pageXOffset||e.documentElement.scrollLeft||e.body.scrollLeft};t.exports=n},function(t,e){var n=function(t){t=t||window;var e=t.document,n=e.body,r=e.documentElement,o="BackCompat"===e.compatMode?n:e.documentElement;return Math.max(r.scrollWidth,n.scrollWidth,o.clientWidth)};t.exports=n},function(t,e){var n=function(t){t=t||window;var e=t.document,n=e.body,r=e.documentElement,o="BackCompat"===e.compatMode?n:e.documentElement;return Math.max(r.scrollHeight,n.scrollHeight,o.clientHeight)};t.exports=n},function(t,e){var n=function(t){var e="",r=t.nodeType;if(1===r||9===r||11===r){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)e+=n(t)}else if(3===r||4===r)return t.nodeValue;return e};t.exports=n},function(t,e,n){var r=n(40),o=n(13),i=n(6),a=n(9),s="unload",c=function(){};c.prototype.run=function(t){var e=t.get("win");this.cb=function(){try{var e=t.getCommonData();e.add("spd",o.encode()),t.ping("pc",e,3)}catch(n){throw t.sendError("err","pc-cb",n.name,n.message,!0),n}},i(e,s,this.cb)},c.prototype.remove=function(t){var e=t.get("win");a(e,s,this.cb)},r.set("pc",c),t.exports=c},function(t,e,n){var r=n(54),o=n(24),i=n(13),a=n(22),s=n(40);a.flag(35);var c=n(20);a.flag(36);var u=n(17);a.flag(37);var f=n(21);a.flag(38);var d=n(19);a.flag(39);var l=n(2);a.flag(40);var h=d();a.flag(41);var p=c()&&h?8192:2047;a.flag(42);var v=function(){this.queue=[]};v.prototype.run=function(t){this.stopping=!0,this.tracker=t,this.heartBeatInterval=t.get("hbt"),this.batchApi=t.getFullApi("/ping/b"),2047===p&&this.tracker.flag(27)},v.prototype.start=function(){this.stopping=!1,this.batchSend()},v.prototype.stop=function(){this.stopping=!0},v.prototype.push=function(t,e,n){var o=new r(this.tracker.getFullApi("/ping/"+t),t,e);if(this.stopping)return this.tracker.flag(24),void this._push(o,n);var a=3===n;if(n&&(0===this.queue.length||o.size()>=p)){this.tracker.flag(25);var s=this,c="req-"+t;return i.start(c),void o.ping(a,this.tracker.wrap("pq-ipingcb",function(e){return e?void s.tracker.sendError("req",t,e.name):void i.end(c)}))}this._push(o,n);var u=n&&n>1;u?this.batchSend(a):this.waitForSend()},v.prototype._push=function(t,e){e?this.queue.unshift(t):this.queue.push(t)},v.prototype.waitForSend=function(){var t=this;if(this.queue.length&&!t.heartBeat){var e=this.tracker.wrap("pq-timer",function(){t.heartBeat=null,t.batchSend()});t.heartBeat=l().setTimeout(e,t.heartBeatInterval)}},v.prototype.batchSend=function(t){var e,n,r=[];for(e=0,n=this.queue.length;n>e;e++)r.push(this.queue[e].encode());e=n;var o=this.calQuery(r);if(o){for(;o.length>p&&e>=2;)e--,o=this.calQuery(r,e);if(this.queue.splice(0,e),t)f(this.batchApi,o);else{var a=this,s="req-b";i.start(s),u(this.batchApi,o,{callback:this.tracker.wrap("pq-pingcb",function(t){t&&a.tracker.sendError("req","b",t.name),i.end(s),a.waitForSend()})})}}},v.prototype.calQuery=function(t,e){function n(){for(var e=[],n=0,r=t.length;r>n;n++)e.push(t[n].slice(s));var o=i?"c="+i+"&":"";return o+"l[]="+e.join("&l[]=")+a}null!=e&&(t=t.slice(0,e));var r=t[0];if(!r)return"";var i="",a="&t="+o(+new Date);if(1===t.length)return"l[]="+r+a;for(var s=0,c=r.length;c>s;s++){for(var u,f=null,d=0,l=t.length;l>d;d++){var h=t[d];if(u=h.charAt(s),null!=f&&f!==u)return n();f=u}i+=u}return n()},v.prototype.remove=function(t){this.heartBeat&&(l().clearTimeout(this.heartBeat),this.heartBeat=null)},s.set("pq",v),t.exports=v},function(t,e,n){var r=n(17),o=n(21),i=function(t,e,n){this.api=t,this.pingName=e,this.params=n,n.hasKey("a")||this.params.prefix("a",e);var r=this;this.params.on("change",function(){r._changed=!0})};i.prototype.getQueryData=function(){return this.params},i.prototype.size=function(){var t={a:1};return this.encode(t).length},i.prototype.ping=function(t,e){var n=this.params.filter({a:1});return t?void o(this.api,n):void r(this.api,n,{callback:e})},i.prototype.encode=function(t){if(!t&&null!=this._encodeValue&&!this._changed)return this._encodeValue;var e=this.params.encode(t);return this._changed=!1,t||(this._encodeValue=e),e},t.exports=i},function(t,e,n){var r=n(56),o=n(18),i=n(40),a=n(57),s=n(64),c="_qddamta_",u=function(){this.removed=!1};u.prototype.run=function(t){var e=t.get("noMTA");if(e)return void t.flag(21);var n=c+t.get("tid"),i=t.get("win"),u=s(n,i,null,"/");if(u)return t.flag(22),void this.loadMTA(t,u);var f=t.getCommonData(),d=t.getFullApi("/jsonp/mta")+"?"+o(f.toJSON()),l=this;r(d,t.wrap("mta-cb",function(e,r){if(e)return void t.flag(23);var o=36e5;return r&&r.sid?(a(n,r.sid,i,o,null,"/"),void l.loadMTA(t,r.sid)):void a(n,"0",i,o,null,"/")}))},u.prototype.loadMTA=function(t,e){if(e&&"0"!==e){var n,r=t.get("doc"),o=r.createElement("script"),i=r.getElementsByTagName("script"),a=i[i.length-1];o.setAttribute("sid",e),o.setAttribute("name","MTAH5"),o.src=t.get("ptc")+"//pingjs.qq.com/h5/stats.js",a&&a.parentNode?a.parentNode.insertBefore(o,a):(n=r.getElementsByTagName("head")[0])&&n.appendChild(o)}},u.prototype.remove=function(t){this.removed=!0},i.set("mta",u),t.exports=u},function(t,e,n){var r=n(8),o=n(29),i=n(14),a=n(2),s=function(t,e,n,r,o){if(t.setAttribute("type","text/javascript"),r&&t.setAttribute("charset",r),t.setAttribute("src",e),o)return void o.insertBefore(t,o.firstChild);var i=n.getElementsByTagName("script"),a=i[i.length-1];if(a)a.parentNode.insertBefore(t,a);else{var s=n.getElementsByTagName("head")[0];s.insertBefore(t,s.firstChild)}},c=function(t,e,n,c,u,f){var d=u?u.ownerDocument:document,l=d.defaultView||d.parentWindow,h=d.createElement("SCRIPT"),p="S3JSONPPREFIX";f=f||"callback",n=n||1e4;var v,g,m=new RegExp("(?:\\?|&)"+f+"=([^&]*)"),w=function(t){return function(){try{if(t){var n=new Error;n.name="Timeout",e.call(l,n)}else{var r=o(arguments);r.unshift(null),e.apply(l,r),a().clearTimeout(v)}l[g]=null,delete l[g]}catch(n){i(n)}finally{h&&h.parentNode&&h.parentNode.removeChild(h)}}},y=t.match(m);g=y?y[1]:p+r(),l[g]=w(!1),n&&(v=a().setTimeout(w(!0),n)),y||(t+=(t.indexOf("?")<0?"?":"&")+f+"="+g),s(h,t,d,c,u)};t.exports=c},function(t,e,n){var r=n(58),o=n(61),i=function(t,e,n,i,a,s){var c=r(n,a,s);return e+="",o(t,c+e.replace(/\-/g,"%2d"),n,i,a,s)};t.exports=i},function(t,e,n){var r=n(59),o=n(60),i=function(t,e,n){t=t||window;var i=t.location,a=o(null!=n?n:i.pathname),s=r(null!=e?e:i.hostname);return s+(a>1?"-"+a:"")+"-"};t.exports=i},function(t,e){var n=function(t){return 0===t.indexOf(".")?t.substr(1):t},r=function(t){return n(t).split(".").length};t.exports=r},function(t,e){var n=function(t){return t?(t.length>1&&t.lastIndexOf("/")===t.length-1&&(t=t.substr(0,t.length-1)),0!==t.indexOf("/")&&(t="/"+t),t):"/"},r=function(t){return t=n(t),"/"===t?1:t.split("/").length};t.exports=r},function(t,e,n){var r=n(62),o=n(2),i=function(t,e,n,i,a,s){n=n||window,e=o().encodeURIComponent(e);var c=t+"="+e+"; ";if(null!=s&&(c+="path="+s+"; "),null!=i){var u=new Date;u.setTime(u.getTime()+i),c+="expires="+u.toGMTString()+"; "}null!=a&&(c+="domain="+a+";");var f=n.document,d=f.cookie;if(f.cookie=c,d===f.cookie){for(var l=r(t),h=0;h<l.length;h++)if(e===l[h])return!0;return!1}return!0};t.exports=i},function(t,e,n){var r=n(63),o=n(2),i=function(t,e){e=e||window;for(var n=[],i=e.document.cookie.split(";"),a=new RegExp("^\\s*"+r(t)+"=\\s*(.*?)\\s*$"),s=0;s<i.length;s++){var c=i[s].match(a);c&&(n[n.length]=o().decodeURIComponent(c[1]))}return n};t.exports=i},function(t,e){var n=function(t){return String(t).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\-])","g"),"\\$1")};t.exports=n},function(t,e,n){var r=n(58),o=n(62),i=function(t,e,n,i){for(var a=o(t,e),s=r(e,n,i),c=0;c<a.length;c++){var u=a[c];if(0===u.indexOf(s))return u.slice(s.length).replace(/%2d/g,"-")}return""};t.exports=i},function(t,e){var n=function(t){var e=1;if(t){var n=0;e=0;for(var r=t.length-1;r>=0;r--)n=t.charCodeAt(r),e=(e<<6&268435455)+n+(n<<14),n=266338304&e,e=0!=n?e^n>>21:e}return e};t.exports=n},function(t,e,n){var r=n(67),o=n(68),i=function(){this.vals={},r.apply(this,arguments)};o(i,r),i.prototype.set=function(t,e){if("string"==typeof t){var n=this.vals[t];n!==e&&(this.vals[t]=e,this.trigger("change",t,e,n))}else{var r=t;for(var o in r)r.hasOwnProperty(o)&&this.set(o,r[o])}},i.prototype.get=function(t){return this.vals[t]||""},i.prototype.map=function(t){for(var e in this.vals)if(this.vals.hasOwnProperty(e)){var n=this.vals[e];n&&t(e,n)}},t.exports=i},function(t,e,n){var r=n(29),o="_EVENTS",i=function(){};i.prototype.on=function(t,e){var n=this[o];n||(n=this[o]={});var r=n[t]=n[t]||[];r.push(e)},i.prototype.off=function(t,e){if(!t)return void(this[o]={});var n=this[o];if(n&&n[t]){if(!e)return void(n[t].length=0);for(var r=n[t],i=0;i<r.length;i++)r[i]===e&&(r[i]=null)}},i.prototype.trigger=function(t){var e=r(arguments),n=this[o];if(t=e.shift(),n&&n[t])for(var i=n[t],a=0;a<i.length;a++)i[a]&&i[a].apply(this,e)},t.exports=i},function(t,e){var n=function(t,e){var n=t.prototype,r=function(){};r.prototype=e.prototype;var o=t.prototype=new r;for(var i in n)n.hasOwnProperty(i)&&(o[i]=n[i]);t.prototype.constructor=t,t.superClass=e.prototype};t.exports=n},function(t,e,n){var r=n(66);t.exports=new r},function(t,e,n){var r=n(71),o=function(t,e,n){function o(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}function i(t,e){for(var n in e)e.hasOwnProperty(n)&&(r(e[n])?(t[n]=t[n]||{},i(t[n],e[n])):t[n]=e[n])}var a=o;return"boolean"!=typeof t&&(n=e,e=t,a=i),a(e,n),e};t.exports=o},function(t,e,n){var r=n(16);t.exports=function(t){return t&&"object"===r(t)&&!t.nodeType&&t!==t.window}},function(t,e,n){var r=n(16),o=n(2),i=n(67),a=n(68),s=function(){this.json=[],this.suffixJSON=[],this._prefixLength=0};a(s,i),s.prototype.prefix=function(t,e){this._add(t,e,this._prefixLength),this._prefixLength++},s.prototype.add=function(t,e){this._add(t,e)},s.prototype._add=function(t,e,n){var r={key:t,value:e};null!=n?this.json.splice(n,0,r):this.json.push(r),this.trigger("change")},s.prototype.suffix=function(t,e){var n={key:t,value:e};this.suffixJSON.push(n),this.trigger("change")},s.prototype.hasKey=function(t){for(var e=0,n=this.json.length;n>e;e++)if(this.json[e].key===t)return!0;return!1},s.prototype.extend=function(t){for(var e in t)t.hasOwnProperty(e)&&null!=t[e]&&this.json.push({key:e,value:t[e]});this.trigger("change")},s.prototype.toJSON=function(){return this.json.concat(this.suffixJSON)},s.prototype.filter=function(t){var e,n,r,o=this.json,i=[];for(e=0,n=o.length;n>e;e++)r=o[e],t[r.key]||i.push(r);var a=this.suffixJSON;for(e=0,n=a.length;n>e;e++)r=a[e],t[r.key]||i.push(r);return i},s.prototype.size=function(t){return this.encode(t).length},s.prototype.encode=function(t){var e=this.toJSON();return s.encode(e,t)},s.encode=function(t,e){if(!t||!t.length)return"";var n=[],o=/\[\]$/,i=function(t,e){e="function"==typeof e?e():null==e?"":e,n[n.length]=s.encodeValue(t)+"("+s.encodeValue(e)+")"},a=function(t,s){var c,u,f;switch(r(s)){case"array":if(t)for(c=0,u=s.length;u>c;c++)if(o.test(t))i(t,s[c]);else{var d="object"===r(s[c])?c:"";a(t+"["+d+"]",s[c])}else for(c=0,u=s.length;u>c;c++)f=s[c].key,e&&e[f]||a(f,s[c].value);break;case"object":for(f in s)s.hasOwnProperty(f)&&a(t?t+"["+f+"]":f,s[f]);break;default:s=""+s,t?i(t,s):n[n.length]=s}return n};return a("",t).join("").replace(/%20/g,"+")},s.encodeValue=function(t){return o().encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")},t.exports=s},function(t,e,n){var r=n(64),o=n(57),i=n(74),a=n(75),s=n(36),c=n(65),u=n(69),f=n(24),d={createSid:function(){this._hasCookie=s(),this._hasCookie||this.flag(9),this._sidExpiredTime=0;var t=u.get("sid");if(t)return this.flag(10),void this.set("sid",t);var e=this.get("win"),n=i(e.location.search,"ADTAG"),o=f(c(n)),d=this.get("doc").referrer,l=f(c(d));if(!this._hasCookie)return void this.recreateSid(o,l);var h=this.getCookieSid(),p=h[0],v=h[1];if(!p||!v)return this.flag(11),void this.recreateSid(o,l);var g;if(p&&v){var m=p.split("."),w=m[0],y=m[1];g=n&&w!==o||d&&y!==l&&!a(d,e.location.href)}if(!g)return this.flag(12),void this._saveSid(p,v);var x=r("_qddac",e,null,null),b=x.split(".");return b[0]===o&&b[1]===l?(this.flag(13),void this._saveSid(b[0]+"."+b[1],b[2]+"."+b[3])):void this.recreateSid(o,l)},recreateSid:function(t,e){t=t||f(c(i(this.get("win").location.search,"ADTAG"))),e=e||f(c(this.get("doc").referrer));var n=t+"."+e,r=this.random();this._saveSid(n,r)},refreshCookie:function(){
if(!this._hasCookie){var t=+new Date,e=this._sidExpiredTime;return void(t>=e&&(this.flag(14),this.recreateSid()))}var n=this.getCookieSid(),r=n[0],o=n[1];if(r&&o){var i=this.get("sid");if(i[0]!==r||i[1]!==o)return void this.flag(15);this._setSidCookie()}else this.recreateSid()},_setSidCookie:function(){var t=18e5,e=+new Date,n=new Date;if(n.setHours(23),n.setMinutes(59),n.setSeconds(59),n.setMilliseconds(999),n=+n,this._hasCookie){var r=this.get("win"),i=this.get("sid"),a=o("_qdda",i[0],r,Math.min(t,n-e),null,"/");a&=o("_qddab",i[1],r,null,null,"/"),this._hasCookie=a}this._hasCookie||(this._sidExpiredTime=Math.min(e+t,n))},_saveSid:function(t,e){this._setGlobal("sid",[t,e]),this._setSidCookie()},_getSid:function(){var t=this.get("sid");return t?t.join("."):""},getSid:function(t){return t||this.refreshCookie(),this._getSid()},getCookieSid:function(){var t=this.get("win"),e=r("_qdda",t,null,"/"),n=r("_qddab",t,null,"/");return[e,n]},setClosedSid:function(){if(this._hasCookie){var t=this.getCookieSid(),e=t[0],n=t[1];if(e&&n){var r=this.get("win"),i=this._getSid();o("_qddac",i,r,Math.max(this._getLoadedTime()+5e3,1e4),null,null)}}},_getLoadedTime:function(){var t=this.get("win"),e=t.performance||t.webkitPerformance,n=e&&e.timing;if(!n)return 0;var r=n.navigationStart;return 0===r?0:n.loadEventStart-r}};t.exports=d},function(t,e,n){var r=n(63),o=n(2),i=function(t,e){var n=new RegExp("(^|&|\\?|#)"+r(e)+"=([^&#]*)(&|$|#)",""),i=t.match(n);return i&&i[2]?o().decodeURIComponent(i[2]):""};t.exports=i},function(t,e,n){var r=n(76),o=function(t,e){return r(t)===r(e)};t.exports=o},function(t,e){var n=/[^:]+:\/\/([^:\/]+)/,r=function(t){var e=t.match(n);return e?e[1]:""};t.exports=r}]);