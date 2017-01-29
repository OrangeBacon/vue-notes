require('./check-versions')();
var config = require('../config');
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV);
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.conf');

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.build.port;


var app = express();
var compiler = webpack(webpackConfig);

compiler.run(function(err,sats){
  if(err) console.log(err);
  app.use(express.static('dist'));
});

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
});
