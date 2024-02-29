const ulEl = document.createElement('ul')

// i 在全局作用域
// let i
// for (i = 0; i < 10; i++) {
// i 在块级作用域
for (let i = 0; i < 10; i++) {
  const liEl = document.createElement('li')
  liEl.textContent = i
  // listener 函数不是立即执行的，而是在后续点击的时候才会执行，需注意此时 i 的值
  liEl.addEventListener('click', function() {
    alert(i)
  })
  ulEl.append(liEl)
}

document.body.append(ulEl)