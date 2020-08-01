import { createContext, useContext } from 'react';

import { IDrawerArgs } from './interfaces/drawer.interface';

interface IDrawerContext {
  showDrawer: (args: IDrawerArgs) => void;
}

export const DrawerContext = createContext<IDrawerContext>({
  showDrawer: () => undefined,
});

export const useDrawer = () => useContext(DrawerContext);
