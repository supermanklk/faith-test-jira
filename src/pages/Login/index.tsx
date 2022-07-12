import React from 'react'
import { login, register } from '../../authProvider'
const apiUrl = process.env.REACT_APP_API_URL

export default function Login() {
  const login = (param: { username: string; password: string }) => {
    // fetch(`${apiUrl}/jira/registerUser`, {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(param)
    }).then(async (response) => {
      if (response.ok) {
        let res = await response.json()
        localStorage.setItem('__token__', res.results.token)
      }
    })
  }

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
        <div>
          <label htmlFor='username'>用户名</label>
          <input type='text' id='username' />
        </div>
        <div>
          <label htmlFor='password'>密码</label>
          <input type='password' id='password' />
        </div>
        <button type='submit'>注册</button>
      </form>
    </div>
  )
}
