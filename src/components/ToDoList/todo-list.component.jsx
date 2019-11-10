import React from 'react';
import { ToDoItem } from '../ToDoItem/todo-item.component';

export const ToDoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <ToDoItem key={todo.id} todo={todo} />
        )
      })}
    </div>
  )
}