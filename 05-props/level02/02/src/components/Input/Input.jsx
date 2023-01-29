import React from 'react';
import classes from './Input.module.css';

export const Input = props => {
  return (
    <input className={classes.input} type={props.type || 'text'} placeholder={props.placeholder} />
  );
};
