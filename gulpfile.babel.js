var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var react = require('gulp-react');
var copy = require('gulp-copy');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var stripDebug = require('gulp-strip-debug');
var imagemin = require('gulp-imagemin');

gulp.task('default', defaultTask());
gulp.task('watch', watchTask);

function defaultTask ()
{
    gulp.task('default:script', defaultScriptTask);
    gulp.task('default:vendors', defaultVendorsTask);
    gulp.task('default:templates', defaultTemplatesTask);
    gulp.task('default:styling', defaultStyleTask);
    gulp.task('default:fonts', defaultFontTask);
    gulp.task('default:html', defaultHtmlTask);
    gulp.task('image:compress', imageCompressTask);

    return ['default:script', 'default:vendors', 'default:templates', 'default:styling', 'default:fonts', 'default:html'];

    function defaultScriptTask ()
    {
        return gulp.src('./src/components/**/*.js')
            .pipe(babel())
            .pipe(concat('./dist/main.js'))
            .pipe(gulp.dest('.'))
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('.'));
    }

    function defaultVendorsTask ()
    {
        return gulp.src([
            'node_modules/react/dist/react.js',
            'node_modules/geoow-dependency-injection/dist/dependency-injection.js',
            'node_modules/geoow-promise/dist/promise.js',
            'node_modules/geoow-alert/dist/alert.js'
        ])
            .pipe(stripDebug())
            .pipe(concat('./dist/vendors.js'))
            .pipe(gulp.dest('.'))
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('.'));
    }

    function defaultTemplatesTask ()
    {
        return gulp.src('./src/components/**/*.jsx')
            .pipe(react())
            .pipe(babel())
            .pipe(concat('./dist/react-components.js'))
            .pipe(gulp.dest('.'))
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('.'));
    }

    function defaultStyleTask ()
    {
        return gulp.src(['./src/**/*.less'])
            .pipe(less())
            .pipe(concat('./dist/style.css'))
            .pipe(gulp.dest('.'))
            .pipe(minifyCss())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('.'));
    }

    function defaultFontTask ()
    {
        return gulp.src(['./src/style/fonts/*'])
                .pipe(gulp.dest('./dist/fonts'));
    }

    function defaultHtmlTask ()
    {
        return gulp.src(['./src/index.html'])
            .pipe(concat('./dist/index.html'))
            .pipe(gulp.dest('.'));
    }

    function imageCompressTask ()
    {
        return gulp.src(['./assets/*.jpg'])
            .pipe(imagemin({progressive: true}))
            .pipe(gulp.dest('./assets/.'));
    }
}

function watchTask ()
{
    return gulp.watch(['./src/**/*.js', './src/components/**/*.jsx', './src/**/*.less', './src/**/*.html'], defaultTask());
}
