import classNames from 'classnames';
import React from 'react';
import './PrimaryButton.css';

function PrimaryButton(props) {
  const btnClass = classNames(props.className);

  return (
    <button className={btnClass} onClick={props.onHandleClick}>
      {props.children}
    </button>
  );
}

export default PrimaryButton;
