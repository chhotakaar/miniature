"use client";

import { useState } from "react";
import Link from "next/link";

const blogPosts = [
  { category:"Apartment Models", date:"2026-10-18", readTime:"5 min read", title:"3D Printed Apartment Models: A Complete Guide", description:"Learn how 3D printed apartment miniature models can help present building designs, explain layouts, and showcase architectural projects.", image:"/images/chhotakaar-only-3d-printed-apartment.png", imageAlt:"3D printed miniature apartment building model by Chhotakaar", slug:"/blog/3d-printed-apartment-models", keywords:"3D printed apartment model, miniature apartment model" },
  { category:"Villa Models", date:"2026-10-18", readTime:"4 min read", title:"Custom Villa Miniature Models for Your Dream Home", description:"Explore how a custom villa miniature can capture your home's architecture, exterior design, landscaping, and distinctive details.", image:"/images/chhotakaar-3d-printed-apartment-with-landscape.png", imageAlt:"Architectural miniature model with landscaping details", slug:"/blog/custom-villa-miniature-models", keywords:"3D printed villa model, custom house miniature" },
  { category:"Lighting & Finishing", date:"2026-10-18", readTime:"4 min read", title:"How Lighting Can Transform an Architectural Miniature", description:"Understand how lighting, finishing, and presentation can make an architectural scale model more engaging and easier to showcase.", image:"/images/chhotakaar-3d-printed-apartment-with-lighting.png", imageAlt:"3D printed apartment miniature model displayed with lighting", slug:"/blog/lighting-architectural-miniature-models", keywords:"illuminated miniature building, architectural model lighting" },
  { category:"Display & Protection", date:"2026-10-18", readTime:"3 min read", title:"Why Use an Acrylic Cover for a Miniature Building Model?", description:"See how an acrylic display cover can help protect a miniature model from dust and accidental contact while displaying it.", image:"/images/chhotakaar-3d-printed-apartment-with-acrylic-covering-box.png", imageAlt:"Architectural miniature apartment model in an acrylic display cover", slug:"/blog/acrylic-cover-for-miniature-models", keywords:"acrylic cover miniature model, display case for architectural model" },
];
const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

