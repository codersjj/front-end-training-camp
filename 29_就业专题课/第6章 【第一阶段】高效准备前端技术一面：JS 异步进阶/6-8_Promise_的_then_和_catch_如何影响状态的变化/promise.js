/*
  then 会返回一个 Promise 对象，正常情况后续会变为 fulfilled，里面有报错则会变为 rejected
  catch 会返回一个 Promise 对象，正常情况后续会变为 fulfilled，里面有报错则会变为 rejected
*/

const p1 = Promise.resolve().then(() => 10)
console.log('p1:', p1) // pending
p1.then(res => {
  console.log('p1 then p1', p1) // fulfilled
})

const p2 = Promise.resolve().then(() => {
  throw new Error('p2 then err')
})
console.log('p2:', p2) // pending
p2.then(res => {
  console.log('p2 then p2', p2)
}).catch(err => {
  console.error('p2 catch p2', p2) // rejected
})

const p3 = Promise.reject('error1').catch(err => err)
console.log('p3:', p3) // pending
p3.then(res => {
  // fulfilled
  console.log('p3 then p3', p3, res)
}).catch(err => {
  console.log('p3 catch p3', p3)
})

const p4 = Promise.reject('error1').catch(err => {
  throw new Error('p4 catch error')
})
console.log('p4:', p4) // pending
p4.then(res => {
  console.log('p4 then p4', p4, res)
}).catch(err => {
  // rejected
  console.error('p4 catch p4', p4, err)
})