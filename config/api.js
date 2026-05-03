const axios = require('axios');

const api = axios.create({
  baseURL: process.env.API_URL || 'https://api-magiccell.onrender.com',
  timeout: 10000
});

module.exports = api;