import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  podcast: string;
  episode: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  podcast: '/podcast/:id',
  episode: '/podcast/:id/episode/:episodeid',
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'podcast'> {
  podcast: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  podcast: (id) => generatePath(switchRoutes.podcast, { id }),
};