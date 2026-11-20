import { defineConfig } from 'astro/config';
import { site } from './src/content.js';

// The site address: your own setting in content.js, otherwise the address
// Netlify gives the build (your custom domain once connected).
const siteUrl = site.url || process.env.URL || 'http://localhost:4321';

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
});
