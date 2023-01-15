import React from 'react';
import { RouterComponent } from '@/core/router';
import { ListProvider } from './core/listContext/list';
import { SearchProvider } from './core/searchContext/search';
import { XmlProvider } from './core/xmlContext/xmlContext';


export const App: React.FunctionComponent = () => {
  
  return(
    <ListProvider>
      <SearchProvider>
        <XmlProvider>
          <RouterComponent />
        </XmlProvider>
      </SearchProvider>
    </ListProvider>
  )
  
};
