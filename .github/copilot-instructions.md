<!-- Copilot / AI agent instructions for LemonFocus (LemonTech landing) -->
# LemonFocus — Copilot instructions

Quick reference: this is a small React + Vite landing site using Tailwind CSS. The app is a single-page static landing assembled from small presentational components in `src/components` and static assets in `public/`.

Key commands (from `package.json`):
- `npm run dev` — start Vite dev server (HMR)
- `npm run build` — produce production build (vite build)
- `npm run preview` — run a local preview of the production build
- `npm run lint` — run ESLint based on `eslint.config.js`

Important files and what to look at:
- `index.html` — HTML host; contains `<div id="root"></div>` and loads `/src/main.jsx`.
- `src/main.jsx` — app bootstrap (ReactDOM.createRoot) and strict-mode mounting.
- `src/App.jsx` — top-level composition of the page. Shows how components are composed (Header, Hero, Content, MarqueeBanner, Integration).
- `src/index.css` — Tailwind entry plus project-specific utility classes and animations (e.g. `.animate-float`, `.animate-marquee-move`, `.animate-button-glow`). Use these classes rather than adding inline styles where possible.
- `tailwind.config.js` — Tailwind content globs; update if you add non-standard file extensions or folders.
- `eslint.config.js` — ESLint rules. Note: `no-unused-vars` is configured to ignore names starting with an uppercase letter or underscore: `varsIgnorePattern: '^[A-Z_]'`.
- `public/` — static assets served at root. Files here are referenced as `/filename.ext` in JSX (see `App.jsx` usage of `/gradient.png`).

Project-specific conventions and patterns
- File extensions: components are `.jsx` and exported as default functional components. Follow PascalCase for filenames (e.g., `Header.jsx`).
- Imports: use relative imports from the same folder (e.g., `import Header from './components/Header'`). There are no path aliases configured.
- Assets: put images and static media into `public/` and reference them with absolute root paths like `/gradient.png`.
- Styling: prefer Tailwind utility classes. Project keeps a small set of custom utilities and keyframes in `src/index.css` using `@layer base` and `@apply` — reuse those classes when possible.
- Animations: there are custom named animations (see `index.css`). Use existing classes (`animate-float`, `animate-marquee-move`, `animate-button-glow`) to maintain consistent motion.
- Dependencies worth noting: `@splinetool/react-spline` (3D Spline scenes), `boxicons` (icon font), React 19. Keep these in mind when adding interactive 3D content or icons.

What agents should do when making changes
- Keep the SPA behavior intact: do not change `index.html` root id or how `main.jsx` is loaded unless adding server-side changes.
- When adding components:
  - Create `src/components/MyComponent.jsx` as a default-exported functional component.
  - Import in `src/App.jsx` and add it to the JSX tree to make it visible locally.
  - Use Tailwind classes for layout, and prefer existing utility classes in `src/index.css` for shared visual styles/animations.
- When adding assets: add to `public/` and reference via `/your-asset.png`. Do not import binary assets into `src/` unless you intentionally want them bundled.
- Update `tailwind.config.js` when adding files outside `./src/**/*.{js,ts,jsx,tsx}` or `index.html` so new classes are picked up.
- Run `npm run lint` after edits. ESLint is configured in `eslint.config.js` and flags unused vars (with the project-specific ignore pattern). Fix lint errors before opening a PR.

Integration and external behavior
- There is no routing or API layer in this repo. It is a static landing page; serverless or static-hosting deployments are expected.
- If you add 3D content, prefer `@splinetool/react-spline` (already installed). Check how existing components import and use it (search `Spline` in `src/components`).

Debugging and local verification
- Dev server: `npm run dev` — make a change, verify HMR updates in the browser.
- Build verification: `npm run build` then `npm run preview` to see the production output locally.
- Lint: `npm run lint`.

Tests and CI notes
- No tests or CI config detected. If you add tests, include scripts in `package.json` and document how to run them.

Examples from this repo
- Asset usage: `App.jsx` references `/gradient.png` directly in JSX — follow this pattern for hero/background images.
- Component composition: `App.jsx` shows import/order: Header, Hero, Content, MarqueeBanner, Integration — prefer keeping semantic order and minimal inline styles.

If anything is unclear or you want broader rules (commit message style, PR checklist, CI setup, TypeScript migration guidance), tell me which area to expand and I will iterate.
