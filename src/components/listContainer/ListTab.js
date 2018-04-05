import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  activateList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  key: PropTypes.number,
  name: PropTypes.string,
};

const ListTab = ({ activateList, listKey, name }) => {
  return (
    <div className="listTab" key={listKey}>
      <p className='listNameTab' onClick={()=>{ activateList(listKey, name); }}>{name}</p>
    </div>
  );
};

ListTab.propTypes = propTypes;

export default ListTab;
