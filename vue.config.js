const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
      }),
    ],
  },
};

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuefirebase/'
    : '/'
}