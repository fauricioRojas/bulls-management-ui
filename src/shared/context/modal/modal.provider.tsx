import React, { useCallback, useState, FC } from 'react';

import { ConfirmationModal } from 'shared/components/confirmation-modal/confirmation-modal';
import { Modal } from 'shared/components/modal/modal';
import { IConfirmationModal, IModal } from './interfaces/modal.interface';
import { ModalContext } from './modal.context';

interface IModalState {
  isModalOpen: boolean;
  isConfirmationModalOpen: boolean;
  modalConfig: IModal;
  confirmationModalConfig: IConfirmationModal;
}

export const ModalProvider: FC = ({ children }) => {
  const [
    { isModalOpen, isConfirmationModalOpen, modalConfig, confirmationModalConfig },
    setState,
  ] = useState<IModalState>({
    isModalOpen: false,
    isConfirmationModalOpen: false,
    modalConfig: {} as IModal,
    confirmationModalConfig: {} as IConfirmationModal,
  });

  const showModal = useCallback((args: IModal) => {
    setState(prevState => ({
      ...prevState,
      isModalOpen: true,
      modalConfig: args,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showConfirmationModal = useCallback((args: IConfirmationModal) => {
    setState(prevState => ({
      ...prevState,
      isConfirmationModalOpen: true,
      confirmationModalConfig: args,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hideModal = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isModalOpen: false,
      modalConfig: {} as IModal,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hideConfirmationModal = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isConfirmationModalOpen: false,
      confirmationModalConfig: {} as IConfirmationModal,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, showConfirmationModal, hideModal }}>
      {children}
      <Modal isOpen={isModalOpen} onClose={hideModal} title={modalConfig.title}>
        {modalConfig.body}
      </Modal>
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={hideConfirmationModal}
        {...confirmationModalConfig}
      />
    </ModalContext.Provider>
  );
};
