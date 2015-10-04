var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss');

var vendorJSFiles = [
  './bower_components/angular/angular.js',
  './bower_components/angular-animate/angular-animate.js',
  './bower_components/angular-sanitize/angular-sanitize.js',
  './bower_components/angular-ui-router/release/angular-ui-router.js',
  './bower_components/angularUtils-disqus/dirDisqus.js',
  './bower_components/jquery/dist/jquery.js',
  './bower_components/moment/moment.js',
  './bower_components/velocity/velocity.js'
];

gulp.task('js', function() {
  vendorJSFiles.push('./js/**/*.js');

  gulp.src(vendorJSFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});

gulp.task('js-build', function() {
  vendorJSFiles.push('./js/**/*.js');

  gulp.src(vendorJSFiles)
    .pipe(concat('scripts.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('sass-build', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(uglifycss())
    .pipe(gulp.dest('./css'))
});

// Server + watching scss/js files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    proxy: 'localhost:8888'
  });

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('build', ['sass-build', 'js-build']);
gulp.task('default', ['serve']);

