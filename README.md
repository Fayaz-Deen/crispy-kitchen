# Crispy Kitchen

A modern, high-performance website for Crispy Kitchen - Madurai's premium fried chicken restaurant.

**Live Site:** [https://crispykitchen.in](https://crispykitchen.in)

## Lighthouse Scores

| Category | Score |
|----------|-------|
| Performance | 96% |
| Accessibility | 100% |
| Best Practices | 100% |
| SEO | 100% |

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Animations:** Pure CSS (no external libraries)
- **Deployment:** Vercel

## Features

- Fully responsive design (mobile-first)
- Optimized images with Next.js Image component (AVIF/WebP)
- CSS-only animations for maximum performance
- WhatsApp ordering integration
- Google Maps embed for location
- Instagram social link
- Franchise enquiry form

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS animations
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── layout/
│   │   ├── Header.tsx   # Navigation header
│   │   └── Footer.tsx   # Site footer
│   ├── sections/
│   │   ├── Hero.tsx           # Hero section
│   │   ├── SignatureDishes.tsx # Best sellers
│   │   ├── Menu.tsx           # Full menu with categories
│   │   ├── About.tsx          # About & flavor profiles
│   │   ├── VideoExperience.tsx # Video gallery
│   │   └── Contact.tsx        # Contact info & map
│   └── ui/
│       └── FloatingOrderButton.tsx # Mobile order FAB
├── data/
│   └── menu.ts          # Menu data and contact info
└── public/
    └── images/          # Optimized images
```

## Performance Optimizations

- **No animation libraries** - Replaced Framer Motion & GSAP with CSS animations
- **Lazy loading** - Dynamic imports for below-fold components
- **Image optimization** - Compressed hero image (722KB → 162KB), AVIF/WebP formats
- **CSS optimization** - Enabled via Next.js experimental optimizeCss
- **Preloading** - Hero image preloaded for faster LCP

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

The site auto-deploys to Vercel on push to main branch.

```bash
# Manual deploy
npx vercel --prod
```

## Contact

- **Phone:** +91 9597376713
- **WhatsApp:** [Order Now](https://wa.me/919597376713)
- **Instagram:** [@crispykitchen.in](https://instagram.com/crispykitchen.in)
- **Location:** Food Bazaar, Madurai
