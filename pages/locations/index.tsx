import React from 'react';
import { Filter, List } from '@/components/features/Location';
import { useLocationsQuery } from '@/hooks/location';
import { Pagination } from '@/components/features/shared';
import { useRouter } from 'next/router';
import { routes } from '@/constants/defaults';
import Layout from '@/components/Layout';
import { getAvailableLocationQueryParameters, objectToQueryString } from '@/utils/common';

function LocationsPage() {
  const router = useRouter();
  const { isLoading, data, isError, error, isSuccess } = useLocationsQuery(getAvailableLocationQueryParameters(router));
  const errorMessage: string | undefined = error?.toString();

  const handlePagination = (pageNumber: number | null) => {
    const query = getAvailableLocationQueryParameters(router);
    query.page = pageNumber || 0;
    const queryString = objectToQueryString(query);
    if (pageNumber) router.push(`${routes.LOCATIONS}?${queryString}`, undefined, { shallow: true }).then();
  };

  return (
    <>
      <div className={'flex flex-col sm:flex-row justify-between'}>
        <h2 className='text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl'>Location list</h2>
        <Filter />
      </div>
      {isError && <div>{errorMessage}</div>}
      {isLoading && <div>Loading...</div>}
      {isSuccess && <List data={data?.results} />}
      {isSuccess && <Pagination info={data?.info} handlePagination={handlePagination} />}
    </>
  );
}

LocationsPage.Layout = Layout;

export default LocationsPage;
