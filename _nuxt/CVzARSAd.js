import{r as p,N as v,a2 as b,_ as f,o as c,c as u,a as s,d as y,t as _,u as l,T as g,b as N,F as k,q as x,aa as R}from"./COAjSYV0.js";function d(n,t=.8){const e=p(null);let a=null;return v(()=>{a=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&n(r.target)})},{threshold:t}),e.value&&a.observe(e.value)}),b(()=>{a&&e.value&&a.unobserve(e.value)}),e}const V={class:"counter"},w={key:0},T={class:"couner__descr"},I={__name:"Counter",props:{text:{type:String,required:!0},endValue:{type:Number,required:!0},increment:{type:Number,default:1},updateTime:{type:Number,default:30},symbol:{type:String,default:"+"}},setup(n){const t=n,e=p(0),i=d(()=>{let r=!1;const o=()=>{e.value<t.endValue&&!r?(e.value=Number(e.value)+Number(t.increment),setTimeout(o,t.updateTime)):(e.value=t.endValue,r=!0)};o()},1);return(r,o)=>(c(),u("div",V,[s("h2",{ref_key:"counterRef",ref:i,class:"counter__title black"},[y(_(l(e))+" ",1),l(e)===t.endValue?(c(),u("span",w,_(t.symbol),1)):g("",!0)],512),s("p",T,_(t.text),1)]))}},L=f(I,[["__scopeId","data-v-bfae6011"]]),m=n=>{n.classList.add("animate")},S={class:"partners"},$={class:"container"},q={class:"partners__wrapper"},B=["src","alt"],C={__name:"Partners",setup(n){const t=d(m,1),e=d(m,1);return(a,i)=>{const r=L;return c(),u("section",S,[s("div",$,[s("div",q,[s("div",{ref_key:"partnersLeftRef",ref:t,class:"partners__left animate-from-left"},[N(r,{text:"Some big companies that we work with, and trust us very much","end-value":890,increment:20,"update-time":20})],512),s("div",{ref_key:"partnersRightRef",ref:e,class:"partners__right animate-from-right"},[(c(!0),u(k,null,x(l(R),(o,h)=>(c(),u("div",{key:h,class:"partners__brand"},[s("img",{src:o.src,alt:o.name},null,8,B)]))),128))],512)])])])}}},A=f(C,[["__scopeId","data-v-d12192ad"]]);export{A as P,L as _,m as a,d as u};
