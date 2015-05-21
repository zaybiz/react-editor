var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var config = require('./webpack.config.js').config;

var production = _.extend({}, config, {
  plugins: config.plugins.concat(new webpack.NoErrorsPlugin()),
  eslint: _.extend({}, config.eslint, {
    emitError: true
  })
});

module.exports = production;