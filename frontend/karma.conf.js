module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    files: [ './app/specBundler.js' ],
    frameworks: [ 'jasmine' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-webpack',
    ],
    preprocessors: {
      './app/specBundler.js': [ 'webpack' ]
    },
    reporters: [ 'dots' ],
    webpack: {
      cache: true,
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
              presets: ["react", "es2015"]
            }
          }
        ],
      }
    },
    webpackMiddleware: {
      noInfo: true,
    }
  });
};
