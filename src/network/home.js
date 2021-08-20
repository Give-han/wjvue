import { post, request } from './request'

export function getRecommendBook () {
  return request({
    url: '/book/recommendBook'
  })
}

export function getBookNews () {
  return request({
    url: '/book/bookNews'
  })
}

export function getPopularBook () {
  return request({
    url: '/book/popularBook/10',
    method: 'post'
  })
}

export function getIndexTags () {
  return request({
    url: '/tag/indexTags'
  })
}

export function searchBook (name) {
  const data = {
    name: name
  }
  return post('/book/searchBook', data, false)
}
