import React from 'react';
import { RouterComponent } from '@/core/router';
import { ListProvider } from './core/listContext/list';
import { SearchProvider } from './core/searchContext/search';
import { BodyContainer } from './layouts/body';

export const App: React.FunctionComponent = () => {
  return(
    <ListProvider>
      <SearchProvider>
        <BodyContainer>
          <RouterComponent />
        </BodyContainer>
      </SearchProvider>
    </ListProvider>
  )
  
};
