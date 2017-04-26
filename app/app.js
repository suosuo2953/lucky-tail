const path = require('path')
const express = require('express')
const port = (process.env.PORT || 8080);
const http = require('http');

const app = express();
if (process.env.NODE_ENV !== 'prodcution') {

  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack/webpack.dev.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPathdist
  }));
}

const indexPath = path.join(__dirname, 'index.html');
app.use(express.static(path.resolve(__dirname, '/dist')));
app.get('*', function (req, res) { res.sendFile(indexPath) });
http.createServer(app).listen(port, () => {
  console.log(`-------server started at port ${port}--------`);
})
