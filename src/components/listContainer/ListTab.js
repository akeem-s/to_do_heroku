import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  activateList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  key: PropTypes.number,
  name: PropTypes.string,
};

const ListTab = ({ activateList, deleteList, key, name }) => {
  return (
    <div className="list_tab" key={key}>
     <i className="fa fa-bars" style={{display: 'inline-block'}} aria-hidden="true"></i>
     <i className='fa fa-trash-o' style={{display: 'inline-block', position: 'absolute', 'margin-left': '236px', 'margin-top': '23px'}} aria-hidden='true' onClick={()=>{ deleteList(key); }}></i>
     <p className='list_name_tab' onClick={()=>{ activateList(key, name); }}>{name}</p>
   </div>
  );
};

ListTab.propTypes = propTypes;

export default ListTab;
