# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev      # dev server on http://localhost:3000
npm run build    # production build — the main correctness gate (tsc runs as part of it)
npm run start    # serve the production build
npm run lint     # next lint (.eslintrc: next + next/core-web-vitals)
npm run format   # prettier --write .
npm run check    # prettier --check .
```

There is **no test framework configured** — no Jest/Vitest/Playwright, no test files. Verification means `npm run build` + `npm run lint` + manually exercising the page in a browser. Don't invent test commands.

The contact form API route needs these in `.env.local` (untracked): `SEND_GRID_API_KEY`, `EMAIL` (SendGrid-verified sender), `TO_EMAIL` (recipient). Without them `/api/contact` fails at runtime, but builds still succeed.

## Stack versions (deliberately pinned old — check before using newer APIs)

Next.js 13 **Pages Router** (no `app/` directory, no Server Components, no `next/font`), React 18, Tailwind CSS 3 (JS config, `@tailwind` directives), TypeScript 4.9, Prettier 2, ESLint 8 (`.eslintrc`, not flat config). Don't write App Router or Tailwind 4 syntax here.

## Architecture

**Single-page site.** `pages/index.tsx` is the only real page; it renders every section (`hero`, `skills`, `projects`, `about`, `testimonial`, `contact`) in order inside `MainLayout`. Each section lives in `components/home/<section>/index.tsx`. There is no routing to speak of — navigation is in-page scrolling.

**`MainLayout` uses a render-prop child, not plain children.** Its `children` is `(headerRef) => ReactNode`, so the page can thread the fixed header's ref down to `MainHero` (which measures header height for its own offset). Any new page must call `children(headerRef)`, not render children directly. See [components/common/MainLayout.tsx](components/common/MainLayout.tsx).

**Nav active-link tracking is imperative and structure-dependent.** A scroll listener in `MainLayout` iterates `mainRef.current.children` — treating every direct child of `<main>` as a scroll section — reads each one's `id`, `offsetTop`, `clientHeight` and `marginTop`, then toggles the `nav-active` class on `mobileNav` anchors via `querySelector('a[href=<id>]')`. Consequences when adding or reordering a section: it must be a **direct** child of `<main>` and carry an `id` matching the nav link's `href` / `data-scroll` value, or highlighting silently breaks. Nav height is hardcoded (70px ≥992px, 76px below) in both the listener and the `<style jsx>` `margin-top` of `#main`.

**Animation is DOM-imperative throughout, not state-driven.** The dominant pattern: `useRef` on a container, `IntersectionObserver` in `useEffect`, then `classList.add/remove` of *Tailwind utility class names* (`-translate-x-full`, `opacity-0`, `after:translate-x-full`, …) on children. Those class strings must also appear literally somewhere in the JSX so Tailwind's content scanner emits them — a class only ever passed to `classList.add` would be purged. Roughly half the components under `components/home/` do this. Expect refs and `useEffect` where you might expect state.

**Modals are portals into a `_document`-declared node.** `pages/_document.tsx` renders `<div id="modal">`; `ProjectDetailModal` and `DesktopFullSkillModalItem` `createPortal` into `document.getElementById("modal")`. Both are imported with `next/dynamic` + `{ ssr: false }` because they touch the DOM at module scope.

**Dark mode is hand-rolled on `<body>`, no next-themes.** Tailwind `darkMode: "class"`. An inline blocking script in `_document.tsx` reads `localStorage.getItem('dark')` and adds `.dark` to `document.body` before paint (avoids flash); `components/shared/ThemeSwitcher/` toggles both the body class and `localStorage`. The `.dark` selector also re-defines the CSS custom properties in `globals.css`. So theming works two ways at once — Tailwind `dark:` variants *and* CSS vars — and both need updating for a new themed color.

**All content is hardcoded in [components/home/data.ts](components/home/data.ts).** `skillsData`, `reviewData`, `ProjectData` plus their interfaces, with images imported statically from `public/` as `StaticImageData`. Editing portfolio content (projects, skills, testimonials) means editing this one file, not a CMS or fetch. Icons are Font Awesome **Pro** class strings (`fad fa-code`, `fal fa-phone-alt`) loaded from a CDN `<link>` in `_document.tsx` — icons render as blanks if that CDN is unreachable.

### Three styling systems coexist

1. **Tailwind utilities** — the default for layout and color.
2. **`*.module.scss`** in `styles/` — reserved for the three components with complex multi-stage transitions (`customInput`, `reviewSlider`, `themeSwitcher`), driven by CSS custom properties defined in `globals.css` (e.g. `--input-transition-in-*-delay`, `--slider-item-width`).
3. **`<style jsx>`** — component-scoped CSS in ~14 components, for things Tailwind can't express (`backface-visibility`, `will-change`, per-breakpoint `margin-top`).

`styles/globals.css` does two things worth knowing: it maps `h1`–`h3` to custom responsive font-size tokens (`text-5xl-sm` / `-500` / `-992`) through hand-written media queries rather than Tailwind's responsive variants, and it **overrides Tailwind's `.container`** with fixed pixel widths per breakpoint. Custom `tailwind.config.js` additions you'll hit constantly: the `desktop-st` (992px) breakpoint, paired light/dark color tokens (`main`/`main-dark`, `sec`/`sec-dark`, `bg-sec`/`bg-sec-dark`), and `hero-*` height tokens.

## Conventions

- Components are typed `NextPage<Props>` even when they aren't pages — an established (if unidiomatic) habit across the codebase.
- Prettier: 4-space indent, 140 print width, trailing commas, `jsxBracketSameLine: true`. Run `npm run format` after edits; the wide print width means don't hand-wrap JSX.
- Files carry a `Created on … Copyright (c) 2021 AFzal Saiyed` trailing comment block; keep it when editing those files.
- `utils/typewritterText.ts` (`TypeWritterText`) drives the hero/about typing effect by writing `innerHTML` into a ref'd `<span>` on a self-rescheduling `setTimeout`. It has no stop/cleanup method, so instances keep running after unmount — don't construct one per render.

## Known cruft

`tsconfig.json`'s `include` lists a nonexistent `components/shared/header/NavbarLogo.js` three times. The root file `dzafsdg` is a stray SVG fragment, not code. Neither affects the build.
