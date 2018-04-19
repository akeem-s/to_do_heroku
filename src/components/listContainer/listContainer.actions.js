import axios from 'axios';
import applyConverters from 'axios-case-converter';
import { ListContainerActionTypes } from '../../ActionTypes.js';
import { fetchTasks, resetActiveTasks } from '../listComponent/listComponent.actions'; //eslint-disable-line
const { ACTIVATE_LIST, CREATE_LIST_SUCCESS, CREATE_LIST_FAIL, DELETE_LIST_FAIL, DELETE_LIST_SUCCESS, FETCH_LISTS_FAIL, FETCH_LISTS_SUCCESS, HANDLE_SUBMIT, LIST_CREATE_ERROR, LIST_NAME_CHANGE, RESET_ACTIVE_LIST, TOGGLE_CREATE_LIST_POPUP } = ListContainerActionTypes;

export function activateList(payload){
  return{
    type: ACTIVATE_LIST,
    payload,
  };
}

export function createListFail(payload){
  return{
    type: CREATE_LIST_FAIL,
    payload,
  };
}

export function createListSuccess(payload){
  return{
    type: CREATE_LIST_SUCCESS,
    payload,
  };
}

export function deleteListSuccess(payload){
  return{
    type: DELETE_LIST_SUCCESS,
    payload,
  };
}

export function deleteListFail(payload){
  return{
    type: DELETE_LIST_FAIL,
    payload,
  };
}

export function fetchListsSuccess(payload){
  return{
    type: FETCH_LISTS_SUCCESS,
    payload,
  };
}

export function fetchListsFail(payload){
  return{
    type: FETCH_LISTS_FAIL,
    payload,
  };
}

export function handleSubmit(payload){
  return{
    type: HANDLE_SUBMIT,
    payload,
  };
}

export function listCreateError(payload){
  return{
    type: LIST_CREATE_ERROR,
    payload,
  };
}

export function nameChange(payload){
  return{
    type: LIST_NAME_CHANGE,
    payload,
  };
}

export function resetActiveList(){
  return{
    type: RESET_ACTIVE_LIST,
  };
}

export function toggleCreateListPopup(){
  return{
    type: TOGGLE_CREATE_LIST_POPUP,
  };
}

export function createList(payload){
  const { id } = payload;
  return dispatch => {
    const client = applyConverters(axios.create());
    client.post(`http://localhost:3500/users/${id}/lists`, payload)
      .then((response)=>{
        dispatch(createListSuccess());
        dispatch(fetchLists({id}));
        dispatch(toggleCreateListPopup());
      })
      .catch((e)=>{
        dispatch(createListFail({status: e.response.status, message: e.response.statusText}));
        dispatch(toggleCreateListPopup());
      });
  };
}

export function deleteList(payload){
  const { userId, listId } = payload;
  return dispatch => {
    const client = applyConverters(axios.create());
    client.delete(`http://localhost:3500/users/${userId}/lists/${listId}`, payload)
      .then((response) => {
        dispatch(deleteListSuccess(payload));
        dispatch(fetchLists(userId));
        dispatch(resetActiveList());
        dispatch(resetActiveTasks());
      })
      .catch((e)=>{
        dispatch(deleteListFail({status: e.response.status, message: e.response.statusText}));
      });
  };
}

export function fetchLists(payload){
  const { id } = payload;
  return dispatch => {
    const client = applyConverters(axios.create());
    return client.get(`http://localhost:3500/users/${id}/lists`)
      .then((response)=>{
        dispatch(fetchListsSuccess({lists: response.data}));
      })
      .catch((e)=>{
        console.log(e);
        dispatch(fetchListsFail({status: e.response.status, message: e.response.statusText}));
      });
  };
}
