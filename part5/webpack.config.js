// 引入包文件
const path = require("path");
// 自动生成一个引入了编译后的js文件的html文件
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 每次编译都会删除上次编译后的文件后再重新生成文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { options } = require("less");

// webpack中的所有配置信息
module.exports = {
  // entry 指定入口文件
  entry: "./src/index.ts",

  // output 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    // 打包后的文件名
    filename: "bundle.js",
    // 是否允许webpack编译完之后的文件使用箭头函数
    environment: {
      arrowFunction: false,
      const: false
    }
  },

  // module 指定webpack打包时要使用的模块
  module: {
    // 指定加载的规则
    rules: [
      {
        // 指定规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "88",
                      "ie": '6'
                    },
                    // 指定core-js的版本
                    "corejs": "3",
                    // 使用core-js的方法, "usage" 表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          "ts-loader"
        ],
        // 要排除的文件
        exclude: /node_modules/,
      },
      // 设置less文件的处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader",
        ]
      }
    ],
  },

  // plugin配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // 自定义标题
      // title: '自定义title',
      // 以指定文件为模板
      template: "./src/index.html",
    }),
  ],

  // resolve 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },

  // 指定打包环境
  mode: "development",
};
