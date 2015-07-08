var gulp = require('gulp'),
    webpack = require('webpack'),
    config = require('../config'),
    gutil = require('gulp-util');

var reactWebpackConfig = require('../../webpack.config.js');

// Web Pack Tasks
var devCompiler = webpack(reactWebpackConfig);

gulp.task('pack_components', ['destroy_webpack_bundle'], function () {
    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack_components:build-dev", err);
        gutil.log("[webpack_components:build-dev]", stats.toString({
            colors: true
        }));
    });
});