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

  const completeTodo = (index: number) => {
    const newToDos: ToDoInterface[] = [...todos]
    newToDos[index].complete = !newToDos[index].complete
    setTodos(newToDos)
  }

  const removeTodo = (index: number) => {
    const newToDos: ToDoInterface[] = [...todos]
    newToDos.splice(index, 1)
    setTodos(newToDos)
  }

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
        {todos.map((todo: ToDoInterface, index: number) => (
          <Fragment key={index}>
            <div style={{ textDecoration: todo.complete ? 'line-through' : ''}}>
              {todo.text}
            </div>
            <button type="button" onClick={() => completeTodo(index)}>
              {todo.complete ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              Remove
            </button>
          </Fragment>
        ))}
      </section>
    </Fragment>
  )
}

export default ToDoList;