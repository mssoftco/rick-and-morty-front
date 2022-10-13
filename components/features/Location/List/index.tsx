import React from 'react';
import { LocationType } from '@/types/location';
import { CardText, ContainerList } from '@/components/features/shared';
import Link from '@/components/Link';
import { routes } from '@/constants/defaults';

function List({ data }: { data: LocationType[] | undefined }) {
  return (
    <ContainerList>
      <>
        {data?.map(({ id, type, name }) => (
          <CardText key={id} subtitle={type}>
            <Link href={`${routes.LOCATIONS}/${id}`}>
              <a className={'hover:text-gray-400'}>
                <span aria-hidden='true' className='absolute inset-0' />
                {name}
              </a>
            </Link>
          </CardText>
        ))}
      </>
    </ContainerList>
  );
}

export default List;
