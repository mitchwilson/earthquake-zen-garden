import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

const Avatar = (props) => {
  return (
    <img className='avatar' src={ props.src }/>
  )
}

Avatar.propTypes = {
  src: PropTypes.string
}

export default Avatar;