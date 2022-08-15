import { sleep, filtraUrl } from "./functions.js";
import { startBrowser } from './browser.js';

let browser = undefined;

export async function scraper(keyword, page) {
    const start = (page - 1) * 100 + 1
    const googleUrl = `https://www.google.com/search?q=${keyword}&num=100&start=${start}`;
    const paginasDoBrowser = await getPage(googleUrl);
    const results = await getAndFilterUrls(paginasDoBrowser)
    if(browser) browser.close();
    return results
}
async function getPage(url) {
    browser = await startBrowser();
    const page = await browser.newPage();
    await page.goto(url);
    await sleep(5);
    await page.waitForSelector('a');
    return page;
}
async function getAndFilterUrls(page) {
    const urls = await page.evaluate(
        () => Array.from(document.querySelectorAll("a"), el => el.href)
    )
    return urls.filter(url => filtraUrl(url))
}