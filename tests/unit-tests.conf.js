module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../www/lib/ionic/js/ionic.bundle.min.js',
      '../www/lib/angular-mocks/angular-mocks.js',
      '../www/lib/angular-translate/angular-translate.min.js',
      '../www/lib/ngCordova/dist/ng-cordova.min.js',
      '../www/js/app.js',
      '../www/js/*.js',
      '../www/js/**/*.js',
      'unit-tests/**/*tests.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
