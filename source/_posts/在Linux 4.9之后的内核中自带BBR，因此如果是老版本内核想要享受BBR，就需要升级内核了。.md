![][image-1] 在Linux 4.9之后的内核中自带BBR，因此如果是老版本内核想要享受BBR，就需要升级内核了。

配置过程
====

首先查看内核版本`uname -r`。 ![][image-2] 的确，开启了BBR之后，下载大图的速度得到了显著的提升\~

[image-1]:	https://kherrisanbucketone.oss-cn-shanghai.aliyuncs.com/bbr.jpg
[image-2]:	https://kherrisanbucketone.oss-cn-shanghai.aliyuncs.com/Snipaste_2017-12-19_22-59-56.png