import React from 'react';

export const Container = ({ children, title, ref }) => {
  return (
    <>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900'>{title}</h1>
        </div>
      </header>
      <main className='h-screen pb-16 overflow-y-auto'>
      <div
        className='container px-6 mx-auto grid 2xl:max-w-screen-xl'
        ref={ref}
      >
          {/* Replace with your content */}

          <div className='px-4 py-6 sm:px-0'>{children}</div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
};
