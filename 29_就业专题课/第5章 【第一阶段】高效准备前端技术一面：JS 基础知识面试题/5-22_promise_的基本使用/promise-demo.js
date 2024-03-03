// Promise 解决回调地狱问题
function getData(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      success(data) {
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}

const url1 = 'https://httpbin.org/get'
const url2 = 'https://httpbin.org/get'
const url3 = 'https://httpbin.org/get'
getData(url1).then(res => {
  console.log('data1', res)
  return getData(url2)
}).then(res => {
  console.log('data2', res)
  return getData(url3)
}).then(res => {
  console.log('data3', res)
}).catch(err => {
  console.error(err)
})