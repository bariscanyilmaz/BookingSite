var gulp=require('gulp')
var browserSync=require('browser-sync').create()
var sass=require('gulp-sass')
var prefix=require('gulp-autoprefixer')
//var sourcemaps=require('gulp-sourcemaps')
var nodemon=require('gulp-nodemon')
//var plumber=require('gulp-plumber')
var pug=require('gulp-pug')
var reload=browserSync.reload('index.html')


gulp.task('css', () => {
    return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
  });

gulp.task('html',()=>{
  return gulp.src('views/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'))
});

   gulp.task('browser-sync',function () {
     browserSync.init({
       server:{
         baseDir:'./',
       }
     });
     //gulp.watch('./*html').on('end',reload)
     gulp.watch('./scss/**/*scss',['css'])
   });

  gulp.task('default',['html','css']);