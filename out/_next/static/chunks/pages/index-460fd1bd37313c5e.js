(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(737)}])},3164:function(c,b,a){"use strict";a.d(b,{Z:function(){return f}});var d=a(7294),e=a(5248);function f(){return(0,d.useContext)(e.C)}},737:function(h,b,a){"use strict";a.r(b),a.d(b,{"__N_SSG":function(){return s},"default":function(){return t}});var c=a(4051),i=a.n(c),j=a(5893),k=a(7294),d=a(5582),l=a.n(d),m=a(1163),n=a(9103),o=a(3164),p=a(2010),e=a(9669),f=a.n(e),g=f().create({baseURL:"".concat("https://randomuser.me")}),q=g;function r(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}var s=!0,t=function(f){var g,h,a=f.home,x=(0,m.useRouter)().push,b=(0,k.useState)(null),c=b[0],s=b[1],d=(0,k.useState)(!1),t=d[0],y=d[1],e=(0,k.useState)(""),u=e[0],v=e[1],z=(0,o.Z)().onUser,w=(h=(g=i().mark(function a(){return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!c){a.next=3;break}return a.next=3,q.get("/api").then(function(b){var a=b.data;z({date:l()(c).format("DD/MM/YYYY"),avatar:a.results[0].picture.medium,first_name:null==a?void 0:a.results[0].name.first,last_name:null==a?void 0:a.results[0].name.last}),x("/quiz")});case 3:case"end":return a.stop()}},a)}),function(){var a=this,b=arguments;return new Promise(function(d,e){var f=g.apply(a,b);function c(a){r(f,d,e,c,h,"next",a)}function h(a){r(f,d,e,c,h,"throw",a)}c(void 0)})}),function(){return h.apply(this,arguments)});return(0,j.jsxs)("div",{className:"home",children:[(0,j.jsx)(p.F,{}),t?(0,j.jsxs)("div",{children:[(0,j.jsx)(n.xv,{type:"h3",label:"Acesse sua conta e"}),(0,j.jsx)(n.xv,{label:"Vamos come\xe7ar",type:"h1",className:"mt-3"}),(0,j.jsx)(n.xv,{label:"O quiz ir\xe1 avaliar seu perfil e informar o melhor curso para voc\xea.",className:"text-gray-400 mt-6 mb-14 max-w-[23rem]"}),(0,j.jsx)(n.zx,{label:"Entrar",onClick:w,className:"w-full max-w-[28rem]"})]}):(0,j.jsxs)("div",{className:"home-container",children:[(0,j.jsxs)("div",{className:"home-title",children:[(0,j.jsx)(n.xv,{label:a.title,type:"h1"}),(0,j.jsx)(n.xv,{label:a.subtitle,type:"h1"})]}),(0,j.jsx)(n.xv,{label:a.form.title,className:"text-gray-400 mt-6 mb-14"}),(0,j.jsx)(n.Ph,{label:a.form.fields.options.label,options:["Cis","Trans"],selected:u,className:"mb-8",onSelected:v,placeholder:a.form.fields.options.placeholder}),(0,j.jsx)(n.aN,{label:a.form.fields.birh_date.label,start:c,onStart:s,placeholder:"Selecione uma data"}),(0,j.jsx)(n.zx,{label:a.form.button,onClick:function(){return y(!0)},disabled:!c,className:"w-full mt-20"})]})]})}}},function(a){a.O(0,[296,885,470,669,10,774,888,179],function(){return a(a.s=5301)}),_N_E=a.O()}])