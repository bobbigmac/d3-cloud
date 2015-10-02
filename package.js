Package.describe({
  name: 'bobbigmac:d3-cloud',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Unofficial wrapper for d3-cloud: Wordle-inspired word cloud layout',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bobbigmac/d3-cloud',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "d3-cloud": "1.2.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use(["d3js:d3@3.5.5"], 'client');
  api.use(['cosmos:browserify@0.8.0'], 'client');

  api.addFiles([
    'client.browserify.js',
    // 'client.browserify.options.js',
    'd3-cloud.js'
  ], 'client');
  
  api.export("d3cloud", 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bobbigmac:d3-cloud');

  api.addFiles('d3-cloud-tests.js', 'client');
});
