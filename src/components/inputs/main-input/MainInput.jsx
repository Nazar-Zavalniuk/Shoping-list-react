import React, {useCallback, useContext, useState} from 'react';
import './MainInput.css';
import PrimaryButton from '../../button/PrimaryButton';
import PrimaryInput from '../primary-input/PrimaryInput';
import {ContextApp} from '../../../context/ContextApp';

function MainInput(props) {
  const {items, setItems} = useContext(ContextApp);
  const [value, setValue] = useState('');

  const addItems = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        setItems([
          ...items,
          {id: Date.now(), marked: {state: false, class: ''}, text: value, price: ''},
        ]);
        setValue('');
      }
    },
    [items, value, setItems],
  );

  const addItemsByBtn = useCallback(() => {
    setItems([
      ...items,
      {id: Date.now(), marked: {state: false, class: ''}, text: value, price: ''},
    ]);
    setValue('');
  }, [items, value, setItems]);

  return (
    <div className='main-input'>
      <div className='main-input-body'>
        <PrimaryInput
          onKeyDown={addItems}
          onChange={(e) =>
            setValue(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
          }
          value={value}
          className={['input', 'item-input']}
          placeholderText={'Enter a new item'}
        />
        <PrimaryButton onClick={addItemsByBtn} className={['btn', 'enter']}>
          Enter
        </PrimaryButton>
      </div>
    </div>
  );
}

export default MainInput;
