var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'app/tests/**/*.test.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/foundation.min.js'
    ],
    preprocessors: {
      'app/tests/**/*.test.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};