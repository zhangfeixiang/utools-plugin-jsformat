const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js',
    preload: './src/preload/index.js'
  },
  target: 'node',
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin(), new CopyPlugin({ patterns: [{ from: 'public' }, { from: 'README.md' }] })],
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
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.vue$/,
        use: [{ loader: 'vue-loader', options: { optimizeSSR: false } }]
      },
      {
        test: /\.stylus$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [new TerserPlugin({ exclude: /preload\.js/ })]
  }
};