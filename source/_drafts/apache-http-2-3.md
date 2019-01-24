---
title: 编译Apache HTTP服务器以及HTTP/2模块
url: 398.html
id: 398
categories:
  - 未分类
tags:
---

本来很想尝试一下QUIC，奈何除了Caddy之外没有可用的QUIC实现。偶然间想到了HTTP/2似乎也很不错，而且有很多服务器软件提供了HTTP/2的实现，所以就想尝试一下。 Apache HTTP Server提供了实验性的HTTP/2模块，作为实验性功能，自然要在编译的时候以修改选项的形式来启用这一模块啦。以前我安装httpd都是直接用apt安装的，还真没有尝试过直接编译。一编译不要紧，还真拉出了一连串的问题，在此记录一下。