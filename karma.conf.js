module.exports = function(karma) {
  karma.set({
    plugins: ['karma-babel-preprocessor', 'karma-browserify', 'karma-jasmine', 'karma-jasmine-jquery', 'karma-phantomjs-launcher'],

    frameworks: ['browserify', 'jasmine-jquery', 'jasmine'],

    files: [
      './node_modules/jquery/dist/jquery.min.js',
      'src/**/*.js',
      'test/**/*.js'
    ],

    preprocessors: {
      'src/**/*.js' : ['babel'],
      'test/**/*.js': ['babel']
    },

    browserify: {
      debug: true,
      transform: ['babelify']
    },

    reporters: ['progress'],

    browsers: ['PhantomJS']
  })
}
