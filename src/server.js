const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname,  '../dist/landing.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
})

app.get('/document', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname,  '../dist/documentImage.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
})

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, () => {
  console.log("Application is running on localhost:3000");
})