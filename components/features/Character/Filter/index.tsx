import React from 'react';
import { useRouter } from 'next/router';
import { genderSelectOptions, routes } from '@/constants/defaults';
import InputText from '@/components/elements/InputText';
import Select from '@/components/elements/Select';
import { debouncing, getQueryWithGender, getQueryWithName } from '@/utils/common';

function Filter() {
  const router = useRouter();

  const handleChangeFilterGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const gender = event.target.value;
    const query = getQueryWithGender(gender, router);
    router.push({ pathname: `${routes.CHARACTERS}`, query }, undefined, { shallow: true }).then();
  };

  const handleChangeFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    const query = getQueryWithName(name, router);
    router.push({ pathname: `${routes.CHARACTERS}`, query }, undefined, { shallow: true }).then();
  };
  const handleChangeFilterNameWithDelay = debouncing(750, handleChangeFilterName);

  return (
    <div className={'flex flex-col sm:flex-row justify-end'}>
      <Select className={'mr-3 mt-3 sm:my-0'} options={genderSelectOptions} placeholder={'Gender (None)'} onChange={handleChangeFilterGender} />
      <InputText className={'my-3 sm:my-0'} onChange={handleChangeFilterNameWithDelay} placeholder={'Search Name...'} />
    </div>
  );
}

export default Filter;
