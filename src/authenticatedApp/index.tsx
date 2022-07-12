import React from 'react'
import { useAuth } from '../context/authContext'
import ProjectList from '../pages/ProjectList'
import TryUseArray from '../pages/TryUseArray'
const AuthenticatedApp = () => {
  const { logout } = useAuth()
  return (
    <div>
      AuthenticatedApp
      <ProjectList />
      <TryUseArray />
      <button
        onClick={() => {
          logout()
        }}>
        退出
      </button>
    </div>
  )
}

export default AuthenticatedApp
