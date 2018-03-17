import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  activeListName: PropTypes.string,
};

const HeaderComponent = ({ activeListName }) => {
  return (
    <div className="header_container">
      {activeListName ? <p id="list_name_header">{activeListName}</p> : <p id="list_name_header">Welcome</p>}
    </div>
  );
};

HeaderComponent.propTypes = propTypes;

export default HeaderComponent;
