---
title: "Hexo 流水线"
date: 2020-07-28 12:16:00
updated: 2020-08-02 23:57:00
categories:
- 笔记
tags:
- Github Actions
- Hexo
- CI/CD
---

既然博客重建了，我也就想顺手更新一下部署脚本；
区别是加入了 gulp ，并且更新一波版本号。
因为 M Refresh 设计之初就**没有放在本地的 css,js 文件**，所以也不需要 gulp-clean-css 和 gulp-uglify。

安装：

``` bash
npm i gulp -g
npm i gulp gulp-htmlclean gulp-htmlmin gulp-minify-inline gulp-imagemin
gulp -v
```

在 Hexo 根目录创建 gulpfile.js:

``` js
let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
let htmlclean = require('gulp-htmlclean');
let minifyInline = require('gulp-minify-inline');
let imagemin = require('gulp-imagemin');

// html
gulp.task('minify-html', function() {
    return gulp
        .src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});
// inline
gulp.task('minify-inline', function() {
    return gulp
        .src('./public/**/*.html')
        .pipe(minifyInline())
        .pipe(gulp.dest('./public'))
});
// img
gulp.task('minify-img', function() {
    return gulp
        .src('./public/p/**/*.*')
        .pipe(
            imagemin([
                imagemin.gifsicle({ optimizationLevel: 3 }),
                imagemin.mozjpeg({ progressive: true }),
                imagemin.optipng({ optimizationLevel: 7 }),
                imagemin.svgo({ plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]})],
                { verbose: true }
            )
        )
        .pipe(gulp.dest('./public'))
});
// task
gulp.task('default', gulp.series(
    'minify-html','minify-inline','minify-img'
));
```

创建 ./.github/workflows 文件夹，并新建 main.yml:

``` yaml
name: Build & Deploy ./kwaa.dev
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Use Node.js 10.x
        uses: actions/setup-node@v2-beta
        with:
          node-version: '14'
          check-latest: true
      - name: Build
        run: npm i -g hexo gulp && npm install && hexo generate && gulp
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GH_TOKEN }}
          publish_branch: gh-pages
          publish_dir: /public
```
