import React from 'react';
import { useRouter } from 'next/router';
import { Details } from '@/components/features/Location';
import { getCharactersIds } from '@/utils/common';
import Layout from '@/components/Layout';
import { List } from '@/components/features/Character';
import { GetStaticPropsContext } from 'next';
import Location from '@/services/location';
import Character from '@/services/character';
import { CharacterType } from '@/types/character';
import { LocationType } from '@/types/location';

export async function getStaticPaths() {
  return { paths: [{ params: { id: '1' } }], fallback: true };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ id: string }>) {
  const locationData = await Location.getById(+(params?.id || 0));
  const ids = getCharactersIds(locationData?.residents) || [];
  let charactersData = await Character.getByIds(ids);
  //convert to array
  if (ids.length === 1) {
    const array = [];
    array.push(charactersData);
    charactersData = array;
  }
  return { props: { locationData, charactersData }, revalidate: 10 * 60 };
}

type LocationPageType = {
  locationData: LocationType;
  charactersData: CharacterType[];
};

function LocationPage({ locationData, charactersData }: LocationPageType) {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full'>
      {router.isFallback ? <div>Loading Details...</div> : <Details data={locationData} />}
      <h3 className={'font-medium text-2xl mt-4'}>Resident List:</h3>
      {router.isFallback ? <div>Loading Characters...</div> : <List data={charactersData} />}
    </div>
  );
}

LocationPage.Layout = Layout;

export default LocationPage;
