---
title: TaskFlow Landing Page
type: feat
date: 2026-01-28
stack: React, TypeScript, Tailwind CSS, Vite
deepened: 2026-01-28
---

# ✨ feat: TaskFlow Landing Page

## Enhancement Summary

**Deepened on:** 2026-01-28
**Sections enhanced:** All major sections
**Research agents used:** best-practices-researcher, framework-docs-researcher, kieran-typescript-reviewer, performance-oracle, code-simplicity-reviewer, architecture-strategist

### Key Improvements
1. **Simplified architecture** - Reduced from 3 components to inline/minimal structure
2. **Modern TypeScript patterns** - Standard function components, proper prop interfaces
3. **Performance-first approach** - Targeting Lighthouse 95+ with minimal bundle
4. **Swiss Design principles** - Clean grid, typography hierarchy, asymmetric balance

### New Considerations Discovered
- Use React 18.3.1 (stable) with Vite 5.x (avoid 7.x breaking changes for now)
- Tailwind v3.4.x recommended over v4 for better compatibility
- Skip React.memo and lazy loading for simple landing page
- Self-hosted fonts or system fonts for best performance

---

## Overview

Create a complete landing page for TaskFlow - a task management app targeting busy professionals. The page will showcase the product's clean, minimal interface and key features through a modern, responsive single-page design.

## Problem Statement / Motivation

TaskFlow needs a compelling landing page that:
- Communicates the product's value proposition clearly
- Converts visitors into users through effective CTAs
- Demonstrates the product's aesthetic through the page design itself
- Works seamlessly on mobile and desktop devices

## Proposed Solution

Build a single-page React application with Vite and TypeScript, styled with Tailwind CSS. The page will feature three main sections: Hero, Features, and CTA, with a cohesive blue/purple color palette that evokes productivity and focus.

### Research Insights

**Best Practices:**
- Single clear value proposition in hero - users decide in under 50ms
- Specific CTAs increase conversion by 161%
- Trust signals near CTAs improve conversion significantly
- Mobile-first approach with sticky CTA for mobile users

**Swiss Design Principles Applied:**
- Asymmetric layouts - weight content to the left
- Clear 3-4 level typographic hierarchy
- Generous white space as active design element
- Maximum line length: 65-75 characters

---

## Technical Approach

### Project Structure (Simplified)

```
taskflow-landing/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.tsx
│   ├── App.tsx           # All sections inline (~150 lines)
│   └── index.css         # Tailwind directives only
└── public/
    └── favicon.svg
```

**Research Insights:**
- For a 3-section landing page, component decomposition is optional
- Flat structure reduces cognitive overhead
- Single `App.tsx` with inline sections is acceptable for ~150 LOC

### Implementation (Single Pass)

**Files to create:**

1. `package.json` - Dependencies and scripts
2. `vite.config.ts` - Vite configuration with path aliases
3. `tailwind.config.js` - Minimal customization (use Tailwind defaults)
4. `postcss.config.js` - PostCSS setup for Tailwind
5. `tsconfig.json` - Strict TypeScript configuration
6. `index.html` - HTML entry point with font preloading
7. `src/index.css` - 3 Tailwind directives only
8. `src/main.tsx` - React entry point
9. `src/App.tsx` - All sections: Hero, Features, CTA

### Recommended Package Versions (January 2026)

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.1",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.6.0",
    "vite": "^5.4.0"
  }
}
```

**Research Insights:**
- React 18.3.1 preferred over 19.x for stability
- Tailwind v3.4.x over v4 for better compatibility
- Vite 5.x stable; avoid 7.x breaking changes

---

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

**Research Insights:**
- Enable `noUncheckedIndexedAccess` for safer array access
- Use standard function components, not `React.FC`
- `readonly` props signal immutability intent
- Named exports preferred over default exports

---

### Vite Configuration

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
  },
})
```

**Research Insights:**
- Target `es2020` for smaller bundles (15-20% reduction)
- esbuild minification is 10-100x faster than terser
- Skip code splitting for simple landing page

---

### Component Specifications

#### Hero Section
- Left-aligned content (Swiss Design asymmetry)
- Large headline: `text-4xl sm:text-5xl lg:text-6xl font-bold`
- Subheadline: `text-lg sm:text-xl text-gray-600 max-w-[65ch]`
- Primary CTA button: indigo-600 with hover state
- Optional: subtle gradient background

**Content:**
- Headline: "Organize your day, effortlessly"
- Subheadline: "TaskFlow helps busy professionals manage tasks with smart priorities, natural deadlines, and a distraction-free design."
- CTA: "Get Started Free"

