const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../dist/vue/',
  indexPath: 'client.html',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '^/web': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
