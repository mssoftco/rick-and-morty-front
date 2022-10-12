import React from 'react';
import { Card } from '@/components/features/Location';
import { LocationType } from '@/types/location';

function List({ data }: { data: LocationType[] | undefined }) {
  return (
    <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {data?.map(location => (
        <Card {...location} key={location?.id} />
      ))}
    </div>
  );
}

export default List;
