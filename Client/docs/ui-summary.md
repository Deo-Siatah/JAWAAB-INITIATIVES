## 1. Structure
- Pages / routes (components used inside each)
  - Homepage: Hero (background image + overlay + CTAs), About section (`src/pages/Aboutpage.jsx`), Programs orbit (`src/pages/ProgramRadial.jsx`), Impact stats (`src/pages/ImpactPage.jsx`), Projects list (`src/pages/ProjectsPage.jsx`), Newsletter (`src/pages/Newsletter.jsx`), Media carousel (`src/components/ImageCarousel.jsx`), Footer (`src/components/Footer.jsx`)
  - About: About copy, mission/vision/values toggles, decorative logo watermark (`src/pages/Aboutpage.jsx`)
  - Programs (radial): Rotating program orbit + center detail (framer-motion) (`src/pages/ProgramRadial.jsx`, uses `src/components/Programs.jsx` for data)
  - Impact: Animated counters + CTA (`src/pages/ImpactPage.jsx`, `src/components/DigitNumber.jsx`)
  - Projects: Grid of project cards (`src/pages/ProjectsPage.jsx`, `src/components/ProjectsCard.jsx`)
  - Media/Slides: data array `src/pages/MediaSlides.jsx` displayed by `src/components/ImageCarousel.jsx`

- Reused components
  - `Navbar.jsx` (used site-wide / at top of `Homepage`) — menu, dropdowns, donate button
  - `Footer.jsx` (used on Homepage)
  - `Button` component (`src/components/ui/button.jsx`) — used across CTAs
  - `Card` components (`src/components/ui/card.jsx`) — used by Projects and About dropdowns
  - `ImageCarousel`, `DigitNumber`, `ProjectsCard` — reused within their pages

## 2. Visual System (current)
- Color palette (CSS variables & usage)
  - Primary token set (defined in `src/index.css` :root / .dark):
    - --background, --foreground, --card, --card-foreground, --popover, --popover-foreground
    - --primary, --primary-foreground
    - --secondary, --secondary-foreground
    - --muted, --muted-foreground
    - --accent, --accent-foreground
    - --destructive
    - --border, --input, --ring
    - --chart-1 .. --chart-5
    - --sidebar, --sidebar-foreground, --sidebar-primary, --sidebar-primary-foreground, --sidebar-accent, --sidebar-accent-foreground, --sidebar-border, --sidebar-ring
  - Values (as written in `src/index.css`): mostly oklch(...) notation (e.g. `oklch(1 0 0)`, `oklch(0.145 0 0)`, etc.) — see `:root` and `.dark` blocks in `src/index.css` for full list.
  - Tailwind utility colors used in components (explicit classes): `bg-emerald-500`, `bg-emerald-600`, `bg-emerald-300`, `text-emerald-700`, `text-emerald-300`, `bg-emerald-50`, `bg-emerald-100`, `bg-emerald-500/90`, plus an inline hex: `bg-[#f5f9f6]` (Navbar / dropdown backgrounds).

- Typography
  - Defined tokens in `src/index.css`: `--font-sans` = "Inter", `--font-heading` = "Poppins"; helper classes: `.font-inter`, `.font-poppins`, `.font-merriweather`.
  - Headings: use `font-heading`/`Poppins` (examples: `text-4xl`, `text-5xl`, `text-6xl` for H1/H2 across pages).
  - Body / UI: `Inter` or system sans via `.font-inter` and Tailwind `text-base`/`text-lg`/`text-sm`.
  - Weights: heavy heading weights use `font-extrabold`/`font-bold`; body text uses `font-medium` / `font-semibold` in CTAs.

- Spacing / layout patterns
  - Utility-first Tailwind layout: flex + grid mix. Common patterns:
    - Grid: `grid grid-cols-1 md:grid-cols-2`, `lg:grid-cols-3` (Projects, About split)
    - Flex: horizontal CTAs, nav links, carousel inner row (`flex gap-6`)
    - Centered content: container widths via `max-w-4xl`, `max-w-5xl`, `max-w-6xl`, `max-w-7xl`, `max-w-8xl` and `mx-auto px-6`.
    - Breakpoints: `md`, `lg`, `xl` used throughout.

