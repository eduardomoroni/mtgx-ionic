module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../www/lib/ionic/js/ionic.bundle.js',
      '../www/lib/angular-mocks/angular-mocks.js',
      '../www/lib/moment/moment.js',
      '../www/js/**.*.js',
      'unit-tests/**/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
