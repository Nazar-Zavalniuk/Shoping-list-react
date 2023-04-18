import classNames from 'classnames';
import React from 'react';
import './PrimaryButton.css';

function PrimaryButton(props) {
  const btnClass = classNames(props.className);

  return (
    <button className={btnClass} onClick={props.onHandleClick}>
      <span className='text-btn'>{props.text}</span>
    </button>
  );
}

export default PrimaryButton;
