import React from 'react';
import classNames from 'classnames';
import useAppState from '../../context/hook/useAppState';

function Wrapper(props) {
  const {theme} = useAppState();
  const className = classNames('app', theme);

  return (
    <div className={className}>
      <div className='content'>{props.children}</div>
    </div>
  );
}

export default Wrapper;
