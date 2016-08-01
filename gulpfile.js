/**
 * Created by artemis_zrj on 2016/7/18.
 */
var gulp = require('gulp');
var webpack = require('webpack-stream');
var plugins = require('gulp-load-plugins')();
var gls = require("gulp-live-server");

var dist_path = './bin/';
var src_path = './src/';
var less_files = src_path + "index.less";
var html_files = src_path + "index.html";
var js_entry_files = src_path + "main.js";
var js_out_file_name = "out.js";

var remoteUrl = "git@github.com:ysyszrj/resume.git"

var server = gls.static(dist_path, 8000);


gulp.task("less", function () {
    return gulp.src(less_files)
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer({
            browers: ["> 5%"],
            cascade: true
        }))
        .pipe(gulp.dest(src_path))
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest(dist_path));
});


gulp.task("html", function () {
    return gulp.src(html_files)
        .pipe(plugins.htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(dist_path));
});


gulp.task("js", function () {
    gulp.src(js_entry_files)
        .pipe(webpack({
            watch: false,
            output: {
                filename: js_out_file_name
            }
        }))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dist_path))
});

/**************** Build ***************/

gulp.task("build", ["less", "html", "js"]);

gulp.task("server", ["build"], function () {
    server.start();
})


/***************  Deploy **************/
gulp.task("deploy", function () {
    return gulp.src(dist_path + '**/*')
        .pipe(plugins.ghPages({
            remoteUrl: remoteUrl
        }))
        .pipe(plugins.ghPages({
            remoteUrl: "git@git.coding.net:ysyszrj/resume.git"
        }));
});


/**************** Watch *****************/
gulp.task('watch', ['server'], function () {
    gulp.watch([src_path + '**/*.less'],
        ['less']);
    gulp.watch([src_path + '**/*.js', 'resume.json'], ['js']);
    gulp.watch(src_path + 'index.html', ['html']);
    gulp.watch(dist_path + '**/*', function () {
        server.notify.apply(server, arguments);
    });
});


gulp.task("default", ['build']);