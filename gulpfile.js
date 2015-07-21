var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Sass Tasks
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
      .pipe(autoprefixer())
      .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    proxy: "localhost:8888"
  });

  gulp.watch("./sass/**/*.scss", ['sass']);
});

gulp.task('default', ['serve']);
