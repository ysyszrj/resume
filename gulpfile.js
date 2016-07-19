/**
 * Created by artemis_zrj on 2016/7/18.
 */
var gulp = require('gulp');
var webpack = require('webpack-stream')
gulp.task('default',function(){
    return gulp.src('src/main.js')
    .pipe(webpack())
    .pipe(gulp.dest("dist/"));
});