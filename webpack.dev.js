const base = require("./webpack.base.js");
const { merge } = require("webpack-merge");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = merge(base,{
    mode: "development",
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            "style-loader", "css-loader", "sass-loader"
          ],
        },
      ],
    },
    devServer: {
      port: 8080,
      open: true,
      devMiddleware: {
        stats: "errors-only",
      },
    },
    devtool: "eval-source-map",
    plugins: [
        new Dotenv({
          path: "./prod.env",
        }),
        ],
  });