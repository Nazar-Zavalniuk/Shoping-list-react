import classNames from 'classnames';
import React, {useContext} from 'react';
import './PrimaryButton.css';
import {ContextApp} from '../../context/ContextApp';

function PrimaryButton({...props}) {
  const {theme} = useContext(ContextApp);
  const btnClass = classNames(props.className);

  return (
    <button {...props} className={`${btnClass} ${theme}`}>
      <span className='text-btn'>{props.text}</span>
    </button>
  );
}

export default PrimaryButton;
