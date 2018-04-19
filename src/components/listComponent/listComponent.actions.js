import axios from 'axios';
import applyConverters from 'axios-case-converter';
import { ListComponentActionTypes } from '../../ActionTypes.js';
const { CREATE_TASK_SUCCESS, CREATE_TASK_FAIL, FETCH_TASKS_FAIL, FETCH_TASKS_SUCCESS, TASK_NAME_CHANGE, TASK_DETAILS_CHANGE, TOGGLE_TASK_FORM, DELETE_TASK, RESET_ACTIVE_TASKS, UPDATE_ACTIVE_TASKS} = ListComponentActionTypes;

export function createTaskSuccess(){
  return{
    type: CREATE_TASK_SUCCESS,
  };
}

export function createTaskFail(payload){
  return{
    type: CREATE_TASK_FAIL,
    payload,
  };
}

export function deleteTask(payload){
  return{
    type: DELETE_TASK,
    payload,
  };
}

export function fetchTasksFail(payload){
  return{
    type: FETCH_TASKS_FAIL,
    payload,
  };
}

export function fetchTasksSuccess(payload){
  return{
    type: FETCH_TASKS_SUCCESS,
    payload,
  };
}

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

export function toggleTaskForm(){
  return{
    type: TOGGLE_TASK_FORM,
  };
}

export function createTask(payload){
  const { listId, userId, taskName } = payload;
  return dispatch => {
    const client = applyConverters(axios.create());
    return client.post(`http://localhost:3500/users/${userId}/lists/${listId}/tasks`, {taskName})
      .then((response)=>{
        dispatch(createTaskSuccess());
        dispatch(fetchTasks({userId, listId}));
        document.getElementById('taskNameInput').value = '';
      })
      .catch((e)=>{
        dispatch(createTaskFail({status: e.response.status, message: e.response.statusText}));
      });
  };
}

export function fetchTasks(payload){
  const { userId, listId } = payload;
  return dispatch => {
    const client = applyConverters(axios.create());
    return client.get(`http://localhost:3500/users/${userId}/lists/${listId}/tasks/`)
      .then((response)=>{
        dispatch(fetchTasksSuccess({tasks: response.data}));
      })
      .catch((e)=>{
        dispatch(fetchTasksFail({status: e.response.status, message: e.response.statusText}));
      });
  };
}
