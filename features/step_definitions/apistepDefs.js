const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

//Dynamic Imports
const { getLibraries  } = require('../../dynamicImports');

let endpoint, response;

Given('I have the endpoint {string}', function (url) {
  endpoint = `https://jsonplaceholder.typicode.com${url}`;
});

When('I send a GET request to the endpoint', async function () {
  response = await fetch(endpoint);
});

Then('I should receive a 200 status code', async function () {
  expect(response.status).toBe(200);
});

Then('the response should contain user details', async function () {
  const data = await response.json();
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('name');
});