const obj1 = { x: 100 }
const obj2 = obj1
let a = obj1.x
obj2.x = 200
a = 300
console.log(obj1.x) // 200
