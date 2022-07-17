import React from 'react'
import logo from './logo.svg'
import './App.css'
import styled from '@emotion/styled'
import { useAuth } from './context/authContext'
import AuthenticatedApp from './authenticatedApp'
import UnauthenticatedApp from './unauthenticatedApp'

// 获取环境变量的地址
const baseUrl = process.env.REACT_APP_API_URL

console.log(baseUrl)

function App() {
  const { user } = useAuth()
  // return <div style={{ display: 'flex', justifyContent: 'center' }}>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>

  // 用css in js 代替 之前的内联写法
  return <Container style={{ display: 'flex', justifyContent: 'center' }}>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Container>
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export default App
