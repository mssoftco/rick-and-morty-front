import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-50 border-t border-gray-200 h-[80px]'>
      <div className='max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center h-full justify-between'>
          <a target={'_blank'} rel='noreferrer' href={'https://rickandmortyapi.com/'} className='text-base text-gray-400 hover:text-gray-500'>
            Rick and Morty API
          </a>
          <p className='text-base text-gray-400'>
            &copy; 2022<span className={'hidden sm:inline-block'}>, All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
