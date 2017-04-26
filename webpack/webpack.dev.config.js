var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './app/client.js',
  output: {
    path: path.join(__dirname, "../dist"),
    filename: 'bundle.js',
    publicPath: '/app/assets/'
  },
  module: {
    loaders: [
      {
        test : /\.js?/,
        exclude: '/node_modules/',
        loader : 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};

module.exports = config;
