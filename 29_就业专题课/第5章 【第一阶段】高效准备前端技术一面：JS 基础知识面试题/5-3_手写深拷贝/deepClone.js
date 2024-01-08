const obj1 = {
  name: 'alan',
  age: 18,
  address: {
    city: 'beijing'
  },
  friends: ['jack', 'alex']
}

// const obj2 = obj1
// obj2.address.city = 'shanghai'
// console.log(obj1.address.city) // shanghai
// obj2.friends.push('andy')
// console.log(obj1.friends) // ['jack', 'alex', 'andy']

const obj2 = deepClone(obj1)
obj2.address.city = 'shanghai'
console.log(obj1.address.city) // beijing
obj2.friends.push('andy')
console.log(obj1.friends) // ['jack', 'alex']

/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 * @returns 新的对象
 */
function deepClone(obj = {}) {
  // 如果是值类型，没有深拷贝一说，直接返回
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  // 遍历属性
  for (let key in obj) {
    // 如果是对象自身的属性（保证 key 不是原型的属性），就对该属性的值进行深拷贝
    if (obj.hasOwnProperty(key)) {
      // 递归调用！！！
      result[key] = deepClone(obj[key])
    }
  }

  // 返回结果
  return result
}