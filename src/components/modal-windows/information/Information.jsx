import React from 'react';
import './Information.css';
import PrimaryModalWindow from '../primary-modal-window/PrimaryModalWindow';
import PrimaryInput from '../../inputs/primary-input/PrimaryInput';
import PrimaryButton from '../../button/PrimaryButton';

function Information(props) {
  return (
    <PrimaryModalWindow className={'information'}>
      <div className='information-text'>{props.infoText}</div>
      <div className='input-block'>
        <PrimaryInput
          className={['input', 'price-clone']}
          placeholderText={'Set a price'}
        />
      </div>
      <div className='information-buttons'>
        <div className='information-buttons-body'>
          <PrimaryButton className={'btn save'} text='Save' />
          <PrimaryButton className={'btn cancel'} text='Cancel' />
        </div>
      </div>
    </PrimaryModalWindow>
  );
}

export default Information;
