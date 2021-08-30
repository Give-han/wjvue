import axios from 'axios'
import store from '../store/index'

export function request (config) {
  const instance = axios.create({
    baseURL: '/wj',
    timeout: 5000,
    headers: {
      token: store.state.token
    }
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}

export function post (path, data, json = true) {
  if (json) {
    return request({
      url: path,
      method: 'post',
      data: data
    })
  } else {
    return request({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (const it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      url: path,
      method: 'post',
      data: data
    })
  }
}
