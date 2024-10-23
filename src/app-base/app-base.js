import React from 'react';


import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Navigation from '../navigation/nav';

const queryClient = new QueryClient();

const AppBase = () => {



  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className='castro__app'>
            <Navigation></Navigation>
        </div>
      </QueryClientProvider>

    </>
  )
}

export default AppBase