import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useAuth } from './context/authContext'
import AuthenticatedApp from './authenticatedApp'
import UnauthenticatedApp from './unauthenticatedApp'

// 获取环境变量的地址
const baseUrl = process.env.REACT_APP_API_URL

console.log(baseUrl)

function App() {
  const { user } = useAuth()
  return <div className='App'>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>
}

export default App
