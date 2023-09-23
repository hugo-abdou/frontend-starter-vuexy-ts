import{L as F,ab as Y,N as U,aA as j,Q as H,R as O,S as X,aB as q,Y as G,Z as T,a1 as J,aC as K,aD as Q,ah as W,aE as Z,a9 as ee,aF as ae,x as a,aG as te,aq as k,ar as h,m as S,aj as C,d as M,E as $,r as oe,o as m,f as p,z as t,e as f,aH as se,aI as ie,au as u,C as _,aJ as le,al as ne,g as x,F as w,i as re,D as I,aK as ce,v as V,y as de,aL as ue,aM as me,ak as fe,s as ve}from"./main-da363878.js";import{a as ge}from"./formatters-3b7fec12.js";import{V as be}from"./VMenu-9648b769.js";import{V as _e}from"./VTooltip-7a96bcde.js";import{V as y}from"./VDivider-621b5e63.js";import{V as ke,a as L,b as z,c as he}from"./VList-2d206493.js";import{V as Ce}from"./VListItemAction-253bc8e4.js";const A=F()({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Y,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...U(),...j({location:"top end"}),...H(),...O(),...X(),...q({transition:"scale-rotate-transition"})},setup(e,l){const{backgroundColorClasses:i,backgroundColorStyles:d}=G(T(e,"color")),{roundedClasses:v}=J(e),{t:g}=K(),{textColorClasses:o,textColorStyles:n}=Q(T(e,"textColor")),{themeClasses:r}=W(),{locationStyles:s}=Z(e,!0,c=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(c)?+(e.offsetY??0):["left","right"].includes(c)?+(e.offsetX??0):0));return ee(()=>{const c=Number(e.content),b=!e.max||isNaN(c)?e.content:c<=+e.max?c:`${e.max}+`,[E,D]=ae(l.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,S({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},D,{style:e.style}),{default:()=>{var N,B;return[a("div",{class:"v-badge__wrapper"},[(B=(N=l.slots).default)==null?void 0:B.call(N),a(te,{transition:e.transition},{default:()=>{var P,R;return[k(a("span",S({class:["v-badge__badge",r.value,i.value,v.value,o.value],style:[d.value,n.value,e.inline?{}:s.value],"aria-atomic":"true","aria-label":g(e.label,c),"aria-live":"polite",role:"status"},E),[e.dot?void 0:l.slots.badge?(R=(P=l.slots).badge)==null?void 0:R.call(P):e.icon?a(C,{icon:e.icon},null):b]),[[h,e.modelValue]])]}})])]}})}),{}}}),xe={key:0},Ve={class:"text-xs text-disabled"},ye={class:"d-flex flex-column align-center gap-4"},Se={style:{"block-size":"28px","inline-size":"28px"}},pe=M({__name:"Notifications",props:{notifications:null,badgeProps:{default:void 0},location:{default:"bottom end"}},emits:["read","unread","remove","click:notification"],setup(e,{emit:l}){const i=e,d=$(()=>i.notifications.some(o=>o.isSeen===!1)),v=()=>{const o=i.notifications.map(n=>n.id);d.value?l("read",o):l("unread",o)},g=$(()=>i.notifications.filter(o=>o.isSeen===!1).length);return(o,n)=>{const r=oe("IconBtn");return m(),p(r,{id:"notification-btn"},{default:t(()=>[a(A,S(i.badgeProps,{"model-value":i.notifications.some(s=>!s.isSeen),color:"error",content:f(g),class:"notification-badge"}),{default:t(()=>[a(C,{size:"26",icon:"tabler-bell"})]),_:1},16,["model-value","content"]),a(be,{activator:"parent",width:"380px",location:i.location,offset:"14px","close-on-content-click":!1},{default:t(()=>[a(se,{class:"d-flex flex-column"},{default:t(()=>[a(ie,{class:"notification-section"},{append:t(()=>[k(a(r,{onClick:v},{default:t(()=>[a(C,{icon:f(d)?"tabler-mail-opened":"tabler-mail"},null,8,["icon"]),a(_e,{activator:"parent",location:"start"},{default:t(()=>[u(_(f(d)?"Mark all as read":"Mark all as unread"),1)]),_:1})]),_:1},512),[[h,i.notifications.length]])]),default:t(()=>[a(le,{class:"text-lg"},{default:t(()=>[u(" Notifications ")]),_:1})]),_:1}),a(y),a(f(ne),{options:{wheelPropagation:!1},style:{"max-block-size":"23.75rem"}},{default:t(()=>[a(ke,{class:"notification-list rounded-0 py-0"},{default:t(()=>[(m(!0),x(w,null,re(i.notifications,(s,c)=>(m(),x(w,{key:s.title},[c>0?(m(),p(y,{key:0})):I("",!0),a(L,{link:"",lines:"one","min-height":"66px",class:"list-item-hover-class",onClick:b=>o.$emit("click:notification",s)},{prepend:t(()=>[a(Ce,{start:""},{default:t(()=>[a(ce,{size:"40",color:s.color&&s.icon?s.color:void 0,image:s.img||void 0,icon:s.icon||void 0,variant:s.img?void 0:"tonal"},{default:t(()=>[s.text?(m(),x("span",xe,_(f(ge)(s.text)),1)):I("",!0)]),_:2},1032,["color","image","icon","variant"])]),_:2},1024)]),append:t(()=>[V("div",ye,[a(A,{dot:"",color:s.isSeen?"#a8aaae":"primary",class:de(`${s.isSeen?"visible-in-hover":""} ms-1`),onClick:ue(b=>o.$emit(s.isSeen?"unread":"read",[s.id]),["stop"])},null,8,["color","class","onClick"]),V("div",Se,[a(r,{size:"small",class:"visible-in-hover",onClick:b=>o.$emit("remove",s.id)},{default:t(()=>[a(C,{size:"20",icon:"tabler-x"})]),_:2},1032,["onClick"])])])]),default:t(()=>[a(z,null,{default:t(()=>[u(_(s.title),1)]),_:2},1024),a(he,null,{default:t(()=>[u(_(s.subtitle),1)]),_:2},1024),V("span",Ve,_(s.time),1)]),_:2},1032,["onClick"])],64))),128)),k(a(L,{class:"text-center text-medium-emphasis",style:{"block-size":"56px"}},{default:t(()=>[a(z,null,{default:t(()=>[u("No Notification Found!")]),_:1})]),_:1},512),[[h,!i.notifications.length]])]),_:1})]),_:1}),a(y),k(a(me,{class:"notification-footer"},{default:t(()=>[a(fe,{block:""},{default:t(()=>[u(" View All Notifications ")]),_:1})]),_:1},512),[[h,i.notifications.length]])]),_:1})]),_:1},8,["location"])]),_:1})}}});const Ne="/build/assets/avatar-3-47317f35.png",Be="/build/assets/avatar-4-b0163f21.png",Pe="/build/assets/avatar-5-d340221a.png",Re="/build/assets/paypal-01b645d1.svg",Me=M({__name:"NavBarNotifications",setup(e){const l=ve([{id:1,img:Be,title:"Congratulation Flora! 🎉",subtitle:"Won the monthly best seller badge",time:"Today",isSeen:!0},{id:2,text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday",isSeen:!1},{id:3,img:Pe,title:"New message received 👋🏻",subtitle:"You have 10 unread messages",time:"11 Aug",isSeen:!0},{id:4,img:Re,title:"Paypal",subtitle:"Received Payment",time:"25 May",isSeen:!1,color:"error"},{id:5,img:Ne,title:"Received Order 📦",subtitle:"New order received from john",time:"19 Mar",isSeen:!0}]),i=o=>{l.value.forEach((n,r)=>{o===n.id&&l.value.splice(r,1)})},d=o=>{l.value.forEach(n=>{o.forEach(r=>{r===n.id&&(n.isSeen=!0)})})},v=o=>{l.value.forEach(n=>{o.forEach(r=>{r===n.id&&(n.isSeen=!1)})})},g=o=>{o.isSeen||d([o.id])};return(o,n)=>{const r=pe;return m(),p(r,{notifications:f(l),onRemove:i,onRead:d,onUnread:v,"onClick:notification":g},null,8,["notifications"])}}});export{Me as default};