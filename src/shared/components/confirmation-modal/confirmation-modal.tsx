import classNames from 'classnames';
import React, { useCallback, useState, FC } from 'react';

import { useLanguage } from '../../context/language/language.context';
import { Button } from '../button/button';
import { Typography } from '../typography/typography';
import { useStyles } from './confirmation-modal.style';

interface IConfirmationModalProps {
  title: string;
  isOpen: boolean;
  buttonText: string;
  onClick: () => void;
  onClose: () => void;
}

export const ConfirmationModal: FC<IConfirmationModalProps> = ({
  title,
  isOpen,
  buttonText,
  onClick,
  onClose,
}) => {
  const { languageTranslation } = useLanguage();
  const [isHiding, setIsHiding] = useState(false);
  const { root } = useStyles();

  const handleCloseModal = useCallback(() => {
    setIsHiding(true);
    setTimeout(() => {
      onClose();
      setIsHiding(false);
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = useCallback(() => {
    handleCloseModal();
    onClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClick]);

  return isOpen ? (
    <div className={classNames(root, { 'is-hiding': isHiding })}>
      <div className="modal-backdrop" onClick={handleCloseModal} />
      <div className="modal-content">
        <div className="modal-body">
          <Typography variant="caption">{title}</Typography>
          <Button variant="error-text" onClick={handleClick}>
            {buttonText}
          </Button>
        </div>
        <div className="modal-footer">
          <Button variant="primary-text" onClick={handleCloseModal}>
            {languageTranslation.cancel}
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};
