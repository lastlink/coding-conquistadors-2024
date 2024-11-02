import puppeteer from 'puppeteer';
import { openDb } from './database';
import links from '../Link_for_Funds_With_PrimaryKey.json';
import { LinkDetails } from './types/link';

async function scrapeUrls(urlDetails: LinkDetails[]) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const db = await openDb();
    await db.exec('CREATE TABLE IF NOT EXISTS scraped_data (id INTEGER PRIMARY KEY, link TEXT, data TEXT)');

    for (const urlDetail of urlDetails) {
        try {
            console.log(`Scraping words from ${urlDetail.Link}`);
            await page.goto(urlDetail.Link, { waitUntil: 'domcontentloaded' });
            // Scrape the HTML content and remove HTML tags
              const textContent = await page.evaluate(() => {
                const bodyText = document.body.innerText;
                return bodyText.toLocaleLowerCase();
            });

            // Convert the text content into a comma-separated list of words
            const words = textContent
              .replace(/[():;#©.]/g, '')
              .replace(/[,]/g, ' ')
              .split(/\s+/).filter(word => word && word.length > 0);
            const commaSeparatedWords = words.join(',');
            // const data = await page.evaluate(() => {
            //     // Example: Extract the page title
            //     return document.title;
            // });
            
            // const data = await scrape();
            if (commaSeparatedWords) {
              await db.run('INSERT INTO scraped_data (link, data) VALUES (?, ?)', urlDetail.Link, commaSeparatedWords);
            }

            // console.log('Scraping completed and data saved to database.');
            console.log(`Data from ${urlDetail.Link}: ${words.length}`);
        } catch (error) {
            console.error(`Error scraping ${urlDetail.Link}:`, error);
        }
    }

    await browser.close();
}

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

// const urlsToScrape = [
//     'https://example.com/page1',
//     'https://example.com/page2',
//     'https://example.com/page3'
// ];

scrapeUrls(links).catch(console.error);

// main().catch(console.error);
