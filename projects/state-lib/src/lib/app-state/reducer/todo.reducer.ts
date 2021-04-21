import { createReducer, on } from '@ngrx/store';
import { ToDoActions } from '../actions';
import { ToDo } from '../models/to-do';

export const todoFeatureKey = 'todo';

export class ToDoStateModel {
  todos: ToDo[];
}

const initialState: ToDoStateModel = {
  todos: [],
};

export const reducer = createReducer(
  initialState,
  on(ToDoActions.addToDo, (state, { todo }) => ({
    todos: [...state.todos, todo],
  })),
  on(ToDoActions.RemoveToDo, (state, { todo }) => ({
    todos: state.todos.filter(
      (t) => !(t.name === todo.name && t.description === todo.description)
    ),
  }))
);

export const selectToDos = (state: ToDoStateModel) => state.todos;
