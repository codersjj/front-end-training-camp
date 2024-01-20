// class 实际上是函数，可见是语法糖
console.log(typeof Person) // function
console.log(typeof Student) // function

/* 隐式原型和显式原型 */
// 隐式原型
console.log(stu.__proto__)
// 显式原型
console.log(Student.prototype)
// 隐式原型指向显式原型，它们在内存中指向同一个地址
console.log(stu.__proto__ === Student.prototype) // true

console.log(stu.name)
stu.study()

/*
  原型关系：
  1. 每个 class 都有显式原型 prototype
  2. 每个实例都有隐式原型 __proto__
  3. 实例的 __proto__ 指向对应 class 的 prototype
*/

/*
  基于原型的查找规则：
    获取属性 name 或调用方法 study() 时，
    先查找自身的属性和方法，
    如果找不到，则自动去 __proto__ 中查找
*/