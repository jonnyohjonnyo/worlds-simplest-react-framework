var gulp = require('gulp'),
    config = require('../config');

gulp.task("watch", function () {
    gulp.watch(config.paths.sass_source, ['sass']);
    gulp.watch(config.paths.react_source, ['pack_components']);
});