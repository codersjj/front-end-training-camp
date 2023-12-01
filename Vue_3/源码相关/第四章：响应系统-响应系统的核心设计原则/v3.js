let count = 2
const product = {
  price: 10,
  count
}
let totalPrice = 0

const calcTotalPrice = () => totalPrice = product.price * product.count

// 手动调用函数，计算总价
calcTotalPrice()
console.log(totalPrice) // 20

// 在修改 product.count 之前对其 getter 和 setter 进行设置即可
Object.defineProperty(product, 'count', {
  get() {
    return count
  },
  set(newValue) {
    count = newValue
    calcTotalPrice()
  }
})

// 修改了产品的数量
product.count = 5

console.log(totalPrice) // 50

// 以上使用 Object.defineProperty() 方式实现的响应式，就是 Vue 2 中响应式系统内部使用的方式
// 通过 Object.defineProperty() 监听指定对象的指定属性的 get 和 set 操作，再在其中进行相应的操作，实现数据的响应式

// 但是 Object.defineProperty() 存在缺陷，比如说它无法监听到对象属性的新增或删除操作