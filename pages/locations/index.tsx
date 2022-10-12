import React from 'react';
import { List } from '@/components/features/Location';
import { useLocationsByPage } from '@/hooks/location';
import Layout from '@/components/Layout';

function LocationsPage() {
  const { isLoading, data, isSuccess } = useLocationsByPage();

  return (
    <>
      <h2 className='text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl'>Location list</h2>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <List data={data?.results} />}
    </>
  );
}

LocationsPage.Layout = Layout;

export default LocationsPage;
