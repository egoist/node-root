var path = require('path')

function root (dir) {
  dir = dir || ''
  return path.join(__dirname, '../..', dir)
}

module.exports = root