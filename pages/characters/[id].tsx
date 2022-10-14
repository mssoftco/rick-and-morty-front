import React from 'react';
import { useRouter } from 'next/router';
import { Details } from '@/components/features/Character';
import Layout from '@/components/Layout';
import Character from '@/services/character';
import { List } from '@/components/features/Episode';
import { CharacterType } from '@/types/character';
import { EpisodeType } from '@/types/episode';
import { getEpisodesIds } from '@/utils/common';
import Episode from '@/services/episode';
import type { GetStaticPropsContext } from 'next';

export async function getStaticPaths() {
  /* build time create All character pages (826) :) */

  /*
  const characters = await Character.get('?page=1');
  const countPages = characters.info.count;
  const paths = [];
  for (let id = 1; id < countPages; id++) paths.push({ params: { id: id.toString() } });
  */

  return { paths: [{ params: { id: '1' } }], fallback: true };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ id: string }>) {
  const characterData = await Character.getById(+(params?.id || 0));
  const ids = getEpisodesIds(characterData?.episode) || [];
  let episodesData = await Episode.getByIds(ids);
  //convert to array
  if (ids.length === 1) {
    const array = [];
    array.push(episodesData);
    episodesData = array;
  }
  return { props: { characterData, episodesData }, revalidate: 10 * 60 };
}

type CharacterPageType = {
  characterData: CharacterType;
  episodesData: EpisodeType[];
};

function CharacterPage({ characterData, episodesData }: CharacterPageType) {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full'>
      {router.isFallback ? <div>Loading Details...</div> : <Details data={characterData} />}
      <h3 className={'font-medium text-2xl mt-4'}>Episode List:</h3>
      {router.isFallback ? <div>Loading Episodes...</div> : <List data={episodesData} />}
    </div>
  );
}

CharacterPage.Layout = Layout;

export default CharacterPage;
