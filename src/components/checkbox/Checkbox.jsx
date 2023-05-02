import React, {useContext} from 'react';
import './Checkbox.css';
import {ContextApp} from '../../context/ContextApp';

function Checkbox({marked, stopPropagation, ...props}) {
  const {theme} = useContext(ContextApp);

  return (
    <div onClick={stopPropagation} className='checkbox'>
      <label className={`checkbox-body ${theme}`}>
        <input {...props} checked={marked} type='checkbox' className={`checkbox-btn ${theme}`} />
        <div className={`checkmark ${theme}`}></div>
      </label>
    </div>
  );
}

export default Checkbox;
