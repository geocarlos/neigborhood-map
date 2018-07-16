const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Extract CSS
const extractCSS = new ExtractTextPlugin('styles.min.css');

module.exports = {
  entry: ['./js/app.js'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules|index.html/,
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        use: extractCSS.extract(['css-loader', 'postcss-loader'])
      }, {
        test: /\.(js)$/,
        exclude: /node_modules|index.html/,
        use: ['eslint-loader']
      }
    ]
  },
  plugins: [extractCSS],
  resolve: {
    extensions: ['.js']
  }
}
