var paths = require('../paths');
var gulp = require("gulp");
var webpack = require("webpack-stream");

gulp.task('package', ["compile"], function () {
    return gulp.src([paths.dist + "/commonjs/index.js"])
        .pipe(webpack({
            output: {
                entry: "index.js",
                filename: "property-resolver.browser.js",
                libraryTarget: "umd"
            }
        }))
        .pipe(gulp.dest(paths.dist + "/browser"));
});

