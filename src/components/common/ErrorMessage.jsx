import React from 'react';

const ErrorMessage = ({error, className}) => {
  return (
    <div className={className}>
      <h1> {error}</h1>
    </div>
  );
};

export default ErrorMessage;
