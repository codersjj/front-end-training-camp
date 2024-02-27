let a = 0
function fn1() {
  let a1 = 1
  function fn2() {
    let a2 = 2
    function fn3() {
      let a3 = 3
      return a + a1 + a2 + a3
    }
    fn3()
  }
  fn2()
}
fn1()

/*
  作用域：
    1. 全局作用域
    2. 函数作用域
    3. 块级作用域（ES6 新增）
*/

// ES6 块级作用域
if (true) {
  let x = 100
}
console.log(x) // Uncaught ReferenceError: x is not defined

/*
  自由变量：
    1. 一个变量在当前作用域中没有定义，但被使用了；
    2. 向上层作用域，一层一层依次寻找，直到找到为止；
    3. 如果到全局作用域都没找到，则报错（xxx is not defined）
*/