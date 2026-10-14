# Chhotakaar — Next.js starter

A responsive, premium-feeling homepage for an architectural miniature / 3D-printing brand.

## Included
- Next.js 14 App Router + TypeScript
- Responsive homepage with forest-green, ivory and warm-gold design system
- Category cards and filterable featured-model cards
- Customer Login entry point (currently opens a demo modal; authentication is not wired)
- Custom model enquiry modal with contact, model, size, reference, finish and budget fields
- Demo form saves submissions to browser localStorage only
- `public/` folder with a homepage concept image
- Vercel-friendly project layout

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Important before production
1. The product visuals are CSS-built illustrative placeholders, not actual product photography. Replace them with your real images in `public/models/`.
2. The enquiry form currently saves to localStorage in the visitor's browser. It does **not** send an email or store submissions centrally. Connect a server route, database, or form service before launch.
3. The Customer Login button is a UI placeholder. Add a real authentication provider (e.g. Auth.js, Clerk, or Supabase Auth) before representing it as working login.
4. Add your actual WhatsApp, Instagram, email, privacy policy, terms and shipping/return policy.
5. Verify product prices, delivery fees, tax treatment and turnaround times before publishing.
6. Google Fonts is imported remotely; use local fonts if you need fully self-hosted assets.

## Deploy to GitHub + Vercel
1. Create a GitHub repository and push this folder's contents.
2. In Vercel, choose **Add New → Project**, import the GitHub repository.
3. Keep the default Next.js build settings and deploy.
4. Add environment variables only after connecting the enquiry backend.
