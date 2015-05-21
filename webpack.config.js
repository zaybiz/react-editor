var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var embedFileSize = 65536;

var config = {
  entry: ['./app/index.js'],

  output: {
    path: './public',
    filename: 'bundle.js'
  },

  resolve: {
    modulesDirectories: ['node_modules', './app'],
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new ExtractTextPlugin('styles.css')
  ],

  module: {
    loaders: [
      { 
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [new RegExp(path.join(__dirname, 'app'))]
      },
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.svg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'},
      {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
      {test: /\.jpg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
      {test: /\.gif/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
      {
        test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=' + embedFileSize
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [new RegExp(path.join(__dirname, 'app'))]
      }
    ]
  },

  eslint: {
    configFile: '.eslintrc'
  }

};

var development = _.extend({}, config, {
  devtool: 'eval'
});


module.exports = development;
module.exports.config = config;