const path = require("path");

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
};
