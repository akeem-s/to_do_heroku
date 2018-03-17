import { connect } from 'react-redux';
import React from 'react';
// components
import CreateListPopup from './CreateListPopup';
import ListComponent from '../listComponent/ListComponent';
import ListTab from './ListTab';
import Login from '../login/Login';
import Header from '../common/header/Header';

// actions
import * as ListContainerActions from './listContainer.actions.js';
const { activateList, deleteList, handleSubmit, listCreateError, nameChange, toggleCreateListPopup } = ListContainerActions;

export class ListContainer extends React.Component{
  constructor(props){
    super(props);
    this.activateList = this.activateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderCreateListPopup = this.renderCreateListPopup.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderListArrayHtml = this.renderListArrayHtml.bind(this);
    this.renderListComponent = this.renderListComponent.bind(this);
    this.renderLoginComponent = this.renderLoginComponent.bind(this);
    this.renderUserProfileDetails = this.renderUserProfileDetails.bind(this);
    this.toggleCreateListPopup = this.toggleCreateListPopup.bind(this);
  }

  handleChange(e){
    const {dispatch} = this.props;
    const listName = e.target.value;
    dispatch(nameChange(listName));
  }

  handleSubmit(e){
    e.preventDefault();
    const {dispatch} = this.props;
    const { listArray, listName } = this.props;
    const key = listArray.length;
    const list = {key: key, name: listName};
    if(listName){
      dispatch(handleSubmit(list));
      dispatch(listCreateError(''));
      dispatch(toggleCreateListPopup(false));
      document.getElementById('list_name_input').value = null;
    }
    else {
      const error = 'List cannot be blank';
      dispatch(listCreateError(error));
    }
  }

  activateList(listKey, listName){
    const { dispatch } = this.props;
    dispatch(activateList(listKey, listName));
  }

  toggleCreateListPopup(e){
    e.preventDefault();
    const { dispatch, showPopup } = this.props;
    dispatch(toggleCreateListPopup(!showPopup));
  }

  deleteList(key){
    const { dispatch, listArray } = this.props;
    const len = listArray.length;
    for(var i = 0; i < len; i++){
      if(listArray[i] && listArray[i].key === key){
        dispatch(deleteList(i));
      }
    }
  }

  renderError(){
    let errorHtml;
    const { error } = this.props;
    if(error){
      errorHtml = (
        <h1> {error}</h1>
      );
    }
    return errorHtml;
  }

  renderListArrayHtml(){
    let listArrayHtml = [];
    const { listArray } = this.props;
    if(listArray){
      const len = listArray.length;
      for(let i = 0; i < len; i++){
        listArrayHtml.push(
          <ListTab
            activateList={this.activateList}
            deleteList={this.deleteList}
            key={listArray[i].key}
            name={listArray[i].name}/>
        );
      }
    }
    return listArrayHtml;
  }

  renderListComponent(){
    const { activeListName, activeList } = this.props;
    if(activeListName){
      return <ListComponent
        key={activeList}
        name={activeListName}/>;
    }
    return null;
  }

  renderLoginComponent(){
    const { username } = this.props;
    if (!username){
      return <Login/>;
    }
    return null;
  }

  renderCreateListPopup(){
    const { showPopup } = this.props;
    if(showPopup){
      return <CreateListPopup
        handleSubmit={this.handleSubmit}
        toggleCreateListPopup={this.toggleCreateListPopup}
        handleChange={this.handleChange}/>;
    }
    return null;
  }

  renderUserProfileDetails(){
    const { avatarUrl, username } = this.props;
    if(avatarUrl){
      return (
        <div>
          <img src={avatarUrl} id="avatar" alt="user icon"></img>
          <p id="user_name_list_container">{username}</p>
        </div>
      );
    }
    return (
      <div>
        <img src="./img/user_icon.png" id="avatar" alt="user icon"></img>
        <p id="user_name_list_container">Login In For Your Details</p>
      </div>
    );
  }

  render(){
    const { activeListName } = this.props; 
    return(
      <div>
        <Header activeListName={activeListName}/>
        <div className="list_container" >
          <div className="mini_nav">
            <i className="fa fa-lg fa-bars header_bars" aria-hidden="true"></i>
            <i className="fa fa-lg fa-search header_magnify" aria-hidden="true"></i>
          </div>
          <div className="user_profile_nav">
            {this.renderUserProfileDetails()}
          </div>
          {this.renderError()}
          <div id="create_list_button_container" onClick={this.toggleCreateListPopup}>
            <div className="circle-plus">
              <div className="circle">
                <div className="horizontal"></div>
                <div className="vertical"></div>
              </div>
            </div>
            <i className="fa fa-lg fa-plus" aria-hidden="true"></i>
            <p id="create_list_button">Create List</p>
          </div>
          {this.renderListArrayHtml()}
          {this.renderLoginComponent()}
        </div>

        <div id="active_list_container">
          <img src="./img/monster.png" id="monster_png" alt="background"></img>
          {this.renderListComponent()}
        </div>
        {this.renderCreateListPopup()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {listContainerReducer: { activeList, activeListName, listArray, listName, showPopup }} = state;
  const {loginReducer:{ avatarUrl, username, email }} = state;

  return {
    activeList,
    activeListName,
    avatarUrl,
    email,
    listArray,
    listName,
    username,
    showPopup,
  };
}

export default connect(mapStateToProps)(ListContainer);
