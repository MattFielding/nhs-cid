const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const config = require('../config').gulp

const utils = require('../lib/utils.js')

gulp.task('server', function () {
  nodemon({
    script: './server.js',
    ext: 'js json html',
    env: { 'NODE_ENV': 'development' },
    ignore: [config.paths.public + '*',
      config.paths.assets + '*',
      config.paths.nodeModules + '*']
  }).on('quit', function () {
    // remove .port.tmp if it exists
    try {
      fs.unlinkSync(path.join(__dirname, '/../.port.tmp'))
    } catch (e) {}

    process.exit(0)
  })
})
