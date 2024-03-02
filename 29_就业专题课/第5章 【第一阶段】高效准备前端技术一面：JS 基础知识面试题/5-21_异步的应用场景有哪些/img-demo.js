console.log('start')
const imgEl = document.createElement('img')
imgEl.onload = function() {
  console.log('img loaded')
}
imgEl.src = 'https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/logo-horizontal-small.svg'
// document.body.append(imgEl)
console.log('end')