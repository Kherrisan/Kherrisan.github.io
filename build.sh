echo Start to build blog!
hexo clean &&
hexo generate &&
gulp &&
hexo generate &&
gulp &&
hexo deploy &&
echo Building finished!