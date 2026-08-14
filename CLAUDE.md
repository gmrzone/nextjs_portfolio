# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev      # dev server on http://localhost:3000
npm run build    # production build — the main correctness gate (tsc runs as part of it)
npm run start    # serve the production build
npm run lint     # eslint . (eslint.config.mjs, flat config: next/core-web-vitals)
npm run format   # prettier --write .
npm run check    # prettier --check .
```

There is **no test framework configured** — no Jest/Vitest/Playwright, no test files. Verification means `npm run build` + `npm run lint` + manually exercising the page in a browser. Don't invent test commands.

The contact form API route needs these in `.env.local` (untracked): `SEND_GRID_API_KEY`, `EMAIL` (SendGrid-verified sender), `TO_EMAIL` (recipient). Without them `/api/contact` fails at runtime, but builds still succeed.

## Stack versions

Next.js 16 **Pages Router** (still no `app/` directory, no Server Components), React 19, Tailwind CSS 4 (CSS-first `@theme` in `styles/globals.css`, no `tailwind.config.js`), TypeScript 5.9, Prettier 3, ESLint 9 (flat config in `eslint.config.mjs`). Builds run through **Turbopack** by default.

The site stays on the Pages Router — the upgrade deliberately did not migrate to the App Router. Don't introduce `app/` directory conventions.

### Tailwind v4 parity shims — read before touching `styles/globals.css`

The v3→v4 upgrade was held to pixel-identical output, which required four
deliberate deviations from stock v4. Each is commented in place; removing any
of them silently changes rendering:

1. **Utilities are imported unlayered** (split `@import "tailwindcss/..."` form rather than the single `@import "tailwindcss"`). Stock v4 puts utilities in `@layer utilities`, and unlayered CSS outranks layered CSS — so the Font Awesome `<link>` in `_document.tsx` would override every utility (its `line-height: 1` shrinks every icon box). Adding a plain `@import "tailwindcss"` back would reintroduce this.
2. **The built-in palette is pinned to v3 values** in `@theme` (v4 rebuilt it in a wider gamut).
3. **`space-*` utilities are reimplemented with v3 semantics** (margin on all-but-first, not all-but-last). v4's version adds a trailing gap when the last child is `display:none`, shrinks shrink-to-fit parents, and shifts content after a zero-width first child — all three occur in this codebase.
4. **Hand-rolled CSS variables use a `--ui-*` prefix, not `--color-*`.** v4 compiles `bg-sec` to `var(--color-sec)`, so a `--color-sec` of your own in `:root` will hijack the utility. Never name a non-theme variable `--color-*`.

Also note: v4 orders competing same-property colour utilities **alphabetically** (v3 used config order). Any element carrying two conflicting colour utilities — e.g. a component default plus a caller override — resolves differently than it did under v3. Where a caller must win, the override is marked `!`.

## Architecture

**Single-page site.** `pages/index.tsx` is the only real page; it renders every section (`hero`, `skills`, `projects`, `about`, `testimonial`, `contact`) in order inside `MainLayout`. Each section lives in `components/home/<section>/index.tsx`. There is no routing to speak of — navigation is in-page scrolling.

**`MainLayout` uses a render-prop child, not plain children.** Its `children` is `(headerRef) => ReactNode`, so the page can thread the fixed header's ref down to `MainHero` (which measures header height for its own offset). Any new page must call `children(headerRef)`, not render children directly. See [components/common/MainLayout.tsx](components/common/MainLayout.tsx).

**Nav active-link tracking is imperative and structure-dependent.** A scroll listener in `MainLayout` iterates `mainRef.current.children` — treating every direct child of `<main>` as a scroll section — reads each one's `id`, `offsetTop`, `clientHeight` and `marginTop`, then toggles the `nav-active` class on `mobileNav` anchors via `querySelector('a[href=<id>]')`. Consequences when adding or reordering a section: it must be a **direct** child of `<main>` and carry an `id` matching the nav link's `href` / `data-scroll` value, or highlighting silently breaks. Nav height is hardcoded (70px ≥992px, 76px below) in both the listener and the `<style jsx>` `margin-top` of `#main`.

**Animation is DOM-imperative throughout, not state-driven.** The dominant pattern: `useRef` on a container, `IntersectionObserver` in `useEffect`, then `classList.add/remove` of _Tailwind utility class names_ (`-translate-x-full`, `opacity-0`, `after:translate-x-full`, …) on children. Those class strings must also appear literally somewhere in the JSX so Tailwind's content scanner emits them — a class only ever passed to `classList.add` would be purged. Roughly half the components under `components/home/` do this. Expect refs and `useEffect` where you might expect state.

