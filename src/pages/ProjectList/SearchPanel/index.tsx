export interface User {
  id: string
  name: string
  username?: string
  email: string
  title: string
  organization: string
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
    <div>
      <input
        type='text'
        value={param.name}
        onChange={(evt) =>
          setParam({
            ...param,
            name: evt.target.value
          })
        }
      />
      <select
        name=''
        value={param.personId}
        onChange={(evt) => {
          setParam({
            ...param,
            personId: evt.target.value
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
      </select>
    </div>
  )
}

export default SearchPanel
