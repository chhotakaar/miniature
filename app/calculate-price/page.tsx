
"use client";

import { useState } from "react";

const colors = {
  ink: "#18352d",
  green: "#246b50",
  cream: "#f8f7f2",
  border: "#e6e8e2",
  muted: "#68736d",
};

const rates: Record<string, number> = {
  Basic: 90,
  Detailed: 160,
  Premium: 260,
};

export default function CalculatePricePage() {
  const [model, setModel] = useState("Villa");
  const [length, setLength] = useState(8);
  const [width, setWidth] = useState(6);
  const [detail, setDetail] = useState("Detailed");
  const [lighting, setLighting] = useState(true);
  const [landscape, setLandscape] = useState(false);
  const [acrylic, setAcrylic] = useState(false);
  const [paint, setPaint] = useState(true);
  const [custom, setCustom] = useState(false);

  const area = length * width;
  const base = Math.max(999, area * rates[detail]);

  const extras =
    (lighting ? 800 : 0) +
    (landscape ? Math.max(500, area * 20) : 0) +
    (acrylic ? Math.max(700, area * 35) : 0) +
    (paint ? 500 : 0) +
    (custom ? 1500 : 0);

  const total = base + extras;

  const money = (n: number) =>
    "₹" + Math.round(n).toLocaleString("en-IN");

  const card: React.CSSProperties = {
    background: "#fff",
    border: `1px solid ${colors.border}`,
    borderRadius: 18,
    padding: 24,
    minWidth: 0,
    boxSizing: "border-box",
  };

  const label: React.CSSProperties = {
    display: "block",
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 8,
    color: colors.ink,
  };

  const input: React.CSSProperties = {
    width: "100%",
    padding: "12px 13px",
    border: `1px solid ${colors.border}`,
    borderRadius: 9,
    background: "#fff",
    color: colors.ink,
    fontSize: 15,
    boxSizing: "border-box",
  };

  const option: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 14,
    border: `1px solid ${colors.border}`,
    borderRadius: 12,
    cursor: "pointer",
    background: "#fff",
    minWidth: 0,
  };

  function requestQuote() {
    const number = "91XXXXXXXXXX";

    if (number.includes("X")) {
      alert("Please add your WhatsApp business number in the code.");
      return;
    }

    const message = [
      "Hello Chhotakaar! I want a miniature model quote.",
      `Model: ${model}`,
      `Size: ${length} x ${width} inches`,
      `Base area: ${area} sq. in.`,
      `Detailing: ${detail}`,
      `LED lighting: ${lighting ? "Yes" : "No"}`,
      `Landscaping: ${landscape ? "Yes" : "No"}`,
      `Acrylic box: ${acrylic ? "Yes" : "No"}`,
      `Paint finishing: ${paint ? "Yes" : "No"}`,
      `Custom design: ${custom ? "Yes" : "No"}`,
      `Estimated price: ${money(total)}`,
      "Please confirm final pricing and delivery time.",
    ].join("\n");

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  function checkOption(
    title: string,
    description: string,
    price: string,
    checked: boolean,
    onChange: (value: boolean) => void
  ) {
    return (
      <label
        key={title}
        style={{
          ...option,
          alignItems: "flex-start",
          background: checked ? "#f0f7f1" : "#fff",
          borderColor: checked ? "#a9cdb4" : colors.border,
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          style={{
            width: 18,
            height: 18,
            accentColor: colors.green,
            flexShrink: 0,
            marginTop: 3,
          }}
        />
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: "block", fontWeight: 600 }}>
            {title}
          </span>
          <span
            style={{
              display: "block",
              fontSize: 13,
              color: colors.muted,
              marginTop: 4,
              lineHeight: 1.5,
            }}
          >
            {description}
          </span>
        </span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            whiteSpace: "nowrap",
            color: colors.green,
          }}
        >
          {price}
        </span>
      </label>
    );
  }

  return (
    <main
      style={{
        background: colors.cream,
        minHeight: "100vh",
        padding: "44px 18px 70px",
        color: colors.ink,
        fontFamily: "Arial, Helvetica, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: 3,
              fontWeight: 700,
              color: colors.green,
              marginBottom: 14,
            }}
          >
            CHHOTAKAAR · CUSTOM ARCHITECTURAL MODELS
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              letterSpacing: -1.5,
              lineHeight: 1.12,
              margin: "0 0 15px",
              fontWeight: 750,
              color: colors.ink,
            }}
          >
            Build Your Own Miniature
          </h1>

          <p
            style={{
              maxWidth: 570,
              margin: "0 auto",
              lineHeight: 1.8,
              color: colors.muted,
              fontSize: 16,
            }}
          >
            Create your dream miniature. Choose the size,
            detailing and finishing to estimate your price.
          </p>
        </header>

        <div
          className="calculator-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 22,
            alignItems: "start",
          }}
        >
          <section style={card}>
            <h2 style={{ fontSize: 21, margin: "0 0 22px" }}>
              01. Choose your model
            </h2>

            <label style={label}>Model type</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              style={input}
            >
              <option>House</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Commercial Building</option>
            </select>

            <h2 style={{ fontSize: 21, margin: "28px 0 16px" }}>
              02. Select model size
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 14,
              }}
            >
              <div>
                <label style={label}>Length (inches)</label>
                <input
                  type="number"
                  min={4}
                  max={48}
                  value={length}
                  onChange={(e) =>
                    setLength(
                      Math.min(48, Math.max(4, Number(e.target.value) || 4))
                    )
                  }
                  style={input}
                />
              </div>
              <div>
                <label style={label}>Width (inches)</label>
                <input
                  type="number"
                  min={4}
                  max={48}
                  value={width}
                  onChange={(e) =>
                    setWidth(
                      Math.min(48, Math.max(4, Number(e.target.value) || 4))
                    )
                  }
                  style={input}
                />
              </div>
            </div>

            <div
              style={{
                marginTop: 14,
                padding: 13,
                borderRadius: 9,
                background: "#f1f4ee",
                fontSize: 14,
              }}
            >
              Model base area: <strong>{area} sq. in.</strong>
            </div>

            <h2 style={{ fontSize: 21, margin: "28px 0 16px" }}>
              03. Detailing level
            </h2>

            <div style={{ display: "grid", gap: 10 }}>
              {[
                ["Basic", "Simple structure", "₹90 / sq. in."],
                ["Detailed", "Architectural details", "₹160 / sq. in."],
                ["Premium", "Intricate detailing", "₹260 / sq. in."],
              ].map(([name, desc, price]) => (
                <label
                  key={name}
                  style={{
                    ...option,
                    background: detail === name ? "#f0f7f1" : "#fff",
                    borderColor:
                      detail === name ? "#80b797" : colors.border,
                  }}
                >
                  <input
                    type="radio"
                    name="detail"
                    checked={detail === name}
                    onChange={() => setDetail(name)}
                    style={{
                      accentColor: colors.green,
                      width: 17,
                      height: 17,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ flex: 1 }}>
                    <strong style={{ display: "block" }}>{name}</strong>
                    <span
                      style={{
                        display: "block",
                        fontSize: 13,
                        color: colors.muted,
                        marginTop: 4,
                      }}
                    >
                      {desc}
                    </span>
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: colors.green,
                      fontWeight: 600,
                      textAlign: "right",
                    }}
                  >
                    {price}
                  </span>
                </label>
              ))}
            </div>
          </section>

          <section style={card}>
            <h2 style={{ fontSize: 21, margin: "0 0 8px" }}>
              04. Customize your model
            </h2>
            <p
              style={{
                margin: "0 0 20px",
                fontSize: 14,
                lineHeight: 1.7,
                color: colors.muted,
              }}
            >
              Select the features you want to include.
            </p>

            <div style={{ display: "grid", gap: 12 }}>
              {checkOption(
                "LED lighting",
                "Interior and exterior illumination",
                "+ ₹800",
                lighting,
                setLighting
              )}
              {checkOption(
                "Landscaping",
                "Garden, lawn, paths and miniature trees",
                "₹500+",
                landscape,
                setLandscape
              )}
              {checkOption(
                "Acrylic display box",
                "Transparent protective display cover",
                "₹700+",
                acrylic,
                setAcrylic
              )}
              {checkOption(
                "Paint & finishing",
                "Paintwork and surface detailing",
                "+ ₹500",
                paint,
                setPaint
              )}
              {checkOption(
                "Custom design",
                "Work from your drawings, plans or photos",
                "+ ₹1,500",
                custom,
                setCustom
              )}
            </div>

            <div
              style={{
                background: colors.ink,
                color: "#fff",
                borderRadius: 15,
                padding: 23,
                marginTop: 24,
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  margin: "0 0 8px",
                  color: "#d5e4da",
                }}
              >
                YOUR ESTIMATED PRICE
              </p>

              <div
                style={{
                  fontSize: "clamp(32px, 4vw, 42px)",
                  fontWeight: 750,
                  letterSpacing: -1,
                  overflowWrap: "anywhere",
                }}
              >
                {money(total)}
              </div>

              <p
                style={{
                  fontSize: 12,
                  color: "#d5e4da",
                  lineHeight: 1.7,
                  margin: "10px 0 20px",
                }}
              >
                Estimate based on your selected size and features.
              </p>

              <div
                style={{
                  borderTop: "1px solid #53675f",
                  paddingTop: 15,
                  display: "grid",
                  gap: 12,
                  fontSize: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <span>Base model ({detail})</span>
                  <strong>{money(base)}</strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <span>Selected extras</span>
                  <strong>{money(extras)}</strong>
                </div>
              </div>

              <button
                type="button"
                onClick={requestQuote}
                style={{
                  width: "100%",
                  padding: "15px 12px",
                  border: "none",
                  borderRadius: 10,
                  background: "#d8ebd9",
                  color: colors.ink,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  marginTop: 23,
                }}
              >
                Get Final Quote on WhatsApp ↗
              </button>

              <p
                style={{
                  fontSize: 11,
                  lineHeight: 1.7,
                  color: "#d5e4da",
                  margin: "14px 0 0",
                }}
              >
                Indicative estimate only. Final pricing may vary
                with design complexity, materials, fabrication and
                delivery. Confirm the final quote before ordering.
              </p>
            </div>
          </section>
        </div>

        <footer
          style={{
            textAlign: "center",
            color: colors.muted,
            fontSize: 12,
            marginTop: 28,
            lineHeight: 1.8,
          }}
        >
          CHHOTAKAAR · Thoughtfully crafted architectural miniatures
        </footer>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .calculator-grid {
          width: 100%;
        }

        @media (max-width: 700px) {
          .calculator-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }

        select:focus, input:focus-visible, button:focus-visible {
          outline: 2px solid #80b797;
          outline-offset: 2px;
        }
      `}</style>
    </main>
  );
}
