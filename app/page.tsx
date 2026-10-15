"use client";

import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleHelp,
  Clock3, Instagram, Mail, Menu, MessageCircle, Ruler, ShieldCheck, Sparkles,
  UserRound, X, Youtube, House, Building2, Landmark, DraftingCompass, Upload,
  Palette, BadgeIndianRupee
} from "lucide-react";

type Model = {
  name: string; category: string; size: string; finish: string; price: string;
  tag?: string; image: string; tone: string;
};

const models: Model[] = [
  { name: "Modern House", category: "Houses", size: "10–15 cm", finish: "Single colour", price: "₹799", tag: "Best seller", image: "house", tone: "sand" },
  { name: "Apartment Building", category: "Apartments", size: "15–25 cm", finish: "Single colour", price: "₹2,499", tag: "Popular", image: "apartments", tone: "blue" },
  { name: "Taj Mahal", category: "Heritage", size: "15–25 cm", finish: "Detailed print", price: "₹4,999", image: "heritage", tone: "peach" },
  { name: "Luxury Villa", category: "Houses", size: "15–25 cm", finish: "Multi colour", price: "₹3,499", image: "villa", tone: "lilac" },
];

const categories = [
  { name: "Houses", sub: "Custom home models", icon: House, image: "house", tone: "sand" },
  { name: "Apartments", sub: "Residential buildings", icon: Building2, image: "apartments", tone: "blue" },
  { name: "Heritage", sub: "Monuments & landmarks", icon: Landmark, image: "heritage", tone: "peach" },
  { name: "Custom Models", sub: "Your design, your model", icon: DraftingCompass, image: "villa", tone: "lilac" },
];

function ModelArt({ kind, className = "" }: { kind: string; className?: string }) {
  // CSS-built illustration placeholder keeps the project self-contained; replace with product photography in /public/models.
  return <div className={`model-art art-${kind} ${className}`} aria-label={`${kind} architectural miniature illustration`} role="img">
    <div className="art-glow" />
    <div className="art-ground" />
    <div className="art-building">
      <div className="roof" />
      <div className="floor floor-top"><i /><i /><i /><i /></div>
      <div className="floor floor-bottom"><i /><i /><i /><i /><i /></div>
      <div className="front-door" />
    </div>
    <div className="tree tree-one" /><div className="tree tree-two" /><div className="tree tree-three" />
    <div className="tiny-car" />
  </div>;
}

function EnquiryModal({ initialModel, onClose }: { initialModel: string; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [model, setModel] = useState(initialModel);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [size, setSize] = useState("10–15 cm");
  const [design, setDesign] = useState("Photo / image");
  const [finish, setFinish] = useState("Single colour");
  const [budget, setBudget] = useState("₹1,000–₹3,000");
  const [details, setDetails] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = { name, phone, email, model, size, design, finish, budget, details, createdAt: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("chhotakaar-enquiries") || "[]");
    localStorage.setItem("chhotakaar-enquiries", JSON.stringify([...existing, payload]));
    setSubmitted(true);
  }

  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button className="icon-button modal-close" onClick={onClose} aria-label="Close enquiry form"><X size={19} /></button>
      {submitted ? <div className="success-state">
        <span className="success-icon"><Check size={26} /></span>
        <p className="eyebrow">ENQUIRY SAVED ON THIS DEVICE</p>
        <h2 id="modal-title">Thanks, {name.split(" ")[0]}!</h2>
        <p>Your details have been saved in this browser for this demo. To receive real customer enquiries, connect a backend or form service before launch.</p>
        <button className="button button-dark" onClick={onClose}>Back to Chhotakaar <ArrowRight size={16} /></button>
      </div> : <>
        <p className="eyebrow">LET’S MAKE IT MINIATURE</p>
        <h2 id="modal-title">Tell us what you imagine.</h2>
        <p className="modal-intro">Share a few details. We’ll help you figure out the right size, finish and estimate.</p>
        <form onSubmit={submit} className="enquiry-form">
          <div className="form-grid">
            <label>Full name *<input required value={name} onChange={e => setName(e.target.value)} placeholder="Your name" /></label>
            <label>WhatsApp / mobile *<input required value={phone} onChange={e => setPhone(e.target.value)} pattern="[0-9+() -]{10,16}" placeholder="10-digit number" /></label>
            <label className="span-two">Email address <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com (optional)" /></label>
            <label>Model type *<select value={model} onChange={e => setModel(e.target.value)}><option>Modern House</option><option>Apartment / Building</option><option>Commercial Building</option><option>Heritage / Monument</option><option>Custom Models</option></select></label>
            <label>Approx. size<select value={size} onChange={e => setSize(e.target.value)}><option>Below 10 cm</option><option>10–15 cm</option><option>15–30 cm</option><option>Above 30 cm</option><option>Not sure yet</option></select></label>
            <label>Design reference<select value={design} onChange={e => setDesign(e.target.value)}><option>Photo / image</option><option>3D file (STL / OBJ)</option><option>Floor plan / drawing</option><option>Need design assistance</option></select></label>
            <label>Preferred finish<select value={finish} onChange={e => setFinish(e.target.value)}><option>Single colour</option><option>Multi-colour</option><option>Painted / detailed</option><option>Need recommendation</option></select></label>
            <label className="span-two">Estimated budget<select value={budget} onChange={e => setBudget(e.target.value)}><option>Below ₹1,000</option><option>₹1,000–₹3,000</option><option>₹3,000–₹5,000</option><option>Above ₹5,000</option><option>Need a quotation first</option></select></label>
            <label className="span-two">Tell us a little more<textarea rows={3} value={details} onChange={e => setDetails(e.target.value)} placeholder="Dimensions, quantity, deadline or anything else…" /></label>
          </div>
          <p className="form-note"><ShieldCheck size={14} /> Your details are only for this enquiry. File upload and real email delivery can be connected before launch.</p>
          <button type="submit" className="button button-primary form-submit">Send my enquiry <ArrowRight size={17} /></button>
        </form>
      </>}
    </div>
  </div>;
}

