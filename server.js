const http = require('http');
const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

http.createServer(app).listen(8080, () => {});
