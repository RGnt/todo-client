import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import { loadAllTodos, addNewTodo } from './redux/actions';
import { ToDoList } from './components/ToDoList/todo-list.component';
import { AddTodoItem } from './components/AddToDoItem/add-todo-item.component';

function App() {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(loadAllTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <ToDoList todos={todos} />
      <AddTodoItem />
    </div>
  );
}

export default App;
