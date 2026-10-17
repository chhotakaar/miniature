
"use client";

import { useState } from "react";

const models = [
  {
    number: "01",
    name: "Basic Model",
    subtitle: "The Essential Edition",
    image: "/images/apartment-basic.webp",
    price: "₹1,499",
    description: "A clean and detailed 3D-printed apartment miniature.",
    features: [
      "4-storey apartment design",
      "White and light grey facade",
      "Detailed balconies and windows",
      "Plain display base",
    ],
  },
  {
    number: "02",
    name: "LED Lights",
    subtitle: "Light Up Your Model",
    image: "/images/apartment-lights.webp",
    price: "₹2,499",
    description: "Add warm lighting to bring your miniature to life.",
    features: [
      "Everything in Basic Model",
      "Warm LED lighting",
      "Illuminated windows",
      "Premium evening appearance",
    ],
  },
  {
    number: "03",
    name: "Landscape Edition",
    subtitle: "Bring the Outdoors In",
    image: "/images/apartment-landscape.webp",
    price: "₹3,499",
    description: "Add miniature greenery and landscaping around your building.",
    features: [
      "Everything in LED Lights",
      "Miniature trees and greenery",
      "Landscaped ground base",
      "Decorative pathways",
    ],
  },
  {
    number: "04",
    name: "Acrylic Display",
    subtitle: "Protect and Display",
    image: "/images/apartment-acrylic.webp",
    price: "₹4,999",
    description: "Showcase your model inside a transparent display case.",
    features: [
      "Everything in Landscape Edition",
      "Transparent acrylic cover",
      "Protection from dust",
      "Elegant display finish",
    ],
  },
  {
    number: "05",
    name: "Signature Edition",
    subtitle: "The Complete Experience",
    image: "/images/apartment-signature.webp",
    price: "₹6,999",
    description: "A premium miniature with a personalized finishing touch.",
    features: [
      "LED lights and landscaping",
      "Transparent acrylic cover",
      "Premium display base",
      "Custom nameplate",
    ],
  },
];

