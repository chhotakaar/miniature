
"use client";

import { useState } from "react";

const models = [
  {
    number: "01",
    name: "Basic Apartment Model",
    subtitle: "Simple. Detailed. Timeless.",
    image: "/images/chhotakaar-only-3d-printed-apartment.png",
    price: "Basic finish",
    description:
      "A modern 3D-printed apartment miniature with a clean, detailed architectural finish.",
    features: [
      "Modern 4-storey apartment design",
      "Detailed balconies and windows",
      "White and grey exterior",
      "Simple display base",
    ],
  },
  {
    number: "02",
    name: "Apartment with Lighting",
    subtitle: "Bring Your Model to Life",
    image: "/images/chhotakaar-3d-printed-apartment-with-lighting.png",
    price: "Lighting upgrade",
    description:
      "Enhance your apartment model with warm lighting for an eye-catching display.",
    features: [
      "Apartment miniature",
      "Warm LED lighting",
      "Illuminated windows",
      "Beautiful display appearance",
    ],
  },
  {
    number: "03",
    name: "Apartment with Landscape",
    subtitle: "A Little World of Its Own",
    image: "/images/chhotakaar-3d-printed-apartment-with-landscape.png",
    price: "Landscape upgrade",
    description:
      "Add greenery and miniature landscaping to create a more complete architectural scene.",
    features: [
      "Detailed apartment model",
      "Miniature greenery",
      "Landscape detailing",
      "Decorative ground base",
    ],
  },
  {
    number: "04",
    name: "Apartment with Acrylic Cover",
    subtitle: "Protect. Preserve. Display.",
    image:
      "/images/chhotakaar-3d-printed-apartment-with-acrylic-covering-box.png",
    price: "Acrylic cover upgrade",
    description:
      "Present your miniature inside a transparent acrylic display cover.",
    features: [
      "Architectural apartment model",
      "Transparent acrylic covering",
      "Helps protect against dust",
      "Premium display finish",
    ],
  },
];

export default function CustomizeYourModelPage() {
  const [selected, setSelected] = useState("01");

  const selectedModel = models.find(
    (model) => model.number === selected
  );

  return (
    <main className="customize-page">
      <style jsx>{`
        .customize-page {
          min-height: 100vh;
          background: #faf8f4;
          color: #292720;
          padding: 32px 0 70px;
        }

        .container {
          width: min(1400px, 92%);
          margin: 0 auto;
        }

        .back-link {
          display: inline-block;
          color: #625745;
          font-size: 14px;
          text-decoration: none;
        }

        .eyebrow {
          color: #98794e;
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
          max-width: 700px;
          color: #716b62;
          font-size: 15px;
          line-height: 1.9;
          margin-top: 18px;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          margin: 52px 0 22px;
        }

        .section-heading .eyebrow {
          margin-top: 0;
        }

        h2 {
          font-size: clamp(25px, 3vw, 36px);
          letter-spacing: -0.7px;
          margin: 0;
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
        }

        .model-card {
          min-width: 0;
          background: #fff;
          border: 1px solid #e8e1d7;
          border-radius: 14px;
          overflow: hidden;
          scroll-snap-align: start;
          cursor: pointer;
          transition: transform 0.2s, border-color 0.2s;
        }

        .model-card:hover,
        .model-card.selected {
          border-color: #b49a72;
          transform: translateY(-3px);
        }

        .image-wrap {
          position: relative;
          height: 250px;
          background: #eee7dc;
          overflow: hidden;
        }

        .model-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          padding: 7px 10px;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 700;
        }

        .model-content {
          padding: 20px;
        }

        .subtitle {
          color: #98794e;
          font-size: 11px;
          letter-spacing: 0.5px;
          margin: 0 0 9px;
        }

        h3 {
          font-size: 21px;
          line-height: 1.35;
          margin: 0;
        }

        .description {
          color: #716b62;
          font-size: 13px;
          line-height: 1.8;
          min-height: 70px;
        }

        .price-label {
          display: inline-block;
          padding: 8px 10px;
          background: #f3eee6;
          color: #6b5638;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 600;
          margin: 5px 0 12px;
        }

        .feature-title {
          font-size: 12px;
          font-weight: 700;
          margin: 15px 0 10px;
        }

        .features {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
        }

        .features li {
          font-size: 13px;
          line-height: 1.7;
          color: #625e57;
          margin: 6px 0;
        }

        .features li::before {
          content: "✓";
          color: #98794e;
          font-weight: 700;
          margin-right: 9px;
        }

        .enquire-button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding: 13px 14px;
          background: #292720;
          color: white;
          border-radius: 6px;
          text-decoration: none;
          font-size: 12px;
        }

        .enquire-button:hover {
          background: #6c573c;
        }

        .selected-panel {
          margin-top: 28px;
          padding: 25px;
          background: #eee7dc;
          border-radius: 12px;
        }

        .selected-panel .eyebrow {
          margin-top: 0;
        }

        .selected-panel p:last-child {
          color: #716b62;
          line-height: 1.8;
          margin-bottom: 0;
        }

        .bottom-section {
          margin-top: 48px;
          padding: 36px;
          background: #eee7dc;
          border-radius: 14px;
        }

        .bottom-section .eyebrow {
          margin-top: 0;
        }

        .bottom-section p:not(.eyebrow) {
          max-width: 650px;
          color: #716b62;
          line-height: 1.8;
        }

        .bottom-link {
          display: inline-block;
          margin-top: 10px;
          padding: 13px 18px;
          background: #292720;
          color: white;
          border-radius: 6px;
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
            margin-top: 38px;
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
            Start with a basic 3D-printed apartment and make it
            your own. Explore lighting, landscaping and acrylic
            display options to find the finish that suits your
            style and budget.
          </p>
        </header>

        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR MODEL, YOUR CHOICE</p>
              <h2>Explore the Options</h2>
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
                  selected === model.number ? "selected" : ""
                }`}
                onClick={() => setSelected(model.number)}
              >
                <div className="image-wrap">
                  <img
                    src={model.image}
                    alt={`${model.name} | Chhotakaar 3D printed apartment miniature`}
                    className="model-image"
                    loading={model.number === "01" ? "eager" : "lazy"}
                  />
                  <span className="number">{model.number}</span>
                </div>

                <div className="model-content">
                  <p className="subtitle">{model.subtitle}</p>
                  <h3>{model.name}</h3>

                  <p className="description">
                    {model.description}
                  </p>

                  <span className="price-label">
                    {model.price}
                  </span>

                  <p className="feature-title">Features</p>

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

        {selectedModel && (
          <section className="selected-panel">
            <p className="eyebrow">YOUR SELECTED OPTION</p>
            <h2>{selectedModel.name}</h2>
            <p>{selectedModel.description}</p>
          </section>
        )}

        <section className="bottom-section">
          <p className="eyebrow">MADE FOR YOUR SPACE</p>
          <h2>Have a custom design in mind?</h2>
          <p>
            Tell us about your building, preferred size and
            finishing requirements. We can discuss a miniature
            designed around your idea.
          </p>
          <a href="/contact" className="bottom-link">
            Discuss Your Model →
          </a>
        </section>
      </div>
    </main>
  );
}
