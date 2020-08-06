import { createContext, useContext } from 'react';

import { IConfirmationModal, IModal } from './interfaces/modal.interface';

interface IModalContext {
  showModal: (args: IModal) => void;
  showConfirmationModal: (args: IConfirmationModal) => void;
  hideModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
  showModal: () => undefined,
  showConfirmationModal: () => undefined,
  hideModal: () => undefined,
});

export const useModal = () => useContext(ModalContext);
