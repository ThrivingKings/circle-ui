const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
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
    NODE_ENV === 'production' && new UglifyJSPlugin({
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV
      }
    })
  ]
}
