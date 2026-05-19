# Swarnim Kanwal — Portfolio

Personal portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where to add real links

| File | What to update |
|------|---------------|
| `sections/Contact.tsx` | GitHub and LinkedIn `href` values |
| `sections/Projects.tsx` | Project `href` values in each `links` array |
| `app/layout.tsx` | `authors[0].url` in metadata |

## Where to drop project screenshots

Place images in `public/projects/` and reference them in `sections/Projects.tsx` using `next/image`:

```tsx
import Image from "next/image";
<Image src="/projects/project-name.png" alt="Project screenshot" width={600} height={400} className="rounded-lg" />
```

## Wire up the contact form

The form logs to console by default. To use Formspree, replace the `onSubmit` body in `sections/Contact.tsx`:

```ts
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
if (!res.ok) throw new Error("Submission failed");
```

## Deploy to Vercel (one step)

Push to GitHub, then import at vercel.com/new — Vercel auto-detects Next.js with zero config.
