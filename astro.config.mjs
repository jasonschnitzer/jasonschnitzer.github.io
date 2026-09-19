// @ts-check
import { defineConfig } from 'astro/config';

// jasonschnitzer.github.io is a "root" GitHub Pages site, so it's served
// straight from https://jasonschnitzer.github.io/ with no base path.
export default defineConfig({
  site: 'https://jasonschnitzer.github.io',
});
