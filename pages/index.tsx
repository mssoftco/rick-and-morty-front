import Layout from '@/components/Layout';
import Link from '@/components/elements/Link';
import { routes } from '@/constants/defaults';
import Character from '@/services/character';
import Location from '@/services/location';
import { CharacterType } from '@/types/character';
import { LocationType } from '@/types/location';
import { List as CharacterList } from '@/components/features/Character';
import { List as LocationList } from '@/components/features/Location';
import React from 'react';

export async function getServerSideProps() {
  const [characterData, locationData] = await Promise.all([Character.getByIds([1, 2, 3, 4]), Location.getByIds([1, 2, 3, 4, 5, 6, 7, 8])]);
  return { props: { characterData, locationData } };
}

type HomePageType = {
  characterData: CharacterType[];
  locationData: LocationType[];
};

function HomePage({ characterData, locationData }: HomePageType) {
  const buttonClasses =
    'w-full max-w-[300px] inline-block px-4 py-3 text-center text-base font-medium rounded-md shadow-sm border border-indigo-600 text-indigo-600 hover:bg-opacity-90';
  return (
    <div className={'flex flex-col w-full'}>
      <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
        <h1 className='text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
          <span className='block text-indigo-600'>The Rick and Morty</span>
        </h1>
        <p className='mt-6 max-w-lg mx-auto text-center text-xl text-gray-600 sm:max-w-3xl'>
          The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children
          Summer and Morty, and Beth&apos;s father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives
          outside of Seattle, Washington.
        </p>
      </div>

      <div className={'w-full'}>
        <h2 className='text-xl font-medium tracking-tight text-gray-600 sm:text-3xl'>Characters</h2>
        <CharacterList data={characterData} />
        <div className={'flex justify-center mt-6 mb-12'}>
          <Link href={routes.CHARACTERS}>
            <a className={buttonClasses}>More Characters...</a>
          </Link>
        </div>
        <h2 className='text-xl font-medium tracking-tight text-gray-600 sm:text-3xl'>Locations</h2>
        <LocationList data={locationData} />
        <div className={'flex justify-center mx-auto mt-6'}>
          <Link href={routes.LOCATIONS}>
            <a className={buttonClasses}>More Locations...</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

HomePage.Layout = Layout;

export default HomePage;
