import React from 'react';
import './Checkbox.css';
import useAppState from '../../context/hook/useAppState';
import classNames from 'classnames';

function Checkbox({marked, stopPropagation, ...props}) {
  const {theme} = useAppState();
  const classNameLabel = classNames('checkbox-body', theme);
  const classNameInput = classNames('checkbox-btn', theme);
  const classNameCheckmark = classNames('checkmark', theme);

  return (
    <div onClick={stopPropagation} className='checkbox'>
      <label className={classNameLabel}>
        <input {...props} checked={marked} type='checkbox' className={classNameInput} />
        <div className={classNameCheckmark}></div>
      </label>
    </div>
  );
}

export default Checkbox;
