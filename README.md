# 🌿 Verdant — Premium Indoor Plant Shop

A fully responsive eCommerce website for a premium indoor plant retailer, built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

## Live Preview
Open `index.html` in any modern browser.

## Pages
| Page | Description |
|------|-------------|
| **Home** | Hero, search, featured products, feature strip, testimonials, newsletter |
| **Shop** | Full product grid with search, sort, category filters, price slider |
| **Product Detail** | Modal with care info, quantity selector, wishlist/cart actions |
| **About** | Mission statement, team cards, statistics |
| **Contact** | Contact info card + validated contact form |

## Features
- **Responsive Design** — mobile-first, works at 320px–1920px+
- **Dark Mode** — toggle with persistence via localStorage
- **Shopping Cart** — sidebar with add/remove/quantity, subtotal
- **Wishlist** — heart toggle on all product cards
- **Product Search** — live filtering by name, species, category
- **Category Filtering** — pill filters for Tropical, Trailing, Rare, etc.
- **Price Range Slider** — filter by max budget
- **Sort Options** — Popular, Rating, Price asc/desc
- **Product Detail Modal** — full info, care tags, quantity picker
- **Toast Notifications** — feedback for all cart/wishlist actions
- **Contact Form** — with validation and success feedback
- **Animations** — floating hero, product hover effects, smooth transitions
- **Accessibility** — ARIA labels, keyboard navigation, semantic HTML
- **SEO** — meta tags, OG tags, semantic structure
- **Reduced Motion** — respects `prefers-reduced-motion`

## Design System
| Token | Value | Use |
|-------|-------|-----|
| `--forest` | `#1C2B1E` | Primary dark, nav, CTA |
| `--sage` | `#7A9E7E` | Accent, active states |
| `--mist` | `#D4E2D4` | Subtle backgrounds |
| `--ivory` | `#F5F0E8` | Light backgrounds, hero text |
| `--terra` | `#C4602A` | Conversion CTAs, badges |
| `--font-display` | Cormorant Garamond | Headlines |
| `--font-body` | Inter | Body, UI |

## Project Structure
```
verdant/
├── index.html          # Single-page app — all 5 pages
├── css/
│   └── style.css       # Full design system + responsive styles
├── js/
│   └── app.js          # State management, rendering, interactions
└── README.md
```

## Technical Notes
- **Zero dependencies** — no npm, no bundler, no frameworks
- **Single-page app** — pages toggled via JS, clean URLs with `#`
- **localStorage persistence** — cart, wishlist, and dark mode survive refresh
- **CSS custom properties** for theming — dark mode via `[data-theme="dark"]`
- **9 products** with real botanical names, care data, and descriptions

## Browser Support
Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
