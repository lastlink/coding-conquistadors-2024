import puppeteer from 'puppeteer';
import { openDb } from './database';

async function scrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Example scraping logic
  const data = await page.evaluate(() => {
    const result = document.querySelector('h1')?.textContent;
    return result;
  });

  await browser.close();
  return data;
}

async function main() {
  const db = await openDb();
  await db.exec('CREATE TABLE IF NOT EXISTS scraped_data (id INTEGER PRIMARY KEY, data TEXT)');

  const data = await scrape();
  if (data) {
    await db.run('INSERT INTO scraped_data (data) VALUES (?)', data);
  }

  console.log('Scraping completed and data saved to database.');
}

main().catch(console.error);
