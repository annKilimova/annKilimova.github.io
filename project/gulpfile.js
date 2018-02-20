var gulp = require('gulp'),
	minCss = require('gulp-clean-css'),
	sass = require('gulp-sass');

gulp.task('sass', function(){
	gulp.src('sass/screen.scss')
		.pipe(sass().on('error', sass.logError))
    	.pipe(minCss())
    	.pipe(gulp.dest('stylesheets'));
});