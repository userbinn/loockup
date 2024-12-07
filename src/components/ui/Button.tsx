import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-colors";
  const variants = {
    primary: "bg-yellow-400 text-gray-900 hover:bg-yellow-300",
    secondary: "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}