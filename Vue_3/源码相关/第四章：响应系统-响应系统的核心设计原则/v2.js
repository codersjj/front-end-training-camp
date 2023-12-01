const product = {
  price: 10,
  count: 2
}
let totalPrice = 0

const calcTotalPrice = () => totalPrice = product.price * product.count

// 手动调用函数，计算总价
calcTotalPrice()
console.log(totalPrice) // 20

// 修改了产品的数量
product.count = 5

// 修改了数量后，手动调用函数，重新计算总价
calcTotalPrice()
console.log(totalPrice) // 50

// 需求：手动调用太麻烦了，要是能自动调用就好了，能实现吗？可以的
