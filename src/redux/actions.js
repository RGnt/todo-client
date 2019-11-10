import {
  LOAD_TODOS_STARTED, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE,
  ADD_NEW_TODO_STARTED, ADD_NEW_TODO_SUCCESS, ADD_NEW_TODO_FAILURE,
  TOGGLE_TODO_DONE_STARTED, TOGGLE_TODO_DONE_SUCCESS, TOGGLE_TODO_DONE_FAILED,
  DELETE_TODO_STARTED, DELETE_TODO_SUCCESS, DELETE_TODO_FAILED,
  URL
} from './constants';

export const loadAllTodos = () => {
  return dispatch => {
    dispatch({ type: LOAD_TODOS_STARTED });
    fetch(`${URL}api/TodoItems`)
      .then((response) => response.json())
      .then((result) => dispatch({ type: LOAD_TODOS_SUCCESS, payload: result }))
      .catch(error => dispatch({ type: LOAD_TODOS_FAILURE, payload: error }))
  }
}

export const addNewTodo = (name) => {
  return dispatch => {
    dispatch({ type: ADD_NEW_TODO_STARTED });
    fetch(`${URL}api/TodoItems`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: `{"name": "${name}", "isComplete": false }`
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({ type: ADD_NEW_TODO_SUCCESS })
        dispatch(loadAllTodos());
      })
      .catch(error => dispatch({ type: ADD_NEW_TODO_FAILURE, payload: error }))
  }
}

export const toggleTodoDone = (todo) => {
  return dispatch => {
    dispatch({ type: TOGGLE_TODO_DONE_STARTED });
    fetch(`${URL}api/TodoItems/${todo.id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: `{"id": ${todo.id}, "name": "${todo.name}", "isComplete": ${!todo.isComplete}}`
    })
      .then((response) => response)
      .then(() => {
        dispatch({ type: TOGGLE_TODO_DONE_SUCCESS });
        dispatch(loadAllTodos());
      })
      .catch(error => dispatch({ type: TOGGLE_TODO_DONE_FAILED, payload: error }))
  }
}

export const deleteATodo = (id) => {
  return dispatch => {
    dispatch({ type: DELETE_TODO_STARTED });
    fetch(`${URL}api/TodoItems/${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => response)
      .then(() => {
        dispatch({ type: DELETE_TODO_SUCCESS });
        dispatch(loadAllTodos());
      })
      .catch(error => dispatch({ type: DELETE_TODO_FAILED, payload: error }))
  }
}