export default function CustomizeYourModelPage() {
  const [activeModel, setActiveModel] = useState("01");

  return (
    <main className="customize-page">
      <style jsx>{`
        .customize-page {
          background: #faf8f4;
          color: #26241f;
          min-height: 100vh;
          padding: 32px 0 70px;
        }

        .container {
          width: min(1400px, 92%);
          margin: 0 auto;
        }

        .back-link {
          color: #635847;
          text-decoration: none;
          font-size: 14px;
        }

        .eyebrow {
          color: #9b7c50;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          margin: 28px 0 12px;
        }

        h1 {
          font-size: clamp(34px, 5vw, 60px);
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin: 0;
        }

        .intro {
          max-width: 680px;
          color: #706b63;
          line-height: 1.8;
          font-size: 15px;
          margin-top: 18px;
        }

        .section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin: 55px 0 22px;
        }

        .section-heading .eyebrow {
          margin-top: 0;
        }

        h2 {
          font-size: clamp(25px, 3vw, 36px);
          margin: 0;
          letter-spacing: -0.7px;
        }

        .scroll-hint {
          color: #81786a;
          font-size: 12px;
          white-space: nowrap;
        }

        .model-track {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(260px, 310px);
          gap: 20px;
          overflow-x: auto;
          padding: 5px 3px 22px;
          scroll-snap-type: x mandatory;
          scrollbar-width: thin;
          scrollbar-color: #c5b59d #eee7dc;
        }

        .model-card {
          min-width: 0;
          background: white;
          border: 1px solid #e8e1d7;
          border-radius: 14px;
          overflow: hidden;
          scroll-snap-align: start;
          transition: border-color 0.2s, transform 0.2s;
          cursor: pointer;
        }

        .model-card:hover,
        .model-card.selected {
          border-color: #b49a72;
          transform: translateY(-3px);
        }

        .image-wrap {
          position: relative;
          height: 245px;
          background: #eee7dc;
          overflow: hidden;
        }

        .model-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }

        .model-card:hover .model-image {
          transform: scale(1.035);
        }

        .number {
          position: absolute;
          top: 12px;
          left: 12px;
          background: white;
          color: #302b24;
          border-radius: 5px;
          padding: 7px 10px;
          font-size: 12px;
          font-weight: 700;
        }

        .model-content {
          padding: 20px;
        }

        .subtitle {
          color: #9b7c50;
          font-size: 11px;
          letter-spacing: 0.5px;
          margin: 0 0 8px;
        }

        h3 {
          font-size: 22px;
          margin: 0;
        }

        .description {
          color: #706b63;
          font-size: 13px;
          line-height: 1.7;
          min-height: 44px;
        }

        .price {
          font-size: 25px;
          font-weight: 700;
          margin: 15px 0;
        }

        .price span {
          font-size: 11px;
          font-weight: 400;
          color: #81786a;
        }

        .feature-title {
          font-size: 12px;
          font-weight: 700;
          margin-top: 20px;
        }

        .features {
          list-style: none;
          padding: 0;
          margin: 10px 0 22px;
        }

        .features li {
          font-size: 13px;
          color: #625e57;
          line-height: 1.7;
          margin: 5px 0;
        }

        .features li::before {
          content: "✓";
          color: #9b7c50;
          font-weight: 700;
          margin-right: 9px;
        }

        .enquire-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
          box-sizing: border-box;
          padding: 13px 15px;
          background: #292720;
          color: white;
          border-radius: 6px;
          text-decoration: none;
          font-size: 13px;
          transition: background 0.2s;
        }

        .enquire-button:hover {
          background: #6c573c;
        }

        .selected-note {
          margin-top: 28px;
          background: #eee7dc;
          border-radius: 12px;
          padding: 24px;
        }

        .selected-note p {
          color: #706b63;
          line-height: 1.8;
          margin-bottom: 0;
        }

        .bottom-section {
          margin-top: 55px;
          padding: 38px;
          background: #eee7dc;
          border-radius: 14px;
        }

        .bottom-section .eyebrow {
          margin-top: 0;
        }

        .bottom-section p:not(.eyebrow) {
          color: #706b63;
          line-height: 1.8;
          max-width: 650px;
        }

        .bottom-link {
          display: inline-block;
          margin-top: 10px;
          padding: 13px 18px;
          border-radius: 6px;
          background: #292720;
          color: white;
          text-decoration: none;
          font-size: 13px;
        }

        @media (max-width: 600px) {
          .customize-page {
            padding-top: 24px;
          }

          .section-heading {
            align-items: start;
            flex-direction: column;
            gap: 8px;
            margin-top: 40px;
          }

          .model-track {
            grid-auto-columns: minmax(78vw, 300px);
            gap: 14px;
          }

          .image-wrap {
            height: 235px;
          }

          .bottom-section {
            padding: 25px;
          }
        }
      `}</style>

      <div className="container">
        <a href="/" className="back-link">
          ← Back to Chhotakaar
        </a>

        <header>
          <p className="eyebrow">
            CHHOTAKAAR · ARCHITECTURAL MINIATURES
          </p>

          <h1>Customize Your Model</h1>

          <p className="intro">
            Start with a basic 3D-printed apartment and make it yours.
            Add LED lights, beautiful landscaping, an acrylic display
            case, and a personalized nameplate to create your ideal
            miniature.
          </p>
        </header>

        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR MODEL, YOUR CHOICE</p>
              <h2>Choose Your Edition</h2>
            </div>
            <p className="scroll-hint">
              ← Scroll horizontally to explore →
            </p>
          </div>

          <div className="model-track">
            {models.map((model) => (
              <article
                key={model.number}
                className={`model-card ${
                  activeModel === model.number ? "selected" : ""
                }`}
                onClick={() => setActiveModel(model.number)}
              >
                <div className="image-wrap">
                  <img
                    src={model.image}
                    alt={`${model.name} - 3D printed apartment miniature by Chhotakaar`}
                    className="model-image"
                    loading={model.number === "01" ? "eager" : "lazy"}
                  />
                  <span className="number">{model.number}</span>
                </div>

                <div className="model-content">
                  <p className="subtitle">{model.subtitle}</p>
                  <h3>{model.name}</h3>

                  <p className="description">{model.description}</p>

                  <p className="price">
                    {model.price}
                    <span> onwards</span>
                  </p>

                  <p className="feature-title">What's included</p>

                  <ul className="features">
                    {model.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <a
                    href={`/contact?model=${encodeURIComponent(model.name)}`}
                    className="enquire-button"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Enquire About This Model <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="selected-note">
          <p className="eyebrow">MAKE IT YOURS</p>
          <h2>
            {models.find((model) => model.number === activeModel)?.name}
          </h2>
          <p>
            {models.find((model) => model.number === activeModel)?.description}
            {" "}Choose an edition and contact us to discuss your requirements.
          </p>
        </section>

        <section className="bottom-section">
          <p className="eyebrow">MADE FOR YOUR SPACE</p>
          <h2>A miniature that tells your story.</h2>
          <p>
            Have a specific building design, size, or finish in mind?
            Talk to us about a custom architectural miniature made for you.
          </p>
          <a href="/contact" className="bottom-link">
            Discuss Your Model →
          </a>
        </section>
      </div>
    </main>
  );
}
