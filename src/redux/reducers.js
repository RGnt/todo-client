import {
  LOAD_TODOS_STARTED, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE,
  ADD_NEW_TODO_STARTED, ADD_NEW_TODO_SUCCESS, ADD_NEW_TODO_FAILURE,
  TOGGLE_TODO_DONE_STARTED, TOGGLE_TODO_DONE_SUCCESS, TOGGLE_TODO_DONE_FAILED,
  DELETE_TODO_STARTED, DELETE_TODO_SUCCESS, DELETE_TODO_FAILED
} from './constants';

const initialState = {
  isFetching: false,
  todos: [],
  error: null
}

export const loadTodos = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_TODOS_STARTED:
      return { ...state, isFetching: true };
    case LOAD_TODOS_SUCCESS:
      return { ...state, todos: action.payload, isFetching: false };
    case LOAD_TODOS_FAILURE:
      return { ...state, isFetching: false, error: action.payload }

    case ADD_NEW_TODO_STARTED:
      return { ...state, isFetching: true }
    case ADD_NEW_TODO_SUCCESS:
      return { ...state, isFetching: false }
    case ADD_NEW_TODO_FAILURE:
      return { ...state, isFetching: false, error: action.payload }

    case TOGGLE_TODO_DONE_STARTED:
      return { ...state, isFetching: true }
    case TOGGLE_TODO_DONE_SUCCESS:
      return { ...state, isFetching: false }
    case TOGGLE_TODO_DONE_FAILED:
      return { ...state, isFetching: false, error: action.payload }

    case DELETE_TODO_STARTED:
      return { ...state, isFetching: true }
    case DELETE_TODO_SUCCESS:
      return { ...state, isFetching: false }
    case DELETE_TODO_FAILED:
      return { ...state, isFetching: false, error: action.payload }
    default:
      return state;
  }
}