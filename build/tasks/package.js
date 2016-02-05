var paths = require('../paths');
var gulp = require("gulp");
var webpack = require("webpack-stream");

gulp.task('package', ["compile"], function () {
    return gulp.src([paths.dist + "/property-resolver.js"])
        .pipe(webpack({
            output: {
                entry: "property-resolver.js",
                filename: "property-resolver.js",
                library: "PropertyResolver",
                libraryTarget: "umd"
            }
        }))
        .pipe(gulp.dest(paths.dist));
});

