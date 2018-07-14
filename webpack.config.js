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
        test: /\.(js|jsx)$/,
        exclude: /node_modules|index.html/,
        use: ['babel-loader']
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|index.html/,
        use: ['eslint-loader']
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
