#! /usr/bin/env node
const axios = require("axios");

//key for taapi
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjJhMWY1NDE2YzI4YjU1Y2Q1ZmQ3ZGJmIiwiaWF0IjoxNjU0NzgxMjQ5LCJleHAiOjMzMTU5MjQ1MjQ5fQ.N2LkEIWc5zu6bpQgN5uBmMKg5zhSoeVbrUC7nnRKkug" 
//key for https://technical-analysis-api.com/dashboard
key2 = "PWYAJJK4M7X7RHLD236XJCJWSIHKBRB35NZKTB6F2NY37M3Y"
key3 = "OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX"

let symbols = ["BTC", "ETH", "XRP", "SOL", "DOT", "ADA"]
let symbol = ""

const rsi = {
  method: 'GET',
  url: `https://api.taapi.io/rsi?secret=${key}&exchange=binance&symbol=BTC/USDT&interval=1h`
};
const macd = {
    method: 'GET',
    url: `https://api.taapi.io/macd?secret=${key}&exchange=binance&symbol=BTC/USDT&interval=1h`
}
let coin_info = {
    method:'GET',
    url: `https://technical-analysis-api.com/api/v1/analysis/${symbol}?apiKey=${key2}`,
}

let eod_aapl = {
    method: "GET",
    url: `https://eodhistoricaldata.com/api/technical/AAPL?api_token=${key3}&fmt=json&function=ema&filter=last_ema`
}

// axios.request(rsi).then(function (response) {
// 	console.log(response.data.value);
// }).catch(function (error) {
// 	console.error(error);
// });

// axios.request(macd).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });



// axios.request(coin_info).then(function (response) {
// 	console.log(response.data.strategies.rsi.data);
// }).catch(function (error) {
// 	console.error(error);
// });

let rsiLevels = []
// let Hashmap = new Map()


// async function fillRsiMap() {
//     for (let i = 0; i < symbols.length; i++) {
//         symbol = symbols[i]
//         coin_info = `https://technical-analysis-api.com/api/v1/analysis/${symbol}?apiKey=${key2}`
//         axios.request(coin_info).then(function (response) {
//             let rsi = response.data.strategies.rsi.data[0]
//             rsiLevels.push(rsi) //кидаем в массив значения
//             Hashmap.set(symbols[i], rsi)
//             console.log(Hashmap)
//             return Hashmap
//         }).catch(function (error) {
//             console.error(error);
//         });
//     }
// }

// console.log("array")
// console.log(rsiLevels) //нужно чтобы команда запускалась после того как for сверху сработает. Использовать async, await? хз


function sortRsiMap(map) {
    sortedRsiLevels = new Map([...map.entries()].sort( (a,b) => a[1] - b[1]));
    console.log("hello", sortedRsiLevels)
}


// axios.request(eod_aapl).then(function (response) {
//     console.log("#response")
// 	console.log(response.data);
// }).catch(function (error) {
//     console.log("#error")
// 	console.error(error);
// });

const promise = new Promise((resolve, reject) => {
    for (let i = 0; i < symbols.length; i++) {
        symbol = symbols[i]
        coin_info = `https://technical-analysis-api.com/api/v1/analysis/${symbol}?apiKey=${key2}`
        axios.request(coin_info).then(function (response) {
            let rsi = response.data.strategies.rsi.data[0]
            rsiLevels.push(rsi) //кидаем в массив значения
            Hashmap.set(symbols[i], rsi)
            console.log(Hashmap)
            sortRsiMap(Hashmap)
            return Hashmap
        }).catch(function (error) {
            console.error(error);
            reject(error)
        });
    }
})



promise.then(res => {
    //if not rejected, code
    sortedRsiLevels = new Map([...Hashmap.entries()].sort( (a,b) => a[1] - b[1]));
    console.log("hello", sortedRsiLevels)
}).catch(err => {
    //return false; 
    console.log(err)
})