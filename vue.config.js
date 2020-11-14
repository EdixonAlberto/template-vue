const { resolve } = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {},
      postcss: {
        autoprefixer: true,
        plugins: [require('autoprefixer')]
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve('src/assets/'),
        '@components': resolve('src/components/'),
        '@views': resolve('src/views/')
      },
      extensions: ['*', '.js', '.vue', '.json']
    }
  },
  productionSourceMap: false,
  lintOnSave: false
};
