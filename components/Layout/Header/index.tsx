import React from 'react';
import Link from '@/components/Link';
import { routes } from '@/constants/defaults';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useFavoriteCharacter } from '@/hooks/cookie';

function Header() {
  const { favoriteName, removeFavoriteName } = useFavoriteCharacter();
  const resetFavoriteCharacter = () => removeFavoriteName();

  return (
    <header className='flex justify-between items-center border-b bg-indigo-700 text-white'>
      <div className={'max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8'}>
        <div className={'flex items-center'}>
          <nav className={'flex items-center flex-grow'}>
            <Link href={routes.HOME}>
              <a className='flex'>
                <h1 className='hidden sm:inline-block text-2xl font-medium'>Rick & Morty</h1>
                <h1 className='sm:hidden text-2xl font-medium'>R&M</h1>
              </a>
            </Link>
            <Link href={routes.CHARACTERS}>
              <a className='ml-3 sm:ml-10 text-base sm:text-xl font-medium text-gray-200 hover:text-white'>Characters</a>
            </Link>
            <Link href={routes.LOCATIONS}>
              <a className='ml-3 sm:ml-6 text-base sm:text-xl font-medium text-gray-200 hover:text-white'>Locations</a>
            </Link>
          </nav>
          <div className='flex items-center md:ml-12'>
            {<span>{`Hello, ${favoriteName ? favoriteName : 'Guest'}`}</span>}
            {favoriteName && <ArrowPathIcon onClick={resetFavoriteCharacter} className={'ml-2 w-5 h-5 hover:opacity-80 hover:cursor-pointer'} />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
