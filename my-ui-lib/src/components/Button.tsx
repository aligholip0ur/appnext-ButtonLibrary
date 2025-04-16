// src/components/Button.tsx
import React from 'react';
import './Button.css';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children
}) => {
  return (
    <button
      className={`btn ${variant} ${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
