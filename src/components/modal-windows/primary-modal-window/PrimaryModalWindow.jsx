import React, {useContext} from 'react';
import './PrimaryModalWindow.css';
import classNames from 'classnames';
import {ContextApp} from '../../../context/ContextApp';

function PrimaryModalWindow(props) {
  const {theme} = useContext(ContextApp);
  const className = classNames(props.className);

  return (
    <div className={`modal ${className}`}>
      <div className={`modal-body ${className} ${theme}`}>{props.children}</div>
    </div>
  );
}

export default PrimaryModalWindow;
