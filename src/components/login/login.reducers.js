import { LoginActionTypes } from '../../ActionTypes.js';
const { LOGIN_ERROR, LOGIN_SUCCESS } = LoginActionTypes;
const INITIAL_STATE = {
  hasError: false,
  user:{},
};

export function loginReducer(state=INITIAL_STATE, action){
  const { type, payload } = action;
  switch(type){
    case LOGIN_SUCCESS:
      return {hasError: false, user: payload.user};
    case LOGIN_ERROR:
      return { ...state, hasError: true, message: payload.message, status: payload.status, isLoading: false };

    default:
      return state;
  }
}

export default loginReducer;
