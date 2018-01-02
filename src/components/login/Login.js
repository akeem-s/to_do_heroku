import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

export class Login extends React.Component{
  constructor(props){
    super(props)
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  responseFacebook(response){
    console.log(response)
  }

  render(){
    return(
      <div id="login_container" >
        <FacebookLogin
    appId="148933455764231"
    autoLoad={true}
    fields="name,email,picture"
    onClick={()=>{console.log("dwdw")}}
    callback={this.responseFacebook} />
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
