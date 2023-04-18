import React from 'react';
import './MainInput.css';
import PrimaryButton from '../../button/PrimaryButton';
import PrimaryInput from '../primary-input/PrimaryInput';

function MainInput(props) {
  return (
    <div className='main-input'>
      <div className='main-input-body'>
        <PrimaryInput
          className={['input', 'item-input']}
          placeholderText={'Enter a new item'}
        />
        <PrimaryButton className={['btn', 'enter']} text='Enter' />
      </div>
    </div>
  );
}

export default MainInput;
