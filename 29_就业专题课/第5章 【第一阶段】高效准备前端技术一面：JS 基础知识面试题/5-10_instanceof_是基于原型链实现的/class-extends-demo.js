// 父类
class Person {
  constructor(name) {
    this.name = name
  }

  eat() {
    console.log(`${this.name} is eating`)
  }
}

// 子类
class Student extends Person {
  constructor(name, number) {
    super(name)
    this.number = number
  }

  study() {
    console.log(`student: ${this.name}, number: ${this.number}, studying`)
  }
}

// 通过类 new 出来对象（实例）
const stu = new Student('alex', 101)

// 结合“原型链图解1”来看：
console.log(Student.prototype.__proto__)
console.log(Person.prototype)
console.log(Student.prototype.__proto__ === Person.prototype) // true
// 结合“原型链图解1”来看：
console.log(stu.name) // alex
console.log(stu.hasOwnProperty('name')) // true
console.log(stu.hasOwnProperty('study')) // false
stu.study() // student: alex, number: 101, studying
console.log(stu.hasOwnProperty('eat')) // false
console.log(stu.hasOwnProperty('hasOwnProperty')) // false

// 结合“原型链图解2”来看：
// Array 的 prototype 属性指向的对象在 stu 对象的原型链上不存在
console.log(stu instanceof Array) // false
// Student 的 prototype 属性指向的对象在 stu 对象的原型链上存在
console.log(stu instanceof Student) // true
// Person 的 prototype 属性指向的对象在 stu 对象的原型链上存在
console.log(stu instanceof Person) // true
// Object 的 prototype 属性指向的对象在 stu 对象的原型链上存在
console.log(stu instanceof Object) // true

/*
  注意：
    class 是 ES6 语法规范，由 ECMA 委员会发布；
    ECMA 只规定语法规则（即我们代码的书写规范），不规定如何实现，具体实现由 JS 引擎决定；
    以上实现方式（见原型链图解）都是 V8 引擎（主流的 JS 引擎）的实现方式，也是主流的；
*/
