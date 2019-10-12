const gulp = require("gulp");
const sass = require("gulp-sass");
const minifycss = require("gulp-minify-css");
const imagemin = require("gulp-imagemin");
const connect = require("gulp-connect");
// const uglify=require("gulp-uglify");


gulp.task("server",function(){
	connect.server({
		root:"dist"
	});
})
gulp.task('copy',async ()=>{
	gulp.src("./**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\myjianguo"));
});
gulp.task("watchall",async ()=>{
		//监听文件，如有改变，则自动拷贝
		gulp.watch("*.html",async ()=>{
			//把当前目录下的所有html文件拷贝至www下的目录中
			gulp.src("*.html")
			.pipe(gulp.dest("D:\\phpStudy\\WWW\\myjianguo"));
		});
		
		gulp.watch("img/**/*",async ()=>{
			gulp.src("img/**/*")
			.pipe(imagemin())
			.pipe(gulp.dest("D:\\phpStudy\\WWW\\myjianguo\\img"));
		});
		
		// gulp.watch("css/*.css",async ()=>{
		// 	gulp.src("css/*.css")
		// 	.pipe(minifycss())
		// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\myjianguo\\css"));
		// });
		
		gulp.watch("js/*.js", async ()=>{
			gulp.src("js/*.js")
			// .pipe(uglify())
			.pipe(gulp.dest("D:\\phpStudy\\WWW\\myjianguo\\js"));
		});
		
		gulp.watch("sass/**/*",async ()=>{
			gulp.src("sass/**/*")
			.pipe(sass())
			.pipe(minifycss())
			.pipe(gulp.dest("D:\\phpStudy\\WWW\\myjianguo\\css"));
		});
});