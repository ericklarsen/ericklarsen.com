# Active Context: Erick Larsen Personal Website

## Current State

The website is a functional personal portfolio with core pages implemented. It's ready for static deployment but has placeholder content in some sections.

## Recent Changes

- Initial project setup with Next.js 13 App Router
- Implemented dark/light theme system
- Created home page with experience and expertise sections
- Added navigation with About, Experiments, and Blogs routes
- Set up responsive layout with MainWrapper component

## Active Development Areas

### Pages Status

| Page        | Status         | Notes                                            |
| ----------- | -------------- | ------------------------------------------------ |
| Home        | ✅ Complete    | Full content with experience, expertise, socials |
| About       | ⚠️ Placeholder | Generic content, needs personalization           |
| Experiments | ✅ Complete    | Shows 2 projects with GitHub links               |
| Blogs       | ⚠️ Placeholder | Empty state message, no blog system              |
| 404         | ✅ Complete    | Simple not found page                            |

### Components Status

| Component   | Status      | Notes                                  |
| ----------- | ----------- | -------------------------------------- |
| Navbar      | ✅ Complete | Responsive with active route indicator |
| Footer      | ✅ Complete | Copyright with dynamic year            |
| DarkMode    | ✅ Complete | Full theme toggle with persistence     |
| MainWrapper | ✅ Complete | Consistent page layout                 |

## Known Issues

1. **About page content**: Currently has generic placeholder text
2. **Blogs page**: No blog functionality implemented
3. **Email link commented out**: Social email link is disabled in code

## Pending Features

- [ ] Personalize About page content
- [ ] Implement blog system (MDX or CMS integration)
- [ ] Add more experiments/projects
- [ ] Consider adding contact form
- [ ] SEO optimization (meta tags per page)
- [ ] Analytics integration

## Current Focus

The site is in a stable state suitable for deployment. Primary focus should be on:

1. Content updates (About page, more experiments)
2. Blog implementation if desired
3. Any design refinements

## Environment Notes

- Development: `bun dev`
- Build: `bun build` (static export)
- Package manager: Bun (bun.lockb present)

## Quick Reference

### Key Files to Edit

- **Home content**: [`src/app/page.tsx`](src/app/page.tsx:1)
- **About content**: [`src/app/about/page.tsx`](src/app/about/page.tsx:1)
- **Experiments**: [`src/app/experiments/page.tsx`](src/app/experiments/page.tsx:1)
- **Theme colors**: [`src/app/globals.css`](src/app/globals.css:32)
- **Site metadata**: [`src/app/layout.tsx`](src/app/layout.tsx:30)

### Adding New Pages

1. Create folder under `src/app/`
2. Add `page.tsx` with component
3. Wrap content in `<MainWrapper>`
4. Add to Navbar menu if needed
