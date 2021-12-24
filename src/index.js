// 箭头函数
const fn = () => {
  console.log("czq");
};

// promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("czq");
  }, 0);
});

// array map
const list = [1, 2, 3, 4].map((item) => item * 2);

// es6 class
class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}
