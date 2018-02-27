const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const mocha = require('gulp-spawn-mocha');

gulp.task('default', () => {
    nodemon({
        script: 'server.js',
        ext: 'js', 
        env: {
            PORT: 8080
        }
    })
    .on('restart', () => {
        console.log('restarting server');
    });
});

gulp.task('unit-test', () => gulp
    .src(['./test/**.test.js'])
    .pipe(mocha({
        reporter: 'mocha-multi',
        reporterOptions: 'spec=-,xunit=./reports/unit/xunit.xml',
        istanbul: {
          dir: './reports/unit/',
          report: 'html',
          includeAllSources: true,
          root: './src',
          x: [
            '**/config/config.js',
            '**/routes/routes.js',
          ],
          print: 'detail',
        },
      })));