var name = "window";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};
function sayName() {
  var sss = person.sayName;
  sss(); // 默认绑定，window
  person.sayName(); // 隐式绑定：person
  (person.sayName)(); // '.'的优先级高于'（）'，所以加（）不影响，指向person
  (b = person.sayName)(); // 术语：间接函数引用，得到一个独立函数，单独调用 指向window
}
sayName();
