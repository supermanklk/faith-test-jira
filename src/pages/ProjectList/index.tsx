import React, { useEffect, useState } from 'react'
import SearchPanel from './SearchPanel/index'
import List from './List/index'
import useMount from '../../customHooks/useMount'
import qs from 'qs'
import { cleanObject } from '../../utils/index'
import useDebounce from '../../customHooks/coustomDebounce'
const apiUrl = process.env.REACT_APP_API_URL
const ProjectList = () => {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])

  let debounceParam = useDebounce(param, 2000)

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json())
      }
    })
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
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        let res = await response.json()
        setUsers(res)
      }
    })
  })

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}

export default ProjectList