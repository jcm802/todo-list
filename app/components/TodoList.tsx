import { ITodo } from '@/types/todos'
import React from 'react'
import Task from './Todo'

interface TodoListProps {
    tasks: Array<ITodo>
}

export default function TodoList({
    tasks,
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
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </tbody>
  </table>
</div>
  )
}
