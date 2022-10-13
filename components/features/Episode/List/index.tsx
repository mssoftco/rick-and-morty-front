import React from 'react';
import { CardText } from '@/components/features/shared';
import { EpisodeType } from '@/types/episode';
import { ContainerList } from '@/components/features/shared';

function List({ data }: { data: EpisodeType[] | undefined }) {
  return (
    <ContainerList>
      <>
        {data?.map(({ id, name, episode }) => (
          <CardText key={id} title={name} subtitle={episode} />
        ))}
      </>
    </ContainerList>
  );
}

export default List;
