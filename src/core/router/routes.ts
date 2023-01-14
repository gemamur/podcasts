interface SwitchRoutes {
  root: string;
  podcast_base: string;
  podcast:string;
  episode: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  podcast_base: "/podcast/",
  podcast:":id",
  episode: "/podcast/:id/episode/:idEpisode",
};
