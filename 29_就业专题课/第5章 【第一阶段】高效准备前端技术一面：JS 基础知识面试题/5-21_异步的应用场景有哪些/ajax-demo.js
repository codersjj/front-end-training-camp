console.log('start')
$.get('https://httpbin.org/get', res => {
  console.log(res)
})
console.log('end')