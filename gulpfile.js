/**
 * Created by artemis_zrj on 2016/7/18.
 */
var gulp = require('gulp');
var webpack = require('webpack-stream');
var path = require("path");
var plugins = require('gulp-load-plugins')();


var lessPath = [path.join(__dirname, 'src', 'less', 'includes'),
    path.join(__dirname, 'src', 'less', 'components')];

function less2css(srcPath, destPath, debug) {
    if(!debug) {
        return gulp.src(srcPath)
            .pipe(plugins.less({ paths: lessPath }))
            .pipe(plugins.minifyCss({ compatibility: 'ie9' }))
            .pipe(gulp.dest(destPath));
    } else {
        return gulp.src(srcPath)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.less({ paths: lessPath }))
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest(destPath));
    }
}


gulp.task("build-for-deploy",function(){

});


gulp.task("less-debug",function(){
   less2css('./src/less/index.less',"./bin/",true)
});


gulp.task("less",function(){
    //less2css('./src/less/index.less',"./bin/")
    return gulp.src("./src/index.less")
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer({
            browers:["> 5%"],
            cascade:true
        }))
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest("./bin"));
});


gulp.task("html",function(){
    return gulp.src("./src/index.html")
        .pipe(plugins.htmlmin({
            collapseWhitespace:true
        }))
        .pipe(gulp.dest("./bin"));
});


gulp.task("js",function(){
    gulp.src("./src/main.js")
        //.pipe(webpack())
        .pipe(webpack({
            watch:false,
            output:{
                filename:'out.js'
            }
        }))
        .pipe(plugins.uglify())
        .pipe(gulp.dest("./bin/"))
});


gulp.task("build",["less","html","js"]);


/***************  Deploy **************/
gulp.task("deploy",function(){
    return gulp.src('./bin/**/*')
        .pipe(plugins.ghPages({
            remoteUrl:"git@github.com:ysyszrj/resume.git"
        }));
});



gulp.task("default",['build']);