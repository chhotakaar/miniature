"use client";

import { useState } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, House, Menu, X,
  Sparkles, MessageCircle, ShieldCheck, Ruler, Palette
} from "lucide-react";

const models = [
  {
    number: "01",
    name: "Basic Apartment Model",
    tagline: "Simple. Detailed. Timeless.",
    image: "/images/chhotakaar-only-3d-printed-apartment.png",
    description: "A clean, detailed miniature of your apartment design.",
    features: ["Detailed apartment facade", "Balconies and windows", "3D-printed structure", "Simple display base"],
  },
  {
    number: "02",
    name: "Apartment with Lighting",
    tagline: "A little light. A big difference.",
    image: "/images/chhotakaar-3d-printed-apartment-with-lighting.png",
    description: "Add warm lighting to make your miniature stand out.",
    features: ["Everything in the basic model", "Warm LED lighting", "Illuminated windows", "Striking display look"],
  },
  {
    number: "03",
    name: "Apartment with Landscape",
    tagline: "Bring the outdoors in.",
    image: "/images/chhotakaar-3d-printed-apartment-with-landscape.png",
    description: "Surround your building with miniature greenery and landscape details.",
    features: ["Apartment miniature", "Miniature greenery", "Landscape details", "Decorative ground base"],
  },
  {
    number: "04",
    name: "Apartment with Acrylic Cover",
    tagline: "Made to display. Made to protect.",
    image: "/images/chhotakaar-3d-printed-apartment-with-acrylic-covering-box.png",
    description: "Showcase your miniature inside a transparent acrylic cover.",
    features: ["Architectural miniature", "Transparent acrylic cover", "Helps keep dust away", "Clean display finish"],
  },
];

