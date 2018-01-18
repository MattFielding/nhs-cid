var gulp = require('gulp')
var runSequence = require('run-sequence')

gulp.task('default', function (done) {
  runSequence(
    'move-nhsuk-assets',
    'move-onfido-assets',
    'scripts',
    'styles',
    'server',
    'watch',
    done
  )
})
