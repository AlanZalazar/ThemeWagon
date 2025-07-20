import React from "react";

export const BotonGradient = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`
        relative p-[2px] rounded-lg 
        bg-gradient-to-br from-[#C381DB] to-[#4E92F9]
        group overflow-hidden px-5 py-1 font-bold text-lg
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-white rounded-[calc(0.5rem-2px)] w-[calc(100%-4px)] h-[calc(100%-4px)] transform scale-[0.99] m-auto" />

      <span
        className={`
        relative z-10 
        bg-clip-text text-transparent 
        bg-gradient-to-br from-[#C381DB] to-[#4E92F9]
        group-hover:text-blue-600 transition-colors duration-300
        font-medium
      `}
      >
        {children}
      </span>
    </button>
  );
};
