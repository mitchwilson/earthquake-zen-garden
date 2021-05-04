import React from 'react';
import PropTypes from 'prop-types';
import './logo.css';

const Logo = (props) => {
  return (
    <img className={ 'logo' } src={ props.image } />
  )
}

Logo.propTypes = {
  image: PropTypes.string
}

export default Logo;