/*
  1. 同步代码，一行一行放到 Call Stack 中执行
  2. 遇到异步代码，先“记录”下来，等待时机（定时、网络请求等）
  3. 时机到了，就放到 Callback Queue
  4. 如果 Call Stack 为空（即同步代码执行完），Event Loop 开始工作
  5. 轮询查找 Callback Queue，如果有则放到 Call Stack 执行
  6. 然后继续轮询查找（永动机一样）
*/