import React from 'react';
import { RouterComponent } from '@/core/router';
import { ListProvider } from './core/listContext/list';
import { SearchProvider } from './core/searchContext/search';

export const App: React.FunctionComponent = () => {
  return(
    <ListProvider>
      <SearchProvider>
          <RouterComponent />
      </SearchProvider>
    </ListProvider>
  )
  
};
