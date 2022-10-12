import React from 'react';
import { EpisodeType } from '@/types/episode';

function Card({ name, episode }: EpisodeType) {
  return (
    <>
      <div className='group relative w-full mx-auto'>
        <div className='h-full w-full overflow-hidden rounded-md bg-gray-200'>
          <div className='text-md font-medium text-gray-700 p-4'>
            {name}
            <p className='mt-1 text-sm text-gray-500'>{episode}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
