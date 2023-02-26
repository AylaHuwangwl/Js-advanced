var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
/**
 * 创建一个空对象，将this指向空对象，执行函数体中的代码，若没有返回非空对象默认返回这个对象
 */
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() //person1 隐式
person1.foo1.call(person2) //person2 显示

person1.foo2() //person1 上层作用域
person1.foo2.call(person2) //person1 上层作用域

person1.foo3()() //window 独立函数调用，默认绑定
person1.foo3.call(person2)() //window 独立函数调用，默认绑定
person1.foo3().call(person2) //person2 显式

person1.foo4()() // person1 上层作用域
person1.foo4.call(person2)() //person2
person1.foo4().call(person2) //person1 隐式绑定