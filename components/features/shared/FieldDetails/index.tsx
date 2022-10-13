import React from 'react';

type FieldDetails = {
  label?: string;
  value?: string;
  children?: React.ReactElement;
};

function FieldDetails({ label, value, children }: FieldDetails) {
  return (
    <div className='flex items-center mt-2 last:mb-4'>
      {label && <p className='text-md text-gray-500 sm:text-lg mr-2'>{label}</p>}
      {value && <p className='text-md text-gray-800 sm:text-lg'>{value}</p>}
      {children}
    </div>
  );
}
export default FieldDetails;
