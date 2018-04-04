import axios from 'axios';
import applyConverters from 'axios-case-converter';
import { LoginActionTypes } from '../../ActionTypes.js';
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
    return client.get('http://localhost:3500/users/6')
      .then(({ data })=>{
        dispatch(loginSuccess({user: data}));
      })
      .catch((e)=>{
        dispatch(loginError({status: e.response.status, message: e.response.statusText}));
      });
  };
}
