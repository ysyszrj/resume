# My Resume

从JSON文件中读取数据，利用vue.js来渲染生成简历页面，同时可以一键部署到github主页.

个人简历 [**Demo**](https://ysyszrj.github.io/resume/)

## Features
- 响应式样式布局，同时支持PC端和移动端浏览
- 利用Gulp自动构建工具进行页面性能优化
- 利用Vue.js动态生成页面
- 开发调试页面的时候代码改动自动刷新，免去F5的负担

## Usage
1. `$ cnpm install`安装相应package
1. `resume.json`里面填入个人简历信息
1. `$ gulp build` 在./bin的文件夹下面生成发布版本的个人简历网页
1. `$ gulp watch`包括`$ gulp build`，打开http://localhost:8000来查看最终个人简历显示效果，监视./src文件夹下的文件改动，实时更新网页
1. `$ gulp deploy`将bin文件夹下面的内容发布到github相应项目的pages页面上，建议修改remoteUrl

## Compatibility
 - iPhone Safari
 - Chrome
 - Android Web Browser

## Acknowledge
1. [@joyeecheung](https://github.com/joyeecheung/resume),简历制作页面风格参考。
2. [Webpack](http://webpack.github.io/)
3. [vue.js](http://cn.vuejs.org/)
4. [iconfont](http://www.iconfont.cn/)提供字体


### License

[MIT](LICENSE.txt)
