import{d as a}from"./styled-components.browser.esm-187eca76.js";const r={defaultBg:"#282828",hoverBg:"#333333",selectedBg:"#282828",filledBg:"#282828",disabledBg:"#181818",errorBg:"#282828",defaultBorder:"#333333",hoverBorder:"#333333",selectedBorder:"#FFFFFF",filledBorder:"#333333",disabledBorder:"#404040",errorBorder:"#FF3131",placeholder:"#BABABA",text:"#F0F0F0",disabledText:"#5D5D5D",errorText:"#F0F0F0",selectedPlaceholder:"#8E8E8E"},o=a.div`
  position: relative;
  display: block;
  background: ${({$state:e,$disabled:d,$error:t})=>d?r.disabledBg:t?r.errorBg:e==="hover"?r.hoverBg:e==="selected"||e==="selectedFilled"?r.selectedBg:e==="filled"?r.filledBg:r.defaultBg};
  border: 1px solid
    ${({$state:e,$disabled:d,$error:t})=>d?r.disabledBorder:t?r.errorBorder:e==="selected"||e==="selectedFilled"?r.selectedBorder:e==="filled"?r.filledBorder:r.defaultBorder};
  border-radius: 8px;
  padding: 8px;
  transition: background 0.2s, border 0.2s, height 0.2s;
  width: ${({$width:e})=>e!==void 0?typeof e=="number"?`${e}px`:e:"236px"};
  height: ${({$height:e})=>e!==void 0?typeof e=="number"?`${e}px`:e:"auto"};
  box-sizing: border-box;
`,n=a.div`
  position: absolute;
  top: 50%;
  ${({position:e})=>e==="left"?"left: 12px;":"right: 12px;"}
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
`,l=a.ul`
  display: ${({visible:e})=>e?"block":"none"};
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  margin: 4px 0 0 0;
  padding: 0;
  background: #282828;
  border: 1px solid #333333;
  border-radius: 8px;
  z-index: 10;
  list-style: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  font-family: 'Inter', sans-serif;
`,i=a.li`
  padding: 8px 16px;
  color: #f0f0f0;
  background: ${({selected:e})=>e?"#333333":"transparent"};
  cursor: pointer;
  &:hover {
    background: #333333;
  }
  font-family: 'Inter', sans-serif;
  font-size: 14px;
`,s=a.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 2;
`,p=a.button`
  background: none;
  border: none;
  padding: 0;
  width: 18px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #bababa;
  &:hover {
    color: #f0f0f0;
  }
`;try{o.displayName="InputWrapper",o.__docgenInfo={description:"",displayName:"InputWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="IconWrapper",n.__docgenInfo={description:"",displayName:"IconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="DropdownMenu",l.__docgenInfo={description:"",displayName:"DropdownMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="DropdownOption",i.__docgenInfo={description:"",displayName:"DropdownOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="NumericControls",s.__docgenInfo={description:"",displayName:"NumericControls",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="NumericButton",p.__docgenInfo={description:"",displayName:"NumericButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{r as C,l as D,o as I,s as N,n as a,i as b,p as c};
