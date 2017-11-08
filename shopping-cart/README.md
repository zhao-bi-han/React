# 购物车—— reactjs + react-redux

### 实现的功能
* 添加商品到购物车
* 删除购物车商品
* 库存数量变化
### 组件划分
* 布局组 - 负责 contianer、component 部分<br>
1：静态布局 - 使用 HTML + CSS 静态布局<br>
2：动态布局 - 使用 JSX 语法对静态布局做动态渲染处理
* 逻辑组 - 负责 action、reducer 部分<br>
1：action 开发 - 制作 redux 流程的 action<br>
2：reducer 开发 - 制作 redux 流程的 reducer
### 目录结构
```
- src              源码文件夹：包含项目源码，基本都在这个文件夹下做开发
    - containers   容器文件夹：存放容器组件
    - components   组件文件夹：存放普通显示组件
    - actions      actions文件夹：存放可以发出的action 
    - reducers     reducers文件夹：存放action的处理器reducers
    - apis         开发接口文件夹：存放开发接口文档
```
### 效果图
![Image text](https://raw.githubusercontent.com/zhao-bi-han/React/master/shopping-cart/show.GIF)
