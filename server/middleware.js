var morgan = require('morgan');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require('express');
var config = require('../webpack.config')
var compiler = webpack(config);

module.exports = app => {

    app.use(webpackHotMiddleware(compiler, {
        log: console.log
    }))

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {colors: true}
    }))

    app.use(morgan('dev'))
    app.use(express.static('dist'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

}
