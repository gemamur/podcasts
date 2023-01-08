import React from 'react';
import { RouterComponent } from '@/core/router';
import { ListProvider } from './core/listContext/list';

export const App: React.FunctionComponent = () => {
  return(
    <ListProvider>
      <RouterComponent />
    </ListProvider>
  )
  
};
