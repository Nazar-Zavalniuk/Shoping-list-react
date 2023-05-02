import React, {useContext, useCallback} from 'react';
import './Information.css';
import PrimaryModalWindow from '../primary-modal-window/PrimaryModalWindow';
import PrimaryInput from '../../inputs/primary-input/PrimaryInput';
import PrimaryButton from '../../button/PrimaryButton';
import {ContextApp} from '../../../context/ContextApp';

function Information(props) {
  const {items, setItems, isModalWindowActive, setIsModalWindowActive} = useContext(ContextApp);

  const closeWindow = useCallback(() => {
    setIsModalWindowActive({
      information: {class: '', text: '', price: '', indexItem: null},
      confirm: '',
    });
  }, [setIsModalWindowActive]);

  const validator = useCallback(
    (e) => {
      const price = e.target.value.replace(',', '.');

      if (!isNaN(price)) {
        setIsModalWindowActive({
          information: {...isModalWindowActive.information, price},
          confirm: '',
        });
      }
    },
    [isModalWindowActive, setIsModalWindowActive],
  );

  const save = useCallback(() => {
    let newItems = [...items];
    let indexItem = isModalWindowActive.information.indexItem;
    let item = items[indexItem];
    let price = isModalWindowActive.information.price;

    newItems.splice(indexItem, 1, {...item, price});
    setItems(newItems);
    setIsModalWindowActive({
      information: {class: '', text: '', price: '', indexItem: null},
      confirm: '',
    });
  }, [
    items,
    setItems,
    isModalWindowActive.information.indexItem,
    isModalWindowActive.information.price,
    setIsModalWindowActive,
  ]);

  const roundPrice = useCallback(() => {
    let price = isModalWindowActive.information.price;

    if (price !== '') {
      setIsModalWindowActive({
        information: {...isModalWindowActive.information, price: parseFloat(price).toFixed(2)},
        confirm: '',
      });
    }
  }, [setIsModalWindowActive, isModalWindowActive.information]);

  const blur = useCallback((e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }, []);

  return (
    <PrimaryModalWindow className={`information ${isModalWindowActive.information.class}`}>
      <div className='information-text'>{isModalWindowActive.information.text}</div>
      <div className='input-block'>
        <PrimaryInput
          onBlur={roundPrice}
          onKeyDown={blur}
          onChange={validator}
          value={isModalWindowActive.information.price}
          className={['input', 'price-clone']}
          placeholderText={'Set a price'}
        />
      </div>
      <div className='information-buttons'>
        <div className='information-buttons-body'>
          <PrimaryButton onClick={save} className={'btn save'}>
            Save
          </PrimaryButton>
          <PrimaryButton onClick={closeWindow} className={'btn cancel'}>
            Cancel
          </PrimaryButton>
        </div>
      </div>
    </PrimaryModalWindow>
  );
}

export default Information;
