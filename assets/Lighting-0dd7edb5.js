import{j as H,m as Te}from"./framer-motion-860f202b.js";import{r as O}from"./react-vendor-efb55fc6.js";import{R as _e,T as Ge,C as he,P as Fe,M as Ne}from"./three-lib-b6c94a0f.js";const Oe=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Be=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
uniform vec2 uMouse;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                  ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float noise = snoise(vec2(uv.x * 2.0 + uTime * 0.2, uTime * 0.35)) * 0.5 * uAmplitude;
  noise += snoise(vec2(uv.x * 4.0 + uTime * 0.15, uv.y * 2.0)) * 0.25; // Layered noise for depth
  float height = exp(noise);
  height = (uv.y * 1.75 - height + 0.3); // Reduced vertical scale and offset
  float mouseInfluence = length(uMouse - uv) * 0.4; // Subtle mouse interaction
  float intensity = 0.8 * height - mouseInfluence; // Brighter intensity
  
  float midPoint = 0.3;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  auroraColor += auroraColor * 0.4 * (1.0 - mouseInfluence); // Enhanced glow effect
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;function zo(e){const{colorStops:n=["#1E40AF","#10B981","#A855F7"],amplitude:t=.8,blend:r=.7}=e,l=O.useRef(e);l.current=e;const m=O.useRef(null),i=O.useRef({x:0,y:0});return O.useEffect(()=>{const c=m.current;if(!c)return;const o=new _e({alpha:!0,premultipliedAlpha:!0,antialias:!0}),f=o.gl;f.clearColor(0,0,0,0),f.enable(f.BLEND),f.blendFunc(f.ONE,f.ONE_MINUS_SRC_ALPHA),f.canvas.style.backgroundColor="transparent";let g;const y=()=>{if(!c)return;const x=c.offsetWidth,h=c.offsetHeight;o.setSize(x,h),g&&(g.uniforms.uResolution.value=[x,h])};window.addEventListener("resize",y);const M=x=>{if(!c)return;const h=c.getBoundingClientRect();i.current={x:(x.clientX-h.left)/h.width,y:1-(x.clientY-h.top)/h.height}};window.addEventListener("mousemove",M);const A=new Ge(f);A.attributes.uv&&delete A.attributes.uv;const b=n.map(x=>{const h=new he(x);return[h.r,h.g,h.b]});g=new Fe(f,{vertex:Oe,fragment:Be,uniforms:{uTime:{value:0},uAmplitude:{value:t},uColorStops:{value:b},uResolution:{value:[c.offsetWidth,c.offsetHeight]},uBlend:{value:r},uMouse:{value:[.5,.5]}}});const k=new Ne(f,{geometry:A,program:g});c.appendChild(f.canvas);let R=0;const S=x=>{R=requestAnimationFrame(S);const{time:h=x*.01,speed:I=1}=l.current;if(g){g.uniforms.uTime.value=h*I*.1,g.uniforms.uAmplitude.value=l.current.amplitude??.8,g.uniforms.uBlend.value=l.current.blend??r,g.uniforms.uMouse.value=[i.current.x,i.current.y];const T=l.current.colorStops??n;g.uniforms.uColorStops.value=T.map(P=>{const L=new he(P);return[L.r,L.g,L.b]}),o.render({scene:k})}};return R=requestAnimationFrame(S),y(),()=>{var x;cancelAnimationFrame(R),window.removeEventListener("resize",y),window.removeEventListener("mousemove",M),c&&f.canvas.parentNode===c&&c.removeChild(f.canvas),(x=f.getExtension("WEBGL_lose_context"))==null||x.loseContext()}},[t]),H.jsx("div",{ref:m,className:"w-full h-full absolute inset-0 z-0 overflow-hidden"})}function ke(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(n=0;n<l;n++)e[n]&&(t=ke(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function je(){for(var e,n,t=0,r="",l=arguments.length;t<l;t++)(e=arguments[t])&&(n=ke(e))&&(r&&(r+=" "),r+=n);return r}const me="-",Ue=e=>{const n=We(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:i=>{const c=i.split(me);return c[0]===""&&c.length!==1&&c.shift(),Ce(c,n)||Ve(i)},getConflictingClassGroupIds:(i,c)=>{const o=t[i]||[];return c&&r[i]?[...o,...r[i]]:o}}},Ce=(e,n)=>{var i;if(e.length===0)return n.classGroupId;const t=e[0],r=n.nextPart.get(t),l=r?Ce(e.slice(1),r):void 0;if(l)return l;if(n.validators.length===0)return;const m=e.join(me);return(i=n.validators.find(({validator:c})=>c(m)))==null?void 0:i.classGroupId},xe=/^\[(.+)\]$/,Ve=e=>{if(xe.test(e)){const n=xe.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}},We=e=>{const{theme:n,classGroups:t}=e,r={nextPart:new Map,validators:[]};for(const l in t)le(t[l],r,l,n);return r},le=(e,n,t,r)=>{e.forEach(l=>{if(typeof l=="string"){const m=l===""?n:ve(n,l);m.classGroupId=t;return}if(typeof l=="function"){if($e(l)){le(l(r),n,t,r);return}n.validators.push({validator:l,classGroupId:t});return}Object.entries(l).forEach(([m,i])=>{le(i,ve(n,m),t,r)})})},ve=(e,n)=>{let t=e;return n.split(me).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},$e=e=>e.isThemeGetter,He=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,r=new Map;const l=(m,i)=>{t.set(m,i),n++,n>e&&(n=0,r=t,t=new Map)};return{get(m){let i=t.get(m);if(i!==void 0)return i;if((i=r.get(m))!==void 0)return l(m,i),i},set(m,i){t.has(m)?t.set(m,i):l(m,i)}}},ce="!",de=":",De=de.length,Xe=e=>{const{prefix:n,experimentalParseClassName:t}=e;let r=l=>{const m=[];let i=0,c=0,o=0,f;for(let b=0;b<l.length;b++){let k=l[b];if(i===0&&c===0){if(k===de){m.push(l.slice(o,b)),o=b+De;continue}if(k==="/"){f=b;continue}}k==="["?i++:k==="]"?i--:k==="("?c++:k===")"&&c--}const g=m.length===0?l:l.substring(o),y=qe(g),M=y!==g,A=f&&f>o?f-o:void 0;return{modifiers:m,hasImportantModifier:M,baseClassName:y,maybePostfixModifierPosition:A}};if(n){const l=n+de,m=r;r=i=>i.startsWith(l)?m(i.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:i,maybePostfixModifierPosition:void 0}}if(t){const l=r;r=m=>t({className:m,parseClassName:l})}return r},qe=e=>e.endsWith(ce)?e.substring(0,e.length-1):e.startsWith(ce)?e.substring(1):e,Ye=e=>{const n=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const l=[];let m=[];return r.forEach(i=>{i[0]==="["||n[i]?(l.push(...m.sort(),i),m=[]):m.push(i)}),l.push(...m.sort()),l}},Je=e=>({cache:He(e.cacheSize),parseClassName:Xe(e),sortModifiers:Ye(e),...Ue(e)}),Ke=/\s+/,Qe=(e,n)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:m}=n,i=[],c=e.trim().split(Ke);let o="";for(let f=c.length-1;f>=0;f-=1){const g=c[f],{isExternal:y,modifiers:M,hasImportantModifier:A,baseClassName:b,maybePostfixModifierPosition:k}=t(g);if(y){o=g+(o.length>0?" "+o:o);continue}let R=!!k,S=r(R?b.substring(0,k):b);if(!S){if(!R){o=g+(o.length>0?" "+o:o);continue}if(S=r(b),!S){o=g+(o.length>0?" "+o:o);continue}R=!1}const x=m(M).join(":"),h=A?x+ce:x,I=h+S;if(i.includes(I))continue;i.push(I);const T=l(S,R);for(let P=0;P<T.length;++P){const L=T[P];i.push(h+L)}o=g+(o.length>0?" "+o:o)}return o};function Ze(){let e=0,n,t,r="";for(;e<arguments.length;)(n=arguments[e++])&&(t=Se(n))&&(r&&(r+=" "),r+=t);return r}const Se=e=>{if(typeof e=="string")return e;let n,t="";for(let r=0;r<e.length;r++)e[r]&&(n=Se(e[r]))&&(t&&(t+=" "),t+=n);return t};function eo(e,...n){let t,r,l,m=i;function i(o){const f=n.reduce((g,y)=>y(g),e());return t=Je(f),r=t.cache.get,l=t.cache.set,m=c,c(o)}function c(o){const f=r(o);if(f)return f;const g=Qe(o,t);return l(o,g),g}return function(){return m(Ze.apply(null,arguments))}}const v=e=>{const n=t=>t[e]||[];return n.isThemeGetter=!0,n},ze=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ae=/^\((?:(\w[\w-]*):)?(.+)\)$/i,oo=/^\d+\/\d+$/,ro=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,to=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,no=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,so=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ao=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$=e=>oo.test(e),p=e=>!!e&&!Number.isNaN(Number(e)),N=e=>!!e&&Number.isInteger(Number(e)),ae=e=>e.endsWith("%")&&p(e.slice(0,-1)),F=e=>ro.test(e),io=()=>!0,lo=e=>to.test(e)&&!no.test(e),Re=()=>!1,co=e=>so.test(e),mo=e=>ao.test(e),uo=e=>!s(e)&&!a(e),po=e=>D(e,Le,Re),s=e=>ze.test(e),j=e=>D(e,Ee,lo),ie=e=>D(e,xo,p),we=e=>D(e,Me,Re),fo=e=>D(e,Pe,mo),ee=e=>D(e,Ie,co),a=e=>Ae.test(e),Y=e=>X(e,Ee),go=e=>X(e,vo),ye=e=>X(e,Me),bo=e=>X(e,Le),ho=e=>X(e,Pe),oe=e=>X(e,Ie,!0),D=(e,n,t)=>{const r=ze.exec(e);return r?r[1]?n(r[1]):t(r[2]):!1},X=(e,n,t=!1)=>{const r=Ae.exec(e);return r?r[1]?n(r[1]):t:!1},Me=e=>e==="position"||e==="percentage",Pe=e=>e==="image"||e==="url",Le=e=>e==="length"||e==="size"||e==="bg-size",Ee=e=>e==="length",xo=e=>e==="number",vo=e=>e==="family-name",Ie=e=>e==="shadow",wo=()=>{const e=v("color"),n=v("font"),t=v("text"),r=v("font-weight"),l=v("tracking"),m=v("leading"),i=v("breakpoint"),c=v("container"),o=v("spacing"),f=v("radius"),g=v("shadow"),y=v("inset-shadow"),M=v("text-shadow"),A=v("drop-shadow"),b=v("blur"),k=v("perspective"),R=v("aspect"),S=v("ease"),x=v("animate"),h=()=>["auto","avoid","all","avoid-page","page","left","right","column"],I=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],T=()=>[...I(),a,s],P=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto","contain","none"],u=()=>[a,s,o],E=()=>[$,"full","auto",...u()],q=()=>[N,"none","subgrid",a,s],U=()=>["auto",{span:["full",N,a,s]},N,a,s],V=()=>[N,"auto",a,s],_=()=>["auto","min","max","fr",a,s],te=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],W=()=>["start","end","center","stretch","center-safe","end-safe"],G=()=>["auto",...u()],B=()=>[$,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...u()],d=()=>[e,a,s],ue=()=>[...I(),ye,we,{position:[a,s]}],pe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],fe=()=>["auto","cover","contain",bo,po,{size:[a,s]}],ne=()=>[ae,Y,j],C=()=>["","none","full",f,a,s],z=()=>["",p,Y,j],J=()=>["solid","dashed","dotted","double"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],w=()=>[p,ae,ye,we],be=()=>["","none",b,a,s],K=()=>["none",p,a,s],Q=()=>["none",p,a,s],se=()=>[p,a,s],Z=()=>[$,"full",...u()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[F],breakpoint:[F],color:[io],container:[F],"drop-shadow":[F],ease:["in","out","in-out"],font:[uo],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[F],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[F],shadow:[F],spacing:["px",p],text:[F],"text-shadow":[F],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",$,s,a,R]}],container:["container"],columns:[{columns:[p,s,a,c]}],"break-after":[{"break-after":h()}],"break-before":[{"break-before":h()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:T()}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:E()}],"inset-x":[{"inset-x":E()}],"inset-y":[{"inset-y":E()}],start:[{start:E()}],end:[{end:E()}],top:[{top:E()}],right:[{right:E()}],bottom:[{bottom:E()}],left:[{left:E()}],visibility:["visible","invisible","collapse"],z:[{z:[N,"auto",a,s]}],basis:[{basis:[$,"full","auto",c,...u()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[p,$,"auto","initial","none",s]}],grow:[{grow:["",p,a,s]}],shrink:[{shrink:["",p,a,s]}],order:[{order:[N,"first","last","none",a,s]}],"grid-cols":[{"grid-cols":q()}],"col-start-end":[{col:U()}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":q()}],"row-start-end":[{row:U()}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":_()}],"auto-rows":[{"auto-rows":_()}],gap:[{gap:u()}],"gap-x":[{"gap-x":u()}],"gap-y":[{"gap-y":u()}],"justify-content":[{justify:[...te(),"normal"]}],"justify-items":[{"justify-items":[...W(),"normal"]}],"justify-self":[{"justify-self":["auto",...W()]}],"align-content":[{content:["normal",...te()]}],"align-items":[{items:[...W(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...W(),{baseline:["","last"]}]}],"place-content":[{"place-content":te()}],"place-items":[{"place-items":[...W(),"baseline"]}],"place-self":[{"place-self":["auto",...W()]}],p:[{p:u()}],px:[{px:u()}],py:[{py:u()}],ps:[{ps:u()}],pe:[{pe:u()}],pt:[{pt:u()}],pr:[{pr:u()}],pb:[{pb:u()}],pl:[{pl:u()}],m:[{m:G()}],mx:[{mx:G()}],my:[{my:G()}],ms:[{ms:G()}],me:[{me:G()}],mt:[{mt:G()}],mr:[{mr:G()}],mb:[{mb:G()}],ml:[{ml:G()}],"space-x":[{"space-x":u()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":u()}],"space-y-reverse":["space-y-reverse"],size:[{size:B()}],w:[{w:[c,"screen",...B()]}],"min-w":[{"min-w":[c,"screen","none",...B()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[i]},...B()]}],h:[{h:["screen","lh",...B()]}],"min-h":[{"min-h":["screen","lh","none",...B()]}],"max-h":[{"max-h":["screen","lh",...B()]}],"font-size":[{text:["base",t,Y,j]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,a,ie]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ae,s]}],"font-family":[{font:[go,s,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,a,s]}],"line-clamp":[{"line-clamp":[p,"none",a,ie]}],leading:[{leading:[m,...u()]}],"list-image":[{"list-image":["none",a,s]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",a,s]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:d()}],"text-color":[{text:d()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:[p,"from-font","auto",a,j]}],"text-decoration-color":[{decoration:d()}],"underline-offset":[{"underline-offset":[p,"auto",a,s]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:u()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a,s]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a,s]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ue()}],"bg-repeat":[{bg:pe()}],"bg-size":[{bg:fe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},N,a,s],radial:["",a,s],conic:[N,a,s]},ho,fo]}],"bg-color":[{bg:d()}],"gradient-from-pos":[{from:ne()}],"gradient-via-pos":[{via:ne()}],"gradient-to-pos":[{to:ne()}],"gradient-from":[{from:d()}],"gradient-via":[{via:d()}],"gradient-to":[{to:d()}],rounded:[{rounded:C()}],"rounded-s":[{"rounded-s":C()}],"rounded-e":[{"rounded-e":C()}],"rounded-t":[{"rounded-t":C()}],"rounded-r":[{"rounded-r":C()}],"rounded-b":[{"rounded-b":C()}],"rounded-l":[{"rounded-l":C()}],"rounded-ss":[{"rounded-ss":C()}],"rounded-se":[{"rounded-se":C()}],"rounded-ee":[{"rounded-ee":C()}],"rounded-es":[{"rounded-es":C()}],"rounded-tl":[{"rounded-tl":C()}],"rounded-tr":[{"rounded-tr":C()}],"rounded-br":[{"rounded-br":C()}],"rounded-bl":[{"rounded-bl":C()}],"border-w":[{border:z()}],"border-w-x":[{"border-x":z()}],"border-w-y":[{"border-y":z()}],"border-w-s":[{"border-s":z()}],"border-w-e":[{"border-e":z()}],"border-w-t":[{"border-t":z()}],"border-w-r":[{"border-r":z()}],"border-w-b":[{"border-b":z()}],"border-w-l":[{"border-l":z()}],"divide-x":[{"divide-x":z()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":z()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...J(),"hidden","none"]}],"divide-style":[{divide:[...J(),"hidden","none"]}],"border-color":[{border:d()}],"border-color-x":[{"border-x":d()}],"border-color-y":[{"border-y":d()}],"border-color-s":[{"border-s":d()}],"border-color-e":[{"border-e":d()}],"border-color-t":[{"border-t":d()}],"border-color-r":[{"border-r":d()}],"border-color-b":[{"border-b":d()}],"border-color-l":[{"border-l":d()}],"divide-color":[{divide:d()}],"outline-style":[{outline:[...J(),"none","hidden"]}],"outline-offset":[{"outline-offset":[p,a,s]}],"outline-w":[{outline:["",p,Y,j]}],"outline-color":[{outline:d()}],shadow:[{shadow:["","none",g,oe,ee]}],"shadow-color":[{shadow:d()}],"inset-shadow":[{"inset-shadow":["none",y,oe,ee]}],"inset-shadow-color":[{"inset-shadow":d()}],"ring-w":[{ring:z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:d()}],"ring-offset-w":[{"ring-offset":[p,j]}],"ring-offset-color":[{"ring-offset":d()}],"inset-ring-w":[{"inset-ring":z()}],"inset-ring-color":[{"inset-ring":d()}],"text-shadow":[{"text-shadow":["none",M,oe,ee]}],"text-shadow-color":[{"text-shadow":d()}],opacity:[{opacity:[p,a,s]}],"mix-blend":[{"mix-blend":[...ge(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ge()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[p]}],"mask-image-linear-from-pos":[{"mask-linear-from":w()}],"mask-image-linear-to-pos":[{"mask-linear-to":w()}],"mask-image-linear-from-color":[{"mask-linear-from":d()}],"mask-image-linear-to-color":[{"mask-linear-to":d()}],"mask-image-t-from-pos":[{"mask-t-from":w()}],"mask-image-t-to-pos":[{"mask-t-to":w()}],"mask-image-t-from-color":[{"mask-t-from":d()}],"mask-image-t-to-color":[{"mask-t-to":d()}],"mask-image-r-from-pos":[{"mask-r-from":w()}],"mask-image-r-to-pos":[{"mask-r-to":w()}],"mask-image-r-from-color":[{"mask-r-from":d()}],"mask-image-r-to-color":[{"mask-r-to":d()}],"mask-image-b-from-pos":[{"mask-b-from":w()}],"mask-image-b-to-pos":[{"mask-b-to":w()}],"mask-image-b-from-color":[{"mask-b-from":d()}],"mask-image-b-to-color":[{"mask-b-to":d()}],"mask-image-l-from-pos":[{"mask-l-from":w()}],"mask-image-l-to-pos":[{"mask-l-to":w()}],"mask-image-l-from-color":[{"mask-l-from":d()}],"mask-image-l-to-color":[{"mask-l-to":d()}],"mask-image-x-from-pos":[{"mask-x-from":w()}],"mask-image-x-to-pos":[{"mask-x-to":w()}],"mask-image-x-from-color":[{"mask-x-from":d()}],"mask-image-x-to-color":[{"mask-x-to":d()}],"mask-image-y-from-pos":[{"mask-y-from":w()}],"mask-image-y-to-pos":[{"mask-y-to":w()}],"mask-image-y-from-color":[{"mask-y-from":d()}],"mask-image-y-to-color":[{"mask-y-to":d()}],"mask-image-radial":[{"mask-radial":[a,s]}],"mask-image-radial-from-pos":[{"mask-radial-from":w()}],"mask-image-radial-to-pos":[{"mask-radial-to":w()}],"mask-image-radial-from-color":[{"mask-radial-from":d()}],"mask-image-radial-to-color":[{"mask-radial-to":d()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":I()}],"mask-image-conic-pos":[{"mask-conic":[p]}],"mask-image-conic-from-pos":[{"mask-conic-from":w()}],"mask-image-conic-to-pos":[{"mask-conic-to":w()}],"mask-image-conic-from-color":[{"mask-conic-from":d()}],"mask-image-conic-to-color":[{"mask-conic-to":d()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ue()}],"mask-repeat":[{mask:pe()}],"mask-size":[{mask:fe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",a,s]}],filter:[{filter:["","none",a,s]}],blur:[{blur:be()}],brightness:[{brightness:[p,a,s]}],contrast:[{contrast:[p,a,s]}],"drop-shadow":[{"drop-shadow":["","none",A,oe,ee]}],"drop-shadow-color":[{"drop-shadow":d()}],grayscale:[{grayscale:["",p,a,s]}],"hue-rotate":[{"hue-rotate":[p,a,s]}],invert:[{invert:["",p,a,s]}],saturate:[{saturate:[p,a,s]}],sepia:[{sepia:["",p,a,s]}],"backdrop-filter":[{"backdrop-filter":["","none",a,s]}],"backdrop-blur":[{"backdrop-blur":be()}],"backdrop-brightness":[{"backdrop-brightness":[p,a,s]}],"backdrop-contrast":[{"backdrop-contrast":[p,a,s]}],"backdrop-grayscale":[{"backdrop-grayscale":["",p,a,s]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p,a,s]}],"backdrop-invert":[{"backdrop-invert":["",p,a,s]}],"backdrop-opacity":[{"backdrop-opacity":[p,a,s]}],"backdrop-saturate":[{"backdrop-saturate":[p,a,s]}],"backdrop-sepia":[{"backdrop-sepia":["",p,a,s]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":u()}],"border-spacing-x":[{"border-spacing-x":u()}],"border-spacing-y":[{"border-spacing-y":u()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",a,s]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[p,"initial",a,s]}],ease:[{ease:["linear","initial",S,a,s]}],delay:[{delay:[p,a,s]}],animate:[{animate:["none",x,a,s]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[k,a,s]}],"perspective-origin":[{"perspective-origin":T()}],rotate:[{rotate:K()}],"rotate-x":[{"rotate-x":K()}],"rotate-y":[{"rotate-y":K()}],"rotate-z":[{"rotate-z":K()}],scale:[{scale:Q()}],"scale-x":[{"scale-x":Q()}],"scale-y":[{"scale-y":Q()}],"scale-z":[{"scale-z":Q()}],"scale-3d":["scale-3d"],skew:[{skew:se()}],"skew-x":[{"skew-x":se()}],"skew-y":[{"skew-y":se()}],transform:[{transform:[a,s,"","none","gpu","cpu"]}],"transform-origin":[{origin:T()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Z()}],"translate-x":[{"translate-x":Z()}],"translate-y":[{"translate-y":Z()}],"translate-z":[{"translate-z":Z()}],"translate-none":["translate-none"],accent:[{accent:d()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:d()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a,s]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":u()}],"scroll-mx":[{"scroll-mx":u()}],"scroll-my":[{"scroll-my":u()}],"scroll-ms":[{"scroll-ms":u()}],"scroll-me":[{"scroll-me":u()}],"scroll-mt":[{"scroll-mt":u()}],"scroll-mr":[{"scroll-mr":u()}],"scroll-mb":[{"scroll-mb":u()}],"scroll-ml":[{"scroll-ml":u()}],"scroll-p":[{"scroll-p":u()}],"scroll-px":[{"scroll-px":u()}],"scroll-py":[{"scroll-py":u()}],"scroll-ps":[{"scroll-ps":u()}],"scroll-pe":[{"scroll-pe":u()}],"scroll-pt":[{"scroll-pt":u()}],"scroll-pr":[{"scroll-pr":u()}],"scroll-pb":[{"scroll-pb":u()}],"scroll-pl":[{"scroll-pl":u()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a,s]}],fill:[{fill:["none",...d()]}],"stroke-w":[{stroke:[p,Y,j,ie]}],stroke:[{stroke:["none",...d()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},yo=eo(wo);function re(...e){return yo(je(e))}const Ao=({number:e=20,className:n})=>{const[t,r]=O.useState([]);return O.useEffect(()=>{const l=()=>{const m=[...new Array(e)].map((i,c)=>{const o=window.innerWidth,f=c/(e-1)*o,g=Math.random()*50-25;return{top:"-40px",left:`calc(${f}px + ${g}px)`,animationDelay:`${Math.random()*2}s`,animationDuration:`${Math.random()*3+3}s`}});r(m)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[e]),H.jsx(Te.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:re("absolute inset-0 z-10 overflow-hidden",n),children:t.map((l,m)=>{const i=["teal-400","purple-400"],c=i[Math.floor(Math.random()*i.length)];return H.jsxs("span",{style:{...l},className:re("absolute h-1 w-1 rotate-[225deg] animate-meteor-effect rounded-full bg-white shadow-[0_0_8px_2px_rgba(45,212,191,0.9)]",c==="purple-400"&&"shadow-[0_0_8px_2px_rgba(168,85,247,0.9)]"),children:[H.jsx("div",{className:re("absolute top-1/2 -z-10 h-px w-[600px] -translate-y-1/2 bg-gradient-to-r",`from-${c} to-transparent`)}),H.jsx("div",{className:re("absolute top-1/2 -z-20 h-px w-[100px] -translate-y-1/2 bg-gradient-to-r",`from-${c}/50 to-transparent`)})]},"meteor"+m)})})},Ro=({hue:e=230,xOffset:n=0,speed:t=1,intensity:r=1,size:l=1})=>{const m=O.useRef(null);return O.useEffect(()=>{const i=m.current;if(!i)return;const c=()=>{i.width=i.clientWidth,i.height=i.clientHeight};c(),window.addEventListener("resize",c);const o=i.getContext("webgl");if(!o){console.error("WebGL not supported");return}const f=`
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `,g=`
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;
      
      #define OCTAVE_COUNT 10

      vec3 hsv2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash11(float p) {
          p = fract(p * .1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
      }

      float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
          float c = cos(theta);
          float s = sin(theta);
          return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float a = hash12(ip);
          float b = hash12(ip + vec2(1.0, 0.0));
          float c = hash12(ip + vec2(0.0, 1.0));
          float d = hash12(ip + vec2(1.0, 1.0));
          
          vec2 t = smoothstep(0.0, 1.0, fp);
          return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < OCTAVE_COUNT; ++i) {
              value += amplitude * noise(p);
              p *= rotate2d(0.45);
              p *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
          vec2 uv = fragCoord / iResolution.xy;
          uv = 2.0 * uv - 1.0;
          uv.x *= iResolution.x / iResolution.y;
          uv.x += uXOffset;
          
          uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;
          
          float dist = abs(uv.x);
          vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
          vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
          col = pow(col, vec3(1.0));
          fragColor = vec4(col, 1.0);
      }

      void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `,y=(U,V)=>{const _=o.createShader(V);return _?(o.shaderSource(_,U),o.compileShader(_),o.getShaderParameter(_,o.COMPILE_STATUS)?_:(console.error("Shader compile error:",o.getShaderInfoLog(_)),o.deleteShader(_),null)):null},M=y(f,o.VERTEX_SHADER),A=y(g,o.FRAGMENT_SHADER);if(!M||!A)return;const b=o.createProgram();if(!b)return;if(o.attachShader(b,M),o.attachShader(b,A),o.linkProgram(b),!o.getProgramParameter(b,o.LINK_STATUS)){console.error("Program linking error:",o.getProgramInfoLog(b));return}o.useProgram(b);const k=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),R=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,R),o.bufferData(o.ARRAY_BUFFER,k,o.STATIC_DRAW);const S=o.getAttribLocation(b,"aPosition");o.enableVertexAttribArray(S),o.vertexAttribPointer(S,2,o.FLOAT,!1,0,0);const x=o.getUniformLocation(b,"iResolution"),h=o.getUniformLocation(b,"iTime"),I=o.getUniformLocation(b,"uHue"),T=o.getUniformLocation(b,"uXOffset"),P=o.getUniformLocation(b,"uSpeed"),L=o.getUniformLocation(b,"uIntensity"),u=o.getUniformLocation(b,"uSize"),E=performance.now(),q=()=>{c(),o.viewport(0,0,i.width,i.height),o.uniform2f(x,i.width,i.height);const U=performance.now();o.uniform1f(h,(U-E)/1e3),o.uniform1f(I,e),o.uniform1f(T,n),o.uniform1f(P,t),o.uniform1f(L,r),o.uniform1f(u,l),o.drawArrays(o.TRIANGLES,0,6),requestAnimationFrame(q)};return requestAnimationFrame(q),()=>{window.removeEventListener("resize",c)}},[e,n,t,r,l]),H.jsx("canvas",{ref:m,className:"w-full h-full relative"})};export{zo as A,Ro as L,Ao as M,re as c};
