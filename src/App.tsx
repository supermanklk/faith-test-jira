import React from 'react'
import logo from './logo.svg'
import './App.css'
import ProjectList from './pages/ProjectList'
import TryUseArray from './pages/TryUseArray'

// 获取环境变量的地址
const baseUrl = process.env.REACT_APP_API_URL

console.log(baseUrl)

function App() {
  return (
    <div className='App'>
      <ProjectList />
      <TryUseArray />
    </div>
  )
}

export default App
