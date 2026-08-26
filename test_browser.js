const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  
  await page.goto('http://localhost:8080');
  
  console.log("Clicking button...");
  await page.click('a[onclick="revealQuiz()"]');
  
  await new Promise(r => setTimeout(r, 1000));
  
  const stageHtml = await page.evaluate(() => document.getElementById('aiStage').innerHTML);
  console.log("Stage HTML length:", stageHtml.length);
  
  await browser.close();
})();
