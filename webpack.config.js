const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    preload: './src/preload/index.js'
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : false,
  target: 'node',
  plugins: [new CleanWebpackPlugin(),  new CopyPlugin({ patterns: [{ from: 'public' }, { from: 'README.md' }] })],
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    alias: { '@': path.join(__dirname, 'src') }
  },
  module: {
    rules: [
      {
        test: /\.js$/, //正则匹配.js后缀文件,使用babel-loader进行解析
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
  }
};
