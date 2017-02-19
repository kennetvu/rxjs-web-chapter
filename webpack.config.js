const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const conf = {
  entry: {
    'app': './src/index.js',
    'basic': './src/basic-observable/index.js'
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
      chunks: ['app'],
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'RxJS - Webchapter',
      chunks: ['basic'],
      template: 'src/index.html',
      filename:'basic.html'
    }),
  ]
};

module.exports = conf;