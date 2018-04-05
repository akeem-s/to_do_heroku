import axios from 'axios';
import applyConverters from 'axios-case-converter';
import { ListContainerActionTypes } from '../../ActionTypes.js';
const { ACTIVATE_LIST, CREATE_LIST_SUCCESS, CREATE_LIST_FAIL, DELETE_LIST, FETCH_LISTS_FAIL, FETCH_LISTS_SUCCESS, HANDLE_SUBMIT, LIST_CREATE_ERROR, LIST_NAME_CHANGE, TOGGLE_CREATE_LIST_POPUP } = ListContainerActionTypes;

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

export function deleteList(payload){
  return{
    type: DELETE_LIST,
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

export function toggleCreateListPopup(){
  return{
    type: TOGGLE_CREATE_LIST_POPUP,
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

export function createList(payload){
  const { id } = payload;
  return dispatch => {
    const client = applyConverters(axios.create());
    client.post(`http://localhost:3500/users/${id}/lists`, payload)
      .then((response)=>{
        console.log(response);
        dispatch(createListSuccess());
        dispatch(fetchLists(id));
        dispatch(toggleCreateListPopup());
      })
      .catch((e)=>{
        dispatch(createListFail({status: e.response.status, message: e.response.statusText}));
        dispatch(toggleCreateListPopup());
      });
  };
}

export function fetchLists(payload){
  const { id } = payload;
  return dispatch => {
    const client = applyConverters(axios.create());
    return client.get(`http://localhost:3500/users/${id}/lists`)
      .then( (response)=>{
        dispatch(fetchListsSuccess({lists: response.data}));
      })
      .catch( (e)=>{
        dispatch(fetchListsFail({status: e.response.status, message: e.response.statusText}));
      });
  };
}
