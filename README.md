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

babel 会根据浏览器的 api 实现程度在代码中引入 stage3 阶段语言所需垫片

### useBuiltIns: "usage"

你用了哪些 es6 api,但是目标浏览器不支持,就引入对应的语言垫片,没有用到的 es6 api,babel 则不引入

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

## @babel/plugin-transform-runtime

class 语法中，babel 自定义了 \_classCallCheck 这个函数来辅助；
这些函数叫做 helpers.
没有装@babel/plugin-transform-runtime 插件之前,都是在编译后的文件中定义 helpers,装了后 helpers,helpers 从之前的原地定义改为了从一个统一的模块中引入，使得打包的结果中每个 helper 只会存在一个

## corejs: 3 参数

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
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
      },
    ],
  ],
};
```

@babel/env 插件会根据浏览器语言实现程度加载一些 polyfill.
babel 的 polyfill 机制是，对于例如 Array.from 等静态方法，直接在 global.Array 上添加；对于例如 includes 等实例方法，直接在 global.Array.prototype 上添加。这样直接修改了全局变量的原型，有可能会带来意想不到的问题。这个问题在开发第三方库的时候尤其重要，因为我们开发的第三方库修改了全局变量，有可能和另一个也修改了全局变量的第三方库发生冲突，或者和使用我们的第三方库的使用者发生冲突。公认的较好的编程范式中，也不鼓励直接修改全局变量、全局变量原型。

加了 corejs: 3 参数后,api 从之前的直接修改原型改为了从一个统一的模块中引入，避免了对全局变量及其原型的污染
