import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Card, Divider } from 'antd'
import styled from '@emotion/styled'
import { useAuth } from './context/authContext'
import AuthenticatedApp from './authenticatedApp'
import UnauthenticatedApp from './unauthenticatedApp'
import panda from './asset/images/panda.svg'
import left from './asset/images/left.svg'
import right from './asset/images/right.svg'
import 'antd/dist/antd.css'

// 获取环境变量的地址
const baseUrl = process.env.REACT_APP_API_URL

console.log(baseUrl)

function App() {
  const { user } = useAuth()
  const [isRegister, setIsRegister] = useState(false)
  // return <div style={{ display: 'flex', justifyContent: 'center' }}>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>

  // 用css in js 代替 之前的内联写法
  return (
    <>
      {user ? (
        <AuthenticatedApp />
      ) : (
        <Container>
          <Header />
          <Background />
          {/* 此刻如果我们改写Card的样式 传统的方式就是去找这个组件给的属性比如 className 、bodyStyle 此刻我们可以直接通过 emotion来做 */}
          {/* <Card>切换到{user ? '登录' : '注册'}</Card> */}
          <CardWrapper>
            <Title>请登录</Title>
            <UnauthenticatedApp />
            <Divider />
            {
              <a
                href='#/'
                onClick={() => {
                  setIsRegister(!isRegister)
                }}>
                {isRegister ? `已经有了账号? 直接登录` : `没有账号? 注册新账号`}
              </a>
            }
          </CardWrapper>
        </Container>
      )}
    </>
  )
}

const Title = styled.h2``

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-image: url(${left}), url(${right});
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover;
`

const Header = styled.header`
  width: 100%;
  background: url(${panda}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
`

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
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
