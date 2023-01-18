import puppeteer from 'puppeteer';
//const puppeteer = require('puppeteer.js');
//console.log("puppeteer",puppeteer)

async function functionTest(){
    const browser = await puppeteer.launch();

// Create a new page
    const page = await browser.newPage();

// Website URL to export as pdf
    const website_url = 'https://www.bannerbear.com/blog/how-to-download-images-from-a-website-using-puppeteer/';
}
functionTest()
