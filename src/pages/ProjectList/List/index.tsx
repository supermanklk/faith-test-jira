import React from 'react'
import { User } from '../SearchPanel/index'

interface Project {
  id: string
  name: string
  personId: string
  organization: string
  created: number
}

interface ListProps {
  list: Project[]
  users: User[]
}

const List = ({ list, users }: ListProps) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          {list.map((project) => {
            return (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{users.find((user) => user.id === project.personId)?.name || '未知'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default List
