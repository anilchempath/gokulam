var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : SRC_DIR,
        loader : 'babel'
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  }
};
 
module.exports = config;