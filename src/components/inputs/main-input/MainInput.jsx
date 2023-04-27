import React, {useContext, useState} from 'react';
import './MainInput.css';
import PrimaryButton from '../../button/PrimaryButton';
import PrimaryInput from '../primary-input/PrimaryInput';
import {ContextApp} from '../../../context/ContextApp';

function MainInput(props) {
  const {items, setItems} = useContext(ContextApp);
  const [value, setValue] = useState('');

  function updateValue(e) {
    setValue(e.target.value);
  }

  function addItems(e) {
    if (e.keyCode === 13) {
      setItems([
        ...items,
        {active: false, id: Date.now(), text: value, value: ''},
      ]);
      setValue('');
    }
  }

  function addItemsByBtn() {
    setItems([
      ...items,
      {active: false, id: Date.now(), text: value, value: ''},
    ]);
    setValue('');
  }

  return (
    <div className='main-input'>
      <div className='main-input-body'>
        <PrimaryInput
          onKeyDown={addItems}
          onChange={updateValue}
          value={value}
          className={['input', 'item-input']}
          placeholderText={'Enter a new item'}
        />
        <PrimaryButton
          onClick={addItemsByBtn}
          className={['btn', 'enter']}
          text='Enter'
        />
      </div>
    </div>
  );
}

export default MainInput;
