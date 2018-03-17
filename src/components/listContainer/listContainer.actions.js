import {ListActionTypes} from '../../ActionTypes.js';
const { ACTIVATE_LIST, DELETE_LIST, HANDLE_SUBMIT, LIST_CREATE_ERROR, LIST_NAME_CHANGE, TOGGLE_CREATE_LIST_POPUP } = ListActionTypes;

export function activateList(activeList, activeListName){
  return{
    type: ACTIVATE_LIST,
    activeList,
    activeListName,
  };
}

export function deleteList(listKey){
  return{
    type: DELETE_LIST,
    listKey,
  };
}

export function handleSubmit(newList){
  return{
    type: HANDLE_SUBMIT,
    newList,
  };
}

export function listCreateError(error){
  return{
    type: LIST_CREATE_ERROR,
    error,
  };
}

export function nameChange(listName){
  return{
    type: LIST_NAME_CHANGE,
    listName,
  };
}

export function toggleCreateListPopup(showPopup){
  return{
    type: TOGGLE_CREATE_LIST_POPUP,
    showPopup,
  };
}
