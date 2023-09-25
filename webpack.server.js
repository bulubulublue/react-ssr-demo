const path = require('path');
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node', // 声明是构建nodeJS,如果不声明，默认会认为打包在浏览器环境
  entry: './src/index.js', //入口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'), // 打包为/build/bundle,js
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  externals: [webpackNodeExternals()],
};