---
title: "とある簡単なスクリプト - naive.sh"
date: 2020-09-11 23:51:00
updated: 2019-09-11 23:51:00
comment: true
categories:
- 折腾
tags:
- NaiveProxy
---
花几天功夫写了个 NaiveProxy 脚本，就是这样。
[kwaa/naive.sh](https://github.com/kwaa/naive.sh)

## 设计说明

我写它就是用来自动更新 NaiveProxy。
后来我想了想，不如干脆把功能写完整发上来吧？于是就有了这玩意。
它不会像[某脚本](https://github.com/233boy/v2ray)一样搞墙外墙，且不会保存在本地以避免产生垃圾 & 确保你每次使用都是最新版本。

## 如何使用

``` bash
bash <(wget -qO- https://git.io/naive.sh) #正常模式
bash <(wget -qO- https://git.io/naive.sh) update #自动更新naiveproxy
```

## 要求

Linux, x86 或 x86_64
以 root 运行
已安装 wget 和 libnss3
没了。它只做它该做的事，依赖什么的就请自己解决吧。

## 待做

- 快速安装 & 自动配置 Caddy v2 + forwardproxy
- 支持 linux-arm, linux-arm64
- 包管理器为 pacman, apt, yum 其一时自动安装依赖

## 许可证

随手写的小玩意我必用 WTFPL
