import React from 'react';
import Link from '@/components/Link';
import { LocationType } from '@/types/location';
import { routes } from '@/constants/defaults';

function Card({ id, name, type }: LocationType) {
  return (
    <>
      <div className='group relative max-w-[300px] w-full mx-auto'>
        <div className='w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75'>
          <div className='text-md font-medium text-gray-700 p-4'>
            <Link href={`${routes.LOCATIONS}/${id}`}>
              <a>
                <span aria-hidden='true' className='absolute inset-0' />
                {name}
              </a>
            </Link>
            <p className='mt-1 text-sm text-gray-500'>{type}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
