"use client";

import { useState } from "react";

const faqs = [
  ["What is a 3D-printed architectural miniature?", "It is a scaled-down architectural model made using 3D printing. It can represent a house, villa, apartment building or a custom architectural design."],
  ["Can I customise my miniature model?", "Ask about optional upgrades such as lighting, landscaping, an acrylic display cover and a personalised nameplate. Available options depend on your design."],
  ["Can I request a model based on my own design?", "Share your idea, reference images or available architectural drawings with Chhotakaar. We can discuss feasibility, finishing, timeline and pricing."],
  ["How do I get a price estimate?", "Send your model type, approximate size, reference images and desired features. The estimate depends on design complexity, material, printing time and finishing."]
];

const steps = [
  ["01", "Share your idea", "Tell us whether you need a house, villa, apartment building or custom architectural miniature. Reference images and drawings help communicate your vision."],
  ["02", "Choose your finish", "Discuss size, level of detail and optional upgrades such as lighting, landscaping, an acrylic cover or a personalised nameplate."],
  ["03", "Review the details", "Confirm the design scope, feasibility, expected timeline and pricing before proceeding."],
  ["04", "Bring it to life", "Once the details are agreed, the model moves into the production and finishing process agreed for your project."]
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main className="about-page">
      <style jsx>{`
        .about-page{--green:#0b3028;--green2:#123f34;--cream:#f8f6f0;--gold:#d2a04f;--muted:#77776e;--line:#e7e0d4;background:var(--cream);color:var(--green);font-family:Arial,Helvetica,sans-serif;min-height:100vh}
        *{box-sizing:border-box}.container{width:min(1180px,92%);margin:0 auto}
        .hero{padding:72px 0 62px}.eyebrow{color:#bd873c;font-size:10px;font-weight:700;letter-spacing:2.3px;text-transform:uppercase;margin:0 0 14px}
        h1{font-size:clamp(38px,6vw,72px);letter-spacing:-2.6px;line-height:1.02;margin:0;max-width:820px}h1 span,.gold{color:var(--gold)}
        .hero-grid{display:grid;grid-template-columns:1.35fr .65fr;gap:48px;align-items:end}.lead{color:var(--muted);font-size:16px;line-height:1.9;max-width:680px;margin:24px 0 0}
        .hero-card{background:#fffefa;border:1px solid var(--line);border-radius:18px;padding:24px}.hero-card strong{display:block;font-size:17px;margin-bottom:8px}.hero-card p{color:var(--muted);font-size:13px;line-height:1.8;margin:0}
        .actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.button{display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:999px;padding:13px 20px;font-size:12px;font-weight:700;text-decoration:none;border:1px solid var(--green);cursor:pointer;transition:transform .2s,background .2s}.button:hover{transform:translateY(-2px)}
        .primary{background:var(--green);color:white}.primary:hover{background:var(--green2)}.secondary{color:var(--green);background:transparent}
        .section{padding:62px 0;border-top:1px solid var(--line)}.section-heading{display:flex;justify-content:space-between;align-items:end;gap:28px;margin-bottom:28px}
        h2{font-size:clamp(28px,4vw,44px);letter-spacing:-1.3px;line-height:1.12;margin:0}.section-intro{max-width:420px;color:var(--muted);font-size:13px;line-height:1.8;margin:0}
        .values{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.value-card{border:1px solid var(--line);background:#fffefa;padding:24px;border-radius:16px;min-height:190px}
        .icon{display:grid;place-items:center;width:42px;height:42px;border:1px solid var(--gold);border-radius:50%;color:#b67f31;font-size:18px;margin-bottom:20px}
        h3{font-size:18px;margin:0 0 10px;letter-spacing:-.3px}.value-card p{color:var(--muted);font-size:13px;line-height:1.8;margin:0}
        .process{display:grid;grid-template-columns:.8fr 1.2fr;gap:50px;align-items:start}.step-list{display:grid;gap:10px}
        .step-button{display:flex;gap:16px;text-align:left;align-items:center;width:100%;padding:17px;border-radius:13px;background:transparent;border:1px solid var(--line);color:var(--green);cursor:pointer}.step-button.active{background:#fffefa;border-color:var(--gold)}
        .step-number{color:#bd873c;font-size:11px;font-weight:700;letter-spacing:1px}.step-button strong{font-size:14px}
        .step-detail{background:var(--green);color:white;border-radius:18px;padding:32px;min-height:250px;margin-top:14px}.step-detail .step-number{color:#f4c765}.step-detail h3{font-size:27px;margin:18px 0 12px}.step-detail p{color:#e1e9e4;font-size:14px;line-height:1.9;margin:0}
        .faq-grid{display:grid;grid-template-columns:.7fr 1.3fr;gap:48px}.faq-list{display:grid;gap:10px}.faq-item{border:1px solid var(--line);border-radius:13px;background:#fffefa;overflow:hidden}
        .faq-question{width:100%;display:flex;justify-content:space-between;gap:16px;text-align:left;border:0;padding:18px;background:transparent;color:var(--green);cursor:pointer;font-size:13px;font-weight:700}.faq-answer{color:var(--muted);font-size:13px;line-height:1.85;padding:0 18px 18px}
        .cta{background:var(--green);color:white;border-radius:20px;padding:clamp(28px,5vw,52px);display:flex;justify-content:space-between;align-items:center;gap:30px}.cta h2{max-width:650px}.cta p:not(.eyebrow){color:#dce7e1;font-size:13px;line-height:1.8;max-width:600px;margin:14px 0 0}.cta .button{background:#f7f4ec;color:var(--green);border-color:#f7f4ec;white-space:nowrap}
        .note{color:var(--muted);font-size:11px;line-height:1.8;margin-top:22px}
        @media(max-width:760px){.hero{padding:48px 0 40px}.hero-grid,.process,.faq-grid{grid-template-columns:1fr;gap:24px}.section{padding:42px 0}.section-heading{align-items:start;flex-direction:column;gap:12px}.values{grid-template-columns:1fr}.cta{align-items:start;flex-direction:column}h1{letter-spacing:-1.5px}}
      `}</style>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">About Chhotakaar</p>
            <h1>Small-scale models.<br /><span>Big ideas.</span></h1>
            <p className="lead">Chhotakaar creates 3D-printed architectural miniatures inspired by houses, villas and apartment buildings. Our aim is to turn architectural ideas into detailed physical models made to display, gift or present.</p>
            <div className="actions">
              <a className="button primary" href="/#customize">Explore model finishes <span>↗</span></a>
              <a className="button secondary" href="/#contact">Enquire with us <span>→</span></a>
            </div>
          </div>
          <aside className="hero-card"><p className="eyebrow">Our approach</p><strong>Designed around your idea.</strong><p>Start with a model type, share your references and discuss the details that matter—from the overall form to optional display upgrades.</p></aside>
        </div>
      </section>

      <section className="section"><div className="container">
        <div className="section-heading"><div><p className="eyebrow">What we make</p><h2>Architectural miniatures,<br />made personal<span className="gold">.</span></h2></div><p className="section-intro">Explore miniature models for residential architecture and custom concepts, with finish options to help each piece suit its purpose.</p></div>
        <div className="values">
          <article className="value-card"><div className="icon" aria-hidden="true">⌂</div><h3>House &amp; villa models</h3><p>Miniature representations of homes, villas and residential designs for display, gifting or design presentation.</p></article>
          <article className="value-card"><div className="icon" aria-hidden="true">▦</div><h3>Apartment building models</h3><p>Scaled architectural miniatures highlighting building shape, balconies, windows and exterior details.</p></article>
          <article className="value-card"><div className="icon" aria-hidden="true">✳</div><h3>Custom display upgrades</h3><p>Ask about optional lighting, miniature landscaping, acrylic display covers and personalised nameplates.</p></article>
        </div>
      </div></section>

      <section className="section"><div className="container process">
        <div><p className="eyebrow">How it works</p><h2>From your idea<br />to a miniature<span className="gold">.</span></h2><p className="section-intro" style={{marginTop:18}}>Select each step to learn how an enquiry can move forward. Specifications, pricing and timelines are confirmed individually.</p></div>
        <div><div className="step-list">{steps.map((step,index)=><button key={step[0]} className={`step-button ${activeStep===index?"active":""}`} onClick={()=>setActiveStep(index)} aria-expanded={activeStep===index}><span className="step-number">{step[0]}</span><strong>{step[1]}</strong><span style={{marginLeft:"auto"}}>{activeStep===index?"−":"+"}</span></button>)}</div><div className="step-detail" aria-live="polite"><span className="step-number">STEP {steps[activeStep][0]}</span><h3>{steps[activeStep][1]}</h3><p>{steps[activeStep][2]}</p></div></div>
      </div></section>

      <section className="section"><div className="container faq-grid">
        <div><p className="eyebrow">Frequently asked questions</p><h2>Good to know<span className="gold">.</span></h2><p className="section-intro" style={{marginTop:16}}>Helpful details before you enquire about a 3D-printed architectural miniature.</p></div>
        <div className="faq-list">{faqs.map((faq,index)=><article className="faq-item" key={faq[0]}><button className="faq-question" onClick={()=>setOpenFaq(openFaq===index?null:index)} aria-expanded={openFaq===index}><span>{faq[0]}</span><span>{openFaq===index?"−":"+"}</span></button>{openFaq===index&&<div className="faq-answer">{faq[1]}</div>}</article>)}</div>
      </div></section>

      <section className="section"><div className="container">
        <div className="cta"><div><p className="eyebrow">Let's create something</p><h2>Have a building in mind?</h2><p>Share your idea or reference images with Chhotakaar. Tell us what you want to model and which finish options interest you.</p></div><a className="button" href="/#contact">Start an enquiry <span>↗</span></a></div>
        <p className="note">Chhotakaar specialises in 3D-printed architectural miniatures. Model availability, customisation, pricing and production timelines depend on each project's details and are confirmed during enquiry.</p>
      </div></section>
    </main>
  );
}
