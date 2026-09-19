# jasonschnitzer.github.io

Astro site for Jason Schnitzer's academic homepage, deployed on GitHub
Pages at `https://jasonschnitzer.github.io`.

## Structure

- `src/pages/index.astro` — home / bio / news
- `src/pages/research/` — research areas
- `src/pages/publications/` — publications list (edit the array in `index.astro`)
- `src/pages/cv/` — CV page; real CV PDF goes at `public/cv/cv.pdf`
- `src/pages/contact/` — contact info
- `src/layouts/BaseLayout.astro` — shared header/nav/footer
- `src/styles/global.css` — all site styling

## Local development

```sh
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Still open before this is truly final

- Replace `public/cv/cv.pdf` with your real, current CV.
- Confirm exact co-author names/order on the NOMS, TNSM, and IFIP/IEEE
  papers in `src/pages/publications/index.astro` — currently marked
  "et al." as a placeholder pending confirmation.
- Add a Google Scholar profile link once you have the URL (currently
  linked generically to scholar.google.com).

## Updating the live site

This repo is already live at `https://jasonschnitzer.github.io`. To push
this update:

```sh
cd academic-site
git add -A
git commit -m "Fill in real bio, research, and publications content"
git push
```

The existing GitHub Actions workflow (`.github/workflows/deploy.yml`)
rebuilds and redeploys automatically on every push to `main`.

If you're instead setting this up fresh in an empty
`jasonschnitzer.github.io` repo:

```sh
cd academic-site
git init
git add -A
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/jasonschnitzer/jasonschnitzer.github.io.git
git push -u origin main
```

Then in the repo: Settings → Pages → Source → GitHub Actions.
