import React, { Fragment, useState } from 'react'

type FormElem = React.FormEvent<HTMLFormElement>;

const ToDoList: React.SFC<{}> = () => {
  const [value, setValue] = useState<string>('')

  const handleSubmit = (e: FormElem):void => {
    e.preventDefault()
    setValue('')
  }
  return (
  <Fragment>
    <h1>Todo List</h1>
    <form>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        required
      />
      <button type='submit'>Add Todo</button>
    </form>
  </Fragment>
  )
}

export default ToDoList;