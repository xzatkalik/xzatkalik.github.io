(function(_){var ba,ha,la,ma,ra,sa,xa,Aa,z,Oa,Sa,Ua,Va,Xa,db,jb,lb,ob,pb,sb,tb,ub,xb,Ab,Cb,Db,Eb,Fb,Ib,Mb,Nb,Ob,Pb,Qb,Sb,Rb,Tb,Vb,Ub,Wb,Xb,Yb,Zb,bc,dc,gc,ic,hc,lc,qc,sc,tc,uc,vc,xc,yc,Bc,Cc,Ac,zc,Dc,Hc,Jc,Kc,Lc,Nc,Oc,Sc,Qc,Tc,Xc,Zc,Yc,ad,bd,cd,fd,id,jd,md,nd,pd,qd,rd,td,ea,ud,fa;ba=function(a){return function(){return _.aa[a].apply(this,arguments)}};_.ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};_.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:_.ca(a)}};ha=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype};la=function(a,b){if(b){var c=_.ia;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&(0,_.ka)(c,a,{configurable:!0,writable:!0,value:b})}};ma=function(a,b){this.b=a;(0,_.ka)(this,"description",{configurable:!0,writable:!0,value:b})};_.m=function(a){return void 0!==a};_.q=function(a){return"string"==typeof a};_.u=function(a,b,c){a=a.split(".");c=c||_.t;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&_.m(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};_.na=function(){};_.oa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.pa=function(a){return"array"==_.oa(a)};_.qa=function(a){return"function"==_.oa(a)};ra=function(a,b,c){return a.call.apply(a.bind,arguments)};sa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};_.w=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.w=ra:_.w=sa;return _.w.apply(null,arguments)};_.ta=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};_.x=function(a,b){function c(){}c.prototype=b.prototype;a.V=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oc=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};_.va=function(a,b){b=(0,_.ua)(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c};_.wa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};xa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};Aa=function(a,b){this.l=a===ya&&b||"";this.v=za};_.Ba=function(a){return a instanceof Aa&&a.constructor===Aa&&a.v===za?a.l:"type_error:Const"};_.Ca=function(a){return new Aa(ya,a)};_.Ea=function(){this.l="";this.v=Da};_.Fa=function(a){if(a instanceof _.Ea&&a.constructor===_.Ea&&a.v===Da)return a.l;_.oa(a);return"type_error:TrustedResourceUrl"};_.Ga=function(a){var b=new _.Ea;b.l=a;return b};_.y=function(){this.l="";this.v=Ha};_.Ia=function(a){if(a instanceof _.y&&a.constructor===_.y&&a.v===Ha)return a.l;_.oa(a);return"type_error:SafeUrl"};_.La=function(a){if(a instanceof _.y)return a;a="object"==typeof a&&a.g?a.b():String(a);Ja.test(a)||(a="about:invalid#zClosurez");return _.Ka(a)};_.Ka=function(a){var b=new _.y;b.l=a;return b};z=function(a){return-1!=Ma.indexOf(a)};Oa=function(){this.l="";this.v=Na};_.Pa=function(a){if(a instanceof Oa&&a.constructor===Oa&&a.v===Na)return a.l;_.oa(a);return"type_error:SafeHtml"};_.Qa=function(a){var b=new Oa;b.l=a;return b};Sa=function(a){var b=_.Ga(_.Ba(Ra));a.src=_.Fa(b).toString()};_.Ta=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,_.A)()).toString(36)};Ua=function(){return z("iPhone")&&!z("iPod")&&!z("iPad")};Va=function(a){Va[" "](a);return a};_.Wa=function(a,b){try{return Va(a[b]),!0}catch(c){}return!1};Xa=function(){var a=_.t.document;return a?a.documentMode:void 0};_.B=function(){};_.C=function(a,b,c){a.b=null;b||(b=[]);a.C=void 0;a.v=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(!(null===d||"object"!=typeof d||_.pa(d)||Ya&&d instanceof Uint8Array)){a.A=b-a.v;a.l=d;break a}}a.A=Number.MAX_VALUE}a.B={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.A)d+=a.v,a.g[d]=a.g[d]||Za;else{var e=a.A+a.v;a.g[e]||(a.l=a.g[e]={});a.l[d]=a.l[d]||Za}};_.$a=function(a,b){if(b<a.A){b+=a.v;var c=a.g[b];return c===Za?a.g[b]=[]:c}if(a.l)return c=a.l[b],c===Za?a.l[b]=[]:c};_.E=function(a,b,c){a=_.$a(a,b);return null==a?c:a};_.F=function(a,b){a=_.$a(a,b);a=null==a?a:!!a;return null==a?!1:a};_.I=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=_.$a(a,c);d&&(a.b[c]=new b(d))}return a.b[c]};_.ab=function(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var d=_.$a(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.b[c]=e}b=a.b[c];b==Za&&(b=a.b[c]=[]);return b};_.bb=function(a){if(a.b)for(var b in a.b){var c=a.b[b];if(_.pa(c))for(var d=0;d<c.length;d++)c[d]&&_.bb(c[d]);else c&&_.bb(c)}return a.g};db=function(a){_.C(this,a,cb)};_.eb=function(a){_.C(this,a,null)};_.fb=function(a){_.C(this,a,null)};_.ib=function(a){_.C(this,a,gb)};jb=function(a){_.C(this,a,null)};_.kb=function(a){_.C(this,a,null)};lb=function(a){return _.ab(a,_.ib,1)};_.nb=function(a,b){this.b=_.m(a)?a:0;this.g=_.m(b)?b:0};ob=function(a){try{return!!a&&null!=a.location.href&&_.Wa(a,"foo")}catch(b){return!1}};pb=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};_.qb=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb=function(a){return a?a.passive&&rb()?a:a.capture||!1:!1};_.J=function(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,sb(d))};tb=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,sb(void 0))};_.vb=function(a,b,c){ub(a,b,void 0===c?null:c)};ub=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(f){c&&c(f);tb(d,"load",e);tb(d,"error",e)};_.J(d,"load",e);_.J(d,"error",e)}d.src=b;a.google_image_requests.push(d)};_.wb=function(a,b){"about:invalid#zClosurez"===(a instanceof _.y?a:_.La(a)).b()&&b(String(a))};xb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};_.zb=function(a,b,c,d,e,f,g){if(!g)a:{if(1===a.nodeType)try{if(1==a.nodeType){c:{try{var h=a.getBoundingClientRect()}catch(r){var l={left:0,top:0,right:0,bottom:0};break c}if(_.yb&&a.ownerDocument.body){var n=a.ownerDocument;h.left-=n.documentElement.clientLeft+n.body.clientLeft;h.top-=n.documentElement.clientTop+n.body.clientTop}l=h}g=new _.nb(l.left,l.top)}else{var p=a.changedTouches?a.changedTouches[0]:a;g=new _.nb(p.clientX,p.clientY)}break a}catch(r){}g=new _.nb(0,0)}if(document.createEvent)l=document.createEvent("MouseEvents"),l.initMouseEvent("click",!0,!0,null,0,g.b,g.g,g.b,g.g,c,f,d,e,b,null);else return!1;if(a.dispatchEvent)a.dispatchEvent(l);else return!1;return!0};Ab=function(){var a=void 0===a?_.K:a;return"http:"===a.location.protocol};_.Bb=function(a,b,c){c=void 0===c?_.L:c;switch(a){case 2:return c.getElementsByClassName(b);case 3:return c.getElementsByTagName(b)}return[]};_.M=function(a,b,c){c=void 0===c?_.L:c;switch(a){case 1:if(c.getElementById)return c.getElementById(b);break;case 2:case 3:if(a=_.Bb(a,b,c),0<a.length)return a[0]}return null};Cb=function(a,b){a&&xb(b,function(c,d){a.style[d]=c})};Db=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};Eb=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};Fb=function(a,b){return b?a?a+"&"+b:b:a};_.Gb=function(a,b){if(!b)return a;a=Eb(a);a[1]=Fb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]};_.Hb=function(a,b,c){if(_.pa(b))for(var d=0;d<b.length;d++)_.Hb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};Ib=function(a){var b=[],c;for(c in a)_.Hb(c,a[c],b);return b.join("&")};_.Jb=function(a,b){b=Ib(b);return _.Gb(a,b)};_.Kb=function(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return _.Gb(a,b+c)};Mb=function(a,b){a=Eb(a);var c=a[1],d=[];c&&(0,_.Lb)(c.split("&"),function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});a[1]=Fb(d.join("&"),Ib(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};Nb=function(a,b){this.b=a;this.g=b};Ob=function(a,b){this.url=a;this.La=!!b;this.depth=null};Pb=function(){this.l="&";this.v=_.m(void 0)?void 0:"trn";this.A=!1;this.g={};this.B=0;this.b=[]};Qb=function(a,b){var c={};c[a]=b;return[c]};Sb=function(a,b,c,d,e){var f=[];pb(a,function(g,h){(g=Rb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)};Rb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Rb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Sb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};Tb=function(a,b,c,d){a.b.push(b);a.g[b]=Qb(c,d)};Vb=function(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=Ub(a)-c.length;if(0>d)return"";a.b.sort(function(p,r){return p-r});c=null;for(var e="",f=0;f<a.b.length;f++)for(var g=a.b[f],h=a.g[g],l=0;l<h.length;l++){if(!d){c=null==c?g:c;break}var n=Sb(h[l],a.l,",$");if(n){n=e+n;if(d>=n.length){d-=n.length;b+=n;e=a.l;break}else a.A&&(e=d,n[e-1]==a.l&&--e,b+=n.substr(0,e),e=a.l,d=0);c=null==c?g:c}}f="";a.v&&null!=c&&(f=e+a.v+"="+c);return b+f};Ub=function(a){if(!a.v)return 4E3;var b=1,c;for(c in a.g)b=c.length>b?c.length:b;return 4E3-a.v.length-b-a.l.length-1};Wb=function(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{if(c instanceof Pb)var g=c;else g=new Pb,pb(c,function(l,n){var p=g,r=p.B++;l=Qb(n,l);p.b.push(r);p.g[r]=l});var h=Vb(g,a.b,"/pagead/gen_204?id="+b+"&");h&&("undefined"===typeof f?_.vb(_.t,h):_.vb(_.t,h,f))}catch(l){}};Xb=function(){var a=_.t.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,_.A)()};Yb=function(){var a=void 0===a?_.t:a;return(a=a.performance)&&a.now?a.now():null};Zb=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};bc=function(){var a=$b;this.events=[];this.g=a||_.t;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=ac()||(null!=b?b:1>Math.random())};dc=function(a){a&&cc&&ac()&&(cc.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),cc.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))};gc=function(){var a=ec;this.l=fc;this.v=this.g;this.b=void 0===a?null:a};ic=function(a,b,c){try{if(a.b&&a.b.b){var d=a.b.start(b.toString(),3);var e=c();a.b.end(d)}else e=c()}catch(f){c=!0;try{dc(d),c=a.v(b,new Db(f,{message:hc(f)}),void 0,void 0)}catch(g){a.g(217,g)}if(!c)throw f;}return e};_.kc=function(a,b,c){var d=jc;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];return ic(d,a,function(){return b.apply(c,f)})}};hc=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};lc=function(){if(!$b.google_measure_js_timing){var a=ec;a.b=!1;a.events!=a.g.google_js_reporting_queue&&(ac()&&(0,_.Lb)(a.events,dc),a.events.length=0)}};_.mc=function(a,b,c){Wb(fc,a,b,"jserror"!=a,c,void 0)};_.nc=function(a){return function(b){var c=(Ab()?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/gen_204";c=_.Jb(c,{id:"unsafeurl",ctx:a,url:b});navigator.sendBeacon&&navigator.sendBeacon(c,"")}};_.oc=function(a,b){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c||!/[?&]ae=1(&|$)/.test(a)||/[?&]dsh=1(&|$)/.test(a))return null;try{var d=b?c.index:a.length;return{Ha:a.slice(0,d)+"&act=1"+a.slice(d),M:decodeURIComponent(c[1])}}catch(e){return null}};_.pc=function(a,b){var c=a.search(/&adurl=/);return 0>c?a+b:a.slice(0,c)+b+a.slice(c)};qc=function(a,b,c,d,e){c="&"+b+"="+c;var f=a.indexOf("&"+d+"=");c=0>f?a+c:a.substring(0,f)+c+a.substring(f);return 2E3<c.length?_.m(e)?qc(a,b,e,d,void 0):a:c};_.N=function(a){var b=_.Kb("https://pagead2.googlesyndication.com/pagead/gen_204","zx",_.Ta());_.rc(b,a)};_.rc=function(a,b){a=Mb(a,b||{});try{window.googleJsEnvironment&&window.googleJsEnvironment.pinger&&window.googleJsEnvironment.pinger.pingUrl?window.googleJsEnvironment.pinger.pingUrl(a):_.vb(window,a,void 0)}catch(c){}};sc=function(a,b,c,d){b=c(d,b);if(!(b instanceof Array))return a;(0,_.Lb)(b,function(e){if(2!==e.length&&3!==e.length)return a;a=qc(a,e[0],e[1],"adurl",e[2])});return a};tc=function(a,b,c){this.b=a;this.D=b;this.l=c;this.F=[];this.v=[];this.H={};this.g={};this.A=this.B=!1;this.C=-1};uc=function(a,b,c){var d=b=b.getAttribute("data-original-click-url");if(d)for(var e=0;e<a.F.length;e++)d=sc(d,b,a.F[e],c);return d};vc=function(a,b){b=void 0===b?Date.now():b;return b-a.C>_.E(a.b,39,0)};xc=function(a,b){-1!==b.href.indexOf("dbm/clk")||null===_.oc(b.href)&&!_.F(a.b,38)||ic(jc,446,function(){var c=Date.now(),d;if(d=vc(a,c)){d=b.href;var e=_.oc(d,!0);var f=e?navigator.sendBeacon?navigator.sendBeacon(_.pc(e.Ha,"&ri=1"),"")?{xa:e.M,ua:!0}:{xa:_.pc(d,"&ri=2"),ua:!1}:{xa:_.pc(d,"&ri=16"),ua:!1}:{xa:d,ua:!1};d=f.ua;e=_.nc(599);f=f.xa;f=f instanceof _.y||!wc.test(f)?f:_.Ka(f);_.wb(f,e);e=f instanceof _.y?f:_.La(f);b.href=_.Ia(e)}d&&(a.C=c)})};yc=function(a,b,c,d){if(0!=a.v.length&&(d.preventDefault?!d.defaultPrevented:!1!==d.returnValue)){var e=1==d.which&&!d.ctrlKey&&"_blank"!=b.target&&"_new"!=b.target;e&&_.qb(d);for(var f=[],g={},h=0;h<a.v.length;g={pa:g.pa},h++)if(g.pa=a.v[h](c),g.pa){var l=new Promise(function(n){return function(p){_.vb(_.K,n.pa,p)}}(g));f.push(l)}c=Promise.all(f);f=new Promise(function(n){window.setTimeout(n,2E3)});e&&Promise.race([c,f]).then((0,_.w)(tc.prototype.O,a,b,d))}};Bc=function(a,b,c){var d=_.ab(a.D,_.eb,23),e=!1;d=_.da(d);for(var f=d.next();!f.done;f=d.next())if(f=f.value,"use_async_for_js_click_handler"===_.E(f,1,"")&&"True"===_.E(f,2,"")){e=!0;break}d=0;e&&a.l&&(f=void 0,a.b&&(f=a.b,_.F(f,31)&&_.E(f,28,"")?d=1:_.E(f,22,"")&&_.E(f,23,"")&&(d=_.F(f,44)?3:2),f=_.E(f,7,0)),_.N({id:"gmob-uarc",event:"ad_type_in_async_handler_experiment",ad_type:d,ad_group_creative_id:f}));e&&a.l&&2===d?(_.qb(c),zc(a,b,c).then(function(g){g||xc(a,b)})):Ac(a,b,c)||xc(a,b)};Cc=function(a,b,c,d){a.g[d]||(a.g[d]={});a.g[d][c]||(a.g[d][c]=[]);_.J(b,d,(0,_.w)(a.K,a,b,c,d))};Ac=function(a,b,c){var d=b.href;if(a.l){var e=Date.now(),f=vc(a,e);if(a.l.Ka(b,c,a.b,a.A,f))return f&&(a.C=e),!0}else if(_.t.googdlu&&(_.t.googdlu.tryOpenPlayStore&&_.t.googdlu.tryOpenPlayStore(c,d,_.E(a.b,15,""))||_.t.googdlu.tryOpenItunesStore&&_.t.googdlu.tryOpenItunesStore(c,d,_.E(a.b,15,""),_.F(a.b,42),_.F(a.b,43),_.E(a.D,7,""),_.E(a.D,8,""))))return!0;return _.F(a.b,31)&&_.F(a.b,30)&&_.E(a.b,28,"")&&_.t.googdlu&&_.t.googdlu.tryOpenAppUrl?(_.t.googdlu.tryOpenAppUrl(c,d,_.E(a.b,32,""),_.E(a.b,28,"")),!0):!1};zc=function(a,b,c){if(a.l){var d=vc(a,Date.now());return a.l.fb(b,c,a.b,a.A,d)}return new Promise(function(e){e(!1)})};Dc=function(a){if(a.classList)return a.classList;a=a.className;return _.q(a)&&a.match(/\S+/g)||[]};_.Ec=function(a,b){a.classList?a.classList.add(b):(a.classList?a.classList.contains(b):0<=(0,_.ua)(Dc(a),b))||(a.className+=0<a.className.length?" "+b:b)};_.Gc=function(a,b){if(a.classList)a.classList.remove(b);else if(a.classList?a.classList.contains(b):0<=(0,_.ua)(Dc(a),b))a.className=Fc(Dc(a),function(c){return c!=b}).join(" ")};Hc=function(a){_.t.setTimeout(function(){throw a;},0)};Jc=function(){var a=_.t.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Sa(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(_.Pa(Ic));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,_.w)(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.m(c.next)){c=c.next;var e=c.Ia;c.Ia=null;e()}};return function(e){d.next={Ia:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){_.t.setTimeout(e,0)}};Kc=function(a,b){this.l=a;this.v=b;this.g=0;this.b=null};Lc=function(){this.g=this.b=null};Nc=function(){var a=Mc,b=null;a.b&&(b=a.b,a.b=a.b.next,a.b||(a.g=null),b.next=null);return b};Oc=function(){this.next=this.g=this.b=null};Sc=function(a){Pc||Qc();Rc||(Pc(),Rc=!0);Mc.add(a,void 0)};Qc=function(){if(_.t.Promise&&_.t.Promise.resolve){var a=_.t.Promise.resolve(void 0);Pc=function(){a.then(Tc)}}else Pc=function(){var b=Tc;!_.qa(_.t.setImmediate)||_.t.Window&&_.t.Window.prototype&&!z("Edge")&&_.t.Window.prototype.setImmediate==_.t.setImmediate?(Uc||(Uc=Jc()),Uc(b)):_.t.setImmediate(b)}};Tc=function(){for(var a;a=Nc();){try{a.b.call(a.g)}catch(c){Hc(c)}var b=Vc;b.v(a);100>b.g&&(b.g++,a.next=b.b,b.b=a)}Rc=!1};_.O=function(){this.v=this.v;this.l=this.l};_.Wc=function(a){_.O.call(this);this.C=1;this.A=[];this.B=0;this.b=[];this.g={};this.F=!!a};Xc=function(a,b,c){Sc(function(){a.apply(b,c)})};Zc=function(a,b,c,d,e){this.B=new _.Wc;this.g=a;this.g[0]=[b];this.v=[];this.l=new tc(c,d,e);this.A=d;this.b=c;b=_.E(this.b,22,"");c=_.E(this.b,23,"");b&&c&&e&&(e.canOpenIntents([{url:b,id:b,G:c}],(0,_.w)(this.Oa,this))||e.canOpenURLs(b,(0,_.w)(this.Oa,this)));(e=_.M(1,"common_15click_anchor"))?(a[20]=[e],Yc(this,20)):(e=_.wa(_.Bb(2,"common_15click_anchor")),0<e.length&&(a[20]=e,Yc(this,20)))};_.$c=function(a,b,c){a=a.getElementsByAdPiece(b);if(c)for(b=0;b<a.length;b++){var d=a[b].getAttribute(c);if(d)return d}return null};Yc=function(a,b){if((null==_.$a(a.A,28)||!_.F(_.I(a.A,_.fb,28),12))&&a.g[b]&&a.Aa(b)){a.v.push(b);var c=a.l;a=a.g[b];for(var d=0;d<a.length;d++){var e=a[d];e.href&&e.setAttribute("data-original-click-url",e.href);Cc(c,e,b,"mousedown");Cc(c,e,b,"click")}c.H[b]=!0}};ad=function(a,b){a=a.getElementsByAdPiece(b);for(b=0;b<a.length;b++)if(!a[b].href)return!1;return!0};bd=function(a){this.C=new _.Wc;this.A=null;this.l=[];this.b=a;this.v=[];this.B=!1;this.g=null};cd=function(a){var b=[a];b=void 0===b?[]:b;_.t.google_logging_queue||(_.t.google_logging_queue=[]);_.t.google_logging_queue.push([10,b]);a=new bd(new db(a));_.u("adSlot",a,void 0);return a};_.dd=function(){var a=_.t.adSlot;return a?a:(jc.g(536,Error("no adslot"),void 0,void 0),cd(null))};fd=function(a,b,c){Zc.call(this,a,b,c,_.dd().b,_.dd().g);for(a=0;a<ed.length;a++)Yc(this,ed[a])};id=function(a,b){var c=gd,d={};if(!b)return null;d[0]=[b];xb(hd,function(e){c[e]&&(d[e]=_.wa(_.Bb(2,c[e],b)))});return new fd(d,b,a)};jd=function(a){_.F(a,19)&&(0,_.Lb)(_.$a(a,20),function(b){_.vb(_.K,b,void 0)})};md=function(a,b,c){b.gqid=kd;b.qqid=ld;b.com=a;_.mc("glaurung",b,c)};nd=function(a,b){var c=_.I(b,jb,16);c&&_.F(c,12)&&_.F(b,5)&&Cb(a,{backgroundColor:"transparent",backgroundImage:"none"})};pd=function(a,b,c){_.M(2,"app-icon-link",b)&&(gd[33]="app-icon-link");var d=a.b,e=_.M(1,"adunit",b),f=_.M(1,"ads",b);if(!e||!f)return 1;var g={overflow:"hidden"};0==_.E(d,32,0)?(g.width=_.E(d,2,0)+"px",g.height=_.E(d,3,0)+"px",g.position="absolute",g.top="0",g.left="0"):(g.width="100%",g.height="100%");Cb(e,g);nd(e,d);nd(f,d);try{c(f,a)}catch(n){return _.F(d,13)&&(od=n),2}c=0;d=lb(d);for(e=0;e<d.length;e++){g=d[e];var h="taw"+_.E(g,2,0);f=_.M(1,h,b);if(!f)return 3;f=id(g,f);if(!f)return 1;var l=_.K.registerAd;l?l(f,h):c=4;h=_.K.initAppPromo;_.F(g,11)&&h&&h(f,a);jd(g);if(_.F(g,19)&&(g=_.$a(g,33),0<g.length))for(h=0;h<g.length;h++)l=(0,_.w)(fd.prototype.C,f,g[h]),f.l.v.push(l);a.Ca(f)}return c};qd=function(a,b,c){var d=[];d[0]=[c];d[15]=[b];(b=_.M(1,"abgc"))&&(d[27]=[b]);(b=_.M(1,"cbc"))&&(d[28]=[b]);Zc.call(this,d,c,a,_.dd().b,_.dd().g);Yc(this,15)};rd=function(a,b){var c={};c[0]=[b];Zc.call(this,c,b,a,_.dd().b,_.dd().g)};td=function(a,b,c){Zc.call(this,a,b,c,_.dd().b,_.dd().g);for(a=0;a<sd.length;a++)Yc(this,sd[a]);this.listen(4,"mouseover",(0,_.w)(this.J,this,0,"onhoverbg",!1));this.listen(4,"mouseout",(0,_.w)(this.J,this,0,"onhoverbg",!0))};_.aa=[];ea="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};if("function"==typeof Object.setPrototypeOf)ud=Object.setPrototypeOf;else{var vd;a:{var wd={Wa:!0},xd={};try{xd.__proto__=wd;vd=xd.Wa;break a}catch(a){}vd=!1}ud=vd?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}fa=ud;_.ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;_.ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};la("Promise",function(a){function b(g){this.g=0;this.l=void 0;this.b=[];var h=this.v();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}function c(){this.b=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.g=function(g){if(null==this.b){this.b=[];var h=this;this.l(function(){h.A()})}this.b.push(g)};var e=_.ia.setTimeout;c.prototype.l=function(g){e(g,0)};c.prototype.A=function(){for(;this.b&&this.b.length;){var g=this.b;this.b=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(n){this.v(n)}}}this.b=null};c.prototype.v=function(g){this.l(function(){throw g;})};b.prototype.v=function(){function g(n){return function(p){l||(l=!0,n.call(h,p))}}var h=this,l=!1;return{resolve:g(this.H),reject:g(this.A)}};b.prototype.H=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.K(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.B(g)}};b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(l){this.A(l);return}"function"==typeof h?this.O(h,g):this.B(g)};b.prototype.A=function(g){this.C(2,g)};b.prototype.B=function(g){this.C(1,g)};b.prototype.C=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.l=h;this.D()};b.prototype.D=function(){if(null!=this.b){for(var g=0;g<this.b.length;++g)f.g(this.b[g]);this.b=null}};var f=new c;b.prototype.K=function(g){var h=this.v();g.wa(h.resolve,h.reject)};b.prototype.O=function(g,h){var l=this.v();try{g.call(h,l.resolve,l.reject)}catch(n){l.reject(n)}};b.prototype.then=function(g,h){function l(v,D){return"function"==typeof v?function(U){try{n(v(U))}catch(H){p(H)}}:D}var n,p,r=new b(function(v,D){n=v;p=D});this.wa(l(g,n),l(h,p));return r};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.wa=function(g,h){function l(){switch(n.g){case 1:g(n.l);break;case 2:h(n.l);break;default:throw Error("Unexpected state: "+n.g);}}var n=this;null==this.b?f.g(l):this.b.push(l)};b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};b.race=function(g){return new b(function(h,l){for(var n=_.da(g),p=n.next();!p.done;p=n.next())d(p.value).wa(h,l)})};b.all=function(g){var h=_.da(g),l=h.next();return l.done?d([]):new b(function(n,p){function r(U){return function(H){v[U]=H;D--;0==D&&n(v)}}var v=[],D=0;do v.push(void 0),D++,d(l.value).wa(r(v.length-1),p),l=h.next();while(!l.done)})};return b});ma.prototype.toString=function(){return this.b};_.yd=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();_.t=this||self;_.A=Date.now||function(){return+new Date};var Fc;_.ua=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(_.q(a))return _.q(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.Lb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=_.q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};Fc=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=_.q(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d};_.zd=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=_.q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};Aa.prototype.g=!0;Aa.prototype.b=function(){return this.l};Aa.prototype.toString=function(){return"Const{"+this.l+"}"};var za={},ya={},Ra=_.Ca("");_.Ea.prototype.g=!0;_.Ea.prototype.b=function(){return this.l.toString()};var Da={};_.Ad=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};_.y.prototype.g=!0;_.y.prototype.b=function(){return this.l.toString()};var Ja=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ha={};_.Ka("about:blank");var Ma;a:{var Bd=_.t.navigator;if(Bd){var Cd=Bd.userAgent;if(Cd){Ma=Cd;break a}}Ma=""};Oa.prototype.g=!0;Oa.prototype.b=function(){return this.l.toString()};var Na={};_.Qa("<!DOCTYPE html>");var Ic=_.Qa("");_.Qa("<br>");_.Dd=xa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=_.Pa(Ic);return!b.parentElement});Va[" "]=_.na;var Fd,Ld;_.Ed=z("Opera");_.yb=z("Trident")||z("MSIE");Fd=z("Edge");_.Gd=z("Gecko")&&!(-1!=Ma.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge");_.Hd=-1!=Ma.toLowerCase().indexOf("webkit")&&!z("Edge");_.Id=z("Android");_.Jd=Ua();_.Kd=z("iPad");a:{var Md="",Nd=function(){var a=Ma;if(_.Gd)return/rv:([^\);]+)(\)|;)/.exec(a);if(Fd)return/Edge\/([\d\.]+)/.exec(a);if(_.yb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Hd)return/WebKit\/(\S+)/.exec(a);if(_.Ed)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Nd&&(Md=Nd?Nd[1]:"");if(_.yb){var Od=Xa();if(null!=Od&&Od>parseFloat(Md)){Ld=String(Od);break a}}Ld=Md}_.Pd=Ld;var Rd=_.t.document;_.Qd=Rd&&_.yb?Xa()||("CSS1Compat"==Rd.compatMode?parseInt(_.Pd,10):5):void 0;_.Sd=Ua()||z("iPod");_.Td=z("iPad");_.Ud=z("Android")&&!((z("Chrome")||z("CriOS"))&&!z("Edge")||z("Firefox")||z("FxiOS")||z("Opera")||z("Silk"));var Ya="function"==typeof Uint8Array,Za=[];_.x(db,_.B);_.x(_.eb,_.B);_.x(_.fb,_.B);_.x(_.ib,_.B);_.x(jb,_.B);_.x(_.kb,_.B);var cb=[1,23],gb=[20,33];_.ib.prototype.getType=function(){return _.E(this,1,0)};var hd;hd={Kb:0,jc:1,kc:45,lc:46,Yb:48,URL:2,Db:3,vb:4,ic:5,cc:7,Qb:8,Bb:9,Sb:6,Vb:34,Lb:13,wb:14,Rb:15,Tb:16,Ub:40,gc:47,nc:29,Hb:30,hc:49,Zb:17,Eb:18,Jb:19,Ib:20,ec:23,zb:24,bc:25,ac:26,Ab:27,$b:28,VIDEO:39,mc:31,Gb:32,yb:33,Mb:35,Wb:36,xb:37,Fb:38,Xb:42,dc:43,fc:44,Cb:50,Nb:1E3,Ob:1001,Pb:1002};_.Vd=[16,47,49,18,27,28,39];_.L=document;_.K=window;_.nb.prototype.ceil=function(){this.b=Math.ceil(this.b);this.g=Math.ceil(this.g);return this};_.nb.prototype.floor=function(){this.b=Math.floor(this.b);this.g=Math.floor(this.g);return this};_.nb.prototype.round=function(){this.b=Math.round(this.b);this.g=Math.round(this.g);return this};var rb=xa(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});_.t.addEventListener("test",null,b)}catch(c){}return a});var wc=/^((market|itms|intent|itms-appss):\/\/)/i;var Wd=!!window.google_async_iframe_id,Xd=Wd&&window.parent||window;var Yd=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Zd=null;var cc=_.t.performance,$d=!!(cc&&cc.mark&&cc.measure&&cc.clearMarks),ac=xa(function(){var a;if(a=$d){var b;if(null===Zd){Zd="";try{a="";try{a=_.t.top.location.hash}catch(c){a=_.t.location.hash}a&&(Zd=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Zd;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});bc.prototype.start=function(a,b){if(!this.b)return null;var c=Yb()||Xb();a=new Zb(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";cc&&ac()&&cc.mark(b);return a};bc.prototype.end=function(a){if(this.b&&"number"==typeof a.value){var b=Yb()||Xb();a.duration=b-a.value;b="goog_"+a.label+"_"+a.uniqueId+"_end";cc&&ac()&&cc.mark(b);!this.b||2048<this.events.length||this.events.push(a)}};gc.prototype.pinger=function(){return this.l};gc.prototype.g=function(a,b,c,d,e){e=e||"jserror";try{var f=new Pb;f.A=!0;Tb(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Db(b,{message:hc(b)}));b.msg&&Tb(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(d)try{d(g)}catch(G){}b=[g];f.b.push(3);f.g[3]=b;d=_.t;b=[];g=null;do{var h=d;if(ob(h)){var l=h.location.href;g=h.document&&h.document.referrer||null}else l=g,g=null;b.push(new Ob(l||""));try{d=h.parent}catch(G){d=null}}while(d&&h!=d);l=0;for(var n=b.length-1;l<=n;++l)b[l].depth=n-l;h=_.t;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(n=1;n<b.length;++n){var p=b[n];p.url||(p.url=h.location.ancestorOrigins[n-1]||"",p.La=!0)}var r=new Ob(_.t.location.href,!1);h=null;var v=b.length-1;for(p=v;0<=p;--p){var D=b[p];!h&&Yd.test(D.url)&&(h=D);if(D.url&&!D.La){r=D;break}}D=null;var U=b.length&&b[v].url;0!=r.depth&&U&&(D=b[v]);var H=new Nb(r,D);H.g&&Tb(f,4,"top",H.g.url||"");Tb(f,5,"url",H.b.url||"");Wb(this.l,e,f,!1,c)}catch(G){try{Wb(this.l,e,{context:"ecmserr",rctx:a,msg:hc(G),url:H&&H.b.url},!1,c)}catch(P){}}return!0};var fc,jc;if(Wd&&!ob(Xd)){var ae="."+_.L.domain;try{for(;2<ae.split(".").length&&!ob(Xd);)_.L.domain=ae=ae.substr(ae.indexOf(".")+1),Xd=window.parent}catch(a){}ob(Xd)||(Xd=window)}var $b=Xd,ec=new bc;fc=new function(){this.b=Ab()?"http:":"https:";this.g=Math.random()};jc=new gc;"complete"==$b.document.readyState?lc():ec.b&&_.J($b,"load",function(){lc()});tc.prototype.O=function(a,b){this.B=!0;var c=!1;b.target&&(c=_.zb(b.target,b.button,b.ctrlKey,b.shiftKey,b.metaKey,b.altKey,new _.nb(b.x,b.y)));!a.href||c||Ac(this,a,b)||(xc(this,a),_.K.top.location=a.href)};tc.prototype.K=function(a,b,c,d){if(this.B)this.B=!1;else{d||(d=_.K.event);this.g[c][b].forEach(function(f){f(d)});if(a.href){var e=uc(this,a,d.type);e&&(a.href=e)}"click"==c&&(yc(this,a,b,d),(d.preventDefault?d.defaultPrevented:!1===d.returnValue)||Bc(this,a,d))}};var Uc;Kc.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.l();return a};var Vc=new Kc(function(){return new Oc},function(a){a.reset()});Lc.prototype.add=function(a,b){var c=Vc.get();c.set(a,b);this.g?this.g.next=c:this.b=c;this.g=c};Oc.prototype.set=function(a,b){this.b=a;this.g=b;this.next=null};Oc.prototype.reset=function(){this.next=this.g=this.b=null};var Pc,Rc=!1,Mc=new Lc;_.O.prototype.v=!1;_.O.prototype.Ea=ba(0);_.O.prototype.N=ba(2);_.x(_.Wc,_.O);_.Wc.prototype.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.C;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.C=e+3;d.push(e);return e};_.Wc.prototype.H=function(a){var b=this.b[a];b&&(b=this.g[b],0!=this.B?(this.A.push(a),this.b[a+1]=_.na):(b&&_.va(b,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2]))};_.Wc.prototype.D=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];Xc(this.b[g+1],this.b[g+2],d)}else{this.B++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.B--,0<this.A.length&&0==this.B)for(;c=this.A.pop();)this.H(c)}}}};_.Wc.prototype.N=ba(1);_.k=Zc.prototype;_.k.Oa=function(a,b){b=(a=_.E(this.b,22,""))&&b?b[a]:!1;this.l.A=!!b;this.J(0,"app_installed",!b);this.J(0,"rh-ani",b)};_.k.navigationAdPieces=function(){return this.v};_.k.Aa=function(){return!0};_.k.has=function(a){return(a=this.g[a])&&0<a.length};_.k.listen=function(a,b,c){var d=this.g[a];if(d){var e=this.l;c=_.ta(c,a,this);var f=("click"==b||"mousedown"==b)&&e.H[a];e.g[b]||(e.g[b]={});e.g[b][a]||(e.g[b][a]=[]);e.g[b][a].push(c);if(!f)for(a=0;a<d.length;a++)_.J(d[a],b,c)}};_.k.J=function(a,b,c){if(b){a=this.getElementsByAdPiece(a);for(var d=0;d<a.length;d++)c?_.Gc(a[d],b):_.Ec(a[d],b)}};_.k.getElementsByAdPiece=function(a){return this.g[a]?this.g[a]:[]};_.k.creativeConversionUrl=function(){return _.E(this.b,6,"")};_.k.redirectUrl=function(){return _.E(this.b,8,"")};_.k.getIndex=function(){return _.E(this.b,2,0)};_.k.listenOnObject=function(a,b){this.B.subscribe(a,b)};_.k.fireOnObject=function(a,b){this.B.D(a,b)};_.k=bd.prototype;_.k.forEachAd=function(a){(0,_.Lb)(this.l,a)};_.k.Ca=function(a){this.l.push(a)};_.k.$a=function(a){if(a=_.M(1,a))this.A=a;if(0==this.l.length)_.t.css=null;else{for(a=0;a<this.v.length;++a)this.v[a]();this.B=!0}};_.k.listenOnObject=function(a,b){this.C.subscribe(a,b)};_.k.fireOnObject=function(a,b){this.C.D(a,b)};_.k.registerFinalizeCallback=function(a){this.B?a():this.v.push(a)};_.k.getSerializedAdSlotData=function(){return _.bb(this.b)};_.k.getAdsLength=function(){return this.l.length};_.k.getAd=function(a){return 0<=a&&a<this.l.length&&this.l[a].getIndex()==a?this.l[a]:null};_.k.getContainer=function(){return this.A};_.k.openSystemBrowser=function(a){return this.g?(this.g.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0}),!0):!1};_.k.openAttribution=function(a){return this.g?(this.g.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0,useCustomTabs:!0}),!0):!1};ha(fd,Zc);fd.prototype.Aa=function(a){return ad(this,a)||4===a};fd.prototype.C=function(a,b){return this.Aa(b)?a:""};var ed=[1,2,3,4,8,6,40,33,36,37,38,9];var kd="UNKNOWN",ld="UNKNOWN",od=null,Q={},gd=(Q[1]="title-link",Q[2]="url-link",Q[3]="body-link",Q[4]="button-link",Q[8]="favicon-link",Q[6]="image-link",Q[26]="price",Q[23]="reviews",Q[43]="rating-stars",Q[44]="reviews-count",Q[24]="app-store",Q[25]="promo-headline",Q[33]="app-icon",Q[16]="image-gallery",Q[40]="image-gallery-image-link",Q[36]="logo-link",Q[37]="advertiser-link",Q[38]="call-to-action-link",Q[39]="video",Q[42]="logo",Q[50]="badge-box",Q[9]="ad-background",Q);ha(qd,Zc);ha(rd,Zc);ha(td,Zc);td.prototype.Aa=function(a){return ad(this,a)||4==a};var R={},be=(R[1]="rhtitle",R[45]="rhtitleline1",R[46]="rhtitleline2",R[48]="rhlongtitle",R[3]="rhbody",R[2]="rhurl",R[4]="rhbutton",R[8]="rhfavicon",R[14]="rhaddress",R[6]="rhimage",R[34]="rhimagetemplate",R[49]="rh-scrollflow",R[16]="rhimagegallery",R[47]="rhreviewgallery",R[29]="rhviewimagegallery",R[30]="rhcloseimagegalleryview",R[31]="rhtrydemobutton",R[32]="rhclosetrydemoview",R[39]="rhvideo",R[9]="rhbackground",R[13]="rh-icore-empty",R[5]="rhsitelink",R[7]="rhradlink",R[17]="rh-multiframe",R[18]="rh-box-breadcrumbs",R[23]="rhstarratings",R[24]="rhstoreicon",R[25]="rhpromotext",R[26]="rhprice",R[27]="abgc",R[28]="cbc",R[35]="rhdemocountdowntimer",R[36]="rhlogo",R[1001]="rhoverlap-imagegallery",R[1002]="rhoverlap-trydemo",R),sd=[1,45,46,48,2,4,5,7,8,3,9,6,14,15,34,26,24,36];bd.prototype.forEachAd=bd.prototype.forEachAd;bd.prototype.addAd=bd.prototype.Ca;bd.prototype.finalize=bd.prototype.$a;_.u("buildAdSlot",cd,void 0);_.u("buildGlaurungAds",function(a,b,c){var d=(new Date).getTime(),e=1,f=!1;od=null;try{var g=a.b;f=_.F(g,13);kd=_.E(g,8,"");ld=_.E(g,7,"");e=pd(a,b,c)}catch(h){f&&(od=h),e=1}a={};md("bridge",(a.r=e,a.d=(new Date).getTime()-d,a));return e},void 0);_.u("glaurungError",function(){return od},void 0);_.u("glaurungBridge.log",md,void 0);_.u("glaurungBridge.getAdPieceClassName",function(a){return gd[a]},void 0);_.u("buildImageAd",function(a,b){if(0>b||b>=lb(a.b).length)a=null;else{a=lb(a.b)[b];b=_.M(1,"google_image_div");var c=_.M(1,"aw0");a=b&&c?new qd(a,c,b):null}return a},void 0);_.u("buildRichmediaAd",function(a,b){return 0>b||b>=lb(a.b).length?null:new rd(lb(a.b)[b],_.L.body)},void 0);_.u("buildTextAd",function(a,b){var c=a.b;if(!(0>b||b>=lb(c).length)){if(0>b||b>=lb(a.b).length)var d=null;else{d=lb(a.b)[b];var e=_.M(1,"taw"+b);if(e){var f={0:[e]},g;for(g in hd){var h=hd[g],l=be[h];l&&(f[h]=_.wa(_.Bb(2,l,e)))}d=new td(f,e,d)}else d=null}d&&(_.K.registerAd&&_.K.registerAd(d,"taw"+b),a.Ca(d),_.F(lb(c)[b],11)&&_.K.initAppPromo&&_.K.initAppPromo(d,a))}},void 0);})(window.hydra=window.hydra||{});