import React from "react";
import { colorGroups } from "../styles/colors";

const NEUTRAL900 = '#010101';
const NEUTRAL600 = '#444'; // Example for dark gray stroke
const NEUTRAL700 = '#222'; // Slightly darker, pick as needed

export default {
  title: "Design Tokens/Colors",
};

export const AllColors = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 32, background: NEUTRAL900, minHeight: '100vh', padding: 32 }}>
    {Object.entries(colorGroups).map(([groupKey, group]) => (
      <section key={groupKey} style={{ marginBottom: 32 }}>
        <h2 style={{ marginBottom: 4, fontFamily: 'Inter, sans-serif', color: '#f0f0f0' }}>{group.title}</h2>
        <p style={{ marginTop: 0, marginBottom: 16, color: "#bbb", fontFamily: 'Inter, sans-serif' }}>{group.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {Object.entries(group.colors).map(([token, value]) => {
            // Use a dark stroke for neutral900, no stroke for others
            let border = 'none';
            if (value === NEUTRAL900) border = `1px solid ${NEUTRAL600}`;
            return (
              <div key={token} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: value,
                    border: border,
                    borderRadius: 8,
                    marginBottom: 8,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                />
                <div style={{ fontWeight: 500, color: '#f0f0f0', fontFamily: 'Inter, sans-serif' }}>{token}</div>
                <div style={{ fontSize: 12, color: "#bbb", fontFamily: 'Inter, sans-serif' }}>{value}</div>
              </div>
            );
          })}
        </div>
      </section>
    ))}
  </div>
); 