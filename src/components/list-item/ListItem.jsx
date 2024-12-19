import React, {useCallback} from 'react';
import './ListItem.css';
import Checkbox from '../checkbox/Checkbox';
import PrimaryInput from '../inputs/primary-input/PrimaryInput';
import PrimaryButton from '../button/PrimaryButton';
import useAppState from '../../context/hook/useAppState';
import classNames from 'classnames';

function ListItem({listItemText, removeItem, item, indexItem}) {
  const {theme, items, setItems, setIsModalWindowActive} = useAppState();
  const classNameLi = classNames('list-item', theme);
  const classNameSpan = classNames('text', theme, item.marked.class);

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const openInfoWindow = useCallback(() => {
    setIsModalWindowActive({
      information: {class: 'active', text: item.text, price: item.price, indexItem},
      confirm: '',
    });
  }, [setIsModalWindowActive, item.text, item.price, indexItem]);

  const toggle = useCallback(() => {
    const newItems = [...items];

    if (item.marked.state) {
      newItems.splice(indexItem, 1, {...item, marked: {state: false, class: ''}});
    } else {
      newItems.splice(indexItem, 1, {...item, marked: {state: true, class: 'done'}});
    }

    setItems(newItems);
  }, [items, setItems, item, indexItem]);

  const validator = useCallback(
    (e) => {
      const newItems = [...items];
      const price = e.target.value.replace(',', '.');

      if (!isNaN(price)) {
        newItems.splice(indexItem, 1, {...item, price});
        setItems(newItems);
      }
    },
    [items, setItems, item, indexItem],
  );

  const roundPrice = useCallback(() => {
    const newItems = [...items];
    const price = item.price;
    const [integer = '', fraction = ''] = price.split('.');

    if (price !== '' && fraction.length >= 2) {
      newItems.splice(indexItem, 1, {...item, price: integer + '.' + fraction.slice(0, 2)});
      setItems(newItems);
    } else if (price !== '' && fraction.length === 1) {
      newItems.splice(indexItem, 1, {...item, price: integer + '.' + fraction + '0'});
      setItems(newItems);
    } else if (price !== '') {
      newItems.splice(indexItem, 1, {...item, price: integer + '.00'});
      setItems(newItems);
    }
  }, [items, setItems, indexItem, item]);

  const blur = useCallback((e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }, []);

  return (
    <li onClick={openInfoWindow} className={classNameLi}>
      <div className='list-item-body'>
        <Checkbox stopPropagation={stopPropagation} onChange={toggle} marked={item.marked.state} />
        <div className='list-item-text'>
          <span className={classNameSpan}>{listItemText}</span>
        </div>
        <div className='white-space'></div>
        <div className='input-price'>
          <PrimaryInput
            onClick={stopPropagation}
            onKeyDown={blur}
            onChange={validator}
            onBlur={roundPrice}
            value={item.price}
            className='input price'
            placeholderText='Set a price'
          />
        </div>
        <PrimaryButton
          onClick={(e) => {
            removeItem(item);
            stopPropagation(e);
          }}
          className='btn delete'
        >
          Delete
        </PrimaryButton>
      </div>
    </li>
  );
}

export default ListItem;
