import React from 'react';
import './PrimaryModalWindow.css';
import classNames from 'classnames';

function PrimaryModalWindow(props) {
  const className = classNames(props.className);

  return (
    <div className={`modal ${className}`}>
      <div className={`modal-body ${className}`}>{props.children}</div>
    </div>
  );
}

export default PrimaryModalWindow;
