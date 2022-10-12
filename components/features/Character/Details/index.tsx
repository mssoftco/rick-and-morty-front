import React from 'react';
import { CharacterType, LocationShortType } from '@/types/character';
import Image from 'next/image';
import Link from '@/components/Link';
import { getLocationId } from '@/utils/common';
import { routes } from '@/constants/defaults';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useFavoriteCharacter } from '@/hooks/cookie';

function Details({ data }: { data: CharacterType | undefined }) {
  const { image, gender, status, species, name, origin, location } = data || {};
  const { setFavoriteName } = useFavoriteCharacter();
  const handleFavoriteCharacter = (name: string | undefined) => setFavoriteName(name || '');

  const renderLocationValue = (location: LocationShortType | undefined) =>
    location?.url !== '' ? (
      <Link href={`${routes.LOCATIONS}/${getLocationId(location?.url)}`}>
        <a>
          <p className='text-md text-blue-500 sm:text-lg'>{location?.name}</p>
        </a>
      </Link>
    ) : (
      <p className='text-md text-gray-800 sm:text-lg'>{location?.name}</p>
    );

  return (
    <div className={'md:grid md:grid-cols-2 md:grid-rows-1 md:gap-8'}>
      {/* details */}
      <div className='lg:max-w-lg'>
        <div className='flex items-center mt-4 mb-4 md:mb-10'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl'>{name}</h1>
          <HeartIcon
            onClick={() => handleFavoriteCharacter(name)}
            className={'w-10 h-10 ml-3 text-gray-200 hover:text-yellow-400 hover:cursor-pointer'}
          />
        </div>
        <section aria-labelledby='information-heading' className='mt-4'>
          <div className='flex items-center mt-2'>
            <p className='text-md text-gray-500 sm:text-lg mr-2'>Status:</p>
            <p className='text-md text-gray-800 sm:text-lg'>{status}</p>
          </div>
          <div className='flex items-center mt-2'>
            <p className='text-md text-gray-500 sm:text-lg mr-2'>Gender:</p>
            <p className='text-md text-gray-800 sm:text-lg'>{gender}</p>
          </div>
          <div className='flex items-center mt-2'>
            <p className='text-md text-gray-500 sm:text-lg mr-2'>Species:</p>
            <p className='text-md text-gray-800 sm:text-lg'>{species}</p>
          </div>
          <div className='flex items-center mt-2'>
            <p className='text-md text-gray-500 sm:text-lg mr-2'>Origin Location:</p>
            {renderLocationValue(origin)}
          </div>
          <div className='flex items-center mt-2 mb-4'>
            <p className='text-md text-gray-500 sm:text-lg mr-2'>Last Location:</p>
            {renderLocationValue(location)}
          </div>
        </section>
      </div>
      {/* image */}
      <div className='lg:row-span-2'>
        <div className='aspect-w-1 aspect-h-1 rounded-lg overflow-hidden'>
          <Image layout={'fill'} height={300} width={300} src={image || ''} alt={'name'} className='w-full h-full object-center object-cover' />
        </div>
      </div>
    </div>
  );
}

export default Details;
