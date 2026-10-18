export const metadata = {
  title: "Architectural Model Blog | 3D Printed Miniatures | Chhotakaar",
  description: "Explore Chhotakaar articles about 3D printed apartment models, custom villa miniatures, architectural model lighting, display cases, and miniature design ideas.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Chhotakaar Blog | 3D Printed Architectural Miniature Models",
    description: "Guides, ideas, and tips for 3D printed apartment models, villa miniatures, and architectural scale models.",
    url: "/blog",
    type: "website",
    images: [{ url: "/images/chhotakaar-only-3d-printed-apartment.png", alt: "3D printed apartment miniature model by Chhotakaar" }],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
