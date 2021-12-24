"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.function.name.js");

var _obj$a, _obj$a$b;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
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
