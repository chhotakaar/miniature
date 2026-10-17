"use client";

import { useEffect, useState } from "react";
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
  { name: "Modern House", category: "Houses", size: "10–15 cm", finish: "Single colour", price: "₹799", tag: "Best seller", image: "chhotakaar-Custom-3D-model-printing-for-architecture-students", tone: "sand" },
  { name: "Apartment Building", category: "Apartments", size: "15–25 cm", finish: "Single colour", price: "₹2,499", tag: "Popular", image: "chhotakaar-Get-3D-printed-villa-building-replica", tone: "blue" },
  { name: "Taj Mahal", category: "Heritage", size: "15–25 cm", finish: "Detailed print", price: "₹4,999", image: "chhotakaar-3D-printed-scale-model-for-architects", tone: "peach" },
  { name: "Luxury Villa", category: "Houses", size: "15–25 cm", finish: "Multi colour", price: "₹3,499", image: "chhotakaar-Personalized-3D-architectural-design-printing", tone: "lilac" },
];

const categories = [
  { name: "Houses", sub: "Custom home models", icon: House, image: "chhotakaar-Get-3D-miniature-model-of-my-home", tone: "sand" },
  { name: "Apartments", sub: "Residential buildings", icon: Building2, image: "chhotakaar-Budget-3D-print-service-for-building-elevation", tone: "blue" },
  { name: "Heritage", sub: "Monuments & landmarks", icon: Landmark, image: "chhotakaar-comercial-tower-3d-printed- miniature", tone: "peach" },
  { name: "Custom Models", sub: "Your design, your model", icon: DraftingCompass, image: "chhotakaar-STL-file-3D-print-for-house-design", tone: "lilac" },
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

function ModelPhoto({
  kind,
  alt,
  className = "",
  fit = "cover",
}: {
  kind: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
}) {
  // Put your image files in /public/images using these exact names:
  // house.webp, apartments.webp, heritage.webp, villa.webp
  return (
    <img
      src={`/images/${kind}.png`}
      alt={alt}
      className={className}
      loading="lazy"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: fit,
      }}
    />
  );
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
