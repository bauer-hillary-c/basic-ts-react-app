import React, { Fragment } from 'react'

const ToDoList: React.SFC<{}> = () => {
  return (
  <Fragment>
    <h1>Todo List</h1>
    <form>
      <input type='text' required />
      <button type='submit'>Add Todo</button>
    </form>
  </Fragment>
  )
}

export default ToDoList;