import{a as s,b as t,j as e,c as d}from"./vendor.6dd26a1e.js";import u from"./MobileCurrencySelector.client.6c1b4457.js";import{_ as p,u as h,r as f,d as v}from"./open-closed.esm.3e9d81b8.js";import{u as m,F as a}from"./use-focus-trap.esm.7c167385.js";import"./CurrencySelector.client.23c5c108.js";var C="div";function g(r){var o=s.exports.useRef(null),n=r.initialFocus,i=p(r,["initialFocus"]),l=h();m(o,l?a.All:a.None,{initialFocus:n});var c={ref:o};return f({props:v({},i,c),defaultTag:C,name:"FocusTrap"})}function w(){return t("svg",{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.800049 1.9999C0.800049 1.11625 1.51639 0.399902 2.40005 0.399902H21.6C22.4837 0.399902 23.2001 1.11625 23.2001 1.9999C23.2001 2.88356 22.4837 3.5999 21.6 3.5999H2.40005C1.51639 3.5999 0.800049 2.88356 0.800049 1.9999Z",fill:"black"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.800049 9.9999C0.800049 9.11625 1.51639 8.3999 2.40005 8.3999H21.6C22.4837 8.3999 23.2001 9.11625 23.2001 9.9999C23.2001 10.8836 22.4837 11.5999 21.6 11.5999H2.40005C1.51639 11.5999 0.800049 10.8836 0.800049 9.9999Z",fill:"black"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.800049 17.9999C0.800049 17.1162 1.51639 16.3999 2.40005 16.3999H21.6C22.4837 16.3999 23.2001 17.1162 23.2001 17.9999C23.2001 18.8836 22.4837 19.5999 21.6 19.5999H2.40005C1.51639 19.5999 0.800049 18.8836 0.800049 17.9999Z",fill:"black"})]})}function R({collections:r,isOpen:o,setIsOpen:n}){const i=o?g:s.exports.Fragment;return e("div",{className:"lg:hidden",children:t(i,{children:[e("button",{type:"button",className:"flex justify-center items-center w-7 h-full",onClick:()=>n(l=>!l),children:o?e(b,{}):e(w,{})}),o?t("div",{className:"absolute -left-0 top-20 w-full h-screen z-10 bg-pink-100 px-4 md:px-12 py-7",children:[e("ul",{children:r.map(l=>e("li",{className:"border-b border-gray-300",children:t(d,{className:"group py-5 text-gray-900 flex items-center justify-between",to:`/collections/${l.handle}`,onClick:()=>n(!1),children:[l.title,e(x,{className:"hidden group-hover:block"})]})},l.id))}),e(u,{})]}):null]})})}function b(){return e("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M1 17L17 1M1 1L17 17",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function x({className:r}){return e("svg",{className:r,width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.999762 12C0.743762 12 0.487762 11.902 0.292762 11.707C-0.0982383 11.316 -0.0982383 10.684 0.292762 10.293L4.58576 6.00001L0.292762 1.70701C-0.0982383 1.31601 -0.0982383 0.684006 0.292762 0.293006C0.683762 -0.0979941 1.31576 -0.0979941 1.70676 0.293006L6.70676 5.29301C7.09776 5.68401 7.09776 6.31601 6.70676 6.70701L1.70676 11.707C1.51176 11.902 1.25576 12 0.999762 12Z",fill:"black"})})}export{R as default};
//# sourceMappingURL=MobileNavigation.client.0af9bb4a.js.map
