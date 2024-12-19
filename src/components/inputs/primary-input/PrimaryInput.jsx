import classNames from 'classnames';
import React from 'react';
import './PrimaryInput.css';
import useAppState from '../../../context/hook/useAppState';

function PrimaryInput({placeholderText, value, ...props}) {
  const {theme} = useAppState();
  const classNameInput = classNames(props.className, theme);
  const classNamePlaceholder = classNames('placeholder', theme);

  return (
    <div className='input-body'>
      <input {...props} value={value} type='text' className={classNameInput} required />
      <div className={classNamePlaceholder}>{placeholderText}</div>
    </div>
  );
}

export default PrimaryInput;
