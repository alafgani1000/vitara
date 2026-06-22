# 📘 VITARA Documentation

Welcome to the comprehensive documentation for the **VITARA Medical & Digital Health Template**.

---

## 📂 Directory Structure

The template is organized logically for easy integration into backend systems (Laravel, Django, Node.js) or frontend frameworks (React, Next.js, Vue).

```text
vitara/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── vitara.css         # Main Tailwind CSS input file (CSS variables & theme)
│   │   │   ├── vitara.min.css     # Compiled CSS output (Do not edit directly)
│   │   │   └── aos.css            # AOS Animation library CSS (local)
│   │   ├── fonts/                 # Self-hosted font files (TTF/WOFF2, no CDN)
│   │   ├── img/
│   │   │   ├── blog/              # Blog thumbnail images (6 images)
│   │   │   ├── doctors/           # Doctor profile images (8 + 1 placeholder)
│   │   │   ├── general/           # Avatar and banner images
│   │   │   ├── hero/              # Hero section images (3 images)
│   │   │   └── shop/              # Product images for pharmacy (6 images)
│   │   └── js/
│   │       ├── lucide.min.js      # Lucide Icons (local)
│   │       ├── chart.min.js       # Chart.js (local)
│   │       ├── aos.js             # AOS Animation (local)
│   │       └── main.js            # Template JavaScript
│   ├── [45+ html files]           # All HTML template pages
│   └── components.html            # UI Component library reference
├── README.md                      # Quick start guide
├── DOCUMENTATION.md               # This file
└── package.json                   # Node.js build configuration
```

---

## 📄 Pages Directory

VITARA includes 45+ pages categorized into five main domains:

### 1. Main & Marketing Pages
- `index.html` — Main Hospital/Clinic Homepage
- `index-wellness.html` — Mental Health & Wellness Homepage
- `index-telehealth.html` — Telemedicine Startup Homepage
- `about.html` — About Us / Hospital History
- `departments.html` — Centers of Excellence / Departments Grid
- `services.html` — Service listing
- `service-detail.html` — Single service detail
- `doctors.html` — Find a Doctor directory
- `doctor-profile.html` — Doctor profile and booking CTA
- `telemedicine.html` — Telehealth marketing page
- `appointment.html` — Step-by-step booking wizard
- `contact.html` — Contact and locations

### 2. Patient Portal
- `patient-dashboard.html` — Patient overview (vitals, upcoming visits)
- `patient-appointments.html` — Appointment history and scheduling
- `patient-records.html` — Electronic Health Records (EHR) summary
- `patient-prescriptions.html` — Active prescriptions and refill requests
- `patient-lab-results.html` — Diagnostic test results with visual indicators
- `patient-wearable.html` — Smartwatch/Device data integration (Chart.js)
- `patient-messages.html` — Secure messaging with care team
- `patient-telemedicine.html` — Video call UI for telehealth sessions
- `patient-settings.html` — Patient profile and billing settings

### 3. Clinical Dashboard (Doctor/Admin)
- `clinical-dashboard.html` — Doctor's daily overview
- `clinical-patients.html` — Patient roster/directory
- `clinical-patient-detail.html` — Deep dive into a single patient's EMR
- `clinical-schedule.html` — Calendar and scheduling
- `clinical-prescriptions.html` — e-Prescribing interface
- `clinical-messages.html` — Inbox for patient and internal communications
- `clinical-analytics.html` — Hospital/Clinic operational metrics

### 4. Healthcare E-Commerce / Pharmacy
- `shop-catalog.html` — Product grid with filters
- `shop-product.html` — Single product detail page
- `shop-cart.html` — Shopping cart
- `shop-checkout.html` — Checkout and payment flow

### 5. Utility & Authentication
- `auth-login.html`, `auth-register.html`, `auth-forgot.html`, `auth-reset.html`
- `blog.html`, `blog-article.html`
- `utility-404.html`, `utility-maintenance.html`
- `utility-pricing.html`, `utility-faq.html`, `utility-privacy.html`, `utility-terms.html`

---

## 🎨 Customization & Design System

VITARA uses **Tailwind CSS v4** without needing a `tailwind.config.js`. Everything is configured via modern CSS variables in `src/assets/css/vitara.css`.

### Modifying Colors
Open `src/assets/css/vitara.css` and edit the `:root` block:

```css
:root {
    --brand-primary: #2d6a4f;     /* Main green — change to rebrand */
    --brand-secondary: #52796f;   /* Secondary green */
    --brand-accent: #b5935a;      /* Gold accent */
    --bg-canvas: #fafaf8;         /* Page background */
}
```

To rebrand from Green to Blue, change `--brand-primary` to `#1D4ED8`. After saving, recompile the CSS.

### Modifying Typography
All fonts are **self-hosted** in `src/assets/fonts/` — no internet connection required.

