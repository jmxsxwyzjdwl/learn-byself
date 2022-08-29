## 启动 展示
yarn install || npm install

yarn run website-dev || npm run website-dev

<!-- 此项目使用 yarn 包管理工具 -->

# 1.安装lerna多包管理工具
yarn add global lerna

# 2.初始化
npx lerna init

# 3.可以通过lerna创建组件包
npx lerna create xxx

# 4.通过ts引用处理，需安装ts
<!-- -W 是为了安装到全局 -->
yarn add typescript -W 
npx tsc --init

# 5.安装vue
npm install vue@next -W (yarn 安装的好像有问题，packages里面vue文件识别不到vue)

# 6.对资源进行整合，以使用户可全部引入
在 packages 里的 cx-ui文件夹 index.ts 中引入各模块后遍历注册各个组件

# 7.开线上展示服务
对项目进行初始化
yarn add webpack webpack-cli webpack-dev-server vue-loader@next @vue/compiler-sfc -D -W

yarn add babel-loader @babel/core @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver url-loader file-loader html-webpack-plugin css-loader 
style-loader less-loader less -D -W
