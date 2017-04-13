const http = require('http');
const express = require('express');

const app = express();

app.use('/js', express.static(__dirname + '/src/js'));
app.use('/css', express.static(__dirname + '/src/css'));
app.use('/lib', express.static(__dirname + '/src/lib'));
app.use('/images', express.static(__dirname + '/src/images'));
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

http.createServer(app).listen(8080, () => {});
