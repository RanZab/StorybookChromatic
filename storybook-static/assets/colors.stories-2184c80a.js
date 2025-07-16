import{a as o,j as i}from"./jsx-runtime-c292b226.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const f={primary:{title:"Primary Colors",description:"Main brand colors used for primary actions and highlights.",colors:{100:"#F1FF6C",300:"#E5FF00",500:"#B9D300",700:"#3F3F2B",900:"#333333"}},neutral:{title:"Neutral Colors",description:"Grayscale palette for backgrounds, borders, and text.",colors:{0:"#FFFFFF",100:"#F0F0F0",200:"#BABABA",300:"#8E8E8E",400:"#5D5D5D",500:"#404040",600:"#333333",700:"#282828",800:"#181818",900:"#010101"}},alert:{title:"Alert Colors",description:"Colors for error and critical states.",colors:{100:"#FF6161",300:"#FF3131",500:"#B72C2C",900:"#8E1616"}},warning:{title:"Warning Colors",description:"Colors for warning and caution states.",colors:{100:"#FFCE66",300:"#FFAE00",500:"#B27A00",700:"#805700"}},success:{title:"Success Colors",description:"Colors for success and positive states.",colors:{100:"#00E5A0",300:"#00B27C",500:"#007F58"}},white:{title:"White",description:"White color swatch, used for backgrounds and surfaces.",colors:{"92%":"#FFFFFF"}}},l="#010101",m="#444",b={title:"Design Tokens/Colors"},r=()=>o("div",{style:{display:"flex",flexDirection:"column",gap:32,background:l,minHeight:"100vh",padding:32},children:Object.entries(f).map(([p,n])=>i("section",{style:{marginBottom:32},children:[o("h2",{style:{marginBottom:4,fontFamily:"Inter, sans-serif",color:"#f0f0f0"},children:n.title}),o("p",{style:{marginTop:0,marginBottom:16,color:"#bbb",fontFamily:"Inter, sans-serif"},children:n.description}),o("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:Object.entries(n.colors).map(([t,e])=>{let s="none";return e===l&&(s=`1px solid ${m}`),i("div",{style:{textAlign:"center"},children:[o("div",{style:{width:64,height:64,background:e,border:s,borderRadius:8,marginBottom:8,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}),o("div",{style:{fontWeight:500,color:"#f0f0f0",fontFamily:"Inter, sans-serif"},children:t}),o("div",{style:{fontSize:12,color:"#bbb",fontFamily:"Inter, sans-serif"},children:e})]},t)})})]},p))});var a,c,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: 32,
  background: NEUTRAL900,
  minHeight: '100vh',
  padding: 32
}}>
    {Object.entries(colorGroups).map(([groupKey, group]) => <section key={groupKey} style={{
    marginBottom: 32
  }}>
        <h2 style={{
      marginBottom: 4,
      fontFamily: 'Inter, sans-serif',
      color: '#f0f0f0'
    }}>{group.title}</h2>
        <p style={{
      marginTop: 0,
      marginBottom: 16,
      color: "#bbb",
      fontFamily: 'Inter, sans-serif'
    }}>{group.description}</p>
        <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 24
    }}>
          {Object.entries(group.colors).map(([token, value]) => {
        // Use a dark stroke for neutral900, no stroke for others
        let border = 'none';
        if (value === NEUTRAL900) border = \`1px solid \${NEUTRAL600}\`;
        return <div key={token} style={{
          textAlign: "center"
        }}>
                <div style={{
            width: 64,
            height: 64,
            background: value,
            border: border,
            borderRadius: 8,
            marginBottom: 8,
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
          }} />
                <div style={{
            fontWeight: 500,
            color: '#f0f0f0',
            fontFamily: 'Inter, sans-serif'
          }}>{token}</div>
                <div style={{
            fontSize: 12,
            color: "#bbb",
            fontFamily: 'Inter, sans-serif'
          }}>{value}</div>
              </div>;
      })}
        </div>
      </section>)}
  </div>`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const u=["AllColors"];export{r as AllColors,u as __namedExportsOrder,b as default};
