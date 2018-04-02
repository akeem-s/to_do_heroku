import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  toggleCreateListPopup: PropTypes.func,
};

const CreateListPopup = ({handleChange, handleSubmit, toggleCreateListPopup}) => {
  return(
    <div id="createListPopup" >
      <p>Create New List</p>
      <form id="listForm" onSubmit={(e) => e.preventDefault()}>
        <input id="listNameInput" type="text" name="listName" placeholder="list name" onChange={handleChange}></input>
        <div id="userDetails">
          <img src="./img/user_icon.png" id="popupAvatar" alt="user icon"></img>
        </div>
        <button id="saveButton" onClick={handleSubmit}>Save</button>
        <button id="cancelButton" onClick={toggleCreateListPopup}>Cancel</button>
      </form>
    </div>
  );
};

CreateListPopup.propTypes = propTypes;

export default CreateListPopup;
