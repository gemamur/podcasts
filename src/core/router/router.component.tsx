import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScene, PodcastScene, EpisodeListScene, EpisodeScene } from "@/scenes";
import { switchRoutes } from "./routes";
import { Header } from "@/layouts/header";
import { BodyContainer } from '@/layouts/body';


export const RouterComponent = () => {
const xmlDetail="";

  return (
    <BrowserRouter>
     <Header />
      <BodyContainer>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.podcast_base} element={<PodcastScene />} >
          <Route path={switchRoutes.podcast} element={<EpisodeListScene />} >
            <Route path={switchRoutes.episode} element={<EpisodeScene />} />  
          </Route>
        </Route>
        <Route path="*" element={<HomeScene />} />      
      </Routes>
      </BodyContainer>
      
    </BrowserRouter>
  );
};