
/* global require, module, __dirname */
const { resolve } = require('path');
const config = require('@redhat-cloud-services/frontend-components-config');
const commonConfig = require('./common.webpack.config.js');
const { config: webpackConfig, plugins } = config({
  rootFolder: resolve(__dirname, '../'),
  debug: true,
  https: true
});

module.exports = {
  ...webpackConfig,
  plugins,
  ...commonConfig,
};
