var gulp = require('gulp'),
    config = require('../config'),
    sass = require('gulp-sass');

// Sass Tasks
gulp.task("sass", ["clean_css"], function () {
    gulp.src(config.paths.sass_source)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.paths.css));
});