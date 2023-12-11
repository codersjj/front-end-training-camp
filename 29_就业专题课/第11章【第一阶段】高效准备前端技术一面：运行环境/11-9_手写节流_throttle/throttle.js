const box = document.getElementById('drag')
box.addEventListener('drag', throttle(function(e) {
  console.log(e.offsetX, e.offsetY)
}, 200))

function throttle(fn, wait = 100) {
  let timer = null
  return function() {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, wait)
  }
}