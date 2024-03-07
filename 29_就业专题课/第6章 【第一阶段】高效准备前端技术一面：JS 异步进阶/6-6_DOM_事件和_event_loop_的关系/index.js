/*
  DOM 事件和 event loop

    JavaScript 是单线程的
    异步（定时器、ajax 等）使用回调，基于 event loop
      定时器：回调函数加入 queue 的时机为定时结束时，时机由浏览器控制（Web APIs）
      ajax：回调函数加入 queue 的时机为网络请求返回结果时，时机由浏览器控制（Web APIs）
    DOM 事件也使用回调，基于 event loop
      事件的回调函数加入 queue 的时机为事件发生时，时机由浏览器控制（Web APIs）
*/