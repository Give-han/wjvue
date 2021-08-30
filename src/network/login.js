import { post } from './request'

export function login (account, password) {
  const data = {
    useraccount: account,
    password: password
  }
  return post('/login', data, true)
}
