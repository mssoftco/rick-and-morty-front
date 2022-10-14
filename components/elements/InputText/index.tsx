import React from 'react';

function InputText({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type='text'
      className={`h-10 px-2 block w-full border border-gray-300 bg-gray-50 rounded-[5px] focus:bg-white transition ${className}`}
    />
  );
}

export default InputText;
