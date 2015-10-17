'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

exports['default'] = function () {
  var dir = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var level = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  return _path2['default'].join(__dirname, '../'.repeat(level + 1), dir);
};

module.exports = exports['default'];
