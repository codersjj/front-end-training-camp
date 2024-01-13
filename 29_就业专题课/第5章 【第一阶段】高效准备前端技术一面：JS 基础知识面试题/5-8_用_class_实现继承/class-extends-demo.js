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
// 子类
class Teacher extends Person {
  constructor(name, major) {
    super(name)
    this.major = major
  }

  teach() {
    console.log(`Teacher ${this.name} is teaching`)
  }
}

// 通过类 new 出来对象（实例）
const stu = new Student('alex', 101)
console.log(stu.name)
console.log(stu.number)
stu.eat()
stu.study()
// 通过类 new 出来对象（实例）
const teacher = new Teacher('Alice', 'math')
console.log(teacher.name)
console.log(teacher.major)
teacher.eat()
teacher.teach()