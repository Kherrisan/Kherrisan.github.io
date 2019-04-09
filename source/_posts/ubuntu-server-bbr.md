---
title: Ubuntu Server配置BBR拥塞控制算法
categories:
  - TCP/IP
tags:
  - TCP/IP
  - 网络
copyright: true
url: 377.html
id: 377
date: 2017-12-19 23:04:32
---

自从大佬告诉了我一个新的黑科技：BBR，可以显著提升服务器发送数据包的速度，尤其是在翻墙的时候，我给我的Digital Ocean上的服务器配置了BBR之后，果然下载速度得到了极大的提升，本地使用SEU Wlan下载大文件基本可以稳定在8Mbps左右。之前开了Shadowsocksr，下载Chromium的源码，任务管理器里的网络IO图真的是很漂亮。 ![][image-1] 但是那次配置BBR没有记录，但是我国内的云服务器（就是你现在访问的这个）还没有升级过内核，因此想要给这台机子也升级一下内核，然后开启一下BBR。

<!-- more -->

BBR简介
=====

BBR是TCP层的一种拥塞控制算法，是Google设计并开源的。传统的拥塞控制算法通过丢包的情况判断网络情况，从而及时调整拥塞窗口的大小，这样使得整个网络处于稳定状态的同时，单个终端又能够享受尽可能大的传输速度。 目前大规模使用的应该是Qubic算法，我没有深入了解过这种算法，好像也是指数增长——丢包回落的形式，具体细节不清楚，有时间可以去了解一下。 知乎上各种吐槽TCP现在的拥塞算法太保守，不能够充分提升传输速度。BBR则是另外一套算法，能够通过更加合理科学的判断和调节，更加充分的提升传输速度。 

[image-1]:	https://kherrisanbucketone.oss-cn-shanghai.aliyuncs.com/psb.png