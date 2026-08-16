import { chromium } from 'playwright';

const BASE = 'http://localhost:3002';
const browser = await chromium.launch();
const page = await browser.newPage();

const mark = () => page.evaluate(() => performance.now());

// Warm-up pass: force Turbopack to compile both routes before timing anything.
await page.goto(`${BASE}/`, { waitUntil: 'load' });
await page.click('nav a[href="/news-events"]');
await page.waitForSelector('text=Department News', { state: 'visible' });
await page.click('nav a[href="/"]');
await page.waitForSelector('text=Learn from Top', { state: 'visible' });
await page.click('nav a[href="/news-events"]');
await page.waitForSelector('text=Department News', { state: 'visible' });
await page.waitForTimeout(1000);

const results = [];
for (let run = 1; run <= 6; run++) {
  const a = await mark();
  await page.click('nav a[href="/"]');
  await page.waitForSelector('text=Learn from Top', { state: 'visible' });
  const b = await mark();

  await page.waitForTimeout(800);

  const c = await mark();
  await page.click('nav a[href="/news-events"]');
  await page.waitForSelector('text=Department News', { state: 'visible' });
  const d = await mark();

  await page.waitForTimeout(800);

  results.push({ run, newsToHomeMs: +(b - a).toFixed(1), homeToNewsMs: +(d - c).toFixed(1) });
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
const avg = (key) => results.reduce((a, r) => a + r[key], 0) / results.length;
console.log(`\nSteady-state avg News->Home: ${avg('newsToHomeMs').toFixed(1)}ms`);
console.log(`Steady-state avg Home->News: ${avg('homeToNewsMs').toFixed(1)}ms`);
