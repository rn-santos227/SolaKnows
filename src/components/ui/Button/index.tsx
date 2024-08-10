import React from 'react';
import './style.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '' }) => {
  return (
    <button onClick={onClick} className={`custom-button ${className}`}>
      {text}
    </button>
  );
}; 

export default Button;