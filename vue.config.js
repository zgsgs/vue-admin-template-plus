'use strict'
const path = require('path')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const MonacoEditorLocalesPlugin = require('monaco-editor-locales-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const defaultSettings = require('./src/config/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const name = defaultSettings.title || 'Vue Admin Template' // page title
const baseApiURL = process.env.VUE_APP_BASE_URL + defaultSettings.baseApiPath
const port = process.env.port || process.env.npm_config_port || 9528 // dev port
const isDev = process.env.NODE_ENV === 'development'
// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: isDev,
  productionSourceMap: isDev,
  devServer: {
    https: false,
    host: '0.0.0.0', // 允许外部ip访问
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js'),
    proxy: {
      [process.env.VUE_APP_PROXY_PATH]: {
        target: baseApiURL,
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_PROXY_PATH}`]: ''
        }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name,
    devtool: isDev ? 'source-map' : 'cheap-module-source-map', // 源码映射 调试时开启 生产环境关闭
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new MonacoWebpackPlugin({
        languages: ['json'], // 配置需要的languages，减少打包后的体积
        output: './static/js/monaco-editor'
      }),
      new MonacoEditorLocalesPlugin({
        languages: ['es', 'zh-cn'],
        defaultLanguages: 'zh-cn',
        logUnmatched: false,
        mapLanguages: {}
      })
    ]
  },
  chainWebpack(config) {
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch').delete('preload')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config.when(!isDev, config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          // ElementUI抽离
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          // 公用模块抽离
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          },
          // 样式抽离
          styles: {
            name: 'chunk-styles',
            test: /\.css$/,
            chunks: 'all'
          }
        }
      })
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk('single')
      // gzip压缩
      config
        .plugin('compressionPlugin')
        .use(
          new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: productionGzipExtensions, // 所有匹配此{RegExp}的资产都会被处理
            threshold: 10240, // 只处理大于此大小的资产。以字节为单位
            minRatio: 0.8, // 只有压缩好这个比率的资产才能被处理
            deleteOriginalAssets: false // 是否删除原资源
          })
        )
        .end()
    })
  },
  // 引入sassMagic配置
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/styles/settings/_var.scss";
        @import "@/styles/tools/_sassMagic.scss";
        `
      }
    }
  }
}
