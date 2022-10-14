import React from 'react';

function TitleDetails({ title, children }: { title?: string; children?: React.ReactElement }) {
  return (
    <div className='flex items-center mt-4 mb-4 md:mb-10'>
      {title && <h1 className='text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl'>{title}</h1>}
      {children}
    </div>
  );
}

export default TitleDetails;
