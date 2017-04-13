var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("gulp-webserver");
// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");
// var rename = require("gulp-rename");
gulp.task("sass",function(){
	return gulp.src("sass/index.scss")
	.pipe(sass())
	.pipe(gulp.dest("css"))
})
gulp.task("server",function(){
	gulp.watch("sass/*.scss",["sass"]);
	return gulp.src("./")
		.pipe(server({
			host:"169.254.140.229",
			livereload: true,
			directoryListing: true,
			open: "index.html"
		}));
})