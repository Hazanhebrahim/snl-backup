# Project Architecture

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- File-based routing

## Folder Structure

```text
src/
  app/
    about/page.tsx
    contact/page.tsx
    partners/page.tsx
    services/page.tsx
    solutions/page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
      page-shell.tsx
      site-footer.tsx
      site-header.tsx
    sections/
      page-intro.tsx
    ui/
      button.tsx
      card.tsx
      section.tsx
  content/
    site.ts
  lib/
    utils.ts
```

## Routes

- /
- /about
- /services
- /solutions
- /partners
- /contact

## Reusable UI System

- Button: shared CTA system with variants (primary, secondary, ghost) and sizes.
- Card: standard content card for service and solution blocks.
- Section: consistent spacing, typography, and container behavior for content sections.
- PageIntro: reusable hero/intro block for inner pages and page-level call to action.

## Composition Pattern

- Global shell in app layout through page-shell component.
- Page content assembled from section components.
- Shared content source in content/site.ts to avoid hard-coded duplication.

## Scalability Notes

- Add new routes by creating app/<route>/page.tsx.
- Keep page copy/data in content modules as the site grows.
- Extend UI primitives in components/ui before creating page-specific variants.
- Introduce route groups (e.g., app/(marketing), app/(legal)) when route volume increases.
