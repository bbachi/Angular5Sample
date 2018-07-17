var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const HotModuleReplacementPlugin = require('clean-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin()
  ],

/*
  devServer: {
    historyApiFallback: true,
    historyApiFallback: {
        index: '/index.html',
    },
    stats: 'minimal',
    proxy: {
        "/api": {
          target: "http://localhost:3080",
          pathRewrite: {"^/api" : ""}
        }
    }
  }
  */
});
