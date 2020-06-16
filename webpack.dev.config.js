const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    landing: './src/landing.js',
    documentImage: './src/document-image.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, "dist"),
    publicPath: '/static/'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    index: 'landing.html',
    port: 9000
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
            loader: 'style-loader'
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'landing.html',
      chunks: ['landing']     
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'documentImage.html',
      chunks: ['documentImage']     
    }),
  ]
}