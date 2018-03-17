export function loginReducer(state = {
  username:'',
  avatarUrl:'',
  email:'',
  id:''
}, action){
  switch(action.type){
    case 'UPDATE_USER_INFO':
      return Object.assign({}, state, {
        username: action.data.username,
        email: action.data.email,
        avatarUrl: action.data.avatar_url,
        id: action.data.id
      })

    default:
      return state
  }
}

export default loginReducer;
