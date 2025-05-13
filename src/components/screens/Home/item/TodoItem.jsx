import React from 'react'
import Check from './Check'
import { BsTrash } from 'react-icons/bs'

export default function TodoItem({ todo, changeTodo, removeTodo }) {
  return (
    <div
      className=' w-full flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5'
      onClick={() => changeTodo(todo.id)}
    >
      <button className='flex items-center'>
        <Check isComplited={todo.isComplited} />
        <span className={todo.isComplited ? 'line-through' : ''}>{todo.title}</span>
      </button>
      <button onClick={(e) => {
        e.stopPropagation();
        removeTodo(todo.id)
      }}>
        <BsTrash size={22} className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300' />
      </button>
    </div>
  )
}
