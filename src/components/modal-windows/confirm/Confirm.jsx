import React, {useCallback} from 'react';
import './Confirm.css';
import PrimaryModalWindow from '../primary-modal-window/PrimaryModalWindow';
import PrimaryButton from '../../button/PrimaryButton';
import useAppState from '../../../context/hook/useAppState';
import classNames from 'classnames';

function Confirm(props) {
  const {isModalWindowActive, setIsModalWindowActive, setItems} = useAppState();
  const className = classNames('confirm', isModalWindowActive.confirm);

  const closeWindow = useCallback(() => {
    setIsModalWindowActive({...isModalWindowActive, confirm: ''});
  }, [isModalWindowActive, setIsModalWindowActive]);

  const closeWindowAndDeleteList = useCallback(() => {
    closeWindow();
    setItems([]);
  }, [setItems, closeWindow]);

  return (
    <PrimaryModalWindow className={className}>
      <div className='confirm-text'>{props.confirmText}</div>
      <div className='confirm-buttons'>
        <div className='confirm-buttons-body'>
          <PrimaryButton onClick={closeWindowAndDeleteList} className='btn yes'>
            Yes
          </PrimaryButton>
          <PrimaryButton onClick={closeWindow} className='btn no'>
            No
          </PrimaryButton>
        </div>
      </div>
    </PrimaryModalWindow>
  );
}

export default Confirm;
