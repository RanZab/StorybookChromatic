import{j as U,a as n}from"./jsx-runtime-c292b226.js";import{r as t}from"./index-8b3efc3f.js";import{d as M}from"./styled-components.browser.esm-187eca76.js";import{C as i,I as W,a as N}from"./InputBase-fbc991b0.js";import{S as Z}from"./Icon_clear-bc508765.js";import"./_commonjsHelpers-de833af9.js";const Y=e=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t.createElement("mask",{id:"mask0_2_1087",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:16,height:16},t.createElement("rect",{width:16,height:16,fill:"#D9D9D9"})),t.createElement("g",{mask:"url(#mask0_2_1087)"},t.createElement("path",{d:"M13.0667 14L8.86667 9.8C8.53333 10.0667 8.15 10.2778 7.71667 10.4333C7.28333 10.5889 6.82222 10.6667 6.33333 10.6667C5.12222 10.6667 4.09722 10.2472 3.25833 9.40833C2.41944 8.56944 2 7.54444 2 6.33333C2 5.12222 2.41944 4.09722 3.25833 3.25833C4.09722 2.41944 5.12222 2 6.33333 2C7.54444 2 8.56944 2.41944 9.40833 3.25833C10.2472 4.09722 10.6667 5.12222 10.6667 6.33333C10.6667 6.82222 10.5889 7.28333 10.4333 7.71667C10.2778 8.15 10.0667 8.53333 9.8 8.86667L14 13.0667L13.0667 14ZM6.33333 9.33333C7.16667 9.33333 7.875 9.04167 8.45833 8.45833C9.04167 7.875 9.33333 7.16667 9.33333 6.33333C9.33333 5.5 9.04167 4.79167 8.45833 4.20833C7.875 3.625 7.16667 3.33333 6.33333 3.33333C5.5 3.33333 4.79167 3.625 4.20833 4.20833C3.625 4.79167 3.33333 5.5 3.33333 6.33333C3.33333 7.16667 3.625 7.875 4.20833 8.45833C4.79167 9.04167 5.5 9.33333 6.33333 9.33333Z",fill:"#BABABA"}))),G=M(N)`
  left: 8px !important;
`,J=M.input`
  background: transparent;
  border: none;
  outline: none;
  color: ${({$disabled:e,$error:a})=>e?i.disabledText:a?i.errorText:i.text};
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  width: 100%;
  min-height: 32px;
  height: 32px !important;
  box-sizing: border-box;
  transition: height 0.2s;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  vertical-align: top;
  text-align: left;
  display: block;
  padding: 6px 16px;
  &::placeholder {
    color: ${({$state:e,$disabled:a})=>a?i.disabledText:e==="selected"?i.selectedPlaceholder:i.placeholder};
    opacity: 1;
  }
  ${({$disabled:e})=>e&&"cursor: not-allowed;"}
`,o=({value:e,onChange:a,placeholder:u="Search...",disabled:s=!1,error:d=!1,state:P,"aria-label":F,onBlur:h,onFocus:g,onClear:v,width:H,height:j,...O})=>{const[R,y]=t.useState(""),S=e!==void 0,p=S?e:R,[b,I]=t.useState(!1),w=t.useRef(null);let r="default";s||d?r="default":b&&p?r="selectedFilled":b?r="selected":p?r="filled":r=P||"default";const x=!s&&!d&&p&&b,z=l=>{S||y(l.target.value),a==null||a(l)},A=l=>{l.preventDefault(),l.stopPropagation(),S?a==null||a({target:{value:""}}):(y(""),a==null||a({target:{value:""}})),v==null||v(),setTimeout(()=>{var C;(C=w.current)==null||C.focus()},0)},B=l=>{l.preventDefault(),l.stopPropagation()};return U(W,{$state:r,$disabled:s,$error:d,$width:H,$height:j,children:[n(G,{position:"left",children:n(Y,{width:16,height:16})}),n(J,{ref:w,$state:r,$disabled:s,$error:d,value:p,onChange:z,placeholder:u,disabled:s,"aria-label":F||u,onFocus:()=>{I(!0),g==null||g()},onBlur:()=>{I(!1),h==null||h()},style:{paddingLeft:24,paddingRight:x?40:8,height:32},...O}),x&&n("button",{type:"button","aria-label":"Clear input",tabIndex:0,onMouseDown:B,onClick:A,style:{position:"absolute",right:8,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:0,margin:0,width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:2},children:n(Z,{width:16,height:16})})]})};try{o.displayName="InputSearch",o.__docgenInfo={description:"",displayName:"InputSearch",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},placeholder:{defaultValue:{value:"Search..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"hover"'},{value:'"selected"'},{value:'"selectedFilled"'},{value:'"filled"'}]}},"aria-label":{defaultValue:null,description:`Defines a string value that labels the current element.
@see aria-labelledby.`,name:"aria-label",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((() => void) & FocusEventHandler<HTMLInputElement>)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((() => void) & FocusEventHandler<HTMLInputElement>)"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}}}}}catch{}const re={title:"Components/InputSearch",component:o,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#181818"}]}}},c={render:e=>{const[a,u]=t.useState("");return n(o,{...e,value:a,onChange:s=>u(s.target.value)})},args:{placeholder:"Search..."}},m={render:e=>n(o,{...e,disabled:!0}),args:{placeholder:"Search..."}},f={render:e=>n(o,{...e,error:!0}),args:{placeholder:"Search..."}};var V,E,k;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: InputSearchProps) => {
    const [value, setValue] = useState('');
    return <InputSearch {...args} value={value} onChange={e => setValue(e.target.value)} />;
  },
  args: {
    placeholder: 'Search...'
  }
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var _,q,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: InputSearchProps) => <InputSearch {...args} disabled />,
  args: {
    placeholder: 'Search...'
  }
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var $,L,T;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: InputSearchProps) => <InputSearch {...args} error />,
  args: {
    placeholder: 'Search...'
  }
}`,...(T=(L=f.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const le=["Default","Disabled","Error"];export{c as Default,m as Disabled,f as Error,le as __namedExportsOrder,re as default};
