import{j as he,a as l}from"./jsx-runtime-c292b226.js";import{r as d}from"./index-8b3efc3f.js";import{d as te}from"./styled-components.browser.esm-187eca76.js";import{C as p,I as ve}from"./InputBase-fbc991b0.js";import{S as xe}from"./Icon_clear-bc508765.js";import"./_commonjsHelpers-de833af9.js";const be=te.textarea`
  background: transparent;
  border: none;
  outline: none;
  color: ${({$disabled:e,$error:t})=>e?p.disabledText:t?p.errorText:p.text};
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  width: 100%;
  min-height: 32px;
  height: 32px !important;
  max-height: ${({$maxHeight:e})=>e!==void 0?`${e}px`:"120px"};
  box-sizing: border-box;
  transition: height 0.2s;
  resize: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  vertical-align: top;
  text-align: left;
  display: block;
  padding: 6px 8px;
  &::placeholder {
    color: ${({$state:e,$disabled:t})=>t?p.disabledText:e==="selected"?p.selectedPlaceholder:p.placeholder};
    opacity: 1;
  }
  ${({$disabled:e})=>e&&"cursor: not-allowed;"}
`,ye=te.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s;
  &:hover {
    background: rgba(255,255,255,0.08);
    border-radius: 50%;
  }
  &:focus {
    outline: 2px solid #e5ff00;
    outline-offset: 2px;
  }
`,s=({value:e,onChange:t,placeholder:u="Add a name",disabled:n=!1,error:m=!1,state:ae,"aria-label":re,onBlur:V,onFocus:w,onClear:A,width:ne,height:le,minHeight:F=32,maxHeight:f=120,...se})=>{const[oe,E]=d.useState(""),H=e!==void 0,c=H?e:oe,[q,k]=d.useState(!1),o=d.useRef(null),[de,$]=d.useState(F),g=d.useCallback(a=>{if(!o.current||!a||a.length===0)return 32;const r=document.createElement("span");r.style.visibility="hidden",r.style.position="absolute",r.style.fontSize="14px",r.style.fontFamily="Inter, sans-serif",r.style.whiteSpace="nowrap",r.textContent=a,document.body.appendChild(r);const pe=r.offsetWidth;document.body.removeChild(r);const me=o.current.offsetWidth-32;if(pe>me){const h=o.current,fe=h.style.height;h.style.height="auto";const ge=h.scrollHeight;return h.style.height=fe,Math.min(ge,f)}return 32},[f]);d.useEffect(()=>{const a=g(c||"");o.current&&(o.current.style.height=a+"px"),$(a)},[c,F,f,g]);let i="default";n||m?i="default":q&&c?i="selectedFilled":q?i="selected":c?i="filled":i=ae||"default";const C=!n&&!m&&c&&q,ue=a=>{H||E(a.target.value),t==null||t(a),setTimeout(()=>{const r=g(a.target.value);o.current&&(o.current.style.height=r+"px"),$(r)},0)},ie=a=>{a.preventDefault(),a.stopPropagation(),H?t==null||t({target:{value:""}}):(E(""),t==null||t({target:{value:""}})),A==null||A(),setTimeout(()=>{var r;(r=o.current)==null||r.focus(),$(g(""))},0)},ce=a=>{a.preventDefault(),a.stopPropagation()};return he(ve,{$state:i,$disabled:n,$error:m,$width:ne,$height:le,children:[l(be,{ref:o,$state:i,$disabled:n,$error:m,value:c,onChange:ue,placeholder:u,disabled:n,"aria-label":re||u,onFocus:()=>{k(!0),w==null||w()},onBlur:()=>{k(!1),V==null||V()},style:{height:de,paddingLeft:8,paddingRight:C?32:8},$minHeight:F,$maxHeight:f,...se}),C&&l(ye,{type:"button","aria-label":"Clear input",tabIndex:0,onMouseDown:ce,onClick:ie,children:l(xe,{width:16,height:16})})]})};try{s.displayName="InputText",s.__docgenInfo={description:"",displayName:"InputText",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}},placeholder:{defaultValue:{value:"Add a name"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"hover"'},{value:'"selected"'},{value:'"selectedFilled"'},{value:'"filled"'}]}},"aria-label":{defaultValue:null,description:`Defines a string value that labels the current element.
@see aria-labelledby.`,name:"aria-label",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((() => void) & FocusEventHandler<HTMLTextAreaElement>)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((() => void) & FocusEventHandler<HTMLTextAreaElement>)"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:{value:"32"},description:"",name:"minHeight",required:!1,type:{name:"number"}},maxHeight:{defaultValue:{value:"120"},description:"",name:"maxHeight",required:!1,type:{name:"number"}}}}}catch{}const Fe={title:"Components/InputText",component:s,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#181818"}]}}},v={render:e=>l(s,{...e}),args:{placeholder:"Add a name"}},x={render:e=>l(s,{...e,state:"hover"}),args:{placeholder:"Add a name"}},b={render:e=>{const[t,u]=d.useState("");return l(s,{...e,value:t,onChange:n=>u(n.target.value),state:"selected"})},args:{placeholder:"Add a name"}},y={render:e=>{const[t,u]=d.useState("Filled value");return l(s,{...e,value:t,onChange:n=>u(n.target.value),state:"selectedFilled"})},args:{placeholder:"Add a name"}},T={render:e=>{const[t,u]=d.useState("Filled value");return l(s,{...e,value:t,onChange:n=>u(n.target.value),state:"filled"})},args:{placeholder:"Add a name"}},I={render:e=>l(s,{...e,disabled:!0}),args:{placeholder:"Add a name"}},S={render:e=>l(s,{...e,error:!0}),args:{placeholder:"Add a name"}};var P,_,D;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: InputTextProps) => <InputText {...args} />,
  args: {
    placeholder: 'Add a name'
  }
}`,...(D=(_=v.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var M,z,L;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: InputTextProps) => <InputText {...args} state="hover" />,
  args: {
    placeholder: 'Add a name'
  }
}`,...(L=(z=x.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var W,j,R;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: InputTextProps) => {
    const [value, setValue] = useState('');
    return <InputText {...args} value={value} onChange={e => setValue(e.target.value)} state="selected" />;
  },
  args: {
    placeholder: 'Add a name'
  }
}`,...(R=(j=b.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var O,N,U;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: InputTextProps) => {
    const [value, setValue] = useState('Filled value');
    return <InputText {...args} value={value} onChange={e => setValue(e.target.value)} state="selectedFilled" />;
  },
  args: {
    placeholder: 'Add a name'
  }
}`,...(U=(N=y.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var Y,B,G;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: (args: InputTextProps) => {
    const [value, setValue] = useState('Filled value');
    return <InputText {...args} value={value} onChange={e => setValue(e.target.value)} state="filled" />;
  },
  args: {
    placeholder: 'Add a name'
  }
}`,...(G=(B=T.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (args: InputTextProps) => <InputText {...args} disabled />,
  args: {
    placeholder: 'Add a name'
  }
}`,...(Q=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: (args: InputTextProps) => <InputText {...args} error />,
  args: {
    placeholder: 'Add a name'
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const He=["Default","Hover","Selected","SelectedFilled","Filled","Disabled","Error"];export{v as Default,I as Disabled,S as Error,T as Filled,x as Hover,b as Selected,y as SelectedFilled,He as __namedExportsOrder,Fe as default};
