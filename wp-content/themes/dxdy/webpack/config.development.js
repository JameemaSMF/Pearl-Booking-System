// You can add other webpack configuration (plugins, loaders, etc).
// Apart from ES6 Import/Export, Gulp was able to do all my other work so this file is mainly empty.
const entry = require('./entry');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry,
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  output: {
    filename: 'scripts.js',
    path: '/src/js/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
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
  plugins: [new ESLintPlugin()],
  resolve: {
    extensions: [
      '.js','.jsx'
    ]
  }
};
