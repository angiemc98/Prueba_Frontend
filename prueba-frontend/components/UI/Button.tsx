import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive';
}

export const Button = ({ variant = 'default', className, ...props }: ButtonProps) => {
  const baseStyle = 'py-2 px-4 rounded-md text-white font-semibold transition-colors';
  const variants = {
    default: 'bg-indigo-600 hover:bg-indigo-700',
    destructive: 'bg-red-500 hover:bg-red-600',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    />
  );
};
