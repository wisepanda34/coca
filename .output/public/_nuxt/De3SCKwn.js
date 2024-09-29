import{z as x,_ as g,o as t,c as a,a as e,B as r,g as n,t as l,b as h,j as k,v as F,d as S,F as m,r as v,k as y,l as N,p as f,f as b,V as T,W as V,A as j,X as q}from"./D54PhuMQ.js";const C=x("switch",{state:()=>({isSave:!0}),actions:{toggleAnnual(){this.isSave=!this.isSave}}}),z={class:"toggle-switch"},E={__name:"ToggleSwitch",props:{label:{type:String,required:!1}},setup(s){const c=C(),o=s;return(d,u)=>(t(),a("div",z,[e("div",{class:"switch",onClick:u[0]||(u[0]=(...i)=>n(c).toggleAnnual&&n(c).toggleAnnual(...i))},[e("div",{class:r(["switch-round",{"toggle--false":!n(c).isSave}])},null,2)]),e("label",{class:r(["toggle-switch__label",{"toggle--false":!n(c).isSave}])},l(o.label),3)]))}},O=g(E,[["__scopeId","data-v-6477896b"]]),I=s=>(f("data-v-e41416bb"),s=s(),b(),s),U={class:"card__wrapper"},W={class:"card__icons"},D={class:"card__package"},L={class:"card__descr"},X={class:"card__price"},G={key:0},H={key:1},J=I(()=>e("span",{class:"card__price_month"}," /mo",-1)),K=I(()=>e("div",{class:"card__subtitle"},"What’s included:",-1)),M={class:"card__list"},Q={__name:"PricingCard",props:{card:{type:Object,required:!0},includes:{type:Array,required:!0}},emits:["choosePlan"],setup(s,{emit:c}){const o=C(),d=s,u=c,i=()=>{u("choosePlan",d.card),console.log("handleChoosePlan")};return(_,p)=>{const $=y,B=N;return t(),a("div",{class:r(["card",{"bg-blue":s.card.bgBlue}])},[e("div",U,[e("div",W,[h($,{src:s.card.icon,alt:"icon",class:"card__icon"},null,8,["src"]),s.card.iconBest?(t(),k($,{key:0,src:s.card.iconBest,alt:"icon",class:"card__iconBest"},null,8,["src"])):F("",!0)]),e("h3",D,l(s.card.package),1),e("p",L,l(s.card.descr),1),e("div",X,[S(" $ "),n(o).isSave?(t(),a("span",G,l(s.card.priceAnnual),1)):(t(),a("span",H,l(s.card.price),1)),J]),K,e("ul",M,[(t(!0),a(m,null,v(s.includes,(A,w)=>(t(),a("li",{key:w,class:"card__item"},[e("span",{class:r({inaccessible:!s.card.include.includes(w)})},l(A),3)]))),128))]),h(B,{class:"card__button",text:"Choose Plan","is-white":!1,"border-color":"#7e8492",onClick:i})])],2)}}},R=g(Q,[["__scopeId","data-v-e41416bb"]]),Y=s=>(f("data-v-584f1bbd"),s=s(),b(),s),Z={class:"pricing"},ss={class:"container"},es={class:"pricing__wrapper"},cs={class:"pricing__up"},ts={class:"pricing__plans"},as=Y(()=>e("h1",{class:"pricing__title title-h1"}," Choose a plan for a more advanced business ",-1)),ns={class:"pricing__cards"},os={__name:"Pricing",setup(s){const c=o=>{console.log("Выбранный план: ",o)};return(o,d)=>{const u=y,i=O;return t(),a("section",Z,[e("div",ss,[e("div",es,[e("div",cs,[e("div",ts,[S(" Pricing plans "),h(u,{src:"/images/smilik.png",alt:"smile"})]),as,h(i,{class:"pricing__plans-switch",label:"Annual pricing (save 20%)"})]),e("div",ns,[(t(!0),a(m,null,v(n(T),(_,p)=>(t(),k(R,{key:p,card:_,includes:n(V),class:r({upper:p===1}),onChoosePlan:c},null,8,["card","includes","class"]))),128))])])])])}}},is=g(os,[["__scopeId","data-v-584f1bbd"]]),P=s=>(f("data-v-c9a0c837"),s=s(),b(),s),_s={class:"faq"},ls={class:"container"},rs={class:"faq__wrapper"},ds=P(()=>e("h3",{class:"faq__title title-h3"},"Frequently asked questions",-1)),us=P(()=>e("p",{class:"faq__descr"}," Everything you need to know about the product and billing. ",-1)),hs={class:"faq__menu"},ps=["onClick"],gs={class:"faq__item_question"},ms={class:"faq__item_switch"},vs={__name:"Faq",setup(s){const c=j(Array(q.length).fill(!1)),o=d=>{c.value[d]=!c.value[d]};return(d,u)=>(t(),a("div",_s,[e("div",ls,[e("div",rs,[ds,us,e("ul",hs,[(t(!0),a(m,null,v(n(q),(i,_)=>(t(),a("li",{key:_,class:"faq__item",onClick:p=>o(_)},[e("div",gs,l(i.question),1),e("div",ms,[e("span",{class:r({rotate:n(c)[_]})},null,2),e("span",{class:r({rotate:n(c)[_]})},null,2)]),e("div",{class:r(["faq__item_answer",{open:n(c)[_]}])},l(i.answer),3)],8,ps))),128))])])])]))}},fs=g(vs,[["__scopeId","data-v-c9a0c837"]]),$s={__name:"pricing",setup(s){return(c,o)=>(t(),a("div",null,[h(is),h(fs)]))}};export{$s as default};