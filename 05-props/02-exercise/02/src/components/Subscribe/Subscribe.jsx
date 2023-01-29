import React from 'react';
import { Input } from '../Input';
import classes from './Subscribe.module.css';

export const Subscribe = () => {
  return (
    <main className={classes.subscribe}>
      <h3>Subscribe</h3>
      <p>Sign up with your email address to receive news amd updates</p>
      <div className={classes.inputs}>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input type="email" placeholder="Email" />
      </div>
      <button type="submit">Subscribe</button>
    </main>
  );
};
