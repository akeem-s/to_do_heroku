import { connect } from 'react-redux';
import React from 'react';
// components
import CreateListPopupComponent from '../createListPopupComponent/CreateListPopupComponent'
import ListComponent from '../listComponent/ListComponent';

// actions
import * as ListContainerActions from './listContainer.actions.js';

export class ListContainer extends React.Component{
  constructor(props){
    super(props)
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderActiveListHtml = this.renderActiveListHtml.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderListArrayHtml = this.renderListArrayHtml.bind(this);
    this.renderPopup = this.renderPopup.bind(this);
    this.toggleCreateListPopup = this.toggleCreateListPopup.bind(this);
  }

  handleChange(e){
    const {dispatch} = this.props
    let listName = e.target.value
    dispatch(ListContainerActions.nameChange(listName))
  }

  handleSubmit(e){
    e.preventDefault()
    const {dispatch} = this.props
    let key = this.props.listContainerReducer.listArray.length
    let listName = this.props.listContainerReducer.listName
    let newList = {key: key, name: listName}
    if(listName){
      dispatch(ListContainerActions.handleSubmit(newList))
      document.getElementById("list_name_input").value = ""
      dispatch(ListContainerActions.listCreateError(''))
      dispatch(ListContainerActions.toggleCreateListPopup(false))
    }
    else {
      let error = "List cannot be blank"
      dispatch(ListContainerActions.listCreateError(error))
    }
  }

  activateList(listKey, listName){
    const {dispatch} = this.props
    dispatch(ListContainerActions.activateList(listKey, listName))
  }

  toggleCreateListPopup(e){
    e.preventDefault()
    const {dispatch} = this.props
    dispatch(ListContainerActions.toggleCreateListPopup(!this.props.listContainerReducer.showCreateListPopup))
  }

  deleteList(key){
    const {dispatch} = this.props
    let len = this.props.listContainerReducer.listArray.length
    for(var i = 0; i < len; i ++){
      if(this.props.listContainerReducer.listArray[i] && this.props.listContainerReducer.listArray[i].key === key){
        dispatch(ListContainerActions.deleteList(i))
      }
    }
  }

  renderActiveListHtml(){
    let activeListHtml
      if(this.props.listContainerReducer.activeListName){
        activeListHtml = (
          <ListComponent key={this.props.listContainerReducer.activeList} name={this.props.listContainerReducer.activeListName}/>
        )
        return activeListHtml
      }
    }

  renderError(){
    let errorHtml
    if(this.props.listContainerReducer.error){
      errorHtml = (
        <h1> {this.props.listContainerReducer.error}</h1>
      )
    }
    return errorHtml
  }

  renderListArrayHtml(){
    let listArrayHtml = [];

    if(this.props.listContainerReducer.listArray){
      let len = this.props.listContainerReducer.listArray.length
      for(let i = 0; i < len; i ++){
        listArrayHtml.push(
          <div className="list_tab" key={this.props.listContainerReducer.listArray[i].key}>
           <i className="fa fa-bars" style={{display: "inline-block"}} aria-hidden="true"></i> <i className="fa fa-trash-o" style={{display: "inline-block", position: "absolute", "margin-left": "236px", "margin-top": "23px"}} aria-hidden="true" onClick={ () => {this.deleteList(this.props.listContainerReducer.listArray[i].key)}}></i> <p className="list_name_tab" onClick={()=>{this.activateList(this.props.listContainerReducer.listArray[i].key, this.props.listContainerReducer.listArray[i].name)}}>{this.props.listContainerReducer.listArray[i].name} </p>
         </div>
        )
      }
    }
    return listArrayHtml
  }

  renderPopup(){
    let createListPopup
    if(this.props.listContainerReducer.showCreateListPopup){
      createListPopup = <CreateListPopupComponent handleSubmit={this.handleSubmit} toggleCreateListPopup={this.toggleCreateListPopup} handleChange={this.handleChange}/>
    }
    else{
      createListPopup = null
    }
    return createListPopup
  }

  render(){
    return(
      <div>
        <div className="list_container" >
          <div className="mini_nav">
            <i className="fa fa-lg fa-bars header_bars" aria-hidden="true"></i>
            <i className="fa fa-lg fa-search header_magnify" aria-hidden="true"></i>
          </div>
          <div className="user_profile_nav">
            <img src="./img/user_icon.png" id="avatar" alt="user icon"></img>
            <p id="user_name_list_container">User Name</p>
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
        </div>

        <div id="active_list_container">
          <img src="./img/monster.png" id="monster_png" alt="background"></img>
          {this.renderActiveListHtml()}
        </div>
        {this.renderPopup()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { listContainerReducer, listComponentReducer } = state

  return {
  	listContainerReducer,
    listComponentReducer
  }
}

export default connect(mapStateToProps)(ListContainer);
