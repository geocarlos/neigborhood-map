module.exports = {
  entry: [
    './js/app.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  deveServer: {
    contentBase: './dist'
  }
}
