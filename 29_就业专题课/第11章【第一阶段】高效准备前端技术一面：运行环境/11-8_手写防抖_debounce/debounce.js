const inputEl = document.getElementById('search-input')
inputEl.addEventListener('keyup', debounce(function(e) {
  console.log(e.target.value, this)
}, 600))

function debounce(fn, delay = 500) {
  // timer 是闭包中的
  let timer = null

  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      // 清空定时器
      timer = null
    }, delay)
  }
}