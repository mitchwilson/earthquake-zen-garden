import React from 'react';
import './navigation.css';

const Navigation = (props) => {
  return (
    <div className={ 'navigation' }>
      { props.children }
    </div>
  )
}

export default Navigation;