import React from 'react';
import classes from './DefButton.module.css';

const DefButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.defBtn}>
        {children}
    </button>
  )
}

export default DefButton;