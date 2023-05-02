import React, {useContext, useCallback} from 'react';
import './Confirm.css';
import PrimaryModalWindow from '../primary-modal-window/PrimaryModalWindow';
import PrimaryButton from '../../button/PrimaryButton';
import {ContextApp} from '../../../context/ContextApp';

function Confirm(props) {
  const {isModalWindowActive, setIsModalWindowActive, setItems} = useContext(ContextApp);

  const closeWindow = useCallback(() => {
    setIsModalWindowActive({...isModalWindowActive, confirm: ''});
  }, [isModalWindowActive, setIsModalWindowActive]);

  const closeWindowAndDeleteList = useCallback(() => {
    closeWindow();
    setItems([]);
  }, [setItems, closeWindow]);

  return (
    <PrimaryModalWindow className={`confirm ${isModalWindowActive.confirm}`}>
      <div className='confirm-text'>{props.confirmText}</div>
      <div className='confirm-buttons'>
        <div className='confirm-buttons-body'>
          <PrimaryButton onClick={closeWindowAndDeleteList} className={'btn yes'}>
            Yes
          </PrimaryButton>
          <PrimaryButton onClick={closeWindow} className={'btn no'}>
            No
          </PrimaryButton>
        </div>
      </div>
    </PrimaryModalWindow>
  );
}

export default Confirm;
