// You can add other webpack configuration (plugins, loaders, etc).
// Apart from ES6 Import/Export, Gulp was able to do all my other work so this file is mainly empty.
const entry = require('./entry');
const ESLintPlugin = require('eslint-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry,
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'scripts.js',
    path: '/src/js/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }]
      }
    ]
  },
  plugins: [
    new ESLintPlugin(),
    new UglifyJsPlugin({
        test: /\.(js|jsx)$/,
        uglifyOptions: {
          ie8: false,
          ecma: 8,
          output: {
            comments: false,
            beautify: false,
          },
          warnings: false
        }
      })
  ],
  resolve: {
    extensions: [
      '.js','.jsx'
    ]
  }
};
