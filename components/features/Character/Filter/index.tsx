import React from 'react';
import { useRouter } from 'next/router';
import { routes } from '@/constants/defaults';
import { CharacterFilterType } from '@/types/character';

function Filter() {
  const router = useRouter();

  const handleChangeFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    const query: CharacterFilterType = { ...router.query, name };
    delete query.page;
    if (name === '') delete query.name;
    router.push({ pathname: `${routes.CHARACTERS}`, query }, undefined, { shallow: true }).then();
  };

  const handleChangeFilterGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const gender = event.target.value;
    const query: CharacterFilterType = { ...router.query, gender };
    delete query.page;
    if (gender === '') delete query.gender;
    router.push({ pathname: `${routes.CHARACTERS}`, query }, undefined, { shallow: true }).then();
  };
  return (
    <div className={'flex flex-col sm:flex-row justify-end'}>
      <input type={'text'} onChange={handleChangeFilterName} placeholder={'Search Name...'} />
      <select name='genders' onChange={handleChangeFilterGender}>
        <option value=''>Gender (None)</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
    </div>
  );
}

export default Filter;
