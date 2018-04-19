import { connect } from 'react-redux';
import React from 'react';
// components
import CreateListPopup from './CreateListPopup';
import ListComponent from '../listComponent/ListComponent';
import ListTab from './ListTab';
import Login from '../login/Login';
// functional components
import Header from '../common/header/Header';
import ErrorMessage from '../common/ErrorMessage';
// actions
import { fetchTasks } from '../listComponent/listComponent.actions';
import { activateList, createList, nameChange, toggleCreateListPopup } from './listContainer.actions.js';

export class ListContainer extends React.Component{
  constructor(props){
    super(props);
    this.activateList = this.activateList.bind(this);
    // this.deleteList = this.deleteList.bind(this);
    this.fetchTasks = this.fetchTasks.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderCreateListPopup = this.renderCreateListPopup.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderListComponent = this.renderListComponent.bind(this);
    this.renderLoginComponent = this.renderLoginComponent.bind(this);
    this.renderUserProfileDetails = this.renderUserProfileDetails.bind(this);
  }

  handleChange(e){
    const {dispatch} = this.props;
    const listNameInputValue = e.target.value;
    dispatch(nameChange({listNameInputValue}));
  }

  handleSubmit(e){
    e.preventDefault();
    const { dispatch, listNameInputValue, id } = this.props;
    const payload = {id, name:listNameInputValue};
    dispatch(createList(payload));
  }

  activateList( id, name ){
    const { dispatch } = this.props;
    dispatch(activateList({activeListName: name, activeListId: id}));
    dispatch(fetchTasks({activeList: name, id}));
  }

  fetchTasks(listId){
    const { dispatch, id } = this.props;
    dispatch(fetchTasks({listId, userId: id}));
  }

  // deleteList(key){
  //   const { dispatch, listArray } = this.props;
  //   const len = listArray.length;
  //   for(var i = 0; i < len; i++){
  //     if(listArray[i] && listArray[i].key === key){
  //       dispatch(deleteList({listKey: i}));
  //     }
  //   }
  // }

  renderError(){
    const { error } = this.props;
    const className = 'errorComponent';
    if(error){
      return <ErrorMessage message={error} className={className}/>;
    }
    return null;
  }

  renderListComponent(){
    const { activeListId, activeListName } = this.props;
    if(activeListId){
      return <ListComponent
        key={activeListId}
        listName={activeListName}
      />;
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
    const { showPopup, avatarUrl } = this.props;
    if(showPopup){
      return <CreateListPopup
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        avatarUrl={avatarUrl}
      />;
    }
    return null;
  }

  renderUserProfileDetails(){
    const { avatarUrl, username, dispatch } = this.props;
    if(avatarUrl){
      return (
        <div>
          <div>
            <img src={avatarUrl} id="avatar" alt="user icon"></img>
            <p id="userNameListContainer">{username}</p>
          </div>
          <div id="createListButtonContainer" onClick={()=>{ dispatch(toggleCreateListPopup()); }}>
            <i className="fa fa-lg fa-plus" aria-hidden="true"></i>
          </div>
        </div>
      );
    }
    return (
      <div>
        {this.renderLoginComponent()}
      </div>
    );
  }

  render(){
    const { lists, username } = this.props;
    return(
      <div>
        <Header userName={username}/>
        <div className="listContainer" >
          <div className="userProfileNav">
            {this.renderUserProfileDetails()}
          </div>
          {this.renderError()}
          <aside className='listTabAside'>
            {lists.map((list, i)=>{
              return <ListTab
                key={i}
                activateList={this.activateList}
                fetchTasks={this.fetchTasks}
                listId={list.id}
                name={list.name}/>;
            })}
          </aside>
        </div>

        <div>
          {this.renderListComponent()}
        </div>
        {this.renderCreateListPopup()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {listContainerReducer: { activeListId, activeListName, lists, listArray, listNameInputValue, showPopup }, loginReducer:{ user:{avatarUrl, username, email, id} }} = state;

  return {
    activeListId,
    activeListName,
    avatarUrl,
    email,
    id,
    lists,
    listArray,
    listNameInputValue,
    username,
    showPopup,
  };
}

export default connect(mapStateToProps)(ListContainer);
