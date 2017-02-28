module.exports = {
  entry: {
    // Package browser
    packageBrowser: './browser/'
  },
  output: {
    path: `${__dirname}/browser`,
    filename: 'browser.js',
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
  },
  resolve: {
    modules: ['src', 'node_modules']
  }
}
