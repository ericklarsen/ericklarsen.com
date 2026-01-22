# Technical Context: Erick Larsen Personal Website

## Technology Stack

### Core Framework

- **Next.js 13.5.2**: React framework with App Router
- **React 18.2.0**: UI library
- **TypeScript 5.2.2**: Type-safe JavaScript

### Styling

- **Tailwind CSS 3.3.3**: Utility-first CSS framework
- **PostCSS 8.4.30**: CSS processing
- **postcss-nesting**: CSS nesting support
- **CSS Variables**: Theme colors and typography

### Build & Development

- **Bun**: Package manager (bun.lockb present)
- **ESLint 8.50.0**: Code linting
- **Prettier 3.0.3**: Code formatting

### Deployment

- **Static Export**: `output: "export"` in next.config.js
- No server-side rendering required

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts and theme
│   ├── page.tsx            # Home page (client component)
│   ├── globals.css         # Global styles and CSS variables
│   ├── page.css            # Home page specific styles
│   ├── not-found.tsx       # 404 page
│   ├── about/page.tsx      # About page
│   ├── blogs/page.tsx      # Blogs page
│   ├── experiments/page.tsx # Experiments page
│   └── fonts/              # Local font files
├── assets/
│   └── svgs/               # SVG icon components
│       └── expertises/     # Technology icons
└── components/
    ├── DarkMode/           # Theme toggle component
    ├── Footer/             # Site footer
    ├── MainWrapper/        # Page layout wrapper
    └── Navbar/             # Navigation component
```

## Configuration Files

### TypeScript (tsconfig.json)

- Target: ES5
- Module: ESNext with bundler resolution
- Path alias: `@/*` → `./src/*`
- Strict mode enabled

### Tailwind (tailwind.config.ts)

- Custom font families: mono, sans, caveat, anton
- Custom colors: primary, secondary, tertiary, sub, default
- Custom gradients: radial, conic

### ESLint (.eslintrc.json)

- Extends: next/core-web-vitals

### Prettier (.prettierrc.json)

- Custom formatting rules

## Key Technical Patterns

### Font Loading

Local fonts loaded via `next/font/local`:

- Space Grotesk (sans)
- Roboto Mono (mono)
- Caveat (handwritten)
- Anton (display)

### Theme System

- CSS variables for colors
- `data-theme` attribute on `<html>`
- localStorage persistence
- System preference detection
- Inline script for flash prevention

### Component Architecture

- Client components where interactivity needed (`"use client"`)
- Server components by default
- MainWrapper for consistent page layout
- SVG components for icons

## Development Commands

```bash
bun dev      # Start development server
bun build    # Build for production
bun start    # Start production server
bun lint     # Run ESLint
```

## Dependencies Summary

### Production

- next, react, react-dom
- tailwindcss, autoprefixer, postcss
- typescript

### Type Definitions

- @types/node, @types/react, @types/react-dom

## Browser Support

- Modern browsers with CSS variable support
- Prefers-color-scheme media query support
- localStorage for theme persistence
