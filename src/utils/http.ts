import qs from 'qs'
import * as auth from '../authProvider'
import { useAuth } from '../context/authContext'

const apiUrl = process.env.REACT_APP_API_URL

interface Config extends RequestInit {
  data?: object
  token?: string
}

export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config = {}) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : ''
    },
    ...customConfig
  }

  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data || {})
  }
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      await auth.logout()
      window.location.reload()
      return Promise.reject({ message: '请重新登录' })
    }
    const data = response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export const useHttp = () => {
  const { user } = useAuth()

  // 这里可以优化的地方 [string, Config] 这个类型其实与我们定义的函数http的类型是一模一样的
  // 有没有一种方法让我们直接从http函数获取的入参的类型，而不是需要重复写一遍
  // 有呀，那就是通过 Parameters<typeof http> 来解决，拿到http的类型
  // return ([endpoint, config]: [string, Config]) => {
  //   http(endpoint, { ...config, token: user?.token })
  // }

  return (...[endpoint, config]: Parameters<typeof http>) => {
    return http(endpoint, { ...config, token: user?.token })
  }
}
