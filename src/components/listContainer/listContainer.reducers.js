import { ListContainerActionTypes } from '../../ActionTypes.js';
const { ACTIVATE_LIST, CREATE_LIST_SUCCESS, CREATE_LIST_FAIL, DELETE_LIST, FETCH_LISTS_FAIL, FETCH_LISTS_SUCCESS, LIST_CREATE_ERROR, LIST_NAME_CHANGE, RESET_ACTIVE_LIST, TOGGLE_CREATE_LIST_POPUP } = ListContainerActionTypes;

export default function listContainerReducer(state = {
  lists:[],
  showPopup: false,
  hasError: false,
}, action){
  const { type, payload } = action;
  switch(type){
    case ACTIVATE_LIST:
      return { ...state, activeList: payload.activeList, activeListName: payload.activeListName };

    case CREATE_LIST_SUCCESS:
      return { ...state, hasError: false};

    case CREATE_LIST_FAIL:
      return { ...state, hasError: true, message: payload.message, status: payload.status };

    case DELETE_LIST:
      state.listArray.splice(payload.listKey, 1);
      return Object.assign({}, state, {});

    case FETCH_LISTS_FAIL:
      return { ...state, hasError: true, message: payload.message, status: payload.status };

    case FETCH_LISTS_SUCCESS:
      return { ...state, lists: payload.lists, hasError: false };

    case LIST_CREATE_ERROR:
      return Object.assign({}, state, {
        error: payload.error,
      });

    case LIST_NAME_CHANGE:
      return Object.assign({}, state, {
        listNameInputValue: payload.listNameInputValue,
      });

    case RESET_ACTIVE_LIST:
      return { ...state, activeList: '', activeListName: '' };

    case TOGGLE_CREATE_LIST_POPUP:
      return Object.assign({}, state, {
        showPopup: !state.showPopup,
      });

    default:
      return state;
  }
}
