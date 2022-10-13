import React from 'react';
import { List } from '@/components/features/Character';
import { useCharactersByPage } from '@/hooks/character';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { routes } from '@/constants/defaults';
import { Pagination } from '@/components/features/shared';

function CharactersPage() {
  const router = useRouter();
  const pageNumber = +(router.query.page || 1);
  const { isLoading, data, isSuccess } = useCharactersByPage(pageNumber);

  const handlePagination = (url: string | null) => {
    if (url) {
      const pageNumber = url.split('page=')[1];
      router.push(`${routes.CHARACTERS}?page=${pageNumber}`, undefined, { shallow: true }).then();
    }
  };

  return (
    <>
      <h2 className='text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl'>Character list</h2>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <List data={data?.results} />}
      {isSuccess && <Pagination info={data?.info} currentPage={pageNumber} handlePagination={handlePagination} />}
    </>
  );
}

CharactersPage.Layout = Layout;

export default CharactersPage;
