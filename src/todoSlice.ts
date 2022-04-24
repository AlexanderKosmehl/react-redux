import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface TodoState {
  value: string[]
}

const initialState: TodoState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload]
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((todo: string) => todo !== action.payload)
    },
  },
})

export const { addTodo, removeTodo } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todos.value

export default todoSlice.reducer
