module.exports = {
  source: {
    html: 'source/pug/',
    stylesheets: 'source/sass/',
    javascripts: {
      path: 'source/javascript/',
      fileName: 'application',
      pathLib: 'source/javascript-lib/',
      fileNameLib: 'lib.js',
    }
  },
  build: {
    html: './',
    stylesheets: 'dist/stylesheet/',
    javascripts: {
      path: 'dist/javascript/',
    }
  },
  browsers: [
    '> 1%',
    'last 2 versions',
    'iOS 10',
    'Firefox ESR',
    'Opera 12.1'
  ]
};