| Font | Weight | Usage |
|------|--------|-------|
| Playfair Display | 400, 500, 600 | Headings (`font-display`) |
| Instrument Sans | 400, 500, 600 | UI Labels |
| Inter | 400, 500, 600 | Body text (`font-body`) |
| Outfit | 400, 500, 600 | Secondary body |
| DM Mono | 400, 500 | Medical IDs, numbers (`font-mono`) |

To change fonts, update the `@font-face` declarations and `@theme` variables in `vitara.css`, then recompile.

### Recompiling CSS (Tailwind)
Run from the project root:
```bash
npm run build
# or watch mode:
npm run dev
```

### UI Components Library
Open `src/components.html` in your browser to view all available UI components: buttons, forms, cards, badges, alerts, and more.

---

## 📈 Third-Party Libraries

VITARA is **completely self-contained and works 100% offline**. All libraries are bundled locally:

| Library | Version | Usage | Local File |
|---------|---------|-------|-----------|
| Tailwind CSS | v4.x | Utility-first CSS framework | `assets/css/vitara.min.css` |
| Lucide Icons | Latest | SVG icon library | `assets/js/lucide.min.js` |
| Chart.js | v4.x | Data visualization charts | `assets/js/chart.min.js` |
| AOS | v2.x | Animate On Scroll library | `assets/js/aos.js` |

No external CDN dependencies are included.

---

## 🖼️ Image Assets & Licensing

> ⚠️ **IMPORTANT — Please read before using in production.**

### Image Types Included

All images included in this template fall into **two categories**:

#### 1. AI-Generated Images (Demo Content)
All photographs included in `src/assets/img/` were **generated using artificial intelligence** tools. This includes:
- Doctor and medical professional portraits (`img/doctors/`)
- Hero and lifestyle photographs (`img/hero/`)
- Blog article thumbnail images (`img/blog/`)
- Healthcare product images (`img/shop/`)
- Patient avatar (`img/general/`)

**These images are provided solely as visual demonstration content** to show how the template looks when populated with real imagery.

#### 2. What This Means for You (the Buyer)

| Situation | Action Required |
|-----------|----------------|
| **Personal or internal project** | You may use the demo images as-is for mockups and prototypes |
| **Commercial website / live product** | **Replace** all demo images with your own licensed photographs before launch |
| **Reselling or redistribution** | You may **not** resell or redistribute the demo images as standalone assets |

### ⚠️ Required Action Before Going Live

**Before launching a real commercial website using this template, you MUST replace all demo images** with your own original photographs or images licensed for commercial use.

Recommended sources for free commercial-use photography:
- [Unsplash](https://unsplash.com) — Free, no attribution required
- [Pexels](https://www.pexels.com) — Free for commercial use
- [Pixabay](https://pixabay.com) — Free for commercial use

---

## ⚖️ Third-Party Asset Licenses

All third-party libraries and fonts used in this template are licensed for **free commercial use**:

| Asset | License | Commercial Use |
|-------|---------|---------------|
| Tailwind CSS | MIT License | ✅ Yes |
| Lucide Icons | ISC License | ✅ Yes |
| Chart.js | MIT License | ✅ Yes |
| AOS (Animate On Scroll) | MIT License | ✅ Yes |
| Playfair Display (Font) | SIL Open Font License 1.1 | ✅ Yes |
| Instrument Sans (Font) | SIL Open Font License 1.1 | ✅ Yes |
| Inter (Font) | SIL Open Font License 1.1 | ✅ Yes |
| Outfit (Font) | SIL Open Font License 1.1 | ✅ Yes |
| DM Mono (Font) | SIL Open Font License 1.1 | ✅ Yes |

All SIL OFL fonts are free to use, modify, and distribute — including in commercial products — provided they are not sold as standalone font products.

---

## 🔒 Template License

This template is sold under the **Standard Marketplace License** (Codester Regular License). Under this license:

- ✅ You may use the template for **one end product** (one website or application)
- ✅ You may modify the template's source code freely
- ✅ The end product may be used for personal or commercial purposes
- ❌ You may **not** resell, redistribute, or sublicense the template itself
- ❌ You may **not** use the template to create competing template products

For multiple projects, please purchase additional licenses.

---

## 🛠️ Troubleshooting

**Icons not showing?**
Ensure `lucide.createIcons()` is called after the DOM is loaded. It is already included in every page before the closing `</body>` tag.

**Fonts not loading?**
Ensure the `src/assets/fonts/` folder is present and all `.ttf` files are intact. Do not rename font files as they are referenced in `vitara.css`.

**CSS styles not applying?**
Do not edit `vitara.min.css` directly. If you need to customize styles, edit `vitara.css` and recompile using `npm run build`.

**Charts not rendering?**
Ensure `chart.min.js` is loaded before any `<script>` block that initializes a chart. Check the browser console for JavaScript errors.

---

*VITARA — Built with precision and care for the future of digital healthcare.*
