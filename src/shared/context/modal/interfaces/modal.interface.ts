import { ReactNode } from 'react';

export type ModalType = 'modal' | 'confirmation';

export interface IModal {
  title: string;
  body: ReactNode;
}

export interface IConfirmationModal {
  title: string;
  buttonText: string;
  onClick: () => void;
}
