# Breathe Wellness Sanctuary — Shopify Theme

A high-end Shopify theme for **Breathe Wellness Sanctuary**, a "Social Wellness Club" inspired by Remedy Place's business model, fused with an organic, warm aesthetic derived from the Breathe master plans.

## 🎨 Design Philosophy: "Organic Brutalism"

This theme merges two aesthetic approaches:

| Aspect | Remedy Place (Logic) | Breathe (Aesthetic) | Fused Result |
|--------|---------------------|---------------------|--------------|
| Atmosphere | Moody, dark, industrial brutalism | Light, airy, organic, warm | **Warm Brutalism** — high-end but approachable |
| Social Aspect | "Restoration Bars" replacing traditional bars | Open communal spaces and pool | A community hub for high-performers |
| Technology | "Tech-Remedies" (HBOT, Cryo, Ice Baths) | Medical-grade longevity tech | Boutique hotel meets wellness clinic |

## 📁 Theme Structure

```
theme/
├── assets/
│   ├── breathe-base.css      # Core styles, variables, animations
│   ├── breathe-components.css # Component-specific styles
│   └── breathe-main.js       # Interactive behaviors
├── config/
│   └── settings_schema.json  # Theme customization options
├── layout/
│   └── theme.liquid          # Main layout wrapper
├── sections/
│   ├── header.liquid         # Navigation with Remedy-style dropdowns
│   ├── hero-video.liquid     # Cinematic video hero
│   ├── membership-tiers.liquid # Credit-based membership system
│   ├── experiences-grid.liquid # Tech-Remedies service grid
│   ├── private-events.liquid # "After Hours" event rentals
│   ├── faq.liquid           # Accordion FAQ
│   ├── rich-text.liquid     # Content section
│   ├── announcement-bar.liquid # Top announcement
│   └── footer.liquid        # Site footer
├── snippets/
│   └── meta-tags.liquid     # SEO & Open Graph tags
└── templates/
    ├── index.json           # Homepage template
    └── page.memberships.json # Memberships page template
```

## 🎨 Material Palette (From Breathe Master Plans)

| Material | Code | CSS Variable | Hex |
|----------|------|--------------|-----|
| Burnt Sienna Tadelakt | FF-01 | `--color-burnt-sienna` | `#C4654A` |
| Oak Wood | W-01 | `--color-oak-wood` | `#A67C52` |
| Terracotta Tiles | FT-03 | `--color-terracotta` | `#B85C38` |
| Warm Cream | — | `--color-warm-cream` | `#F5EDE4` |
| Deep Earth | — | `--color-deep-earth` | `#2C1810` |
| Sanctuary White | — | `--color-sanctuary-white` | `#FDFBF8` |

### 2700K Warm Glow System
A signature effect mimicking the 2700K lighting plan:
- Warm glow cursor following the mouse
- Hover state overlays on images
- Soft light blend mode effects
- Variable: `--color-warm-glow: #FFD9A8`

## 💳 Membership Credit System

Modeled after Remedy Place's "sticky subscription" model:

### Tiers
| Tier | Name | Price | Credits/Month |
|------|------|-------|---------------|
| 1 | The Restore | $395 | 4 |
| 2 | The Ritual | $695 | 8 |
| 3 | The Sanctuary | $1,195 | 16 |

### Credit Costs
- **1 Credit**: Remedy Roller, Red Light Therapy
- **2 Credits**: Sauna Suite, Cryo
- **3 Credits**: Contrast Suite, Guided Ice Bath
- **4 Credits**: HBOT Chamber, IV Therapy

### Features
- Credits rollover month-to-month
- Unlimited access to select experiences (Ice Bath, Cryo)
- Complimentary guest passes
- Member-only pricing on alternative medicine

## 🤝 Social Self-Care Features

Experiences support **group/pair bookings**:
- HBOT Chamber (2 people)
- Contrast Suite (4 people)
- Guided Ice Bath (6 people)
- IV Vitamin Lounge (4 people)

Each experience card shows:
- Credit cost
- Group booking indicator
- Max party size

## 🎉 Private Events ("After Hours")

A secondary revenue stream featuring:
- **Private Club Rentals**: Full takeovers, semi-private spaces
- **Special Celebrations**: Birthdays, bachelor/bachelorette
- **Corporate Wellness**: Team outings, leadership retreats

## 📱 Navigation Structure

```
├── Sanctuary (dropdown)
│   ├── Our Space
│   ├── The Pool
│   ├── Contrast Suites
│   └── Restoration Lounge
├── Experiences (dropdown)
│   ├── Tech-Remedies
│   ├── HBOT Chamber
│   ├── Infrared Sauna
│   ├── Contrast Therapy
│   ├── IV Vitamin Therapy
│   └── Breathwork & Ice Bath
├── Memberships
├── Events
├── About
├── Shop (dropdown)
│   ├── Wellness
│   ├── Supplements
│   └── Gift Cards
└── [Book] (CTA button)
```

## 🚀 Getting Started

1. **Upload to Shopify**: Compress the `theme/` folder and upload via Shopify Admin > Online Store > Themes > Add theme

2. **Configure Settings**: Navigate to Customize and update:
   - Logo and branding
   - Color palette (pre-set to Breathe specs)
   - Membership tier details
   - Social links

3. **Add Content**:
   - Upload hero video (recommended: slow-motion wellness footage)
   - Add experience images
   - Configure membership products

4. **Create Pages**:
   - Memberships (uses `page.memberships.json` template)
   - Book / Reservations
   - About
   - Contact

## 🔧 Customization

### Theme Settings
All customizable via Shopify theme editor:
- Material palette colors
- Warm glow intensity
- Typography (Cormorant Garamond + Darker Grotesque)
- Membership tier names, prices, and credits
- Group booking settings

### CSS Variables
Override in theme settings or directly in CSS:
```css
:root {
  --color-burnt-sienna: #C4654A;
  --radius-organic-lg: 4rem;
  --transition-glow: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

## 📄 License

Custom theme for Breathe Wellness Sanctuary. All rights reserved.

---

*Built with the philosophy that wellness should be social, beautiful, and accessible.*







