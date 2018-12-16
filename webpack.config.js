const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: isDev && 'inline-source-map',
  devServer: {
    hot: isDev && true
  },
  stats: 'minimal',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, isDev ? 'public' : 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      inject: true
    })
  ]
};

if (isDev) {
  module.exports.plugins.push(
    new StyleLintPlugin({
      files: './src/**/*.scss',
      syntax: 'scss'
    }),
    new webpack.HotModuleReplacementPlugin()
  );
} else {
  module.exports.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css'
    })
  );
}
