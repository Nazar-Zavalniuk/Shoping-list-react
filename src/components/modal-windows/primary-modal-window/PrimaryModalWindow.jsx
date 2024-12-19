import React from 'react';
import './PrimaryModalWindow.css';
import classNames from 'classnames';
import useAppState from '../../../context/hook/useAppState';

function PrimaryModalWindow(props) {
  const {theme} = useAppState();
  const classNameBlock = classNames('modal', props.className);
  const classNameBody = classNames('modal-body', props.className, theme);

  return (
    <div className={classNameBlock}>
      <div className={classNameBody}>{props.children}</div>
    </div>
  );
}

export default PrimaryModalWindow;
