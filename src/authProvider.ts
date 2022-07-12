import { User } from './pages/ProjectList/SearchPanel'
import { StatusCode } from './commonType'
const apiUrl = process.env.REACT_APP_NEW_URL
const localStorageKey = '__auth_provider_token__'
export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserrResponse = (user: User) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}

export const login = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/jira/registerUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async (response) => {
    if (response.ok) {
      let res = await response.json()
      if (res.errCode === StatusCode.success && res.results) {
        return handleUserrResponse(res.results)
      } else {
        return null
      }
    } else {
      return Promise.reject(data)
    }
  })
}

export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/jira/registerUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async (response) => {
    if (response.ok) {
      let res = await response.json()
      return handleUserrResponse(res)
    } else {
      return Promise.reject(data)
    }
  })
}

// 这里加一个async 就是返回的一个promise
export const logout = async () => window.localStorage.removeItem(localStorageKey)
