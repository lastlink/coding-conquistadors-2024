import puppeteer from 'puppeteer';
import { openDb } from './database';
import chalk from 'chalk';
// from https://mikehodges.net/OrlandoHousing/webScraping/data/Link_for_Funds_With_PrimaryKey.json
import links from '../Link_for_Funds_With_PrimaryKey.json';
import { LinkDetails, LinkScrape } from './types/link';
import { performance } from 'perf_hooks';
import * as fs from 'fs';

async function scrapeUrls(urlDetails: LinkDetails[]) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Get the current timestamp
    const timestamp: string = new Date().toISOString().replace(/[:.]/g, '-');
    const dbName: string = "db-" + timestamp;
    const db = await openDb(dbName);
    await db.exec('DROP TABLE IF EXISTS scraped_data');
    await db.exec('CREATE TABLE IF NOT EXISTS scraped_data (id INTEGER PRIMARY KEY, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, "error" INTEGER DEFAULT 0, resource TEXT, description TEXT, pageTitle TEXT, link TEXT, data TEXT)');
    const start: number = performance.now();
    const data: LinkScrape[] = [];

    for (const urlDetail of urlDetails) {
        try {
            console.log(`Scraping words from ${urlDetail.Link}`);
            await page.goto(urlDetail.Link, { waitUntil: 'domcontentloaded' });
            // Scrape the HTML content and remove HTML tags
            const textContent = await page.evaluate(() => {
                const bodyText = document.body.innerText;
                const title = document.title;
                return {
                    title,
                    bodyText: bodyText?.toLocaleLowerCase() ?? ""
                }
            });

            // Convert the text content into a comma-separated list of words
            const words = textContent.bodyText
              .replace(/[():;#©.]/g, '')
              .replace(/[,]/g, ' ')
              .split(/\s+/).filter(word => word && word.length > 0);
            const commaSeparatedWords = words.join(',');
            
            // const data = await scrape();
            if (commaSeparatedWords) {
              await db.run('INSERT INTO scraped_data (pageTitle, resource, description, link, data) VALUES (?, ?, ?, ?, ?)', textContent.title, urlDetail.Resource, urlDetail.Description, urlDetail.Link, commaSeparatedWords);
              data.push({ PageTitle: textContent.title, Resource: urlDetail.Resource, Description: urlDetail.Description, Link: urlDetail.Link, Words: commaSeparatedWords.split(','), Error: false }); // Add the link and words to the data array, Error: false });
            }

            console.log(`Data from ${urlDetail.Link}: ${words.length}`);
        } catch (error) {
            console.error(chalk.red(`Error scraping ${urlDetail.Link}:`, error));
            let errorMessage;
            if (error instanceof Error) {
                // If the error is an instance of Error, use the message property
                errorMessage = error.message;
            } else {
                // If the error is not an instance of Error, convert it to a string
                errorMessage = String(error);
            }  
            await db.run('INSERT INTO scraped_data (error, resource, description, link, data) VALUES (1, ?, ?, ?, ?)', urlDetail.Resource, urlDetail.Description,urlDetail.Link, errorMessage);
            data.push({ Resource: urlDetail.Resource, Description: urlDetail.Description, Link: urlDetail.Link, ErrorMessage: errorMessage, Error: true });
        }
        
        const current: number = performance.now();
        const elapsedSeconds: number = (current - start) / 1000;
        console.log(`Time elapsed at iteration ${urlDetail.ID}: ${elapsedSeconds.toFixed(3)} seconds`);
    }

    await browser.close();
    const end: number = performance.now();
    const totalElapsedSeconds: number = (end - start) / 1000;

    console.log(`Total execution time: ${totalElapsedSeconds.toFixed(3)} seconds`);
    const jsonString: string = JSON.stringify(data, null, 2);
    const filename = `output_${timestamp}.json`;

    fs.writeFile(filename, jsonString, (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log(`File ${filename} has been written successfully`);
        }
    });
    console.log(chalk.green(`Scraping completed and data saved to database: db${dbName}.`));
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
  const db = await openDb("database");
  await db.exec('CREATE TABLE IF NOT EXISTS scraped_data (id INTEGER PRIMARY KEY, data TEXT)');

  const data = await scrape();
  if (data) {
    await db.run('INSERT INTO scraped_data (data) VALUES (?)', data);
  }

  console.log('Scraping completed and data saved to database.');
}

scrapeUrls(links).catch(console.error);

// main().catch(console.error);
