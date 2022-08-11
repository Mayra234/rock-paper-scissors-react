import React from 'react';
import './index.css';

export const Button = ({ children = '' }) => {
  return <button className="button-icon">{children}</button>;
};
