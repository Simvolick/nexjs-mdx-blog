"use client";

import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    (event.target as HTMLButtonElement).innerText = 'You clicked me!';
  };

  return (
    <button className='btn' onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button; 