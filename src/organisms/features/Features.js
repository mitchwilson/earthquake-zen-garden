import React from 'react';
import './features.css';
 
const Features = (props) => {
  return (
    <table className="features">
      { props.children }
    </table>
  )
}

export default Features;