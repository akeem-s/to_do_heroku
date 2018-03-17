import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import * as LoginActions from './login.actions.js';

export class Login extends React.Component{
  constructor(props){
    super(props)
    this.handleFacebookResponse = this.handleFacebookResponse.bind(this)
  }

  handleFacebookResponse(response){
    let authInfo = {
      username: response.name,
      avatarUrl: response.picture.data.url,
      email: response.email,
      provider: "facebook",
      password: response.userID
    }
    const {dispatch} = this.props
    dispatch(LoginActions.sendLoginInfo(authInfo))
  }

  render(){
    return(
      <div id="login_container" >
        <FacebookLogin
    appId="148933455764231"
    autoLoad={false}
    fields="name,email,picture"
    onClick={{}}
    callback={this.handleFacebookResponse} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { loginReducer } = state

  return {
  	loginReducer
  }
}

export default connect(mapStateToProps)(Login);