export default function BlogArticleExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const query = searchTerm.trim().toLowerCase();
    const matchesSearch = !query || `${post.title} ${post.description} ${post.category} ${post.keywords}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="latest-articles" className="articles-section">
      <div className="blog-container">
        <div className="section-heading"><div><span className="section-kicker">EXPLORE THE JOURNAL</span><h2>Latest articles</h2><p>Helpful reads for anyone interested in architectural miniatures.</p></div>
          <label className="search-box"><span className="sr-only">Search blog articles</span><span aria-hidden="true">⌕</span><input type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search articles..." />{searchTerm && <button type="button" onClick={() => setSearchTerm("")} aria-label="Clear search">×</button>}</label>
        </div>
        <div className="category-filters" aria-label="Filter articles by category">{categories.map((category) => <button key={category} type="button" className={selectedCategory === category ? "filter-chip active" : "filter-chip"} onClick={() => setSelectedCategory(category)} aria-pressed={selectedCategory === category}>{category}</button>)}</div>
        <p className="results-count" aria-live="polite">Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}</p>
        {filteredPosts.length ? <div className="article-grid">{filteredPosts.map((post, index) => <article className="article-card" key={post.slug} style={{ animationDelay:`${index * 70}ms` }}>
          <Link href={post.slug} className="article-image-link" aria-label={`Read ${post.title}`}><img src={post.image} alt={post.imageAlt} loading="lazy" /><span className="image-badge">{post.category}</span><span className="image-arrow" aria-hidden="true">↗</span></Link>
          <div className="article-body"><div className="article-meta"><time dateTime={post.date}>{new Date(post.date + "T12:00:00").toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" })}</time><span aria-hidden="true">•</span><span>{post.readTime}</span></div><h3><Link href={post.slug}>{post.title}</Link></h3><p>{post.description}</p><Link href={post.slug} className="read-link">Read article <span aria-hidden="true">→</span></Link></div>
        </article>)}</div> : <div className="empty-state"><span aria-hidden="true">⌕</span><h3>No articles found</h3><p>Try another keyword or select a different category.</p><button type="button" className="reset-button" onClick={() => {setSearchTerm("");setSelectedCategory("All");}}>Clear filters</button></div>}
      </div>
      <style jsx>{`
        .articles-section{padding:clamp(54px,7vw,88px) 0;background:#fbfaf6}.blog-container{width:min(1160px,calc(100% - 40px));margin-inline:auto}
        .section-heading{display:flex;justify-content:space-between;align-items:end;gap:25px;margin-bottom:26px}.section-kicker{font-size:11px;font-weight:800;letter-spacing:.18em;color:#99722f}
        h2{margin:8px 0 6px;color:#1c342b;font-size:clamp(32px,4vw,45px);line-height:1.12;letter-spacing:-.04em}.section-heading p{margin:0;color:#69766f}
        .search-box{display:flex;align-items:center;gap:9px;width:min(100%,300px);padding:0 13px;min-height:46px;border:1px solid #e0e4dc;border-radius:999px;background:white;color:#627068;transition:border .2s,box-shadow .2s}.search-box:focus-within{border-color:#b58c42;box-shadow:0 0 0 4px rgba(216,173,89,.15)}.search-box>span{font-size:24px;line-height:1}.search-box input{width:100%;min-width:0;border:0;outline:0;background:transparent;color:#1c342b;font:inherit;font-size:13px}.search-box button{border:0;background:transparent;color:#627068;font-size:21px;cursor:pointer}
        .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.category-filters{display:flex;flex-wrap:wrap;gap:9px;margin:22px 0 10px}
        .filter-chip{padding:9px 14px;border:1px solid #dfe4dc;border-radius:999px;background:#fff;color:#40564b;cursor:pointer;font:inherit;font-size:12px;font-weight:700;transition:all .2s}.filter-chip:hover{border-color:#b58c42;transform:translateY(-1px)}.filter-chip.active{background:#173f35;color:#fffdf7;border-color:#173f35;box-shadow:0 5px 14px rgba(23,63,53,.12)}.results-count{margin:12px 0 18px;color:#7a857d;font-size:12px}
        .article-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.article-card{min-width:0;overflow:hidden;border:1px solid #e8e8df;border-radius:20px;background:#fff;box-shadow:0 8px 28px rgba(27,48,37,.045);animation:card-in .45s both;transition:transform .25s,box-shadow .25s,border-color .25s}.article-card:hover{transform:translateY(-6px);border-color:#d7c49c;box-shadow:0 18px 40px rgba(27,48,37,.10)}
        .article-image-link{display:block;position:relative;aspect-ratio:16/10;overflow:hidden;background:#e8e8df}.article-image-link img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .55s cubic-bezier(.2,.7,.2,1)}.article-card:hover .article-image-link img{transform:scale(1.055)}.image-badge{position:absolute;top:13px;left:13px;padding:7px 10px;border:1px solid rgba(255,255,255,.45);border-radius:999px;color:#fff;background:rgba(16,46,39,.88);backdrop-filter:blur(8px);font-size:10px;font-weight:750}.image-arrow{position:absolute;right:13px;bottom:13px;display:grid;place-items:center;width:35px;height:35px;border-radius:50%;background:#d8ad59;color:#173f35;font-size:18px;transition:transform .2s}.article-card:hover .image-arrow{transform:rotate(45deg)}
        .article-body{padding:20px}.article-meta{display:flex;align-items:center;gap:8px;color:#7a857d;font-size:11px}h3{margin:12px 0 9px;color:#1c342b;font-size:19px;line-height:1.35;letter-spacing:-.02em}h3 a{color:inherit;text-decoration:none}h3 a:hover{color:#8b6729}.article-body p{min-height:76px;margin:0;color:#68766f;font-size:13px;line-height:1.7}.read-link{display:inline-flex;gap:10px;align-items:center;margin-top:17px;color:#173f35;font-size:13px;font-weight:800;text-decoration:none}.read-link span{transition:transform .2s}.read-link:hover span{transform:translateX(4px)}
        .empty-state{padding:55px 20px;border:1px dashed #d4dacf;border-radius:20px;text-align:center;color:#65736b}.empty-state>span{font-size:35px}.empty-state h3{margin:8px 0}.empty-state p{margin:0 0 18px}.reset-button{border:0;border-radius:999px;padding:10px 15px;background:#173f35;color:#fff;cursor:pointer;font:inherit;font-weight:700}
        @keyframes card-in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@media(max-width:900px){.article-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.section-heading{align-items:flex-start;flex-direction:column}.search-box{width:100%;max-width:420px}}@media(max-width:580px){.blog-container{width:min(100% - 30px,1160px)}.article-grid{grid-template-columns:minmax(0,1fr);gap:17px}.article-body{padding:18px}.article-body p{min-height:0}}@media(prefers-reduced-motion:reduce){.article-card,.article-image-link img,.image-arrow,.filter-chip,.read-link span{animation:none;transition:none}.article-card:hover,.filter-chip:hover{transform:none}}
      `}</style>
    </section>
  );
}
