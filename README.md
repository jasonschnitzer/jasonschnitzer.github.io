# academic-site

A minimal Astro site for an engineering academic's personal/lab page, built
to deploy on GitHub Pages at `https://YOUR-USERNAME.github.io`.

## Structure

- `src/pages/index.astro` — home / bio
- `src/pages/research/` — research overview
- `src/pages/publications/` — publications list (edit the array in `index.astro`)
- `src/pages/cv/` — CV page; drop your real CV at `public/cv/cv.pdf`
- `src/pages/contact/` — contact info
- `src/layouts/BaseLayout.astro` — shared header/nav/footer
- `src/styles/global.css` — all site styling

## Local development

```sh
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Before you push

1. Replace `YOUR-USERNAME` in `astro.config.mjs` and in the GitHub/Scholar
   links across the pages.
2. Replace "Jane Q. Engineer" and all `[bracketed placeholders]` with your
   real name, department, bio, research areas, and publications.
3. Add your real CV PDF at `public/cv/cv.pdf`.

## Deploying to GitHub Pages

This repo already includes `.github/workflows/deploy.yml`, which builds and
deploys the site automatically on every push to `main`.

One-time setup on GitHub:

1. Push this repo to `YOUR-USERNAME.github.io` on GitHub (see command below).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` — the workflow will build and publish automatically.
   Your site will be live at `https://YOUR-USERNAME.github.io` within a
   minute or two.

```sh
cd academic-site
git init
git add -A
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```
