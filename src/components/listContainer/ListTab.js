import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  activateList: PropTypes.func.isRequired,
  fetchTasks: PropTypes.func.isRequired,
  key: PropTypes.number,
  name: PropTypes.string,
};

const ListTab = ({ activateList, fetchTasks, listId, name }) => {
  return (
    <div className="listTab" key={listId}>
      <p className='listNameTab' onClick={()=>{ activateList(listId, name); fetchTasks(listId); } }>{name}</p>
    </div>
  );
};

ListTab.propTypes = propTypes;

export default ListTab;
