import React, {useContext, useState} from 'react';
import './Switch.css';
import {ContextApp} from '../../context/ContextApp';

function Switch(props) {
  const {setTheme} = useContext(ContextApp);
  const [isTogleOn, setIsTogleOn] = useState(false);

  function toggle() {
    if (isTogleOn) {
      setIsTogleOn(false);
      setTheme('');
    } else {
      setIsTogleOn(true);
      setTheme('dark-mode');
    }
  }

  return (
    <div className='theme'>
      <div className='theme-body'>
        <div className='switch-label'>{props.textLabel}</div>
        <div className='switch'>
          <label className='switch-body'>
            <input
              type='checkbox'
              className='checkbox-switch'
              checked={isTogleOn}
              onChange={toggle}
            />
            <span className='slider'></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Switch;
