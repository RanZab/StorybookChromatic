import{j as M,a}from"./jsx-runtime-c292b226.js";import{r as t}from"./index-8b3efc3f.js";import{d as P}from"./styled-components.browser.esm-187eca76.js";import{C as o,I as R,a as j,D as z,b as N}from"./InputBase-fbc991b0.js";import"./_commonjsHelpers-de833af9.js";const U=e=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t.createElement("mask",{id:"mask0_2_1194",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:16,height:16},t.createElement("rect",{width:16,height:16,fill:"#D9D9D9"})),t.createElement("g",{mask:"url(#mask0_2_1194)"},t.createElement("path",{d:"M8.00016 10.6667L3.3335 6H12.6668L8.00016 10.6667Z",fill:"#F0F0F0"}))),W=P.input`
  background: transparent;
  border: none;
  outline: none;
  color: ${({$disabled:e,$error:l})=>e?o.disabledText:l?o.errorText:o.text};
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
    color: ${({$state:e,$disabled:l})=>l?o.disabledText:e==="selected"?o.selectedPlaceholder:o.placeholder};
    opacity: 1;
  }
  ${({$disabled:e})=>e&&"cursor: not-allowed;"}
`,s=({value:e,options:l=["Option A","Option B","Option C"],onSelectOption:i,placeholder:O="Select an option",disabled:p=!1,error:f=!1,state:V,"aria-label":C,onBlur:h,onFocus:g,width:$,height:A,...B})=>{const[v,b]=t.useState(!1),[F,w]=t.useState(!1),[d,T]=t.useState(e||null),L=t.useRef(null);let n="default";p||f?n="default":v&&d?n="selectedFilled":v?n="selected":d?n="filled":n=V||"default";const H=r=>{T(r),w(!1),i==null||i(r)};return M(R,{$state:n,$disabled:p,$error:f,$width:$,$height:A,children:[a(W,{ref:L,$state:n,$disabled:p,$error:f,type:"text",value:d||"",readOnly:!0,placeholder:O,disabled:p,"aria-label":C||O,onFocus:r=>{b(!0),w(!0),g==null||g()},onBlur:r=>{b(!1),setTimeout(()=>w(!1),100),h==null||h()},style:{paddingLeft:8,paddingRight:32,height:32},...B}),a(j,{position:"right",children:a(U,{width:16,height:16})}),a(z,{visible:F,children:l.map(r=>a(N,{selected:d===r,onMouseDown:()=>H(r),children:r},r))})]})};try{s.displayName="InputDropdown",s.__docgenInfo={description:"",displayName:"InputDropdown",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},options:{defaultValue:{value:"['Option A', 'Option B', 'Option C']"},description:"",name:"options",required:!1,type:{name:"string[]"}},onSelectOption:{defaultValue:null,description:"",name:"onSelectOption",required:!1,type:{name:"((option: string) => void)"}},placeholder:{defaultValue:{value:"Select an option"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"hover"'},{value:'"selected"'},{value:'"selectedFilled"'},{value:'"filled"'}]}},"aria-label":{defaultValue:null,description:`Defines a string value that labels the current element.
@see aria-labelledby.`,name:"aria-label",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((() => void) & FocusEventHandler<HTMLInputElement>)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((() => void) & FocusEventHandler<HTMLInputElement>)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}}}}}catch{}const X={title:"Components/InputDropdown",component:s,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#181818"}]}}},u={render:e=>{const[l,i]=t.useState(null);return a(s,{...e,value:l||"",onSelectOption:i,options:["Option A","Option B","Option C"]})},args:{placeholder:"Select an option"}},c={render:e=>a(s,{...e,disabled:!0,options:["Option A","Option B","Option C"]}),args:{placeholder:"Select an option"}},m={render:e=>a(s,{...e,error:!0,options:["Option A","Option B","Option C"]}),args:{placeholder:"Select an option"}};var y,D,S;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: InputDropdownProps) => {
    const [selected, setSelected] = useState<string | null>(null);
    return <InputDropdown {...args} value={selected || ''} onSelectOption={setSelected} options={['Option A', 'Option B', 'Option C']} />;
  },
  args: {
    placeholder: 'Select an option'
  }
}`,...(S=(D=u.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var x,I,_;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: InputDropdownProps) => <InputDropdown {...args} disabled options={['Option A', 'Option B', 'Option C']} />,
  args: {
    placeholder: 'Select an option'
  }
}`,...(_=(I=c.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var E,k,q;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: InputDropdownProps) => <InputDropdown {...args} error options={['Option A', 'Option B', 'Option C']} />,
  args: {
    placeholder: 'Select an option'
  }
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const Y=["Default","Disabled","Error"];export{u as Default,c as Disabled,m as Error,Y as __namedExportsOrder,X as default};
