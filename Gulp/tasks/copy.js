var gulp = require('gulp'),
    config = require('../config');

// Copy Tasks
gulp.task("bower_copy", ['clean'], function () {
    var bower = {
        "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        "jquery": "jquery/dist/**/*.{js,map}",
        "signalr": "signalr/jquery.signalR.min.js",
        "font-awesome": "FontAwesome/**/*.{css,otf,eot,svg,ttf,woff,woff2}"
    }

    for (var destinationDir in bower) {
        gulp.src(config.paths.bower + bower[destinationDir])
          .pipe(gulp.dest(config.paths.lib + destinationDir));
    }
});

gulp.task("npm_copy", ['clean'], function () {
    var npm = {
        "react": "react/dist/**/*.{js,map}",
        "react-bootstrap": "react-bootstrap/dist/**/*.{js,map}",
        "react-router": "react-router/umd/**/*.js"
    }

    for (var destinationDir in npm) {
        gulp.src(config.paths.npm + npm[destinationDir])
          .pipe(gulp.dest(config.paths.lib + destinationDir));
    }
});