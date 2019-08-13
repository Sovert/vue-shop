'use strict'

module.exports = {
  devServer: {
    port: 8000,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: `http://127.0.0.1:7000/`,
        changeOrigin: true,
        pathRewrite: {
          '/api': '/'
        }
      }
    }
  }
}