var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('serve', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
