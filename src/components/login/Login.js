import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { sendLoginInfo } from './login.actions.js';

export class Login extends React.Component{
  constructor(props){
    super(props);
    this.handleFacebookResponse = this.handleFacebookResponse.bind(this);
  }

  handleFacebookResponse(response){
    const { dispatch } = this.props;
    const { name, email, userID, picture:{data:url} } = response;
    let authInfo = {
      username: name,
      avatarUrl: url,
      email: email,
      provider: 'facebook',
      password: userID,
    };
    dispatch(sendLoginInfo(authInfo));
  }

  render(){
    return(
      <div id="loginContainer" >
        <FacebookLogin
          appId="148933455764231"
          autoLoad={false}
          fields="name,email,picture"
          onClick={{}}
          callback={this.handleFacebookResponse} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loginReducer } = state;

  return {
    loginReducer,
  };
}

export default connect(mapStateToProps)(Login);
