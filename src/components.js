import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`border rounded-lg shadow-sm ${className}`}>{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="border-b p-4">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

export const Input = ({ className, ...props }) => (
  <input className={`border rounded px-2 py-1 ${className}`} {...props} />
);

export const Button = ({ className, children, ...props }) => (
  <button className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
);