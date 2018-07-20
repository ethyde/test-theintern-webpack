const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: `${process.env.NODE_ENV}`,
  context: path.resolve(__dirname, './app'),
  devtool: "inline-source-map",
  entry: {
    core: ['./a.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    library: 'core'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 9000,
    hot: true
  }
}