**Modals are portals into a `_document`-declared node.** `pages/_document.tsx` renders `<div id="modal">`; `ProjectDetailModal` and `DesktopFullSkillModalItem` `createPortal` into `document.getElementById("modal")`. Both are imported with `next/dynamic` + `{ ssr: false }` because they touch the DOM at module scope.

**Poppins is self-hosted via `next/font`.** `pages/_app.tsx` loads it with `next/font/google` and publishes the family as a `--font-poppins-loaded` CSS variable on `:root` (through `<style jsx global>`, deliberately — next/font's own `variable` className would need a wrapper element, and that extra node would break this layout's `h-full` chain). The Tailwind `--font-poppins` theme token reads that variable, so the `font-poppins` utility is unchanged. Two rules in `customInput.module.scss` reference `var(--font-poppins)` rather than the literal family name, because next/font hashes it. Don't reintroduce a `fonts.googleapis.com` `@import`.

**Dark mode is hand-rolled on `<body>`, no next-themes.** The `dark:` variant is declared as `@custom-variant dark (&:is(.dark *))` in `globals.css`. An inline blocking script in `_document.tsx` reads `localStorage.getItem('dark')` and adds `.dark` to `document.body` before paint (avoids flash); `components/shared/ThemeSwitcher/` toggles both the body class and `localStorage`. The `.dark` selector also re-defines the CSS custom properties in `globals.css`. So theming works two ways at once — Tailwind `dark:` variants _and_ CSS vars — and both need updating for a new themed color.

**All content is hardcoded in [components/home/data.ts](components/home/data.ts).** `skillsData`, `reviewData`, `ProjectData` plus their interfaces, with images imported statically from `public/` as `StaticImageData`. Editing portfolio content (projects, skills, testimonials) means editing this one file, not a CMS or fetch. Icons are Font Awesome **Pro** class strings (`fad fa-code`, `fal fa-phone-alt`) loaded from a CDN `<link>` in `_document.tsx` — icons render as blanks if that CDN is unreachable.

### Three styling systems coexist

1. **Tailwind utilities** — the default for layout and color.
2. **`*.module.scss`** in `styles/` — reserved for the three components with complex multi-stage transitions (`customInput`, `reviewSlider`, `themeSwitcher`), driven by CSS custom properties defined in `globals.css` (e.g. `--input-transition-in-*-delay`, `--slider-item-width`).
3. **`<style jsx>`** — component-scoped CSS in ~14 components, for things Tailwind can't express (`backface-visibility`, `will-change`, per-breakpoint `margin-top`).

`styles/globals.css` does two things worth knowing: it maps `h1`–`h3` to custom responsive font-size tokens (`text-5xl-sm` / `-500` / `-992`) through hand-written media queries rather than Tailwind's responsive variants, and it **overrides Tailwind's `.container`** with fixed pixel widths per breakpoint. Custom `@theme` tokens you'll hit constantly: the `desktop-st` (992px) breakpoint (`--breakpoint-desktop-st`), paired light/dark color tokens (`main`/`main-dark`, `sec`/`sec-dark`, `bg-sec`/`bg-sec-dark`), and `hero-*` height tokens. Note the file now holds **both** the Tailwind theme (`@theme`, `--color-*`) and the hand-rolled runtime variables (`:root`/`.dark`, `--ui-*`) — these are separate systems that must not share names.

## Conventions

- Components are typed `NextPage<Props>` even when they aren't pages — an established (if unidiomatic) habit across the codebase.
- Prettier: 4-space indent, 140 print width, trailing commas, `bracketSameLine: true`. Run `npm run format` after edits; the wide print width means don't hand-wrap JSX.
- Files carry a `Created on … Copyright (c) 2021 AFzal Saiyed` trailing comment block; keep it when editing those files.
- `utils/typewritterText.ts` (`TypeWritterText`) drives the hero/about typing effect by writing `innerHTML` into a ref'd `<span>` on a self-rescheduling `setTimeout`. It has no stop/cleanup method, so instances keep running after unmount — don't construct one per render.

## Known cruft

`npm run lint` exits 0 but reports **6 warnings** — pre-existing `react-hooks/immutability` and `react-hooks/refs` violations in `TestimonialSlider.tsx` and `ThemeSwitcher/index.tsx`, newly flagged by eslint-config-next 16. They are downgraded from errors in `eslint.config.mjs` on purpose: fixing them means changing runtime timing in animation code with no test coverage. Address deliberately, not as drive-by cleanup.

`tsconfig.json`'s `include` lists a nonexistent `components/shared/header/NavbarLogo.js` three times. The root file `dzafsdg` is a stray SVG fragment, not code. Neither affects the build.
