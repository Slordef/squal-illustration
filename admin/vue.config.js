const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../dist/vue/',
  indexPath: 'admin.html',
  devServer: {
    port: 8081,
    proxy: {}
  }
})
