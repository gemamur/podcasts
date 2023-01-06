interface SwitchRoutes {
  root: string;
  podcast: string;
  episode: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  podcast: '/podcast/:id',
  episode: '/podcast/:id/episode/:idEpisode',
};
