import React, {useContext} from 'react';
import './ListItem.css';
import Checkbox from '../checkbox/Checkbox';
import PrimaryInput from '../inputs/primary-input/PrimaryInput';
import PrimaryButton from '../button/PrimaryButton';
import {ContextApp} from '../../context/ContextApp';

function ListItem(props) {
  const {theme} = useContext(ContextApp);

  return (
    <li className={`list-item ${theme}`}>
      <div className='list-item-body'>
        <Checkbox />
        <div className='list-item-text'>
          <span className={`text ${theme}`}>{props.listItemText}</span>
        </div>
        <div className='white-space'></div>
        <div className='input-price'>
          <PrimaryInput
            className={['input', 'price']}
            placeholderText={'Set a price'}
          />
        </div>
        <PrimaryButton className={['btn', 'delete']} text='Delete' />
      </div>
    </li>
  );
}

export default ListItem;
