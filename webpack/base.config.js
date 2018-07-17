var path =  require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ["./index.ts"],
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname,"../dist"),
    publicPath : path.resolve(__dirname,"../dist")
  },
  target:"node",
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader',exclude: ["node_modules","GMESSAPP"]},
      { test: /\.json/, loader: "json-loader", exclude:/node_modules/,},
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",".json"]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'],{
      root: process.cwd(),
      verbose: true,
      dry: false
  }),
  ]
}
