import React from 'react';
import './properties.css';

const Properties = (props) => {
  return (
    <table className="properties">
      { props.children }
    </table>
  )
}

export default Properties;