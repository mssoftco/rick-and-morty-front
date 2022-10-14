import React from 'react';
import { Card } from '@/components/features/Character';
import { CharacterType } from '@/types/character';
import { ContainerList } from '@/components/features/shared';

function List({ data }: { data: CharacterType[] | undefined }) {
  return (
    <ContainerList>
      <>{data && data.length > 0 && data?.map(character => <Card {...character} key={character?.id} />)}</>
    </ContainerList>
  );
}

export default List;
