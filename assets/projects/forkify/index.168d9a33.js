var e,t,r,n,i,o,a,s,c,u,l,p,d,f,h,v,m,g,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=function(e){return e&&e.Math===Math&&e};k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof b&&b)||E("object"==typeof k&&k)||function(){return this}()||Function("return this")();var S={},F={};S=!(F=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},x={};x=!F(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var L=Function.prototype.call;O=x?L.bind(L):function(){return L.apply(L,arguments)};var M={}.propertyIsEnumerable,j=Object.getOwnPropertyDescriptor;o=j&&!M.call({1:2},1)?function(e){var t=j(this,e);return!!t&&t.enumerable}:M;var $={};$=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},T={},I={},q=Function.prototype,N=q.call,D=x&&q.bind.bind(N,N),C={},R=(I=x?D:function(e){return function(){return N.apply(e,arguments)}})({}.toString),A=I("".slice);C=function(e){return A(R(e),8,-1)};var U=Object,z=I("".split);T=F(function(){return!U("z").propertyIsEnumerable(0)})?function(e){return"String"===C(e)?z(e,""):U(e)}:U;var H={},W={};W=function(e){return null==e};var B=TypeError;H=function(e){if(W(e))throw new B("Can't call method on "+e);return e},P=function(e){return T(H(e))};var Q={},G={},J={},Y={},V="object"==typeof document&&document.all;Y=void 0===V&&void 0!==V?function(e){return"function"==typeof e||e===V}:function(e){return"function"==typeof e},J=function(e){return"object"==typeof e?null!==e:Y(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],Y(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=I({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=k.process,eo=k.Deno,ea=ei&&ei.versions||eo&&eo.version,es=ea&&ea.v8;es&&(s=(a=es.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&en&&(!(a=en.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=en.match(/Chrome\/(\d+)/))&&(s=+a[1]),er=s;var ec=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!F(function(){var e=Symbol("symbol detection");return!ec(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Y(t)&&Z(t.prototype,eu(e))};var el={},ep={},ed={},ef=String;ed=function(e){try{return ef(e)}catch(e){return"Object"}};var eh=TypeError;ep=function(e){if(Y(e))return e;throw new eh(ed(e)+" is not a function")},el=function(e,t){var r=e[t];return W(r)?void 0:ep(r)};var ev={},em=TypeError;ev=function(e,t){var r,n;if("string"===t&&Y(r=e.toString)&&!J(n=O(r,e))||Y(r=e.valueOf)&&!J(n=O(r,e))||"string"!==t&&Y(r=e.toString)&&!J(n=O(r,e)))return n;throw new em("Can't convert object to primitive value")};var eg={},ey={},eb={};eb=!1;var e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var ek="__core-js_shared__",eE=ey=k[ek]||e_(ek,{});(eE.versions||(eE.versions=[])).push({version:"3.36.1",mode:eb?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",source:"https://github.com/zloirock/core-js"}),eg=function(e,t){return ey[e]||(ey[e]=t||{})};var eS={},eF={},eO=Object;eF=function(e){return eO(H(e))};var ex=I({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return ex(eF(e),t)};var eL={},eM=0,ej=Math.random(),e$=I(1..toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+e$(++eM+ej,36)};var eP=k.Symbol,eT=eg("wks"),eI=ee?eP.for||eP:eP&&eP.withoutSetter||eL,eq=TypeError,eN=(eS(eT,e="toPrimitive")||(eT[e]=et&&eS(eP,e)?eP[e]:eI("Symbol."+e)),eT[e]);G=function(e,t){if(!J(e)||K(e))return e;var r,n=el(e,eN);if(n){if(void 0===t&&(t="default"),r=O(n,e,t),!J(r)||K(r))return r;throw new eq("Can't convert object to primitive value")}return void 0===t&&(t="number"),ev(e,t)},Q=function(e){var t=G(e,"string");return K(t)?t:t+""};var eD={},eC={},eR=k.document,eA=J(eR)&&J(eR.createElement);eC=function(e){return eA?eR.createElement(e):{}},eD=!S&&!F(function(){return 7!==Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});var eU=Object.getOwnPropertyDescriptor;i=S?eU:function(e,t){if(e=P(e),t=Q(t),eD)try{return eU(e,t)}catch(e){}if(eS(e,t))return $(!O(o,e,t),e[t])};var ez={},eH={};eH=S&&F(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},eB=String,eQ=TypeError;eW=function(e){if(J(e))return e;throw new eQ(eB(e)+" is not an object")};var eG=TypeError,eJ=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eV="enumerable",eK="configurable",eX="writable";c=S?eH?function(e,t,r){if(eW(e),t=Q(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eX in r&&!r[eX]){var n=eY(e,t);n&&n[eX]&&(e[t]=r.value,r={configurable:eK in r?r[eK]:n[eK],enumerable:eV in r?r[eV]:n[eV],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(eW(e),t=Q(t),eW(r),eD)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eG("Accessors not supported");return"value"in r&&(e[t]=r.value),e},ez=S?function(e,t,r){return c(e,t,$(1,r))}:function(e,t,r){return e[t]=r,e};var eZ={},e0={},e1=Function.prototype,e2=S&&Object.getOwnPropertyDescriptor,e3=eS(e1,"name")&&(!S||S&&e2(e1,"name").configurable),e4={},e9=I(Function.toString);Y(ey.inspectSource)||(ey.inspectSource=function(e){return e9(e)}),e4=ey.inspectSource;var e7={},e8={},e5=k.WeakMap;e8=Y(e5)&&/native code/.test(String(e5));var e6={},te=eg("keys");e6=function(e){return te[e]||(te[e]=eL(e))};var tt={};tt={};var tr="Object already initialized",tn=k.TypeError,ti=k.WeakMap;if(e8||ey.state){var to=ey.state||(ey.state=new ti);to.get=to.get,to.has=to.has,to.set=to.set,u=function(e,t){if(to.has(e))throw new tn(tr);return t.facade=e,to.set(e,t),t},l=function(e){return to.get(e)||{}},p=function(e){return to.has(e)}}else{var ta=e6("state");tt[ta]=!0,u=function(e,t){if(eS(e,ta))throw new tn(tr);return t.facade=e,ez(e,ta,t),t},l=function(e){return eS(e,ta)?e[ta]:{}},p=function(e){return eS(e,ta)}}var ts=(e7={set:u,get:l,has:p,enforce:function(e){return p(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=l(t)).type!==e)throw new tn("Incompatible receiver, "+e+" required");return r}}}).enforce,tc=e7.get,tu=String,tl=Object.defineProperty,tp=I("".slice),tf=I("".replace),th=I([].join),tv=S&&!F(function(){return 8!==tl(function(){},"length",{value:8}).length}),tm=String(String).split("String"),tg=e0=function(e,t,r){"Symbol("===tp(tu(t),0,7)&&(t="["+tf(tu(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eS(e,"name")||e3&&e.name!==t)&&(S?tl(e,"name",{value:t,configurable:!0}):e.name=t),tv&&r&&eS(r,"arity")&&e.length!==r.arity&&tl(e,"length",{value:r.arity});try{r&&eS(r,"constructor")&&r.constructor?S&&tl(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ts(e);return eS(n,"source")||(n.source=th(tm,"string"==typeof t?t:"")),e};Function.prototype.toString=tg(function(){return Y(this)&&tc(this).source||e4(this)},"toString"),eZ=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Y(r)&&e0(r,o,n),n.global)i?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var ty={},tb={},t_={},tw={},tk={},tE={},tS=Math.ceil,tF=Math.floor;tE=Math.trunc||function(e){var t=+e;return(t>0?tF:tS)(t)},tk=function(e){var t=+e;return t!=t||0===t?0:tE(t)};var tO=Math.max,tx=Math.min;tw=function(e,t){var r=tk(e);return r<0?tO(r+t,0):tx(r,t)};var tL={},tM={},tj=Math.min;tM=function(e){var t=tk(e);return t>0?tj(t,9007199254740991):0},tL=function(e){return tM(e.length)};var t$=function(e){return function(t,r,n){var i,o=P(t),a=tL(o);if(0===a)return!e&&-1;var s=tw(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tP={includes:t$(!0),indexOf:t$(!1)}.indexOf,tT=I([].push);t_=function(e,t){var r,n=P(e),i=0,o=[];for(r in n)!eS(tt,r)&&eS(n,r)&&tT(o,r);for(;t.length>i;)eS(n,r=t[i++])&&(~tP(o,r)||tT(o,r));return o};var tI=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");d=Object.getOwnPropertyNames||function(e){return t_(e,tI)},f=Object.getOwnPropertySymbols;var tq=I([].concat);tb=X("Reflect","ownKeys")||function(e){var t=d(eW(e));return f?tq(t,f(e)):t},ty=function(e,t,r){for(var n=tb(t),o=0;o<n.length;o++){var a=n[o];eS(e,a)||r&&eS(r,a)||c(e,a,i(t,a))}};var tN={},tD=/#|\.prototype\./,tC=function(e,t){var r=tA[tR(e)];return r===tz||r!==tU&&(Y(t)?F(t):!!t)},tR=tC.normalize=function(e){return String(e).replace(tD,".").toLowerCase()},tA=tC.data={},tU=tC.NATIVE="N",tz=tC.POLYFILL="P";tN=tC,w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||e_(c,{}):k[c]&&k[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tN(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ty(a,o)}(e.sham||o&&o.sham)&&ez(a,"sham",!0),eZ(r,n,a,e)}};var tH={},tW={},tB=Function.prototype,tQ=tB.apply,tG=tB.call;tW="object"==typeof Reflect&&Reflect.apply||(x?tG.bind(tQ):function(){return tG.apply(tQ,arguments)});var tJ={},tY={},tV=(tY=function(e){if("Function"===C(e))return I(e)})(tY.bind);tJ=function(e,t){return ep(e),void 0===t?e:x?tV(e,t):function(){return e.apply(t,arguments)}};var tK={};tK=X("document","documentElement");var tX={};tX=I([].slice);var tZ={},t0=TypeError;tZ=function(e,t){if(e<t)throw new t0("Not enough arguments");return e};var t1={};t1=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t2={};t2="process"===C(k.process);var t3=k.setImmediate,t4=k.clearImmediate,t9=k.process,t7=k.Dispatch,t8=k.Function,t5=k.MessageChannel,t6=k.String,re=0,rt={},rr="onreadystatechange";F(function(){h=k.location});var rn=function(e){if(eS(rt,e)){var t=rt[e];delete rt[e],t()}},ri=function(e){return function(){rn(e)}},ro=function(e){rn(e.data)},ra=function(e){k.postMessage(t6(e),h.protocol+"//"+h.host)};t3&&t4||(t3=function(e){tZ(arguments.length,1);var t=Y(e)?e:t8(e),r=tX(arguments,1);return rt[++re]=function(){tW(t,void 0,r)},v(re),re},t4=function(e){delete rt[e]},t2?v=function(e){t9.nextTick(ri(e))}:t7&&t7.now?v=function(e){t7.now(ri(e))}:t5&&!t1?(g=(m=new t5).port2,m.port1.onmessage=ro,v=tJ(g.postMessage,g)):k.addEventListener&&Y(k.postMessage)&&!k.importScripts&&h&&"file:"!==h.protocol&&!F(ra)?(v=ra,k.addEventListener("message",ro,!1)):v=rr in eC("script")?function(e){tK.appendChild(eC("script"))[rr]=function(){tK.removeChild(this),rn(e)}}:function(e){setTimeout(ri(e),0)});var rs=(tH={set:t3,clear:t4}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rs},{clearImmediate:rs});var rc=tH.set,ru={},rl={};rl="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rp=k.Function,rd=/MSIE .\./.test(en)||rl&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ru=function(e,t){var r=t?2:1;return rd?function(n,i){var o=tZ(arguments.length,1)>r,a=Y(n)?n:rp(n),s=o?tX(arguments,r):[],c=o?function(){tW(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rf=k.setImmediate?ru(rc,!1):rc;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rf},{setImmediate:rf});const rh="https://forkify-api.herokuapp.com/api/v2/recipes/",rv="5d280793-c630-4bd9-9fd0-e8e2e1795d8a",rm=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (Code- ${n.status})`);return i}catch(e){throw e}},rg={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},ry=function(e){return{id:e.id,title:e.title,publisher:e.publisher,sourceURL:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients,...e.key?{key:e.key}:{}}},rb=async function(e){try{let t=await rm(`${rh}${e}?key=${rv}`);rg.recipe=ry(t.data.recipe),rg.bookmarks.some(t=>t.id===e)?rg.recipe.bookmarked=!0:rg.recipe.bookmarked=!1}catch(e){throw e}},r_=async function(e){try{rg.search.query=e;let t=await rm(`${rh}?search=${e}?key=${rv}`);rg.search.results=t.data.recipes.map(ry)}catch(e){throw e}},rw=function(e=rg.search.page){return rg.search.page=e,rg.search.results.slice((e-1)*10,10*e)},rk=function(e){if(-1===e&1===rg.recipe.servings)return;let t=rg.recipe.servings+e;rg.recipe.ingredients.forEach(e=>e.quantity=e.quantity/rg.recipe.servings*t),rg.recipe.servings=t},rE=function(e){rg.bookmarks.push(e),e.id===rg.recipe.id&&(rg.recipe.bookmarked=!0),rF()},rS=function(e){let t=rg.bookmarks.findIndex(t=>t.id===e);rg.bookmarks.splice(t,1),e===rg.recipe.id&&(rg.recipe.bookmarked=!1),rF()},rF=function(){localStorage.setItem("bookmarks",JSON.stringify(rg.bookmarks))},rO=async function(e){try{let t=Object.fromEntries(e),r=e.filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(function(e){let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format :)");let[r,n,i]=t;return{quantity:r,unit:n,description:i}}),n={title:t.title,publisher:t.publisher,source_url:t.sourceUrl,image_url:t.image,servings:+t.servings,cooking_time:+t.cookingTime,ingredients:r},i=await rm(`${rh}?key=${rv}`,n);rg.recipe=ry(i.data.recipe),rE(rg.recipe)}catch(e){throw e}};var rx={};rx=new URL("icons.c14567a0.svg",import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rL{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._ToDOM(t)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._perentElement.querySelectorAll("*"));r.forEach(function(e,t){let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._perentElement.innerHTML=""}_ToDOM(e){this._clear(),this._perentElement.insertAdjacentHTML("afterbegin",e)}renderSpinner(){let e=`
    <div class="spinner">
        <svg>
            <use href="${_(rx)}#icon-loader"></use>
        </svg>
    </div>
    `;this._ToDOM(e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${_(rx)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
      `;this._ToDOM(t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${_(rx)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
      `;this._ToDOM(t)}}class rM extends rL{_perentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try a different one.";_message="Start by searching for a recipe or an ingredient. Have fun!";addHandlerRender(e,t,r){["hashchange","load"].forEach(t=>window.addEventListener(t,e)),this._perentElement.addEventListener("click",function(e){let r=e.target.closest(".btn--tiny");if(r){if(r.classList.contains("btn--increase-servings"))return t(1);if(r.classList.contains("btn--decrease-servings"))return t(-1)}}),this._perentElement.addEventListener("click",function(e){e.target.closest(".btn--bookmark")&&r()})}_generateMarkup(){return`
    <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img"/>
        <h1 class="recipe__title">
            <span>${this._data.title}</span>
        </h1>
    </figure>

    <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${_(rx)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime} </span>
            <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${_(rx)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>
        <div class="recipe__info-buttons">
            <button class="btn--tiny btn--decrease-servings">
                <svg>
                    <use href="${_(rx)}#icon-minus-circle"></use>
                </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
                <svg>
                    <use href="${_(rx)}#icon-plus-circle"></use>
                </svg>
            </button>
        </div>
    </div>
    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
      <svg>
        <use href="${_(rx)}#icon-user"></use>
      </svg>
    </div>
        <button class="btn--round btn--bookmark">
            <svg class="">
                <use href="${_(rx)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
        </button>
    </div>

    <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._getIngredientMarkup.bind(this)).join(" ")}
        </ul>
    </div>

    <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
        </p>
        <a
        class="btn--small recipe__btn"
        href="${this._data.sourceURL}"
        target="_blank"
        >
            <span>Directions</span>
            <svg class="search__icon">
            <use href="${_(rx)}#icon-arrow-right"></use>
            </svg>
        </a>
    </div>
`}_getIngredientMarkup(e){return`
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
        <use href="${_(rx)}#icon-check"></use>
        </svg>
        ${e.quantity?`<div class="recipe__quantity">${this._getIngredientQuantity(e.quantity)}</div>`:""}
        ${e.unit?` <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
                </div>`:` <div class="recipe__description">${e.description.trim()}</div>`}
    </li>
            `}_getIngredientQuantity(e){let t=Number((e-Math.floor(e)).toFixed(2));return Math.trunc(e)===e?e:.33===t?`${Math.trunc(e)} 1/3`:.66===t?`${Math.trunc(e)} 2/3`:new y(e).toString()}}var rj=new rM;class r${_perentElement=document.querySelector(".search");_searchField=document.querySelector(".search__field");getQuery(){let e=this._searchField.value;return this._clearInput(),e}_clearInput(){this._searchField.value="",this._searchField.blur()}addHandlerSearch(e){this._perentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rP=new r$;class rT extends rL{_perentElement="";_generateMarkupPriview(e){let t=window.location.hash.slice(1);return`
    <li class="preview">
        <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
            <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
                <div class="recipe__user-generated ${e.key?"":"hidden"}">
                  <svg>
                    <use href="${_(rx)}#icon-user"></use>
                  </svg>
              </div>
            </div>
        </a>
    </li>
    `}}class rI extends rT{_perentElement=document.querySelector(".results");_errorMessage="No recipes found!";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPriview).join("")}}var rq=new rI;class rN extends rL{_perentElement=document.querySelector(".pagination");addHandlerClick(e){this._perentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(r){if(r.classList.contains("pagination__btn--prev"))return e(-1);if(r.classList.contains("pagination__btn--next"))return e(1)}})}_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page;return 1===t&&e>1?this._generateNextBTN(t):1===t&&1===e?"":t===e&&e>1?this._generatePreviousBTN(t):t>1&&t<e?this._generateNextBTN(t)+this._generatePreviousBTN(t):void 0}_generatePreviousBTN(e){return`
    <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${_(rx)}#icon-arrow-left"></use>
        </svg>
        <span>${e-1}</span>
    </button>
    `}_generateNextBTN(e){return`
    <button class="btn--inline pagination__btn--next">
        <span>${e+1}</span>
        <svg class="search__icon">
            <use href="${_(rx)}#icon-arrow-right"></use>
        </svg>
    </button>
    `}}var rD=new rN;class rC extends rT{_perentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPriview).join("")}}var rR=new rC;class rA extends rL{_message="Recipe was upload successfully!";_perentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_btnUpload=document.querySelector(".upload__btn");constructor(){super(),this._addHandler()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden"),setTimeout((function(){this.render(" ")}).bind(this),2500)}uploadRecipe(e){this._perentElement.addEventListener("submit",function(t){t.preventDefault(),e([...new FormData(this)])})}_addHandler(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this)),this._btnClose.addEventListener("click",this.toggleWindow.bind(this))}_generateMarkup(){return`
    <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="" required name="title" type="text" />
          <label>URL</label>
          <input value="" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="" required name="image" type="text" />
          <label>Publisher</label>
          <input value="" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value=""
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value=""
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=""
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="src/img/icons.svg#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
    `}}var rU=new rA,rz=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return i(c,"_invoke",{value:(a=new x(o||[]),s=d,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=p(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===d)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=p(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=p(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return g.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rz}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rz:Function("r","regeneratorRuntime = r")(rz)}const rH=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rq.update(rw()),rR.update(rg.bookmarks),rj.renderSpinner(),await rb(e),rj.render(rg.recipe)}catch(e){rj.renderError()}},rW=function(e){rq.render(rw(e)),rD.render(rg.search)},rB=async function(){try{let e=rP.getQuery();if(!e)return;rq.renderSpinner(),await r_(e),rW(1)}catch(e){rj.renderError()}},rQ=async function(e){try{rU.renderSpinner(),await rO(e),rj.render(rg.recipe),rR.render(rg.bookmarks),rU.renderMessage(),setTimeout(function(){rU.toggleWindow()},2500),window.history.pushState(null,"",`#${rg.recipe.id}`)}catch(e){rU.renderError(e.message)}};rj.addHandlerRender(rH,function(e){rk(e),rj.update(rg.recipe)},function(){rg.recipe.bookmarked?rS(rg.recipe.id):rE(rg.recipe),rj.update(rg.recipe),rR.render(rg.bookmarks)}),rP.addHandlerSearch(rB),rD.addHandlerClick(function(e){rW(rg.search.page+=e)}),rU.uploadRecipe(rQ),function(){let e=localStorage.getItem("bookmarks");e&&(rg.bookmarks=JSON.parse(e))}(),rR.render(rg.bookmarks);
//# sourceMappingURL=index.168d9a33.js.map
