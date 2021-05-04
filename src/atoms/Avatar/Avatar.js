import React from 'react';
import './avatar.css';

const Avatar = (props) => {
  return (
    <img className='avatar' src={ props.src }/>
  )
}

export default Avatar;