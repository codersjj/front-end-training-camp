// 获取第一份数据
$.get('https://httpbin.org/get', function(data1) {
  console.log(data1)

  // 获取第二份数据
  $.get('https://httpbin.org/get', function(data2) {
    console.log(data2)

    // 获取第三份数据
    $.get('https://httpbin.org/get', function(data3) {
      console.log(data3)

      // 还可能获取更多的数据
    })
  })
})