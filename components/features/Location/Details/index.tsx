import React from 'react';
import { LocationType } from '@/types/location';

function Details({ data }: { data: LocationType | undefined }) {
  const { name, type, dimension } = data || {};

  return (
    <div className='w-full'>
      <div className='mt-4'>
        <h1 className='text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl'>{name}</h1>
      </div>
      <section aria-labelledby='information-heading' className='mt-4'>
        <div className='flex items-center mt-2'>
          <p className='text-md text-gray-500 sm:text-lg mr-2'>Type:</p>
          <p className='text-md text-gray-800 sm:text-lg'>{type}</p>
        </div>
        <div className='flex items-center mt-2 mb-4'>
          <p className='text-md text-gray-500 sm:text-lg mr-2'>Dimension:</p>
          <p className='text-md text-gray-800 sm:text-lg'>{dimension}</p>
        </div>
      </section>
    </div>
  );
}

export default Details;
