import React from 'react';
// import PropTypes from 'prop-types'

const Button = (props) => {
    const {buttonText, className, func} = props;
  return (
    <button onClick={func} className={`custom_btn ${className?className:""}`}>{buttonText}</button>
  );
};

// Button.propTypes = {}

export default Button;