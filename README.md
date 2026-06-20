# Nexus — 3D Hero Section

An immersive portfolio hero section built with **React**, **Three.js**, and **GSAP**. Floating glass spheres, particle fields, and syntax-highlighted code windows create a high-end frontend showcase — all rendered in the browser with WebGL.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r184-black?logo=threedotjs&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

## Live Demo

Once deployed via GitHub Pages, the site will be available at:

**https://\<your-username\>.github.io/3d-basic-hero/**

## Features

- **3D floating spheres** — glass transmission, metallic distortion, and emissive materials via `@react-three/drei`
- **Particle field & star background** — depth and atmosphere behind the scene
- **Mouse parallax** — the 3D group and code windows respond to cursor movement
- **Floating code windows** — four glassmorphic panels (React, GSAP, GLSL, terminal) with syntax highlighting
- **GSAP entrance animations** — staggered timeline for hero content and floating panels
- **Responsive layout** — code windows adapt on tablet; simplified view on mobile
- **Performance-conscious** — adaptive DPR, Suspense boundaries, and fog culling

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 19 + TypeScript |
| 3D | Three.js, React Three Fiber, Drei |
| Animation | GSAP + `@gsap/react` |
| Build | Vite 8 |
| Deploy | GitHub Pages (GitHub Actions) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node)

### Install & run

```bash
# Clone the repository
git clone https://github.com/<your-username>/3d-basic-hero.git
cd 3d-basic-hero

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other scripts

```bash
npm run build    # Type-check and build for production
npm run preview  # Preview the production build locally
```

## Project Structure

```
src/
├── components/
│   └── Hero/
│       ├── Hero.tsx            # Main section + GSAP orchestration
│       ├── HeroScene.tsx       # Three.js canvas setup
│       ├── FloatingSpheres.tsx # Glass, metal & distort spheres
│       ├── ParticleField.tsx   # Ambient particle system
│       ├── CodeWindows.tsx     # Floating code editor panels
│       └── HeroContent.tsx     # Headline, CTAs, stats
├── App.tsx
├── main.tsx
└── index.css                   # Global tokens & reset
```

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages on every push to `main`.

### One-time setup

1. Create a new repository on GitHub named **`3d-basic-hero`**
2. Push this project to it (see commands below)
3. Go to **Settings → Pages → Build and deployment**
4. Set **Source** to **GitHub Actions**
5. After the first workflow run completes, your site goes live

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: 3D hero section with React, Three.js, and GSAP"
git branch -M main
git remote add origin https://github.com/<your-username>/3d-basic-hero.git
git push -u origin main
```

> **Note:** If your repository name differs from `3d-basic-hero`, update the `base` path in `vite.config.ts` to match (`/<your-repo-name>/`).

## Customization

| What to change | Where |
|----------------|-------|
| Headline & copy | `src/components/Hero/HeroContent.tsx` |
| Sphere colors & positions | `src/components/Hero/FloatingSpheres.tsx` → `SPHERES` array |
| Code window content | `src/components/Hero/CodeWindows.tsx` → `CODE_WINDOWS` array |
| Color palette | `src/index.css` → CSS custom properties |
| Animation timing | `src/components/Hero/Hero.tsx` → GSAP timeline |

## License

MIT — feel free to use this in your portfolio or as a starting point for your own projects.
