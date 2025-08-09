# Portfolio (Vite + React + Tailwind) — Ready for GitHub Pages

This project is preconfigured to deploy to **GitHub Pages** using the `gh-pages` package.

## Quick start

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Commit this project to a GitHub repo (e.g., `portfolio`).
2. **Important:** If your site will be served at `https://<user>.github.io/<repo>/`, set the `base` in `vite.config.js`:
   ```js
   // vite.config.js
   export default defineConfig({
     plugins: [react()],
     base: '/<repo>/'   // <-- set this to your repo name
   })
   ```
   If your repo is a user/organization site (root domain `username.github.io`), you can leave `base` commented out.
3. Deploy:
   ```bash
   npm run deploy
   ```
   This builds to `dist/` and publishes it to the `gh-pages` branch. Then enable Pages in **Settings → Pages** (source: `gh-pages` branch).

## Customization
- Edit content in `src/App.jsx` (the `PROFILE` object).
- Replace `/public/resume.pdf` with your actual resume and update any links if needed.
- Tailwind is configured in `tailwind.config.js` and `src/index.css`.

## Local scripts
- `npm run dev` — start Vite dev server with HMR
- `npm run build` — build production bundle to `dist/`
- `npm run preview` — preview production build locally
- `npm run deploy` — build and publish `dist/` to GitHub Pages
