const axios = require('axios');
const { BASE_URL } = require('../../config/configConstants');

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Accept"       : "application/json",
    "Content-Type" : "application/json",
    "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
  },
});

module.exports = apiClient;