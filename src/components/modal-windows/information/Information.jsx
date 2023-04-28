import React, {useContext, useCallback} from 'react';
import './Information.css';
import PrimaryModalWindow from '../primary-modal-window/PrimaryModalWindow';
import PrimaryInput from '../../inputs/primary-input/PrimaryInput';
import PrimaryButton from '../../button/PrimaryButton';
import {ContextApp} from '../../../context/ContextApp';

function Information(props) {
  const {isInformationActive, setIsInformationActive, information} = useContext(ContextApp);

  const closeWindow = useCallback(() => {
    setIsInformationActive('');
  }, [setIsInformationActive]);

  return (
    <PrimaryModalWindow className={`information ${isInformationActive}`}>
      <div className='information-text'>{information.text}</div>
      <div className='input-block'>
        <PrimaryInput
          value={information.value}
          className={['input', 'price-clone']}
          placeholderText={'Set a price'}
        />
      </div>
      <div className='information-buttons'>
        <div className='information-buttons-body'>
          <PrimaryButton className={'btn save'}>Save</PrimaryButton>
          <PrimaryButton onClick={closeWindow} className={'btn cancel'}>
            Cancel
          </PrimaryButton>
        </div>
      </div>
    </PrimaryModalWindow>
  );
}

export default Information;
