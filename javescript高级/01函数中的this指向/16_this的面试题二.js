var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    // 第一个表达式；this=>person1
    // 第一个表达式；this=>person2
    // 第一个表达式；this=>person1
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

person1.foo1() //person1  隐式绑定
person1.foo1.call(person2) //person2 显示绑定

person1.foo2() //window  上层作用域
person1.foo2.call(person2) //window 层作用域
// ***
person1.foo3()() //person1×  window √  person1.foo3()拿到独立函数，独立函数调用，默认绑定
// ***
person1.foo3.call(person2)() //person2×  window √   person1.foo3.call(person2)拿到独立函数，独立函数调用，默认绑定
person1.foo3().call(person2) //person2  显示绑定

person1.foo4()() //person1
person1.foo4.call(person2)() //person2
person1.foo4().call(person2) //window× person1√