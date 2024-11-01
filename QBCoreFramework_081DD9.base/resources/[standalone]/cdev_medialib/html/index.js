const iu=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};iu();function or(){}function Gs(e){return e()}function Go(){return Object.create(null)}function en(e){e.forEach(Gs)}function nu(e){return typeof e=="function"}function ua(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function au(e){return Object.keys(e).length===0}function ou(e,...t){if(e==null)return or;const r=e.subscribe(...t);return r.unsubscribe?()=>r.unsubscribe():r}function xa(e,t,r){e.$$.on_destroy.push(ou(t,r))}function su(e,t,r){return e.set(r),t}function ze(e,t){e.appendChild(t)}function Qe(e,t,r){e.insertBefore(t,r||null)}function Ze(e){e.parentNode.removeChild(e)}function zs(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function $e(e){return document.createElement(e)}function wt(e){return document.createTextNode(e)}function zt(){return wt(" ")}function cu(){return wt("")}function Hs(e,t,r,i){return e.addEventListener(t,r,i),()=>e.removeEventListener(t,r,i)}function Ue(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function uu(e){return Array.from(e.childNodes)}function di(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let pi;function ui(e){pi=e}function Vs(){if(!pi)throw new Error("Function called outside component initialization");return pi}function ks(e){Vs().$$.on_mount.push(e)}function hu(e){Vs().$$.on_destroy.push(e)}const si=[],zo=[],pn=[],Ho=[],lu=Promise.resolve();let Ia=!1;function fu(){Ia||(Ia=!0,lu.then(Ws))}function Oa(e){pn.push(e)}const _a=new Set;let un=0;function Ws(){const e=pi;do{for(;un<si.length;){const t=si[un];un++,ui(t),du(t.$$)}for(ui(null),si.length=0,un=0;zo.length;)zo.pop()();for(let t=0;t<pn.length;t+=1){const r=pn[t];_a.has(r)||(_a.add(r),r())}pn.length=0}while(si.length);for(;Ho.length;)Ho.pop()();Ia=!1,_a.clear(),ui(e)}function du(e){if(e.fragment!==null){e.update(),en(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Oa)}}const mn=new Set;let vr;function pu(){vr={r:0,c:[],p:vr}}function mu(){vr.r||en(vr.c),vr=vr.p}function Cr(e,t){e&&e.i&&(mn.delete(e),e.i(t))}function vn(e,t,r,i){if(e&&e.o){if(mn.has(e))return;mn.add(e),vr.c.push(()=>{mn.delete(e),i&&(r&&e.d(1),i())}),e.o(t)}else i&&i()}function Xs(e){e&&e.c()}function wo(e,t,r,i){const{fragment:n,on_mount:a,on_destroy:o,after_update:s}=e.$$;n&&n.m(t,r),i||Oa(()=>{const c=a.map(Gs).filter(nu);o?o.push(...c):en(c),e.$$.on_mount=[]}),s.forEach(Oa)}function bo(e,t){const r=e.$$;r.fragment!==null&&(en(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function vu(e,t){e.$$.dirty[0]===-1&&(si.push(e),fu(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Mo(e,t,r,i,n,a,o,s=[-1]){const c=pi;ui(e);const u=e.$$={fragment:null,ctx:null,props:a,update:or,not_equal:n,bound:Go(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Go(),dirty:s,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let h=!1;if(u.ctx=r?r(e,t.props||{},(l,f,...d)=>{const p=d.length?d[0]:f;return u.ctx&&n(u.ctx[l],u.ctx[l]=p)&&(!u.skip_bound&&u.bound[l]&&u.bound[l](p),h&&vu(e,l)),f}):[],u.update(),h=!0,en(u.before_update),u.fragment=i?i(u.ctx):!1,t.target){if(t.hydrate){const l=uu(t.target);u.fragment&&u.fragment.l(l),l.forEach(Ze)}else u.fragment&&u.fragment.c();t.intro&&Cr(e.$$.fragment),wo(e,t.target,t.anchor,t.customElement),Ws()}ui(c)}class Eo{$destroy(){bo(this,1),this.$destroy=or}$on(t,r){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(r),()=>{const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!au(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ar=[];function ha(e,t=or){let r;const i=new Set;function n(s){if(ua(e,s)&&(e=s,r)){const c=!Ar.length;for(const u of i)u[1](),Ar.push(u,e);if(c){for(let u=0;u<Ar.length;u+=2)Ar[u][0](Ar[u+1]);Ar.length=0}}}function a(s){n(s(e))}function o(s,c=or){const u=[s,c];return i.add(u),i.size===1&&(r=t(n)||or),s(e),()=>{i.delete(u),i.size===0&&(r(),r=null)}}return{set:n,update:a,subscribe:o}}const js=ha(!1),Da=ha(""),Vo=ha({fps:30,width:640,height:480,quality:1,workers:1,tolerance:100}),gu=ha(!1),yu=()=>!window.invokeNative,Fa=(e,t=0)=>{if(yu())for(const r of e)setTimeout(()=>{window.dispatchEvent(new MessageEvent("message",{data:{action:r.action,data:r.data}}))},t)};function ko(e,t,r){const i=e.slice();return i[4]=t[r],i}function Wo(e,t,r){const i=e.slice();return i[7]=t[r],i}function Xo(e){let t,r=e[1],i=[];for(let n=0;n<r.length;n+=1)i[n]=qo(ko(e,r,n));return{c(){t=$e("div");for(let n=0;n<i.length;n+=1)i[n].c();Ue(t,"class","w-fit h-fit bg-gray-600 p-2 ")},m(n,a){Qe(n,t,a);for(let o=0;o<i.length;o+=1)i[o].m(t,null)},p(n,a){if(a&2){r=n[1];let o;for(o=0;o<r.length;o+=1){const s=ko(n,r,o);i[o]?i[o].p(s,a):(i[o]=qo(s),i[o].c(),i[o].m(t,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=r.length}},d(n){n&&Ze(t),zs(i,n)}}}function jo(e){let t,r=e[7].name+"",i,n,a;function o(){return e[3](e[7])}return{c(){t=$e("button"),i=wt(r),Ue(t,"class","bg-blue-500 text-white p-2")},m(s,c){Qe(s,t,c),ze(t,i),n||(a=Hs(t,"click",o),n=!0)},p(s,c){e=s},d(s){s&&Ze(t),n=!1,a()}}}function qo(e){let t,r,i=e[4].component+"",n,a,o,s=e[4].actions,c=[];for(let u=0;u<s.length;u+=1)c[u]=jo(Wo(e,s,u));return{c(){t=$e("div"),r=$e("p"),n=wt(i),a=zt();for(let u=0;u<c.length;u+=1)c[u].c();o=zt(),Ue(r,"class","text-white"),Ue(t,"class","flex flex-row gap-2 items-center m-1")},m(u,h){Qe(u,t,h),ze(t,r),ze(r,n),ze(t,a);for(let l=0;l<c.length;l+=1)c[l].m(t,null);ze(t,o)},p(u,h){if(h&2){s=u[4].actions;let l;for(l=0;l<s.length;l+=1){const f=Wo(u,s,l);c[l]?c[l].p(f,h):(c[l]=jo(f),c[l].c(),c[l].m(t,o))}for(;l<c.length;l+=1)c[l].d(1);c.length=s.length}},d(u){u&&Ze(t),zs(c,u)}}}function xu(e){let t,r,i,n,a,o=e[0]&&Xo(e);return{c(){t=$e("div"),r=$e("button"),r.textContent="Show",i=zt(),o&&o.c(),Ue(r,"class","bg-red-500 text-white p-2"),Ue(t,"class","absolute top-0 left-1/2 z-[1000]")},m(s,c){Qe(s,t,c),ze(t,r),ze(t,i),o&&o.m(t,null),n||(a=Hs(r,"click",e[2]),n=!0)},p(s,[c]){s[0]?o?o.p(s,c):(o=Xo(s),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},i:or,o:or,d(s){s&&Ze(t),o&&o.d(),n=!1,a()}}}function _u(e,t,r){let i=!1;return[i,[{component:"Show",actions:[{name:"show",action:"setVisible",data:!0},{name:"hide",action:"setVisible",data:!1}]}],()=>{r(0,i=!i)},s=>{if(s.custom==!0){s.customFunction();return}Fa([{action:s.action,data:s.data}])}]}class wu extends Eo{constructor(t){super(),Mo(this,t,_u,xu,ua,{})}}function gn(e,t){const r=i=>{const{action:n,data:a}=i.data;n===e&&t(a)};ks(()=>window.addEventListener("message",r)),hu(()=>window.removeEventListener("message",r))}let Na=!1;js.subscribe(e=>{Na=e});let qs="";Da.subscribe(e=>{qs=e});async function Yo(e,t={},r){if(Na==!0&&r||Na==!0)return Promise.resolve(r||{});const i={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},n=window.GetParentResourceName?window.GetParentResourceName():qs;return await(await fetch(`https://${n}/${e}`,i)).json()}function bu(e){return Fa([{action:"setVisible",data:!0}]),Fa([{action:"setBrowserMode",data:!0}]),gn("converter:openMenu",t=>{gu.set(t)}),[]}class Mu extends Eo{constructor(t){super(),Mo(this,t,bu,null,ua,{})}}function Zo(e){let t,r,i,n,a,o,s,c,u=e[5]&&Jo(e);function h(d,p){if(d[3])return Au;if(d[4])return Su}let l=h(e),f=l&&l(e);return{c(){t=$e("div"),r=$e("div"),i=$e("div"),n=$e("div"),n.innerHTML='<p class="text-white">You don&#39;t need to have FiveM as the active window to record. Go chill and let the magic happen by itself!</p>',a=zt(),o=$e("div"),o.innerHTML='<p class="text-white">Recording Info</p>',s=zt(),u&&u.c(),c=zt(),f&&f.c(),Ue(n,"class","h-full w-full flex flex-col justify-center items-center"),Ue(o,"class","h-full w-full flex flex-col justify-center items-center"),Ue(i,"class","h-[25%] gap-[1vh] w-full flex flex-col justify-center items-center "),Ue(r,"class","w-full h-[20%] top-0 right-0 absolute flex flex-col gap-[0.25vh] justify-center items-center"),Ue(t,"class","w-screen h-screen flex justify-center items-center")},m(d,p){Qe(d,t,p),ze(t,r),ze(r,i),ze(i,n),ze(i,a),ze(i,o),ze(i,s),u&&u.m(i,null),ze(i,c),f&&f.m(i,null)},p(d,p){d[5]?u?u.p(d,p):(u=Jo(d),u.c(),u.m(i,c)):u&&(u.d(1),u=null),l===(l=h(d))&&f?f.p(d,p):(f&&f.d(1),f=l&&l(d),f&&(f.c(),f.m(i,null)))},d(d){d&&Ze(t),u&&u.d(),f&&f.d()}}}function Jo(e){let t,r;function i(o,s){if(o[3])return Tu;if(o[4])return Eu}let n=i(e),a=n&&n(e);return{c(){t=$e("div"),r=$e("p"),a&&a.c(),Ue(r,"class","text-white"),Ue(t,"class","h-full w-full flex flex-col justify-center items-center")},m(o,s){Qe(o,t,s),ze(t,r),a&&a.m(r,null)},p(o,s){n===(n=i(o))&&a?a.p(o,s):(a&&a.d(1),a=n&&n(o),a&&(a.c(),a.m(r,null)))},d(o){o&&Ze(t),a&&a.d()}}}function Eu(e){let t,r;return{c(){t=wt("Rendering: "),r=wt(e[5])},m(i,n){Qe(i,t,n),Qe(i,r,n)},p(i,n){n&32&&di(r,i[5])},d(i){i&&Ze(t),i&&Ze(r)}}}function Tu(e){let t,r;return{c(){t=wt("Capturing: "),r=wt(e[5])},m(i,n){Qe(i,t,n),Qe(i,r,n)},p(i,n){n&32&&di(r,i[5])},d(i){i&&Ze(t),i&&Ze(r)}}}function Su(e){let t,r,i,n,a,o;return{c(){t=$e("div"),r=$e("p"),i=wt("Frames Processed: "),n=wt(e[1]),a=wt(" / "),o=wt(e[2]),Ue(r,"class","text-white"),Ue(t,"class","h-full w-full flex justify-center items-center")},m(s,c){Qe(s,t,c),ze(t,r),ze(r,i),ze(r,n),ze(r,a),ze(r,o)},p(s,c){c&2&&di(n,s[1]),c&4&&di(o,s[2])},d(s){s&&Ze(t)}}}function Au(e){let t,r,i,n;return{c(){t=$e("div"),r=$e("p"),i=wt("Frames Captured: "),n=wt(e[0]),Ue(r,"class","text-white"),Ue(t,"class","h-full w-full flex justify-center items-center")},m(a,o){Qe(a,t,o),ze(t,r),ze(r,i),ze(r,n)},p(a,o){o&1&&di(n,a[0])},d(a){a&&Ze(t)}}}function Qo(e){let t,r,i,n;return t=new wu({}),{c(){Xs(t.$$.fragment),r=zt(),i=$e("div"),Ue(i,"class","absolute w-screen h-screen top-0 left-0 dev-image svelte-1qagfl8")},m(a,o){wo(t,a,o),Qe(a,r,o),Qe(a,i,o),n=!0},i(a){n||(Cr(t.$$.fragment,a),n=!0)},o(a){vn(t.$$.fragment,a),n=!1},d(a){bo(t,a),a&&Ze(r),a&&Ze(i)}}}function Lu(e){let t,r,i,n,a,o,s,c,u,h=(e[3]||e[4])&&Zo(e);o=new Mu({});let l=e[7]&&Qo();return{c(){t=$e("canvas"),n=zt(),h&&h.c(),a=zt(),Xs(o.$$.fragment),s=zt(),l&&l.c(),c=cu(),Ue(t,"id","screenRecord"),Ue(t,"class","hidden absolute svelte-1qagfl8"),Ue(t,"width",r=e[6].width),Ue(t,"height",i=e[6].height)},m(f,d){Qe(f,t,d),Qe(f,n,d),h&&h.m(f,d),Qe(f,a,d),wo(o,f,d),Qe(f,s,d),l&&l.m(f,d),Qe(f,c,d),u=!0},p(f,[d]){(!u||d&64&&r!==(r=f[6].width))&&Ue(t,"width",r),(!u||d&64&&i!==(i=f[6].height))&&Ue(t,"height",i),f[3]||f[4]?h?h.p(f,d):(h=Zo(f),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null),f[7]?l?d&128&&Cr(l,1):(l=Qo(),l.c(),Cr(l,1),l.m(c.parentNode,c)):l&&(pu(),vn(l,1,1,()=>{l=null}),mu())},i(f){u||(Cr(o.$$.fragment,f),Cr(l),u=!0)},o(f){vn(o.$$.fragment,f),vn(l),u=!1},d(f){f&&Ze(t),f&&Ze(n),h&&h.d(f),f&&Ze(a),bo(o,f),f&&Ze(s),l&&l.d(f),f&&Ze(c)}}}function Ru(e,t,r){let i,n,a;xa(e,Vo,N=>r(6,i=N)),xa(e,Da,N=>r(14,n=N)),xa(e,js,N=>r(7,a=N)),su(Da,n="Svelte-Template",n);let o=null,s=0,c=0,u=0,h=!1,l=!1,f="placeholder",d=0,p=!1,m,v,g=null;ks(async()=>{try{const N=await Yo("getConfig");Vo.set(N)}catch(N){console.error("Failed to fetch config:",N)}});async function _(){if(h||l){console.warn("Recording is already in progress.");return}if(F(),m=document.getElementById("screenRecord"),!m)throw new Error("Canvas element not found");if(v=m.getContext("2d"),!v)throw new Error("Unable to get canvas context");r(3,h=!0),y(m),S(m),await w(m),L()}async function w(N){if(!p){for(;typeof MainRender=="undefined"||!MainRender;)await new Promise(G=>setTimeout(G,100));p=!0,MainRender.renderToTarget(N),MainRender.animate(),MainRender.resize(!0)}}gn("Unrender",()=>{p=!1,MainRender&&MainRender.stop()});function y(N){N.width=i.width,N.height=i.height}function S(N){const{innerWidth:G,innerHeight:H}=window;N.style.position="absolute",N.style.left=`${(G-i.width)/2}px`,N.style.top=`${(H-i.height)/2}px`}function L(){const N=1e3/i.fps;o=window.setInterval(()=>{if(!h||!v)return;const G=m.toDataURL("image/png");I(G,d),d++,r(0,s++,s)},N)}function I(N,G){fetch("http://localhost:30120/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({frame:N,frameIndex:G,width:i.width,height:i.height,delay:1e3/i.fps,tolerance:i.tolerance,quality:i.quality,fileName:f,isLastFrame:!1})}).then(H=>H.json()).then(H=>{H.status!=="ok"&&(console.error("Failed to send frame to server:",H.error),F("error"))}).catch(H=>{console.error("Error sending frame to server:",H),F("error")})}async function P(){try{await fetch("http://localhost:30120/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({frame:null,frameIndex:d,width:i.width,height:i.height,delay:1e3/i.fps,tolerance:i.tolerance,quality:i.quality,fileName:f,isLastFrame:!0})}),A()}catch(N){console.error("Error finalizing GIF recording:",N),F("error")}}function A(){r(4,l=!0),g=window.setInterval(async()=>{try{const G=await(await fetch(`http://localhost:30120/status?fileName=${encodeURIComponent(f)}`)).json();G.status==="complete"&&l?(r(4,l=!1),clearInterval(g),g=null,F("ok")):G.status==="error"?(console.error(`Error processing GIF for ${f}`),r(4,l=!1),clearInterval(g),g=null,F("error")):G.status==="processing"?(r(1,c=Math.max(0,G.framesProcessed)),r(2,u=Math.max(0,G.totalFrames))):console.log(`Processing status for ${f}: ${G.status}`)}catch(N){console.error("Error checking processing status:",N)}},1e3)}async function D(){o&&(clearInterval(o),o=null),r(3,h=!1),await P()}function F(N){r(0,s=0),r(1,c=0),r(2,u=0),d=0,r(4,l=!1),r(3,h=!1),console.log("Recording complete:",N),g&&(clearInterval(g),g=null),v&&m&&v.clearRect(0,0,m.width,m.height),N&&Yo("finishGifProcessing",N)}return gn("StartRecording",N=>{_(),r(5,f=N)}),gn("StopRecording",D),[s,c,u,h,l,f,i,a]}class Cu extends Eo{constructor(t){super(),Mo(this,t,Ru,Lu,ua,{})}}Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52));Number.isInteger===void 0&&(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e});Math.sign===void 0&&(Math.sign=function(e){return e<0?-1:e>0?1:+e});"name"in Function.prototype||Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});Object.assign===void 0&&function(){Object.assign=function(e){if(e==null)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),r=1;r<arguments.length;r++){var i=arguments[r];if(i!=null)for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}}();function pr(){}Object.assign(pr.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});var r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;var r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners!==void 0){var r=this._listeners,i=r[e];if(i!==void 0){var n=i.indexOf(t);n!==-1&&i.splice(n,1)}}},dispatchEvent:function(e){if(this._listeners!==void 0){var t=this._listeners,r=t[e.type];if(r!==void 0){e.target=this;for(var i=r.slice(0),n=0,a=i.length;n<a;n++)i[n].call(this,e)}}}});var Pu=0,$o=1,Iu=2,Ys=1,Ou=2,tn=0,ft=1,rn=2,Zs=1,Js=0,Qs=1,ri=2,hi=0,Or=1,Ba=2,Ua=3,Ga=4,$s=5,Pr=100,Du=101,Fu=102,wa=103,ba=104,Nu=200,Bu=201,Uu=202,Gu=203,Ks=204,ec=205,zu=206,Hu=207,Vu=208,ku=209,Wu=210,Xu=0,ju=1,qu=2,za=3,Yu=4,Zu=5,Ju=6,Qu=7,la=0,$u=1,Ku=2,Ma=0,tc=1,eh=2,th=3,rh=4,ih=5,To=300,So=301,Ha=302,rc=303,Va=304,ic=305,Ao=306,Lo=307,nr=1e3,Ct=1001,Fr=1002,it=1003,Ro=1004,Co=1005,ot=1006,nc=1007,fa=1008,mi=1009,nh=1010,ah=1011,xn=1012,oh=1013,ac=1014,vi=1015,Po=1016,sh=1017,ch=1018,uh=1019,_n=1020,hh=1021,xr=1022,Ht=1023,lh=1024,fh=1025,Dr=1026,gi=1027,dh=1028,Ko=33776,es=33777,ts=33778,rs=33779,is=35840,ns=35841,as=35842,os=35843,ph=36196,mh=37808,vh=37809,gh=37810,yh=37811,xh=37812,_h=37813,wh=37814,bh=37815,Mh=37816,Eh=37817,Th=37818,Sh=37819,Ah=37820,Lh=37821,Rh=2200,Ch=2201,Ph=2202,wn=2300,yn=2301,Ea=2302,Nr=2400,Ir=2401,bn=2402,oc=0,Ih=1,Oh=2,Mn=3e3,Dh=3001,sc=3007,Fh=3002,Nh=3004,Bh=3005,Uh=3006,Gh=3200,zh=3201,da=0,Hh=1,ge={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){for(var e=[],t=0;t<256;t++)e[t]=(t<16?"0":"")+t.toString(16);return function(){var i=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,o=Math.random()*4294967295|0,s=e[i&255]+e[i>>8&255]+e[i>>16&255]+e[i>>24&255]+"-"+e[n&255]+e[n>>8&255]+"-"+e[n>>16&15|64]+e[n>>24&255]+"-"+e[a&63|128]+e[a>>8&255]+"-"+e[a>>16&255]+e[a>>24&255]+e[o&255]+e[o>>8&255]+e[o>>16&255]+e[o>>24&255];return s.toUpperCase()}}(),clamp:function(e,t,r){return Math.max(t,Math.min(r,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,r,i,n){return i+(e-t)*(n-i)/(r-t)},lerp:function(e,t,r){return(1-r)*e+r*t},smoothstep:function(e,t,r){return e<=t?0:e>=r?1:(e=(e-t)/(r-t),e*e*(3-2*e))},smootherstep:function(e,t,r){return e<=t?0:e>=r?1:(e=(e-t)/(r-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},degToRad:function(e){return e*ge.DEG2RAD},radToDeg:function(e){return e*ge.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)===0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}};function V(e,t){this.x=e||0,this.y=t||0}Object.defineProperties(V.prototype,{width:{get:function(){return this.x},set:function(e){this.x=e}},height:{get:function(){return this.y},set:function(e){this.y=e}}});Object.assign(V.prototype,{isVector2:!0,set:function(e,t){return this.x=e,this.y=t,this},setScalar:function(e){return this.x=e,this.y=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return this.multiplyScalar(1/e)},applyMatrix3:function(e){var t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this},clampScalar:function(){var e=new V,t=new V;return function(i,n){return e.set(i,i),t.set(n,n),this.clamp(e,t)}}(),clampLength:function(e,t){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},cross:function(e){return this.x*e.y-this.y*e.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var e=Math.atan2(this.y,this.x);return e<0&&(e+=2*Math.PI),e},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,r=this.y-e.y;return t*t+r*r},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,r){return this.subVectors(t,e).multiplyScalar(r).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromBufferAttribute:function(e,t,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this},rotateAround:function(e,t){var r=Math.cos(t),i=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*r-a*i+e.x,this.y=n*i+a*r+e.y,this}});function fe(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Object.assign(fe.prototype,{isMatrix4:!0,set:function(e,t,r,i,n,a,o,s,c,u,h,l,f,d,p,m){var v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=i,v[1]=n,v[5]=a,v[9]=o,v[13]=s,v[2]=c,v[6]=u,v[10]=h,v[14]=l,v[3]=f,v[7]=d,v[11]=p,v[15]=m,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new fe().fromArray(this.elements)},copy:function(e){var t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this},copyPosition:function(e){var t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this},extractBasis:function(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this},makeBasis:function(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this},extractRotation:function(){var e=new b;return function(r){var i=this.elements,n=r.elements,a=1/e.setFromMatrixColumn(r,0).length(),o=1/e.setFromMatrixColumn(r,1).length(),s=1/e.setFromMatrixColumn(r,2).length();return i[0]=n[0]*a,i[1]=n[1]*a,i[2]=n[2]*a,i[3]=0,i[4]=n[4]*o,i[5]=n[5]*o,i[6]=n[6]*o,i[7]=0,i[8]=n[8]*s,i[9]=n[9]*s,i[10]=n[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}}(),makeRotationFromEuler:function(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var t=this.elements,r=e.x,i=e.y,n=e.z,a=Math.cos(r),o=Math.sin(r),s=Math.cos(i),c=Math.sin(i),u=Math.cos(n),h=Math.sin(n);if(e.order==="XYZ"){var l=a*u,f=a*h,d=o*u,p=o*h;t[0]=s*u,t[4]=-s*h,t[8]=c,t[1]=f+d*c,t[5]=l-p*c,t[9]=-o*s,t[2]=p-l*c,t[6]=d+f*c,t[10]=a*s}else if(e.order==="YXZ"){var m=s*u,v=s*h,g=c*u,_=c*h;t[0]=m+_*o,t[4]=g*o-v,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=v*o-g,t[6]=_+m*o,t[10]=a*s}else if(e.order==="ZXY"){var m=s*u,v=s*h,g=c*u,_=c*h;t[0]=m-_*o,t[4]=-a*h,t[8]=g+v*o,t[1]=v+g*o,t[5]=a*u,t[9]=_-m*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order==="ZYX"){var l=a*u,f=a*h,d=o*u,p=o*h;t[0]=s*u,t[4]=d*c-f,t[8]=l*c+p,t[1]=s*h,t[5]=p*c+l,t[9]=f*c-d,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order==="YZX"){var w=a*s,y=a*c,S=o*s,L=o*c;t[0]=s*u,t[4]=L-w*h,t[8]=S*h+y,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=y*h+S,t[10]=w-L*h}else if(e.order==="XZY"){var w=a*s,y=a*c,S=o*s,L=o*c;t[0]=s*u,t[4]=-h,t[8]=c*u,t[1]=w*h+L,t[5]=a*u,t[9]=y*h-S,t[2]=S*h-y,t[6]=o*u,t[10]=L*h+w}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromQuaternion:function(){var e=new b(0,0,0),t=new b(1,1,1);return function(i){return this.compose(e,i,t)}}(),lookAt:function(){var e=new b,t=new b,r=new b;return function(n,a,o){var s=this.elements;return r.subVectors(n,a),r.lengthSq()===0&&(r.z=1),r.normalize(),e.crossVectors(o,r),e.lengthSq()===0&&(Math.abs(o.z)===1?r.x+=1e-4:r.z+=1e-4,r.normalize(),e.crossVectors(o,r)),e.normalize(),t.crossVectors(r,e),s[0]=e.x,s[4]=t.x,s[8]=r.x,s[1]=e.y,s[5]=t.y,s[9]=r.y,s[2]=e.z,s[6]=t.z,s[10]=r.z,this}}(),multiply:function(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){var r=e.elements,i=t.elements,n=this.elements,a=r[0],o=r[4],s=r[8],c=r[12],u=r[1],h=r[5],l=r[9],f=r[13],d=r[2],p=r[6],m=r[10],v=r[14],g=r[3],_=r[7],w=r[11],y=r[15],S=i[0],L=i[4],I=i[8],P=i[12],A=i[1],D=i[5],F=i[9],N=i[13],G=i[2],H=i[6],z=i[10],J=i[14],Y=i[3],q=i[7],E=i[11],T=i[15];return n[0]=a*S+o*A+s*G+c*Y,n[4]=a*L+o*D+s*H+c*q,n[8]=a*I+o*F+s*z+c*E,n[12]=a*P+o*N+s*J+c*T,n[1]=u*S+h*A+l*G+f*Y,n[5]=u*L+h*D+l*H+f*q,n[9]=u*I+h*F+l*z+f*E,n[13]=u*P+h*N+l*J+f*T,n[2]=d*S+p*A+m*G+v*Y,n[6]=d*L+p*D+m*H+v*q,n[10]=d*I+p*F+m*z+v*E,n[14]=d*P+p*N+m*J+v*T,n[3]=g*S+_*A+w*G+y*Y,n[7]=g*L+_*D+w*H+y*q,n[11]=g*I+_*F+w*z+y*E,n[15]=g*P+_*N+w*J+y*T,this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},applyToBufferAttribute:function(){var e=new b;return function(r){for(var i=0,n=r.count;i<n;i++)e.x=r.getX(i),e.y=r.getY(i),e.z=r.getZ(i),e.applyMatrix4(this),r.setXYZ(i,e.x,e.y,e.z);return r}}(),determinant:function(){var e=this.elements,t=e[0],r=e[4],i=e[8],n=e[12],a=e[1],o=e[5],s=e[9],c=e[13],u=e[2],h=e[6],l=e[10],f=e[14],d=e[3],p=e[7],m=e[11],v=e[15];return d*(+n*s*h-i*c*h-n*o*l+r*c*l+i*o*f-r*s*f)+p*(+t*s*f-t*c*l+n*a*l-i*a*f+i*c*u-n*s*u)+m*(+t*c*h-t*o*f-n*a*h+r*a*f+n*o*u-r*c*u)+v*(-i*o*u-t*s*h+t*o*l+i*a*h-r*a*l+r*s*u)},transpose:function(){var e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(e){var t=this.elements;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this},getInverse:function(e,t){var r=this.elements,i=e.elements,n=i[0],a=i[1],o=i[2],s=i[3],c=i[4],u=i[5],h=i[6],l=i[7],f=i[8],d=i[9],p=i[10],m=i[11],v=i[12],g=i[13],_=i[14],w=i[15],y=d*_*l-g*p*l+g*h*m-u*_*m-d*h*w+u*p*w,S=v*p*l-f*_*l-v*h*m+c*_*m+f*h*w-c*p*w,L=f*g*l-v*d*l+v*u*m-c*g*m-f*u*w+c*d*w,I=v*d*h-f*g*h-v*u*p+c*g*p+f*u*_-c*d*_,P=n*y+a*S+o*L+s*I;if(P===0){var A="THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";if(t===!0)throw new Error(A);return console.warn(A),this.identity()}var D=1/P;return r[0]=y*D,r[1]=(g*p*s-d*_*s-g*o*m+a*_*m+d*o*w-a*p*w)*D,r[2]=(u*_*s-g*h*s+g*o*l-a*_*l-u*o*w+a*h*w)*D,r[3]=(d*h*s-u*p*s-d*o*l+a*p*l+u*o*m-a*h*m)*D,r[4]=S*D,r[5]=(f*_*s-v*p*s+v*o*m-n*_*m-f*o*w+n*p*w)*D,r[6]=(v*h*s-c*_*s-v*o*l+n*_*l+c*o*w-n*h*w)*D,r[7]=(c*p*s-f*h*s+f*o*l-n*p*l-c*o*m+n*h*m)*D,r[8]=L*D,r[9]=(v*d*s-f*g*s-v*a*m+n*g*m+f*a*w-n*d*w)*D,r[10]=(c*g*s-v*u*s+v*a*l-n*g*l-c*a*w+n*u*w)*D,r[11]=(f*u*s-c*d*s-f*a*l+n*d*l+c*a*m-n*u*m)*D,r[12]=I*D,r[13]=(f*g*o-v*d*o+v*a*p-n*g*p-f*a*_+n*d*_)*D,r[14]=(v*u*o-c*g*o-v*a*h+n*g*h+c*a*_-n*u*_)*D,r[15]=(c*d*o-f*u*o+f*a*h-n*d*h-c*a*p+n*u*p)*D,this},scale:function(e){var t=this.elements,r=e.x,i=e.y,n=e.z;return t[0]*=r,t[4]*=i,t[8]*=n,t[1]*=r,t[5]*=i,t[9]*=n,t[2]*=r,t[6]*=i,t[10]*=n,t[3]*=r,t[7]*=i,t[11]*=n,this},getMaxScaleOnAxis:function(){var e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))},makeTranslation:function(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this},makeRotationX:function(e){var t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this},makeRotationY:function(e){var t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this},makeRotationZ:function(e){var t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,t){var r=Math.cos(t),i=Math.sin(t),n=1-r,a=e.x,o=e.y,s=e.z,c=n*a,u=n*o;return this.set(c*a+r,c*o-i*s,c*s+i*o,0,c*o+i*s,u*o+r,u*s-i*a,0,c*s-i*o,u*s+i*a,n*s*s+r,0,0,0,0,1),this},makeScale:function(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this},makeShear:function(e,t,r){return this.set(1,t,r,0,e,1,r,0,e,t,1,0,0,0,0,1),this},compose:function(e,t,r){var i=this.elements,n=t._x,a=t._y,o=t._z,s=t._w,c=n+n,u=a+a,h=o+o,l=n*c,f=n*u,d=n*h,p=a*u,m=a*h,v=o*h,g=s*c,_=s*u,w=s*h,y=r.x,S=r.y,L=r.z;return i[0]=(1-(p+v))*y,i[1]=(f+w)*y,i[2]=(d-_)*y,i[3]=0,i[4]=(f-w)*S,i[5]=(1-(l+v))*S,i[6]=(m+g)*S,i[7]=0,i[8]=(d+_)*L,i[9]=(m-g)*L,i[10]=(1-(l+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this},decompose:function(){var e=new b,t=new fe;return function(i,n,a){var o=this.elements,s=e.set(o[0],o[1],o[2]).length(),c=e.set(o[4],o[5],o[6]).length(),u=e.set(o[8],o[9],o[10]).length(),h=this.determinant();h<0&&(s=-s),i.x=o[12],i.y=o[13],i.z=o[14],t.copy(this);var l=1/s,f=1/c,d=1/u;return t.elements[0]*=l,t.elements[1]*=l,t.elements[2]*=l,t.elements[4]*=f,t.elements[5]*=f,t.elements[6]*=f,t.elements[8]*=d,t.elements[9]*=d,t.elements[10]*=d,n.setFromRotationMatrix(t),a.x=s,a.y=c,a.z=u,this}}(),makePerspective:function(e,t,r,i,n,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var o=this.elements,s=2*n/(t-e),c=2*n/(r-i),u=(t+e)/(t-e),h=(r+i)/(r-i),l=-(a+n)/(a-n),f=-2*a*n/(a-n);return o[0]=s,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=l,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this},makeOrthographic:function(e,t,r,i,n,a){var o=this.elements,s=1/(t-e),c=1/(r-i),u=1/(a-n),h=(t+e)*s,l=(r+i)*c,f=(a+n)*u;return o[0]=2*s,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-l,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this},equals:function(e){for(var t=this.elements,r=e.elements,i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(var r=0;r<16;r++)this.elements[r]=e[r+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);var r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}});function rt(e,t,r,i){this._x=e||0,this._y=t||0,this._z=r||0,this._w=i!==void 0?i:1}Object.assign(rt,{slerp:function(e,t,r,i){return r.copy(e).slerp(t,i)},slerpFlat:function(e,t,r,i,n,a,o){var s=r[i+0],c=r[i+1],u=r[i+2],h=r[i+3],l=n[a+0],f=n[a+1],d=n[a+2],p=n[a+3];if(h!==p||s!==l||c!==f||u!==d){var m=1-o,v=s*l+c*f+u*d+h*p,g=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){var w=Math.sqrt(_),y=Math.atan2(w,v*g);m=Math.sin(m*y)/w,o=Math.sin(o*y)/w}var S=o*g;if(s=s*m+l*S,c=c*m+f*S,u=u*m+d*S,h=h*m+p*S,m===1-o){var L=1/Math.sqrt(s*s+c*c+u*u+h*h);s*=L,c*=L,u*=L,h*=L}}e[t]=s,e[t+1]=c,e[t+2]=u,e[t+3]=h}});Object.defineProperties(rt.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this.onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this.onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this.onChangeCallback()}},w:{get:function(){return this._w},set:function(e){this._w=e,this.onChangeCallback()}}});Object.assign(rt.prototype,{isQuaternion:!0,set:function(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this.onChangeCallback(),this},setFromEuler:function(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var r=e._x,i=e._y,n=e._z,a=e.order,o=Math.cos,s=Math.sin,c=o(r/2),u=o(i/2),h=o(n/2),l=s(r/2),f=s(i/2),d=s(n/2);return a==="XYZ"?(this._x=l*u*h+c*f*d,this._y=c*f*h-l*u*d,this._z=c*u*d+l*f*h,this._w=c*u*h-l*f*d):a==="YXZ"?(this._x=l*u*h+c*f*d,this._y=c*f*h-l*u*d,this._z=c*u*d-l*f*h,this._w=c*u*h+l*f*d):a==="ZXY"?(this._x=l*u*h-c*f*d,this._y=c*f*h+l*u*d,this._z=c*u*d+l*f*h,this._w=c*u*h-l*f*d):a==="ZYX"?(this._x=l*u*h-c*f*d,this._y=c*f*h+l*u*d,this._z=c*u*d-l*f*h,this._w=c*u*h+l*f*d):a==="YZX"?(this._x=l*u*h+c*f*d,this._y=c*f*h+l*u*d,this._z=c*u*d-l*f*h,this._w=c*u*h-l*f*d):a==="XZY"&&(this._x=l*u*h-c*f*d,this._y=c*f*h-l*u*d,this._z=c*u*d+l*f*h,this._w=c*u*h+l*f*d),t!==!1&&this.onChangeCallback(),this},setFromAxisAngle:function(e,t){var r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this.onChangeCallback(),this},setFromRotationMatrix:function(e){var t=e.elements,r=t[0],i=t[4],n=t[8],a=t[1],o=t[5],s=t[9],c=t[2],u=t[6],h=t[10],l=r+o+h,f;return l>0?(f=.5/Math.sqrt(l+1),this._w=.25/f,this._x=(u-s)*f,this._y=(n-c)*f,this._z=(a-i)*f):r>o&&r>h?(f=2*Math.sqrt(1+r-o-h),this._w=(u-s)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(n+c)/f):o>h?(f=2*Math.sqrt(1+o-r-h),this._w=(n-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(s+u)/f):(f=2*Math.sqrt(1+h-r-o),this._w=(a-i)/f,this._x=(n+c)/f,this._y=(s+u)/f,this._z=.25*f),this.onChangeCallback(),this},setFromUnitVectors:function(){var e=new b,t,r=1e-6;return function(n,a){return e===void 0&&(e=new b),t=n.dot(a)+1,t<r?(t=0,Math.abs(n.x)>Math.abs(n.z)?e.set(-n.y,n.x,0):e.set(0,-n.z,n.y)):e.crossVectors(n,a),this._x=e.x,this._y=e.y,this._z=e.z,this._w=t,this.normalize()}}(),angleTo:function(e){return 2*Math.acos(Math.abs(ge.clamp(this.dot(e),-1,1)))},rotateTowards:function(e,t){var r=this.angleTo(e);if(r===0)return this;var i=Math.min(1,t/r);return this.slerp(e,i),this},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this.onChangeCallback(),this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)},premultiply:function(e){return this.multiplyQuaternions(e,this)},multiplyQuaternions:function(e,t){var r=e._x,i=e._y,n=e._z,a=e._w,o=t._x,s=t._y,c=t._z,u=t._w;return this._x=r*u+a*o+i*c-n*s,this._y=i*u+a*s+n*o-r*c,this._z=n*u+a*c+r*s-i*o,this._w=a*u-r*o-i*s-n*c,this.onChangeCallback(),this},slerp:function(e,t){if(t===0)return this;if(t===1)return this.copy(e);var r=this._x,i=this._y,n=this._z,a=this._w,o=a*e._w+r*e._x+i*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=i,this._z=n,this;var s=1-o*o;if(s<=Number.EPSILON){var c=1-t;return this._w=c*a+t*this._w,this._x=c*r+t*this._x,this._y=c*i+t*this._y,this._z=c*n+t*this._z,this.normalize()}var u=Math.sqrt(s),h=Math.atan2(u,o),l=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=a*l+this._w*f,this._x=r*l+this._x*f,this._y=i*l+this._y*f,this._z=n*l+this._z*f,this.onChangeCallback(),this},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return t===void 0&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this.onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},onChange:function(e){return this.onChangeCallback=e,this},onChangeCallback:function(){}});function b(e,t,r){this.x=e||0,this.y=t||0,this.z=r||0}Object.assign(b.prototype,{isVector3:!0,set:function(e,t,r){return this.x=e,this.y=t,this.z=r,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(){var e=new rt;return function(r){return r&&r.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(e.setFromEuler(r))}}(),applyAxisAngle:function(){var e=new rt;return function(r,i){return this.applyQuaternion(e.setFromAxisAngle(r,i))}}(),applyMatrix3:function(e){var t=this.x,r=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*i,this.y=n[1]*t+n[4]*r+n[7]*i,this.z=n[2]*t+n[5]*r+n[8]*i,this},applyMatrix4:function(e){var t=this.x,r=this.y,i=this.z,n=e.elements,a=1/(n[3]*t+n[7]*r+n[11]*i+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*i+n[12])*a,this.y=(n[1]*t+n[5]*r+n[9]*i+n[13])*a,this.z=(n[2]*t+n[6]*r+n[10]*i+n[14])*a,this},applyQuaternion:function(e){var t=this.x,r=this.y,i=this.z,n=e.x,a=e.y,o=e.z,s=e.w,c=s*t+a*i-o*r,u=s*r+o*t-n*i,h=s*i+n*r-a*t,l=-n*t-a*r-o*i;return this.x=c*s+l*-n+u*-o-h*-a,this.y=u*s+l*-a+h*-n-c*-o,this.z=h*s+l*-o+c*-a-u*-n,this},project:function(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)},unproject:function(){var e=new fe;return function(r){return this.applyMatrix4(e.getInverse(r.projectionMatrix)).applyMatrix4(r.matrixWorld)}}(),transformDirection:function(e){var t=this.x,r=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*i,this.y=n[1]*t+n[5]*r+n[9]*i,this.z=n[2]*t+n[6]*r+n[10]*i,this.normalize()},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this},clampScalar:function(){var e=new b,t=new b;return function(i,n){return e.set(i,i,i),t.set(n,n,n),this.clamp(e,t)}}(),clampLength:function(e,t){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,r){return this.subVectors(t,e).multiplyScalar(r).add(e)},cross:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)},crossVectors:function(e,t){var r=e.x,i=e.y,n=e.z,a=t.x,o=t.y,s=t.z;return this.x=i*s-n*o,this.y=n*a-r*s,this.z=r*o-i*a,this},projectOnVector:function(e){var t=e.dot(this)/e.lengthSq();return this.copy(e).multiplyScalar(t)},projectOnPlane:function(){var e=new b;return function(r){return e.copy(this).projectOnVector(r),this.sub(e)}}(),reflect:function(){var e=new b;return function(r){return this.sub(e.copy(r).multiplyScalar(2*this.dot(r)))}}(),angleTo:function(e){var t=this.dot(e)/Math.sqrt(this.lengthSq()*e.lengthSq());return Math.acos(ge.clamp(t,-1,1))},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)},setFromSpherical:function(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)},setFromSphericalCoords:function(e,t,r){var i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this},setFromCylindrical:function(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)},setFromCylindricalCoords:function(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this},setFromMatrixPosition:function(e){var t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this},setFromMatrixScale:function(e){var t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this},setFromMatrixColumn:function(e,t){return this.fromArray(e.elements,t*4)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromBufferAttribute:function(e,t,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}});function ut(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Object.assign(ut.prototype,{isMatrix3:!0,set:function(e,t,r,i,n,a,o,s,c){var u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=n,u[5]=s,u[6]=r,u[7]=a,u[8]=c,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(e){var t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this},setFromMatrix4:function(e){var t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this},applyToBufferAttribute:function(){var e=new b;return function(r){for(var i=0,n=r.count;i<n;i++)e.x=r.getX(i),e.y=r.getY(i),e.z=r.getZ(i),e.applyMatrix3(this),r.setXYZ(i,e.x,e.y,e.z);return r}}(),multiply:function(e){return this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){var r=e.elements,i=t.elements,n=this.elements,a=r[0],o=r[3],s=r[6],c=r[1],u=r[4],h=r[7],l=r[2],f=r[5],d=r[8],p=i[0],m=i[3],v=i[6],g=i[1],_=i[4],w=i[7],y=i[2],S=i[5],L=i[8];return n[0]=a*p+o*g+s*y,n[3]=a*m+o*_+s*S,n[6]=a*v+o*w+s*L,n[1]=c*p+u*g+h*y,n[4]=c*m+u*_+h*S,n[7]=c*v+u*w+h*L,n[2]=l*p+f*g+d*y,n[5]=l*m+f*_+d*S,n[8]=l*v+f*w+d*L,this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){var e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-r*n*u+r*o*s+i*n*c-i*a*s},getInverse:function(e,t){e&&e.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var r=e.elements,i=this.elements,n=r[0],a=r[1],o=r[2],s=r[3],c=r[4],u=r[5],h=r[6],l=r[7],f=r[8],d=f*c-u*l,p=u*h-f*s,m=l*s-c*h,v=n*d+a*p+o*m;if(v===0){var g="THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";if(t===!0)throw new Error(g);return console.warn(g),this.identity()}var _=1/v;return i[0]=d*_,i[1]=(o*l-f*a)*_,i[2]=(u*a-o*c)*_,i[3]=p*_,i[4]=(f*n-o*h)*_,i[5]=(o*s-u*n)*_,i[6]=m*_,i[7]=(a*h-l*n)*_,i[8]=(c*n-a*s)*_,this},transpose:function(){var e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this},getNormalMatrix:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()},transposeIntoArray:function(e){var t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},setUvTransform:function(e,t,r,i,n,a,o){var s=Math.cos(n),c=Math.sin(n);this.set(r*s,r*c,-r*(s*a+c*o)+a+e,-i*c,i*s,-i*(-c*a+s*o)+o+t,0,0,1)},scale:function(e,t){var r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this},rotate:function(e){var t=Math.cos(e),r=Math.sin(e),i=this.elements,n=i[0],a=i[3],o=i[6],s=i[1],c=i[4],u=i[7];return i[0]=t*n+r*s,i[3]=t*a+r*c,i[6]=t*o+r*u,i[1]=-r*n+t*s,i[4]=-r*a+t*c,i[7]=-r*o+t*u,this},translate:function(e,t){var r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this},equals:function(e){for(var t=this.elements,r=e.elements,i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(var r=0;r<9;r++)this.elements[r]=e[r+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);var r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}});var Lr,_r={getDataURL:function(e){var t;if(typeof HTMLCanvasElement=="undefined")return e.src;if(e instanceof HTMLCanvasElement)t=e;else{Lr===void 0&&(Lr=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Lr.width=e.width,Lr.height=e.height;var r=Lr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Lr}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}},Vh=0;function Ne(e,t,r,i,n,a,o,s,c,u){Object.defineProperty(this,"id",{value:Vh++}),this.uuid=ge.generateUUID(),this.name="",this.image=e!==void 0?e:Ne.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=t!==void 0?t:Ne.DEFAULT_MAPPING,this.wrapS=r!==void 0?r:Ct,this.wrapT=i!==void 0?i:Ct,this.magFilter=n!==void 0?n:ot,this.minFilter=a!==void 0?a:fa,this.anisotropy=c!==void 0?c:1,this.format=o!==void 0?o:Ht,this.type=s!==void 0?s:mi,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u!==void 0?u:Mn,this.version=0,this.onUpdate=null}Ne.DEFAULT_IMAGE=void 0;Ne.DEFAULT_MAPPING=To;Ne.prototype=Object.assign(Object.create(pr.prototype),{constructor:Ne,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){var t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];var r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){var i=this.image;if(i.uuid===void 0&&(i.uuid=ge.generateUUID()),!t&&e.images[i.uuid]===void 0){var n;if(Array.isArray(i)){n=[];for(var a=0,o=i.length;a<o;a++)n.push(_r.getDataURL(i[a]))}else n=_r.getDataURL(i);e.images[i.uuid]={uuid:i.uuid,url:n}}r.image=i.uuid}return t||(e.textures[this.uuid]=r),r},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==To)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}});Object.defineProperty(Ne.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function Fe(e,t,r,i){this.x=e||0,this.y=t||0,this.z=r||0,this.w=i!==void 0?i:1}Object.assign(Fe.prototype,{isVector4:!0,set:function(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this.w=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},applyMatrix4:function(e){var t=this.x,r=this.y,i=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*i+a[12]*n,this.y=a[1]*t+a[5]*r+a[9]*i+a[13]*n,this.z=a[2]*t+a[6]*r+a[10]*i+a[14]*n,this.w=a[3]*t+a[7]*r+a[11]*i+a[15]*n,this},divideScalar:function(e){return this.multiplyScalar(1/e)},setAxisAngleFromQuaternion:function(e){this.w=2*Math.acos(e.w);var t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){var t,r,i,n,a=.01,o=.1,s=e.elements,c=s[0],u=s[4],h=s[8],l=s[1],f=s[5],d=s[9],p=s[2],m=s[6],v=s[10];if(Math.abs(u-l)<a&&Math.abs(h-p)<a&&Math.abs(d-m)<a){if(Math.abs(u+l)<o&&Math.abs(h+p)<o&&Math.abs(d+m)<o&&Math.abs(c+f+v-3)<o)return this.set(1,0,0,0),this;t=Math.PI;var g=(c+1)/2,_=(f+1)/2,w=(v+1)/2,y=(u+l)/4,S=(h+p)/4,L=(d+m)/4;return g>_&&g>w?g<a?(r=0,i=.707106781,n=.707106781):(r=Math.sqrt(g),i=y/r,n=S/r):_>w?_<a?(r=.707106781,i=0,n=.707106781):(i=Math.sqrt(_),r=y/i,n=L/i):w<a?(r=.707106781,i=.707106781,n=0):(n=Math.sqrt(w),r=S/n,i=L/n),this.set(r,i,n,t),this}var I=Math.sqrt((m-d)*(m-d)+(h-p)*(h-p)+(l-u)*(l-u));return Math.abs(I)<.001&&(I=1),this.x=(m-d)/I,this.y=(h-p)/I,this.z=(l-u)/I,this.w=Math.acos((c+f+v-1)/2),this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this},clampScalar:function(){var e,t;return function(i,n){return e===void 0&&(e=new Fe,t=new Fe),e.set(i,i,i,i),t.set(n,n,n,n),this.clamp(e,t)}}(),clampLength:function(e,t){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,r){return this.subVectors(t,e).multiplyScalar(r).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromBufferAttribute:function(e,t,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}});function Nt(e,t,r){this.width=e,this.height=t,this.scissor=new Fe(0,0,e,t),this.scissorTest=!1,this.viewport=new Fe(0,0,e,t),r=r||{},this.texture=new Ne(void 0,void 0,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:ot,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!0,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null}Nt.prototype=Object.assign(Object.create(pr.prototype),{constructor:Nt,isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function ss(e,t,r){Nt.call(this,e,t,r),this.samples=4}ss.prototype=Object.assign(Object.create(Nt.prototype),{constructor:ss,isWebGLMultisampleRenderTarget:!0,copy:function(e){return Nt.prototype.copy.call(this,e),this.samples=e.samples,this}});function yi(e,t,r){Nt.call(this,e,t,r),this.activeCubeFace=0,this.activeMipMapLevel=0}yi.prototype=Object.create(Nt.prototype);yi.prototype.constructor=yi;yi.prototype.isWebGLRenderTargetCube=!0;function Br(e,t,r,i,n,a,o,s,c,u,h,l){Ne.call(this,null,a,o,s,c,u,i,n,h,l),this.image={data:e,width:t,height:r},this.magFilter=c!==void 0?c:it,this.minFilter=u!==void 0?u:it,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}Br.prototype=Object.create(Ne.prototype);Br.prototype.constructor=Br;Br.prototype.isDataTexture=!0;function ur(e,t){this.min=e!==void 0?e:new b(1/0,1/0,1/0),this.max=t!==void 0?t:new b(-1/0,-1/0,-1/0)}Object.assign(ur.prototype,{isBox3:!0,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromArray:function(e){for(var t=1/0,r=1/0,i=1/0,n=-1/0,a=-1/0,o=-1/0,s=0,c=e.length;s<c;s+=3){var u=e[s],h=e[s+1],l=e[s+2];u<t&&(t=u),h<r&&(r=h),l<i&&(i=l),u>n&&(n=u),h>a&&(a=h),l>o&&(o=l)}return this.min.set(t,r,i),this.max.set(n,a,o),this},setFromBufferAttribute:function(e){for(var t=1/0,r=1/0,i=1/0,n=-1/0,a=-1/0,o=-1/0,s=0,c=e.count;s<c;s++){var u=e.getX(s),h=e.getY(s),l=e.getZ(s);u<t&&(t=u),h<r&&(r=h),l<i&&(i=l),u>n&&(n=u),h>a&&(a=h),l>o&&(o=l)}return this.min.set(t,r,i),this.max.set(n,a,o),this},setFromPoints:function(e){this.makeEmpty();for(var t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(){var e=new b;return function(r,i){var n=e.copy(i).multiplyScalar(.5);return this.min.copy(r).sub(n),this.max.copy(r).add(n),this}}(),setFromObject:function(e){return this.makeEmpty(),this.expandByObject(e)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new b),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new b),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},expandByObject:function(){var e,t,r,i=new b;function n(a){var o=a.geometry;if(o!==void 0){if(o.isGeometry){var s=o.vertices;for(t=0,r=s.length;t<r;t++)i.copy(s[t]),i.applyMatrix4(a.matrixWorld),e.expandByPoint(i)}else if(o.isBufferGeometry){var c=o.attributes.position;if(c!==void 0)for(t=0,r=c.count;t<r;t++)i.fromBufferAttribute(c,t).applyMatrix4(a.matrixWorld),e.expandByPoint(i)}}}return function(o){return e=this,o.updateMatrixWorld(!0),o.traverse(n),this}}(),containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new b),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)},intersectsSphere:function(){var e=new b;return function(r){return this.clampPoint(r.center,e),e.distanceToSquared(r.center)<=r.radius*r.radius}}(),intersectsPlane:function(e){var t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant},intersectsTriangle:function(){var e=new b,t=new b,r=new b,i=new b,n=new b,a=new b,o=new b,s=new b,c=new b,u=new b;function h(l){var f,d;for(f=0,d=l.length-3;f<=d;f+=3){o.fromArray(l,f);var p=c.x*Math.abs(o.x)+c.y*Math.abs(o.y)+c.z*Math.abs(o.z),m=e.dot(o),v=t.dot(o),g=r.dot(o);if(Math.max(-Math.max(m,v,g),Math.min(m,v,g))>p)return!1}return!0}return function(f){if(this.isEmpty())return!1;this.getCenter(s),c.subVectors(this.max,s),e.subVectors(f.a,s),t.subVectors(f.b,s),r.subVectors(f.c,s),i.subVectors(t,e),n.subVectors(r,t),a.subVectors(e,r);var d=[0,-i.z,i.y,0,-n.z,n.y,0,-a.z,a.y,i.z,0,-i.x,n.z,0,-n.x,a.z,0,-a.x,-i.y,i.x,0,-n.y,n.x,0,-a.y,a.x,0];return!h(d)||(d=[1,0,0,0,1,0,0,0,1],!h(d))?!1:(u.crossVectors(i,n),d=[u.x,u.y,u.z],h(d))}}(),clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new b),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(){var e=new b;return function(r){var i=e.copy(r).clamp(this.min,this.max);return i.sub(r).length()}}(),getBoundingSphere:function(){var e=new b;return function(r){return r===void 0&&(console.warn("THREE.Box3: .getBoundingSphere() target is now required"),r=new Vt),this.getCenter(r.center),r.radius=this.getSize(e).length()*.5,r}}(),intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(){var e=[new b,new b,new b,new b,new b,new b,new b,new b];return function(r){return this.isEmpty()?this:(e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(r),e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(r),e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(r),e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(r),e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(r),e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(r),e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(r),e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(r),this.setFromPoints(e),this)}}(),translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});function Vt(e,t){this.center=e!==void 0?e:new b,this.radius=t!==void 0?t:0}Object.assign(Vt.prototype,{set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(){var e=new ur;return function(r,i){var n=this.center;i!==void 0?n.copy(i):e.setFromPoints(r).getCenter(n);for(var a=0,o=0,s=r.length;o<s;o++)a=Math.max(a,n.distanceToSquared(r[o]));return this.radius=Math.sqrt(a),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},empty:function(){return this.radius<=0},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){var t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},intersectsBox:function(e){return e.intersectsSphere(this)},intersectsPlane:function(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius},clampPoint:function(e,t){var r=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new b),t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t},getBoundingBox:function(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new ur),e.set(this.center,this.center),e.expandByScalar(this.radius),e},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius}});function Jt(e,t){this.normal=e!==void 0?e:new b(1,0,0),this.constant=t!==void 0?t:0}Object.assign(Jt.prototype,{set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(){var e=new b,t=new b;return function(i,n,a){var o=e.subVectors(a,n).cross(t.subVectors(i,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,i),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){var e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new b),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)},intersectLine:function(){var e=new b;return function(r,i){i===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),i=new b);var n=r.delta(e),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(r.start)===0?i.copy(r.start):void 0;var o=-(r.start.dot(this.normal)+this.constant)/a;if(!(o<0||o>1))return i.copy(n).multiplyScalar(o).add(r.start)}}(),intersectsLine:function(e){var t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0},intersectsBox:function(e){return e.intersectsPlane(this)},intersectsSphere:function(e){return e.intersectsPlane(this)},coplanarPoint:function(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new b),e.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var e=new b,t=new ut;return function(i,n){var a=n||t.getNormalMatrix(i),o=this.coplanarPoint(e).applyMatrix4(i),s=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(s),this}}(),translate:function(e){return this.constant-=e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant===this.constant}});function Io(e,t,r,i,n,a){this.planes=[e!==void 0?e:new Jt,t!==void 0?t:new Jt,r!==void 0?r:new Jt,i!==void 0?i:new Jt,n!==void 0?n:new Jt,a!==void 0?a:new Jt]}Object.assign(Io.prototype,{set:function(e,t,r,i,n,a){var o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(i),o[4].copy(n),o[5].copy(a),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){for(var t=this.planes,r=0;r<6;r++)t[r].copy(e.planes[r]);return this},setFromMatrix:function(e){var t=this.planes,r=e.elements,i=r[0],n=r[1],a=r[2],o=r[3],s=r[4],c=r[5],u=r[6],h=r[7],l=r[8],f=r[9],d=r[10],p=r[11],m=r[12],v=r[13],g=r[14],_=r[15];return t[0].setComponents(o-i,h-s,p-l,_-m).normalize(),t[1].setComponents(o+i,h+s,p+l,_+m).normalize(),t[2].setComponents(o+n,h+c,p+f,_+v).normalize(),t[3].setComponents(o-n,h-c,p-f,_-v).normalize(),t[4].setComponents(o-a,h-u,p-d,_-g).normalize(),t[5].setComponents(o+a,h+u,p+d,_+g).normalize(),this},intersectsObject:function(){var e=new Vt;return function(r){var i=r.geometry;return i.boundingSphere===null&&i.computeBoundingSphere(),e.copy(i.boundingSphere).applyMatrix4(r.matrixWorld),this.intersectsSphere(e)}}(),intersectsSprite:function(){var e=new Vt;return function(r){return e.center.set(0,0,0),e.radius=.7071067811865476,e.applyMatrix4(r.matrixWorld),this.intersectsSphere(e)}}(),intersectsSphere:function(e){for(var t=this.planes,r=e.center,i=-e.radius,n=0;n<6;n++){var a=t[n].distanceToPoint(r);if(a<i)return!1}return!0},intersectsBox:function(){var e=new b;return function(r){for(var i=this.planes,n=0;n<6;n++){var a=i[n];if(e.x=a.normal.x>0?r.max.x:r.min.x,e.y=a.normal.y>0?r.max.y:r.min.y,e.z=a.normal.z>0?r.max.z:r.min.z,a.distanceToPoint(e)<0)return!1}return!0}}(),containsPoint:function(e){for(var t=this.planes,r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}});var kh=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,Wh=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Xh=`
#ifdef ALPHATEST

	if ( diffuseColor.a < ALPHATEST ) discard;

#endif
`,jh=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( PHYSICAL )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );

	#endif

#endif
`,qh=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,Yh=`
vec3 transformed = vec3( position );
`,Zh=`
vec3 objectNormal = vec3( normal );
`,Jh=`
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

#if defined ( PHYSICALLY_CORRECT_LIGHTS )

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	// this is intended to be used on spot and point lights who are represented as luminous intensity
	// but who must be converted to luminous irradiance for surface lighting calculation
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

#else

	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );

	}

	return 1.0;

#endif

}

vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotLH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );

	return ( 1.0 - specularColor ) * fresnel + specularColor;

} // validated

// Microfacet Models for Refraction through Rough Surfaces - equation (34)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {

	// geometry term (normalized) = G(l)\u22C5G(v) / 4(n\u22C5l)(n\u22C5v)
	// also see #12151

	float a2 = pow2( alpha );

	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );

	return 1.0 / ( gl * gv );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	// dotNL and dotNV are explicitly swapped. This is not a mistake.
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );

	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( G * D );

} // validated

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {

	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;

	return specularColor * AB.x + AB.y;

} // validated


float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );

	//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
	//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}

float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
`,Qh=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// http://api.unrealengine.com/attachments/Engine/Rendering/LightingAndShadows/BumpMappingWithoutTangentSpace/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 );

		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,$h=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;

	}

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;

		}

		if ( clipped ) discard;

	#endif

#endif
`,Kh=`
#if NUM_CLIPPING_PLANES > 0

	#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )
		varying vec3 vViewPosition;
	#endif

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,el=`
#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )
	varying vec3 vViewPosition;
#endif
`,tl=`
#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )
	vViewPosition = - mvPosition.xyz;
#endif
`,rl=`
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif
`,il=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`,nl=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`,al=`
#ifdef USE_COLOR

	vColor.xyz = color.xyz;

#endif
`,ol=`
#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6

#define saturate(a) clamp( a, 0.0, 1.0 )
#define whiteCompliment(a) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	float distance = dot( planeNormal, point - pointOnPlane );

	return - distance * planeNormal + point;

}

float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return sign( dot( point - pointOnPlane, planeNormal ) );

}

vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}
`,sl=`
#ifdef ENVMAP_TYPE_CUBE_UV

#define cubeUV_textureSize (1024.0)

int getFaceFromDirection(vec3 direction) {
	vec3 absDirection = abs(direction);
	int face = -1;
	if( absDirection.x > absDirection.z ) {
		if(absDirection.x > absDirection.y )
			face = direction.x > 0.0 ? 0 : 3;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	else {
		if(absDirection.z > absDirection.y )
			face = direction.z > 0.0 ? 2 : 5;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	return face;
}
#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)
#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))

vec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {
	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);
	float dxRoughness = dFdx(roughness);
	float dyRoughness = dFdy(roughness);
	vec3 dx = dFdx( vec * scale * dxRoughness );
	vec3 dy = dFdy( vec * scale * dyRoughness );
	float d = max( dot( dx, dx ), dot( dy, dy ) );
	// Clamp the value to the max mip level counts. hard coded to 6 mips
	d = clamp(d, 1.0, cubeUV_rangeClamp);
	float mipLevel = 0.5 * log2(d);
	return vec2(floor(mipLevel), fract(mipLevel));
}

#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)
#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)

vec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {
	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;
	float a = 16.0 * cubeUV_rcpTextureSize;

	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );
	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;
	// float powScale = exp2(roughnessLevel + mipLevel);
	float powScale = exp2_packed.x * exp2_packed.y;
	// float scale =  1.0 / exp2(roughnessLevel + 2.0 + mipLevel);
	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;
	// float mipOffset = 0.75*(1.0 - 1.0/exp2(mipLevel))/exp2(roughnessLevel);
	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;

	bool bRes = mipLevel == 0.0;
	scale =  bRes && (scale < a) ? a : scale;

	vec3 r;
	vec2 offset;
	int face = getFaceFromDirection(direction);

	float rcpPowScale = 1.0 / powScale;

	if( face == 0) {
		r = vec3(direction.x, -direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 1) {
		r = vec3(direction.y, direction.x, direction.z);
		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 2) {
		r = vec3(direction.z, direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 3) {
		r = vec3(direction.x, direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	else if( face == 4) {
		r = vec3(direction.y, direction.x, -direction.z);
		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	else {
		r = vec3(direction.z, -direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	r = normalize(r);
	float texelOffset = 0.5 * cubeUV_rcpTextureSize;
	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;
	vec2 base = offset + vec2( texelOffset );
	return base + s * ( scale - 2.0 * texelOffset );
}

#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)

vec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {
	float roughnessVal = roughness* cubeUV_maxLods3;
	float r1 = floor(roughnessVal);
	float r2 = r1 + 1.0;
	float t = fract(roughnessVal);
	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);
	float s = mipInfo.y;
	float level0 = mipInfo.x;
	float level1 = level0 + 1.0;
	level1 = level1 > 5.0 ? 5.0 : level1;

	// round to nearest mipmap if we are not interpolating.
	level0 += min( floor( s + 0.5 ), 5.0 );

	// Tri linear interpolation.
	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);
	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));

	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);
	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));

	vec4 result = mix(color10, color20, t);

	return vec4(result.rgb, 1.0);
}

#endif
`,cl=`
vec3 transformedNormal = normalMatrix * objectNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif
`,ul=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,hl=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );

#endif
`,ll=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,fl=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,dl=`
  gl_FragColor = linearToOutputTexel( gl_FragColor );
`,pl=`
// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}

vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}

vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}

vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}

vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}

vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = min( floor( D ) / 255.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}

// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html

// M matrix, for encoding
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}

// Inverse M matrix, for decoding
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}
`,ml=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToVertex, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#elif defined( ENVMAP_TYPE_EQUIREC )

		vec2 sampleUV;

		reflectVec = normalize( reflectVec );

		sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

		sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;

		vec4 envColor = texture2D( envMap, sampleUV );

	#elif defined( ENVMAP_TYPE_SPHERE )

		reflectVec = normalize( reflectVec );

		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );

		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	envColor = envMapTexelToLinear( envColor );

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,vl=`
#if defined( USE_ENVMAP ) || defined( PHYSICAL )
	uniform float reflectivity;
	uniform float envMapIntensity;
#endif

#ifdef USE_ENVMAP

	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )
		varying vec3 vWorldPosition;
	#endif

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	uniform float flipEnvMap;
	uniform int maxMipLevel;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,gl=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,yl=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,xl=`
#ifdef USE_FOG

	fogDepth = -mvPosition.z;

#endif
`,_l=`
#ifdef USE_FOG

	varying float fogDepth;

#endif
`,wl=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,bl=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float fogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,Ml=`
#ifdef TOON

	uniform sampler2D gradientMap;

	vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

		// dotNL will be from -1.0 to 1.0
		float dotNL = dot( normal, lightDirection );
		vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

		#ifdef USE_GRADIENTMAP

			return texture2D( gradientMap, coord ).rgb;

		#else

			return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

		#endif


	}

#endif
`,El=`
#ifdef USE_LIGHTMAP

	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage

#endif
`,Tl=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,Sl=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );

#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif
	}

#endif

/*
#if NUM_RECT_AREA_LIGHTS > 0

	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		// TODO (abelnation): implement

	}

#endif
*/

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		#ifdef DOUBLE_SIDED

			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );

		#endif

	}

#endif
`,Al=`
uniform vec3 ambientLightColor;

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI;

	#endif

	return irradiance;

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
		float shadowCameraNear;
		float shadowCameraFar;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );

		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {

		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );

		if ( angleCos > spotLight.coneCos ) {

			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );

			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;

		} else {

			directLight.color = vec3( 0.0 );
			directLight.visible = false;

		}
	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {

		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			irradiance *= PI;

		#endif

		return irradiance;

	}

#endif
`,Ll=`
#if defined( USE_ENVMAP ) && defined( PHYSICAL )

	vec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {

		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );

			// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level
			// of a specular cubemap, or just the default level of a specially created irradiance cubemap.

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );

			#else

				// force the bias high to get the last LOD level as it is the most blurred.
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );

		#else

			vec4 envMapColor = vec4( 0.0 );

		#endif

		return PI * envMapColor.rgb * envMapIntensity;

	}

	// taken from here: http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html
	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {

		//float envMapWidth = pow( 2.0, maxMIPLevelScalar );
		//float desiredMIPLevel = log2( envMapWidth * sqrt( 3.0 ) ) - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );

		float maxMIPLevelScalar = float( maxMIPLevel );
		float desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );

		// clamp to allowable LOD ranges.
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );

	}

	vec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );

		#else

			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );

		#endif

		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );

			#else

				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));

		#elif defined( ENVMAP_TYPE_EQUIREC )

			vec2 sampleUV;
			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );

			#else

				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_SPHERE )

			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

			#else

				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#endif

		return envMapColor.rgb * envMapIntensity;

	}

#endif
`,Rl=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Cl=`
varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif


struct BlinnPhongMaterial {

	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	#ifdef TOON

		vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	#else

		float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
		vec3 irradiance = dotNL * directLight.color;

	#endif

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`,Pl=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );
#ifdef STANDARD
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
	material.clearCoat = saturate( clearCoat ); // Burley clearcoat model
	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );
#endif
`,Il=`
struct PhysicalMaterial {

	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;

	#ifndef STANDARD
		float clearCoat;
		float clearCoatRoughness;
	#endif

};

#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04

// Clear coat directional hemishperical reflectance (this approximation should be improved)
float clearCoatDHRApprox( const in float roughness, const in float dotNL ) {

	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	#ifndef STANDARD
		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );
	#else
		float clearCoatDHR = 0.0;
	#endif

	reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );

	reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

	#ifndef STANDARD

		reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );

	#endif

}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	#ifndef STANDARD
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		float dotNL = dotNV;
		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );
	#else
		float clearCoatDHR = 0.0;
	#endif

	reflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );

	#ifndef STANDARD

		reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );

	#endif

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )
#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,Ol=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = normalize( vViewPosition );

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointDirectLightIrradiance( pointLight, geometry, directLight );

		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotDirectLightIrradiance( spotLight, geometry, directLight );

		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );

		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}

#endif

#if defined( RE_IndirectDiffuse )

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		}

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearCoatRadiance = vec3( 0.0 );

#endif
`,Dl=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )

		irradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, maxMipLevel );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_BlinnShininessExponent( material ), maxMipLevel );

	#ifndef STANDARD
		clearCoatRadiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );
	#endif

#endif
`,Fl=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );

#endif
`,Nl=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	gl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,Bl=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;

#endif
`,Ul=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,Gl=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;

	#else

		gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

		gl_Position.z *= gl_Position.w;

	#endif

#endif
`,zl=`
#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vUv );

	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;

#endif
`,Hl=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,Vl=`
#ifdef USE_MAP

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );

#endif
`,kl=`
#ifdef USE_MAP

	uniform mat3 uvTransform;
	uniform sampler2D map;

#endif
`,Wl=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,Xl=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,jl=`
#ifdef USE_MORPHNORMALS

	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];
	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];
	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];
	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];

#endif
`,ql=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_MORPHNORMALS

	uniform float morphTargetInfluences[ 8 ];

	#else

	uniform float morphTargetInfluences[ 4 ];

	#endif

#endif
`,Yl=`
#ifdef USE_MORPHTARGETS

	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];
	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];
	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];
	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];

	#ifndef USE_MORPHNORMALS

	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];
	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];
	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];
	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];

	#endif

#endif
`,Zl=`
#ifdef FLAT_SHADED

	// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

#endif
`,Jl=`
#ifdef USE_NORMALMAP

	#ifdef OBJECTSPACE_NORMALMAP

		normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

		#ifdef FLIP_SIDED

			normal = - normal;

		#endif

		#ifdef DOUBLE_SIDED

			normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		#endif

		normal = normalize( normalMatrix * normal );

	#else // tangent-space normal map

		normal = perturbNormal2Arb( -vViewPosition, normal );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );

#endif
`,Ql=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

	#ifdef OBJECTSPACE_NORMALMAP

		uniform mat3 normalMatrix;

	#else

		// Per-Pixel Tangent Space Normal Mapping
		// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

		vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {

			// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

			vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
			vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
			vec2 st0 = dFdx( vUv.st );
			vec2 st1 = dFdy( vUv.st );

			float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

			vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
			vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
			vec3 N = normalize( surf_norm );
			mat3 tsn = mat3( S, T, N );

			vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;

			mapN.xy *= normalScale;
			mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

			return normalize( tsn * mapN );

		}

	#endif

#endif
`,$l=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,Kl=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,ef=`
vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

gl_Position = projectionMatrix * mvPosition;
`,tf=`
#if defined( DITHERING )

  gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,rf=`
#if defined( DITHERING )

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift acording to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,nf=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,af=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,of=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHTS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];

	#endif

	#if NUM_SPOT_LIGHTS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];

	#endif

	#if NUM_POINT_LIGHTS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {

		const vec2 offset = vec2( 0.0, 1.0 );

		vec2 texelSize = vec2( 1.0 ) / size;
		vec2 centroidUV = floor( uv * size + 0.5 ) / size;

		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );
		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );
		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );
		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );

		vec2 f = fract( uv * size + 0.5 );

		float a = mix( lb, lt, f.y );
		float b = mix( rb, rt, f.y );
		float c = mix( a, b, f.x );

		return c;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;

			shadow = (
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,sf=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHTS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];

	#endif

	#if NUM_SPOT_LIGHTS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];

	#endif

	#if NUM_POINT_LIGHTS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,cf=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;

	}

	#endif

	#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;

	}

	#endif

	#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;

	}

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`,uf=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHTS > 0

	DirectionalLight directionalLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];
		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}

	#endif

	#if NUM_SPOT_LIGHTS > 0

	SpotLight spotLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];
		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}

	#endif

	#if NUM_POINT_LIGHTS > 0

	PointLight pointLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];
		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,hf=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,lf=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	#ifdef BONE_TEXTURE

		uniform sampler2D boneTexture;
		uniform int boneTextureSize;

		mat4 getBoneMatrix( const in float i ) {

			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );

			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );

			y = dy * ( y + 0.5 );

			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

			mat4 bone = mat4( v1, v2, v3, v4 );

			return bone;

		}

	#else

		uniform mat4 boneMatrices[ MAX_BONES ];

		mat4 getBoneMatrix( const in float i ) {

			mat4 bone = boneMatrices[ int(i) ];
			return bone;

		}

	#endif

#endif
`,ff=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,df=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

#endif
`,pf=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,mf=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,vf=`
#if defined( TONE_MAPPING )

  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,gf=`
#ifndef saturate
	#define saturate(a) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/~reinhard/cdrom/
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicgames.com/archives/75
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {

	// John Hable's filmic operator from Uncharted 2 video game
	color *= toneMappingExposure;
	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );

}

// source: http://filmicgames.com/archives/75
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://knarkowicz.wordpress.com/2016/01/06/aces-filmic-tone-mapping-curve/
vec3 ACESFilmicToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );

}
`,yf=`
#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )

	varying vec2 vUv;

#endif
`,xf=`
#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif
`,_f=`
#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,wf=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,bf=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

#endif
`,Mf=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = uv2;

#endif
`,Ef=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )

	vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );

#endif
`,Tf=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Sf=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Af=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = mapTexelToLinear( texColor );
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Lf=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Rf=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );

	#endif

}
`,Cf=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

}
`,Pf=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,If=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,Of=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV;

	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;

	vec4 texColor = texture2D( tEquirect, sampleUV );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Df=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Ff=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Nf=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>

	vLineDistance = scale * lineDistance;

	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Bf=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Uf=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>

	#ifdef USE_ENVMAP

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,Gf=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;

#ifdef DOUBLE_SIDED

	varying vec3 vLightBack;

#endif

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation
	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,zf=`
#define LAMBERT

varying vec3 vLightFront;

#ifdef DOUBLE_SIDED

	varying vec3 vLightBack;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Hf=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>

#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );

	#else

		vec4 matcapColor = vec4( 1.0 );

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Vf=`
#define MATCAP

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

		vNormal = normalize( transformedNormal );

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,kf=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Wf=`
#define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Xf=`
#define PHYSICAL

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifndef STANDARD
	uniform float clearCoat;
	uniform float clearCoatRoughness;
#endif

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,jf=`
#define PHYSICAL

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,qf=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

}
`,Yf=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,Zf=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Jf=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,Qf=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <fog_fragment>

}
`,$f=`
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Kf=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,ed=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Te={alphamap_fragment:kh,alphamap_pars_fragment:Wh,alphatest_fragment:Xh,aomap_fragment:jh,aomap_pars_fragment:qh,begin_vertex:Yh,beginnormal_vertex:Zh,bsdfs:Jh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:Kh,clipping_planes_pars_vertex:el,clipping_planes_vertex:tl,color_fragment:rl,color_pars_fragment:il,color_pars_vertex:nl,color_vertex:al,common:ol,cube_uv_reflection_fragment:sl,defaultnormal_vertex:cl,displacementmap_pars_vertex:ul,displacementmap_vertex:hl,emissivemap_fragment:ll,emissivemap_pars_fragment:fl,encodings_fragment:dl,encodings_pars_fragment:pl,envmap_fragment:ml,envmap_pars_fragment:vl,envmap_pars_vertex:gl,envmap_physical_pars_fragment:Ll,envmap_vertex:yl,fog_vertex:xl,fog_pars_vertex:_l,fog_fragment:wl,fog_pars_fragment:bl,gradientmap_pars_fragment:Ml,lightmap_fragment:El,lightmap_pars_fragment:Tl,lights_lambert_vertex:Sl,lights_pars_begin:Al,lights_phong_fragment:Rl,lights_phong_pars_fragment:Cl,lights_physical_fragment:Pl,lights_physical_pars_fragment:Il,lights_fragment_begin:Ol,lights_fragment_maps:Dl,lights_fragment_end:Fl,logdepthbuf_fragment:Nl,logdepthbuf_pars_fragment:Bl,logdepthbuf_pars_vertex:Ul,logdepthbuf_vertex:Gl,map_fragment:zl,map_pars_fragment:Hl,map_particle_fragment:Vl,map_particle_pars_fragment:kl,metalnessmap_fragment:Wl,metalnessmap_pars_fragment:Xl,morphnormal_vertex:jl,morphtarget_pars_vertex:ql,morphtarget_vertex:Yl,normal_fragment_begin:Zl,normal_fragment_maps:Jl,normalmap_pars_fragment:Ql,packing:$l,premultiplied_alpha_fragment:Kl,project_vertex:ef,dithering_fragment:tf,dithering_pars_fragment:rf,roughnessmap_fragment:nf,roughnessmap_pars_fragment:af,shadowmap_pars_fragment:of,shadowmap_pars_vertex:sf,shadowmap_vertex:cf,shadowmask_pars_fragment:uf,skinbase_vertex:hf,skinning_pars_vertex:lf,skinning_vertex:ff,skinnormal_vertex:df,specularmap_fragment:pf,specularmap_pars_fragment:mf,tonemapping_fragment:vf,tonemapping_pars_fragment:gf,uv_pars_fragment:yf,uv_pars_vertex:xf,uv_vertex:_f,uv2_pars_fragment:wf,uv2_pars_vertex:bf,uv2_vertex:Mf,worldpos_vertex:Ef,background_frag:Tf,background_vert:Sf,cube_frag:Af,cube_vert:Lf,depth_frag:Rf,depth_vert:Cf,distanceRGBA_frag:Pf,distanceRGBA_vert:If,equirect_frag:Of,equirect_vert:Df,linedashed_frag:Ff,linedashed_vert:Nf,meshbasic_frag:Bf,meshbasic_vert:Uf,meshlambert_frag:Gf,meshlambert_vert:zf,meshmatcap_frag:Hf,meshmatcap_vert:Vf,meshphong_frag:kf,meshphong_vert:Wf,meshphysical_frag:Xf,meshphysical_vert:jf,normal_frag:qf,normal_vert:Yf,points_frag:Zf,points_vert:Jf,shadow_frag:Qf,shadow_vert:$f,sprite_frag:Kf,sprite_vert:ed};function xi(e){var t={};for(var r in e){t[r]={};for(var i in e[r]){var n=e[r][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture)?t[r][i]=n.clone():Array.isArray(n)?t[r][i]=n.slice():t[r][i]=n}}return t}function Et(e){for(var t={},r=0;r<e.length;r++){var i=xi(e[r]);for(var n in i)t[n]=i[n]}return t}var td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function se(e,t,r){return t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}Object.assign(se.prototype,{isColor:!0,r:1,g:1,b:1,set:function(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this},setScalar:function(e){return this.r=e,this.g=e,this.b=e,this},setHex:function(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this},setRGB:function(e,t,r){return this.r=e,this.g=t,this.b=r,this},setHSL:function(){function e(t,r,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(r-t)*6*i:i<1/2?r:i<2/3?t+(r-t)*6*(2/3-i):t}return function(r,i,n){if(r=ge.euclideanModulo(r,1),i=ge.clamp(i,0,1),n=ge.clamp(n,0,1),i===0)this.r=this.g=this.b=n;else{var a=n<=.5?n*(1+i):n+i-n*i,o=2*n-a;this.r=e(o,a,r+1/3),this.g=e(o,a,r),this.b=e(o,a,r-1/3)}return this}}(),setStyle:function(e){function t(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}var r;if(r=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){var i,n=r[1],a=r[2];switch(n){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)){var o=parseFloat(i[1])/360,s=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[5]),this.setHSL(o,s,c)}break}}else if(r=/^\#([A-Fa-f0-9]+)$/.exec(e)){var u=r[1],h=u.length;if(h===3)return this.r=parseInt(u.charAt(0)+u.charAt(0),16)/255,this.g=parseInt(u.charAt(1)+u.charAt(1),16)/255,this.b=parseInt(u.charAt(2)+u.charAt(2),16)/255,this;if(h===6)return this.r=parseInt(u.charAt(0)+u.charAt(1),16)/255,this.g=parseInt(u.charAt(2)+u.charAt(3),16)/255,this.b=parseInt(u.charAt(4)+u.charAt(5),16)/255,this}if(e&&e.length>0){var u=td[e];u!==void 0?this.setHex(u):console.warn("THREE.Color: Unknown color "+e)}return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return t===void 0&&(t=2),this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this},copyLinearToGamma:function(e,t){t===void 0&&(t=2);var r=t>0?1/t:1;return this.r=Math.pow(e.r,r),this.g=Math.pow(e.g,r),this.b=Math.pow(e.b,r),this},convertGammaToLinear:function(e){return this.copyGammaToLinear(this,e),this},convertLinearToGamma:function(e){return this.copyLinearToGamma(this,e),this},copySRGBToLinear:function(){function e(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}return function(r){return this.r=e(r.r),this.g=e(r.g),this.b=e(r.b),this}}(),copyLinearToSRGB:function(){function e(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}return function(r){return this.r=e(r.r),this.g=e(r.g),this.b=e(r.b),this}}(),convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});var t=this.r,r=this.g,i=this.b,n=Math.max(t,r,i),a=Math.min(t,r,i),o,s,c=(a+n)/2;if(a===n)o=0,s=0;else{var u=n-a;switch(s=c<=.5?u/(n+a):u/(2-n-a),n){case t:o=(r-i)/u+(r<i?6:0);break;case r:o=(i-t)/u+2;break;case i:o=(t-r)/u+4;break}o/=6}return e.h=o,e.s=s,e.l=c,e},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(){var e={};return function(t,r,i){return this.getHSL(e),e.h+=t,e.s+=r,e.l+=i,this.setHSL(e.h,e.s,e.l),this}}(),add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},sub:function(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},lerpHSL:function(){var e={h:0,s:0,l:0},t={h:0,s:0,l:0};return function(i,n){this.getHSL(e),i.getHSL(t);var a=ge.lerp(e.h,t.h,n),o=ge.lerp(e.s,t.s,n),s=ge.lerp(e.l,t.l,n);return this.setHSL(a,o,s),this}}(),equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e,t){return t===void 0&&(t=0),this.r=e[t],this.g=e[t+1],this.b=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},toJSON:function(){return this.getHex()}});var ae={common:{diffuse:{value:new se(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new ut},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new se(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},uvTransform:{value:new ut}},sprite:{diffuse:{value:new se(15658734)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},uvTransform:{value:new ut}}},Qt={basic:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.fog,ae.lights,{emissive:{value:new se(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Et([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new se(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},matcap:{uniforms:Et([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Et([ae.points,ae.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Et([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Et([ae.common,ae.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Et([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Te.normal_vert,fragmentShader:Te.normal_frag},sprite:{uniforms:Et([ae.sprite,ae.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Et([ae.common,ae.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Et([ae.lights,ae.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Qt.physical={uniforms:Et([Qt.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function Oo(){var e=null,t=!1,r=null;function i(n,a){t!==!1&&(r(n,a),e.requestAnimationFrame(i))}return{start:function(){t!==!0&&r!==null&&(e.requestAnimationFrame(i),t=!0)},stop:function(){t=!1},setAnimationLoop:function(n){r=n},setContext:function(n){e=n}}}function rd(e){var t=new WeakMap;function r(s,c){var u=s.array,h=s.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW,l=e.createBuffer();e.bindBuffer(c,l),e.bufferData(c,u,h),s.onUploadCallback();var f=e.FLOAT;return u instanceof Float32Array?f=e.FLOAT:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?f=e.UNSIGNED_SHORT:u instanceof Int16Array?f=e.SHORT:u instanceof Uint32Array?f=e.UNSIGNED_INT:u instanceof Int32Array?f=e.INT:u instanceof Int8Array?f=e.BYTE:u instanceof Uint8Array&&(f=e.UNSIGNED_BYTE),{buffer:l,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version}}function i(s,c,u){var h=c.array,l=c.updateRange;e.bindBuffer(u,s),c.dynamic===!1?e.bufferData(u,h,e.STATIC_DRAW):l.count===-1?e.bufferSubData(u,0,h):l.count===0?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(e.bufferSubData(u,l.offset*h.BYTES_PER_ELEMENT,h.subarray(l.offset,l.offset+l.count)),l.count=-1)}function n(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);var c=t.get(s);c&&(e.deleteBuffer(c.buffer),t.delete(s))}function o(s,c){s.isInterleavedBufferAttribute&&(s=s.data);var u=t.get(s);u===void 0?t.set(s,r(s,c)):u.version<s.version&&(i(u.buffer,s,c),u.version=s.version)}return{get:n,remove:a,update:o}}function En(e,t,r,i,n,a){this.a=e,this.b=t,this.c=r,this.normal=i&&i.isVector3?i:new b,this.vertexNormals=Array.isArray(i)?i:[],this.color=n&&n.isColor?n:new se,this.vertexColors=Array.isArray(n)?n:[],this.materialIndex=a!==void 0?a:0}Object.assign(En.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(var t=0,r=e.vertexNormals.length;t<r;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(var t=0,r=e.vertexColors.length;t<r;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}});function ii(e,t,r,i){this._x=e||0,this._y=t||0,this._z=r||0,this._order=i||ii.DefaultOrder}ii.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];ii.DefaultOrder="XYZ";Object.defineProperties(ii.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this.onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this.onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this.onChangeCallback()}},order:{get:function(){return this._order},set:function(e){this._order=e,this.onChangeCallback()}}});Object.assign(ii.prototype,{isEuler:!0,set:function(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._order=i||this._order,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this.onChangeCallback(),this},setFromRotationMatrix:function(e,t,r){var i=ge.clamp,n=e.elements,a=n[0],o=n[4],s=n[8],c=n[1],u=n[5],h=n[9],l=n[2],f=n[6],d=n[10];return t=t||this._order,t==="XYZ"?(this._y=Math.asin(i(s,-1,1)),Math.abs(s)<.99999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,u),this._z=0)):t==="YXZ"?(this._x=Math.asin(-i(h,-1,1)),Math.abs(h)<.99999?(this._y=Math.atan2(s,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,a),this._z=0)):t==="ZXY"?(this._x=Math.asin(i(f,-1,1)),Math.abs(f)<.99999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,a))):t==="ZYX"?(this._y=Math.asin(-i(l,-1,1)),Math.abs(l)<.99999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,u))):t==="YZX"?(this._z=Math.asin(i(c,-1,1)),Math.abs(c)<.99999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(s,d))):t==="XZY"?(this._z=Math.asin(-i(o,-1,1)),Math.abs(o)<.99999?(this._x=Math.atan2(f,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,d),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+t),this._order=t,r!==!1&&this.onChangeCallback(),this},setFromQuaternion:function(){var e=new fe;return function(r,i,n){return e.makeRotationFromQuaternion(r),this.setFromRotationMatrix(e,i,n)}}(),setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(){var e=new rt;return function(r){return e.setFromEuler(this),this.setFromQuaternion(e,r)}}(),equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this.onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new b(this._x,this._y,this._z)},onChange:function(e){return this.onChangeCallback=e,this},onChangeCallback:function(){}});function cc(){this.mask=1}Object.assign(cc.prototype,{set:function(e){this.mask=1<<e|0},enable:function(e){this.mask|=1<<e|0},toggle:function(e){this.mask^=1<<e|0},disable:function(e){this.mask&=~(1<<e|0)},test:function(e){return(this.mask&e.mask)!==0}});var id=0;function $(){Object.defineProperty(this,"id",{value:id++}),this.uuid=ge.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$.DefaultUp.clone();var e=new b,t=new ii,r=new rt,i=new b(1,1,1);function n(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t.onChange(n),r.onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new ut}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=$.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}$.DefaultUp=new b(0,1,0);$.DefaultMatrixAutoUpdate=!0;$.prototype=Object.assign(Object.create(pr.prototype),{constructor:$,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(e){this.matrix.multiplyMatrices(e,this.matrix),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(){var e=new rt;return function(r,i){return e.setFromAxisAngle(r,i),this.quaternion.multiply(e),this}}(),rotateOnWorldAxis:function(){var e=new rt;return function(r,i){return e.setFromAxisAngle(r,i),this.quaternion.premultiply(e),this}}(),rotateX:function(){var e=new b(1,0,0);return function(r){return this.rotateOnAxis(e,r)}}(),rotateY:function(){var e=new b(0,1,0);return function(r){return this.rotateOnAxis(e,r)}}(),rotateZ:function(){var e=new b(0,0,1);return function(r){return this.rotateOnAxis(e,r)}}(),translateOnAxis:function(){var e=new b;return function(r,i){return e.copy(r).applyQuaternion(this.quaternion),this.position.add(e.multiplyScalar(i)),this}}(),translateX:function(){var e=new b(1,0,0);return function(r){return this.translateOnAxis(e,r)}}(),translateY:function(){var e=new b(0,1,0);return function(r){return this.translateOnAxis(e,r)}}(),translateZ:function(){var e=new b(0,0,1);return function(r){return this.translateOnAxis(e,r)}}(),localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var e=new fe;return function(r){return r.applyMatrix4(e.getInverse(this.matrixWorld))}}(),lookAt:function(){var e=new rt,t=new fe,r=new b,i=new b;return function(a,o,s){a.isVector3?r.copy(a):r.set(a,o,s);var c=this.parent;this.updateWorldMatrix(!0,!1),i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?t.lookAt(i,r,this.up):t.lookAt(r,i,this.up),this.quaternion.setFromRotationMatrix(t),c&&(t.extractRotation(c.matrixWorld),e.setFromRotationMatrix(t),this.quaternion.premultiply(e.inverse()))}}(),add:function(e){if(arguments.length>1){for(var t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,e.dispatchEvent({type:"added"}),this.children.push(e)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(var t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}var r=this.children.indexOf(e);return r!==-1&&(e.parent=null,e.dispatchEvent({type:"removed"}),this.children.splice(r,1)),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(var r=0,i=this.children.length;r<i;r++){var n=this.children[r],a=n.getObjectByProperty(e,t);if(a!==void 0)return a}},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new b),this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var e=new b,t=new b;return function(i){return i===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),i=new rt),this.updateMatrixWorld(!0),this.matrixWorld.decompose(e,i,t),i}}(),getWorldScale:function(){var e=new b,t=new rt;return function(i){return i===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),i=new b),this.updateMatrixWorld(!0),this.matrixWorld.decompose(e,t,i),i}}(),getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new b),this.updateMatrixWorld(!0);var t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()},raycast:function(){},traverse:function(e){e(this);for(var t=this.children,r=0,i=t.length;r<i;r++)t[r].traverse(e)},traverseVisible:function(e){if(this.visible!==!1){e(this);for(var t=this.children,r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}},traverseAncestors:function(e){var t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);for(var t=this.children,r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){var r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0)for(var i=this.children,n=0,a=i.length;n<a;n++)i[n].updateWorldMatrix(!1,!0)},toJSON:function(e){var t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1);function n(v,g){return v[g.uuid]===void 0&&(v[g.uuid]=g.toJSON(e)),g.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=n(e.geometries,this.geometry);var a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){var o=a.shapes;if(Array.isArray(o))for(var s=0,c=o.length;s<c;s++){var u=o[s];n(e.shapes,u)}else n(e.shapes,o)}}if(this.material!==void 0)if(Array.isArray(this.material)){for(var h=[],s=0,c=this.material.length;s<c;s++)h.push(n(e.materials,this.material[s]));i.material=h}else i.material=n(e.materials,this.material);if(this.children.length>0){i.children=[];for(var s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(t){var l=m(e.geometries),f=m(e.materials),d=m(e.textures),p=m(e.images),o=m(e.shapes);l.length>0&&(r.geometries=l),f.length>0&&(r.materials=f),d.length>0&&(r.textures=d),p.length>0&&(r.images=p),o.length>0&&(r.shapes=o)}return r.object=i,r;function m(v){var g=[];for(var _ in v){var w=v[_];delete w.metadata,g.push(w)}return g}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(t===void 0&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(var r=0;r<e.children.length;r++){var i=e.children[r];this.add(i.clone())}return this}});var nd=0;function de(){Object.defineProperty(this,"id",{value:nd+=2}),this.uuid=ge.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}de.prototype=Object.assign(Object.create(pr.prototype),{constructor:de,isGeometry:!0,applyMatrix:function(e){for(var t=new ut().getNormalMatrix(e),r=0,i=this.vertices.length;r<i;r++){var n=this.vertices[r];n.applyMatrix4(e)}for(var r=0,i=this.faces.length;r<i;r++){var a=this.faces[r];a.normal.applyMatrix3(t).normalize();for(var o=0,s=a.vertexNormals.length;o<s;o++)a.vertexNormals[o].applyMatrix3(t).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(){var e=new fe;return function(r){return e.makeRotationX(r),this.applyMatrix(e),this}}(),rotateY:function(){var e=new fe;return function(r){return e.makeRotationY(r),this.applyMatrix(e),this}}(),rotateZ:function(){var e=new fe;return function(r){return e.makeRotationZ(r),this.applyMatrix(e),this}}(),translate:function(){var e=new fe;return function(r,i,n){return e.makeTranslation(r,i,n),this.applyMatrix(e),this}}(),scale:function(){var e=new fe;return function(r,i,n){return e.makeScale(r,i,n),this.applyMatrix(e),this}}(),lookAt:function(){var e=new $;return function(r){e.lookAt(r),e.updateMatrix(),this.applyMatrix(e.matrix)}}(),fromBufferGeometry:function(e){var t=this,r=e.index!==null?e.index.array:void 0,i=e.attributes,n=i.position.array,a=i.normal!==void 0?i.normal.array:void 0,o=i.color!==void 0?i.color.array:void 0,s=i.uv!==void 0?i.uv.array:void 0,c=i.uv2!==void 0?i.uv2.array:void 0;c!==void 0&&(this.faceVertexUvs[1]=[]);for(var u=0,h=0;u<n.length;u+=3,h+=2)t.vertices.push(new b().fromArray(n,u)),o!==void 0&&t.colors.push(new se().fromArray(o,u));function l(g,_,w,y){var S=o===void 0?[]:[t.colors[g].clone(),t.colors[_].clone(),t.colors[w].clone()],L=a===void 0?[]:[new b().fromArray(a,g*3),new b().fromArray(a,_*3),new b().fromArray(a,w*3)],I=new En(g,_,w,L,S,y);t.faces.push(I),s!==void 0&&t.faceVertexUvs[0].push([new V().fromArray(s,g*2),new V().fromArray(s,_*2),new V().fromArray(s,w*2)]),c!==void 0&&t.faceVertexUvs[1].push([new V().fromArray(c,g*2),new V().fromArray(c,_*2),new V().fromArray(c,w*2)])}var f=e.groups;if(f.length>0)for(var u=0;u<f.length;u++)for(var d=f[u],p=d.start,m=d.count,h=p,v=p+m;h<v;h+=3)r!==void 0?l(r[h],r[h+1],r[h+2],d.materialIndex):l(h,h+1,h+2,d.materialIndex);else if(r!==void 0)for(var u=0;u<r.length;u+=3)l(r[u],r[u+1],r[u+2]);else for(var u=0;u<n.length/3;u+=3)l(u,u+1,u+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){var e=new b;return function(){return this.computeBoundingBox(),this.boundingBox.getCenter(e).negate(),this.translate(e.x,e.y,e.z),this}}(),normalize:function(){this.computeBoundingSphere();var e=this.boundingSphere.center,t=this.boundingSphere.radius,r=t===0?1:1/t,i=new fe;return i.set(r,0,0,-r*e.x,0,r,0,-r*e.y,0,0,r,-r*e.z,0,0,0,1),this.applyMatrix(i),this},computeFaceNormals:function(){for(var e=new b,t=new b,r=0,i=this.faces.length;r<i;r++){var n=this.faces[r],a=this.vertices[n.a],o=this.vertices[n.b],s=this.vertices[n.c];e.subVectors(s,o),t.subVectors(a,o),e.cross(t),e.normalize(),n.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);var t,r,i,n,a,o;for(o=new Array(this.vertices.length),t=0,r=this.vertices.length;t<r;t++)o[t]=new b;if(e){var s,c,u,h=new b,l=new b;for(i=0,n=this.faces.length;i<n;i++)a=this.faces[i],s=this.vertices[a.a],c=this.vertices[a.b],u=this.vertices[a.c],h.subVectors(u,c),l.subVectors(s,c),h.cross(l),o[a.a].add(h),o[a.b].add(h),o[a.c].add(h)}else for(this.computeFaceNormals(),i=0,n=this.faces.length;i<n;i++)a=this.faces[i],o[a.a].add(a.normal),o[a.b].add(a.normal),o[a.c].add(a.normal);for(t=0,r=this.vertices.length;t<r;t++)o[t].normalize();for(i=0,n=this.faces.length;i<n;i++){a=this.faces[i];var f=a.vertexNormals;f.length===3?(f[0].copy(o[a.a]),f[1].copy(o[a.b]),f[2].copy(o[a.c])):(f[0]=o[a.a].clone(),f[1]=o[a.b].clone(),f[2]=o[a.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var e,t,r;for(this.computeFaceNormals(),e=0,t=this.faces.length;e<t;e++){r=this.faces[e];var i=r.vertexNormals;i.length===3?(i[0].copy(r.normal),i[1].copy(r.normal),i[2].copy(r.normal)):(i[0]=r.normal.clone(),i[1]=r.normal.clone(),i[2]=r.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var e,t,r,i,n;for(r=0,i=this.faces.length;r<i;r++)for(n=this.faces[r],n.__originalFaceNormal?n.__originalFaceNormal.copy(n.normal):n.__originalFaceNormal=n.normal.clone(),n.__originalVertexNormals||(n.__originalVertexNormals=[]),e=0,t=n.vertexNormals.length;e<t;e++)n.__originalVertexNormals[e]?n.__originalVertexNormals[e].copy(n.vertexNormals[e]):n.__originalVertexNormals[e]=n.vertexNormals[e].clone();var a=new de;for(a.faces=this.faces,e=0,t=this.morphTargets.length;e<t;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];var o=this.morphNormals[e].faceNormals,s=this.morphNormals[e].vertexNormals,u,h;for(r=0,i=this.faces.length;r<i;r++)u=new b,h={a:new b,b:new b,c:new b},o.push(u),s.push(h)}var c=this.morphNormals[e];a.vertices=this.morphTargets[e].vertices,a.computeFaceNormals(),a.computeVertexNormals();var u,h;for(r=0,i=this.faces.length;r<i;r++)n=this.faces[r],u=c.faceNormals[r],h=c.vertexNormals[r],u.copy(n.normal),h.a.copy(n.vertexNormals[0]),h.b.copy(n.vertexNormals[1]),h.c.copy(n.vertexNormals[2])}for(r=0,i=this.faces.length;r<i;r++)n=this.faces[r],n.normal=n.__originalFaceNormal,n.vertexNormals=n.__originalVertexNormals},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new ur),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Vt),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,r){if(!(e&&e.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);return}var i,n=this.vertices.length,a=this.vertices,o=e.vertices,s=this.faces,c=e.faces,u=this.faceVertexUvs[0],h=e.faceVertexUvs[0],l=this.colors,f=e.colors;r===void 0&&(r=0),t!==void 0&&(i=new ut().getNormalMatrix(t));for(var d=0,p=o.length;d<p;d++){var m=o[d],v=m.clone();t!==void 0&&v.applyMatrix4(t),a.push(v)}for(var d=0,p=f.length;d<p;d++)l.push(f[d].clone());for(d=0,p=c.length;d<p;d++){var g=c[d],_,w,y,S=g.vertexNormals,L=g.vertexColors;_=new En(g.a+n,g.b+n,g.c+n),_.normal.copy(g.normal),i!==void 0&&_.normal.applyMatrix3(i).normalize();for(var I=0,P=S.length;I<P;I++)w=S[I].clone(),i!==void 0&&w.applyMatrix3(i).normalize(),_.vertexNormals.push(w);_.color.copy(g.color);for(var I=0,P=L.length;I<P;I++)y=L[I],_.vertexColors.push(y.clone());_.materialIndex=g.materialIndex+r,s.push(_)}for(d=0,p=h.length;d<p;d++){var A=h[d],D=[];if(A!==void 0){for(var I=0,P=A.length;I<P;I++)D.push(A[I].clone());u.push(D)}}},mergeMesh:function(e){if(!(e&&e.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e);return}e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)},mergeVertices:function(){var e={},t=[],r=[],i,n,a=4,o=Math.pow(10,a),s,c,u,h,l,f;for(s=0,c=this.vertices.length;s<c;s++)i=this.vertices[s],n=Math.round(i.x*o)+"_"+Math.round(i.y*o)+"_"+Math.round(i.z*o),e[n]===void 0?(e[n]=s,t.push(this.vertices[s]),r[s]=t.length-1):r[s]=r[e[n]];var d=[];for(s=0,c=this.faces.length;s<c;s++){u=this.faces[s],u.a=r[u.a],u.b=r[u.b],u.c=r[u.c],h=[u.a,u.b,u.c];for(var p=0;p<3;p++)if(h[p]===h[(p+1)%3]){d.push(s);break}}for(s=d.length-1;s>=0;s--){var m=d[s];for(this.faces.splice(m,1),l=0,f=this.faceVertexUvs.length;l<f;l++)this.faceVertexUvs[l].splice(m,1)}var v=this.vertices.length-t.length;return this.vertices=t,v},setFromPoints:function(e){this.vertices=[];for(var t=0,r=e.length;t<r;t++){var i=e[t];this.vertices.push(new b(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){for(var e=this.faces,t=e.length,r=0;r<t;r++)e[r]._id=r;function i(u,h){return u.materialIndex-h.materialIndex}e.sort(i);var n=this.faceVertexUvs[0],a=this.faceVertexUvs[1],o,s;n&&n.length===t&&(o=[]),a&&a.length===t&&(s=[]);for(var r=0;r<t;r++){var c=e[r]._id;o&&o.push(n[c]),s&&s.push(a[c])}o&&(this.faceVertexUvs[0]=o),s&&(this.faceVertexUvs[1]=s)},toJSON:function(){var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){var t=this.parameters;for(var r in t)t[r]!==void 0&&(e[r]=t[r]);return e}for(var i=[],n=0;n<this.vertices.length;n++){var a=this.vertices[n];i.push(a.x,a.y,a.z)}for(var o=[],s=[],c={},u=[],h={},l=[],f={},n=0;n<this.faces.length;n++){var d=this.faces[n],p=!0,m=!1,v=this.faceVertexUvs[0][n]!==void 0,g=d.normal.length()>0,_=d.vertexNormals.length>0,w=d.color.r!==1||d.color.g!==1||d.color.b!==1,y=d.vertexColors.length>0,S=0;if(S=A(S,0,0),S=A(S,1,p),S=A(S,2,m),S=A(S,3,v),S=A(S,4,g),S=A(S,5,_),S=A(S,6,w),S=A(S,7,y),o.push(S),o.push(d.a,d.b,d.c),o.push(d.materialIndex),v){var L=this.faceVertexUvs[0][n];o.push(N(L[0]),N(L[1]),N(L[2]))}if(g&&o.push(D(d.normal)),_){var I=d.vertexNormals;o.push(D(I[0]),D(I[1]),D(I[2]))}if(w&&o.push(F(d.color)),y){var P=d.vertexColors;o.push(F(P[0]),F(P[1]),F(P[2]))}}function A(G,H,z){return z?G|1<<H:G&~(1<<H)}function D(G){var H=G.x.toString()+G.y.toString()+G.z.toString();return c[H]!==void 0||(c[H]=s.length/3,s.push(G.x,G.y,G.z)),c[H]}function F(G){var H=G.r.toString()+G.g.toString()+G.b.toString();return h[H]!==void 0||(h[H]=u.length,u.push(G.getHex())),h[H]}function N(G){var H=G.x.toString()+G.y.toString();return f[H]!==void 0||(f[H]=l.length/2,l.push(G.x,G.y)),f[H]}return e.data={},e.data.vertices=i,e.data.normals=s,u.length>0&&(e.data.colors=u),l.length>0&&(e.data.uvs=[l]),e.data.faces=o,e},clone:function(){return new de().copy(this)},copy:function(e){var t,r,i,n,a,o;this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;var s=e.vertices;for(t=0,r=s.length;t<r;t++)this.vertices.push(s[t].clone());var c=e.colors;for(t=0,r=c.length;t<r;t++)this.colors.push(c[t].clone());var u=e.faces;for(t=0,r=u.length;t<r;t++)this.faces.push(u[t].clone());for(t=0,r=e.faceVertexUvs.length;t<r;t++){var h=e.faceVertexUvs[t];for(this.faceVertexUvs[t]===void 0&&(this.faceVertexUvs[t]=[]),i=0,n=h.length;i<n;i++){var l=h[i],f=[];for(a=0,o=l.length;a<o;a++){var d=l[a];f.push(d.clone())}this.faceVertexUvs[t].push(f)}}var p=e.morphTargets;for(t=0,r=p.length;t<r;t++){var m={};if(m.name=p[t].name,p[t].vertices!==void 0)for(m.vertices=[],i=0,n=p[t].vertices.length;i<n;i++)m.vertices.push(p[t].vertices[i].clone());if(p[t].normals!==void 0)for(m.normals=[],i=0,n=p[t].normals.length;i<n;i++)m.normals.push(p[t].normals[i].clone());this.morphTargets.push(m)}var v=e.morphNormals;for(t=0,r=v.length;t<r;t++){var g={};if(v[t].vertexNormals!==void 0)for(g.vertexNormals=[],i=0,n=v[t].vertexNormals.length;i<n;i++){var _=v[t].vertexNormals[i],w={};w.a=_.a.clone(),w.b=_.b.clone(),w.c=_.c.clone(),g.vertexNormals.push(w)}if(v[t].faceNormals!==void 0)for(g.faceNormals=[],i=0,n=v[t].faceNormals.length;i<n;i++)g.faceNormals.push(v[t].faceNormals[i].clone());this.morphNormals.push(g)}var y=e.skinWeights;for(t=0,r=y.length;t<r;t++)this.skinWeights.push(y[t].clone());var S=e.skinIndices;for(t=0,r=S.length;t<r;t++)this.skinIndices.push(S[t].clone());var L=e.lineDistances;for(t=0,r=L.length;t<r;t++)this.lineDistances.push(L[t]);var I=e.boundingBox;I!==null&&(this.boundingBox=I.clone());var P=e.boundingSphere;return P!==null&&(this.boundingSphere=P.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function xe(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(xe.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(xe.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setArray:function(e){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");return this.count=e!==void 0?e.length/this.itemSize:0,this.array=e,this},setDynamic:function(e){return this.dynamic=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.dynamic=e.dynamic,this},copyAt:function(e,t,r){e*=this.itemSize,r*=t.itemSize;for(var i=0,n=this.itemSize;i<n;i++)this.array[e+i]=t.array[r+i];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){for(var t=this.array,r=0,i=0,n=e.length;i<n;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new se),t[r++]=a.r,t[r++]=a.g,t[r++]=a.b}return this},copyVector2sArray:function(e){for(var t=this.array,r=0,i=0,n=e.length;i<n;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new V),t[r++]=a.x,t[r++]=a.y}return this},copyVector3sArray:function(e){for(var t=this.array,r=0,i=0,n=e.length;i<n;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new b),t[r++]=a.x,t[r++]=a.y,t[r++]=a.z}return this},copyVector4sArray:function(e){for(var t=this.array,r=0,i=0,n=e.length;i<n;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Fe),t[r++]=a.x,t[r++]=a.y,t[r++]=a.z,t[r++]=a.w}return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this},setXYZ:function(e,t,r,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this},setXYZW:function(e,t,r,i,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=n,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)}});function ka(e,t,r){xe.call(this,new Int8Array(e),t,r)}ka.prototype=Object.create(xe.prototype);ka.prototype.constructor=ka;function Wa(e,t,r){xe.call(this,new Uint8Array(e),t,r)}Wa.prototype=Object.create(xe.prototype);Wa.prototype.constructor=Wa;function Xa(e,t,r){xe.call(this,new Uint8ClampedArray(e),t,r)}Xa.prototype=Object.create(xe.prototype);Xa.prototype.constructor=Xa;function ja(e,t,r){xe.call(this,new Int16Array(e),t,r)}ja.prototype=Object.create(xe.prototype);ja.prototype.constructor=ja;function _i(e,t,r){xe.call(this,new Uint16Array(e),t,r)}_i.prototype=Object.create(xe.prototype);_i.prototype.constructor=_i;function qa(e,t,r){xe.call(this,new Int32Array(e),t,r)}qa.prototype=Object.create(xe.prototype);qa.prototype.constructor=qa;function wi(e,t,r){xe.call(this,new Uint32Array(e),t,r)}wi.prototype=Object.create(xe.prototype);wi.prototype.constructor=wi;function Z(e,t,r){xe.call(this,new Float32Array(e),t,r)}Z.prototype=Object.create(xe.prototype);Z.prototype.constructor=Z;function Ya(e,t,r){xe.call(this,new Float64Array(e),t,r)}Ya.prototype=Object.create(xe.prototype);Ya.prototype.constructor=Ya;function uc(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(uc.prototype,{computeGroups:function(e){for(var t,r=[],i=void 0,n=e.faces,a=0;a<n.length;a++){var o=n[a];o.materialIndex!==i&&(i=o.materialIndex,t!==void 0&&(t.count=a*3-t.start,r.push(t)),t={start:a*3,materialIndex:i})}t!==void 0&&(t.count=a*3-t.start,r.push(t)),this.groups=r},fromGeometry:function(e){var t=e.faces,r=e.vertices,i=e.faceVertexUvs,n=i[0]&&i[0].length>0,a=i[1]&&i[1].length>0,o=e.morphTargets,s=o.length,c;if(s>0){c=[];for(var u=0;u<s;u++)c[u]={name:o[u].name,data:[]};this.morphTargets.position=c}var h=e.morphNormals,l=h.length,f;if(l>0){f=[];for(var u=0;u<l;u++)f[u]={name:h[u].name,data:[]};this.morphTargets.normal=f}var d=e.skinIndices,p=e.skinWeights,m=d.length===r.length,v=p.length===r.length;r.length>0&&t.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(var u=0;u<t.length;u++){var g=t[u];this.vertices.push(r[g.a],r[g.b],r[g.c]);var _=g.vertexNormals;if(_.length===3)this.normals.push(_[0],_[1],_[2]);else{var w=g.normal;this.normals.push(w,w,w)}var y=g.vertexColors;if(y.length===3)this.colors.push(y[0],y[1],y[2]);else{var S=g.color;this.colors.push(S,S,S)}if(n===!0){var L=i[0][u];L!==void 0?this.uvs.push(L[0],L[1],L[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",u),this.uvs.push(new V,new V,new V))}if(a===!0){var L=i[1][u];L!==void 0?this.uvs2.push(L[0],L[1],L[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",u),this.uvs2.push(new V,new V,new V))}for(var I=0;I<s;I++){var P=o[I].vertices;c[I].data.push(P[g.a],P[g.b],P[g.c])}for(var I=0;I<l;I++){var A=h[I].vertexNormals[u];f[I].data.push(A.a,A.b,A.c)}m&&this.skinIndices.push(d[g.a],d[g.b],d[g.c]),v&&this.skinWeights.push(p[g.a],p[g.b],p[g.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this}});function hc(e){if(e.length===0)return-1/0;for(var t=e[0],r=1,i=e.length;r<i;++r)e[r]>t&&(t=e[r]);return t}var ad=1;function K(){Object.defineProperty(this,"id",{value:ad+=2}),this.uuid=ge.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}K.prototype=Object.assign(Object.create(pr.prototype),{constructor:K,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){Array.isArray(e)?this.index=new(hc(e)>65535?wi:_i)(e,1):this.index=e},addAttribute:function(e,t){return!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(e,new xe(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):(this.attributes[e]=t,this)},getAttribute:function(e){return this.attributes[e]},removeAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,r){this.groups.push({start:e,count:t,materialIndex:r!==void 0?r:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix:function(e){var t=this.attributes.position;t!==void 0&&(e.applyToBufferAttribute(t),t.needsUpdate=!0);var r=this.attributes.normal;if(r!==void 0){var i=new ut().getNormalMatrix(e);i.applyToBufferAttribute(r),r.needsUpdate=!0}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(){var e=new fe;return function(r){return e.makeRotationX(r),this.applyMatrix(e),this}}(),rotateY:function(){var e=new fe;return function(r){return e.makeRotationY(r),this.applyMatrix(e),this}}(),rotateZ:function(){var e=new fe;return function(r){return e.makeRotationZ(r),this.applyMatrix(e),this}}(),translate:function(){var e=new fe;return function(r,i,n){return e.makeTranslation(r,i,n),this.applyMatrix(e),this}}(),scale:function(){var e=new fe;return function(r,i,n){return e.makeScale(r,i,n),this.applyMatrix(e),this}}(),lookAt:function(){var e=new $;return function(r){e.lookAt(r),e.updateMatrix(),this.applyMatrix(e.matrix)}}(),center:function(){var e=new b;return function(){return this.computeBoundingBox(),this.boundingBox.getCenter(e).negate(),this.translate(e.x,e.y,e.z),this}}(),setFromObject:function(e){var t=e.geometry;if(e.isPoints||e.isLine){var r=new Z(t.vertices.length*3,3),i=new Z(t.colors.length*3,3);if(this.addAttribute("position",r.copyVector3sArray(t.vertices)),this.addAttribute("color",i.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){var n=new Z(t.lineDistances.length,1);this.addAttribute("lineDistance",n.copyArray(t.lineDistances))}t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},setFromPoints:function(e){for(var t=[],r=0,i=e.length;r<i;r++){var n=e[r];t.push(n.x,n.y,n.z||0)}return this.addAttribute("position",new Z(t,3)),this},updateFromObject:function(e){var t=e.geometry;if(e.isMesh){var r=t.__directGeometry;if(t.elementsNeedUpdate===!0&&(r=void 0,t.elementsNeedUpdate=!1),r===void 0)return this.fromGeometry(t);r.verticesNeedUpdate=t.verticesNeedUpdate,r.normalsNeedUpdate=t.normalsNeedUpdate,r.colorsNeedUpdate=t.colorsNeedUpdate,r.uvsNeedUpdate=t.uvsNeedUpdate,r.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=r}var i;return t.verticesNeedUpdate===!0&&(i=this.attributes.position,i!==void 0&&(i.copyVector3sArray(t.vertices),i.needsUpdate=!0),t.verticesNeedUpdate=!1),t.normalsNeedUpdate===!0&&(i=this.attributes.normal,i!==void 0&&(i.copyVector3sArray(t.normals),i.needsUpdate=!0),t.normalsNeedUpdate=!1),t.colorsNeedUpdate===!0&&(i=this.attributes.color,i!==void 0&&(i.copyColorsArray(t.colors),i.needsUpdate=!0),t.colorsNeedUpdate=!1),t.uvsNeedUpdate&&(i=this.attributes.uv,i!==void 0&&(i.copyVector2sArray(t.uvs),i.needsUpdate=!0),t.uvsNeedUpdate=!1),t.lineDistancesNeedUpdate&&(i=this.attributes.lineDistance,i!==void 0&&(i.copyArray(t.lineDistances),i.needsUpdate=!0),t.lineDistancesNeedUpdate=!1),t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new uc().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){var t=new Float32Array(e.vertices.length*3);if(this.addAttribute("position",new xe(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){var r=new Float32Array(e.normals.length*3);this.addAttribute("normal",new xe(r,3).copyVector3sArray(e.normals))}if(e.colors.length>0){var i=new Float32Array(e.colors.length*3);this.addAttribute("color",new xe(i,3).copyColorsArray(e.colors))}if(e.uvs.length>0){var n=new Float32Array(e.uvs.length*2);this.addAttribute("uv",new xe(n,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){var a=new Float32Array(e.uvs2.length*2);this.addAttribute("uv2",new xe(a,2).copyVector2sArray(e.uvs2))}this.groups=e.groups;for(var o in e.morphTargets){for(var s=[],c=e.morphTargets[o],u=0,h=c.length;u<h;u++){var l=c[u],f=new Z(l.data.length*3,3);f.name=l.name,s.push(f.copyVector3sArray(l.data))}this.morphAttributes[o]=s}if(e.skinIndices.length>0){var d=new Z(e.skinIndices.length*4,4);this.addAttribute("skinIndex",d.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){var p=new Z(e.skinWeights.length*4,4);this.addAttribute("skinWeight",p.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new ur);var e=this.attributes.position;e!==void 0?this.boundingBox.setFromBufferAttribute(e):this.boundingBox.makeEmpty(),(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var e=new ur,t=new b;return function(){this.boundingSphere===null&&(this.boundingSphere=new Vt);var i=this.attributes.position;if(i){var n=this.boundingSphere.center;e.setFromBufferAttribute(i),e.getCenter(n);for(var a=0,o=0,s=i.count;o<s;o++)t.x=i.getX(o),t.y=i.getY(o),t.z=i.getZ(o),a=Math.max(a,n.distanceToSquared(t));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var e=this.index,t=this.attributes;if(t.position){var r=t.position.array;if(t.normal===void 0)this.addAttribute("normal",new xe(new Float32Array(r.length),3));else for(var i=t.normal.array,n=0,a=i.length;n<a;n++)i[n]=0;var o=t.normal.array,s,c,u,h=new b,l=new b,f=new b,d=new b,p=new b;if(e)for(var m=e.array,n=0,a=e.count;n<a;n+=3)s=m[n+0]*3,c=m[n+1]*3,u=m[n+2]*3,h.fromArray(r,s),l.fromArray(r,c),f.fromArray(r,u),d.subVectors(f,l),p.subVectors(h,l),d.cross(p),o[s]+=d.x,o[s+1]+=d.y,o[s+2]+=d.z,o[c]+=d.x,o[c+1]+=d.y,o[c+2]+=d.z,o[u]+=d.x,o[u+1]+=d.y,o[u+2]+=d.z;else for(var n=0,a=r.length;n<a;n+=9)h.fromArray(r,n),l.fromArray(r,n+3),f.fromArray(r,n+6),d.subVectors(f,l),p.subVectors(h,l),d.cross(p),o[n]=d.x,o[n+1]=d.y,o[n+2]=d.z,o[n+3]=d.x,o[n+4]=d.y,o[n+5]=d.z,o[n+6]=d.x,o[n+7]=d.y,o[n+8]=d.z;this.normalizeNormals(),t.normal.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var r=this.attributes;for(var i in r)if(e.attributes[i]!==void 0)for(var n=r[i],a=n.array,o=e.attributes[i],s=o.array,c=o.itemSize,u=0,h=c*t;u<s.length;u++,h++)a[h]=s[u];return this},normalizeNormals:function(){var e=new b;return function(){for(var r=this.attributes.normal,i=0,n=r.count;i<n;i++)e.x=r.getX(i),e.y=r.getY(i),e.z=r.getZ(i),e.normalize(),r.setXYZ(i,e.x,e.y,e.z)}}(),toNonIndexed:function(){function e(m,v){for(var g=m.array,_=m.itemSize,w=new g.constructor(v.length*_),y=0,S=0,L=0,I=v.length;L<I;L++){y=v[L]*_;for(var P=0;P<_;P++)w[S++]=g[y++]}return new xe(w,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var t=new K,r=this.index.array,i=this.attributes;for(var n in i){var a=i[n],o=e(a,r);t.addAttribute(n,o)}var s=this.morphAttributes;for(n in s){for(var c=[],u=s[n],h=0,l=u.length;h<l;h++){var a=u[h],o=e(a,r);c.push(o)}t.morphAttributes[n]=c}for(var f=this.groups,h=0,d=f.length;h<d;h++){var p=f[h];t.addGroup(p.start,p.count,p.materialIndex)}return t},toJSON:function(){var e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){var t=this.parameters;for(var r in t)t[r]!==void 0&&(e[r]=t[r]);return e}e.data={attributes:{}};var i=this.index;if(i!==null){var n=Array.prototype.slice.call(i.array);e.data.index={type:i.array.constructor.name,array:n}}var a=this.attributes;for(var r in a){var o=a[r],n=Array.prototype.slice.call(o.array);e.data.attributes[r]={itemSize:o.itemSize,type:o.array.constructor.name,array:n,normalized:o.normalized}}var s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));var c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e},clone:function(){return new K().copy(this)},copy:function(e){var t,r,i;this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;var n=e.index;n!==null&&this.setIndex(n.clone());var a=e.attributes;for(t in a){var o=a[t];this.addAttribute(t,o.clone())}var s=e.morphAttributes;for(t in s){var c=[],u=s[t];for(r=0,i=u.length;r<i;r++)c.push(u[r].clone());this.morphAttributes[t]=c}var h=e.groups;for(r=0,i=h.length;r<i;r++){var l=h[r];this.addGroup(l.start,l.count,l.materialIndex)}var f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());var d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Tn(e,t,r,i,n,a){de.call(this),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:n,depthSegments:a},this.fromBufferGeometry(new Ur(e,t,r,i,n,a)),this.mergeVertices()}Tn.prototype=Object.create(de.prototype);Tn.prototype.constructor=Tn;function Ur(e,t,r,i,n,a){K.call(this),this.type="BoxBufferGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:n,depthSegments:a};var o=this;e=e||1,t=t||1,r=r||1,i=Math.floor(i)||1,n=Math.floor(n)||1,a=Math.floor(a)||1;var s=[],c=[],u=[],h=[],l=0,f=0;d("z","y","x",-1,-1,r,t,e,a,n,0),d("z","y","x",1,-1,r,t,-e,a,n,1),d("x","z","y",1,1,e,r,t,i,a,2),d("x","z","y",1,-1,e,r,-t,i,a,3),d("x","y","z",1,-1,e,t,r,i,n,4),d("x","y","z",-1,-1,e,t,-r,i,n,5),this.setIndex(s),this.addAttribute("position",new Z(c,3)),this.addAttribute("normal",new Z(u,3)),this.addAttribute("uv",new Z(h,2));function d(p,m,v,g,_,w,y,S,L,I,P){var A=w/L,D=y/I,F=w/2,N=y/2,G=S/2,H=L+1,z=I+1,J=0,Y=0,q,E,T=new b;for(E=0;E<z;E++){var B=E*D-N;for(q=0;q<H;q++){var R=q*A-F;T[p]=R*g,T[m]=B*_,T[v]=G,c.push(T.x,T.y,T.z),T[p]=0,T[m]=0,T[v]=S>0?1:-1,u.push(T.x,T.y,T.z),h.push(q/L),h.push(1-E/I),J+=1}}for(E=0;E<I;E++)for(q=0;q<L;q++){var Q=l+q+H*E,U=l+q+H*(E+1),W=l+(q+1)+H*(E+1),j=l+(q+1)+H*E;s.push(Q,U,j),s.push(U,W,j),Y+=6}o.addGroup(f,Y,P),f+=Y,l+=J}}Ur.prototype=Object.create(K.prototype);Ur.prototype.constructor=Ur;function Sn(e,t,r,i){de.call(this),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i},this.fromBufferGeometry(new hr(e,t,r,i)),this.mergeVertices()}Sn.prototype=Object.create(de.prototype);Sn.prototype.constructor=Sn;function hr(e,t,r,i){K.call(this),this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i},e=e||1,t=t||1;var n=e/2,a=t/2,o=Math.floor(r)||1,s=Math.floor(i)||1,c=o+1,u=s+1,h=e/o,l=t/s,f,d,p=[],m=[],v=[],g=[];for(d=0;d<u;d++){var _=d*l-a;for(f=0;f<c;f++){var w=f*h-n;m.push(w,-_,0),v.push(0,0,1),g.push(f/o),g.push(1-d/s)}}for(d=0;d<s;d++)for(f=0;f<o;f++){var y=f+c*d,S=f+c*(d+1),L=f+1+c*(d+1),I=f+1+c*d;p.push(y,S,I),p.push(S,L,I)}this.setIndex(p),this.addAttribute("position",new Z(m,3)),this.addAttribute("normal",new Z(v,3)),this.addAttribute("uv",new Z(g,2))}hr.prototype=Object.create(K.prototype);hr.prototype.constructor=hr;var od=0;function ve(){Object.defineProperty(this,"id",{value:od++}),this.uuid=ge.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.lights=!0,this.blending=Or,this.side=tn,this.flatShading=!1,this.vertexColors=Js,this.opacity=1,this.transparent=!1,this.blendSrc=Ks,this.blendDst=ec,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.userData={},this.needsUpdate=!0}ve.prototype=Object.assign(Object.create(pr.prototype),{constructor:ve,isMaterial:!0,onBeforeCompile:function(){},setValues:function(e){if(e!==void 0)for(var t in e){var r=e[t];if(r===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Zs;continue}var i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}},toJSON:function(e){var t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});var r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearCoat!==void 0&&(r.clearCoat=this.clearCoat),this.clearCoatRoughness!==void 0&&(r.clearCoatRoughness=this.clearCoatRoughness),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,r.reflectivity=this.reflectivity,this.combine!==void 0&&(r.combine=this.combine),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(r.blending=this.blending),this.flatShading===!0&&(r.flatShading=this.flatShading),this.side!==tn&&(r.side=this.side),this.vertexColors!==Js&&(r.vertexColors=this.vertexColors),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(r.morphTargets=!0),this.skinning===!0&&(r.skinning=!0),this.visible===!1&&(r.visible=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function i(o){var s=[];for(var c in o){var u=o[c];delete u.metadata,s.push(u)}return s}if(t){var n=i(e.textures),a=i(e.images);n.length>0&&(r.textures=n),a.length>0&&(r.images=a)}return r},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.lights=e.lights,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.userData=JSON.parse(JSON.stringify(e.userData)),this.clipShadows=e.clipShadows,this.clipIntersection=e.clipIntersection;var t=e.clippingPlanes,r=null;if(t!==null){var i=t.length;r=new Array(i);for(var n=0;n!==i;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.shadowSide=e.shadowSide,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Tt(e){ve.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}Tt.prototype=Object.create(ve.prototype);Tt.prototype.constructor=Tt;Tt.prototype.isShaderMaterial=!0;Tt.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=e.extensions,this};Tt.prototype.toJSON=function(e){var t=ve.prototype.toJSON.call(this,e);t.uniforms={};for(var r in this.uniforms){var i=this.uniforms[r],n=i.value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;var a={};for(var o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(t.extensions=a),t};function ni(e,t){this.origin=e!==void 0?e:new b,this.direction=t!==void 0?t:new b}Object.assign(ni.prototype,{set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new b),t.copy(this.direction).multiplyScalar(e).add(this.origin)},lookAt:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this},recast:function(){var e=new b;return function(r){return this.origin.copy(this.at(r,e)),this}}(),closestPointToPoint:function(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new b),t.subVectors(e,this.origin);var r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)},distanceToPoint:function(e){return Math.sqrt(this.distanceSqToPoint(e))},distanceSqToPoint:function(){var e=new b;return function(r){var i=e.subVectors(r,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(r):(e.copy(this.direction).multiplyScalar(i).add(this.origin),e.distanceToSquared(r))}}(),distanceSqToSegment:function(){var e=new b,t=new b,r=new b;return function(n,a,o,s){e.copy(n).add(a).multiplyScalar(.5),t.copy(a).sub(n).normalize(),r.copy(this.origin).sub(e);var c=n.distanceTo(a)*.5,u=-this.direction.dot(t),h=r.dot(this.direction),l=-r.dot(t),f=r.lengthSq(),d=Math.abs(1-u*u),p,m,v,g;if(d>0)if(p=u*l-h,m=u*h-l,g=c*d,p>=0)if(m>=-g)if(m<=g){var _=1/d;p*=_,m*=_,v=p*(p+u*m+2*h)+m*(u*p+m+2*l)+f}else m=c,p=Math.max(0,-(u*m+h)),v=-p*p+m*(m+2*l)+f;else m=-c,p=Math.max(0,-(u*m+h)),v=-p*p+m*(m+2*l)+f;else m<=-g?(p=Math.max(0,-(-u*c+h)),m=p>0?-c:Math.min(Math.max(-c,-l),c),v=-p*p+m*(m+2*l)+f):m<=g?(p=0,m=Math.min(Math.max(-c,-l),c),v=m*(m+2*l)+f):(p=Math.max(0,-(u*c+h)),m=p>0?c:Math.min(Math.max(-c,-l),c),v=-p*p+m*(m+2*l)+f);else m=u>0?-c:c,p=Math.max(0,-(u*m+h)),v=-p*p+m*(m+2*l)+f;return o&&o.copy(this.direction).multiplyScalar(p).add(this.origin),s&&s.copy(t).multiplyScalar(m).add(e),v}}(),intersectSphere:function(){var e=new b;return function(r,i){e.subVectors(r.center,this.origin);var n=e.dot(this.direction),a=e.dot(e)-n*n,o=r.radius*r.radius;if(a>o)return null;var s=Math.sqrt(o-a),c=n-s,u=n+s;return c<0&&u<0?null:c<0?this.at(u,i):this.at(c,i)}}(),intersectsSphere:function(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius},distanceToPlane:function(e){var t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;var r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null},intersectPlane:function(e,t){var r=this.distanceToPlane(e);return r===null?null:this.at(r,t)},intersectsPlane:function(e){var t=e.distanceToPoint(this.origin);if(t===0)return!0;var r=e.normal.dot(this.direction);return r*t<0},intersectBox:function(e,t){var r,i,n,a,o,s,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,l=this.origin;return c>=0?(r=(e.min.x-l.x)*c,i=(e.max.x-l.x)*c):(r=(e.max.x-l.x)*c,i=(e.min.x-l.x)*c),u>=0?(n=(e.min.y-l.y)*u,a=(e.max.y-l.y)*u):(n=(e.max.y-l.y)*u,a=(e.min.y-l.y)*u),r>a||n>i||((n>r||r!==r)&&(r=n),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-l.z)*h,s=(e.max.z-l.z)*h):(o=(e.max.z-l.z)*h,s=(e.min.z-l.z)*h),r>s||o>i)||((o>r||r!==r)&&(r=o),(s<i||i!==i)&&(i=s),i<0)?null:this.at(r>=0?r:i,t)},intersectsBox:function(){var e=new b;return function(r){return this.intersectBox(r,e)!==null}}(),intersectTriangle:function(){var e=new b,t=new b,r=new b,i=new b;return function(a,o,s,c,u){t.subVectors(o,a),r.subVectors(s,a),i.crossVectors(t,r);var h=this.direction.dot(i),l;if(h>0){if(c)return null;l=1}else if(h<0)l=-1,h=-h;else return null;e.subVectors(this.origin,a);var f=l*this.direction.dot(r.crossVectors(e,r));if(f<0)return null;var d=l*this.direction.dot(t.cross(e));if(d<0||f+d>h)return null;var p=-l*e.dot(i);return p<0?null:this.at(p/h,u)}}(),applyMatrix4:function(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}});function dt(e,t,r){this.a=e!==void 0?e:new b,this.b=t!==void 0?t:new b,this.c=r!==void 0?r:new b}Object.assign(dt,{getNormal:function(){var e=new b;return function(r,i,n,a){a===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),a=new b),a.subVectors(n,i),e.subVectors(r,i),a.cross(e);var o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}}(),getBarycoord:function(){var e=new b,t=new b,r=new b;return function(n,a,o,s,c){e.subVectors(s,a),t.subVectors(o,a),r.subVectors(n,a);var u=e.dot(e),h=e.dot(t),l=e.dot(r),f=t.dot(t),d=t.dot(r),p=u*f-h*h;if(c===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),c=new b),p===0)return c.set(-2,-1,-1);var m=1/p,v=(f*l-h*d)*m,g=(u*d-h*l)*m;return c.set(1-v-g,g,v)}}(),containsPoint:function(){var e=new b;return function(r,i,n,a){return dt.getBarycoord(r,i,n,a,e),e.x>=0&&e.y>=0&&e.x+e.y<=1}}(),getUV:function(){var e=new b;return function(r,i,n,a,o,s,c,u){return this.getBarycoord(r,i,n,a,e),u.set(0,0),u.addScaledVector(o,e.x),u.addScaledVector(s,e.y),u.addScaledVector(c,e.z),u}}()});Object.assign(dt.prototype,{set:function(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this},setFromPointsAndIndices:function(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},getArea:function(){var e=new b,t=new b;return function(){return e.subVectors(this.c,this.b),t.subVectors(this.a,this.b),e.cross(t).length()*.5}}(),getMidpoint:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new b),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(e){return dt.getNormal(this.a,this.b,this.c,e)},getPlane:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new b),e.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(e,t){return dt.getBarycoord(e,this.a,this.b,this.c,t)},containsPoint:function(e){return dt.containsPoint(e,this.a,this.b,this.c)},getUV:function(e,t,r,i,n){return dt.getUV(e,this.a,this.b,this.c,t,r,i,n)},intersectsBox:function(e){return e.intersectsTriangle(this)},closestPointToPoint:function(){var e=new b,t=new b,r=new b,i=new b,n=new b,a=new b;return function(s,c){c===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),c=new b);var u=this.a,h=this.b,l=this.c,f,d;e.subVectors(h,u),t.subVectors(l,u),i.subVectors(s,u);var p=e.dot(i),m=t.dot(i);if(p<=0&&m<=0)return c.copy(u);n.subVectors(s,h);var v=e.dot(n),g=t.dot(n);if(v>=0&&g<=v)return c.copy(h);var _=p*g-v*m;if(_<=0&&p>=0&&v<=0)return f=p/(p-v),c.copy(u).addScaledVector(e,f);a.subVectors(s,l);var w=e.dot(a),y=t.dot(a);if(y>=0&&w<=y)return c.copy(l);var S=w*m-p*y;if(S<=0&&m>=0&&y<=0)return d=m/(m-y),c.copy(u).addScaledVector(t,d);var L=v*y-w*g;if(L<=0&&g-v>=0&&w-y>=0)return r.subVectors(l,h),d=(g-v)/(g-v+(w-y)),c.copy(h).addScaledVector(r,d);var I=1/(L+S+_);return f=S*I,d=_*I,c.copy(u).addScaledVector(e,f).addScaledVector(t,d)}}(),equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}});function It(e){ve.call(this),this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.lights=!1,this.setValues(e)}It.prototype=Object.create(ve.prototype);It.prototype.constructor=It;It.prototype.isMeshBasicMaterial=!0;It.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};function ht(e,t){$.call(this),this.type="Mesh",this.geometry=e!==void 0?e:new K,this.material=t!==void 0?t:new It({color:Math.random()*16777215}),this.drawMode=oc,this.updateMorphTargets()}ht.prototype=Object.assign(Object.create($.prototype),{constructor:ht,isMesh:!0,setDrawMode:function(e){this.drawMode=e},copy:function(e){return $.prototype.copy.call(this,e),this.drawMode=e.drawMode,e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this},updateMorphTargets:function(){var e=this.geometry,t,r,i;if(e.isBufferGeometry){var n=e.morphAttributes,a=Object.keys(n);if(a.length>0){var o=n[a[0]];if(o!==void 0)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},t=0,r=o.length;t<r;t++)i=o[t].name||String(t),this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=t}}else{var s=e.morphTargets;s!==void 0&&s.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(){var e=new fe,t=new ni,r=new Vt,i=new b,n=new b,a=new b,o=new b,s=new b,c=new b,u=new V,h=new V,l=new V,f=new b,d=new b;function p(v,g,_,w,y,S,L,I){var P;if(g.side===ft?P=w.intersectTriangle(L,S,y,!0,I):P=w.intersectTriangle(y,S,L,g.side!==rn,I),P===null)return null;d.copy(I),d.applyMatrix4(v.matrixWorld);var A=_.ray.origin.distanceTo(d);return A<_.near||A>_.far?null:{distance:A,point:d.clone(),object:v}}function m(v,g,_,w,y,S,L,I,P){i.fromBufferAttribute(y,L),n.fromBufferAttribute(y,I),a.fromBufferAttribute(y,P);var A=p(v,g,_,w,i,n,a,f);if(A){S&&(u.fromBufferAttribute(S,L),h.fromBufferAttribute(S,I),l.fromBufferAttribute(S,P),A.uv=dt.getUV(f,i,n,a,u,h,l,new V));var D=new En(L,I,P);dt.getNormal(i,n,a,D.normal),A.face=D}return A}return function(g,_){var w=this.geometry,y=this.material,S=this.matrixWorld;if(y!==void 0&&(w.boundingSphere===null&&w.computeBoundingSphere(),r.copy(w.boundingSphere),r.applyMatrix4(S),g.ray.intersectsSphere(r)!==!1&&(e.getInverse(S),t.copy(g.ray).applyMatrix4(e),!(w.boundingBox!==null&&t.intersectsBox(w.boundingBox)===!1)))){var L;if(w.isBufferGeometry){var I,P,A,D=w.index,F=w.attributes.position,N=w.attributes.uv,G=w.groups,H=w.drawRange,z,J,Y,q,E,T,B,R;if(D!==null)if(Array.isArray(y))for(z=0,Y=G.length;z<Y;z++)for(E=G[z],T=y[E.materialIndex],B=Math.max(E.start,H.start),R=Math.min(E.start+E.count,H.start+H.count),J=B,q=R;J<q;J+=3)I=D.getX(J),P=D.getX(J+1),A=D.getX(J+2),L=m(this,T,g,t,F,N,I,P,A),L&&(L.faceIndex=Math.floor(J/3),_.push(L));else for(B=Math.max(0,H.start),R=Math.min(D.count,H.start+H.count),z=B,Y=R;z<Y;z+=3)I=D.getX(z),P=D.getX(z+1),A=D.getX(z+2),L=m(this,y,g,t,F,N,I,P,A),L&&(L.faceIndex=Math.floor(z/3),_.push(L));else if(F!==void 0)if(Array.isArray(y))for(z=0,Y=G.length;z<Y;z++)for(E=G[z],T=y[E.materialIndex],B=Math.max(E.start,H.start),R=Math.min(E.start+E.count,H.start+H.count),J=B,q=R;J<q;J+=3)I=J,P=J+1,A=J+2,L=m(this,T,g,t,F,N,I,P,A),L&&(L.faceIndex=Math.floor(J/3),_.push(L));else for(B=Math.max(0,H.start),R=Math.min(F.count,H.start+H.count),z=B,Y=R;z<Y;z+=3)I=z,P=z+1,A=z+2,L=m(this,y,g,t,F,N,I,P,A),L&&(L.faceIndex=Math.floor(z/3),_.push(L))}else if(w.isGeometry){var Q,U,W,j=Array.isArray(y),pe=w.vertices,me=w.faces,le,k=w.faceVertexUvs[0];k.length>0&&(le=k);for(var ce=0,Re=me.length;ce<Re;ce++){var _e=me[ce],ct=j?y[_e.materialIndex]:y;if(ct!==void 0){if(Q=pe[_e.a],U=pe[_e.b],W=pe[_e.c],ct.morphTargets===!0){var Ve=w.morphTargets,Ke=this.morphTargetInfluences;i.set(0,0,0),n.set(0,0,0),a.set(0,0,0);for(var nt=0,Yt=Ve.length;nt<Yt;nt++){var Dt=Ke[nt];if(Dt!==0){var je=Ve[nt].vertices;i.addScaledVector(o.subVectors(je[_e.a],Q),Dt),n.addScaledVector(s.subVectors(je[_e.b],U),Dt),a.addScaledVector(c.subVectors(je[_e.c],W),Dt)}}i.add(Q),n.add(U),a.add(W),Q=i,U=n,W=a}if(L=p(this,ct,g,t,Q,U,W,f),L){if(le&&le[ce]){var et=le[ce];u.copy(et[0]),h.copy(et[1]),l.copy(et[2]),L.uv=dt.getUV(f,Q,U,W,u,h,l,new V)}L.face=_e,L.faceIndex=ce,_.push(L)}}}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function sd(e,t,r,i){var n=new se(0),a=0,o,s,c=null,u=0;function h(f,d,p,m){var v=d.background;if(v===null?(l(n,a),c=null,u=0):v&&v.isColor&&(l(v,1),m=!0,c=null,u=0),(e.autoClear||m)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),v&&(v.isCubeTexture||v.isWebGLRenderTargetCube)){s===void 0&&(s=new ht(new Ur(1,1,1),new Tt({type:"BackgroundCubeMaterial",uniforms:xi(Qt.cube.uniforms),vertexShader:Qt.cube.vertexShader,fragmentShader:Qt.cube.fragmentShader,side:ft,depthTest:!0,depthWrite:!1,fog:!1})),s.geometry.removeAttribute("normal"),s.geometry.removeAttribute("uv"),s.onBeforeRender=function(_,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.tCube.value}}),r.update(s));var g=v.isWebGLRenderTargetCube?v.texture:v;s.material.uniforms.tCube.value=g,s.material.uniforms.tFlip.value=v.isWebGLRenderTargetCube?1:-1,(c!==v||u!==g.version)&&(s.material.needsUpdate=!0,c=v,u=g.version),f.unshift(s,s.geometry,s.material,0,0,null)}else v&&v.isTexture&&(o===void 0&&(o=new ht(new hr(2,2),new Tt({type:"BackgroundMaterial",uniforms:xi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.removeAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(o)),o.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),o.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||u!==v.version)&&(o.material.needsUpdate=!0,c=v,u=v.version),f.unshift(o,o.geometry,o.material,0,0,null))}function l(f,d){t.buffers.color.setClear(f.r,f.g,f.b,d,i)}return{getClearColor:function(){return n},setClearColor:function(f,d){n.set(f),a=d!==void 0?d:1,l(n,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,l(n,a)},render:h}}function cd(e,t,r,i){var n;function a(c){n=c}function o(c,u){e.drawArrays(n,c,u),r.update(u,n)}function s(c,u,h){var l;if(i.isWebGL2)l=e;else if(l=t.get("ANGLE_instanced_arrays"),l===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}l[i.isWebGL2?"drawArraysInstanced":"drawArraysInstancedANGLE"](n,u,h,c.maxInstancedCount),r.update(h,n,c.maxInstancedCount)}this.setMode=a,this.render=o,this.renderInstances=s}function ud(e,t,r){var i;function n(){if(i!==void 0)return i;var L=t.get("EXT_texture_filter_anisotropic");return L!==null?i=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function a(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}var o=typeof WebGL2RenderingContext!="undefined"&&e instanceof WebGL2RenderingContext,s=r.precision!==void 0?r.precision:"highp",c=a(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);var u=r.logarithmicDepthBuffer===!0,h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),l=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),_=l>0,w=o||!!t.get("OES_texture_float"),y=_&&w,S=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:l,maxTextureSize:f,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:y,maxSamples:S}}function hd(){var e=this,t=null,r=0,i=!1,n=!1,a=new Jt,o=new ut,s={value:null,needsUpdate:!1};this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(h,l,f){var d=h.length!==0||l||r!==0||i;return i=l,t=u(h,f,0),r=h.length,d},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1,c()},this.setState=function(h,l,f,d,p,m){if(!i||h===null||h.length===0||n&&!f)n?u(null):c();else{var v=n?0:r,g=v*4,_=p.clippingState||null;s.value=_,_=u(h,d,g,m);for(var w=0;w!==g;++w)_[w]=t[w];p.clippingState=_,this.numIntersection=l?this.numPlanes:0,this.numPlanes+=v}};function c(){s.value!==t&&(s.value=t,s.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,l,f,d){var p=h!==null?h.length:0,m=null;if(p!==0){if(m=s.value,d!==!0||m===null){var v=f+p*4,g=l.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<v)&&(m=new Float32Array(v));for(var _=0,w=f;_!==p;++_,w+=4)a.copy(h[_]).applyMatrix4(g,o),a.normal.toArray(m,w),m[w+3]=a.constant}s.value=m,s.needsUpdate=!0}return e.numPlanes=p,m}}function ld(e){var t={};return{get:function(r){if(t[r]!==void 0)return t[r];var i;switch(r){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(r)}return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),t[r]=i,i}}}function fd(e,t,r){var i={},n={};function a(u){var h=u.target,l=i[h.id];l.index!==null&&t.remove(l.index);for(var f in l.attributes)t.remove(l.attributes[f]);h.removeEventListener("dispose",a),delete i[h.id];var d=n[l.id];d&&(t.remove(d),delete n[l.id]),r.memory.geometries--}function o(u,h){var l=i[h.id];return l||(h.addEventListener("dispose",a),h.isBufferGeometry?l=h:h.isGeometry&&(h._bufferGeometry===void 0&&(h._bufferGeometry=new K().setFromObject(u)),l=h._bufferGeometry),i[h.id]=l,r.memory.geometries++,l)}function s(u){var h=u.index,l=u.attributes;h!==null&&t.update(h,e.ELEMENT_ARRAY_BUFFER);for(var f in l)t.update(l[f],e.ARRAY_BUFFER);var d=u.morphAttributes;for(var f in d)for(var p=d[f],m=0,v=p.length;m<v;m++)t.update(p[m],e.ARRAY_BUFFER)}function c(u){var h=n[u.id];if(h)return h;var l=[],f=u.index,d=u.attributes;if(f!==null)for(var p=f.array,m=0,v=p.length;m<v;m+=3){var g=p[m+0],_=p[m+1],w=p[m+2];l.push(g,_,_,w,w,g)}else for(var p=d.position.array,m=0,v=p.length/3-1;m<v;m+=3){var g=m+0,_=m+1,w=m+2;l.push(g,_,_,w,w,g)}return h=new(hc(l)>65535?wi:_i)(l,1),t.update(h,e.ELEMENT_ARRAY_BUFFER),n[u.id]=h,h}return{get:o,update:s,getWireframeAttribute:c}}function dd(e,t,r,i){var n;function a(l){n=l}var o,s;function c(l){o=l.type,s=l.bytesPerElement}function u(l,f){e.drawElements(n,f,o,l*s),r.update(f,n)}function h(l,f,d){var p;if(i.isWebGL2)p=e;else{var p=t.get("ANGLE_instanced_arrays");if(p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}}p[i.isWebGL2?"drawElementsInstanced":"drawElementsInstancedANGLE"](n,d,o,f*s,l.maxInstancedCount),r.update(d,n,l.maxInstancedCount)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function pd(e){var t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(s=s||1,r.calls++,o){case e.TRIANGLES:r.triangles+=s*(a/3);break;case e.TRIANGLE_STRIP:case e.TRIANGLE_FAN:r.triangles+=s*(a-2);break;case e.LINES:r.lines+=s*(a/2);break;case e.LINE_STRIP:r.lines+=s*(a-1);break;case e.LINE_LOOP:r.lines+=s*a;break;case e.POINTS:r.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){r.frame++,r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:n,update:i}}function md(e,t){return Math.abs(t[1])-Math.abs(e[1])}function vd(e){var t={},r=new Float32Array(8);function i(n,a,o,s){var c=n.morphTargetInfluences,u=c.length,h=t[a.id];if(h===void 0){h=[];for(var l=0;l<u;l++)h[l]=[l,0];t[a.id]=h}for(var f=o.morphTargets&&a.morphAttributes.position,d=o.morphNormals&&a.morphAttributes.normal,l=0;l<u;l++){var p=h[l];p[1]!==0&&(f&&a.removeAttribute("morphTarget"+l),d&&a.removeAttribute("morphNormal"+l))}for(var l=0;l<u;l++){var p=h[l];p[0]=l,p[1]=c[l]}h.sort(md);for(var l=0;l<8;l++){var p=h[l];if(p){var m=p[0],v=p[1];if(v){f&&a.addAttribute("morphTarget"+l,f[m]),d&&a.addAttribute("morphNormal"+l,d[m]),r[l]=v;continue}}r[l]=0}s.getUniforms().setValue(e,"morphTargetInfluences",r)}return{update:i}}function gd(e,t){var r={};function i(a){var o=t.render.frame,s=a.geometry,c=e.get(a,s);return r[c.id]!==o&&(s.isGeometry&&c.updateFromObject(a),e.update(c),r[c.id]=o),c}function n(){r={}}return{update:i,dispose:n}}function lr(e,t,r,i,n,a,o,s,c,u){e=e!==void 0?e:[],t=t!==void 0?t:So,Ne.call(this,e,t,r,i,n,a,o,s,c,u),this.flipY=!1}lr.prototype=Object.create(Ne.prototype);lr.prototype.constructor=lr;lr.prototype.isCubeTexture=!0;Object.defineProperty(lr.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});function bi(e,t,r,i){Ne.call(this,null),this.image={data:e,width:t,height:r,depth:i},this.magFilter=it,this.minFilter=it,this.generateMipmaps=!1,this.flipY=!1}bi.prototype=Object.create(Ne.prototype);bi.prototype.constructor=bi;bi.prototype.isDataTexture3D=!0;var lc=new Ne,yd=new bi,fc=new lr;function dc(){this.seq=[],this.map={}}var cs=[],us=[],hs=new Float32Array(16),ls=new Float32Array(9),fs=new Float32Array(4);function ai(e,t,r){var i=e[0];if(i<=0||i>0)return e;var n=t*r,a=cs[n];if(a===void 0&&(a=new Float32Array(n),cs[n]=a),t!==0){i.toArray(a,0);for(var o=1,s=0;o!==t;++o)s+=r,e[o].toArray(a,s)}return a}function ke(e,t){if(e.length!==t.length)return!1;for(var r=0,i=e.length;r<i;r++)if(e[r]!==t[r])return!1;return!0}function st(e,t){for(var r=0,i=t.length;r<i;r++)e[r]=t[r]}function pc(e,t){var r=us[t];r===void 0&&(r=new Int32Array(t),us[t]=r);for(var i=0;i!==t;++i)r[i]=e.allocTextureUnit();return r}function xd(e,t){var r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function _d(e,t){var r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function wd(e,t){var r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(ke(r,t))return;e.uniform2fv(this.addr,t),st(r,t)}}function bd(e,t){var r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(ke(r,t))return;e.uniform3fv(this.addr,t),st(r,t)}}function Md(e,t){var r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(ke(r,t))return;e.uniform4fv(this.addr,t),st(r,t)}}function Ed(e,t){var r=this.cache,i=t.elements;if(i===void 0){if(ke(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),st(r,t)}else{if(ke(r,i))return;fs.set(i),e.uniformMatrix2fv(this.addr,!1,fs),st(r,i)}}function Td(e,t){var r=this.cache,i=t.elements;if(i===void 0){if(ke(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),st(r,t)}else{if(ke(r,i))return;ls.set(i),e.uniformMatrix3fv(this.addr,!1,ls),st(r,i)}}function Sd(e,t){var r=this.cache,i=t.elements;if(i===void 0){if(ke(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),st(r,t)}else{if(ke(r,i))return;hs.set(i),e.uniformMatrix4fv(this.addr,!1,hs),st(r,i)}}function Ad(e,t,r){var i=this.cache,n=r.allocTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),r.setTexture2D(t||lc,n)}function Ld(e,t,r){var i=this.cache,n=r.allocTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),r.setTexture3D(t||yd,n)}function Rd(e,t,r){var i=this.cache,n=r.allocTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),r.setTextureCube(t||fc,n)}function mc(e,t){var r=this.cache;ke(r,t)||(e.uniform2iv(this.addr,t),st(r,t))}function vc(e,t){var r=this.cache;ke(r,t)||(e.uniform3iv(this.addr,t),st(r,t))}function gc(e,t){var r=this.cache;ke(r,t)||(e.uniform4iv(this.addr,t),st(r,t))}function Cd(e){switch(e){case 5126:return xd;case 35664:return wd;case 35665:return bd;case 35666:return Md;case 35674:return Ed;case 35675:return Td;case 35676:return Sd;case 35678:case 36198:return Ad;case 35679:return Ld;case 35680:return Rd;case 5124:case 35670:return _d;case 35667:case 35671:return mc;case 35668:case 35672:return vc;case 35669:case 35673:return gc}}function Pd(e,t){var r=this.cache;ke(r,t)||(e.uniform1fv(this.addr,t),st(r,t))}function Id(e,t){var r=this.cache;ke(r,t)||(e.uniform1iv(this.addr,t),st(r,t))}function Od(e,t){var r=this.cache,i=ai(t,this.size,2);ke(r,i)||(e.uniform2fv(this.addr,i),this.updateCache(i))}function Dd(e,t){var r=this.cache,i=ai(t,this.size,3);ke(r,i)||(e.uniform3fv(this.addr,i),this.updateCache(i))}function Fd(e,t){var r=this.cache,i=ai(t,this.size,4);ke(r,i)||(e.uniform4fv(this.addr,i),this.updateCache(i))}function Nd(e,t){var r=this.cache,i=ai(t,this.size,4);ke(r,i)||(e.uniformMatrix2fv(this.addr,!1,i),this.updateCache(i))}function Bd(e,t){var r=this.cache,i=ai(t,this.size,9);ke(r,i)||(e.uniformMatrix3fv(this.addr,!1,i),this.updateCache(i))}function Ud(e,t){var r=this.cache,i=ai(t,this.size,16);ke(r,i)||(e.uniformMatrix4fv(this.addr,!1,i),this.updateCache(i))}function Gd(e,t,r){var i=this.cache,n=t.length,a=pc(r,n);ke(i,a)===!1&&(e.uniform1iv(this.addr,a),st(i,a));for(var o=0;o!==n;++o)r.setTexture2D(t[o]||lc,a[o])}function zd(e,t,r){var i=this.cache,n=t.length,a=pc(r,n);ke(i,a)===!1&&(e.uniform1iv(this.addr,a),st(i,a));for(var o=0;o!==n;++o)r.setTextureCube(t[o]||fc,a[o])}function Hd(e){switch(e){case 5126:return Pd;case 35664:return Od;case 35665:return Dd;case 35666:return Fd;case 35674:return Nd;case 35675:return Bd;case 35676:return Ud;case 35678:return Gd;case 35680:return zd;case 5124:case 35670:return Id;case 35667:case 35671:return mc;case 35668:case 35672:return vc;case 35669:case 35673:return gc}}function Vd(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Cd(t.type)}function yc(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=Hd(t.type)}yc.prototype.updateCache=function(e){var t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),st(t,e)};function xc(e){this.id=e,dc.call(this)}xc.prototype.setValue=function(e,t,r){for(var i=this.seq,n=0,a=i.length;n!==a;++n){var o=i[n];o.setValue(e,t[o.id],r)}};var Ta=/([\w\d_]+)(\])?(\[|\.)?/g;function ds(e,t){e.seq.push(t),e.map[t.id]=t}function kd(e,t,r){var i=e.name,n=i.length;for(Ta.lastIndex=0;;){var a=Ta.exec(i),o=Ta.lastIndex,s=a[1],c=a[2]==="]",u=a[3];if(c&&(s=s|0),u===void 0||u==="["&&o+2===n){ds(r,u===void 0?new Vd(s,e,t):new yc(s,e,t));break}else{var h=r.map,l=h[s];l===void 0&&(l=new xc(s),ds(r,l)),r=l}}}function sr(e,t,r){dc.call(this),this.renderer=r;for(var i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),n=0;n<i;++n){var a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);kd(a,o,this)}}sr.prototype.setValue=function(e,t,r){var i=this.map[t];i!==void 0&&i.setValue(e,r,this.renderer)};sr.prototype.setOptional=function(e,t,r){var i=t[r];i!==void 0&&this.setValue(e,r,i)};sr.upload=function(e,t,r,i){for(var n=0,a=t.length;n!==a;++n){var o=t[n],s=r[o.id];s.needsUpdate!==!1&&o.setValue(e,s.value,i)}};sr.seqWithValue=function(e,t){for(var r=[],i=0,n=e.length;i!==n;++i){var a=e[i];a.id in t&&r.push(a)}return r};function Wd(e){for(var t=e.split(`
`),r=0;r<t.length;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function ps(e,t,r){var i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)===!1&&console.error("THREE.WebGLShader: Shader couldn't compile."),e.getShaderInfoLog(i)!==""&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",t===e.VERTEX_SHADER?"vertex":"fragment",e.getShaderInfoLog(i),Wd(r)),i}var Xd=0;function _c(e){switch(e){case Mn:return["Linear","( value )"];case Dh:return["sRGB","( value )"];case Fh:return["RGBE","( value )"];case Nh:return["RGBM","( value, 7.0 )"];case Bh:return["RGBM","( value, 16.0 )"];case Uh:return["RGBD","( value, 256.0 )"];case sc:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+e)}}function hn(e,t){var r=_c(t);return"vec4 "+e+"( vec4 value ) { return "+r[0]+"ToLinear"+r[1]+"; }"}function jd(e,t){var r=_c(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+r[0]+r[1]+"; }"}function qd(e,t){var r;switch(t){case tc:r="Linear";break;case eh:r="Reinhard";break;case th:r="Uncharted2";break;case rh:r="OptimizedCineon";break;case ih:r="ACESFilmic";break;default:throw new Error("unsupported toneMapping: "+t)}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}function Yd(e,t,r){e=e||{};var i=[e.derivatives||t.envMapCubeUV||t.bumpMap||t.normalMap&&!t.objectSpaceNormalMap||t.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(e.fragDepth||t.logarithmicDepthBuffer)&&r.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",e.drawBuffers&&r.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(e.shaderTextureLOD||t.envMap)&&r.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""];return i.filter(ci).join(`
`)}function Zd(e){var t=[];for(var r in e){var i=e[r];i!==!1&&t.push("#define "+r+" "+i)}return t.join(`
`)}function Jd(e,t){for(var r={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),n=0;n<i;n++){var a=e.getActiveAttrib(t,n),o=a.name;r[o]=e.getAttribLocation(t,o)}return r}function ci(e){return e!==""}function ms(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights)}function vs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Za(e){var t=/^[ \t]*#include +<([\w\d./]+)>/gm;function r(i,n){var a=Te[n];if(a===void 0)throw new Error("Can not resolve #include <"+n+">");return Za(a)}return e.replace(t,r)}function gs(e){var t=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;function r(i,n,a,o){for(var s="",c=parseInt(n);c<parseInt(a);c++)s+=o.replace(/\[ i \]/g,"[ "+c+" ]");return s}return e.replace(t,r)}function Qd(e,t,r,i,n,a,o){var s=e.context,c=i.defines,u=n.vertexShader,h=n.fragmentShader,l="SHADOWMAP_TYPE_BASIC";a.shadowMapType===Ys?l="SHADOWMAP_TYPE_PCF":a.shadowMapType===Ou&&(l="SHADOWMAP_TYPE_PCF_SOFT");var f="ENVMAP_TYPE_CUBE",d="ENVMAP_MODE_REFLECTION",p="ENVMAP_BLENDING_MULTIPLY";if(a.envMap){switch(i.envMap.mapping){case So:case Ha:f="ENVMAP_TYPE_CUBE";break;case Ao:case Lo:f="ENVMAP_TYPE_CUBE_UV";break;case rc:case Va:f="ENVMAP_TYPE_EQUIREC";break;case ic:f="ENVMAP_TYPE_SPHERE";break}switch(i.envMap.mapping){case Ha:case Va:d="ENVMAP_MODE_REFRACTION";break}switch(i.combine){case la:p="ENVMAP_BLENDING_MULTIPLY";break;case $u:p="ENVMAP_BLENDING_MIX";break;case Ku:p="ENVMAP_BLENDING_ADD";break}}var m=e.gammaFactor>0?e.gammaFactor:1,v=o.isWebGL2?"":Yd(i.extensions,a,t),g=Zd(c),_=s.createProgram(),w,y;if(i.isRawShaderMaterial?(w=[g].filter(ci).join(`
`),w.length>0&&(w+=`
`),y=[v,g].filter(ci).join(`
`),y.length>0&&(y+=`
`)):(w=["precision "+a.precision+" float;","precision "+a.precision+" int;","#define SHADER_NAME "+n.name,g,a.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+m,"#define MAX_BONES "+a.maxBones,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+d:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMap&&a.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",a.displacementMap&&a.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.vertexColors?"#define USE_COLOR":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.useVertexTexture?"#define BONE_TEXTURE":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.logarithmicDepthBuffer&&(o.isWebGL2||t.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ci).join(`
`),y=[v,"precision "+a.precision+" float;","precision "+a.precision+" int;","#define SHADER_NAME "+n.name,g,a.alphaTest?"#define ALPHATEST "+a.alphaTest+(a.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+m,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+f:"",a.envMap?"#define "+d:"",a.envMap?"#define "+p:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMap&&a.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.vertexColors?"#define USE_COLOR":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.logarithmicDepthBuffer&&(o.isWebGL2||t.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"",a.envMap&&(o.isWebGL2||t.get("EXT_shader_texture_lod"))?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",a.toneMapping!==Ma?"#define TONE_MAPPING":"",a.toneMapping!==Ma?Te.tonemapping_pars_fragment:"",a.toneMapping!==Ma?qd("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.outputEncoding||a.mapEncoding||a.matcapEncoding||a.envMapEncoding||a.emissiveMapEncoding?Te.encodings_pars_fragment:"",a.mapEncoding?hn("mapTexelToLinear",a.mapEncoding):"",a.matcapEncoding?hn("matcapTexelToLinear",a.matcapEncoding):"",a.envMapEncoding?hn("envMapTexelToLinear",a.envMapEncoding):"",a.emissiveMapEncoding?hn("emissiveMapTexelToLinear",a.emissiveMapEncoding):"",a.outputEncoding?jd("linearToOutputTexel",a.outputEncoding):"",a.depthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ci).join(`
`)),u=Za(u),u=ms(u,a),u=vs(u,a),h=Za(h),h=ms(h,a),h=vs(h,a),u=gs(u),h=gs(h),o.isWebGL2&&!i.isRawShaderMaterial){var S=!1,L=/^\s*#version\s+300\s+es\s*\n/;i.isShaderMaterial&&u.match(L)!==null&&h.match(L)!==null&&(S=!0,u=u.replace(L,""),h=h.replace(L,"")),w=[`#version 300 es
`,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,y=[`#version 300 es
`,"#define varying in",S?"":"out highp vec4 pc_fragColor;",S?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y}var I=w+u,P=y+h,A=ps(s,s.VERTEX_SHADER,I),D=ps(s,s.FRAGMENT_SHADER,P);s.attachShader(_,A),s.attachShader(_,D),i.index0AttributeName!==void 0?s.bindAttribLocation(_,0,i.index0AttributeName):a.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);var F=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(A).trim(),G=s.getShaderInfoLog(D).trim(),H=!0,z=!0;s.getProgramParameter(_,s.LINK_STATUS)===!1?(H=!1,console.error("THREE.WebGLProgram: shader error: ",s.getError(),"gl.VALIDATE_STATUS",s.getProgramParameter(_,s.VALIDATE_STATUS),"gl.getProgramInfoLog",F,N,G)):F!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",F):(N===""||G==="")&&(z=!1),z&&(this.diagnostics={runnable:H,material:i,programLog:F,vertexShader:{log:N,prefix:w},fragmentShader:{log:G,prefix:y}}),s.deleteShader(A),s.deleteShader(D);var J;this.getUniforms=function(){return J===void 0&&(J=new sr(s,_,e)),J};var Y;return this.getAttributes=function(){return Y===void 0&&(Y=Jd(s,_)),Y},this.destroy=function(){s.deleteProgram(_),this.program=void 0},Object.defineProperties(this,{uniforms:{get:function(){return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),this.getUniforms()}},attributes:{get:function(){return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),this.getAttributes()}}}),this.name=n.name,this.id=Xd++,this.code=r,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=D,this}function $d(e,t,r){var i=[],n={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},a=["precision","supportsVertexTextures","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","lightMap","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","fog","useFog","fogExp","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering"];function o(c){var u=c.skeleton,h=u.bones;if(r.floatVertexTextures)return 1024;var l=r.maxVertexUniforms,f=Math.floor((l-20)/4),d=Math.min(f,h.length);return d<h.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+h.length+" bones. This GPU supports "+d+"."),0):d}function s(c,u){var h;return c?c.isTexture?h=c.encoding:c.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),h=c.texture.encoding):h=Mn,h===Mn&&u&&(h=sc),h}this.getParameters=function(c,u,h,l,f,d,p){var m=n[c.type],v=p.isSkinnedMesh?o(p):0,g=r.precision;c.precision!==null&&(g=r.getMaxPrecision(c.precision),g!==c.precision&&console.warn("THREE.WebGLProgram.getParameters:",c.precision,"not supported, using",g,"instead."));var _=e.getRenderTarget(),w={shaderID:m,precision:g,supportsVertexTextures:r.vertexTextures,outputEncoding:s(_?_.texture:null,e.gammaOutput),map:!!c.map,mapEncoding:s(c.map,e.gammaInput),matcap:!!c.matcap,matcapEncoding:s(c.matcap,e.gammaInput),envMap:!!c.envMap,envMapMode:c.envMap&&c.envMap.mapping,envMapEncoding:s(c.envMap,e.gammaInput),envMapCubeUV:!!c.envMap&&(c.envMap.mapping===Ao||c.envMap.mapping===Lo),lightMap:!!c.lightMap,aoMap:!!c.aoMap,emissiveMap:!!c.emissiveMap,emissiveMapEncoding:s(c.emissiveMap,e.gammaInput),bumpMap:!!c.bumpMap,normalMap:!!c.normalMap,objectSpaceNormalMap:c.normalMapType===Hh,displacementMap:!!c.displacementMap,roughnessMap:!!c.roughnessMap,metalnessMap:!!c.metalnessMap,specularMap:!!c.specularMap,alphaMap:!!c.alphaMap,gradientMap:!!c.gradientMap,combine:c.combine,vertexColors:c.vertexColors,fog:!!l,useFog:c.fog,fogExp:l&&l.isFogExp2,flatShading:c.flatShading,sizeAttenuation:c.sizeAttenuation,logarithmicDepthBuffer:r.logarithmicDepthBuffer,skinning:c.skinning&&v>0,maxBones:v,useVertexTexture:r.floatVertexTextures,morphTargets:c.morphTargets,morphNormals:c.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numClippingPlanes:f,numClipIntersection:d,dithering:c.dithering,shadowMapEnabled:e.shadowMap.enabled&&p.receiveShadow&&h.length>0,shadowMapType:e.shadowMap.type,toneMapping:e.toneMapping,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:c.premultipliedAlpha,alphaTest:c.alphaTest,doubleSided:c.side===rn,flipSided:c.side===ft,depthPacking:c.depthPacking!==void 0?c.depthPacking:!1};return w},this.getProgramCode=function(c,u){var h=[];if(u.shaderID?h.push(u.shaderID):(h.push(c.fragmentShader),h.push(c.vertexShader)),c.defines!==void 0)for(var l in c.defines)h.push(l),h.push(c.defines[l]);for(var f=0;f<a.length;f++)h.push(u[a[f]]);return h.push(c.onBeforeCompile.toString()),h.push(e.gammaOutput),h.push(e.gammaFactor),h.join()},this.acquireProgram=function(c,u,h,l){for(var f,d=0,p=i.length;d<p;d++){var m=i[d];if(m.code===l){f=m,++f.usedTimes;break}}return f===void 0&&(f=new Qd(e,t,l,c,u,h,r),i.push(f)),f},this.releaseProgram=function(c){if(--c.usedTimes===0){var u=i.indexOf(c);i[u]=i[i.length-1],i.pop(),c.destroy()}},this.programs=i}function Kd(){var e=new WeakMap;function t(a){var o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function r(a){e.delete(a)}function i(a,o,s){e.get(a)[o]=s}function n(){e=new WeakMap}return{get:t,remove:r,update:i,dispose:n}}function ep(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program&&t.program&&e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function tp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function ys(){var e=[],t=0,r=[],i=[];function n(){t=0,r.length=0,i.length=0}function a(u,h,l,f,d,p){var m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:h,material:l,program:l.program,groupOrder:f,renderOrder:u.renderOrder,z:d,group:p},e[t]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=l,m.program=l.program,m.groupOrder=f,m.renderOrder=u.renderOrder,m.z=d,m.group=p),t++,m}function o(u,h,l,f,d,p){var m=a(u,h,l,f,d,p);(l.transparent===!0?i:r).push(m)}function s(u,h,l,f,d,p){var m=a(u,h,l,f,d,p);(l.transparent===!0?i:r).unshift(m)}function c(){r.length>1&&r.sort(ep),i.length>1&&i.sort(tp)}return{opaque:r,transparent:i,init:n,push:o,unshift:s,sort:c}}function rp(){var e={};function t(n){var a=n.target;a.removeEventListener("dispose",t),delete e[a.id]}function r(n,a){var o=e[n.id],s;return o===void 0?(s=new ys,e[n.id]={},e[n.id][a.id]=s,n.addEventListener("dispose",t)):(s=o[a.id],s===void 0&&(s=new ys,o[a.id]=s)),s}function i(){e={}}return{get:r,dispose:i}}function ip(){var e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];var r;switch(t.type){case"DirectionalLight":r={direction:new b,color:new se,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new V};break;case"SpotLight":r={position:new b,direction:new b,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new V};break;case"PointLight":r={position:new b,color:new se,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3};break;case"HemisphereLight":r={direction:new b,skyColor:new se,groundColor:new se};break;case"RectAreaLight":r={color:new se,position:new b,halfWidth:new b,halfHeight:new b};break}return e[t.id]=r,r}}}var np=0;function ap(){var e=new ip,t={id:np++,hash:{stateID:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,shadowsLength:-1},ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},r=new b,i=new fe,n=new fe;function a(o,s,c){for(var u=0,h=0,l=0,f=0,d=0,p=0,m=0,v=0,g=c.matrixWorldInverse,_=0,w=o.length;_<w;_++){var y=o[_],S=y.color,L=y.intensity,I=y.distance,P=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=S.r*L,h+=S.g*L,l+=S.b*L;else if(y.isDirectionalLight){var A=e.get(y);if(A.color.copy(y.color).multiplyScalar(y.intensity),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),A.shadow=y.castShadow,y.castShadow){var D=y.shadow;A.shadowBias=D.bias,A.shadowRadius=D.radius,A.shadowMapSize=D.mapSize}t.directionalShadowMap[f]=P,t.directionalShadowMatrix[f]=y.shadow.matrix,t.directional[f]=A,f++}else if(y.isSpotLight){var A=e.get(y);if(A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),A.color.copy(S).multiplyScalar(L),A.distance=I,A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),A.coneCos=Math.cos(y.angle),A.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),A.decay=y.decay,A.shadow=y.castShadow,y.castShadow){var D=y.shadow;A.shadowBias=D.bias,A.shadowRadius=D.radius,A.shadowMapSize=D.mapSize}t.spotShadowMap[p]=P,t.spotShadowMatrix[p]=y.shadow.matrix,t.spot[p]=A,p++}else if(y.isRectAreaLight){var A=e.get(y);A.color.copy(S).multiplyScalar(L),A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),n.identity(),i.copy(y.matrixWorld),i.premultiply(g),n.extractRotation(i),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(n),A.halfHeight.applyMatrix4(n),t.rectArea[m]=A,m++}else if(y.isPointLight){var A=e.get(y);if(A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),A.color.copy(y.color).multiplyScalar(y.intensity),A.distance=y.distance,A.decay=y.decay,A.shadow=y.castShadow,y.castShadow){var D=y.shadow;A.shadowBias=D.bias,A.shadowRadius=D.radius,A.shadowMapSize=D.mapSize,A.shadowCameraNear=D.camera.near,A.shadowCameraFar=D.camera.far}t.pointShadowMap[d]=P,t.pointShadowMatrix[d]=y.shadow.matrix,t.point[d]=A,d++}else if(y.isHemisphereLight){var A=e.get(y);A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(g),A.direction.normalize(),A.skyColor.copy(y.color).multiplyScalar(L),A.groundColor.copy(y.groundColor).multiplyScalar(L),t.hemi[v]=A,v++}}t.ambient[0]=u,t.ambient[1]=h,t.ambient[2]=l,t.directional.length=f,t.spot.length=p,t.rectArea.length=m,t.point.length=d,t.hemi.length=v,t.hash.stateID=t.id,t.hash.directionalLength=f,t.hash.pointLength=d,t.hash.spotLength=p,t.hash.rectAreaLength=m,t.hash.hemiLength=v,t.hash.shadowsLength=s.length}return{setup:a,state:t}}function xs(){var e=new ap,t=[],r=[];function i(){t.length=0,r.length=0}function n(c){t.push(c)}function a(c){r.push(c)}function o(c){e.setup(t,r,c)}var s={lightsArray:t,shadowsArray:r,lights:e};return{init:i,state:s,setupLights:o,pushLight:n,pushShadow:a}}function op(){var e={};function t(n){var a=n.target;a.removeEventListener("dispose",t),delete e[a.id]}function r(n,a){var o;return e[n.id]===void 0?(o=new xs,e[n.id]={},e[n.id][a.id]=o,n.addEventListener("dispose",t)):e[n.id][a.id]===void 0?(o=new xs,e[n.id][a.id]=o):o=e[n.id][a.id],o}function i(){e={}}return{get:r,dispose:i}}function wr(e){ve.call(this),this.type="MeshDepthMaterial",this.depthPacking=Gh,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.setValues(e)}wr.prototype=Object.create(ve.prototype);wr.prototype.constructor=wr;wr.prototype.isMeshDepthMaterial=!0;wr.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function br(e){ve.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.lights=!1,this.setValues(e)}br.prototype=Object.create(ve.prototype);br.prototype.constructor=br;br.prototype.isMeshDistanceMaterial=!0;br.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};function wc(e,t,r){for(var i=new Io,n=new fe,a=new V,o=new V(r,r),s=new b,c=new b,u=1,h=2,l=(u|h)+1,f=new Array(l),d=new Array(l),p={},m={0:ft,1:tn,2:rn},v=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],g=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)],_=[new Fe,new Fe,new Fe,new Fe,new Fe,new Fe],w=0;w!==l;++w){var y=(w&u)!==0,S=(w&h)!==0,L=new wr({depthPacking:zh,morphTargets:y,skinning:S});f[w]=L;var I=new br({morphTargets:y,skinning:S});d[w]=I}var P=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys,this.render=function(F,N,G){if(P.enabled!==!1&&!(P.autoUpdate===!1&&P.needsUpdate===!1)&&F.length!==0){var H=e.state;H.setBlending(hi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(var z,J=0,Y=F.length;J<Y;J++){var q=F[J],E=q.shadow,T=q&&q.isPointLight;if(E===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}var B=E.camera;if(a.copy(E.mapSize),a.min(o),T){var R=a.x,Q=a.y;_[0].set(R*2,Q,R,Q),_[1].set(0,Q,R,Q),_[2].set(R*3,Q,R,Q),_[3].set(R,Q,R,Q),_[4].set(R*3,0,R,Q),_[5].set(R,0,R,Q),a.x*=4,a.y*=2}if(E.map===null){var U={minFilter:it,magFilter:it,format:Ht};E.map=new Nt(a.x,a.y,U),E.map.texture.name=q.name+".shadowMap",B.updateProjectionMatrix()}E.isSpotLightShadow&&E.update(q);var W=E.map,j=E.matrix;c.setFromMatrixPosition(q.matrixWorld),B.position.copy(c),T?(z=6,j.makeTranslation(-c.x,-c.y,-c.z)):(z=1,s.setFromMatrixPosition(q.target.matrixWorld),B.lookAt(s),B.updateMatrixWorld(),j.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),j.multiply(B.projectionMatrix),j.multiply(B.matrixWorldInverse)),e.setRenderTarget(W),e.clear();for(var pe=0;pe<z;pe++){if(T){s.copy(B.position),s.add(v[pe]),B.up.copy(g[pe]),B.lookAt(s),B.updateMatrixWorld();var me=_[pe];H.viewport(me)}n.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),i.setFromMatrix(n),D(N,G,B,T)}}P.needsUpdate=!1}};function A(F,N,G,H,z,J){var Y=F.geometry,q=null,E=f,T=F.customDepthMaterial;if(G&&(E=d,T=F.customDistanceMaterial),T)q=T;else{var B=!1;N.morphTargets&&(Y&&Y.isBufferGeometry?B=Y.morphAttributes&&Y.morphAttributes.position&&Y.morphAttributes.position.length>0:Y&&Y.isGeometry&&(B=Y.morphTargets&&Y.morphTargets.length>0)),F.isSkinnedMesh&&N.skinning===!1&&console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",F);var R=F.isSkinnedMesh&&N.skinning,Q=0;B&&(Q|=u),R&&(Q|=h),q=E[Q]}if(e.localClippingEnabled&&N.clipShadows===!0&&N.clippingPlanes.length!==0){var U=q.uuid,W=N.uuid,j=p[U];j===void 0&&(j={},p[U]=j);var pe=j[W];pe===void 0&&(pe=q.clone(),j[W]=pe),q=pe}return q.visible=N.visible,q.wireframe=N.wireframe,q.side=N.shadowSide!=null?N.shadowSide:m[N.side],q.clipShadows=N.clipShadows,q.clippingPlanes=N.clippingPlanes,q.clipIntersection=N.clipIntersection,q.wireframeLinewidth=N.wireframeLinewidth,q.linewidth=N.linewidth,G&&q.isMeshDistanceMaterial&&(q.referencePosition.copy(H),q.nearDistance=z,q.farDistance=J),q}function D(F,N,G,H){if(F.visible!==!1){var z=F.layers.test(N.layers);if(z&&(F.isMesh||F.isLine||F.isPoints)&&F.castShadow&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);var J=t.update(F),Y=F.material;if(Array.isArray(Y))for(var q=J.groups,E=0,T=q.length;E<T;E++){var B=q[E],R=Y[B.materialIndex];if(R&&R.visible){var Q=A(F,R,H,c,G.near,G.far);e.renderBufferDirect(G,null,J,Q,F,B)}}else if(Y.visible){var Q=A(F,Y,H,c,G.near,G.far);e.renderBufferDirect(G,null,J,Q,F,null)}}for(var U=F.children,W=0,j=U.length;W<j;W++)D(U[W],N,G,H)}}}function sp(e,t,r,i){function n(){var O=!1,te=new Fe,ne=null,we=new Fe(0,0,0,0);return{setMask:function(oe){ne!==oe&&!O&&(e.colorMask(oe,oe,oe,oe),ne=oe)},setLocked:function(oe){O=oe},setClear:function(oe,Ee,Ie,Pe,xt){xt===!0&&(oe*=Pe,Ee*=Pe,Ie*=Pe),te.set(oe,Ee,Ie,Pe),we.equals(te)===!1&&(e.clearColor(oe,Ee,Ie,Pe),we.copy(te))},reset:function(){O=!1,ne=null,we.set(-1,0,0,0)}}}function a(){var O=!1,te=null,ne=null,we=null;return{setTest:function(oe){oe?le(e.DEPTH_TEST):k(e.DEPTH_TEST)},setMask:function(oe){te!==oe&&!O&&(e.depthMask(oe),te=oe)},setFunc:function(oe){if(ne!==oe){if(oe)switch(oe){case Xu:e.depthFunc(e.NEVER);break;case ju:e.depthFunc(e.ALWAYS);break;case qu:e.depthFunc(e.LESS);break;case za:e.depthFunc(e.LEQUAL);break;case Yu:e.depthFunc(e.EQUAL);break;case Zu:e.depthFunc(e.GEQUAL);break;case Ju:e.depthFunc(e.GREATER);break;case Qu:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}else e.depthFunc(e.LEQUAL);ne=oe}},setLocked:function(oe){O=oe},setClear:function(oe){we!==oe&&(e.clearDepth(oe),we=oe)},reset:function(){O=!1,te=null,ne=null,we=null}}}function o(){var O=!1,te=null,ne=null,we=null,oe=null,Ee=null,Ie=null,Pe=null,xt=null;return{setTest:function(Oe){Oe?le(e.STENCIL_TEST):k(e.STENCIL_TEST)},setMask:function(Oe){te!==Oe&&!O&&(e.stencilMask(Oe),te=Oe)},setFunc:function(Oe,Mt,Je){(ne!==Oe||we!==Mt||oe!==Je)&&(e.stencilFunc(Oe,Mt,Je),ne=Oe,we=Mt,oe=Je)},setOp:function(Oe,Mt,Je){(Ee!==Oe||Ie!==Mt||Pe!==Je)&&(e.stencilOp(Oe,Mt,Je),Ee=Oe,Ie=Mt,Pe=Je)},setLocked:function(Oe){O=Oe},setClear:function(Oe){xt!==Oe&&(e.clearStencil(Oe),xt=Oe)},reset:function(){O=!1,te=null,ne=null,we=null,oe=null,Ee=null,Ie=null,Pe=null,xt=null}}}var s=new n,c=new a,u=new o,h=e.getParameter(e.MAX_VERTEX_ATTRIBS),l=new Uint8Array(h),f=new Uint8Array(h),d=new Uint8Array(h),p={},m=null,v=null,g=null,_=null,w=null,y=null,S=null,L=null,I=null,P=null,A=!1,D=null,F=null,N=null,G=null,H=null,z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Y=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL\ ([0-9])/.exec(q)[1]),J=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(q)[1]),J=Y>=2);var E=null,T={},B=new Fe,R=new Fe;function Q(O,te,ne){var we=new Uint8Array(4),oe=e.createTexture();e.bindTexture(O,oe),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(var Ee=0;Ee<ne;Ee++)e.texImage2D(te+Ee,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,we);return oe}var U={};U[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),U[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),s.setClear(0,0,0,1),c.setClear(1),u.setClear(0),le(e.DEPTH_TEST),c.setFunc(za),Ve(!1),Ke($o),le(e.CULL_FACE),_e(hi);function W(){for(var O=0,te=l.length;O<te;O++)l[O]=0}function j(O){pe(O,0)}function pe(O,te){if(l[O]=1,f[O]===0&&(e.enableVertexAttribArray(O),f[O]=1),d[O]!==te){var ne=i.isWebGL2?e:t.get("ANGLE_instanced_arrays");ne[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,te),d[O]=te}}function me(){for(var O=0,te=f.length;O!==te;++O)f[O]!==l[O]&&(e.disableVertexAttribArray(O),f[O]=0)}function le(O){p[O]!==!0&&(e.enable(O),p[O]=!0)}function k(O){p[O]!==!1&&(e.disable(O),p[O]=!1)}function ce(){if(m===null&&(m=[],t.get("WEBGL_compressed_texture_pvrtc")||t.get("WEBGL_compressed_texture_s3tc")||t.get("WEBGL_compressed_texture_etc1")||t.get("WEBGL_compressed_texture_astc")))for(var O=e.getParameter(e.COMPRESSED_TEXTURE_FORMATS),te=0;te<O.length;te++)m.push(O[te]);return m}function Re(O){return v!==O?(e.useProgram(O),v=O,!0):!1}function _e(O,te,ne,we,oe,Ee,Ie,Pe){if(O===hi){g&&(k(e.BLEND),g=!1);return}if(g||(le(e.BLEND),g=!0),O!==$s){if(O!==_||Pe!==A){if((w!==Pr||L!==Pr)&&(e.blendEquation(e.FUNC_ADD),w=Pr,L=Pr),Pe)switch(O){case Or:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ba:e.blendFunc(e.ONE,e.ONE);break;case Ua:e.blendFuncSeparate(e.ZERO,e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ONE_MINUS_SRC_ALPHA);break;case Ga:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Or:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ba:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Ua:e.blendFunc(e.ZERO,e.ONE_MINUS_SRC_COLOR);break;case Ga:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,S=null,I=null,P=null,_=O,A=Pe}return}oe=oe||te,Ee=Ee||ne,Ie=Ie||we,(te!==w||oe!==L)&&(e.blendEquationSeparate(r.convert(te),r.convert(oe)),w=te,L=oe),(ne!==y||we!==S||Ee!==I||Ie!==P)&&(e.blendFuncSeparate(r.convert(ne),r.convert(we),r.convert(Ee),r.convert(Ie)),y=ne,S=we,I=Ee,P=Ie),_=O,A=null}function ct(O,te){O.side===rn?k(e.CULL_FACE):le(e.CULL_FACE);var ne=O.side===ft;te&&(ne=!ne),Ve(ne),O.blending===Or&&O.transparent===!1?_e(hi):_e(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),s.setMask(O.colorWrite),Yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits)}function Ve(O){D!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),D=O)}function Ke(O){O!==Pu?(le(e.CULL_FACE),O!==F&&(O===$o?e.cullFace(e.BACK):O===Iu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):k(e.CULL_FACE),F=O}function nt(O){O!==N&&(J&&e.lineWidth(O),N=O)}function Yt(O,te,ne){O?(le(e.POLYGON_OFFSET_FILL),(G!==te||H!==ne)&&(e.polygonOffset(te,ne),G=te,H=ne)):k(e.POLYGON_OFFSET_FILL)}function Dt(O){O?le(e.SCISSOR_TEST):k(e.SCISSOR_TEST)}function je(O){O===void 0&&(O=e.TEXTURE0+z-1),E!==O&&(e.activeTexture(O),E=O)}function et(O,te){E===null&&je();var ne=T[E];ne===void 0&&(ne={type:void 0,texture:void 0},T[E]=ne),(ne.type!==O||ne.texture!==te)&&(e.bindTexture(O,te||U[O]),ne.type=O,ne.texture=te)}function at(){try{e.compressedTexImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Sr(){try{e.texImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{e.texImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(O){B.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),B.copy(O))}function Me(O){R.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),R.copy(O))}function Ae(){for(var O=0;O<f.length;O++)f[O]===1&&(e.disableVertexAttribArray(O),f[O]=0);p={},m=null,E=null,T={},v=null,_=null,D=null,F=null,s.reset(),c.reset(),u.reset()}return{buffers:{color:s,depth:c,stencil:u},initAttributes:W,enableAttribute:j,enableAttributeAndDivisor:pe,disableUnusedAttributes:me,enable:le,disable:k,getCompressedTextureFormats:ce,useProgram:Re,setBlending:_e,setMaterial:ct,setFlipSided:Ve,setCullFace:Ke,setLineWidth:nt,setPolygonOffset:Yt,setScissorTest:Dt,activeTexture:je,bindTexture:et,compressedTexImage2D:at,texImage2D:Sr,texImage3D:gt,scissor:yt,viewport:Me,reset:Ae}}function cp(e,t,r,i,n,a,o){var s={},c;function u(E,T,B,R){var Q=1;if((E.width>R||E.height>R)&&(Q=R/Math.max(E.width,E.height)),Q<1||T===!0)if(E instanceof HTMLImageElement||E instanceof HTMLCanvasElement||E instanceof ImageBitmap){c===void 0&&(c=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"));var U=B?document.createElementNS("http://www.w3.org/1999/xhtml","canvas"):c,W=T?ge.floorPowerOfTwo:Math.floor;U.width=W(Q*E.width),U.height=W(Q*E.height);var j=U.getContext("2d");return j.drawImage(E,0,0,U.width,U.height),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+U.width+"x"+U.height+")."),U}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function h(E){return ge.isPowerOfTwo(E.width)&&ge.isPowerOfTwo(E.height)}function l(E){return n.isWebGL2?!1:E.wrapS!==Ct||E.wrapT!==Ct||E.minFilter!==it&&E.minFilter!==ot}function f(E,T){return E.generateMipmaps&&T&&E.minFilter!==it&&E.minFilter!==ot}function d(E,T,B,R){e.generateMipmap(E);var Q=i.get(T);Q.__maxMipLevel=Math.log(Math.max(B,R))*Math.LOG2E}function p(E,T){if(!n.isWebGL2)return E;var B=E;return E===e.RED&&(T===e.FLOAT&&(B=e.R32F),T===e.HALF_FLOAT&&(B=e.R16F),T===e.UNSIGNED_BYTE&&(B=e.R8)),E===e.RGB&&(T===e.FLOAT&&(B=e.RGB32F),T===e.HALF_FLOAT&&(B=e.RGB16F),T===e.UNSIGNED_BYTE&&(B=e.RGB8)),E===e.RGBA&&(T===e.FLOAT&&(B=e.RGBA32F),T===e.HALF_FLOAT&&(B=e.RGBA16F),T===e.UNSIGNED_BYTE&&(B=e.RGBA8)),B===e.R16F||B===e.R32F||B===e.RGBA16F||B===e.RGBA32F?t.get("EXT_color_buffer_float"):(B===e.RGB16F||B===e.RGB32F)&&console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."),B}function m(E){return E===it||E===Ro||E===Co?e.NEAREST:e.LINEAR}function v(E){var T=E.target;T.removeEventListener("dispose",v),_(T),T.isVideoTexture&&delete s[T.id],o.memory.textures--}function g(E){var T=E.target;T.removeEventListener("dispose",g),w(T),o.memory.textures--}function _(E){var T=i.get(E);if(E.image&&T.__image__webglTextureCube)e.deleteTexture(T.__image__webglTextureCube);else{if(T.__webglInit===void 0)return;e.deleteTexture(T.__webglTexture)}i.remove(E)}function w(E){var T=i.get(E),B=i.get(E.texture);if(!!E){if(B.__webglTexture!==void 0&&e.deleteTexture(B.__webglTexture),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLRenderTargetCube)for(var R=0;R<6;R++)e.deleteFramebuffer(T.__webglFramebuffer[R]),T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer[R]);else e.deleteFramebuffer(T.__webglFramebuffer),T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer);i.remove(E.texture),i.remove(E)}}function y(E,T){var B=i.get(E);if(E.isVideoTexture&&q(E),E.version>0&&B.__version!==E.version){var R=E.image;if(R===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{A(B,E,T);return}}r.activeTexture(e.TEXTURE0+T),r.bindTexture(e.TEXTURE_2D,B.__webglTexture)}function S(E,T){var B=i.get(E);if(E.version>0&&B.__version!==E.version){A(B,E,T);return}r.activeTexture(e.TEXTURE0+T),r.bindTexture(e.TEXTURE_3D,B.__webglTexture)}function L(E,T){var B=i.get(E);if(E.image.length===6)if(E.version>0&&B.__version!==E.version){B.__image__webglTextureCube||(E.addEventListener("dispose",v),B.__image__webglTextureCube=e.createTexture(),o.memory.textures++),r.activeTexture(e.TEXTURE0+T),r.bindTexture(e.TEXTURE_CUBE_MAP,B.__image__webglTextureCube),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY);for(var R=E&&E.isCompressedTexture,Q=E.image[0]&&E.image[0].isDataTexture,U=[],W=0;W<6;W++)!R&&!Q?U[W]=u(E.image[W],!1,!0,n.maxCubemapSize):U[W]=Q?E.image[W].image:E.image[W];var j=U[0],pe=h(j),me=a.convert(E.format),le=a.convert(E.type),k=p(me,le);P(e.TEXTURE_CUBE_MAP,E,pe);for(var W=0;W<6;W++)if(!R)Q?r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,k,U[W].width,U[W].height,0,me,le,U[W].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,k,me,le,U[W]);else for(var ce,Re=U[W].mipmaps,_e=0,ct=Re.length;_e<ct;_e++)ce=Re[_e],E.format!==Ht&&E.format!==xr?r.getCompressedTextureFormats().indexOf(me)>-1?r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e,k,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e,k,ce.width,ce.height,0,me,le,ce.data);R?B.__maxMipLevel=Re.length-1:B.__maxMipLevel=0,f(E,pe)&&d(e.TEXTURE_CUBE_MAP,E,j.width,j.height),B.__version=E.version,E.onUpdate&&E.onUpdate(E)}else r.activeTexture(e.TEXTURE0+T),r.bindTexture(e.TEXTURE_CUBE_MAP,B.__image__webglTextureCube)}function I(E,T){r.activeTexture(e.TEXTURE0+T),r.bindTexture(e.TEXTURE_CUBE_MAP,i.get(E).__webglTexture)}function P(E,T,B){var R;if(B?(e.texParameteri(E,e.TEXTURE_WRAP_S,a.convert(T.wrapS)),e.texParameteri(E,e.TEXTURE_WRAP_T,a.convert(T.wrapT)),e.texParameteri(E,e.TEXTURE_MAG_FILTER,a.convert(T.magFilter)),e.texParameteri(E,e.TEXTURE_MIN_FILTER,a.convert(T.minFilter))):(e.texParameteri(E,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(E,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(T.wrapS!==Ct||T.wrapT!==Ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(E,e.TEXTURE_MAG_FILTER,m(T.magFilter)),e.texParameteri(E,e.TEXTURE_MIN_FILTER,m(T.minFilter)),T.minFilter!==it&&T.minFilter!==ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R=t.get("EXT_texture_filter_anisotropic"),R){if(T.type===vi&&t.get("OES_texture_float_linear")===null||T.type===Po&&(n.isWebGL2||t.get("OES_texture_half_float_linear"))===null)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(e.texParameterf(E,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function A(E,T,B){var R;T.isDataTexture3D?R=e.TEXTURE_3D:R=e.TEXTURE_2D,E.__webglInit===void 0&&(E.__webglInit=!0,T.addEventListener("dispose",v),E.__webglTexture=e.createTexture(),o.memory.textures++),r.activeTexture(e.TEXTURE0+B),r.bindTexture(R,E.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment);var Q=l(T)&&h(T.image)===!1,U=u(T.image,Q,!1,n.maxTextureSize),W=h(U),j=a.convert(T.format),pe=a.convert(T.type),me=p(j,pe);P(R,T,W);var le,k=T.mipmaps;if(T.isDepthTexture){if(me=e.DEPTH_COMPONENT,T.type===vi){if(!n.isWebGL2)throw new Error("Float Depth Texture only supported in WebGL2.0");me=e.DEPTH_COMPONENT32F}else n.isWebGL2&&(me=e.DEPTH_COMPONENT16);T.format===Dr&&me===e.DEPTH_COMPONENT&&T.type!==xn&&T.type!==ac&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=xn,pe=a.convert(T.type)),T.format===gi&&(me=e.DEPTH_STENCIL,T.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=_n,pe=a.convert(T.type))),r.texImage2D(e.TEXTURE_2D,0,me,U.width,U.height,0,j,pe,null)}else if(T.isDataTexture){if(k.length>0&&W){for(var ce=0,Re=k.length;ce<Re;ce++)le=k[ce],r.texImage2D(e.TEXTURE_2D,ce,me,le.width,le.height,0,j,pe,le.data);T.generateMipmaps=!1,E.__maxMipLevel=k.length-1}else r.texImage2D(e.TEXTURE_2D,0,me,U.width,U.height,0,j,pe,U.data),E.__maxMipLevel=0;T.isCfxTexture&&(e.texParameterf(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameterf(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.MIRRORED_REPEAT),e.texParameterf(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT))}else if(T.isCompressedTexture){for(var ce=0,Re=k.length;ce<Re;ce++)le=k[ce],T.format!==Ht&&T.format!==xr?r.getCompressedTextureFormats().indexOf(j)>-1?r.compressedTexImage2D(e.TEXTURE_2D,ce,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):r.texImage2D(e.TEXTURE_2D,ce,me,le.width,le.height,0,j,pe,le.data);E.__maxMipLevel=k.length-1}else if(T.isDataTexture3D)r.texImage3D(e.TEXTURE_3D,0,me,U.width,U.height,U.depth,0,j,pe,U.data),E.__maxMipLevel=0;else if(k.length>0&&W){for(var ce=0,Re=k.length;ce<Re;ce++)le=k[ce],r.texImage2D(e.TEXTURE_2D,ce,me,j,pe,le);T.generateMipmaps=!1,E.__maxMipLevel=k.length-1}else r.texImage2D(e.TEXTURE_2D,0,me,j,pe,U),E.__maxMipLevel=0;f(T,W)&&d(e.TEXTURE_2D,T,U.width,U.height),E.__version=T.version,T.onUpdate&&T.onUpdate(T)}function D(E,T,B,R){var Q=a.convert(T.texture.format),U=a.convert(T.texture.type),W=p(Q,U);r.texImage2D(R,0,W,T.width,T.height,0,Q,U,null),e.bindFramebuffer(e.FRAMEBUFFER,E),e.framebufferTexture2D(e.FRAMEBUFFER,B,R,i.get(T.texture).__webglTexture,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}function F(E,T,B){if(e.bindRenderbuffer(e.RENDERBUFFER,E),T.depthBuffer&&!T.stencilBuffer){if(B){var R=Y(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,R,e.DEPTH_COMPONENT16,T.width,T.height)}else e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,T.width,T.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,E)}else if(T.depthBuffer&&T.stencilBuffer){if(B){var R=Y(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,R,e.DEPTH_STENCIL,T.width,T.height)}else e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,T.width,T.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,E)}else{var Q=a.convert(T.texture.format),U=a.convert(T.texture.type),W=p(Q,U);if(B){var R=Y(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,R,W,T.width,T.height)}else e.renderbufferStorage(e.RENDERBUFFER,W,T.width,T.height)}e.bindRenderbuffer(e.RENDERBUFFER,null)}function N(E,T){var B=T&&T.isWebGLRenderTargetCube;if(B)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(e.FRAMEBUFFER,E),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),y(T.depthTexture,0);var R=i.get(T.depthTexture).__webglTexture;if(T.depthTexture.format===Dr)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,R,0);else if(T.depthTexture.format===gi)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,R,0);else throw new Error("Unknown depthTexture format")}function G(E){var T=i.get(E),B=E.isWebGLRenderTargetCube===!0;if(E.depthTexture){if(B)throw new Error("target.depthTexture not supported in Cube render targets");N(T.__webglFramebuffer,E)}else if(B){T.__webglDepthbuffer=[];for(var R=0;R<6;R++)e.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[R]),T.__webglDepthbuffer[R]=e.createRenderbuffer(),F(T.__webglDepthbuffer[R],E)}else e.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=e.createRenderbuffer(),F(T.__webglDepthbuffer,E);e.bindFramebuffer(e.FRAMEBUFFER,null)}function H(E){var T=i.get(E),B=i.get(E.texture);E.addEventListener("dispose",g),B.__webglTexture=e.createTexture(),o.memory.textures++;var R=E.isWebGLRenderTargetCube===!0,Q=E.isWebGLMultisampleRenderTarget===!0,U=h(E);if(R){T.__webglFramebuffer=[];for(var W=0;W<6;W++)T.__webglFramebuffer[W]=e.createFramebuffer()}else if(T.__webglFramebuffer=e.createFramebuffer(),Q)if(n.isWebGL2){T.__webglMultisampledFramebuffer=e.createFramebuffer(),T.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,T.__webglColorRenderbuffer);var j=a.convert(E.texture.format),pe=a.convert(E.texture.type),me=p(j,pe),le=Y(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,le,me,E.width,E.height),e.bindFramebuffer(e.FRAMEBUFFER,T.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,T.__webglColorRenderbuffer),e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(T.__webglDepthRenderbuffer=e.createRenderbuffer(),F(T.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(e.FRAMEBUFFER,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(R){r.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture),P(e.TEXTURE_CUBE_MAP,E.texture,U);for(var W=0;W<6;W++)D(T.__webglFramebuffer[W],E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W);f(E.texture,U)&&d(e.TEXTURE_CUBE_MAP,E.texture,E.width,E.height),r.bindTexture(e.TEXTURE_CUBE_MAP,null)}else r.bindTexture(e.TEXTURE_2D,B.__webglTexture),P(e.TEXTURE_2D,E.texture,U),D(T.__webglFramebuffer,E,e.COLOR_ATTACHMENT0,e.TEXTURE_2D),f(E.texture,U)&&d(e.TEXTURE_2D,E.texture,E.width,E.height),r.bindTexture(e.TEXTURE_2D,null);E.depthBuffer&&G(E)}function z(E){var T=E.texture,B=h(E);if(f(T,B)){var R=E.isWebGLRenderTargetCube?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Q=i.get(T).__webglTexture;r.bindTexture(R,Q),d(R,T,E.width,E.height),r.bindTexture(R,null)}}function J(E){if(E.isWebGLMultisampleRenderTarget)if(n.isWebGL2){var T=i.get(E);e.bindFramebuffer(e.READ_FRAMEBUFFER,T.__webglMultisampledFramebuffer),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,T.__webglFramebuffer);var B=E.width,R=E.height,Q=e.COLOR_BUFFER_BIT;E.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT),e.blitFramebuffer(0,0,B,R,0,0,B,R,Q,e.NEAREST)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Y(E){return n.isWebGL2&&E.isWebGLMultisampleRenderTarget?Math.min(n.maxSamples,E.samples):0}function q(E){var T=E.id,B=o.render.frame;s[T]!==B&&(s[T]=B,E.update())}this.setTexture2D=y,this.setTexture3D=S,this.setTextureCube=L,this.setTextureCubeDynamic=I,this.setupRenderTarget=H,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=J}function up(e,t,r){function i(n){var a;if(n===nr)return e.REPEAT;if(n===Ct)return e.CLAMP_TO_EDGE;if(n===Fr)return e.MIRRORED_REPEAT;if(n===it)return e.NEAREST;if(n===Ro)return e.NEAREST_MIPMAP_NEAREST;if(n===Co)return e.NEAREST_MIPMAP_LINEAR;if(n===ot)return e.LINEAR;if(n===nc)return e.LINEAR_MIPMAP_NEAREST;if(n===fa)return e.LINEAR_MIPMAP_LINEAR;if(n===mi)return e.UNSIGNED_BYTE;if(n===sh)return e.UNSIGNED_SHORT_4_4_4_4;if(n===ch)return e.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return e.UNSIGNED_SHORT_5_6_5;if(n===nh)return e.BYTE;if(n===ah)return e.SHORT;if(n===xn)return e.UNSIGNED_SHORT;if(n===oh)return e.INT;if(n===ac)return e.UNSIGNED_INT;if(n===vi)return e.FLOAT;if(n===Po){if(r.isWebGL2)return e.HALF_FLOAT;if(a=t.get("OES_texture_half_float"),a!==null)return a.HALF_FLOAT_OES}if(n===hh)return e.ALPHA;if(n===xr)return e.RGB;if(n===Ht)return e.RGBA;if(n===lh)return e.LUMINANCE;if(n===fh)return e.LUMINANCE_ALPHA;if(n===Dr)return e.DEPTH_COMPONENT;if(n===gi)return e.DEPTH_STENCIL;if(n===dh)return e.RED;if(n===Pr)return e.FUNC_ADD;if(n===Du)return e.FUNC_SUBTRACT;if(n===Fu)return e.FUNC_REVERSE_SUBTRACT;if(n===Nu)return e.ZERO;if(n===Bu)return e.ONE;if(n===Uu)return e.SRC_COLOR;if(n===Gu)return e.ONE_MINUS_SRC_COLOR;if(n===Ks)return e.SRC_ALPHA;if(n===ec)return e.ONE_MINUS_SRC_ALPHA;if(n===zu)return e.DST_ALPHA;if(n===Hu)return e.ONE_MINUS_DST_ALPHA;if(n===Vu)return e.DST_COLOR;if(n===ku)return e.ONE_MINUS_DST_COLOR;if(n===Wu)return e.SRC_ALPHA_SATURATE;if((n===Ko||n===es||n===ts||n===rs)&&(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null)){if(n===Ko)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===es)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ts)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if((n===is||n===ns||n===as||n===os)&&(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null)){if(n===is)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ns)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===as)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===os)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===ph&&(a=t.get("WEBGL_compressed_texture_etc1"),a!==null))return a.COMPRESSED_RGB_ETC1_WEBGL;if((n===mh||n===vh||n===gh||n===yh||n===xh||n===_h||n===wh||n===bh||n===Mh||n===Eh||n===Th||n===Sh||n===Ah||n===Lh)&&(a=t.get("WEBGL_compressed_texture_astc"),a!==null))return n;if(n===wa||n===ba){if(r.isWebGL2){if(n===wa)return e.MIN;if(n===ba)return e.MAX}if(a=t.get("EXT_blend_minmax"),a!==null){if(n===wa)return a.MIN_EXT;if(n===ba)return a.MAX_EXT}}if(n===_n){if(r.isWebGL2)return e.UNSIGNED_INT_24_8;if(a=t.get("WEBGL_depth_texture"),a!==null)return a.UNSIGNED_INT_24_8_WEBGL}return 0}return{convert:i}}function Mi(){$.call(this),this.type="Group"}Mi.prototype=Object.assign(Object.create($.prototype),{constructor:Mi,isGroup:!0});function $t(){$.call(this),this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe}$t.prototype=Object.assign(Object.create($.prototype),{constructor:$t,isCamera:!0,copy:function(e,t){return $.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new b),this.updateMatrixWorld(!0);var t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()},updateMatrixWorld:function(e){$.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function Ye(e,t,r,i){$t.call(this),this.type="PerspectiveCamera",this.fov=e!==void 0?e:50,this.zoom=1,this.near=r!==void 0?r:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=t!==void 0?t:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Ye.prototype=Object.assign(Object.create($t.prototype),{constructor:Ye,isPerspectiveCamera:!0,copy:function(e,t){return $t.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){var t=.5*this.getFilmHeight()/e;this.fov=ge.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){var e=Math.tan(ge.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return ge.RAD2DEG*2*Math.atan(Math.tan(ge.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,r,i,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=this.near,t=e*Math.tan(ge.DEG2RAD*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,n=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){var o=a.fullWidth,s=a.fullHeight;n+=a.offsetX*i/o,t-=a.offsetY*r/s,i*=a.width/o,r*=a.height/s}var c=this.filmOffset;c!==0&&(n+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,t,t-r,e,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){var t=$.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});function An(e){Ye.call(this),this.cameras=e||[]}An.prototype=Object.assign(Object.create(Ye.prototype),{constructor:An,isArrayCamera:!0});var _s=new b,ws=new b;function bc(e,t,r){_s.setFromMatrixPosition(t.matrixWorld),ws.setFromMatrixPosition(r.matrixWorld);var i=_s.distanceTo(ws),n=t.projectionMatrix.elements,a=r.projectionMatrix.elements,o=n[14]/(n[10]-1),s=n[14]/(n[10]+1),c=(n[9]+1)/n[5],u=(n[9]-1)/n[5],h=(n[8]-1)/n[0],l=(a[8]+1)/a[0],f=o*h,d=o*l,p=i/(-h+l),m=p*-h;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(m),e.translateZ(p),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.getInverse(e.matrixWorld);var v=o+p,g=s+p,_=f-m,w=d+(i-m),y=c*s/g*v,S=u*s/g*v;e.projectionMatrix.makePerspective(_,w,y,S,v,g)}function Mc(e){var t=this,r=null,i=null,n=null,a=[],o=new fe,s=new fe,c=1,u="stage";typeof window!="undefined"&&"VRFrameData"in window&&(i=new window.VRFrameData,window.addEventListener("vrdisplaypresentchange",w,!1));var h=new fe,l=new rt,f=new b,d=new Ye;d.bounds=new Fe(0,0,.5,1),d.layers.enable(1);var p=new Ye;p.bounds=new Fe(.5,0,.5,1),p.layers.enable(2);var m=new An([d,p]);m.layers.enable(1),m.layers.enable(2);function v(){return r!==null&&r.isPresenting===!0}var g,_;function w(){if(v()){var P=r.getEyeParameters("left"),A=P.renderWidth*c,D=P.renderHeight*c;_=e.getPixelRatio(),g=e.getSize(),e.setDrawingBufferSize(A*2,D,1),I.start()}else t.enabled&&e.setDrawingBufferSize(g.width,g.height,_),I.stop()}var y=[];function S(P){for(var A=navigator.getGamepads&&navigator.getGamepads(),D=0,F=0,N=A.length;D<N;D++){var G=A[D];if(G&&(G.id==="Daydream Controller"||G.id==="Gear VR Controller"||G.id==="Oculus Go Controller"||G.id==="OpenVR Gamepad"||G.id.startsWith("Oculus Touch")||G.id.startsWith("Spatial Controller"))){if(F===P)return G;F++}}}function L(){for(var P=0;P<a.length;P++){var A=a[P],D=S(P);if(D!==void 0&&D.pose!==void 0){if(D.pose===null)return;var F=D.pose;F.hasPosition===!1&&A.position.set(.2,-.6,-.05),F.position!==null&&A.position.fromArray(F.position),F.orientation!==null&&A.quaternion.fromArray(F.orientation),A.matrix.compose(A.position,A.quaternion,A.scale),A.matrix.premultiply(o),A.matrix.decompose(A.position,A.quaternion,A.scale),A.matrixWorldNeedsUpdate=!0,A.visible=!0;var N=D.id==="Daydream Controller"?0:1;y[P]!==D.buttons[N].pressed&&(y[P]=D.buttons[N].pressed,y[P]===!0?A.dispatchEvent({type:"selectstart"}):(A.dispatchEvent({type:"selectend"}),A.dispatchEvent({type:"select"})))}else A.visible=!1}}this.enabled=!1,this.getController=function(P){var A=a[P];return A===void 0&&(A=new Mi,A.matrixAutoUpdate=!1,A.visible=!1,a[P]=A),A},this.getDevice=function(){return r},this.setDevice=function(P){P!==void 0&&(r=P),I.setContext(P)},this.setFramebufferScaleFactor=function(P){c=P},this.setFrameOfReferenceType=function(P){u=P},this.setPoseTarget=function(P){P!==void 0&&(n=P)},this.getCamera=function(P){var A=u==="stage"?1.6:0;if(r===null)return P.position.set(0,A,0),P;if(r.depthNear=P.near,r.depthFar=P.far,r.getFrameData(i),u==="stage"){var D=r.stageParameters;D?o.fromArray(D.sittingToStandingTransform):o.makeTranslation(0,A,0)}var F=i.pose,N=n!==null?n:P;if(N.matrix.copy(o),N.matrix.decompose(N.position,N.quaternion,N.scale),F.orientation!==null&&(l.fromArray(F.orientation),N.quaternion.multiply(l)),F.position!==null&&(l.setFromRotationMatrix(o),f.fromArray(F.position),f.applyQuaternion(l),N.position.add(f)),N.updateMatrixWorld(),r.isPresenting===!1)return P;d.near=P.near,p.near=P.near,d.far=P.far,p.far=P.far,d.matrixWorldInverse.fromArray(i.leftViewMatrix),p.matrixWorldInverse.fromArray(i.rightViewMatrix),s.getInverse(o),u==="stage"&&(d.matrixWorldInverse.multiply(s),p.matrixWorldInverse.multiply(s));var G=N.parent;G!==null&&(h.getInverse(G.matrixWorld),d.matrixWorldInverse.multiply(h),p.matrixWorldInverse.multiply(h)),d.matrixWorld.getInverse(d.matrixWorldInverse),p.matrixWorld.getInverse(p.matrixWorldInverse),d.projectionMatrix.fromArray(i.leftProjectionMatrix),p.projectionMatrix.fromArray(i.rightProjectionMatrix),bc(m,d,p);var H=r.getLayers();if(H.length){var z=H[0];z.leftBounds!==null&&z.leftBounds.length===4&&d.bounds.fromArray(z.leftBounds),z.rightBounds!==null&&z.rightBounds.length===4&&p.bounds.fromArray(z.rightBounds)}return L(),m},this.getStandingMatrix=function(){return o},this.isPresenting=v;var I=new Oo;this.setAnimationLoop=function(P){I.setAnimationLoop(P)},this.submitFrame=function(){v()&&r.submitFrame()},this.dispose=function(){typeof window!="undefined"&&window.removeEventListener("vrdisplaypresentchange",w)}}function hp(e){var t=e.context,r=null,i=null,n=1,a=null,o="stage",s=null,c=[],u=[];function h(){return i!==null&&a!==null}var l=new Ye;l.layers.enable(1),l.viewport=new Fe;var f=new Ye;f.layers.enable(2),f.viewport=new Fe;var d=new An([l,f]);d.layers.enable(1),d.layers.enable(2),this.enabled=!1,this.getController=function(y){var S=c[y];return S===void 0&&(S=new Mi,S.matrixAutoUpdate=!1,S.visible=!1,c[y]=S),S},this.getDevice=function(){return r},this.setDevice=function(y){y!==void 0&&(r=y),y instanceof XRDevice&&t.setCompatibleXRDevice(y)};function p(y){var S=c[u.indexOf(y.inputSource)];S&&S.dispatchEvent({type:y.type})}function m(){e.setFramebuffer(null),w.stop()}this.setFramebufferScaleFactor=function(y){n=y},this.setFrameOfReferenceType=function(y){o=y},this.setSession=function(y){i=y,i!==null&&(i.addEventListener("select",p),i.addEventListener("selectstart",p),i.addEventListener("selectend",p),i.addEventListener("end",m),i.baseLayer=new XRWebGLLayer(i,t,{framebufferScaleFactor:n}),i.requestFrameOfReference(o).then(function(S){a=S,e.setFramebuffer(i.baseLayer.framebuffer),w.setContext(i),w.start()}),u=i.getInputSources(),i.addEventListener("inputsourceschange",function(){u=i.getInputSources(),console.log(u);for(var S=0;S<c.length;S++){var L=c[S];L.userData.inputSource=u[S]}}))};function v(y,S){S===null?y.matrixWorld.copy(y.matrix):y.matrixWorld.multiplyMatrices(S.matrixWorld,y.matrix),y.matrixWorldInverse.getInverse(y.matrixWorld)}this.getCamera=function(y){if(h()){var S=y.parent,L=d.cameras;v(d,S);for(var I=0;I<L.length;I++)v(L[I],S);y.matrixWorld.copy(d.matrixWorld);for(var P=y.children,I=0,A=P.length;I<A;I++)P[I].updateMatrixWorld(!0);return bc(d,l,f),d}return y},this.isPresenting=h;var g=null;function _(y,S){if(s=S.getDevicePose(a),s!==null)for(var L=i.baseLayer,I=S.views,P=0;P<I.length;P++){var A=I[P],D=L.getViewport(A),F=s.getViewMatrix(A),N=d.cameras[P];N.matrix.fromArray(F).getInverse(N.matrix),N.projectionMatrix.fromArray(A.projectionMatrix),N.viewport.set(D.x,D.y,D.width,D.height),P===0&&d.matrix.copy(N.matrix)}for(var P=0;P<c.length;P++){var G=c[P],H=u[P];if(H){var z=S.getInputPose(H,a);if(z!==null){"targetRay"in z?G.matrix.elements=z.targetRay.transformMatrix:"pointerMatrix"in z&&(G.matrix.elements=z.pointerMatrix),G.matrix.decompose(G.position,G.rotation,G.scale),G.visible=!0;continue}}G.visible=!1}g&&g(y)}var w=new Oo;w.setAnimationLoop(_),this.setAnimationLoop=function(y){g=y},this.dispose=function(){},this.getStandingMatrix=function(){return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."),new THREE.Matrix4},this.submitFrame=function(){}}function Do(e){e=e||{};var t=e.canvas!==void 0?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),r=e.context!==void 0?e.context:null,i=e.alpha!==void 0?e.alpha:!1,n=e.depth!==void 0?e.depth:!0,a=e.stencil!==void 0?e.stencil:!0,o=e.antialias!==void 0?e.antialias:!1,s=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,c=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,u=e.powerPreference!==void 0?e.powerPreference:"default",h=null,l=null;this.domElement=t,this.context=null,this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.gammaInput=!1,this.gammaOutput=!1,this.physicallyCorrectLights=!1,this.toneMapping=tc,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var f=this,d=!1,p=null,m=null,v=null,g=-1,_={geometry:null,program:null,wireframe:!1},w=null,y=null,S=new Fe,L=new Fe,I=null,P=0,A=t.width,D=t.height,F=1,N=new Fe(0,0,A,D),G=new Fe(0,0,A,D),H=!1,z=new Io,J=new hd,Y=!1,q=!1,E=new fe,T=new b;function B(){return m===null?F:1}var R;try{var Q={alpha:i,depth:n,stencil:a,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:u};if(t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",yt,!1),R=r||t.getContext("webgl",Q)||t.getContext("experimental-webgl",Q),R===null)throw t.getContext("webgl")!==null?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.");R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){console.error("THREE.WebGLRenderer: "+x.message)}var U,W,j,pe,me,le,k,ce,Re,_e,ct,Ve,Ke,nt,Yt,Dt,je;function et(){U=new ld(R),W=new ud(R,U,e),W.isWebGL2||(U.get("WEBGL_depth_texture"),U.get("OES_texture_float"),U.get("OES_texture_half_float"),U.get("OES_texture_half_float_linear"),U.get("OES_standard_derivatives"),U.get("OES_element_index_uint"),U.get("ANGLE_instanced_arrays")),U.get("OES_texture_float_linear"),je=new up(R,U,W),j=new sp(R,U,je,W),j.scissor(L.copy(G).multiplyScalar(F)),j.viewport(S.copy(N).multiplyScalar(F)),pe=new pd(R),me=new Kd,le=new cp(R,U,j,me,W,je,pe),k=new rd(R),ce=new fd(R,k,pe),Re=new gd(ce,pe),nt=new vd(R),_e=new $d(f,U,W),ct=new rp,Ve=new op,Ke=new sd(f,j,Re,s),Yt=new cd(R,U,pe,W),Dt=new dd(R,U,pe,W),pe.programs=_e.programs,f.context=R,f.capabilities=W,f.extensions=U,f.properties=me,f.renderLists=ct,f.state=j,f.info=pe}et();var at=null;typeof navigator!="undefined"&&(at="xr"in navigator?new hp(f):new Mc(f)),this.vr=at;var Sr=new wc(f,Re,W.maxTextureSize);this.shadowMap=Sr,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){var x=U.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){var x=U.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(x){x!==void 0&&(F=x,this.setSize(A,D,!1))},this.getSize=function(){return{width:A,height:D}},this.setSize=function(x,M,C){if(at.isPresenting()){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=x,D=M,t.width=x*F,t.height=M*F,C!==!1&&(t.style.width=x+"px",t.style.height=M+"px"),this.setViewport(0,0,x,M)},this.getDrawingBufferSize=function(){return{width:A*F,height:D*F}},this.setDrawingBufferSize=function(x,M,C){A=x,D=M,F=C,t.width=x*C,t.height=M*C,this.setViewport(0,0,x,M)},this.getCurrentViewport=function(){return S},this.setViewport=function(x,M,C,X){N.set(x,D-M-X,C,X),j.viewport(S.copy(N).multiplyScalar(F))},this.setScissor=function(x,M,C,X){G.set(x,D-M-X,C,X),j.scissor(L.copy(G).multiplyScalar(F))},this.setScissorTest=function(x){j.setScissorTest(H=x)},this.getClearColor=function(){return Ke.getClearColor()},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(x,M,C){var X=0;(x===void 0||x)&&(X|=R.COLOR_BUFFER_BIT),(M===void 0||M)&&(X|=R.DEPTH_BUFFER_BIT),(C===void 0||C)&&(X|=R.STENCIL_BUFFER_BIT),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",yt,!1),ct.dispose(),Ve.dispose(),me.dispose(),Re.dispose(),at.dispose(),Ee.stop()};function gt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1,et()}function Me(x){var M=x.target;M.removeEventListener("dispose",Me),Ae(M)}function Ae(x){O(x),me.remove(x)}function O(x){var M=me.get(x).program;x.program=void 0,M!==void 0&&_e.releaseProgram(M)}function te(x,M){x.render(function(C){f.renderBufferImmediate(C,M)})}this.renderBufferImmediate=function(x,M){j.initAttributes();var C=me.get(x);x.hasPositions&&!C.position&&(C.position=R.createBuffer()),x.hasNormals&&!C.normal&&(C.normal=R.createBuffer()),x.hasUvs&&!C.uv&&(C.uv=R.createBuffer()),x.hasColors&&!C.color&&(C.color=R.createBuffer());var X=M.getAttributes();x.hasPositions&&(R.bindBuffer(R.ARRAY_BUFFER,C.position),R.bufferData(R.ARRAY_BUFFER,x.positionArray,R.DYNAMIC_DRAW),j.enableAttribute(X.position),R.vertexAttribPointer(X.position,3,R.FLOAT,!1,0,0)),x.hasNormals&&(R.bindBuffer(R.ARRAY_BUFFER,C.normal),R.bufferData(R.ARRAY_BUFFER,x.normalArray,R.DYNAMIC_DRAW),j.enableAttribute(X.normal),R.vertexAttribPointer(X.normal,3,R.FLOAT,!1,0,0)),x.hasUvs&&(R.bindBuffer(R.ARRAY_BUFFER,C.uv),R.bufferData(R.ARRAY_BUFFER,x.uvArray,R.DYNAMIC_DRAW),j.enableAttribute(X.uv),R.vertexAttribPointer(X.uv,2,R.FLOAT,!1,0,0)),x.hasColors&&(R.bindBuffer(R.ARRAY_BUFFER,C.color),R.bufferData(R.ARRAY_BUFFER,x.colorArray,R.DYNAMIC_DRAW),j.enableAttribute(X.color),R.vertexAttribPointer(X.color,3,R.FLOAT,!1,0,0)),j.disableUnusedAttributes(),R.drawArrays(R.TRIANGLES,0,x.count),x.count=0},this.renderBufferDirect=function(x,M,C,X,ee,Se){var re=ee.isMesh&&ee.normalMatrix.determinant()<0;j.setMaterial(X,re);var ie=Mt(x,M,X,ee),ye=!1;(_.geometry!==C.id||_.program!==ie.id||_.wireframe!==(X.wireframe===!0))&&(_.geometry=C.id,_.program=ie.id,_.wireframe=X.wireframe===!0,ye=!0),ee.morphTargetInfluences&&(nt.update(ee,C,X,ie),ye=!0);var De=C.index,Ce=C.attributes.position,Be=1;X.wireframe===!0&&(De=ce.getWireframeAttribute(C),Be=2);var We,be=Yt;De!==null&&(We=k.get(De),be=Dt,be.setIndex(We)),ye&&(ne(X,ie,C),De!==null&&R.bindBuffer(R.ELEMENT_ARRAY_BUFFER,We.buffer));var he=1/0;De!==null?he=De.count:Ce!==void 0&&(he=Ce.count);var Le=C.drawRange.start*Be,tt=C.drawRange.count*Be,Bt=Se!==null?Se.start*Be:0,qe=Se!==null?Se.count*Be:1/0,Zt=Math.max(Le,Bt),cn=Math.min(he,Le+tt,Bt+qe)-1,ga=Math.max(0,cn-Zt+1);if(ga!==0){if(ee.isMesh)if(X.wireframe===!0)j.setLineWidth(X.wireframeLinewidth*B()),be.setMode(R.LINES);else switch(ee.drawMode){case oc:be.setMode(R.TRIANGLES);break;case Ih:be.setMode(R.TRIANGLE_STRIP);break;case Oh:be.setMode(R.TRIANGLE_FAN);break}else if(ee.isLine){var ya=X.linewidth;ya===void 0&&(ya=1),j.setLineWidth(ya*B()),ee.isLineSegments?be.setMode(R.LINES):ee.isLineLoop?be.setMode(R.LINE_LOOP):be.setMode(R.LINE_STRIP)}else ee.isPoints?be.setMode(R.POINTS):ee.isSprite&&be.setMode(R.TRIANGLES);C&&C.isInstancedBufferGeometry?C.maxInstancedCount>0&&be.renderInstances(C,Zt,ga):be.render(Zt,ga)}};function ne(x,M,C){if(C&&C.isInstancedBufferGeometry&!W.isWebGL2&&U.get("ANGLE_instanced_arrays")===null){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}j.initAttributes();var X=C.attributes,ee=M.getAttributes(),Se=x.defaultAttributeValues;for(var re in ee){var ie=ee[re];if(ie>=0){var ye=X[re];if(ye!==void 0){var De=ye.normalized,Ce=ye.itemSize,Be=k.get(ye);if(Be===void 0)continue;var We=Be.buffer,be=Be.type,he=Be.bytesPerElement;if(ye.isInterleavedBufferAttribute){var Le=ye.data,tt=Le.stride,Bt=ye.offset;Le&&Le.isInstancedInterleavedBuffer?(j.enableAttributeAndDivisor(ie,Le.meshPerAttribute),C.maxInstancedCount===void 0&&(C.maxInstancedCount=Le.meshPerAttribute*Le.count)):j.enableAttribute(ie),R.bindBuffer(R.ARRAY_BUFFER,We),R.vertexAttribPointer(ie,Ce,be,De,tt*he,Bt*he)}else ye.isInstancedBufferAttribute?(j.enableAttributeAndDivisor(ie,ye.meshPerAttribute),C.maxInstancedCount===void 0&&(C.maxInstancedCount=ye.meshPerAttribute*ye.count)):j.enableAttribute(ie),R.bindBuffer(R.ARRAY_BUFFER,We),R.vertexAttribPointer(ie,Ce,be,De,0,0)}else if(Se!==void 0){var qe=Se[re];if(qe!==void 0)switch(qe.length){case 2:R.vertexAttrib2fv(ie,qe);break;case 3:R.vertexAttrib3fv(ie,qe);break;case 4:R.vertexAttrib4fv(ie,qe);break;default:R.vertexAttrib1fv(ie,qe)}}}}j.disableUnusedAttributes()}this.compile=function(x,M){l=Ve.get(x,M),l.init(),x.traverse(function(C){C.isLight&&(l.pushLight(C),C.castShadow&&l.pushShadow(C))}),l.setupLights(M),x.traverse(function(C){if(C.material)if(Array.isArray(C.material))for(var X=0;X<C.material.length;X++)Oe(C.material[X],x.fog,C);else Oe(C.material,x.fog,C)})};var we=null;function oe(x){at.isPresenting()||we&&we(x)}var Ee=new Oo;Ee.setAnimationLoop(oe),typeof window!="undefined"&&Ee.setContext(window),this.setAnimationLoop=function(x){we=x,at.setAnimationLoop(x),Ee.start()},this.render=function(x,M,C,X){if(!(M&&M.isCamera)){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(!d){_.geometry=null,_.program=null,_.wireframe=!1,g=-1,w=null,x.autoUpdate===!0&&x.updateMatrixWorld(),M.parent===null&&M.updateMatrixWorld(),at.enabled&&(M=at.getCamera(M)),l=Ve.get(x,M),l.init(),x.onBeforeRender(f,x,M,C),E.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),z.setFromMatrix(E),q=this.localClippingEnabled,Y=J.init(this.clippingPlanes,q,M),h=ct.get(x,M),h.init(),Ie(x,M,0,f.sortObjects),f.sortObjects===!0&&h.sort(),Y&&J.beginShadows();var ee=l.state.shadowsArray;Sr.render(ee,x,M),l.setupLights(M),Y&&J.endShadows(),this.info.autoReset&&this.info.reset(),C===void 0&&(C=null),this.setRenderTarget(C),Ke.render(h,x,M,X);var Se=h.opaque,re=h.transparent;if(x.overrideMaterial){var ie=x.overrideMaterial;Se.length&&Pe(Se,x,M,ie),re.length&&Pe(re,x,M,ie)}else Se.length&&Pe(Se,x,M),re.length&&Pe(re,x,M);C&&(le.updateRenderTargetMipmap(C),le.updateMultisampleRenderTarget(C)),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1),x.onAfterRender(f,x,M),at.enabled&&at.submitFrame(),h=null,l=null}};function Ie(x,M,C,X){if(x.visible!==!1){var ee=x.layers.test(M.layers);if(ee){if(x.isGroup)C=x.renderOrder;else if(x.isLight)l.pushLight(x),x.castShadow&&l.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||z.intersectsSprite(x)){X&&T.setFromMatrixPosition(x.matrixWorld).applyMatrix4(E);var Se=Re.update(x),re=x.material;h.push(x,Se,re,C,T.z,null)}}else if(x.isImmediateRenderObject)X&&T.setFromMatrixPosition(x.matrixWorld).applyMatrix4(E),h.push(x,null,x.material,C,T.z,null);else if((x.isMesh||x.isLine||x.isPoints)&&(x.isSkinnedMesh&&x.skeleton.update(),!x.frustumCulled||z.intersectsObject(x))){X&&T.setFromMatrixPosition(x.matrixWorld).applyMatrix4(E);var Se=Re.update(x),re=x.material;if(Array.isArray(re))for(var ie=Se.groups,ye=0,De=ie.length;ye<De;ye++){var Ce=ie[ye],Be=re[Ce.materialIndex];Be&&Be.visible&&h.push(x,Se,Be,C,T.z,Ce)}else re.visible&&h.push(x,Se,re,C,T.z,null)}}for(var We=x.children,ye=0,De=We.length;ye<De;ye++)Ie(We[ye],M,C,X)}}function Pe(x,M,C,X){for(var ee=0,Se=x.length;ee<Se;ee++){var re=x[ee],ie=re.object,ye=re.geometry,De=X===void 0?re.material:X,Ce=re.group;if(C.isArrayCamera){y=C;for(var Be=C.cameras,We=0,be=Be.length;We<be;We++){var he=Be[We];if(ie.layers.test(he.layers)){if("viewport"in he)j.viewport(S.copy(he.viewport));else{var Le=he.bounds,tt=Le.x*A,Bt=Le.y*D,qe=Le.z*A,Zt=Le.w*D;j.viewport(S.set(tt,Bt,qe,Zt).multiplyScalar(F))}l.setupLights(he),xt(ie,M,he,ye,De,Ce)}}}else y=null,xt(ie,M,C,ye,De,Ce)}}function xt(x,M,C,X,ee,Se){if(x.onBeforeRender(f,M,C,X,ee,Se),l=Ve.get(M,y||C),x.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),x.isImmediateRenderObject){j.setMaterial(ee);var re=Mt(C,M.fog,ee,x);_.geometry=null,_.program=null,_.wireframe=!1,te(x,re)}else f.renderBufferDirect(C,M.fog,X,ee,x,Se);x.onAfterRender(f,M,C,X,ee,Se),l=Ve.get(M,y||C)}function Oe(x,M,C){var X=me.get(x),ee=l.state.lights,Se=l.state.shadowsArray,re=X.lightsHash,ie=ee.state.hash,ye=_e.getParameters(x,ee.state,Se,M,J.numPlanes,J.numIntersection,C),De=_e.getProgramCode(x,ye),Ce=X.program,Be=!0;if(Ce===void 0)x.addEventListener("dispose",Me);else if(Ce.code!==De)O(x);else if(re.stateID!==ie.stateID||re.directionalLength!==ie.directionalLength||re.pointLength!==ie.pointLength||re.spotLength!==ie.spotLength||re.rectAreaLength!==ie.rectAreaLength||re.hemiLength!==ie.hemiLength||re.shadowsLength!==ie.shadowsLength)re.stateID=ie.stateID,re.directionalLength=ie.directionalLength,re.pointLength=ie.pointLength,re.spotLength=ie.spotLength,re.rectAreaLength=ie.rectAreaLength,re.hemiLength=ie.hemiLength,re.shadowsLength=ie.shadowsLength,Be=!1;else{if(ye.shaderID!==void 0)return;Be=!1}if(Be){if(ye.shaderID){var We=Qt[ye.shaderID];X.shader={name:x.type,uniforms:xi(We.uniforms),vertexShader:We.vertexShader,fragmentShader:We.fragmentShader}}else X.shader={name:x.type,uniforms:x.uniforms,vertexShader:x.vertexShader,fragmentShader:x.fragmentShader};x.onBeforeCompile(X.shader,f),De=_e.getProgramCode(x,ye),Ce=_e.acquireProgram(x,X.shader,ye,De),X.program=Ce,x.program=Ce}var be=Ce.getAttributes();if(x.morphTargets){x.numSupportedMorphTargets=0;for(var he=0;he<f.maxMorphTargets;he++)be["morphTarget"+he]>=0&&x.numSupportedMorphTargets++}if(x.morphNormals){x.numSupportedMorphNormals=0;for(var he=0;he<f.maxMorphNormals;he++)be["morphNormal"+he]>=0&&x.numSupportedMorphNormals++}var Le=X.shader.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(X.numClippingPlanes=J.numPlanes,X.numIntersection=J.numIntersection,Le.clippingPlanes=J.uniform),X.fog=M,re===void 0&&(X.lightsHash=re={}),re.stateID=ie.stateID,re.directionalLength=ie.directionalLength,re.pointLength=ie.pointLength,re.spotLength=ie.spotLength,re.rectAreaLength=ie.rectAreaLength,re.hemiLength=ie.hemiLength,re.shadowsLength=ie.shadowsLength,x.lights&&(Le.ambientLightColor.value=ee.state.ambient,Le.directionalLights.value=ee.state.directional,Le.spotLights.value=ee.state.spot,Le.rectAreaLights.value=ee.state.rectArea,Le.pointLights.value=ee.state.point,Le.hemisphereLights.value=ee.state.hemi,Le.directionalShadowMap.value=ee.state.directionalShadowMap,Le.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Le.spotShadowMap.value=ee.state.spotShadowMap,Le.spotShadowMatrix.value=ee.state.spotShadowMatrix,Le.pointShadowMap.value=ee.state.pointShadowMap,Le.pointShadowMatrix.value=ee.state.pointShadowMatrix);var tt=X.program.getUniforms(),Bt=sr.seqWithValue(tt.seq,Le);X.uniformsList=Bt}function Mt(x,M,C,X){P=0;var ee=me.get(C),Se=l.state.lights,re=ee.lightsHash,ie=Se.state.hash;if(Y&&(q||x!==w)){var ye=x===w&&C.id===g;J.setState(C.clippingPlanes,C.clipIntersection,C.clipShadows,x,ee,ye)}C.needsUpdate===!1&&(ee.program===void 0||C.fog&&ee.fog!==M||C.lights&&(re.stateID!==ie.stateID||re.directionalLength!==ie.directionalLength||re.pointLength!==ie.pointLength||re.spotLength!==ie.spotLength||re.rectAreaLength!==ie.rectAreaLength||re.hemiLength!==ie.hemiLength||re.shadowsLength!==ie.shadowsLength)||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==J.numPlanes||ee.numIntersection!==J.numIntersection))&&(C.needsUpdate=!0),C.needsUpdate&&(Oe(C,M,X),C.needsUpdate=!1);var De=!1,Ce=!1,Be=!1,We=ee.program,be=We.getUniforms(),he=ee.shader.uniforms;if(j.useProgram(We.program)&&(De=!0,Ce=!0,Be=!0),C.id!==g&&(g=C.id,Ce=!0),De||w!==x){if(be.setValue(R,"projectionMatrix",x.projectionMatrix),W.logarithmicDepthBuffer&&be.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),w!==x&&(w=x,Ce=!0,Be=!0),C.isShaderMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.envMap){var Le=be.map.cameraPosition;Le!==void 0&&Le.setValue(R,T.setFromMatrixPosition(x.matrixWorld))}(C.isMeshPhongMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial||C.skinning)&&be.setValue(R,"viewMatrix",x.matrixWorldInverse)}if(C.skinning){be.setOptional(R,X,"bindMatrix"),be.setOptional(R,X,"bindMatrixInverse");var tt=X.skeleton;if(tt){var Bt=tt.bones;if(W.floatVertexTextures){if(tt.boneTexture===void 0){var qe=Math.sqrt(Bt.length*4);qe=ge.ceilPowerOfTwo(qe),qe=Math.max(qe,4);var Zt=new Float32Array(qe*qe*4);Zt.set(tt.boneMatrices);var cn=new Br(Zt,qe,qe,Ht,vi);cn.needsUpdate=!0,tt.boneMatrices=Zt,tt.boneTexture=cn,tt.boneTextureSize=qe}be.setValue(R,"boneTexture",tt.boneTexture),be.setValue(R,"boneTextureSize",tt.boneTextureSize)}else be.setOptional(R,tt,"boneMatrices")}}return Ce&&(be.setValue(R,"toneMappingExposure",f.toneMappingExposure),be.setValue(R,"toneMappingWhitePoint",f.toneMappingWhitePoint),C.lights&&tu(he,Be),M&&C.fog&&on(he,M),C.isMeshBasicMaterial?Je(he,C):C.isMeshLambertMaterial?(Je(he,C),sn(he,C)):C.isMeshPhongMaterial?(Je(he,C),C.isMeshToonMaterial?Zc(he,C):mr(he,C)):C.isMeshStandardMaterial?(Je(he,C),C.isMeshPhysicalMaterial?Jc(he,C):Uo(he,C)):C.isMeshMatcapMaterial?(Je(he,C),Qc(he,C)):C.isMeshDepthMaterial?(Je(he,C),$c(he,C)):C.isMeshDistanceMaterial?(Je(he,C),Kc(he,C)):C.isMeshNormalMaterial?(Je(he,C),eu(he,C)):C.isLineBasicMaterial?(nn(he,C),C.isLineDashedMaterial&&an(he,C)):C.isPointsMaterial?ma(he,C):C.isSpriteMaterial?va(he,C):C.isShadowMaterial&&(he.color.value=C.color,he.opacity.value=C.opacity),he.ltc_1!==void 0&&(he.ltc_1.value=ae.LTC_1),he.ltc_2!==void 0&&(he.ltc_2.value=ae.LTC_2),sr.upload(R,ee.uniformsList,he,f)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(sr.upload(R,ee.uniformsList,he,f),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&be.setValue(R,"center",X.center),be.setValue(R,"modelViewMatrix",X.modelViewMatrix),be.setValue(R,"normalMatrix",X.normalMatrix),be.setValue(R,"modelMatrix",X.matrixWorld),We}function Je(x,M){x.opacity.value=M.opacity,M.color&&(x.diffuse.value=M.color),M.emissive&&x.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(x.map.value=M.map),M.alphaMap&&(x.alphaMap.value=M.alphaMap),M.specularMap&&(x.specularMap.value=M.specularMap),M.envMap&&(x.envMap.value=M.envMap,x.flipEnvMap.value=M.envMap.isCubeTexture?-1:1,x.reflectivity.value=M.reflectivity,x.refractionRatio.value=M.refractionRatio,x.maxMipLevel.value=me.get(M.envMap).__maxMipLevel),M.lightMap&&(x.lightMap.value=M.lightMap,x.lightMapIntensity.value=M.lightMapIntensity),M.aoMap&&(x.aoMap.value=M.aoMap,x.aoMapIntensity.value=M.aoMapIntensity);var C;M.map?C=M.map:M.specularMap?C=M.specularMap:M.displacementMap?C=M.displacementMap:M.normalMap?C=M.normalMap:M.bumpMap?C=M.bumpMap:M.roughnessMap?C=M.roughnessMap:M.metalnessMap?C=M.metalnessMap:M.alphaMap?C=M.alphaMap:M.emissiveMap&&(C=M.emissiveMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),x.uvTransform.value.copy(C.matrix))}function nn(x,M){x.diffuse.value=M.color,x.opacity.value=M.opacity}function an(x,M){x.dashSize.value=M.dashSize,x.totalSize.value=M.dashSize+M.gapSize,x.scale.value=M.scale}function ma(x,M){x.diffuse.value=M.color,x.opacity.value=M.opacity,x.size.value=M.size*F,x.scale.value=D*.5,x.map.value=M.map,M.map!==null&&(M.map.matrixAutoUpdate===!0&&M.map.updateMatrix(),x.uvTransform.value.copy(M.map.matrix))}function va(x,M){x.diffuse.value=M.color,x.opacity.value=M.opacity,x.rotation.value=M.rotation,x.map.value=M.map,M.map!==null&&(M.map.matrixAutoUpdate===!0&&M.map.updateMatrix(),x.uvTransform.value.copy(M.map.matrix))}function on(x,M){x.fogColor.value=M.color,M.isFog?(x.fogNear.value=M.near,x.fogFar.value=M.far):M.isFogExp2&&(x.fogDensity.value=M.density)}function sn(x,M){M.emissiveMap&&(x.emissiveMap.value=M.emissiveMap)}function mr(x,M){x.specular.value=M.specular,x.shininess.value=Math.max(M.shininess,1e-4),M.emissiveMap&&(x.emissiveMap.value=M.emissiveMap),M.bumpMap&&(x.bumpMap.value=M.bumpMap,x.bumpScale.value=M.bumpScale,M.side===ft&&(x.bumpScale.value*=-1)),M.normalMap&&(x.normalMap.value=M.normalMap,x.normalScale.value.copy(M.normalScale),M.side===ft&&x.normalScale.value.negate()),M.displacementMap&&(x.displacementMap.value=M.displacementMap,x.displacementScale.value=M.displacementScale,x.displacementBias.value=M.displacementBias)}function Zc(x,M){mr(x,M),M.gradientMap&&(x.gradientMap.value=M.gradientMap)}function Uo(x,M){x.roughness.value=M.roughness,x.metalness.value=M.metalness,M.roughnessMap&&(x.roughnessMap.value=M.roughnessMap),M.metalnessMap&&(x.metalnessMap.value=M.metalnessMap),M.emissiveMap&&(x.emissiveMap.value=M.emissiveMap),M.bumpMap&&(x.bumpMap.value=M.bumpMap,x.bumpScale.value=M.bumpScale,M.side===ft&&(x.bumpScale.value*=-1)),M.normalMap&&(x.normalMap.value=M.normalMap,x.normalScale.value.copy(M.normalScale),M.side===ft&&x.normalScale.value.negate()),M.displacementMap&&(x.displacementMap.value=M.displacementMap,x.displacementScale.value=M.displacementScale,x.displacementBias.value=M.displacementBias),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)}function Jc(x,M){Uo(x,M),x.reflectivity.value=M.reflectivity,x.clearCoat.value=M.clearCoat,x.clearCoatRoughness.value=M.clearCoatRoughness}function Qc(x,M){M.matcap&&(x.matcap.value=M.matcap),M.bumpMap&&(x.bumpMap.value=M.bumpMap,x.bumpScale.value=M.bumpScale,M.side===ft&&(x.bumpScale.value*=-1)),M.normalMap&&(x.normalMap.value=M.normalMap,x.normalScale.value.copy(M.normalScale),M.side===ft&&x.normalScale.value.negate()),M.displacementMap&&(x.displacementMap.value=M.displacementMap,x.displacementScale.value=M.displacementScale,x.displacementBias.value=M.displacementBias)}function $c(x,M){M.displacementMap&&(x.displacementMap.value=M.displacementMap,x.displacementScale.value=M.displacementScale,x.displacementBias.value=M.displacementBias)}function Kc(x,M){M.displacementMap&&(x.displacementMap.value=M.displacementMap,x.displacementScale.value=M.displacementScale,x.displacementBias.value=M.displacementBias),x.referencePosition.value.copy(M.referencePosition),x.nearDistance.value=M.nearDistance,x.farDistance.value=M.farDistance}function eu(x,M){M.bumpMap&&(x.bumpMap.value=M.bumpMap,x.bumpScale.value=M.bumpScale,M.side===ft&&(x.bumpScale.value*=-1)),M.normalMap&&(x.normalMap.value=M.normalMap,x.normalScale.value.copy(M.normalScale),M.side===ft&&x.normalScale.value.negate()),M.displacementMap&&(x.displacementMap.value=M.displacementMap,x.displacementScale.value=M.displacementScale,x.displacementBias.value=M.displacementBias)}function tu(x,M){x.ambientLightColor.needsUpdate=M,x.directionalLights.needsUpdate=M,x.pointLights.needsUpdate=M,x.spotLights.needsUpdate=M,x.rectAreaLights.needsUpdate=M,x.hemisphereLights.needsUpdate=M}function ru(){var x=P;return x>=W.maxTextures&&console.warn("THREE.WebGLRenderer: Trying to use "+x+" texture units while this GPU supports only "+W.maxTextures),P+=1,x}this.allocTextureUnit=ru,this.setTexture2D=function(){var x=!1;return function(C,X){C&&C.isWebGLRenderTarget&&(x||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),x=!0),C=C.texture),le.setTexture2D(C,X)}}(),this.setTexture3D=function(){return function(M,C){le.setTexture3D(M,C)}}(),this.setTexture=function(){var x=!1;return function(C,X){x||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),x=!0),le.setTexture2D(C,X)}}(),this.setTextureCube=function(){var x=!1;return function(C,X){C&&C.isWebGLRenderTargetCube&&(x||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),x=!0),C=C.texture),C&&C.isCubeTexture||Array.isArray(C.image)&&C.image.length===6?le.setTextureCube(C,X):le.setTextureCubeDynamic(C,X)}}(),this.setFramebuffer=function(x){p=x},this.getRenderTarget=function(){return m},this.setRenderTarget=function(x){m=x,x&&me.get(x).__webglFramebuffer===void 0&&le.setupRenderTarget(x);var M=p,C=!1;if(x){var X=me.get(x).__webglFramebuffer;x.isWebGLRenderTargetCube?(M=X[x.activeCubeFace],C=!0):x.isWebGLMultisampleRenderTarget?M=me.get(x).__webglMultisampledFramebuffer:M=X,S.copy(x.viewport),L.copy(x.scissor),I=x.scissorTest}else S.copy(N).multiplyScalar(F),L.copy(G).multiplyScalar(F),I=H;if(v!==M&&(R.bindFramebuffer(R.FRAMEBUFFER,M),v=M),j.viewport(S),j.scissor(L),j.setScissorTest(I),C){var ee=me.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+x.activeCubeFace,ee.__webglTexture,x.activeMipMapLevel)}},this.readRenderTargetPixels=function(x,M,C,X,ee,Se){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}var re=me.get(x).__webglFramebuffer;if(re){var ie=!1;re!==v&&(R.bindFramebuffer(R.FRAMEBUFFER,re),ie=!0);try{var ye=x.texture,De=ye.format,Ce=ye.type;if(De!==Ht&&je.convert(De)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce!==mi&&je.convert(Ce)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===vi&&(W.isWebGL2||U.get("OES_texture_float")||U.get("WEBGL_color_buffer_float")))&&!(Ce===Po&&(W.isWebGL2?U.get("EXT_color_buffer_float"):U.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R.checkFramebufferStatus(R.FRAMEBUFFER)===R.FRAMEBUFFER_COMPLETE?M>=0&&M<=x.width-X&&C>=0&&C<=x.height-ee&&R.readPixels(M,C,X,ee,je.convert(De),je.convert(Ce),Se):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{ie&&R.bindFramebuffer(R.FRAMEBUFFER,v)}}},this.copyFramebufferToTexture=function(x,M,C){var X=M.image.width,ee=M.image.height,Se=je.convert(M.format);this.setTexture2D(M,0),R.copyTexImage2D(R.TEXTURE_2D,C||0,Se,x.x,x.y,X,ee,0)},this.copyTextureToTexture=function(x,M,C,X){var ee=M.image.width,Se=M.image.height,re=je.convert(C.format),ie=je.convert(C.type);this.setTexture2D(C,0),M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,X||0,x.x,x.y,ee,Se,re,ie,M.image.data):R.texSubImage2D(R.TEXTURE_2D,X||0,x.x,x.y,re,ie,M.image)}}function Ei(e,t){this.name="",this.color=new se(e),this.density=t!==void 0?t:25e-5}Ei.prototype.isFogExp2=!0;Ei.prototype.clone=function(){return new Ei(this.color,this.density)};Ei.prototype.toJSON=function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}};function Ti(e,t,r){this.name="",this.color=new se(e),this.near=t!==void 0?t:1,this.far=r!==void 0?r:1e3}Ti.prototype.isFog=!0;Ti.prototype.clone=function(){return new Ti(this.color,this.near,this.far)};Ti.prototype.toJSON=function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};function Si(){$.call(this),this.type="Scene",this.background=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0}Si.prototype=Object.assign(Object.create($.prototype),{constructor:Si,copy:function(e,t){return $.prototype.copy.call(this,e,t),e.background!==null&&(this.background=e.background.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this},toJSON:function(e){var t=$.prototype.toJSON.call(this,e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Gr(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Gr.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(Gr.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setArray:function(e){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");return this.count=e!==void 0?e.length/this.stride:0,this.array=e,this},setDynamic:function(e){return this.dynamic=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.dynamic=e.dynamic,this},copyAt:function(e,t,r){e*=this.stride,r*=t.stride;for(var i=0,n=this.stride;i<n;i++)this.array[e+i]=t.array[r+i];return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},clone:function(){return new this.constructor().copy(this)},onUpload:function(e){return this.onUploadCallback=e,this}});function Ln(e,t,r,i){this.data=e,this.itemSize=t,this.offset=r,this.normalized=i===!0}Object.defineProperties(Ln.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(Ln.prototype,{isInterleavedBufferAttribute:!0,setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this},setXYZ:function(e,t,r,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=i,this},setXYZW:function(e,t,r,i,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=i,this.data.array[e+3]=n,this}});function Mr(e){ve.call(this),this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.rotation=0,this.sizeAttenuation=!0,this.lights=!1,this.transparent=!0,this.setValues(e)}Mr.prototype=Object.create(ve.prototype);Mr.prototype.constructor=Mr;Mr.prototype.isSpriteMaterial=!0;Mr.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};var Rr;function Ja(e){if($.call(this),this.type="Sprite",Rr===void 0){Rr=new K;var t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Gr(t,5);Rr.setIndex([0,1,2,0,2,3]),Rr.addAttribute("position",new Ln(r,3,0,!1)),Rr.addAttribute("uv",new Ln(r,2,3,!1))}this.geometry=Rr,this.material=e!==void 0?e:new Mr,this.center=new V(.5,.5)}Ja.prototype=Object.assign(Object.create($.prototype),{constructor:Ja,isSprite:!0,raycast:function(){var e=new b,t=new b,r=new b,i=new V,n=new V,a=new fe,o=new b,s=new b,c=new b,u=new V,h=new V,l=new V;function f(d,p,m,v,g,_){i.subVectors(d,m).addScalar(.5).multiply(v),g!==void 0?(n.x=_*i.x-g*i.y,n.y=g*i.x+_*i.y):n.copy(i),d.copy(p),d.x+=n.x,d.y+=n.y,d.applyMatrix4(a)}return function(p,m){t.setFromMatrixScale(this.matrixWorld),a.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld),r.setFromMatrixPosition(this.modelViewMatrix);var v=this.material.rotation,g,_;v!==0&&(_=Math.cos(v),g=Math.sin(v));var w=this.center;f(o.set(-.5,-.5,0),r,w,t,g,_),f(s.set(.5,-.5,0),r,w,t,g,_),f(c.set(.5,.5,0),r,w,t,g,_),u.set(0,0),h.set(1,0),l.set(1,1);var y=p.ray.intersectTriangle(o,s,c,!1,e);if(!(y===null&&(f(s.set(-.5,.5,0),r,w,t,g,_),h.set(0,1),y=p.ray.intersectTriangle(o,c,s,!1,e),y===null))){var S=p.ray.origin.distanceTo(e);S<p.near||S>p.far||m.push({distance:S,point:e.clone(),uv:dt.getUV(e,o,s,c,u,h,l,new V),face:null,object:this})}}}(),clone:function(){return new this.constructor(this.material).copy(this)},copy:function(e){return $.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this}});function Rn(){$.call(this),this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}Rn.prototype=Object.assign(Object.create($.prototype),{constructor:Rn,copy:function(e){$.prototype.copy.call(this,e,!1);for(var t=e.levels,r=0,i=t.length;r<i;r++){var n=t[r];this.addLevel(n.object.clone(),n.distance)}return this},addLevel:function(e,t){t===void 0&&(t=0),t=Math.abs(t);for(var r=this.levels,i=0;i<r.length&&!(t<r[i].distance);i++);r.splice(i,0,{distance:t,object:e}),this.add(e)},getObjectForDistance:function(e){for(var t=this.levels,r=1,i=t.length;r<i&&!(e<t[r].distance);r++);return t[r-1].object},raycast:function(){var e=new b;return function(r,i){e.setFromMatrixPosition(this.matrixWorld);var n=r.ray.origin.distanceTo(e);this.getObjectForDistance(n).raycast(r,i)}}(),update:function(){var e=new b,t=new b;return function(i){var n=this.levels;if(n.length>1){e.setFromMatrixPosition(i.matrixWorld),t.setFromMatrixPosition(this.matrixWorld);var a=e.distanceTo(t);n[0].object.visible=!0;for(var o=1,s=n.length;o<s&&a>=n[o].distance;o++)n[o-1].object.visible=!1,n[o].object.visible=!0;for(;o<s;o++)n[o].object.visible=!1}}}(),toJSON:function(e){var t=$.prototype.toJSON.call(this,e);t.object.levels=[];for(var r=this.levels,i=0,n=r.length;i<n;i++){var a=r[i];t.object.levels.push({object:a.object.uuid,distance:a.distance})}return t}});function Cn(e,t){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),ht.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new fe,this.bindMatrixInverse=new fe}Cn.prototype=Object.assign(Object.create(ht.prototype),{constructor:Cn,isSkinnedMesh:!0,bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){for(var e=new Fe,t=this.geometry.attributes.skinWeight,r=0,i=t.count;r<i;r++){e.x=t.getX(r),e.y=t.getY(r),e.z=t.getZ(r),e.w=t.getW(r);var n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){ht.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function Qa(e,t){if(e=e||[],this.bones=e.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),t===void 0)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(var r=0,i=this.bones.length;r<i;r++)this.boneInverses.push(new fe)}}Object.assign(Qa.prototype,{calculateInverses:function(){this.boneInverses=[];for(var e=0,t=this.bones.length;e<t;e++){var r=new fe;this.bones[e]&&r.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(r)}},pose:function(){var e,t,r;for(t=0,r=this.bones.length;t<r;t++)e=this.bones[t],e&&e.matrixWorld.getInverse(this.boneInverses[t]);for(t=0,r=this.bones.length;t<r;t++)e=this.bones[t],e&&(e.parent&&e.parent.isBone?(e.matrix.getInverse(e.parent.matrixWorld),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))},update:function(){var e=new fe,t=new fe;return function(){for(var i=this.bones,n=this.boneInverses,a=this.boneMatrices,o=this.boneTexture,s=0,c=i.length;s<c;s++){var u=i[s]?i[s].matrixWorld:t;e.multiplyMatrices(u,n[s]),e.toArray(a,s*16)}o!==void 0&&(o.needsUpdate=!0)}}(),clone:function(){return new Qa(this.bones,this.boneInverses)},getBoneByName:function(e){for(var t=0,r=this.bones.length;t<r;t++){var i=this.bones[t];if(i.name===e)return i}}});function bs(){$.call(this),this.type="Bone"}bs.prototype=Object.assign(Object.create($.prototype),{constructor:bs,isBone:!0});function Ge(e){ve.call(this),this.type="LineBasicMaterial",this.color=new se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.lights=!1,this.setValues(e)}Ge.prototype=Object.create(ve.prototype);Ge.prototype.constructor=Ge;Ge.prototype.isLineBasicMaterial=!0;Ge.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this};function bt(e,t,r){r===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),$.call(this),this.type="Line",this.geometry=e!==void 0?e:new K,this.material=t!==void 0?t:new Ge({color:Math.random()*16777215})}bt.prototype=Object.assign(Object.create($.prototype),{constructor:bt,isLine:!0,computeLineDistances:function(){var e=new b,t=new b;return function(){var i=this.geometry;if(i.isBufferGeometry)if(i.index===null){for(var n=i.attributes.position,a=[0],o=1,s=n.count;o<s;o++)e.fromBufferAttribute(n,o-1),t.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=e.distanceTo(t);i.addAttribute("lineDistance",new Z(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(i.isGeometry){var c=i.vertices,a=i.lineDistances;a[0]=0;for(var o=1,s=c.length;o<s;o++)a[o]=a[o-1],a[o]+=c[o-1].distanceTo(c[o])}return this}}(),raycast:function(){var e=new fe,t=new ni,r=new Vt;return function(n,a){var o=n.linePrecision,s=this.geometry,c=this.matrixWorld;if(s.boundingSphere===null&&s.computeBoundingSphere(),r.copy(s.boundingSphere),r.applyMatrix4(c),r.radius+=o,n.ray.intersectsSphere(r)!==!1){e.getInverse(c),t.copy(n.ray).applyMatrix4(e);var u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,l=new b,f=new b,d=new b,p=new b,m=this&&this.isLineSegments?2:1;if(s.isBufferGeometry){var v=s.index,g=s.attributes,_=g.position.array;if(v!==null)for(var w=v.array,y=0,S=w.length-1;y<S;y+=m){var L=w[y],I=w[y+1];l.fromArray(_,L*3),f.fromArray(_,I*3);var P=t.distanceSqToSegment(l,f,p,d);if(!(P>h)){p.applyMatrix4(this.matrixWorld);var A=n.ray.origin.distanceTo(p);A<n.near||A>n.far||a.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else for(var y=0,S=_.length/3-1;y<S;y+=m){l.fromArray(_,3*y),f.fromArray(_,3*y+3);var P=t.distanceSqToSegment(l,f,p,d);if(!(P>h)){p.applyMatrix4(this.matrixWorld);var A=n.ray.origin.distanceTo(p);A<n.near||A>n.far||a.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}else if(s.isGeometry)for(var D=s.vertices,F=D.length,y=0;y<F-1;y+=m){var P=t.distanceSqToSegment(D[y],D[y+1],p,d);if(!(P>h)){p.applyMatrix4(this.matrixWorld);var A=n.ray.origin.distanceTo(p);A<n.near||A>n.far||a.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}}}(),copy:function(e){return $.prototype.copy.call(this,e),this.geometry.copy(e.geometry),this.material.copy(e.material),this},clone:function(){return new this.constructor().copy(this)}});function He(e,t){bt.call(this,e,t),this.type="LineSegments"}He.prototype=Object.assign(Object.create(bt.prototype),{constructor:He,isLineSegments:!0,computeLineDistances:function(){var e=new b,t=new b;return function(){var i=this.geometry;if(i.isBufferGeometry)if(i.index===null){for(var n=i.attributes.position,a=[],o=0,s=n.count;o<s;o+=2)e.fromBufferAttribute(n,o),t.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+e.distanceTo(t);i.addAttribute("lineDistance",new Z(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(i.isGeometry)for(var c=i.vertices,a=i.lineDistances,o=0,s=c.length;o<s;o+=2)e.copy(c[o]),t.copy(c[o+1]),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+e.distanceTo(t);return this}}()});function $a(e,t){bt.call(this,e,t),this.type="LineLoop"}$a.prototype=Object.assign(Object.create(bt.prototype),{constructor:$a,isLineLoop:!0});function Er(e){ve.call(this),this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.lights=!1,this.setValues(e)}Er.prototype=Object.create(ve.prototype);Er.prototype.constructor=Er;Er.prototype.isPointsMaterial=!0;Er.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};function Ka(e,t){$.call(this),this.type="Points",this.geometry=e!==void 0?e:new K,this.material=t!==void 0?t:new Er({color:Math.random()*16777215})}Ka.prototype=Object.assign(Object.create($.prototype),{constructor:Ka,isPoints:!0,raycast:function(){var e=new fe,t=new ni,r=new Vt;return function(n,a){var o=this,s=this.geometry,c=this.matrixWorld,u=n.params.Points.threshold;if(s.boundingSphere===null&&s.computeBoundingSphere(),r.copy(s.boundingSphere),r.applyMatrix4(c),r.radius+=u,n.ray.intersectsSphere(r)===!1)return;e.getInverse(c),t.copy(n.ray).applyMatrix4(e);var h=u/((this.scale.x+this.scale.y+this.scale.z)/3),l=h*h,f=new b,d=new b;function p(P,A){var D=t.distanceSqToPoint(P);if(D<l){t.closestPointToPoint(P,d),d.applyMatrix4(c);var F=n.ray.origin.distanceTo(d);if(F<n.near||F>n.far)return;a.push({distance:F,distanceToRay:Math.sqrt(D),point:d.clone(),index:A,face:null,object:o})}}if(s.isBufferGeometry){var m=s.index,v=s.attributes,g=v.position.array;if(m!==null)for(var _=m.array,w=0,y=_.length;w<y;w++){var S=_[w];f.fromArray(g,S*3),p(f,S)}else for(var w=0,L=g.length/3;w<L;w++)f.fromArray(g,w*3),p(f,w)}else for(var I=s.vertices,w=0,L=I.length;w<L;w++)p(I[w],w)}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function Ms(e,t,r,i,n,a,o,s,c){Ne.call(this,e,t,r,i,n,a,o,s,c),this.format=o!==void 0?o:xr,this.minFilter=a!==void 0?a:ot,this.magFilter=n!==void 0?n:ot,this.generateMipmaps=!1}Ms.prototype=Object.assign(Object.create(Ne.prototype),{constructor:Ms,isVideoTexture:!0,update:function(){var e=this.image;e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Ai(e,t,r,i,n,a,o,s,c,u,h,l){Ne.call(this,null,a,o,s,c,u,i,n,h,l),this.image={width:t,height:r},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}Ai.prototype=Object.create(Ne.prototype);Ai.prototype.constructor=Ai;Ai.prototype.isCompressedTexture=!0;function Pn(e,t,r,i,n,a,o,s,c){Ne.call(this,e,t,r,i,n,a,o,s,c),this.needsUpdate=!0}Pn.prototype=Object.create(Ne.prototype);Pn.prototype.constructor=Pn;Pn.prototype.isCanvasTexture=!0;function In(e,t,r,i,n,a,o,s,c,u){if(u=u!==void 0?u:Dr,u!==Dr&&u!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Dr&&(r=xn),r===void 0&&u===gi&&(r=_n),Ne.call(this,null,i,n,a,o,s,u,r,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:it,this.minFilter=s!==void 0?s:it,this.flipY=!1,this.generateMipmaps=!1}In.prototype=Object.create(Ne.prototype);In.prototype.constructor=In;In.prototype.isDepthTexture=!0;function zr(){var e=new Uint8Array(3),t=1,r=1,i=xr;Ne.call(this,null,void 0,void 0,void 0,void 0,void 0,i,void 0,void 0,void 0),this.image={data:e,width:t,height:r},this.magFilter=it,this.minFilter=it,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}zr.prototype=Object.create(Ne.prototype);zr.prototype.constructor=zr;zr.prototype.isDataTexture=!0;zr.prototype.isCfxTexture=!0;function On(e){K.call(this),this.type="WireframeGeometry";var t=[],r,i,n,a,o,s=[0,0],c={},u,h,l,f,d=["a","b","c"],p;if(e&&e.isGeometry){var m=e.faces;for(r=0,n=m.length;r<n;r++){var v=m[r];for(i=0;i<3;i++)h=v[d[i]],l=v[d[(i+1)%3]],s[0]=Math.min(h,l),s[1]=Math.max(h,l),f=s[0]+","+s[1],c[f]===void 0&&(c[f]={index1:s[0],index2:s[1]})}for(f in c)u=c[f],p=e.vertices[u.index1],t.push(p.x,p.y,p.z),p=e.vertices[u.index2],t.push(p.x,p.y,p.z)}else if(e&&e.isBufferGeometry){var g,_,w,y,S,L,I,P;if(p=new b,e.index!==null){for(g=e.attributes.position,_=e.index,w=e.groups,w.length===0&&(w=[{start:0,count:_.count,materialIndex:0}]),a=0,o=w.length;a<o;++a)for(y=w[a],S=y.start,L=y.count,r=S,n=S+L;r<n;r+=3)for(i=0;i<3;i++)h=_.getX(r+i),l=_.getX(r+(i+1)%3),s[0]=Math.min(h,l),s[1]=Math.max(h,l),f=s[0]+","+s[1],c[f]===void 0&&(c[f]={index1:s[0],index2:s[1]});for(f in c)u=c[f],p.fromBufferAttribute(g,u.index1),t.push(p.x,p.y,p.z),p.fromBufferAttribute(g,u.index2),t.push(p.x,p.y,p.z)}else for(g=e.attributes.position,r=0,n=g.count/3;r<n;r++)for(i=0;i<3;i++)I=3*r+i,p.fromBufferAttribute(g,I),t.push(p.x,p.y,p.z),P=3*r+(i+1)%3,p.fromBufferAttribute(g,P),t.push(p.x,p.y,p.z)}this.addAttribute("position",new Z(t,3))}On.prototype=Object.create(K.prototype);On.prototype.constructor=On;function Dn(e,t,r){de.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:r},this.fromBufferGeometry(new Li(e,t,r)),this.mergeVertices()}Dn.prototype=Object.create(de.prototype);Dn.prototype.constructor=Dn;function Li(e,t,r){K.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:r};var i=[],n=[],a=[],o=[],s=1e-5,c=new b,u=new b,h=new b,l=new b,f=new b,d,p;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");var m=t+1;for(d=0;d<=r;d++){var v=d/r;for(p=0;p<=t;p++){var g=p/t;e(g,v,u),n.push(u.x,u.y,u.z),g-s>=0?(e(g-s,v,h),l.subVectors(u,h)):(e(g+s,v,h),l.subVectors(h,u)),v-s>=0?(e(g,v-s,h),f.subVectors(u,h)):(e(g,v+s,h),f.subVectors(h,u)),c.crossVectors(l,f).normalize(),a.push(c.x,c.y,c.z),o.push(g,v)}}for(d=0;d<r;d++)for(p=0;p<t;p++){var _=d*m+p,w=d*m+p+1,y=(d+1)*m+p+1,S=(d+1)*m+p;i.push(_,w,S),i.push(w,y,S)}this.setIndex(i),this.addAttribute("position",new Z(n,3)),this.addAttribute("normal",new Z(a,3)),this.addAttribute("uv",new Z(o,2))}Li.prototype=Object.create(K.prototype);Li.prototype.constructor=Li;function Fn(e,t,r,i){de.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:i},this.fromBufferGeometry(new St(e,t,r,i)),this.mergeVertices()}Fn.prototype=Object.create(de.prototype);Fn.prototype.constructor=Fn;function St(e,t,r,i){K.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:i},r=r||1,i=i||0;var n=[],a=[];o(i),c(r),u(),this.addAttribute("position",new Z(n,3)),this.addAttribute("normal",new Z(n.slice(),3)),this.addAttribute("uv",new Z(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(g){for(var _=new b,w=new b,y=new b,S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],w),f(t[S+2],y),s(_,w,y,g)}function s(g,_,w,y){var S=Math.pow(2,y),L=[],I,P;for(I=0;I<=S;I++){L[I]=[];var A=g.clone().lerp(w,I/S),D=_.clone().lerp(w,I/S),F=S-I;for(P=0;P<=F;P++)P===0&&I===S?L[I][P]=A:L[I][P]=A.clone().lerp(D,P/F)}for(I=0;I<S;I++)for(P=0;P<2*(S-I)-1;P++){var N=Math.floor(P/2);P%2===0?(l(L[I][N+1]),l(L[I+1][N]),l(L[I][N])):(l(L[I][N+1]),l(L[I+1][N+1]),l(L[I+1][N]))}}function c(g){for(var _=new b,w=0;w<n.length;w+=3)_.x=n[w+0],_.y=n[w+1],_.z=n[w+2],_.normalize().multiplyScalar(g),n[w+0]=_.x,n[w+1]=_.y,n[w+2]=_.z}function u(){for(var g=new b,_=0;_<n.length;_+=3){g.x=n[_+0],g.y=n[_+1],g.z=n[_+2];var w=m(g)/2/Math.PI+.5,y=v(g)/Math.PI+.5;a.push(w,1-y)}d(),h()}function h(){for(var g=0;g<a.length;g+=6){var _=a[g+0],w=a[g+2],y=a[g+4],S=Math.max(_,w,y),L=Math.min(_,w,y);S>.9&&L<.1&&(_<.2&&(a[g+0]+=1),w<.2&&(a[g+2]+=1),y<.2&&(a[g+4]+=1))}}function l(g){n.push(g.x,g.y,g.z)}function f(g,_){var w=g*3;_.x=e[w+0],_.y=e[w+1],_.z=e[w+2]}function d(){for(var g=new b,_=new b,w=new b,y=new b,S=new V,L=new V,I=new V,P=0,A=0;P<n.length;P+=9,A+=6){g.set(n[P+0],n[P+1],n[P+2]),_.set(n[P+3],n[P+4],n[P+5]),w.set(n[P+6],n[P+7],n[P+8]),S.set(a[A+0],a[A+1]),L.set(a[A+2],a[A+3]),I.set(a[A+4],a[A+5]),y.copy(g).add(_).add(w).divideScalar(3);var D=m(y);p(S,A+0,g,D),p(L,A+2,_,D),p(I,A+4,w,D)}}function p(g,_,w,y){y<0&&g.x===1&&(a[_]=g.x-1),w.x===0&&w.z===0&&(a[_]=y/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function v(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}St.prototype=Object.create(K.prototype);St.prototype.constructor=St;function Nn(e,t){de.call(this),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Ri(e,t)),this.mergeVertices()}Nn.prototype=Object.create(de.prototype);Nn.prototype.constructor=Nn;function Ri(e,t){var r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];St.call(this,r,i,e,t),this.type="TetrahedronBufferGeometry",this.parameters={radius:e,detail:t}}Ri.prototype=Object.create(St.prototype);Ri.prototype.constructor=Ri;function Bn(e,t){de.call(this),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Hr(e,t)),this.mergeVertices()}Bn.prototype=Object.create(de.prototype);Bn.prototype.constructor=Bn;function Hr(e,t){var r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];St.call(this,r,i,e,t),this.type="OctahedronBufferGeometry",this.parameters={radius:e,detail:t}}Hr.prototype=Object.create(St.prototype);Hr.prototype.constructor=Hr;function Un(e,t){de.call(this),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Ci(e,t)),this.mergeVertices()}Un.prototype=Object.create(de.prototype);Un.prototype.constructor=Un;function Ci(e,t){var r=(1+Math.sqrt(5))/2,i=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];St.call(this,i,n,e,t),this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:t}}Ci.prototype=Object.create(St.prototype);Ci.prototype.constructor=Ci;function Gn(e,t){de.call(this),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Pi(e,t)),this.mergeVertices()}Gn.prototype=Object.create(de.prototype);Gn.prototype.constructor=Gn;function Pi(e,t){var r=(1+Math.sqrt(5))/2,i=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-r,0,-i,r,0,i,-r,0,i,r,-i,-r,0,-i,r,0,i,-r,0,i,r,0,-r,0,-i,r,0,-i,-r,0,i,r,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];St.call(this,n,a,e,t),this.type="DodecahedronBufferGeometry",this.parameters={radius:e,detail:t}}Pi.prototype=Object.create(St.prototype);Pi.prototype.constructor=Pi;function zn(e,t,r,i,n,a){de.call(this),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:i,closed:n},a!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");var o=new Ii(e,t,r,i,n);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals,this.fromBufferGeometry(o),this.mergeVertices()}zn.prototype=Object.create(de.prototype);zn.prototype.constructor=zn;function Ii(e,t,r,i,n){K.call(this),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:i,closed:n},t=t||64,r=r||1,i=i||8,n=n||!1;var a=e.computeFrenetFrames(t,n);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;var o=new b,s=new b,c=new V,u=new b,h,l,f=[],d=[],p=[],m=[];v(),this.setIndex(m),this.addAttribute("position",new Z(f,3)),this.addAttribute("normal",new Z(d,3)),this.addAttribute("uv",new Z(p,2));function v(){for(h=0;h<t;h++)g(h);g(n===!1?t:0),w(),_()}function g(y){u=e.getPointAt(y/t,u);var S=a.normals[y],L=a.binormals[y];for(l=0;l<=i;l++){var I=l/i*Math.PI*2,P=Math.sin(I),A=-Math.cos(I);s.x=A*S.x+P*L.x,s.y=A*S.y+P*L.y,s.z=A*S.z+P*L.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=u.x+r*s.x,o.y=u.y+r*s.y,o.z=u.z+r*s.z,f.push(o.x,o.y,o.z)}}function _(){for(l=1;l<=t;l++)for(h=1;h<=i;h++){var y=(i+1)*(l-1)+(h-1),S=(i+1)*l+(h-1),L=(i+1)*l+h,I=(i+1)*(l-1)+h;m.push(y,S,I),m.push(S,L,I)}}function w(){for(h=0;h<=t;h++)for(l=0;l<=i;l++)c.x=h/t,c.y=l/i,p.push(c.x,c.y)}}Ii.prototype=Object.create(K.prototype);Ii.prototype.constructor=Ii;function Hn(e,t,r,i,n,a,o){de.call(this),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:r,radialSegments:i,p:n,q:a},o!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new Oi(e,t,r,i,n,a)),this.mergeVertices()}Hn.prototype=Object.create(de.prototype);Hn.prototype.constructor=Hn;function Oi(e,t,r,i,n,a){K.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:e,tube:t,tubularSegments:r,radialSegments:i,p:n,q:a},e=e||1,t=t||.4,r=Math.floor(r)||64,i=Math.floor(i)||8,n=n||2,a=a||3;var o=[],s=[],c=[],u=[],h,l,f=new b,d=new b,p=new b,m=new b,v=new b,g=new b,_=new b;for(h=0;h<=r;++h){var w=h/r*n*Math.PI*2;for(F(w,n,a,e,p),F(w+.01,n,a,e,m),g.subVectors(m,p),_.addVectors(m,p),v.crossVectors(g,_),_.crossVectors(v,g),v.normalize(),_.normalize(),l=0;l<=i;++l){var y=l/i*Math.PI*2,S=-t*Math.cos(y),L=t*Math.sin(y);f.x=p.x+(S*_.x+L*v.x),f.y=p.y+(S*_.y+L*v.y),f.z=p.z+(S*_.z+L*v.z),s.push(f.x,f.y,f.z),d.subVectors(f,p).normalize(),c.push(d.x,d.y,d.z),u.push(h/r),u.push(l/i)}}for(l=1;l<=r;l++)for(h=1;h<=i;h++){var I=(i+1)*(l-1)+(h-1),P=(i+1)*l+(h-1),A=(i+1)*l+h,D=(i+1)*(l-1)+h;o.push(I,P,D),o.push(P,A,D)}this.setIndex(o),this.addAttribute("position",new Z(s,3)),this.addAttribute("normal",new Z(c,3)),this.addAttribute("uv",new Z(u,2));function F(N,G,H,z,J){var Y=Math.cos(N),q=Math.sin(N),E=H/G*N,T=Math.cos(E);J.x=z*(2+T)*.5*Y,J.y=z*(2+T)*q*.5,J.z=z*Math.sin(E)*.5}}Oi.prototype=Object.create(K.prototype);Oi.prototype.constructor=Oi;function Vn(e,t,r,i,n){de.call(this),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:i,arc:n},this.fromBufferGeometry(new Di(e,t,r,i,n)),this.mergeVertices()}Vn.prototype=Object.create(de.prototype);Vn.prototype.constructor=Vn;function Di(e,t,r,i,n){K.call(this),this.type="TorusBufferGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:i,arc:n},e=e||1,t=t||.4,r=Math.floor(r)||8,i=Math.floor(i)||6,n=n||Math.PI*2;var a=[],o=[],s=[],c=[],u=new b,h=new b,l=new b,f,d;for(f=0;f<=r;f++)for(d=0;d<=i;d++){var p=d/i*n,m=f/r*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(p),h.y=(e+t*Math.cos(m))*Math.sin(p),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),l.subVectors(h,u).normalize(),s.push(l.x,l.y,l.z),c.push(d/i),c.push(f/r)}for(f=1;f<=r;f++)for(d=1;d<=i;d++){var v=(i+1)*f+d-1,g=(i+1)*(f-1)+d-1,_=(i+1)*(f-1)+d,w=(i+1)*f+d;a.push(v,g,w),a.push(g,_,w)}this.setIndex(a),this.addAttribute("position",new Z(o,3)),this.addAttribute("normal",new Z(s,3)),this.addAttribute("uv",new Z(c,2))}Di.prototype=Object.create(K.prototype);Di.prototype.constructor=Di;var lp={triangulate:function(e,t,r){r=r||2;var i=t&&t.length,n=i?t[0]*r:e.length,a=Ec(e,0,n,r,!0),o=[];if(!a)return o;var s,c,u,h,l,f,d;if(i&&(a=vp(e,t,a,r)),e.length>80*r){s=u=e[0],c=h=e[1];for(var p=r;p<n;p+=r)l=e[p],f=e[p+1],l<s&&(s=l),f<c&&(c=f),l>u&&(u=l),f>h&&(h=f);d=Math.max(u-s,h-c),d=d!==0?1/d:0}return Ni(a,o,r,s,c,d),o}};function Ec(e,t,r,i,n){var a,o;if(n===Sp(e,t,r,i)>0)for(a=t;a<r;a+=i)o=Es(a,e[a],e[a+1],o);else for(a=r-i;a>=t;a-=i)o=Es(a,e[a],e[a+1],o);return o&&gr(o,o.next)&&(Ui(o),o=o.next),o}function Fi(e,t){if(!e)return e;t||(t=e);var r=e,i;do if(i=!1,!r.steiner&&(gr(r,r.next)||pt(r.prev,r,r.next)===0)){if(Ui(r),r=t=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==t);return t}function Ni(e,t,r,i,n,a,o){if(!!e){!o&&a&&_p(e,i,n,a);for(var s=e,c,u;e.prev!==e.next;){if(c=e.prev,u=e.next,a?dp(e,i,n,a):fp(e)){t.push(c.i/r),t.push(e.i/r),t.push(u.i/r),Ui(e),e=u.next,s=u.next;continue}if(e=u,e===s){o?o===1?(e=pp(e,t,r),Ni(e,t,r,i,n,a,2)):o===2&&mp(e,t,r,i,n,a):Ni(Fi(e),t,r,i,n,a,1);break}}}}function fp(e){var t=e.prev,r=e,i=e.next;if(pt(t,r,i)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(kn(t.x,t.y,r.x,r.y,i.x,i.y,n.x,n.y)&&pt(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function dp(e,t,r,i){var n=e.prev,a=e,o=e.next;if(pt(n,a,o)>=0)return!1;for(var s=n.x<a.x?n.x<o.x?n.x:o.x:a.x<o.x?a.x:o.x,c=n.y<a.y?n.y<o.y?n.y:o.y:a.y<o.y?a.y:o.y,u=n.x>a.x?n.x>o.x?n.x:o.x:a.x>o.x?a.x:o.x,h=n.y>a.y?n.y>o.y?n.y:o.y:a.y>o.y?a.y:o.y,l=eo(s,c,t,r,i),f=eo(u,h,t,r,i),d=e.nextZ;d&&d.z<=f;){if(d!==e.prev&&d!==e.next&&kn(n.x,n.y,a.x,a.y,o.x,o.y,d.x,d.y)&&pt(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(d=e.prevZ;d&&d.z>=l;){if(d!==e.prev&&d!==e.next&&kn(n.x,n.y,a.x,a.y,o.x,o.y,d.x,d.y)&&pt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0}function pp(e,t,r){var i=e;do{var n=i.prev,a=i.next.next;!gr(n,a)&&Tc(n,i,i.next,a)&&Bi(n,a)&&Bi(a,n)&&(t.push(n.i/r),t.push(i.i/r),t.push(a.i/r),Ui(i),Ui(i.next),i=e=a),i=i.next}while(i!==e);return i}function mp(e,t,r,i,n,a){var o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&Mp(o,s)){var c=Sc(o,s);o=Fi(o,o.next),c=Fi(c,c.next),Ni(o,t,r,i,n,a),Ni(c,t,r,i,n,a);return}s=s.next}o=o.next}while(o!==e)}function vp(e,t,r,i){var n=[],a,o,s,c,u;for(a=0,o=t.length;a<o;a++)s=t[a]*i,c=a<o-1?t[a+1]*i:e.length,u=Ec(e,s,c,i,!1),u===u.next&&(u.steiner=!0),n.push(bp(u));for(n.sort(gp),a=0;a<n.length;a++)yp(n[a],r),r=Fi(r,r.next);return r}function gp(e,t){return e.x-t.x}function yp(e,t){if(t=xp(e,t),t){var r=Sc(t,e);Fi(r,r.next)}}function xp(e,t){var r=t,i=e.x,n=e.y,a=-1/0,o;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var s=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=i&&s>a){if(a=s,s===i){if(n===r.y)return r;if(n===r.next.y)return r.next}o=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!o)return null;if(i===a)return o.prev;var c=o,u=o.x,h=o.y,l=1/0,f;for(r=o.next;r!==c;)i>=r.x&&r.x>=u&&i!==r.x&&kn(n<h?i:a,n,u,h,n<h?a:i,n,r.x,r.y)&&(f=Math.abs(n-r.y)/(i-r.x),(f<l||f===l&&r.x>o.x)&&Bi(r,e)&&(o=r,l=f)),r=r.next;return o}function _p(e,t,r,i){var n=e;do n.z===null&&(n.z=eo(n.x,n.y,t,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,wp(n)}function wp(e){var t,r,i,n,a,o,s,c,u=1;do{for(r=e,e=null,a=null,o=0;r;){for(o++,i=r,s=0,t=0;t<u&&(s++,i=i.nextZ,!!i);t++);for(c=u;s>0||c>0&&i;)s!==0&&(c===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,s--):(n=i,i=i.nextZ,c--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=i}a.nextZ=null,u*=2}while(o>1);return e}function eo(e,t,r,i,n){return e=32767*(e-r)*n,t=32767*(t-i)*n,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function bp(e){var t=e,r=e;do t.x<r.x&&(r=t),t=t.next;while(t!==e);return r}function kn(e,t,r,i,n,a,o,s){return(n-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(i-s)-(r-o)*(t-s)>=0&&(r-o)*(a-s)-(n-o)*(i-s)>=0}function Mp(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ep(e,t)&&Bi(e,t)&&Bi(t,e)&&Tp(e,t)}function pt(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function gr(e,t){return e.x===t.x&&e.y===t.y}function Tc(e,t,r,i){return gr(e,t)&&gr(r,i)||gr(e,i)&&gr(r,t)?!0:pt(e,t,r)>0!=pt(e,t,i)>0&&pt(r,i,e)>0!=pt(r,i,t)>0}function Ep(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&Tc(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function Bi(e,t){return pt(e.prev,e,e.next)<0?pt(e,t,e.next)>=0&&pt(e,e.prev,t)>=0:pt(e,t,e.prev)<0||pt(e,e.next,t)<0}function Tp(e,t){var r=e,i=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function Sc(e,t){var r=new to(e.i,e.x,e.y),i=new to(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function Es(e,t,r,i){var n=new to(e,t,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Ui(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function to(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sp(e,t,r,i){for(var n=0,a=t,o=r-i;a<r;a+=i)n+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return n}var cr={area:function(e){for(var t=e.length,r=0,i=t-1,n=0;n<t;i=n++)r+=e[i].x*e[n].y-e[n].x*e[i].y;return r*.5},isClockWise:function(e){return cr.area(e)<0},triangulateShape:function(e,t){var r=[],i=[],n=[];Ts(e),Ss(r,e);var a=e.length;t.forEach(Ts);for(var o=0;o<t.length;o++)i.push(a),a+=t[o].length,Ss(r,t[o]);for(var s=lp.triangulate(r,i),o=0;o<s.length;o+=3)n.push(s.slice(o,o+3));return n}};function Ts(e){var t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ss(e,t){for(var r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}function Vr(e,t){de.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},this.fromBufferGeometry(new Kt(e,t)),this.mergeVertices()}Vr.prototype=Object.create(de.prototype);Vr.prototype.constructor=Vr;Vr.prototype.toJSON=function(){var e=de.prototype.toJSON.call(this),t=this.parameters.shapes,r=this.parameters.options;return Ac(t,r,e)};function Kt(e,t){K.call(this),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];for(var r=this,i=[],n=[],a=0,o=e.length;a<o;a++){var s=e[a];c(s)}this.addAttribute("position",new Z(i,3)),this.addAttribute("uv",new Z(n,2)),this.computeVertexNormals();function c(u){var h=[],l=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:100,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:6,v=t.bevelSize!==void 0?t.bevelSize:m-2,g=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Ap;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=t.amount);var y,S=!1,L,I,P,A;_&&(y=_.getSpacedPoints(f),S=!0,p=!1,L=_.computeFrenetFrames(f,!1),I=new b,P=new b,A=new b),p||(g=0,m=0,v=0);var D,F,N,G=u.extractPoints(l),H=G.shape,z=G.holes,J=!cr.isClockWise(H);if(J)for(H=H.reverse(),F=0,N=z.length;F<N;F++)D=z[F],cr.isClockWise(D)&&(z[F]=D.reverse());var Y=cr.triangulateShape(H,z),q=H;for(F=0,N=z.length;F<N;F++)D=z[F],H=H.concat(D);function E(Me,Ae,O){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),Ae.clone().multiplyScalar(O).add(Me)}var T,B,R,Q,U,W=H.length,j,pe=Y.length;function me(Me,Ae,O){var te,ne,we,oe=Me.x-Ae.x,Ee=Me.y-Ae.y,Ie=O.x-Me.x,Pe=O.y-Me.y,xt=oe*oe+Ee*Ee,Oe=oe*Pe-Ee*Ie;if(Math.abs(Oe)>Number.EPSILON){var Mt=Math.sqrt(xt),Je=Math.sqrt(Ie*Ie+Pe*Pe),nn=Ae.x-Ee/Mt,an=Ae.y+oe/Mt,ma=O.x-Pe/Je,va=O.y+Ie/Je,on=((ma-nn)*Pe-(va-an)*Ie)/(oe*Pe-Ee*Ie);te=nn+oe*on-Me.x,ne=an+Ee*on-Me.y;var sn=te*te+ne*ne;if(sn<=2)return new V(te,ne);we=Math.sqrt(sn/2)}else{var mr=!1;oe>Number.EPSILON?Ie>Number.EPSILON&&(mr=!0):oe<-Number.EPSILON?Ie<-Number.EPSILON&&(mr=!0):Math.sign(Ee)===Math.sign(Pe)&&(mr=!0),mr?(te=-Ee,ne=oe,we=Math.sqrt(xt)):(te=oe,ne=Ee,we=Math.sqrt(xt/2))}return new V(te/we,ne/we)}for(var le=[],k=0,ce=q.length,Re=ce-1,_e=k+1;k<ce;k++,Re++,_e++)Re===ce&&(Re=0),_e===ce&&(_e=0),le[k]=me(q[k],q[Re],q[_e]);var ct=[],Ve,Ke=le.concat();for(F=0,N=z.length;F<N;F++){for(D=z[F],Ve=[],k=0,ce=D.length,Re=ce-1,_e=k+1;k<ce;k++,Re++,_e++)Re===ce&&(Re=0),_e===ce&&(_e=0),Ve[k]=me(D[k],D[Re],D[_e]);ct.push(Ve),Ke=Ke.concat(Ve)}for(T=0;T<g;T++){for(R=T/g,Q=m*Math.cos(R*Math.PI/2),B=v*Math.sin(R*Math.PI/2),k=0,ce=q.length;k<ce;k++)U=E(q[k],le[k],B),et(U.x,U.y,-Q);for(F=0,N=z.length;F<N;F++)for(D=z[F],Ve=ct[F],k=0,ce=D.length;k<ce;k++)U=E(D[k],Ve[k],B),et(U.x,U.y,-Q)}for(B=v,k=0;k<W;k++)U=p?E(H[k],Ke[k],B):H[k],S?(P.copy(L.normals[0]).multiplyScalar(U.x),I.copy(L.binormals[0]).multiplyScalar(U.y),A.copy(y[0]).add(P).add(I),et(A.x,A.y,A.z)):et(U.x,U.y,0);var nt;for(nt=1;nt<=f;nt++)for(k=0;k<W;k++)U=p?E(H[k],Ke[k],B):H[k],S?(P.copy(L.normals[nt]).multiplyScalar(U.x),I.copy(L.binormals[nt]).multiplyScalar(U.y),A.copy(y[nt]).add(P).add(I),et(A.x,A.y,A.z)):et(U.x,U.y,d/f*nt);for(T=g-1;T>=0;T--){for(R=T/g,Q=m*Math.cos(R*Math.PI/2),B=v*Math.sin(R*Math.PI/2),k=0,ce=q.length;k<ce;k++)U=E(q[k],le[k],B),et(U.x,U.y,d+Q);for(F=0,N=z.length;F<N;F++)for(D=z[F],Ve=ct[F],k=0,ce=D.length;k<ce;k++)U=E(D[k],Ve[k],B),S?et(U.x,U.y+y[f-1].y,y[f-1].x+Q):et(U.x,U.y,d+Q)}Yt(),Dt();function Yt(){var Me=i.length/3;if(p){var Ae=0,O=W*Ae;for(k=0;k<pe;k++)j=Y[k],at(j[2]+O,j[1]+O,j[0]+O);for(Ae=f+g*2,O=W*Ae,k=0;k<pe;k++)j=Y[k],at(j[0]+O,j[1]+O,j[2]+O)}else{for(k=0;k<pe;k++)j=Y[k],at(j[2],j[1],j[0]);for(k=0;k<pe;k++)j=Y[k],at(j[0]+W*f,j[1]+W*f,j[2]+W*f)}r.addGroup(Me,i.length/3-Me,0)}function Dt(){var Me=i.length/3,Ae=0;for(je(q,Ae),Ae+=q.length,F=0,N=z.length;F<N;F++)D=z[F],je(D,Ae),Ae+=D.length;r.addGroup(Me,i.length/3-Me,1)}function je(Me,Ae){var O,te;for(k=Me.length;--k>=0;){O=k,te=k-1,te<0&&(te=Me.length-1);var ne=0,we=f+g*2;for(ne=0;ne<we;ne++){var oe=W*ne,Ee=W*(ne+1),Ie=Ae+O+oe,Pe=Ae+te+oe,xt=Ae+te+Ee,Oe=Ae+O+Ee;Sr(Ie,Pe,xt,Oe)}}}function et(Me,Ae,O){h.push(Me),h.push(Ae),h.push(O)}function at(Me,Ae,O){gt(Me),gt(Ae),gt(O);var te=i.length/3,ne=w.generateTopUV(r,i,te-3,te-2,te-1);yt(ne[0]),yt(ne[1]),yt(ne[2])}function Sr(Me,Ae,O,te){gt(Me),gt(Ae),gt(te),gt(Ae),gt(O),gt(te);var ne=i.length/3,we=w.generateSideWallUV(r,i,ne-6,ne-3,ne-2,ne-1);yt(we[0]),yt(we[1]),yt(we[3]),yt(we[1]),yt(we[2]),yt(we[3])}function gt(Me){i.push(h[Me*3+0]),i.push(h[Me*3+1]),i.push(h[Me*3+2])}function yt(Me){n.push(Me.x),n.push(Me.y)}}}Kt.prototype=Object.create(K.prototype);Kt.prototype.constructor=Kt;Kt.prototype.toJSON=function(){var e=K.prototype.toJSON.call(this),t=this.parameters.shapes,r=this.parameters.options;return Ac(t,r,e)};var Ap={generateTopUV:function(e,t,r,i,n){var a=t[r*3],o=t[r*3+1],s=t[i*3],c=t[i*3+1],u=t[n*3],h=t[n*3+1];return[new V(a,o),new V(s,c),new V(u,h)]},generateSideWallUV:function(e,t,r,i,n,a){var o=t[r*3],s=t[r*3+1],c=t[r*3+2],u=t[i*3],h=t[i*3+1],l=t[i*3+2],f=t[n*3],d=t[n*3+1],p=t[n*3+2],m=t[a*3],v=t[a*3+1],g=t[a*3+2];return Math.abs(s-h)<.01?[new V(o,1-c),new V(u,1-l),new V(f,1-p),new V(m,1-g)]:[new V(s,1-c),new V(h,1-l),new V(d,1-p),new V(v,1-g)]}};function Ac(e,t,r){if(r.shapes=[],Array.isArray(e))for(var i=0,n=e.length;i<n;i++){var a=e[i];r.shapes.push(a.uuid)}else r.shapes.push(e.uuid);return t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}function Wn(e,t){de.call(this),this.type="TextGeometry",this.parameters={text:e,parameters:t},this.fromBufferGeometry(new Gi(e,t)),this.mergeVertices()}Wn.prototype=Object.create(de.prototype);Wn.prototype.constructor=Wn;function Gi(e,t){t=t||{};var r=t.font;if(!(r&&r.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new de;var i=r.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),Kt.call(this,i,t),this.type="TextBufferGeometry"}Gi.prototype=Object.create(Kt.prototype);Gi.prototype.constructor=Gi;function Xn(e,t,r,i,n,a,o){de.call(this),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:i,phiLength:n,thetaStart:a,thetaLength:o},this.fromBufferGeometry(new kr(e,t,r,i,n,a,o)),this.mergeVertices()}Xn.prototype=Object.create(de.prototype);Xn.prototype.constructor=Xn;function kr(e,t,r,i,n,a,o){K.call(this),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:i,phiLength:n,thetaStart:a,thetaLength:o},e=e||1,t=Math.max(3,Math.floor(t)||8),r=Math.max(2,Math.floor(r)||6),i=i!==void 0?i:0,n=n!==void 0?n:Math.PI*2,a=a!==void 0?a:0,o=o!==void 0?o:Math.PI;var s=a+o,c,u,h=0,l=[],f=new b,d=new b,p=[],m=[],v=[],g=[];for(u=0;u<=r;u++){var _=[],w=u/r;for(c=0;c<=t;c++){var y=c/t;f.x=-e*Math.cos(i+y*n)*Math.sin(a+w*o),f.y=e*Math.cos(a+w*o),f.z=e*Math.sin(i+y*n)*Math.sin(a+w*o),m.push(f.x,f.y,f.z),d.set(f.x,f.y,f.z).normalize(),v.push(d.x,d.y,d.z),g.push(y,1-w),_.push(h++)}l.push(_)}for(u=0;u<r;u++)for(c=0;c<t;c++){var S=l[u][c+1],L=l[u][c],I=l[u+1][c],P=l[u+1][c+1];(u!==0||a>0)&&p.push(S,L,P),(u!==r-1||s<Math.PI)&&p.push(L,I,P)}this.setIndex(p),this.addAttribute("position",new Z(m,3)),this.addAttribute("normal",new Z(v,3)),this.addAttribute("uv",new Z(g,2))}kr.prototype=Object.create(K.prototype);kr.prototype.constructor=kr;function jn(e,t,r,i,n,a){de.call(this),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:i,thetaStart:n,thetaLength:a},this.fromBufferGeometry(new zi(e,t,r,i,n,a)),this.mergeVertices()}jn.prototype=Object.create(de.prototype);jn.prototype.constructor=jn;function zi(e,t,r,i,n,a){K.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:i,thetaStart:n,thetaLength:a},e=e||.5,t=t||1,n=n!==void 0?n:0,a=a!==void 0?a:Math.PI*2,r=r!==void 0?Math.max(3,r):8,i=i!==void 0?Math.max(1,i):1;var o=[],s=[],c=[],u=[],h,l=e,f=(t-e)/i,d=new b,p=new V,m,v;for(m=0;m<=i;m++){for(v=0;v<=r;v++)h=n+v/r*a,d.x=l*Math.cos(h),d.y=l*Math.sin(h),s.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y);l+=f}for(m=0;m<i;m++){var g=m*(r+1);for(v=0;v<r;v++){h=v+g;var _=h,w=h+r+1,y=h+r+2,S=h+1;o.push(_,w,S),o.push(w,y,S)}}this.setIndex(o),this.addAttribute("position",new Z(s,3)),this.addAttribute("normal",new Z(c,3)),this.addAttribute("uv",new Z(u,2))}zi.prototype=Object.create(K.prototype);zi.prototype.constructor=zi;function qn(e,t,r,i){de.call(this),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:r,phiLength:i},this.fromBufferGeometry(new Hi(e,t,r,i)),this.mergeVertices()}qn.prototype=Object.create(de.prototype);qn.prototype.constructor=qn;function Hi(e,t,r,i){K.call(this),this.type="LatheBufferGeometry",this.parameters={points:e,segments:t,phiStart:r,phiLength:i},t=Math.floor(t)||12,r=r||0,i=i||Math.PI*2,i=ge.clamp(i,0,Math.PI*2);var n=[],a=[],o=[],s,c=1/t,u=new b,h=new V,l,f;for(l=0;l<=t;l++){var d=r+l*c*i,p=Math.sin(d),m=Math.cos(d);for(f=0;f<=e.length-1;f++)u.x=e[f].x*p,u.y=e[f].y,u.z=e[f].x*m,a.push(u.x,u.y,u.z),h.x=l/t,h.y=f/(e.length-1),o.push(h.x,h.y)}for(l=0;l<t;l++)for(f=0;f<e.length-1;f++){s=f+l*e.length;var v=s,g=s+e.length,_=s+e.length+1,w=s+1;n.push(v,g,w),n.push(g,_,w)}if(this.setIndex(n),this.addAttribute("position",new Z(a,3)),this.addAttribute("uv",new Z(o,2)),this.computeVertexNormals(),i===Math.PI*2){var y=this.attributes.normal.array,S=new b,L=new b,I=new b;for(s=t*e.length*3,l=0,f=0;l<e.length;l++,f+=3)S.x=y[f+0],S.y=y[f+1],S.z=y[f+2],L.x=y[s+f+0],L.y=y[s+f+1],L.z=y[s+f+2],I.addVectors(S,L).normalize(),y[f+0]=y[s+f+0]=I.x,y[f+1]=y[s+f+1]=I.y,y[f+2]=y[s+f+2]=I.z}}Hi.prototype=Object.create(K.prototype);Hi.prototype.constructor=Hi;function Wr(e,t){de.call(this),this.type="ShapeGeometry",typeof t=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),t=t.curveSegments),this.parameters={shapes:e,curveSegments:t},this.fromBufferGeometry(new Xr(e,t)),this.mergeVertices()}Wr.prototype=Object.create(de.prototype);Wr.prototype.constructor=Wr;Wr.prototype.toJSON=function(){var e=de.prototype.toJSON.call(this),t=this.parameters.shapes;return Lc(t,e)};function Xr(e,t){K.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:t},t=t||12;var r=[],i=[],n=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)u(e);else for(var c=0;c<e.length;c++)u(e[c]),this.addGroup(o,s,c),o+=s,s=0;this.setIndex(r),this.addAttribute("position",new Z(i,3)),this.addAttribute("normal",new Z(n,3)),this.addAttribute("uv",new Z(a,2));function u(h){var l,f,d,p=i.length/3,m=h.extractPoints(t),v=m.shape,g=m.holes;for(cr.isClockWise(v)===!1&&(v=v.reverse()),l=0,f=g.length;l<f;l++)d=g[l],cr.isClockWise(d)===!0&&(g[l]=d.reverse());var _=cr.triangulateShape(v,g);for(l=0,f=g.length;l<f;l++)d=g[l],v=v.concat(d);for(l=0,f=v.length;l<f;l++){var w=v[l];i.push(w.x,w.y,0),n.push(0,0,1),a.push(w.x,w.y)}for(l=0,f=_.length;l<f;l++){var y=_[l],S=y[0]+p,L=y[1]+p,I=y[2]+p;r.push(S,L,I),s+=3}}}Xr.prototype=Object.create(K.prototype);Xr.prototype.constructor=Xr;Xr.prototype.toJSON=function(){var e=K.prototype.toJSON.call(this),t=this.parameters.shapes;return Lc(t,e)};function Lc(e,t){if(t.shapes=[],Array.isArray(e))for(var r=0,i=e.length;r<i;r++){var n=e[r];t.shapes.push(n.uuid)}else t.shapes.push(e.uuid);return t}function Yn(e,t){K.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1;var r=[],i=Math.cos(ge.DEG2RAD*t),n=[0,0],a={},o,s,c,u=["a","b","c"],h;e.isBufferGeometry?(h=new de,h.fromBufferGeometry(e)):h=e.clone(),h.mergeVertices(),h.computeFaceNormals();for(var l=h.vertices,f=h.faces,d=0,p=f.length;d<p;d++)for(var m=f[d],v=0;v<3;v++)o=m[u[v]],s=m[u[(v+1)%3]],n[0]=Math.min(o,s),n[1]=Math.max(o,s),c=n[0]+","+n[1],a[c]===void 0?a[c]={index1:n[0],index2:n[1],face1:d,face2:void 0}:a[c].face2=d;for(c in a){var g=a[c];if(g.face2===void 0||f[g.face1].normal.dot(f[g.face2].normal)<=i){var _=l[g.index1];r.push(_.x,_.y,_.z),_=l[g.index2],r.push(_.x,_.y,_.z)}}this.addAttribute("position",new Z(r,3))}Yn.prototype=Object.create(K.prototype);Yn.prototype.constructor=Yn;function jr(e,t,r,i,n,a,o,s){de.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:o,thetaLength:s},this.fromBufferGeometry(new fr(e,t,r,i,n,a,o,s)),this.mergeVertices()}jr.prototype=Object.create(de.prototype);jr.prototype.constructor=jr;function fr(e,t,r,i,n,a,o,s){K.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:o,thetaLength:s};var c=this;e=e!==void 0?e:1,t=t!==void 0?t:1,r=r||1,i=Math.floor(i)||8,n=Math.floor(n)||1,a=a!==void 0?a:!1,o=o!==void 0?o:0,s=s!==void 0?s:Math.PI*2;var u=[],h=[],l=[],f=[],d=0,p=[],m=r/2,v=0;g(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.addAttribute("position",new Z(h,3)),this.addAttribute("normal",new Z(l,3)),this.addAttribute("uv",new Z(f,2));function g(){var w,y,S=new b,L=new b,I=0,P=(t-e)/r;for(y=0;y<=n;y++){var A=[],D=y/n,F=D*(t-e)+e;for(w=0;w<=i;w++){var N=w/i,G=N*s+o,H=Math.sin(G),z=Math.cos(G);L.x=F*H,L.y=-D*r+m,L.z=F*z,h.push(L.x,L.y,L.z),S.set(H,P,z).normalize(),l.push(S.x,S.y,S.z),f.push(N,1-D),A.push(d++)}p.push(A)}for(w=0;w<i;w++)for(y=0;y<n;y++){var J=p[y][w],Y=p[y+1][w],q=p[y+1][w+1],E=p[y][w+1];u.push(J,Y,E),u.push(Y,q,E),I+=6}c.addGroup(v,I,0),v+=I}function _(w){var y,S,L,I=new V,P=new b,A=0,D=w===!0?e:t,F=w===!0?1:-1;for(S=d,y=1;y<=i;y++)h.push(0,m*F,0),l.push(0,F,0),f.push(.5,.5),d++;for(L=d,y=0;y<=i;y++){var N=y/i,G=N*s+o,H=Math.cos(G),z=Math.sin(G);P.x=D*z,P.y=m*F,P.z=D*H,h.push(P.x,P.y,P.z),l.push(0,F,0),I.x=H*.5+.5,I.y=z*.5*F+.5,f.push(I.x,I.y),d++}for(y=0;y<i;y++){var J=S+y,Y=L+y;w===!0?u.push(Y,Y+1,J):u.push(Y+1,Y,J),A+=3}c.addGroup(v,A,w===!0?1:2),v+=A}}fr.prototype=Object.create(K.prototype);fr.prototype.constructor=fr;function Zn(e,t,r,i,n,a,o){jr.call(this,0,e,t,r,i,n,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:i,openEnded:n,thetaStart:a,thetaLength:o}}Zn.prototype=Object.create(jr.prototype);Zn.prototype.constructor=Zn;function Jn(e,t,r,i,n,a,o){fr.call(this,0,e,t,r,i,n,a,o),this.type="ConeBufferGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:i,openEnded:n,thetaStart:a,thetaLength:o}}Jn.prototype=Object.create(fr.prototype);Jn.prototype.constructor=Jn;function Qn(e,t,r,i){de.call(this),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:i},this.fromBufferGeometry(new Vi(e,t,r,i)),this.mergeVertices()}Qn.prototype=Object.create(de.prototype);Qn.prototype.constructor=Qn;function Vi(e,t,r,i){K.call(this),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:i},e=e||1,t=t!==void 0?Math.max(3,t):8,r=r!==void 0?r:0,i=i!==void 0?i:Math.PI*2;var n=[],a=[],o=[],s=[],c,u,h=new b,l=new V;for(a.push(0,0,0),o.push(0,0,1),s.push(.5,.5),u=0,c=3;u<=t;u++,c+=3){var f=r+u/t*i;h.x=e*Math.cos(f),h.y=e*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(a[c]/e+1)/2,l.y=(a[c+1]/e+1)/2,s.push(l.x,l.y)}for(c=1;c<=t;c++)n.push(c,c+1,0);this.setIndex(n),this.addAttribute("position",new Z(a,3)),this.addAttribute("normal",new Z(o,3)),this.addAttribute("uv",new Z(s,2))}Vi.prototype=Object.create(K.prototype);Vi.prototype.constructor=Vi;var _t=Object.freeze(Object.defineProperty({__proto__:null,WireframeGeometry:On,ParametricGeometry:Dn,ParametricBufferGeometry:Li,TetrahedronGeometry:Nn,TetrahedronBufferGeometry:Ri,OctahedronGeometry:Bn,OctahedronBufferGeometry:Hr,IcosahedronGeometry:Un,IcosahedronBufferGeometry:Ci,DodecahedronGeometry:Gn,DodecahedronBufferGeometry:Pi,PolyhedronGeometry:Fn,PolyhedronBufferGeometry:St,TubeGeometry:zn,TubeBufferGeometry:Ii,TorusKnotGeometry:Hn,TorusKnotBufferGeometry:Oi,TorusGeometry:Vn,TorusBufferGeometry:Di,TextGeometry:Wn,TextBufferGeometry:Gi,SphereGeometry:Xn,SphereBufferGeometry:kr,RingGeometry:jn,RingBufferGeometry:zi,PlaneGeometry:Sn,PlaneBufferGeometry:hr,LatheGeometry:qn,LatheBufferGeometry:Hi,ShapeGeometry:Wr,ShapeBufferGeometry:Xr,ExtrudeGeometry:Vr,ExtrudeBufferGeometry:Kt,EdgesGeometry:Yn,ConeGeometry:Zn,ConeBufferGeometry:Jn,CylinderGeometry:jr,CylinderBufferGeometry:fr,CircleGeometry:Qn,CircleBufferGeometry:Vi,BoxGeometry:Tn,BoxBufferGeometry:Ur},Symbol.toStringTag,{value:"Module"}));function qr(e){ve.call(this),this.type="ShadowMaterial",this.color=new se(0),this.transparent=!0,this.setValues(e)}qr.prototype=Object.create(ve.prototype);qr.prototype.constructor=qr;qr.prototype.isShadowMaterial=!0;qr.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this};function ki(e){Tt.call(this,e),this.type="RawShaderMaterial"}ki.prototype=Object.create(Tt.prototype);ki.prototype.constructor=ki;ki.prototype.isRawShaderMaterial=!0;function er(e){ve.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=.5,this.metalness=.5,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}er.prototype=Object.create(ve.prototype);er.prototype.constructor=er;er.prototype.isMeshStandardMaterial=!0;er.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Yr(e){er.call(this),this.defines={PHYSICAL:""},this.type="MeshPhysicalMaterial",this.reflectivity=.5,this.clearCoat=0,this.clearCoatRoughness=0,this.setValues(e)}Yr.prototype=Object.create(er.prototype);Yr.prototype.constructor=Yr;Yr.prototype.isMeshPhysicalMaterial=!0;Yr.prototype.copy=function(e){return er.prototype.copy.call(this,e),this.defines={PHYSICAL:""},this.reflectivity=e.reflectivity,this.clearCoat=e.clearCoat,this.clearCoatRoughness=e.clearCoatRoughness,this};function kt(e){ve.call(this),this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}kt.prototype=Object.create(ve.prototype);kt.prototype.constructor=kt;kt.prototype.isMeshPhongMaterial=!0;kt.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Zr(e){kt.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.gradientMap=null,this.setValues(e)}Zr.prototype=Object.create(kt.prototype);Zr.prototype.constructor=Zr;Zr.prototype.isMeshToonMaterial=!0;Zr.prototype.copy=function(e){return kt.prototype.copy.call(this,e),this.gradientMap=e.gradientMap,this};function Jr(e){ve.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Jr.prototype=Object.create(ve.prototype);Jr.prototype.constructor=Jr;Jr.prototype.isMeshNormalMaterial=!0;Jr.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Qr(e){ve.call(this),this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Qr.prototype=Object.create(ve.prototype);Qr.prototype.constructor=Qr;Qr.prototype.isMeshLambertMaterial=!0;Qr.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function $r(e){ve.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.lights=!1,this.setValues(e)}$r.prototype=Object.create(ve.prototype);$r.prototype.constructor=$r;$r.prototype.isMeshMatcapMaterial=!0;$r.prototype.copy=function(e){return ve.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Kr(e){Ge.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}Kr.prototype=Object.create(Ge.prototype);Kr.prototype.constructor=Kr;Kr.prototype.isLineDashedMaterial=!0;Kr.prototype.copy=function(e){return Ge.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var Lp=Object.freeze(Object.defineProperty({__proto__:null,ShadowMaterial:qr,SpriteMaterial:Mr,RawShaderMaterial:ki,ShaderMaterial:Tt,PointsMaterial:Er,MeshPhysicalMaterial:Yr,MeshStandardMaterial:er,MeshPhongMaterial:kt,MeshToonMaterial:Zr,MeshNormalMaterial:Jr,MeshLambertMaterial:Qr,MeshDepthMaterial:wr,MeshDistanceMaterial:br,MeshBasicMaterial:It,MeshMatcapMaterial:$r,LineDashedMaterial:Kr,LineBasicMaterial:Ge,Material:ve},Symbol.toStringTag,{value:"Module"})),mt={arraySlice:function(e,t,r){return mt.isTypedArray(e)?new e.constructor(e.subarray(t,r!==void 0?r:e.length)):e.slice(t,r)},convertArray:function(e,t,r){return!e||!r&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(a,o){return e[a]-e[o]}for(var r=e.length,i=new Array(r),n=0;n!==r;++n)i[n]=n;return i.sort(t),i},sortedArray:function(e,t,r){for(var i=e.length,n=new e.constructor(i),a=0,o=0;o!==i;++a)for(var s=r[a]*t,c=0;c!==t;++c)n[o++]=e[s+c];return n},flattenJSON:function(e,t,r,i){for(var n=1,a=e[0];a!==void 0&&a[i]===void 0;)a=e[n++];if(a!==void 0){var o=a[i];if(o!==void 0)if(Array.isArray(o))do o=a[i],o!==void 0&&(t.push(a.time),r.push.apply(r,o)),a=e[n++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[i],o!==void 0&&(t.push(a.time),o.toArray(r,r.length)),a=e[n++];while(a!==void 0);else do o=a[i],o!==void 0&&(t.push(a.time),r.push(o)),a=e[n++];while(a!==void 0)}}};function Pt(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r}Object.assign(Pt.prototype,{evaluate:function(e){var t=this.parameterPositions,r=this._cachedIndex,i=t[r],n=t[r-1];e:{t:{var a;r:{i:if(!(e<i)){for(var o=r+2;;){if(i===void 0){if(e<n)break i;return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,e,n)}if(r===o)break;if(n=i,i=t[++r],e<i)break t}a=t.length;break r}if(!(e>=n)){var s=t[1];e<s&&(r=2,n=s);for(var o=r-2;;){if(n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(r===o)break;if(i=n,n=t[--r-1],e>=n)break t}a=r,r=0;break r}break e}for(;r<a;){var c=r+a>>>1;e<t[c]?a=c:r=c+1}if(i=t[r],n=t[r-1],n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,n,e)}this._cachedIndex=r,this.intervalChanged_(r,n,i)}return this.interpolate_(r,n,e,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){for(var t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,n=e*i,a=0;a!==i;++a)t[a]=r[n+a];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});//!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(Pt.prototype,{beforeStart_:Pt.prototype.copySampleValue_,afterEnd_:Pt.prototype.copySampleValue_});function ro(e,t,r,i){Pt.call(this,e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}ro.prototype=Object.assign(Object.create(Pt.prototype),{constructor:ro,DefaultSettings_:{endingStart:Nr,endingEnd:Nr},intervalChanged_:function(e,t,r){var i=this.parameterPositions,n=e-2,a=e+1,o=i[n],s=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ir:n=e,o=2*t-r;break;case bn:n=i.length-2,o=t+i[n]-i[n+1];break;default:n=e,o=r}if(s===void 0)switch(this.getSettings_().endingEnd){case Ir:a=e,s=2*r-t;break;case bn:a=1,s=r+i[1]-i[0];break;default:a=e-1,s=t}var c=(r-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-r),this._offsetPrev=n*u,this._offsetNext=a*u},interpolate_:function(e,t,r,i){for(var n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,u=this._offsetPrev,h=this._offsetNext,l=this._weightPrev,f=this._weightNext,d=(r-t)/(i-t),p=d*d,m=p*d,v=-l*m+2*l*p-l*d,g=(1+l)*m+(-1.5-2*l)*p+(-.5+l)*d+1,_=(-1-f)*m+(1.5+f)*p+.5*d,w=f*m-f*p,y=0;y!==o;++y)n[y]=v*a[u+y]+g*a[c+y]+_*a[s+y]+w*a[h+y];return n}});function $n(e,t,r,i){Pt.call(this,e,t,r,i)}$n.prototype=Object.assign(Object.create(Pt.prototype),{constructor:$n,interpolate_:function(e,t,r,i){for(var n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,u=(r-t)/(i-t),h=1-u,l=0;l!==o;++l)n[l]=a[c+l]*h+a[s+l]*u;return n}});function io(e,t,r,i){Pt.call(this,e,t,r,i)}io.prototype=Object.assign(Object.create(Pt.prototype),{constructor:io,interpolate_:function(e){return this.copySampleValue_(e-1)}});function lt(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mt.convertArray(t,this.TimeBufferType),this.values=mt.convertArray(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(lt,{toJSON:function(e){var t=e.constructor,r;if(t.toJSON!==void 0)r=t.toJSON(e);else{r={name:e.name,times:mt.convertArray(e.times,Array),values:mt.convertArray(e.values,Array)};var i=e.getInterpolation();i!==e.DefaultInterpolation&&(r.interpolation=i)}return r.type=e.ValueTypeName,r}});Object.assign(lt.prototype,{constructor:lt,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:yn,InterpolantFactoryMethodDiscrete:function(e){return new io(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new $n(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new ro(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){var t;switch(e){case wn:t=this.InterpolantFactoryMethodDiscrete;break;case yn:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){var r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wn;case this.InterpolantFactoryMethodLinear:return yn;case this.InterpolantFactoryMethodSmooth:return Ea}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0)for(var t=this.times,r=0,i=t.length;r!==i;++r)t[r]+=e;return this},scale:function(e){if(e!==1)for(var t=this.times,r=0,i=t.length;r!==i;++r)t[r]*=e;return this},trim:function(e,t){for(var r=this.times,i=r.length,n=0,a=i-1;n!==i&&r[n]<e;)++n;for(;a!==-1&&r[a]>t;)--a;if(++a,n!==0||a!==i){n>=a&&(a=Math.max(a,1),n=a-1);var o=this.getValueSize();this.times=mt.arraySlice(r,n,a),this.values=mt.arraySlice(this.values,n*o,a*o)}return this},validate:function(){var e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);var r=this.times,i=this.values,n=r.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);for(var a=null,o=0;o!==n;o++){var s=r[o];if(typeof s=="number"&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,s),e=!1;break}if(a!==null&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,s,a),e=!1;break}a=s}if(i!==void 0&&mt.isTypedArray(i))for(var o=0,c=i.length;o!==c;++o){var u=i[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e},optimize:function(){for(var e=this.times,t=this.values,r=this.getValueSize(),i=this.getInterpolation()===Ea,n=1,a=e.length-1,o=1;o<a;++o){var s=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==c[0]))if(i)s=!0;else for(var h=o*r,l=h-r,f=h+r,d=0;d!==r;++d){var p=t[h+d];if(p!==t[l+d]||p!==t[f+d]){s=!0;break}}if(s){if(o!==n){e[n]=e[o];for(var m=o*r,v=n*r,d=0;d!==r;++d)t[v+d]=t[m+d]}++n}}if(a>0){e[n]=e[a];for(var m=a*r,v=n*r,d=0;d!==r;++d)t[v+d]=t[m+d];++n}return n!==e.length&&(this.times=mt.arraySlice(e,0,n),this.values=mt.arraySlice(t,0,n*r)),this}});function no(e,t,r){lt.call(this,e,t,r)}no.prototype=Object.assign(Object.create(lt.prototype),{constructor:no,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:wn,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function ao(e,t,r,i){lt.call(this,e,t,r,i)}ao.prototype=Object.assign(Object.create(lt.prototype),{constructor:ao,ValueTypeName:"color"});function Wi(e,t,r,i){lt.call(this,e,t,r,i)}Wi.prototype=Object.assign(Object.create(lt.prototype),{constructor:Wi,ValueTypeName:"number"});function oo(e,t,r,i){Pt.call(this,e,t,r,i)}oo.prototype=Object.assign(Object.create(Pt.prototype),{constructor:oo,interpolate_:function(e,t,r,i){for(var n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=(r-t)/(i-t),u=s+o;s!==u;s+=4)rt.slerpFlat(n,0,a,s-o,a,s,c);return n}});function Kn(e,t,r,i){lt.call(this,e,t,r,i)}Kn.prototype=Object.assign(Object.create(lt.prototype),{constructor:Kn,ValueTypeName:"quaternion",DefaultInterpolation:yn,InterpolantFactoryMethodLinear:function(e){return new oo(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function so(e,t,r,i){lt.call(this,e,t,r,i)}so.prototype=Object.assign(Object.create(lt.prototype),{constructor:so,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:wn,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Xi(e,t,r,i){lt.call(this,e,t,r,i)}Xi.prototype=Object.assign(Object.create(lt.prototype),{constructor:Xi,ValueTypeName:"vector"});function Ut(e,t,r){this.name=e,this.tracks=r,this.duration=t!==void 0?t:-1,this.uuid=ge.generateUUID(),this.duration<0&&this.resetDuration()}function Rp(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wi;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return ao;case"quaternion":return Kn;case"bool":case"boolean":return no;case"string":return so}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Cp(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");var t=Rp(e.type);if(e.times===void 0){var r=[],i=[];mt.flattenJSON(e.keys,r,i,"value"),e.times=r,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Object.assign(Ut,{parse:function(e){for(var t=[],r=e.tracks,i=1/(e.fps||1),n=0,a=r.length;n!==a;++n)t.push(Cp(r[n]).scale(i));return new Ut(e.name,e.duration,t)},toJSON:function(e){for(var t=[],r=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid},n=0,a=r.length;n!==a;++n)t.push(lt.toJSON(r[n]));return i},CreateFromMorphTargetSequence:function(e,t,r,i){for(var n=t.length,a=[],o=0;o<n;o++){var s=[],c=[];s.push((o+n-1)%n,o,(o+1)%n),c.push(0,1,0);var u=mt.getKeyframeOrder(s);s=mt.sortedArray(s,1,u),c=mt.sortedArray(c,1,u),!i&&s[0]===0&&(s.push(n),c.push(c[0])),a.push(new Wi(".morphTargetInfluences["+t[o].name+"]",s,c).scale(1/r))}return new Ut(e,-1,a)},findByName:function(e,t){var r=e;if(!Array.isArray(e)){var i=e;r=i.geometry&&i.geometry.animations||i.animations}for(var n=0;n<r.length;n++)if(r[n].name===t)return r[n];return null},CreateClipsFromMorphTargetSequences:function(e,t,r){for(var i={},n=/^([\w-]*?)([\d]+)$/,a=0,o=e.length;a<o;a++){var s=e[a],c=s.name.match(n);if(c&&c.length>1){var u=c[1],h=i[u];h||(i[u]=h=[]),h.push(s)}}var l=[];for(var u in i)l.push(Ut.CreateFromMorphTargetSequence(u,i[u],t,r));return l},parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;for(var r=function(w,y,S,L,I){if(S.length!==0){var P=[],A=[];mt.flattenJSON(S,P,A,L),P.length!==0&&I.push(new w(y,P,A))}},i=[],n=e.name||"default",a=e.length||-1,o=e.fps||30,s=e.hierarchy||[],c=0;c<s.length;c++){var u=s[c].keys;if(!(!u||u.length===0))if(u[0].morphTargets){for(var h={},l=0;l<u.length;l++)if(u[l].morphTargets)for(var f=0;f<u[l].morphTargets.length;f++)h[u[l].morphTargets[f]]=-1;for(var d in h){for(var p=[],m=[],f=0;f!==u[l].morphTargets.length;++f){var v=u[l];p.push(v.time),m.push(v.morphTarget===d?1:0)}i.push(new Wi(".morphTargetInfluence["+d+"]",p,m))}a=h.length*(o||1)}else{var g=".bones["+t[c].name+"]";r(Xi,g+".position",u,"pos",i),r(Kn,g+".quaternion",u,"rot",i),r(Xi,g+".scale",u,"scl",i)}}if(i.length===0)return null;var _=new Ut(n,a,i);return _}});Object.assign(Ut.prototype,{resetDuration:function(){for(var e=this.tracks,t=0,r=0,i=e.length;r!==i;++r){var n=this.tracks[r];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this},trim:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){for(var e=!0,t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e},optimize:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}});var ei={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Rc(e,t,r){var i=this,n=!1,a=0,o=0,s=void 0;this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(c){o++,n===!1&&i.onStart!==void 0&&i.onStart(c,a,o),n=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,o),a===o&&(n=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return s?s(c):c},this.setURLModifier=function(c){return s=c,this}}var Rt=new Rc,Ft={};function ir(e){this.manager=e!==void 0?e:Rt}Object.assign(ir.prototype,{load:function(e,t,r,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);var n=this,a=ei.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;if(Ft[e]!==void 0){Ft[e].push({onLoad:t,onProgress:r,onError:i});return}var o=/^data:(.*?)(;base64)?,(.*)$/,s=e.match(o);if(s){var c=s[1],u=!!s[2],h=s[3];h=decodeURIComponent(h),u&&(h=atob(h));try{var l,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":for(var d=new Uint8Array(h.length),p=0;p<h.length;p++)d[p]=h.charCodeAt(p);f==="blob"?l=new Blob([d.buffer],{type:c}):l=d.buffer;break;case"document":var m=new DOMParser;l=m.parseFromString(h,c);break;case"json":l=JSON.parse(h);break;default:l=h;break}setTimeout(function(){t&&t(l),n.manager.itemEnd(e)},0)}catch(_){setTimeout(function(){i&&i(_),n.manager.itemError(e),n.manager.itemEnd(e)},0)}}else{Ft[e]=[],Ft[e].push({onLoad:t,onProgress:r,onError:i});var v=new XMLHttpRequest;v.open("GET",e,!0),v.addEventListener("load",function(_){var w=this.response;ei.add(e,w);var y=Ft[e];if(delete Ft[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");for(var S=0,L=y.length;S<L;S++){var I=y[S];I.onLoad&&I.onLoad(w)}n.manager.itemEnd(e)}else{for(var S=0,L=y.length;S<L;S++){var I=y[S];I.onError&&I.onError(_)}n.manager.itemError(e),n.manager.itemEnd(e)}},!1),v.addEventListener("progress",function(_){for(var w=Ft[e],y=0,S=w.length;y<S;y++){var L=w[y];L.onProgress&&L.onProgress(_)}},!1),v.addEventListener("error",function(_){var w=Ft[e];delete Ft[e];for(var y=0,S=w.length;y<S;y++){var L=w[y];L.onError&&L.onError(_)}n.manager.itemError(e),n.manager.itemEnd(e)},!1),v.addEventListener("abort",function(_){var w=Ft[e];delete Ft[e];for(var y=0,S=w.length;y<S;y++){var L=w[y];L.onError&&L.onError(_)}n.manager.itemError(e),n.manager.itemEnd(e)},!1),this.responseType!==void 0&&(v.responseType=this.responseType),this.withCredentials!==void 0&&(v.withCredentials=this.withCredentials),v.overrideMimeType&&v.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(var g in this.requestHeader)v.setRequestHeader(g,this.requestHeader[g]);v.send(null)}return n.manager.itemStart(e),v},setPath:function(e){return this.path=e,this},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});function Pp(e){this.manager=e!==void 0?e:Rt}Object.assign(Pp.prototype,{load:function(e,t,r,i){var n=this,a=new ir(n.manager);a.setPath(n.path),a.load(e,function(o){t(n.parse(JSON.parse(o)))},r,i)},parse:function(e,t){for(var r=[],i=0;i<e.length;i++){var n=Ut.parse(e[i]);r.push(n)}t(r)},setPath:function(e){return this.path=e,this}});function Ip(e){this.manager=e!==void 0?e:Rt,this._parser=null}Object.assign(Ip.prototype,{load:function(e,t,r,i){var n=this,a=[],o=new Ai;o.image=a;var s=new ir(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer");function c(f){s.load(e[f],function(d){var p=n._parser(d,!0);a[f]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},u+=1,u===6&&(p.mipmapCount===1&&(o.minFilter=ot),o.format=p.format,o.needsUpdate=!0,t&&t(o))},r,i)}if(Array.isArray(e))for(var u=0,h=0,l=e.length;h<l;++h)c(h);else s.load(e,function(f){var d=n._parser(f,!0);if(d.isCubemap)for(var p=d.mipmaps.length/d.mipmapCount,m=0;m<p;m++){a[m]={mipmaps:[]};for(var v=0;v<d.mipmapCount;v++)a[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+v]),a[m].format=d.format,a[m].width=d.width,a[m].height=d.height}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=ot),o.format=d.format,o.needsUpdate=!0,t&&t(o)},r,i);return o},setPath:function(e){return this.path=e,this}});function Op(e){this.manager=e!==void 0?e:Rt,this._parser=null}Object.assign(Op.prototype,{load:function(e,t,r,i){var n=this,a=new Br,o=new ir(this.manager);return o.setResponseType("arraybuffer"),o.setPath(this.path),o.load(e,function(s){var c=n._parser(s);!c||(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Ct,a.wrapT=c.wrapT!==void 0?c.wrapT:Ct,a.magFilter=c.magFilter!==void 0?c.magFilter:ot,a.minFilter=c.minFilter!==void 0?c.minFilter:fa,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps),c.mipmapCount===1&&(a.minFilter=ot),a.needsUpdate=!0,t&&t(a,c))},r,i),a},setPath:function(e){return this.path=e,this}});function pa(e){this.manager=e!==void 0?e:Rt}Object.assign(pa.prototype,{crossOrigin:"anonymous",load:function(e,t,r,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);var n=this,a=ei.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;var o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function s(){o.removeEventListener("load",s,!1),o.removeEventListener("error",c,!1),ei.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(u){o.removeEventListener("load",s,!1),o.removeEventListener("error",c,!1),i&&i(u),n.manager.itemError(e),n.manager.itemEnd(e)}return o.addEventListener("load",s,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),n.manager.itemStart(e),o.src=e,o},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this}});function Cc(e){this.manager=e!==void 0?e:Rt}Object.assign(Cc.prototype,{crossOrigin:"anonymous",load:function(e,t,r,i){var n=new lr,a=new pa(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);var o=0;function s(u){a.load(e[u],function(h){n.images[u]=h,o++,o===6&&(n.needsUpdate=!0,t&&t(n))},void 0,i)}for(var c=0;c<e.length;++c)s(c);return n},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this}});function Fo(e){this.manager=e!==void 0?e:Rt}Object.assign(Fo.prototype,{crossOrigin:"anonymous",load:function(e,t,r,i){var n=new Ne,a=new pa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){n.image=o;var s=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;n.format=s?xr:Ht,n.needsUpdate=!0,t!==void 0&&t(n)},r,i),n},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this}});function ue(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(ue.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,t){var r=this.getUtoTmapping(e);return this.getPoint(r,t)},getPoints:function(e){e===void 0&&(e=5);for(var t=[],r=0;r<=e;r++)t.push(this.getPoint(r/e));return t},getSpacedPoints:function(e){e===void 0&&(e=5);for(var t=[],r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t},getLength:function(){var e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var t=[],r,i=this.getPoint(0),n,a=0;for(t.push(0),n=1;n<=e;n++)r=this.getPoint(n/e),a+=r.distanceTo(i),t.push(a),i=r;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){var r=this.getLengths(),i=0,n=r.length,a;t?a=t:a=e*r[n-1];for(var o=0,s=n-1,c;o<=s;)if(i=Math.floor(o+(s-o)/2),c=r[i]-a,c<0)o=i+1;else if(c>0)s=i-1;else{s=i;break}if(i=s,r[i]===a)return i/(n-1);var u=r[i],h=r[i+1],l=h-u,f=(a-u)/l,d=(i+f)/(n-1);return d},getTangent:function(e){var t=1e-4,r=e-t,i=e+t;r<0&&(r=0),i>1&&(i=1);var n=this.getPoint(r),a=this.getPoint(i),o=a.clone().sub(n);return o.normalize()},getTangentAt:function(e){var t=this.getUtoTmapping(e);return this.getTangent(t)},computeFrenetFrames:function(e,t){var r=new b,i=[],n=[],a=[],o=new b,s=new fe,c,u,h;for(c=0;c<=e;c++)u=c/e,i[c]=this.getTangentAt(u),i[c].normalize();n[0]=new b,a[0]=new b;var l=Number.MAX_VALUE,f=Math.abs(i[0].x),d=Math.abs(i[0].y),p=Math.abs(i[0].z);for(f<=l&&(l=f,r.set(1,0,0)),d<=l&&(l=d,r.set(0,1,0)),p<=l&&r.set(0,0,1),o.crossVectors(i[0],r).normalize(),n[0].crossVectors(i[0],o),a[0].crossVectors(i[0],n[0]),c=1;c<=e;c++)n[c]=n[c-1].clone(),a[c]=a[c-1].clone(),o.crossVectors(i[c-1],i[c]),o.length()>Number.EPSILON&&(o.normalize(),h=Math.acos(ge.clamp(i[c-1].dot(i[c]),-1,1)),n[c].applyMatrix4(s.makeRotationAxis(o,h))),a[c].crossVectors(i[c],n[c]);if(t===!0)for(h=Math.acos(ge.clamp(n[0].dot(n[e]),-1,1)),h/=e,i[0].dot(o.crossVectors(n[0],n[e]))>0&&(h=-h),c=1;c<=e;c++)n[c].applyMatrix4(s.makeRotationAxis(i[c],h*c)),a[c].crossVectors(i[c],n[c]);return{tangents:i,normals:n,binormals:a}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){var e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}});function Ot(e,t,r,i,n,a,o,s){ue.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=r||1,this.yRadius=i||1,this.aStartAngle=n||0,this.aEndAngle=a||2*Math.PI,this.aClockwise=o||!1,this.aRotation=s||0}Ot.prototype=Object.create(ue.prototype);Ot.prototype.constructor=Ot;Ot.prototype.isEllipseCurve=!0;Ot.prototype.getPoint=function(e,t){for(var r=t||new V,i=Math.PI*2,n=this.aEndAngle-this.aStartAngle,a=Math.abs(n)<Number.EPSILON;n<0;)n+=i;for(;n>i;)n-=i;n<Number.EPSILON&&(a?n=0:n=i),this.aClockwise===!0&&!a&&(n===i?n=-i:n=n-i);var o=this.aStartAngle+e*n,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){var u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),l=s-this.aX,f=c-this.aY;s=l*u-f*h+this.aX,c=l*h+f*u+this.aY}return r.set(s,c)};Ot.prototype.copy=function(e){return ue.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};Ot.prototype.toJSON=function(){var e=ue.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e};Ot.prototype.fromJSON=function(e){return ue.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};function ji(e,t,r,i,n,a){Ot.call(this,e,t,r,r,i,n,a),this.type="ArcCurve"}ji.prototype=Object.create(Ot.prototype);ji.prototype.constructor=ji;ji.prototype.isArcCurve=!0;function No(){var e=0,t=0,r=0,i=0;function n(a,o,s,c){e=a,t=s,r=-3*a+3*o-2*s-c,i=2*a-2*o+s+c}return{initCatmullRom:function(a,o,s,c,u){n(o,s,u*(s-a),u*(c-o))},initNonuniformCatmullRom:function(a,o,s,c,u,h,l){var f=(o-a)/u-(s-a)/(u+h)+(s-o)/h,d=(s-o)/h-(c-o)/(h+l)+(c-s)/l;f*=h,d*=h,n(o,s,f,d)},calc:function(a){var o=a*a,s=o*a;return e+t*a+r*o+i*s}}}var ln=new b,Sa=new No,Aa=new No,La=new No;function At(e,t,r,i){ue.call(this),this.type="CatmullRomCurve3",this.points=e||[],this.closed=t||!1,this.curveType=r||"centripetal",this.tension=i||.5}At.prototype=Object.create(ue.prototype);At.prototype.constructor=At;At.prototype.isCatmullRomCurve3=!0;At.prototype.getPoint=function(e,t){var r=t||new b,i=this.points,n=i.length,a=(n-(this.closed?0:1))*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n:s===0&&o===n-1&&(o=n-2,s=1);var c,u,h,l;if(this.closed||o>0?c=i[(o-1)%n]:(ln.subVectors(i[0],i[1]).add(i[0]),c=ln),u=i[o%n],h=i[(o+1)%n],this.closed||o+2<n?l=i[(o+2)%n]:(ln.subVectors(i[n-1],i[n-2]).add(i[n-1]),l=ln),this.curveType==="centripetal"||this.curveType==="chordal"){var f=this.curveType==="chordal"?.5:.25,d=Math.pow(c.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(l),f);p<1e-4&&(p=1),d<1e-4&&(d=p),m<1e-4&&(m=p),Sa.initNonuniformCatmullRom(c.x,u.x,h.x,l.x,d,p,m),Aa.initNonuniformCatmullRom(c.y,u.y,h.y,l.y,d,p,m),La.initNonuniformCatmullRom(c.z,u.z,h.z,l.z,d,p,m)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,u.x,h.x,l.x,this.tension),Aa.initCatmullRom(c.y,u.y,h.y,l.y,this.tension),La.initCatmullRom(c.z,u.z,h.z,l.z,this.tension));return r.set(Sa.calc(s),Aa.calc(s),La.calc(s)),r};At.prototype.copy=function(e){ue.prototype.copy.call(this,e),this.points=[];for(var t=0,r=e.points.length;t<r;t++){var i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};At.prototype.toJSON=function(){var e=ue.prototype.toJSON.call(this);e.points=[];for(var t=0,r=this.points.length;t<r;t++){var i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e};At.prototype.fromJSON=function(e){ue.prototype.fromJSON.call(this,e),this.points=[];for(var t=0,r=e.points.length;t<r;t++){var i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};function As(e,t,r,i,n){var a=(i-t)*.5,o=(n-r)*.5,s=e*e,c=e*s;return(2*r-2*i+a+o)*c+(-3*r+3*i-2*a-o)*s+a*e+r}function Dp(e,t){var r=1-e;return r*r*t}function Fp(e,t){return 2*(1-e)*e*t}function Np(e,t){return e*e*t}function li(e,t,r,i){return Dp(e,t)+Fp(e,r)+Np(e,i)}function Bp(e,t){var r=1-e;return r*r*r*t}function Up(e,t){var r=1-e;return 3*r*r*e*t}function Gp(e,t){return 3*(1-e)*e*e*t}function zp(e,t){return e*e*e*t}function fi(e,t,r,i,n){return Bp(e,t)+Up(e,r)+Gp(e,i)+zp(e,n)}function Wt(e,t,r,i){ue.call(this),this.type="CubicBezierCurve",this.v0=e||new V,this.v1=t||new V,this.v2=r||new V,this.v3=i||new V}Wt.prototype=Object.create(ue.prototype);Wt.prototype.constructor=Wt;Wt.prototype.isCubicBezierCurve=!0;Wt.prototype.getPoint=function(e,t){var r=t||new V,i=this.v0,n=this.v1,a=this.v2,o=this.v3;return r.set(fi(e,i.x,n.x,a.x,o.x),fi(e,i.y,n.y,a.y,o.y)),r};Wt.prototype.copy=function(e){return ue.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};Wt.prototype.toJSON=function(){var e=ue.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};Wt.prototype.fromJSON=function(e){return ue.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function tr(e,t,r,i){ue.call(this),this.type="CubicBezierCurve3",this.v0=e||new b,this.v1=t||new b,this.v2=r||new b,this.v3=i||new b}tr.prototype=Object.create(ue.prototype);tr.prototype.constructor=tr;tr.prototype.isCubicBezierCurve3=!0;tr.prototype.getPoint=function(e,t){var r=t||new b,i=this.v0,n=this.v1,a=this.v2,o=this.v3;return r.set(fi(e,i.x,n.x,a.x,o.x),fi(e,i.y,n.y,a.y,o.y),fi(e,i.z,n.z,a.z,o.z)),r};tr.prototype.copy=function(e){return ue.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};tr.prototype.toJSON=function(){var e=ue.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};tr.prototype.fromJSON=function(e){return ue.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function Lt(e,t){ue.call(this),this.type="LineCurve",this.v1=e||new V,this.v2=t||new V}Lt.prototype=Object.create(ue.prototype);Lt.prototype.constructor=Lt;Lt.prototype.isLineCurve=!0;Lt.prototype.getPoint=function(e,t){var r=t||new V;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r};Lt.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};Lt.prototype.getTangent=function(){var e=this.v2.clone().sub(this.v1);return e.normalize()};Lt.prototype.copy=function(e){return ue.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Lt.prototype.toJSON=function(){var e=ue.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Lt.prototype.fromJSON=function(e){return ue.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Xt(e,t){ue.call(this),this.type="LineCurve3",this.v1=e||new b,this.v2=t||new b}Xt.prototype=Object.create(ue.prototype);Xt.prototype.constructor=Xt;Xt.prototype.isLineCurve3=!0;Xt.prototype.getPoint=function(e,t){var r=t||new b;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r};Xt.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};Xt.prototype.copy=function(e){return ue.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Xt.prototype.toJSON=function(){var e=ue.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Xt.prototype.fromJSON=function(e){return ue.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function jt(e,t,r){ue.call(this),this.type="QuadraticBezierCurve",this.v0=e||new V,this.v1=t||new V,this.v2=r||new V}jt.prototype=Object.create(ue.prototype);jt.prototype.constructor=jt;jt.prototype.isQuadraticBezierCurve=!0;jt.prototype.getPoint=function(e,t){var r=t||new V,i=this.v0,n=this.v1,a=this.v2;return r.set(li(e,i.x,n.x,a.x),li(e,i.y,n.y,a.y)),r};jt.prototype.copy=function(e){return ue.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};jt.prototype.toJSON=function(){var e=ue.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};jt.prototype.fromJSON=function(e){return ue.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function rr(e,t,r){ue.call(this),this.type="QuadraticBezierCurve3",this.v0=e||new b,this.v1=t||new b,this.v2=r||new b}rr.prototype=Object.create(ue.prototype);rr.prototype.constructor=rr;rr.prototype.isQuadraticBezierCurve3=!0;rr.prototype.getPoint=function(e,t){var r=t||new b,i=this.v0,n=this.v1,a=this.v2;return r.set(li(e,i.x,n.x,a.x),li(e,i.y,n.y,a.y),li(e,i.z,n.z,a.z)),r};rr.prototype.copy=function(e){return ue.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};rr.prototype.toJSON=function(){var e=ue.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};rr.prototype.fromJSON=function(e){return ue.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function qt(e){ue.call(this),this.type="SplineCurve",this.points=e||[]}qt.prototype=Object.create(ue.prototype);qt.prototype.constructor=qt;qt.prototype.isSplineCurve=!0;qt.prototype.getPoint=function(e,t){var r=t||new V,i=this.points,n=(i.length-1)*e,a=Math.floor(n),o=n-a,s=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return r.set(As(o,s.x,c.x,u.x,h.x),As(o,s.y,c.y,u.y,h.y)),r};qt.prototype.copy=function(e){ue.prototype.copy.call(this,e),this.points=[];for(var t=0,r=e.points.length;t<r;t++){var i=e.points[t];this.points.push(i.clone())}return this};qt.prototype.toJSON=function(){var e=ue.prototype.toJSON.call(this);e.points=[];for(var t=0,r=this.points.length;t<r;t++){var i=this.points[t];e.points.push(i.toArray())}return e};qt.prototype.fromJSON=function(e){ue.prototype.fromJSON.call(this,e),this.points=[];for(var t=0,r=e.points.length;t<r;t++){var i=e.points[t];this.points.push(new V().fromArray(i))}return this};var Pc=Object.freeze(Object.defineProperty({__proto__:null,ArcCurve:ji,CatmullRomCurve3:At,CubicBezierCurve:Wt,CubicBezierCurve3:tr,EllipseCurve:Ot,LineCurve:Lt,LineCurve3:Xt,QuadraticBezierCurve:jt,QuadraticBezierCurve3:rr,SplineCurve:qt},Symbol.toStringTag,{value:"Module"}));function ar(){ue.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}ar.prototype=Object.assign(Object.create(ue.prototype),{constructor:ar,add:function(e){this.curves.push(e)},closePath:function(){var e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Lt(t,e))},getPoint:function(e){for(var t=e*this.getLength(),r=this.getCurveLengths(),i=0;i<r.length;){if(r[i]>=t){var n=r[i]-t,a=this.curves[i],o=a.getLength(),s=o===0?0:1-n/o;return a.getPointAt(s)}i++}return null},getLength:function(){var e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var e=[],t=0,r=0,i=this.curves.length;r<i;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){e===void 0&&(e=40);for(var t=[],r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e=e||12;for(var t=[],r,i=0,n=this.curves;i<n.length;i++)for(var a=n[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o),c=0;c<s.length;c++){var u=s[c];r&&r.equals(u)||(t.push(u),r=u)}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){ue.prototype.copy.call(this,e),this.curves=[];for(var t=0,r=e.curves.length;t<r;t++){var i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){var e=ue.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(var t=0,r=this.curves.length;t<r;t++){var i=this.curves[t];e.curves.push(i.toJSON())}return e},fromJSON:function(e){ue.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(var t=0,r=e.curves.length;t<r;t++){var i=e.curves[t];this.curves.push(new Pc[i.type]().fromJSON(i))}return this}});function Gt(e){ar.call(this),this.type="Path",this.currentPoint=new V,e&&this.setFromPoints(e)}Gt.prototype=Object.assign(Object.create(ar.prototype),{constructor:Gt,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(var t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y)},moveTo:function(e,t){this.currentPoint.set(e,t)},lineTo:function(e,t){var r=new Lt(this.currentPoint.clone(),new V(e,t));this.curves.push(r),this.currentPoint.set(e,t)},quadraticCurveTo:function(e,t,r,i){var n=new jt(this.currentPoint.clone(),new V(e,t),new V(r,i));this.curves.push(n),this.currentPoint.set(r,i)},bezierCurveTo:function(e,t,r,i,n,a){var o=new Wt(this.currentPoint.clone(),new V(e,t),new V(r,i),new V(n,a));this.curves.push(o),this.currentPoint.set(n,a)},splineThru:function(e){var t=[this.currentPoint.clone()].concat(e),r=new qt(t);this.curves.push(r),this.currentPoint.copy(e[e.length-1])},arc:function(e,t,r,i,n,a){var o=this.currentPoint.x,s=this.currentPoint.y;this.absarc(e+o,t+s,r,i,n,a)},absarc:function(e,t,r,i,n,a){this.absellipse(e,t,r,r,i,n,a)},ellipse:function(e,t,r,i,n,a,o,s){var c=this.currentPoint.x,u=this.currentPoint.y;this.absellipse(e+c,t+u,r,i,n,a,o,s)},absellipse:function(e,t,r,i,n,a,o,s){var c=new Ot(e,t,r,i,n,a,o,s);if(this.curves.length>0){var u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);var h=c.getPoint(1);this.currentPoint.copy(h)},copy:function(e){return ar.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){var e=ar.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return ar.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}});function yr(e){Gt.call(this,e),this.uuid=ge.generateUUID(),this.type="Shape",this.holes=[]}yr.prototype=Object.assign(Object.create(Gt.prototype),{constructor:yr,getPointsHoles:function(e){for(var t=[],r=0,i=this.holes.length;r<i;r++)t[r]=this.holes[r].getPoints(e);return t},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){Gt.prototype.copy.call(this,e),this.holes=[];for(var t=0,r=e.holes.length;t<r;t++){var i=e.holes[t];this.holes.push(i.clone())}return this},toJSON:function(){var e=Gt.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(var t=0,r=this.holes.length;t<r;t++){var i=this.holes[t];e.holes.push(i.toJSON())}return e},fromJSON:function(e){Gt.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(var t=0,r=e.holes.length;t<r;t++){var i=e.holes[t];this.holes.push(new Gt().fromJSON(i))}return this}});function Xe(e,t){$.call(this),this.type="Light",this.color=new se(e),this.intensity=t!==void 0?t:1,this.receiveShadow=void 0}Xe.prototype=Object.assign(Object.create($.prototype),{constructor:Xe,isLight:!0,copy:function(e){return $.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){var t=$.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function co(e,t,r){Xe.call(this,e,r),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy($.DefaultUp),this.updateMatrix(),this.groundColor=new se(t)}co.prototype=Object.assign(Object.create(Xe.prototype),{constructor:co,isHemisphereLight:!0,copy:function(e){return Xe.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function oi(e){this.camera=e,this.bias=0,this.radius=1,this.mapSize=new V(512,512),this.map=null,this.matrix=new fe}Object.assign(oi.prototype,{copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){var e={};return this.bias!==0&&(e.bias=this.bias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function uo(){oi.call(this,new Ye(50,1,.5,500))}uo.prototype=Object.assign(Object.create(oi.prototype),{constructor:uo,isSpotLightShadow:!0,update:function(e){var t=this.camera,r=ge.RAD2DEG*2*e.angle,i=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(r!==t.fov||i!==t.aspect||n!==t.far)&&(t.fov=r,t.aspect=i,t.far=n,t.updateProjectionMatrix())}});function ho(e,t,r,i,n,a){Xe.call(this,e,t),this.type="SpotLight",this.position.copy($.DefaultUp),this.updateMatrix(),this.target=new $,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=r!==void 0?r:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=n!==void 0?n:0,this.decay=a!==void 0?a:1,this.shadow=new uo}ho.prototype=Object.assign(Object.create(Xe.prototype),{constructor:ho,isSpotLight:!0,copy:function(e){return Xe.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function lo(e,t,r,i){Xe.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(n){this.intensity=n/(4*Math.PI)}}),this.distance=r!==void 0?r:0,this.decay=i!==void 0?i:1,this.shadow=new oi(new Ye(90,1,.5,500))}lo.prototype=Object.assign(Object.create(Xe.prototype),{constructor:lo,isPointLight:!0,copy:function(e){return Xe.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function ti(e,t,r,i,n,a){$t.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e!==void 0?e:-1,this.right=t!==void 0?t:1,this.top=r!==void 0?r:1,this.bottom=i!==void 0?i:-1,this.near=n!==void 0?n:.1,this.far=a!==void 0?a:2e3,this.updateProjectionMatrix()}ti.prototype=Object.assign(Object.create($t.prototype),{constructor:ti,isOrthographicCamera:!0,copy:function(e,t){return $t.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,r,i,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,n=r-e,a=r+e,o=i+t,s=i-t;if(this.view!==null&&this.view.enabled){var c=this.zoom/(this.view.width/this.view.fullWidth),u=this.zoom/(this.view.height/this.view.fullHeight),h=(this.right-this.left)/this.view.width,l=(this.top-this.bottom)/this.view.height;n+=h*(this.view.offsetX/c),a=n+h*(this.view.width/c),o-=l*(this.view.offsetY/u),s=o-l*(this.view.height/u)}this.projectionMatrix.makeOrthographic(n,a,o,s,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){var t=$.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function fo(){oi.call(this,new ti(-5,5,5,-5,.5,500))}fo.prototype=Object.assign(Object.create(oi.prototype),{constructor:fo});function po(e,t){Xe.call(this,e,t),this.type="DirectionalLight",this.position.copy($.DefaultUp),this.updateMatrix(),this.target=new $,this.shadow=new fo}po.prototype=Object.assign(Object.create(Xe.prototype),{constructor:po,isDirectionalLight:!0,copy:function(e){return Xe.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function mo(e,t){Xe.call(this,e,t),this.type="AmbientLight",this.castShadow=void 0}mo.prototype=Object.assign(Object.create(Xe.prototype),{constructor:mo,isAmbientLight:!0});function vo(e,t,r,i){Xe.call(this,e,t),this.type="RectAreaLight",this.width=r!==void 0?r:10,this.height=i!==void 0?i:10}vo.prototype=Object.assign(Object.create(Xe.prototype),{constructor:vo,isRectAreaLight:!0,copy:function(e){return Xe.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){var t=Xe.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}});function Bo(e){this.manager=e!==void 0?e:Rt,this.textures={}}Object.assign(Bo.prototype,{load:function(e,t,r,i){var n=this,a=new ir(n.manager);a.setPath(n.path),a.load(e,function(o){t(n.parse(JSON.parse(o)))},r,i)},parse:function(e){var t=this.textures;function r(c){return t[c]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",c),t[c]}var i=new Lp[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearCoat!==void 0&&(i.clearCoat=e.clearCoat),e.clearCoatRoughness!==void 0&&(i.clearCoatRoughness=e.clearCoatRoughness),e.vertexColors!==void 0&&(i.vertexColors=e.vertexColors),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.dithering!==void 0&&(i.dithering=e.dithering),e.visible!==void 0&&(i.visible=e.visible),e.userData!==void 0&&(i.userData=e.userData),e.uniforms!==void 0)for(var n in e.uniforms){var a=e.uniforms[n];switch(i.uniforms[n]={},a.type){case"t":i.uniforms[n].value=r(a.value);break;case"c":i.uniforms[n].value=new se().setHex(a.value);break;case"v2":i.uniforms[n].value=new V().fromArray(a.value);break;case"v3":i.uniforms[n].value=new b().fromArray(a.value);break;case"v4":i.uniforms[n].value=new Fe().fromArray(a.value);break;case"m3":i.uniforms[n].value=new ut().fromArray(a.value);case"m4":i.uniforms[n].value=new fe().fromArray(a.value);break;default:i.uniforms[n].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(var o in e.extensions)i.extensions[o]=e.extensions[o];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=r(e.map)),e.alphaMap!==void 0&&(i.alphaMap=r(e.alphaMap),i.transparent=!0),e.bumpMap!==void 0&&(i.bumpMap=r(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=r(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){var s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new V().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=r(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=r(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=r(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=r(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=r(e.specularMap)),e.envMap!==void 0&&(i.envMap=r(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.lightMap!==void 0&&(i.lightMap=r(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=r(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=r(e.gradientMap)),i},setPath:function(e){return this.path=e,this},setTextures:function(e){return this.textures=e,this}});var Ic={decodeText:function(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);for(var t="",r=0,i=e.length;r<i;r++)t+=String.fromCharCode(e[r]);return decodeURIComponent(escape(t))},extractUrlBase:function(e){var t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};function Oc(e){this.manager=e!==void 0?e:Rt}Object.assign(Oc.prototype,{load:function(e,t,r,i){var n=this,a=new ir(n.manager);a.setPath(n.path),a.load(e,function(o){t(n.parse(JSON.parse(o)))},r,i)},parse:function(e){var t=new K,r=e.data.index;if(r!==void 0){var i=new Ls[r.type](r.array);t.setIndex(new xe(i,1))}var n=e.data.attributes;for(var a in n){var o=n[a],i=new Ls[o.type](o.array);t.addAttribute(a,new xe(i,o.itemSize,o.normalized))}var s=e.data.groups||e.data.drawcalls||e.data.offsets;if(s!==void 0)for(var c=0,u=s.length;c!==u;++c){var h=s[c];t.addGroup(h.start,h.count,h.materialIndex)}var l=e.data.boundingSphere;if(l!==void 0){var f=new b;l.center!==void 0&&f.fromArray(l.center),t.boundingSphere=new Vt(f,l.radius)}return e.name&&(t.name=e.name),e.userData&&(t.userData=e.userData),t},setPath:function(e){return this.path=e,this}});var Ls={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Dc(e){this.manager=e!==void 0?e:Rt,this.resourcePath=""}Object.assign(Dc.prototype,{crossOrigin:"anonymous",load:function(e,t,r,i){var n=this,a=this.path===void 0?Ic.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;var o=new ir(n.manager);o.setPath(this.path),o.load(e,function(s){var c=null;try{c=JSON.parse(s)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}var u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}n.parse(c,t)},r,i)},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setCrossOrigin:function(e){return this.crossOrigin=e,this},parse:function(e,t){var r=this.parseShape(e.shapes),i=this.parseGeometries(e.geometries,r),n=this.parseImages(e.images,function(){t!==void 0&&t(s)}),a=this.parseTextures(e.textures,n),o=this.parseMaterials(e.materials,a),s=this.parseObject(e.object,i,o);return e.animations&&(s.animations=this.parseAnimations(e.animations)),(e.images===void 0||e.images.length===0)&&t!==void 0&&t(s),s},parseShape:function(e){var t={};if(e!==void 0)for(var r=0,i=e.length;r<i;r++){var n=new yr().fromJSON(e[r]);t[n.uuid]=n}return t},parseGeometries:function(e,t){var r={};if(e!==void 0)for(var i=new Oc,n=0,a=e.length;n<a;n++){var o,s=e[n];switch(s.type){case"PlaneGeometry":case"PlaneBufferGeometry":o=new _t[s.type](s.width,s.height,s.widthSegments,s.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":o=new _t[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":o=new _t[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":o=new _t[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":o=new _t[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":o=new _t[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":o=new _t[s.type](s.radius,s.detail);break;case"RingGeometry":case"RingBufferGeometry":o=new _t[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":o=new _t[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":o=new _t[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);break;case"LatheGeometry":case"LatheBufferGeometry":o=new _t[s.type](s.points,s.segments,s.phiStart,s.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":o=new _t[s.type](s.vertices,s.indices,s.radius,s.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":for(var l=[],c=0,u=s.shapes.length;c<u;c++){var h=t[s.shapes[c]];l.push(h)}o=new _t[s.type](l,s.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":for(var l=[],c=0,u=s.shapes.length;c<u;c++){var h=t[s.shapes[c]];l.push(h)}var f=s.options.extrudePath;f!==void 0&&(s.options.extrudePath=new Pc[f.type]().fromJSON(f)),o=new _t[s.type](l,s.options);break;case"BufferGeometry":o=i.parse(s);break;case"Geometry":if("THREE"in window&&"LegacyJSONLoader"in THREE){var d=new THREE.LegacyJSONLoader;o=d.parse(s,this.resourcePath).geometry}else console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+s.type+'"');continue}o.uuid=s.uuid,s.name!==void 0&&(o.name=s.name),o.isBufferGeometry===!0&&s.userData!==void 0&&(o.userData=s.userData),r[s.uuid]=o}return r},parseMaterials:function(e,t){var r={},i={};if(e!==void 0){var n=new Bo;n.setTextures(t);for(var a=0,o=e.length;a<o;a++){var s=e[a];if(s.type==="MultiMaterial"){for(var c=[],u=0;u<s.materials.length;u++){var h=s.materials[u];r[h.uuid]===void 0&&(r[h.uuid]=n.parse(h)),c.push(r[h.uuid])}i[s.uuid]=c}else i[s.uuid]=n.parse(s),r[s.uuid]=i[s.uuid]}}return i},parseAnimations:function(e){for(var t=[],r=0;r<e.length;r++){var i=e[r],n=Ut.parse(i);i.uuid!==void 0&&(n.uuid=i.uuid),t.push(n)}return t},parseImages:function(e,t){var r=this,i={};function n(m){return r.manager.itemStart(m),o.load(m,function(){r.manager.itemEnd(m)},void 0,function(){r.manager.itemError(m),r.manager.itemEnd(m)})}if(e!==void 0&&e.length>0){var a=new Rc(t),o=new pa(a);o.setCrossOrigin(this.crossOrigin);for(var s=0,c=e.length;s<c;s++){var u=e[s],h=u.url;if(Array.isArray(h)){i[u.uuid]=[];for(var l=0,f=h.length;l<f;l++){var d=h[l],p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(d)?d:r.resourcePath+d;i[u.uuid].push(n(p))}}else{var p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(u.url)?u.url:r.resourcePath+u.url;i[u.uuid]=n(p)}}}return i},parseTextures:function(e,t){function r(c,u){return typeof c=="number"?c:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",c),u[c])}var i={};if(e!==void 0)for(var n=0,a=e.length;n<a;n++){var o=e[n];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);var s;Array.isArray(t[o.image])?s=new lr(t[o.image]):s=new Ne(t[o.image]),s.needsUpdate=!0,s.uuid=o.uuid,o.name!==void 0&&(s.name=o.name),o.mapping!==void 0&&(s.mapping=r(o.mapping,Hp)),o.offset!==void 0&&s.offset.fromArray(o.offset),o.repeat!==void 0&&s.repeat.fromArray(o.repeat),o.center!==void 0&&s.center.fromArray(o.center),o.rotation!==void 0&&(s.rotation=o.rotation),o.wrap!==void 0&&(s.wrapS=r(o.wrap[0],Rs),s.wrapT=r(o.wrap[1],Rs)),o.format!==void 0&&(s.format=o.format),o.type!==void 0&&(s.type=o.type),o.encoding!==void 0&&(s.encoding=o.encoding),o.minFilter!==void 0&&(s.minFilter=r(o.minFilter,Cs)),o.magFilter!==void 0&&(s.magFilter=r(o.magFilter,Cs)),o.anisotropy!==void 0&&(s.anisotropy=o.anisotropy),o.flipY!==void 0&&(s.flipY=o.flipY),o.premultiplyAlpha!==void 0&&(s.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(s.unpackAlignment=o.unpackAlignment),i[o.uuid]=s}return i},parseObject:function(e,t,r){var i;function n(p){return t[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",p),t[p]}function a(p){if(p!==void 0){if(Array.isArray(p)){for(var m=[],v=0,g=p.length;v<g;v++){var _=p[v];r[_]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",_),m.push(r[_])}return m}return r[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),r[p]}}switch(e.type){case"Scene":i=new Si,e.background!==void 0&&Number.isInteger(e.background)&&(i.background=new se(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?i.fog=new Ti(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(i.fog=new Ei(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":i=new Ye(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(i.focus=e.focus),e.zoom!==void 0&&(i.zoom=e.zoom),e.filmGauge!==void 0&&(i.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(i.filmOffset=e.filmOffset),e.view!==void 0&&(i.view=Object.assign({},e.view));break;case"OrthographicCamera":i=new ti(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(i.zoom=e.zoom),e.view!==void 0&&(i.view=Object.assign({},e.view));break;case"AmbientLight":i=new mo(e.color,e.intensity);break;case"DirectionalLight":i=new po(e.color,e.intensity);break;case"PointLight":i=new lo(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":i=new vo(e.color,e.intensity,e.width,e.height);break;case"SpotLight":i=new ho(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":i=new co(e.color,e.groundColor,e.intensity);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":var o=n(e.geometry),s=a(e.material);o.bones&&o.bones.length>0?i=new Cn(o,s):i=new ht(o,s);break;case"LOD":i=new Rn;break;case"Line":i=new bt(n(e.geometry),a(e.material),e.mode);break;case"LineLoop":i=new $a(n(e.geometry),a(e.material));break;case"LineSegments":i=new He(n(e.geometry),a(e.material));break;case"PointCloud":case"Points":i=new Ka(n(e.geometry),a(e.material));break;case"Sprite":i=new Ja(a(e.material));break;case"Group":i=new Mi;break;default:i=new $}if(i.uuid=e.uuid,e.name!==void 0&&(i.name=e.name),e.matrix!==void 0?(i.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(i.matrixAutoUpdate=e.matrixAutoUpdate),i.matrixAutoUpdate&&i.matrix.decompose(i.position,i.quaternion,i.scale)):(e.position!==void 0&&i.position.fromArray(e.position),e.rotation!==void 0&&i.rotation.fromArray(e.rotation),e.quaternion!==void 0&&i.quaternion.fromArray(e.quaternion),e.scale!==void 0&&i.scale.fromArray(e.scale)),e.castShadow!==void 0&&(i.castShadow=e.castShadow),e.receiveShadow!==void 0&&(i.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(i.shadow.bias=e.shadow.bias),e.shadow.radius!==void 0&&(i.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&i.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(i.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(i.visible=e.visible),e.frustumCulled!==void 0&&(i.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(i.renderOrder=e.renderOrder),e.userData!==void 0&&(i.userData=e.userData),e.layers!==void 0&&(i.layers.mask=e.layers),e.children!==void 0)for(var c=e.children,u=0;u<c.length;u++)i.add(this.parseObject(c[u],t,r));if(e.type==="LOD")for(var h=e.levels,l=0;l<h.length;l++){var f=h[l],d=i.getObjectByProperty("uuid",f.object);d!==void 0&&i.addLevel(d,f.distance)}return i}});var Hp={UVMapping:To,CubeReflectionMapping:So,CubeRefractionMapping:Ha,EquirectangularReflectionMapping:rc,EquirectangularRefractionMapping:Va,SphericalReflectionMapping:ic,CubeUVReflectionMapping:Ao,CubeUVRefractionMapping:Lo},Rs={RepeatWrapping:nr,ClampToEdgeWrapping:Ct,MirroredRepeatWrapping:Fr},Cs={NearestFilter:it,NearestMipMapNearestFilter:Ro,NearestMipMapLinearFilter:Co,LinearFilter:ot,LinearMipMapNearestFilter:nc,LinearMipMapLinearFilter:fa};function Ps(e){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.manager=e!==void 0?e:Rt,this.options=void 0}Ps.prototype={constructor:Ps,setOptions:function(t){return this.options=t,this},load:function(e,t,r,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);var n=this,a=ei.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;fetch(e).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,n.options)}).then(function(o){ei.add(e,o),t&&t(o),n.manager.itemEnd(e)}).catch(function(o){i&&i(o),n.manager.itemError(e),n.manager.itemEnd(e)})},setCrossOrigin:function(){return this},setPath:function(e){return this.path=e,this}};function Fc(){this.type="ShapePath",this.color=new se,this.subPaths=[],this.currentPath=null}Object.assign(Fc.prototype,{moveTo:function(e,t){this.currentPath=new Gt,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t)},lineTo:function(e,t){this.currentPath.lineTo(e,t)},quadraticCurveTo:function(e,t,r,i){this.currentPath.quadraticCurveTo(e,t,r,i)},bezierCurveTo:function(e,t,r,i,n,a){this.currentPath.bezierCurveTo(e,t,r,i,n,a)},splineThru:function(e){this.currentPath.splineThru(e)},toShapes:function(e,t){function r(z){for(var J=[],Y=0,q=z.length;Y<q;Y++){var E=z[Y],T=new yr;T.curves=E.curves,J.push(T)}return J}function i(z,J){for(var Y=J.length,q=!1,E=Y-1,T=0;T<Y;E=T++){var B=J[E],R=J[T],Q=R.x-B.x,U=R.y-B.y;if(Math.abs(U)>Number.EPSILON){if(U<0&&(B=J[T],Q=-Q,R=J[E],U=-U),z.y<B.y||z.y>R.y)continue;if(z.y===B.y){if(z.x===B.x)return!0}else{var W=U*(z.x-B.x)-Q*(z.y-B.y);if(W===0)return!0;if(W<0)continue;q=!q}}else{if(z.y!==B.y)continue;if(R.x<=z.x&&z.x<=B.x||B.x<=z.x&&z.x<=R.x)return!0}}return q}var n=cr.isClockWise,a=this.subPaths;if(a.length===0)return[];if(t===!0)return r(a);var o,s,c,u=[];if(a.length===1)return s=a[0],c=new yr,c.curves=s.curves,u.push(c),u;var h=!n(a[0].getPoints());h=e?!h:h;var l=[],f=[],d=[],p=0,m;f[p]=void 0,d[p]=[];for(var v=0,g=a.length;v<g;v++)s=a[v],m=s.getPoints(),o=n(m),o=e?!o:o,o?(!h&&f[p]&&p++,f[p]={s:new yr,p:m},f[p].s.curves=s.curves,h&&p++,d[p]=[]):d[p].push({h:s,p:m[0]});if(!f[0])return r(a);if(f.length>1){for(var _=!1,w=[],y=0,S=f.length;y<S;y++)l[y]=[];for(var y=0,S=f.length;y<S;y++)for(var L=d[y],I=0;I<L.length;I++){for(var P=L[I],A=!0,D=0;D<f.length;D++)i(P.p,f[D].p)&&(y!==D&&w.push({froms:y,tos:D,hole:I}),A?(A=!1,l[D].push(P)):_=!0);A&&l[y].push(P)}w.length>0&&(_||(d=l))}for(var F,v=0,N=f.length;v<N;v++){c=f[v].s,u.push(c),F=d[v];for(var G=0,H=F.length;G<H;G++)c.holes.push(F[G].h)}return u}});function Nc(e){this.type="Font",this.data=e}Object.assign(Nc.prototype,{isFont:!0,generateShapes:function(e,t){t===void 0&&(t=100);for(var r=[],i=Vp(e,t,this.data),n=0,a=i.length;n<a;n++)Array.prototype.push.apply(r,i[n].toShapes());return r}});function Vp(e,t,r){for(var i=Array.from?Array.from(e):String(e).split(""),n=t/r.resolution,a=(r.boundingBox.yMax-r.boundingBox.yMin+r.underlineThickness)*n,o=[],s=0,c=0,u=0;u<i.length;u++){var h=i[u];if(h===`
`)s=0,c-=a;else{var l=kp(h,n,s,c,r);s+=l.offsetX,o.push(l.path)}}return o}function kp(e,t,r,i,n){var a=n.glyphs[e]||n.glyphs["?"];if(!!a){var o=new Fc,s,c,u,h,l,f,d,p;if(a.o)for(var m=a._cachedOutline||(a._cachedOutline=a.o.split(" ")),v=0,g=m.length;v<g;){var _=m[v++];switch(_){case"m":s=m[v++]*t+r,c=m[v++]*t+i,o.moveTo(s,c);break;case"l":s=m[v++]*t+r,c=m[v++]*t+i,o.lineTo(s,c);break;case"q":u=m[v++]*t+r,h=m[v++]*t+i,l=m[v++]*t+r,f=m[v++]*t+i,o.quadraticCurveTo(l,f,u,h);break;case"b":u=m[v++]*t+r,h=m[v++]*t+i,l=m[v++]*t+r,f=m[v++]*t+i,d=m[v++]*t+r,p=m[v++]*t+i,o.bezierCurveTo(l,f,d,p,u,h);break}}return{offsetX:a.ha*t,path:o}}}function Wp(e){this.manager=e!==void 0?e:Rt}Object.assign(Wp.prototype,{load:function(e,t,r,i){var n=this,a=new ir(this.manager);a.setPath(this.path),a.load(e,function(o){var s;try{s=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),s=JSON.parse(o.substring(65,o.length-2))}var c=n.parse(s);t&&t(c)},r,i)},parse:function(e){return new Nc(e)},setPath:function(e){return this.path=e,this}});function ea(){}ea.Handlers={handlers:[],add:function(e,t){this.handlers.push(e,t)},get:function(e){for(var t=this.handlers,r=0,i=t.length;r<i;r+=2){var n=t[r],a=t[r+1];if(n.test(e))return a}return null}};Object.assign(ea.prototype,{crossOrigin:"anonymous",onLoadStart:function(){},onLoadProgress:function(){},onLoadComplete:function(){},initMaterials:function(e,t,r){for(var i=[],n=0;n<e.length;++n)i[n]=this.createMaterial(e[n],t,r);return i},createMaterial:function(){var e={NoBlending:hi,NormalBlending:Or,AdditiveBlending:Ba,SubtractiveBlending:Ua,MultiplyBlending:Ga,CustomBlending:$s},t=new se,r=new Fo,i=new Bo;return function(a,o,s){var c={};function u(d,p,m,v,g){var _=o+d,w=ea.Handlers.get(_),y;w!==null?y=w.load(_):(r.setCrossOrigin(s),y=r.load(_)),p!==void 0&&(y.repeat.fromArray(p),p[0]!==1&&(y.wrapS=nr),p[1]!==1&&(y.wrapT=nr)),m!==void 0&&y.offset.fromArray(m),v!==void 0&&(v[0]==="repeat"&&(y.wrapS=nr),v[0]==="mirror"&&(y.wrapS=Fr),v[1]==="repeat"&&(y.wrapT=nr),v[1]==="mirror"&&(y.wrapT=Fr)),g!==void 0&&(y.anisotropy=g);var S=ge.generateUUID();return c[S]=y,S}var h={uuid:ge.generateUUID(),type:"MeshLambertMaterial"};for(var l in a){var f=a[l];switch(l){case"DbgColor":case"DbgIndex":case"opticalDensity":case"illumination":break;case"DbgName":h.name=f;break;case"blending":h.blending=e[f];break;case"colorAmbient":case"mapAmbient":console.warn("THREE.Loader.createMaterial:",l,"is no longer supported.");break;case"colorDiffuse":h.color=t.fromArray(f).getHex();break;case"colorSpecular":h.specular=t.fromArray(f).getHex();break;case"colorEmissive":h.emissive=t.fromArray(f).getHex();break;case"specularCoef":h.shininess=f;break;case"shading":f.toLowerCase()==="basic"&&(h.type="MeshBasicMaterial"),f.toLowerCase()==="phong"&&(h.type="MeshPhongMaterial"),f.toLowerCase()==="standard"&&(h.type="MeshStandardMaterial");break;case"mapDiffuse":h.map=u(f,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);break;case"mapDiffuseRepeat":case"mapDiffuseOffset":case"mapDiffuseWrap":case"mapDiffuseAnisotropy":break;case"mapEmissive":h.emissiveMap=u(f,a.mapEmissiveRepeat,a.mapEmissiveOffset,a.mapEmissiveWrap,a.mapEmissiveAnisotropy);break;case"mapEmissiveRepeat":case"mapEmissiveOffset":case"mapEmissiveWrap":case"mapEmissiveAnisotropy":break;case"mapLight":h.lightMap=u(f,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);break;case"mapLightRepeat":case"mapLightOffset":case"mapLightWrap":case"mapLightAnisotropy":break;case"mapAO":h.aoMap=u(f,a.mapAORepeat,a.mapAOOffset,a.mapAOWrap,a.mapAOAnisotropy);break;case"mapAORepeat":case"mapAOOffset":case"mapAOWrap":case"mapAOAnisotropy":break;case"mapBump":h.bumpMap=u(f,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);break;case"mapBumpScale":h.bumpScale=f;break;case"mapBumpRepeat":case"mapBumpOffset":case"mapBumpWrap":case"mapBumpAnisotropy":break;case"mapNormal":h.normalMap=u(f,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);break;case"mapNormalFactor":h.normalScale=f;break;case"mapNormalRepeat":case"mapNormalOffset":case"mapNormalWrap":case"mapNormalAnisotropy":break;case"mapSpecular":h.specularMap=u(f,a.mapSpecularRepeat,a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);break;case"mapSpecularRepeat":case"mapSpecularOffset":case"mapSpecularWrap":case"mapSpecularAnisotropy":break;case"mapMetalness":h.metalnessMap=u(f,a.mapMetalnessRepeat,a.mapMetalnessOffset,a.mapMetalnessWrap,a.mapMetalnessAnisotropy);break;case"mapMetalnessRepeat":case"mapMetalnessOffset":case"mapMetalnessWrap":case"mapMetalnessAnisotropy":break;case"mapRoughness":h.roughnessMap=u(f,a.mapRoughnessRepeat,a.mapRoughnessOffset,a.mapRoughnessWrap,a.mapRoughnessAnisotropy);break;case"mapRoughnessRepeat":case"mapRoughnessOffset":case"mapRoughnessWrap":case"mapRoughnessAnisotropy":break;case"mapAlpha":h.alphaMap=u(f,a.mapAlphaRepeat,a.mapAlphaOffset,a.mapAlphaWrap,a.mapAlphaAnisotropy);break;case"mapAlphaRepeat":case"mapAlphaOffset":case"mapAlphaWrap":case"mapAlphaAnisotropy":break;case"flipSided":h.side=ft;break;case"doubleSided":h.side=rn;break;case"transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),h.opacity=f;break;case"depthTest":case"depthWrite":case"colorWrite":case"opacity":case"reflectivity":case"transparent":case"visible":case"wireframe":h[l]=f;break;case"vertexColors":f===!0&&(h.vertexColors=ri),f==="face"&&(h.vertexColors=Qs);break;default:console.error("THREE.Loader.createMaterial: Unsupported",l,f);break}}return h.type==="MeshBasicMaterial"&&delete h.emissive,h.type!=="MeshPhongMaterial"&&delete h.specular,h.opacity<1&&(h.transparent=!0),i.setTextures(c),i.parse(h)}}()});var fn,Bc={getContext:function(){return fn===void 0&&(fn=new(window.AudioContext||window.webkitAudioContext)),fn},setContext:function(e){fn=e}};function Uc(e){this.manager=e!==void 0?e:Rt}Object.assign(Uc.prototype,{load:function(e,t,r,i){var n=new ir(this.manager);n.setResponseType("arraybuffer"),n.setPath(this.path),n.load(e,function(a){var o=a.slice(0),s=Bc.getContext();s.decodeAudioData(o,function(c){t(c)})},r,i)},setPath:function(e){return this.path=e,this}});function Xp(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ye,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ye,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1}Object.assign(Xp.prototype,{update:function(){var e,t,r,i,n,a,o,s,c=new fe,u=new fe;return function(l){var f=e!==this||t!==l.focus||r!==l.fov||i!==l.aspect*this.aspect||n!==l.near||a!==l.far||o!==l.zoom||s!==this.eyeSep;if(f){e=this,t=l.focus,r=l.fov,i=l.aspect*this.aspect,n=l.near,a=l.far,o=l.zoom;var d=l.projectionMatrix.clone();s=this.eyeSep/2;var p=s*n/t,m=n*Math.tan(ge.DEG2RAD*r*.5)/o,v,g;u.elements[12]=-s,c.elements[12]=s,v=-m*i+p,g=m*i+p,d.elements[0]=2*n/(g-v),d.elements[8]=(g+v)/(g-v),this.cameraL.projectionMatrix.copy(d),v=-m*i-p,g=m*i-p,d.elements[0]=2*n/(g-v),d.elements[8]=(g+v)/(g-v),this.cameraR.projectionMatrix.copy(d)}this.cameraL.matrixWorld.copy(l.matrixWorld).multiply(u),this.cameraR.matrixWorld.copy(l.matrixWorld).multiply(c)}}()});function ta(e,t,r,i){$.call(this),this.type="CubeCamera";var n=90,a=1,o=new Ye(n,a,e,t);o.up.set(0,-1,0),o.lookAt(new b(1,0,0)),this.add(o);var s=new Ye(n,a,e,t);s.up.set(0,-1,0),s.lookAt(new b(-1,0,0)),this.add(s);var c=new Ye(n,a,e,t);c.up.set(0,0,1),c.lookAt(new b(0,1,0)),this.add(c);var u=new Ye(n,a,e,t);u.up.set(0,0,-1),u.lookAt(new b(0,-1,0)),this.add(u);var h=new Ye(n,a,e,t);h.up.set(0,-1,0),h.lookAt(new b(0,0,1)),this.add(h);var l=new Ye(n,a,e,t);l.up.set(0,-1,0),l.lookAt(new b(0,0,-1)),this.add(l),i=i||{format:xr,magFilter:ot,minFilter:ot},this.renderTarget=new yi(r,r,i),this.renderTarget.texture.name="CubeCamera",this.update=function(f,d){this.parent===null&&this.updateMatrixWorld();var p=f.getRenderTarget(),m=this.renderTarget,v=m.texture.generateMipmaps;m.texture.generateMipmaps=!1,m.activeCubeFace=0,f.render(d,o,m),m.activeCubeFace=1,f.render(d,s,m),m.activeCubeFace=2,f.render(d,c,m),m.activeCubeFace=3,f.render(d,u,m),m.activeCubeFace=4,f.render(d,h,m),m.texture.generateMipmaps=v,m.activeCubeFace=5,f.render(d,l,m),f.setRenderTarget(p)},this.clear=function(f,d,p,m){for(var v=f.getRenderTarget(),g=this.renderTarget,_=0;_<6;_++)g.activeCubeFace=_,f.setRenderTarget(g),f.clear(d,p,m);f.setRenderTarget(v)}}ta.prototype=Object.create($.prototype);ta.prototype.constructor=ta;function Gc(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Object.assign(Gc.prototype,{start:function(){this.startTime=(typeof performance=="undefined"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){var e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var t=(typeof performance=="undefined"?Date:performance).now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}});function Is(){$.call(this),this.type="AudioListener",this.context=Bc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0}Is.prototype=Object.assign(Object.create($.prototype),{constructor:Is,getInput:function(){return this.gain},removeFilter:function(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this},updateMatrixWorld:function(){var e=new b,t=new rt,r=new b,i=new b,n=new Gc;return function(o){$.prototype.updateMatrixWorld.call(this,o);var s=this.context.listener,c=this.up;if(this.timeDelta=n.getDelta(),this.matrixWorld.decompose(e,t,r),i.set(0,0,-1).applyQuaternion(t),s.positionX){var u=this.context.currentTime+this.timeDelta;s.positionX.linearRampToValueAtTime(e.x,u),s.positionY.linearRampToValueAtTime(e.y,u),s.positionZ.linearRampToValueAtTime(e.z,u),s.forwardX.linearRampToValueAtTime(i.x,u),s.forwardY.linearRampToValueAtTime(i.y,u),s.forwardZ.linearRampToValueAtTime(i.z,u),s.upX.linearRampToValueAtTime(c.x,u),s.upY.linearRampToValueAtTime(c.y,u),s.upZ.linearRampToValueAtTime(c.z,u)}else s.setPosition(e.x,e.y,e.z),s.setOrientation(i.x,i.y,i.z,c.x,c.y,c.z)}}()});function qi(e){$.call(this),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.startTime=0,this.offset=0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this.filters=[]}qi.prototype=Object.assign(Object.create($.prototype),{constructor:qi,getOutput:function(){return this.gain},setNodeSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this},setMediaElementSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this},setBuffer:function(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}var e=this.context.createBufferSource();return e.buffer=this.buffer,e.detune.value=this.detune,e.loop=this.loop,e.onended=this.onEnded.bind(this),e.playbackRate.setValueAtTime(this.playbackRate,this.startTime),this.startTime=this.context.currentTime,e.start(this.startTime,this.offset),this.isPlaying=!0,this.source=e,this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this.source.stop(),this.source.onended=null,this.offset+=(this.context.currentTime-this.startTime)*this.playbackRate,this.isPlaying=!1),this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.source.stop(),this.source.onended=null,this.offset=0,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(e){return e||(e=[]),this.isPlaying===!0?(this.disconnect(),this.filters=e,this.connect()):this.filters=e,this},setDetune:function(e){return this.detune=e,this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(e){return this.setFilters(e?[e]:[])},setPlaybackRate:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},setVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}});function Os(e){qi.call(this,e),this.panner=this.context.createPanner(),this.panner.connect(this.gain)}Os.prototype=Object.assign(Object.create(qi.prototype),{constructor:Os,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(e){return this.panner.refDistance=e,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(e){return this.panner.rolloffFactor=e,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(e){return this.panner.distanceModel=e,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(e){return this.panner.maxDistance=e,this},setDirectionalCone:function(e,t,r){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=r,this},updateMatrixWorld:function(){var e=new b,t=new rt,r=new b,i=new b;return function(a){if($.prototype.updateMatrixWorld.call(this,a),this.isPlaying!==!1){this.matrixWorld.decompose(e,t,r),i.set(0,0,1).applyQuaternion(t);var o=this.panner;if(o.positionX){var s=this.context.currentTime+this.listener.timeDelta;o.positionX.linearRampToValueAtTime(e.x,s),o.positionY.linearRampToValueAtTime(e.y,s),o.positionZ.linearRampToValueAtTime(e.z,s),o.orientationX.linearRampToValueAtTime(i.x,s),o.orientationY.linearRampToValueAtTime(i.y,s),o.orientationZ.linearRampToValueAtTime(i.z,s)}else o.setPosition(e.x,e.y,e.z),o.setOrientation(i.x,i.y,i.z)}}}()});function zc(e,t){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t!==void 0?t:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}Object.assign(zc.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){for(var e=0,t=this.getFrequencyData(),r=0;r<t.length;r++)e+=t[r];return e/t.length}});function Hc(e,t,r){this.binding=e,this.valueSize=r;var i=Float64Array,n;switch(t){case"quaternion":n=this._slerp;break;case"string":case"bool":i=Array,n=this._select;break;default:n=this._lerp}this.buffer=new i(r*4),this._mixBufferRegion=n,this.cumulativeWeight=0,this.useCount=0,this.referenceCount=0}Object.assign(Hc.prototype,{accumulate:function(e,t){var r=this.buffer,i=this.valueSize,n=e*i+i,a=this.cumulativeWeight;if(a===0){for(var o=0;o!==i;++o)r[n+o]=r[o];a=t}else{a+=t;var s=t/a;this._mixBufferRegion(r,n,0,s,i)}this.cumulativeWeight=a},apply:function(e){var t=this.valueSize,r=this.buffer,i=e*t+t,n=this.cumulativeWeight,a=this.binding;if(this.cumulativeWeight=0,n<1){var o=t*3;this._mixBufferRegion(r,i,o,1-n,t)}for(var s=t,c=t+t;s!==c;++s)if(r[s]!==r[s+t]){a.setValue(r,i);break}},saveOriginalState:function(){var e=this.binding,t=this.buffer,r=this.valueSize,i=r*3;e.getValue(t,i);for(var n=r,a=i;n!==a;++n)t[n]=t[i+n%r];this.cumulativeWeight=0},restoreOriginalState:function(){var e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_select:function(e,t,r,i,n){if(i>=.5)for(var a=0;a!==n;++a)e[t+a]=e[r+a]},_slerp:function(e,t,r,i){rt.slerpFlat(e,t,e,t,e,r,i)},_lerp:function(e,t,r,i,n){for(var a=1-i,o=0;o!==n;++o){var s=t+o;e[s]=e[s]*a+e[r+o]*i}}});var Ra="\\[\\]\\.:\\/";function Vc(e,t,r){var i=r||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}Object.assign(Vc.prototype,{getValue:function(e,t){this.bind();var r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(e,t)},setValue:function(e,t){for(var r=this._bindings,i=this._targetGroup.nCachedObjects_,n=r.length;i!==n;++i)r[i].setValue(e,t)},bind:function(){for(var e=this._bindings,t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()},unbind:function(){for(var e=this._bindings,t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}});function vt(e,t,r){this.path=t,this.parsedPath=r||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Object.assign(vt,{Composite:Vc,create:function(e,t,r){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,r):new vt(e,t,r)},sanitizeNodeName:function(){var e=new RegExp("["+Ra+"]","g");return function(r){return r.replace(/\s/g,"_").replace(e,"")}}(),parseTrackName:function(){var e="[^"+Ra+"]",t="[^"+Ra.replace("\\.","")+"]",r=/((?:WC+[\/:])*)/.source.replace("WC",e),i=/(WCOD+)?/.source.replace("WCOD",t),n=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",e),a=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",e),o=new RegExp("^"+r+i+n+a+"$"),s=["material","materials","bones"];return function(u){var h=o.exec(u);if(!h)throw new Error("PropertyBinding: Cannot parse trackName: "+u);var l={nodeName:h[2],objectName:h[3],objectIndex:h[4],propertyName:h[5],propertyIndex:h[6]},f=l.nodeName&&l.nodeName.lastIndexOf(".");if(f!==void 0&&f!==-1){var d=l.nodeName.substring(f+1);s.indexOf(d)!==-1&&(l.nodeName=l.nodeName.substring(0,f),l.objectName=d)}if(l.propertyName===null||l.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+u);return l}}(),findNode:function(e,t){if(!t||t===""||t==="root"||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){var r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){var i=function(a){for(var o=0;o<a.length;o++){var s=a[o];if(s.name===t||s.uuid===t)return s;var c=i(s.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}});Object.assign(vt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,r){t[r]=this.node[this.propertyName]},function(t,r){for(var i=this.resolvedProperty,n=0,a=i.length;n!==a;++n)t[r++]=i[n]},function(t,r){t[r]=this.resolvedProperty[this.propertyIndex]},function(t,r){this.resolvedProperty.toArray(t,r)}],SetterByBindingTypeAndVersioning:[[function(t,r){this.targetObject[this.propertyName]=t[r]},function(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0},function(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,r){for(var i=this.resolvedProperty,n=0,a=i.length;n!==a;++n)i[n]=t[r++]},function(t,r){for(var i=this.resolvedProperty,n=0,a=i.length;n!==a;++n)i[n]=t[r++];this.targetObject.needsUpdate=!0},function(t,r){for(var i=this.resolvedProperty,n=0,a=i.length;n!==a;++n)i[n]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,r){this.resolvedProperty[this.propertyIndex]=t[r]},function(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0},function(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,r){this.resolvedProperty.fromArray(t,r)},function(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0},function(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,r){this.bind(),this.getValue(t,r)},setValue:function(t,r){this.bind(),this.setValue(t,r)},bind:function(){var e=this.node,t=this.parsedPath,r=t.objectName,i=t.propertyName,n=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(r){var a=t.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(var o=0;o<e.length;o++)if(e[o].name===a){a=o;break}break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(a!==void 0){if(e[a]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}var s=e[i];if(s===void 0){var c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}var u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);var h=this.BindingType.Direct;if(n!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}for(var o=0;o<this.node.geometry.morphAttributes.position.length;o++)if(e.geometry.morphAttributes.position[o].name===n){n=o;break}}else{if(!e.geometry.morphTargets){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",this);return}for(var o=0;o<this.node.geometry.morphTargets.length;o++)if(e.geometry.morphTargets[o].name===n){n=o;break}}}h=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(h=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][u]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});//!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(vt.prototype,{_getValue_unbound:vt.prototype.getValue,_setValue_unbound:vt.prototype.setValue});function jp(){this.uuid=ge.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;var e={};this._indicesByUUID=e;for(var t=0,r=arguments.length;t!==r;++t)e[arguments[t].uuid]=t;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};var i=this;this.stats={objects:{get total(){return i._objects.length},get inUse(){return this.total-i.nCachedObjects_}},get bindingsPerObject(){return i._bindings.length}}}Object.assign(jp.prototype,{isAnimationObjectGroup:!0,add:function(){for(var e=this._objects,t=e.length,r=this.nCachedObjects_,i=this._indicesByUUID,n=this._paths,a=this._parsedPaths,o=this._bindings,s=o.length,c=void 0,u=0,h=arguments.length;u!==h;++u){var l=arguments[u],f=l.uuid,d=i[f];if(d===void 0){d=t++,i[f]=d,e.push(l);for(var p=0,m=s;p!==m;++p)o[p].push(new vt(l,n[p],a[p]))}else if(d<r){c=e[d];var v=--r,g=e[v];i[g.uuid]=d,e[d]=g,i[f]=v,e[v]=l;for(var p=0,m=s;p!==m;++p){var _=o[p],w=_[v],y=_[d];_[d]=w,y===void 0&&(y=new vt(l,n[p],a[p])),_[v]=y}}else e[d]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=r},remove:function(){for(var e=this._objects,t=this.nCachedObjects_,r=this._indicesByUUID,i=this._bindings,n=i.length,a=0,o=arguments.length;a!==o;++a){var s=arguments[a],c=s.uuid,u=r[c];if(u!==void 0&&u>=t){var h=t++,l=e[h];r[l.uuid]=u,e[u]=l,r[c]=h,e[h]=s;for(var f=0,d=n;f!==d;++f){var p=i[f],m=p[h],v=p[u];p[u]=m,p[h]=v}}}this.nCachedObjects_=t},uncache:function(){for(var e=this._objects,t=e.length,r=this.nCachedObjects_,i=this._indicesByUUID,n=this._bindings,a=n.length,o=0,s=arguments.length;o!==s;++o){var c=arguments[o],u=c.uuid,h=i[u];if(h!==void 0)if(delete i[u],h<r){var l=--r,f=e[l],d=--t,p=e[d];i[f.uuid]=h,e[h]=f,i[p.uuid]=l,e[l]=p,e.pop();for(var m=0,v=a;m!==v;++m){var g=n[m],_=g[l],w=g[d];g[h]=_,g[l]=w,g.pop()}}else{var d=--t,p=e[d];i[p.uuid]=h,e[h]=p,e.pop();for(var m=0,v=a;m!==v;++m){var g=n[m];g[h]=g[d],g.pop()}}}this.nCachedObjects_=r},subscribe_:function(e,t){var r=this._bindingsIndicesByPath,i=r[e],n=this._bindings;if(i!==void 0)return n[i];var a=this._paths,o=this._parsedPaths,s=this._objects,c=s.length,u=this.nCachedObjects_,h=new Array(c);i=n.length,r[e]=i,a.push(e),o.push(t),n.push(h);for(var l=u,f=s.length;l!==f;++l){var d=s[l];h[l]=new vt(d,e,t)}return h},unsubscribe_:function(e){var t=this._bindingsIndicesByPath,r=t[e];if(r!==void 0){var i=this._paths,n=this._parsedPaths,a=this._bindings,o=a.length-1,s=a[o],c=e[o];t[c]=r,a[r]=s,a.pop(),n[r]=n[o],n.pop(),i[r]=i[o],i.pop()}}});function kc(e,t,r){this._mixer=e,this._clip=t,this._localRoot=r||null;for(var i=t.tracks,n=i.length,a=new Array(n),o={endingStart:Nr,endingEnd:Nr},s=0;s!==n;++s){var c=i[s].createInterpolant(null);a[s]=c,c.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new Array(n),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ch,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Object.assign(kc.prototype,{play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(e){return this._startTime=e,this},setLoop:function(e,t){return this.loop=e,this.repetitions=t,this},setEffectiveWeight:function(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(e){return this._scheduleFading(e,0,1)},fadeOut:function(e){return this._scheduleFading(e,1,0)},crossFadeFrom:function(e,t,r){if(e.fadeOut(t),this.fadeIn(t),r){var i=this._clip.duration,n=e._clip.duration,a=n/i,o=i/n;e.warp(1,a,t),this.warp(o,1,t)}return this},crossFadeTo:function(e,t,r){return e.crossFadeFrom(this,t,r)},stopFading:function(){var e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},setEffectiveTimeScale:function(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(e){return this.timeScale=this._clip.duration/e,this.stopWarping()},syncWith:function(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()},halt:function(e){return this.warp(this._effectiveTimeScale,0,e)},warp:function(e,t,r){var i=this._mixer,n=i.time,a=this._timeScaleInterpolant,o=this.timeScale;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);var s=a.parameterPositions,c=a.sampleValues;return s[0]=n,s[1]=n+r,c[0]=e/o,c[1]=t/o,this},stopWarping:function(){var e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(e,t,r,i){if(!this.enabled){this._updateWeight(e);return}var n=this._startTime;if(n!==null){var a=(e-n)*r;if(a<0||r===0)return;this._startTime=null,t=r*a}t*=this._updateTimeScale(e);var o=this._updateTime(t),s=this._updateWeight(e);if(s>0)for(var c=this._interpolants,u=this._propertyBindings,h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulate(i,s)},_updateWeight:function(e){var t=0;if(this.enabled){t=this.weight;var r=this._weightInterpolant;if(r!==null){var i=r.evaluate(e)[0];t*=i,e>r.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t},_updateTimeScale:function(e){var t=0;if(!this.paused){t=this.timeScale;var r=this._timeScaleInterpolant;if(r!==null){var i=r.evaluate(e)[0];t*=i,e>r.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t},_updateTime:function(e){var t=this.time+e,r=this._clip.duration,i=this.loop,n=this._loopCount,a=i===Ph;if(e===0)return n===-1?t:a&&(n&1)===1?r-t:t;if(i===Rh){n===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(t>=r)t=r;else if(t<0)t=0;else break e;this.clampWhenFinished?this.paused=!0:this.enabled=!1,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(n===-1&&(e>=0?(n=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),t>=r||t<0){var o=Math.floor(t/r);t-=r*o,n+=Math.abs(o);var s=this.repetitions-n;if(s<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,t=e>0?r:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(s===1){var c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}if(a&&(n&1)===1)return this.time=t,r-t}return this.time=t,t},_setEndings:function(e,t,r){var i=this._interpolantSettings;r?(i.endingStart=Ir,i.endingEnd=Ir):(e?i.endingStart=this.zeroSlopeAtStart?Ir:Nr:i.endingStart=bn,t?i.endingEnd=this.zeroSlopeAtEnd?Ir:Nr:i.endingEnd=bn)},_scheduleFading:function(e,t,r){var i=this._mixer,n=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);var o=a.parameterPositions,s=a.sampleValues;return o[0]=n,s[0]=t,o[1]=n+e,s[1]=r,this}});function Ds(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Ds.prototype=Object.assign(Object.create(pr.prototype),{constructor:Ds,_bindAction:function(e,t){var r=e._localRoot||this._root,i=e._clip.tracks,n=i.length,a=e._propertyBindings,o=e._interpolants,s=r.uuid,c=this._bindingsByRootAndName,u=c[s];u===void 0&&(u={},c[s]=u);for(var h=0;h!==n;++h){var l=i[h],f=l.name,d=u[f];if(d!==void 0)a[h]=d;else{if(d=a[h],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,s,f));continue}var p=t&&t._propertyBindings[h].binding.parsedPath;d=new Hc(vt.create(r,f,p),l.ValueTypeName,l.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,s,f),a[h]=d}o[h].resultBuffer=d.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){var t=(e._localRoot||this._root).uuid,r=e._clip.uuid,i=this._actionsByClip[r];this._bindAction(e,i&&i.knownActions[0]),this._addInactiveAction(e,r,t)}for(var n=e._propertyBindings,a=0,o=n.length;a!==o;++a){var s=n[a];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){for(var t=e._propertyBindings,r=0,i=t.length;r!==i;++r){var n=t[r];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;var e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){var t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,r){var i=this._actions,n=this._actionsByClip,a=n[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,n[t]=a;else{var o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[r]=e},_removeInactiveAction:function(e){var t=this._actions,r=t[t.length-1],i=e._cacheIndex;r._cacheIndex=i,t[i]=r,t.pop(),e._cacheIndex=null;var n=e._clip.uuid,a=this._actionsByClip,o=a[n],s=o.knownActions,c=s[s.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,s[u]=c,s.pop(),e._byClipCacheIndex=null;var h=o.actionByRoot,l=(e._localRoot||this._root).uuid;delete h[l],s.length===0&&delete a[n],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){for(var t=e._propertyBindings,r=0,i=t.length;r!==i;++r){var n=t[r];--n.referenceCount===0&&this._removeInactiveBinding(n)}},_lendAction:function(e){var t=this._actions,r=e._cacheIndex,i=this._nActiveActions++,n=t[i];e._cacheIndex=i,t[i]=e,n._cacheIndex=r,t[r]=n},_takeBackAction:function(e){var t=this._actions,r=e._cacheIndex,i=--this._nActiveActions,n=t[i];e._cacheIndex=i,t[i]=e,n._cacheIndex=r,t[r]=n},_addInactiveBinding:function(e,t,r){var i=this._bindingsByRootAndName,n=i[t],a=this._bindings;n===void 0&&(n={},i[t]=n),n[r]=e,e._cacheIndex=a.length,a.push(e)},_removeInactiveBinding:function(e){var t=this._bindings,r=e.binding,i=r.rootNode.uuid,n=r.path,a=this._bindingsByRootAndName,o=a[i],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[n];e:{for(var u in o)break e;delete a[i]}},_lendBinding:function(e){var t=this._bindings,r=e._cacheIndex,i=this._nActiveBindings++,n=t[i];e._cacheIndex=i,t[i]=e,n._cacheIndex=r,t[r]=n},_takeBackBinding:function(e){var t=this._bindings,r=e._cacheIndex,i=--this._nActiveBindings,n=t[i];e._cacheIndex=i,t[i]=e,n._cacheIndex=r,t[r]=n},_lendControlInterpolant:function(){var e=this._controlInterpolants,t=this._nActiveControlInterpolants++,r=e[t];return r===void 0&&(r=new $n(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),r.__cacheIndex=t,e[t]=r),r},_takeBackControlInterpolant:function(e){var t=this._controlInterpolants,r=e.__cacheIndex,i=--this._nActiveControlInterpolants,n=t[i];e.__cacheIndex=i,t[i]=e,n.__cacheIndex=r,t[r]=n},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,t){var r=t||this._root,i=r.uuid,n=typeof e=="string"?Ut.findByName(r,e):e,a=n!==null?n.uuid:e,o=this._actionsByClip[a],s=null;if(o!==void 0){var c=o.actionByRoot[i];if(c!==void 0)return c;s=o.knownActions[0],n===null&&(n=s._clip)}if(n===null)return null;var u=new kc(this,n,t);return this._bindAction(u,s),this._addInactiveAction(u,a,i),u},existingAction:function(e,t){var r=t||this._root,i=r.uuid,n=typeof e=="string"?Ut.findByName(r,e):e,a=n?n.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){var e=this._actions,t=this._nActiveActions,r=this._bindings,i=this._nActiveBindings;this._nActiveActions=0,this._nActiveBindings=0;for(var n=0;n!==t;++n)e[n].reset();for(var n=0;n!==i;++n)r[n].useCount=0;return this},update:function(e){e*=this.timeScale;for(var t=this._actions,r=this._nActiveActions,i=this.time+=e,n=Math.sign(e),a=this._accuIndex^=1,o=0;o!==r;++o){var s=t[o];s._update(i,e,n,a)}for(var c=this._bindings,u=this._nActiveBindings,o=0;o!==u;++o)c[o].apply(a);return this},getRoot:function(){return this._root},uncacheClip:function(e){var t=this._actions,r=e.uuid,i=this._actionsByClip,n=i[r];if(n!==void 0){for(var a=n.knownActions,o=0,s=a.length;o!==s;++o){var c=a[o];this._deactivateAction(c);var u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[r]}},uncacheRoot:function(e){var t=e.uuid,r=this._actionsByClip;for(var i in r){var n=r[i].actionByRoot,a=n[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}var o=this._bindingsByRootAndName,s=o[t];if(s!==void 0)for(var c in s){var u=s[c];u.restoreOriginalState(),this._removeInactiveBinding(u)}},uncacheAction:function(e,t){var r=this.existingAction(e,t);r!==null&&(this._deactivateAction(r),this._removeInactiveAction(r))}});function go(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}go.prototype.clone=function(){return new go(this.value.clone===void 0?this.value:this.value.clone())};function Fs(){K.call(this),this.type="InstancedBufferGeometry",this.maxInstancedCount=void 0}Fs.prototype=Object.assign(Object.create(K.prototype),{constructor:Fs,isInstancedBufferGeometry:!0,copy:function(e){return K.prototype.copy.call(this,e),this.maxInstancedCount=e.maxInstancedCount,this},clone:function(){return new this.constructor().copy(this)}});function Ns(e,t,r){Gr.call(this,e,t),this.meshPerAttribute=r||1}Ns.prototype=Object.assign(Object.create(Gr.prototype),{constructor:Ns,isInstancedInterleavedBuffer:!0,copy:function(e){return Gr.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this}});function Bs(e,t,r,i){typeof r=="number"&&(i=r,r=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),xe.call(this,e,t,r),this.meshPerAttribute=i||1}Bs.prototype=Object.assign(Object.create(xe.prototype),{constructor:Bs,isInstancedBufferAttribute:!0,copy:function(e){return xe.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this}});function qp(e,t,r,i){this.ray=new ni(e,t),this.near=r||0,this.far=i||1/0,this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Us(e,t){return e.distance-t.distance}function yo(e,t,r,i){if(e.visible!==!1&&(e.raycast(t,r),i===!0))for(var n=e.children,a=0,o=n.length;a<o;a++)yo(n[a],t,r,!0)}Object.assign(qp.prototype,{linePrecision:1,set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize()):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,t,r){var i=r||[];return yo(e,this,i,t),i.sort(Us),i},intersectObjects:function(e,t,r){var i=r||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(var n=0,a=e.length;n<a;n++)yo(e[n],this,i,t);return i.sort(Us),i}});function Yp(e,t,r){return this.radius=e!==void 0?e:1,this.phi=t!==void 0?t:0,this.theta=r!==void 0?r:0,this}Object.assign(Yp.prototype,{set:function(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this},makeSafe:function(){var e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this},setFromVector3:function(e){return this.setFromCartesianCoords(e.x,e.y,e.z)},setFromCartesianCoords:function(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ge.clamp(t/this.radius,-1,1))),this}});function Zp(e,t,r){return this.radius=e!==void 0?e:1,this.theta=t!==void 0?t:0,this.y=r!==void 0?r:0,this}Object.assign(Zp.prototype,{set:function(e,t,r){return this.radius=e,this.theta=t,this.y=r,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this},setFromVector3:function(e){return this.setFromCartesianCoords(e.x,e.y,e.z)},setFromCartesianCoords:function(e,t,r){return this.radius=Math.sqrt(e*e+r*r),this.theta=Math.atan2(e,r),this.y=t,this}});function Wc(e,t){this.min=e!==void 0?e:new V(1/0,1/0),this.max=t!==void 0?t:new V(-1/0,-1/0)}Object.assign(Wc.prototype,{set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromPoints:function(e){this.makeEmpty();for(var t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(){var e=new V;return function(r,i){var n=e.copy(i).multiplyScalar(.5);return this.min.copy(r).sub(n),this.max.copy(r).add(n),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new V),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new V),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new V),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)},clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new V),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(){var e=new V;return function(r){var i=e.copy(r).clamp(this.min,this.max);return i.sub(r).length()}}(),intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});function Xc(e,t){this.start=e!==void 0?e:new b,this.end=t!==void 0?t:new b}Object.assign(Xc.prototype,{set:function(e,t){return this.start.copy(e),this.end.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.start.copy(e.start),this.end.copy(e.end),this},getCenter:function(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new b),e.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new b),e.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new b),this.delta(t).multiplyScalar(e).add(this.start)},closestPointToPointParameter:function(){var e=new b,t=new b;return function(i,n){e.subVectors(i,this.start),t.subVectors(this.end,this.start);var a=t.dot(t),o=t.dot(e),s=o/a;return n&&(s=ge.clamp(s,0,1)),s}}(),closestPointToPoint:function(e,t,r){var i=this.closestPointToPointParameter(e,t);return r===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),r=new b),this.delta(r).multiplyScalar(i).add(this.start)},applyMatrix4:function(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this},equals:function(e){return e.start.equals(this.start)&&e.end.equals(this.end)}});function ra(e){$.call(this),this.material=e,this.render=function(){}}ra.prototype=Object.create($.prototype);ra.prototype.constructor=ra;ra.prototype.isImmediateRenderObject=!0;function ia(e,t,r,i){this.object=e,this.size=t!==void 0?t:1;var n=r!==void 0?r:16711680,a=i!==void 0?i:1,o=0,s=this.object.geometry;s&&s.isGeometry?o=s.faces.length*3:s&&s.isBufferGeometry&&(o=s.attributes.normal.count);var c=new K,u=new Z(o*2*3,3);c.addAttribute("position",u),He.call(this,c,new Ge({color:n,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}ia.prototype=Object.create(He.prototype);ia.prototype.constructor=ia;ia.prototype.update=function(){var e=new b,t=new b,r=new ut;return function(){var n=["a","b","c"];this.object.updateMatrixWorld(!0),r.getNormalMatrix(this.object.matrixWorld);var a=this.object.matrixWorld,o=this.geometry.attributes.position,s=this.object.geometry;if(s&&s.isGeometry)for(var c=s.vertices,u=s.faces,h=0,l=0,f=u.length;l<f;l++)for(var d=u[l],p=0,m=d.vertexNormals.length;p<m;p++){var v=c[d[n[p]]],g=d.vertexNormals[p];e.copy(v).applyMatrix4(a),t.copy(g).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e),o.setXYZ(h,e.x,e.y,e.z),h=h+1,o.setXYZ(h,t.x,t.y,t.z),h=h+1}else if(s&&s.isBufferGeometry)for(var _=s.attributes.position,w=s.attributes.normal,h=0,p=0,m=_.count;p<m;p++)e.set(_.getX(p),_.getY(p),_.getZ(p)).applyMatrix4(a),t.set(w.getX(p),w.getY(p),w.getZ(p)),t.applyMatrix3(r).normalize().multiplyScalar(this.size).add(e),o.setXYZ(h,e.x,e.y,e.z),h=h+1,o.setXYZ(h,t.x,t.y,t.z),h=h+1;o.needsUpdate=!0}}();function Yi(e,t){$.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;for(var r=new K,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],n=0,a=1,o=32;n<o;n++,a++){var s=n/o*Math.PI*2,c=a/o*Math.PI*2;i.push(Math.cos(s),Math.sin(s),1,Math.cos(c),Math.sin(c),1)}r.addAttribute("position",new Z(i,3));var u=new Ge({fog:!1});this.cone=new He(r,u),this.add(this.cone),this.update()}Yi.prototype=Object.create($.prototype);Yi.prototype.constructor=Yi;Yi.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()};Yi.prototype.update=function(){var e=new b;return function(){this.light.updateMatrixWorld();var r=this.light.distance?this.light.distance:1e3,i=r*Math.tan(this.light.angle);this.cone.scale.set(i,i,r),e.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(e),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}();function jc(e){var t=[];e&&e.isBone&&t.push(e);for(var r=0;r<e.children.length;r++)t.push.apply(t,jc(e.children[r]));return t}function Zi(e){for(var t=jc(e),r=new K,i=[],n=[],a=new se(0,0,1),o=new se(0,1,0),s=0;s<t.length;s++){var c=t[s];c.parent&&c.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),n.push(a.r,a.g,a.b),n.push(o.r,o.g,o.b))}r.addAttribute("position",new Z(i,3)),r.addAttribute("color",new Z(n,3));var u=new Ge({vertexColors:ri,depthTest:!1,depthWrite:!1,transparent:!0});He.call(this,r,u),this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}Zi.prototype=Object.create(He.prototype);Zi.prototype.constructor=Zi;Zi.prototype.updateMatrixWorld=function(){var e=new b,t=new fe,r=new fe;return function(n){var a=this.bones,o=this.geometry,s=o.getAttribute("position");r.getInverse(this.root.matrixWorld);for(var c=0,u=0;c<a.length;c++){var h=a[c];h.parent&&h.parent.isBone&&(t.multiplyMatrices(r,h.matrixWorld),e.setFromMatrixPosition(t),s.setXYZ(u,e.x,e.y,e.z),t.multiplyMatrices(r,h.parent.matrixWorld),e.setFromMatrixPosition(t),s.setXYZ(u+1,e.x,e.y,e.z),u+=2)}o.getAttribute("position").needsUpdate=!0,$.prototype.updateMatrixWorld.call(this,n)}}();function Ji(e,t,r){this.light=e,this.light.updateMatrixWorld(),this.color=r;var i=new kr(t,4,2),n=new It({wireframe:!0,fog:!1});ht.call(this,i,n),this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}Ji.prototype=Object.create(ht.prototype);Ji.prototype.constructor=Ji;Ji.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()};Ji.prototype.update=function(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)};function Qi(e,t){this.type="RectAreaLightHelper",this.light=e,this.color=t;var r=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],i=new K;i.addAttribute("position",new Z(r,3)),i.computeBoundingSphere();var n=new Ge({fog:!1});bt.call(this,i,n);var a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],o=new K;o.addAttribute("position",new Z(a,3)),o.computeBoundingSphere(),this.add(new ht(o,new It({side:THREE.BackSide,fog:!1}))),this.update()}Qi.prototype=Object.create(bt.prototype);Qi.prototype.constructor=Qi;Qi.prototype.update=function(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),this.color!==void 0)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var e=this.material.color,t=Math.max(e.r,e.g,e.b);t>1&&e.multiplyScalar(1/t),this.children[0].material.color.copy(this.material.color)}};Qi.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()};function $i(e,t,r){$.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=r;var i=new Hr(t);i.rotateY(Math.PI*.5),this.material=new It({wireframe:!0,fog:!1}),this.color===void 0&&(this.material.vertexColors=ri);var n=i.getAttribute("position"),a=new Float32Array(n.count*3);i.addAttribute("color",new xe(a,3)),this.add(new ht(i,this.material)),this.update()}$i.prototype=Object.create($.prototype);$i.prototype.constructor=$i;$i.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()};$i.prototype.update=function(){var e=new b,t=new se,r=new se;return function(){var n=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{var a=n.geometry.getAttribute("color");t.copy(this.light.color),r.copy(this.light.groundColor);for(var o=0,s=a.count;o<s;o++){var c=o<s/2?t:r;a.setXYZ(o,c.r,c.g,c.b)}a.needsUpdate=!0}n.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate())}}();function na(e,t,r,i){e=e||10,t=t||10,r=new se(r!==void 0?r:4473924),i=new se(i!==void 0?i:8947848);for(var n=t/2,a=e/t,o=e/2,s=[],c=[],u=0,h=0,l=-o;u<=t;u++,l+=a){s.push(-o,0,l,o,0,l),s.push(l,0,-o,l,0,o);var f=u===n?r:i;f.toArray(c,h),h+=3,f.toArray(c,h),h+=3,f.toArray(c,h),h+=3,f.toArray(c,h),h+=3}var d=new K;d.addAttribute("position",new Z(s,3)),d.addAttribute("color",new Z(c,3));var p=new Ge({vertexColors:ri});He.call(this,d,p)}na.prototype=Object.create(He.prototype);na.prototype.constructor=na;function xo(e,t,r,i,n,a){e=e||10,t=t||16,r=r||8,i=i||64,n=new se(n!==void 0?n:4473924),a=new se(a!==void 0?a:8947848);var o=[],s=[],c,u,h,l,f,d,p;for(l=0;l<=t;l++)h=l/t*(Math.PI*2),c=Math.sin(h)*e,u=Math.cos(h)*e,o.push(0,0,0),o.push(c,0,u),p=l&1?n:a,s.push(p.r,p.g,p.b),s.push(p.r,p.g,p.b);for(l=0;l<=r;l++)for(p=l&1?n:a,d=e-e/r*l,f=0;f<i;f++)h=f/i*(Math.PI*2),c=Math.sin(h)*d,u=Math.cos(h)*d,o.push(c,0,u),s.push(p.r,p.g,p.b),h=(f+1)/i*(Math.PI*2),c=Math.sin(h)*d,u=Math.cos(h)*d,o.push(c,0,u),s.push(p.r,p.g,p.b);var m=new K;m.addAttribute("position",new Z(o,3)),m.addAttribute("color",new Z(s,3));var v=new Ge({vertexColors:ri});He.call(this,m,v)}xo.prototype=Object.create(He.prototype);xo.prototype.constructor=xo;function aa(e,t,r,i){this.object=e,this.size=t!==void 0?t:1;var n=r!==void 0?r:16776960,a=i!==void 0?i:1,o=0,s=this.object.geometry;s&&s.isGeometry?o=s.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");var c=new K,u=new Z(o*2*3,3);c.addAttribute("position",u),He.call(this,c,new Ge({color:n,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}aa.prototype=Object.create(He.prototype);aa.prototype.constructor=aa;aa.prototype.update=function(){var e=new b,t=new b,r=new ut;return function(){this.object.updateMatrixWorld(!0),r.getNormalMatrix(this.object.matrixWorld);for(var n=this.object.matrixWorld,a=this.geometry.attributes.position,o=this.object.geometry,s=o.vertices,c=o.faces,u=0,h=0,l=c.length;h<l;h++){var f=c[h],d=f.normal;e.copy(s[f.a]).add(s[f.b]).add(s[f.c]).divideScalar(3).applyMatrix4(n),t.copy(d).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e),a.setXYZ(u,e.x,e.y,e.z),u=u+1,a.setXYZ(u,t.x,t.y,t.z),u=u+1}a.needsUpdate=!0}}();function Ki(e,t,r){$.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=r,t===void 0&&(t=1);var i=new K;i.addAttribute("position",new Z([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));var n=new Ge({fog:!1});this.lightPlane=new bt(i,n),this.add(this.lightPlane),i=new K,i.addAttribute("position",new Z([0,0,0,0,0,1],3)),this.targetLine=new bt(i,n),this.add(this.targetLine),this.update()}Ki.prototype=Object.create($.prototype);Ki.prototype.constructor=Ki;Ki.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()};Ki.prototype.update=function(){var e=new b,t=new b,r=new b;return function(){e.setFromMatrixPosition(this.light.matrixWorld),t.setFromMatrixPosition(this.light.target.matrixWorld),r.subVectors(t,e),this.lightPlane.lookAt(t),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(t),this.targetLine.scale.z=r.length()}}();function oa(e){var t=new K,r=new Ge({color:16777215,vertexColors:Qs}),i=[],n=[],a={},o=new se(16755200),s=new se(16711680),c=new se(43775),u=new se(16777215),h=new se(3355443);l("n1","n2",o),l("n2","n4",o),l("n4","n3",o),l("n3","n1",o),l("f1","f2",o),l("f2","f4",o),l("f4","f3",o),l("f3","f1",o),l("n1","f1",o),l("n2","f2",o),l("n3","f3",o),l("n4","f4",o),l("p","n1",s),l("p","n2",s),l("p","n3",s),l("p","n4",s),l("u1","u2",c),l("u2","u3",c),l("u3","u1",c),l("c","t",u),l("p","c",h),l("cn1","cn2",h),l("cn3","cn4",h),l("cf1","cf2",h),l("cf3","cf4",h);function l(d,p,m){f(d,m),f(p,m)}function f(d,p){i.push(0,0,0),n.push(p.r,p.g,p.b),a[d]===void 0&&(a[d]=[]),a[d].push(i.length/3-1)}t.addAttribute("position",new Z(i,3)),t.addAttribute("color",new Z(n,3)),He.call(this,t,r),this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update()}oa.prototype=Object.create(He.prototype);oa.prototype.constructor=oa;oa.prototype.update=function(){var e,t,r=new b,i=new $t;function n(a,o,s,c){r.set(o,s,c).unproject(i);var u=t[a];if(u!==void 0)for(var h=e.getAttribute("position"),l=0,f=u.length;l<f;l++)h.setXYZ(u[l],r.x,r.y,r.z)}return function(){e=this.geometry,t=this.pointMap;var o=1,s=1;i.projectionMatrix.copy(this.camera.projectionMatrix),n("c",0,0,-1),n("t",0,0,1),n("n1",-o,-s,-1),n("n2",o,-s,-1),n("n3",-o,s,-1),n("n4",o,s,-1),n("f1",-o,-s,1),n("f2",o,-s,1),n("f3",-o,s,1),n("f4",o,s,1),n("u1",o*.7,s*1.1,-1),n("u2",-o*.7,s*1.1,-1),n("u3",0,s*2,-1),n("cf1",-o,0,1),n("cf2",o,0,1),n("cf3",0,-s,1),n("cf4",0,s,1),n("cn1",-o,0,-1),n("cn2",o,0,-1),n("cn3",0,-s,-1),n("cn4",0,s,-1),e.getAttribute("position").needsUpdate=!0}}();function Tr(e,t){this.object=e,t===void 0&&(t=16776960);var r=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),n=new K;n.setIndex(new xe(r,1)),n.addAttribute("position",new xe(i,3)),He.call(this,n,new Ge({color:t})),this.matrixAutoUpdate=!1,this.update()}Tr.prototype=Object.create(He.prototype);Tr.prototype.constructor=Tr;Tr.prototype.update=function(){var e=new ur;return function(r){if(r!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&e.setFromObject(this.object),!e.isEmpty()){var i=e.min,n=e.max,a=this.geometry.attributes.position,o=a.array;o[0]=n.x,o[1]=n.y,o[2]=n.z,o[3]=i.x,o[4]=n.y,o[5]=n.z,o[6]=i.x,o[7]=i.y,o[8]=n.z,o[9]=n.x,o[10]=i.y,o[11]=n.z,o[12]=n.x,o[13]=n.y,o[14]=i.z,o[15]=i.x,o[16]=n.y,o[17]=i.z,o[18]=i.x,o[19]=i.y,o[20]=i.z,o[21]=n.x,o[22]=i.y,o[23]=i.z,a.needsUpdate=!0,this.geometry.computeBoundingSphere()}}}();Tr.prototype.setFromObject=function(e){return this.object=e,this.update(),this};Tr.prototype.copy=function(e){return He.prototype.copy.call(this,e),this.object=e.object,this};Tr.prototype.clone=function(){return new this.constructor().copy(this)};function sa(e,t){this.type="Box3Helper",this.box=e;var r=t!==void 0?t:16776960,i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],a=new K;a.setIndex(new xe(i,1)),a.addAttribute("position",new Z(n,3)),He.call(this,a,new Ge({color:r})),this.geometry.computeBoundingSphere()}sa.prototype=Object.create(He.prototype);sa.prototype.constructor=sa;sa.prototype.updateMatrixWorld=function(e){var t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),$.prototype.updateMatrixWorld.call(this,e))};function ca(e,t,r){this.type="PlaneHelper",this.plane=e,this.size=t===void 0?1:t;var i=r!==void 0?r:16776960,n=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],a=new K;a.addAttribute("position",new Z(n,3)),a.computeBoundingSphere(),bt.call(this,a,new Ge({color:i}));var o=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],s=new K;s.addAttribute("position",new Z(o,3)),s.computeBoundingSphere(),this.add(new ht(s,new It({color:i,opacity:.2,transparent:!0,depthWrite:!1})))}ca.prototype=Object.create(bt.prototype);ca.prototype.constructor=ca;ca.prototype.updateMatrixWorld=function(e){var t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?ft:tn,this.lookAt(this.plane.normal),$.prototype.updateMatrixWorld.call(this,e)};var dn,Ca;function dr(e,t,r,i,n,a){$.call(this),e===void 0&&(e=new THREE.Vector3(0,0,1)),t===void 0&&(t=new THREE.Vector3(0,0,0)),r===void 0&&(r=1),i===void 0&&(i=16776960),n===void 0&&(n=.2*r),a===void 0&&(a=.2*n),dn===void 0&&(dn=new K,dn.addAttribute("position",new Z([0,0,0,0,1,0],3)),Ca=new fr(0,.5,1,5,1),Ca.translate(0,-.5,0)),this.position.copy(t),this.line=new bt(dn,new Ge({color:i})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ht(Ca,new It({color:i})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(r,n,a)}dr.prototype=Object.create($.prototype);dr.prototype.constructor=dr;dr.prototype.setDirection=function(){var e=new b,t;return function(i){i.y>.99999?this.quaternion.set(0,0,0,1):i.y<-.99999?this.quaternion.set(1,0,0,0):(e.set(i.z,0,-i.x).normalize(),t=Math.acos(i.y),this.quaternion.setFromAxisAngle(e,t))}}();dr.prototype.setLength=function(e,t,r){t===void 0&&(t=.2*e),r===void 0&&(r=.2*t),this.line.scale.set(1,Math.max(0,e-t),1),this.line.updateMatrix(),this.cone.scale.set(r,t,r),this.cone.position.y=e,this.cone.updateMatrix()};dr.prototype.setColor=function(e){this.line.material.color.copy(e),this.cone.material.color.copy(e)};dr.prototype.copy=function(e){return $.prototype.copy.call(this,e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this};dr.prototype.clone=function(){return new this.constructor().copy(this)};function _o(e){e=e||1;var t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new K;i.addAttribute("position",new Z(t,3)),i.addAttribute("color",new Z(r,3));var n=new Ge({vertexColors:ri});He.call(this,i,n)}_o.prototype=Object.create(He.prototype);_o.prototype.constructor=_o;ue.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(ue.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e};Object.assign(ar.prototype,{createPointsGeometry:function(e){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");var t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");var t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var t=new de,r=0,i=e.length;r<i;r++){var n=e[r];t.vertices.push(new b(n.x,n.y,n.z||0))}return t}});Object.assign(Gt.prototype,{fromPoints:function(e){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}});Object.create(At.prototype);Object.create(At.prototype);function qc(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),At.call(this,e),this.type="catmullrom"}qc.prototype=Object.create(At.prototype);Object.assign(qc.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});na.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Zi.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(ea.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Ic.extractUrlBase(e)}});Object.assign(Dc.prototype,{setTexturePath:function(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}});Object.assign(Wc.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(ur.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}});Xc.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)};Object.assign(ge,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),ge.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),ge.ceilPowerOfTwo(e)}});Object.assign(ut.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBuffer:function(e){return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(e)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(fe.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){var e;return function(){return e===void 0&&(e=new b),console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),e.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(e){return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(e)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,r,i,n,a){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,i,r,n,a)}});Jt.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)};rt.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)};Object.assign(ni.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}});Object.assign(dt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}});Object.assign(dt,{barycoordFromPoint:function(e,t,r,i,n){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),dt.getBarycoord(e,t,r,i,n)},normal:function(e,t,r,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),dt.getNormal(e,t,r,i)}});Object.assign(yr.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Vr(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Wr(this,e)}});Object.assign(V.prototype,{fromAttribute:function(e,t,r){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,r)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(b.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,r){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,r)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Fe.prototype,{fromAttribute:function(e,t,r){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,r)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(de.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")}});Object.assign($.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")}});Object.defineProperties($.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.defineProperties(Rn.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Qa.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Cn.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(ue.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}});Ye.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)};Object.defineProperties(Xe.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}});Object.defineProperties(xe.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")}});Object.assign(K.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addDrawCall:function(e,t,r){r!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});Object.defineProperties(K.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.assign(Kt.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(go.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(ve.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new se}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===Zs}}});Object.defineProperties(kt.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Tt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}});Object.assign(Do.prototype,{clearTarget:function(e,t,r,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,r,i)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")}});Object.defineProperties(Do.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(wc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Nt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}});Object.defineProperties(Mc.prototype,{standing:{set:function(){console.warn("THREE.WebVRManager: .standing has been removed.")}},userHeight:{set:function(){console.warn("THREE.WebVRManager: .userHeight has been removed.")}}});qi.prototype.load=function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var t=this,r=new Uc;return r.load(e,function(i){t.setBuffer(i)}),this};zc.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};ta.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)};_r.crossOrigin=void 0;_r.loadTexture=function(e,t,r,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var n=new Fo;n.setCrossOrigin(this.crossOrigin);var a=n.load(e,r,void 0,i);return t&&(a.mapping=t),a};_r.loadTextureCube=function(e,t,r,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var n=new Cc;n.setCrossOrigin(this.crossOrigin);var a=n.load(e,r,void 0,i);return t&&(a.mapping=t),a};_r.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};_r.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};var Pa=!1,Yc;class Jp{constructor(){window.addEventListener("resize",this.resize);const t=new ti(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,-1e4,1e4);t.position.z=0,t.setViewOffset(window.innerWidth,window.innerHeight,0,0,window.innerWidth,window.innerHeight);const r=new Si,i=new Nt(window.innerWidth,window.innerHeight,{minFilter:ot,magFilter:it,format:Ht,type:mi}),n=new zr;n.needsUpdate=!0;const a=new Tt({uniforms:{tDiffuse:{value:n}},vertexShader:`
			varying vec2 vUv;

			void main() {
				vUv = vec2(uv.x, 1.0-uv.y);
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
`,fragmentShader:`
			varying vec2 vUv;
			uniform sampler2D tDiffuse;

			void main() {
				gl_FragColor = texture2D(tDiffuse, vUv);
			}
`});this.material=a;const o=new hr(window.innerWidth,window.innerHeight),s=new ht(o,a);s.position.z=-100,r.add(s);const c=new Do;c.setSize(window.innerWidth,window.innerHeight),c.autoClear=!1;let u=document.createElement("div");u.id="three-game-render",document.body.append(u),u.appendChild(c.domElement),u.style.display="none",this.renderer=c,this.rtTexture=i,this.sceneRTT=r,this.cameraRTT=t,this.gameTexture=n,this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}resize(t){const r=new ti(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,-1e4,1e4);if(t===!0)r.setViewOffset(window.innerWidth,window.innerHeight,0,0,window.innerWidth,window.innerHeight);else{const o=Math.floor(window.innerHeight*10/23);r.setViewOffset(window.innerWidth,window.innerHeight,window.innerWidth/3.8,0,o,window.innerHeight)}this.cameraRTT=r;const i=new Si,n=new hr(window.innerWidth,window.innerHeight),a=new ht(n,this.material);a.position.z=-100,i.add(a),this.sceneRTT=i,this.rtTexture=new Nt(window.innerWidth,window.innerHeight,{minFilter:ot,magFilter:it,format:Ht,type:mi}),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){if(requestAnimationFrame(this.animate),Pa){this.renderer.clear(),this.renderer.render(this.sceneRTT,this.cameraRTT,this.rtTexture,!0);const t=new Uint8Array(window.innerWidth*window.innerHeight*4);this.renderer.readRenderTargetPixels(this.rtTexture,0,0,window.innerWidth,window.innerHeight,t),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight;const r=new Uint8ClampedArray(t.buffer),i=this.canvas.getContext("2d"),n=new ImageData(r,window.innerWidth,window.innerHeight);i.putImageData(n,0,0)}}createTempCanvas(){this.canvas=document.createElement("canvas"),this.canvas.style.display="inline",this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}renderToTarget(t){this.resize(!1),this.canvas=t,Pa=!0}stop(){Pa=!1,this.canvas&&this.canvas.style.display!="none"&&(this.canvas.style.display="none"),this.resize(!0)}}Yc=new Jp;window.MainRender=Yc;new Cu({target:document.getElementById("app")});
