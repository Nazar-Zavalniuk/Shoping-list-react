import React from 'react';
import './PrimaryButton.css';

function PrimaryButton(props) {
  return (
    <button className={props.classNames} onClick={props.onHandleClick}>
      {props.children}
    </button>
  );
}

export default PrimaryButton;
