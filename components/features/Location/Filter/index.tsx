import React from 'react';
import { useRouter } from 'next/router';
import { routes } from '@/constants/defaults';
import InputText from '@/components/elements/InputText';
import { debouncing, getQueryWithName } from '@/utils/common';

function Filter() {
  const router = useRouter();

  const handleChangeFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    const query = getQueryWithName(name, router);
    router.push({ pathname: `${routes.LOCATIONS}`, query }, undefined, { shallow: true }).then();
  };
  const handleChangeFilterNameWithDelay = debouncing(750, handleChangeFilterName);

  return (
    <div className={'flex'}>
      <InputText className={'my-3 sm:my-0'} onChange={handleChangeFilterNameWithDelay} placeholder={'Search Name...'} />
    </div>
  );
}

export default Filter;
