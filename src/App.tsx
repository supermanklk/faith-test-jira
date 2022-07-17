import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Card, Divider } from 'antd'
import styled from '@emotion/styled'
import { useAuth } from './context/authContext'
import AuthenticatedApp from './authenticatedApp'
import UnauthenticatedApp from './unauthenticatedApp'
import 'antd/dist/antd.css'

// 获取环境变量的地址
const baseUrl = process.env.REACT_APP_API_URL

console.log(baseUrl)

function App() {
  const { user } = useAuth()
  // return <div style={{ display: 'flex', justifyContent: 'center' }}>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>

  // 用css in js 代替 之前的内联写法
  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      {/* 此刻如果我们改写Card的样式 传统的方式就是去找这个组件给的属性比如 className 、bodyStyle 此刻我们可以直接通过 emotion来做 */}
      {/* <Card>切换到{user ? '登录' : '注册'}</Card> */}
      <CardWrapper>
        {' '}
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        <Divider />
        切换到{user ? '登录' : '注册'}
      </CardWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const CardWrapper = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`

export default App
