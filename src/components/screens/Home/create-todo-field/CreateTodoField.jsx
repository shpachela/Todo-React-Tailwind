import React from 'react'
import { useState } from 'react';

export default function CreateTodoField({setTodos}) {
  const [title, setTitle] = useState('')

  const addTodo = (title) => {
    setTodos(prev => [
      {
        id: new Date(),
        title,
        isComplited: false
      },
      ...prev,
    ])
    setTitle('')
  }

  return (
    <div className=' w-full flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3'>
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyDown={e => e.key === 'Enter' && addTodo(title)}
        className='bg-transparent w-full border-none outline-none'
        placeholder='Add task' />
    </div>
  )
}
