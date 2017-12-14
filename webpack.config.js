const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'the-app.js',
    path: path.resolve(__dirname)
    // path: path.resolve(__dirname, 'dist')
  },
  plugins: [
	new webpack.DefinePlugin({
	  FOO: JSON.stringify("5fa3b9")
	})
  ]
}