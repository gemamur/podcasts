import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomeScene, PodcastScene, EpisodeScene } from "@/scenes";
import { switchRoutes } from "./routes";
import { Header } from "@/layouts/header";
import { BodyContainer } from '@/layouts/body';


export const RouterComponent = () => {


  return (
    <BrowserRouter>
     <Header />
      <BodyContainer>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.podcast} element={<PodcastScene />} />
        <Route path={switchRoutes.episode} element={<EpisodeScene />} />
        <Route path="*" element={<Navigate to="/" />} />      
      </Routes>
      </BodyContainer>
      
    </BrowserRouter>
  );
};