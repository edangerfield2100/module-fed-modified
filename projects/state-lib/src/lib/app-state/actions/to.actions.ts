import { createAction, props } from '@ngrx/store';
import { ToDo } from '../models/to-do';

export const addToDo = createAction('[ToDo] Add ToDo', props<{ todo: ToDo }>());
export const RemoveToDo = createAction(
  '[ToDo] Remove ToDo',
  props<{ todo: ToDo }>()
);
