"use client";

import Link from "next/link";
import BlogArticleExplorer from "./BlogArticleExplorer";


export default function BlogPage() {
  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="blog-container hero-inner">
          <span className="eyebrow"><span className="eyebrow-dot" /> THE CHHOTAKAAR JOURNAL</span>
          <h1>Ideas, Guides &amp; Inspiration for <span>Architectural Miniature Models</span></h1>
          <p>Discover 3D printed apartment models, custom villa miniatures, architectural presentation ideas, and tips to display your model beautifully.</p>
          <div className="hero-actions">
            <a href="#latest-articles" className="button button-gold">Explore articles <span aria-hidden="true">↘</span></a>
            <Link href="/customize-your-model" className="button button-outline">Create your model <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-proof"><span><b>01</b> Design inspiration</span><span><b>02</b> Model guides</span><span><b>03</b> Display ideas</span></div>
        </div>
      </section>
      <BlogArticleExplorer />
      <section className="blog-cta">
        <div className="blog-container cta-inner">
          <div><span className="eyebrow eyebrow-light">YOUR IDEA, IN MINIATURE</span><h2>Have a building design in mind?</h2><p>Let’s explore how it could become a miniature architectural model.</p></div>
          <Link href="/customize-your-model" className="button button-dark">Start a custom model <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <style jsx>{`
        .blog-page { --gold:#d8ad59; color:#1c2d27; background:#fbfaf6; overflow:hidden; line-height:1.6; }
        .blog-page * { box-sizing:border-box; }
        .blog-container { width:min(1160px,calc(100% - 40px)); margin-inline:auto; }
        .blog-hero { position:relative; isolation:isolate; overflow:hidden; background:radial-gradient(circle at 82% 20%,rgba(216,173,89,.18),transparent 27%),linear-gradient(130deg,#102e27 0%,#173f35 58%,#245347 100%); color:#fffdf7; padding:clamp(70px,9vw,118px) 0 56px; }
        .hero-inner { position:relative; z-index:1; max-width:1160px; }
        .hero-glow { position:absolute; border:1px solid rgba(255,255,255,.09); border-radius:50%; z-index:-1; }
        .hero-glow-one { width:520px;height:520px;right:-90px;top:-180px;box-shadow:0 0 0 55px rgba(255,255,255,.018),0 0 0 110px rgba(255,255,255,.015); }
        .hero-glow-two { width:230px;height:230px;right:16%;bottom:-160px;border-color:rgba(216,173,89,.22); }
        .eyebrow { display:inline-flex;align-items:center;gap:10px;color:var(--gold);font-size:11px;letter-spacing:.19em;font-weight:800; }
        .eyebrow-dot { width:7px;height:7px;border-radius:50%;background:var(--gold);box-shadow:0 0 0 5px rgba(216,173,89,.13); }
        h1 { max-width:900px;margin:22px 0 18px;font-size:clamp(38px,6vw,70px);line-height:1.04;letter-spacing:-.045em;font-weight:750; }
        h1 span { color:var(--gold); }
        .blog-hero p { max-width:680px;margin:0;color:rgba(255,253,247,.78);font-size:clamp(16px,2vw,19px); }
        .hero-actions { display:flex;gap:12px;flex-wrap:wrap;margin-top:30px; }
        .button { min-height:48px;display:inline-flex;align-items:center;justify-content:center;gap:14px;padding:12px 18px;border-radius:999px;text-decoration:none;font-size:14px;font-weight:750;transition:transform .2s ease,background .2s ease,box-shadow .2s ease; }
        .button:hover { transform:translateY(-3px); }
        .button-gold { color:#17372e;background:var(--gold);box-shadow:0 10px 25px rgba(0,0,0,.12); }
        .button-outline { color:#fffdf7;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.04); }
        .button-outline:hover { background:rgba(255,255,255,.1); }
        .hero-proof { display:flex;flex-wrap:wrap;gap:22px;margin-top:46px;padding-top:22px;border-top:1px solid rgba(255,255,255,.15);color:rgba(255,253,247,.68);font-size:12px; }
        .hero-proof b { color:var(--gold);margin-right:7px;letter-spacing:.08em; }
        .blog-cta { background:#e9e2d1;padding:48px 0; }
        .cta-inner { display:flex;justify-content:space-between;align-items:center;gap:28px; }
        .eyebrow-light { color:#7a5b25; }
        h2 { margin:10px 0 8px;font-size:clamp(27px,4vw,40px);letter-spacing:-.035em;line-height:1.15; }
        .blog-cta p { margin:0;color:#5c6a61; }
        .button-dark { flex-shrink:0;background:#173f35;color:#fffdf7; }
        @media(max-width:640px) { .blog-container{width:min(100% - 30px,1160px)}.blog-hero{padding-top:66px}.hero-proof{gap:12px 18px;margin-top:34px}.cta-inner{align-items:flex-start;flex-direction:column} }
        @media(prefers-reduced-motion:reduce) { .button{transition:none}.button:hover{transform:none} }
      `}</style>
    </main>
  );
}
