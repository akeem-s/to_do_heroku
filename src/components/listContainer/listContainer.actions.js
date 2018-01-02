export const ACTIVATE_LIST = 'ACTIVATE_LIST'
export const DELETE_LIST = 'DELETE_LIST'
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
export const LIST_CREATE_ERROR = 'LIST_CREATE_ERROR'
export const NAME_CHANGE = 'NAME_CHANGE'
export const TOGGLE_CREATE_LIST_POPUP = 'TOGGLE_CREATE_LIST_POPUP'

export function activateList(listKey, listName){
  return{
    type: ACTIVATE_LIST,
    activeList: listKey,
    activeListName: listName
  }
}

export function deleteList(key){
  return{
    type: DELETE_LIST,
    listKey: key
  }
}

export function handleSubmit(newList){
  return{
    type: HANDLE_SUBMIT,
    newList: newList
  }
}

export function listCreateError(error){
  return{
    type: LIST_CREATE_ERROR,
    error: error
  }
}

export function nameChange(listName){
  return{
    type: NAME_CHANGE,
    listName: listName
  }
}
  
export function toggleCreateListPopup(val){
  return{
    type: TOGGLE_CREATE_LIST_POPUP,
    showCreateListPopup: val
  }
}
