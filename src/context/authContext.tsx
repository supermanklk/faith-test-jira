import React, { ReactNode, useState } from 'react'
import * as auth from '../authProvider'
import { User } from '../pages/ProjectList/SearchPanel'

interface AuthForm {
  username: string
  password: string
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

  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用')
  }
  return context
}
