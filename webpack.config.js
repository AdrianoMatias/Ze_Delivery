const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js"
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['', '.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    },
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['transform-object-rest-spread']
        }
        }, 
        {
          test: /\.css/,
          use: [
              { loader: ['style-loader', 'css-loader', 'source-map-loader', 'graphql-tag / loader' ]},
          ]
      },
    ]
  }
};