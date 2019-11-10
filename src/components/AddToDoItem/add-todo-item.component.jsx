import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../redux/actions'

export const AddTodoItem = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    dispatch(addNewTodo(todoText));
    setTodoText('');
  }
  return (
    <div>
      <input type="text" value={todoText} onChange={(event) => setTodoText(event.target.value)} />
      <button onClick={addTodo}>Add todo</button>
    </div>
  )
}