var gulp = require('gulp');
var gulputil = require('gulp-util');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

// Sass(SCSS)ビルドタスク
gulp.task('sass', function () {
    // Sass(SCSS)読み込み用ディレクトリ指定
    gulp.src('./assets/scss/*.scss')
    //コンパイルメソッド実行
    .pipe(sass())
    //コンパイル後出力ファイル先の指定
    .pipe(gulp.dest('./assets/css'));
});

//ローカルサーバー
gulp.task('connectDev',function(){
    connect.server({
        root: ['./'],   //ルートディレクトリ
        port: 8000,     //ポート番号
        livereload: true
    });
});

//htmlタスク
gulp.task('html',function(){
    gulp.src('./*.html')            //実行するファイル
    .pipe(connect.reload());    //ブラウザの更新
});

//ファイルの監視
gulp.task('watch',function(){
    gulp.watch(['./*.html'],['html']);          //htmlファイルを監視
    gulp.watch(['./assets/scss/*.scss'],['sass']); //scssファイルを監視
    gulp.watch(['./assets/css/*.css'],['html']);       //cssファイルを監視
});

gulp.task('default',['watch','connectDev']);
