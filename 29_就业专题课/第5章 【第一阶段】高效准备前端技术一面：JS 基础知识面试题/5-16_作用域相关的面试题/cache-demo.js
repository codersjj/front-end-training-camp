/*
  闭包的实际应用场景 1：闭包隐藏数据，只提供 API
*/

function createCache() {
  // 闭包中的数据，被隐藏，不被外部访问，外部只能访问 set、get
  const data = {}
  return {
    set(key, value) {
      data[key] = value
    },
    get(key) {
      return data[key]
    }
  }
}

const cache = createCache()
cache.set('a', { x: 100 })
const value = cache.get('a')
console.log(value)
