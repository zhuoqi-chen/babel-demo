"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

require("core-js/modules/es.function.name.js");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/entries"));

var _context, _obj$a, _obj$a$b;

// import "core-js";
// import "regenerator-runtime/runtime";
// 箭头函数
var fn = function fn() {
  console.log("czq");
}; // promise


var p = new _promise.default(function (resolve, reject) {
  setTimeout(function () {
    resolve("czq");
  }, 0);
}); // array map

var list = (0, _map.default)(_context = [1, 2, 3, 4]).call(_context, function (item) {
  return item * 2;
}); // array entries

var list2 = (0, _entries.default)({
  a: 1
}); // es6 class

var Person = /*#__PURE__*/function () {
  function Person(name) {
    (0, _classCallCheck2.default)(this, Person);
    this.name = name;
  }

  (0, _createClass2.default)(Person, [{
    key: "say",
    value: function say() {
      console.log(this.name);
    }
  }]);
  return Person;
}();

var obj = {
  a: {
    b: 1
  }
};
var c = (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : (_obj$a$b = _obj$a.b) === null || _obj$a$b === void 0 ? void 0 : _obj$a$b.c;
