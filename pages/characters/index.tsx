import React from 'react';
import { Filter, List } from '@/components/features/Character';
import { useCharactersQuery } from '@/hooks/character';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { routes } from '@/constants/defaults';
import { Pagination } from '@/components/features/shared';
import { getAvailableCharacterQueryParameters, objectToQueryString } from '@/utils/common';

function CharactersPage() {
  const router = useRouter();
  const { isLoading, isError, data, error, isSuccess } = useCharactersQuery(getAvailableCharacterQueryParameters(router));
  const errorMessage: string | undefined = error?.toString();

  const handlePagination = (pageNumber: number | null) => {
    const query = getAvailableCharacterQueryParameters(router);
    query.page = pageNumber || 0;
    const queryString = objectToQueryString(query);
    if (pageNumber) router.push(`${routes.CHARACTERS}?${queryString}`, undefined, { shallow: true }).then();
  };

  return (
    <>
      <div className={'flex flex-col sm:flex-row justify-between'}>
        <h2 className='text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl'>Character list</h2>
        <Filter />
      </div>
      {isError && <div>{errorMessage}</div>}
      {isLoading && <div>Loading...</div>}
      {isSuccess && <List data={data?.results} />}
      {isSuccess && <Pagination info={data?.info} handlePagination={handlePagination} />}
    </>
  );
}

CharactersPage.Layout = Layout;

export default CharactersPage;
