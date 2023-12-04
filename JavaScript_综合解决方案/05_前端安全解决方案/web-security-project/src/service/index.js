import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api.imooc-web.lgdsunday.club/api',
  timeout: 5000
})

request.interceptors.request.use(config => {
  // config.headers.icode = ''
  return config
})

request.interceptors.response.use(res => {
  const { data, message, success } = res.data
  if (success) {
    return data
  } else {
    return Promise.reject(message)
  }
}, err => {
  return Promise.reject(err)
})

export default request