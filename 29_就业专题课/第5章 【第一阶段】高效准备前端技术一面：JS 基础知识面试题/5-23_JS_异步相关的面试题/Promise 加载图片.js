function loadImg(src) {
  return new Promise((resolve, reject) => {
    const imgEl = document.createElement('img')
    imgEl.onload = function(event) {
      resolve(imgEl)
    }
    imgEl.onerror = function(event) {
      reject(`${new Error('图片加载失败')}, src: ${src}`)
    }
    imgEl.src = src
    imgEl.referrerPolicy = 'no-referrer'
  })
}

// const url1 = 'https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/logo-horizontal-small.svg'
// loadImg(url1).then(res => {
//   console.log(res.width)
//   return res
// }).then(res => {
//   console.log(res.height)
// }).catch(err => {
//   console.error(err)
// })

const url1 = 'https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/logo-horizontal-small.svg'
const url2 = 'https://i1.hdslb.com/bfs/face/396b93a7f619882afa711879dbf2cb98a40e7367.jpg@96w_96h_!web-dynamic.avif'
loadImg(url1).then(img1 => {
  console.log('img1, width:', img1.width)
  return img1 // 普通对象
}).then(img1 => {
  console.log('img1, height:', img1.height)
  return loadImg(url2) // Promise 对象
}).then(img2 => {
  console.log('img2, width:', img2.width)
  return img2
}).then(img2 => {
  console.log('img2, height:', img2.height)
}).catch(err => {
  console.error(err)
})
