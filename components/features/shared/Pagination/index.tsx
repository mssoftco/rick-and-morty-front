import React from 'react';
import { PaginationInfoType } from '@/types/common';
import Button from '@/components/elements/Button';

type PaginationType = {
  info: PaginationInfoType;
  currentPage: number;
  handlePagination: (url: string | null) => void;
};

function Pagination({ info, currentPage, handlePagination }: PaginationType) {
  const maxPageCount = 20;
  const count = info?.count;
  const from = (currentPage - 1) * maxPageCount + 1;
  const to = currentPage * maxPageCount > count ? count : currentPage * maxPageCount;

  return (
    <div className='flex w-full mt-8 items-center justify-between border-t border-gray-200 bg-white pt-6'>
      <div className='flex flex-1 justify-between'>
        <Button variant={'outline'} className={'min-w-[120px]'} onClick={() => handlePagination(info?.prev)} disabled={!info?.prev}>
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
        <Button variant={'outline'} className={'min-w-[120px]'} onClick={() => handlePagination(info?.next)} disabled={!info?.next}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
