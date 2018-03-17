import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  toggleCreateListPopup: PropTypes.func,
};

const CreateListPopup = ({handleChange, handleSubmit, toggleCreateListPopup}) => {
  return(
    <div id="create_list_popup" >
      <p>Create New List</p>
      <form id="list_form" onSubmit={(e) => e.preventDefault()}>
        <input id="list_name_input" type="text" name="list_name" placeholder="list name" onChange={handleChange}></input>
        <div id="user_details">
          <img src="./img/user_icon.png" id="popup_avatar" alt="user icon"></img>
        </div>
        <button id="save_button" onClick={handleSubmit}>Save</button>
        <button id="cancel_button" onClick={toggleCreateListPopup}>Cancel</button>
      </form>
    </div>
  );
};

CreateListPopup.propTypes = propTypes;

export default CreateListPopup;
