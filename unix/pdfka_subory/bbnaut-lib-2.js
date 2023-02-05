/*!
 * BBnaut v2.1.2
 * 2018-06-21
 * Internet Billboard a.s.
 * miza
 */
!function(a,b,c,d,e){function f(a,b){function d(a,c,d){var e=this;e.invalidate=function(){a=g},e.isInvalidated=function(){return a===g},e.bn036=function(){return c},e.getExpires=function(){return new b.time(d)},e.setExpires=function(a){d=a.roundToMidnight().getTime()},e.toString=function(){return"BBID-"+a+"-"+b.bn030(c,17)+"-"+b.bn030(d,8)}}var e=/BBID-([\d]{2})-([\d]{17})-?(\d{8})?/,f="01",g="10",h=b.date(2018,4,25).addDays(90).roundToMidnight().getTime();return d.parse=function(a){var b=e.exec(a);return b?new d(b[1]===g?g:f,c(b[2],10),b[3]?1e5*c(b[3],10):h):null},d}var g,h,i,j,k,l,m,n,o=function(a){var b=a.location.protocol+"//",c="ibillboard.com";return{bn002:b+"bbcdn-bbnaut."+c,bn003:b+"bbcdn-bbnaut."+c+"/server-static-files",bn004:b+"bbnaut."+c,bn005:b+"bbnaut."+c,SECONDARY_BBCOOKIE_SERVERS:[b+"bbnaut.bbelements.com",b+"bbnaut.m6r.eu"],bn006:"ibbid",bn007:"BBID-00-00000000000000000",bn008:"bbnaut_debug",OBSOLETE_TIMESTAMP:47e13,bn009:"bbnaut-co",FRAME_SECONDARY_COOKIE:"bbnaut-co-sec",bn010:"bbnaut-ca",bn011:"bbnaut-et",LOCK_SYNC_KEY:"bblosync",bn013:0,bn014:1,bn015:"BBNaut Id is in improper format",bn051:6048e5,bn052:"bblpasync",bn053:[],SDGRT_ADEX_TAG_PATH:"/tag/SdgRtAdex/value/"}},p=function(a,b){return{createElem:function(a,c,d){var e;return e="undefined"!=typeof c&&b.getElementById(c)?b.getElementById(c):b.createElement(a),e.style.width="0px",e.style.height="0px",e.style.position="absolute",e.style.left="-200px",e.style.top="-500px",c&&e.setAttribute("id",c),d&&b.body.appendChild(e),e},bn017:function(c){function f(){k||(k=!0,c&&c.call(a,[]))}function g(b){var c=a.onload;"function"!=typeof a.onload?a.onload=b:a.onload=function(){c&&c(),b()}}if("complete"===b.readyState)return void c.call(a,[]);var h=e.userAgent.toLowerCase(),i={version:(h.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(h),opera:/opera/.test(h),msie:/msie/.test(h)&&!/opera/.test(h),mozilla:/mozilla/.test(h)&&!/(compatible|webkit)/.test(h)},j=!1,k=!1;!function(){if(!j){if(j=!0,b.addEventListener&&!i.opera&&b.addEventListener("DOMContentLoaded",f,!1),i.msie&&a==top&&function(){if(!k){try{b.documentElement.doScroll("left")}catch(a){return void d(arguments.callee,0)}f()}}(),i.opera&&b.addEventListener("DOMContentLoaded",function(){if(!k){for(var a=0;a<b.styleSheets.length;a++)if(b.styleSheets[a].disabled)return void d(arguments.callee,0);f()}},!1),i.safari){var c;!function(){if(!k){if("loaded"!=b.readyState&&"complete"!=b.readyState)return void d(arguments.callee,0);if(void 0===c){for(var a=b.getElementsByTagName("link"),e=0;e<a.length;e++)"stylesheet"==a[e].getAttribute("rel")&&c++;var g=b.getElementsByTagName("style");c+=g.length}return b.styleSheets.length!=c?void d(arguments.callee,0):void f()}}()}g(f)}}()},bn018:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},isBrowserChrome:function(){return a.navigator.userAgent.indexOf("Chrome")>=0},isBrowserOpera:function(){return a.navigator.userAgent.indexOf("Opera")>=0},isBrowserSafari:function(){return a.navigator.userAgent.indexOf("Safari")>=0&&a.navigator.userAgent.indexOf("Chrome")<0},bn021:function(){return a.location.protocol.indexOf("https:")>=0},bn022:function(){return"yes"===a.navigator.doNotTrack},bn023:function(a){return"string"==typeof a},bn023Suffix:function(a,b){return-1!==a.indexOf(b,this.length-b.length)},bn024:function(a,b){var c;for(var d in b)b.hasOwnProperty(d)&&(c=b[d],this.bn023(c)&&b.hasOwnProperty(c)&&(c=b[c]),a.prototype[d]=c)},bn025:function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},bn026:function(a,b){for(var c in a)a.hasOwnProperty(c)&&b(a[c],c)},bn027:function(a,b,c){var d,e;for(d=0;d<b.length;++d)e=b[d],a.hasOwnProperty(e)&&c(a[e],e)},bn028:function(a){return Math.floor(Math.random()*a)},bn029:function(a,b,c){return c=String(c),a.substr(0,b)+c+a.substr(b+c.length)},bn030:function(a,b){for(var c=a.toString();c.length<b;)c="0"+c;return c.length>b&&(c=c.substr(0,b)),c},bn031:function(a,b){if("string"==typeof b)for(var c=a+"=",d=b.split(/[;&]/),e=0;e<d.length;e++){for(var f=d[e];" "==f.charAt(0);)f=f.substring(1,f.length);if(0==f.indexOf(c))return f.substring(c.length,f.length)}},bn032:function(b){a.console&&a.console.info(b)},setCookie:function(a,c,d){var e=a+"="+c;d&&(e+="; expires="+d+d.toGMTString()),b.cookie=e},getCookie:function(a){return this.bn031(a,b.cookie)},time:function(a){var b=this,c=new Date(a);b.addDays=function(a){return c.setDate(c.getDate()+a),b},b.roundToMidnight=function(){return c.setHours(0,0,0,0),b},b.isInFuture=function(){return c.getTime()>(new Date).getTime()},b.getTime=function(){return c.getTime()}},date:function(a,b,c){return new this.time(new Date(a,b,c).getTime())},now:function(){return new this.time(new Date)},deferred:function(){var a=this,b=[],c=function(a){b.push(a)};a.promise=function(){return{then:c}},a.resolve=function(a){function d(b){b(a)}c=d,b.forEach(d),b=null}}}},q=function(a,b,c){var d={bn044:function(){var b=!1;if("undefined"!=typeof ActiveXObject)try{b=new ActiveXObject("Msxml2.XMLHTTP")}catch(c){try{b=new ActiveXObject("Microsoft.XMLHTTP")}catch(d){b=!1}}else if(a.XMLHttpRequest)try{b=new a.XMLHttpRequest}catch(c){b=!1}return b},load:function(a,b,c,d){var e=this.init();if(e&&a){if(e.overrideMimeType&&e.overrideMimeType("text/xml"),!d)var d="text";d=d.toLowerCase();var f="uid="+(new Date).getTime();a+=a.indexOf("?")+1?"&":"?",a+=f,e.open("GET",a,!0),e.onreadystatechange=function(){if(4==e.readyState)if(200==e.status){var a="";e.responseText&&(a=e.responseText),b&&b(a)}else c&&c(e.status)},e.send(null)}},init:function(){return this.bn044()}};return{bn046:function(a,b){d.load(a,b)},bn047:function(a){var c=b.createElement("script");c.type="text/javascript",c.src=a,b.body.appendChild(c)},bn048:function(a,b){var d=c.createElem("iframe",b,1);return d.setAttribute("src",a),d},bn055:function(a){(new Image).src=a}}},r=function(a,b,c,d,e,f){function g(b,c,e,f,i){f="undefined"==typeof f?0:f+1,0==f&&("undefined"==typeof e&&(v={},t=!1,k(b,e),r(b,e),v.cookieData=o(b,e),v.localData=p(b,e),v.sessionData=q(b,e),v.windowData=j(b,e)),"undefined"!=typeof e&&((t&&v.cacheData!==e.toString()||!i)&&m(b,e),(t&&v.etagData!==e.toString()||!i)&&n(b,e),l(b,e),v.bbCookieData!==e.toString()&&k(b,e),v.dbData!==e.toString()&&r(b,e),v.cookieData!==e.toString()&&o(b,e),v.localData!==e.toString()&&p(b,e),v.sessionData!==e.toString()&&q(b,e),v.windowData!==e.toString()&&j(b,e))),null==e&&((a.openDatabase&&null==v.dbData||null==v.bbCookieData||t&&(null==v.etagData||null==v.cacheData))&&u>f?a.setTimeout(function(){g(b,c,e,f,i)},200):t||d.bn021()||void 0!=v.localData&&v.localData===v.bbCookieData&&0!==d.bn028(10)?"function"==typeof c&&c(h()):(m(b),n(b),t=!0,u+=10,a.setTimeout(function(){g(b,c,e,f,i)},300)))}function h(){return Object.values(v).map(function(a){return f.parse(a)}).filter(function(a){return!!a})}function i(a){e.bn047(c.bn005+"/initidmatch"+(a?"?force=1":""))}function j(b,c){try{if("undefined"==typeof c)return d.bn031(b,a.name);a.name=b+"="+c.toString()}catch(e){}}function k(a,b){try{"undefined"!=typeof b?e.bn048(c.bn005+"/s/co/"+b.toString(),c.bn009):(v.bbCookieData=null,e.bn047(c.bn005+"/g/co"))}catch(d){}}function l(a,b){try{if("undefined"!=typeof b)for(var d=0,f=c.SECONDARY_BBCOOKIE_SERVERS.length;f>d;d++)e.bn048(c.SECONDARY_BBCOOKIE_SERVERS[d]+"/s/co/"+b.toString(),c.FRAME_SECONDARY_COOKIE+d)}catch(g){}}function m(a,b){if(!d.isBrowserOpera())try{"undefined"!=typeof b?e.bn048(c.bn005+"/s/ca2/"+b.toString(),c.bn010):(v.cacheData=null,e.bn048(c.bn005+"/g/ca2",c.bn010))}catch(f){}}function n(a,b){try{"undefined"!=typeof b?e.bn048(c.bn005+"/s/et2/"+b.toString(),c.bn011):(v.etagData=null,e.bn048(c.bn005+"/g/et2",c.bn011))}catch(d){}}function o(a,c){try{if("undefined"==typeof c)return d.bn031(a,b.cookie);b.cookie=a+"=; expires=Thu, 2 Aug 2001 12:00:00 UTC; path=/",b.cookie=a+"="+c.toString()+"; expires="+new Date(c.getExpires())+"; path=/"}catch(e){}}function p(b,c){try{if(a.localStorage){if("undefined"==typeof c)return a.localStorage.getItem(b);a.localStorage.setItem(b,c.toString())}}catch(d){}}function q(b,c){try{if(a.sessionStorage){if("undefined"==typeof c)return a.sessionStorage.getItem(b);a.sessionStorage.setItem(b,c.toString())}}catch(d){}}function r(b,c){if(!d.isBrowserSafari())try{if(a.openDatabase){var e=a.openDatabase("sqlite_bbnaut","","bbnaut",1048576);"undefined"!=typeof c?e.transaction(function(a){a.executeSql("CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))",[],function(a,b){},function(a,b){}),a.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)",[b,c.toString()],function(a,b){},function(a,b){})}):e.transaction(function(a){a.executeSql("SELECT value FROM cache WHERE name=?",[b],function(a,b){b.rows.length>=1?v.dbData=b.rows.item(0).value:v.dbData=""},function(a,b){})})}}catch(f){}}function s(){if(!a.bbnautLib.multipleRun){var e=(new Date).getTime(),f=d.bn031(c.LOCK_SYNC_KEY,b.cookie);if(f&&!isNaN(f)&&12e4>e-f)return!0}return b.cookie=c.LOCK_SYNC_KEY+"="+e,!1}var t=!1,u=10,v={};d.bn018(a,"message",function(a){var b;if(a.origin===c.bn002||a.origin===c.bn004)try{switch(b=a.data.split("="),b[0]){case"ca":v.cacheData=b[1];break;case"et":v.etagData=b[1]}}catch(d){}});return{get:function(a,b){s()||(g(a,b,void 0,void 0),0===d.bn028(3)?i():i("force"))},set:function(a,b,c){g(a,function(){},b,void 0,c)},bn049:function(a,b){v[a]=b}}},s=function(a,b,c,d,e,f,g,h){function i(a,b){function c(){return!a.isInvalidated()&&!b.isInvalidated()}function d(){return a.isInvalidated()&&b.isInvalidated()}function e(){return a.isInvalidated()?a:b}function f(){return a.bn036()<b.bn036()?a:b}function g(){return a.bn036()>b.bn036()?a:b}return a?c()?f():d()?g():e():b}function j(a){return a.filter(function(a){return a.getExpires().isInFuture()}).reduce(i,null)}function k(){q.setExpires(c.now().addDays(90)),r.resolve(q),e.set(b.bn006,q,!0),g.bn054(q.bn036())}function l(a){r=new c.deferred,d.bn047(b.bn005+"/g/njs/"+a)}function m(a){q=f.parse(a),q&&k()}function n(b){q=j(b),q?k():l(o),h&&"function"==typeof h.bn056&&h.bn056(a.bbnautLib.prtos)}var o="01",p="10",q=null,r=new c.deferred;return a.bbnautLib=a.bbnautLib||{},a.bbnautLib.get=function(){return r.promise()},a.bbnautLib.reset=function(){return l(p),this.get()},a.bbnautLib.jsonp=function(a,b){switch(a){case"newBBID":m(b);break;default:e.bn049(a,b)}},{init:function(){e.get(b.bn006,n)}}},t=function(a,b,c,d,e){function f(){var b=(new a.Date).getTime(),e=d.getCookie(c.bn052);return!e||isNaN(e)||b-e>c.bn051?(d.setCookie(c.bn052,b,new a.Date(b+c.bn051)),!0):!1}return{bn054:function(b){f()&&d.bn026(c.bn053,function(c){e.bn055(a.location.protocol+"//"+c.replace(/\[ibbid\]/gi,b))})}}},u=function(a,b,c,d){function e(a){function c(a){return a&&Array.isArray(a["segment-ids"])&&a["segment-ids"].length>0}if(c(a)){var e=a["segment-ids"].toString().replace(/,/g,"-");d.bn055(b.bn005+b.SDGRT_ADEX_TAG_PATH+e)}}return a.bbnautLib=a.bbnautLib||{},c.bn025(a.bbnautLib,{bn057:function(a){e(a)}}),{bn056:function(a){c.bn026(a,e)}}};g=o(a),h=p(a,b),i=q(a,b,h),k=f(g,h),j=r(a,b,g,h,i,k),l=t(a,b,g,h,i),n=u(a,g,h,i),m=s(a,g,h,i,j,k,l,n),h.bn017(function(){m.init()})}(window,document,parseInt,setTimeout,navigator);