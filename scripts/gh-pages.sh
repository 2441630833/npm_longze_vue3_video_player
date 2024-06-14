#!/usr/bin/env zsh
###
# /*
#  * @Author: web.zlz
#  * @Date: 2024-06-14 15:50:42
#  * @LastEditors: longze
#  * @LastEditTime: 2024-06-14 15:50:42
#  * @Description: file content
# */
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd ../docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy to the gh-pages'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:xdlumia/vue3-video-play.git gh-pages
# git push -f git@github.com:xdlumia/vue3-video-play.git master:gh-pages
# git push -f git@github.com:xdlumia/xdlumia.github.io.git master:gh-pages
# git push -f https://github.com/xdlumia/vue3-video-play.git master:gh-pages
git push -f https://github.com/xdlumia/xdlumia.github.io.git master:gh-pages
