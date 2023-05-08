import React, {useCallback, useState} from 'react';
import './Switch.css';
import useAppState from '../../context/hook/useAppState';

function Switch(props) {
  const {setTheme} = useAppState();
  const [isTogleOn, setIsTogleOn] = useState(false);

  const toggle = useCallback(() => {
    if (isTogleOn) {
      setIsTogleOn(false);
      setTheme('');
    } else {
      setIsTogleOn(true);
      setTheme('dark-mode');
    }
  }, [isTogleOn, setIsTogleOn, setTheme]);

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
