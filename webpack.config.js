const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // What we want to transform
        test: /\.(js|jsx)$/,
        // What we want to do with it
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
