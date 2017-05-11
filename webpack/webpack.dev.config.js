var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  devtool: 'source-map',
  entry: './app/client.js',
  output: {
    path: path.join(__dirname, "../dist"),
    filename: 'bundle.js',
    publicPath: './'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          // stage-0 arrow function 相关
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy' ],
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        loader: "file-loader?name=[name].[ext]"
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

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'framework.js',
      minChunks: (module) => (
        module.resource &&
        module.resource.indexOf('node_modules') !== -1 &&
        module.resource.indexOf('.css') === -1
      ),
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false }
    // })
    // new ExtractTextPlugin({
    //   filename: 'style.css',
    // }),
  ]
  // devServer: {
  //   contentBase: path.join(__dirname, "../app"),
  //   compress: true,
  //   port: 8080,
  // }
};

module.exports = config;
