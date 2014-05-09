// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      // we should lazy load this files !!!
      'app/bower_components/blueimp-load-image/js/load-image.js',
      'app/bower_components/blueimp-load-image/js/load-image-ios.js',
      'app/bower_components/blueimp-load-image/js/load-image-orientation.js',
      'app/bower_components/blueimp-load-image/js/load-image-meta.js',
      'app/bower_components/blueimp-load-image/js/load-image-exif.js',
      'app/bower_components/blueimp-load-image/js/load-image-exif-map.js',
      'app/bower_components/blueimp-canvas-to-blob/js/canvas-to-blob.js',
      'app/bower_components/jquery-file-upload/js/cors/jquery.postmessage-transport.js',
      'app/bower_components/jquery-file-upload/js/cors/jquery.xdr-transport.js',
      'app/bower_components/jquery-file-upload/js/vendor/jquery.ui.widget.js',
      'app/bower_components/jquery-file-upload/js/jquery.fileupload.js',
      'app/bower_components/jquery-file-upload/js/jquery.fileupload-process.js',
      'app/bower_components/jquery-file-upload/js/jquery.fileupload-validate.js',
      'app/bower_components/jquery-file-upload/js/jquery.fileupload-image.js',
      'app/bower_components/jquery-file-upload/js/jquery.fileupload-audio.js',
      'app/bower_components/jquery-file-upload/js/jquery.fileupload-video.js',
      'app/bower_components/jquery-file-upload/js/jquery.fileupload-ui.js',
      'app/bower_components/jquery-file-upload/js/jquery.fileupload-angular.js',
      'app/bower_components/jquery-file-upload/js/jquery.iframe-transport.js',
      //END we should lazy load this files !!!
      'app/scripts/**/**.**.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/client/mock/**/*.js',
      'test/client/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
