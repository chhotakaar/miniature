
"use client";

import { useState } from "react";

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

  // Demonstration rates: production cost validate karne ke baad badlein.
  const rates: Record<string, number> = {
    Basic: 90,
    Detailed: 160,
    Premium: 260,
  };

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
    "₹" + n.toLocaleString("en-IN");

  function requestQuote() {
    // Apna WhatsApp number country code ke saath enter karein.
    const WHATSAPP_NUMBER = "919560672813";

    const message = [
      "Hello Chhotakaar! I want a miniature model quote.",
      `Model: ${model}`,
      `Size: ${length} x ${width} inches`,
      `Area: ${area} sq. in.`,
      `Detail: ${detail}`,
      `LED lighting: ${lighting ? "Yes" : "No"}`,
      `Landscaping: ${landscape ? "Yes" : "No"}`,
      `Acrylic box: ${acrylic ? "Yes" : "No"}`,
      `Paint finishing: ${paint ? "Yes" : "No"}`,
      `Custom design: ${custom ? "Yes" : "No"}`,
      `Estimated price: ${money(total)}`,
      "Please confirm the final price and delivery time.",
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900";

  const cardClass =
    "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm";

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 text-gray-900 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
            CHHOTAKAAR CUSTOM MODELS
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Build Your Own Miniature
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Choose your model size, detailing and features
            to get an estimated price.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className={cardClass}>
            <h2 className="mb-5 text-xl font-semibold">
              1. Choose your model
            </h2>

            <label className="mb-2 block text-sm font-medium">
              Model type
            </label>
            <select
              className={inputClass}
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option>House</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Commercial Building</option>
            </select>

            <h2 className="mb-4 mt-6 text-xl font-semibold">
              2. Model base size
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <label className="text-sm font-medium">
                Length (inches)
                <input
                  className={`${inputClass} mt-2`}
                  type="number"
                  min="4"
                  max="48"
                  value={length}
                  onChange={(e) =>
                    setLength(Math.min(48, Math.max(4, Number(e.target.value) || 4)))
                  }
                />
              </label>

              <label className="text-sm font-medium">
                Width (inches)
                <input
                  className={`${inputClass} mt-2`}
                  type="number"
                  min="4"
                  max="48"
                  value={width}
                  onChange={(e) =>
                    setWidth(Math.min(48, Math.max(4, Number(e.target.value) || 4)))
                  }
                />
              </label>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Base area: {area} sq. in.
            </p>

            <h2 className="mb-3 mt-6 text-xl font-semibold">
              3. Detailing level
            </h2>

            <div className="space-y-3">
              {[
                ["Basic", "₹90 / sq. in."],
                ["Detailed", "₹160 / sq. in."],
                ["Premium", "₹260 / sq. in."],
              ].map(([name, price]) => (
                <label
                  key={name}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3"
                >
                  <input
                    type="radio"
                    name="detail"
                    checked={detail === name}
                    onChange={() => setDetail(name)}
                  />
                  <span className="flex-1 font-medium">{name}</span>
                  <span className="text-sm text-gray-500">{price}</span>
                </label>
              ))}
            </div>
          </section>

          <section className={cardClass}>
            <h2 className="mb-5 text-xl font-semibold">
              4. Customize your model
            </h2>

            <div className="space-y-4">
              {[
                {
                  label: "LED lighting",
                  description: "Interior / exterior lights",
                  value: lighting,
                  set: setLighting,
                  price: "₹800",
                },
                {
                  label: "Landscaping",
                  description: "Garden, lawn and miniature trees",
                  value: landscape,
                  set: setLandscape,
                  price: "₹500 minimum",
                },
                {
                  label: "Acrylic display box",
                  description: "Protective transparent cover",
                  value: acrylic,
                  set: setAcrylic,
                  price: "₹700 minimum",
                },
                {
                  label: "Paint & finishing",
                  description: "Surface finishing and detailing",
                  value: paint,
                  set: setPaint,
                  price: "₹500",
                },
                {
                  label: "Custom design",
                  description: "Design from your drawings or photos",
                  value: custom,
                  set: setCustom,
                  price: "₹1,500 extra",
                },
              ].map((item) => (
                <label
                  key={item.label}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 p-4"
                >
                  <input
                    className="mt-1 h-4 w-4"
                    type="checkbox"
                    checked={item.value}
                    onChange={(e) => item.set(e.target.checked)}
                  />
                  <span className="flex-1">
                    <span className="block font-medium">{item.label}</span>
                    <span className="mt-1 block text-sm text-gray-500">
                      {item.description}
                    </span>
                  </span>
                  <span className="text-right text-sm font-medium">
                    {item.price}
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-gray-100 p-5">
              <p className="text-sm text-gray-600">
                Estimated total price
              </p>
              <p className="mt-1 text-3xl font-bold">
                {money(total)}
              </p>

              <div className="mt-4 space-y-2 border-t border-gray-300 pt-3 text-sm">
                <div className="flex justify-between gap-3">
                  <span>Model ({detail})</span>
                  <span>{money(Math.round(base))}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span>Selected extras</span>
                  <span>{money(extras)}</span>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-gray-500">
                This is an indicative estimate. Final pricing depends
                on design complexity, materials, printing time,
                finishing and delivery.
              </p>

              <button
                type="button"
                onClick={requestQuote}
                className="mt-5 w-full rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
              >
                Get Final Quote on WhatsApp
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
