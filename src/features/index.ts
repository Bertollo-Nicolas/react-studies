import { lazy } from 'react';

export interface Feature {
  name: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

export const features: Feature[] = [
  {
    name: 'Toggling Multiple UI Elements',
    path: '/use-reducer/modal-management',
    component: lazy(() => import('./useReducer/ModalReducer')),
  },
];