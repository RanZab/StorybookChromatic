import React from "react";
import { colorGroups } from "../styles/colors";

export default {
  title: "Design Tokens/Colors",
};

export const AllColors = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
    {Object.entries(colorGroups).map(([groupKey, group]) => (
      <section key={groupKey} style={{ marginBottom: 32 }}>
        <h2 style={{ marginBottom: 4, fontFamily: 'Inter, sans-serif' }}>{group.title}</h2>
        <p style={{ marginTop: 0, marginBottom: 16, color: "#666", fontFamily: 'Inter, sans-serif' }}>{group.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {Object.entries(group.colors).map(([token, value]) => (
            <div key={token} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: value,
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  marginBottom: 8,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              />
              <div style={{ fontWeight: 500 }}>{token}</div>
              <div style={{ fontSize: 12, color: "#666" }}>{value}</div>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
); 