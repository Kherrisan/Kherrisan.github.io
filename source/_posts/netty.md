---
title: Netty——下载、编译、调试源码
categories:
  - Netty
tags:
  - java
  - Netty
copyright: true
url: 1021.html
id: 1021
date: 2018-11-15 20:39:40
---

Intellij，启动！
============

参考资料：
-----

[Netty分享之动态生成重复性的代码](https://www.jianshu.com/p/9160684f134b)

<!-- more -->

完整过程
----

我选择直接通过Intellij来clone Netty在Github上的源码，这样就不需要再另外起一个控制台了。Github地址如下： [https://github.com/netty/netty.git](https://github.com/netty/netty.git) ![](https://www.dokyme.cn/wp-content/uploads/2018/11/d9f2c0757f928393fd45ef70bb1beed0.png) ![](https://www.dokyme.cn/wp-content/uploads/2018/11/8acc7ca7ad4a9f548ad02106f26e197f.png) 不需要登陆，直接clone即可。clone完成之后，Netty的完整源码就静静地躺在硬盘里了，并且呈现在Intellij左侧的项目栏中。但此时Intellij还没有将netty目录识别为一个项目目录，而是当做一个普通的文件夹来处理，java源文件还没有建立索引和关联，子项目间的编译依赖关系也没有得到处理，因此需要导入maven的配置。 ![](https://www.dokyme.cn/wp-content/uploads/2018/11/b0a668da9a813b3e959a519ab8ac75e2.png) 在Project Structure里或者编辑器顶部设置Project所采用的SDK： ![](https://www.dokyme.cn/wp-content/uploads/2018/11/97e3145a61d0f7320d24b9792a9411ad.png) 这时Intellij已经将目录识别为项目了，可以开始编译了。我想要运行example中的某个程序，直接点运行就行了~ 但这里有一个小问题：netty项目的众多代码中有一些代码是使用模板生成的，刚刚导入项目的netty还没有根据模板生成对应的代码，因此如果立即编译的话会报错： ![](https://www.dokyme.cn/wp-content/uploads/2018/11/dddebb0b309d4b83c2f9e3df0ac12a5e.png) 没错，少的就是netty-common中的一些XXXMap。生成必要代码的操作是在netty-common目录下运行mvn package指令： ![](https://www.dokyme.cn/wp-content/uploads/2018/11/cb7c4df106cfa58e8d006c6a1b3dcd3e.png) 当他提示Downloading的时候就可以手动打断了，因为此时需要的代码已经生成好了。 ![](https://www.dokyme.cn/wp-content/uploads/2018/11/fa1ea85ae614f8195aa96fe0f42e82df.png) 好了，现在就可以运行example中的程序了，直接点Intellij的运行就行。