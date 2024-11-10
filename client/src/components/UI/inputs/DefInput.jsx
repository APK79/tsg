import React from 'react'
import classes from './DefInput.module.css';

const DefInput = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className={classes.defInput} {...props} />
  )
});

export default DefInput;