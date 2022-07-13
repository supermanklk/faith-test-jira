import React, { ReactNode, useState } from 'react'
import * as auth from '../authProvider'
import { useMount } from '../customHooks/useMount'
import { User } from '../pages/ProjectList/SearchPanel'
import { http } from '../utils/http'

interface AuthForm {
  username: string
  password: string
}

// bootstrap 是一个UI库
// 但是它的中文意思是启动的意思
const bootstrapUser = async () => {
  let user = null
  const token = auth.getToken()
  if (token) {
    // const data = await http('getUserByToken', { token })
    // user = data.user
    user = {
      username: 'faith',
      password: '123',
      create_time: '2022-07-13 10:37:51',
      id: '8989',
      token: '1234',
      name: 'binbin',
      email: 'xxx',
      title: 'sss'
    }
  }

  // should return user
  // return user
  return user
}

const AuthContext = React.createContext<
  | undefined
  | {
      user: User | null
      login: (form: AuthForm) => Promise<void>
      register: (form: AuthForm) => Promise<void>
      logout: () => Promise<void>
    }
>(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (form: AuthForm) => {
    // auth.login(form).then((user) => {
    //   setUser(user)
    // })
    // 上面注释的就是 auth.login(form).then(setUser) 缩写
    return auth.login(form).then(setUser)
  }

  const register = (form: AuthForm) => {
    return auth.register(form).then(setUser)
  }

  const logout = () => {
    return auth.logout().then(() => {
      setUser(null)
    })
  }

  // 当用户登录状态的时候，页面刷新，保持登录状态
  useMount(() => {
    bootstrapUser().then(setUser)
  })

  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用')
  }
  return context
}
