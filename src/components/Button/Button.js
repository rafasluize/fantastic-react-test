import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';

export default function Button({ text, click, icon, styleType, id, className,  type }) {


  return(
    <>
    <button 
      onClick={ click } 
      id={ id }
      type={ type ? type : 'button' }
      className={`btn btn-${styleType} ${className ? className : ''}`} >
         { icon } { text }
    </button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  click: PropTypes.func,
  icon: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
}