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
