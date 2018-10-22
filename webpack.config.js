const path = require('path');

const entryPoint = path.resolve(__dirname, 'client');
const outputPoint = path.resolve(__dirname, 'static');

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
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
