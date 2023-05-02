import React, {useCallback, useContext} from 'react';
import './List.css';
import ListItem from '../list-item/ListItem';
import PrimaryButton from '../button/PrimaryButton';
import {ContextApp} from '../../context/ContextApp';

function List(props) {
  const {items, setItems, isModalWindowActive, setIsModalWindowActive} = useContext(ContextApp);

  const openWindowConfirm = useCallback(() => {
    setIsModalWindowActive({...isModalWindowActive, confirm: 'active'});
  }, [isModalWindowActive, setIsModalWindowActive]);

  const removeItem = useCallback(
    (item) => {
      setItems(items.filter((element) => element.id !== item.id));
    },
    [items, setItems],
  );

  return (
    <div className='item-list'>
      <ul className='list'>
        {items.map((item, index) => (
          <ListItem
            removeItem={removeItem}
            item={item}
            indexItem={index}
            key={item.id}
            listItemText={item.text}
          />
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
