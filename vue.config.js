const { resolve } = require('path');

const baseUrl = resolve('src');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@assets/scss/utils";`
      },
      postcss: {
        autoprefixer: true,
        plugins: [require('autoprefixer')]
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve(baseUrl, 'assets'),
        '@components': resolve(baseUrl, 'components'),
        '@views': resolve(baseUrl, 'views'),
        '@api': resolve(baseUrl, 'services', 'api')
      },
      extensions: ['*', '.js', '.vue', '.json']
    }
  },
  productionSourceMap: false,
  lintOnSave: false
};
