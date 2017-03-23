const path = require('path');

const publicPath = __dirname + '/public';
console.log('--------------' + publicPath + '--------------');
module.exports = {
  entry: './src/client.js',
  output: {
    path: publicPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};
