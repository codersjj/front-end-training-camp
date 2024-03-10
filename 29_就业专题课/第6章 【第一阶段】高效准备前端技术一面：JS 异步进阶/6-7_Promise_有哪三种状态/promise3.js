/*
  Promise 状态的表现
    pending 状态：不会触发 then 和 catch 的回调
    fulfilled 状态：触发后续的 then 的回调函数
    rejected 状态：触发后续的 catch 的回调函数
*/

const p1 = Promise.resolve(100) // fulfilled
console.log('p1:', p1)
p1.then(res => {
  console.log('p1 then res', res)
}).catch(err => {
  console.error('p1 catch err', err)
})

const p2 = Promise.reject('p2 err') // rejected
console.log('p2:', p2)
p2.then(res => {
  console.log('p2 then res', res)
}).catch(err => {
  console.error('p2 catch err', err)
})