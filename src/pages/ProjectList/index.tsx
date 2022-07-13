import React, { useEffect, useState } from 'react'
import SearchPanel, { User } from './SearchPanel/index'
import List from './List/index'
import { useMount } from '../../customHooks/useMount'
import qs from 'qs'

import { cleanObject } from '../../utils'
import { useDebounce } from '../../customHooks/coustomDebounce'
import { useHttp } from '../../utils/http'
const apiUrl = process.env.REACT_APP_API_URL
const ProjectList = () => {
  // function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  const [users, setUsers] = useState<User[]>([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])

  const client = useHttp()

  // debounceParam 能够拿到类型,原因是 useDebounce 内部使用了泛型
  let debounceParam = useDebounce(param, 200)

  useEffect(() => {
    client('projects', { data: cleanObject(debounceParam) }).then(setList)
    // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async (response) => {
    //   if (response.ok) {
    //     let res = await response.json()
    //     setList(res)
    //   }
    // })
  }, [debounceParam])

  useMount(() => {
    fetch(`${apiUrl}/projects`).then(async (response) => {
      if (response.ok) {
        let res = await response.json()
        setList(res)
      }
    })
  })

  useMount(() => {
    client('users').then(setUsers)

    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     let res = await response.json()
    //     setUsers(res)
    //   }
    // })
  })

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}

export default ProjectList
