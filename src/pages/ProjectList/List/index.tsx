import React from 'react'
import { Table } from 'antd'
import { User } from '../SearchPanel/index'
import './index.css'
import dayjs from 'dayjs'

interface Project {
  id: string
  name: string
  personId: string
  created: number
}

interface ListProps {
  list: Project[]
  users: User[]
}

const List = ({ list, users }: ListProps) => {
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '负责人',
      dataIndex: 'personId',
      key: 'personId',
      render: (value: string) => {
        return users.find((user) => user.id === value)?.name || '未知'
      }
    },
    {
      title: '创建时间',
      dataIndex: 'created',
      key: 'created',
      render: (text: string) => {
        return text ? dayjs(text).format('YYYY-MM-DD HH:mm:ss') : '无'
      }
    }
  ]

  return (
    <div className='listContent'>
      <Table dataSource={list} columns={columns} />;
    </div>
  )
}

export default List
