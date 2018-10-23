const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryPoint = path.resolve(__dirname, 'client/src');
const outputPoint = path.resolve(__dirname, 'client/dist');

module.exports = {
  entry: path.resolve(entryPoint, 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: outputPoint
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
      filename: 'index.html',
      minify: true
    })
  ]
}
