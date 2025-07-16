import{j as n,a as t}from"./jsx-runtime-c292b226.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const y={h1:{title:"Heading 1 (H1)",description:"Large page titles and main headings.",styles:{regular:{label:"H1 Regular",fontFamily:"Inter",fontWeight:400,fontSize:40,lineHeight:1.4,fontStyle:"normal"},semibold:{label:"H1 Semi Bold",fontFamily:"Inter",fontWeight:600,fontSize:40,lineHeight:1.4,fontStyle:"normal"},bold:{label:"H1 Bold",fontFamily:"Inter",fontWeight:700,fontSize:40,lineHeight:1.4,fontStyle:"normal"}}},h2:{title:"Heading 2 (H2)",description:"Section headings and sub-titles.",styles:{regular:{label:"H2 Regular",fontFamily:"Inter",fontWeight:400,fontSize:32,lineHeight:1.4,fontStyle:"normal"},semibold:{label:"H2 Semi Bold",fontFamily:"Inter",fontWeight:600,fontSize:32,lineHeight:1.4,fontStyle:"normal"},bold:{label:"H2 Bold",fontFamily:"Inter",fontWeight:700,fontSize:32,lineHeight:1.4,fontStyle:"normal"}}},h3:{title:"Heading 3 (H3)",description:"Sub-section headings and card titles.",styles:{regular:{label:"H3 Regular",fontFamily:"Inter",fontWeight:400,fontSize:24,lineHeight:1.4,fontStyle:"normal"},semibold:{label:"H3 Semi Bold",fontFamily:"Inter",fontWeight:600,fontSize:24,lineHeight:1.4,fontStyle:"normal"},bold:{label:"H3 Bold",fontFamily:"Inter",fontWeight:700,fontSize:24,lineHeight:1.4,fontStyle:"normal"}}},bodyXL:{title:"Body XL",description:"Extra large body text for prominent content.",styles:{regular:{label:"Body XL Regular",fontFamily:"Inter",fontWeight:400,fontSize:20,lineHeight:1.4,fontStyle:"normal"},semibold:{label:"Body XL Semi Bold",fontFamily:"Inter",fontWeight:600,fontSize:20,lineHeight:1.4,fontStyle:"normal"},bold:{label:"Body XL Bold",fontFamily:"Inter",fontWeight:700,fontSize:20,lineHeight:1.4,fontStyle:"normal"}}},bodyL:{title:"Body L",description:"Large body text for main content.",styles:{regular:{label:"Body L Regular",fontFamily:"Inter",fontWeight:400,fontSize:18,lineHeight:1.4,fontStyle:"normal"},semibold:{label:"Body L Semi Bold",fontFamily:"Inter",fontWeight:600,fontSize:18,lineHeight:1.4,fontStyle:"normal"},bold:{label:"Body L Bold",fontFamily:"Inter",fontWeight:700,fontSize:18,lineHeight:1.4,fontStyle:"normal"}}},bodyM:{title:"Body M",description:"Default body text for paragraphs and content.",styles:{regular:{label:"Body M Regular",fontFamily:"Inter",fontWeight:400,fontSize:16,lineHeight:1.4,fontStyle:"normal"},semibold:{label:"Body M Semi Bold",fontFamily:"Inter",fontWeight:600,fontSize:16,lineHeight:1.4,fontStyle:"normal"},bold:{label:"Body M Bold",fontFamily:"Inter",fontWeight:700,fontSize:16,lineHeight:1.4,fontStyle:"normal"}}},bodyS:{title:"Body S",description:"Small body text for captions and secondary content.",styles:{regular:{label:"Body S Regular",fontFamily:"Inter",fontWeight:400,fontSize:14,lineHeight:1.4,fontStyle:"normal"},semibold:{label:"Body S Semi Bold",fontFamily:"Inter",fontWeight:600,fontSize:14,lineHeight:1.4,fontStyle:"normal"},bold:{label:"Body S Bold",fontFamily:"Inter",fontWeight:700,fontSize:14,lineHeight:1.4,fontStyle:"normal"}}},bodyXS:{title:"Body XS",description:"Extra small body text for footnotes and legal.",styles:{regular:{label:"Body XS Regular",fontFamily:"Inter",fontWeight:400,fontSize:12,lineHeight:1.4,fontStyle:"normal"},semibold:{label:"Body XS Semi Bold",fontFamily:"Inter",fontWeight:600,fontSize:12,lineHeight:1.4,fontStyle:"normal"},bold:{label:"Body XS Bold",fontFamily:"Inter",fontWeight:700,fontSize:12,lineHeight:1.4,fontStyle:"normal"}}},label:{title:"Label",description:"Labels for UI elements and controls.",styles:{regular:{label:"Label Regular",fontFamily:"Inter",fontWeight:400,fontSize:11,lineHeight:1.4,fontStyle:"normal"},semibold:{label:"Label Semi Bold",fontFamily:"Inter",fontWeight:600,fontSize:11,lineHeight:1.4,fontStyle:"normal"},bold:{label:"Label Bold",fontFamily:"Inter",fontWeight:700,fontSize:11,lineHeight:1.4,fontStyle:"normal"}}}},S={title:"Design Tokens/Typography"},g="Typography system for consistent, accessible, and scalable text styles across the product.",o=()=>n("div",{style:{fontFamily:"Inter, sans-serif",display:"flex",flexDirection:"column",gap:32,background:"#010101",minHeight:"100vh",padding:32},children:[n("section",{style:{marginBottom:32},children:[t("h2",{style:{fontFamily:"Inter, sans-serif",fontWeight:700,fontSize:24,marginBottom:8,color:"#f0f0f0"},children:"Typography System"}),t("p",{style:{fontFamily:"Inter, sans-serif",color:"#bbb",fontSize:16},children:g})]}),Object.entries(y).map(([s,l])=>n("section",{style:{marginBottom:32},children:[t("h3",{style:{fontFamily:"Inter, sans-serif",fontWeight:600,fontSize:20,marginBottom:4,color:"#f0f0f0"},children:l.title}),t("p",{style:{fontFamily:"Inter, sans-serif",color:"#bbb",fontSize:14,marginTop:0,marginBottom:16},children:l.description}),t("div",{style:{display:"flex",flexWrap:"wrap",gap:32},children:Object.entries(l.styles).filter(([i])=>i==="regular").map(([i,e])=>n("div",{style:{minWidth:180},children:[t("div",{style:{fontFamily:e.fontFamily+", sans-serif",fontWeight:e.fontWeight,fontSize:e.fontSize,lineHeight:e.lineHeight,fontStyle:e.fontStyle,marginBottom:4,color:"#f0f0f0"},children:"WSC Sports Fuel the fandom"}),t("div",{style:{fontSize:12,color:"#bbb"},children:`${e.fontWeight}, ${e.fontSize}px, lh ${e.lineHeight}`})]},i))})]},s))]});var a,r,f;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => <div style={{
  fontFamily: 'Inter, sans-serif',
  display: "flex",
  flexDirection: "column",
  gap: 32,
  background: '#010101',
  minHeight: '100vh',
  padding: 32
}}>
    <section style={{
    marginBottom: 32
  }}>
      <h2 style={{
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      fontSize: 24,
      marginBottom: 8,
      color: '#f0f0f0'
    }}>Typography System</h2>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      color: "#bbb",
      fontSize: 16
    }}>{generalDescription}</p>
    </section>
    {Object.entries(typographyGroups).map(([groupKey, group]) => <section key={groupKey} style={{
    marginBottom: 32
  }}>
        <h3 style={{
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      fontSize: 20,
      marginBottom: 4,
      color: '#f0f0f0'
    }}>{group.title}</h3>
        <p style={{
      fontFamily: 'Inter, sans-serif',
      color: "#bbb",
      fontSize: 14,
      marginTop: 0,
      marginBottom: 16
    }}>{group.description}</p>
        <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 32
    }}>
          {Object.entries(group.styles).filter(([styleKey]) => styleKey === "regular").map(([styleKey, style]) => <div key={styleKey} style={{
        minWidth: 180
      }}>
                <div style={{
          fontFamily: style.fontFamily + ', sans-serif',
          fontWeight: style.fontWeight,
          fontSize: style.fontSize,
          lineHeight: style.lineHeight,
          fontStyle: style.fontStyle,
          marginBottom: 4,
          color: '#f0f0f0'
        }}>
                  WSC Sports Fuel the fandom
                </div>
                <div style={{
          fontSize: 12,
          color: "#bbb"
        }}>
                  {\`\${style.fontWeight}, \${style.fontSize}px, lh \${style.lineHeight}\`}
                </div>
              </div>)}
        </div>
      </section>)}
  </div>`,...(f=(r=o.parameters)==null?void 0:r.docs)==null?void 0:f.source}}};const b=["AllTypography"];export{o as AllTypography,b as __namedExportsOrder,S as default};
