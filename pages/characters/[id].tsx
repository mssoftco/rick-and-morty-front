import React from 'react';
import { useRouter } from 'next/router';
import { useCharacterById } from '@/hooks/character';
import { Details } from '@/components/features/Character';
import { getEpisodesIds } from '@/utils/common';
import Layout from '@/components/Layout';
import { List } from '@/components/features/Episode';
import { useEpisodesByIds } from '@/hooks/episode';

function CharacterPage() {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading: isLoadingDetails, data } = useCharacterById(+(id || 0));
  const ids = getEpisodesIds(data?.episode) || [];
  const { isLoading: isLoadingEpisodes, data: dataEpisodes } = useEpisodesByIds(ids);

  return (
    <div className='flex flex-col w-full'>
      {isLoadingDetails ? <div>Loading Details...</div> : <Details data={data} />}
      <h3 className={'font-medium text-2xl mt-4'}>Episode List:</h3>
      {isLoadingEpisodes ? <div>Loading Episodes...</div> : <List data={dataEpisodes} />}
    </div>
  );
}

CharacterPage.Layout = Layout;

export default CharacterPage;
