import{d as w,c as k,m as d}from"./BVtrS5Fj.js";function N(g,a,c,o){return g.params.createElements&&Object.keys(o).forEach(l=>{if(!c[l]&&c.auto===!0){let r=w(g.el,`.${o[l]}`)[0];r||(r=k("div",o[l]),r.className=o[l],g.el.append(r)),c[l]=r,a[l]=r}}),c}function O(g){let{swiper:a,extendParams:c,on:o,emit:l}=g;c({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null};function r(n){let i;return n&&typeof n=="string"&&a.isElement&&(i=a.el.querySelector(n),i)?i:(n&&(typeof n=="string"&&(i=[...document.querySelectorAll(n)]),a.params.uniqueNavElements&&typeof n=="string"&&i&&i.length>1&&a.el.querySelectorAll(n).length===1?i=a.el.querySelector(n):i&&i.length===1&&(i=i[0])),n&&!i?n:i)}function u(n,i){const t=a.params.navigation;n=d(n),n.forEach(e=>{e&&(e.classList[i?"add":"remove"](...t.disabledClass.split(" ")),e.tagName==="BUTTON"&&(e.disabled=i),a.params.watchOverflow&&a.enabled&&e.classList[a.isLocked?"add":"remove"](t.lockClass))})}function v(){const{nextEl:n,prevEl:i}=a.navigation;if(a.params.loop){u(i,!1),u(n,!1);return}u(i,a.isBeginning&&!a.params.rewind),u(n,a.isEnd&&!a.params.rewind)}function b(n){n.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),l("navigationPrev"))}function x(n){n.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),l("navigationNext"))}function E(){const n=a.params.navigation;if(a.params.navigation=N(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let i=r(n.nextEl),t=r(n.prevEl);Object.assign(a.navigation,{nextEl:i,prevEl:t}),i=d(i),t=d(t);const e=(s,m)=>{s&&s.addEventListener("click",m==="next"?x:b),!a.enabled&&s&&s.classList.add(...n.lockClass.split(" "))};i.forEach(s=>e(s,"next")),t.forEach(s=>e(s,"prev"))}function h(){let{nextEl:n,prevEl:i}=a.navigation;n=d(n),i=d(i);const t=(e,s)=>{e.removeEventListener("click",s==="next"?x:b),e.classList.remove(...a.params.navigation.disabledClass.split(" "))};n.forEach(e=>t(e,"next")),i.forEach(e=>t(e,"prev"))}o("init",()=>{a.params.navigation.enabled===!1?C():(E(),v())}),o("toEdge fromEdge lock unlock",()=>{v()}),o("destroy",()=>{h()}),o("enable disable",()=>{let{nextEl:n,prevEl:i}=a.navigation;if(n=d(n),i=d(i),a.enabled){v();return}[...n,...i].filter(t=>!!t).forEach(t=>t.classList.add(a.params.navigation.lockClass))}),o("click",(n,i)=>{let{nextEl:t,prevEl:e}=a.navigation;t=d(t),e=d(e);const s=i.target;let m=e.includes(s)||t.includes(s);if(a.isElement&&!m){const p=i.path||i.composedPath&&i.composedPath();p&&(m=p.find(f=>t.includes(f)||e.includes(f)))}if(a.params.navigation.hideOnClick&&!m){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===s||a.pagination.el.contains(s)))return;let p;t.length?p=t[0].classList.contains(a.params.navigation.hiddenClass):e.length&&(p=e[0].classList.contains(a.params.navigation.hiddenClass)),l(p===!0?"navigationShow":"navigationHide"),[...t,...e].filter(f=>!!f).forEach(f=>f.classList.toggle(a.params.navigation.hiddenClass))}});const L=()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),E(),v()},C=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(a.navigation,{enable:L,disable:C,update:v,init:E,destroy:h})}export{O as N};
