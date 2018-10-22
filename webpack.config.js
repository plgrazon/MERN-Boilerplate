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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
