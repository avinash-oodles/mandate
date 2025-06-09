'use client';
import React from 'react';


type InputProps = {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  className?: string;
  inputWidth?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  type?: string;
};

function Input({
  label,
  placeholder,
  icon,
  className = '',
  inputWidth = 'w-full',
  value,      
  onChange,   
  type = 'text',
}: InputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-left font-medium text-base leading-[1.4] mb-1">
        {label}
      </label>
      <div className="relative h-[44px]">
        {icon && (
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}        
          placeholder={placeholder}
          value={value}       
          onChange={onChange} 
          className={`${inputWidth} p-3 pr-10 border border-[#E0E0E0] rounded placeholder:text-sm placeholder:font-normal`}
        />
      </div>
    </div>
  );
}

export default Input;

