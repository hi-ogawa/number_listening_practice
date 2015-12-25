module.exports = {
  entry: "./app/App.jsx",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      },
      // NOTE: copied from http://bline.github.io/bootstrap-webpack-example/
      { test: /\.woff2?$/, loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot$/,    loader: "file" },
      { test: /\.svg$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
    ],
    preLoaders: [
      {test: /\.jsx?$/, loader: "eslint", exclude: /node_modules/}
    ]
  }
}
