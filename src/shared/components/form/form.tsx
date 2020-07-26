import React, { FormEvent, FC } from 'react';

interface IFormProps {
  onSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  className?: string;
}

export const Form: FC<IFormProps> = ({ onSubmit, className, children }) => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
);
