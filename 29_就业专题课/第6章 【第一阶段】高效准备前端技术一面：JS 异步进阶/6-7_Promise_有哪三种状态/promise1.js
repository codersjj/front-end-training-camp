// 加载图片
function loadImg(src) {
  // pending
  return new Promise((resolve, reject) => {
    const imgEl = document.createElement('img')
    imgEl.onload = function(res) {
      // fulfilled
      resolve(imgEl)
    }
    imgEl.onerror = function(err) {;
      const error = new Error(`图片加载失败，src:${src}`)
      // rejected
      reject(error)
    }
    imgEl.src = src
    imgEl.referrerPolicy = 'no-referrer'
  })
}

const url = 'https://i1.hdslb.com/bfs/face/396b93a7f619882afa711879dbf2cb98a40e7367.jpg@96w_96h_!web-dynamic.avif'
loadImg(url)
  .then(img => {
    console.log(img.nodeName)
    return img
  })
  .then(res => {
    console.log('res:', res)
  })
  .catch(err => {
    console.error(err)
  })

// 利用 Promise 可以实现通过链式调用（像流水线一样）解决 callback hell 的问题