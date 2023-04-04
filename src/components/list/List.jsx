import React from 'react';
import './List.css';
import ListItem from '../list-item/ListItem';
import PrimaryButton from '../button/PrimaryButton';

function List(props) {
  return (
    <div className='item-list'>
      <ul className='list'>
        <ListItem listItemText='Text 1' />
        <ListItem listItemText='Text 2' />
        <ListItem listItemText='Text 3' />
      </ul>
      <div className='remove-item-list'>
        <div className='remove-item-list-body'>
          <PrimaryButton className={['btn', 'delete-all']}>
            <span className='text-btn'>Delete all</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default List;
