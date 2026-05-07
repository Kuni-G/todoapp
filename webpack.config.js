const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',

  output: {
    path:     path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean:    true,
  },

  module: {
    rules: [
      // Transpile modern JS with Babel
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        use:     'babel-loader',
      },
      // Bundle CSS into JS (style-loader injects it at runtime)
      {
        test: /\.css$/i,
        use:  ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devServer: {
    static: './dist',
    hot:    true,
    port:   9000,
  },

  devtool: 'source-map',
};
