export default function listContainerReducer(state = {
  listArray:[],
  showPopup: false,
}, action){
  const { type, payload } = action;
  switch(type){
    case 'ACTIVATE_LIST':
      return Object.assign({}, state, {
        activeList: payload.activeList,
        activeListName: payload.activeListName,
      });

    case 'DELETE_LIST':
      state.listArray.splice(payload.listKey, 1);
      return Object.assign({}, state, {});

    case 'HANDLE_SUBMIT':
      state.listArray.push(payload);
      return Object.assign({}, state, {
        listName: '',

      });

    case 'LIST_CREATE_ERROR':
      return Object.assign({}, state, {
        error: payload.error,
      });

    case 'LIST_NAME_CHANGE':
      return Object.assign({}, state, {
        listName: payload.listName,
      });

    case 'TOGGLE_CREATE_LIST_POPUP':
      return Object.assign({}, state, {
        showPopup: !state.showPopup,
      });

    default:
      return state;
  }
}