export default function Home() {
  const [modal, setModal] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleModels = activeCategory === "All" || activeCategory === "Custom Models"
    ? models
    : models.filter(m => m.category === activeCategory);

  return <main>
    <header className="site-header">
      <a className="brand" href="#" aria-label="Chhotakaar home">
        <span className="brand-mark"><House size={27} strokeWidth={2.2} /></span>
        <span><strong>CHHOTAKAAR</strong><small>Architectural Miniatures · 3D Printing</small></span>
      </a>
      <button className="mobile-menu icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        <a className="active" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#models" onClick={() => setMenuOpen(false)}>Models</a>
        <a href="#process" onClick={() => setMenuOpen(false)}>How it works</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <div className="header-actions">
        <button className="icon-button search-button" aria-label="Search models" onClick={() => document.getElementById("models")?.scrollIntoView({ behavior: "smooth" })}><CircleHelp size={19} /></button>
        <button className="login-button" onClick={() => setModal("Customer Login")}><UserRound size={17} /><span>Customer Login</span><ArrowUpRight size={14} /></button>
      </div>
    </header>

    <section className="hero" id="home">
      <div className="hero-text">
        <p className="eyebrow hero-eyebrow"><span /> ARCHITECTURAL MINIATURES</p>
        <h1>Bade Sapne.<br /><em>Chhota Akaar.</em></h1>
        <p className="hero-copy">Apne dream house aur architectural designs ko ek beautiful miniature model mein badlein.</p>
        <div className="hero-actions">
          <a href="#models" className="button button-primary">Explore our models <ArrowRight size={17} /></a>
          <a href="#process" className="button button-outline"><span className="play-icon">▶</span> How it works</a>
        </div>
        <div className="hero-proof"><div className="proof-avatars"><span>3D</span><span>✳</span><span>⌂</span></div><p><strong>Made with detail.</strong><br />Designed around your vision.</p></div>
      </div>
      <div className="hero-visual">
        <img
          src="/images/chhotakaar-Architectural-miniature-model-service.png"
          alt="Custom 3D printed miniature house by Chhotakaar"
          className="hero-art"
        />
        <div className="hero-note"><span className="note-line" /><span>Real designs.<br /><em>Miniature magic.</em></span><ArrowDownRight size={28} /></div>
        <div className="hero-stamp"><Sparkles size={14} /> MADE TO INSPIRE</div>
      </div>
      <div className="hero-bottomline"><span>01 / 04</span><span className="bottomline-rule" /><span>SMALL SCALE. BIG FEELING.</span></div>
    </section>

    <section className="section categories-section" id="about">
      <div className="section-heading">
        <div><p className="eyebrow">OUR CATEGORIES</p><h2>Explore by model type<span>.</span></h2></div>
        <p className="section-aside">From cozy homes to iconic landmarks,<br />we bring architecture to life — in miniature.</p>
      </div>
      <div className="category-grid">
        {categories.map(({ name, sub, icon: Icon, image, tone }, i) => <button key={name} className={`category-card tone-${tone}`} onClick={() => { setActiveCategory(name); document.getElementById("models")?.scrollIntoView({ behavior: "smooth" }); }}>
          <div className="category-image"><ModelArt kind={image} /><span className="category-number">0{i + 1}</span></div>
          <div className="category-info"><span className="category-icon"><Icon size={19} /></span><div><h3>{name}</h3><p>{sub}</p></div><span className="round-arrow"><ArrowUpRight size={17} /></span></div>
        </button>)}
      </div>
    </section>

    <section className="section featured-section" id="models">
      <div className="section-heading">
        <div><p className="eyebrow">THE MINIATURE EDIT</p><h2>Popular miniature models<span>.</span></h2></div>
        <div className="model-filters" aria-label="Filter models">
          {["All", "Houses", "Apartments", "Heritage"].map(f => <button key={f} className={activeCategory === f ? "filter-active" : ""} onClick={() => setActiveCategory(f)}>{f}</button>)}
        </div>
      </div>
      <div className="product-grid">
        {visibleModels.map(m => <article className="product-card" key={m.name}>
          <button className="product-image" onClick={() => setModal(m.name)} aria-label={`Enquire about ${m.name}`}>
            <ModelArt kind={m.image} />
            {m.tag && <span className="product-tag">{m.tag}</span>}
            <span className="image-quick"><ArrowUpRight size={18} /></span>
          </button>
          <div className="product-details">
            <div className="product-title-row"><h3>{m.name}</h3><span className="product-price">{m.price}</span></div>
            <p className="product-meta"><span>{m.size}</span><i /> <span>{m.finish}</span></p>
            <button className="interest-button" onClick={() => setModal(m.name)}>I’m interested <ArrowRight size={15} /></button>
          </div>
        </article>)}
      </div>
      {visibleModels.length === 0 && <div className="empty-filter">New models are coming soon. <button onClick={() => setModal("Custom Models")}>Request a custom model <ArrowRight size={15} /></button></div>}
      <div className="view-all-row"><span>Thoughtfully made, one little world at a time.</span><button onClick={() => { setActiveCategory("All"); }}>View all models <ArrowRight size={16} /></button></div>
    </section>

    <section className="benefits-strip" id="process">
      <div className="benefits-inner">
        <div className="benefit"><span className="benefit-icon"><ShieldCheck /></span><div><h3>Made with care</h3><p>Precision 3D printing<br />with thoughtful detailing.</p></div></div>
        <div className="benefit"><span className="benefit-icon"><Clock3 /></span><div><h3>Clear timelines</h3><p>Updates from enquiry<br />to delivery.</p></div></div>
        <div className="benefit"><span className="benefit-icon"><DraftingCompass /></span><div><h3>Your design, your way</h3><p>Share your idea. We’ll<br />help shape the details.</p></div></div>
        <div className="benefit"><span className="benefit-icon"><MessageCircle /></span><div><h3>Human support</h3><p>Friendly guidance at<br />every step.</p></div></div>
      </div>
    </section>

    <section className="custom-section" id="contact">
      <div className="custom-illustration"><ModelArt kind="blueprint" /><span className="blueprint-label">YOUR IDEA, IN MINIATURE</span></div>
      <div className="custom-copy"><p className="eyebrow">CUSTOM MODELS</p><h2>Have a design in mind?</h2><p>From your first sketch to a tiny showpiece, let’s make something personal.</p><button className="button button-primary" onClick={() => setModal("Custom Models")}>Fill enquiry form <ArrowRight size={16} /></button></div>
      <div className="custom-steps">
        <div><span><Upload size={17} /></span><strong>Share a reference</strong><small>Photo / 3D file / drawing</small></div>
        <div><span><Ruler size={17} /></span><strong>Choose a size</strong><small>10 cm – 30 cm+</small></div>
        <div><span><Palette size={17} /></span><strong>Pick a finish</strong><small>Single / multi / painted</small></div>
        <div><span><BadgeIndianRupee size={17} /></span><strong>Get a quote</strong><small>Clear, custom estimate</small></div>
      </div>
    </section>

    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><House size={25} /></span><span><strong>CHHOTAKAAR</strong><small>Architectural Miniatures · 3D Printing</small></span></a>
        <div className="footer-nav"><a href="#home">Home</a><a href="#models">Models</a><a href="#process">How it works</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17} /></a><a href="https://wa.me/" aria-label="WhatsApp"><MessageCircle size={17} /></a><a href="https://youtube.com" aria-label="YouTube"><Youtube size={17} /></a><button className="footer-login" onClick={() => setModal("Customer Login")}><UserRound size={14} /> Login</button></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Chhotakaar. All rights reserved.</span><span><i /> Bade Sapne. Chhota Akaar.</span></div>
    </footer>
    {modal && <EnquiryModal initialModel={modal === "Customer Login" ? "Custom Models" : modal} onClose={() => setModal(null)} />}
  </main>;
}
