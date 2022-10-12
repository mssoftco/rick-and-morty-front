import React from 'react';
import Link from '@/components/Link';
import { CharacterType } from '@/types/character';
import Image from 'next/image';
import { routes } from '@/constants/defaults';

function Card({ id, name, status, species, image }: CharacterType) {
  const statusColor = status === 'Alive' ? 'bg-green-400' : status === 'Dead' ? 'bg-red-400' : 'bg-gray-400';

  return (
    <>
      <div className='group relative max-w-[300px] w-full mx-auto'>
        <div className='min-h-60 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75'>
          <Image
            src={image}
            alt={name}
            layout={'responsive'}
            width={'300px'}
            height={'300px'}
            className='relative h-full w-full object-cover object-center lg:h-full lg:w-full'
          />
        </div>
        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-md font-medium text-gray-700'>
              <span className={`inline-block h-3 w-3 rounded-full ring-2 ring-white ${statusColor} mr-1`} />
              <Link href={`${routes.CHARACTERS}/${id}`}>
                <a>
                  <span aria-hidden='true' className='absolute inset-0' />
                  {name}
                </a>
              </Link>
            </h3>
            <p className='mt-1 text-sm text-gray-500'>{}</p>
          </div>
          <p className='text-sm text-gray-700'>{species}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
