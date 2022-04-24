import { useRef } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { addTodo } from './todoSlice'

export default function App() {
  const todos: string[] = useAppSelector((state) => state.todos.value)
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const handleAdd = () => {
    const todo = inputRef.current?.value
    if (!todo) return

    // Add todo to store
    dispatch(addTodo(todo))

    // Clear input field
    inputRef.current.value = ''
  }

  return (
    <>
      <h1>Redux Todos</h1>
      {todos.map((todo, index) => {
        return <li key={index}>{todo}</li>
      })}
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  )
}
