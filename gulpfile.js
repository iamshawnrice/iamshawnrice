var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var bowerFiles = require('main-bower-files');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// JS Tasks
gulp.task('js', function() {
  var files = bowerFiles();

  files.push('./js/**/*.js');

  gulp.src(files)
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(ngAnnotate())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});

// Sass Tasks
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    proxy: 'localhost:8888'
  });

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('default', ['serve']);
