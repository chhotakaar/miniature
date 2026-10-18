
"use client";

import { useState } from "react";

const C = {
  green: "#245b45",
  dark: "#19382d",
  cream: "#f7f7f2",
  border: "#e4e8e1",
  muted: "#69756e",
  pale: "#edf5ed",
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

  const total = Math.round(base + extras);

  const money = (n: number) =>
    "₹" + Math.round(n).toLocaleString("en-IN");

  const card: React.CSSProperties = {
    background: "#fff",
    border: `1px solid ${C.border}`,
    borderRadius: 15,
    padding: 18,
    minWidth: 0,
    boxSizing: "border-box",
    boxShadow: "0 3px 14px rgba(25,56,45,0.035)",
  };

  const field: React.CSSProperties = {
    width: "100%",
    padding: "10px 11px",
    border: `1px solid ${C.border}`,
    borderRadius: 8,
    background: "#fff",
    color: C.dark,
    fontSize: 14,
    boxSizing: "border-box",
  };

  const label: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 6,
    color: C.dark,
  };

  function option(
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
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 11px",
          border: `1px solid ${
            checked ? "#b4d0b9" : C.border
          }`,
          borderRadius: 10,
          background: checked ? "#f2f8f1" : "#fff",
          cursor: "pointer",
          minWidth: 0,
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          style={{
            width: 16,
            height: 16,
            accentColor: C.green,
            flexShrink: 0,
            margin: 0,
          }}
        />
        <span style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 650,
              color: C.dark,
            }}
          >
            {title}
          </span>
          <span
            style={{
              display: "block",
              fontSize: 11,
              color: C.muted,
              lineHeight: 1.5,
              marginTop: 2,
            }}
          >
            {description}
          </span>
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 650,
            color: C.green,
            whiteSpace: "nowrap",
          }}
        >
          {price}
        </span>
      </label>
    );
  }

  function requestQuote() {
    // Replace with your WhatsApp number, including country code.
    const number = "91XXXXXXXXXX";

    if (number.includes("X")) {
      alert("Please add your WhatsApp number in the code first.");
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
      "Please confirm the final price and delivery time.",
    ].join("\n");

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const heading: React.CSSProperties = {
    fontSize: 17,
    fontWeight: 700,
    color: C.dark,
    margin: "0 0 13px",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: C.cream,
        color: C.dark,
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "24px 14px 36px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1020, margin: "0 auto" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: 22 }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 11px",
              border: `1px solid ${C.border}`,
              borderRadius: 30,
              background: "#fff",
              color: C.green,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 1.8,
              marginBottom: 10,
            }}
          >
            CHHOTAKAAR · CUSTOM MODELS
          </div>

          <h1
            style={{
              fontSize: "clamp(27px, 3.5vw, 40px)",
              letterSpacing: -1.2,
              lineHeight: 1.15,
              margin: "0 0 8px",
              fontWeight: 750,
              color: C.dark,
            }}
          >
            Build Your Own Miniature
          </h1>

          <p
            style={{
              maxWidth: 520,
              margin: "0 auto",
              color: C.muted,
              fontSize: 13,
              lineHeight: 1.7,
            }}
          >
            Personalize your model, select your features and
            calculate your estimated price instantly.
          </p>
        </header>

        {/* Calculator columns */}
        <div
          className="calculator-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 16,
            alignItems: "start",
          }}
        >
          {/* Left card */}
          <section style={card}>
            <h2 style={heading}>01. Choose your model</h2>

            <label style={label}>Model type</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              style={field}
            >
              <option>House</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Commercial Building</option>
            </select>

            <h2 style={{ ...heading, marginTop: 22 }}>
              02. Model size
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
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
                  style={field}
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
                  style={field}
                />
              </div>
            </div>

            <div
              style={{
                marginTop: 10,
                background: C.pale,
                borderRadius: 8,
                padding: "10px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
              }}
            >
              <span style={{ color: C.muted }}>Base area</span>
              <strong>{area} sq. in.</strong>
            </div>

            <h2 style={{ ...heading, marginTop: 22 }}>
              03. Detailing level
            </h2>

            <div style={{ display: "grid", gap: 8 }}>
              {[
                {
                  name: "Basic",
                  desc: "Simple architectural structure",
                  price: "₹90 / sq. in.",
                },
                {
                  name: "Detailed",
                  desc: "Enhanced architectural details",
                  price: "₹160 / sq. in.",
                },
                {
                  name: "Premium",
                  desc: "Intricate detailing",
                  price: "₹260 / sq. in.",
                },
              ].map((item) => (
                <label
                  key={item.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "10px 11px",
                    borderRadius: 10,
                    border: `1px solid ${
                      detail === item.name ? "#a8c8ae" : C.border
                    }`,
                    background:
                      detail === item.name ? "#f1f7ef" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="detail"
                    checked={detail === item.name}
                    onChange={() => setDetail(item.name)}
                    style={{
                      accentColor: C.green,
                      width: 15,
                      height: 15,
                      margin: 0,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <strong style={{ fontSize: 13, display: "block" }}>
                      {item.name}
                    </strong>
                    <span
                      style={{
                        fontSize: 11,
                        display: "block",
                        color: C.muted,
                        marginTop: 3,
                      }}
                    >
                      {item.desc}
                    </span>
                  </span>
                  <span
                    style={{
                      color: C.green,
                      fontSize: 11,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.price}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* Right card */}
          <section style={card}>
            <h2 style={heading}>04. Customize your model</h2>
            <p
              style={{
                color: C.muted,
                fontSize: 12,
                lineHeight: 1.6,
                margin: "-5px 0 13px",
              }}
            >
              Add the features that bring your miniature to life.
            </p>

            <div style={{ display: "grid", gap: 8 }}>
              {option(
                "LED lighting",
                "Interior and exterior illumination",
                "+ ₹800",
                lighting,
                setLighting
              )}
              {option(
                "Landscaping",
                "Garden, lawn and miniature trees",
                "₹500+",
                landscape,
                setLandscape
              )}
              {option(
                "Acrylic display box",
                "Transparent protective cover",
                "₹700+",
                acrylic,
                setAcrylic
              )}
              {option(
                "Paint & finishing",
                "Surface finish and detailing",
                "+ ₹500",
                paint,
                setPaint
              )}
              {option(
                "Custom design",
                "Based on your plans or photos",
                "+ ₹1,500",
                custom,
                setCustom
              )}
            </div>

            {/* Price summary */}
            <div
              style={{
                marginTop: 16,
                borderRadius: 13,
                background: C.dark,
                padding: 18,
                color: "#fff",
              }}
            >
              <p
                style={{
                  margin: "0 0 5px",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 1.4,
                  color: "#d2e2d6",
                }}
              >
                YOUR ESTIMATED PRICE
              </p>

              <div
                aria-live="polite"
                style={{
                  fontSize: "clamp(29px, 3.5vw, 38px)",
                  fontWeight: 750,
                  letterSpacing: -0.8,
                  lineHeight: 1.25,
                  overflowWrap: "anywhere",
                }}
              >
                {money(total)}
              </div>

              <div
                style={{
                  display: "grid",
                  gap: 9,
                  borderTop: "1px solid #52685c",
                  paddingTop: 13,
                  marginTop: 14,
                  fontSize: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#d2e2d6" }}>
                    Base model · {detail}
                  </span>
                  <strong>{money(base)}</strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#d2e2d6" }}>
                    Selected extras
                  </span>
                  <strong>{money(extras)}</strong>
                </div>
              </div>

              <button
                type="button"
                onClick={requestQuote}
                style={{
                  width: "100%",
                  marginTop: 17,
                  padding: "12px 10px",
                  border: "none",
                  borderRadius: 9,
                  background: "#dcebd9",
                  color: C.dark,
                  fontSize: 13,
                  fontWeight: 750,
                  cursor: "pointer",
                }}
              >
                Get Final Quote on WhatsApp ↗
              </button>

              <p
                style={{
                  margin: "11px 0 0",
                  fontSize: 10,
                  lineHeight: 1.65,
                  color: "#d2e2d6",
                }}
              >
                Indicative estimate only. Final pricing depends
                on model complexity, materials, finishing and delivery.
              </p>
            </div>
          </section>
        </div>

        <footer
          style={{
            textAlign: "center",
            marginTop: 20,
            color: C.muted,
            fontSize: 10,
            letterSpacing: 0.6,
          }}
        >
          CHHOTAKAAR · THOUGHTFULLY CRAFTED MINIATURES
        </footer>
      </div>

      <style>{`
        .calculator-grid {
          width: 100%;
        }

        .calculator-grid * {
          box-sizing: border-box;
        }

        .calculator-grid input:focus-visible,
        .calculator-grid select:focus-visible,
        .calculator-grid button:focus-visible {
          outline: 2px solid #82b596;
          outline-offset: 2px;
        }

        .calculator-grid button:hover {
          filter: brightness(0.96);
        }

        @media (max-width: 700px) {
          .calculator-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
}
