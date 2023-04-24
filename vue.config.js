const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    port:8200
  },
  transpileDependencies: true,
  lintOnSave:false
})
