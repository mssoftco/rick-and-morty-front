import React from 'react';
import { List } from '@/components/features/Location';
import { useLocationsByPage } from '@/hooks/location';
import Layout from '@/components/Layout';
import Pagination from '@/components/Pagination';
import { useRouter } from 'next/router';
import { routes } from '@/constants/defaults';

function LocationsPage() {
  const router = useRouter();
  const pageNumber = +(router.query.page || 1);
  const { isLoading, data, isSuccess } = useLocationsByPage(pageNumber);

  const handlePagination = (url: string | null) => {
    if (url) {
      const pageNumber = url.split('page=')[1];
      router.push(`${routes.LOCATIONS}?page=${pageNumber}`, undefined, { shallow: true }).then();
    }
  };
  return (
    <>
      <h2 className='text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl'>Location list</h2>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <List data={data?.results} />}
      {isSuccess && <Pagination info={data?.info} currentPage={pageNumber} handlePagination={handlePagination} />}
    </>
  );
}

LocationsPage.Layout = Layout;

export default LocationsPage;
