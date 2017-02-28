module.exports = {
  entry: {
    circleui: './src/index.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
