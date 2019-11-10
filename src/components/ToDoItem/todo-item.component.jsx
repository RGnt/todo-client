import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodoDone, deleteATodo } from '../../redux/actions';
export const ToDoItem = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const { name, isComplete } = props.todo;
  return (
    <div>
      <h2 style={isComplete ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{name}</h2>
      <button onClick={() => dispatch(toggleTodoDone(props.todo))}>Done</button>
      <button onClick={() => dispatch(deleteATodo(props.todo.id))}>Delete</button>
    </div>
  );
};