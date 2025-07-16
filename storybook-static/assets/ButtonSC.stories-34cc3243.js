import{j as E,a as u}from"./jsx-runtime-c292b226.js";import{r as A}from"./index-8b3efc3f.js";import{m as _,d as $,l as n}from"./styled-components.browser.esm-187eca76.js";import"./_commonjsHelpers-de833af9.js";const e={primary:{default:"#E5FF00",hover:"#F4FF99",active:"#C2FF00",text:"#333333",disabledBg:"#3F3F2B",disabledText:"#8E8E8E",focusRing:"rgba(229,255,0,0.4)"},secondary:{border:"#E5FF00",hoverBorder:"#F4FF99",activeBorder:"#C2FF00",disabledBorder:"#3F3F2B",text:"#E5FF00",hoverText:"#F4FF99",activeText:"#C2FF00",disabledText:"#3F3F2B",hoverBg:"#333333",activeBg:"#282828",focusBg:"#010101",focusRing:"rgba(229,255,0,0.4)"},tertiary:{text:"#E5FF00",hoverText:"#F4FF99",activeText:"#C2FF00",disabledText:"#3F3F2B",hoverBg:"#333333",activeBg:"#282828",focusRing:"rgba(229,255,0,0.4)"},alternative:{default:"#282828",hover:"#333333",active:"#282828",text:"#F0F0F0",activeText:"#C2FF00",disabledBg:"#181818",disabledText:"#3F3F2B",focusRing:"rgba(229,255,0,0.4)"},alert:{default:"#FF3131",hover:"#FF6161",active:"#B72C2C",text:"#F0F0F0",disabledBg:"#8E1616",disabledText:"#BABABA",focusRing:"#F0F0F0"}},I={default:"8px"},d={family:"Inter, sans-serif",weight:700,size:"14px",lineHeight:1.4};_`
  to {
    transform: scale(2.5);
    opacity: 0;
  }
`;const z=$.span`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  z-index: 1;
`,H=({hierarchy:r,disabled:t})=>{switch(r){case"primary":return n`
        background: ${t?e.primary.disabledBg:e.primary.default};
        color: ${t?e.primary.disabledText:e.primary.text};
        border: none;
        &:hover:not(:disabled) {
          background: ${e.primary.hover};
        }
        &:active:not(:disabled) {
          background: ${e.primary.active};
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px ${e.primary.focusRing};
        }
        &:disabled {
          cursor: not-allowed;
        }
      `;case"secondary":return n`
        background: ${"transparent"};
        color: ${t?e.secondary.disabledText:e.secondary.text};
        border: 1px solid ${t?e.secondary.disabledBorder:e.secondary.border};
        &:hover:not(:disabled) {
          background: ${e.secondary.hoverBg};
          color: ${e.secondary.hoverText};
          border-color: ${e.secondary.hoverBorder};
        }
        &:active:not(:disabled) {
          background: ${e.secondary.activeBg};
          color: ${e.secondary.activeText};
          border-color: ${e.secondary.activeBorder};
        }
        &:focus-visible {
          background: ${e.secondary.focusBg};
          border-color: ${e.secondary.border};
          box-shadow: 0 0 0 2px ${e.secondary.focusRing};
        }
        &:disabled {
          cursor: not-allowed;
        }
      `;case"tertiary":return n`
        background: transparent;
        color: ${t?e.tertiary.disabledText:e.tertiary.text};
        border: none;
        &:hover:not(:disabled) {
          background: ${e.tertiary.hoverBg};
          color: ${e.tertiary.hoverText};
        }
        &:active:not(:disabled) {
          background: ${e.tertiary.activeBg};
          color: ${e.tertiary.activeText};
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px ${e.tertiary.focusRing};
        }
        &:disabled {
          cursor: not-allowed;
        }
      `;case"alternative":return n`
        background: ${t?e.alternative.disabledBg:e.alternative.default};
        color: ${t?e.alternative.disabledText:e.alternative.text};
        border: none;
        &:hover:not(:disabled) {
          background: ${e.alternative.hover};
        }
        &:active:not(:disabled) {
          background: ${e.alternative.active};
          color: ${e.alternative.activeText};
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px ${e.alternative.focusRing};
        }
        &:disabled {
          cursor: not-allowed;
        }
      `;case"alert":return n`
        background: ${t?e.alert.disabledBg:e.alert.default};
        color: ${t?e.alert.disabledText:e.alert.text};
        border: none;
        &:hover:not(:disabled) {
          background: ${e.alert.hover};
        }
        &:active:not(:disabled) {
          background: ${e.alert.active};
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px ${e.alert.focusRing};
        }
        &:disabled {
          cursor: not-allowed;
        }
      `;default:return""}},j=$.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 32px;
  border-radius: ${I.default};
  font-family: ${d.family};
  font-weight: ${d.weight};
  font-size: ${d.size};
  line-height: ${d.lineHeight};
  white-space: nowrap;
  transition: background 0.1s, color 0.1s, border-color 0.1s, box-shadow 0.1s;
  outline: none;
  overflow: hidden;
  ${r=>H(r)}
