import React from 'react'
import { useAuth } from '../context/authContext'
import { Button, Input } from 'antd'

import styled from '@emotion/styled'

const UnauthenticatedApp = () => {
  const { login } = useAuth()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // as HTMLInputElement 就是告诉ts我知道我在做什么,我里面肯定是有value的
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({ username, password })
    // register({ username, password })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <UserInfoLable>
          <Input placeholder='用户名' type='text' id='username' />
        </UserInfoLable>
        <UserInfoLable>
          <Input placeholder='密码' type='password' id='password' />
        </UserInfoLable>
        <LoginButton type='primary' htmlType='submit'>
          登录
        </LoginButton>
      </form>
    </div>
  )
}

const UserInfoLable = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`

const LoginButton = styled(Button)`
  width: 100%;
  margin-top: 1.2rem;
`

export default UnauthenticatedApp
