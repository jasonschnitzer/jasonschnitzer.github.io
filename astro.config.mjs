// @ts-check
import { defineConfig } from 'astro/config';

// This repo is a username.github.io "root" site, so no `base` path is needed
// and the site is served straight from https://<username>.github.io/
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
});