#### Features Section
- 3-column grid: `grid-cols-1 md:grid-cols-3 gap-8`
- Each card: gradient icon, title, description
- Fixed height containers to prevent CLS
- Icons: CSS gradients with inline SVG

**Feature Content:**
1. **Smart Priorities** - "AI-powered task prioritization that learns your workflow and surfaces what matters most."
2. **Natural Deadlines** - "Set deadlines in plain language. 'Next Tuesday' or 'End of week' just works."
3. **Distraction-Free** - "A minimal interface designed for focus. No clutter, no complexity, just your tasks."

#### Call-to-Action Section
- Dark background (gray-900) for contrast
- Centered content with max-width constraint
- Inverted button colors (white on dark)
- Trust signal: star rating or user count

**Content:**
- Headline: "Start organizing your life today"
- Subheadline: "Join thousands of professionals who've simplified their daily workflow."
- CTA: "Try TaskFlow Free"

---

## Performance Optimizations

### Expected Performance Budget

| Metric | Target | Expected |
|--------|--------|----------|
| JS Bundle | < 50KB | ~35-45KB |
| CSS Bundle | < 20KB | ~10-15KB |
| Total Transfer | < 100KB | ~60-80KB |
| LCP | < 2.5s | < 1.5s |
| CLS | < 0.1 | < 0.05 |
| Lighthouse | > 90 | 95-100 |

### Key Optimizations

**Research Insights:**

1. **Font Loading:**
   - Use system font stack or self-hosted WOFF2
   - Apply `font-display: swap`
   - Preconnect to font origins if using Google Fonts

2. **Core Web Vitals:**
   - Set explicit dimensions on all containers (prevents CLS)
   - No lazy loading for above-fold content
   - Inline critical CSS for hero gradient

3. **What NOT to Do:**
   - Skip `React.memo` - no performance benefit for static content
   - Skip `React.lazy` - bundle is already small
   - Skip `useMemo`/`useCallback` - no expensive calculations

4. **Tailwind CSS:**
   - Purging automatically handles unused classes
   - Production CSS: ~10-15KB after purge
   - Add cssnano for additional 20-30% reduction

---

## Acceptance Criteria

### Functional Requirements
- [x] Page loads successfully with `npm install && npm run dev`
- [x] Hero section displays headline, subheadline, and CTA button
- [x] Features section shows 3 feature cards with gradient icons
- [x] CTA section displays final conversion message and button
- [x] All buttons have hover states (scale or color transition)

### Non-Functional Requirements
- [x] Fully responsive (mobile → tablet → desktop)
- [x] TypeScript strict mode enabled, no `any` types
- [x] Tailwind CSS only (no custom CSS except Tailwind config)
- [x] Clean, minimal aesthetic with Swiss Design principles
- [x] Left-aligned text (no centered body text)

### Quality Gates
- [x] No TypeScript errors (`tsc --noEmit`)
- [x] No build warnings
- [x] Dev server starts without errors
- [x] Lighthouse performance > 90

---

## Implementation Checklist

```
[x] 1. Create project directory and initialize with Vite
    npm create vite@latest . -- --template react-ts

[x] 2. Install Tailwind CSS
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

[x] 3. Configure tailwind.config.js with content paths

[x] 4. Add Tailwind directives to src/index.css

[x] 5. Update tsconfig.json with strict settings

[x] 6. Create src/App.tsx with all three sections:
    - Hero (headline, subheadline, CTA)
    - Features (3 cards with gradient icons)
    - CallToAction (dark bg, final CTA)

[x] 7. Update index.html with:
    - Proper meta tags
    - Font preloading (if using web fonts)

[x] 8. Test responsive design at:
    - 320px (mobile)
    - 768px (tablet)
    - 1024px+ (desktop)

[x] 9. Run Lighthouse audit

[x] 10. Final review and cleanup
```

---

## References

### Technology Documentation
- [Vite Getting Started](https://vitejs.dev/guide/)
- [Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Design References
- Swiss Design: Grid systems, typography hierarchy, asymmetric layouts
- Modern SaaS landing pages: Linear, Notion, Todoist
- Conversion optimization: specific CTAs, trust signals, mobile sticky CTAs

### Research Sources
- Framework docs researcher: Package versions, configuration patterns
- Best practices researcher: Conversion optimization, performance patterns
- Performance oracle: Core Web Vitals, bundle optimization
- TypeScript reviewer: Strict mode, component patterns
- Simplicity reviewer: YAGNI principles, minimal architecture