`,p=({hierarchy:r,disabled:t=!1,children:k,...i})=>{const y=A.useRef(null),w=()=>r==="primary"?"rgba(51,51,51,0.15)":"rgba(255,255,255,0.3)",T=o=>{var g;if(t)return;const s=o.currentTarget.getBoundingClientRect(),h=Math.max(s.width,s.height),S=o.clientX-s.left-h/2,R=o.clientY-s.top-h/2,a=document.createElement("span");a.style.position="absolute",a.style.left=`${S}px`,a.style.top=`${R}px`,a.style.width=a.style.height=`${h}px`,a.style.background=w(),a.style.borderRadius="50%",a.style.pointerEvents="none",a.style.transform="scale(0)",a.style.animation="ripple-effect 600ms linear",(g=y.current)==null||g.appendChild(a),a.addEventListener("animationend",()=>{a.remove()})};return E(j,{hierarchy:r,disabled:t,...i,onClick:o=>{var b;T(o),(b=i.onClick)==null||b.call(i,o)},children:[u(z,{ref:y}),u("span",{style:{position:"relative",zIndex:2,width:"100%"},children:k})]})};if(typeof window<"u"&&typeof document<"u"){const r="ripple-effect-keyframes";if(!document.getElementById(r)){const t=document.createElement("style");t.id=r,t.innerHTML="@keyframes ripple-effect { to { transform: scale(2.5); opacity: 0; } }",document.head.appendChild(t)}}try{p.displayName="ButtonSC",p.__docgenInfo={description:"",displayName:"ButtonSC",props:{hierarchy:{defaultValue:null,description:"",name:"hierarchy",required:!0,type:{name:"enum",value:[{value:'"alert"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"alternative"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const C=["primary","secondary","tertiary","alternative","alert"],M={title:"Components/ButtonSC",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"ButtonSC component matching Figma. All states (hover, focus, active, disabled) are handled by CSS-in-JS. Only the hierarchies and variants present in Figma are implemented."}},backgrounds:{default:"neutral900",values:[{name:"neutral900",value:"#010101"},{name:"white",value:"#fff"}]}},argTypes:{hierarchy:{control:{type:"select"},options:C,description:"Button visual hierarchy, as defined in Figma."},disabled:{control:{type:"boolean"},description:"Disables the button."},children:{control:{type:"text"},description:"Button label text."},onClick:{action:"clicked"},className:{table:{disable:!0}}},args:{hierarchy:"primary",disabled:!1,children:"ButtonSC"}},l={args:{hierarchy:"primary",disabled:!1,children:"ButtonSC"}},c={render:r=>u("div",{style:{background:"#010101",padding:32,minHeight:120,display:"flex",gap:32,alignItems:"center"},children:C.map(t=>u(p,{hierarchy:t,disabled:r.disabled,children:r.children||t.charAt(0).toUpperCase()+t.slice(1)},t))}),args:{disabled:!1,children:"ButtonSC"},argTypes:{disabled:{control:"boolean"},children:{control:"text"}},parameters:{docs:{description:{story:"All Figma-specified ButtonSC hierarchies for visual regression and QA."}}}};var f,m,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    hierarchy: 'primary',
    disabled: false,
    children: 'ButtonSC'
  }
}`,...(v=(m=l.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var x,F,B;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div style={{
    background: '#010101',
    padding: 32,
    minHeight: 120,
    display: 'flex',
    gap: 32,
    alignItems: 'center'
  }}>
      {hierarchies.map(hierarchy => <ButtonSC key={hierarchy} hierarchy={hierarchy} disabled={args.disabled}>
          {args.children || hierarchy.charAt(0).toUpperCase() + hierarchy.slice(1)}
        </ButtonSC>)}
    </div>,
  args: {
    disabled: false,
    children: 'ButtonSC'
  },
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    children: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'All Figma-specified ButtonSC hierarchies for visual regression and QA.'
      }
    }
  }
}`,...(B=(F=c.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};const O=["Playground","AllVariants"];export{c as AllVariants,l as Playground,O as __namedExportsOrder,M as default};
