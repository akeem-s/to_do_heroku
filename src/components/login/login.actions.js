import axios from 'axios';
const API_URL = 'http://localhost:3000/'

export const SEND_LOGIN_INFO = 'SEND_LOGIN_INFO'
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

export function sendLoginInfo(authInfo){
  return dispatch => {
    let data
    data = axios({
      method: 'post',
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":"POST",
        "Access-Control-Allow-Headers":"Content-Type",
        "Access-Control-Max-Age": "1728000"
      },
      url: API_URL+'users',
      data: {
        authInfo: authInfo,
      }
    }).then((response)=>{
      dispatch(updateUserInfo(response))
    })
  }
}

export function updateUserInfo(data){
  return {
    type: UPDATE_USER_INFO,
    data: data.data
  }
}