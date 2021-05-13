const puppeteer = require('puppeteer');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');
const $ = require('cheerio');

const ps5_url =
  'https://www.walmart.com/ip/Sony-PlayStation-5-Digital-Edition/493824815';
const rand_url =
  'https://www.walmart.com/ip/Nintendo-Switch-Lite-Console-Turquoise/306029956';

async function initBrowser() {
  const browser = await puppeteer.launch({
    headless: false,
    // args: ['--no-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();
  await page.goto(ps5_url);
  return page;
}

async function sendNotification() {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ameshalexburner@gmail.com',
      pass: 'Water@123',
    },
  });

  let textToSend = 'Go get that Playstation 5!';
  let htmlText = `<a href=\"${ps5_url}\">Link</a>`;

  let info = await transporter.sendMail({
    from: '"Walmart Monitor" <ameshalexusa@gmail.com>',
    to: 'ameshalexusa@gmail.com',
    subject: 'Playstation 5 IS IN STOCK',
    text: textToSend,
    html: htmlText,
  });

  console.log('Message Sent: %s', info.messageId);
}

async function checkStock(page) {
  await page.reload();
  let content = await page.evaluate(() => document.body.innerHTML);
  $("link[itemprop='availability']", content).each(function () {
    let out_of_stock = $(this)
      .attr('href')
      .toLowerCase()
      .includes('outofstock');
    if (out_of_stock) {
      console.log('out of stock');
      monitor();
    } else {
      sendNotification();
    }
  });
}

async function monitor() {
  const page = await initBrowser();
  let job = new CronJob(
    '*/30 * * * *',
    function () {
      checkStock(page);
    },
    null,
    true,
    null,
    null,
    true
  );
  job.start();
}

monitor();
