const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'], //路径相关配置


    // list of files / patterns to load in the browser
    files: [
      'test/unit/**/*.spec.js'
    ],
    middleware: [],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/unit/**/*.spec.js': ['webpack', 'sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    // webpack配置
    webpack: {
      entry: './src/main.js',
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src')
        }
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          },
          {
            test: /\.(png|gif|jpe?g)(\?\S*)?$/,
            use: [{ loader: 'url-loader' }]
          },
          {
            test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
            use: [{ loader: 'url-loader' }]
          },
          {
            test: /\.vue$/,
            use: [{
              loader: 'vue-loader',
              options: {
                loaders: {
                  js: 'babel-loader'
                },
              }
            }]
          }
        ]
      }
    },
    coverageIstanbulReporter: {
      reports: [ 'text-summary', 'html' ],
      fixWebpackSourcePaths: true
    }
  })
}
