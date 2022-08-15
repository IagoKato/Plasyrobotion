import puppeteer from 'puppeteer';

export async function startBrowser() {
	let browser;
	try {
		console.log("Abrindo o navegador......");
		browser = await puppeteer.launch({
			headless: true,
			args: ["--disable-setuid-sandbox"],
			'ignoreHTTPSErrors': false
		});
	} catch (err) {
		console.log("Ocorreu um erro => : ", err);
	}
	return browser;
}
