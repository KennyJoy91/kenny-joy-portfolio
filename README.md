# Kenny Joy Portfolio

Professional master portfolio website for **Phuong Linh Truong (Kenny Joy)**, built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_CONTACT_EMAIL=linhtp.uni@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+44 7856 407077
NEXT_PUBLIC_CONTACT_LOCATION=Exeter, United Kingdom
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/phuong-linh-truong-kenny-joy
NEXT_PUBLIC_CV_URL=https://example.com/kenny-joy-cv.pdf
```

These values are public-facing profile details used in the Contact and CTA sections.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Deployment

### Vercel

1. Import the repository into Vercel.
2. Add the `NEXT_PUBLIC_*` environment variables.
3. Deploy.

### GitHub Pages

This is a Next.js project and is ready for static export workflows if required. For most use cases, Vercel deployment is recommended for the best compatibility and performance.
