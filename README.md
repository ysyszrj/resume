# My Resume

从JSON文件中读取数据，利用vue.js来动态生成简历页面，同时可以一键部署到github主页.

个人简历 [**Demo**](https://ysyszrj.github.io/resume/)

## Features
- 响应式样式布局，同时支持PC端和移动端浏览
- 利用Webpack页面性能优化
- 利用Vue.js动态生成页面，并且利用组件化开发
- 代码改动自动刷新，免去F5的负担

## Usage
1. `$ cnpm install`安装相应模块
1. 修改`resume.json`里面的简历信息
1. `$ gulp watch`来生成相应的简历的最终版本，打开http://localhost:8000来查看最终效果，监视文件改动，实时更新网页
1. `$ gulp deploy`将bin文件夹下面的内容发布到github页面上，建议修改remoteUrl

## Acknowledge
1. [@joyeecheung](https://github.com/joyeecheung/resume),简历制作页面风格参考。
2. Webpack
3. vue.js
4. [iconfont](http://www.iconfont.cn/)提供字体

### License

[MIT](LICENSE.txt)
