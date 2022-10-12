import React from 'react';
import { useRouter } from 'next/router';
import { Details } from '@/components/features/Location';
import { getCharactersIds } from '@/utils/common';
import Layout from '@/components/Layout';
import { useCharactersByIds } from '@/hooks/character';
import { List } from '@/components/features/Character';
import { useLocationById } from '@/hooks/location';

function LocationPage() {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading: isLoadingDetails, data } = useLocationById(+(id || 0));
  const ids = getCharactersIds(data?.residents) || [];
  const { isLoading: isLoadingCharacters, data: dataCharacters } = useCharactersByIds(ids);

  return (
    <div className='flex flex-col w-full'>
      {isLoadingDetails ? <div>Loading Details...</div> : <Details data={data} />}
      <h3 className={'font-medium text-2xl mt-4'}>Resident List:</h3>
      {isLoadingCharacters ? <div>Loading Characters...</div> : <List data={dataCharacters} />}
    </div>
  );
}

LocationPage.Layout = Layout;

export default LocationPage;
