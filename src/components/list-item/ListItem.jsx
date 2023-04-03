import React from 'react';
import './ListItem.css';
import Checkbox from '../checkbox/Checkbox';
import PrimaryInput from '../inputs/primary-input/PrimaryInput';
import PrimaryButton from '../button/PrimaryButton';

function ListItem(props) {
  return (
    <li className='list-item'>
      <div className='list-item-body'>
        <Checkbox />
        <div className='list-item-text'>
          <span className='text'>{props.listItemText}</span>
        </div>
        <div className='white-space'></div>
        <div className='input-price'>
          <PrimaryInput
            className={['input', 'price']}
            placeholderText={'Set a price'}
          />
        </div>
        <PrimaryButton className={['btn', 'delete']}>
          <span className='text-btn'>Delete</span>
        </PrimaryButton>
      </div>
    </li>
  );
}

export default ListItem;
