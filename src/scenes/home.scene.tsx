import React from 'react';
import {HomeContainer} from '@/pods/home/home.container';
import {Header} from '@/layouts/header';

export const HomeScene = () => {
   return (
      <>
      <Header>
         <HomeContainer /> 
      </Header>
      </>
   ) 
}