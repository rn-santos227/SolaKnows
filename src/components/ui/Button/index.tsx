import React from 'react';
import './style.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}