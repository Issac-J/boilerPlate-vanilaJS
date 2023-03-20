const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },

  mode: "development",

  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    watchFiles: "./index.html",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "BoilerPlate",
      template: "./index.html",
      inject: "body",
    }),
  ],
};
