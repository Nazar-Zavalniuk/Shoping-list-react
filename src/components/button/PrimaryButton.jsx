import classNames from 'classnames';
import React from 'react';
import './PrimaryButton.css';
import useAppState from '../../context/hook/useAppState';

function PrimaryButton({children, ...props}) {
  const {theme} = useAppState();
  const btnClass = classNames(props.className, theme);

  return (
    <button {...props} className={btnClass}>
      <span className='text-btn'>{children}</span>
    </button>
  );
}

export default PrimaryButton;
