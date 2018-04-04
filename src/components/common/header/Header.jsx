import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  activeListName: PropTypes.string,
};

const HeaderComponent = ({ activeListName }) => {
  return (
    <div className="headerContainer">
      {activeListName ? <p id="listNameHeader">{activeListName}</p> : <p id="listNameHeader">Welcome</p>}
    </div>
  );
};

HeaderComponent.propTypes = propTypes;

export default HeaderComponent;
