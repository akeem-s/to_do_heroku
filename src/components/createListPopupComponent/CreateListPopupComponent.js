import { connect } from 'react-redux';
import React from 'react';

export class CreateListPopupComponent extends React.Component{
  render(){
    return(
      <div id="create_list_popup" >
        <p>Create New List</p>
        <form id="list_form" onSubmit={(e) => e.preventDefault()}>
          <input id="list_name_input" type="text" name="list_name" placeholder="list name" onChange={this.props.handleChange}></input>
          <div id="user_details">
            <img src="./img/user_icon.png" id="popup_avatar" alt="user icon"></img>
          </div>
          <div id="popup_button_container">
            <button id="save_button" onClick={this.props.handleSubmit}>Save</button><button id="cancel_button" onClick={this.props.toggleCreateListPopup}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { listContainerReducer } = state

  return {
  	listContainerReducer
  }
}

export default connect(mapStateToProps)(CreateListPopupComponent);
