# Nanjing Liyang Biotech Co., Ltd. - Official Corporate Website
# 南京立阳生物科技有限公司 - 官方外贸多页面静态官网

A high-performance, modern, and aesthetically refined corporate static website engineered with **Next.js (App Router, SSG)** and **Tailwind CSS**, designed specifically for international B2B clients, chemical procurement officers, and pharmaceutical formulation labs.

---

## 🌟 Key Highlights & Design Standards

This project has been developed strictly adhering to the **`frontend-design`** skill specifications:
- **Unique Bio-Tech Aesthetic**: Deep slate ink `#09111e` combined with dynamic bio-teal `#0d9488`, fresh cyan, and crystalline pure white.
- **Pure Static Export (SSG)**: Zero Node.js runtime server requirement. Builds directly into the `out/` folder, ready for Nginx, GitHub Pages, Cloudflare Pages, or Vercel with 100% SEO optimization.
- **Comprehensive Page Architecture**:
  - `Home`: Molecular spec cards, core business pillars, featured star products, automated quality assurance metrics, and rapid RFQ.
  - `About Us`: Corporate mission, multi-year milestones (2016-2026), international compliance certifications (ISO 9001, GMP, REACH, Halal & Kosher).
  - `Products`: Interactive searchable catalog with category filtering, CAS numbers, purity standards, molecular formulas, and direct quotation links.
  - `Factory & R&D`: 12,000 m² synthesis workshop details, Class 100k cleanroom standards, analytical instruments matrix (Agilent HPLC, GC-MS), and EHS green chemistry commitments.
  - `News`: Exhibitions (CPHI, in-cosmetics), company breakthroughs, and regulatory whitepapers.
  - `Jobs`: Global trade positions, organic synthesis R&D chemist, and QC/QA analyst openings.
  - `Contact`: B2B RFQ quotation form with pre-filled product parameters, lead times FAQ, and global contact coordinates.

---

## 🚀 Quick Start Guide

### 1. Development Mode
Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Static Production Build
Compile and generate the production static files:
```bash
npm run build
```
All static HTML, CSS, and JS assets will be exported into the `out/` directory.

### 3. Deploying the Static Site
- **Nginx**: Point your `root` directive directly to the `/out` directory.
- **Cloudflare Pages / Vercel**: Set build command to `npm run build` and output directory to `out`.
- **GitHub Pages**: Upload the contents of the `out` folder directly.
