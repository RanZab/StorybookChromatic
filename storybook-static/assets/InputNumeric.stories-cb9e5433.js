import{j as V,a}from"./jsx-runtime-c292b226.js";import{r as t}from"./index-8b3efc3f.js";import{d as U}from"./styled-components.browser.esm-187eca76.js";import{C as u,I as Z,a as G,N as J,c as q}from"./InputBase-fbc991b0.js";import"./_commonjsHelpers-de833af9.js";const S=e=>t.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9.33 8",...e},t.createElement("defs",null,t.createElement("style",null,`
      .st0 {
        fill: #f0f0f0;
      }
    `)),t.createElement("polygon",{className:"st0",points:"0 6.33 4.67 1.67 9.33 6.33 0 6.33"})),K=e=>t.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9.34 8",...e},t.createElement("defs",null,t.createElement("style",null,`
      .st0 {
        fill: #f0f0f0;
      }
    `)),t.createElement("path",{className:"st0",d:"M.01,1.66h9.33l-4.67,4.67L0,1.66h.01Z"})),Q=U.input`
  background: transparent;
  border: none;
  outline: none;
  color: ${({$disabled:e,$error:r})=>e?u.disabledText:r?u.errorText:u.text};
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
  padding: 6px 8px;
  &::placeholder {
    color: ${({$state:e,$disabled:r})=>r?u.disabledText:e==="selected"?u.selectedPlaceholder:u.placeholder};
    opacity: 1;
  }
  ${({$disabled:e})=>e&&"cursor: not-allowed;"}
  /* Hide browser number input spinners */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`,o=({value:e,onChange:r,placeholder:d="Enter a number",disabled:i=!1,error:f=!1,state:M,"aria-label":O,onBlur:g,onFocus:h,min:b,max:v,step:y=1,width:P,height:R,...j})=>{const[z,x]=t.useState(""),w=e!==void 0,s=w?e:z,[E,I]=t.useState(!1),A=t.useRef(null);let n="default";i||f?n="default":E&&s?n="selectedFilled":E?n="selected":s?n="filled":n=M||"default";const B=l=>{const W=l.target.value===""?"":Number(l.target.value);w||x(W),r==null||r(l)},N=l=>{b!==void 0&&l<b||v!==void 0&&l>v||(w||x(l),r==null||r({target:{value:String(l)}}))};return V(Z,{$state:n,$disabled:i,$error:f,$width:P,$height:R,children:[a(G,{position:"left",children:a(S,{width:16,height:16,style:{opacity:0}})}),a(Q,{ref:A,$state:n,$disabled:i,$error:f,type:"number",value:s,onChange:B,min:b,max:v,step:y,placeholder:d,disabled:i,"aria-label":O||d,onFocus:()=>{I(!0),h==null||h()},onBlur:()=>{I(!1),g==null||g()},style:{paddingLeft:8,paddingRight:8,height:32},...j}),V(J,{children:[a(q,{type:"button","aria-label":"Increment",onClick:()=>N((s===""?0:Number(s))+(y||1)),children:a(S,{width:16,height:8})}),a(q,{type:"button","aria-label":"Decrement",onClick:()=>N((s===""?0:Number(s))-(y||1)),children:a(K,{width:16,height:8})})]})]})};try{o.displayName="InputNumeric",o.__docgenInfo={description:"",displayName:"InputNumeric",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},placeholder:{defaultValue:{value:"Enter a number"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"hover"'},{value:'"selected"'},{value:'"selectedFilled"'},{value:'"filled"'}]}},"aria-label":{defaultValue:null,description:`Defines a string value that labels the current element.
@see aria-labelledby.`,name:"aria-label",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((() => void) & FocusEventHandler<HTMLInputElement>)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((() => void) & FocusEventHandler<HTMLInputElement>)"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}}}}}catch{}const ae={title:"Components/InputNumeric",component:o,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#181818"}]}}},p={render:e=>{const[r,d]=t.useState("");return a(o,{...e,value:r,onChange:i=>d(i.target.value),min:0,max:100,step:1})},args:{placeholder:"Enter a number"}},c={render:e=>a(o,{...e,disabled:!0,min:0,max:100,step:1}),args:{placeholder:"Enter a number"}},m={render:e=>a(o,{...e,error:!0,min:0,max:100,step:1}),args:{placeholder:"Enter a number"}};var _,k,$;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: InputNumericProps) => {
    const [value, setValue] = useState('');
    return <InputNumeric {...args} value={value} onChange={e => setValue(e.target.value)} min={0} max={100} step={1} />;
  },
  args: {
    placeholder: 'Enter a number'
  }
}`,...($=(k=p.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var L,C,D;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: InputNumericProps) => <InputNumeric {...args} disabled min={0} max={100} step={1} />,
  args: {
    placeholder: 'Enter a number'
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var F,H,T;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: InputNumericProps) => <InputNumeric {...args} error min={0} max={100} step={1} />,
  args: {
    placeholder: 'Enter a number'
  }
}`,...(T=(H=m.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const ne=["Default","Disabled","Error"];export{p as Default,c as Disabled,m as Error,ne as __namedExportsOrder,ae as default};
