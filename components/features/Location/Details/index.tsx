import React from 'react';
import { LocationType } from '@/types/location';
import { FieldDetails, TitleDetails } from '@/components/features/shared';

function Details({ data }: { data: LocationType | undefined }) {
  const { name, type, dimension } = data || {};

  return (
    <div className='w-full'>
      <TitleDetails title={name} />
      <section aria-labelledby='information-heading' className='mt-4'>
        <FieldDetails label={'Type:'} value={type} />
        <FieldDetails label={'Dimension:'} value={dimension} />
      </section>
    </div>
  );
}

export default Details;
