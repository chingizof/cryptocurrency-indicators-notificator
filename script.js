#! /usr/bin/env node
const axios = require("axios");

key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjJhMWY1NDE2YzI4YjU1Y2Q1ZmQ3ZGJmIiwiaWF0IjoxNjU0NzgxMjQ5LCJleHAiOjMzMTU5MjQ1MjQ5fQ.N2LkEIWc5zu6bpQgN5uBmMKg5zhSoeVbrUC7nnRKkug"
const rsi = {
  method: 'GET',
  url: `https://api.taapi.io/rsi?secret=${key}&exchange=binance&symbol=BTC/USDT&interval=1h`
};
const macd = {
    method: 'GET',
    url: `https://api.taapi.io/macd?secret=${key}&exchange=binance&symbol=BTC/USDT&interval=1h`
}


axios.request(rsi).then(function (response) {
	console.log(response.data.value);
}).catch(function (error) {
	console.error(error);
});

axios.request(macd).then(function (response) {
	console.log(response.data.value);
}).catch(function (error) {
	console.error(error);
});