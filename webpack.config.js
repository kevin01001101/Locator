const webpack = require('webpack');
const cssNext = require('postcss-cssnext');

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: "./src/js/bundles",
    filename: "[name].bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function() {
    return [cssNext];
  },
  devServer: {
    hot: true,
    inline: true,
    host: "0.0.0.0",
    port: "8001"
  }
};
