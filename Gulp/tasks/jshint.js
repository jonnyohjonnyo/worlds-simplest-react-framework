var gulp = require('gulp'),
    config = require('../config'),
    es = require('event-stream'),
    react = require('gulp-react'),
    jshint = require('gulp-jshint'),
    cache = require('gulp-cached');

var failWatcher = es.map(function (file, cb) {
    if (!file.jshint.success) {
        console.log("JSHint failed.");
        return cb(new Error("JSHint failed"), file);
    }
    cb(null, file);
});

gulp.task('jshint', function () {
    var stream = gulp.src(config.paths.react_source)
      .pipe(cache('jshint'))
      .pipe(react({ es6module: true }))
      .on('error', function (err) {
          console.error('JSX ERROR in ' + err.fileName);
          console.error(err.message);
          this.end();
      })
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));

    stream = stream.pipe(jshint.reporter('fail'));
    return stream;
});