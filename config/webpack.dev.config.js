'use strict';

var path = require("path");
var webpack = require('webpack');
var config = require('./base');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var merge = require('webpack-merge');

var rootPath = config.commonPath.rootPath;     // 项目根目录
var srcPath = config.commonPath.srcPath;             // 开发源码目录
var publicPath = config.commonPath.public;


module.exports = merge(config, {
  entry: {
    app : [
      'eventsource-polyfill',
      'webpack-hot-middleware/client?reload=true',
      'webpack/hot/only-dev-server',
      path.join(srcPath, "index.js")
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'axios': 'axios',
    'react-router': 'ReactRouter'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: publicPath,
    port: 8080,
    stats: { colors: true },
    proxy: {
      '/userInfo/*': {
        target: 'http://localhost:8083',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new BrowserSyncPlugin({
      host: '127.0.0.1',
      port: 9090,
      proxy: 'http://localhost:9000/',
      logConnections: true,
      notify: false
    }, {
      reload: false
    })
  ]
});
