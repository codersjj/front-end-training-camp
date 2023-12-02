let count = 2
const product = {
  price: 10,
  count
}

const productProxy = new Proxy(product, {
  get(target, property) {
    return target[property]
  },
  set(target, property, newValue) {
    target[property] = newValue
    calcTotalPrice()
    return true
  },
  deleteProperty(target, property) {
    const res = delete target[property]
    calcTotalPrice()
    return res
  }
})

let totalPrice = 0

const calcTotalPrice = () => {
  const price = productProxy.price
  const count = productProxy.count ?? 1
  const discount = productProxy.discount ?? 1

  totalPrice = price * count * discount
}

// 手动调用函数，计算总价
calcTotalPrice()
console.log(totalPrice) // 20

// 修改了产品的数量
productProxy.count = 5

// 新增了产品的折扣
productProxy.discount = 0.8

// 删除了产品的数量
delete productProxy.count
console.log(productProxy)

console.log(totalPrice) // 8

// 实际上，我们在创建 Proxy 时，一般会结合 Reflect 一起使用，以简化 Proxy 的创建，具体来说，就是 Reflect 在 Proxy 的 handler（处理器对象）的 trap（捕获器）中提供默认的转发行为。此外，Reflect 方法还允许更精细地控制内部方法的调用方式，比如指定 new.target 的值，比如自定义 this 的值。
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect#:~:text=The%20Reflect%20methods,the%20this%20value.

// 下面拿 this 的问题举例
