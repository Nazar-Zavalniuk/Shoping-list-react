import React from 'react';
import './Checkbox.css';

function Checkbox(props) {
  return (
    <div className='checkbox'>
      <label className='checkbox-body'>
        <input type='checkbox' className='checkbox-btn' />
        <div className='checkmark'></div>
      </label>
    </div>
  );
}

export default Checkbox;
