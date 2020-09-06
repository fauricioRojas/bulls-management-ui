import { createContext, useContext } from 'react';

import { IDrawerArgs } from './interfaces/drawer.interface';

interface IDrawerContext {
  showDrawer: (args: IDrawerArgs) => void;
  hideDrawer: () => void;
}

export const DrawerContext = createContext<IDrawerContext>({
  showDrawer: () => undefined,
  hideDrawer: () => undefined,
});

export const useDrawer = () => useContext(DrawerContext);
