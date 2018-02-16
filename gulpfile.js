let gulp = require('gulp');
let nodemon = require('gulp-nodemon');

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