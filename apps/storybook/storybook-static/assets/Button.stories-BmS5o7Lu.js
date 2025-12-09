import"./iframe-bmdNZDK0.js";import"./preload-helper-PPVm8Dsz.js";var y={exports:{}},a={},u;function d(){if(u)return a;u=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function n(c,r,e){var m=null;if(e!==void 0&&(m=""+e),r.key!==void 0&&(m=""+r.key),"key"in r){e={};for(var p in r)p!=="key"&&(e[p]=r[p])}else e=r;return r=e.ref,{$$typeof:s,type:c,key:m,ref:r!==void 0?r:null,props:e}}return a.Fragment=i,a.jsx=n,a.jsxs=n,a}var l;function v(){return l||(l=1,y.exports=d()),y.exports}var f=v();const g=({variant:s="primary",className:i="",children:n,...c})=>{const r="dui-btn",e=s==="primary"?`${r} ${r}--primary`:`${r} ${r}--secondary`;return f.jsx("button",{className:`${e} ${i}`.trim(),...c,children:n})},k={title:"DeweyUI/Button",component:g,args:{children:"Click me",variant:"primary"}},t={args:{variant:"primary"}},o={args:{variant:"secondary"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...o.parameters?.docs?.source}}};const S=["Primary","Secondary"];export{t as Primary,o as Secondary,S as __namedExportsOrder,k as default};
