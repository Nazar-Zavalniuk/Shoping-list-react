import React, {useContext} from 'react';
import './Checkbox.css';
import {ContextApp} from '../../context/ContextApp';

function Checkbox(props) {
  const {theme} = useContext(ContextApp);

  return (
    <div className='checkbox'>
      <label className={`checkbox-body ${theme}`}>
        <input type='checkbox' className={`checkbox-btn ${theme}`} />
        <div className={`checkmark ${theme}`}></div>
      </label>
    </div>
  );
}

export default Checkbox;
