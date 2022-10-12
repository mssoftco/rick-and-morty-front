import React from 'react';
import { Card } from '@/components/features/Character';
import { CharacterType } from '@/types/character';

function List({ data }: { data: CharacterType[] | undefined }) {
  return (
    <>
      <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {data?.map(character => (
          <Card {...character} key={character?.id} />
        ))}
      </div>
    </>
  );
}

export default List;
