require.config({
  baseUrl: 'js',
  paths: {
    'angular': '../bower_components/angular/angular',
    'angular-animate': '../bower_components/angular-animate/angular-animate',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'angularAMD': '../bower_components/angularAMD/angularAMD',
    // Factories
    'page-factory': './factories/page-factory'
  },
  shim: {
    'angular-animate': ['angular'],
    'angular-sanitize': ['angular'],
    'angular-ui-router': ['angular'],
    'angularAMD': ['angular'],
    'page-factory': ['angular-sanitize']
  },
  deps: ['app']
});
