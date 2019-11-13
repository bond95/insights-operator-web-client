const { resolve } = require('path');

module.exports = {
  resolve: {
    alias: {
      _: `${resolve(__dirname, '../src')}`
    }
  }
}