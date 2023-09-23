import{_ as Oe}from"./AppSelect.vue_vue_type_script_setup_true_lang-19d2297b.js";import{V as Ce}from"./VDivider-621b5e63.js";import{d as re,o as S,g as O,f as L,D as te,v as V,C as ke,w as Le,F as P,s as U,E as x,G as q,H as Se,I as J,J as xe,K as Ue,L as oe,M as De,N as He,O as We,P as Ae,Q as Ye,R as je,S as Fe,U as Xe,W as Ge,X as Ze,Y as fe,Z as he,$ as qe,a0 as Je,a1 as Ke,a2 as Qe,a3 as ae,a4 as et,a5 as tt,a6 as at,a7 as lt,a8 as nt,a9 as se,x as l,m as X,T as Te,aa as ot,ab as ge,ac as Be,ad as ze,ae as st,af as it,ag as ut,b as Me,ah as rt,u as Re,A as G,ai as ye,r as ue,e as u,z as m,aj as ee,ak as ct,al as dt,am as $,i as D,an as vt,ao as mt,y as pe,ap as ft,aq as ht,ar as gt,as as yt,at as pt,au as Z,av as bt,B as be,aw as wt,j as _t,ax as Vt}from"./main-da363878.js";import{m as Ee,V as le,a as F,u as Ct}from"./VTextField-220d3e9c.js";import{m as Ie,V as ne,a as kt,b as St}from"./VCheckboxBtn-a8e0600f.js";import{V as xt,a as we}from"./VRow-ba771828.js";import{u as Tt}from"./VList-2d206493.js";import Bt from"./Footer-f13a09fd.js";import{_ as zt}from"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang-5f20bcae.js";import{_ as Mt}from"./UserProfile.vue_vue_type_script_setup_true_lang-66da76c4.js";import{_ as Rt}from"./NavBarI18n.vue_vue_type_script_setup_true_lang-1156d1bb.js";import{V as Et}from"./VSpacer-9b089337.js";import"./VMenu-9648b769.js";import"./VTooltip-7a96bcde.js";import"./VListItemAction-253bc8e4.js";const It={class:"customizer-section"},$t={class:"text-caption"},Nt=re({__name:"CustomizerSection",props:{title:null,divider:{type:Boolean,default:!0}},setup(e){const r=e;return(d,s)=>(S(),O(P,null,[r.divider?(S(),L(Ce,{key:0})):te("",!0),V("div",It,[V("p",$t,ke(r.title),1),Le(d.$slots,"default")])],64))}});function Pt(e){let{rootEl:r,isSticky:d,layoutItemStyles:s}=e;const o=U(!1),n=U(0),f=x(()=>{const h=typeof o.value=="boolean"?"top":o.value;return[d.value?{top:"auto",bottom:"auto",height:void 0}:void 0,o.value?{[h]:q(n.value)}:{top:s.value.top}]});Se(()=>{J(d,h=>{h?window.addEventListener("scroll",k,{passive:!0}):window.removeEventListener("scroll",k)},{immediate:!0})}),xe(()=>{document.removeEventListener("scroll",k)});let C=0;function k(){const h=C>window.scrollY?"up":"down",c=r.value.getBoundingClientRect(),g=parseFloat(s.value.top??0),p=window.scrollY-Math.max(0,n.value-g),b=c.height+Math.max(n.value,g)-window.scrollY-window.innerHeight;c.height<window.innerHeight-g?(o.value="top",n.value=g):h==="up"&&o.value==="bottom"||h==="down"&&o.value==="top"?(n.value=window.scrollY+c.top,o.value=!0):h==="down"&&b<=0?(n.value=0,o.value="bottom"):h==="up"&&p<=0&&(n.value=c.top+p,o.value="top"),C=window.scrollY}return{isStuck:o,stickyStyles:f}}const Ot=100,Lt=20;function _e(e){const r=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*r}function Ve(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let d=e.length-1;d>0;d--){if(e[d].t===e[d-1].t)continue;const s=_e(r),o=(e[d].d-e[d-1].d)/(e[d].t-e[d-1].t);r+=(o-s)*Math.abs(o),d===e.length-1&&(r*=.5)}return _e(r)*1e3}function Ut(){const e={};function r(o){Array.from(o.changedTouches).forEach(n=>{(e[n.identifier]??(e[n.identifier]=new Ue(Lt))).push([o.timeStamp,n])})}function d(o){Array.from(o.changedTouches).forEach(n=>{delete e[n.identifier]})}function s(o){var h;const n=(h=e[o])==null?void 0:h.values().reverse();if(!n)throw new Error(`No samples for touch id ${o}`);const f=n[0],C=[],k=[];for(const c of n){if(f[0]-c[0]>Ot)break;C.push({t:c[0],d:c[1].clientX}),k.push({t:c[0],d:c[1].clientY})}return{x:Ve(C),y:Ve(k),get direction(){const{x:c,y:g}=this,[p,b]=[Math.abs(c),Math.abs(g)];return p>b&&c>=0?"right":p>b&&c<=0?"left":b>p&&g>=0?"down":b>p&&g<=0?"up":Dt()}}}return{addMovement:r,endTouch:d,getVelocity:s}}function Dt(){throw new Error}function Ht(e){let{isActive:r,isTemporary:d,width:s,touchless:o,position:n}=e;Se(()=>{window.addEventListener("touchstart",M,{passive:!0}),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",E,{passive:!0})}),xe(()=>{window.removeEventListener("touchstart",M),window.removeEventListener("touchmove",B),window.removeEventListener("touchend",E)});const f=x(()=>["left","right"].includes(n.value)),{addMovement:C,endTouch:k,getVelocity:h}=Ut();let c=!1;const g=U(!1),p=U(0),b=U(0);let y;function T(i,t){return(n.value==="left"?i:n.value==="right"?document.documentElement.clientWidth-i:n.value==="top"?i:n.value==="bottom"?document.documentElement.clientHeight-i:A())-(t?s.value:0)}function N(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const v=n.value==="left"?(i-b.value)/s.value:n.value==="right"?(document.documentElement.clientWidth-i-b.value)/s.value:n.value==="top"?(i-b.value)/s.value:n.value==="bottom"?(document.documentElement.clientHeight-i-b.value)/s.value:A();return t?Math.max(0,Math.min(1,v)):v}function M(i){if(o.value)return;const t=i.changedTouches[0].clientX,v=i.changedTouches[0].clientY,_=25,R=n.value==="left"?t<_:n.value==="right"?t>document.documentElement.clientWidth-_:n.value==="top"?v<_:n.value==="bottom"?v>document.documentElement.clientHeight-_:A(),a=r.value&&(n.value==="left"?t<s.value:n.value==="right"?t>document.documentElement.clientWidth-s.value:n.value==="top"?v<s.value:n.value==="bottom"?v>document.documentElement.clientHeight-s.value:A());(R||a||r.value&&d.value)&&(c=!0,y=[t,v],b.value=T(f.value?t:v,r.value),p.value=N(f.value?t:v),k(i),C(i))}function B(i){const t=i.changedTouches[0].clientX,v=i.changedTouches[0].clientY;if(c){if(!i.cancelable){c=!1;return}const R=Math.abs(t-y[0]),a=Math.abs(v-y[1]);(f.value?R>a&&R>3:a>R&&a>3)?(g.value=!0,c=!1):(f.value?a:R)>3&&(c=!1)}if(!g.value)return;i.preventDefault(),C(i);const _=N(f.value?t:v,!1);p.value=Math.max(0,Math.min(1,_)),_>1?b.value=T(f.value?t:v,!0):_<0&&(b.value=T(f.value?t:v,!1))}function E(i){if(c=!1,!g.value)return;C(i),g.value=!1;const t=h(i.changedTouches[0].identifier),v=Math.abs(t.x),_=Math.abs(t.y);(f.value?v>_&&v>400:_>v&&_>3)?r.value=t.direction===({left:"right",right:"left",top:"down",bottom:"up"}[n.value]||A()):r.value=p.value>.5}const z=x(()=>g.value?{transform:n.value==="left"?`translateX(calc(-100% + ${p.value*s.value}px))`:n.value==="right"?`translateX(calc(100% - ${p.value*s.value}px))`:n.value==="top"?`translateY(calc(-100% + ${p.value*s.value}px))`:n.value==="bottom"?`translateY(calc(100% - ${p.value*s.value}px))`:A(),transition:"none"}:void 0);return{isDragging:g,dragProgress:p,dragStyles:z}}function A(){throw new Error}const Wt=["start","end","left","right","top","bottom"],At=oe()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Wt.includes(e)},sticky:Boolean,...De(),...He(),...We(),...Ae(),...Ye(),...je({tag:"nav"}),...Fe()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,r){let{attrs:d,emit:s,slots:o}=r;const{isRtl:n}=Xe(),{themeClasses:f}=Ge(e),{borderClasses:C}=Ze(e),{backgroundColorClasses:k,backgroundColorStyles:h}=fe(he(e,"color")),{elevationClasses:c}=qe(e),{mobile:g}=Je(),{roundedClasses:p}=Ke(e),b=Qe(),y=ae(e,"modelValue",null,I=>!!I),{ssrBootStyles:T}=Tt(),N=U(),M=U(!1),B=x(()=>e.rail&&e.expandOnHover&&M.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),E=x(()=>et(e.location,n.value)),z=x(()=>!e.permanent&&(g.value||e.temporary)),i=x(()=>e.sticky&&!z.value&&E.value!=="bottom");e.expandOnHover&&e.rail!=null&&J(M,I=>s("update:rail",!I)),e.disableResizeWatcher||J(z,I=>!e.permanent&&tt(()=>y.value=!I)),!e.disableRouteWatcher&&b&&J(b.currentRoute,()=>z.value&&(y.value=!1)),J(()=>e.permanent,I=>{I&&(y.value=!0)}),at(()=>{e.modelValue!=null||z.value||(y.value=e.permanent||!g.value)});const{isDragging:t,dragProgress:v,dragStyles:_}=Ht({isActive:y,isTemporary:z,width:B,touchless:he(e,"touchless"),position:E}),R=x(()=>{const I=z.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):B.value;return t.value?I*v.value:I}),{layoutItemStyles:a,layoutRect:w,layoutItemScrimStyles:H}=lt({id:e.name,order:x(()=>parseInt(e.order,10)),position:E,layoutSize:R,elementSize:B,active:x(()=>y.value||t.value),disableTransitions:x(()=>t.value),absolute:x(()=>e.absolute||i.value&&typeof K.value!="string")}),{isStuck:K,stickyStyles:ie}=Pt({rootEl:N,isSticky:i,layoutItemStyles:a}),W=fe(x(()=>typeof e.scrim=="string"?e.scrim:null)),$e=x(()=>({...t.value?{opacity:v.value*.2,transition:"none"}:void 0,...w.value?{left:q(w.value.left),right:q(w.value.right),top:q(w.value.top),bottom:q(w.value.bottom)}:void 0,...H.value}));nt({VList:{bgColor:"transparent"}});function Ne(){M.value=!0}function Pe(){M.value=!1}return se(()=>{const I=o.image||e.image;return l(P,null,[l(e.tag,X({ref:N,onMouseenter:Ne,onMouseleave:Pe,class:["v-navigation-drawer",`v-navigation-drawer--${E.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":M.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":z.value,"v-navigation-drawer--active":y.value,"v-navigation-drawer--sticky":i.value},f.value,k.value,C.value,c.value,p.value,e.class],style:[h.value,a.value,_.value,T.value,ie.value,e.style]},d),{default:()=>{var ce,de,ve,me;return[I&&l("div",{key:"image",class:"v-navigation-drawer__img"},[o.image?(ce=o.image)==null?void 0:ce.call(o,{image:e.image}):l("img",{src:e.image,alt:""},null)]),o.prepend&&l("div",{class:"v-navigation-drawer__prepend"},[(de=o.prepend)==null?void 0:de.call(o)]),l("div",{class:"v-navigation-drawer__content"},[(ve=o.default)==null?void 0:ve.call(o)]),o.append&&l("div",{class:"v-navigation-drawer__append"},[(me=o.append)==null?void 0:me.call(o)])]}}),l(Te,{name:"fade-transition"},{default:()=>[z.value&&(t.value||y.value)&&!!e.scrim&&l("div",{class:["v-navigation-drawer__scrim",W.backgroundColorClasses.value],style:[$e.value,W.backgroundColorStyles.value],onClick:()=>y.value=!1},null)]})])}),{isStuck:K}}}),Y=oe()({name:"VRadio",props:{...Ie({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,r){let{slots:d}=r;return se(()=>l(ne,X(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),d)),{}}});const j=oe()({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...Ee(),...ot(kt(),["multiple"]),trueIcon:{type:ge,default:"$radioOn"},falseIcon:{type:ge,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:d,slots:s}=r;const o=Be(),n=x(()=>e.id||`radio-group-${o}`),f=ae(e,"modelValue");return se(()=>{const[C,k]=ze(d),[h,c]=le.filterProps(e),[g,p]=ne.filterProps(e),b=s.label?s.label({label:e.label,props:{for:n.value}}):e.label;return l(le,X({class:["v-radio-group",e.class],style:e.style},C,h,{modelValue:f.value,"onUpdate:modelValue":y=>f.value=y,id:n.value}),{...s,default:y=>{let{id:T,messagesId:N,isDisabled:M,isReadonly:B}=y;return l(P,null,[b&&l(F,{id:T.value},{default:()=>[b]}),l(St,X(g,{id:T.value,"aria-describedby":N.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:M.value,readonly:B.value,"aria-labelledby":b?T.value:void 0,multiple:!1},k,{modelValue:f.value,"onUpdate:modelValue":E=>f.value=E}),s)])}})}),{}}});const Q=oe()({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Ee(),...Ie()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,r){let{attrs:d,slots:s}=r;const o=ae(e,"indeterminate"),n=ae(e,"modelValue"),{loaderClasses:f}=st(e),{isFocused:C,focus:k,blur:h}=Ct(e),c=x(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),g=Be(),p=x(()=>e.id||`switch-${g}`);function b(){o.value&&(o.value=!1)}return se(()=>{const[y,T]=ze(d),[N,M]=le.filterProps(e),[B,E]=ne.filterProps(e),z=U();function i(t){var v,_;t.stopPropagation(),t.preventDefault(),(_=(v=z.value)==null?void 0:v.input)==null||_.click()}return l(le,X({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":o.value},f.value,e.class],style:e.style},y,N,{id:p.value,focused:C.value}),{...s,default:t=>{let{id:v,messagesId:_,isDisabled:R,isReadonly:a,isValid:w}=t;return l(ne,X({ref:z},B,{modelValue:n.value,"onUpdate:modelValue":[H=>n.value=H,b],id:v.value,"aria-describedby":_.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:R.value,readonly:a.value,onFocus:k,onBlur:h},T),{...s,default:()=>l("div",{class:"v-switch__track",onClick:i},null),input:H=>{let{textColorClasses:K,textColorStyles:ie}=H;return l("div",{class:["v-switch__thumb",K.value],style:ie.value},[e.loading&&l(it,{name:"v-switch",active:!0,color:w.value===!1?void 0:c.value},{default:W=>s.loader?s.loader(W):l(ut,{active:W.isActive,color:W.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}}),Yt={class:"customizer-heading d-flex align-center justify-space-between"},jt=V("div",null,[V("h6",{class:"text-h6"}," THEME CUSTOMIZER "),V("span",{class:"text-body-1"},"Customize & Preview in Real Time")],-1),Ft=V("h6",{class:"text-base font-weight-regular"}," Skins ",-1),Xt=V("h6",{class:"mt-3 text-base font-weight-regular"}," Theme ",-1),Gt=V("h6",{class:"mt-3 text-base font-weight-regular"}," Primary Color ",-1),Zt={class:"d-flex gap-x-4 mt-2"},qt=["onClick"],Jt=V("h6",{class:"text-base font-weight-regular"}," Content width ",-1),Kt={class:"mt-3 text-base font-weight-regular"},Qt=V("h6",{class:"mt-3 text-base font-weight-regular"}," Footer Type ",-1),ea={class:"mt-4 d-flex align-center justify-space-between"},ta=V("h6",{class:"text-base font-weight-regular"}," Menu Type ",-1),aa={key:0,class:"mt-4 d-flex align-center justify-space-between"},la={class:"d-flex align-center justify-space-between"},na={class:"mt-6"},oa=re({__name:"TheCustomizer",setup(e){const r=U(!1),{theme:d,skin:s,appRouteTransition:o,navbarType:n,footerType:f,isVerticalNavCollapsed:C,isVerticalNavSemiDark:k,appContentWidth:h,appContentLayoutNav:c,isAppRtl:g,isNavbarBlurEnabled:p,isLessThanOverlayNavBreakpoint:b}=Me(),y=rt(),T=JSON.parse(JSON.stringify(y.current.value.colors)),N=["primary","secondary","success","info","warning","error"],M=i=>{const t=y.name.value;y.themes.value[t].colors.primary=i,localStorage.setItem(`${be.app.title}-${t}ThemePrimaryColor`,i),localStorage.setItem(`${be.app.title}-initial-loader-color`,i)},B=(i,t)=>t?i:wt,{width:E}=Re(),z=x(()=>{const i=Object.entries(ye);return c.value===G.Horizontal?i.filter(([t,v])=>v!==ye.Hidden):i});return(i,t)=>{const v=ue("IconBtn"),_=Nt,R=Oe;return u(b)(u(E))?te("",!0):(S(),O(P,{key:0},[l(ct,{icon:"",size:"small",class:"app-customizer-toggler rounded-s-lg rounded-0",style:{"z-index":"1001"},onClick:t[0]||(t[0]=a=>r.value=!0)},{default:m(()=>[l(ee,{size:"22",icon:"tabler-settings"})]),_:1}),l(At,{modelValue:u(r),"onUpdate:modelValue":t[13]||(t[13]=a=>$(r)?r.value=a:null),temporary:"",border:"0",location:"end",width:"400",scrim:!1,class:"app-customizer"},{default:m(()=>[V("div",Yt,[jt,l(v,{onClick:t[1]||(t[1]=a=>r.value=!1)},{default:m(()=>[l(ee,{icon:"tabler-x",size:"20"})]),_:1})]),l(Ce),l(u(dt),{tag:"ul",options:{wheelPropagation:!1}},{default:m(()=>[l(_,{title:"THEMING",divider:!1},{default:m(()=>[Ft,l(j,{modelValue:u(s),"onUpdate:modelValue":t[2]||(t[2]=a=>$(s)?s.value=a:null),inline:""},{default:m(()=>[(S(!0),O(P,null,D(Object.entries(u(vt)),([a,w])=>(S(),L(Y,{key:a,label:a,value:w},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Xt,l(j,{modelValue:u(d),"onUpdate:modelValue":t[3]||(t[3]=a=>$(d)?d.value=a:null),inline:""},{default:m(()=>[(S(),O(P,null,D(["system","light","dark"],a=>l(Y,{key:a,label:a,value:a,class:"text-capitalize"},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),Gt,V("div",Zt,[(S(),O(P,null,D(N,(a,w)=>V("div",{key:a,style:mt([{"border-radius":"0.5rem","block-size":"2.5rem","inline-size":"2.5rem",transition:"all 0.25s ease"},{backgroundColor:B(u(T)[a],w)}]),class:pe(["cursor-pointer d-flex align-center justify-center",{"elevation-4":u(y).current.value.colors.primary===B(u(T)[a],w)}]),onClick:H=>M(B(u(T)[a],w))},[l(ft,null,{default:m(()=>[ht(l(ee,{icon:"tabler-check",color:"white"},null,512),[[gt,u(y).current.value.colors.primary===B(u(T)[a],w)]])]),_:2},1024)],14,qt)),64))])]),_:1}),l(_,{title:"LAYOUT"},{default:m(()=>[Jt,l(j,{modelValue:u(h),"onUpdate:modelValue":t[4]||(t[4]=a=>$(h)?h.value=a:null),inline:""},{default:m(()=>[(S(!0),O(P,null,D(Object.entries(u(yt)),([a,w])=>(S(),L(Y,{key:a,label:a,value:w},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),V("h6",Kt,ke(u(c)===u(G).Vertical?"Navbar":"Header")+" Type ",1),l(j,{modelValue:u(n),"onUpdate:modelValue":t[5]||(t[5]=a=>$(n)?n.value=a:null),inline:""},{default:m(()=>[(S(!0),O(P,null,D(u(z),([a,w])=>(S(),L(Y,{key:a,label:a,value:w},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Qt,l(j,{modelValue:u(f),"onUpdate:modelValue":t[6]||(t[6]=a=>$(f)?f.value=a:null),inline:""},{default:m(()=>[(S(!0),O(P,null,D(Object.entries(u(pt)),([a,w])=>(S(),L(Y,{key:a,label:a,value:w},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),V("div",ea,[l(F,{for:"customizer-navbar-blur",class:"text-high-emphasis"},{default:m(()=>[Z(" Navbar Blur ")]),_:1}),V("div",null,[l(Q,{id:"customizer-navbar-blur",modelValue:u(p),"onUpdate:modelValue":t[7]||(t[7]=a=>$(p)?p.value=a:null),class:"ms-2"},null,8,["modelValue"])])])]),_:1}),l(_,{title:"MENU"},{default:m(()=>[ta,l(j,{modelValue:u(c),"onUpdate:modelValue":t[8]||(t[8]=a=>$(c)?c.value=a:null),inline:""},{default:m(()=>[(S(!0),O(P,null,D(Object.entries(u(G)),([a,w])=>(S(),L(Y,{key:a,label:a,value:w},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),u(c)===u(G).Vertical?(S(),O("div",aa,[l(F,{for:"customizer-menu-collapsed",class:"text-high-emphasis"},{default:m(()=>[Z(" Collapsed Menu ")]),_:1}),V("div",null,[l(Q,{id:"customizer-menu-collapsed",modelValue:u(C),"onUpdate:modelValue":t[9]||(t[9]=a=>$(C)?C.value=a:null),class:"ms-2"},null,8,["modelValue"])])])):te("",!0),V("div",{class:pe(["mt-4 align-center justify-space-between",u(y).global.name.value==="light"&&u(c)===u(G).Vertical?"d-flex":"d-none"])},[l(F,{for:"customizer-menu-semi-dark",class:"text-high-emphasis"},{default:m(()=>[Z(" Semi Dark Menu ")]),_:1}),V("div",null,[l(Q,{id:"customizer-menu-semi-dark",modelValue:u(k),"onUpdate:modelValue":t[10]||(t[10]=a=>$(k)?k.value=a:null),class:"ms-2"},null,8,["modelValue"])])],2)]),_:1}),l(_,{title:"MISC"},{default:m(()=>[V("div",la,[l(F,{for:"customizer-rtl",class:"text-high-emphasis"},{default:m(()=>[Z(" RTL ")]),_:1}),V("div",null,[l(Q,{id:"customizer-rtl",modelValue:u(g),"onUpdate:modelValue":t[11]||(t[11]=a=>$(g)?g.value=a:null),class:"ms-2"},null,8,["modelValue"])])]),V("div",na,[l(xt,null,{default:m(()=>[l(we,{cols:"5",class:"d-flex align-center"},{default:m(()=>[l(F,{for:"route-transition",class:"text-high-emphasis"},{default:m(()=>[Z(" Router Transition ")]),_:1})]),_:1}),l(we,{cols:"7"},{default:m(()=>[l(R,{id:"route-transition",modelValue:u(o),"onUpdate:modelValue":t[12]||(t[12]=a=>$(o)?o.value=a:null),items:Object.entries(u(bt)).map(([a,w])=>({key:a,value:w})),"item-title":"key","item-value":"value","single-line":""},null,8,["modelValue","items"])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}});const sa=[{title:"Dashboard",to:{name:"index"},icon:{icon:"tabler-layout-dashboard"}},{title:"Users",to:{name:"users"},icon:{icon:"tabler-users"}}],ia={class:"d-flex h-100 align-center"},Ca=re({__name:"DefaultLayoutWithVerticalNav",setup(e){const{appRouteTransition:r,isLessThanOverlayNavBreakpoint:d}=Me(),{width:s}=Re();return(o,n)=>{const f=ue("IconBtn"),C=ue("RouterView"),k=oa;return S(),L(u(Vt),{"nav-items":u(sa)},{navbar:m(({toggleVerticalOverlayNavActive:h})=>[V("div",ia,[u(d)(u(s))?(S(),L(f,{key:0,id:"vertical-nav-toggle-btn",class:"ms-n3",onClick:c=>h(!0)},{default:m(()=>[l(ee,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"])):te("",!0),l(Rt,{class:"me-1"}),l(zt),l(Et),l(Mt)])]),footer:m(()=>[l(Bt)]),default:m(()=>[l(C,null,{default:m(({Component:h})=>[l(Te,{name:u(r),mode:"out-in"},{default:m(()=>[(S(),L(_t(h)))]),_:2},1032,["name"])]),_:1}),l(k)]),_:1},8,["nav-items"])}}});export{Ca as default};