// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "assets/js/app.min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/",
  }
});