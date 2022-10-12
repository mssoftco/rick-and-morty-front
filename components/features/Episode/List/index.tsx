import React from 'react';
import { Card } from '@/components/features/Episode';
import { EpisodeType } from '@/types/episode';

function List({ data }: { data: EpisodeType[] | undefined }) {
  return (
    <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-4 xl:gap-x-8'>
      {data?.map(location => (
        <Card {...location} key={location?.id} />
      ))}
    </div>
  );
}

export default List;
