import React, { Fragment, useState } from 'react'

type FormElem = React.FormEvent<HTMLFormElement>;

interface ToDoInterface {
  text: string
  complete: boolean
}

const ToDoList: React.SFC<{}> = () => {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ToDoInterface[]>([])

  const handleSubmit = (e: FormElem):void => {
    e.preventDefault()
    addToDo(value)
    setValue('')
  }

  const addToDo = (text: string) => {
    const newToDos: ToDoInterface[] = [...todos, {text, complete: false}]
    setTodos(newToDos)
  }

    console.log(todos)
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type='submit'>Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ToDoInterface, index: number) =>
          <div key={index}>{todo.text}</div>
        )}
      </section>
    </Fragment>
  )
}

export default ToDoList;