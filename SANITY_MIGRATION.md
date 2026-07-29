# Sanity CMS Setup

This project is wired for Sanity with an embedded Studio at `/studio`.

## Environment

Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-28
```

## Install

The code expects these packages:

```bash
npm install next-sanity sanity @sanity/image-url @portabletext/react @sanity/vision
```

In this environment, `node`/`npm` were not available on PATH, so the package metadata was updated but dependencies could not be installed here.

## Content Structure

Use singleton documents for fixed page content:

- Home Page
- About Page
- Services Page
- Solutions Page
- Partners Page
- Project Page
- Media Page
- Contact Page
- Community Impact Page
- Site Settings
- Navigation

Use collection documents for repeatable content:

- News Post
- Event Post
- Article Post
- Project
- Leader
- Community Impact Post

The site currently falls back to the existing hardcoded content when Sanity is not configured or when a collection is empty.
