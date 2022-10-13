import React from 'react';
import { CharacterType, LocationShortType } from '@/types/character';
import Image from 'next/image';
import Link from '@/components/elements/Link';
import { getLocationId } from '@/utils/common';
import { routes } from '@/constants/defaults';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useFavoriteCharacter } from '@/hooks/cookie';
import { FieldDetails, TitleDetails } from '@/components/features/shared';

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
      <div className='lg:max-w-lg'>
        <TitleDetails title={name}>
          <HeartIcon
            onClick={() => handleFavoriteCharacter(name)}
            className={'w-10 h-10 ml-3 text-gray-200 hover:text-yellow-400 hover:cursor-pointer'}
          />
        </TitleDetails>

        <section aria-labelledby='information-heading' className='mt-4'>
          <FieldDetails label={'Status:'} value={status} />
          <FieldDetails label={'Gender:'} value={gender} />
          <FieldDetails label={'Species:'} value={species} />
          <FieldDetails label={'Origin Location:'}>{renderLocationValue(origin)}</FieldDetails>
          <FieldDetails label={'Last Location:'}>{renderLocationValue(location)}</FieldDetails>
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
