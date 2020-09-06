import classNames from 'classnames';
import React, { useCallback, useState, FC } from 'react';

import { useLanguage } from 'shared/context/language/language.context';
import { Button } from '../button/button';
import { Typography } from '../typography/typography';
import { useStyles } from './modal.style';

interface IModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<IModalProps> = ({ title, isOpen, onClose, children }) => {
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

  return isOpen ? (
    <div className={classNames(root, { 'is-hiding': isHiding })}>
      <div className="modal-backdrop" onClick={handleCloseModal} />
      <div className="modal-content">
        <div className="modal-header">
          <Typography variant="label" bold={true}>
            {title}
          </Typography>
          <Button variant="primary-text" onClick={handleCloseModal}>
            {languageTranslation.cancel}
          </Button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  ) : null;
};
