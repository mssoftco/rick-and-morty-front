import React from 'react';
import { useRouter } from 'next/router';
import { routes } from '@/constants/defaults';
import { LocationFilterType } from '@/types/location';

function Filter() {
  const router = useRouter();

  const handleChangeFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    const query: LocationFilterType = { ...router.query, name };
    delete query.page;
    if (name === '') delete query.name;
    router.push({ pathname: `${routes.LOCATIONS}`, query }, undefined, { shallow: true }).then();
  };

  return (
    <div className={'flex'}>
      <input type={'text'} onChange={handleChangeFilterName} placeholder={'Search Name...'} />
    </div>
  );
}

export default Filter;
