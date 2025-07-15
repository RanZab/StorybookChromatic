import React from "react";
import { typographyGroups } from "../styles/typography";

export default {
  title: "Design Tokens/Typography",
};

const generalDescription =
  "Typography system for consistent, accessible, and scalable text styles across the product.";

export const AllTypography = () => (
  <div style={{ fontFamily: 'Inter, sans-serif', display: "flex", flexDirection: "column", gap: 32, background: '#010101', minHeight: '100vh', padding: 32 }}>
    <section style={{ marginBottom: 32 }}>
      <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 24, marginBottom: 8, color: '#f0f0f0' }}>Typography System</h2>
      <p style={{ fontFamily: 'Inter, sans-serif', color: "#bbb", fontSize: 16 }}>{generalDescription}</p>
    </section>
    {Object.entries(typographyGroups).map(([groupKey, group]) => (
      <section key={groupKey} style={{ marginBottom: 32 }}>
        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 20, marginBottom: 4, color: '#f0f0f0' }}>{group.title}</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', color: "#bbb", fontSize: 14, marginTop: 0, marginBottom: 16 }}>{group.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          {Object.entries(group.styles)
            .filter(([styleKey]) => styleKey === "regular")
            .map(([styleKey, style]) => (
              <div key={styleKey} style={{ minWidth: 180 }}>
                <div
                  style={{
                    fontFamily: style.fontFamily + ', sans-serif',
                    fontWeight: style.fontWeight,
                    fontSize: style.fontSize,
                    lineHeight: style.lineHeight,
                    fontStyle: style.fontStyle,
                    marginBottom: 4,
                    color: '#f0f0f0',
                  }}
                >
                  WSC Sports Fuel the fandom
                </div>
                <div style={{ fontSize: 12, color: "#bbb" }}>
                  {`${style.fontWeight}, ${style.fontSize}px, lh ${style.lineHeight}`}
                </div>
              </div>
            ))}
        </div>
      </section>
    ))}
  </div>
); 