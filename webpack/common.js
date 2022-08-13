// shared config (dev and prod)
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      img: resolve(__dirname, "../src/images"),
      styles: resolve(__dirname, "../src/styles"),
      element: resolve(__dirname, "../src/features"),
      config: resolve(__dirname, "../src/configs"),
      lib: resolve(__dirname, "../src/libs"),
      utils: resolve(__dirname, "../src/utils"),
    }
  },
  context: resolve(__dirname, "../src"),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", {loader: "css-loader", options: {url: false}}],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", {loader: "css-loader", options: {url: false}}, "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[name].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
      {
        test: /\.(woff|ttf|eot|woff2)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new CopyPlugin({patterns: [{ from: "../src/fonts/**/*", to: "./" }]}),
  ],
};
