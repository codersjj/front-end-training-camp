Function.prototype.myCall = function(thisArg, ...args) {
  const fn = this
  thisArg.fn = fn
  const res = thisArg.fn(...args)
  delete thisArg.fn
  return res
}

function foo(...args) {
  console.log(this, ...args)
  return 666
}
const res1 = foo.call({ x: 100 }, 1, 2)
console.log(res1)
const res2 = foo.myCall({ x: 100 }, 1, 2)
console.log(res2)