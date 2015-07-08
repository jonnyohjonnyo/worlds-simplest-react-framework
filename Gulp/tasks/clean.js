var gulp = require("gulp"),
    rimraf = require("rimraf"),
    config = require('../config');

// Clean Tasks
gulp.task("clean", function (cb) {
    rimraf(config.paths.lib, cb);
});

gulp.task("clean_css", function (cb) {
    rimraf(config.paths.css, cb);
});

gulp.task("destroy_webpack_bundle", function (cb) {
    rimraf(config.paths.js + 'app.js', cb);
});