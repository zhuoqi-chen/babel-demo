## Babel 编译测试

## @babel/env 配置

### useBuiltIns: "entry"

```js
module.exports = {
  presets: [
    [
      "@babel/env",
      {
        debug: true,
        useBuiltIns: "entry",
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
  ],
};
```

在@babel/env 中添加 useBuiltIns: "entry" 配置,并在入口文件中添加

```js
import "core-js";
import "regenerator-runtime/runtime";
```

babel 编译后的代码会根据浏览器支持程度加载所有的语言环境垫片而不思引入所有的语言垫片

### useBuiltIns: "usage"

你用了哪些语法需要语言垫片就加载哪些语言垫片,如果目标浏览器支持则不引入

```js
module.exports = {
  presets: [
    [
      "@babel/env",
      {
        debug: true,
        useBuiltIns: "usage",
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
  ],
};
```
