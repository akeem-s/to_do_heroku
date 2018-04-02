import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  activateList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  key: PropTypes.number,
  name: PropTypes.string,
};

const ListTab = ({ activateList, deleteList, listKey, name }) => {
  return (
    <div className="listTab" key={listKey}>
     <i className="fa fa-bars barsIcon" aria-hidden="true"></i>
     <p className='listNameTab' onClick={()=>{ activateList(listKey, name); }}>{name}</p>
     <i className='fa fa-trash-o listTabTrash' aria-hidden='true' onClick={()=>{ deleteList(listKey); }}></i>
   </div>
  );
};

ListTab.propTypes = propTypes;

export default ListTab;
