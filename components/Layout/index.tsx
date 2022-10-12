import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

function Layout({ children }: any) {
  return (
    <div className='bg-white grid grid-rows-[60px_minmax(300px,_1fr)_80px] grid-cols-1 min-h-screen'>
      <Header />
      <main className='mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-7xl w-full'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
