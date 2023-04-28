import React, {useCallback, useContext, useState} from 'react';
import './ListItem.css';
import Checkbox from '../checkbox/Checkbox';
import PrimaryInput from '../inputs/primary-input/PrimaryInput';
import PrimaryButton from '../button/PrimaryButton';
import {ContextApp} from '../../context/ContextApp';

function ListItem({listItemText, removeItem, item}) {
  const {theme, setIsInformationActive, setInformation} = useContext(ContextApp);
  const [isActive, setIsActive] = useState(false);
  const [isDone, setIsDone] = useState('');
  const [price, setPrice] = useState('');

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const openInfoWindow = useCallback(() => {
    setInformation({text: item.text, value: price});
    setIsInformationActive('active');
  }, [setInformation, setIsInformationActive, item.text, price]);

  const toggle = useCallback(() => {
    setIsActive(!isActive);

    if (isDone === '') {
      setIsDone('done');
    } else setIsDone('');
  }, [isActive, isDone]);

  const validator = useCallback((e) => {
    const price = e.target.value.replace(',', '.');

    if (!isNaN(price)) {
      setPrice(price);
    }
  }, []);

  const blur = useCallback((e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }, []);

  return (
    <li onClick={openInfoWindow} className={`list-item ${theme}`}>
      <div className='list-item-body'>
        <Checkbox stopPropagation={stopPropagation} onChange={toggle} active={isActive} />
        <div className='list-item-text'>
          <span className={`text ${theme} ${isDone}`}>{listItemText}</span>
        </div>
        <div className='white-space'></div>
        <div className='input-price'>
          <PrimaryInput
            onClick={stopPropagation}
            onKeyDown={blur}
            onChange={validator}
            value={price}
            className={['input', 'price']}
            placeholderText={'Set a price'}
          />
        </div>
        <PrimaryButton
          onClick={(e) => {
            removeItem(item);
            stopPropagation(e);
          }}
          className={['btn', 'delete']}
        >
          Delete
        </PrimaryButton>
      </div>
    </li>
  );
}

export default ListItem;