- Design tokens / theme file
  - Single source: `src/index.css` — contains CSS custom properties (tokens), animations, and base Tailwind layer.

## 3. Components inventory
- Buttons
  - Central `Button` component: `src/components/ui/button.jsx` (built with `cva`).
  - Variant options (defined in `buttonVariants`): `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`.
  - Sizes: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg` plus `size` prop. Many usages pass custom classes (rounded-full, bg-emerald-500, border-2, etc.) rather than relying purely on variants.

- Cards / story blocks
  - `Card` primitives: `src/components/ui/card.jsx` exposes `Card`, `CardContent`, `CardHeader`, `CardFooter`, etc. Base styles use token classes (`bg-card text-card-foreground rounded-xl border py-6 shadow-sm`).
  - `ProjectsCard` (`src/components/ProjectsCard.jsx`) composes `Card` with an image area (aspect-video), tag pill (`bg-emerald-100 text-emerald-700`), description, and a 'Learn more' link.

- Images
  - Hero: background image set via inline style in `Homepage.jsx` (`backgroundImage: url(...)`) — not an `<img>` element.
  - Project / slide images: `<img src=... loading="lazy" decoding="async" className="object-cover"/>` (ProjectsCard and ImageCarousel). Carousel does triple-render for seamless loop and uses `loading="lazy"`.
  - Aspect control: `aspect-video`, fixed height classes (e.g. `h-[420px]`) and `object-cover` used for crop behavior.

- Nav and footer
  - `Navbar.jsx`: fixed header, logo + title, desktop dropdowns (hover open), mobile slide-over menu, donate CTA (Button). Uses inline hex `#f5f9f6` for dropdown backgrounds.
  - `Footer.jsx`: three-column responsive grid (`md:grid-cols-3`), contact info, link list, social icons (react-icons), logo image usage.

## 4. Content patterns
- Story / content data sources
  - Hardcoded arrays in code:
    - `src/pages/MediaSlides.jsx` (media slides array of {id,image,caption})
    - `src/pages/ProjectsPage.jsx` (local `Projects` array of objects used to render cards)
    - `src/components/Programs.jsx` (programs list imported into ProgramRadial)
  - No CMS or external API integrations present in repository.

- CTA / action-word copy examples
  - Primary CTAs: "Donate", "Become a Volunteer", "Subscribe"
  - Secondary / links: "Learn More", "Explore All Projects", "Learn More About Our Impact"

## 5. Tech notes
- Styling approach
  - Tailwind CSS utility-first system (imported in `src/index.css`) + custom CSS tokens in `src/index.css`.
  - Small UI primitives (Button/Card) implemented with `class-variance-authority` (`cva`) and a `cn` helper in `src/lib/utils.js`.

- Animation / scroll libraries (from `package.json` and imports)
  - `framer-motion` — used in `ProgramRadial.jsx`, `ImageCarousel.jsx` (motion + hooks).
  - `tw-animate-css` imported into `src/index.css`.
  - `react-type-animation` used in `ProjectsPage.jsx` for headline typing effect.

- Other notable libs
  - `lucide-react`, `react-icons` (icons), `class-variance-authority`, `clsx`, `tailwind-merge`, `@radix-ui/react-slot`.

- Logo / images
  - Logo: `src/assets/jaawaab-logo.png` (PNG). Hero: `src/assets/jawaab-hero.jpg`. Other images: several WebP files under `src/assets` (e.g. `Teseru.webp`, `jawaab3.webp`, `Jawaab4.webp`).

## 6. Known gaps (quick assessment)
- No routing layer: `App.jsx` directly renders `Homepage` — pages are components, not actual router routes.
- Content is hardcoded in page files (no CMS or data layer) — `MediaSlides`, `Projects`, `programs` are inline arrays.
- Inconsistent use of the `Button` variants: many calls add bespoke Tailwind classes instead of using the `variant` API consistently.
- Images: hero uses a full-size background JPG (inline style); mixed formats (jpg + webp) and no central optimization pipeline.
- Visual tokens live in `src/index.css` but many components still use hard-coded Tailwind color classes (emerald-*) and inline hex values, which fragments theming.

--
File: [docs/ui-summary.md](docs/ui-summary.md)
