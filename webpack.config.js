const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.tsx", // 需打包的檔案
  },
  output: {
    filename: "bundle.js", // 打包後的檔案
    path: path.resolve("dist"), // 打包後的路徑
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8080,
  },
};
