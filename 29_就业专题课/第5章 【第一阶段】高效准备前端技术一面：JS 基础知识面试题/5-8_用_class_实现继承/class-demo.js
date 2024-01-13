// 类
class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }

  study() {
    console.log(`student: ${this.name}, number: ${this.number}, studying`)
    // console.log('student: ' + this.name + ', number: ' + this.number + ', studying')
  }
}

// 通过类 new 出来对象（实例）
const stu1 = new Student('alex', 101)
console.log(stu1.name)
console.log(stu1.number)
stu1.study()

const stu2 = new Student('jack', 102)
console.log(stu2.name)
console.log(stu2.number)
stu2.study()