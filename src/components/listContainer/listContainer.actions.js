import { ListContainerActionTypes } from '../../ActionTypes.js';
const { ACTIVATE_LIST, DELETE_LIST, HANDLE_SUBMIT, LIST_CREATE_ERROR, LIST_NAME_CHANGE, TOGGLE_CREATE_LIST_POPUP } = ListContainerActionTypes;

export function activateList(payload){
  return{
    type: ACTIVATE_LIST,
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
