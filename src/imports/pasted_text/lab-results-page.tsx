Create a fully responsive marketing webpage that exactly replicates the structure, layout, and UX of a modern beverage “Lab Results” page (like drink-fizz.com/lab-results).

This project should output a complete, production-ready frontend suitable for Netlify deployment.

---

## 🧱 GLOBAL SETUP

* Framework: React + Vite
* Styling: Tailwind CSS (use TailGrids component patterns)
* Routing: React Router
* Assets folder included (`/src/assets`)
* Components modularized
* Fully responsive (mobile-first)
* Clean semantic HTML structure
* Include favicon + meta tags
* Include Netlify `_redirects` file for SPA routing:
  /*    /index.html   200

---

## 🎨 DESIGN STYLE

* Dark or neutral background (black, charcoal, or off-white)
* Minimalist, premium beverage branding
* Large bold typography (modern sans-serif)
* High-quality product imagery
* Subtle animations (fade-in, hover scale, soft transitions)
* Grid-based layout
* Generous spacing
* Rounded cards and buttons

---

## 📄 PAGE STRUCTURE

### 1. HERO SECTION

Full-width hero with:

* Large headline:
  “Lab Results”
* Subheading:
  “Transparency you can trust. Every batch tested.”
* Background image (lifestyle beverage shot or product lineup)
* Optional CTA button:
  “Shop Now”

Layout:

* Centered content
* Overlay gradient on image
* Height: ~70–90vh

---

### 2. PRODUCTS + LAB RESULTS MATRIX

Create a grid-based matrix showing:

Each product flavor as a column or card.

Each card contains:

* Product name (e.g. Blood Orange, Dragonfruit, etc.)
* Dosage variants (e.g. 5mg / 10mg)
* List of lab results (COA links)

Each lab result item:

* Label: “COA – [date]”
* Clickable link (dummy PDF link)
* Styled as minimal list items or buttons

Grid behavior:

* Desktop: 3–5 columns
* Tablet: 2 columns
* Mobile: 1 column

Include:

* Section title: “Certificates of Analysis”
* Short description about third-party testing and transparency

---

### 3. FLAVORS SECTION

Visual product showcase:

* Grid or carousel of flavors
* Each item includes:

  * Product image
  * Flavor name
  * Optional short descriptor

Layout:

* Clean grid (3–4 columns desktop)
* Hover animation (scale + slight shadow)
* Optional “Shop” CTA under section

---

### 4. CTA SECTION

Simple conversion block:

* Headline: “Find Your Fizz”
* Subtext encouraging purchase
* CTA button: “Shop Now”

Centered layout with background contrast

---

### 5. FOOTER

Include:

* Navigation links:

  * Shop
  * Lab Results
  * About
  * Contact
* Legal disclaimers (important):

Include placeholder FDA-style disclaimer text:
“This product has not been evaluated by the FDA…”

* Company info block
* Email contact

---

## ⚙️ COMPONENT STRUCTURE

Create reusable components:

* HeroSection.jsx
* ProductMatrix.jsx
* ProductCard.jsx
* FlavorGrid.jsx
* CTASection.jsx
* Footer.jsx

---

## 📁 PROJECT STRUCTURE

/src
/components
/pages
/assets
App.jsx
main.jsx

/public
_redirects

---

## 🚀 NETLIFY DEPLOYMENT SETUP

Ensure project works out-of-the-box for Netlify:

* Build command: npm run build
* Publish directory: dist
* Include SPA fallback (_redirects file)
* No server-side dependencies

---

## ✨ INTERACTIONS

* Smooth scroll between sections
* Hover effects on cards and buttons
* Fade-in animations on scroll (Intersection Observer)

---

## 📱 RESPONSIVENESS

* Mobile-first
* Stack all grids into single column on small screens
* Ensure tap targets are large and accessible

---

## 🧪 DATA STRUCTURE (MOCK)

Create mock JSON data for products:

[
{
"name": "Blood Orange",
"variants": [
{
"dose": "5mg",
"coa": ["2025-11-13", "2025-07-01"]
},
{
"dose": "10mg",
"coa": ["2025-11-13"]
}
]
}
]

---

## 🎯 GOAL

The final result should visually and structurally match a premium beverage brand lab results page:

* Clean
* Trust-focused
* Product-driven
* Conversion-ready

Prioritize clarity, hierarchy, an
