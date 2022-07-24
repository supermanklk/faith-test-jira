import { Input, Form, Select } from 'antd'

export interface User {
  id: string
  name: string
  username?: string
  email: string
  title: string
  token?: string
}
interface SearchPanelProps {
  users: User[]
  param: {
    name: string
    personId: string
  }
  setParam: (param: SearchPanelProps['param']) => void
}

const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <Form style={{ marginBottom: '2rem' }} layout={'inline'}>
      <Form.Item>
        <Input
          type='text'
          value={param.name}
          placeholder='项目名'
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) => {
            setParam({
              ...param,
              personId: value
            })
          }}
          id=''>
          <option value={''}>负责人</option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            )
          })}
        </Select>
      </Form.Item>
    </Form>
  )
}

export default SearchPanel
