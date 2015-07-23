var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer'),
    bowerFiles = require('main-bower-files'),
    browserSync = require('browser-sync').create(),
    buster = require('gulp-buster'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss');

// JS Tasks
gulp.task('js', function() {
  var files = bowerFiles();

  files.push('./js/**/*.js');

  gulp.src(files)
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});

gulp.task('js-build', function() {
  var files = bowerFiles();

  files.push('./js/**/*.js');

  gulp.src(files)
    .pipe(concat('scripts.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
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

gulp.task('sass-build', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(uglifycss())
    .pipe(buster())
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

gulp.task('default', ['serve']);
