const product = {
  price: 10,
  count: 2
}

const totalPrice = product.price * product.count

console.log(totalPrice) // 20

// 修改了产品的数量
product.count = 5

console.log(totalPrice) // 20

// 需求：希望在修改了产品的数量后，重新获取总价时，是正确的总价，而不是原来计算得到的总价。可以实现吗？当然可以
