import React from 'react';
import { Filter, List } from '@/components/features/Character';
import { useCharactersQuery } from '@/hooks/character';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { routes } from '@/constants/defaults';
import { Pagination } from '@/components/features/shared';

function CharactersPage() {
  const router = useRouter();
  const page = +(router.query?.page || 1);
  const name = router.query?.name?.toString();
  const gender = router.query?.gender?.toString();
  const { isLoading, data, isSuccess } = useCharactersQuery({ page, name, gender });

  const handlePagination = (url: string | null) => {
    if (url) {
      const pageNumber = url.split('page=')[1];
      router.push(`${routes.CHARACTERS}?page=${pageNumber}`, undefined, { shallow: true }).then();
    }
  };

  return (
    <>
      <div className={'flex flex-col sm:flex-row justify-between'}>
        <h2 className='text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl'>Character list</h2>
        <Filter />
      </div>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <List data={data?.results} />}
      {isSuccess && <Pagination info={data?.info} currentPage={page} handlePagination={handlePagination} />}
    </>
  );
}

CharactersPage.Layout = Layout;

export default CharactersPage;
