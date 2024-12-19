import React, {useCallback} from 'react';
import './Information.css';
import PrimaryModalWindow from '../primary-modal-window/PrimaryModalWindow';
import PrimaryInput from '../../inputs/primary-input/PrimaryInput';
import PrimaryButton from '../../button/PrimaryButton';
import useAppState from '../../../context/hook/useAppState';
import classNames from 'classnames';

function Information(props) {
  const {items, setItems, isModalWindowActive, setIsModalWindowActive} = useAppState();
  const {information} = isModalWindowActive;
  const className = classNames('information', information.class);

  const closeWindow = useCallback(() => {
    setIsModalWindowActive({
      information: {...information, class: ''},
      confirm: '',
    });
    setTimeout(() => {
      setIsModalWindowActive({
        information: {class: '', text: '', price: '', indexItem: null},
        confirm: '',
      });
    }, 250);
  }, [setIsModalWindowActive, information]);

  const validator = useCallback(
    (e) => {
      const price = e.target.value.replace(',', '.');

      if (!isNaN(price)) {
        setIsModalWindowActive({
          information: {...information, price},
          confirm: '',
        });
      }
    },
    [information, setIsModalWindowActive],
  );

  const saveAndCloseWindow = useCallback(() => {
    const newItems = [...items];
    const indexItem = information.indexItem;
    const item = items[indexItem];
    const price = information.price;

    newItems.splice(indexItem, 1, {...item, price});
    setItems(newItems);
    closeWindow();
  }, [items, setItems, information.indexItem, information.price, closeWindow]);

  const roundPrice = useCallback(() => {
    const price = information.price;
    const [integer = '', fraction = ''] = price.split('.');

    if (price !== '' && fraction.length >= 2) {
      setIsModalWindowActive({
        information: {...information, price: integer + '.' + fraction.slice(0, 2)},
        confirm: '',
      });
    } else if (price !== '' && fraction.length === 1) {
      setIsModalWindowActive({
        information: {...information, price: integer + '.' + fraction + '0'},
        confirm: '',
      });
    } else if (price !== '') {
      setIsModalWindowActive({
        information: {...information, price: integer + '.00'},
        confirm: '',
      });
    }
  }, [setIsModalWindowActive, information]);

  const blur = useCallback((e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }, []);

  return (
    <PrimaryModalWindow className={className}>
      <div className='information-text'>{information.text}</div>
      <div className='input-block'>
        <PrimaryInput
          onBlur={roundPrice}
          onKeyDown={blur}
          onChange={validator}
          value={information.price}
          className='input price-clone'
          placeholderText='Set a price'
        />
      </div>
      <div className='information-buttons'>
        <div className='information-buttons-body'>
          <PrimaryButton onClick={saveAndCloseWindow} className='btn save'>
            Save
          </PrimaryButton>
          <PrimaryButton onClick={closeWindow} className='btn cancel'>
            Cancel
          </PrimaryButton>
        </div>
      </div>
    </PrimaryModalWindow>
  );
}

export default Information;
