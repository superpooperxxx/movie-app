import React, { ChangeEvent, FocusEvent } from 'react';
import cn from 'classnames';

import stylesForm from '../../AuthForm.module.scss';

interface Props {
  touched: boolean | undefined;
  error: string | undefined;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent) => void;
  handleBlur: (e: FocusEvent) => void;
}

const Input: React.FC<Props> = ({
  touched,
  error,
  id,
  type,
  placeholder,
  value,
  handleChange,
  handleBlur,
}) => {
  return (
    <label
      className={cn(stylesForm['auth-form__label'], {
        [stylesForm['auth-form__label--error']]: touched && error,
      })}
    >
      <span className={stylesForm['auth-form__error-text']}>
        {touched && error}
      </span>
      <input
        id={id}
        type={type || 'text'}
        className={stylesForm['auth-form__input']}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </label>
  );
};

export default Input;
