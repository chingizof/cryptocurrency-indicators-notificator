const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const fs = require("fs")

const markup = `
<ul class="fruits">
  <li class="fruits__mango"> Mango </li>
  <li class="fruits__apple"> Apple </li>
</ul>
`;

// const $ = cheerio.load(markup);
// console.log(pretty($.html()));

// const mango = $(".fruits__mango");
// console.log(mango.html());

// const listItems = $("li");
// console.log(listItems.length); // 2
// listItems.each(function (idx, el) {
//   console.log($(el).text());
// });

// const ul = $("ul");
// ul.append("<li>Banana</li>");
// ul.prepend("<li>Pineapple</li>");
// console.log(pretty($.html()));

// const url = "https://www.binance.com/ru/futures/BTCUSDT"
const url = "https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT"

// async function scrapeData() {
//     try {
//         const { data } = await axios.get(url)
//         const $ = cheerio.load(data)
//         const MA25 = $(".css-11y6cix") //".css-11y6cix" works
        
//         console.log("#SECOND")
//         console.log(MA25.next().next().children()[0])
//     } catch(err) {
//         console.error(err)
//     }
// }

async function scrapeData() {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        const MA25 = $("div.valueValue-OYqjX7Sg") //".css-11y6cix" works
        
        console.log("#SECOND")
        console.log(MA25)
    } catch(err) {
        console.error(err)
    }
}

// const url = "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3"

// async function scrapeData() {
//     try {
//         const { data } = await axios.get(url)
//         const $ = cheerio.load(data)
//         const MA25 = $(".firstHeading")
//         console.log(MA25.text())
//         console.log("#SECOND")
//         console.log(MA25)
//     } catch(err) {
//         console.error(err)
//     }
// }

scrapeData()