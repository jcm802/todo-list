import Image from 'next/image'
import AddTask from './components/AddTodo'
import TodoList from './components/TodoList'
import { getAllTodos } from '@/todosApi'

export default async function Home() {
  const todos = await getAllTodos();
  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div  className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List</h1>
        <AddTask />
      </div>
      <TodoList todos={todos} />
    </main>
  )
}
