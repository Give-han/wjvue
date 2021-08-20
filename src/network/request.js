import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: '/wj',
    timeout: 5000
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}

export function post (path, data, nojson = false) {
  if (nojson) {
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
