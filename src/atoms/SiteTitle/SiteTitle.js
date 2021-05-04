import React from 'react';
import PropTypes from 'prop-types';
import './sitetitle.css';

const SiteTitle = (props) => {
  return (
    <h1>{ props.title }</h1>
  )
}

SiteTitle.propTypes = {
  title: PropTypes.string
}

export default SiteTitle;