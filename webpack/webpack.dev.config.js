var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './app/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/app/assets/'
  },
  module: {
    loaders: [
      {
        test : /\.js?/,
        include : path.join(__dirname, 'app'),
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
