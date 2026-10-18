
"use client";

import { useState } from "react";

const money = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function CalculatePricePage() {
  const [modelType, setModelType] = useState("Villa");
  const [length, setLength] = useState(8);
  const [width, setWidth] = useState(6);
  const [detail, setDetail] = useState("Detailed");
  const [has3DFile, setHas3DFile] = useState("no");
  const [led, setLed] = useState(false);
  const [landscape, setLandscape] = useState(false);
  const [acrylic, setAcrylic] = useState(false);
  const [painting, setPainting] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [savingLead, setSavingLead] = useState(false);
  const [leadError, setLeadError] = useState("");

  const area = Math.max(1, length) * Math.max(1, width);

  const rate =
    detail === "Basic" ? 22 :
    detail === "Detailed" ? 38 : 60;

  const typeCharge =
    modelType === "Apartment" ? 500 :
    modelType === "Commercial Building" ? 800 :
    modelType === "Villa" ? 200 : 0;

  const designCharge = has3DFile === "no" ? 1000 : 0;
  const ledCharge = led ? 599 : 0;
  const landscapeCharge = landscape ? 699 : 0;
  const acrylicCharge = acrylic ? 999 : 0;
  const paintingCharge = painting ? 499 : 0;

  const basePrice = area * rate + typeCharge;

  const total =
    basePrice +
    designCharge +
    ledCharge +
    landscapeCharge +
    acrylicCharge +
    paintingCharge;

  const whatsappMessage = [
    "Hello Chhotakaar! I want a miniature model quotation.",
    "",
    `Model: ${modelType}`,
    `Size: ${length} x ${width} inches`,
    `Footprint: ${area} sq. inches`,
    `Detail level: ${detail}`,
    `3D file available: ${has3DFile === "yes" ? "Yes" : "No"}`,
    `3D design charge: ${money(designCharge)}`,
    `LED lighting: ${led ? "Yes" : "No"}`,
    `Landscaping: ${landscape ? "Yes" : "No"}`,
    `Acrylic box: ${acrylic ? "Yes" : "No"}`,
    `Extra painting: ${painting ? "Yes" : "No"}`,
    `Estimated total: ${money(total)}`,
    `Name: ${customerName || "Not provided"}`,
    `Phone: ${customerPhone || "Not provided"}`,
    `Email: ${customerEmail || "Not provided"}`,
    `Requirements: ${notes || "None"}`,
    "",
    "Please confirm the final price and delivery time.",
  ].join("\n");

  const whatsappUrl =
    "https://wa.me/91XXXXXXXXXX?text=" +
    encodeURIComponent(whatsappMessage);

  async function handleGetQuote() {
    if (savingLead) return;
    setSavingLead(true);
    setLeadError("");

    const lead = {
      customerName,
      customerPhone,
      customerEmail,
      modelType,
      length,
      width,
      detail,
      has3DFile: has3DFile === "yes" ? "Yes" : "No",
      led,
      landscape,
      acrylic,
      painting,
      estimatedPrice: total,
      notes,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Could not save your enquiry.");
      }

      window.location.href = whatsappUrl;
    } catch (error) {
      setLeadError(
        error instanceof Error
          ? `Your enquiry could not be saved to our sheet. Please try again. (${error.message})`
          : "Your enquiry could not be saved. Please try again."
      );
      setSavingLead(false);
    }
  }

  const fieldStyle = {
    width: "100%",
    padding: "12px 13px",
    border: "1px solid #d8dfd8",
    borderRadius: 10,
    background: "#fff",
    color: "#24382d",
    fontSize: 15,
    outlineColor: "#426b50",
  } as const;

  const labelStyle = {
    display: "block",
    fontSize: 14,
    fontWeight: 650,
    marginBottom: 8,
    color: "#24382d",
  } as const;

  const cardStyle = {
    border: "1px solid #e1e7df",
    borderRadius: 13,
    padding: 15,
    background: "#fff",
  } as const;

  function Option({
    title,
    description,
    selected,
    onClick,
  }: {
    title: string;
    description: string;
    selected: boolean;
    onClick: () => void;
  }) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={selected}
        style={{
          textAlign: "left",
          padding: 13,
          borderRadius: 11,
          border: selected
            ? "2px solid #386447"
            : "1px solid #dce4dc",
          background: selected ? "#eff6ef" : "#fff",
          color: "#24382d",
          cursor: "pointer",
          width: "100%",
        }}
      >
        <span style={{ display: "block", fontWeight: 700 }}>
          {title}
        </span>
        <span
          style={{
            display: "block",
            marginTop: 5,
            fontSize: 12,
            color: "#647268",
            lineHeight: 1.5,
          }}
        >
          {description}
        </span>
      </button>
    );
  }

  function AddOn({
    title,
    price,
    checked,
    onChange,
  }: {
    title: string;
    price: number;
    checked: boolean;
    onChange: (value: boolean) => void;
  }) {
    return (
      <label
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          padding: "13px 0",
          borderBottom: "1px solid #edf0ec",
          cursor: "pointer",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            style={{ width: 17, height: 17, accentColor: "#386447" }}
          />
          <span style={{ fontSize: 14, fontWeight: 550 }}>{title}</span>
        </span>
        <strong style={{ whiteSpace: "nowrap", fontSize: 14 }}>
          +{money(price)}
        </strong>
      </label>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7f2",
        padding: "28px 16px 55px",
        color: "#24382d",
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: 28 }}>
          <div
            style={{
              color: "#52785a",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            CHHOTAKAAR CUSTOM MODELS
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              lineHeight: 1.15,
              margin: "10px 0",
              letterSpacing: -1,
            }}
          >
            Calculate Your Model Price
          </h1>
          <p
            style={{
              margin: "0 auto",
              maxWidth: 570,
              color: "#667268",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Choose your model size, detailing and add-ons to get an
            estimated price for your custom miniature.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: 20,
            alignItems: "start",
          }}
        >
          <section
            style={{
              background: "#fff",
              border: "1px solid #e4e9e1",
              borderRadius: 18,
              padding: "clamp(16px, 3vw, 25px)",
              display: "grid",
              gap: 23,
              boxShadow: "0 8px 25px rgba(31,55,37,0.04)",
            }}
          >
            <div>
              <h2 style={{ margin: "0 0 13px", fontSize: 18 }}>
                01. Select Model Type
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 10,
                }}
              >
                {[
                  ["House", "Simple residential home"],
                  ["Villa", "Modern or luxury villa"],
                  ["Apartment", "Multi-storey building"],
                  ["Commercial Building", "Office or commercial model"],
                ].map(([name, desc]) => (
                  <Option
                    key={name}
                    title={name}
                    description={desc}
                    selected={modelType === name}
                    onClick={() => setModelType(name)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ margin: "0 0 13px", fontSize: 18 }}>
                02. Model Dimensions
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <label>
                  <span style={labelStyle}>Length (inches)</span>
                  <input
                    style={fieldStyle}
                    type="number"
                    min="1"
                    max="60"
                    value={length}
                    onChange={(e) =>
                      setLength(Math.max(1, Math.min(60, Number(e.target.value) || 1)))
                    }
                  />
                </label>
                <label>
                  <span style={labelStyle}>Width (inches)</span>
                  <input
                    style={fieldStyle}
                    type="number"
                    min="1"
                    max="60"
                    value={width}
                    onChange={(e) =>
                      setWidth(Math.max(1, Math.min(60, Number(e.target.value) || 1)))
                    }
                  />
                </label>
              </div>
              <p style={{ color: "#718074", fontSize: 12, marginBottom: 0 }}>
                Base area: {area} sq. inches ({(area / 144).toFixed(2)} sq. ft.)
              </p>
            </div>

            <div>
              <h2 style={{ margin: "0 0 13px", fontSize: 18 }}>
                03. Level of Detailing
              </h2>
              <div style={{ display: "grid", gap: 9 }}>
                <Option
                  title="Basic"
                  description="Simple shape and minimal detailing · ₹22/sq. inch"
                  selected={detail === "Basic"}
                  onClick={() => setDetail("Basic")}
                />
                <Option
                  title="Detailed"
                  description="More architectural details · ₹38/sq. inch"
                  selected={detail === "Detailed"}
                  onClick={() => setDetail("Detailed")}
                />
                <Option
                  title="Premium"
                  description="Intricate design and complex details · ₹60/sq. inch"
                  selected={detail === "Premium"}
                  onClick={() => setDetail("Premium")}
                />
              </div>
            </div>

            <div>
              <h2 style={{ margin: "0 0 7px", fontSize: 18 }}>
                04. Do You Have a 3D File?
              </h2>
              <p
                style={{
                  color: "#68766b",
                  fontSize: 13,
                  lineHeight: 1.6,
                  margin: "0 0 12px",
                }}
              >
                Upload or share your print-ready STL/3MF file after the quote.
                If you do not have a 3D file, we can create the model design.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                <Option
                  title="Yes, I have a file"
                  description="No design charge"
                  selected={has3DFile === "yes"}
                  onClick={() => setHas3DFile("yes")}
                />
                <Option
                  title="No, create it for me"
                  description="Design charge +₹1,000"
                  selected={has3DFile === "no"}
                  onClick={() => setHas3DFile("no")}
                />
              </div>
              {has3DFile === "no" && (
                <p
                  style={{
                    background: "#f4f7ef",
                    padding: 11,
                    borderRadius: 9,
                    color: "#46664a",
                    fontSize: 13,
                    marginBottom: 0,
                  }}
                >
                  ✓ 3D design fee of ₹1,000 has been added.
                  Complex designs may require a separate quote.
                </p>
              )}
            </div>

            <div>
              <h2 style={{ margin: "0 0 5px", fontSize: 18 }}>
                05. Customize Your Model
              </h2>
              <p style={{ color: "#718074", fontSize: 12, marginTop: 0 }}>
                Select any extras you need.
              </p>
              <AddOn
                title="LED lighting"
                price={599}
                checked={led}
                onChange={setLed}
              />
              <AddOn
                title="Landscaping & greenery"
                price={699}
                checked={landscape}
                onChange={setLandscape}
              />
              <AddOn
                title="Acrylic display box"
                price={999}
                checked={acrylic}
                onChange={setAcrylic}
              />
              <AddOn
                title="Extra painting & finishing"
                price={499}
                checked={painting}
                onChange={setPainting}
              />
            </div>

            <div>
              <h2 style={{ margin: "0 0 13px", fontSize: 18 }}>
                06. Your Contact Details
              </h2>
              <div style={{ display: "grid", gap: 12 }}>
                <label>
                  <span style={labelStyle}>Name</span>
                  <input
                    style={fieldStyle}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  <span style={labelStyle}>Phone number</span>
                  <input
                    style={fieldStyle}
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Your contact number"
                  />
                </label>
                <label>
                  <span style={labelStyle}>Email address</span>
                  <input
                    style={fieldStyle}
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>
                <label>
                  <span style={labelStyle}>Special requirements (optional)</span>
                  <textarea
                    style={{ ...fieldStyle, minHeight: 85, resize: "vertical" }}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share a photo, floor plan, building details, preferred colours..."
                  />
                </label>
              </div>
            </div>
          </section>

          <aside
            style={{
              background: "#213e2b",
              color: "#fff",
              borderRadius: 18,
              padding: "clamp(20px, 3vw, 28px)",
              position: "sticky",
              top: 20,
              boxShadow: "0 12px 30px rgba(31,55,37,0.12)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 750,
                letterSpacing: 1.5,
                color: "#c4d9c4",
              }}
            >
              YOUR PRICE ESTIMATE
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 42px)",
                margin: "10px 0 5px",
                letterSpacing: -1,
              }}
            >
              {money(total)}
            </h2>
            <p
              style={{
                margin: "0 0 23px",
                fontSize: 12,
                lineHeight: 1.6,
                color: "#d4e1d4",
              }}
            >
              Estimated price only. Final quotation depends on the design,
              print time and materials required.
            </p>

            <div
              style={{
                borderTop: "1px solid #46634d",
                paddingTop: 14,
                display: "grid",
                gap: 12,
                fontSize: 13,
              }}
            >
              <PriceLine label={`Base model (${area} sq. in.)`} value={money(area * rate)} />
              {typeCharge > 0 && (
                <PriceLine label="Model complexity" value={money(typeCharge)} />
              )}
              <PriceLine label="3D design fee" value={money(designCharge)} />
              {led && <PriceLine label="LED lighting" value={money(ledCharge)} />}
              {landscape && <PriceLine label="Landscaping" value={money(landscapeCharge)} />}
              {acrylic && <PriceLine label="Acrylic box" value={money(acrylicCharge)} />}
              {painting && <PriceLine label="Extra finishing" value={money(paintingCharge)} />}
            </div>

            <div
              style={{
                borderTop: "1px solid #46634d",
                marginTop: 18,
                paddingTop: 15,
                fontSize: 12,
                color: "#d4e1d4",
                lineHeight: 1.7,
              }}
            >
              <p style={{ margin: "0 0 7px" }}>
                <strong style={{ color: "#fff" }}>Model:</strong> {modelType}
              </p>
              <p style={{ margin: "0 0 7px" }}>
                <strong style={{ color: "#fff" }}>Size:</strong> {length} × {width} inches
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: "#fff" }}>3D file:</strong>{" "}
                {has3DFile === "yes" ? "Customer has file" : "Design needed"}
              </p>
            </div>

            <button
              type="button"
              onClick={handleGetQuote}
              disabled={savingLead}
              style={{
                display: "block",
                width: "100%",
                marginTop: 23,
                padding: "14px 16px",
                border: "none",
                borderRadius: 11,
                background: savingLead ? "#b7c9b0" : "#d7e8cf",
                color: "#213e2b",
                textAlign: "center",
                fontWeight: 800,
                fontSize: 14,
                cursor: savingLead ? "wait" : "pointer",
              }}
            >
              {savingLead ? "Saving enquiry..." : "Get Quote on WhatsApp →"}
            </button>
            {leadError && (
              <p role="alert" style={{ color: "#ffd8d8", fontSize: 12, lineHeight: 1.6 }}>
                {leadError}
              </p>
            )}
            <p
              style={{
                textAlign: "center",
                fontSize: 11,
                lineHeight: 1.6,
                color: "#c4d9c4",
                marginBottom: 0,
              }}
            >
              No payment required now. We will confirm the final quote first.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}

function PriceLine({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        gap: 12,
      }}
    >
      <span style={{ color: "#d4e1d4" }}>{label}</span>
      <strong style={{ whiteSpace: "nowrap" }}>{value}</strong>
    </div>
  );
}
