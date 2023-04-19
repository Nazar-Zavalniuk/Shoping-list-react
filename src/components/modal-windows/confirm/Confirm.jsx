import React from 'react';
import './Confirm.css';
import PrimaryModalWindow from '../primary-modal-window/PrimaryModalWindow';
import PrimaryButton from '../../button/PrimaryButton';

function Confirm(props) {
  return (
    <PrimaryModalWindow className={'confirm'}>
      <div className='confirm-text'>{props.confirmText}</div>
      <div className='confirm-buttons'>
        <div className='confirm-buttons-body'>
          <PrimaryButton className={'btn yes'} text='Yes' />
          <PrimaryButton className={'btn no'} text='No' />
        </div>
      </div>
    </PrimaryModalWindow>
  );
}

export default Confirm;
