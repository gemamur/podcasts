const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");


module.exports = {
  context: path.join(__dirname, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()], //"@" : path.resolve(__basePath, "src"),
  },
  entry: {
    app: "./index.tsx",
    styles: "./styles.scss",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader",
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      scriptLoading: "blocking",
    }),
    ],
};