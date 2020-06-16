const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    landing: './src/landing.js',
    documentImage: './src/document-image.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, "dist"),
    publicPath: '/static/'
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      },
      {
        test: /\.html/,
        loader: 'html-loader'
      },
      {
        test: /\.(woff|ttf|woff2)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              output: 'font/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'landing.html',
      chunks: ['landing', 'vendor']     
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'documentImage.html',
      chunks: ['documentImage', 'vendor']     
    }),
  ]
}