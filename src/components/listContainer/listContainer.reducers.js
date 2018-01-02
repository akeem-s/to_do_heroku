export function listContainerReducer(state = {
  listArray:[],
  activeList: null,
  activeListName: null,
  showCreateListPopup: false,
  error: null
}, action){
  switch(action.type){
    case 'ACTIVATE_LIST':
      return Object.assign({}, state, {
        activeList: action.activeList,
        activeListName: action.activeListName
      })

    case 'DELETE_LIST':
      state.listArray.splice(action.listKey, 1)
      return Object.assign({}, state, {})

    case 'HANDLE_SUBMIT':
      state.listArray.push(action.newList)
      return Object.assign({}, state, {
        listName: ''
      })

    case 'LIST_CREATE_ERROR':
      return Object.assign({}, state, {
        error: action.error
      })

    case 'NAME_CHANGE':
      return Object.assign({}, state, {
        listName: action.listName
      })

    case 'TOGGLE_CREATE_LIST_POPUP':
      return Object.assign({}, state, {
        showCreateListPopup: action.showCreateListPopup
      })

    default:
      return state
  }
}

export default listContainerReducer;
