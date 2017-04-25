const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const conf = {
  entry: {
    'app': './src/app/index.js',
    'common': './src/common.js',
    'basic-observable': './src/basic-observable/index.js',
    'observable': './src/c-observable/index.js',
    'operators': './src/d-operators/index.js',
    'mouse': './src/e-mouseevents/index.js',
    'promise': './src/f-promise/promise.js',
    'fetch': './src/g-fetch/index.js',
    'react': './src/h-react/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["url-loader?limit=10000&mimetype=application/font-woff"] },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["file-loader"] },
      { 
        test: /\.(png|jpg)$/,
        use: [
          "file-loader",
        ]

      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 3000,
    stats: 'minimal',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'RxJS - Webchapter',
      chunks: ['common','app'],
      template: 'src/index.html'
    }),

    new HtmlWebpackPlugin({
      title: 'RxJS - Webchapter',
      chunks: ['common','basic-observable'],
      template: 'src/index.html',
      filename:'basic-observable.html'
    }),
    new HtmlWebpackPlugin({
      title: 'RxJS - Webchapter',
      chunks: ['common','observable'],
      template: 'src/index.html',
      filename:'observable.html'
    }),
    new HtmlWebpackPlugin({
      title: 'RxJS - Webchapter',
      chunks: ['common','operators'],
      template: 'src/index.html',
      filename:'operators.html'
    }),
    new HtmlWebpackPlugin({
      title: 'RxJS - Webchapter',
      chunks: ['common','mouse'],
      template: 'src/index.html',
      filename:'mouse.html'
    }),
    new HtmlWebpackPlugin({
      title: 'RxJS - Webchapter',
      chunks: ['common','promise'],
      template: 'src/index.html',
      filename:'promise.html'
    }),
    new HtmlWebpackPlugin({
      title: 'RxJS - Webchapter',
      chunks: ['common','fetch'],
      template: 'src/fetch.html',
      filename:'fetch.html'
    }),
    new HtmlWebpackPlugin({
      title: 'RxJS - Webchapter',
      chunks: ['common', 'react'],
      template: 'src/react.html',
      filename: 'react.html'
    }),
    new CopyWebpackPlugin([
      {from: './src/logo.png'}
    ]),
  ]
};

module.exports = conf;
