import React from 'react';
import { PaginationInfoType } from '@/types/common';
import Button from '@/components/elements/Button';
import { getPageNumberOfApiQuery } from '@/utils/common';

type PaginationType = {
  info: PaginationInfoType;
  handlePagination: (url: number | null) => void;
};

function Pagination({ info, handlePagination }: PaginationType) {
  const limitPageCount = 20;
  const prevPageNumber = getPageNumberOfApiQuery(info?.prev);
  const nextPageNumber = getPageNumberOfApiQuery(info?.next);
  const currentPage = prevPageNumber ? prevPageNumber + 1 : 1;
  const count = info?.count;
  const from = (currentPage - 1) * limitPageCount + 1;
  const to = currentPage * limitPageCount > count ? count : currentPage * limitPageCount;

  return (
    <div className='flex w-full mt-8 items-center justify-between border-t border-gray-200 bg-white pt-6'>
      <div className='flex flex-1 justify-between'>
        <Button variant={'outline'} className={'min-w-[120px]'} onClick={() => handlePagination(prevPageNumber)} disabled={!prevPageNumber}>
          Previous
        </Button>
        <div className='flex items-center '>
          <div>
            <p className='hidden sm:inline-block text-sm text-gray-700'>
              Showing <span className='font-medium'>{from}</span> to <span className='font-medium'>{to}</span> of{' '}
              <span className='font-medium'>{count}</span> results
            </p>
          </div>
        </div>
        <Button variant={'outline'} className={'min-w-[120px]'} onClick={() => handlePagination(nextPageNumber)} disabled={!nextPageNumber}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
