var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
      },
      {
        test : /\.scss$/,
        loaders : ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
    // rules: [
    //   {
    //     test : /\.scss$/,
    //     use: ExtractTextPlugin.extract({
    //       fallback: "style-loader",
    //       use: ['css-loader', 'sass-loader']
    //     }),
    //   }
    // ],
  },

  // plugins: [
  //   new ExtractTextPlugin({
  //     filename: 'style.css',
  //   }),
  // ]
};

module.exports = config;
