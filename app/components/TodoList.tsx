import { ITodo } from '@/types/todos'
import React from 'react'
import Task from './Todo'

interface TodoListProps {
    todos: Array<ITodo>
}

export default function TodoList({
    todos,
}: TodoListProps): JSX.Element {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <Task key={todo.id} task={todo} />
      ))}
    </tbody>
  </table>
</div>
  )
}
