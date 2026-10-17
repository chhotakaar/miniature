
"use client";

import { useState } from "react";

const models = [
  {
    number: "01 / 04",
    name: "Basic Apartment Model",
    tagline: "Simple. Detailed. Timeless.",
    image: "/images/chhotakaar-only-3d-printed-apartment.png",
    description: "A clean, detailed miniature of your apartment design.",
    features: [
      "Detailed apartment facade",
      "Balconies and windows",
      "3D-printed structure",
      "Simple display base",
    ],
  },
  {
    number: "02 / 04",
    name: "Apartment with Lighting",
    tagline: "A little light. A big difference.",
    image: "/images/chhotakaar-3d-printed-apartment-with-lighting.png",
    description: "Add warm lighting to make your miniature stand out.",
    features: [
      "Everything in the basic model",
      "Warm LED lighting",
      "Illuminated windows",
      "Striking display look",
    ],
  },
  {
    number: "03 / 04",
    name: "Apartment with Landscape",
    tagline: "Bring the outdoors in.",
    image: "/images/chhotakaar-3d-printed-apartment-with-landscape.png",
    description: "Surround your building with miniature greenery and landscape details.",
    features: [
      "Apartment miniature",
      "Miniature greenery",
      "Landscape details",
      "Decorative ground base",
    ],
  },
  {
    number: "04 / 04",
    name: "Apartment with Acrylic Cover",
    tagline: "Made to display. Made to protect.",
    image: "/images/chhotakaar-3d-printed-apartment-with-acrylic-covering-box.png",
    description: "Showcase your miniature inside a transparent acrylic cover.",
    features: [
      "Architectural miniature",
      "Transparent acrylic cover",
      "Helps keep dust away",
      "Clean display finish",
    ],
  },
];

export default function CustomizeYourModelPage() {
  const [selected, setSelected] = useState("01 / 04");

  return (
    <main className="finish-page">
      <style jsx>{`
        .finish-page {
          min-height: 100vh;
          background: #f8f6f0;
          color: #0b3028;
          padding: 30px 0 45px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .container {
          width: min(1400px, 94%);
          margin: 0 auto;
        }

        .top-row {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 24px;
        }

        .eyebrow {
          color: #c28c43;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          margin: 0 0 10px;
        }

        h1 {
          margin: 0;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.15;
          letter-spacing: -1px;
          font-weight: 700;
        }

        h1 span {
          color: #d2a04f;
        }

        .intro {
          max-width: 350px;
          margin: 0;
          color: #77776e;
          font-size: 12px;
          line-height: 1.8;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .card {
          min-width: 0;
          overflow: hidden;
          background: #fffefa;
          border: 1px solid #e8dfd0;
          border-radius: 13px;
          transition: border-color 0.2s, transform 0.2s;
        }

        .card.selected {
          border-color: #d2a04f;
        }

        .image-wrap {
          position: relative;
          height: 185px;
          background: #d6b998;
          overflow: hidden;
        }

        .image-wrap img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .number {
          position: absolute;
          top: 10px;
          left: 9px;
          padding: 5px 8px;
          border-radius: 20px;
          background: #f4c765;
          color: #18372e;
          font-size: 9px;
          font-weight: 700;
        }

        .content {
          padding: 13px 13px 15px;
        }

        .tagline {
          color: #c28c43;
          font-size: 9px;
          line-height: 1.5;
          margin: 0 0 7px;
        }

        h2 {
          margin: 0 0 8px;
          font-size: 16px;
          line-height: 1.3;
          letter-spacing: -0.3px;
        }

        .description {
          min-height: 44px;
          color: #77776e;
          font-size: 10px;
          line-height: 1.7;
          margin: 0 0 14px;
        }

        .included {
          color: #18372e;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.8px;
          margin: 0 0 9px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0 0 16px;
        }

        li {
          color: #77776e;
          font-size: 10px;
          line-height: 1.5;
          margin: 6px 0;
        }

        li::before {
          content: "✓";
          color: #d2a04f;
          font-weight: 700;
          margin-right: 7px;
        }

        .button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          width: 100%;
          padding: 11px 12px;
          box-sizing: border-box;
          border: none;
          border-radius: 24px;
          background: #0b382e;
          color: white;
          font-size: 10px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
        }

        .button:hover {
          background: #155243;
        }

        @media (max-width: 850px) {
          .cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .image-wrap {
            height: 220px;
          }
        }

        @media (max-width: 520px) {
          .finish-page {
            padding-top: 24px;
          }

          .top-row {
            align-items: start;
            flex-direction: column;
            gap: 12px;
          }

          .intro {
            max-width: 100%;
          }

          .cards {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .image-wrap {
            height: 250px;
          }

          .content {
            padding: 16px;
          }

          h2 {
            font-size: 19px;
          }

          .description,
          li {
            font-size: 12px;
          }

          .tagline,
          .included {
            font-size: 10px;
          }

          .button {
            font-size: 12px;
          }
        }
      `}</style>

      <div className="container">
        <header className="top-row">
          <div>
            <p className="eyebrow">THE MINIATURE EDIT</p>
            <h1>
              Choose your finish<span>.</span>
            </h1>
          </div>

          <p className="intro">
            Har option ki ek apartment model ko aur personal banane
            ke liye hai. Cards ko horizontally scroll karke details
            dekhein.
          </p>
        </header>

        <section className="cards">
          {models.map((model) => (
            <article
              key={model.number}
              className={`card ${
                selected === model.number ? "selected" : ""
              }`}
              onClick={() => setSelected(model.number)}
            >
              <div className="image-wrap">
                <img
                  src={model.image}
                  alt={model.name}
                  loading="lazy"
                />
                <span className="number">{model.number}</span>
              </div>

              <div className="content">
                <p className="tagline">{model.tagline}</p>
                <h2>{model.name}</h2>
                <p className="description">{model.description}</p>

                <p className="included">WHAT'S INCLUDED</p>

                <ul>
                  {model.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a
                  className="button"
                  href={`/contact?model=${encodeURIComponent(model.name)}`}
                  onClick={(event) => event.stopPropagation()}
                >
                  Enquire about this model <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
