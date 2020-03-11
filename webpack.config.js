const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, '/examples/index.jsx'),
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/docs/'),
    chunkFilename: '[id].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Full Page',
    }),
  ],
  devtool: 'source-map',
};
