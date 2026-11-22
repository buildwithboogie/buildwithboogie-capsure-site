import { defineConfig } from 'astro/config';
import { site } from './src/content.js';

// The site address: your own setting in content.js (set this once your
// domain is live), otherwise a local address for previews.
const siteUrl = site.url || 'http://localhost:4321';

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
});
