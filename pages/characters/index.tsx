import React from 'react';
import { List } from '@/components/features/Character';
import { useCharactersByPage } from '@/hooks/character';
import Layout from '@/components/Layout';

function CharactersPage() {
  const { isLoading, data, isSuccess } = useCharactersByPage();

  return (
    <>
      <h2 className='text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl'>Character list</h2>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <List data={data?.results} />}
    </>
  );
}

CharactersPage.Layout = Layout;

export default CharactersPage;
