# 📘 VITARA Documentation

Welcome to the comprehensive documentation for the **VITARA Medical & Digital Health Template**. 

---

## 📂 Directory Structure

The repository is organized logically for easy integration into backend systems (Laravel, Django, Node.js) or frontend frameworks (React, Next.js, Vue).

```text
vitara/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── vitara.css         # Main Tailwind CSS input file (CSS variables)
│   │   │   └── vitara.min.css     # Compiled CSS output (Do not edit directly)
│   │   └── img/                   # Image assets (placeholders, logos)
│   ├── [html files]               # 40+ HTML template files
│   └── components.html            # UI Kit reference guide
├── README.md                      # Quick start guide
├── DOCUMENTATION.md               # This file
└── unify_sidebars.js              # Utility script used during development
```

---

## 📄 Pages Directory

VITARA includes over 45 pages categorized into four main domains:

### 1. Main & Marketing Pages
Pages meant for the public-facing website.
- `index.html` - Main Hospital/Clinic Homepage
- `index-wellness.html` - Mental Health & Wellness Homepage
- `index-telehealth.html` - Telemedicine Startup Homepage
- `about.html` - About Us / Hospital History
- `departments.html` - Centers of Excellence / Departments Grid
- `services.html` - Service listing
- `service-detail.html` - Single service detail
- `doctors.html` - Find a Doctor directory
- `doctor-profile.html` - Doctor CV and booking CTA
- `telemedicine.html` - Telehealth marketing page
- `appointment.html` - Step-by-step booking wizard
- `contact.html` - Contact and locations

### 2. Patient Portal
A highly interactive, authenticated area for patients to manage their health.
- `patient-dashboard.html` - Patient overview (vitals, upcoming visits)
- `patient-appointments.html` - Appointment history and scheduling
- `patient-records.html` - Electronic Health Records (EHR) summary
- `patient-prescriptions.html` - Active prescriptions and refill requests
- `patient-lab-results.html` - Diagnostic test results with visual indicators
- `patient-wearable.html` - Smartwatch/Device data integration (Chart.js)
- `patient-messages.html` - Secure messaging with care team
- `patient-telemedicine.html` - Video call UI for telehealth sessions
- `patient-settings.html` - Patient profile and billing settings

### 3. Clinical Dashboard (Doctor/Admin)
A professional interface for healthcare providers to manage operations.
- `clinical-dashboard.html` - Doctor's daily overview
- `clinical-patients.html` - Patient roster/directory
- `clinical-patient-detail.html` - Deep dive into a single patient's EMR
- `clinical-schedule.html` - Calendar and scheduling
- `clinical-prescriptions.html` - e-Prescribing interface
- `clinical-messages.html` - Inbox for patient and internal communications
- `clinical-analytics.html` - Hospital/Clinic operational metrics

### 4. Healthcare E-Commerce / Pharmacy
For selling medical devices, supplements, or prescription fulfillment.
- `shop-catalog.html` - Product grid with filters
- `shop-product.html` - Single product detail page
- `shop-cart.html` - Shopping cart
- `shop-checkout.html` - Checkout and payment flow

### 5. Utility & Authentication
- `auth-login.html`, `auth-register.html`, `auth-forgot.html`, `auth-reset.html`
- `blog.html`, `blog-article.html`
- `utility-404.html`, `utility-maintenance.html`
- `utility-pricing.html`, `utility-faq.html`, `utility-privacy.html`, `utility-terms.html`

---

## 🎨 Customization & Design System

VITARA uses **Tailwind CSS v4** without needing a `tailwind.config.js`. Everything is configured via modern CSS variables in `src/assets/css/vitara.css`.

### Modifying Colors
Open `src/assets/css/vitara.css`. You will see the `@theme` block:

```css
@theme {
    /* Brand Colors */
    --brand-primary: #1B3A2F;
    --brand-secondary: #2C5545;
    --brand-accent: #D4AF37;
    
    /* Backgrounds */
    --bg-canvas: #FAFAFA;
}
```
To rebrand the template (e.g., from Green to Blue), simply change `--brand-primary` to `#0F172A` (Slate 900) and `--brand-secondary` to `#1D4ED8` (Blue 700). After saving, run the Tailwind compiler.

### Modifying Typography
The template uses 4 fonts served via Google Fonts:
- **Playfair Display** & **Instrument Sans**: Used for Headings (`font-display`).
- **Inter** & **Outfit**: Used for Body text (`font-body`).
- **DM Mono**: Used for medical numbers/IDs (`font-mono`).

To change fonts:
1. Update the Google Fonts `<link>` tags in the HTML `<head>`.
2. Update the `--font-*` variables inside `vitara.css`:
```css
@theme {
    --font-display: "Playfair Display", "Instrument Sans", sans-serif;
    --font-body: "Inter", "Outfit", sans-serif;
}
```

### UI Components Library
If you are developing dynamic views (e.g., converting this template to React), you can refer to `src/components.html`. This page acts as a visual dictionary containing all pre-styled inputs, buttons, cards, badges, and alerts used throughout the template.

---

## 📈 Third-Party Libraries

VITARA is completely self-contained and works 100% offline:
1. **Lucide Icons**: Used for all SVG icons. It is loaded locally via `<script src="assets/js/lucide.min.js"></script>` and initialized with `lucide.createIcons();` before the closing `</body>` tag.
2. **Chart.js**: Used on the wearable health data and clinical analytics pages for data visualization. Loaded locally via `<script src="assets/js/chart.min.js"></script>`.

No external CDN dependencies are included, ensuring privacy compliance, rapid loading speed, and reliable offline operations.

