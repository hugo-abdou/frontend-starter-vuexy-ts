import{L as c,N as v,S as d,W as h,aD as m,Z as u,E as g,G as a,a9 as x,x as C}from"./main-da363878.js";const f=c()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},setup(e,r){let{attrs:t}=r;const{themeClasses:s}=h(e),{textColorClasses:l,textColorStyles:n}=m(u(e,"color")),o=g(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=a(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=a(e.thickness)),i});return x(()=>C("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,l.value,e.class],style:[o.value,n.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{f as V};
