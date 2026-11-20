// Regenerates public/og-image.png and public/apple-touch-icon.png.
// Run from the capsure folder:  node scripts/make-images.cjs
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.goto('file://' + path.resolve(__dirname, 'og-image.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.resolve(__dirname, '../public/og-image.png') });
  await p.setViewportSize({ width: 180, height: 180 });
  await p.setContent(`<body style="margin:0;background:#0e1116"><svg width="180" height="180" viewBox="0 0 32 32"><path d="M24.5 10.5A10 10 0 1 0 24.5 21.5" fill="none" stroke="#f2f1ec" stroke-width="3.4" stroke-linecap="round"/><circle cx="16" cy="16" r="3.8" fill="#3ddc97"/></svg></body>`);
  await p.screenshot({ path: path.resolve(__dirname, '../public/apple-touch-icon.png') });
  await b.close();
})();
