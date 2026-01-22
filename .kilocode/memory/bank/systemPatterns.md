# System Patterns: Erick Larsen Personal Website

## Architecture Patterns

### Next.js App Router Structure

The project uses Next.js 13+ App Router with file-based routing:

- Each route is a folder under `src/app/`
- `page.tsx` defines the route component
- `layout.tsx` provides shared layout
- Static export for deployment

### Component Organization

```
src/
├── app/           # Pages and routes
├── assets/        # Static assets (SVGs)
└── components/    # Reusable UI components
```

## Design Patterns

### Layout Wrapper Pattern

[`MainWrapper`](src/components/MainWrapper/MainWrapper.tsx) provides consistent page structure:

```tsx
<main>
    <Navbar />
    {children}
    <Footer />
</main>
```

All pages use this wrapper for consistent layout.

### Theme Toggle Pattern

Theme management in [`DarkMode.tsx`](src/components/DarkMode/DarkMode.tsx:1):

1. Check localStorage for saved preference
2. Fall back to system preference (`prefers-color-scheme`)
3. Set `data-theme` attribute on `<html>`
4. Persist changes to localStorage
5. Listen for system theme changes

### Flash Prevention Pattern

Inline script in [`layout.tsx`](src/app/layout.tsx:44) prevents theme flash:

- Runs before React hydration
- Sets initial theme from localStorage/system
- No visible flash on page load

### SVG as Components Pattern

All icons are React components in `src/assets/svgs/`:

- Allows dynamic styling via props
- Supports className for Tailwind
- Theme-aware with CSS classes

## Styling Patterns

### CSS Variables for Theming

Defined in [`globals.css`](src/app/globals.css:5):

```css
[data-theme="dark"] {
    --color-primary: #ffffff;
    --color-secondary: #92e242;
}
[data-theme="light"] {
    --color-primary: #373737;
    --color-secondary: #59b200;
}
```

### Tailwind Custom Configuration

Extended in [`tailwind.config.ts`](tailwind.config.ts:10):

- Custom font families mapped to CSS variables
- Custom colors mapped to CSS variables
- Enables theme-aware Tailwind classes

### Typography Scale

CSS variables for consistent typography:

- h1-h6 with responsive sizes
- Body text with line height
- Caption and small text variants

### Responsive Design

- Mobile-first approach
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Flexible layouts with `flex-wrap`
- Max-width container: `max-w-[90rem]`

## Data Patterns

### Static Data Arrays

Content defined as arrays in page components:

- `expertises` - Technology icons grouped by category
- `experiences` - Work history timeline
- `socials` - Social media links
- `experiments` - Project showcase

### Icon Render Functions

Expertise icons use render function pattern:

```tsx
(key: any, className: string) => <IconComponent key={key} className={className} />;
```

## Navigation Patterns

### Active Route Indication

[`Navbar.tsx`](src/components/Navbar/Navbar.tsx:31) uses `usePathname()`:

- Compares current path with menu item URL
- Shows underline indicator for active route

### External Links

Social and project links open in new tab:

```tsx
<Link href={url} target="_blank">
```

## Code Conventions

### File Naming

- Components: PascalCase folders with same-name `.tsx` file
- Pages: `page.tsx` in route folder
- SVGs: PascalCase component files

### Import Aliases

Path alias `@/*` for clean imports:

```tsx
import { Component } from "@/components/Component/Component";
```

### Client vs Server Components

- Default: Server components
- Interactive components marked with `"use client"`
- Client components: DarkMode, Navbar, Home page
