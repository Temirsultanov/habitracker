import{_ as d,L as m,p as u,q as g,r as l,o as h,c as V,a as s,b as n,s as f,w,l as r}from"./index.c38046b7.js";const U={components:{LogoIcon:m,AppInput:u},data(){return{email:"",password:""}},methods:{onFormSubmit(i,e){g(i,e),this.$router.push("/lettersent")}}},x={class:"signUp__section"},v={class:"formBlock"},b=s("h2",{class:"title signUp__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",-1),k=s("button",{class:"signUp__button text-small"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",-1),S={class:"signIn"},B={class:"text-small"},I=r(" \u0415\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442? "),N=r("\u0412\u043E\u0439\u0442\u0438");function q(i,e,y,C,o,a){const p=l("logo-icon"),_=l("app-input"),c=l("router-link");return h(),V("section",x,[s("div",v,[n(p,{class:"signUp__logo"}),b,s("form",{onSubmit:e[2]||(e[2]=f(t=>a.onFormSubmit(o.email,o.password),["prevent"]))},[n(_,{modelValue:o.email,"onUpdate:modelValue":e[0]||(e[0]=t=>o.email=t),placeholder:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",required:"",type:"email"},null,8,["modelValue"]),n(_,{modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=t=>o.password=t),placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",minlength:"6",required:""},null,8,["modelValue"]),k],32)]),s("div",S,[s("h3",B,[I,n(c,{to:"/signin",class:"signIn__link"},{default:w(()=>[N]),_:1})])])])}const L=d(U,[["render",q]]);export{L as default};