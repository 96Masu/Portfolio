# M_CV — Shaikh Masudur Rahman Portfolio

## Project Overview

A modern, ultra-luxurious single-page developer portfolio website built with **React + TypeScript + Vite + Tailwind CSS**. Features a pitch-black theme with metallic gold accents, glassmorphism cards, animated particle background, 3D tilt effects, and a working contact form backed by Supabase.

---

## Tech Stack

| Layer        | Technology                     |
|--------------|--------------------------------|
| Frontend     | React 18, TypeScript           |
| Build Tool   | Vite 5                         |
| Styling      | Tailwind CSS 3, PostCSS        |
| Animations   | Framer Motion, CSS Keyframes  |
| Icons        | Lucide React                   |
| Backend/DB   | Supabase (PostgreSQL + RLS)    |

---

## Folder Structure

```
project/
├── public/
│   └── images/
│       ├── masu.png                  # Original portrait
│       └── masu_transparent.png      # Portrait with transparent background
├── src/
│   ├── components/
│   │   ├── About.tsx                 # About section with 3D portrait frame
│   │   ├── Contact.tsx              # Contact form (saves to Supabase)
│   │   ├── Education.tsx            # Education & certifications timeline
│   │   ├── Footer.tsx               # Footer with social links
│   │   ├── Hero.tsx                 # Hero with typewriter animation
│   │   ├── Navbar.tsx               # Sticky glassmorphism navbar
│   │   ├── ParticleBackground.tsx   # Canvas particle network
│   │   ├── Projects.tsx             # Project showcase cards
│   │   ├── Skills.tsx               # Skills with progress bars
│   │   └── TiltCard.tsx             # Reusable 3D tilt card
│   ├── lib/
│   │   └── supabase.ts              # Supabase client singleton
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # React entry point
│   ├── index.css                    # Global styles + Tailwind
│   └── vite-env.d.ts
├── supabase/
│   └── migrations/
│       └── 20260904145111_create_contact_messages.sql
├── .env                              # Supabase credentials
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── eslint.config.js
```

---

## Prerequisites

Make sure you have the following installed on your machine:

1. **Node.js** (v18 or higher) — Download from https://nodejs.org
2. **npm** (comes bundled with Node.js) — or use `yarn` / `pnpm` if you prefer

Check installation:
```bash
node --version   # should print v18.x or higher
npm --version    # should print 9.x or higher
```

---

## Setup & Run Instructions

### Step 1: Unzip the project

```bash
unzip MasudurRahman-Portfolio.zip
cd MasudurRahman-Portfolio
```

### Step 2: Install dependencies

```bash
npm install
```

This will install all required packages (React, Vite, Tailwind, Framer Motion, Lucide, Supabase, etc.).

### Step 3: Environment variables

The `.env` file is already included in the zip with Supabase credentials pre-configured:

```
VITE_SUPABASE_URL=https://hphqidpeodtwrnnyigyp.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key-here>
```

No changes needed — the contact form will work out of the box.

### Step 4: Start the development server

```bash
npm run dev
```

This starts the Vite dev server. Open your browser and go to:

```
http://localhost:5173
```

### Step 5: Build for production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Step 6: Preview the production build

```bash
npm run preview
```

This serves the built files locally so you can test the production version before deploying.

---

## Available npm Scripts

| Command              | Description                                      |
|----------------------|--------------------------------------------------|
| `npm run dev`        | Start development server (hot reload)            |
| `npm run build`      | Build production version to `dist/`              |
| `npm run preview`    | Preview the production build locally             |
| `npm run lint`       | Run ESLint to check code quality                  |
| `npm run typecheck`  | Run TypeScript compiler to check for type errors  |

---

## Database (Supabase)

The contact form saves messages to a Supabase PostgreSQL table called `contact_messages`.

### Schema

| Column       | Type         | Description            |
|--------------|--------------|------------------------|
| id           | uuid (PK)    | Auto-generated         |
| name         | text         | Sender's name          |
| email        | text         | Sender's email         |
| subject      | text         | Message subject        |
| message      | text         | Message body           |
| created_at   | timestamptz  | Timestamp of submission|

### Row Level Security (RLS)

RLS is enabled. Only `INSERT` is allowed for anonymous users (public contact form). No one can read, update, or delete messages from the frontend — that must be done through the Supabase dashboard.

### To view submitted messages

1. Go to your Supabase project dashboard
2. Open the **Table Editor**
3. Select the `contact_messages` table
4. All form submissions will appear here

---

## Deployment

This project can be deployed to any static hosting platform:

### Option A: Vercel
1. Push the project to GitHub
2. Go to https://vercel.com and import the repo
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

### Option B: Netlify
1. Push the project to GitHub
2. Go to https://netlify.com and import the repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### Option C: Cloudflare Pages
1. Push the project to GitHub
2. Go to https://pages.cloudflare.com
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Deploywinget install --id Git.Git -e

---

## Troubleshooting

| Problem                          | Solution                                           |
|----------------------------------|----------------------------------------------------|
| `npm install` fails              | Delete `package-lock.json`, run `npm install` again |
| Port 5173 already in use         | Vite will auto-pick the next available port         |
| Contact form not submitting      | Check internet connection & Supabase credentials    |
| Image not showing                | Ensure `public/images/` folder has both PNGs        |
| Build fails with TS errors       | Run `npm run typecheck` to see detailed errors      |

---

## Contact

- **Phone:** +91-9023427054
- **Email:** masudur82729@gmail.com
- **Location:** Bharuch, Gujarat, India

---

Designed & Built by Shaikh Masudur Rahman © 2026. All rights reserved.
