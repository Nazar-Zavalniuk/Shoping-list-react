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
          <PrimaryButton className={'btn yes'}>
            <span className='text-btn'>Yes</span>
          </PrimaryButton>
          <PrimaryButton className={'btn no'}>
            <span className='text-btn'>No</span>
          </PrimaryButton>
        </div>
      </div>
    </PrimaryModalWindow>
  );
}

export default Confirm;
