const SearchPanel = ({ param, setParam, users }) => {
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
