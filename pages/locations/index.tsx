import React from 'react';
import { Filter, List } from '@/components/features/Location';
import { useLocationsQuery } from '@/hooks/location';
import { Pagination } from '@/components/features/shared';
import { useRouter } from 'next/router';
import { routes } from '@/constants/defaults';
import Layout from '@/components/Layout';

function LocationsPage() {
  const router = useRouter();
  const page = +(router.query?.page || 1);
  const name = router.query?.name?.toString();
  const { isLoading, data, isSuccess } = useLocationsQuery({ page, name });

  const handlePagination = (url: string | null) => {
    if (url) {
      const pageNumber = url.split('page=')[1];
      router.push(`${routes.LOCATIONS}?page=${pageNumber}`, undefined, { shallow: true }).then();
    }
  };
  return (
    <>
      <div className={'flex flex-col sm:flex-row justify-between'}>
        <h2 className='text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl'>Location list</h2>
        <Filter />
      </div>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <List data={data?.results} />}
      {isSuccess && <Pagination info={data?.info} currentPage={page} handlePagination={handlePagination} />}
    </>
  );
}

LocationsPage.Layout = Layout;

export default LocationsPage;