export default function CustomizeYourModelPage() {
  const [active, setActive] = useState("01");
  const [menuOpen, setMenuOpen] = useState(false);
  const selected = models.find((model) => model.number === active) ?? models[0];

  return (
    <main className="custom-page">
      <style jsx>{`
        .custom-page {
          --ink: #242424;
          --muted: #716b62;
          --paper: #f7f4ee;
          --cream: #eee7dc;
          --line: #ded5c8;
          --accent: #a77b45;
          min-height: 100vh;
          background: var(--paper);
          color: var(--ink);
          font-family: inherit;
        }
        * { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        .site-header {
          width: 100%; min-height: 86px; padding: 18px clamp(22px, 5vw, 76px);
          display: flex; align-items: center; justify-content: space-between; gap: 28px;
          background: rgba(247,244,238,.96); border-bottom: 1px solid rgba(36,36,36,.08);
        }
        .brand { display: inline-flex; align-items: center; gap: 11px; flex-shrink: 0; }
        .brand-mark { width: 43px; height: 43px; display: grid; place-items: center; border: 1px solid #d7c6ad; border-radius: 50%; color: var(--accent); }
        .brand strong { display: block; font-size: 14px; letter-spacing: 2px; font-weight: 800; }
        .brand small { display: block; margin-top: 4px; color: var(--muted); font-size: 10px; letter-spacing: .25px; }
        .nav-links { display: flex; align-items: center; justify-content: center; gap: clamp(15px, 2.2vw, 30px); }
        .nav-links a { font-size: 12px; color: #4f4a43; transition: color .2s; }
        .nav-links a:hover, .nav-links a.active { color: var(--accent); }
        .header-cta { display: inline-flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 3px; background: var(--ink); color: #fff; font-size: 12px; white-space: nowrap; }
        .mobile-menu { display: none; border: 0; background: transparent; color: var(--ink); }
        .hero { display: grid; grid-template-columns: 1.05fr .95fr; gap: 6%; align-items: center; padding: clamp(45px, 7vw, 95px) clamp(22px, 6vw, 90px) 54px; }
        .eyebrow { display: flex; align-items: center; gap: 9px; color: var(--accent); font-size: 10px; font-weight: 800; letter-spacing: 2px; margin: 0 0 18px; }
        .eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
        h1 { margin: 0; font-size: clamp(42px, 6.3vw, 82px); line-height: .99; letter-spacing: -3px; font-weight: 750; }
        h1 em { color: var(--accent); font-style: normal; }
        .hero-copy { max-width: 540px; color: var(--muted); font-size: 15px; line-height: 1.9; margin: 24px 0 27px; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
        .button { min-height: 46px; padding: 0 17px; display: inline-flex; align-items: center; justify-content: center; gap: 12px; font-size: 12px; border-radius: 3px; transition: .2s; }
        .button-primary { color: #fff; background: var(--ink); border: 1px solid var(--ink); }
        .button-primary:hover, .header-cta:hover { background: #574632; border-color: #574632; }
        .button-outline { border: 1px solid #cfc4b5; background: transparent; }
        .button-outline:hover { border-color: var(--accent); color: var(--accent); }
        .hero-proof { display: flex; align-items: center; gap: 14px; margin-top: 34px; }
        .proof-icon { display: grid; place-items: center; width: 39px; height: 39px; border: 1px solid #d7c6ad; border-radius: 50%; color: var(--accent); }
        .hero-proof p { margin: 0; color: var(--muted); font-size: 11px; line-height: 1.7; }
        .hero-proof strong { color: var(--ink); font-size: 12px; }
        .hero-visual { position: relative; min-height: 360px; background: var(--cream); border-radius: 2px; overflow: hidden; }
        .hero-visual img { width: 100%; height: 100%; min-height: 360px; display: block; object-fit: cover; }
        .image-label { position: absolute; left: 18px; bottom: 18px; background: rgba(247,244,238,.94); padding: 12px 15px; font-size: 11px; letter-spacing: .4px; }
        .section { padding: 28px clamp(22px, 6vw, 90px) 80px; }
        .section-head { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 24px; }
        .section-head .eyebrow { margin-bottom: 12px; }
        h2 { margin: 0; font-size: clamp(29px, 3.6vw, 44px); letter-spacing: -1.2px; line-height: 1.1; }
        h2 span { color: var(--accent); }
        .section-aside { margin: 0; max-width: 330px; color: var(--muted); font-size: 12px; line-height: 1.8; }
        .scroll-note { color: var(--muted); font-size: 11px; white-space: nowrap; }
        .model-track { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(265px, 1fr); gap: 18px; overflow-x: auto; padding: 4px 2px 18px; scroll-snap-type: x mandatory; scrollbar-color: #cbb99f transparent; scrollbar-width: thin; }
        .model-card { background: #fbfaf7; border: 1px solid var(--line); min-width: 0; scroll-snap-align: start; transition: border-color .2s, transform .2s; }
        .model-card:hover, .model-card.selected { border-color: var(--accent); transform: translateY(-3px); }
        .model-image { height: 245px; position: relative; background: var(--cream); overflow: hidden; }
        .model-image img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .35s; }
        .model-card:hover .model-image img { transform: scale(1.03); }
        .model-number { position: absolute; top: 13px; left: 13px; padding: 7px 9px; background: rgba(247,244,238,.94); font-size: 10px; letter-spacing: 1px; }
        .model-body { padding: 21px 20px 20px; }
        .model-tagline { color: var(--accent); font-size: 10px; letter-spacing: .7px; margin: 0 0 9px; }
        h3 { margin: 0; font-size: 20px; line-height: 1.3; letter-spacing: -.35px; }
        .model-description { min-height: 58px; margin: 12px 0 15px; color: var(--muted); font-size: 12px; line-height: 1.8; }
        .feature-label { font-size: 10px; font-weight: 800; letter-spacing: 1px; margin: 18px 0 10px; text-transform: uppercase; }
        .features { list-style: none; padding: 0; margin: 0 0 22px; }
        .features li { display: flex; align-items: start; gap: 9px; margin: 8px 0; color: #5e5952; font-size: 12px; line-height: 1.6; }
        .features li :global(svg) { flex-shrink: 0; color: var(--accent); margin-top: 2px; }
        .card-link { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 14px 15px; color: white; background: var(--ink); font-size: 11px; transition: background .2s; }
        .card-link:hover { background: #574632; }
        .selected-panel { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 25px 28px; background: #eee7dc; margin-top: 20px; }
        .selected-panel .eyebrow { margin-bottom: 9px; }
        .selected-panel h3 { font-size: 22px; }
        .selected-panel p:last-child { color: var(--muted); font-size: 12px; line-height: 1.8; margin: 8px 0 0; }
        .selected-panel .button { flex-shrink: 0; }
        .custom-strip { margin: 0 clamp(22px, 6vw, 90px) 70px; padding: 30px 32px; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 22px; background: #eee7dc; }
        .strip-icon { width: 48px; height: 48px; display: grid; place-items: center; color: var(--accent); border: 1px solid #d2c0a5; border-radius: 50%; }
        .custom-strip h2 { font-size: 25px; }
        .custom-strip p { margin: 8px 0 0; color: var(--muted); font-size: 12px; line-height: 1.7; }
        .site-footer { padding: 28px clamp(22px, 6vw, 90px) 20px; background: #242424; color: #f7f4ee; }
        .footer-main { display: flex; justify-content: space-between; align-items: center; gap: 25px; padding-bottom: 25px; }
        .footer-brand .brand-mark { border-color: #5b554a; }
        .footer-brand small { color: #b8b0a3; }
        .footer-nav { display: flex; flex-wrap: wrap; gap: 20px; }
        .footer-nav a { color: #d2ccc2; font-size: 11px; }
        .footer-nav a:hover { color: #d3ad79; }
        .footer-bottom { display: flex; justify-content: space-between; gap: 15px; padding-top: 17px; border-top: 1px solid #4a4843; color: #b8b0a3; font-size: 10px; }
        @media (min-width: 1200px) { .model-track { grid-auto-columns: calc((100% - 54px) / 4); } }
        @media (max-width: 900px) {
          .site-header { flex-wrap: wrap; }
          .mobile-menu { display: block; margin-left: auto; }
          .header-cta { display: none; }
          .nav-links { display: none; width: 100%; flex-direction: column; align-items: stretch; gap: 0; padding: 8px 0; }
          .nav-links.nav-open { display: flex; }
          .nav-links a { padding: 12px 0; border-top: 1px solid var(--line); }
          .hero { grid-template-columns: 1fr; }
          .hero-visual { min-height: 300px; }
          .hero-visual img { min-height: 300px; max-height: 470px; }
          .section-head { align-items: start; flex-direction: column; }
          .custom-strip { grid-template-columns: auto 1fr; }
          .custom-strip .button { grid-column: 1 / -1; justify-self: start; }
          .footer-main { align-items: start; flex-direction: column; }
        }
        @media (max-width: 560px) {
          .site-header { padding: 15px 20px; }
          .brand small { font-size: 9px; }
          .hero { padding: 44px 20px 40px; }
          h1 { letter-spacing: -1.8px; }
          .hero-visual, .hero-visual img { min-height: 260px; }
          .section { padding: 24px 20px 55px; }
          .model-track { grid-auto-columns: minmax(78vw, 300px); gap: 13px; }
          .model-image { height: 225px; }
          .selected-panel { align-items: start; flex-direction: column; padding: 22px; }
          .custom-strip { margin: 0 20px 50px; padding: 23px; }
          .footer-nav { gap: 13px 18px; }
          .footer-bottom { flex-direction: column; }
        }
      `}</style>

      <header className="site-header">
        <a className="brand" href="/" aria-label="Chhotakaar home">
          <span className="brand-mark"><House size={25} strokeWidth={2.1} /></span>
          <span><strong>CHHOTAKAAR</strong><small>Architectural Miniatures · 3D Printing</small></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="/">Home</a>
          <a href="/#models">Models</a>
          <a className="active" href="/customize-your-model">Customize Your Model</a>
          <a href="/#process">How it works</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="header-cta" href="/#contact">Let’s talk <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> YOUR IDEA, IN MINIATURE</p>
          <h1>Customize<br /><em>Your Model.</em></h1>
          <p className="hero-copy">Apne apartment miniature ko apne style mein banayein. Basic 3D printing se shuru karein, phir lighting, landscape aur acrylic cover jaise options explore karein.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#options">Explore options <ArrowRight size={16} /></a>
            <a className="button button-outline" href="/#contact">Ask for a quote <MessageCircle size={15} /></a>
          </div>
          <div className="hero-proof"><span className="proof-icon"><Sparkles size={18} /></span><p><strong>Made with detail.</strong><br />Designed around your vision.</p></div>
        </div>
        <div className="hero-visual">
          <img src={selected.image} alt={selected.name} />
          <div className="image-label">CHHOTAKAAR · ARCHITECTURAL MINIATURES</div>
        </div>
      </section>

      <section className="section" id="options">
        <div className="section-head">
          <div><p className="eyebrow">THE MINIATURE EDIT</p><h2>Choose your finish<span>.</span></h2></div>
          <p className="section-aside">Har option ek hi apartment model ko aur personal banane ke liye hai. Cards ko horizontally scroll karke details dekhein.</p>
        </div>
        <div className="model-track">
          {models.map((model) => (
            <article key={model.number} className={`model-card ${active === model.number ? "selected" : ""}`} onClick={() => setActive(model.number)}>
              <div className="model-image">
                <img src={model.image} alt={`${model.name} - Chhotakaar`} loading={model.number === "01" ? "eager" : "lazy"} />
                <span className="model-number">{model.number} / 04</span>
              </div>
              <div className="model-body">
                <p className="model-tagline">{model.tagline}</p>
                <h3>{model.name}</h3>
                <p className="model-description">{model.description}</p>
                <p className="feature-label">What’s included</p>
                <ul className="features">{model.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
                <a className="card-link" href={`/#contact`} onClick={(event) => event.stopPropagation()}>Enquire about this model <ArrowUpRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="selected-panel">
          <div><p className="eyebrow">CURRENTLY EXPLORING</p><h3>{selected.name}</h3><p>{selected.description}</p></div>
          <a className="button button-primary" href="/#contact">Discuss your model <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="custom-strip">
        <span className="strip-icon"><ShieldCheck size={23} /></span>
        <div><h2>Have a custom design in mind?</h2><p>Share your reference, preferred size and finish. We’ll help you plan the right miniature.</p></div>
        <a className="button button-primary" href="/#contact">Start an enquiry <ArrowRight size={16} /></a>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="/"><span className="brand-mark"><House size={24} /></span><span><strong>CHHOTAKAAR</strong><small>Architectural Miniatures · 3D Printing</small></span></a>
          <nav className="footer-nav"><a href="/">Home</a><a href="/#models">Models</a><a href="/customize-your-model">Customize Your Model</a><a href="/#process">How it works</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Chhotakaar. All rights reserved.</span><span>Bade Sapne. Chhota Akaar.</span></div>
      </footer>
    </main>
  );
}
