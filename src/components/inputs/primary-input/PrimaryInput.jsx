import classNames from 'classnames';
import React, {useContext} from 'react';
import './PrimaryInput.css';
import {ContextApp} from '../../../context/ContextApp';

function PrimaryInput({placeholderText, className, value, ...props}) {
  const {theme} = useContext(ContextApp);
  const classNameInput = classNames(className);

  return (
    <div className='input-body'>
      <input
        {...props}
        value={value}
        type='text'
        className={`${classNameInput} ${theme}`}
        required
      />
      <div className={`placeholder ${theme}`}>{placeholderText}</div>
    </div>
  );
}

export default PrimaryInput;
