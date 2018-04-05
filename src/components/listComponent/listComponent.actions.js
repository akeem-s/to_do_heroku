import { ListComponentActionTypes } from '../../ActionTypes.js';
const { TASK_NAME_CHANGE, TASK_DETAILS_CHANGE, HANDLE_TASK_SUBMIT, TASK_CREATE_ERROR, TOGGLE_TASK_FORM, DELETE_TASK, RESET_ACTIVE_TASKS, UPDATE_ACTIVE_TASKS} = ListComponentActionTypes;

export function updateActiveTasks(payload){
  return {
    type: UPDATE_ACTIVE_TASKS,
    payload,
  };
}

export function resetActiveTasks(){
  return {
    type: RESET_ACTIVE_TASKS,
  };
}

export function taskNameChange(payload){
  return{
    type: TASK_NAME_CHANGE,
    payload,
  };
}

export function taskDetailsChange(payload){
  return{
    type: TASK_DETAILS_CHANGE,
    payload,
  };
}

export function handleSubmit(payload){
  return{
    type: HANDLE_TASK_SUBMIT,
    payload,
  };
}

export function taskCreateError(payload){
  return{
    type: TASK_CREATE_ERROR,
    payload,
  };
}

export function toggleTaskForm(){
  return{
    type: TOGGLE_TASK_FORM,
  };
}

export function deleteTask(payload){
  return{
    type: DELETE_TASK,
    payload,
  };
}
