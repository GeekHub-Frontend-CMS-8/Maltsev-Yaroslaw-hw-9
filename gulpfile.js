var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('all', function() {
	return gulp.src('app/sass/main.sass')
	//return gulp.src('app/sass/*.+(sass|scss)') - for all
	.pipe(sass())
	.pipe(gulp.dest('app/CSS/'))
	.pipe(browserSync.reload({stream: true}))
});
gulp.task('browser-sync', function() {
	browserSync ({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});
gulp.task('watch', ['browser-sync','all'], function() {
	gulp.watch('app/sass/main.sass', ['all'])
});