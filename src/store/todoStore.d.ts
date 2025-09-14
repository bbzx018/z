import type { StoreApi, UseBoundStore } from 'zustand'

export type Todo = { id: number; text: string; done: boolean }

export type TodoState = {
  todos: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
  clearTodos: () => void
}

export const useTodoStore: UseBoundStore<StoreApi<TodoState>>

