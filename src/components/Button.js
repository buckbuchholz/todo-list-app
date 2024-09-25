import React from 'react';

// Button component that accepts text and onClick as props
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

export default Button;
