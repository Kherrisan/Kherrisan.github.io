---
title: JUC——ReentrantReadWriteLock
tags:
  - java
  - 并发
url: 1004.html
id: 1004
categories:
  - JUC
---

![](https://kherrisanbucketone.oss-cn-shanghai.aliyuncs.com/d354f7cb9339cc545e9b8ae12907a725.png) 和Mutex、ReentrantLock不同的是，ReadWriteLock是可共享的，读锁可共享，写锁和读锁互斥，写锁之间也互斥。ReentrantReadWriteLock在ReadWriteLock上又进步了一点，同一个线程中，任意操作序列都是可重入的。

Sync
====

Sync直接继承AQS，后续分为Fair和NonFair两个分支。 ![](https://kherrisanbucketone.oss-cn-shanghai.aliyuncs.com/5695582c4dcf5b089725f37d83d466ec.png) 为了用一个state变量来表示共享和互斥这两个计数值，他把一个4字节的int变脸拆成了2个unsigned short类型变量来使用。高16位为shared（读锁）值，低16位为exclusive（写锁）值。

ReadLock
========

WriteLock
=========