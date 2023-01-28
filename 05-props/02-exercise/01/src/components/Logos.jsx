import React from 'react';
import htmlLogo from '../assets/images/html_logo.png';
import cssLogo from '../assets/images/css_logo.png';
import jsLogo from '../assets/images/js_logo.png';
import reactLogo from '../assets/images/react_logo.png';
import classes from './Logos.module.css';

export const Logos = () => {
  return (
    <div className={classes.logos}>
      <img src={htmlLogo} alt="html" />
      <img src={cssLogo} alt="css" />
      <img src={jsLogo} alt="javascript" />
      <img src={reactLogo} alt="react" />
    </div>
  );
};
