var path = require('path');

var DEV = process.env.NODE_ENV !== 'production',
    src = [path.resolve(__dirname, 'src/js/index.js')];

DEV && src.push('webpack-dev-server/client?http://localhost:8080');

module.exports = {
  entry: src,
  output: {
    filename: 'js/index.js',
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: ''
        } },
      { test: /\.scss/,
        loaders: ['style', 'css', 'sass'] } ]
  }
};
