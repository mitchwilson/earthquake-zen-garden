import React from 'react';
import './logo.css';

const Logo = (props) => {
  return (
    <img className={ 'logo' } src={ props.image } />
  )
}

export default Logo;