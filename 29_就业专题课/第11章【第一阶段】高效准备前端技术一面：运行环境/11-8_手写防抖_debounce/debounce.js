const inputEl = document.getElementById('search-input')
let timer = null
inputEl.addEventListener('keyup', e => {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    // 模拟触发 change 事件
    console.log(e.target.value)
    // 清空定时器
    timer = null
  }, 500)
})