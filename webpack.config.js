const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV || 'production'

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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV
      }
    })
  ]
}
