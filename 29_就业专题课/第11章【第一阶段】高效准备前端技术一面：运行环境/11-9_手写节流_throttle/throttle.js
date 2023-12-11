const box = document.getElementById('drag')
let timer = null
box.addEventListener('drag', function(e) {
  if (timer) return
  timer = setTimeout(() => {
    console.log(e.offsetX, e.offsetY)
    timer = null
  }, 100)
})

