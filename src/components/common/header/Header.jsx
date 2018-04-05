import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  activeListName: PropTypes.string,
};

const HeaderComponent = ({ userName }) => {
  return (
    <div className="headerContainer">
      {userName ? <p id="listNameHeader">Welcome: {userName}!</p> : <p id="listNameHeader">Sign in to test drive a super duper original app</p>}
    </div>
  );
};

HeaderComponent.propTypes = propTypes;

export default HeaderComponent;
