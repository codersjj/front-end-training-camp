/*
  Promise 的三种状态
    pending、fulfilled、rejected
    pending -> fulfilled 或者 pending -> rejected
    变化不可逆
*/

const p1 = new Promise((resolve, reject) => {

})
console.log('p1:', p1) // pending

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100)
    console.log('p2 setTimeout:', p2) // fulfilled
  }, 1000);
})
console.log('p2:', p2) // pending

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('err')
    console.log('p3 setTimeout:', p3) // rejected
  }, 1000);
})
console.log('p3:', p3) // pending