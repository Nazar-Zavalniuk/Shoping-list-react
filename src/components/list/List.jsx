import React, {useCallback, useContext, useEffect, useState} from 'react';
import './List.css';
import ListItem from '../list-item/ListItem';
import PrimaryButton from '../button/PrimaryButton';
import {ContextApp} from '../../context/ContextApp';

function List(props) {
  const {items, setItems, setIsConfirmActive} = useContext(ContextApp);

  const openWindowConfirm = useCallback(() => {
    setIsConfirmActive('active');
  }, [setIsConfirmActive]);

  const removeItem = useCallback(
    (item) => {
      setItems(items.filter((element) => element.id !== item.id));
    },
    [items, setItems],
  );

  return (
    <div className='item-list'>
      <ul className='list'>
        {items.map((item) => (
          <ListItem removeItem={removeItem} item={item} key={item.id} listItemText={item.text} />
        ))}
      </ul>
      {items.length >= 3 && (
        <div className='remove-item-list'>
          <div className='remove-item-list-body'>
            <PrimaryButton onClick={openWindowConfirm} className={['btn', 'delete-all']}>
              Delete all
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
