class jQuery {
  constructor(selector) {
    const els = document.querySelectorAll(selector)
    this.length = els.length
    els.forEach((el, index) => this[index] = el)
  }

  each(fn) {
    for (let i = 0; i < this.length; i++) {
      fn(i, this[i])
    }
  }

  get(index) {
    return this[index]
  }

  on(event, handler) {
    this.each((index, elem) => {
      elem.addEventListener(event, handler)
    })
  }

  // 其它 DOM API
}

// 插件
jQuery.prototype.dialog = function(info) {
  alert(info)
}

// 扩展（覆写、造轮子）
class MyJQuery extends jQuery {
  constructor(selector) {
    super(selector)
  }
  // 扩展自己的方法
  addClass(className) {
    // ...
  }
  css(propertyName) {
    // ...
  }
  // ...
}


const $p = new jQuery('p')
console.log($p)
$p.each((index, elem) => {
  console.log('each', index, elem, elem.nodeName)
})
console.log($p.get(2))
$p.dialog('哈哈哈')
$p.on('click', (eventObj) => {
  console.log(eventObj, 'clicked')
})