const product = {
  price: 10,
  count: 2,
  get total() {
    // 下面的 this 在使用 target[property] 时，指向的是 target，即 product 对象
    // 而在使用 Reflect.get(target, property, receiver) 时，指向的是 receiver，这里也就是 productProxy 对象
    return this.price * this.count
  }
}

const productProxy = new Proxy(product, {
  get(target, property, receiver) {
    console.log("触发了 get ~ target, property:", target, property)
    // return target[property]
    return Reflect.get(target, property, receiver)
  }
})

console.log('total', productProxy.total)

// 下面再来看 Vue 3 中的效果
