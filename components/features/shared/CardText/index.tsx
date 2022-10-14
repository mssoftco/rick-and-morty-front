import React from 'react';

type CardTextType = {
  title?: string;
  subtitle?: string;
  children?: React.ReactElement;
};

function CardText({ title, subtitle, children }: CardTextType) {
  return (
    <div className='group relative w-full mx-auto'>
      <div className='h-full w-full overflow-hidden rounded-md bg-gray-100 group-hover:opacity-80'>
        <div className='text-md font-medium text-gray-700 p-4'>
          {children}
          {title}
          {<p className='mt-1 text-sm text-gray-500'>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

export default CardText;
