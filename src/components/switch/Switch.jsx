import React from 'react';
import './Switch.css';

function Switch() {
  return (
    <div className='theme'>
      <div className='theme-body'>
        <div className='switch-label'>DM</div>
        <div className='switch'>
          <label className='switch-body'>
            <input type='checkbox' className='checkbox-switch' />
            <span className='slider'></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Switch;
