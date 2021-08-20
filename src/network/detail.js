// eslint-disable-next-line no-unused-vars
import { request, post } from './request'

export function getBookBYId (bookId) {
  return post('/book/getById', { bookId: bookId }, false)
}
