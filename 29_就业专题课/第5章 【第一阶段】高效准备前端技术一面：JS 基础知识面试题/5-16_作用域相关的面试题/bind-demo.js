Function.prototype.myBind = function(thisArg, ...args) {
  const fn = this
  return function(...innerArgs) {
    return fn.call(thisArg, ...args, ...innerArgs)
  }
}

function foo(...args) {
  console.log(this, args)
}
const bar = foo.bind({ x: 100 }, 1, 2)
bar(3, 4)
const baz = foo.myBind({ x: 100 }, 1, 2)
baz(3, 4)