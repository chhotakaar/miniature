import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chhotakaar — Bade Sapne. Chhota Akaar.",
  description: "Architectural miniatures and custom 3D-printed house models. Bring your dream design to life in miniature.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
