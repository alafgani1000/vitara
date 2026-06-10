# 🏥 VITARA - Premium Medical & Digital Health Template

**Version:** 1.0.0  
**Design Philosophy:** "Warm Clinical Luxury" (One Medical / Apple Health style)  
**Technology:** HTML5, Tailwind CSS v4, Vanilla JavaScript, Chart.js, Lucide Icons

---

## 🌟 Overview

VITARA is not just a medical template; it is a comprehensive **Health-Tech UI Kit**. Built to bridge the gap between traditional clinical interfaces and modern startup aesthetics, VITARA offers 40+ meticulously designed pages. It is perfectly suited for hospitals, specialized clinics, wellness centers, telemedicine startups, and digital health platforms.

Unlike traditional medical templates that rely on generic "clinical blue" and outdated 2015 layouts, VITARA utilizes a premium color palette (Warm Sage, Deep Forest, Lavender, Soft Canvas) to create an empathetic, humanist, and high-end patient experience.

## ✨ Key Features

- **45+ Premium HTML Pages**: Marketing, Patient Portal, Clinical Dashboard, and E-commerce.
- **3 Distinct Homepage Concepts**:
  - `index.html`: Corporate Hospital / Premium Clinic
  - `index-wellness.html`: Mental Health / Wellness & Meditation
  - `index-telehealth.html`: Telemedicine Startup
- **Immersive Patient Portal**: Wearable data integration (Chart.js), prescriptions, lab results, and video telehealth UI.
- **Advanced Clinical Dashboard**: EMR/EHR layouts, patient scheduling, and analytics for doctors.
- **Tailwind CSS v4**: Fully utility-first, easily customizable via standard CSS variables.
- **No Heavy Frameworks**: Pure HTML, CSS, and lightweight vanilla JS for maximum integration flexibility (React, Vue, Laravel, etc.).
- **Lucide Icons**: Beautiful, consistent, open-source iconography.

---

## 🚀 Quick Start

### 1. Requirements
Ensure you have **Node.js** and **npm** installed on your system.
This template uses the new `@tailwindcss/cli` for compilation.

### 2. Getting Started
To view the template, simply open `src/index.html` in your web browser. No local server is strictly required to view the static files, though using a tool like VS Code Live Server is recommended.

### 3. Compiling CSS (Tailwind)
If you make changes to the HTML classes or want to modify the design system, you need to recompile the Tailwind CSS file.

Run the following command from the root directory:
```bash
npx @tailwindcss/cli -i ./src/assets/css/vitara.css -o ./src/assets/css/vitara.min.css --watch
```
This will watch your HTML files for changes and update `vitara.min.css` automatically.

---

## 📚 Documentation

For a deep dive into the directory structure, page index, and how to customize the design system (colors, typography, etc.), please refer to:
👉 **[DOCUMENTATION.md](./DOCUMENTATION.md)**

To view the UI Component Library (Buttons, Forms, Badges, Cards), open:
👉 **`src/components.html`**

---

## 🎨 Design System Quick Edit

All brand colors and typographic fonts are controlled via native CSS variables in `src/assets/css/vitara.css`.

```css
@theme {
    --brand-primary: #1B3A2F;     /* Deep Forest Green */
    --brand-secondary: #2C5545;   /* Lighter Green */
    --brand-accent: #D4AF37;      /* Warm Gold */
    --bg-canvas: #FAFAFA;         /* Off-white */
}
```
Simply change the hex codes, run the Tailwind compiler, and the entire template will update instantly.

---

*Built with precision and care for the future of digital healthcare.*
