#! /usr/bin/env node
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {from_currency: 'BTC', function: 'CURRENCY_EXCHANGE_RATE', to_currency: 'USD'},
  headers: {
    'X-RapidAPI-Key': 'cc3c9af169msha0799c7002f9500p1ff86fjsn368908177a70',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});