import Layout from '@/components/Layout';
import Link from '@/components/Link';
import { routes } from '@/constants/defaults';

function HomePage() {
  const buttonClasses =
    'flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-opacity-90 sm:px-8';

  return (
    <main>
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
          <h1 className='text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
            <span className='block text-indigo-600'>The Rick and Morty</span>
          </h1>
          <p className='mt-6 max-w-lg mx-auto text-center text-xl text-gray-600 sm:max-w-3xl'>
            The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children
            Summer and Morty, and Beth&apos;s father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives
            outside of Seattle, Washington.
          </p>
          <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
            <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
              <Link href={routes.CHARACTERS}>
                <a className={buttonClasses}>Characters</a>
              </Link>
              <Link href={routes.LOCATIONS}>
                <a className={buttonClasses}>Locations</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

HomePage.Layout = Layout;

export default HomePage;
