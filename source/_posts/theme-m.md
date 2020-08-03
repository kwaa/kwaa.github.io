---
title: "Introducting Theme-M"
date: 2020-07-26 15:00:00
updated: 2020-07-26 15:00:00
comment: true
thumbnail: https://i.loli.net/2020/08/03/wQGcCKZiB8Y6gXf.png
categories:
- 折腾
tags:
- Theme-M
- Hexo
---

THEME-M 从 2019 年初创建文件夹，于 2020 年 7 月重写。
重写后卖相更好+精简依赖项，目前只有 MDUI 必须引用；以至于我的样式补丁直接打在页首。
新外观参考了不少主题/网站，这里就不一个个列出来了。
我个人属于简洁主义者~~尽管源码并不简洁~~，所以只实现了自己需要的功能。
jQuery 再见！

> 我真的不擅长写 EJS/JS，语法臃肿以后再改进吧~~或者不改进了~~。

### 项目地址

[kwaa/m](https://github.com/kwaa/m)

### 功能说明

#### 自动暗模式

MDUI 自带（我提了个 issue），在主题里应用栏+侧边栏和卡片是分开设置的（分别为 theme.m.layout 和 theme.mdui.layout，theme.m.layout 未设置时自动使用 theme.mdui.layout 的值）。

#### 评论

只做了 Utterances。

#### PJAX

重写后用的是[MoOx/pjax](https://github.com/MoOx/pjax)，不需要 jQuery。
没有进度条，因为我觉得淡入淡出效果足够了。

#### Lazyload

这次没有在初版实现，之后打算用[aFarkas/lazysizes](https://github.com/aFarkas/lazysizes)。

#### TOC

一样没有在初版实现，TOC是我最头疼的功能因为写起来很麻烦。

#### 语法高亮

好麻烦啊... 以前用的 highlight.js 效果不太好，这次我想换换口味。

> 使用 prism.js 语法高亮，你需要安装 hexo-renderer-markdown-it。

#### 搜索

一样很麻烦，我这次连搬都懒得搬了。

### 文档

不打算写文档。

### 版本号

Theme-M 不设版本号，如果你是来自未来的其他使用者，你可以把 git pull 当作滚动更新；
需要注意，我随时可能根据自己的喜好调整/删除任何内容。

### 许可证

我讨厌GPL的传染性，所以不会用它。
MIT？Apache2.0？这些都很好，但我还是想用——
[WTFPL(Do What The Fuck You Want To Public License)](http://wtfpl.net).

You just DO WHAT THE FUCK YOU WANT TO!

### 样式测试

以免麻烦，顺手放在这里。

``` css
pre[class*="language-"] {
  overflow: auto;
  position: relative;
  margin: 0.5em 0;
  padding: 1.25em 1em;
}
```

``` js
if (options.show_all) {
  // Display pages on the left side of the current page
  for (let i = 1; i < current; i++) {
    result += pageLink(i);
  }
  // Display the current page
  result += currentPage;
  // Display pages on the right side of the current page
  for (let i = current + 1; i <= total; i++) {
    result += pageLink(i);
  }
}
```
