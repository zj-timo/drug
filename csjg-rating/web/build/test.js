
var webpackMerge = require('webpack-merge');

var commonConfig = require('../webpack.base.js');

module.exports = webpackMerge(commonConfig, {
    output:{
      publicPath: '/'
    }
});