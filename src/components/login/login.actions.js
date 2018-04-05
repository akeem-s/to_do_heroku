import axios from 'axios';
import applyConverters from 'axios-case-converter';
import { LoginActionTypes } from '../../ActionTypes.js';
import { fetchLists } from '../listContainer/listContainer.actions';
const { LOGIN_SUCCESS, LOGIN_ERROR } = LoginActionTypes;

export function loginSuccess(payload){
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginError(payload){
  return {
    type: LOGIN_ERROR,
    payload,
  };
}

export function sendLoginInfo(authInfo){
  return dispatch => {
    const client = applyConverters(axios.create());
    return client.post('http://localhost:3500/users/find_or_create', authInfo)
      .then(({ data })=>{
        dispatch(loginSuccess({user: data}));
        dispatch(fetchLists(data.id));
      })
      .catch((e)=>{
        dispatch(loginError({status: e.response.status, message: e.response.statusText}));
      });
  };
}
