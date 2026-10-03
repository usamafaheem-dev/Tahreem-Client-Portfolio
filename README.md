# Tehreem Arif — QA Portfolio

This is a modern portfolio website for **Tehreem Arif (SQA Specialist)** built with Next.js.  
It includes a public portfolio frontend and a password-protected admin panel to manage portfolio content.

## Features

- Modern, animated, responsive UI
- Light/Dark mode support
- Dynamic portfolio data via API
- Admin dashboard at `/admin`
- MongoDB-backed content storage
- Local JSON fallback/backup (`src/data/portfolio.json`)
- File uploads via Vercel Blob

## Tech Stack

- **Framework:** Next.js 14 + React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Database:** MongoDB
- **Storage:** Vercel Blob

## Project Structure

```text
src/
  app/
    page.tsx              # Main portfolio page
    admin/page.tsx        # Admin dashboard
    api/portfolio/route.ts# Portfolio read/write API
    api/upload/route.ts   # File upload API
  components/             # UI sections (Hero, About, Skills, Projects, etc.)
  context/                # Portfolio context provider
  data/portfolio.json     # Default/fallback portfolio data
  lib/mongodb.ts          # MongoDB connection
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local` in project root:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Open:
   - Portfolio: `http://localhost:3000`
   - Admin panel: `http://localhost:3000/admin`

## Available Scripts

- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — run lint checks

## Admin Notes

- Admin login password comes from `settings.password` in portfolio data.
- Default fallback password in code/data is currently: `tehreem2025`.
- You should change it for production use.

## Deployment

Recommended: **Vercel**  
Make sure `MONGODB_URI` and `BLOB_READ_WRITE_TOKEN` are set in environment variables.
