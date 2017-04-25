const Server = require('./server.js');
const port = (process.env.PORT || 8080);
const app = Server.app();

if (process.env.NODE_ENV !== 'prodcution') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../webpack/webpack.dev.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPathdist
    }));
}

app.listen(port)
