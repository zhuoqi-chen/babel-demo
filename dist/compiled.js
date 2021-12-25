"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.function.name.js");

var _obj$a, _obj$a$b;

// import "core-js";
// import "regenerator-runtime/runtime";
// 箭头函数
var fn = function fn() {
  console.log("czq");
}; // promise


var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("czq");
  }, 0);
}); // array map

var list = [1, 2, 3, 4].map(function (item) {
  return item * 2;
}); // array entries

var list2 = Object.entries({
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
