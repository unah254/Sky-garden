import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://skygarden.search.windows.net/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
    'Access-Control-Allow-Headers': true,
    'api-key': '4F2408C83BBB69BB31AE97737ED6EE2F',
    'content-type': 'application/json'
  },
});

