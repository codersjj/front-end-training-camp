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
    console.log('get count:', count)
    return count
  },
  set(newValue) {
    console.log('set count, newValue:', newValue)
    count = newValue
    calcTotalPrice()
  }
})

// 修改了产品的数量
product.count = 5

// 新增了产品的折扣（对象新增了一个属性，在此之前，Object.defineProperty() 无法知道你新增的属性是什么，所以也就无法监听该属性）
product.discount = 0.8

// 删除了产品的数量（对象删除了一个用 Object.defineProperty() 处理过的属性，不会触发 getter，也不会触发 setter）
delete product.count
console.log(product)

console.log(totalPrice) // 50

// Object.defineProperty() 无法监听到对象属性的新增或删除操作，正因如此，Vue 2 中不能检测对象和数组的变化，具体来说就是，
// 对于对象，Vue 2 无法检测属性的添加或删除，因为 Vue 是在初始化实例时对 getter 和 setter 进行处理，所以属性必须一开始就在 data 对象上存在才能让 Vue 将其转换为响应式的
// 对于数组，Vue 2 无法检测通过索引方式修改数组项时数组的变动，也无法检测修改数组 length 属性时数组的变动