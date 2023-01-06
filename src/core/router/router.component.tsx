import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {HomeScene, PodcastScene} from "@/scenes";
import { switchRoutes } from "./routes";
import { EpisodeScene } from "@/scenes/episode.scene";


export const RouterComponent = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.podcast} element={<PodcastScene />} />
        <Route path={switchRoutes.episode} element={<EpisodeScene />} />
        <Route path="*" element={<Navigate to="/" />} />      
      </Routes>
    </BrowserRouter>
  );
};