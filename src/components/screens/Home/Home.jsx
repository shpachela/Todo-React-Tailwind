import React from 'react'
import TodoItem from './item/TodoItem'
import { useState } from 'react';
import CreateTodoField from './create-todo-field/CreateTodoField';

const data = []

export default function Home() {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isComplited = !current.isComplited
    setTodos(copy)
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter(t => t.id != id))
  }


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-white w-4/5">
        <h1 className='text-2xl font-bold text-center mb-10'>Todo</h1>
        <CreateTodoField setTodos={setTodos} />
        {todos.map((todo) =>
          <TodoItem
            key={todo.id}
            todo={todo}
            changeTodo={changeTodo}
            removeTodo={removeTodo} />
        )}
      </div>
    </div>
  )
}

